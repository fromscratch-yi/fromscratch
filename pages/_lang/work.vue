<template>
  <div class="contents_area">
    <div class="max_size_wrap">
      <div class="inner_contents_wrap">
        <NormalTitleDescription :meta="meta"></NormalTitleDescription>
        <Terminal :typeTxt="typeTxt"></Terminal>
      </div>
    </div>
    <div class="slide_wrap page_description">
      <div class="slide_box move">
        <p class="" v-html="$t('work.introduction')"></p>
      </div>
    </div>
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
              <h2 class="item_ttl">WasTim</h2>
              <client-only>
                <carousel style="max-width: 800px;margin: 0 auto;" v-if="showCarousel" paginationActiveColor="rgb(64, 161, 63)" :perPage="1" :scrollPerPage="true" :perPageCustom="[[480, 2]]" :paginationPadding="8">
                  <slide>
                    <div class="img_wrap">
                      <picture>
                        <source type="image/webp" srcset="~assets/img/works/web/wastim1.webp" />
                        <img src="~assets/img/works/web/wastim1.png" alt="wastim 画面1" width="325" height="364">
                      </picture>
                    </div>
                  </slide>
                  <slide>
                    <div class="img_wrap">
                      <picture>
                        <source type="image/webp" srcset="~assets/img/works/web/wastim2.webp" />
                        <img src="~assets/img/works/web/wastim2.png" alt="wastim 画面2" width="325" height="364">
                      </picture>
                    </div>
                  </slide>
                  <slide>
                    <div class="img_wrap">
                      <picture>
                        <source type="image/webp" srcset="~assets/img/works/web/wastim3.webp" />
                        <img src="~assets/img/works/web/wastim3.png" alt="wastim 画面3" width="325" height="364">
                      </picture>
                    </div>
                  </slide>
                  <slide>
                    <div class="img_wrap">
                      <picture>
                        <source type="image/webp" srcset="~assets/img/works/web/wastim4.webp" />
                        <img src="~assets/img/works/web/wastim4.png" alt="wastim 画面4" width="325" height="364">
                      </picture>
                    </div>
                  </slide>
                  <slide>
                    <div class="img_wrap">
                      <picture>
                        <source type="image/webp" srcset="~assets/img/works/web/wastim5.webp" />
                        <img src="~assets/img/works/web/wastim5.png" alt="wastim 画面5" width="325" height="364">
                      </picture>
                    </div>
                  </slide>
                  <slide>
                    <div class="img_wrap">
                      <picture>
                        <source type="image/webp" srcset="~assets/img/works/web/wastim6.webp" />
                        <img src="~assets/img/works/web/wastim6.png" alt="wastim 画面6" width="325" height="364">
                      </picture>
                    </div>
                  </slide>
                </carousel>
              </client-only>
              <ul class="skill_list">
                <li class="tag">Vue.js</li>
                <li class="tag">Nuxt.js</li>
                <li class="tag">HTML(pug)</li>
                <li class="tag">CSS(scss)</li>
                <li class="tag">Firebase Hosting</li>
                <li class="tag">Firebase Function</li>
                <li class="tag">Firebase Authentication</li>
                <li class="tag">Firebase Firestore</li>
                <li class="tag">Responsive</li>
              </ul>
              <div>
                <p class=" item_desc" v-html="$t('work.overview.wastim')"></p>
              </div>
            </section>
            <section class="work_wrap">
              <h2 class="item_ttl">UseD</h2>
              <client-only>
                <carousel style="max-width: 800px;margin: 0 auto;" v-if="showCarousel" paginationActiveColor="rgb(64, 161, 63)" :perPage="1" :scrollPerPage="true" :perPageCustom="[[480, 2]]" :paginationPadding="8">
                  <slide>
                    <div class="img_wrap">
                      <picture>
                        <source type="image/webp" srcset="~assets/img/works/web/used1.webp" />
                        <img src="~assets/img/works/web/used1.png" alt="used 画面1" width="325" height="364">
                      </picture>
                    </div>
                  </slide>
                  <slide>
                    <div class="img_wrap">
                      <picture>
                        <source type="image/webp" srcset="~assets/img/works/web/used2.webp" />
                        <img src="~assets/img/works/web/used2.png" alt="used 画面2" width="325" height="364">
                      </picture>
                    </div>
                  </slide>
                </carousel>
              </client-only>
              <ul class="skill_list">
                <li class="tag">Android Java</li>
                <li class="tag">SQLite</li>
                <li class="tag">AndroidStudio</li>
              </ul>
              <div>
                <p class=" item_desc" v-html="$t('work.overview.used')"></p>
              </div>
            </section>
            <section class="work_wrap">
              <h2 class="item_ttl">Employee Management System</h2>
              <client-only>
                <carousel style="max-width: 800px;margin: 0 auto;" v-if="showCarousel" paginationActiveColor="rgb(64, 161, 63)" :perPage="1" :scrollPerPage="true" :perPageCustom="[[480, 2]]" :paginationPadding="8">
                  <slide>
                    <div class="img_wrap">
                      <picture>
                        <source type="image/webp" srcset="~assets/img/works/web/ems1.webp" />
                        <img src="~assets/img/works/web/ems1.png" alt="ems 画面1" width="325" height="364">
                      </picture>
                    </div>
                  </slide>
                  <slide>
                    <div class="img_wrap">
                      <picture>
                        <source type="image/webp" srcset="~assets/img/works/web/ems2.webp" />
                        <img src="~assets/img/works/web/ems2.png" alt="ems 画面2" width="325" height="364">
                      </picture>
                    </div>
                  </slide>
                  <slide>
                    <div class="img_wrap">
                      <picture>
                        <source type="image/webp" srcset="~assets/img/works/web/ems3.webp" />
                        <img src="~assets/img/works/web/ems3.png" alt="ems 画面3" width="325" height="364">
                      </picture>
                    </div>
                  </slide>
                </carousel>
              </client-only>
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
              <div>
                <p class=" item_desc" v-html="$t('work.overview.ems')"></p>
              </div>
            </section>
            <section class="work_wrap">
              <h2 class="item_ttl">Sales Management System</h2>
              <client-only>
                <carousel style="max-width: 800px;margin: 0 auto;" v-if="showCarousel" paginationActiveColor="rgb(64, 161, 63)" :perPage="1" :scrollPerPage="true" :perPageCustom="[[480, 2]]" :paginationPadding="8">
                  <slide>
                    <div class="img_wrap">
                      <picture>
                        <source type="image/webp" srcset="~assets/img/works/web/sms1.webp" />
                        <img src="~assets/img/works/web/sms1.png" alt="Sales Management System 画面1" width="325" height="364">
                      </picture>
                    </div>
                  </slide>
                  <slide>
                    <div class="img_wrap">
                      <picture>
                        <source type="image/webp" srcset="~assets/img/works/web/sms2.webp" />
                        <img src="~assets/img/works/web/sms2.png" alt="Sales Management System 画面2" width="325" height="364">
                      </picture>
                    </div>
                  </slide>
                  <slide>
                    <div class="img_wrap">
                      <picture>
                        <source type="image/webp" srcset="~assets/img/works/web/sms3.webp" />
                        <img src="~assets/img/works/web/sms3.png" alt="Sales Management System 画面3" width="325" height="364">
                      </picture>
                    </div>
                  </slide>
                </carousel>
              </client-only>
              <ul class="skill_list">
                <li class="tag">PHP</li>
                <li class="tag">Laravel</li>
                <li class="tag">MySQL</li>
                <li class="tag">HTML</li>
                <li class="tag">CSS</li>
                <li class="tag">jQuery</li>
                <li class="tag">Vagrant</li>
              </ul>
              <div>
                <p class=" item_desc" v-html="$t('work.overview.sms')"></p>
              </div>
            </section>
            <section class="work_wrap">
              <h2 class="item_ttl">TimeRecorder System</h2>
              <client-only>
                <carousel style="max-width: 800px;margin: 0 auto;" v-if="showCarousel" paginationActiveColor="rgb(64, 161, 63)" :perPage="1" :scrollPerPage="true" :perPageCustom="[[480, 2]]" :paginationPadding="8">
                  <slide>
                    <div class="img_wrap">
                      <picture>
                        <source type="image/webp" srcset="~assets/img/works/web/timerecorder1.webp" />
                        <img src="~assets/img/works/web/timerecorder1.png" alt="Sales Management System 画面1" width="325" height="364">
                      </picture>
                    </div>
                  </slide>
                  <slide>
                    <div class="img_wrap">
                      <picture>
                        <source type="image/webp" srcset="~assets/img/works/web/timerecorder2.webp" />
                        <img src="~assets/img/works/web/timerecorder2.png" alt="Sales Management System 画面2" width="325" height="364">
                      </picture>
                    </div>
                  </slide>
                  <slide>
                    <div class="img_wrap">
                      <picture>
                        <source type="image/webp" srcset="~assets/img/works/web/timerecorder3.webp" />
                        <img src="~assets/img/works/web/timerecorder3.png" alt="Sales Management System 画面3" width="325" height="364">
                      </picture>
                    </div>
                  </slide>
                </carousel>
              </client-only>
              <ul class="skill_list">
                <li class="tag">PHP</li>
                <li class="tag">Laravel</li>
                <li class="tag">MySQL</li>
                <li class="tag">HTML</li>
                <li class="tag">CSS</li>
                <li class="tag">jQuery</li>
                <li class="tag">Docker</li>
              </ul>
              <div>
                <p class=" item_desc" v-html="$t('work.overview.timerecorder')"></p>
              </div>
            </section>
          </div>
        </transition>

        <!-- Web site -->
        <transition>
          <div class="tab_item" v-if="tabsel == 'web'">
            <section class="work_wrap">
              <h2 class="item_ttl">FromScratch</h2>
              <client-only>
                <carousel style="max-width: 800px;margin: 0 auto;" v-if="showCarousel" paginationActiveColor="rgb(64, 161, 63)" :perPage="1" :scrollPerPage="true" :perPageCustom="[[480, 2]]" :paginationPadding="8">
                  <slide>
                    <div class="img_wrap"><img src="~assets/img/works/web/fromscratch1.png" alt="FromScratch Web 1"></div>
                  </slide>
                  <slide>
                    <div class="img_wrap"><img src="~assets/img/works/web/fromscratch2.png" alt="FromScratch Web 2"></div>
                  </slide>
                  <slide>
                    <div class="img_wrap"><img src="~assets/img/works/web/fromscratch3.png" alt="FromScratch Web 3"></div>
                  </slide>
                </carousel>
              </client-only>
              <ul class="skill_list">
                <li class="tag">Nuxt.js</li>
                <li class="tag">Vue.js</li>
                <li class="tag">HTML</li>
                <li class="tag">CSS</li>
                <li class="tag">Bluma</li>
                <li class="tag">Firebase</li>
                <li class="tag">CircleCI</li>
                <li class="tag">Contentful</li>
                <li class="tag">Responsive</li>
              </ul>
              <div>
                <p class=" item_desc" v-html="$t('work.overview.portfolio')"></p>
              </div>
            </section>
            <section class="work_wrap">
              <h2 class="item_ttl">The relation, Inc.</h2>
              <client-only>
                <carousel style="max-width: 800px;margin: 0 auto;" v-if="showCarousel" paginationActiveColor="rgb(64, 161, 63)" :perPage="1" :scrollPerPage="true" :perPageCustom="[[480, 2]]" :paginationPadding="8">
                  <slide>
                    <div class="img_wrap"><img src="~assets/img/works/web/relation1.png" alt="relation Web 1"></div>
                  </slide>
                  <slide>
                    <div class="img_wrap"><img src="~assets/img/works/web/relation2.png" alt="relation Web 2"></div>
                  </slide>
                </carousel>
              </client-only>
              <ul class="skill_list">
                <li class="tag">PHP</li>
                <li class="tag">jQuery</li>
                <li class="tag">HTML</li>
                <li class="tag">CSS</li>
                <li class="tag">Bootstrap</li>
                <li class="tag">Responsive</li>
              </ul>
              <div>
                <p class=" item_desc" v-html="$t('work.overview.relation')"></p>
              </div>
            </section>
            <section class="work_wrap">
              <h2 class="item_ttl">The Dairid, Inc. (Unaman)</h2>
              <client-only>
                <carousel style="max-width: 800px;margin: 0 auto;" v-if="showCarousel" paginationActiveColor="rgb(64, 161, 63)" :perPage="1" :scrollPerPage="true" :perPageCustom="[[480, 2]]" :paginationPadding="8">
                  <slide>
                    <div class="img_wrap"><img src="~assets/img/works/web/unaman1.png" alt="unaman Web 1"></div>
                  </slide>
                  <slide>
                    <div class="img_wrap"><img src="~assets/img/works/web/unaman2.png" alt="unaman Web 2"></div>
                  </slide>
                </carousel>
              </client-only>
              <ul class="skill_list">
                <li class="tag">jQuery</li>
                <li class="tag">HTML(pug)</li>
                <li class="tag">CSS(scss)</li>
                <li class="tag">Gulp</li>
                <li class="tag">Bootstrap</li>
                <li class="tag">Responsive</li>
              </ul>
              <div>
                <p class=" item_desc" v-html="$t('work.overview.unaman')"></p>
              </div>
            </section>
          </div>
        </transition>

        <!-- Busines Cards -->
        <transition>
          <div class="tab_item" v-if="tabsel == 'card'">
            <section class="work_wrap">
              <h2 class="item_ttl">FromScratch</h2>
              <client-only>
                <carousel style="max-width: 800px;margin: 0 auto;" v-if="showCarousel" paginationActiveColor="rgb(64, 161, 63)" :perPage="1" :scrollPerPage="true" :perPageCustom="[[480, 2]]" :paginationPadding="8">
                  <slide>
                    <div class="img_wrap"><img src="~assets/img/works/bc/fromscratch1.png" alt="FromScratch 名刺"></div>
                  </slide>
                  <slide>
                    <div class="img_wrap"><img src="~assets/img/works/bc/fromscratch2.png" alt="FromScratch 名刺 裏"></div>
                  </slide>
                </carousel>
              </client-only>
              <ul class="skill_list">
                <li class="tag">Photoshop</li>
              </ul>
              <div>
                <p class=" item_desc" v-html="$t('work.overview.fromscratch')"></p>
              </div>
            </section>
            <section class="work_wrap">
              <h2 class="item_ttl">ch.create</h2>
              <div class="img_wrap"><img src="~assets/img/works/bc/chcreate.png" alt="ch.create 名刺"></div>
              <ul class="skill_list">
                <li class="tag">Photoshop</li>
              </ul>
              <div>
                <p class=" item_desc" v-html="$t('work.overview.chcreate')"></p>
              </div>
            </section>
            <section class="work_wrap">
              <h2 class="item_ttl">T'z Auto</h2>
              <client-only>
                <carousel style="max-width: 800px;margin: 0 auto;" v-if="showCarousel" paginationActiveColor="rgb(64, 161, 63)" :perPage="1" :scrollPerPage="true" :perPageCustom="[[480, 2]]" :paginationPadding="8">
                  <slide>
                    <div class="img_wrap"><img src="~assets/img/works/bc/tzauto1.png" alt="Tz Auto 名刺"></div>
                  </slide>
                  <slide>
                    <div class="img_wrap"><img src="~assets/img/works/bc/tzauto2.png" alt="Tz Auto 名刺 裏"></div>
                  </slide>
                </carousel>
              </client-only>
              <ul class="skill_list">
                <li class="tag">Photoshop</li>
              </ul>
              <div>
                <p class=" item_desc" v-html="$t('work.overview.tzauto')"></p>
              </div>
            </section>
          </div>
        </transition>
        <p class="note" v-html="$t('work.note')"></p>
      </div>
    </div>

    <!-- FootNav -->
    <div class="max_size_wrap link_wrap">
      <div class="inner_contents_wrap center_p">
        <p class="left"><nuxt-link :to="$i18n.path('about/')">About</nuxt-link></p>
        <p class="right"><nuxt-link :to="$i18n.path('blog/')">Blog</nuxt-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import NormalTitleDescription from "~/components/NormalTitleDescription.vue";
import Terminal from "~/components/Terminal.vue";
export default {
  components: {
    NormalTitleDescription,
    Terminal,
    Carousel: () =>
      import('vue-carousel')
        .then(m => m.Carousel)
        .catch(),
    Slide: () =>
      import('vue-carousel')
        .then(m => m.Slide)
        .catch()
  },
  methods: {
    handleScroll: (evt, el) => {
      let top = el.getBoundingClientRect().top;
      var offcet = 0;
      if (window.innerHeight > 900) {
        offcet = 1200;
      } else {
        offcet = 600;
      }
      if (window.scrollY > top + window.pageYOffset - offcet) {
        el.classList.add('move');
        return true;
      }
      return false;
    }
  },
  data(){
    var meta = {
      headline: 'Work',
      title: this.$t('work.pageTitle'),
      description: this.$t('work.description'),
      type: 'article',
      url: this.$route.fullPath,
      image: 'https://fromscratch-y.work/ogp.gif',
      lang: this.$i18n.locale
    };
    var typeTxt = '$ cat ./work.txt\n\> I\'ll show my private works.\n\> I\'m going to create more.';
    return { meta, typeTxt, tabsel: "service", showCarousel: false }
  },
  mounted() {
    this.showCarousel = true
  },
}
</script>

<style scoped>
.slide_wrap {
  text-align: center;
}

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
  margin: 35px 15px;
  text-align: center;
}
.page_contents .tabs {
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 99;
  margin: 0;
  box-shadow: 2px 3px 3px hsla(0,0%,70.5%,.2);
}
.page_contents .tabs li a {
  padding: 15px 20px;
  font-weight: bold;
}
.page_contents .tabs li a:hover {
  border-bottom-width: 2px;
}
.page_contents .tabs li.is-active a {
  border-bottom-color: rgb(54, 134, 54);
  border-bottom-width: 2px;
  color: rgb(54, 134, 54);
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
  padding: 25px 0 35px;
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
.tab_item .work_wrap .skill_list {
  max-width: 700px;
  margin: 15px auto 10px;
  text-align: center;
}
.tab_item .work_wrap .skill_list li.tag {
  font-size: 12px;
  border:1px solid rgb(255, 142, 26);
  color: #464646;
  margin-bottom: 5px;
}
.tab_item .work_wrap .slide_box {
  display: block;
}
.tab_item .work_wrap .item_desc {
  max-width: 680px;
  margin: 5px auto 0;
  text-align: left;
  font-size: 14px;
  line-height: 1.9;
  padding: 10px 5px 0;
}
.em_txt {
  font-weight: bold;
  color: rgb(57, 128, 50);
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
.VueCarousel-dot {
  margin-top: 0;
}
.VueCarousel-dot-container {
  margin-top: 0 !important;
}
@media screen and (min-width: 768px) {
  .tab_item .work_wrap .item_ttl {
    font-size: 20px;
    margin-bottom: 15px;
  }
  .tab_item .work_wrap .item_desc {
    font-size: 16px;
  }
  .tab_item .work_wrap .skill_list li.tag {
    font-size: 14px;
  }
  .page_contents .tabs li a {
    font-size: 20px;
    font-size: bold;
  }
}
</style>

