<template>
  <div class="orgnizermain">
    <myHeader></myHeader>
    <div class="orgnizercontent">
      <h2>主办单位</h2>
      <img src="../assets/images/mainImage.png"
           alt="主办单位" />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import myHeader from "@/components/Header.vue";
import Footer from "@/components/Footer.vue"

export default {
  name: "Organizer",
  components: {
    myHeader,
    Footer
  },
};
</script>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
}
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
  width: 90%;
  vertical-align: middle;
  border-style: none;
}
</style>