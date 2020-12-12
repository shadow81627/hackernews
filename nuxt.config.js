export default {
  target: 'static',

  head: {
    titleTemplate: '%s - Hacker News',
    title: 'Hacker News',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  generate: {
    // use '404.html' instead default '200.html'
    fallback: true,
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
    'nuxt-fontawesome',
  ],

  axios: {},

  content: {},

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: false,
    theme: {
      dark: true,
    },
    icons: {
      iconfont: 'mdiSvg',
    },
  },

  build: {
    transpile: ['lodash-es', 'vuetify/lib'],
  },
}
