const {addAfterLoader, loaderByName} = require('@craco/craco')
// These packages are outdated because CRACO is unable to import ESM Files
const math = require('remark-math')
const katex = require('rehype-katex')


module.exports = {
  webpack: {
    configure(webpackConfig) {
      addAfterLoader(webpackConfig, loaderByName('babel-loader'), {
        test: /\.mdx?$/,
        use: [
          {
            // https://mdxjs.com/migrating/v2/#mdx-jsloader
            loader: require.resolve('@mdx-js/loader'),
            options: {
              remarkPlugins: [math, katex]
            }
          }
        ]
      })
      return webpackConfig
    }
  }
}