<template>
  <article class="container">
    <section class="activity">
      <div class="button">
        <img src="../assets/icon_lighting.svg" />
        <p>LIGHTNING<br>TALK</p>
      </div>
    </section>
    <section class="table">
      <sub-table></sub-table>
    </section>
  </article>
</template>

<script>
  export default {
    name: 'Agenda'
  }
</script>

<style lang="sass" scoped>
@import '../sass/global.sass'
article
  section.activity
    padding-top: 30px
    padding-bottom: 30px
    user-select: none
    cursor: pointer
    .button
      display: inline-block
      vertical-align: middle
      padding: 8px
      color: white
      width: 160px
      background-color: $main-color
      border-radius: 12px
      img
        display: inline-block
        vertical-align: middle
        height: 43px
        margin-right: 4px
      p
        display: inline-block
        vertical-align: middle
        text-align: left
        font-weight: 600
        font-size: 20px
        line-height: 24px

</style>
