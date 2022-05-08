<template>
  <header id="default-header" :class="{ 'is-open': isMenuOpen, default: isFixed }">
    <div class="header-inner">
      <div class="left-logo-wrap">
        <nuxt-link :to="localePath('index')">
          <logo-img :size="30" />
        </nuxt-link>
        <p class="header-ttl">
          <small>Yuichi Ishiyama</small>
          <span>FromScratch</span>
        </p>
      </div>
      <div class="menu-wrap" :class="{ 'is-open': isMenuOpen }">
        <div class="searc-icon" @click="toggleSearchForm">
          <img
            v-if="!isSearchFormOpen"
            src="~/assets/images/icon/ico_search.png"
            alt="search icon"
            width="30"
            height="30"
          />
          <img
            v-else
            src="~/assets/images/icon/ico_search_off.png"
            alt="search icon"
            width="30"
            height="30"
          />
        </div>
        <div class="menu-icon" @click="toggleMenu"><span></span><span></span><span></span></div>
        <div class="menu-contents">
          <logo-img :size="35" />
          <site-nav />
          <locale-switch />
        </div>
      </div>
    </div>
    <search-form v-show="isSearchFormOpen" class="search-form-wrap" />
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'DefaultHeader',
  props: {
    isFixed: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data(): {
    isMenuOpen: boolean;
    isSearchFormOpen: boolean;
  } {
    return {
      isMenuOpen: false,
      isSearchFormOpen: false,
    };
  },
  watch: {
    $route(): void {
      this.isMenuOpen = false;
      this.isSearchFormOpen = false;
    },
  },
  methods: {
    toggleMenu(): void {
      this.isMenuOpen = !this.isMenuOpen;
      const el = document.body;
      if (this.isMenuOpen) {
        el.classList.add('is-open');
      } else {
        el.classList.remove('is-open');
      }
    },
    toggleSearchForm(): void {
      this.isSearchFormOpen = !this.isSearchFormOpen;
    },
  },
});
</script>

<style lang="scss">
#default-header {
  position: sticky;
  top: 0;
  z-index: 2;
  padding: 5px 15px;
  background: #ffffffc8;

  @include tablet {
    position: static;

    &.default {
      position: sticky;
    }
  }

  &.is-open {
    z-index: 999;
    @include tablet {
      z-index: 2;
    }
  }

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1300px;
    margin: 0 auto;

    .left-logo-wrap {
      display: flex;
      align-items: center;

      a {
        display: inline-block;
      }

      .header-ttl {
        margin: 3px 0 0 8px;

        span,
        small {
          display: block;
          line-height: 1;
          color: #4a4a4a;
          letter-spacing: normal;
        }

        small {
          margin: 0 0 2px;
          font-size: 11px;
        }

        span {
          font-size: 15px;
        }
      }
    }

    .menu-wrap {
      display: flex;
      align-items: center;

      .searc-icon {
        margin-right: 5px;
        cursor: pointer;
      }

      .menu-icon {
        position: relative;
        z-index: 10;
        display: block;
        width: 42px;
        height: 42px;
        text-align: center;
        cursor: pointer;
        @include tablet {
          display: none;
        }

        span {
          position: absolute;
          right: 0;
          display: block;
          width: 35px;
          height: 2px;
          background: $sub-color;
          transition: 0.3s ease-in-out;

          &:nth-child(1) {
            top: 10px;
          }

          &:nth-child(2) {
            top: 20px;
            width: 28px;
          }

          &:nth-child(3) {
            top: 30px;
            width: 20px;
          }
        }
      }

      .menu-contents {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 5;
        padding: 10px 15px;
        overflow: hidden;
        text-align: center;
        background-color: $main-color;
        transition: all 500ms ease;
        transform: translateX(100%);
        @include tablet {
          position: static;
          top: auto;
          right: auto;
          bottom: auto;
          left: auto;
          z-index: auto;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          background: none;
          transition: none;
          transform: none;
        }

        .logo-img-wrap {
          width: 100%;
          margin: 15vh 0 8vh;
          text-align: center;
          @include tablet {
            display: none;
          }
        }
      }

      &.is-open {
        .menu-icon {
          transition: all 0.3s ease-in-out;
          transition-delay: 0.6s;
          transform: rotate(45deg);

          span {
            left: 6px;

            &:nth-child(1),
            &:nth-child(3) {
              width: 30px;
              transition-delay: 0.3s;
            }

            &:nth-child(1) {
              transform: translateY(4px);
            }

            &:nth-child(2) {
              width: 0;
            }

            &:nth-child(3) {
              transform: translateY(-16px) rotate(90deg);
            }
          }
        }

        .menu-contents {
          transform: translateX(0);
        }
      }
    }
  }

  .search-form-wrap {
    margin: 5px 0 0;
    border-top: 1px solid #e4e4e4;
    box-shadow: 0 10px 10px -5px #b5b5b533;
  }
}
</style>
