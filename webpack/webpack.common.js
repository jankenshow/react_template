const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '..', './src/index.tsx'),
    output: {
        path: path.resolve(__dirname, '..', './build'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        alias: {
            '~': path.join(__dirname, '../src/'),
        },
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            {
                test: /\.ttf$/,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', './src/html/index.html'),
            favicon: path.resolve(__dirname, '..', './src/images/logo.svg'),
        }),
        // new CopyPlugin({
        //     patterns: [{ from: 'source', to: 'dest' }],
        // }),
    ],
    stats: 'errors-only',
}
