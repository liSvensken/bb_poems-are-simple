<template>
  <div class="gl-layout-wrapper">
    <Header/>
    <main class="gl-layout-content">
      <Nuxt/>
    </main>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Header from "~/app/components/layout/header/header.vue";
import Footer from "~/app/components/layout/footer.vue";

@Component({
  components: {
    Header,
    Footer
  }
})

export default class extends Vue {
}
</script>

<style lang="scss">
@import "app/styles/global.scss";
</style>
