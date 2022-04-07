<template>
  <picture class="webp-wrap">
    <source type="image/webp" :srcset="`${fileName}.webp`" />
    <img :src="`${fileName}.png`" :alt="alt" :width="width" :height="height" loading="lazy" />
  </picture>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'WebpImage',
  props: {
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    fileName: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
});
</script>
<style lang="scss" scoped>
.webp-wrap {
  display: block;
  text-align: center;
}
</style>
