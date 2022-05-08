<template>
  <div style="width: 70%;margin-left: 15%;display: flex;flex-direction: row;padding-top: 2%;">
	  <span style="width: 25%;margin-left: 0%;margin-right: 5%;">
		  <div style="background-color: #004EA1;color: white;font-size: 25px;height: 100px;align-items: center;display: flex;justify-content: center;">
			  <div >
				  年会通知公告
			  </div>
			  
		</div>
		  <div style="height: 50px;background-color: #F9F9F9;">
			  
		  </div>
	  </span>
	  <span style="width: 80%;margin-left: 5%;">
		  <div>
		  		<div
		  			class="boxWrap"
		  			v-for="(item) in noticeData"
		  			:key="item.id"
		  			@click="viewDetail(item.id)"
		  		  >
		  				    <div class="newsBoxOne newsBox">
		  				      <div class="date">
		  				        <span class="day">{{item.updateTime.substring(8,10)}}</span>
		  				        <span class="year">{{item.updateTime.substring(0,7)}}</span>
		  				      </div>
		  				      <div class="news">
		  				        <span class="newsTitle">{{ item.title }}</span>
		  				        <span class="newsContent">请查看附件</span>
		  				      </div>
		  				    </div>
		  		</div>
		  </div>
	  </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      noticeData: [{}],
    };
  },
  methods: {
    viewDetail(id) {
      this.$router.push({path:'/NoticeDetail',query:{id:id}})
    },
  },
  mounted() {
    this.$axios
      .get("/notice/getAll")
      .then((response) => {
        this.noticeData = response.data.data.records;
        console.log(this.noticeData);
      })
      .catch((error) => {
        console.log(error);
        alert("网络错误，不能访问");
      });
      console.log(this.noticeData);
  },
};
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

/* .el-main {
  color: #333;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
} */

div.boxWrap {
  padding: 30px 20px;
  margin-bottom: 20px;
  transition: 0.5s;
}
.boxWrap:hover{
	box-shadow: 0 8px 16px rgba(0, 0, 0, .12), 0 0 24px rgba(0, 0, 0, .04);
	margin-left: 0.625rem;
}
.boxWrap:hover .news .newsTitle{
	color: #004EA1;
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
  color: #004EA1;
  font-size: 40px;
  line-height: 40px;
  margin-bottom: 5px;
}

span.year {
  color: #004EA1;
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
@media screen and (max-width: 768px) {
  .el-main .boxWrap {
    min-width: none;
    width: 100%;
  }
  .el-main .boxWrap {
    width: 100%;
  }
  .el-main .boxWrap .newsTitle {
    width: 100%;
    display: block;
    min-width: none;
  }
}
</style>