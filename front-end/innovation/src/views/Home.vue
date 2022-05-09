<template>
  <div class="home">
    <el-carousel :interval="3000" arrow="hover" :height="this.bannerHeight+'px'" trigger="click">
      <el-carousel-item v-for="r in rotations.rotationList" :key="r.id">
        <img :src="r.url" alt="" />
      </el-carousel-item>
    </el-carousel>
    <section class="sectionThree-new">
      <div class="announment">
      <!--  <div class="announmentSider">
          <span class="announmentTitle">通知公告</span>
          <i class="el-icon-arrow-right"></i>
        </div> -->

        <div class="announmentItemList">
          <div class="announmentItem" v-for="notice in notices" :key="notice.id">
            <!-- <div class="announmentText"></div> -->
            <router-link :to="`/NoticeDetail?id=${notice.id}`">
              <div class="announmentWrap" :style="{backgroundImage: 'url('+notice.imgUrl+')'}">
                <div class="announmentText" style="overflow: hidden">
                  <div class="date">
                    <span class="day">{{notice.updateTime[2]}}</span>
                    <span class="year">{{notice.updateTime[0]}}.{{notice.updateTime[1]}}</span>
                  </div>
                  <div class="news">
                    <span class="newsTitle">
                      {{notice.title}}
                    </span>
                    <span class="newsContent">
                      {{notice.description}}
                    </span>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Home",
  data() {
    return {
      screenWidth:450,
      bannerHeight:450,
      notices: [
        {
          id: 1,
          title: '酷酷酷酷酷酷酷酷酷酷酷酷酷酷酷酷酷酷酷酷酷',
          description: 'bbbbbbbbbbbb',
          content: '',
          imgUrl: '',
          updateTime: '',
          createTime: '',
          isDel: 0
        },
      ],
      rotations: {
        rotationList: [
          {
            id: '1',
            url: 'img/mainImg.57e2a7c6.jpg'
          },
          {
            id: '2',
            url: 'img/mainImg.57e2a7c6.jpg'
          },
          {
            id: '3',
            url: 'img/mainImg.57e2a7c6.jpg'
          },
        ],
      }
    };
  },
  methods: {
    handlePreClick(tab, event) {
      console.log(tab, event);
    },
    handleThisClick(tab, event) {
      console.log(tab, event);
    },
    queryNotice(){
      axios.get('/notice/getAll').then(
        res => {
          this.notices = res.data.data.records
          this.notices = this.notices.slice(0,3)
          this.changeDateForm()
        }
      )
    },
    queryRotation(){
      axios.get('/rotation/getAll').then(
        res => {
          this.rotations.rotationList = res.data.data.records
        }
      )
    },
    changeDateForm(){
      this.notices.forEach(item => {
        let tempStr = item.updateTime
        item.updateTime = tempStr.split("-")
      })
    }
  },
  mounted(){
    this.queryNotice()
    this.queryRotation()
    this.screenWidth = window.innerWidth
    this.bannerHeight = 750 / 2500 * this.screenWidth
    // 窗口大小发生改变
    window.onresize = () => {
      this.screenWidth = window.innerWidth
      this.bannerHeight = 750 / 2500* this.screenWidth
    }
  }
};
</script>

<style scoped>
	.home{
		width: 80%;
		margin-left: 10%;
	}
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

.announment {
  border-bottom: 1px solid #444;
  /* display: flex; */
  margin-top: 20px;
}

.announment .announmentSider {
  height: 220px;
  width: 220px;
  box-sizing: border-box;
  font-size: 50px;
  border: 1px solid #999;
  display: flex;
  color: #4261aa;
  padding: 30px 10px 30px 30px;
  margin-right: 15px;
  flex: none;
}

.announment .announmentSider span {
  line-height: 80px;
  letter-spacing: 10px;
}

.announment .announmentSider i {
  line-height: 160px;
  font-size: 50px;
  font-weight: bold;
}

.announmentItemList {
  display: flex;
  justify-content: space-between;
  /* overflow: auto; */
}

/* .announmentItemList::-webkit-scrollbar {
  height: 8px;
  background-color: transparent;
  width: 0;
} */

.announmentItemList::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.6);
  border-radius: 30px;
  /* display: none; */
}

.announmentItemList .announmentItem {
  /* background-color: #d3d1d1;
  padding: 10px 10px 2px 10px; */
  box-sizing: border-box;
  min-width: 33%;
}

.announment a {
  text-decoration: none;
}

.announment .announmentWrap {
  display: flex;
  height: 200px;
  background-size: cover;
  flex-direction: column-reverse;
}

.announmentItem .announmentText {
  background-color: rgba(0, 0, 0, 0.4);
  height: 40%;
  color: white !important;
  display: flex;
  align-items: center;
}

div.date {
  min-width: 80px;
  max-width: 80px;
  display: flex;
  flex-wrap: wrap;
  border-right: 1px solid #ddd;
  justify-content: center;
  align-items: center;
}

span.day {
  /* color: #282828; */
  font-size: 40px;
  line-height: 40px;
  margin-bottom: 5px;
}

span.year {
  /* color: #999; */
  font-size: 14px;
}

div.news {
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

/* .announmentText > div {
  flex: none;
} */

.news span {
  display: block;
}

span.newsTitle {
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* color: #333; */
  /* width: 100%; */
  min-width: 0;
  height: 28px;
  text-align: left;
}

span.newsContent {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  height: 40px;
  line-height: 40px;
  text-align: left;
  /* color: #999; */
  font-size: 14px;
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
  box-sizing: border-box;
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

.itemBox {
  display: block;
  text-decoration: none;
  width: 100%;
  overflow: hidden;
  position: relative;
}

.itemBox:hover::after {
  transform: translateX(0%);
  opacity: 1;
  visibility: visible;
  transition: all 0.3s ease-in;
}

.itemBox::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 5px;
  width: 100%;
  background-color: rgb(34, 140, 210);
  opacity: 0;
  visibility: hidden;
  transform: translateX(-100%);
  transition: all 0.3s ease-in;
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
  display: block;
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
  text-align: left !important;
  width: 100%;
  height: 3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: center;
}
@media screen and (max-width: 958px) {
  .el-main{
	  margin: 0 !important;
  }
}
</style>

ext-align: center;
  color: #333;
}

span.intro {
  margin-bottom: 0px;
  color: #999;
  line-height: 1.5rem;
  text-align: left !important;
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
