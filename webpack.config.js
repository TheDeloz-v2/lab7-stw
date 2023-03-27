const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        populares: './src/populares.js',
        nuevos: './src/nuevos.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist_webpack'),
        filename: '[name].bundle.js',
    },


    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};