"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[98090],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),k=p(a),d=r,u=k["".concat(c,".").concat(d)]||k[d]||m[d]||o;return a?n.createElement(u,s(s({ref:t},l),{},{components:a})):n.createElement(u,s({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[k]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},45922:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={id:"akka-interop",title:"Akka Interop"},s=void 0,i={unversionedId:"zio-actors/akka-interop",id:"zio-actors/akka-interop",title:"Akka Interop",description:"Akka Interop gives you the ability to send and receive messages between zio actors and akka typed actors.",source:"@site/docs/zio-actors/akka-interop.md",sourceDirName:"zio-actors",slug:"/zio-actors/akka-interop",permalink:"/zio-actors/akka-interop",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-actors/akka-interop.md",tags:[],version:"current",frontMatter:{id:"akka-interop",title:"Akka Interop"},sidebar:"ecosystem-sidebar",previous:{title:"Persistence",permalink:"/zio-actors/persistence"},next:{title:"Examples",permalink:"/zio-actors/examples"}},c={},p=[],l={toc:p};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Akka Interop gives you the ability to send and receive messages between zio actors and akka typed actors."),(0,r.kt)("p",null,"To use Akka Interops you need in your ",(0,r.kt)("inlineCode",{parentName:"p"},"build.sbt"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sbt"},'libraryDependencies += "dev.zio" %% "zio-actors-akka-interop" % "0.1.0"\n')),(0,r.kt)("p",null,"Imports required for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.actors.Actor.Stateful\nimport zio.actors.{ ActorSystem, ActorRef, Context, Supervisor }\nimport zio.actors.akka.{ AkkaTypedActor, AkkaTypedActorRefLocal }\nimport zio.{ ZIO, IO, Runtime }\n\nimport akka.actor.typed\nimport akka.actor.typed.Behavior\nimport akka.actor.typed.scaladsl.Behaviors\nimport akka.actor.typed.Scheduler\nimport akka.util.Timeout\n\nimport scala.concurrent.duration._\n")),(0,r.kt)("p",null,"Case class for messages that zio actor send and receive from akka actor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"sealed trait TypedMessage[+_]\ncase class PingToZio(zioReplyToActor: ActorRef[ZioMessage], msg: String) extends TypedMessage[Unit]\ncase class PingFromZio(zioSenderActor: ActorRef[ZioMessage]) extends TypedMessage[Unit]\n\nsealed trait ZioMessage[+_]\ncase class PongFromAkka(msg: String) extends ZioMessage[Unit]\ncase class Ping(akkaActor: AkkaTypedActorRefLocal[TypedMessage]) extends ZioMessage[Unit]\n")),(0,r.kt)("p",null,"For zio actor basics, (",(0,r.kt)("a",{parentName:"p",href:"/zio-actors/basics#usage"},"Basics section"),").\nHere's the ",(0,r.kt)("inlineCode",{parentName:"p"},"Stateful")," implementation for our zio actor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val handler = new Stateful[Any, String, ZioMessage] {\n  override def receive[A](state: String, msg: ZioMessage[A], context: Context): IO[Throwable, (String, A)] =\n    msg match {             \n      case PongFromAkka(msg) => ZIO.succeed((msg, ()))\n      case Ping(akkaActor) =>\n              for {\n                 self <- context.self[ZioMessage]\n                 _    <- akkaActor ! PingFromZio(self)\n               } yield (state, ())\n      case _=> ZIO.fail(new Exception("fail"))\n    }\n}\n')),(0,r.kt)("p",null,"Akka actors (",(0,r.kt)("a",{parentName:"p",href:"https://doc.akka.io/docs/akka/current/typed/actor-lifecycle.html#creating-actors"},"Creation akka actors"),"),\nneed a behavior, to define the messages to be handled, in this case send and receive messages to zio actor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'object TestBehavior {\n    lazy val zioRuntime = Runtime.default\n    def apply(): Behavior[TypedMessage[_]] =\n      Behaviors.receiveMessage { message =>\n        message match {                  \n          case PingToZio(zioReplyToActor, msgToZio) => \n            zio.Unsafe.unsafe { implicit unsafe =>\n              zioRuntime.unsafe.run(zioReplyToActor ! PongFromAkka(msgToZio))\n            }\n          case PingFromZio(zioSenderActor)          =>\n            zio.Unsafe.unsafe { implicit unsafe => \n              zioRuntime.unsafe.run(zioSenderActor ! PongFromAkka("Pong from Akka"))\n            }\n        }\n        Behaviors.same\n      }\n  } \n')),(0,r.kt)("p",null,"We are ready to start sending messages from zio to akka, or vice versa via ",(0,r.kt)("inlineCode",{parentName:"p"},"fire-and-forget")," interaction pattern,\nbut first we need to create a ZIO value with the created akka ActorRef(or ActorSystem), using ",(0,r.kt)("inlineCode",{parentName:"p"},"AkkaTypedActor.make"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'for {\n  akkaSystem <- ZIO.succeed(typed.ActorSystem(TestBehavior(), "akkaSystem"))\n  system     <- ActorSystem("zioSystem")\n  akkaActor  <- AkkaTypedActor.make(akkaSystem)\n  zioActor   <- system.make("zioActor", Supervisor.none, "", handler)\n  _          <- akkaActor ! PingToZio(zioActor, "Ping from Akka")\n  _          <- zioActor ! Ping(akkaActor)\n} yield ()\n')),(0,r.kt)("p",null,"There's also ",(0,r.kt)("inlineCode",{parentName:"p"},"ask")," interaction pattern, that provides a way to send a message to an akka actor and expect a response.\nIt's performed via ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," method, and needs a parameter of type ",(0,r.kt)("inlineCode",{parentName:"p"},"typed.ActorRef[R] => T")," (",(0,r.kt)("inlineCode",{parentName:"p"},"R")," represents the response type,\n",(0,r.kt)("inlineCode",{parentName:"p"},"T")," is the message type), with implicit values for ",(0,r.kt)("inlineCode",{parentName:"p"},"akka.util.Timeout"),"  and ",(0,r.kt)("inlineCode",{parentName:"p"},"akka.actor.typed.Scheduler"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'sealed trait AskMessage[+_]\ncase class PingAsk(value: Int, replyTo: typed.ActorRef[Int]) extends AskMessage[Int]\n\nobject AskTestBehavior {\n    def apply(): Behavior[AskMessage[_]] =\n      Behaviors.receiveMessage { message =>\n        message match {\n          case PingAsk(value, replyTo) => replyTo ! (value * 2)\n        }\n        Behaviors.same\n      }\n  }\n\ndef PingAskDeferred(value: Int): typed.ActorRef[Int] => PingAsk \n       = (hiddenRef: typed.ActorRef[Int]) => PingAsk(value, hiddenRef)\n       \nimport scala.concurrent.duration.DurationInt \nimplicit val timeout: Timeout = 3.seconds\n         \nfor {\n  akkaAskSystem <- ZIO.succeed(typed.ActorSystem(AskTestBehavior(), "akkaSystem"))\n  akkaActor <- AkkaTypedActor.make(akkaAskSystem)\n  result    <- (akkaActor ? PingAskDeferred(1000)) (timeout, akkaAskSystem.scheduler)\n} yield result == 2000\n')))}k.isMDXComponent=!0}}]);