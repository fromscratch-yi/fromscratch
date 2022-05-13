<template>
  <article id="blog">
    <default-page-title title="Blog" />
    <terminal :text="text" />
    <p class="page-explain">{{ $t('blog.explain') }}</p>

    <ul class="category-article-list">
      <li v-for="(articles, key) in categoryArticles" :key="key" class="category-article-wrap">
        <h2 class="category-ttl">
          <blog-category-link :type="key" :name="$t(`category.${key}.name`)" />
        </h2>
        <article-card-list :articles="articles" />
      </li>
    </ul>
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
  name: 'BlogTopPage',
  mixins: [Meta],
  layout: 'blog',
  async asyncData({ app }) {
    const categoryArticles: { [key in Categories]?: CardItem[] } = {};
    const categorise = [...Object.values(Categories)];
    for (const category of categorise) {
      categoryArticles[category] = await getEntriesByCategory(category, app.i18n.locale);
    }
    return { categoryArticles };
  },
  data(): {
    text: String;
    meta: Object;
    adSlotID: string;
  } {
    return {
      text: '$ cat ./blog.txt\n> Welcome to my Blog page.\n> Programming, Gadget, etc....',
      meta: {
        title: this.$t('blog.title'),
        description: this.$t('blog.description'),
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

<style lang="scss" scoped>
#blog {
  padding: 10px 0 20px;
  @include tablet {
    padding: 10px 15px 20px;
  }

  .category-article-list {
    .category-article-wrap {
      margin: 40px auto 0;

      .category-ttl {
        position: relative;
        margin: 40px 15px 25px;
        @include tablet {
          margin: 40px auto 25px;
        }

        font-size: 23px;
        font-weight: bold;
        line-height: 1.6;
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

        .category-link {
          padding: 5px 20px 5px 45px;
          padding-top: 10px;
          padding-bottom: 10px;
          font-size: 17px;
          border: none;
          transition: color 0.4s ease;
          @include tablet {
            font-size: 20px;
          }

          &:hover {
            color: $sub-color;
            background-color: #fff;
          }
        }
      }
    }
  }
}
</style>
