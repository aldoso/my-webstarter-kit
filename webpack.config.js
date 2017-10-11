module.exports = {

  //define entry point
  entry: './scripts/index.js',

  //define output point
  output: {
    // path: '', //folder name
    filename: 'bundle.js',
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
            {
                test: /\.sass$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ] //loaders
    } //module

}
