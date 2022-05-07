<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import PoemsListByGrad from "~/@pages/poems-list-by-grad/poems-list-by-grad.vue";

@Component({
  components: {
    PoemsListByGrad
  }
})

export default class extends Vue {
}
</script>

<template>
  <PoemsListByGrad/>
</template>
