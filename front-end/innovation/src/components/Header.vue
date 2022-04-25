<template>
  <header>
     <div class="navMain">
      <div class="headerLogo">
          <img src="@/assets/images/headerLogo.jpg" >
          <span>第七届河北省大学生创新创业年会</span>
      </div>
      <nav>
        <ul>
          <li>
            <router-link to='/Home' active-class="isActive">
              <span>首 页</span>
            </router-link>
          </li>
          <li>
            <router-link to="/News" active-class="isActive">
              <span>通知公告</span>
            </router-link>
          </li>
          <li>
            <router-link to="/Gallery" active-class="isActive">
              <span>作品展示</span>
            </router-link>
          </li>
          <li>
            <router-link to="/Organizer" active-class="isActive">
              <span>主办单位</span>
            </router-link>
          </li>
          <li>
           <router-link to="/guochang" active-class="isActive">
              <span>国创平台</span>
            </router-link>
          </li>
          <li>
            <router-link to="/Login" active-class="isActive">
              <span>登 录</span>
            </router-link>
          </li>
        </ul>
      </nav>
      </div> 
    <nav class="mobileNav">
      <el-button @click="mobileShow = !mobileShow">=</el-button>
      <el-collapse-transition>
        <div v-show="mobileShow" class="mobileList">
          <nav>
            <ul>
              <li @click="mobileShow = !mobileShow">
                <router-link to="/Home" active-class="isActive">
                  <span>首 页</span>
                </router-link>
              </li>
              <li @click="mobileShow = !mobileShow">
                <router-link to="/News" active-class="isActive">
                  <span>通知公告</span>
                </router-link>
              </li>
              <li @click="mobileShow = !mobileShow">
                <router-link to="/Gallery" active-class="isActive">
                  <span>作品展示</span>
                </router-link>
              </li>
              <li @click="mobileShow = !mobileShow">
                <router-link to="/Organizer" active-class="isActive">
                  <span>主办单位</span>
                </router-link>
              </li>
              <li @click="mobileShow = !mobileShow">
                <router-link to="/guochang" active-class="isActive">
                  <span>国创平台</span>
                </router-link>
              </li>
              <li @click="mobileShow = !mobileShow">
                <router-link to="/Login" active-class="isActive">
                  <span>登 录</span>
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </el-collapse-transition>
      <div class="headerLogo">
        <img src="@/assets/images/headerLogo.jpg" />
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
    };
  },
};
</script>
<style scoped>
header {
  position: fixed;
  height: 70px;
  width: 100%;
  z-index: 500;
  box-shadow: #d4d3d3 0px 0px 5px;
  background-color: #fff;
}
.navMain {
  width: 80%;
  height: 50px;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  flex-direction: row;
  margin: 0 auto;
}
.headerLogo {
  margin-top:20px;
  margin-right: 80px;
  width: 400px;
}
.headerLogo img {
  margin-right: 8px;
  width: 60px;
  vertical-align: middle;
}
.headerLogo span {
  display: inline-block;
  width: 270px;
  height: 20px;
  white-space: normal;
  word-wrap: break-word;
  vertical-align: middle;
  font-size: 18px;
  color: #0f41ba;
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
  color: #666666;
}
.navMain nav ul li span{
  line-height: 92.5px;
}
nav ul li a {
  color: #666666;
}
nav ul li:hover {
  color: #fff;
  background-color: #352ddb;
}
nav ul li:hover a {
  color: #fff;
}
.mobileNav {
  display: flex;
  flex-direction: row;
}
.el-header .mobileNav{
display: none;
}
.mobileNav .el-button {
  margin-top:10px;
  margin-left: 3px;
  font-size: 50px;
  border: none;
  padding: 0;
  flex: 1;
}
.mobileNav .headerLogo{
  margin: 8px auto;
}
.mobileNav .mobileList {
  position: absolute;
  background-color: aliceblue;
  top: 55px;
  width: 100%;
  height: 1000px;
  z-index: 500;
}
.mobileNav .mobileList nav {
  height: 100%;
  width: 100%;
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
  background-color: #352ddb;
  color: #fff;
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