<template>
  <div class="contents_area">
    <div class="max_size_wrap">
      <div class="inner_contents_wrap">
        <section class="slug">
          <p class="head_img"><img class="slug_image" v-bind:src="post.fields.headerImage.fields.file.url"/></p>
          <div class="content_inner">
            <div class="tags">
              <span v-for="tag in post.fields.tags" :key="tag.id" class="tag">#{{tag}}</span>
            </div>
            <p class="slug_date">{{ post.fields.publishedAt }}</p>
            <h1 class="slug_title">{{ post.fields.title }}</h1>
            <div class="slug_content" v-html="$md.render(post.fields.body)"></div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'

const client = createClient()
export default {
  layout: 'post',
  async asyncData ({ env, params }) {
    return await client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      'fields.slug': params.slug,
      order: '-sys.createdAt'
    }).then(entries => {
      return {
        post: entries.items[0],
      }
    })
    .catch(console.error)
  }
}
</script>

<style>
.slug .content_inner {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px dashed #333;
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
  font-size: 14px;
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
</style>