<template>
  <div id="blog-side-menu">
    <section class="side-sec about-wrap">
      <p class="sec-ttl profile">About Me</p>
      <div class="contents-inner">
        <profile-img />
        <p class="name" v-html="$t('about.name')"></p>
        <p class="about-info" v-html="$t('blog.info')"></p>
        <sns-list />
      </div>
    </section>

    <section class="side-sec category-wrap">
      <p class="sec-ttl category">Categories</p>
      <ul class="category-link-list">
        <li v-for="(value, key) in $t('category')" :key="key" class="category-wrap">
          <blog-category-link :type="key" :name="value.name" :explain="value.explain" />
        </li>
      </ul>
      <div v-if="windowSize > 1100" class="ad-wrap">
        <adsense
          ad-layout="in-article"
          :ad-slot="adSlotID"
          ad-format="fluid"
          ad-responsive="false"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
const adSlot = process.env.GOOGLE_ADSENSE_SIDE_SLOT_ID;
export default Vue.extend({
  name: 'BlogSideMenu',
  data(): {
    adSlotID: string;
    windowSize: number;
  } {
    return {
      adSlotID: String(adSlot),
      windowSize: 0,
    };
  },
  mounted() {
    this.windowSize = (window as Window).innerWidth;
  },
});
</script>

<style lang="scss" scoped>
#blog-side-menu {
  .side-sec {
    margin-bottom: 20px;
    filter: drop-shadow(3px 3px 7px #0000001a);
    border-radius: 5px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;

    .sec-ttl {
      padding: 10px 20px 10px 43px;
      font-size: 18px;
      font-weight: bold;
      color: #4a4a4a;
      background: #cac6c6;
      background-repeat: no-repeat;
      background-position: 5px left;
      background-position: 15px center;
      background-size: 23px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;

      &.profile {
        background-image: url('~/assets/css/images/ico-profile.png');
      }

      &.category {
        background-image: url('~/assets/css/images/ico-category.png');
      }
    }

    .contents-inner {
      padding: 15px 20px;
    }

    &.about-wrap {
      background: #fff;

      .profile-img {
        display: block;
        max-width: 180px;
        margin: 0 auto 10px;
        text-align: center;

        img {
          width: 170px !important;
        }
      }

      .name {
        margin: 0 0 10px;
        font-weight: bold;
        text-align: center;
      }

      .about-info {
        margin: 0 0 20px;
        font-size: 14px;
        line-height: 1.7;
      }

      .sns-list {
        max-width: 230px;
        font-size: 14px;
      }
    }

    &.category-wrap {
      position: sticky;
      top: 20px;
      padding: 0;
      margin: 0;

      .category-link-list {
        background: #fff;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;

        &:last-child {
          a.category-link {
            border-bottom: none;
          }
        }
      }

      .ad-wrap {
        padding: 0;
        margin: 22px auto 0;
        overflow: hidden;
        border-radius: 5px;
      }
    }
  }
}
</style>
<style lang="scss">
#blog-side-menu {
  .about-wrap {
    .name {
      small {
        display: block;
      }
    }
  }

  .category-link-list {
    background: #fff;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;

    .category-wrap:last-child {
      a.category-link {
        border-bottom: none;
      }
    }
  }
}
</style>
