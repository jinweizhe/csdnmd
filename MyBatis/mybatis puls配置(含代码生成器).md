# 创建一个springboot项目，添加以下依赖
```pml
		--mybatis puls的启动类依赖
		<dependency>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus-boot-starter</artifactId>
            <version>3.5.1</version>
        </dependency>
        
        --MySQL连接驱动
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
        </dependency>
        
        --druid连接池
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid</artifactId>
            <version>1.1.14</version>
        </dependency>
```
 ## 在application.properties里面配置以下，如果有其他需要自行添加
```properties
spring.datasource.driverClassName=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/ssm_ysd?serverTimezone=UTC&useUnicode=true&characterEncoding=utf-8&useSSL=true
spring.datasource.username=root
spring.datasource.password=123456

spring.datasource.type=com.alibaba.druid.pool.DruidDataSource
```
#### 以上就是mybatis puls的配置
# 代码生成器配置
### 在pom.xml里面配置以下两个依赖
```xml 
		--代码生成器依赖
		<dependency>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus-generator</artifactId>
            <version>3.5.2</version>
        </dependency>

		--模板引擎启动类
		<dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-freemarker</artifactId>
            <version>2.1.1.RELEASE</version>
        </dependency>
```
## 在test里面与测试类同级处创建一个mybatisplus类，或者创建一个config包，在里面创建mybatisplus类，粘贴以下代码，根据需要去修改代码或者路径即可
```java
package com.example.demo.config;

import com.baomidou.mybatisplus.generator.FastAutoGenerator;
import com.baomidou.mybatisplus.generator.config.OutputFile;
import com.baomidou.mybatisplus.generator.engine.FreemarkerTemplateEngine;

import java.util.Collections;

public class MybatisPlus {
    public static void main(String[] args) {
        FastAutoGenerator.create("jdbc:mysql://localhost:3306/ssm_ysd?serverTimezone=UTC&useUnicode=true&characterEncoding=utf-8&useSSL=true", "root", "admin")
                .globalConfig(builder -> {
                    builder.author("xj") // 设置作者
                           // .enableSwagger() // 开启 swagger 模式，我这里注释掉了，如果有需要可以开启
                            .fileOverride() // 覆盖已生成文件
                            .outputDir("J:\\IDEA项目文件\\spring\\demo\\src\\main\\java"); // 指定输出目录，右键包名复制根目录即可
                })
                .packageConfig(builder -> {
                    builder.parent("com.example") // 设置父包名
                            .moduleName("system") // 设置父包模块名
                            .pathInfo(Collections.singletonMap(OutputFile.xml, "J:\\IDEA项目文件\\spring\\demo\\src\\main\\resources\\mapper")); // 设置mapperXml生成路径
                })
                .strategyConfig(builder -> {
                    builder.addInclude("users"); // 设置需要生成的表名
                            //.addTablePrefix("t_", "c_"); // 设置过滤表前缀
                })
                .templateEngine(new FreemarkerTemplateEngine()) // 使用Freemarker引擎模板，默认的是Velocity引擎模板
                .execute();
    }
}
```
### 然后运行这个生成器的mian方法即可生成