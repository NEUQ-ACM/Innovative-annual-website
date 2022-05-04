<template>
	<div class="maincontainer">
		<!-- <el-container>
		  <el-aside style="height: 50vh;" width="200px" ><Sidebar></Sidebar></el-aside>
		  <el-main>Main</el-main>
		</el-container> -->
		<el-row :gutter="20"  class="el-row">
		  <el-col :span="4"><Sidebar></Sidebar></el-col>
		  <el-col :span="20">
			  优秀团队
		  </el-col>
		</el-row>
	</div>
</template>

<script>
	import Sidebar from '../../components/Sidebar.vue'
	export default{
		components:{
			Sidebar,
		},
		
	}
</script>

<style scoped>
	.el-row {
	    margin-bottom: 20px;
		height: 450px;
	    &:last-child {
	      margin-bottom: 0;
	    }
	  }
	.maincontainer{
		height: 100%;
	}
	.leftside{
		
	}
	.rightside{
		
	}
</style>