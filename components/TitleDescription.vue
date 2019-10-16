<template>
  <h2 class="main_ttl">{{ this.meta.headline }}</h2>
</template>

<script>
import Meta from '~/assets/mixins/meta'
export default {
  props: ['meta'],
  mixins: [Meta],
};
</script>

<style>
.main_ttl {
  position: relative;
  padding: 0 0 5px;
  margin: 15px 0 35px;
  font-size: 35px;
  text-align: center;
  line-height: 1.3;
  font-family: 'Roboto',arial,sans-serif;
}
.main_ttl::before {
  position: absolute;
  content: '';
  width: 30px;
  height: 3px;
  background-color: rgb(71, 160, 61);
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
}
/* PC用 */
@media screen and (min-width: 768px) {
  .main_ttl {
    margin: 40px 0;
    font-size: 45px;
  }
  .main_ttl::before {
    width: 45px;
    height: 4px;
  }
}
@media screen and (max-width: 320px){
  .main_ttl {
    font-size: 8vw;
  }
}
</style>

