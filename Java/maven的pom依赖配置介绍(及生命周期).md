### 依赖模板
```pom
 <dependencies>
        <dependency>
            <groupId>ch.qos.logback</groupId>
            <artifactId>logback-classic</artifactId>
            <version>1.4.4</version>
            <scope>test</scope>  
            <exclusions>
                <!--排除依赖-->
                <exclusion>
                    <groupId>org.slf4j</groupId>
                    <artifactId>slf4j-api</artifactId>
                </exclusion>
            </exclusions>
        </dependency>
    </dependencies>
```
#####  其中基础依赖配置
```pom
 <dependencies>
        <dependency>
            <groupId>ch.qos.logback</groupId>
            <artifactId>logback-classic</artifactId>
            <version>1.4.4</version>
        </dependency>
    </dependencies>
```
##### 排除依赖项(每个依赖下都有很多依赖,这个如果用不到就需要排除)[具体可以查看这个视频教程](https://www.bilibili.com/video/BV1m84y1w7Tb?p=55&vd_source=54b92ea953eb0a7281545e66410fc2f5)
```pom
           <exclusions>
                <!--排除依赖-->
                <exclusion>
                    <groupId>org.slf4j</groupId>
                    <artifactId>slf4j-api</artifactId>
                </exclusion>
            </exclusions>
```
#### 依赖范围(scope)
参数项
| scope值       | 主程序 | 测试程序 | 打包(运行) | 范例        |
| ------------- | ------ | -------- | ---------- | ----------- |
| compile(默认) | Y      | Y        | Y          | log4j       |
| test          | -      | Y        | -          | junit       |
| provided      | Y      | Y        | -          | servlet-api |
| runtime       | -      | Y        | Y          | jdbc驱动    |

```pom
 <scope>test</scope>
```

> 依赖的jar包，默认情况下，可以在任何地方使用。可以通过< scope>...</ scope>
> 设置其作用范围
> 作用范围:
> 主程序范围有效。(main文件夹范围内)
> 测试程序范围有效。(test文件夹范围内)
> 是否参与打包运行。(package指令范围内)

##### 生命周期
Maven的生命周期就是为了对所有的maven项目构建过程进行抽象和统一。

Maven中有3套相互独立的生命周期：
clean：清理工作。
default：核心工作，如：编译、测试、打包、安装、部署等。
site：生成报告、发布站点等。

每套生命周期包含一些阶段（phase)，阶段是有顺序的，后面的阶段依赖于前面的阶段。

![在这里插入图片描述](https://img-blog.csdnimg.cn/d0be4cdf418d4ddeac0ef43a2fefcd3e.png)

clean:移除上一次构建生成的文件
compile:编译项目源代码
test:使用合适的单元测试框架运行测试(unit)
package:将编译后的文件打包，如：jar、war等
install:安装项目到本地仓库

clean：清理
compile：编译
test：测试
package：打包
install：安装

**和idea右边maven的几个阶段一样,重点关注以上五个阶段**
![在这里插入图片描述](https://img-blog.csdnimg.cn/91f4ebbadc8741f7bfa006aed9e09e2f.png)
**注意事项
在同一套生命周期中，当运行后面的阶段时，前面的阶段都会运行。如运行package阶段时前面的test和compile阶段也会执行**

执行指定生命周期的两种方式：
在idea中，右侧的maven工具栏，选中对应的生命周期，双击执行。
在命令行中，通过命令执行
![在这里插入图片描述](https://img-blog.csdnimg.cn/ebd4022354404c3ebdb77256eacc3f6b.png)