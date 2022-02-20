<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  components: {}
})

export default class extends Vue {
  testList = [
    {
      text: "5 класс",
      url: "5"
    },
    {
      text: "6 класс",
      url: "6"
    },
    {
      text: "7 класс",
      url: "7"
    },
    {
      text: "8 класс",
      url: "8"
    },
    {
      text: "9 класс",
      url: "9"
    },
    {
      text: "10 класс",
      url: "10"
    },
    {
      text: "11 класс",
      url: "11"
    },
    {
      text: "Все классы",
      url: "all"
    }
  ]

  mounted() {
  }
}
</script>

<style lang="scss" scoped>
@import 'bookmarks-bar';
</style>

<template>
  <div class="container">
    <ul class="bookmarks-list">
      <li
        v-for="(bookmark, index) in testList"
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
