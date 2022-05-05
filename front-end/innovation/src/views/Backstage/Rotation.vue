<template>
  <div class="maincontainer">
    <el-upload
      class="upload-demo"
      drag
      :on-success="changeUpload"
      action="/updateRotation"
      :file-list="fileList"
      v-show="upLoad"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">
        只能上传jpg/png文件，且不超过500kb
        <el-button type="danger" @click="changeUpload">取消</el-button>
      </div>
    </el-upload>
    <!-- <el-container>
		  <el-aside style="height: 50vh;" width="200px" ><Sidebar></Sidebar></el-aside>
		  <el-main>Main</el-main>
		</el-container> -->
    <el-row :gutter="20" class="el-row">
      <el-col :span="4"><Sidebar></Sidebar></el-col>
      <el-col :span="20"> 首页轮播图 </el-col>
      <el-col :span="20">
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="(item, id) in rotationDate" :key="id">
            <img :src="item.url" />
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="16">
        <el-table
          :data="rotationDate"
          style="width: 100%"
          @click="console.log('1')"
        >
          <el-table-column label="图片" width="400px">
            <template slot-scope="scope">
              <img :src="scope.row.url" />
            </template>
          </el-table-column>
          <el-table-column label="操作权限" width="400px">
            <el-tag :type="success" effect="dark"> 管理员 </el-tag>
          </el-table-column>
          <el-table-column label="操作" width="400px">
            <template slot-scope="scope">
              <el-button
                type="primary"
                @click="handleEdit(scope.$index, scope.row)"
                >修改图片</el-button
              >
              <el-button
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >删除图片</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="4" type="flex" justify="center">
        <el-upload
  class="upload-add"
  ref="upload"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList"
  :auto-upload="false">
  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
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
  data() {
    return {
      upLoad: false,
      roationNum: 0,
      fileList:[],
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
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.upLoad = true;
    },
    handleDelete(index, row) {
      console.log(index, row);
      axios
        .get("/delNotice" + row.id)
        .then((response) => {
          this.roationNum = response.pageNumber;
          this.rotationDate = response.data;
        })
        .catch((error) => {
          console.log(error);
          alert("网络错误，不能访问");
        });
    },
    changeUpload() {
      this.upLoad = false;
      console.log(this.fileList)
    },
  },
  mounted() {
    axios.get("/rotation")
      .then((response) => {
        this.roationNum = response.pageNumber;
        this.rotationDate = response.data;
      })
      .catch((error) => {
        console.log(error);
        alert("网络错误，不能访问");
      });
  },
};
</script>

<style scoped>
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
.upload-add{
  margin-top: 30px;
  transform:translateX(-40%);
}
</style>