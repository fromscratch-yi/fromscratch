<template>
  <div class="page_wrap">
    <breadcrumb :breadcrumbs="breadcrumbs" />
    <div class="contents_inner">
      <section class="page_contents_wrap">
        <div class="fadein move contents_area">
          <TitleDescription :meta="meta"></TitleDescription>
          <Terminal :typeTxt="typeTxt"></Terminal>
          <div class="posts_area">
            <div class="slide_wrap page_description">
              <div class="slide_box move">
                <p class="slide_txt" v-html="$t('blog.introduction')"></p>
              </div>
            </div>
            <div class="blog_menu sub_contents fadein move">
              <h2 class="fadein" v-scroll="handleScroll">{{ $t('blog.categories.technology.name') }}</h2>
              <p v-if="technologyPosts.length <= 0" class="no_posts fadein" v-scroll="handleScroll" v-html="$t('blog.no-posts')"></p>
              <section v-else class="columns is-mobile is-multiline new_posts">
                <div class="column is-12-mobile is-4-tablet fadein" v-scroll="handleScroll" v-for="post in technologyPosts" :key="post.id">
                  <Card
                    v-bind:key="post.fields.slug"
                    :mainCategory="'technology'"
                    :subCategory="$t('blog.categories.technology.subCategory.' + post.fields.category + '.name')"
                    :title="post.fields.title"
                    :slug="'category/technology/' + post.fields.category + '/' + post.fields.slug"
                    :headerImage="post.fields.headerImage"
                    :publishedAt="post.fields.publishedAt"
                    :tags="post.fields.tags"></Card>
                </div>
              </section>
              <h2 class="fadein" v-scroll="handleScroll">{{ $t('blog.categories.businesslife.name') }}</h2>
              <p v-if="businessPosts.length <= 0" class="no_posts fadein" v-scroll="handleScroll" v-html="$t('blog.no-posts')"></p>
              <section v-else class="columns is-mobile is-multiline new_posts">
                <div class="column is-12-mobile is-4-tablet fadein" v-scroll="handleScroll" v-for="post in businessPosts" :key="post.id">
                  <Card
                    v-bind:key="post.fields.slug"
                    :mainCategory="'businesslife'"
                    :subCategory="$t('blog.categories.businesslife.subCategory.' + post.fields.category + '.name')"
                    :title="post.fields.title"
                    :slug="'category/businesslife/' + post.fields.category + '/' + post.fields.slug"
                    :headerImage="post.fields.headerImage"
                    :publishedAt="post.fields.publishedAt"
                    :tags="post.fields.tags"></Card>
                </div>
              </section>
            </div>
            <ShareButtons :title="meta.title" />
          </div>
          <!-- FootNav -->
          <div class="link_wrap">
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
import ShareButtons from "~/components/ShareButtons"
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
    ShareButtons
  },
  layout: 'blog',
  async asyncData ({ app, env, params }) {
    var technologyPosts = await client.getEntries({
      'content_type': 'technology',
      'locale': app.i18n.locale,
      'fields.title[exists]': 'true',
      'order': '-fields.publishedAt',
      'limit': 3
    }).then(entries => {
      return {
        technologyPosts: entries.items
      }
    })
    .catch(entries => {
      return{
        technologyPosts: []
      }
    })
    var businessPosts = await client.getEntries({
      'content_type': 'businesslife',
      'locale': app.i18n.locale,
      'fields.title[exists]': 'true',
      'order': '-fields.publishedAt',
      'limit': 3
    }).then(entries => {
      return {
        businessPosts: entries.items
      }
    })
    .catch(entries => {
      return{
        businessPosts: []
      }
    })
    return {technologyPosts: technologyPosts['technologyPosts'] , businessPosts: businessPosts['businessPosts']}
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
    var technologyPosts = [];
    var businessPosts = [];
    var skills = ['frontend', 'backend', 'mobile', 'other'];
    return { meta, typeTxt, technologyPosts, businessPosts, skills }
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
.blog_wrap .columns.is-multiline.new_posts {
  margin-bottom: 0;
}
.contents_area {
  padding: 15px 20px;
}
.blog_wrap .link_wrap {
  margin-top: 15px;
}
.no_posts {
  padding: 15px 0;
  font-weight: bold;
  text-align: center;
}
.page_description {
  margin: 35px 0;
  text-align: center;
  font-size: 16px;
}
@media screen and (min-width: 768px) {
  .page_contents_wrap .main_ttl {
    margin: 15px 0 35px;
  }
}
.sub_contents h2 {
  font-size: 23px;
  font-weight: bold;
  margin: 40px 0 25px;
  position: relative;
  padding-bottom: 5px;
  padding-left: 5px;
  border-bottom: 4px solid #DDD;
  line-height: 1.6;
}
.sub_contents h2::after {
    position: absolute;
    content: " ";
    border-bottom: solid 4px rgb(71, 160, 61);
    bottom: -4px;
    left: 0;
    width: 15%;
    display: block;
}
@media screen and (max-width: 768px) {
  .blog_menu .columns .column.move {
    margin-bottom: 10px;
  }
  .blog_menu .columns .column.move:last-child {
    margin-bottom: 0;
  }
}
</style>

