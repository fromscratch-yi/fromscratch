const siteURL = process.env.BASE_URL;
const siteName = 'FromScratch';
const analyticsID = process.env.GOOGLE_ANALYTICS_ID;
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: siteName,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', property: 'twitter:site', content: '@ishiyamayuichi' },
      { hid: 'og:site_name', property: 'og:site_name', content: siteName },
      { 'http-equiv': 'x-dns-prefetch-control', content: 'on' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple_icon.png' },
      // { rel: 'preconnect dns-prefetch', href: '//www.google.com' },
      // { rel: 'preconnect dns-prefetch', href: '//www.google-analytics.com' },
      // { rel: 'preconnect dns-prefetch', href: '//www.googletagservices.com' },
      // { rel: 'preconnect dns-prefetch', href: '//pagead2.googlesyndication.com' },
      // { rel: 'preconnect dns-prefetch', href: '//googleads.g.doubleclick.net' },
      // { rel: 'preconnect dns-prefetch', href: '//fonts.gstatic.com' },
      // { rel: 'preconnect dns-prefetch', href: '//www.gstatic.com' },
    ],
    script: [
      {
        innerHTML: `{
        "@context": "http://schema.org",
        "@type": "Organization",
        "url": "${siteURL}/",
        "logo": "${siteURL}/icon.png",
        "name": "${siteName}",
        "founder": {
          "@type": "Person",
          "name": "Yuichi Ishiyama",
          "url": "${siteURL}/",
          "image": "${siteURL}/profile.jpg",
          "alternateName": "石山 雄一",
          "sameAs": "${process.env.TWITTER_URL}"
        }
      }`,
        type: 'application/ld+json',
      },
    ],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/contentful'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv',
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    'nuxt-compress',
    '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'nuxt-i18n',
    '@nuxtjs/markdownit',
    '@nuxtjs/sitemap',
    [
      'nuxt-compress',
      {
        gzip: {
          threshold: 8192,
        },
        brotli: {
          threshold: 8192,
        },
      },
    ],
  ],

  markdownit: {
    preset: 'default',
    injected: true, // $mdを利用してmarkdownをhtmlにレンダリングする
    breaks: true, // 改行コードを<br>に変換する
    html: true, // HTML タグを有効にする
    linkify: true, // URLに似たテキストをリンクに自動変換する
    typography: true, // 言語に依存しないきれいな 置換 + 引用符 を有効にします。
    runtime: true,
  },

  loading: { color: '#3B8070' },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ja',
    },
    // meta: {
    //   title: `${siteName} | Yuichi Ishiyama's Portfolio ane Blog site.`,
    //   author: 'Yuichi Ishiyama',
    // },
    // manifest: {
    //   name: siteName,
    //   lang: 'ja',
    //   short_name: siteName,
    //   title: `${siteName} | Yuichi Ishiyama's Portfolio ane Blog site.`,
    //   'og:title': `${siteName} | Yuichi Ishiyama's Portfolio ane Blog site.`,
    //   description: `${siteName} | Yuichi Ishiyama's Portfolio ane Blog site.`,
    //   'og:description': `${siteName} | Yuichi Ishiyama's Portfolio ane Blog site.`,
    //   theme_color: '#3B8070',
    //   background_color: '#2b2a2a',
    // },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // hardSource: true,
    postcss: null,
    'html.minify': {
      collapseBooleanAttributes: true,
      decodeEntities: true,
      minifyCSS: true,
      minifyJS: true,
      processConditionalComments: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true,
      trimCustomFragments: true,
      useShortDoctype: true,
    },
    splitChunks: {
      layouts: false,
      pages: true,
      commons: true,
    },
  },

  router: {
    prefetchLinks: false,
    trailingSlash: true,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/reset.scss', '@/assets/css/common.scss'],

  styleResources: {
    scss: ['@/assets/css/_variables.scss'],
  },

  i18n: {
    baseUrl: siteURL,
    locales: [
      {
        code: 'ja',
        iso: 'ja',
        name: '日本語',
        file: 'ja.ts',
      },
      {
        code: 'en',
        iso: 'en',
        name: 'English',
        file: 'en.ts',
      },
    ],
    defaultLocale: 'ja',
    strategy: 'prefix_except_default',
    // detectBrowserLanguage: {
    //   useCookie: false,
    //   cookieKey: 'i18n_redirected',
    //   redirectOn: 'root', // recommended
    // },
    detectBrowserLanguage: false,
    lazy: false,
    seo: true,
    langDir: 'lang/',
    vueI18n: {
      fallbackLocale: 'ja',
    },
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: siteURL,
    exclude: ['/404'],
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    async routes() {
      const { Categories, getEntriesByCategoryRequest } = require('./libs/contentful');
      const routeList = [];
      const categories = [...Object.keys(Categories)];
      const langs = { ja: '', en: '/en' };
      const langsArray = [...Object.keys(langs)];

      for (const langKey of langsArray) {
        for (const categoryKey of categories) {
          const categoryPath = `${langs[langKey]}/blog/${categoryKey}`;
          routeList.push(categoryPath);
          await getEntriesByCategoryRequest(Categories[categoryKey], langKey, -1).then(
            (entries) => {
              routeList.push(
                ...entries.items.map((item) => `${categoryPath}/${item.fields.slug}/`),
              );
            },
          );
        }
      }
      return routeList;
    },
  },
  generate: {
    fallback: '404.html',
    async routes() {
      const { Categories, getEntriesByCategoryRequest } = require('./libs/contentful');
      const routeList = [];
      const categories = [...Object.keys(Categories)];
      const langs = { ja: '', en: '/en' };
      const langsArray = [...Object.keys(langs)];

      for (const langKey of langsArray) {
        for (const categoryKey of categories) {
          const categoryPath = `${langs[langKey]}/blog/${categoryKey}`;
          routeList.push(categoryPath);
          await getEntriesByCategoryRequest(Categories[categoryKey], langKey, -1).then(
            (entries) => {
              routeList.push(
                ...entries.items.map((item) => `${categoryPath}/${item.fields.slug}/`),
              );
            },
          );
        }
      }
      return routeList;
    },
  },
  googleAnalytics: {
    id: analyticsID,
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: analyticsID,
    },
  },
};
