<template>
  <div>
    <Slider></Slider>
    <ThisShow></ThisShow>
    <TeamIntroduction></TeamIntroduction>
    <PreShow></PreShow>
  </div>
</template>

<script>
import PreShow from "../components/PreShow.vue";
import ThisShow from "../components/ThisShow.vue";
import Slider from "../components/Slider.vue";
import TeamIntroduction from "../components/TeamIntroduction.vue";
export default {
  name: "Home",
  components: {
    PreShow,
    ThisShow,
    Slider,
    TeamIntroduction,
  },
};
</script>
