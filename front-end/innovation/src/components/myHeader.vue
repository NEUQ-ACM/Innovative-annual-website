<template>
  <header>
    <div class="container">
      <div class="headerLogo">
        <a href="">
          <img src="@/assets/images/headerLogo.jpg">
          <span>第十五届河北省大学生创新创业年会</span>
        </a>
      </div>
      <nav>
        <ul>
          <li class="firstLi">
            <a href="">
              <span>首 页</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>通知公告</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>作品展示</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>主办单位</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>国创平台</span>
            </a>
          </li>
          <li>
            <span>
              <span>登 录</span>
            </span>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  name: 'myHeader',
}
</script>
<style scoped>
header {
  height: 80px;
}
.container {
  width: 70%;
  height: 100%;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  margin: 0 auto;
}
.headerLogo {
  margin-right: 30px;
}
.headerLogo img {
  margin-right: 10px;
  vertical-align: middle;
}
.headerLogo span {
  vertical-align: middle;
  font-size: 24px;
  color: #0f41ba;
}
a {
  text-decoration: none;
}
nav ul {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
nav ul li {
  width: 92.5px;
  height: 80px;
  line-height: 80px;
  /* margin: 0 25px; */
  list-style: none;
  color: #666666;
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
.firstLi {
  background-color: #352ddb;
}
.firstLi a {
  color: #fff;
}
</style>