const {getConfigForKeys} = require('./lib/config.js')
const ctfConfig = getConfigForKeys([
  'CTF_BLOG_POST_TYPE_ID',
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN'
])
const {createClient} = require('./plugins/contentful')
const cdaClient = createClient(ctfConfig)

module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'FromScratch',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'FromScratch Web Site.' },
      { name: 'og:url', content: 'https://fromscratch-y.firebaseapp.com/' },
      { name: 'og:site_name', content: 'FromScratch - Yuichi Ishiyama\'s Portfolio' },
      { name: 'og:image', content: 'https://fromscratch-y.firebaseapp.com/ogp.gif' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:title', name: 'og:title', content: 'FromScratch | Yuichi Ishiyama' },
      { hid: 'og:description', name: 'og:description', content: 'This is Yuichi Ishiyama\'s Portfolio and Blog site.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', size: "152x152", href: '/apple_icon.png' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: [
    '@nuxtjs/bulma',
    'nuxt-fontawesome',
    '@nuxtjs/markdownit'
  ],
  markdownit: {
    injected: true, // $mdを利用してmarkdownをhtmlにレンダリングする
    breaks: true, // 改行コードを<br>に変換する
    html: true, // HTML タグを有効にする
    linkify: true, // URLに似たテキストをリンクに自動変換する
    typography: true,  // 言語に依存しないきれいな 置換 + 引用符 を有効にします。
    use: [
      'markdown-it-toc' // 目次を作るためのライブラリ。別途インストールが必要
    ]
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }
    ]
  },
  transition: {
    name: 'page',
    mode: 'out-in',
    beforeEnter (el) {
      console.log('Before enter...');
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
    '~/plugins/i18n.js',
    { src: '~plugins/contentful' }
  ],
  router: {
    middleware: 'i18n'
  },
  generate: {
    routes() {
      return cdaClient.getEntries({
        'content_type': ctfConfig.CTF_BLOG_POST_TYPE_ID
      }).then(entries => {
        return [
          '/', '/about', '/work', '/blog', '/ja', '/ja/about', '/ja/work', '/ja/blog',
          ...entries.items.map(entry => `/post/${entry.fields.slug}`),
          ...entries.items.map(entry => `/ja/post/${entry.fields.slug}`)
        ]
      })
    }
  },
  env: {
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_BLOG_POST_TYPE_ID: ctfConfig.CTF_BLOG_POST_TYPE_ID
  },
  /*
  ** Build configuration
  */
  build: {
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

