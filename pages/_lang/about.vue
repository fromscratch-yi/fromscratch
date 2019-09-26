<template>
  <div class="contents_area">
    <div class="max_size_wrap">
      <div class="inner_contents_wrap">
        <TitleDescription :meta="meta"></TitleDescription>
        <Terminal :typeTxt="typeTxt"></Terminal>
        <section class="columns is-tablet inner">
          <div class="column is-three-fifths name_space">
            <div class="slide_box move">
              <h2 class="slide_txt" v-html="$t('about.name')"></h2>
            </div>
            <div class="slide_box move">
              <p class="slide_txt" v-html="$t('about.kind')"></p>
            </div>
          </div>
          <div class="column profile_area">
            <div class="image_area">
              <figure class="move rotation_img image is-square">
                <picture>
                  <source type="image/webp" srcset="~assets/img/YuichiIshiyama.webp"/>
                  <img class="is-rounded" src="~assets/img/YuichiIshiyama.jpg" :alt="$t('about.name')" width="200" height="200">
                </picture>
              </figure>
            </div>
          </div>
        </section>
        <div class="slide_box" v-scroll="handleScroll">
          <p class="slide_txt profile_txt" v-html="$t('about.kind')"></p>
        </div>
      </div>
    </div>
    <div class="sub_contents_wrap">
      <section class="sub_contents">
        <h2>Skills &amp; Tools</h2>
        <div class="max_size_wrap columns is-tablet">
          <section class="column category fadein" v-scroll="handleScroll">
            <h3 class="category_ttl_wrap">
              <span class="category_name" v-html="$t('word.frontend')"></span>
              <picture>
                <source type="image/webp" srcset="~assets/img/icon_front.webp" />
                <img class="rotation_img" v-scroll="handleScroll" src="~assets/img/icon_front.png" :alt="$t('word.frontend')" width="100" height="100">
              </picture>
            </h3>
            <ul class="skill_list">
              <li>HTML</li>
              <li>CSS</li>
              <li>Twig</li>
              <li>Blade</li>
              <li>js</li>
              <li>jquery</li>
              <li>vue.js</li>
              <li>nuxt.js</li>
            </ul>
          </section>
          <section class="column category fadein" v-scroll="handleScroll">
            <h3 class="category_ttl_wrap">
              <span class="category_name" v-html="$t('word.backend')"></span>
              <picture>
                <source type="image/webp" srcset="~assets/img/icon_back.webp" />
                <img class="rotation_img" v-scroll="handleScroll" src="~assets/img/icon_back.png" :alt="$t('word.backend')" width="100" height="100">
              </picture>
            </h3>
            <ul class="skill_list">
              <li>PHP</li>
              <li>Laravel</li>
              <li>Yii2</li>
              <li>Python</li>
              <li>Java</li>
            </ul>
          </section>
          <section class="column category fadein" v-scroll="handleScroll">
            <h3 class="category_ttl_wrap">
              <span class="category_name" v-html="$t('word.mobile')"></span>
              <picture>
                <source type="image/webp" srcset="~assets/img/icon_mobile.webp" />
                <img class="rotation_img" v-scroll="handleScroll" src="~assets/img/icon_mobile.png" :alt="$t('word.mobile')" width="100" height="100">
              </picture>
            </h3>
            <ul class="skill_list">
              <li>Android Java</li>
              <li>Swift</li>
            </ul>
          </section>
          <section class="column category fadein" v-scroll="handleScroll">
            <h3 class="category_ttl_wrap">
              <span class="category_name" v-html="$t('word.other')"></span>
              <picture>
                <source type="image/webp" srcset="~assets/img/icon_other.webp" />
                <img class="rotation_img" v-scroll="handleScroll" src="~assets/img/icon_other.png" :alt="$t('word.other')" width="100" height="100">
              </picture>
            </h3>
            <ul class="skill_list">
              <li>Docker</li>
              <li>Vagrant</li>
              <li>Linux</li>
              <li>Mac</li>
              <li>VSCode</li>
              <li>Vim</li>
              <li>Chrome</li>
              <li>Firefox</li>
            </ul>
          </section>
        </div>
      </section>
      <section class="sub_contents fadein" v-scroll="handleScroll">
        <h2>Career</h2>
        <div class="max_size_wrap">
          <table class="table is-fullwidth">
            <thead>
              <tr>
                <th>About Projects</th>
                <th>Skills &amp; Tools</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="project in projects" :key="project.id" class="fadein" v-scroll="handleScroll">
                <td v-html="project.title"></td>
                <td>
                  <ul class="skill_list">
                    <li v-for="skill in project.skills" :key="skill.id" v-html="skill"></li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <p class="note" v-html="$t('about.note')"></p>
        </div>
      </section>
    </div>

    <!-- FootNav -->
    <div class="max_size_wrap link_wrap">
      <div class="inner_contents_wrap">
        <p class="right"><nuxt-link :to="$i18n.path('work/')">Work</nuxt-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import TitleDescription from "~/components/TitleDescription.vue";
import Terminal from "~/components/Terminal.vue";
export default {
  components: {
    TitleDescription,
    Terminal
  },
  data () {
    var meta = {
      headline: 'About',
      title: this.$t('about.pageTitle'),
      description: this.$t('about.description'),
      type: 'article',
      url: this.$route.fullPath,
      image: 'https://fromscratch-y.work/ogp.gif',
      lang: this.$i18n.locale
    };
    var typeTxt = '$ cat ./about.txt\n\> This is Yuichi Ishiyama\'s Profile.\n\> Who am I\? Can I do\?';
    var projects = this.$t('about.project');
    return { meta, typeTxt, projects }
  },
  methods: {
    handleScroll: (evt, el) => {
      let top = el.getBoundingClientRect().top;
      if (window.scrollY > top + window.pageYOffset - 600) {
        el.classList.add('move');
        return true;
      }
      return false;
    }
  },
}
</script>

<style>
/* animation */
@-webkit-keyframes slide_box {
  0% {
    left: 0;
    right: auto;
    width: 0;
  }
  50% {
    left: 0;
    right: auto;
    width: 100%;
  }
  51% {
    left: auto;
    right: 0;
    width: 100%;
  }
  100% {
    left: auto;
    right: 0;
    width: 0;
  }
}
@keyframes slide_box {
  0% {
    left: 0;
    width: 0;
  }
  50% {
    left: 0;
    width: 100%;
  }
  51% {
    left: 0;
    width: 100%;
  }
  100% {
    left: 100%;
    width: 0;
  }
}
@-webkit-keyframes slide_txt {
  0% { opacity: 0; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes slide_txt {
  0% { opacity:0; }
  50% { opacity:0; }
  100% { opacity:1; }
}
@keyframes fadein {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes rotation_img {
  0% {
    clip-path: circle(0 at 50% 50%);
    -webkit-clip-path: circle(0 at 50% 50%);
  }
  100% {
    clip-path: circle(100% at 50% 50%);
    -webkit-clip-path: circle(100% at 50% 50%);
  }
}
.slide_box {
  position: relative;
  display: inline-block;
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.slide_box:before {
  content: '';
  display: inline-block;
  width: 0;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  background: #44a043;
}
.slide_txt {
  opacity: 0;
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.slide_box.move:before {
  -webkit-animation: slide_box 1s ease 0s 1 normal forwards;
  animation: slide_box 1s ease 0s 1 normal forwards;
}
.slide_box.move .slide_txt {
  -webkit-animation: slide_txt 0s ease .5s 1 normal forwards;
  animation:slide_txt 0s ease .5s 1 normal forwards;
}
.fadein {
  opacity: 0;
}
.move.fadein {
  opacity: 1;
  animation: fadein 2s ease;
}
.rotation_img {
  opacity: 0;
}
.move.rotation_img {
  opacity: 1;
  animation: rotation_img 2s cubic-bezier(.4, 0, .2, 1);
}

.profile_area .image_area {
  max-width: 200px;
  margin: 0 auto;
}
.columns.inner {
  margin: 20px 0 0;
}
.columns.inner .name_space h2 {
  margin: 0 0 10px;
  font-size: 30px;
  line-height: 1.5;
}
.columns.inner .name_space h2 .name_jp {
  display: block;
  font-family: 'Meiryo';
  font-size: 18px;
}
.columns.inner .name_space p {
  font-size: 14px;
  line-height: 1.8;
  color: #595959;
}
.columns.inner .name_space p .em_color {
  color: #036600;
  font-weight: bold;
}
.profile_txt p .em_color {
  color: #036600;
  font-weight: bold;
}
.profile_txt {
  padding: 0.75rem 8px;
  font-size: 14px;
  line-height: 1.9;
  text-align: left;
}
.profile_txt p {
  margin-bottom: 10px;
}
.profile_txt p:last-child {
  margin-bottom: 0;
}
.sub_contents {
  padding: 35px 15px 40px;
}
.sub_contents:nth-child(odd) {
  margin: 20px 0 0;
  background-color: #1F1F1F;
  color: rgb(177, 177, 177);
}
.sub_contents:last-child {
  padding-bottom: 0;
}
.sub_contents h2 {
  font-size: 25px;
  margin: 0 0 20px;
  text-align: center;
}
.sub_contents .category {
  padding: 30px 15px;
  max-width: 255px;
  margin: 0 auto;
}
.sub_contents .category .category_ttl_wrap {
  margin: 0 auto 10px;
  text-align: center;
}
.sub_contents .category .category_ttl_wrap img {
  display: block;
  width: 100px;
  margin: 10px auto 15px;
}
.sub_contents .category .category_ttl_wrap .category_name {
  display: inline-block;
  padding: 5px;
  font-size: 15px;
  color: #62BE56;
  font-weight: bold;
}
.sub_contents .category .skill_list {
  font-size: 14px;
  text-align: center;
}
.sub_contents .category .skill_list li {
  display: inline;
}
.sub_contents .category .skill_list li::after {
  content: ',';
  margin-right: 2px;
}
.sub_contents .category .skill_list li:last-child::after {
  content: '';
  margin: 0;
}
.sub_contents .table {
  margin: 20px 0;
  font-size: 14px;
}
.sub_contents .table .skill_list li {
  float: left;
  font-size: 13px;
}
.sub_contents .table .skill_list li::after {
  content: ',';
  margin-right: 2px;
}
.sub_contents .table .skill_list li:last-child::after {
  content: '';
  margin: 0;
}
@media screen and (max-width: 769px) {
  .columns.inner .column {
    padding: 0.75rem 8px;
  }
  .columns.inner .column.profile_area {
    padding: 20px 10px;
  }
}
@media screen and (min-width: 769px) {
  .columns.inner {
    align-items: center;
    padding: 10px;
  }
  .columns.inner .name_space {
    width: 70%;
  }
  .profile_txt {
    padding: 1rem calc(1rem + 8px);
  }
}
footer {
  padding: 0;
}
.table td, .table th {
  padding: 15px;
  font-size: 12px;
}
.table thead td, .table thead th {
  padding: 15px;
  font-size: 15px;
}
</style>

