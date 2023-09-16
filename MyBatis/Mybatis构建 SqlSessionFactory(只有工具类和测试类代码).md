## Mybatis构建 SqlSessionFactory

## 基本注释代码都有

uitl类代码：
```java
package com.jwz.uitl;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.io.IOException;
import java.io.InputStream;

public class Uitl {
    //加载流和下方调用方法都需要sqlSessionFactory调用
    public static SqlSessionFactory sqlSessionFactory;
    static {
        try {
            //使用mybatis的第一步，获取SqlSessionFactory对象
            //获取配置文件
            String resource = "mybatis-config.xml";
            //getResourceAsStream记得thy catch一下
            InputStream inputStream = Resources.getResourceAsStream(resource);
            //通过build加载流，
            sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    //有了SqlSessionFactory，然后就可以从中获得sqlsession的实例了.
    //sqlsession完全包含了面向数据库执行sql命令的1所有方法
    public static SqlSession getsqlsession(){
       return sqlSessionFactory.openSession();
    }
}
```
Text(测试类)代码：
```java
package com.jwz.text;

import com.jwz.dao.Userdao;
import com.jwz.eneity.User;
import com.jwz.uitl.Uitl;
import org.apache.ibatis.session.SqlSession;
import org.junit.Test;

import java.util.List;

public class Text {
    @Test
    public void test(){
        //获取getsqlsession对象 Uitl为工厂类名,getsqlsession为uitl的方法名
        SqlSession sqlsession = Uitl.getsqlsession();
        //通过调用getmapper,调用持久层mapper
        Userdao mapper = sqlsession.getMapper(Userdao.class);
        //通过mapper调用mapper里面的方法，例如delete updete selete update，这里以返回多个为例
        List<User> getlist = mapper.getlist();
        //通过getlist.for遍历
        for (User user : getlist) {
            //输出user
            System.out.println(user);
        }
        //提交事务,除了查询以外，增删改都需要提交事务
        sqlsession.commit();
        //关闭sqlsession
        sqlsession.close();
    }
}
```