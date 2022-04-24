<template>
  <footer>
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
      <div class="visitor">您是第 <i class="number">23,552,691</i> 个访问者</div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
footer {
  width: 100%;
  height: 70px;
  background-color: #1e16bf;
}
.container {
  color: #fff;
  display: flex;
  align-items: center;
}
.container .information {
  margin-left: 15%;
  margin-right: 25%;
  display: flex;
  justify-content: space-between;
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
</style>