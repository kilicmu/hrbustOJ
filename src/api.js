import axios from 'axios'
const BASE_RUL = "http://127.0.0.1:3000"


let api = {
    contest_init: contest_init,
    status_init: status_init,
    ajax: ajax
}

async function contest_init() {
    let url = "http://127.0.0.1:3000/json";
    return await ajax({ url: url });
}

async function status_init() {
    let url = "/api/status_init";
    return await ajax({ url: url });
}

function ajax(params) {
    let url = '';
    if (params.url) {
        url = params.url.startsWith('http') ? params.url : BASE_RUL + params.url;
    } else {
        throw new Error('url is not null');
    }
    let method = params.method || 'get';
    let data = method === 'post' ? params.data ? params.data : {} : null;

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