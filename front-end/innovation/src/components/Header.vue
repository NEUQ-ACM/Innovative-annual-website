<template>
  <div>
    <div class="navMain">
      <!-- <div style="color: white;margin-left: 15%;text-align: center;height: 70%;line-height: 80px;font-size: 28px;font-weight: 500;margin-top: 1%;">第七届河北省大学生创新创业年会</div> -->
      <span>第七届河北省大学生创新创业年会</span>
    </div>
    <div style="display: flex; float: right; width: 100%" class="Mmain">
      <div style="margin-left: 50%">
        <el-menu
          router
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          text-color="#fff"
          active-text-color="#fff"
          @select="handleSelect"
        >
          <el-menu-item index="1" route="/Home">首页</el-menu-item>
          <el-menu-item index="2" route="/News">通知公告</el-menu-item>
          <el-menu-item index="3" route="/Arrangment">年会日程</el-menu-item>
          <el-submenu index="4">
            <template slot="title">作品展示</template>
            <el-menu-item index="4-1" route="/Show1">学术论文</el-menu-item>
            <el-menu-item index="4-2" route="/Show2"
              >创新创业展示项目</el-menu-item
            >
            <el-menu-item index="4-3" route="/Show3">创业推荐项目</el-menu-item>
          </el-submenu>
          <el-menu-item index="5" route="/userlogin">投票入口 </el-menu-item>
          <el-menu-item
            v-for="(items, index) in navDynamic"
            :key="index"
            @click="run(items.menuName)"
          >
            {{ items.menuName }}
          </el-menu-item>
        </el-menu>
      </div>
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
                  <span @click="mobileShow = !mobileShow">{{
                    items.spanValue
                  }}</span>
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
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Header_2",
  data() {
    return {
      activeIndex: this.$route.path,
      mobileShow: false,
      navData: [
        { routerLink: "/Home", spanValue: "首 页" },
        { routerLink: "/News", spanValue: "通知公告" },
        { routerLink: "/Arrangment", spanValue: "年会日程" },
        { routerLink: "/Show1", spanValue: "作品展示" },
        { routerLink: "/xxxx", spanValue: "投票入口" },
      ],
      navDynamic: [{}],
    };
  },
  methods: {
    run(name) {
      console.log(1);
      this.$router.push({
        path: "/Template",
        query: {name}
      });
    },
  },
  mounted() {
    axios({
      method: "GET",
      url: "http://81.70.56.45:8083/menu/getFirstMenu",
    }).then((res) => {
      this.navDynamic = res.data.data.menuList;
      console.log(this.navDynamic);
    });
  },
};
</script>

<style scoped>
@font-face {
  font-family: "kaiti";
  src: url(../assets/font/STKAITI.TTF);
}
.el-menu-demo {
  width: 100%;
}
div.Mmain {
  z-index: 1;
  position: absolute;
  top: 39px;
}
/deep/.el-submenu__title {
  height: 61px !important;
}
/deep/.el-menu-item {
  height: 61px !important;
}
.navMain {
  background: url("../assets/images/logo_bg.png") 800px center no-repeat;
  background-color: #004ea1;
  height: 100px;
  display: flex;
  align-items: center;
}
.navMain span {
  color: #fff;
  font-size: 38px;
  letter-spacing: 6px;
  padding-left: 40px;
  font-family: 黑体;
  transform: translateX(70px);
}
.showheaderimg {
  width: 50%;
  background-image: url("../assets/images/logo_bg.png");
  background-color: #004ea1;
  height: 80px;
}
.el-menu-demo {
  width: 100%;
  height: 60px;
}
.el-menu-item {
  height: 78px;
  background-color: transparent;
}
.el-menu-item.is-active {
  background-color: transparent !important;
}
.el-menu-item:hover {
  background-color: #004ea1 !important;
}
/deep/ .el-submenu__title:hover {
  background-color: #004ea1 !important;
}
.el-menu--horizontal .el-menu .el-menu-item,
.el-menu--horizontal .el-menu .el-submenu__title {
  background-color: #004ea1;
  float: none;
  height: 36px;
  line-height: 36px;
  color: #909399;
}
.el-menu.el-menu--horizontal {
  background-color: transparent;
}
.el-menu-demo[data-v-9fb1c1a0] {
  width: 100%;
  height: 80px;
  float: right;
  background-color: transparent;
}
.mobileNav {
  display: none;
  background-color: #004ea1;
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
  background-color: #004ea1;
}
.mobileNav .headerLogo span {
  display: block;
  line-height: 44px;
  height: 100%;
  font-family: "kaiti";
  font-size: 20px;
  color: #ddd;
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
  background-color: #fff;
}
.mobileNav .mobileList nav li,
.mobileNav .mobileList nav a {
  display: block;
  line-height: 50px;
  z-index: 501;
  width: 100%;
  height: 50px;
  color: black;
  text-decoration: none;
}
.mobileNav .mobileList nav li:hover {
  background-color: lightskyblue;
}
.mobileNav .headerLogo {
  flex: 9;
}
@media screen and (max-width: 958px) {
  .mobileNav {
    display: flex;
  }
  .navMain,
  .Mmain {
    display: none !important;
  }
}
</style>