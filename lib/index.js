const path = require('path')
const buildSVG = require('vue-svgicon/dist/lib/build.js').default

module.exports = class SvgIconPlugin {
    constructor(options) {
        let defaultOpt = {
            sourcePath: path.join(process.cwd(), './assets/svg'),
            targetPath: path.join(process.cwd(), './assets/icon'),
            tpl: '',
            ext: 'js',
            es6: false,
            svgo: ''
        }
        this.options = {...defaultOpt, ...options}
    }

    apply(compiler) {
        if (compiler.hooks) {
            compiler.hooks.done.tapAsync('SvgIconPlugin', (compilation, callback) => this.execute(compiler, callback))
        } else {
            compiler.plugin('done', () => this.execute(compiler))
        }
    }

    async execute(compiler, callback) {
        callback && callback()

        console.log('begin execute')
        console.log(this.options)
        await buildSVG(this.options)
    }
}