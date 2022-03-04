<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  components: {}
})

export default class extends Vue {
}
</script>

<style lang="scss" scoped>
@import 'poem-text';
</style>

<template>
  <div class="container">
    <div class="btns-tools-wrapper">
      <button
        type="button"
        class="btn-tool hints-btn"
      />

      <button
        type="button"
        class="btn-tool printing-btn"
      />
    </div>

    
  </div>
</template>
