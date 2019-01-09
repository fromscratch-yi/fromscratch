<template>
  <section class="contents">
    <div class="typer_wrap" v-bind:class="{active: isActive}">
      <div class="inner">
        <p>Welcome</p>
        <p>LOT</p>
      </div>
    </div>
    <p class="typer_wrap" v-bind:class="{active: isActive}">
      <vue-typer :text='["[Java]\npublic class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println(\"Hello World.\");\n  }\n}\n$ javac HelloWorld.java\n$ java HelloWorld\nHello World.\n\n[PHP]\n$ echo \`<?php echo \"Hello World.\"; ?>\` > HelloWorld.php\n$ php HelloWorld.php\nHello World.\n\n[Python]\n$ echo \`print(\"Hello World.\")\` > HelloWorld.py\n$ python HelloWorld.py\nHello World.\n$########################"]' :type-delay='70' :repeat='0'></vue-typer>
    </p>
    <p class="typer_wrap" v-bind:class="{active: isActive}">
      <vue-typer :text='["$ docker-machine start\n\n                  ##         .\n            ## ## ##        ==\n         ## ## ## ## ##    ===\n     /\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\___/ ===\n~~~ {~~ ~~~~ ~~~\n~~~~ ~~~ ~ / ===- ~~~\n     \______ o           __/\n       \    \         __/\n        \____\_______/\n\ndocker is configured to use the default machine with IP 192.168.99.100\n  docker is running.....\n$"]' :type-delay='70' :repeat='0'></vue-typer>
    </p>
    <p class="typer_wrap" v-bind:class="{active: isActive}" @click="click"></p>
  </section>
</template>

<script>
if (process.browser) {
  var VueTyper = require('vue-typer').VueTyper
}
export default {
  components: {
    VueTyper
  },
  layout: "headerless",
  data() {
    return {
      title: "Top",
      isActive: false
    }
  },
  methods: {
    click: function() {
      this.isActive = !this.isActive;
    }
  },
  head() {
    return {
      titleTemplate: "%s | " + this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "This is Yuichi Ishiyama&apos;s Portfolio."
        }
      ]
    }
  }
}
</script>

<style>
  .contents {
    position: absolute;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  .typer_wrap {
    position: absolute;
    background-color: rgb(43, 42, 42);
    font-size: 3.125vw;
    padding: 15px 10px;
    overflow: hidden;
  }
  .vue-typer .custom.char.typed {
    color: rgb(65, 211, 85);
  }
  .vue-typer .custom.caret {
    display: inline-block;
    background-color: rgb(65, 211, 85);
  }
  .typer_wrap:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 40%;
    height: 50%;
    color: rgb(65, 211, 85);
    font-size: 8vw;
    text-align: center;
    transition: all 250ms 300ms ease;
  }
  .typer_wrap:nth-child(1).active {
    transform: translateX(-100%);
  }
  .typer_wrap:nth-child(2) {
    top: 0;
    right: 0;
    width: 60%;
    height: 80%;
    border-left: 1px solid rgb(187, 187, 187);
    border-bottom: 1px solid rgb(187, 187, 187);
    font-family: "Courier New", Consolas, monospace;
    transition: all 250ms 200ms ease;
  }
  .typer_wrap:nth-child(2).active {
    transform: translateY(-100%);
  }
  .typer_wrap:nth-child(3) {
    top: 50%;
    left: 0;
    width: 80%;
    height: 50%;
    border-top: 1px solid rgb(187, 187, 187);
    border-right: 1px solid rgb(187, 187, 187);
    font-family: "Courier New", Consolas, monospace;
    z-index: 1;
    transition: all 250ms 100ms ease;
  }
  .typer_wrap:nth-child(3).active {
    transform: translateY(100%);
  }
  .typer_wrap:nth-child(4) {
    top: 80%;
    right: 0;
    float: right;
    width: 20%;
    height: 20%;
    text-align: center;
    font-size: 8vw;
    line-height: 1.3;
    background: rgb(253, 127, 35);;
    transition: all 250ms 0s ease;
    cursor: pointer;
  }
  .typer_wrap .inner {
    line-height: 1.2;
  }
  @media screen and (min-width: 769px){
    .typer_wrap {
      font-size: 14px;
    }
  }
</style>
