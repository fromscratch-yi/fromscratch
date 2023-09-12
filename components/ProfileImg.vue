<template>
  <picture class="profile-img">
    <source type="image/webp" srcset="~assets/images/profile.webp" />
    <img
      loading="lazy"
      class="is-rounded"
      src="~assets/images/profile.jpg"
      :alt="aboutName"
      width="200"
      height="200"
    />
  </picture>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ProfileImg',
  computed: {
    aboutName(): string {
      return (this.$t('about.name') as string).replace(/<([^>]+)>/g, '');
    },
  },
});
</script>

<style lang="scss" scoped>
.profile-img {
  display: inline-block;

  img {
    width: 170px;
    border-radius: 50%;
    box-shadow: 0 0 10px 3px #6666;
    @include tablet {
      width: 200px;
    }
  }
}
</style>
