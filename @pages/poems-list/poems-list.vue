<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import BreadCrumbs, { BreadCrumbInterface } from '~/components/bread-crumbs/bread-crumbs.vue';
import ByAuthors from './components/by-authors/by-authors.vue';
import FullList from './components/full-list/full-list.vue';
import { BOOKMARKS_LIST } from "~/utils/const/bookmaks";
import { RouterQueryParamsEnum } from "~/enums/routerQueryParams.enum";

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
  currentGrade: number | null = null;

  created() {
    console.log(this.$route.query[RouterQueryParamsEnum.Grade])
    this.$store.commit('bookmarks/setList', { list: BOOKMARKS_LIST })
    this.currentGrade = this.$route.query.grade ? +this.$route.query.grade : null;

    this.$watch(
      () => this.$route.query.grade,
      (newGrade) => {
        this.currentGrade = newGrade ? +newGrade : null;
        console.log("Класс:", this.currentGrade);
      }
    )

    console.log("Класс:", this.currentGrade);
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
