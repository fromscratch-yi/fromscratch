<template>
  <div id="terminal">
    <div class="tool-bar">
      <span class="btn"></span>
      <span class="btn"></span>
      <span class="btn"></span>
      Terminal
    </div>
    <p class="type-txt">
      <vue-typer :text="[text]" :type-delay="70" :repeat="0" :pre-erase-delay="5000"></vue-typer>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
let VueTyper = null;
if (process.browser) {
  VueTyper = require('vue-typer').VueTyper;
}

export default Vue.extend({
  name: 'TopPage',
  components: { VueTyper },
  props: {
    text: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss">
#terminal {
  width: calc(100% - 30px);
  max-width: 1000px;
  margin: 15px auto;
  overflow: hidden;
  border: 1px solid $main-color;
  border-radius: 5px;

  .tool-bar {
    position: relative;
    color: #d9d9d9;
    text-align: center;
    background: #d9d9d9;
    border-bottom: 1px solid $main-color;

    .btn {
      position: absolute;
      top: 50%;
      left: 5px;
      display: inline-block;
      width: 12px;
      height: 12px;
      content: '';
      background: #f9625d;
      border-radius: 50%;
      transform: translateY(-50%);

      &:nth-child(2) {
        left: 22px;
        background: #fdbf41;
      }

      &:nth-child(3) {
        left: 40px;
        background: #35cc4c;
      }
    }
  }

  .type-txt {
    height: auto;
    padding: 10px;
    overflow: hidden;
    font-size: 14px;
    color: $sub-color;
    background: $main-color;
    @include tablet {
      height: 125px;
      padding: 20px;
      font-size: 18px;
    }

    .char.typed {
      font-family: 'Courier New', Consolas, monospace;
      color: $sub-color;
    }

    .caret {
      display: inline-block;
      font-size: 13px;
      background-color: $sub-color;
    }
  }
}
</style>
