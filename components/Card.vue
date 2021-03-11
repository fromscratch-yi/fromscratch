<template>
  <div class="card_wrap">
    <div class="card_inner">
      <p class="sub_category" :class="mainCategory">{{ subCategory }}</p>
      <div class="post card">
        <nuxt-link :to="$i18n.path(slug + '/')" class="wrapper">
          <div class="card-image">
            <figure class="image is-5by3">
              <img loading="lazy" v-bind:src="thumbnail.file.url" v-bind:alt="title" width="275" height="165">
            </figure>
          </div>
          <div class="card-content">
            <p class="card_date">{{ publishedAt }}</p>
            <h2 class="card_title">{{ title }}</h2>
            <div class="tags">
              <span v-for="tag in tags" :key="tag.id" class="tag">#{{tag}}</span>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['mainCategory', 'subCategory', 'title', 'slug', 'thumbnail', 'publishedAt', 'tags'],
  methods: {
    format: function(date) {
      var month = '' + (date.getMonth() + 1),
        day = '' + date.getDate(),
        year = date.getFullYear();
      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return [year, month, day].join('-');
    }
  }
}
</script>

<style scoped>
.card_wrap,
.post.card {
  height: 100%;
}
.card_inner {
  position: relative;
  height: 100%;
}
.card_inner .sub_category {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  min-width: 100px;
  text-align: center;
  padding: 3px;
  font-size: 14px;
  text-shadow: 1px 1px 1px #f9f9f9a3;
}
@media screen and (min-width: 354px) and (max-width: 768px) {
  .card_inner .sub_category {
    left: auto;
    right: 0;
  }
}
.card_inner .sub_category.technology {
  background: #ff9000a8;
  color: #151515;
}
.card_inner .sub_category.businesslife {
  background: #2ec126a8;
  color: #151515;
}
.post.card .card-content {
  padding: 18px 15px;
}
.post.card a {
  position: relative;
  display: block;
  transition: .3s;
  color: #4a4a4a;
}
.post.card a:hover .card_title {
  text-decoration: underline;
}
.post.card a::before,
.post.card a::after {
  position: absolute;
  top: 0;
  z-index: -1;
  content: '';
  width: 50%;
  height: 100%;
  background: #333;
  transform: scale(0, 1);
  transition: transform .3s;
}
.post.card a::before {
  left: 0;
  transform-origin: left top;
}
.post.card a::after {
  right: 0;
  transform-origin: right top;
}
.post.card a:hover::before,
.post.card a:hover::after {
  transform: scale(1, 1);
}
.card_date {
  font-size: 12px;
  margin-bottom: 5px;
  color: rgb(41, 99, 39);
  font-weight: bold;
}
.post.card .card_title {
  font-size: 15px;
  font-weight: bold;
}
.post.card .tags .tag {
  font-size: 12px;
  border:1px solid rgb(255, 142, 26);
  color: #464646;
  margin-bottom: 0;
  margin-top: 7px;
}
.card-image .image {
  overflow: hidden;
}
.card-image .image img {
  transition-duration: 0.5s;
}
.post.card a:hover .card-image .image img {
  transform: scale(1.2);
  transition-duration: 0.5s;
}

.post.card .tags:last-child {
  margin-top: 5px;
  margin-bottom: 0;
}
@media screen and (max-width: 768px) {
  .post.card a {
    display: flex;
    align-items: center;
  }
  .post.card a::before, .post.card a::after {
    content: none;
  }
  .post.card .card-content {
    padding: 15px 10px;
    width: calc(70% - 15px);
  }
  .card-image {
    width: 30%;
    min-width: 125px;
    padding: 10px;
    text-align: center;
    overflow: hidden;
  }
  .card-image .image {
    text-align: center;
    padding: 0;
  }
  .card-image .image img {
    display: block;
    position: static;
    height: auto;
    min-width: 100px;
    min-height: 100px;
    object-fit: cover;
  }
}
</style>
