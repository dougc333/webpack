# Webpack from Colt

1) Add webpack.config.js style-loader, css-loader and main.css file
debug and verify
2) add sass, and leave css there also. Does superset use both CSS and scss? yes
and styled conponents for react. Verify index.scss gets compiled into index.css and is integrated. 

The loader order is reversed for the rules. sass-loader is last which means it runs first, style-loader, css-loader, sass-loader

verify: 1) background is purple

2) text is orange. import the scss and css to index.js. little funky, should be at the component level. Better to test css and styled components in react. Doesnt mean much here. 






