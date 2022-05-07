<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { RouterParamsEnum } from "~/enums/routerParams.enum";
import { LinksListInterface } from "~/interfaces/links-list.interface";

const LINKS_LIST: LinksListInterface[] = [
  {
    name: "По авторам",
    href: RouterParamsEnum.PoemsListByAuthor
  },
  {
    name: "По классам",
    href: RouterParamsEnum.PoemsListByGrade
  },
  {
    name: "Весь список",
    href: RouterParamsEnum.FullList
  }
]


@Component({
  components: {}
})

export default class extends Vue {
  pageName: string | null | undefined = "weq3we";
  LINKS_LIST = LINKS_LIST;

  created() {
    this.pageName = this.$route.name;

    this.$watch(
      () => this.$route.name,
      newName => {
        this.pageName = newName
      }
    )
  }
}
</script>

<style lang="scss" scoped>
@import 'styles/global';
@import 'header';
</style>

<template>
  <header class="container">
    <div class="gl-page-content">
      <div class="content-wrapper">
        <nuxt-link to="/" class="logo-link">
          <img src="/icons/header/logo.svg" alt="logo" class="logo">
        </nuxt-link>

        <nuxt-link
          v-for="(linkItem, index) in LINKS_LIST"
          :key="index"
          :to="`/${linkItem.href}`"
          class="logo-link-wrapper"
        >
          <div
            class="logo-link-content"
            :class="{ 'mod-active': pageName === linkItem.href}"
          >
            {{ linkItem.name }}
          </div>
        </nuxt-link>

        <label class="input-search-wrapper">
          <input type="text" class="input-search" placeholder="Быстрый поиск">
        </label>
      </div>
    </div>
  </header>
</template>
