import App from './App'
import Vue from 'vue'
import VueRouter from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faFilm, faTags, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VuePageTransition from 'vue-page-transition'

import Login from './components/pages/Login'
import Dashboard from './components/pages/Dashboard'
import Clips from './components/pages/Clips'
import Categories from './components/pages/Categories'


/* FONTAWESOME ICONS */
library.add(faHome)
library.add(faFilm)
library.add(faTags)
library.add(faSignInAlt);

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueMaterial)
Vue.use(VuePageTransition)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { name: 'Undefined', path: '/', component: Dashboard },
    { name: 'Dashboard', path: '/Dashboard', component: Dashboard },
    { name: 'Login', path: '/Login', component: Login },
    { name: 'Clips', path: '/Clips', component: Clips },
    { name: 'Categories', path: '/Categories', component: Categories },
  ]
}
)


new Vue({ el: '#app', router: router, render: h => h(App) })
