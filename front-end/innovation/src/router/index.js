import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import News from "../views/News"
import Gallery from "../views/Gallery"
import Organizer from "../views/Organizer"
import Login from '@/views/Login.vue'
import Arrangment from '@/views/Arrangment.vue'
import Itemlist from '@/views/ItemList.vue'
import ItemDetail from '@/views/ItemDetail.vue'
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
import PaperDt from '../views/Backstage/PaperDt.vue'
import PaperNew from '../views/Backstage/PaperNew.vue'
import ReformDt from '../views/Backstage/ReformDt.vue'
import ReformNew from '../views/Backstage/ReformNew.vue'
import NoticeEdit from '../views/Backstage/NoticeEdit.vue'
import NoticeDetail from '../views/NoticeDetail'
import annex from '../views/Backstage/annex'
import Show1 from '../views/Show1.vue'
import Show2 from '../views/Show2.vue'
import Show3 from '../views/Show3.vue'
import ShowVote from '../views/ShowVote.vue'
import Vote from '../views/Vote.vue'
import UserLogin from '../views/UserLogin.vue'
import Navmenu from '../views/Backstage/Navmenu.vue'
import Addtplt from '../views/Backstage/Addtplt.vue'
import Template from '../views/Template.vue'
import VoteBack from '../views/Backstage/VoteBack.vue'
import NoticeNew from '../views/Backstage/NoticeNew.vue'
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
    children: [
      {
        path: '/Show1',
        name: 'Show1',
        component: Show1
      },
      {
        path: '/Show2',
        name: 'Show2',
        component: Show2
      },
      {
        path: '/Show3',
        name: 'Show3',
        component: Show3
      },
    ]
  },
  {
    path: '/Organizer',
    name: 'Organizer',
    component: Organizer
  },
  {
    path: '/NoticeNew',
    name: 'NoticeNew',
    component: NoticeNew
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
    path: '/itemdetail',
    name: 'ItemDetail',
    component: ItemDetail
  },
  {
    path: '/BackstageLogin',
    name: 'BackstageLogin',
    component: BackstageLogin
  },
  {
    path: '/Notice',
    name: 'Notice',
    component: Notice,
	beforeRouteEnter(to, from, next) {
	    if (to.name !== 'Login' && !window.sessionStorage.token) {next({ name: 'Login' })}
	  // 如果用户未能验证身份，则 `next` 会被调用两次
	else {next()}
	  },
  },
  {
    path: '/NoticeDetail',
    name: 'NoticeDetail',
    component: NoticeDetail
  },
  {
    path: '/NoticeEdit',
    name: 'NoticeEdit',
    component: NoticeEdit,
	beforeRouteEnter(to, from, next) {
	    if (to.name !== 'Login' && !window.sessionStorage.token) {next({ name: 'Login' })}
	  // 如果用户未能验证身份，则 `next` 会被调用两次
	else {next()}
	  },
  },
  {
    path: '/annex',
    name: 'annex',
    component: annex,
	beforeRouteEnter(to, from, next) {
	    if (to.name !== 'Login' && !window.sessionStorage.token) {next({ name: 'Login' })}
	  // 如果用户未能验证身份，则 `next` 会被调用两次
	else {next()}
	  },
  },
  {
    path: '/Paper',
    name: 'Paper',
    component: Paper,
	beforeRouteEnter(to, from, next) {
	    if (to.name !== 'Login' && !window.sessionStorage.token) {next({ name: 'Login' })}
	  // 如果用户未能验证身份，则 `next` 会被调用两次
	else {next()}
	  },
  },
  {
    path: '/Recommend',
    name: 'Recommend',
    component: Recommend,
	beforeRouteEnter(to, from, next) {
	    if (to.name !== 'Login' && !window.sessionStorage.token) {next({ name: 'Login' })}
	  // 如果用户未能验证身份，则 `next` 会被调用两次
	else {next()}
	  },
  },

  {
    path: '/Reform',
    name: 'Reform',
    component: Reform,
	beforeRouteEnter(to, from, next) {
		console.log('路由守卫生效')
	    if (to.name !== 'Login' && !window.sessionStorage.token) {next({ name: 'Login' })}
	  // 如果用户未能验证身份，则 `next` 会被调用两次
	else {next()}
	  },
  },
  {
    path: '/Rotation',
    name: 'Rotation',
    component: Rotation,
	beforeRouteEnter(to, from, next) {
	    if (to.name !== 'Login' && !window.sessionStorage.token) {next({ name: 'Login' })}
	  // 如果用户未能验证身份，则 `next` 会被调用两次
	else {next()}
	  },
  },
  {
    path: '/Timeline',
    name: 'Timeline',
    component: Timeline,
	beforeRouteEnter(to, from, next) {
	    if (to.name !== 'Login' && !window.sessionStorage.token) {next({ name: 'Login' })}
	  // 如果用户未能验证身份，则 `next` 会被调用两次
	else {next()}
	  },
  },
  {
    path: '/IndexManage',
    name: 'IndexManage',
    component: IndexManage
  },
  {
    path: '/Team',
    name: 'Team',
    component: Team,
	beforeRouteEnter(to, from, next) {
	    if (to.name !== 'Login' && !window.sessionStorage.token) {next({ name: 'Login' })}
	  // 如果用户未能验证身份，则 `next` 会被调用两次
	else {next()}
	  },
  }, {
    path: '/RecommendDt',
    name: 'RecommendDt',
    component: RecommendDt,
	beforeRouteEnter(to, from, next) {
	    if (to.name !== 'Login' && !window.sessionStorage.token) {next({ name: 'Login' })}
	  // 如果用户未能验证身份，则 `next` 会被调用两次
	else {next()}
	  },
  },
  {
    path: '/RecommendNew',
    name: 'RecommendNew',
    component: RecommendNew,
	beforeRouteEnter(to, from, next) {
	    if (to.name !== 'Login' && !window.sessionStorage.token) {next({ name: 'Login' })}
	  // 如果用户未能验证身份，则 `next` 会被调用两次
	else {next()}
	  },
  },
  {
    path: '/ReformDt',
    name: 'ReformDt',
    component: ReformDt,
	beforeRouteEnter(to, from, next) {
	    if (to.name !== 'Login' && !window.sessionStorage.token) {next({ name: 'Login' })}
	  // 如果用户未能验证身份，则 `next` 会被调用两次
	else {next()}
	  },
  },
  {
    path: '/ReformNew',
    name: 'ReformNew',
    component: ReformNew,
	beforeRouteEnter(to, from, next) {
	    if (to.name !== 'Login' && !window.sessionStorage.token) {next({ name: 'Login' })}
	  // 如果用户未能验证身份，则 `next` 会被调用两次
	else {next()}
	  },
  },
  {
    path: '/PaperDt',
    name: 'PaperDt',
    component: PaperDt,
	beforeRouteEnter(to, from, next) {
	    if (to.name !== 'Login' && !window.sessionStorage.token) {next({ name: 'Login' })}
	  // 如果用户未能验证身份，则 `next` 会被调用两次
	else {next()}
	  },
  },
  {
    path: '/PaperNew',
    name: 'PaperNew',
    component: PaperNew,
	beforeRouteEnter(to, from, next) {
	    if (to.name !== 'Login' && !window.sessionStorage.token) {next({ name: 'Login' })}
	  // 如果用户未能验证身份，则 `next` 会被调用两次
	else {next()}
	  },
  },
  {
    path: '/showvote',
    name: 'ShowVote',
    component: ShowVote
  },
  {
    path: '/vote',
    name: 'Vote',
    component: Vote
  },
  {
    path: '/userlogin',
    name: 'UserLogin',
    component: UserLogin
  },
  {
    path: '/Navmenu',
    name: 'Navmenu',
    component: Navmenu,
	beforeRouteEnter(to, from, next) {
	    if (to.name !== 'Login' && !window.sessionStorage.token) {next({ name: 'Login' })}
	  // 如果用户未能验证身份，则 `next` 会被调用两次
	else {next()}
	  },
  },
  {
    path: '/Addtplt',
    name: 'Addtplt',
    component: Addtplt,
	beforeRouteEnter(to, from, next) {
	    if (to.name !== 'Login' && !window.sessionStorage.token) {next({ name: 'Login' })}
	  // 如果用户未能验证身份，则 `next` 会被调用两次
	else {next()}
	  },
  },
  {
    path: '/Template',
    name: 'Template',
    component: Template
  },
  {
    path: '/VoteBack',
    name: 'VoteBack',
    component: VoteBack,
	beforeRouteEnter(to, from, next) {
	    if (to.name !== 'Login' && !window.sessionStorage.token) {next({ name: 'Login' })}
	  // 如果用户未能验证身份，则 `next` 会被调用两次
	else {next()}
	  },
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router