# Hook简介

## 概述

Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

在我们继续之前，请记住 Hook 是：

- **完全可选的。** 你无需重写任何已有代码就可以在一些组件中尝试 Hook。但是如果你不想，你不必现在就去学习或使用 Hook。
- **100% 向后兼容的。** Hook 不包含任何破坏性改动。
- **现在可用。** Hook 已发布于 v16.8.0。

**没有计划从 React 中移除 class。**

## class组件的不足

- 组件之间难以复用状态逻辑
- 复杂组件难以理解
- 使用class导致学习成本变高

Hook文档：https://zh-hans.legacy.reactjs.org/docs/hooks-intro.html

## 什么是 Hook?

Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数。Hook 不能在 class 组件中使用 —— 这使得你不使用 class 也能使用 React。

什么时候我会用 Hook？ 如果你在编写函数组件并意识到需要向其添加一些 state，以前的做法是必须将其它转化为 class。现在你可以在现有的函数组件中使用 Hook。

## Hook 使用规则

Hook 本质就是 JavaScript 函数，但是使用它们会有额外的规则：

- Hook不能在class 组件中使用
- 只能在函数组件最外层调用 Hook，不要在循环、条件判断或者子函数中调用
- 只能在React的函数组件中调用Hook，不要在其他JavaScript函数中调用
  - 在 React 的函数组件中调用 Hook
  -  在自定义 Hook 中调用其他 Hook

# state的研究（useState）

## State：组件的记忆（响应式数据）

组件通常需要根据交互更改屏幕上显示的内容。输入表单应该更新输入字段，单击轮播图上的“下一个”应该更改显示的图片，单击“购买”应该将商品放入购物车。组件需要“记住”某些东西：当前输入值、当前图片、购物车。在 React 中，这种组件特有的记忆被称为 **state**。

### 当普通的变量无法满足时 

以下是一个渲染点击次数的组件。点击按钮应该显示点击次数并将 `count` 更改为 `1`，再次点击又更改为 `2`，以此类推。但这个组件现在**不起作用**（你可以试一试！）：

```jsx
export default function App () {
  
	let count = 0;
	function handleClick() {
		count++;
		console.log('count: ', count);
  }
  
	return (
		<div>
			<h1>App 点击次数：{count}</h1>
			<button onClick={handleClick}>按钮</button>
		</div>
	);
}
```

`handleClick()` 事件处理函数正在更新局部变量 `count`。但存在两个原因使得变化不可见：

1. **局部变量无法在多次渲染中持久保存。** 当 React 再次渲染这个组件时，它会从头开始渲染——不会考虑之前对局部变量的任何更改。
2. **更改局部变量不会触发渲染。** React 没有意识到它需要使用新数据再次渲染组件。

要使用新数据更新组件，需要做两件事：

1. **保留** 渲染之间的数据。
2. **触发** React 使用新数据渲染组件（重新渲染）。

[`useState`](https://zh-hans.react.dev/reference/usestate) Hook 提供了这两个功能：

1. **State 变量** 用于保存渲染间的数据。
2. **State setter 函数** 更新变量并触发 React 再次渲染组件。

### 添加一个 state 变量 

要添加 state 变量，先从文件顶部的 React 中导入 `useState`：

```jsx
import { useState } from 'react';
```

然后，替换这一行：

```jsx
let count = 0;
```

将其修改为一个 **state 变量**：

```jsx
const [count, setCount] = useState(0);
```

> 这里的 `[` 和 `]` 语法称为[数组解构](https://zh-hans.react.dev/learn/a-javascript-refresher#array-destructuring)，它允许你从数组中读取值。 `useState` 返回的数组总是正好有两项。

你将从 `useState` 中获得两样东西：当前的 state（`count`）变量，以及用于更新它的setter函数（`setCount`）。你可以给它们起任何名字，但按照惯例，需要像这样 `[something, setSomething]` 为它们命名。

```jsx
import { useState } from 'react';

export default function App () {
  
	const [count, setCount] = useState(0);
	function handleClick() {
    // 改变count
		setCount(count + 1);
	}

	return (
		<div>
			<h1>App 点击次数：{count}</h1>
			<button onClick={handleClick}>按钮</button>
		</div>
	);
}
```

第一次显示时，`count` 的值为 `0`，因为你把 `0` 传给了 `useState()`。当你想改变 state 时，调用 `setCount()` 并将新的值传递给它。点击该按钮计数器将递增。React 将再次调用你的组件函数。这次，`count` 会变成 `1`。接着，变成 `2`。以此类推。

#### 遇见你的第一个 Hook 

在 React 中，以 `use` 开头的函数被称为 **Hook**。`useState` 是 React 提供的一个内置 Hook。你可以在 [React API 参考](https://zh-hans.react.dev/reference/react) 中找到其他内置的 Hook。你也可以通过组合现有的 Hook 来编写属于你自己的 Hook。

Hook 是特殊的函数，只在 React [渲染](https://zh-hans.react.dev/learn/render-and-commit#step-1-trigger-a-render)时有效。它们能让你 “hook” 到不同的 React 特性中去。

Hook 比普通函数更为严格。你只能在你的组件（或其他 Hook）的 **顶层** 调用 Hook。如果你想在一个条件或循环中使用 `useState`，请提取一个新的组件并在组件内部使用它。

> **陷阱**
>
> **Hooks ——以 `use` 开头的函数——只能在组件或[自定义 Hook](https://zh-hans.react.dev/learn/reusing-logic-with-custom-hooks) 的最顶层调用。** 你不能在条件语句、循环语句或其他嵌套函数内调用 Hook。Hook 是函数，但将它们视为关于组件需求的无条件声明会很有帮助。在组件顶部 “use” React 特性，类似于在文件顶部“导入”模块。

#### 剖析 `useState` 

当你调用 [`useState`](https://zh-hans.react.dev/reference/usestate) 时，你是在告诉 React 你想让这个组件记住一些东西：

```jsx
const [count, setCount] = useState(0);
```

在这个例子里，你希望 React 记住 `count`。

> 注意
>
> 惯例是将这对返回值命名为 `const [thing, setThing]`。你也可以将其命名为任何你喜欢的名称，但遵照约定俗成能使跨项目合作更易理解。

`useState` 的唯一参数是 state 变量的**初始值**。在这个例子中，`count` 的初始值被`useState(0)`设置为 `0`。

每次你的组件渲染时，`useState` 都会给你一个包含两个值的数组：

1. **state 变量** (`count`) 会保存上次渲染的值。
2. **state setter 函数** (`setCount`) 可以更新 state 变量并触发==React 重新渲染组件==。

> 执行`setThing`函数会重新渲染组件，就相当于组件函数重新被调用一次

以下是实际发生的情况：

```jsx
const [count, setCount] = useState(0);
```

1. **组件进行第一次渲染。** 因为你将 `0` 作为 `count` 的初始值传递给 `useState`，它将返回 `[0, setCount]`。 React 记住 `0` 是最新的 state 值。
2. **你更新了 state**。当用户点击按钮时，它会调用 `setCount(count+ 1)`。 `count` 是 `0`，所以它是 `setCount(1)`。这告诉 React 现在记住 `count` 是 `1` 并触发下一次渲染。
3. **组件进行第二次渲染**。React 仍然看到 `useState(0)`，但是因为 React *记住* 了你将 `count` 设置为了 `1`，它将返回 `[1, setCount]`。
4. 以此类推！

### 赋予一个组件多个 state 变量 

你可以在一个组件中拥有任意多种类型的 state 变量。该组件有两个 state 变量，一个数字 `count` 和一个布尔值 `showMore`，点击 “Show Details” 会改变 `showMore` 的值：

```jsx
import { useState } from 'react';

export default function App() {
	const [count, setCount] = useState(0);
	const [showMore, setShowMore] = useState(false);

	function handleClick() {
		setCount(count + 1);
		console.log('count: ', count);
	}
	function handleMoreClick() {
		setShowMore(!showMore);
	}
	return (
		<div>
      <h1>App 点击次数：{count}</h1>
      {showMore && <p>记录次数使用的是React的响应式状态</p>}
			<button onClick={handleClick}>按钮</button>
			<button onClick={handleMoreClick}>{showMore ? 'Hide' : 'Show'} details</button>
		</div>
	);
}
```

如果它们不相关，那么存在多个 state 变量是一个好主意，例如本例中的 `count` 和 `showMore`。但是，如果你发现经常同时更改两个 state 变量，那么最好将它们合并为一个。例如，如果你有一个包含多个字段的表单，那么有一个值为对象的 state 变量比每个字段对应一个 state 变量更方便。 [选择 state 结构](https://zh-hans.react.dev/learn/choosing-the-state-structure)在这方面有更多提示。

### State 是隔离且私有的 

State 是屏幕上组件实例内部的状态。换句话说，**如果你渲染同一个组件两次，每个副本都会有完全隔离的 state**！改变其中一个不会影响另一个。

在这个例子中， `Count` 组件以同样的逻辑被渲染了两次。试着点击每个`Count`组件的按钮。你会注意到它们的 state 是相互独立的：

```jsx
import { useState } from 'react';

export default function App() {
	return (
		<div>
			<h1>App </h1>
			<Count></Count>
			<Count></Count>
		</div>
	);
}

function Count() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<button onClick={() => setCount(count + 1)}>点击次数：{count}</button>
		</div>
	);
}

```

这就是 state 与声明在模块顶部的普通变量不同的原因。 State 不依赖于特定的函数调用或在代码中的位置，它的作用域“只限于”屏幕上的某块特定区域。你渲染了两个 `<Count/>` 组件，所以它们的 state 是分别存储的。

还要注意 `App` 组件“不知道”关于 `Count` state 的任何信息，甚至不知道它是否有任何 state。与 props 不同，**state 完全私有于声明它的组件**。父组件无法更改它。这使你可以向任何组件添加或删除 state，而不会影响其他组件。

如果你希望两个`Count`保持其 states 同步怎么办？在 React 中执行此操作的正确方法是从子组件中*删除* state 并将其添加到离它们最近的共享父组件中。

## 渲染和提交

组件显示到屏幕之前，其必须被 React 渲染。理解这些处理步骤将帮助您思考代码的执行过程并能解释其行为。

想象一下，您的组件是厨房里的厨师，把食材烹制成美味的菜肴。在这种场景下，React 就是一名服务员，他会帮客户们下单并为他们送来所点的菜品。这种请求和提供 UI 的过程总共包括三个步骤：

1. **触发** 一次渲染（把客人的点单分发到厨房）
2. **渲染** 组件（在厨房准备订单）
3. **提交** 到 DOM（将菜品放在桌子上）

| ![](https://zh-hans.react.dev/images/docs/illustrations/i_render-and-commit1.png) | ![](https://zh-hans.react.dev/images/g_arrow.png) | ![](https://zh-hans.react.dev/images/docs/illustrations/i_render-and-commit2.png) | ![](https://zh-hans.react.dev/images/g_arrow.png) | ![](https://zh-hans.react.dev/images/docs/illustrations/i_render-and-commit3.png) |
| :----------------------------------------------------------: | ------------------------------------------------- | :----------------------------------------------------------: | ------------------------------------------------- | :----------------------------------------------------------: |
|                             触发                             |                                                   |                             渲染                             |                                                   |                             提交                             |

### 步骤 1: 触发一次渲染 

有两种原因会导致组件的渲染:

1. 组件的 **初次渲染。**
2. 组件（或者其祖先之一）的 **状态发生了改变。**

#### 初次渲染 

当应用启动时，会触发初次渲染。框架和沙箱有时会隐藏这部分代码，但它是通过调用目标 DOM 节点的 [`createRoot`](https://zh-hans.react.dev/reference/react-dom/client/createRoot)，然后用你的组件调用 `render`  函数完成的：

```jsx
// Image.jsx
export default function Image() {
  return (
    <img
      src="https://i.imgur.com/ZF6s192.jpg"
      alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
    />
  );
}

```

```jsx
// App.jsx
import Image from './Image.js';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'))
root.render(<Image />);
```

试着注释掉 `root.render()`，然后您将会看到组件消失。

#### 状态更新时重新渲染 

一旦组件被初次渲染，您就可以通过使用 [`set` 函数](https://zh-hans.react.dev/reference/react/useState#setstate) 更新其状态来触发之后的渲染。更新组件的状态会自动将一次渲染送入队列。（您可以想象这种情况成餐厅客人在第一次下单之后又点了茶、点心和各种东西，具体取决于他们的胃口。）

| ![](https://zh-hans.react.dev/images/docs/illustrations/i_rerender1.png) | ![](https://zh-hans.react.dev/images/g_arrow.png) | ![](https://zh-hans.react.dev/images/docs/illustrations/i_rerender2.png) | ![](https://zh-hans.react.dev/images/g_arrow.png) | ![](https://zh-hans.react.dev/images/docs/illustrations/i_rerender3.png) |
| :----------------------------------------------------------: | ------------------------------------------------- | :----------------------------------------------------------: | ------------------------------------------------- | :----------------------------------------------------------: |
|                          状态更新…                           |                                                   |                            …触发…                            |                                                   |                            …渲染                             |

### 步骤 2: React 渲染您的组件 

在您触发渲染后，React 会调用您的组件来确定要在屏幕上显示的内容。**“渲染中” 即 React 在调用您的组件。**

- **在进行初次渲染时,** React 会调用根组件。
- **对于后续的渲染,** React 会调用内部状态更新触发了渲染的函数组件。

这个过程是递归的：如果更新后的组件会返回某个另外的组件，那么 React 接下来就会渲染 *那个* 组件，而如果那个组件又返回了某个组件，那么 React 接下来就会渲染 *那个* 组件，以此类推。这个过程会持续下去，直到没有更多的嵌套组件并且 React 确切知道哪些东西应该显示到屏幕上为止。

在接下来的例子中，React 将会调用 `Gallery()` 和 `Image()` 若干次：

```jsx
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'))
root.render(<Gallery />);


function Gallery() {
  return (
    <section>
      <h1>鼓舞人心的雕塑</h1>
      <Image />
      <Image />
      <Image />
    </section>
  );
}

function Image() {
  return (
    <img
      src="https://i.imgur.com/ZF6s192.jpg"
      alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
    />
  );
}
```

- **在初次渲染中，** React 将会为`<section>`、`<h1>` 和三个 `<img>` 标签 [创建 DOM 节点](https://developer.mozilla.org/docs/Web/API/Document/createElement)。
- **在一次重渲染过程中,** React 将计算它们的哪些属性（如果有的话）自上次渲染以来已更改。在下一步（提交阶段）之前，它不会对这些信息执行任何操作

> 陷阱
>
> 渲染必须始终是一次 [纯计算](https://zh-hans.react.dev/learn/keeping-components-pure):
>
> - **输入相同，输出相同。** 给定相同的输入，组件应始终返回相同的 JSX。（当有人点了西红柿沙拉时，他们不应该收到洋葱沙拉！）
> - **只做它自己的事情。** 它不应更改任何存在于渲染之前的对象或变量。（一个订单不应更改其他任何人的订单。）
>
> 否则，随着代码库复杂性的增加，您可能会遇到令人困惑的错误和不可预测的行为。在 “严格模式” 下开发时，React 会调用每个组件的函数两次，这可以帮助发现由不纯函数引起的错误。

### 步骤 3: React 把更改提交到 DOM 上 

在渲染（调用）您的组件之后，React 将会修改 DOM。

- **对于初次渲染，** React 会使用 [`appendChild()`](https://developer.mozilla.org/docs/Web/API/Node/appendChild) DOM API 将其创建的所有 DOM 节点放在屏幕上。
- **对于重渲染，** React 将应用最少的必要操作（在渲染时计算！），以使得 DOM 与最新的渲染输出相互匹配。

**React 仅在渲染之间存在差异时才会更改 DOM 节点。** 例如，有一个组件，它每秒使用从父组件传递下来的不同属性重新渲染一次。注意，您可以添加一些文本到  标签，更新它的 ，但是文本不会在组件重渲染时消失：``

```jsx
export default function Clock({ time }) {
  return (
    <>
      <h1>{time}</h1>
      <input />
    </>
  );
}
```

这个例子之所以会正常运行，是因为在最后一步中，React 只会使用最新的 `time` 更新 `<h1>` 标签的内容。它看到 `<input>` 标签出现在 JSX 中与上次相同的位置，因此 React 不会修改 `<input>` 标签或它的 `value`！

### 尾声：浏览器绘制 

在渲染完成并且 React 更新 DOM 之后，浏览器就会重新绘制屏幕。尽管这个过程被称为“浏览器渲染”（“browser rendering”），但我们还是将它称为“绘制”（“painting”），以避免在这些文档的其余部分中出现混淆。

<img src="https://zh-hans.react.dev/images/docs/illustrations/i_browser-paint.png" style="zoom:25%;" />

## state 如同一张快照

也许 state 变量看起来和一般的可读写的 JavaScript 变量类似。但 state 在其表现出的特性上更像是一张快照。设置它不会更改你已有的 state 变量，但会触发重新渲染。

### 设置 state 会触发渲染 

你可能会认为你的用户界面会直接对点击之类的用户输入做出响应并发生变化。在 React 中，它的工作方式与这种思维模型略有不同。在上一页中，你看到了来自 React 的[设置 state 请求重新渲染](https://zh-hans.react.dev/learn/render-and-commit#step-1-trigger-a-render)。这意味着要使界面对输入做出反应，你需要设置其 state。

在这个例子中，当你按下 “send” 时，`setIsSent(true)` 会通知 React 重新渲染 UI：

```jsx
import { useState } from 'react';

export default function Form() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('Hi!');
  if (isSent) {
    return <h1>Your message is on its way!</h1>
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      setIsSent(true);
      sendMessage(message);
    }}>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

function sendMessage(message) {
  // ...
}

```

当你单击按钮时会发生以下情况：

1. 执行 `onSubmit` 事件处理函数。
2. `setIsSent(true)` 将 `isSent` 设置为 `true` 并排列一个新的渲染。
3. React 根据新的 `isSent` 值重新渲染组件。

让我们仔细看看 state 和渲染之间的关系。

### 渲染会及时生成一张快照 

[“正在渲染”](https://zh-hans.react.dev/learn/render-and-commit#step-2-react-renders-your-components) 就意味着 React 正在调用你的组件——一个函数。你从该函数返回的 JSX 就像是 UI 的一张及时的快照。它的 props、事件处理函数和内部变量都是 **根据当前渲染时的 state** 被计算出来的。

与照片或电影画面不同，你返回的 UI “快照”是可交互的。它其中包括类似事件处理函数的逻辑，这些逻辑用于指定如何对输入作出响应。React 随后会更新屏幕来匹配这张快照，并绑定事件处理函数。因此，按下按钮就会触发你 JSX 中的点击事件处理函数。

当 React 重新渲染一个组件时：

1. React 会再次调用你的函数
2. 你的函数会返回新的 JSX 快照
3. React 会更新界面来匹配你返回的快照

| ![](https://zh-hans.react.dev/images/docs/illustrations/i_render1.png) | ![](https://zh-hans.react.dev/images/g_arrow.png) | ![](https://zh-hans.react.dev/images/docs/illustrations/i_render2.png) | ![](https://zh-hans.react.dev/images/g_arrow.png) | ![](https://zh-hans.react.dev/images/docs/illustrations/i_render3.png) |
| :----------------------------------------------------------: | ------------------------------------------------- | :----------------------------------------------------------: | ------------------------------------------------- | :----------------------------------------------------------: |
|                        React 执行函数                        |                                                   |                           计算快照                           |                                                   |                         更新 DOM 树                          |

作为一个组件的记忆，state 不同于在你的函数返回之后就会消失的普通变量。state 实际上“活”在 React 本身中——就像被摆在一个架子上！——位于你的函数之外。当 React 调用你的组件时，它会为特定的那一次渲染提供一张 state 快照。你的组件会在其 JSX 中返回一张包含一整套新的 props 和事件处理函数的 UI 快照 ，其中所有的值都是 **根据那一次渲染中 state 的值** 被计算出来的！

| ![](https://zh-hans.react.dev/images/docs/illustrations/i_state-snapshot1.png) | ![](https://zh-hans.react.dev/images/g_arrow.png) | ![](https://zh-hans.react.dev/images/docs/illustrations/i_state-snapshot2.png) | ![](https://zh-hans.react.dev/images/g_arrow.png) | ![](https://zh-hans.react.dev/images/docs/illustrations/i_state-snapshot3.png) |
| :----------------------------------------------------------: | ------------------------------------------------- | :----------------------------------------------------------: | ------------------------------------------------- | :----------------------------------------------------------: |
|                  React 收到 setUpdate 通知                   |                                                   |                    React 更新 state 的值                     |                                                   |             React 向组件内传入一张 state 的快照              |

作为一个组件的记忆，state 不同于在你的函数返回之后就会消失的普通变量。state 实际上“活”在 React 本身中——就像被摆在一个架子上！——位于你的函数之外。当 React 调用你的组件时，它会为特定的那一次渲染提供一张 state 快照。你的组件会在其 JSX 中返回一张包含一整套新的 props 和事件处理函数的 UI 快照 ，其中所有的值都是 **根据那一次渲染中 state 的值** 被计算出来的！

这里有个向你展示其运行原理的小例子。在这个例子中，你可能会以为点击“+3”按钮会调用 `setNumber(number + 1)` 三次从而使计数器递增三次。

看看你点击“+3”按钮时会发生什么：

```jsx
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
      }}>+3</button>
    </>
  )
}
```

请注意，每次点击只会让 `number` 递增一次！

**设置 state 只会为 下一次 渲染变更 state 的值**。在第一次渲染期间，`number` 为 `0`。这也就解释了为什么在 *那次渲染中的* `onClick` 处理函数中，即便在调用了 `setNumber(number + 1)` 之后，`number` 的值也仍然是 `0`：

```jsx
<button onClick={() => {
  setNumber(number + 1);
  setNumber(number + 1);
  setNumber(number + 1);
}}>+3</button>
```

以下是这个按钮的点击事件处理函数通知 React 要做的事情：

1. `setNumber(number + 1)`：`number` 是 0 所以 `setNumber(0 + 1)`。
   - React 准备在下一次渲染时将 `number` 更改为 1。
2. `setNumber(number + 1)`：`number` 是0 所以 `setNumber(0 + 1)`。
   - React 准备在下一次渲染时将 `number` 更改为 1。

3. `setNumber(number + 1)`：`number` 是0 所以 `setNumber(0 + 1)`。
   - React 准备在下一次渲染时将 `number` 更改为 1。

尽管你调用了三次 `setNumber(number + 1)`，但在 *这次渲染的* 事件处理函数中 `number` 会一直是 `0`，所以你会三次将 state 设置成 `1`。这就是为什么在你的事件处理函数执行完以后，React 重新渲染的组件中的 `number` 等于 `1` 而不是 `3`。

你还可以通过在心里把 state 变量替换成它们在你代码中的值来想象这个过程。由于 *这次渲染* 中的 state 变量 `number` 是 `0`，其事件处理函数看起来会像这样：

```jsx
<button onClick={() => {
  setNumber(0 + 1);
  setNumber(0 + 1);
  setNumber(0 + 1);
}}>+3</button>
```

对于下一次渲染来说，`number` 是 `1`，因此 *那次渲染中的* 点击事件处理函数看起来会像这样：

```jsx
<button onClick={() => {
  setNumber(1 + 1);
  setNumber(1 + 1);
  setNumber(1 + 1);
}}>+3</button>
```

这就是为什么再次点击按钮会将计数器设置为 `2`，下次点击时会设为 `3`，依此类推。

### 随时间变化的 state 

好的，刚才那些很有意思。试着猜猜点击这个按钮会弹出什么：

```jsx
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5);
        alert(number);
      }}>+5</button>
    </>
  )
}

```

如果你使用之前替换的方法，你就能猜到这个提示框将会显示 “0”：

```jsx
setNumber(0 + 5);
alert(0);
```

但如果你在这个提示框上加上一个定时器， 使得它在组件重新渲染 *之后* 才触发，又会怎样呢？是会显示 “0” 还是 “5” ？猜一猜！

```jsx
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5);
        setTimeout(() => {
          alert(number);
        }, 3000);
      }}>+5</button>
    </>
  )
}
```

惊讶吗？你如果使用替代法，就能看到被传入提示框的 state “快照”。

```jsx
setNumber(0 + 5);
setTimeout(() => {
  alert(0);
}, 3000);
```

到提示框运行时，React 中存储的 state 可能已经发生了更改，但是这次更改是根据用户与其交互时的 state 快照来安排的！

**一个 state 变量的值永远不会在一次渲染的内部发生变化，** 即使其事件处理函数的代码是异步的。在 *那次渲染的* `onClick` 内部，`number` 的值即使在调用 `setNumber(number + 5)` 之后也还是 `0`。它的值在 React 通过调用你的组件“获取 UI 的快照”时就被“固定”了。

这里有个示例能够说明上述特性会使你的事件处理函数更不容易出现计时错误。下面是一个会在五秒延迟之后发送一条消息的表单。想象以下场景：

1. 你按下“发送”按钮，向 Alice 发送“你好”。
2. 在五秒延迟结束之前，将“To”字段的值更改为“Bob”。

你觉得 `alert` 会显示什么？它是会显示“你向 Alice 说了你好“还是会显示“你向 Tom 说了你好”？根据你已经学到的知识猜一猜，然后动手试一试：

```jsx
import { useState } from 'react';

export default function Form() {
	const [to, setTo] = useState('Alice');
	const [message, setMessage] = useState('Hello');

	function handleSubmit(e) {
		e.preventDefault();
		setTimeout(() => {
			alert(`You said ${message} to ${to}`);
		}, 5000);
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>
				To:
				<select value={to} onChange={e => setTo(e.target.value)}>
					<option value='Alice'>Alice</option>
					<option value='Bob'>Bob</option>
				</select>
			</label>
			<textarea placeholder='Message' value={message} onChange={e => setMessage(e.target.value)} />
			<button type='submit'>Send</button>
		</form>
	);
}
```

**React 会使 state 的值始终”固定“在一次渲染的各个事件处理函数内部。** 你无需担心代码运行时 state 是否发生了变化。

但是，万一你想在重新渲染之前读取最新的 state 怎么办？你应该使用 [状态更新函数](https://zh-hans.react.dev/learn/queueing-a-series-of-state-updates)，后面将会介绍！

## 把一系列 state 更新加入队列

设置组件 state 会把一次重新渲染加入队列。但有时你可能会希望在下次渲染加入队列之前对 state 的值执行多次操作。为此，了解 React 如何批量更新 state 会很有帮助。

### React 会对 state 更新进行批处理 

在下面的示例中，你可能会认为点击 “+3” 按钮会使计数器递增三次，因为它调用了 `setNumber(number + 1)` 三次：

```jsx
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
      }}>+3</button>
    </>
  )
}
```

但是，你可能还记得上一节中的内容，[每一次渲染的 state 值都是固定的](https://zh-hans.react.dev/learn/state-as-a-snapshot#rendering-takes-a-snapshot-in-time)，因此无论你调用多少次 `setNumber(1)`，在第一次渲染的事件处理函数内部的 `number` 值总是 `0` ：

```jsx
setNumber(0 + 1);
setNumber(0 + 1);
setNumber(0 + 1);
```

但是这里还有另外一个影响因素需要讨论。**React 会等到事件处理函数中的 \*所有\* 代码都运行完毕再处理你的 state 更新。** 这就是为什么重新渲染只会发生在所有这些 `setNumber()` 调用 *之后* 的原因。

这可能会让你想起餐厅里帮你点菜的服务员。服务员不会在你说第一道菜的时候就跑到厨房！相反，他们会让你把菜点完，让你修改菜品，甚至会帮桌上的其他人点菜。

<img src="https://zh-hans.react.dev/images/docs/illustrations/i_react-batching.png" style="zoom: 25%;" />

这让你可以更新多个 state 变量——甚至来自多个组件的 state 变量——而不会触发太多的 [重新渲染](https://zh-hans.react.dev/learn/render-and-commit#re-renders-when-state-updates)。但这也意味着只有在你的事件处理函数及其中任何代码执行完成 *之后*，UI 才会更新。这种特性也就是 **批处理**，它会使你的 React 应用运行得更快。它还会帮你避免处理只更新了一部分 state 变量的令人困惑的“半成品”渲染。

**React 不会跨 \*多个\* 需要刻意触发的事件（如点击）进行批处理**——每次点击都是单独处理的。请放心，React 只会在一般来说安全的情况下才进行批处理。这可以确保，例如，如果第一次点击按钮会禁用表单，那么第二次点击就不会再次提交它。

### 在下次渲染前多次更新同一个 state 

这是一个不常见的用例，但是如果你想在下次渲染之前多次更新同一个 state，你可以像 `setNumber(n => n + 1)` 这样传入一个根据队列中的前一个 state 计算下一个 state 的 *函数*，而不是像 `setNumber(number + 1)` 这样传入 *下一个 state 值*。这是一种告诉 React “用 state 值做某事”而不是仅仅替换它的方法。

现在尝试递增计数器：

```jsx
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(n => n + 1);
        setNumber(n => n + 1);
        setNumber(n => n + 1);
      }}>+3</button>
    </>
  )
}
```

在这里，`n => n + 1` 被称为 **更新函数**。当你将它传递给一个 state 设置函数时：

1. React 会将此函数加入队列，以便在事件处理函数中的所有其他代码运行后进行处理。
2. 在下一次渲染期间，React 会遍历队列并给你更新之后的最终 state。

```jsx
setNumber(n => n + 1);
setNumber(n => n + 1);
setNumber(n => n + 1);
```

下面是 React 在执行事件处理函数时处理这几行代码的过程：

1. `setNumber(n => n + 1)`：`n => n + 1` 是一个函数。React 将它加入队列。
2. `setNumber(n => n + 1)`：`n => n + 1` 是一个函数。React 将它加入队列。
3. `setNumber(n => n + 1)`：`n => n + 1` 是一个函数。React 将它加入队列。

当你在下次渲染期间调用 `useState` 时，React 会遍历队列。之前的 `number` state 的值是 `0`，所以这就是 React 作为参数 `n` 传递给第一个更新函数的值。然后 React 会获取你上一个更新函数的返回值，并将其作为 `n` 传递给下一个更新函数，以此类推：

| 更新队列     | `n`  | 返回值      |
| ------------ | ---- | ----------- |
| `n => n + 1` | `0`  | `0 + 1 = 1` |
| `n => n + 1` | `1`  | `1 + 1 = 2` |
| `n => n + 1` | `2`  | `2 + 1 = 3` |

React 会保存 `3` 为最终结果并从 `useState` 中返回。

这就是为什么在上面的示例中点击“+3”正确地将值增加“+3”。

#### 如果你在替换 state 后==更新== state 会发生什么 

这个事件处理函数会怎么样？你认为 `number` 在下一次渲染中的值是什么？

```jsx
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5);
        setNumber(n => n + 1);
      }}>增加数字</button>
    </>
  )
}
```

这是事件处理函数告诉 React 要做的事情：

1. `setNumber(number + 5)`：`number` 为 `0`，所以 `setNumber(0 + 5)`。React 将 *“替换为 `5`”* 添加到其队列中。
2. `setNumber(n => n + 1)`：`n => n + 1` 是一个更新函数。 React 将 *该函数* 添加到其队列中。

在下一次渲染期间，React 会遍历 state 队列：

| 更新队列     | `n`           | 返回值      |
| ------------ | ------------- | ----------- |
| “替换为 `5`” | `0`（未使用） | `5`         |
| `n => n + 1` | `5`           | `5 + 1 = 6` |

React 会保存 `6` 为最终结果并从 `useState` 中返回。

> **注意**
>
> 你可能已经注意到，`setState(x)` 实际上会像 `setState(n => x)` 一样运行，只是没有使用 `n`！

#### 如果你在更新 state 后==替换== state 会发生什么 

让我们再看一个例子。你认为 `number` 在下一次渲染中的值是什么？

```jsx
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5);
        setNumber(n => n + 1);
        setNumber(42);
      }}>增加数字</button>
    </>
  )
}
```

以下是 React 在执行事件处理函数时处理这几行代码的过程：

1. `setNumber(number + 5)`：`number` 为 `0`，所以 `setNumber(0 + 5)`。React 将 *“替换为 `5`”* 添加到其队列中。
2. `setNumber(n => n + 1)`：`n => n + 1` 是一个更新函数。React 将该函数添加到其队列中。
3. `setNumber(42)`：React 将 *“替换为 `42`”* 添加到其队列中。

在下一次渲染期间，React 会遍历 state 队列：

| 更新队列      | `n`           | 返回值      |
| ------------- | ------------- | ----------- |
| “替换为 `5`”  | `0`（未使用） | `5`         |
| `n => n + 1`  | `5`           | `5 + 1 = 6` |
| “替换为 `42`” | `6`（未使用） | `42`        |

然后 React 会保存 `42` 为最终结果并从 `useState` 中返回。

总而言之，以下是你可以考虑传递给 `setNumber` state 设置函数的内容：

- **一个更新函数**（例如：`n => n + 1`）会被添加到队列中。
- **任何其他的值**（例如：数字 `5`）会导致“替换为 `5`”被添加到队列中，已经在队列中的内容会被忽略。

事件处理函数执行完成后，React 将触发重新渲染。在重新渲染期间，React 将处理队列。更新函数会在渲染期间执行，因此 **更新函数必须是 [纯函数](https://zh-hans.react.dev/learn/keeping-components-pure)** 并且只 *返回* 结果。不要尝试从它们内部设置 state 或者执行其他副作用。在严格模式下，React 会执行每个更新函数两次（但是丢弃第二个结果）以便帮助你发现错误。

### 命名惯例 

通常可以通过相应 state 变量的第一个字母来命名更新函数的参数：

```jsx
setEnabled(e => !e);

setLastName(ln => ln.reverse());

setFriendCount(fc => fc * 2);
```

如果你喜欢更冗长的代码，另一个常见的惯例是重复使用完整的 state 变量名称，如 `setEnabled(enabled => !enabled)`，或使用前缀，如 `setEnabled(prevEnabled => !prevEnabled)`。

## 更新 state 中的对象

State 可以保存任何类型的 JavaScript 值，包括对象。但是你不应该直接更改你持有的处于 React 状态的对象。相反，当您想要更新对象时，您需要创建一个新对象（或创建现有对象的副本），然后将状态设置为使用该副本。

### 什么是 mutation？

您可以在state中存储任何类型的 JavaScript 值。

```jsx
const [x, setX] = useState(0);
```

到目前为止，您一直在使用**数字**、**字符串**和**布尔值**。这些类型的JavaScript值是“不可变的”，这意味着不可更改或“只读”。您可以触发重新渲染以*替换*值：

```jsx
setX(5);
```

state从 `0` 更改为 `5` ，但*数字 `0` 本身*没有改变。无法对 JavaScript 中的内置原始值（如数字、字符串和布尔值）进行任何更改。

对于对象类型的state：

```jsx 
const [position, setPosition] = useState({ x: 0, y: 0 });
```

从技术上讲，可以更改*对象本身*的内容。**这称为mutation：**

```jsx
position.x = 5;
```

但是，尽管处于 React 状态的对象在技术上是可变的，但您应该将它们**视为**不可变的，就像数字、布尔值和字符串一样。与其改变它们，不如始终替换它们。

### 将状态视为只读

换句话说，您应该**将放入state的任何 JavaScript 对象视为只读。**

本示例使一个对象处于状态以表示当前指针位置。当您在预览区域上触摸或移动光标时，红点应该会移动。但是点停留在初始位置：

```jsx
import { useState } from 'react';
export default function MovingDot() {
	const [position, setPosition] = useState({
		x: 0,
		y: 0,
	});
	return (
		<div
			onPointerMove={e => {
				position.x = e.clientX;
				position.y = e.clientY;
			}}
			style={{
				position: 'relative',
				width: '100vw',
				height: '100vh',
			}}>
			<div
				style={{
					position: 'absolute',
					backgroundColor: 'red',
					borderRadius: '50%',
					transform: `translate(${position.x}px, ${position.y}px)`,
					left: -10,
					top: -10,
					width: 20,
					height: 20,
				}}
			/>
		</div>
	);
}

```

问题出在这段代码上。

```jsx
onPointerMove={e => {
  position.x = e.clientX;
  position.y = e.clientY;
}}
```

这段代码修改了从之前的渲染中分配给位置的对象。但是如果不使用状态设置函数，React就不知道对象发生了变化。所以React不做任何响应。这就像你已经吃过饭了还想换菜一样。虽然在某些情况下可以改变状态，但我们不建议这样做。您应该将呈现中可以访问的状态值视为只读。

> React中默认浅监听，当State值为对象（{}、[]）时，栈中存的是对象的引用（地址），setTing 改变的是堆中的数据，直接往`position`对象中添加数据，栈中的地址还是原地址，React浅监听到地址没变，故会认为State并未改变，故没有重渲染页面，想要从新渲染页面，需要把`position`对象的指向地址的改变，数组也是同理

在这种情况下，要实际[触发重新渲染](https://zh-hans.react.dev/learn/state-as-a-snapshot#setting-state-triggers-renders)，请**创建一个\*新\*对象并将其传递给状态设置函数：**

```jsx
onPointerMove={e => {
  setPosition({
    x: e.clientX,
    y: e.clientY
  });
}}
```

使用 `setPosition`，你告诉React:

- 替换为此新对象`position`
- 并再次渲染此组件

注意，当你触摸或悬停在预览区域上时，红点现在是如何跟随你的指针的:

```jsx
import { useState } from 'react';
export default function MovingDot() {
	const [position, setPosition] = useState({
		x: 0,
		y: 0,
	});
	return (
		<div
			onPointerMove={e => {
				setPosition({
					x: e.clientX,
					y: e.clientY,
				});
			}}
			style={{
				position: 'relative',
				width: '100vw',
				height: '100vh',
			}}>
			<div
				style={{
					position: 'absolute',
					backgroundColor: 'red',
					borderRadius: '50%',
					transform: `translate(${position.x}px, ${position.y}px)`,
					left: -10,
					top: -10,
					width: 20,
					height: 20,
				}}
			/>
		</div>
	);
}

```

### 使用扩展语法复制对象

在前面的例子中，`position`对象总是从当前光标位置重新创建。但是，您通常希望将现有数据作为创建的新对象的一部分包含进去。例如，您可能希望仅更新表单中的一个字段，但保留所有其他字段的先前值。

这些输入字段不起作用，因为 `onChange` 处理程序会改变状态:

```jsx
import { useState } from 'react';

export default function Form() {
	const [person, setPerson] = useState({
		firstName: 'Barbara',
		lastName: 'Hepworth',
		email: 'bhepworth@sculpture.com',
	});

	function handleFirstNameChange(e) {
		person.firstName = e.target.value;
	}

	function handleLastNameChange(e) {
		person.lastName = e.target.value;
	}

	function handleEmailChange(e) {
		person.email = e.target.value;
	}

	return (
		<>
			<label>
				First name:
				<input value={person.firstName} onChange={handleFirstNameChange} />
			</label>
			<label>
				Last name:
				<input value={person.lastName} onChange={handleLastNameChange} />
			</label>
			<label>
				Email:
				<input value={person.email} onChange={handleEmailChange} />
			</label>
			<p>
				{person.firstName} {person.lastName} ({person.email})
			</p>
		</>
	);
}

```

例如，此行从过去的渲染中改变状态：

```jsx
person.firstName = e.target.value;
```

获得你正在寻找的行为的可靠方法是创建一个新对象并将它传递给 `setPerson`。但是在这里，你还想复制现有的数据到它，因为只有一个字段改变了:

```jsx
setPerson({
  firstName: e.target.value, // 改变 firstName 的值为输入框的值
  lastName: person.lastName,
  email: person.email
});
```

你可以用[…对象扩展语法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals)，这样就不需要单独复制每个属性。

```jsx
setPerson({
  ...person, // 复制其他字段
  firstName: e.target.value // 只给 firstName 重新赋值
});
```

现在表格有效！

注意，您没有为每个输入字段声明单独的状态变量。对于大型表单，将所有数据分组在一个对象中非常方便——只要您正确地更新它!

```jsx
import { useState } from 'react';

export default function Form() {
	const [person, setPerson] = useState({
		firstName: 'Barbara',
		lastName: 'Hepworth',
		email: 'bhepworth@sculpture.com',
	});

	function handleFirstNameChange(e) {
		setPerson({
			...person,
			firstName: e.target.value,
		});
	}

	function handleLastNameChange(e) {
		setPerson({
			...person,
			lastName: e.target.value,
		});
	}

	function handleEmailChange(e) {
		setPerson({
			...person,
			email: e.target.value,
		});
	}

	return (
		<>
			<label>
				First name:
				<input value={person.firstName} onChange={handleFirstNameChange} />
			</label>
			<label>
				Last name:
				<input value={person.lastName} onChange={handleLastNameChange} />
			</label>
			<label>
				Email:
				<input value={person.email} onChange={handleEmailChange} />
			</label>
			<p>
				{person.firstName} {person.lastName} ({person.email})
			</p>
		</>
	);
}

```

注意 `...扩展语法`是“浅复制的”——它只复制一层深的东西。这使得它更快，但这也意味着如果您想要更新一个嵌套属性，您将不得不多次使用它。

### 更新嵌套对象

考虑一个嵌套的对象结构，如下所示：

```jsx
const [person, setPerson] = useState({
  name: 'Niki de Saint Phalle',
  artwork: {
    title: 'Blue Nana',
    city: 'Hamburg',
    image: 'https://i.imgur.com/Sd1AgUOm.jpg',
  }
});
```

如果你想更新`person.artwork.City`，很明显如何利用`mutation`来做到这一点:

```jsx
person.artwork.city = 'New Delhi';
```

但在React中，你将状态视为不可变的!为了改变 `city`，你首先需要生成新的 `artwork`对象(预先填充来自前一个`artwork`的数据)，然后生成指向新`artwork`的新`person`对象:

```jsx
const nextArtwork = { ...person.artwork, city: 'New Delhi' };
const nextPerson = { ...person, artwork: nextArtwork };
setPerson(nextPerson);
```

或者，编写为单个函数调用：

```jsx
setPerson({
  ...person, // 复制其他字段
  artwork: { //但是替换 artwork 字段
    ...person.artwork, // 复制 artwork 其他字段
    city: 'New Delhi' // 更新 city 字段的值
  }
});
```

这有点罗嗦，但在许多情况下都很好用：

```jsx
import { useState } from 'react';

export default function Form() {
	const [person, setPerson] = useState({
		name: 'Niki de Saint Phalle',
		artwork: {
			title: 'Blue Nana',
			city: 'Hamburg',
			image: 'https://i.imgur.com/Sd1AgUOm.jpg',
		},
	});

	function handleNameChange(e) {
		setPerson({
			...person,
			name: e.target.value,
		});
	}

	function handleTitleChange(e) {
		setPerson({
			...person,
			artwork: {
				...person.artwork,
				title: e.target.value,
			},
		});
	}

	function handleCityChange(e) {
		setPerson({
			...person,
			artwork: {
				...person.artwork,
				city: e.target.value,
			},
		});
	}

	function handleImageChange(e) {
		setPerson({
			...person,
			artwork: {
				...person.artwork,
				image: e.target.value,
			},
		});
	}

	return (
		<>
			<label>
				Name:
				<input value={person.name} onChange={handleNameChange} />
			</label>
			<label>
				Title:
				<input value={person.artwork.title} onChange={handleTitleChange} />
			</label>
			<label>
				City:
				<input value={person.artwork.city} onChange={handleCityChange} />
			</label>
			<label>
				Image:
				<input value={person.artwork.image} onChange={handleImageChange} />
			</label>
			<p>
				<i>{person.artwork.title}</i>
				{' by '}
				{person.name}
				<br />
				(located in {person.artwork.city})
			</p>
			<img src={person.artwork.image} alt={person.artwork.title} />
		</>
	);
}

```

#### 使用 Immer 编写简洁的更新逻辑

如果状态嵌套较深，则可能需要考虑[将其平展。](https://zh-hans.react.dev/learn/choosing-the-state-structure#avoid-deeply-nested-state)但是，如果您不想更改状态结构，则可能更喜欢嵌套跨页的快捷方式。[Immer](https://github.com/immerjs/use-immer) 是一个流行的库，它允许您使用方便但不断变化的语法进行编写，并负责为您生成副本。使用 Immer，您编写的代码看起来像是在“违反规则”并改变对象：

```jsx
updatePerson(draft => {
  draft.artwork.city = 'Lagos';
});
```

但与常规突变不同的是，它不会覆盖过去的状态！

要试用 `Immer`：

1. 运行以将 `Immer` 添加为依赖项`npm install use-immer  immer`   ----需要安装这两个(use-immer -- immer)

2. 然后使用 `import { useImmer } from 'use-immer'` 替换为`import { useState } from 'react'`

下面是上面转换为 Immmer 的示例：

```jsx
import { useImmer } from 'use-immer';

export default function Form() {
	const [person, updatePerson] = useImmer({
		name: 'Niki de Saint Phalle',
		artwork: {
			title: 'Blue Nana',
			city: 'Hamburg',
			image: 'https://i.imgur.com/Sd1AgUOm.jpg',
		},
	});

	function handleNameChange(e) {
		updatePerson(draft => {
			draft.name = e.target.value;
		});
	}

	function handleTitleChange(e) {
		updatePerson(draft => {
			draft.artwork.title = e.target.value;
		});
	}

	function handleCityChange(e) {
		updatePerson(draft => {
			draft.artwork.city = e.target.value;
		});
	}

	function handleImageChange(e) {
		updatePerson(draft => {
			draft.artwork.image = e.target.value;
		});
	}

	return (
		<>
			<label>
				Name:
				<input value={person.name} onChange={handleNameChange} />
			</label>
			<label>
				Title:
				<input value={person.artwork.title} onChange={handleTitleChange} />
			</label>
			<label>
				City:
				<input value={person.artwork.city} onChange={handleCityChange} />
			</label>
			<label>
				Image:
				<input value={person.artwork.image} onChange={handleImageChange} />
			</label>
			<p>
				<i>{person.artwork.title}</i>
				{' by '}
				{person.name}
				<br />
				(located in {person.artwork.city})
			</p>
			<img src={person.artwork.image} alt={person.artwork.title} />
		</>
	);
}

```

注意事件处理程序变得多么简洁。您可以在单个组件中随意混合和匹配`useState`和`useImmer`。`Immer`是一种保持更新处理程序简洁的好方法，特别是在您的状态中存在嵌套，并且复制对象会导致重复代码的情况下。

#### Immer 介绍

Immer（德语为：always）是一个小型包，可让您以更方便的方式使用不可变状态。

文档：https://immerjs.github.io/immer/zh-CN/

## 更新 state 中的数组

数组是另外一种可以存储在 state 中的 JavaScript 对象，它虽然是可变的，但是却应该被视为不可变。同对象一样，当你想要更新存储于 state 中的数组时，你需要创建一个新的数组（或者创建一份已有数组的拷贝值），并使用新数组设置 state。

### 在没有 mutation 的前提下更新数组 

在 JavaScript 中，数组只是另一种对象。[同对象一样](https://zh-hans.react.dev/learn/updating-objects-in-state)，**你需要将 React state 中的数组视为只读的**。这意味着你不应该使用类似于 `arr[0] = 'bird'` 这样的方式来重新分配数组中的元素，也不应该使用会直接修改原始数组的方法，例如 `push()` 和 `pop()`。

相反，每次要更新一个数组时，你需要把一个*新*的数组传入 state 的 setter 方法中。为此，你可以通过使用像 `filter()` 和 `map()` 这样不会直接修改原始值的方法，从原始数组生成一个新的数组。然后你就可以将 state 设置为这个新生成的数组。

下面是常见数组操作的参考表。当你操作 React state 中的数组时，你需要避免使用左列的方法，而首选右列的方法：

|          | 避免使用 (会改变原始数组)     | 推荐使用 (会返回一个新数组）                                 |
| -------- | ----------------------------- | ------------------------------------------------------------ |
| 添加元素 | `push`，`unshift`             | `concat`，`[...arr]` 展开语法（[例子](https://zh-hans.react.dev/learn/updating-arrays-in-state#adding-to-an-array)） |
| 删除元素 | `pop`，`shift`，`splice`      | `filter`，`slice`（[例子](https://zh-hans.react.dev/learn/updating-arrays-in-state#removing-from-an-array)） |
| 替换元素 | `splice`，`arr[i] = ...` 赋值 | `map`（[例子](https://zh-hans.react.dev/learn/updating-arrays-in-state#replacing-items-in-an-array)） |
| 排序     | `reverse`，`sort`             | 先将数组复制一份（[例子](https://zh-hans.react.dev/learn/updating-arrays-in-state#making-other-changes-to-an-array)） |

或者，你可以[使用 Immer](https://zh-hans.react.dev/learn/updating-arrays-in-state#write-concise-update-logic-with-immer) ，这样你便可以使用表格中的所有方法了。

> **陷阱**
>
> 不幸的是，虽然 [`slice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) 和 [`splice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) 的名字相似，但作用却迥然不同：
>
> - `slice` 让你可以拷贝数组或是数组的一部分。
> - `splice` **会直接修改** 原始数组（插入或者删除元素）。
>
> 在 React 中，更多情况下你会使用 `slice`（没有 `p` ！），因为你不想改变 state 中的对象或数组。[更新对象](https://zh-hans.react.dev/learn/updating-objects-in-state)这一章节解释了什么是 mutation，以及为什么不推荐在 state 里这样做。

#### 向数组中添加元素 

`push()` 会直接修改原始数组，而你不希望这样：

```jsx
import { useState } from 'react';

let nextId = 0;

export default function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>振奋人心的雕塑家们：</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        artists.push({
          id: nextId++,
          name: name,
        });
      }}>添加</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}

```

相反，你应该创建一个 *新* 数组，其包含了原始数组的所有元素 *以及* 一个在末尾的新元素。这可以通过很多种方法实现，最简单的一种就是使用 `...` [数组展开](https://zh-hans.react.dev/a-javascript-refresher#array-spread) 语法：

```jsx
setArtists( // 替换 state
  [ // 是通过传入一个新数组实现的
    ...artists, // 新数组包含原数组的所有元素

    { id: nextId++, name: name } // 并在末尾添加了一个新的元素
  ]
);
```

现在代码可以正常运行了。

#### 从数组中删除元素 

从数组中删除一个元素最简单的方法就是将它*过滤出去*。换句话说，你需要生成一个不包含该元素的新数组。这可以通过 `filter` 方法实现，例如：

```jsx
import { useState } from 'react';

let initialArtists = [
	{ id: 0, name: 'Marta Colvin Andrade' },
	{ id: 1, name: 'Lamidi Olonade Fakeye' },
	{ id: 2, name: 'Louise Nevelson' },
];

export default function List() {
	const [artists, setArtists] = useState(initialArtists);

	return (
		<>
			<h1>振奋人心的雕塑家们：</h1>
			<ul>
				{artists.map(artist => (
					<li key={artist.id}>
						{artist.name}{' '}
						<button
							onClick={() => {
								setArtists(artists.filter(a => a.id !== artist.id));
							}}>
							删除
						</button>
					</li>
				))}
			</ul>
		</>
	);
}

```

点击“删除”按钮几次，并且查看按钮处理点击事件的代码。

```jsx
setArtists(
  artists.filter(a => a.id !== artist.id)
);
```

这里，`artists.filter(s => s.id !== artist.id)` 表示“创建一个新的数组，该数组由那些 ID 与 `artists.id` 不同的 `artists` 组成”。换句话说，每个 artist 的“删除”按钮会把 *那一个* artist 从原始数组中过滤掉，并使用过滤后的数组再次进行渲染。注意，`filter` 并不会改变原始数组。

#### 转换数组 

如果你想改变数组中的某些或全部元素，你可以用 `map()` 创建一个**新**数组。你传入 `map` 的函数决定了要根据每个元素的值或索引（或二者都要）对元素做何处理。

在下面的例子中，一个数组记录了两个圆形和一个正方形的坐标。当你点击按钮时，仅有两个圆形会向下移动 100 像素。这是通过使用 `map()` 生成一个新数组实现的。

```jsx
import { useState } from 'react';

let initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 },
];

export default function ShapeEditor() {
  const [shapes, setShapes] = useState(
    initialShapes
  );

  function handleClick() {
    const nextShapes = shapes.map(shape => {
      if (shape.type === 'square') {
        // 不作改变
        return shape;
      } else {
        // 返回一个新的圆形，位置在下方 50px 处
        return {
          ...shape,
          y: shape.y + 50,
        };
      }
    });
    // 使用新的数组进行重渲染
    setShapes(nextShapes);
  }

  return (
    <>
      <button onClick={handleClick}>
        所有圆形向下移动！
      </button>
      {shapes.map(shape => (
        <div
          key={shape.id}
          style={{
          background: 'purple',
          position: 'absolute',
          left: shape.x,
          top: shape.y,
          borderRadius:
            shape.type === 'circle'
              ? '50%' : '',
          width: 20,
          height: 20,
        }} />
      ))}
    </>
  );
}

```

#### 替换数组中的元素 

想要替换数组中一个或多个元素是非常常见的。类似 `arr[0] = 'bird'` 这样的赋值语句会直接修改原始数组，所以在这种情况下，你也应该使用 `map`。

要替换一个元素，请使用 `map` 创建一个新数组。在你的 `map` 回调里，第二个参数是元素的索引。使用索引来判断最终是返回原始的元素（即回调的第一个参数）还是替换成其他值：

```jsx
import { useState } from 'react';

let initialCounters = [0, 0, 0];

export default function CounterList() {
	const [counters, setCounters] = useState(initialCounters);

	function handleIncrementClick(index) {
		const nextCounters = counters.map((c, i) => {
			if (i === index) {
				// 递增被点击的计数器数值
				return c + 1;
			} else {
				// 其余部分不发生变化
				return c;
			}
		});
		setCounters(nextCounters);
	}

	return (
		<ul>
			{counters.map((counter, i) => (
				<li key={i}>
					{counter}
					<button onClick={() => handleIncrementClick(i)}>+1</button>
				</li>
			))}
		</ul>
	);
}

```

#### 向数组中插入元素 

有时，你也许想向数组特定位置插入一个元素，这个位置既不在数组开头，也不在末尾。为此，你可以将数组展开运算符 `...` 和 `slice()` 方法一起使用。`slice()` 方法让你从数组中切出“一片”。为了将元素插入数组，你需要先展开原数组在插入点之前的切片，然后插入新元素，最后展开原数组中剩下的部分。

下面的例子中，插入按钮总是会将元素插入到数组中索引为 `1` 的位置。

```jsx
import { useState } from 'react';

let nextId = 3;
const initialArtists = [
	{ id: 0, name: 'Marta Colvin Andrade' },
	{ id: 1, name: 'Lamidi Olonade Fakeye' },
	{ id: 2, name: 'Louise Nevelson' },
];

export default function List() {
	const [name, setName] = useState('');
	const [artists, setArtists] = useState(initialArtists);

	function handleClick() {
		// const insertAt = Math.floor(Math.random() * artists.length); // 可能是任何索引
		const insertAt = 1; // 可能是任何索引
		const nextArtists = [
			// 插入点之前的元素：
			...artists.slice(0, insertAt),
			// 新的元素：
			{ id: nextId++, name: name },
			// 插入点之后的元素：
			...artists.slice(insertAt),
		];
		setArtists(nextArtists);
		setName('');
	}

	return (
		<>
			<h1>振奋人心的雕塑家们：</h1>
			<input value={name} onChange={e => setName(e.target.value)} />
			<button onClick={handleClick}>插入</button>
			<ul>
				{artists.map(artist => (
					<li key={artist.id}>{artist.name}</li>
				))}
			</ul>
		</>
	);
}

```

#### 其他改变数组的情况 

总会有一些事，是你仅仅依靠展开运算符和 `map()` 或者 `filter()` 等不会直接修改原值的方法所无法做到的。例如，你可能想翻转数组，或是对数组排序。而 JavaScript 中的 `reverse()` 和 `sort()` 方法会改变原数组，所以你无法直接使用它们。

**然而，你可以先拷贝这个数组，再改变这个拷贝后的值。**

例如：

```jsx
import { useState } from 'react';

let nextId = 3;
const initialList = [
	{ id: 0, title: 'Big Bellies' },
	{ id: 1, title: 'Lunar Landscape' },
	{ id: 2, title: 'Terracotta Army' },
];

export default function List() {
	const [list, setList] = useState(initialList);

	function handleClick() {
		const nextList = [...list];
		nextList.reverse();
		setList(nextList);
	}

	return (
		<>
			<button onClick={handleClick}>翻转</button>
			<ul>
				{list.map(artwork => (
					<li key={artwork.id}>{artwork.title}</li>
				))}
			</ul>
		</>
	);
}

```

在这段代码中，你先使用 `[...list]` 展开运算符创建了一份数组的拷贝值。当你有了这个拷贝值后，你就可以使用像 `nextList.reverse()` 或 `nextList.sort()` 这样直接修改原数组的方法。你甚至可以通过 `nextList[0] = "something"` 这样的方式对数组中的特定元素进行赋值。

然而，**即使你拷贝了数组，你还是不能直接修改其_内部_的元素**。这是因为数组的拷贝是浅拷贝——新的数组中依然保留了与原始数组相同的元素。因此，如果你修改了拷贝数组内部的某个对象，其实你正在直接修改当前的 state。举个例子，像下面的代码就会带来问题。

```jsx
const nextList = [...list];

nextList[0].seen = true; // 问题：直接修改了 list[0] 的值

setList(nextList);
```

虽然 `nextList` 和 `list` 是两个不同的数组，**`nextList[0]` 和 `list[0]` 却指向了同一个对象**。因此，通过改变 `nextList[0].seen`，`list[0].seen` 的值也被改变了。这是一种 state 的 mutation 操作，你应该避免这么做！你可以用类似于 [更新嵌套的 JavaScript 对象](https://zh-hans.react.dev/docs/updating-objects-in-state#updating-a-nested-object) 的方式解决这个问题——拷贝想要修改的特定元素，而不是直接修改它。下面是具体的操作。

### 更新数组内部的对象 

对象并不是_真的_位于数组“内部”。可能他们在代码中看起来像是在数组“内部”，但其实数组中的每个对象都是这个数组“指向”的一个存储于其它位置的值。这就是当你在处理类似 `list[0]` 这样的嵌套字段时需要格外小心的原因。其他人的艺术品清单可能指向了数组的同一个元素！

**当你更新一个嵌套的 state 时，你需要从想要更新的地方创建拷贝值，一直这样，直到顶层。** 让我们看一下这该怎么做。

在下面的例子中，两个不同的艺术品清单有着相同的初始 state。他们本应该互不影响，但是因为一次 mutation，他们的 state 被意外地共享了，勾选一个清单中的事项会影响另外一个清单：

```jsx
import { useState } from 'react';

let nextId = 3;
const initialList = [
	{ id: 0, title: 'Big Bellies', seen: false },
	{ id: 1, title: 'Lunar Landscape', seen: false },
	{ id: 2, title: 'Terracotta Army', seen: true },
];

export default function BucketList() {
	const [myList, setMyList] = useState(initialList);
	const [yourList, setYourList] = useState(initialList);

	function handleToggleMyList(artworkId, nextSeen) {
		const myNextList = [...myList];
		const artwork = myNextList.find(a => a.id === artworkId);
		artwork.seen = nextSeen;
		setMyList(myNextList);
	}

	function handleToggleYourList(artworkId, nextSeen) {
		const yourNextList = [...yourList];
		const artwork = yourNextList.find(a => a.id === artworkId);
		artwork.seen = nextSeen;
		setYourList(yourNextList);
	}

	return (
		<>
			<h1>艺术愿望清单</h1>
			<h2>我想看的艺术清单：</h2>
			<ItemList artworks={myList} onToggle={handleToggleMyList} />
			<h2>你想看的艺术清单：</h2>
			<ItemList artworks={yourList} onToggle={handleToggleYourList} />
		</>
	);
}

function ItemList({ artworks, onToggle }) {
	return (
		<ul>
			{artworks.map(artwork => (
				<li key={artwork.id}>
					<label>
						<input type='checkbox' checked={artwork.seen} onChange={e => onToggle(artwork.id, e.target.checked)} />
						{artwork.title}
					</label>
				</li>
			))}
		</ul>
	);
}

```

问题出在下面这段代码中:

```jsx
const myNextList = [...myList];

const artwork = myNextList.find(a => a.id === artworkId);

artwork.seen = nextSeen; // 问题：直接修改了已有的元素

setMyList(myNextList);
```

虽然 `myNextList` 这个数组是新的，但是其*内部的元素本身*与原数组 `myList` 是相同的。因此，修改 `artwork.seen`，其实是在修改*原始的* artwork 对象。而这个 artwork 对象也被 `yourList` 使用，这样就带来了 bug。这样的 bug 可能难以想到，但好在如果你避免直接修改 state，它们就会消失。

**你可以使用 `map` 在没有 mutation 的前提下将一个旧的元素替换成更新的版本。**

```jsx
setMyList(myList.map(artwork => {
  if (artwork.id === artworkId) {
    // 创建包含变更的*新*对象
    return { ...artwork, seen: nextSeen };
  } else {
    // 没有变更
    return artwork;
  }
}));
```

此处的 `...` 是一个对象展开语法，被用来[创建一个对象的拷贝](https://zh-hans.react.dev/learn/updating-objects-in-state#copying-objects-with-the-spread-syntax).

通过这种方式，没有任何现有的 state 中的元素会被改变，bug 也就被修复了。

```jsx
import { useState } from 'react';

let nextId = 3;
const initialList = [
	{ id: 0, title: 'Big Bellies', seen: false },
	{ id: 1, title: 'Lunar Landscape', seen: false },
	{ id: 2, title: 'Terracotta Army', seen: true },
];

export default function BucketList() {
	const [myList, setMyList] = useState(initialList);
	const [yourList, setYourList] = useState(initialList);

	function handleToggleMyList(artworkId, nextSeen) {
		setMyList(
			myList.map(artwork => {
				if (artwork.id === artworkId) {
					// 创建包含变更的*新*对象
					return { ...artwork, seen: nextSeen };
				} else {
					// 没有变更
					return artwork;
				}
			})
		);
	}

	function handleToggleYourList(artworkId, nextSeen) {
		setYourList(
			yourList.map(artwork => {
				if (artwork.id === artworkId) {
					// 创建包含变更的*新*对象
					return { ...artwork, seen: nextSeen };
				} else {
					// 没有变更
					return artwork;
				}
			})
		);
	}

	return (
		<>
			<h1>艺术愿望清单</h1>
			<h2>我想看的艺术清单：</h2>
			<ItemList artworks={myList} onToggle={handleToggleMyList} />
			<h2>你想看的艺术清单：</h2>
			<ItemList artworks={yourList} onToggle={handleToggleYourList} />
		</>
	);
}

function ItemList({ artworks, onToggle }) {
	return (
		<ul>
			{artworks.map(artwork => (
				<li key={artwork.id}>
					<label>
						<input type='checkbox' checked={artwork.seen} onChange={e => onToggle(artwork.id, e.target.checked)} />
						{artwork.title}
					</label>
				</li>
			))}
		</ul>
	);
}

```

通常来讲，**你应该只直接修改你刚刚创建的对象**。如果你正在插入一个*新*的 artwork，你可以修改它，但是如果你想要改变的是 state 中已经存在的东西，你就需要先拷贝一份了。

#### 使用 Immer 编写简洁的更新逻辑 

在没有 mutation 的前提下更新嵌套数组可能会变得有点重复。[就像对对象一样](https://zh-hans.react.dev/learn/updating-objects-in-state#write-concise-update-logic-with-immer):

- 通常情况下，你应该不需要更新处于非常深层级的 state 。如果你有此类需求，你或许需要[调整一下数据的结构](https://zh-hans.react.dev/learn/choosing-the-state-structure#avoid-deeply-nested-state)，让数据变得扁平一些。
- 如果你不想改变 state 的数据结构，你也许会更喜欢使用 [Immer](https://github.com/immerjs/use-immer) ，它让你可以继续使用方便的，但会直接修改原值的语法，并负责为你生成拷贝值。

下面是我们用 Immer 来重写的艺术愿望清单的例子：

```jsx
import { useImmer } from 'use-immer';

let nextId = 3;
const initialList = [
	{ id: 0, title: 'Big Bellies', seen: false },
	{ id: 1, title: 'Lunar Landscape', seen: false },
	{ id: 2, title: 'Terracotta Army', seen: true },
];

export default function BucketList() {
	const [myList, updateMyList] = useImmer(initialList);
	const [yourList, updateYourList] = useImmer(initialList);

	function handleToggleMyList(id, nextSeen) {
		updateMyList(draft => {
			const artwork = draft.find(a => a.id === id);
			artwork.seen = nextSeen;
		});
	}

	function handleToggleYourList(artworkId, nextSeen) {
		updateYourList(draft => {
			const artwork = draft.find(a => a.id === artworkId);
			artwork.seen = nextSeen;
		});
	}

	return (
		<>
			<h1>艺术愿望清单</h1>
			<h2>我想看的艺术清单：</h2>
			<ItemList artworks={myList} onToggle={handleToggleMyList} />
			<h2>你想看的艺术清单：</h2>
			<ItemList artworks={yourList} onToggle={handleToggleYourList} />
		</>
	);
}

function ItemList({ artworks, onToggle }) {
	return (
		<ul>
			{artworks.map(artwork => (
				<li key={artwork.id}>
					<label>
						<input type='checkbox' checked={artwork.seen} onChange={e => onToggle(artwork.id, e.target.checked)} />
						{artwork.title}
					</label>
				</li>
			))}
		</ul>
	);
}

```

请注意当使用 Immer 时，**类似 `artwork.seen = nextSeen` 这种会产生 mutation 的语法不会再有任何问题了：**

```jsx
updateMyTodos(draft => {
  const artwork = draft.find(a => a.id === artworkId);
  artwork.seen = nextSeen;
});
```

这是因为你并不是在直接修改_原始的_ state，而是在修改 Immer 提供的一个特殊的 `draft` 对象。同理，你也可以为 `draft` 的内容使用 `push()` 和 `pop()` 这些会直接修改原值的方法。

在幕后，Immer 总是会根据你对 `draft` 的修改来从头开始构建下一个 state。这使得你的事件处理程序非常的简洁，同时也不会直接修改 state。

# ref的研究（useRef）

## 使用 ref 引用值

当你希望组件“记住”某些信息，但又不想让这些信息 [触发新的渲染](https://zh-hans.react.dev/learn/render-and-commit) 时，你可以使用 *ref* 。

### 给你的组件添加 ref 

你可以通过从 React 导入 `useRef` Hook 来为你的组件添加一个 ref：

```jsx
import { useRef } from 'react';
```

在你的组件内，调用 `useRef` Hook 并传入你想要引用的初始值作为唯一参数。例如，这里的 ref 引用的值是“0”：

```jsx
const ref = useRef(0);
```

`useRef` 返回一个这样的对象:

```jsx
{ 
  current: 0 // 你向 useRef 传入的值
}
```

你可以用 `ref.current` 属性访问该 ref 的当前值。这个值是有意被设置为可变的，意味着你既可以<strong style="color:red">读取</strong>它也可以<strong style="color:red">写入</strong>它。就像一个 React 追踪不到的、用来存储组件信息的秘密“口袋”。（这就是让它成为 React 单向数据流的“应急方案”的原因 —— 详见下文！）

这里，每次点击按钮时会使 `ref.current` 递增：

```jsx
import { useRef } from 'react';

export default function Counter() {
	const ref = useRef(0);

	function handleClick() {
		ref.current = ref.current + 1;
		console.log('你点击了 ' + ref.current + ' 次！');
	}

	return <button onClick={handleClick}>点击我！</button>;
}

```

这里的 ref 指向一个数字，但是，像 [state](https://zh-hans.react.dev/learn/state-a-components-memory) 一样，你可以让它指向任何东西：字符串、对象，甚至是函数。与 state 不同的是，ref 是一个普通的 JavaScript 对象，具有可以被读取和修改的 `current` 属性。

请注意，**组件不会在每次递增时重新渲染。** 与 state 一样，React 会在每次重新渲染之间保留 ref。但是，设置 state 会重新渲染组件，更改 ref 不会！

### 示例：制作秒表 

你可以在单个组件中把 ref 和 state 结合起来使用。例如，让我们制作一个秒表，用户可以通过按按钮来使其启动或停止。为了显示从用户按下“开始”以来经过的时间长度，你需要追踪按下“开始”按钮的时间和当前时间。**此信息用于渲染，所以你会把它保存在 state 中：**

```jsx
const [startTime, setStartTime] = useState(null);
const [now, setNow] = useState(null);
```

当用户按下“开始”时，你将用 [`setInterval`](https://developer.mozilla.org/docs/Web/API/setInterval) 每 10 毫秒更新一次时间：

```jsx
import { useState } from 'react';

export default function Stopwatch() {
	const [startTime, setStartTime] = useState(null);
	const [now, setNow] = useState(null);

	function handleStart() {
		// 开始计时。
		setStartTime(Date.now());
		setNow(Date.now());

		setInterval(() => {
			// 每 10ms 更新一次当前时间。
			setNow(Date.now());
		}, 10);
	}

	let secondsPassed = 0;
	if (startTime != null && now != null) {
		secondsPassed = (now - startTime) / 1000;
	}

	return (
		<>
			<h1>时间过去了： {secondsPassed.toFixed(3)}</h1>
			<button onClick={handleStart}>开始</button>
		</>
	);
}

```

当按下“停止”按钮时，你需要取消现有的 interval，以便让它停止更新 `now` state 变量。你可以通过调用 [`clearInterval`](https://developer.mozilla.org/en-US/docs/Web/API/clearInterval) 来完成此操作。但你需要为其提供 interval ID，此 ID 是之前用户按下 Start、调用 `setInterval` 时返回的。你需要将 interval ID 保留在某处。 **由于 interval ID 不用于渲染，你可以将其保存在 ref 中：**

```jsx
import { useRef, useState } from 'react';

export default function Stopwatch() {
	const [startTime, setStartTime] = useState(null);
	const [now, setNow] = useState(null);
	const intervalRef = useRef(null);

	function handleStart() {
		setStartTime(Date.now());
		setNow(Date.now());

		clearInterval(intervalRef.current);
		intervalRef.current = setInterval(() => {
			setNow(Date.now());
		}, 10);
	}

	function handleStop() {
		clearInterval(intervalRef.current);
	}

	let secondsPassed = 0;
	if (startTime != null && now != null) {
		secondsPassed = (now - startTime) / 1000;
	}

	return (
		<>
			<h1>时间过去了： {secondsPassed.toFixed(3)}</h1>
			<button onClick={handleStart}>开始</button>
			<button onClick={handleStop}>停止</button>
		</>
	);
}

```

当一条信息用于渲染时，将它保存在 state 中。当一条信息仅被事件处理器需要，并且更改它不需要重新渲染时，使用 ref 可能会更高效。

### ref 和 state 的不同之处 

也许你觉得 ref 似乎没有 state 那样“严格” —— 例如，你可以改变它们而非总是必须使用 state 设置函数。但在大多数情况下，我们建议你使用 state。ref 是一个“应急方案”，你并不会经常用到它。 以下是 state 和 ref 的对比：

| ref                                                     | state                                                        |
| ------------------------------------------------------- | ------------------------------------------------------------ |
| `useRef(initialValue)`返回 `{ current: initialValue }`  | `useState(initialValue)` 返回 state 变量的当前值和一个 state 设置函数 ( `[value, setValue]`) |
| 更改时不会触发重新渲染                                  | 更改时触发重新渲染。                                         |
| 可变 —— 你可以在渲染过程之外修改和更新 `current` 的值。 | “不可变” —— 你必须使用 state 设置函数来修改 state 变量，从而排队重新渲染。 |
| 你不应在渲染期间读取（或写入） `current` 值。           | 你可以随时读取 state。但是，每次渲染都有自己不变的 state [快照](https://zh-hans.react.dev/learn/state-as-a-snapshot)。 |

这是一个使用 state 实现的计数器按钮：

```jsx
import { useState } from 'react';

export default function Counter() {
	const [count, setCount] = useState(0);

	function handleClick() {
		setCount(count + 1);
	}

	return <button onClick={handleClick}>你点击了 {count} 次</button>;
}

```

因为 `count` 的值将会被显示，所以为其使用 state 是合理的。当使用 setCount() 设置计数器的值时，React 会重新渲染组件，并且屏幕会更新以展示新的计数。

如果你试图用 ref 来实现它，React 永远不会重新渲染组件，所以你永远不会看到计数变化！看看点击这个按钮如何 **不更新它的文本**：

```jsx
import { useRef } from 'react';

export default function Counter() {
	const countRef = useRef(0);

	function handleClick() {
		// 这样并未重新渲染组件！
		countRef.current = countRef.current + 1;
		console.log('countRef.current: ', countRef.current);
	}

	return <button onClick={handleClick}>你点击了 {countRef.current} 次</button>;
}

```

这就是为什么在渲染期间读取 `ref.current` 会导致代码不可靠的原因。如果需要，请改用 state。

### 何时使用 ref 

通常，当你的组件需要“跳出” React 并与外部 API 通信时，你会用到 ref —— 通常是不会影响组件外观的浏览器 API。以下是这些罕见情况中的几个：

- 存储计时器ID [timeout ID ](https://developer.mozilla.org/docs/Web/API/setTimeout)
- 存储和操作 [DOM 元素](https://developer.mozilla.org/docs/Web/API/Element)
- 存储不需要被用来计算 JSX 的其他对象。

如果你的组件需要存储一些值，但不影响渲染逻辑，请选择 ref。

### ref 的最佳实践 

遵循这些原则将使你的组件更具可预测性：

- **将 ref 视为应急方案。** 当你使用外部系统或浏览器 API 时，ref 很有用。如果你很大一部分应用程序逻辑和数据流都依赖于 ref，你可能需要重新考虑你的方法。
- **不要在渲染过程中读取或写入 `ref.current`。** 如果渲染过程中需要某些信息，请使用 [state](https://zh-hans.react.dev/learn/state-a-components-memory) 代替。由于 React 不知道 `ref.current` 何时发生变化，即使在渲染时读取它也会使组件的行为难以预测。（唯一的例外是像 `if (!ref.current) ref.current = new Thing()` 这样的代码，它只在第一次渲染期间设置一次 ref。）

React state 的限制不适用于 ref。例如，state 就像 [每次渲染的快照](https://zh-hans.react.dev/learn/state-as-a-snapshot)，并且 [不会同步更新](https://zh-hans.react.dev/learn/queueing-a-series-of-state-updates)。但是当你改变 ref 的 current 值时，它会立即改变：

```JSX
ref.current = 5;
console.log(ref.current); // 5
```

这是因为 **ref 本身是一个普通的 JavaScript 对象，** 所以它的行为就像对象那样。

当你使用 ref 时，也无需担心 [避免变更](https://zh-hans.react.dev/learn/updating-objects-in-state)。只要你改变的对象不用于渲染，React 就不会关心你对 ref 或其内容做了什么。

### ref 和 DOM 

你可以将 ref 指向任何值。但是，ref 最常见的用法是访问 DOM 元素。例如，如果你想以编程方式聚焦一个输入框，这种用法就会派上用场。当你将 ref 传递给 JSX 中的 `ref` 属性时，比如 `<div ref={myRef}>`，React 会将相应的 DOM 元素放入 `myRef.current` 中。你可以在 [使用 ref 操作 DOM](https://zh-hans.react.dev/learn/manipulating-the-dom-with-refs) 中阅读更多相关信息。

## 使用 ref 操作 DOM

由于 React 会自动处理更新 [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model/Introduction) 以匹配你的渲染输出，因此你在组件中通常不需要操作 DOM。但是，有时你可能需要访问由 React 管理的 DOM 元素 —— 例如，让一个节点获得焦点、滚动到它或测量它的尺寸和位置。在 React 中没有内置的方法来做这些事情，所以你需要一个指向 DOM 节点的 *ref* 来实现。

### 获取指向节点的 ref 

要访问由 React 管理的 DOM 节点，首先，引入 `useRef` Hook：

```JSX
import { useRef } from 'react';
```

然后，在你的组件中使用它声明一个 ref：

```JSX
const myRef = useRef(null);
```

最后，将其作为 `ref` 属性传给 DOM 节点：

```JSX
<div ref={myRef}>
```

`useRef` Hook 返回一个对象，该对象有一个名为 `current` 的属性。最初，`myRef.current` 是 `null`。当 React 为这个 `<div>` 创建一个 DOM 节点时，React 会把对该节点的引用放入 `myRef.current`。然后，你可以从 [事件处理器](https://zh-hans.react.dev/learn/responding-to-events) 访问此 DOM 节点，并使用在其上定义的内置[浏览器 API](https://developer.mozilla.org/docs/Web/API/Element)。

```JSX
// 你可以使用任意浏览器 API，例如：
myRef.current.scrollIntoView();
```

#### 示例: 使文本输入框获得焦点 

在本例中，单击按钮将使输入框获得焦点：

```JSX
import { useRef } from 'react';

export default function Form() {
	const inputRef = useRef(null);
  
	function handleClick() {
    console.log('inputRef: ', inputRef);
		inputRef.current.focus();
	}

	return (
		<>
			<input ref={inputRef} />
			<button onClick={handleClick}>聚焦输入框</button>
		</>
	);
}

```

要实现这一点：

1. 使用 `useRef` Hook 声明 `inputRef`。
2. 像 `<input ref={inputRef}>` 这样传递它。这告诉 React **将这个 `<input>` 的 DOM 节点放入 `inputRef.current`。**
3. 在 `handleClick` 函数中，从 `inputRef.current` 读取 input DOM 节点并使用 `inputRef.current.focus()` 调用它的 [`focus()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus)。
4. 用 `onClick` 将 `handleClick` 事件处理器传递给 `<button>`。

虽然 DOM 操作是 ref 最常见的用例，但 `useRef` Hook 可用于存储 React 之外的其他内容，例如计时器 ID 。与 state 类似，ref 能在渲染之间保留。你甚至可以将 ref 视为设置它们时不会触发重新渲染的 state 变量！你可以在[使用 Ref 引用值](https://zh-hans.react.dev/learn/referencing-values-with-refs)中了解有关 ref 的更多信息。

#### 示例: 滚动至一个元素 

一个组件中可以有多个 ref。在这个例子中，有一个由三张图片和三个按钮组成的轮播，点击按钮会调用浏览器的 [`scrollIntoView()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView) 方法，在相应的 DOM 节点上将它们居中显示在视口中：

```jsx
import { useRef } from 'react';

export default function CatFriends() {
	const firstCatRef = useRef(null);
	const secondCatRef = useRef(null);
	const thirdCatRef = useRef(null);

	function handleScrollToFirstCat() {
		firstCatRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest',
			inline: 'center',
		});
	}

	function handleScrollToSecondCat() {
		secondCatRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest',
			inline: 'center',
		});
	}

	function handleScrollToThirdCat() {
		thirdCatRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest',
			inline: 'center',
		});
	}

	return (
		<>
			<nav>
				<button onClick={handleScrollToFirstCat}>Tom</button>
				<button onClick={handleScrollToSecondCat}>Maru</button>
				<button onClick={handleScrollToThirdCat}>Jellylorum</button>
			</nav>
			<div>
				<ul>
					<li>
						<img src='https://placekitten.com/g/200/200' alt='Tom' ref={firstCatRef} />
					</li>
					<li>
						<img src='https://placekitten.com/g/300/200' alt='Maru' ref={secondCatRef} />
					</li>
					<li>
						<img src='https://placekitten.com/g/250/200' alt='Jellylorum' ref={thirdCatRef} />
					</li>
				</ul>
			</div>
		</>
	);
}

```

### 访问另一个组件的 DOM 节点 

当你将 ref 放在像 `<input />` 这样输出浏览器元素的内置组件上时，React 会将该 ref 的 `current` 属性设置为相应的 DOM 节点（例如浏览器中实际的 `<input />` ）。

但是，如果你尝试将 ref 放在 **你自己的** 组件上，例如 `<MyInput />`，默认情况下你会得到 `null`。这个示例演示了这种情况。请注意单击按钮 **并不会** 聚焦输入框：

```jsx
import { useRef } from 'react';

function MyInput(props) {
	return <input {...props} />;
}

export default function MyForm() {
	const inputRef = useRef(null);

	function handleClick() {
		inputRef.current.focus();
	}

	return (
		<>
			<MyInput ref={inputRef} />
			<button onClick={handleClick}>聚焦输入框</button>
		</>
	);
}

```

为了帮助您注意到这个问题，React 还会向控制台打印一条错误消息：

<div style="color:red">Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?</div>

发生这种情况是因为默认情况下，React 不允许组件访问其他组件的 DOM 节点。甚至自己的子组件也不行！这是故意的。Refs 是一个应急方案，应该谨慎使用。手动操作 *另一个* 组件的 DOM 节点会使你的代码更加脆弱。

相反，*想要* 暴露其 DOM 节点的组件必须**选择**该行为。一个组件可以指定将它的 ref “转发”给一个子组件。下面是 `MyInput` 如何使用 `forwardRef` API：

```jsx
const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});
```

它是这样工作的:

1. `<MyInput ref={inputRef} />` 告诉 React 将对应的 DOM 节点放入 `inputRef.current` 中。但是，这取决于 `MyInput` 组件是否允许这种行为， 默认情况下是不允许的。
2. `MyInput` 组件是使用 `forwardRef` 声明的。 **这让从上面接收的 `inputRef` 作为第二个参数 `ref` 传入组件**，第一个参数是 `props` 。
3. `MyInput` 组件将自己接收到的 `ref` 传递给它内部的 `<input>`。

现在，单击按钮聚焦输入框起作用了：

```jsx
import { forwardRef, useRef } from 'react';

const MyInput = forwardRef(function (props, ref) {
	return <input {...props} ref={ref} />;
});

export default function Form() {
	const inputRef = useRef(null);
  
	function handleClick() {
    console.log('inputRef: ', inputRef);
		inputRef.current.focus();
	}

	return (
		<>
			<MyInput ref={inputRef} />
			<button onClick={handleClick}>聚焦输入框</button>
		</>
	);
}

```

在设计系统中，将低级组件（如按钮、输入框等）的 ref 转发到它们的 DOM 节点是一种常见模式。另一方面，像表单、列表或页面段落这样的高级组件通常不会暴露它们的 DOM 节点，以避免对 DOM 结构的意外依赖。

### React 何时添加 refs 

在 React 中，每次更新都分为 [两个阶段](https://zh-hans.react.dev/learn/render-and-commit#step-3-react-commits-changes-to-the-dom)：

- 在 **渲染** 阶段， React 调用你的组件来确定屏幕上应该显示什么。
- 在 **提交** 阶段， React 把变更应用于 DOM。

通常，你 [不希望](https://zh-hans.react.dev/learn/referencing-values-with-refs#best-practices-for-refs) 在渲染期间访问 refs。这也适用于保存 DOM 节点的 refs。在第一次渲染期间，DOM 节点尚未创建，因此 `ref.current` 将为 `null`。在渲染更新的过程中，DOM 节点还没有更新。所以读取它们还为时过早。

React 在提交阶段设置 `ref.current`。在更新 DOM 之前，React 将受影响的 `ref.current` 值设置为 `null`。更新 DOM 后，React 立即将它们设置到相应的 DOM 节点。

**通常，你将从事件处理器访问 refs。** 如果你想使用 ref 执行某些操作，但没有特定的事件可以执行此操作，你可能需要一个 effect。我们将在下一页讨论 effect。

### 使用 refs 操作 DOM 的最佳实践 

Refs 是一个应急方案。你应该只在你必须“跳出 React”时使用它们。这方面的常见示例包括管理焦点、滚动位置或调用 React 未暴露的浏览器 API。

如果你坚持聚焦和滚动等非破坏性操作，应该不会遇到任何问题。但是，如果你尝试手动**修改** DOM，则可能会与 React 所做的更改发生冲突。

为了说明这个问题，这个例子包括一条欢迎消息和两个按钮。第一个按钮使用 [条件渲染](https://zh-hans.react.dev/learn/conditional-rendering) 和 [state](https://zh-hans.react.dev/learn/state-a-components-memory) 切换它的显示和隐藏，就像你通常在 React 中所做的那样。第二个按钮使用 [`remove()` DOM API](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/remove) 将其从 React 控制之外的 DOM 中强行移除.

尝试按几次“通过 setState 切换”。该消息会消失并再次出现。然后按 “从 DOM 中删除”。这将强行删除它。最后，按 “通过 setState 切换”：

```jsx
import { useRef, useState } from 'react';

export default function Counter() {
	const [show, setShow] = useState(true);
	const ref = useRef(null);

	return (
		<div>
			<button onClick={() => setShow(!show)}>通过 setState 切换</button>
			<button onClick={() => ref.current.remove()}>从 DOM 中删除</button>
			{show && <p ref={ref}>Hello world</p>}
		</div>
	);
}

```

在你手动删除 DOM 元素后，尝试使用 `setState` 再次显示它会导致崩溃。这是因为你更改了 DOM，而 React 不知道如何继续正确管理它。

**避免更改由 React 管理的 DOM 节点。** 对 React 管理的元素进行修改、添加子元素、从中删除子元素会导致不一致的视觉结果，或与上述类似的崩溃。

但是，这并不意味着你完全不能这样做。它需要谨慎。 **你可以安全地修改 React \*没有理由\* 更新的部分 DOM。** 例如，如果某些 `<div>` 在 JSX 中始终为空，React 将没有理由去变动其子列表。 因此，在那里手动增删元素是安全的。

# Effect的研究（useEffect）

## 与Effect同步

某些组件需要与外部系统同步。例如，您可能希望根据 React 状态控制非 React 组件，设置服务器连接，或者在组件出现在屏幕上时发送分析日志。*effect*允许你在渲染后运行一些代码，以便你可以将你的组件与 React 之外的一些系统同步。

### 什么是Effect，它们与事件有何不同？

在进入Effects之前，你需要熟悉 React 组件中的两种逻辑：

- **呈现代码**（[在描述 UI](https://zh-hans.react.dev/learn/describing-the-ui) 中介绍）位于组件的顶层。这是你获取道具和状态的地方，转换它们，然后返回你想在屏幕上看到的JSX。[呈现代码必须是纯的。](https://zh-hans.react.dev/learn/keeping-components-pure)就像数学公式一样，它应该只*计算*结果，而不做任何其他事情。
- **事件处理程序**（[在添加交互性](https://zh-hans.react.dev/learn/adding-interactivity)中介绍）是组件中的嵌套函数，用于*执行*操作，而不仅仅是计算它们。事件处理程序可能会更新输入字段、提交 HTTP POST 请求以购买产品或将用户导航到另一个屏幕。事件处理程序包含由特定用户操作（例如，按钮单击或键入）引起的[“副作用”](https://en.wikipedia.org/wiki/Side_effect_(computer_science))（它们更改程序的状态）。

有时这还不够。考虑一个组件`ChatRoom`，只要它在屏幕上可见，就必须连接到聊天服务器。连接到服务器不是纯粹的计算（这是一种副作用），因此在渲染期间不会发生。但是，没有像单击这样的单个特定事件会导致`ChatRoom`显示。

**Effect 允许您指定由呈现本身而不是特定事件引起的副作用。**在聊天中发送消息是一个*事件*，因为它是由用户单击特定按钮直接引起的。但是，设置服务器连接是一种 Effect ，因为无论哪种交互导致组件出现，它都应该发生。效果在屏幕更新后的[提交](https://zh-hans.react.dev/learn/render-and-commit)结束时运行。这是将 React 组件与某些外部系统（如网络或第三方库）同步的好时机。

> **注意**
>
> 在这里和后面的这篇文章中，大写的“Effect”指的是上面特定于 React 的定义，即由渲染引起的副作用。为了参考更广泛的编程概念，我们将说“副作用”。

### 您可能不需要Effect

**不要急于将Effect添加到组件中。**请记住，Effect 通常用于“跳出”您的 React 代码并与某些*外部*系统同步。这包括浏览器 API、第三方小部件、网络等。如果Effect仅根据其他状态调整某些状态，则[可能不需要Effect。](https://zh-hans.react.dev/learn/you-might-not-need-an-effect)

### 如何编写Effect

若要编写Effect，请按照以下三个步骤操作：

1. **声明Effect。**默认情况下，Effect将在每次渲染后运行。
2. **指定Effect依赖项。**大多数Effect只应在需要时重新运行，而不是在每次渲染后*重新运行。*例如，淡入动画应仅在组件出现时触发。仅当组件出现和消失或聊天室更改时，才应连接和断开与聊天室的连接。您将学习如何通过指定依赖项来控制这一点*。*
3. **根据需要添加清理。**某些Effect需要指定如何停止、撤消或清理它们正在执行的操作。例如，“连接”需要“断开连接”，“订阅”需要“取消订阅”，“获取”需要“取消”或“忽略”。您将学习如何通过返回*清理函数*来执行此操作。

让我们详细看一下这些步骤中的每一个。

#### 步骤 1：声明Effect

要在组件中声明一个 Effect，请从 React 导入 [`useEffect` Hook](https://zh-hans.react.dev/reference/react/useEffect)：

```jsx
import { useEffect } from 'react';
```

然后，在组件的顶层调用它，并在 Effect 中放置一些代码：

```jsx
function MyComponent() {

  useEffect(() => {
    // Code here will run after *every* render
  });

  return <div />;
}
```

每次组件渲染时，React 都会更新屏幕*，然后在*`useEffect`里面运行代码。换句话说，**`useEffect` 会“延迟”一段代码的运行，直到该渲染反映在屏幕上。**

让我们看看如何使用 Effect 与外部系统同步。考虑一个 React 组件`<VideoPlayer>`。通过向它传递`isPlaying`来控制它是在播放还是暂停：

```jsx
<VideoPlayer isPlaying={isPlaying} />;
```

您的自定义组件`isPlaying`会基于浏览器内置的 [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) 标签来渲染：

```jsx
function VideoPlayer({ src, isPlaying }) {
  // TODO: do something with isPlaying
  return <video src={src} />;
}
```

但是，浏览器`<video>`标签没有`isPlaying`prop。控制它的唯一方法是在 DOM 元素上手动调用 [`play()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play)和 [`pause()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/pause) 方法。**您需要将 `isPlaying` prop 的值与 `play()` 和 `pause（）` 的调用同步，该值告诉视频当前是否应该正在播放。**   

我们需要首先获取 DOM 节点`<video>`的[ref](https://zh-hans.react.dev/learn/manipulating-the-dom-with-refs)。

您可能会在渲染期间尝试调用`play()`或者`pause()`，但这是不正确的：

```jsx
import { useRef, useState } from 'react';

function VideoPlayer({ src, isPlaying }) {
	const ref = useRef(null);

	if (isPlaying) {
		ref.current.play(); // Calling these while rendering isn't allowed.
	} else {
		ref.current.pause(); // Also, this crashes.
	}

	return <video ref={ref} src={src} loop playsInline />;
}

export default function App() {
	const [isPlaying, setIsPlaying] = useState(false);
	return (
		<>
			<button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? '暂停' : '播放'}</button>
			<VideoPlayer isPlaying={isPlaying} src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' />
		</>
	);
}

```

> **运行的报错**
>
> ```
> App.js: Cannot read properties of null (reading 'pause') (9:16)
> 
>    6 |   if (isPlaying) {
>    7 |     ref.current.play();  // Calling these while rendering isn't allowed.
>    8 |   } else {
> >  9 |     ref.current.pause(); // Also, this crashes.
>                        ^
>   10 |   }
>   11 | 
>   12 |   return <video ref={ref} src={src} loop playsInline />;
> ```

此代码不正确的原因是它尝试在渲染期间对 DOM 节点执行某些操作。在 React 中，[渲染应该是](https://zh-hans.react.dev/learn/keeping-components-pure) JSX 的纯粹计算，不应该包含修改 DOM 等副作用。

而且，当`VideoPlayer`第一次调用时，它的 DOM 还不存在！目前还没有一个 DOM 节点可以调用`play()`或者`pause()`，因为 React 不知道要创建什么 DOM，直到你返回 JSX。

这里的解决方案是**使用 `useEffect` 包装副作用，将其移出渲染计算：**

```jsx
import { useEffect, useRef } from 'react';

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  });

  return <video ref={ref} src={src} loop playsInline />;
}
```

通过将 DOM 更新包装在 Effect 中，您可以让 React 首先更新屏幕。然后你的 Effect 运行。

当`VideoPlayer`组件渲染时（第一次或重新渲染），会发生一些事情。首先，React 将更新屏幕，确保`<video>`标签在 DOM 中使用正确的props。然后 React 将运行你的 Effect。最后，您的 Effect 将调用`play()`|或`pause()`取决于`isPlaying` 的值。

多次按播放/暂停键，然后查看视频播放器如何与该`isPlaying`值保持同步：

```jsx
import { useEffect, useRef, useState } from 'react';

function VideoPlayer({ src, isPlaying }) {
	const ref = useRef(null);

	useEffect(() => {
		if (isPlaying) {
			ref.current.play();
		} else {
			ref.current.pause();
		}
	});

	return <video ref={ref} src={src} loop playsInline controls />;
}

export default function App() {
	const [isPlaying, setIsPlaying] = useState(false);
	return (
		<>
			<button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? '暂停' : '播放'}</button>
			<VideoPlayer isPlaying={isPlaying} src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' />
		</>
	);
}

```

在此示例中，您同步到 React 状态的“外部系统”是浏览器媒体 API。你可以使用类似的方法将遗留的非 React 代码（如 jQuery 插件）包装到声明式 React 组件中。

请注意，在实践中控制视频播放器要复杂得多。调用`play()`可能会失败，用户可能会使用内置浏览器控件播放或暂停等等。这个例子非常简化和不完整。

> **陷阱**
>
> 默认情况下，Effect在*每次*渲染后运行。这就是为什么这样的代码会产生**无限循环的原因：**
>
> ```
> const [count, setCount] = useState(0);
> 
> useEffect(() => {
> 
>   setCount(count + 1);
> 
> });
> ```
>
> Effect 作为渲染*的结果*运行。设置状态*会触发*渲染。在 Effect 中立即设置状态就像将电源插座插入自身一样。Effect 运行，它设置状态，这会导致重新渲染，这会导致 Effect 运行，它再次设置状态，这会导致另一个重新渲染，依此类推。
>
> Effect 通常应将组件与*外部*系统同步。如果没有外部系统，而您只想根据其他状态调整某些状态，则[可能不需要Effect 。](https://zh-hans.react.dev/learn/you-might-not-need-an-effect)

#### 步骤 2：指定Effect依赖项

默认情况下，Effect 在*每次*渲染后运行。通常，**这不是您想要的：**

- 有时，它很慢。与外部系统同步并不总是即时的，因此除非必要，否则您可能希望跳过同步。例如，您不希望每次击键都重新连接到聊天服务器。
- 有时，这是错误的。例如，您不希望在每次击键时触发组件淡入动画。动画只应在组件首次出现时播放一次。

为了演示此问题，下面是前面的示例，其中包含一些调用`console.log`和更新父组件状态的文本输入。请注意键入如何导致 Effect  重新运行：

```jsx
import { useEffect, useRef, useState } from 'react';

function VideoPlayer({ src, isPlaying }) {
	const ref = useRef(null);

	useEffect(() => {
		if (isPlaying) {
			console.log('Calling video.play()');
			ref.current.play();
		} else {
			console.log('Calling video.pause()');
			ref.current.pause();
		}
	});

	return <video ref={ref} src={src} loop playsInline />;
}

export default function App() {
	const [isPlaying, setIsPlaying] = useState(false);
	const [text, setText] = useState('');
	return (
		<>
			<input value={text} onChange={e => setText(e.target.value)} />
			<button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? '暂停' : '播放'}</button>
			<VideoPlayer isPlaying={isPlaying} src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' />
		</>
	);
}

```

你可以告诉 React **跳过不必要的重新运行 Effect**，方法是指定一个*依赖项*数组作为调用`useEffect`的第二个参数。首先在第 14 行向上面的示例添加一个空数组`[]`：

```jsx
useEffect(() => {
  // ...
}, []);
```

您应该看到一个错误，指出：`React Hook useEffect has a missing dependency: 'isPlaying'`

```jsx
import { useEffect, useRef, useState } from 'react';

function VideoPlayer({ src, isPlaying }) {
	const ref = useRef(null);

	useEffect(() => {
		if (isPlaying) {
			console.log('Calling video.play()');
			ref.current.play();
		} else {
			console.log('Calling video.pause()');
			ref.current.pause();
		}
	}, []); // This causes an error

	return <video ref={ref} src={src} loop playsInline />;
}

export default function App() {
	const [isPlaying, setIsPlaying] = useState(false);
	const [text, setText] = useState('');
	return (
		<>
			<input value={text} onChange={e => setText(e.target.value)} />
			<button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? '暂停' : '播放'}</button>
			<VideoPlayer isPlaying={isPlaying} src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' />
		</>
	);
}

```

> lint错误
>
> ```
> 14:6 - React Hook useEffect has a missing dependency: 'isPlaying'. Either include it or remove the dependency array.
> ```

问题是 Effect 中的代码*依赖于*`isPlaying` prop 来决定做什么，但这种依赖关系没有明确声明。若要解决此问题，请添加`isPlaying`到依赖项数组：

```jsx
 useEffect(() => {
    if (isPlaying) { // It's used here...
      // ...
    } else {
      // ...
    }
  }, [isPlaying]); // ...so it must be declared here!
```

现在声明了所有依赖项，因此没有错误。指定为`[isPlaying]`依赖数组告诉 React 如果`isPlaying`与上次渲染期间相同，它应该跳过重新运行您的 Effect。通过此更改，在输入中键入不会导致效果重新运行，但按播放/暂停会导致：

```jsx
import { useEffect, useRef, useState } from 'react';

function VideoPlayer({ src, isPlaying }) {
	const ref = useRef(null);

	useEffect(() => {
		if (isPlaying) {
			console.log('Calling video.play()');
			ref.current.play();
		} else {
			console.log('Calling video.pause()');
			ref.current.pause();
		}
	}, [isPlaying]);

	return <video ref={ref} src={src} loop playsInline />;
}

export default function App() {
	const [isPlaying, setIsPlaying] = useState(false);
	const [text, setText] = useState('');
	return (
		<>
			<input value={text} onChange={e => setText(e.target.value)} />
			<button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? 'Pause' : 'Play'}</button>
			<VideoPlayer isPlaying={isPlaying} src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' />
		</>
	);
}

```

依赖项数组可以包含多个依赖项。只有当你指定*的所有*依赖项都具有与上一个渲染期间完全相同的值时，React 才会跳过重新运行 Effect 。React 使用 [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) 比较来比较依赖值。有关详细信息，请参阅 [`useEffect` 参考](https://zh-hans.react.dev/reference/react/useEffect#reference)。

**请注意，不能“选择”依赖项。**如果您指定的依赖项与 React 根据 Effect 中的代码所期望的不匹配，您将收到 lint 错误。这有助于捕获代码中的许多错误。如果不希望重新运行某些代码，请[*编辑 Effect 代码本身*，使其“不需要”该依赖项。](https://zh-hans.react.dev/learn/lifecycle-of-reactive-effects#what-to-do-when-you-dont-want-to-re-synchronize)

> **陷阱**
>
> 没有依赖关系数组和*空`[]`依赖关系*数组的行为是不同的：
>
> ```
> useEffect(() => {
>   // 这在每次渲染后运行
> });
> 
> useEffect(() => {
>   // 这只在mount时运行(当组件出现时)。
> }, []);
> 
> useEffect(() => {
>   // 这运行在mount *和*如果a或b自上次渲染以来发生了变化
> }, [a, b]);
> ```
>
> 我们将在下一步中仔细研究“mount”的含义。

#### 步骤 3：根据需要添加清理

考虑一个不同的例子。您正在编写一个组件`ChatRoom`，该组件需要在聊天服务器出现时连接到聊天服务器。您将获得一个 `createConnection()` API，该 API 返回一个带有 `connect()` 和 `disconnect()` 方法的对象。如何在向用户显示组件时保持连接？

首先编写效果逻辑：

```jsx
useEffect(() => {
  const connection = createConnection();
  connection.connect();
});
```

每次重新渲染后连接到聊天会很慢，因此您添加依赖项数组：

```jsx
useEffect(() => {
  const connection = createConnection();
  connection.connect();
}, []);
```

**效果中的代码不使用任何属性或状态，因此依赖项数组为 `[]`（空）。这告诉 React 只在组件“挂载”时运行这段代码，即第一次出现在屏幕上。**

让我们尝试运行此代码：

```jsx
// App.js

import { useEffect } from 'react';
import { createConnection } from './chat.js';

export default function ChatRoom() {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
  }, []);
  return <h1>Welcome to the chat!</h1>;
}


// chat.js
export function createConnection() {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log('✅ Connecting...');
    },
    disconnect() {
      console.log('❌ Disconnected.');
    }
  };
}

```

此效果仅在组件挂载时运行，因此您可能希望`"✅ Connecting..."`在控制台中打印一次。**但是，如果您检查控制台，`“正在连接...”✅`会被打印两次。为什么会这样？**

假设该`ChatRoom`组件是具有许多不同屏幕的较大应用程序的一部分。用户在`ChatRoom`页面上开始他们的旅程。组件装载并调用 `connection.connect()`。然后假设用户导航到另一个屏幕，例如，导航到“设置”页面。`ChatRoom`组件将卸载。最后，用户单击“返回”并再次挂载 `ChatRoom`组件。这将建立第二个连接，但第一个连接从未被销毁！当用户在应用中导航时，连接会不断堆积。

如果没有大量的手动测试，像这样的错误很容易被遗漏。为了帮助您快速发现它们，在开发中，React 会在初始挂载后立即重新挂载每个组件一次。

查看`"✅ Connecting..."`日志两次有助于您注意到真正的问题：当组件卸载时，您的代码不会关闭连接。

要解决此问题，请从 Effect 返回清理*函数*：

```jsx
useEffect(() => {
  const connection = createConnection();
  connection.connect();
  return () => {
    connection.disconnect();
  };
}, []);
```

React 每次都会在 Effect 再次运行之前调用你的清理函数，最后一次在组件卸载（被删除）时调用。让我们看看实现清理功能时会发生什么：

```jsx
// App.js

import { useState, useEffect } from 'react';
import { createConnection } from './chat.js';

export default function ChatRoom() {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    return () => connection.disconnect();
  }, []);
  return <h1>Welcome to the chat!</h1>;
}


// chat.js
export function createConnection() {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log('✅ Connecting...');
    },
    disconnect() {
      console.log('❌ Disconnected.');
    }
  };
}

```

现在，您可以在开发中获得三个控制台日志：

1. `"✅ Connecting..."`
2. `"❌ Disconnected."`
3. `"✅ Connecting..."`

**这是开发中的正确行为。**通过重新挂载你的组件，React 会验证离开和返回导航不会破坏你的代码。断开连接然后再次连接正是应该发生的事情！当您很好地实现清理时，运行一次效果与运行它、清理它和再次运行它之间应该没有用户可见的区别。有一个额外的连接/断开连接调用对，因为 React 正在探测您的代码是否存在开发中的错误。这是正常的 - 不要试图让它消失！

**在生产中，您只会看到`“连接...”✅`打印一次。**重新挂载组件仅在开发中发生，以帮助您找到需要清理的效果。您可以关闭[严格模式](https://zh-hans.react.dev/reference/react/StrictMode)以选择退出开发行为，但我们建议您保持打开状态。这使您可以找到许多类似于上面的错误。

### 如何处理开发中两次的 Effect 发射？

React 有意在开发中重新挂载组件以查找错误，如上一个例子所示。**正确的问题不是“如何运行一次效果”，而是“如何修复我的 Effect，使其在重新安装后正常工作”。**

通常，答案是实现清理功能。清理功能应停止或撤消 Effect 正在执行的任何操作。经验法则是，用户不应能够区分运行一次的 Effect（如在生产中）和设置*→清理→设置*序列（如您在开发中看到的那样）。

您将编写的大多数 Effect 都适合以下常见模式之一。

#### 控制非 React 小部件

有时你需要添加未写入 React 的 UI 小部件。例如，假设您要向页面添加地图组件。它有一个`setZoomLevel()`方法，您希望使缩放级别`zoomLevel`与 React 代码中的状态变量保持同步。您的效果将如下所示：

```jsx
useEffect(() => {
  const map = mapRef.current;
  map.setZoomLevel(zoomLevel);
}, [zoomLevel]);
```

请注意，在这种情况下不需要清理。在开发中，React 会调用 Effect 两次，但这不是问题，因为用相同的`setZoomLevel`调用两次不会做任何事情。它可能稍微慢一些，但这并不重要，因为它不会在生产中不必要地重新装载。

某些 API 可能不允许连续调用它们两次。例如，内置 [`dialog`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement) 元素的 [`showModal`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal) 方法在调用两次时会引发。实现清理功能并使其关闭对话框：

```jsx
useEffect(() => {
  const dialog = dialogRef.current;
  dialog.showModal();
  return () => dialog.close();
}, []);
```

在开发中，您的 Effect 将调用 `showModal()`，然后立即调用 `close()`，然后再次调用 `showModal()`。这与调用`showModal()`一次具有相同的用户可见行为，正如您在生产中看到的那样。

#### 订阅活动

如果您的效果订阅了某些内容，清理功能应取消订阅：

```jsx
useEffect(() => {
  function handleScroll(e) {
    console.log(window.scrollX, window.scrollY);
  }
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

在开发中，您的 Effect 将调用 `addEventListener()`，然后立即调用 `removeEventListener()`，然后使用相同的处理程序再次调用 `addEventListener()`。因此，一次只有一个活动订阅。这与在生产中调用一次`addEventListener()`具有相同的用户可见行为。

#### 触发动画

如果 Effect 在其中对某些内容进行动画处理，则清理函数应将动画重置为初始值：

```jsx
useEffect(() => {
  const node = ref.current;
  node.style.opacity = 1; // Trigger the animation
  return () => {
    node.style.opacity = 0; // Reset to the initial value
  };
}, []);
```

在开发中，不透明度将设置为 `1`，然后设置为 `0`，然后再设置为 `1`。这应该与将其设置为`1`直接具有相同的用户可见行为，这是在生产中发生的情况。如果使用支持补间的第三方动画库，则清理函数应将时间轴重置为其初始状态。

#### 获取数据

如果您的 Effect 获取了某些内容，则清理函数应该[中止获取](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)或忽略其结果：

```jsx
useEffect(() => {
  let ignore = false;

  async function startFetching() {
    const json = await fetchTodos(userId);
    if (!ignore) {
      setTodos(json);
    }
  }

  startFetching();

  return () => {
    ignore = true;
  };
}, [userId]);
```

您无法“撤消”已经发生的网络请求，但清理功能应确保*不再相关的*提取不会继续影响您的应用程序。如果`userId`从 `'Alice'` 更改为 `'Bob'`，则清理可确保`'Alice'`响应被忽略，即使响应在 `'Bob'` 之后到达。

在**开发中，您将在“网络”选项卡中看到两个提取。**这没有错。使用上述方法，第一个 Effect  将立即被清理，因此其变量`ignore`将设置为 `true`。因此，即使有额外的请求，由于检查`if (!ignore)`，它不会影响状态。

**在生产中，只有一个请求。**如果开发中的第二个请求困扰您，最好的方法是使用一个解决方案来删除重复数据的请求并在组件之间缓存它们的响应：

```jsx
function TodoList() {

  const todos = useSomeDataLibrary(`/api/user/${userId}/todos`);

  // ...
```

这不仅可以改善开发体验，还可以使您的应用程序感觉更快。例如，按“后退”按钮的用户不必等待某些数据再次加载，因为它将被缓存。您可以自己构建这样的缓存，也可以使用效果中手动获取的众多替代方法之一。

#### 发送分析

请考虑以下代码，该代码在页面访问时发送分析事件：

```jsx
useEffect(() => {
  logVisit(url); // Sends a POST request
}, [url]);
```

在开发中，对于每个 URL ，`logVisit` 将被调用两次，因此您可能会尝试尝试解决此问题。**我们建议保持此代码不变。**与前面的示例一样，运行一次和运行两次之间没有*用户可见*的行为差异。从实际的角度来看，`logVisit`不应在开发中执行任何操作，因为您不希望来自开发计算机的日志扭曲生产指标。每次保存其文件时，组件都会重新挂载，因此无论如何它都会在开发中记录额外的访问。

**在生产环境中，不会有重复的访问日志。**

若要调试要发送的分析事件，可以将应用部署到过渡环境（在生产模式下运行），或暂时选择退出[严格模式](https://zh-hans.react.dev/reference/react/StrictMode)及其仅限开发的重新装载检查。您还可以从路由更改事件处理程序而不是效果发送分析。为了进行更精确的分析，[交集观察器](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)可以帮助跟踪视口中有哪些组件以及它们保持可见的时间。

#### 非效果：初始化应用程序

某些逻辑只应在应用程序启动时运行一次。您可以将其放在组件之外：

```jsx
if (typeof window !== 'undefined') { // Check if we're running in the browser.
  checkAuthToken();
  loadDataFromLocalStorage();
}

function App() {
  // ...
}
```

这保证了此类逻辑在浏览器加载页面后仅运行一次。

#### 无效：购买产品

有时，即使您编写了清理函数，也无法防止用户看到运行 Effect 两次的后果。例如，您的效果可能会发送一个 POST 请求，例如购买产品：

```jsx
useEffect(() => {
  // 🔴 Wrong: This Effect fires twice in development, exposing a problem in the code.
  fetch('/api/buy', { method: 'POST' });
}, []);
```

您不会想购买该产品两次。但是，这也是您不应该将此逻辑放在效果中的原因。如果用户转到另一个页面，然后按“返回”，该怎么办？您的效果将再次运行。您不想在用户*访问*页面时购买产品;您希望在用户*单击*“购买”按钮时购买它。

购买不是由渲染引起的;它是由特定的交互引起的。它应仅在用户按下按钮时运行。**删除效果并将 /`api/buy` 请求移动到“购买”按钮事件处理程序中：**

```jsx
 function handleClick() {
    // ✅ Buying is an event because it is caused by a particular interaction.
    fetch('/api/buy', { method: 'POST' });
  }
```

这**说明，如果重新挂载破坏了应用程序的逻辑，这通常会发现现有的错误。**从用户的角度来看，访问页面不应与访问页面、单击链接并按“返回”没有什么不同。React 通过在开发中重新挂载它们来验证您的组件是否符合此原则。

### 将一切整合在一起

这个游乐场可以帮助您“感受”效果在实践中的工作方式。

此示例使用 [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) 计划一个控制台日志，其中输入文本在效果器运行三秒后显示。清理功能取消挂起的超时。首先按“安装组件”：

```jsx
import { useEffect, useState } from 'react';

function Playground() {
	const [text, setText] = useState('a');

	useEffect(() => {
		function onTimeout() {
			console.log('⏰ ' + text);
		}

		console.log('🔵 Schedule "' + text + '" log');
		const timeoutId = setTimeout(onTimeout, 3000);

		return () => {
			console.log('🟡 Cancel "' + text + '" log');
			clearTimeout(timeoutId);
		};
	}, [text]);

	return (
		<>
			<label>
				What to log: <input value={text} onChange={e => setText(e.target.value)} />
			</label>
			<h1>{text}</h1>
		</>
	);
}

export default function App() {
	const [show, setShow] = useState(false);
	return (
		<>
			<button onClick={() => setShow(!show)}>{show ? 'Unmount' : 'Mount'} the component</button>
			{show && <hr />}
			{show && <Playground />}
		</>
	);
}

```

您将首先看到三个日志：`Schedule "a" log`、`Cancel "a" log` 和再次 `Schedule "a" log`。三秒钟后还会有日志说 `a`。正如你之前所知道的，额外的调度/取消对是因为 React 在开发过程中重新挂载组件，以验证你是否很好地实现了清理。

现在编辑输入以说 `abc`。如果操作速度足够快，则会看到`Cancel "ab" log`紧跟 `Schedule "ab" log` 和 `Schedule "abc" log`。**React 总是在下一个渲染的效果之前清理上一个渲染的效果。**这就是为什么即使您快速输入输入，一次最多安排一个超时。编辑输入几次并观看控制台，以了解效果是如何清理的。

在输入中键入内容，然后立即按“卸载组件”。请注意卸载如何清理上次渲染的效果。在这里，它会在有机会触发之前清除最后一次超时。

最后，编辑上面的组件并注释掉清理功能，以免取消超时。尝试快速键入`abcde`。你期望在三秒钟内发生什么？超时内`console.log(text)`会打印*最新*`text`并生成五个`abcde`日志吗？尝试检查一下您的直觉！

三秒钟后，您应该看到一系列日志（`a`、`ab`、`abc`、`abcd` 和 `abcde`），而不是五个`abcde`日志。**每个效果都从其相应的渲染中“捕获”`text`值。**状态`text`改变并不重要：`text = 'ab'`渲染 Effect 将始终看到 `'ab'`。换句话说，每个渲染的效果彼此隔离。如果你好奇这是如何工作的，你可以阅读关于[闭包](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)的信息。

## Effect的生命周期

`React 16.8` 版本正式发布了 `Hook` 机制，React生命周期分为 `Class Component`（类组件） 生命周期与 `Function Component` （函数组件）生命周期。

`Function Component` 是更彻底的状态驱动抽象，甚至没有 `Class Component` 生命周期的概念，只有一个状态，而 React 负责同步到 DOM。

回顾下在 `Class Component` 的数据请求：

1. 在 `componentDidMount` 初始化发请求；
2. 在 `componentDidUpdate` 判断参数是否变化，变化就调用请求函数重新请求数据；
3. 在 `componentWillUnmount` 生命周期取消发送请求。

那么在函数组件中我们该如何做呢？答案是 `useEffect` 。

### useEffect

`useEffect` 就是一个 `Effect Hook` ，给函数组件增加了操作副作用的能力。它跟 class 组件中的 `componentDidMount` 、 `componentDidUpdate` 和 `componentWillUnmount` 具有相同的用途，只不过被合并成了一个 API。

**useEffect 做了什么：**

- 使用 `useEffect` 相当于告诉 React 组件需要在渲染后执行某些操作，React 将在执行 DOM 更新之后调用它。
- React 保证了每次运行 `useEffect` 的时候，DOM 已经更新完毕。

useEffect 默认情况下，它在第一次渲染之后和每次更新之后都会执行。

Class 组件 Demo：

```jsx
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

Function Component 重写该案例：

- 请记得 React 会等待浏览器完成画面渲染之后才会延迟调用 useEffect。

```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

### 需要清除的 effect

在 class 组件中，我们去监听原生 DOM 事件时，会在 `componentDidMount` 这个生命周期中去做，因为在这里可以获取到已经挂载的真实 DOM。我们也会在组件卸载的时候去取消事件监听避免内存泄露。那么在 `useEffect` 中该如何实现呢？

通过在 `useEffect` 中返回一个函数，它便可以清理副作用：

- 如果需要清除操作 useEffect 函数需返回一个清除函数
- 为防止内存泄漏，清除函数会在组件卸载前执行。另外，如果组件多次渲染（通常如此），则在执行下一个 effect 之前，上一个 effect 就已被清除

```jsx
useEffect(() => {
  console.log('effect');
  return () => {
    console.log("清除函数");
  };
});
```

清理规则是：

- **首次渲染不会进行清理，会在下一次渲染，清除上一次的副作用；**
- **卸载阶段也会执行清除操作。**

### Effect依赖

如果需要 useEffect 按照某种条件运行，可以给 useEffect 传递第二个参数

- 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数。这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行

```jsx
useEffect(() => {
  console.log('effect');
}, []);
```

- [count] 只有当 count 的值发生变化时该 userEffect 才会执行

```jsx
useEffect(() => {
  console.log('effect', props.number);
  return () => {
    console.log('清除函数');
  };
}, [count]);
```

### 网络请求中的应用

在 `useEffect` 中我们会去请求后台数据，通过前面的学习我们也了解到每次更新组件时我们都会再次去执行 `useEffect` ，但其实我们并不需要每次更新组件都发送请求。那么碰到这样的问题如何处理呢？

回顾上面是不是类似于 `componentDidUpdate` 中发送请求呢？直觉是对的，在`componentDidUpdate` 中我们是通过判断参数是否变化来避免每次都发送请求，那么在 `useEffect hook` 中我们也是异曲同工，通过第二个参数是否发生变换来决定是否重复执行，如果第二参数为空数组，则表示只在初始化执行一次，后续更新不会再次调用。

```jsx
useEffect(() => {
  fetchData(instanceId){...}
  
  fetchData(instanceId);
}, [instanceId]);
```

上面例子是通过 `fetchData` 函数去请求后台数据，具体函数体我们就省略了，然后你会发现`useEffect` 的第二个参数添加了一个数组，其中添加了一个参数 `instanceId`，它表示只有当`instanceId` 变化时，我们才去再次执行 `useEffect`。这样就可以避免我们多次请求后台数据。

当然我们的依赖项还可以传入一个空数组，就表示只在初始化时执行一次：

```jsx
useEffect(() => {
  fetchData(instanceId){...}
  
  fetchData(instanceId);
}, []);
```

### useCallback

```jsx
const memoizedCallback = useCallback(
  () => {
    doSomething(a);
  },
  [a],
);
```

把内联回调函数及依赖项数组作为参数传入 `useCallback` ，它将返回该回调函数的 `memoized` 版本，该回调函数仅在某个依赖项改变时才会更新。

通俗来讲当参数 a 发生变化时，会返回一个新的函数引用赋值给 `memoizedCallback` 变量，因此这个变量就可以当做 `useEffect` 第二个参数。这样就有效的将逻辑分离出来。

```jsx
function Parent(){
	const [query,setQuery] = useState('q');
  const fetchData = useCallback(()=>{
  	...省略函数体的具体实现
  },[query]);
  return <Child fetchData={fetchData} />
}
  
function Child({fetchData}){
  const [data,setData] = useState(null);
	useEffect(()=>{
  	fetchData().then(setData);
  },[fetchData])
}
```

经过 `useCallback` 包装过的函数可以当作普通变量作为 `useEffect` 的依赖。 `useCallback`做的事情，就是在其依赖变化时，返回一个新的函数引用，触发 `useEffect` 的依赖变化，并激活其重新执行。

现在我们不需要在 `useEffect` 依赖中直接对比 `query` 参数了，而可以直接对比 `fetchData` 函数。useEffect 只要关心 `fetchData` 函数是否变化，而 `fetchData` 参数的变化在 `useCallback` 时关心，能做到 依赖不丢、逻辑内聚，从而容易维护。

# 表单绑定

表单的组件分为受控组件和非受控组件

- 受控组件：由React管理了表单元素的value
- 非受控组件：表单元素的value就是原生的DOM管理的

## 受控组件

在 HTML 中，表单元素（如`<input>`、 `<textarea>` 和 `<select>`）之类的表单元素通常自己维护 state，并根据用户输入进行更新。而在 React 中，可变状态（mutable state）通常保存在组件的 state 属性中，并且只能通过使用 `setState()`来更新。

我们可以把两者结合起来，使 React 的 state 成为“唯一数据源”。渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”。

对于受控组件来说，输入的值始终由 React 的 state 驱动。

在input上监听输入框的变化使用onChange监听事件：input原生DOM中change事件是输入变化并失去焦点时触发，在react中onChange是输入变化时触发，类似原生DOM的input事件

input[type=text]双向绑定，input组件绑定的是value属性的值：

- value 绑定状态
- onChange 监听事件并修改状态

```jsx
import { useState } from 'react';

export default function App() {
	const [formData, setFormData] = useState({
		username: '',
		age: '',
	});

	// 提交表单数据
	function handleSubmit(ev) {
		ev.preventDefault();
		const { username, age } = formData;
		console.log('提交的数据 username, age： ', username, age);
	}
	// 保存表单数据到state中
	function handleChange(ev) {
		const { name, value } = ev.target;
		setFormData(() => ({
			...formData,
			...{
				[name]: value,
			},
		}));
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type='text' name='username' value={formData.username} onChange={handleChange} /> <br />
				<input type='text' name='age' value={formData.age} onChange={handleChange} /> <br />
				<input type='submit' value='提交' />
			</form>
		</div>
	);
}
```

给多个input组件绑定同一个函数的时候，也可以采用下面的写法

```jsx
function handleChange(ev, field) {
  const { value } = ev.target;
  setFormData(() => ({
    ...formData,
    ...{
      [field]: value,
    },
  }));
}


<input type='text' name='username' value={formData.username} onChange={ev => handleChange(ev, 'username')} /> <br />
<input type='text' name='age' value={formData.age} onChange={ev => handleChange(ev, 'age')} /> <br />
```

或者使用函数柯里化

```jsx

function handleChange(field) {
  return function (ev) {
    const { value } = ev.target;
    setFormData(() => ({
      ...formData,
      ...{
        [field]: value,
      },
    }));
  };
}

<input type='text' name='username' value={formData.username} onChange={handleChange('username')} /> <br />
<input type='text' name='age' value={formData.age} onChange={handleChange('age')} /> <br />
```

## 非受控组件

在大多数情况下，我们推荐使用受控组件来处理表单数据。在一个受控组件中，表单数据是由 React 组件来管理的。另一种替代方案是使用非受控组件，这时表单数据将交由 DOM 节点来处理。

要编写一个非受控组件，而不是为每个状态更新都编写数据处理函数，你可以使用 ref 来从 DOM 节点中获取表单数据。

在 React 渲染生命周期时，表单元素上的 `value` 将会覆盖 DOM 节点中的值，在非受控组件中，你经常希望 React 能赋予组件一个初始值，但是不去控制后续的更新。 在这种情况下, 你可以指定一个 `defaultValue` 属性，而不是 `value`。

- 使用defaultValue 的组件，其value值就是用户输入的内容，React完全不管理输入的过程 

同样，`<input type="checkbox">` 和 `<input type="radio">` 支持 `defaultChecked`，`<select>` 和 `<textarea>` 支持 `defaultValue`。

```jsx
import { useRef, useState } from 'react';

export default function App() {
	const nameRef = useRef(null);
	const ageRef = useRef(null);

	const [formData, setFormData] = useState({
		username: '',
		age: '',
	});

	// 提交表单数据
	function handleSubmit(ev) {
		ev.preventDefault();
		console.log('提交的数据 username, age： ', nameRef.current.value, ageRef.current.value);
	}

	return (
		<div >
			<form onSubmit={handleSubmit}>
				<input type='text' name='username' defaultValue={formData.username} ref={nameRef} /> <br />
				<input type='text' name='age' defaultValue={formData.age} ref={ageRef} /> <br />
				<input type='submit' value='提交' />
			</form>
		</div>
	);
}
```

因为非受控组件将真实数据储存在 DOM 节点中，所以在使用非受控组件时，有时候反而更容易同时集成 React 和非 React 代码。如果你不介意代码美观性，并且希望快速编写代码，使用非受控组件往往可以减少你的代码量。否则，你应该使用受控组件。

- 文件输入：在 HTML 中，`<input type="file">` 可以让用户选择一个或多个文件上传到服务器，或者通过使用 [File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications) 进行操作。

```
<input type="file" />
```

在 React 中，`<input type="file" />` 始终是一个非受控组件，因为它的值只能由用户设置，而不能通过代码控制。

## 对比受控组件和非受控组件

- 非受控组件： 用户输入A   -->  input 中显示A；
- 受控组件： 用户输入A  -->  触发onChange事件   -->   saveData中设置：formData.username= “A”   --> 渲染input使他的value变成A；

正是因为这样，强烈推荐使用受控组件，因为它能更好的控制组件的生命流程。

## 其他受控组件

- textarea绑定的是value属性的值：双向绑定用与input[type=text]法一致

```jsx
import { useState } from 'react';

export default function App() {
	const [message, setMessage] = useState('');

	return (
		<div>
			<textarea value={message} onChange={(ev)=>setMessage(ev.target.value)}></textarea>
		</div>
	);
}
```

- 复选框 checkbox 绑定的不是 value 属性 ，而是 checked 属性，绑定的是布尔值：
  - checked 绑定状态
  - onChange 监听事件

```jsx
import { useState } from 'react';

export default function App() {
	const [formData, setFormData] = useState({
		isChoose: false,
	});

	function handleChange(ev) {
		setFormData({ isChoose: ev.target.checked });
	}

	return (
		<div>
			性别：
			<input type='checkbox' checked={formData.isChoose} onChange={handleChange} />
			{formData.isChoose ? '男' : '女'}
		</div>
	);
}
```

- 单选框 radio 绑定value属性的值

```jsx
import { useState } from 'react';

export default function App() {
	const [formData, setFormData] = useState({
		sex: '',
	});

	function handleChange(ev) {
		setFormData({ sex: ev.target.value });
	}

	return (
    <div>
			性别：
			<input type='radio' name='sex' value='男' onChange={handleChange} />男
			<input type='radio' name='sex' value='女' onChange={handleChange} />女
		</div>
	);
}

```

- select绑定绑定的是option标签value属性的值：双向绑定用法与input[type=text]一致

```jsx
import { useState } from 'react';

export default function App() {
	const [hobby, setHobby] = useState('');

	return (
		<div>
			<p> 1:{formData.hobby}</p>
			选择喜欢的专业：
			<select value={hobby} onChange={(ev)=>setHobby(ev.target.value)}>
				<option value='' disabled>
					请选择
				</option>
				<option value='html'>html</option>
				<option value='js'>js</option>
				<option value='css'>css</option>
			</select>
		</div>
	);
}
```

# 组件间共享数据 （状态提升）

有时候，你希望两个组件的状态始终同步更改。要实现这一点，可以将相关 state 从这两个组件上移除，并把 state 放到它们的公共父级，再通过 props 将 state 传递给这两个组件。这被称为“状态提升”，这是编写 React 代码时常做的事。

## 状态提升的例子

在这个例子中，父组件 `MyApp`  渲染了 2 个独立的 `MyButton`  组件。

- `MyApp`
  - `MyButton`  
  - `MyButton`  

每个 `MyButton` 组件都有一个 `count`  ，用于控制点击的次数。

```jsx
import { useState } from 'react';

export default function MyApp() {
	return (
		<div>
			<h1>计数器</h1>
			<MyButton />
			<MyButton />
		</div>
	);
}

function MyButton() {
	const [count, setCount] = useState(0);

	return <button onClick={() => setCount(count + 1)}>点击了 {count} 次</button>;
}

```

在这个示例中，每个 `MyButton` 都有自己独立的 `count`，当每个按钮被点击时，只有被点击按钮的 `count` 才会发生改变，发现点击其中一个按钮并不会影响另外一个，他们是独立的：

| ![](https://zh-hans.react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fsharing_data_child.png&w=640&q=75) | ![](https://zh-hans.react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fsharing_data_child_clicked.png&w=640&q=75) |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| 起初，每个 `MyButton` 的 `count` state 均为 `0`              | 第一个 `MyButton` 会将 `count` 更新为 `1`                    |

**假设现在您想改变这种行为，以便在任何时候共享数据并一起更新。** 在这种设计下，为了使得 `MyButton` 组件显示相同的 `count` 并一起更新，您该如何做到这一点呢？你需要将各个按钮的 state “向上” 移动到最接近包含所有按钮的组件之中。

要协调好这两个按钮，我们需要分 3 步将状态“提升”到他们的父组件中。

1. 从子组件中 **移除** state 。
2. 从父组件 **传递** 硬编码数据。
3. 为共同的父组件添加 state ，并将其与事件处理函数一起向下传递。

这样， `MyApp` 父组件就可以控制 2 个 `MyButton`组件，保证同两个`MyButton`组件共享数据。

## 状态提升三步走

### 第 1 步: 从子组件中移除状态 

你将把 `MyButton` 组件对 `count` 的控制权交给他们的父组件。这意味着，父组件会将 `count` 作为 `prop` 传给子组件 `MyButton`。

首先，将 `MyButton` 的 **state 上移到** `MyApp` 中，先从 `MyButton` 组件中 **删除下面这一行**：

```
const [count, setCount] = useState(0);
```

然后，把 `count` 加入 `MyButton` 组件的 `props` 中：

```
function MyButton({ count }) {
```

现在 `MyButton` 的父组件就可以通过 [向下传递 prop](https://zh-hans.react.dev/learn/passing-props-to-a-component) 来 *控制* `count`。但相反地，`MyButton` 组件对 `count` 的值 *没有控制权* —— 现在完全由父组件决定！

```jsx
export default function MyApp() {

  return (
    <div>
      <h1>计数器</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}


function MyButton({ count = 0 }) {
  // ... we're moving code from here ...
  return <button>点击了 {count} 次</button>;
}
```

### 第 2 步: 从公共父组件传递数据 

为了实现状态提升，必须定位到你想协调的 *两个* 子组件最近的公共父组件：

- `MyApp`(最近的公共父组件)
  - `MyButton`
  - `MyButton`

在这个例子中，公共父组件是 `MyApp`。因为它位于两个按钮之上，可以控制它们的 props，所以它将成为当前按钮数据的“控制之源”。通过 `MyApp` 组件将硬编码值 `count`（例如 `1` ）传递给两个按钮：

```jsx
export default function MyApp() {

  return (
    <div>
      <h1>计数器</h1>
      <MyButton count={1} />
      <MyButton count={2} />
    </div>
  );
}

function MyButton({ count = 0 }) {
  return <button>点击了 {count} 次</button>;
}
```

你可以尝试修改 `MyApp` 组件中 `count` 的值，并在屏幕上查看结果。

### 第 3 步: 为公共父组件添加状态 

在这个例子中，共享数据并一起更新。这意味着 `MyApp` 这个父组件需要记录 *按钮* 被点击的次数。在 `MyApp` 组件中添加以下代码，来记录按钮被点击的次数，并添加 `handleClick` 函数来改变`count`的值：

```jsx
const [count, setCount] = useState(0);

function handleClick() {
  setCount(count + 1);
}
```

在任意一个 `MyButton` 中点击按钮都需要更改 `MyApp` 中的`count`的值。 `MyButton` 中无法直接设置状态 `count` 的值，因为该状态是在 `MyApp` 组件内部定义的。 `MyApp` 组件需要 *显式允许* `MyButton` 组件通过 [将事件处理程序作为 prop 向下传递](https://zh-hans.react.dev/learn/responding-to-events#passing-event-handlers-as-props) 来更改其状态：

将 `MyApp` 中的点击事件处理函数`handleClick`以及 **state （`count`）一同向下传递到** 每个 `MyButton` 中:

```jsx
<MyButton count={count} onCountChange={handleClick} />

<MyButton count={count} onCountChange={handleClick} />
```

最后，改变 `MyButton` 以 **读取** 从父组件传递来的 prop：

```jsx
function MyButton({ count = 0, onCountChange }) {
	return <button onClick={onCountChange}>点击了 {count} 次</button>;
}
```

现在 `MyButton` 组件中的 `<button>` 将使用 `onCountChange` 这个属性作为其点击事件的处理程序：

```jsx
import { useState } from 'react';
export default function MyApp() {
	const [count, setCount] = useState(0);

	function handleClick() {
		setCount(count + 1);
	}

	return (
		<div>
			<h1>计数器</h1>
			<MyButton count={count} onCountChange={handleClick} />
			<MyButton count={count} onCountChange={handleClick} />
		</div>
	);
}


function MyButton({ count = 0, onCountChange }) {
	return <button onClick={onCountChange}>点击了 {count} 次</button>;
}

```

当你点击按钮时，`onClick` 处理程序会启动。每个按钮的 `onCountChange` prop 会被设置为 `MyApp` 内的 `handleClick` 函数，所以函数内的代码会被执行。该代码会调用 `setCount(count + 1)`，使得 state 变量 `count` 递增。新的 `count` 值会被作为 prop 传递给每个按钮，因此它们每次展示的都是最新的值。这被称为“状态提升”。通过向上移动 state，我们实现了在组件间共享它。

| ![img](https://zh-hans.react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fsharing_data_parent.png&w=640&q=75) | ![img](https://zh-hans.react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fsharing_data_parent_clicked.png&w=640&q=75) |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| 起初，`MyApp` 的 `count` state 为 `0` 并传递给了两个子组件   | 点击后，`MyApp` 将 `count` state 更新为 `1`，并将其传递给两个子组件 |

此刻，当你点击任何一个按钮时，`MyApp` 中的 `count` 都将改变，同时会改变 `MyButton` 中的两个 count。

这样，我们就完成了对状态的提升！将状态移至公共父组件中可以让你更好的管理这两个按钮。使用`count`记录点击的次数。而通过向下传递事件处理函数`handleClick`可以让子组件修改父组件的状态。

## 每个状态都对应唯一的数据源 

在 `React` 应用中，很多组件都有自己的状态。一些状态可能“活跃”在叶子组件（树形结构最底层的组件）附近，例如输入框。另一些状态可能在应用程序顶部“活动”。例如，客户端路由库也是通过将当前路由存储在 `React` 状态中，利用 `props` 将状态层层传递下去来实现的！

**对于每个独特的状态，都应该存在且只存在于一个指定的组件中作为 state **。这一原则也被称为拥有 [“可信单一数据源”](https://en.wikipedia.org/wiki/Single_source_of_truth)。它并不意味着所有状态都存在一个地方——对每个状态来说，都需要一个特定的组件来保存这些状态信息。你应该 *将状态提升* 到公共父级，或 *将状态传递* 到需要它的子级中，而不是在组件之间复制共享的状态。

你的应用会随着你的操作而变化。当你将状态上下移动时，你依然会想要确定每个状态在哪里“活跃”。这都是过程的一部分！

# 组件之间的通信

- 父传子：父组件向子组件传值使用props，React数据流动是单向的，子组件只能使用props中的数据不能修改。
- 子传父：子组件向子组件传值，需要父组件提前传一个函数给子组件，以便子组件在适当的时候，将子组件中的数据通过调用这个函数，再传递给父组件

- 兄弟组件之间通信：

  - 状态提升

  - 消息发布订阅

  - 状态管理Redux

## 父传子

```jsx
// 父组件
export default function App() {
	const [count, setCount] = useState(0);
	const [zhangsan, setZhangsan] = useState({
    name: '张三',
    age: 18,
  });

	return (
		<div>
			<h1>Hello world!</h1>
			<button onClick={() => setCount(val => val + 1)}>按钮 count = {count} </button>
			<hr />
 			{/* 
 				count={count} 直接传递count属性，在子组件的props中接收
 				{...zhangsan} 传递一个对象的属性，在子组件中，使用 props.name 和 props.age 获取传递的数据
 			*/}
			<MA count={count} zhangsan={zhangsan} {...zhangsan}></MA>
		</div>
	);
}
```

```jsx
// 子组件
export default function MA(props) {
	const { count, name, age, zhangsan } = props;
	return (
		<div>
			<h2>MA组件</h2>
			<p> count: {count}</p>
			<p> name: {name}</p>
			<p> age: {age}</p>
			<p>zhangsan: {zhangsan.name}- {zhangsan.age}</p>
		</div>
	);
}
```

## 子传父

```jsx
// 父组件

export default function App() {
	const [count, setCount] = useState(0);

	// countChange是在父组件定义的函数，但是是在子组件中调用的函数
	const countChange = val => {
		console.log('countChange 执行了 val：', val);
		setCount(val);
	};

	return (
		<div>
			<h1>Hello world!</h1>
      <p> count: {count}</p>
			<hr />
			{/* onCountChange={countChange} 把父组件的函数传递给子组件 */}
			<MA onCountChange={countChange}></MA>
		</div>
	);
}
```

```jsx
// 子组件
export default function MA({ onCountChange }) {

	const btnClick = () => {
		// 调用父组件传递的函数并传值
		onCountChange(100);
	};
	return (
		<div>
			<h2>MA组件</h2>
			<button onClick={btnClick}>传值到父组件</button>
		</div>
	);
}
```

## 兄弟组件

### 状态提升

- 通过状态提升，把组件的状态定义在父组件中，父组件作为数据的中转

```jsx
// 父组件
export default function App() {
	const [count, setCount] = useState(0);

	// countChange是在父组件定义的函数，但是是在子组件中调用的函数
	const countChange = val => {
		console.log('countChange 执行了 val：', val);
		setCount(val);
	};

	return (
		<div>
			<h1>Hello world!</h1>
			<hr />
			<MA count={count} onCountChange={countChange}></MA>
			<MB count={count} onCountChange={countChange}></MB>
		</div>
	);
}
```

```jsx
//子组件1
export default function MA({ count, onCountChange }) {

  const btnClick = () => {
    onCountChange(count+ 1);
	};
	return (
		<div>
			<h2>MA组件</h2>
			<p> count: {count}</p>
			<button onClick={btnClick}>传值到父组件</button>
		</div>
	);
}
```

```jsx
//子组件2
export default function MB({ count, onCountChange }) {

  const btnClick = () => {
    onCountChange(count + 2);
	};
	return (
		<div>
			<h2>MB组件</h2>
			<p> count: {count}</p>
			<button onClick={btnClick}>传值到父组件</button>
		</div>
	);
}
```

### 消息发布订阅

pubsub.js消息发布订阅（推荐使用）

- 这种发布订阅方式，是目前开发中比较常用的兄弟组件通信方法。
- 其实pubsub.js不只适用于兄弟组件通信，其实任意层级、任意关系的组件通信，都可以使用pubsub的发布订阅通信，功能很强大。
- vue中也可以使用这个插件，因为这个插件是用原生js写的
- 文档：https://www.npmjs.com/package/pubsub-js

#### 第一步：下载pubsub.js

```bash
npm install pubsub-js --save
```

#### 第二步：在组件MA中发布消息

```jsx
//父组件
export default function App() {
	return (
		<div>
			<MA></MA>
			<MB></MB>
		</div>
	);
}
```

```JSX
// 子组件1
import PubSub from 'pubsub-js';

export default function MA() {
	const [num, setNum] = useState(0);

	const btnClick = () => {
		// 如果需要使用 next 状态，可以在将其传递给函数之前将其保存在变量中：
		const nextNum = num + 1;
		setNum(() => nextNum);
		// 发布消息
		// 参数1：消息名
		// 参数2：数据，可以是数字、字符串、对象等类型
		PubSub.publish('send-data', { val: nextNum });
	};

	return (
		<div>
			<h2>MA组件</h2>
			<p> num: {num}</p>
			<button onClick={btnClick}>传值到MB组件</button>
		</div>
	);
}
```

#### 第三步：在组件MB中订阅消息

```jsx
// 子组件2

export default function MB() {
	const [num, setNum] = useState(0);

	// 订阅消息
	// 参数1：消息名
	// 参数2：收到消息的回调，
	// msg：是消息名, data：传递的数据
	const token = PubSub.subscribe('send-data', (msg, data) => {
		console.log('msg:', msg, 'data:', data);
		setNum(data.val);
	});

	useEffect(() => {
		return () => {
			console.log('清除函数');
			// 移除订阅
			PubSub.unsubscribe(token);
		};
	}, []);

	return (
		<div>
			<h2>MB组件</h2>
			<p> num: {num}</p>
		</div>
	);
}
```

# 自定义 Hook

文档：https://zh-hans.legacy.reactjs.org/docs/hooks-custom.html

```jsx
import { useState } from 'react';
import MA from './components/MA';

function App() {
	const [list] = useState([
		{ name: '张三', age: 20, id: 2 },
		{ name: '李四', age: 21, id: 6 },
		{ name: '王五', age: 22, id: 8 },
	]);
	return (
		<div className='App'>
			<h1>App</h1>
      {list.map(user => (
				<MA {...user} key={user.id}></MA>
			))}
		</div>
	);
}
```

- 自定义hooks

```jsx
// config/hooks.jsx

import { useState, useEffect } from 'react';

export const useFriendStatus = friendID => {
	const [isOnline, setIsOnline] = useState(null);
	useEffect(() => {
		if (friendID > 5) {
			setIsOnline(true);
		} else {
			setIsOnline(false);
		}
		return () => {
			setIsOnline(null);
		};
	});
	return isOnline;
};
```

- 使用hooks

```jsx
import { useFriendStatus } from '../../config/hooks';

const MA = props => {
	const { name, age, id } = props;
	const isOnline = useFriendStatus(id);

	return (
		<div className='m-a' style={{ background: '#e1e1e1' }}>
			<p style={{ color: isOnline ? 'red' : 'blue' }}> 姓名：{name} </p>
			<p> 年龄：{age} </p>
		</div>
	);
};
```



