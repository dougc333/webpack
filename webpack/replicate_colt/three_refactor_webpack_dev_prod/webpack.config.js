const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports  = {
  entry:path.resolve(__dirname, "./src/index.js"),
  mode:"production",
  plugins:[
    new HtmlWebpackPlugin({
      template:"./src/template.html"
    })
  ],
  module:{
    rules:[
      {
        test:/\.scss$/,
        use:["style-loader","css-loader","sass-loader"]
      },
      {
        test:/\.html$/,
        use:['html-loader']
      },
      {
        test:/\.(svg|gif|png|jpg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      }
    ]
  }
}