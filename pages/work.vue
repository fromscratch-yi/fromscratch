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
      title: 'Work',
      description: 'This is Yuichi Ishiyama&apos;s Works Page.'
    };
    var typeTxt = '$ cat ./work.txt\n\> I\'ll show my private works.\n\> I\'m going to create more.';
    return { titleDescData, typeTxt }
  }
}
</script>

<style>
</style>

