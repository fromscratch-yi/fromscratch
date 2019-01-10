<template>
  <section class="contents">
    <div class="contents_area">
      <div class="typer_wrap" v-bind:class="{active: isActive}">
        <div class="inner">
          <p class="glitch" data-text="Welcome">Welcome</p>
          <p class="small_txt">Yuichi Ishiyama's</p>
          <p class="middle_txt">~ Portfolio ~</p>
        </div>
      </div>
      <p class="typer_wrap" v-bind:class="{active: isActive}">
        <vue-typer :text='["[Java]\npublic class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println(\"Hello World.\");\n  }\n}\n$ javac HelloWorld.java\n$ java HelloWorld\nHello World.\n\n[PHP]\n$ echo \`<?php echo \"Hello World.\"; ?>\` > HelloWorld.php\n$ php HelloWorld.php\nHello World.\n\n[Python]\n$ echo \`print(\"Hello World.\")\` > HelloWorld.py\n$ python HelloWorld.py\nHello World.\n$########################"]' :type-delay='70' :repeat='5' :pre-erase-delay='5000'></vue-typer>
      </p>
      <p class="typer_wrap" v-bind:class="{active: isActive}">
        <vue-typer :text='["$ docker-machine start\n\n                  ##         .\n            ## ## ##        ==\n         ## ## ## ## ##    ===\n     /\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\___/ ===\n~~~ {~~ ~~~~ ~~~\n~~~~ ~~~ ~ / ===- ~~~\n     \______ o           __/\n       \    \         __/\n        \____\_______/\n\ndocker is configured to use the default machine with IP 192.168.99.100\n  docker is running.....\n$"]' :type-delay='70' :repeat='5' :pre-erase-delay='5000'></vue-typer>
      </p>
      <div class="typer_wrap" v-bind:class="{active: isActive}" @click="click">
        <div class="inner">
          <img class="logo" src="~/assets/img/logo.png">
          <span class="tap_txt">
            <vue-typer :text='["Tap"]' :type-delay='200' :pre-type-delay='3000' :pre-erase-delay='3000'></vue-typer>
          </span>
        </div>
      </div>
    </div>
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
  @charset "utf-8";
  * {
    background: transparent;
  }
  body {
    background-color: rgb(43, 42, 42);
    width: 100%;
  }
  .contents {
    position: relative;
    height: 100%;
    overflow: hidden;
  }
  .contents_area {
    min-height: 100vh;
    overflow: hidden;
    outline: 1px solid rgb(187, 187, 187);
  }
  .typer_wrap {
    position: absolute;
    background-color: rgb(43, 42, 42);
    font-size: 3.125vw;
    padding: 15px 10px;
    overflow: hidden;
  }
  .vue-typer .custom.char.typed {
    color: rgb(71, 160, 61);
  }
  .vue-typer .custom.caret {
    display: inline-block;
    background-color: rgb(71, 160, 61);
  }
  .typer_wrap:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 40%;
    height: 50%;
    color: rgb(71, 160, 61);
    font-size: 7vw;
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
    display: flex;
    align-items: center;
    justify-content: center;
    top: 80%;
    right: 0;
    width: 20%;
    height: 20%;
    text-align: center;
    font-size: 8vw;
    line-height: 1.3;
    background: rgb(247, 169, 82);
    transition: all 250ms 0s ease;
    cursor: pointer;
  }
  .typer_wrap .inner {
    line-height: 1.2;
  }
  .typer_wrap .small_txt {
    margin: 10px 0;
    font-size: 3vw;
  }
  .typer_wrap .middle_txt {
    font-size: 5vw;
  }
  .typer_wrap .logo {
    display: block;
    width: 10vw;
    margin: 0 auto 10px;
  }
  .typer_wrap .tap_txt {
    display: block;
    font-size: 4.5vw;
    font-weight: bold;
    text-align: center;
  }
  @media screen and (min-width: 568px){
    .typer_wrap {
      font-size: 14px;
    }
    .typer_wrap .logo {
      width: 7vw;
      margin: 0 auto;
    }
    .typer_wrap .tap_txt {
      display: none;
    }
  }
  @media screen and (min-width: 768px){
    .typer_wrap .logo {
      width: 5vw;
      margin: 0 auto 10px;
    }
    .typer_wrap .tap_txt {
      display: block;
      font-size: 2vw;
    }
  }
  .glitch {/*基本設定*/
    position: relative;
  }
  @keyframes noise-anim {/*細かい動きを設定してノイズが走っているかのように動かす*/
    0% {
      clip: rect(77px, 9999px, 6px, 0);
    }
    5% {
      clip: rect(65px, 9999px, 70px, 0);
    }
    10% {
      clip: rect(82px, 9999px, 82px, 0);
    }
    15% {
      clip: rect(32px, 9999px, 35px, 0);
    }
    20% {
      clip: rect(31px, 9999px, 49px, 0);
    }
    25% {
      clip: rect(18px, 9999px, 46px, 0);
    }
    30% {
      clip: rect(94px, 9999px, 64px, 0);
    }
    35% {
      clip: rect(69px, 9999px, 31px, 0);
    }
    40% {
      clip: rect(6px, 9999px, 72px, 0);
    }
    45% {
      clip: rect(25px, 9999px, 35px, 0);
    }
    50% {
      clip: rect(82px, 9999px, 26px, 0);
    }
    55% {
      clip: rect(7px, 9999px, 92px, 0);
    }
    60% {
      clip: rect(54px, 9999px, 30px, 0);
    }
    65% {
      clip: rect(86px, 9999px, 90px, 0);
    }
    70% {
      clip: rect(38px, 9999px, 65px, 0);
    }
    75% {
      clip: rect(41px, 9999px, 66px, 0);
    }
    80% {
      clip: rect(31px, 9999px, 37px, 0);
    }
    85% {
      clip: rect(8px, 9999px, 12px, 0);
    }
    90% {
      clip: rect(50px, 9999px, 69px, 0);
    }
    95% {
      clip: rect(7px, 9999px, 42px, 0);
    }
    100% {
      clip: rect(14px, 9999px, 57px, 0);
    }
  }
  .glitch:after {
    content: attr(data-text);
    position: absolute;
    left: 2px;
    text-shadow: -1px 0 red;
    top: 0;
    color: rgb(71, 160, 61);
    background: rgb(43, 42, 42);
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
    animation: noise-anim 2s infinite linear alternate-reverse;
  }
  @keyframes noise-anim-2 {/*ノイズ用アニメーションその2*/
    0% {
      clip: rect(18px, 9999px, 13px, 0);
    }
    5% {
      clip: rect(74px, 9999px, 51px, 0);
    }
    10% {
      clip: rect(33px, 9999px, 65px, 0);
    }
    15% {
      clip: rect(64px, 9999px, 66px, 0);
    }
    20% {
      clip: rect(75px, 9999px, 6px, 0);
    }
    25% {
      clip: rect(40px, 9999px, 49px, 0);
    }
    30% {
      clip: rect(71px, 9999px, 1px, 0);
    }
    35% {
      clip: rect(42px, 9999px, 73px, 0);
    }
    40% {
      clip: rect(92px, 9999px, 57px, 0);
    }
    45% {
      clip: rect(4px, 9999px, 33px, 0);
    }
    50% {
      clip: rect(4px, 9999px, 34px, 0);
    }
    55% {
      clip: rect(49px, 9999px, 25px, 0);
    }
    60% {
      clip: rect(24px, 9999px, 44px, 0);
    }
    65% {
      clip: rect(31px, 9999px, 99px, 0);
    }
    70% {
      clip: rect(54px, 9999px, 83px, 0);
    }
    75% {
      clip: rect(57px, 9999px, 97px, 0);
    }
    80% {
      clip: rect(3px, 9999px, 15px, 0);
    }
    85% {
      clip: rect(84px, 9999px, 34px, 0);
    }
    90% {
      clip: rect(100px, 9999px, 88px, 0);
    }
    95% {
      clip: rect(91px, 9999px, 59px, 0);
    }
    100% {
      clip: rect(10px, 9999px, 87px, 0);
    }
  }
  .glitch:before {
    content: attr(data-text);
    position: absolute;
    left: -2px;
    text-shadow: 1px 0 blue;
    top: 0;
    color: rgb(71, 160, 61);
    background: rgb(43, 42, 42);
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
    animation: noise-anim-2 3s infinite linear alternate-reverse;
  }
</style>
