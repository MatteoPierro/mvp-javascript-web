var webpack = require('webpack');

module.exports = {
  entry: {
    app: './main.js'
  },
  output: {
    filename: 'helloworld.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};