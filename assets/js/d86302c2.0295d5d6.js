"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[32280],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(h,r(r({ref:t},s),{},{components:n})):a.createElement(h,r({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const l={id:"file-connector",title:"File Connector"},r=void 0,o={unversionedId:"zio-connect/file-connector",id:"zio-connect/file-connector",title:"File Connector",description:"Setup",source:"@site/docs/zio-connect/file-connector.md",sourceDirName:"zio-connect",slug:"/zio-connect/file-connector",permalink:"/zio-connect/file-connector",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-connect/file-connector.md",tags:[],version:"current",frontMatter:{id:"file-connector",title:"File Connector"},sidebar:"ecosystem-sidebar",previous:{title:"Couchbase Connector",permalink:"/zio-connect/couchbase-connector"},next:{title:"S3 Connector",permalink:"/zio-connect/s3-connector"}},c={},p=[{value:"Setup",id:"setup",level:2},{value:"How to use it ?",id:"how-to-use-it-",level:2},{value:"Test / Stub",id:"test--stub",level:2},{value:"Operators &amp; Examples",id:"operators--examples",level:2},{value:"readX",id:"readx",level:2},{value:"writeX",id:"writex",level:2},{value:"tailX",id:"tailx",level:2},{value:"tailXUsingWatchService",id:"tailxusingwatchservice",level:2},{value:"deleteX",id:"deletex",level:2},{value:"deleteXRecursively",id:"deletexrecursively",level:2},{value:"existsX",id:"existsx",level:2},{value:"listX",id:"listx",level:2},{value:"moveX",id:"movex",level:2},{value:"moveXZIO",id:"movexzio",level:2},{value:"tempX / tempXIn / tempDirX / tempDirXIn",id:"tempx--tempxin--tempdirx--tempdirxin",level:2}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-connect-file" % "0.4.3"\n')),(0,i.kt)("h2",{id:"how-to-use-it-"},"How to use it ?"),(0,i.kt)("p",null,"All available FileConnector combinators and operations are available in the package object ",(0,i.kt)("inlineCode",{parentName:"p"},"zio.connect.file"),", you only\nneed to import ",(0,i.kt)("inlineCode",{parentName:"p"},"zio.connect.file._")),(0,i.kt)("p",null,"For instance the code below uses at each step a FileConnector operator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.connect.file._\n\nval stream: ZStream[Any, Nothing, Byte] = ???\nval sink: ZSink[Any, Nothing, Byte, Nothing, Unit] = ???\n\nfor {\n  dir        <- tempDirPath\n  path       <- tempPathIn(dir)\n  fileExists <- ZStream.fromZIO((ZStream(path) >>> existsPath(file)).tap(a => ZIO.debug(s"$path exists? $a")))\n  _          <- ZStream.fromZIO(stream >>> writePath(file))\n  _          <- ZStream.fromZIO(readPath(file) >>> sink)\n} yield fileExists\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"tempDirPath - creates a directory and returns a ZStream with a single Path value, it will delete it once the for\ncomprehension completes"),(0,i.kt)("li",{parentName:"ul"},"tempPathIn - creates a file in the given directory and returns a ZStream with a single Path value, it will delete it\nonce the for comprehension completes"),(0,i.kt)("li",{parentName:"ul"},"existsPath - creates a ZStream with a single value"),(0,i.kt)("li",{parentName:"ul"},"writePath - creates ZSink for writing to given file"),(0,i.kt)("li",{parentName:"ul"},"readPath - creates a ZStream for reading from given file")),(0,i.kt)("h2",{id:"test--stub"},"Test / Stub"),(0,i.kt)("p",null,"A stub implementation of FileConnector is provided for testing purposes via the ",(0,i.kt)("inlineCode",{parentName:"p"},"TestFileConnector.layer"),". It uses\ninternally an in memory filesystem to avoid the actual creation of files."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'package zio.connect.file\n\nimport zio.Scope\n\nobject MyTestSpec extends ZIOSpecDefault{\n\n  override def spec =\n    suite("MyTestSpec")(???)\n      .provide(zio.connect.file.fileConnectorTestLayer)\n\n}\n')),(0,i.kt)("h2",{id:"operators--examples"},"Operators & Examples"),(0,i.kt)("h2",{id:"readx"},"readX"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"readFile | readFileName | readPath | readURI")),(0,i.kt)("p",null,"Creates a ZStream for reading a file's content from a path/file/...\nThe stream ends once all content is read."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.connect.file._\n\ndef example(path: Path): ZStream[Any, IOException, Byte] =\n   readPath(path)\n")),(0,i.kt)("h2",{id:"writex"},"writeX"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"writeFile | writeFileName | writePath | writeURI")),(0,i.kt)("p",null,"Creates a ZSink for writing to a file.\nThe stream ends once all content is read."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.connect.file._\n\ndef example(path: Path): ZSink[Any, IOException, Byte, Nothing, Unit] =\n   writePath(path)\n")),(0,i.kt)("h2",{id:"tailx"},"tailX"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"tailFile | tailFileName | tailPath | tailURI")),(0,i.kt)("p",null,"Creates a ZStream for reading a file's content from a path/file/...\nThe stream never ends emitting; it will keep polling the file (with given frequency) even after all content is read."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.connect.file._\n\ndef example(path: Path, freq: Duration): ZStream[Any, IOException, Byte] =\n   tailPath(path, freq)\n")),(0,i.kt)("h2",{id:"tailxusingwatchservice"},"tailXUsingWatchService"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"tailFileUsingWatchService | tailFileNameUsingWatchService | tailPathUsingWatchService | tailURIUsingWatchService")),(0,i.kt)("p",null,"Creates a ZStream for reading a file's content from a path/file/...\nThe stream never ends emitting; it will keep polling the file (with given frequency and if watchService detects\nchanges) even after all content is read."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.connect.file._\n\ndef example(path: Path, freq: Duration): ZStream[Any, IOException, Byte] =\n   tailPathUsingWatchService(path, freq)\n")),(0,i.kt)("h2",{id:"deletex"},"deleteX"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"deleteFile | deleteFileName | deletePath | deleteURI")),(0,i.kt)("p",null,"It provides a sink that deletes the file or directory.\nTo delete non empty directories use the deleteRecursivelyX variants."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.connect.file._\n\ndef example(paths: ZStream[Any, Nothing, Path]) =\n   paths >>> deletePath\n")),(0,i.kt)("h2",{id:"deletexrecursively"},"deleteXRecursively"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"deleteFileRecursively | deleteFileNameRecursively | deletePathRecursively | deleteURIRecursively")),(0,i.kt)("p",null,"Same as deleteX operator + it can delete non empty directories."),(0,i.kt)("h2",{id:"existsx"},"existsX"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"existsFile | existsFileName | existsPath | existsURI")),(0,i.kt)("p",null,"Creates a ZSink that emits true if the first path/file/... exists or a false\notherwise. The files received after the first one can be found in the sink's leftovers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.connect.file._\n\ndef example(stream: ZStream[Any, IOException, Path]): ZIO[Any, IOException, Boolean] = \n    stream >>> existsPath\n")),(0,i.kt)("h2",{id:"listx"},"listX"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"listFile | listFileName | listPath | listURI")),(0,i.kt)("p",null,"Returns the files inside the given path/file/.... Fails if provided path is not a dir."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.connect.file._\n\ndef example(path: Path): ZStream[Any, IOException, Path] = \n    listPath(path)\n")),(0,i.kt)("h2",{id:"movex"},"moveX"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"moveFile | moveFileName | movePath | moveURI")),(0,i.kt)("p",null,"You can provide a function ",(0,i.kt)("inlineCode",{parentName:"p"},"Path => Path")," and you will get a Sink that when given a path p1 will call the function\nwith p1 and so get a p2, then move the file/dir at p1 to p2."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.connect.file._\n\ndef example(locator: Path => Path): ZSink[Any, IOException, Path, Nothing, Unit] = \n    movePath(locator)\n")),(0,i.kt)("h2",{id:"movexzio"},"moveXZIO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"moveFileZIO | moveFileNameZIO | movePathZIO | moveURIZIO")),(0,i.kt)("p",null,"Same as moveX except determining the destination is effectful."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.connect.file._\n\ndef example(locator: Path => ZIO[Any, IOException, Path]): ZSink[Any, IOException, Path, Nothing, Unit] = \n    movePathZIO(locator)\n")),(0,i.kt)("h2",{id:"tempx--tempxin--tempdirx--tempdirxin"},"tempX / tempXIn / tempDirX / tempDirXIn"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"tempFile | tempFileName | tempPath | tempURI"),(0,i.kt)("li",{parentName:"ul"},"tempFileIn | tempFileNameIn | tempPathIn | tempURIIn"),(0,i.kt)("li",{parentName:"ul"},"tempDirFile | tempDirFileName | tempDirPath | tempDirURI"),(0,i.kt)("li",{parentName:"ul"},"tempDirFileIn | tempDirFileNameIn | tempDirPathIn | tempDirURIIn")),(0,i.kt)("p",null,"With this set of operators we can create temporary files and directories that will be cleaned up automatically once the\neffect using them completes."),(0,i.kt)("p",null,"The below example creates the following structure:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"file"),(0,i.kt)("li",{parentName:"ul"},"baseDir",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"subDir",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"fileInSubDir"))),(0,i.kt)("li",{parentName:"ul"},"fileInBaseDir")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.connect.file._\n\ndef example() = \n    for {\n       file          <- tempPath\n       baseDir       <- tempDirPath\n       subDir        <- tempDirPathIn(baseDir)\n       fileInBaseDir <- tempPathIn(baseDir)\n       fileInSubDir  <- tempPathIn(subDir)\n    } yield ()\n")))}m.isMDXComponent=!0}}]);