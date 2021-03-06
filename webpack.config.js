const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
    entry: "./bootstrap.js",
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: "ts-loader",
                exclude: "/node_modules",
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bootstrap.js",
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    mode: "development",
    plugins: [
        new CopyWebpackPlugin(['index.html'])
    ],
};
