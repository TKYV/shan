(function(t){function e(e){for(var a,l,i=e[0],s=e[1],c=e[2],u=0,d=[];u<i.length;u++)l=i[u],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&d.push(o[l][0]),o[l]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(a=!1)}a&&(r.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},o={app:0},r=[];function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var p=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},r=[],l=n("2877"),i={},s=Object(l["a"])(i,o,r,!1,null,null,null),c=s.exports,p=n("8c4f"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-login"},[n("van-nav-bar",{attrs:{title:"登 录"}}),n("van-cell-group",{staticStyle:{"text-align":"center",margin:"30px"}},[n("van-image",{attrs:{width:"10rem",height:"10rem",src:"https://img01.yzcdn.cn/vant/cat.jpeg"},scopedSlots:t._u([{key:"loading",fn:function(){return[n("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0},{key:"error",fn:function(){return[t._v("加载失败")]},proxy:!0}])})],1),n("van-form",[n("van-cell-group",[n("van-field",{attrs:{label:"手机号",placeholder:"请输入手机号"}}),n("van-field",{attrs:{label:"验证码",placeholder:"请输入验证码"}},[n("van-button",{staticClass:"p5",attrs:{slot:"button",size:"mini",type:"primary"},slot:"button"},[t._v(" 发送验证码 ")])],1)],1),n("div",{staticStyle:{margin:"16px"}},[n("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[t._v("提交")])],1)],1)],1)},d=[],f={},m=Object(l["a"])(f,u,d,!1,null,"7987c51a",null),v=m.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-login"},[n("van-nav-bar",{attrs:{title:"注册"}}),n("van-cell-group",{staticStyle:{"text-align":"center",margin:"30px"}},[n("van-image",{attrs:{width:"10rem",height:"10rem",src:"https://img01.yzcdn.cn/vant/cat.jpeg"},scopedSlots:t._u([{key:"loading",fn:function(){return[n("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0},{key:"error",fn:function(){return[t._v("加载失败")]},proxy:!0}])})],1),n("van-form",[n("van-cell-group",[n("van-field",{attrs:{label:"手机号",placeholder:"请输入手机号"}}),n("van-field",{attrs:{label:"验证码",placeholder:"请输入验证码"}},[n("van-button",{staticClass:"p5",attrs:{slot:"button",size:"mini",type:"primary"},slot:"button"},[t._v(" 发送验证码 ")])],1)],1),n("div",{staticStyle:{margin:"16px"}},[n("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[t._v("提交")])],1)],1)],1)},h=[],b={},y=Object(l["a"])(b,g,h,!1,null,"703bd183",null),_=y.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"amap-page-container"}},[n("div",{attrs:{id:"searchStyle"}},[n("van-search",{attrs:{id:"input",placeholder:"请输入地址","use-action-slot":"true"},on:{keyup:t.getAddress},model:{value:t.obj.address,callback:function(e){t.$set(t.obj,"address",e)},expression:"obj.address"}},[n("view",{attrs:{slot:"action",bindtouchstart:"onSearch"},slot:"action"},[t._v("搜索")])])],1),n("div",{attrs:{id:"amap-container"}},[n("el-amap",{ref:"map",staticClass:"amap-demo",attrs:{vid:"amapDemo",zoom:t.zoom,center:t.mapCenter,plugin:t.plugin,events:t.events}},t._l(t.markers,(function(t,e){return n("el-amap-marker",{key:e,attrs:{position:t}})})),1),n("van-row",[n("van-col",{attrs:{span:"16",offset:"4"}},[n("van-button",{attrs:{type:"info",block:""},on:{click:t.confirm}},[t._v("确定")])],1)],1)],1)])},k=[],A=(n("b0c0"),{name:"app",data:function(){var t=this;return{layout:{search_div_height:54},obj:{address:"",lngLat:[]},zoom:16,markers:[],searchOption:{city:"全国",citylimit:!0},loaded:!1,mapCenter:[121.59996,31.197646],plugin:[{enableHighAccuracy:!0,timeout:100,maximumAge:0,convert:!0,showButton:!0,buttonPosition:"RB",showMarker:!0,showCircle:!1,panToLocation:!0,zoomToAccuracy:!0,extensions:"all",pName:"Geolocation",events:{init:function(e){e.getCurrentPosition((function(e,n){console.log(n.position.lng),console.log(n.position.lat),n&&n.position?(t.center=[n.position.lng,n.position.lat],t.loaded=!0):console.log("定位失败")})),console.log(e)}}},{pName:"ToolBar"},{pName:"Scale"}],events:{click:function(e){t.markers=[];var n=e.lnglat,a=n.lng,o=n.lat;t.lng=a,t.lat=o,t.markers.push([t.lng,t.lat]),t.obj.lngLat=[t.lng,t.lat];var r=new AMap.Geocoder({radius:1e3,extensions:"all"});r.getAddress([a,o],(function(e,n){"complete"===e&&"OK"===n.info&&n&&n.regeocode&&(t.obj.address=n.regeocode.formattedAddress,t.$nextTick())}))}}}},methods:{confirm:function(){var t=this;""!=t.obj.address?(t.$router.push("/publishTask"),localStorage.setItem("LngLat",JSON.stringify(t.obj.lngLat)),localStorage.setItem("address",t.obj.address)):this.toastError("请您选择任务地址")},getAddress:function(){var t=this;AMap.plugin(["AMap.Autocomplete","AMap.PlaceSearch"],(function(){var e={input:"input"},n=new AMap.Autocomplete(e);AMap.event.addListener(n,"select",(function(e){console.log("输出"),console.log(e),t.obj.address=e.poi.name,t.markers=[],t.obj.lngLat=[],t.mapCenter=[e.poi.location.lng,e.poi.location.lat],t.obj.lngLat=[e.poi.location.lng,e.poi.location.lat],t.markers.push([e.poi.location.lng,e.poi.location.lat])}))}))},getSession:function(){var t=JSON.parse(localStorage.getItem("LngLat")),e=localStorage.getItem("address");console.log(t),null!=t&&t.length>0&&(this.markers=[],this.markers.push([t[0],t[1]])),null!=e&&(this.obj.address=e)}},created:function(){},mounted:function(){this.getSession()}}),x=A,S=(n("a560"),Object(l["a"])(x,j,k,!1,null,"94f1bcf6",null)),w=S.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" test页面 ")])},O=[],L={},P=Object(l["a"])(L,M,O,!1,null,null,null),C=P.exports;a["default"].use(p["a"]);var z=new p["a"]({routes:[{path:"/",name:"login",component:v},{path:"/register",name:"register",component:_},{path:"/home",name:"home",component:w},{path:"/test",name:"test",component:C}]}),T=n("b970"),$=(n("157a"),n("8f9b")),E=n.n($),N=n("3a34"),B=n.n(N);a["default"].config.productionTip=!1,a["default"].prototype.$vconsole=new B.a,a["default"].use(T["a"]),a["default"].use(E.a),E.a.initAMapApiLoader({key:"160cab8ad6c50752175d76e61ef92c50",plugin:["AMap.Autocomplete","AMap.PlaceSearch","AMap.Scale","AMap.OverView","AMap.ToolBar","AMap.MapType","AMap.PolyEditor","AMap.CircleEditor","AMap.Geolocation","AMap.Geocoder"],v:"1.4.4"}),new a["default"]({render:function(t){return t(c)},router:z}).$mount("#app")},a560:function(t,e,n){"use strict";n("e379")},e379:function(t,e,n){}});
//# sourceMappingURL=app.1e2a7706.js.map