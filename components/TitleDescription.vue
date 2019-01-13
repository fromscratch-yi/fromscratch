<template>
  <h1 class="main_ttl">{{ title }}</h1>
</template>

<script>
export default {
  props: ['titleDescData'],
  data(context){
    return {
      title: this.titleDescData.title,
      description: this.titleDescData.description
    }
  },
  head() {
    return {
      titleTemplate: "%s | " + this.title,
      meta: [
        { hid: "description", name: "description", content: this.description },
        { hid: 'og:type', name: 'og:type', content: 'article' },
        { hid: 'og:title', name: 'og:title', content: 'FromScratch | ' + this.title },
        { hid: 'og:description', name: 'og:description', content: this.description }
      ]
    };
  }
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

