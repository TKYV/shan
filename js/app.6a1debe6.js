(function(t){function e(e){for(var o,i,l=e[0],s=e[1],c=e[2],p=0,f=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},a=[],i=n("2877"),l={},s=Object(i["a"])(l,r,a,!1,null,null,null),c=s.exports,u=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-login"},[n("van-nav-bar",{attrs:{title:"登 录"}}),n("van-cell-group",{staticStyle:{"text-align":"center",margin:"30px"}},[n("van-image",{attrs:{width:"10rem",height:"10rem",src:"https://img01.yzcdn.cn/vant/cat.jpeg"},scopedSlots:t._u([{key:"loading",fn:function(){return[n("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0},{key:"error",fn:function(){return[t._v("加载失败")]},proxy:!0}])})],1),n("van-form",[n("van-cell-group",[n("van-field",{attrs:{label:"手机号",placeholder:"请输入手机号"}}),n("van-field",{attrs:{label:"验证码",placeholder:"请输入验证码"}},[n("van-button",{staticClass:"p5",attrs:{slot:"button",size:"mini",type:"primary"},slot:"button"},[t._v(" 发送验证码 ")])],1)],1),n("div",{staticStyle:{margin:"16px"}},[n("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[t._v("提交")])],1)],1)],1)},f=[],d={},v=Object(i["a"])(d,p,f,!1,null,"7987c51a",null),m=v.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-login"},[n("van-nav-bar",{attrs:{title:"注册"}}),n("van-cell-group",{staticStyle:{"text-align":"center",margin:"30px"}},[n("van-image",{attrs:{width:"10rem",height:"10rem",src:"https://img01.yzcdn.cn/vant/cat.jpeg"},scopedSlots:t._u([{key:"loading",fn:function(){return[n("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0},{key:"error",fn:function(){return[t._v("加载失败")]},proxy:!0}])})],1),n("van-form",[n("van-cell-group",[n("van-field",{attrs:{label:"手机号",placeholder:"请输入手机号"}}),n("van-field",{attrs:{label:"验证码",placeholder:"请输入验证码"}},[n("van-button",{staticClass:"p5",attrs:{slot:"button",size:"mini",type:"primary"},slot:"button"},[t._v(" 发送验证码 ")])],1)],1),n("div",{staticStyle:{margin:"16px"}},[n("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[t._v("提交")])],1)],1)],1)},g=[],b={},y=Object(i["a"])(b,h,g,!1,null,"703bd183",null),w=y.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"amap-page-container"},[n("el-amap-search-box",{staticClass:"search-box",attrs:{"search-option":t.searchOption,"on-search-result":t.onSearchResult,center:t.center}}),n("el-amap",{staticClass:"amap-box",attrs:{vid:"amapDemo",center:t.center,zoom:t.zoom,plugin:t.plugin}},[t._l(t.markers,(function(t){return n("el-amap-marker",{key:t.id,attrs:{position:t.position,events:t.events,content:t.content}})})),t.window?n("el-amap-info-window",{attrs:{position:t.window.position,visible:t.window.visible,content:t.window.content,offset:t.window.offset}}):t._e(),n("el-amap-circle",{attrs:{vid:"circle",center:t.center,radius:t.circle.radius,"fill-opacity":"0.2",strokeColor:"#38f",strokeOpacity:"0.8",strokeWeight:"1",fillColor:"#38f"}})],2)],1)},_=[],k=(n("159b"),{data:function(){var t=this;return{searchOption:{city:"全国",citylimit:!1},value:"",center:[0,0],pointMarkers:[],markers:[],windows:[],window:"",circle:{radius:1e3},input:"",zoom:14,loaded:!1,plugin:[{enableHighAccuracy:!0,timeout:100,maximumAge:0,convert:!0,showButton:!0,buttonPosition:"RB",showMarker:!0,showCircle:!1,panToLocation:!0,zoomToAccuracy:!0,extensions:"all",pName:"Geolocation",events:{init:function(e){e.getCurrentPosition((function(e,n){console.log(n.position.lng),console.log(n.position.lat),n&&n.position?(t.center=[n.position.lng,n.position.lat],t.loaded=!0):console.log("定位失败")})),console.log(e)}}},{pName:"ToolBar"},{pName:"Scale"}]}},methods:{onSearch:function(){alert("sda")},onSearchResult:function(t){console.log(t),this.input=document.querySelector(".search-box-wrapper input").value,this.center=[t[0].lng,t[0].lat]},point:function(){var t=this;this.pointMarkers.forEach((function(e,n){t.markers.push({position:[e.lng,e.lat],icon:e.icon,events:{click:function(){t.windows.forEach((function(t){t.visible=!1})),t.window=t.windows[n],t.$nextTick((function(){t.window.visible=!0}))}}}),t.windows.push({position:[e.lng,e.lat],content:'<div class="windows-text"><div class="text-map"><p>烟感报警-方形测试</p>报警状态：'+e.lng+'<br><div class="bottom"><button onclick="getVideo()">查看视频</button></div></div></div>',offset:[5,-15],visible:!1})})),console.log(this.markers)}},mounted:function(){this.pointMarkers=[{lng:121.34351,lat:31.14959},{lng:121.34387,lat:31.14989}],this.point()}}),O=k,M=(n("5781"),Object(i["a"])(O,x,_,!1,null,"61377347",null)),S=M.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" test页面 ")])},A=[],C={},P=Object(i["a"])(C,j,A,!1,null,null,null),z=P.exports;o["default"].use(u["a"]);var E=new u["a"]({routes:[{path:"/",name:"login",component:m},{path:"/register",name:"register",component:w},{path:"/home",name:"home",component:S},{path:"/test",name:"test",component:z}]}),T=n("b970"),$=(n("157a"),n("8f9b")),B=n.n($);o["default"].config.productionTip=!1,o["default"].use(T["a"]),o["default"].use(B.a),B.a.initAMapApiLoader({key:"160cab8ad6c50752175d76e61ef92c50",plugin:["AMap.Autocomplete","AMap.PlaceSearch","AMap.Scale","AMap.OverView","AMap.ToolBar","AMap.MapType","AMap.PolyEditor","AMap.CircleEditor","AMap.Geolocation"],v:"1.4.4"}),new o["default"]({render:function(t){return t(c)},router:E}).$mount("#app")},5781:function(t,e,n){"use strict";n("5f69")},"5f69":function(t,e,n){}});
//# sourceMappingURL=app.6a1debe6.js.map