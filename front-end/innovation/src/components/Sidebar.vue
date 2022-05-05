<template>
	<div style="padding-left: 0%;height: 100%;">
			<h4 style="color: blue;font-weight: bold;" >后台管理</h4>
		    <el-menu
				router
		      default-active="Rotation"
		      class="el-menu-vertical-demo"
		      @open="handleOpen"
		      @close="handleClose">
		      <el-menu-item index="Rotation">
		        <i class="el-icon-menu"></i>
		        <span slot="title">首页轮播图</span>
		      </el-menu-item>
			  <el-menu-item index="Recommend">
			    <i class="el-icon-menu"></i>
			    <span slot="title">创业推荐项目</span>
			  </el-menu-item>
		      <el-menu-item index="Notice">
		        <i class="el-icon-menu"></i>
		        <span slot="title">通知公告</span>
		      </el-menu-item>
		      <el-menu-item index="Paper" >
		        <i class="el-icon-document"></i>
		        <span slot="title">学术论文</span>
		      </el-menu-item>
		      <el-menu-item index="Reform">
		        <i class="el-icon-setting"></i>
		        <span slot="title">改革成果项目</span>
		      </el-menu-item>
		    </el-menu>
	</div>
</template>
<script>
  export default {
	  name:'Sidebar',
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
	
</style>