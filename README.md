# vuestudy_s1

# 使用

``` js
git clone xxx

npm install 

npm run dev 
```
# 目录以及效果图

``` 
.
├── build                                       // webpack配置文件
│   ├── webpack.config.base.js                  // 基础配置，比如一些固定插件。多条件打包时，也可以用上。
│   └── webpack.config.dev.js                   // dev 配置，打包的入口配置
│   
├── src                                         // 输入文件（项目）
│   ├── App.vue                                 // .vue 文件。里边写了简单的模板，js，以及css
│   ├── index.html                              // 入口 html
│   └── index.js                                // 入口 js
│ 
├──  dist                                       // 输出文件
│ 
└──  package.json                               //node 配置

```
<div align=center>
  
![image](https://blog.vini123.com/wp-content/uploads/2017/10/20171020133038.png)

</div>

# 从零开始，一步一步来

### 建立目录，初始化，安装webpack

``` js
mkdir vuestudy_s1
cd vuestudy_s1
// 创建默认node配置 -y 跳过手动输入
npm init -y 
// 安装 webpack
npm install --save-dev webpack
```

### 安装需要的loader和plugin

如果是下载下来的，所需要哪些 **loader** 以及 **plugin** 就已经在 **package.json** 文件中列出来了。 就在 **devDependencies** 节点下。

```
{
  "name": "vt2",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack --config ./build/webpack.config.dev.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-preset-es2015": "^6.24.1",
    "clean-webpack-plugin": "^0.1.17",
    "css-loader": "^0.28.7",
    "html-webpack-plugin": "^2.30.1",
    "vue": "^2.5.2",
    "vue-loader": "^13.3.0",
    "vue-template-compiler": "^2.5.2",
    "webpack": "^3.8.1",
    "webpack-merge": "^4.1.0"
  }
}

```
这里，从零开始，我们需要一个一个的安装。

```
// 安装 webpack-merge (合并webpack config)
npm install --save-dev webpack-merge

// 安装 html-webpack-plugin (组装html和js)
npm install --save-dev html-webpack-plugin

// 安装 babel （处理js）
npm install --save-dev babel-core babel-loader babel-preset-es2015

// 安装 css-loader （处理css）
npm install --save-dev css-loader

// 安装 vue相关
npm install --save-dev vue vue-loader vue-template-compiler

// 安装 clean插件 （每次打包前，都先删除指定位置的文件，小心使用和配置）
npm install --save-dev clean-webpack-plugin

```

### 配置 webpack.config.js

我们通过webpack打包，所以必须要做的一步就是配置其配置文件。默认情况下，webpack的配置文件在项目根目录下，并且配置文件名是 **webpack.config.js**。

这个时候，只需要运行 `webpack` 就可以开始打包了。

如果配置文件名有了变化，或位置有了变化，就需要手动指定配置文件了。 比如： `webpack --config ./build/webpack.config.dev.js`




