<template>
  <el-container>
    <el-main>
      <div class="loginMain">
        <div class="inputMain" ref="inputMain">
          <div class="studentMain">
            <h3>学生登录</h3>
            <hr />
            <el-input
              v-model="studyUser"
              placeholder="请输入学生账号"
            ></el-input>
            <el-input
              placeholder="请输入密码"
              v-model="studyPassword"
              show-password
            ></el-input>
            <div class="interfaceBtn">
          <button @click="changeLogin()">教师登录</button>
          <button>学生注册</button>
          <button>学生登录</button>
        </div>
          </div>
          <div class="teacherMain">
            <h3>教师登录</h3>
            <hr />
            <el-input
              v-model="teacherUser"
              placeholder="请输入教师账号"
            ></el-input>
            <el-input
              placeholder="请输入密码"
              v-model="teacherPassword"
              show-password
            ></el-input>
            <div class="interfaceBtn">
          <button @click="changeLogin()">学生登录</button>
          <button>教师注册</button>
          <button>教师登录</button>
        </div>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      studyUser: "",
      studyPassword: "",
      teacherUser:"",
      teacherPassword:"",
      teacherLogin: false, //false代表学生操作界面true代码教师操作界面
    };
  },
  methods: {
    changeLogin() {
      if (this.teacherLogin) {
        this.$refs.inputMain.style.transform = "translateX(0px)";
        this.teacherLogin = !this.teacherLogin;
      } else {
        this.$refs.inputMain.style.transform = "translateX(-600px)";
        this.teacherLogin = !this.teacherLogin;
      }
    },
  },
};
</script>

<style scoped>
.loginMain {
  height: 600px;
  width: 600px;
  margin: 150px auto 20px auto;
  overflow: hidden;
}
.inputMain {
  position: relative;
  width: 600px;
  height: 200px;
  transition: 0.5s;
}
.loginMain .studentMain {
  height: 200px;
  width: 600px;
  display: inline-block;
}
.loginMain .teacherMain {
  position: absolute;
  top: 0px;
  left: 600px;
  display: inline-block;
  height: 200px;
  width: 600px;
}
.el-input {
  margin: 10px 0;
  width: 400px;
  height: 40px;
}
.interfaceBtn button {
  margin: 20px;
  width: 100px;
  height: 35px;
  border-radius: 15px;
  line-height: 20px;
  font-size: 14px;
  border: none;
}
.interfaceBtn button:nth-child(1) {
  background-color: lightseagreen;
  color: antiquewhite;
}
.interfaceBtn button:nth-child(2) {
  background-color: blueviolet;
  color: antiquewhite;
}
.interfaceBtn button:nth-child(3) {
  background-color: green;
  color: rgb(37, 32, 32);
}
</style>