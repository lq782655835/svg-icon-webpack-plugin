const SvgIconWebpackPlugin = require('../lib/index')

module.exports = {
    configureWebpack: {
        plugins: [
            new SvgIconWebpackPlugin({
                sourcePath: './src/assets/svg',
                targetPath: './src/assets/icon',
            })
        ]
    }
}