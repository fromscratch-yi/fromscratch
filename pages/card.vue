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
        <div class="logo"></div>
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
      <h2>プライベート情報</h2>
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
            <a class="line" href="https://line.me/ti/p/AYhq9GuItA">LINE</a>
          </div>
        </li>
      </ul>
      <h2>運営サービス【Tattoo Japan】</h2>
      <ul>
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
            <a class="twitter" href="https://twitter.com/tattoo__japan" target="_blank"
              >@tattoo__japan</a
            >
          </div>
        </li>
      </ul>
      <h2>エンジニア情報</h2>
      <ul>
        <li>
          <div class="info">
            <a class="hp" href="https://fromscratch-y.work/" target="_blank"
              >ポートフォリオ（経歴・作品）</a
            >
          </div>
        </li>
        <li>
          <div class="info">
            <a class="twitter" href="https://twitter.com/fromscratch_yi" target="_blank"
              >@fromscratch_yi</a
            >
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
        title: 'プライベート名刺',
        description: 'プライベート名刺',
      },
    };
  },
  head: {
    meta: [
      {
        hid: 'robots',
        name: 'robots',
        content: 'noindex, nofollow',
      },
    ],
  },
  computed: {},
  methods: {},
});
</script>

<style lang="scss">
#card {
  width: 100%;
  max-width: 500px;
  padding: 20px 16px;
  margin: 0 auto;
  background-color: #fff;
  @include tablet {
    height: calc(100vh - 60px);
    padding: 40px 30px;
    margin: 30px auto;
    overflow-y: scroll;
    border-radius: 20px;
  }

  h1 {
    margin: 0 0 10px;
    font-size: 22px;
    font-weight: bold;
    color: #7c7c7c;
  }

  h2 {
    padding: 0 5px 5px;
    margin: 30px auto 0;
    font-size: 18px;
    font-weight: bold;
    color: #7c7c7c;
    border-bottom: 2px solid #44a045;
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
          font-size: 25px;
          color: #474747;
          letter-spacing: 8px;
        }

        .name-en {
          font-size: 14px;
          letter-spacing: 5px;
        }
      }

      .logo {
        display: block;
        width: 50px;
        height: 50px;
        background-image: url('~/assets/css/images/logo.png');
        background-repeat: no-repeat;
        background-size: contain;
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
