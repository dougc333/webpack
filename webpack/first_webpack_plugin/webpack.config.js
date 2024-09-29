const path = require('path')
const HelloWorldPlugin = require('./index')

module.exports = {
  entry:path.resolve(__dirname,"./src/content.js"),
  mode:"development",
  plugins: [
    new HelloWorldPlugin({options: true})
  ]
}
