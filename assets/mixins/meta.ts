import Vue from 'vue';
const siteURL = process.env.BASE_URL;
export default Vue.extend({
  head() {
    const currentURL: string = this.$route.fullPath;
    return {
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          innerHTML: JSON.stringify(
            {
              '@context': 'http://schema.org',
              '@type': 'Person',
              name: 'Yuichi Ishiyama',
              url: `${siteURL + currentURL}`,
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `${siteURL}/`,
              },
              description: `${this.meta.description}`,
            },
            null,
            2,
          ),
          type: 'application/ld+json',
        },
      ],
      title: this.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta.description },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.meta.title} | FromScratch`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.meta.description,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: siteURL + currentURL,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${siteURL}/ogp.gif`,
        },
      ],
      bodyAttrs: {
        class: 'base',
      },
    };
  },
});
