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

如果是下载下来的，所需要哪些 **loader** 以及 **plugin** 就已经在 **package.json** 文件中列出来了。 就在 **devDependencies** 节点下。可以先看看有哪些。

```
{
  ……
  "license": "ISC",
  "devDependencies": {
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

``` js
// 安装 webpack-merge (合并webpack config)
npm install --save-dev webpack-merge

// 安装 html-webpack-plugin (组装html和js)
npm install --save-dev html-webpack-plugin

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

当打包方式比较多，项目比较大的时候，一个 **config.js** 就有点着急。这里将通用的，公用的，先配置在一个配置里。然后再入口配置中，引用合并(webpack-merge)配置。

``` js
// webpack.config.base.js 公用配置

const CleanPlugin = require('clean-webpack-plugin')

const webpack = require('webpack')

const path = require('path')

module.exports = {

	plugins:[

		// 匹配删除的文件
		new CleanPlugin(['dist'],	{
            	// 根目录
                root: path.resolve(__dirname, '../'),  
                // 开启在控制台输出信息     　　　　　　　　　　
                verbose:  true,    
                // 启用删除文件    　　　　　　　　　　
                dry: false        　　　　　　　　　　
            }),

        // 给js，css 首页加上说明 
		new webpack.BannerPlugin('欢迎翻版，翻版必究')

	]
}

```

然后是入口配置。

``` js
// webpack.config.dev.js 入口配置

const HtmlPlugin = require('html-webpack-plugin')

const path = require('path')

const merge = require('webpack-merge')

const BaseWebpackConfig = require('./webpack.config.base.js')

module.exports = merge(BaseWebpackConfig, {

		entry:'./src/index.js',

		output:{
			path: path.resolve(__dirname, '../dist'),
			filename:'./style/js/[name]-[hash].bundle.js'
		},

		module:{
			rules:[
				{
					test:/\.vue$/,
					use:{
						loader:'vue-loader'
					}
				}
			]
		},

		plugins:[
			new HtmlPlugin({
				filename:'home.html',
				template:'./src/index.html',
				title: 'this is home',
				inject: 'body',
				chunks:['main']
			})
		]
})
```

### 入口html文件（打包的模板，vue的找落点）

``` html
// ./src/index.html 
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title> <%= htmlWebpackPlugin.options.title %> </title>
  </head>
  <body>
  		<div id="app">

  		</div>  
  	</body>
</html>
```

### .vue 文件

**.vue 单文件组件** [https://cn.vuejs.org/v2/guide/single-file-components.html](https://cn.vuejs.org/v2/guide/single-file-components.html)

``` js
// ./src/App.vue

<template>
	<div>
		<div class="u-name">{{name}} </div>
		<span class="u-like" v-for="item in likes">
			{{item}}
		</span>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				name: '七月羽歌',
				likes:[
					'热血江湖',
					'王者荣耀',
					'跑跑卡丁车',
					'地下城勇士'
				]
			}
		}

	}
</script>

<style>
	.u-name{
		color: #000;
		font-size: 16px;
		font-weight:bold;
		margin-left: 5px;
	}

	.u-like{
		display:inline-block;
		padding: 6px 15px;
		border-radius: 5px;
		font-size: 13px;
		color: #fff;
		background-color: #a38;
		cursor: pointer;
		margin: 15px 5px;
	}
</style>

```

### 入口js文件（初始化vue，渲染到dom上）

``` js
// ./src/index.js
import Vue from 'vue'
import App from './App.vue'


new Vue({
	el:'#app',
	render:h => h(App)
})
```
vue 的**render**函数是渲染一个视图，然后提供给**el**挂载，如果没有**render**那页面什么都不会出来。

将h作为createElement的别名是一个通用惯例。

vue.2.0的渲染过程：

1. 首先需要了解这是 es 6 的语法，表示 Vue 实例选项对象的 render 方法作为一个函数，接受传入的参数 h 函数，返回 h(App) 的函数调用结果。

2. 其次，Vue 在创建 Vue 实例时，通过调用 render 方法来渲染实例的 DOM 树。

3. 最后，Vue 在调用 render 方法时，会传入一个 createElement 函数作为参数，也就是这里的 h 的实参是 createElement 函数，然后 createElement 会以 APP 为参数进行调用。

[https://cn.vuejs.org/v2/guide/render-function.html](https://cn.vuejs.org/v2/guide/render-function.html)

### 修改 package.json 开始打包

修改 **package.json** 的 **scripts** 节点，添加一条命令。

``` js
"scripts": {
    ……
    "dev": "webpack --config ./build/webpack.config.dev.js"
  }
```

运行 `npm run dev` 开始打包。





