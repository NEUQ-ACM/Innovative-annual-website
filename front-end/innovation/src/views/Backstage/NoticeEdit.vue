<template>
  <el-main>
    <el-row>
      <h1>通知{{ buttonText }}</h1>
      <el-col :span="12">
        <el-form ref="form" :model="noticeEdit" label-width="80px">
          <el-form-item label="标题">
            <el-input v-model="noticeEdit.title"></el-input>
          </el-form-item>
          <el-form-item
            label="描述"
          >
            <el-input v-model="noticeEdit.description"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              type="textarea"
              :autosize="{ minRows: 30, maxRows: 30 }"
              v-model="noticeEdit.content"
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit"
              >立即{{ buttonText }}</el-button
            >
            <el-button @click="back()">取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <h3>{{ noticeEdit.title }}</h3>
          <div class="content">
            <span style="color: gray">{{ noticeEdit.description }}</span>
            <p>{{ noticeEdit.content }}</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
export default {
  data() {
    return {
      buttonText: "修改",
      url: "",
      noticeEdit: {},
    };
  },
  methods: {
    back() {
      this.$router.push("/Notice");
    },
    onSubmit() {
      this.$axios({
          method:'post',
          url:this.url,
          data:JSON.stringify(this.noticeEdit),
          headers:{'Content-Type': 'application/json;charset=UTF-8'}
      })
        .then((response) => {
          alert('发送成功')
          this.back()
        })
        .catch((error) => {
          console.log(error);
          alert("网络错误，不能访问");
        });
    },
  },
  mounted() {
      this.$axios.get(`/notice/${this.$route.query.id}`)
      .then(res=>{
          this.noticeEdit=res.data.data.notice;
      })
    if (!JSON.parse(this.$route.query.type)) {
      this.url = "/notice/updateNotice";
      this.noticeEdit.id=this.$route.query.id;
    } else if (JSON.parse(this.$route.query.type)) {
      this.url = "/notice/addNotice";
      this.buttonText = "创建";
    }
  },
};
</script>

<style scoped>
.el-form {
  width: 500px;
}
.el-form .el-input {
  width: 500px;
}
.el-textarea {
  width: 500px;
}
.el-card {
  height: 750px;
  width: 80%;
  overflow: auto;
}
.el-card .el-card__body {
  display: flex;
  align-items: flex-start;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.content span {
  border-bottom: 1px black dashed;
  width: 100%;
}
</style>>

</style>