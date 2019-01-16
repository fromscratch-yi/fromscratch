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
          <div class="tab_item" v-if="tabsel == 'service'">
            <section class="work_wrap">
              <h2 class="item_ttl">UseD</h2>
              <carousel paginationActiveColor="rgb(64, 161, 63)" :perPage="1" :scrollPerPage="true" :perPageCustom="[[480, 2]]" :paginationPadding="8">
                <slide>
                  <div class="img_wrap"><img src="~assets/img/works/web/used1.png" alt="used"></div>
                </slide>
                <slide>
                  <div class="img_wrap"><img src="~assets/img/works/web/used2.png" alt="used"></div>
                </slide>
              </carousel>
              <ul class="skill_list">
                <li class="tag">Android Java</li>
                <li class="tag">SQLite</li>
                <li class="tag">AndroidStudio</li>
              </ul>
              <p class="item_desc">This is Android Native App. The Name is UseD.<br>It is an application I made to recognize my own waste.<br>You can classify expenses into three types of spend, waste, investment, and you can see the proportion of expenditure.<br>And you will notice how we are wasting money</p>
            </section>
            <section class="work_wrap">
              <h2 class="item_ttl">Employee Management System</h2>
              <carousel paginationActiveColor="rgb(64, 161, 63)" :perPage="1" :scrollPerPage="true" :perPageCustom="[[480, 2]]" :paginationPadding="8">
                <slide>
                  <div class="img_wrap"><img src="~assets/img/works/web/ems1.png" alt="ems"></div>
                </slide>
                <slide>
                  <div class="img_wrap"><img src="~assets/img/works/web/ems2.png" alt="ems"></div>
                </slide>
                <slide>
                  <div class="img_wrap"><img src="~assets/img/works/web/ems3.png" alt="ems"></div>
                </slide>
              </carousel>
              <ul class="skill_list">
                <li class="tag">PHP</li>
                <li class="tag">Laravel</li>
                <li class="tag">PostgreSQL</li>
                <li class="tag">HTML</li>
                <li class="tag">CSS</li>
                <li class="tag">jQuery</li>
                <li class="tag">AWS</li>
                <li class="tag">Docker</li>
                <li class="tag">Responsive</li>
              </ul>
              <p class="item_desc">This web application solves the problem that employee's face and name do not match.<br>And it make communication easier by profile page.<br>I was in charge of all planning, designing and implementation as New Project.<br><br>Note: Administrator screen is omitted.</p>
            </section>
            <section class="work_wrap">
              <h2 class="item_ttl">Sales Management System</h2>
              <carousel paginationActiveColor="rgb(64, 161, 63)" :perPage="1" :scrollPerPage="true" :perPageCustom="[[480, 2]]" :paginationPadding="8">
                <slide>
                  <div class="img_wrap"><img src="~assets/img/works/web/sms1.png" alt="Sales Management System"></div>
                </slide>
                <slide>
                  <div class="img_wrap"><img src="~assets/img/works/web/sms2.png" alt="Sales Management System"></div>
                </slide>
                <slide>
                  <div class="img_wrap"><img src="~assets/img/works/web/sms3.png" alt="Sales Management System"></div>
                </slide>
              </carousel>
              <ul class="skill_list">
                <li class="tag">PHP</li>
                <li class="tag">Laravel</li>
                <li class="tag">MySQL</li>
                <li class="tag">HTML</li>
                <li class="tag">CSS</li>
                <li class="tag">jQuery</li>
                <li class="tag">Vagrant</li>
              </ul>
              <p class="item_desc">They managed sales by peper. So I developed salse management app of web application. <br>It's can manage salses on PC. And they made sales comparison easier.</p>
            </section>
          </div>
        </transition>

        <!-- Web site -->
        <transition>
          <div class="tab_item" v-if="tabsel == 'web'">
            <section class="work_wrap">
              <h2 class="item_ttl">FromScratch</h2>
              <carousel paginationActiveColor="rgb(64, 161, 63)" :perPage="1" :scrollPerPage="true" :perPageCustom="[[480, 2]]" :paginationPadding="8">
                <slide>
                  <div class="img_wrap"><img src="~assets/img/works/web/fromscratch1.png" alt="FromScratch Web"></div>
                </slide>
                <slide>
                  <div class="img_wrap"><img src="~assets/img/works/web/fromscratch2.png" alt="FromScratch Web 2"></div>
                </slide>
                <slide>
                  <div class="img_wrap"><img src="~assets/img/works/web/fromscratch3.png" alt="FromScratch Web 3"></div>
                </slide>
              </carousel>
              <ul class="skill_list">
                <li class="tag">Nuxt.js</li>
                <li class="tag">Vue.js</li>
                <li class="tag">HTML</li>
                <li class="tag">CSS</li>
                <li class="tag">Bluma</li>
                <li class="tag">Firebase</li>
                <li class="tag">Responsive</li>
              </ul>
              <p class="item_desc">This is my portfolio site. The Name is <span class="em_txt">FromScratch</span>.<br>I want to keep to try that I create products of high quality. So I want to develop <span class="em_txt">FromScratch</span>. No template and no format.</p>
            </section>
            <section class="work_wrap">
              <h2 class="item_ttl">The relation, Inc.</h2>
              <carousel paginationActiveColor="rgb(64, 161, 63)" :perPage="1" :scrollPerPage="true" :perPageCustom="[[480, 2]]" :paginationPadding="8">
                <slide>
                  <div class="img_wrap"><img src="~assets/img/works/web/relation1.png" alt="relation Web"></div>
                </slide>
                <slide>
                  <div class="img_wrap"><img src="~assets/img/works/web/relation2.png" alt="relation Web 2"></div>
                </slide>
              </carousel>
              <ul class="skill_list">
                <li class="tag">PHP</li>
                <li class="tag">jQuery</li>
                <li class="tag">HTML</li>
                <li class="tag">CSS</li>
                <li class="tag">Bootstrap</li>
                <li class="tag">Responsive</li>
              </ul>
              <p class="item_desc">The relation, Inc. is a system development company.<br>I was in charge of all planning, designing and implementation as Renewal project.</p>
            </section>
            <section class="work_wrap">
              <h2 class="item_ttl">The Dairid, Inc. (Unaman)</h2>
              <carousel paginationActiveColor="rgb(64, 161, 63)" :perPage="1" :scrollPerPage="true" :perPageCustom="[[480, 2]]" :paginationPadding="8">
                <slide>
                  <div class="img_wrap"><img src="~assets/img/works/web/unaman1.png" alt="unaman Web"></div>
                </slide>
                <slide>
                  <div class="img_wrap"><img src="~assets/img/works/web/unaman2.png" alt="unaman Web 2"></div>
                </slide>
              </carousel>
              <ul class="skill_list">
                <li class="tag">jQuery</li>
                <li class="tag">HTML</li>
                <li class="tag">CSS</li>
                <li class="tag">Bootstrap</li>
                <li class="tag">Responsive</li>
              </ul>
              <p class="item_desc">The Unaman is specialty store of eel.<br>This is my first work in my life. I was in charge of all planning, designing and implementation as New Project.</p>
            </section>
          </div>
        </transition>

        <!-- Busines Cards -->
        <transition>
          <div class="tab_item" v-if="tabsel == 'card'">
            <section class="work_wrap">
              <h2 class="item_ttl">FromScratch</h2>
              <carousel paginationActiveColor="rgb(64, 161, 63)" :perPage="1" :scrollPerPage="true" :perPageCustom="[[480, 2]]" :paginationPadding="8">
                <slide>
                  <div class="img_wrap"><img src="~assets/img/works/bc/fromscratch1.png" alt="FromScratch 名刺"></div>
                </slide>
                <slide>
                  <div class="img_wrap"><img src="~assets/img/works/bc/fromscratch2.png" alt="FromScratch 名刺 裏"></div>
                </slide>
              </carousel>
              <ul class="skill_list">
                <li class="tag">Photoshop</li>
              </ul>
              <p class="item_desc">This is a my Business Card.<br>I designed all including Logo.</p>
            </section>
            <section class="work_wrap">
              <h2 class="item_ttl">ch.create</h2>
              <div class="img_wrap"><img src="~assets/img/works/bc/chcreate.png" alt="ch.create 名刺"></div>
              <ul class="skill_list">
                <li class="tag">Photoshop</li>
              </ul>
              <p class="item_desc">The ch.create is construction company.<br>I designed all including Logo.</p>
            </section>
            <section class="work_wrap">
              <h2 class="item_ttl">T'z Auto</h2>
              <carousel paginationActiveColor="rgb(64, 161, 63)" :perPage="1" :scrollPerPage="true" :perPageCustom="[[480, 2]]" :paginationPadding="8">
                <slide>
                  <div class="img_wrap"><img src="~assets/img/works/bc/tzauto1.png" alt="Tz Auto 名刺"></div>
                </slide>
                <slide>
                  <div class="img_wrap"><img src="~assets/img/works/bc/tzauto2.png" alt="Tz Auto 名刺 裏"></div>
                </slide>
              </carousel>
              <ul class="skill_list">
                <li class="tag">Photoshop</li>
              </ul>
              <p class="item_desc">The T'z Auto is car repairer company.<br>I designed all including Logo.</p>
            </section>
          </div>
        </transition>
        <p class="note">Note: For the sake of personal information and confidentiality obligation, I'm changing or hidden some display. </p>
      </div>
    </div>

    <!-- FootNav -->
    <div class="max_size_wrap link_wrap">
      <div class="inner_contents_wrap center_p">
        <p class="left"><nuxt-link to="/about">About</nuxt-link></p>
        <p class="right"><nuxt-link to="/blog">Blog</nuxt-link></p>
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
.page_contents .tabs li a:hover {
  border-bottom-width: 2px;
}
.page_contents .tabs li.is-active a {
  border-bottom-color: rgb(64, 161, 63);
  border-bottom-width: 2px;
  color: rgb(64, 161, 63);
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
  padding: 10px 0 20px;
  border-bottom: 1px #7b7b7b dashed;
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
  background: rgb(64, 161, 63);
}
.skill_list {
  margin-top: 15px;
  font-size: 12px;
  text-align: center;
}
.skill_list li.tag {
  font-size: 12px;
  color: rgb(255, 142, 26);
  margin-bottom: 5px;
}
.tab_item .work_wrap .item_desc {
  margin: 5px 0 0;
  text-align: center;
  font-size: 13px;
}
.em_txt {
  font-weight: bold;
  color: rgb(71, 160, 61);
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
  transform: translateX(100%);
}
.v-leave-to {
  transform: translateX(-100%);
}
</style>

