# 命令行提示符的使用

## 命令提示符是什么？

命令提示符是在操作系统中，提示进行命令输入的一种工作提示符。在windows环境下，命令行程序为cmd.exe，是一个32位的命令行程序，微软Windows系统基于Windows上的命令解释程序，通过CMD可以对电脑进行一些操作：关机、文件操作等。

![image-20211122104304113](https://gitee.com/Jinxizhen/pic_resource/raw/master/images/image-20211122104304113.png)

## 如何打开命令提示符

方式一：使用Win+R弹出运行框，在运行框输入cmd，按下回车即可。

![image-20211122104448969](https://gitee.com/Jinxizhen/pic_resource/raw/master/images/image-20211122104448969.png)

方式二：在任意**文件夹**的地址栏输入cmd，然后回车即可。

![image-20211122104506148](https://gitee.com/Jinxizhen/pic_resource/raw/master/images/image-20211122104506148.png)

## 常用命令提示符

一、自动关机命令
shutdown -s -t 300	#表示300秒后自动关机
shutdown -a		#可取消定时关机
shutdown -r -t 300	#表示300秒后自动重启

二、文件夹创建及查看
dir             	#查询当前目录中的所有内容
md test		#创建test文件夹
cd test    	 #进入test文件夹   cd 目录路径
cd ..              #表示返回上层目录，不可跨盘符跳转
c：            	#切换盘符 c: 是切换到c盘；d: 是切换到d盘
cls             	#清屏  clear

# Git是什么

Git是什么？

Git是目前世界上最先进的**分布式**版本控制系统（没有之一）。

Git有什么特点？

简单来说就是：高端大气上档次！

那什么是**版本控制**系统？

如果你用Microsoft Word写过长篇大论，那你一定有这样的经历：

想删除一个段落，又怕将来想恢复找不回来怎么办？有办法，先把当前文件“另存为……”一个新的Word文件，再接着改，改到一定程度，再“另存为……”一个新文件，这样一直改下去，最后你的Word文档变成了这样：

情景一：毕业设计论文的制作

![image-20211122104922231](https://gitee.com/Jinxizhen/pic_resource/raw/master/images/image-20211122104922231.png)

情境二：财务工作人员

![image-20211122104950809](https://gitee.com/Jinxizhen/pic_resource/raw/master/images/image-20211122104950809.png)

过了一周，你想找回被删除的文字，但是已经记不清删除前保存在哪个文件里了，只好一个一个文件去找，真麻烦。

看着一堆乱七八糟的文件，想保留最新的一个，然后把其他的删掉，又怕哪天会用上，还不敢删，真郁闷。

更要命的是，有些部分需要你的财务同事帮助填写，于是你把文件Copy到U盘里给她（也可能通过Email发送一份给她），然后，你继续修改Word文件。一天后，同事再把Word文件传给你，此时，你必须想想，发给她之后到你收到她的文件期间，你作了哪些改动，得把你的改动和她的部分合并，真困难。

如果有一个软件，不但能自动帮我记录每次文件的改动，还可以让同事协作编辑，这样就不用自己管理一堆类似的文件了，也不需要把文件传来传去。如果想查看某次改动，只需要在软件里瞄一眼就可以，岂不是很方便？
这个软件用起来就应该像这个样子，能记录每次文件的改动：

![image-20211122104846962](https://gitee.com/Jinxizhen/pic_resource/raw/master/images/image-20211122104846962.png)

这样，你就结束了手动管理多个“版本”的史前时代，进入到版本控制的21世纪。

# Git的诞生

很多人都知道，Linus在1991年创建了开源的Linux，从此，Linux系统不断发展，已经成为最大的服务器系统软件了。

Linus虽然创建了Linux，但Linux的壮大是靠全世界热心的志愿者参与的，这么多人在世界各地为Linux编写代码，那Linux的代码是如何管理的呢？

事实是，在2002年以前，世界各地的志愿者把源代码文件通过diff的方式发给Linus，然后由Linus本人通过手工方式合并代码！

你也许会想，为什么Linus不把Linux代码放到版本控制系统里呢？不是有CVS、SVN这些免费的版本控制系统吗？因为Linus坚定地反对CVS和SVN，这些**集中式**的版本控制系统不但速度慢，而且必须联网才能使用。有一些商用的版本控制系统，虽然比CVS、SVN好用，但那是付费的，和Linux的开源精神不符。

不过，到了2002年，Linux系统已经发展了十年了，代码库之大让Linus很难继续通过手工方式管理了，社区的弟兄们也对这种方式表达了强烈不满，于是Linus选择了一个商业的版本控制系统BitKeeper，BitKeeper的东家BitMover公司出于人道主义精神，授权Linux社区免费使用这个版本控制系统。

安定团结的大好局面在2005年就被打破了，原因是Linux社区牛人聚集，不免沾染了一些梁山好汉的江湖习气。开发Samba的Andrew试图破解BitKeeper的协议（这么干的其实也不只他一个），被BitMover公司发现了（监控工作做得不错！），于是BitMover公司怒了，要收回Linux社区的免费使用权。

Linus可以向BitMover公司道个歉，保证以后严格管教弟兄们，嗯，这是不可能的。实际情况是这样的：
Linus花了两周时间自己用C写了一个分布式版本控制系统，这就是Git！一个月之内，Linux系统的源码已经由Git管理了！牛是怎么定义的呢？大家可以体会一下。

Git迅速成为最流行的分布式版本控制系统，尤其是2008年，GitHub网站上线了，它为开源项目免费提供Git存储，无数开源项目开始迁移至GitHub，包括jQuery，PHP，Ruby等等。

历史就是这么偶然，如果不是当年BitMover公司威胁Linux社区，可能现在我们就没有免费而超级好用的Git了。

# 集中式VS分布式

Linus一直痛恨的CVS及SVN都是集中式的版本控制系统，而Git是分布式版本控制系统，集中式和分布式版本控制系统有什么区别呢？

先说**集中式版本控制系统，版本库是集中存放在中央服务器的**，而干活的时候，用的都是自己的电脑，所以要先从中央服务器取得最新的版本，然后开始干活，干完活了，再把自己的活推送给中央服务器。中央服务器就好比是一个图书馆，你要改一本书，必须先从图书馆借出来，然后回到家自己改，改完了，再放回图书馆。

![image-20211122105137457](https://gitee.com/Jinxizhen/pic_resource/raw/master/images/image-20211122105137457.png)

集中式版本控制系统最大的毛病就是必须联网才能工作，如果在局域网内还好，带宽够大，速度够快，可如果在互联网上，遇到网速慢的话，可能提交一个10M的文件就需要5分钟，这还不得把人给憋死啊。

分布式版本控制系统与集中式版本控制系统有何不同？

首先，**分布式版本控制系统根本没有“中央服务器”**，**每个人的电脑上都是一个完整的版本库**，这样，工作的时候，就不需要联网了，因为**版本库就在你自己的电脑上**。既然每个人电脑上都有一个完整的版本库，那多个人如何协作呢？比方说你在自己电脑上改了文件A，你的同事也在他的电脑上改了文件A，这时，你们俩之间只需把各自的修改推送给对方，就可以互相看到对方的修改了。

其次，和集中式版本控制系统相比，分布式版本控制系统的安全性要高很多，因为每个人电脑里都有完整的版本库，某一个人的电脑坏掉了不要紧，随便从其他人那里复制一个就可以了。而集中式版本控制系统的中央服务器要是出了问题，所有人都没法干活了。

在实际使用分布式版本控制系统的时候，其实很少在两人之间的电脑上推送版本库的修改，因为可能你们俩不在一个局域网内，两台电脑互相访问不了，也可能今天你的同事病了，他的电脑压根没有开机。因此，分布式版本控制系统通常也有一台充当“中央服务器”的电脑（远程仓库），但这个服务器的作用仅仅是用来方便“交换”大家的修改，没有它大家也一样干活，只是交换修改不方便而已。

![图片5](https://gitee.com/Jinxizhen/pic_resource/raw/master/images/%E5%9B%BE%E7%89%875.png)

# Git的使用

## 源代码版本管理

1、什么是源代码版本管理
       我们每一次修改或者增加新的功能都算是一个版本
       我们对每一次的修改做一次保存记录就是版本管理

2、源代码版本管理的意义
       a、如果我们的项目需要回退
       b、多人协作开发 
       c、记录整个开发流程  

3、在实际开发中，常用的源代码版本管理工具：Git和SVN

## Git安装

最早Git是在Linux上开发的，很长一段时间内，Git也只能在Linux和Unix系统上跑。不过，慢慢地有人把它移植到了Windows上。现在，Git可以在Linux、Unix、Mac和Windows这几大平台上正常运行了。

Git官网：https://git-scm.com/

https://gitforwindows.org/	

![image-20211122110817214](C:/Users/Jinxizhen/AppData/Roaming/Typora/typora-user-images/image-20211122110817214.png)

注意：第一次使用Git需要配置用户信息

```shell
git config --global user.name 用户名  	#配置git的用户名
git config --global user.email 邮箱    	#配置用户的邮箱


git config --list #检查信息是否写入成功
```

因为Git是分布式版本控制系统，所以，每个机器都必须自报家门：你的名字和Email地址。你也许会担心，如果有人故意冒充别人怎么办？这个不必担心，首先我们相信大家都是善良无知的群众，其次，真的有冒充的也是有办法可查的。

注意`git config`命令的`--global`参数，用了这个参数，表示你这台机器上所有的Git仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和Email地址。

## Git中需要理解的概念

版本库又名仓库，英文名**repository**，你可以简单理解成一个目录，这个目录里面的所有文件都可以被Git管理起来，每个文件的修改、删除，Git都能跟踪，以便任何时刻都可以追踪历史，或者在将来某个时刻可以“还原”。

在项目目录通过`git init`命令把这个目录变成Git可以管理的仓库：

### 工作区

**工作区**(Working Directory)：是我们自己创建的项目目录，存放代码的位置，可以是新建的，也可以是已经建好的项目。

### 版本库

工作区有一个隐藏目录`.git`，这个不算工作区，而是Git的版本库。

Git的版本库里存了很多东西，其中最重要的就是称为stage（或者叫index）的暂存区，还有Git为我们自动创建的第一个分支`master`，以及指向`master`的一个指针叫`HEAD`。

- **暂存区**(stage)：项目目录中文件内容修改后暂时存放的位置，用于临时存放你的改动，事实上它只是一个文件，保存即将提交的文件列表信息。
- **本地仓库**(git repository)：修改的内容提交后保存的位置，就是安全存放数据的位置，这里边有你提交的所有版本的数据。其中，HEAD 指向最新放入仓库的版本（应该是 Git 仓库中 HEAD 指向的版本）。

后面还会用到远程仓库：码云、github。![image-20211122154621221](https://gitee.com/Jinxizhen/pic_resource/raw/master/images/image-20211122154621221.png)

## Git 的一般工作流程

1. 在工作目录中添加、修改文件；
2. 将需要进行版本管理的文件放入暂存区域；
3. 将暂存区域的文件提交到 Git 仓库。

因此，Git 管理的文件有三种状态：已修改（modified）、已暂存（staged）和已提交（committed），依次对应上边的每一个流程。



首先这里再明确一下，所有的版本控制系统，其实只能跟踪文本文件的改动，比如TXT文件，网页，所有的程序代码等等，Git也不例外。版本控制系统可以告诉你每次的改动，比如在第5行加了一个单词“Linux”，在第8行删了一个单词“Windows”。而图片、视频这些二进制文件，虽然也能由版本控制系统管理，但没法跟踪文件的变化，只能把二进制文件每次改动串起来，也就是只知道图片从100KB改成了120KB，但到底改了啥，版本控制系统不知道，也没法知道。

不幸的是，Microsoft的Word格式是二进制格式，因此，版本控制系统是没法跟踪Word文件的改动的，前面我们举的例子只是为了演示，如果要真正使用版本控制系统，就要以纯文本方式编写文件。

因为文本是有编码的，比如中文有常用的GBK编码，日文有Shift_JIS编码，如果没有历史遗留问题，强烈建议使用标准的UTF-8编码，所有语言使用同一种编码，既没有冲突，又被所有平台所支持。

使用Windows的童鞋要特别注意：

千万不要使用Windows自带的**记事本**编辑任何文本文件。原因是Microsoft开发记事本的团队使用了一个非常弱智的行为来保存UTF-8编码的文件，他们自作聪明地在每个文件开头添加了0xefbbbf（十六进制）的字符，你会遇到很多不可思议的问题，比如，网页第一行可能会显示一个“?”，明明正确的程序一编译就报语法错误，等等，都是由记事本的弱智行为带来的。

## Git常用命令

1、**进入项目目录**:

```tex
cd 项目目录的路径      #进入项目目录
```

2、**初始化本地git仓库**:

```tex
git init      	#初始化一个git仓库(repository)，初始化完成之后会在项目目录中自动创建一个.git隐藏文件夹，此文件夹是git的版本记录，用来跟踪或者管理git仓库
```

3、**查看版本库的状态**:

```tex
git status      	#查看当前git仓库的状态
git status -s   	#简单方式查看git仓库的状态

三种状态
1.untraked file (工作区的文件未被跟踪的文件: 新建的文件没被暂存)
2.changes to be commited(暂存区的文件,将要被提交的修改: 文件已经被存入暂存区，还没有提交到本地仓库)
3.changes not staged for commit(没有准备提交的修改或文件之前提交过,然后进行了修改但还未add)
```

4、**查看修改的内容**:

```te
git diff				 #可以查看修改内容
```

5、**把工作区的文件添加到暂存区**:

```te
git add 文件名   	#把没有添加到暂存区的文件添加到暂存区(文件名可写多个)
git add .       	#把工作区没有添加到暂存区文件全部添加到暂存区(一次添加多个)
```

6、**把缓存区的文件提交到本地仓库**

```te
git commit -m 备注信息  	#把加入暂存区的文件提交到本地仓库（实际上就是把暂存区的所有内容提交到当前分支）
```

7、**查看版本库的历史操作记录**

```tex
git log     		#查看git操作的详细历史记录
比如：
commit b979bc1782e8f56750554323474da72ebca03553 #本次操作的版本号(commit id 版本号是唯一的)
Author: jinxizhen <842166299@qq.com>            #用户信息
Date:   Thu Jan 19 11:40:55 2017 +0800          #提交的日期

   初始化了git仓库并创建index.txt                  #提交的备注信息

```

```te
git log --oneline   	#把git操作日志简化为一行显示

git log --pretty=oneline  #简化信息，方便查看

git reflog          	#查看操作命令及日志
```

## 版本回退

第一种：**修改的内容还没有添加到暂存区**

```te
git checkout -- 文件名     #撤销工作区最后一次修改的内容，前提是修改的内容还没有添加到暂存区
```

第二种：**修改的内容已经添加到暂存区，但是还没有提交到本地仓库**

```te
先使用 git reset HEAD 文件名      #撤销添加到暂存区的内容
再使用 git checkout -- 文件名 	  #回退到上一个状态
```

第三种：**修改的内容已经提交到了本地仓库**

 ```tex
 git reset --hard HEAD^ //回退到当前工作区版本的上一个版本
   HEAD^:上一个版本
   HEAD^^:上上一个版本
   HEAD~100:上100个版本
 
 如果已经记不清是上几个版本了，直接使用版本id
 git reset --hard 版本id    #回退到指定的版本号的状态       
 	版本id就是commit提交时产生的id
 ```

## 分支操作

每次提交，Git都把它们串成一条时间线，这条时间线就是一个分支，所以分支就是一条commit时间线。

一个项目可以对应多条分支，也可以对应一条分支

`HEAD`严格来说不是指向提交，而是指向master，master才是指向提交的，所以，HEAD指向的就是**当前分支。**

![preview](https://gitee.com/Jinxizhen/pic_resource/raw/master/images/view)

**创建分支并切换两步完成：**

```tex
git branch 分支名      #创建一个分支
git checkout 分支名    #切换到指定的分支
```

**创建分支并切换一步完成：**

```tex
git checkout -b 分支名 #创建一个分支，并切换到分支(相当于创建+切换)
```

**查看所有分支**:

```te
git branch            #查看所有分支，当前的分之前会有一个*符号
```

**合并分支**:

```tex
git merge 分支名         #合并指定分支的内容到当前分支,fast forward模式
git merge --no-ff 分支名 #可以看出曾经合并过
```

合并分支时，加上`--no-ff`参数就可以用普通模式合并，合并后的历史有分支，能看出来曾经做过合并，而fast forward合并就看不出来曾经做过合并。--no-ff参数，表示`禁用Fast forward`

**删除分支**:

```delphi
git branch -d 分支名  #删除分支
git branch -D 分支名  #强行删除
```

**查看分支合并图**:

```gauss
git log --graph		 #查看分支合并信息
git log --graph --pretty=oneline --abbrev-commit  #简化信息
```

**本地分支与远程分支同步**:

```delphi
git checkout -b branch-name origin/branch-name  #在本地创建和远程分支对应的分支
git branch --set-upstream branch-name origin/branch-name  #建立本地分支和远程分支的关联
```

## 标签管理

一个版本库保存一个分支master，各自的版本库保存着各自的分支，各自的主分支名称都为master。
发布一个版本时，我们通常先在版本库中打一个标签，这样，就唯一确定了打标签时刻的版本。将来无论什么时候，取某个标签的版本，就是把那个打标签的时刻的历史版本取出来。所以，标签也是版本库的一个快照。

标签是指向某个commit的指针

**打标签**:`git tag <name>`   #**默认**标签是打在最新提交的commit上

```crmsh
git tag <name> commit-id(可选)
git tag -a <name> -m '说明' commit-id(可选)
```

**查看标签**：`git tag`
**查看标签信息**：`git show <tagname>`
**删除标签**：`git tag -d <tagname> ` (本地)

**推送标签到远程**:

```armasm
git push origin <tagname>  #推送单个
git push origin --tags  #推送多个
```

# 远程仓库

Git是分布式版本控制系统，同一个Git仓库，可以分布到不同的机器上。怎么分布呢？最早，肯定只有一台机器有一个原始版本库，此后，别的机器可以“克隆”这个原始版本库，而且每台机器的版本库其实都是一样的，并没有主次之分。

实际使用中可以找一台电脑充当服务器的角色，每天24小时开机，其他每个人都从这个“服务器”仓库克隆一份到自己的电脑上，并且各自把各自的提交推送到服务器仓库里，也从服务器仓库中拉取别人的提交。这个服务器就是远程仓库，不过，不需要我们自己搭建运行Git的服务器。好在这个世界上有个叫[GitHub](https://github.com/)的神奇的网站，从名字就可以看出，这个网站就是提供Git仓库托管服务的，所以，只要注册一个GitHub账号，就可以免费获得Git远程仓库。

国际上使用GitHub的比较多，在国内也有很多人使用[码云](http://git.oschina.net/)，可以把码云看成国产的GitHub。GitHub使用人数比较多，找开源的代码比较方便，但是由于是纯英文版，对一些小伙伴不是很友好，并且网站打开速度比较慢，所以我们可以使用码云来代替GitHub，由于两者使用方式出奇的一致，掌握了码云的使用也就掌握了GitHub的使用。

## 码云

官网：https://gitee.com/

## 添加公钥 sshkey 

由于你的本地Git仓库和码云仓库之间的传输是通过SSH加密的，在使用 SSH 协议访问仓库仓库之前，需要先配置好账户/仓库的SSH公钥。

最新步骤：https://gitee.com/help/articles/4181#article-header0

第一步：创建SSH Key。在用户主目录下，看看有没有.ssh目录，如果有，再看看这个目录下有没有`id_rsa`和`id_rsa.pub`这两个文件，如果已经有了，可直接跳到下一步。如果没有，打开Shell（Windows下打开Git Bash），创建SSH Key：

```tex
ssh-keygen -t rsa -C "842166299@qq.com"   #生成公钥（邮箱：注册码云的邮箱）
```

生成公钥的步骤：

- 生成公钥时，会提示我们选择保存的路径， 比如：Enter file in which to save the key (/Users/1/.ssh/id_rsa): 路径使用默认的，直接回车。

- 如果提示已经存在，可以直接覆盖掉，输入:y 然后回车  比如：/Users/1/.ssh/id_rsa already exists. Overwrite (y/n)? 

- 最后会提示输入密码，由于这个Key也不是用于军事目的，所以也无需设置密码，直接回车，就可以生成公钥

如果一切顺利的话，可以在用户主目录里找到`.ssh`目录，里面有`id_rsa`和`id_rsa.pub`两个文件，这两个就是SSH Key的秘钥对，`id_rsa`是私钥，不能泄露出去，`id_rsa.pub`是公钥，可以放心地告诉任何人。

第二步：查看公钥

```tex
cat ~/.ssh/id_rsa.pub     #查看公钥
```

比如输出：

```tex
    ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC53lok+oPntpwg0E0p6z2Klxb7275YyWcWyxiQZk7sKL0J90xi1btvqd7MVEHH2UvuPluSKwyLVTQCmA1iWlqyRjuO4LBeY85feqkhKWi+haq5u9NEAcALS00vNH6URWS7Uz5gU1RIs3F9Ssd9V/VsWNJ28DVIGKYM2s8Vs0K1CQ3l0Ed0onlOsOb2vUa/5k8R64P8vS+EpV/1XsxH99cQK2tq8A6tyRBAGe406s/sNufV/EYvGcM9nQyz+QI/lxcoHCw0xc9kkezxk4X8uTxgwMBx5EkTmMzYxcr34jT+ltsMHULmaJPWoN4J55EdINY+9YzfpwqYABoQATjK0p8z 842166299@qq.com
```

第三步：验证是否成功

```tex
ssh -T git@gitee.com    #验证公钥是否添加成功，比如：如果返回Welcome to Git@OSC, jinxizhen! 说明返回成功 
```

为什么码云需要SSH Key呢？因为码云需要识别出你推送的提交确实是你推送的，而不是别人冒充的，而Git支持SSH协议，所以，码云只要知道了你的公钥，就可以确认只有你自己才能推送。

当然，码云允许你添加多个Key。假定你有若干电脑，你一会儿在公司提交，一会儿在家里提交，只要把每台电脑的Key都添加到码云，就可以在每台电脑上往码云推送了。

最后友情提示，在码云上免费托管的Git仓库，任何人都可以看到喔（但只有你自己才能改）。所以，不要把敏感信息放进去。

如果你不想让别人看到Git库，有两个办法，一个是交点保护费，让码云把公开的仓库变成私有的，这样别人就看不见了（不可读更不可写）。另一个办法是自己动手，搭一个Git服务器，因为是你自己的Git服务器，所以别人也是看不见的。

## Git连接远程库

![img](https://gitee.com/Jinxizhen/pic_resource/raw/master/images/bg2015120901.png)

### 添加远程库

现在的情景是，你已经在本地创建了一个Git仓库后，又想在码云创建一个Git仓库，并且让这两个仓库进行远程同步，这样，码云上的仓库既可以作为备份，又可以让其他人通过该仓库来协作，真是一举多得。

**第一步**：连接远程库

```tex
git remote add origin git@gitee.com:Jinxizhen/weather.git   #连接远程库，把本地创建好的仓库同步到远程库
```

请千万注意，把上面的`git@gitee.com:Jinxizhen/weather.git`替换成你自己的远程库地址。添加后，远程库的名字就是`origin`，这是Git默认的叫法，也可以改成别的，但是`origin`这个名字一看就知道是远程库。

**第二步**：有两步操作

**第一次**同步远程仓库和本地仓库使用下面两条指令

```tex
先使用：git pull --rebase origin master          #把远程库的内容同步到本地仓库（如果连接完成库之后，远程库没有增加新的内容，这一步可以忽略）

再使用：git push -u origin master                #把本地仓库的内容推送到远程库（实际上是把当前分支master推送到远程库origin）
```

由于远程库是空的，我们第一次推送`master`分支时，加上了`-u`参数，Git不但会把本地的`master`分支内容推送的远程新的`master`分支，还会把本地的`master`分支和远程的`master`分支关联起来，在以后的推送或者拉取时就可以简化命令。

从**第二次**开始同步远程库 或者 推送本地仓库内容到远程库就不用那么麻烦了，使用下面的指令即可：

```tex
git pull  	#把远程库的内容同步到本地仓库
git push	#把本地仓库的内容推送到远程库
```

#### SSH警告

当你第一次使用Git的`clone`或者`push`命令连接GitHub时，会得到一个警告：

这是因为Git使用SSH连接，而SSH连接在第一次验证码云服务器的Key时，需要你确认码云的Key的指纹信息是否真的来自码云的服务器，输入`yes`回车即可。

Git会输出一个警告，告诉你已经把码云的Key添加到本机的一个信任列表里了：

这个警告只会出现一次，后面的操作就不会有任何警告了。

#### 删除远程库

如果添加的时候地址写错了，或者就是想删除远程库，可以用`git remote rm <name>`命令。使用前，建议先用`git remote -v`查看远程库信息：

```
git remote     #它会列出每个远程库的简短名字
git remote -v  #-v 选项，显示对应的克隆地址
```

然后，根据名字删除，比如删除`origin`：

```
$ git remote rm origin
```

此处的“删除”其实是解除了本地和远程的绑定关系，并不是物理上删除了远程库。远程库本身并没有任何改动。要真正删除远程库，需要登录到码云，在后台页面找到删除按钮再删除。

### 从远程库克隆

假设我们从零开发，那么最好的方式是先创建远程库，然后，从远程库克隆到本地仓库。

从远程仓库克隆时，实际上Git自动把本地的`master`分支和远程的`master`分支对应起来了，如图

![clipboard.png](https://gitee.com/Jinxizhen/pic_resource/raw/master/images/bVpLzs)

第一步：克隆远程库

```te
git clone https://git.oschina.net/jinxizhen/weather.git  #克隆项目，把远程库创建好的项目同步到本地
```

第二步：同步或者推送

```te
git pull    		#同步远程库的文件到本地
git push    	 #同步本地的文件到远程库
```

## 其他

你也许还注意到，码云给出的地址不止一个，还可以用`https://git.oschina.net/jinxizhen/weather.git`这样的地址。实际上，Git支持多种协议，默认的`git://`使用ssh，但也可以使用`https`等其他协议。

使用`https`除了速度慢以外，还有个最大的麻烦是每次推送都必须输入口令，但是在某些只开放http端口的公司内部就无法使用`ssh`协议而只能用`https`。

# .gitignore文件

有些时候，你必须把某些文件放到Git工作目录中，但又不能提交它们，比如保存了数据库密码的配置文件啦，等等，每次`git status`都会显示`Untracked files ...`，有强迫症的童鞋心里肯定不爽。

好在Git考虑到了大家的感受，这个问题解决起来也很简单，在Git工作区的根目录下创建一个特殊的`.gitignore`文件，然后把要忽略的文件名填进去，Git就会自动忽略这些文件。

忽略文件的原则是：

1. 忽略操作系统自动生成的文件，比如缩略图等；
2. 忽略编译生成的中间文件、可执行文件等，也就是如果一个文件是通过另一个文件自动生成的，那自动生成的文件就没必要放进版本库，比如Java编译产生的`.class`文件；
3. 忽略你自己的带有敏感信息的配置文件，比如存放口令的配置文件。

```te
文件.gitignore的格式规范：
#为注释   
以斜杠/开头表示目录；
以星号*通配多个字符；
以问号?通配单个字符
以方括号[]包含单个字符的匹配列表；
以叹号!表示不忽略(跟踪)匹配到的文件或目录；
```

**例子**：

```te
# 此为注释 – 将被 Git 忽略

# 忽略某个文件
*.a       # 忽略所有 .a 结尾的文件
!lib.a    # 但 lib.a 除外
.DS_Store # 忽略.DS_Store
*.zip 		# 忽略所有.zip文件

# 忽略某个文件夹
/TODO     # 仅仅忽略项目根目录下的 TODO 文件，不包括 subdir/TODO
build/    # 忽略 build/ 目录下的所有文件
dist/*    # 忽略目录 dist 下的全部内容；注意，不管是根目录下的 /dist/ 目录，还是某个子目录 /child/dist/ 目录，都会被忽略
doc/*.txt # 会忽略 doc/notes.txt 但不包括 doc/server/arch.txt
```

# Git命令大全

Git命令清单：https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html

![image-20211122112424857](https://i.loli.net/2021/11/23/18Bep3XnKrUZGNI.png)

# Git图形界面工具

Git有很多图形界面工具：https://blog.csdn.net/weixin_37887248/article/details/81011364

# GIT练习

###### https://learngitbranching.js.org