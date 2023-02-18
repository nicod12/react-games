const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = { 
    devServer: {
       static: {
        directory: path.join(__dirname,"public")
       },
       compress:true,
       port:3000,
       historyApiFallback: true
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
        })
    ],
}