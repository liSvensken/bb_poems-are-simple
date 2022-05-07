<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { poemsList } from "./fake-api";
import PoemsList from "~/components/poems-list/poems-list.vue";
import { PoemInterface } from "~/interfaces/api/poem.interface";
import BreadCrumbs, { BreadCrumbInterface } from '~/components/bread-crumbs/bread-crumbs.vue';

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
    PoemsList,
    BreadCrumbs
  }
})

export default class extends Vue {
  poemsList: PoemInterface[] = poemsList;
  breadCrumbsList = BREAD_CRUMBS_LIST;
}
</script>

<style lang="scss" scoped>
@import 'full-list';
</style>

<template>
  <div>
    <BreadCrumbs :breadCrumbsListProp="breadCrumbsList"/>
    <div class="gl-blue-block">
      <div class="gl-page-content">
        <PoemsList title="Весь список" :list="this.poemsList"/>
      </div>
    </div>
  </div>
</template>
