<template>
  <article id="error-layout">
    <p class="logo-wrap">
      <nuxt-link :to="localePath('index')"><logo-img :size="60" :is-bounding="true" /></nuxt-link>
    </p>
    <h1 class="error-ttl">
      <p class="code">{{ error.statusCode }}</p>
      <p v-if="error.statusCode === 404" class="message">Page Not Found.</p>
      <p v-else class="message">Internal Server Error.</p>
    </h1>
    <headerless-menu-nav />
  </article>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'ErrorLayout',
  layout: 'headerless',
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
#error-layout {
  position: absolute;
  top: 45%;
  left: 50%;
  width: calc(100% - 40px);
  margin: 0 auto;
  color: $txt-wh-color;
  text-align: center;
  transform: translate(-50%, -50%);

  .error-ttl {
    margin: 30px auto 50px;
    line-height: 1;

    .code {
      font-size: 4em;
      font-style: italic;
      font-weight: bold;
      letter-spacing: 5px;
    }

    .message {
      font-size: 1.5em;
      letter-spacing: 1px;
    }
  }
}
</style>
