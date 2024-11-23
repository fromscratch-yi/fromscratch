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
    <!-- 連絡先追加ボタンを追加 -->
    <div class="contact-actions">
      <!-- <button :disabled="!isContactApiSupported" class="add-contact-btn" @click="addToContacts">
        連絡先に追加
      </button> -->
      <button v-if="!isContactApiSupported" class="download-vcard-btn" @click="downloadVCard">
        連絡先を保存
      </button>
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

interface ComponentData {
  meta: {
    title: string;
    description: string;
  };
  isContactApiSupported: boolean;
}

export default Vue.extend({
  name: 'CardPage',
  mixins: [Meta],
  layout: 'headerless',
  data(): ComponentData {
    return {
      meta: {
        title: 'プライベート名刺',
        description: 'プライベート名刺',
      },
      isContactApiSupported:
        process.client && 'contacts' in navigator && 'ContactsManager' in window,
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
  methods: {
    // async addToContacts(): Promise<void> {
    //   if (!this.isContactApiSupported || !navigator.contacts) {
    //     this.downloadVCard();
    //     return;
    //   }

    //   try {
    //     const contact: ContactProperty = {
    //       name: ['石山 雄一'],
    //       tel: ['09037235648'],
    //       email: ['fromscratch.yi@gmail.com'],
    //     };

    //     await navigator.contacts.select(['name', 'email', 'tel']);
    //     await navigator.contacts.add(contact);

    //     alert('連絡先を追加しました！');
    //   } catch (error) {
    //     console.error('連絡先の追加中にエラーが発生しました:', error);
    //     alert('連絡先の追加に失敗しました。vCardをダウンロードして追加することもできます。');
    //     this.downloadVCard();
    //   }
    // },

    downloadVCard(): void {
      const vcard = `BEGIN:VCARD
VERSION:3.0
FN:石山 雄一
N:石山;雄一;;;
BDAY:1993-01-23
ORG:Fromscratch
NOTE:ソフトウェア開発（Webサイト、Webサービス、スマホアプリ etc...）、名刺作成、サーバ構築、SEOコンサル
TEL;CELL:090-37235648
URL;WORK:https://fromscratch-y.work/card
URL;HOME:https://tattoo-ja.com/
PHOTO;TYPE=JPEG;ENCODING=BASE64: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
 GChysvG/wcPeAMLpKoKUAAAAABJRU5ErkJggg==
END:VCARD`;

      const blob = new Blob([vcard], { type: 'text/vcard' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', '石山雄一.vcf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
});
</script>

<style lang="scss">
.contact-actions {
  margin: 20px auto;
  text-align: center;

  .download-vcard-btn {
    background-color: #666;
  }

  .add-contact-btn,
  .download-vcard-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    margin: 5px;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    background-color: #44a045;
    border: none;
    border-radius: 8px;
    box-shadow: 0 2px 4px #0000001a;
    transition: all 0.3s ease;

    // &:disabled {
    //   cursor: not-allowed;
    //   background-color: #ccc;
    // }
  }

  .contact-icon {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
}

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
