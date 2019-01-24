<template>
  <div class="column is-12-mobile is-4-tablet">
    <div class="post card" ontouchstart="">
      <nuxt-link :to="$i18n.path('post/' + slug)" class="wrapper">
        <div class="card-image">
          <figure class="image is-5by3">
            <img v-bind:src="headerImage.fields.file.url" v-bind:alt="headerImage.fields.description">
          </figure>
        </div>
        <div class="card-content">
          <p class="card_date">{{ publishedAt }}</p>
          <h1 class="card_title">{{ title }}</h1>
          <div class="tags">
            <span v-for="tag in tags" :key="tag.id" class="tag">#{{tag}}</span>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'slug', 'headerImage', 'publishedAt', 'tags'],
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
.post.card .card-content {
  padding: 12px 10px 5px;
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
  color: rgb(71, 160, 61);
  font-weight: bold;
}
.post.card .card_title {
  font-size: 15px;
  font-weight: bold;
}
.post.card .tags {
  margin: 10px 0 0;
}
.post.card .tags .tag {
  font-size: 12px;
  color: rgb(255, 142, 26);
}
</style>