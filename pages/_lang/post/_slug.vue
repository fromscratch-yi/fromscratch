<template>
  <div class="contents_area">
    <div class="max_size_wrap">
      <section class="slug">
        <p class="head_img"><img class="slug_image" v-bind:src="currentPost.fields.headerImage.fields.file.url"/></p>
        <div class="content_inner">
          <div class="tags">
            <span v-for="tag in currentPost.fields.tags" :key="tag.id" class="tag">#{{tag}}</span>
          </div>
          <p class="slug_date">{{ currentPost.fields.publishedAt }}</p>
          <h1 class="slug_title">{{ currentPost.fields.title }}</h1>
          <div class="slug_content" v-html="$md.render(currentPost.fields.body)"></div>
        </div>
      </section>
      <div class="inner_contents_wrap">
        <nav class="post_detail_nav pagination is-centered" role="navigation" aria-label="pagination">
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
        if (this.allPosts[i].fields.publishDate === this.currentPost.fields.publishDate) {
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
  padding: 15px 20px;
  box-shadow: 0 0 10px #ccc;
  background: #fff;
  z-index: 1;
  font-size: 14px;
}
.slug .content_inner .slug_title {
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: bold;
}
.slug .content_inner .slug_date {
  font-size: 14px;
  color: rgb(57, 72, 85);
}
.slug .content_inner .tags {
  margin: 0;
}
.slug .content_inner .tags .tag {
  font-size: 12px;
  color: rgb(255, 142, 26);
}
.slug .content_inner .slug_content {
  font-size: 13px;
  line-height: 1.7;
}
.slug .content_inner .slug_content h2 {
  font-size: 16px;
  margin: 18px 0;
  border-color: rgb(86, 181, 75);
  border-left-width: 4px;
  border-left-style: solid;
  padding: 3px 3px 3px 10px;
  line-height: 1.4;
}
.slug .content_inner .slug_content p {
  margin: 10px 0;
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
.post_detail_nav .pagination-previous, .post_detail_nav .pagination-next {
  margin-top: 20px;
}
.post_detail_nav .pagination-previous,
.post_detail_nav .pagination-next,
.post_detail_nav .pagination-link {
  border-color: rgb(86, 181, 75);
}

</style>