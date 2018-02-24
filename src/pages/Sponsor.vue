<template>
  <article class="all">
    <div class="container"><h2>贊助</h2></div>
    <section class="brand color">
      <div class="container">
        <div class="content">
          <h3>我們歡迎個人贊助</h3>
          <p>SITCON 學生計算機年會為學生自發組成籌辦的研討會，秉持著以學生為主軸的核心價值，提供一個經驗交流與資訊技術實務分享的平台，進而達到「學以致用、教學相長」的目標。</p>
          <p>建構如此的交流平台，需要多人的努力及貢獻，亦十分需要在資金上的支持。<br>希望能藉由您的一份力量，來促成活動的舉行，讓更多學生能在舞台上展現自我成長。<br>歡迎您參與贊助，支持 SITCON、讓我們將每年的活動辦得盡善盡美！</p>
          <p><a href="https://sitcon.kktix.cc/events/sitcon2018-individual-sponsor" target="_blank">個人贊助辦法</a></p>
          <p>企業贊助歡迎聯繫: <a href="mailto:contact@sitcon.org">contact@sitcon.org</a></p>
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
        <p style="font-size:18px; padding-top: 12px;">{{ sponsor.name }}</p>
      </div>
    </div>
    <fancybox class="box" v-model="activityBox">
      <h2 style="color: white;font-size: 28px;padding-top: 0;padding-bottom: 16px;">{{ sponsorLevel }}</h2>
      <h2 style="color: white;font-size: 48px;padding-top: 0;padding-bottom: 36px;">{{ sponsorName }}</h2>
      <div class="content">
        <div class="text" v-html="sponsorSummary"></div>
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
              name: 'SITCON 學生計算機年會籌備團隊',
              icon: './static/img/sponsor/sitcon.png',
              summary: 'SITCON（Students\' Information Technology Conference, 學生計算機年會）是自 2013 年由一群學生自主性地發起，是一個以在學學生為主體的學生社群。以自發性的學習為基礎，秉持開源、創新與實作的核心理念。<br><br>我們希望藉由每年三月固定的研討會（SITCON）、每學期的 hackathon （駭客世代 HackGen）、每年暑假的夏令營及兩個禮拜定期聚會的方式，將全台灣各地對於資訊科技相關領域有興趣的學生們串聯起來，透過彼此共享、交流來切磋精進，砥礪自主自學的風氣。'
            },
            {
              name: '中央研究院資訊科學研究所',
              icon: './static/img/sponsor/iis.png',
              summary: '中央研究院資訊科學研究所於 1977 年開始設立籌備處，歷經五年籌備，於 1982 年 9 月正式成立研究所，是中央研究院數理組十個單位之一。本所的研究重點分為八大方向 , 包含生物資訊、電腦系統、資料處理與探勘、多媒體技術、語言與知識處理、網路系統與服務、程式語言與形式方法、計算理論與演算法。<br><br>本所並於 2003 年配合中研院國際研究生院 (TIGP)，開始招收生物資訊學程博士班，致力延攬及培訓此一新領域之國際人材多年有成，已招募 51 名學生，對生物資訊的研究有很大的助益。2014 年起，社群網路與人智計算新學程博士班開始招生，期待未來此學程能蓬勃發展。<br><br>所內資深研究人員皆指導或共同指導來自全國各地頂尖大學之碩、博士生，並與這些大學保持緊密的研究合作關係，與國內外資訊業界亦有極為良好之互動關係。'
            },
            {
              name: '財團法人開放文化基金會',
              icon: './static/img/sponsor/ocf.png',
              summary: '開放文化基金會成立於 2014 年，由多個開源社群及活動組織共同發起，希望協助台灣蓬勃的開放社群，進一步促進開放源碼、開放資料、開放硬體等自由精神，能更廣泛的於各領域中應用，同時也協助政府、企業及非政府組織更能了解開源軟體的優勢、開放資料的重要，進而推廣開放協作的文化。 2015 年起我們除了支援本地社群主辦多場中大型活動，也和英國代表處、美國在台協會及世界銀行等單位共同舉辦各種主題講座，深耕台灣的開放文化並與國際交流。'
            }
          ]
        },
        {
          'title': '協辦單位',
          'item': [
            {
              name: '教育部資通訊軟體創新人才推升計畫推動中心',
              icon: './static/img/sponsor/itsa.png',
              summary: '主要推動重點在協助國內大專校院建立多元培育管道，以解決產業界對軟體與服務人才質與量需求日益殷切的問題。<br><br>各大專校院⋯⋯透過教育部推廣計畫的補助機制，導入本計畫推動團隊所發展的創作社群服務平臺、線上協同學習平臺(e-tutor)及學習資源服務平臺，已逐步建立創新的培育模式，為國內軟體專業人才培育系所注入向上提升的助力，是國內目前培養軟體人才的主力之一。'
            },
            {
              name: '經濟部技術處「開源應用技術研發人才培育計畫」',
              icon: './static/img/sponsor/iii.png',
              summary: '資策會承接經濟部技術處「開源應用技術研發人才培育計畫」，為促進國內開源技術人才培育，即日起推動「開源貢獻者培育方案」，由國際開源專案Committer擔任Mentor，以「Mentor-mentee」方式帶領年輕工程師參與國際開源專案，一窺國際開源殿堂。近年來，在開源社群建立技術地位，已成為年輕工程師在國際上嶄露頭角的新風潮。<br><br>本方案公開徵求Mentor/Mentee，若您在開源社群有相當經驗，曾經擔任國際開源專案Committer或類似職務，歡迎加入我們，共同為培育年輕開源工程師一齊努力。若您對開源技術感興趣，也想學習成為開源貢獻者，歡迎成為本方案培育對象。本計畫將提供顧問費用給Mentor，參與培訓的Mentee則無須負擔任何費用。近日將舉辦說明會，有意參加者請於下列網址填寫報名表單<br><br><a href="http://www.twoss.io/107contributor.html" target="_blank">http://www.twoss.io/107contributor.html</a>'
            }
          ]
        },
        {
          'title': '黃金級',
          'item': [
            {
              name: '趨勢科技',
              icon: './static/img/sponsor/trendmicro.png',
              summary: '趨勢科技是全球雲端資安領航者，是亞洲與台灣最大的純軟體公司，為第一家率先採用「機器學習」技術及時偵測和攔截攻擊病毒的全球資安品牌。台灣為全球研發基地，培育超過1,000位以上的工程師，負責研發全球超過3千萬名企業、家庭與個人用戶使用的最新及最完整的資訊安全核心技術及產品。趨勢科技用真實數據培育軟體人才，加速產業AI化，致力於實現更安全的數位世界。'
            }
          ]
        },
        {
          'title': '白銀級',
          'item': [
            {
              name: '祐生基金會',
              icon: './static/img/sponsor/archlife.png',
              summary: '祐生研究基金會由推動建築與環境永續發展之研究開始，推動長期的知識累積與人才培養。除了過去建築、環境、生態、健康與資訊社會與文化等面向之碩士論文獎助主題外，本會目前定期舉辦的聯誼會及讀書會，強化祐生成員的知識密度。其後，於 2011 年起，本會持續針對國內開源活動進行贊助，也針對國內獨立遊戲開發者，推動知識與資訊分享聚會，並贊助台灣開發者前往特定國際遊戲競賽，期能幫助國內相關社群之發展。'
            }
          ]
        },
        {
          'title': '青銅級',
          'item': [
            {
              name: 'Akatsuki 曉數碼',
              icon: './static/img/sponsor/akatsuki.png',
              summary: '2014-2018連續五年獲評為「日本幸福企業」<br>（Best Workplaces in Japan）<br>不同於一般傳統日式企業文化，<br>我們提供優質且國際化的工作環境、<br>提倡自在開放的氣氛，鼓勵多元的工作挑戰。<br>歡迎有志者與我們一同「以遊戲的力量，為世界帶來幸福。」'
            },
            {
              name: '張國周製藥股份有限公司',
              icon: './static/img/sponsor/ckcp.png',
              summary: '張國周製藥公司，秉持張國周藥師堅持品質、走在時代先鋒的創業理念，符合歐美製藥業的嚴格標準，於 2009 年取得美國 FDA 藥品認證，是唯一經美國政府許可在當地販售的台灣胃腸藥品，也是台灣民眾所喜愛的居家生活常備藥。<br><br>延續張國周藥師的精神理念 - 助人為快樂之本，公司積極支持藝文與公益活動，願我們的關懷可以將溫暖傳遞給更多需要幫助的人。'
            },
            {
              name: '台灣微軟',
              icon: './static/img/sponsor/microsoft.png',
              summary: '微軟是全球科技產業的領航者，提供全球領先的軟體、服務、設備和解決方案，自 1975 年成立以來，一直致力於幫助個人和企業用戶，全面發揮科技潛能，實現夢想。，<br>對於學生更是有許多的栽培與規劃，Microsoft Student Partners微軟學生大使提供同學最前瞻的技術應用課程，讓學生在就業前就能習得最新軟實力，營造學生技術社群的自學力量！'
            }
          ]
        },
        {
          'title': '特別感謝',
          'item': [
            {
              name: 'COSCUP',
              icon: './static/img/sponsor/coscup.png',
              summary: '「COSCUP 2018 開源貢獻者保留票」開放申請中：<a href="http://blog.coscup.org/2017/10/coscup-2018.html" target="_blank">http://blog.coscup.org/2017/10/coscup-2018.html</a><br><br>COSCUP 是由台灣開放原始碼社群聯合推動的研討會，希望藉由每一屆的年度會議，讓全球的 FLOSS 愛好者齊聚一堂。無論您是開放原始碼的開發者、推廣者、使用者、還是想了解軟體的新手，都歡迎您來參加開源人年會。'
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
  },
  watch: {
    activityBox: function (state) {
      var self = this
      if (!state) {
        setTimeout(function () {
          self.sponsorImage = ''
        }, 400)
      }
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
    padding-top: 40px
    padding-bottom: 40px
    position: relative
    margin-bottom: 50px;
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
        font-size: 28px
        line-height: 36px
        margin-top: 12px
        margin-bottom: 18px
        font-weight: 600
        overflow-y: hidden
      p
        font-size: 18px
        line-height: 26px
        font-weight: 550
        margin-top: 14px
        margin-bottom: 14px
    .image
      display: inline-block
      vertical-align: top
      width: 40%
      margin-top: 65px
      img
        display: block
        margin-left: 10%
        width: 90%
  .color
    background-color: $main-color
    color: white
  @media all and (max-width: 1000px)
    .brand
      .content
        width: 100%
      .image
        width: 100%
        margin-top: 0px
        img
          margin-left: unset
          margin: 0 auto
</style>
