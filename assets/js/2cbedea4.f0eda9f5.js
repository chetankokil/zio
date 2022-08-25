"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[4778],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(d,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32106:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={id:"index",title:"Introduction To Property Testing"},o=void 0,s={unversionedId:"reference/test/property-testing/index",id:"reference/test/property-testing/index",title:"Introduction To Property Testing",description:"What is Property-Based Testing?",source:"@site/docs/reference/test/property-testing/index.md",sourceDirName:"reference/test/property-testing",slug:"/reference/test/property-testing/",permalink:"/reference/test/property-testing/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/test/property-testing/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction To Property Testing"},sidebar:"reference-sidebar",previous:{title:"Timing-out Tests",permalink:"/reference/test/aspects/timing-out-tests"},next:{title:"Gen",permalink:"/reference/test/property-testing/gen"}},d={},l=[{value:"What is Property-Based Testing?",id:"what-is-property-based-testing",level:2}],p={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-property-based-testing"},"What is Property-Based Testing?"),(0,r.kt)("p",null,"In property-based testing, instead of testing individual values and making assertions on the results, we rely on testing the properties of the system which is under the test."),(0,r.kt)("p",null,"To be more acquainted with property-based testing, let's look at how we can test a simple addition function. So assume we have a function ",(0,r.kt)("inlineCode",{parentName:"p"},"add")," that adds two numbers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def add(a: Int, b: Int): Int = ???\n")),(0,r.kt)("p",null,"in a typical test we start with some well-known values as test inputs and check if the function returns the expected values for each of the pair inputs:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Input"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Expected Output"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"(0, 0)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"(1, 0)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"(0, 1)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"(0, -1)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"(-1, 0)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"..."),(0,r.kt)("td",{parentName:"tr",align:"center"},"...")))),(0,r.kt)("p",null,"Now we can test all the inputs and make sure the ",(0,r.kt)("inlineCode",{parentName:"p"},"add")," function returns the expected values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.test._\n\nobject AdditionSpec extends ZIOSpecDefault {\n\n  def add(a: Int, b: Int): Int = ???\n\n  val testData = Seq(\n    ((0, 0), 0),\n    ((1, 0), 1),\n    ((0, 1), 1),\n    ((0, -1), -1),\n    ((-1, 0), -1),\n    ((1, 1), 2),\n    ((1, -1), 0),\n    ((-1, 1), 0)\n  )\n\n  def spec =\n    test("test add function") {\n      assertTrue {\n        testData.forall { case ((a, b), expected) =>\n          add(a, b) == expected\n        }\n      }\n    }\n}\n')),(0,r.kt)("p",null,"This is not a very good approach because it is very hard to find a set of inputs that will cover all possible behaviors of the addition function."),(0,r.kt)("p",null,"Instead, in property-based testing, we extract the set of properties that our function must satisfy. So let's think about the ",(0,r.kt)("inlineCode",{parentName:"p"},"add")," function and find out what properties it must satisfy:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Commutative Property"),"\u2014 It says that changing the order of addends does not change the result. So for all ",(0,r.kt)("inlineCode",{parentName:"li"},"a")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"b"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"add(a, b)")," must be equal to ",(0,r.kt)("inlineCode",{parentName:"li"},"add(a, b)"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"assertTrue(add(a, b) == add(b, a))\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Associative Property"),"\u2014 This says that changing the grouping of addends does not change the result. So for all ",(0,r.kt)("inlineCode",{parentName:"li"},"a"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"b")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"c"),", the ",(0,r.kt)("inlineCode",{parentName:"li"},"add(add(a, b), c)")," must be equal to ",(0,r.kt)("inlineCode",{parentName:"li"},"add(a, add(b, c))"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"assertTrue(add(add(a, b), c) == add(a, add(b, c)))\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Identity Property"),"\u2014 For all ",(0,r.kt)("inlineCode",{parentName:"li"},"a"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"add(a, 0)")," must be equal to ",(0,r.kt)("inlineCode",{parentName:"li"},"a"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"assertTrue(add(a, 0) == a)\n")),(0,r.kt)("p",null,"If we test all of these properties we can be sure that the ",(0,r.kt)("inlineCode",{parentName:"p"},"add")," function works as expected, so let's see how we can do that using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Gen")," data type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.test._\nimport zio.test._\n\nobject AdditionSpec extends ZIOSpecDefault {\n\n  def add(a: Int, b: Int): Int = ???\n\n  def spec = suite("Add Spec")(\n    test("add is commutative") {\n      check(Gen.int, Gen.int) { (a, b) =>\n        assertTrue(add(a, b) == add(b, a))\n      }\n    },\n    test("add is associative") {\n      check(Gen.int, Gen.int, Gen.int) { (a, b, c) =>\n        assertTrue(add(add(a, b), c) == add(a, add(b, c)))\n      }\n    },\n    test("add is identitive") {\n      check(Gen.int) { a =>\n        assertTrue(add(a, 0) == a)\n      }\n    }\n  )\n}\n')))}c.isMDXComponent=!0}}]);