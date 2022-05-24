<template>
	<div class="maincontainer">
		<el-card class="box-card">
			<div slot="header">
				<span style="font-size: 25px;">修改通知公告</span>
			</div>
			<div style="width: 100%;">
				<el-form :model="newdataform" :rules="rules" ref="newdataform" label-width="100px"
					class="demo-ruleForm">
					<el-form-item label="通知ID" prop="projectId" style="width: 100%;">
						<el-input v-model="newdataform.projectId" type="number" placeholder="输入数字"></el-input>
					</el-form-item>
					<el-form-item label="通知名称" prop="projectName" style="width: 100%;">
						<el-input v-model="newdataform.title"></el-input>
					</el-form-item>
					<el-form-item label="通知描述" style="width: 100%;" prop="description">
						<el-input type="textarea" v-model="newdataform.description"></el-input>
					</el-form-item>
					<!-- <el-form-item label="通知封面图" style="width: 100%;" prop="description">
						<el-input type="textarea" v-model="newdataform.description"></el-input>
					</el-form-item> -->
					<el-form-item label="通知内容" style="width: 100%;" prop="content">
						<!-- 还没有新建数据，content是临时起名，之后记得改 -->
						<mavon-editor ref="md" @imgAdd="imgAdd" @imgDel="imgDel" v-model="newdataform.content"></mavon-editor>
					</el-form-item>
					<!-- <el-form-item label="论文类型" style="width: 100%;" prop="projectType">
						<el-input v-model="newdataform.project.projectType"></el-input>
					</el-form-item>
					<el-form-item label="专业大类" style="width: 100%;" prop="category">
						<el-input v-model="newdataform.project.category"></el-input>
					</el-form-item>
					<el-form-item style="width: 100%;" label="年份" prop="years">
						<el-input v-model="newdataform.project.years"></el-input>
					</el-form-item>
					<el-form-item style="width: 100%;" label="学校" prop="school">
						<el-input v-model="newdataform.project.school"></el-input>
					</el-form-item> -->
					<!-- <el-form-item label="上传缩略图" style="margin: 10% 0;" >
				    <el-upload
				      action="http://81.70.56.45:8082/"
					  ref="upload1"
				      list-type="picture-card"
					  :on-success="handleAvatarSuccess1"
					    :before-upload="beforeAvatarUpload1"
						limit="1"
						:on-error="handleAvatarErr1"
				      :auto-upload="false">
				        <i slot="default" class="el-icon-plus"></i>
				        <div slot="file" slot-scope="{file}">
				          <img
				            class="el-upload-list__item-thumbnail"
				            :src="file.url" alt=""
				          >
				          <span class="el-upload-list__item-actions">
				            <span
				              class="el-upload-list__item-preview"
				              @click="handlePictureCardPreview1(file)"
				            >
				              <i class="el-icon-zoom-in"></i>
				            </span>
				            <span
				              v-if="!disabled"
				              class="el-upload-list__item-delete"
				              @click="handleDownload1(file)"
				            >
				              <i class="el-icon-download"></i>
				            </span>
				            <span
				              v-if="!disabled"
				              class="el-upload-list__item-delete"
				              @click="handleRemove1(file)"
				            >
				              <i class="el-icon-delete"></i>
				            </span>
				          </span>
				        </div>
				    </el-upload>
				  </el-form-item> -->
				  <el-form-item label="上传缩略图" style="width: 100%;" v-if="localimageurl" >
					<el-image
					      style="width: 80%;"
					      :src="localimageurl"
					      :fit="fit"></el-image>
					<div>
						<el-button @click="deletelocal" type="danger">删除</el-button>
					</div>
					<div style="width: 100%;">(点击后当前页将无法撤销,可刷新重置)</div>
				  </el-form-item>
					<el-form-item label="上传缩略图" v-if="!localimageurl" >
						<el-upload action="http://81.70.56.45:8083/rotation/upload" limit="1" ref="upload2" :headers="myHeaders" list-type="picture-card"
							:auto-upload="false" :on-success="handleAvatarSuccess2" :on-error="handleAvatarErr2"
							:before-upload="beforeAvatarUpload2">
							<i slot="default" class="el-icon-plus" v-if="!isbadgeimg"></i>
							<div slot="file" slot-scope="{file}">
								<img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
								<span class="el-upload-list__item-actions">
									<span class="el-upload-list__item-preview" @click="handlePictureCardPreview2(file)">
										<i class="el-icon-zoom-in"></i>
									</span>
									<span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload2(file)">
										<i class="el-icon-download"></i>
									</span>
									<span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove2(file)">
										<i class="el-icon-delete"></i>
									</span>
								</span>
							</div>
						</el-upload>
					</el-form-item>
					<!-- <el-form-item label="学生列表" style="width: 100%;">
						<div>
							<el-button @click="addStu()" type="primary">添加学生</el-button>
						</div>
						<div style="margin: 3% 0;">
							<el-table :data="newdataform.studentList" border style="width: 100%">
								<el-table-column prop="name" label="姓名">
								</el-table-column>
								<el-table-column prop="grade" label="年级">
								</el-table-column>
								<el-table-column prop="specialty" label="专业">
								</el-table-column>
								<el-table-column prop="isPresenter" label="是否主持">
								</el-table-column>
								<el-table-column label="操作">
									<template slot-scope="scope">
										<el-button size="mini" type="text" @click="handleEdit1(scope.$index, scope.row)">编辑</el-button>
										<el-button size="mini" type="text" @click="handleDelete1(scope.$index, scope.row)">删除</el-button>
									</template>
								</el-table-column>
							</el-table>
						</div>
					</el-form-item>
					<el-form-item label="指导老师" style="width: 100%;">
						<div>
							<el-button type="primary" @click="addTch()">添加教师</el-button>
						</div>
						<div style="margin: 3% 0;">
							<el-table :data="newdataform.teacherList" border style="width: 100%">
								<el-table-column prop="name" label="姓名">
								</el-table-column>
								<el-table-column prop="job" label="职称">
								</el-table-column>
								<el-table-column prop="direction" label="研究方向">
								</el-table-column>
								<el-table-column label="操作">
									<template slot-scope="scope">
										<el-button size="mini" type="text" @click="handleEdit2(scope.$index, scope.row)">编辑</el-button>
										<el-button size="mini" type="text" @click="handleDelete2(scope.$index, scope.row)">删除</el-button>
									</template>
								</el-table-column>
							</el-table>
						</div>
					</el-form-item> -->
					<el-form-item style="width: 100%;">
						<el-button type="primary" @click="submitbefore()">立即修改</el-button>
						<el-button @click="cancelback()">取消修改</el-button>
					</el-form-item>
				</el-form>
			</div>
		</el-card>
		<!-- <el-dialog :visible.sync="dialogVisible">
			<img width="100%" :src="dialogImageUrl" alt="">
		</el-dialog> -->
		<!-- <el-dialog title="编辑学生" :visible.sync="isEditStu">
			<div>
				<el-form :model="editstuItem" destroy-on-close="true">
					<el-form-item label="名称">
						<el-input v-model="editstuItem.name"></el-input>
					</el-form-item>
					<el-form-item label="年级">
						<el-input v-model="editstuItem.grade"></el-input>
					</el-form-item>
					<el-form-item label="专业">
						<el-input v-model="editstuItem.specialty"></el-input>
					</el-form-item>
					<el-form-item label="是否主持">
						<el-radio v-model="editstuItem.isPresenter" label="1">第一主持</el-radio>
						<el-radio v-model="editstuItem.isPresenter" label="2">第二主持</el-radio>
						<el-radio v-model="editstuItem.isPresenter" label="0">否</el-radio>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="savestuedit()">保存</el-button>
					</el-form-item>
				</el-form>
			</div>
		</el-dialog>
		<el-dialog title="编辑指导老师" :visible.sync="isEditTch">
			<div>
				<el-form :model="editTchItem" destroy-on-close="true">
					<el-form-item label="名字">
						<el-input v-model="editTchItem.name"></el-input>
					</el-form-item>
					<el-form-item label="职称">
						<el-input v-model="editTchItem.job"></el-input>
					</el-form-item>
					<el-form-item label="研究方向">
						<el-input v-model="editTchItem.direction"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="savesTchedit()">保存</el-button>
					</el-form-item>
				</el-form>
			</div>
		</el-dialog>
		<el-dialog title="编辑学生" :visible.sync="isaddStu">
			<div>
				<el-form :model="addstuItem" destroy-on-close="true">
					<el-form-item label="名称">
						<el-input v-model="addstuItem.name"></el-input>
					</el-form-item>
					<el-form-item label="年级">
						<el-input v-model="addstuItem.grade"></el-input>
					</el-form-item>
					<el-form-item label="专业">
						<el-input v-model="addstuItem.specialty"></el-input>
					</el-form-item>
					<el-form-item label="是否主持" style="width: 80%;">
						<el-radio v-model="addstuItem.isPresenter" label="1">第一主持</el-radio>
						<el-radio v-model="addstuItem.isPresenter" label="2">第二主持</el-radio>
						<el-radio v-model="addstuItem.isPresenter" label="0">否</el-radio>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="savestuadd()">保存</el-button>
					</el-form-item>
				</el-form>
			</div>
		</el-dialog>
		<el-dialog title="编辑指导老师" :visible.sync="isaddTch">
			<div>
				<el-form :model="addTchItem" destroy-on-close="true">
					<el-form-item label="名字">
						<el-input v-model="addTchItem.name"></el-input>
					</el-form-item>
					<el-form-item label="职称">
						<el-input v-model="addTchItem.job"></el-input>
					</el-form-item>
					<el-form-item label="研究方向">
						<el-input v-model="addTchItem.direction"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="savesTchadd()">保存</el-button>
					</el-form-item>
				</el-form>
			</div>
		</el-dialog> -->
	</div>
</template>

<script>
import qs from 'qs';
let token = sessionStorage.getItem('token')
export default {
	data() {
		return {
			dialogImageUrl: '',
			dialogVisible: false,
			disabled: false,
			ispreimg: false,
			isbadgeimg: false,
			isEditStu: false,
			editStuIndex: '',
			editTchIndex: '',
			isEditTch: false,
			isaddStu: false,
			isaddTch: false,
			myHeaders: {'token': token},
			localimageurl:'',
			// addstuItem: {
			// 	name: '',
			// 	grade: '',
			// 	specialty: '',
			// 	isPresenter: 0,
			// 	projectId: '',
			// 	isDel: 0,
			// },
			// addTchItem: {
			// 	name: '',
			// 	job: '',
			// 	direction: '',
			// 	projectId: '',
			// 	isDel: 0,
			// },
			// editstuItem: {
			// 	name: '',
			// 	grade: '',
			// 	specialty: '',
			// 	isPresenter: 0,
			// 	projectId: '',
			// 	isDel: 0,
			// },
			// editTchItem: {
			// 	name: '',
			// 	job: '',
			// 	direction: '',
			// 	projectId: '',
			// 	isDel: 0,
			// },
			newdataform: {
				projectId: "",
				title: "",
				description: "",
				menuId: 3,
				content: "",
				name: ""
				// studentList: [
				// ],
				// teacherList: [
				// ],
			},
			ruleForm: {
				name: '',
				region: '',
				date1: '',
				date2: '',
				delivery: false,
				type: [],
				resource: '',
				desc: ''
			},
			rules: {
				projectId: [
					{ required: true, message: '请输入项目ID', trigger: 'blur' },
				],
				title: [
					{ required: true, message: '请输入项目名称', trigger: 'blur' },
				],
				description: [
					{ required: true, message: '请输入项目描述', trigger: 'blur' },
				],
				// projectType: [
				// 	{ required: true, message: '请输入项目类别', trigger: 'blur' },
				// ],
				// category: [
				// 	{ required: true, message: '请输入专业大类', trigger: 'blur' },
				// ],
				// years: [
				// 	{ required: true, message: '请输入年份', trigger: 'blur' },
				// ],
				// school: [
				// 	{ required: true, message: '请输入学校', trigger: 'blur' },
				// ],
			}
		};
	},
	methods: {
		// uploadfile() {
		// 	this.$refs.upload2.submit()
		// },
		imgAdd(pos, $file) {
						let token = sessionStorage.getItem('token')
		                var _this = this
		                var formdata = new FormData();
		                formdata.append('file', $file);
		                this.$axios.post("http://81.70.56.45:8083/rotation/upload/",formdata,{
		                    headers: {
		                        'Content-Type': 'multipart/form-data',
								'token': token
		                    }
		                }).then((response) => {
		                    // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
							console.log(response)
		                    if (response.status === 200) {
		                        var url = response.data.data.url;
		                        _this.$refs.md.$img2Url(pos,url)
		                    }
		                })
		            },
		            imgDel(pos) {
		
		            },
		deletelocal(){
				this.localimageurl=''
		},
		submitForm(formName) {
			let that = this
			// console.log(that.newdataform)
			this.$refs[formName].validate((valid) => {
				if (valid) {
					let data1 = JSON.stringify(that.newdataform)
					let token = sessionStorage.getItem('token')
					console.log(data1)
					that.$axios({
						method: "post",//请求方式
						url: 'http://81.70.56.45:8083/menuItem/updateMenuDetail',//请求接口
						headers: {
							'Content-Type': 'application/json',
							'token': token
						},//请求头参数
						data: data1//数据
					})
					.then(function (res) {
							console.log(res)
							if (res.data.status == 200) {
								that.$message.success('修改成功')
								that.$router.push('/Notice')
							}
							else {
								that.$message.error('修改失败');
							}
						})
						.catch(function (err) {
							that.$message.error('修改失败');
						});
				} else {
					that.$message.error('请检查表单，有无未填部分')
					return false;
				}
			});
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		},
		// handleRemove1(file) {
		// 	console.log(file);
		// },
		// handlePictureCardPreview1(file) {
		// 	this.dialogImageUrl = file.url;
		// 	this.dialogVisible = true;
		// },
		// handleDownload1(file) {
		// 	console.log(file);
		// },
		// handleAvatarSuccess1(res, file) {
		// 	this.newdataform.project.previewImageUrl = res.data.url
		// 	this.$refs.upload2.submit()
		// },
		// handleAvatarErr1(err, file, fileList) {
		// 	this.$message.error('上传缩略图错误');
		// },
		// beforeAvatarUpload1(file) {
		// 	const isJPG = file.type === 'image/jpeg';
		// 	const isLt2M = file.size / 1024 / 1024 < 2;
		// 	console.log('111')
		// 	if (!isJPG) {
		// 		this.$message.error('上传图片只能是 JPG 格式!');
		// 	}
		// 	if (!isLt2M) {
		// 		file
		// 		this.$message.error('上传图片大小不能超过 2MB!');
		// 	}
		// 	return isJPG && isLt2M;
		// },
		handleRemove2(file) {
			const uploadFiles = this.$refs.upload2.uploadFiles
			      console.log(uploadFiles)
			      for (let i = 0; i < uploadFiles.length; i++) {
			        if (uploadFiles[i]['url'] === file.url) {
			          uploadFiles.splice(i, 1)
			        }
			      }
		},
		handlePictureCardPreview2(file) {
			this.dialogImageUrl = file.url;
			this.dialogVisible = true;
		},
		handleAvatarErr2(err, file, fileList) {
			this.$message.error('图片上传失败')
		},
		submitbefore(){
					
				if(this.localimageurl==''){
					this.$refs.upload2.submit()
					
				}
				else{
					this.submitForm('newdataform')
				}
		},
		handleAvatarSuccess2(res, file) {
			this.newdataform.name = res.data.url
			this.$message.success('图片上传成功')
			this.submitForm('newdataform')
		},
		beforeAvatarUpload2(file) {
			const isJPG = file.type === 'image/jpeg';
			const isLt2M = file.size / 1024 / 1024 < 2;

			if (!isJPG) {
				this.$message.error('上传图片只能是 JPG 格式!');
			}
			if (!isLt2M) {
				this.$message.error('上传图片大小不能超过 2MB!');
			}
			return isJPG && isLt2M;
		},
		// handleEdit1(index, row) {
		// 	console.log(index, row);
		// 	this.editstuItem = row
		// 	this.editStuIndex = index
		// 	this.isEditStu = true
		// },
		// handleDelete1(index, row) {
		// 	this.newdataform.studentList.splice(index, 1)
		// },
		// savestuedit() {
		// 	if (this.editstuItem.name == '' || this.editstuItem.grade == '' ||
		// 		this.editstuItem.specialty == ''
		// 	) {
		// 		this.$message.error('修改信息不能为空');
		// 	}
		// 	else {
		// 		this.newdataform.studentList[this.editStuIndex] = this.editstuItem
		// 		this.isEditStu = false
		// 		this.$message({
		// 			message: '修改成功',
		// 			type: 'success'
		// 		});
		// 	}
		// },
		// handleEdit2(index, row) {
		// 	console.log(index, row);
		// 	this.editTchItem = row
		// 	this.editStuIndex = index
		// 	this.isEditTch = true
		// },
		// handleDelete2(index, row) {
		// 	this.newdataform.teacherList.splice(index, 1)
		// },
		// savesTchedit() {
		// 	if (this.editTchItem.name == '' || this.editTchItem.job == '' ||
		// 		this.editTchItem.direction == '') {
		// 		this.$message.error('修改信息不能为空');
		// 	}
		// 	else {
		// 		this.newdataform.teacherList[this.editTchIndex] = this.editTchItem
		// 		this.isEditTch = false
		// 		this.$message({
		// 			message: '修改成功',
		// 			type: 'success'
		// 		});
		// 	}
		// },
		// addStu() {
		// 	if (this.newdataform.project.projectId == '') {
		// 		this.$message.error('请先设置项目ID');
		// 	}
		// 	else {
		// 		this.isaddStu = true
		// 		this.addstuItem.projectId = this.newdataform.project.projectId
		// 	}
		// },
		// addTch() {
		// 	if (this.newdataform.project.projectId == '') {
		// 		this.$message.error('请先设置项目ID');
		// 	}
		// 	else {
		// 		this.isaddTch = true
		// 		this.addTchItem.projectId = this.newdataform.project.projectId
		// 	}
		// },
		// savestuadd() {
		// 	if (this.addstuItem.name == '' || this.addstuItem.grade == '' ||
		// 		this.addstuItem.specialty == '' ||
		// 		this.addstuItem.isPresenter == '') {
		// 		this.$message.error('添加信息不能为空');
		// 	}
		// 	else {
		// 		let id = this.newdataform.project.projectId
		// 		this.newdataform.studentList.push(this.addstuItem)
		// 		this.addstuItem = {
		// 			name: '',
		// 			grade: '',
		// 			specialty: '',
		// 			isPresenter: 0,
		// 			projectId: id,
		// 			isDel: 0
		// 		}
		// 		this.isaddStu = false
		// 		this.$message({
		// 			message: '修改成功',
		// 			type: 'success'
		// 		});
		// 	}
		// },
		// savesTchadd() {
		// 	if (this.addTchItem.name == '' || this.addTchItem.job == '' ||
		// 		this.addTchItem.direction == '') {
		// 		this.$message.error('修改信息不能为空');
		// 	}
		// 	else {
		// 		this.newdataform.teacherList.push(this.addTchItem)
		// 		let id = this.newdataform.project.projectId
		// 		this.addTchItem = {
		// 			name: '',
		// 			job: '',
		// 			direction: '',
		// 			projectId: id,
		// 			isDel: 0
		// 		}
		// 		this.isaddTch = false
		// 		this.$message({
		// 			message: '修改成功',
		// 			type: 'success'
		// 		});
		// 	}
		// },
		cancelback() {
			this.$router.push('/Paper')
		},
		getdata() {
				let that = this
				that.$axios({
					method: "get",//请求方式
					url: '/menuItem/getMenuDetail/' + this.$route.query.id,//请求接口
					headers: {
						'Content-Type': 'application/json',
						'token': 'eee'
					},//请求头参数
				}).then(res => {
					// console.log(res)
					this.newdataform = res.data.data.menuItem
					this.localimageurl=this.newdataform.name
					console.log(this.newdataform)
					this.$message.success('获取信息成功')
				})
			}
		},
		mounted() {
			this.getdata()
		}
	

}
</script>

<style scoped>
.maincontainer {
	width: 100%;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
}

.box-card {
	width: 50%;
	margin-top: 2%;
	margin-bottom: 2%;
}
</style>