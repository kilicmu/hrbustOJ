import axios from 'axios'
const BASE_RUL = "http://127.0.0.1:3000"


let api = {
    problems_init,
    contest_init,
    status_init,
    post_user_massage,
    query_user_by_username
}
async function query_user_by_username(username) {
    let url = "/api/serach_user";
    let data = { username };
    return await asyncRequest({ url, data });
}

async function post_user_massage(data) {
    let url = "/api/post_user_massage";
    return await asyncRequest({ url, data })
}

async function problems_init() {
    let url = "/api/problems_init";
    return await asyncRequest({ url });
}

async function contest_init() {
    let url = "/api/json";
    return await asyncRequest({ url });
}

async function status_init() {
    let url = "/api/status_init";
    return await asyncRequest({ url });
}

function asyncRequest(params) {
    let url = '';
    if (params.url) {
        url = params.url.startsWith('http') ? params.url : BASE_RUL + params.url;
    } else {
        throw new Error('url is not null');
    }
    let method = params.data ? 'POST' : 'GET';
    let data = method === 'POST' ? params.data ? params.data : {} : null;

    let config = {};
    config.method = method;
    if (data) { config.data = data };
    config.url = url;
    config.timeout = 10000;

    return new Promise((resolve, reject) => {
        axios(config).then(data => {
            resolve(data.data);
        }).catch(err => {
            reject(err);
        })
    })
}

export { api };