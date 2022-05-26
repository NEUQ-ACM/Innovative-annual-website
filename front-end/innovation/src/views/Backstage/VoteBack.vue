<template>
  <div class="maincontainer">
    <el-row :gutter="20"
            class="el-row">
      <el-col :span="4">
        <Sidebar></Sidebar>
      </el-col>
      <el-col :span="2"
              style="margin-top:1%">
        <a :href="'http://81.70.56.45:8083/voteState/downloadResult/?token='+headers.token">
          <el-button type="primary"
                     @click="downloadResult">导出投票结果</el-button>
        </a>
      </el-col>
      <el-col :span="3"
              style="margin-top:1%">
        <a :href="'http://81.70.56.45:8083/voteState/downloadProcess/?token='+headers.token">
          <el-button type="primary"
                     @click="downloadProcess">导出投票记录</el-button>
        </a>
      </el-col>
      <el-col :span="19"
              class="table">
        <el-table :data="voteDataRecommend"
                  style="width: 100%"
                  border
                  highlight-current-row
                  :default-sort="{prop: 'menuItem.projectId', order: 'ascending'}">
          <el-table-column prop="menuItem.projectId"
                           label="ID"
                           width="100"
                           align="center">
          </el-table-column>
          <el-table-column prop="menuItem.description"
                           label="学校"
                           width="200"
                           align="center">
          </el-table-column>
          <el-table-column prop="menuItem.title"
                           label="项目名称"
                           width="600"
                           align="center">
          </el-table-column>
          <el-table-column prop="voteNum"
                           label="得票数"
                           align="center">
          </el-table-column>
        </el-table>
        <div style="margin: 2% 0  ;width: 100%;">
          <el-pagination background
                         layout="prev, pager, next"
                         :current-page="current"
                         @current-change="pageChange"
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
  data () {
    return {
      input: 10,
      current: 1,
      total: 0,
      tableDataRecommend: [],
      voteDataRecommend: [],
      headers: {
        token: ""
      }
    }
  },
  methods: {
    getData () {
      //  + this.current
      this.$axios
        .get("http://81.70.56.45:8083/menuItem/getbyName/创新创业展示项目?currentPage=" + this.current)
        .then((res) => {
          console.log(res);
          this.tableDataRecommend = res.data.data.records
          this.total = res.data.data.total
          this.$message.success('获取列表成功')
        })
        .then((res) => {
          this.getVoteNum()
        })
    },
    getVoteNum () {
      if (this.tableDataRecommend.length > 0) {
        this.tableDataRecommend.forEach(item => {
          console.log(item);
          this.$axios
            .get("http://81.70.56.45:8083/menuItem/getMenuDetail/" + item.id)
            .then((res) => {
              console.log(res);
              res.data.data.menuItem.description = res.data.data.menuItem.description.split('\t')[1]
              this.voteDataRecommend.push(res.data.data)
            });
        })
      }
    },
    pageChange (val) {
      this.current = val
      this.voteDataRecommend = [];
      this.$axios
        .get("http://81.70.56.45:8083/menuItem/getbyName/创新创业展示项目?currentPage=" + this.current)
        .then((res) => {
          console.log(res);
          this.tableDataRecommend = res.data.data.records
          this.total = res.data.data.total
        })
        .then((res) => {
          this.getVoteNum()
        })
    },
    getUserVoteNum () {
      this.$axios
        .get("http://81.70.56.45:8083/user/getVoteNum", {
          headers: {
            "token": this.headers.token
          }
        })
        .then((res) => {
          console.log(res);
          this.input = res.data.data
        })
    },
    updateUserVoteNum () {
      this.$axios
        .get("http://81.70.56.45:8083/user/updateVoteNum?voteNum=" + this.input, {
          headers: {
            "token": this.headers.token
          }
        })
        .then((res) => {
          console.log(res);
          this.$message.success('更新成功')
        })
    },
    downloadResult () {
      this.$axios
        .get("http://81.70.56.45:8083/voteState/downloadResult", {
          headers: {
            "token": this.headers.token
          }
        })
        .then((res) => {
          console.log(res);
          this.$message.success('导出成功')
        })
    },
    downloadProcess () {
      this.$axios
        .get("http://81.70.56.45:8083/voteState/downloadProcess", {
          headers: {
            "token": this.headers.token
          }
        })
        .then((res) => {
          console.log(res);
          this.$message.success('导出成功')
        })
    }
  },
  mounted () {
    this.getData()
    this.getUserVoteNum()
    this.headers.token = sessionStorage.getItem('token')
    console.log(this.headers.token);
  }
}
</script>

<style scoped>
.input {
  margin-top: 10px;
  display: flex;
}
.table {
  margin-top: 20px;
}
</style>