<template>
  <article class="main">
    <section class="container">
      <img class="title" src="../assets/main-title.png" />
      <img class="message" src="../assets/main-message.png" />
      <img class="date" src="../assets/main-date.png" />
    </section>
    <section class="brand color popular">
      <div class="brand-image"></div>
      <div class="container">
        <div class="content">
          <h2>ABOUT</h2>
          <h3>POPULAR<br>COMPUTER SCIENCE</h3>
          <p>“Popular Computer Science”是由兩個詞結合而來。<br>Popular Science（科普）與 Computer Science（電腦科學），我們有感於近幾年資訊領域的興起，網路與各式媒體常見誤用、誇大資訊科技的概念與影響，因此作為對資訊技術較有興趣與認知的學生，也許我們能善用專業知識讓身邊的人們更瞭解技術背後的原理，並且在善用這些技術的同時，能夠抱有正確的認知與合理的期待。</p>
        </div>
      </div>
    </section>
    <section class="brand innovation">
      <div class="container">
        <h3>Innovation & Implementation</h3>
        <p>SITCON 一直以來鼓勵參與者培養動手做的能力與習慣，2018 年也不例外，所有議程仍會著重在「學生與創新實作」相關議題。</p>
      </div>
      <img src="../assets/main-innovation.png" alt="innovation" />
    </section>
    <section class="brand color sitcon">
      <div class="brand-image"></div>
      <div class="container">
        <div class="content">
          <h2>ABOUT</h2>
          <h3>SITCON</h3>
          <p>SITCON 學生計算機年會係一學生自發組成的研討會，秉持著以學生為主軸的核心價值，藉以凝聚與傳遞學生的力量。希望藉由提供一個經驗交流與資訊技術實務分享的平台，使已有成就者能夠傳承己身經驗，嶄露頭角者在激盪中獲得靈感與啟發，並同時讓初入茅廬者得以對資訊科學有更深入的了解；進而達到「學以致用、教學相長」的目標。</p>
        </div>
      </div>
    </section>
    <section class="brand coc">
      <div class="container">
        <h2>行為準則</h2>
        <h3>Code of Conduct</h3>
        <p><br>SITCON 冀望打造屬於學生自己的舞台，而我們也致力於為社群中的每位成員提供更友善、開放的環境。我們相信每位參與社群活動的夥伴都值得被尊重，而我們會盡力提供最安全的環境，讓參與 SITCON 盛會的每位朋友能夠認識個體間的差異、在社群中相互扶助、並鼓勵每個人揮灑屬於自己生命的色彩。 因此，若有幸能在 SITCON 社群與您見面，無論您是以會眾、贊助商、工作人員、或是講者的身份參加活動，我們都希望您遵守以下的行為準則：<br><br>尊重每一位參與者，將對方的感受放在心上。<br>避免使用帶有侮辱、歧視、或具有潛在騷擾意涵的言語及手勢。<br>多關心周遭的社群夥伴，適度詢問對方是否需要協助。<br>當遭遇危險、或發現事情不對勁時，適時尋求工作人員的支援與協助。<br>在年會裡多交朋友，珍惜彼此相聚的時光！ 以下的行為是不被社群所容忍的： 針對性別、性向、種族、外貌、宗教、年齡、身體狀況或個人身份的挑釁或冒犯。<br>任何形式的性騷擾、言語及肢體霸凌。<br>公開發表、展示或放映含有侮辱、歧視、仇恨、暴力、或是性暗示的言論、影像、或錄影。<br>無故干擾議程或活動的正常進行，無視工作人員或會眾的制止。<br>干擾、攻擊會場網路，未經同意側錄封包或散佈隱私資訊。<br>違反法律的行為。<br><br>為了確保每位參與者的安全，我們將恪守以上規則。違反行為準則的參與者，我們將採取必要且 合理的手段予以介入，包含但不限於將參與者請離現場、自相關名冊除名或列為不受歡迎對象， 或在必要時移送警察機關法辦。若您或他人遇到了以上情況、或是有任何其他顧慮，都請立即尋 求 SITCON 工作人員的協助。 我們誠摯的邀請來到 SITCON 的朋友一同履行以上承諾，將 SITCON 打造為更友善、更溫暖的所在；讓每一位參與者，都能在社群的交流中共同成長、在人與人的互 動中找到自信——而這正是我們所珍惜的、屬於學生社群的真正精神。</p>
      </div>
    </section>
  </article>
</template>

<script>
  export default {
    name: 'Main'
  }
</script>

<style lang="sass" scoped>
@import '../sass/global.sass'
.main
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
      padding-left: 25px
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
        font-size: 20px
        line-height: 36px
        font-weight: 550
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
  .popular
    height: 480px
    .brand-image
      background-image: url('../assets/main-question.png')
  .innovation
    padding-bottom: 0px
    div
      padding-left: 25px
      h3
        width: 100%
        font-size: 32px
        line-height: 36px
        margin-top: 12px
        margin-bottom: 18px
        font-weight: 300
        overflow-y: hidden
      p
        font-size: 20px
        line-height: 36px
        font-weight: 550
    img
      margin-top: 24px
      width: 100%
  .sitcon
    height: 440px
    .brand-image
      background-image: url('../assets/main-sitcon.png')
  .coc
    div
      padding-left: 25px
      h3
        width: 100%
        font-size: 32px
        line-height: 36px
        margin-top: 12px
        margin-bottom: 18px
        font-weight: 300
        overflow-y: hidden
      p
        font-size: 20px
        line-height: 36px
        font-weight: 550

@media all and (max-width: 1000px)
  .main
    section
      padding-top: 30px
      padding-bottom: 30px
      position: relative
      img
        display: block
        vertical-align: top
      .title
        width: 80%
      .message
        position: absolute
        top: unset
        bottom: 220px
        right: -8%
        width: 43%
      .date
        position: static
        width: auto
        height: 180px
        margin-top: 20px
    .brand
      text-align: left
      position: relative
      .content
        width: 100%
        h2
          font-size: 32px
          line-height: 56px
        h3
          width: 50%
          font-size: 22px
          line-height: 28px
          overflow-y: hidden
          margin-bottom: 12px
        p
          font-size: 18px
          line-height: 28px
      .brand-image
        position: absolute
        top: 20px
        bottom: unset
        right: 0
        width: 45%
        height: 30%
        background-image: url('../assets/main-question.png')
        background-position: right center
        background-size: contain
        background-repeat: no-repeat
</style>
