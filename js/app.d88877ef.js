(function(t){function e(e){for(var s,i,r=e[0],l=e[1],c=e[2],d=0,p=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==o[l]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},o={app:0},n=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/sxdk/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0f3a":function(t,e,a){"use strict";a("6dea")},1:function(t,e){},"1ed9":function(t,e,a){},"22af":function(t,e,a){t.exports=a.p+"img/blank.0bc9958e.png"},3452:function(t,e,a){},4140:function(t,e,a){"use strict";a("e74e")},"4da2":function(t,e,a){},5596:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var s={};a.r(s),a.d(s,"formatDate",(function(){return ne}));a("66b9");var o=a("b650"),n=(a("4d48"),a("d1e1")),i=(a("81e6"),a("9ffb")),r=(a("0653"),a("34e9")),l=(a("c194"),a("7744")),c=(a("c3a6"),a("ad06")),u=(a("8a58"),a("e41f")),d=(a("be7f"),a("565f")),p=a("2b0e"),f=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("van-tabbar",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[e("van-tabbar-item",{attrs:{icon:"location-o",to:"/"}},[t._v("打卡")]),e("van-tabbar-item",{attrs:{icon:"todo-list-o",to:"/history"}},[t._v("记录")])],1),e("router-view")],1)},m=[],h=(a("a52c"),a("2ed4")),g=(a("537a"),a("ac28"));p["default"].use(g["a"]),p["default"].use(h["a"]);var _={name:"App",data(){return{active:0}},mounted(){this.$route.fullPath.match("/history")&&(this.active=1)}},v=_,k=(a("0f3a"),a("2877")),w=Object(k["a"])(v,f,m,!1,null,null,null),y=w.exports,b=a("8c4f"),x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"page_view"},[e("keep-alive",[t.$route.meta.keepAlive?e("router-view"):t._e()],1),t.$route.meta.keepAlive?t._e():e("router-view")],1)},C=[],j={},z=Object(k["a"])(j,x,C,!1,null,null,null),P=z.exports,L=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[t.config.gzcjz_type?e("van-row",{staticClass:"card-uploader"},[e("van-col",{staticClass:"caption-img",attrs:{span:"24"}},[t._v(t._s(t.config.gzcjz_name))]),e("van-col",{attrs:{span:"24"}},[e("van-field",{scopedSlots:t._u([{key:"input",fn:function(){return[e("van-uploader",{attrs:{"before-read":t.asyncBeforeRead,"after-read":t.afterRead1,"before-delete":t.beforeDelete,multiple:"","max-count":3},model:{value:t.scene_uploader,callback:function(e){t.scene_uploader=e},expression:"scene_uploader"}})]},proxy:!0}],null,!1,3299505288)})],1)],1):t._e(),t.config.hsjc_type?e("van-row",{staticClass:"card-uploader"},[e("van-col",{staticClass:"caption-img",attrs:{span:"24"}},[t._v(t._s(t.config.hsjc_name))]),e("van-col",{attrs:{span:"24"}},[e("van-field",{attrs:{name:"uploader"},scopedSlots:t._u([{key:"input",fn:function(){return[e("van-uploader",{attrs:{"before-read":t.asyncBeforeRead,"after-read":t.afterRead2,"before-delete":t.beforeDelete,multiple:"","max-count":3},model:{value:t.screenshot_uploader,callback:function(e){t.screenshot_uploader=e},expression:"screenshot_uploader"}})]},proxy:!0}],null,!1,799440729)})],1)],1):t._e(),t.config.jkm_type?e("van-row",{staticClass:"card-uploader"},[e("van-col",{staticClass:"caption-img",attrs:{span:"24"}},[t._v(t._s(t.config.jkm_name))]),e("van-col",{attrs:{span:"24"}},[e("van-field",{attrs:{name:"uploader"},scopedSlots:t._u([{key:"input",fn:function(){return[e("van-uploader",{attrs:{"before-read":t.asyncBeforeRead,"after-read":t.afterRead3,"before-delete":t.beforeDelete,multiple:"","max-count":3},model:{value:t.code_uploader,callback:function(e){t.code_uploader=e},expression:"code_uploader"}})]},proxy:!0}],null,!1,2055140025)})],1)],1):t._e(),t.config.qt_type?e("van-row",{staticClass:"card-uploader"},[e("van-col",{staticClass:"caption-img",attrs:{span:"24"}},[t._v(t._s(t.config.qt_name))]),e("van-col",{attrs:{span:"24"}},[e("van-field",{attrs:{name:"uploader"},scopedSlots:t._u([{key:"input",fn:function(){return[e("van-uploader",{attrs:{"before-read":t.asyncBeforeRead,"after-read":t.afterRead4,"before-delete":t.beforeDelete,multiple:"","max-count":3},model:{value:t.qt_uploader,callback:function(e){t.qt_uploader=e},expression:"qt_uploader"}})]},proxy:!0}],null,!1,2399784342)})],1)],1):t._e(),e("LocationVue",{attrs:{locationval:t.location},on:{"update:locationval":function(e){t.location=e}}}),e("div",{staticClass:"remark"},[e("van-row",[e("van-col",{staticClass:"caption-remark",attrs:{span:"24"}},[t._v("备注")])],1),e("van-field",{attrs:{name:"remark",rows:"2",autosize:"",type:"textarea",maxlength:"140","show-word-limit":"",placeholder:"请输入备注(最大字数限制140字)"},model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}})],1),e("div",{staticClass:"submit"},[e("van-button",{attrs:{color:"#0080fe",block:"",round:""},on:{click:t.onSubmit}},[t._v(" 提交 ")])],1)],1)},O=[],I=(a("e7e5"),a("d399")),S=(a("e930"),a("8f80")),R=(a("e17f"),a("2241")),q=a("bc3a"),N=a.n(q),T=a("4328"),D=a.n(T),M=a("2f62"),A=a("852e"),B=a.n(A);const E='zzszhxy-token"';function $(){return B.a.get(E)}function K(t){return B.a.set(E,t)}function U(){return B.a.remove(E)}p["default"].use(M["a"]);const F=new M["a"].Store({state:{token:$(),cache:{}},mutations:{SET_TOKEN:(t,e)=>{t.token=e},setCache:(t,{name:e,position:a})=>{t.cache[e]=a},clearCache:(t,{name:e,position:a})=>{t.cache[e]=a}},getters:{token:t=>t.token,getCache:t=>t.cache},actions:{Login({commit:t}){return new Promise((e,a)=>{W.islogin().then(([s,o])=>{console.log("Login res",o),console.log("Login err",s),1==o.code?(K(o.token),t("SET_TOKEN",o.token),e()):a()}).catch(t=>{a(t)})})},LogOut({commit:t}){return new Promise(e=>{t("SET_TOKEN",""),U(),e()})}}});var G=F;p["default"].use(I["a"]);const H=N.a.create({timeout:6e4});H.interceptors.request.use(t=>{if(t.headers["zzszhxy-token"]=$(),"post"===t.method){const e=t.headers["Content-Type"];return e&&0==e.indexOf("multipart/form-data")||(t.data=D.a.stringify(t.data,{arrayFormat:"repeat",allowDots:!0})),t}},t=>(console.log("interceptors",t),Promise.reject(t))),H.interceptors.response.use(t=>{let e=t.request.responseURL.match(t.config.url);if(null!=e)return t.data;G.dispatch("LogOut").then(()=>{window.location.href="/sd-login/loginRedirect?linkUrl="+window.location.pathname})},t=>Promise.reject(t));var J=H;const Z={islogin:"/sd-login/login/v1/islogin",getConfigInfo:"/sd-sxsx-manager/imageuploadtypesettings/v1/get/info",getSfdkByUserId:"/sd-sxsx-manager/afterschoolinternshippunch/v1/getSfdkByUserId",save:"/sd-sxsx-manager/afterschoolinternshippunch/v1/manager/save",query:"/sd-sxsx-manager/afterschoolinternshippunch/v1/query",upload:"/sd-sxsx-manager/file/upload"},V={};function Y(t){return new Promise((e,a)=>{t.then(t=>{1==t.code?e(t):a(t)}).catch(t=>{console.log(t)})})}Object.keys(Z).forEach(t=>{V[t]=(e={})=>Y((e=>"upload"===t?J.post(Z[t],e,{headers:{"Content-Type":"multipart/form-data; boundary=----WebKitFormBoundaryABTelD8ibTDEi0wD"}}):J.post(Z[t],e))(e)).then(t=>[null,t]).catch(t=>[t,null])});var W=V,Q=function(){var t=this,e=t._self._c;return e("div",{staticClass:"location"},[e("van-row",[e("van-col",{attrs:{span:"12"}},[t._v("当前位置")]),e("van-col",{staticClass:"btnText btnText-right",attrs:{span:"12"}},[e("span",{on:{click:t.onGetLocation}},[e("van-icon",{attrs:{name:"location-o"}}),t._v("定位 ")],1)]),t.showLoad?e("van-col",{staticClass:"location-text",attrs:{span:"24"}},[e("van-loading",{attrs:{size:"24px"}},[t._v("获取定位...")])],1):t._e(),t.selectName?e("van-col",{staticClass:"location-text",attrs:{span:"24"}},[t._v(" "+t._s(t.selectName)+" "),t.selectItem.address?e("span",[t._v("-")]):t._e(),t._v(" "+t._s(t.selectItem.address)+" "),e("span",{staticClass:"btnText",on:{click:t.onResetPosition}},[t._v("地点微调")])]):t._e()],1),e("van-popup",{style:{height:"100%"},attrs:{position:"bottom","lazy-render":t.lazyrender},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e("div",{staticClass:"mapbox"},[e("el-amap",{key:t.timer,staticClass:"amap-box",attrs:{"amap-manager":t.amapManager,vid:"amap-vue",zoom:t.zoom,plugin:t.plugin,center:t.center,events:t.events}},t._l(t.markers,(function(t,a){return e("el-amap-marker",{key:a,attrs:{position:t}})})),1)],1),e("div",{staticClass:"option"},[e("van-search",{attrs:{placeholder:"请输入地点","show-action":"",type:"round"},scopedSlots:t._u([{key:"action",fn:function(){return[e("div",{on:{click:t.onConfirm}},[t._v("确定")])]},proxy:!0}]),model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}}),e("van-cell-group",{staticClass:"cellgroup"},t._l(t.curList,(function(a,s){return e("van-cell",{key:s,class:{active:t.selectName==a.value},attrs:{title:a.value,label:a.address},on:{click:function(e){return t.onClickPopupItem(a)}},scopedSlots:t._u([t.selectName==a.value?{key:"right-icon",fn:function(){return[e("van-icon",{staticClass:"success-icon",attrs:{name:"success",color:"#0080FE"}})]},proxy:!0}:null],null,!0)})})),1)],1)])],1)},X=[],tt=(a("5852"),a("d961")),et=(a("ac1e"),a("543e")),at=a("8f9b"),st=a.n(at);p["default"].use(et["a"]),p["default"].use(tt["a"]);let ot=new at["AMapManager"];var nt={name:"ZzMonorepoLocation",data(){let t=this;return{timer:"",show:!1,showLoad:!1,lazyrender:!0,selectName:"",selectItem:"",restaurants:[],address:null,searchKey:"",amapManager:ot,markers:[],center:[113.563111,34.819869],zoom:16,lng:0,lat:0,events:{init(){console.log("init")},geolocation(){console.log("定位完成")}},plugin:[{pName:"Geolocation",showButton:!0,showMarker:!0,showCircle:!0,panToLocation:!0,events:{init(e){e.getCurrentPosition((e,a)=>{if(console.log(e,a),"error"===e&&(alert("已拒绝获取地理位置的请求: "+a.message),t.$router.go(-1)),a&&a.position){t.markers=[];let{lng:e,lat:s}=a.position;t.lng=e,t.lat=s,t.center=[e,s],t.markers.push([e,s])}}),AMap.event.addListener(e,"complete",e=>{t.markers=[],t.selectName=e.formattedAddress,t.selectItem={address:"",value:e.formattedAddress,location:e.position};let{lng:a,lat:s}=e.position;t.lng=a,t.lat=s,t.center=[a,s],t.markers.push([a,s]),console.log("重置定位");let o=new AMap.Geocoder({radius:500,extensions:"all"});o.getAddress([a,s],(function(e,a){"complete"===e&&"OK"===a.info?a&&a.regeocode&&(console.log(a.regeocode),t.showLoad=!1,t.restaurants=a.regeocode.pois.map(t=>({address:t.address,value:t.name,location:t.location})),t.curList=t.restaurants,t.address=a.regeocode.aois[0].name,t.$nextTick()):(console.log("errinfo",e),t.$toast("定位失败，请稍后刷新重试"),t.showLoad=!1)}))}),AMap.event.addListener(e,"error",e=>{t.showLoad=!1})}}},{pName:"ToolBar",events:{init(t){}}}]}},computed:{curList:{get(){const t=this.restaurants,e=this.searchKey?t.filter(this.createFilter(this.searchKey)):t;return e},set(t){}}},mounted(){},watch:{markers:{handler(t){const e=this.selectItem.address?"-"+this.selectItem.address:"",a=this.selectItem.value+e;console.log(a),this.$emit("update:locationval",a)}}},methods:{testGeolocation(){function t(t){alert("纬度: "+t.coords.latitude+"\n经度: "+t.coords.longitude+"\n海拔: "+t.coords.altitude+"\n水平精度: "+t.coords.accuracy+"\n垂直精度: "+t.coords.altitudeAccura)}function e(t){switch(t.code){case t.PERMISSION_DENIED:alert("已拒绝获取地理位置的请求");break;case t.POSITION_UNAVAILABLE:alert("位置信息是不可用的");break;case t.TIMEOUT:alert("请求您的地理位置超时");break;case t.UNKNOWN_ERROR:alert("未知错误");break}}navigator.geolocation?navigator.geolocation.getCurrentPosition(t,e):alert("您的浏览器不支持使用HTML 5来获取地理位置服务")},onClickPopupItem(t){console.log(t),this.selectName=t.value,this.selectItem=t,this.markers=[];let{lng:e,lat:a}=t.location;this.lng=e,this.lat=a,this.center=[e,a],this.markers.push([e,a])},onResetPosition(){this.show=!0,document.title="位置微调"},createFilter(t){return e=>0===e.value.toLowerCase().indexOf(t.toLowerCase())},onConfirm(){this.show=!1,document.title="校外实习打卡",this.searchKey=""},onGetLocation(){this.selectName?(console.log("刷新定位"),this.timer=(new Date).getTime()):(this.lazyrender=!1,this.showLoad=!0)}}},it=nt,rt=(a("d871"),Object(k["a"])(it,Q,X,!1,null,"2a4b5d96",null)),lt=rt.exports;p["default"].use(R["a"]),p["default"].use(S["a"]),p["default"].use(o["a"]),p["default"].use(I["a"]);var ct={name:"ZzMonorepoHome",components:{LocationVue:lt,[R["a"].Component.name]:R["a"].Component},data(){return{scene_uploader:[],scene_filePath:[],screenshot_uploader:[],screenshot_filePath:[],code_uploader:[],code_filePath:[],qt_uploader:[],qt_filePath:[],uploader:[],config:{cjr:"",cjsj:"",gzcjz_name:"",gzcjz_type:"",hsjc_name:"",hsjc_type:"",id:"",jkm_name:"",jkm_type:"",positioning:"",qt_name:"",qt_type:"",remark:"",schoolid:"",ssdw:"",whsj:""},location:"",remark:""}},mounted(){document.title="校外实习打卡",this._getConfigInfo()},methods:{async _getConfigInfo(){const[t,e]=await W.getConfigInfo();t||1===e.code&&(console.log(e),this.config=e.info)},async afterRead1(t){console.log(t),t.status="uploading",t.message="上传中...",console.log(t.file);let e=new FormData;e.append("file",t.file);let[a,s]=await W.upload(e);a||1===s.code&&s.url&&(t.status="",this.scene_filePath.push(s.url))},async afterRead2(t){console.log(t),t.status="uploading",t.message="上传中...",console.log(t.file);let e=new FormData;e.append("file",t.file);let[a,s]=await W.upload(e);a||1===s.code&&s.url&&(t.status="",this.screenshot_filePath.push(s.url))},async afterRead3(t){console.log(t),t.status="uploading",t.message="上传中...",console.log(t.file);let e=new FormData;e.append("file",t.file);let[a,s]=await W.upload(e);a||1===s.code&&s.url&&(t.status="",this.code_filePath.push(s.url))},async afterRead4(t){console.log(t),t.status="uploading",t.message="上传中...",console.log(t.file);let e=new FormData;e.append("file",t.file);let[a,s]=await W.upload(e);a||1===s.code&&s.url&&(t.status="",this.qt_filePath.push(s.url))},asyncBeforeRead(t){return new Promise((e,a)=>{const s="image/jpeg"===t.type,o="image/png"===t.type,n=t.size/1024/1024<5;s||o?n?e(t):(this.$toast("图片过大!"),a()):(this.$toast("图片只能是 JPG/PNG 格式!"),a())})},beforeDelete(t,e){return console.log(t),console.log(e),!0},async onSubmit(){const t={remark:this.remark,positioning:this.location,files_gzcjz_ids:this.scene_filePath.toString(),files_hsjc_ids:this.screenshot_filePath.toString(),files_jkm_ids:this.code_filePath.toString(),files_qt_ids:this.qt_filePath.toString()};console.log(t);const[e,a]=await W.save(t);e?this.$toast(e.msg):1===a.code&&R["a"].alert({title:"",message:"提交成功"}).then(()=>{this.$router.push("/")})}}},ut=ct,dt=(a("baf3"),Object(k["a"])(ut,L,O,!1,null,"00f2441e",null)),pt=dt.exports,ft=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"text",class:{iscard:!t.status}},[t._v(" 您今天"+t._s(t._f("FormStatus")(t.status))+"打卡 ")]),t.date?e("div",{staticClass:"textdate"},[t._v(t._s(t.date))]):t._e(),e("Round",{staticClass:"round",attrs:{text:t.statustext,status:t.status},on:{click:t.onCard}})],1)},mt=[],ht=function(){var t=this,e=t._self._c;return e("div",{staticClass:"round"},[e("div",{staticClass:"box"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.status,expression:"status"}],staticClass:"pulse"}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.status,expression:"status"}],staticClass:"am"}),t.status?e("div",{staticClass:"map",on:{click:t.onClick}},[t._v(t._s(t.text))]):e("div",{staticClass:"map map2"},[e("van-icon",{attrs:{name:"success"}})],1)])])},gt=[],_t={name:"Round",props:{text:String,status:Number},data(){return{}},mounted(){},methods:{onClick(t){this.$emit("click",t)}}},vt=_t,kt=(a("8007"),Object(k["a"])(vt,ht,gt,!1,null,"14ce98ec",null)),wt=kt.exports,yt={name:"SxsxH5ClockIn",components:{Round:wt},data(){return{statustext:"打卡",active:0,status:1,date:""}},filters:{FormStatus(t){return t?"未":"已"}},mounted(){this._getSfdkByUserId()},methods:{async _getSfdkByUserId(){const[t,e]=await W.getSfdkByUserId();t&&(console.log(t.msg),this.date=t.msg,this.status=0,this.$toast(t.msg)),1===e.code&&(console.log(e),e.data?(this.date=e.data,this.status=0):(this.date=e.data,this.status=1))},onCard(){this.$router.push("home"),console.log("打卡")}}},bt=yt,xt=(a("c339"),Object(k["a"])(bt,ft,mt,!1,null,"19370821",null)),Ct=xt.exports,jt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"his"},[e("div",{staticClass:"title"},[t._v("打卡记录")]),e("ZzList",{attrs:{URL:t.url,params:t.params},scopedSlots:t._u([{key:"default",fn:function({item:a}){return[e("van-row",{staticClass:"card",on:{click:function(e){return t.toDetail(a.ID)}}},[e("van-col",{staticClass:"date",attrs:{span:"24"}},[e("span",[t._v(t._s(a.DKSJ))]),e("span",{staticClass:"location"})]),e("van-col",{staticClass:"tip",attrs:{span:"24"}},[t._v(" 打卡地点 ")]),e("van-col",{staticClass:"text",attrs:{span:"24"}},[t._v(" "+t._s(a.POSITIONING)+" ")])],1)]}}])})],1)},zt=[],Pt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container-list"},[t._t("header"),e("van-pull-refresh",{attrs:{"success-text":"刷新成功"},on:{refresh:t.onRefresh},model:{value:t.isRefreshLoading,callback:function(e){t.isRefreshLoading=e},expression:"isRefreshLoading"}},[e("van-list",{staticClass:"panel",attrs:{finished:t.finished,"loading-text":" ","finished-text":""+(t.items.length>0?"没有更多了":""),"immediate-check":!1},on:{load:t._getList},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[t.items.length>0?e("div",t._l(t.items,(function(a,s){return e("div",{key:s},[t._t("default",null,{item:a})],2)})),0):e("Blank",{staticClass:"panel blank",attrs:{message:t.msg}})],1)],1)],2)},Lt=[],Ot=(a("ab71"),a("58e6")),It=(a("2994"),a("2bdd")),St=(a("4056"),a("44bf")),Rt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("van-row",{staticClass:"blank",attrs:{type:"flex",justify:"space-around"}},[e("van-col",{attrs:{span:"10"}},[e("van-image",{attrs:{src:t.blank_img}})],1),e("van-col",{staticClass:"blank_text",attrs:{span:"18"}},[t._v(t._s(t.message))])],1)],1)},qt=[],Nt={name:"Blank",data(){return{blank_img:a("22af")}},props:{message:{type:String,default:"暂无数据"}}},Tt=Nt,Dt=(a("ed50"),Object(k["a"])(Tt,Rt,qt,!1,null,"11166687",null)),Mt=Dt.exports;p["default"].use(St["a"]),p["default"].use(It["a"]),p["default"].use(Ot["a"]);var At={components:{Blank:Mt},name:"zz-list",props:{URL:String,params:Object},data(){return{isRefreshLoading:!1,loading:!1,finished:!1,page:1,rows:10,items:[],msg:""}},watch:{URL:{handler(){this._getList()},immediate:!0}},methods:{onRefresh(){console.log("OnResfsh..."),this.items=[],this.page=1,this.loading=!0,this.finished=!1,this._getList()},async _getList(){console.log("list start",this.URL),this.msg="加载中...";const t={page:this.page,rows:this.rows,...this.params};if(W[this.URL]){const[e,a]=await W[this.URL](t);if(e)return;if(!a.page.record)return this.items=[],this.finished=!0,this.loading=!1,this.isRefreshLoading=!1,void(this.msg="暂无数据");this.items.push(...a.page.record),this.finished=this.items.length>=a.page.total,this.loading=!1,this.isRefreshLoading=!1,this.page++,this.msg="暂无数据"}else console.log("未找到接口数据"),this.items=[],this.finished=!0,this.loading=!1,this.isRefreshLoading=!1,this.msg="暂无数据"}}},Bt=At,Et=(a("634a"),Object(k["a"])(Bt,Pt,Lt,!1,null,"699bcb72",null)),$t=Et.exports,Kt={name:"SxsxH5History",components:{ZzList:$t},data(){return{url:"query",params:{}}},mounted(){},methods:{toDetail(t){this.$router.push({name:"Detail",params:{id:t}})}}},Ut=Kt,Ft=(a("c100"),Object(k["a"])(Ut,jt,zt,!1,null,"1c337134",null)),Gt=Ft.exports,Ht=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[t.config.gzcjz_type?e("van-row",{staticClass:"card-uploader"},[e("van-col",{staticClass:"caption-img",attrs:{span:"24"}},[t._v(t._s(t.config.gzcjz_name))]),e("van-col",{staticClass:"imggroup",attrs:{span:"24"}},[e("van-row",{attrs:{gutter:"10"}},t._l(t.scene_filePath,(function(a,s){return a.id?e("van-col",{key:s,attrs:{span:"8"}},[e("van-image",{attrs:{width:"100%",fit:"cover",src:a.url},on:{click:function(e){return t.showImg(e)}}})],1):t._e()})),1)],1)],1):t._e(),t.config.hsjc_type?e("van-row",{staticClass:"card-uploader"},[e("van-col",{staticClass:"caption-img",attrs:{span:"24"}},[t._v(t._s(t.config.hsjc_name))]),e("van-col",{staticClass:"imggroup",attrs:{span:"24"}},[e("van-row",{attrs:{gutter:"10"}},t._l(t.screenshot_filePath,(function(a,s){return a.id?e("van-col",{key:s,attrs:{span:"8"}},[e("van-image",{attrs:{width:"100%",fit:"cover",src:a.url},on:{click:function(e){return t.showImg(e)}}})],1):t._e()})),1)],1)],1):t._e(),t.config.jkm_type?e("van-row",{staticClass:"card-uploader"},[e("van-col",{staticClass:"caption-img",attrs:{span:"24"}},[t._v(t._s(t.config.jkm_name))]),e("van-col",{staticClass:"imggroup",attrs:{span:"24"}},[e("van-row",{attrs:{gutter:"10"}},t._l(t.code_filePath,(function(a,s){return a.id?e("van-col",{key:s,attrs:{span:"8"}},[e("van-image",{attrs:{width:"100%",fit:"cover",src:a.url},on:{click:function(e){return t.showImg(e)}}})],1):t._e()})),1)],1)],1):t._e(),t.config.qt_type?e("van-row",{staticClass:"card-uploader"},[e("van-col",{staticClass:"caption-img",attrs:{span:"24"}},[t._v(t._s(t.config.qt_name))]),e("van-col",{staticClass:"imggroup",attrs:{span:"24"}},[e("van-row",{attrs:{gutter:"10"}},t._l(t.qt_filePath,(function(a,s){return a.id?e("van-col",{key:s,attrs:{span:"8"}},[e("van-image",{attrs:{width:"100%",fit:"cover",src:a.url},on:{click:function(e){return t.showImg(e)}}})],1):t._e()})),1)],1)],1):t._e(),e("div",{staticClass:"remark remarkpo"},[e("van-row",[e("van-col",{staticClass:"caption-remark",attrs:{span:"24"}},[t._v("位置信息")])],1),e("van-field",{attrs:{name:"remark",rows:"2",autosize:"",disabled:"",type:"textarea"},model:{value:t.location,callback:function(e){t.location=e},expression:"location"}})],1),e("div",{staticClass:"remark"},[e("van-row",[e("van-col",{staticClass:"caption-remark",attrs:{span:"24"}},[t._v("备注")])],1),e("van-field",{attrs:{name:"remark",rows:"2",autosize:"",disabled:"",type:"textarea"},model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}})],1)],1)},Jt=[],Zt=(a("4662"),a("28a2"));function Vt(t){return J({url:"/sd-sxsx-manager/afterschoolinternshippunch/v1/get/"+t,method:"post"})}p["default"].use(Zt["a"]),p["default"].use(S["a"]);var Yt={name:"ZzMonorepoHome",data(){return{imgPreview:{img:"",show:!1},id:"",scene_filePath:[],screenshot_filePath:[],code_filePath:[],qt_filePath:[],location:"",remark:"",config:{cjr:"",cjsj:"",gzcjz_name:"",gzcjz_type:"",hsjc_name:"",hsjc_type:"",id:"",jkm_name:"",jkm_type:"",positioning:"",qt_name:"",qt_type:"",remark:"",schoolid:"",ssdw:"",whsj:""}}},mounted(){document.title="查看详情",this._getConfigInfo(),this._internshippunch()},methods:{async _getConfigInfo(){const[t,e]=await W.getConfigInfo();t||1===e.code&&(console.log(e),this.config=e.info)},async _internshippunch(){const{code:t,msg:e}=await Vt(this.$route.params.id);if(-1===t)return;console.log(e);const a="/sd-sxsx-manager/file/img?files=";this.location=e.positioning,this.remark=e.remark,this.scene_filePath=[{id:e.gzcjz_one_id,url:a+e.gzcjz_one_id},{id:e.gzcjz_two_id,url:a+e.gzcjz_two_id},{id:e.gzcjz_three_id,url:a+e.gzcjz_three_id}],this.screenshot_filePath=[{id:e.hsjc_one_id,url:a+e.hsjc_one_id},{id:e.hsjc_two_id,url:a+e.hsjc_two_id},{id:e.hsjc_three_id,url:a+e.hsjc_three_id}],this.code_filePath=[{id:e.jkm_one_id,url:a+e.jkm_one_id},{id:e.jkm_two_id,url:a+e.jkm_two_id},{id:e.jkm_three_id,url:a+e.jkm_three_id}],this.qt_filePath=[{id:e.qt_one_id,url:a+e.qt_one_id},{id:e.qt_two_id,url:a+e.qt_two_id},{id:e.qt_three_id,url:a+e.qt_three_id}]},showImg(t){"IMG"==t.target.tagName&&(this.imgPreview.img=t.target.src,Object(Zt["a"])({images:[t.target.src],startPosition:0,closeable:!0,showIndex:!1}))}}},Wt=Yt,Qt=(a("4140"),Object(k["a"])(Wt,Ht,Jt,!1,null,"b7d3ddf6",null)),Xt=Qt.exports;p["default"].use(b["a"]);const te=[{path:"/",component:Ct,meta:{title:"校外实习打卡"}},{path:"/home",component:pt,meta:{title:"校外实习打卡"}},{path:"/history",component:P,redirect:"/history/list",children:[{path:"list",name:"History",component:Gt,meta:{keepAlive:!0,deep:1,title:"打卡记录"}},{path:"detail/:id",name:"Detail",component:Xt,meta:{keepAlive:!1,deep:2,title:"查看详情"}}]}],ee=new b["a"]({mode:"hash",routes:te});ee.beforeEach((t,e,a)=>{const s=t.meta&&t.meta.title;s&&(document.title=s),a()});var ae=ee,se=a("5a0c"),oe=a.n(se);const ne=t=>{if(t)return oe()(t).format("YYYY-MM-DD HH:mm")};p["default"].use(o["a"]).use(n["a"]).use(i["a"]).use(r["a"]).use(l["a"]).use(c["a"]).use(u["a"]).use(d["a"]),p["default"].use(st.a);let ie="";N.a.get("static/static.json").then(t=>{t.data&&(ie=t.data,console.log(ie),window._AMapSecurityConfig.securityJsCode=ie.SecurityKey,st.a.initAMapApiLoader({key:ie.Key,plugin:["AMap.ToolBar","AMap.Geolocation"],v:"1.4.4",uiVersion:"1.1"}))}),Object.keys(s).forEach(t=>{p["default"].filter(t,s[t])}),p["default"].config.productionTip=!1,new p["default"]({router:ae,render:t=>t(y)}).$mount("#app")},5790:function(t,e,a){},"634a":function(t,e,a){"use strict";a("5596")},"640c":function(t,e,a){},"6dea":function(t,e,a){},8007:function(t,e,a){"use strict";a("640c")},9528:function(t,e,a){},baf3:function(t,e,a){"use strict";a("9528")},c100:function(t,e,a){"use strict";a("5790")},c339:function(t,e,a){"use strict";a("1ed9")},d871:function(t,e,a){"use strict";a("4da2")},e74e:function(t,e,a){},ed50:function(t,e,a){"use strict";a("3452")}});
//# sourceMappingURL=app.d88877ef.js.map