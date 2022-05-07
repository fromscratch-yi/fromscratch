<template>
  <ul v-if="withLink" class="skill-tags">
    <li v-for="(val, idx) in tags" :key="idx">
      <nuxt-link :to="localePath({ name: 'blog-tag-search', params: { search: val } })">
        {{ val }}
      </nuxt-link>
    </li>
  </ul>
  <ul v-else class="skill-tags">
    <li v-for="(val, idx) in tags" :key="idx">{{ val }}</li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SkillTags',
  props: {
    tags: {
      type: Array,
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
  display: flex;
  flex-wrap: wrap;

  li {
    padding: 3px 5px;
    margin: 0 7px 7px 0;
    font-size: 12px;
    background-color: #ebebeb;
    border-radius: 5px;

    &::before {
      content: '#';
    }

    a[aria-current='page'] {
      font-weight: bold;
      color: $sub-color;
    }
  }
}
</style>
