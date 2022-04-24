<template>
  <div id="app">
    <Header></Header>
    <Slider></Slider>
    <ThisShow></ThisShow>
    <TeamIntroduction></TeamIntroduction>
    <PreShow></PreShow>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import PreShow from './components/PreShow.vue'
import ThisShow from './components/ThisShow.vue'
import Slider from './components/Slider.vue'
import TeamIntroduction from './components/TeamIntroduction.vue'

export default {
  name: 'App',
  components: {
    Header,
    PreShow,
    ThisShow,
    Slider,
    TeamIntroduction
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
