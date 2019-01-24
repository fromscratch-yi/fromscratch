<template>
  <div class="contents_area">
    <div class="max_size_wrap">
      <div class="inner_contents_wrap">
        <TitleDescription :meta="meta"></TitleDescription>
        <Terminal :typeTxt="typeTxt"></Terminal>
        <p v-if="$i18n.locale === 'en'" class="no_posts">Note: English is not supported. Please open the side menu in the upper right and change the language.</p>
        <div v-else class="posts_area">
          <p class="page_description">学んだことのアウトプットとして、プログラミングに関する記事を中心に書いています。</p>
          <p v-if="posts.length <= 0" class="no_posts">記事がありません。</p>
          <section v-else class="columns is-mobile is-multiline">
            <card v-for="post in posts"
              v-bind:key="post.fields.slug"
              :title="post.fields.title"
              :slug="post.fields.slug"
              :headerImage="post.fields.headerImage"
              :publishedAt="post.fields.publishedAt"
              :tags="post.fields.tags"/>
          </section>
        </div>
      </div>
    </div>
    <!-- FootNav -->
    <div class="max_size_wrap link_wrap">
      <div class="inner_contents_wrap">
        <p class="left"><nuxt-link :to="$i18n.path('work')">Work</nuxt-link></p>
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
  components: {
    TitleDescription,
    Terminal,
    Card
  },
  async asyncData ({ app, env, params }) {
    var content_type = env.CTF_BLOG_POST_TYPE_ID;
    return await client.getEntries({
      'content_type': content_type,
      order: '-fields.publishedAt',
    }).then(entries => {
      return {
        posts: entries.items
      }
    })
    .catch()
  },
  data () {
    var meta = {
      title: 'Blog',
      description: this.$t('blog.description'),
      type: 'article',
      url: this.$route.fullPath,
      image: 'https://fromscratch-y.firebaseapp.com/ogp.gif',
      lang: this.$i18n.locale
    };
    var typeTxt = '$ cat ./blog.txt\n\> Welcome to my Blog page.\n\> To output that the study was.';
    var posts = [];
    return { meta, typeTxt, posts }
  }
}
</script>

<style>
.no_posts {
  padding: 15px 0;
  font-weight: bold;
  text-align: center;
}
.page_description {
  margin: 20px 0;
  text-align: center;
  font-size: 14px;
}
</style>

