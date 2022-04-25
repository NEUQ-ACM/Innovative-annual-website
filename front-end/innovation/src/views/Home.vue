<template>
  <div class="home">
    <el-carousel :interval="3000" arrow="hover" height="607px" trigger="click">
      <el-carousel-item>
        <img src="../assets/images/mainImg.jpg" alt="">
      </el-carousel-item>
      <el-carousel-item>
        <img src="../assets/images/mainImage.png" alt="">
      </el-carousel-item>
      <el-carousel-item>
        <img src="../assets/images/mainImg.jpg" alt="">
      </el-carousel-item>
    </el-carousel>
    <section class="sectionThree">
      <div class="container">
        <div class="showTitle">
          <span>本届创新创业成果展示</span>
        </div>
        <div class="showContent">
          <el-tabs
            v-model="thisActiveName"
            type="card"
            @tab-click="handleThisClick"
          >
            <el-tab-pane label="学术论文" name="first"
              >暂无学术论文相关信息</el-tab-pane
            >
            <el-tab-pane label="改革成果项目" name="second"
              >暂无改革成果相关信息</el-tab-pane
            >
            <el-tab-pane label="创业推荐项目" name="third"
              >暂无学术论文相关信息</el-tab-pane
            >
          </el-tabs>
        </div>
      </div>
    </section>
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
    <section class="sectionFive">
      <div class="container">
        <div class="showTitle">
          <span>往届创新创业成果展示</span>
        </div>
        <div class="showContent">
          <el-tabs
            v-model="preActiveName"
            type="card"
            @tab-click="handlePreClick"
          >
            <el-tab-pane label="学术论文" name="first"
              >暂无学术论文相关信息</el-tab-pane
            >
            <el-tab-pane label="改革成果项目" name="second"
              >暂无改革成果相关信息</el-tab-pane
            >
            <el-tab-pane label="创业推荐项目" name="third"
              >暂无学术论文相关信息</el-tab-pane
            >
          </el-tabs>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      preActiveName: "first",
      thisActiveName: "first",
    };
  },
  methods: {
    handlePreClick(tab, event) {
      console.log(tab, event);
    },
    handleThisClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style scoped>
.el-carousel img {
  width: 100%;
  height: 100%;
}

.el-carousel /deep/ .el-carousel__arrow {
  height: 60px !important;
  width: 60px !important;
  font-size: 52px !important;
}

.el-carousel /deep/ .el-carousel__button {
  width: 15px !important;
  height: 15px !important;
  border-radius: 50% !important;
}

.el-tabs /deep/ .el-tabs__item {
  outline: 0 none;
  margin: 4px 6px;
  border-radius: 20px;
  height: 40px;
  width: 170px;
  border: 1px solid #d6d6d6;
  background-color: #fff;
  color: #333;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s all ease-out;
}

.el-tabs /deep/ .el-tabs__item:hover,
.el-tabs /deep/ .el-tabs__item.is-active {
  background-color: #352ddb;
  color: #fff;
}

.el-tabs /deep/ .el-tabs__nav-scroll {
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-tabs /deep/ .el-tabs__nav,
.el-tabs /deep/ .el-tabs__header {
  border: none !important;
}

.el-tab-pane {
  background-color: #fff;
  height: 324px;
  color: #e6cbcb;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
}

.sectionThree,
.sectionFive {
  padding: 20px 0;
  background-color: #f6f6f6;
}

.el-row.btnGroup {
  margin: 10px 0 20px;
}

div.container {
  width: 90%;
  margin: 0 auto;
}

div.showTitle {
  margin: 40px 0 20px;
  font-size: 30px;
  color: #444;
}

.el-button {
  outline: 0 none;
  margin: 4px 6px;
  border-radius: 20px;
  height: 40px;
  width: 170px;
  border: 1px solid #d6d6d6;
  background-color: #fff;
  color: #333;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s all ease-out;
}

.el-button:hover,
.el-button.active {
  background-color: #352ddb;
  color: #fff;
}

.showContent .content {
  background-color: #fff;
  height: 324px;
  color: #e6cbcb;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
}

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

