<template>
  <div class="wrap">
    <Header/>
    <section class="page_contents">
      <div class="contents_area">
        <div class="max_size_wrap">
          <div class="inner_contents_wrap">
            <nuxt />
            <div class="blog_menu sub_contents fadein" v-scroll="handleScroll">
              <h2>Categories</h2>
              <div class="max_size_wrap columns is-tablet category_wrap">
                <section class="column category">
                  <h3 class="category_ttl_wrap">
                    <nuxt-link :to="$i18n.path('category/frontend')" class="wrapper">
                      <span class="category_name" v-html="$t('word.frontend')"></span>
                      <picture>
                        <source type="image/webp" srcset="~assets/img/icon_front.webp" />
                        <img class="rotation_img" v-scroll="handleScroll" src="~assets/img/icon_front.png" :alt="$t('word.frontend')" width="100" height="100">
                      </picture>
                    </nuxt-link>
                  </h3>
                </section>
                <section class="column category">
                  <h3 class="category_ttl_wrap">
                    <nuxt-link :to="$i18n.path('category/backend')" class="wrapper">
                      <span class="category_name" v-html="$t('word.backend')"></span>
                      <picture>
                        <source type="image/webp" srcset="~assets/img/icon_back.webp" />
                        <img class="rotation_img" v-scroll="handleScroll" src="~assets/img/icon_back.png" :alt="$t('word.backend')" width="100" height="100">
                      </picture>
                    </nuxt-link>
                  </h3>
                </section>
                <section class="column category">
                  <h3 class="category_ttl_wrap">
                    <nuxt-link :to="$i18n.path('category/mobile')" class="wrapper">
                      <span class="category_name" v-html="$t('word.mobile')"></span>
                      <picture>
                        <source type="image/webp" srcset="~assets/img/icon_mobile.webp" />
                        <img class="rotation_img" v-scroll="handleScroll" src="~assets/img/icon_mobile.png" :alt="$t('word.mobile')" width="100" height="100">
                      </picture>
                    </nuxt-link>
                  </h3>
                </section>
                <section class="column category">
                  <h3 class="category_ttl_wrap">
                    <nuxt-link :to="$i18n.path('category/other')" class="wrapper">
                      <span class="category_name" v-html="$t('word.other')"></span>
                      <picture>
                        <source type="image/webp" srcset="~assets/img/icon_other.webp" />
                        <img class="rotation_img" v-scroll="handleScroll" src="~assets/img/icon_other.png" :alt="$t('word.other')" width="100" height="100">
                      </picture>
                    </nuxt-link>
                  </h3>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <PostFooter/>
    <Footer/>
  </div>
</template>


<script>
import Header from "~/components/Header.vue";
import TitleDescription from "~/components/TitleDescription.vue";
import PostFooter from "~/components/PostFooter.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Header,
    TitleDescription,
    PostFooter,
    Footer,
  },
  methods: {
    handleScroll: (evt, el) => {
      let top = el.getBoundingClientRect().top;
      var offcet = 0;
      if (window.innerHeight > 900) {
        offcet = 1200;
      } else {
        offcet = 600;
      }
      if (window.scrollY > top + window.pageYOffset - offcet) {
        el.classList.add('move');
        return true;
      }
      return false;
    }
  }
};
</script>
<style>
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
  .slide_wrap {
    text-align: center;
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
.columns.is-multiline.new_posts {
  margin-bottom: 30px;
}
.no_posts {
  padding: 15px 0;
  font-weight: bold;
  text-align: center;
}
.page_description {
  margin: 35px 0;
  text-align: center;
  font-size: 14px;
}
.sub_contents h2 {
  font-size: 25px;
  margin: 0 0 20px;
  text-align: center;
}
.sub_contents .category_wrap {
  border-radius: 20px;
  margin-bottom: 30px;
  position: relative;
  background: #1F1F1F;
}
.sub_contents .category_wrap .category {
  padding: 30px 15px;
  margin: 0 auto;
}
.sub_contents .category_wrap .category .category_ttl_wrap {
  margin: 0 auto 10px;
  text-align: center;
}
.sub_contents .category_wrap .category .category_ttl_wrap img {
  display: block;
  width: 100px;
  margin: 10px auto 15px;
}
.sub_contents .category_wrap .category .category_ttl_wrap .category_name {
  display: inline-block;
  padding: 5px;
  font-size: 15px;
  color: #62BE56;
  font-weight: bold;
}
@media screen and (max-width: 768px){
  .sub_contents .category_wrap {
    padding: 30px 10px;
  }
  .sub_contents .category_wrap::after {
    content: '';
    clear: both;
    display: block;
  }
  .sub_contents .category_wrap .category {
    float: left;
    flex: none;
    width: 50%;
    padding: 0;
  }
}
</style>

