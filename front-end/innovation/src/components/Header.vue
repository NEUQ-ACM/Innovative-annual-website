<template>
  <div>
    <div class="navMain">
			<!-- <div style="color: white;margin-left: 15%;text-align: center;height: 70%;line-height: 80px;font-size: 28px;font-weight: 500;margin-top: 1%;">第七届河北省大学生创新创业年会</div> -->
			<img src="../assets/images/shufalogo.png" style="color: white;margin-left: 10%;text-align: center;height: 70%;line-height: 80px;font-size: 28px;font-weight: 500;margin-top: 1%;" alt="">
    </div>
    <div style="display: flex;float: right;width: 100%;background-color: #004ea1;">
		<div style="margin-left: 60%;">
			<el-menu router
			         :default-active="activeIndex"
			         class="el-menu-demo"
			         mode="horizontal"
					 background-color="#004ea1"
					 text-color="#fff"
					 active-text-color="#fff"
			         @select="handleSelect">
			  <el-menu-item index="1"
			                route="/Home">首页</el-menu-item>
			  <el-menu-item index="2"
			                route="/News">通知公告</el-menu-item>
			  <el-menu-item index="3"
			                route="/Arrangment">年会日程</el-menu-item>
			  <el-submenu index="4">
			    <template slot="title">作品展示</template>
			    <el-menu-item index="4-1"
			                  route="/Show1">学术论文</el-menu-item>
			    <el-menu-item index="4-2"
			                  route="/Show2">创新创业展示项目</el-menu-item>
			    <el-menu-item index="4-3"
			                  route="/Show3">创业推荐项目</el-menu-item>
			  </el-submenu>
			</el-menu>
		</div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'Header_2',
  data () {
    return {
      activeIndex: this.$route.path
    };
  },
}
</script>

<style scoped>
/deep/.el-submenu__title{
	height: 61px !important;
}
/deep/.el-menu-item{
	height: 61px !important;
}
.navMain {
  background:url("../assets/images/logo_bg.png") 800px center no-repeat;
  background-color: #004ea1;
  height: 100px;
  display: flex;

}
.showheaderimg{
	width: 50%;
	background-image: url("../assets/images/logo_bg.png");
	background-color: #004ea1;
	height: 80px;
	
}
.el-menu-demo {
  width: 100%;
  height: 60px;

}
.el-menu-item {
  height: 78px;
}
.el-menu.el-menu--horizontal {
  background-color: transparent;
}
.el-menu-demo[data-v-9fb1c1a0] {
  width: 100%;
  height: 80px;
  float: right;
  background-color: transparent;
}
</style>