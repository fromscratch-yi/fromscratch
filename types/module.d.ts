import MarkdownIt from 'markdown-it';
interface MetaData {
  title: string;
  description: string;
}
declare module 'vue/types/vue' {
  // Vueインスタンス(this)の型追加
  interface Vue {
    $md: MarkdownIt;
    meta: MetaData;
  }
}

declare module '@nuxt/types' {
  // Nuxt Contextへの型追加
  interface Context {
    $md: MarkdownIt;
    meta: MetaData;
  }
}
