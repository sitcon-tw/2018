<template>
  <div id="app">
    <main-nav></main-nav>
    <main>
      <router-view/>
    </main>
    <main-footer></main-footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">
@import 'sass/main.sass'
</style>
