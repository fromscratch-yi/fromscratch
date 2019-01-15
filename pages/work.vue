<template>
  <div class="contents_area">
    <div class="max_size_wrap">
      <div class="inner_contents_wrap">
        <TitleDescription :titleDescData="titleDescData"></TitleDescription>
        <Terminal :typeTxt="typeTxt"></Terminal>
      </div>
    </div>
    <ul class="tabs is-centered">
      <TabItem
        v-for="item in list"
        v-bind="item" :key="item.id"
        v-model="currentId"/>
    </ul>
    <div class="tab_contents">
      <transition>
        <section class="item" :key="currentId">
          <h2>{{ current.label }}</h2>
          <div v-if="current.label == 'Services'">
            <carousel :perPage="1" :scrollPerPage="true" :perPageCustom="[[480, 2], [768, 3]]" :paginationPadding="8">
              <slide>
                <div class="img_wrap"><img src="https://www.hokende.com/pcsp/sp/images/top/categories/medical.png"></div>
              </slide>
              <slide>
                <div class="img_wrap"><img src="https://www.hokende.com/pcsp/sp/images/top/categories/cancer.png"></div>
              </slide>
              <slide>
                <div class="img_wrap"><img src="https://www.hokende.com/pcsp/sp/images/top/categories/medical.png"></div>
              </slide>
              <slide>
                <div class="img_wrap"><img src="https://www.hokende.com/pcsp/sp/images/top/categories/cancer.png"></div>
              </slide>
            </carousel>
          </div>
          <div v-if="current.label == 'Web Pages'">
            <carousel :perPage="1" :scrollPerPage="true" :perPageCustom="[[480, 2], [768, 3]]" :paginationPadding="8">
              <slide>
                <div class="img_wrap"><img src="https://www.hokende.com/pcsp/sp/images/top/categories/medical.png"></div>
              </slide>
              <slide>
                <div class="img_wrap"><img src="https://www.hokende.com/pcsp/sp/images/top/categories/cancer.png"></div>
              </slide>
              <slide>
                <div class="img_wrap"><img src="https://www.hokende.com/pcsp/sp/images/top/categories/medical.png"></div>
              </slide>
              <slide>
                <div class="img_wrap"><img src="https://www.hokende.com/pcsp/sp/images/top/categories/cancer.png"></div>
              </slide>
            </carousel>
          </div>
          <div v-if="current.label == 'Busines Card'">
            <carousel :perPage="1" :scrollPerPage="true" :perPageCustom="[[480, 2], [768, 3]]" :paginationPadding="8">
              <slide>
                <div class="img_wrap"><img src="https://www.hokende.com/pcsp/sp/images/top/categories/medical.png"></div>
              </slide>
              <slide>
                <div class="img_wrap"><img src="https://www.hokende.com/pcsp/sp/images/top/categories/cancer.png"></div>
              </slide>
              <slide>
                <div class="img_wrap"><img src="https://www.hokende.com/pcsp/sp/images/top/categories/medical.png"></div>
              </slide>
              <slide>
                <div class="img_wrap"><img src="https://www.hokende.com/pcsp/sp/images/top/categories/cancer.png"></div>
              </slide>
            </carousel>
          </div>
        </section>
      </transition>
    </div>
  </div>
</template>

<script>
import TitleDescription from "~/components/TitleDescription.vue";
import Terminal from "~/components/Terminal.vue";
import TabItem from '~/components/TabItem.vue';
import Carousel from 'vue-carousel/src/Carousel.vue';
import Slide from 'vue-carousel/src/Slide.vue';
export default {
  components: {
    TitleDescription,
    Terminal,
    TabItem,
    Carousel,
    Slide
  },
  data(context){
    var titleDescData = {
      title: 'Work',
      description: 'This is Yuichi Ishiyama&apos;s Works Page.'
    };
    var typeTxt = '$ cat ./work.txt\n\> I\'ll show my private works.\n\> I\'m going to create more.';
    var services = document.getElementById('services');
    var webPages = document.getElementById('web_pages');
    var businesCard = document.getElementById('busines_card');
    return { titleDescData, typeTxt, currentId: 1,
      list: [
        { id: 1, label: 'Services', content: 'コンテンツ1' },
        { id: 2, label: 'Web Pages', content: 'コンテンツ2' },
        { id: 3, label: 'Busines Card', content: 'コンテンツ3' }
      ] }
  },
  computed: {
    current() {
      return this.list.find(el => el.id === this.currentId) || {}
    }
  }
}
</script>

<style>
.img_wrap {
  text-align: center;
}
.tab_contents {
  position: relative;
  overflow: hidden;
}
.item {
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  transition: all 0.8s ease;
}
/* トランジション用スタイル */
.v-leave-active {
  position: absolute;
}
.v-enter {
  transform: translateX(-100%);
}
.v-leave-to {
  transform: translateX(100%);
}
</style>

