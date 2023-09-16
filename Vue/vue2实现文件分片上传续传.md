@[toc]
> 源代码github地址：
> https://github.com/zjoney/large-file-breakpoint-upload-about-vue
> b站视频：
> https://www.bilibili.com/video/BV18v411v7Xu/?spm_id_from=333.337.search-card.all.click&vd_source=54b92ea953eb0a7281545e66410fc2f5

# 两种上传文件方式一种分片和续传
## 工具包
**/assets/utils.js**
```js
export function fileParse(file, type = "base64") {
    return new Promise(resolve => {
        let fileRead = new FileReader();
        if (type === "base64") {
            fileRead.readAsDataURL(file);
        } else if (type === "buffer") {
            fileRead.readAsArrayBuffer(file);
        }
        fileRead.onload = (ev) => {
            resolve(ev.target.result);
        };
    });
};
```
## 第一种文件上传（直接上传文件，这里的文件都以图片为例）
```html
<template>
  <div id="app">
    <!-- 
      action:存放的是文件上传到服务器的接口地址
    -->
    <el-upload
      drag
      action="/single1"
      :show-file-list="false"
      :on-success="handleSuccess"
      :before-upload="beforeUpload"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        将文件拖到此处，或
        <em>点击上传</em>
      </div>
    </el-upload>

    <!-- IMG -->
    <div class="uploadImg" v-if="img">
      <img :src="img" alt />
    </div>
  </div>
</template>

<script>
/*
 * 文件上传有两套方案：
 *   1. 基于文件流（form-data）  element-ui上传组件默认是基于文件流的
 *   2. 客户端需要把文件转化为BASE64
 *
 * 默认上传
 *   格式：multipart/form-data
 *   数据格式：form-data
 *      file 文件流信息
 *      filename 文件名字
 *   上传成功后获取服务器返回信息，通知on-success回调函数执行
 * 内部封装了ajax
 */
export default {
  name: "App",
  data() {
    return {
      img: null,
    };
  },
  methods: {
    handleSuccess(result) {
      if (result.code == 0) {
        this.img = result.path;
      }
    },
    beforeUpload(file) {
      // 格式校验
      let { type, size } = file;

      if (!/(png|gif|jpeg|jpg)/i.test(type)) {
        this.$message("文件合适不正确~~");
        return false;
      }

      if (size > 200 * 1024 * 1024) {
        this.$message("文件过大，请上传小于200MB的文件~~");
        return false;
      }

      return true;
    },
  },
};
</script>
```
## 第二种文件上传（上传文件的buffer格式(图片可以base64格式)，这里的文件都以图片为例）
```html
<template>
  <div id="app">
    <el-upload drag action :auto-upload="false" :show-file-list="false" :on-change="changeFile">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        将文件拖到此处，或
        <em>点击上传</em>
      </div>
    </el-upload>

    <!-- IMG -->
    <div class="uploadImg" v-show="img">
      <img :src="img" alt />
    </div>
  </div>
</template>

<script>
import { fileParse } from "./assets/utils";
import axios from "axios";
import qs from "qs";

export default {
  name: "App",
  data() {
    return {
      img: null,
    };
  },
  methods: {
    async changeFile(file) {
      if (!file) return;
      file = file.raw;
      // 继续做格式校验
      /*
       * 把上传的文件先进行解析（FileReader）
       * 把其转换base64编码格式
       * 自己基于axios把信息传递给服务器
       * ...
       */
      let result = await fileParse(file, "base64");
      result = await axios.post(
        "/single2",
        qs.stringify({
          chunk: encodeURIComponent(result),
          filename: file.name,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      result = result.data;
      if (result.code == 0) {
        this.img = result.path;
      }
    },
  },
};
</script>
```
## 文件分片/续传
```html
<template>
  <div id="app">
    <el-upload drag action :auto-upload="false" :show-file-list="false" :on-change="changeFile">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        将文件拖到此处，或
        <em>点击上传</em>
      </div>
    </el-upload>

    <!-- PROGRESS -->
    <div class="progress">
      <span>上传进度：{{total|totalText}}%</span>
      <el-link type="primary" v-if="total>0 && total<100" @click="handleBtn">{{btn|btnText}}</el-link>
    </div>

    <!-- VIDEO -->
    <div class="uploadImg" v-if="video">
      <video :src="video" controls />
    </div>
  </div>
</template>

<script>
import { fileParse } from "./assets/utils";
import axios from "axios";
import SparkMD5 from "spark-md5";

export default {
  name: "App",
  data() {
    return {
      total: 0,
      video: null,
      btn: false,
    };
  },
  filters: {
    btnText(btn) {
      return btn ? "继续" : "暂停";
    },
    totalText(total) {
      return total > 100 ? 100 : total;
    },
  },
  methods: {
    async changeFile(file) {
      if (!file) return;
      file = file.raw;

      // 解析为BUFFER数据
      // 我们会把文件切片处理：把一个文件分割成为好几个部分（固定数量/固定大小）
      // 每一个切片有自己的部分数据和自己的名字
      // HASH_1.mp4
      // HASH_2.mp4
      // ...
      let buffer = await fileParse(file, "buffer"),
        spark = new SparkMD5.ArrayBuffer(),
        hash,
        suffix;
      spark.append(buffer);
      hash = spark.end();
      suffix = /\.([0-9a-zA-Z]+)$/i.exec(file.name)[1];

      // 创建100个切片
      let partList = [],
        partsize = file.size / 100,
        cur = 0;
      for (let i = 0; i < 100; i++) {
        let item = {
          chunk: file.slice(cur, cur + partsize),
          filename: `${hash}_${i}.${suffix}`,
        };
        cur += partsize;
        partList.push(item);
      }

      this.partList = partList;
      this.hash = hash;
      this.sendRequest();
    },
    async sendRequest() {
      // 根据100个切片创造100个请求（集合）
      let requestList = [];
      this.partList.forEach((item, index) => {
        // 每一个函数都是发送一个切片的请求
        let fn = () => {
          let formData = new FormData();
          formData.append("chunk", item.chunk);
          formData.append("filename", item.filename);
          return axios
            .post("/single3", formData, {
              headers: { "Content-Type": "multipart/form-data" },
            })
            .then((result) => {
              result = result.data;
              if (result.code == 0) {
                this.total += 1;
                // 传完的切片我们把它移除掉
                this.partList.splice(index, 1);
              }
            });
        };
        requestList.push(fn);
      });

      // 传递：并行(ajax.abort())/串行(基于标志控制不发送)
      let i = 0;
      let complete = async () => {
        let result = await axios.get("/merge", {
          params: {
            hash: this.hash,
          },
        });
        result = result.data;
        if (result.code == 0) {
          this.video = result.path;
        }
      };
      let send = async () => {
        // 已经中断则不再上传
        if (this.abort) return;
        if (i >= requestList.length) {
          // 都传完了
          complete();
          return;
        }
        await requestList[i]();
        i++;
        send();
      };
      send();
    },
    handleBtn() {
      if (this.btn) {
        //断点续传
        this.abort = false;
        this.btn = false;
        this.sendRequest();
        return;
      }
      //暂停上传
      this.btn = true;
      this.abort = true;
    },
  },
};
</script>
```
# 服务端代码(nodejs)
```js
/*-CREATE SERVER-*/
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    fs = require('fs'),
    SparkMD5 = require('spark-md5'),
    PORT = 8888;
app.listen(PORT, () => {
    console.log(`THE WEB SERVICE IS CREATED SUCCESSFULLY AND IS LISTENING TO THE PORT：${PORT}`);
});
app.use(bodyParser.urlencoded({
    extended: false,
    limit: '1024mb'
}));

/*-API-*/
const multiparty = require("multiparty"),
    uploadDir = `${__dirname}/upload`;

function handleMultiparty(req, res, temp) {
    return new Promise((resolve, reject) => {
        // multiparty的配置
        let options = {
            maxFieldsSize: 200 * 1024 * 1024
        };
        !temp ? options.uploadDir = uploadDir : null;
        let form = new multiparty.Form(options);
        // multiparty解析
        form.parse(req, function (err, fields, files) {
            if (err) {
                res.send({
                    code: 1,
                    reason: err
                });
                reject(err);
                return;
            }
            resolve({
                fields,
                files
            });
        });
    });
}

// 基于FORM-DATA上传数据
app.post('/single1', async (req, res) => {
    let {
        files
    } = await handleMultiparty(req, res);
    let file = files.file[0];
    res.send({
        code: 0,
        originalFilename: file.originalFilename,
        path: file.path.replace(__dirname, `http://127.0.0.1:${PORT}`)
    });
});

// 上传BASE64
app.post('/single2', (req, res) => {
    let {
        chunk,
        filename
    } = req.body;

    // chunk的处理：转换为buffer
    chunk = decodeURIComponent(chunk);
    chunk = chunk.replace(/^data:image\/\w+;base64,/, "");
    chunk = Buffer.from(chunk, 'base64');

    // 存储文件到服务器
    let spark = new SparkMD5.ArrayBuffer(),
        suffix = /\.([0-9a-zA-Z]+)$/.exec(filename)[1],
        path;
    spark.append(chunk);
    path = `${uploadDir}/${spark.end()}.${suffix}`;
    fs.writeFileSync(path, chunk);
    res.send({
        code: 0,
        originalFilename: filename,
        path: path.replace(__dirname, `http://127.0.0.1:${PORT}`)
    });
});

// 切片上传 && 合并
app.post('/single3', async (req, res) => {
    let {
        fields,
        files
    } = await handleMultiparty(req, res, true);

    let [chunk] = files.chunk,
        [filename] = fields.filename;
    let hash = /([0-9a-zA-Z]+)_\d+/.exec(filename)[1],
        // suffix = /\.([0-9a-zA-Z]+)$/.exec(file.name)[1],
        path = `${uploadDir}/${hash}`;
    !fs.existsSync(path) ? fs.mkdirSync(path) : null;
    path = `${path}/${filename}`;
    fs.access(path, async err => {
        // 存在的则不再进行任何的处理
        if (!err) {
            res.send({
                code: 0,
                path: path.replace(__dirname, `http://127.0.0.1:${PORT}`)
            });
            return;
        }

        // 为了测试出效果，延迟1秒钟
        await new Promise(resolve => {
            setTimeout(_ => {
                resolve();
            }, 200);
        });

        // 不存在的再创建
        let readStream = fs.createReadStream(chunk.path),
            writeStream = fs.createWriteStream(path);
        readStream.pipe(writeStream);
        readStream.on('end', function () {
            fs.unlinkSync(chunk.path);
            res.send({
                code: 0,
                path: path.replace(__dirname, `http://127.0.0.1:${PORT}`)
            });
        });
    });
});

app.get('/merge', (req, res) => {
    let {
        hash
    } = req.query;

    let path = `${uploadDir}/${hash}`,
        fileList = fs.readdirSync(path),
        suffix;
    fileList.sort((a, b) => {
        let reg = /_(\d+)/;
        return reg.exec(a)[1] - reg.exec(b)[1];
    }).forEach(item => {
        !suffix ? suffix = /\.([0-9a-zA-Z]+)$/.exec(item)[1] : null;
        fs.appendFileSync(`${uploadDir}/${hash}.${suffix}`, fs.readFileSync(`${path}/${item}`));
        fs.unlinkSync(`${path}/${item}`);
    });
    fs.rmdirSync(path);
    res.send({
        code: 0,
        path: `http://127.0.0.1:${PORT}/upload/${hash}.${suffix}`
    });
});

app.use(express.static('./'));
app.use((req, res) => {
    res.status(404);
    res.send('NOT FOUND!');
});
```