(window.webpackJsonp=window.webpackJsonp||[]).push([[691],{1773:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},1774:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,c={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}n.d(t,"a",(function(){return r}))},1775:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var r=n(0),c=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var o=c.a.createContext({}),u=function(e){var t=c.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return c.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,O=s["".concat(b,".").concat(d)]||s[d]||p[d]||l;return n?c.a.createElement(O,a(a({ref:t},o),{},{components:n})):c.a.createElement(O,a({ref:t},o))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,b=new Array(l);b[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:r,b[1]=a;for(var o=2;o<l;o++)b[o]=n[o];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},757:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(1773),c=n(1774),l=(n(0),n(1775)),b={title:"Taro.getUserProfile(option)",sidebar_label:"getUserProfile"},a={unversionedId:"apis/open-api/user-info/getUserProfile",id:"apis/open-api/user-info/getUserProfile",isDocsHomePage:!1,title:"Taro.getUserProfile(option)",description:"\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u3002\u6bcf\u6b21\u8bf7\u6c42\u90fd\u4f1a\u5f39\u51fa\u6388\u6743\u7a97\u53e3\uff0c\u7528\u6237\u540c\u610f\u540e\u8fd4\u56de userInfo\u3002",source:"@site/docs/apis/open-api/user-info/getUserProfile.md",slug:"/apis/open-api/user-info/getUserProfile",permalink:"/taro/docs/next/apis/open-api/user-info/getUserProfile",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/open-api/user-info/getUserProfile.md",version:"current",sidebar_label:"getUserProfile",sidebar:"API",previous:{title:"Taro.getAccountInfoSync()",permalink:"/taro/docs/next/apis/open-api/account/getAccountInfoSync"},next:{title:"Taro.getUserInfo(option)",permalink:"/taro/docs/next/apis/open-api/user-info/getUserInfo"}},i=[{value:"getUserProfile",id:"getuserprofile",children:[]},{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"\u76f8\u5173\u8d44\u6599",id:"\u76f8\u5173\u8d44\u6599",children:[]}],o={rightToc:i};function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u3002\u6bcf\u6b21\u8bf7\u6c42\u90fd\u4f1a\u5f39\u51fa\u6388\u6743\u7a97\u53e3\uff0c\u7528\u6237\u540c\u610f\u540e\u8fd4\u56de ",Object(l.b)("inlineCode",{parentName:"p"},"userInfo"),"\u3002"),Object(l.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(l.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(l.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(l.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"\u5fae\u4fe1\u57fa\u7840\u5e93 2.10.4 \u5f00\u59cb\u652f\u6301"),Object(l.b)("p",{parentName:"div"},"Taro 2.2.17\uff0c3.0.29\uff0c3.1\uff0c3.2 \u5df2\u7ecf\u652f\u6301"))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/community/develop/doc/000cacfa20ce88df04cb468bc52801"}),"\u5fae\u4fe1\u7aef\u8c03\u6574\u80cc\u666f\u548c\u8bf4\u660e\uff0c\u8bf7\u53c2\u8003\u6587\u6863"))),Object(l.b)("h2",{id:"getuserprofile"},"getUserProfile"),Object(l.b)("p",null,"\u82e5\u5f00\u53d1\u8005\u9700\u8981\u83b7\u53d6\u7528\u6237\u7684\u4e2a\u4eba\u4fe1\u606f\uff08\u5934\u50cf\u3001\u6635\u79f0\u3001\u6027\u522b\u4e0e\u5730\u533a\uff09\uff0c\u53ef\u4ee5\u901a\u8fc7 Taro.getUserProfile \u63a5\u53e3\u8fdb\u884c\u83b7\u53d6\uff0c\u5fae\u4fe1\u8be5\u63a5\u53e3\u4ece\u57fa\u7840\u5e93 ",Object(l.b)("strong",{parentName:"p"},"2.10.4")," \u7248\u672c\u5f00\u59cb\u652f\u6301\uff0c\u8be5\u63a5\u53e3\u53ea\u8fd4\u56de\u7528\u6237\u4e2a\u4eba\u4fe1\u606f\uff0c\u4e0d\u5305\u542b\u7528\u6237\u8eab\u4efd\u6807\u8bc6\u7b26\u3002\u8be5\u63a5\u53e3\u4e2d desc \u5c5e\u6027\uff08\u58f0\u660e\u83b7\u53d6\u7528\u6237\u4e2a\u4eba\u4fe1\u606f\u540e\u7684\u7528\u9014\uff09\u540e\u7eed\u4f1a\u5c55\u793a\u5728\u5f39\u7a97\u4e2d\uff0c\u8bf7\u5f00\u53d1\u8005\u8c28\u614e\u586b\u5199\u3002"),Object(l.b)("p",null,"\u5f00\u53d1\u8005\u6bcf\u6b21\u901a\u8fc7\u8be5\u63a5\u53e3\u83b7\u53d6\u7528\u6237\u4e2a\u4eba\u4fe1\u606f\u5747\u9700\u7528\u6237\u786e\u8ba4\uff0c\u8bf7\u5f00\u53d1\u8005\u59a5\u5584\u4fdd\u7ba1\u7528\u6237\u5feb\u901f\u586b\u5199\u7684\u5934\u50cf\u6635\u79f0\uff0c\u907f\u514d\u91cd\u590d\u5f39\u7a97\u3002"),Object(l.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<SuccessCallbackResult>\n")),Object(l.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(l.b)("h3",{id:"option"},"Option"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"complete"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: CallbackResult) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(l.b)("tr",null,Object(l.b)("td",null,"fail"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: CallbackResult) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(l.b)("tr",null,Object(l.b)("td",null,"success"),Object(l.b)("td",null,Object(l.b)("code",null,"(result: SuccessCallbackResult) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),Object(l.b)("tr",null,Object(l.b)("td",null,"lang"),Object(l.b)("td",null,Object(l.b)("code",null,'"en" | "zh_CN" | "zh_TW"')),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u663e\u793a\u7528\u6237\u4fe1\u606f\u7684\u8bed\u8a00\uff08en: \u82f1\u6587\uff1bzh_CN\uff1a\u7b80\u4f53\u4e2d\u6587\uff1bzh_TW\uff1a\u7e41\u4f53\u4e2d\u6587")),Object(l.b)("tr",null,Object(l.b)("td",null,"desc"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.b)("td",null,"\u58f0\u660e\u83b7\u53d6\u7528\u6237\u4e2a\u4eba\u4fe1\u606f\u540e\u7684\u7528\u9014\uff0c\u4e0d\u8d85\u8fc7 30 \u4e2a\u5b57\u7b26")))),Object(l.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"cloudID"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u654f\u611f\u6570\u636e\u5bf9\u5e94\u7684\u4e91 ID\uff0c\u5f00\u901a",Object(l.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html"},"\u4e91\u5f00\u53d1"),"\u7684\u5c0f\u7a0b\u5e8f\u624d\u4f1a\u8fd4\u56de\uff0c\u53ef\u901a\u8fc7\u4e91\u8c03\u7528\u76f4\u63a5\u83b7\u53d6\u5f00\u653e\u6570\u636e\uff0c\u8be6\u7ec6\u89c1",Object(l.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#method-cloud"},"\u4e91\u8c03\u7528\u76f4\u63a5\u83b7\u53d6\u5f00\u653e\u6570\u636e"))),Object(l.b)("tr",null,Object(l.b)("td",null,"encryptedData"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u5305\u62ec\u654f\u611f\u6570\u636e\u5728\u5185\u7684\u5b8c\u6574\u7528\u6237\u4fe1\u606f\u7684\u52a0\u5bc6\u6570\u636e\uff0c\u8be6\u89c1 ",Object(l.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html"},"\u7528\u6237\u6570\u636e\u7684\u7b7e\u540d\u9a8c\u8bc1\u548c\u52a0\u89e3\u5bc6"))),Object(l.b)("tr",null,Object(l.b)("td",null,"iv"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u52a0\u5bc6\u7b97\u6cd5\u7684\u521d\u59cb\u5411\u91cf\uff0c\u8be6\u89c1 ",Object(l.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#%E5%8A%A0%E5%AF%86%E6%95%B0%E6%8D%AE%E8%A7%A3%E5%AF%86%E7%AE%97%E6%B3%95"},"\u7528\u6237\u6570\u636e\u7684\u7b7e\u540d\u9a8c\u8bc1\u548c\u52a0\u89e3\u5bc6"))),Object(l.b)("tr",null,Object(l.b)("td",null,"rawData"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u4e0d\u5305\u62ec\u654f\u611f\u4fe1\u606f\u7684\u539f\u59cb\u6570\u636e\u5b57\u7b26\u4e32\uff0c\u7528\u4e8e\u8ba1\u7b97\u7b7e\u540d")),Object(l.b)("tr",null,Object(l.b)("td",null,"signature"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u4f7f\u7528 sha1( rawData + sessionkey ) \u5f97\u5230\u5b57\u7b26\u4e32\uff0c\u7528\u4e8e\u6821\u9a8c\u7528\u6237\u4fe1\u606f\uff0c\u8be6\u89c1 ",Object(l.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html"},"\u7528\u6237\u6570\u636e\u7684\u7b7e\u540d\u9a8c\u8bc1\u548c\u52a0\u89e3\u5bc6"))),Object(l.b)("tr",null,Object(l.b)("td",null,"userInfo"),Object(l.b)("td",null," UserInfo "),Object(l.b)("td",null,"\u7528\u6237\u4fe1\u606f\u5bf9\u8c61 (\u6587\u6863\u53c2\u8003 API > \u5f00\u53d1\u63a5\u53e3 > \u7528\u6237\u4fe1\u606f > UserInfo)")))),Object(l.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"// \u63a8\u8350\u4f7f\u7528wx.getUserProfile\u83b7\u53d6\u7528\u6237\u4fe1\u606f\uff0c\u5f00\u53d1\u8005\u6bcf\u6b21\u901a\u8fc7\u8be5\u63a5\u53e3\u83b7\u53d6\u7528\u6237\u4e2a\u4eba\u4fe1\u606f\u5747\u9700\u7528\u6237\u786e\u8ba4\n// \u5f00\u53d1\u8005\u59a5\u5584\u4fdd\u7ba1\u7528\u6237\u5feb\u901f\u586b\u5199\u7684\u5934\u50cf\u6635\u79f0\uff0c\u907f\u514d\u91cd\u590d\u5f39\u7a97\nTaro.getUserProfile({\n  desc: '\u7528\u4e8e\u5b8c\u5584\u4f1a\u5458\u8d44\u6599', // \u58f0\u660e\u83b7\u53d6\u7528\u6237\u4e2a\u4eba\u4fe1\u606f\u540e\u7684\u7528\u9014\uff0c\u540e\u7eed\u4f1a\u5c55\u793a\u5728\u5f39\u7a97\u4e2d\uff0c\u8bf7\u8c28\u614e\u586b\u5199\n  success: (res) => {\n    this.setState({\n      userInfo: res.userInfo,\n      hasUserInfo: true\n    })\n  }\n})\n")),Object(l.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.getUserProfile"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))),Object(l.b)("h2",{id:"\u76f8\u5173\u8d44\u6599"},"\u76f8\u5173\u8d44\u6599"),Object(l.b)("p",null,"\u76f8\u5173 issue : ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/8810"}),"Taro\u4ec0\u4e48\u65f6\u5019\u652f\u6301 getUserProfile \u65b9\u6cd5")))}u.isMDXComponent=!0}}]);