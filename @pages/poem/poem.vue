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

  mounted() {
    // @ts-ignore
    // this.$refs.plyrRef.player.on('playing', () => console.log('event fired'))
    console.log( this.$refs.plyrRef.player.autoplay)
    this.$refs.plyrRef.player.autoplay = true;
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
            Пушкин Александр Сергеевич
          </div>

          <div class="poem-name">
            «Туча»
          </div>
        </div>
      </div>

      <div class="gl-page-content">
        <div class="video-wrapper">
          <vue-plyr ref="plyrRef">
            <div data-plyr-provider="youtube" data-plyr-embed-id="ODVEBnVqCXA"></div>
          </vue-plyr>
        </div>
      </div>
    </div>
  </div>
</template>
