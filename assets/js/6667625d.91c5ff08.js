"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[30815],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var o=n.createContext({}),l=function(t){var e=n.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},p=function(t){var e=l(t.components);return n.createElement(o.Provider,{value:e},t.children)},u="mdxType",y={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,o=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),u=l(r),d=a,f=u["".concat(o,".").concat(d)]||u[d]||y[d]||i;return r?n.createElement(f,s(s({ref:e},p),{},{components:r})):n.createElement(f,s({ref:e},p))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,s=new Array(i);s[0]=d;var c={};for(var o in e)hasOwnProperty.call(e,o)&&(c[o]=e[o]);c.originalType=t,c[u]="string"==typeof t?t:a,s[1]=c;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},95686:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={id:"entry-statistics",title:"Entry Statistics"},s=void 0,c={unversionedId:"zio-cache/entry-statistics",id:"zio-cache/entry-statistics",title:"Entry Statistics",description:"ZIO Cache also tracks statistics associated with each entry, such as when the entry was last accessed. You can access the statistics for a specified entry using the entryStats operator on Cache.",source:"@site/docs/zio-cache/entry-statistics.md",sourceDirName:"zio-cache",slug:"/zio-cache/entry-statistics",permalink:"/zio-cache/entry-statistics",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-cache/entry-statistics.md",tags:[],version:"current",frontMatter:{id:"entry-statistics",title:"Entry Statistics"},sidebar:"ecosystem-sidebar",previous:{title:"Cache Statistics",permalink:"/zio-cache/cache-statistics"},next:{title:"Getting Started",permalink:"/zio-config/"}},o={},l=[],p={toc:l};function u(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ZIO Cache also tracks statistics associated with each entry, such as when the entry was last accessed. You can access the statistics for a specified entry using the ",(0,a.kt)("inlineCode",{parentName:"p"},"entryStats")," operator on ",(0,a.kt)("inlineCode",{parentName:"p"},"Cache"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nimport java.time.Instant\n\ntrait EntryStats {\n  def loaded: Instant\n}\n\ntrait Cache[-Key, +Error, +Value] {\n  def entryStats: UIO[EntryStats]\n}\n")),(0,a.kt)("p",null,"More entry statistics will be added over time."))}u.isMDXComponent=!0}}]);