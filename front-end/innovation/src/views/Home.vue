<template>
  <div class="home">
    <el-carousel :interval="3000" arrow="hover" height="440px">
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
          <el-row class="btnGroup">
            <el-col :span="24">
              <el-button round :class="{ active: btnOne }" @click="toBtnOne"
                >学术论文</el-button
              >
              <el-button round :class="{ active: btnTwo }" @click="toBtnTwo"
                >改革成果项目</el-button
              >
              <el-button round :class="{ active: btnThree }" @click="toBtnThree"
                >创业推荐项目</el-button
              >
            </el-col>
          </el-row>
          <el-row class="content" v-show="btnOne">
            <el-col :span="24">
              <p>暂无学术论文相关信息</p>
            </el-col>
          </el-row>
          <el-row class="content" v-show="btnTwo">
            <el-col :span="24">
              <p>暂无改革成果相关信息</p>
            </el-col>
          </el-row>
          <el-row class="content" v-show="btnThree">
            <el-col :span="24">
              <p>暂无创新创业相关信息</p>
            </el-col>
          </el-row>
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
          <el-row class="btnGroup">
            <el-col :span="24">
              <el-button
                round
                :class="{ active: btnPreOne }"
                @click="toPreBtnOne"
                >学术论文</el-button
              >
              <el-button
                round
                :class="{ active: btnPreTwo }"
                @click="toPreBtnTwo"
                >改革成果项目</el-button
              >
              <el-button
                round
                :class="{ active: btnPreThree }"
                @click="toPreBtnThree"
                >创业推荐项目</el-button
              >
            </el-col>
          </el-row>
          <el-row class="content" v-show="btnPreOne">
            <el-col :span="24">
              <p>暂无学术论文相关信息</p>
            </el-col>
          </el-row>
          <el-row class="content" v-show="btnPreTwo">
            <el-col :span="24">
              <p>暂无改革成果相关信息</p>
            </el-col>
          </el-row>
          <el-row class="content" v-show="btnPreThree">
            <el-col :span="24">
              <p>暂无创新创业相关信息</p>
            </el-col>
          </el-row>
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
      btnOne: true,
      btnTwo: false,
      btnThree: false,
      btnPreOne: true,
      btnPreTwo: false,
      btnPreThree: false,
    };
  },
  methods: {
    toBtnOne() {
      this.btnOne = true;
      this.btnTwo = false;
      this.btnThree = false;
    },
    toBtnTwo() {
      this.btnOne = false;
      this.btnTwo = true;
      this.btnThree = false;
    },
    toBtnThree() {
      this.btnOne = false;
      this.btnTwo = false;
      this.btnThree = true;
    },
    toPreBtnOne() {
      this.btnPreOne = true;
      this.btnPreTwo = false;
      this.btnPreThree = false;
    },
    toPreBtnTwo() {
      this.btnPreOne = false;
      this.btnPreTwo = true;
      this.btnPreThree = false;
    },
    toPreBtnThree() {
      this.btnPreOne = false;
      this.btnPreTwo = false;
      this.btnPreThree = true;
    },
  },
};
</script>

<style scoped>
.el-carousel img {
  width: 100%;
  height: 440px;
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

