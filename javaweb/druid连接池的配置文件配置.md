```java
driverClassName=com.mysql.jdbc.Driver
url=jdbc:mysql://localhost:3306/xiaoji(库名)
username=root
password=admin

上面必写
---------------------------------------------
下面视情况而定

# 初始化连接数量
initialSize=5
# 最大连接数
maxActive=10
# 最小连接数量
minIdle=5
# 最大等待时间
maxWait=3000
```