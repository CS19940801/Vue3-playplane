const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode:"development",
    entry:path.resolve(__dirname,'./demo/index.js'),
    output:{
        publicPath:'./',
        filename:"main.js",
        path:path.resolve(__dirname,'./demo/dist')
    },
    module:{

    },
    plugins:[new HtmlWebpackPlugin()]
}