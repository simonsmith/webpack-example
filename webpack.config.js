var webpack = require('webpack');

module.exports = {
  entry: {
    pageA: './flight_components/init/pageA.js',
    pageB: './flight_components/init/pageB.js',
    react: './react_components/app.jsx'
  },
  output: {
    path: './built',
    filename: '[name].built.js'
  },
  resolve: {
    modulesDirectories: [
      'node_modules',
      'bower_components',
      'flight_components',
      'react_components'
    ],
    alias: {
      'flightjs': 'flight',
    }
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader?insertPragma=React.DOM' }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('shared', 'shared.js', null, 2)
  ]
};
