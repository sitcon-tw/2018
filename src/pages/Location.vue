<template>
  <article>
    <sitcon-map width="100%" height="500px"></sitcon-map>
    <section class="container">
      <h2>地點</h2>
      <p>中央研究院人文社會科學館<br>台北市南港區研究院路二段128號</p>
      <h2>交通車</h2>
      <p>可搭乘捷運板南線至南港展覽館站（2 號出口）換乘交通車<br>可乘車時段：08:00-10:00</p>
      <h2>大眾運輸</h2>
      <p>捷運板南線至南港站（2 號出口）換乘公車 212、270 或藍 25 至中研院站<br>台鐵南港站換乘公車 212、270 或藍 25 至中研院站<br>公車搭乘 212、276、306、620、645、679、205、 小5、小1、小12 等公車至中研院站<br>步行入院內至人文館</p>
      <h2>YouBike</h2>
      <p>可搭乘捷運板南線至南港展覽館站（2 號出口）換乘交通車<br>可乘車時段：08:00-10:00</p>
      <h2>自行開車</h2>
      <p>由國道三號，南深路-中研院匝道〈16km〉出國道三號後，左轉接南深路，再左轉接舊莊路一段直走，遇到與研究院路叉路口，即可看到中研院。車輛進入院區請持證件向大門警衛室換取臨時通行證。假日換證不收費，並請停車於院內道路旁停車格。若您於週一至週五來訪，您須停車至人文社會館 B2，並需支付停車費用（每小時 20 元）。</p>
    </section>
  </article>
</template>

<script>
  export default {
    name: 'Location'
  }
</script>

<style lang="sass" scoped>
@import '../sass/global.sass'
section
  text-align: left
  padding-top: 40px
  padding-bottom: 80px
  color: $main-color
  h2
    margin-top: 36px
    font-size: 32px
  p
    font-size: 20px
    line-height: 36px
</style>
