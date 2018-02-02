<template>
  <div id="app">
    <main-nav></main-nav>
    <main>
      <transition :name="transitionName">
        <keep-alive>
          <router-view class="child-view"/>
        </keep-alive>
      </transition>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.meta.index
      const fromDepth = from.meta.index
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style lang="sass">
@import 'sass/main.sass'
body.isShowFancyBox
  overflow: hidden
body.isNoMacFancyBox
  overflow: hidden
  div#app
    header
      nav
        padding-right: 17px
    main
      .child-view
        padding-right: 17px
.child-view
  position: absolute
  transition: transform .5s cubic-bezier(.55,0,.1,1)
</style>
