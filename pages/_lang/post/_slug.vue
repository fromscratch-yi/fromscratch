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
import {createClient} from '~/plugins/contentful.js';
const client = createClient();
const Domain = 'https://fromscratch-y.work/';
export default {
  layout: 'post',
  head () {
    return {
      __dangerouslyDisableSanitizers: ['script'],
      script: [{
        innerHTML: `{
          "@context": "http://schema.org",
          "@type": "Article",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "${Domain}"
          },
          "headline": "${this.currentPost.fields.title}",
          "image": "https:${this.currentPost.fields.headerImage.fields.file.url}",
          "datePublished": "${this.currentPost.fields.publishedAt}",
          "dateModified": "${this.currentPost.fields.publishedAt}",
          "author": {
            "@type": "Person",
            "name": "Yuichi Ishiyama"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Yuichi Ishiyama",
            "logo": {
              "@type": "ImageObject",
              "url": "${Domain}icon.png"
            }
          },
          "description": "${this.currentPost.fields.description}"
        }`,
        type: 'application/ld+json'
      }],
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      title: "FromScratch | " + this.currentPost.fields.title,
      meta: [
        { hid: 'description', name: 'description', content: this.currentPost.fields.description },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:title', property: 'og:title', content: 'FromScratch | ' + this.currentPost.fields.title },
        { hid: 'og:description', property: 'og:description', content: this.currentPost.fields.description },
        { hid: 'og:url', property: 'og:url', content: Domain + 'ogp.gif' },
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
  asyncData ({ env, params, error }) {
    var content_type = env.CTF_BLOG_POST_TYPE_ID_EN;
    if (params.lang == 'ja') {
      content_type = env.CTF_BLOG_POST_TYPE_ID;
    }
    return client.getEntries({
      'content_type': content_type,
      order: '-fields.publishedAt',
    }).then(entries => {
      const posts = entries.items
      const current = posts.filter(function (item) {
        return item.fields.slug === params.slug
      })
      if (posts.length == 0 || current.length == 0) {
        throw({ statusCode: 404, message: 'Post not found' })
      }
      return {
        allPosts: posts,
        currentPost: current[0]
      }
    })
    .catch(e => {
      error(e);
    })
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
  margin-right: 5px;
  margin-bottom: 5px;
  font-size: 12px;
  color: rgb(255, 142, 26);
}
.slug .content_inner .slug_content {
  font-size: 13px;
  line-height: 1.9;
}
.slug .content_inner .slug_content h2 {
  font-size: 17px;
  margin: 18px 0;
  position: relative;
  padding-bottom: 5px;
  padding-left: 5px;
  border-bottom: 4px solid #DDD;
}
.slug .content_inner .slug_content h2::after {
  position: absolute;
  content: " ";
  border-bottom: solid 4px rgb(71, 160, 61);
  bottom: -4px;
  left: 0;
  width: 15%;
  display: block;
}
.slug .content_inner .slug_content h3 {
  font-size: 15px;
  margin: 18px 0 0;
  border-color: rgb(71, 160, 61);
  border-left-width: 4px;
  border-left-style: solid;
  padding: 2px 3px 2px 10px;
  line-height: 1.4;
}
.slug .content_inner .slug_content p {
  margin: 10px 0;
  line-height: 1.9;
}
.slug .content_inner .slug_content p.img_wrap {
  margin: 0;
  text-align: center;
}
.slug .content_inner .slug_content .memo {
  position: relative;
  padding: 10px 15px;
  margin: 15px 0 20px;
  background: rgb(241, 241, 241);
  border-radius: 5px;
}
.slug .content_inner .slug_content .memo::after {
  position: absolute;
  display: inline-block;
  top: -15px;
  right: -5px;
  content: "Memo";
  padding: 4px 10px;
  border-radius: 16px;
  background: #fff;
  color: rgb(71, 160, 61);
  border: 1px solid rgb(71, 160, 61);
}
.slug .content_inner .slug_content .memo p.memo_ttl,
.slug .content_inner .slug_content .memo p.memo_desc {
  margin: 0;
}
.slug .content_inner .slug_content .memo p.memo_ttl {
  font-weight: bold;
}
.slug .content_inner .slug_content a.refer {
  position: relative;
  padding-right: 15px;
  color: #4a4a4a;
  text-decoration: none;
}
.slug .content_inner .slug_content a.refer.decoration {
  text-decoration: underline;
}
.slug .content_inner .slug_content a.refer::after {
  vertical-align: super;
  display: inline-block;
  content: "";
  width: 10px;
  height: 10px;
  background: url('~assets/img/out-link.png');
  background-size: contain;
}
.slug .content_inner .slug_content ul {
  padding: 0.5em 0.5em 0.5em 2em;
}
.slug .content_inner .slug_content ul li {
  line-height: 1.5;
  padding: 5px 0;
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