## 分页
**发送数据请求的代码**
```js
//发请求
const send = () => {
  users({
    pagenum: page.value,
    pagesize: count.value ? count.value : "3",
  }).then((res) => {
    console.log("res", res);
    if (res.data.meta.status === 200) {
      console.log("res.data.data", res.data.data);
      total.value = res.data.data.total;
      page.value = res.data.data.pagenum;
      list.value = res.data.data.users;
    }
  });
};
```
**分页条代码**
```js
//js代码
const page = ref(1); //当前页码
const count = ref(); //每页显示条数
const total = ref(0); //总条数
const xj = (a) => {
  page.value = a;
  send();
};

//html代码
//设置page-size属性必须设置page-sizes属性,接收的是数组不是字符串,所有需要加:
//page-size : 设置每页几条,设置完以后会去page-sizes数组去匹配,如果没有设置page-sizes的话会默认[10,20,30,40,50]
//page-sizes: 存放每页几条的的数据 与page-size相辅相成
//layout:设置布局,具体可以去官网看
//total:设置总页数
//@current-change当点击页码是会触发的函数,默认会接收一个参数(即点击的页码值)
//current-page 当前选中的页码

    <el-pagination
      background 
      :current-page="Number(page)"
      @current-change="xj"
      :page-size="count ? count : 3"  
      :page-sizes="[2,3,5,10]"
      layout="prev, pager, next"
      :total="total"
    />
```
## 搜索框
![在这里插入图片描述](https://img-blog.csdnimg.cn/e5204184629146d399e94d08abdd24eb.png)

```js
    <el-input
      v-model="input"
      placeholder="Please input"
      style="width: 300px;"
    >
    <template #append>
      <el-button color="#F5F7FA"><el-icon><Search /></el-icon></el-button>
    </template>
    </el-input>
```
### 树形控件
```js
//html代码
   <el-tree
      ref="tree"  //绑定当前的元素
      :data="quanxian"  //绑定渲染的数据
      :default-expand-all="true"  //默认展开所有节点
      show-checkbox  //每个节点都带多选框
      node-key="id"  //节点的唯一标识，也是默认渲染的节点的必要条件
      :props="defaultProps" //指定要渲染的节点或者其子节点
      :default-checked-keys="qx" //默认渲染的节点的（node-key）的值组成的数组
      @check="send" //点击当前节点触发的事件，接受两个参数
    />


//js代码
//分配权限
const quanxian = ref([]); //所有权限列表
onMounted(() => {
  // 请求所有权限，用于渲染数据
  jurisdiction("tree").then((res) => {
    quanxian.value = res.data.data; 
  });
});
const qx = ref([]); //点击的当前行权限列表（获取当前用户的权限）
const qxcl = (data, arr = []) => {  //对当前用户的数据提取每个节点的id值，用于渲染节点，将每个节点的id值组成数组返回出去[1,2,3,4,5,6,7]
  data.forEach((item) => {
    if (item.children) {
      arr.push(item.id);
      qxcl(item.children, arr);
    }
    arr.push(item.id);
    return arr;
  });
  return arr;
};
const tree = ref();  //获取树形控件
const fenpei = (a, b) => {  //点击当前数据表格行的分配权限按钮
  dialogVisible.value = true;  //将弹出框打开
  qx.value = qxcl(b.children); //将当前行的权限里面每个节点的id值提取出来，返回数组
  tree.value?.setCheckedKeys([], false); //设置目前选中的节点，使用此方法必须设置 node-key 属性（前面为官方解释，个人碰到的问题是，不加这一个的话，每次点击都会只要节点不重复就会一直累加节点，比如点击（1，1）正常渲染（1，1），点击（1，1，4），也是正常渲染，点击（1，3，4，5），就会返回（1，1，3，4，5），此时再点击（1，1）也还是（1，1，3，4，5）就这样对比，不重复就累加，当加上这个代码就解决了这个问题）
};

const defaultProps = {
  children: "children",  //设置子节点的属性
  label: "authName", //设置要渲染的节点
};

const send = (a, b) => { //每次点击节点树会触发的事件，默认有两个参数
  console.log("a,b", a, b);
};
```
**效果图**
![在这里插入图片描述](https://img-blog.csdnimg.cn/6b4231d4840c4a3da58893940031bd3d.png)