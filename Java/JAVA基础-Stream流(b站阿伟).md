
[java进阶所有笔记可以看这个哥们的](https://blog.csdn.net/hdakj22/category_12235095.html)

# 一、初识Stream流
![在这里插入图片描述](https://img-blog.csdnimg.cn/ab7be0681c55463b90bf55bc5e904c4a.png)
**通过下面代码，显然我们清晰的看到使用Stream流更为方便，而使用普通的集合遍历就有些复杂。**
```java
public class Test01 {
	public static void main(String[] args) {
		ArrayList<String> list1 = new ArrayList<>();
		list1.add("张无忌");
		list1.add("周正若");
		list1.add("赵斌");
		list1.add("张强");
		list1.add("张三丰");
 
		// Stream流
		list1.stream().filter(name -> name.startsWith("张")).filter(name -> name.length() == 3)
				.forEach(name -> System.out.println(name));
		// 张无忌
		// 张三丰
 
		// 1.把所有“张”姓开头元素存储到新集合
		ArrayList<String> list2 = new ArrayList<>();
		for (String name : list1) {
			if (name.startsWith("张")) {
				list2.add(name);
			}
		}
		System.out.println(list2); // [张无忌, 张强, 张三丰]
 
		// 2.把所有“张”姓开头且长度为3的元素存储到新集合
		ArrayList<String> list3 = new ArrayList<>();
		for (String name : list2) {
			if (name.length() == 3) {
				list3.add(name);
			}
		}
		System.out.println(list3); // [张无忌, 张三丰]
	}
}
```
# 二、 Stream流概述
**例如上面的小例子，Stream流的思想如下：**
![在这里插入图片描述](https://img-blog.csdnimg.cn/2d992c1d3ad34ec5930dc2fd796b7cff.png)
**Stream流的作用就是:**

# 三、Stream流的使用步骤

>  结合了Lambda表达式，简化集合、数字的操作。

1. 先得到一条Stream流（流水线），并把数据放上去。
2. 使用中间方法对流水线上的数据进行操作。
3. 使用终结方法对流水线上的数据进行操作。

| 过滤、转换 | 中间方法 | 方法调用完毕之后，还可以调用其他方法     |
| ---------- | -------- | ---------------------------------------- |
| 统计、打印 | 终结方法 | 最后一步，调用完毕之后，不能调用其他方法 |

##  1.  获取Stream流
| 获取方式     | 方法名                                             | 说明                                                         |
| ------------ | -------------------------------------------------- | ------------------------------------------------------------ |
| 单列集合     | default  Stream<E>  stream()                       | Collection中的默认方法                                       |
| 双列集合     | 无                                                 | 无法直接使用stream流，需要通过keySet()或者entrySet()变成单列集合 |
| 数组         | public  static <T>  Stream <T>  stream(T[ ] array) | Arrays工具类中的静态方法                                     |
| 一堆零散数据 | public  static <T>  Stream <T>  of(T... values)    | stream接口中的静态方法                                       |
### 1.1  单列集合
```java
public class StreamTest {
	public static void main(String[] args) {
		//单列集合获取Stream流
		ArrayList<String> list = new ArrayList<>();
		Collections.addAll(list, "a","b","c","d","e");
		//获取到一个流水线，并把集合中的数据方法流水线上
		//Stream<String> stream1 = list.stream();
		//使用终结方法打印流水线上数据
		//stream1.forEach( s ->System.out.println(s) );
		
		list.stream().forEach(s -> System.out.println(s));
	}
}
```
### 1.2  双列集合
```java
public class StreamTest {
	public static void main(String[] args) {
		
		//双列集合获取Stream流 
		//1. 创建双列集合
		HashMap<String, Integer> hm = new HashMap<>();
		//2. 添加数据
		hm.put("aaa", 111);
		hm.put("bbb", 222);
		hm.put("ccc", 333);
		//3.1 获取Stream流方法一： keySet()
		//键
		 hm.keySet().stream().forEach(s -> System.out.println(s));
		//3.2 获取Stream流方法二：entrySet()
		 //键值对
		hm.entrySet().stream().forEach(s -> System.out.println(s));	 
	}
}
```
### 1.3  数组
**Stream接口中静态方法of的细节：**
- 方法的形参是一个可变参数，可以传递一堆零散数据，也可以传递数组。
- 但是数组必须是引用数据类型。
- 如果传递的是基本数据类型，是会把整个数组相当做一个元素，放到一个stream流当中。
```java
public class StreamTest {
	public static void main(String[] args) {
		
		//数组获取Stream流 
		//1.创建基本数据类型数组
		int[] arr1 = {1,2,3,4,5,6,7,8,9,10};
		//获取stream
		Arrays.stream(arr1).forEach(s -> System.out.println(s));
		
		//2.创建引用数据类型数组
		String[] arr2 = {"a","b","c"};
		//获取stream
		Arrays.stream(arr2).forEach(s -> System.out.println(s));
		
		//方式是错误的!!!
		//Stream接口中静态方法of的细节
		//方法的形参是一个可变参数，可以传递一堆零散数据，也可以传递数组
		//但是数组必须是引用数据类型
		//如果传递的是基本数据类型，是会把整个数组相当做一个元素，放到一个stream流当中
		Stream.of(arr2).forEach(s -> System.out.println(s));
		Stream.of(arr1).forEach(s -> System.out.println(s)); //[I@1b28cdfa
	}
}
```
### 1.4  零散数据

> 细节： 一堆零散数据需要是相同的数据类型。
```java
public class StreamTest {
	public static void main(String[] args) {
		//零散数据获取Stream流 
		
		//基本数据类型
		Stream.of(1,2,3,4,5).forEach(s -> System.out.println(s));
		
		//引用数据类型
		Stream.of("a","b","c","d","e").forEach(s -> System.out.println(s));
	}
}
```
## 2. Stream流的中间方法
| 方法名称                                             | 说明                                |
| ---------------------------------------------------- | ----------------------------------- |
| Stream<T> filter ( Predicate<? super T>  predicate ) | 过滤                                |
| Stream<T> filter ( Predicate<? super T>  predicate ) | 获取前几个元素                      |
| Stream<T> skip ( long  n )                           | 跳过前几个元素                      |
| Stream<T> distinct ( )                               | 元素去重,依赖(hashCode和equals方法) |
| static <T> Stream<T> concat ( Stream a ,  Stream b ) | 合并a和b两个流为一个流              |
| Stream<R> map ( Function<T ,R>  mapper )             | 转换流中的数据类型                  |
> **注意一：中间方法，返回新的Stream流，原来的Stream流只能使用一次，建议使用链式编程。**
> **注意二：修改Stream流中的数据，不会影响原来集合或者数组中的数据。**
```java
public class StreamTest01 {
	public static void main(String[] args) {
		//1.过滤:把开头的留下，其余数据过滤不要
		ArrayList<String> list = new ArrayList<>();
		Collections.addAll(list, "张三","李四","王五","赵六","张七");
		
		ArrayList<String> list2 = new ArrayList<>();
		Collections.addAll(list2, "张三","李四","王五","赵六","张三");
		
		ArrayList<String> list3 = new ArrayList<>();
		Collections.addAll(list3, "孙七","钱八");
		
		ArrayList<String> list4 = new ArrayList<>();
		Collections.addAll(list2, "张三-23","李四-24","王五-25");
		
		list.stream().filter(new Predicate<String>() {
			//匿名内部类太麻烦 需要缩写
			@Override
			public boolean test(String s) {
				//如果返回值为true,表示当前数据留下
				//如果返回值为false,表示当前数据舍弃
				return s.startsWith("张");
				
			}
		}).forEach(s -> System.out.println(s)); //张三 张七
		
		list.stream()
		    .filter(s -> s.startsWith("张"))
		    .forEach(s -> System.out.println(s));
		
		//2. 获取前几个元素  
		list.stream()
		    .limit(3)
		    .forEach(s -> System.out.println(s));  //张三 李四 王五
		//3. 跳过
		list.stream()
		    .skip(4)
		    .forEach(s -> System.out.println(s));  //张七
		
		//4.去重
		list2.stream()
		     .distinct()
		     .forEach(s -> System.out.println(s)); //张三 李四 王五 赵六
		
		//5. 合并
		Stream.concat(list2.stream(), list3.stream())
		      .forEach(s -> System.out.println(s));
		
		//6.转换数据类型
		//只能获取集合里面的年龄并打印
		//第一个类型：流中原本的数据类型
		//第二个类型：将要转变成为的数据类型
		list4.stream().map(new Function<String,Integer>() {
			@Override
			//apply: 依次表示流中的每一盒数据
			//返回值：表示转化之前的数据
			public Integer apply(String s) {
				String[] arr = s.split("-");
				String ageString = arr[1];
				int age = Integer.parseInt(ageString);
				return age;
			}
		}).forEach(s -> System.out.println(s));
		
		list.stream()
		    .map(s ->Integer.parseInt(s.split("-")[1]))
		    .forEach(s -> System.out.println(s));
	}
}
```
## 3. Stream流的终结方法
| 方法名称                         | 说明                       |
| -------------------------------- | -------------------------- |
| void forEach ( Consumer action ) | 遍历                       |
| long count ( )                   | 统计                       |
| toArray ( )                      | 收集流中的数据，放到数组中 |
| collect ( Collector collector )  | 收集流中的数据，放到集合中 |
```java
public class StreamTest02 {
	public static void main(String[] args) {
		ArrayList<String> list = new ArrayList<>();
		Collections.addAll(list, "张三", "李四", "王五", "赵六");
 
		// 遍历
 
		// Consumer的泛型：表示流中的数据类型
		// accept方法的形参s：依次表示流中的每一个数据
		//
		list.stream().forEach(new Consumer<String>() {
			@Override
			public void accept(String s) {
				System.out.println(s);
			}
		});
 
		list.stream().forEach(s -> System.out.println(s)); // 张三 李四 王五 赵六
 
		// 统计
		long count = list.stream().count();
		System.out.println(count); // 4
 
		// 收集数据放进数组
		Object[] arr1 = list.stream().toArray();
		System.out.println(Arrays.toString(arr1)); // [张三, 李四, 王五, 赵六]
 
		// 指定数据类型
		// Infunction的泛型：具体类型的数组
		// apply中形参：流中数据的个数，要跟数组长度一致
		// apply的返回值：具体类型的数组
		String[] arr2 = list.stream().toArray(new IntFunction<String[]>() {
			@Override
			public String[] apply(int value) {
				return new String[value];
			}
		});
		// toArray方法中的参数：只是创建一个指定类型的数组
		// toArray底层： 会此意得到流中的每一个数据，并把数据放到数组中
		// toArray的返回值：是一个装着流里面所有数据的数组
		System.out.println(Arrays.toString(arr2));
 
		// lambda表达式
		String[] arr3 = list.stream().toArray(value -> new String[value]);
		System.out.println(Arrays.toString(arr3));
	}
}
```
###  collect方法：
```java
public class StreamTest {
	public static void main(String[] args) {
		ArrayList<String> list = new ArrayList<>();
		Collections.addAll(list, "张三-男-23", "李四-男-24", 
                        "王五-男-25", "赵六-女-27", "孙八-女-28");
 
		//收集到List集合当中
		//需求：
		//将所有的男性收集起来
		List<String> newList = list.stream()
				.filter(s-> "男".equals(s.split("-")[1]))
				.collect(Collectors.toList());
		System.out.println(newList);  //[张三-男-23, 李四-男-24, 王五-男-25]
		
		//收集到Set集合当中
		Set<String> newSet = list.stream()
				.filter(s-> "男".equals(s.split("-")[1]))
				.collect(Collectors.toSet());
		System.out.println(newSet);
		
		//收集到Map集合当中
		//键： 姓名  值： 年龄
		
		//toMap：
		//参数一表示键的生成规则  参数二表示值得生成规则
		//参数一：  
		//Function泛型一：表示流中每一个数据的类型 ；
		//        泛型二：表示Map集合中键的数据类型
		//方法apply 形参：一次表示流里面的每一个数据
		//        方法体：生成键的代码 
		//        返回值：已生成的键
		//参数二：
		//Function泛型一：表示流中每一个数据的类型 ；
		//        泛型二：表示Map集合中值的数据类型
		//方法apply 形参：一次表示流里面的每一个数据
		//        方法体：生成值的代码 
		//        返回值：已生成的值
		Map<String, Integer> newMap = list.stream()
		.filter(s-> "男".equals(s.split("-")[1]))
		.collect(Collectors.toMap(new Function<String, String>() {
			@Override
			public String apply(String s) {
				return s.split("-")[0];
			}
		}, new Function<String, Integer >() {
			@Override
			public Integer apply(String s) {
				return Integer.parseInt(s.split("-")[2]);
			}
		}));
		System.out.println(newMap);  //{李四=24, 张三=23, 王五=25}
		
		//lambda表达式
		Map<String, Integer> newMap1 = list.stream()
				.filter(s-> "男".equals(s.split("-")[1]))
				.collect(Collectors.toMap( 
						s-> s.split("-")[0], 
						s-> Integer.parseInt(s.split("-")[2])));
		System.out.println(newMap1);
	}
}
```
# 四、 练习
## 1.  数据过滤
> 需求：
> 定义一个集合，并添加一些整数1，2，3，4，5，6，7，8，9，10
> 过滤奇数，只留下偶数。
> 并将结果保存起来
```java
public class StreamDemo {
	public static void main(String[] args) {
		// 1.定义一个集合
		ArrayList<Integer> list = new ArrayList<>();
		// 2.添加数据
		Collections.addAll(list, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
 
		// 3.过滤奇数，只留偶数
		// 进行判断，如果是偶数，返回true
		List<Integer> list2 = list.stream()
				.filter(n -> n % 2 == 0)
				.collect(Collectors.toList());
		System.out.println(list2); //[2, 4, 6, 8, 10]
	}
}
```
## 2.  数据操作 - 按年龄筛选
>需求：
>创建一个ArrayList集合，并添加以下字符串，字符串中前面是姓名，后面是年龄
>“zhangsan，23”
>“lisi，24"
>“wangwu，25”
>保留年龄大于等于24岁的人，并将结果收集到Map集合中，姓名为键，年龄为值
```java
public class StreamDemo {
	public static void main(String[] args) {
		// 1.定义一个集合
		ArrayList<String> list = new ArrayList<>();
		//2.集合添加字符串
		list.add( "zhangsan,23");
		list.add("lisi,24");
		list.add("wangwu,25");
		//3.保留年龄大于24岁的人
		Map<String, Integer> map = list.stream()
		.filter(s -> Integer.parseInt(s.split(",")[1]) >= 24)
		.collect(Collectors.toMap(
				s -> s.split(",")[0], 
				s -> Integer.parseInt(s.split(",")[1])));
		System.out.println(map);  //{lisi=24, wangwu=25}
	}
}
```
## 3. 数据操作 - 演员信息要求筛选
>现在有两个ArrayList集合，
>第一个集合中：存储6名男演员的名字和年龄。第二个集合中:存储6名女演员的名字和年龄。姓名和年龄中间用逗号隔开。比如：张三，23
>要求完成如下的操作:
>男演员只要名字为3个字的前两人
>女演员只要姓杨的，并且不要第一个
>把过滤后的男演员姓名和女演员姓名合并到一起
>将上一步的演员信息封装成Actor对象。
>将所有的演员对象都保存到List集合中。
>备注：演员类Actor，属性有：name,age
```java
public class StreamDemo {
	public static void main(String[] args) {
		// 1.定义两个集合
		ArrayList<String> manList = new ArrayList<>();
		ArrayList<String> womenList = new ArrayList<>();
 
		// 2.添加数据
		Collections.addAll(manList, "蔡坤坤,24", "叶购成,23", "刘不甜,22", "吴签,24", "谷嘉,30", "肖梁梁,27");
		Collections.addAll(womenList, "赵小颖,35", "杨颖,36", "高元元,43", "张天天,31", "刘诗,35", "杨小幂,33");
 
		// 3. 男演员只要名字为3个字的前两个人
		Stream<String> stream1 = manList.stream()
		.filter(s -> s.split(",")[0].length() == 3)
		.limit(2);
//		.forEach(s -> System.out.println(s)); // 蔡坤坤,24  叶购成,23
																													// 叶购成,23
		//4.女演员只要姓杨的 并且不要第一个
		Stream<String> stream2 = womenList.stream()
		.filter(s -> s.split(",")[0].startsWith("杨"))
		.skip(1);
//		.forEach(s -> System.out.println(s));  //杨小幂,33
		
		//5.把过滤的男演员和女演员信息合并在一起
		//演员信息封装进Actor对象
		
		//String -> Actor对象（类型转换）
		List<Actor> list = Stream.concat(stream1, stream2)
		.map(s -> new Actor(s.split(",")[0],Integer.parseInt(s.split(",")[1])))
		.collect(Collectors.toList());
		System.out.println(list);
	}
}
```