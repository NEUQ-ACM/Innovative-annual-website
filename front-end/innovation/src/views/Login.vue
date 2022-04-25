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
      <div class="mobileLogin">
        <el-collapse-transition>
          <div class="studentMain" v-show="!teacherLogin">
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
        </el-collapse-transition>
        <el-collapse-transition>
          <div class="teacherMain" v-show="teacherLogin">
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
        </el-collapse-transition>
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
      teacherUser: "",
      teacherPassword: "",
      teacherLogin: false, //false代表学生操作界面true代码教师操作界面
    };
  },
  methods: {
    changeLogin() {
      if (this.teacherLogin) {
        if (this.$refs.inputMain)
          this.$refs.inputMain.style.transform = "translateX(0px)";
        this.teacherLogin = !this.teacherLogin;
      } else {
        if (this.$refs.inputMain)
          this.$refs.inputMain.style.transform = "translateX(-600px)";
        this.teacherLogin = !this.teacherLogin;
      }
    },
  },
};
</script>

<style scoped>
.loginMain {
  height: 300px;
  width: 600px;
  margin: 150px auto 20px auto;
  overflow: hidden;
  background: #f6f6f6;
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgb(0 0 0 / 10%);
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
  cursor: pointer;
  margin: 20px;
  width: 100px;
  height: 35px;
  border-radius: 15px;
  line-height: 20px;
  font-size: 14px;
  border: none;
}
.interfaceBtn button:nth-child(1) {
  border: 1px solid #96c2f1;
  background-color: #eff7ff;
  color: black;
}
.interfaceBtn button:nth-child(2) {
  border: 1px solid #9bdf70;
  background-color: #f0fbeb;
  color: black;
}
.interfaceBtn button:nth-child(3) {
  border: 1px solid #bbe1f1;
  background-color: #eefaff;
  color: rgb(37, 32, 32);
}
.mobileLogin {
  display: none;
  position: relative;
  height: 500px;
  width: 80%;
  margin: 0 auto;
  background: #f6f6f6;
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgb(0 0 0 / 10%);
}
.mobileLogin .studentMain {
  padding-top: 50px;
}
.mobileLogin .studentMain .el-input {
  width: 100%;
}
.mobileLogin .interfaceBtn {
  margin-top: 25px;
}
.mobileLogin .interfaceBtn button {
  width: 50%;
  margin-top: 0px;
}
.mobileLogin .teacherMain {
  position: absolute;
  top: 0px;
}
.mobileLogin .teacherMain {
  padding-top: 50px;
}
.mobileLogin .teacherMain .el-input {
  width: 100%;
}
@media screen and (max-width: 610px) {
  .mobileLogin {
    display: block;
  }
  .loginMain {
    display: none;
  }
}
</style>