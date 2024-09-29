# Replicate Colt
nvm ls node 20

1) checkpoint dd54924 copy over src files and assets directory. 
2) configure webpack.config.js to get js files to produce prod/dev bundles and verify addition works

This covers
1) main webpack.config.js entry point using path to find index.js
2) package.json "start": "webpack" build command
3) config webpack.config.js and verify dist/main.js works by modifying index.html

Verify by removing individual src files from end of index.html and adding dist/main.js
and verify can add 2 numbers. 


