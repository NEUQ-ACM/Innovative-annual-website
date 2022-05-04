<template>
  <footer>
    <footer class="footerMain">
      <div class="container">
        <div class="information">
          <span class="serve">
            <span>服务电话：</span>
            <span>025-83215097 400-050-8066</span>
          </span>
          <span>
            <span>备案号：</span>
            <span>BJTUICP备 14070101</span>
          </span>
        </div>
      </div>
    </footer>
    <footer class="footerMobile">
      <div class="info">
        <span>服务电话：</span>
        <span>025-83215097 400-050-8066</span>
        <span>备案号：</span>
        <span>BJTUICP备 14070101</span>
      </div>
    </footer>
  </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footerMain {
  width: 100%;
  height: 70px;
  background-color: #004EA1;
}
.container {
  color: #fff;
  display: flex;
  height: 100%;
  align-items: center;
}
.container .information {
  margin-left: 15%;
  margin-right: 25%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
}
.container .information .serve {
  margin-right: 15px;
}
.container .information span {
  line-height: 70px;
}
.number {
  font-size: 24px;
  font-weight: bold;
}
.footerMobile {
  display: none;
  width: 100%;
  height: 100px;
  background-color: #1e16bf;
}
.footerMobile .info {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  color: #fff;
  font-size: 20x;
}
@media screen and (max-width:900px) {
  footer .footerMain{
    display: none;
  }
  footer .footerMobile{
    display: block;
  }
}
</style>