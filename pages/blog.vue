<template>
  <h1 class="title">{{ title }}</h1>
</template>

<script>
export default {
  data() {
    return {
      title: "Blog"
    };
  },
  head() {
    return {
      titleTemplate: "%s | " + this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "This is Yuichi Ishiyama&apos;s Blog Page."
        }
      ]
    };
  }
};
</script>

<style>
</style>

