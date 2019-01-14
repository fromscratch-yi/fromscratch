<template>
  <div class="contents_area">
    <div class="max_size_wrap">
      <TitleDescription :titleDescData="titleDescData"></TitleDescription>
      <Terminal :typeTxt="typeTxt"></Terminal>
      <section class="columns is-tablet inner">
        <div class="column is-three-fifths name_space">
          <h2>Yuichi Ishiyama<span class="name_jp">石山 雄一</span></h2>
          <p>Web Design, Business Card Design, <span class="em_color">Front-end</span> Development, <span class="em_color">Back-end</span> Development, Mobile-app Development</p>
        </div>
        <div class="column profile_area">
          <div class="image_area">
            <figure class="image is-square">
              <img class="is-rounded" src="~assets/img/YuichiIshiyama.jpg" alt="Yuichi Ishiyama">
            </figure>
          </div>
        </div>
      </section>
    </div>
    <div class="sub_contents_wrap columns is-tablet">
      <section class="column is-half sub_contents">
        <div class="max_size_wrap">
          <h2>My History</h2>
        </div>
      </section>
      <section class="column is-half sub_contents">
        <div class="max_size_wrap">
          <h2>My Carrer</h2>
        </div>
      </section>
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
  data(context){
    var titleDescData = {
      title: 'About',
      description: 'This is Yuichi Ishiyama&apos;s profile.'
    };
    var typeTxt = '$ cat ./about.txt\n\> This is Yuichi Ishiyama\'s Profile.\n\> Who am I\?';
    return { titleDescData, typeTxt }
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
  margin: 0 0 10px;
  font-size: 30px;
  font-family: 'Georgia';
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
.sub_contents_wrap.columns {
  margin: 20px 0;
}
.sub_contents {
  padding: 20px 15px;
}
.sub_contents:nth-child(odd) {
  background-color: rgb(43, 42, 42);
  color: rgb(177, 177, 177);
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
}
</style>

