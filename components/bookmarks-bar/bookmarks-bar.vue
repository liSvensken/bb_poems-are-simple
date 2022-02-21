<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { BookmarkInterface } from "~/store/bookmarks";

@Component({
  components: {}
})

export default class extends Vue {
  bookmarksList: BookmarkInterface[] = [];

  mounted() {
    this.bookmarksList = this.$store.getters['bookmarks/getList'];
  }
}
</script>

<style lang="scss" scoped>
@import 'bookmarks-bar';
</style>

<template>
  <div v-if="$store.getters['bookmarks/getList']" class="container">
    <ul class="bookmarks-list">
      <li
        v-for="(bookmark, index) in $store.getters['bookmarks/getList']"
        :key="index"
        class="bookmarks-item-wrapper"
      >
        <router-link :to="`/poems-list?grade=${bookmark.url}`" class="bookmarks-item">
          {{ bookmark.text }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
