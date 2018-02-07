<template>
  <article>
    <div class="container">
      <section class="activity">
        <div class="button" v-for="(item,index) in activity" :key="index" @click.stop="openBox(item)" :class="{ disable: item.disable }">
          <img :src="item.icon" />
          <p :style="{ fontSize: item.fontSize }">{{ item.name }}</p>
        </div>
        <!-- <a class="button broadcast">
          <img src="../assets/icon_broadcast.svg" />
          <p>會場直播</p>
        </a>
        <a class="button hackmd">
          <img src="../assets/icon_hackmd.svg" />
          <p>會議共筆</p>
        </a> -->
      </section>
      <!-- <p class="temp">議程與部分活動介紹將於 2/7 上線</p> -->
    </div>
    <section class="table">
      <sub-table></sub-table>
    </section>
    <fancybox class="box" v-model="activityBox">
      <h2>{{'About\n'+acName}}</h2>
      <div class="content">
        <div class="text" v-html="acSummary"></div>
        <div class="img">
          <img style="border:none;background-color:rgba(0,0,0,0);width:100%;margin-left:0px;" :src="acImage" :alt="acName" />
        </div>
      </div>
    </fancybox>
    <main-footer></main-footer>
  </article>
</template>

<script>
  export default {
    name: 'Agenda',
    data () {
      return {
        activityBox: false,
        acName: '',
        acSummary: '',
        acImage: '',
        activity: [
          {
            name: 'LIGHTNING\nTALK',
            icon: './static/img/icon/icon_lighting.svg',
            fontSize: '',
            image: './static/img/activity/lighting.png',
            disable: true,
            summary: 'Lightning talk，中文譯為「閃電秀」，顧名思義即為「閃電一般短的演講」。包含準備時間在內，每位講者僅有 3 分鐘的時間上台。用飛快的速度進行簡潔扼要的分享，無論是對台上的講者或是台下的會眾，都是十分刺激又轟動全場的體驗。Lightning talk 將會在年會當天早上 10:00 於白板區開放報名，先搶先贏，並在所有議程結束後，閉幕前，在國際會議廳進行演講。'
          },
          {
            name: '導遊團',
            icon: './static/img/icon/icon_flag.svg',
            fontSize: '16px',
            image: './static/img/activity/flag.png',
            disable: false,
            summary: '第一次參加 SITCON 嗎？是個怕生的人嗎？到了現場人山人海，不知道從何逛起？<br>為了照顧第一次參與的你，我們舉辦了 SITCON 導遊團，將會走訪年會總召、幹部、社群攤位，帶領大家一步一步了解 SITCON 的各個面向、運作模式，認識 SITCON 的核心概念！<h3>出發資訊</h3><p>中午 12:00、下午 02:30 各發一團 (σﾟ∀ﾟ)σ</p><h3>集合地點</h3><p>3F 南側 R2 外的沙發區 ヾ(*´∀｀*)ﾉ</p><h3>報名方式</h3><p>當天導遊會拿著 SITCON 小旗子，只要找得到我們的隊伍，歡迎你隨時加入！</p>'
          },
          {
            name: 'Unconf',
            icon: './static/img/icon/icon_unconf.svg',
            fontSize: '18px',
            image: './static/img/activity/unconf.png',
            disable: true,
            summary: ''
          },
          {
            name: '天使計畫',
            icon: './static/img/icon/icon_angel.svg',
            fontSize: '14px',
            image: './static/img/activity/angel.png',
            disable: false,
            summary: '第一次參與沒有人帶你認識 SITCON 嗎？或者你已經參與多次 SITCON，也願意幫幫初來乍到的新手們？誠摯地邀請你參與天使計劃！<br>天使計劃是一個提供會眾們交流機會的活動，在主辦方隨機配對後，讓有經驗的天使帶領初心者，協助他們瞭解這個年會。而這次與去年不同的地方在於：會依天使的意願，除了天使與初心者一對一的交流，也有一位天使帶兩位初心者的情況，讓兩位初心者之間也能互相認識。<h3>規則</h3><ol><li>有意願參加天使計劃的人，請在 KKTIX 報名的時候勾選參加天使計劃，並詳細填寫天使計劃的相關問題。</li><li>日後我們將把配對的結果 e-mail 給您，您可以透過信中給予的聯絡資訊去聯絡您的天使或初心者。</li></ol><h3>注意</h3><ol><li>我們不處理後續配對者之間的相處與聯繫狀況。</li><li>天使計劃報名資訊如有缺漏、填寫不詳細的，我們將視為您不參加此項計劃。</li><li>報名此計劃，不能保證一定配對成功。</li></ol>'
          },
          {
            name: '知識王',
            icon: './static/img/icon/icon_game.svg',
            fontSize: '16px',
            image: './static/img/activity/game.png',
            disable: false,
            summary: '在 SITCON 2018 首度嘗試知識王活動，想知道自己對 SITCON 2018 或是資訊領域的了解多寡，那就趕緊拿起行動裝置，開始挑戰吧！答不上來也別灰心，到攤位晃晃聊天，或許會意外發現謎腳喔！'
          },
          {
            name: '社群攤位',
            icon: './static/img/icon/icon_community.svg',
            fontSize: '14px',
            image: './static/img/activity/community.png',
            disable: false,
            summary: 'SITCON 今年延續了攤位活動，目的是在促進會眾跟學生社團或相關資訊社群交流。多元的活動讓你在聽完議程意猶未盡之餘，更能充分交流！休息時間，別忘記到場外的攤位逛逛！'
          },
          {
            name: '大地活動',
            icon: './static/img/icon/icon_land.svg',
            fontSize: '14px',
            image: './static/img/activity/land.png',
            disable: false,
            summary: 'SITCON 的每年都受到台灣諸多企業與部門單位的支持與鼓勵，想知道每一間企業與公部門在做什麼嗎，他們又在為台灣做些什麼事呢，到任一個攤位聊一聊，完成攤位指定活動，可以收到意外驚喜喔!'
          }
        ]
      }
    },
    methods: {
      openBox (item) {
        if (!item.disable) {
          this.acName = item.name
          this.acImage = item.image
          this.acSummary = item.summary
          this.activityBox = true
        }
      }
    },
    watch: {
      activityBox: function (state) {
        var self = this
        if (!state) {
          setTimeout(function () {
            self.acImage = ''
          }, 400)
        }
      }
    }
  }
</script>

<style lang="sass" scoped>
@import '../sass/global.sass'
article
  width: 100%
  background-color: white
  p.temp
    font-size: 36px
    height: 70vh
    padding-top: 20vh
    text-align: center
    color: $main-color
    font-weight: 500
  section.activity
    padding-top: 30px
    padding-bottom: 30px
    user-select: none
    .button
      display: inline-block
      vertical-align: middle
      color: white
      width: 12.2%
      height: 60px
      background-color: $main-color
      border-radius: 12px
      text-align: left
      margin: 6px
      user-select: none
      cursor: pointer
      font-size: 0px
      &:hover,&:active
        opacity: 0.8
      &:before
        content: " "
        width: 0
        height: 100%
        display: inline-block
        position: relative
        vertical-align: middle
        background: #f00
      img
        display: inline-block
        vertical-align: middle
        height: 100%
        padding: 6px
      p
        display: inline-block
        vertical-align: middle
        text-align: left
        font-weight: 600
        font-size: 12px
        line-height: 18px
        white-space: pre-line
        text-overflow: ellipsis
    .broadcast
      width: 45%
      position: relative
      img
        position: absolute
        top: 12px
        bottom: 12px
        text-align: left
      p
        width: 99%
        text-align: center
        font-size: 24px
    .hackmd
      width: 45%
      position: relative
      img
        position: absolute
        top: 12px
        bottom: 12px
        text-align: left
      p
        width: 99%
        text-align: center
        font-size: 24px
    .disable
      opacity: 0.5
      cursor: default
      position: relative
      &:hover,&:active
        opacity: 0.5
        &:after
          position: absolute
          top: 0
          bottom: 0
          left: 0
          right: 0
          border-radius: 12px
          background-color: $main-color
          content: '敬請期待'
          text-align: center
          padding: 12px
          font-size: 18px
@media all and (max-width: 1000px)
  article
    section.activity
      .button
        width: 45%
      .broadcast
        img
          position: static
          width: 36px
          margin-right: 4px
        p
          width: auto
          font-size: 18px
      .hackmd
        width: 95%
</style>
