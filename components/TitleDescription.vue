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
        {
          hid: "description",
          name: "description",
          content: this.description
        }
      ]
    };
  }
};
</script>

<style>
</style>

