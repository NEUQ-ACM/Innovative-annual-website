<template>
  <div class="wrap">
    <div class="card">
      <div class="title">
        <h1>{{ notice.title }}</h1>
      </div>
      <div class="tips">
        <span class="date">更新日期：{{ notice.updateTime }}</span>
        <span class="views">浏览量：{{ notice.viewCounts }}</span>
      </div>
      <div class="content">
        {{ notice.content }}
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div class="divider">
        <span class="annexStart">相关附件</span>
      </div>
      <div class="annexs">
        <div class="annex" v-for="a in annexList" :key="a.id">
          <a :href="a.annexesUrl" :download="a.name">
            <i class="el-icon-document"></i>
            <h5 class="fileName">{{ a.name }}</h5>
          </a>
        </div>
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
      notice: {},
      annexList: [],
    };
  },
  methods: {
    queryNotice() {
      axios.get("/notice/" + this.$route.query.id).then((res) => {
        // console.log(res);
        this.notice = res.data.data.notice;
        this.annexList = res.data.data.annexList;
        console.log(this.notice);
        console.log(this.annexList);
      });
    },
  },
  mounted() {
    this.queryNotice();
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.wrap {
  position: relative;
  width: 90%;
  margin: 0 auto;
  background-color: #f6f6f6;
}
.wrap .card {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin-top: 2%;
  margin-bottom: 1%;
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
  border-top: 1px solid lightgray;
  padding-top: 20px;
  text-indent: 2rem;
  font-size: 16px;
  text-align: left;
}
.divider {
  position: relative;
  text-align: center;
  z-index: 1;
}
.divider::after {
  content: "";
  height: 2px;
  background-color: #efefef;
  position: absolute;
  width: 100%;
  left: 0;
  top: 50%;
  z-index: -1;
}
.annexStart {
  display: inline-block;
  padding: 0 10px;
  color: #ddd;
  font-size: 16px;
  letter-spacing: 3px;
  background-color: #fff;
}
.annexs {
  display: flex;
  flex-flow: wrap;
  margin-top: 20px;
}
.annex {
  display: flex;
  flex-flow: column;
  background-color: #fbf7f7;
  padding: 0 20px;
  width: 200px;
  text-align: center;
  border: 1px solid #eee;
  border-radius: 6px;
  transition: all 0.3s;
  margin-right: 10px;
  margin-bottom: 10px;
}
/* .annex:hover a{
  background-color: rgba(255, 255, 255, 0.3);
  filter: blur(3px);
} */
.annex a {
  color: #004ea1;
  display: inline-block;
  max-width: 160px;
}

.annex i {
  font-size: 40px;
  padding: 5px;
}

a {
  text-decoration: none;
}

.fileName {
  max-height: 20px;
  line-height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 160px;
  margin: 0;
}
</style>