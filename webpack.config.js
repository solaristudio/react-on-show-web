const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    module: {
        rules: [
            {
                test: /\.js(x)?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|gif)$/,
                use: ['url-loader']
            }
        ],
    },
    performance: {
        hints: false
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
            favicon: 'src/public/favicon.ico',
            filename: './index.html',
        })
    ],
}
