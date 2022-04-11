<template>
  <nav class="site-nav">
    <ul>
      <li class="menu-item">
        <nuxt-link :to="localePath('about')"
          ><span class="initial" no-prefetch>A</span>bout</nuxt-link
        >
      </li>
      <li class="menu-item">
        <nuxt-link :to="localePath('work')"
          ><span class="initial" no-prefetch>W</span>ork</nuxt-link
        >
      </li>
      <li class="menu-item">
        <nuxt-link :to="localePath('blog')"
          ><span class="initial" no-prefetch>B</span>log</nuxt-link
        >
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'SiteNav',
});
</script>

<style lang="scss" scoped>
.site-nav {
  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    @include tablet {
      max-width: 400px;
    }

    .menu-item {
      width: 100%;
      margin: 0 0 20px;
      @include tablet {
        width: auto;
        margin: 0 10px;
      }

      a {
        display: inline-block;
        padding: 0 0 10px;
        font-size: 24px;
        font-weight: bold;
        line-height: 1.2;
        color: $txt-wh-color;
        letter-spacing: 3px;
        @include tablet {
          padding: 0 0 5px;
          font-size: 18px;
          color: #666;
          letter-spacing: normal;
        }

        &[aria-current='page'] {
          position: relative;

          &::after {
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 40px;
            height: 3px;
            content: '';
            background-color: $sub-color;
            transform: translateX(-50%);
            transform: translateX(-50%);
          }
        }

        .initial {
          font-size: 30px;
          color: $sub-color;

          @include tablet {
            font-size: 22px;
          }
        }
      }
    }
  }
}
</style>
