const Domain = 'https://fromscratch-y.work';
export default {
  head () {
    return {
      htmlAttrs: {
        lang: this.meta.lang,
      },
      title: "FromScratch | " + this.meta.title,
      meta: [
        { hid: 'canonical', name: 'canonical', content: Domain + this.meta.url },
        { hid: 'description', name: 'description', content: this.meta.description },
        { hid: 'og:type', property: 'og:type', content: this.meta.type },
        { hid: 'og:title', property: 'og:title', content: 'FromScratch | ' + this.meta.title },
        { hid: 'og:description', property: 'og:description', content: this.meta.description },
        { hid: 'og:url', property: 'og:url', content: Domain + this.meta.url },
        { hid: 'og:image', property: 'og:image', content: this.meta.image },
      ],
    }
  }
}