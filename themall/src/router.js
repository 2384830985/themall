import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    {
        path: '/',
        redirect: '/main/home',
    },
    {
        path: '/',
        name: 'main',
        component: resolve => require(['@/views/main'],resolve),
        children: [
            {
                path: '/main/home',
                name: 'home',
                component: resolve => require(['@/views/home'],resolve),
                meta: {
                    title: '门店列表',
                    abort: 0,
                }
            },
            {
                path: '/main/mine',
                name: 'mine',
                component: resolve => require(['@/views/mine'],resolve),
                meta: {
                    title: '我的',
                    abort: 1,
                }
            },
            {
                path: '/main/list/:id',
                name: 'list',
                component: resolve => require(['@/views/list'],resolve),
                meta: {
                    title: '列表',
                    abort: 0,
                }
            },
            {
                path: '/main/buyRecording',
                name: 'buyRecording',
                component: resolve => require(['@/views/buyRecording'],resolve),
                meta: {
                    title: '购买记录',
                    abort: 1,
                }
            },
            {
                path: '/main/winningRecording',
                name: 'winningRecording',
                component: resolve => require(['@/views/winningRecording'],resolve),
                meta: {
                    title: '中奖记录',
                    abort: 1,
                }
            },
        ]
    },
    {
        path: '/details/:id',
        name: 'details',
        component: resolve => require(['@/views/details'],resolve),
        meta: {
            title: '商品详情'
        }
    },
];

// add route path
routes.forEach(route => {
    route.path = route.path || '/' + (route.name || '');
});

const  router = new Router({ routes });

router.beforeEach((to, from, next) => {
    const title = to.meta && to.meta.title;
    if (title) {
        document.title = title;
    }
    next();
});

export default router;

