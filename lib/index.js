const { spawn } = require('child_process')

module.exports = class SvgIconPlugin {
    constructor(options) {
        let defaultOpt = {
            s: './assets/svg',
            t: './assets/icon'
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

    execute(compiler, callback) {
        callback && callback()

        console.log('begin execute')
        console.log(this.options)
        let args = []
        Object.keys(this.options).forEach(key => args = args.concat([`-${key}`, this.options[key]]))
        const vsvg= spawn('vsvg', args, {stdio: 'inherit'})

        vsvg.on('close', (code) => `error: ${code}`)
    }
}