<template>
  <div class="wrap">
    <Header/>
    <Nav/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Nav from "~/components/Nav.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Header,
    Nav,
    Footer
  }
};
</script>
