<template>
  <div class="orgnizermain">
    <myHeader></myHeader>
    <div class="orgnizercontent">
      <h2>主办单位</h2>
      <img src="../assets/images/mainImage.png" alt="主办单位" />
    </div>
  </div>
</template>

<script>
import myHeader from "./myHeader.vue";

export default {
  name: "Organizer",
  components: { myHeader },
};
</script>

<style scoped>
.orgnizermain .orgnizercontent {
  margin: 0 auto;
  max-width: 1105px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.orgnizermain h2 {
  text-align: center;
  color: #0a1121;
  font-weight: normal;
}
.orgnizermain img {
  width: 1105px;
  vertical-align: middle;
  border-style: none;
}
</style>