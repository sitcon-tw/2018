<template>
  <div>
    <table>
      <thead>
        <tr>
          <th class="time"></th>
          <th v-for="item in sites" :key="item">{{ item }}</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="res !== null">
          <tr class="sub" v-for="(value, key) in times" :key="key">
            <td class="time">{{ formatTime(new Date(value)) }}</td>
            <template v-if="res[value].length === 1 && res[value][0].broadcast === true">
              <td class="item clickable" v-if="res[value][0].summary !== ''" @click="openBox(res[value][0])" colspan="5">{{ res[value][0].subject }}<p v-if="res[value][0].speaker.name != ''">{{res[value][0].speaker.name}}</p></td>
              <td class="item" v-else colspan="5">{{ res[value][0].subject }}<p v-if="res[value][0].speaker.name != ''">{{res[value][0].speaker.name}}</p></td>
            </template>
            <template v-else>
              <template v-for="(site, index) in sites" >
                <template v-if="findSiteSub(site, res[value]) !== undefined">
                  <td class="item clickable" v-if="findSiteSub(site, res[value]).summary !== ''" @click.stop="openBox(findSiteSub(site, res[value]))" :rowspan="calcRowspan(new Date(value), findSiteSub(site, res[value]), site)" :key="key+':'+index">{{ findSiteSub(site, res[value]).subject }}<p v-if="findSiteSub(site, res[value]).speaker.name != ''">{{findSiteSub(site, res[value]).speaker.name}}</p></td>
                  <td class="item clickable" v-else :rowspan="calcRowspan(new Date(value), findSiteSub(site, res[value]), site)" :key="key+':'+index">{{ findSiteSub(site, res[value]).subject }}<p v-if="findSiteSub(site, res[value]).speaker.name != ''">{{findSiteSub(site, res[value]).speaker.name}}</p></td>
                </template>
                <td class="item" v-else-if="isNullItem(site)" :key="'space:'+index"></td>
              </template>
            </template>
          </tr>
        </template>
      </tbody>
    </table>
    <fancybox class="box" v-model="activityBox">
      <h2>{{subSubject}}<span v-if="subslides !== undefined"><a :href="subslides" target="_blank">#簡報連結</a></span></h2>
      <p class="text">{{subSummary}}</p>
      <h3 v-if="subSpeakerName!==''">{{ 'About '+subSpeakerName }}</h3>
      <div class="content" v-if="subSpeakerName!==''">
        <div class="img">
          <img :src="subAvatar" :alt="subSpeakerName" />
        </div>
        <div class="text">{{subBio}}</div>
      </div>
    </fancybox>
  </div>
</template>

<script>
import submissions from '../../static/json/submissions.json'
import _ from 'lodash'
let rowspan = {
  'R2': 0,
  'R0': 0,
  'R1': 0,
  'R3': 0,
  'S': 0
}
export default {
  name: 'SubTable',
  data () {
    return {
      subs: submissions.slice(),
      sites: ['R2', 'R0', 'R1', 'R3', 'S'],
      res: null,
      times: [],
      rows: 0,
      activityBox: false,
      subSubject: '',
      subSummary: '',
      subslides: '',
      subSpeakerName: '',
      subAvatar: '',
      subBio: ''
    }
  },
  methods: {
    addDefaultEvent () {
      this.subs = submissions.slice()
      this.subs.push({
        'speaker': {
          'name': '',
          'avatar': '',
          'bio': ''
        },
        'start': '2017-03-18T08:30:00+08:00',
        'end': '2017-03-18T09:00:00+08:00',
        'type': 'E',
        'room': 'R0',
        'broadcast': true,
        'subject': '入場時間',
        'summary': ''
      })
      this.subs.push({
        'speaker': {
          'name': '',
          'avatar': '',
          'bio': ''
        },
        'start': '2017-03-18T09:00:00+08:00',
        'end': '2017-03-18T09:10:00+08:00',
        'type': 'E',
        'room': 'R0',
        'broadcast': true,
        'subject': '開幕',
        'summary': ''
      })
      this.subs.push({
        'speaker': {
          'name': '',
          'avatar': '',
          'bio': ''
        },
        'start': '2017-03-18T11:50:00+08:00',
        'end': '2017-03-18T12:50:00+08:00',
        'type': 'E',
        'room': 'R0',
        'broadcast': true,
        'subject': '午餐',
        'summary': ''
      })
      this.subs.push({
        'speaker': {
          'name': '',
          'avatar': '',
          'bio': ''
        },
        'start': '2017-03-18T15:20:00+08:00',
        'end': '2017-03-18T16:00:00+08:00',
        'type': 'E',
        'room': 'R0',
        'broadcast': true,
        'subject': '點心',
        'summary': ''
      })
      this.subs.push({
        'speaker': {
          'name': '',
          'avatar': '',
          'bio': ''
        },
        'start': '2017-03-18T18:25:00+08:00',
        'end': '2017-03-18T18:35:00+08:00',
        'type': 'E',
        'room': 'R0',
        'broadcast': true,
        'subject': '閉幕',
        'summary': ''
      })
    },
    paddingLeft (num) {
      if (num / 10 < 1) return '0' + num
      else return num
    },
    formatTime (date) {
      return this.paddingLeft(date.getHours()) + ':' + this.paddingLeft(date.getMinutes())
    },
    findSiteSub (site, subs) {
      return _.find(subs, (value) => { return value.room === site })
    },
    calcRowspan (date, sub, site) {
      var nums = 1
      var indexof = -1
      for (var j = 0; j < this.times.length; j++) {
        if (new Date(this.times[j]).valueOf() === date.valueOf()) {
          indexof = j
          break
        }
      }
      if (indexof !== -1) {
        for (var i = indexof + 1; i < this.times.length; i++) {
          if (new Date(this.times[i]).valueOf() < sub.end.valueOf()) nums++
          else break
        }
      }
      if (nums !== 1) rowspan[site] = nums - 1
      return nums
    },
    isNullItem (site) {
      if (rowspan[site] !== 0) {
        rowspan[site]--
        return false
      } else {
        return true
      }
    },
    openBox (sub) {
      this.subSubject = sub.subject
      this.subslides = sub.slides
      this.subAvatar = 'http://sitcon.org/2017/' + sub.speaker.avatar
      this.subBio = sub.speaker.bio
      this.subSpeakerName = sub.speaker.name
      this.subSummary = sub.summary
      this.activityBox = true
    }
  },
  mounted () {
    this.addDefaultEvent()
    var temp = _.map(this.subs, (slot) => ({
      ...slot,
      start: new Date(slot.start),
      end: new Date(slot.end)
    }))
    this.times = _.map(temp, 'start')
    this.times = _.uniqBy(this.times, this.formatTime)
    this.times = this.times.slice().sort()
    this.rows = this.times.length
    this.res = _.groupBy(temp, (schedule) => (schedule.start))
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
div
  width: 100%
  overflow-y: hidden
  $time-width: 80px
  margin-bottom: 20px
  table
    width: 100%
    thead
      tr
        .time
          width: $time-width
          padding-right: 12px
        th
          width: 20%
          font-size: 16px
    .sub
      font-size: 18px
      .time
        width: $time-width
        vertical-align: top
        padding-right: 12px
      .item
        background-color: #73828A
        color: white
        padding: 12px
        white-space: pre-line
      .clickable
        cursor: pointer
        &:hover
          opacity: 0.6
        p
          font-size: 16px
@media all and (max-width: 1000px)
  div
    $time-width: 60px
    table
      thead
        tr
          .time
            width: $time-width
            padding: 8px
          th
            width: 20%
            font-size: 12px
      .sub
        font-size: 14px
        .time
          width: $time-width
          vertical-align: top
          padding-left: 4px
          padding-right: 4px
        .item
          background-color: #73828A
          color: white
          padding: 6px
          white-space: pre-line
          p
            font-size: 12px

</style>
