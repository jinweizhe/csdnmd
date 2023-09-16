[转载自此网站，可用于参考](https://cssfx.lovejade.cn/)

### 本人做了关于本页的样式的所有代码合集，各位可以参考选择：
git地址：  git@gitee.com:jinweizhexj/style-code.git
### 泡沫1
##### HTML部分
```html
<button>Bubble</button>
```
##### CSS部分
```css
button {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  overflow: hidden;
  transition: color 0.4s ease-in-out;
}

button::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 100%;
  right: 100%;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: #3cefff;
  transform-origin: center;
  transform: translate3d(50%, -50%, 0) scale3d(0, 0, 0);
  transition: transform 0.45s ease-in-out;
}

button:hover {
  cursor: pointer;
  color: #161616;
}

button:hover::before {
  transform: translate3d(50%, -50%, 0) scale3d(15, 15, 15);
}
```
### 泡沫2
```html
<button>Bubble</button>
```
```css
button {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  overflow: hidden;
  transition: color 0.4s ease-in-out;
}

button::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 100%;
  left: 100%;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: #3cefff;
  transform-origin: center;
  transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
  transition: transform 0.45s ease-in-out;
}

button:hover {
  cursor: pointer;
  color: #161616;
}

button:hover::before {
  transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15);
}
```
### 泡沫3
```html
<button>Bubble</button>
```
```css
button {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  overflow: hidden;
  transition: color 0.4s ease-in-out;
}

button::before {
  content: '';
  z-index: -1;
  position: absolute;
  bottom: 100%;
  right: 100%;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: #3cefff;
  transform-origin: center;
  transform: translate3d(50%, 50%, 0) scale3d(0, 0, 0);
  transition: transform 0.45s ease-in-out;
}

button:hover {
  cursor: pointer;
  color: #161616;
}

button:hover::before {
  transform: translate3d(50%, 50%, 0) scale3d(15, 15, 15);
}

```
### 泡沫4
```html
<button>Bubble</button>
```
```css
button {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  overflow: hidden;
  transition: color 0.4s ease-in-out;
}

button::before {
  content: '';
  z-index: -1;
  position: absolute;
  bottom: 100%;
  left: 100%;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: #3cefff;
  transform-origin: center;
  transform: translate3d(-50%, 50%, 0) scale3d(0, 0, 0);
  transition: transform 0.45s ease-in-out;
}

button:hover {
  cursor: pointer;
  color: #161616;
}

button:hover::before {
  transform: translate3d(-50%, 50%, 0) scale3d(15, 15, 15);
}
```
### 泡沫5
```html
<button>Bubble</button>
```
```css
button {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  overflow: hidden;
  transition: color 0.4s ease-in-out;
}

button::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: #3cefff;
  transform-origin: center;
  transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
  transition: transform 0.45s ease-in-out;
}

button:hover {
  cursor: pointer;
  color: #161616;
}

button:hover::before {
  transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15);
}
```
### 果冻
```html
<button>Jelly</button>
```
```css
button {
  z-index: 1;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
}

button:hover {
  cursor: pointer;
  animation: jelly 0.5s;
}

@keyframes jelly {
  0%,
  100% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.1, 0.9);
  }
  75% {
    transform: scale(0.95, 1.05);
  }
}
```
### 脉冲
```html
<button>Pulse</button>
```
```css
button {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
}

button:hover {
  cursor: pointer;
}

button::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 4px solid hsl(236, 32%, 26%);
  transform-origin: center;
  transform: scale(1);
}

button:hover::before {
  transition: all 0.75s ease-in-out;
  transform-origin: center;
  transform: scale(1.75);
  opacity: 0;
}
```
### 镜子
```html
<button>Shine</button>
```
```css
button {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  overflow: hidden;
  cursor: pointer;
}

button::after {
  content: '';
  z-index: -1;
  background-color: hsla(0, 0%, 100%, 0.2);
  position: absolute;
  top: -50%;
  bottom: -50%;
  width: 1.25em;
  transform: translate3d(-525%, 0, 0) rotate(35deg);
}

button:hover::after {
  transition: transform 0.45s ease-in-out;
  transform: translate3d(200%, 0, 0) rotate(35deg);
}
```
### 下滑效果
```html
<button>Slide</button>
```
```css
button {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
}

button::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fc2f70;
  transform-origin: center bottom;
  transform: scaleY(0);
  transition: transform 0.25s ease-in-out;
}

button:hover {
  cursor: pointer;
}

button:hover::before {
  transform-origin: center top;
  transform: scaleY(1);
}
```
### 左滑效果
```html
<button>Slide</button>
```
```css
button {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
}

button::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fc2f70;
  transform-origin: center left;
  transform: scaleX(0);
  transition: transform 0.25s ease-in-out;
}

button:hover {
  cursor: pointer;
}

button:hover::before {
  transform-origin: center right;
  transform: scaleX(1);
}
```
### 右滑效果
```html
<button>Slide</button>
```
```css
button {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
}

button::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fc2f70;
  transform-origin: center right;
  transform: scaleX(0);
  transition: transform 0.25s ease-in-out;
}

button:hover {
  cursor: pointer;
}

button:hover::before {
  transform-origin: center left;
  transform: scaleX(1);
}
```
### 上滑效果
```html
<button>Slide</button>
```
```css
button {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
}

button::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fc2f70;
  transform-origin: center top;
  transform: scaleY(0);
  transition: transform 0.25s ease-in-out;
}

button:hover {
  cursor: pointer;
}

button:hover::before {
  transform-origin: center bottom;
  transform: scaleY(1);
}
```
### 输入框特效1
```html
<div>
  <input type="text" placeholder="Input Outline">
  <span class="bottom"></span>
  <span class="right"></span>
  <span class="top"></span>
  <span class="left"></span>
</div>
```
```css
div {
  position: relative;
}

input {
  width: 6.5em;
  color: white;
  font-size: inherit;
  font-family: inherit;
  background-color: hsl(236, 32%, 26%);
  padding: 0.35em 0.45em;
  border: 1px solid transparent;
  transition: background-color 0.3s ease-in-out;
}

input:focus {
  outline: none;
}

input::placeholder {
  color: hsla(0, 0%, 100%, 0.6);
}

span {
  position: absolute;
  background-color: #3cefff;
  transition: transform 0.5s ease;
}

.bottom,
.top {
  height: 1px;
  left: 0;
  right: 0;
  transform: scaleX(0);
}

.left,
.right {
  width: 1px;
  top: 0;
  bottom: 0;
  transform: scaleY(0);
}

.bottom {
  bottom: 0;
  transform-origin: bottom right;
}

input:focus ~ .bottom {
  transform-origin: bottom left;
  transform: scaleX(1);
}

.right {
  right: 0;
  transform-origin: top right;
}

input:focus ~ .right {
  transform-origin: bottom right;
  transform: scaleY(1);
}

.top {
  top: 0;
  transform-origin: top left;
}

input:focus ~ .top {
  transform-origin: top right;
  transform: scaleX(1);
}

.left {
  left: 0;
  transform-origin: bottom left;
}

input:focus ~ .left {
  transform-origin: top left;
  transform: scaleY(1);
}
```
### 输入框特效2
```html
<div>
  <input type="text" placeholder="Input Outline">
  <span class="bottom"></span>
  <span class="right"></span>
  <span class="top"></span>
  <span class="left"></span>
</div>
```
```css
div {
  position: relative;
}

input {
  width: 6.5em;
  color: white;
  font-size: inherit;
  font-family: inherit;
  background-color: hsl(236, 32%, 26%);
  padding: 0.35em 0.45em;
  border: 1px solid transparent;
  transition: background-color 0.3s ease-in-out;
}

input:focus {
  outline: none;
}

input::placeholder {
  color: hsla(0, 0%, 100%, 0.6);
}

span {
  position: absolute;
  background-color: #fc2f70;
  transform-origin: center;
  transition: transform 0.5s ease;
}

.bottom,
.top {
  height: 1px;
  left: 0;
  right: 0;
  transform: scaleX(0);
}

.left,
.right {
  width: 1px;
  top: 0;
  bottom: 0;
  transform: scaleY(0);
}

.top {
  top: 0;
}

.bottom {
  bottom: 0;
}

.left {
  left: 0;
}

.right {
  right: 0;
}

input:focus ~ .top, input:focus ~ .bottom {
  transform: scaleX(1);
}

input:focus ~ .left, input:focus ~ .right {
  transform: scaleY(1);
}
```
### 输入框特效3
```html
<div>
  <input type="text" placeholder="Input Trace">
  <span class="bottom"></span>
  <span class="right"></span>
  <span class="top"></span>
  <span class="left"></span>
</div>
```
```css
div {
  position: relative;
}

input {
  width: 6.5em;
  color: white;
  font-size: inherit;
  font-family: inherit;
  background-color: hsl(236, 32%, 26%);
  padding: 0.35em 0.45em;
  border: 1px solid transparent;
  transition: background-color 0.3s ease-in-out;
}

input:focus {
  outline: none;
}

input::placeholder {
  color: hsla(0, 0%, 100%, 0.6);
}

span {
  position: absolute;
  background-color: #fc2f70;
  transition: transform 0.1s ease;
}

.bottom,
.top {
  height: 1px;
  left: 0;
  right: 0;
  transform: scaleX(0);
}

.left,
.right {
  width: 1px;
  top: 0;
  bottom: 0;
  transform: scaleY(0);
}

.bottom {
  bottom: 0;
  transform-origin: bottom right;
}

input:focus ~ .bottom {
  transform-origin: bottom left;
  transform: scaleX(1);
}

.right {
  right: 0;
  transform-origin: top right;
  transition-delay: 0.05s;
}

input:focus ~ .right {
  transform-origin: bottom right;
  transform: scaleY(1);
}

.top {
  top: 0;
  transform-origin: top left;
  transition-delay: 0.15s;
}

input:focus ~ .top {
  transform-origin: top right;
  transform: scaleX(1);
}

.left {
  left: 0;
  transform-origin: bottom left;
  transition-delay: 0.25s;
}

input:focus ~ .left {
  transform-origin: top left;
  transform: scaleY(1);
}
```
### 输入框点击右滑下划线效果
```html
<div>
  <input type="text" placeholder="Input Underline">
  <span></span>
</div>
```
```css
div {
  position: relative;
}

input {
  width: 6.5em;
  color: white;
  font-size: inherit;
  font-family: inherit;
  background-color: transparent;
  border: 1px solid transparent;
  border-bottom-color: hsla(185, 100%, 62%, 0.2);
}

input:focus {
  outline: none;
}

input::placeholder {
  color: hsla(0, 0%, 100%, 0.6);
}

span {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background-color: #3cefff;
  transform-origin: bottom right;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}

input:focus ~ span {
  transform-origin: bottom left;
  transform: scaleX(1);
}
```
### 输入框点击中间扩展下划线效果
```html
<div>
  <input type="text" placeholder="Input Underline">
  <span></span>
</div>
```
```css
div {
  position: relative;
}

input {
  width: 6.5em;
  color: white;
  font-size: inherit;
  font-family: inherit;
  background-color: transparent;
  border: 1px solid transparent;
  border-bottom-color: hsla(341, 97%, 59%, 0.2);
}

input:focus {
  outline: none;
}

input::placeholder {
  color: hsla(0, 0%, 100%, 0.6);
}

span {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 100%;
  height: 1px;
  opacity: 0;
  background-color: #fc2f70;
  transform-origin: center;
  transform: translate(-50%, 0) scaleX(0);
  transition: all 0.3s ease;
}

input:focus ~ span {
  transform: translate(-50%, 0) scaleX(1);
  opacity: 1;
}
```
### 图形样式1
```html
  <div>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
```
```css
div {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 2em;
}

span {
  width: 0.3em;
  height: 1em;
  background-color: #3cefff;
}

span:nth-of-type(1) {
  animation: grow 1s -0.45s ease-in-out infinite;
}

span:nth-of-type(2) {
  animation: grow 1s -0.3s ease-in-out infinite;
}

span:nth-of-type(3) {
  animation: grow 1s -0.15s ease-in-out infinite;
}

span:nth-of-type(4) {
  animation: grow 1s ease-in-out infinite;
}

@keyframes grow {
  0%,
  100% {
    transform: scaleY(1);
  }

  50% {
    transform: scaleY(2);
  }
}
```
### 图形样式2
```html
  <div class="spinner">
    <div class="rect1"></div>
    <div class="rect2"></div>
    <div class="rect3"></div>
    <div class="rect4"></div>
    <div class="rect5"></div>
  </div>
```
```css
.spinner {
  width: 60px;
  height: 60px;
  text-align: center;
}

.spinner > div {
  background-color: #3cefff;
  height: 100%;
  width: 6px;
  margin: auto 2px;
  display: inline-block;

  -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
  animation: stretchdelay 1.2s infinite ease-in-out;
}

.spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.spinner .rect3 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

.spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

.spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

@-webkit-keyframes stretchdelay {
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
  }
}

@keyframes stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
}
```
### 图形样式3
```html
  <div class="load-container">
    <div class="loader-bounce"></div>
  </div>
```
```css
.load-container {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto;
}

.loader-bounce {
  width: 50px;
  height: 50px;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.loader-bounce::before {
  content: '';
  width: 50px;
  height: 5px;
  background: #000;
  opacity: 0.1;
  position: absolute;
  top: 59px;
  left: 0;
  border-radius: 50%;
  animation: shadow 0.5s linear infinite;
}
.loader-bounce::after {
  content: '';
  width: 50px;
  height: 50px;
  background: #00adb5;
  animation: animate 0.5s linear infinite;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 3px;
}
@keyframes animate {
  17% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(9px) rotate(22.5deg);
  }
  50% {
    transform: translateY(18px) scale(1, 0.9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }
  75% {
    transform: translateY(9px) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
}

@keyframes shadow {
  0%,
  100% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1);
  }
}
```
### 图形样式4
```html
<div></div>
```
```css
div {
  position: relative;
  width: 2em;
  height: 2em;
  border: 3px solid #3cefff;
  overflow: hidden;
  animation: spin 3s ease infinite;
}

div::before {
  content: '';
  position: absolute;
  top: -3px;
  left: -3px;
  width: 2em;
  height: 2em;
  background-color: hsla(185, 100%, 62%, 0.75);
  transform-origin: center bottom;
  transform: scaleY(1);
  animation: fill 3s linear infinite;
}

@keyframes spin {
  50%,
  100% {
    transform: rotate(360deg);
  }
}

@keyframes fill {
  25%,
  50% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
}
```
### 图形样式5
```html
<div class="box">
  <div class="coin"></div>
</div>
```
```css
.box {
  perspective: 120px;
}

.coin {
  width: 2em;
  height: 2em;
  border-radius: 50%;
  border: 4px solid #3cefff;
  animation: spin 1.5s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotateY(540deg);
  }
}
```
### 图形样式6
```html
<div class="balls">
  <div></div>
  <div></div>
  <div></div>
</div>
```
```css
.balls {
  width: 4em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}

.balls div {
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  background-color: #fc2f70;
}

.balls div:nth-of-type(1) {
  transform: translateX(-100%);
  animation: left-swing 0.5s ease-in alternate infinite;
}

.balls div:nth-of-type(3) {
  transform: translateX(-95%);
  animation: right-swing 0.5s ease-out alternate infinite;
}

@keyframes left-swing {
  50%,
  100% {
    transform: translateX(95%);
  }
}

@keyframes right-swing {
  50% {
    transform: translateX(-95%);
  }
  100% {
    transform: translateX(100%);
  }
}
```
### 图形样式7
```html
<div></div>
```
```css
div {
  width: 2.5em;
  height: 3em;
  border: 3px solid transparent;
  border-top-color: #fc2f70;
  border-bottom-color: #fc2f70;
  border-radius: 50%;
  animation: spin-stretch 2s ease infinite;
}

@keyframes spin-stretch {
  50% {
    transform: rotate(360deg) scale(0.4, 0.33);
    border-width: 8px;
  }
  100% {
    transform: rotate(720deg) scale(1, 1);
    border-width: 3px;
  }
}
```
### 图形样式8
```html
  <div class="spinner">
    <div class="dot1"></div>
    <div class="dot2"></div>
  </div>
```
```css
.spinner {
  width: 90px;
  height: 90px;
  position: relative;
  text-align: center;

  -webkit-animation: rotate 2s infinite linear;
  animation: rotate 2s infinite linear;
}

.dot1,
.dot2 {
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: #3cefff;
  border-radius: 100%;

  -webkit-animation: bounce 2s infinite ease-in-out;
  animation: bounce 2s infinite ease-in-out;
}

.dot2 {
  top: auto;
  bottom: 0px;
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

@-webkit-keyframes rotate {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
}

@-webkit-keyframes bounce {
  0%,
  100% {
    -webkit-transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
```
### 图形样式9
```html
<div class="dots">
  <div></div>
  <div></div>
  <div></div>
</div>
```
```css
.dots {
  width: 3.5em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}

.dots div {
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  background-color: #fc2f70;
  animation: fade 0.8s ease-in-out alternate infinite;
}

.dots div:nth-of-type(1) {
  animation-delay: -0.4s;
}

.dots div:nth-of-type(2) {
  animation-delay: -0.2s;
}

@keyframes fade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
```
### 图形样式10
```html
<div class="box">
  <div class="plane"></div>
</div>
```
```css
.box {
  perspective: 120px;
}

.plane {
  width: 2em;
  height: 2em;
  background-color: #fc2f70;
  transform: rotate(0);
  animation: flip 1s infinite;
}

@keyframes flip {
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(180deg) rotateX(180deg);
  }
}
```
### 图形样式11
```html
<div class="dots">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```
```css
.dots {
  width: 3em;
  height: 3em;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
}

.dots > div {
  width: 0.5em;
  height: 0.5em;
  background-color: #3cefff;
  border-radius: 50%;
  animation: fade 1.5s alternate ease-in-out infinite;
}

.dots > div:nth-of-type(2),
.dots > div:nth-of-type(4) {
  animation-delay: 0.25s;
}

.dots > div:nth-of-type(3),
.dots > div:nth-of-type(5),
.dots > div:nth-of-type(7) {
  animation-delay: 0.5s;
}

.dots > div:nth-of-type(6),
.dots > div:nth-of-type(8) {
  animation-delay: 0.75s;
}

.dots > div:nth-of-type(9) {
  animation-delay: 1s;
}

@keyframes fade {
  to {
    opacity: 0.2;
  }
}
```
### 图形样式12
```html
<div class="loader">
  <div class="outer"></div>
  <div class="middle"></div>
  <div class="inner"></div>
</div>
```
```css
.loader {
  position: relative;
}

.outer,
.middle,
.inner {
  border: 3px solid transparent;
  border-top-color: #3cefff;
  border-right-color: #3cefff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
}

.outer {
  width: 3.5em;
  height: 3.5em;
  margin-left: -1.75em;
  margin-top: -1.75em;
  animation: spin 2s linear infinite;
}

.middle {
  width: 2.1em;
  height: 2.1em;
  margin-left: -1.05em;
  margin-top: -1.05em;
  animation: spin 1.75s linear reverse infinite;
}

.inner {
  width: 0.8em;
  height: 0.8em;
  margin-left: -0.4em;
  margin-top: -0.4em;
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
```
### 图形样式13
```html
<div></div>
```
```css
div {
  display: flex;
  width: 3.5em;
  height: 3.5em;
  border: 3px solid transparent;
  border-top-color: #3cefff;
  border-bottom-color: #3cefff;
  border-radius: 50%;
  animation: spin 1.5s linear infinite;
}

div:before {
  content: '';
  display: block;
  margin: auto;
  width: 0.75em;
  height: 0.75em;
  border: 3px solid #3cefff;
  border-radius: 50%;
  animation: pulse 1s alternate ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
}
```
### 图形样式14
```html
<svg viewBox="0 0 50 50">
  <circle class="ring" cx="25" cy="25" r="20"></circle>
  <circle class="ball" cx="25" cy="5" r="3.5"></circle>
</svg>
```
```css
svg {
  width: 3.75em;
  animation: 1.5s spin ease infinite;
}

.ring {
  fill: none;
  stroke: hsla(341, 97%, 59%, 0.3);
  stroke-width: 2;
}

.ball {
  fill: #fc2f70;
  stroke: none;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
```
### 图形样式15
```html
  <div class="load-container">
    <div class="container container-1">
      <div class="dot dot-1"></div>
      <div class="dot dot-2"></div>
      <div class="dot dot-3"></div>
      <div class="dot dot-4"></div>
    </div>
    <div class="container container-2">
      <div class="dot dot-1"></div>
      <div class="dot dot-2"></div>
      <div class="dot dot-3"></div>
      <div class="dot dot-4"></div>
    </div>
    <div class="container container-3">
      <div class="dot dot-1"></div>
      <div class="dot dot-2"></div>
      <div class="dot dot-3"></div>
      <div class="dot dot-4"></div>
    </div>
  </div>
```
```css
.load-container {
  margin: 50px auto;
  width: 48px;
  height: 48px;
  position: relative;
}
.load-container .container {
  position: absolute;
  width: 100%;
  height: 100%;
}
.load-container .container .dot {
  width: 12px;
  height: 12px;
  background-color: #00adb5;
  border-radius: 100%;
  position: absolute;
  -webkit-animation: bouncedelay 1.2s infinite ease-in-out;
  animation: bouncedelay 1.2s infinite ease-in-out;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.load-container .container .dot-1 {
  top: 0;
  left: 0;
}
.load-container .container .dot-2 {
  top: 0;
  right: 0;
}
.load-container .container .dot-3 {
  right: 0;
  bottom: 0;
}
.load-container .container .dot-4 {
  left: 0;
  bottom: 0;
}
.load-container .container-1 .dot-2 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
.load-container .container-1 .dot-3 {
  -webkit-animation-delay: -0.6s;
  animation-delay: -0.6s;
}
.load-container .container-1 .dot-4 {
  -webkit-animation-delay: -0.3s;
  animation-delay: -0.3s;
}
.load-container .container-2 {
  -webkit-transform: rotateZ(45deg);
  transform: rotateZ(45deg);
}
.load-container .container-2 .dot-1 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
.load-container .container-2 .dot-2 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
.load-container .container-2 .dot-3 {
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}
.load-container .container-2 .dot-4 {
  -webkit-animation-delay: -0.2s;
  animation-delay: -0.2s;
}
.load-container .container-3 {
  -webkit-transform: rotateZ(90deg);
  transform: rotateZ(90deg);
}
.load-container .container-3 .dot-1 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
.load-container .container-3 .dot-2 {
  -webkit-animation-delay: -0.7s;
  animation-delay: -0.7s;
}
.load-container .container-3 .dot-3 {
  -webkit-animation-delay: -0.4s;
  animation-delay: -0.4s;
}
.load-container .container-3 .dot-4 {
  -webkit-animation-delay: -0.1s;
  animation-delay: -0.1s;
}

@-webkit-keyframes bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
}
@keyframes bouncedelay {
  0%,
  80%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  40% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}

```
### 图形样式16
```html
<svg viewBox="25 25 50 50">
  <circle cx="50" cy="50" r="20"></circle>
</svg>
```
```css
svg {
  width: 3.75em;
  transform-origin: center;
  animation: rotate 2s linear infinite;
}

circle {
  fill: none;
  stroke: #fc2f70;
  stroke-width: 2;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dashoffset: -125px;
  }
}

```
### 图形样式17
```html
<div></div>
```
```css
div {
  border: 3px solid hsla(185, 100%, 62%, 0.2);
  border-top-color: #3cefff;
  border-radius: 50%;
  width: 3em;
  height: 3em;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
```
### 图形样式18
```html
  <div class="snake-spinner">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
```
```css
.snake-spinner {
  width: 100px;
  height: 20px;
  position: relative;
}
.snake-spinner span {
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #3cefff;
  opacity: 0.5;
  border-radius: 20px;
  animation: snake 1s infinite ease-in-out;
}
.snake-spinner span:nth-child(1) {
  left: 0px;
  animation-delay: 0s;
}
.snake-spinner span:nth-child(2) {
  left: 20px;
  animation-delay: 0.2s;
}
.snake-spinner span:nth-child(3) {
  left: 40px;
  animation-delay: 0.4s;
}
.snake-spinner span:nth-child(4) {
  left: 60px;
  animation-delay: 0.6s;
}
.snake-spinner span:nth-child(5) {
  left: 80px;
  animation-delay: 0.8s;
}
@keyframes snake {
  0% {
    opacity: 0.3;
    transform: translateY(0px);
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
  }
  50% {
    opacity: 1;
    transform: translateY(-10px);
    background-color: #fc2f70;
    box-shadow: 0px 20px 3px rgba(0, 0, 0, 0.05);
  }
  100% {
    opacity: 0.3;
    transform: translateY(0px);
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
  }
}
```
### 图形样式19
```html
  <div class="spinner"></div>
```
```css
.spinner {
  width: 60px;
  height: 60px;
  background-color: #3cefff;

  margin: 100px auto;
  -webkit-animation: rotateplane 1.2s infinite ease-in-out;
  animation: rotateplane 1.2s infinite ease-in-out;
}

@-webkit-keyframes rotateplane {
  0% {
    -webkit-transform: perspective(120px);
  }
  50% {
    -webkit-transform: perspective(120px) rotateY(180deg);
  }
  100% {
    -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg);
  }
}

@keyframes rotateplane {
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  }
  100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
}
```
### 图形样式20
```html
<div class="balls">
  <div></div>
  <div></div>
  <div></div>
</div>
```
```css
.balls {
  width: 3.5em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}

.balls div {
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  background-color: #fc2f70;
  transform: translateY(-100%);
  animation: wave 0.8s ease-in-out alternate infinite;
}

.balls div:nth-of-type(1) {
  animation-delay: -0.4s;
}

.balls div:nth-of-type(2) {
  animation-delay: -0.2s;
}

@keyframes wave {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(100%);
  }
}
```
### 图形样式21
```html
  <div class="spinner">
    <div class="cube1"></div>
    <div class="cube2"></div>
  </div>
```
```css
.spinner {
  width: 60px;
  height: 60px;
  position: relative;
}

.cube1,
.cube2 {
  background-color: #3cefff;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  left: 0;

  -webkit-animation: cubemove 1.8s infinite ease-in-out;
  animation: cubemove 1.8s infinite ease-in-out;
  transform-origin: center;
}

.cube2 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

@-webkit-keyframes cubemove {
  25% {
    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
  }
  50% {
    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
  }
  75% {
    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
  }
  100% {
    -webkit-transform: rotate(-360deg);
  }
}

@keyframes cubemove {
  25% {
    transform: translateX(42px) rotate(-90deg) scale(0.5);
    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
  }
  50% {
    transform: translateX(42px) translateY(42px) rotate(-179deg);
    -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
  }
  50.1% {
    transform: translateX(42px) translateY(42px) rotate(-180deg);
    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
  }
  75% {
    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
  }
  100% {
    transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg);
  }
}
```
### 图形样式22
```html
  <div class="box">
    <div class="right-tick"></div>
  </div>
```
```css
.box {
  width: 3.5em;
  height: 3.5em;
  position: relative;
}
.right-tick {
  width: 3em;
  height: 1.5em;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: auto;
  transform: translate(-50%, -100%) rotate(-45deg);
  overflow: hidden;
}
.right-tick::before,
.right-tick::after {
  content: '';
  position: absolute;
  background-color: #3cefff;
  border-radius: 2px;
}
.right-tick::before {
  width: 2px;
  height: 1.5em;
  left: 0;
  animation: tickLeft 0.5s linear 3s 1 both;
}
.right-tick:after {
  width: 3em;
  height: 2px;
  bottom: 0;
  animation: tickRight 0.5s linear 3.5s 1 both;
}
@-webkit-keyframes tickLeft {
  0% {
    top: -100%;
  }
  100% {
    top: 0%;
  }
}
@-webkit-keyframes tickRight {
  0% {
    left: -100%;
  }
  100% {
    left: 0%;
  }
}
```
### 图形样式23
```html
  <div class="spinner">
    <div class="ball-scale-multiple">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
```
```css
.spinner {
  flex: 0 1 auto;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 25%;
  max-width: 25%;
  align-items: center;
  justify-content: center;
}

.ball-scale-multiple {
  position: relative;
  -webkit-transform: translateY(-30px);
  transform: translateY(-30px);
}

.ball-scale-multiple > div {
  background-color: #ffffff;
  border-radius: 100%;
}

.ball-scale-multiple > div:nth-child(2) {
  -webkit-animation-delay: -0.4s;
  animation-delay: -0.4s;
}

.ball-scale-multiple > div:nth-child(3) {
  -webkit-animation-delay: -0.2s;
  animation-delay: -0.2s;
}

.ball-scale-multiple > div {
  position: absolute;
  left: -30px;
  top: 0;
  opacity: 0;
  margin: 0;
  width: 60px;
  height: 60px;
  -webkit-animation: ball-scale-multiple 1s 0s linear infinite;
  animation: ball-scale-multiple 1s 0s linear infinite;
}
@keyframes ball-scale-multiple {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
  }

  5% {
    opacity: 1;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}
```
### 上下划线同步右滑
```html
<span>Bars</span>
```
```css
span {
  position: relative;
}

span::before, span::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #3cefff;
  transform-origin: center right;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}

span::before {
  top: 0;
}

span::after {
  bottom: 0;
}

span:hover::before, span:hover::after {
  transform-origin: center left;
  transform: scaleX(1);
}
```
### 上下划线一左一右滑
```html
<span>Bars</span>
```
```css
span {
  position: relative;
}

span::before, span::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #fc2f70;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}

span::before {
  top: 0;
  transform-origin: center right;
}

span:hover::before {
  transform-origin: center left;
  transform: scaleX(1);
}

span::after {
  bottom: 0;
  transform-origin: center left;
}

span:hover::after {
  transform-origin: center right;
  transform: scaleX(1);
}
```
### 上下划线同步从中间向两边扩展
```html
<span>Bars</span>
```
```css
span {
  position: relative;
}

span::before, span::after {
  content: '';
  position: absolute;
  left: 50%;
  width: 100%;
  height: 2px;
  background-color: #3cefff;
  transform-origin: center;
  transform: translateX(-50%) scaleX(0);
  transition: transform 0.4s ease;
}

span::before {
  top: 0;
}

span::after {
  bottom: 0;
}

span:hover::before, span:hover::after {
  transform: translateX(-50%) scaleX(1);
}
```
### 高亮1(相当于背景右滑效果)
```html
<span>Highlight</span>
```
```css
span {
  position: relative;
  z-index: 1;
}

span::before {
  content: '';
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: -0.25em;
  right: -0.25em;
  background-color: hsla(341, 97%, 59%, 0.75);
  transform-origin: center right;
  transform: scaleX(0);
  transition: transform 0.2s ease-in-out;
}

span:hover::before {
  transform: scaleX(1);
  transform-origin: center left;
}
```
### 高亮2(相当于背景上滑效果)
```html
<span>Highlight</span>
```
```css
span {
  position: relative;
  z-index: 1;
}

span::before {
  content: '';
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: -0.25em;
  right: -0.25em;
  background-color: #fc2f70;
  transform-origin: bottom center;
  transform: scaleY(0.1);
  transition: all 0.1s ease-in-out;
}

span:hover::before {
  transform: scaleY(1);
  background-color: hsla(341, 97%, 59%, 0.75);
}
```
### 上划线右滑
```html
<span>Overline</span>
```
```css
span {
  position: relative;
}

span::before {
  content: '';
  position: absolute;
  top: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #3cefff;
  transform-origin: bottom right;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}

span:hover::before {
  transform-origin: bottom left;
  transform: scaleX(1);
}
```
### 上划线中间向两边扩展
```html
<span>Overline</span>
```
```css
span {
  position: relative;
}

span::before {
  content: '';
  position: absolute;
  top: -2px;
  left: 50%;
  width: 100%;
  height: 2px;
  opacity: 0;
  background-color: #fc2f70;
  transform-origin: center;
  transform: translate(-50%, 0) scaleX(0);
  transition: all 0.3s ease-in-out;
}

span:hover::before {
  transform: translate(-50%, 0) scaleX(1);
  opacity: 1;
}
```
### 块两边左右划线同时向上滑
```html
<span>Pillars</span>
```
```css
span {
  position: relative;
}

span::before, span::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #3cefff;
  transform-origin: center top;
  transform: scaleY(0);
  transition: transform 0.5s ease;
}

span::before {
  left: -8px;
}

span::after {
  right: -8px;
}

span:hover::before, span:hover::after {
  transform-origin: center bottom;
  transform: scaleY(1);
}
```
### 块两边左右划线一上一下滑动
```html
<span>Pillars</span>
```
```css
span {
  position: relative;
}

span::before, span::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #fc2f70;
  transform: scaleY(0);
  transition: transform 0.5s ease;
}

span::before {
  left: -8px;
  transform-origin: center top;
}

span:hover::before {
  transform-origin: center bottom;
  transform: scaleY(1);
}

span::after {
  right: -8px;
  transform-origin: center bottom;
}

span:hover::after {
  transform-origin: center top;
  transform: scaleY(1);
}
```
### 块两边左右划线从中间向两边扩展
```html
<span>Pillars</span>
```
```css
span {
  position: relative;
}

span::before, span::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #fc2f70;
  transform-origin: center;
  transform: scaleY(0);
  transition: transform 0.5s ease;
}

span::before {
  left: -8px;
}

span::after {
  right: -8px;
}

span:hover::before, span:hover::after {
  transform: scaleY(1);
}
```
### 删除线
```html
<span>Strikethrough</span>
```
```css
span {
  position: relative;
}

span::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 3px;
  background-color: #fc2f70;
  transform-origin: center right;
  transform: scaleX(0) translateY(-50%);
  transition: transform 0.3s ease;
}

span:hover {
  color: hsla(0, 0%, 30%, 0.8);
}

span:hover::before {
  transform-origin: center left;
  transform: scaleX(1) translateY(-50%);
}
```
### 下划线样式1(默认不显示)
```html
<span>Underline</span>
```
```css
span {
  position: relative;
}

span::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #3cefff;
  transform-origin: bottom right;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}

span:hover::before {
  transform-origin: bottom left;
  transform: scaleX(1);
}
```
### 下划线样式2(默认显示)
```html
<span>Underline</span>
```
```css
span {
  position: relative;
}

span::before {
  content: '';
  position: absolute;
  height: 2px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #3cefff;
  transform-origin: bottom left;
  transform: scaleX(1);
  transition: transform 0.3s ease-in-out;
}

span:hover::before {
  transform: scaleX(0);
  transform-origin: bottom right;
}
```
### 下划线样式3(从中间向两边扩展)
```html
<span>Underline</span>
```
```css
span {
  position: relative;
}

span::before {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: #fc2f70;
  transform-origin: center;
  transform: translate(-50%, 0) scaleX(0);
  transition: transform 0.3s ease-in-out;
}

span:hover::before {
  transform: translate(-50%, 0) scaleX(1);
}
```