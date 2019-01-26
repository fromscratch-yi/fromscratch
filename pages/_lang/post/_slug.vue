<template>
  <div class="contents_area">
    <div class="max_size_wrap">
      <section class="slug">
        <p class="head_img"><img class="slug_image" v-bind:src="currentPost.fields.headerImage.fields.file.url"/></p>
        <div class="content_inner">
          <p class="slug_date">{{ currentPost.fields.publishedAt }}</p>
          <h1 class="slug_title">{{ currentPost.fields.title }}</h1>
          <ul class="tag_wrap">
            <li v-for="tag in currentPost.fields.tags" :key="tag.id" class="tag">#{{tag}}</li>
          </ul>
          <div class="slug_content" v-html="$md.render(currentPost.fields.body)"></div>
        </div>
      </section>
      <div class="inner_contents_wrap">
        <nav class="post_nav">
          <nuxt-link v-if="prevPost" class="pagination-previous" :to="$i18n.path('post/' + prevPost.fields.slug)">&laquo; Prev</nuxt-link>
          <nuxt-link v-if="nextPost" class="pagination-next" :to="$i18n.path('post/' + nextPost.fields.slug)">Next &raquo;</nuxt-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import Meta from '~/assets/mixins/meta'
const Domain = 'https://fromscratch-y.firebaseapp.com';
const client = createClient()
export default {
  layout: 'post',
  head () {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      title: "FromScratch | " + this.currentPost.fields.title,
      meta: [
        { hid: 'description', name: 'description', content: this.currentPost.fields.description },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:title', property: 'og:title', content: 'FromScratch | ' + this.currentPost.fields.title },
        { hid: 'og:description', property: 'og:description', content: this.currentPost.fields.description },
        { hid: 'og:url', property: 'og:url', content: 'https://fromscratch-y.firebaseapp.com/ogp.gif' },
        { hid: 'og:image', property: 'og:image', content: this.currentPost.fields.headerImage.fields.file.url },
      ],
    }
  },
  data () {
    return {
      allPosts: [],
      currentPost: [],
    }
  },
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      order: '-fields.publishedAt',
    }).then(entries => {
      const posts = entries.items
      const current = posts.filter(function (item) {
        return item.fields.slug === params.slug
      })
      return {
        allPosts: posts,
        currentPost: current[0]
      }
    })
    .catch(console.error)
  },
  computed: {
    dateOrder: function () {
      for (let i = 0; i < this.allPosts.length; i++) {
        if (this.allPosts[i].fields.publishedAt === this.currentPost.fields.publishedAt) {
          return i;
        }
      }
    },
    nextPost: function () {
      if (this.dateOrder === 0) {
        return false;
      } else {
        return this.allPosts[this.dateOrder - 1];
      }
    },
    prevPost: function () {
      if (this.dateOrder === this.allPosts.length - 1) {
        return false;
      } else {
        return this.allPosts[this.dateOrder + 1];
      }
    }
  }
}
</script>

<style>
.slug .content_inner {
  position: relative;
  width: 94%;
  margin: -13% auto 0;
  padding: 20px;
  box-shadow: 0 0 25px -6px #636363;
  background: #fff;
  z-index: 1;
  font-size: 14px;
}
.slug .content_inner .slug_date {
  font-size: 13px;
  text-align: center;
  color: rgb(57, 72, 85);
}
.slug .content_inner .slug_title {
  position: relative;
  padding: 5px 10px 8px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
}
.slug .content_inner .slug_title::before {
    position: absolute;
    content: '';
    width: 50px;
    height: 3px;
    background-color: rgb(71, 160, 61);
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
}
.slug .content_inner .tag_wrap {
  margin: 20px 0 15px;
  text-align: center;
}
.slug .content_inner .tag_wrap .tag {
  margin-bottom: 5px;
  font-size: 12px;
  color: rgb(255, 142, 26);
}
.slug .content_inner .slug_content {
  font-size: 13px;
  line-height: 1.9;
}
.slug .content_inner .slug_content h2 {
  font-size: 16px;
  margin: 18px 0;
  border-color: rgb(71, 160, 61);
  border-left-width: 4px;
  border-left-style: solid;
  padding: 3px 3px 3px 10px;
  line-height: 1.4;
}
.slug .content_inner .slug_content p {
  margin: 10px 0;
  line-height: 1.9;
}
.slug .content_inner .slug_content ul {
  color: #1e366a;
  border: dotted #1e366a 1px;/*ドット 色 太さ*/
  padding: 0.5em 0.5em 0.5em 2em;
}
.slug .content_inner .slug_content ul li {
  line-height: 1.5;
  padding: 0.5em 0;
  list-style: disc;
}
.post_nav {
  position: relative;
  margin: 20px 0 0;
  width: 100%;
  overflow: auto;
}
.post_nav::after {
  content: '';
  display: block;
  width: 100%;
}
.post_nav .pagination-previous {
  float: left;
}
.post_nav .pagination-next {
  float: right;
}
</style>