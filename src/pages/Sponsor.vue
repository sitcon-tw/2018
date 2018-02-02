<template>
  <article class="all">
    <div class="container"><h2>贊助</h2></div>
    <section class="brand color">
      <div class="container">
        <div class="content">
          <h3>我們歡迎個人贊助</h3>
          <p>SITCON 學生計算機年會為學生自發組成籌辦的研討會，秉持著以學生為主軸的核心價值，提供一個經驗交流與資訊技術實務分享的平台，進而達到「學以致用、教學相長」的目標。</p>
          <p>建構如此的交流平台，需要多人的努力及貢獻，亦十分需要在資金上的支持。<br>希望能藉由您的一份力量，來促成活動的舉行，讓更多學生能在舞台上展現自我成長。<br>歡迎您參與贊助，支持 SITCON、讓我們將每年的活動辦得盡善盡美！</p>
          <p>個人贊助辦法：<a href="https://sitcon.kktix.cc/events/sitcon2018-individual-sponsor" target="_blank">連結</a></p>
          <p>企業贊助歡迎聯繫: contact@sitcon.org</p>
        </div>
        <div class="image">
          <img src="../assets/person-sponsor.jpg" alt="個人贊助" />
        </div>
      </div>
    </section>
    <div class="co-host container" v-for="(item,index) in sponsors" :key="index">
      <h3 class="co-host_text">{{ item.title }}</h3>
      <div class="co-host_text_1" v-for="(sponsor) in item.item" :key="sponsor.name" @click.stop="openBox(item.title,sponsor)">
        <img :src="sponsor.icon">
      </div>
    </div>
    <fancybox class="box" v-model="activityBox">
      <h2 style="color: white;font-size: 28px;padding-top: 0;padding-bottom: 16px;">{{ sponsorLevel }}</h2>
      <h2 style="color: white;font-size: 48px;padding-top: 0;padding-bottom: 36px;">{{ sponsorName }}</h2>
      <div class="content">
        <div class="text">{{sponsorSummary}}</div>
        <div class="img">
          <img style="border: none" :src="sponsorImage" :alt="sponsorName" />
        </div>
      </div>
    </fancybox>
    <main-footer></main-footer>
  </article>
</template>

<script>
export default {
  name: 'Sponsor',
  data () {
    return {
      activityBox: false,
      sponsorLevel: '',
      sponsorName: '',
      sponsorSummary: '',
      sponsorImage: '',
      sponsors: [
        {
          'title': '共同主辦',
          'item': [
            {
              name: 'SITCON',
              icon: './static/img/sponsor/sitcon.png',
              summary: 'SITCON（Students\' Information Technology Conference, 學生計算機年會）是自 2013 年由一群學生自主性地發起，是一個以在學學生為主體的學生社群。以自發性的學習為基礎，秉持開源、創新與實作的核心理念。\n\n我們希望藉由每年三月固定的研討會（SITCON）、每學期的 hackathon （駭客世代 HackGen）、每年暑假的夏令營及兩個禮拜定期聚會的方式，將全台灣各地對於資訊科技相關領域有興趣的學生們串聯起來，透過彼此共享、交流來切磋精進，砥礪自主自學的風氣。'
            }
          ]
        }
      ]
    }
  },
  methods: {
    openBox (name, sponsor) {
      this.sponsorLevel = name
      this.sponsorName = sponsor.name
      this.sponsorSummary = sponsor.summary
      this.sponsorImage = sponsor.icon
      this.activityBox = true
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../sass/sponsor.scss'
@import '../sass/global.sass'
article
  width: 100%
  background-color: white
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
    font-size: 0px
    .content
      display: inline-block
      vertical-align: top
      width: 60%
      h2
        font-size: 22px
        font-weight: 300
      h3
        width: 100%
        font-size: 32px
        line-height: 36px
        margin-top: 12px
        margin-bottom: 18px
        font-weight: 600
        overflow-y: hidden
      p
        font-size: 18px
        line-height: 36px
        font-weight: 550
        margin-top: 14px
        margin-bottom: 14px
    .image
      display: inline-block
      vertical-align: top
      width: 40%
      margin-top: 70px
      img
        display: block
        margin-left: 20%
        width: 80%
  .color
    background-color: $main-color
    color: white
  @media all and (max-width: 1000px)
    .brand
      .content
        width: 100%
      .image
        width: 100%
</style>
