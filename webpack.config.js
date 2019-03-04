var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/fileuploader.js',
    output: {
        path: path.resolve('lib'),
        filename: 'fileuploader.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            }
        ]
    }
};