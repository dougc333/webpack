

const {mode} = require('webpack-nano/argv'
)

const {
  MiniHtmlWebpackPlugin
} = require('mini-html-webpack-plugin')

module.exports = {
  mode:"development", 
  plugins:[
    new MiniHtmlWebpackPlugin({context:{title:'demo'}})
  ]
}