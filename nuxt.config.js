export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dashboardd test viseo gitnpm instal',
    htmlAttrs: {
      lang: 'it',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file for the project
    '@/assets/style/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://google-fonts.nuxtjs.org/
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://github.com/nuxt-community/proxy-module
    '@nuxtjs/proxy',
    '@nuxtjs/style-resources',
    'nuxt-viewport',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
  },
  proxy: {
    '/api': 'https://api.github.com/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    base: '/',
  },


  styleResources: {
    scss: ['./assets/style/*.scss'],
  },


  viewport: {
    /* Viewport options */
    breakpoints: {
      desktop: 1024,
      desktopMedium: 1200,
      desktopWide: 1600,

      mobile: 320,
      mobileMedium: 375,
      mobileWide: 425,

      tablet: 768,
    },
    cookieName: 'viewport',

    defaultBreakpoints: {
      desktop: 'desktop',
      mobile: 'mobile',
      tablet: 'tablet',
    },

    fallbackBreakpoint: 'desktop',
  },

  googleFonts: {
    families: {
      Roboto: true,
      'Open+Sans': true,
    },
  },
}
