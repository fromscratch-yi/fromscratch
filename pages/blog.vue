<template>
  <TitleDescription :titleDescData="titleDescData"></TitleDescription>
</template>

<script>
import TitleDescription from "~/components/TitleDescription.vue";
export default {
  components: {
    TitleDescription
  },
  data(context){
    var titleDescData = {
      title: 'Blog',
      description: 'This is Yuichi Ishiyama&apos;s Blog Page.'
    };
    return { titleDescData }
  }
}
</script>

<style>
</style>
