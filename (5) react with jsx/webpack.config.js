const TerserPlugin = require("terser-webpack-plugin")
const path = require("path")

module.exports = {
    mode: "development",
    entry: {
        main: path.join(__dirname, "./src/index.js")
    },
    output: {
       path: path.join(__dirname, "./dist"),
       filename: "[name].bundle.js"
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            use: [ "babel-loader" ]
        }]
    },
    resolve: {
        extensions: ['*', ".js", ".jsx"]
    },
    optimization: {
        minimize: true,
        minimizer: [ 
            new TerserPlugin({
                extractComments: false
            }) 
        ]
    }
    // devtool: "eval-source-map"
}