<template>
  <div class="post_foot_wrap">
    <nuxt-link :to="$i18n.path('blog/')" class="blog_top_btn">Blog Top</nuxt-link>
  </div>
</template>

<style scoped>
.post_foot_wrap {
  padding: 20px 0 0;
}
.post_foot_wrap .share_wrap {
  width: 250px;
  margin: 0 auto 15px;
}
.post_foot_wrap .share_wrap h2 {
  margin: 0 0 15px;
  font-size: 20px;
  text-align: center;
}
.post_foot_wrap .share_wrap .contanc_item {
  text-align: center;
}
.post_foot_wrap .share_wrap .contanc_item img {
  width: 35px;
}
.post_foot_wrap .copyright {
  padding: 15px 0;
  text-align: center;
  font-size: 12px;
  color: rgb(177, 177, 177);
  background-color: rgb(43, 42, 42);
}
.post_foot_wrap a.blog_top_btn {
  display: block;
  max-width: 240px;
  margin: 10px auto 20px;
  background-color: #fff;
  border: 1px solid #2A5E26;
  color: #2A5E26;
  padding: 16px 26px 16px 30px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 30px;
  position: relative;
  text-decoration: none;
  text-align: center;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all  0.5s ease;
}
</style>
