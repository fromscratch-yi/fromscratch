<template>
  <div class="page_wrap">
    <breadcrumb :breadcrumbs="breadcrumbs" />
    <div class="contents_inner">
      <section class="page_contents_wrap">
        <div class="contents_area fadein move">
          <TitleDescription :meta="meta"></TitleDescription>
          <div class="slide_wrap page_description">
            <div class="slide_box move">
              <p class="slide_txt" v-html="this.$t('blog.categories.' + this.$route.params.category + '.introduction')"></p>
            </div>
          </div>
          <div class="posts_area">
            <p v-if="posts.length <= 0" class="no_posts" v-html="$t('blog.no-posts')"></p>
            <section v-else class="columns is-mobile is-multiline new_posts">
              <div class="column is-12-mobile is-4-tablet fadein" v-scroll="handleScroll" v-for="post in posts" :key="post.id">
                <Card
                  v-bind:key="post.fields.slug"
                  :mainCategory="category"
                  :subCategory="$t('blog.categories.' + category + '.subCategory.' + post.fields.category + '.name')"
                  :title="post.fields.title"
                  :slug="'blog/' + category + '/' + post.fields.category + '/' + post.fields.slug"
                  :thumbnail="post.fields.thumbnail.fields"
                  :publishedAt="post.fields.publishedAt"
                  :tags="post.fields.tags"></Card>
              </div>
            </section>
          </div>
          <ShareButtons :title="meta.title" />
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
import ShareButtons from "~/components/ShareButtons"
import SideContents from "~/components/SideContents.vue";
import Breadcrumb from '~/components/Breadcrumb.vue';
import Card from '~/components/Card.vue';
import {createClient} from '~/plugins/contentful.js';
const client = createClient()
export default {
  components: {
    TitleDescription,
    Card,
    SideContents,
    Breadcrumb,
    ShareButtons
  },
  layout: 'blog',
  async asyncData ({ app, env, params }) {
    return client.getEntries({
      'locale': app.i18n.locale,
      'content_type': params.category,
      'fields.title[exists]': 'true',
      'order': '-fields.publishedAt',
    }).then(entries => {
      var posts = (entries.items).filter(function(item, index){
        var data = item.fields;
        if (data.title && data.description && data.tags && data.body && data.recommend) return true;
      });
      return {
        posts: posts
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
      headline: this.$t('blog.categories.' + this.$route.params.category + '.name'),
      title: this.$t('blog.categories.' + this.$route.params.category + '.pageTitle'),
      description: this.$t('blog.categories.' + this.$route.params.category +'.description'),
      type: 'article',
      url: this.$route.fullPath,
      image: 'https://fromscratch-y.work/ogp.gif',
      lang: this.$i18n.locale
    };
    var posts = [];
    var category = this.$route.params.category;
    return { meta, posts , category}
  },
  computed: {
    breadcrumbs: function() {
      return {
        data: [
          {
            name: 'Blog',
            path: this.$i18n.path('blog/')
          },
          {
            name: this.$t('blog.categories.' + this.$route.params.category + '.name'),
            path: ''
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
.contents_area {
  padding: 15px 20px 20px;
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
.sub_contents h2 {
  font-size: 25px;
  margin: 0 0 20px;
  text-align: center;
}
.sub_contents .category_wrap {
  border-radius: 20px;
  margin-bottom: 30px;
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
@media screen and (min-width: 768px) {
  .page_contents_wrap .main_ttl {
    margin: 25px 0 35px;
  }
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
@media screen and (max-width: 768px) {
  .posts_area .columns .column.move {
    margin-bottom: 10px;
  }
  .posts_area .columns .column.move:last-child {
    margin-bottom: 0;
  }
}
</style>