<template>
  <el-carousel :interval="5000" arrow="hover" height="442px">
    <el-carousel-item>
      <img src="@/assets/images/mainImage.jpg" alt="" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "Slider",
};
</script>

<style scoped>
.el-carousel img {
  width: 100%;
}
</style>