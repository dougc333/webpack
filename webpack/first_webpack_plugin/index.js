


class HelloWorldPlugin {
  constructor(options) {
      this.options = options;
  }
  apply(compiler) {
      console.log("My First webpack plugin");
  }
};

module.exports = HelloWorldPlugin
