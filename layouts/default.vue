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
  scrollToTop: true,
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
  color:  #333;
}
html::-webkit-scrollbar {
  display: none;
}
.wrap {
  background-color: #fff;
}
.max_size_wrap {
  max-width: 1000px;
  margin: 0 auto;
}
.note {
  padding: 5px 10px;
  font-size: 12px;
  color: #595959;
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
.inner_contents_wrap {
  padding: 0 15px;
}
@media screen and (min-width: 1040px) {
  .inner_contents_wrap {
    padding: 0;
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

/* animation */
@-webkit-keyframes slide_box {
  0% {
    left: 0;
    right: auto;
    width: 0;
  }
  50% {
    left: 0;
    right: auto;
    width: 100%;
  }
  51% {
    left: auto;
    right: 0;
    width: 100%;
  }
  100% {
    left: auto;
    right: 0;
    width: 0;
  }
}
@keyframes slide_box {
  0% {
    left: 0;
    width: 0;
  }
  50% {
    left: 0;
    width: 100%;
  }
  51% {
    left: 0;
    width: 100%;
  }
  100% {
    left: 100%;
    width: 0;
  }
}
@-webkit-keyframes slide_txt {
  0% { opacity: 0; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes slide_txt {
  0% { opacity:0; }
  50% { opacity:0; }
  100% { opacity:1; }
}
@-webkit-keyframes fadein {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadein {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes rotation_img {
  0% {
    clip-path: circle(0 at 50% 50%);
    -webkit-clip-path: circle(0 at 50% 50%);
  }
  100% {
    clip-path: circle(100% at 50% 50%);
    -webkit-clip-path: circle(100% at 50% 50%);
  }
}
@-webkit-keyframes rotation_img {
  0% {
    clip-path: circle(0 at 50% 50%);
    -webkit-clip-path: circle(0 at 50% 50%);
  }
  100% {
    clip-path: circle(100% at 50% 50%);
    -webkit-clip-path: circle(100% at 50% 50%);
  }
}
@-webkit-keyframes link_img {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
  }
}
@keyframes link_img {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
  }
}
@-webkit-keyframes textanimation {
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    transform: translate(-50%, -50%) scale(0);
  }
}
@keyframes textanimation {
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    transform: translate(-50%, -50%) scale(0);
  }
}
.slide_box {
  position: relative;
  display: inline-block;
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.slide_box:before {
  content: '';
  display: inline-block;
  width: 0;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  background: #44a043;
}
.slide_txt {
  opacity: 0;
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.slide_box.move:before {
  -webkit-animation: slide_box 1s ease 0s 1 normal forwards;
  animation: slide_box 1s ease 0s 1 normal forwards;
}
.slide_box.move .slide_txt {
  -webkit-animation: slide_txt 0s ease .5s 1 normal forwards;
  animation:slide_txt 0s ease .5s 1 normal forwards;
}

.fadein {
  opacity: 0;
}
.move.fadein {
  opacity: 1;
  animation: fadein 2s ease;
}
.rotation_img {
  opacity: 0;
}
.move.rotation_img {
  opacity: 1;
  animation: rotation_img 2s cubic-bezier(.4, 0, .2, 1);
}
.link_img {
  animation: link_img 2s linear infinite 2s alternate;
}
@media screen and (min-width: 768px) {
  .link_wrap p a {
    font-size: 18px;
  }
  .slide_box.move .slide_txt {
    font-size: 18px;
  }
}
</style>
