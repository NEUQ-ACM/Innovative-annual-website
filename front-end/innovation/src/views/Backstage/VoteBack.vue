<template>
  <div class="maincontainer">
    <el-row :gutter="20"
            class="el-row">
      <el-col :span="4">
        <Sidebar></Sidebar>
      </el-col>
      <el-col :span="19"
              class="table">
        <el-table :data="voteDataRecommend"
                  style="width: 100%"
                  border
                  highlight-current-row>
          <el-table-column prop="menuItem.id"
                           label="ID"
                           width="100"
                           align="center">
          </el-table-column>
          <el-table-column prop="menuItem.title"
                           label="项目名称"
                           width="720"
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
      current: 1,
      total: 0,
      tableDataRecommend: [],
      voteDataRecommend: [],
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
          console.log(item.id);
          this.$axios
            .get("http://81.70.56.45:8083/menuItem/getMenuDetail/" + item.id)
            .then((res) => {
              console.log(res);
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
  },
  mounted () {
    this.getData()
  }
}
</script>

<style scoped>
.table {
  margin-top: 20px;
}
</style>