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
            <el-form-item label="投票状态">
              <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>

            <el-form-item label="票数限制">
              <el-col :span="24">
                <el-input v-model="form.name"
                          :disabled="!form.delivery"></el-input>
              </el-col>
            </el-form-item>

            <el-form-item label="起始时间">
              <el-col :span="24">
                <el-time-picker type="date"
                                placeholder="选择日期"
                                v-model="form.date1"
                                format="HH:mm"
                                value-format="HH:mm"
                                :disabled="!form.delivery"
                                style="width: 100%;">
                </el-time-picker>
              </el-col>
            </el-form-item>

            <el-form-item label="截止时间">
              <el-col :span="24">
                <el-time-picker type="date"
                                placeholder="选择日期"
                                v-model="form.date1"
                                format="HH:mm"
                                value-format="HH:mm"
                                :disabled="!form.delivery"
                                style="width: 100%;">
                </el-time-picker>
              </el-col>
            </el-form-item>

            <el-form-item>
              <el-button type="primary"
                         @click="onSubmit">立即创建</el-button>
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
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!');
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    }
  },
  mounted () {

  }
}
</script>

<style scoped>
input.el-input__inner {
  width: 200px !important;
}
</style>