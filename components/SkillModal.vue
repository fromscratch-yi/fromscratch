<template>
  <transition name="modal">
    <div class="modal_mask modal_overlay" @click="$emit('close')">
        <div class="modal_content" :class="title">
            <p class="close_button" @click="$emit('close')">✖️</p>
            <h2 v-html="$t('word.' + title)"></h2>
            <skill-chart :skills="skills" :title="title" class="chart_wrap"></skill-chart>
        </div>
    </div>
  </transition>
</template>

<script>
import SkillChart from '~/components/SkillChart'
export default {
  name: 'SlideModal',
  props: ['skills', 'title'],
  components: {
    SkillChart
  }
}
</script>

<style scoped>
.modal_overlay{
  display: flex;
  justify-content: center;
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
  opacity: 0;
  transition: opacity 0.5s, transform 0s 0.5s;
  transform: scale(0);
}
.modal_content{
  align-self: center;
  width: calc(100% - 30px);
  max-width: 550px;
  padding: 17px 15px;
  box-sizing: border-box;
  background: #fff;
  transform: scale(0.3);
  transition: 0.5s;
  border-radius: 15px;
  border: 4px solid #269625;
}
.modal_content h2 {
  margin: 0 0 20px;
  padding: 0 0 13px;
  font-size: 25px;
  text-align: center;
  color: #269626;
  font-weight: bold;
  border-bottom: 2px dashed #909090;
}
.modal_content.frontend h2 {
  color: rgba(237, 146, 159, 1);
}
.modal_content.backend h2 {
  color: rgba(121, 198, 182, 1);
}
.modal_content.other h2 {
  color: rgba(255, 195, 93, 1);
}
.close_button{
  position: absolute;
  top: 20px;
  right: 16px;
  font-size: 24px;
  cursor: pointer;
  color: #909090;
}
.modal_overlay.open {
    opacity: 1;
    transform: scale(1);
    transition: opacity 0.5s;
}

.modal_overlay.open .modal_content{
  transform: scale(1);
}
</style>