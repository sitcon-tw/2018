<template>
  <div class="mobile-item">
    <div class="timecol">{{ formatTime(value) }}</div>
    <div class="content" :class="{ clickable: item.summary!=='' }" v-for="(item,index) in res[value]" :key="'sub:'+index" @click.stop="openBox(item)">
      <div>
        <div class="title">{{item.subject}}</div>
        <div class="room">{{item.room}}</div>
      </div>
      <div>
        <div class="speaker">{{item.speaker.name!==''?('- '+item.speaker.name):''}}</div>
        <div class="interval">{{ calcInterval(item.start, item.end) + ' min' }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MobileRow',
    props: ['value', 'res'],
    methods: {
      paddingLeft (num) {
        if (num / 10 < 1) return '0' + num
        else return num
      },
      formatTime (date) {
        return this.paddingLeft(date.getHours()) + ':' + this.paddingLeft(date.getMinutes())
      },
      calcInterval (start, end) {
        return (end.valueOf() - start.valueOf()) / 1000 / 60
      },
      openBox (sub) {
        if (sub.summary !== '') {
          this.$emit('openBox', sub)
        }
      }
    }
  }
</script>

<style lang="sass" scoped>
@import '../sass/global.sass'
.mobile-item
  color: white
  text-align: left
  .timecol
    padding-top: 10px
    padding-bottom: 10px
    padding-left: 18px
    padding-right: 18px
    background-color: #54656E
    font-size: 20px
    position: sticky
    top: $nav-mobile-height
  .content
    background-color: #677F8B
    font-size: 0px
    padding-top: 12px
    padding-bottom: 12px
    padding-left: 18px
    padding-right: 18px
    border-bottom: 1px solid #54656E
    >div
      &:first-child
        padding-bottom: 2px
      >*
        display: inline-block
        vertical-align: top
      .title
        width: 80%
        font-size: 16px
        font-weight: 500
        white-space: pre-line
      .room
        width: 20%
        font-size: 16px
        text-align: right
        padding-top: 5px
      .speaker
        width: 50%
        font-size: 14px
        font-weight: 500
      .interval
        width: 50%
        font-size: 12px
        text-align: right
  .clickable
    cursor: pointer
    &:hover,&:active
      opacity: 0.6
</style>
