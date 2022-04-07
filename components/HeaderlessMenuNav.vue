<template>
  <nav class="headerless-menu-nav">
    <ul>
      <li><nuxt-link :to="localePath('about')">About</nuxt-link></li>
      <li><nuxt-link :to="localePath('work')">Work</nuxt-link></li>
      <li><nuxt-link :to="localePath('blog')">Blog</nuxt-link></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HeaderlessMenuNav',
});
</script>
<style lang="scss" scoped>
.headerless-menu-nav {
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 450px;
    margin: 0 auto;

    li {
      width: calc((100% - 30px) / 3);
      font-size: 16px;
      text-align: center;
      border: 1px solid $txt-wh-color;
      border-radius: 3px;
      @include tablet {
        font-size: 20px;
      }

      a {
        display: block;
        padding: 10px 3px;
        line-height: 1.3;
        color: $txt-wh-color;
        transition: all 0.5s;

        &:hover {
          background-color: #b1b1b121;
        }
      }
    }
  }
}
</style>
