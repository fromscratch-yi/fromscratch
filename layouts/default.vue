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
