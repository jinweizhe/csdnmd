> 链接: https://pan.baidu.com/s/1tMa9m42KKqV86hU0xlge_Q?pwd=jbx4 提取码: jbx4 复制这段内容后打开百度网盘下载purl文件
#### 使用方法
```jq
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>

<body>
    <!-- purl一个用于解析url并从中提取信息的JS实用程序。-->
    <script src="../../js/purl.js"></script>
    <script>
        // console.log(location.href);
        // //原生js使用方式
        // //purl()获取purl对象然后调用对象的属性可获取url相关信息
        // let url = purl();
        // console.log(url);
        // console.log(url.data.attr.source);//完整地址
        // console.log(url.data.attr.protocol);//协议
        // console.log(url.data.attr.port);//端口号
        // console.log(url.data.attr.host);//IP
        // console.log(url.data.attr.file);//文件


        //在jQuery中使用
        //先引用jQuery脚本,再引入purl脚本
        let url = $.url();
        console.log(url);
        //可以使用对象调用属性获取参数
        console.log(url.data.attr.source);//完整地址
        console.log(url.data.attr.protocol);//协议
        //其他方式可参考上面即可


        //也可以用对象调用方法的形式获取参数
        console.log(url.attr());//等同于url.data.attr
        console.log(url.attr("source"));//完整的url
        console.log(url.attr("protocol"));//协议
        console.log(url.attr("host"));//IP
        console.log(url.attr("relative"));//相对路径


        let url2 = $.url("http://127.0.0.1/01-%E4%B8%AA%E4%BA%BA%E7%BB%83%E4%B9%A0/11.28/1.html?key=value&name=萧寂")
        console.log(url2);
        console.log(url2.data.attr.query);//获取携带的参数
        console.log(url2.data.param.query);//获取携带的参数以对象形式出来

        console.log(url2.param());//对象
        console.log(url2.param("name"));//指定的对象的数据

    </script>
</body>

</html>
```