<template>
  <client-only>
    <article id="keyword-search">
      <default-page-title :title="title" />
      <form
        class="keyword-search-form"
        method="GET"
        :action="localePath({ name: 'blog-search' })"
        @submit="onSubmit"
      >
        <input
          id="keyword-input"
          v-model="keyword"
          type="search"
          name="keyword"
          :placeholder="title"
          @keyup.enter="searchWithKeyword"
          @change="searchWithKeyword"
        />
      </form>

      <article-card-list v-if="keyword" :articles="categoryArticles" />

      <div class="tag-search-wrap">
        <p class="ttl">{{ $t('tagSearch.listTitle') }}</p>
        <skill-tags class="tags-list" :tags="tags" :with-link="true" />
      </div>

      <div class="ad-wrap">
        <adsense
          ad-layout="in-article"
          :ad-slot="adSlotID"
          ad-format="fluid"
          ad-responsive="false"
        />
      </div>
      <loading v-if="loading" />
    </article>
  </client-only>
</template>

<script lang="ts">
import Vue from 'vue';
import Meta from '~/assets/mixins/meta';
import { CardItem, Categories, getEntriesByKeyword, getTags } from '@/libs/contentful';
const adSenseID = process.env.GOOGLE_ADSENSE_ID;
const adSlot = process.env.GOOGLE_ADSENSE_SLOT_ID;

export default Vue.extend({
  name: 'KeywordSearchPage',
  mixins: [Meta],
  layout: 'blog',
  async asyncData({ app, query }) {
    const keyword = query.keyword as string;
    let categoryArticles: CardItem[] = [] as CardItem[];
    if (keyword) {
      for (const category of [...Object.values(Categories)]) {
        const articles = await getEntriesByKeyword(category, keyword, app.i18n.locale);
        if (articles.length > 0) {
          categoryArticles = categoryArticles.concat(articles as CardItem[]);
        }
      }
    }
    const tags = await getTags(-1);
    return { categoryArticles, tags };
  },
  data(): {
    keyword: string;
    meta: Object;
    adSlotID: string;
    categoryArticles: CardItem[];
    loading: boolean;
  } {
    const keyword = this.$route.query.keyword as string;
    const categoryArticles: CardItem[] = [] as CardItem[];
    return {
      keyword,
      meta: {
        title: this.$t('keywordSearch.title'),
        description: this.$t(`keywordSearch.description`),
        bodyClass: 'search-page',
      },
      adSlotID: String(adSlot),
      categoryArticles,
      loading: false,
    };
  },
  computed: {
    title(): string {
      return this.$t('keywordSearch.title') as string;
    },
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
        name: this.$t('keywordSearch.title'),
        path: this.localePath({ name: 'blog-search' }),
      },
    ]);
    this.searchWithKeyword();
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
  methods: {
    onSubmit(event: { preventDefault: () => void }) {
      event.preventDefault();
      const input = document.querySelector('#keyword-input') as HTMLElement;
      if (input) {
        input.blur();
      }
      this.searchWithKeyword();
    },
    async searchWithKeyword() {
      this.loading = true;
      let categoryArticles: CardItem[] = [] as CardItem[];
      if (this.keyword) {
        for (const category of [...Object.values(Categories)]) {
          const articles = await getEntriesByKeyword(category, this.keyword, this.$i18n.locale);
          if (articles.length > 0) {
            categoryArticles = categoryArticles.concat(articles as CardItem[]);
          }
        }
      }
      this.categoryArticles = categoryArticles;
      this.loading = false;
    },
  },
});
</script>
<style lang="scss">
#keyword-search {
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

  .keyword-search-form {
    padding: 0 15px;
    margin-bottom: 30px;
  }

  .tag-search-wrap {
    padding: 0 15px;
    margin: 10px auto 20px;

    .ttl {
      position: relative;
      padding: 0 5px 5px;
      margin: 20px 0 15px;
      font-size: 18px;
      font-weight: bold;
      font-weight: 550;
      line-height: 1.2;
      color: #666;
      border-bottom: 4px solid #ddd;

      &::after {
        position: absolute;
        bottom: -4px;
        left: 0;
        display: block;
        width: 15%;
        content: ' ';
        border-bottom: solid 4px $sub-color;
      }
    }

    .tags-list {
      padding: 0 5px;
    }
  }
}
</style>
