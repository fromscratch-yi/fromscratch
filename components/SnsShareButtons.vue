<template>
  <div class="sns-share-wrap">
    <p class="ttl">
      <span>{{ $t('blog.share') }}</span>
    </p>
    <ul class="sns-share-buttons">
      <li v-for="(url, key) in urlList" :key="key" class="sns-share-item">
        <a
          class="share-link"
          :class="key"
          :href="url"
          target="_blank"
          rel="noopener"
          :title="`Share with ${key}`"
          v-html="svg[key]"
          >{{ key }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
const siteURL = process.env.BASE_URL;
export default Vue.extend({
  name: 'SnsShareButtons',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data(): {
    svg: {
      twitter: string;
      facebook: string;
      pocket: string;
      line: string;
    };
    urlList: {
      twitter: string;
      facebook: string;
      pocket: string;
      line: string;
    };
  } {
    const url = `${siteURL}${this.$route.path}`;
    return {
      svg: {
        twitter:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>',
        facebook:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>',
        pocket:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M407.6 64h-367C18.5 64 0 82.5 0 104.6v135.2C0 364.5 99.7 464 224.2 464c124 0 223.8-99.5 223.8-224.2V104.6c0-22.4-17.7-40.6-40.4-40.6zm-162 268.5c-12.4 11.8-31.4 11.1-42.4 0C89.5 223.6 88.3 227.4 88.3 209.3c0-16.9 13.8-30.7 30.7-30.7 17 0 16.1 3.8 105.2 89.3 90.6-86.9 88.6-89.3 105.5-89.3 16.9 0 30.7 13.8 30.7 30.7 0 17.8-2.9 15.7-114.8 123.2z"/></svg>',
        line: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M272.1 204.2v71.1c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.1 0-2.1-.6-2.6-1.3l-32.6-44v42.2c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.8 0-3.2-1.4-3.2-3.2v-71.1c0-1.8 1.4-3.2 3.2-3.2H219c1 0 2.1.5 2.6 1.4l32.6 44v-42.2c0-1.8 1.4-3.2 3.2-3.2h11.4c1.8-.1 3.3 1.4 3.3 3.1zm-82-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 1.8 1.4 3.2 3.2 3.2h11.4c1.8 0 3.2-1.4 3.2-3.2v-71.1c0-1.7-1.4-3.2-3.2-3.2zm-27.5 59.6h-31.1v-56.4c0-1.8-1.4-3.2-3.2-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 .9.3 1.6.9 2.2.6.5 1.3.9 2.2.9h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.7-1.4-3.2-3.1-3.2zM332.1 201h-45.7c-1.7 0-3.2 1.4-3.2 3.2v71.1c0 1.7 1.4 3.2 3.2 3.2h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2V234c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2v-11.4c-.1-1.7-1.5-3.2-3.2-3.2zM448 113.7V399c-.1 44.8-36.8 81.1-81.7 81H81c-44.8-.1-81.1-36.9-81-81.7V113c.1-44.8 36.9-81.1 81.7-81H367c44.8.1 81.1 36.8 81 81.7zm-61.6 122.6c0-73-73.2-132.4-163.1-132.4-89.9 0-163.1 59.4-163.1 132.4 0 65.4 58 120.2 136.4 130.6 19.1 4.1 16.9 11.1 12.6 36.8-.7 4.1-3.3 16.1 14.1 8.8 17.4-7.3 93.9-55.3 128.2-94.7 23.6-26 34.9-52.3 34.9-81.5z"/></svg>',
      },
      urlList: {
        twitter: `https://twitter.com/intent/tweet?url=${url}&text=${this.title}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}&amp;t=${this.title}`,
        pocket: `http://getpocket.com/edit?url=${url}`,
        line: `https://social-plugins.line.me/lineit/share?url=${url}`,
      },
    };
  },
});
</script>

<style lang="scss">
.sns-share-wrap {
  margin: 50px auto;

  .ttl {
    margin: 0 auto 20px;
    font-weight: bold;
    color: #666;
    text-align: center;

    span {
      padding-left: 30px;
      background-image: url('~/assets/css/images/ico-share.png');
      background-repeat: no-repeat;
      background-position: left center;
      background-size: 20px;
    }
  }

  .sns-share-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .sns-share-item {
      width: 25%;
      vertical-align: middle;

      .share-link {
        display: flex;
        justify-content: center;
        height: 100%;
        padding: 10px 8px;
        text-align: center;

        &.twitter {
          background: #00b0ed;
        }

        &.facebook {
          background: #008fde;
        }

        &.pocket {
          background: #eb4654;
        }

        &.line {
          background: #00a200;
        }

        svg {
          width: 20px;
          vertical-align: middle;
          fill: #fff;
          @include tablet {
            width: 30px;
          }
        }
      }
    }
  }
}
</style>
