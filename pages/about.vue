<template>
  <article id="about">
    <default-page-title title="About" />
    <terminal :text="text" />

    <section class="profile-wrap">
      <div class="basic-info-wrap">
        <div class="name-and-tags">
          <p class="position">{{ $t('about.position') }}</p>
          <h3 class="name" v-html="$t('about.name')"></h3>
          <skill-tags :tags="$t('about.tags')" />
        </div>
        <div class="profile-img-wrap">
          <profile-img />
        </div>
      </div>
      <p class="introduction" v-html="$t('about.introduction')"></p>
    </section>

    <section class="skill-wrap">
      <h3 class="sec-ttl">Skills &amp; Tools</h3>
      <ul class="skill-list">
        <li v-for="(val, key) in $t('about.skills')" :key="key" class="skill-group">
          <h4 class="skill-ttl">{{ val.name }}</h4>
          <div class="skill-img-wrap" @click="openModal(key)">
            <img
              :src="require(`~/assets/images/icon/ico_${key}.png`)"
              :alt="val"
              width="280"
              height="280"
              loading="lazy"
            />
            <button type="button" class="detail-btn">{{ $t('about.detail') }}</button>
          </div>
          <modal
            :id="`${key}-modal`"
            :key="`${key}-modal`"
            class="skill-modal"
            :class="{ 'is-open': modalOpenKey == key }"
            :modal-title="val.name"
            @close="closeModal"
          >
            <p class="comment">{{ val.comment }}</p>
            <ul class="main-skill">
              <li v-for="(skill, idx) in skills[key].main" :key="idx" class="skill-img">
                <img
                  :src="require(`~/assets/images/skills/${skill}.png`)"
                  :alt="skill"
                  width="200"
                  height="200"
                  loading="lazy"
                />
              </li>
            </ul>
            <skill-tags :tags="skills[key].tags"></skill-tags>
          </modal>
        </li>
      </ul>
    </section>

    <section class="carrer-wrap">
      <h3 class="sec-ttl">Carrer</h3>
      <table class="carrer-tbl">
        <thead>
          <tr>
            <th v-for="(val, idx) in $t('about.careerTblHead')" :key="idx">{{ val }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, idx) in $t('about.careerList')" :key="idx">
            <td class="term">
              <span class="from">{{ data.from }}</span>
              <span class="term-icon">~</span>
              <span class="to">{{ data.to }}</span>
            </td>
            <td class="overview">
              <span class="kind" :class="data.kind">{{ $t(`about.${data.kind}`) }}</span>
              <p class="title" v-html="data.title"></p>
            </td>
            <td class="skills">
              <skill-tags :tags="data.skills"></skill-tags>
            </td>
          </tr>
        </tbody>
      </table>
      <p class="attention">{{ $t('about.note') }}</p>
    </section>

    <div class="bottom-page-link-wrap">
      <bottom-page-link position="left" to="index" name="Top" />
      <bottom-page-link position="right" to="work" name="Work" />
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue';
import Meta from '~/assets/mixins/meta';
export default Vue.extend({
  name: 'AboutPage',
  mixins: [Meta],
  layout: 'default',
  data(): {
    modalOpenKey: String;
    skills: object;
    text: String;
    meta: object;
  } {
    return {
      modalOpenKey: '',
      skills: {
        frontend: {
          main: ['html-css-js', 'vue', 'react'],
          tags: [
            'HTML',
            'CSS',
            'Javascript',
            'Pug',
            'Blade',
            'Twig',
            'SCSS',
            'jQuery',
            'Node.js',
            'React.js',
            'Vue.js',
            'Next.js',
            'Nuxt.js',
            'Google Apps Script',
          ],
        },
        backend: {
          main: ['php', 'python', 'swift'],
          tags: [
            'PHP',
            'Python',
            'Swift',
            'Laravel',
            'Yii2',
            'WordPress',
            'Flask',
            'Django',
            'Java',
            'Spring Boot',
            'SQLite',
            'MySQL',
            'PostgreSQL',
          ],
        },
        server: {
          main: ['docker', 'aws', 'gcp'],
          tags: [
            'Docker',
            'AWS',
            'GCP',
            'Firebase',
            'EC2',
            'DynamoDB',
            'Lambda',
            'Cloud Functions',
            'Bigquery',
            'Nginx',
            'Appache',
          ],
        },
        other: {
          main: ['git', 'vscode', 'xd'],
          tags: [
            'Git',
            'VSCode',
            'XD',
            'Photoshop',
            'GoogleAnalytics',
            'GoogleTagManager',
            'CicleCI',
            'Contentful',
            'XCode',
            'Slack',
            'Discord',
            'iTerm2',
          ],
        },
      },
      text: "$ cat ./about.txt\n> This is Yuichi Ishiyama's Profile.\n> Who am I? Can I do?",
      meta: {
        title: this.$t('about.title'),
        description: this.$t('about.description'),
      },
    };
  },
  methods: {
    closeModal(): void {
      this.modalOpenKey = '';
    },
    openModal(key: String): void {
      this.modalOpenKey = key;
    },
  },
});
</script>

<style lang="scss" scoped>
#about {
  .profile-wrap {
    max-width: 1000px;
    margin: 40px auto 50px;
    @include tablet {
      margin: 60px auto 70px;
    }

    .basic-info-wrap {
      margin: 0 0 40px;
      @include tablet {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 30px;
      }

      .name-and-tags {
        padding: 0 15px;

        @include tablet {
          width: calc(100% - 220px);
          padding: 0;
        }

        .position {
          font-size: 13px;
          color: #666;
        }

        .name {
          display: flex;
          align-items: flex-end;
          margin: 3px 0 15px;
          font-size: 25px;
          line-height: 1;
          letter-spacing: 7px;
        }
      }

      .profile-img-wrap {
        position: relative;
        height: 40vh;
        padding: 100px 0 40px;
        margin: 30px 0 120px;
        text-align: center;
        background-image: url('~/assets/css/images/about_bg.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        @include tablet {
          height: auto;
          padding: 0;
          margin: 0;
          background: none;
        }

        picture {
          position: absolute;
          bottom: -85px;
          left: calc(50% - 85px);
          width: 170px;
          height: 170px;
          margin: 0 auto;

          @include tablet {
            position: static;
            width: 200px;
            height: 200px;
          }

          @include tablet {
            position: static;
          }
        }
      }
    }

    .introduction {
      padding: 0 15px;
      line-height: 2;

      @include tablet {
        padding: 0 30px;
        font-size: 16px;
        line-height: 2.3;
      }
    }
  }

  section {
    .sec-ttl {
      margin: 0 auto 10px;
      font-size: 28px;
      text-align: center;
      letter-spacing: 3px;
      @include tablet {
        font-size: 35px;
      }
    }
  }

  .skill-wrap {
    padding: 40px 15px 50px;
    margin: 50px auto;
    background: $main-color;

    .sec-ttl {
      color: $txt-wh-color;
    }

    .skill-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 1000px;
      margin: 0 auto;

      .skill-group {
        width: calc(50% - 20px);
        margin: 30px 0 0;
        color: $sub-color;
        text-align: center;
        @include tablet {
          width: calc(25% - 40px);
        }

        .skill-ttl {
          margin: 0 0 10px;
          font-size: 15px;
          font-weight: bold;
          text-align: center;
        }

        .skill-img-wrap {
          max-width: 120px;
          margin: 0 auto;
          text-align: center;
          cursor: pointer;
          transition: transform 0.2s linear;
          transform: scale(0.95);
          @include tablet {
            max-width: 140px;
          }
          @include pc {
            max-width: 150px;
          }

          &:hover {
            transform: scale(1);
          }

          .detail-btn {
            padding: 6px 10px;
            margin: -40px 0 0;
            font-size: 12px;
            font-weight: bold;
            color: #1b200c;
            background: $accent-color;
            border-radius: 5px;
          }
        }
      }

      .comment {
        font-size: 14px;
        line-height: 1.7;
        color: $main-color;
        text-align: left;
      }

      .main-skill {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px 0;
        @include tablet {
          justify-content: space-evenly;
        }

        .skill-img {
          width: calc(100% / 3 - 20px);
          max-width: 100px;
          margin: 0 15px;
          text-align: center;

          img {
            width: 100%;
          }
        }
      }
    }
  }

  .carrer-wrap {
    max-width: 1000px;
    padding: 0 10px;
    margin: 0 auto 40px;
    @include tablet {
      padding: 0 20px;
    }

    .carrer-tbl {
      margin: 40px auto 0;

      thead {
        display: none;
        @include tablet {
          display: table-header-group;

          th {
            padding: 10px 15px;
            font-size: 15px;
            color: #666;
            text-align: left;
          }
        }
      }

      tbody {
        tr {
          position: relative;
          display: block;
          padding: 0 10px 10px;
          margin: 0 0 20px;
          border-bottom: 1px solid #d1d1d1;

          &:last-child {
            margin: 0;
          }
          @include tablet {
            display: table-row;
            padding: 0;
            margin: 0;
          }

          td {
            display: block;
            @include tablet {
              display: table-cell;
              padding: 35px 15px 15px;
            }

            &.term {
              font-family: monospace;
              font-size: 13px;
              color: #666;
              @include tablet {
                padding-left: 5px;
                white-space: nowrap;
              }
            }

            &.overview {
              .kind {
                position: absolute;
                top: 0;
                right: 15px;
                padding: 4px 10px;
                font-size: 12px;
                border-radius: 3px;
                box-shadow: 1px 4px 5px #d1d1d1;

                &.main {
                  background: #ffdfa4;
                }

                &.sub {
                  background: #d0e3ff;
                }
                @include tablet {
                  top: 0;
                  right: auto;
                  left: 0;
                  border-radius: 0;
                  box-shadow: none;
                }
              }

              .title {
                margin: 10px 0;
                font-size: 14px;
                font-weight: bold;
                color: #555;
                @include tablet {
                  margin: 0;
                  font-size: 15px;
                  white-space: nowrap;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
#about .profile-wrap .basic-info-wrap .name-and-tags .name small {
  display: inline-block;
  font-size: 18px;
  line-height: 1.2;
  color: #666;
  letter-spacing: 2px;
}
</style>
