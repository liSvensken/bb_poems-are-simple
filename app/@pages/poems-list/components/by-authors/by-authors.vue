<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Accordion from "~/app/components/accordion/accordion.vue";
import { authorPoemsListResponse } from "~/app/@pages/poems-list/components/by-authors/fake-api";

@Component({
  components: {
    Accordion
  }
})

export default class extends Vue {
  authorPoemsListResponse = authorPoemsListResponse;

  statesOpen = new Array(authorPoemsListResponse.length)
    .fill(false)
    .map((item, index) => !index);

  mounted() {
  }

  onOpen(isOpen: boolean, openIndex: number) {
    this.statesOpen = this.statesOpen
      .map((item, index) => index === openIndex ? isOpen : false);
  }
}
</script>

<style lang="scss" scoped>
@import "app/styles/global.scss";
@import 'by-authors';
</style>

<template>
  <div class="container">
    <h1 class="gl-subtitle">
      По авторам:
    </h1>

    <div v-for="(authorItem, index) in authorPoemsListResponse" :key="index">
      <Accordion
        :isOpenProp="statesOpen[index]"
        :index="index"
        @onOpen="onOpen"
      >
        <template v-slot:AccordionSummary>
          {{ authorItem.authorName.firstName }}
        </template>

        <template v-slot:AccordionDetails>
          <div v-for="(poemItem, index) in authorItem.poemsList" :key="index">
            {{ poemItem.poemName }}
          </div>
        </template>
      </Accordion>
    </div>
  </div>
</template>
