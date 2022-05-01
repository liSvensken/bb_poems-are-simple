<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { poemResponse } from "~/@pages/poem/components/poem-text/fake-api-response";

/**
 * v-tooltip - на будущее, когда будет не только оригинальный текст
 * **/

@Component({
  components: {}
})

export default class extends Vue {

  mounted() {
    (this.$refs.poemText as HTMLElement).innerHTML = poemResponse.original;
  }
};
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

    <div class="poem-text-wrapper" ref="poemText"/>
  </div>
</template>
