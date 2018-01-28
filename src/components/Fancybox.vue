<template>
  <div class="fancybox" :class="{open: toggle}">
    <div class="box-content">
      <div class="container">
        <img src="../assets/XX.svg" class="close-btn" @click="toggle = !toggle" />
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'fancybox',
    props: {
      toggle: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      toggle: (newValue, oldValue) => {
        if (newValue !== oldValue) {
          window.document.body.classList.toggle('isShowFancyBox')
        }
      }
    }
  }
</script>

<style lang="sass" scoped>
.fancybox
  .box-content
    display: block
    position: fixed
    top: 100%
    left: 0
    right: 0
    bottom: 0
    z-index: 9999
    background-color: rgba(0, 0, 0, 0)
    transition: background-color .4s
    div
      position: relative
      color: white
      white-space: pre-line
      text-align: left
      padding-top: 80px
      padding-bottom: 40px
      overflow-y: scroll
      font-size: 22px
      height: 100%
      opacity: 0
      transition: opacity .1s .4s
      &::-webkit-scrollbar
        display: none
      .close-btn
        width: 30px
        position: absolute
        top: 40px
        right: 15px
        cursor: pointer
.fancybox.open
  .box-content
    top: 0
    background-color: rgba(0, 0, 0, 0.8)
    transition: background-color .4s
    div
      opacity: 1
      transition: opacity .1s .4s
</style>
