const { WebpackPluginServe } = require("webpack-plugin-serve"); 
const {MiniHtmlWebpackPlugin} = require("mini-html-webpack-plugin");

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