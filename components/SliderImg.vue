<template>
  <carousel
    :perPage="1"
    :scrollPerPage="true"
    :perPageCustom="[[480, 2]]"
    :paginationPadding="8">
    <slide
      v-for="img in imgList"
      v-bind="img" :key="img.id">
      <div class="img_wrap"><img v-bind:src="img.src" v-bind:alt="img.alt"></div>
    </slide>
  </carousel>
</template>

<script>
import Carousel from 'vue-carousel/src/Carousel.vue';
import Slide from 'vue-carousel/src/Slide.vue';
export default {
  props: ['imgList'],
  components: {
    Carousel,
    Slide
  }
}
</script>
