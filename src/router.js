const routers = [{

    path: '/',
    meta: {
        title: 'content'
    }

    ,
    component: (resolve) => require(['@/views/home/home.vue'], resolve)
}

    ,
{
    path: '/problems',
    component: (resolve) => require(['@/views/problems/problems.vue'], resolve),
}

    ,
{
    path: '/problems/:problem_id',
    component: (resolve) => require(['@/views/answer/answer.vue'], resolve),
}

    ,
{
    path: '/contest',
    component: (resolve) => require(['@/views/contest/contest.vue'], resolve),
}

    ,
{
    path: '/status',
    component: (resolve) => require(['@/views/status/status.vue'], resolve),
}

    ,
{
    path: '/user/:uid',
    component: (resolve) => require(['@/views/user/user.vue'], resolve),
}
];
export default routers;