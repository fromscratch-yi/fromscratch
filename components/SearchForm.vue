<template>
  <div id="search-form">
    <form class="keyword-search-form" method="GET" action="">
      <input type="text" name="keyword" placeholder="keyword" />
    </form>
    <div class="tag-search-wrap">
      <p class="ttl">{{ $t('tagSearch.searchTitle') }}</p>
      <skill-tags :tags="tags" :with-link="true" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { getTags } from '@/libs/contentful';
export default Vue.extend({
  name: 'SearchForm',
  data(): {
    tags: string[];
  } {
    const tags = [] as string[];
    return { tags };
  },
  mounted() {
    getTags().then((tags) => {
      this.tags = tags;
    });
  },
});
</script>
<style lang="scss" scoped>
#search-form {
  width: 100%;
  max-width: 1300px;
  padding: 10px 0;
  margin: 0 auto;
  background: #fff;

  .keyword-search-form {
    display: flex;
    display: none;
    align-items: center;
    margin: 0 0 13px;
  }

  .tag-search-wrap {
    .ttl {
      margin: 0 0 10px;
      font-size: 14px;
      font-weight: bold;
      color: #555;
    }
  }
}
</style>
