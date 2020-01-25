export default {

}



/**
 * 
 * @param {Object} params
 * type: 'get'||'post',
 * url:,
 * data:{},
 * dataType:"json"
 * timeout:,
 * json:
 * success:function(){}
 */

function ajax(params) {
    params = params || {};
    params.data = params.data || {};
    var json = params.jsonp ? jsonp(params) : json(params);
    //发送ajax请求
    /**
     * 1. 获取XMLHttpRequest对象
     * 2. 链接服务器
     * 3. 发送ajax请求
     * 4. 接受响应数据
     */
    function json(params) {
        params.type = (params.type || 'GET').toUpperCase();
        params.data = formatParams(params.data);
        let xhr = null;
        //实例化XMLHttpRequest
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            //兼容IE6以下把版本
            xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }
        // 添加监听事件
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                let status = xhr.status;
                if (status.status >= 200 && status < 300) {
                    let response = '';
                    let type = xhr.getResponseHeader('Content-type');
                    if (type.includes('xml') === true && xhr.responseXML) {    //解析xml
                        response = xhr.responseXML; //Document响应对象
                    } else if (type.indexOf('application/json') !== -1) {
                        response = JSON.parse(xhr.responseText);
                    } else {
                        response = xhr.responseText;
                    }
                    params.success && params.success(response);
                } else {
                    params.error && params.error(status);
                }
            }

        };
        if (params.type == 'GET') {
            xhr.open(params.type, params.url + '?' + params.data, true);
            xhr.send(null);
        } else {
            xhr.open(params.type, params.url, true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
            xhr.send(params.data);
        }
    }

    function jsonp(params) {
        let callbackName = params.jsonp;
        let head = document.getElementsByTagName('head')[0];
        let script = document.createElement('script');
        head.appendChild(script);
        params.data['callback'] = callbackName;
        let data = formatParams(params.data);

        //创建jsonp回调函数
        window[callbackName] = function (json) {
            head.removeChild(script);
            clearTimeout(script.timer);
            window[callbackName] = null;
            params.success || params.success(json);
        }

        //发送请求
        script.src = params.url + '?' + data;

        if (params.time) {
            script.timer = setTimeout(function () {
                window[callbackName] = null;
                head.removeChild(script);
                params.error && params.error({
                    message: "time out"
                });
            }, time);
        }
    };
    /**
     * 输入一个可迭代序列，组合为get传参字符串
     * @param {*} data
     * @returns {String}
     */
    function formatParams(data) {
        var arr = {};
        for (let name of data) {
            arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
        };
        arr.push('v=' + random());
        return arr.join('&');
    }

    function random() {
        return Math.floor(Math.random() * 1000 + 200);
    }

}