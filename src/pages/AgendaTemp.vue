<template>
  <article>
    <div class="container">
      <p>議程與活動介紹將於 2/7 上線</p>
    </div>
    <fancybox class="box" v-model="activityBox">
      <h2>{{'About\n'+acName}}</h2>
      <div class="content">
        <div class="text">{{acSummary}}</div>
        <div class="img">
          <img :src="acImage" :alt="acName" />
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
            image: '',
            summary: ''
          },
          {
            name: '導遊團',
            icon: './static/img/icon/icon_flag.svg',
            fontSize: '20px',
            image: '',
            summary: ''
          },
          {
            name: 'UN-CONFERENCE',
            icon: './static/img/icon/icon_unconf.svg',
            fontSize: '12px',
            image: '',
            summary: ''
          },
          {
            name: '天使計畫',
            icon: './static/img/icon/icon_angel.svg',
            fontSize: '16px',
            image: '',
            summary: ''
          },
          {
            name: '知識王',
            icon: './static/img/icon/icon_game.svg',
            fontSize: '18px',
            image: '',
            summary: ''
          },
          {
            name: '社群攤位',
            icon: './static/img/icon/icon_community.svg',
            fontSize: '18px',
            image: '',
            summary: ''
          },
          {
            name: '大地活動',
            icon: './static/img/icon/icon_land.svg',
            fontSize: '18px',
            image: '',
            summary: ''
          }
        ]
      }
    },
    methods: {
      openBox (item) {
        this.acName = item.name
        this.acImage = item.image
        this.acSummary = item.summary
        this.activityBox = true
      }
    }
  }
</script>

<style lang="sass" scoped>
@import '../sass/global.sass'
article
  width: 100%
  background-color: white
  p
    font-size: 48px
    height: 75vh
    padding-top: 30vh
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
      &:hover
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
        height: 36px
        margin-left: 14px
        margin-right: 6px
      p
        display: inline-block
        vertical-align: middle
        text-align: left
        font-weight: 600
        font-size: 16px
        line-height: 22px
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
        font-size: 28px
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
        font-size: 28px
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
          font-size: 22px
      .hackmd
        width: 95%
</style>
