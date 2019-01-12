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
    <nav class="nav_menu" v-bind:class="{'open': isOpen, 'close': isClose}">
      <p class="close_btn" @click="clickCloseBtn"><font-awesome-icon icon="times"/></p>
      <ul>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li><nuxt-link to="/work">Work</nuxt-link></li>
        <li><nuxt-link to="/blog">Blog</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: "Top",
      isOpen: false,
      isClose: false
    }
  },
  methods: {
    clickNavBtn: function() {
      this.isOpen = !this.isOpen;
      this.isClose = false;
    },
    clickCloseBtn: function() {
      this.isClose = !this.isClose;
      this.isOpen = false;
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
.header_container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  padding: 10px 15px;
  margin: 0;
  background: -moz-linear-gradient(top, rgba(255, 255, 255, .9), rgba(255, 255, 255, 0));
  background: -webkit-linear-gradient(top, rgba(255, 255, 255, .9), rgba(255, 255, 255, 0));
  background: linear-gradient(to bottom, rgba(255, 255, 255, .9), rgba(255, 255, 255, 0));
}
.header_container .logo, .header_container .nav_btn {
  cursor: pointer;
}
.header_container .logo {
  width: 35px;
}
.header_container .nav_btn {
  font-size: 25px;
}
header .nav_menu {
  visibility: hidden;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px 15px;
  overflow: hidden;
  z-index: 10;
  text-align: center;
  background-color: rgb(43, 42, 42);
  transform: translateX(100%);
  transition: all  500ms ease;
}
header .nav_menu.open {
  visibility: visible;
  transform: translateX(0);
}
header .nav_menu.close {
  visibility: visible;
  transform: translateX(100%);
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>