#### 表格内容(本博客演示的表格,这里其实可以更换任意表格,动态展示的)
![在这里插入图片描述](https://img-blog.csdnimg.cn/6e659902a20f449c8c6ad95bfa74bd98.png)
#### 安装插件xlsx
```js
npm install xlsx
```
### 组件的所有代码(附解释)
```js
<script setup>
import { ref } from "vue";
import * as XLSX from "xlsx";
// 把文件按照二进制进行读取
function readFile(file) {
  return new Promise((resolve) => {
    let reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (ev) => {
      resolve(ev.target.result);
    };
  });
}

const title = ref([]); //表头
const tableData = ref([]); //数据列表

// 选择文件的方法
const handle = async (ev) => {
  //每次选择文件都把之前文件清空
  title.value = [];
  tableData.value = [];
  let file = ev.raw; //这里面就是数据
  //打印的file如图所示:https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/49f13a6210b44a6390ba0aca5e7a0f6a~tplv-k3u1fbpfcp-watermark.image?
  console.log("file", file);
  // 将file变成二进制读取到的
  let data = await readFile(file);
  // 将得到的二进制转化一下
  let workbook = XLSX.read(data, { type: "binary" });
  //打印的workbook如图所示:https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8587ef9092424bcfb02d75d5513333ef~tplv-k3u1fbpfcp-watermark.image?
  console.log("workbook", workbook); //这里就是可读取的文件了
  // 最后把数据转成json格式的
  let worksheet = workbook.Sheets[workbook.SheetNames[0]]; //这里是表格的名字,这里取第一个表格,1就是第二个表格数据
  //打印的worksheet如图所示:https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a3de2e1f5b6c490faadc76604193d0ab~tplv-k3u1fbpfcp-watermark.image?
  console.log("worksheet", worksheet);
  //将得到的worksheet转化为json格式
  data = XLSX.utils.sheet_to_json(worksheet);

  //打印的data如图所示:https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d90617a9e01b4aa99dd577a647b85407~tplv-k3u1fbpfcp-watermark.image?
  console.log("data", data);

  // 这个是表格所有的标题
  for (const key in data[0]) {
    title.value.push(key); //获取的是标题,即每个对象的键名
  }
  //打印的title如图:https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2c06321ad03c42ae966f5e5b0ccfbce7~tplv-k3u1fbpfcp-watermark.image?
  console.log("title", title.value);

  //将得到的json数据转化一下(因为excel表格的数据都是汉字,但是我们需要绑定的属性是字母,因此需要转换下)
  // 这种写死了,直接看下面的动态将其进行转化
  // let obj = {
  //   subject: item["项目"],
  //   date: item["周期"],
  //   perple: item["负责人"],
  //   price: item["造价"],
  //   pors: item["人数"],
  // };

  //这种可以动态的根据内容生成表格的英文键
  //对其进行转化目的是为了绑定下面表格的的prop
  data.forEach((item, index) => {
    let obj = {};
    title.value.forEach((item2, index2) => {
      console.log("item", item[item2]);
      obj["in" + index2] = item[item2];
    });
    tableData.value.push(obj);
  });
  //打印的tableData.value如图:https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9e919677abf044f4ab96c171a8ad53bc~tplv-k3u1fbpfcp-watermark.image?
  console.log("tableData.value", tableData.value);
};
</script>

<template>
  <div class="">
    <el-upload
      action
      accept=".xlsx,.xls"
      :show-file-list="false"
      :auto-upload="false"
      :on-change="handle"
    >
      <template #trigger>
        <el-button type="primary">选择文件</el-button>
      </template>
      <el-button
        class="ml-3"
        type="success"
        @click="submitUpload"
      >
        提交到服务器(暂时无)
      </el-button>
      <template #tip>
        <div class="el-upload__tip text-red">
          <el-table
            :data="tableData"
            style="width: 100%"
          >
            <!-- 上面对中文字段进行转化主要就是为了绑定这个prop -->
            <el-table-column
              v-for="(item, index) in title"
              :key="index"
              :prop="'in' + index"
              :label="item"
              width="180"
            />
          </el-table>
        </div>
      </template>
    </el-upload>
  </div>
</template>

<style scoped lang="scss"></style>
```
#### 效果图
![在这里插入图片描述](https://img-blog.csdnimg.cn/2ebf6b66992b4312af94f83192e4b33f.png)
#### 上传表格后的效果图
![在这里插入图片描述](https://img-blog.csdnimg.cn/0d2a52c7325c4871a9e6553f7ce60a7d.png)
#### 更换下表格再展示
![在这里插入图片描述](https://img-blog.csdnimg.cn/020c67b2eec94547b8bf3c23bf484651.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/3c9767548c604a8facd73d89d3c58414.png)
### js上传表格(所有代码,不附讲解)
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
    <!-- 引入js-xlsx库 -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.16.9/xlsx.full.min.js"></script>
  </head>
  <body>
    <!-- 选择文件的input -->
    <input
      type="file"
      id="file-input"
      onchange="loadExcelFile()"
    />

    <!-- 展示表格的div -->
    <div id="table-container"></div>

    <script>
      function loadExcelFile() {
        // 获取选择的文件
        const file = document.getElementById("file-input").files[0];

        // 使用FileReader读取文件内容
        const reader = new FileReader();
        reader.onload = function (e) {
          // 解析excel文件内容
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: "array" });
          const sheet = workbook.Sheets[workbook.SheetNames[0]];

          // 将表格展示在网页上
          const htmlTable = XLSX.utils.sheet_to_html(sheet);
          //打印的htmlTable如图:https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4e032a1e1b4846ea929710fcb9ffcb9d~tplv-k3u1fbpfcp-watermark.image?
          console.log("htmlTable", htmlTable);
          document.getElementById("table-container").innerHTML = htmlTable;

          //如果想要获得htmlTable表格的内容或者不想显示页面只是单纯想要获得表格内容可以使用以下方法(这个方法就是针对htmlTable内容提取的,展示或者不展示页面不影响提取,传统的方法是展示到页面获得标签后通过innerText获得内容,这个局限性就是必须展示到页面获得标签)
          //不需要提取内容的下面这段可以不用写
          const parser = new DOMParser();
          const doc = parser.parseFromString(htmlTable, "text/html");
          // 获取表格中的所有行
          const rows = doc.querySelectorAll("tr");
          // 遍历所有行并取出其中的文本内容
          rows.forEach((row) => {
            const cells = row.querySelectorAll("td");
            const values = Array.from(cells).map((cell) =>
              cell.textContent.trim()
            );
            //打印的value值如图:https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e039d724d8c248e9a3b14777353908af~tplv-k3u1fbpfcp-watermark.image?
            console.log(values);
          });
        };
        reader.readAsArrayBuffer(file);
      }
    </script>
  </body>
</html>
```
#### js表格的效果图
![在这里插入图片描述](https://img-blog.csdnimg.cn/811ecfe444f2409da33e5824724d192a.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/a2613535563d47c38c8eb73e7c93fd4e.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/f5caf587fc7747e1bc3797328fa30c06.png)