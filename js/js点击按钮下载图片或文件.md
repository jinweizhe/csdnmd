## html代码
```html
    <div class="datu">
        <input type="file" name="myfile" id="myfile" accept="image/*" multiple>
        <button>下载</button>
        <input type="text" placeholder="下载的图片名" class="tp">
    </div>
```

## js代码
```js
		//点击按钮保存图片
        //获取到下载按钮(切记需要先选择图片上传完才能下载,否则获取不到文件流)
        let xiazai = document.querySelector(".datu>button")
        //使用input的file类型获取到上传的图片(下载文件需要blob流或者files流,因此这里需要先获取到流才能才能用这个流给a标签href属性赋值)
        const input = document.querySelector("[name=myfile]");
        //按钮点击下载图片
        xiazai.addEventListener("click",function(){
            //获取下载的文件名
            let text = document.querySelector(".tp").value;
            //创建a标签
            var bqa = document.createElement("a");
            //给a标签的href属性赋值
            bqa.setAttribute("href", URL.createObjectURL(input.files[0]));
            //给a标签的download属性赋值,表示下载的文件名
            bqa.setAttribute("download", text+".png");
            //调用a标签的点击事件
            bqa.click();
            //移除a标签
            bqa.remove()
        })
```