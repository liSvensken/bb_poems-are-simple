<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import BreadCrumbs, { BreadCrumbInterface } from '~/components/bread-crumbs/bread-crumbs.vue';
import { BOOKMARKS_LIST } from "~/utils/const/bookmaks";
import { authorPoemsListResponse } from './fake-api';
import { AuthorPoemsListInterface } from "~/interfaces/api/author-poems-list.interface";
import { RouterParamsEnum } from "~/enums/routerParams.enum";
import Accordion from '~/components/accordion/accordion.vue';

const BREAD_CRUMBS_LIST: BreadCrumbInterface[] = [
  {
    text: "Главная",
    url: "/"
  },
  {
    text: "Выбор стиха по автору",
    url: "/"
  }
]

@Component({
  components: {
    Accordion,
    BreadCrumbs
  }
})

export default class extends Vue {
  breadCrumbsList = BREAD_CRUMBS_LIST;

  currentGrade: number | null = null;

  authorPoemsListResponse: AuthorPoemsListInterface[] = authorPoemsListResponse;

  statesOpen = new Array(authorPoemsListResponse.length)
    .fill(false)
    .map((item, index) => !index);

  mounted() {
    this.$store.commit('bookmarks/setList', { list: BOOKMARKS_LIST, pageName: RouterParamsEnum.PoemsListByAuthor });
    this.currentGrade = this.$route.query.grade ? +this.$route.query.grade : null;

    this.$watch(
      () => this.$route.query.grade,
      (newGrade) => {
        this.currentGrade = newGrade ? +newGrade : null;
        console.log("Делаем запрос на новую пачку стихов по классам");
      }
    )
  }

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
@import 'poems-list-by-author';
</style>

<template>
  <div>
    <BreadCrumbs :breadCrumbsListProp="breadCrumbsList"/>
    <div>
      <div class="content-container gl-blue-block">
        <div class="gl-page-content">
          <h2 class="gl-subtitle">
            По авторам
            <span v-if="this.currentGrade">за <span class="mark">{{ this.currentGrade }} класс:</span></span>
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
      </div>
    </div>
  </div>
</template>
