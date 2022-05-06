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
        <el-button type="success" @click="handleAdd">添加通知</el-button>
      </el-col>
      <el-col :span="20">
        <el-table
          :data="noticeDate"
          style="width: 100%"
          :default-sort="{ prop: 'id', order: 'ascending' }"
        >
          <el-table-column label="id" width="180" prop="id" sortable>
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.id }}</span>
            </template>
          </el-table-column>
          <el-table-column label="标题" width="180" prop="title" sortable>
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
          <el-table-column
            label="上传日期"
            width="180"
            prop="updateTime"
            sortable
          >
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.updateTime }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleDetail(scope.$index, scope.row)"
                >查看</el-button
              >
              <el-dialog title="查看通知" :visible.sync="dialogTableVisible">
                <el-input
                  type="textarea"
                  :autosize="{ minRows: 5, maxRows: 30 }"
                  v-model="nowContent"
                >
                </el-input>
              </el-dialog>
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >编辑</el-button
              >
              <el-button
                size="mini"
                @click="handleAnnex(scope.$index, scope.row)"
                >附件上传</el-button
              >
              <el-dialog :visible.sync="dialogAddVisible">
                <el-upload
                  class="upload-demo"
                  ref="upload"
                  action="http://81.70.56.45:8082/annex/upload/"
                  :data="{ noticeId: annexEdit }"
                  :on-preview="handlePreview"
                  :on-success="upSuccess"
                  :on-remove="handleRemove"
                  :file-list="fileList"
                  :auto-upload="false"
                >
                  <el-button slot="trigger" size="small" type="primary"
                    >选取文件</el-button
                  >
                  <el-button
                    style="margin-left: 10px"
                    size="small"
                    type="success"
                    @click="submitUpload"
                    >上传到服务器</el-button
                  >
                  <div slot="tip" class="el-upload__tip">
                    只能上传jpg/png文件，且不超过500kb
                  </div>
                </el-upload>
              </el-dialog>
              <el-button
                size="mini"
                type="danger"
                @click="deleteSelect(scope.$index,scope.row)"
                slot="reference"
                >删除</el-button
              >
              <el-dialog
                title="提示"
                :visible.sync="deleteVisible"
                width="30%"
                :before-close="handleClose"
              >
                <span>确认删除公告</span>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="deleteVisible = false">取 消</el-button>
                  <el-button
                    type="primary"
                    @click="handleDelete()"
                    >确 定</el-button
                  >
                </span>
              </el-dialog>
            </template>
          </el-table-column>
        </el-table>
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
      annexList: [],
      fileList: [],
      deleteId:'',
      dialogAddVisible: false,
      deleteVisible: false,
      dialogTableVisible: false,
      nowContent: "",
      annexEdit: "",
      noticeNum: 0,
      noticeDate: [
        {
          id: "",
          title: "",
          description: "",
          update_time: "",
          content: ``,
          view_counts: "",
        },
      ],
    };
  },
  methods: {
    deleteSelect(index,row){
      this.deleteVisible=true;
      this.deleteId=row.id;
    },
    upSuccess() {
      this.$message.success("上传成功");
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleAnnex(index, row) {
      this.dialogAddVisible = true;
      this.annexEdit = row.id;
    },
    handleDetail(index, row) {
      (this.dialogTableVisible = true), (this.nowContent = row.content);
    },
    handleEdit(index, row) {
      this.$router.push({
        path: "/NoticeEdit",
        query: { type: false, id: row.id },
      }); //type参数 true为修改 false为添加
    },
    handleAdd(index, row) {
      this.$router.push({ path: "/NoticeEdit", query: { type: true } });
    },
    handleDelete() {
      this.deleteVisible = false;
      this.$axios
        .get("/notice/delNotice/" + this.deleteId)
        .then((response) => {
          this.$message.success("删除成功");
        })
        .catch((error) => {
          console.log(error);
          this.$message.error("删除失败");
        });
      location.reload();
    },
  },
  mounted() {
    this.$axios
      .get("/notice/getAll")
      .then((response) => {
        this.noticeNum = response.data.data.pageNumber;
        this.noticeDate = response.data.data.records;
        console.log(this.noticeDate);
      })
      .catch((error) => {
        console.log(error);
        this.$message.error("网络错误，不能访问");
      });
    this.$axios
      .get("/annex/getAll")
      .then((response) => {
        this.annexList = response.data.data.records;
        console.log(this.annexList);
      })
      .catch((error) => {
        console.log(error);
        this.$message.error("网络错误，不能访问");
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
.el-button--success {
  margin-top: 20px;
}
</style>