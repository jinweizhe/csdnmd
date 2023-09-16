```html
                       <scroll-view scroll-y="true" :scroll-top="scrollTop" class="scroll-y" @scroll="scroll">
                       <!-- 这里的核心代码就是scroll-view标签 -->
                       <!-- 需要滚动的区域 -->
							<view v-for="(item,index) in list2" :key="index" ref="viewss">
								<text class="t">{{item.name}}</text>
								<ul class="u2">
									<li @click="tiao(item.Id)" v-for="(item, index) in list3.filter(item2=>{
											return item2.type_two==item.name
										})" :key="index">
										<img :src="item.imageUrl" alt="" />
										<view>
											<h4>{{ item.title }}</h4>
											<p>
												<span>{{ "¥" + item.priceStr }}</span>
												<span v-html="item.mack"></span>
											</p>
										</view>
									</li>
								</ul>
							</view>
							<!-- 需要滚动的区域 -->
							
						</scroll-view>
```
js部分
```js
<script>
export default {
		data() {
			return {
				scrollTop: 0,  //这个是给滚动的高度绑定的值
				old: {
					scrollTop: 0   //这是动态滚动的高度
				}
			}
		},
		methods: {
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop  //这个是滚动的高度,修改它即可指定滚动的位置
			}
	}
</script>
```