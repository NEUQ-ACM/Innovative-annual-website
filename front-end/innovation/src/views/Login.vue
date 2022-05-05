<template>
  <div class="login">
    <el-row type="flex"
            justify="center">
      <!-- justify 对齐方式 -->

      <el-card shadow="always">
        <h1 style="text-align: center;">欢迎登录后台</h1>
        <el-divider></el-divider>
        <!-- form表单 -->
        <el-form :model="nameValidateForm"
                 ref="nameValidateForm"
                 :rules="rules"
                 label-width="100px"
                 class="demo-ruleForm">
          <!-- 用户名 -->
          <el-form-item label="用户名"
                        prop="name">
            <el-input placeholder="请输入用户名"
                      type="text"
                      v-model="nameValidateForm.name"
                      autocomplete="off"></el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item label="密码"
                        prop="password">
            <el-input placeholder="请输入密码"
                      v-model="nameValidateForm.password"
                      show-password></el-input>
          </el-form-item>
          <!-- 按钮 -->
          <el-form-item>
            <el-button type="primary"
                       @click="submitForm('nameValidateForm')">登录</el-button>
            <el-button @click="resetForm('nameValidateForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-card>

    </el-row>
  </div>

</template>

<script>
export default {
  data () {
    return {
      nameValidateForm:
      {
        name: '',
        password: '',
        ipp: 'http://192.168.101.55/',
      },
      radio: false,
      rules: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
        ],
        ipp: [
          { required: true, message: '后端IP地址不能为空', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('Name:' + this.nameValidateForm.name + ';Password:' + this.nameValidateForm.password);
          // alert(this.nameValidateForm.ipp + this.nameValidateForm.name);
          this.$router.push('/IndexManage');
        } else {
          console.log('error submit!!');
          return false;
        }
      }
      );
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style>
.login {
  margin-top: 80px;
}
.el-radio-group {
  display: flex;
  margin: 20px;
  /* 边缘 */
  justify-content: center;
}
.el-card {
  border-radius: 90px;
  width: 400px;
}
.el-row {
  margin-bottom: 20px;
}
.el-form-item {
  width: 300px;
}
</style>