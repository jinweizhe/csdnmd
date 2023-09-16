# 字符串api

```js
 var str = "helloel";

    console.log(str.length); // 7

    console.log(str[1]);// e
```



## toUpperCase

将字符串转换为大写。

	参数：无
	
	返回值：大写的字符串。
	
	不影响原字符串

```js
		var str = "helloel";
        var result=str.toUpperCase();
        console.log(result,str); // HELLOEL helloel
```
## str
获取指定下标的子串
```js
      var str = "helloel";
      var result=str[str.length-1];
      console.log(result,str); // l helloel
```
## toLowerCase

 将字符串转换为小写。

	参数：无
	
	返回值：小写的字符串。

```js
      var result = "HAHAH".toLowerCase();
      console.log(result); // hahah
```

## indexOf

  找子串在字符串中第一次出现索引；

    参数1：子串
    
    参数2：搜索的起始位置，缺省时，从头开始找
    
    返回值，子串在字符串中第一次出现的索引，找不到返回-1.

```js
      var str = "helloel";
      var index = str.indexOf("el", 5);
      console.log(index); // 5
```

## lastIndexOf

 找子串在字符串中最后一次出现的索引；

    参数1：子串
    
    参数2：搜索的起始位置，缺省时，从结尾处开始找
    
    返回值，子串在字符串中最后一次出现的索引，找不到返回-1.

```js
      var str = "helloel";
      var index = str.lastIndexOf("el");
      console.log(index); // 5
```

## includes

    判断字符串是否包含指定子串
    
    参数1：子串
    
    参数2：搜索的起始位置，缺省时，从头开始找
    
    返回值：boolean：true：包含；false：不包含

```js
      var str = "helloel";
      var result = str.includes("el");
      console.log(result); // true
```

## startsWith

 判断字符串是否以指定子串开头

    参数：子串。
    
    返回值：boolean:true是，false：不是

```js
       var str = "helloel";
      var result = str.startsWith("abc");
      console.log(result); // false
```

## endsWith

判断字符串是否以指定子串结尾

    参数：子串
    
    返回值：boolean:true是，false：不是

```js
      var str = "helloel";
      var result = str.endsWith("el");
      console.log(result); // true
```

## slice

获取子串

    参数1：起始位置
    
    参数2：结束位置,缺省时，到字符串的结尾；包含起始位置，不包含结束位置[起始位置，结束位置）

```js
     var str = "helloel";
      var result = str.slice(2, 5);
      console.log(result); // llo
```

## substring(和slice作用相同)

获取子串

    参数1：起始位置
    
    参数2：结束位置,缺省时，到字符串的结尾；包含起始位置，不包含结束位置[起始位置，结束位置）

```js
      var str = "helloel";
      var result = str.substring(2, 5);
      console.log(result); // llo
```
### substring使用的三个场景
```js
subString是Java提供的一种字符串截取方法，通常我们可以用参数来控制截取的字符串。

subString常用方法一：

String a = “123456anbdc”;
String b = a.subString(1);
此时得到的为字符串a从下标为1的位置开始截取到最后的值，也就是23456anbdc；
subString常用方法二：

String a = “123456anbdc”;
String b = a.subString(1，5);
此时得到的为字符串a从下标为1的位置开始截取到下标为5的位置的值（不包括下标为5的值），也就是2345；
subString常用方法三：

String a = “123456anbdc”;
String b = a.subString(1，a.indexOf(“b”));
此时得到的为字符串a从下标为1的位置开始截取到指定字符串“b”的值，也就是23456an；
（注：如指定字符串有多个，以第一个为主）
（说明：a.indexOf(“b”)就是取字符串“b”的下标，和上面的用法本质是一样的）
```

## charAt

 根据索引获取字符

    参数：字符的索引
    
    返回值：字符。char:character,字符；at：在......

```js
      var str = "helloel";
      var result = str.charAt(1);
      console.log(result); // e
```

## charCodeAt

 获取指定索引位置的字符的unicode码值。Unicode：一种编码方式。

    参数：索引
    
    返回值：字符的unicode码值。

```js
      var str = "helloel";
      var result = str.charCodeAt(1);
      console.log(result); // 101
```
## concat

 字符串拼接

    参数..字符串
    
    返回值：拼接后形成的新串

```js
      var str = "helloel";
      var result = str.concat("world", "haha");
      console.log(result); // helloelworldhaha
```

## split

 spilt:分割，拆分

    根据指定的分隔符进行字符串的分隔
    
    参数：分隔符
    
    返回值：分隔的子串构成的数组。

```js
      var str = "helloel";
      var result = str.split("e");
      console.log(result); //  ['h', 'llo', 'l']
```

## repeat

  字符串重复

    参数;重复次数
    
    返回值：新串

```js
      var str = "helloel";
      var result = str.repeat(3);
      console.log(result); // helloelhelloelhelloel
```

## replace

    replace:替换
    
    用一个新串替换指定子串
    
    参数1：被替换的子串
    
    参数二：新串，只会替换一个
    
    返回值：替换后形成的字符串

```js
      var str = "helloel";
      var result = str.replace("el", "t");
      console.log(result); // htloel
```

##  trim

 trim:裁剪；

```js
 	      //删除字符串开头结尾的空白符
      //参数：无
      //返回值：删除字符串首尾的空白符后形成的新串
      var result = "        hel                   ".trim();
      console.log(result, "       hel            "); // hel,        hel            ,

      //删除开头空格
      //参数：无
      //返回值：删除字符串开头的空白符后形成的新串
      var result = "        hel                   ".trimStart();
      console.log(result, "hel            ");//hel                    ,hel                 ,
      //删除结尾空格
      //参数：无
      //返回值：删除字符串结束的空白符后形成的新串
      var result = "          hel                   ".trimEnd();
      console.log(result, "  hel            "); // ,          hel,   hel          ,
```