<template>
  <nuxt-link
    :to="localePath({ name: 'blog-category', params: { category: type } })"
    class="category-link"
    :class="classes"
  >
    <p class="ttl">{{ name }}</p>
    <p v-if="explain" class="explain">{{ explain }}</p>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BlogCategoryLink',
  props: {
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    explain: {
      type: String,
      required: false,
      default: null,
    },
    isNoArrow: {
      type: Boolean,
      required: false,
      default: false,
    },
    isWhite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    classes() {
      const classes: any = {};
      classes[this.type] = this.type;
      classes.noarrow = this.isNoArrow;
      classes.white = this.isWhite;
      return classes;
    },
  },
});
</script>
<style lang="scss" scoped>
.category-link {
  position: relative;
  display: block;
  width: 100%;
  padding: 15px 25px 15px 45px;
  font-size: 14px;
  color: #666;
  background-repeat: no-repeat;
  background-position: 10px center;
  background-size: 25px;
  border-bottom: 2px solid #d1d1d1;
  transition: background 0.4s ease;

  &:hover {
    background-color: #dcffdcac;
  }

  &[aria-current='page'] {
    pointer-events: none;
  }

  &.noarrow {
    display: inline-block;
    width: auto;

    &::after {
      content: none;
    }
  }

  &:not(.noarrow) {
    &[aria-current='page'] {
      background-color: #edededbf;
    }
  }

  &.programming {
    background-image: url('~/assets/css/images/ico-category-programming.png');
  }

  &.gadget {
    background-image: url('~/assets/css/images/ico-category-gadget.png');
  }

  &.other {
    background-image: url('~/assets/css/images/ico-category-other.png');
  }

  .ttl {
    font-weight: bold;
  }

  &.white {
    color: #fff;

    &.programming {
      background-image: url('~/assets/css/images/ico-category-programming-wh.png');
    }

    &.gadget {
      background-image: url('~/assets/css/images/ico-category-gadget-wh.png');
    }

    &.other {
      background-image: url('~/assets/css/images/ico-category-other-wh.png');
    }

    .ttl {
      font-weight: normal;
    }
  }

  &::after {
    position: absolute;
    top: calc(50% - 5px);
    right: 12px;
    width: 10px;
    height: 10px;
    content: '';
    border-top: 2px solid #b6b6b6;
    border-right: 2px solid #b6b6b6;
    transform: rotate(45deg);
  }

  .explain {
    margin: 5px 0 0;
    font-size: 13px;
  }
}
</style>
