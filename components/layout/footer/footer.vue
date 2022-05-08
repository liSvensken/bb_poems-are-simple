<style lang="scss" scoped>
@import "styles/global";
@import "footer";
</style>

<template>
  <footer class="content-wrapper">
    <div class="gl-page-content">
      <div class="content">
        <div class="info">
          Все произведения, опубликованные на сайте, являются общественным достоянием согласно ГК РФ (статьи 1281 и
          1282). Если Вы считаете, что какое-либо из опубликованных произведений нарушает авторское право, просим
          связаться с администрацией сайта через электронную почту
          <a href="mailto:siteName@gmail.com" class="link">poems.simple@gmail.com</a>.
          Все материалы, нарушающие
          авторские права будут немедленно удалены.
        </div>

        <div class="copyright">
          <div>©poemsSimple.ru</div>
          <div>Казань, {{ new Date().getFullYear() }} г.</div>
        </div>
      </div>
    </div>
  </footer>
</template>
