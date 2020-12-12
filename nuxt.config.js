import pkg from './package'

const BASE_URL = (
  process.env.BASE_URL ||
  process.env.DEPLOY_URL ||
  process.env.URL ||
  process.env.VERCEL_URL ||
  `http${process.env.PORT === 433 ? 's' : ''}://${process.env.HOST}:${
    process.env.PORT
  }`
).replace(
  /(^http[s]?)?(?::\/\/)?(.*)/,
  function (_, protocol = 'http', domain) {
    return `${protocol}://${domain}`
  }
)

const env = {
  HOST: process.env.HOST,
  PORT: process.env.PORT,
  BASE_URL,
  VERSION: pkg.version,
  COMMIT:
    process.env.npm_package_gitHead ||
    process.env.TRAVIS_COMMIT ||
    process.env.VERCEL_GITHUB_COMMIT_SHA,
  DATE_GENERATED: new Date().toISOString(),
  APP_NAME:
    process.env.APP_NAME ||
    `${pkg.name.charAt(0).toUpperCase()}${pkg.name.slice(1)}`,
}

export default {
  target: 'static',

  publicRuntimeConfig: {
    ...env,
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID || 'UA-176793964-1',
    },
  },

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

  pwa: {
    meta: {
      ogHost: env.BASE_URL,
    },
  },

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
