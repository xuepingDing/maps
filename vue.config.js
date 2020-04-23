module.exports = {
  devServer: {
    port: 80,
    proxy: {
      '/api': {
        target: 'https://source.udb.net.cn',
        ws: true,
        changeOrigin: true
      },
    }
  },
  configureWebpack: {
    externals: {
      "BMap": "BMap",
      'BMapLib':'BMapLib'
    }
  }

}