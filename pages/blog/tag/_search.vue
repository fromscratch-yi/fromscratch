<template>
  <article id="tag-search">
    <default-page-title :title="`「#${tag}」`" />
    <article-card-list :articles="categoryArticles" />
    <div class="ad-wrap">
      <adsense ad-layout="in-article" :ad-slot="adSlotID" ad-format="fluid" ad-responsive="false" />
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue';
import Meta from '~/assets/mixins/meta';
import { CardItem, Categories, getEntriesByTagId } from '@/libs/contentful';
const adSenseID = process.env.GOOGLE_ADSENSE_ID;
const adSlot = process.env.GOOGLE_ADSENSE_SLOT_ID;

export default Vue.extend({
  name: 'TagSearchPage',
  mixins: [Meta],
  layout: 'blog',
  async asyncData({ app, params }) {
    const tagId = params.search;
    let categoryArticles: CardItem[] = [] as CardItem[];
    for (const category of [...Object.values(Categories)]) {
      const articles = await getEntriesByTagId(category, tagId, app.i18n.locale, -1);
      if (articles.length > 0) {
        categoryArticles = categoryArticles.concat(articles as CardItem[]);
      }
    }
    return { categoryArticles };
  },
  data(): {
    tag: string;
    meta: Object;
    adSlotID: string;
  } {
    const tag = this.$route.params.search;
    return {
      tag,
      meta: {
        title: `「#${tag}」` + this.$t(`tagSearch.title`),
        description: `「#${tag}」` + this.$t(`tagSearch.description`),
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
        name: `「#${this.tag}」` + this.$t(`tagSearch.title`),
        path: this.localePath({ name: 'blog-tag-search', params: { search: this.tag } }),
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
#tag-search {
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
      margin: 100px 0;
      font-size: 15px;
      font-weight: bold;
      color: #777;
      text-align: center;
      @include tablet {
        font-size: 16px;
      }
      @include pc {
        font-size: 17px;
      }
    }
  }
}
</style>
