<template>
  <div class="page_wrap">
    <breadcrumb :breadcrumbs="breadcrumbs" />
    <div class="contents_inner">
      <section class="page_contents_wrap">
        <div class="contents_area">
          <div class="blog_slug_wrap">
            <section class="slug">
              <p class="head_img"><img class="slug_image" v-bind:src="currentPost.fields.headerImage.fields.file.url" :alt="currentPost.fields.title"></p>
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
                <nuxt-link v-if="prevPost" class="pagination-previous" :to="$i18n.path('post/' + prevPost.fields.slug + '/')">&laquo; Prev</nuxt-link>
                <nuxt-link v-if="nextPost" class="pagination-next" :to="$i18n.path('post/' + nextPost.fields.slug + '/')">Next &raquo;</nuxt-link>
              </nav>
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
import SideContents from "~/components/SideContents.vue";
import Breadcrumb from '~/components/Breadcrumb.vue';
import {createClient} from '~/plugins/contentful.js';
const client = createClient();
const Domain = 'https://fromscratch-y.work';
export default {
  components: {
    SideContents,
    Breadcrumb,
  },
  layout: 'blog',
  head () {
    return {
      __dangerouslyDisableSanitizers: ['script'],
      script: [{
        innerHTML: `{
          "@context": "http://schema.org",
          "@type": "Article",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "${Domain}/"
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
              "url": "${Domain}/icon.png"
            }
          },
          "description": "${this.currentPost.fields.description}"
        }`,
        type: 'application/ld+json'
      }],
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      title: this.currentPost.fields.title + " - FromScratch",
      meta: [
        { hid: 'description', name: 'description', content: this.currentPost.fields.description },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:title', property: 'og:title', content: 'FromScratch | ' + this.currentPost.fields.title },
        { hid: 'og:description', property: 'og:description', content: this.currentPost.fields.description },
        { hid: 'og:url', property: 'og:url', content: Domain + this.$route.fullPath },
        { hid: 'og:image', property: 'og:image', content: 'https:' + this.currentPost.fields.headerImage.fields.file.url },
        { hid: 'canonical', name: 'canonical', content: Domain + this.$route.fullPath.replace(/\/$/, '') + '/' }
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
    breadcrumbs: function() {
      return {
        data: [
          {
            name: 'Blog',
            path: this.$i18n.path('blog/')
          },
          {
            name: this.currentPost.fields.title,
            path: ''
          }
        ]
      }
    },
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
.blog_slug_wrap {
  max-width: 800px;
  margin: 0 auto;
}
.slug .content_inner {
  position: relative;
  width: 94%;
  margin: -13% auto 0;
  padding: 20px 15px;
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
  border:1px solid rgb(255, 142, 26);
  color: #464646;
}
.slug .content_inner .slug_content {
  font-size: 15px;
  line-height: 1.9;
}
.slug .content_inner .slug_content .mokuji {
  width: 90%;
  margin: 0 auto;
  padding: 15px;
  border: 2px dotted #458c61;
}
.slug .content_inner .slug_content .mokuji p {
  text-align: center;
}
.slug .content_inner .slug_content .mokuji ul li a {
  color: #464646;
}
.slug .content_inner .slug_content .mokuji ul li ul {
  padding-top: 3px;
}
.slug .content_inner .slug_content .mokuji ul li ul li:last-child {
  padding-bottom: 0;
}
.slug .content_inner .slug_content table {
  table-layout: fixed;
  width: auto;
  min-width: 100%;
}
.slug .content_inner .slug_content .asp-tbl1 thead tr th {
  text-align: center;
}
.slug .content_inner .slug_content .asp-tbl1 tbody tr td {
  text-align: center;
}
.slug .content_inner .slug_content .h_link {
   margin-top: -75px;
   padding-top: 75px;
}
.slug .content_inner .slug_content h2 {
  font-size: 17px;
  font-weight:bold;
  margin: 30px 0;
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
  position:relative;
  border-bottom: 1px dashed rgb(71, 160, 61);;
  font-weight:bold;
  margin: 25px 0;
  padding: 0 0 3px 27px;
  font-size: 16px;
  clear:right;
}
.slug .content_inner .slug_content h3::before,
.slug .content_inner .slug_content h3::after{
  content: "";
  position: absolute;
}
.slug .content_inner .slug_content h3::before {
  background-color: rgb(71, 160, 61);;
  top: 5px;
  left: 7px;
  width: 10px;
  height: 10px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.slug .content_inner .slug_content h3::after {
  background-color: rgb(71, 160, 61);;
  top: 15px;
  left: 0;
  width: 6px;
  height: 6px;
  -transform: rotate(15deg);
  transform: rotate(15deg);
}
.slug .content_inner .slug_content .section_inner {
  padding: 0 5px;
}
.slug .content_inner .slug_content dl {
  margin-bottom: 15px;
}
.slug .content_inner .slug_content dl dt {
  position: relative;
  margin: 20px 0 10px;
  padding: 0 0 0 18px;
  font-weight: bold;
}
.slug .content_inner .slug_content dl dt::before {
  content: '';
  display: block;
  position: absolute;
  background: #47a03d;
  width: 10px;
  height: 10px;
  top: 50%;
  left: 3px;
  margin-top: -5px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
}
.slug .content_inner .slug_content dl dd {
  padding: 0 10px;
}
.slug .content_inner .slug_content p {
  margin: 15px 0 20px;
  line-height: 1.9;
}
.slug .content_inner .slug_content code {
  color: #E0002C;
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
  margin-left: 5px;
  background: url('~assets/img/out-link.png');
  background-size: contain;
}
.slug .content_inner .slug_content ul {
  padding: 0 0.5em 0 2em;
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

pre {
  background-color: #f8f8f8;
  border: 1px solid #cccccc;
  border-radius: 3px;
  overflow-x: auto;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  margin-bottom: 20px;
}
pre:not(.hljs) {
  padding: 23px;
  line-height: 19px;
}
blockquote {
  background: rgba(127, 127, 127, 0.1);
  border-color: rgba(0, 122, 204, 0.5);
}
.emoji {
  height: 1.4em;
}
/* for inline code */
:not(pre):not(.hljs) > code {
  color: #C9AE75; /* Change the old color so it seems less like an error */
  font-size: inherit;
}
code {
  font-family: Menlo, Monaco, Consolas, "Droid Sans Mono", "Courier New", monospace, "Droid Sans Fallback";
  line-height: 19px;
}
.hljs-comment,
.hljs-quote {
  color: #8e908c;
}

/* Tomorrow Red */
.hljs-variable,
.hljs-template-variable,
.hljs-tag,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class,
.hljs-regexp,
.hljs-deletion {
  color: #c82829;
}

/* Tomorrow Orange */
.hljs-number,
.hljs-built_in,
.hljs-builtin-name,
.hljs-literal,
.hljs-type,
.hljs-params,
.hljs-meta,
.hljs-link {
  color: #f5871f;
}

/* Tomorrow Yellow */
.hljs-attribute {
  color: #eab700;
}

/* Tomorrow Green */
.hljs-string,
.hljs-symbol,
.hljs-bullet,
.hljs-addition {
  color: #718c00;
}

/* Tomorrow Blue */
.hljs-title,
.hljs-section {
  color: #4271ae;
}

/* Tomorrow Purple */
.hljs-keyword,
.hljs-selector-tag {
  color: #8959a8;
}

.hljs {
  display: block;
  overflow-x: auto;
  color: #4d4d4c;
  padding: 0.5em;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}
</style>