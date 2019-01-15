<template>
  <div class="contents_area">
    <div class="max_size_wrap">
      <div class="inner_contents_wrap">
        <TitleDescription :titleDescData="titleDescData"></TitleDescription>
        <Terminal :typeTxt="typeTxt"></Terminal>
      </div>
    </div>
    <p class="page_description">This is my private works.<br>Please have a look at it.</p>
    <div class="tabs is-centered">
      <ul>
        <li v-bind:class="{ 'is-active': tabsel == 'service' }" @click="tabsel = 'service'"><a>Services</a></li>
        <li v-bind:class="{ 'is-active': tabsel == 'web' }" @click="tabsel = 'web'"><a>Web Pages</a></li>
        <li v-bind:class="{ 'is-active': tabsel == 'card' }" @click="tabsel = 'card'"><a>Busines Card</a></li>
      </ul>
    </div>

    <!-- Tab panes -->
    <div class="max_size_wrap">
      <div class="inner_contents_wrap tab_contents">
        <transition>
          <div class="tab_item" v-if="tabsel == 'service'">
            <p>No data.</p>
          </div>
        </transition>
        <transition>
          <div class="tab_item" v-if="tabsel == 'web'">
            <p>No data.</p>
          </div>
        </transition>
        <transition>
          <!-- Busines Cards -->
          <div class="tab_item" v-if="tabsel == 'card'">
            <section class="work_wrap">
              <h2>FromScratch</h2>
              <carousel :perPage="1" :scrollPerPage="true" :perPageCustom="[[480, 2]]" :paginationPadding="8">
                <slide>
                  <div class="img_wrap"><img src="~assets/img/works/bc/fromscratch1.png" alt="fromscratch 名刺"></div>
                </slide>
                <slide>
                  <div class="img_wrap"><img src="~assets/img/works/bc/fromscratch2.png" alt="fromscratch 名刺 裏"></div>
                </slide>
              </carousel>
              <p>Busines Cards Design. Use Photoshop.</p>
            </section>
            <section class="work_wrap">
              <h2>ch.create</h2>
              <div class="img_wrap"><img src="~assets/img/works/bc/chcreate.png" alt="ch.create 名刺"></div>
              <p>Busines Cards Design. Use Photoshop.</p>
            </section>
            <section class="work_wrap">
              <h2>T'z Auto</h2>
              <carousel :perPage="1" :scrollPerPage="true" :perPageCustom="[[480, 2]]" :paginationPadding="8">
                <slide>
                  <div class="img_wrap"><img src="~assets/img/works/bc/tzauto1.png" alt="Tz Auto 名刺"></div>
                </slide>
                <slide>
                  <div class="img_wrap"><img src="~assets/img/works/bc/tzauto2.png" alt="Tz Auto 名刺 裏"></div>
                </slide>
              </carousel>
              <p>Busines Cards Design. Use Photoshop.</p>
            </section>
          </div>
        </transition>
      </div>
    </div>

    <!-- FootNav -->
    <div class="max_size_wrap link_wrap">
      <div class="inner_contents_wrap center_p">
        <p class="left"><nuxt-link to="/about">&larr; About</nuxt-link></p>
        <p class="right"><nuxt-link to="/blog">Blog &rarr;</nuxt-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import TitleDescription from "~/components/TitleDescription.vue";
import Terminal from "~/components/Terminal.vue";
import SliderImg from "~/components/SliderImg.vue";
import Carousel from 'vue-carousel/src/Carousel.vue';
import Slide from 'vue-carousel/src/Slide.vue';
export default {
  components: {
    TitleDescription,
    Terminal,
    SliderImg,
    Carousel,
    Slide
  },
  data(context){
    var titleDescData = {
      title: 'Work',
      description: 'This is Yuichi Ishiyama&apos;s Works Page.'
    };
    var typeTxt = '$ cat ./work.txt\n\> I\'ll show my private works.\n\> I\'m going to create more.';

    return { titleDescData, typeTxt, tabsel: "service"}
  }
}
</script>

<style>
.link_wrap .center_p .left,
.link_wrap .center_p .right {
  float: left;
  width: 50%;
}
.link_wrap::after {
  content: '';
  display: block;
  clear: both;
}
.page_description {
  margin: 20px 0;
  text-align: center;
}
.page_contents .tabs {
  margin: 0;
}
.page_contents .tabs li a {
  font-weight: bold;
  border-bottom-width: 2px;
}
.page_contents .tabs li.is-active a {
  border-bottom-color: rgb(36, 189, 18);
  color: rgb(36, 189, 18);
}
.page_contents .VueCarousel-pagination {
  margin-top: -30px;
}
.tab_contents {
  position: relative;
  overflow: hidden;
}
.tab_item {
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  transition: all 0.8s ease;
}
.tab_item .img_wrap {
  text-align: center;
}
.tab_item .img_wrap img {
  width: 500px;
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

