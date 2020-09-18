module.exports = {
	lintOnSave: false,//是否在保存的时候使用 `eslint-loader` 进行检查。
  devServer: {
    port: 80,
    proxy: {
      '/api': {
        // target: 'https://source.udb.net.cn',
        target:'http://192.168.1.42:8989',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
            '^/api': ''
        }
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