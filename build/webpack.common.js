const path = require('path')
// 创建一个html文件,并把webpack打包后的静态文件自动插入到这个html文件当中
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = [{
  // 入口配置
  entry: {
    // a: path.resolve(__dirname, '../src/a.js'),
    // b: path.resolve(__dirname, '../src/b.js'),
    index: path.resolve(__dirname, '../src/index.js')
  },
  // 输出配置
  output: {
    // 此选项决定了每个输出 bundle 的名称。这些 bundle 将写入到 output.path 选项指定的目录下。
    filename: '[name].js',
    // 输出目录对应一个绝对路径。
    path: path.resolve(__dirname, '../dist'),
    // 该选项的值是以 runtime(运行时) 或 loader(载入时) 所创建的每个 URL 为前缀。因此，在多数情况下，此选项的值都会以/结束。 默认值是一个空字符串 ""
    publicPath: '/'
  },
  plugins: [
    // 多页配置 页面1
    new HtmlWebpackPlugin({
      // 插入位置
      inject: 'body',
      // icon图标
      // favicon: './favicon.ico',
      // 生成的html文件名称
      filename: 'index.html',
      // 模板文件路径
      template: path.resolve(__dirname, '../src/index.html')
      // minify:{
      //   // 删除注释
      //   removeComments: false,
      //   // 删除空格
      //   collapseWhitespace: false
      // }
    })
    // 多页配置 页面2
    // new HtmlWebpackPlugin({
    //   inject: 'body',
    //   favicon: './favicon.ico',
    //   filename: 'index.html',
    //   template: path.resolve(__dirname, '../src/index.html')
    // })
  ],
  // 处理项目中的不同类型的模块
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ],
            plugins: [
              [
                '@babel/plugin-transform-runtime'
              ],
              [
                '@babel/plugin-transform-modules-commonjs'
              ]
            ]
          }
        }
      }
    ]
  }
}]
