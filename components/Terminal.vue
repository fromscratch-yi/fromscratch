<template>
  <div class="terminal_wrap">
    <p class="tool_bar">
      <span class="btn"></span>
      <span class="btn"></span>
      <span class="btn"></span>
      Terminal
    </p>
    <p class="type_txt">
      <vue-typer :text='[typeTxt]' :type-delay='70' :repeat='0' :pre-erase-delay='5000'></vue-typer>
    </p>
  </div>
</template>

<script>
if (process.browser) {
  var VueTyper = require('vue-typer').VueTyper
}
export default {
  components: {
    VueTyper
  },
  props: ['typeTxt']
}
</script>

<style>
.terminal_wrap {
  margin: 15px auto;
  border: 1px solid rgb(43, 42, 42);
  border-radius: 5px;
  overflow: hidden;
}
.terminal_wrap .tool_bar {
  position: relative;
  background: rgb(217,217,217);
  color: rgb(43, 42, 42);
  text-align: center;
  border-bottom: 1px solid rgb(43, 42, 42);
}
.terminal_wrap .tool_bar .btn {
  position: absolute;
  display: inline-block;
  content: '';
  width: 12px;
  height: 12px;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  border-radius: 50%;
  background: rgb(249,98, 93);
}
.terminal_wrap .tool_bar .btn:nth-child(2) {
  left: 22px;
  background: rgb(253,191,65);
}
.terminal_wrap .tool_bar .btn:nth-child(3) {
  left: 40px;
  background: rgb(53,204,76);
}
.terminal_wrap .type_txt {
  height: 85px;
  padding: 10px;
  background: rgb(43, 42, 42);
  color: rgb(71, 160, 61);
  font-size: 14px;
  overflow: hidden;
}
.vue-typer .custom.char.typed {
  color: rgb(71, 160, 61);
}
.vue-typer .custom.caret {
  display: inline-block;
  background-color: rgb(71, 160, 61);
  font-size: 13px;
}
/* タブレット以上用 */
@media screen and (min-width: 768px) {
  .terminal_wrap .type_txt {
    height: 125px;
    font-size: 18px;
    padding: 20px;
  }
  .main_ttl::before {
    width: 45px;
    height: 4px;
  }
}
</style>