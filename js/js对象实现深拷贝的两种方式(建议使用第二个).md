```js
    <script>
        //对象深拷贝第一种方式:
        function deepCopy(obj) {
            let str = JSON.stringify(obj);
            let result = JSON.parse(str);
            return result;
        }
        var obj = {
            name: "张三",
            firend: {
                name: "翠翠",
                age: 23
            }
        }
        var obj2 = deepCopy(obj);
        obj2.firend.name = "李四";
        console.log(obj);
        console.log(obj2);
        //上面这种方式为转json,容易造成日期转换错误或者undefined、null等数据丢失的问题
        //因此建议采用第二种方式,递归思想

        //采用递归，层层复制。
        //递归:函数内部调用函数自身﹔注意:递归的结束条件。
        function deepCopy2(obj) {
            //如果当前元素不是一个对象,就直接返回,不需要循环复制
            if (typeof obj != "object") {
                return obj;
            }
            //是对象(区分是数组还是普通对象,用于新建)
            let newObj = Array.isArray(obj) ? [] : {};
            // 遍历源对象,复制对象中的每一个属性
            for (let key in obj) {
                // console.log(key);
                // console.log(obj[key]);
                newObj[key] = deepCopy2(obj[key]);
            }
            return newObj;
        }
        deepCopy2(obj);
        var obj2 = deepCopy2(obj);
        obj2.firend.name = "李四";
        console.log(obj);
        console.log(obj2);
        //这样就完成了对象的深拷贝

    </script>
```