> 功能为:
> 用户注册(用户名3-15位,不能是纯数字,密码随意没校验)
> 用户登录(验证密码)
> 忘记密码(验证身份证和手机号)
> 校验身份证或手机号(从集合中获取)
> 生成随机验证码(利用字符和阿斯克码渲染,用到了random随机类)
> 校验密码(判断输入的和集合中是否相同)
> 以下是实体类和text代码(完整)

#### 实体类
```java
package com.jwz.集合.学生管理系统;

public class User {
    private String username;
    private String password;
    private String personID;
    private String phoneNumber;

    public User(String username, String password, String personID, String phoneNumber) {
        this.username = username;
        this.password = password;
        this.personID = personID;
        this.phoneNumber = phoneNumber;
    }

    public User() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPersonID() {
        return personID;
    }

    public void setPersonID(String personID) {
        this.personID = personID;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}

```
#### 测试类
```java
package com.jwz.集合.学生管理系统;

import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        ArrayList<User> list = new ArrayList<>();
        Scanner sc = new Scanner(System.in);
        while (true) {
            System.out.println("欢迎来到学生管理系统");
            System.out.println("请选择操作：1登录 2注册 3忘记密码");
            String choose = sc.next();
            switch (choose) {
                case "1":
                    login(list);
                    break;
                case "2":
                    register(list);
                    break;
                case "3":
                    forgetPassword(list);
                    break;
                case "4":
                    System.out.println("谢谢使用，再见");
                    System.exit(0);
                    break;
                default:
                    System.out.println("没有这个选项");
                    break;
            }
        }
    }

    //注册需要填写的参数
    private static void register(ArrayList<User> list) {
        //用户名，密码，身份证号码，手机号码放到用户对象中
        //用户名唯一
        //用户名长度必须在3~15位之间
        //只能是字母加数字的组合，但是不能是纯数字

        //用户名长度必须在3~15位之间
        //只能是字母加数字的组合，但是不能是纯数字
        Scanner sc = new Scanner(System.in);
        String name;
        String pwd;
        String card;
        String phonenumber;
        while (true) {
            System.out.println("请输入用户名");
            name = sc.next();
            //判断用户名
            boolean flag1 = checkUsername(name);
            if (!flag1) {
                System.out.println("用户名格式不满足条件,请重新输入");
                continue;
            }

            //检验用户名唯一
            //name到集合中判断是否有存在
            boolean flsg2 = contains(list, name);
            if (flsg2) {
                //表示已存在,需要重新输入
                System.out.println("用户名" + name + "已存在,请重新输入");
            } else {
                System.out.println("用户名" + name + "可用");
                break;
            }
        }

        //2.键盘录入密码.
        //密码键盘输入两次，两次一致才可以进行注册。
        while (true) {
            System.out.println("请输入要注册的密码");
            pwd = sc.next();
            System.out.println("请再次输入要注册的密码");
            String pwd1 = sc.next();
            if (!pwd.equals(pwd1)) {
                System.out.println("两次密码输入不一致");
                continue;
            } else {
                System.out.println("两次密码一致,继续录入其他数据");
                break;
            }
        }

        //3.键盘录入身份证号码
        //验证要求:
        //长度为18位不能以0为开头
        //前17位，必须都是数字
        // 最为一位可以是数字,也可以是大写x或小写x
        while (true) {
            System.out.println("请输入身份证号码");
            card = sc.next();
            boolean flag = checkPersonID(card);
            if (flag) {
                System.out.println("身份证满足要求");
                break;
            } else {
                System.out.println("身份证不满足要求");
                continue;
            }
        }


        //4键盘录入手机号码
        while (true) {
            System.out.println("请输入手机号码");
            phonenumber = sc.next();
            boolean flag = checkPhonenumber(phonenumber);
            if (flag) {
                System.out.println("手机号码格式正确");
                break;
            } else {
                System.out.println("手机号码格式错误");
                continue;
            }
        }

        //用户名,密码,身份证号码,手机号码放到用户对象中
        User user = new User(name, pwd, card, phonenumber);
        //将对象添加到集合中
        list.add(user);
        System.out.println("注册成功");

        //遍历集合
        printList(list);
    }

    //遍历集合
    private static void printList(ArrayList<User> list) {
        for (int i = 0; i < list.size(); i++) {
            User user = list.get(i);
            System.out.println(user.getUsername() + "," + user.getPassword() + "," + user.getPersonID() + "," + user.getPhoneNumber());
        }
    }

    //校验手机号
    private static boolean checkPhonenumber(String phonenumber) {
        //长度为11位
        if (phonenumber.length() != 11) {
            return false;
        }
        //不以零开头
        if (phonenumber.startsWith("0")) {
            return false;
        }
        //必须都是数字
        for (int i = 0; i < phonenumber.length(); i++) {
            char c = phonenumber.charAt(i);
            if (!(c >= '0' && c <= '9')) {
                return false;
            }
        }
        //循环结束,代表都在0-9之内
        return true;
    }

    //校验身份证
    private static boolean checkPersonID(String card) {
        //校验身份证
        if (card.length() != 18) {
            return false;
        }
        //不以零开头
        boolean flag = card.startsWith("0");//匹配开头元素
        if (flag) {
            return false;
        }
        //前十七位必须为数字
        for (int i = 0; i < card.length() - 1; i++) {
            char c = card.charAt(i);
            if (!(c >= '0' && c <= '9')) {
                return false;
            }
        }
        //最后一位可以是数字,也可以是大小写X
        char endchar = card.charAt(card.length() - 1);
        if ((endchar >= '0' && endchar <= '9') || (endchar == 'x') || (endchar == 'X')) {
            return true;
        } else {
            return false;
        }

    }

    //判断用户名的唯一性
    private static boolean contains(ArrayList<User> list, String name) {
        //循环遍历集合得到每一个用户对象
        //拿着用户对象中的用户名进行比较
        for (int i = 0; i < list.size(); i++) {
            User user = list.get(i);
            String rightusername = user.getUsername();
            if (rightusername.equals(name)) {
                return true;
            }
        }
        //当循环结束了,表示集合的用户都比较完了
        return false;
    }

    //判断用户名长度
    private static boolean checkUsername(String name) {
        //用户名长度必须在3~15位之间
        if (name.length() < 3 || name.length() > 15) {
            //不符合要求
            return false;
        }
        //当代码执行到这里，表示用户名的长度是符合要求的。
        // 继续校验:只能是字母加数字的组合，但是不能是纯数字
        //循环得到usenname里面的每一个字符，如果有一个字符不是字母或者数字，那么就返回false
        for (int i = 0; i < name.length(); i++) {
            char c = name.charAt(i);
            if (!((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9'))) {
                return false;
            }
        }

        //到这里表示代码满足长度和内容
        //不能是纯数字
        //统计用户名中有多少字母就可以了
        int count = 0;
        for (int i = 0; i < name.length(); i++) {
            char c = name.charAt(i);
            if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) {
                count++;
                break;
            }
        }
        return count > 0;//当count>0代表有字母,不是纯数字

    }

    //忘记密码
    private static void forgetPassword(ArrayList<User> list) {
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入用户名");
        String username = sc.next();
        boolean flag = contains(list, username);
        if (!flag) {
            System.out.println("当前用户" + username + "未注册,请先注册");
            return;
        }
        //键盘录入身份证号码和手机号码
        System.out.println("请输入身份证号码");
        String personId = sc.next();
        System.out.println("请输入手机号码");
        String phonenumber = sc.next();
        //比较用户对象中的手机号码和身份证号码是否相同
        // 需要把用户对象通过索引先获取出来。User
        int index = findIndex(list, username);
        User user = list.get(index);
        //进行比较
        if (!(user.getPersonID().equals(personId) && user.getPhoneNumber().equals(phonenumber))) {
            System.out.println("身份证或手机号有误,不能找回密码");
            return;
        }
        String next;
        //当代码执行到这里,表示所有数据全部验证成功,直接修改即可
        while (true) {
            System.out.println("请输入新的密码");

            next = sc.next();
            System.out.println("请再次输入新的密码");
            String next1 = sc.next();
            if (next.equals(next1)) {
                System.out.println("两次密码一致");
                break;
            } else {
                System.out.println("两次密码不一致,请重新输入");
                continue;
            }
        }
        //密码判断完,直接修改即可
        user.setPassword(next);
        System.out.println("密码修改成功");
    }

    private static int findIndex(ArrayList<User> list, String username) {
        for (int i = 0; i < list.size(); i++) {
            User user = list.get(i);
            if (user.getUsername().equals(username)) {
                return i;
            }
        }
        return -1;
    }

    //登录方法
    private static void login(ArrayList<User> list) {
        Scanner sc = new Scanner(System.in);

        //
        for (int i = 0; i < 3; i++) {
            System.out.println("请输入用户名");
            String username = sc.next();
            //检测是否包含
            boolean contains = contains(list, username);
            if (!contains) {
                System.out.println("用户名" + username + "不存在,请先注册");
                return;
            }

            //下面是输入成功的结果
            System.out.println("请输入密码");
            String password = sc.next();

            while (true) {
                //获取验证码
                String rightCode = getCode();
                System.out.println("当前验证码为" + rightCode);//打印验证码
                System.out.println("请输入验证码");
                String code = sc.next();
                if (code.equals(rightCode)) {
                    System.out.println("验证码正确");
                    break;
                } else {
                    System.out.println("验证码错误");
                    continue;
                }
            }

            //验证用户名和密码是否正确
            //集合中是否包含用户名和密码
            //定义一个方法验证用户名和密码是否正确

            //封装思想的利用
            //我们可以把一些零散的数据,封装成一个对象
            //以后传递参数只要传递一个整体就可以了,不需要管这些零散的数据
            User user = new User(username, password, null, null);
            boolean users = checkUserInfo(list, user);
            if (users) {
                System.out.println("登陆成功");
                break;
            } else {
                if (i == 2) {
                    System.out.println("当前账号" + username + "被锁定,请联系萧寂");
                    return;
                } else {
                    System.out.println("用户名或密码错误,还剩下" + (2 - i) + "次机会");
                }
            }
        }
    }

    ////遍历集合，判断用户是否存在，如果存在登录成功，如果不存在登录失败
    private static boolean checkUserInfo(ArrayList<User> list, User user) {

        for (int i = 0; i < list.size(); i++) {
            User user1 = list.get(i);
            if (user1.getUsername().equals(user.getUsername()) && user1.getPassword().equals(user.getPassword())) {
                return true;
            }
        }
        return false;
    }

    //生成验证码
    public static String getCode() {
        //由4位大写或者小写字母和1位数字组成，同一个字母可重复数字可以出现在任意位置
        //创建一个集合添加所有的大写和小写字符
        ArrayList<Character> list = new ArrayList<>();
        for (int i = 0; i < 26; i++) {
            list.add((char) ('a' + i));//字符利用阿斯克码
            list.add((char) ('A' + i));//字符利用阿斯克码
        }

        StringBuilder sb = new StringBuilder();
        //2.随机抽取四个字符
        Random random = new Random();
        for (int i = 0; i < 4; i++) {
            //获取随机索引
            int i1 = random.nextInt(list.size());
            //利用随机索引获取字符
            Character c = list.get(i1);
            //得到后直接拼接,这里使用stringbuilder
            sb.append(c);
        }
        //3.把一个随机数字添加到末尾
        int num = random.nextInt(10);
        sb.append(num);

        //4.如果我们要修改字符串中的内容
        //先把字符串变成字符数组，在数组中修改，然后再创建一个新的字符串
        char[] chars = sb.toString().toCharArray();
        //拿随机索引跟最后一个索引交换
        int rondemindex = random.nextInt(chars.length);
        //最大索引指向的元素,跟随机索引指向的元素交换
        char temp = chars[rondemindex];
        chars[rondemindex] = chars[chars.length - 1];
        chars[chars.length - 1] = temp;

        return new String(chars);
    }
}

```