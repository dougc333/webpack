

class HelloPlugin{

      apply(compiler) {
        compiler.hooks.done.tap({ name: 'HelloPlugin' }, () => {
          console.log('Hello world!');
        });
      }

}

module.export = HelloPlugin
