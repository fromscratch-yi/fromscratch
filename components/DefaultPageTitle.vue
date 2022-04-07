<template>
  <h1 class="default-page-title">{{ title }}</h1>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DefaultPageTitle',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.default-page-title {
  position: relative;
  padding: 0 0 5px;
  margin: 15px 0 35px;
  font-size: 35px;
  line-height: 1.3;
  color: #555;
  text-align: center;
  @include tablet {
    margin: 40px 0;
    font-size: 45px;
  }

  &::after {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 30px;
    height: 3px;
    content: '';
    background-color: $sub-color;
    transform: translateX(-50%);
    @include tablet {
      width: 45px;
      height: 4px;
    }
  }
}
</style>
