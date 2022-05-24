<template>
  <div>
    <div class="boxWrap"
         v-for="(item) in noticeData"
         :key="item.id"
         @click="viewDetail(item.id,item.content,item.title,current)">
      <div class="newsBoxOne newsBox">
        <div class="date">
          <span class="day">{{item.projectId}}</span>
        </div>
        <div class="news">
          <span class="newsTitle">{{ item.title }}</span>
          <span class="newsContent">{{ item.description }}</span>
        </div>
      </div>
    </div>
    <div style="margin: 2% 0  ;width: 100%;">
      <el-pagination background
                     layout="prev, pager, next"
                     :current-page="current"
                     @current-change="pageChange"
                     :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      current: 1,
      total: '',
      noticeData: [
        {
          id: 1,
          projectName: '基于UWB定位的手机端车库管理系统',
          school: '河北大学'
        }, {
          id: 2,
          projectName: '炫图',
          school: '河北大学'
        }, {
          id: 3,
          projectName: '基于物联网的LabVIEW智能温室大棚监管系统',
          school: '河北大学'
        }, {
          id: 4,
          projectName: '乡村振兴下产业融合促进农村“空心化“治理',
          school: '河北大学'
        }, {
          id: 5,
          projectName: '流域视角下京津冀水生态环境协同治理',
          school: '河北大学'
        }, {
          id: 6,
          projectName: '一种园艺用多功能手柄',
          school: '河北工程大学'
        }, {
          id: 7,
          projectName: 'EPCI”-废旧物再生创意艺术工坊',
          school: '河北工程大学'
        }, {
          id: 8,
          projectName: '基于大数据下的高楼外墙智能喷涂运作系统',
          school: '河北工程大学'
        }, {
          id: 9,
          projectName: '满天星红外导盲有限公司',
          school: '河北地质大学'
        }, {
          id: 10,
          projectName: '基于深度学习的人群密度预警方法及系统设计',
          school: '河北地质大学'
        }, {
          id: 11,
          projectName: '断骨智合：基于信息物理融合的骨折复位机器人',
          school: '河北工业大学'
        }, {
          id: 12,
          projectName: '一种辅助起居移乘机器人',
          school: '河北工业大学'
        }
      ],
    };
  },
  methods: {
    viewDetail (id, content, title,current) {
      this.$store.commit('itemChange', { content, title })
      this.$router.push({ path: '/ItemDetail', query: { id: id,current,type:1 } })
    },
    pageChange (val) {
      this.current = val
      this.$axios
        .get("http://81.70.56.45:8083/menuItem/getbyName/学术论文?currentPage=" + this.current)
        .then((response) => {
          this.noticeData = response.data.data.records;
          console.log(this.noticeData);
        })
        .catch((error) => {
          console.log(error);
          // alert("网络错误，不能访问");
        });
      console.log(this.noticeData);
    }
  },
  mounted () {
    if(this.$route.query.current)
    {
      this.current=this.$route.query.current
    }
    this.$axios
      .get("http://81.70.56.45:8083/menuItem/getbyName/学术论文?currentPage=" + this.current)
      .then((response) => {

        this.noticeData = response.data.data.records;
        this.total = response.data.data.total
      })
      .catch((error) => {
        console.log(error);
        // alert("网络错误，不能访问");
      });
    console.log(this.noticeData);
  },
};
</script>

<style scoped>
.el-header,
.el-footer {
  /* background-color: #b3c0d1; */
  color: #333;
  text-align: center;
  line-height: 60px;
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 30px;
}

/* .el-main {
  color: #333;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
} */

div.boxWrap {
  padding: 10px 5px;
  /* margin-bottom: 20px; */
  transition: 0.5s;
}
.boxWrap:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12), 0 0 24px rgba(0, 0, 0, 0.04);
  margin-left: 0.625rem;
}
.boxWrap:hover .news .newsTitle {
  color: #004ea1;
}
.newsBox {
  /* width: 50%; */
  display: flex;
  justify-content: space-between;
  width: 500px;
}

div.newsbox span {
  display: block;
}

div.date {
  width: 80px;
  display: flex;
  flex-wrap: wrap;
  border-right: 1px solid #ddd;
  justify-content: center;
  align-items: center;
}

span.day {
  color: #004ea1;
  font-size: 30px;
  line-height: 30px;
  margin-bottom: 5px;
  min-width: 6.25rem;
}
span.year {
  color: #004ea1;
  font-size: 14px;
}

div.news {
  padding-left: 20px;
  display: flex;
  flex-flow: wrap;
  width: 500px;
}

span.newsTitle {
  font-size: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #333;
  width: 100%;
  height: 28px;
  text-align: left;
}

span.newsContent {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 40px;
  line-height: 40px;
  text-align: center;
  overflow: hidden;
  color: #999;
  font-size: 14px;
}

div.btnLine {
  padding: 2rem 0;
}

div.btnLine button {
  border: 1px solid #352ddb;
  color: #352ddb;
  background-color: transparent;
  font-size: 14px;
  margin: 4px 4px;
  display: inline-block;
  width: 120px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  -webkit-transition: 0.3s all ease-out;
  transition: 0.3s all ease-out;
  text-decoration: none;
  cursor: pointer;
}

div.btnLine button:hover {
  color: #fff;
  background-color: #352ddb;
}
@media screen and (max-width: 768px) {
  .el-main .boxWrap {
    min-width: none;
    width: 100%;
  }
  .el-main .boxWrap {
    width: 100%;
  }
  .el-main .boxWrap .newsTitle {
    width: 100%;
    display: block;
    min-width: none;
  }
}
</style>