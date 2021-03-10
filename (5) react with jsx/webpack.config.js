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
            use: [ "babel-loader" ],
            // query: {
            //     presets: [ "env", "react" ]
            // }
        }]
    },
    resolve: {
        extensions: ['*', ".js", ".jsx"]
    }
}