# Webpack refactor to common and prod. common becomes dev. 

1) add html-webpack-plugin and src/template.html. HWP appends dist/xxx.js which is the js output of webpack to the html file. 

2) add 2 tasks to package.json, build for prod mode and start for dev mode

3) add webpack-dev-server to package.json. Add webpack-devserver config to webpack.config.js. It can work in minimal config without a config but better to put it in to show hot reloading

DOWNGRADE sass to 1.55 to prevent 
"Sass's behavior for declarations that appear after nested rules" error messages. 

4) add html-loader, file-loader, clean-webpack-plugin

webpack.common.js not used. leave for reference
