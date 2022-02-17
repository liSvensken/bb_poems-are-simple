<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { randomList } from "~/app/@pages/main/fake-api-response";

const STEPS_LIST = [
  {
    title: "Посмотри видео с вариантом прочтения",
    text: "Так ты задействуешь зрительную память, визуализируешь образ стихотворения и узнаешь, с какой интонацией и настроением нужно читать это стихотворение.",
    image: "icons/main-page/step-1.svg",
    numberBackgroundColor: "#FFD2A9"
  },
  {
    title: "Прочитай краткую историю об этом стихотворении",
    text: "Понимая, о чём автор говорит в стихотворении, ты сможешь перенести это на свой жизненный опыт. Так ты будешь РАССКАЗЫВАТЬ стих, а не пересказывать непонятный текст.",
    image: "icons/main-page/step-2.svg",
    numberBackgroundColor: "#FFA9A9"
  },
  {
    title: "Посмотри значение устаревших слов и метафор прямо в тексте стихотворения",
    text: "Слова, которые знаешь, проще запомнить, чем те, которые звучат, как заклинание на Парселтанге (англ. “Parseltongue”— магический язык змей). Не так ли?)",
    image: "icons/main-page/step-3.svg",
    numberBackgroundColor: "#A9BCFF"
  },
  {
    title: "Скачай аудио-запись на телефон и слушай, когда удобно",
    text: "Вспомни, сколько песен ты знаешь наизусть? А сколько из них ты специально учил?) Слушай стих пока идешь домой, занимаешься рутинной работой, и даже перед сном. Прослушав стихотворение",
    image: "icons/main-page/step-4.svg",
    numberBackgroundColor: "#A9FFBC"
  },
  {
    title: "Устроим стихо-караоке? Читай стих, а «суфлёр», если что, тебе подскажет",
    text: "Внизу страницы есть видео с текстом. Если у тебя визуальная память, то этот способ как раз для тебя! Сначала прочитай вместе с суфлёром, а пототом с каждым разом подглядывай всё меньше",
    image: "icons/main-page/step-5.svg",
    numberBackgroundColor: "#E9A9FF"
  }
]

@Component({})

export default class extends Vue {
  stepsList = STEPS_LIST;

  randomList = randomList;

  mounted() {
  }
}
</script>

<style lang="scss" scoped>
@import 'app/styles/global';
@import 'main';
</style>

<template>
  <div>
    <div class="main-info">
      <div class="gl-page-content">
        <div class="main-info__block">
          <p class="main-info__text">
            Сервис «стихи_просто» - твой гид для быстрого и осмысленного запоминанания стихов из школьной программы.
          </p>
        </div>

        <div class="main-info__block mod-flex">
          <img src="icons/fox.svg" alt="fox" class="main-info-icon">

          <ul>
            <li class="main-info__item-list">
              никакой зубрежки
            </li>
            <li class="main-info__item-list">
              изучение «фоном» пока занимаешься спортом или листаешь ленту в соц.сетях
            </li>
            <li class="main-info__item-list">
              минимум времни, максимум результата
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="steps">
      <div class="gl-page-content">
        <h1 class="gl-title">Как это работает?</h1>

        <ul>
          <li
            v-for="(stepItem, index) in stepsList"
            :key="index"
            class="steps__item-wrapper"
          >
            <div class="steps__item">
              <div
                class="steps__item-number"
                :style="{backgroundColor: stepItem.numberBackgroundColor}"
              >
                {{ index + 1 }}
              </div>
              <img :src="stepItem.image" alt="step" class="steps__image">
              <div class="steps__item-title">
                {{ stepItem.title }}
              </div>

              <div class="steps__item-text">
                {{ stepItem.text }}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="links">
      <div class="gl-page-content">
        <div class="gl-title">
          Начнём?
        </div>

        <div class="links__content-wrapper">
          <ul class="links__list-wrapper">
            <li
              v-for="(poemItem, index) in randomList"
              :key="index"
              class="links__item-wrapper">
              <a :href="poemItem.url" class="links__item">
                {{ `«${ poemItem.poemName }» —` }}
                {{ poemItem.authorName.firstName }}
                <span v-if="poemItem.authorName.name">{{ poemItem.authorName.name }}.</span>
                <span v-if="poemItem.authorName.patronymic">{{ poemItem.authorName.patronymic }}.</span>
              </a>
            </li>
          </ul>

          <div class="gl-fox-info-wrapper">
            <div class="gl-fox-info">
              Что будем учить?
            </div>
            <img src="icons/fox.svg" alt="fox" class="gl-fox-info-icon">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
