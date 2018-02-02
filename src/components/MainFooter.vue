<template>
  <footer class="Footer">
    <div>
      <div>
        <a href="https://twitter.com/sitcontw" target="_blank"><img src="../assets/twitter-icon.png" alt="twitter"></a>
        <a href="https://t.me/SITCONgeneral" target="_blank"><img src="../assets/telegram-icon.png" alt="telegram"></a>
        <a href="https://www.youtube.com/user/SITCONArchive" target="_blank"><img src="../assets/youtube-icon.png" alt="youtube"></a>
        <a href="https://www.flickr.com/people/sitcon/" target="_blank"><img src="../assets/flickr-icon.png" alt="flicker"></a>
        <a href="https://www.facebook.com/SITCONtw/" target="_blank"><img src="../assets/facebook-icon.png" alt="facebook"></a>
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
  height: 140px
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
        margin: 8px
        img
          height: 40px
    p
      margin-top: 20px
      color: white
      font-size: 1.2rem
</style>
