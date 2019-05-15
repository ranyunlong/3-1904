# 包管理器

一个包或者一个项目是由很多个模块组合成的

## 模块

1. 系统内置
2. 第三方开发的


### 1. npm nodejs 官方自带的
1. 下载别人分享的优秀的模块
2. 管理模块
3. 管理代码版本
4. 分享模块


### npm命令行

1. npm init 

进入交互
（1） package name: 输入项目名称 只能说英文的不能有特殊符号和中文符号 可以有中划线 不能是npm里已有的模块名称
（2） version： 输入版本号 number.number.number 后面的版本必须必前面的版本高
（3） description: 输入项目描述
（4） entry point: 项目默认启动文件名称 选择已有的js文件
 (5) test command: 测试命令 留空
（6） git repository: GitHub的代码仓库地址 留空
（7） keywords: 项目的关键词 方便在npm网站上查找的关键词 留空
（8） author: 输入作者姓名 可以不写
（9） license: 选择一个开源协议 默认说isc MIT
（10） 输入yes 完成操作
初始化一个项目包管理文件 package.json

```shell
npm init --yes
```
这样可以省略交互步骤 项目名称默认是根目录的名称


2. npm install 模块名称

```shell
npm install 模块名称
npm i 模块名称

# 前两个命令一样的

# 安装模块保存到开发依赖里
npm i 模块名称 -D 

# 全局安装模块 一般用于在命令行里使用的模块 -g global
npm i -g 模块名称
npm i 模块名称 -g
# C:\Users\你用用户\AppData\Roaming\npm

npm -g 模块名称@版本号
# 下载指定版本号的 模块
```

3. npm info

```shell
npm info 模块名称
# 用来查询模块版本号的
```

### 提升模块下载速度

```shell
npm i -g nrm
# 使用淘宝的镜像服务器下载模块
nrm use taobao
#  使用淘宝服务器下载
nrm ls
# 查看当前使用了那个下载服务器
```

4. npm login  & npm adduser
在登录之前需要用nrm 切换到npm 服务器 淘宝服务器不支持上传模块
```shell
# 登录到npm
npm login

# （1）输入用户名
# （2）输入密码 输入密码时不会动 直接输就是
# （3）输入邮箱地址 要正确输入你注册的邮箱


# 添加用户登录到npm
```

5. npm whoami 
```shell
# 检查当前登录的用户是谁
npm whoami 
```

6. npm logout
```shell
# 退出登录
npm logout
```

7. npm publish
```shell
# 发布你的模块到npm仓库里
# 上传之前尽量使用npm info 检测是否有该模块了？
# 开源社区 尽量不要上传一些垃圾到npm 上传之后可以在24小时内撤销
# 超过24小时想要撤销模块 必须联系npm的作者 检查你的这个模块有没有人使用 如果有人使用 不能撤销
npm publish

# 升级模块
# 升级之前要更新 模块版本号 而且要比之前的版本号高才行
npm publish
```

8. npm unpublish
```shell
# 撤销命令 只能撤销自己上传的模块
# 24小时以内的可以测下
# 超过24小时想要撤销模块 必须联系npm的作者 检查你的这个模块有没有人使用 如果有人使用 不能撤销
npm unpublish 你的模块名称@要撤销的版本号
```

淘宝只是复制了npm服务器的模块文件 （10分同步）

加-D 会保存在 devDependencies 选项里
不加 会保存在 dependencies
（1）开发依赖 一般是用来协助开发的功能模块
（2）项目依赖 项目的生产环境中必须需要的


### 自定义项目启动命令

可以在package.json 的scripts选项中自定义命令来启动js脚本

除了start 以外 其他的都需要加上run

```json
"scripts": {
    "start": "node index.js",
    "dev": "node index.js"
}
```

```shell
# start 默认不用加run
npm start
# dev 需要加run才能支持
npm run dev
```

### 2. yarn facebook