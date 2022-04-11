<template>
  <div class="locale-switch">
    <p class="lang-link"><nuxt-link :to="switchLocalePath('ja')" no-prefetch>ja</nuxt-link></p>
    <p class="lang-link"><nuxt-link :to="switchLocalePath('en')" no-prefetch>en</nuxt-link></p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'LocaleSwitch',
});
</script>

<style lang="scss" scoped>
.locale-switch {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 120px;
  padding: 0 0 0 30px;
  margin: 40px auto 0;
  background-image: url('~/assets/images/icon/ico_locale.png');
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 22px;

  @include tablet {
    margin: 0 0 0 20px;
    background-image: url('~/assets/images/icon/ico_locale_bk.png');
  }

  .lang-link {
    &:first-child::after {
      display: inline-block;
      padding: 0 10px;
      color: $txt-wh-color;
      text-align: center;
      pointer-events: none;
      content: ' | ';
      border-bottom: none;

      @include tablet {
        color: #666;
      }
    }

    a {
      display: inline-block;
      padding: 0 3px 5px;
      font-size: 20px;
      font-weight: bold;
      line-height: 1;
      color: $txt-wh-color;
      text-align: center;
      letter-spacing: 1px;
      border-bottom: 3px solid transparent;

      @include tablet {
        padding: 0 3px 3px;
        color: #666;
      }

      &[aria-current='page'] {
        color: $accent-color;
        border-bottom: 3px solid $accent-color;
      }
    }
  }
}
</style>
