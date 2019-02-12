const Domain = 'https://fromscratch-y.work';
export default {
  head () {
    return {
      __dangerouslyDisableSanitizers: ['script'],
      script: [{
        innerHTML: `{
          "@context": "http://schema.org",
          "@type": "Person",
          "name": "Yuichi Ishiyama",
          "url": "${Domain + this.meta.url}",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "${Domain}"
          },
          "description": "${this.meta.description}"
        }`,
        type: 'application/ld+json'
      }],
      htmlAttrs: {
        lang: this.meta.lang,
      },
      title: this.meta.title + " - FromScratch",
      meta: [
        { hid: 'canonical', name: 'canonical', content: Domain + this.meta.url },
        { hid: 'description', name: 'description', content: this.meta.description },
        { hid: 'og:type', property: 'og:type', content: this.meta.type },
        { hid: 'og:title', property: 'og:title', content: 'FromScratch | ' + this.meta.title },
        { hid: 'og:description', property: 'og:description', content: this.meta.description },
        { hid: 'og:url', property: 'og:url', content: Domain + this.meta.url },
        { hid: 'og:image', property: 'og:image', content: this.meta.image },
      ],
      bodyAttrs: {
        class: (this.meta.bodyClass ? this.meta.bodyClass : 'base')
      }
    }
  }
}