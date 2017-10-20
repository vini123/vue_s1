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
