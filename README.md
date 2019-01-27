# svg-icon-webpack-plugin

Auto convert svg to icon component data by webpack plugin。It's base on [vue-svgicon](https://github.com/MMF-FE/vue-svgicon) component for svg solution。

## Install

``` shell
npm install vue-svgicon svg-icon-webpack-plugin --save-dev
```

## Usage

1. Configure webpack plugin In vue.config.js
``` js
const SvgIconWebpackPlugin = require('svg-icon-webpack-plugin')

module.exports = {
    configureWebpack: {
        plugins: [
            new SvgIconWebpackPlugin({
                // config setting
                sourcePath: './src/assets/svg',
                targetPath: './src/assets/icon',
            })
        ]
    }
}
```

2. import result data in entry point file
``` js
import * as svgicon from 'vue-svgicon'
Vue.use(svgicon)
import './assets/icon'
```

3. use svgicon component in vue file
``` html
<svgicon name="arrow_down" width="50" height="50"></svgicon>
```
