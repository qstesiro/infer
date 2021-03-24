(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{160:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(201)),i={title:"`printf()` Argument Types",description:'Detect mismatches between the Java `printf` format strings and the argument types For example, this checker will warn about the type error in `printf("Hello %d", "world")`'},c={unversionedId:"checker-printf-args",id:"version-1.0.0/checker-printf-args",isDocsHomePage:!1,title:"`printf()` Argument Types",description:'Detect mismatches between the Java `printf` format strings and the argument types For example, this checker will warn about the type error in `printf("Hello %d", "world")`',source:"@site/versioned_docs/version-1.0.0/checker-printf-args.md",slug:"/checker-printf-args",permalink:"/docs/checker-printf-args",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"Loop Hoisting",permalink:"/docs/checker-loop-hoisting"},next:{title:"Pulse",permalink:"/docs/checker-pulse"}},p=[{value:"List of Issue Types",id:"list-of-issue-types",children:[]}],s={toc:p};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Detect mismatches between the Java ",Object(a.b)("inlineCode",{parentName:"p"},"printf")," format strings and the argument types For example, this checker will warn about the type error in ",Object(a.b)("inlineCode",{parentName:"p"},'printf("Hello %d", "world")')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"*","*","*","DEPRECATED","*","*","*")," Unmaintained."),Object(a.b)("p",null,"Activate with ",Object(a.b)("inlineCode",{parentName:"p"},"--printf-args"),"."),Object(a.b)("p",null,"Supported languages:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"C/C++/ObjC: No"),Object(a.b)("li",{parentName:"ul"},"Java: Yes")),Object(a.b)("h2",{id:"list-of-issue-types"},"List of Issue Types"),Object(a.b)("p",null,"The following issue types are reported by this checker:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/all-issue-types#checkers_printf_args"},"CHECKERS_PRINTF_ARGS"))))}l.isMDXComponent=!0},201:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),b=n,m=u["".concat(i,".").concat(b)]||u[b]||f[b]||a;return r?o.a.createElement(m,c(c({ref:t},s),{},{components:r})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);