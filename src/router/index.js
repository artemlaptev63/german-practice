import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import ShowExercise from '@/pages/exercises/Show'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/exercises/:id',
      name: 'exercise',
      component: ShowExercise
    }
  ]
})
