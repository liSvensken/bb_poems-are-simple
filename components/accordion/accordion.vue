<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component({
  components: {}
})

export default class extends Vue {
  @Prop() isOpenProp!: boolean;
  @Prop() index!: number;

  detailsContentRef: HTMLElement | undefined;
  detailsMaxHeight: number = 0;

  mounted() {
    this.detailsContentRef = this.$refs.detailsContent as HTMLElement;
    this.detailsMaxHeight = this.detailsContentRef.clientHeight;
  }
}
</script>

<style lang="scss" scoped>
@import 'accordion';
</style>

<template>
  <div class="container">
    <button
      type="button"
      class="summary"
      ref="summary"
      @click="$emit('onOpen', !isOpenProp, index)"
    >
      <slot name="AccordionSummary"/>
    </button>

    <div
      ref="detailsWrapper"
      class="details-wrapper"
      :class="{ 'mod-open': isOpenProp }"
      :style="{ maxHeight: isOpenProp ? `${ detailsMaxHeight }px` : 0 }"
    >
      <div
        class="details-content"
        ref="detailsContent"
      >
        <slot name="AccordionDetails"/>
      </div>
    </div>
  </div>
</template>
