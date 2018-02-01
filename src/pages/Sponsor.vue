<template>
  <article class="all">
    <div class="container"><h2>贊助</h2></div>
    <section class="brand color popular">
      <div class="brand-image"></div>
      <div class="container">
        <div class="content">
          <p>SITCON 學生計算機年會為學生自發組成籌辦的研討會，秉持著以學生為主軸的核心價值，提供一個經驗交流與資訊技術實務分享的平台，進而達到「學以致用、教學相長」的目標。</p>
          <p>建構如此的交流平台，需要多人的努力及貢獻，亦十分需要在資金上的支持。<br>希望能藉由您的一份力量，來促成活動的舉行，讓更多學生能在舞台上展現自我成長。<br>歡迎您參與贊助，支持 SITCON、讓我們將每年的活動辦得盡善盡美！</p>
          <p>個人贊助辦法：<a href="https://sitcon.kktix.cc/events/sitcon2018-individual-sponsor" target="_blank">連結</a></p>
          <p>企業贊助歡迎聯繫: contact@sitcon.org</p>
        </div>
      </div>
    </section>
    <div class="co-host container">
      <h3 class="co-host_text">共同主辦</h3>
      <div class="co-host_text_1">
        <img src="../assets/sitcon.png">
      </div>
    </div>
  </article>

</template>

<script>
export default {
  name: 'Sponsor'
}
</script>

<style lang="sass" scoped>
@import '../sass/sponsor.scss'
@import '../sass/global.sass'
section
  text-align: left
  padding-top: 50px
  padding-bottom: 50px
  position: relative
  img
    display: block
  .title
    width: 60%
  .message
    position: absolute
    top: 20px
    right: 20px
    width: 32%
  .date
    position: absolute
    bottom: 75px
    right: 40px
    width: 28%
.brand
  text-align: left
  position: relative
  color: #585858
  .content
    width: 55%
    h2
      font-size: 22px
      font-weight: 300
    h3
      width: 100%
      font-size: 32px
      line-height: 36px
      margin-top: 12px
      margin-bottom: 18px
      font-weight: 300
      overflow-y: hidden
    p
      font-size: 18px
      line-height: 36px
      font-weight: 550
      margin-top: 14px
      margin-bottom: 14px
  .brand-image
    position: absolute
    top: 0
    bottom: 0
    right: 0
    width: 35%
    background-position: left center
    background-size: 110% auto
    background-repeat: no-repeat
.color
  background-color: $main-color
  color: white
</style>
