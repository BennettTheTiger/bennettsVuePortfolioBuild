import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Contact from './components/Contact.vue'
import About from './components/About.vue'
import Work from './components/Work.vue'
import Home from './components/Home.vue'
import Detail from './components/ProjectDetail.vue'

Vue.config.productionTip = false
//register global components

Vue.use(VueRouter)
//routes
const routes = [
  {path:'/',component:Work},
  {path:'/connect', component:Contact},
  {path:'/work', component:Work},
  {path:'/about', component:About},
  // for routes with named views, you have to define the `props` option for each named view:
  {
    path: '/details',
    name: 'details',
    component: Detail,
    props: {default:true},
  },
  {path:'*',component:Home}
  
];
//router
const router = new VueRouter({
  routes,
  mode: 'history',
  base: __dirname,
});

//vue app
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
