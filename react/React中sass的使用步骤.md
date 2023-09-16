## react中安装使用sass
```npm
npm install node-sass sass-loader --save
```
二、使用方法
## 方法1：定义UserInfo.scss文件
```css
.UserInfo{ color: red; }
```
jsx引入scss文件
```js
import  './UserInfo.scss'

export default class Login extends React.Component {
	render () {
		return (
            <div className='UserInfo'>
                demo
            </div>
		);
	}
}
```
## 方法2：使用css module定义loginPage.module.scss文件
该方法在新建scss文件时，加上module，这种方法，将scss文件中的每个类名自动编译为一个唯一的ID，能有效的提升工程的性能
```css
.loginPage{
    color:blue;
}
```
jsx使用 module.scss文件
```js
import styleObj from './loginPage.module.scss'
export default class Login extends React.Component {
	render () {
		return (
            <div className={styleObj.loginPage}>
                demo
            </div>
		);
	}
}
```