(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7977f811"],{"4b67":function(e,t,a){},"62cb":function(e,t){e.exports={data:function(){var e=this;return{zoom:20,center:[121.52014,31.198862],searchOption:{city:"全国",citylimit:!0},marker:{position:[121.52014,31.198862]},address:"",events:{click:function(t){var a=t.lnglat,n=a.lng,r=a.lat;e.lng=n,e.lat=r,e.marker.position=[n,r];var s=new AMap.Geocoder({radius:1e3,extensions:"all"});s.getAddress([n,r],(function(t,a){"complete"===t&&"OK"===a.info&&a&&a.regeocode&&(e.address=a.regeocode.formattedAddress,e.$nextTick())}))}},lng:0,lat:0}},methods:{onSearchResult:function(e){console.log(e,"pois");var t=e[0].lng,a=e[0].lat;this.center=[t,a],this.marker.position=[t,a]}}}},"78c1":function(e,t,a){"use strict";a.r(t);var n=a("eceb"),r=a("ebbe");for(var s in r)"default"!==s&&function(e){a.d(t,e,(function(){return r[e]}))}(s);a("ae10");var o=a("2877"),i=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,null,null);t["default"]=i.exports},ae10:function(e,t,a){"use strict";var n=a("4b67"),r=a.n(n);r.a},ebbe:function(e,t,a){"use strict";a.r(t);var n=a("62cb"),r=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,(function(){return n[e]}))}(s);t["default"]=r.a},eceb:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"amap-page-container"},[a("el-amap-search-box",{staticClass:"search-box",attrs:{"search-option":e.searchOption,"on-search-result":e.onSearchResult}}),a("el-amap",{staticClass:"amap-demo",attrs:{vid:"amapDemo",center:e.center,zoom:e.zoom,events:e.events}},[a("el-amap-marker",{attrs:{position:e.marker.position,events:e.marker.events,visible:e.marker.visible,draggable:e.marker.draggable}})],1),a("div",{staticClass:"toolbar"},[e._v("position: ["+e._s(e.lng)+", "+e._s(e.lat)+"] address: "+e._s(e.address))])],1)},r=[]}}]);
//# sourceMappingURL=chunk-7977f811.e370bd78.js.map