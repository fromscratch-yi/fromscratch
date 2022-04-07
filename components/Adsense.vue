<template>
  <ins
    class="adsbygoogle"
    :data-ad-layout="adLayout"
    :data-ad-client="adClient"
    :data-ad-slot="adSlot"
    :data-ad-format="adFormat"
    :data-full-width-responsive="adResponsive"
    :data-ad-layout-key="adLayoutKey"
    :style="adStyle"
  />
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'GoogleAdsense',
  props: {
    adClient: {
      type: String,
      required: false,
      default: process.env.GOOGLE_ADSENSE_ID,
    },
    adSlot: {
      type: String,
      required: true,
      default: '',
    },
    adFormat: {
      type: String,
      required: false,
      default: 'auto',
    },
    adLayout: {
      type: String,
      required: false,
      default: null,
    },
    adStyle: {
      type: String,
      required: false,
      default: 'display: block;',
    },
    adResponsive: {
      type: String,
      required: false,
      default: null,
    },
    adLayoutKey: {
      type: String,
      required: false,
      default: null,
    },
  },
  mounted() {
    this.showAd();
    console.log(this.adSlot);
    console.log('showAd');
  },
  methods: {
    showAd() {
      this.$nextTick(() => {
        try {
          ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
        } catch (error) {
          console.error(error);
        }
      });
    },
  },
});
</script>
