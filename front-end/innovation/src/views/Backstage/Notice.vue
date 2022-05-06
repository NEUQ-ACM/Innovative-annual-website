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
              <span style="margin-left: 10px">{{ scope.row.createTime }}</span>
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
              <el-popconfirm title="这是一段内容确定删除吗？">
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                  slot="reference"
                  >删除</el-button
                >
              </el-popconfirm>
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
      dialogTableVisible: false,
      nowContent: "",
      noticeNum: 0,
      noticeDate: [
        {
          id: '',
          title: "",
          description:
            "",
          update_time: "",
          content: ``,
          view_counts: "",
        },
      ],
    };
  },
  methods: {
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
    handleDelete(index, row) {
      this.$axios.get("/notice/delNotice", row.id);
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
.el-button--success {
  margin-top: 20px;
}
</style>