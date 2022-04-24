<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <div class="mainImage">
        <img src="@/assets/images/mainImage.jpg"
             alt="" />
      </div>
      <myNews></myNews>
      <myArrangment></myArrangment>
      <myShow></myShow>
      <myIntroduction></myIntroduction>
      <Backtop></Backtop>
    </el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Backtop from "@/components/Backtop.vue";
import myHeader from "@/components/myHeader.vue";
import myNews from "@/components/myNews.vue";
import myArrangment from '@/components/myArrangment.vue'
import myShow from '@/components/myShow.vue'
import myIntroduction from '@/components/myIntroduction.vue'

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Backtop,
    myHeader,
    myNews,
    myArrangment,
    myShow,
    myIntroduction,
  },
};
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
