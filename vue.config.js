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
      "^/api": "http://172.16.32.212:3000/"
    }
  }
};
