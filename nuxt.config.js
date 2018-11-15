const pkg = require('./package')
import bodyParser from 'body-parser'
const session = require('express-session')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.4.2/css/all.css',
        integrity:
          'sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns',
        crossorigin: 'anonymous'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Varela+Round'
      }
    ],
    script: [
      {
        src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'
      },
      {
        src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
        integrity:
          'sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo',
        crossorigin: 'anonymous'
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
        integrity:
          'sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49',
        crossorigin: 'anonymous'
      },
      {
        src:
          'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js',
        integrity:
          'sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy',
        crossorigin: 'anonymous'
      },
      {
        src:
          'https://maps.googleapis.com/maps/api/js?key=AIzaSyBQjtj0TxFDfqm8uQbovjJ0pEVtkCgePCw&',
        async: true,
        defer: true
      },
      {
        src: 'https://apis.google.com/js/platform.js',
        async: true,
        defer: true
      }
    ]
  },

  loading: { color: '#ff0000' },

  css: [
    { src: '~/assets/scss/main.scss' },
    { src: '~/assets/scss/buefy-overrides.scss', lang: 'sass' }
  ],

  plugins: [
    {
      src: '~/plugins/google-authen.js',
      ssr: false
    },
    { src: '~/plugins/facebook-authen.js', ssr: false }
  ],

  modules: [
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    'nuxt-buefy'
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/api': {
      target: 'http://localhost:5000/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' }
    }
  },

  build: {
    vendors: ['babel-polyfill'],
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // })
      }
    },
    serverMiddleware: [
      // body-parser middleware
      bodyParser.json(),
      // session middleware
      session({
        secret: 'thaycacac',
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 600000 }
      })
      // API middleware
      // '~/server/server.js'
    ]
  }
}
