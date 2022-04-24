<template>
  <section class="sectionThree">
    <div class="container">
      <div class="showTitle">
        <span>本届创新创业成果展示</span>
      </div>
      <div class="showContent">
        <el-row class="btnGroup"> 
          <el-col :span="24">
            <el-button round :class="{'active':btnOne}" @click="toBtnOne">学术论文</el-button>
            <el-button round :class="{'active':btnTwo}" @click="toBtnTwo">改革成果项目</el-button>
            <el-button round :class="{'active':btnThree}" @click="toBtnThree">创业推荐项目</el-button>
          </el-col>
        </el-row>
        <el-row class="content" v-show="btnOne">
          <el-col :span="24">
            <p>暂无学术论文相关信息</p>
          </el-col>
        </el-row>
        <el-row class="content" v-show="btnTwo">
          <el-col :span="24">
            <p>暂无改革成果相关信息</p>
          </el-col>
        </el-row>
        <el-row class="content" v-show="btnThree">
          <el-col :span="24">
            <p>暂无创新创业相关信息</p>
          </el-col>
        </el-row>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name:'ThisShow',
  data(){
    return{
      btnOne: true,
      btnTwo: false,
      btnThree: false
    }
  },
  methods:{
    toBtnOne(){
      this.btnOne = true
      this.btnTwo = false
      this.btnThree = false
    },
    toBtnTwo(){
      this.btnOne = false
      this.btnTwo = true
      this.btnThree = false
    },
    toBtnThree(){
      this.btnOne = false
      this.btnTwo = false
      this.btnThree = true
    },
  }
};
</script>

<style scoped>
.sectionThree {
  padding: 20px 0;
  background-color: #f6f6f6;
}

.el-row.btnGroup {
  margin: 10px 0 20px;
}

div.container {
  width: 90%;
  margin: 0 auto;
}

div.showTitle {
  margin: 40px 0 20px;
  font-size: 30px;
  color: #444;
}



.el-button {
  outline: 0 none;
  margin: 4px 6px;
  border-radius: 20px;
  height: 40px;
  width: 170px;
  border: 1px solid #d6d6d6;
  background-color: #fff;
  color: #333;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s all ease-out;
}

.el-button:hover,
.el-button.active {
  background-color: #352ddb;
  color: #fff;
}

.showContent .content {
  background-color: #fff;
  height: 324px;
  color: #e6cbcb;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
}
</style>