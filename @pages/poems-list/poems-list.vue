<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import BreadCrumbs from '~/components/bread-crumbs/bread-crumbs.vue';
import ByAuthors from './components/by-authors/by-authors.vue';
import FullList from './components/full-list/full-list.vue';
import { BreadCrumbInterface } from '~/interfaces/bread-crumb.interface';
import { BOOKMARKS_LIST } from "~/utils/const/bookmaks";

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
    ByAuthors,
    FullList
  }
})

export default class extends Vue {
  breadCrumbsList = BREAD_CRUMBS_LIST;

  mounted() {
    this.$store.commit('bookmarks/setList', { list: BOOKMARKS_LIST })
  }

}
</script>

<style lang="scss" scoped>
@import 'poems-list';
</style>

<template>
  <div>
    <div class="top-wrapper">
      <BreadCrumbs :breadCrumbsListProp="breadCrumbsList"/>
      <div class="gl-page-content">
        <ByAuthors/>
      </div>
    </div>

    <FullList/>
  </div>
</template>
