module.exports = {

  //define entry point
  entry: './app/scripts/app.js',

  //define output point
  output: {
    path: __dirname + "/dist", //folder name
    filename: 'script.js', //bundle all javascript files here
  },

  module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            // { //not necessary if using GULP
            //     test: /\.sass$/,
            //     loader: 'style-loader!css-loader!sass-loader'
            // }
        ] //loaders

    } //module

}
