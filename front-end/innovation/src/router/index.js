import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import News from "../views/News"
import Gallery from "../views/Gallery"
import Organizer from "../views/Organizer"
import Login from '@/views/Login.vue'
import Arrangment from '@/views/Arrangment.vue'
import Itemlist from '@/views/ItemList.vue'
import BackstageLogin from '../views/Backstage/BackstageLogin.vue'
import Notice from '../views/Backstage/Notice.vue'
import Paper from '../views/Backstage/Paper.vue'
import Recommend from '../views/Backstage/Recommend.vue'
import Reform from '../views/Backstage/Reform.vue'
import Rotation from '../views/Backstage/Rotation.vue'
import Timeline from '../views/Backstage/Timeline.vue'
import IndexManage from '../views/Backstage/IndexManage.vue'
import Team from '../views/Backstage/Team.vue'
import RecommendDt from '../views/Backstage/RecommendDt.vue'
import RecommendNew from '../views/Backstage/RecommendNew.vue'
import NoticeEdit from '../views/Backstage/NoticeEdit.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Home'
},
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/News',
    name: 'News',
    component: News
  },
  {
    path: '/Gallery',
    name: 'Gallery',
    component: Gallery,
  },
  {
    path: '/Organizer',
    name: 'Organizer',
    component: Organizer
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Arrangment',
    name: 'Arrangment',
    component: Arrangment
  },
  {
    path: '/itemlist',
    name: 'Itemlist',
    component: Itemlist
  },
  {
    path: '/BackstageLogin',
    name: 'BackstageLogin',
    component: BackstageLogin
  },
  {
    path: '/Notice',
    name: 'Notice',
    component: Notice
  },
  {
    path: '/NoticeEdit',
    name: 'NoticeEdit',
    component: NoticeEdit
  },
  {
    path: '/Paper',
    name: 'Paper',
    component: Paper
  },
  {
    path: '/Recommend',
    name: 'Recommend',
    component: Recommend
  },
  {
    path: '/RecommendDt',
    name: 'RecommendDt',
    component: RecommendDt
  },
  {
    path: '/RecommendNew',
    name: 'RecommendNew',
    component: RecommendNew
  },
  {
    path: '/Reform',
    name: 'Reform',
    component: Reform
  },
  {
    path: '/Rotation',
    name: 'Rotation',
    component: Rotation
  },
  {
    path: '/Timeline',
    name: 'Timeline',
    component: Timeline
  },
  {
    path: '/IndexManage',
    name: 'IndexManage',
    component: IndexManage
  },
  {
    path: '/Team',
    name: 'Team',
    component: Team
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
