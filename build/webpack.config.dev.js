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