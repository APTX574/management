import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import register from '../views/register.vue'
import Income from '../views/Income.vue'
import login from '../views/login.vue'
import profile from "../views/profile.vue"
import addin from "../views/addin.vue"
import lookout from "../views/lookout.vue"
import addout from "../views/addout.vue"
import statistic from "../views/statistic.vue"
import setting from "../views/setting.vue"
import addbirthcheck from "../views/addbirthcheck.vue"
import skill from "../views/skill.vue"

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'login',
        component: login
    },
    {
        path: '/register',
        name: 'register',
        component: register
    },
    {
        path: '/index',
        name: 'index',
        component: index,
    },
    {
        path: '/Income',
        name: 'Income',
        component: Income
    },
    {
        path: '/profile',
        name: 'profile',
        component: profile
    },
    {
        path: '/addin',
        name: 'addin',
        component: addin
    },
    {
        path: '/lookout',
        name: 'lookout',
        component: lookout
    },
    {
        path: '/addout',
        name: 'addout',
        component: addout
    },
    {
        path: '/statistic',
        name: 'statistic',
        component: statistic
    },
    {
        path: '/setting',
        name: 'setting',
        component: setting
    },
    {
        path: '/addbirthcheck',
        name: 'addbirthcheck',
        component: addbirthcheck
    },
    {
        path: 'skill',
        name: 'skill',
        component: skill
    }
]

const router = new VueRouter({
    routes
})

export default router