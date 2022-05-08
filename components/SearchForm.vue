<template>
  <div id="search-form">
    <p class="ttl">{{ $t('keywordSearch.title') }}</p>
    <keyword-search-form />
    <div class="tag-search-wrap">
      <p class="ttl">{{ $t('tagSearch.searchTitle') }}</p>
      <skill-tags :tags="tags" :with-link="true" />
      <p class="arrow-link-wrap">
        <nuxt-link class="arrow-link" :to="localePath({ name: 'blog-tag-search' })">{{
          $t('tagSearch.listTitle')
        }}</nuxt-link>
      </p>
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

  .keyword-search-form {
    display: flex;
    align-items: center;
    margin: 0 0 13px;
  }

  .ttl {
    margin: 0 0 10px;
    font-size: 13px;
    font-weight: bold;
    color: #666;
  }

  .arrow-link-wrap {
    font-weight: bold;
    color: #666;
    text-align: right;

    .arrow-link {
      position: relative;
      padding: 0 12px 0 0;
      font-size: 13px;
      font-weight: bold;
      color: #666;
      text-align: right;

      &::after {
        position: absolute;
        top: calc(50% - 5px);
        right: 0;
        width: 10px;
        height: 10px;
        content: '';
        border-top: 2px solid #888;
        border-right: 2px solid #888;
        transform: rotate(45deg);
      }
    }
  }
}
</style>
