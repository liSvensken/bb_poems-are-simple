<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  components: {}
})

export default class extends Vue {

  mounted() {
  }
}
</script>

<style lang="scss" scoped>
@import "app/styles/global.scss";
@import 'by-authors';
</style>

<template>
  <div class="container">
    <h1 class="gl-subtitle">
      По авторам:
    </h1>
  </div>
</template>
