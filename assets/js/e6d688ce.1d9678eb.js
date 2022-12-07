"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[86377],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82349:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={id:"uio",title:"UIO"},o=void 0,p={unversionedId:"datatypes/core/uio",id:"version-1.x/datatypes/core/uio",title:"UIO",description:"UIO[A] is a type alias for ZIO[Any, Nothing, A], which represents an Unexceptional effect that doesn't require any specific environment, and cannot fail, but can succeed with an A.",source:"@site/versioned_docs/version-1.x/datatypes/core/uio.md",sourceDirName:"datatypes/core",slug:"/datatypes/core/uio",permalink:"/version-1.x/datatypes/core/uio",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/core/uio.md",tags:[],version:"1.x",frontMatter:{id:"uio",title:"UIO"},sidebar:"datatypes-sidebar",previous:{title:"ZIO",permalink:"/version-1.x/datatypes/core/zio"},next:{title:"URIO",permalink:"/version-1.x/datatypes/core/urio"}},l={},s=[],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"UIO[A]")," is a type alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO[Any, Nothing, A]"),", which represents an ",(0,r.kt)("strong",{parentName:"p"},"Unexceptional")," effect that doesn't require any specific environment, and cannot fail, but can succeed with an ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Note:"))),(0,r.kt)("p",{parentName:"blockquote"},"In Scala, the ",(0,r.kt)("em",{parentName:"p"},"type alias")," is a way to give a name to another type, to avoid having to repeat the original type again and again. It doesn't affect the type-checking process. It just helps us to have an expressive API design.")),(0,r.kt)("p",null,"Let's see how the ",(0,r.kt)("inlineCode",{parentName:"p"},"UIO")," type alias is defined:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"type UIO[+A] = ZIO[Any, Nothing, A]\n")),(0,r.kt)("p",null,"So the ",(0,r.kt)("inlineCode",{parentName:"p"},"UIO")," just equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," which doesn't need any requirement and cannot fail because in the Scala the ",(0,r.kt)("inlineCode",{parentName:"p"},"Nothing")," type has no inhabitant, we can't create an instance of type ",(0,r.kt)("inlineCode",{parentName:"p"},"Nothing"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," values of type ",(0,r.kt)("inlineCode",{parentName:"p"},"UIO[A]")," (where the error type is ",(0,r.kt)("inlineCode",{parentName:"p"},"Nothing"),") are considered ",(0,r.kt)("em",{parentName:"p"},"infallible"),",\nbecause the ",(0,r.kt)("inlineCode",{parentName:"p"},"Nothing")," type is ",(0,r.kt)("em",{parentName:"p"},"uninhabitable"),", i.e. there can be no actual values of type ",(0,r.kt)("inlineCode",{parentName:"p"},"Nothing"),". Values of this type may produce an ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),", but will never fail with an ",(0,r.kt)("inlineCode",{parentName:"p"},"E"),"."),(0,r.kt)("p",null,"Let's write a fibonacci function. As we don't expect any failure, it is an unexceptional effect:"),(0,r.kt)("p",null,"In the following example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"fib"),", doesn't have any requirement, as it is an unexceptional effect, we don't except any failure, and it succeeds with value of type ",(0,r.kt)("inlineCode",{parentName:"p"},"Int"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.UIO\ndef fib(n: Int): UIO[Int] =\n  if (n <= 1) {\n    UIO.succeed(1)\n  } else {\n    for {\n      fiber1 <- fib(n - 2).fork\n      fiber2 <- fib(n - 1).fork\n      v2     <- fiber2.join\n      v1     <- fiber1.join\n    } yield v1 + v2\n  }\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," ",(0,r.kt)("em",{parentName:"p"},"Principle of The Least Power")),(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," data type is the most powerful effect in the ZIO library. It helps us to model various types of workflows. On other hand, the type aliases are a way of subtyping and specializing the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," type, specific for a less powerful workflow. "),(0,r.kt)("p",{parentName:"blockquote"},"Lot of the time, we don't need such a piece of powerful machinery. So as a rule of thumb, whenever we require a less powerful effect, it's better to use the proper specialized type alias."),(0,r.kt)("p",{parentName:"blockquote"},"So there is no need to convert type aliases to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," data type, whenever the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," data type is required, we can use the most precise type alias to fit our workflow requirement.")))}u.isMDXComponent=!0}}]);