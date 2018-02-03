<template>
  <div class="fancybox" :class="{open: value}">
    <div class="box-content" @click.self="updateValue(false)">
      <div class="container">
        <img src="../assets/XX.svg" class="close-btn" @click.stop="updateValue(false)" />
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'fancybox',
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      value: (newValue, oldValue) => {
        var isScrollSpace = navigator.platform.match(/(Mac|iPhone|iPod|iPad|Android)/i)
        if (newValue) {
          if (isScrollSpace) {
            window.document.body.classList.add('isShowFancyBox')
          } else {
            window.document.body.classList.add('isScrollSpaceFancyBox')
          }
        } else {
          if (isScrollSpace) {
            window.document.body.classList.remove('isShowFancyBox')
          } else {
            window.document.body.classList.remove('isScrollSpaceFancyBox')
          }
        }
      }
    },
    methods: {
      updateValue (value) {
        this.$emit('input', value)
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
    user-select: text
    transition: background-color .4s 0s, top .0s .4s
    div.container
      position: relative
      color: white
      white-space: pre-line
      text-align: left
      padding-top: 80px
      padding-bottom: 40px
      overflow-y: scroll
      font-size: 18px
      height: 100%
      opacity: 0
      transition: opacity .4s .0s
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
        font-size: 28px
        padding-bottom: 40px
        span
          margin-left: 30px
          font-size: 24px
      .content
        padding-top: 0px
        padding-bottom: 0px
        font-size: 0px
        height: auto
        position: relative
        *
          display: inline-block
          vertical-align: top
        .text
          font-size: 18px;
          width: 65%
          height: auto
          padding-top: 0px
          padding-bottom: 0px
        .img
          float: right
          width: 35%
          padding-top: 0px
          padding-bottom: 0px
          overflow: auto
          img
            display: block
            margin-left: 20%
            width: 80%
            height: auto
            border-radius: 15px
            border: 12px solid #3C4755
            background-color: white
      h3
        font-size: 28px
        padding-top: 40px
        padding-bottom: 40px
@media all and (max-width: 1000px)
  .fancybox
    .box-content
      div.container
        padding-right: 15px
        .content
          .text
            width: 100%
          .img
            width: 100%
            position: static
            img
              margin: 0 auto
.fancybox.open
  .box-content
    top: 0
    background-color: rgba(0, 0, 0, 0.8)
    transition: background-color .4s
    div.container
      opacity: 1
      transition: opacity .4s
</style>
