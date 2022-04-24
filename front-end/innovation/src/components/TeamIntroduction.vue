<template>
  <section class="sectionFour">
    <div class="container">
      <el-row class="title">
        <el-col :span="24">
          <span>往届优秀团队介绍</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-link>
            <img src="../assets/images/wu.jpg" alt="" />
            <div class="text">
              <span class="headerline"
                >高效紧凑型宽带大功率毫米波传输弯头设计</span
              >
              <span class="intro">项目成员：李鼎</span>
            </div>
          </el-link>
        </el-col>
        <el-col :span="8">
          <el-link>
            <img src="../assets/images/wu.jpg" alt="" />
            <div class="text">
              <span class="headerline"
                >高效紧凑型宽带大功率毫米波传输弯头设计</span
              >
              <span class="intro">项目成员：李鼎</span>
            </div>
          </el-link>
        </el-col>
        <el-col :span="8">
          <el-link>
            <img src="../assets/images/wu.jpg" alt="" />
            <div class="text">
              <span class="headerline"
                >高效紧凑型宽带大功率毫米波传输弯头设计</span
              >
              <span class="intro">项目成员：李鼎</span>
            </div>
          </el-link>
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<script>
export default {
  name: "TeamIntroduction",
  data() {
    return {};
  },
};
</script>

<style scoped>
div.container {
  width: 90%;
  margin: 0 auto;
}

.el-row.title {
  font-size: 30px;
  color: #444;
  text-align: center;
  margin: 40px auto 20px;
}

span.headerline {
  font-size: 16px;
  line-height: 1.5rem;
  font-weight: 700;
  margin-top: 0px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -webkit-transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
  -o-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
  text-align: center;
  color: #333;
}

span.intro {
  margin-bottom: 0px;
  color: #999;
  line-height: 1.5rem;
  text-align: left;
  width: 100%;
  height: 3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: center;
}
</style>