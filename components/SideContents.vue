<template>
  <div class="side_contents">
    <div class="content_wrap about_wrap">
      <h2><font-awesome-icon icon="id-card"/>About Me</h2>
      <div class="inner">
        <figure class="profile_img image">
          <picture>
            <source type="image/webp" srcset="~assets/img/YuichiIshiyama.webp"/>
            <img class="is-rounded" src="~assets/img/YuichiIshiyama.jpg" :alt="$t('about.name')" width="200" height="200">
          </picture>
        </figure>
        <h3 class="name" v-html="$t('about.name')"></h3>
        <div class="introduction_wrap" v-html="$t('about.kind')"></div>
        <div class="links">
          <p class="link_btn">
            <nuxt-link :to="$i18n.path('about/')"><span class="em_txt">A</span>bout</nuxt-link>
          </p>
          <p class="link_btn">
            <nuxt-link :to="$i18n.path('work/')"><span class="em_txt">W</span>ork</nuxt-link>
          </p>
        </div>
      </div>
    </div>
    <div class="content_wrap sticky_wrap">
      <h2><font-awesome-icon icon="folder-open"/>Categories</h2>
      <div class="inner">
        <Accordion
          v-bind:key="'Technology'"
          :icon="'laptop-code'"
          :title="$t('blog.categories.technology.title')"
          :categories="[
            {
              'title': 'All',
              'link': 'technology/'
            },
            {
              'title': $t('blog.categories.technology.subCategory.frontend'),
              'link': 'technology/frontend/'
            },
            {
              'title': $t('blog.categories.technology.subCategory.backend'),
              'link': 'technology/backend/'
            },
            {
              'title': $t('blog.categories.technology.subCategory.mobile'),
              'link': 'technology/mobile/'
            },
            {
              'title': $t('blog.categories.technology.subCategory.infrastructure'),
              'link': 'technology/infrastructure/'
            },
            {
              'title': $t('blog.categories.technology.subCategory.other'),
              'link': 'technology/other/'
            }
          ]">
        </Accordion>

        <Accordion
          v-bind:key="'BusinessLife'"
          :icon="'user-tie'"
          :title="$t('blog.categories.businesslife.title')"
          :categories="[
            {
              'title': 'All',　'link': 'businesslife/'
            },
            {
              'title': $t('blog.categories.businesslife.subCategory.motivation'),
              'link': 'businesslife/motivation/'
            },
            {
              'title': $t('blog.categories.businesslife.subCategory.management'),
              'link': 'businesslife/management/'
            },
            {
              'title': $t('blog.categories.businesslife.subCategory.blogskill'),
              'link': 'businesslife/blogskill/'
            },
            {
              'title': $t('blog.categories.businesslife.subCategory.lifestyle'),
              'link': 'businesslife/lifestyle/'
            },
            {
              'title': $t('blog.categories.businesslife.subCategory.other'),
              'link': 'businesslife/other/'
            }
          ]">
        </Accordion>
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from '~/components/Accordion.vue';
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  components: {
    Accordion,
  }
}
</script>

<style>
.side_contents {
  display: flex;
  flex-direction: column;
}
.side_contents .content_wrap {
  background: #fff;
  border-radius: 5px;
  filter: drop-shadow(3px 3px 7px rgba(0,0,0,0.1));
  margin-bottom: 20px;
}
.side_contents .content_wrap:last-child {
  margin-bottom: 0;
}
.side_contents .content_wrap.sticky_wrap {
  position: sticky;
  position: -webkit-sticky;
  top: 20px;
}
.side_contents .content_wrap h2 {
  padding: 10px 20px;
  font-size: 20px;
  font-weight: bold;
  color: #4a4a4a;
  background: #77c76e;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
.side_contents .content_wrap h2 svg {
  margin-right: 10px;
}
.side_contents .content_wrap .inner {
  padding: 15px 20px;
}
.side_contents .about_wrap .inner figure {
  max-width: 200px;
  margin: 0 auto;
  text-align: center;
}
.side_contents .about_wrap .inner .name {
  font-size: 18px;
  padding: 15px 0 10px;
  text-align: center;
}
.side_contents .about_wrap .inner .links {
  display: flex;
  margin: 15px 0 0;
}
.side_contents .about_wrap .inner .links .link_btn {
  text-align: center;
  width: calc(50% - 7px);
}
.side_contents .about_wrap .inner .links .link_btn a {
  display: block;
  padding: 10px;
  border: 2px solid rgb(71, 160, 61);
  border-radius: 3px;
  text-align: center;
  color: rgb(74, 74, 74);;
}
.side_contents .about_wrap .inner .links .link_btn a span {
  font-weight: bold;
  color: rgb(71, 160, 61);
}
.side_contents .about_wrap .inner .links .link_btn a:hover {
  color: #fff;
  background: rgb(71, 160, 61);
}
.side_contents .about_wrap .inner .links .link_btn a:hover span {
  color: #fff;
}
.side_contents .about_wrap .inner .links .link_btn:last-child {
  margin-left: auto;
}
.side_contents .content_wrap .inner .category_wrap .main_category {
  cursor: pointer;
  font-size: 18px;
}
.side_contents .content_wrap .inner .category_wrap:first-child {
  border-bottom: 2px dashed #77c76e;
  padding-bottom: 15px;
  margin-bottom: 15px;
}
.side_contents .content_wrap .inner .category_wrap .sub_category_wrap {
  padding-top: 10px;
}
.side_contents .content_wrap .inner .category_wrap .sub_category_wrap li {
  position: relative;
  padding: 10px 10px 10px 30px;
}
.side_contents .content_wrap .inner .category_wrap .sub_category_wrap li::after {
    display: block;
    position: absolute;
    top: 50%;
    left: 10px;
    width: 6px;
    height: 6px;
    margin: -3px 0 0;
    border-top: 2px solid rgb(115, 115, 115);
    border-right: 2px solid rgb(115, 115, 115);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    content: "";
}
.side_contents .content_wrap .inner .category_wrap .sub_category_wrap li a {
  color: rgb(70, 68, 68);
}
.side_contents .content_wrap .inner .category_wrap .sub_category_wrap li a:hover {
  text-decoration: underline;
}
/* タブレット以上用 */
@media screen and (min-width: 768px) {

}
</style>