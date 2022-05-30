<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import BreadCrumbs, { BreadCrumbInterface } from '~/components/bread-crumbs/bread-crumbs.vue';
import { BookmarkInterface } from "~/store/bookmarks";
import PoemsList from "~/components/poems-list/poems-list.vue";
import { BOOKMARKS_LIST } from "~/utils/const/bookmaks";
import { RouterQueryParamsEnum } from "~/enums/routerQueryParams.enum";
import { getPoemsList } from "~/@api/get-poems-list";
import { PoemInterface } from "~/interfaces/api/poem.interface";

const BREAD_CRUMBS_LIST: BreadCrumbInterface[] = [
  {
    text: "Главная",
    url: "/"
  },
  {
    text: "Выбор стиха по классу",
    url: "/"
  }
]

@Component({
  components: {
    BreadCrumbs,
    PoemsList
  }
})

export default class extends Vue {
  bookmarksList: BookmarkInterface[] = BOOKMARKS_LIST;
  poemsListResponse: PoemInterface[] = [];
  breadCrumbsList = BREAD_CRUMBS_LIST;
  gradControl: string | null = null;
  picked = 'One';

  mounted() {
    this.$store.commit('bookmarks/setList', { list: null });

    this.gradControl = this.$route.query.grade as string;

    this.updatePoemsByGrad(this.gradControl);

    this.$watch(
      () => this.gradControl,
      newGrad => {
        if (newGrad) {
          this.$router.replace({ query: { [RouterQueryParamsEnum.Grade]: newGrad } });
        } else {
          this.$router.replace({ query: undefined });
        }
        if (newGrad) {
          // Запрос на получение стихов для ${ newGrad } класса
          this.updatePoemsByGrad(newGrad);
        }
      }
    )
  }

  updatePoemsByGrad(grad?: string): void {
    getPoemsList(100, 0, undefined, Number(grad))
      .then(response => {
        this.poemsListResponse = response.data.result;
      })
      .catch(err => {
        console.error(err)
      })
  }
}
</script>

<style lang="scss" scoped>
@import 'poems-list-by-grad';
</style>

<template>
  <div>
    <BreadCrumbs :breadCrumbsListProp="breadCrumbsList"/>
    <template>
      <div class="top-block-wrapper gl-blue-block">
        <div class="gl-page-content">
          <form class="grad-list">
            <label v-for="(gradItem, index) in this.bookmarksList" :key="index" class="input-wrapper">
              <input type="radio"
                     class="input"
                     v-model="gradControl"
                     :id="gradItem.value"
                     :value="gradItem.value"
              >
              <span class="input-content">{{ gradItem.text }}</span>
            </label>
          </form>
        </div>
      </div>

      <div class="bottom-block-wrapper gl-page-content">
        <PoemsList :title="gradControl ? `Стихи для ${gradControl} класса:` : `Все стихи:`" :list="poemsListResponse"/>
      </div>
    </template>
  </div>
</template>
