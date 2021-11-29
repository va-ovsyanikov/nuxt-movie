export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-movie',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/main.less',
    'vue-slick-carousel/dist/vue-slick-carousel.css', 
    'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  ],
  // подгрузка компонент по клику
  router: {
    prefetchLinks: false
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src:'~plugins/vue-slick-carousel.js'},
  ],
  loading: { color: 'red' },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    less: './assets/variables.less'
  },

  publicRuntimeConfig: {
    axios: {
      // baseURL: 'https://kinopoiskapiunofficial.tech'
      baseURL: 'https://api.themoviedb.org/3/movie/'
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // 'nuxt-webfontloader',
    '@nuxtjs/axios'
  ],





// подключение шрифта
  // webfontloader: {
  //   google: {
  //     families: ['Lato:400,700'] 
  //   }
  // },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  },

  watchers: {
    webpack: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
}
