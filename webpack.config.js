const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')    //导入在内存中自动生成index页面的插件

//创建一个插件的实例对象
const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'),   //源文件
    filename: 'index.html',   //生成的内存中首页的名称
});

//向外暴露一个打包的配置对象，node api语法
//webpack默认只能打包.js文件，.vue等只能配置第三方loader
module.exports = {
    mode: 'development',     //development,production
    //4.x之后，约定大于配置
    plugins: [
        htmlPlugin
    ],
    module: {    //所有第三方模块配置规则
        rules: [
            {
                test: /\.js|jsx$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],    //表示这几个文件的后缀名，可以不写(import中)
        alias: {
            '@': path.join(__dirname, './src')  //配置完，@就表示根目录中的src目录
        }
    }
}