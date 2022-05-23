<template>
  <div>
    <h1>{{ records.title }}</h1>
    <div >
      <mavon-editor
      style="width:100%"
        class="md"
        :value="records.content"
        :subfield="false"
        :defaultOpen="'preview'"
        :toolbarsFlag="false"
        :editable="false"
        :scrollStyle="true"
        :ishljs="true"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      records: {},
    };
  },
  methods() {},
  mounted() {
    axios({
      method: "GET",
      url: `http://81.70.56.45:8083/menuItem/getbyName/${this.$route.query.name}`,
    }).then((res) => {
      this.records = res.data.data.records[res.data.data.records.length - 1];
    });
    this.frontSidebarStyle.height = this.frontSidebar.links.length * 60;

  },
  updated() {
    console.log(刷新)
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #333;
  line-height: 45px;
}
div{
  width: 90%;
  padding:0 ;
  margin: 0 auto;
  
  
}
div p{
  display: block;
 width: 100%;
 box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
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