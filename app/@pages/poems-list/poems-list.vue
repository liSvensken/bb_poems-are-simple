<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import ByAuthors from "./components/by-authors/by-authors.vue";
import BreadCrumbs from "~/app/components/bread-crumbs/bread-crumbs.vue";
import { BreadCrumbInterface } from "~/app/interfaces/bread-crumb.interface";

const BREAD_CRUMBS_LIST: BreadCrumbInterface[] = [
  {
    text: "Главная",
    url: "/"
  },
  {
    text: "Выбор стиха",
    url: "/"
  }
]

@Component({
  components: {
    BreadCrumbs,
    ByAuthors
  }
})

export default class extends Vue {
  breadCrumbsList = BREAD_CRUMBS_LIST;

  mounted() {
  }
}
</script>

<style lang="scss" scoped>
@import 'poems-list';
</style>

<template>
  <div class="top-wrapper">
    <div class="gl-page-content">
      <BreadCrumbs :breadCrumbsListProp="breadCrumbsList"/>
      <ByAuthors/>
    </div>
  </div>
</template>
