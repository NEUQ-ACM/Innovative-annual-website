<template>
	<div class="maincontainer">
		<!-- <el-container>
		  <el-aside style="height: 50vh;" width="200px" ><Sidebar></Sidebar></el-aside>
		  <el-main>Main</el-main>
		</el-container> -->
		<el-row :gutter="20"  class="el-row">
		  <el-col :span="4"><Sidebar></Sidebar></el-col>
		  <el-col :span="20">
			  <div style="margin: 2% 0  ;width: 100%;">
				   <el-button type="primary" style="width: 30%;" @click="navigateToNew()" round >新增推荐项目</el-button>
			  </div>
			   <div style="width: 100%;margin-top: 2%;">
				   <el-table
				      :data="tableData"
				      border
					  height="400px"
				      style="width: 100%">
				      <el-table-column
				        prop="id"
				        label="项目ID"
				        width="180">
				      </el-table-column>
				      <el-table-column
				        prop="project_name"
				        label="项目名称"
				        width="180">
				      </el-table-column>
				      <el-table-column
				        prop="project_type"
				        label="项目类型">
				      </el-table-column>
					  <el-table-column
					    prop="category"
					    label="专业大类">
					  </el-table-column>
					  <el-table-column label="操作">
					        <template slot-scope="scope">
					          <el-button
					            size="mini"
					            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					          <el-button
					            size="mini"
					            type="danger"
					            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
					        </template>
					      </el-table-column>
				    </el-table>
					<el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
			   </div>
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
		data(){
			return {
			        tableData: [{
            id: "1",
        	project_name: "1 ",
            description: "1 ",
			project_type:'1',
			category:'1'
           },
          {
           id: "1",
                  	project_name: "1 ",
           description: "1 ",
          			project_type:'1',
          			category:'1'
          },		
           {
            id: "1",
                   	project_name: "1 ",
            description: "1 ",
           			project_type:'1',
           			category:'1'
           },]
			      }
		},
		methods:{
			navigateToNew(){
				this.$router.push('/RecommendNew')
			},
			handleEdit(index, row) {
			        this.$router.push({name:'RecommendDt',query:{id:row.id}})
			      },
			      handleDelete(index, row) {
			        console.log(index, row);
			      }
		}
	}
</script>

<style scoped>
	.el-row {
	    margin-bottom: 20px;
		height: 500px;
	  }
	.maincontainer{
		height: 100%;
	}
	.leftside{
		
	}
	.rightside{
		
	}
</style>