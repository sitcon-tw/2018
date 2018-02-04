<template>
  <tr class="sub">
    <td class="time">{{ formatTime(new Date(value)) }}</td>
    <template v-if="res[value].length === 1 && res[value][0].broadcast === true">
      <sub-table-col :broadcast="true" :siteSub="res[value][0]" :times="times" @openBox="openBox" :key="'broadcast:'+indexx"></sub-table-col>
    </template>
    <template v-else>
      <template v-for="(site, index) in sites">
        <template v-if="findSiteSub(site, res[value]) !== undefined">
          <sub-table-col :broadcast="false"  :siteSub="findSiteSub(site, res[value])" :times="times" @openBox="openBox" :key="indexx+':'+index"></sub-table-col>
        </template>
        <td class="item" v-else-if="isNullItem(site)" :key="'space:'+index"></td>
      </template>
    </template>
  </tr>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'SubTableRow',
  props: ['indexx', 'value', 'res', 'times', 'sites'],
  methods: {
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
    isNullItem (site) {
      if (window._rowspan[site] !== 0) {
        window._rowspan[site]--
        return false
      } else {
        return true
      }
    },
    openBox (sub) {
      this.$emit('openBox', sub)
    }
  }
}
</script>

<style lang="sass" scoped>
$time-width: 60px
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
    &:hover,&active
      opacity: 0.6
    p
      font-size: 16px
@media all and (max-width: 1000px)
  .sub
    $time-width: 60px
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
