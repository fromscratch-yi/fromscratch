<template>
  <div class="contents_area">
    <div class="max_size_wrap">
      <div class="inner_contents_wrap">
        <TitleDescription :titleDescData="titleDescData"></TitleDescription>
        <Terminal :typeTxt="typeTxt"></Terminal>
        <p class="no_posts">No blog posts yet...</p>
        <section class="index">
          <card v-for="post in posts"
            v-bind:key="post.fields.slug"
            :title="post.fields.title"
            :slug="post.fields.slug"
            :headerImage="post.fields.headerImage"
            :publishedAt="post.fields.publishedAt"/>
        </section>
      </div>
    </div>
    <!-- FootNav -->
    <div class="max_size_wrap link_wrap">
      <div class="inner_contents_wrap">
        <p class="left"><nuxt-link to="work">Work</nuxt-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import TitleDescription from "~/components/TitleDescription.vue";
import Terminal from "~/components/Terminal.vue";
import Card from '~/components/Card.vue';
import {createClient} from '~/plugins/contentful.js';
const client = createClient()
export default {
  transition: 'slide-left',
  components: {
    TitleDescription,
    Terminal,
    Card
  },
  async asyncData ({ env, params }) {
    return await client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      order: '-fields.publishedAt',
    }).then(entries => {
      console.log(entries.items);
      return {
        posts: entries.items
      }
    })
    .catch(console.error)
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
.index {
  display: flex;
  flex-wrap: wrap;
}
</style>

