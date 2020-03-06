const path = require('path');
const webpack = require('webpack');

const appDirectory = path.resolve(__dirname, '../');

const babelLoaderConfiguration = {
  test: /\.js$/,
  // exclude: /node_modules\/(?!(react-native-web|react-native-elements|react-native-ratings|react-native-vector-icons)\/).*/,
  include: [
    path.resolve(appDirectory, 'src'),
    path.resolve(appDirectory, 'index.web.js'),
    path.resolve(appDirectory, 'App.js'),
    path.resolve(appDirectory, 'node_modules/react-native-elements'),
    path.resolve(appDirectory, 'node_modules/react-native-vector-icons'),
    path.resolve(appDirectory, 'node_modules/react-native-ratings'),
    path.resolve(appDirectory, 'node_modules/native-base-shoutem-theme'),
    path.resolve(appDirectory, 'node_modules/react-navigation'),
    path.resolve(appDirectory, 'node_modules/react-native-easy-grid'),
    path.resolve(appDirectory, 'node_modules/react-native-drawer'),
    path.resolve(appDirectory, 'node_modules/react-native-safe-area-view'),
    // path.resolve(appDirectory, 'node_modules/react-native-vector-icons'),
    path.resolve(appDirectory, 'node_modules/react-native-keyboard-aware-scroll-view'),
    path.resolve(appDirectory, 'node_modules/react-native-web'),
    path.resolve(appDirectory, 'node_modules/react-native-tab-view'),
    path.resolve(appDirectory, 'node_modules/static-container'),
    path.resolve(appDirectory, 'node_modules/react-native-gesture-handler'),
    path.resolve(appDirectory, 'node_modules/@react-navigation'),
    path.resolve(appDirectory, 'node_modules/react-native-screens'),

    // path.resolve(appDirectory, 'node_modules/react-native-web'),
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets: ["@babel/preset-env","@babel/preset-react",'@babel/preset-flow'],
      plugins: ['@babel/plugin-proposal-class-properties','react-native-web',"@babel/transform-runtime"],
    },
  },
};
const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg|ttf)$/,
  // include: path.resolve(appDirectory, "node_modules/react-native-vector-icons"),
  // exclude: /node_modules\/(?!(react-native-elements|react-native-ratings|react-native-vector-icons)\/).*/,
  // include: [
  //   path.resolve(appDirectory, 'src'),
  //   path.resolve(appDirectory, 'index.web.js'),
  //   path.resolve(appDirectory, 'App.js'),
  //   // path.resolve(appDirectory, 'node_modules/react-native-elements'),
  //   // path.resolve(appDirectory, 'node_modules/react-native-vector-icons'),
  //   // path.resolve(appDirectory, 'node_modules/react-native-ratings'),
  //   // path.resolve(appDirectory, 'node_modules/react-native-web'),
   
  // ],
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]',
    },
  },
};

module.exports = {
  entry: [path.resolve(appDirectory, 'index.web.js')],
  output: {
    filename: 'bundle.js',
    path: path.resolve(appDirectory, 'web'),
  },

  module: {
    rules: [babelLoaderConfiguration, imageLoaderConfiguration],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development',
      ),
      __DEV__: process.env.NODE_ENV === 'production' || true,
    }),
  ],

  resolve: {
    alias: {
      'react-native$': 'react-native-web',
      "react-native/Libraries/Renderer/shims/ReactNativePropRegistry": "react-native-web/dist/modules/ReactNativePropRegistry",
    },
    extensions: ['.web.js', '.js'],
  },

  devServer: {
    contentBase: path.join(appDirectory, 'web'),
    compress: true,
    port: 3000,
  },
};
