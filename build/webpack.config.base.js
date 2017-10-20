const CleanPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = {
	plugins:[

		// 匹配删除的文件
		new CleanPlugin(['dist'],	{
            	//根目录
                root: path.resolve(__dirname, '../'),  
                //开启在控制台输出信息     　　　　　　　　　　
                verbose:  true,    
                //启用删除文件    　　　　　　　　　　
                dry: false        　　　　　　　　　　
            }),

        // 给js，css 首页加上说明 
		new webpack.BannerPlugin('欢迎翻版，翻版必究')
        
	]
}