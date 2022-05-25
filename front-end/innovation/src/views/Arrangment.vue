<template>
  <div style="margin-top: 20px;">
    <img src="../assets/第七届河北省大学生创新创业年会会议日程_00(1).jpg"
         alt=""
         style="width:50%">
    <!-- <el-card class="box-card">
      <div class="block">
        <el-timeline>
          <el-timeline-item timestamp="2022/5/27"
                            placement="top"
                            type="warning"
                            size="large"
                            class="dayTime">
          </el-timeline-item>
          <el-timeline-item timestamp="09:00-9:30"
                            placement="top">
            <div class="member">开幕式</div>
            <div class="location">东北大学秦皇岛分校</div>
          </el-timeline-item>
          <el-timeline-item timestamp="09:30-10:30"
                            placement="top">
            <div class="member">交流分享</div>
            <div class="location">东北大学秦皇岛分校</div>
          </el-timeline-item>
          <el-timeline-item timestamp="13:30-18:00"
                            placement="top">
            <div class="member">作品评审</div>
            <div class="location">东北大学秦皇岛分校</div>
          </el-timeline-item>
          <el-timeline-item timestamp="2022/5/28"
                            placement="top"
                            type="warning"
                            size="large"
                            class="dayTime">
          </el-timeline-item>
          <el-timeline-item timestamp="09:00-11:00"
                            placement="top">
            <div class="member">推国家年会作品评审</div>
            <div class="location">东北大学秦皇岛分校</div>
          </el-timeline-item>

        </el-timeline>
      </div>
    </el-card> -->
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
@media screen and (max-width: 768px) {
  .box-card {
    position: relative;
    /*top: -68px;
    left: -64px;*/
    width: 100%;
  }
  .el-timeline {
    padding: 0px;
  }
  .block .el-timeline .location {
    width: 300px;
  }
}
</style>