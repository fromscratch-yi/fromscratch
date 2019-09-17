<template>
  <div class="contents_area">
    <div class="max_size_wrap">
      <div class="inner_contents_wrap">
        <TitleDescription :meta="meta"></TitleDescription>
        <Terminal :typeTxt="typeTxt"></Terminal>
        <div class="posts_area">
          <p class="page_description" v-html="$t('blog.introduction')"></p>
          <div class="blog_menu sub_contents">
            <h2>Categories</h2>
            <div class="max_size_wrap columns is-tablet category_wrap">
              <section class="column category">
                <h3 class="category_ttl_wrap">
                  <nuxt-link :to="$i18n.path('category/frontend')" class="wrapper">
                    <span class="category_name" v-html="$t('word.frontend')"></span>
                    <picture>
                      <source type="image/webp" srcset="~assets/img/icon_front.webp" />
                      <img src="~assets/img/icon_front.png" :alt="$t('word.frontend')" width="100" height="100">
                    </picture>
                  </nuxt-link>
                </h3>
              </section>
              <section class="column category">
                <h3 class="category_ttl_wrap">
                  <nuxt-link :to="$i18n.path('category/backend')" class="wrapper">
                    <span class="category_name" v-html="$t('word.backend')"></span>
                    <picture>
                      <source type="image/webp" srcset="~assets/img/icon_back.webp" />
                      <img src="~assets/img/icon_back.png" :alt="$t('word.backend')" width="100" height="100">
                    </picture>
                  </nuxt-link>
                </h3>
              </section>
              <section class="column category">
                <h3 class="category_ttl_wrap">
                  <nuxt-link :to="$i18n.path('category/mobile')" class="wrapper">
                    <span class="category_name" v-html="$t('word.mobile')"></span>
                    <picture>
                      <source type="image/webp" srcset="~assets/img/icon_mobile.webp" />
                      <img src="~assets/img/icon_mobile.png" :alt="$t('word.mobile')" width="100" height="100">
                    </picture>
                  </nuxt-link>
                </h3>
              </section>
              <section class="column category">
                <h3 class="category_ttl_wrap">
                  <nuxt-link :to="$i18n.path('category/other')" class="wrapper">
                    <span class="category_name" v-html="$t('word.other')"></span>
                    <picture>
                      <source type="image/webp" srcset="~assets/img/icon_other.webp" />
                      <img src="~assets/img/icon_other.png" :alt="$t('word.other')" width="100" height="100">
                    </picture>
                  </nuxt-link>
                </h3>
              </section>
            </div>
            <h2>New Posts</h2>
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
      </div>
    </div>
    <!-- FootNav -->
    <div class="max_size_wrap link_wrap">
      <div class="inner_contents_wrap">
        <p class="left"><nuxt-link :to="$i18n.path('work/')">Work</nuxt-link></p>
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
    var content_type = env.CTF_BLOG_POST_TYPE_ID_EN;
    if (params.lang == 'ja') {
      content_type = env.CTF_BLOG_POST_TYPE_ID;
    }
    return await client.getEntries({
      'content_type': content_type,
      'order': '-fields.publishedAt',
      'limit': 3
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
      headline: 'Blog',
      title: this.$t('blog.pageTitle'),
      description: this.$t('blog.description'),
      type: 'article',
      url: this.$route.fullPath,
      image: 'https://fromscratch-y.work/ogp.gif',
      lang: this.$i18n.locale
    };
    var typeTxt = '$ cat ./blog.txt\n\> Welcome to my Blog page.\n\> To output that the study was.';
    var posts = [];
    return { meta, typeTxt, posts }
  }
}
</script>

<style>
.columns.is-multiline.new_posts {
  margin-bottom: 30px;
}
.no_posts {
  padding: 15px 0;
  font-weight: bold;
  text-align: center;
}
.page_description {
  margin: 35px 0;
  text-align: center;
  font-size: 14px;
}
.sub_contents h2 {
  font-size: 25px;
  margin: 0 0 20px;
  text-align: center;
}
.sub_contents .category_wrap {
  border-radius: 20px;
  margin-bottom: 40px;
  position: relative;
  background: #1F1F1F;
}
.sub_contents .category {
  padding: 30px 15px;
  margin: 0 auto;
}
.sub_contents .category .category_ttl_wrap {
  margin: 0 auto 10px;
  text-align: center;
}
.sub_contents .category .category_ttl_wrap img {
  display: block;
  width: 100px;
  margin: 10px auto 15px;
}
.sub_contents .category .category_ttl_wrap .category_name {
  display: inline-block;
  padding: 5px;
  font-size: 15px;
  color: #62BE56;
  font-weight: bold;
}
@media screen and (max-width: 768px){
  .sub_contents .category_wrap {
    padding: 30px 10px;
  }
  .sub_contents .category_wrap::after {
    content: '';
    clear: both;
    display: block;
  }
  .sub_contents .category {
    float: left;
    flex: none;
    width: 50%;
    padding: 0;
  }
}
</style>

