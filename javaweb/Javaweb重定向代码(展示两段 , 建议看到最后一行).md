##### demo01
```java
@WebServlet("/cdx01")
public class demo01完成重定向 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //访问doget自动调用dopost方法
        this.doPost(req,resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("demo01被访问了");
        //访问demo01会自动跳转到demo02完成重定向.java文件
        //1.设置状态码为302
            resp.setStatus(302);
        //2.设置响应头location
        //参数一为:响应头名称
        //参数二为:虚拟目录加上另一文件的响应路径
        //动态获取虚拟目录
        String contextPath=
        resp.setHeader("location","/xiaoji/cdx02");
    }
}
```
##### demo02
```java
@WebServlet("/cdx02")
public class demo02完成重定向 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doPost(req,resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("demo02被访问了");
    }
}
```
启动服务器,访问/cdx01会发现同时打印两个java文件内的输出语句,并且当访问时cdx01时,路径会自动跳转到cdx02路径
##### demo01的dopost里面重定向的
```java
 		//1.设置状态码为302
            resp.setStatus(302);
        //2.设置响应头location
        //参数一为:响应头名称
        //参数二为:虚拟目录加上另一文件的响应路径
        resp.setHeader("location","/xiaoji/cdx02");
```
##### 可以换成如下代码(较简单且虚拟目录动态改变,二者效果等同)
```java
		//动态获取虚拟目录
        String contextPath=request.getContextPath();
 		//简单的重定向方法
        resp.sendRedirect(contextPath+"/cdx02");
```