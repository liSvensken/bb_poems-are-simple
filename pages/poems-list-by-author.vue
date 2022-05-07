<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import PoemsListByAuthor from "~/@pages/poems-list-by-author/poems-list-by-author.vue";

@Component({
  components: {
    PoemsListByAuthor
  }
})

export default class extends Vue {
}
</script>

<template>
  <PoemsListByAuthor/>
</template>
