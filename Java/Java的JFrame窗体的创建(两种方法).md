### 第一种直接创建
```java
package com.jwz.h综合项目;

import javax.swing.*;

public class Test {
    public static void main(String[] args) {
     //创建宽高
        jFrame.setSize(488, 580);
        //创建窗口对象
        JFrame jFrame = new JFrame();
        jFrame.setTitle("拼图游戏");//设置标题
        jFrame.setAlwaysOnTop(true);//压过其他软件,放置最上方
        jFrame.setLocationRelativeTo(null);//设置居中打开
        jFrame.setDefaultCloseOperation(3);//设置关闭游戏(这里的关闭指Java虚拟机运行也关闭,不是视觉上的关闭)
        //设置窗口是否显示,默认为false
        jFrame.setVisible(true);//建议放到所有设置最后写
    }
}
```
### 第二种通过子类继承JFrame创建
##### 实体类代码
```java
package com.jwz.h综合项目;

import javax.swing.*;

public class login extends JFrame {
    //代表跟当前窗体有关的代码都放到这里
    //创造一个无参,存入相关的属性(例如宽高),代表创造界面时去设置这个窗体相关信息,直接展示出来
    public login() {
        //继承JFrame来的,直接用父类的属性
        this.setSize(488, 430);
        this.setTitle("拼图游戏");//设置标题
        this.setAlwaysOnTop(true);//压过其他软件,放置最上方
        this.setLocationRelativeTo(null);//设置居中打开
        this.setDefaultCloseOperation(3);//设置关闭游戏(这里的关闭指Java虚拟机运行也关闭,不是视觉上的关闭)
        this.setVisible(true);//是否显示界面,建议放到所有设置最后写
        //最后去测试类创建这个对象直接运行就行,运行时就会加载界面
    }
}
```
##### 测试类代码
```java
package com.jwz.h综合项目;

public class Test {
    public static void main(String[] args) {
        new login();
    }
}
```
##### 注意,导入宽高属性有两个选项,要选择两个参数的这个![在这里插入图片描述](https://img-blog.csdnimg.cn/f30406d6c3cd4184be98142f2893e596.png)
| 代码                        | 说明                                                         |
| --------------------------- | ------------------------------------------------------------ |
| setSize                     | 设置宽高(宽,高)                                              |
| setVisible                  | 窗体是否显示(布尔类型)                                       |
| setTitle                    | 设置标题("标题名")                                           |
| setAlwaysOnTop              | 设置是否置顶(压过其他软件,布尔类型)                          |
| setLocationRelativeTo(null) | 设置界面默认居中打开                                         |
| setDefaultCloseOperation()  | 设置关闭游戏(这里的关闭指Java虚拟机运行也关闭,不是视觉上的关闭,参数0,1,2,3),0:不做反应无响应,    1:默认值,关闭页面不关闭虚拟机 2:有多个界面时,每个界面都要进行此项设置为2,代表关闭全部窗口才关闭此页面, 3:当有多个界面时关闭其中一个,就关闭虚拟机运行,相当于所有的都关闭了,单独界面相当于直接结束界面了 |
### 创建菜单

> JMenuBar类似html的ul父类
> 子类里面有一个个Jmenu对象,类似ul下每个小li
> Jmenu里面有JMenuItem,类似每个li又包了一个ul2下拉框
> ![在这里插入图片描述](https://img-blog.csdnimg.cn/391e704de3744a4b8a4c0b783df3902e.png)
##### 流程
![在这里插入图片描述](https://img-blog.csdnimg.cn/3907570792a4476cb77ffe11ca0aebe1.png)
##### 创建菜单代码(写在setVisible前面(建议在创建宽高和是否显示中间写),这个是否显示放到整个窗口设置的最下面)
###### 菜单样式
![在这里插入图片描述](https://img-blog.csdnimg.cn/64ad276c15094045954835353ee2a0dc.png)
###### 代码展示
```java
        //初始化菜单
        //创建整个菜单的对象
        JMenuBar jMenuBar = new JMenuBar();
        //创建菜单上面的两个选项的对象(功能,关于我们)
        JMenu functionJMenu = new JMenu("功能");
        JMenu aboutJMenu = new JMenu("关于我们");
        //创建选项下面的条目对象
        JMenuItem replayItem = new JMenuItem("重新游戏");
        JMenuItem reLoginItem = new JMenuItem("重新登录");
        JMenuItem closeItem = new JMenuItem("关闭游戏");

        JMenuItem accountItem = new JMenuItem("公众号");
        //将每一个选项下面的条目通过父模块打点add添加到选项当中
        //功能模块内用功能对象去调用
        functionJMenu.add(replayItem);
        functionJMenu.add(reLoginItem);
        functionJMenu.add(closeItem);

        //公众号添加到关于我们
        aboutJMenu.add(accountItem);

        //将菜单里面的两个选项(功能,关于我们)添加到菜单下
        jMenuBar.add(functionJMenu);
        jMenuBar.add(aboutJMenu);

        //给整个界面设置菜单
        this.setJMenuBar(jMenuBar);
```
###### 初始化图片
```java
//初始化图片
    private void initIMage() {
        //创建一个inageicon图片对象
        ImageIcon imageIcon = new ImageIcon("D:\\javademo\\javaproject\\xiaoji\\demo01\\image\\animal\\animal1\\3.jpg");
        //创建一个管理容器(JLabel对象)
        JLabel jLabel = new JLabel(imageIcon);
        //指定位置和图片宽高
        jLabel.setBounds(0, 0, 105, 105);

        //把管理容器添加到界面中
        //this.add(jLabel);
        //先获取隐藏的容器再添加
        this.getContentPane().add(jLabel);
    }
```