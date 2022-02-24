<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Poem from "~/@pages/poem/poem.vue";

@Component({
  components: {
    Poem
  }
})

export default class extends Vue {
}
</script>

<template>
  <Poem/>
</template>
