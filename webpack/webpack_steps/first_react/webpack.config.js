const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry:path.join(__dirname,'./src/index.js'),
  output:{
    path:path.join(__dirname, "dist"),
    filename:'bundle.js'
  },
  module:{
    rules:[{
      test:/\.(js|jsx)$/,
      use:["babel-loader"]     
    },{}]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins:[
    new HtmlWebpackPlugin({template:'./public/index.html'})
  ],
  devServer:{
    hot:true,
    port:3000,
    open:true 
  }

}

