/* eslint-disable prefer-const */
<template>
  <article id="work">
    <default-page-title title="Work" />
    <terminal :text="text" />
    <p class="page-explain">{{ $t('work.explain') }}</p>

    <div class="tabs-container" :class="{ 'zindex-one': isTabZindexone }">
      <ul ref="tabMenu" class="tab-menu">
        <li
          v-for="(tab, key, index) in $t('work.tabs')"
          :key="key"
          :class="{ active: activeTab == index }"
          @click="selectTab(index)"
        >
          {{ tab }}
        </li>
      </ul>
    </div>

    <div class="tab-list-container">
      <client-only>
        <ul ref="tabsList" class="tab-data-list">
          <li
            v-for="(works, key, index) in $t('work.works')"
            :key="key"
            ref="tabItems"
            class="tab-wrap"
            :class="{ active: activeTab == index }"
          >
            <ul class="work-list">
              <li v-for="work in works" :key="work.prefix" class="work-wrap">
                <div class="head-wrap">
                  <div class="ttl-wrap">
                    <p class="sub-ttl">{{ work.subTitle }}</p>
                    <p v-if="work.link" class="ttl">
                      <a :href="work.link" class="ex-link" target="_blank">{{ work.title }}</a>
                    </p>
                    <p v-else class="ttl">{{ work.title }}</p>
                  </div>
                  <p class="kind">{{ work.kind }}</p>
                </div>
                <div v-if="work.imgCount > 1" class="img-wrap">
                  <carousel
                    pagination-active-color="rgb(64, 161, 63)"
                    :per-page="1"
                    :scroll-per-page="true"
                    :per-page-custom="[[480, 2]]"
                    :pagination-padding="8"
                  >
                    <slide v-for="imgIndex in work.imgCount" :key="imgIndex">
                      <webp-image
                        :file-name="`/images/works/${key}/${work.prefix}${imgIndex}`"
                        :alt="`${work.title}${imgIndex}`"
                        :width="325"
                        :height="364"
                      />
                    </slide>
                  </carousel>
                </div>
                <div v-else class="img-wrap one-img">
                  <webp-image
                    :file-name="`/images/works/${key}/${work.prefix}${work.imgCount}`"
                    :alt="`${work.title}${work.imgCount}`"
                    :width="400"
                    :height="364"
                  />
                </div>
                <skill-tags class="work-skills" :tags="work.skillSet" />
                <p class="overview" v-html="work.overview"></p>
              </li>
            </ul>
          </li>
        </ul>
      </client-only>
      <p class="attention">{{ $t('work.note') }}</p>
    </div>
    <div class="bottom-page-link-wrap">
      <bottom-page-link position="left" to="about" name="About" />
      <bottom-page-link position="right" to="blog" name="Blog" />
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue';
import Meta from '~/assets/mixins/meta';
let Carousel = null;
let Slide = null;
if (process.browser) {
  Carousel = require('vue-carousel').Carousel;
  Slide = require('vue-carousel').Slide;
}
export default Vue.extend({
  name: 'WorkPage',
  components: {
    Carousel,
    Slide,
  },
  mixins: [Meta],
  layout: 'default',
  data(): {
    activeTab: number;
    offsetRight: number;
    isTabZindexone: boolean;
    text: String;
    meta: Object;
  } {
    return {
      activeTab: 0,
      offsetRight: 0,
      isTabZindexone: true,
      text: "$ cat ./work.txt\n> I'll show my private works.\n> I'm going to create more.",
      meta: {
        title: this.$t('work.title'),
        description: this.$t('work.description'),
      },
    };
  },
  mounted() {
    window.addEventListener('scroll', this.checkIsTabZindexone, { passive: true });
    window.addEventListener('resize', this.onResize);
  },
  methods: {
    selectTab(index: number) {
      const tabsList = this.$refs.tabsList as HTMLLIElement;
      this.scrollTab(this.calculationTopOffset(), () => {
        this.activeTab = index;
        this.offsetRight = tabsList.clientWidth * index;
        this.setTabStyle();
      });
    },
    scrollTab(offset: number, callback: () => void) {
      const fixedOffset = offset.toFixed();
      const onScroll = () => {
        if (Number(window.pageYOffset.toFixed()) <= Number(fixedOffset) + 1) {
          window.removeEventListener('scroll', onScroll);
          callback();
        }
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    },
    setTabStyle() {
      const tabsList = this.$refs.tabsList as HTMLLIElement;
      const tabItems = this.$refs.tabItems as HTMLElement[];
      const height = tabItems[this.activeTab].clientHeight;
      tabsList.style.right = this.offsetRight + 'px';
      tabsList.style.height = height + 'px';
    },
    onResize() {
      const tabsList = this.$refs.tabsList as HTMLLIElement;
      this.offsetRight = tabsList.clientWidth * this.activeTab;
      this.setTabStyle();
    },
    checkIsTabZindexone() {
      this.isTabZindexone = window.scrollY < this.calculationTopOffset() << 0;
    },
    calculationTopOffset() {
      const tabsList = this.$refs.tabsList as HTMLLIElement;
      const tabMenu = this.$refs.tabMenu as HTMLElement;
      if (typeof tabsList === 'undefined' || typeof tabMenu === 'undefined') {
        return 0;
      }
      const recTop = tabsList.getBoundingClientRect().top;
      const offsetTop = window.pageYOffset;
      return recTop + offsetTop - tabMenu.getBoundingClientRect().height;
    },
  },
});
</script>

<style lang="scss" scoped>
#work {
  .tabs-container {
    position: sticky;
    top: 0;
    z-index: 99;
    margin: 0;
    background: #fff;
    box-shadow: 0 2px 5px 0 #b4b4b424;

    &.zindex-one {
      z-index: 1;
    }

    .tab-menu {
      display: flex;
      flex-direction: row;
      max-width: 1000px;
      margin: 0 auto;

      li {
        position: relative;
        flex: 1;
        padding: 20px 0;
        font-size: 15px;
        font-weight: bold;
        line-height: 1;
        color: #666;
        text-align: center;
        cursor: pointer;
        border-right: 1px solid #d1d1d1d0;

        /* &:first-child {
        } */

        &:last-child {
          border-right: 0;
        }

        &::after {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0%;
          height: 2px;
          content: '';
          background: $dark-sub-color;
          transition: width 0.5s ease;
          transform: translate(-50%, 0%);
        }

        &.active {
          color: $dark-sub-color;

          &::after {
            width: 100%;
          }
        }
      }
    }
  }

  .tab-list-container {
    position: relative;
    overflow: hidden;
    background: #fff;

    .tab-data-list {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 0;
      margin: 0;
      transition: all 0.5s linear;

      .tab-wrap {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        min-width: 100%;
        opacity: 0;
        transition: opacity 0.5 ease;

        &.active {
          opacity: 1;
        }

        .work-list {
          max-width: 1000px;
          padding: 20px 0 30px;
          margin: 0 auto;

          .work-wrap {
            position: relative;
            padding: 30px 15px;
            border-bottom: 1px solid #d1d1d1d0;
            @include tablet {
              padding: 40px 20px;
            }

            &:first-child {
              border-top: 1px solid #d1d1d1d0;
            }

            .head-wrap {
              margin: 0 0 10px;

              .sub-ttl {
                margin: 0 0 3px;
                font-size: 12px;
                color: #666;
                @include tablet {
                  font-size: 14px;
                }
              }

              .ttl {
                font-size: 17px;
                color: #666;
                letter-spacing: 1px;
                @include tablet {
                  font-size: 20px;
                }
              }

              .ex-link {
                display: block;
              }

              .kind {
                position: absolute;
                top: 0;
                right: 0;
                padding: 3px 6px;
                margin-left: 10px;
                font-size: 12px;
                color: $main-color;
                letter-spacing: 2px;
                white-space: nowrap;
                background: $accent-color;
              }
            }

            .img-wrap {
              max-width: 800px;
              margin: 20px auto;
            }

            .skill-tags {
              margin: 0 0 5px;
            }

            .overview {
              font-size: 14px;
              line-height: 1.8;
              @include tablet {
                font-size: 15px;
              }
            }
          }
        }
      }
    }

    .attention {
      max-width: 1000px;
      padding: 0 15px;
      margin: 0 auto 30px;
      @include tablet {
        padding: 0 20px;
      }
    }
  }
}
</style>
<style lang="scss">
/* stylelint-disable-next-line selector-class-pattern */
.VueCarousel-pagination {
  margin: -20px 0 0 !important;
}
</style>
