<template>
  <div class="sns-list">
    <p class="ttl">Contact &amp; Follow</p>
    <ul class="contact-list">
      <li class="contact-item">
        <a class="sns-link" :href="threadsURL" target="_blank" rel="noopener">
          <img
            loading="lazy"
            src="~assets/images/sns/threads.png"
            alt="threads"
            width="40"
            height="40"
        /></a>
      </li>
      <li class="contact-item">
        <a class="sns-link" :href="twitterURL" target="_blank" rel="noopener">
          <img
            loading="lazy"
            src="~assets/images/sns/twitter.png"
            alt="Twitter"
            width="40"
            height="40"
        /></a>
      </li>
      <li class="contact-item">
        <a class="sns-link" :href="githubURL" target="_blank" rel="noopener">
          <img
            loading="lazy"
            src="~assets/images/sns/github.png"
            alt="Github"
            width="40"
            height="40"
        /></a>
      </li>
      <li class="contact-item">
        <a class="sns-link" :href="`mailto:${email}?subject=Contact from Portfolio`">
          <img loading="lazy" src="~assets/images/sns/mail.png" alt="Mail" width="40" height="40"
        /></a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'SnsList',
  data() {
    return {
      twitterURL: 'https://twitter.com/fromscratch_yi',
      githubURL: 'https://github.com/fromscratch-yi',
      threadsURL: 'https://www.threads.net/@fromscratch_yi',
      email: 'fromscratch.yi@gmail.com',
    };
  },
});
</script>

<style lang="scss" scoped>
.sns-list {
  max-width: 250px;
  margin: 0 auto;

  .ttl {
    margin: 0 0 10px;
    font-size: 1.1em;
    font-weight: bold;
    text-align: center;
  }

  .contact-list {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .contact-item {
      text-align: center;

      a {
        display: block;
      }
    }
  }
}
</style>
