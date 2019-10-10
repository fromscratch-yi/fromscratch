<template>
  <div class="category_wrap">
    <p v-on:click="toggle" class="main_category"><font-awesome-icon :icon="icon"/>{{ title }}<span class="arrow"></span></p>
    <vue-slide-up-down :active="active">
      <div class="sub_category_wrap">
        <ul class="sub_category">
          <li v-for="category in categories" :key="category.title">
            <nuxt-link :to="$i18n.path('category/' + category.link)">{{ category.title }}</nuxt-link>
          </li>
        </ul>
      </div>
    </vue-slide-up-down>
  </div>
</template>

<script>
import Vue from "vue";
import VueSlideUpDown from "vue-slide-up-down";
Vue.use(VueSlideUpDown);
export default {
  data() {
    return {
      active: false
    }
  },
  props:['icon','title', 'categories'],
  components: {
    VueSlideUpDown
  },
  methods: {
    toggle: function () {
      this.active = !this.active
    }
  }
}
</script>

<style scoped>
.arrow {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  border-top: 4px dashed;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
}
@media screen and (min-width: 768px){
  .pc_category_nav .category_wrap {
    position: relative;
  }
  .pc_category_nav .main_category {
    margin: 0 40px 0 15px;
    cursor: pointer;
  }
  .pc_category_nav .main_category svg {
    margin-right: 8px;
  }
  .pc_category_nav .search_wrap {
    margin-left: auto;
  }
  .pc_category_nav .main_category + div {
    position: absolute;
    top: 44px;
    z-index: 20;
  }
  .pc_category_nav .sub_category {
    border: 2px solid #47a03d;
    width: 180px;
    border-top: none;
  }
  .pc_category_nav .sub_category li {
    border-bottom: 1px dashed #47a03d;
    background: #fff;
  }
  .pc_category_nav .sub_category li a {
    display: block;
    padding: 10px 10px 10px 20px;
    color: #333;
    font-size: 16px;
  }
  .pc_category_nav .sub_category li a:hover {
    background: #ceeaca;
  }
  .pc_category_nav .sub_category li:last-child {
    border: none;
  }
}
</style>