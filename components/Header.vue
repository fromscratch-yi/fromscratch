<template>
  <header>
    <div class="header_container level is-mobile">
      <div class="logo level-left">
        <nuxt-link to="/"><img src="~assets/img/logo.png" alt="FromScratch logo"></nuxt-link>
      </div>
      <div class="nav_btn level-right">
        <p class="level-item icon" @click="clickNavBtn"><font-awesome-icon icon="bars"/></p>
      </div>
    </div>
    <nav class="nav_menu" v-bind:class="{'open': isOpen}">
      <p class="close_btn" @click="clickNavBtn"><font-awesome-icon icon="times"/></p>
      <ul>
        <li class="nv_logo"><img src="~assets/img/logo.png" alt="FromScratch logo"></li>
        <li><nuxt-link to="/about"><span class="nav_txt">A</span>bout</nuxt-link></li>
        <li><nuxt-link to="/work"><span class="nav_txt">W</span>ork</nuxt-link></li>
        <li><nuxt-link to="/blog"><span class="nav_txt">B</span>log</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: "Top",
      isOpen: false
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
      console.log(this.isOpen);
    }
  }
}
</script>


<style>
header {
  width: 100%;
  height: 60px;
  overflow-y: visible;
  -webkit-transform: none;
  transform: none;
  z-index: 2;
}
.header_container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  padding: 10px 15px;
  margin: 0;
  background: rgba(255, 255, 255, 0.3);
  z-index: 1;
}
.header_container .logo, .header_container .nav_btn {
  cursor: pointer;
}
.header_container .logo {
  width: 35px;
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
  z-index: 10;
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
header .nav_menu ul {
  position: relative;
}
header .nav_menu ul li {
  margin: 20px 0;
  font-size: 33px;
  line-height: 1.3;
  letter-spacing: 4px;
}
header .nav_menu ul li:last-child {
  margin: 0;
}
header .nav_menu ul li.nv_logo {
  position: absolute;
    width: 50px;
    height: 50px;
    top: -60px;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    margin: auto;
}
header .nav_menu ul li a {
  position: relative;
  display: inline-block;
  color: rgb(177, 177, 177);
  line-height: 1.2;
  padding: 0 0 5px;
}
header .nav_menu ul li a.nuxt-link-exact-active {
  pointer-events: none;
}
header .nav_menu ul li a.nuxt-link-exact-active::before {
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
header .nav_menu ul li a .nav_txt {
  font-size: 1.2em;
  color: rgb(71, 160, 61);
}
@media screen and (min-width: 768px){
  header .nav_menu ul li {
    font-size: 50px;
  }
  header .nav_menu ul li.nv_logo {
    top: -70px;
    width: 70px;
    height: 70px;
  }
}
</style>