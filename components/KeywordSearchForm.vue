<template>
  <form class="keyword-search-form" method="GET" :action="localePath({ name: 'blog-search' })">
    <input type="search" name="keyword" :placeholder="title" :value="value" />
  </form>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'KeywordSearchForm',
  props: {
    value: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
    title(): string {
      return this.$t('keywordSearch.title') as string;
    },
  },
});
</script>
