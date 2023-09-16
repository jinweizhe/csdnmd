```
 function f1(a, b) {
            console.log(a, b);
            // arguments:参数;关键词;是一个对象，包含函数调用时传递的参数信息。
            console.log(arguments);
            //基于索引获取参数值;注意不能arguments.0，0不是规范的属性名称。
            console.log(arguments[0]);//实参的数目
            console.log(arguments.length);//函数本身
            console.log(arguments.callee);
        }
        f1(10, 20, 100, 200);
```

```

        function sum(a, b) {
            var sum = 0;
            for (var i = 0; i < arguments.length; i++) {
                sum += arguments[i];
            }
            console.log(sum);
        }
        sum(1, 2);
        sum(1, 2, 3, 4, 5);
```