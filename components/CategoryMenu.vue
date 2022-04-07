<template>
  <nav id="blog-category-menu">
    <ul class="menu-list">
      <li v-for="(value, key) in $t('category')" :key="key" class="category-wrap">
        <blog-category-link :type="key" :name="value.name" :is-no-arrow="true" :is-white="true" />
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CategoryMenu',
});
</script>
<style lang="scss" scoped>
#blog-category-menu {
  display: none;
  padding: 10px 20px;
  color: #fff;
  background: $main-color;
  @include tablet {
    display: block;
  }

  .menu-list {
    display: flex;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;

    li {
      margin-right: 25px;

      .category-link {
        position: relative;
        display: block;
        width: 100%;
        padding: 10px 10px 10px 30px;
        font-size: 15px;
        background-repeat: no-repeat;
        background-position: 5px center;
        background-size: 20px;
        border: none;

        &:hover {
          background-color: $main-color;
        }
      }
    }
  }
}
</style>
<style lang="scss">
#blog-category-menu .menu-list li .category-link {
  transition: box-shadow 0.5s ease;
}

#blog-category-menu .menu-list li .category-link[aria-current='page'] {
  box-shadow: inset 0 -2px 0 $sub-color;
}
</style>
