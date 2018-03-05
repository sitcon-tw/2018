<template>
  <article id="slido">
    <div class="side" :class="{ open: !open }">
      <div><div class="title">議程線上討論區</div><div class="btn" @click="open = !open">{{ (open)?'&lt;':'&gt;' }}</div></div>
      <p></p>
      <div>
        <mobile-row :notop="true" v-for="(value) in times" :value="value" :res="res" :key="'times:'+value" @openBox="openSlido"></mobile-row>
      </div>
    </div>
    <div class="frame" :class="{ open: !open }">
      <iframe style="width: 100%;height: 100%;border: none;"  scrolling="no" :src="isrc"></iframe>
    </div>
  </article>
</template>

<script>
import submissions from '../../static/json/submissions.json'
import _ from 'lodash'

export default {
  name: 'Slido',
  data () {
    return {
      subs: submissions.slice(),
      res: null,
      times: [],
      isrc: '',
      open: true,
      mobile: false
    }
  },
  methods: {
    openSlido (sub) {
      if (sub['sli.do'] !== '') this.isrc = 'https://www.sli.do/' + sub['sli.do']
      else this.isrc = './?mode=app#/noslido'
      if (this.mobile) this.open = false
    },
    resize () {
      this.mobile = (window.innerWidth <= 1000)
    }
  },
  mounted () {
    var temp = _.map(this.subs, (slot) => ({
      ...slot,
      start: new Date(slot.start),
      end: new Date(slot.end)
    }))
    this.times = _.map(temp, 'start')
    this.times = _.uniqBy(this.times, this.formatTime)
    this.times = this.times.slice().sort()
    this.res = _.groupBy(temp, (schedule) => (schedule.start))

    var self = this
    self.resize()
    window.addEventListener('resize', function () {
      self.resize()
    })
  }
}
</script>

<style lang="sass" scoped>
#slido
  font-size: 0px
  text-align: left
  > *
    display: inline-block
    height: 100vh
    overflow-y: scroll
  .side
    width: 25%
    border-right: 1px #54656E solid
    background-color: white
    // transition: all .2s cubic-bezier(.4,0,.2,1)
    .title
      display: inline-block
      width: 80%
      font-size: 18px
      padding: 12px
      font-weight: 500
      text-align: left
    .btn
      display: inline-block
      width: 20%
      font-size: 18px
      padding: 12px
      font-weight: 500
      text-align: right
      cursor: pointer
    &.open
      margin-left: -25%
      // transition: all .2s cubic-bezier(.4,0,.2,1)
      .btn
        position: fixed
        top: 10px
        left: 10px
        border: 1px black solid
        width: 50px
        background-color: white
  .frame
    width: 75%
    &.open
      width: 100%
@media all and (max-width: 1000px)
  #slido
    .side
      position: fixed
      top: 0px;
      left: 0px;
      width: 100%;
      &.open
        margin-left: -100%
        overflow: visible
    .frame
      width: 100%
</style>
