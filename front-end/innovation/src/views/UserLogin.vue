<template>
  <div>
    <div class="login_container">
    <!-- 登录盒子 -->
    <div class="login_box">
      <h2>用户登录</h2>
      <!-- 登录表单 -->
      <el-form
        :model="loginForm"
        :rules="rules"
        ref="loginFormRef"
        class="login_form"
      >
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="el-icon-user"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="el-icon-lock"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: 'admin',
      },
      // 表单校验规则
      rules: {
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    // 登录
    async login() {
      console.log('函数调用')
      const {data: res} = await this.$axios.post('http://81.70.56.45:8083/user/login?satoken=2210ee6c-f98d-43f2-92ee-a286f82c7c6f', this.loginForm)
      if(res.status !== 200) {
        return this.$message.error(res.msg)
      }
      else {
        console.log(res)
        window.sessionStorage.setItem('token', res.data)
        this.$router.push('/vote')
      }
    },
    // 重置登录表单
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields()
    },
  },
  mounted() {},
};
</script>

<style scoped>
.login_container {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #e7e7e7;
  border-radius: 20px;
  position: absolute;
  top: 25%;
  left: 35%;
}

.login_form {
  position: absolute;
  bottom: 10%;
  padding: 0 70px;
  width: 100%;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: right;
}

.el-button--text {
  color: #0a0b0a63;
}
</style>
