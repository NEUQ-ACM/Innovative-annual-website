<template>
  <div>
   <h1>{{records.title}}</h1>
   <p>{{records.content}}</p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      records:{}
    }
  },
  methods () {
  },
  mounted () {
    axios({
      method:'GET',
      url:`http://81.70.56.45:8083/menuItem/getbyName/${this.$route.query.name}`
    }).then(res=>{
      this.records=res.data.data.records[res.data.data.records.length-1]
    })
    this.frontSidebarStyle.height = this.frontSidebar.links.length * 60;
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