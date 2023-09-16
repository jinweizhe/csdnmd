application配置
```xml
#mysql8 的需要设置时区
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/ssm_ysd?useSSL=false&useUnicode=true&characterEncoding=UTF-8&serverTimezone=GMT%2B8
spring.datasource.username=root
spring.datasource.password=admin
##打印sql
logging.level.com.system.mapper=debug
mybatis.mapper-locations=classpath:mapper/*Mapper.xml
mybatis.type-aliases-package=com.ssm__ysd.entity
```