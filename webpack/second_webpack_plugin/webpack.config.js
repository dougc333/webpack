const path = require('path')
const TestPlugin = require('./plugin')



module.exports = {
  entry:path.resolve(__dirname, "./src/index.js"),
  mode: 'development',
  plugins:[new TestPlugin('./dist',(prevBuildInfo, currBuildInfo)=>{
    console.log("prevBuildInfo:",prevBuildInfo)
    console.log("currBuildInfo:",currBuildInfo)
  })]
}
