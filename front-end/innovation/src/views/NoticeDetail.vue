<template>
  <div class="wrap">
    <div class="card">
      <div class="title">
        <h1>{{notice.title}}</h1>
      </div>
      <div class="tips">
        <span class="date">更新日期：{{notice.update_time}}</span>
        <span class="views">浏览量：{{ notice.view_counts }}</span>
      </div>
      <div class="content">
        {{ notice.content }}
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div class="divider">
        <span class="annexStart">相关附件</span>
      </div>
      <div class="annexs">
        <div class="annex" v-for="a in notice.annexList" :key="a.id">
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

export default {
  name: "NoticeDetail",
  data() {
    return {
      notice: {
        title: "酷酷酷酷酷酷酷酷酷酷酷酷",
        description: "斤斤计较急急急急急急急急急咳咳咳咳咳咳",
        content:
          "斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急急急急急急急急急",
        view_counts: 40,
        update_time: "2021-12-01",
        annexList: [
          {
            id: "01",
            name: "东秦防疫政策",
            annexesUrl: "https://element.eleme.cn/#/zh-CN/component/table",
          },
          {
            id: "02",
            name: "东秦防疫政策",
            annexesUrl: "https://element.eleme.cn/#/zh-CN/component/table",
          },
          {
            id: "03",
            name: "东秦防疫政策",
            annexesUrl: "https://element.eleme.cn/#/zh-CN/component/table",
          },
          {
            id: "04",
            name: "东秦防疫政策",
            annexesUrl: "https://element.eleme.cn/#/zh-CN/component/table",
          },
          {
            id: "05",
            name: "东秦防疫政策东秦防疫政策东秦防疫政策",
            annexesUrl: "https://element.eleme.cn/#/zh-CN/component/table",
          },
        ],
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
          this.notice = res.data;
        });
    },
  },
  mounted() {
    // this.queryNotice()
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