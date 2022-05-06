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
				   <el-button type="primary" style="width: 30%;" @click="navigateToNew()" round >新增学术论文</el-button>
			  </div>
			   <div style="width: 100%;margin-top: 2%;">
				   <el-table
				      :data="tableData"
				      border
				      style="width: 100%">
				      <el-table-column
				        prop="id"
				        label="论文ID"
				        width="180">
				      </el-table-column>
				      <el-table-column
				        prop="projectName"
				        label="论文名称"
				        width="180">
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
    </el-table-column>
			   </div>
			   <div style="margin: 2% 0  ;width: 100%;">
			   				   <el-button type="primary" style="width: 30%;" @click="navigateToNew()" round >新增学术论文</el-button>
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
            id: "",
        	project_name: " ",
            description: "",
			project_type:'',
			category:''
           },
          {
           id: "1",
                  	project_name: " ",
           description: " ",
          			project_type:'',
          			category:''
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
				this.$router.push('/PaperNew')
			},
			handleEdit(index, row) {
			        this.$router.push({path:'/PaperDt',query:{id:row.id}})
			      },
			      handleDelete(index, row) {
			        console.log(index, row);
			      },
			getData(){
				this.$axios.get("/project/getbyType/2" ).then((res) => {
				         
				        this.tableData=res.data.data.records
						console.log(this.tableData);
						this.$message.success('获取列表成功')
				      });
			},
		},
		mounted(){
			this.getData()
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