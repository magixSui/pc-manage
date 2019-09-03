import Vue from 'vue'
import Router from 'vue-router';
import Hello from './views/hello.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Hello
        }
    ]
});