<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import { BreadCrumbInterface } from "~/interfaces/bread-crumb.interface";

@Component({
  components: {}
})

export default class extends Vue {
  @Prop() breadCrumbsListProp!: BreadCrumbInterface[];

  mounted() {
  }
}
</script>

<style lang="scss" scoped>
@import 'bread-crumbs';
</style>

<template>
  <div class="gl-page-content">
    <ul class="container">
      <li
        v-for="(crumbItem, index) in breadCrumbsListProp"
        :key="index"
        class="item-wrapper"
      >
        <a :href="crumbItem.url" class="item">
          {{ crumbItem.text }}
        </a>
      </li>
    </ul>
  </div>
</template>
