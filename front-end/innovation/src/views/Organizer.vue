<template>
  <div class="orgnizermain">

    <div class="orgnizercontent">
      <h2>主办单位</h2>
      <img src="../assets/images/mainImage.png"
           alt="主办单位" />
    </div>

  </div>
</template>

<script>


export default {
  name: "Organizer",

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