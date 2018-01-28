<template>
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
            <td class="item" colspan="5">{{ res[value][0].subject }}<p v-if="res[value][0].speaker.name != ''">{{res[value][0].speaker.name}}</p></td>
          </template>
          <template v-else>
            <template v-for="(site, index) in sites" >
              <td class="item" v-if="findSiteSub(site, res[value]) !== undefined" :rowspan="calcRowspan(new Date(value), findSiteSub(site, res[value]), site)" :key="key+':'+index">{{ findSiteSub(site, res[value]).subject }}<p v-if="findSiteSub(site, res[value]).speaker.name != ''">{{findSiteSub(site, res[value]).speaker.name}}</p></td>
              <td class="item" v-else-if="isNullItem(site)" :key="key+':'+index"></td>
            </template>
          </template>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
import submissions from '../../static/json/submissions.json'
import _ from 'lodash'
export default {
  name: 'SubTable',
  data () {
    return {
      subs: submissions.slice(),
      sites: ['R2', 'R0', 'R1', 'R3', 'S'],
      rowspan: {
        'R2': 0,
        'R0': 0,
        'R1': 0,
        'R3': 0,
        'S': 0
      },
      res: null,
      times: [],
      rows: 0
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
      if (num / 10 === 0) return '0' + num
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
      if (nums !== 1) this.rowspan[site] = nums - 1
      return nums
    },
    isNullItem (site) {
      if (this.rowspan[site] !== 0) {
        this.rowspan[site]--
        return false
      } else {
        return true
      }
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
    this.times.sort()
    this.rows = this.times.length
    this.res = _.groupBy(temp, (schedule) => (schedule.start))
  }
}
</script>

<style lang="sass" scoped>
$time-width: 80px
table
  width: 100%
  thead
    tr
      .time
        width: $time-width
        padding: 12px
      th
        width: 20%
        font-size: 16px
  .sub
    font-size: 18px
    .time
      width: $time-width
      vertical-align: top
      padding-left: 12px
      padding-right: 12px
    .item
      background-color: #73828A
      color: white
      padding: 12px
      white-space: pre-line
      p
        font-size: 16px

</style>
