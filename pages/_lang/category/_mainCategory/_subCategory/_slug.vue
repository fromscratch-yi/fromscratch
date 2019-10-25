<template>
  <div class="page_wrap">
    <breadcrumb :breadcrumbs="breadcrumbs" />
    <div class="contents_inner">
      <section class="page_contents_wrap">
        <div class="contents_area fadein move">
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
                <ShareButtons :title="currentPost.fields.title + ' - FromScratch'" />
              </div>

            </section>
          </div>
          <section v-if="recommends.length > 0" class="recommend_wrap">
            <h2 class="recommend_ttl"><fa :icon="faBlog" />{{ $t('word.reccomend') }}</h2>
            <div class="recommends columns is-mobile is-multiline ">
              <div class="column is-12-mobile is-4-tablet fadein" v-scroll="handleScroll" v-for="post in recommends" :key="post.id">
                <Card
                  v-bind:key="post.fields.slug"
                  :mainCategory="post.sys.contentType.sys.id"
                  :subCategory="$t('blog.categories.' + (post.sys.contentType.sys.id) + '.subCategory.' + post.fields.category + '.name')"
                  :title="post.fields.title"
                  :slug="'category/' + post.sys.contentType.sys.id + '/' + post.fields.category + '/' + post.fields.slug"
                  :thumbnail="post.fields.thumbnail.fields"
                  :publishedAt="post.fields.publishedAt"
                  :tags="post.fields.tags"></Card>
              </div>
            </div>
          </section>
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
import ShareButtons from "~/components/ShareButtons";
import Card from '~/components/Card.vue';
import {createClient} from '~/plugins/contentful.js';
import {faBlog} from "@fortawesome/free-solid-svg-icons"
const client = createClient();
const Domain = 'https://fromscratch-y.work';
export default {
  components: {
    Card,
    SideContents,
    Breadcrumb,
    ShareButtons
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
      title: this.currentPost.fields.title + " | FromsBlog",
      meta: [
        { hid: 'description', name: 'description', content: this.currentPost.fields.description },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:title', property: 'og:title', content: this.currentPost.fields.title + ' | FromsBlog'},
        { hid: 'og:description', property: 'og:description', content: this.currentPost.fields.description },
        { hid: 'og:url', property: 'og:url', content: Domain + this.$route.fullPath },
        { hid: 'og:image', property: 'og:image', content: 'https:' + this.currentPost.fields.headerImage.fields.file.url }
      ],
      link: [
        { rel: 'canonical', href: Domain + this.$route.fullPath.replace(/\/$/, '') + '/' }
      ],
    }
  },
  data () {
    return {
      recommends: [],
      currentPost: [],
    }
  },
  asyncData ({ app, env, params, error }) {
    return client.getEntries({
      'content_type': params.mainCategory,
      'locale': app.i18n.locale,
      'order': '-fields.publishedAt',
      'fields.category[match]': params.subCategory,
      'fields.slug': params.slug
    }).then(entries => {
      const posts = entries.items
      const current = posts.filter(function (item) {
        return item.fields.slug === params.slug
      })[0]
      if (posts.length == 0 || current.length == 0) {
        throw({ statusCode: 404, message: 'Post not found' })
      }
      return {
        recommends: current.fields.recommend,
        currentPost: current
      }
    })
    .catch(e => {
      error(e);
    })
  },
  computed: {
    faBlog() {
      return faBlog
    },
    breadcrumbs: function() {
      return {
        data: [
          {
            name: 'Blog',
            path: this.$i18n.path('blog/')
          },
          {
            name: this.$t('blog.categories.' + this.$route.params.mainCategory + '.name'),
            path: this.$i18n.path('category/' + this.$route.params.mainCategory + '/')
          },
          {
            name: this.$t('blog.categories.' + this.$route.params.mainCategory + '.subCategory.' + this.$route.params.subCategory + '.name'),
            path: this.$i18n.path('category/' + this.$route.params.mainCategory + '/' + this.$route.params.subCategory + '/')
          }
        ]
      }
    },
    // dateOrder: function () {
    //   for (let i = 0; i < this.allPosts.length; i++) {
    //     if (this.allPosts[i].fields.publishedAt === this.currentPost.fields.publishedAt) {
    //       return i;
    //     }
    //   }
    // },
    // nextPost: function () {
    //   if (this.dateOrder === 0) {
    //     return false;
    //   } else {
    //     return this.allPosts[this.dateOrder - 1];
    //   }
    // },
    // prevPost: function () {
    //   if (this.dateOrder === this.allPosts.length - 1) {
    //     return false;
    //   } else {
    //     return this.allPosts[this.dateOrder + 1];
    //   }
    // }
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

<style>
.blog_slug_wrap {
  margin: 0 auto;
  font-family: Noto, Hiragino Sans,Helvetica,Arial,sans-serif;
}
.blog_slug_wrap .head_img img {
  width: 100%;
}
.slug .content_inner {
  position: relative;
  width: calc(100% - 15px);
  margin: -13% auto 0;
  padding: 20px 17px;
  box-shadow: 0 0 25px -6px #636363;
  background: #fff;
  z-index: 1;
  font-size: 16px;
}
.share_wrap.section {
  padding: 40px 0 0;
}
.recommend_wrap {
  padding: 45px 20px 35px;
}
.recommend_wrap .recommend_ttl {
  font-size: 21px;
  text-align: center;
  margin: 0 0 20px;
  font-weight: bold;
}
.recommend_wrap .recommend_ttl svg {
  margin-right: 7px;
}
@media screen and (min-width: 768px) {
  .slug .content_inner {
    width: 100%;
    box-shadow: none;
  }
}
.slug .content_inner .slug_date {
  padding: 12px 0;
  font-size: 16px;
  text-align: center;
  color: rgb(57, 72, 85);
}
.slug .content_inner .slug_title {
  position: relative;
  margin: 10px 0 30px;
  padding: 5px 10px 8px;
  font-size: 25px;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 0 35px;
}
.slug .content_inner .tag_wrap .tag {
  margin-right: 7px;
  margin-bottom: 7px;
  font-size: 14px;
  border:1px solid rgb(255, 142, 26);
  color: #464646;
}
.slug .content_inner .tag_wrap .tag:last-child {
  margin-right: 0;
}
.slug .content_inner .slug_content {
  font-size: 16px;
  line-height: 2;
  padding: 0 15px;
}
.slug .content_inner .slug_content .mokuji {
  width: 95%;
  margin: 0 auto;
  padding: 15px 12px;
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
   margin-top: -20px;
   padding-top: 20px;
}
.slug .content_inner .slug_content h2 {
  font-size: 25px;
  font-weight:bold;
  margin: 55px 0 40px;
  position: relative;
  padding-bottom: 5px;
  padding-left: 5px;
  border-bottom: 4px solid #DDD;
  line-height: 1.6;
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
.slug .content_inner .slug_content h2 a {
  text-decoration: none;
  color: #4a4a4a;
}
.slug .content_inner .slug_content h3 {
  position:relative;
  border-bottom: 1px dashed rgb(71, 160, 61);;
  font-weight:bold;
  margin: 45px 0 25px;
  padding: 0 0 3px 27px;
  font-size: 21px;
  clear:right;
  line-height: 1.6;
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
.slug .content_inner .slug_content dl {
  margin-bottom: 15px;
}
.slug .content_inner .slug_content dl dt {
  position: relative;
  margin: 40px 0 20px;
  font-weight: bold;
  padding-left: 20px;
  font-size: 19px;
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
  padding: 0 5px;
}
.slug .content_inner .slug_content b {
  color: #af0000;
}
.slug .content_inner .slug_content em {
  font-style: normal;
  background:linear-gradient(transparent 75%, #b2ffb2 75%);
  font-weight:bold;
}
.slug .content_inner .slug_content p {
  margin: 25px 0 35px;
  line-height: 2.2;
}
.slug .content_inner .slug_content code {
  color: #E0002C;
}
.slug .content_inner .slug_content .shell code {
  color: #4dd03e;
}
.slug .content_inner .slug_content p.img_wrap {
  text-align: center;
}
.slug .content_inner .slug_content .memo {
  position: relative;
  padding: 13px 15px;
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
  font-size: 14px;
  padding: 4px 10px;
  border-radius: 16px;
  background: #fff;
  color: rgb(71, 160, 61);
  border: 1px solid rgb(71, 160, 61);
}
.slug .content_inner .slug_content .memo p.memo_ttl,
.slug .content_inner .slug_content .memo p.memo_desc {
  margin: 0;
  line-height: 1.7;
}
.slug .content_inner .slug_content .memo p.memo_ttl {
  margin-bottom: 7px;
  font-weight: bold;
}
.slug .content_inner .slug_content a {
  text-decoration: underline;
}
.slug .content_inner .slug_content a.refer {
  position: relative;
  padding-right: 15px;
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
  line-height: 2;
  padding: 5px 0;
  list-style: disc;
}
.slug .content_inner .slug_content ul.desc_ul_wrap {
  background: #ececec;
  padding: 20px 20px;
  border-radius: 5px;
}
.slug .content_inner .slug_content ul.desc_ul_wrap li {
  font-weight: bold;
  line-height: 1.9;
  list-style: none;
  margin-bottom: 10px;
}
.slug .content_inner .slug_content ul.desc_ul_wrap li span {
  display: inline-block;
  font-weight: normal;
  padding-left: 7px;
  line-height: 1.9;
}
.slug .content_inner .slug_content ul.desc_ul_wrap li a {
  color: #003da0;
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
  margin: 15px 0 25px;
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
  font-size: 16px;
}
code {
  font-family: Menlo, Monaco, Consolas, "Droid Sans Mono", "Courier New", monospace, "Droid Sans Fallback";
  line-height: 1.7;
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
  padding: 10px 12px;
}
.hljs-emphasis {
  font-style: italic;
}
.hljs-strong {
  font-weight: bold;
}
pre.hljs.shell {
    background: #2b2b2b;
}
pre.hljs.under_p {
  margin-top: -25px;
}
/* ipad未満 */
@media screen and (max-width: 767px){
  .slug .content_inner .slug_content {
    padding: 0;
  }
  .slug .content_inner .slug_title,
  .slug .content_inner .slug_content h2 {
    font-size: 18px;
  }
  .slug .content_inner .slug_content h3 {
    font-size: 17px;
  }
  .slug .content_inner .slug_content .mokuji {
    width: 98%;
  }
  .slug .content_inner .slug_content ul {
    padding: 0px 0.5em 0 24px;
  }
  .slug .content_inner .slug_content dl dt {
    font-size: 17px;
  }
  .share_wrap.section[data-v-61026706] {
    padding: 40px 0 0;
  }
}
/* iPhone8以下 */
/* iPhone5以下 */
@media screen and (max-width: 320px){
  .slug .content_inner,
  .slug .content_inner .slug_content,
  :not(pre):not(.hljs) > code {
    font-size: 4.3vw;
  }
  .slug .content_inner .slug_title,
  .slug .content_inner .slug_content h2 {
    font-size: 5.7vw;
  }
  .slug .content_inner .slug_content h3 {
    font-size: 5.2vw;
  }
  .slug .content_inner .tag_wrap .tag {
    font-size: 4vw;
  }
}
</style>