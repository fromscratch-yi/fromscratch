<template>
  <div class="contents_area">
    <div class="max_size_wrap">
      <div class="inner_contents_wrap">
        <TitleDescription :titleDescData="titleDescData"></TitleDescription>
        <Terminal :typeTxt="typeTxt"></Terminal>
        <p class="no_posts">No blog posts yet...</p>
      </div>
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
.no_posts {
  padding: 15px 0;
  font-weight: bold;
  text-align: center;
}
</style>

