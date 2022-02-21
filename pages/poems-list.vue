<template>
  <PoemsList/>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import PoemsList from "~/@pages/poems-list/poems-list.vue";

@Component({
  components: {
    PoemsList
  }
})

export default class extends Vue {}
</script>
