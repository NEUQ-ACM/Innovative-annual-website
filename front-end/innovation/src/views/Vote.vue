<template>
  <div class="voteWrap" style="position: relative;">
    <h2 style="text-align: center; margin: 10px 0 20px">选择作品投票</h2>
    <div style="text-align: center">
      <el-transfer style="text-align: left; display: inline-block" v-model="value" filterable
        :props="{ key: 'id', label: 'projectName' }" :render-content="renderFunc" :titles="['所有作品', '选择作品']"
        :button-texts="['删除', '添加']" :format="{
          noChecked: '${total}',
          hasChecked: '${checked}/${total}'
        }" @change="handleChange" :data="data">
      </el-transfer>
    </div>
    <div class="btnBox">
      <el-button type="primary">确认</el-button>
    </div>
  </div>

</template>

<style>
.transfer-footer {
  margin-left: 20px;
  padding: 6px 5px;
}
</style>

<script>
export default {
  data() {
    const generateData = _ => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0
        });
      }
      return data;
    };
    return {
      data: [
        {
          id: 1,
          projectName: '基于UWB定位的手机端车库管理系统',
          school: '河北大学'
        },
      ],
      current: 1,
      value: [],
      renderFunc(h, option) {
        return <span>{option.id} - {option.projectName}</span>;
      }
    };
  },

  methods: {
    handleChange(value, direction, movedKeys) {
      console.log(value, direction, movedKeys);
    },
    getProject() {
      this.$axios.get("/project/getbyType/1?currentPage=1").then(res => {
        console.log(res)
        res.data.data.records.forEach(element => {
          this.data.push(element)
        });
        let pages = res.data.data.pages;
        let cur = res.data.data.current;
        while (pages > cur) {
          this.$axios.get("/project/getbyType/1?currentPage=" + (cur + 1)).then(res => {
            pages = res.data.data.pages;
            cur = res.data.data.current;
            res.data.data.records.forEach(element => {
              this.data.push(element)
            });
          })
        }
      })
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
  top: 67%;
  left: 46%;
  width: 8%;
}
</style>