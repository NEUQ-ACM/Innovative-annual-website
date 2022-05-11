<template>
  <div class="frontSidebar">
    <span style="width: 25%;margin-left: 0%;margin-right: 5%;">
      <div class="frontSidebarTitle">
        <div>
          {{frontSidebar.title}}
        </div>
      </div>
      <div :style="frontSidebarStyle">
        <div v-for="(item,index) in frontSidebar.links">
          <router-link :to="item.path"
                       active-class="linkActive">
            <div style="height: 50px;padding: 5px;margin-top: 10px;">
              {{item.name}}
            </div>
          </router-link>
        </div>
      </div>
    </span>
    <span style="width: 80%;margin-left: 5%;">

      <router-view></router-view>
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      frontSidebar: {
        title: "作品展示",
        links: [
          {
            name: "学术论文",
            path: "/Show1",
          }, {
            name: "创新创业展示项目",
            path: "/Show2",
          }, {
            name: "创业推荐项目",
            path: "/Show3",
          }, {
            name: "TemplateBody",
            path: "/TemplateBody",
          },
        ],
      },
      frontSidebarStyle: {
        height: "",
        backgroundColor: "#F9F9F9",
      },
    }
  },
  methods () {
  },
  mounted () {
    this.height = this.frontSidebar.links.length * 60;
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #333;
  line-height: 45px;
}
div.frontSidebar {
  width: 70%;
  margin-left: 15%;
  display: flex;
  flex-direction: row;
  padding-top: 2%;
}
div.frontSidebarTitle {
  background-color: #004ea1;
  color: white;
  font-size: 25px;
  height: 100px;
  align-items: center;
  display: flex;
  justify-content: center;
}
.linkActive {
  display: block;
  color: #ddd;
  text-decoration: none;
  background-color: rgb(30, 71, 97);
}
</style>