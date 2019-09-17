<template>
  <div>
    <TitleDescription :meta="meta"></TitleDescription>
    <p class="page_description" v-html="$t(this.$route.params.slug + '.introduction')"></p>
    <div class="posts_area">
      <p v-if="posts.length <= 0" class="no_posts" v-html="$t('blog.no-posts')"></p>
      <section v-else class="columns is-mobile is-multiline new_posts">
        <div class="column is-12-mobile is-4-tablet" v-for="post in posts" :key="post.id">
          <Card
            v-bind:key="post.fields.slug"
            :title="post.fields.title"
            :slug="post.fields.slug"
            :headerImage="post.fields.headerImage"
            :publishedAt="post.fields.publishedAt"
            :tags="post.fields.tags"></Card>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import TitleDescription from "~/components/TitleDescription.vue";
import Card from '~/components/Card.vue';
import {createClient} from '~/plugins/contentful.js';
const client = createClient()
export default {
  components: {
    TitleDescription,
    Card
  },
  layout: 'category',
  async asyncData ({ app, env, params }) {
    var content_type = env.CTF_BLOG_POST_TYPE_ID_EN;
    if (params.lang == 'ja') {
      content_type = env.CTF_BLOG_POST_TYPE_ID;
    }
    return await client.getEntries({
      'content_type': content_type,
      'order': '-fields.publishedAt',
      'fields.category[match]': params.slug
    }).then(entries => {
      return {
        posts: entries.items
      }
    })
    .catch(entries => {
      return{
        posts: []
      }
    })
  },
  data () {
    var meta = {
      headline: this.$t('word.' + this.$route.params.slug),
      title: this.$t(this.$route.params.slug + '.pageTitle'),
      description: this.$t(this.$route.params.slug +'.description'),
      type: 'article',
      url: this.$route.fullPath,
      image: 'https://fromscratch-y.work/ogp.gif',
      lang: this.$i18n.locale
    };
    var posts = [];
    return { meta, posts }
  }
}
</script>

<style>
  .posts_area {
    margin-bottom: 50px;
  }
</style>