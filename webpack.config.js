const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const InlineSourceWebpackPlugin = require('inline-source-webpack-plugin');


module.exports = {
    entry: {
        'app': "./src/index.jsx",
        'service-worker': "./src/service-worker.js",
    }, 
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    devServer: {
       static: {
        directory: path.join(__dirname,"public")
       },
       compress:true,
       port:3000,
       historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js?$|jsx/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, "src"),
                use: ["style-loader", "css-loader", "postcss-loader"]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new CleanWebpackPlugin(),
        new InlineSourceWebpackPlugin({
            compress: true,
            rootpath: './src',
            noAssetMatch: 'warn'
          })
    ],
}