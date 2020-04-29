const config = require('config')
const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
const path = require('path')

module.exports = withImages(
  withSass({
    /* config options here */
    publicRuntimeConfig: config.publicRuntimeConfig,
    webpack(config, options) {
      config.resolve.alias.utils = path.join(__dirname, 'utils')
      // config.node = { fs: 'empty' } #doesn't compile
      config.module.rules.push({
        test: /\.(wasm)$/,
        type: 'javascript/auto',
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/wasm', // set this whatever path you desire
            name: '[name]-[hash].[ext]'
          }
        }
      })
      return config
    }
  })
)
