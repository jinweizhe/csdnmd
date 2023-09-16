### 共四个页面,有详细说明
###### 页面一
```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <!-- jQuery validate插件为表单提供了强大的验证功能,直接在客户端验证,减轻服务器的压力 -->
    <script src="http://static.runoob.com/assets/jquery-validation-1.14.0/dist/jquery.validate.min.js"></script>

    <!-- 默认表单校验提示信息是英文,这和js改变为中文显示 -->
    <script src="http://static.runoob.com/assets/jquery-validation-1.14.0/dist/localization/messages_zh.js"></script>

    <style>
        /* 校验不通过时提示的字体颜色 */
        .error {
            color: red;
            font-size: 14px;
        }
    </style>
</head>

<body>
    <form action="" id="myFrom">
        <div>
            <label for="name">姓名</label>
            <input type="text" minlength="2" required maxlength="5" name="uname" id="name">
        </div>
        <div>
            <label for="age">年龄</label>
            <input type="number" max="80" required min="18" name="age" id="age">
        </div>
        <div>
            <input type="submit" value="提交">
        </div>
    </form>

    <script>
        //在页面准备完成后,给指定的表单控件使用valiable,插件进行表单验证
        $().ready(function () {
            $("#myFrom").validate();
        })
        $.validator.setDefaults({
            submitHandler: function (form) {
                alert("校验通过,提交事件");
                form.submit();
            }
        })
    </script>
</body>

</html>
```
###### 页面二
```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <!-- jQuery validate插件为表单提供了强大的验证功能,直接在客户端验证,减轻服务器的压力 -->
    <script src="http://static.runoob.com/assets/jquery-validation-1.14.0/dist/jquery.validate.min.js"></script>

    <!-- 默认表单校验提示信息是英文,这和js改变为中文显示 -->
    <script src="http://static.runoob.com/assets/jquery-validation-1.14.0/dist/localization/messages_zh.js"></script>
</head>

<body>
    <form action="" id="myForm">
        <div>
            <label for="username">用户名</label>
            <input type="text" autocomplete="off" name="username" id="username">
        </div>
        <div>
            <label for="password">密码</label>
            <input type="password" name="password" id="password">
        </div>
        <div>
            <label for="password1">确认密码</label>
            <input type="password1" name="password1" id="password1">
        </div>
        <div>
            <label for="age">年龄</label>
            <input type="number" name="age" id="age">
        </div>
        <div>
            <input type="submit" value="登录">
        </div>
    </form>

    <script>
        //方式二:将表单验证规则写在jQuery代码中
        $().ready(function () {
            //validate()调用该函数,才能让form表单使用validate表单验证插件
            //参数一:object,用于定义表单验证的相关信息
            $("#myForm").validate({
                //key为表单控件 对应的name字段的值,定义校验规则.value:表单控件定义校验规则.
                rules: {
                    username: {
                        required: true,
                        rangelength: [2, 5]//输入字符长度2-5位
                    },
                    password: {
                        required: true,
                        rangelength: [6, 9]//输入字符长度6-9位
                    },
                    password1: {
                        required: true,
                        rangelength: [6, 9],//输入字符长度6-9位
                        equalTo: "#password"
                    },
                    age: {
                        required: true,//必填项
                        range: [18, 50],//年龄介于18-50
                        digits: true,//输入整数值
                    }
                },
                //默认提示规则
                messages: {
                    // username:"输入有问题"//比较模糊
                    username: {
                        required: "不能为空",
                        //判断是否相同
                        rangelength: "长度不够"
                    },
                    password1: {
                        equalTo: "两次密码不相同"
                    },
                    age: {
                        digits: "只能输入非小数的数字"
                    }
                },
                submitHandler: function (from) {
                    alert("验证成功");
                    form.submit();
                }
            });
        })
    </script>
</body>

</html>
```
###### 页面三(自定义校验)
```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <!-- jQuery validate插件为表单提供了强大的验证功能,直接在客户端验证,减轻服务器的压力 -->
    <script src="http://static.runoob.com/assets/jquery-validation-1.14.0/dist/jquery.validate.min.js"></script>

    <!-- 默认表单校验提示信息是英文,这和js改变为中文显示 -->
    <script src="http://static.runoob.com/assets/jquery-validation-1.14.0/dist/localization/messages_zh.js"></script>
</head>

<body>
    <form action="" id="myFrom">
        <div>
            <label for="phone">手机号:</label>
            <input type="number" autocomplete="off" name="phone" id="phone">
        </div>
        <div>
            <label for="password">密码:</label>
            <input type="password" name="password" id="password">
        </div>
        <div>
            <input type="submit" value="提交">
        </div>
    </form>
    <script>
        $().ready(function () {
            //自定义手机号校验规则
            //addMethod(name,method,message)
            //参数一:校验规则的名字
            //参数二:回调函数:校验的方法
            ////回调函数的参数一:当前输入的数据值,参数二:当前元素本身,参数三:校验元素的值
            //参数三:自定义的错误信息
            jQuery.validator.addMethod("isPhone", function (value, element, para) {
                // console.log(value,element,para);
                //定义正则
                let telReg = /^1[3-9]\d{9}$/;
                console.log(telReg.test(value));
                //return 
                return telReg.test(value);
            }, "请输入正确的手机号码")


            //密码校验
            jQuery.validator.addMethod("psw", function (value, element, para) {
                // console.log(value,element,para);
                //定义正则
                let pwsReg = /^[A-Z]\w{3,6}$/;
                console.log(pwsReg.test(value));
                //return 
                return pwsReg.test(value);
            }, "首字母大写,包含数字、字母、下划线3-6位")

            $("#myFrom").validate({
                rules: {
                    //手机号码验证
                    phone: {
                        //自定义名称
                        isPhone: true,
                        required: true,
                    },
                    password: {
                        required: true,
                        psw: true
                    }
                }
            })
        })
    </script>
</body>

</html>
```
###### 参数信息
```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <!-- jQuery validate插件为表单提供了强大的验证功能,直接在客户端验证,减轻服务器的压力 -->
    <script src="http://static.runoob.com/assets/jquery-validation-1.14.0/dist/jquery.validate.min.js"></script>

    <!-- 默认表单校验提示信息是英文,这和js改变为中文显示 -->
    <script src="http://static.runoob.com/assets/jquery-validation-1.14.0/dist/localization/messages_zh.js"></script>
    <style>
        /* label.errormassage {
            color: red;
            font-size: 14px;
        } */

        /* 后面修改显示错误信息为span了,所以这里改为span */
        span.errormassage {
            color: red;
            font-size: 14px;
        }
    </style>
</head>

<body>
    <form action="" id="myForm">
        <div>
            <label for="username">账号</label>
            <input type="text" autocomplete="off" name="username" id="username">
        </div>
        <div>
            <label for="password">密码</label>
            <input type="text" autocomplete="off" name="password" id="password">
            <!-- <span></span> -->
        </div>
        <div>
            <label for="nan">男</label>
            <input type="radio" name="sex" id="nan">
            <label for="nv">女</label>
            <input type="radio" name="sex" id="nv">
        </div>
        <div>
            <label for="c">橙色</label>
            <input type="checkbox" name="lickColor" id="c">
            <label for="z">紫色</label>
            <input type="checkbox" name="lickColor" id="z">
            <label for="l">蓝色</label>
            <input type="checkbox" name="lickColor" id="l">
        </div>
        <div>
            <input type="submit">
        </div>
    </form>

    <script>
        $().ready(function () {
            $("#myForm").validate({
                rules: {
                    username: {
                        required: true
                    },
                    password: {
                        required: true,
                        rangelength: [6, 8]
                    },
                    sex: {
                        required: true,
                    },
                    lickColor: {
                        required: true,
                        rangelength: [2, 3]//在多选上代表选中个数的区间
                    }
                },
                messages: {//自定义错误提示信息
                    username: {
                        require: "必须填写",//不定义则使用默认提示信息
                    }
                },
                submitHandler: function (form) {
                    alert("表单验证成功");
                    //要加上表单提交函数,否则表单不会提交
                    form.submit();
                },
                success: "valid",//验证成功,会添加该类名string/function
                ignore: "#username",//忽略某些元素不验证
                errorClass: "errormassage",//修改显示错误信息的html标签的class属性值。默认是error
                errorElement: "span",//修改显示错误信息的html标签,默认是<label>标签.
                errorPlacement: function (error, element) {//指定错误信息的位置,这里针对单选多选来说,可以注释掉这段看看效果再关闭这段注释
                    //参数一:执行该函数的错误信息.
                    //参数二:执行该函数的元素.
                    // console.log(error, element);
                    console.log(element.is(":radio"));
                    console.log(element.is(":checkbox"));
                    if (element.is(":radio") || element.is(":checkbox") || element.is("select")) {
                        // console.log(error);//error就是当前错误元素,将错误元素放到最后面,element表单控件
                        //移动到父元素之后
                        error.appendTo(element.parent());
                    } else {
                        error.insertAfter(element)
                    }
                }
            })
        })
    </script>
</body>

</html>
```