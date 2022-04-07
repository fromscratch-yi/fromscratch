<template>
  <p id="copyright">&copy;{{ thisYear }} FromScratch All Rights Reserved</p>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'FooterCopy',
  computed: {
    thisYear(): string {
      const today = new Date();
      return today.getFullYear().toString();
    },
  },
});
</script>

<style lang="scss" scoped>
#copyright {
  padding: 15px 0;
  margin: 30px auto 0;
  font-size: 12px;
  color: $txt-wh-color;
  text-align: center;
  background-color: $main-color;
}
</style>
