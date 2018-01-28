<template>
<div class="staff">
      <h1>Staff Collection</h1>
      <div v-for="team in el" class="group">
            <h2>{{team.name}}</h2>
            <div v-for="member in team.members" class="staff_card">
                  <div class="staff_photo">
                        <img v-bind:src = " '../../static/img/staffs/' + member.avatar">
                  </div>
                  <p>{{member.display_name}}</p>
            </div>
      </div>
</div>

</template>

<script>
export default {
      name: 'Staff',
      data () {
          return {
              el: json
          }
      }
}
import json from '../../static/json/staff.json';

</script>

<style lang="sass" scoped>
@import '../sass/staff.scss'
</style>
