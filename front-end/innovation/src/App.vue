
<template>
  <div id="app">
    <el-container>
      <el-header>
        <Header></Header>
        <!-- <newHeader></newHeader> -->
      </el-header>
      <el-main style="margin-top: 80px;" >
        <router-view></router-view>
        <Backtop></Backtop>
      </el-main>
     <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Backtop from "./components/Backtop";
export default {
  name: "App",
  components: {
    Footer,
    Header,
    Backtop,
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
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
#app .el-container .el-header {
  padding: 0px;
  height: 80px;
}
#app .el-container .el-main {
  padding-left: 0;
  padding-right: 0;
  height: 100%;
  overflow: hidden;
}
#app .el-container .el-footer {
  width: 100%;
  padding: 0;
}
#app .el-container {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>

