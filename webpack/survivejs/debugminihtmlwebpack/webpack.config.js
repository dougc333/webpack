const path = require('path')
const {MiniHtmlWebpackPlugin} = require('mini-html-webpack-plugin')


module.exports = {
  entry:path.resolve(__dirname, './src/index.js'),
  mode:"development",
  plugins:[new MiniHtmlWebpackPlugin({context:{title:"debug htmlwebpack plugin"}})]
}