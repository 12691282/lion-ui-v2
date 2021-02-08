
//  vue.config.js 是一个可选的配置文件，如果项目的 (和 package.json 同级的)
//  根目录中存在这个文件，那么它会被 @vue/cli-service 自动加载。
//  https://cli.vuejs.org/zh/config/#vue-config-js 

const defaultSettings = require('./config/settings.js')

const port =  defaultSettings.port // 端口

const path = require('path')


module.exports = {
    lintOnSave: false,
    publicPath: "/",
    // 在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）（默认dist）
    outputDir: 'dist',
    // 用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
    assetsDir: 'static',
   // webpack-dev-server 相关配置
    devServer: {
        host: '0.0.0.0',
        port: port,
        proxy: {
        // detail: https://cli.vuejs.org/config/#devserver-proxy
        [process.env.VUE_APP_BASE_API]: {
            target: `http://localhost:8080`,
            changeOrigin: true,
            pathRewrite: {
            ['^' + process.env.VUE_APP_BASE_API]: ''
            }
        }
    },
    disableHostCheck: true
  },
  configureWebpack: (config) => {

    if (process.env.NODE_ENV === 'production') {
        // 为生产环境修改配置...
        config.mode = 'production'
    } else {
        // 为开发环境修改配置...
        config.mode = 'development'
    }

    Object.assign(config, {
        // 开发生产共同配置
        resolve:{
          extensions: ['.js', '.vue', '.json'],
           // 别名配置
          alias: {
            '@': path.resolve(__dirname, './src'),
            '@c': path.resolve(__dirname, './src/components'),
            '@v': path.resolve(__dirname, './src/views')
          } 
        }
      })

  },
    chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
        .tap(options => {
          // 修改它的选项...
          return options
        })
  }
  
}