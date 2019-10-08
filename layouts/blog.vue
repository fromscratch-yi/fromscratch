<template>
  <div class="blog_wrap" id="page_top">
    <Header/>
    <div class="contents_wrap clearfix">
      <breadcrumb :breadcrumbs="breadcrumbs" />
      <div class="contents_inner">
        <section class="page_contents_wrap">
          <nuxt/>
        </section>
        <section class="side_contents_wrap">
          <SideContents/>
        </section>
      </div>
    </div>
    <Footer/>
    <a href="#page_top" class="h_top_btn" v-scroll-to="'#page_top'">▲</a>
  </div>
</template>

<script>
import Header from "~/components/BlogHeader.vue";
import SideContents from "~/components/SideContents.vue";
import Footer from "~/components/BlogFooter.vue";
import Breadcrumb from '~/components/Breadcrumb.vue';
import vueScrollTo from "vue-scrollto";


export default {
  scrollToTop: true,
  components: {
    Header,
    SideContents,
    Footer,
    Breadcrumb,
    vueScrollTo
  },
  data() {
    return {
      breadcrumbs: {}
    }
  },
  created() {
    this.setListener()
  },
  methods: {
    setListener() {
      this.$nuxt.$on('updateBreadcrumb', this.setBreadcrumb)
    },
    setBreadcrumb(breadcrumbs) {
      this.breadcrumbs = breadcrumbs
    }
  }
}
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
body {
  background-color: #fff;
}
.note {
  padding: 5px 10px;
  font-size: 12px;
  color: #595959;
}
.link_wrap {
  margin-top: 30px;
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
  bottom: 48px;
  right: 8px;
  width: 45px;
  height: 45px;
  line-height: 45px;
  color: #56b54b;
  outline: 0;
  text-align: center;
  border: 1px solid #56b54b;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
  z-index: 3;
  animation: bounding 1s ease infinite alternate;
  transform: rotate( 90deg );
}
@keyframes bounding{
  0% {transform: translateY(0px);}
  100% {transform: translateY(-10px);}
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
.layout-enter-active {
  animation: downFromTop 500ms ease;
}
/* 離れるとき */
.layout-leave-active {
  /* opacity: 0 */
  transition: all  500ms ease;
  transform: translateY(100vh);
}
@keyframes downFromTop {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}
.slide-left-enter {
  transform: translateX(100vw);
  opacity: 0;
}
.slide-left-enter-active {
  transition: all .5s linear;
}
.slide-left-leave-to {
  transform: translateX(-100vw);
  opacity: 0;
}
.slide-left-leave-active {
  transition: all .5s linear;
}
.contents_wrap {
  position: relative;
  padding: 20px 15px 30px;
  background: #ececec;
}
.contents_inner {
  max-width: 1300px;
  margin: 0 auto;
}
.page_contents_wrap,
.side_contents_wrap {
  padding: 15px;
  background: #fff;
  border-radius: 5px;
  filter: drop-shadow(3px 3px 7px rgba(0,0,0,0.1));
}
.side_contents_wrap {
  display: none;
}
/* タブレットより上 */
@media screen and (min-width: 1024px) {
  .page_contents_wrap {
    float: left;
    width: 72%;
    padding: 15px 20px;
  }
  .side_contents_wrap {
    display: block;
    float: right;
    width: 26%;
    margin-left: auto;
  }
}
</style>
