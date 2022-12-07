"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[37940],{3905:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>g});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||f[m]||o;return n?t.createElement(g,i(i({ref:r},l),{},{components:n})):t.createElement(g,i({ref:r},l))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77502:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var t=n(87462),a=(n(67294),n(3905));const o={id:"tapping-errors",title:"Tapping Errors"},i=void 0,p={unversionedId:"reference/error-management/operations/tapping-errors",id:"reference/error-management/operations/tapping-errors",title:"Tapping Errors",description:"Like tapping for success values ZIO has several operators for tapping error values. So we can peek into failures or underlying defects or causes:",source:"@site/docs/reference/error-management/operations/tapping-errors.md",sourceDirName:"reference/error-management/operations",slug:"/reference/error-management/operations/tapping-errors",permalink:"/reference/error-management/operations/tapping-errors",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/error-management/operations/tapping-errors.md",tags:[],version:"current",frontMatter:{id:"tapping-errors",title:"Tapping Errors"},sidebar:"reference-sidebar",previous:{title:"Filtering the Success Channel",permalink:"/reference/error-management/operations/filtering-the-success-channel"},next:{title:"Exposing Errors in The Success Channel",permalink:"/reference/error-management/operations/exposing-errors-in-the-success-channel"}},s={},c=[],l={toc:c};function u(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Like ",(0,a.kt)("a",{parentName:"p",href:"/reference/core/zio/#tapping"},"tapping for success values")," ZIO has several operators for tapping error values. So we can peek into failures or underlying defects or causes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZIO[-R, +E, +A] {\n  def tapError[R1 <: R, E1 >: E](f: E => ZIO[R1, E1, Any]): ZIO[R1, E1, A]\n  def tapErrorCause[R1 <: R, E1 >: E](f: Cause[E] => ZIO[R1, E1, Any]): ZIO[R1, E1, A]\n  def tapErrorTrace[R1 <: R, E1 >: E](f: ((E, Trace)) => ZIO[R1, E1, Any]): ZIO[R1, E1, A]\n  def tapDefect[R1 <: R, E1 >: E](f: Cause[Nothing] => ZIO[R1, E1, Any]): ZIO[R1, E1, A]\n  def tapBoth[R1 <: R, E1 >: E](f: E => ZIO[R1, E1, Any], g: A => ZIO[R1, E1, Any]): ZIO[R1, E1, A]\n  def tapEither[R1 <: R, E1 >: E](f: Either[E, A] => ZIO[R1, E1, Any]): ZIO[R1, E1, A]\n}\n")),(0,a.kt)("p",null,"Let's try an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  val myApp: ZIO[Any, NumberFormatException, Int] =\n    Console.readLine\n      .mapAttempt(_.toInt)\n      .refineToOrDie[NumberFormatException]\n      .tapError { e =>\n        ZIO.debug(s"user entered an invalid input: ${e}").when(e.isInstanceOf[NumberFormatException])\n      }\n\n  def run = myApp\n}\n')))}u.isMDXComponent=!0}}]);