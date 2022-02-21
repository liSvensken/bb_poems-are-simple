<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Header from "~/components/layout/header/header.vue";
import Footer from "~/components/layout/footer/footer.vue";
import BookmarksBar from "~/components/bookmarks-bar/bookmarks-bar.vue";

@Component({
  components: {
    Header,
    Footer,
    BookmarksBar
  }
})

export default class extends Vue {
};
</script>

<style lang="scss">
@import "../styles/global.scss";
</style>

<template>
  <div class="gl-layout-wrapper">
    <Header/>
    <main class="gl-layout-content">
      <Nuxt/>
    </main>
    <Footer/>
    <BookmarksBar/>
  </div>
</template>
