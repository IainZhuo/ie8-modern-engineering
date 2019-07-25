const webpack = require('webpack')
// 一个可以合并数组和对象的插件
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = common.map(config => merge(config, {
  // 打包模式
  mode: 'development',
  // 生成SourceMap文件模式
  devtool: 'inline-source-map',
  // 本地服务器 配置
  devServer: {
    // 告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要。
    // contentBase: '../dist'
  },
  plugins: [
    // DefinePlugin插件实现多环境下配置切换
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('dev')
    })
  ]
}))
