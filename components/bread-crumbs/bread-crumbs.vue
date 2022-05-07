<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";

export interface BreadCrumbInterface {
  text: string;
  url: string;
}

@Component({
  components: {}
})

export default class extends Vue {
  @Prop() breadCrumbsListProp!: BreadCrumbInterface[];
}
</script>

<style lang="scss" scoped>
@import 'bread-crumbs';
</style>

<template>
  <div class="container gl-blue-block">
    <div class="gl-page-content">
      <ul class="content-wrapper">
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
  </div>
</template>
