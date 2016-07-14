const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  debug: true,
  // entry: {
  //    app: ["./index.js"]
  //  },
  entry: [
    'webpack-hot-middleware/client',
    './src/app/App.js'
  ],
  output: {
    // For production only
    path: path.join(__dirname, './dist/'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader', 'babel?presets[]=react,presets[]=es2015'],
      exclude: /node_modules/,
      include: __dirname
    },{
      test: /\.json$/,
      exclude: /node_modules/,
      loader: 'json'
    }]
    // { test: /\.jade$/, loader: "jade" },
    // => "jade" loader is used for ".jade" files
    // { test: /\.css$/, loader: "style!css" },
    // => "style" and "css" loader is used for ".css" files
    // Alternative syntax:
    // { test: /\.css$/, loaders: ["style", "css"] },
  },
  resolve: {
    modulesDirectories: ['./app', 'node_modules'],
    extensions: ['', '.js', '.jsx']
  }
};
