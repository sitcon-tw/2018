<template>
<div class="staff container">
  <h1>Staff</h1>
  <div v-for="(team,index) in el" class="group" :key="team+index">
    <h2>{{team.name}}</h2>
    <div v-for="(member,index) in team.members" class="staff_card" :key="member+index">
      <div class="staff_photo">
        <img v-bind:src = " '../../static/img/staffs/' + member.avatar">
      </div>
      <p>{{member.display_name}}</p>
    </div>
  </div>
</div>

</template>

<script>
import json from '../../static/json/staff.json'
export default {
  name: 'Staff',
  data () {
    return {
      el: json
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../sass/staff.scss'
</style>
