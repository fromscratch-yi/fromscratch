<template>
  <div id="breadcrumb">
    <ul class="breadcrumb-list">
      <li v-for="breadcrumb in breadcrumbs" :key="breadcrumb.name">
        <nuxt-link
          v-if="breadcrumb.path"
          :to="breadcrumb.path"
          class="breadcrumb-link"
          :aria-current="breadcrumb.path == $route.path ? 'page' : ''"
          >{{ breadcrumb.name }}</nuxt-link
        >
        <span v-else class="breadcrumb-name">{{ breadcrumb.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
const siteURL = process.env.BASE_URL;
export default Vue.extend({
  name: 'BreadcrumbList',
  props: {
    breadcrumbs: {
      type: Array,
      required: true,
    },
  },
  head(): object {
    const hid = `jsonld-${(this as any)._uid}`;
    return {
      script: [
        {
          hid,
          type: 'application/ld+json',
          innerHTML: JSON.stringify(this.jsonld, null, 2),
        },
      ],
      __dangerouslyDisableSanitizersByTagID: {
        [hid]: 'innerHTML',
      },
    };
  },
  computed: {
    jsonld() {
      const items = Array.prototype.map.call(Object(this.breadcrumbs), (item, index) => ({
        '@type': 'ListItem',
        name: item.name.toString(),
        position: index + 1,
        item: {
          '@id': `'${siteURL}/${item.path.toString()}`,
        },
      }));
      return {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        name: 'BreadcrumbList',
        itemListElement: items,
      };
    },
    // isCurrentPage() {
    //   console.log(breadcrumb.path);
    // },
  },
});
</script>

<style lang="scss" scoped>
#breadcrumb {
  max-width: 1300px;
  padding: 20px 15px 15px;
  margin: 0 auto;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  background-color: #ececec;

  &::-webkit-scrollbar {
    display: none;
  }

  .breadcrumb-list {
    display: flex;
    align-items: center;

    li {
      position: relative;
      padding-right: 30px;
      font-size: 14px;
      font-size: 12px;
      white-space: nowrap;

      &::after {
        position: absolute;
        top: 50%;
        right: 15px;
        display: block;
        width: 8px;
        height: 8px;
        margin: -4px 0 0;
        content: '';
        border-top: 2px solid #474747;
        border-right: 2px solid #474747;
        transform: rotate(45deg);
      }

      &:last-child::after {
        display: none;
      }
      @include tablet {
        font-size: 14px;
      }

      a {
        font-weight: bold;
        color: #067206;

        &[aria-current='page'] {
          color: #777;
        }
      }

      .breadcrumb-name {
        font-weight: bold;
        color: #666;
      }
    }
  }
}
</style>
