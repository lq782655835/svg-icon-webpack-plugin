const path = require('path')
const SvgIconPlugin = require('../lib/index')

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
        //   { test: /\.txt$/, use: 'raw-loader' }
        ]
    },
    plugins: [
        new SvgIconPlugin()
    ]
}