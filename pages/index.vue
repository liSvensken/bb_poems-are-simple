<template>
  <Main/>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Main from "~/@pages/main/main.vue";

@Component({
  components: {
    Main
  }
})

export default class extends Vue {}
</script>
