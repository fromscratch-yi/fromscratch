<template>
  <div class="fadein move side_contents">
    <div class="content_wrap about_wrap">
      <h2><fa :icon="faIdCard" />About Me</h2>
      <div class="inner">
        <div class="image_area">
          <figure class="profile_img rotation_img image move" v-scroll="handleScroll">
            <picture>
              <source type="image/webp" srcset="~assets/img/YuichiIshiyama.webp"/>
              <img class="is-rounded" src="~assets/img/YuichiIshiyama.jpg" :alt="$t('about.name')" width="200" height="200">
            </picture>
          </figure>
        </div>
        <h3 class="name" v-html="$t('about.name')"></h3>
        <div class="slide_wrap">
          <div class="slide_box move">
            <div class="slide_txt introduction_wrap" v-html="$t('about.kind')"></div>
          </div>
        </div>
        <div class="links">
          <p class="link_btn">
            <nuxt-link :to="$i18n.path('about/')"><span class="em_txt">A</span>bout</nuxt-link>
          </p>
          <p class="link_btn">
            <nuxt-link :to="$i18n.path('work/')"><span class="em_txt">W</span>ork</nuxt-link>
          </p>
        </div>
        <h3 class="contact_ttl">Contact &amp; Follow</h3>
        <ul class="contact_item_wrap columns is-mobile">
          <li class="column">
            <p class="contanc_item">
              <a href="mailto:yufroms@gmail.com?subject=Contact-to-FromScratch"><img src="~assets/img/Mail.png" alt="Mail"></a>
            </p>
          </li>
          <li class="column">
            <p class="contanc_item">
              <a href="https://twitter.com/IshiyamaYuichi" target="_blank" rel="noopener"><img src="~assets/img/Twitter.png" alt="Twitter"></a>
            </p>
          </li>
          <li class="column">
            <p class="contanc_item">
              <a href="https://www.pinterest.jp/yu123daa/" target="_blank" rel="noopener"><img src="~assets/img/Pinterest.png" alt="Pinterest"></a>
            </p>
          </li>
          <li class="column">
            <p class="contanc_item">
              <a href="fb://profile/100009266871916%3A100009266871916%3A1570738429" target="_blank" rel="noopener"><img src="~assets/img/Facebook.png" alt="Facebook"></a>
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="sticky_wrap">
      <div class="content_wrap">
        <h2><fa :icon="faFolderOpen" />Categories</h2>
        <div class="inner">
          <Accordion
            v-bind:key="'Technology'"
            :icon="faLaptopCode"
            :title="$t('blog.categories.technology.name')"
            :categories="[
              {
                'title': 'All',
                'link': 'technology/'
              },
              {
                'title': $t('blog.categories.technology.subCategory.frontend.name'),
                'link': 'technology/frontend/'
              },
              {
                'title': $t('blog.categories.technology.subCategory.backend.name'),
                'link': 'technology/backend/'
              },
              {
                'title': $t('blog.categories.technology.subCategory.mobile.name'),
                'link': 'technology/mobile/'
              },
              {
                'title': $t('blog.categories.technology.subCategory.infrastructure.name'),
                'link': 'technology/infrastructure/'
              },
              {
                'title': $t('blog.categories.technology.subCategory.other.name'),
                'link': 'technology/other/'
              }
            ]">
          </Accordion>

          <Accordion
            v-bind:key="'BusinessLife'"
            :icon="faUserTie"
            :title="$t('blog.categories.businesslife.name')"
            :categories="[
              {
                'title': 'All',　'link': 'businesslife/'
              },
              {
                'title': $t('blog.categories.businesslife.subCategory.motivation.name'),
                'link': 'businesslife/motivation/'
              },
              {
                'title': $t('blog.categories.businesslife.subCategory.management.name'),
                'link': 'businesslife/management/'
              },
              {
                'title': $t('blog.categories.businesslife.subCategory.blogskill.name'),
                'link': 'businesslife/blogskill/'
              }
            ]">
          </Accordion>
        </div>
      </div>
      <div class="content_wrap">
        <adsbygoogle :ad-slot="'6891167634'" />
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from '~/components/Accordion.vue';
import {
  faIdCard,
  faFolderOpen,
  faLaptopCode,
  faUserTie
} from "@fortawesome/free-solid-svg-icons"
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  components: {
    Accordion,
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
    },
  },
  computed: {
    faIdCard() {
      return faIdCard
    },
    faFolderOpen() {
      return faFolderOpen
    },
    faLaptopCode() {
      return faLaptopCode
    },
    faUserTie() {
      return faUserTie
    }
  }
}
</script>
<style>
.side_contents {
  display: flex;
  flex-direction: column;
}
.side_contents .content_wrap {
  background: #fff;
  border-radius: 5px;
  filter: drop-shadow(3px 3px 7px rgba(0,0,0,0.1));
  margin-bottom: 20px;
}
.side_contents .sticky_wrap.content_wrap.last {
  margin-bottom: 0;
}
.side_contents .sticky_wrap {
  position: sticky;
  position: -webkit-sticky;
  top: 20px;
}
.side_contents .content_wrap h2 {
  padding: 10px 20px;
  font-size: 20px;
  font-weight: bold;
  color: #4a4a4a;
  background: #cac6c6;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
.side_contents .content_wrap h2 svg {
  margin-right: 10px;
}
.side_contents .content_wrap .inner {
  padding: 15px 20px;
}
.side_contents .about_wrap .inner figure {
  max-width: 200px;
  margin: 0 auto;
  text-align: center;
}
.side_contents .about_wrap .inner .name {
  font-size: 18px;
  padding: 15px 0 10px;
  text-align: center;
}
.side_contents .about_wrap .inner .introduction_wrap {
  font-size: 16px;
}
.side_contents .about_wrap .inner .links {
  display: flex;
  margin: 15px 0 0;
}
.side_contents .about_wrap .inner .links .link_btn {
  text-align: center;
  width: calc(50% - 7px);
}
.side_contents .about_wrap .inner .links .link_btn a {
  display: block;
  padding: 10px;
  border: 2px solid rgb(71, 160, 61);
  border-radius: 3px;
  text-align: center;
  color: rgb(74, 74, 74);;
}
.side_contents .about_wrap .inner .links .link_btn a span {
  font-weight: bold;
  color: rgb(71, 160, 61);
}
.side_contents .about_wrap .inner .links .link_btn a:hover {
  color: #fff;
  background: rgb(71, 160, 61);
}
.side_contents .about_wrap .inner .links .link_btn a:hover span {
  color: #fff;
}
.side_contents .about_wrap .inner .links .link_btn:last-child {
  margin-left: auto;
}
.side_contents .about_wrap .inner .contact_ttl {
  margin: 25px 0 12px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
}
.side_contents .about_wrap .inner .contact_item_wrap {
  width: 90%;
  margin: 0 auto;
}
.side_contents .about_wrap .inner .contact_item_wrap li {
  padding: 0 0.75rem;
}
.side_contents .content_wrap .inner .category_wrap .main_category {
  cursor: pointer;
  font-size: 17px;
}
.side_contents .content_wrap .inner .category_wrap .main_category svg {
  margin-right: 7px;
}
.side_contents .content_wrap .inner .category_wrap:first-child {
  border-bottom: 2px dashed #77c76e;
  padding-bottom: 15px;
  margin-bottom: 15px;
}
.side_contents .content_wrap .inner .category_wrap .sub_category_wrap {
  padding-top: 10px;
}
.side_contents .content_wrap .inner .category_wrap .sub_category_wrap li {
  position: relative;
  padding: 10px 10px 10px 30px;
}
.side_contents .content_wrap .inner .category_wrap .sub_category_wrap li::after {
    display: block;
    position: absolute;
    top: 50%;
    left: 10px;
    width: 6px;
    height: 6px;
    margin: -3px 0 0;
    border-top: 2px solid rgb(115, 115, 115);
    border-right: 2px solid rgb(115, 115, 115);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    content: "";
}
.side_contents .content_wrap .inner .category_wrap .sub_category_wrap li a {
  color: rgb(70, 68, 68);
}
.side_contents .content_wrap .inner .category_wrap .sub_category_wrap li a:hover {
  text-decoration: underline;
  color: rgb(71, 160, 61);
  font-weight: bold;
}
/* タブレット以上用 */
@media screen and (min-width: 768px) {

}
</style>