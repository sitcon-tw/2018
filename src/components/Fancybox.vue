<template>
  <div class="fancybox" :class="{open: toggle}">
    <div class="box-content" @click.self="toggle = !toggle">
      <div class="container">
        <img src="../assets/XX.svg" class="close-btn" @click.stop="toggle = !toggle" />
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
    user-select: text
    div.container
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
      padding-right: 45px
      &::-webkit-scrollbar
        display: none
      .close-btn
        width: 30px
        position: absolute
        top: 40px
        right: 15px
        cursor: pointer
      h2
        font-size: 32px
        padding-bottom: 40px
        span
          margin-left: 32px
          font-size: 28px
      .content
        padding-top: 0px
        padding-bottom: 0px
        font-size: 0px
        height: auto
        *
          display: inline-block
          vertical-align: top
        .text
          font-size: 22px;
          width: 65%
          height: auto
          padding-top: 0px
          padding-bottom: 0px
        .img
          width: 35%
          padding-top: 0px
          padding-bottom: 0px
          img
            display: block
            margin-left: 20%
            width: 80%
            height: auto
            border-radius: 15px
            border: 12px solid #3C4755
            background-color: white
      h3
        font-size: 32px
        padding-top: 40px
        padding-bottom: 40px
@media all and (max-width: 1000px)
  .fancybox
    .box-content
      div.container
        .content
          .text
            width: 100%
          .img
            width: 100%
.fancybox.open
  .box-content
    top: 0
    background-color: rgba(0, 0, 0, 0.8)
    transition: background-color .4s
    div
      opacity: 1
      transition: opacity .1s .4s
</style>
