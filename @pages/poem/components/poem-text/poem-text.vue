<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { poemResponse } from "~/@pages/poem/components/poem-text/fake-api-response";

@Component({
  components: {}
})

export default class extends Vue {

  mounted() {
  	(this.$refs.poemText as HTMLElement).innerHTML = poemResponse;
  }
};
</script>

<style lang="scss" scoped>
@import 'poem-text';
</style>

<template>
  <div class="container">
    <div class="btns-tools-wrapper">
      <button
        type="button"
        class="btn-tool hints-btn"
      />

      <button
        type="button"
        class="btn-tool printing-btn"
      />
    </div>

    <div class="poem-text-wrapper" ref="poemText">
<!--      <p>Последняя туча <span class="mark-blue" v-tooltip="{-->
<!--       trigger: 'click hover',-->
<!--       content: 'Чувство неизвестности, тревожно радостное ожидание, вера, в лучший исход'-->
<!--      }-->
<!--      ">рассеянной</span> бури!</p>-->
<!--      <p>Одна ты несешься по ясной лазури,</p>-->
<!--      <p>Одна ты наводишь унылую тень,</p>-->
<!--      <p>Одна ты <span class="mark-orange" v-tooltip="'несильная, но распространяющаяся по большой территории'">печалишь ликующий день</span>.-->
<!--      </p>-->
<!--      <p>Ты небо недавно кругом облегала,</p>-->
<!--      <p>И молния грозно тебя обвивала;</p>-->
<!--      <p>И ты издавала таинственный гром</p>-->
<!--      <p>И алчную землю поила дождем.</p>-->
<!--      <p>Довольно, сокройся! Пора миновалась,</p>-->
<!--      <p>Земля освежилась, и буря промчалась,</p>-->
<!--      <p>И ветер, лаская листочки древес,</p>-->
<!--      <p>Тебя с успокоенных гонит небес.</p>-->
<!--      <br/>-->
<!--      <br/>-->
<!--      <p>Год написания: 1835</p>-->
    </div>
  </div>
</template>
