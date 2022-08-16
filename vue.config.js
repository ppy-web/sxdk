const targetUrl = "http://192.168.113.57"; // 代理地址
// const targetUrl = "http://192.168.30.110:8081"; // 代理地址
const port = 8888; // 运行端口

const headers = {
  Cookie: "zzszhxy-ur-ck=OgMmqcHHR7EFde3LUKpV38KRP7gR3KgoSD6LDqQpN4uc1mGsquXaHtyhEQzBAF5aYiFi+UEJZ/kJT8r0faXmsgC8jQbnK+bPrHmuqm8D7U7acUJ+avgYMxwODRQDZaUq8rqLeqjWr0YyKDWi5EY3gHUY5D4HNtY+/c1PEcTt88VZnY3VHKNUCEmfPw8EqB48jJ5/XklVGu4=; zzszhxy-sr-ck=u2M4Hp16VSPuC57b0EymoXLPDWnsDllyrQ11bVoCjbUG3o7ApmbMLA==; SESSION=9564f78c-f4d8-4f89-a0ad-02b1b4e9136e",
  Referer: `${targetUrl}`,
};

module.exports = {
  outputDir: "dist",
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  lintOnSave: false,
  devServer: {
    host: "0.0.0.0",
    disableHostCheck: true,
    port: port,
    open: false, // 启动后是否自动打开网页
    headers,
    proxy: {
      "/sd-login": {
        target: targetUrl,
        changeOrigin: true,
        pathRewrite: {
          "^/sd-login": "/sd-login",
        },
        headers: headers,
      },
      "/sd-sxsx-manager": {
        target: targetUrl,
        changeOrigin: true,
        pathRewrite: {
          "^/sd-sxsx-manager": "/sd-sxsx-manager",
        },
        headers: headers,
      },
      "/sd-portal": {
        target: targetUrl,
        changeOrigin: true,
        pathRewrite: {
          "^/sd-portal": "/sd-portal",
        },
        headers: headers,
      },
    },
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = "校外实习打卡"
      return args
    }),
    config.plugin('copy').use(require('copy-webpack-plugin'), [
      [
        {
          from: './static',
          to: './static',
          // ignore: ['.*']
        }
      ]
    ])
  },
};
