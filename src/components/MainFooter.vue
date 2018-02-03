<template>
  <footer class="Footer">
    <div>
      <div>
        <a href="https://twitter.com/sitcontw" target="_blank"><img src="../assets/twitter-icon.svg" alt="twitter"></a>
        <a href="https://t.me/SITCONgeneral" target="_blank"><img src="../assets/telegram-icon.svg" alt="telegram"></a>
        <a href="https://www.youtube.com/user/SITCONArchive" target="_blank"><img src="../assets/youtube-icon.svg" alt="youtube"></a>
        <a href="https://www.flickr.com/people/sitcon/" target="_blank"><img src="../assets/flickr-icon.svg" alt="flicker"></a>
        <a href="https://www.facebook.com/SITCONtw/" target="_blank"><img src="../assets/facebook-icon.svg" alt="facebook"></a>
      </div>
      <p>© 2018 Students’ Information Technology Conference</p>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style lang="sass" scoped>
@import '../sass/global.sass'
footer
  height: 100px
  text-align: center
  background-color: $main-color
  &:before
    content: " "
    width: 0
    height: 100%
    display: inline-block
    position: relative
    vertical-align: middle
  div
    display: inline-block
    vertical-align: middle
    div
      a
        margin: 6px
        img
          height: 30px
    p
      margin-top: 10px
      color: white
      font-size: 14px
</style>
