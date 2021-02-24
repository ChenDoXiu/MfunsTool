import axios from "axios";
import qs from "qs";
import EventBus from "@/tool/event-bus";
let codeList = [404, 401, 403];

let instance = axios.create({
  timeout: 200 * 1000, // request timeout
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
});

instance.interceptors.request.use(
  config => {
    if (config.data && config.data.constructor != FormData) {
      config.data = qs.stringify(config.data); // 转为formdata数据格式
    }
    return config;
  },
  error => {
    Promise.error(error);
  }
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log(error);
    if (
      error.code === "ECONNABORTED" &&
      error.message.indexOf("timeout") !== -1
    ) {
      error.response = {
        status: "ECONNABORTED",
        statusText: "请求超时"
      };
    } else if (!codeList.includes(error.response.status)) {
      EventBus.$emit("snackbar", {
        text: "服务器出现问题，如果页面出现问题，请刷新浏览器" + error,
        color: "error"
      });
    } else {
      EventBus.$emit("snackbar", {
        text: error,
        color: "error"
      });
    }

    return Promise.reject(error);
  }
);
export default instance;