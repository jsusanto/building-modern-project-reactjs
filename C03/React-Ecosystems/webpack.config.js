const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    //to transform ES6 to javascript
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader', //using babel loader
                options: { presets : ["@babel/env"] }
            },
            // add the style and css loader
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output:{
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    //View our react development in the browser
    /* Version 3
    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        port: 3000,
        publicPath: 'http://localhost:3000/dist/',
        hotOnly: true
    },*/
    // Version 4 - "webpack-dev-server": "^4.9.3"
    devServer: {
        // contentBase
        static : {
          directory : path.join(__dirname, "public/")
        },
        port: 3000,
        // publicPath
        devMiddleware:{
           publicPath: "https://localhost:3000/dist/",
        },
        // hotOnly
        hot: "only",
      },
    plugins: [new webpack.HotModuleReplacementPlugin()]
}