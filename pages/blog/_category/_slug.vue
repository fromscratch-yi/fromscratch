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
      <div class="ad-wrap">
        <adsense
          ad-layout="in-article"
          :ad-slot="adSlotID"
          ad-format="fluid"
          ad-responsive="false"
        />
      </div>
      <div v-if="article.recommend.length > 0" class="recommend-wrap">
        <h2>{{ $t('blog.recommend') }}</h2>
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
          innerHTML: `{
          "@context": "http://schema.org",
          "@type": "Article",
          "name": "${article.title}",
          "headline": "${article.title}",
          "author": {
            "@type": "Person",
            "name": "Yuichi Ishiyama",
            "url": "${this.localePath('about')}"
          },
          "image": {
            "@type": "ImageObject",
            "url": "https:${article.headerImage.url}"
          },
          "description": "${article.description}",
          "url": "${this.$route.path}",
          "mainEntityOfPage": "${siteURL + this.$route.path}",
          "publisher": {
            "@type": "Organization",
            "name": "FromScratch",
            "logo": {
              "@type": "ImageObject",
              "url": "${siteURL}/icon.png"
            }
          },
          "datePublished": "${article.createdAt}",
          "dateModified": "${article.updatedAt}"
        }`,
          type: 'application/ld+json',
        },
      ],
      title: article.title,
      meta: [
        { hid: 'description', name: 'description', content: article.description },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:title', property: 'og:title', content: article.title + ' | FromScratch' },
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
    font-size: 16px;
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
  }
}
</style>
<style lang="scss">
#article-wrap .article-contents-wrap .head-info .skill-tags {
  justify-content: center;
  margin: 0 0 10px;

  li {
    margin: 0 5px;
    font-size: 14px;
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
      padding: 0 5px 5px;
      margin: 0 0 40px;
      font-size: 19px;
      font-weight: 550;
      border-bottom: 4px solid #ddd;

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
      padding: 0 0 3px 27px;
      margin: 45px 0 25px;
      font-size: 17px;
      font-weight: bold;
      color: #555;
      border-bottom: 1px dashed $sub-color;

      &::before,
      &::after {
        position: absolute;
        content: '';
        background-color: $sub-color;
      }

      &::before {
        top: 5px;
        left: 7px;
        width: 10px;
        height: 10px;
        transform: rotate(45deg);
      }

      &::after {
        top: 15px;
        left: 0;
        width: 6px;
        height: 6px;
        background-color: $sub-color;
        transform: rotate(15deg);
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
    margin: 0;

    &.cicle200 {
      img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
      }
    }
  }

  .center {
    text-align: center;
  }

  .margin-bottom30 {
    margin-bottom: 30px;
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
        }
      }

      th {
        font-size: 14px;
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
  }
}
</style>
