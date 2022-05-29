<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import PoemsList from "~/components/poems-list/poems-list.vue";
import { PoemInterface } from "~/interfaces/api/poem.interface";
import BreadCrumbs, { BreadCrumbInterface } from '~/components/bread-crumbs/bread-crumbs.vue';
import { BOOKMARKS_LIST } from "~/utils/const/bookmaks";
import { RouterParamsEnum } from "~/enums/routerParams.enum";
import { getPoemsList } from "~/@api/get-poems-list";

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
  breadCrumbsList = BREAD_CRUMBS_LIST;
  fullList: PoemInterface[] = [];

  mounted() {
    this.$store.commit('bookmarks/setList', { list: BOOKMARKS_LIST, pageName: RouterParamsEnum.PoemsListByGrade });

    getPoemsList(100, 0)
      .then(response => {
        this.fullList = response.data.result;
      })
    .catch(err => {
      console.error(err)
    })
  }
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
        <PoemsList title="Весь список" :list="this.fullList"/>
      </div>
    </div>
  </div>
</template>
