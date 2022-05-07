<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import FullList from "~/@pages/full-list/full-list.vue";

@Component({
  components: {
    FullList
  }
})

export default class extends Vue {
}
</script>

<template>
  <FullList/>
</template>
