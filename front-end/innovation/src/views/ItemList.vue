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
      <el-col :span="16" :offset="4">
        <div class="formBox">
          <el-form
            ref="form"
            :model="searchForm"
            label-width="80px"
            :inline="true"
            label-position="left"
          >
            <el-form-item label="项目编号">
              <el-input v-model="searchForm.a"></el-input>
            </el-form-item>
            <el-form-item label="项目名称">
              <el-input v-model="searchForm.b"></el-input>
            </el-form-item>
            <el-form-item label="项目类型">
              <el-select v-model="searchForm.c" placeholder="请选择">
                <el-option label="创新训练项目" value="1"></el-option>
                <el-option label="创业训练项目" value="2"></el-option>
                <el-option label="创业实践项目" value="3"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="学校名称">
              <el-input v-model="searchForm.d"></el-input>
            </el-form-item>
            <el-form-item label="学科门类">
              <el-select v-model="searchForm.e" placeholder="请选择学科门类">
                <el-option label="哲学" value="1"></el-option>
                <el-option label="经济学" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="专业大类">
              <el-select v-model="searchForm.f" placeholder="请选择专业大类">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="指导教师">
              <el-input v-model="searchForm.g"></el-input>
            </el-form-item>
            <el-form-item label="项目成员">
              <el-input v-model="searchForm.h"></el-input>
            </el-form-item>
            <el-form-item label="年份">
              <el-select v-model="searchForm.i" placeholder="请选择活动区域">
                <el-option label="2022年" value="2022"></el-option>
                <el-option label="2021年" value="2021"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="search">查询</el-button>
              <el-button @click="backToHome">返回</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      // 筛选表单项
      searchForm: {
        a: "",
        b: "",
        c: "",
        d: "",
        e: "",
        f: "",
        g: "",
        h: "",
        i: "", //等后端确认接收参数后改名
      },
      // 面包屑导航显示内容
      crumb: {
        Academic: "学术论文",
        Achievements: "改革项目成果",
        Business: "创业推介项目",
      },
    };
  },
  methods: {
    // 放弃查询，返回主页
    backToHome() {
      this.$router.push('/')
    }
  },
  mounted() {},
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
