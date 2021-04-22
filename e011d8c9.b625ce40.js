(window.webpackJsonp=window.webpackJsonp||[]).push([[1508],{1573:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(1773),a=n(1774),o=(n(0),n(1775)),c=n(1779),i=n(1780),l={title:"\u7ec4\u4ef6\u5e93\u8bf4\u660e"},u={unversionedId:"components-desc",id:"components-desc",isDocsHomePage:!1,title:"\u7ec4\u4ef6\u5e93\u8bf4\u660e",description:"Taro \u4ee5 \u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u5e93 \u4e3a\u6807\u51c6\uff0c\u7ed3\u5408 jsx \u8bed\u6cd5\u89c4\u8303\uff0c\u5b9a\u5236\u4e86\u4e00\u5957\u81ea\u5df1\u7684\u7ec4\u4ef6\u5e93\u89c4\u8303\u3002",source:"@site/docs/components-desc.md",slug:"/components-desc",permalink:"/taro/docs/next/components-desc",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/components-desc.md",version:"current",sidebar:"components",next:{title:"View",permalink:"/taro/docs/next/components/viewContainer/view"}},s=[{value:"\u6ce8\u610f",id:"\u6ce8\u610f",children:[{value:"\u9996\u5b57\u6bcd\u5927\u5199\u4e0e\u9a7c\u5cf0\u5f0f\u547d\u540d",id:"\u9996\u5b57\u6bcd\u5927\u5199\u4e0e\u9a7c\u5cf0\u5f0f\u547d\u540d",children:[]},{value:"\u7ec4\u4ef6\u7684\u4e8b\u4ef6\u4f20\u9012\u90fd\u8981\u4ee5 on \u5f00\u5934",id:"\u7ec4\u4ef6\u7684\u4e8b\u4ef6\u4f20\u9012\u90fd\u8981\u4ee5-on-\u5f00\u5934",children:[]}]}],p={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Taro \u4ee5 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u5e93")," \u4e3a\u6807\u51c6\uff0c\u7ed3\u5408 ",Object(o.b)("inlineCode",{parentName:"p"},"jsx")," \u8bed\u6cd5\u89c4\u8303\uff0c\u5b9a\u5236\u4e86\u4e00\u5957\u81ea\u5df1\u7684\u7ec4\u4ef6\u5e93\u89c4\u8303\u3002"),Object(o.b)("p",null,"\u57fa\u4e8e\u4ee5\u4e0a\u539f\u5219\uff0c\u5728\u5c0f\u7a0b\u5e8f\u7aef\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u6240\u6709\u7684\u5c0f\u7a0b\u5e8f\u539f\u751f\u7ec4\u4ef6\uff0c\u800c\u5728\u5176\u4ed6\u7aef\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u5bf9\u5e94\u7684\u7ec4\u4ef6\u5e93\u5b9e\u73b0"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"H5 \u7aef\uff0c",Object(o.b)("inlineCode",{parentName:"li"},"@tarojs/components"),"\uff0c\u540c\u65f6\u4e5f\u662f\u9700\u8981\u5f15\u5165\u7684\u9ed8\u8ba4\u6807\u51c6\u7ec4\u4ef6\u5e93")),Object(o.b)("p",null,"\u5728\u4f7f\u7528\u65f6\uff0cReact \u4e2d\u6211\u4eec\u9700\u8981\u5148\u4ece Taro \u6807\u51c6\u7ec4\u4ef6\u5e93 ",Object(o.b)("inlineCode",{parentName:"p"},"@tarojs/components")," \u5f15\u7528\u7ec4\u4ef6\uff0c\u518d\u8fdb\u884c\u4f7f\u7528\uff0c\u4f8b\u5982\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"<View />"),"\u3001 ",Object(o.b)("inlineCode",{parentName:"p"},"<Text />")," \u7ec4\u4ef6\uff0c\u800c Vue \u6211\u4eec\u5219\u65e0\u9700\u5f15\u5165"),Object(o.b)(c.a,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"React",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import React, { Component } from 'react'\nimport { View, Text } from '@tarojs/components'\n\nexport default class C extends Component {\n  render () {\n    return (\n      <View className='c'>\n        <Text>c component</Text>\n      </View>\n    )\n  }\n}\n"))),Object(o.b)(i.a,{value:"Vue",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="c">\n    <text>c component</text>\n  </view>\n</template>\n')))),Object(o.b)("h2",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),Object(o.b)("p",null,"\u5728\u7ec4\u4ef6\u7684\u8be6\u7ec6\u6587\u6863\u4e2d\u5217\u51fa\u4e86\u7ec4\u4ef6\u5728\u4e0d\u540c\u7aef\u7684\u652f\u6301\u7a0b\u5ea6\uff0c\u4ee5\u53ca\u57fa\u672c\u7684\u4f7f\u7528\u793a\u4f8b\u3002 \u90e8\u5206\u672a\u5217\u51fa\u793a\u4f8b\u7684\uff0c\u6807\u660e\u4ec5\u5728\u5c0f\u7a0b\u5e8f\u7aef\u652f\u6301\u7684\u7ec4\u4ef6\u7684\u7528\u6cd5\u53ef\u4ee5\u76f4\u63a5\u53c2\u8003",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/"}),"\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u6587\u6863"),"\u3002"),Object(o.b)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\u4ecd\u9700\u9075\u5faa Taro \u7684\u5f00\u53d1\u89c4\u8303\uff1a"),Object(o.b)("h3",{id:"\u9996\u5b57\u6bcd\u5927\u5199\u4e0e\u9a7c\u5cf0\u5f0f\u547d\u540d"},"\u9996\u5b57\u6bcd\u5927\u5199\u4e0e\u9a7c\u5cf0\u5f0f\u547d\u540d"),Object(o.b)("p",null,"\u4f8b\u5982\uff0c\u4f7f\u7528 H5 \u7aef\u5c1a\u672a\u652f\u6301\u7684 map \u7ec4\u4ef6"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import React, { Component } from 'react'\nimport Taro from '@tarojs/taro'\n// \u5f15\u5165 map \u7ec4\u4ef6\nimport { Map } from '@tarojs/components'\n\nclass App extends Components {\n  onTap () {}\n  render () {\n    return (\n      <Map onClick={this.onTap} />\n    )\n  }\n}\n")),Object(o.b)("h3",{id:"\u7ec4\u4ef6\u7684\u4e8b\u4ef6\u4f20\u9012\u90fd\u8981\u4ee5-on-\u5f00\u5934"},"\u7ec4\u4ef6\u7684\u4e8b\u4ef6\u4f20\u9012\u90fd\u8981\u4ee5 on \u5f00\u5934"),Object(o.b)("p",null,"\u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4e2d bind \u5f00\u5934\u8fd9\u6837\u7684\u7528\u6cd5\uff0c\u90fd\u9700\u8981\u8f6c\u6210\u4ee5 on \u5f00\u5934\u7684\u5f62\u5f0f\u3002"))}b.isMDXComponent=!0},1773:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},1774:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))},1775:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||b[m]||o;return n?a.a.createElement(f,i(i({ref:t},u),{},{components:n})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1776:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},1777:function(e,t,n){"use strict";var r=n(0),a=n(1778);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1778:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},1779:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1777),c=n(1776),i=n(51),l=n.n(i),u=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.children,p=e.defaultValue,b=e.values,m=e.groupId,f=e.className,d=Object(o.a)(),O=d.tabGroupChoices,j=d.setTabGroupChoices,v=Object(r.useState)(p),y=v[0],h=v[1];if(null!=m){var g=O[m];null!=g&&g!==y&&b.some((function(e){return e.value===g}))&&h(g)}var x=function(e){h(e),null!=m&&j(m,e)},w=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},f)},b.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return x(t)},onClick:function(){x(t)}},n)}))),t?Object(r.cloneElement)(i.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},i.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},1780:function(e,t,n){"use strict";var r=n(1773),a=n(0),o=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}}}]);