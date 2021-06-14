const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
    mode: 'development',
    devServer: {
        hot: true,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.(sc|c)ss/,
                use: [
                    // linkタグに出力する機能
                    'style-loader',
                    // CSSをバンドルするための機能
                    {
                        loader: 'css-loader',
                        options: {
                            // CSS内のurl()メソッドの取り込み
                            url: true,
                            // ソースマップの利用有無
                            sourceMap: true,
                            // Sass+PostCSSの場合は2を指定
                            importLoaders: 2,
                        },
                    },
                    // PostCSSのための設定
                    {
                        loader: 'postcss-loader',
                        options: {
                            // PostCSS側でもソースマップを有効にする
                            sourceMap: true,
                            postcssOptions: {
                                plugins: [
                                    // Autoprefixerを有効化
                                    // ベンダープレフィックスを自動付与する
                                    ['autoprefixer', { grid: true }],
                                ],
                            },
                        },
                    },
                    // Sassをバンドルするための機能
                    {
                        loader: 'sass-loader',
                        options: {
                            // ソースマップの利用有無
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('dev'),
        }),
        new ReactRefreshWebpackPlugin(),
    ],
}
