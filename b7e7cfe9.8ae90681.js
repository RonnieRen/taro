(window.webpackJsonp=window.webpackJsonp||[]).push([[1251],{1316:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var c=n(1773),r=n(1774),o=(n(0),n(1775)),a={title:"Taro.chooseInvoice(option)",sidebar_label:"chooseInvoice"},i={unversionedId:"apis/open-api/invoice/chooseInvoice",id:"version-3.x/apis/open-api/invoice/chooseInvoice",isDocsHomePage:!1,title:"Taro.chooseInvoice(option)",description:"\u9009\u62e9\u7528\u6237\u5df2\u6709\u7684\u53d1\u7968\u3002",source:"@site/versioned_docs/version-3.x/apis/open-api/invoice/chooseInvoice.md",slug:"/apis/open-api/invoice/chooseInvoice",permalink:"/taro/docs/apis/open-api/invoice/chooseInvoice",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/open-api/invoice/chooseInvoice.md",version:"3.x",sidebar_label:"chooseInvoice",sidebar:"version-3.x/API",previous:{title:"Taro.chooseInvoiceTitle(option)",permalink:"/taro/docs/apis/open-api/invoice/chooseInvoiceTitle"},next:{title:"Taro.startSoterAuthentication(option)",permalink:"/taro/docs/apis/open-api/soter/startSoterAuthentication"}},l=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],b={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(c.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u9009\u62e9\u7528\u6237\u5df2\u6709\u7684\u53d1\u7968\u3002"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u901a\u8fc7 cardId \u548c encryptCode \u83b7\u5f97\u62a5\u9500\u53d1\u7968\u7684\u4fe1\u606f"),"\n\u8bf7\u53c2\u8003",Object(o.b)("a",Object(c.a)({parentName:"p"},{href:"https://mp.weixin.qq.com/wiki?t=resource/res_main&id=21517918939oae3U"}),"\u5fae\u4fe1\u7535\u5b50\u53d1\u7968\u6587\u6863"),"\u4e2d\uff0c\u300c\u67e5\u8be2\u62a5\u9500\u53d1\u7968\u4fe1\u606f\u300d\u90e8\u5206\u3002\n\u5176\u4e2d ",Object(o.b)("inlineCode",{parentName:"p"},"access_token")," \u7684\u83b7\u53d6\u8bf7\u53c2\u8003",Object(o.b)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/access-token/auth.getAccessToken.html"}),"auth.getAccessToken"),"\u6587\u6863"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoice.html"}),"\u53c2\u8003\u6587\u6863"))),Object(o.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(o.b)("pre",null,Object(o.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<SuccessCallbackResult>\n")),Object(o.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(o.b)("h3",{id:"option"},"Option"),Object(o.b)("table",null,Object(o.b)("thead",null,Object(o.b)("tr",null,Object(o.b)("th",null,"\u53c2\u6570"),Object(o.b)("th",null,"\u7c7b\u578b"),Object(o.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(o.b)("th",null,"\u8bf4\u660e"))),Object(o.b)("tbody",null,Object(o.b)("tr",null,Object(o.b)("td",null,"complete"),Object(o.b)("td",null,Object(o.b)("code",null,"(res: CallbackResult) => void")),Object(o.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(o.b)("tr",null,Object(o.b)("td",null,"fail"),Object(o.b)("td",null,Object(o.b)("code",null,"(res: CallbackResult) => void")),Object(o.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(o.b)("tr",null,Object(o.b)("td",null,"success"),Object(o.b)("td",null,Object(o.b)("code",null,"(result: SuccessCallbackResult) => void")),Object(o.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(o.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(o.b)("table",null,Object(o.b)("thead",null,Object(o.b)("tr",null,Object(o.b)("th",null,"\u53c2\u6570"),Object(o.b)("th",null,"\u7c7b\u578b"),Object(o.b)("th",null,"\u8bf4\u660e"))),Object(o.b)("tbody",null,Object(o.b)("tr",null,Object(o.b)("td",null,"invoiceInfo"),Object(o.b)("td",null,Object(o.b)("code",null,"string")),Object(o.b)("td",null,"\u7528\u6237\u9009\u4e2d\u7684\u53d1\u7968\u4fe1\u606f\uff0c\u683c\u5f0f\u4e3a\u4e00\u4e2a JSON \u5b57\u7b26\u4e32\uff0c\u5305\u542b\u4e09\u4e2a\u5b57\u6bb5\uff1a card_id\uff1a\u6240\u9009\u53d1\u7968\u5361\u5238\u7684 cardId\uff0cencrypt_code\uff1a\u6240\u9009\u53d1\u7968\u5361\u5238\u7684\u52a0\u5bc6 code\uff0c\u62a5\u9500\u65b9\u53ef\u4ee5\u901a\u8fc7 cardId \u548c encryptCode \u83b7\u5f97\u62a5\u9500\u53d1\u7968\u7684\u4fe1\u606f\uff0capp_id\uff1a \u53d1\u7968\u65b9\u7684 appId\u3002")),Object(o.b)("tr",null,Object(o.b)("td",null,"errMsg"),Object(o.b)("td",null,Object(o.b)("code",null,"string")),Object(o.b)("td",null,"\u8c03\u7528\u7ed3\u679c")))),Object(o.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(o.b)("pre",null,Object(o.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.chooseInvoice({\n  success: function (res) {}\n})\n")),Object(o.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(o.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(o.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"Taro.chooseInvoice"),Object(o.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(o.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0},1773:function(e,t,n){"use strict";function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return c}))},1774:function(e,t,n){"use strict";function c(e,t){if(null==e)return{};var n,c,r={},o=Object.keys(e);for(c=0;c<o.length;c++)n=o[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return c}))},1775:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var c=n(0),r=n.n(c);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},o=Object.keys(e);for(c=0;c<o.length;c++)n=o[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(c=0;c<o.length;c++)n=o[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,o=e.originalType,a=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=c,O=p["".concat(a,".").concat(d)]||p[d]||s[d]||o;return n?r.a.createElement(O,i(i({ref:t},b),{},{components:n})):r.a.createElement(O,i({ref:t},b))}));function O(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:c,a[1]=i;for(var b=2;b<o;b++)a[b]=n[b];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);