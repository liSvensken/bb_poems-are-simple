<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Accordion from '~/components/accordion/accordion.vue';
import { authorPoemsListResponse } from '~/@pages/poems-list/components/by-authors/fake-api';
import { RouterParamsEnum } from "~/enums/routerParams.enum";

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

  getLink(urlParam: string) {
    return `/${ RouterParamsEnum.Poem }/${ urlParam }`;
  }

  onOpen(isOpen: boolean, openIndex: number) {
    this.statesOpen = this.statesOpen
      .map((item, index) => index === openIndex ? isOpen : false);
  }
}
</script>

<style lang="scss" scoped>
@import 'by-authors';
</style>

<template>
  <div class="container">
    <h2 class="gl-subtitle">
      По авторам:
    </h2>

    <div v-for="(authorItem, index) in authorPoemsListResponse" :key="index">
      <Accordion
        :isOpenProp="statesOpen[index]"
        :index="index"
        @onOpen="onOpen"
        class="accordion-wrapper"
        :class="{'mod-open': statesOpen[index]}"
      >
        <template v-slot:AccordionSummary>
          <div class="summary-wrapper">
            {{ authorItem.authorName.firstName }}
            {{ authorItem.authorName.name }}
            {{ authorItem.authorName.patronymic }}
          </div>
        </template>

        <template v-slot:AccordionDetails>
          <ul class="details-list">
            <li
              v-for="(poemItem, index) in authorItem.poemsList"
              :key="index"
            >
              <router-link
                :to="getLink(poemItem.urlParam)"
                class="details-item"
              >
                «{{ poemItem.poemName }}»
              </router-link>
            </li>
          </ul>
        </template>
      </Accordion>
    </div>
  </div>
</template>
