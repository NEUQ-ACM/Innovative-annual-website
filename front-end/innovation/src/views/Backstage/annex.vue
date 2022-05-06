<template>
  <el-row :gutter="20" class="el-row">
    <el-col :span="4"><Sidebar></Sidebar></el-col>
    <el-col :span="20"> 附件管理 </el-col>
    <el-col :span="20">
      <el-table :data="annexList" style="width: 100%" :default-sort="{ prop: 'noticeId', order: 'ascending' }">
        <el-table-column label="对应公告id" width="180" prop="noticeId" sortable>
          <template slot-scope="scope">
            <i class="el-icon-s-order"></i>
            <span style="margin-left: 10px">{{ scope.row.noticeId }}</span>
          </template>
        </el-table-column>
        <el-table-column label="文件名" width="580" prop="name" sortable>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>{{ scope.row.name }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="修改时间" width="180" prop="updateTime" sortable>
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.updateTime }}</span>
          </template>
        </el-table-column>
        <el-table-column label="创建时间" width="180" prop="createTime" sortable>
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.createTime }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="dialogVisible=true"
              slot="reference"
              >删除</el-button
            >
            <el-dialog
              title="提示"
              :visible.sync="dialogVisible"
              width="30%"
              :before-close="handleClose"
            >
              <span>确认删除附件</span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleDelete(scope.$index, scope.row)"
                  >确 定</el-button
                >
              </span>
            </el-dialog>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>

<script>
import Sidebar from "../../components/Sidebar.vue";
export default {
  components: {
    Sidebar,
  },
  data() {
    return {
    dialogVisible:false,
      annexList: [],
    };
  },
  methods: {
    handleDelete(index, row) {
      this.dialogVisible=false,
      this.$axios
        .get("/annex/delFile/" + row.id)
        .then((response) => {
          this.$message.success("删除成功");
        })
        .catch((error) => {
          console.log(error);
          this.$message.error("网络错误，不能访问");
        });
        this.$axios
      .get("/annex/getAll")
      .then((response) => {
        this.annexList = response.data.data.records;
      })
      .catch((error) => {
        console.log(error);
        this.$message.error("网络错误，不能访问");
      });
    },
  },
  mounted() {
    this.$axios
      .get("/annex/getAll")
      .then((response) => {
        this.annexList = response.data.data.records;
      })
      .catch((error) => {
        console.log(error);
        this.$message.error("网络错误，不能访问");
      });
  },
};
</script>

<style>
</style>