<template>
  <header class="Navbar">
    <nav>
      <div class="container">
        <router-link id="title" to="/"><img src="../assets/sitcon18.png" alt="title"/></router-link>
        <div class="nav-left">
          <router-link class="item" to="/agenda"><div>AGENDA<p>議程</p></div></router-link>
          <router-link class="item divider" to="/sponsor"><div>SPONSOR<p>贊助</p></div></router-link>
          <router-link class="item divider" to="/staff"><div>STAFF<p>工作人員</p></div></router-link>
          <router-link class="item divider" to="/loaction"><div>LOCATION<p>地點</p></div></router-link>
        </div>
        <div class="nav-right">

        </div>
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
@import '../sass/global.sass'
nav
  position: fixed
  top: 0
  left: 0
  right: 0
  height: $nav-height
  background-color: $nav-color
  z-index: 1
  div.container
    height: 100%
    text-align: start
    a#title
      display: inline-block
      vertical-align: middle
      margin-right: 30px
      img
        vertical-align: middle
        width: 130px
    .nav-left
      display: inline-block
      vertical-align: middle
      height: 100%
      &:before
        content: " "
        width: 0
        height: 100%
        display: inline-block
        position: relative
        vertical-align: middle
        background: #f00
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
          &:after
            display: block
            content: " "
            width: 0
            height: 0.8px
            background-color: white
            margin-left: 50%
            transition: all .4s
          &:hover:after
            width: 100%
            margin-left: 0
      a.divider
        &:before
          display: inline-block
          vertical-align: middle
          content: " "
          background-color: white
          width: 0.5px
          height: 42px
          margin-left: 15px
          margin-right: 15px
</style>


