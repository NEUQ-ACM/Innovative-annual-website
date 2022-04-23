<template>
  <div class="orgnizermain">
    <Header></Header>
    <div class="orgnizercontent">
      <h2>主办单位</h2>
      <img src="../assets/images/mainImage.png" alt="主办单位" />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue"

export default {
  name: "Organizer",
  components: { 
    myHeader,
    Footer
  },
};
</script>

<style scoped>
.orgnizermain .orgnizercontent {
  margin: 0 auto;
  max-width: 1105px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
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