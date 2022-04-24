<template>
  <section class="sectionTwo">
    <div class="arrangmentWrap">
      <div class="arrangment">
        <div class="contentWrap">
          <div class="meetingSchedule">
            <div class="title">会议日程</div>
          </div>
        </div>
        <div class="contentWrap">
          <div class="meetingVideo">
            <div class="title">会议日程</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
div.arrangmentWrap {
  background: url("../assets/images/bg-2.png");
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  padding-bottom: 40px;
  padding-top: 10px;
}

div.arrangment {
  display: flex;
  justify-content: space-evenly;
}

div.contentWrap {
  width: 50%;
  padding: 0 15px;
  margin-top: 20px;
}

div.title {
  margin-bottom: 30px;
  color: #fff;
  font-size: 30px;
  letter-spacing: 2px;
}
</style>