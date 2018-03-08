<template>
  <td class="item clickable" :class="{short: siteSub.type === 'S'}" v-if="siteSub.summary !== ''" @click.stop="openBox(siteSub)" :rowspan="calcRowspan(siteSub)"  :colspan="(broadcast)?5:''">{{ siteSub.subject }}<sub v-if="siteSub.beginner">新手友善</sub><p v-if="siteSub.speaker.name != ''">{{siteSub.speaker.name}}</p></td>
  <td class="item" v-else :rowspan="calcRowspan(siteSub)" :colspan="(broadcast)?5:''">{{ siteSub.subject }}<p v-if="siteSub.speaker.name != ''">{{siteSub.speaker.name}}</p></td>
</template>

<script>
export default {
  name: 'SubTableCol',
  props: ['siteSub', 'times', 'broadcast'],
  methods: {
    calcRowspan (sub) {
      var date = sub.start
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
      if (nums !== 1) {
        window._rowspan[sub.room] = nums - 1
      }
      return nums
    },
    openBox (sub) {
      this.$emit('openBox', sub)
    }
  }
}
</script>

<style lang="sass" scoped>
.item
  background-color: #73828A
  color: white
  padding: 12px
  white-space: pre-line
  sub
    font-size: 12px
    color: #ffeb3b
    font-weight: 500
  p
    font-size: 15px
.item.short
  background-color: #96A3AA
.clickable
  cursor: pointer
  &:hover,&:active
    opacity: 0.6
@media all and (max-width: 1000px)
  .item
    background-color: #73828A
    color: white
    padding: 6px
    white-space: pre-line
    p
      font-size: 12px
</style>
