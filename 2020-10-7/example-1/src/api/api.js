import axios from "axios";
let config = require("../config/config.js");
import Store from "@/store/store";

function isEmptyObject(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}
/**
 * Post请求（发送json）
 * @param {String} path 路径
 * @param {Object} params 参数
 * @return {Promise} 请求Promise
 */
function postJSON(path, params) {
  if (!isEmptyObject(Store.state.user)) {
    return axios({
      method: "post",
      url: config.url + path,
      data: params,
      headers: {
        "Content-Type": "application/json",
        Token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyaWQiOjEwMjQsIm5hbWUiOiJseSIsImV4cCI6MTYwNDgzNTQxOH0.AP29tMlMWUtikPII-OwkImb6Ft6B1_A93n27DXCTsgY"
      }
    });
  } else {
    return axios({
      method: "post",
      url: config.url + path,
      data: params,
      headers: {
        "Content-Type": "application/json",
        Token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyaWQiOjEwMjQsIm5hbWUiOiJseSIsImV4cCI6MTYwNDgzNTQxOH0.AP29tMlMWUtikPII-OwkImb6Ft6B1_A93n27DXCTsgY"
      }
    });
  }
}
export default {
  postJSON
};
