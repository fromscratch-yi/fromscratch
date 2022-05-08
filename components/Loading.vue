<template>
  <div class="loading-wrap">
    <div class="loading">
      <div class="circle circle1" />
      <div class="circle circle2" />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'LoadingWrap',
});
</script>
<style lang="scss" scoped>
.loading-wrap {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: #ffffff78;
}

.loading,
.loading * {
  box-sizing: border-box;
}

.loading {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 10;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  transform: translate(-50%, -50%);

  .circle {
    position: absolute;
    width: 100%;
    height: 100%;
    content: '';
    border: calc(60px / 10) solid transparent;
    border-radius: 100%;
  }

  .circle.circle1 {
    border-top-color: $sub-color;
    animation: loading-animation 1s infinite;
  }

  .circle.circle2 {
    border-bottom-color: #12b46b;
    animation: loading-animation 1s infinite alternate;
  }
}
@keyframes loading-animation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
