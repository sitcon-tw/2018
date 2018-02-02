<template>
  <article>
    <sitcon-map width="100%" height="500px"></sitcon-map>
    <section class="container">
      <h2>地點</h2>
      <p>中央研究院人文社會科學館</p>
      <h2>地址</h2>
      <p>台北市南港區研究院路二段128號</p>
      <h2>搭乘捷運</h2>
      <p>搭乘捷運板南線至南港站（2 號出口）換乘公車 212、270 或藍 25 至中研院站，步行入院內至人文館</p>
      <h2>YouBike</h2>
      <p>在捷運南港展覽館站(5號出口)租借 YouBike 後，騎乘研究院路 2 段歸還至中研公園站後步行至人文館。</p>
      <h2>搭乘公車</h2>
      <p>搭乘 212、276、306、620、645、679、205、 小5、小1、小12 等公車至中研院站，步行入院內至人文館</p>
      <h2>搭乘火車</h2>
      <p>至南港站換乘公車 212、270 或藍 25 至中研院站，步行入院內至人文館</p>
      <h2>自行開車</h2>
      <p>由國道三號，南深路-中研院匝道〈16km〉出國道三號後，左轉接南深路，再左轉接舊莊路一段直走，遇到與研究院路叉路口，即可看到中研院。車輛進入院區請持證件向大門警衛室換取臨時通行證。假日換證不收費，並請停車於院內道路旁停車格。若您於週一至週五來訪，您須停車至人文社會館 B2，並需支付停車費用（每小時 20 元）。</p>
    </section>
    <main-footer></main-footer>
  </article>
</template>

<script>
  export default {
    name: 'Location'
  }
</script>

<style lang="sass" scoped>
@import '../sass/global.sass'
article
  width: 100%
  background-color: white
  section
    text-align: left
    padding-top: 40px
    padding-bottom: 80px
    color: $main-color
    h2
      margin-top: 36px
      margin-bottom: 12px
      font-size: 32px
    p
      font-size: 20px
      line-height: 36px
</style>
