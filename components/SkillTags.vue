<template>
  <ul v-if="withLink" class="skill-tags">
    <li v-for="(val, idx) in tags" :key="idx" class="link-wrap">
      <nuxt-link :to="localePath({ name: 'blog-tag-search', params: { search: val } })">{{
        val
      }}</nuxt-link>
    </li>
  </ul>
  <ul v-else class="skill-tags">
    <li v-for="(val, idx) in tags" :key="idx">{{ val }}</li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'SkillTags',
  props: {
    tags: {
      type: Array as PropType<string[]>,
      required: true,
    },
    withLink: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
.skill-tags {
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 7px 10px;

  li {
    padding: 3px 5px;
    font-size: 12px;
    background-color: #ebebeb;
    border-radius: 5px;

    &::before {
      content: '#';
    }

    &.link-wrap {
      border-bottom: 2px solid #b6b6b6;
      box-shadow: 0 1px 3px #5656564d;
    }

    a {
      &[aria-current='page'] {
        font-weight: bold;
        color: $sub-color;
      }

      transition: 0.4s;

      &:hover {
        color: $sub-color;
      }
    }
  }
}
</style>
