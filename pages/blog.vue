<template>
  <div class="contents_area">
    <div class="max_size_wrap">
      <TitleDescription :titleDescData="titleDescData"></TitleDescription>
      <Terminal :typeTxt="typeTxt"></Terminal>
    </div>
  </div>
</template>

<script>
import TitleDescription from "~/components/TitleDescription.vue";
import Terminal from "~/components/Terminal.vue";
export default {
  components: {
    TitleDescription,
    Terminal
  },
  data(context){
    var titleDescData = {
      title: 'Blog',
      description: 'This is Yuichi Ishiyama&apos;s Blog Page.'
    };
    var typeTxt = '$ cat ./blog.txt\n\> Welcome to my Blog page.\n\> To output that the study was.';
    return { titleDescData, typeTxt }
  }
}
</script>

<style>
</style>

