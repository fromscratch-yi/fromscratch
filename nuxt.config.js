const {getConfigForKeys} = require('./lib/config.js')
const ctfConfig = getConfigForKeys([
  'BASE_URL',
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN',
  'GOOGLE_ANALYTICS_ID',
  'GOOGLE_ADSENSE_ID'
])
const {createClient} = require('./plugins/contentful')
const cdaClient = createClient(ctfConfig)
const webpack = require('webpack');
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'FromScratch',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', property: 'twitter:site', content: '@yuichi_ishiyama' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'FromScratch' },
      { 'http-equiv': 'x-dns-prefetch-control', content: 'on' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple_icon.png' },
      { rel: 'preconnect dns-prefetch', href: '//www.google.com' },
      { rel: 'preconnect dns-prefetch', href: '//www.google-analytics.com' },
      { rel: 'preconnect dns-prefetch', href: '//www.googletagservices.com' },
      { rel: 'preconnect dns-prefetch', href: '//pagead2.googlesyndication.com' },
      { rel: 'preconnect dns-prefetch', href: '//googleads.g.doubleclick.net' },
      { rel: 'preconnect dns-prefetch', href: '//fonts.gstatic.com' },
      { rel: 'preconnect dns-prefetch', href: '//www.gstatic.com' }
    ],
    script: [{
      innerHTML: `{
        "@context": "http://schema.org",
        "@type": "Organization",
        "url": "https://fromscratch-y.work/",
        "logo": "https://fromscratch-y.work/icon.png",
        "name": "FromScratch FromsBlog"
      }`,
      type: 'application/ld+json'
    }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: [
    '@nuxtjs/google-analytics',
    ['@nuxtjs/google-adsense'],
    '@nuxtjs/pwa',
    '@nuxtjs/bulma',
    'nuxt-fontawesome',
    '@nuxtjs/markdownit',
    '@nuxtjs/sitemap'
  ],
  googleAnalytics: {
    id: ctfConfig.GOOGLE_ANALYTICS_ID,
    debug: {
      sendHitTask: true
    },
  },

  'google-adsense': {
    onPageLoad: false,
    pageLevelAds: false,
  },
  publicRuntimeConfig: {
    'google-adsense': {
      id: ctfConfig.GOOGLE_ADSENSE_ID,
      analyticsUacct: ctfConfig.GOOGLE_ANALYTICS_ID,
    },
  },
  sitemap: {
    path: '/sitemap.xml', // 出力パス
    hostname: process.env.BASE_URL,
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    exclude: [ // 除外項目
      '/404*',
      '/500*',
      '/about',
      '/work',
      '/blog'
    ],
    async routes () {
      var routeList = [
        '/',
        '/about/',
        '/work/',
        '/blog/',
        '/blog/technology/',
        '/blog/technology/frontend/',
        '/blog/technology/backend/',
        '/blog/technology/mobile/',
        '/blog/technology/infrastructure/',
        '/blog/technology/other/',
        '/blog/businesslife/',
        '/blog/businesslife/motivation/',
        '/blog/businesslife/management/',
        '/blog/businesslife/blogskill/',
        '/ja/',
        '/ja/about/',
        '/ja/work/',
        '/ja/blog/',
        '/ja/blog/technology/',
        '/ja/blog/technology/frontend/',
        '/ja/blog/technology/backend/',
        '/ja/blog/technology/mobile/',
        '/ja/blog/technology/infrastructure/',
        '/ja/blog/technology/other/',
        '/ja/blog/businesslife/',
        '/ja/blog/businesslife/motivation/',
        '/ja/blog/businesslife/management/',
        '/ja/blog/businesslife/blogskill/',
      ];
      await cdaClient.getEntries({
        'content_type': 'technology',
        'locale': 'ja',
        'fields.title[exists]': 'true'
      }).then(entries => {
        routeList.push(
          ...entries.items.map(entry => `/ja/blog/technology/${entry.fields.category}/${entry.fields.slug}/`)
        )
      });
      await cdaClient.getEntries({
        'content_type': 'businesslife',
        'locale': 'ja',
        'fields.title[exists]': 'true'
      }).then(entries => {
        routeList.push(
          ...entries.items.map(entry => `/ja/blog/businesslife/${entry.fields.category}/${entry.fields.slug}/`)
        )
      });
      await cdaClient.getEntries({
        'content_type': 'technology',
        'locale': 'en',
        'fields.title[exists]': 'true'
      }).then(entries => {
        routeList.push(
          ...entries.items.map(entry => `/blog/technology/${entry.fields.category}/${entry.fields.slug}/`)
        )
      });
      await cdaClient.getEntries({
        'content_type': 'businesslife',
        'locale': 'en',
        'fields.title[exists]': 'true'
      }).then(entries => {
        routeList.push(
          ...entries.items.map(entry => `/blog/businesslife/${entry.fields.category}/${entry.fields.slug}/`)
        )
      });
      return routeList;
    }
  },
  pwa: {
    workbox: {
      offlineAnalytics: true
    },
    manifest: {
      name: "Yuichi Ishiyama's Portfolio & Blog",
    }
  },
  markdownit: {
    injected: true, // $mdを利用してmarkdownをhtmlにレンダリングする
    breaks: true, // 改行コードを<br>に変換する
    html: true, // HTML タグを有効にする
    linkify: true, // URLに似たテキストをリンクに自動変換する
    typography: true,  // 言語に依存しないきれいな 置換 + 引用符 を有効にします。
  },
  fontawesome: {
    component: 'fa'
  },
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    beforeEnter (el) {
      var navMenu = document.getElementsByClassName("nav_menu");
      if(navMenu.length > 0) {
        var classList = navMenu.item(0).classList;
        if (classList.contains("open")) {
          classList.remove("open");
        }
      }
    }
  },
  plugins: [
    '~/plugins/scroll.js',
    '~/plugins/i18n.js',
    { src: '~plugins/contentful' },
  ],
  router: {
    middleware: 'i18n'
  },
  generate: {
    routes: async function() {
      var routeList = [
        '/',
        '/about',
        '/work',
        '/blog',
        '/blog/technology',
        '/blog/technology/frontend',
        '/blog/technology/backend',
        '/blog/technology/mobile',
        '/blog/technology/infrastructure',
        '/blog/technology/other',
        '/blog/businesslife',
        '/blog/businesslife/motivation',
        '/blog/businesslife/management',
        '/blog/businesslife/blogskill',
        '/ja',
        '/ja/about',
        '/ja/work',
        '/ja/blog',
        '/ja/blog/technology',
        '/ja/blog/technology/frontend',
        '/ja/blog/technology/backend',
        '/ja/blog/technology/mobile',
        '/ja/blog/technology/infrastructure',
        '/ja/blog/technology/other',
        '/ja/blog/businesslife/',
        '/ja/blog/businesslife/motivation',
        '/ja/blog/businesslife/management',
        '/ja/blog/businesslife/blogskill',
      ];
      await cdaClient.getEntries({
        'content_type': 'technology',
        'locale': 'ja',
        'fields.title[exists]': 'true'
      }).then(entries => {
        routeList.push(
          ...entries.items.map(entry => `/ja/blog/technology/${entry.fields.category}/${entry.fields.slug}`)
        )
      });
      await cdaClient.getEntries({
        'content_type': 'businesslife',
        'locale': 'ja',
        'fields.title[exists]': 'true'
      }).then(entries => {
        routeList.push(
          ...entries.items.map(entry => `/ja/blog/businesslife/${entry.fields.category}/${entry.fields.slug}`)
        )
      });
      await cdaClient.getEntries({
        'content_type': 'technology',
        'locale': 'en',
        'fields.title[exists]': 'true'
      }).then(entries => {
        routeList.push(
          ...entries.items.map(entry => `/blog/technology/${entry.fields.category}/${entry.fields.slug}`)
        )
      });
      await cdaClient.getEntries({
        'content_type': 'businesslife',
        'locale': 'en',
        'fields.title[exists]': 'true'
      }).then(entries => {
        routeList.push(
          ...entries.items.map(entry => `/blog/businesslife/${entry.fields.category}/${entry.fields.slug}`)
        )
      });
      return routeList;
    },
    router: {
      extendRoutes(routes, resolve) {
        routes.push({
          name: 'notFound',
          path: '*',
          component: resolve(__dirname, 'pages/404.vue')
        });
      }
    }
  },
  env: {
    BASE_URL: ctfConfig.BASE_URL,
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
  },
  /*
  ** Build configuration
  */
  build: {
    hardSource: true,
    postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false
        }
      }
    },
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      config.externals = {
        moment: "moment"
      };
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

