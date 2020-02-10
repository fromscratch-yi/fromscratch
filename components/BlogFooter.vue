<template>
  <footer>
    <div class="fadein footer_content_wrap columns is-tablet" v-scroll="handleScroll">
      <section class="footer_content column is-half-desktop about_wrap">
        <h2><fa :icon="faIdCard"/>About Me</h2>
        <div class="inner">
          <div class="image_area">
            <figure class="profile_img rotation_img image" v-scroll="handleScroll">
              <picture>
                <source type="image/webp" srcset="~assets/img/YuichiIshiyama.webp"/>
                <img loading="lazy" class="is-rounded" src="~assets/img/YuichiIshiyama.jpg" :alt="$t('about.name')" width="200" height="200">
              </picture>
            </figure>
          </div>
          <h3 class="name" v-html="$t('about.name')"></h3>
          <div class="introduction_wrap" v-html="$t('about.introduction')"></div>
        </div>
      </section>
      <section class="footer_content column category_wrap">
        <h2><fa :icon="faFolderOpen"/>Categories</h2>
        <div class="inner">
          <div class="inner_ctn">
            <p class="main_category">
              <nuxt-link :to="$i18n.path('blog/technology/')">
                <fa :icon="faLaptopCode"/>{{ $t('blog.categories.technology.name') }}
              </nuxt-link>
            </p>
            <ul class="sub_category">
              <li v-for="(val, key) in $t('blog.categories.technology.subCategory')" :key="key">
                <nuxt-link :to="$i18n.path('blog/technology/' + key + '/')">
                  {{ val.name }}
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="inner_ctn">
            <p class="main_category">
              <nuxt-link :to="$i18n.path('blog/businesslife/')">
                <fa :icon="faUserTie"/>{{ $t('blog.categories.businesslife.name') }}
              </nuxt-link>
            </p>
            <ul class="sub_category">
              <li v-for="(val, key) in $t('blog.categories.businesslife.subCategory')" :key="key">
                <nuxt-link :to="$i18n.path('blog/businesslife/' + key + '/')">
                  {{ val.name }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="footer_content column links_wrap">
        <h2><fa :icon="faLink"/>Links</h2>
        <div class="inner">
          <dl>
            <dt><nuxt-link :to="$i18n.path('about/')"><span class="em_txt">A</span>bout Page</nuxt-link></dt>
            <dd>{{ $t('links.about') }}</dd>
            <dt><nuxt-link :to="$i18n.path('work/')"><span class="em_txt">W</span>ork Page</nuxt-link></dt>
            <dd>{{ $t('links.work') }}</dd>
            <dt><nuxt-link :to="$i18n.path('blog/')"><span class="em_txt">B</span>log Page</nuxt-link></dt>
            <dd>{{ $t('links.blog') }}</dd>
          </dl>
          <h3 class="contact_ttl">Contact &amp; Follow</h3>
          <ul class="contact_item_wrap columns is-mobile">
            <li class="column">
              <p class="contanc_item">
                <a href="mailto:yufroms@gmail.com?subject=Contact-to-FromScratch"><img loading="lazy" src="~assets/img/Mail.png" alt="Mail"></a>
              </p>
            </li>
            <li class="column">
              <p class="contanc_item">
                <a href="https://twitter.com/IshiyamaYuichi" target="_blank" rel="noopener"><img loading="lazy" src="~assets/img/Twitter.png" alt="Twitter"></a>
              </p>
            </li>
            <li class="column">
              <p class="contanc_item">
                <a href="https://www.pinterest.jp/yu123daa/" target="_blank" rel="noopener"><img loading="lazy" src="~assets/img/Pinterest.png" alt="Pinterest"></a>
              </p>
            </li>
            <li class="column">
              <p class="contanc_item">
                <a href="fb://profile/100009266871916%3A100009266871916%3A1570738429" target="_blank" rel="noopener"><img loading="lazy" src="~assets/img/Facebook.png" alt="Facebook"></a>
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
    <p class="copyright">&copy;2020 FromScratch All Rights Reserved</p>
  </footer>
</template>
<script>
import {
  faIdCard,
  faFolderOpen,
  faLaptopCode,
  faUserTie,
  faLink
} from "@fortawesome/free-solid-svg-icons"
export default {
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
    },
    faLink() {
      return faLink
    }
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
}
</script>

<style>
footer .nuxt-link-exact-active.nuxt-link-active {
  cursor: inherit;
  font-weight: bold;
  color: #44a043 !important;
  pointer-events: none;
}
footer a:hover {
  font-weight: bold;
}
footer .footer_content_wrap {
  max-width: 1300px;
  margin: 40px auto 0;
  padding: 0 15px;
}
footer .footer_content_wrap .footer_content {
  padding: 0;
}
footer .footer_content_wrap .footer_content.category_wrap {
  clear: both;
  margin: 30px 0;
}
footer .footer_content_wrap .footer_content h2{
  font-size: 20px;
  font-weight: bold;
  border-bottom: 2px dashed rgb(71, 160, 61);
  padding: 0 7px 13px;
  margin-bottom: 20px;
}
footer .footer_content_wrap .footer_content h2 svg {
  margin-right: 7px;
}
footer .footer_content_wrap .footer_content .inner {
  padding: 7px 5px;
  font-size: 15px;
}
footer .footer_content_wrap .footer_content .inner .profile_img {
  float: none;
  margin: 0 auto 15px;
  max-width: 200px;
  max-height: 200px;
  text-align: center;
}
footer .footer_content_wrap .footer_content .inner .name {
  float: none;
  font-size: 22px;
}
footer .footer_content_wrap .footer_content .inner .introduction_wrap {
  text-align: left;
  float: none;
  margin: 15px 0 0;
  font-size: 16px;
}
footer .copyright {
  padding: 15px 0;
  margin: 20px 0 0;
  text-align: center;
  font-size: 12px;
  color: rgb(177, 177, 177);
  background-color: rgb(43, 42, 42);
}
footer .footer_content_wrap .footer_content .inner .introduction_wrap p {
  line-height: 1.8;
  margin: 0 0 10px;
}
footer .footer_content_wrap .footer_content .inner .introduction_wrap span.em_color {
  color: #036600;
  font-weight: bold;
}
footer .footer_content_wrap .footer_content .inner .main_category {
  margin: 0 0 10px;
}
footer .footer_content_wrap .footer_content .inner .main_category svg {
  margin-right: 7px;
}
footer .footer_content_wrap .footer_content .inner .main_category a {
  color: rgb(74, 74, 74);
  font-size: 16px;
  font-weight: bold;
  text-decoration: underline;
}
footer .footer_content_wrap .footer_content .inner .sub_category {
  padding: 0 0 0 30px;
  margin: 0 0 30px
}
footer .footer_content_wrap .footer_content .inner .sub_category li {
  list-style: disc;
  padding: 5px 0;
}
footer .footer_content_wrap .footer_content .inner .sub_category li a {
  color: rgb(74, 74, 74);
  font-size: 15px;
  text-decoration: underline;
}
footer .footer_content_wrap .footer_content .inner_ctn:last-child .sub_category {
  margin: 0;
}
footer .footer_content_wrap .footer_content .inner dl {
  margin: 0 0 35px;
}
footer .footer_content_wrap .footer_content .inner dl dt {
  font-size: 17px;
  margin: 0 0 10px;
}
footer .footer_content_wrap .footer_content .inner dl dt a {
  color: rgb(74, 74, 74);
  font-weight: bold;
  text-decoration: underline;
}
footer .footer_content_wrap .footer_content .inner dl dt a .em_txt {
  font-size: 19px;
  color: #2b9c28;
}
footer .footer_content_wrap .footer_content .inner dl dd {
  margin: 0 0 15px;
  padding: 0 0 0 5px;
}
footer .footer_content_wrap .footer_content .contact_ttl {
  text-align: center;
  font-weight: bold;
  font-size: 16px;
}
footer .footer_content_wrap .footer_content .contact_item_wrap {
  max-width: 250px;
  margin: 0 auto;
}
@media screen and (min-width: 768px){
  footer .footer_content_wrap {
    display: flex;
  }
  footer .footer_content_wrap .footer_content.about_wrap {
    margin-right: 40px;
  }
  footer .footer_content_wrap .footer_content.category_wrap {
    margin: 0;
    max-width: 20%;
  }
  footer .footer_content_wrap .footer_content.links_wrap {
    margin-left: 40px;
  }
}
@media screen and (min-width: 375px) and (max-width: 767px) {
  footer .footer_content_wrap .footer_content.category_wrap .inner {
    display: flex;
    justify-content: space-around;
  }
  footer .footer_content_wrap .footer_content.category_wrap .inner .inner_ctn {
    display: inline-block;
    padding: 0 15px;
  }
  footer .footer_content_wrap .footer_content.category_wrap .inner .inner_ctn .sub_category {
    margin: 0;
  }
}
@media screen and (min-width: 500px) and (max-width: 767px) {
  footer .footer_content_wrap .footer_content .inner .main_category a {
    font-size: 18px;
  }
  footer .footer_content_wrap .footer_content .inner .sub_category li a {
    font-size: 18px;
  }
}
@media screen and (min-width: 1088px){
  footer .footer_content_wrap .footer_content .inner .profile_img {
    float: right;
    padding: 0 15px;
  }
  footer .footer_content_wrap .footer_content .inner .name,
  footer .footer_content_wrap .footer_content .inner .introduction_wrap {
    float: none;
  }
}
</style>
