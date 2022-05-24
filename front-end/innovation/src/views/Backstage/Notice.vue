<template>
	<div class="maincontainer">
		<!-- <el-container>
		  <el-aside style="height: 50vh;" width="200px" ><Sidebar></Sidebar></el-aside>
		  <el-main>Main</el-main>
		</el-container> -->
		<el-row :gutter="20" class="el-row">
			<el-col :span="4">
				<Sidebar></Sidebar>
			</el-col>
			<el-col :span="20">
				<div style="margin: 2% 0  ;width: 100%;">
					<el-button type="primary" style="width: 30%;" @click="navigateToNew()" round>新增通知公告</el-button>
				</div>
				<div style="width: 100%;margin-top: 2%;">
					<el-table :data="tableData" border v-loading="loading" style="width: 100%">
						<el-table-column prop="id" label="通知ID" width="180">
						</el-table-column>
						<el-table-column prop="title" label="通知名称" width="280">
						</el-table-column>
						<el-table-column prop="updateTime" label="通知修改时间">
						</el-table-column>
						<el-table-column label="操作">
							<template slot-scope="scope">
								<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
								<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
							</template>
						</el-table-column>
					</el-table>
				</div>
				<div style="margin: 2% 0  ;width: 100%;">
					<el-pagination background layout="prev, pager, next" :current-page="current" @current-change="pageChange"
						:total="total">
					</el-pagination>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import Sidebar from '../../components/Sidebar.vue'
export default {
	components: {
		Sidebar,
	},
	data() {
		return {
			total: 0,
			current: 1,
			pages: 0,
			loading: false,
			tableData: [],
		}
	},
	methods: {
		navigateToNew() {
			this.$router.push('/NoticeNew')
		},
		handleEdit(index, row) {
			this.$router.push({ name: 'NoticeEdit', query: { id: row.id } })
		},
		handleDelete(index, row) {
			let token = sessionStorage.getItem('token')
			this.$axios.get("http://81.70.56.45:8083/menuItem/delMenuDetail/" + row.id,{
				headers: {
					token: token
				}
			}).then((res) => {
				if (res.data.status == "200") {
					this.$message.success('删除成功')
					this.deleteReset1()
				}

				else {
					this.$message.error('删除失败' + res)
				}
			});
		},
		deleteReset1() {
			this.current = 1
			this.$axios.get("http://81.70.56.45:8083/menuItem/getbyName/通知公告?currentPage=" + this.current).then((res) => {
				// console.log(res);
				this.tableData = res.data.data.records
				this.total = res.data.data.total
			});
		},
		getData() {
			// this.$axios.get("http://81.70.56.45:8083/menuItem/getbyName/通知公告?currentPage=" + this.current).then((res) => {
			// 	console.log(res);
			// 	this.tableData = res.data.data.records
			// 	this.total = res.data.data.total
			// 	this.$message.success('获取列表成功')
			// });
			this.$axios.get("http://81.70.56.45:8083/menuItem/getSecMenu/3").then((res) => {
				console.log(res);
				this.tableData = res.data.data.menuItemList
				this.total = res.data.data.sum
				this.$message.success('获取列表成功')
			});
		},
		pageChange(val) {
			// console.log(this.current)
			// this.current = val
			// this.$axios.get("http://81.70.56.45:8083/menuItem/getbyName/通知公告?currentPage=" + this.current).then((res) => {
			// 	// console.log(res);
			// 	this.tableData = res.data.data.records
			// 	this.total = res.data.data.total
			// 	console.log(this.total)
			// });
		},
	},
	mounted() {
		this.getData()
	}
}
</script>

<style scoped>
.el-row {
	margin-bottom: 20px;
	height: 500px;
}

.maincontainer {
	height: 100%;
}

.leftside {}

.rightside {}
</style>