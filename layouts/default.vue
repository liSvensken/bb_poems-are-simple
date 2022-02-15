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

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Header from "~/app/components/layout/header/header.vue";
import Footer from "~/app/components/layout/footer/footer.vue";
import BookmarksBar from "~/app/components/bookmarks-bar/bookmarks-bar.vue";

@Component({
  components: {
    Header,
    Footer,
    BookmarksBar
  }
})

export default class extends Vue {
}
</script>

<style lang="scss">
@import "app/styles/global.scss";
</style>
