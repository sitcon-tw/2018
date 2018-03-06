<template>
  <div class="subtable">
    <div v-if="!mobile" class="container">
      <table>
        <thead>
          <tr>
            <th class="time"></th>
            <th v-for="item in sites" :key="item">{{ item }}</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="res !== null">
            <sub-table-row v-for="(value, index) in times" :indexx="index" :value="value" :res="res" :times="times" :sites="sites" @openBox="goSub" :key="'row:'+index"></sub-table-row>
          </template>
        </tbody>
      </table>
    </div>
    <div v-else class="mobile-table">
      <mobile-row v-for="(value) in times" :value="value" :res="res" @openBox="goSub" :key="'times:'+value"></mobile-row>
    </div>
    <fancybox class="box" v-model="activityBox">
      <h2>{{subSubject}}<span v-if="subslides !== undefined"><a :href="subslides" target="_blank">#簡報連結</a></span></h2>
      <p class="text">{{subSummary}}</p>
      <h3 v-if="subSpeakerName!==''">{{ 'About '+subSpeakerName }}</h3>
      <div class="content" v-if="subSpeakerName!==''">
        <div class="img">
          <!-- <img style="height:80%;" v-if="subAvatar !== ''" :src="subAvatar" :alt="subSpeakerName" /> -->
          <div class="image" style="height:80%;" v-if="subAvatar !== ''" :style="{ backgroundImage: 'url('+subAvatar+')' }"></div>
        </div>
        <div class="text">{{subBio}}</div>
      </div>
    </fancybox>
  </div>
</template>

<script>
import submissions from '../../static/json/submissions.json'
import _ from 'lodash'
export default {
  name: 'SubTable',
  data () {
    return {
      sites: ['R2', 'R0', 'R1', 'R3', 'S'],
      times: [],
      activityBox: false,
      subSubject: '',
      subSummary: '',
      subslides: '',
      subSpeakerName: '',
      subAvatar: '',
      subBio: '',
      mobile: false
    }
  },
  computed: {
    subs: function () {
      let result = submissions.slice()
      if (!this.mobile) result = this.filterSub(result)
      return result
    },
    res: function () {
      if (!this.mobile) {
        this.subs = this.filterSub(this.subs)
      }
      var temp = _.map(this.subs, (slot) => ({
        ...slot,
        start: new Date(slot.start),
        end: new Date(slot.end)
      }))
      this.times = _.map(temp, 'start')
      this.times = _.uniqBy(this.times, this.formatTime)
      this.times = this.times.slice().sort()

      return _.groupBy(temp, (schedule) => (schedule.start))
    }
  },
  methods: {
    filterSub (subs) {
      let array = ['午餐']
      let result = subs.filter((value) => {
        return array.indexOf(value.subject) === -1
      })
      result.push({
        'id': '97f3ae3d-100e-4f78-87eb-61795a733600',
        'subject': '午餐',
        'summary': '',
        'type': 'E',
        'room': 'R0',
        'broadcast': [],
        'start': '2018-03-10T11:50:00+08:00',
        'end': '2018-03-10T12:40:00+08:00',
        'sli.do': '',
        'beginner': '',
        '': '',
        'speaker': {
          'name': '',
          'avatar': 'http://sitcon.org/2018/static/img/staffs/stone.png',
          'bio': ''
        }
      })
      result.push({
        'id': '97f3ae3d-100e-4f78-87eb-61795a733600',
        'subject': '午餐',
        'summary': '',
        'type': 'E',
        'room': 'R1',
        'broadcast': [],
        'start': '2018-03-10T11:50:00+08:00',
        'end': '2018-03-10T12:00:00+08:00',
        'sli.do': '',
        'beginner': '',
        '': '',
        'speaker': {
          'name': '',
          'avatar': 'http://sitcon.org/2018/static/img/staffs/stone.png',
          'bio': ''
        }
      })
      result.push({
        'id': '97f3ae3d-100e-4f78-87eb-61795a733600',
        'subject': '午餐',
        'summary': '',
        'type': 'E',
        'room': 'R2',
        'broadcast': [],
        'start': '2018-03-10T11:50:00+08:00',
        'end': '2018-03-10T12:00:00+08:00',
        'sli.do': '',
        'beginner': '',
        '': '',
        'speaker': {
          'name': '',
          'avatar': 'http://sitcon.org/2018/static/img/staffs/stone.png',
          'bio': ''
        }
      })
      result.push({
        'id': '97f3ae3d-100e-4f78-87eb-61795a733600',
        'subject': '午餐',
        'summary': '',
        'type': 'E',
        'room': 'R1',
        'broadcast': [],
        'start': '2018-03-10T12:30:00+08:00',
        'end': '2018-03-10T12:40:00+08:00',
        'sli.do': '',
        'beginner': '',
        '': '',
        'speaker': {
          'name': '',
          'avatar': 'http://sitcon.org/2018/static/img/staffs/stone.png',
          'bio': ''
        }
      })
      result.push({
        'id': '97f3ae3d-100e-4f78-87eb-61795a733600',
        'subject': '午餐',
        'summary': '',
        'type': 'E',
        'room': 'R2',
        'broadcast': [],
        'start': '2018-03-10T12:30:00+08:00',
        'end': '2018-03-10T12:40:00+08:00',
        'sli.do': '',
        'beginner': '',
        '': '',
        'speaker': {
          'name': '',
          'avatar': 'http://sitcon.org/2018/static/img/staffs/stone.png',
          'bio': ''
        }
      })
      result.push({
        'id': '97f3ae3d-100e-4f78-87eb-61795a733600',
        'subject': '午餐',
        'summary': '',
        'type': 'E',
        'room': 'R3',
        'broadcast': [],
        'start': '2018-03-10T11:50:00+08:00',
        'end': '2018-03-10T12:40:00+08:00',
        'sli.do': '',
        'beginner': '',
        '': '',
        'speaker': {
          'name': '',
          'avatar': 'http://sitcon.org/2018/static/img/staffs/stone.png',
          'bio': ''
        }
      })
      result.push({
        'id': '97f3ae3d-100e-4f78-87eb-61795a733600',
        'subject': '午餐',
        'summary': '',
        'type': 'E',
        'room': 'S',
        'broadcast': [],
        'start': '2018-03-10T12:00:00+08:00',
        'end': '2018-03-10T12:40:00+08:00',
        'sli.do': '',
        'beginner': '',
        '': '',
        'speaker': {
          'name': '',
          'avatar': 'http://sitcon.org/2018/static/img/staffs/stone.png',
          'bio': ''
        }
      })
      return result
    },
    paddingLeft (num) {
      if (num / 10 < 1) return '0' + num
      else return num
    },
    formatTime (date) {
      return this.paddingLeft(date.getHours()) + ':' + this.paddingLeft(date.getMinutes())
    },
    goSub (sub) {
      this.$router.replace('/agenda/sub/' + sub.id)
    },
    openBox (sub) {
      this.subSubject = sub.subject
      this.subslides = sub.slides
      this.subAvatar = sub.speaker.avatar
      this.subBio = sub.speaker.bio
      this.subSpeakerName = sub.speaker.name
      this.subSummary = sub.summary
      this.activityBox = true
    },
    resize () {
      this.mobile = (window.innerWidth <= 1000)
    }
  },
  created () {
    window._rowspan = {
      'R2': 0,
      'R0': 0,
      'R1': 0,
      'R3': 0,
      'S': 0
    }
  },
  mounted () {
    // for (let time of this.res) {
    //   if (this.formatTime(time) === '15:20') {
    //     this.res[time].end = new Date('2018-03-10T15:40:00+08:00')
    //   }
    // }
    var self = this
    self.resize()
    window.addEventListener('resize', function () {
      self.resize()
    })

    if (this.$route.params.subId !== undefined) {
      var item = _.find(this.subs, (value) => { return value.id === this.$route.params.subId })
      if (item !== undefined) {
        this.openBox(item)
      }
    }
  },
  watch: {
    activityBox: function (state) {
      var self = this
      if (!state) {
        setTimeout(function () {
          self.subAvatar = ''
        }, 400)
        self.$router.replace('/agenda')
      }
    },
    '$route.params.subId': function (state) {
      var item = _.find(this.subs, (value) => { return value.id === this.$route.params.subId })
      if (item !== undefined) {
        this.openBox(item)
      }
    }
  },
  destroyed () {
    window.removeEventListener('resize')
  }
}
</script>

<style lang="sass" scoped>
div.subtable
  width: 100%
  $time-width: 80px
  margin-bottom: 20px
  div.container
    overflow-y: hidden
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
@media all and (max-width: 1000px)
  div.subtable
    $time-width: 60px
    div.container
      table
        thead
          tr
            .time
              width: $time-width
              padding: 8px
            th
              width: 20%
              font-size: 12px

</style>
