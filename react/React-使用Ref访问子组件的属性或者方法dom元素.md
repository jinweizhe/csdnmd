![在这里插入图片描述](https://img-blog.csdnimg.cn/68ff79bb361d4b968be7cde56d19e38b.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/8c3ed523c3644055a1ae4d1736a01793.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/822d7079fe64426db5c17ca196fd99be.jpeg)

**代码演示**

```js
import { useState, forwardRef, useImperativeHandle, useRef } from "react";
export default function App() {
  const xiaoji = useRef(null); //这个ref是绑定到子组件的
  const add1 = () => {
    console.log("xiaoji", xiaoji);
    // 调用子组件的加方法
    xiaoji.current.add();
  };
  const add2 = () => {
    // 调用子组件的减方法
    xiaoji.current.sub();
  };
  return (
    <div>
      {/* 绑定的ref,此时无数据,需要通过子组件返回绑定的数据或方法才能有值 */}
      <Counter
        ref={xiaoji}
        num={1}
      ></Counter>
      <button onClick={add1}>+</button>
      <button onClick={add2}>-</button>
    </div>
  );
}

// 子组件需要使用forwardRef进行包裹,接收两个参数,参数一为传来的数据(必填,不然会把ref当成第一个参数),参数二为父组件绑定到子组件的ref值
const Counter = forwardRef(function Counter({ num }, ref) {
  console.log("ref", ref); //传过来的ref
  let [count, setCount] = useState(0); //定义的count值
  function add() {
    //子组件加方法
    setCount((a) => (a += 1));
  }
  function sub() {
    // 子组件减方法
    setCount((a) => (a -= 1));
  }
  // 参数一为组件绑定的ref,参数二为绑定到ref上的数据或方法
  useImperativeHandle(ref, () => {
    return {
      // 将子组件的方法绑定到ref,使父组件能通过ref访问到子组件方法
      add,
      sub,
    };
  });
  return (
    // 把上面整个useImperativeHandle注释掉, 给标签添加ref={ref}就可以通过父组件得到这个标签(因为上面是返回绑定属性或方法的ref,这个是返回绑定标签的ref,两者都是返回ref,不能同时使用)
    <p ref={ref}>
      {/* 显示的内容 */}
      {count}----{num}
    </p>
  );
});
// 以上完成就可以通过父组件对子组件的方法进行调用了,这里就是对count值进行加减的例子
```

