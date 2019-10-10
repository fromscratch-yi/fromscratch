<template>
  <div class="page_wrap">
    <breadcrumb :breadcrumbs="breadcrumbs" />
    <div class="contents_inner">
      <section class="page_contents_wrap">
        <div class="contents_area">
          <TitleDescription :meta="meta"></TitleDescription>
          <Terminal :typeTxt="typeTxt"></Terminal>
          <div class="posts_area">
            <div class="slide_wrap page_description">
              <div class="slide_box move">
                <p class="slide_txt" v-html="$t('blog.introduction')"></p>
              </div>
            </div>
            <div class="blog_menu sub_contents fadein move">
              <h2>Categories</h2>
              <div class="max_size_wrap columns is-tablet category_wrap">
                <section v-for="skill in skills" :key="skill" class="column category">
                  <h3 class="category_ttl_wrap fadein move">
                    <nuxt-link :to="$i18n.path('category/' + skill)" class="wrapper">
                      <span class="category_name" v-html="$t('word.' + skill)"></span>
                      <picture>
                        <source type="image/webp" :srcset="require('~/assets/img/icon_' + skill + '.webp')"/>
                        <img class="rotation_img move" :src="require('~/assets/img/icon_' + skill + '.png')" :alt="$t('word.' + skill)" width="100" height="100">
                      </picture>
                    </nuxt-link>
                  </h3>
                </section>
              </div>
              <h2 class="fadein" v-scroll="handleScroll">New Posts</h2>
              <p v-if="posts.length <= 0" class="no_posts fadein" v-scroll="handleScroll" v-html="$t('blog.no-posts')"></p>
              <section v-else class="columns is-mobile is-multiline new_posts">
                <div class="column is-12-mobile is-4-tablet fadein" v-scroll="handleScroll" v-for="post in posts" :key="post.id">
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
          <!-- FootNav -->
          <div class="max_size_wrap link_wrap">
            <div class="inner_contents_wrap">
              <p class="left"><nuxt-link :to="$i18n.path('work/')">Work</nuxt-link></p>
            </div>
          </div>
        </div>
      </section>
      <section class="side_contents_wrap">
        <SideContents/>
      </section>
    </div>
  </div>
</template>

<script>
import TitleDescription from "~/components/TitleDescription.vue";
import Terminal from "~/components/Terminal.vue";
import Card from '~/components/Card.vue';
import SideContents from "~/components/SideContents.vue";
import Breadcrumb from '~/components/Breadcrumb.vue';
import {createClient} from '~/plugins/contentful.js';
const client = createClient()
export default {
  components: {
    TitleDescription,
    Terminal,
    Card,
    SideContents,
    Breadcrumb,
  },
  layout: 'blog',
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
    var skills = ['frontend', 'backend', 'mobile', 'other'];
    return { meta, typeTxt, posts, skills }
  },
  computed: {
    breadcrumbs: function() {
      return {
        data: [
          {
            name: 'Top',
            path: this.$i18n.path('')
          },
          {
            name: 'Blog',
            path: this.$route.fullPath
          }
        ]
      }
    }
  },
  methods: {
    handleScroll: (evt, el) => {
      let top = el.getBoundingClientRect().top;
      var offcet = 0;
      if (window.innerHeight > 900) {
        offcet = 1200;
      } else {
        offcet = 600;
      }
      if (window.scrollY > top + window.pageYOffset - offcet) {
        el.classList.add('move');
        return true;
      }
      return false;
    }
  }
}
</script>

<style scoped>
/* animation */
@-webkit-keyframes slide_box {
  0% {
    left: 0;
    right: auto;
    width: 0;
  }
  50% {
    left: 0;
    right: auto;
    width: 100%;
  }
  51% {
    left: auto;
    right: 0;
    width: 100%;
  }
  100% {
    left: auto;
    right: 0;
    width: 0;
  }
}
@keyframes slide_box {
  0% {
    left: 0;
    width: 0;
  }
  50% {
    left: 0;
    width: 100%;
  }
  51% {
    left: 0;
    width: 100%;
  }
  100% {
    left: 100%;
    width: 0;
  }
}
@-webkit-keyframes slide_txt {
  0% { opacity: 0; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes slide_txt {
  0% { opacity:0; }
  50% { opacity:0; }
  100% { opacity:1; }
}
@keyframes fadein {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes rotation_img {
  0% {
    clip-path: circle(0 at 50% 50%);
    -webkit-clip-path: circle(0 at 50% 50%);
  }
  100% {
    clip-path: circle(100% at 50% 50%);
    -webkit-clip-path: circle(100% at 50% 50%);
  }
}
.slide_wrap {
  text-align: center;
}
.slide_box {
  position: relative;
  display: inline-block;
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.slide_box:before {
  content: '';
  display: inline-block;
  width: 0;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  background: #44a043;
}
.slide_txt {
  opacity: 0;
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.slide_box.move:before {
  -webkit-animation: slide_box 1s ease 0s 1 normal forwards;
  animation: slide_box 1s ease 0s 1 normal forwards;
}
.slide_box.move .slide_txt {
  -webkit-animation: slide_txt 0s ease .5s 1 normal forwards;
  animation:slide_txt 0s ease .5s 1 normal forwards;
}
.fadein {
  opacity: 0;
}
.move.fadein {
  opacity: 1;
  animation: fadein 2s ease;
}
.rotation_img {
  opacity: 0;
}
.move.rotation_img {
  opacity: 1;
  animation: rotation_img 2s cubic-bezier(.4, 0, .2, 1);
}
.columns.is-multiline.new_posts {
  margin-bottom: 30px;
}
.contents_area {
  padding: 15px 20px;
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
@media screen and (min-width: 768px) {
  .page_contents_wrap .main_ttl {
    margin: 15px 0 35px;
  }
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
.sub_contents .category_wrap .category {
  padding: 30px 15px;
  margin: 0 auto;
}
.sub_contents .category_wrap .category .category_ttl_wrap {
  margin: 0 auto 10px;
  text-align: center;
}
.sub_contents .category_wrap .category .category_ttl_wrap img {
  display: block;
  width: 100px;
  margin: 10px auto 15px;
}
.sub_contents .category_wrap .category .category_ttl_wrap .category_name {
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
  .sub_contents .category_wrap .category {
    float: left;
    flex: none;
    width: 50%;
    padding: 0;
  }
}
</style>

