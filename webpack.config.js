const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const extractCss = new ExtractTextPlugin({
    filename: "../css/styles1.css",
    disable: true
})

const extractSass = new ExtractTextPlugin({
    filename: "../css/styles2.css",
    disable: true
})

module.exports = {
  context: __dirname,
  entry: './common/js/app/app.js',
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/common/js/'),
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/common/'
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        include: path.resolve(__dirname, 'common/js'),
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: extractCss.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.scss$/,
        loader: extractSass.extract({
            use: [{
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }],
            // use style-loader in development 
            fallback: "style-loader"
        })
      }
    ]
  },
  plugins: [
    extractCss,
    extractSass
  ]
}
