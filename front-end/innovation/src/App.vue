<template>
  <div id="app">
    <myHeader></myHeader>
    <div class="mainImage">
      <img src="@/assets/images/mainImage.jpg" alt="" />
    </div>
    <div class="announcement">
      <span>年会通知公告</span>
    </div>
    <myNews></myNews>
    <myArrangment></myArrangment>
    <myShow></myShow>
    <myIntroduction></myIntroduction>
    <organizer-vue></organizer-vue>
    <div class="back-to-top" style="display: block">
      <span class="back-top"><i class="fa fa-angle-up"></i></span>
    </div>
  </div>
</template>
<script>
import myHeader from "@/components/myHeader.vue";
import myNews from "./components/myNews.vue";
import myArrangment from './components/myArrangment.vue'
import myShow from './components/myShow.vue'
import myIntroduction from './components/myIntroduction.vue'
export default {
  name: "App",
  components: {
    myHeader,
    myNews,
    myArrangment,
    myShow,
    myIntroduction,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.mainImage img {
  width: 100%;
}
.announcement {
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 30px;
}

.back-to-top {
  background-color: #352ddb;
  padding: 0;
  border-radius: 0;
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 50px;
  height: 50px;
  color: #fff;
  text-align: center;
  line-height: 50px;
  z-index: 99;
  font-size: 25px;
  cursor: pointer;
  -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  display: none;
}


</style>
