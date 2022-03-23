<template>
  <footer>
    <SnsList />
    <p class="copyright">&copy;2021 FromScratch All Rights Reserved</p>
  </footer>
</template>

<script>
import SnsList from "~/components/SnsList.vue";
export default {
  components: { SnsList }
}
</script>


<style lang="scss" scoped>
footer {
  padding: 35px 0 0;

  .copyright {
    margin: 30px auto 0;
    padding: 15px 0;
    text-align: center;
    font-size: 12px;
    color: rgb(177, 177, 177);
    background-color: rgb(43, 42, 42);
  }
}
</style>
