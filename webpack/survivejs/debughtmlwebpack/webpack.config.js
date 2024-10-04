const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  mode: "development",
  plugins:[new HtmlWebpackPlugin({
    template:'./src/template.html'
  })]
}