<template>
  <div class="wrap">
    <div class="card">
      <div class="title">
        <h1>{{ notice.title }}</h1>
      </div>
      <div class="tips">
        <span class="date">更新日期：2021-01-03</span>
        <span class="views">浏览量：{{ notice.view_counts }}</span>
      </div>
      <div class="content">
        {{ notice.content }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "NoticeDetail",
  data() {
    return {
      notice: {
        title: "酷酷酷酷酷酷酷酷酷酷酷酷",
        description: "斤斤计较急急急急急急急急急咳咳咳咳咳咳",
        content:
          "  斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急急急急急急急急急",
        view_counts: 40,
        update_time: "",
        annexList: [],
      },
    };
  },
  methods: {
    queryNotice() {
      axios
        .get("/notice", {
          params: {
            id: this.$route.query.id,
          },
        })
        .then((res) => {
          this.notices = res.data;
        });
    },
  },
  mounted() {
    // this.queryNotice()
  },
};
</script>

<style>
.wrap {
  position: relative;
  width: 90%;
  margin: 0 auto;
  background-color: #f6f6f6;
  /* overflow: hidden; */
}
.wrap .card {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  overflow: hidden;
  padding: 0 10%;
  min-height: 600px;
}
.tips {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 30%;
  font-size: 14px;
}
.content {
  margin-top: 20px;
  border-top: 1px solid #333;
  padding-top: 20px;
  text-indent: 2rem;
  font-size: 16px;
  text-align: left;
}
</style>