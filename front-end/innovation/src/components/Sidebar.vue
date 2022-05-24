<template>
  <div style="padding-left: 0%;height: 100%;">
    <h4 style="color: blue;font-weight: bold;">后台管理</h4>
    <el-menu router
             :default-active="path"
             class="el-menu-vertical-demo"
             @open="handleOpen"
             @close="handleClose">
      <el-menu-item index="Rotation">
        <i class="el-icon-menu"></i>
        <span slot="title">首页轮播图</span>
      </el-menu-item>
      <el-menu-item index="Recommend">
        <i class="el-icon-menu"></i>
        <span slot="title">创业推荐项目</span>
      </el-menu-item>
      <el-menu-item index="Notice">
        <i class="el-icon-menu"></i>
        <span slot="title">通知公告</span>
      </el-menu-item>
      <el-menu-item index="Paper">
        <i class="el-icon-document"></i>
        <span slot="title">学术论文</span>
      </el-menu-item>
      <el-menu-item index="Reform">
        <i class="el-icon-setting"></i>
        <span slot="title">创新创业交流项目</span>
      </el-menu-item>
      <el-menu-item index="annex">
        <i class="el-icon-setting"></i>
        <span slot="title">附件管理</span>
      </el-menu-item>
      <el-menu-item index="Navmenu">
        <i class="el-icon-setting"></i>
        <span slot="title">导航管理</span>
      </el-menu-item>
      <el-menu-item index="VoteBack">
        <i class="el-icon-setting"></i>
        <span slot="title">票数统计</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      path: '',
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },
    getUrl () {
      this.path = this.$route.path.split('/')[1];
    }
  },
  mounted () {
    this.getUrl();
  }
}
</script>
<style scoped>
</style>