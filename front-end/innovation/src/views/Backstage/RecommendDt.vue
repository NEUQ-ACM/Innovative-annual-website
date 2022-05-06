<template>
	<div class="maincontainer">
		<el-card class="box-card">
			<div slot="header" >
			    <span style="font-size: 25px;">修改推荐项目</span>
			  </div>
			<div style="width: 100%;">
				<el-form :model="newdataform" :rules="rules" ref="newdataform" label-width="100px" class="demo-ruleForm">
				  <el-form-item label="项目ID" prop="projectId" style="width: 100%;" >
				    <el-input v-model="newdataform.projectId"  ></el-input>
				  </el-form-item>
				  <el-form-item label="项目名称" prop="projectName" style="width: 100%;" >
				    <el-input v-model="newdataform.project_name"></el-input>
				  </el-form-item>
				  <el-form-item label="项目描述" style="width: 100%;" prop="description">
				    <el-input type="textarea" v-model="newdataform.description"></el-input>
				  </el-form-item>
				  <el-form-item label="项目类型" style="width: 100%;" prop="projectType">
				    <el-input v-model="newdataform.project_type"></el-input>
				  </el-form-item>
				  <el-form-item label="专业大类" style="width: 100%;" prop="category">
				    <el-input v-model="newdataform.category"></el-input>
				  </el-form-item>
				  <el-form-item style="width: 100%;" label="年份" prop="years">
				    <el-input v-model="newdataform.years"></el-input>
				  </el-form-item>
				  <el-form-item style="width: 100%;" label="学校" prop="school">
				    <el-input  v-model="newdataform.school"></el-input>
				  </el-form-item>
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
				  <el-form-item label="上传校徽" >
				    <el-upload
				      action="http://81.70.56.45:8082/project/upload"
					  ref="upload2"
				      list-type="picture-card"
				      :auto-upload="false"
					  :on-success="handleAvatarSuccess2"
					  :on-error="handleAvatarErr2"
					    :before-upload="beforeAvatarUpload2"
					  >
				        <i slot="default" class="el-icon-plus" v-if="!isbadgeimg" ></i>
				        <div slot="file" slot-scope="{file}">
				          <img
				            class="el-upload-list__item-thumbnail"
				            :src="file.url" alt=""
				          >
				          <span class="el-upload-list__item-actions">
				            <span
				              class="el-upload-list__item-preview"
				              @click="handlePictureCardPreview2(file)"
				            >
				              <i class="el-icon-zoom-in"></i>
				            </span>
				            <span
				              v-if="!disabled"
				              class="el-upload-list__item-delete"
				              @click="handleDownload2(file)"
				            >
				              <i class="el-icon-download"></i>
				            </span>
				            <span
				              v-if="!disabled"
				              class="el-upload-list__item-delete"
				              @click="handleRemove2(file)"
				            >
				              <i class="el-icon-delete"></i>
				            </span>
				          </span>
				        </div>
				    </el-upload>
				  </el-form-item>
				  <el-form-item label="学生列表" style="width: 100%;" >
				     <div>
						 <el-button @click="addStu()" type="primary">添加学生</el-button>
					 </div>
					 <div style="margin: 3% 0;">
						  <el-table
						     :data="newdataform.student"
						     border
						     style="width: 100%">
						     <el-table-column
						       prop="name"
						       label="姓名"
						       >
						     </el-table-column>
						     <el-table-column
						       prop="grade"
						       label="年级">
						     </el-table-column>
						     <el-table-column
						       prop="specialty"
						       label="专业">
						     </el-table-column>
							 <el-table-column
							   prop="isPresenter"
							   label="是否主持">
							 </el-table-column>
							  <el-table-column label="操作">
							       <template slot-scope="scope">
							         <el-button
							           size="mini"
									   type="text"
							           @click="handleEdit1(scope.$index, scope.row)">编辑</el-button>
							         <el-button
							           size="mini"
							           type="text"
							           @click="handleDelete1(scope.$index, scope.row)">删除</el-button>
							       </template>
							     </el-table-column>
						   </el-table>
					 </div>
				  </el-form-item>
				  <el-form-item label="指导老师" style="width: 100%;" >
				     <div>
				     					 <el-button type="primary" @click="addTch()" >添加教师</el-button>
				     </div>
				     <div style="margin: 3% 0;">
				     					  <el-table
				     					     :data="newdataform.teacher"
				     					     border
				     					     style="width: 100%">
				     					     <el-table-column
				     					       prop="name"
				     					       label="姓名"
				     					       >
				     					     </el-table-column>
				     					     <el-table-column
				     					       prop="job"
				     					       label="职称">
				     					     </el-table-column>
				     					     <el-table-column
				     					       prop="direction"
				     					       label="研究方向">
				     					     </el-table-column>
				     						  <el-table-column label="操作">
				     						       <template slot-scope="scope">
				     						         <el-button
				     						           size="mini"
				     								   type="text"
				     						           @click="handleEdit2(scope.$index, scope.row)">编辑</el-button>
				     						         <el-button
				     						           size="mini"
				     						           type="text"
				     						           @click="handleDelete2(scope.$index, scope.row)">删除</el-button>
				     						       </template>
				     						     </el-table-column>
				     					   </el-table>
				     </div>
				  </el-form-item>
				  <el-form-item style="width: 100%;">
				    <el-button type="primary" @click="uploadfile()">立即修改</el-button>
					<el-button @click="cancelback()">取消修改</el-button>
				  </el-form-item>
				</el-form>
			</div>
		</el-card>
		<el-dialog :visible.sync="dialogVisible">
		  <img width="100%" :src="dialogImageUrl" alt="">
		</el-dialog>
		<el-dialog title="编辑学生" :visible.sync="isEditStu">
		  <div>
		  				  <el-form  :model="editstuItem" destroy-on-close="true" >
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
		  					  <el-input v-model="editstuItem.isPresenter"></el-input>
		  					</el-form-item>
							<el-form-item>
							  <el-button type="primary" @click="savestuedit()">保存</el-button>
							</el-form-item>
		  				  </el-form>
		  </div>
		</el-dialog>
		<el-dialog title="编辑指导老师" :visible.sync="isEditTch">
		  <div>
		  				  <el-form  :model="editTchItem" destroy-on-close="true" >
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
		  				  <el-form  :model="addstuItem" destroy-on-close="true" >
		  				    <el-form-item label="名称">
		  				      <el-input v-model="addstuItem.name"></el-input>
		  				    </el-form-item>
		  				    <el-form-item label="年级">
		  				      <el-input v-model="addstuItem.grade"></el-input>
		  				    </el-form-item>
		  				    <el-form-item label="专业">
		  				      <el-input v-model="addstuItem.specialty"></el-input>
		  				    </el-form-item>
		  					<el-form-item label="是否主持">
		  					  <el-input v-model="addstuItem.isPresenter"></el-input>
		  					</el-form-item>
							<el-form-item>
							  <el-button type="primary" @click="savestuadd()">保存</el-button>
							</el-form-item>
		  				  </el-form>
		  </div>
		</el-dialog>
		<el-dialog title="编辑指导老师" :visible.sync="isaddTch">
		  <div>
		  				  <el-form  :model="addTchItem" destroy-on-close="true" >
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
		</el-dialog>
	</div>
</template>

<script>
	import qs from 'qs';
	export default {
	    data() {
	      return {
			  dialogImageUrl: '',
			          dialogVisible: false,
			          disabled: false,
			ispreimg:false,
			isbadgeimg:false,
			isEditStu:false,
			editStuIndex:'',
			editTchIndex:'',
			isEditTch:false,
			isaddStu:false,
			isaddTch:false,
			addstuItem:{
				id:'',
				name:'',
				grade:'',
				specialty:'',
				isPresenter:'',
				projectId:'',
			},
			addTchItem:{
				id:'',
				name:'',
				job:'',
				direction:'',
				projectId:'',
			},
			editstuItem:{
				id:'',
				name:'',
				grade:'',
				specialty:'',
				isPresenter:'',
				projectId:'',
			},
			editTchItem:{
				id:'',
				name:'',
				job:'',
				direction:'',
				projectId:'',
			},
			newdataform:{
				id:'',
				projectId:'',
				projectName:'',
				description:'',
				projectType:'',
				category:'',
				type:1,
				previewImageUrl:'',
				badgeUrl:'',
				years:'',
				school:'',
				student:[
				// 	{
				// 	id:'',
				// 	name:'',
				// 	grade:'',
				// 	specialty:'',
				// 	isPresenter:'',
				// 	projectId:'',
				// },
				],
				teacher:[
					// {
					// 	id:'',
					// 	name:'',
					// 	job:'',
					// 	direction:'',
					// 	projectId:'',
					// }
				],
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
	          projectName: [
	            { required: true, message: '请输入项目名称', trigger: 'blur' },
	          ],
			  description: [
			    { required: true, message: '请输入项目描述', trigger: 'blur' },
			  ],
			  projectType: [
			    { required: true, message: '请输入项目类别', trigger: 'blur' },
			  ],
			  category: [
			    { required: true, message: '请输入专业大类', trigger: 'blur' },
			  ],
			  years: [
			    { required: true, message: '请输入年份', trigger: 'blur' },
			  ],
			  school: [
			    { required: true, message: '请输入学校', trigger: 'blur' },
			  ],
	          
	        }
	      };
	    },
		methods: {
			uploadfile(){
					this.$refs.upload2.submit()
			},
			submitForm(formName) {
			let that=this
			  this.$refs[formName].validate((valid) => {
			    if (valid) {
				  that.$axios({
				           method:"post",//请求方式
				           url:'/project/addProject',//请求接口
				           headers:{
				           'Content-Type': 'application/json '
				           },//请求头参数
				           data:that.newdataform//数据
				         	})
				  .then(function(res){
				    that.$message.success('增加成功')
					console.log(res)
				  })
				  .catch(function(err){
				    that.$message.error('增加失败');
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
			handleRemove1(file) {
			       console.log(file);
			     },
			handlePictureCardPreview1(file) {
			  this.dialogImageUrl = file.url;
	
			  this.dialogVisible = true;
			},
			handleDownload1(file) {
			  console.log(file);
			},
			handleAvatarSuccess1(res, file) {
				   this.newdataform.previewImageUrl=res.data.url
				   this.$refs.upload2.submit()
			},
			handleAvatarErr1(err, file, fileList) {
			      this.$message.error('上传缩略图错误');
			},
			beforeAvatarUpload1(file) {
			  const isJPG = file.type === 'image/jpeg';
			  const isLt2M = file.size / 1024 / 1024 < 2;
				console.log('111')
			  if (!isJPG) {
			    this.$message.error('上传图片只能是 JPG 格式!');
			  }
			  if (!isLt2M) {file
			    this.$message.error('上传图片大小不能超过 2MB!');
			  }
			  return isJPG && isLt2M;
			},
			handleRemove2(file) {
			       console.log(file);
			     },
			handlePictureCardPreview2(file) {
			  this.dialogImageUrl = file.url;
			  this.dialogVisible = true;
			},
			handleAvatarErr2(err, file, fileList) {
			       this.$message.error('图片上传失败')
			},
			handleAvatarSuccess2(res, file) {
			       this.newdataform.badgeUrl=res.data.url
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
			handleEdit1(index, row) {
			        console.log(index, row);
					this.editstuItem=row
					this.editStuIndex=index
					this.isEditStu=true
			      },
			handleDelete1(index, row) {
			       this.newdataform.student.splice(index,1)
			      },
			savestuedit(){
				if(this.editstuItem.name==''||this.editstuItem.grade==''||
				this.editstuItem.specialty==''||
				this.editstuItem.isPresenter==''){
					 this.$message.error('修改信息不能为空');
				}
				else{
					this.newdataform.student[this.editStuIndex]=this.editstuItem
					this.isEditStu=false
					this.$message({
					          message: '修改成功',
					          type: 'success'
					        });
				}
			},
			handleEdit2(index, row) {
			        console.log(index, row);
					this.editTchItem=row
					this.editStuIndex=index
					this.isEditTch=true
			      },
			      handleDelete2(index, row) {
			        this.newdataform.teacher.splice(index,1)
			      },
			savesTchedit(){
				if(this.editTchItem.name==''||this.editTchItem.job==''||
				this.editTchItem.direction==''){
					 this.$message.error('修改信息不能为空');
				}
				else{
					this.newdataform.teacher[this.editTchIndex]=this.editTchItem
					this.isEditTch=false
					this.$message({
					          message: '修改成功',
					          type: 'success'
					        });
				}
			},
			addStu(){
				if(this.newdataform.projectId==''){
					this.$message.error('请先设置项目ID');
				}
				else{
					this.isaddStu=true
				}
			},
			addTch(){
				if(this.newdataform.projectId==''){
					this.$message.error('请先设置项目ID');
				}
				else{
					this.isaddTch=true
				}
			},
			savestuadd(){
				if(this.addstuItem.name==''||this.addstuItem.grade==''||
				this.addstuItem.specialty==''||
				this.addstuItem.isPresenter==''){
					 this.$message.error('添加信息不能为空');
				}
				else{
					this.newdataform.student.push(this.addstuItem)
					this.addstuItem={
						id:'',
						name:'',
						grade:'',
						specialty:'',
						isPresenter:'',
						projectId:'',
					}
					this.isaddStu=false
					this.$message({
					          message: '修改成功',
					          type: 'success'
					        });
				}
			},
			savesTchadd(){
				if(this.addTchItem.name==''||this.addTchItem.job==''||
				this.addTchItem.direction==''){
					 this.$message.error('修改信息不能为空');
				}
				else{
					this.newdataform.teacher.push(this.addTchItem)
					this.addTchItem={
						id:'',
						name:'',
						job:'',
						direction:'',
						projectId:'',
					}
					this.isaddTch=false
					this.$message({
					          message: '修改成功',
					          type: 'success'
					        });
				}
			},
			cancelback(){
				this.$router.push('/Recommend')
			},
			getdata(){
				let that = this
				this.$axios.get("/project/getbyId/"+this.$route.query.id ).then((res) => {
				        this.newdataform=res.data.data.project
						this.newdataform.student=res.data.data.studentList
						this.newdataform.teacher=res.data.data.teacherList
						this.$message.success('获取信息成功')
				      });
			}
		},
		mounted() {
			this.getdata()
		}
	  }
</script>

<style scoped>
	.maincontainer{
		width: 100%;
		height: auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.box-card{
		width: 50%;
		margin-top: 2%;
		margin-bottom: 2%;
	}
</style>