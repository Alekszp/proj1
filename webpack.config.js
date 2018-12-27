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

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: './index.html'
        })
    ]
};