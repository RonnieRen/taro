(window.webpackJsonp=window.webpackJsonp||[]).push([[682],{1773:function(t,e,r){"use strict";function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}r.d(e,"a",(function(){return n}))},1774:function(t,e,r){"use strict";function n(t,e){if(null==t)return{};var r,n,a={},b=Object.keys(t);for(n=0;n<b.length;n++)r=b[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}r.d(e,"a",(function(){return n}))},1775:function(t,e,r){"use strict";r.d(e,"a",(function(){return O})),r.d(e,"b",(function(){return p}));var n=r(0),a=r.n(n);function b(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){b(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},b=Object.keys(t);for(n=0;n<b.length;n++)r=b[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);for(n=0;n<b.length;n++)r=b[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var i=a.a.createContext({}),u=function(t){var e=a.a.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},O=function(t){var e=u(t.components);return a.a.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},d=a.a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,b=t.originalType,l=t.parentName,i=o(t,["components","mdxType","originalType","parentName"]),O=u(r),d=n,p=O["".concat(l,".").concat(d)]||O[d]||s[d]||b;return r?a.a.createElement(p,c(c({ref:e},i),{},{components:r})):a.a.createElement(p,c({ref:e},i))}));function p(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var b=r.length,l=new Array(b);l[0]=d;var c={};for(var o in e)hasOwnProperty.call(e,o)&&(c[o]=e[o]);c.originalType=t,c.mdxType="string"==typeof t?t:n,l[1]=c;for(var i=2;i<b;i++)l[i]=r[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},748:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return l})),r.d(e,"metadata",(function(){return c})),r.d(e,"rightToc",(function(){return o})),r.d(e,"default",(function(){return u}));var n=r(1773),a=r(1774),b=(r(0),r(1775)),l={title:"Taro.setTabBarStyle(option)",sidebar_label:"setTabBarStyle"},c={unversionedId:"apis/ui/tab-bar/setTabBarStyle",id:"apis/ui/tab-bar/setTabBarStyle",isDocsHomePage:!1,title:"Taro.setTabBarStyle(option)",description:"\u52a8\u6001\u8bbe\u7f6e tabBar \u7684\u6574\u4f53\u6837\u5f0f",source:"@site/docs/apis/ui/tab-bar/setTabBarStyle.md",slug:"/apis/ui/tab-bar/setTabBarStyle",permalink:"/taro/docs/next/apis/ui/tab-bar/setTabBarStyle",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/ui/tab-bar/setTabBarStyle.md",version:"current",sidebar_label:"setTabBarStyle",sidebar:"API",previous:{title:"Taro.showTabBar(option)",permalink:"/taro/docs/next/apis/ui/tab-bar/showTabBar"},next:{title:"Taro.setTabBarItem(option)",permalink:"/taro/docs/next/apis/ui/tab-bar/setTabBarItem"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:o};function u(t){var e=t.components,r=Object(a.a)(t,["components"]);return Object(b.b)("wrapper",Object(n.a)({},i,r,{components:e,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u52a8\u6001\u8bbe\u7f6e tabBar \u7684\u6574\u4f53\u6837\u5f0f"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarStyle.html"}),"\u53c2\u8003\u6587\u6863"))),Object(b.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<CallbackResult>\n")),Object(b.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(b.b)("h3",{id:"option"},"Option"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"backgroundColor"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"tab \u7684\u80cc\u666f\u8272\uff0cHexColor")),Object(b.b)("tr",null,Object(b.b)("td",null,"borderStyle"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"tabBar\u4e0a\u8fb9\u6846\u7684\u989c\u8272\uff0c \u4ec5\u652f\u6301 black/white")),Object(b.b)("tr",null,Object(b.b)("td",null,"color"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"tab \u4e0a\u7684\u6587\u5b57\u9ed8\u8ba4\u989c\u8272\uff0cHexColor")),Object(b.b)("tr",null,Object(b.b)("td",null,"complete"),Object(b.b)("td",null,Object(b.b)("code",null,"(res: CallbackResult) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(b.b)("tr",null,Object(b.b)("td",null,"fail"),Object(b.b)("td",null,Object(b.b)("code",null,"(res: CallbackResult) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(b.b)("tr",null,Object(b.b)("td",null,"selectedColor"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"tab \u4e0a\u7684\u6587\u5b57\u9009\u4e2d\u65f6\u7684\u989c\u8272\uff0cHexColor")),Object(b.b)("tr",null,Object(b.b)("td",null,"success"),Object(b.b)("td",null,Object(b.b)("code",null,"(res: CallbackResult) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(b.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.setTabBarStyle({\n  color: '#FF0000',\n  selectedColor: '#00FF00',\n  backgroundColor: '#0000FF',\n  borderStyle: 'white'\n})\n")),Object(b.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.setTabBarStyle"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}u.isMDXComponent=!0}}]);