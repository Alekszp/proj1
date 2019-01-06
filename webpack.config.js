const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [{
                test: /\.(js||jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: {
                        minimize: true
                    }
                }]
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [{
                        loader: 'style-loader' // creates style nodes from JS strings
                      }, {
                        loader: 'css-loader' // translates CSS into CommonJS
                      }, {
                        loader: 'less-loader' // compiles Less to CSS
                      }]

            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-transform-runtime']
                  }
                }
              }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: './index.html'
        })
    ]
};