const path = require('path')

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
          .set('@$', resolve('src'))
    
        const svgRule = config.module.rule('svg')
        svgRule.uses.clear()
        svgRule
          .oneOf('inline')
          .resourceQuery(/inline/)
          .use('vue-svg-icon-loader')
          .loader('vue-svg-icon-loader')
          .end()
          .end()
          .oneOf('external')
          .use('file-loader')
          .loader('file-loader')
          .options({
            name: 'assets/[name].[hash:8].[ext]'
          })
      },
}