<template>
  <div>
    <el-row>
      <el-col :span="14" :offset="5">
        <!-- 面包屑导航区域 -->
        <el-breadcrumb separator="/" class="breadcrumb">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/gallery' }"
            >作品展示</el-breadcrumb-item
          >
          <el-breadcrumb-item>{{
            crumb[this.$route.query.itemType]
          }}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider></el-divider>
      </el-col>
      <!-- 条件筛选表单区 -->
      <el-col :span="14" :offset="5">
        <el-table :data="projectList" stripe fit>
          <el-table-column prop="project_name" label="作品名" width="180">
          </el-table-column>
          <el-table-column prop="description" label="介绍" width="600">
          </el-table-column>
          <el-table-column label="操作">
          <template slot-scope="scope" width="180px">
            <!-- 查看详情 -->
            <el-tooltip effect="dark" content="点击查看详情" placement="top">
              <el-button type="primary" icon="el-icon-tickets" size="mini" @click="showDetail(scope.row.id)"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      // 面包屑导航显示内容
      crumb: {
        Academic: "学术论文",
        Achievements: "改革项目成果",
        Business: "创业推介项目",
      },
      // 获取到的作品列表
      projectList: [
        {
          id: 111,
          project_name: "test1",
          description: "test1",
        },
        {
          id: 222,
          project_name: "test2",
          description: "test2",
        },
      ],
    };
  },
  methods: {
    // 请求作品大类列表
    async getProjectList() {
      const index = {
       'Business': 1,
       'Academic': 2,
       'Achievements': 3,
      }
      const typeNum = index[this.$route.query.itemType]
      const { data:res } = await this.$axios.get(`/project/getbyType/${typeNum}`)
      if(res.status === 200) {
        console.log(res.data)
        return this.projectList = res.data.records
      }
      else {
        return this.$message.error('请求作品列表失败')
      }
    },
    // 放弃查询，返回主页
    backToHome() {
      this.$router.push("/");
    },
    // 查询具体作品内容
    showDetail(id) {
      console.log('作品id为'+id)
      this.$router.push({ path: `/itemdetail`, query: { itemid: id } });
    }
  },
  mounted() {
    // 获取查询作品的分类
    console.log('作品分类为',this.$route.query.itemType)
    this.getProjectList()
  },
};
</script>

<style scoped>
.bg-purple-dark {
  background: #99a9bf;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.el-breadcrumb {
  margin-bottom: 25px;
  margin-top: 15px;
}
.formBox {
  background-color: #f0f0f0;
}

.el-form {
  padding: 20px;
}
</style>
