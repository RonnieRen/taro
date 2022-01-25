"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[58834],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return g}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),d=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=d(n),g=r,u=s["".concat(o,".").concat(g)]||s[g]||k[g]||l;return n?a.createElement(u,i(i({ref:e},m),{},{components:n})):a.createElement(u,i({ref:e},m))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},58859:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return m},default:function(){return s}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],p={title:"Taro.setPageInfo(option)",sidebar_label:"setPageInfo"},o=void 0,d={unversionedId:"apis/swan/setPageInfo",id:"apis/swan/setPageInfo",isDocsHomePage:!1,title:"Taro.setPageInfo(option)",description:"\u767e\u5ea6\u667a\u80fd\u5c0f\u7a0b\u5e8f\u53ef\u63a5\u5165\u767e\u5ea6\u641c\u7d22\u548c\u767e\u5ea6 App\uff0csetPageInfo \u8d1f\u8d23\u4e3a\u5c0f\u7a0b\u5e8f\u8bbe\u7f6e\u5404\u7c7b\u9875\u9762\u57fa\u7840\u4fe1\u606f\uff0c\u5305\u62ec\u6807\u9898\u3001\u5173\u952e\u5b57\u3001\u9875\u9762\u63cf\u8ff0\u4ee5\u53ca\u56fe\u7247\u4fe1\u606f\u3001\u89c6\u9891\u4fe1\u606f\u7b49\u3002\u5f00\u53d1\u8005\u4e3a\u667a\u80fd\u5c0f\u7a0b\u5e8f\u8bbe\u7f6e\u5b8c\u5907\u7684\u9875\u9762\u57fa\u7840\u4fe1\u606f\uff0c\u6709\u52a9\u4e8e\u667a\u80fd\u5c0f\u7a0b\u5e8f\u5728\u641c\u7d22\u5f15\u64ce\u548c\u4fe1\u606f\u6d41\u4e2d\u5f97\u5230\u66f4\u52a0\u6709\u6548\u7684\u5c55\u793a\u548c\u5206\u53d1\u3002",source:"@site/docs/apis/swan/setPageInfo.md",sourceDirName:"apis/swan",slug:"/apis/swan/setPageInfo",permalink:"/taro/docs/next/apis/swan/setPageInfo",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/swan/setPageInfo.md",tags:[],version:"current",frontMatter:{title:"Taro.setPageInfo(option)",sidebar_label:"setPageInfo"},sidebar:"API",previous:{title:"getOpenUserInfo",permalink:"/taro/docs/next/apis/alipay/getOpenUserInfo"}},m=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3},{value:"Video",id:"video",children:[],level:3},{value:"Visit",id:"visit",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2}],k={toc:m};function s(t){var e=t.components,p=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u767e\u5ea6\u667a\u80fd\u5c0f\u7a0b\u5e8f\u53ef\u63a5\u5165\u767e\u5ea6\u641c\u7d22\u548c\u767e\u5ea6 App\uff0csetPageInfo \u8d1f\u8d23\u4e3a\u5c0f\u7a0b\u5e8f\u8bbe\u7f6e\u5404\u7c7b\u9875\u9762\u57fa\u7840\u4fe1\u606f\uff0c\u5305\u62ec\u6807\u9898\u3001\u5173\u952e\u5b57\u3001\u9875\u9762\u63cf\u8ff0\u4ee5\u53ca\u56fe\u7247\u4fe1\u606f\u3001\u89c6\u9891\u4fe1\u606f\u7b49\u3002\u5f00\u53d1\u8005\u4e3a\u667a\u80fd\u5c0f\u7a0b\u5e8f\u8bbe\u7f6e\u5b8c\u5907\u7684\u9875\u9762\u57fa\u7840\u4fe1\u606f\uff0c\u6709\u52a9\u4e8e\u667a\u80fd\u5c0f\u7a0b\u5e8f\u5728\u641c\u7d22\u5f15\u64ce\u548c\u4fe1\u606f\u6d41\u4e2d\u5f97\u5230\u66f4\u52a0\u6709\u6548\u7684\u5c55\u793a\u548c\u5206\u53d1\u3002"),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(16710).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,l.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:n(94882).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:n(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:n(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://smartprogram.baidu.com/docs/develop/api/open/swan-setPageInfo/"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => void\n")),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"option"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,l.kt)("h3",{id:"option"},"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9875\u9762\u6807\u9898")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keywords"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9875\u9762\u5173\u952e\u5b57")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9875\u9762\u63cf\u8ff0\u4fe1\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"releaseDate"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u539f\u59cb\u53d1\u5e03\u65f6\u95f4(\u5e74-\u6708-\u65e5 \u65f6:\u5206:\u79d2 \u5e26\u6709\u524d\u5bfc\u96f6\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"articleTitle"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6587\u7ae0(\u5185\u5bb9)\u6807\u9898(\u9002\u7528\u4e8e\u5f53\u524d\u9875\u9762\u662f\u56fe\u6587\u3001\u89c6\u9891\u7c7b\u7684\u5c55\u793a\u5f62\u5f0f\uff0c\u6587\u7ae0\u6807\u9898\u9700\u8981\u51c6\u786e\u6807\u8bc6\u5f53\u524d\u6587\u7ae0\u7684\u4e3b\u8981\u4fe1\u606f\u70b9\uff1b\u81f3\u5c116\u4e2a\u5b57\uff0c\u4e0d\u53ef\u4ee5\u5168\u82f1\u6587\u3002)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"image"),(0,l.kt)("td",{parentName:"tr",align:null},"string or string[]"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u56fe\u7247\u7ebf\u4e0a\u5730\u5740\uff0c\u7528\u4e8e\u4fe1\u606f\u6d41\u6295\u653e\u540e\u7684\u5c01\u9762\u663e\u793a\uff0c\u6700\u591a3\u5f20\uff0c\u5355\u56fe\u7247\u6700\u59272M\uff1b\u5c01\u9762\u56fe\u5efa\u8bae\u5c3a\u5bf8\uff1a\u9ad8>=210px & \u5bbd>=375px\uff1b\u6700\u5c0f\u5c3a\u5bf8\uff1a\u9ad8>=146px & \u5bbd>=218px\u3002\u591a\u5f20\u56fe\u65f6\uff0c\u7528\u6570\u7ec4\u8868\u793a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"video"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Video")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u89c6\u9891\u4fe1\u606f\uff0c\u591a\u4e2a\u89c6\u9891\u65f6\uff0c\u7528\u6570\u7ec4\u8868\u793a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"visit"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Visit")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d4f\u89c8\u4fe1\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"likes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u70b9\u8d5e\u91cf\uff0c\u82e5\u9875\u9762\u672a\u7edf\u8ba1\u53ef\u4e3a\u7a7a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"comments"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bc4\u8bba\u91cf\uff0c\u82e5\u9875\u9762\u672a\u7edf\u8ba1\u53ef\u4e3a\u7a7a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"collects"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6536\u85cf\u91cf\uff0c\u82e5\u9875\u9762\u672a\u7edf\u8ba1\u53ef\u4e3a\u7a7a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"shares"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5206\u4eab\u91cf\uff0c\u82e5\u9875\u9762\u672a\u7edf\u8ba1\u53ef\u4e3a\u7a7a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"followers"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5173\u6ce8\u91cf\uff0c\u82e5\u9875\u9762\u672a\u7edf\u8ba1\u53ef\u4e3a\u7a7a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"success"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"() => any")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fail"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(err: any) => any")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"complete"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"() => any")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),(0,l.kt)("h3",{id:"video"},"Video"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u89c6\u9891\u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"duration"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u89c6\u9891\u65f6\u957f(\u5355\u4f4d\u4e3a\u79d2)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"image"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u89c6\u9891\u5c01\u9762\u56fe")))),(0,l.kt)("h3",{id:"visit"},"Visit"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pv"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9875\u9762\u7684\u6d4f\u89c8\u91cf(\u4e0d\u53bb\u91cd\u7528\u6237\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uv"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9875\u9762\u7684\u70b9\u51fb\u91cf\uff08\u53bb\u91cd\u7528\u6237\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sessionDuration"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9875\u9762\u7684\u7528\u6237\u4eba\u5747\u505c\u7559\u65f6\u957f\uff0c\u4ee5\u79d2\u4e3a\u5355\u4f4d\u3002")))),(0,l.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.setPageInfo({\n  title: '\u6652\u5143\u5bb5\u8282\u6d3b\u52a8\u7ea2\u5305\uff0c\u7231\u5947\u827a60\u5f20\u5e74\u5361\u3001600\u5f20\u5b63\u5361\u7b49\u4f60\u62ff\uff01-\u767e\u5ea6\u8d34\u5427',\n  keywords: '\u767e\u5ea6,\u767e\u5ea6\u8d34\u5427,\u597d\u8fd0\u4e2d\u56fd\u5e74,60,\u6652\u5143,\u5bb5\u8282',\n  description: '\u6652\u5143\u5bb5\u8282\u6d3b\u52a8\u7ea2\u5305\uff0c\u7231..\u6628\u5929\u7684\u767e\u5ea6APP\u5143\u5bb5\u8282\u6d3b\u52a8\u4e2d\uff0c\u5171\u53d1\u51fa2\u4ebf\u73b0\u91d1\u7ea2\u5305\u3001\u542b151\u4e07\u4e2a\u624b\u6c14\u73b0\u91d1\u5927\u5956\u548c240\u8f86\u7ea2\u65d7\u8f7f\u8f66\uff0c\u8c01\u662f\u597d\u8fd0\u9526\u9ca4\uff0c\u5feb\u6765\u5206\u4eab\uff01\u9a6c\u4e0a\u60ca\u559c\u5347\u7ea7~\u6447\u4e2d\u7ea2\u5305\u7684\u9526\u9ca4\u4eec\u5373\u523b\u6652\u51fa\u7ea2\u5305\u91d1\u989d\u622a\u56fe\uff0c\u6211\u4eec\u5c06\u4f1a\u62bd\u53d6660\u4f4d\u597d\u8fd0\u9526\u9ca4',\n  articleTitle: '\u6652\u5143\u5bb5\u8282\u6d3b\u52a8\u7ea2\u5305\uff0c\u7231\u5947\u827a60\u5f20\u5e74\u5361\u3001600\u5f20\u5b63\u5361\u7b49\u4f60\u62ff\uff01',\n  releaseDate: '2019-01-02 12:01:30',\n  image: [\n      'https://c.hiphotos.baidu.com/forum/w%3D480/sign=73c62dda83b1cb133e693d1bed5456da/f33725109313b07e8dee163d02d7912396dd8cfe.jpg',\n      'https://hiphotos.baidu.com/fex/%70%69%63/item/43a7d933c895d143e7b745607ef082025baf07ab.jpg'\n  ],\n  video: [{\n      url: 'https://www.baidu.com/mx/v12.mp4',\n      duration: '100',\n      image: 'https://smartprogram.baidu.com/docs/img/image-scaleToFill.png'\n  }],\n  visit: {\n      pv: '1000',\n      uv: '100',\n      sessionDuration: '130'\n  },\n  likes: '75',\n  comments: '13',\n  collects: '23',\n  shares: '8',\n  followers: '35',\n  success: res => {\n      console.log('setPageInfo success');\n  },\n  fail: err => {\n      console.log('setPageInfo fail', err);\n  }\n})\n")))}s.isMDXComponent=!0},5030:function(t,e,n){e.Z=n.p+"assets/images/h5-ae5be0f8628571becb8a6f3127998977.png"},73555:function(t,e,n){e.Z=n.p+"assets/images/rn-4d55b8ea270355e8ec2284856cfc71e8.png"},94882:function(t,e,n){e.Z=n.p+"assets/images/swan-02ea590f24bbb4ed187920dfb316ae6c.png"},16710:function(t,e){e.Z="data:image/png;base64,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"}}]);