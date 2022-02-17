<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { poemsList } from "~/app/@pages/poems-list/components/full-list/fake-api";

@Component({
  components: {}
})

export default class extends Vue {
  poemsList = poemsList;

  mounted() {
  }
}
</script>

<style lang="scss" scoped>
@import 'full-list';
</style>

<template>
  <div class="container">
    <div class="gl-page-content">
      <h2 class="gl-subtitle">
        Весь список:
      </h2>

      <ul class="poems-list">
        <li
          v-for="(poemItem, index) in poemsList"
          :key="index"
        >
          <a
            :href="poemItem.url"
            class="poem-item"
          >
            {{ `${ index + 1 }. «${ poemItem.poemName }» —` }}
            {{ poemItem.authorName.firstName }}
            <span v-if="poemItem.authorName.name">{{ poemItem.authorName.name }}.</span>
            <span v-if="poemItem.authorName.patronymic">{{ poemItem.authorName.patronymic }}.</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
