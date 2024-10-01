# ch2 verified
>npm run start
>go to localhost:8080 verify browser displays nodemon and terminal running server
>modify the helloworld message in component.js and verify the change appears without having to stop and restart the devserver 

npm i webpack webpack-nano mini-html-webpack-plugin webpack-plugin-serve nodemon

1) install devserver with webpack-plugin-serve. see devserver output change as you chnage text string. no need to rebuild with npm start
1) nodemon will reload server when  webpack.config.js changes
