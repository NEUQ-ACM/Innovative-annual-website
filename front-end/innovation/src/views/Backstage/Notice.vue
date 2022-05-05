<template>
  <div class="maincontainer">
    <!-- <el-container>
		  <el-aside style="height: 50vh;" width="200px" ><Sidebar></Sidebar></el-aside>
		  <el-main>Main</el-main>
		</el-container> -->
    <el-row :gutter="20" class="el-row">
      <el-col :span="4"><Sidebar></Sidebar></el-col>
      <el-col :span="20"> 通知公告 </el-col>
      <el-col :span="20">
        <el-table :data="noticeDate" style="width: 100%">
          <el-table-column label="id" width="180">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.id }}</span>
            </template>
          </el-table-column>
          <el-table-column label="标题" width="180">
            <template slot-scope="scope">
              <p>
                <b>{{ scope.row.title }}</b>
              </p>
            </template>
          </el-table-column>
          <el-table-column label="描述" width="680">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.description }}</span>
            </template>
          </el-table-column>
          <el-table-column label="上传日期" width="180">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.update_time }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >编辑</el-button
              >
              <el-dialog title="公告修改" :visible.sync="NoticeEdit">
                <el-form ref="form" :model="form" label-width="80px">
                  <el-form-item label="标题">
                    <el-input v-model="nowEdit.title"></el-input>
                  </el-form-item>
                  <el-form-item label="描述">
                    <el-input v-model="nowEdit.description"></el-input>
                  </el-form-item>
                </el-form>
                <el-button type="primary" @click="editSubmit"
                  >确定修改</el-button
                >
              </el-dialog>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-col>
	  <el-col :span="20">
		  <el-button type="success" @click="NoticeAdd=true">添加通知</el-button>
		  <el-dialog title="公告添加" :visible.sync="NoticeAdd">
                <el-form ref="form" :model="form" label-width="80px">
                  <el-form-item label="标题">
                    <el-input v-model="nowAdd.title"></el-input>
                  </el-form-item>
                  <el-form-item label="描述">
                    <el-input v-model="nowAdd.description"></el-input>
                  </el-form-item>
                </el-form>
                <el-button type="primary" @click="addSubmit"
                  >确定添加</el-button
                >
              </el-dialog>
	  </el-col>
    </el-row>
  </div>
</template>

<script>
import Sidebar from "../../components/Sidebar.vue";
export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      nowEdit: { id: "", title: "", content: "" },
	  nowAdd:{title:'',content:''},
      NoticeEdit: false,
	  NoticeAdd:false,
      noticeNum: 0,
      noticeDate: [
        {
          id: 1,
          title: "法法师阿发 按时发生 ",
          description:
            "法发顺丰啊沙发沙发上大发顺丰啊发顺丰按时发顺丰安抚安抚安抚萨沙发阿发十三分芬安抚撒发 ",
          update_time: " 2021-05-08",
        },
      ],
    };
  },
  methods: {
    handleEdit(index, row) {
      this.NoticeEdit = true;
      this.nowEdit.id = row.id;
    },
    editSubmit() {
      axios.post('/updateNotice',this.nowEdit)
    },
	handleDelete(index,row){
		axios.get('/delNotice',row.id)
	},
	addSubmit(){
		axios.post('/addNotice',this.nowEdit)
	}
  },
  mounted() {
    axios
      .get("/notice")
      .then((response) => {
        this.noticeNum = response.pageNumber;
        this.noticeDate = response.data;
      })
      .catch((error) => {
        console.log(error);
        alert("网络错误，不能访问");
      });
  },
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
  height: 500px;
}
.maincontainer {
  height: 100%;
}
.leftside {
}
.rightside {
}
.el-button--success{
	margin-top: 20px;
}
</style>