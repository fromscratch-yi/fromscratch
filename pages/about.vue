<template>
  <div>
    <TitleDescription :titleDescData="titleDescData"></TitleDescription>
    <Terminal :typeTxt="typeTxt"></Terminal>
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
      title: 'About',
      description: 'This is Yuichi Ishiyama&apos;s profile.'
    };
    var typeTxt = '$ cat ./about.txt\n\> This is Yuichi Ishiyama\'s Profile.\n\> Who am I\?';
    return { titleDescData, typeTxt }
  }
}
</script>

<style>
</style>

