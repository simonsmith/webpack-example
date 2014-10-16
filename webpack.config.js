module.exports = {
  entry: {
    flight: './flight_components/init.js',
    react: './react_components/app.jsx'
  },
  output: {
    path: './built',
    filename: '[name].built.js'
  },
  externals: {
    'jquery': 'jQuery'
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
      'flight-request': 'flight-request/lib/with_request'
    }
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader?insertPragma=React.DOM' }
    ]
  }
};
