const { WebpackPluginServe } = require("webpack-plugin-serve"); 
const {MiniHtmlWebpackPlugin} = require("mini-html-webpack-plugin");
const {MiniCssExtractPlugin} = require('mini-css-extract-plugin')

exports.devServer = () => ({ 
  watch: true,
  plugins: [
  new WebpackPluginServe({
    port: parseInt(process.env.PORT, 10) || 8080, static: "./dist", // Expose if output.path changes liveReload: true,
    waitForBuild: true,
    }), 
  ],
  });

  exports.page = ({ title }) => ({
    plugins: [new MiniHtmlWebpackPlugin({ context: { title } })],
  });

  exports.loadCSS = () => ({
    module: {
      rules: [
        { test: /\.css$/, use: ["style-loader", "css-loader"] },
  ], },
  });
  

  exports.extractCSS = (
    { 
      options = {}, 
      loaders = [] } = {}) => { 
        return {
        module: {
        rules: [
        {
          test: /\.css$/,
          use: [
            { loader: MiniCssExtractPlugin.loader, options },
            "css-loader",
          ].concat(loaders),
          // If you distribute your code as a package and want to
          // use _Tree Shaking_, then you should mark CSS extraction
          // to emit side effects. For most use cases, you don't
          // have to worry about setting flag.
          sideEffects: true,
        }, 
      ],
    }, plugins: [   
        new MiniCssExtractPlugin({ filename: "[name].css",
    }), ],
    }; 
  };