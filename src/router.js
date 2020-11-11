import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    //mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            redirect: "/index"
        },
        {
            path: '/index',
            name: 'home',
            component: Home,
            children: [{
                path: "skill",
                name: 'skill',
                component: function() { return import ("./views/Skill.vue") },
                children: [{
                    path: "",
                    name: "list",
                    component: function() { return import ("./components/List.vue") }
                }, {
                    path: "list",
                    name: "list",
                    component: function() { return import ("./components/List.vue") }
                }, {
                    path: "diary1",
                    name: "diary1",
                    component: function() { return import ("./views/diaryviews/diary01.vue") }
                }, {
                    path: "diary2",
                    name: "diary2",
                    component: function() { return import ("./views/diaryviews/diary02.vue") }
                }, {
                    path: "diary3",
                    name: "diary3",
                    component: function() { return import ("./views/diaryviews/diary03.vue") }
                }, {
                    path: "diary4",
                    name: "diary4",
                    component: function() { return import ("./views/diaryviews/diary04.vue") }
                }]
            }, {
                path: "tips",
                name: "Tips",
                component: function() { return import ("./views/Tips.vue") }
            }, {
                path: "photo",
                name: "photoWall",
                component: function() { return import ("./views/PhotoWall.vue") }
            }, {
                path: "movie",
                name: "movie",
                component: function() { return import ("./views/Movie.vue") }
            }]
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: function() {
                return import ( /* webpackChunkName: "about" */ './views/About.vue')
            }
        }
    ]
})