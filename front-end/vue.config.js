module.exports = {
  devServer: {
    port: 3000
  },
  configureWebpack: {
    entry: {
      app: './src/main.ts',
      style: [
        'bootstrap/dist/css/bootstrap.min.css'
      ]
    }
  }
}
