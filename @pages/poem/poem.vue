<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import BreadCrumbs from "~/components/bread-crumbs/bread-crumbs.vue";

@Component({
  components: { BreadCrumbs }
})

export default class extends Vue {
  breadCrumbsList = [
    {
      text: "Главная",
      url: "/"
    },
    {
      text: "Выбор стиха",
      url: "/"
    },
    {
      text: "Пушкин А.С.",
      url: "/"
    },
    {
      text: "«Туча»",
      url: "/"
    }
  ];
}
</script>

<style lang="scss" scoped>
@import 'poem';
</style>

<template>
  <div>
    <div class="section-top">
      <BreadCrumbs :breadCrumbsListProp="breadCrumbsList"/>

      <div class="poem-name-wrapper">
        <div class="gl-page-content">
          <div class="poem-author">
            Пушкин Александр Сергеевич
          </div>

          <div class="poem-name">
            «Туча»
          </div>
        </div>
      </div>

      <div class="gl-page-content">
        <div class="video-wrapper">
          <iframe
            width="560" height="315"
            src="https://www.youtube.com/embed/ODVEBnVqCXA"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  </div>
</template>
