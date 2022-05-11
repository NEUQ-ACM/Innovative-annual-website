<template>
  <el-main>
      <div><i class="el-icon-discount"></i>目前剩余票数：{{remainingVotes}} <el-button type="primary" @click="$router.push('Vote')">前往投票</el-button></div>
    <el-table :data="tableData" style="width: 70%">
      <el-table-column prop="id" label="项目 ID" width="180"> </el-table-column>
      <el-table-column prop="name" label="项目名称" >
      </el-table-column>
      <el-table-column prop="voteSum" label="目前票数" width="180"> </el-table-column>
    </el-table>
  </el-main>
</template>

  <script>
export default {
  data() {
    return {
      remainingVotes: 9,
      tableData: [{ id: 1, name: "10086服务中心", voteSum: 10086 }],
    };
  },
};
</script>

  <<style scoped>
  .el-table{
      left: 50%;
      transform: translateX(-50%);
  }
  </style>