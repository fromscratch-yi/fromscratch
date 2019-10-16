<template>
  <div>
    <header>
      <div class="header_inner">
        <div class="header_container level is-mobile">
          <div class="logo level-left">
            <nuxt-link :to="$i18n.path('')"><img src="~assets/img/logo.png" alt="FromScratch logo"></nuxt-link>
            <h1 class="blog_ttl">FromsBlog<span>Yuichi Ishiyama</span></h1>
          </div>
          <div class="nav_btn level-right">
            <p class="level-item icon" @click="clickNavBtn"><font-awesome-icon icon="bars"/></p>
          </div>
          <ul class="pc_nav">
            <li class="page_link"><nuxt-link :to="$i18n.path('about/')"><span class="nav_txt">A</span>bout</nuxt-link></li>
            <li class="page_link"><nuxt-link :to="$i18n.path('work/')"><span class="nav_txt">W</span>ork</nuxt-link></li>
            <li class="page_link"><nuxt-link :to="$i18n.path('blog/')"><span class="nav_txt">B</span>log</nuxt-link></li>
            <li class="lang_wrap">
              <div class="lang_wrap_inner">
                <!-- setting for english -->
                <nuxt-link v-if="$i18n.locale === 'ja'" :to="'/blog/'">en</nuxt-link>
                <nuxt-link v-else :to="'/blog/'" class="current_locale">en</nuxt-link>
                <!-- setting for japanese -->
                <nuxt-link v-if="$i18n.locale === 'en'" :to="'/ja/blog/'">ja</nuxt-link>
                <nuxt-link v-else :to="'/ja/blog/'" class="current_locale">ja</nuxt-link>
              </div>
            </li>
          </ul>
        </div>
        <nav class="nav_menu" v-bind:class="{'open': isOpen}">
          <p class="close_btn" @click="clickNavBtn"><font-awesome-icon icon="times"/></p>
          <ul class="page_nav">
            <li class="nv_logo">
              <img src="~assets/img/logo.png" alt="FromsBlog">
              <p>FromsBlog</p>
              <div class="lang_wrap_inner">
                <!-- setting for english -->
                <nuxt-link v-if="$i18n.locale === 'ja'" :to="'/blog/'">en</nuxt-link>
                <nuxt-link v-else :to="'/blog/'" class="current_locale">en</nuxt-link>
                <!-- setting for japanese -->
                <nuxt-link v-if="$i18n.locale === 'en'" :to="'/ja/blog/'">ja</nuxt-link>
                <nuxt-link v-else :to="'/ja/blog/'" class="current_locale">ja</nuxt-link>
              </div>
            </li>
            <li class="page_link"><nuxt-link :to="$i18n.path('about/')"><span class="nav_txt">A</span>bout</nuxt-link></li>
            <li class="page_link"><nuxt-link :to="$i18n.path('work/')"><span class="nav_txt">W</span>ork</nuxt-link></li>
            <li class="page_link"><nuxt-link :to="$i18n.path('blog/')"><span class="nav_txt">B</span>log</nuxt-link></li>
            <li class="category_link">
              <p class="main_category">
                <nuxt-link :to="$i18n.path('category/technology/')">
                  <font-awesome-icon icon="laptop-code"/>{{ $t('blog.categories.technology.name') }}
                </nuxt-link>
              </p>
              <ul class="sub_category">
                <li>
                  <nuxt-link :to="$i18n.path('category/technology/frontend/')">
                    {{ $t('blog.categories.technology.subCategory.frontend.name') }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="$i18n.path('category/technology/backend/')">
                    {{ $t('blog.categories.technology.subCategory.backend.name') }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="$i18n.path('category/technology/mobile/')">
                    {{ $t('blog.categories.technology.subCategory.mobile.name') }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="$i18n.path('category/technology/infrastructure/')">
                    {{ $t('blog.categories.technology.subCategory.infrastructure.name') }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="$i18n.path('category/technology/other/')">
                    {{ $t('blog.categories.technology.subCategory.other.name') }}
                  </nuxt-link>
                </li>
              </ul>
            </li>
            <li class="category_link">
              <p class="main_category">
                <nuxt-link :to="$i18n.path('category/businesslife/')">
                  <font-awesome-icon icon="user-tie"/>{{ $t('blog.categories.businesslife.name') }}
                </nuxt-link>
              </p>
              <ul class="sub_category">
                <li>
                  <nuxt-link :to="$i18n.path('category/businesslife/motivation/')">
                    {{ $t('blog.categories.businesslife.subCategory.motivation.name') }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="$i18n.path('category/businesslife/management/')">
                    {{ $t('blog.categories.businesslife.subCategory.management.name') }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="$i18n.path('category/businesslife/blogskill/')">
                    {{ $t('blog.categories.businesslife.subCategory.blogskill.name') }}
                  </nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <div class="pc_category_nav">
      <div class="inner">
        <Accordion
          v-bind:key="'Technology'"
          :icon="'laptop-code'"
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
          ]"></Accordion>

        <Accordion
          v-bind:key="'BusinessLife'"
          :icon="'user-tie'"
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
          ]"></Accordion>

        <!-- <p class="search_wrap">
          <font-awesome-icon icon="search"/><input type="text" placeholder="Search">
        </p> -->
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from '~/components/Accordion.vue';
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
    clickNavBtn: function() {
      this.isOpen = !this.isOpen;
      var navWrap = document.getElementsByClassName('nav_menu').item(0).classList;
      if (!this.isOpen && !navWrap.contains('open')) {
        navWrap.add('open');
        this.isOpen = true;
      }
    },
  }
}
</script>


<style scoped>
header {
  max-width: 100%;
  padding: 10px 15px;
  background: rgba(255, 255, 255, 0.5);
}
.header_container {
  max-width: 1300px;
  margin: 0 auto;
}
.header_container .logo, .header_container .nav_btn {
  cursor: pointer;
}
.header_container .logo img {
  width: 35px;
}
.header_container .logo .blog_ttl {
  cursor: auto;
  padding-left: 15px;
  font-size: 25px;
  line-height: 1;
}
.header_container .logo .blog_ttl span {
  font-size: 12px;
  padding-left: 7px;
  line-height: 2;
}
.header_container .nav_btn {
  font-size: 25px;
  color: rgb(71, 160, 61);
}
header .nav_menu {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px 15px;
  overflow: hidden;
  z-index: 100;
  text-align: center;
  background-color: rgb(43, 42, 42);
  transition: all  500ms ease;
  transform: translateX(100%);
}
header .nav_menu.open {
  transform: translateX(0);
}
header .nav_menu .close_btn {
  position: absolute;
  right: 25px;
  top: 10px;
  display: inline-block;
  color: rgb(71, 160, 61);
  font-size: 30px;
  cursor: pointer;
}
header .nav_menu .page_nav {
  position: relative;
  margin: 55px 0 0;
  padding: 20px 15px 15px;
  text-align: left;
  background: #fff;
  border-radius: 10px;
  overflow-y: auto;
  max-height: 90%;
}
header .nav_menu .page_nav::after {
  content: '';
  display: block;
  clear: both;
}
header .nav_menu .page_nav li {
  margin: 0 0 12px;
  font-size: 20px;
  line-height: 1;
}
header .nav_menu .page_nav li.page_link {
  position: relative;
  float: left;
  width: calc(100% / 3 - 5px);
  margin: 10px 0;
  padding: 10px 5px;
  text-align: center;
}
header .nav_menu .page_nav li.page_link::after {
  content: '';
  display: block;
  clear: both;
}
header .nav_menu .page_nav li.nv_logo {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px dashed #333;
  padding-bottom: 20px;
  margin: 0 0 10px;
}
header .nav_menu .page_nav li.nv_logo .lang_wrap_inner{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
}
header .nav_menu .page_nav li.nv_logo a {
  align-items: center;
  border: 1px solid #47a03d;
  color: #4a4a4a;
  display: flex;
  justify-content: center;
  margin-bottom: -1px;
  padding: 10px 0;
  vertical-align: top;
  background-color: #fff;
  font-size: 15px;
  width: 45px;
  text-align: center;
}
header .nav_menu .page_nav li.nv_logo a:first-child {
  border-bottom-left-radius: 290486px;
  border-top-left-radius: 290486px;
  padding-left: 10px;
}
header .nav_menu .page_nav li.nv_logo a:last-child {
  border-bottom-right-radius: 290486px;
  border-top-right-radius: 290486px;
  padding-right: 10px;
}
header .nav_menu .page_nav li.nv_logo a.current_locale {
  pointer-events: none;
  background-color: rgb(120, 199, 111);
  z-index: 1;
}
header .nav_menu .page_nav li.nv_logo img {
  width: 35px;
}
header .nav_menu .page_nav li.nv_logo p {
  font-size: 20px;
  padding-left: 10px;
}
header .nav_menu .page_nav li.category_link {
  clear: both;
}
header .nav_menu .page_nav li.category_link .nuxt-link-exact-active.nuxt-link-active {
  cursor: inherit;
  font-weight: bold;
  color: #44a043 !important;
  pointer-events: none;
}
header .nav_menu .page_nav li.category_link:last-child {
  margin-bottom: 0;
}
header .nav_menu .page_nav li.category_link .main_category {
  padding: 10px 5px;
  margin-bottom: 15px;
  border-bottom: 2px solid #d1d1d1;
}
header .nav_menu .page_nav li.category_link .main_category a {
  position: relative;
  color: rgb(74, 74, 74);
  font-size: 18px;
}
header .nav_menu .page_nav li.category_link .main_category a::after {
  display: block;
  position: absolute;
  top: 50%;
  right: -15px;
  width: 8px;
  height: 8px;
  margin: -4px 0 0;
  border-top: 2px solid rgb(71, 71, 71);
  border-right: 2px solid rgb(71, 71, 71);
  transform: rotate(45deg);
  content: "";
}
header .nav_menu .page_nav li.category_link .main_category svg {
  margin-right: 8px;
}
header .nav_menu .page_nav li.category_link .sub_category {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
header .nav_menu .page_nav li.category_link .sub_category li {
  width: calc(50% - 5px);
  border: 1px solid rgb(120, 199, 111);
  border-radius: 8px;
  margin: 0 0 10px;
}
header .nav_menu .page_nav li.category_link .sub_category li a {
  display: block;
  padding: 8px 5px;
  text-align: center;
  font-size: 17px;
  color: rgb(74, 74, 74);
}
header .nav_menu .page_nav li.page_link a {
  position: relative;
  display: inline-block;
  color: rgb(74, 74, 74);
  line-height: 1.2;
  padding: 0 0 5px;
  font-size: 22px;
}
header .nav_menu .page_nav li.page_link a.nuxt-link-exact-active {
  pointer-events: none;
}
header .nav_menu .page_nav li.page_link a.nuxt-link-exact-active:before {
    position: absolute;
    content: "";
    width: 24px;
    height: 2px;
    background-color: #47a03d;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
}
header .nav_menu .page_nav li.page_link a .nav_txt {
  color: rgb(71, 160, 61);
  font-weight: bold;
}
.header_container .pc_nav {
  display: none;
}
.pc_category_nav {
  display: none;
}
@media screen and (min-width: 768px){
  header {
    padding: 20px 15px;
  }
  .pc_category_nav {
    display: block;
    padding: 20px;
    background: #1F1F1F;
  }
  .pc_category_nav .inner {
    display: flex;
    max-width: 1300px;
    margin: 0 auto;
    font-size: 16px;
    color: rgb(177, 177, 177);
  }
  .level.is-mobile .level-right.nav_btn {
    display: none;
  }
  .header_container .pc_nav {
    display: flex;
    align-items: center;
  }
  .header_container .pc_nav li {
    margin-right: 20px;
  }
  .header_container .pc_nav li:last-child {
    margin: 0;
  }
  .header_container .pc_nav li.page_link a {
    position: relative;
    color: rgb(74, 74, 74);
    font-size: 18px;
    line-height: 1.2;
    padding: 5px;
    font-weight: bold;
  }
  .header_container .pc_nav li.page_link a.nuxt-link-exact-active {
    pointer-events: none;
  }
  .header_container .pc_nav li.page_link a.nuxt-link-exact-active:before {
    position: absolute;
    content: "";
    width: 24px;
    height: 2px;
    background-color: #47a03d;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
}
  .header_container .pc_nav li.page_link a .nav_txt {
    font-size: 1.1em;
    color: #218e15;
  }
  .header_container .pc_nav li.lang_wrap .lang_wrap_inner{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .header_container .pc_nav li.lang_wrap a {
    align-items: center;
    border: 1px solid #47a03d;
    color: #4a4a4a;
    display: flex;
    justify-content: center;
    margin-bottom: -1px;
    padding: 3px 0;
    vertical-align: top;
    background-color: #fff;
    font-size: 16px;
    width: 50px;
    text-align: center;
    font-weight: bold;
  }
  .header_container .pc_nav li.lang_wrap a:first-child {
    border-bottom-left-radius: 290486px;
    border-top-left-radius: 290486px;
    padding-left: 10px;
  }
  .header_container .pc_nav li.lang_wrap a:last-child {
    border-bottom-right-radius: 290486px;
    border-top-right-radius: 290486px;
    padding-right: 10px;
  }
  .header_container .pc_nav li.lang_wrap a.current_locale {
    pointer-events: none;
    background-color: rgb(120, 199, 111);
    z-index: 1;
  }
}
@media screen and (max-width: 320px){
  .header_container .logo .blog_ttl {
    font-size: 6.3vw;
  }
  header .nav_menu .page_nav li.category_link .main_category {
    font-size: 4.5vw;
  }
  header .nav_menu .page_nav li.category_link .sub_category li {
    font-size: 4.5vw;
  }
  header .nav_menu .page_nav li.category_link .sub_category li a {
    font-size: 4.5vw;
  }
  header .nav_menu .page_nav li.page_link a {
    font-size: 6vw;
  }
}
</style>