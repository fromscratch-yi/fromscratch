<template>
  <h1 class="main_ttl">{{ this.meta.title }}</h1>
</template>

<script>
import Meta from '~/assets/mixins/meta'
export default {
  props: ['meta'],
  mixins: [Meta],
};
</script>

<style>
.main_ttl {
  position: relative;
  padding: 0 0 5px;
  margin: 0 0 20px;
  font-size: 30px;
  text-align: center;
  line-height: 1.3;
}
.main_ttl::before {
  position: absolute;
  content: '';
  width: 30px;
  height: 3px;
  background-color: rgb(71, 160, 61);
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
}
</style>

