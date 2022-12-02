"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[68110],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64199:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={id:"zio-optics",title:"ZIO Optics"},o=void 0,s={unversionedId:"ecosystem/officials/zio-optics",id:"ecosystem/officials/zio-optics",title:"ZIO Optics",description:"ZIO Optics is a library that makes it easy to modify parts of larger data structures based on a single representation of an optic as a combination of a getter and setter.",source:"@site/docs/ecosystem/officials/zio-optics.md",sourceDirName:"ecosystem/officials",slug:"/ecosystem/officials/zio-optics",permalink:"/ecosystem/officials/zio-optics",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/ecosystem/officials/zio-optics.md",tags:[],version:"current",frontMatter:{id:"zio-optics",title:"ZIO Optics"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Example",id:"example",level:2},{value:"Resources",id:"resources",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-optics"},"ZIO Optics")," is a library that makes it easy to modify parts of larger data structures based on a single representation of an optic as a combination of a getter and setter."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"When we are working with immutable nested data structures, updating and reading operations could be tedious with lots of boilerplates. Optics is a functional programming construct that makes these operations more clear and readable."),(0,r.kt)("p",null,"Key features of ZIO Optics:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Unified Optic Data Type")," \u2014 All the data types like ",(0,r.kt)("inlineCode",{parentName:"li"},"Lens"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Prism"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Optional"),", and so forth are type aliases for the core ",(0,r.kt)("inlineCode",{parentName:"li"},"Optic")," data type."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Composability")," \u2014 We can compose optics to create more advanced ones."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Embracing the Tremendous Power of Concretion")," \u2014 Using concretion instead of unnecessary abstractions, makes the API more ergonomic and easy to use."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Integration with ZIO Data Types")," \u2014 It supports effectful and transactional optics that works with ZIO data structures like ",(0,r.kt)("inlineCode",{parentName:"li"},"Ref")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"TMap"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Helpful Error Channel")," \u2014 Like ZIO, the ",(0,r.kt)("inlineCode",{parentName:"li"},"Optics")," data type has error channels to include failure details.")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"In order to use this library, we need to add the following line in our ",(0,r.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-optics" % "0.1.0"\n')),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"In this example, we are going to update a nested data structure using ZIO Optics:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.optics._\n\ncase class Developer(name: String, manager: Manager)\ncase class Manager(name: String, rating: Rating)\ncase class Rating(upvotes: Int, downvotes: Int)\n\nval developerLens = Lens[Developer, Manager](\n  get = developer => Right(developer.manager),\n  set = manager => developer => Right(developer.copy(manager = manager))\n)\n\nval managerLens = Lens[Manager, Rating](\n  get = manager => Right(manager.rating),\n  set = rating => manager => Right(manager.copy(rating = rating))\n)\n\nval ratingLens = Lens[Rating, Int](\n  get = rating => Right(rating.upvotes),\n  set = upvotes => rating => Right(rating.copy(upvotes = upvotes))\n)\n\n// Composing lenses\nval optic = developerLens >>> managerLens >>> ratingLens\n\nval jane    = Developer("Jane", Manager("Steve", Rating(0, 0)))\nval updated = optic.update(jane)(_ + 1)\n\nprintln(updated)\n')),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=-km5ohYhJa4"},"Zymposium - Optics")," by Adam Fraser and Kit Langton (June 2021) \u2014 Optics are great tools for working with parts of larger data structures and come up in disguise in many places such as ZIO Test assertions.")))}u.isMDXComponent=!0}}]);