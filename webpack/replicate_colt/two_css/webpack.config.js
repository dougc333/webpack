const path = require('path')

module.exports = {
  entry:path.resolve(__dirname, './src/index.js'),
  mode:"development",
  module:{
    rules:[
      {
      test:/\.css$/,
      use:['style-loader', 'css-loader']
      },
      {
        test:/\.scss$/,
        use:['style-loader', 'css-loader','sass-loader']
      }
    ]
  }
}