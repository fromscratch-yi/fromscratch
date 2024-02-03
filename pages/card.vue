/* stylelint-disable selector-class-pattern */ /* stylelint-disable selector-class-pattern */
<template>
  <article id="card">
    <h1>プライベート名刺</h1>
    <div class="business-card">
      <div class="head">
        <div class="name-wrap">
          <p class="position">Software Engineer</p>
          <p class="name">石山 雄一</p>
          <p class="name-en">Yuichi Ishiyama</p>
        </div>
        <div class="logo">
          <logo-img :size="40" />
        </div>
      </div>
      <div class="information">
        <dl>
          <dt>Work</dt>
          <dd>
            ソフトウェア開発（Webサイト、Webサービス、スマホアプリ
            etc...）、名刺作成、サーバ構築、SEOコンサル
          </dd>
        </dl>
        <dl>
          <dt>Skills</dt>
          <dd>HTML, CSS, Javascript, WordPress, PHP, Laravel, Python, Java, Swift, SwiftUI</dd>
        </dl>
      </div>
    </div>
    <div class="link-wrap">
      <ul>
        <li>
          <div class="info">
            <a class="mail" href="mailto: fromscratch.yi@gmail.com">fromscratch.yi@gmail.com</a>
          </div>
        </li>
        <li>
          <div class="info">
            <a class="tel" href="tel: 09037235648">090-3723-5648</a>
          </div>
        </li>
        <li>
          <div class="info">
            <a class="line" href="https://line.me/ti/p/AYhq9GuItA" target="_blank">@sumiresasori</a>
          </div>
        </li>
        <li>
          <div class="info">
            <a class="twitter" href="https://twitter.com/fromscratch_yi" target="_blank"
              >@fromscratch_yi</a
            >
          </div>
        </li>
        <li>
          <div class="info">
            <a class="service" href="https://tattoo-ja.com/" target="_blank">Tattoo Japan</a>
          </div>
        </li>
        <li>
          <div class="info">
            <a class="instagram" href="https://www.instagram.com/tattoo__japan" target="_blank"
              >@tattoo__japan</a
            >
          </div>
        </li>
        <li>
          <div class="info">
            <a class="hp" href="https://fromscratch-y.work/about/" target="_blank">経歴</a>
          </div>
        </li>
        <li>
          <div class="info">
            <a class="hp" href="https://fromscratch-y.work/work/" target="_blank">作品</a>
          </div>
        </li>
      </ul>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue';
import Meta from '~/assets/mixins/meta';

export default Vue.extend({
  name: 'CardPage',
  mixins: [Meta],
  layout: 'headerless',
  data(): {
    meta: object;
  } {
    return {
      meta: {
        title: this.$t('about.title'),
        description: this.$t('about.description'),
      },
    };
  },
  computed: {},
  methods: {},
});
</script>

<style lang="scss">
#card {
  width: 100%;
  max-width: 500px;
  min-height: 100vh;
  padding: 20px 16px;
  margin: 0 auto;
  background-color: #fff;

  h1 {
    margin: 0 0 10px;
    font-size: 22px;
    font-weight: bold;
    color: #7c7c7c;
  }

  .business-card {
    width: 100%;
    padding: 20px;
    margin: 0 auto;
    border-radius: 8px;
    box-shadow: 0 2px 14px 5px #d1d1d1;

    .head {
      display: flex;
      justify-content: space-between;

      .name-wrap {
        .position {
          font-size: 13px;
        }

        .name {
          font-size: 28px;
          color: #474747;
          letter-spacing: 8px;
        }

        .name-en {
          font-size: 18px;
          letter-spacing: 5px;
        }
      }

      .logo {
        display: flex;
      }
    }

    .information {
      margin: 20px 0 0;

      dl {
        display: flex;
        gap: 15px;
        margin: 0 0 10px;

        &:last-child {
          margin: 0;
        }

        dt {
          font-size: 14px;
        }

        dd {
          font-size: 12px;
        }
      }
    }
  }

  .link-wrap {
    margin: 30px auto 0;

    ul li {
      margin: 15px auto 0;

      .info {
        a {
          display: block;
          padding: 15px;
          padding-left: 55px;
          background-repeat: no-repeat;
          background-position: 15px center;
          background-size: 25px;
          border: 1px solid #d1d1d1;
          border-radius: 8px;
          box-shadow: 1px 4px 5px #eee;

          &.service {
            background-image: url('~/assets/css/images/tattoo-japan.png');
          }

          &.hp {
            background-image: url('~/assets/css/images/logo.png');
          }

          &.mail {
            background-image: url('~/assets/css/images/mail.png');
          }

          &.line {
            background-image: url('~/assets/css/images/line.png');
          }

          &.instagram {
            background-image: url('~/assets/css/images/instagram.png');
          }

          &.twitter {
            background-image: url('~/assets/css/images/x.png');
          }

          &.tel {
            background-image: url('~/assets/css/images/tel.png');
          }
        }
      }
    }
  }
}
</style>
