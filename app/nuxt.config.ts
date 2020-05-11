import { Configuration } from '@nuxt/types';

const config: Configuration = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/pgr7mqo.css' },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#06f' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build'],

  server: {
    port: 9202,
  },

  typescript: {
    typeCheck: {
      eslint: true,
    },
  },

  build: {
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map';
      }
    },

    transpile: ['vee-validate/dist/rules'],

    hotMiddleware: {
      client: {
        // turn off client overlay when errors are present
        overlay: false,
      },
    },

    postcss: {
      plugins: {
        'postcss-nested': {},
      },
    },
  },
};

export default config;
