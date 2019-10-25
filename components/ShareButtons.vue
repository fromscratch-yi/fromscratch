<template>
  <section class="share_wrap section">
    <h2 class="share_ttl">{{ $t('word.share') }}<fa :icon="faShareAlt" /></h2>
    <aside>
      <ul class="social-list">
        <li class="social-list-item">
          <a
            class="social-list-link icon-twitter"
            :href="twitterUrl()"
            target="_blank"
            rel="noopener"
            title="Twitterで共有"
          ><fa :icon="faTwitter" /><b hidden>Twitter</b></a>
        </li>
        <li class="social-list-item">
          <a
            class="social-list-link icon-facebook"
            :href="facebookUrl()"
            target="_blank"
            rel="noopener"
            title="Facebookで共有"
          ><fa :icon="faFacebookF" /><b hidden>Facebook</b></a>
        </li>
        <li class="social-list-item">
          <a
            class="social-list-link icon-pocket"
            :href="pocketUrl()"
            target="_blank"
            rel="noopener"
            title="pocketで共有"
          ><fa :icon="faGetPocket" /><b hidden>Pocket</b></a>
        </li>
        <li class="social-list-item">
          <a
            class="social-list-link icon-line"
            :href="lineUrl()"
            target="_blank"
            rel="noopener"
            title="Lineで共有"
          ><b>LINE</b></a>
        </li>
      </ul>
    </aside>
    <div class="ad_wrap"><adsbygoogle :ad-slot="'3307145842'" /></div>
  </section>
</template>
<script>
import {faShareAlt} from "@fortawesome/free-solid-svg-icons"
import {
  faTwitter,
  faFacebookF,
  faGetPocket
} from "@fortawesome/free-brands-svg-icons"
export default {
  computed: {
    faShareAlt() {
      return faShareAlt
    },
    faTwitter() {
      return faTwitter
    },
    faFacebookF() {
      return faFacebookF
    },
    faGetPocket() {
      return faGetPocket
    }
  },
  name: "ShareButtons",
  props: ["title"],
  data() {
    return {
      url: `https://fromscratch-y.work${this.$route.path}`,
      twitter_url: "https://twitter.com/intent/tweet?url={0}&text={1}",
      facebook_url: "https://www.facebook.com/sharer/sharer.php?u={0}&amp;t={1}",
      pocket_url: "http://getpocket.com/edit?url={0}",
      line_url: "https://social-plugins.line.me/lineit/share?url={0}"
    };
  },
  methods: {
    formatByArr(msg) {
      // フォーマット（引数可変（配列）版）
      var args = [];
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
      // URLエンコード
      args = args.map(x => encodeURIComponent(x));
      return msg.replace(/\{(\d+)\}/g, function(m, k) {
        return args[k];
      });
    },
    // それぞれパラメータを埋め込む
    twitterUrl() {
      return this.formatByArr(this.twitter_url, this.url, this.title);
    },
    facebookUrl() {
      return this.formatByArr(this.facebook_url, this.url, this.title);
    },
    pocketUrl() {
      return this.formatByArr(this.pocket_url, this.url);
    },
    lineUrl() {
      return this.formatByArr(this.line_url, this.url);
    }
  }
};
</script>
<style scoped>
.social-list {
  list-style: none;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  width: 100%;
  margin: auto;
}
.social-list-item {
  height: 40px;
  line-height: 40px;
}
.social-list-item {
  flex-grow: 1;
  height: 50px;
  line-height: 50px;
  min-width: 90px;
  text-align: center;
}
.social-list-link.icon-twitter {
  background: #00b0ed;
}
.social-list-link.icon-facebook {
  background: #008fde;
}
.social-list-link.icon-pocket {
  background: #eb4654;
}
.social-list-link.icon-line {
  background: #00a200;
}
a.social-list-link {
  display: block;
  color: #ffffff;
  text-decoration: none;
}
a.social-list-link:hover {
  opacity: 0.9;
  filter: alpha(opacity=90);
  -ms-filter: "alpha(opacity=90)";
}
.content li + li {
  margin-top: 0;
}
.share_wrap.section {
  padding: 40px 15px 0;
}
.share_ttl {
  font-size: 20px;
  text-align: center;
  margin: 0 0 20px;
  font-weight: bold;
}
.share_ttl svg {
  margin-left: 7px;
}
.ad_wrap {
  margin-top: 50px;
}
@media screen and (max-width: 407px) {
  .social-list-item {
    width: 50%;
    min-width: auto;
  }
}

</style>