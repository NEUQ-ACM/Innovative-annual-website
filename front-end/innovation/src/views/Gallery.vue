<template>
  <el-container>
    <el-header height=80>
      <Header></Header>
    </el-header>
    <el-main>
      <div style="margin-top:90px;">
        <a href="">
          <span>学术论文</span>
        </a>
        <i class="el-icon-arrow-right"></i>
      </div>
      <div>
        <a href="">
          <span>改革项目成果</span>
        </a>
        <i class="el-icon-arrow-right"></i>
      </div>
      <div>
        <a href="">
          <span>创业推介项目</span>
        </a>
        <i class="el-icon-arrow-right"></i>
      </div>
    </el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Backtop from '@/components/Backtop.vue'
export default {
  name: "Gallery",
  components: {
    Header,
    Footer,
    Backtop
  }
}
</script>
<style scoped>
.el-header {
  height: 80px;
  padding: 0;
}
.el-main {
  padding: 0;
}
.el-main div {
  display: flex;
  justify-content: space-between;
  width: 75%;
  height: 60px;
  margin: 20px auto;
  border: 1px solid #ccc;
}
.el-main div:hover {
  cursor: pointer;
}
.el-main div span {
  line-height: 60px;
  margin-left: 20px;
  font-size: 18px;
}
.el-main div i {
  margin-right: 20px;
  margin-top: 20px;
}
.el-footer {
  padding: 0;
}
.box {
  width: 100%;
  height: 1000px;
  background-color: #fff;
}
</style>