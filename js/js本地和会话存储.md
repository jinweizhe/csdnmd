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
    <button>删除本地存储的数据</button>
    <button id="save1">localStorage</button>
    <button id="save2">sesstionstorage</button>I

    <script>
        // let url = "";
        // //encode编码，encodeURI()，中文字符有效
        // //decode解码。
        // console.log(encodeURI(url));
        // console.log(decodeURI(url));

        console.log(sessionStorage);
        let localSave = document.querySelector("#save1")

        localSave.addEventListener("click", function () {
            //存储数据setitem
            localStorage.setItem("username", "萧寂")
            localStorage.setItem("password", "123456")
            localStorage.setItem("age", "20")
            localStorage.setItem("sex", "男")
            //对象等复杂数据类型转json字符串进行存储
            localStorage.setItem("goods", JSON.stringify({ id: "1", name: "火锅" }))


            //获取数据，getitem
            let username = localStorage.getItem("username")
            console.log(username);
            //将json字符串转换为对象等复杂数据类型来取
            let goods1 = JSON.parse(localStorage.getItem("goods"))
            console.log(goods1);
        })

        let btn = document.querySelector("button")
        btn.addEventListener("click", function () {
            //删除指定数据
            localStorage.removeItem("age")
            //删除所有数据，清空本地存储
            localStorage.clear()
        })

        console.log(sessionStorage);

        // sessionStorage:会话存储。浏览器关闭，数据自动清除。存储的数量不超过5M。API同localstorage。
        let btn2 = document.querySelector("#save2")

        btn2.addEventListener("click", function () {
            sessionStorage.setItem("id", 100)
            sessionStorage.setItem("xiaoji", 500)
        })
    </script>
</body>

</html>
```