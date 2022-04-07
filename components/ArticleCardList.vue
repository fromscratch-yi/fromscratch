<template>
  <div class="article-card-wrap">
    <p v-if="articles.length == 0" class="no-article">{{ $t('blog.noArticles') }}</p>
    <ul v-else class="article-list">
      <li v-for="(article, index) in articles" :key="index" class="article-data">
        <nuxt-link
          :to="
            localePath({
              name: 'blog-category-slug',
              params: {
                category: article.category,
                slug: article.slug,
              },
            })
          "
          class="slug-link"
        >
          <figure class="thumbnail">
            <img
              :src="article.thumbnail.url"
              :alt="article.title"
              :width="article.thumbnail.width"
              :height="article.thumbnail.height"
              loading="lazy"
            />
          </figure>
          <div class="info-wrap">
            <p class="date">{{ article.publishedAt }}</p>
            <div class="ttl-wrap">
              <p class="ttl">{{ article.title }}</p>
            </div>

            <skill-tags :tags="article.tags" />
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { CardItem } from '@/libs/contentful';
export default Vue.extend({
  name: 'ArticleCardList',
  props: {
    articles: {
      type: Array as () => CardItem[],
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.article-card-wrap {
  padding: 0 10px;

  .no-article {
    font-size: 14px;
    color: #555;
    @include tablet {
      font-size: 15px;
    }
  }

  .article-list {
    display: flex;
    flex-wrap: wrap;

    .article-data {
      width: 100%;
      margin: 0 0 20px;
      @include tablet {
        width: calc(100% / 3 - 15px);

        &:nth-child(3n-1) {
          margin: 0 22px 20px;
        }
      }

      .slug-link {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        border-radius: 5px;
        box-shadow: 0 0.5em 1em -0.125em #0a0a0a1a, 0 0 0 1px #0a0a0a05;
        @include tablet {
          display: block;
          min-height: 100%;
        }

        .thumbnail {
          display: flex;
          align-items: stretch;
          width: 30%;
          min-height: 100%;
          overflow: hidden;
          text-align: center;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;

          img {
            width: auto;
            max-height: 170px;
            object-fit: cover;
          }
          @include tablet {
            display: block;
            width: 100%;
            height: auto;
            min-height: auto;
            border-top-right-radius: 5px;
            border-bottom-left-radius: 0;

            img {
              width: 100%;
              height: auto;
              object-fit: initial;
            }
          }
        }

        .info-wrap {
          width: 70%;
          padding: 10px 15px 5px;
          font-size: 13px;
          @include tablet {
            width: 100%;
            padding: 15px 15px 10px;
            font-size: 14px;
          }

          .date {
            font-size: 12px;
          }

          .ttl-wrap {
            width: 100%;
            margin: 5px 0 10px;
            overflow: hidden;
            font-weight: bold;
            color: #666;
            background-color: #fff;
            @include tablet {
              margin: 7px 0 15px;
            }

            .ttl {
              position: relative;
              height: calc(13px * 1.5 * 2);
              margin: 0;
              font-size: 13;
              line-height: 1.5;

              &::before,
              &::after {
                position: absolute;
                background-color: #fff;
              }

              &::before {
                top: calc(13px * 1.5 * (2 - 1));
                right: 0;
                content: '...';
              }

              &::after {
                width: 100%;
                height: 100%;
                content: '';
              }
            }
          }
        }
      }
    }
  }
}
</style>
