<template>
  <el-main>
    <el-row>
      <h1>通知{{ buttonText }}</h1>
      <el-col :span="12">
        <el-form ref="form" :model="noticeEdit" label-width="80px">
            添加公告封面
          <el-upload
            class="upload-demo"
            ref="upload"
            action="http://81.70.56.45:8082/notice/upload"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-success="upSuccess"
            :on-error="upError"
            :file-list="fileList"
            :auto-upload="false"
          >
            <el-button slot="trigger" size="small" type="primary"
              >选取文件</el-button
            >
            <el-button
              style="margin-left: 10px"
              size="small"
              type="success"
              @click="submitUpload"
              >上传到服务器</el-button
            >
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
          <el-form-item label="标题">
            <el-input v-model="noticeEdit.title"></el-input>
          </el-form-item>
          <el-form-item label="描述">
            <el-input v-model="noticeEdit.description"></el-input>
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
      buttonText: "修改",
      url: "",
      fileList: [],
      noticeEdit: { id: "", title: "", content: "", description: "" },
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
      this.$router.push("/Notice");
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
          Connection: "keep-alive",
        },
      })
        .then((response) => {
          this.$message.success("发送成功");
          this.back();
        })
        .catch((error) => {
          console.log(error);
          this.$message.error("网络错误，不能访问");
        });
    },
  },
  mounted() {
    this.$axios.get(`/notice/${this.$route.query.id}`).then((res) => {
      this.noticeEdit.title = res.data.data.notice.title;
      this.noticeEdit.content = res.data.data.notice.content;
      this.noticeEdit.description = res.data.data.notice.description;
    });
    if (!JSON.parse(this.$route.query.type)) {
      this.url = "/notice/updateNotice";
      this.noticeEdit.id = this.$route.query.id;
    } else if (JSON.parse(this.$route.query.type)) {
      this.url = "/notice/addNotice";
      delete this.noticeEdit.id;
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