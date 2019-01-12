<template>
  <div class="wrap">
    <Header/>
    <nuxt/>
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
body {
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}
body::-webkit-scrollbar {
  display: none;
}
</style>
