const webpack = require('webpack')
const BundleAnalyzerPlugin =
    require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(sc|c)ss/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            url: true,
                            sourceMap: false,
                            importLoaders: 2,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            postcssOptions: {
                                plugins: [['autoprefixer', { grid: true }]],
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: false,
                        },
                    },
                ],
            },
        ],
    },
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('dev'),
        }),
        new BundleAnalyzerPlugin(),
    ],
}
