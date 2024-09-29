

class Hello{
  apply(compiler){
    compiler.hooks.done.tap({name:"Hello"},()=>{
      console.log("asdfasdf")
    })

  }

}
module.exports = Hello