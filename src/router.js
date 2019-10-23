const routers = [
    {
        path: '/',
        meta: {
            title: 'content'
        },
        component: (resolve) => require(['./views/content.vue'], resolve)
    },
    {
        path: '/problems',
        meta: {
            title: 'problems'
        },
        component: (resolve) => require(['./views/problems.vue'], resolve)
    }
];
export default routers;