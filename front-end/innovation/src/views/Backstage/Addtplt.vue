<template>
  <el-main>
    <el-row>
      <h1>内容{{ buttonText }}</h1>
      <el-col :span="12">
        <el-form ref="form" :model="noticeEdit" label-width="80px">
          <el-form-item label="标题">
            <el-input v-model="noticeEdit.title"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              type="textarea"
              :autosize="{ minRows: 20, maxRows: 20 }"
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
        token:'cec2ffaf-5e51-4f4d-81ad-4177ca163c6b',
      buttonText: "修改",
      url: "http://81.70.56.45:8083/menuItem/addMenuDetail",
      fileList: [],
      noticeEdit: { itemId: "", title: "", content: ``,name:''},
    };
  },
  methods: {
      upError(res){
        this.$message.error(res);
      },
      upSuccess(res){
          this.noticeEdit.imgUrl=res.data.url;
          this.$message.success('上传成功')
      },

       submitUpload() {
        this.$refs.upload.submit();
      },
    back() {
      this.$router.push("/Navmenu");
    },
    onSubmit() {
      console.log(JSON.stringify(this.noticeEdit));
      this.$axios({
        method: "post",
        url: this.url,
        data: JSON.stringify(this.noticeEdit),
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Transfer-Encoding": "chunked",
          "token":this.token,
          Connection: "keep-alive",
        },
      })
        .then((response) => {
          this.$message.success("发送成功");
          console.log(response);
        //   this.back();
        })
        .catch((error) => {
          console.log(error);
          this.$message.error("网络错误，不能访问");
        });
    },
  },
  mounted() {
      this.noticeEdit.name=this.$route.query.name
      this.noticeEdit.itemId=this.$route.query.id
    this.$axios.get(`http://81.70.56.45:8083/menuItem/getbyName/${this.$route.query.name}`).then((res) => {
      this.noticeEdit.title = res.data.data.records[0].title;
      this.noticeEdit.content = res.data.data.records[0].content;
    });
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