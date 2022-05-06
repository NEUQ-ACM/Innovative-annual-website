<template>
  <div class="maincontainer">
    <el-row :gutter="20"
            class="el-row">
      <el-col :span="4">
        <Sidebar></Sidebar>
      </el-col>
      <el-col :span="20">
        <div class="backstagetitle">首页轮播图</div>
        <el-col :span="20">
          <el-carousel :interval="4000"
                       type="card"
                       height="200px">
            <el-carousel-item v-for="(item, id) in rotationDate"
                              :key="id">
              <img :src="item.url"
                   style="max-height:200px;" />
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :span="20"
                style="margin-top: 2%;margin-bottom: 2%;">
          <el-upload action="http://81.70.56.45:8082/rotation/upload/"
                     :before-remove="beforeRemove"
                     :on-success="uploadSuccess"
                     :on-error="uploadError"
                     :on-change="handleChange"
                     :on-exceed="handleExceed"
                     :limit="1"
                     accept=".jpg,.png">
            <el-button type="primary">上传轮播图<i class="el-icon-upload el-icon--right"></i></el-button>
            <div slot="tip"
                 class="el-upload__tip"></div>
          </el-upload>
          <el-button type="primary"
                     @click="addImgurl()">增加轮播图<i class="el-icon-upload el-icon--right"></i></el-button>
        </el-col>
        <el-col :span="20">
          <el-table :data="rotationDate"
                    style="width: 100%"
                    :header-cell-style="{'text-align':'center'}"
                    :cell-style="{'text-align':'center'}"
                    @click="console.log('1')">
            <el-table-column label="图片"
                             width="400px">
              <template slot-scope="scope">
                <img :src="scope.row.url" />
              </template>
            </el-table-column>
            <el-table-column label="操作权限"
                             width="200px">
              <el-tag :type="success"
                      effect="dark"> 管理员 </el-tag>
            </el-table-column>
            <el-table-column label="操作"
                             width="400px">
              <template slot-scope="scope">
                <!-- <el-button type="info"
                           @click="handleDelete(scope.$index, scope.row)">修改轮播图</el-button> -->
                <el-button type="danger"
                           @click="handleDelete(scope.$index, scope.row)">删除图片</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
        <el-col :span="4"
                type="flex"
                justify="center">
        </el-col>
      </el-col>

    </el-row>
  </div>
</template>

<script>
import Sidebar from "../../components/Sidebar.vue";
export default {

  components: {
    Sidebar,
  },
  data () {
    return {
      upLoad: false,
      totationNum: 0,
      fileList: [],
      uploadurl: '',
      showmodel1: false,
      newImgRes: '',
      changeImgUrl: '',
      rotationDate: [
        {
          id: "1",
          url: "https://img1.baidu.com/it/u=450690908,1157853807&fm=253&fmt=auto&app=138&f=PNG?w=500&h=281",
        },
        {
          id: "2",
          url: "https://img1.baidu.com/it/u=450690908,1157853807&fm=253&fmt=auto&app=138&f=PNG?w=500&h=281",
        },
        {
          id: "3",
          url: "https://img1.baidu.com/it/u=450690908,1157853807&fm=253&fmt=auto&app=138&f=PNG?w=500&h=281",
        },
      ],
      imgData: {
        "file": "",
      }
    };
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row);
    },
    handleDelete (index, row) {
      console.log(index, row);
      this.$axios.get("/rotation/delRotation/" + row.id)
        .then((response) => {
          this.totationNum = response.pageNumber;
          this.rotationDate = response.data;
          this.$message.success("删除成功");
          this.$router.go(0);
        })
        .catch((error) => {
          console.log(error);
          alert("网络错误，不能访问");
        });
    },
    uploadError (err, file, fileList) {
      this.$message.error('出错了' + err);
    },
    uploadSuccess (response, file, fileList) {
      this.newImgRes = response.data
      console.log(this.newImgRes);
      this.$message({
        message: '上传成功',
        type: 'success'
      });
    },
    addImgurl () {
      this.$axios
        .post("/rotation/addRotation", {
          "name": this.newImgRes.name,
          "url": this.newImgRes.url,
        })
        .then((response) => {
          console.log(response);
          this.$message({
            message: '增加成功',
            type: 'success'
          });
          this.$router.go(0);
        })
    },
    changeUpload () {
      this.upLoad = false;
      console.log(this.fileList)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    getImgUrl () {
      this.$axios
        .get("/rotation/getAll")
        .then((response) => {
          console.log(response.data.data.records);
          this.rotationDate = response.data.data.records;
        })
    }
  },
  mounted () {
    this.getImgUrl();
  },
};
</script>

<style scoped>
.backstagetitle {
  font-size: 20px;
  margin-top: 2%;
  padding-bottom: 1%;
  margin-bottom: 1%;
  border-bottom: 1px solid lightgray;
  width: 90%;
  text-align: left;
}
.maincontainer .upload-demo {
  width: 700px;
  height: 400px;
  background-color: #fff;
  position: fixed;
  z-index: 500;
  left: 50%;
  top: 50%;
  padding-top: 100px;
  transform: translate(-50%, -50%);
  border-radius: 10rpx;
  box-shadow: 5px 5px 5px #cdcfcf;
}
.el-row {
  margin-bottom: 20px;
  height: 500px;
}
.maincontainer {
  height: 100%;
}
.leftside {
}
.rightside {
}
.el-table img {
  width: 400px;
  height: 200px;
}
.el-table .el-tag {
  width: 60px;
  display: block;
  margin: 0 auto;
}
.upload-add {
  margin-top: 30px;
  transform: translateX(-40%);
}
</style>
