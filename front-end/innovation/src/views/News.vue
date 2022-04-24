<template>
  <section class="sectionOne">
    <el-container>
      <el-header>
        <span>年会通知公告</span>
      </el-header>
      <el-main>
        <div class="boxWrap">
          <div class="newsBoxOne newsBox">
            <div class="date">
              <span class="day">03</span>
              <span class="year">2021.12</span>
            </div>
            <div class="news">
              <span class="newsTitle"
                >关于举办第十四届河北省大学生创新创业年会的通知</span
              >
              <span class="newsContent">请查看附件</span>
            </div>
          </div>
        </div>
        <div class="boxWrap">
          <div class="newsBoxOne newsBox">
            <div class="date">
              <span class="day">03</span>
              <span class="year">2021.12</span>
            </div>
            <div class="news">
              <span class="newsTitle"
                >关于举办第十四届河北省大学生创新创业年会的通知</span
              >
              <span class="newsContent">请查看附件</span>
            </div>
          </div>
        </div>
        <div class="boxWrap">
          <div class="newsBoxOne newsBox">
            <div class="date">
              <span class="day">03</span>
              <span class="year">2021.12</span>
            </div>
            <div class="news">
              <span class="newsTitle"
                >关于举办第十四届河北省大学生创新创业年会的通知</span
              >
              <span class="newsContent">请查看附件</span>
            </div>
          </div>
        </div>
        <div class="boxWrap">
          <div class="newsBoxOne newsBox">
            <div class="date">
              <span class="day">03</span>
              <span class="year">2021.12</span>
            </div>
            <div class="news">
              <span class="newsTitle"
                >关于举办第十四届河北省大学生创新创业年会的通知</span
              >
              <span class="newsContent">请查看附件</span>
            </div>
          </div>
        </div>
        <div class="btnLine">
          <button>查看更多</button>
        </div>
      </el-main>
    </el-container>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.el-header,
.el-footer {
  /* background-color: #b3c0d1; */
  color: #333;
  text-align: center;
  line-height: 60px;
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 30px;
}

.el-main {
  /* background-color: #e9eef3; */
  color: #333;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}

div.boxWrap {
  padding: 30px 20px;
  margin-bottom: 20px;
  background-color: #f6f6f6;
}

.newsBox {
  /* width: 50%; */
  display: flex;
  justify-content: space-between;
  width: 500px;
}

div.newsbox span {
  display: block;
}

div.date {
  width: 80px;
  display: flex;
  flex-wrap: wrap;
  border-right: 1px solid #ddd;
  justify-content: center;
  align-items: center;
}

span.day {
  color: #282828;
  font-size: 40px;
  line-height: 40px;
  margin-bottom: 5px;
}

span.year {
  color: #999;
  font-size: 14px;
}

div.news {
  padding-left: 20px;
  display: flex;
  flex-flow: wrap;
  width: 500px;
}

span.newsTitle {
  font-size: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #333;
  width: 100%;
  height: 28px;
  text-align: left;
}

span.newsContent {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 40px;
  line-height: 40px;
  text-align: center;
  overflow: hidden;
  color: #999;
  font-size: 14px;
}

div.btnLine {
  padding: 2rem 0;
}

div.btnLine button {
  border: 1px solid #352ddb;
  color: #352ddb;
  background-color: transparent;
  font-size: 14px;
  margin: 4px 4px;
  display: inline-block;
  width: 120px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  -webkit-transition: 0.3s all ease-out;
  transition: 0.3s all ease-out;
  text-decoration: none;
  cursor: pointer;
}

div.btnLine button:hover {
  color: #fff;
  background-color: #352ddb;
}
</style>