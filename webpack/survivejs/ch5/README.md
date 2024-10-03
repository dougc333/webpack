ch5 

1) verify sass works. body.sass sets background color to light blue
2) veriy css extract plugin works


separate css from main js bundle to allow parallel loading
thr problem with loading css at same time as JS is you get flash of unstyled content, FOUC
this is because there is no css load initially and wehn it loads with JS later after the first render the rerender with loaded css causes a flash

sass works but needs css loader options for importLoaders


mini-css-extract-plugin to separate css
extract-css-chunks-webpack-plugin for server side css

