const fs = require('fs')
const webpack  = require('webpack');
const { Compilation, WebpackPluginInstance } = require('webpack')
const path = require('path')
class TestPlugin{
  constructor(pathToAssets, callback){
    console.log("pathToAssets:",pathToAssets)
    this.prevBuildInfo = []
    this.currBuildInfo = []
    this.pathToAssets = pathToAssets
    this.callback = callback
    this.webpack5plugin = this.webpack5plugin.bind(this);
  }
  
  webpack5plugin(compilation) {
		// const {
		// 	filename ='index.html',
		// 	publicPath = '',
		// 	template,
		// 	context,
		// 	chunks,
		// } = this.options;
		// TODO: Consider separating getFiles result to a structure as it can override other contents if file extension matches.
		return Promise.resolve(
			(template || defaultTemplate)({
				publicPath,
				...context,
				...getFiles(compilation.entrypoints, chunks),
			})
		).then((source) => {
			// webpacks 5 exports `webpack-sources` to avoid cache problems
			// eslint-disable-next-line @typescript-eslint/no-var-requires
			const { sources } = require('webpack');
			compilation.emitAsset(filename, new sources.RawSource(source, true));
		});
	}
  
  apply(compiler){
    console.log("test plugin")
    compiler.hooks.beforeCompile.tap('ReadBundleSizeBefore',()=>{
      try{
        const filenames = fs.readdirSync(this.pathToAssets)
        filenames.forEach(f=>{
          const stats = fs.statSync(`${this.pathToAssets}/${f}`)
          this.prevBuildInfo[f] = stats.size
          fs.unlinkSync(`${this.pathToAssets}/${f}`)
        })
      }catch(e){
        console.log('ReadBundleSizeBefore error',e)
      }
    })
    compiler.hooks.thisCompilation.tap("TestPlugin",(compilation)=>{
      console.log("thisCompilation!!!!!!!")
      compilation.hooks.processAssets.tapPromise({
        name: "TestPlugin",
				stage: compilation.PROCESS_ASSETS_STAGE_ADDITIONAL,
      },()=>this.webpack5plugin(compilation))
    })

    compiler.hooks.afterEmit.tap('ReadBundleSizeAfter', ()=>{
      try{
        const filenames = fs.readdirSync(this.pathToAssets)
        filenames.forEach(f=>{
          const stats = fs.statSync(`${this.pathToAssets}/${f}`)
          this.prevBuildInfo[f] = stats.size
        })
        this.callback && this.callback(
          this.prevBuildInfo, this.currBuildInfo
        )
      }catch(e){
        console.log('ReadBundle after error:',e)
      }

    })
  }

}


module.exports =  TestPlugin


