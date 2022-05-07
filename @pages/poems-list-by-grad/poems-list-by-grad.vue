<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import BreadCrumbs, { BreadCrumbInterface } from '~/components/bread-crumbs/bread-crumbs.vue';
import { BookmarkInterface } from "~/store/bookmarks";
import PoemsList from "~/components/poems-list/poems-list.vue";
import { poemsList } from "./fake-api";
import { BOOKMARKS_LIST } from "~/utils/const/bookmaks";
import { RouterQueryParamsEnum } from "~/enums/routerQueryParams.enum";

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
  poemsListResponse = poemsList;
  breadCrumbsList = BREAD_CRUMBS_LIST;
  form = {
    grad: null
  };

  mounted() {
    this.$store.commit('bookmarks/setList', { list: null });

    this.$watch(
      () => this.form.grad,
      newGrad => {
        if (newGrad) {
          this.$router.replace({ query: { [RouterQueryParamsEnum.Grade]: newGrad } });
        } else {
          this.$router.replace({ query: undefined });
        }
        console.log(`Запрос на получение стихов для ${ newGrad } класса`);
      }
    )
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
          <div class="grad-list">
            <label v-for="(gradItem, index) in this.bookmarksList" :key="index" class="input-wrapper">
              <input type="radio" class="input" name="grade" v-model="form.grad" v-bind:value="gradItem.value">
              <span class="input-content">{{ gradItem.text }}</span>
            </label>
          </div>
        </div>
      </div>

      <div class="bottom-block-wrapper gl-page-content">
        <PoemsList :title="form.grad ? `Стихи для ${form.grad} класса:` : `Все стихи:`" :list="poemsListResponse"/>
      </div>
    </template>
  </div>
</template>
