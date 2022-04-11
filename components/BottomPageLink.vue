<template>
  <nuxt-link :to="localePath(to)" :class="position" class="arrow-link" no-prefetch>{{
    name
  }}</nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'BottomPageLink',
  props: {
    to: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.arrow-link {
  position: relative;
  display: inline-block;
  padding: 5px 25px;
  font-size: 1.1em;
  line-height: 1;

  &::before,
  &::after {
    position: absolute;
    top: calc(50% - 9px);
    vertical-align: middle;
    content: '';
  }

  &::before {
    top: calc(50% - 9px);
    width: 18px;
    height: 18px;
    background: $sub-color;
    border-radius: 50%;
  }

  &::after {
    top: calc(50% - 3px);
    width: 6px;
    height: 6px;
    border-top: 2px solid #fff;
    border-right: 2px solid #fff;
  }

  &.right {
    margin-left: auto;

    &::before {
      right: 0;
    }

    &::after {
      right: 7px;
      transform: rotate(45deg);
    }
  }

  &.left {
    margin-right: auto;

    &::before {
      left: 0;
    }

    &::after {
      left: 7px;
      transform: rotate(-135deg);
    }
  }
}
</style>
