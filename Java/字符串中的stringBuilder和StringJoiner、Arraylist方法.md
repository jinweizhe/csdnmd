> 小拓展:idea的ptg插件可快速生成get,set

### StringBuilder
> append(任意类型) 添加数据，并返回对象本身
>    reverse() 反转容器中的内容
>    length() 返回长度(字符出现的个数)
>    toString()  通过toString(就可以实现把StringBuilder转换为String

##### stringBuilder类
```java
构造方法：
	public stringBuilder():构造一个空的stringBuilder容器
	public stringBuilder(String str):构造一个StringBuilder容器，并将str添加进去

成员方法：
	public StringBuilder append(Object obj):添加任意类的字符串形式，并返回当前对象
		eg.
			StringBuilder sb1 = new StringBuilder();
			sb1.append(1);
			StringBuilder sb2 = sb1.append("abc");//sb2 == sb1
			//由于返回值为当前对象，所以可以进行链式编程
			sb1.append(1).append("abc").append(true);
	public String toString():将当前StringBuilder对象转换为String对象
	public StringBuilder reverse():反转内容，将容器中的每一个字母反转，eg."abcd"-->"dcba"

```

> 1.String–>StringBuilder：可以使用StringBuilder的构造方法。
> StringBuilder(String str)：构造一个字符串生成器，并初始化为指定的字符串内容。
> 2.StringBuilder–>String：可以使用StringBuilder中的toString方法。
> public String toString()：将当前StringBuilder对象转换为String对象。

```java
public class Demo_1{
		public static void main(String[] args){
			String str1 = "Hello ";
			//String转换为StringBuilder
			StringBuilder builder = StringBuilder(str1);
		
			//向StringBuilder中添加字符串
			builder.append("World!");

			//StringBuilder转换为String
			String str2 = builder.toString();
		}
	}

```
### StringJoiner 
```java
   public StringJoiner (间隔符号)
        创建一个StringJoiner对象，指定拼接时的间隔符号

        public StringJoiner (间隔符号，开始符号，结束符号)
        创建一个StringJoiner对象，指定拼接时的间隔符号、开始符号、结束符号

        格式
        Stringoiner sj = new StringJoiner( ",","[","]");//参数一中间符号,参数二:开始连接符,参数三结尾连接符

        public StringJoiner add (添加的内容)     添加数据，并返回对象本身
        public int length ()     返回长度（字符出现的个数)
        public String toString ()  返回一个字符串(该字符串就是拼接之后的结果)
```
#### 例子
```java
//1.创建对象
        StringJoiner sj = new StringJoiner(",", "[", "]");
        //参数一:中间符号
        //参数二:开始符号
        //参数三:结束符号
        //2.添加元素
        sj.add("aaa").add("bbb").add("ccc");
        //3.打印
        System.out.println(sj);

        //4.转换tostring
        String str = sj.toString();
        System.out.println(str);
```
### ArrayList的方法
| 方法名               | 说明                                |
| -------------------- | ----------------------------------- |
| boolean add(E e)     | 添加元素，返回值表示是否添加成功    |
| boolean remove(E e)  | 删除指定元素,返回值表示是否删除成功 |
| Eremove(int index)   | 删除指定索引的元素,返回被删除元素   |
| E set(int index,E e) | 修改指定索引下的元素,返回原来的元素 |
| E get(int index)     | 获取指定索引的元素                  |
| int size()           | 集合的长度，也就是集合中元素的个数  |