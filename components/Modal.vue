<template>
  <transition name="modal">
    <div class="modal-overlay" @click="$emit('close')">
      <div class="modal-content">
        <p class="modal-ttl">{{ modalTitle }}</p>
        <div class="modal-inner">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Modal',
  props: {
    modalTitle: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  background: #00000089;
  transition: opacity 0.5s, transform 0s 0.5s;
  transform: scale(0);

  .modal-content {
    align-self: center;
    width: 90%;
    max-width: 700px;
    background: #fff;
    border-radius: 10px;
    transition: 0.5s;
    transform: translate(-50%, -50%);
    transform: scale(0);

    .modal-ttl {
      padding: 10px 0;
      font-size: 15px;
      font-weight: bold;
      color: #fff;
      text-align: center;
      background: $sub-color;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }

    .modal-inner {
      padding: 20px;
      @include tablet {
        padding: 25px 30px;
      }
    }
  }

  &.is-open {
    opacity: 1;
    transition: opacity 0.5s;
    transform: scale(1);

    .modal-content {
      transform: scale(1);
    }
  }
}
</style>
