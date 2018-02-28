<template>
  <article>
    <section class="container">
      <h2>會場地圖</h2>
    </section>
    <main-footer></main-footer>
  </article>
</template>

<script>
  export default {
    name: 'Venue'
  }
</script>

<style lang="sass" scoped>
@import '../sass/global.sass'
article
  width: 100%
  background-color: white
  section
    text-align: left
    padding-top: 20px
    padding-bottom: 40px
    color: $main-color
    h2
      margin-top: 26px
      margin-bottom: 12px
      font-size: 20px
    p
      font-size: 14px
      line-height: 22px
</style>
