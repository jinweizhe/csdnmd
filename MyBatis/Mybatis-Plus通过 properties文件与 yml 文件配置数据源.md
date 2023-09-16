## Mybatis-Plus通过 properties文件与 yml 文件配置数据源
### 1.pom.xml中添加依赖
#### 添加jdbc依赖
```xml
 <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-jdbc</artifactId>
</dependency>
```
#### MySQL的jdbc驱动
```xml
<dependency>
       <groupId>mysql</groupId>
       <artifactId>mysql-connector-java</artifactId>
       <version>5.1.34</version>
</dependency>
```
### 2.application.properties配置文件
```xml
#数据库连接配置
spring.datasource.driver-class-name=com.mysql.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/数据库名
spring.datasource.password=密码
spring.datasource.username=用户名

spring.datasource.initialSize=5                   //初始化连接数
spring.datasource.minIdle=5                       //最大空闲连接
spring.datasource.maxActive=20                    //最大连接数量
spring.datasource.maxWait=60000                   //最小空闲连接
```
### 3.application.yml文件配置文件
```yml
spring:
  datasource:
    driver-class-name: com.mysql.jdbc.Driver
    url: jdbc:mysql://localhost:3306/s数据库名
    username: 用户名
    password: 密码
#mybatis-plus配置
mybatis-plus:
    #配置Mapper映射文件
    mapper-locations: classpath:/mybatis/mappers/*.xml
    # 配置Mybatis数据返回类型别名（默认别名为类名）
    type-aliases-package: com.yunnuo.server.pojo
    configuration:
        # 自动驼峰命名
        map-underscore-to-camel-case: false

#配置控制台打印日志Debug
logging:
    level:
        com.jd.mapper: debug


```
### 4.乱码问题
如果数据库连接或者插入或修改数据中文时出现乱码可以在数据库连接url后面加上useUnicode=true&&characterEncoding=utf-8