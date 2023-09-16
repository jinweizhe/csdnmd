#### xml设置
创建项目需要勾选下图的创建xml(适用于3.0以下版本,3.0以上的可以跳过使用下面的注解开发)
![在这里插入图片描述](https://img-blog.csdnimg.cn/31d9e48ff2e149b18b2e0d571ebbefce.png)
创建完项目后,找到web---WEB-INF---web.xml配置以下代码
```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"
         version="3.1">
        <!--  配置servlet路径  -->
    <servlet>
        <!--    起名    -->
        <servlet-name>demo1</servlet-name>
        <!--   配置全类名(全限定名)     -->
        <servlet-class>com.jwz.web.servlet.ServletDemo01</servlet-class>
        <!--
        指定servlet的创建时机
        1.第一次被访问时创建
        <load-on-startup>的值为负数
        2.在服务器启动时创建
        <load-on-statup>的值为日或正整数
        启动服务器,注意初始化方法打印的值
        -->
        <load-on-startup>0</load-on-startup>
    </servlet>
    <!--  配置servlet的mapping -->
    <servlet-mapping>
        <!--下面名字和上面保持一致-->
        <servlet-name>demo1</servlet-name>
        <!--路径-->
        <url-pattern>/xiaoji</url-pattern>
    </servlet-mapping>
</web-app>
```
#### 注解开发
```java
@WebServlet() //配置访问的路径,无需配置xml,类似xml的url-pattern
@WebServlet(value = "/lujing")
@WebServlet(urlPatterns = "/lujing") //以上两种方式均可以配置访问路径
//一般默认使用value,因为value可以省略,所以可以简写下面形式
@WebServlet("/lujing")
```
#### servlet结构说明
```java
@webservlet("/xiaoji")
public class ServletDemo01 implements Servlet {

    /**
     * 初始化方法
     * 在servlet被创建时,只会执行一次
     * @param servletConfig
     * @throws ServletException
     */
    @Override
    public void init(ServletConfig servletConfig) throws ServletException {
        System.out.println("init.........");
    }

    /**
     * 获取ServletConfig对象
     * ServletConfig:servlet的配置对象
     * @return
     */
    @Override
    public ServletConfig getServletConfig() {
        return null;
    }

    /**
     *提供服务方法
     * 每一次servlet被访问时执行,执行多次
     * @param servletRequest
     * @param servletResponse
     * @throws ServletException
     * @throws IOException
     */
    @Override
    public void service(ServletRequest servletRequest, ServletResponse servletResponse) throws ServletException, IOException {
        System.out.println("hello servlet");
    }


    /**
     * 获取servlet的一些信息
     * @return
     */
    @Override
    public String getServletInfo() {
        return null;
    }

    /**
     *销毁方法
     *服务器正常关闭时执行,执行一次
     */
    @Override
    public void destroy() {
        System.out.println("destroy....");
    }
}
```
#### 路径的设置
```java
package com.jwz.servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

//定义多个路径,以下三个路径均可以访问

/**
 * 路径定义规则
 *  /XXX
 *  /XXX/XXX:多层路径,目录结构
 *  *.xiaoji
 */
//@WebServlet({"/d4","/dd4","/ddd4"})
//@WebServlet("/user/demo04")//多层路径
//@WebServlet("/user/*")//多层路径最后一层为任意匹配路径
//@WebServlet("/*")//为任意匹配路径
  @WebServlet("*.xiaoji")//任意字段.xiaoji才能访问
public class ServletDemo04 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("demo04....");
    }
}

```
#### 继承关系

> 直接继承GenericServlet,相当于只需要重写servlet的service方法

```java
public class ServletDemo02 extends GenericServlet {
    @Override
    public void service(ServletRequest servletRequest, ServletResponse servletResponse) throws ServletException, IOException {
        System.out.println("servlet02");
    }
}
```


> 继承HttpServlet有两个方法分别监听get和post的请求
```java
@WebServlet("/xiaoji1")
public class ServletDemo03 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("doget");
    }
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("dopost");
    }
}
```
##### 在继承的HttpServlet中的request获取请求行数据的方法
> 		1. 获取请求方式 ：GET
> 					* String getMethod()
> 				2. 获取虚拟目录：/day14
> 					* String getContextPath()
> 				3. 获取Servlet路径: /demo1
> 					* String getServletPath()
> 				4. 获取get方式请求参数：name=zhangsan
> 					* String getQueryString()
> 				5. 获取请求URI：/day14/demo1
> 					* String getRequestURI():		/day14/demo1
> 					* StringBuffer getRequestURL()  :http://localhost/day14/demo1
> 					* URL:统一资源定位符 ： http://localhost/day14/demo1	
> 					* URI：统一资源标识符 : /day14/demo1	
> 				6. 获取协议及版本：HTTP/1.1
> 					* String getProtocol()
> 				7. 获取客户机的IP地址：
> 					* String getRemoteAddr()

```java
@WebServlet("/demo01")
public class demo01 extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //发送请求为Get，这里使用doget
        //获取请求方式：GET
        System.out.println(request.getMethod());
        //获取虚拟目录:/servlet_war_exploded
        System.out.println(request.getContextPath());
        //获取servlet路径:/demo01
        System.out.println(request.getServletPath());
        //获取get请求参数:name=zhangsan&age=28
        System.out.println(request.getQueryString());
        //获取请求的URI:/servlet_war_exploded/demo01
        System.out.println(request.getRequestURI());
        //获取请求的URL:http://localhost:8080/servlet_war_exploded/demo01
        System.out.println(request.getRequestURL());
        //获取协议及版本:HTTP/1.1
        System.out.println(request.getProtocol());
        //获取客户机的ip地址:0:0:0:0:0:0:0:1
        System.out.println(request.getRemoteAddr());
    }
}
```
##### 在继承的HttpServlet中的request获取请求头数据的方法

> *  String getHeader(String name):通过请求头的名称获取请求头的值
> 			* Enumeration<String> getHeaderNames():获取所有的请求头名称


##### 在继承的HttpServlet中的request获取请求体数据的方法

> 请求体：只有POST请求方式，才有请求体，在请求体中封装了POST请求的请求参数
> 		* 步骤：
> 			1. 获取流对象
> 				*  BufferedReader getReader()：获取字符输入流，只能操作字符数据
> 				*  ServletInputStream getInputStream()：获取字节输入流，可以操作所有类型数据
> 					* 在文件上传知识点后讲解
> 			2. 再从流对象中拿数据

##### 其他功能：
		1. 获取请求参数通用方式：不论get还是post请求方式都可以使用下列方法来获取请求参数
			1. String getParameter(String name):根据参数名称获取参数值    username=zs&password=123
			2. String[] getParameterValues(String name):根据参数名称获取参数值的数组  hobby=xx&hobby=game
			3. Enumeration<String> getParameterNames():获取所有请求的参数名称
			4. Map<String,String[]> getParameterMap():获取所有参数的map集合
			5.中文乱码问题：
				* get方式：tomcat 8 已经将get方式乱码问题解决了
				* post方式：会乱码
					* 解决：在获取参数前，设置request的编码request.setCharacterEncoding("utf-8");
		""
		请求转发：一种在服务器内部的资源跳转方式
			1. 步骤：
				1-1. 通过request对象获取请求转发器对象：RequestDispatcher getRequestDispatcher(String path)
				1-2. 使用RequestDispatcher对象来进行转发：forward(ServletRequest request, ServletResponse response) 
			2. 特点：
				2-1. 浏览器地址栏路径不发生变化
				2-2. 只能转发到当前服务器内部资源中。
				2-3. 转发是一次请求
				3. 共享数据：
			3-1. 域对象：一个有作用范围的对象，可以在范围内共享数据
			3-2. request域：代表一次请求的范围，一般用于请求转发的多个资源中共享数据
			3-3. 方法：
				3-3-1. void setAttribute(String name,Object obj):存储数据
				3-3-2. Object getAttitude(String name):通过键获取值
				3-3-3. void removeAttribute(String name):通过键移除键值对
		4. 获取ServletContext：
			4-1. ServletContext getServletContext()