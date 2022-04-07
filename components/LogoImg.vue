<template>
  <figure class="logo-img-wrap" :class="{ bounding: isBounding }">
    <img src="~assets/images/logo.png" alt="FromScratch logo" :width="size" :height="size" />
  </figure>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'LogoImg',
  props: {
    size: {
      type: Number,
      required: true,
    },
    isBounding: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
});
</script>
<style lang="scss" scoped>
/* stylelint-disable-next-line scss/at-import-no-partial-leading-underscore */
@import '~/assets/css/_keyframes';

.logo-img-wrap {
  display: inline-block;

  &.bounding {
    animation: bounding 0.3s ease infinite alternate;
  }
}
</style>
