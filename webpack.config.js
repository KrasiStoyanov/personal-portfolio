const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");

const htmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: "./public/index.html",
    filename: "index.html",
    inject: "body",
});

const extractSassPluginConfig = new ExtractTextPlugin({
    filename: "public/css/style.css",
    allChunks: true,
});

module.exports = {
    entry: ["./client/index.js", "./public/sass/main.scss"],
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js",
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.jsx$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: extractSassPluginConfig.extract({
                    use: [
                        {
                            loader: "css-loader",
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: () => [autoprefixer()],
                            },
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                    fallback: "style-loader",
                }),
            },
            {
                test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
                loader: "url-loader?limit=100000",
            },
        ],
    },
    plugins: [htmlWebpackPluginConfig, extractSassPluginConfig],
};
