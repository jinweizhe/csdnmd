var list = document.querySelector('.list');
var indicators = document.querySelectorAll('.indicator li');
var nextBtn = document.querySelector('.next');
var prevBtn = document.querySelector('.prev');
var box = document.querySelector('#box');

var index = 0; // 显示的图片的索引值，默认是0

// index =     0     1       2
// list.left = 0     -600    -1200

function showImg() {
	console.log('index=', index);
	// 隐藏所有图片和熄灭所有的指示灯
	for (var i = 0; i < indicators.length; i++) {
		// imgs[i].classList.remove('current');
		indicators[i].classList.remove('active');
	}
	// 根据索引值显示图片和点亮指示灯
	// imgs[index].classList.add('current');
  indicators[index].classList.add('active');
  
  list.style.left = -index * 600 + 'px';
}
// 控制下一张图片：让index自增，index有个最大值：length-1
function next() {
	index++;
	// 当index的值超过最大索引值，让index从0开始
	if (index >= indicators.length) {
		// index == 5
		index = 0;
	}
	showImg();
}
// 控制上一张图片：让index自减，index有个最小值：0
function prev() {
	index--;
	// 当index的值小于0的时候，让index从最大索引值开始
	if (index == -1) {
		// index = 4;
		index = indicators.length - 1;
	}
	showImg();
}

// 1、自动播放: 自动播放只会让index增加，相当于点击了下一张的按钮，直接调用next
var timer = setInterval(next, 1000);
// 鼠标移入bannerBox暂停自动播放，移出bannerBox恢复自动播放
box.onmouseover = function () {
	clearInterval(timer); // 移除定时器，暂停播放
	timer = null; // 移除定时器之后，把timer置空或者归零
};
box.onmouseout = function () {
	// 在添加定时器之前，先判断timer是否有值，如果有值，说明定时器已经添加，为了避免重复添加定时器，添加一个判断
	if (timer) {
		return;
	}
	timer = setInterval(next, 1000); // 重新添加定时器，恢复自动播放
};

// 2、点击按钮上一张和下一张
nextBtn.onclick = next;
prevBtn.onclick = prev;

// 3、控制指示灯: 鼠标点击指示灯，可以直接获取一个指示灯的索引值，这个索引值就是index的值
for (var i = 0; i < indicators.length; i++) {
	indicators[i].indicatorIndex = i;
	indicators[i].onmouseover = function () {
		// console.log(this.indicatorIndex);
		index = this.indicatorIndex;
		showImg();
	};
}
