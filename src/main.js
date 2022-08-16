import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import * as filters from '@/utils/filters.js'
import {
  Button,
  Col,
  Row,
  Cell,
  CellGroup,
  Icon,
  Popup,
  Field
} from "vant";

Vue.use(Button)
  .use(Row)
  .use(Col)
  .use(CellGroup)
  .use(Cell)
  .use(Icon)
  .use(Popup)
  .use(Field)

import axios from "axios"
import VueAMap from 'vue-amap';
Vue.use(VueAMap);
let appData = ""
axios.get("static/static.json").then(res => {
  if (res.data) {
    appData = res.data
    console.log(appData);
    window._AMapSecurityConfig.securityJsCode = appData.SecurityKey
    VueAMap.initAMapApiLoader({
      key: appData.Key,
      plugin: ['AMap.ToolBar', 'AMap.Geolocation'],
      // 'AMap.Autocomplete','AMap.ToolBar', 'AMap.MapType','AMap.Scale',  'AMap.PlaceSearch', 'AMap.OverView',  'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geocoder'
      // 默认高德 sdk 版本为 1.4.4
      v: '1.4.4',
      uiVersion: '1.1'
    });
  }
});



Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])//插入过滤器名和对应方法
})
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')