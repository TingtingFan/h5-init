const pxtorem = require('postcss-px2rem');
module.exports = {
    chainWebpack: config => {
        config.module
            .rule('scss')
            .test(/\.scss$/)
            .oneOf('vue')
            .use('px2rem-loader')
            .loader('px2rem-loader')
            .before('postcss-loader') // this makes it work.
            .end()
    },
    css: {
      loaderOptions: {
        postcss: {
          plugins: [
            pxtorem({
              "remUnit": 37.5
            }),
          ],
        }
      },
    },
}