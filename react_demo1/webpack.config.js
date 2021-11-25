const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "development", //mode: 'production'将输出压缩结果
    entry: path.join(__dirname, 'src', 'index.js'), // 单文件入口
    output: {
      filename: 'bundle.js',  // 输出文件名
      path: path.join(__dirname, 'dist')  // 输出目录
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            loader: "babel-loader",
            exclude: /node_modules/,
          },
          {
            test: /\.(css|less)$/,
            use: [
              {
                loader: "style-loader",
              },
              {
                loader: "css-loader",
                options: {
                    importLoaders: 1,
                  },
              },
              {
                loader: "less-loader",
              },
            ],
          },
          {
            test: /\.(png|svg|jpg|gif|jpeg)$/,
            loader: 'file-loader'
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            loader: 'file-loader'
          },
        ],
      },
    plugins: [
        new htmlWebpackPlugin({
          template: 'index.html',
          title: '从0开始手动构建Webpack的react开发环境',
        }),
        new CleanWebpackPlugin(), // 清除之前的打包文件
    ],
    devServer: {
        static:{
        directory: path.join(__dirname, "dist"),
        },
        hot: true,
        historyApiFallback: true,
        compress: true,
        port: 9000,
    },
    devtool: 'inline-source-map',
};