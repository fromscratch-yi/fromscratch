<template>
  <header>
    <div class="header_inner">
      <div class="header_container level is-mobile">
        <div class="logo level-left">
          <nuxt-link :to="$i18n.path('')"><img src="~assets/img/logo.png" alt="FromScratch logo" width="35" height="35"></nuxt-link>
          <h1 class="blog_ttl df_ttl">FromScratch<span>Yuichi Ishiyama</span></h1>
        </div>
        <div class="nav_btn level-right">
          <p class="level-item icon" @click="clickNavBtn"><fa :icon="faBars" /></p>
        </div>
        <ul class="pc_nav">
          <li class="page_link"><nuxt-link :to="$i18n.path('about/')"><span class="nav_txt">A</span>bout</nuxt-link></li>
          <li class="page_link"><nuxt-link :to="$i18n.path('work/')"><span class="nav_txt">W</span>ork</nuxt-link></li>
          <li class="page_link"><nuxt-link :to="$i18n.path('blog/')"><span class="nav_txt">B</span>log</nuxt-link></li>
          <li class="lang_wrap">
            <div class="lang_wrap_inner">
              <!-- setting for english -->
              <nuxt-link v-if="$i18n.locale === 'en'" :to="$route.fullPath.replace('\/en','').replace(/\/$/, '') + `/`">ja</nuxt-link>
              <nuxt-link v-else :to="$route.fullPath.replace(/\/$/, '') + `/`">ja</nuxt-link>
              <!-- setting for japanese -->
              <nuxt-link v-if="$i18n.locale === 'ja'" :to="`/en` + $route.fullPath.replace(/\/$/, '') + `/`">en</nuxt-link>
              <nuxt-link v-else :to="$route.fullPath.replace(/\/$/, '') + `/`">en</nuxt-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <nav class="nav_menu" v-bind:class="{'open': isOpen}">
        <p class="close_btn" @click="clickNavBtn"><fa :icon="faTimes" /></p>
        <ul class="page_nav">
          <li class="nv_logo"><img src="~assets/img/logo.png" alt="FromScratch logo" width="35" height="35"></li>
          <li class="page_link"><nuxt-link :to="$i18n.path('about/')"><span class="nav_txt">A</span>bout</nuxt-link></li>
          <li class="page_link"><nuxt-link :to="$i18n.path('work/')"><span class="nav_txt">W</span>ork</nuxt-link></li>
          <li class="page_link"><nuxt-link :to="$i18n.path('blog/')"><span class="nav_txt">B</span>log</nuxt-link></li>
          <li class="lang_wrap">
            <p class="attention">Language</p>
            <div class="lang_wrap_inner">
              <!-- setting for english -->
              <nuxt-link v-if="$i18n.locale === 'en'" :to="$route.fullPath.replace('\/en','').replace(/\/$/, '') + `/`">ja</nuxt-link>
              <nuxt-link v-else :to="$route.fullPath.replace(/\/$/, '') + `/`">ja</nuxt-link>
              <!-- setting for japanese -->
              <nuxt-link v-if="$i18n.locale === 'ja'" :to="`/en` + $route.fullPath.replace(/\/$/, '') + `/`">en</nuxt-link>
              <nuxt-link v-else :to="$route.fullPath.replace(/\/$/, '') + `/`">en</nuxt-link>
            </div>
          </li>
        </ul>
      </nav>
  </header>
</template>

<script>
import {
  faBars,
  faTimes
} from "@fortawesome/free-solid-svg-icons"
export default {
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    faBars() {
      return faBars
    },
    faTimes() {
      return faTimes
    }
  },
  methods: {
    clickNavBtn: function() {
      this.isOpen = !this.isOpen;
      var navWrap = document.getElementsByClassName('nav_menu').item(0).classList;
      if (!this.isOpen && !navWrap.contains('open')) {
        navWrap.add('open');
        this.isOpen = true;
      }
    }
  }
}
</script>


<style scoped>
header {
  width: 100%;
  height: 60px;
  overflow-y: visible;
  -webkit-transform: none;
  transform: none;
  z-index: 2;
}
.header_inner {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  padding: 10px 15px;
  margin: 0;
  background: rgba(255, 255, 255, 0.5);
  z-index: 50;
}
.header_container {
  max-width: 1040px;
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
.header_container .logo .blog_ttl.df_ttl {
  display: none;
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
  display: flex;
  align-items: center;
  justify-content: center;
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
}
header .nav_menu .page_nav li {
  margin: 18px 0;
  font-size: 30px;
  line-height: 1;
  letter-spacing: 4px;
}
header .nav_menu .page_nav li:last-child {
  margin: 0;
}
header .nav_menu .page_nav li.nv_logo {
  position: absolute;
    width: 50px;
    height: 50px;
    top: -60px;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    margin: auto;
}
header .nav_menu .page_nav li.lang_wrap .attention {
  font-size: 13px;
  color: #fff;
  text-align: center;
  margin-top: 30px;
  font-size: 15px;
}
header .nav_menu .page_nav li.lang_wrap .lang_wrap_inner{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}
header .nav_menu .page_nav li.lang_wrap a {
  align-items: center;
  border: 1px solid #47a03d;
  color: #4a4a4a;
  display: flex;
  justify-content: center;
  margin-bottom: -1px;
  padding: 12px 0;
  vertical-align: top;
  background-color: #fff;
  font-size: 18px;
  width: 80px;
  text-align: center;
}
header .nav_menu .page_nav li.lang_wrap a:first-child {
  border-bottom-left-radius: 290486px;
  border-top-left-radius: 290486px;
  padding-left: 10px;
}
header .nav_menu .page_nav li.lang_wrap a:last-child {
  border-bottom-right-radius: 290486px;
  border-top-right-radius: 290486px;
  padding-right: 10px;
}
header .nav_menu .page_nav li.lang_wrap a.nuxt-link-exact-active {
  pointer-events: none;
  background-color: rgb(120, 199, 111);
  z-index: 1;
}


header .nav_menu .page_nav li.page_link a {
  position: relative;
  display: inline-block;
  color: rgb(177, 177, 177);
  line-height: 1.2;
  padding: 0 0 5px;
}
header .nav_menu .page_nav li.page_link a.nuxt-link-exact-active {
  pointer-events: none;
}
header .nav_menu .page_nav li.page_link a.nuxt-link-exact-active::before {
  position: absolute;
  content: '';
  width: 40px;
  height: 3px;
  background-color: rgb(71, 160, 61);
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
}
header .nav_menu .page_nav li.page_link a .nav_txt {
  font-size: 1.2em;
  color: rgb(71, 160, 61);
}
.header_container .pc_nav {
  display: none;
}
@media screen and (max-width: 320px){
  .header_container .logo .blog_ttl {
    font-size: 6.3vw;
  }
}
@media screen and (min-width: 768px){
  .header_container .logo .blog_ttl.df_ttl {
    display: block;
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
  .header_container .pc_nav li.lang_wrap a.nuxt-link-exact-active {
    pointer-events: none;
    background-color: rgb(120, 199, 111);
    z-index: 1;
  }
}
</style>
