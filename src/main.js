// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import vuerouter from 'vue-router';
import Login from './components/LoginComponent.vue';
import Register from './components/RegisterComponent.vue';
import _interface from './components/UserInterface.vue';
import Showquizes from './components/ShowQuiz.vue'
import _GenerateQuiz  from './components/GenerateQuiz.vue';

Vue.config.productionTip = false
Vue.use(vuerouter);

const routes=[
  {
      path:'/login',
      component:Login
  },
  {
    path:'/',
    component:Register
  },
  {
    path:'/user',
    component:_interface
  },
  {
    path:'/show',
    component:Showquizes
  },
  {
    path:'/createquiz',
    component:_GenerateQuiz
  },
  
]
const router=new vuerouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
