module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'navigator.language.split("-")[0]',
      fallbackLocale: 'de',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://host.docker.internal:3000',
        pathRewrite: { '^/api': '' },
      },
    },
  }
};
