<template>

  <div class="voteWrap" style="position: relative;">
    <!-- <span v-for="i in data1" :key="i">{{i    }}</span> -->
    <h2 style="text-align: center; margin: 10px 0 20px">选择作品投票</h2>
    <h3 style="text-align: center; margin: 10px 0 10px;color: red;">您最多可以为{{ quantity }}个项目投票，投票截止时间：{{ limitDate }}
    </h3>
    <div style="text-align: center">
      <el-transfer style="text-align: left; display: inline-block" v-model="value" filterable
        :props="{ key: 'projectId', label: 'title' }" :render-content="renderFunc" :titles="['所有作品', '选择作品']"
        :button-texts="['删除', '添加']" :format="{
          noChecked: '${total}',
          hasChecked: '${checked}/${total}'
        }" @change="handleChange" :data="data">
      </el-transfer>
    </div>
    <div class="btnBox">
      <el-button type="primary" @click="submitVote">确认</el-button>
    </div>
    <!-- <el-pagination
	  background
	  layout="prev, pager, next"
	  :total="total"
	  @current-change="handleCurrentChange"
	  >
	</el-pagination> -->
  </div>

</template>

<script>
import { all } from 'q';

export default {
  data() {
    return {
      data: [],  //总的，未选择的
      userData: [],
      current: 1,
      value: [],  //已选择的
      renderFunc(h, option) {
        return <span>{option.projectId} - {option.title}</span>;
      },
      quantity: 10,
      limitDate: "",
      status: "",
    };
  },

  methods: {
    handleChange(value, direction, movedKeys) {
      console.log(value, direction, movedKeys);
    },

    /**
     * 获取全部项目数据，对数据进行分类（一次性的，不分页的）
     * -存进data中
     * 获取该用户投票过的数据
     * -存进userData中
     * 遍历判断
     * -userData存进value
     */
    getProject() {
      const _this = this
      let token = window.sessionStorage.getItem('token')

      _this.$axios({
        method: "get",
        url: 'http://81.70.56.45:8083/menuItem/getbyName1/创新创业展示项目',
        headers: {
          'Content-Type': 'application/json',
          'token': token
        }
      }).then(res => {
        // console.log(res)
        if (res.data.status == 200) {
          _this.data = res.data.data
        } else {
          _this.$message.error("出错了，获取所有项目数据失败")
        }
      })

      _this.$axios({
        method: "get",
        url: 'http://81.70.56.45:8083/user/getVote/admin',
        headers: {
          'Content-Type': 'application/json',
          'token': token
        }
      }).then(res => {
        // console.log(res)
        if (res.data.status == 200) {
          _this.userData = res.data.data
          console.log(_this.userData)
          _this.userData.forEach(item => {
            _this.value.push(item.projectId)
          })
        } else {
          _this.$message.error("出错了，获取用户投票项目数据失败")
        }
      })


      // let allLen = _this.data.length
      // let chooseLen = _this.value.length
      // for(let i=0; i<chooseLen; i++){
      //   for(let j=0; j<allLen; j++){
      //     if(_this.value[i].projectId == _this.data[j]){
      //       _this.data.splice(j,1)
      //       break
      //     }
      //   }
      // }
      /**
       *  this.pages = res.data.data.pages
          this.data = res.data.data.records
          console.log(this.data.length)
          console.log("------------")
          res.data.data.records.forEach(element => {
            this.data.push(element)
          });
          let pages = res.data.data.pages;
          let cur = this.current;
          for (let i = cur + 1; i <= pages; i++) {
            // console.log(this.data.length)
            this.$axios.get("http://81.70.56.45:8083/menuItem/getbyName/创新创业展示项目?currentPage=" + i).then(res => {
              res.data.data.records.forEach(element => {
                this.data.push(element)
              });
            })
          }
       */

    },

    /**
     * 获取最大投票数和投票截止时间
     * -展示，渲染
     */
    getLimit() {
      const _this = this
      _this.$axios.get("http://81.70.56.45:8083/voteState/get").then(res => {
        console.log(res)
        if (res.data.status == 200) {
          _this.limitDate = res.data.data.end
          _this.quantity = res.data.data.limits
        } else {
          _this.$message.error("出错了，获取限制数据失败")
        }
      })
    },

    /**
     * 点击确认按钮后
     *  -判断右边的框有没有超过十个
     *  -发送投票请求，可以多次发送的（就是说在投票时间内可以多次投票），每一次发送一定不超过10个，每一次请求都删掉旧的，录入新的
     *  -请求，将右边的所选择的全部传过去，触发后端删除原来的投票项目，将新的存进数据库
     *  -如果不点击确认按钮，则无事发生
     */
    submitVote() {
      const _this = this
      let chooseLen = _this.value.length
      let leftLen = _this.quantity - chooseLen
      _this.$axios.get('http://81.70.56.45:8083/voteState/get').then(res => {
        console.log(res)
        _this.status = res.data.data.status
        if (_this.status == '已结束') {
          _this.$message.error("投票结果保存失败，原因：投票已结束")
        }
      })
      if (chooseLen > _this.quantity) {
        this.$message({
          showClose: true,
          type: 'error',
          message: '您选择了' + chooseLen + '个项目进行投票，超过了系统允许投票的最大值（' + _this.quantity + '个），请返回修改后再确认投票！'
        })
      } else {
        this.$confirm('投票系统允许您最多为' + _this.quantity + '个项目投票，您已选择了' + chooseLen + '个项目，请您再次确认要为所选项目投票！', '投票确认', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let token = window.sessionStorage.getItem('token')
          _this.$axios({
            method: "post",//请求方式
            url: '/user/doVote/admin',//请求接口
            headers: {
              'Content-Type': 'application/json',
              'token': token
            },//请求头参数
            data: JSON.stringify(_this.value)
          }).then(function (res) {
            if (res.data.status == 200) {
              _this.$message.success('投票成功')
            }
            else {
              _this.$message.error('投票失败，原因是：' + res.data.msg)
              // _this.$message.error(res.msg)
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消提交'
          });
        });
      }
    },

  },
  created() {
    this.getProject()
    this.getLimit()
  }
};
</script>

<style scoped>
/deep/ .el-transfer {
  font-size: 14px;
  min-width: 80% !important;
  position: relative;
}

/deep/ .el-transfer__buttons {
  display: inline-flex;
  flex-flow: column;
  vertical-align: middle;
  width: 30% !important;
  align-items: center;
  justify-content: center;
  padding: 0 !important;
  /* position: absolute !important;
  bottom: -20% !important; */
}

/deep/ .el-transfer-panel {
  border: 1px solid #EBEEF5;
  border-radius: 4px;
  overflow: hidden;
  background: #FFF;
  display: inline-block;
  vertical-align: middle;
  max-height: 100%;
  box-sizing: border-box;
  position: relative;
  width: 35% !important;
}

/deep/ .el-transfer-panel__body {
  min-height: 400px !important;
}

/deep/ .el-transfer-panel__list.is-filterable {
  height: 100% !important;
  padding-top: 0;
}

.btnBox {
  margin-top: 3%;
  width: 100%;
  text-align: center;
}

/deep/ .el-transfer__button span {
  font-size: 16px !important;
}

/deep/ .el-transfer__button {
  margin-left: 0 !important;
  width: 35%;
}

.btnBox .el-button[data-v-3ccf8124] {
  position: absolute;
  top: 68%;
  left: 46%;
  width: 8%;
}
</style>