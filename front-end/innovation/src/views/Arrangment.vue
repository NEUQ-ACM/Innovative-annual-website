<template>
 <div style="margin-top: 20px;">
	 <el-card class="box-card">
	   <div class="block">
	     <el-timeline>
	       <el-timeline-item timestamp="2022/6"
	                         placement="top"
	                         type="warning"
	                         size="large"
	                         class="dayTime">
	       </el-timeline-item>
	       <el-timeline-item timestamp="08:00-19:00"
	                         placement="top">
	         <div class="member">嘉宾及专家报到</div>
	         <div class="location">东北大学秦皇岛分校</div>
	       </el-timeline-item>
	       <el-timeline-item timestamp="08:00-19:00"
	                         placement="top">
	         <div class="member">师生代表报到</div>
	         <div class="location">东北大学秦皇岛分校</div>
	       </el-timeline-item>
	       <el-timeline-item timestamp="2022/6"
	                         placement="top"
	                         type="warning"
	                         size="large"
	                         class="dayTime">
	       </el-timeline-item>
	       <el-timeline-item timestamp="08:00-19:00"
	                         placement="top">
	         <div class="member">嘉宾及专家报到</div>
	         <div class="location">东北大学秦皇岛分校</div>
	       </el-timeline-item>
	       <el-timeline-item timestamp="08:00-19:00"
	                         placement="top">
	         <div class="member">师生代表报到</div>
	         <div class="location">东北大学秦皇岛分校</div>
	       </el-timeline-item>
	       <el-timeline-item timestamp="2022/6"
	                         placement="top"
	                         type="warning"
	                         size="large"
	                         class="dayTime">
	       </el-timeline-item>
	       <el-timeline-item timestamp="08:00-19:00"
	                         placement="top">
	         <div class="member">嘉宾及专家报到</div>
	         <div class="location">东北大学秦皇岛分校</div>
	 
	       </el-timeline-item>
	       <el-timeline-item timestamp="08:00-19:00"
	                         placement="top">
	         <div class="member">师生代表报到</div>
	         <div class="location">东北大学秦皇岛分校</div>
	       </el-timeline-item>
	     </el-timeline>
	   </div>
	 </el-card>
 </div>

</template>

<script>
export default {
  data () {
    return {
    };
  }
};
</script>

<style scoped>
.block {
  margin-top: 20px;
  text-align: left;
}
.box-card {
  margin: 0 auto;
  width: 560px;
}
.block .el-timeline .dayTime {
  padding-bottom: 1px;
}
.block .el-timeline .dayTime /deep/ .el-timeline-item__timestamp {
  font-size: 20px;
  color: #e6a23c;
  padding-top: 0;
}
.block .el-timeline .member {
  font-size: 16px;
  width: 400px;
}
.block .el-timeline .location {
  text-align: right;
  border-top: 1px solid #e6a23c;
  color: #afc0d6;
  width: 400px;
}
@media screen and (max-width:768px ){
  .box-card{
    position: relative;
   /*top: -68px;
    left: -64px;*/
    width: 100%;
  }
  .el-timeline{
    padding: 0px;
  }
  .block .el-timeline .location{
    width: 300px;
  }
}
</style>