<template>
  <div id="page_top" class="wrap">
    <PostHeader/>
    <section class="page_contents">
      <nuxt/>
    </section>
    <PostFooter/>
    <Footer/>
    <a href="#" class="h_top_btn" v-scroll-to="'#page_top'"></a>
  </div>
</template>

<script>
import PostHeader from "~/components/PostHeader.vue";
import PostFooter from "~/components/PostFooter.vue";
import Footer from "~/components/Footer.vue";
import Vue from "vue";
import vueScrollTo from "vue-scrollto";
Vue.use(vueScrollTo);
export default {
  scrollToTop: true,
  components: {
    PostHeader,
    PostFooter,
    Footer
  },

};
</script>
<style>
html {
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  background-color: rgb(43, 42, 42);
  color:  rgb(43, 42, 42);
}
html::-webkit-scrollbar {
  display: none;
}
.wrap {
  background-color: #fff;
}
.max_size_wrap {
  max-width: 750px;
  margin: 0 auto;
}
.note {
  padding: 5px 10px;
  font-size: 12px;
  color: rgb(155, 155, 155);
}
.link_wrap {
  margin-top: 20px;
}
.link_wrap .left {
  text-align: left;
}
.link_wrap .right {
  text-align: right;
}
.link_wrap p a {
  position: relative;
  display: inline-block;
  padding: 0 0 0 16px;
  color: #000;
  vertical-align: middle;
  text-decoration: none;
  font-size: 15px;
}
.link_wrap .right a {
  padding: 0 16px 0 0;
}
.link_wrap a::before,
.link_wrap a::after {
  position: absolute;
  top: 50%;
  bottom: 0;
  margin: -6px auto auto;
  content: "";
  vertical-align: middle;
}
.link_wrap .left a::before {
  left: 0;
}
.link_wrap .right a::before {
  right: 0;
}
.link_wrap a::before {
  width: 12px;
  height: 12px;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background: #44a044;
}
.link_wrap a::after{
  box-sizing: border-box;
  width: 3px;
  height: 3px;
  border: 3px solid transparent;
  margin: 0;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
}
.link_wrap .left a::after {
  left: 1px;
  border-right: 3px solid #fff;
}
.link_wrap .right a::after {
  right: 1px;
  border-left: 3px solid #fff;
}
a:hover {
    color: #363636;
}

.h_top_btn:hover {
  color: #56b54b;
}
.h_top_btn {
  position: fixed;
  bottom: 50px;
  right: 5px;
  width: 45px;
  height: 45px;
  color: #56b54b;
  outline: 0;
  text-align: center;
  border: 1px solid #56b54b;
  border-radius: 50%;
  background-color: #8686862b;
  font-weight: bold;
  z-index: 3;
  animation: bounding 1s ease infinite alternate;
  transform: rotate( 90deg );
}
.h_top_btn::after {
  position: absolute;
  content: '▲';
  top: calc(50% - 1px);
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
}

@keyframes bounding{
  0% {transform: translateY(0px);}
  100% {transform: translateY(-10px);}
}
@media screen and (max-width: 769px) {
  .inner_contents_wrap {
    padding: 0 15px;
  }
}
</style>
