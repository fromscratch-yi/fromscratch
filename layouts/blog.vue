<template>
  <main id="blog-layout">
    <defaoult-header :is-fixed="false" />
    <!-- ブログメニュー -->
    <category-menu />
    <div class="blog-contents-wrap">
      <breadcrumb v-if="breadcrumbs.length > 0" :breadcrumbs="breadcrumbs" />
      <div class="max-width-wrap">
        <!-- コンテンツ -->
        <article class="page-contents">
          <nuxt />
        </article>
        <!-- サイドバー -->
        <aside class="side-contents-wrap">
          <blog-side-menu />
        </aside>
      </div>
    </div>
    <default-footer />
    <a href="#" class="top-btn" @click="scrollTop">▲</a>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BlogLayout',
  data(): {
    breadcrumbs: [];
  } {
    return {
      breadcrumbs: [],
    };
  },
  created() {
    this.setListener();
  },
  methods: {
    setListener() {
      this.$nuxt.$on('breadcrumbs', this.setBreadcrumbs);
    },
    setBreadcrumbs(data: any) {
      this.breadcrumbs = data || [];
    },
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
});
</script>
<style lang="scss" scoped>
#blog-layout {
  background: #fff;

  .blog-contents-wrap {
    position: relative;
    padding: 0 0 20px;
    background: #ececec;
    @include tablet {
      padding: 0 15px 30px;
    }
    @include pc {
      padding: 0 20px 30px;
    }

    .max-width-wrap {
      max-width: 1300px;
      margin: 0 auto;
      @include pc {
        display: flex;
        justify-content: space-between;
      }

      .page-contents {
        width: 100%;
        background: #fff;
        filter: drop-shadow(3px 3px 7px #0000001a);
        @include tablet {
          overflow: hidden;
          border-radius: 5px;
        }
        @include pc {
          width: 74%;
        }
      }

      .side-contents-wrap {
        display: none;
        @include pc {
          display: flex;
          width: 24%;
          margin-left: auto;
        }
      }
    }
  }

  .top-btn {
    position: fixed;
    right: 10px;
    bottom: 10px;
    z-index: 1;
    padding: 5px 7px;
    line-height: 1;
    color: $sub-color;
    text-align: center;
    background: #ffffffad;
    border: 1px solid $sub-color;
    border-radius: 5px;
  }
}
</style>
