# my-webstarter-kit

Modern Web Starter Kit:
-live server: autoreload and cross-device syncronization
-Bootstrap 4 Template
-SASS workflow
-component workflow: mix multiple .js files into a single bundle.js files (gulp or webpack)
-compiling es6 to browser-compatible JavaScript (webpack)

-- to add features from Web Starter Kit
-add minify / uglifiy css and js
-add minify for html in /dist


HOW IT WORKS
-index.js from scripts controls the index.html

INSTALLATION
-install nodejs

-install gulp-cli globally in order to use the gulp commands in terminal
   npm install -g gulp-cli

-download this repository
-console run npm install (all packages from package.json)

RUN
-console run "npm start" to start the server and compile SASS files into /dist/index.css
-console run 'webpack' to bundle all js files from 'scripts' into one file: bundle.js and all .sass files in the browser
