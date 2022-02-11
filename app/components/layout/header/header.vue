<template>
  <header class="container">
    <div class="gl-page-content">
      <div class="content-wrapper">
        <nuxt-link to="/" class="logo-link">
          <img v-lazy-load src="logo.svg" alt="logo" class="logo">
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<style>
@import "./header.scss";
@import "app/styles/global.scss";
</style>
