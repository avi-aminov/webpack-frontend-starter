const path = require('path')
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const autputFileName = "app";

module.exports={
    mode: 'development',
    devtool: 'source-map',
    context: path.resolve(__dirname, 'src'),
    entry: ['./style.scss', './script.js'] ,
    module: {
        rules: [
            {
                test: /.(scss|css)/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: miniCssExtractPlugin.loader,
                        options: {
                            reloadAll: true
                        }
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
}
