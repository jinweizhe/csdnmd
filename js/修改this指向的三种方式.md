> 修改this指向的三种方式
>    call、apply、bind:这三个方法是function类的实例方法。
>    call:调用；apply：应用；bind：绑定
```
        function fn(a, b) {
            console.log(this);
            console.log(a, b);
        }
             console.log(fn instanceof Function); //true
       		 console.log(Function.prototype);
        //直接调用函数，函数内部this指向window。
        fn();
 	    //修改this指向
        var obj2 = {
            name: "obj2"
        }

        //直接调用函数，函数内部this指向window。修改函数内部this指向obj2

        //call:修改this指向并调用函数
        //参数一：this的新值
        //参数二.......:函数执行本来需要的参数
        fn.call(obj2, 10, 20);

        //apply:修改this指向并调用函数
        //参数1:this的新值;
        //参数2: 数组，数组中包含函数执行本来需要的参数
        fn.apply(obj2, [20, 30])

        //bind:修改this指向，但是不会调用函数；会返回this被固化后形成的新函数。
        var fn2 = fn.bind(obj2);
        console.log(fn2);
        fn2(40, 50);
```