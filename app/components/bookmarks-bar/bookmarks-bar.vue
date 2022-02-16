<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  components: {}
})

export default class extends Vue {
  testList = [
    {
      text: "5 класс",
      url: "/"
    },
    {
      text: "6 класс",
      url: "/"
    },
    {
      text: "7 класс",
      url: "/"
    },
    {
      text: "8 класс",
      url: "/"
    },
    {
      text: "9 класс",
      url: "/"
    },
    {
      text: "10 класс",
      url: "/"
    },
    {
      text: "11 класс",
      url: "/"
    },
    {
      text: "Все классы",
      url: "/"
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
        <a :href="bookmark.url" class="bookmarks-item">
          {{ bookmark.text }}
        </a>
      </li>
    </ul>
  </div>
</template>
