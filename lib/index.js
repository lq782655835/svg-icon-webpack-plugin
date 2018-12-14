const path = require('path')
const buildSVG = require('vue-svgicon/dist/lib/build.js').default

const getAbsolutePath = (originPath) => path.isAbsolute(originPath)
                        ? originPath
                        : path.join(process.cwd(), originPath)

module.exports = class SvgIconPlugin {
    constructor(options) {
        let defaultOpts = {
            sourcePath: './src/assets/svg',
            targetPath: './src/assets/icon',
            tpl: '',
            ext: 'js',
            es6: false,
            svgo: ''
        }
        this.options = {...defaultOpts, ...options}
        this.options.sourcePath = getAbsolutePath(this.options.sourcePath)
        this.options.targetPath = getAbsolutePath(this.options.targetPath)
    }

    apply(compiler) {
        if (compiler.hooks) {
            compiler.hooks.done.tapAsync('SvgIconPlugin', (compilation, callback) => this.execute(compiler, callback))
        } else {
            compiler.plugin('done', (compilation, callback) => this.execute(compiler))
        }
    }

    async execute(compiler, callback) {
        console.log(this.options)
        await buildSVG(this.options)

        callback && callback()
    }
}