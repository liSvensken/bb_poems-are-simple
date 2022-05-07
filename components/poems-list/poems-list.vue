<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { RouterParamsEnum } from "~/enums/routerParams.enum";
import { PoemInterface } from "~/interfaces/api/poem.interface";

@Component({
  components: {}
})

export default class extends Vue {
  @Prop() title!: string;
  @Prop() list!: PoemInterface[];

  getLink(urlParam: string) {
    return `/${ RouterParamsEnum.Poem }/${ urlParam }`;
  }
}
</script>

<style lang="scss" scoped>
@import 'poems-list';
</style>

<template>
  <div class="container">
    <h2 class="gl-subtitle">
      {{ this.title }}
    </h2>

    <ul class="poems-list">
      <li
        v-for="(poemItem, index) in list"
        :key="index"
      >
        <router-link
          :to="getLink(poemItem.urlParam)"
          class="poem-item"
        >
          {{ `${ index + 1 }. «${ poemItem.poemName }» —` }}
          {{ poemItem.authorName.firstName }}
          <span v-if="poemItem.authorName.name">{{ poemItem.authorName.name }}.</span>
          <span v-if="poemItem.authorName.patronymic">{{ poemItem.authorName.patronymic }}.</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
