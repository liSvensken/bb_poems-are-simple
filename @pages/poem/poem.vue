<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import BreadCrumbs from "~/components/bread-crumbs/bread-crumbs.vue";
import AboutWhat from "~/@pages/poem/components/about-what/about-what.vue";
import PoemText from "~/@pages/poem/components/poem-text/poem-text.vue";
import { getPoemItem } from "~/@api/get-poem-item";
import { PoemInterface } from "~/interfaces/api/poem.interface";

@Component({
  components: {
    BreadCrumbs,
    AboutWhat,
    PoemText
  }
})

export default class extends Vue {
  poemModel: PoemInterface | undefined;
  breadCrumbsList: { text: string, url: string }[] | undefined;

  mounted() {
    this.updatePoem();

    this.breadCrumbsList = [
      {
        text: "Главная",
        url: "/"
      },
      {
        text: "Выбор стиха",
        url: "/"
      },
      {
        text: `${ this.poemModel?.authorName.firstName } ${ this.poemModel?.authorName.name.slice(0, 1) }.${ this.poemModel?.authorName.patronymic.slice(0, 1) }.`,
        url: "/"
      },
      {
        text: `«${ this.poemModel?.poemName }»`,
        url: "/"
      }
    ];
  }

  updatePoem(): void {
    getPoemItem(this.$route.params.poem)
      .then(response => {
        this.poemModel = response.data.result[0];
      })
      .catch(err => {
        console.error(err)
      })
  }
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
            {{
              `${ poemModel.authorName.firstName } ${ poemModel.authorName.name }${ poemModel.authorName.patronymic }`
            }}
          </div>

          <div class="poem-name">
            {{ `«${ poemModel.poemName }»` }}
          </div>
        </div>
      </div>

    </div>

    <div class="gl-page-content">
      <div class="video-container">
        <div class="video-wrapper">
          <vue-plyr>
            <div
              :data-plyr-provider="poemModel.video.provider"
              :data-plyr-embed-id="poemModel.video.embedId"
            />
          </vue-plyr>
        </div>

        <div class="reader-name">
          {{ poemModel.video.actor }}
        </div>

        <div class="social-link-wrapper">
          <a v-if="poemModel.video.social.youtube" :href="poemModel.video.social.youtube" class="social-link">
            <img src="/icons/social/youtube.svg" alt="" class="social-link-icon">
          </a>
          <!--          <a v-if="poemModel.video.social.inst" :href="poemModel.video.social.inst" class="social-link">-->
          <!--            <img src="/icons/social/inst.svg" alt="" class="social-link-icon">-->
          <!--          </a>-->
          <a v-if="poemModel.video.social.vk" :href="poemModel.video.social.vk" class="social-link">
            <img src="/icons/social/vk.svg" alt="" class="social-link-icon">
          </a>
          <a v-if="poemModel.video.social.telegram" :href="poemModel.video.social.telegram" class="social-link">
            <img src="/icons/social/telegram.svg" alt="" class="social-link-icon">
          </a>
          <a v-if="poemModel.video.social.tiktok" :href="poemModel.video.social.tiktok" class="social-link">
            <img src="/icons/social/tiktok.svg" alt="" class="social-link-icon">
          </a>
        </div>

        <a v-if="poemModel.video.audio" :href="poemModel.video.audio" download class="btn-download-audio">
          Скачать аудио
        </a>
      </div>

      <AboutWhat :explanationText="poemModel.explanationText"/>

      <PoemText :poemText="poemModel.poemText"/>
    </div>
  </div>
</template>
