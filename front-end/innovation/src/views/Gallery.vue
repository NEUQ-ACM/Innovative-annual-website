<template>
  <el-container>
    <el-main class="main">
      <!-- 面包屑导航区域 -->
      <el-breadcrumb separator="/" class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>作品展示</el-breadcrumb-item>
      </el-breadcrumb>
      <div
        style="margin-top: 90px"
        class="top-content"
        @click="toSearch('Academic')"
      >
        <a>学术论文</a>
        <i class="el-icon-arrow-right"></i>
      </div>
      <div @click="toSearch('Achievements')">
        <a>改革项目成果</a>
        <i class="el-icon-arrow-right"></i>
      </div>
      <div @click="toSearch('Business')">
        <a>创业推介项目</a>
        <i class="el-icon-arrow-right"></i>
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: "Gallery",
  methods: {
    // 查询对应展示的作品
    toSearch(type) {
      this.$router.push({ path: `/itemlist`, query: { itemType: type } });
      console.log(type)
    },
  },
};
</script>
<style scoped>
.el-breadcrumb {
  justify-content: left !important;
  /* margin: 0 !important; */
  border-bottom: 1px solid #ccc !important;
  border-top: 0 !important;
  border-left: 0 !important;
  border-right: 0 !important;
}
.top-content {
  margin-top: 20px !important;
}
.el-header {
  height: 80px;
  padding: 0;
}
.main {
  padding: 0;
}
.main div {
  display: flex;
  justify-content: space-between;
  width: 75%;
  height: 60px;
  margin: 20px auto;
  border: 1px solid #ccc;
}
.main div:hover {
  cursor: pointer;
}
.main div a {
  line-height: 60px;
  margin-left: 20px;
  font-size: 18px;
  text-decoration: none;
}
.main div i {
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