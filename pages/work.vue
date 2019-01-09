<template>
  <section class="contets">
    <h1 class="title">{{ title }}</h1>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Work"
    };
  },
  head() {
    return {
      titleTemplate: "%s | " + this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "This is Yuichi Ishiyama&apos;s Works Page."
        }
      ]
    };
  }
};
</script>

<style>
</style>

