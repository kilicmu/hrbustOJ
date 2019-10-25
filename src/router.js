const routers = [{
        path: '/',
        meta: {
            title: 'content'
        },
        component: (resolve) => require(['./views/content.vue'], resolve)
    },
    {
        path: '/problems',
        component: (resolve) => require(['./views/problems.vue'], resolve),
    },
    {
        path: '/problem/:problem_id',
        component: (resolve) => require(['./views/answer.vue'], resolve),
    }
];
export default routers;