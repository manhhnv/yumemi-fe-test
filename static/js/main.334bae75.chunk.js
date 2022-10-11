(this["webpackJsonpyumemi-fe-test"]=this["webpackJsonpyumemi-fe-test"]||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var r,c=n(0),o=n.n(c),a=n(28),i=n.n(a),s=(n(36),n(37),n(11)),l=n(2),u=n(9),d=n(1),f=function(){return Object(d.jsx)("img",{alt:"Logo",src:"/static/logo.svg"})},b=function(e){return Object(d.jsx)("div",{className:"container-fluid app-header",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-xs-2",children:Object(d.jsx)(s.b,{to:"/",children:Object(d.jsx)(f,{})})}),Object(d.jsx)("div",{className:"col-xs-8 app-header__title",children:Object(d.jsx)("h3",{children:e.title})})]})})},j=function(e){return Object(d.jsxs)(c.Fragment,{children:[Object(d.jsx)("header",{children:Object(d.jsx)(b,{title:"\u4eba\u53e3\u30c1\u30e3\u30fc\u30c8"})}),null===e||void 0===e?void 0:e.children]})},h=n(10),p=n(13),v=n(14),O=n.n(v),m="https://opendata.resas-portal.go.jp/api/v1",x={headers:{"X-API-KEY":Object({NODE_ENV:"production",PUBLIC_URL:"/yumemi-fe-test",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY}};!function(e){e[e.OK=200]="OK",e[e.CREATED=201]="CREATED",e[e.BAD_REQUEST=400]="BAD_REQUEST",e[e.UNAUTHORIZED=401]="UNAUTHORIZED",e[e.FORBIDDEN=403]="FORBIDDEN",e[e.NOTFOUND=404]="NOTFOUND",e[e.INTERNAL_SERVER_ERROR=500]="INTERNAL_SERVER_ERROR",e[e.BAD_GATEWAY=502]="BAD_GATEWAY"}(r||(r={}));var g=function(){var e=Object(p.a)(Object(h.a)().mark((function e(){var t,n,c,o;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(m,"/prefectures"),e.next=3,O.a.get(c,x);case 3:if(!((o=e.sent).status===r.OK&&(null===(t=o.data)||void 0===t||null===(n=t.result)||void 0===n?void 0:n.length)>0)){e.next=6;break}return e.abrupt("return",o.data.result);case 6:throw new Error("getPrefectures() ERROR");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(e){var t;return Object(d.jsxs)("div",{className:"checkbox-item",onClick:e.evenHandler,children:[Object(d.jsx)("input",{type:"radio",value:null===e||void 0===e?void 0:e.value,checked:!(null===e||void 0===e||!e.checked),onChange:e.evenHandler,name:e.name}),(null===e||void 0===e||null===(t=e.label)||void 0===t?void 0:t.trim())&&Object(d.jsx)("label",{className:null!==e&&void 0!==e&&e.checked?"checkbox-label-bold ":"checkbox-label",children:e.label})]})},w=function(e){return Object(d.jsxs)("div",{className:"col-xs-12 col-md-5",children:[Object(d.jsx)("div",{className:"row prefectures-container",children:Object(d.jsxs)("h3",{className:"prefectures-container__title",children:["\u90fd\u9053\u5e9c\u770c (",e.prefectures.length,")"]})}),Object(d.jsx)("div",{className:"row prefectures-options",children:e.prefectures.length>0&&e.prefectures.map((function(t){return Object(d.jsx)("div",{className:"col-xs-4 prefectures-options__item",children:Object(d.jsx)(E,{label:t.prefName,value:t.prefCode,checked:e.prefectureCode===t.prefCode,name:"prefectureCode",evenHandler:function(){e.selectPrefecture&&e.selectPrefecture(t.prefCode)}})},t.prefCode)}))})]})},N=o.a.memo(w),y=n(31),R=function(){var e=Object(p.a)(Object(h.a)().mark((function e(t,n){var c,o,a;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Number.isInteger(t)){e.next=2;break}throw new Error("prefCode must be an integer number.");case 2:if("-"===n||Number.isInteger(n)){e.next=4;break}throw new Error("cityCode must be an integer number or `-` character.");case 4:return o="".concat(m,"/population/composition/perYear"),e.next=7,O.a.get(o,Object(y.a)({params:{prefCode:t,cityCode:n}},x));case 7:if((null===(a=e.sent)||void 0===a?void 0:a.status)!==r.OK){e.next=10;break}return e.abrupt("return",null===a||void 0===a||null===(c=a.data)||void 0===c?void 0:c.result);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),k=n(30),C=n.n(k),S=n(18),T=n.n(S),_=["#ff7368","#64a4ff","#76d8a5","#daf357"],A=function(e){var t=Object(c.useState)(),n=Object(u.a)(t,2),r=n[0],a=n[1],i=Object(c.useMemo)((function(){var t;if(null!==r&&void 0!==r&&null!==(t=r.data)&&void 0!==t&&t.length){var n=r.data[0].data.map((function(e){return e.year.toString().concat("\u5e74")})),c=r.data.map((function(e,t){return{type:"line",name:e.label,data:e.data.map((function(e){return{y:e.value,z:e.rate?"(".concat(e.rate,"%)"):""}})),color:_[t]}}));return{title:{text:e.title,style:{fontWeight:"bold"}},subtitle:{text:"(".concat(r.data[0].data[0].year,"\u5e74 - ").concat(r.data[0].data.slice(-1)[0].year,"\u5e74)")},tooltip:{shared:!0,valueSuffix:" \u4eba",pointFormat:'<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> {point.z}<br/>'},lang:{thousandsSep:","},series:c,xAxis:{categories:n,title:{text:"\u5e74\u5ea6",style:{fontWeight:"bold"}}},credits:{text:""},yAxis:{title:{text:"\u4eba\u53e3\u6570",style:{fontWeight:"bold"}},labels:{formatter:function(e){return T.a.numberFormat(Number(e.value.toString().split("-")[0]),0,"",",").concat(" \u4eba")}}}}}}),[r]);return Object(c.useEffect)((function(){R(e.prefectureCode,"-").then((function(e){return a(e)})).catch((function(e){throw e}))}),[e.prefectureCode]),Object(d.jsx)(o.a.Fragment,{children:i&&Object(d.jsx)(C.a,{highcharts:T.a,options:i})})},D=o.a.memo(A),W=function(e){return Object(d.jsx)("div",{className:"spinner",style:e.style})},F=o.a.memo(W),P=function(){var e=Object(c.useState)(!0),t=Object(u.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)([]),a=Object(u.a)(o,2),i=a[0],s=a[1],l=Object(c.useState)(1),f=Object(u.a)(l,2),b=f[0],h=f[1];return Object(c.useEffect)((function(){g().then((function(e){s(e)})).catch((function(e){throw e})).finally((function(){r(!1)}))}),[]),Object(d.jsx)(j,{children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row",style:{marginTop:100},children:[n?Object(d.jsx)(F,{}):Object(d.jsx)(N,{prefectures:i,prefectureCode:b,selectPrefecture:function(e){e!==b&&h(e)}}),Object(d.jsx)("div",{className:"col-xs-12 col-md-7",children:Object(d.jsx)(D,{prefectureCode:b,title:"\u4eba\u53e3\u69cb\u9020\u56f3"})})]})})})},U=function(){return Object(d.jsx)(j,{children:Object(d.jsx)("h1",{className:"not-found",children:"404 - NOT FOUND"})})},I=function(){return Object(d.jsx)(s.a,{children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",component:P}),Object(d.jsx)(l.a,{exact:!0,path:"*",component:U})]})})};var B=function(){return Object(d.jsx)(I,{})},K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),o(e),a(e)}))};i.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(B,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/yumemi-fe-test",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/yumemi-fe-test","/service-worker.js");K?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):L(t,e)}))}}(),H()}},[[66,1,2]]]);
//# sourceMappingURL=main.334bae75.chunk.js.map