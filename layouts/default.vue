<template>
  <div class="wrap">
    <Header/>
    <section class="page_contents">
      <nuxt/>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
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
@media screen and (max-width: 769px) {
  .inner_contents_wrap {
    padding: 0 15px;
  }
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
</style>
