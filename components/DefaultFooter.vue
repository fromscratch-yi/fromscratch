<template>
  <footer id="default-footer">
    <div class="footer-contents">
      <section class="profile-wrap">
        <h2 class="profile">Profile</h2>
        <div class="footer-sec-inner">
          <profile-img />
          <h3 class="name" v-html="$t('about.name')"></h3>
          <p class="introduction" v-html="$t('about.introduction')"></p>
          <sns-list />
        </div>
      </section>
      <section class="link-wrap">
        <div class="link-container">
          <h2 class="pages">Pages</h2>
          <nav class="page-nav">
            <ul>
              <li class="menu-item">
                <nuxt-link class="menu-link" :to="localePath('index')"
                  ><span class="initial">T</span>op</nuxt-link
                >
              </li>
              <li class="menu-item">
                <nuxt-link class="menu-link" :to="localePath('about')"
                  ><span class="initial">A</span>bout</nuxt-link
                >
              </li>
              <li class="menu-item">
                <nuxt-link class="menu-link" :to="localePath('work')"
                  ><span class="initial">W</span>ork</nuxt-link
                >
              </li>
              <li class="menu-item">
                <nuxt-link class="menu-link" :to="localePath('blog')"
                  ><span class="initial">B</span>log</nuxt-link
                >
              </li>
            </ul>
          </nav>
        </div>
        <div class="link-container">
          <h2 class="category">Categories</h2>
          <nav class="blog-category-nav">
            <ul>
              <li v-for="(value, key) in categories" :key="key" class="category-wrap">
                <blog-category-link :type="key" :name="value.name" :explain="value.explain" />
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
    <footer-copy />
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';
import { BlogCategory } from '@/libs/contentful';
export default Vue.extend({
  name: 'DefaultFooter',
  computed: {
    categories(): BlogCategory {
      return this.$t('category') as BlogCategory;
    },
  },
});
</script>

<style lang="scss" scoped>
#default-footer {
  padding: 35px 0 0;
  background: #fff;
  border-top: 1px solid #e7e7e7;

  .footer-contents {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1300px;
    padding: 0 15px;
    margin: 0 auto;
    @include tablet {
      padding: 0 20px;
    }

    section {
      width: 100%;

      h2 {
        width: 100%;
        padding: 0 10px 10px 32px;
        font-size: 20px;
        line-height: 1;
        background-repeat: no-repeat;
        background-position: 5px left;
        background-size: 23px;
        border-bottom: 2px dashed $sub-color;

        &.profile {
          background-image: url('~/assets/css/images/ico-profile.png');
        }

        &.pages {
          background-image: url('~/assets/css/images/ico-pages.png');
        }

        &.category {
          background-image: url('~/assets/css/images/ico-category.png');
        }
      }

      .footer-sec-inner {
        padding: 13px 10px;
      }
    }

    .profile-wrap {
      margin: 0 auto 40px;
      font-size: 14px;
      @include tablet {
        width: 60%;
        margin: 0;
      }

      .profile-img {
        display: block;
        padding: 20px 0 0;
        text-align: center;
        @include tablet {
          float: right;
          padding: 20px;

          img {
            width: 175px;
          }
        }
      }

      .name {
        margin: 30px auto 10px;
        font-size: 18px;
        font-weight: 540;
        color: #555;
        letter-spacing: 2.5px;
      }

      .introduction {
        margin: 0 0 30px;
        line-height: 1.9;
      }
    }

    .link-wrap {
      @include tablet {
        width: calc(40% - 30px);
      }

      .link-container {
        margin: 0 auto 40px;

        &:last-child {
          margin: 0 auto;
        }

        nav {
          padding: 20px 10px 0;
        }

        .page-nav {
          ul {
            display: flex;
            flex-wrap: wrap;

            .menu-item {
              width: 50%;
              text-align: center;
              border: 1px solid $sub-color;

              &:nth-child(1) {
                border-right: none;
                border-bottom: none;
              }

              &:nth-child(2) {
                border-bottom: none;
              }

              &:nth-child(3) {
                border-right: none;
              }

              a.menu-link {
                display: block;
                padding: 10px;
                font-size: 18px;
                font-weight: bold;
                color: #666;
                transition: background 0.5s ease;

                &:hover {
                  background: #dcffdcac;
                }

                &[aria-current='page'] {
                  background: #e6e6e6bb;
                }

                .initial {
                  font-size: 22px;
                  color: $sub-color;
                }
              }
            }
          }
        }

        .blog-category-nav {
          padding: 5px 0 0;
        }
      }
    }
  }
}
</style>
<style lang="scss">
#default-footer .footer-contents .profile-wrap .name {
  small {
    @include tablet {
      display: block;
    }
    @include pc {
      display: inline;
    }
  }
}
</style>
