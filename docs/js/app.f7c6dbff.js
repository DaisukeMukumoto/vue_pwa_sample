(function(e){function t(t){for(var o,i,c=t[0],s=t[1],l=t[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),a=n.n(o);a.a},"145d":function(e,t,n){},"1b9a":function(e,t,n){"use strict";var o=n("145d"),a=n.n(o);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},r=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"form"}},[n("p",[e._v(" My name is "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(". and I am "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.age,expression:"age"}],domProps:{value:e.age},on:{input:function(t){t.target.composing||(e.age=t.target.value)}}}),e._v(" year old. ")]),n("p",[n("button",{on:{click:e.persist}},[e._v("Save")])]),n("p",[e._v("I'm "+e._s(e.name)+", and "+e._s(e.age)+" year old. Nice to meet you!! ")]),n("hr"),n("h2",[e._v("Cats")]),e._l(e.cats,(function(t,o,a){return n("div",{key:a},[n("p",[n("span",{staticClass:"cat"},[e._v(e._s(t))]),n("button",{on:{click:function(t){return e.removeCat(o)}}},[e._v("Remove")])])])})),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newCat,expression:"newCat"}],domProps:{value:e.newCat},on:{input:function(t){t.target.composing||(e.newCat=t.target.value)}}}),n("button",{on:{click:e.addCat}},[e._v("Add Cat")])])],2)},c=[],s=(n("a434"),n("b0c0"),{name:"HelloWorld",props:{msg:String},el:"form",data:function(){return{name:"",data:0,cats:[],newCat:null}},mounted:function(){if(localStorage.name&&(this.name=localStorage.name),localStorage.age&&(this.age=localStorage.age),localStorage.cats)try{this.cats=JSON.parse(localStorage.getItem("cats"))}catch(e){localStorage.removeItem("cats")}},methods:{persist:function(){localStorage.name=this.name,localStorage.age=this.age,console.log("now pretend I did more stuff ...")},addCat:function(){this.newCat&&(this.cats.push(this.newCat),this.newCat="",this.saveCats())},removeCat:function(e){this.cats.splice(e,1),this.saveCats()},saveCats:function(){var e=JSON.stringify(this.cats);localStorage.setItem("cats",e)}},watch:{name:function(e){localStorage.name=e}}}),l=s,u=(n("1b9a"),n("2877")),p=Object(u["a"])(l,i,c,!1,null,"58809300",null),f=p.exports,d={name:"App",components:{HelloWorld:f}},m=d,v=(n("034f"),Object(u["a"])(m,a,r,!1,null,null,null)),g=v.exports,h=n("9483");Object(h["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(g)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.f7c6dbff.js.map