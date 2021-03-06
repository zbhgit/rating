
#### 项目总结
* 此项目基于React、Redux、react-router、fetch、koa、flex、ES6开发的单页应用
* 项目参考了慕课大众点评项目教程，其中布局部分完全独立完成
* 通过这个项目，学习到了智能组件、傻瓜组件的区别以及Redux、react-redux的结合使用
* 也了解到提升React组件性能的一些方法
* 学习到开发React项目，调试的工具和方法




#### 搭建环境
1. 使用react官方构建工具 create-react-app

运行如下指令
```
 $ npm install -g create-react-app
 $ create-react-app rating
 $ cd rating
 $ npm start
```
此时会自动打开浏览器[localhost:3000](localhost:3000)
因为此工具高度集成,开箱即用,但我们还需要其他配置时,需要更改配置文件,需运行以下代码
```
 $ npm run eject
```
此时文件目录结构为

```
rating            // 根目录
  config          // webpack配置文件
  node_modules    // npm模块目录
  public          // 公共静态资源
  scripts         // 指令文件
  src             // 项目源码开发目录
  .gitignore      // 上传github忽略文件设置
  package.json    // 包管理文件
  README.md       // 文档说明
  yarn.lock       // yarn安装文件

```

2. 现在来安装我们所需要的模块 
  下列模块运行时需要,需要用 'npm install' --save  安装
  * whatwg-fecth      // ajax模块
  * es6-promise       //  老浏览器兼容promise
  * redux             //  状态管理模块
  * react-redux       //  react结合redux
  * react-addons-pure-render-mixin   //性能优化模块官方
  * react-router@2.8.1   // 暂时使用v2版本
  
安装redux-devTools

```
$ npm install --save-dev redux-devTools
``` 

3. 更改文件目录,配置好开发目录 
主要是src目录更改

```
--mock    //增加数据mock文件目录
--docs    // 增加文档说明文件目录 
--src
  -- actions     // 存放redux相关文件
  -- components   //  存放公用组件
  -- constants    // 存放redux相关文件
  -- containers   // 项目页面文件
  -- fetch        // ajax处理文件
  -- reducers     // 存放redux相关文件
  -- router       // 页面路由文件
  -- store        // 状态管理目录
  -- index.js

```
#### 克隆该项目到本地运行


```
$ git clone 'https://github.com/zbhgit/rating.git'
$ cd rating
$ npm install
$ npm run start
```
浏览器自动打开网页即可看到效果，因为还未启动后端服务，所以页面显示"正在加载"
* 重新开启一个命令行窗口

```
// 进入mock文件夹
$ cd mock
// node环境下运行server.js文件
$ node server.js
```
此时刷新网页即可正常显示


