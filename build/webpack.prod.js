const webpack = require('webpack')
// 合并数组和对象的插件
const merge = require('webpack-merge')
// 压缩js的插件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = common.map(config => merge(config, {
  // 打包模式
  mode: 'production',
  // 生成SourceMap文件模式
  devtool: 'source-map',
  // 手动配置 将会覆盖默认配置
  optimization: {
    minimizer: [
      // 自定义 UglifyJsPlugin 配置, 默认的压缩插件为uglifyjs-webpack-plugin
      new UglifyJsPlugin({
        // 是否生成SourceMap文件
        sourceMap: true,
        uglifyOptions: {
          // properties -- 用.来重写属性引用，例如foo["bar"] → foo.bar
          compress: { properties: true },
          ie8: true,
          // mangle会混淆变量名 默认是true
          mangle: true
        }
      })
    ]
    // 压缩js代码 生成环境默认为 true
    // minimize: false
  },
  plugins: [
    // DefinePlugin插件实现多环境下配置切换
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}))
