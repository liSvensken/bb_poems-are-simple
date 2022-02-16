<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import { BreadCrumbInterface } from "~/app/interfaces/bread-crumb.interface";

@Component({
  components: {}
})

export default class extends Vue {
  @Prop() breadCrumbsList!: BreadCrumbInterface[];

  mounted() {
  }
}
</script>

<style lang="scss" scoped>
@import 'bread-crumbs';
</style>

<template>
  <ul class="container">
    <li
      v-for="(crumbItem, index) in breadCrumbsList"
      :key="index"
      class="item-wrapper"
    >
      <a :href="crumbItem.url" class="item">
        {{ crumbItem.text }}
      </a>
    </li>
  </ul>
</template>
