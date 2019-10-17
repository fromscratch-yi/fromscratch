const {getConfigForKeys} = require('./lib/config.js')
const ctfConfig = getConfigForKeys([
  'BASE_URL',
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN',
  'GOOGLE_ANALYTICS_ID'
])
const {createClient} = require('./plugins/contentful')
const cdaClient = createClient(ctfConfig)

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'FromScratch',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Yuichi Ishiyama\'s Portfolio & Blog site.' },
      { hid: 'canonical', name: 'canonical', content: 'https://fromscratch-y.work/' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', property: 'twitter:site', content: '@IshiyamaYuichi' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'FromScratch | Yuichi Ishiyama' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://fromscratch-y.work/' },
      { hid: 'og:title', property: 'og:title', content: 'FromScratch | Yuichi Ishiyama' },
      { hid: 'og:description', property: 'og:description', content: 'This is Yuichi Ishiyama\'s Portfolio and Blog site.' },
      { hid: 'og:image', property: 'og:image', content: 'https://fromscratch-y.work/ogp.gif' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple_icon.png' }
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
    ['@nuxtjs/google-analytics', {
      id: ctfConfig.GOOGLE_ANALYTICS_ID
    }],
    '@nuxtjs/pwa',
    '@nuxtjs/bulma',
    'nuxt-fontawesome',
    '@nuxtjs/markdownit',
    '@nuxtjs/sitemap'
  ],
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
    generate: true,
    async routes () {
      var routeList = [
        '/',
        '/about/',
        '/work/',
        '/blog/',
        '/category/technology/',
        '/category/technology/frontend/',
        '/category/technology/backend/',
        '/category/technology/mobile/',
        '/category/technology/infrastructure/',
        '/category/technology/other/',
        '/category/businesslife/',
        '/category/businesslife/motivation/',
        '/category/businesslife/management/',
        '/category/businesslife/blogskill/',
        '/ja/',
        '/ja/about/',
        '/ja/work/',
        '/ja/blog/',
        '/ja/category/technology/',
        '/ja/category/technology/frontend/',
        '/ja/category/technology/backend/',
        '/ja/category/technology/mobile/',
        '/ja/category/technology/infrastructure/',
        '/ja/category/technology/other/',
        '/ja/category/businesslife/',
        '/ja/category/businesslife/motivation/',
        '/ja/category/businesslife/management/',
        '/ja/category/businesslife/blogskill/',
      ];
      await cdaClient.getEntries({
        'content_type': 'technology',
        'locale': 'ja',
        'fields.title[exists]': 'true'
      }).then(entries => {
        routeList.push(
          ...entries.items.map(entry => `/ja/category/technology/${entry.fields.category}/${entry.fields.slug}/`)
        )
      });
      await cdaClient.getEntries({
        'content_type': 'businesslife',
        'locale': 'ja',
        'fields.title[exists]': 'true'
      }).then(entries => {
        routeList.push(
          ...entries.items.map(entry => `/ja/category/businesslife/${entry.fields.category}/${entry.fields.slug}/`)
        )
      });
      await cdaClient.getEntries({
        'content_type': 'technology',
        'locale': 'en',
        'fields.title[exists]': 'true'
      }).then(entries => {
        routeList.push(
          ...entries.items.map(entry => `/category/technology/${entry.fields.category}/${entry.fields.slug}/`)
        )
      });
      await cdaClient.getEntries({
        'content_type': 'businesslife',
        'locale': 'en',
        'fields.title[exists]': 'true'
      }).then(entries => {
        routeList.push(
          ...entries.items.map(entry => `/category/businesslife/${entry.fields.category}/${entry.fields.slug}/`)
        )
      });
      return routeList;
    }
  },
  manifest: {
    name: "Yuichi Ishiyama's Portfolio & Blog",
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
        '/category/technology',
        '/category/technology/frontend',
        '/category/technology/backend',
        '/category/technology/mobile',
        '/category/technology/infrastructure',
        '/category/technology/other',
        '/category/businesslife',
        '/category/businesslife/motivation',
        '/category/businesslife/management',
        '/category/businesslife/blogskill',
        '/ja',
        '/ja/about',
        '/ja/work',
        '/ja/blog',
        '/ja/category/technology',
        '/ja/category/technology/frontend',
        '/ja/category/technology/backend',
        '/ja/category/technology/mobile',
        '/ja/category/technology/infrastructure',
        '/ja/category/technology/other',
        '/ja/category/businesslife/',
        '/ja/category/businesslife/motivation',
        '/ja/category/businesslife/management',
        '/ja/category/businesslife/blogskill',
      ];
      await cdaClient.getEntries({
        'content_type': 'technology',
        'locale': 'ja',
        'fields.title[exists]': 'true'
      }).then(entries => {
        routeList.push(
          ...entries.items.map(entry => `/ja/category/technology/${entry.fields.category}/${entry.fields.slug}`)
        )
      });
      await cdaClient.getEntries({
        'content_type': 'businesslife',
        'locale': 'ja',
        'fields.title[exists]': 'true'
      }).then(entries => {
        routeList.push(
          ...entries.items.map(entry => `/ja/category/businesslife/${entry.fields.category}/${entry.fields.slug}`)
        )
      });
      await cdaClient.getEntries({
        'content_type': 'technology',
        'locale': 'en',
        'fields.title[exists]': 'true'
      }).then(entries => {
        routeList.push(
          ...entries.items.map(entry => `/category/technology/${entry.fields.category}/${entry.fields.slug}`)
        )
      });
      await cdaClient.getEntries({
        'content_type': 'businesslife',
        'locale': 'en',
        'fields.title[exists]': 'true'
      }).then(entries => {
        routeList.push(
          ...entries.items.map(entry => `/category/businesslife/${entry.fields.category}/${entry.fields.slug}`)
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
    analyze: true,
    postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false
        }
      }
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
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

