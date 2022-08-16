import http from "../utils/request";

const API = {
  // 用户当前是否登录状态
  islogin: "/sd-login/login/v1/islogin",
  getConfigInfo: "/sd-sxsx-manager/imageuploadtypesettings/v1/get/info", //获取配置信息
  getSfdkByUserId: "/sd-sxsx-manager/afterschoolinternshippunch/v1/getSfdkByUserId", //查询打卡状态
  save: "/sd-sxsx-manager/afterschoolinternshippunch/v1/manager/save", // 保存
  query: "/sd-sxsx-manager/afterschoolinternshippunch/v1/query", //查询打卡记录
  // 附件上传
  upload: "/sd-sxsx-manager/file/upload",
};

const methods = {};

Object.keys(API).forEach((key) => {
  methods[key] = (param = {}) => {
    return response(
      ((p) => {
        if (key === 'upload') {
          return http.post(API[key], p, {
            headers: { 'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryABTelD8ibTDEi0wD' }
          });
        } else {
          return http.post(API[key], p);
        }
      })(param)
    )
      .then((res) => [null, res])
      .catch((err) => [err, null]);
  };
});

function response (promise) {
  return new Promise((resovle, reject) => {
    promise
      .then((res) => {
        if (res.code == 1) {
          resovle(res);
          // return res.data;
        } else {
          reject(res);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });
}

export default methods;
