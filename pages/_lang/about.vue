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
          <div class="slide_txt profile_txt" v-html="$t('about.introduction')"></div>
        </div>
      </div>
    </div>
    <div class="sub_contents_wrap">
      <!-- Skill & Tools -->
      <section class="sub_contents">
        <h2>Skills &amp; Tools</h2>
        <div class="max_size_wrap columns is-tablet">
          <section v-for="(skill, skill_name) in skills" :key="skill_name" class="column category about_cate fadein" v-scroll="handleScroll">
            <h3 class="category_ttl_wrap">
              <span class="category_name" v-html="$t('word.' + skill_name)"></span>
              <picture class="link_img" @click="openModal($event, skill, skill_name)">
                <source type="image/webp" :srcset="require('~/assets/img/icon_' + skill_name + '.webp')"/>
                <img class="rotation_img" v-scroll="handleScroll" :src="require('~/assets/img/icon_' + skill_name + '.png')" :alt="$t('word.' + skill_name)" width="100" height="100">
              </picture>
            </h3>
            <ul class="skill_list">
              <li v-for="(lang, lang_name) in skill" :key="lang_name" v-html="lang_name"></li>
            </ul>
          </section>
        </div>
      </section>
      <!-- Career -->
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
      <!-- モーダル -->
      <section class="modal_sec">
        <skill-modal v-for="(skill, skill_name) in skills" :key="skill_name" :class="skill_name" :title="skill_name" :skills="skill" @close="closeModal"></skill-modal>
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
import SkillModal from "~/components/SkillModal.vue";
export default {
  components: {
    TitleDescription,
    Terminal,
    SkillModal
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
    var skill = [];
    var skills = {
      'frontend': {
        'HTML': '5',
        'CSS': '4.5',
        'Twig': '4',
        'Blade': '4',
        'js': '4.5',
        'jquery': '4',
        'vue.js': '3',
        'nuxt.js': '3'
      },
      'backend': {
        'PHP': '4.5',
        'Laravel': '4',
        'Yii2': '4',
        'Python': '3',
        'Java': '3',
        'Android Java': '3',
        'Swift': '2'
      },
      'other': {
        'AWS': '2',
        'GCP': '2',
        'Docker': '3.5',
        'Vagrant': '3',
        'Git': '4',
        'Svn': '4',
        'Linux': '3.5',
        'Mac': '4',
        'VSCode': '3.5',
        'Vim': '3',
      }
    };
    return { meta, typeTxt, projects, skills, skill }
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
    },
    openModal(event, skill, skill_name) {
      this.skill = skill;
      document.querySelector('.' + skill_name).classList.add('open')
    },
    closeModal(event) {
      var els = document.querySelectorAll('.modal_mask')
      for (var i = 0; i < els.length; i++) {
        els[i].classList.remove('open')
      }
    }
  },
}
</script>

<style scoped>
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
  font-size: 15px;
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
  font-size: 15px;
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
  margin: 35px 0 0;
  background-color: #1F1F1F;
  color: rgb(177, 177, 177);
}
.sub_contents:last-child {
  padding-bottom: 0;
}
.sub_contents h2 {
  font-size: 25px;
  margin: 10px 0 25px;
  text-align: center;
}
.sub_contents .category.about {
  padding: 30px 15px;
  max-width: 255px;
  margin: 0 auto;
}
.sub_contents .category.about_cate .category_ttl_wrap {
  margin: 0 auto 10px;
  text-align: center;
}
.sub_contents .category.about_cate .category_ttl_wrap picture {
  position: relative;
  display: inline-block;
}
.sub_contents .category.about_cate .category_ttl_wrap picture::before {
  position: absolute;
  content: 'Click!';
  bottom: -12px;
  left: 50%;
  padding: 5px 10px;
  border-radius: 10px;
  background: #62be56;
  color: #fff;
  font-weight: bold;
  z-index: 2;
  animation: textanimation 2s linear infinite 2s alternate;
  cursor: pointer;
}
.sub_contents .category.about_cate .category_ttl_wrap img {
  cursor: pointer;
  display: block;
  width: 135px;
  margin: 10px auto 15px;
}
.sub_contents .category.about_cate .category_ttl_wrap .category_name {
  display: block;
  padding: 5px;
  font-size: 17px;
  color: #62BE56;
  font-weight: bold;
}
.sub_contents .category .skill_list {
  max-width: 220px;
  margin: 0 auto;
  font-size: 15px;
  text-align: center;
}
.sub_contents .category .skill_list li {
  display: inline-block;
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
}
.sub_contents .table .skill_list li::after {
  content: ',';
  margin-right: 2px;
}
.sub_contents .table .skill_list li:last-child::after {
  content: '';
  margin: 0;
}
@media screen and (max-width: 670px) {
  .columns.inner .column {
    padding: 0.75rem 8px;
  }
  .columns.inner .column.profile_area {
    padding: 20px 10px;
  }
}
@media screen and (min-width: 670px) {
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
  .columns.is-tablet {
    display: flex;
  }
}
footer {
  padding: 0;
}
.table td, .table th {
  padding: 15px;
  font-size: 14px;
}
.table thead td, .table thead th {
  padding: 15px;
  font-size: 15px;
}
@media screen and (min-width: 768px) {
  .columns.inner .name_space p,
  .profile_txt {
    font-size: 16px;
  }
  .sub_contents h2 {
    font-size: 30px;
  }
  .table thead td, .table thead th {
    font-size: 18px;
  }
  .table td, .table th {
    font-size: 15px;
  }

}
</style>

