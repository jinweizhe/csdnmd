【一】、JS获取子节点的方式

1，通过获取dom方式直接获取子节点

1) document.getElementById("ID");

2) document.getElementsByTagName("tagName")

3) document.getElementsByClassName("className")

4) document.getElementsByName("Name")

5) document.documentElement //获取HTML元素

document.body//获取body元素

6) document.querySelector(CSS selectors)获取一个

document.querySelectorAll()获取多个

2，通过childNodes集合，获取子节点

使用childNodes获取子节点的时候，childNodes返回的是子节点的集合，是一个数组的格式。他会把换行和空格也当成是节点信息。【需要进行过滤，通过正则表达式】

var b =document.getElementById("test").childNodes;

3，通过children数组，来获取子节点

利用children来获取子元素是最方便的，他也会返回出一个数组。对其获取子元素的访问只需按数组的访问形式即可。

var getFirstChild = document.getElementById("test").children[0];

4，直接获取第一个子节点：firstChild

firstChild来获取第一个子元素，但是在有些情况下我们打印的时候会显示undefined，这是什么情况呢？？其实firstChild和childNodes是一样的，在浏览器解析的时候会把他当换行和空格一起解析，其实你获取的是第一个子节点，只是这个子节点是一个换行或者是一个空格而已。那么不要忘记和childNodes一样处理呀。

var getFirstChild = document.getElementById("test").firstChild;

5，通过firstElementChild，获取第一个子节点

使用firstElementChild来获取第一个子元素的时候，这就没有firstChild的那种情况了。会获取到父元素第一个子元素的节点 这样就能直接显示出来文本信息了。他并不会匹配换行和空格信息。

var getFirstChild = document.getElementById("test").firstElementChild;

6，直接获取最后一个子节点：lastChild，lastElementChild

lastChild获取最后一个子节点的方式其实和firstChild是类似的。同样的lastElementChild和firstElementChild也是一样的。不再赘余。

var getLastChildA = document.getElementById("test").lastChild;

var getLastChildB = document.getElementById("test").lastElementChild;

【二】、JS获取父节点的方式

1，parentNode，获取父节点

获取的是当前元素的直接父元素。parentNode是w3c的标准。

var p  = document.getElementById("test").parentNode;

2，parentElement，获取父节点

parentElement和parentNode一样，只是parentElement是ie的标准。

var p1 = document.getElementById("test").parentElement;

3，offsetParent，获取所有父节点

一看offset我们就知道是偏移量 其实这个是于位置有关的上下级 ，直接能够获取到所有父亲节点， 这个对应的值是body下的所有节点信息。

var p2 = document.getElementById("test").offsetParent;

【三】、JS获取兄弟节点的方式

1，通过获取父亲节点再获取子节点来获取兄弟节点

var brother1 = document.getElementById("test").parentNode.children[1];

2，获取上一个兄弟节点：previousSibling，previousElementSibling

在获取前一个兄弟节点的时候可以使用previousSibling和previousElementSibling。他们的区别是previousSibling会匹配字符，包括换行和空格，而不是节点。previousElementSibling则直接匹配节点。

var brother2 = document.getElementById("test").previousSibling;

var brother3 = document.getElementById("test").previousElementSibling;

3，获取下一个兄弟节点：nextSibling，nextElementSibling

同previousSibling和previousElementSibling，nextSibling和nextElementSibling也是类似的。

var brother4 = document.getElementById("test").nextSibling;

var brother5 = document.getElementById("test").nextElementSibling;

【四】补充：CSS组合选择器：

(1)后代选择器(以空格分隔)：

div p{ .... }   选取 

元素中所有
元素

(2)子元素选择器(以大于号分隔):

div > p{ .... }   选取

元素中所有直接子元素
(3)相邻兄弟选择器(以加号分隔)

div + p{ .... }   选取所有位于

元素后的第一个
元素

(4)普通兄弟选择器(以破折号分隔)

div ~ p{ .... }    选取所有

元素之后的所有相邻兄弟元素