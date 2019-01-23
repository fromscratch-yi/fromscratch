<template>
  <div class="contents_area">
    <div class="max_size_wrap">
      <div class="inner_contents_wrap">
        <TitleDescription :meta="meta"></TitleDescription>
        <Terminal :typeTxt="typeTxt"></Terminal>
        <section class="columns is-tablet inner">
          <div class="column is-three-fifths name_space">
            <h2 v-html="$t('about.name')"></h2>
            <p v-html="$t('about.kind')"></p>
          </div>
          <div class="column profile_area">
            <div class="image_area">
              <figure class="image is-square">
                <img class="is-rounded" src="~assets/img/YuichiIshiyama.jpg" alt="Yuichi Ishiyama">
              </figure>
            </div>
          </div>
        </section>
        <div class="profile_txt" v-html="$t('about.introduction')"></div>
      </div>
    </div>
    <div class="sub_contents_wrap">
      <section class="sub_contents">
        <h2>Skills &amp; Tools</h2>
        <div class="max_size_wrap columns is-tablet">
          <section class="column category">
            <h3 class="category_ttl_wrap"><span class="category_name" v-html="$t('word.frontend')"></span><img src="~assets/img/icon_front.png" alt="Front-end Development"></h3>
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
          <section class="column category">
            <h3 class="category_ttl_wrap"><span class="category_name" v-html="$t('word.backend')"></span><img src="~assets/img/icon_back.png" alt="Back-end Development"></h3>
            <ul class="skill_list">
              <li>PHP</li>
              <li>Laravel</li>
              <li>Yii2</li>
              <li>Python</li>
              <li>Java</li>
            </ul>
          </section>
          <section class="column category">
            <h3 class="category_ttl_wrap"><span class="category_name" v-html="$t('word.mobile')"></span><img src="~assets/img/icon_mobile.png" alt="Mobile App Development"></h3>
            <ul class="skill_list">
              <li>Android Java</li>
              <li>Swift</li>
            </ul>
          </section>
          <section class="column category">
            <h3 class="category_ttl_wrap"><span class="category_name" v-html="$t('word.other')"></span><img src="~assets/img/icon_other.png" alt="other"></h3>
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
      <section class="sub_contents">
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
              <tr v-for="project in projects" :key="project.id">
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
        <p class="right"><nuxt-link :to="$i18n.path('work')">Work</nuxt-link></p>
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
      title: 'About',
      description: this.$t('about.description'),
      type: 'article',
      url: this.$route.fullPath,
      image: 'https://fromscratch-y.firebaseapp.com/ogp.gif',
      lang: this.$i18n.locale
    };
    console.log(meta.locale)
    var typeTxt = '$ cat ./about.txt\n\> This is Yuichi Ishiyama\'s Profile.\n\> Who am I\? Can I do\?';
    var projects = this.$t('about.project');
    return { meta, typeTxt, projects }
  }
}
</script>

<style>
.profile_area .image_area {
  max-width: 200px;
  margin: 0 auto;
}
.columns.inner {
  margin: 20px 0 0;
}
.columns.inner .name_space h2 {
  margin: 0 0 5px;
  font-size: 30px;
  line-height: 1.5;
}
.columns.inner .name_space h2 .name_jp {
  display: block;
  font-family: 'Meiryo';
  font-size: 18px;
}
.columns.inner .name_space p {
  font-size: 13px;
  color: rgb(177, 177, 177);
}
.columns.inner .name_space p .em_color {
  color: rgb(134, 204, 127);
  font-weight: bold;
}
.profile_txt p .em_color {
  color: rgb(64, 161, 63);
  font-weight: bold;
}
.profile_txt {
  padding: 0.75rem 8px;
  font-size: 14px;
  line-height: 1.6;
  text-align: center;
}
.profile_txt p {
  margin-bottom: 10px;
}
.profile_txt p:last-child {
  margin-bottom: 0;
}
.sub_contents {
  padding: 30px 15px 20px;
}
.sub_contents:nth-child(odd) {
  margin: 20px 0 0;
  background-color: rgb(43, 42, 42);
  color: rgb(177, 177, 177);
}
.sub_contents:last-child {
  padding-bottom: 0;
}
.sub_contents h2 {
  font-size: 25px;
  text-align: center;
}
.sub_contents .category {
  padding: 20px 15px;
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
  margin: 0 auto 15px;
}
.sub_contents .category .category_ttl_wrap .category_name {
  display: inline-block;
  padding: 5px;
  font-size: 12px;
  color: rgb(64, 161, 63);
  font-weight: bold;
}
.sub_contents .category .skill_list {
  font-size: 13px;
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
    padding: 0.75rem calc(0.75rem + 8px);
  }
}
footer {
  padding: 0;
}
</style>

