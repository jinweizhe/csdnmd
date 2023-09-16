# gitee的安装和使用(一)
### 先提供一下代码
```js
//初始化
git init

//查看状态
git status

//拉取仓库
git clone (SSH或者https协议)

//添加项目到gitee
git config user.name "jinweizhexj"
git config user.email "2827646353@qq.com"
git add .
git commit -m""
//已经拉取仓库直接添加
git push origin master

//未拉取仓库需要添加到远程仓库
git remote add origin git@gitee.com:jinweizhexj/jdk1.8.git
git push -u origin "master"


//添加项目到GitHub上
git config user.name "jinweizhe"
git config user.email "2256068859@qq.com"
　1、git init   
    2、git add .
    3、git commit -m "提交描述"
    4、git remote add origin 你的仓库地址
    5、git push -u origin master    
//最后一步如果报错(error: failed to push some refs to 'https://github.com/bluetata/),是因为
远程库与本地库不一致造成的，在hint中也有提示把远程库同步到本地库就可以了
使用git pull --rebase origin master(该命令的意思是把远程库中的更新合并到
（pull=fetch+merge）本地库中)运行完再执行第五步即可提交


//创建切换合并分支
//查看分支
git branch	
//创建分支
git branch 分支名
//切换分支
git checkout 分支名
//添加项目
git add .

//git add .如果报错LF will be replaced by CRLF，可以用允许提交来解决
#拒绝提交包含混合换行符的文件
git config --global core.safecrlf true   
#允许提交包含混合换行符的文件
git config --global core.safecrlf false   
#提交包含混合换行符的文件时给出警告
git config --global core.safecrlf warn

//提交项目
git commit -m""
git push origin 是要使用的分支

//合并分支
//先切换合并到哪一条分支就切换到哪里
git checkout 要合并的主分支
git merge 要合并的小分支
git push origin 合并的主分支

//删除本地分支
git branch -d 分支名
//删除远程仓库的分支
git push origin :分支名
```
## 接下来开始讲解
## 1.创建账号
## 2.添加公钥
#### 点击设置
![点击设置](https://img-blog.csdnimg.cn/f2a49f9a32bd4231a0e259a1c5055922.png)

#### 点击左侧SSH公钥，再点击右边的“怎样生成公钥”的链接
![在这里插入图片描述](https://img-blog.csdnimg.cn/d71d77560dc7424e9442d38ab27442e0.png)
#### 根据步骤去生成公钥和测试是否成功安装
![在这里插入图片描述](https://img-blog.csdnimg.cn/126bc6aee1a9403bbb109f948f89c809.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/7e740e5eec29470b9a78c36b8008fcd9.png)
## 配置完公钥以后，我们每次克隆项目可以用SSH协议，可以进行免密，比如添加或者拉取项目每次都要密码验证，SSH就可以免密，方便了很多
## 然后点击新建仓库，建立一个仓库
![在这里插入图片描述](https://img-blog.csdnimg.cn/b9fafa1a137949fd8986abd153b72f80.png)
#### 输入一个仓库名，然后下面根据需要选择，我这里的选择如图所示
![在这里插入图片描述](https://img-blog.csdnimg.cn/67089f75dac447e6a7bbacde3db3f0f1.png)
### git和gitee配合使用，不要忘记安装git，不会安装的话网上搜一下

## 创建完仓库后的界面(第一次使用必须shift 右键打开git的git bash here，输入下面代码和下图前两个代码，必须先运行下面的初始化，用户名和邮箱的代码，不然git不知道是谁)
```cmd
git init    --初始化
```


![在这里插入图片描述](https://img-blog.csdnimg.cn/c30361edd8ab49448631a409fd5ef784.png)
#### 远程仓库下载克隆到本地
###### 复制https或者SSH地址（如果配置完公钥的话建议复制SSH免密，没有配置公钥的用HTTPS，每次拉取需要密码验证）![](https://img-blog.csdnimg.cn/a46e4aef9c824d3bb8797ea20de3acef.png)


 ###### 新建文件夹，然后shift 右键打开git的git bash here，输入下面代码，我这里地址是SSH
 ```cmd
 git clone git@gitee.com:jinweizhexj/test2.git         --克隆仓库
 ```
###### 然后打开文件夹查看是否有远程仓库
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/5d4e3c405b384859b3fc1190ed84fd0b.png)
###### 进入仓库，在.git同级的地方创建我们的文件，比如我这里新建文本文档

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/6f29b4224b614bfb8bc7ea051a80c486.png)
###### 在git远程仓库同步代码，切记，在.git同级重新打开命令行，也就是说仓库的下一级目录下
![在这里插入图片描述](https://img-blog.csdnimg.cn/83c48cbfb75e49bd96ef2068a3fcfdaa.png)

```cmd
git status      --查看状态,只是查看，没啥用处，用不用都行
```
```cmd
git init   初始化
```
```cmd
git config user.name "gitee/gitHub的用户名称"
```
```cmd
git config user.email "你的邮箱"
```
```cmd
git add .         --添加仓库，注意.前面有空格
```
```cmd
git commit -m"备注信息"     --提交本地仓库,""里面随便填，是备注
```
```cmd
git push origin master       --和码云的项目进行连接
```
#### 刷新仓库，会发现我们的123.txt项目已经进来了![在这里插入图片描述](https://img-blog.csdnimg.cn/340142c1b36142fead75df1a7ec5c876.png)
#### 对文本进行一下改变，怎么同步到本地仓库？
![在这里插入图片描述](https://img-blog.csdnimg.cn/47839e710fbf4acd90eb8102f9ff8e7b.png)
###### 使用一下代码
```cmd
git pull origin master      --目的是在写代码之前, 拉去码云上最新的代码
```
###### 此时发现仓库代码也拉取下来了
![在这里插入图片描述](https://img-blog.csdnimg.cn/134ecd64b3054b6d87c7d82ad6c48be7.png)
## 如果本地多出别的文件怎么解决呢？
比如创建一个新的文本文件，并且仓库内容也有修改怎么办？
![在这里插入图片描述](https://img-blog.csdnimg.cn/efd29575a4af43beb2a8d15c46ca0b4e.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/1e8b6846da9245d7a80d8862977d6b28.png)

#### 那么记住顺序，先执行刚刚的拉取命令，再执行添加命令，重新添加即可(原因是本地仓库版本没有码云高)
```cmd
git pull origin master      --目的是在写代码之前, 拉去码云上最新的代码
```
```cmd
git status      --查看状态,只是查看，没啥用处，用不用都行
```
```cmd
git add .         --添加仓库，注意.前面有空格，代表所有文件，如果指定文件，把.换成文件名带后缀
```
```cmd
git commit -m"备注信息"     --提交本地仓库,""里面随便填，是备注
```
```cmd
git push origin master       --和码云的项目进行连接
```
#### 此时码云的更改信息已经同步到本地，本地新郑的456.txt文本也同步到码云
![在这里插入图片描述](https://img-blog.csdnimg.cn/294e76b4a2e745549ed8997b23cd71dc.png)
发一下码云仓库的关系
![在这里插入图片描述](https://img-blog.csdnimg.cn/cac3822dce044219a383348f151438b9.png)
# 下面讲一下版本追溯
### 点击四次提交那里
![在这里插入图片描述](https://img-blog.csdnimg.cn/a70c70211f264bbd9ae23760f73bfe1a.png)
### 可以看到我们提交过的所有版本
![在这里插入图片描述](https://img-blog.csdnimg.cn/e82c12410a6b4303af2d6f508875a1d1.png)
### 我们复制一下后面这七位数的编码，我这里复制初始的那一个，输入下面这个命令
```cmd
git reset --hard ad2857becb807a82c3553a99a4bb3ff9d83749fd
```
### 复制完可以发现是个地址，他的效果等同于刚刚那七个编码，只是这个地址的前七位
```cmd
git reset --hard ad2857b         --两个效果相同，随便运行一个就行
```
然后会发现，本地仓库没文件了，只剩下刚刚我们克隆的版本，这样的话就实现了历史版本的克隆。如果文件在仓库了，备注切记一定写清楚，此文件以后不管是否删除，也能找回，不用担心丢失，建议开发项目的时候，每天都提交一次

# 分支管理
## 在这里master就是一个分支
![在这里插入图片描述](https://img-blog.csdnimg.cn/f866432232d54c45bd32330ea5eec224.png)
#### 运行下面，查看分支
```cmd
git branch			--查看分支
```
#### 运行下面，创建分支
```cmd
git branch fenzhi       --后面是分支名，随便填
```
创建完以后再去查看，效果图
![在这里插入图片描述](https://img-blog.csdnimg.cn/1da6d3b7a7b44a1392d66cb976ab7e4c.png)
master前面的*代表当前分支，然后运行下面命令切换到我们刚刚创建的fenzhi
```cmd
git checkout fenzhi
```
#### 可以看后面的括号内已经切换分支了
![在这里插入图片描述](https://img-blog.csdnimg.cn/f3e048239b974f36a6f01cc99f100d06.png)
#### 重新添加个项目，过程省略了，就是重复add那个步骤，但是有一点不一样推送内容到码云分支更换为fenzhi，如下：
```cmd
git push origin fenzhi         --后面就是使用的分支
```
#### 此时打开码云会发现,分支已经多了一个
![在这里插入图片描述](https://img-blog.csdnimg.cn/a0ea4c4a5ded4e29b295748c60088d23.png)
#### 当我们选择fenzhi的时候，刚刚添加的项目就出来了
![在这里插入图片描述](https://img-blog.csdnimg.cn/ddeea82c316a41e0a3f18191798ecc3a.png)
### 这里就完成了分支的创建的选择
## 接下来做一下两个分支的合并
### 运行下面命令
```cmd
git merge master      --后面是要合并的分支名
```
###### 此时会发现两个分支最新的项目已经合并到本地了
###### 然后在推送到码云某一个分支进行查看本地的项目即可
# 总结，添加gitee和添加GitHub项目步骤
```
//初始化
git init

//查看状态
git status

//拉取仓库
git clone (SSH或者https协议)

//添加项目到gitee
git config user.name "jinweizhexj"
git config user.email "2827646353@qq.com"
git add .
git commit -m""
//已经拉取仓库直接添加
git push origin master

//未拉取仓库需要添加到远程仓库
git remote add origin git@gitee.com:jinweizhexj/jdk1.8.git
git push -u origin "master"


//添加项目到GitHub上
git config user.name "jinweizhe"
git config user.email "2256068859@qq.com"
　1、git init   
    2、git add .
    3、git commit -m "提交描述"
    4、git remote add origin 你的仓库地址
    5、git push -u origin master    
//最后一步如果报错(error: failed to push some refs to 'https://github.com/bluetata/),是因为
远程库与本地库不一致造成的，在hint中也有提示把远程库同步到本地库就可以了
使用git pull --rebase origin master(该命令的意思是把远程库中的更新合并到
（pull=fetch+merge）本地库中)运行完再执行第五步即可提交


//创建切换合并分支
//查看分支
git branch	
//创建分支
git branch 分支名
//切换分支
git checkout 分支名
//添加项目
git add .

//git add .如果报错LF will be replaced by CRLF，可以用允许提交来解决
#拒绝提交包含混合换行符的文件
git config --global core.safecrlf true   
#允许提交包含混合换行符的文件
git config --global core.safecrlf false   
#提交包含混合换行符的文件时给出警告
git config --global core.safecrlf warn

//提交项目
git commit -m""
git push origin 是要使用的分支

//合并分支
//先切换合并到哪一条分支就切换到哪里
git checkout 要合并的主分支
git merge 要合并的小分支
git push origin 合并的主分支

//删除本地分支
git branch -d 分支名
//删除远程仓库的分支
git push origin :分支名
```
# 配置公钥
### 生成公钥
```cmd
ssh-keygen -t rsa
```
然后按三次回车，具体配置可以看我第一个getee使用里面的内容