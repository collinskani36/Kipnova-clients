function rm(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function im(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var kd={exports:{}},Qs={},Id={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wi=Symbol.for("react.element"),sm=Symbol.for("react.portal"),am=Symbol.for("react.fragment"),om=Symbol.for("react.strict_mode"),lm=Symbol.for("react.profiler"),um=Symbol.for("react.provider"),cm=Symbol.for("react.context"),dm=Symbol.for("react.forward_ref"),fm=Symbol.for("react.suspense"),hm=Symbol.for("react.memo"),pm=Symbol.for("react.lazy"),_u=Symbol.iterator;function mm(e){return e===null||typeof e!="object"?null:(e=_u&&e[_u]||e["@@iterator"],typeof e=="function"?e:null)}var Cd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nd=Object.assign,Td={};function hr(e,t,n){this.props=e,this.context=t,this.refs=Td,this.updater=n||Cd}hr.prototype.isReactComponent={};hr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};hr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Pd(){}Pd.prototype=hr.prototype;function ll(e,t,n){this.props=e,this.context=t,this.refs=Td,this.updater=n||Cd}var ul=ll.prototype=new Pd;ul.constructor=ll;Nd(ul,hr.prototype);ul.isPureReactComponent=!0;var Eu=Array.isArray,jd=Object.prototype.hasOwnProperty,cl={current:null},Rd={key:!0,ref:!0,__self:!0,__source:!0};function bd(e,t,n){var r,i={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)jd.call(t,r)&&!Rd.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:wi,type:e,key:s,ref:a,props:i,_owner:cl.current}}function gm(e,t){return{$$typeof:wi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function dl(e){return typeof e=="object"&&e!==null&&e.$$typeof===wi}function vm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ku=/\/+/g;function Ea(e,t){return typeof e=="object"&&e!==null&&e.key!=null?vm(""+e.key):t.toString(36)}function ns(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case wi:case sm:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Ea(a,0):r,Eu(i)?(n="",e!=null&&(n=e.replace(ku,"$&/")+"/"),ns(i,t,n,"",function(c){return c})):i!=null&&(dl(i)&&(i=gm(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(ku,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Eu(e))for(var l=0;l<e.length;l++){s=e[l];var u=r+Ea(s,l);a+=ns(s,t,n,u,i)}else if(u=mm(e),typeof u=="function")for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=r+Ea(s,l++),a+=ns(s,t,n,u,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Oi(e,t,n){if(e==null)return e;var r=[],i=0;return ns(e,r,"","",function(s){return t.call(n,s,i++)}),r}function ym(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},rs={transition:null},wm={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:rs,ReactCurrentOwner:cl};function Ad(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:Oi,forEach:function(e,t,n){Oi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Oi(e,function(){t++}),t},toArray:function(e){return Oi(e,function(t){return t})||[]},only:function(e){if(!dl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=hr;U.Fragment=am;U.Profiler=lm;U.PureComponent=ll;U.StrictMode=om;U.Suspense=fm;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wm;U.act=Ad;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Nd({},e.props),i=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=cl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)jd.call(t,u)&&!Rd.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:wi,type:e.type,key:i,ref:s,props:r,_owner:a}};U.createContext=function(e){return e={$$typeof:cm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:um,_context:e},e.Consumer=e};U.createElement=bd;U.createFactory=function(e){var t=bd.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:dm,render:e}};U.isValidElement=dl;U.lazy=function(e){return{$$typeof:pm,_payload:{_status:-1,_result:e},_init:ym}};U.memo=function(e,t){return{$$typeof:hm,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=rs.transition;rs.transition={};try{e()}finally{rs.transition=t}};U.unstable_act=Ad;U.useCallback=function(e,t){return Ee.current.useCallback(e,t)};U.useContext=function(e){return Ee.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};U.useEffect=function(e,t){return Ee.current.useEffect(e,t)};U.useId=function(){return Ee.current.useId()};U.useImperativeHandle=function(e,t,n){return Ee.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return Ee.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return Ee.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return Ee.current.useMemo(e,t)};U.useReducer=function(e,t,n){return Ee.current.useReducer(e,t,n)};U.useRef=function(e){return Ee.current.useRef(e)};U.useState=function(e){return Ee.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return Ee.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return Ee.current.useTransition()};U.version="18.3.1";Id.exports=U;var v=Id.exports;const Ld=im(v),xm=rm({__proto__:null,default:Ld},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm=v,_m=Symbol.for("react.element"),Em=Symbol.for("react.fragment"),km=Object.prototype.hasOwnProperty,Im=Sm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cm={key:!0,ref:!0,__self:!0,__source:!0};function Od(e,t,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)km.call(t,r)&&!Cm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:_m,type:e,key:s,ref:a,props:i,_owner:Im.current}}Qs.Fragment=Em;Qs.jsx=Od;Qs.jsxs=Od;kd.exports=Qs;var o=kd.exports,ro={},Dd={exports:{}},Ue={},Md={exports:{}},Ud={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,A){var O=N.length;N.push(A);e:for(;0<O;){var $=O-1>>>1,W=N[$];if(0<i(W,A))N[$]=A,N[O]=W,O=$;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var A=N[0],O=N.pop();if(O!==A){N[0]=O;e:for(var $=0,W=N.length,ft=W>>>1;$<ft;){var be=2*($+1)-1,jt=N[be],Ae=be+1,ht=N[Ae];if(0>i(jt,O))Ae<W&&0>i(ht,jt)?(N[$]=ht,N[Ae]=O,$=Ae):(N[$]=jt,N[be]=O,$=be);else if(Ae<W&&0>i(ht,O))N[$]=ht,N[Ae]=O,$=Ae;else break e}}return A}function i(N,A){var O=N.sortIndex-A.sortIndex;return O!==0?O:N.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var u=[],c=[],p=1,h=null,g=3,x=!1,S=!1,y=!1,I=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var A=n(c);A!==null;){if(A.callback===null)r(c);else if(A.startTime<=N)r(c),A.sortIndex=A.expirationTime,t(u,A);else break;A=n(c)}}function _(N){if(y=!1,m(N),!S)if(n(u)!==null)S=!0,dn(C);else{var A=n(c);A!==null&&ne(_,A.startTime-N)}}function C(N,A){S=!1,y&&(y=!1,d(b),b=-1),x=!0;var O=g;try{for(m(A),h=n(u);h!==null&&(!(h.expirationTime>A)||N&&!ae());){var $=h.callback;if(typeof $=="function"){h.callback=null,g=h.priorityLevel;var W=$(h.expirationTime<=A);A=e.unstable_now(),typeof W=="function"?h.callback=W:h===n(u)&&r(u),m(A)}else r(u);h=n(u)}if(h!==null)var ft=!0;else{var be=n(c);be!==null&&ne(_,be.startTime-A),ft=!1}return ft}finally{h=null,g=O,x=!1}}var j=!1,R=null,b=-1,D=5,M=-1;function ae(){return!(e.unstable_now()-M<D)}function Re(){if(R!==null){var N=e.unstable_now();M=N;var A=!0;try{A=R(!0,N)}finally{A?Ie():(j=!1,R=null)}}else j=!1}var Ie;if(typeof f=="function")Ie=function(){f(Re)};else if(typeof MessageChannel<"u"){var cn=new MessageChannel,Pt=cn.port2;cn.port1.onmessage=Re,Ie=function(){Pt.postMessage(null)}}else Ie=function(){I(Re,0)};function dn(N){R=N,j||(j=!0,Ie())}function ne(N,A){b=I(function(){N(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){S||x||(S=!0,dn(C))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(N){switch(g){case 1:case 2:case 3:var A=3;break;default:A=g}var O=g;g=A;try{return N()}finally{g=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,A){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var O=g;g=N;try{return A()}finally{g=O}},e.unstable_scheduleCallback=function(N,A,O){var $=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?$+O:$):O=$,N){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=O+W,N={id:p++,callback:A,priorityLevel:N,startTime:O,expirationTime:W,sortIndex:-1},O>$?(N.sortIndex=O,t(c,N),n(u)===null&&N===n(c)&&(y?(d(b),b=-1):y=!0,ne(_,O-$))):(N.sortIndex=W,t(u,N),S||x||(S=!0,dn(C))),N},e.unstable_shouldYield=ae,e.unstable_wrapCallback=function(N){var A=g;return function(){var O=g;g=A;try{return N.apply(this,arguments)}finally{g=O}}}})(Ud);Md.exports=Ud;var Nm=Md.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tm=v,Me=Nm;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zd=new Set,Yr={};function Tn(e,t){rr(e,t),rr(e+"Capture",t)}function rr(e,t){for(Yr[e]=t,e=0;e<t.length;e++)zd.add(t[e])}var _t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),io=Object.prototype.hasOwnProperty,Pm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Iu={},Cu={};function jm(e){return io.call(Cu,e)?!0:io.call(Iu,e)?!1:Pm.test(e)?Cu[e]=!0:(Iu[e]=!0,!1)}function Rm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function bm(e,t,n,r){if(t===null||typeof t>"u"||Rm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,n,r,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var fl=/[\-:]([a-z])/g;function hl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(fl,hl);me[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(fl,hl);me[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(fl,hl);me[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function pl(e,t,n,r){var i=me.hasOwnProperty(t)?me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(bm(t,n,i,r)&&(n=null),r||i===null?jm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Tt=Tm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Di=Symbol.for("react.element"),Ln=Symbol.for("react.portal"),On=Symbol.for("react.fragment"),ml=Symbol.for("react.strict_mode"),so=Symbol.for("react.profiler"),Fd=Symbol.for("react.provider"),$d=Symbol.for("react.context"),gl=Symbol.for("react.forward_ref"),ao=Symbol.for("react.suspense"),oo=Symbol.for("react.suspense_list"),vl=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),Bd=Symbol.for("react.offscreen"),Nu=Symbol.iterator;function Er(e){return e===null||typeof e!="object"?null:(e=Nu&&e[Nu]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,ka;function Ar(e){if(ka===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ka=t&&t[1]||""}return`
`+ka+e}var Ia=!1;function Ca(e,t){if(!e||Ia)return"";Ia=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var u=`
`+i[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=l);break}}}finally{Ia=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ar(e):""}function Am(e){switch(e.tag){case 5:return Ar(e.type);case 16:return Ar("Lazy");case 13:return Ar("Suspense");case 19:return Ar("SuspenseList");case 0:case 2:case 15:return e=Ca(e.type,!1),e;case 11:return e=Ca(e.type.render,!1),e;case 1:return e=Ca(e.type,!0),e;default:return""}}function lo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case On:return"Fragment";case Ln:return"Portal";case so:return"Profiler";case ml:return"StrictMode";case ao:return"Suspense";case oo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $d:return(e.displayName||"Context")+".Consumer";case Fd:return(e._context.displayName||"Context")+".Provider";case gl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vl:return t=e.displayName||null,t!==null?t:lo(e.type)||"Memo";case Lt:t=e._payload,e=e._init;try{return lo(e(t))}catch{}}return null}function Lm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lo(t);case 8:return t===ml?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function nn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Om(e){var t=Hd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mi(e){e._valueTracker||(e._valueTracker=Om(e))}function Vd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Hd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ys(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function uo(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Tu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=nn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Wd(e,t){t=t.checked,t!=null&&pl(e,"checked",t,!1)}function co(e,t){Wd(e,t);var n=nn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?fo(e,t.type,n):t.hasOwnProperty("defaultValue")&&fo(e,t.type,nn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Pu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function fo(e,t,n){(t!=="number"||ys(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Lr=Array.isArray;function Kn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+nn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ho(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ju(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Lr(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:nn(n)}}function qd(e,t){var n=nn(t.value),r=nn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ru(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Kd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function po(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Kd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ui,Gd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ui=Ui||document.createElement("div"),Ui.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ui.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Jr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dm=["Webkit","ms","Moz","O"];Object.keys(Fr).forEach(function(e){Dm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fr[t]=Fr[e]})});function Qd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Fr.hasOwnProperty(e)&&Fr[e]?(""+t).trim():t+"px"}function Yd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Qd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Mm=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mo(e,t){if(t){if(Mm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function go(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vo=null;function yl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yo=null,Gn=null,Qn=null;function bu(e){if(e=_i(e)){if(typeof yo!="function")throw Error(k(280));var t=e.stateNode;t&&(t=ea(t),yo(e.stateNode,e.type,t))}}function Jd(e){Gn?Qn?Qn.push(e):Qn=[e]:Gn=e}function Xd(){if(Gn){var e=Gn,t=Qn;if(Qn=Gn=null,bu(e),t)for(e=0;e<t.length;e++)bu(t[e])}}function Zd(e,t){return e(t)}function ef(){}var Na=!1;function tf(e,t,n){if(Na)return e(t,n);Na=!0;try{return Zd(e,t,n)}finally{Na=!1,(Gn!==null||Qn!==null)&&(ef(),Xd())}}function Xr(e,t){var n=e.stateNode;if(n===null)return null;var r=ea(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var wo=!1;if(_t)try{var kr={};Object.defineProperty(kr,"passive",{get:function(){wo=!0}}),window.addEventListener("test",kr,kr),window.removeEventListener("test",kr,kr)}catch{wo=!1}function Um(e,t,n,r,i,s,a,l,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var $r=!1,ws=null,xs=!1,xo=null,zm={onError:function(e){$r=!0,ws=e}};function Fm(e,t,n,r,i,s,a,l,u){$r=!1,ws=null,Um.apply(zm,arguments)}function $m(e,t,n,r,i,s,a,l,u){if(Fm.apply(this,arguments),$r){if($r){var c=ws;$r=!1,ws=null}else throw Error(k(198));xs||(xs=!0,xo=c)}}function Pn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function nf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Au(e){if(Pn(e)!==e)throw Error(k(188))}function Bm(e){var t=e.alternate;if(!t){if(t=Pn(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Au(i),e;if(s===r)return Au(i),t;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function rf(e){return e=Bm(e),e!==null?sf(e):null}function sf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=sf(e);if(t!==null)return t;e=e.sibling}return null}var af=Me.unstable_scheduleCallback,Lu=Me.unstable_cancelCallback,Hm=Me.unstable_shouldYield,Vm=Me.unstable_requestPaint,re=Me.unstable_now,Wm=Me.unstable_getCurrentPriorityLevel,wl=Me.unstable_ImmediatePriority,of=Me.unstable_UserBlockingPriority,Ss=Me.unstable_NormalPriority,qm=Me.unstable_LowPriority,lf=Me.unstable_IdlePriority,Ys=null,ot=null;function Km(e){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(Ys,e,void 0,(e.current.flags&128)===128)}catch{}}var Ze=Math.clz32?Math.clz32:Ym,Gm=Math.log,Qm=Math.LN2;function Ym(e){return e>>>=0,e===0?32:31-(Gm(e)/Qm|0)|0}var zi=64,Fi=4194304;function Or(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _s(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Or(l):(s&=a,s!==0&&(r=Or(s)))}else a=n&~i,a!==0?r=Or(a):s!==0&&(r=Or(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ze(t),i=1<<n,r|=e[n],t&=~i;return r}function Jm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-Ze(s),l=1<<a,u=i[a];u===-1?(!(l&n)||l&r)&&(i[a]=Jm(l,t)):u<=t&&(e.expiredLanes|=l),s&=~l}}function So(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function uf(){var e=zi;return zi<<=1,!(zi&4194240)&&(zi=64),e}function Ta(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ze(t),e[t]=n}function Zm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ze(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function xl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ze(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var H=0;function cf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var df,Sl,ff,hf,pf,_o=!1,$i=[],qt=null,Kt=null,Gt=null,Zr=new Map,ei=new Map,Dt=[],eg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ou(e,t){switch(e){case"focusin":case"focusout":qt=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":Gt=null;break;case"pointerover":case"pointerout":Zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ei.delete(t.pointerId)}}function Ir(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=_i(t),t!==null&&Sl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function tg(e,t,n,r,i){switch(t){case"focusin":return qt=Ir(qt,e,t,n,r,i),!0;case"dragenter":return Kt=Ir(Kt,e,t,n,r,i),!0;case"mouseover":return Gt=Ir(Gt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Zr.set(s,Ir(Zr.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ei.set(s,Ir(ei.get(s)||null,e,t,n,r,i)),!0}return!1}function mf(e){var t=gn(e.target);if(t!==null){var n=Pn(t);if(n!==null){if(t=n.tag,t===13){if(t=nf(n),t!==null){e.blockedOn=t,pf(e.priority,function(){ff(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function is(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Eo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);vo=r,n.target.dispatchEvent(r),vo=null}else return t=_i(n),t!==null&&Sl(t),e.blockedOn=n,!1;t.shift()}return!0}function Du(e,t,n){is(e)&&n.delete(t)}function ng(){_o=!1,qt!==null&&is(qt)&&(qt=null),Kt!==null&&is(Kt)&&(Kt=null),Gt!==null&&is(Gt)&&(Gt=null),Zr.forEach(Du),ei.forEach(Du)}function Cr(e,t){e.blockedOn===t&&(e.blockedOn=null,_o||(_o=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,ng)))}function ti(e){function t(i){return Cr(i,e)}if(0<$i.length){Cr($i[0],e);for(var n=1;n<$i.length;n++){var r=$i[n];r.blockedOn===e&&(r.blockedOn=null)}}for(qt!==null&&Cr(qt,e),Kt!==null&&Cr(Kt,e),Gt!==null&&Cr(Gt,e),Zr.forEach(t),ei.forEach(t),n=0;n<Dt.length;n++)r=Dt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Dt.length&&(n=Dt[0],n.blockedOn===null);)mf(n),n.blockedOn===null&&Dt.shift()}var Yn=Tt.ReactCurrentBatchConfig,Es=!0;function rg(e,t,n,r){var i=H,s=Yn.transition;Yn.transition=null;try{H=1,_l(e,t,n,r)}finally{H=i,Yn.transition=s}}function ig(e,t,n,r){var i=H,s=Yn.transition;Yn.transition=null;try{H=4,_l(e,t,n,r)}finally{H=i,Yn.transition=s}}function _l(e,t,n,r){if(Es){var i=Eo(e,t,n,r);if(i===null)Ua(e,t,r,ks,n),Ou(e,r);else if(tg(i,e,t,n,r))r.stopPropagation();else if(Ou(e,r),t&4&&-1<eg.indexOf(e)){for(;i!==null;){var s=_i(i);if(s!==null&&df(s),s=Eo(e,t,n,r),s===null&&Ua(e,t,r,ks,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ua(e,t,r,null,n)}}var ks=null;function Eo(e,t,n,r){if(ks=null,e=yl(r),e=gn(e),e!==null)if(t=Pn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=nf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ks=e,null}function gf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wm()){case wl:return 1;case of:return 4;case Ss:case qm:return 16;case lf:return 536870912;default:return 16}default:return 16}}var Ht=null,El=null,ss=null;function vf(){if(ss)return ss;var e,t=El,n=t.length,r,i="value"in Ht?Ht.value:Ht.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[s-r];r++);return ss=i.slice(e,1<r?1-r:void 0)}function as(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bi(){return!0}function Mu(){return!1}function ze(e){function t(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Bi:Mu,this.isPropagationStopped=Mu,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bi)},persist:function(){},isPersistent:Bi}),t}var pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kl=ze(pr),Si=ee({},pr,{view:0,detail:0}),sg=ze(Si),Pa,ja,Nr,Js=ee({},Si,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Il,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nr&&(Nr&&e.type==="mousemove"?(Pa=e.screenX-Nr.screenX,ja=e.screenY-Nr.screenY):ja=Pa=0,Nr=e),Pa)},movementY:function(e){return"movementY"in e?e.movementY:ja}}),Uu=ze(Js),ag=ee({},Js,{dataTransfer:0}),og=ze(ag),lg=ee({},Si,{relatedTarget:0}),Ra=ze(lg),ug=ee({},pr,{animationName:0,elapsedTime:0,pseudoElement:0}),cg=ze(ug),dg=ee({},pr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fg=ze(dg),hg=ee({},pr,{data:0}),zu=ze(hg),pg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gg[e])?!!t[e]:!1}function Il(){return vg}var yg=ee({},Si,{key:function(e){if(e.key){var t=pg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=as(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Il,charCode:function(e){return e.type==="keypress"?as(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?as(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wg=ze(yg),xg=ee({},Js,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fu=ze(xg),Sg=ee({},Si,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Il}),_g=ze(Sg),Eg=ee({},pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),kg=ze(Eg),Ig=ee({},Js,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cg=ze(Ig),Ng=[9,13,27,32],Cl=_t&&"CompositionEvent"in window,Br=null;_t&&"documentMode"in document&&(Br=document.documentMode);var Tg=_t&&"TextEvent"in window&&!Br,yf=_t&&(!Cl||Br&&8<Br&&11>=Br),$u=" ",Bu=!1;function wf(e,t){switch(e){case"keyup":return Ng.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dn=!1;function Pg(e,t){switch(e){case"compositionend":return xf(t);case"keypress":return t.which!==32?null:(Bu=!0,$u);case"textInput":return e=t.data,e===$u&&Bu?null:e;default:return null}}function jg(e,t){if(Dn)return e==="compositionend"||!Cl&&wf(e,t)?(e=vf(),ss=El=Ht=null,Dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yf&&t.locale!=="ko"?null:t.data;default:return null}}var Rg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rg[e.type]:t==="textarea"}function Sf(e,t,n,r){Jd(r),t=Is(t,"onChange"),0<t.length&&(n=new kl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Hr=null,ni=null;function bg(e){bf(e,0)}function Xs(e){var t=zn(e);if(Vd(t))return e}function Ag(e,t){if(e==="change")return t}var _f=!1;if(_t){var ba;if(_t){var Aa="oninput"in document;if(!Aa){var Vu=document.createElement("div");Vu.setAttribute("oninput","return;"),Aa=typeof Vu.oninput=="function"}ba=Aa}else ba=!1;_f=ba&&(!document.documentMode||9<document.documentMode)}function Wu(){Hr&&(Hr.detachEvent("onpropertychange",Ef),ni=Hr=null)}function Ef(e){if(e.propertyName==="value"&&Xs(ni)){var t=[];Sf(t,ni,e,yl(e)),tf(bg,t)}}function Lg(e,t,n){e==="focusin"?(Wu(),Hr=t,ni=n,Hr.attachEvent("onpropertychange",Ef)):e==="focusout"&&Wu()}function Og(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xs(ni)}function Dg(e,t){if(e==="click")return Xs(t)}function Mg(e,t){if(e==="input"||e==="change")return Xs(t)}function Ug(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tt=typeof Object.is=="function"?Object.is:Ug;function ri(e,t){if(tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!io.call(t,i)||!tt(e[i],t[i]))return!1}return!0}function qu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ku(e,t){var n=qu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qu(n)}}function kf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function If(){for(var e=window,t=ys();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ys(e.document)}return t}function Nl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function zg(e){var t=If(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&kf(n.ownerDocument.documentElement,n)){if(r!==null&&Nl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Ku(n,s);var a=Ku(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Fg=_t&&"documentMode"in document&&11>=document.documentMode,Mn=null,ko=null,Vr=null,Io=!1;function Gu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Io||Mn==null||Mn!==ys(r)||(r=Mn,"selectionStart"in r&&Nl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vr&&ri(Vr,r)||(Vr=r,r=Is(ko,"onSelect"),0<r.length&&(t=new kl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Mn)))}function Hi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Un={animationend:Hi("Animation","AnimationEnd"),animationiteration:Hi("Animation","AnimationIteration"),animationstart:Hi("Animation","AnimationStart"),transitionend:Hi("Transition","TransitionEnd")},La={},Cf={};_t&&(Cf=document.createElement("div").style,"AnimationEvent"in window||(delete Un.animationend.animation,delete Un.animationiteration.animation,delete Un.animationstart.animation),"TransitionEvent"in window||delete Un.transitionend.transition);function Zs(e){if(La[e])return La[e];if(!Un[e])return e;var t=Un[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Cf)return La[e]=t[n];return e}var Nf=Zs("animationend"),Tf=Zs("animationiteration"),Pf=Zs("animationstart"),jf=Zs("transitionend"),Rf=new Map,Qu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sn(e,t){Rf.set(e,t),Tn(t,[e])}for(var Oa=0;Oa<Qu.length;Oa++){var Da=Qu[Oa],$g=Da.toLowerCase(),Bg=Da[0].toUpperCase()+Da.slice(1);sn($g,"on"+Bg)}sn(Nf,"onAnimationEnd");sn(Tf,"onAnimationIteration");sn(Pf,"onAnimationStart");sn("dblclick","onDoubleClick");sn("focusin","onFocus");sn("focusout","onBlur");sn(jf,"onTransitionEnd");rr("onMouseEnter",["mouseout","mouseover"]);rr("onMouseLeave",["mouseout","mouseover"]);rr("onPointerEnter",["pointerout","pointerover"]);rr("onPointerLeave",["pointerout","pointerover"]);Tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));function Yu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,$m(r,t,void 0,e),e.currentTarget=null}function bf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Yu(i,l,c),s=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Yu(i,l,c),s=u}}}if(xs)throw e=xo,xs=!1,xo=null,e}function Q(e,t){var n=t[jo];n===void 0&&(n=t[jo]=new Set);var r=e+"__bubble";n.has(r)||(Af(t,e,2,!1),n.add(r))}function Ma(e,t,n){var r=0;t&&(r|=4),Af(n,e,r,t)}var Vi="_reactListening"+Math.random().toString(36).slice(2);function ii(e){if(!e[Vi]){e[Vi]=!0,zd.forEach(function(n){n!=="selectionchange"&&(Hg.has(n)||Ma(n,!1,e),Ma(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vi]||(t[Vi]=!0,Ma("selectionchange",!1,t))}}function Af(e,t,n,r){switch(gf(t)){case 1:var i=rg;break;case 4:i=ig;break;default:i=_l}n=i.bind(null,t,n,e),i=void 0,!wo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ua(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;l!==null;){if(a=gn(l),a===null)return;if(u=a.tag,u===5||u===6){r=s=a;continue e}l=l.parentNode}}r=r.return}tf(function(){var c=s,p=yl(n),h=[];e:{var g=Rf.get(e);if(g!==void 0){var x=kl,S=e;switch(e){case"keypress":if(as(n)===0)break e;case"keydown":case"keyup":x=wg;break;case"focusin":S="focus",x=Ra;break;case"focusout":S="blur",x=Ra;break;case"beforeblur":case"afterblur":x=Ra;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Uu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=og;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=_g;break;case Nf:case Tf:case Pf:x=cg;break;case jf:x=kg;break;case"scroll":x=sg;break;case"wheel":x=Cg;break;case"copy":case"cut":case"paste":x=fg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Fu}var y=(t&4)!==0,I=!y&&e==="scroll",d=y?g!==null?g+"Capture":null:g;y=[];for(var f=c,m;f!==null;){m=f;var _=m.stateNode;if(m.tag===5&&_!==null&&(m=_,d!==null&&(_=Xr(f,d),_!=null&&y.push(si(f,_,m)))),I)break;f=f.return}0<y.length&&(g=new x(g,S,null,n,p),h.push({event:g,listeners:y}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==vo&&(S=n.relatedTarget||n.fromElement)&&(gn(S)||S[Et]))break e;if((x||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,x?(S=n.relatedTarget||n.toElement,x=c,S=S?gn(S):null,S!==null&&(I=Pn(S),S!==I||S.tag!==5&&S.tag!==6)&&(S=null)):(x=null,S=c),x!==S)){if(y=Uu,_="onMouseLeave",d="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=Fu,_="onPointerLeave",d="onPointerEnter",f="pointer"),I=x==null?g:zn(x),m=S==null?g:zn(S),g=new y(_,f+"leave",x,n,p),g.target=I,g.relatedTarget=m,_=null,gn(p)===c&&(y=new y(d,f+"enter",S,n,p),y.target=m,y.relatedTarget=I,_=y),I=_,x&&S)t:{for(y=x,d=S,f=0,m=y;m;m=An(m))f++;for(m=0,_=d;_;_=An(_))m++;for(;0<f-m;)y=An(y),f--;for(;0<m-f;)d=An(d),m--;for(;f--;){if(y===d||d!==null&&y===d.alternate)break t;y=An(y),d=An(d)}y=null}else y=null;x!==null&&Ju(h,g,x,y,!1),S!==null&&I!==null&&Ju(h,I,S,y,!0)}}e:{if(g=c?zn(c):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var C=Ag;else if(Hu(g))if(_f)C=Mg;else{C=Og;var j=Lg}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(C=Dg);if(C&&(C=C(e,c))){Sf(h,C,n,p);break e}j&&j(e,g,c),e==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&fo(g,"number",g.value)}switch(j=c?zn(c):window,e){case"focusin":(Hu(j)||j.contentEditable==="true")&&(Mn=j,ko=c,Vr=null);break;case"focusout":Vr=ko=Mn=null;break;case"mousedown":Io=!0;break;case"contextmenu":case"mouseup":case"dragend":Io=!1,Gu(h,n,p);break;case"selectionchange":if(Fg)break;case"keydown":case"keyup":Gu(h,n,p)}var R;if(Cl)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Dn?wf(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(yf&&n.locale!=="ko"&&(Dn||b!=="onCompositionStart"?b==="onCompositionEnd"&&Dn&&(R=vf()):(Ht=p,El="value"in Ht?Ht.value:Ht.textContent,Dn=!0)),j=Is(c,b),0<j.length&&(b=new zu(b,e,null,n,p),h.push({event:b,listeners:j}),R?b.data=R:(R=xf(n),R!==null&&(b.data=R)))),(R=Tg?Pg(e,n):jg(e,n))&&(c=Is(c,"onBeforeInput"),0<c.length&&(p=new zu("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:c}),p.data=R))}bf(h,t)})}function si(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Is(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Xr(e,n),s!=null&&r.unshift(si(e,s,i)),s=Xr(e,t),s!=null&&r.push(si(e,s,i))),e=e.return}return r}function An(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ju(e,t,n,r,i){for(var s=t._reactName,a=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Xr(n,s),u!=null&&a.unshift(si(n,u,l))):i||(u=Xr(n,s),u!=null&&a.push(si(n,u,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Vg=/\r\n?/g,Wg=/\u0000|\uFFFD/g;function Xu(e){return(typeof e=="string"?e:""+e).replace(Vg,`
`).replace(Wg,"")}function Wi(e,t,n){if(t=Xu(t),Xu(e)!==t&&n)throw Error(k(425))}function Cs(){}var Co=null,No=null;function To(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Po=typeof setTimeout=="function"?setTimeout:void 0,qg=typeof clearTimeout=="function"?clearTimeout:void 0,Zu=typeof Promise=="function"?Promise:void 0,Kg=typeof queueMicrotask=="function"?queueMicrotask:typeof Zu<"u"?function(e){return Zu.resolve(null).then(e).catch(Gg)}:Po;function Gg(e){setTimeout(function(){throw e})}function za(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ti(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ti(t)}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ec(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var mr=Math.random().toString(36).slice(2),st="__reactFiber$"+mr,ai="__reactProps$"+mr,Et="__reactContainer$"+mr,jo="__reactEvents$"+mr,Qg="__reactListeners$"+mr,Yg="__reactHandles$"+mr;function gn(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Et]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ec(e);e!==null;){if(n=e[st])return n;e=ec(e)}return t}e=n,n=e.parentNode}return null}function _i(e){return e=e[st]||e[Et],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function ea(e){return e[ai]||null}var Ro=[],Fn=-1;function an(e){return{current:e}}function Y(e){0>Fn||(e.current=Ro[Fn],Ro[Fn]=null,Fn--)}function K(e,t){Fn++,Ro[Fn]=e.current,e.current=t}var rn={},we=an(rn),Te=an(!1),_n=rn;function ir(e,t){var n=e.type.contextTypes;if(!n)return rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Pe(e){return e=e.childContextTypes,e!=null}function Ns(){Y(Te),Y(we)}function tc(e,t,n){if(we.current!==rn)throw Error(k(168));K(we,t),K(Te,n)}function Lf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,Lm(e)||"Unknown",i));return ee({},n,r)}function Ts(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||rn,_n=we.current,K(we,e),K(Te,Te.current),!0}function nc(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Lf(e,t,_n),r.__reactInternalMemoizedMergedChildContext=e,Y(Te),Y(we),K(we,e)):Y(Te),K(Te,n)}var mt=null,ta=!1,Fa=!1;function Of(e){mt===null?mt=[e]:mt.push(e)}function Jg(e){ta=!0,Of(e)}function on(){if(!Fa&&mt!==null){Fa=!0;var e=0,t=H;try{var n=mt;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}mt=null,ta=!1}catch(i){throw mt!==null&&(mt=mt.slice(e+1)),af(wl,on),i}finally{H=t,Fa=!1}}return null}var $n=[],Bn=0,Ps=null,js=0,$e=[],Be=0,En=null,gt=1,vt="";function fn(e,t){$n[Bn++]=js,$n[Bn++]=Ps,Ps=e,js=t}function Df(e,t,n){$e[Be++]=gt,$e[Be++]=vt,$e[Be++]=En,En=e;var r=gt;e=vt;var i=32-Ze(r)-1;r&=~(1<<i),n+=1;var s=32-Ze(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,gt=1<<32-Ze(t)+i|n<<i|r,vt=s+e}else gt=1<<s|n<<i|r,vt=e}function Tl(e){e.return!==null&&(fn(e,1),Df(e,1,0))}function Pl(e){for(;e===Ps;)Ps=$n[--Bn],$n[Bn]=null,js=$n[--Bn],$n[Bn]=null;for(;e===En;)En=$e[--Be],$e[Be]=null,vt=$e[--Be],$e[Be]=null,gt=$e[--Be],$e[Be]=null}var De=null,Oe=null,J=!1,Je=null;function Mf(e,t){var n=He(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function rc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,De=e,Oe=Qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,De=e,Oe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=En!==null?{id:gt,overflow:vt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=He(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,De=e,Oe=null,!0):!1;default:return!1}}function bo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ao(e){if(J){var t=Oe;if(t){var n=t;if(!rc(e,t)){if(bo(e))throw Error(k(418));t=Qt(n.nextSibling);var r=De;t&&rc(e,t)?Mf(r,n):(e.flags=e.flags&-4097|2,J=!1,De=e)}}else{if(bo(e))throw Error(k(418));e.flags=e.flags&-4097|2,J=!1,De=e}}}function ic(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;De=e}function qi(e){if(e!==De)return!1;if(!J)return ic(e),J=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!To(e.type,e.memoizedProps)),t&&(t=Oe)){if(bo(e))throw Uf(),Error(k(418));for(;t;)Mf(e,t),t=Qt(t.nextSibling)}if(ic(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Oe=Qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Oe=null}}else Oe=De?Qt(e.stateNode.nextSibling):null;return!0}function Uf(){for(var e=Oe;e;)e=Qt(e.nextSibling)}function sr(){Oe=De=null,J=!1}function jl(e){Je===null?Je=[e]:Je.push(e)}var Xg=Tt.ReactCurrentBatchConfig;function Tr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Ki(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function sc(e){var t=e._init;return t(e._payload)}function zf(e){function t(d,f){if(e){var m=d.deletions;m===null?(d.deletions=[f],d.flags|=16):m.push(f)}}function n(d,f){if(!e)return null;for(;f!==null;)t(d,f),f=f.sibling;return null}function r(d,f){for(d=new Map;f!==null;)f.key!==null?d.set(f.key,f):d.set(f.index,f),f=f.sibling;return d}function i(d,f){return d=Zt(d,f),d.index=0,d.sibling=null,d}function s(d,f,m){return d.index=m,e?(m=d.alternate,m!==null?(m=m.index,m<f?(d.flags|=2,f):m):(d.flags|=2,f)):(d.flags|=1048576,f)}function a(d){return e&&d.alternate===null&&(d.flags|=2),d}function l(d,f,m,_){return f===null||f.tag!==6?(f=Ka(m,d.mode,_),f.return=d,f):(f=i(f,m),f.return=d,f)}function u(d,f,m,_){var C=m.type;return C===On?p(d,f,m.props.children,_,m.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Lt&&sc(C)===f.type)?(_=i(f,m.props),_.ref=Tr(d,f,m),_.return=d,_):(_=hs(m.type,m.key,m.props,null,d.mode,_),_.ref=Tr(d,f,m),_.return=d,_)}function c(d,f,m,_){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Ga(m,d.mode,_),f.return=d,f):(f=i(f,m.children||[]),f.return=d,f)}function p(d,f,m,_,C){return f===null||f.tag!==7?(f=xn(m,d.mode,_,C),f.return=d,f):(f=i(f,m),f.return=d,f)}function h(d,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ka(""+f,d.mode,m),f.return=d,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Di:return m=hs(f.type,f.key,f.props,null,d.mode,m),m.ref=Tr(d,null,f),m.return=d,m;case Ln:return f=Ga(f,d.mode,m),f.return=d,f;case Lt:var _=f._init;return h(d,_(f._payload),m)}if(Lr(f)||Er(f))return f=xn(f,d.mode,m,null),f.return=d,f;Ki(d,f)}return null}function g(d,f,m,_){var C=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:l(d,f,""+m,_);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Di:return m.key===C?u(d,f,m,_):null;case Ln:return m.key===C?c(d,f,m,_):null;case Lt:return C=m._init,g(d,f,C(m._payload),_)}if(Lr(m)||Er(m))return C!==null?null:p(d,f,m,_,null);Ki(d,m)}return null}function x(d,f,m,_,C){if(typeof _=="string"&&_!==""||typeof _=="number")return d=d.get(m)||null,l(f,d,""+_,C);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Di:return d=d.get(_.key===null?m:_.key)||null,u(f,d,_,C);case Ln:return d=d.get(_.key===null?m:_.key)||null,c(f,d,_,C);case Lt:var j=_._init;return x(d,f,m,j(_._payload),C)}if(Lr(_)||Er(_))return d=d.get(m)||null,p(f,d,_,C,null);Ki(f,_)}return null}function S(d,f,m,_){for(var C=null,j=null,R=f,b=f=0,D=null;R!==null&&b<m.length;b++){R.index>b?(D=R,R=null):D=R.sibling;var M=g(d,R,m[b],_);if(M===null){R===null&&(R=D);break}e&&R&&M.alternate===null&&t(d,R),f=s(M,f,b),j===null?C=M:j.sibling=M,j=M,R=D}if(b===m.length)return n(d,R),J&&fn(d,b),C;if(R===null){for(;b<m.length;b++)R=h(d,m[b],_),R!==null&&(f=s(R,f,b),j===null?C=R:j.sibling=R,j=R);return J&&fn(d,b),C}for(R=r(d,R);b<m.length;b++)D=x(R,d,b,m[b],_),D!==null&&(e&&D.alternate!==null&&R.delete(D.key===null?b:D.key),f=s(D,f,b),j===null?C=D:j.sibling=D,j=D);return e&&R.forEach(function(ae){return t(d,ae)}),J&&fn(d,b),C}function y(d,f,m,_){var C=Er(m);if(typeof C!="function")throw Error(k(150));if(m=C.call(m),m==null)throw Error(k(151));for(var j=C=null,R=f,b=f=0,D=null,M=m.next();R!==null&&!M.done;b++,M=m.next()){R.index>b?(D=R,R=null):D=R.sibling;var ae=g(d,R,M.value,_);if(ae===null){R===null&&(R=D);break}e&&R&&ae.alternate===null&&t(d,R),f=s(ae,f,b),j===null?C=ae:j.sibling=ae,j=ae,R=D}if(M.done)return n(d,R),J&&fn(d,b),C;if(R===null){for(;!M.done;b++,M=m.next())M=h(d,M.value,_),M!==null&&(f=s(M,f,b),j===null?C=M:j.sibling=M,j=M);return J&&fn(d,b),C}for(R=r(d,R);!M.done;b++,M=m.next())M=x(R,d,b,M.value,_),M!==null&&(e&&M.alternate!==null&&R.delete(M.key===null?b:M.key),f=s(M,f,b),j===null?C=M:j.sibling=M,j=M);return e&&R.forEach(function(Re){return t(d,Re)}),J&&fn(d,b),C}function I(d,f,m,_){if(typeof m=="object"&&m!==null&&m.type===On&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Di:e:{for(var C=m.key,j=f;j!==null;){if(j.key===C){if(C=m.type,C===On){if(j.tag===7){n(d,j.sibling),f=i(j,m.props.children),f.return=d,d=f;break e}}else if(j.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Lt&&sc(C)===j.type){n(d,j.sibling),f=i(j,m.props),f.ref=Tr(d,j,m),f.return=d,d=f;break e}n(d,j);break}else t(d,j);j=j.sibling}m.type===On?(f=xn(m.props.children,d.mode,_,m.key),f.return=d,d=f):(_=hs(m.type,m.key,m.props,null,d.mode,_),_.ref=Tr(d,f,m),_.return=d,d=_)}return a(d);case Ln:e:{for(j=m.key;f!==null;){if(f.key===j)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(d,f.sibling),f=i(f,m.children||[]),f.return=d,d=f;break e}else{n(d,f);break}else t(d,f);f=f.sibling}f=Ga(m,d.mode,_),f.return=d,d=f}return a(d);case Lt:return j=m._init,I(d,f,j(m._payload),_)}if(Lr(m))return S(d,f,m,_);if(Er(m))return y(d,f,m,_);Ki(d,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(d,f.sibling),f=i(f,m),f.return=d,d=f):(n(d,f),f=Ka(m,d.mode,_),f.return=d,d=f),a(d)):n(d,f)}return I}var ar=zf(!0),Ff=zf(!1),Rs=an(null),bs=null,Hn=null,Rl=null;function bl(){Rl=Hn=bs=null}function Al(e){var t=Rs.current;Y(Rs),e._currentValue=t}function Lo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Jn(e,t){bs=e,Rl=Hn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ne=!0),e.firstContext=null)}function qe(e){var t=e._currentValue;if(Rl!==e)if(e={context:e,memoizedValue:t,next:null},Hn===null){if(bs===null)throw Error(k(308));Hn=e,bs.dependencies={lanes:0,firstContext:e}}else Hn=Hn.next=e;return t}var vn=null;function Ll(e){vn===null?vn=[e]:vn.push(e)}function $f(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ll(t)):(n.next=i.next,i.next=n),t.interleaved=n,kt(e,r)}function kt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ot=!1;function Ol(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function St(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Yt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,kt(e,n)}return i=r.interleaved,i===null?(t.next=t,Ll(r)):(t.next=i.next,i.next=t),r.interleaved=t,kt(e,n)}function os(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xl(e,n)}}function ac(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function As(e,t,n,r){var i=e.updateQueue;Ot=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,a===null?s=c:a.next=c,a=u;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==a&&(l===null?p.firstBaseUpdate=c:l.next=c,p.lastBaseUpdate=u))}if(s!==null){var h=i.baseState;a=0,p=c=u=null,l=s;do{var g=l.lane,x=l.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=e,y=l;switch(g=t,x=n,y.tag){case 1:if(S=y.payload,typeof S=="function"){h=S.call(x,h,g);break e}h=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=y.payload,g=typeof S=="function"?S.call(x,h,g):S,g==null)break e;h=ee({},h,g);break e;case 2:Ot=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else x={eventTime:x,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(c=p=x,u=h):p=p.next=x,a|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(p===null&&(u=h),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);In|=a,e.lanes=a,e.memoizedState=h}}function oc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Ei={},lt=an(Ei),oi=an(Ei),li=an(Ei);function yn(e){if(e===Ei)throw Error(k(174));return e}function Dl(e,t){switch(K(li,t),K(oi,e),K(lt,Ei),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:po(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=po(t,e)}Y(lt),K(lt,t)}function or(){Y(lt),Y(oi),Y(li)}function Hf(e){yn(li.current);var t=yn(lt.current),n=po(t,e.type);t!==n&&(K(oi,e),K(lt,n))}function Ml(e){oi.current===e&&(Y(lt),Y(oi))}var X=an(0);function Ls(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $a=[];function Ul(){for(var e=0;e<$a.length;e++)$a[e]._workInProgressVersionPrimary=null;$a.length=0}var ls=Tt.ReactCurrentDispatcher,Ba=Tt.ReactCurrentBatchConfig,kn=0,Z=null,oe=null,ue=null,Os=!1,Wr=!1,ui=0,Zg=0;function ge(){throw Error(k(321))}function zl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!tt(e[n],t[n]))return!1;return!0}function Fl(e,t,n,r,i,s){if(kn=s,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ls.current=e===null||e.memoizedState===null?rv:iv,e=n(r,i),Wr){s=0;do{if(Wr=!1,ui=0,25<=s)throw Error(k(301));s+=1,ue=oe=null,t.updateQueue=null,ls.current=sv,e=n(r,i)}while(Wr)}if(ls.current=Ds,t=oe!==null&&oe.next!==null,kn=0,ue=oe=Z=null,Os=!1,t)throw Error(k(300));return e}function $l(){var e=ui!==0;return ui=0,e}function it(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?Z.memoizedState=ue=e:ue=ue.next=e,ue}function Ke(){if(oe===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=ue===null?Z.memoizedState:ue.next;if(t!==null)ue=t,oe=e;else{if(e===null)throw Error(k(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},ue===null?Z.memoizedState=ue=e:ue=ue.next=e}return ue}function ci(e,t){return typeof t=="function"?t(e):t}function Ha(e){var t=Ke(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=a=null,u=null,c=s;do{var p=c.lane;if((kn&p)===p)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=h,a=r):u=u.next=h,Z.lanes|=p,In|=p}c=c.next}while(c!==null&&c!==s);u===null?a=r:u.next=l,tt(r,t.memoizedState)||(Ne=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Z.lanes|=s,In|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Va(e){var t=Ke(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);tt(s,t.memoizedState)||(Ne=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Vf(){}function Wf(e,t){var n=Z,r=Ke(),i=t(),s=!tt(r.memoizedState,i);if(s&&(r.memoizedState=i,Ne=!0),r=r.queue,Bl(Gf.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,di(9,Kf.bind(null,n,r,i,t),void 0,null),ce===null)throw Error(k(349));kn&30||qf(n,t,i)}return i}function qf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Kf(e,t,n,r){t.value=n,t.getSnapshot=r,Qf(t)&&Yf(e)}function Gf(e,t,n){return n(function(){Qf(t)&&Yf(e)})}function Qf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!tt(e,n)}catch{return!0}}function Yf(e){var t=kt(e,1);t!==null&&et(t,e,1,-1)}function lc(e){var t=it();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ci,lastRenderedState:e},t.queue=e,e=e.dispatch=nv.bind(null,Z,e),[t.memoizedState,e]}function di(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Jf(){return Ke().memoizedState}function us(e,t,n,r){var i=it();Z.flags|=e,i.memoizedState=di(1|t,n,void 0,r===void 0?null:r)}function na(e,t,n,r){var i=Ke();r=r===void 0?null:r;var s=void 0;if(oe!==null){var a=oe.memoizedState;if(s=a.destroy,r!==null&&zl(r,a.deps)){i.memoizedState=di(t,n,s,r);return}}Z.flags|=e,i.memoizedState=di(1|t,n,s,r)}function uc(e,t){return us(8390656,8,e,t)}function Bl(e,t){return na(2048,8,e,t)}function Xf(e,t){return na(4,2,e,t)}function Zf(e,t){return na(4,4,e,t)}function eh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function th(e,t,n){return n=n!=null?n.concat([e]):null,na(4,4,eh.bind(null,t,e),n)}function Hl(){}function nh(e,t){var n=Ke();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function rh(e,t){var n=Ke();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ih(e,t,n){return kn&21?(tt(n,t)||(n=uf(),Z.lanes|=n,In|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ne=!0),e.memoizedState=n)}function ev(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=Ba.transition;Ba.transition={};try{e(!1),t()}finally{H=n,Ba.transition=r}}function sh(){return Ke().memoizedState}function tv(e,t,n){var r=Xt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ah(e))oh(t,n);else if(n=$f(e,t,n,r),n!==null){var i=Se();et(n,e,r,i),lh(n,t,r)}}function nv(e,t,n){var r=Xt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ah(e))oh(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,tt(l,a)){var u=t.interleaved;u===null?(i.next=i,Ll(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=$f(e,t,i,r),n!==null&&(i=Se(),et(n,e,r,i),lh(n,t,r))}}function ah(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function oh(e,t){Wr=Os=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function lh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xl(e,n)}}var Ds={readContext:qe,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},rv={readContext:qe,useCallback:function(e,t){return it().memoizedState=[e,t===void 0?null:t],e},useContext:qe,useEffect:uc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,us(4194308,4,eh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){return us(4,2,e,t)},useMemo:function(e,t){var n=it();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=it();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=tv.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=it();return e={current:e},t.memoizedState=e},useState:lc,useDebugValue:Hl,useDeferredValue:function(e){return it().memoizedState=e},useTransition:function(){var e=lc(!1),t=e[0];return e=ev.bind(null,e[1]),it().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,i=it();if(J){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ce===null)throw Error(k(349));kn&30||qf(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,uc(Gf.bind(null,r,s,e),[e]),r.flags|=2048,di(9,Kf.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=it(),t=ce.identifierPrefix;if(J){var n=vt,r=gt;n=(r&~(1<<32-Ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ui++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Zg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},iv={readContext:qe,useCallback:nh,useContext:qe,useEffect:Bl,useImperativeHandle:th,useInsertionEffect:Xf,useLayoutEffect:Zf,useMemo:rh,useReducer:Ha,useRef:Jf,useState:function(){return Ha(ci)},useDebugValue:Hl,useDeferredValue:function(e){var t=Ke();return ih(t,oe.memoizedState,e)},useTransition:function(){var e=Ha(ci)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:Vf,useSyncExternalStore:Wf,useId:sh,unstable_isNewReconciler:!1},sv={readContext:qe,useCallback:nh,useContext:qe,useEffect:Bl,useImperativeHandle:th,useInsertionEffect:Xf,useLayoutEffect:Zf,useMemo:rh,useReducer:Va,useRef:Jf,useState:function(){return Va(ci)},useDebugValue:Hl,useDeferredValue:function(e){var t=Ke();return oe===null?t.memoizedState=e:ih(t,oe.memoizedState,e)},useTransition:function(){var e=Va(ci)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:Vf,useSyncExternalStore:Wf,useId:sh,unstable_isNewReconciler:!1};function Qe(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Oo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ra={isMounted:function(e){return(e=e._reactInternals)?Pn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Se(),i=Xt(e),s=St(r,i);s.payload=t,n!=null&&(s.callback=n),t=Yt(e,s,i),t!==null&&(et(t,e,i,r),os(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Se(),i=Xt(e),s=St(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Yt(e,s,i),t!==null&&(et(t,e,i,r),os(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Se(),r=Xt(e),i=St(n,r);i.tag=2,t!=null&&(i.callback=t),t=Yt(e,i,r),t!==null&&(et(t,e,r,n),os(t,e,r))}};function cc(e,t,n,r,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!ri(n,r)||!ri(i,s):!0}function uh(e,t,n){var r=!1,i=rn,s=t.contextType;return typeof s=="object"&&s!==null?s=qe(s):(i=Pe(t)?_n:we.current,r=t.contextTypes,s=(r=r!=null)?ir(e,i):rn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ra,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function dc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ra.enqueueReplaceState(t,t.state,null)}function Do(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ol(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=qe(s):(s=Pe(t)?_n:we.current,i.context=ir(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Oo(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ra.enqueueReplaceState(i,i.state,null),As(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function lr(e,t){try{var n="",r=t;do n+=Am(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Wa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Mo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var av=typeof WeakMap=="function"?WeakMap:Map;function ch(e,t,n){n=St(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Us||(Us=!0,Ko=r),Mo(e,t)},n}function dh(e,t,n){n=St(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Mo(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Mo(e,t),typeof r!="function"&&(Jt===null?Jt=new Set([this]):Jt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function fc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new av;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=xv.bind(null,e,t,n),t.then(e,e))}function hc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function pc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=St(-1,1),t.tag=2,Yt(n,t,1))),n.lanes|=1),e)}var ov=Tt.ReactCurrentOwner,Ne=!1;function xe(e,t,n,r){t.child=e===null?Ff(t,null,n,r):ar(t,e.child,n,r)}function mc(e,t,n,r,i){n=n.render;var s=t.ref;return Jn(t,i),r=Fl(e,t,n,r,s,i),n=$l(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,It(e,t,i)):(J&&n&&Tl(t),t.flags|=1,xe(e,t,r,i),t.child)}function gc(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Jl(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,fh(e,t,s,r,i)):(e=hs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:ri,n(a,r)&&e.ref===t.ref)return It(e,t,i)}return t.flags|=1,e=Zt(s,r),e.ref=t.ref,e.return=t,t.child=e}function fh(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(ri(s,r)&&e.ref===t.ref)if(Ne=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Ne=!0);else return t.lanes=e.lanes,It(e,t,i)}return Uo(e,t,n,r,i)}function hh(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(Wn,Le),Le|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(Wn,Le),Le|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,K(Wn,Le),Le|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,K(Wn,Le),Le|=r;return xe(e,t,i,n),t.child}function ph(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Uo(e,t,n,r,i){var s=Pe(n)?_n:we.current;return s=ir(t,s),Jn(t,i),n=Fl(e,t,n,r,s,i),r=$l(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,It(e,t,i)):(J&&r&&Tl(t),t.flags|=1,xe(e,t,n,i),t.child)}function vc(e,t,n,r,i){if(Pe(n)){var s=!0;Ts(t)}else s=!1;if(Jn(t,i),t.stateNode===null)cs(e,t),uh(t,n,r),Do(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var u=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=qe(c):(c=Pe(n)?_n:we.current,c=ir(t,c));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==c)&&dc(t,a,r,c),Ot=!1;var g=t.memoizedState;a.state=g,As(t,r,a,i),u=t.memoizedState,l!==r||g!==u||Te.current||Ot?(typeof p=="function"&&(Oo(t,n,p,r),u=t.memoizedState),(l=Ot||cc(t,n,l,r,g,u,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=c,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Bf(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Qe(t.type,l),a.props=c,h=t.pendingProps,g=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=qe(u):(u=Pe(n)?_n:we.current,u=ir(t,u));var x=n.getDerivedStateFromProps;(p=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==h||g!==u)&&dc(t,a,r,u),Ot=!1,g=t.memoizedState,a.state=g,As(t,r,a,i);var S=t.memoizedState;l!==h||g!==S||Te.current||Ot?(typeof x=="function"&&(Oo(t,n,x,r),S=t.memoizedState),(c=Ot||cc(t,n,c,r,g,S,u)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,S,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,S,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),a.props=r,a.state=S,a.context=u,r=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return zo(e,t,n,r,s,i)}function zo(e,t,n,r,i,s){ph(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&nc(t,n,!1),It(e,t,s);r=t.stateNode,ov.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=ar(t,e.child,null,s),t.child=ar(t,null,l,s)):xe(e,t,l,s),t.memoizedState=r.state,i&&nc(t,n,!0),t.child}function mh(e){var t=e.stateNode;t.pendingContext?tc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&tc(e,t.context,!1),Dl(e,t.containerInfo)}function yc(e,t,n,r,i){return sr(),jl(i),t.flags|=256,xe(e,t,n,r),t.child}var Fo={dehydrated:null,treeContext:null,retryLane:0};function $o(e){return{baseLanes:e,cachePool:null,transitions:null}}function gh(e,t,n){var r=t.pendingProps,i=X.current,s=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),K(X,i&1),e===null)return Ao(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=aa(a,r,0,null),e=xn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=$o(n),t.memoizedState=Fo,e):Vl(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return lv(e,t,a,r,l,i,n);if(s){s=r.fallback,a=t.mode,i=e.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Zt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Zt(l,s):(s=xn(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?$o(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=Fo,r}return s=e.child,e=s.sibling,r=Zt(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Vl(e,t){return t=aa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Gi(e,t,n,r){return r!==null&&jl(r),ar(t,e.child,null,n),e=Vl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lv(e,t,n,r,i,s,a){if(n)return t.flags&256?(t.flags&=-257,r=Wa(Error(k(422))),Gi(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=aa({mode:"visible",children:r.children},i,0,null),s=xn(s,i,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&ar(t,e.child,null,a),t.child.memoizedState=$o(a),t.memoizedState=Fo,s);if(!(t.mode&1))return Gi(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(k(419)),r=Wa(s,r,void 0),Gi(e,t,a,r)}if(l=(a&e.childLanes)!==0,Ne||l){if(r=ce,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,kt(e,i),et(r,e,i,-1))}return Yl(),r=Wa(Error(k(421))),Gi(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Sv.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Oe=Qt(i.nextSibling),De=t,J=!0,Je=null,e!==null&&($e[Be++]=gt,$e[Be++]=vt,$e[Be++]=En,gt=e.id,vt=e.overflow,En=t),t=Vl(t,r.children),t.flags|=4096,t)}function wc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Lo(e.return,t,n)}function qa(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function vh(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(xe(e,t,r.children,n),r=X.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wc(e,n,t);else if(e.tag===19)wc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(K(X,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ls(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),qa(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ls(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}qa(t,!0,n,null,s);break;case"together":qa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function cs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function It(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),In|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function uv(e,t,n){switch(t.tag){case 3:mh(t),sr();break;case 5:Hf(t);break;case 1:Pe(t.type)&&Ts(t);break;case 4:Dl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;K(Rs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(K(X,X.current&1),t.flags|=128,null):n&t.child.childLanes?gh(e,t,n):(K(X,X.current&1),e=It(e,t,n),e!==null?e.sibling:null);K(X,X.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return vh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(X,X.current),r)break;return null;case 22:case 23:return t.lanes=0,hh(e,t,n)}return It(e,t,n)}var yh,Bo,wh,xh;yh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bo=function(){};wh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,yn(lt.current);var s=null;switch(n){case"input":i=uo(e,i),r=uo(e,r),s=[];break;case"select":i=ee({},i,{value:void 0}),r=ee({},r,{value:void 0}),s=[];break;case"textarea":i=ho(e,i),r=ho(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Cs)}mo(n,r);var a;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Yr.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Yr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Q("scroll",e),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};xh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Pr(e,t){if(!J)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function cv(e,t,n){var r=t.pendingProps;switch(Pl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Pe(t.type)&&Ns(),ve(t),null;case 3:return r=t.stateNode,or(),Y(Te),Y(we),Ul(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(qi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Je!==null&&(Yo(Je),Je=null))),Bo(e,t),ve(t),null;case 5:Ml(t);var i=yn(li.current);if(n=t.type,e!==null&&t.stateNode!=null)wh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ve(t),null}if(e=yn(lt.current),qi(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[st]=t,r[ai]=s,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(i=0;i<Dr.length;i++)Q(Dr[i],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":Tu(r,s),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Q("invalid",r);break;case"textarea":ju(r,s),Q("invalid",r)}mo(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Wi(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Wi(r.textContent,l,e),i=["children",""+l]):Yr.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Q("scroll",r)}switch(n){case"input":Mi(r),Pu(r,s,!0);break;case"textarea":Mi(r),Ru(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Cs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Kd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[st]=t,e[ai]=r,yh(e,t,!1,!1),t.stateNode=e;e:{switch(a=go(n,r),n){case"dialog":Q("cancel",e),Q("close",e),i=r;break;case"iframe":case"object":case"embed":Q("load",e),i=r;break;case"video":case"audio":for(i=0;i<Dr.length;i++)Q(Dr[i],e);i=r;break;case"source":Q("error",e),i=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),i=r;break;case"details":Q("toggle",e),i=r;break;case"input":Tu(e,r),i=uo(e,r),Q("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ee({},r,{value:void 0}),Q("invalid",e);break;case"textarea":ju(e,r),i=ho(e,r),Q("invalid",e);break;default:i=r}mo(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Yd(e,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Gd(e,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Jr(e,u):typeof u=="number"&&Jr(e,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Yr.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Q("scroll",e):u!=null&&pl(e,s,u,a))}switch(n){case"input":Mi(e),Pu(e,r,!1);break;case"textarea":Mi(e),Ru(e);break;case"option":r.value!=null&&e.setAttribute("value",""+nn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Kn(e,!!r.multiple,s,!1):r.defaultValue!=null&&Kn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Cs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)xh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=yn(li.current),yn(lt.current),qi(t)){if(r=t.stateNode,n=t.memoizedProps,r[st]=t,(s=r.nodeValue!==n)&&(e=De,e!==null))switch(e.tag){case 3:Wi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wi(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[st]=t,t.stateNode=r}return ve(t),null;case 13:if(Y(X),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(J&&Oe!==null&&t.mode&1&&!(t.flags&128))Uf(),sr(),t.flags|=98560,s=!1;else if(s=qi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(k(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[st]=t}else sr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),s=!1}else Je!==null&&(Yo(Je),Je=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||X.current&1?le===0&&(le=3):Yl())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return or(),Bo(e,t),e===null&&ii(t.stateNode.containerInfo),ve(t),null;case 10:return Al(t.type._context),ve(t),null;case 17:return Pe(t.type)&&Ns(),ve(t),null;case 19:if(Y(X),s=t.memoizedState,s===null)return ve(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)Pr(s,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ls(e),a!==null){for(t.flags|=128,Pr(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(X,X.current&1|2),t.child}e=e.sibling}s.tail!==null&&re()>ur&&(t.flags|=128,r=!0,Pr(s,!1),t.lanes=4194304)}else{if(!r)if(e=Ls(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Pr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!J)return ve(t),null}else 2*re()-s.renderingStartTime>ur&&n!==1073741824&&(t.flags|=128,r=!0,Pr(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=re(),t.sibling=null,n=X.current,K(X,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return Ql(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Le&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function dv(e,t){switch(Pl(t),t.tag){case 1:return Pe(t.type)&&Ns(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return or(),Y(Te),Y(we),Ul(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ml(t),null;case 13:if(Y(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(X),null;case 4:return or(),null;case 10:return Al(t.type._context),null;case 22:case 23:return Ql(),null;case 24:return null;default:return null}}var Qi=!1,ye=!1,fv=typeof WeakSet=="function"?WeakSet:Set,P=null;function Vn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(e,t,r)}else n.current=null}function Ho(e,t,n){try{n()}catch(r){te(e,t,r)}}var xc=!1;function hv(e,t){if(Co=Es,e=If(),Nl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,u=-1,c=0,p=0,h=e,g=null;t:for(;;){for(var x;h!==n||i!==0&&h.nodeType!==3||(l=a+i),h!==s||r!==0&&h.nodeType!==3||(u=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(x=h.firstChild)!==null;)g=h,h=x;for(;;){if(h===e)break t;if(g===n&&++c===i&&(l=a),g===s&&++p===r&&(u=a),(x=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=x}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(No={focusedElem:e,selectionRange:n},Es=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var y=S.memoizedProps,I=S.memoizedState,d=t.stateNode,f=d.getSnapshotBeforeUpdate(t.elementType===t.type?y:Qe(t.type,y),I);d.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(_){te(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return S=xc,xc=!1,S}function qr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ho(t,n,s)}i=i.next}while(i!==r)}}function ia(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Vo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Sh(e){var t=e.alternate;t!==null&&(e.alternate=null,Sh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[st],delete t[ai],delete t[jo],delete t[Qg],delete t[Yg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _h(e){return e.tag===5||e.tag===3||e.tag===4}function Sc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_h(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Cs));else if(r!==4&&(e=e.child,e!==null))for(Wo(e,t,n),e=e.sibling;e!==null;)Wo(e,t,n),e=e.sibling}function qo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(qo(e,t,n),e=e.sibling;e!==null;)qo(e,t,n),e=e.sibling}var de=null,Ye=!1;function Rt(e,t,n){for(n=n.child;n!==null;)Eh(e,t,n),n=n.sibling}function Eh(e,t,n){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(Ys,n)}catch{}switch(n.tag){case 5:ye||Vn(n,t);case 6:var r=de,i=Ye;de=null,Rt(e,t,n),de=r,Ye=i,de!==null&&(Ye?(e=de,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(Ye?(e=de,n=n.stateNode,e.nodeType===8?za(e.parentNode,n):e.nodeType===1&&za(e,n),ti(e)):za(de,n.stateNode));break;case 4:r=de,i=Ye,de=n.stateNode.containerInfo,Ye=!0,Rt(e,t,n),de=r,Ye=i;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Ho(n,t,a),i=i.next}while(i!==r)}Rt(e,t,n);break;case 1:if(!ye&&(Vn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){te(n,t,l)}Rt(e,t,n);break;case 21:Rt(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,Rt(e,t,n),ye=r):Rt(e,t,n);break;default:Rt(e,t,n)}}function _c(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new fv),t.forEach(function(r){var i=_v.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ge(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:de=l.stateNode,Ye=!1;break e;case 3:de=l.stateNode.containerInfo,Ye=!0;break e;case 4:de=l.stateNode.containerInfo,Ye=!0;break e}l=l.return}if(de===null)throw Error(k(160));Eh(s,a,i),de=null,Ye=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){te(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)kh(t,e),t=t.sibling}function kh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ge(t,e),rt(e),r&4){try{qr(3,e,e.return),ia(3,e)}catch(y){te(e,e.return,y)}try{qr(5,e,e.return)}catch(y){te(e,e.return,y)}}break;case 1:Ge(t,e),rt(e),r&512&&n!==null&&Vn(n,n.return);break;case 5:if(Ge(t,e),rt(e),r&512&&n!==null&&Vn(n,n.return),e.flags&32){var i=e.stateNode;try{Jr(i,"")}catch(y){te(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Wd(i,s),go(l,a);var c=go(l,s);for(a=0;a<u.length;a+=2){var p=u[a],h=u[a+1];p==="style"?Yd(i,h):p==="dangerouslySetInnerHTML"?Gd(i,h):p==="children"?Jr(i,h):pl(i,p,h,c)}switch(l){case"input":co(i,s);break;case"textarea":qd(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var x=s.value;x!=null?Kn(i,!!s.multiple,x,!1):g!==!!s.multiple&&(s.defaultValue!=null?Kn(i,!!s.multiple,s.defaultValue,!0):Kn(i,!!s.multiple,s.multiple?[]:"",!1))}i[ai]=s}catch(y){te(e,e.return,y)}}break;case 6:if(Ge(t,e),rt(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(y){te(e,e.return,y)}}break;case 3:if(Ge(t,e),rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ti(t.containerInfo)}catch(y){te(e,e.return,y)}break;case 4:Ge(t,e),rt(e);break;case 13:Ge(t,e),rt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Kl=re())),r&4&&_c(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(c=ye)||p,Ge(t,e),ye=c):Ge(t,e),rt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&e.mode&1)for(P=e,p=e.child;p!==null;){for(h=P=p;P!==null;){switch(g=P,x=g.child,g.tag){case 0:case 11:case 14:case 15:qr(4,g,g.return);break;case 1:Vn(g,g.return);var S=g.stateNode;if(typeof S.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(y){te(r,n,y)}}break;case 5:Vn(g,g.return);break;case 22:if(g.memoizedState!==null){kc(h);continue}}x!==null?(x.return=g,P=x):kc(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{i=h.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=h.stateNode,u=h.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Qd("display",a))}catch(y){te(e,e.return,y)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){te(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ge(t,e),rt(e),r&4&&_c(e);break;case 21:break;default:Ge(t,e),rt(e)}}function rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_h(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Jr(i,""),r.flags&=-33);var s=Sc(e);qo(e,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Sc(e);Wo(e,l,a);break;default:throw Error(k(161))}}catch(u){te(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pv(e,t,n){P=e,Ih(e)}function Ih(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var i=P,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Qi;if(!a){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ye;l=Qi;var c=ye;if(Qi=a,(ye=u)&&!c)for(P=i;P!==null;)a=P,u=a.child,a.tag===22&&a.memoizedState!==null?Ic(i):u!==null?(u.return=a,P=u):Ic(i);for(;s!==null;)P=s,Ih(s),s=s.sibling;P=i,Qi=l,ye=c}Ec(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,P=s):Ec(e)}}function Ec(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||ia(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Qe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&oc(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}oc(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&ti(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ye||t.flags&512&&Vo(t)}catch(g){te(t,t.return,g)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function kc(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function Ic(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ia(4,t)}catch(u){te(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){te(t,i,u)}}var s=t.return;try{Vo(t)}catch(u){te(t,s,u)}break;case 5:var a=t.return;try{Vo(t)}catch(u){te(t,a,u)}}}catch(u){te(t,t.return,u)}if(t===e){P=null;break}var l=t.sibling;if(l!==null){l.return=t.return,P=l;break}P=t.return}}var mv=Math.ceil,Ms=Tt.ReactCurrentDispatcher,Wl=Tt.ReactCurrentOwner,Ve=Tt.ReactCurrentBatchConfig,z=0,ce=null,ie=null,pe=0,Le=0,Wn=an(0),le=0,fi=null,In=0,sa=0,ql=0,Kr=null,Ce=null,Kl=0,ur=1/0,pt=null,Us=!1,Ko=null,Jt=null,Yi=!1,Vt=null,zs=0,Gr=0,Go=null,ds=-1,fs=0;function Se(){return z&6?re():ds!==-1?ds:ds=re()}function Xt(e){return e.mode&1?z&2&&pe!==0?pe&-pe:Xg.transition!==null?(fs===0&&(fs=uf()),fs):(e=H,e!==0||(e=window.event,e=e===void 0?16:gf(e.type)),e):1}function et(e,t,n,r){if(50<Gr)throw Gr=0,Go=null,Error(k(185));xi(e,n,r),(!(z&2)||e!==ce)&&(e===ce&&(!(z&2)&&(sa|=n),le===4&&Mt(e,pe)),je(e,r),n===1&&z===0&&!(t.mode&1)&&(ur=re()+500,ta&&on()))}function je(e,t){var n=e.callbackNode;Xm(e,t);var r=_s(e,e===ce?pe:0);if(r===0)n!==null&&Lu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Lu(n),t===1)e.tag===0?Jg(Cc.bind(null,e)):Of(Cc.bind(null,e)),Kg(function(){!(z&6)&&on()}),n=null;else{switch(cf(r)){case 1:n=wl;break;case 4:n=of;break;case 16:n=Ss;break;case 536870912:n=lf;break;default:n=Ss}n=Ah(n,Ch.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ch(e,t){if(ds=-1,fs=0,z&6)throw Error(k(327));var n=e.callbackNode;if(Xn()&&e.callbackNode!==n)return null;var r=_s(e,e===ce?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Fs(e,r);else{t=r;var i=z;z|=2;var s=Th();(ce!==e||pe!==t)&&(pt=null,ur=re()+500,wn(e,t));do try{yv();break}catch(l){Nh(e,l)}while(!0);bl(),Ms.current=s,z=i,ie!==null?t=0:(ce=null,pe=0,t=le)}if(t!==0){if(t===2&&(i=So(e),i!==0&&(r=i,t=Qo(e,i))),t===1)throw n=fi,wn(e,0),Mt(e,r),je(e,re()),n;if(t===6)Mt(e,r);else{if(i=e.current.alternate,!(r&30)&&!gv(i)&&(t=Fs(e,r),t===2&&(s=So(e),s!==0&&(r=s,t=Qo(e,s))),t===1))throw n=fi,wn(e,0),Mt(e,r),je(e,re()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:hn(e,Ce,pt);break;case 3:if(Mt(e,r),(r&130023424)===r&&(t=Kl+500-re(),10<t)){if(_s(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Se(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Po(hn.bind(null,e,Ce,pt),t);break}hn(e,Ce,pt);break;case 4:if(Mt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Ze(r);s=1<<a,a=t[a],a>i&&(i=a),r&=~s}if(r=i,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mv(r/1960))-r,10<r){e.timeoutHandle=Po(hn.bind(null,e,Ce,pt),r);break}hn(e,Ce,pt);break;case 5:hn(e,Ce,pt);break;default:throw Error(k(329))}}}return je(e,re()),e.callbackNode===n?Ch.bind(null,e):null}function Qo(e,t){var n=Kr;return e.current.memoizedState.isDehydrated&&(wn(e,t).flags|=256),e=Fs(e,t),e!==2&&(t=Ce,Ce=n,t!==null&&Yo(t)),e}function Yo(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function gv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!tt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mt(e,t){for(t&=~ql,t&=~sa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ze(t),r=1<<n;e[n]=-1,t&=~r}}function Cc(e){if(z&6)throw Error(k(327));Xn();var t=_s(e,0);if(!(t&1))return je(e,re()),null;var n=Fs(e,t);if(e.tag!==0&&n===2){var r=So(e);r!==0&&(t=r,n=Qo(e,r))}if(n===1)throw n=fi,wn(e,0),Mt(e,t),je(e,re()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,hn(e,Ce,pt),je(e,re()),null}function Gl(e,t){var n=z;z|=1;try{return e(t)}finally{z=n,z===0&&(ur=re()+500,ta&&on())}}function Cn(e){Vt!==null&&Vt.tag===0&&!(z&6)&&Xn();var t=z;z|=1;var n=Ve.transition,r=H;try{if(Ve.transition=null,H=1,e)return e()}finally{H=r,Ve.transition=n,z=t,!(z&6)&&on()}}function Ql(){Le=Wn.current,Y(Wn)}function wn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qg(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(Pl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ns();break;case 3:or(),Y(Te),Y(we),Ul();break;case 5:Ml(r);break;case 4:or();break;case 13:Y(X);break;case 19:Y(X);break;case 10:Al(r.type._context);break;case 22:case 23:Ql()}n=n.return}if(ce=e,ie=e=Zt(e.current,null),pe=Le=t,le=0,fi=null,ql=sa=In=0,Ce=Kr=null,vn!==null){for(t=0;t<vn.length;t++)if(n=vn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}vn=null}return e}function Nh(e,t){do{var n=ie;try{if(bl(),ls.current=Ds,Os){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Os=!1}if(kn=0,ue=oe=Z=null,Wr=!1,ui=0,Wl.current=null,n===null||n.return===null){le=1,fi=t,ie=null;break}e:{var s=e,a=n.return,l=n,u=t;if(t=pe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,p=l,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var x=hc(a);if(x!==null){x.flags&=-257,pc(x,a,l,s,t),x.mode&1&&fc(s,c,t),t=x,u=c;var S=t.updateQueue;if(S===null){var y=new Set;y.add(u),t.updateQueue=y}else S.add(u);break e}else{if(!(t&1)){fc(s,c,t),Yl();break e}u=Error(k(426))}}else if(J&&l.mode&1){var I=hc(a);if(I!==null){!(I.flags&65536)&&(I.flags|=256),pc(I,a,l,s,t),jl(lr(u,l));break e}}s=u=lr(u,l),le!==4&&(le=2),Kr===null?Kr=[s]:Kr.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var d=ch(s,u,t);ac(s,d);break e;case 1:l=u;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Jt===null||!Jt.has(m)))){s.flags|=65536,t&=-t,s.lanes|=t;var _=dh(s,l,t);ac(s,_);break e}}s=s.return}while(s!==null)}jh(n)}catch(C){t=C,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(!0)}function Th(){var e=Ms.current;return Ms.current=Ds,e===null?Ds:e}function Yl(){(le===0||le===3||le===2)&&(le=4),ce===null||!(In&268435455)&&!(sa&268435455)||Mt(ce,pe)}function Fs(e,t){var n=z;z|=2;var r=Th();(ce!==e||pe!==t)&&(pt=null,wn(e,t));do try{vv();break}catch(i){Nh(e,i)}while(!0);if(bl(),z=n,Ms.current=r,ie!==null)throw Error(k(261));return ce=null,pe=0,le}function vv(){for(;ie!==null;)Ph(ie)}function yv(){for(;ie!==null&&!Hm();)Ph(ie)}function Ph(e){var t=bh(e.alternate,e,Le);e.memoizedProps=e.pendingProps,t===null?jh(e):ie=t,Wl.current=null}function jh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=dv(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,ie=null;return}}else if(n=cv(n,t,Le),n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);le===0&&(le=5)}function hn(e,t,n){var r=H,i=Ve.transition;try{Ve.transition=null,H=1,wv(e,t,n,r)}finally{Ve.transition=i,H=r}return null}function wv(e,t,n,r){do Xn();while(Vt!==null);if(z&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Zm(e,s),e===ce&&(ie=ce=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Yi||(Yi=!0,Ah(Ss,function(){return Xn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ve.transition,Ve.transition=null;var a=H;H=1;var l=z;z|=4,Wl.current=null,hv(e,n),kh(n,e),zg(No),Es=!!Co,No=Co=null,e.current=n,pv(n),Vm(),z=l,H=a,Ve.transition=s}else e.current=n;if(Yi&&(Yi=!1,Vt=e,zs=i),s=e.pendingLanes,s===0&&(Jt=null),Km(n.stateNode),je(e,re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Us)throw Us=!1,e=Ko,Ko=null,e;return zs&1&&e.tag!==0&&Xn(),s=e.pendingLanes,s&1?e===Go?Gr++:(Gr=0,Go=e):Gr=0,on(),null}function Xn(){if(Vt!==null){var e=cf(zs),t=Ve.transition,n=H;try{if(Ve.transition=null,H=16>e?16:e,Vt===null)var r=!1;else{if(e=Vt,Vt=null,zs=0,z&6)throw Error(k(331));var i=z;for(z|=4,P=e.current;P!==null;){var s=P,a=s.child;if(P.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(P=c;P!==null;){var p=P;switch(p.tag){case 0:case 11:case 15:qr(8,p,s)}var h=p.child;if(h!==null)h.return=p,P=h;else for(;P!==null;){p=P;var g=p.sibling,x=p.return;if(Sh(p),p===c){P=null;break}if(g!==null){g.return=x,P=g;break}P=x}}}var S=s.alternate;if(S!==null){var y=S.child;if(y!==null){S.child=null;do{var I=y.sibling;y.sibling=null,y=I}while(y!==null)}}P=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,P=a;else e:for(;P!==null;){if(s=P,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qr(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,P=d;break e}P=s.return}}var f=e.current;for(P=f;P!==null;){a=P;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,P=m;else e:for(a=f;P!==null;){if(l=P,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ia(9,l)}}catch(C){te(l,l.return,C)}if(l===a){P=null;break e}var _=l.sibling;if(_!==null){_.return=l.return,P=_;break e}P=l.return}}if(z=i,on(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(Ys,e)}catch{}r=!0}return r}finally{H=n,Ve.transition=t}}return!1}function Nc(e,t,n){t=lr(n,t),t=ch(e,t,1),e=Yt(e,t,1),t=Se(),e!==null&&(xi(e,1,t),je(e,t))}function te(e,t,n){if(e.tag===3)Nc(e,e,n);else for(;t!==null;){if(t.tag===3){Nc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jt===null||!Jt.has(r))){e=lr(n,e),e=dh(t,e,1),t=Yt(t,e,1),e=Se(),t!==null&&(xi(t,1,e),je(t,e));break}}t=t.return}}function xv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Se(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(pe&n)===n&&(le===4||le===3&&(pe&130023424)===pe&&500>re()-Kl?wn(e,0):ql|=n),je(e,t)}function Rh(e,t){t===0&&(e.mode&1?(t=Fi,Fi<<=1,!(Fi&130023424)&&(Fi=4194304)):t=1);var n=Se();e=kt(e,t),e!==null&&(xi(e,t,n),je(e,n))}function Sv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rh(e,n)}function _v(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Rh(e,n)}var bh;bh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)Ne=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ne=!1,uv(e,t,n);Ne=!!(e.flags&131072)}else Ne=!1,J&&t.flags&1048576&&Df(t,js,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;cs(e,t),e=t.pendingProps;var i=ir(t,we.current);Jn(t,n),i=Fl(null,t,r,e,i,n);var s=$l();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pe(r)?(s=!0,Ts(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ol(t),i.updater=ra,t.stateNode=i,i._reactInternals=t,Do(t,r,e,n),t=zo(null,t,r,!0,s,n)):(t.tag=0,J&&s&&Tl(t),xe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(cs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=kv(r),e=Qe(r,e),i){case 0:t=Uo(null,t,r,e,n);break e;case 1:t=vc(null,t,r,e,n);break e;case 11:t=mc(null,t,r,e,n);break e;case 14:t=gc(null,t,r,Qe(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),Uo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),vc(e,t,r,i,n);case 3:e:{if(mh(t),e===null)throw Error(k(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Bf(e,t),As(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=lr(Error(k(423)),t),t=yc(e,t,r,n,i);break e}else if(r!==i){i=lr(Error(k(424)),t),t=yc(e,t,r,n,i);break e}else for(Oe=Qt(t.stateNode.containerInfo.firstChild),De=t,J=!0,Je=null,n=Ff(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sr(),r===i){t=It(e,t,n);break e}xe(e,t,r,n)}t=t.child}return t;case 5:return Hf(t),e===null&&Ao(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,To(r,i)?a=null:s!==null&&To(r,s)&&(t.flags|=32),ph(e,t),xe(e,t,a,n),t.child;case 6:return e===null&&Ao(t),null;case 13:return gh(e,t,n);case 4:return Dl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ar(t,null,r,n):xe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),mc(e,t,r,i,n);case 7:return xe(e,t,t.pendingProps,n),t.child;case 8:return xe(e,t,t.pendingProps.children,n),t.child;case 12:return xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,K(Rs,r._currentValue),r._currentValue=a,s!==null)if(tt(s.value,a)){if(s.children===i.children&&!Te.current){t=It(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=St(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?u.next=u:(u.next=p.next,p.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Lo(s.return,n,t),l.lanes|=n;break}u=u.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(k(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Lo(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}xe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Jn(t,n),i=qe(i),r=r(i),t.flags|=1,xe(e,t,r,n),t.child;case 14:return r=t.type,i=Qe(r,t.pendingProps),i=Qe(r.type,i),gc(e,t,r,i,n);case 15:return fh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),cs(e,t),t.tag=1,Pe(r)?(e=!0,Ts(t)):e=!1,Jn(t,n),uh(t,r,i),Do(t,r,i,n),zo(null,t,r,!0,e,n);case 19:return vh(e,t,n);case 22:return hh(e,t,n)}throw Error(k(156,t.tag))};function Ah(e,t){return af(e,t)}function Ev(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(e,t,n,r){return new Ev(e,t,n,r)}function Jl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kv(e){if(typeof e=="function")return Jl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===gl)return 11;if(e===vl)return 14}return 2}function Zt(e,t){var n=e.alternate;return n===null?(n=He(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function hs(e,t,n,r,i,s){var a=2;if(r=e,typeof e=="function")Jl(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case On:return xn(n.children,i,s,t);case ml:a=8,i|=8;break;case so:return e=He(12,n,t,i|2),e.elementType=so,e.lanes=s,e;case ao:return e=He(13,n,t,i),e.elementType=ao,e.lanes=s,e;case oo:return e=He(19,n,t,i),e.elementType=oo,e.lanes=s,e;case Bd:return aa(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fd:a=10;break e;case $d:a=9;break e;case gl:a=11;break e;case vl:a=14;break e;case Lt:a=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=He(a,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function xn(e,t,n,r){return e=He(7,e,r,t),e.lanes=n,e}function aa(e,t,n,r){return e=He(22,e,r,t),e.elementType=Bd,e.lanes=n,e.stateNode={isHidden:!1},e}function Ka(e,t,n){return e=He(6,e,null,t),e.lanes=n,e}function Ga(e,t,n){return t=He(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Iv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ta(0),this.expirationTimes=Ta(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ta(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xl(e,t,n,r,i,s,a,l,u){return e=new Iv(e,t,n,l,u),t===1?(t=1,s===!0&&(t|=8)):t=0,s=He(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ol(s),e}function Cv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ln,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Lh(e){if(!e)return rn;e=e._reactInternals;e:{if(Pn(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Pe(n))return Lf(e,n,t)}return t}function Oh(e,t,n,r,i,s,a,l,u){return e=Xl(n,r,!0,e,i,s,a,l,u),e.context=Lh(null),n=e.current,r=Se(),i=Xt(n),s=St(r,i),s.callback=t??null,Yt(n,s,i),e.current.lanes=i,xi(e,i,r),je(e,r),e}function oa(e,t,n,r){var i=t.current,s=Se(),a=Xt(i);return n=Lh(n),t.context===null?t.context=n:t.pendingContext=n,t=St(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Yt(i,t,a),e!==null&&(et(e,i,a,s),os(e,i,a)),a}function $s(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Tc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zl(e,t){Tc(e,t),(e=e.alternate)&&Tc(e,t)}function Nv(){return null}var Dh=typeof reportError=="function"?reportError:function(e){console.error(e)};function eu(e){this._internalRoot=e}la.prototype.render=eu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));oa(e,t,null,null)};la.prototype.unmount=eu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Cn(function(){oa(null,e,null,null)}),t[Et]=null}};function la(e){this._internalRoot=e}la.prototype.unstable_scheduleHydration=function(e){if(e){var t=hf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dt.length&&t!==0&&t<Dt[n].priority;n++);Dt.splice(n,0,e),n===0&&mf(e)}};function tu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ua(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pc(){}function Tv(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=$s(a);s.call(c)}}var a=Oh(t,r,e,0,null,!1,!1,"",Pc);return e._reactRootContainer=a,e[Et]=a.current,ii(e.nodeType===8?e.parentNode:e),Cn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=$s(u);l.call(c)}}var u=Xl(e,0,!1,null,null,!1,!1,"",Pc);return e._reactRootContainer=u,e[Et]=u.current,ii(e.nodeType===8?e.parentNode:e),Cn(function(){oa(t,u,n,r)}),u}function ca(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var u=$s(a);l.call(u)}}oa(t,a,e,i)}else a=Tv(n,t,e,i,r);return $s(a)}df=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Or(t.pendingLanes);n!==0&&(xl(t,n|1),je(t,re()),!(z&6)&&(ur=re()+500,on()))}break;case 13:Cn(function(){var r=kt(e,1);if(r!==null){var i=Se();et(r,e,1,i)}}),Zl(e,1)}};Sl=function(e){if(e.tag===13){var t=kt(e,134217728);if(t!==null){var n=Se();et(t,e,134217728,n)}Zl(e,134217728)}};ff=function(e){if(e.tag===13){var t=Xt(e),n=kt(e,t);if(n!==null){var r=Se();et(n,e,t,r)}Zl(e,t)}};hf=function(){return H};pf=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};yo=function(e,t,n){switch(t){case"input":if(co(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ea(r);if(!i)throw Error(k(90));Vd(r),co(r,i)}}}break;case"textarea":qd(e,n);break;case"select":t=n.value,t!=null&&Kn(e,!!n.multiple,t,!1)}};Zd=Gl;ef=Cn;var Pv={usingClientEntryPoint:!1,Events:[_i,zn,ea,Jd,Xd,Gl]},jr={findFiberByHostInstance:gn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jv={bundleType:jr.bundleType,version:jr.version,rendererPackageName:jr.rendererPackageName,rendererConfig:jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=rf(e),e===null?null:e.stateNode},findFiberByHostInstance:jr.findFiberByHostInstance||Nv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ji=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ji.isDisabled&&Ji.supportsFiber)try{Ys=Ji.inject(jv),ot=Ji}catch{}}Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pv;Ue.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tu(t))throw Error(k(200));return Cv(e,t,null,n)};Ue.createRoot=function(e,t){if(!tu(e))throw Error(k(299));var n=!1,r="",i=Dh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Xl(e,1,!1,null,null,n,!1,r,i),e[Et]=t.current,ii(e.nodeType===8?e.parentNode:e),new eu(t)};Ue.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=rf(t),e=e===null?null:e.stateNode,e};Ue.flushSync=function(e){return Cn(e)};Ue.hydrate=function(e,t,n){if(!ua(t))throw Error(k(200));return ca(null,e,t,!0,n)};Ue.hydrateRoot=function(e,t,n){if(!tu(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=Dh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Oh(t,null,e,1,n??null,i,!1,s,a),e[Et]=t.current,ii(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new la(t)};Ue.render=function(e,t,n){if(!ua(t))throw Error(k(200));return ca(null,e,t,!1,n)};Ue.unmountComponentAtNode=function(e){if(!ua(e))throw Error(k(40));return e._reactRootContainer?(Cn(function(){ca(null,null,e,!1,function(){e._reactRootContainer=null,e[Et]=null})}),!0):!1};Ue.unstable_batchedUpdates=Gl;Ue.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ua(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return ca(e,t,n,!1,r)};Ue.version="18.3.1-next-f1338f8080-20240426";function Mh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mh)}catch(e){console.error(e)}}Mh(),Dd.exports=Ue;var Rv=Dd.exports,jc=Rv;ro.createRoot=jc.createRoot,ro.hydrateRoot=jc.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hi(){return hi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hi.apply(null,arguments)}var Wt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Wt||(Wt={}));const Rc="popstate";function bv(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:a,hash:l}=r.location;return Jo("",{pathname:s,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Uh(i)}return Lv(t,n,null,e)}function se(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function nu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Av(){return Math.random().toString(36).substr(2,8)}function bc(e,t){return{usr:e.state,key:e.key,idx:t}}function Jo(e,t,n,r){return n===void 0&&(n=null),hi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?gr(t):t,{state:n,key:t&&t.key||r||Av()})}function Uh(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function gr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Lv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,l=Wt.Pop,u=null,c=p();c==null&&(c=0,a.replaceState(hi({},a.state,{idx:c}),""));function p(){return(a.state||{idx:null}).idx}function h(){l=Wt.Pop;let I=p(),d=I==null?null:I-c;c=I,u&&u({action:l,location:y.location,delta:d})}function g(I,d){l=Wt.Push;let f=Jo(y.location,I,d);c=p()+1;let m=bc(f,c),_=y.createHref(f);try{a.pushState(m,"",_)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(_)}s&&u&&u({action:l,location:y.location,delta:1})}function x(I,d){l=Wt.Replace;let f=Jo(y.location,I,d);c=p();let m=bc(f,c),_=y.createHref(f);a.replaceState(m,"",_),s&&u&&u({action:l,location:y.location,delta:0})}function S(I){let d=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof I=="string"?I:Uh(I);return f=f.replace(/ $/,"%20"),se(d,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,d)}let y={get action(){return l},get location(){return e(i,a)},listen(I){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Rc,h),u=I,()=>{i.removeEventListener(Rc,h),u=null}},createHref(I){return t(i,I)},createURL:S,encodeLocation(I){let d=S(I);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:g,replace:x,go(I){return a.go(I)}};return y}var Ac;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ac||(Ac={}));function Ov(e,t,n){return n===void 0&&(n="/"),Dv(e,t,n)}function Dv(e,t,n,r){let i=typeof t=="string"?gr(t):t,s=$h(i.pathname||"/",n);if(s==null)return null;let a=zh(e);Mv(a);let l=null,u=Qv(s);for(let c=0;l==null&&c<a.length;++c)l=qv(a[c],u);return l}function zh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,a,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};u.relativePath.startsWith("/")&&(se(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Sn([r,u.relativePath]),p=n.concat(u);s.children&&s.children.length>0&&(se(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),zh(s.children,t,p,c)),!(s.path==null&&!s.index)&&t.push({path:c,score:Vv(c,s.index),routesMeta:p})};return e.forEach((s,a)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,a);else for(let u of Fh(s.path))i(s,a,u)}),t}function Fh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=Fh(r.join("/")),l=[];return l.push(...a.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...a),l.map(u=>e.startsWith("/")&&u===""?"/":u)}function Mv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Wv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Uv=/^:[\w-]+$/,zv=3,Fv=2,$v=1,Bv=10,Hv=-2,Lc=e=>e==="*";function Vv(e,t){let n=e.split("/"),r=n.length;return n.some(Lc)&&(r+=Hv),t&&(r+=Fv),n.filter(i=>!Lc(i)).reduce((i,s)=>i+(Uv.test(s)?zv:s===""?$v:Bv),r)}function Wv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function qv(e,t,n){let{routesMeta:r}=e,i={},s="/",a=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,p=s==="/"?t:t.slice(s.length)||"/",h=Kv({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},p),g=u.route;if(!h)return null;Object.assign(i,h.params),a.push({params:i,pathname:Sn([s,h.pathname]),pathnameBase:ey(Sn([s,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(s=Sn([s,h.pathnameBase]))}return a}function Kv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Gv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,p,h)=>{let{paramName:g,isOptional:x}=p;if(g==="*"){let y=l[h]||"";a=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const S=l[h];return x&&!S?c[g]=void 0:c[g]=(S||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:a,pattern:e}}function Gv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),nu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Qv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return nu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function $h(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Yv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jv=e=>Yv.test(e);function Xv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?gr(e):e,s;if(n)if(Jv(n))s=n;else{if(n.includes("//")){let a=n;n=Vh(n),nu(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?s=Oc(n.substring(1),"/"):s=Oc(n,t)}else s=t;return{pathname:s,search:ty(r),hash:ny(i)}}function Oc(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Qa(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Zv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Bh(e,t){let n=Zv(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Hh(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=gr(e):(i=hi({},e),se(!i.pathname||!i.pathname.includes("?"),Qa("?","pathname","search",i)),se(!i.pathname||!i.pathname.includes("#"),Qa("#","pathname","hash",i)),se(!i.search||!i.search.includes("#"),Qa("#","search","hash",i)));let s=e===""||i.pathname==="",a=s?"/":i.pathname,l;if(a==null)l=n;else{let h=t.length-1;if(!r&&a.startsWith("..")){let g=a.split("/");for(;g[0]==="..";)g.shift(),h-=1;i.pathname=g.join("/")}l=h>=0?t[h]:"/"}let u=Xv(i,l),c=a&&a!=="/"&&a.endsWith("/"),p=(s||a===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||p)&&(u.pathname+="/"),u}const Vh=e=>e.replace(/\/\/+/g,"/"),Sn=e=>Vh(e.join("/")),ey=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ty=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ny=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ry(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Wh=["post","put","patch","delete"];new Set(Wh);const iy=["get",...Wh];new Set(iy);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pi(){return pi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pi.apply(null,arguments)}const ru=v.createContext(null),sy=v.createContext(null),ki=v.createContext(null),da=v.createContext(null),jn=v.createContext({outlet:null,matches:[],isDataRoute:!1}),qh=v.createContext(null);function Ii(){return v.useContext(da)!=null}function fa(){return Ii()||se(!1),v.useContext(da).location}function Kh(e){v.useContext(ki).static||v.useLayoutEffect(e)}function vr(){let{isDataRoute:e}=v.useContext(jn);return e?yy():ay()}function ay(){Ii()||se(!1);let e=v.useContext(ru),{basename:t,future:n,navigator:r}=v.useContext(ki),{matches:i}=v.useContext(jn),{pathname:s}=fa(),a=JSON.stringify(Bh(i,n.v7_relativeSplatPath)),l=v.useRef(!1);return Kh(()=>{l.current=!0}),v.useCallback(function(c,p){if(p===void 0&&(p={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let h=Hh(c,JSON.parse(a),s,p.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Sn([t,h.pathname])),(p.replace?r.replace:r.push)(h,p.state,p)},[t,r,a,s,e])}function oy(e,t){return ly(e,t)}function ly(e,t,n,r){Ii()||se(!1);let{navigator:i}=v.useContext(ki),{matches:s}=v.useContext(jn),a=s[s.length-1],l=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let c=fa(),p;if(t){var h;let I=typeof t=="string"?gr(t):t;u==="/"||(h=I.pathname)!=null&&h.startsWith(u)||se(!1),p=I}else p=c;let g=p.pathname||"/",x=g;if(u!=="/"){let I=u.replace(/^\//,"").split("/");x="/"+g.replace(/^\//,"").split("/").slice(I.length).join("/")}let S=Ov(e,{pathname:x}),y=hy(S&&S.map(I=>Object.assign({},I,{params:Object.assign({},l,I.params),pathname:Sn([u,i.encodeLocation?i.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?u:Sn([u,i.encodeLocation?i.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),s,n,r);return t&&y?v.createElement(da.Provider,{value:{location:pi({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Wt.Pop}},y):y}function uy(){let e=vy(),t=ry(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),n?v.createElement("pre",{style:i},n):null,null)}const cy=v.createElement(uy,null);class dy extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?v.createElement(jn.Provider,{value:this.props.routeContext},v.createElement(qh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function fy(e){let{routeContext:t,match:n,children:r}=e,i=v.useContext(ru);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),v.createElement(jn.Provider,{value:t},r)}function hy(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let p=a.findIndex(h=>h.route.id&&(l==null?void 0:l[h.route.id])!==void 0);p>=0||se(!1),a=a.slice(0,Math.min(a.length,p+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<a.length;p++){let h=a[p];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=p),h.route.id){let{loaderData:g,errors:x}=n,S=h.route.loader&&g[h.route.id]===void 0&&(!x||x[h.route.id]===void 0);if(h.route.lazy||S){u=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((p,h,g)=>{let x,S=!1,y=null,I=null;n&&(x=l&&h.route.id?l[h.route.id]:void 0,y=h.route.errorElement||cy,u&&(c<0&&g===0?(wy("route-fallback"),S=!0,I=null):c===g&&(S=!0,I=h.route.hydrateFallbackElement||null)));let d=t.concat(a.slice(0,g+1)),f=()=>{let m;return x?m=y:S?m=I:h.route.Component?m=v.createElement(h.route.Component,null):h.route.element?m=h.route.element:m=p,v.createElement(fy,{match:h,routeContext:{outlet:p,matches:d,isDataRoute:n!=null},children:m})};return n&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?v.createElement(dy,{location:n.location,revalidation:n.revalidation,component:y,error:x,children:f(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):f()},null)}var Gh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Gh||{}),Qh=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Qh||{});function py(e){let t=v.useContext(ru);return t||se(!1),t}function my(e){let t=v.useContext(sy);return t||se(!1),t}function gy(e){let t=v.useContext(jn);return t||se(!1),t}function Yh(e){let t=gy(),n=t.matches[t.matches.length-1];return n.route.id||se(!1),n.route.id}function vy(){var e;let t=v.useContext(qh),n=my(),r=Yh();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function yy(){let{router:e}=py(Gh.UseNavigateStable),t=Yh(Qh.UseNavigateStable),n=v.useRef(!1);return Kh(()=>{n.current=!0}),v.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,pi({fromRouteId:t},s)))},[e,t])}const Dc={};function wy(e,t,n){Dc[e]||(Dc[e]=!0)}function xy(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Mr(e){let{to:t,replace:n,state:r,relative:i}=e;Ii()||se(!1);let{future:s,static:a}=v.useContext(ki),{matches:l}=v.useContext(jn),{pathname:u}=fa(),c=vr(),p=Hh(t,Bh(l,s.v7_relativeSplatPath),u,i==="path"),h=JSON.stringify(p);return v.useEffect(()=>c(JSON.parse(h),{replace:n,state:r,relative:i}),[c,h,i,n,r]),null}function pn(e){se(!1)}function Sy(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Wt.Pop,navigator:s,static:a=!1,future:l}=e;Ii()&&se(!1);let u=t.replace(/^\/*/,"/"),c=v.useMemo(()=>({basename:u,navigator:s,static:a,future:pi({v7_relativeSplatPath:!1},l)}),[u,l,s,a]);typeof r=="string"&&(r=gr(r));let{pathname:p="/",search:h="",hash:g="",state:x=null,key:S="default"}=r,y=v.useMemo(()=>{let I=$h(p,u);return I==null?null:{location:{pathname:I,search:h,hash:g,state:x,key:S},navigationType:i}},[u,p,h,g,x,S,i]);return y==null?null:v.createElement(ki.Provider,{value:c},v.createElement(da.Provider,{children:n,value:y}))}function _y(e){let{children:t,location:n}=e;return oy(Xo(t),n)}new Promise(()=>{});function Xo(e,t){t===void 0&&(t=[]);let n=[];return v.Children.forEach(e,(r,i)=>{if(!v.isValidElement(r))return;let s=[...t,i];if(r.type===v.Fragment){n.push.apply(n,Xo(r.props.children,s));return}r.type!==pn&&se(!1),!r.props.index||!r.props.children||se(!1);let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Xo(r.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zo(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function Ey(e,t){let n=Zo(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(s=>{n.append(i,s)})}),n}const ky="6";try{window.__reactRouterVersion=ky}catch{}const Iy="startTransition",Mc=xm[Iy];function Cy(e){let{basename:t,children:n,future:r,window:i}=e,s=v.useRef();s.current==null&&(s.current=bv({window:i,v5Compat:!0}));let a=s.current,[l,u]=v.useState({action:a.action,location:a.location}),{v7_startTransition:c}=r||{},p=v.useCallback(h=>{c&&Mc?Mc(()=>u(h)):u(h)},[u,c]);return v.useLayoutEffect(()=>a.listen(p),[a,p]),v.useEffect(()=>xy(r),[r]),v.createElement(Sy,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}var Uc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Uc||(Uc={}));var zc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(zc||(zc={}));function Ny(e){let t=v.useRef(Zo(e)),n=v.useRef(!1),r=fa(),i=v.useMemo(()=>Ey(r.search,n.current?null:t.current),[r.search]),s=vr(),a=v.useCallback((l,u)=>{const c=Zo(typeof l=="function"?l(i):l);n.current=!0,s("?"+c,u)},[s,i]);return[i,a]}function Ty(){return o.jsxs("div",{className:"landing",children:[o.jsx("div",{className:"bg-glow glow1"}),o.jsx("div",{className:"bg-glow glow2"}),o.jsxs("header",{className:"nav",children:[o.jsx("div",{className:"logo",children:"Kipnova"}),o.jsx("a",{className:"signin",href:"/login",children:"Sign In"})]}),o.jsxs("main",{className:"hero",children:[o.jsxs("section",{className:"left",children:[o.jsx("span",{className:"badge",children:"Official Meta WhatsApp Platform"}),o.jsx("h1",{children:"The AI Receptionist for Modern Businesses"}),o.jsx("p",{children:"Connect your WhatsApp Business using Meta's official Embedded Signup and let Kipnova automate enquiries, bookings and customer support."}),o.jsxs("div",{className:"buttons",children:[o.jsx("a",{href:"/login",className:"primary",children:"Get Started"}),o.jsx("a",{href:"/login",className:"secondary",children:"Existing Client"})]}),o.jsxs("div",{className:"stats",children:[o.jsxs("div",{className:"card",children:[o.jsx("strong",{children:"5 min"}),o.jsx("span",{children:"Setup"})]}),o.jsxs("div",{className:"card",children:[o.jsx("strong",{children:"24/7"}),o.jsx("span",{children:"AI Replies"})]}),o.jsxs("div",{className:"card",children:[o.jsx("strong",{children:"Secure"}),o.jsx("span",{children:"Meta OAuth"})]})]})]}),o.jsx("section",{className:"phone",children:o.jsx("div",{className:"phone-frame",children:o.jsxs("div",{className:"screen",children:[o.jsx("div",{className:"msg leftmsg",children:"Hi, do you offer appointments?"}),o.jsx("div",{className:"msg rightmsg",children:"Yes! What day works for you?"}),o.jsx("div",{className:"msg leftmsg",children:"Tomorrow morning."}),o.jsx("div",{className:"msg rightmsg",children:"Done. You're booked ✅"})]})})})]})]})}const Py="897020349594573";function jy(){const[e,t]=v.useState(!1);return v.useEffect(()=>{if(window.FB){t(!0);return}window.fbAsyncInit=function(){window.FB.init({appId:Py,autoLogAppEvents:!0,xfbml:!0,version:"v26.0"}),console.log("✅ Facebook SDK initialized"),t(!0)};const n="facebook-jssdk";if(!document.getElementById(n)){const r=document.createElement("script");r.id=n,r.src="https://connect.facebook.net/en_US/sdk.js",r.async=!0,r.defer=!0,r.crossOrigin="anonymous",document.body.appendChild(r)}},[]),e}const Ry="1337677251868059";function by(){return new Promise((e,t)=>{if(!window.FB){t(new Error("Facebook SDK not loaded."));return}window.FB.login(n=>{if(!n){t(new Error("No response from Facebook."));return}e(n)},{config_id:Ry,response_type:"code",override_default_response_type:!0,extras:{setup:{},featureType:"",sessionInfoVersion:"3"}})})}const Ay=()=>{};var Fc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Ly=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],a=e[n++],l=e[n++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return t.join("")},Xh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],a=i+1<e.length,l=a?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,p=s>>2,h=(s&3)<<4|l>>4;let g=(l&15)<<2|c>>6,x=c&63;u||(x=64,a||(g=64)),r.push(n[p],n[h],n[g],n[x])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Jh(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ly(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],l=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||l==null||c==null||h==null)throw new Oy;const g=s<<2|l>>4;if(r.push(g),c!==64){const x=l<<4&240|c>>2;if(r.push(x),h!==64){const S=c<<6&192|h;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Oy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Dy=function(e){const t=Jh(e);return Xh.encodeByteArray(t,!0)},Zh=function(e){return Dy(e).replace(/\./g,"")},ep=function(e){try{return Xh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy=()=>My().__FIREBASE_DEFAULTS__,zy=()=>{if(typeof process>"u"||typeof Fc>"u")return;const e=Fc.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Fy=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&ep(e[1]);return t&&JSON.parse(t)},iu=()=>{try{return Ay()||Uy()||zy()||Fy()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},$y=e=>{var t,n;return(n=(t=iu())==null?void 0:t.emulatorHosts)==null?void 0:n[e]},tp=()=>{var e;return(e=iu())==null?void 0:e.config},np=e=>{var t;return(t=iu())==null?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function By(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())}function Hy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Vy(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Wy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qy(){const e=_e();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Ky(){try{return typeof indexedDB=="object"}catch{return!1}}function Gy(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)==null?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy="FirebaseError";class ln extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Qy,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ci.prototype.create)}}class Ci{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],a=s?Yy(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new ln(i,l,r)}}function Yy(e,t){try{let n=0,r="";for(;n<e.length;){const i=e.indexOf("{$",n);if(i===-1){r+=e.substring(n);break}const s=e.indexOf("}",i+2);if(s===-1){r+=e.substring(n);break}const a=e.substring(i+2,s),l=t[a];r+=e.substring(n,i)+(l!=null?String(l):`<${a}?>`),n=s+1}return r}catch{return e}}function Jy(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function cr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],a=t[i];if($c(s)&&$c(a)){if(!cr(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function $c(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Ur(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function zr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Xy(e,t){const n=new Zy(e,t);return n.subscribe.bind(n)}class Zy{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");e0(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Ya),i.error===void 0&&(i.error=Ya),i.complete===void 0&&(i.complete=Ya);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function e0(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ya(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(e){return e&&e._delegate?e._delegate:e}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function t0(e){return(await fetch(e,{credentials:"include"})).ok}class dr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new rp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(i0(t))try{this.getOrInitializeService({instanceIdentifier:mn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=mn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=mn){return this.instances.has(t)}getOptions(t=mn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(t,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:r0(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=mn){return this.component?this.component.multipleInstances?t:mn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function r0(e){return e===mn?void 0:e}function i0(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new n0(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(V||(V={}));const a0={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},o0=V.INFO,l0={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},u0=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=l0[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ip{constructor(t){this.name=t,this._logLevel=o0,this._logHandler=u0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in V))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?a0[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...t),this._logHandler(this,V.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...t),this._logHandler(this,V.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,V.INFO,...t),this._logHandler(this,V.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,V.WARN,...t),this._logHandler(this,V.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...t),this._logHandler(this,V.ERROR,...t)}}const c0=(e,t)=>t.some(n=>e instanceof n);let Bc,Hc;function d0(){return Bc||(Bc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function f0(){return Hc||(Hc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sp=new WeakMap,el=new WeakMap,ap=new WeakMap,Ja=new WeakMap,au=new WeakMap;function h0(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(en(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&sp.set(n,e)}).catch(()=>{}),au.set(t,e),t}function p0(e){if(el.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});el.set(e,t)}let tl={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return el.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ap.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return en(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function m0(e){tl=e(tl)}function g0(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Xa(this),t,...n);return ap.set(r,t.sort?t.sort():[t]),en(r)}:f0().includes(e)?function(...t){return e.apply(Xa(this),t),en(sp.get(this))}:function(...t){return en(e.apply(Xa(this),t))}}function v0(e){return typeof e=="function"?g0(e):(e instanceof IDBTransaction&&p0(e),c0(e,d0())?new Proxy(e,tl):e)}function en(e){if(e instanceof IDBRequest)return h0(e);if(Ja.has(e))return Ja.get(e);const t=v0(e);return t!==e&&(Ja.set(e,t),au.set(t,e)),t}const Xa=e=>au.get(e);function y0(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),l=en(a);return r&&a.addEventListener("upgradeneeded",u=>{r(en(a.result),u.oldVersion,u.newVersion,en(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const w0=["get","getKey","getAll","getAllKeys","count"],x0=["put","add","delete","clear"],Za=new Map;function Vc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Za.get(t))return Za.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=x0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||w0.includes(n)))return;const s=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Za.set(t,s),s}m0(e=>({...e,get:(t,n,r)=>Vc(t,n)||e.get(t,n,r),has:(t,n)=>!!Vc(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _0(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const nl="@firebase/app",Wc="0.16.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct=new ip("@firebase/app"),E0="@firebase/app-compat",k0="@firebase/analytics-compat",I0="@firebase/analytics",C0="@firebase/app-check-compat",N0="@firebase/app-check",T0="@firebase/auth",P0="@firebase/auth-compat",j0="@firebase/database",R0="@firebase/data-connect",b0="@firebase/database-compat",A0="@firebase/functions",L0="@firebase/functions-compat",O0="@firebase/installations",D0="@firebase/installations-compat",M0="@firebase/messaging",U0="@firebase/messaging-compat",z0="@firebase/performance",F0="@firebase/performance-compat",$0="@firebase/remote-config",B0="@firebase/remote-config-compat",H0="@firebase/storage",V0="@firebase/storage-compat",W0="@firebase/firestore",q0="@firebase/ai",K0="@firebase/firestore-compat",G0="firebase",Q0="12.17.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl="[DEFAULT]",Y0={[nl]:"fire-core",[E0]:"fire-core-compat",[I0]:"fire-analytics",[k0]:"fire-analytics-compat",[N0]:"fire-app-check",[C0]:"fire-app-check-compat",[T0]:"fire-auth",[P0]:"fire-auth-compat",[j0]:"fire-rtdb",[R0]:"fire-data-connect",[b0]:"fire-rtdb-compat",[A0]:"fire-fn",[L0]:"fire-fn-compat",[O0]:"fire-iid",[D0]:"fire-iid-compat",[M0]:"fire-fcm",[U0]:"fire-fcm-compat",[z0]:"fire-perf",[F0]:"fire-perf-compat",[$0]:"fire-rc",[B0]:"fire-rc-compat",[H0]:"fire-gcs",[V0]:"fire-gcs-compat",[W0]:"fire-fst",[K0]:"fire-fst-compat",[q0]:"fire-vertex","fire-js":"fire-js",[G0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=new Map,J0=new Map,il=new Map;function qc(e,t){try{e.container.addComponent(t)}catch(n){Ct.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function mi(e){const t=e.name;if(il.has(t))return Ct.debug(`There were multiple attempts to register component ${t}.`),!1;il.set(t,e);for(const n of Bs.values())qc(n,e);for(const n of J0.values())qc(n,e);return!0}function op(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function at(e){return e==null?!1:e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yt=new Ci("app","Firebase",X0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw yt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=Q0;function lp(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r={name:rl,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw yt.create("bad-app-name",{appName:String(i)});if(n||(n=tp()),!n)throw yt.create("no-options");const s=Bs.get(i);if(s)if(cr(n,s.options)){if(cr(r,s.config))return s;throw yt.create("duplicate-app",{appName:i,mismatchedParam:"config",oldValue:JSON.stringify(s.config),newValue:JSON.stringify(r)})}else throw yt.create("duplicate-app",{appName:i,mismatchedParam:"options",oldValue:JSON.stringify(s.options),newValue:JSON.stringify(n)});const a=new s0(i);for(const u of il.values())a.addComponent(u);const l=new Z0(n,r,a);return Bs.set(i,l),l}function ew(e=rl){const t=Bs.get(e);if(!t&&e===rl&&tp())return lp();if(!t)throw yt.create("no-app",{appName:e});return t}function Zn(e,t,n){let r=Y0[e]??e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=t.match(/\s|\//);if(i||s){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ct.warn(a.join(" "));return}mi(new dr(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw="firebase-heartbeat-database",nw=1,gi="firebase-heartbeat-store";let eo=null;function up(){return eo||(eo=y0(tw,nw,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(gi)}catch(n){console.warn(n)}}}}).catch(e=>{throw yt.create("idb-open",{originalErrorMessage:e.message})})),eo}async function rw(e){try{const n=(await up()).transaction(gi),r=await n.objectStore(gi).get(cp(e));return await n.done,r}catch(t){if(t instanceof ln)Ct.warn(t.message);else{const n=yt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ct.warn(n.message)}}}async function Kc(e,t){try{const r=(await up()).transaction(gi,"readwrite");await r.objectStore(gi).put(t,cp(e)),await r.done}catch(n){if(n instanceof ln)Ct.warn(n.message);else{const r=yt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ct.warn(r.message)}}}function cp(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw=1024,sw=30;class aw{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Gc();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>sw){const a=uw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ct.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gc(),{heartbeatsToSend:r,unsentEntries:i}=ow(this._heartbeatsCache.heartbeats),s=Zh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Ct.warn(n),""}}}function Gc(){return new Date().toISOString().substring(0,10)}function ow(e,t=iw){const n=[];let r=e.slice();for(const i of e){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Qc(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Qc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class lw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ky()?Gy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await rw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Kc(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Kc(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Qc(e){return Zh(JSON.stringify({version:2,heartbeats:e})).length}function uw(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(e){mi(new dr("platform-logger",t=>new S0(t),"PRIVATE")),mi(new dr("heartbeat",t=>new aw(t),"PRIVATE")),Zn(nl,Wc,e),Zn(nl,Wc,"esm2020"),Zn("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cw("");var dw="firebase",fw="12.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zn(dw,fw,"app");function dp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hw=dp,fp=new Ci("auth","Firebase",dp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=new ip("@firebase/auth");function hp(e,...t){Hs.logLevel<=V.WARN&&Hs.warn(`Auth (${Ti}): ${e}`,...t)}function ps(e,...t){Hs.logLevel<=V.ERROR&&Hs.error(`Auth (${Ti}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(e,...t){throw ou(e,...t)}function ut(e,...t){return ou(e,...t)}function pp(e,t,n){const r={...hw(),[t]:n};return new Ci("auth","Firebase",r).create(t,{appName:e.name})}function tn(e){return pp(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ou(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return fp.create(e,...t)}function L(e,t,...n){if(!e)throw ou(t,...n)}function wt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ps(t),new Error(t)}function Nt(e,t){e||wt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(){var e;return typeof self<"u"&&((e=self.location)==null?void 0:e.href)||""}function pw(){return Yc()==="http:"||Yc()==="https:"}function Yc(){var e;return typeof self<"u"&&((e=self.location)==null?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pw()||Vy()||"connection"in navigator)?navigator.onLine:!0}function gw(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(t,n){this.shortDelay=t,this.longDelay=n,Nt(n>t,"Short delay should be less than long delay!"),this.isMobile=By()||Wy()}get(){return mw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(e,t){Nt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ww=new Pi(3e4,6e4);function Rn(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function un(e,t,n,r,i={}){return gp(e,i,async()=>{let s={},a={};r&&(t==="GET"?a=r:s={body:JSON.stringify(r)});const l=Ni({...a,key:e.config.apiKey}).slice(1),u=await e._getAdditionalHeaders();u["Content-Type"]="application/json",e.languageCode&&(u["X-Firebase-Locale"]=e.languageCode);const c={method:t,headers:u,...s};return Hy()||(c.referrerPolicy="strict-origin-when-cross-origin"),e.emulatorConfig&&su(e.emulatorConfig.host)&&(c.credentials="include"),mp.fetch()(await vp(e,e.config.apiHost,n,l),c)})}async function gp(e,t,n){e._canInitEmulator=!1;const r={...vw,...t};try{const i=new Sw(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Xi(e,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xi(e,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Xi(e,"email-already-in-use",a);if(u==="USER_DISABLED")throw Xi(e,"user-disabled",a);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw pp(e,p,c);nt(e,p)}}catch(i){if(i instanceof ln)throw i;nt(e,"network-request-failed",{message:String(i)})}}async function ha(e,t,n,r,i={}){const s=await un(e,t,n,r,i);return"mfaPendingCredential"in s&&nt(e,"multi-factor-auth-required",{_serverResponse:s}),s}async function vp(e,t,n,r){const i=`${t}${n}?${r}`,s=e,a=s.config.emulator?lu(e.config,i):`${e.config.apiScheme}://${i}`;return yw.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}function xw(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Sw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ut(this.auth,"network-request-failed")),ww.get())})}}function Xi(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ut(e,t,r);return i.customData._tokenResponse=n,i}function Jc(e){return e!==void 0&&e.enterprise!==void 0}class _w{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return xw(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Ew(e,t){return un(e,"GET","/v2/recaptchaConfig",Rn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kw(e,t){return un(e,"POST","/v1/accounts:delete",t)}async function Vs(e,t){return un(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Iw(e,t=!1){const n=dt(e),r=await n.getIdToken(t),i=uu(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Qr(to(i.auth_time)),issuedAtTime:Qr(to(i.iat)),expirationTime:Qr(to(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function to(e){return Number(e)*1e3}function uu(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return ps("JWT malformed, contained fewer than 3 sections"),null;try{const i=ep(n);return i?JSON.parse(i):(ps("Failed to decode base64 JWT payload"),null)}catch(i){return ps("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Xc(e){const t=uu(e);return L(t,"internal-error"),L(typeof t.exp<"u","internal-error"),L(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vi(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof ln&&Cw(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Cw({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qr(this.lastLoginAt),this.creationTime=Qr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ws(e){var h;const t=e.auth,n=await e.getIdToken(),r=await vi(e,Vs(t,{idToken:n}));L(r==null?void 0:r.users.length,t,"internal-error");const i=r.users[0];e._notifyReloadListener(i);const s=(h=i.providerUserInfo)!=null&&h.length?yp(i.providerUserInfo):[],a=Pw(e.providerData,s),l=e.isAnonymous,u=!(e.email&&i.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new al(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(e,p)}async function Tw(e){const t=dt(e);await Ws(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Pw(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function yp(e){return e.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jw(e,t){const n=await gp(e,{},async()=>{const r=Ni({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,a=await vp(e,i,"/v1/token",`key=${s}`),l=await e._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return e.emulatorConfig&&su(e.emulatorConfig.host)&&(u.credentials="include"),mp.fetch()(a,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Rw(e,t){return un(e,"POST","/v2/accounts:revokeToken",Rn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){L(t.idToken,"internal-error"),L(typeof t.idToken<"u","internal-error"),L(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Xc(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){L(t.length!==0,"internal-error");const n=Xc(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await jw(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new er;return r&&(L(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),s&&(L(typeof s=="number","internal-error",{appName:t}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new er,this.toJSON())}_performRefresh(){return wt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(e,t){L(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Xe{constructor({uid:t,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new Nw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new al(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await vi(this,this.stsTokenManager.getToken(this.auth,t));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Iw(this,t)}reload(){return Tw(this)}_assign(t){this!==t&&(L(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Xe({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Ws(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(at(this.auth.app))return Promise.reject(tn(this.auth));const t=await this.getIdToken();return await vi(this,kw(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,a=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,p=n.lastLoginAt??void 0,{uid:h,emailVerified:g,isAnonymous:x,providerData:S,stsTokenManager:y}=n;L(h&&y,t,"internal-error");const I=er.fromJSON(this.name,y);L(typeof h=="string",t,"internal-error"),bt(r,t.name),bt(i,t.name),L(typeof g=="boolean",t,"internal-error"),L(typeof x=="boolean",t,"internal-error"),bt(s,t.name),bt(a,t.name),bt(l,t.name),bt(u,t.name),bt(c,t.name),bt(p,t.name);const d=new Xe({uid:h,auth:t,email:i,emailVerified:g,displayName:r,isAnonymous:x,photoURL:a,phoneNumber:s,tenantId:l,stsTokenManager:I,createdAt:c,lastLoginAt:p});return S&&Array.isArray(S)&&(d.providerData=S.map(f=>({...f}))),u&&(d._redirectEventId=u),d}static async _fromIdTokenResponse(t,n,r=!1){const i=new er;i.updateFromServerResponse(n);const s=new Xe({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Ws(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];L(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?yp(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new er;l.updateFromIdToken(r);const u=new Xe({uid:i.localId,auth:t,stsTokenManager:l,isAnonymous:a}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new al(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc=new Map;function xt(e){Nt(e instanceof Function,"Expected a class definition");let t=Zc.get(e);return t?(Nt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Zc.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}wp.type="NONE";const ed=wp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(e,t,n){return`firebase:${e}:${t}:${n}`}class tr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ms(this.userKey,i.apiKey,s),this.fullPersistenceKey=ms("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Vs(this.auth,{idToken:t}).catch(()=>{});return n?Xe._fromGetAccountInfoResponse(this.auth,n,t):null}return Xe._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new tr(xt(ed),t,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||xt(ed);const a=ms(r,t.config.apiKey,t.name);let l=null;for(const c of n)try{const p=await c._get(a);if(p){let h;if(typeof p=="string"){const g=await Vs(t,{idToken:p}).catch(()=>{});if(!g)break;h=await Xe._fromGetAccountInfoResponse(t,g,p)}else h=Xe._fromJSON(t,p);c!==s&&(l=h),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new tr(s,t,r):(s=u[0],l&&await s._set(a,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(a)}catch{}})),new tr(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ep(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(xp(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ip(t))return"Blackberry";if(Cp(t))return"Webos";if(Sp(t))return"Safari";if((t.includes("chrome/")||_p(t))&&!t.includes("edge/"))return"Chrome";if(kp(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function xp(e=_e()){return/firefox\//i.test(e)}function Sp(e=_e()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function _p(e=_e()){return/crios\//i.test(e)}function Ep(e=_e()){return/iemobile/i.test(e)}function kp(e=_e()){return/android/i.test(e)}function Ip(e=_e()){return/blackberry/i.test(e)}function Cp(e=_e()){return/webos/i.test(e)}function cu(e=_e()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function bw(e=_e()){var t;return cu(e)&&!!((t=window.navigator)!=null&&t.standalone)}function Aw(){return qy()&&document.documentMode===10}function Np(e=_e()){return cu(e)||kp(e)||Cp(e)||Ip(e)||/windows phone/i.test(e)||Ep(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(e,t=[]){let n;switch(e){case"Browser":n=td(_e());break;case"Worker":n=`${td(_e())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ti}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((a,l)=>{try{const u=t(s);a(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ow(e,t={}){return un(e,"GET","/v2/passwordPolicy",Rn(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=6;class Mw{constructor(t){var r;const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Dw,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=t.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nd(this),this.idTokenSubscription=new nd(this),this.beforeStateQueue=new Lw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=xt(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await tr.create(this,t),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Vs(this,{idToken:t}),r=await Xe._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var s;if(at(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(t);(!a||a===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Ws(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=gw()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(at(this.app))return Promise.reject(tn(this));const n=t?dt(t):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&L(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return at(this.app)?Promise.reject(tn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return at(this.app)?Promise.reject(tn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Ow(this),n=new Mw(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Ci("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Rw(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&xt(t)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await tr.create(this,[xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const u=t.addObserver(n,r,i);return()=>{a=!0,u()}}else{const u=t.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Tp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var n;if(at(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return t!=null&&t.error&&hp(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function yr(e){return dt(e)}class nd{constructor(t){this.auth=t,this.observer=null,this.addObserver=Xy(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zw(e){pa=e}function Pp(e){return pa.loadJS(e)}function Fw(){return pa.recaptchaEnterpriseScript}function $w(){return pa.gapiScript}function Bw(e){return`__${e}${Math.floor(Math.random()*1e6)}`}class Hw{constructor(){this.enterprise=new Vw}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class Vw{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww="recaptcha-enterprise",jp="NO_RECAPTCHA",rd="onFirebaseAuthREInstanceReady";class Ut{constructor(t){this.type=Ww,this.auth=yr(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,l)=>{Ew(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new _w(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,a(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,a,l){const u=window.grecaptcha;Jc(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:t}).then(c=>{a(c)}).catch(()=>{a(jp)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Hw().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{r(this.auth).then(async l=>{if(!n&&Jc(window.grecaptcha)&&Ut.scriptInjectionDeferred)await Ut.scriptInjectionDeferred.promise,i(l,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Fw();u.length!==0&&(u+=l+`&onload=${rd}`),Ut.scriptInjectionDeferred=new rp,window[rd]=()=>{var c;(c=Ut.scriptInjectionDeferred)==null||c.resolve()},Pp(u).then(()=>{var c;return(c=Ut.scriptInjectionDeferred)==null?void 0:c.promise}).then(()=>{i(l,s,a)}).catch(c=>{a(c)})}}).catch(l=>{a(l)})})}}Ut.scriptInjectionDeferred=null;async function id(e,t,n,r=!1,i=!1){const s=new Ut(e);let a;if(i)a=jp;else try{a=await s.verify(n)}catch{a=await s.verify(n,!0)}const l={...t};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function sd(e,t,n,r,i){var s;if((s=e._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await id(e,t,n,n==="getOobCode");return r(e,a)}else return r(e,t).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await id(e,t,n,n==="getOobCode");return r(e,l)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(e,t){const n=op(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(cr(s,t??{}))return i;nt(i,"already-initialized")}return n.initialize({options:t})}function Kw(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Gw(e,t,n){const r=yr(e);L(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,s=Rp(t),{host:a,port:l}=Qw(t),u=l===null?"":`:${l}`,c={url:`${s}//${a}${u}/`},p=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){L(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),L(cr(c,r.config.emulator)&&cr(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,su(a)?t0(`${s}//${a}${u}`):Yw()}function Rp(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Qw(e){const t=Rp(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ad(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:ad(a)}}}function ad(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Yw(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return wt("not implemented")}_getIdTokenResponse(t){return wt("not implemented")}_linkToIdToken(t,n){return wt("not implemented")}_getReauthenticationResolver(t){return wt("not implemented")}}async function Jw(e,t){return un(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xw(e,t){return ha(e,"POST","/v1/accounts:signInWithPassword",Rn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zw(e,t){return ha(e,"POST","/v1/accounts:signInWithEmailLink",Rn(e,t))}async function ex(e,t){return ha(e,"POST","/v1/accounts:signInWithEmailLink",Rn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends du{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new yi(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new yi(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sd(t,n,"signInWithPassword",Xw);case"emailLink":return Zw(t,{email:this._email,oobCode:this._password});default:nt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sd(t,r,"signUpPassword",Jw);case"emailLink":return ex(t,{idToken:n,email:this._email,oobCode:this._password});default:nt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nr(e,t){return ha(e,"POST","/v1/accounts:signInWithIdp",Rn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tx="http://localhost";class Nn extends du{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Nn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const a=new Nn(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return nr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,nr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,nr(t,n)}buildRequest(){const t={requestUri:tx,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ni(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nx(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function rx(e){const t=Ur(zr(e)).link,n=t?Ur(zr(t)).deep_link_id:null,r=Ur(zr(e)).deep_link_id;return(r?Ur(zr(r)).link:null)||r||n||t||e}class fu{constructor(t){const n=Ur(zr(t)),r=n.apiKey??null,i=n.oobCode??null,s=nx(n.mode??null);L(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(t){const n=rx(t);try{return new fu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(){this.providerId=wr.PROVIDER_ID}static credential(t,n){return yi._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=fu.parseLink(n);return L(r,"argument-error"),yi._fromEmailAndCode(t,r.code,r.tenantId)}}wr.PROVIDER_ID="password";wr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";wr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji extends bp{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends ji{constructor(){super("facebook.com")}static credential(t){return Nn._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return zt.credentialFromTaggedObject(t)}static credentialFromError(t){return zt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return zt.credential(t.oauthAccessToken)}catch{return null}}}zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";zt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends ji{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Nn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Ft.credentialFromTaggedObject(t)}static credentialFromError(t){return Ft.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Ft.credential(n,r)}catch{return null}}}Ft.GOOGLE_SIGN_IN_METHOD="google.com";Ft.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends ji{constructor(){super("github.com")}static credential(t){return Nn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return $t.credentialFromTaggedObject(t)}static credentialFromError(t){return $t.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return $t.credential(t.oauthAccessToken)}catch{return null}}}$t.GITHUB_SIGN_IN_METHOD="github.com";$t.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends ji{constructor(){super("twitter.com")}static credential(t,n){return Nn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Bt.credentialFromTaggedObject(t)}static credentialFromError(t){return Bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Bt.credential(n,r)}catch{return null}}}Bt.TWITTER_SIGN_IN_METHOD="twitter.com";Bt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await Xe._fromIdTokenResponse(t,r,i),a=od(r);return new fr({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=od(r);return new fr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function od(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs extends ln{constructor(t,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,qs.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new qs(t,n,r,i)}}function Ap(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?qs._fromErrorAndOperation(e,s,t,r):s})}async function ix(e,t,n=!1){const r=await vi(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return fr._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sx(e,t,n=!1){const{auth:r}=e;if(at(r.app))return Promise.reject(tn(r));const i="reauthenticate";try{const s=await vi(e,Ap(r,i,t,e),n);L(s.idToken,r,"internal-error");const a=uu(s.idToken);L(a,r,"internal-error");const{sub:l}=a;return L(e.uid===l,r,"user-mismatch"),fr._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&nt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lp(e,t,n=!1){if(at(e.app))return Promise.reject(tn(e));const r="signIn",i=await Ap(e,r,t),s=await fr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function ax(e,t){return Lp(yr(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ox(e){const t=yr(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function lx(e,t,n){return at(e.app)?Promise.reject(tn(e)):ax(dt(e),wr.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ox(e),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ux(e,t){return dt(e).setPersistence(t)}function cx(e,t,n,r){return dt(e).onIdTokenChanged(t,n,r)}function dx(e,t,n){return dt(e).beforeAuthStateChanged(t,n)}function Op(e,t,n,r){return dt(e).onAuthStateChanged(t,n,r)}function Dp(e){return dt(e).signOut()}const Ks="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ks,"1"),this.storage.removeItem(Ks),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fx=1e3,hx=10;class Up extends Mp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Np(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);Aw()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,hx):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},fx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Up.type="LOCAL";const zp=Up;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp extends Mp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Fp.type="SESSION";const $p=Fp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function px(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new ma(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async c=>c(n.origin,s)),u=await px(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ma.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,u)=>{const c=hu("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(h){const g=h;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(p),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:c,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return window}function gx(e){ct().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(){return typeof ct().WorkerGlobalScope<"u"&&typeof ct().importScripts=="function"}async function vx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yx(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)==null?void 0:e.controller)||null}function wx(){return Bp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp="firebaseLocalStorageDb",xx=1,Gs="firebaseLocalStorage",Vp="fbase_key";class Ri{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ga(e,t){return e.transaction([Gs],t?"readwrite":"readonly").objectStore(Gs)}function Sx(){const e=indexedDB.deleteDatabase(Hp);return new Ri(e).toPromise()}function Wp(){const e=indexedDB.open(Hp,xx);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Gs,{keyPath:Vp})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Gs)?t(r):(r.close(),await Sx(),t(await Wp()))})})}async function ld(e,t,n){const r=ga(e,!0).put({[Vp]:t,value:n});return new Ri(r).toPromise()}async function _x(e,t){const n=ga(e,!1).get(t),r=await new Ri(n).toPromise();return r===void 0?null:r.value}function ud(e,t){const n=ga(e,!0).delete(t);return new Ri(n).toPromise()}const Ex=800,kx=3;class qp{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow)),typeof document<"u"&&typeof document.addEventListener=="function"&&document.addEventListener("visibilitychange",this.onVisibilityChange)}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow)),typeof document<"u"&&typeof document.removeEventListener=="function"&&document.removeEventListener("visibilitychange",this.onVisibilityChange)}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isHiding=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isHiding=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(t=>t.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isHiding&&(this.isHiding=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this.onVisibilityChange=()=>{typeof document<"u"&&(document.visibilityState==="hidden"?this.onPageHide():document.visibilityState==="visible"&&this.onPageShow())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){if(this.isHiding)throw new Error("Database is closing/hidden");return this.dbPromise?this.dbPromise:(this.dbPromise=Wp(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(this.isHiding||n++>kx)throw r;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return Bp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ma._getInstance(wx()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await vx(),!this.activeServiceWorker)return;this.sender=new mx(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(n=t[0])!=null&&n.fulfilled&&(r=t[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||yx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async t=>{await ld(t,Ks,"1"),await ud(t,Ks)}),!0):!1}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ld(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>_x(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>ud(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){if(this.isHiding)return[];try{const t=await this._withRetries(i=>{const s=ga(i,!1).getAll();return new Ri(s).toPromise()});if(this.isHiding)return[];if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}catch(t){return this.isHiding||hp(`Firebase Auth cross-tab polling failed with error: ${t}`),[]}}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ex)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}qp.type="LOCAL";const Ix=qp;new Pi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cx(e,t){return t?xt(t):(L(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu extends du{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return nr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return nr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return nr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Nx(e){return Lp(e.auth,new pu(e),e.bypassAuthState)}function Tx(e){const{auth:t,user:n}=e;return L(n,t,"internal-error"),sx(n,new pu(e),e.bypassAuthState)}async function Px(e){const{auth:t,user:n}=e;return L(n,t,"internal-error"),ix(n,new pu(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=t;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Nx;case"linkViaPopup":case"linkViaRedirect":return Px;case"reauthViaPopup":case"reauthViaRedirect":return Tx;default:nt(this.auth,"internal-error")}}resolve(t){Nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx=new Pi(2e3,1e4);class qn extends Kp{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,qn.currentPopupAction&&qn.currentPopupAction.cancel(),qn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return L(t,this.auth,"internal-error"),t}async onExecution(){Nt(this.filter.length===1,"Popup operations only handle one event");const t=hu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ut(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,jx.get())};t()}}qn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rx="pendingRedirect",gs=new Map;class bx extends Kp{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=gs.get(this.auth._key());if(!t){try{const r=await Ax(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}gs.set(this.auth._key(),t)}return this.bypassAuthState||gs.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ax(e,t){const n=Dx(t),r=Ox(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Lx(e,t){gs.set(e._key(),t)}function Ox(e){return xt(e._redirectPersistence)}function Dx(e){return ms(Rx,e.config.apiKey,e.name)}async function Mx(e,t,n=!1){if(at(e.app))return Promise.reject(tn(e));const r=yr(e),i=Cx(r,t),a=await new bx(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux=10*60*1e3;class zx{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Fx(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Gp(t)){const i=((r=t.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(ut(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Ux&&this.cachedEventUids.clear(),this.cachedEventUids.has(cd(t))}saveEventToCache(t){this.cachedEventUids.add(cd(t)),this.lastProcessedEventTime=Date.now()}}function cd(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Gp({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Fx(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gp(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $x(e,t={}){return un(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hx=/^https?/;async function Vx(e){if(e.config.emulator)return;const{authorizedDomains:t}=await $x(e);for(const n of t)try{if(Wx(n))return}catch{}nt(e,"unauthorized-domain")}function Wx(e){const t=sl(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!Hx.test(n))return!1;if(Bx.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qx=new Pi(3e4,6e4);function dd(){const e=ct().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Kx(e){return new Promise((t,n)=>{var i,s,a;function r(){dd(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{dd(),n(ut(e,"network-request-failed"))},timeout:qx.get()})}if((s=(i=ct().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)t(gapi.iframes.getContext());else if((a=ct().gapi)!=null&&a.load)r();else{const l=Bw("iframefcb");return ct()[l]=()=>{gapi.load?r():n(ut(e,"network-request-failed"))},Pp(`${$w()}?onload=${l}`).catch(u=>n(u))}}).catch(t=>{throw vs=null,t})}let vs=null;function Gx(e){return vs=vs||Kx(e),vs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qx=new Pi(5e3,15e3),Yx="__/auth/iframe",Jx="emulator/auth/iframe",Xx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eS(e){const t=e.config;L(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?lu(t,Jx):`https://${e.config.authDomain}/${Yx}`,r={apiKey:t.apiKey,appName:e.name,v:Ti},i=Zx.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ni(r).slice(1)}`}async function tS(e){const t=await Gx(e),n=ct().gapi;return L(n,e,"internal-error"),t.open({where:document.body,url:eS(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xx,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=ut(e,"network-request-failed"),l=ct().setTimeout(()=>{s(a)},Qx.get());function u(){ct().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rS=500,iS=600,sS="_blank",aS="http://localhost";class fd{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oS(e,t,n,r=rS,i=iS){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...nS,width:r.toString(),height:i.toString(),top:s,left:a},c=_e().toLowerCase();n&&(l=_p(c)?sS:n),xp(c)&&(t=t||aS,u.scrollbars="yes");const p=Object.entries(u).reduce((g,[x,S])=>`${g}${x}=${S},`,"");if(bw(c)&&l!=="_self")return lS(t||"",l),new fd(null);const h=window.open(t||"",l,p);L(h,e,"popup-blocked");try{h.focus()}catch{}return new fd(h)}function lS(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS="__/auth/handler",cS="emulator/auth/handler",dS=encodeURIComponent("fac");async function hd(e,t,n,r,i,s){L(e.config.authDomain,e,"auth-domain-config-required"),L(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ti,eventId:i};if(t instanceof bp){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",Jy(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[p,h]of Object.entries({}))a[p]=h}if(t instanceof ji){const p=t.getScopes().filter(h=>h!=="");p.length>0&&(a.scopes=p.join(","))}e.tenantId&&(a.tid=e.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await e._getAppCheckToken(),c=u?`#${dS}=${encodeURIComponent(u)}`:"";return`${fS(e)}?${Ni(l).slice(1)}${c}`}function fS({config:e}){return e.emulator?lu(e,cS):`https://${e.authDomain}/${uS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no="webStorageSupport";class hS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$p,this._completeRedirectFn=Mx,this._overrideRedirectResult=Lx}async _openPopup(t,n,r,i){var a;Nt((a=this.eventManagers[t._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const s=await hd(t,n,r,sl(),i);return oS(t,s,hu())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await hd(t,n,r,sl(),i);return gx(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Nt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await tS(t),r=new zx(t);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(no,{type:no},i=>{var a;const s=(a=i==null?void 0:i[0])==null?void 0:a[no];s!==void 0&&n(!!s),nt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Vx(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Np()||Sp()||cu()}}const pS=hS;var pd="@firebase/auth",md="1.13.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gS(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vS(e){mi(new dr("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;L(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tp(e)},c=new Uw(r,i,s,u);return Kw(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),mi(new dr("auth-internal",t=>{const n=yr(t.getProvider("auth").getImmediate());return(r=>new mS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zn(pd,md,gS(e)),Zn(pd,md,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS=5*60,wS=np("authIdTokenMaxAge")||yS;let gd=null;const xS=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>wS)return;const i=n==null?void 0:n.token;gd!==i&&(gd=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function SS(e=ew()){const t=op(e,"auth");if(t.isInitialized())return t.getImmediate();const n=qw(e,{popupRedirectResolver:pS,persistence:[Ix,zp,$p]}),r=np("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=xS(s.toString());dx(n,a,()=>a(n.currentUser)),cx(n,l=>a(l))}}const i=$y("auth");return i&&Gw(n,`http://${i}`),n}function _S(){var e;return((e=document.getElementsByTagName("head"))==null?void 0:e[0])??document}zw({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=ut("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",_S().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vS("Browser");const ES={apiKey:"AIzaSyDYBmfATqh9fRKw45LU_yhUhnwpdHYHdlk",authDomain:"mku-auto.firebaseapp.com",projectId:"mku-auto",storageBucket:"mku-auto.firebasestorage.app",messagingSenderId:"158249341040",appId:"1:158249341040:web:0ccf9eb0db74132c0be4b5"},kS=lp(ES),We=SS(kS);ux(We,zp);const IS="https://app.kipnovatech.co.ke";function CS(){const e=jy(),t=vr(),[n,r]=v.useState(!1),[i,s]=v.useState(""),[a,l]=v.useState(!1);v.useEffect(()=>{const c=We.onAuthStateChanged(p=>{p?l(!0):t("/login?redirect=/embedded-signup",{replace:!0})});return()=>c()},[t]);async function u(){var c;if(!e){alert("Facebook SDK is still loading...");return}try{r(!0),s("Opening Meta Embedded Signup...");const p=await by();console.log("========== META RESPONSE =========="),console.log(p),console.log(JSON.stringify(p,null,2)),console.log("===================================");const h=(c=p==null?void 0:p.authResponse)==null?void 0:c.code;if(!h){s(""),alert("Signup was cancelled or did not complete. Please try again.");return}s("Signup completed. Connecting your WhatsApp account...");const g=We.currentUser;if(!g){alert("You are not logged in. Please log in and try again."),t("/login?redirect=/embedded-signup",{replace:!0});return}const x=await g.getIdToken(),S=await fetch(`${IS}/api/meta/exchange`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${x}`},body:JSON.stringify({code:h})}),y=await S.json();if(!S.ok){console.error("Exchange failed:",y),alert(`Failed to connect WhatsApp account: ${(y==null?void 0:y.error)||"Unknown error"}. Please try again or contact support.`),s("");return}console.log("✅ Exchange successful:",y),t("/dashboard",{replace:!0})}catch(p){console.error(p),alert("Embedded Signup cancelled or failed."),s("")}finally{r(!1)}}return a?o.jsx("div",{className:"es-page",children:o.jsxs("div",{className:"panel",children:[o.jsx("div",{className:"badge",children:"Secure Meta Onboarding"}),o.jsx("h1",{children:"Connect Your WhatsApp Business"}),o.jsx("p",{children:"You'll now complete Meta's official onboarding. Kipnova never asks for your Facebook password."}),o.jsxs("div",{className:"steps",children:[o.jsx("div",{children:"✓ Verify your business"}),o.jsx("div",{children:"✓ Connect WhatsApp Business"}),o.jsx("div",{children:"✓ Verify your phone number"}),o.jsx("div",{children:"✓ Return automatically to Kipnova"})]}),o.jsx("button",{className:"continueBtn",disabled:n||!e,onClick:u,children:e?n?"Connecting...":"Continue with Facebook":"Loading Facebook..."}),n&&o.jsx("div",{style:{marginTop:30,textAlign:"center",color:"#2563eb",fontWeight:600},children:i}),o.jsx("small",{children:"Powered by Meta Embedded Signup"})]})}):null}function NS(){const[e,t]=v.useState(""),[n,r]=v.useState(""),[i,s]=v.useState(""),[a,l]=v.useState(!1),[u,c]=v.useState(!0),p=vr(),[h]=Ny(),g=h.get("error")==="unauthorized",x=h.get("redirect")||null;v.useEffect(()=>{const y=Op(We,async I=>{if(I){const f=(await I.getIdTokenResult()).claims;f.role==="superadmin"?p("/superadmin",{replace:!0}):f.clientId?p(x||"/dashboard",{replace:!0}):c(!1)}else c(!1)});return()=>y()},[]);const S=async y=>{y.preventDefault(),s(""),l(!0);try{const f=(await(await lx(We,e,n)).user.getIdTokenResult()).claims;f.role==="superadmin"?p("/superadmin",{replace:!0}):f.clientId?p(x||"/dashboard",{replace:!0}):(await We.signOut(),s("Your account has no client assigned. Contact your administrator."))}catch(I){const d=I.code;s(d==="auth/invalid-credential"||d==="auth/wrong-password"||d==="auth/user-not-found"?"Invalid email or password.":"Sign in failed. Please try again.")}finally{l(!1)}};return u?o.jsx("div",{className:"login-page",children:o.jsx("div",{style:{color:"rgba(255,255,255,0.4)",fontSize:"0.9rem"},children:"Loading…"})}):o.jsx("div",{className:"login-page",children:o.jsxs("div",{className:"login-card",children:[o.jsxs("div",{className:"login-header",children:[o.jsx("h1",{children:"Nova"}),o.jsx("p",{children:"Client Dashboard"})]}),g&&o.jsx("div",{className:"login-error",children:"You don't have permission to access that page."}),o.jsxs("form",{onSubmit:S,children:[o.jsxs("div",{className:"input-group",children:[o.jsx("label",{children:"Email Address"}),o.jsx("input",{type:"email",placeholder:"name@company.com",value:e,onChange:y=>t(y.target.value),required:!0,disabled:a})]}),o.jsxs("div",{className:"input-group",children:[o.jsx("label",{children:"Password"}),o.jsx("input",{type:"password",placeholder:"••••••••",value:n,onChange:y=>r(y.target.value),required:!0,disabled:a})]}),i&&o.jsx("div",{className:"login-error",children:i}),o.jsx("button",{type:"submit",disabled:a,children:a?"Signing in…":"Sign In"})]}),o.jsx("div",{className:"divider",children:o.jsx("span",{children:"or"})}),o.jsx("a",{href:"/",className:"back-home",children:"← Back to Home"})]})})}/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Qp=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var PS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=v.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:a,...l},u)=>v.createElement("svg",{ref:u,...PS,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Qp("lucide",i),...l},[...a.map(([c,p])=>v.createElement(c,p)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=(e,t)=>{const n=v.forwardRef(({className:r,...i},s)=>v.createElement(jS,{ref:s,iconNode:t,className:Qp(`lucide-${TS(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=RS("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]),fe="https://app.kipnovatech.co.ke";async function he(e,t={}){const n=We.currentUser;if(!n)throw window.location.href="/login",new Error("Not signed in");const r=await n.getIdToken(),i={...t.headers||{},Authorization:`Bearer ${r}`},s=await fetch(e,{...t,headers:i});if(s.status===401)throw window.location.href="/login",new Error("Session expired");return s}const Zi=[{bg:"rgba(16,185,129,0.2)",color:"#10b981"},{bg:"rgba(245,158,11,0.2)",color:"#f39c12"},{bg:"rgba(59,130,246,0.2)",color:"#3b82f6"},{bg:"rgba(139,92,246,0.2)",color:"#a78bfa"},{bg:"rgba(236,72,153,0.2)",color:"#ec4899"},{bg:"rgba(20,184,166,0.2)",color:"#14b8a6"},{bg:"rgba(107,114,128,0.2)",color:"#6b7280"}];function es(e){if(!e||e==="general"){const r=Zi[Zi.length-1];return{background:r.bg,color:r.color}}let t=0;for(let r=0;r<e.length;r++)t=t*31+e.charCodeAt(r)>>>0;const n=Zi[t%(Zi.length-1)];return{background:n.bg,color:n.color}}function vd(e){return e.replace(/[_-]/g," ").split(" ").filter(Boolean).map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(" ")+" Inquiries"}function ol(e){return(e||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function AS(e){let t=ol(e);return t=t.replace(/```([^`]+)```/g,"<code>$1</code>"),t=t.replace(/\*(\S(?:[^*\n]*\S)?)\*/g,"<strong>$1</strong>"),t=t.replace(/_(\S(?:[^_\n]*\S)?)_/g,"<em>$1</em>"),t=t.replace(/~(\S(?:[^~\n]*\S)?)~/g,"<del>$1</del>"),t.replace(/\n/g,"<br>")}function Rr(e){return e.split(" ").map(t=>t[0]).join("").substring(0,2).toUpperCase()}function LS(){const e=vr(),[t,n]=v.useState("overview"),[r,i]=v.useState(!1),[s,a]=v.useState(!1),[l,u]=v.useState(!1),[c,p]=v.useState("🤖 AI Assistant"),[h,g]=v.useState("Customer"),[x,S]=v.useState({}),[y,I]=v.useState(null),[d,f]=v.useState(null),[m,_]=v.useState([]),[C,j]=v.useState(!1),[R,b]=v.useState([]),[D,M]=v.useState(!1),[ae,Re]=v.useState(!1),[Ie,cn]=v.useState(""),[Pt,dn]=v.useState(""),[ne,N]=v.useState([]),[A,O]=v.useState({active:!1}),[$,W]=v.useState(""),[ft,be]=v.useState(!1),[jt,Ae]=v.useState(!1),ht=v.useRef(null),[xr,Sr]=v.useState(!1),[va,ya]=v.useState(""),[bi,wa]=v.useState(""),[_r,Ai]=v.useState([]),[xa,Li]=v.useState(!1);v.useEffect(()=>{mu().then(()=>{E(),B(),F(),u(!0)});const w=setInterval(E,3e4);return()=>clearInterval(w)},[]),v.useEffect(()=>{t==="conversations"&&F(),t==="inquiries"&&Sa()},[t]),v.useEffect(()=>{var w;ae&&((w=ht.current)==null||w.scrollIntoView({behavior:"smooth"}))},[ne,ae]);async function mu(){try{const w=await he(`${fe}/api/dashboard-config`);if(!w.ok)return;const T=await w.json();if(!T.phoneNumberId){e("/embedded-signup",{replace:!0});return}if(!T.dashboard)return;if(T.categoryLabels&&S(T.categoryLabels),T.dashboard.title&&(document.title=T.dashboard.title),T.dashboard.headerLabel&&p(T.dashboard.headerLabel),T.dashboard.colors){const q=document.documentElement;Object.entries(T.dashboard.colors).forEach(([G,Fe])=>{q.style.setProperty("--"+G,Fe)})}T.contactLabel&&g(T.contactLabel)}catch{}}async function E(){try{const T=await(await he(`${fe}/api/stats`)).json();I(T)}catch{}}async function B(){try{const w=await he(`${fe}/api/whatsapp-status`);if(!w.ok)throw new Error;const T=await w.json();f(T)}catch{f({connected:!1})}}async function F(){j(!0);try{const T=await(await he(`${fe}/api/conversations`)).json();_(T.conversations||[])}catch{_([])}finally{j(!1)}}async function Sa(){M(!0);try{const T=await(await he(`${fe}/api/inquiries`)).json();b(T.inquiries||[])}catch{b([])}finally{M(!1)}}async function gu(w,T){cn(w),dn(T),N([]),W(""),Re(!0);try{const G=await(await he(`${fe}/api/conversation/${w}`)).json();O(G.takeover||{active:!1}),N(G.messages||[])}catch{N([])}}async function Yp(){var w;Ae(!0);try{if(!(await he(`${fe}/api/conversation/${Ie}/takeover`,{method:"POST"})).ok)throw new Error;O({active:!0,adminEmail:((w=We.currentUser)==null?void 0:w.email)||"You"})}catch{alert("Could not take over this conversation — please try again.")}finally{Ae(!1)}}async function Jp(){try{if(!(await he(`${fe}/api/conversation/${Ie}/release`,{method:"POST"})).ok)throw new Error;O({active:!1})}catch{alert("Could not hand this conversation back to the AI — please try again.")}}async function vu(){var T;if(!$.trim()||!Ie)return;be(!0);const w=$.trim();try{if(!(await he(`${fe}/api/conversation/${Ie}/reply`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:w})})).ok)throw new Error;W(""),N(G=>[...G,{role:"admin",content:w}]),O({active:!0,adminEmail:((T=We.currentUser)==null?void 0:T.email)||"You"})}catch{alert("Could not send that message — please try again.")}finally{be(!1)}}async function yu(w,T){ya(w),wa(T),Sr(!0),Li(!0);try{const Fe=(await(await he(`${fe}/api/inquiries`)).json()).inquiries.filter(bn=>bn.customerPhone===w).sort((bn,nm)=>{var xu,Su;return(((xu=nm.createdAt)==null?void 0:xu._seconds)||0)-(((Su=bn.createdAt)==null?void 0:Su._seconds)||0)});Ai(Fe)}catch{Ai([])}finally{Li(!1)}}const _a=v.useCallback(()=>{const w={};return R.forEach(T=>{w[T.customerPhone]||(w[T.customerPhone]={name:T.customerName,phone:T.customerPhone,inquiries:[]}),w[T.customerPhone].inquiries.push(T)}),Object.values(w).map(T=>(T.inquiries.sort((q,G)=>{var Fe,bn;return(((Fe=G.createdAt)==null?void 0:Fe._seconds)||0)-(((bn=q.createdAt)==null?void 0:bn._seconds)||0)}),T)).sort((T,q)=>{var G,Fe;return(((G=q.inquiries[0].createdAt)==null?void 0:G._seconds)||0)-(((Fe=T.inquiries[0].createdAt)==null?void 0:Fe._seconds)||0)})},[R]);async function Xp(){await Dp(We),e("/login",{replace:!0})}const[Zp,wu]=v.useState(!1);function em(){d!=null&&d.wabaId&&navigator.clipboard.writeText(d.wabaId).then(()=>{wu(!0),setTimeout(()=>wu(!1),1500)})}const tm=w=>w.endsWith("s")?w:w+"s";return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:`app-loading-overlay${l?" hidden":""}`,children:o.jsx("div",{className:"app-spinner"})}),o.jsxs("div",{className:"dashboard",children:[o.jsx("div",{className:`sidebar-overlay${s?" active":""}`,onClick:()=>a(!1)}),o.jsxs("aside",{className:`sidebar${r?" collapsed":""}${s?" mobile-open":""}`,children:[o.jsx("div",{className:"sidebar-header",children:o.jsxs("div",{className:"logo",children:[o.jsx(bS,{className:"logo-cap-icon",size:22,strokeWidth:2}),o.jsxs("div",{className:"logo-text",children:[o.jsx("h1",{children:c}),o.jsx("p",{children:"Admin Dashboard"})]})]})}),o.jsx("ul",{className:"nav",children:["overview","conversations","inquiries","analytics"].map(w=>{const T={overview:"📊",conversations:"💬",inquiries:"📝",analytics:"📈"},q={overview:"Overview",conversations:"Conversations",inquiries:"All Inquiries",analytics:"Analytics"};return o.jsxs("li",{className:`nav-item${t===w?" active":""}`,onClick:()=>{n(w),a(!1)},title:r?q[w]:void 0,children:[o.jsx("span",{className:"nav-icon",children:T[w]}),o.jsx("span",{className:"nav-label",children:q[w]})]},w)})}),!r&&m.length>0&&o.jsxs("div",{className:"sidebar-recents",children:[o.jsx("div",{className:"sidebar-recents-label",children:"Recents"}),m.slice(0,5).map(w=>o.jsxs("div",{className:"sidebar-recent-item",onClick:()=>{gu(w.phone,w.name),a(!1)},children:[o.jsx("div",{className:"sidebar-recent-avatar",children:Rr(w.name)}),o.jsxs("div",{className:"sidebar-recent-info",children:[o.jsx("div",{className:"sidebar-recent-name",children:w.name}),o.jsx("div",{className:"sidebar-recent-preview",children:w.lastMessage?w.lastMessage.content.replace(/[*_~`]/g,"").substring(0,35):"No messages yet"})]})]},w.phone))]}),o.jsxs("div",{className:"sidebar-footer",children:[o.jsxs("a",{href:"#",className:"logout-link",onClick:w=>{w.preventDefault(),Xp()},title:r?"Log Out":void 0,children:[o.jsx("span",{className:"nav-icon",children:"🚪"}),o.jsx("span",{className:"nav-label",children:"Log Out"})]}),o.jsx("button",{className:"sidebar-collapse-btn",onClick:()=>i(w=>!w),"aria-label":r?"Expand sidebar":"Collapse sidebar",title:r?"Expand sidebar":"Collapse sidebar",children:o.jsx("span",{className:"collapse-arrow",children:r?"▶":"◀"})})]})]}),o.jsxs("main",{className:"main-content",children:[o.jsx("button",{className:"mobile-menu-btn",onClick:()=>a(!0),"aria-label":"Toggle menu",children:"☰"}),o.jsxs("div",{className:`content-section${t==="overview"?" active":""}`,children:[o.jsxs("div",{className:"header",children:[o.jsx("h2",{children:"Dashboard Overview"}),o.jsx("p",{children:"Real-time statistics and recent activity"})]}),o.jsxs("div",{className:"wa-status-card",children:[o.jsxs("div",{className:"wa-status-top",children:[o.jsxs("div",{className:"wa-status-identity",children:[o.jsx("div",{className:"wa-status-icon",children:"📱"}),o.jsxs("div",{className:"wa-status-name",children:["WhatsApp Business Account",o.jsx("span",{children:d?d.verifiedName||"Unnamed number":"Loading…"})]})]}),o.jsxs("div",{className:`wa-status-pill${d!=null&&d.connected?" is-connected":" is-error"}`,children:[o.jsx("span",{className:"wa-status-dot"}),o.jsx("span",{children:d?d.connected?"Connected":"Unavailable":"Checking…"})]})]}),o.jsxs("div",{className:"wa-status-grid",children:[o.jsxs("div",{children:[o.jsx("div",{className:"wa-status-field-label",children:"Phone Number"}),o.jsx("div",{className:"wa-status-field-value is-mono",children:(d==null?void 0:d.displayPhoneNumber)||"—"})]}),o.jsxs("div",{children:[o.jsx("div",{className:"wa-status-field-label",children:"WABA ID"}),o.jsxs("div",{className:"wa-status-field-value is-mono",children:[o.jsx("span",{children:(d==null?void 0:d.wabaId)||"—"}),o.jsx("button",{className:"wa-copy-btn",onClick:em,children:Zp?"Copied":"Copy"})]})]}),o.jsxs("div",{children:[o.jsx("div",{className:"wa-status-field-label",children:"Quality Rating"}),o.jsx("div",{className:"wa-status-field-value",children:o.jsx("span",{className:`wa-quality-badge wa-quality-${((d==null?void 0:d.qualityRating)||"unknown").toLowerCase()}`,children:((d==null?void 0:d.qualityRating)||"unknown").toLowerCase()})})]})]})]}),o.jsxs("div",{className:"stats-grid",children:[o.jsxs("div",{className:"stat-card",children:[o.jsx("div",{className:"stat-icon",children:"👥"}),o.jsx("div",{className:"stat-value",children:(y==null?void 0:y.totalCustomers)??"-"}),o.jsxs("div",{className:"stat-label",children:["Total ",tm(h)]})]}),o.jsxs("div",{className:"stat-card",children:[o.jsx("div",{className:"stat-icon",children:"💬"}),o.jsx("div",{className:"stat-value",children:(y==null?void 0:y.totalInquiries)??"-"}),o.jsx("div",{className:"stat-label",children:"Total Inquiries"})]}),o.jsxs("div",{className:"stat-card",children:[o.jsx("div",{className:"stat-icon",children:"📅"}),o.jsx("div",{className:"stat-value",children:(y==null?void 0:y.recentInquiries)??"-"}),o.jsx("div",{className:"stat-label",children:"Last 7 Days"})]}),o.jsxs("div",{className:"stat-card",children:[o.jsx("div",{className:"stat-icon",children:"⚡"}),o.jsx("div",{className:"stat-value",children:"AI"}),o.jsx("div",{className:"stat-label",children:"Status: Active"})]})]}),o.jsxs("div",{className:"chart-container",children:[o.jsx("h3",{className:"chart-title",children:"Inquiries by Type"}),(y==null?void 0:y.inquiryTypes)&&(()=>{const w=Object.values(y.inquiryTypes).reduce((T,q)=>T+q,0);return Object.entries(y.inquiryTypes).map(([T,q])=>o.jsxs("div",{className:"chart-bar",children:[o.jsx("div",{className:"chart-label",children:x[T]||vd(T)}),o.jsx("div",{className:"chart-bar-fill",style:{width:`${w>0?q/w*100:0}%`},children:o.jsx("span",{className:"chart-value",children:q})})]},T))})()]})]}),o.jsxs("div",{className:`content-section${t==="conversations"?" active":""}`,children:[o.jsxs("div",{className:"header",children:[o.jsx("h2",{children:"Recent Conversations"}),o.jsxs("p",{children:["View and manage ",h.toLowerCase()," inquiries"]})]}),o.jsx("div",{className:"conversations-container",children:C?o.jsxs("div",{className:"loading",children:[o.jsx("div",{className:"spinner"}),o.jsx("p",{children:"Loading conversations…"})]}):m.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx("div",{className:"empty-state-icon",children:"💬"}),o.jsx("p",{children:"No conversations yet"})]}):m.map(w=>{const T=Rr(w.name),q=w.lastMessage?ol(w.lastMessage.content.replace(/[*_~`]/g,"")).substring(0,50):"No messages yet",G=w.lastContact?new Date(w.lastContact._seconds*1e3).toLocaleString():"",Fe=w.inquiry_type||"general";return o.jsxs("div",{className:"conversation-item",onClick:()=>gu(w.phone,w.name),children:[o.jsx("div",{className:"conversation-avatar",children:T}),o.jsxs("div",{className:"conversation-info",children:[o.jsxs("div",{className:"conversation-header",children:[o.jsx("span",{className:"conversation-name",children:w.name}),o.jsx("span",{className:"conversation-time",children:G})]}),o.jsxs("div",{className:"conversation-preview",children:[o.jsx("span",{className:"preview-text",children:q}),o.jsx("span",{className:"inquiry-badge",style:es(Fe),children:Fe})]})]})]},w.phone)})})]}),o.jsxs("div",{className:`content-section${t==="inquiries"?" active":""}`,children:[o.jsxs("div",{className:"header",children:[o.jsx("h2",{children:"All Inquiries"}),o.jsxs("p",{children:["Complete inquiry history grouped by ",h.toLowerCase()]})]}),o.jsx("div",{className:"table-container inquiry-table-desktop",children:o.jsxs("table",{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:h}),o.jsx("th",{children:"Phone"}),o.jsx("th",{children:"Total Inquiries"}),o.jsx("th",{children:"Last Inquiry Type"}),o.jsx("th",{children:"Last Contact"})]})}),o.jsx("tbody",{children:D?o.jsx("tr",{children:o.jsxs("td",{colSpan:5,style:{textAlign:"center",padding:"2rem"},children:[o.jsx("div",{className:"spinner",style:{margin:"0 auto 1rem"}}),"Loading inquiries…"]})}):_a().map(w=>{const T=w.inquiries[0],q=T.createdAt?new Date(T.createdAt._seconds*1e3).toLocaleString():"Unknown",G=T.inquiryType||"general";return o.jsxs("tr",{onClick:()=>yu(w.phone,w.name),children:[o.jsx("td",{children:w.name}),o.jsx("td",{children:w.phone}),o.jsx("td",{children:o.jsx("span",{className:"inquiry-count",children:w.inquiries.length})}),o.jsx("td",{children:o.jsx("span",{className:"inquiry-badge",style:es(G),children:G})}),o.jsx("td",{children:q})]},w.phone)})})]})}),o.jsx("div",{className:"inquiry-cards-mobile",children:D?o.jsxs("div",{className:"loading",children:[o.jsx("div",{className:"spinner"}),o.jsx("p",{children:"Loading inquiries…"})]}):_a().length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx("div",{className:"empty-state-icon",children:"📝"}),o.jsx("p",{children:"No inquiries yet"})]}):_a().map(w=>{const T=w.inquiries[0],q=T.createdAt?new Date(T.createdAt._seconds*1e3).toLocaleString():"Unknown",G=T.inquiryType||"general";return o.jsxs("div",{className:"conversation-item",onClick:()=>yu(w.phone,w.name),children:[o.jsx("div",{className:"conversation-avatar",children:Rr(w.name)}),o.jsxs("div",{className:"conversation-info",children:[o.jsxs("div",{className:"conversation-header",children:[o.jsx("span",{className:"conversation-name",children:w.name}),o.jsx("span",{className:"inquiry-count",style:{marginLeft:0},children:w.inquiries.length})]}),o.jsxs("div",{className:"conversation-preview",children:[o.jsx("span",{className:"preview-text",children:w.phone}),o.jsx("span",{className:"inquiry-badge",style:es(G),children:G})]}),o.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-dim)",marginTop:"0.2rem"},children:q})]})]},w.phone)})})]}),o.jsxs("div",{className:`content-section${t==="analytics"?" active":""}`,children:[o.jsxs("div",{className:"header",children:[o.jsx("h2",{children:"Analytics"}),o.jsx("p",{children:"Detailed insights and trends"})]}),o.jsx("div",{className:"stats-grid",children:y!=null&&y.inquiryTypes&&Object.entries(y.inquiryTypes).length>0?Object.entries(y.inquiryTypes).sort((w,T)=>T[1]-w[1]).map(([w,T])=>o.jsxs("div",{className:"stat-card",children:[o.jsx("div",{className:"stat-value",children:T}),o.jsx("div",{className:"stat-label",children:x[w]||vd(w)})]},w)):o.jsxs("div",{className:"stat-card",children:[o.jsx("div",{className:"stat-value",children:"0"}),o.jsx("div",{className:"stat-label",children:"No Inquiries Yet"})]})})]})]})]}),ae&&o.jsx("div",{className:"modal-backdrop",onClick:w=>{w.target===w.currentTarget&&Re(!1)},children:o.jsxs("div",{className:"chat-modal-wrapper",children:[o.jsxs("div",{className:"chat-modal-topbar",children:[o.jsx("h2",{children:"Conversation Details"}),o.jsx("button",{className:"btn btn-secondary",onClick:()=>Re(!1),children:"Close"})]}),o.jsxs("div",{className:"chat-container",children:[o.jsxs("div",{className:"chat-header",children:[o.jsx("button",{className:"chat-back-btn",onClick:()=>Re(!1),"aria-label":"Back",children:"←"}),o.jsxs("div",{className:"chat-header-info",children:[o.jsx("div",{className:"conversation-avatar",style:{width:36,height:36,fontSize:"0.85rem"},children:Rr(Pt)}),o.jsxs("div",{children:[o.jsx("div",{className:"conversation-name",children:Pt}),o.jsx("div",{className:"chat-phone",children:Ie})]})]})]}),o.jsxs("div",{className:"chat-status-bar",children:[o.jsx("span",{className:`chat-status-pill${A.active?" is-takeover":""}`,children:A.active?`🙋 ${A.adminEmail||"An admin"} is handling this`:"🤖 AI is replying"}),A.active?o.jsx("button",{className:"chat-handback-btn",onClick:Jp,children:"Hand back to AI"}):o.jsx("button",{className:"chat-handback-btn takeover-btn",onClick:Yp,disabled:jt,children:"🙋 Take over"})]}),o.jsxs("div",{className:"chat-messages",children:[ne.length===0?o.jsx("div",{className:"empty-state",children:o.jsx("p",{children:"No messages yet"})}):ne.map((w,T)=>{const q=w.timestamp?new Date(w.timestamp._seconds*1e3).toLocaleString():"",G=w.role==="user"?Rr(Pt):w.role==="admin"?"🙋":"AI";return o.jsxs("div",{className:`message ${w.role}`,children:[o.jsx("div",{className:"message-avatar",children:G}),o.jsxs("div",{children:[o.jsx("div",{className:"message-content",dangerouslySetInnerHTML:{__html:AS(w.content)}}),o.jsx("div",{className:"message-time",children:q})]})]},T)}),o.jsx("div",{ref:ht})]}),o.jsxs("div",{className:"chat-reply-bar",children:[o.jsx("textarea",{className:"chat-reply-input",rows:1,placeholder:"Type a message… (sending takes over from the AI)",value:$,onChange:w=>W(w.target.value),onKeyDown:w=>{w.key==="Enter"&&!w.shiftKey&&(w.preventDefault(),vu())},onInput:w=>{const T=w.currentTarget;T.style.height="auto",T.style.height=T.scrollHeight+"px"}}),o.jsx("button",{className:"chat-send-btn",onClick:vu,disabled:ft||!$.trim(),"aria-label":"Send",children:"➤"})]})]})]})}),xr&&o.jsx("div",{className:"modal-backdrop",onClick:w=>{w.target===w.currentTarget&&Sr(!1)},children:o.jsxs("div",{className:"inquiry-modal-wrapper",children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"1rem"},children:[o.jsxs("div",{children:[o.jsx("h2",{style:{color:"var(--text)",fontSize:"1.1rem"},children:bi}),o.jsx("p",{style:{color:"var(--text-dim)",fontSize:"0.85rem"},children:va})]}),o.jsx("button",{className:"btn btn-secondary",onClick:()=>Sr(!1),children:"Close"})]}),o.jsx("div",{className:"inquiry-modal-body",children:xa?o.jsxs("div",{className:"loading",children:[o.jsx("div",{className:"spinner"}),o.jsx("p",{children:"Loading inquiries…"})]}):_r.length===0?o.jsx("div",{className:"empty-state",children:o.jsx("p",{children:"No inquiries found"})}):_r.map((w,T)=>{const q=w.createdAt?new Date(w.createdAt._seconds*1e3).toLocaleString():"Unknown",G=w.inquiryType||"general";return o.jsxs("div",{className:"inquiry-detail-item",children:[o.jsxs("div",{className:"inquiry-type",children:[o.jsx("span",{className:"inquiry-badge",style:es(G),children:G}),o.jsxs("span",{style:{marginLeft:"1rem",color:"var(--text-dim)",fontSize:"0.8rem"},children:["Inquiry #",_r.length-T]})]}),o.jsx("div",{className:"inquiry-message",children:ol(w.message)}),o.jsx("div",{className:"inquiry-time",children:q})]},T)})})]})})]})}const ts=e=>`$${(e||0).toFixed(4)}`,yd=e=>`KES ${(e||0).toLocaleString("en-KE",{maximumFractionDigits:0})}`,At=e=>(e||0).toLocaleString("en-KE");function OS(e){const t=Math.floor(e/86400),n=Math.floor(e%86400/3600),r=Math.floor(e%3600/60);return t>0?`${t}d ${n}h ${r}m`:n>0?`${n}h ${r}m`:`${r}m ${e%60}s`}function wd(e){const t=Date.now()-new Date(e).getTime(),n=Math.floor(t/6e4);if(n<1)return"just now";if(n<60)return`${n}m ago`;const r=Math.floor(n/60);return r<24?`${r}h ago`:`${Math.floor(r/24)}d ago`}function xd(e){if(!e)return"q-unknown";const t=e.toLowerCase();return t==="green"?"q-green":t==="yellow"?"q-yellow":t==="red"?"q-red":"q-unknown"}function Sd(e){const[t,n]=e.split("-").map(Number);return new Date(Date.UTC(t,n-1,1)).toLocaleDateString("en-US",{month:"short",timeZone:"UTC"})}function br({ok:e,pulse:t}){return o.jsx("span",{style:{display:"inline-block",width:8,height:8,borderRadius:"50%",background:e?"#22c55e":"#ef4444",boxShadow:e?t?"0 0 0 0 #22c55e":"0 0 6px #22c55e88":"0 0 6px #ef444488",animation:t&&e?"pulse-dot 2s infinite":"none",flexShrink:0}})}function _d({label:e,variant:t}){const n={active:"#22c55e22,#22c55e",trial:"#f59e0b22,#f59e0b",suspended:"#ef444422,#ef4444",ok:"#22c55e22,#22c55e",degraded:"#ef444422,#ef4444"},[r,i]=(n[t]||"##ffffff22,#888").split(",");return o.jsx("span",{style:{display:"inline-block",padding:"2px 10px",borderRadius:99,background:r,color:i,fontSize:"0.7rem",fontWeight:700,letterSpacing:"0.05em",textTransform:"uppercase",border:`1px solid ${i}44`},children:e})}function DS(){const e=vr(),[t,n]=v.useState(!1),[r,i]=v.useState("clients"),[s,a]=v.useState([]),[l,u]=v.useState(""),[c,p]=v.useState(!1),[h,g]=v.useState(!1),[x,S]=v.useState(""),[y,I]=v.useState(null),[d,f]=v.useState(null),[m,_]=v.useState(0),[C,j]=v.useState(!1),[R,b]=v.useState(!1),[D,M]=v.useState(null),[ae,Re]=v.useState(!1),[Ie,cn]=v.useState(""),[Pt,dn]=v.useState(null),[ne,N]=v.useState(null),[A,O]=v.useState(!1),[$,W]=v.useState(0),[ft,be]=v.useState(0),[jt,Ae]=v.useState(!1);v.useEffect(()=>{ht().then(()=>n(!0))},[]),v.useEffect(()=>{if(r!=="health")return;xr();const E=setInterval(xr,3e4);return()=>clearInterval(E)},[r]),v.useEffect(()=>{r==="errors"&&(Sr(),W(0))},[r]),v.useEffect(()=>{const E=setInterval(async()=>{try{const B=await he(`${fe}/api/superadmin/errors?limit=1`);if(!B.ok)return;const F=await B.json();r!=="errors"&&W(Math.max(0,F.total-ft))}catch{}},6e4);return()=>clearInterval(E)},[r,ft]);async function ht(){try{const E=await he(`${fe}/api/superadmin/clients`);if(!E.ok)throw new Error("Failed to load clients");const B=await E.json();a(B.clients)}catch(E){u(E.message)}}const xr=v.useCallback(async()=>{Re(!0),cn("");try{const E=await he(`${fe}/api/superadmin/health`);if(!E.ok)throw new Error("Failed to load health data");const B=await E.json();M(B),dn(new Date)}catch(E){cn(E.message)}finally{Re(!1)}},[]);async function Sr(){O(!0);try{const E=await he(`${fe}/api/superadmin/errors?limit=50`);if(!E.ok)throw new Error("Failed to load errors");const B=await E.json();N(B),be(B.total)}catch(E){console.error(E)}finally{O(!1)}}async function va(){if(confirm("Clear all errors from the log?")){Ae(!0);try{await he(`${fe}/api/superadmin/errors`,{method:"DELETE"}),N({errors:[],total:0,maxSize:100}),W(0),be(0)}catch{}Ae(!1)}}async function ya(E){I(E),p(!0),g(!0),S(""),f(null),document.body.style.overflow="hidden";try{const B=await he(`${fe}/api/superadmin/clients/${E}`);if(!B.ok)throw new Error("Failed to load client details");const F=await B.json();f(F),_(F.client.monthlyFee)}catch(B){S(B.message)}finally{g(!1)}}function bi(){p(!1),document.body.style.overflow=""}async function wa(){if(!(!y||!d)){if(isNaN(m)||m<0){alert("Enter a valid, non-negative monthly fee.");return}j(!0),b(!1);try{if(!(await he(`${fe}/api/superadmin/clients/${y}/billing`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({monthlyFee:m})})).ok)throw new Error("Failed to save");b(!0),a(B=>B.map(F=>F.clientId===y?{...F,monthlyFee:m}:F)),setTimeout(()=>b(!1),3e3)}catch(E){alert("Could not save: "+E.message)}finally{j(!1)}}}async function _r(){await Dp(We),e("/login",{replace:!0})}const Ai=s.reduce((E,B)=>E+(B.monthlyFee||0),0),xa=s.reduce((E,B)=>E+(B.currentMonthUsage.cost||0),0),Li=s.reduce((E,B)=>E+(B.currentMonthUsage.callCount||0),0);return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg: #0a0a0f;
      --surface: #111118;
      --surface2: #16161f;
      --border: #ffffff0f;
      --border2: #ffffff18;
      --text: #e8e8f0;
      --text-dim: #6b6b80;
      --text-muted: #3a3a4a;
      --accent: #7c6af7;
      --accent-dim: #7c6af722;
      --green: #22c55e;
      --red: #ef4444;
      --yellow: #f59e0b;
      --font: 'Inter', system-ui, sans-serif;
      --mono: 'JetBrains Mono', monospace;
    }

    body { background: var(--bg); color: var(--text); font-family: var(--font); }

    @keyframes pulse-dot {
      0% { box-shadow: 0 0 0 0 #22c55e66; }
      70% { box-shadow: 0 0 0 6px #22c55e00; }
      100% { box-shadow: 0 0 0 0 #22c55e00; }
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes slideIn {
      from { transform: translateX(100%); }
      to { transform: translateX(0); }
    }

    /* Loading */
    .sa-loading-overlay {
      position: fixed; inset: 0; background: var(--bg);
      display: flex; align-items: center; justify-content: center;
      z-index: 1000; transition: opacity 0.3s;
    }
    .sa-loading-overlay.hidden { opacity: 0; pointer-events: none; }
    .sa-spinner {
      width: 32px; height: 32px; border: 2px solid var(--border2);
      border-top-color: var(--accent); border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    /* Layout */
    .sa-shell { display: flex; flex-direction: column; min-height: 100vh; }

    /* Topbar */
    .sa-topbar {
      position: sticky; top: 0; z-index: 100;
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 28px; height: 56px;
      background: var(--bg); border-bottom: 1px solid var(--border);
      backdrop-filter: blur(12px);
    }
    .sa-topbar-left { display: flex; align-items: center; gap: 12px; }
    .sa-logo {
      font-size: 1rem; font-weight: 700; letter-spacing: -0.02em;
      color: var(--text);
    }
    .sa-logo span { color: var(--accent); }
    .sa-role-tag {
      font-size: 0.65rem; font-weight: 600; letter-spacing: 0.08em;
      text-transform: uppercase; color: var(--accent);
      background: var(--accent-dim); padding: 2px 8px;
      border-radius: 99px; border: 1px solid var(--accent)33;
    }
    .sa-signout {
      font-size: 0.8rem; color: var(--text-dim); text-decoration: none;
      padding: 6px 14px; border-radius: 6px; border: 1px solid var(--border2);
      transition: all 0.15s;
    }
    .sa-signout:hover { color: var(--text); border-color: var(--border2); background: var(--surface); }

    /* Tab nav */
    .sa-tabnav {
      display: flex; gap: 2px; padding: 16px 28px 0;
      border-bottom: 1px solid var(--border);
    }
    .sa-tab {
      position: relative; display: flex; align-items: center; gap: 6px;
      padding: 8px 16px; border-radius: 6px 6px 0 0;
      font-size: 0.82rem; font-weight: 500; color: var(--text-dim);
      cursor: pointer; border: none; background: none;
      transition: color 0.15s;
    }
    .sa-tab:hover { color: var(--text); }
    .sa-tab.active {
      color: var(--text);
      background: var(--surface);
      border: 1px solid var(--border);
      border-bottom: 1px solid var(--surface);
      margin-bottom: -1px;
    }
    .sa-tab-badge {
      display: inline-flex; align-items: center; justify-content: center;
      min-width: 16px; height: 16px; padding: 0 4px;
      background: var(--red); color: #fff;
      font-size: 0.65rem; font-weight: 700; border-radius: 99px;
    }

    /* Main content */
    .sa-content { flex: 1; padding: 28px; animation: fadeIn 0.2s ease; }

    /* Summary cards */
    .sa-kpis {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 12px; margin-bottom: 28px;
    }
    .sa-kpi {
      background: var(--surface); border: 1px solid var(--border);
      border-radius: 10px; padding: 18px 20px;
    }
    .sa-kpi-label {
      font-size: 0.72rem; font-weight: 600; letter-spacing: 0.06em;
      text-transform: uppercase; color: var(--text-dim); margin-bottom: 8px;
    }
    .sa-kpi-value {
      font-size: 1.6rem; font-weight: 700; letter-spacing: -0.03em;
      color: var(--text);
    }
    .sa-kpi-sub { font-size: 0.72rem; color: var(--text-dim); margin-top: 4px; }

    /* Section title */
    .sa-section-title {
      font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em;
      text-transform: uppercase; color: var(--text-dim);
      margin-bottom: 12px;
    }

    /* Table */
    .sa-table-wrap {
      background: var(--surface); border: 1px solid var(--border);
      border-radius: 10px; overflow: hidden;
    }
    table { width: 100%; border-collapse: collapse; }
    thead tr { border-bottom: 1px solid var(--border); }
    th {
      padding: 10px 16px; text-align: left;
      font-size: 0.7rem; font-weight: 600; letter-spacing: 0.06em;
      text-transform: uppercase; color: var(--text-dim);
    }
    tbody tr {
      border-bottom: 1px solid var(--border);
      cursor: pointer; transition: background 0.1s;
    }
    tbody tr:last-child { border-bottom: none; }
    tbody tr:hover { background: var(--surface2); }
    td {
      padding: 12px 16px; font-size: 0.83rem; color: var(--text);
      vertical-align: middle;
    }

    /* Error text */
    .sa-error-msg {
      font-size: 0.82rem; color: var(--red); padding: 12px 16px;
    }
    .sa-empty { font-size: 0.82rem; color: var(--text-dim); padding: 20px 16px; }

    /* ── Health tab ── */
    .sa-health-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 12px; margin-bottom: 24px;
    }
    .sa-health-card {
      background: var(--surface); border: 1px solid var(--border);
      border-radius: 10px; padding: 18px 20px;
      display: flex; flex-direction: column; gap: 6px;
    }
    .sa-health-card-label {
      font-size: 0.7rem; font-weight: 600; letter-spacing: 0.07em;
      text-transform: uppercase; color: var(--text-dim);
    }
    .sa-health-card-value {
      font-size: 1.3rem; font-weight: 700; letter-spacing: -0.02em;
    }
    .sa-health-card-sub { font-size: 0.75rem; color: var(--text-dim); }
    .sa-status-row {
      display: flex; align-items: center; gap: 8px;
      font-size: 0.82rem; font-weight: 600;
    }
    .sa-mem-bar-wrap {
      height: 6px; border-radius: 3px;
      background: var(--border2); overflow: hidden; margin-top: 6px;
    }
    .sa-mem-bar {
      height: 100%; border-radius: 3px;
      background: linear-gradient(90deg, var(--accent), #a78bfa);
      transition: width 0.5s ease;
    }
    .sa-client-health-list {
      display: flex; flex-direction: column; gap: 8px;
    }
    .sa-client-health-row {
      display: flex; align-items: center; justify-content: space-between;
      background: var(--surface); border: 1px solid var(--border);
      border-radius: 8px; padding: 12px 16px;
    }
    .sa-client-health-name {
      font-size: 0.85rem; font-weight: 600;
    }
    .sa-client-health-meta {
      font-size: 0.75rem; color: var(--text-dim); margin-top: 2px;
    }
    .sa-health-refresh {
      font-size: 0.72rem; color: var(--text-dim);
      display: flex; align-items: center; gap: 8px; margin-bottom: 16px;
    }
    .sa-refresh-btn {
      background: var(--surface); border: 1px solid var(--border2);
      color: var(--text-dim); font-size: 0.75rem; padding: 4px 12px;
      border-radius: 6px; cursor: pointer; transition: all 0.15s;
    }
    .sa-refresh-btn:hover { color: var(--text); border-color: var(--accent)44; }

    /* ── Errors tab ── */
    .sa-errors-header {
      display: flex; align-items: center; justify-content: space-between;
      margin-bottom: 16px;
    }
    .sa-clear-btn {
      background: none; border: 1px solid var(--red)44;
      color: var(--red); font-size: 0.75rem; padding: 5px 14px;
      border-radius: 6px; cursor: pointer; transition: all 0.15s;
    }
    .sa-clear-btn:hover { background: var(--red)11; }
    .sa-error-row {
      background: var(--surface); border: 1px solid var(--border);
      border-radius: 8px; padding: 14px 16px; margin-bottom: 8px;
    }
    .sa-error-row-header {
      display: flex; align-items: center; gap: 10px;
      flex-wrap: wrap; margin-bottom: 6px;
    }
    .sa-error-context {
      font-family: var(--mono); font-size: 0.75rem;
      color: var(--accent); font-weight: 500;
    }
    .sa-error-client {
      font-size: 0.7rem; color: var(--text-dim);
      background: var(--surface2); padding: 1px 8px; border-radius: 4px;
    }
    .sa-error-time { font-size: 0.7rem; color: var(--text-muted); margin-left: auto; }
    .sa-error-message {
      font-family: var(--mono); font-size: 0.78rem; color: var(--red);
      line-height: 1.5; word-break: break-word;
    }
    .sa-error-status {
      display: inline-block; font-size: 0.68rem; font-weight: 700;
      color: var(--yellow); background: #f59e0b11;
      padding: 1px 6px; border-radius: 4px; margin-left: 6px;
    }
    .sa-no-errors {
      text-align: center; padding: 48px;
      color: var(--text-dim); font-size: 0.9rem;
    }
    .sa-no-errors-icon { font-size: 2rem; margin-bottom: 12px; }

    /* ── Detail panel ── */
    .sa-overlay {
      position: fixed; inset: 0; background: #00000088;
      z-index: 200; display: flex; justify-content: flex-end;
      opacity: 0; pointer-events: none; transition: opacity 0.2s;
    }
    .sa-overlay.open { opacity: 1; pointer-events: all; }
    .sa-panel {
      width: 480px; max-width: 95vw; height: 100vh;
      background: var(--surface); border-left: 1px solid var(--border);
      overflow-y: auto; display: flex; flex-direction: column;
      transform: translateX(100%); transition: transform 0.25s ease;
    }
    .sa-overlay.open .sa-panel { transform: translateX(0); animation: slideIn 0.25s ease; }
    .sa-panel-header {
      position: sticky; top: 0; z-index: 10;
      display: flex; align-items: flex-start; justify-content: space-between;
      padding: 20px 24px 16px; background: var(--surface);
      border-bottom: 1px solid var(--border);
    }
    .sa-panel-title { font-size: 1.1rem; font-weight: 700; margin-bottom: 6px; }
    .sa-close {
      background: none; border: none; color: var(--text-dim);
      font-size: 1.1rem; cursor: pointer; padding: 4px 8px;
      border-radius: 4px; transition: color 0.15s;
      flex-shrink: 0; margin-left: 12px; margin-top: 2px;
    }
    .sa-close:hover { color: var(--text); }
    .sa-panel-body { padding: 20px 24px; flex: 1; }
    .sa-panel-section { margin-bottom: 28px; }
    .sa-panel-section h3 {
      font-size: 0.7rem; font-weight: 600; letter-spacing: 0.08em;
      text-transform: uppercase; color: var(--text-dim);
      margin-bottom: 14px; padding-bottom: 8px;
      border-bottom: 1px solid var(--border);
    }
    .sa-kv { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .sa-kv-item { background: var(--surface2); border-radius: 8px; padding: 12px; }
    .sa-kv-k { font-size: 0.7rem; color: var(--text-dim); margin-bottom: 4px; }
    .sa-kv-v { font-size: 0.85rem; font-weight: 600; }
    .sa-billing-row { display: flex; gap: 10px; margin-bottom: 8px; }
    .sa-billing-row input {
      flex: 1; background: var(--surface2); border: 1px solid var(--border2);
      color: var(--text); padding: 8px 12px; border-radius: 6px;
      font-size: 0.85rem; font-family: var(--mono);
      outline: none; transition: border-color 0.15s;
    }
    .sa-billing-row input:focus { border-color: var(--accent)66; }
    .sa-billing-row button {
      background: var(--accent); color: #fff; border: none;
      padding: 8px 18px; border-radius: 6px; font-size: 0.82rem;
      font-weight: 600; cursor: pointer; transition: opacity 0.15s;
    }
    .sa-billing-row button:disabled { opacity: 0.5; }
    .sa-billing-hint { font-size: 0.75rem; color: var(--text-dim); line-height: 1.5; }
    .sa-save-confirm { font-size: 0.8rem; color: var(--green); margin-top: 8px; }
    .sa-admin-row {
      display: flex; align-items: center; justify-content: space-between;
      padding: 10px 12px; background: var(--surface2); border-radius: 6px;
      margin-bottom: 6px; font-size: 0.82rem;
    }
    .sa-disabled-tag {
      font-size: 0.65rem; font-weight: 700; letter-spacing: 0.06em;
      color: var(--red); background: #ef444411; padding: 2px 6px; border-radius: 4px;
    }
    /* Bar chart */
    .sa-bars {
      display: flex; align-items: flex-end; gap: 6px;
      height: 80px; margin-bottom: 12px;
    }
    .sa-bar-col { display: flex; flex-direction: column; align-items: center; flex: 1; gap: 4px; }
    .sa-bar {
      width: 100%; border-radius: 3px 3px 0 0;
      background: linear-gradient(180deg, var(--accent), #7c6af766);
      transition: height 0.4s ease; min-height: 2px;
    }
    .sa-bar-label { font-size: 0.65rem; color: var(--text-dim); }
    .sa-usage-table { width: 100%; border-collapse: collapse; margin-top: 8px; }
    .sa-usage-table th {
      font-size: 0.68rem; text-align: left; padding: 6px 8px;
      color: var(--text-dim); border-bottom: 1px solid var(--border);
    }
    .sa-usage-table td { font-size: 0.78rem; padding: 6px 8px; font-family: var(--mono); }
    .sa-quality-dot {
      display: inline-block; width: 7px; height: 7px;
      border-radius: 50%; margin-right: 5px; vertical-align: middle;
    }
    .q-green { background: var(--green); }
    .q-yellow { background: var(--yellow); }
    .q-red { background: var(--red); }
    .q-unknown { background: var(--text-muted); }

    /* Skeleton loader */
    .sa-skel {
      background: linear-gradient(90deg, var(--surface) 25%, var(--surface2) 50%, var(--surface) 75%);
      background-size: 200% 100%;
      animation: skel 1.4s infinite; border-radius: 6px;
    }
    @keyframes skel { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }

    @media (max-width: 640px) {
      .sa-topbar { padding: 0 16px; }
      .sa-tabnav { padding: 12px 16px 0; }
      .sa-content { padding: 16px; }
      .sa-panel { width: 100vw; }
      th { display: none; }
      td { display: flex; justify-content: space-between; padding: 8px 12px; }
      td::before { content: attr(data-label); color: var(--text-dim); font-size: 0.72rem; }
    }
  `}),o.jsx("div",{className:`sa-loading-overlay${t?" hidden":""}`,children:o.jsx("div",{className:"sa-spinner"})}),o.jsxs("div",{className:"sa-shell",children:[o.jsxs("div",{className:"sa-topbar",children:[o.jsxs("div",{className:"sa-topbar-left",children:[o.jsxs("div",{className:"sa-logo",children:["Kipnova ",o.jsx("span",{children:"·"})]}),o.jsx("div",{className:"sa-role-tag",children:"Superadmin"})]}),o.jsx("a",{href:"#",className:"sa-signout",onClick:E=>{E.preventDefault(),_r()},children:"Sign out"})]}),o.jsx("div",{className:"sa-tabnav",children:[{id:"clients",label:"Clients"},{id:"health",label:"System Health"},{id:"errors",label:"Error Log"}].map(E=>o.jsxs("button",{className:`sa-tab${r===E.id?" active":""}`,onClick:()=>i(E.id),children:[E.label,E.id==="errors"&&$>0&&o.jsx("span",{className:"sa-tab-badge",children:$})]},E.id))}),o.jsxs("div",{className:"sa-content",children:[r==="clients"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"sa-kpis",children:[o.jsxs("div",{className:"sa-kpi",children:[o.jsx("div",{className:"sa-kpi-label",children:"Total Clients"}),o.jsx("div",{className:"sa-kpi-value",children:s.length})]}),o.jsxs("div",{className:"sa-kpi",children:[o.jsx("div",{className:"sa-kpi-label",children:"Monthly Revenue"}),o.jsx("div",{className:"sa-kpi-value",children:yd(Ai)}),o.jsx("div",{className:"sa-kpi-sub",children:"Flat fees billed"})]}),o.jsxs("div",{className:"sa-kpi",children:[o.jsx("div",{className:"sa-kpi-label",children:"AI Cost This Month"}),o.jsx("div",{className:"sa-kpi-value",children:ts(xa)}),o.jsx("div",{className:"sa-kpi-sub",children:"Your cost, not client-billed"})]}),o.jsxs("div",{className:"sa-kpi",children:[o.jsx("div",{className:"sa-kpi-label",children:"AI Calls This Month"}),o.jsx("div",{className:"sa-kpi-value",children:At(Li)})]})]}),o.jsx("div",{className:"sa-section-title",children:"All Clients"}),o.jsx("div",{className:"sa-table-wrap",children:o.jsxs("table",{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Business"}),o.jsx("th",{children:"Status"}),o.jsx("th",{children:"WhatsApp"}),o.jsx("th",{children:"Customers"}),o.jsx("th",{children:"Inquiries"}),o.jsx("th",{children:"AI Calls"}),o.jsx("th",{children:"AI Cost"}),o.jsx("th",{children:"Monthly Fee"})]})}),o.jsx("tbody",{children:l?o.jsx("tr",{children:o.jsx("td",{colSpan:8,className:"sa-error-msg",children:l})}):s.length===0?o.jsx("tr",{children:o.jsx("td",{colSpan:8,className:"sa-empty",children:"No clients yet."})}):s.map(E=>o.jsxs("tr",{onClick:()=>ya(E.clientId),children:[o.jsx("td",{"data-label":"Business",children:o.jsx("strong",{children:E.businessName})}),o.jsx("td",{"data-label":"Status",children:o.jsx(_d,{label:E.status,variant:E.status})}),o.jsx("td",{"data-label":"WhatsApp",children:o.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[o.jsx(br,{ok:!!E.wabaId}),E.wabaId?"Connected":"Not set up"]})}),o.jsx("td",{"data-label":"Customers",children:At(E.totalCustomers)}),o.jsx("td",{"data-label":"Inquiries",children:At(E.totalInquiries)}),o.jsx("td",{"data-label":"AI Calls",children:At(E.currentMonthUsage.callCount)}),o.jsx("td",{"data-label":"AI Cost",children:ts(E.currentMonthUsage.cost)}),o.jsx("td",{"data-label":"Monthly Fee",children:yd(E.monthlyFee)})]},E.clientId))})]})})]}),r==="health"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"sa-health-refresh",children:[o.jsx("span",{children:Pt?`Last checked: ${wd(Pt.toISOString())}`:"Loading…"}),o.jsx("button",{className:"sa-refresh-btn",onClick:xr,disabled:ae,children:ae?"Checking…":"↻ Refresh"})]}),Ie&&o.jsx("div",{className:"sa-error-msg",style:{marginBottom:16},children:Ie}),!D&&ae&&o.jsx("div",{className:"sa-health-grid",children:[1,2,3,4].map(E=>o.jsxs("div",{className:"sa-health-card",children:[o.jsx("div",{className:"sa-skel",style:{height:14,width:"60%",marginBottom:10}}),o.jsx("div",{className:"sa-skel",style:{height:28,width:"40%"}})]},E))}),D&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"sa-health-grid",children:[o.jsxs("div",{className:"sa-health-card",children:[o.jsx("div",{className:"sa-health-card-label",children:"Server Status"}),o.jsxs("div",{className:"sa-status-row",children:[o.jsx(br,{ok:D.status==="ok",pulse:!0}),o.jsx("span",{style:{color:D.status==="ok"?"var(--green)":"var(--red)",fontSize:"1.1rem",fontWeight:700},children:D.status==="ok"?"Healthy":"Degraded"})]}),o.jsxs("div",{className:"sa-health-card-sub",children:["Uptime: ",OS(D.uptime)]})]}),o.jsxs("div",{className:"sa-health-card",children:[o.jsx("div",{className:"sa-health-card-label",children:"Firestore"}),o.jsxs("div",{className:"sa-status-row",children:[o.jsx(br,{ok:D.firestore.ok}),o.jsx("span",{style:{color:D.firestore.ok?"var(--green)":"var(--red)",fontWeight:700},children:D.firestore.ok?"Connected":"Unreachable"})]}),D.firestore.latencyMs!==null&&o.jsxs("div",{className:"sa-health-card-sub",children:["Latency: ",D.firestore.latencyMs,"ms"]})]}),o.jsxs("div",{className:"sa-health-card",children:[o.jsx("div",{className:"sa-health-card-label",children:"Memory"}),o.jsxs("div",{className:"sa-health-card-value",style:{fontSize:"1.1rem"},children:[D.memory.heapUsedMB,o.jsxs("span",{style:{fontSize:"0.75rem",color:"var(--text-dim)",fontWeight:400},children:[" ","/ ",D.memory.heapTotalMB," MB heap"]})]}),o.jsx("div",{className:"sa-mem-bar-wrap",children:o.jsx("div",{className:"sa-mem-bar",style:{width:`${Math.min(D.memory.heapUsedMB/D.memory.heapTotalMB*100,100)}%`}})}),o.jsxs("div",{className:"sa-health-card-sub",children:["RSS: ",D.memory.rssMB," MB"]})]}),o.jsxs("div",{className:"sa-health-card",children:[o.jsx("div",{className:"sa-health-card-label",children:"Errors Since Restart"}),o.jsx("div",{className:"sa-health-card-value",style:{color:D.errorsSinceRestart>0?"var(--red)":"var(--green)"},children:D.errorsSinceRestart}),o.jsx("div",{className:"sa-health-card-sub",children:D.errorsSinceRestart>0?"Check Error Log tab":"All clear"})]})]}),o.jsx("div",{className:"sa-section-title",style:{marginTop:8},children:"WhatsApp Connection — Per Client"}),o.jsx("div",{className:"sa-client-health-list",children:D.clients.map(E=>o.jsxs("div",{className:"sa-client-health-row",children:[o.jsxs("div",{children:[o.jsx("div",{className:"sa-client-health-name",children:E.businessName}),o.jsx("div",{className:"sa-client-health-meta",children:E.whatsapp.connected?`${E.whatsapp.verifiedName||""} · ${E.whatsapp.displayPhoneNumber||""}`:E.whatsapp.error||"Not connected"})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[E.whatsapp.connected&&E.whatsapp.qualityRating&&o.jsxs("span",{style:{display:"flex",alignItems:"center",fontSize:"0.75rem",color:"var(--text-dim)"},children:[o.jsx("span",{className:`sa-quality-dot ${xd(E.whatsapp.qualityRating)}`}),E.whatsapp.qualityRating]}),o.jsx(br,{ok:E.whatsapp.connected})]})]},E.clientId))})]})]}),r==="errors"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"sa-errors-header",children:[o.jsxs("div",{children:[o.jsx("div",{className:"sa-section-title",style:{marginBottom:0},children:"Error Log"}),ne&&o.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--text-dim)",marginTop:4},children:[ne.total," error",ne.total!==1?"s":""," captured since last restart · max ",ne.maxSize]})]}),o.jsx("button",{className:"sa-clear-btn",onClick:va,disabled:jt||!(ne!=null&&ne.total),children:jt?"Clearing…":"Clear log"})]}),A&&o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[1,2,3].map(E=>o.jsx("div",{className:"sa-skel",style:{height:72,borderRadius:8}},E))}),!A&&(ne==null?void 0:ne.errors.length)===0&&o.jsxs("div",{className:"sa-no-errors",children:[o.jsx("div",{className:"sa-no-errors-icon",children:"✓"}),"No errors logged since last restart."]}),!A&&(ne==null?void 0:ne.errors.map(E=>o.jsxs("div",{className:"sa-error-row",children:[o.jsxs("div",{className:"sa-error-row-header",children:[o.jsx("span",{className:"sa-error-context",children:E.context}),o.jsx("span",{className:"sa-error-client",children:E.clientId}),E.status&&o.jsxs("span",{className:"sa-error-status",children:["HTTP ",E.status]}),o.jsx("span",{className:"sa-error-time",children:wd(E.timestamp)})]}),o.jsx("div",{className:"sa-error-message",children:E.message})]},E.id)))]})]})]}),o.jsx("div",{className:`sa-overlay${c?" open":""}`,onClick:E=>{E.target===E.currentTarget&&bi()},children:o.jsxs("div",{className:"sa-panel",children:[o.jsxs("div",{className:"sa-panel-header",children:[o.jsxs("div",{children:[o.jsx("div",{className:"sa-panel-title",children:(d==null?void 0:d.client.businessName)||"—"}),d&&o.jsx(_d,{label:d.client.status,variant:d.client.status})]}),o.jsx("button",{className:"sa-close",onClick:bi,children:"✕"})]}),o.jsxs("div",{className:"sa-panel-body",children:[h&&o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[80,120,100,80].map((E,B)=>o.jsx("div",{className:"sa-skel",style:{height:E,borderRadius:8}},B))}),x&&o.jsx("div",{className:"sa-error-msg",children:x}),d&&(()=>{const E=d.whatsappStatus||{},B=Math.max(...d.usageHistory.map(F=>F.cost),.01);return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"sa-panel-section",children:[o.jsx("h3",{children:"WhatsApp Business"}),E.connected?o.jsxs("div",{className:"sa-kv",children:[o.jsxs("div",{className:"sa-kv-item",children:[o.jsx("div",{className:"sa-kv-k",children:"Verified name"}),o.jsx("div",{className:"sa-kv-v",children:E.verifiedName||"—"})]}),o.jsxs("div",{className:"sa-kv-item",children:[o.jsx("div",{className:"sa-kv-k",children:"Number"}),o.jsx("div",{className:"sa-kv-v",children:E.displayPhoneNumber||"—"})]}),o.jsxs("div",{className:"sa-kv-item",children:[o.jsx("div",{className:"sa-kv-k",children:"Quality"}),o.jsxs("div",{className:"sa-kv-v",children:[o.jsx("span",{className:`sa-quality-dot ${xd(E.qualityRating)}`}),E.qualityRating||"Unknown"]})]}),o.jsxs("div",{className:"sa-kv-item",children:[o.jsx("div",{className:"sa-kv-k",children:"Verification"}),o.jsx("div",{className:"sa-kv-v",children:E.verificationStatus||"—"})]})]}):o.jsxs("div",{style:{fontSize:"0.83rem",color:"var(--red)",display:"flex",alignItems:"center",gap:8},children:[o.jsx(br,{ok:!1}),"Not connected",E.error?` — ${E.error}`:""]})]}),o.jsxs("div",{className:"sa-panel-section",children:[o.jsx("h3",{children:"Activity"}),o.jsxs("div",{className:"sa-kv",children:[o.jsxs("div",{className:"sa-kv-item",children:[o.jsx("div",{className:"sa-kv-k",children:"Total customers"}),o.jsx("div",{className:"sa-kv-v",children:At(d.totalCustomers)})]}),o.jsxs("div",{className:"sa-kv-item",children:[o.jsx("div",{className:"sa-kv-k",children:"Total inquiries"}),o.jsx("div",{className:"sa-kv-v",children:At(d.totalInquiries)})]})]})]}),o.jsxs("div",{className:"sa-panel-section",children:[o.jsx("h3",{children:"Billing"}),o.jsxs("div",{className:"sa-billing-row",children:[o.jsx("input",{type:"number",min:0,value:m,onChange:F=>_(parseFloat(F.target.value)),disabled:C,placeholder:"Monthly fee (KES)"}),o.jsx("button",{onClick:wa,disabled:C,children:C?"Saving…":"Save"})]}),o.jsx("div",{className:"sa-billing-hint",children:"Flat monthly fee charged to this client (KES). Independent of AI cost figures below."}),R&&o.jsx("div",{className:"sa-save-confirm",children:"Saved ✓"})]}),o.jsxs("div",{className:"sa-panel-section",children:[o.jsx("h3",{children:"Admin Accounts"}),d.adminUsers.length===0?o.jsx("div",{style:{fontSize:"0.82rem",color:"var(--text-dim)"},children:"No admin accounts found."}):d.adminUsers.map((F,Sa)=>o.jsxs("div",{className:"sa-admin-row",children:[o.jsx("span",{style:{fontSize:"0.82rem"},children:F.email}),F.disabled?o.jsx("span",{className:"sa-disabled-tag",children:"DISABLED"}):o.jsx("span",{style:{color:"var(--text-dim)",fontSize:"0.72rem"},children:F.lastSignIn?"Last in: "+new Date(F.lastSignIn).toLocaleDateString():"Never signed in"})]},Sa))]}),o.jsxs("div",{className:"sa-panel-section",children:[o.jsx("h3",{children:"AI Usage — Last 6 Months"}),o.jsx("div",{className:"sa-bars",children:d.usageHistory.map(F=>o.jsxs("div",{className:"sa-bar-col",children:[o.jsx("div",{className:"sa-bar",style:{height:`${Math.max(F.cost/B*100,2)}%`},title:ts(F.cost)}),o.jsx("div",{className:"sa-bar-label",children:Sd(F.month)})]},F.month))}),o.jsxs("table",{className:"sa-usage-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Month"}),o.jsx("th",{children:"Calls"}),o.jsx("th",{children:"Tokens"}),o.jsx("th",{children:"Cost"})]})}),o.jsx("tbody",{children:d.usageHistory.map(F=>o.jsxs("tr",{children:[o.jsx("td",{children:Sd(F.month)}),o.jsx("td",{children:At(F.callCount)}),o.jsx("td",{children:At(F.totalTokens)}),o.jsx("td",{children:ts(F.cost)})]},F.month))})]})]})]})})()]})]})})]})}function MS(){const[e,t]=v.useState({user:null,role:null,loading:!0});return v.useEffect(()=>Op(We,async r=>{if(!r){t({user:null,role:null,loading:!1});return}const s=(await r.getIdTokenResult()).claims;let a=null;s.role==="superadmin"?a="superadmin":s.clientId&&(a="admin"),t({user:r,role:a,loading:!1})}),[]),e}function Ed({children:e,requiredRole:t}){const{user:n,role:r,loading:i}=MS();return i?o.jsxs("div",{style:{position:"fixed",inset:0,background:"#0f172a",display:"flex",alignItems:"center",justifyContent:"center"},children:[o.jsx("div",{style:{width:36,height:36,border:"3px solid rgba(255,255,255,0.25)",borderTopColor:"#fff",borderRadius:"50%",animation:"spin 0.8s linear infinite"}}),o.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"})]}):n?t==="admin"&&r==="superadmin"?o.jsx(Mr,{to:"/superadmin",replace:!0}):t==="superadmin"&&r!=="superadmin"?o.jsx(Mr,{to:"/login?error=unauthorized",replace:!0}):r?o.jsx(o.Fragment,{children:e}):o.jsx(Mr,{to:"/login?error=unauthorized",replace:!0}):o.jsx(Mr,{to:"/login",replace:!0})}function US(){const[e,t]=v.useState(null),[n,r]=v.useState(!1),[i,s]=v.useState(!1);return v.useEffect(()=>{if(window.matchMedia("(display-mode: standalone)").matches){r(!0);return}localStorage.getItem("nova-install-dismissed")&&s(!0);const p=h=>{h.preventDefault(),t(h)};return window.addEventListener("beforeinstallprompt",p),window.addEventListener("appinstalled",()=>r(!0)),()=>{window.removeEventListener("beforeinstallprompt",p)}},[]),{install:async()=>{if(!e)return;await e.prompt(),(await e.userChoice).outcome==="accepted"&&(r(!0),t(null))},dismiss:()=>{localStorage.setItem("nova-install-dismissed","true"),s(!0)},showBanner:!!e&&!n&&!i,isInstalled:n}}function zS(){const{install:e,dismiss:t,showBanner:n}=US();return n?o.jsxs("div",{style:{position:"fixed",bottom:"1.25rem",left:"50%",transform:"translateX(-50%)",zIndex:9999,background:"#1a1d27",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"1rem",padding:"0.85rem 1.1rem",display:"flex",alignItems:"center",gap:"0.85rem",boxShadow:"0 8px 32px rgba(0,0,0,0.45)",maxWidth:"calc(100vw - 2rem)",width:"360px"},children:[o.jsx("img",{src:"/nova-icon-192.png",alt:"Nova",style:{width:40,height:40,borderRadius:"10px",flexShrink:0}}),o.jsxs("div",{style:{flex:1,minWidth:0},children:[o.jsx("div",{style:{color:"#fff",fontWeight:600,fontSize:"0.9rem",lineHeight:1.2},children:"Install Nova"}),o.jsx("div",{style:{color:"rgba(255,255,255,0.5)",fontSize:"0.78rem",marginTop:"0.15rem"},children:"Add to your home screen for quick access"})]}),o.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexShrink:0},children:[o.jsx("button",{onClick:t,style:{background:"transparent",border:"1px solid rgba(255,255,255,0.12)",color:"rgba(255,255,255,0.5)",borderRadius:"0.5rem",padding:"0.4rem 0.65rem",fontSize:"0.8rem",cursor:"pointer"},children:"Not now"}),o.jsx("button",{onClick:e,style:{background:"linear-gradient(135deg, #2563eb, #06b6d4)",border:"none",color:"#fff",borderRadius:"0.5rem",padding:"0.4rem 0.85rem",fontSize:"0.8rem",fontWeight:600,cursor:"pointer"},children:"Install"})]})]}):null}function FS(){return o.jsx(Cy,{children:o.jsxs(o.Fragment,{children:[o.jsxs(_y,{children:[o.jsx(pn,{path:"/",element:o.jsx(Ty,{})}),o.jsx(pn,{path:"/embedded-signup",element:o.jsx(CS,{})}),o.jsx(pn,{path:"/login",element:o.jsx(NS,{})}),o.jsx(pn,{path:"/dashboard",element:o.jsx(Ed,{requiredRole:"admin",children:o.jsx(LS,{})})}),o.jsx(pn,{path:"/superadmin",element:o.jsx(Ed,{requiredRole:"superadmin",children:o.jsx(DS,{})})}),o.jsx(pn,{path:"*",element:o.jsx(Mr,{to:"/",replace:!0})})]}),o.jsx(zS,{})]})})}ro.createRoot(document.getElementById("root")).render(o.jsx(Ld.StrictMode,{children:o.jsx(FS,{})}));
