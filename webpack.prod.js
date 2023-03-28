const { merge } = require('webpack-merge')
const common = require('./webpack.config.js')
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    performance: {
        hints: false,
    },
    entry: {
        index: './src/index.js',
    },
      output: {
        path: path.resolve(__dirname, 'dist_webpack'),
        filename: '[name].bundle.js',
      },
      plugins: [new MiniCssExtractPlugin({
        filename: 'bundle.css'
      }), new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        chunks: ['index']
      }), new HtmlWebpackPlugin({
        template: './src/nuevos.html',
        filename: 'nuevos.html',
        chunks: ['index']
    }), new HtmlWebpackPlugin({
        template: './src/populares.html',
        filename: 'populares.html',
        chunks: ['index']
    }), new HtmlWebpackPlugin({
        template: './src/pagina1.html',
        filename: 'pagina1.html',
        chunks: ['index']
    }), new HtmlWebpackPlugin({
        template: './src/pagina2.html',
        filename: 'pagina2.html',
        chunks: ['index']
    }), new HtmlWebpackPlugin({
        template: './src/pagina3.html',
        filename: 'pagina3.html',
        chunks: ['index']
    })],
    module: {
        rules: [
            {
                test: /.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
})