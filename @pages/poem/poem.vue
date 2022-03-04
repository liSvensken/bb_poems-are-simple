<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import BreadCrumbs from "~/components/bread-crumbs/bread-crumbs.vue";
import AboutWhat from "~/@pages/poem/components/about-what/about-what.vue";
import PoemText from "~/@pages/poem/components/poem-text/poem-text.vue";

@Component({
  components: {
    BreadCrumbs,
    AboutWhat,
    PoemText
  }
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

    </div>

    <div class="gl-page-content">
      <div class="video-container">
        <div class="video-wrapper">
          <vue-plyr>
            <div
              data-plyr-provider="youtube"
              data-plyr-embed-id="ODVEBnVqCXA"
            />
          </vue-plyr>
        </div>

        <div class="reader-name">
          Маша Матвейчук
        </div>

        <div class="social-link-wrapper">
          <a href="" class="social-link">
            <img src="/icons/social/youtube.svg" alt="" class="social-link-icon">
          </a>
          <a href="" class="social-link">
            <img src="/icons/social/inst.svg" alt="" class="social-link-icon">
          </a>
          <a href="" class="social-link">
            <img src="/icons/social/vk.svg" alt="" class="social-link-icon">
          </a>
          <a href="" class="social-link">
            <img src="/icons/social/telegram.svg" alt="" class="social-link-icon">
          </a>
          <a href="" class="social-link">
            <img src="/icons/social/tiktok.svg" alt="" class="social-link-icon">
          </a>
        </div>

        <a href="" download class="btn-download-audio">
          Скачать аудио
        </a>
      </div>

      <AboutWhat/>

      <PoemText/>
    </div>
  </div>
</template>
