import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'auth/login', method: 'post', propertyName: 'token'
          },
          user: {
            url: 'me', method: 'get', propertyName: 'data'
          },
          logout: {
            url: 'logout', method: 'get'
          }
        }
      }
    },
    redirect: {
      login: '/auth/login',
      home: '/'
    }
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
    }
  },

  axios: {
    baseURL: 'http://172.16.0.54:80/api/'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extractCSS: true,
    extend (config, ctx) {
    }
  }
}
