```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      http-equiv="X-UA-Compatible"
      content="IE=edge"
    />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>Document</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/spark-md5/3.0.2/spark-md5.min.js"></script>
  </head>
  <body>
    <input
      type="file"
      name=""
      id=""
    />
    <script>
      const inp = document.querySelector("input");
      inp.addEventListener("change", async function (e) {
        const file = inp.files[0];
        //没有拿到file对象
        if (!file) {
          return;
        }
        //调用工具函数
        let chunks = createChunks(file, 1 * 1024 * 1024); //1M 每次分割1M就切割一次
        // console.log("chunks", chunks);
        const result = await hash(chunks);
        console.log("result", result); //拿到当前文件的hash值
      });

      /**
       * 工具函数,用来保存每个切片唯一id
       *
       */
      function hash(chunks) {
        //将hash函数改为异步函数,读取数据需要时间
        return new Promise((resolve) => {
          //创建md5实例
          const spark = new SparkMD5();
          //使用递归(读第几个分块)
          function _read(i) {
            //判断是否已经读完
            if (i >= chunks.length) {
              resolve(spark.end()); //全部读完结束结束得到一个hash
              return;
            }
            //未读完情况
            const blob = chunks[i];
            //读取文件
            const reader = new FileReader();
            //由于读取文件是异步的,可以用
            reader.onload = (e) => {
              const bytes = e.target.result; //拿到读取到的字节数组
              spark.append(bytes); //把一组字节加到运算中
              _read(i + 1); //递归调用
            };
            //读取文件字节数
            reader.readAsArrayBuffer(blob); //传入分块
          }
          //从第一个分块开始读
          _read(0);
        });
      }

      /***
       * 工具函数
       * 参数一：file对象
       * 参数二：切片大小
       */
      function createChunks(file, chunkSize) {
        console.log("chunkSize", chunkSize);
        const result = []; // 创建数组获取每一个切片
        //循环
        for (let i = 0; i < file.size; i += chunkSize) {
          // const piece = file.slice(0, 99); //取该文件的0-99字节,返回一个Blob类型对象
          result.push(file.slice(i, i + chunkSize));
        }
        return result;
      }
    </script>
  </body>
</html>
```

