import axios from "axios";
let config = require('../config/config.js');
/**
 * Post请求（发送json）
 * @param {String} path 路径
 * @param {Object} params 参数
 * @return {Promise} 请求Promise
 */
function postJSON(path, params) {
    return axios({
        method: "post",
        url: config.url+path,
        data: params,
        header: {
            "Content-Type": "application/json",
        },
    })
}
export default {
  postJSON,
};
