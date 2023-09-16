```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        let obj = {
            name: "张飒",
            age: 20
        }
        //采用存取描述符定义属性。
        Object.defineProperty(obj, "friend", {
            configurable: true,//可删除
            enumerable: true,//可枚举
            set(obj) {
                console.log("friend set");
                this._friend = obj
            },
            get(obj) {
                console.log("friend get");
                return this._friend
            }
        })

        obj.friend = {
            name: "李四",
            age: 23
        }
        obj.friend;
        obj.friend.age++
        console.log(obj.friend);

        let obj2 = {
            name: "张三",
            age: 25,
            sex: "male",
            nums: [1, 2, 3, 4],
            wife: {
                name: '翠翠',
                age: 20
            }
        }

        //Proxy用于在目标对象外层搭建一层拦截，外界对目标对象的某些操作，必须通过这层拦截。
        //生成Proxy(target,handler)对象，对象有两个参数，target：表示你要拦截的目标对象，handler参数是一个对象，用来制定拦截行为。

        //target:目标对象
        //key:属性名
        //value:属性值
        let proxy = new Proxy(obj2, {
            set(target, key, value) {
                console.log(target, key, value);
                if (key == "age" && (value < 0 || value > 150)) {
                    throw new Error("age的有效范围是0~150")
                }
                target[key] = value
                console.log(target[key], value);
            },
            get(target, key) {
                console.log(target, key);
                return target[key];
            },
            has(target, key) {
                console.log(target, key);
                return key in target
            },
            deleteProperty(target, key) {
                console.log(target, key);
                if (key == "wife") {
                    throw new Error("妻子不能删")
                }
                delete target[key]
            }
        })
        // console.log(proxy);
        proxy.name = "李四";//设置属性触发set方法
        proxy.age = 1;
        proxy.age = 150;

        let arr = proxy.name;
        console.log(arr);


        //in：运算符，判断对象中是否有某个属性
        console.log("sex" in proxy);//触发has()方法

        //delete proxy.wife//触发deleteProperty方法
    // </script>
</body>

</html>
```