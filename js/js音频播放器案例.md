```html

<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>音乐播放器</title>
  <style>
    progress {
      height: 8px;
      width: 200px;
      background-color: red;
    }

    /*兼容性写法 chrome和safari是webkit内核*/
    /*表示未完成进度的颜色*/
    progress::-webkit-progress-bar {
      background-color: red;
    }

    /*表示已完成的进度颜色*/
    progress::-webkit-progress-value {
      background-color: green;
    }

    /*兼容性写法，兼容firefox浏览器*/
    /*表示已完成的进度颜色*/
    progress::-moz-progress-bar {
      background-color: green;
    }

    .corver {
      width: 300px;
      height: 300px;
      border: 2px solid rgba(0, 0, 0, 0.3);
      border-radius: 50%;
      overflow: hidden;
    }

    .corver img {
      width: 100%;
      height: 100%;
    }

    /* 
      1、点击播放/暂停按钮对动画进行 开始或者暂停，
      2、点击 上一曲/下一曲 按钮对动画进行重置
      3、动画的类名只要不变，动画不会被重置，切换类名动画会被重置 
    */
    .play {
      animation: xz 10s linear infinite;
    }

    @keyframes xz {
      from {
        transform: rotate(0);
      }

      to {
        transform: rotate(360deg);
      }
    }

    .replay {
      animation: rexz 10s linear infinite;
    }

    @keyframes rexz {
      from {
        transform: rotate(0);
      }

      to {
        transform: rotate(360deg);
      }
    }

    .pause {
      animation-play-state: paused;
    }
  </style>
</head>

<body>
  <audio></audio>
  <button type="button" onclick="play()">播放</buttont>
    <button type="button" onclick="prev()">上一首</button>
    <button type="button" onclick="next()">下一首</button>
    <button type="button" onclick="volumeDown()">音量-</button>
    <button type="button" onclick="volumeUp()">音量+</button>
    <!--显示歌手名及歌曲名-->
    <h1 class="name"></h1>
    <!--显示音量-->
    <div class="volume">
      <progress value="0" max="1"></progress>
      <span></span>
    </div>
    <!--显示播放时间即总时间时间-->
    <div class="time">
      <progress value="0" max="1"></progress>
      <span></span>
    </div>
    <!--显示封面图片-->
    <br>
    <div class="corver play pause">
      <img alt="">
    </div>
    <script>
      var audio = document.querySelector('audio')
      var vSpan = document.querySelector('.volume span')
      var vProgress = document.querySelector('.volume progress')
      var tSpan = document.querySelector('.time span')
      var tProgress = document.querySelector('.time progress')
      var h1 = document.querySelector('.name')
      var img = document.querySelector('.corver img')
      var corverBox = document.querySelector('.corver');
      var playBtn = document.querySelector('button');


      // 创建歌曲列表
      var list = [{
        name: '桥边姑娘',
        singer: '海伦',
        src: 'http://jinxizhen.gitee.io/your_music/src/qiaobianguniang.mp3',
        cover: 'http://img1.kwcdn.kuwo.cn/star/albumcover/240/48/79/1272165134.jpg'
      }, {
        name: '爸爸妈妈',
        singer: '李荣浩',
        src: 'http://jinxizhen.gitee.io/your_music/src/babamama.mp3',
        cover: 'http://img1.kwcdn.kuwo.cn/star/albumcover/240/25/72/3579948989.jpg'
      }, {
        name: '林中鸟',
        singer: '葛林',
        src: 'http://jinxizhen.gitee.io/your_music/src/linzhongniao.mp3',
        cover: 'http://img1.kwcdn.kuwo.cn/star/albumcover/240/72/72/4175845687.jpg'
      }];
      // 表示是第几首歌曲
      var index = 0

      // 加载音频
      loadAudio();
      function loadAudio() {
        var song = list[index];
        h1.innerHTML = song.name + '-' + song.singer;
        img.src = song.cover;
        audio.src = song.src;
      }


      // 1、播放/暂停的控制
      function play() {
        if (audio.paused) {
          audio.play();
          corverBox.classList.remove('pause');
        } else {
          audio.pause();
          corverBox.classList.add('pause');
        }
      }

      // 监听播放事件
      audio.onplaying = function () {
        playBtn.innerHTML = '暂停';
      }
      // 监听暂停事件
      audio.onpause = function () {
        playBtn.innerHTML = '播放';
      }

      // 2、上一首/下一首的控制
      // 上一首
      function prev() {
        index = index == 0 ? list.length - 1 : index - 1
        loadAudio();
        setPlay();
      }

      // 下一首
      function next() {
        index = index == list.length - 1 ? 0 : index + 1;
        loadAudio();
        setPlay();
      }
      // 重置动画: 通过切换标签的类名进行动画的重置
      function setPlay() {
        audio.play();
        corverBox.classList.remove('pause');
        // 只要标签的类名变化，动画就会从头开始执行
        if (corverBox.classList.contains('play')) {
          corverBox.classList.remove('play');
          corverBox.classList.add('replay');
        } else {
          corverBox.classList.add('play');
          corverBox.classList.remove('replay');
        }
      }

      // 3、监听歌曲是否播放完毕，当歌曲播放完毕时，自动调用next方法，去播放下一首
      audio.addEventListener('ended', next);


      // 4、时间的控制
      // 监听音乐可以播放
      audio.oncanplay = setTime;
      // 监听播放时间的变化
      audio.ontimeupdate = setTime;

      // 设置时间
      function setTime() {
        if (audio.duration) {
          // console.log('当前播放时间'+audio.currentTime);
          // console.log('总的播放时间'+audio.duration);
          tProgress.value = audio.currentTime / audio.duration;
          tSpan.innerHTML = format(audio.currentTime) + '/' + format(audio.duration);
        }
      }

      // 格式化时间
      function format(second) {
        // 把数字转化为整数
        var times = parseInt(second);
        // 获取分钟数
        var minute = parseInt(times / 60);
        // 获取秒数
        var second = times % 60;
        minute = minute < 10 ? '0' + minute : minute;
        second = second < 10 ? '0' + second : second;
        return minute + ':' + second
      }


      // 5、音量的控制
      // 设置初始播放器音量,取值[0.0 ~ 1.0]
      audio.volume = 0.5;
      // console.log(audio.volume);
      setVolume();
      function setVolume() {
        vSpan.innerHTML = audio.volume.toFixed(2);
        vProgress.value = audio.volume;
      }

      // 音量+
      function volumeUp() {
        if (audio.volume <= 0.9) audio.volume += 0.1;
      }
      // 音量-
      function volumeDown() {
        if (audio.volume >= 0.1) audio.volume -= 0.1;
      }
      // 监听音量变化
      audio.onvolumechange = function () {
        setVolume();
      }

    </script>
</body>

</html>
```