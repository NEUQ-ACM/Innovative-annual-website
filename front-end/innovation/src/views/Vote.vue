<template>
  <div class="voteWrap" style="position: relative;">
    <h2 style="text-align: center; margin: 10px 0 20px">选择作品投票</h2>
    <h3 style="text-align: center; margin: 10px 0 10px;color: red;">您最多可以为10个项目投票，提交后将不能更改选择</h3>
    <div style="text-align: center">
      <el-transfer style="text-align: left; display: inline-block" v-model="value" filterable
        :props="{ key: 'id', label: 'title' }" :render-content="renderFunc" :titles="['所有作品', '选择作品']"
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
export default {
  data() {
    return {
      data: [],
      current: 1,
      value: [],
      renderFunc(h, option) {
        return <span>{option.id} - {option.title}</span>;
      },
      total: 0,
      pages: 0,
      proId: []
    };
  },

  methods: {
    handleChange(value, direction, movedKeys) {
      console.log(value, direction, movedKeys);
    },
    getProject() {
      this.$axios.get("http://81.70.56.45:8083/menuItem/getbyName/创新创业展示项目?currentPage=" + this.current).then(res => {
        this.pages = res.data.data.pages
        // this.data = res.data.data.records
        res.data.data.records.forEach(element => {
          this.data.push(element)
        });
        let pages = res.data.data.pages;
        let cur = this.current;
        for (let i = cur + 1; i <= pages; i++) {
          this.$axios.get("http://81.70.56.45:8083/menuItem/getbyName/创新创业展示项目?currentPage=" + i).then(res => {
            res.data.data.records.forEach(element => {
              this.data.push(element)
            });
          })
        }
      })
    },
    // handleCurrentChange(val) {
    // 		let newvalue=this.value
    //         this.current=val
    // 		this.data=[]
    // 		this.getProject()
    // 		this.value=newvalue
    //       },

    submitVote() {
      let that = this
      if (that.value.length > 10) {
        this.$message({
          type: 'error',
          message: '投票项目数不得超过10个'
        });
      } else {
        this.$confirm('投票只能提交一次，不能修改', '请确定', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let token = window.sessionStorage.getItem('token')
          this.value.forEach(key => {
            that.proId.push(key)
          })
          that.$axios({
            method: "post",//请求方式
            url: '/user/doVote/admin',//请求接口
            headers: {
              'Content-Type': 'application/json',
              'token': token
            },//请求头参数
            data: proId
          }).then(function (res) {
            if (res.data.status == 200) {
              that.$message.success('投票成功')
			  that.$router.push('/home')
			  that.$message.success('投票成功')
            }
            else {
              that.$message.error('投票失败');
            }
          })
            .catch(function (err) {
              that.$message.error('投票失败');
            })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消提交'
          });
        });
      }


    }
  },
  mounted() {
    this.getProject()
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