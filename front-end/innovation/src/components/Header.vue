<template>
  <header>
    <div class="navMain">
      <div class="headerLogo">
        <span>第七届河北省大学生创新创业年会</span>
      </div>
      <nav>
        <ul>
          <li v-for="(items, index) in navData" :key="index">
            <router-link :to="items.routerLink" active-class="isActive">
              <span>{{ items.spanValue }}</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <!-- 移动端header下拉菜单 -->
    <nav class="mobileNav">
      <el-button @click="mobileShow = !mobileShow">=</el-button>
      <el-collapse-transition>
        <div v-show="mobileShow" class="mobileList">
          <nav>
            <ul>
              <li v-for="(items, index) in navData" :key="index">
            <router-link :to="items.routerLink" active-class="isActive">
              <span @click="mobileShow = !mobileShow">{{ items.spanValue }}</span>
            </router-link>
          </li>
            </ul>
          </nav>
        </div>
      </el-collapse-transition>
      <div class="headerLogo">
        <span>第七届河北省大学生创新创业年会</span>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      mobileShow: false,
      navData: [
        { routerLink: "/Home", spanValue: "首 页" },
       { routerLink: "/News", spanValue: "通知公告" },
        { routerLink: "/Arrangment", spanValue: "年会日程" },
        { routerLink: "/Gallery", spanValue: "作品展示" },
        ],
    };
  },
};
</script>
<style scoped>
header {
  background-image: url("../assets/images/logo_bg.png");
  position: fixed;
  height: 80px;
  width: 100%;
  z-index: 500;
  background-color: #004ea1;
}
.navMain {
  transform: translateY(6px);
  width: 20%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin: 0 auto;
}
.headerLogo {
  flex: 1;
  margin-top: 20px;
	margin-left: -200px;
	margin-right: 300px;
  width: 300px;
}
nav {
  flex: 1;
}
.headerLogo img {
  margin-right: 8px;
  width: 60px;
  vertical-align: middle;
}
.headerLogo span {
  display: inline-block;
  width: 300px;
  height: 30px;
  white-space: normal;
  word-wrap: break-word;
  vertical-align: middle;
  font-size: 20px;
  color: #ffffff;
}
a {
  text-decoration: none;
}
.navMain nav ul {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
}
.navMain nav ul li {
  width: 92.5px;
  height: 80px;
  line-height: 80px;
  /* margin: 0 25px; */
  list-style: none;
}
.navMain nav ul li span {
  display: inline-block;
  line-height: 80px;
  height: 100%;
  width: 100%;
}
nav ul li a {
  color: #fffff9;
}
nav ul li:hover {
  color: #fffff9;
  background-color: #063c77;
}
nav ul li:hover a {
  color: #fffff9;
}
.mobileNav {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.el-header .mobileNav {
  display: none;
}
.mobileNav .el-button {
  margin-top: 10px;
  margin-left: 3px;
  font-size: 50px;
  border: none;
  padding: 0;
  flex: 1;
  background-color: #004ea1;
}
.mobileNav .headerLogo {
  margin: 8px auto;
}
.mobileNav .mobileList {
  position: absolute;
  background-color: #004ea1;
  top: 55px;
  width: 100%;
  height: 1000px;
  z-index: 500;
}
.mobileNav .mobileList nav {
  height: 100%;
  width: 100%;
}
.mobileNav .headerLogo img {
  width: 40px;
}
.mobileNav .mobileList nav ul {
  padding: 0;
  height: 100%;
  width: 100%;
  z-index: 501;
}
.mobileNav .mobileList nav li,
.mobileNav .mobileList nav a {
  display: block;
  line-height: 50px;
  z-index: 501;
  width: 100%;
  height: 50px;
}
.mobileNav .headerLogo {
  flex: 9;
}
.isActive {
  display: block;
  width: 92.5px;
  height: 80px;
  line-height: 80px;
  background-color: #063c77;
  color: #fffff9;
}
@media screen and (max-width: 1105px) {
  .el-header .mobileNav {
    display: flex;
  }
  .el-header .navMain {
    display: none;
  }
}
</style>