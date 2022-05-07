<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import BreadCrumbs, { BreadCrumbInterface } from '~/components/bread-crumbs/bread-crumbs.vue';
import { BookmarkInterface } from "~/store/bookmarks";
import PoemsList from "~/components/poems-list/poems-list.vue";
import { poemsList } from "./fake-api";
import { BOOKMARKS_LIST } from "~/utils/const/bookmaks";

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

  mounted() {
    this.$store.commit('bookmarks/setList', { list: null });
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
              <input type="radio" class="input" name="grade" :value="gradItem.text">
              <span class="input-content">{{ gradItem.text }}</span>
            </label>
          </form>
        </div>
      </div>

      <div class="bottom-block-wrapper gl-page-content">
        <PoemsList title="Стихи для 7 класса:" :list="poemsListResponse"/>
      </div>
    </template>
  </div>
</template>
