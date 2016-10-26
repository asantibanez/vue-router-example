
import Vue from 'vue/dist/vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter);

const RenderedByFunctionsComponent = {
    render: h => h('div', {id: 'element'}, [
        h('h1', {id: 'hi'}, 'Hello'),
        h('h1', 'Bye')
    ])
};

const TemplateRenderedCompoment = {
    template: `
        <div>Dashboard</div>
    `
};

import VueComponent from './VueComponent.vue';

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: App},
        { path: '/hyperscript', component: RenderedByFunctionsComponent},
        { path: '/template', component: TemplateRenderedCompoment},
        { path: '/component', component: VueComponent}
    ]
});

new Vue({
    router,
    template: `
        <div id="app">
            <router-link to="/">Home</router-link>
            <router-link to="/hyperscript">Hyperscript</router-link>
            <router-link to="/template">Template</router-link>
            <router-link to="/component">Component</router-link>
            <router-view></router-view>
        </div>
    `
}).$mount('#app');
