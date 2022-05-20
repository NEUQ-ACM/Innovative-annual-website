<template>
  <div class="maincontainer">
    <el-row :gutter="20"
            class="el-row">
      <el-col :span="4">
        <Sidebar></Sidebar>
      </el-col>
      <el-col :span="20">
        <div style="height:80px"></div>
        <el-table :data="tableData"
                  style="width: 100%"
                  v-loading="loading"
                  highlight-current-row>
          <el-table-column prop="id"
                           label="ID"
                           width="120"
                           align="center">
          </el-table-column>
          <el-table-column prop="menuName"
                           label="ITEM"
                           width="120"
                           align="center">
          </el-table-column>
          <el-table-column align="center"
                           width="290">
            <template slot="header">
              <el-button size="small"
                         type="primary"
                         @click="addFirstMenu()"><i class="el-icon-circle-plus-outline"></i>&nbsp;新增</el-button>
            </template>
            <template slot-scope="scope">
              <el-button size="small"
                         type="info"
                         @click="updateFirstMenu(scope.$index, scope.row)">编辑导航</el-button>
              <el-button size="small"
                         type="danger"
                         @click="delFirstMenu(scope.$index, scope.row)">删除</el-button>
                         <el-button size="small"
                         type="succees"
                         @click="handleEdit(scope.$index, scope.row)">编辑内容</el-button>
            </template>
          </el-table-column>
        </el-table>
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
      tableData: [],
      loading: false,
      headers: {
        token: "cec2ffaf-5e51-4f4d-81ad-4177ca163c6b"
      }
    }
  },
  methods: {
    handleEdit(index, row) {
      this.$router.push({
        path: "/Addtplt",
        query: {id: row.id,name:row.menuName },
      }); //type参数 true为修改 false为添加
    },
    getFirstMenu () {
      this.$axios
        .get('http://81.70.56.45:8083/menu/getFirstMenu')
        .then(res => {
          console.log(res);
          this.tableData = res.data.data.menuList;
        })
        .catch(err => {
          console.log(err)
        })
    },
    addFirstMenu () {
      this.$prompt('请输入菜单名称', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/,
        inputErrorMessage: '菜单名称不能为空'
      }).then(({ value }) => {
        console.log(value)
        this.loading = true;
        this.$axios
          .post('http://81.70.56.45:8083/menu/addFirstMenu', {
            "menuName": value,
            "isDel": 0,
          }, {
            headers: {
              "token": this.headers.token
            }
          })
          .then(res => {
            console.log(res);
            this.$message({
              type: 'success',
              message: '添加成功!'
            });
            this.getFirstMenu();
            this.loading = false;
            
          })
          .catch(err => {
            console.log(err);
            this.$message({
              type: 'error',
              message: '添加失败!'
            });
            this.loading = false;
          })
      }).catch(() => {
		this.loading=false
        this.$message({
          type: 'info',
          message: '取消添加'
        });
      });
    },
    delFirstMenu (index, row) {
      console.log(index, row);
      this.loading = true;
      this.$axios
        .get('http://81.70.56.45:8083/menu/delFirstMenu/' + row.id, {
          headers: {
            "token": this.headers.token
          }
        })
        .then(res => {
          console.log(res);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.getFirstMenu();
          this.loading = false;
        })
        .catch(err => {
          console.log(err);
          this.$message({
            type: 'error',
            message: '删除失败！'
          });
          this.loading = false;

        })
    },
    updateFirstMenu (index, row) {
      console.log(index, row);
      this.loading = true;
      this.$prompt('请输入菜单名称', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/,
        inputErrorMessage: '菜单名称不能为空'
      }).then(({ value }) => {
        console.log(value)
        this.$axios
          .post('http://81.70.56.45:8083/menu/updateFirstMenu', {
            "menuName": value,
            "isDel": 0,
            "id": row.id
          }, {
            headers: {
              "token": this.headers.token
            }
          })
          .then(res => {
            console.log(res);
            this.$message({
              type: 'success',
              message: '修改成功!'
            });
            this.getFirstMenu();
            this.loading = false;
          })
          .catch(err => {
            console.log(err);
            this.$message({
              type: 'error',
              message: '修改失败!'
            });
            this.loading = false;
          })
      }).catch(() => {
		this.loading=false
        this.$message({
          type: 'info',
          message: '取消添加'
        });
      });
    }
  },
  mounted () {
    this.getFirstMenu()
  }
}
</script>

<style>
</style>