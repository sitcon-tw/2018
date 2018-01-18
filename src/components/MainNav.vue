<template>
  <header class="Navbar">
    <nav>
      <div class="container">
        <router-link id="title" to="/"><img src="../assets/sitcon18.png" alt="title"/></router-link>
        <router-link class="item" to="/agenda"><div>AGENDA<p>議程</p></div></router-link>
        <router-link class="item space" to="/sponsor"><div>SPONSOR<p>贊助</p></div></router-link>
        <router-link class="item space" to="/staff"><div>STAFF<p>工作人員</p></div></router-link>
        <router-link class="item space" to="/loaction"><div>LOCATION<p>地點</p></div></router-link>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'Navbar'
  }
</script>

<style lang="sass" scoped>
@import '../sass/color.sass'
nav
  background-color: $nav-color
  div.container
    padding: 20px
    text-align: start
    a#title
      display: inline-block
      vertical-align: middle
      margin-right: 30px
      img
        vertical-align: middle
        width: 130px
    a.item
      position: relative
      display: inline-block
      vertical-align: middle
      color: white
      text-decoration: none
      div
        display: inline-block
        vertical-align: middle
        font-size: 1.4rem
        font-weight: 800
        p
          display: block
          position: relative
          top: -5px
          font-weight: 400
          font-size: 1rem
    a.space:before
      display: inline-block
      vertical-align: middle
      content: " "
      background-color: white
      width: 0.5px
      height: 42px
      margin-left: 15px
      margin-right: 15px


</style>


