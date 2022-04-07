<template>
  <article id="category">
    <default-page-title :title="$t(`category.${category}.name`)" />
    <terminal :text="text" />
    <p class="page-explain">{{ $t(`category.${category}.description`) }}</p>
    <article-card-list :articles="categoryArticles" />
    <div class="ad-wrap">
      <adsense ad-layout="in-article" :ad-slot="adSlotID" ad-format="fluid" ad-responsive="false" />
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue';
import Meta from '~/assets/mixins/meta';
import { CardItem, Categories, getEntriesByCategory } from '@/libs/contentful';
const adSenseID = process.env.GOOGLE_ADSENSE_ID;
const adSlot = process.env.GOOGLE_ADSENSE_SLOT_ID;

export default Vue.extend({
  name: 'CategoryPage',
  mixins: [Meta],
  layout: 'blog',
  validate({ params }) {
    return Object.keys(Categories).includes(params.category);
  },
  async asyncData({ app, params }) {
    const category: Categories = Categories[params.category as keyof typeof Categories];
    const categoryArticles: CardItem[] = await getEntriesByCategory(category, app.i18n.locale, -1);
    return { categoryArticles };
  },
  data(): {
    category: string;
    text: String;
    meta: Object;
    adSlotID: string;
  } {
    const category = this.$route.params.category;
    return {
      category,
      text: `$ cat ./${category}.txt\n> This is FromScratch Blog.\n> Programming, Gadget, Management, Motivate....`,
      meta: {
        title: this.$t(`category.${category}.title`),
        description: this.$t(`category.${category}.description`),
      },
      adSlotID: String(adSlot),
    };
  },
  mounted() {
    // パンくず設定
    this.$nuxt.$emit('breadcrumbs', [
      {
        name: 'Top',
        path: this.localePath('index'),
      },
      {
        name: 'Blog',
        path: this.localePath('blog'),
      },
      {
        name: this.$t(`category.${this.category}.name`),
        path: this.localePath({ name: 'blog-category', params: { category: this.category } }),
      },
    ]);
    if (document.querySelector('#ads_script') === null) {
      const scriptElement = document.createElement('script');
      scriptElement.setAttribute('id', 'ads_script');
      scriptElement.setAttribute(
        'src',
        `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adSenseID}`,
      );
      scriptElement.setAttribute('crossorigin', 'anonymous');
      scriptElement.async = true;
      document
        .querySelector('head')!
        .insertBefore(scriptElement, document.querySelectorAll('script')[0]);
    }
  },
});
</script>
<style lang="scss">
#category {
  padding: 10px 0 20px;
  @include tablet {
    padding: 10px 15px 20px;
  }

  .default-page-title {
    font-size: 28px;
    font-weight: 550;
    line-height: 1.7;
  }

  .article-card-wrap {
    padding: 0 15px;

    .no-article {
      margin: 50px 0 40px;
      font-size: 15px;
      font-weight: bold;
      color: #777;
      text-align: center;
      @include tablet {
        margin: 70px 0 50px;
        font-size: 16px;
      }
      @include pc {
        margin: 100px 0 0;
        font-size: 17px;
      }
    }
  }
}
</style>
