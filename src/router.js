const routers = [{
        path: '/',
        meta: {
            title: 'content'
        },
        component: (resolve) => require(['@/views/home/home.vue'], resolve)
    },
    {
        path: '/problems',
        component: (resolve) => require(['@/views/problems/problems.vue'], resolve),
    },
    {
        path: '/problems/:problem_id',
        component: (resolve) => require(['@/views/answer/answer.vue'], resolve),
    }
];
export default routers;