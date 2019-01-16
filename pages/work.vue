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
        <li v-bind:class="{ 'is-active': tabsel == 'service' }" @click="tabsel = 'service'"><a>Service</a></li>
        <li v-bind:class="{ 'is-active': tabsel == 'web' }" @click="tabsel = 'web'"><a>Web Site</a></li>
        <li v-bind:class="{ 'is-active': tabsel == 'card' }" @click="tabsel = 'card'"><a>Busines Card</a></li>
      </ul>
    </div>

    <!-- Tab panes -->
    <div class="max_size_wrap">
      <div class="inner_contents_wrap tab_contents">
        <!-- Service -->
        <transition>
          <div class="tab_item" v-show="tabsel == 'service'">
            <p>No data.</p>
          </div>
        </transition>

        <!-- Web site -->
        <transition>
          <div class="tab_item" v-show="tabsel == 'web'">
            <p>No data.</p>
          </div>
        </transition>

        <!-- Busines Cards -->
        <transition>
          <div class="tab_item" v-show="tabsel == 'card'">
            <section class="work_wrap">
              <h2 class="item_ttl">FromScratch</h2>
              <carousel :perPage="1" :scrollPerPage="true" :perPageCustom="[[480, 2]]" :paginationPadding="8">
                <slide>
                  <div class="img_wrap"><img src="~assets/img/works/bc/fromscratch1.png" alt="fromscratch 名刺"></div>
                </slide>
                <slide>
                  <div class="img_wrap"><img src="~assets/img/works/bc/fromscratch2.png" alt="fromscratch 名刺 裏"></div>
                </slide>
              </carousel>
              <p class="item_desc">Busines Card and Logo's Design that used photoshop.</p>
            </section>
            <section class="work_wrap">
              <h2 class="item_ttl">ch.create</h2>
              <div class="img_wrap"><img src="~assets/img/works/bc/chcreate.png" alt="ch.create 名刺"></div>
              <p class="item_desc">Busines Card and Logo's Design that used photoshop.</p>
            </section>
            <section class="work_wrap">
              <h2 class="item_ttl">T'z Auto</h2>
              <carousel :perPage="1" :scrollPerPage="true" :perPageCustom="[[480, 2]]" :paginationPadding="8">
                <slide>
                  <div class="img_wrap"><img src="~assets/img/works/bc/tzauto1.png" alt="Tz Auto 名刺"></div>
                </slide>
                <slide>
                  <div class="img_wrap"><img src="~assets/img/works/bc/tzauto2.png" alt="Tz Auto 名刺 裏"></div>
                </slide>
              </carousel>
              <p class="item_desc">Busines Card and Logo's Design that used photoshop.</p>
            </section>
          </div>
        </transition>
        <p class="note">Note: For the sake of personal information and confidentiality obligation, I'm changing or hidden some display. </p>
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

}
.page_contents .tabs li.is-active a {
  border-bottom-color: rgb(36, 189, 18);
  border-bottom-width: 2px;
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
.tab_item .work_wrap {
  margin: 20px 0 0;
}
.tab_item .work_wrap .item_ttl {
  position: relative;
  padding: 5px 0 5px 15px;
  margin: 0 0 5px;
  font-size: 16px;
}
.tab_item .work_wrap .item_ttl::before {
  position: absolute;
  content: '';
  width: 10px;
  height: 10px;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  background: rgb(86, 193, 85);
}
.tab_item .work_wrap .item_desc {
  padding: 15px 0 20px;
  text-align: center;
  font-size: 13px;
  border-bottom: 1px #7b7b7b dashed;
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

