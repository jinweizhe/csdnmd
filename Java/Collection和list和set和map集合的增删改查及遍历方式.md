### Collection
```java
//Collection是单列集合的顶层接口，所有方法被List和Set系列集合共享

/*      public boolean add(E e)  把给定的对象添加到当前集合中
        public void clear() 清空集合中所有的元素
        public boolean remove(E e) 把给定的对象在当前集合中删除
        public boolean contains(object obj) 判断当前集合中是否包含给定的对象
        public boolean isEmpty() 判断当前集合是否为空
        public int size() 返回集合中元素的个数/集合的长度*/

        //注意点,collection是一个接口,不能直接创建它的对象,实现类ArrayList
        //目的:为了学习collection接口里面的方法
        //自己在做一些练习的时候，还是按照之前的方式去创建对象。
        Collection<String> coll = new ArrayList<>();

        //添加元素
        //细节1:如果我们要往List系列集合中添加数据，那么方法永远返回true，因为List系列的是允许元素重复的。
        // 细节2:如果我们要往Set系列集合中添加数据，如果当前要添加元素不存在，方法返回true，表示添加成功。如果当前要添加的元素已经存在，方法返回false，表示添加失败。因为Set系列的集合不允许重复。
        coll.add("aaa");
        coll.add("bbb");
        coll.add("ccc");

        //清空
        //coll.clear();

        //删除
        //注意:因为Collection里面定义的是共性的方法，所以此时不能通过索引进行删除。只能通过元素的对象进行删除
        //布尔类型的返回值,删除成功true,不存在就删除失败为false
        System.out.println(coll.remove("aaa"));

        //判断元素是否包含
        //细节:底层是依赖equals方法进行判断是否存在的。
        //所以，如果集合中存储的是自定义对象，也想通过contairlsj法来判断是否包含，那么在javabean类中，一定要重写equals方法。

        System.out.println(coll.contains("bbb"));

        //判断是否为空
        System.out.println(coll.isEmpty());

        //返回元素的长度
        System.out.println(coll.size());

        System.out.println(coll);
```
### List集合增删改查
```java
//List系列集合:添加的元素是有序、可重复、有索引
        //Collection的方法List都继承了
        //List集合因为有索引，所以多了很多索引操作的方法。

       /* void add(int index,E element) 在此集合中的指定位置插入指定的元素,一个参数默认是元素
        E remove(int index)  删除指定索引处的元素，返回被删除的元素
        E set(int index,E element)  修改指定索引处的元素，返回被修改的元素
        E get(int index)  返回指定索引处的元素*/

        //创建集合
        List<String> list = new ArrayList<>();
        //添加元素
        list.add("aaa");
        list.add("bbb");
        list.add("ccc");
        list.add("ddd");
        //在指定位置插入元素
        //细节:原来索引上的元素会依次往后移
        list.add(1, "qqq");

        //删除元素
        //删除指定索引处的元素，返回被删除的元素
        System.out.println(list.remove(0));

        //修改指定索引处的元素,返回被修改的元素
        String qqq = list.set(3, "QQQ");
        System.out.println(qqq);

        //通过索引获取集合元素
        String s = list.get(2);
        System.out.println(s);

        //打印集合
        System.out.println(list);
```
#### List集合遍历方式
```java
/*
            List系列集合的五种遍历方式：
                1.迭代器
                2.列表迭代器
                3.增强for
                4.Lambda表达式
                5.普通for循环
         */


        //创建集合并添加元素
        List<String> list = new ArrayList<>();
        list.add("aaa");
        list.add("bbb");
        list.add("ccc");

        //1.迭代器
        /*Iterator<String> it = list.iterator();
        while(it.hasNext()){
            String str = it.next();
            System.out.println(str);
        }*/


        //2.增强for
        //下面的变量s，其实就是一个第三方的变量而已。
        //在循环的过程中，依次表示集合中的每一个元素
       /* for (String s : list) {
            System.out.println(s);
        }*/

        //3.Lambda表达式
        //forEach方法的底层其实就是一个循环遍历，依次得到集合中的每一个元素
        //并把每一个元素传递给下面的accept方法
        //accept方法的形参s，依次表示集合中的每一个元素
        //list.forEach(s->System.out.println(s) );


        //4.普通for循环
        //size方法跟get方法还有循环结合的方式，利用索引获取到集合中的每一个元素
        /*for (int i = 0; i < list.size(); i++) {
            //i:依次表示集合中的每一个索引
            String s = list.get(i);
            System.out.println(s);
        }*/

        // 5.列表迭代器
        //获取一个列表迭代器的对象，里面的指针默认也是指向0索引的

        //额外添加了一个方法：在遍历的过程中，可以添加元素
        ListIterator<String> it = list.listIterator();
        while (it.hasNext()) {
            String str = it.next();
            if ("bbb".equals(str)) {
                //qqq
                it.add("qqq");
            }
        }
        System.out.println(list);
```
### Set集合遍历(增删改查和Collection的API一致)
```java
//Set系列集合:添加的元素是无序、不重复、无索引
        //HashSet:无序、不重复、无索引
        //LinkedHashSet:有序、不重复、无索引
        // TreeSet:可排序、不重复、无索引
        //Set接口中的方法上基本上与Collection的API一致。

        //利用set系列的集合，添加字符串，并使用多种方式遍历。迭代器
        //增强for
        //Lambda表达式
        
        
        /*      public boolean add(E e)  把给定的对象添加到当前集合中
        public void clear() 清空集合中所有的元素
        public boolean remove(E e) 把给定的对象在当前集合中删除
        public boolean contains(object obj) 判断当前集合中是否包含给定的对象
        public boolean isEmpty() 判断当前集合是否为空
        public int size() 返回集合中元素的个数/集合的长度*/


        //创建set实现类对象
        //这里用多态形式添加
        Set<String> s = new HashSet<>();
        //添加元素
        boolean b1 = s.add("张三");
        boolean b2 = s.add("张三");
        boolean b3 = s.add("王五");
        boolean b4 = s.add("李四");
        boolean b5 = s.add("麻子");
        System.out.println(b1);//true添加成功
        System.out.println(b2);//false添加失败(set的不重复性)
        //打印集合
        //无序
        System.out.println(s);//[李四, 张三, 麻子, 王五]运行看和添加的顺序比较,会发现顺序不一样

        //迭代器遍历
        Iterator<String> iterator = s.iterator();
        while (iterator.hasNext()) {
            String next = iterator.next();
            System.out.println(next);
        }

        //增强for遍历
        for (String s1 : s) {
            System.out.println(s1);
        }

        //Lambda表达式遍历
        s.forEach(s2 -> System.out.println(s2));
```
   #### 扩展
   ###### 增强for遍历
   ```java
   //增强for的底层就是迭代器，为了简化迭代器的代码书写的。
        //它是JDK5之后出现的，其内部原理就是一个Iterator迭代器
        //所有的单列集合和数组才能用增强for进行遍历。

        //格式:
        //for(元素的数据类型 变量名 : 数组或者集合){}

        //1.创建集合并添加元素
        Collection<String> coll = new ArrayList<>();
        coll.add("aaa");
        coll.add("bbb");
        coll.add("ccc");
        coll.add("ddd");
        //2.利用增强for进行遍历
        //注意点:
        //s其实就是一个第三方变量，在循环的过程中依次表示集合中的每一个数据,就是记录数据,因此,修改增强for中的变量，不会改变集合中原本的数据。
        //快捷键coll.for+enter
        for (String s : coll) {
            s = "eee";
        }
        System.out.println(coll);
   ```
 ###### 迭代器遍历
 ```java
 //迭代器在Java中的类是lterator，迭代器是集合专用的遍历方式

        //collection获取迭代器
        //Iterator<E> iterator() 返回迭代器对象，默认指向当前集合的0索引

        //Iterator中的常用方法
        //boolean hasNext() 判断当前位置是否有元素，有元素返回true ,没有元素返回false
        //E next() 获取当前位置的元素，并将迭代器对象移向下一个位置。

        //创建集合并添加元素
        Collection<String> coll = new ArrayList<>();
        coll.add("aaa");
        coll.add("bbb");
        coll.add("ccc");
        coll.add("ddd");
        //获取迭代器对象
        //迭代器好比一个箭头,默认指向集合的0索引处
        Iterator<String> it = coll.iterator();
        while (it.hasNext()) {//判断当前值是否有元素,返回布尔值
            //next()的两件事情,获取元素并移动指针
            //有元素就将指针移到下一个位置上
            String str = it.next();//获取到下一个元素值
            if ("bbb".equals(str)) {
                it.remove();
            }
        }
        System.out.println(coll);
        /*细节注意点:
        1，报错NoSuchElementException
        2，迭代器遍历完毕，指针不会复位
        3，循环中只能用一次next方法
        4，迭代器遍历时，不能用集合的方法进行增加或者删除,可以用迭代器的remove方法移除*/

        //当上面循环结束之后，迭代器的指针已经指向了最后没有元素的位置
        //System.out.println(it.next());//NoSuchElementException
        //迭代器遍历完毕,指针不会复位
        //System.out.println(it.hasNext());//false
        ////如果我们要继续第二次遍历集合，只能再次获取一个迭代器对象
        //Iterator<String> it2 = coll.iterator();
        //while (it2.hasNext()) {//判断当前值是否有元素,返回布尔值
        //    //next()的两件事情,获取元素和移动指针
        //    //有元素就将指针移到下一个位置上
        //    String str = it2.next();//获取到下一个元素值
        //    System.out.println(str);
        //}
 ```
   ###### lambda表达式遍历
   ```java
   //1.创建集合并添加元素
        Collection<String> coll = new ArrayList<>();
        coll.add("aaa");
        coll.add("bbb");
        coll.add("ccc");
        coll.add("ddd");

        //利用匿名内部类的形式
        //底层原理:
        //其实也会自己遍历集合，依次得到每一个元素//把得到的每一个元素，传递给下面的accept方法

        //coll.forEach(new Consumer<String>() {
        //    @Override
        //    //s依次表示集合中的每一个数据
        //    public void accept(String s) {
        //        System.out.println(s);
        //    }
        //});

        
        //lambda表达式
        coll.forEach(s -> System.out.println(s));
   ```
### Map集合增删改查和遍历(hashmap方法同map相同)
##### 增删改查
```java
     //常用API

        //双列集合一次需要存一对数据，分别为键和值
        //键不能重复，值可以重复
        //键和值是一一对应的，每一个键只能找到自己对应的值
        //键＋值这个整体我们称之为“键值对”或者“键值对对象”,在Java中叫做“Entry对象”

//        Map是双列集合的顶层接口，它的功能是全部双列集合都可以继承使用的
//
//        vput(K key,v value) 添加元素
//        v remove(object key) 根据键删除键值对元素
//        void clear() 移除所有的键值对元素
//        boolean containsKey(object key) 判断集合是否包含指定的键
//        boolean containsValue(object value) 判断集合是否包含指定的值
//        boolean isEmpty() 判断集合是否为空
//        int size() 集合的长度，也就是集合中键值对的个数

        //创建map集合的对象
        Map<String,String> m=new HashMap<>();
        //2.添加元素
        //put方法的细节
        //添加/覆盖
        String v1 = m.put("喜洋洋", "2");
        m.put("萧寂","10");
        m.put("灰太狼","12");
        m.put("慢羊羊","24");
//        String v2= m.put("喜洋洋", "24");//会发现同名的把前面的覆盖了
//        //添加数据的时候，如果键不存在，那么直接把键值对对象添加到map集合当中
//        //在添加数据的时候，如果键是存在的，那么会把原有的键值对对象覆盖，会把被覆盖的值进行返回。
//        //添加操作,v1没有被覆盖数据,所以返回值为null
//        System.out.println(v1);
//        System.out.println(v2);

        //删除数据
        String h = m.remove("灰太狼");
        System.out.println(h);

        //清空集合
        // m.clear();

        //判断是否包含
        System.out.println(m.containsKey("慢羊羊"));//键,true
        System.out.println(m.containsValue("24"));//值,true

        //返回长度
        System.out.println(m.size());

        //判断是否为空
        System.out.println(m.isEmpty());

        //3.打印集合
        System.out.println(m);
```
##### map遍历方式
```java
//第一种方式(键找值)
        //第二种方式(键值对对象)
        //创建对象
        Map<String,String> m=new HashMap<>();
        //添加元素
        m.put("张三","男");
        m.put("李四","女");
        m.put("王五","妖");
        m.put("麻子","鬼");
        /*//第一种方式:通过键找值
        //将所有的键放到单列集合中
        Set<String> keys = m.keySet();
        //遍历单列集合set,得到每一个键
        for (String key : keys) {
            //System.out.println(key);
            //利用map集合的键获取每一个对应的值,get
            String s = m.get(key);
            System.out.println(key+"="+s);
        }*/


        //第二种遍历方式:通过键值对 对象遍历
        //通过一个方法获取所有的键值对对象,返回一个set集合
        Set<Map.Entry<String, String>> e = m.entrySet();
        //遍历e这个集合,去得到里面每一个键值对对象
        for (Map.Entry<String, String> map : e) {
            //利用entry调用get方法获取键和值
            String key = map.getKey();
            String value = map.getValue();
            System.out.println(key+"="+value);
        }
        System.out.println(m);

        //第三种遍历方式
		//利用lambda表达式遍历
        m.forEach((key,value)-> System.out.println(key+"="+value));
```