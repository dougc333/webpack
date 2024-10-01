const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Hello = require('@dc333/webpack-plugins')

module.exports = {
  entry:"./src/index.js",
  mode:"development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins:[
    new Hello(),
  ],
  module:{
    rules:[
      {
        test:/\.html$/,
        use:['html-loader']
      },
      {
        test:/\.svg$/,
        use: {
          loader:'file-loader',
          options:{
            name:"[name].[hash].[ext]",
            outputPath:"imgs",
          }
        }
      },
    ]
  }
}