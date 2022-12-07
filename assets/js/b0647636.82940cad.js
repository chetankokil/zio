"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[30857],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88068:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={id:"cause",title:"Cause"},o=void 0,l={unversionedId:"reference/core/cause",id:"reference/core/cause",title:"Cause",description:"The ZIO[R, E, A] effect is polymorphic in values of type E and we can work with any error type that we want, but there is a lot of information that is not inside an arbitrary E value. So as a result ZIO needs somewhere to store things like unexpected error or defects, stack and execution traces, cause of fiber interruptions, and so forth.",source:"@site/docs/reference/core/cause.md",sourceDirName:"reference/core",slug:"/reference/core/cause",permalink:"/reference/core/cause",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/core/cause.md",tags:[],version:"current",frontMatter:{id:"cause",title:"Cause"},sidebar:"reference-sidebar",previous:{title:"Exit",permalink:"/reference/core/exit"},next:{title:"Control Flow",permalink:"/reference/control-flow/"}},s={},p=[{value:"Cause Internals",id:"cause-internals",level:2},{value:"Cause Variations",id:"cause-variations",level:2},{value:"Empty",id:"empty",level:3},{value:"Fail",id:"fail",level:3},{value:"Die",id:"die",level:3},{value:"Interrupt",id:"interrupt",level:3},{value:"Stackless",id:"stackless",level:3},{value:"Both",id:"both",level:3},{value:"Then",id:"then",level:3}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO[R, E, A]")," effect is polymorphic in values of type ",(0,r.kt)("inlineCode",{parentName:"p"},"E")," and we can work with any error type that we want, but there is a lot of information that is not inside an arbitrary ",(0,r.kt)("inlineCode",{parentName:"p"},"E")," value. So as a result ZIO needs somewhere to store things like ",(0,r.kt)("strong",{parentName:"p"},"unexpected error or defects"),", ",(0,r.kt)("strong",{parentName:"p"},"stack and execution traces"),", ",(0,r.kt)("strong",{parentName:"p"},"cause of fiber interruptions"),", and so forth."),(0,r.kt)("p",null,"ZIO is very strict about preserving the full information related to a failure. It captures all type of errors into the ",(0,r.kt)("inlineCode",{parentName:"p"},"Cause")," data type. ZIO uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"Cause[E]")," data type to store the full story of failure. So its error model is ",(0,r.kt)("strong",{parentName:"p"},"lossless"),". It doesn't throw information related to the failure result. So we can figure out exactly what happened during the operation of our effects."),(0,r.kt)("p",null,"It is important to note that ",(0,r.kt)("inlineCode",{parentName:"p"},"Cause")," is the underlying data type for the ZIO data type, and we don't usually deal with it directly. Even though it is not a data type that we deal with very often, anytime we want, we can access the ",(0,r.kt)("inlineCode",{parentName:"p"},"Cause")," data structure, which gives us total access to all parallel and sequential errors in our codebase."),(0,r.kt)("h2",{id:"cause-internals"},"Cause Internals"),(0,r.kt)("p",null,"ZIO uses a data structure from functional programming called a ",(0,r.kt)("em",{parentName:"p"},"semiring")," for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Cause")," data type. ",(0,r.kt)("strong",{parentName:"p"},"It allows us to take a base type ",(0,r.kt)("inlineCode",{parentName:"strong"},"E")," that represents the error type and then capture the sequential and parallel composition of errors in a fully lossless fashion"),"."),(0,r.kt)("p",null,"The following snippet shows how the ",(0,r.kt)("inlineCode",{parentName:"p"},"Cause")," is designed as a semiring data structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"sealed abstract class Cause[+E] extends Product with Serializable { self =>\n  import Cause._\n  def trace: Trace = ???\n\n  final def ++[E1 >: E](that: Cause[E1]): Cause[E1] = Then(self, that)\n  final def &&[E1 >: E](that: Cause[E1]): Cause[E1] = Both(self, that)\n}\n\nobject Cause extends Serializable {\n  case object Empty extends Cause[Nothing]\n  final case class Fail[+E](value: E, override val trace: Trace) extends Cause[E]\n  final case class Die(value: Throwable, override val trace: Trace) extends Cause[Nothing]\n  final case class Interrupt(fiberId: FiberId, override val trace: Trace) extends Cause[Nothing]\n  final case class Stackless[+E](cause: Cause[E], stackless: Boolean) extends Cause[E]\n  final case class Then[+E](left: Cause[E], right: Cause[E]) extends Cause[E]\n  final case class Both[+E](left: Cause[E], right: Cause[E]) extends Cause[E]\n}\n")),(0,r.kt)("p",null,"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Cause")," data structure described above, ZIO can capture all errors inside the application."),(0,r.kt)("h2",{id:"cause-variations"},"Cause Variations"),(0,r.kt)("p",null,"There are several causes for various errors. In this section, we will describe each of these causes. We will see how they can be created manually or how they will be automatically generated as the underlying error management data type of a ZIO application."),(0,r.kt)("h3",{id:"empty"},"Empty"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Empty")," cause indicates the lack of errors. We use ",(0,r.kt)("inlineCode",{parentName:"p"},"Cause.empty")," constructor to create an ",(0,r.kt)("inlineCode",{parentName:"p"},"Empty")," cause. Using ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO.failCause")," we can create a ZIO effect that has an empty cause:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nZIO.failCause(Cause.empty).cause.debug\n")),(0,r.kt)("p",null,"Also, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO#cause")," to uncover the underlying cause of an effect. For example, we know that the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO.succeed(5)")," has no errors. So, let's check that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ZIO.succeed(5).cause.debug\n// Empty\n\nZIO.attempt(5).cause.debug\n// Empty\n")),(0,r.kt)("h3",{id:"fail"},"Fail"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Fail")," cause indicates the cause of an expected error of type ",(0,r.kt)("inlineCode",{parentName:"p"},"E"),". We can create one using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Cause.fail")," constructor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nZIO.failCause(Cause.fail("Oh uh!")).cause.debug\n')),(0,r.kt)("p",null,"Let's uncover the cause of some ZIO effects especially when we combine them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nZIO.fail("Oh uh!").cause.debug\n// Fail(Oh uh!,Trace(Runtime(2,1646395627),Chunk(<empty>.MainApp.run(MainApp.scala:3))))\n\n(ZIO.fail("Oh uh!") *> ZIO.dieMessage("Boom!") *> ZIO.interrupt).cause.debug\n// Fail(Oh uh!,Trace(Runtime(2,1646396370),Chunk(<empty>.MainApp.run(MainApp.scala:6))))\n\n(ZIO.fail("Oh uh!") <*> ZIO.fail("Oh Error!")).cause.debug\n// Fail(Oh uh!,Trace(Runtime(2,1646396419),Chunk(<empty>.MainApp.run(MainApp.scala:9))))\n\nval myApp: ZIO[Any, String, Int] =\n  for {\n    i <- ZIO.succeed(5)\n    _ <- ZIO.fail("Oh uh!")\n    _ <- ZIO.dieMessage("Boom!")\n    _ <- ZIO.interrupt\n  } yield i\nmyApp.cause.debug\n')),(0,r.kt)("h3",{id:"die"},"Die"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Die")," cause indicates a defect or in other words, an unexpected failure of type ",(0,r.kt)("inlineCode",{parentName:"p"},"Throwable"),". Additionally, it contains the stack traces of the occurred defect. We can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Cause.die")," to create one:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nZIO.failCause(Cause.die(new Throwable("Boom!"))).cause.debug\n')),(0,r.kt)("p",null,"If we have a bug in our code and something throws an unexpected exception, that information would be described inside a ",(0,r.kt)("inlineCode",{parentName:"p"},"Die"),". Let try to investigate some ZIO codes that will die:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nZIO.succeed(5 / 0).cause.debug\n// Die(java.lang.ArithmeticException: / by zero,Trace(Runtime(2,1646480112),Chunk(zio.internal.FiberContext.runUntil(FiberContext.scala:538),<empty>.MainApp.run(MainApp.scala:3))))\n\nZIO.dieMessage("Boom!").cause.debug\n')),(0,r.kt)("p",null,"It is worth noting that the latest example is wrapped by the ",(0,r.kt)("inlineCode",{parentName:"p"},"Stackless")," cause in the previous example. We will discuss the ",(0,r.kt)("inlineCode",{parentName:"p"},"Stackeless")," further, but for now, it is enough to know that the ",(0,r.kt)("inlineCode",{parentName:"p"},"Stackeless")," include fewer stack traces for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Die")," cause."),(0,r.kt)("h3",{id:"interrupt"},"Interrupt"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Interrupt")," cause indicates a fiber interruption which contains information of the ",(0,r.kt)("em",{parentName:"p"},"fiber id")," of the interrupted fiber and also the corresponding stack strace. Let's try an example of:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nZIO.interrupt.cause.debug\n// Interrupt(Runtime(2,1646471715),Trace(Runtime(2,1646471715),Chunk(<empty>.MainApp.run(MainApp.scala:3))))\n\nZIO.never.fork\n  .flatMap(f => f.interrupt *> f.join)\n  .cause\n  .debug\n")),(0,r.kt)("h3",{id:"stackless"},"Stackless"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Stackless")," cause is to store stack traces and execution traces. It has a boolean stackless flag which denotes that the ZIO runtime should print the full stack trace of the inner cause or just print the few lines of it."),(0,r.kt)("p",null,"For example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO.dieMessage")," uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"Stackless"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nZIO.dieMessage("Boom!").cause.debug\n')),(0,r.kt)("p",null,"So when we run it the following stack traces will be printed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'timestamp=2022-03-05T11:08:19.530710679Z level=ERROR thread=#zio-fiber-0 message="Exception in thread "zio-fiber-2" java.lang.RuntimeException: Boom!\nat <empty>.MainApp.run(MainApp.scala:3)"\n')),(0,r.kt)("p",null,"While the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO.die")," doesn't use ",(0,r.kt)("inlineCode",{parentName:"p"},"Stackless")," cause:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nZIO.die(new Throwable("Boom!")).cause.debug\n')),(0,r.kt)("p",null,"So it prints the full stack trace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'timestamp=2022-03-05T11:19:12.666418357Z level=ERROR thread=#zio-fiber-0 message="Exception in thread "zio-fiber-2" java.lang.Exception: Boom!\n    at MainApp$.$anonfun$run$1(MainApp.scala:4)\n    at zio.ZIO$.$anonfun$die$1(ZIO.scala:3384)\n    at zio.internal.FiberContext.runUntil(FiberContext.scala:255)\n    at zio.internal.FiberContext.run(FiberContext.scala:115)\n    at zio.internal.ZScheduler$$anon$1.run(ZScheduler.scala:151)\n    at <empty>.MainApp.run(MainApp.scala:4)"\n')),(0,r.kt)("h3",{id:"both"},"Both"),(0,r.kt)("p",null,"When we are doing parallel computation, the effect can fail for more than one reason. If we are doing two things at once and both of them fail then we actually have two errors. So, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Both")," cause stores the composition of two parallel causes."),(0,r.kt)("p",null,"For example, if we run two parallel fibers with ",(0,r.kt)("inlineCode",{parentName:"p"},"zipPar")," and all of them fail, so their causes will be encoded with ",(0,r.kt)("inlineCode",{parentName:"p"},"Both"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nval myApp: ZIO[Any, String, Unit] =\n  for {\n    f1 <- ZIO.fail("Oh uh!").fork\n    f2 <- ZIO.dieMessage("Boom!").fork\n    _ <- (f1 <*> f2).join\n  } yield ()\nmyApp.cause.debug\n')),(0,r.kt)("p",null,"Ir we run the ",(0,r.kt)("inlineCode",{parentName:"p"},"myApp")," in the stack trace we can see two exception traces occurred on two separate fibers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'timestamp=2022-03-05T12:37:46.831096692Z level=ERROR thread=#zio-fiber-0 message="Exception in thread "zio-fiber-13" java.lang.String: Oh uh!\nat <empty>.MainApp.myApp(MainApp.scala:5)\n  Exception in thread "zio-fiber-14" java.lang.RuntimeException: Boom!\n  at <empty>.MainApp.myApp(MainApp.scala:6)"\n')),(0,r.kt)("p",null,"Other parallel operators are also the same, for example, ZIO encode the underlying cause of the ",(0,r.kt)("inlineCode",{parentName:"p"},'(ZIO.fail("Oh uh!") <&> ZIO.dieMessage("Boom!"))')," with ",(0,r.kt)("inlineCode",{parentName:"p"},"Both")," cause."),(0,r.kt)("h3",{id:"then"},"Then"),(0,r.kt)("p",null,"ZIO uses ",(0,r.kt)("inlineCode",{parentName:"p"},"Then")," cause to encode sequential errors. For example, if we perform ZIO's analog of ",(0,r.kt)("inlineCode",{parentName:"p"},"try-finally")," (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO#ensuring"),"), and both of ",(0,r.kt)("inlineCode",{parentName:"p"},"try")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"finally")," blocks fail, so their causes are encoded with ",(0,r.kt)("inlineCode",{parentName:"p"},"Then"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nval myApp =\n  ZIO.fail("first")\n    .ensuring(ZIO.die(throw new Exception("second")))\n\nmyApp.cause.debug\n')),(0,r.kt)("p",null,"If we run the ",(0,r.kt)("inlineCode",{parentName:"p"},"myApp")," effect, we can see the following stack trace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'timestamp=2022-03-05T13:30:17.335173071Z level=ERROR thread=#zio-fiber-0 message="Exception in thread "zio-fiber-2" java.lang.String: first\n    at <empty>.MainApp.myApp(MainApp.scala:4)\n    at <empty>.MainApp.myApp(MainApp.scala:5)\n    Suppressed: java.lang.Exception: second\n        at MainApp$.$anonfun$myApp$3(MainApp.scala:5)\n        at zio.ZIO$.$anonfun$die$1(ZIO.scala:3384)\n        at zio.internal.FiberContext.runUntil(FiberContext.scala:255)\n        at zio.internal.FiberContext.run(FiberContext.scala:115)\n        at zio.internal.ZScheduler$$anon$1.run(ZScheduler.scala:151)\n        at zio.internal.FiberContext.runUntil(FiberContext.scala:538)\n        at <empty>.MainApp.myApp(MainApp.scala:5)"\n')),(0,r.kt)("p",null,"As we can see in the above stack trace, the ",(0,r.kt)("em",{parentName:"p"},"first")," failure was suppressed by the ",(0,r.kt)("em",{parentName:"p"},"second")," defect."))}u.isMDXComponent=!0}}]);