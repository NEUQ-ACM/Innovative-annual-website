<template>
	<div class="maincontainer">
		<el-card class="box-card">
			<div slot="header" >
			    <span style="font-size: 25px;">修改创新创业展示项目</span>
			  </div>
			<div style="width: 100%;">
				<el-form :model="newdataform.project" :rules="rules" ref="newdataform.project" label-width="100px" class="demo-ruleForm">
				  <el-form-item label="项目ID" prop="projectId" style="width: 100%;" >
				    <el-input v-model="newdataform.project.projectId"  type="number" placeholder="输入数字" ></el-input>
				  </el-form-item>
				  <el-form-item label="项目名称" prop="projectName" style="width: 100%;" >
				    <el-input v-model="newdataform.project.projectName"></el-input>
				  </el-form-item>
				  <el-form-item label="项目描述" style="width: 100%;" prop="description">
				    <el-input type="textarea" v-model="newdataform.project.description"></el-input>
				  </el-form-item>
				  <el-form-item label="项目类型" style="width: 100%;" prop="projectType">
				    <el-input v-model="newdataform.project.projectType"></el-input>
				  </el-form-item>
				  <el-form-item label="专业大类" style="width: 100%;" prop="category">
				    <el-input v-model="newdataform.project.category"></el-input>
				  </el-form-item>
				  <el-form-item style="width: 100%;" label="年份" prop="years">
				    <el-input v-model="newdataform.project.years"></el-input>
				  </el-form-item>
				  <el-form-item style="width: 100%;" label="学校" prop="school">
				    <el-input  v-model="newdataform.project.school"></el-input>
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
					<div v-if="(!iseditimg)&&(!alreadyEditImg)" style="display: flex;justify-content: center;">
						<span><el-image
						      style="width: 100px; height: 100px"
						      :src="newdataform.project.badgeUrl"
						      fit="fill"></el-image></span>
						<span style="margin-left: 10%;">
							  <el-button type="primary" icon="el-icon-edit" circle @click="editimg()" ></el-button>
						</span>
					</div>
				    <div v-if="iseditimg" style="display: flex;justify-content: center;align-items: center;float: left;">
						<span style="margin-left: 5%;">
							<el-upload
							  action="http://81.70.56.45:8082/project/upload"
							  ref="upload2"
							  list-type="picture-card"
							  :auto-upload="false"
							  :on-success="handleAvatarSuccess2"
							  :on-error="handleAvatarErr2"
							  :on-change="alreadyChangeImg"
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
						</span>
						<span style="margin-left: 3%;" v-if="!alreadyEditImg">
							<el-button type="success"  @click="editimg()" >撤销更改(如已选图片则无法撤销)</el-button>
							<!-- icon="el-icon-back" -->
						</span>
					</div>
					
				  </el-form-item>
				  <el-form-item label="学生列表" style="width: 100%;" >
				     <div>
						 <el-button @click="addStu()" type="primary">添加学生</el-button>
					 </div>
					 <div style="margin: 3% 0;">
						  <el-table
						     :data="newdataform.studentList"
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
				     					     :data="newdataform.teacherList"
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
		  				    <el-form-item label="名称" >
		  				      <el-input v-model="addstuItem.name"></el-input>
		  				    </el-form-item>
		  				    <el-form-item label="年级" >
		  				      <el-input v-model="addstuItem.grade"></el-input>
		  				    </el-form-item>
		  				    <el-form-item label="专业" >
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
			  alreadyEditImg:false,
			  iseditimg:false,
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
				name:'',
				grade:'',
				specialty:'',
				isPresenter:0,
				projectId:'',
				isDel: 0,
			},
			addTchItem:{
				name:'',
				job:'',
				direction:'',
				projectId:'',
				isDel: 0,
			},
			editstuItem:{
				name:'',
				grade:'',
				specialty:'',
				isPresenter:0,
				projectId:'',
				isDel: 0,
			},
			editTchItem:{
				name:'',
				job:'',
				direction:'',
				projectId:'',
				isDel: 0,
			},
			newdataform:{
				 project: {
							id:'',
							projectId: "",
							projectName: "",
							description: "",
							projectType: "",
							category: "",
							type: 3,
							viewCounts:0,
							previewImageUrl: "",
							badgeUrl: "",
							years: "",
							school: "",
							isDel: 0
						},
				studentList:[
				],
				teacherList:[
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
			alreadyChangeImg(file, fileList){
				this.alreadyEditImg=true
			},
			editimg(){
				this.iseditimg=!this.iseditimg
			},
			uploadfile(){
						
					if(this.alreadyEditImg){
						this.$refs.upload2.submit()
					}
					else{
						this.submitForm('newdataform.project')
					}
			},
			submitForm(formName) {
				
			let that=this
			  this.$refs[formName].validate((valid) => {
			    if (valid) {
					let data1=JSON.stringify(that.newdataform)
					console.log(this.newdataform)
				  that.$axios({
				           method:"post",//请求方式
				           url:'/project/updateProject',//请求接口
				           headers:{
				           'Vary':'Origin',
				           'Vary':'Access-Control-Request-Method',
				           'Vary':'Access-Control-Request-Headers',
				           'Content-Type':'application/json',
				           'Transfer-Encoding':'chunked',
				           'Connection':'keep-alive'
				           },//请求头参数
				           data:data1//数据
				         	})
				  .then(function(res){
					if(res.data.status==200){
						that.$message.success('增加成功')
						that.$router.push('/Reform')
					}
					else{
						 that.$message.error('增加失败');
					}
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
				   this.newdataform.project.previewImageUrl=res.data.url
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
			       this.newdataform.project.badgeUrl=res.data.url
				    this.$message.success('图片上传成功')
				   this.submitForm('newdataform.project')
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
			       this.newdataform.studentList.splice(index,1)
			      },
			savestuedit(){
				if(this.editstuItem.name==''||this.editstuItem.grade==''||
				this.editstuItem.specialty==''
				){
					 this.$message.error('修改信息不能为空');
				}
				else{
					this.newdataform.studentList[this.editStuIndex]=this.editstuItem
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
			        this.newdataform.teacherList.splice(index,1)
			      },
			savesTchedit(){
				if(this.editTchItem.name==''||this.editTchItem.job==''||
				this.editTchItem.direction==''){
					 this.$message.error('修改信息不能为空');
				}
				else{
					this.newdataform.teacherList[this.editTchIndex]=this.editTchItem
					this.isEditTch=false
					this.$message({
					          message: '修改成功',
					          type: 'success'
					        });
				}
			},
			addStu(){
				if(this.newdataform.project.projectId==''){
					this.$message.error('请先设置项目ID');
				}
				else{
					this.isaddStu=true
					this.addstuItem.projectId=this.newdataform.project.projectId
				}
			},
			addTch(){
				if(this.newdataform.project.projectId==''){
					this.$message.error('请先设置项目ID');
				}
				else{
					this.isaddTch=true
					this.addTchItem.projectId=this.newdataform.project.projectId
				}
			},
			savestuadd(){
				if(this.addstuItem.name==''||this.addstuItem.grade==''||
				this.addstuItem.specialty==''||
				this.addstuItem.isPresenter==''){
					 this.$message.error('添加信息不能为空');
				}
				else{
					let id=this.newdataform.project.projectId
					this.newdataform.studentList.push(this.addstuItem)
					this.addstuItem={
						name:'',
						grade:'',
						specialty:'',
						isPresenter:0,
						projectId:id,
						isDel:0
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
					this.newdataform.teacherList.push(this.addTchItem)
					let id=this.newdataform.project.projectId
					this.addTchItem={
						name:'',
						job:'',
						direction:'',
						projectId:id,
						isDel:0
					}
					this.isaddTch=false
					this.$message({
					          message: '修改成功',
					          type: 'success'
					        });
				}
			},
			cancelback(){
				this.$router.push('/Reform')
			},
			getdata(){
						let that = this
							this.$axios.get("/project/getbyId/"+this.$route.query.id ).then((res) => {
							        this.newdataform=res.data.data
									console.log(this.newdataform)
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