<template>
  <div class="maincontainer">
    <el-row :gutter="20"
            class="el-row">
      <el-col :span="4">
        <Sidebar></Sidebar>
      </el-col>
      <el-col :span="20"
              class="table">
        <el-card class="box-card"
                 style="width:28%;margin-top:2%">
          <el-form ref="form"
                   :model="form"
                   label-width="80px">
            <el-radio-group v-model="radio"
                            @change="courseChange">
              <el-radio-button label="0">未开始</el-radio-button>
              <el-radio-button label="1">已开始</el-radio-button>
              <el-radio-button label="2">已结束</el-radio-button>
            </el-radio-group>

            <el-form-item label="票数限制">
              <el-col :span="24">
                <el-input v-model="form.limits"
                          :disabled="form.delivery"></el-input>
              </el-col>
            </el-form-item>

            <el-form-item label="起始时间">
              <el-col :span="24">
                <el-date-picker type="date"
                                placeholder="选择日期"
                                v-model="form.startDate"
                                value-format="yyyy-MM-dd"
                                :disabled="form.deliveryStart"
                                style="width: 100%;">
                </el-date-picker>
              </el-col>
              <el-col :span="24">
                <el-time-picker type="date"
                                placeholder="选择时间"
                                v-model="form.startTime"
                                format="HH:mm:ss"
                                value-format="HH:mm:ss"
                                :disabled="form.deliveryStart"
                                style="width: 100%;">
                </el-time-picker>
              </el-col>
            </el-form-item>

            <el-form-item label="截止时间"
                          prop="deadLine">
              <el-col :span="24">
                <el-date-picker type="date"
                                placeholder="选择日期"
                                v-model="form.deadDate"
                                value-format="yyyy-MM-dd"
                                :disabled="form.deliveryDeadline"
                                style="width: 100%;">
                </el-date-picker>
              </el-col>
              <el-col :span="24">
                <el-time-picker type="date"
                                placeholder="选择时间"
                                v-model="form.deadTime"
                                format="HH:mm:ss"
                                value-format="HH:mm:ss"
                                :disabled="form.deliveryDeadline"
                                style="width: 100%;">
                </el-time-picker>
              </el-col>
            </el-form-item>

            <el-form-item>
              <el-button type="primary"
                         :disabled="false"
                         @click="onSubmit">保存投票参数</el-button>
              <!-- <el-button @click="resetForm('form')">重置</el-button> -->
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Sidebar from '../../components/Sidebar.vue'
export default {
  components: {
    Sidebar,
  },
  data () {
    return {
      radio: 0,
      form: {
        limits: 0,
        startDate: '',
        startTime: '',
        deadDate: '',
        deadTime: '',
        delivery: false,
        deliveryStart: false,
        deliveryDeadline: false,
      },
    }
  },
  methods: {
    onSubmit () {
      let start = Date.parse(this.form.startDate + " " + this.form.startTime);
      let dead = Date.parse(this.form.deadDate + " " + this.form.deadTime);
      let status = "";
      if (this.radio == 0) {
        status = "未开始";
      } else if (this.radio == 1) {
        status = "已开启";
      } else if (this.radio == 2) {
        status = "已结束";
      }
      if (start >= dead) {
        this.$message.error('截止时间不能早于起始时间');
        return;
      } else {
        console.log(this.radio);
        console.log(status);
        console.log(this.form.limits);
        console.log(this.form.startDate + " " + this.form.startTime);
        console.log(this.form.deadDate + " " + this.form.deadTime);
        this.$axios
          .post('http://81.70.56.45:8083/voteState/update', {
            "id": 1,
            "status": status,
            "limits": this.form.limits,
            "start": this.form.startDate + " " + this.form.startTime,
            "end": this.form.deadDate + " " + this.form.deadTime,
          }, {
            headers: {
              'token': sessionStorage.getItem('token')
            }
          })
          .then(res => {
            console.log(res);
            if (res.data.status === 200) {
              this.$message.success('保存成功');
            } else {
              this.$message.error('保存失败');
            }
          })
      }
    },
    // resetForm (formName) {
    //   this.$refs[formName].resetFields();
    // },
    courseChange () {
      console.log(this.radio);
      if (this.radio == 0) {
        this.form.delivery = false
        this.form.deliveryStart = false
        this.form.deliveryDeadline = false
      } else if (this.radio == 1) {
        this.form.delivery = true
        this.form.deliveryStart = true
        this.form.deliveryDeadline = false
      } else if (this.radio == 2) {
        this.form.delivery = true
        this.form.deliveryStart = true
        this.form.deliveryDeadline = true
      }
    },
    //获取特定时刻时间戳
    // getTimeStamp (date, time) {
    //   var date = new Date(date + ' ' + time);
    //   return date.getTime();
    // },
  },
  mounted () {
    this.$axios
      .get("http://81.70.56.45:8083/voteState/get")
      .then(res => {
        console.log(res);
        // this.radio = res.data.data.id;
        if (res.data.data.status == "未开始") {
          this.radio = 0;
        } else if (res.data.data.status == "已开启") {
          this.radio = 1;
        } else if (res.data.data.status == "已结束") {
          this.radio = 2;
        }
        this.form.limits = res.data.data.limits;
        this.form.startDate = res.data.data.start.split(' ')[0];
        this.form.startTime = res.data.data.start.split(' ')[1];
        // console.log(this.form.startDate, this.form.startTime);
        this.form.deadDate = res.data.data.end.split(' ')[0];
        this.form.deadTime = res.data.data.end.split(' ')[1];
      })
      .then(res => {
        this.courseChange()
      })

  }
}
</script>

<style scoped>
input.el-input__inner {
  width: 200px !important;
}
</style>