[本套笔记对应视频](https://www.bilibili.com/video/BV1Z44y1K7Fj/?p=115&spm_id_from=333.1007.top_right_bar_window_history.content.click)

[本套笔记对应语雀笔记](https://www.yuque.com/fechaichai/qeamqf)

# React基础篇
## 创建项目
```cmd
npx create-react-app 项目名
```
-  a. npx create-react-app 是固定命令，create-react-app是React脚手架的名称
 - b. react-basic表示项目名称，可以自定义，保持语义化
 - c. npx 命令会帮助我们临时安装create-react-app包，然后初始化项目完成之后会自自动删掉，所以不需要全局安装create-react-app
## 启动项目
```cmd
$ yarn start
or
$ npm start
```
## 项目目录说明调整
- 目录说明 
--  a. src 目录是我们写代码进行项目开发的目录
 -- b. package.json  中俩个核心库：react 、react-dom
- 目录调整 
 -- a. 删除src目录下自带的所有文件，只保留app.js根组件和index.js
  -- b. 创建index.js文件作为项目的入口文件，在这个文件中书写react代码即可
- 入口文件说明 
 ```js
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// 引入根组件App
import App from './App'
// 通过调用ReactDOM的render方法渲染App根组件到id为root的dom节点上
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
 ```
index.js改造如下
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 去掉严格模式节点
  // 会添加useEffect的执行时机
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
```
## 项目src剩余目录
![在这里插入图片描述](https://img-blog.csdnimg.cn/b434c88014024f83953b1729d6a14fc1.png)

**后续所有代码片段都是在App.js里面写的**
## 01基本使用
```js
// 1.识别常规变量
const name = "萧寂";
// 2.原生js方法调用
const getAge = () => {
  return 18;
};
// 3.三元运算符
const flag = true;

function App() {
  return (
    <div className="App">
      <div>{name}</div>
      <div>{getAge()}</div>
      <div>{flag ? "1234" : "456"}</div>
    </div>
  );
}

export default App;
```
## 02 列表渲染
```js
// 列表渲染
// 注意事项,遍历列表时,同样需要一个不可重复的key
// key仅仅在内部使用,不会渲染到页面上

const songs = [
  { id: 1, name: "痴心绝对" },
  { id: 2, name: "像我这样的人" },
  { id: 3, name: "南山南" },
];

function App() {
  return (
    <div className="App">
      <ul>
        {songs.map((item) => (
          <li key={songs.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```
## 03 条件渲染
```js
// 条件渲染
// 技术方案:1.三元表达式,2.逻辑运算符
const flag = true
function App() {
  return (
    <div className="App">
      {/* 条件渲染字符串 */}
      {flag ? "react真有趣" : "vue真有趣"}
      {/* 条件渲染标签/组件 */}
      {flag ? <h2>this is span</h2> : null}

      {/* 逻辑运算 */}
      {true && <h2>this is span</h2>}
    </div>
  );
}

export default App;
```
## 04  样式处理
```js
// 样式处理
// 1.类名样式 导入样式
import "./04 app.css";
// 2.内联/行内样式,在元素身上绑定一个style即可
const style = { color: "red", fontSize: "30px" };

// 动态控制类名
const activeflag = true;
function App() {
  return (
    <div className="App">
      {/* 测试类名样式,通过className */}
      <span className={activeflag ? "active" : ""}>测试类名样式</span>
      <br></br>
      {/* 内联/行内样式 */}
      <span style={{ color: "red", fontSize: "30px" }}>this is span</span>
      <br></br>
      <span style={style}>this is span</span>
    </div>
  );
}

export default App;
```
**样式渲染对应的css文件内容为**
```css
.active{
    color: blue;
}
```
## 05 函数和类组件创建和渲染
```js
import React from "react"
// 函数组件的创建和渲染
// 创建函数组件
// 1. 组件的名称必须首字母大写，react内部会根据这个来判断是组件还是普通的HTML标签
// 2. 函数组件必须有返回值，表示该组件的 UI 结构；如果不需要渲染任何内容，则返回 null
// 3. 组件就像 HTML 标签一样可以被渲染到页面中。组件表示的是一段结构内容，对于函数组件来说，渲染的内容是函数的返回值就是对应的内容
// 4. 使用函数名称作为组件标签名称，可以成对出现也可以自闭合
function Hello () {
  return <div>我是函数组件创建的组件</div>
}

// 创建类组件
// 1. 类名称也必须以大写字母开头
// 2. 类组件应该继承 React.Component 父类，从而使用父类中提供的方法或属性
// 3. 类组件必须提供 render 方法render 方法必须有返回值，表示该组件的 UI 结构
class HelloComponent extends React.Component {
  render () {
    return <div>我是类组件创建的组件</div>
  }
}

function App () {
  return <div className="App">
    {/* 渲染函数组件 */}
    <Hello></Hello>
    {/* 渲染类组件创建的 */}
    <HelloComponent></HelloComponent>
  </div>
}

export default App
```
## 06 事件绑定
```js
import React from "react"
function Hello () {
  // 事件绑定
  // 绑定函数组件的点击事件
  const clickHandler = () => { console.log('函数组件的点击事件被触发了') }
  return <div onClick={clickHandler}>我是函数组件创建的组件</div>
}

class HelloComponent extends React.Component {
  // 绑定类组件的点击事件
  // 事件回调函数标准写法,避免this指向问题
  // 这样写,回调函数中的this指向的是当前组件实例对象
  clickHandler2 = () => { console.log('类组件的点击事件被触发了') }
  render () {
    return <div onClick={this.clickHandler2}>我是类组件创建的组件</div>
  }
}

function App () {
  return <div className="App">
    {/* 渲染函数组件 */}
    <Hello></Hello>
    {/* 渲染类组件创建的 */}
    <HelloComponent></HelloComponent>
  </div>
}

export default App
```
## 07 事件对象e
```js
import React from "react"
function Hello () {
  const clickHandler = (e) => {
    console.log('函数组件的点击事件被触发了', e)
    // 阻止a链接跳转
    e.preventDefault()
  }
  return <div onClick={clickHandler}><a href="http://baidu.com">点击跳转百度</a></div>
}

class HelloComponent extends React.Component {
  clickHandler2 = (e) => { console.log('类组件的点击事件被触发了', e) }
  render () {
    return <div onClick={this.clickHandler2}>我是类组件创建的组件</div>
  }
}

function App () {
  return <div className="App">
    {/* 渲染函数组件 */}
    <Hello></Hello>
    {/* 渲染类组件创建的 */}
    <HelloComponent></HelloComponent>
  </div>
}

export default App

```
## 08 传递额外参数
```js
import React from "react"
function Hello () {
  // 传递额外参数
  // 当需要有参数传入并且也需要事件对象时,传参时需要把箭头函数的事件对象传入函数,只需要这样一个额外参数

  // 只需要一个额外参数  () => onDel(item.id)
  // 既需要事件对象也需要额外参数  (e) => onDel(e,item.id)
  const clickHandler = (msg, e) => { console.log('函数组件的点击事件被触发了', msg, e) }
  // 传参时候需要使用箭头函数
  return <div onClick={(e) => clickHandler("this is msg", e)}>我是函数组件创建的组件</div>
}

class HelloComponent extends React.Component {
  clickHandler2 = () => { console.log('类组件的点击事件被触发了') }
  render () {
    return <div onClick={this.clickHandler2}>我是类组件创建的组件</div>
  }
}

function App () {
  return <div className="App">
    {/* 渲染函数组件 */}
    <Hello></Hello>
    {/* 渲染类组件创建的 */}
    <HelloComponent></HelloComponent>
  </div>
}

export default App

```
## 09 组件状态修改
```js
// 组件状态  类组件进行演示
import React from "react"
class TextComponent extends React.Component {
  // 定义组件状态
  state = {
    // 这里定义各种属性  全都是当前组件状态
    name: "cp teacher",
    count: 0
  };
  changeName = () => {
    // 修改state中的状态name
    // 注意:不可以直接做复制修改,必须通过一个方法 setState
    this.setState({ name: "萧寂" })
  };
  changeCount = () => {
    // 让count的值加1
    this.setState({ count: this.state.count + 1 })
  };
  render () {
    return (<div>
      {/* 渲染name */}
      当前name为:{this.state.name}
      {/* 修改name状态 */}
      <button onClick={this.changeName}>修改name状态</button>
      <button onClick={this.changeCount}>修改count++,当前为{this.count}</button>
    </div>)
  }
}
function App () {
  return <div className="App">
    <TextComponent></TextComponent>
  </div>
}

export default App

/**
 * 总结
 * 1. 编写组件其实就是编写原生js类或者函数
 * 2. 定义状态必须通过state 实例属性的方法 提供一个对象 名称是固定的就叫做state
 * 3. 修改state中的任何属性 都不可以通过直接赋值 必须走setState方法 这个方法来自于继承得到
 * 4. 这里的this关键字 很容易出现指向错误的问题 上面的写法是最推荐和最规范的 没有this指向问题
 */
```
## 10 受控组件
```js
// 表单处理
// 目标任务:  能够使用受控组件的方式获取文本框的值

// 使用React处理表单元素，一般有俩种方式：
// 1. 受控组件 （推荐使用）
// 2. 非受控组件 （了解）

// 什么是受控组件？  input框自己的状态被React组件状态控制
// React组件的状态的地方是在state中，input表单元素也有自己的状态是在value中，
// React将state与表单元素的值（value）绑定到一起，由state的值来控制表单元素的值，
// 从而保证单一数据源特性


// 以获取文本框的值为例，受控组件的使用步骤如下：
// 1. 在组件的state中声明一个组件的状态数据
// 2. 将状态数据设置为input标签元素的value属性的值
// 3. 为input添加change事件，在事件处理程序中，通过事件对象e获取到当前文本框的值（即用户当前输入的值）
// 4. 调用setState方法，将文本框的值作为state状态的最新值

import React from 'react'

class InputComponent extends React.Component {
  // 声明组件状态
  state = {
    message: 'this is message',
  }
  // 声明事件回调函数
  changeHandler = (e) => {
    this.setState({ message: e.target.value })
  }
  render () {
    return (
      <div>
        {this.state.message}<br></br>
        {/* 绑定value 绑定事件*/}
        <input value={this.state.message} onChange={this.changeHandler} />
      </div>
    )
  }
}


function App () {
  return (
    <div className="App">
      <InputComponent />
    </div>
  )
}
export default App
```
## 11 非受控组件
```js
// 非受控组件
import React, { createRef } from "react"

class Input extends React.Component {
  msgRef = createRef()  // 创建一个容器
  getValue = () => {
    // 通过ref获取输入框的值
    // this.msgRef.current为绑定的原生dom元素
    console.log(this.msgRef.current.value)
  }
  render () {
    return (
      <>
        <input type="text" ref={this.msgRef} />
        <button onClick={this.getValue}>点击获取输入框的值</button>
      </>
    )
  }
}
function App () {
  return (
    <div className="App">
      <Input></Input>
    </div>
  )
}
export default App
```
## 12 组件通信父传子
```js
// 组件通信

// 组件是独立且封闭的单元，默认情况下组件只能使用自己的数据（state）
// 组件化开发的过程中，完整的功能会拆分多个组件，在这个过程中不可避免的需要互相传递一些数据
// 为了能让各组件之间可以进行互相沟通，数据传递，这个过程就是组件通信
// 1. 父子关系 -  最重要的
// 2. 兄弟关系 -  自定义事件模式产生技术方法 eventBus  /  通过共同的父组件通信
// 3. 其它关系 -  mobx / redux / zustand

// 父传子实现
// 1.  父组件提供要传递的数据  -  state 
// 2.  给子组件标签添加属性值为 state中的数据 
// 3.  子组件中通过 props 接收父组件中传过来的数据 
//   a. 类组件使用this.props获取props对象
//   b. 函数式组件直接通过参数获取props对象
import React from "react"
// App父组件(类组件) Son子组件(函数式和类组件)
function SonB (props) {
  // props是一个对象  里面存着通过父组件传入的所有数据
  // props为只读对象,不能修改
  // props可以传递任何类型的数据(数组,对象,字符串,布尔,数字,JSX...)
  return (
    <div>我是函数子组件,--{props.msg}</div>
  )
}

class SonA extends React.Component {
  // 在类组件直接使用this.props.属性名拿到父组件传来的数据,这里的prop是固定的
  render () {
    return (<div>我是类子组件,--{this.props.msg}</div>)
  }
}

class App extends React.Component {
  state = {
    message: "this is message"
  }
  render () {
    return (<div>
      {/* 子组件身上绑定属性,属性名可以自定义 保持语义化 */}
      <SonA msg={this.state.message}></SonA>
      <SonB msg={this.state.message}></SonB>
    </div>)
  }
}

export default App
```
## 13 Props说明
```js
// 组件通信

// props是一个对象  里面存着通过父组件传入的所有数据
// props为只读对象,不能修改
// props可以传递任何类型的数据(数组,对象,字符串,布尔,数字,JSX...)
import React from "react"

function SonA (props) {
  console.log('props', props)
  // 这里也可以将props进行解构赋值取数据,也可以直接在形参那里解构
  return (
    <div>
      {/* 数组 */}
      我是函数子组件,--{props.list.map(item => <p key={item}>{item}</p>)}
      {/* 对象 */}
      {props.userinfo.name}
      {/* 函数 */}
      <button onClick={props.getMes}>-- 父组件的函数</button><br />
      {/* JSX */}
      {props.child}
    </div>
  )
}

class App extends React.Component {
  state = {
    list: [1, 2, 3],
    userinfo: {
      name: "cp",
      age: 30
    },
  };
  getMes = () => {
    console.log('父组件中的函数')
  }
  render () {
    return (<div>
      {/* 模拟传入数组,对象,函数和JSX的场景 */}
      <SonA list={this.state.list} userinfo={this.state.userinfo} getMes={this.getMes} child={<span>我是传过来的JSX</span>}></SonA>
    </div>)
  }
}

export default App
```
## 14 组件通信子传父
```js
// 组件通信

// 父传子 props 函数
// 子传父:子组件调用父组件传递过来的函数,并且把想要传递的数据当成函数的实参
// 传入即可
import React from "react"

function Son (props) {
  const { getSonMsg } = props
  return (
    <div>
      this is son
      {/* 子组件向父组件传递参数 */}
      <button onClick={() => getSonMsg("这里是来自于子组件的数据") }>点击执行</button>
    </div>
  )
}

class App extends React.Component {
  // 准备数据
  state = {
    list: [1, 2, 3]
  };
  // 准备一个函数,传给子组件
  getSonMsg = (a) => {
    console.log('a',a);
  }
  render () {
    return (<div>
      <Son getSonMsg={this.getSonMsg}></Son>
    </div>)
  }
}

export default App
```
## 15 组件通信兄弟传值
```js
// 组件通信

// 目标,把B的数据传入A
// 技术方案:
//   1.先把B中的数据通过子传父传给App
//   2.再把App接收到的SonB的数据 通过父传子 传给A
import React from "react"

function SonA (props) {
  return (
    <div>
      <div>this is A</div>
      <p>B组件传来的值---({props.num})</p>
    </div>
  )
}

function SonB (props) {
  const bMsg = "这是来自于B组件的数据"
  return (
    <div>
      <div>this is B</div>
      <button onClick={() => { props.getMsg(bMsg) }}>点击按钮将B组件的数据传给A组件</button>
    </div>
  )
}

class App extends React.Component {
  state = {
    num: ""
  }
  // 声明一个传递给B组件的方法
  getMsg = (msg) => {
    console.log('msg',msg);
    this.setState({
      num : msg
    })
  }
  render () {
    return (<div>
      <SonA num={this.state.num}></SonA>
      <SonB getMsg={this.getMsg}></SonB>
    </div>)
  }
}

export default App
```
## 16 createContext跨组件通信
```js
// 组件通信

// 爷孙组件跨组件通信
// app - a - c
// app - c

// 注意事项:上层组件和下层组件关系是相对的,只要存在就可以使用,通常我们会以app作为数据提供方
// 这里涉及的语法都是固定的,有两处,提供的位置value提供位置 获取的位置 {value=><div>{value}</div>获取

// 步骤:
// 1.导入createContent方法并执行
import React, { createContext } from "react"
// 解构提供者和消费者
const { Provider, Consumer } = createContext()
function SonA (props) {
  return (
    <div>
      <div>这是A组件</div>
      <SonC></SonC>
    </div>
  )
}

function SonC (props) {
  return (
    <div>
      <div>这是C组件</div>
      {/* 3. 这里的value接收上层传来的数据 */}
      <Consumer>
        {value => <span>{value}</span>}
      </Consumer>
    </div>
  )
}

class App extends React.Component {
  state = {
    message: "this is message"
  }
  render () {
    return (
      // 2. 使用包裹Provider根组件,value就是传递的数据
      <Provider value={this.state.message}>
        <div>
          <SonA></SonA>
        </div>
      </Provider>
    )
  }
}

export default App
```
## 17 组件的children属性
```js
// children属性

import React from "react"
// 渲染列表

function ListItem ({ children }) {
  // 这里可以直接解构出children属性,当children内容多时,会形成一个数组,需要那部分可以直接通过索引取得
  return (
    <div>
      ListItem
      {children[0]}
      <button onClick={children[1]}>点击触发函数</button>
    </div>
  )
}

class App extends React.Component {
  render () {
    return (
      <div>
        <ListItem>
          {/* 打开调试工具会发现在props里面多了个children属性,值就是组件内部的值
            children的值可以为普通文本,普通标签元素,函数和JSX
            */}
          <div>this is children</div>
          {() => { console.log('12345') }}
        </ListItem>
      </div>
    )
  }
}

export default App
```
## 18 props校验和默认值
```js
// props校验

// 实现步骤
// 1. 安装属性校验包：npm install prop-types
// 2. 导入prop-types 包
// 3. 使用 组件名.propTypes = {} 给组件添加校验规则

import React from "react"
// 里面有各种各样的内置校验规则
import propTypes from "prop-types"

function Test ({ list }) {
  return (
    <div>
      <div>this is list</div>
      {list.map(item => <p key={item}>{item}</p>)}
    </div>
  )
}

// 定义规则
Test.propTypes = {
  list: propTypes.array.isRequired //限定Test组件的prop的list属性类型为array,并且为必传项
}

// 定义默认值(函数组件和类组件不一样)
// 函数组件
// 第一种方式(官方比较推荐的方式)
function List1 ({ pageSize = 10, pageSize2 }) {
  return (
    <div>
      此处展示函数组件props第一种显示的默认值：{pageSize}
      此处展示函数组件props第二种显示的默认值：{pageSize2}
    </div>
  )
}
// 第二种方式,设置pageSize2的默认值为20
List1.defaultProps = {
  pageSize2: 20
}

// 类组件
// 第一种传参方式(比较推荐)
class List2 extends React.Component {
  static defaultProps = {
    pageSize1: 10
  }
  render () {
    return (
      <div>
        此处展示类组件props第一种显示的默认值：{this.props.pageSize1}
        {/* 这里有问题,把传参方式2注释掉第一种方式才能正常显示,如果同时存在只会显示方式2,我也不知道是什么原因 */}
        此处展示类组件props第二种显示的默认值：{this.props.pageSize2}
      </div>
    )
  }
}
// 第二种传参方式
List2.defaultProps = {
  pageSize2: 30
}


class App extends React.Component {
  render () {
    return (
      <div>
        <Test list={[1, 2, 3]}></Test>
        <List1></List1>
        <List2></List2>
      </div>
    )
  }
}

export default App
```
## 19 生命周期挂载阶段
```js
// 生命周期

//只有类组件才有生命周期,函数组件无生命周期

// 生命周期图示
// https://cdn.nlark.com/yuque/0/2022/png/274425/1654490729034-d2d80cce-7fab-4dd8-bcbc-29e33bdffb63.png?date=1694351792480

//   钩子函数	              触发时机                           	             作用
// constructor	          创建组件时，最先执行，初始化的时候只执行一次	         1. 初始化state  2. 创建 Ref 3. 使用 bind 解决 this 指向问题等
// render	                每次组件渲染都会触发(例如按钮数字自增页面重新变化)	    渲染UI（注意： 不能在里面调用setState() ）
// componentDidMount	    组件挂载（完成DOM渲染）后执行，初始化的时候执行一次	    1. 发送网络请求   2.DOM操作
import React from "react"

class App extends React.Component {
  constructor() {
    super()  //这个需要加,不然会报错
    console.log('counstructor')
  }
  componentDidMount () {
    // 在这个生命周期里面适合发送网络请求和对DOM操作
    console.log('componentDidMount')
  }
  state = {
    count: 0
  }
  clickHandler = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render () {
    console.log('render')
    return (
      <div>
        <button onClick={this.clickHandler}>点击自增加1,当前count为{this.state.count}</button>
      </div>
    )
  }
}

export default App
```
## 20 更新和卸载阶段
```js
// 生命周期

//只有类组件才有生命周期,函数组件无生命周期

// 生命周期图示
// https://cdn.nlark.com/yuque/0/2022/png/274425/1654490729034-d2d80cce-7fab-4dd8-bcbc-29e33bdffb63.png?date=1694351792480

// 钩子函数	             触发时机	                作用
// render	              每次组件渲染都会触发	     渲染UI（与 挂载阶段 是同一个render）
// componentDidUpdate	  组件更新后（DOM渲染完毕）	 DOM操作，可以获取到更新后的DOM内容，不要直接调用setState
// componentWillUnmount	组件卸载（从页面中消失）	 执行清理工作（比如：清理定时器等）
import React from "react"

// 演示组件卸载
class Test extends React.Component {
  // 如果数据是组件的状态需要去影响视图,定义到state中
  // 而如果我们需要的数据状态,不和视图绑定,定义成一个普通的实例属性就可以啦
  // state中尽量保持简洁
  timer = null
  // 组件挂载开启定时器
  componentDidMount () {
    this.timer = setInterval(() => {
      console.log('定时器开启')
    }, 0)
  }

  componentWillUnmount () {
    // 组件卸载时清理定时器
    clearInterval(this.timer)
    console.log('组件销毁了')

  }

  render () {
    return (<div>Test</div>)
  }
}
class App extends React.Component {

  componentDidUpdate () {
    console.log('页面更新啦')
  }

  state = {
    count: 0,
    flag: true
  }

  clickHandler = () => {
    this.setState({
      count: this.state.count + 1,
      flag: !this.state.flag
    })
  }
  render () {
    console.log('render')
    return (
      <div>
        {/* 通过一个数据状态的切换,让test组件销毁重建 */}

        <button onClick={this.clickHandler}>点击自增加1,当前count为{this.state.count}</button>
        {this.state.flag ? (<Test></Test>) : null}
      </div>
    )
  }
}

export default App
```
## 21 Hooks函数useState
```js
// Hooks函数
// 快速使用
// useState
// 1.导入useState函数
// 2.执行这个函数并且传入初始值 必须在函数组件中
// 3.[数据,修改数据的方法]
// 4.使用数据 修改数据

// 状态的读取和修改
// const [count, setCount] = useState(0)
// 1.useState传过来的参数作为count的初始值
// 2.[count, setCount]这里的写法是一个解构赋值 useState的返回值是一个数组
//   名字可以自定义吗??  当然可以自定义,保持语义化,第二个参数为set+count的首字母大写
//   这两个参数顺序可以换吗??? 当然不可以  第一个参数就是数据状态,第二个参数就是修改数据的方法
// 3.setCount函数  作用用来修改count  依旧保持不能修改原值还是生成一个新值替换原值
//   setCount(基于原值计算得到的新值,还是不能使用++  --)
// 4.count和setCount是一对  是绑在一起的  setCount只能用来修改对应的count值

// 组件的更新过程
// 当调用setCount的时候,更新过程

// 首次渲染
// 首次被渲染的时候  组件内部的代码会被执行一次
// 其中useState也会跟着执行  这里重点注意

// 更新渲染(setCount都会更新)
// 1.app组件会再次渲染 这个函数会再次执行
// 2.useState再次执行  得到的新的count值不是0,而是修改之后的1 模板会用新值渲染

// 重点一句话:useState初始值只在首次渲染生效,后续只要调用setCoun整个app代码都会执行
// 此时count每次拿到的都是最新值

// useState的使用规则
// 1.  useState 函数可以执行多次，每次执行互相独立，每调用一次为函数组件提供一个状态 
// 2.  useState 注意事项 
//   a.  只能出现在函数组件或者其他hook函数中 
//   b.  不能嵌套在if/for/其它函数中（react按照hooks的调用顺序识别每一个hook） 写到最外层函数中
// 3.  可以通过开发者工具查看hooks状态 
import { useState } from 'react'
function App () {
  // count:数据状态
  // setCount:修改count的函数(专有函数)
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>
    </div>
  )
}

export default App
```
## 22 useEffect
```js
// Hooks函数

// 什么是副作用
// 副作用是相对于主作用来说的，一个函数除了主作用，其他的作用就是副作用。对于 React 组件来说，主作用就是根据数据（state/props）渲染 UI，除此之外都是副作用（比如，手动修改 DOM）

// 常见的副作用
// 1. 数据请求 ajax发送
// 2. 手动修改dom
// 3. localstorage操作

// useEffect函数的作用就是为react函数组件提供副作用处理的！



// 在修改数据之后将count值放到页面标题中
// 1.导入useEffect函数
// 2.在函数组件中执行 传入回调 并且定义副作用
// 当我们修改状态更新组件时,副作用也会不断执行

// 依赖项控制副作用的执行时机
// 1.默认状态(无依赖项)组件初始化的时候先执行一次 等到每次数据修改组件更新再次执行
// 2.参数二添加空数组,只会在组件初始化时执行一次,后续不会执行
// 3.添加特定依赖项,组件初始化执行一次,参数二数组内部添加指定数据,代表只有指定数据修改才会执行,数组内部没有的数据不会再次执行(依赖的特定项发生变化才会再次执行)
// 4.注意事项:只要在useEffect回调函数中用到的数据状态就应该出现在依赖项数组中声明 否则可能有bug

// 某种意义上 hook的出现 就是想不用生命周期概念也可以写业务代码
import { useEffect, useState } from 'react'
function App () {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  useEffect(() => {
    console.log('副作用执行了')
    // 定义副作用
    document.title = count
    console.log('name', name)
  }, [count, name])
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>
      <button onClick={() => setName("cp")}>
        {name}点击
      </button>
    </div>
  )
}

export default App
```
## 23 清除副作用
```js
// Hooks函数

// 清理副作用
import { useEffect, useState } from 'react'
function Text () {
  useEffect(() => {
    let timer = setInterval(() => {
      console.log('定时器执行了')
    }, 1000)

    return () => {
      // 这里写清理副作用的代码(当组件销毁时会清理副作用)
      clearInterval(timer)
    }
  }, [])
  return (
    <div>
      this is Text
    </div>
  )
}


function App () {
  const [flag, setFlag] = useState(true)
  return (
    <div>
      {flag ? (<Text></Text>) : null}
      <button onClick={() => setFlag(!flag)}>swith</button>
    </div>
  )
}
export default App
```
## 24 发送网络请求
```js
// Hooks函数

import { func } from "prop-types"
import { useEffect } from "react"

// 发送网络请求
// 类组件  如何发送网络请求
// 生命周期钩子 componentDidMount
// 执行时机?
// 在初始化的时候dom渲染完毕只执行一次

// useEffect
// 1.不加依赖项 -初始化 +重新渲染
// 2.第二个参数加[],初始化执行一次
// 3.加特定依赖项[count,name] - 首次执行+任一变化执行

function App () {
  useEffect(() => {
    function data () {
      fetch("https://api.vvhan.com/api/weather?ip=180.149.130.16").then((response) => response.json()).then((data) => console.log(data))
    }

    data()
  })

  return (
    <div>
    </div>
  )
}
export default App
```
## 25 useRef使用
```js
// Hooks函数
import React, { useEffect, useRef } from "react"
// 组件实例(类组件)
// dom对象 标签
class Test extends React.Component {
  state={
    name:"test name"
  }
  getName=()=>{
    return "this is child Test"
  }
  render () {
    return (<div>我是类组件</div>)
  }
}

function App () {
  const testRef = useRef(null)
  const h1Ref = useRef(null)

  useEffect(() => {
    console.log('testRef', testRef.current) //组件实例对象
    console.log('testRef', testRef.current.state.name) //组件实例对象里面的数据
    console.log('testRef', testRef.current.getName()) //组件实例对象里面的方法
    console.log('h1Ref', h1Ref.current)   //dom对象
  }, [])
  return (
    <div>
      <Test ref={testRef}></Test>
      <div ref={h1Ref}>this is div</div>
    </div>
  )
}
export default App
```
## 26 useContext使用
```js
// Hooks函数
import React, { createContext, useContext, useState } from "react"
const Context = createContext()
function ComA () {
  // 这里可以接收上层传来的value的数据
  const count = useContext(Context)
  return (
    <div>this is ComA<br></br>
      顶层传来的count数据为---{count}
      <ComC></ComC>
    </div>

  )
}


function ComC () {
  // 可以嵌套
  const count = useContext(Context)
  return (
    <div>this is ComC<br></br>
      顶层传来的count数据为---{count}
    </div>
  )
}


function App () {
  const [count, setCount] = useState(0)
  return (
    // 这里提供数据给下层使用
    //下面这个标签也可以直接包裹index.js里面的<App/>,相当于在顶层组件传递数据了
    <Context.Provider value={count}>  
      <div>
        <ComA></ComA>
        <button onClick={() => setCount(count + 1)}>点击修改count数据</button>
      </div>
    </Context.Provider>

  )
}
export default App
```
# React路由篇
## 路由demo案例

> 创建项目
> npx create-react-app react-router
> 安装最新版本路由
> cnpm install react-router-dom@6
### 项目结构
![在这里插入图片描述](https://img-blog.csdnimg.cn/039f9b9c3a4f4061892df405c8f5926e.png)
**创建两个组件Home.js和About.js**
### About.js内容为
```js
function About(){
  return(
    <div>about</div>
  )
}
export default About
```
### Home.js内容为
```js
function Home(){
  return(
    <div>home</div>
  )
}
export default Home
```
### App.js内容为
```js
//  安装react-router包
//  npm install react-router-dom@6

// 进行路由配置
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'

// 引入About和Home组件
import About from './About'
import Home from './Home'


function App () {
  return (
    <div>
      {/* 最外层包裹,用来声明一个非hash模式的路由 */}
      <BrowserRouter>
        {/* link相当于按钮,可以实现跳转,to属性代表跳转的路由地址 */}
        <Link to="/">首页</Link>
        <Link to="/about">关于</Link>
        {/* 路由出口,路由对应的组件会在这里渲染 */}
        <Routes>
          {/* 这里是路由的配置,path代表路径,element代表当前路径需要匹配的组件 */}
          <Route path='/' element={<Home></Home>}>
          </Route>
          <Route path='/about' element={<About></About>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
```
### 效果图
![在这里插入图片描述](https://img-blog.csdnimg.cn/a54ec9627bc84c39aeea3d0d85677ee8.png)
## 路由各个组件说明
```js
路由组件说明
BrowserRouter,HashRouter(路由模式,包裹整个项目,一个项目只用到一次)
BrowserRouter(history模式:http://localhost:3000/first)[推荐]
HashRouter(hash模式:http://localhost:3000/#/first)

Link:作用用于指定导航链接,完成路由跳转
语法说明:组件通过to属性指定路由地址,最终会渲染为a链接元素

Routes:作用提供一个路由出口,满足条件的路由组件会渲染到组件内部

Route:作用用于指定导航链接,完成路由匹配
语法说明:path属性指定匹配的路径地址,element属性指定要渲染的组件
以上面的小demo为例,当url路径为'/about'时,会渲染<About/>组件
```
## 编程式导航使用
### 改写App.js
**在项目中加入一个login组件,以上面的demo为例,将App.js改写如下:**
**简单来说就是引入login组件并且在路由出口也配置了一下**
```js

// 进行路由配置
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'

// 引入About和Home和Login组件
import About from './About'
import Home from './Home'
import Login from './Login'


function App () {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">首页</Link>
        <Link to="/about">关于</Link>
        <Routes>
          <Route path='/' element={<Home></Home>}>
          </Route>
          <Route path='/about' element={<About></About>}>
          </Route>
          <Route path='/login' element={<Login></Login>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
```
### Login.js组件代码(使用编程式导航三步走)
```js
//   跳转到关于
//   1. 导入一个 useNavigate 钩子函数
import { useNavigate } from "react-router-dom"

function Login () {
  // 2. 执行 useNavigate 函数 得到 跳转函数
  const navigate = useNavigate()
  function goabout () {
    navigate('/about')
  }
  return (
    <div>
      login
      {/* 3. 在事件中执行跳转函数完成路由跳转 */}
      <button onClick={goabout}>点击跳转关于页面</button>
    </div>
  )
}
export default Login
```
**功能就是:在浏览器地址栏手动跳转login组件,点击按钮能跳转到about组件,在login.js里面使用的是编程式导航**
![在这里插入图片描述](https://img-blog.csdnimg.cn/39e505c3e2094022ab9a54ef4276160a.png)
**在这里有个问题,当点击登录后跳转到about界面了,但是点击浏览器的后退还是能会到登录页,解决方式如下**
```js
navigate('/about',{replact:true}) //将参数二的replace的值改为true以后,会以替换形式跳转而不是叠加跳转
```
### 跳转携带参数(两种方式)
场景:在跳转是需要携带参数的情况
#### 1.searchParams传参(在跳转前的组件传参)
```js
import { useNavigate } from "react-router-dom"
//下面两个代码要写到组件内
const navigate = useNavigate()
navigate('/about?id=1001')
// 取参(在跳转的目标组件取参)
import { useSearchParams } from "react-router-dom"
let [params] = useSearchParams()
let id = params.get('id')
```
**上案例(还是以上面的demo为主)**

Login代码为
```js
//   跳转到关于
//   1. 导入一个 useNavigate 钩子函数
import { useNavigate } from "react-router-dom"

function Login () {
  // 2. 执行 useNavigate 函数 得到 跳转函数
  const navigate = useNavigate()
  function goabout () {
    navigate('/about?id=1001', { replace: true })
  }
  return (
    <div>
      login
      {/* 3. 在事件中执行跳转函数完成路由跳转 */}
      <button onClick={goabout}>点击跳转关于页面</button>
    </div>
  )
}
export default Login
```
About代码为
```js
// 取参
import { useSearchParams } from "react-router-dom"
function About () {
  // 这里解构的params的包裹符号为中扩号,useSearchParams()是一个数组
  const [params] = useSearchParams()
  // params是一个对象,对象里面有一个get方法用来获取对应的参数,把参数名作为get方法的实参传过来
  const id = params.get('id') //多参数的话,需要得到哪个参数这里的id就换成什么参数,参数名有重复的话只能获取最靠前的参数的属性
  return (
    <div>about得到的参数id为----{id}</div>
  )
}

export default About
```


#### 2.params传参
**这种方式需要在配置路由使用占位符,在App.js页面的将如下代码进行修改**
```html
修改前
<Route path='/about/:id' element={<About></About>}></Route>
修改后
<Route path='/about/:id' element={<About></About>}></Route>
```
```js
// 传参
import { useNavigate } from "react-router-dom"
//下面两个代码要写到组件内
const navigate = useNavigate()
navigate('/about/1001')
// 取参
import { useParams } from "react-router-dom"
let params = useParams()
let id = params.id
```
**上案例(还是以上面的demo为主)**
Login.js
```js
//   跳转到关于
//   1. 导入一个 useNavigate 钩子函数
import { useNavigate } from "react-router-dom"

function Login () {
  // 2. 执行 useNavigate 函数 得到 跳转函数
  const navigate = useNavigate()
  function goabout () {
    navigate('/about/1001', { replace: true })
  }
  return (
    <div>
      login
      {/* 3. 在事件中执行跳转函数完成路由跳转 */}
      <button onClick={goabout}>点击跳转关于页面</button>
    </div>
  )
}
export default Login
```
About.js
```js
// 取参
import { useSearchParams,useParams } from "react-router-dom"
function About () {
  const params = useParams()
  const id = params.id
  return (
    <div>about得到的参数id为----{id}</div>
  )
}

export default About
```
## 嵌套路由
### 基础配置
**这里以App.js和Layou.js代码为例,其余引入的组件代码和layout.js一样,只是没有二级出口**

App.js
```js

// 进行路由配置
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'

// 引入Login和Login组件
import Layout from './Layout'
import Login from './Login'
// 引入二级路由组件
import Article from './Article'
import Board from './Board'


function App () {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">首页</Link>
        <Routes>
          {/* 一级路由 */}
          <Route path='/' element={<Layout></Layout>}>
            {/* 二级路由 */}
            {/* 这里可以写好多个子路由 */}
            <Route path="board" element={<Board></Board>}></Route>
          </Route>
          {/* 一级路由 */}
          <Route path='/login' element={<Login></Login>}>
            {/* 二级路由 */}
            <Route path="article" element={<Article></Article>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
```

Layout.js
```js
import { Outlet } from "react-router-dom"

function Layout () {
  return (
    <div>
      Layout
      {/* 定义二级路由出口 */}
      <Outlet></Outlet>
    </div>
  )
}

export default Layout
```
效果图

![在这里插入图片描述](https://img-blog.csdnimg.cn/39e5987291934d85bb04be851ba543c7.png)
### 默认二级路由设置
```js
	   <Routes>
          {/* 一级路由 */}
          <Route path='/' element={<Layout></Layout>}>
            {/* 二级路由 */}
            {/* 这里可以写好多个子路由 */}
            //<Route path="board" element={<Board></Board>}></Route>
            //将上面的path属性去掉,给Route加上index属性就是默认显示的子路由
            <Route index element={<Board></Board>}></Route>
          </Route>
        </Routes>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/e4d70cc25899471f878a3e78ff9ec7d7.png)
### 404页配置

> 场景:当所有路径都没有匹配的时候显示
> 语法说明:在各级路由的最后添加*路由作为兜底
```js
//这个要放到所有路由后面,当没有路由匹配时显示此路由
<Route path="*" element={<NotFound></NotFound>}></Route>
```
# Mobx
## 简介
**全局状态管理,同redux**
> 优势:
> 1.简单:编写无模板的的极简代码来精确描述你的意图(原生js)
> 2.轻松实现最优渲染,依赖自动追踪最小渲染优化
> 3.架构自由,可移植,可测试

## 环境配置
**配置说明**
Mobx是一个独立的响应式的库,可以独立于任何UI框架而存在,但是通常人们把它和react来绑定使用,用mobx来做响应式数据建模,React作为UI视图框架渲染内容

所以配置方面需要三个部分

> 1.一个通过create-react-app创建好的react项目环境
> 2.mobx本身
> 3.一个连接mobx和react的中间部件(因为他们两个都是独立的)

```js
# 创建项目
npx create-react-app react-mobx-app

# 安装mobx和中间件工具 mobx-react-lite  只能函数组件中使用
npm install mobx mobx-react-lite
```
## 编写第一个Mobx的store

> 需求:
> 使用Mobx实现计数器案例,点击加号按钮实现递增运算

**项目结构**
![在这里插入图片描述](https://img-blog.csdnimg.cn/b9d1fac6165847a08c218ca4114a8a3c.png)
### 初始化Mobx
**实现步骤**
> 1.定义数据状态(state)
> 2.数据响应式处理
> 3.定义action函数(修改数据)
> 4.实例化并导出实例

**在counter.js里面加入Mobx代码**
```js
// 编写第一个mobx store小案例
// 使用Mobx实现计数器案例,点击加号按钮实现递增运算
import { makeAutoObservable } from "mobx"
class CounterStore {
  // 1.定义数据
  count = 0
  constructor(){
    // 2.把数据变成响应式
    makeAutoObservable(this)
  }
  // 3.定义action函数(修改数据)
  addCount=()=>{
    this.count++
  }
}

// 4.实例化,然后导出给react使用
const counterStore = new CounterStore()
export {counterStore}
```
### 连接react
**实现步骤**

> 1.导入store实例
> 2.使用store数据
> 3.修改store中的数据
> 4.让组件视图响应数据变化

**在App.js引入并完成数据的使用和响应式实现**
```js
// 1.导入countStore实例
import { counterStore } from "./store/counter"
// 2.导入中间件连接Mobx react完成响应式变化
import { observer } from "mobx-react-lite"
function App () {
  return (
    <div>
      {/* 把counter.js的count数据渲染一下 */}
      {counterStore.count}
      {/* 点击事件触发action函数修改count的值 */}
      <button onClick={counterStore.addCount}>+</button>
    </div>
  )
}

// 3.包裹App使其具有响应式
export default observer(App)
```
## Mobx的计算属性computed
**实现步骤**

> 1.声明一个存在的数据
> 2.定义get计算属性
> 3.在makeAutoObservable方法中标记

**还是以上面项目结构为例,在counter.js里面加入Mobx代码**
```js
import { computed, makeAutoObservable } from "mobx"
class CounterStore {
  // 1.定义一个原始数据 list
  list = [1, 2, 3, 4, 5]
  constructor() {
    // 3.在makeAutoObservable方法中标记
    makeAutoObservable(this,{
      filterList:computed
    })
  }
  // 2.定义get计算属性
  get filterList(){
    return this.list.filter(item=>item>2)
  }
  // 定义方法修改list
  addList=()=>{
    return this.list.push(7,8,9)
  }
}

const counterStore = new CounterStore()
export { counterStore }
```
**在App.js引入并完成数据的使用和响应式实现**
```js
import { counterStore } from "./store/counter2"
import { observer } from "mobx-react-lite"
function App () {
  return (
    <div>
      {/* 使用计算属性,数组不能直接在react展示,因此要拼接一下 */}
      {counterStore.filterList.join('-')}
      <button onClick={counterStore.addList}>修改数组</button>
    </div>
  )
}
export default observer(App)
```
## 拆分子模块和创建根模块(模块化)
### 怎么做??

> 1.拆分Count和List模块,每个模块定义自己的独立的state/actions
> 2.在store/index.js中导入拆分之后的模块,进行模块组合
> 3.使用React的useCountext机制 导出useStore方法,供业务组件统一使用

### 项目目录
![在这里插入图片描述](https://img-blog.csdnimg.cn/2a0a5256b7b14544918249c9a2bdd3f9.png)
#### 子模块一counter.store.js的代码如下
```js
// 编写第一个mobx store小案例
// 使用Mobx实现计数器案例,点击加号按钮实现递增运算
import { computed, makeAutoObservable } from "mobx"
class CounterStore {
  // 定义数据
  count = 0
  // 定义一个原始数据 list
  list = [1, 2, 3, 4, 5]
  constructor() {
    // 在makeAutoObservable方法中标记
    makeAutoObservable(this, {
      filterList: computed
    })
  }
  // 定义action函数(修改数据)
  addCount = () => {
    this.count++
  }
  // 定义get计算属性
  get filterList () {
    return this.list.filter(item => item > 2)
  }
  // 定义方法修改list
  addList = () => {
    return this.list.push(7, 8, 9)
  }
}

// 实例化,然后导出给react使用
export { CounterStore }
```
#### 子模块二list.store.js代码如下
```js
import { makeAutoObservable } from "mobx"

class ListStore {
  list = ["react", "vue"]
  constructor() {
    makeAutoObservable(this)
  }
  addlist = () => {
    this.list.push("angular")
    console.log('this.list', this.list)
  }
}

export { ListStore }
```
#### 业务模块index.js代码如下
```js
// 组合子模块
// 封装统一导出的供业务使用的方法
import React from "react";
// 引入子模块
import { CounterStore } from "./counter.store";
import { ListStore } from "./list.store";
// 1.声明一个rootStore
class RootStore{
  constructor(){
    // 对子模块进行实例化操作
    // 将来实例化根store的时候
    // 根store有两个属性 分别是counterStore和listStore
    // 各自对应的值 就是我们导入的子模块实例对象
    this.counterStore = new CounterStore()
    this.listStore=new ListStore()
  }
}

// 实例化操作
// 使用react context机制 完成统一方法封装

// 以下代码为固定代码,不用死记
// 通过new得到一个根实例对象
const rootStore = new RootStore()
// 使用react context机制,完成方法的统一封装
// Provider value = {传递的数据}
// 查找机制:useContext 优先从Provider value找,如果找不到就会找createContext方法1传递过来的默认参数
const context = React.createContext(rootStore)
// 这个方法作用:通过useContext拿到rootStore实例对象 然后返回
// 只要在这个业务组件中调用useStore()=>rootStore
const useStore = ()=>React.useContext(context)
// 再导出useStore方法,供组件通过调用该方法使用根实例
export {useStore}
```
#### App.js代码如下
```js
// 1.导入业务组件
import { useStore } from "./store"
// 2.导入中间件连接Mobx react完成响应式变化
import { observer } from "mobx-react-lite"
function App () {
  const rootStore = useStore() //也可以解构赋值
  console.log('rootStore', rootStore)
  return (
    <div>
      <div>第一个Store里面的数据操作</div>
      {/* 使用counterStore里面的数据 */}
      {rootStore.counterStore.count}
      {/* 调用counterStore里面的方法 */}
      <button onClick={rootStore.counterStore.addCount}>点击使count自增加1</button><br />
      {/* 调用counterStore里面的数组list */}
      {rootStore.counterStore.filterList.join('-')}
      {/* 调用counterStore里面的方法 */}
      <button onClick={rootStore.counterStore.addList}>点击给list加新值</button><br /><hr />
      <div>第二个Store里面的数据操作</div>
      {rootStore.listStore.list}
      <button onClick={rootStore.listStore.addlist}>点击给list加新值</button><br /><hr />
    </div>
  )
}

// 3.包裹App使其具有响应式
export default observer(App)

```
#### App.js里面打印的结果图
![在这里插入图片描述](https://img-blog.csdnimg.cn/4f4b76c4cce8441fb4239dfcf7309016.png)
# Redux使用
[转移到这篇文章看详细Redux学习](https://blog.csdn.net/weixin_68658847/article/details/130415880)
[需要配好的Redux模板可以看这篇文章](https://blog.csdn.net/weixin_68658847/article/details/130429544)