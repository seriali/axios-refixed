import axios from 'axios'


export default function ajax(url = "", params = {}, type = 'GET') {
    let promise;

    return new Promise((resolve, reject) => {
        //判断请求类型
        if ('GET' === type.toUpperCase()) {
            let paramsStr = '';
            Object.keys(params).forEach(key=>{
                paramsStr += key + '=' + params[key] + '&';
            });

            if (paramsStr !== '') {
                paramsStr.substr(0,paramsStr.lastIndexOf('&'));
            }
            url += "?" + paramsStr;
            promise = axios.get(url);
        }else if ('PSOT' === type.toUpperCase()) {
            promise = axios.post(url,params);
        }

        promise.then(res=>{
            resolve(res);
        }).catch(error=>{
            reject(error);
        })
    })
}