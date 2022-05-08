<template>
  <client-only>
    <form class="keyword-search-form" method="GET" :action="localePath({ name: 'blog-search' })">
      <input type="text" name="keyword" :placeholder="$t('keywordSearch.title')" :value="value" />
    </form>
  </client-only>
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
});
</script>
