<template>
  <header class="container">
    <div class="gl-page-content">
      <div class="content-wrapper">
        <nuxt-link to="/" class="logo-link">
          <img v-lazy-load src="icons/header/logo.svg" alt="logo" class="logo">
        </nuxt-link>

        <label class="input-search-wrapper">
          <input type="text" class="input-search" placeholder="Быстрый поиск">
        </label>
      </div>
    </div>
  </header>
</template>

<style>
@import "./header.scss";
@import "app/styles/global.scss";
</style>
