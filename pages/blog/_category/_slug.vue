<template>
  <div id="article-wrap">
    <figure class="header-image">
      <img :src="article.headerImage.url" :alt="article.title" width="1000" height="500" />
    </figure>
    <div class="article-contents-wrap">
      <div class="head-info">
        <p class="date">{{ article.publishedAt }}</p>
        <h1 class="main-ttl">{{ article.title }}</h1>
        <skill-tags :tags="article.tags" />
      </div>
      <div class="article-body" v-html="$md.render(article.body)"></div>
      <sns-share-buttons :title="article.title" />
      <div class="ad-wrap">
        <adsense
          ad-layout="in-article"
          :ad-slot="adSlotID"
          ad-format="fluid"
          ad-responsive="false"
        />
      </div>
      <div v-if="article.recommend.length > 0" class="recommend-wrap">
        <h2 class="recommend-ttl">{{ $t('blog.recommend') }}</h2>
        <article-card-list :articles="article.recommend" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Article, Categories, getEntry } from '@/libs/contentful';
const adSenseID = process.env.GOOGLE_ADSENSE_ID;
const adSlot = process.env.GOOGLE_ADSENSE_SLOT_ID;
export default Vue.extend({
  name: 'SlugPage',
  layout: 'blog',
  validate({ params }) {
    return Object.keys(Categories).includes(params.category);
  },
  async asyncData({ app, params, error }) {
    const category: Categories = Categories[params.category as keyof typeof Categories];
    const slug = params.slug;
    const article = await getEntry(category, app.i18n.locale, slug);
    if (article) {
      return { article };
    } else {
      error({ statusCode: 404 });
    }
  },
  data(): {
    article: Article;
    category: string;
    slug: string;
    adSlotID: string;
  } {
    const article = {} as Article;
    const category = this.$route.params.category;
    const slug = this.$route.params.slug;
    return { article, category, slug, adSlotID: String(adSlot) };
  },
  head() {
    const article = this.article as Article;
    const siteURL = process.env.BASE_URL;
    return {
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          innerHTML: JSON.stringify(
            {
              '@context': 'http://schema.org',
              '@type': 'Article',
              name: `${article.title}`,
              headline: `${article.title}`,
              author: {
                '@type': 'Person',
                name: 'Yuichi Ishiyama',
                url: `${this.localePath('about')}`,
              },
              image: {
                '@type': 'ImageObject',
                url: `https:${article.headerImage.url}`,
              },
              description: `${article.description}`,
              url: `${this.$route.path}`,
              mainEntityOfPage: `${siteURL + this.$route.path}`,
              publisher: {
                '@type': 'Organization',
                name: 'FromScratch',
                logo: {
                  '@type': 'ImageObject',
                  url: `${siteURL}/icon.png`,
                },
              },
              datePublished: `${article.createdAt}`,
              dateModified: `${article.updatedAt}`,
            },
            null,
            2,
          ),
          type: 'application/ld+json',
        },
      ],
      title: article.title,
      meta: [
        { hid: 'description', name: 'description', content: article.description },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:title', property: 'og:title', content: article.title },
        { hid: 'og:description', property: 'og:description', content: article.description },
        { hid: 'og:url', property: 'og:url', content: siteURL + this.$route.path },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https:' + article.headerImage.url,
        },
      ],
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
      {
        name: this.article.title,
        path: this.localePath({
          name: 'blog-category-slug',
          params: { category: this.category, slug: this.slug },
        }),
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
#article-wrap {
  .header-image {
    display: block;
    text-align: center;
  }

  .article-contents-wrap {
    padding: 30px 15px 20px;
    overflow: hidden;
    font-size: 15px;
    line-height: 1.8;
    @include tablet {
      padding: 30px 30px 20px;
      font-size: 16px;
    }
    @include max {
      padding: 30px 35px 20px;
    }

    img {
      width: 100%;
      max-width: 100%;
    }

    .head-info {
      margin: 0 auto 20px;
      @include tablet {
        margin: 0 auto 30px;
      }

      .date {
        font-size: 14px;
        font-weight: bold;
        color: #666;
        text-align: center;
        @include tablet {
          font-size: 16px;
        }
      }

      .main-ttl {
        margin: 10px auto;
        font-size: 19px;
        font-weight: bold;
        line-height: 1.6;
        color: #666;
        text-align: center;
        @include tablet {
          margin: 10px auto 15px;
          font-size: 22px;
        }
      }
    }

    .article-body {
      line-height: 2;
    }

    .recommend-wrap {
      margin: 30px 0 0;

      .recommend-ttl {
        position: relative;
        padding: 6px 3px 6px 30px;
        margin: 40px 0 25px;
        font-size: 17px;
        font-weight: bold;
        line-height: 1.6;
        background-image: url('~/assets/css/images/ico-reccomend.png');
        background-repeat: no-repeat;
        background-position: left center;
        background-size: 20px;
        border-bottom: 4px solid #ddd;
        @include tablet {
          font-size: 20px;
        }

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
    }
  }
}
</style>

<style lang="scss">
#article-wrap .article-contents-wrap .head-info .skill-tags {
  justify-content: center;
  margin: 0 0 10px;

  li {
    margin: 0 5px;
    font-size: 13px;
  }
}

#article-wrap .article-body {
  section {
    padding: 55px 0 0;
    font-family: Noto, 'Hiragino Sans', Helvetica, Arial, sans-serif;
    @include tablet {
      padding: 30px 0 0;
      margin: 25px 0 0;
    }

    h2 {
      position: relative;
      padding: 60px 5px 5px;
      margin: -60px 0 40px;
      font-size: 18px;
      font-weight: 550;
      line-height: 1.2;
      border-bottom: 4px solid #ddd;
      @include tablet {
        padding: 20px 5px 5px;
        margin: -20px 0 40px;
        font-size: 19px;
      }

      &::after {
        position: absolute;
        bottom: -4px;
        left: 0;
        display: block;
        width: 20%;
        content: ' ';
        border-bottom: 4px solid $sub-color;
      }
    }

    h3 {
      position: relative;
      padding: 60px 0 3px 27px;
      margin: -35px 0 25px;
      font-size: 16px;
      font-weight: bold;
      line-height: 1.2;
      color: #555;
      border-bottom: 1px dashed $sub-color;
      @include tablet {
        padding: 30px 0 3px 27px;
        margin: 20px 0 25px;
        font-size: 17px;
      }

      &::before,
      &::after {
        position: absolute;
        content: '';
        background-color: $sub-color;
      }

      &::before {
        top: 55px;
        left: 7px;
        width: 10px;
        height: 10px;
        transform: rotate(45deg);
        @include tablet {
          top: 25px;
        }
      }

      &::after {
        top: 65px;
        left: 0;
        width: 6px;
        height: 6px;
        background-color: $sub-color;
        transform: rotate(15deg);
        @include tablet {
          top: 35px;
        }
      }
    }

    p {
      margin: 25px 0 35px;
    }
  }

  em {
    font-style: normal;
    font-weight: bold;
    background: linear-gradient(transparent 75%, #b2ffb2 75%);
  }

  strong {
    font-size: 1em;
  }

  a {
    color: #485fc7;
    text-decoration: underline;
    cursor: pointer;

    &.ex-link {
      font-size: 1em;
    }
  }

  figure {
    display: block;
    margin: 0 0 40px;
    text-align: center;

    &.cicle200 {
      img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
      }
    }

    /* stylelint-disable-next-line no-descending-specificity */
    img {
      border: 1px solid #f1f1f1;
    }
  }

  .youtube {
    width: 100%;
    max-width: 750px;
    aspect-ratio: 16 / 9;
    margin: 0 auto;
    text-align: center;

    iframe {
      width: 100%;
      height: 100%;
    }
  }

  .center {
    text-align: center;
  }

  .margin-bottom30 {
    margin-bottom: 30px;
  }

  .margin-bottom40 {
    margin-bottom: 40px;
  }

  table {
    max-width: 100%;
    margin: 0 auto 40px;
    overflow: hidden;

    tbody {
      th,
      td {
        padding: 6px 8px;
        font-size: 14px;
        border: 1px solid #d1d1d1;
        @include tablet {
          padding: 6px 13px;
          font-size: 15px;
        }
      }

      &.no-wrap-head {
        th {
          white-space: nowrap;
        }
      }

      &.no-wrap {
        white-space: nowrap;
      }

      &.v-center {
        vertical-align: center;
      }
    }

    &.all-td-center {
      /* stylelint-disable-next-line no-descending-specificity */
      td {
        text-align: center;
        vertical-align: middle;

        &.vertical-top {
          vertical-align: top;
        }
      }
    }
  }

  .memo {
    position: relative;
    padding: 13px 15px;
    margin: 15px 0 20px;
    background: #f1f1f1;
    border-radius: 5px;

    &::after {
      position: absolute;
      top: -15px;
      right: -5px;
      display: inline-block;
      padding: 4px 10px;
      font-size: 14px;
      color: $sub-color;
      content: 'Memo';
      background: #fff;
      border: 1px solid $sub-color;
      border-radius: 16px;
    }

    .ttl {
      margin: 0 0 7px;
      font-weight: bold;
      line-height: 1.7;
    }

    .desc {
      margin: 0;
      line-height: 1.7;
    }
  }

  dl {
    margin-bottom: 15px;

    dt {
      position: relative;
      padding-left: 20px;
      margin: 40px 0 20px;
      font-weight: bold;

      &::before {
        position: absolute;
        top: 50%;
        left: 3px;
        display: block;
        width: 10px;
        height: 10px;
        margin-top: -5px;
        content: '';
        background: $sub-color;
        transform: rotate(-45deg);
      }
    }

    dd {
      padding: 0 5px;
    }
  }

  ul {
    padding: 0 0.5em 0 2em;
    /* stylelint-disable-next-line no-descending-specificity */
    li {
      padding: 5px 0;
      line-height: 2;
      list-style: disc;

      /* stylelint-disable-next-line no-descending-specificity */
      &:last-child {
        border-bottom: none;
      }
    }
    /* stylelint-disable-next-line no-descending-specificity */
    &.no-list-style {
      padding: 0;
      /* stylelint-disable-next-line no-descending-specificity */
      li {
        list-style: none;
      }
    }

    /* stylelint-disable-next-line no-descending-specificity */
    &.li-border-bottom {
      /* stylelint-disable-next-line no-descending-specificity */
      li {
        margin-bottom: 10px;
        border-bottom: 1px dashed #d1d1d1;
        /* stylelint-disable-next-line no-descending-specificity */
        &:last-child {
          margin-bottom: 0;
          border-bottom: none;
        }
      }
    }

    &.attention-list {
      /* stylelint-disable-next-line no-descending-specificity */
      li {
        font-size: 13px;
        color: #666;
      }
    }

    &.flex-list {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
  }

  .desc-ul-wrap {
    padding: 20px;
    background: #ececec;
    border-radius: 5px;

    /* stylelint-disable-next-line no-descending-specificity */
    li {
      margin-bottom: 10px;
      font-size: 0.95em;
      font-weight: bold;
      line-height: 1.9;
      list-style: none;

      /* stylelint-disable-next-line no-descending-specificity */
      &:last-child {
        margin: 0;
      }

      span {
        display: inline-block;
        padding-left: 7px;
        font-weight: normal;
        line-height: 1.9;
      }

      a {
        color: #003da0;
      }
    }
  }

  .block-link {
    display: block;
    text-align: center;

    /* stylelint-disable-next-line no-descending-specificity */
    img {
      display: inline-block;
    }
  }

  .link-label {
    margin-bottom: 10px;
  }

  .slide-tbl-wrap {
    z-index: 1;
    overflow-x: auto;
    background-attachment: scroll;
    -webkit-overflow-scrolling: touch;

    .table {
      width: 100%;
      min-width: 665px;
      max-width: 100%;
      table-layout: fixed;

      td,
      th {
        font-size: 14px;
        border: 1px solid #d1d1d1;
        border-width: 1px;
        @include tablet {
          font-size: 15px;
        }
      }

      th {
        text-align: center;
      }

      thead {
        th {
          background: #d6fdd9;
        }
      }

      tbody {
        th {
          background: #fde8d6;
        }
      }
    }
  }

  .mokuji {
    padding: 10px 15px;
    background: #ececec78;
    border-radius: 5px;
    @include tablet {
      padding: 15px 20px;
    }

    .ttl {
      padding: 0 5px 3px;
      margin: 0 0 15px;
      font-weight: bold;
      border-bottom: 1px dashed #d1d1d1;
    }

    ul {
      padding: 0 0 0 25px;
      font-size: 14px;
      list-style: disc;
      @include tablet {
        font-size: 15px;
      }

      /* stylelint-disable-next-line no-descending-specificity */
      li {
        margin: 3px;
      }
    }
  }
}

html body.is-open {
  height: auto !important;
  overflow: scroll !important;
}
</style>
