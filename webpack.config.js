const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode:"development",
    entry:path.resolve(__dirname,'./demo/entry.js'),
    output:{
        publicPath:'./',
        filename:"main.js",
        path:path.resolve(__dirname,'./demo/dist')
    },
    devServer:{
        contentBase: path.resolve(__dirname,'./demo/dist'),
        open: false
    },
    module:{

    },
    plugins:[new HtmlWebpackPlugin()]
}