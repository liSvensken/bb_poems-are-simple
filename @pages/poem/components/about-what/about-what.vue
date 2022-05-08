<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({
  components: {}
})

export default class extends Vue {
  @Prop() explanationText!: string[];

  isOpen = false;
  contentRef: HTMLElement | undefined;
  contentMaxHeight: number = 0;

  mounted() {
    this.contentRef = this.$refs.textContent as HTMLElement;
    this.contentMaxHeight = this.contentRef.clientHeight;
  }
};
</script>

<style lang="scss" scoped>
@import 'about-what';
</style>

<template>
  <div class="container">
    <div class="gl-caption">
      О чём это вообще?
    </div>

    <div
      class="text-container"
      :class="{ 'mod-open': isOpen }"
      :style="{ maxHeight: isOpen ? `${ contentMaxHeight }px` : '120px' }"
    >
      <div class="text-content" ref="textContent">
        <p
          v-for="(explanationTextItem, i) in explanationText"
          :key="i"
          class="text"
        >
          {{ explanationTextItem }}
        </p>
      </div>
    </div>

    <button
      type="button"
      class="btn-more"
      @click="isOpen = !isOpen"
    >
      <span v-if="isOpen">
        Я всё понял
      </span>
      <span v-else>
        Почитаю ещё
      </span>
    </button>
  </div>
</template>
