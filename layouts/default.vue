<template>
  <main id="default-layout">
    <defaoult-header />
    <section class="page_contents">
      <nuxt />
    </section>
    <default-footer />
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'DefaultLayout',
});
</script>

<style lang="scss" scoped>
#default-layout {
  background: #fff;
}
</style>
