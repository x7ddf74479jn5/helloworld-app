module.exports = {
  distDir: '../.next',
  // @see https://www.apollographql.com/docs/react/integrations/webpack/
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(graphql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    })

    return config
  },
}
