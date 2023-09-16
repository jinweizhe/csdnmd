# Redux 介绍

## 概述

用过 **Vuex**小伙伴都知道，相比**Vuex**， **Redux** 的写法太复杂、太分散了，不像 **Vuex** 在一个文件里聚合所有东西。但现在 **Redux** 官方推出了 **Redux Toolkit**，从此 **Redux** 写起来也能很爽了。

Redux 中文文档： http://cn.redux.js.org/

## Redux 是什么？

**Redux 是一个使用叫做 “action” 的事件来管理和更新应用状态的模式和工具库** 它以集中式 **Store** 的方式对整个应用中使用的状态进行集中管理，确保状态只能以可预测的方式更新。

Redux 是 JavaScript 应用的状态容器，提供可预测的状态管理。

可以帮助你开发出行为稳定可预测的、运行于不同的环境（客户端、服务器、原生应用）、易于测试的应用程序。可以将 Redux 与 React 或其他视图库一起使用。它体小精悍（只有2kB，包括依赖），却有很强大的插件扩展生态。

## 为什么要使用 Redux？

Redux 帮你管理“全局”状态 - 应用程序中的很多组件都需要的状态。

**Redux 提供的模式和工具使你更容易理解应用程序中的状态何时、何地、为什么、state 如何被更新，以及当这些更改发生时你的应用程序逻辑将如何表现**. Redux 指导你编写可预测和可测试的代码，这有助于你确信你的应用程序将按预期工作。

## 我什么时候应该使用 Redux？

Redux 可帮助你处理共享状态的管理，但与任何工具一样，它也需要权衡利弊。使用 Redux 有更多的概念需要学习，还有更多的代码需要编写，需要添加了一些额外代码，并要求你遵循某些限制。这是短期和长期生产力之间的权衡。

在以下情况下使用 Redux：

- 应用中有很多 state 在多个组件中需要使用
- 应用 state 会随着时间的推移而频繁更新
- 更新 state 的逻辑很复杂
- 中型和大型代码量的应用，很多人协同开发

**并非所有应用程序都需要 Redux。 花一些时间思考你正在构建的应用程序类型，并决定哪些工具最能帮助解决你正在处理的问题。**

## Redux 库和工具

Redux 是一个小型的独立 JS 库。 但是，它通常与其他几个包一起使用：

### React-Redux

Redux 可以集成到任何的 UI 框架中，其中最常见的是 React 。**React-Redux** 是我们的官方包，它可以让 React 组件访问 state 片段和 dispatch actions 更新 store，从而同 Redux 集成起来。

### Redux Toolkit

**Redux Toolkit** 是我们推荐的编写 Redux 逻辑的方法。它围绕 Redux 核心，并包含我们认为对于构建 Redux 应用必不可少的软件包和函数。Redux Toolkit 建立在我们建议的最佳实践中，简化了大多数 Redux 任务，防止了常见错误，并使编写 Redux 应用程序更加容易。

为了方便后面内容，之后 **Redux Toolkit** 简称 **RTK**。

RTK 包含了有助于简化许多常见场景的工具，包括 配置 Store， 创建 reducer 并编写 immutable 更新逻辑， 甚至还包含 一次性创建整个 State 的 “Slice”。

无论你是一个想要开发第一个 Redux 应用的新手，还是想要简化已有应用经验老道的老手，Redux Toolkit 都能帮你写出更好的 Redux 代码.

可以说 **Redux Toolkit** 就是目前 **Redux** 的最佳实践方式。

### Redux DevTools 扩展

Redux DevTools 扩展 可以显示 Redux 存储中状态随时间变化的历史记录。这允许你有效地调试应用程序，包括使用强大的技术，如“时间旅行调试”。

# Redux 术语和概念

在我们深入研究一些实际代码之前，让我们先谈谈使用 Redux 需要了解的一些术语和概念。

## State 管理

让我们从一个小的 React 计数器组件开始。 它跟踪组件状态中的数字，并在单击按钮时增加数字：

```jsx
function Counter() {
  // State: counter 值
  const [counter, setCounter] = useState(0)

  // Action: 当事件发生后，触发状态更新的代码
  const increment = () => {
    setCounter(prevCounter => prevCounter + 1)
  }

  // View: 视图定义
  return (
    <div>
      Value: {counter} <button onClick={increment}>Increment</button>
    </div>
  )
}
```

这是一个包含以下部分的自包含应用程序：

- **state**：驱动应用的真实数据源头
- **view**：基于当前状态的视图声明性描述
- **actions**：根据用户输入在应用程序中发生的事件，并触发状态更新

接下来简要介绍 **"单向数据流（one-way data flow）"**:

- 用 state 来描述应用程序在特定时间点的状况
- 基于 state 来渲染出 View
- 当发生某些事情时（例如用户单击按钮），state 会根据发生的事情进行更新，生成新的 state
- 基于新的 state 重新渲染 View

<img src="https://cn.redux.js.org/assets/images/one-way-data-flow-04fe46332c1ccb3497ecb04b94e55b97.png" style="zoom:25%;" />

然而，当我们有**多个组件需要共享和使用相同 state**时，可能会变得很复杂，尤其是当这些组件位于应用程序的不同部分时。有时这可以通过 **"提升 state"** 到父组件来解决，但这并不总是有效。

解决这个问题的一种方法是从组件中提取共享 state，并将其放入组件树之外的一个集中位置。这样，我们的组件树就变成了一个大“view”，任何组件都可以访问 state 或触发 action，无论它们在树中的哪个位置！

通过定义和分离 state 管理中涉及的概念并强制执行维护 view 和 state 之间独立性的规则，代码变得更结构化和易于维护。

这就是 Redux 背后的基本思想：应用中使用集中式的全局状态来管理，并明确更新状态的模式，以便让代码具有可预测性。

## 不可变性 Immutability

"Mutable" 意为 "可改变的"，而 "immutable" 意为永不可改变。

JavaScript 的对象（object）和数组（array）默认都是 mutable 的。如果我创建一个对象，我可以更改其字段的内容。如果我创建一个数组，我也可以更改内容：

```js
const obj = { a: 1, b: 2 }
// 对外仍然还是那个对象，但它的内容已经变了
obj.b = 3

const arr = ['a', 'b']
// 同样的，数组的内容改变了
arr.push('c')
arr[1] = 'd'
```

这就是 *改变* 对象或数组的例子。内存中还是原来对象或数组的引用，但里面的内容变化了。

**如果想要不可变的方式来更新，代码必需先复制原来的 object/array，然后更新它的复制体**。

JavaScript array/object 的展开运算符（spread operator）可以实现这个目的：

```js
const obj = {
  a: {
    // 为了安全的更新 obj.a.c，需要先复制一份
    c: 3
  },
  b: 2
}

const obj2 = {
  // obj 的备份
  ...obj,
  // 覆盖 a
  a: {
    // obj.a 的备份
    ...obj.a,
    // 覆盖 c
    c: 42
  }
}

const arr = ['a', 'b']
// 创建 arr 的备份，并把 c 拼接到最后。
const arr2 = arr.concat('c')

// 或者，可以对原来的数组创建复制体
const arr3 = arr.slice()
// 修改复制体
arr3.push('c')
```

**Redux 期望所有状态更新都是使用不可变的方式**。 稍后会说明为什么这很重要，以及编写不可变更新逻辑的一些更简单的方法

## 术语

在我们继续之前，你需要熟悉一些重要的 Redux 术语：

### Action

**action** 是一个具有 `type` 字段的普通 JavaScript 对象。**你可以将 action 视为描述应用程序中发生了什么的事件**.

`type` 字段是一个字符串，给这个 action 一个描述性的名字，比如`"counter/increment"`。我们通常把那个类型的字符串写成“域/事件名称”，其中第一部分是这个 action 所属的特征或类别，第二部分是发生的具体事情。

action 对象可以有其他字段，其中包含有关发生的事情的附加信息。按照惯例，我们将该信息放在名为 `payload` 的字段中。

一个典型的 action 对象可能如下所示：

```js
const addTodoAction = {
  type: 'counter/increment',
  payload: 2
}
```

### Action Creator

**action creator** 是一个创建并返回一个 action 对象的函数。它的作用是让你不必每次都手动编写 action 对象：

```js
const addTodo = text => {
  return {
    type: 'counter/increment',
    payload: text
  }
}
```

### Reducer

**reducer** 是一个函数，接收当前的 `state` 和一个 `action` 对象，必要时决定如何更新状态，并返回新状态。函数签名是：`(state, action) => newState`。 **你可以将 reducer 视为一个事件监听器，它根据接收到的 action（事件）类型处理事件。**

Reducer 必需符合以下规则：

- 仅使用 `state` 和 `action` 参数计算新的状态值
- 禁止直接修改 `state`。必须通过复制现有的 `state` 并对复制的值进行更改的方式来做 *不可变更新（immutable updates）*。
- 禁止任何异步逻辑、依赖随机值或导致其他“副作用”的代码

稍后我们将更多地讨论 reducer 的规则，包括为什么它们很重要以及如何正确地遵循它们。

reducer 函数内部的逻辑通常遵循以下步骤：

- 检查 reducer 是否关心这个 action
  - 如果是，则复制 state，使用新值更新 state 副本，然后返回新 state
- 否则，返回原来的 state 不变

下面是 reducer 的小例子，展示了每个 reducer 应该遵循的步骤：

```js
const initialState = { value: 0 }

function counterReducer(state = initialState, action) {
  // 检查 reducer 是否关心这个 action
  if (action.type === 'counter/increment') {
    // 如果是，复制 `state`
    return {
      ...state,
      // 使用新值更新 state 副本
      value: state.value + 1
    }
  }
  // 返回原来的 state 不变
  return state
}
```

Reducer 可以在内部使用任何类型的逻辑来决定新状态应该是什么，如 `if/else`、`switch`、循环等等。

#### Reducer 规则

上面讲过，Reducer 必需符合以下规则：

- 仅使用 `state` 和 `action` 参数计算新的状态值
- 禁止直接修改 `state`。必须通过复制现有的 `state` 并对复制的值进行更改的方式来做 *不可变更新（immutable updates）*。
- 禁止任何异步逻辑、依赖随机值或导致其他“副作用”的代码

但为什么这些规则很重要？有几个不同的原因：

- Redux 的目标之一是使你的代码可预测。当函数的输出仅根据输入参数计算时，更容易理解该代码的工作原理并对其进行测试。
- 另一方面，如果一个函数依赖于自身之外的变量，或者行为随机，你永远不知道运行它时会发生什么。
- 如果一个函数 mutate 了其他对象，比如它的参数，这可能会意外地改变应用程序的工作方式。这可能是错误的常见来源，例如“我更新了我的状态，但现在我的视图没有在应该更新的时候更新！”
- Redux DevTools 的一些功能取决于你的 reducer 是否正确遵循这些规则

“不可变更新（Immutable Updates）” 这个规则尤其重要，值得进一步讨论。

#### Reducer 与 Immutable 更新

前面讲过 “mutation”（更新已有对象/数组的值）与 “immutability”（认为值是不可以改变的）

在 Redux 中，***永远\* 不允许在 reducer 中更改 state 的原始对象！**

```js
// ❌ 非法 - 默认情况下，这将更改 state！
state.value = 123
```

不能在 Redux 中更改 state 有几个原因：

- 它会导致 bug，例如视图未正确更新以显示最新值
- 更难理解状态更新的原因和方式
- 编写测试变得更加困难
- 它打破了正确使用“时间旅行调试”的能力
- 它违背了 Redux 的预期精神和使用模式

所以如果我们不能更改原件，我们如何返回更新的状态呢？

> **Reducer 中必需要先创建原始值的副本，然后可以改变副本。**
>
> ```js
> // ✅ 这样操作是安全的，因为创建了副本
> return {
>   ...state,
>   value: 123
> }
> ```

我们已经看到我们可以[手动编写 immutable 更新](https://cn.redux.js.org/tutorials/essentials/part-1-overview-concepts#immutability)，通过使用 JavaScript 的数组/对象扩展运算符和其他返回原始值副本的函数。但是，如果你认为“以这种方式手动编写 immutable 更新看起来很难记住和正确执行”……是的，你是对的！:)

手动编写不可变的更新逻辑确实繁琐，而且在 reducer 中意外改变状态是 Redux 用户最常犯的一个错误。

**这就是为什么 Redux Toolkit 的 `createSlice` 函数可以让你以更简单的方式编写不可变更新！**

`createSlice` 内部使用了一个名为 [Immer](https://immerjs.github.io/immer/) 的库。 Immer 使用一种称为 “Proxy” 的特殊 JS 工具来包装你提供的数据，当你尝试 ”mutate“ 这些数据的时候，奇迹发生了，**Immer 会跟踪你尝试进行的所有更改，然后使用该更改列表返回一个安全的、不可变的更新值**，就好像你手动编写了所有不可变的更新逻辑一样。

所以，下面的代码：

```js
function handwrittenReducer(state, action) {
  return {
    ...state,
    first: {
      ...state.first,
      second: {
        ...state.first.second,
        [action.someId]: {
          ...state.first.second[action.someId],
          fourth: action.someValue
        }
      }
    }
  }
}
```

可以变成这样：

```js
function reducerWithImmer(state, action) {
  state.first.second[action.someId].fourth = action.someValue
}
```

变得非常易读！

但，还有一些非常重要的规则要记住：

> 警告
>
> **你*只能*在 Redux Toolkit 的 `createSlice` 和 `createReducer` 中编写 “mutation” 逻辑，因为它们在内部使用 Immer！如果你在没有 Immer 的 reducer 中编写 mutation 逻辑，它*将*改变状态并导致错误！**

考虑到这一点，让我们回过头来看看计数器 slice 中的实际的 reducer。

features/counterSlice.js

```js
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    increment: state => {
      // Redux Toolkit 允许我们在 reducers 写 "可变" 逻辑。
      // 并不是真正的改变 state 因为它使用了 immer 库
      // 当 immer 检测到 "draft state" 改变时，会基于这些改变去创建一个新的
      // 不可变的 state
      state.count += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    }
  }
})
```

我们可以看到 `increment` reducer 总是给 `state.count` 加 1。 因为 Immer 知道我们已经对原来的 `state` 对象进行了更改，所以我们实际上不必在此处返回任何内容。 同理，`decrement` reducer 减 1。

在这两个 reducer 中，我们实际上不需要让我们的代码查看 `action` 对象。它无论如何都会被传入，但由于我们不需要它，我们可以省掉把 `action` 声明为 reducer 的参数。

另一方面，`incrementByAmount` 这个 reducer 还需要知道更多信息：它应该增加多少计数器值。因此，我们将 reducer 声明为同时具有 `state` 和 `action` 参数。这样，我们知道我们在文本框中输入的金额被放入 `action.payload` 字段，这就是要被添加到 `state.count` 的值。

### Store

当前 Redux 应用的 state 存在于一个名为 **store** 的对象中。

store 是通过传入一个 reducer 来创建的，并且有一个名为 `getState` 的方法，它返回当前状态值：

```js
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: counterReducer })

console.log(store.getState())
// {value: 0}
```

### Dispatch

Redux store 有一个方法叫 `dispatch`。**更新 state 的唯一方法是调用 `store.dispatch()` 并传入一个 action 对象**。 store 将执行所有 reducer 函数并计算出更新后的 state，调用 `getState()` 可以获取新 state。

```js
store.dispatch({ type: 'counter/increment' })

console.log(store.getState())
// {value: 1}
```

**dispatch 一个 action 可以形象的理解为 "触发一个事件"**。发生了一些事情，我们希望 store 知道这件事。 Reducer 就像事件监听器一样，当它们收到关注的 action 后，它就会更新 state 作为响应。

我们通常调用 action creator 来调用 action：

```js
const increment = () => {
  return {
    type: 'counter/increment'
  }
}

store.dispatch(increment())

console.log(store.getState())
// {value: 2}
```

### Selector

**Selector** 函数可以从 store 状态树中提取指定的片段。随着应用变得越来越大，会遇到应用程序的不同部分需要读取相同的数据，selector 可以避免重复这样的读取逻辑：

```js
const selectCounterValue = state => state.value

const currentValue = selectCounterValue(store.getState())
console.log(currentValue)
// 2
```

## Redux 数据流

早些时候，我们谈到了“单向数据流”，它描述了更新应用程序的以下步骤序列：

- State 描述了应用程序在特定时间点的状况
- 基于 state 来渲染视图
- 当发生某些事情时（例如用户单击按钮），state 会根据发生的事情进行更新
- 基于新的 state 重新渲染视图

具体来说，对于 Redux，我们可以将这些步骤分解为更详细的内容：

- 初始启动：
  - 使用最顶层的 root reducer 函数创建 Redux store
  - store 调用一次 root reducer，并将返回值保存为它的初始 `state`
  - 当视图 首次渲染时，视图组件访问 Redux store 的当前 state，并使用该数据来决定要呈现的内容。同时监听 store 的更新，以便他们可以知道 state 是否已更改。
- 更新环节：
  - 应用程序中发生了某些事情，例如用户单击按钮
  - dispatch 一个 action 到 Redux store，例如 `dispatch({type: 'counter/increment'})`
  - store 用之前的 `state` 和当前的 `action` 再次运行 reducer 函数，并将返回值保存为新的 `state`
  - store 通知所有订阅过的视图，通知它们 store 发生更新
  - 每个订阅过 store 数据的视图 组件都会检查它们需要的 state 部分是否被更新。
  - 发现数据被更新的每个组件都强制使用新数据重新渲染，紧接着更新网页

动画的方式来表达数据流更新：

![](https://cn.redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)



## 总结

- Redux 是一个管理全局应用状态的库
  - Redux 通常与 React-Redux 库一起使用，把 Redux 和 React 集成在一起
  - Redux Toolkit 是编写 Redux 逻辑的推荐方式
- Redux 使用 "单向数据流"
  - State 描述了应用程序在某个时间点的状态，视图基于该 state 渲染
  - 当应用程序中发生某些事情时：
    - 视图 dispatch 一个 action
    - store 调用 reducer，随后根据发生的事情来更新 state
    - store 将 state 发生了变化的情况通知 UI
  - 视图基于新 state 重新渲染
- Redux 有这几种类型的代码
  - *Action* 是有 `type` 字段的纯对象，描述发生了什么
  - *Reducer* 是纯函数，基于先前的 state 和 action 来计算新的 state
  - 每当 dispatch 一个 action 后，*store* 就会调用 root reducer

# RTK使用步骤

在官方文档中提供了完整的 **RTK** 项目创建命令，初学者建议从基础的手动搭建一个 **RTK** 项目。

在编写的 **RTK** 程序前做以下准备：

- 在src目录下创建一个store文件夹

- 在store目录下创建一个index.js做为仓库的主入口
- 在store目录下创建一个features文件夹用来装所有的store
- 在features目录下创建一个counterSlice.js文件，并导出响应的actions函数

## 第一步：安装 RTK 和 Redux

添加 Redux Toolkit 和 React-Redux 依赖包到你的项目中：

```jsx
npm install @reduxjs/toolkit react-redux
```

> 为了方便我们开发，这里推荐安装一下 **redux** 的开发工具：**redux-devtools**，需要注意的是在 **chrome** 浏览器中我们也需要安装对应的插件：**redux-devtools** 来结合使用。
>
> npm i redux-devtools -D

## 第二步：创建Store实例

在 `src/store/index.js` 文件中。从 Redux Toolkit 引入 `configureStore` API。并使用`configureStore`创建一个 Redux store 开始，并且导出它。

Redux store 是使用 Redux Toolkit 中的 `configureStore` 函数创建的。`configureStore` 要求我们传入一个 `reducer` 参数。

我们的应用程序可能由许多不同的特性组成，每个特性都可能有自己的 reducer 函数。当我们调用`configureStore` 时，我们可以传入一个对象中的所有不同的 reducer。 对象中的键名 key 将定义最终状态树中的键名 key。

```js
// src/store/index.js

import { configureStore } from "@reduxjs/toolkit";

// configureStore创建一个redux数据仓库
const store = configureStore({
  reducer: {},
});

// 导出仓库
export default store;
```

上面代码创建了 Redux store ，并且自动配置了 Redux DevTools 扩展 ，这样你就可以在开发时调试 store。

## 第三步：为 React 提供 Store

创建 store 后，便可以在 React 组件中使用它。 在 src/index.js 中引入我们刚刚创建的 store , 通过 React-Redux 的 `<Provider>`将 `<App>` 包裹起来，并将 store 作为 prop 传入。

```jsx
// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from 'react-redux';
import store from './store';

// 用 react-redux 提供的 Provider 组件，并且在渲染之前将根组件App包装进 <Provider>。
// 使用Provider组件将store作为prop注入整个react程序，注入之后程序中所有的组件中都可以使用store。
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App></App>
    </Provider>
  </React.StrictMode>
);
```

## 第四步：创建 Slice Reducer 和 Action

在`counterSlice.js` 文件中从 Redux Toolkit 引入 `createSlice` API。

**“slice” 是应用中单个功能的 Redux reducer 逻辑和 action 的集合**, 通常一起定义在一个文件中。该名称来自于将根 Redux 状态对象拆分为多个状态 “slice”。

创建 slice 需要一个字符串名称来标识切片、一个初始 state 以及一个或多个定义了该如何更新 state 的 reducer 函数。slice 创建后 ，我们可以导出 slice 中生成的 Redux action creators 和 reducer 函数。

```js
// src/store/features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

// 创建一个 Slice 
export const counterSlice = createSlice({
  // 命名空间，name会作为action type的前缀
  name: 'counter',

  // 初始化状态
  initialState,

  // 1、定义reducer更新状态的函数
  // 2、是组件中dispatch使用的actions函数
  reducers: {
    // 定义一个加的方法
    increment: (state) => {
      state.count += 1;
    },
    // 定义一个减的方法
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
  },
});

// createSlice 会自动生成与我们编写的 reducer 函数同名的 action creator。
// 导出actions函数
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// 导出reducer，创建store
export default counterSlice.reducer;
```

单击视图中的 “递增” 、 “递减”、通过数量递增按钮分别会 dispatch 三种不同类型的 Redux action：

- `{type: "counter/increment"}`
- `{type: "counter/decrement"}`
- `{type: "counter/incrementByAmount"}`

我们知道 action 是带有 `type` 字段的普通对象，`type` 字段总是一个字符串，并且我们通常有 action creator 函数来创建和返回 action 对象。那么在哪里定义 action 对象、类型字符串和 action creator 呢？

我们*可以*每次都手写。但是，那会很乏味。此外，Redux 中*真正*重要的是 reducer 函数，以及其中计算新状态的逻辑。

Redux Toolkit 有一个名为 `createSlice` 的函数，它负责生成 action 类型字符串、action creator 函数和 action 对象的工作。你所要做的就是为这个 slice 定义一个名称，编写一个包含 reducer 函数的对象，它会自动生成相应的 action 代码。`name` 选项的字符串用作每个 action 类型的第一部分，每个 reducer 函数的键名用作第二部分。因此，`"counter"` 名称 + `"increment"` reducer 函数生成了一个 action 类型 `{type: "counter/increment"}`。（毕竟，如果计算机可以为我们做，为什么要手写！）

除了 `name` 字段，`createSlice` 还需要我们为 reducer 传入初始状态值，以便在第一次调用时就有一个 `state`。在这种情况下，我们提供了一个对象，它有一个从 0 开始的 `count` 字段。

我们可以看到这里有三个 reducer 函数，它们对应于通过单击不同按钮 dispatch 的三种不同的 action 类型。

`createSlice` 会自动生成与我们编写的 reducer 函数同名的 action creator。我们可以通过调用其中一个来检查它并查看它返回的内容：

```js
console.log(counterSlice.actions.increment())
// {type: 'counter/increment', payload: undefined}
```

## 第五步：将 Slice Reducers 添加到 Store 中

下一步，我们需要从计数切片中引入 reducer 函数，并将它添加到我们的 store 中。通过在 reducer 参数中定义一个字段，我们告诉 store 使用这个 slice reducer 函数来处理对该状态的所有更新。

```js
// src/store/index.js

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";

// configureStore创建一个redux数据仓库
const store = configureStore({
  // 合并多个Slice
  reducer: {
    counter: counterReducer,
  },
});

// 导出仓库
export default store;
```

## 第六步：在组件中使用 Redux 状态和操作

现在我们可以使用 React-Redux 钩子让 React 组件与 Redux store 交互。我们可以使用 `useSelector` 从 store 中读取数据，使用 `useDispatch` dispatch actions。

```jsx
// App.jsx

// 引入相关的hooks
import { useSelector, useDispatch } from 'react-redux';
// 引入 counterSlice 中的 actions函数
import { increment, decrement } from './store/features/counterSlice';

const App = () => {
	// 使用 useDispatch 钩子获取 dispatch 函数，并根据需要 dispatch actions
	const dispatch = useDispatch();

	// 使用 useSelector 钩子从 store 中读取数据
	// 通过useSelector直接拿到counter store中定义的count属性
	const { count } = useSelector(store => store.counter);

	return (
		<div className='app'>
			<h1>App</h1>
			<p>count = {count}</p>
			<button onClick={() => dispatch(increment())}>递增</button>
			<button onClick={() => dispatch(decrement())}>递减</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>通过数量递增</button>
		</div>
	);
};

export default App;
```

现在，每当你点击”递增“和“递减”按钮。

- 会 dispatch 对应的 Redux action 到 store
- 在计数器切片对应的 reducer 中将看到 action 并更新其状态
- `<App>`组件将从 store 中看到新的状态，并使用新数据重新渲染组件

# Redux 在组件和JS模块中的使用

## Redux 在组件的使用

React-Redux 库有 [一组自定义 hooks，允许你的 React 组件与 Redux store 交互](https://react-redux.js.org/api/hooks)。

### useSelector 获取状态

首先，`useSelector` 这个 hooks 让我们的组件从 Redux 的 store 状态树中提取它需要的任何数据。

我们的组件不能直接与 Redux store 对话，因为组件文件中不能引入 store。但是，`useSelector` 负责为我们在幕后与 Redux store 对话。 

因此，我们可以编写一个选择器函数作为 `useSelector` 的内联参数：

```js
// import { useSelector, useDispatch } from 'react-redux';


// 获取总的state实例
const store = useSelector(state => state);

// 获取counter仓库实例
const counter = useSelector(state => state.counter);

// 直接获取counter仓库中count属性
const count = useSelector(state => state.counter.count);

// 直接结构仓库的状态属性
const { count, status } = useSelector(store => store.counter);

// 让count的值加2
const countPlusTwo = useSelector(state => state.counter.count + 2);
```

每当一个 action 被 dispatch 并且 Redux store 被更新时，`useSelector` 将重新运行我们的选择器函数。如果选择器返回的值与上次不同，`useSelector` 将确保我们的组件使用新值重新渲染。

### useDispatch 分发action

类似地，我们知道如果我们可以访问 Redux store，我们可以使用 action creator 来 dispatch action，比如 `store.dispatch(increment())`。 由于我们无法访问 store 本身，因此我们需要某种方式来访问 `dispatch` 方法。

`useDispatch` hooks 为我们完成了这项工作，并从 Redux store 中为我们提供了实际的 `dispatch` 方法：

```js
// import { useEffect } from 'react-redux';


const dispatch = useDispatch()
```

从那里，我们可以在用户执行诸如单击按钮之类的操作时 dispatch 对应 action：

```jsx
<button onClick={() => dispatch(increment())}>递增</button>
```

### 组件 State 与 表单

现在你可能想知道，“我是否总是需要将我所有应用程序的状态放入 Redux store？”

**整个应用程序所需的全局状态应该放在 Redux store 中。而只在一个地方用到的状态应该放到组件的 state。**

**在 React + Redux 应用中，你的全局状态应该放在 Redux store 中，你的本地状态应该保留在 React 组件中。**

如果你不确定该放在哪里，这里有一些常用的经验法则，用于确定应该将哪种数据放入 Redux：

- 应用程序的其他部分是否关心这些数据？
- 你是否需要能够基于这些原始数据创建进一步的派生数据？
- 是否使用相同的数据来驱动多个组件？
- 能够将这种状态恢复到给定的时间点（即时间旅行调试）对你是否有价值？
- 是否要缓存数据（即，如果数据已经存在，则使用它的状态而不是重新请求它）？
- 你是否希望在热重载视图组件（交换时可能会丢失其内部状态）时保持此数据一致？

这也是一般如何在 Redux 中考虑表单的一个很好的例子。 **大多数表单的 state 不应该保存在 Redux 中。** 相反，在编辑表单的时候把数据存到表单组件中，当用户提交表单的时候再 dispatch action 来更新 store。

### Providing the Store

我们已经看到我们的组件可以使用 `useSelector` 和 `useDispatch` 这两个 hooks 与 Redux 的 store 通信。奇怪的是，我们并没有导入 store，那么这些 hooks 怎么知道要与哪个 Redux store 对话呢？

现在我们已经看到了这个应用程序的全貌，是时候回到这个应用程序的起点，看看拼图的最后部分是如何组合在一起的。

```jsx
// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import store from './store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App></App>
    </Provider>
  </React.StrictMode>
);
```

我们总是必须调用 `render(<App />)` 来告诉 React 开始渲染我们的根 `<App>` 组件。 为了让像 `useSelector` 这样的 hooks 正常工作，我们需要使用一个名为 `<Provider>` 的组件在幕后传递 Redux store，以便他们可以访问它。

我们在这里引用来自 `store/index.js` 中创建的 store。然后，用 `<Provider>` 包裹整个 `<App>`，并传入 store：`<Provider store={store}>`。

现在，任何调用 `useSelector` 或 `useDispatch` 的 React 组件都可以访问 `<Provider>` 中的 store。

## Redux在模块中的使用

- 获取仓库实例

```js
// store 就是仓库实例，可以通过store对state和action进行操作
import store from './store';
```

- 获取状态

````jsx
// 获取仓库的所有状态
store.getState()

// 获取counter的状态
store.getState().counter
````

- 分发action

从slice中导如action函数，使用dispatch分发

```js
import {incrementByAmount} from './store/features/counterSlice'

store.dispatch(incrementByAmount(2));
```

 直接使用type类型分发

```js
store.dispatch({
	type: 'counter/incrementByAmount',
	payload: 1,
});
```

# 用 Thunk 编写异步逻辑

到目前为止，我们应用程序中的所有逻辑都是同步的。首先 dispatch action，store 调用 reducer 来计算新状态，然后 dispatch 函数完成并结束。但是，JavaScript 语言有很多编写异步代码的方法，我们的应用程序通常具有异步逻辑，比如从 API 请求数据之类的事情。我们需要一个地方在我们的 Redux 应用程序中放置异步逻辑。

## 使用 Middleware 处理异步逻辑

就其本身而言，Redux store 对异步逻辑一无所知。它只知道如何同步 dispatch action，通过调用 root reducer 函数更新状态，并通知 UI 某些事情发生了变化。任何异步都必须发生在 store 之外。

但是，如果你希望通过调度或检查当前 store 状态来使异步逻辑与 store 交互，该怎么办？ 这就是 Redux middleware 的用武之地。它们扩展了 store，并允许你：

- dispatch action 时执行额外的逻辑（例如打印 action 的日志和状态）
- 暂停、修改、延迟、替换或停止 dispatch 的 action
- 编写可以访问 `dispatch` 和 `getState` 的额外代码
- 教 `dispatch` 如何接受除普通 action 对象之外的其他值，例如函数和 promise，通过拦截它们并 dispatch 实际 action 对象来代替

[使用 middleware 的最常见原因是允许不同类型的异步逻辑与 store 交互](https://cn.redux.js.org/faq/actions#how-can-i-represent-side-effects-such-as-ajax-calls-why-do-we-need-things-like-action-creators-thunks-and-middleware-to-do-async-behavior)。这允许你编写可以 dispatch action 和检查 store 状态的代码，同时使该逻辑与你的 UI 分开。

Redux 有多种异步 middleware，每一种都允许你使用不同的语法编写逻辑。最常见的异步 middleware 是 [`redux-thunk`](https://github.com/reduxjs/redux-thunk)，它可以让你编写可能直接包含异步逻辑的普通函数。Redux Toolkit 的 `configureStore` 功能[默认自动设置 thunk middleware](https://redux-toolkit.js.org/api/getDefaultMiddleware#included-default-middleware)，[我们推荐使用 thunk 作为 Redux 开发异步逻辑的标准方式](https://cn.redux.js.org/style-guide/#use-thunks-for-async-logic)。

## 编写thunk函数

**thunk** 是一种特定类型的 Redux 函数，可以包含异步逻辑。Thunk 是使用两个函数编写的：

- 一个内部 thunk 函数，它以 `dispatch` 和 `getState` 作为参数
- 外部创建者函数，它创建并返回 thunk 函数

将 thunk middleware 添加到 Redux store 后，它允许你将 *thunk 函数* 直接传递给 `store.dispatch`。调用 thunk 函数时总是将 `(dispatch, getState)` 作为它的参数，你可以根据需要在 thunk 中使用它们。

Thunks 通常还可以使用 action creator 再次 dispatch 普通的 action，比如 `dispatch(increment())`：

```js
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from "redux-thunk";

const store = createStore(
  // 将thunkMiddleware添加到store
  applyMiddleware(thunkMiddleware),
);
```

```js
// thunk函数接收dispatch和getState作为参数
const thunkFunction = (dispatch, getState) => {
  // 获取仓库状态
  const stateBefore = getState();
  console.log('Counter before:', stateBefore.counter);
  // dispath 其他 action
  dispatch(increment());
  const stateAfter = getState();
  console.log('Counter after:',stateAfter.counter);
}

// dispatch thunk函数
store.dispatch(thunkFunction);
```

为了与 dispatch 普通 action 对象保持一致，我们通常将它们写为 *thunk action creators*，它返回 thunk 函数。这些 action creator 可以接受可以在 thunk 中使用的参数。

```js
const incrementThunk = value => {
	return (dispatch, getState) => {
		const stateBefore = getState();
		console.log('Counter before:', stateBefore.counter);
		dispatch(incrementByAmount(value));
		const stateAfter = getState();
		console.log('Counter after:', stateAfter.counter);
	};
};

// dispatch thunk函数
store.dispatch(incrementThunk(2));
```

Thunk 通常写在 “slice” 文件中。`createSlice` 本身对定义 thunk 没有任何特殊支持，因此你应该将它们作为单独的函数编写在同一个 slice 文件中。这样，他们就可以访问该 slice 的普通 action creator，并且很容易找到 thunk 的位置。

> “thunk” 这个词是一个编程术语，意思是 ["一段做延迟工作的代码"](https://en.wikipedia.org/wiki/Thunk). 

## 编写异步thunk函数

Redux 的数据请求逻辑通常遵循以下可预测的模式：

- 在请求之前 dispatch 请求“开始”的 action，以指示请求正在进行中。这可用于跟踪加载状态以允许跳过重复请求或在 UI 中显示加载中提示。
- 发出异步请求
- 根据请求结果，异步逻辑 dispatch 包含结果数据的“成功” action 或包含错误详细信息的 “失败” action。在这两种情况下，reducer 逻辑都会清除加载状态，并且要么展示成功案例的结果数据，要么保存错误值并在需要的地方展示。

这些步骤不是 *必需的*，而是常用的。（如果你只关心一个成功的结果，你可以在请求完成时发送一个“成功” action ，并跳过“开始”和“失败” action 。）

```js
// 封装一个异步操作：
const setCountAsync = value => {
	return new Promise(resolve => {
		setTimeout(() => resolve({ data: value }), 500);
	});
};

// 异步 thunk 
export const incrementByAmountAsync = value => async (dispatch, getState) => {
	const res = await setCountAsync(value);
	dispatch(incrementByAmount(res.data));
};

// dispatch thunk函数
store.dispatch(incrementByAmountAsync(2));
```

## 使用 createAsyncThunk编写异步函数

使用 thunk 需要在创建时将 `redux-thunk` *middleware*（一种 Redux 插件）添加到 Redux store 中。幸运的是，Redux Toolkit 的 `configureStore` 函数已经自动为我们配置好了。

### createAsyncThunk使用

使用 Redux Toolkit 的 `createAsyncThunk` API 生成 thunk函数，并自动 dispatch 那些 "start/success/failure" action。

从 `counterSlice` 导出的函数`incrementAsync`就是一个 thunk action creator 的例子。

```js
// src/store/features/counterSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 封装一个异步操作：
const setCountAsync = value => {
	return new Promise(resolve => {
		setTimeout(() => resolve({ data: value }), 500);
	});
};

// thunk函数允许执行异步逻辑, 通常用于发出异步请求。
// createAsyncThunk 创建一个异步action，方法触发的时候会有三种状态：
// pending（进行中）、fulfilled（成功）、rejected（失败）
export const incrementAsync = createAsyncThunk('counter/incrementAsync', async (value) => {
  const res = await setCountAsync(value);
	return res.data;
});
```

我们可以像使用普通 Redux action creator 一样使用它们：

```js
// dispatch thunk函数
store.dispatch(incrementAsync(5));
```

### createAsyncThunk的参数

`createAsyncThunk` 接收 3个参数:

- 将用作生成的 action 类型的前缀的字符串
- 一个 “payload creator” 回调函数，它应该返回一个包含一些数据的 `Promise`，或者一个被拒绝的带有错误的 `Promise`
- 可选的对象

一个 “payload creator” 回调函数有两个参数

- 参数1：value是dispatch thunk函数时传递的payload，比如上面的数字5，或者传递一个对象
- 参数2：是一个' thunkAPI '对象

thunkAPI 包含几个有用的函数和信息

- `dispatch` 和 `getState`：`dispatch` 和 `getState` 方法由 Redux store 提供。你可以在 thunk 中使用这些来发起 action，或者从最新的 Redux store 中获取 state （例如在发起 另一个 action 后获取更新后的值）。
- `extra`：当创建 store 时，用于传递给 thunk 中间件的“额外参数”。这通常时某种 API 的包装器，比如一组知道如何对应用程序的服务器进行 API 调用并返回数据的函数，这样你的 thunk 就不必直接包含所有的 URL 和查询逻辑。
- `requestId`：该 thunk 调用的唯一随机 ID ，用于跟踪单个请求的状态。
- `signal`：一个`AbortController.signal` 函数，可用于取消正在进行的请求。
- `rejectWithValue`：一个用于当 thunk 收到一个错误时帮助自定义 `rejected` action 内容的工具。

（如果你要手写 thunk 而不是使用 `createAsyncThunk`，则 thunk 函数将获取 `(dispatch, getState)` 作为单独的参数，而不是将他们放在一个对象中。）

### extraReducers

使用 Redux Toolkit 处理异步的"start/success/failure" action 状态，这个时候就需要使用 slice 中的 `extraReducers` 字段：

`extraReducers` 选项是一个接收名为 `builder` 的参数的函数。`builder` 对象提供了一些方法，让我们可以定义额外的 case reducer，这些 reducer 将响应在 slice 之外定义的 action。我们将使用 `builder.addCase(actionCreator, reducer)` 来处理异步 thunk dispatch 的每个 action。

`extraReducers` 中的 `builder` 对象提供了一些方法，让我们可以定义额外的 case reducer，这些 reducer 将响应在 slice 之外定义的 action：

- `builder.addCase(actionCreator, reducer)`：定义一个 case reducer，它响应 RTK action creator 生成或者普通字符串定义的 action。
- `builder.addMatcher(matcher, reducer)`：定义一个 case reducer，它可以响应任何 `matcher` 函数返回 `true` 的 action.
- `builder.addDefaultCase(reducer)`：定义一个 case reducer，如果没有其他 case reducer 被执行，这个 action 就会运行。

你可以将这些链接在一起，例如`builder.addCase().addCase().addMatcher().addDefaultCase()`。 如果多个匹配器匹配操作，它们将按照定义的顺序运行。

```js
// src/store/features/counterSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 封装一个异步操作：
const setCountAsync = value => {
	return new Promise(resolve => {
		setTimeout(() => resolve({ data: value }), 500);
	});
};

const initialState = {
  count: 0,
  status: 'idle',
};

export const incrementAsync = createAsyncThunk('counter/incrementAsync', async (value) => {
  const res = await setCountAsync(value);
	return res.data;
});

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  
  // extraReducers 字段让 slice 处理在别处定义的 actions， 
  // 包括由 createAsyncThunk 或其他slice生成的actions。
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state, action) => {
        console.log('incrementAsync进行中 pendding');
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        console.log('incrementAsync成功 fulfilled');
        state.status = 'succeeded';
        state.count += action.payload;
      })
      .addCase(incrementAsync.rejected, (state, action) => {
        console.log('incrementAsync失败 rejected');
        state.status = 'failed';
      });
  }
});
```

我们将根据返回的 `Promise` 处理可以由 thunk dispatch 的三种 action 类型：

- 当请求开始时，我们将 `status` 枚举设置为 `'loading'`
- 如果请求成功，我们将 `status` 标记为 `'succeeded'`，并将获取的帖子添加到 `state.posts`
- 如果请求失败，我们会将 `status` 标记为 `'failed'`，并将任何错误消息保存到状态中以便我们可以显示它

### 显示加载状态

在组件中dispatch 异步thunk函数，并显示加载状态，不过这只是一个示例，实际情况还需要修改：

```jsx
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementAsync } from './store/features/counterSlice';

const App = () => {
	const dispatch = useDispatch();
	const { count, status } = useSelector(store => store.counter);
	return (
		<div className='app'>
			<h1>App</h1>
			<p>count = {count} </p>
			<p>status = {status}</p>
			<button onClick={() => dispatch(incrementAsync(1))}>通过数量{1}异步递增</button>
		</div>
	);
};

export default App;
```

### 完整代码

- counterSlice的代码

```js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 封装一个异步操作：
const setCountAsync = value => {
	return new Promise(resolve => {
		setTimeout(() => resolve({ data: value }), 500);
	});
};

const initialState = {
  count: 0,
  status: 'idle',
};

// thunk函数允许执行异步逻辑, 通常用于发出异步请求。
// createAsyncThunk 创建一个异步action，方法触发的时候会有三种状态：
// pending（进行中）、fulfilled（成功）、rejected（失败）
export const incrementAsync = createAsyncThunk('counter/incrementAsync', async (value) => {
  const res = await setCountAsync(value);
	return res.data;
});

// 创建一个 Slice 
export const counterSlice = createSlice({
  // 命名空间，name会作为action type的前缀
  name: 'counter',

  // 初始化状态
  initialState,

  // 1、定义reducer更新状态的函数
  // 2、是组件中dispatch使用的action函数
  reducers: {},
  
  // extraReducers 字段让 slice 处理在别处定义的 actions， 
  // 包括由 createAsyncThunk 或其他slice生成的actions。
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state, action) => {
        console.log('incrementAsync进行中 pendding');
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        console.log('incrementAsync成功 fulfilled payload:');
        state.status = 'succeeded';
        state.count += action.payload;
      })
      .addCase(incrementAsync.rejected, (state, action) => {
        console.log('incrementAsync失败 rejected');
        state.status = 'failed';
      });
  }
});

// 导出action函数
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// 导出reducer，创建store
export default counterSlice.reducer;
```

- 在组件中dispatch异步操作并显示状态

```jsx
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementAsync } from './store/features/counterSlice';

const App = () => {
	const dispatch = useDispatch();
	const { count, status } = useSelector(store => store.counter);
	return (
		<div className='app'>
			<h1>App</h1>
			<p>count = {count} </p>
			<p>status = {status}</p>
			<button onClick={() => dispatch(incrementAsync(1))}>通过数量{1}异步递增</button>
		</div>
	);
};

export default App;
```

# 创建一个 React RTK 应用

官方提供一键生成的 **RTK** 应用。推荐的创建 **React Redux** 新应用的方式有两种：

-  [官方 Redux+JS 模版](https://github.com/reduxjs/cra-template-redux)
-  [官方 Redux+TS 模板](https://github.com/reduxjs/cra-template-redux-typescript)

官方推荐的创建 React RTK 新应用的方式是使用它基于 [Create React App](https://github.com/facebook/create-react-app)，它利用了 **[Redux Toolkit](https://redux-toolkit.js.org/)** 和 Redux 与 React 组件的集成：

```bash
# Redux + JS template
npx create-react-app my-app --template redux

# Redux + TypeScript template
npx create-react-app my-app --template redux-typescript
```

一键生成的RTK应用，就是Redux官网教程 **[快速开始](https://cn.redux.js.org/tutorials/quick-start)** 的例子。

