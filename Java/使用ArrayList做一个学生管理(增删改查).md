### 实体类代码
```java
package com.jwz.集合.学生管理系统;

public class Student {
    private String id;
    private String name;
    private int age;
    private String address;


    public Student() {
    }

    public Student(String id, String name, int age, String address) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.address = address;
    }

    /**
     * 获取
     *
     * @return id
     */
    public String getId() {
        return id;
    }

    /**
     * 设置
     *
     * @param id
     */
    public void setId(String id) {
        this.id = id;
    }

    /**
     * 获取
     *
     * @return name
     */
    public String getName() {
        return name;
    }

    /**
     * 设置
     *
     * @param name
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * 获取
     *
     * @return age
     */
    public int getAge() {
        return age;
    }

    /**
     * 设置
     *
     * @param age
     */
    public void setAge(int age) {
        this.age = age;
    }

    /**
     * 获取
     *
     * @return address
     */
    public String getAddress() {
        return address;
    }

    /**
     * 设置
     *
     * @param address
     */
    public void setAddress(String address) {
        this.address = address;
    }

    public String toString() {
        return "Student{id = " + id + ", name = " + name + ", age = " + age + ", address = " + address + "}";
    }
}

```
### 测试类代码
```java
package com.jwz.集合.学生管理系统;

import java.util.ArrayList;
import java.util.Scanner;

public class test {
    public static void main(String[] args) {
        ArrayList<Student> list = new ArrayList<>();
        loop:
        while (true) {
            System.out.println("-----欢迎来到萧寂系统------");
            System.out.println("1.添加学生");
            System.out.println("2.删除学生");
            System.out.println("3.修改学生");
            System.out.println("4.查询学生");
            System.out.println("5.退出学生");
            System.out.println("请输入你的选择");
            Scanner sc = new Scanner(System.in);
            String choose = sc.next();
            switch (choose) {
                case "1":
                    add(list);
                    break;
                case "2":
                    delete(list);
                    break;
                case "3":
                    update(list);
                    break;
                case "4":
                    select(list);
                    break;
                case "5":
                    System.out.println("退出学生");
                    System.exit(0);//第一种停止方法:停止虚拟机运行
                    //break loop;//第二种停止方法:给while循环加个loop:,可以指定跳出这个大循环,否则这里的break只能跳出swich这个循环
                default:
                    System.out.println("没有这个选项");
                    break;
            }
        }
    }

    //添加学生
    public static void add(ArrayList<Student> list) {
        Student s = new Student();
        Scanner sc = new Scanner(System.in);
        String id = null;
        while (true) {
            System.out.println("请输入学生id");
            id = sc.next();
            boolean weiyi = weiyi(list, id);
            if (weiyi) {
                //表示存在,需要重新录入
                System.out.println("id已存在,需要重新录入");
            } else {
                //表示不存在
                s.setId(id);
                break;
            }
        }
        System.out.println("请输入学生姓名");
        String name = sc.next();
        s.setName(name);
        System.out.println("请输入学生年龄");
        int age = sc.nextInt();
        s.setAge(age);
        System.out.println("请输入学生家庭住址");
        String address = sc.next();
        s.setAddress(address);

        //把学生对象添加到集合当中
        list.add(s);

        //提示
        System.out.println("添加成功");
    }

    //删除学生
    public static void delete(ArrayList<Student> list) {
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入要删除的id");
        String id = sc.next();
        //查询id在集合中的索引
        int getindex = getindex(list, id);
        //对返回值进行判断
        //大于0存在,小于0不存在
        if (getindex >= 0) {
            list.remove(getindex);
            System.out.println("id为" + id + "的学生删除成功");
        } else {
            System.out.println("id不存在,删除失败");
        }
    }

    //修改学生
    public static void update(ArrayList<Student> list) {
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入要修改的id");
        String id = sc.next();

        int index = getindex(list, id);
        if (index == -1) {
            System.out.println("要修改的id" + id + "不存在");
        }

        //当代码执行到这里，表示什么?表示当前id是存在的。
        // 获取要修改的学生对象
        Student stu = list.get(index);
        //输入其他的信息并修改
        System.out.println("请输入学生姓名");
        String next = sc.next();
        stu.setName(next);

        System.out.println("请输入要修改的学生年龄");
        int age = sc.nextInt();
        stu.setAge(age);

        System.out.println("请输入学生家庭住址");
        String next1 = sc.next();
        stu.setAddress(next1);
        //学生信息修改成功
        System.out.println("学生信息修改成功");
    }

    //查询学生
    public static void select(ArrayList<Student> list) {
        if (list.size() == 0) {
            System.out.println("无当前学生信息");
            //结束方法
            return;
        }

        //打印表头信息
        System.out.println("id\t\t姓名\t年龄\t家庭住址");
        //当代码执行到这里表示集合中是有数据的
        for (int i = 0; i < list.size(); i++) {
            Student student = list.get(i);
            System.out.println(student.getId() + "\t" + student.getName() + "\t" + student.getAge() + "\t" + student.getAddress());
        }
    }

    //判断id为一(在集合是否存在)
    public static boolean weiyi(ArrayList<Student> list, String id) {
        ////循环遍历得到每个学生对象
        ////拿到对象根据id判断
        ////存在true不存在false
        //for (int i = 0; i < list.size(); i++) {
        //    Student student = list.get(i);
        //    String sid = student.getId();
        //    if (sid.equals(id)) {
        //        return true;
        //    }
        //}
        ////不存在返回false
        //return false;

        //这段代码可以服用下面的方法
        //小于0为false,其他返回true
        return getindex(list, id) >= 0;
    }

    //通过id获取索引
    public static int getindex(ArrayList<Student> list, String id) {
        for (int i = 0; i < list.size(); i++) {
            //得到每个学生对象
            Student s = list.get(i);
            //得到每个学生对象的id
            String id1 = s.getId();
            //集合中的和查询的进行比较
            if (id1.equals(id)) {
                //如果一样返回索引
                return i;
            }
        }
        //找不到返回-1
        return -1;
    }
}

```