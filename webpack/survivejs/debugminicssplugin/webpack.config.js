const path = require('path')
const {MiniHtmlWebpackPlugin} = require("mini-html-webpack-plugin")
module.exports = {
  entry:path.resolve(__dirname,'./src/index.js'),
  plugin:[new MiniHtmlWebpackPlugin({
    
  })]
}

