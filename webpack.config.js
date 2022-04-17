const path = require('path');
// 相对路径转换为绝对路径
const pathResolve = _path => path.resolve(__dirname, _path);
// 编译
const HTMLWebpackPlugin = require('html-webpack-plugin');
// 压缩css
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
// 打包的文件进行清理
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
// webpack.config.js
const {VueLoaderPlugin} = require('vue-loader');
module.exports = {
    mode: 'development',
    // 进入
    entry: path.join(__dirname, 'src', 'main.js'),
    // devtool 文档格式化
    devtool:'inline-source-map',
    devServer: {
        port: 8080,
        hot:true,
        // 打开浏览器
        open:true,
        static: path.join(__dirname, 'dist')
    },
    // 打包之后的文件
    output: {
        path: pathResolve('dist'),
        filename: 'index.js'
    },
    resolve:{
        alias:{
            '@':pathResolve('./src')
        }
    },
    // 配置解析模块规则
    module: {
        rules: [
            {
                test:/\.vue$/i,
                loader:'vue-loader',
                // // 定义范围
                // include: path.join(__dirname,'src'),
                // // 排除
                // exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // 定义范围
                include: path.join(__dirname, 'src'),
                // 排除
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: [MiniCSSExtractPlugin.loader, "css-loader",'postcss-loader'],
            },
            {
                test: /\.less$/i,
                use: [MiniCSSExtractPlugin.loader, "css-loader", "less-loader",'postcss-loader'],
            },

        ]
    },
    // 插件
    plugins: [
        new VueLoaderPlugin(),
        new HTMLWebpackPlugin({
            template: pathResolve('./public/index.html'),
            // 命名
            filename: 'index.html',
            title: 'Webpack vue'
        }),
        new MiniCSSExtractPlugin({
            filename: 'index.css'
        }),
        new CleanWebpackPlugin()
    ]
}