<template>
  <article id="top">
    <section class="front-wrap" @click="toggleActive">
      <!-- top-left -->
      <div class="typer-wrap flex-center" :class="{ active: isActive }">
        <h1 class="main-ttl">
          <span class="noice-txt" data-text="Welcome">Welcome</span>
          <span class="middle-txt">FromScratch</span>
          <span class="small-txt">Yuichi Ishiyama's<br />Portfolio Site</span>
        </h1>
      </div>
      <!-- top-right -->
      <div class="typer-wrap typing-code" :class="{ active: isActive }">
        <vue-typer
          :text="[
            '[Java]\npublic class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println(&quot;Hello World.&quot;);\n  }\n}\n$ javac HelloWorld.java\n$ java HelloWorld\nHello World.\n\n[PHP]\n$ echo \`<?php echo &quot;Hello World.&quot;; ?>\` > HelloWorld.php\n$ php HelloWorld.php\nHello World.\n\n[Python]\n$ echo \`print(&quot;Hello World.&quot;)\` > HelloWorld.py\n$ python HelloWorld.py\nHello World.\n$',
          ]"
          :type-delay="70"
          :repeat="5"
          :pre-erase-delay="5000"
        ></vue-typer>
      </div>
      <!-- bottom-left -->
      <div class="typer-wrap typing-code" :class="{ active: isActive }">
        <vue-typer
          :text="[
            '$ docker-machine start\n\n                  ##         .\n            ## ## ##        ==\n         ## ## ## ## ##    ===\n     /&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;\___/ ===\n~~~ {~~ ~~~~ ~~~\n~~~~ ~~~ ~ / ===- ~~~\n     \______ o           __/\n       \    \         __/\n        \____\_______/\n\ndocker is configured to use the default machine with IP 192.168.99.100\n  docker is running.....\n$',
          ]"
          :type-delay="70"
          :repeat="5"
          :pre-erase-delay="5000"
        ></vue-typer>
      </div>
      <!-- bottom-right -->
      <div class="typer-wrap flex-center" :class="{ active: isActive }">
        <logo-img :size="60" />
      </div>
    </section>
    <section class="back-wrap" :class="{ active: isActive }">
      <div class="toggle-button" @click="toggleActive">
        <logo-img :is-bounding="true" :size="60" />
      </div>
      <p class="message">Welcome to this site.<br />All will begin <em>FromScratch</em></p>
      <headerless-menu-nav />
    </section>
  </article>
</template>

<script lang="ts">
import Vue from 'vue';
import Meta from '~/assets/mixins/meta';
let VueTyper = null;
if (process.browser) {
  VueTyper = require('vue-typer').VueTyper;
}

export default Vue.extend({
  name: 'TopPage',
  components: { VueTyper },
  mixins: [Meta],
  layout: 'headerless',
  data(): {
    isActive: boolean;
    meta: object;
  } {
    return {
      isActive: false,
      meta: {
        title: this.$t('top.title'),
        description: this.$t('top.description'),
      },
    };
  },
  methods: {
    toggleActive(): void {
      this.isActive = !this.isActive;
    },
  },
});
</script>

<style lang="scss">
/* stylelint-disable-next-line scss/at-import-no-partial-leading-underscore */
@import '~/assets/css/_keyframes';

#top {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  overflow: -moz-scrollbars-none;
  background-color: $main-color;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  .front-wrap {
    cursor: pointer;

    .typer-wrap {
      position: fixed;
      z-index: 3;
      padding: 15px 10px;
      overflow: hidden;
      font-size: 12px;
      background-color: $main-color;
      border: 1px solid #bbb;
      @include tablet {
        font-size: 16px;
      }

      .char.typed {
        color: $sub-color;
      }

      .caret {
        display: inline-block;
        background-color: $sub-color;
      }

      &.flex-center {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &.typing-code {
        font-family: 'Courier New', Consolas, monospace;
      }

      &:nth-child(1) {
        top: 0;
        left: 0;
        width: calc(40% + 1px);
        height: calc(50% + 1px);
        font-size: 7vw;
        text-align: center;
        transition: all 250ms 300ms ease;
        animation: show-from-left 1.2s ease;

        &.active {
          transform: translateX(-110%);
        }
      }

      &:nth-child(2) {
        top: 0;
        right: 0;
        width: 60%;
        height: 80%;
        transition: all 250ms 200ms ease;
        animation: show-from-top 1.2s ease;

        &.active {
          transform: translateY(-110%);
        }
      }

      &:nth-child(3) {
        bottom: 0;
        left: 0;
        width: 80%;
        height: 50%;
        transition: all 250ms 100ms ease;
        animation: show-from-bottom 1.2s ease;

        &.active {
          transform: translateY(110%);
        }
      }

      &:nth-child(4) {
        right: 0;
        bottom: 0;
        width: 20%;
        height: 20%;
        font-size: 8vw;
        line-height: 1.3;
        text-align: center;
        background: $accent-color;
        transition: all 250ms 400ms ease;
        animation: show-from-right 1.2s ease;

        &.active {
          transform: translateX(110%);
        }
      }

      .main-ttl {
        color: $sub-color;

        span {
          display: block;
        }

        .noice-txt {
          position: relative;
          @include tablet {
            font-size: 70px;
          }

          &::after {
            position: absolute;
            top: 0;
            left: 2px;
            overflow: hidden;
            clip: rect(0, 900px, 0, 0);
            color: $sub-color;
            text-shadow: -1px 0 red;
            content: attr(data-text);
            background: $main-color;
            animation: noice-text 2s infinite linear alternate-reverse;
          }

          &::before {
            position: absolute;
            top: 0;
            left: -2px;
            overflow: hidden;
            clip: rect(0, 900px, 0, 0);
            color: $sub-color;
            text-shadow: 1px 0 blue;
            content: attr(data-text);
            background: $main-color;
            animation: noice-text-bg 3s infinite linear alternate-reverse;
          }
        }

        .middle-txt {
          margin: 5px 0 10px;
          font-size: 4vw;
          @include tablet {
            font-size: 40px;
          }
        }

        .small-txt {
          font-size: 3.5vw;
          line-height: 1.7;
          @include tablet {
            font-size: 30px;
          }
        }
      }

      .logo-img-wrap {
        display: inline-flex;
        justify-content: center;
        width: 80%;
      }
    }
  }

  .back-wrap {
    position: absolute;
    top: 45%;
    left: 50%;
    display: none;
    width: calc(100% - 40px);
    margin: 0 auto;
    color: $txt-wh-color;
    text-align: center;
    transform: translate(-50%, -50%);

    &.active {
      display: block;
    }

    .toggle-button {
      display: inline-block;
      width: 60px;
      cursor: pointer;
    }

    .message {
      margin: 15px 0 25px;
      font-size: 19px;
      line-height: 1.7;
      letter-spacing: 1px;
      @include tablet {
        margin: 20px 0 35px;
        font-size: 25px;
      }

      em {
        font-style: normal;
        font-weight: bold;
        color: $sub-color;
      }
    }
  }
}
</style>
