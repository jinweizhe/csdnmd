## 表单校验
```html
<script setup>
import { ref } from "vue";
// 登录的表单数据(绑定到最外层的from标签上)
//里面的每个属性都与element-plus的表单标签进行双向绑定,具体可以看html代码
const loginForm = ref({
  username: "",
  password: "",
  loginpassword: "",
});
// 用户名校验(自定义校验,其中value为输入的数据)
const usernamevalidator = (rule, value, callback) => {
  const regMobile = /^[\w-]{4,16}$/;
  if (regMobile.test(value)) {
    return callback();
  }
  return callback(new Error("请输入4-16位数字或大小写字母或者字符"));
};
// 密码校验(自定义校验,其中value为输入的数据)
const passwordvalidator = (rule, value, callback) => {
  const regMobile =
    /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]/;
  if (regMobile.test(value)) {
    return callback();
  }
  return callback(new Error("请输入数字或大小写字母或者字符任意三项即可"));
};
// 确认密码校验(自定义校验,其中value为输入的数据)
const loginpasswordvalidator = (rule, value, callback) => {
  if (loginForm.value.password === value) {
    return callback();
  }
  return callback(new Error("两次输入不一致"));
};
// 登录数据的校验规则(下面的每个属性就是针对每个表单元素的校验,在标签的prop属性绑定)
//validator为自定义校验,值为上面的自定义规则
const loginrules = ref({
  username: [
    { required: true, message: "账号不能为空", trigger: "blur" },
    { validator: usernamevalidator, trigger: "blur" },
  ],
  password: [
    { required: true, message: "密码不能为空", trigger: "blur" },
    { validator: passwordvalidator, trigger: "blur" },
  ],
  loginpassword: [
    { required: true, message: "确认密码不能为空", trigger: "blur" },
    { validator: loginpasswordvalidator, trigger: "blur" },
  ],
});
//这个baseForm为获取表单的对象ref值,用于对表单规则是否通过进行校验,baseForm绑定到form标签上,具体可以看下面的html代码
const baseForm = ref(null);
const submitForm = () => {
//对表单元素进行校验
  baseForm.value.validate((valid) => {
    if (!valid) {
    //校验失败
      console.log("请调整数据后再请求");
      return false;
    }
    // 校验成功
    console.log("123123", 123123);
  });
};
</script>

<template>
<!-- ref绑定到上面的属性,用于校验验证表单是否正确输入,model绑定的是整个表单数据,rules绑定的是最外层的总体的那个规则对象 -->
  <el-form
    ref="baseForm"
    :model="loginForm"
    :rules="loginrules"
  >
  ><!--label为显示的内容,prop为规则对象内的一个属性,v-model与表单数据双向绑定-->
    <el-form-item
      label="账号"
      prop="username"
    >
      <el-input v-model="loginForm.username" />
    </el-form-item>
    <el-form-item
      label="密码"
      prop="password"
    >
      <el-input
        v-model="loginForm.password"
        type="password"
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item
      label="确认密码"
      prop="loginpassword"
    >
      <el-input
        v-model="loginForm.loginpassword"
        type="password"
        autocomplete="off"
      />
    </el-form-item>

    <el-form-item>
      <el-button
        type="primary"
        @click="submitForm(ruleFormRef)"
      >
        注册
      </el-button>
      <el-button>去登录</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped lang="scss"></style>

```
### 效果图
![在这里插入图片描述](https://img-blog.csdnimg.cn/60212d8e3c094161ab6d0c75382526b2.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/b61bd8caf0a545c889d0bf547ced4165.png)
## 多选表格
```html
<script setup>
import { ref, reactive } from "vue";
//需要绑定的数据
const defaultData = reactive({
  tableData: [
    {
      id: "01",
      name: "测试001",
    },
    {
      id: "02",
      name: "测试002",
    },
    {
      id: "03",
      name: "测试003",
    },
    {
      id: "04",
      name: "测试004",
    },
  ],
});
// 前面的多选框勾中会触发的事件(val为勾选的数据组成的数组)
const handleSelectionChange = (val) => {
  console.log("val", val);
};
</script>

<template>
  <!-- data绑定的是数据,selection-change代表勾选的数据,默认有个参数表示勾选上的数据组成的数组 -->
  <el-table
    :data="defaultData.tableData"
    style="width: 100%"
    @selection-change="handleSelectionChange"
  >
    <!-- 多选框 -->
    <el-table-column
      type="selection"
      width="55"
    />
    <!-- label绑定的是当前的标题, property绑定的是数据里面的某个需要展示的属性-->
    <el-table-column
      property="name"
      label="Name"
      width="120"
    />
    <el-table-column
      property="id"
      label="Address"
      >111</el-table-column
    >
      <!--如果需要写html元素需要添加插槽,通过scope.row获取数据然后可以展现到页面中-->
     <el-table-column label="Address">
      <template #default="scope"> {{ scope.row.Id }} </template>
    </el-table-column>
  </el-table>
</template>

<style scoped lang="scss"></style>

```
### 效果图
![在这里插入图片描述](https://img-blog.csdnimg.cn/57adf28fa7e94d2e9511611b760751bc.png)