<template>
  <div style="margin-top:3%">
    <div>
      <span style="font-size:22px">基于UWB定位的手机端车库管理系统</span>
    </div>
    <el-col :span="12"
            :offset="6">
      <el-divider></el-divider>
    </el-col>
    <img src="../assets/images/基于UWB定位的手机端车库管理系统.jpg"
         alt=""
         width="50%">
  </div>

  <!-- <div style="margin-top: 1%;">
    <el-row>
      <el-col :span="14"
              :offset="5">
        <!-- 面包屑导航区域 -->
  <!-- <el-breadcrumb separator="/" class="breadcrumb">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>作品展示</el-breadcrumb-item>
        </el-breadcrumb> -->
  <!-- <el-divider></el-divider> -->
  <!-- </el-col>
    </el-row> -->
  <!-- 作品标题
    <el-row>
      <el-col :span="14"
              :offset="5">
        <div class="titleBox">
          <span class="itemTitle">{{ newdataform.project.projectName }}</span>
        </div>
      </el-col>
    </el-row>
    <el-col :span="14"
            :offset="5">
      <el-divider></el-divider>
    </el-col> -->
  <!-- 校徽 -->
  <!-- <el-row>
      <el-col :span="14"
              :offset="5">
        <el-avatar shape="square"
                   :size="150"
                   :src="newdataform.project.badgeUrl"
                   fit></el-avatar>
      </el-col>
    </el-row> -->
  <!-- 作品详情 -->
  <!-- 基本信息 -->
  <!-- <el-row>
      <el-col :span="14"
              :offset="5">
        <el-descriptions direction="vertical"
                         :column="4"
                         border>
          <el-descriptions-item label="论文题目">{{newdataform.project.projectName}}</el-descriptions-item>
          <el-descriptions-item label="项目类型">{{newdataform.project.projectType}}</el-descriptions-item>
          <el-descriptions-item label="学科类别"
                                :span="2">{{newdataform.project.category}}</el-descriptions-item>
          <el-descriptions-item label="项目编号">
            <el-tag size="small">{{newdataform.project.projectId}}</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="学校">{{newdataform.project.school}}</el-descriptions-item>
        </el-descriptions>
      </el-col>
    </el-row> -->
  <!-- 参赛人员 -->
  <!-- <el-row>
      <el-col :span="14" :offset="5">
        <div class="tableTitleBox">
          <span class="itemTitle">项目成员</span>
        </div>
        <el-table :data="newdataform.studentList" border fit>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="grade" label="年级" width="180">
          </el-table-column>
          <el-table-column prop="specialty" label="专业" width="345">
          </el-table-column>
          <el-table-column prop="isPresenter" label="是否主持人" width="180">
          </el-table-column>
        </el-table>
      </el-col>
    </el-row> -->
  <!-- 指导老师 -->
  <!-- <el-row>
      <el-col :span="14" :offset="5">
        <div class="tableTitleBox">
          <span class="itemTitle">指导老师</span>
        </div>
        <el-table :data="newdataform.teacherList" border fit>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="job" label="职称" width="180">
          </el-table-column>
          <el-table-column prop="direction" label="研究方向" width="345">
          </el-table-column>
        </el-table>
      </el-col>
    </el-row> -->
  <!-- 论文正文 -->
  <!-- <el-row>
      <el-col :span="14" :offset="5">
       <el-card shadow="never">
         {{newdataform.project.description}}
       </el-card>
      </el-col>
    </el-row>
  </div> -->
</template>

<script>
export default {
  name: "",
  data () {
    return {
      newdataform: {
        project: {
          projectId: "",
          projectName: "",
          description: "",
          projectType: "",
          category: "",
          type: 1,
          viewCounts: 0,
          previewImageUrl: "",
          badgeUrl: "",
          years: "",
          school: "",
          isDel: 0
        },
        studentList: [
        ],
        teacherList: [
        ],
      },
      project: {
        id: "",
        projectId: "",
        project_name: "test1",
        description: "test1",
        project_type: "",
        category: "",
        type: "",
        view_counts: "",
        previewImageUrl: "",
        badgeUrl: " ",
        years: "",
        school: "",
        studentList: [
          {
            id: "321",
            name: "张三",
            grade: "22",
            specialty: "1",
            isPresenter: "123",
          },
          {
            id: "431",
            name: "李四",
            grade: "66",
            specialty: "34",
            isPresenter: "424",
          },
        ],
        teacherList: [
          {
            id: "234",
            name: "王五",
            grade: "22",
            project_type: "",
          },
          {
            id: "523",
            name: "赵大",
            grade: "67",
            specialty: "31",
          },
        ],
      },
    };
  },
  methods: {
    // 请求作品信息
    async getProject () {
      let id = this.$route.query.id
      console.log(id)
      const { data: res } = await this.$axios.get(`/project/getbyId/` + id)
      if (res.status === 200) {
        console.log(res)
        this.newdataform = res.data
        return this.$message.success('请求成功')
      }
      else return this.$message.error('请求作品详情失败')
      console.log(res)
    }
  },
  mounted () {
    this.getProject()
  },
};
</script>

<style scoped>
.el-breadcrumb {
  margin-top: 10px;
}
.itemTitle {
  font-size: 20px;
}
.titleBox {
  /* background-color: aqua; */
  text-align: center;
  margin-top: 10px;
}
.tableTitleBox {
  /* background-color: aqua; */
  text-align: left;
  margin-top: 20px;
}

.el-table {
  margin-top: 10px;
}

.el-card {
  margin-top: 20px;
}
</style>
