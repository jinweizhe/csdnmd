###### html代码

> 上面全选，小框和下面跟着选中
> 小框全选，上面和下面全选跟着选中
> 下面全选选中，上面的和小框一样选中
> 完整效果图如下
> ![在这里插入图片描述](https://img-blog.csdnimg.cn/4bbb3507cbbd48a5b8d553805da48729.png)


###### 这里我省略了中间部分，效果图如下
![在这里插入图片描述](https://img-blog.csdnimg.cn/2a9e4f94a6574830b75d231085152449.png)


```html
//上面部分
 <el-table
      ref="multipleTable"
      :data="list"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="55"
      >
      //中间部分略。。。。。。
      </el-table-column>
</el-table>


//下面部分
    <div class="zf">
      <el-checkbox
        v-model="checked"
        @change="smallcheckboc"
        >全选</el-checkbox
      >
      <p>
        总价：<span>{{ total }}</span>
      </p>
      <el-button type="danger">结算</el-button>
    </div>
    {{ flag }}
  </div>
```
###### js代码
```js
data(){
 return{
	  tablist: [], //选中的数据存放
      checked: false, //绑定下面复选框的状态
	}
}
methods:{
	//以下所有注释为个人理解，如果有误请勿怪
	//多选后数据变化，(全选按钮的变化，里面的val代表被选中的数据)
    handleSelectionChange(val) {
      //将勾选的数据存储起来，与原数据对比
      this.tablist = val;
      //长度相等，即全部勾选
      if (this.tablist.length == this.list.length) {
        //让下面的全选按钮跟着改变
        this.checked = true;
      } else {
        this.checked = false;
      }
    },
    //全选/取消全选方法
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    //下面复选框的改变事件
    smallcheckboc() {
      console.log("this.checked", this.checked);
      if (this.checked) {
        //取消全选
        //先判断已勾选数据的长度（将已勾选保持勾选状态，否则将会取反一次）
        if (this.tablist.length) {
          this.toggleSelection(this.tablist);
        }
        this.toggleSelection(this.list);
      } else {
        //小框勾选状态为非true时，让它反转勾选
        this.toggleSelection();
      }
    },
}
```