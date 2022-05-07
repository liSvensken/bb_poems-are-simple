<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { BookmarkInterface } from "~/store/bookmarks";
import { RouterParamsEnum } from "~/enums/routerParams.enum";
import { RouterQueryParamsEnum } from "~/enums/routerQueryParams.enum";

@Component({
  components: {}
})

export default class extends Vue {
  bookmarksList: BookmarkInterface[] = [];

  mounted() {
    this.bookmarksList = this.$store.getters['bookmarks/getList'];

    this.$watch(
      () => this.$route.name,
      () => {
        setTimeout(() => {
          this.bookmarksList = this.$store.getters['bookmarks/getList'];
        })
      }
    )
  }

  getLink(value: number | null) {
    return value ? `/${ RouterParamsEnum.PoemsListByAuthor }?${ RouterQueryParamsEnum.Grade }=${ value }` : RouterParamsEnum.PoemsListByAuthor;
  }
}
</script>

<style lang="scss" scoped>
@import 'bookmarks-bar';
</style>

<template>
  <div v-if="this.bookmarksList" class="container">
    <ul class="bookmarks-list">
      <li
        v-for="(bookmark, index) in this.bookmarksList"
        :key="index"
        class="bookmarks-item-wrapper"
      >
        <router-link
          :to="getLink(bookmark.value)"
          class="bookmarks-item"
        >
          {{ bookmark.text }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
