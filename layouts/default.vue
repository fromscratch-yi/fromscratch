<template>
  <div class="wrap">
    <Header/>
    <section class="container">
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
.container {
  padding: 0 15px 15px;
}
.container h1.main_ttl {
  position: relative;
  padding: 0 0 5px;
  font-size: 8vw;
  text-align: center;
  line-height: 1.3;
}
.container h1.main_ttl::before {
  position: absolute;
  content: '';
  width: 10vw;
  height: 3px;
  background-color: rgb(71, 160, 61);
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
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
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
</style>
