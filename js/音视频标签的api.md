# 概述

`<video>`元素用来加载视频，是`HTMLVideoElement`对象的实例。`<audio>`元素用来加载音频，是`HTMLAudioElement`对象的实例。而`HTMLVideoElement`和`HTMLAudioElement`都继承了`HTMLMediaElement`，所以这两个 HTML 元素有许多共同的属性和方法，可以放在一起介绍。

理论上，这两个 HTML 元素直接用`src`属性指定媒体文件，就可以使用了。

```HTML
<audio src="background_music.mp3"/>
<video src="news.mov" width=320 height=240/>
```

注意，`<video>`元素有`width`属性和`height`属性，可以指定宽和高。`<audio>`元素没有这两个属性，因为它的播放器外形是浏览器给定的，不能指定。

实际上，不同的浏览器支持不同的媒体格式，我们不得不用`<source>`元素指定同一个媒体文件的不同格式。

```HTML
<audio id="music">
  <source src="music.mp3" type="audio/mpeg">  
  <source src="music.ogg" type='audio/ogg; codec="vorbis"'>
</audio>
```

浏览器遇到支持的格式，就会忽略后面的格式。

这两个元素都有一个`controls`属性，只有打开这个属性，才会显示控制条。注意，`<audio>`元素如果不打开`controls`属性，根本不会显示，而是直接在背景播放。

# HTMLMediaElement 接口

`HTMLMediaElement`并没有对应的 HTML 元素，而是作为`<video>`和`<audio>`的基类，定义一些它们共同的属性、方法和事件。

## 属性

- audioTracks：返回一个类似数组的对象，表示媒体文件包含的音频轨道的数量。
- **autoplay**：布尔值，表示媒体文件是否自动播放，等同于 HTML 属性`autoplay`。
- buffered：返回一个 TimeRanges 对象，表示浏览器缓冲的内容。该对象的`length`属性返回缓存里面有多少段内容，`start(rangeId)`方法返回指定的某段内容（从0开始）开始的时间点，`end()`返回指定的某段内容结束的时间点。该属性只读。
- controls：布尔值，表示是否显示媒体文件的控制条，对应 HTML 属性`controls`。
- controlsList：返回一个类似数组的对象，表示是否显示控制栏的某些控件。该对象包含三个可能的值：`nodownload`、`nofullscreen`和`noremoteplayback`。该属性只读。
- crossOrigin：字符串，表示跨域请求时是否附带用户信息（比如 Cookie），对应 HTML 属性`crossorigin`。该属性只有两个可能的值：`anonymous`和`use-credentials`。
- currentSrc：字符串，表示当前正在播放的媒体文件的绝对路径。例如当程序会根据用户显示器分辨率选择不同媒体文件时会用到这个属性，显然它是只读的。
- **currentTime**：浮点数，以秒为单位返回当前媒体元素的播放时间。设置这个属性会改变媒体元素当前播放位置。
- defaultMuted：布尔值，表示默认是否静音，对应 HTML 属性`muted`。
- defaultPlaybackRate：浮点数，表示默认的播放速度，默认是1.0。
- disableRemotePlayback：布尔值，是否允许远程回放，即远程回放的时候是否会有工具栏。
- **duration**：浮点数，以秒为单位返回当前媒体元素的时间长度。如果当前没有媒体文件，该属性返回0。该属性只读。 如果媒体数据可用但长度未知，则此值为NaN。 如果媒体流式传输且没有预定义长度，则值为Inf。
- ended：布尔值，表示当前媒体文件是否已经播放结束。该属性只读。
- error：返回最近一次报错的错误对象，如果没有报错，返回`null`。
- **loop**：布尔值，表示媒体文件是否会循环播放，对应 HTML 属性`loop`。
- muted：布尔值，表示媒体元素是否被静音
- networkState：当前网络状态，共有四个可能的值。0表示没有数据；1表示媒体元素处在激活状态，但是还没开始下载；2表示下载中；3表示没有找到媒体文件。
- **paused**：布尔值，表示媒体文件是否处在暂停状态。该属性只读。
- **playbackRate**：浮点数，设置媒体文件的播放速度，这用于实现让用户控制快放、慢放等。1.0是正常速度。负值**不可以**实现倒播。
- played：返回一个 TimeRanges 对象，表示播放的媒体内容。该属性只读。
- preload：字符串，表示应该预加载哪些内容，可能的值为`none`、`metadata`和`auto`。
- readyState：整数，表示媒体文件的准备状态，可能的值为0（没有任何数据）、1（已获取元数据）、2（可播放当前帧，但不足以播放多个帧）、3（可以播放多帧，至少为两帧）、4（可以流畅播放）。该属性只读。
- seekable：返回一个 TimeRanges 对象，表示一个用户可以搜索的媒体内容范围。该属性只读。
- seeking：布尔值，表示媒体文件是否正在寻找新位置。该属性只读。
- **src**：字符串，表示媒体文件所在的 URL，对应 HTML 属性`src`。
- srcObject：返回`src`属性对应的媒体文件资源，可能是`MediaStream`、`MediaSource`、`Blob`或`File`对象。直接指定这个属性，就可以播放媒体文件。
- textTracks：返回一个类似数组的对象，包含所有文本轨道。该属性只读。
- videoTracks：返回一个类似数组的对象，包含多有视频轨道。该属性只读。
- **volume**：浮点数，可设置媒体播放时的音量。0.0 表示静音，1.0 表示最大音量。

## 方法

- addTextTrack()：添加文本轨道（比如字幕）到媒体文件。
- captureStream()：返回一个 MediaStream 对象，用来捕获当前媒体文件的流内容。
- canPlayType()：该方法接受一个 MIME 字符串作为参数，用来判断这种类型的媒体文件是否可以播放。该方法返回一个字符串，有三种可能的值，`probably`表示似乎可播放，`maybe`表示无法在不播放的情况下判断是否可播放，空字符串表示无法播放。
- fastSeek()：该方法接受一个浮点数作为参数，表示指定的时间（单位秒）。该方法将媒体文件移动到指定时间。
- **load()**：重新加载媒体文件。
- **pause()**：暂停播放。该方法没有返回值。
- **play()**：开始播放。该方法返回一个 Promise 对象，当媒体成功开始播放时被解决（resolved）。当播放因为任何原因失败时，这个 promise 被拒绝（rejected）。

下面是`play()`方法的一个例子。

```JS
var myVideo = document.getElementById('myVideoElement');

myVideo
.play()
.then(() => {
  console.log('playing');
})
.catch((error) => {
  console.log(error);
});
```

## 事件

- abort：停止加载媒体文件时触发，通常是用户主动要求停止下载。
- **canplay**：已经加载了足够的数据，可以开始播放时触发，后面可能还会请求数据。
- canplaythrough：已经加载了足够的数据，可以一直播放时触发，后面不需要继续请求数据。
- durationchange：`duration`属性变化时触发。
- emptied：由于`error`或`abort`事件导致`networkState`属性变成无法获取数据时触发。
- **ended**：媒体文件播放完毕时触发。
- error：网络或其他原因导致媒体文件无法加载时触发。
- loadeddata：第一帧数据加载完成后触发。
- loadedmetadata：媒体文件元数据加载成功时触发。


- loadstart：开始加载媒体文件时触发。
- **pause**：调用`pause()`方法、播放暂停时触发。
- **play**：调用`play()`方法时或自动播放（`autoplay`为true）启动时触发。如果已经加载了足够的数据，这个事件后面会紧跟`playing`事件，否则会触发`waiting`事件。
- playing：媒体开始播放时触发（之前被暂停或者因为数据缺乏被暂缓）。
- progress：媒体文件加载过程中触发，大概是每秒触发2到8次。
- suspend：已经缓冲了足够的数据，暂时停止下载时触发。
- stalled：尝试加载数据，但是没有数据返回时触发。
- ratechange：播放速度或默认的播放速度变化时触发。
- seeked：`seeking`属性变回`false`时触发。
- seeking：脚本或者用户要求播放某个没有缓冲的位置，播放停止开始加载数据时触发。此时，`seeking`属性返回`true`。

- stalled：当用户代理尝试获取媒体数据时会触发该事件，但数据意外未出现。
- suspend：当媒体数据加载暂停时触发该事件。


- **timeupdate**：`currentTime`属性变化时触发，用于监听播放时间的变化，这个事件的触发频率由系统决定，但是会保证每秒触发4-66次。
- **volumechange**：音量变化时触发。
- waiting：由于没有足够的缓存数据，无法播放或播放停止时触发。一旦缓冲数据足够开始播放，后面就会紧跟`playing`事件。

# HTMLVideoElement 接口

`HTMLVideoElement`接口代表了`<video>`元素。这个接口继承了`HTMLMediaElement`接口，并且有一些自己的属性和方法。

## 属性

- height：字符串，表示视频播放区域的高度（单位像素），对应 HTML 属性`height`。
- width：字符串，表示视频播放区域的宽度（单位像素），对应 HTML 属性`width`。
- videoHeight：该属性只读，返回一个整数，表示视频文件自身的高度（单位像素）。
- videoWidth：该属性只读，返回一个整数，表示视频文件自身的宽度（单位像素）。
- poster：字符串，表示一个图像文件的 URL，用来在无法获取视频文件时替代显示，对应 HTML 属性`poster`。

## 方法

- getVideoPlaybackQuality()：返回一个对象，包含了当前视频回放的一些数据。

# HTMLAudioElement 接口

`HTMLAudioElement`接口代表了`<audio>`元素。

该接口继承了`HTMLMediaElement`，但是没有定义自己的属性和方法。浏览器原生提供一个`Audio()`构造函数，返回的就是`HTMLAudioElement`实例。

```JS
var song = new Audio(URLString);
```

`Audio()`构造函数接受一个字符串作为参数，表示媒体文件的 URL。如果省略这个参数，可以稍后通过`src`属性指定。

生成`HTMLAudioElement`实例以后，不用插入 DOM，可以直接用`play()`方法在背景播放。

```JS
var a = new Audio();
if (a.canPlayType('audio/wav')) {
  a.src = 'soundeffect.wav';
  a.play();
}
```