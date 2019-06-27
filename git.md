## git 的使用

#### 第一次配置 git 需要配置 username email

> paste 粘贴
> 桌面点击右键 --> git bash

1. git config --global user.name "ruanye"
2. git config --global user.email "55343581@qq.com"

### git 仓库提交的流程

> git bash 要在你提交的文件夹下面运行

- 初始化 git 仓库  
  git init 初始化 一个仓库只需要初始化一次
-  添加文件到缓存区
  git add 文件名
  通常使用全部添加
  git add -A -A 表示 all 的意思 所有(git add \*)
- 提交文件到本地仓库（自己电脑）
  git commit -m' 第一次提交' -m 通常表示你此次提交内容的备注
-  添加远程仓库  
  git remote add  
  origin 仓库名  
  https://github.com/ruanye/1808B.git 仓库地址
  git remote add origin https://github.com/ruanye/1808B.git
- 查看远程仓库地址
  git remote -v
- 推送代码到远程仓库  
  git push origin master

### 删除远程仓库

git remote rm origin

- 同一个仓库/项目

#### 如果是第一次提交 5 步

1. git init
2. git add -A
3. git commit -m'你的注释'
4. git remote add 仓库地址 添加远程仓库(第一次提交时候使用)
5. git push origin master

#### 如果有修改 第二、第三.....第 n 次 3 步

1. git add -A
2. git commit -m'注释'
3. git push origin master

//百度云盘 密码  地址

#### 第一次提交的示例

1. git init
2. git add -A //添加上传的内容
3. git commit -m "VUE" //告诉云盘你传的是视频还是图片
4. git remote add origin https://github.com/ruanye/1808vue.git 存储的文件夹
5. git push -u origin master 上传按钮

### 拷贝仓库地址到本地

下载 git clone +仓库地址
例子：git clone https://github.com/ruanye/1807lesson.git

### 合作做项目或者远程仓库有更改这时每次提交（commit）之前必须 git pull origin master (拉取远程仓库) 为了保证同步


