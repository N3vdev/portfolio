(function(){const w=document.createElement("link").relList;if(w&&w.supports&&w.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))C(_);new MutationObserver(_=>{for(const R of _)if(R.type==="childList")for(const J of R.addedNodes)J.tagName==="LINK"&&J.rel==="modulepreload"&&C(J)}).observe(document,{childList:!0,subtree:!0});function p(_){const R={};return _.integrity&&(R.integrity=_.integrity),_.referrerPolicy&&(R.referrerPolicy=_.referrerPolicy),_.crossOrigin==="use-credentials"?R.credentials="include":_.crossOrigin==="anonymous"?R.credentials="omit":R.credentials="same-origin",R}function C(_){if(_.ep)return;_.ep=!0;const R=p(_);fetch(_.href,R)}})();var Co={exports:{}},wr={},No={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zu;function Id(){if(zu)return q;zu=1;var v=Symbol.for("react.element"),w=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),J=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),K=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),ne=Symbol.iterator;function W(d){return d===null||typeof d!="object"?null:(d=ne&&d[ne]||d["@@iterator"],typeof d=="function"?d:null)}var re={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,$={};function D(d,y,Z){this.props=d,this.context=y,this.refs=$,this.updater=Z||re}D.prototype.isReactComponent={},D.prototype.setState=function(d,y){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,y,"setState")},D.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function ke(){}ke.prototype=D.prototype;function ee(d,y,Z){this.props=d,this.context=y,this.refs=$,this.updater=Z||re}var Q=ee.prototype=new ke;Q.constructor=ee,U(Q,D.prototype),Q.isPureReactComponent=!0;var I=Array.isArray,ue=Object.prototype.hasOwnProperty,V={current:null},fe={key:!0,ref:!0,__self:!0,__source:!0};function be(d,y,Z){var te,oe={},se=null,pe=null;if(y!=null)for(te in y.ref!==void 0&&(pe=y.ref),y.key!==void 0&&(se=""+y.key),y)ue.call(y,te)&&!fe.hasOwnProperty(te)&&(oe[te]=y[te]);var ce=arguments.length-2;if(ce===1)oe.children=Z;else if(1<ce){for(var ve=Array(ce),Ge=0;Ge<ce;Ge++)ve[Ge]=arguments[Ge+2];oe.children=ve}if(d&&d.defaultProps)for(te in ce=d.defaultProps,ce)oe[te]===void 0&&(oe[te]=ce[te]);return{$$typeof:v,type:d,key:se,ref:pe,props:oe,_owner:V.current}}function Ne(d,y){return{$$typeof:v,type:d.type,key:y,ref:d.ref,props:d.props,_owner:d._owner}}function Fe(d){return typeof d=="object"&&d!==null&&d.$$typeof===v}function wt(d){var y={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(Z){return y[Z]})}var tt=/\/+/g;function De(d,y){return typeof d=="object"&&d!==null&&d.key!=null?wt(""+d.key):y.toString(36)}function $e(d,y,Z,te,oe){var se=typeof d;(se==="undefined"||se==="boolean")&&(d=null);var pe=!1;if(d===null)pe=!0;else switch(se){case"string":case"number":pe=!0;break;case"object":switch(d.$$typeof){case v:case w:pe=!0}}if(pe)return pe=d,oe=oe(pe),d=te===""?"."+De(pe,0):te,I(oe)?(Z="",d!=null&&(Z=d.replace(tt,"$&/")+"/"),$e(oe,y,Z,"",function(Ge){return Ge})):oe!=null&&(Fe(oe)&&(oe=Ne(oe,Z+(!oe.key||pe&&pe.key===oe.key?"":(""+oe.key).replace(tt,"$&/")+"/")+d)),y.push(oe)),1;if(pe=0,te=te===""?".":te+":",I(d))for(var ce=0;ce<d.length;ce++){se=d[ce];var ve=te+De(se,ce);pe+=$e(se,y,Z,ve,oe)}else if(ve=W(d),typeof ve=="function")for(d=ve.call(d),ce=0;!(se=d.next()).done;)se=se.value,ve=te+De(se,ce++),pe+=$e(se,y,Z,ve,oe);else if(se==="object")throw y=String(d),Error("Objects are not valid as a React child (found: "+(y==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":y)+"). If you meant to render a collection of children, use an array instead.");return pe}function S(d,y,Z){if(d==null)return d;var te=[],oe=0;return $e(d,te,"","",function(se){return y.call(Z,se,oe++)}),te}function H(d){if(d._status===-1){var y=d._result;y=y(),y.then(function(Z){(d._status===0||d._status===-1)&&(d._status=1,d._result=Z)},function(Z){(d._status===0||d._status===-1)&&(d._status=2,d._result=Z)}),d._status===-1&&(d._status=0,d._result=y)}if(d._status===1)return d._result.default;throw d._result}var le={current:null},E={transition:null},F={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:E,ReactCurrentOwner:V};function j(){throw Error("act(...) is not supported in production builds of React.")}return q.Children={map:S,forEach:function(d,y,Z){S(d,function(){y.apply(this,arguments)},Z)},count:function(d){var y=0;return S(d,function(){y++}),y},toArray:function(d){return S(d,function(y){return y})||[]},only:function(d){if(!Fe(d))throw Error("React.Children.only expected to receive a single React element child.");return d}},q.Component=D,q.Fragment=p,q.Profiler=_,q.PureComponent=ee,q.StrictMode=C,q.Suspense=B,q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,q.act=j,q.cloneElement=function(d,y,Z){if(d==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+d+".");var te=U({},d.props),oe=d.key,se=d.ref,pe=d._owner;if(y!=null){if(y.ref!==void 0&&(se=y.ref,pe=V.current),y.key!==void 0&&(oe=""+y.key),d.type&&d.type.defaultProps)var ce=d.type.defaultProps;for(ve in y)ue.call(y,ve)&&!fe.hasOwnProperty(ve)&&(te[ve]=y[ve]===void 0&&ce!==void 0?ce[ve]:y[ve])}var ve=arguments.length-2;if(ve===1)te.children=Z;else if(1<ve){ce=Array(ve);for(var Ge=0;Ge<ve;Ge++)ce[Ge]=arguments[Ge+2];te.children=ce}return{$$typeof:v,type:d.type,key:oe,ref:se,props:te,_owner:pe}},q.createContext=function(d){return d={$$typeof:J,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},d.Provider={$$typeof:R,_context:d},d.Consumer=d},q.createElement=be,q.createFactory=function(d){var y=be.bind(null,d);return y.type=d,y},q.createRef=function(){return{current:null}},q.forwardRef=function(d){return{$$typeof:X,render:d}},q.isValidElement=Fe,q.lazy=function(d){return{$$typeof:G,_payload:{_status:-1,_result:d},_init:H}},q.memo=function(d,y){return{$$typeof:K,type:d,compare:y===void 0?null:y}},q.startTransition=function(d){var y=E.transition;E.transition={};try{d()}finally{E.transition=y}},q.unstable_act=j,q.useCallback=function(d,y){return le.current.useCallback(d,y)},q.useContext=function(d){return le.current.useContext(d)},q.useDebugValue=function(){},q.useDeferredValue=function(d){return le.current.useDeferredValue(d)},q.useEffect=function(d,y){return le.current.useEffect(d,y)},q.useId=function(){return le.current.useId()},q.useImperativeHandle=function(d,y,Z){return le.current.useImperativeHandle(d,y,Z)},q.useInsertionEffect=function(d,y){return le.current.useInsertionEffect(d,y)},q.useLayoutEffect=function(d,y){return le.current.useLayoutEffect(d,y)},q.useMemo=function(d,y){return le.current.useMemo(d,y)},q.useReducer=function(d,y,Z){return le.current.useReducer(d,y,Z)},q.useRef=function(d){return le.current.useRef(d)},q.useState=function(d){return le.current.useState(d)},q.useSyncExternalStore=function(d,y,Z){return le.current.useSyncExternalStore(d,y,Z)},q.useTransition=function(){return le.current.useTransition()},q.version="18.3.1",q}var _u;function To(){return _u||(_u=1,No.exports=Id()),No.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pu;function Od(){if(Pu)return wr;Pu=1;var v=To(),w=Symbol.for("react.element"),p=Symbol.for("react.fragment"),C=Object.prototype.hasOwnProperty,_=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R={key:!0,ref:!0,__self:!0,__source:!0};function J(X,B,K){var G,ne={},W=null,re=null;K!==void 0&&(W=""+K),B.key!==void 0&&(W=""+B.key),B.ref!==void 0&&(re=B.ref);for(G in B)C.call(B,G)&&!R.hasOwnProperty(G)&&(ne[G]=B[G]);if(X&&X.defaultProps)for(G in B=X.defaultProps,B)ne[G]===void 0&&(ne[G]=B[G]);return{$$typeof:w,type:X,key:W,ref:re,props:ne,_owner:_.current}}return wr.Fragment=p,wr.jsx=J,wr.jsxs=J,wr}var Lu;function Ad(){return Lu||(Lu=1,Co.exports=Od()),Co.exports}var s=Ad(),N=To(),Li={},zo={exports:{}},Ke={},_o={exports:{}},Po={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mu;function Bd(){return Mu||(Mu=1,(function(v){function w(E,F){var j=E.length;E.push(F);e:for(;0<j;){var d=j-1>>>1,y=E[d];if(0<_(y,F))E[d]=F,E[j]=y,j=d;else break e}}function p(E){return E.length===0?null:E[0]}function C(E){if(E.length===0)return null;var F=E[0],j=E.pop();if(j!==F){E[0]=j;e:for(var d=0,y=E.length,Z=y>>>1;d<Z;){var te=2*(d+1)-1,oe=E[te],se=te+1,pe=E[se];if(0>_(oe,j))se<y&&0>_(pe,oe)?(E[d]=pe,E[se]=j,d=se):(E[d]=oe,E[te]=j,d=te);else if(se<y&&0>_(pe,j))E[d]=pe,E[se]=j,d=se;else break e}}return F}function _(E,F){var j=E.sortIndex-F.sortIndex;return j!==0?j:E.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var R=performance;v.unstable_now=function(){return R.now()}}else{var J=Date,X=J.now();v.unstable_now=function(){return J.now()-X}}var B=[],K=[],G=1,ne=null,W=3,re=!1,U=!1,$=!1,D=typeof setTimeout=="function"?setTimeout:null,ke=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Q(E){for(var F=p(K);F!==null;){if(F.callback===null)C(K);else if(F.startTime<=E)C(K),F.sortIndex=F.expirationTime,w(B,F);else break;F=p(K)}}function I(E){if($=!1,Q(E),!U)if(p(B)!==null)U=!0,H(ue);else{var F=p(K);F!==null&&le(I,F.startTime-E)}}function ue(E,F){U=!1,$&&($=!1,ke(be),be=-1),re=!0;var j=W;try{for(Q(F),ne=p(B);ne!==null&&(!(ne.expirationTime>F)||E&&!wt());){var d=ne.callback;if(typeof d=="function"){ne.callback=null,W=ne.priorityLevel;var y=d(ne.expirationTime<=F);F=v.unstable_now(),typeof y=="function"?ne.callback=y:ne===p(B)&&C(B),Q(F)}else C(B);ne=p(B)}if(ne!==null)var Z=!0;else{var te=p(K);te!==null&&le(I,te.startTime-F),Z=!1}return Z}finally{ne=null,W=j,re=!1}}var V=!1,fe=null,be=-1,Ne=5,Fe=-1;function wt(){return!(v.unstable_now()-Fe<Ne)}function tt(){if(fe!==null){var E=v.unstable_now();Fe=E;var F=!0;try{F=fe(!0,E)}finally{F?De():(V=!1,fe=null)}}else V=!1}var De;if(typeof ee=="function")De=function(){ee(tt)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,S=$e.port2;$e.port1.onmessage=tt,De=function(){S.postMessage(null)}}else De=function(){D(tt,0)};function H(E){fe=E,V||(V=!0,De())}function le(E,F){be=D(function(){E(v.unstable_now())},F)}v.unstable_IdlePriority=5,v.unstable_ImmediatePriority=1,v.unstable_LowPriority=4,v.unstable_NormalPriority=3,v.unstable_Profiling=null,v.unstable_UserBlockingPriority=2,v.unstable_cancelCallback=function(E){E.callback=null},v.unstable_continueExecution=function(){U||re||(U=!0,H(ue))},v.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ne=0<E?Math.floor(1e3/E):5},v.unstable_getCurrentPriorityLevel=function(){return W},v.unstable_getFirstCallbackNode=function(){return p(B)},v.unstable_next=function(E){switch(W){case 1:case 2:case 3:var F=3;break;default:F=W}var j=W;W=F;try{return E()}finally{W=j}},v.unstable_pauseExecution=function(){},v.unstable_requestPaint=function(){},v.unstable_runWithPriority=function(E,F){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var j=W;W=E;try{return F()}finally{W=j}},v.unstable_scheduleCallback=function(E,F,j){var d=v.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?d+j:d):j=d,E){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=j+y,E={id:G++,callback:F,priorityLevel:E,startTime:j,expirationTime:y,sortIndex:-1},j>d?(E.sortIndex=j,w(K,E),p(B)===null&&E===p(K)&&($?(ke(be),be=-1):$=!0,le(I,j-d))):(E.sortIndex=y,w(B,E),U||re||(U=!0,H(ue))),E},v.unstable_shouldYield=wt,v.unstable_wrapCallback=function(E){var F=W;return function(){var j=W;W=F;try{return E.apply(this,arguments)}finally{W=j}}}})(Po)),Po}var Tu;function Ud(){return Tu||(Tu=1,_o.exports=Bd()),_o.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ru;function Vd(){if(Ru)return Ke;Ru=1;var v=To(),w=Ud();function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var C=new Set,_={};function R(e,t){J(e,t),J(e+"Capture",t)}function J(e,t){for(_[e]=t,e=0;e<t.length;e++)C.add(t[e])}var X=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),B=Object.prototype.hasOwnProperty,K=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,G={},ne={};function W(e){return B.call(ne,e)?!0:B.call(G,e)?!1:K.test(e)?ne[e]=!0:(G[e]=!0,!1)}function re(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function U(e,t,n,r){if(t===null||typeof t>"u"||re(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){D[e]=new $(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];D[t]=new $(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){D[e]=new $(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){D[e]=new $(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){D[e]=new $(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){D[e]=new $(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){D[e]=new $(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){D[e]=new $(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){D[e]=new $(e,5,!1,e.toLowerCase(),null,!1,!1)});var ke=/[\-:]([a-z])/g;function ee(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ke,ee);D[t]=new $(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ke,ee);D[t]=new $(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ke,ee);D[t]=new $(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){D[e]=new $(e,1,!1,e.toLowerCase(),null,!1,!1)}),D.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){D[e]=new $(e,1,!1,e.toLowerCase(),null,!0,!0)});function Q(e,t,n,r){var i=D.hasOwnProperty(t)?D[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(U(t,n,i,r)&&(n=null),r||i===null?W(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var I=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ue=Symbol.for("react.element"),V=Symbol.for("react.portal"),fe=Symbol.for("react.fragment"),be=Symbol.for("react.strict_mode"),Ne=Symbol.for("react.profiler"),Fe=Symbol.for("react.provider"),wt=Symbol.for("react.context"),tt=Symbol.for("react.forward_ref"),De=Symbol.for("react.suspense"),$e=Symbol.for("react.suspense_list"),S=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),E=Symbol.iterator;function F(e){return e===null||typeof e!="object"?null:(e=E&&e[E]||e["@@iterator"],typeof e=="function"?e:null)}var j=Object.assign,d;function y(e){if(d===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);d=t&&t[1]||""}return`
`+d+e}var Z=!1;function te(e,t){if(!e||Z)return"";Z=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var r=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){r=h}e.call(t.prototype)}else{try{throw Error()}catch(h){r=h}e()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,a=l.length-1;1<=o&&0<=a&&i[o]!==l[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==l[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==l[a]){var u=`
`+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=a);break}}}finally{Z=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?y(e):""}function oe(e){switch(e.tag){case 5:return y(e.type);case 16:return y("Lazy");case 13:return y("Suspense");case 19:return y("SuspenseList");case 0:case 2:case 15:return e=te(e.type,!1),e;case 11:return e=te(e.type.render,!1),e;case 1:return e=te(e.type,!0),e;default:return""}}function se(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fe:return"Fragment";case V:return"Portal";case Ne:return"Profiler";case be:return"StrictMode";case De:return"Suspense";case $e:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wt:return(e.displayName||"Context")+".Consumer";case Fe:return(e._context.displayName||"Context")+".Provider";case tt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case S:return t=e.displayName||null,t!==null?t:se(e.type)||"Memo";case H:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}function pe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(t);case 8:return t===be?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ce(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ve(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ge(e){var t=ve(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function kr(e){e._valueTracker||(e._valueTracker=Ge(e))}function Ro(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ve(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Sr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Mi(e,t){var n=t.checked;return j({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Fo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ce(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Do(e,t){t=t.checked,t!=null&&Q(e,"checked",t,!1)}function Ti(e,t){Do(e,t);var n=ce(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ri(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ri(e,t.type,ce(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Io(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ri(e,t,n){(t!=="number"||Sr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fn=Array.isArray;function un(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ce(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Fi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(p(91));return j({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Oo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(p(92));if(Fn(n)){if(1<n.length)throw Error(p(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ce(n)}}function Ao(e,t){var n=ce(t.value),r=ce(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Bo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Uo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Di(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Uo(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var br,Vo=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(br=br||document.createElement("div"),br.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=br.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var In={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uu=["Webkit","ms","Moz","O"];Object.keys(In).forEach(function(e){Uu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),In[t]=In[e]})});function $o(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||In.hasOwnProperty(e)&&In[e]?(""+t).trim():t+"px"}function Wo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=$o(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Vu=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ii(e,t){if(t){if(Vu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(p(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(p(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(p(61))}if(t.style!=null&&typeof t.style!="object")throw Error(p(62))}}function Oi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ai=null;function Bi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ui=null,cn=null,dn=null;function Ho(e){if(e=lr(e)){if(typeof Ui!="function")throw Error(p(280));var t=e.stateNode;t&&(t=Yr(t),Ui(e.stateNode,e.type,t))}}function Yo(e){cn?dn?dn.push(e):dn=[e]:cn=e}function Qo(){if(cn){var e=cn,t=dn;if(dn=cn=null,Ho(e),t)for(e=0;e<t.length;e++)Ho(t[e])}}function Xo(e,t){return e(t)}function Ko(){}var Vi=!1;function Go(e,t,n){if(Vi)return e(t,n);Vi=!0;try{return Xo(e,t,n)}finally{Vi=!1,(cn!==null||dn!==null)&&(Ko(),Qo())}}function On(e,t){var n=e.stateNode;if(n===null)return null;var r=Yr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(p(231,t,typeof n));return n}var $i=!1;if(X)try{var An={};Object.defineProperty(An,"passive",{get:function(){$i=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{$i=!1}function $u(e,t,n,r,i,l,o,a,u){var h=Array.prototype.slice.call(arguments,3);try{t.apply(n,h)}catch(x){this.onError(x)}}var Bn=!1,Er=null,jr=!1,Wi=null,Wu={onError:function(e){Bn=!0,Er=e}};function Hu(e,t,n,r,i,l,o,a,u){Bn=!1,Er=null,$u.apply(Wu,arguments)}function Yu(e,t,n,r,i,l,o,a,u){if(Hu.apply(this,arguments),Bn){if(Bn){var h=Er;Bn=!1,Er=null}else throw Error(p(198));jr||(jr=!0,Wi=h)}}function Kt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Jo(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zo(e){if(Kt(e)!==e)throw Error(p(188))}function Qu(e){var t=e.alternate;if(!t){if(t=Kt(e),t===null)throw Error(p(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Zo(i),e;if(l===r)return Zo(i),t;l=l.sibling}throw Error(p(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o){for(a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o)throw Error(p(189))}}if(n.alternate!==r)throw Error(p(190))}if(n.tag!==3)throw Error(p(188));return n.stateNode.current===n?e:t}function qo(e){return e=Qu(e),e!==null?es(e):null}function es(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=es(e);if(t!==null)return t;e=e.sibling}return null}var ts=w.unstable_scheduleCallback,ns=w.unstable_cancelCallback,Xu=w.unstable_shouldYield,Ku=w.unstable_requestPaint,Ee=w.unstable_now,Gu=w.unstable_getCurrentPriorityLevel,Hi=w.unstable_ImmediatePriority,rs=w.unstable_UserBlockingPriority,Cr=w.unstable_NormalPriority,Ju=w.unstable_LowPriority,is=w.unstable_IdlePriority,Nr=null,ht=null;function Zu(e){if(ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(Nr,e,void 0,(e.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:tc,qu=Math.log,ec=Math.LN2;function tc(e){return e>>>=0,e===0?32:31-(qu(e)/ec|0)|0}var zr=64,_r=4194304;function Un(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Pr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Un(a):(l&=o,l!==0&&(r=Un(l)))}else o=n&~i,o!==0?r=Un(o):l!==0&&(r=Un(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-at(t),i=1<<n,r|=e[n],t&=~i;return r}function nc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-at(l),a=1<<o,u=i[o];u===-1?((a&n)===0||(a&r)!==0)&&(i[o]=nc(a,t)):u<=t&&(e.expiredLanes|=a),l&=~a}}function Yi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ls(){var e=zr;return zr<<=1,(zr&4194240)===0&&(zr=64),e}function Qi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-at(t),e[t]=n}function ic(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-at(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function Xi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var de=0;function os(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ss,Ki,as,us,cs,Gi=!1,Lr=[],_t=null,Pt=null,Lt=null,$n=new Map,Wn=new Map,Mt=[],lc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ds(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":Lt=null;break;case"pointerover":case"pointerout":$n.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(t.pointerId)}}function Hn(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=lr(t),t!==null&&Ki(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function oc(e,t,n,r,i){switch(t){case"focusin":return _t=Hn(_t,e,t,n,r,i),!0;case"dragenter":return Pt=Hn(Pt,e,t,n,r,i),!0;case"mouseover":return Lt=Hn(Lt,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return $n.set(l,Hn($n.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Wn.set(l,Hn(Wn.get(l)||null,e,t,n,r,i)),!0}return!1}function fs(e){var t=Gt(e.target);if(t!==null){var n=Kt(t);if(n!==null){if(t=n.tag,t===13){if(t=Jo(n),t!==null){e.blockedOn=t,cs(e.priority,function(){as(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ai=r,n.target.dispatchEvent(r),Ai=null}else return t=lr(n),t!==null&&Ki(t),e.blockedOn=n,!1;t.shift()}return!0}function ps(e,t,n){Mr(e)&&n.delete(t)}function sc(){Gi=!1,_t!==null&&Mr(_t)&&(_t=null),Pt!==null&&Mr(Pt)&&(Pt=null),Lt!==null&&Mr(Lt)&&(Lt=null),$n.forEach(ps),Wn.forEach(ps)}function Yn(e,t){e.blockedOn===t&&(e.blockedOn=null,Gi||(Gi=!0,w.unstable_scheduleCallback(w.unstable_NormalPriority,sc)))}function Qn(e){function t(i){return Yn(i,e)}if(0<Lr.length){Yn(Lr[0],e);for(var n=1;n<Lr.length;n++){var r=Lr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_t!==null&&Yn(_t,e),Pt!==null&&Yn(Pt,e),Lt!==null&&Yn(Lt,e),$n.forEach(t),Wn.forEach(t),n=0;n<Mt.length;n++)r=Mt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Mt.length&&(n=Mt[0],n.blockedOn===null);)fs(n),n.blockedOn===null&&Mt.shift()}var fn=I.ReactCurrentBatchConfig,Tr=!0;function ac(e,t,n,r){var i=de,l=fn.transition;fn.transition=null;try{de=1,Ji(e,t,n,r)}finally{de=i,fn.transition=l}}function uc(e,t,n,r){var i=de,l=fn.transition;fn.transition=null;try{de=4,Ji(e,t,n,r)}finally{de=i,fn.transition=l}}function Ji(e,t,n,r){if(Tr){var i=Zi(e,t,n,r);if(i===null)hl(e,t,r,Rr,n),ds(e,r);else if(oc(i,e,t,n,r))r.stopPropagation();else if(ds(e,r),t&4&&-1<lc.indexOf(e)){for(;i!==null;){var l=lr(i);if(l!==null&&ss(l),l=Zi(e,t,n,r),l===null&&hl(e,t,r,Rr,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else hl(e,t,r,null,n)}}var Rr=null;function Zi(e,t,n,r){if(Rr=null,e=Bi(r),e=Gt(e),e!==null)if(t=Kt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Jo(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Rr=e,null}function ms(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gu()){case Hi:return 1;case rs:return 4;case Cr:case Ju:return 16;case is:return 536870912;default:return 16}default:return 16}}var Tt=null,qi=null,Fr=null;function hs(){if(Fr)return Fr;var e,t=qi,n=t.length,r,i="value"in Tt?Tt.value:Tt.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return Fr=i.slice(e,1<r?1-r:void 0)}function Dr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ir(){return!0}function gs(){return!1}function Je(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Ir:gs,this.isPropagationStopped=gs,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ir)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ir)},persist:function(){},isPersistent:Ir}),t}var pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},el=Je(pn),Xn=j({},pn,{view:0,detail:0}),cc=Je(Xn),tl,nl,Kn,Or=j({},Xn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:il,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kn&&(Kn&&e.type==="mousemove"?(tl=e.screenX-Kn.screenX,nl=e.screenY-Kn.screenY):nl=tl=0,Kn=e),tl)},movementY:function(e){return"movementY"in e?e.movementY:nl}}),vs=Je(Or),dc=j({},Or,{dataTransfer:0}),fc=Je(dc),pc=j({},Xn,{relatedTarget:0}),rl=Je(pc),mc=j({},pn,{animationName:0,elapsedTime:0,pseudoElement:0}),hc=Je(mc),gc=j({},pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vc=Je(gc),yc=j({},pn,{data:0}),ys=Je(yc),xc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kc[e])?!!t[e]:!1}function il(){return Sc}var bc=j({},Xn,{key:function(e){if(e.key){var t=xc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Dr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:il,charCode:function(e){return e.type==="keypress"?Dr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ec=Je(bc),jc=j({},Or,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xs=Je(jc),Cc=j({},Xn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:il}),Nc=Je(Cc),zc=j({},pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),_c=Je(zc),Pc=j({},Or,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lc=Je(Pc),Mc=[9,13,27,32],ll=X&&"CompositionEvent"in window,Gn=null;X&&"documentMode"in document&&(Gn=document.documentMode);var Tc=X&&"TextEvent"in window&&!Gn,ws=X&&(!ll||Gn&&8<Gn&&11>=Gn),ks=" ",Ss=!1;function bs(e,t){switch(e){case"keyup":return Mc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Es(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mn=!1;function Rc(e,t){switch(e){case"compositionend":return Es(t);case"keypress":return t.which!==32?null:(Ss=!0,ks);case"textInput":return e=t.data,e===ks&&Ss?null:e;default:return null}}function Fc(e,t){if(mn)return e==="compositionend"||!ll&&bs(e,t)?(e=hs(),Fr=qi=Tt=null,mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ws&&t.locale!=="ko"?null:t.data;default:return null}}var Dc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function js(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Dc[e.type]:t==="textarea"}function Cs(e,t,n,r){Yo(r),t=$r(t,"onChange"),0<t.length&&(n=new el("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Jn=null,Zn=null;function Ic(e){Ws(e,0)}function Ar(e){var t=xn(e);if(Ro(t))return e}function Oc(e,t){if(e==="change")return t}var Ns=!1;if(X){var ol;if(X){var sl="oninput"in document;if(!sl){var zs=document.createElement("div");zs.setAttribute("oninput","return;"),sl=typeof zs.oninput=="function"}ol=sl}else ol=!1;Ns=ol&&(!document.documentMode||9<document.documentMode)}function _s(){Jn&&(Jn.detachEvent("onpropertychange",Ps),Zn=Jn=null)}function Ps(e){if(e.propertyName==="value"&&Ar(Zn)){var t=[];Cs(t,Zn,e,Bi(e)),Go(Ic,t)}}function Ac(e,t,n){e==="focusin"?(_s(),Jn=t,Zn=n,Jn.attachEvent("onpropertychange",Ps)):e==="focusout"&&_s()}function Bc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ar(Zn)}function Uc(e,t){if(e==="click")return Ar(t)}function Vc(e,t){if(e==="input"||e==="change")return Ar(t)}function $c(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:$c;function qn(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!B.call(t,i)||!ut(e[i],t[i]))return!1}return!0}function Ls(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ms(e,t){var n=Ls(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ls(n)}}function Ts(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ts(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Rs(){for(var e=window,t=Sr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Sr(e.document)}return t}function al(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wc(e){var t=Rs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ts(n.ownerDocument.documentElement,n)){if(r!==null&&al(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Ms(n,l);var o=Ms(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hc=X&&"documentMode"in document&&11>=document.documentMode,hn=null,ul=null,er=null,cl=!1;function Fs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cl||hn==null||hn!==Sr(r)||(r=hn,"selectionStart"in r&&al(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),er&&qn(er,r)||(er=r,r=$r(ul,"onSelect"),0<r.length&&(t=new el("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=hn)))}function Br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gn={animationend:Br("Animation","AnimationEnd"),animationiteration:Br("Animation","AnimationIteration"),animationstart:Br("Animation","AnimationStart"),transitionend:Br("Transition","TransitionEnd")},dl={},Ds={};X&&(Ds=document.createElement("div").style,"AnimationEvent"in window||(delete gn.animationend.animation,delete gn.animationiteration.animation,delete gn.animationstart.animation),"TransitionEvent"in window||delete gn.transitionend.transition);function Ur(e){if(dl[e])return dl[e];if(!gn[e])return e;var t=gn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ds)return dl[e]=t[n];return e}var Is=Ur("animationend"),Os=Ur("animationiteration"),As=Ur("animationstart"),Bs=Ur("transitionend"),Us=new Map,Vs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rt(e,t){Us.set(e,t),R(t,[e])}for(var fl=0;fl<Vs.length;fl++){var pl=Vs[fl],Yc=pl.toLowerCase(),Qc=pl[0].toUpperCase()+pl.slice(1);Rt(Yc,"on"+Qc)}Rt(Is,"onAnimationEnd"),Rt(Os,"onAnimationIteration"),Rt(As,"onAnimationStart"),Rt("dblclick","onDoubleClick"),Rt("focusin","onFocus"),Rt("focusout","onBlur"),Rt(Bs,"onTransitionEnd"),J("onMouseEnter",["mouseout","mouseover"]),J("onMouseLeave",["mouseout","mouseover"]),J("onPointerEnter",["pointerout","pointerover"]),J("onPointerLeave",["pointerout","pointerover"]),R("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),R("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),R("onBeforeInput",["compositionend","keypress","textInput","paste"]),R("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xc=new Set("cancel close invalid load scroll toggle".split(" ").concat(tr));function $s(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Yu(r,t,void 0,e),e.currentTarget=null}function Ws(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,h=a.currentTarget;if(a=a.listener,u!==l&&i.isPropagationStopped())break e;$s(i,a,h),l=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,h=a.currentTarget,a=a.listener,u!==l&&i.isPropagationStopped())break e;$s(i,a,h),l=u}}}if(jr)throw e=Wi,jr=!1,Wi=null,e}function he(e,t){var n=t[kl];n===void 0&&(n=t[kl]=new Set);var r=e+"__bubble";n.has(r)||(Hs(t,e,2,!1),n.add(r))}function ml(e,t,n){var r=0;t&&(r|=4),Hs(n,e,r,t)}var Vr="_reactListening"+Math.random().toString(36).slice(2);function nr(e){if(!e[Vr]){e[Vr]=!0,C.forEach(function(n){n!=="selectionchange"&&(Xc.has(n)||ml(n,!1,e),ml(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vr]||(t[Vr]=!0,ml("selectionchange",!1,t))}}function Hs(e,t,n,r){switch(ms(t)){case 1:var i=ac;break;case 4:i=uc;break;default:i=Ji}n=i.bind(null,t,n,e),i=void 0,!$i||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function hl(e,t,n,r,i){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Gt(a),o===null)return;if(u=o.tag,u===5||u===6){r=l=o;continue e}a=a.parentNode}}r=r.return}Go(function(){var h=l,x=Bi(n),k=[];e:{var g=Us.get(e);if(g!==void 0){var z=el,L=e;switch(e){case"keypress":if(Dr(n)===0)break e;case"keydown":case"keyup":z=Ec;break;case"focusin":L="focus",z=rl;break;case"focusout":L="blur",z=rl;break;case"beforeblur":case"afterblur":z=rl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=vs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=fc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=Nc;break;case Is:case Os:case As:z=hc;break;case Bs:z=_c;break;case"scroll":z=cc;break;case"wheel":z=Lc;break;case"copy":case"cut":case"paste":z=vc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=xs}var M=(t&4)!==0,je=!M&&e==="scroll",f=M?g!==null?g+"Capture":null:g;M=[];for(var c=h,m;c!==null;){m=c;var b=m.stateNode;if(m.tag===5&&b!==null&&(m=b,f!==null&&(b=On(c,f),b!=null&&M.push(rr(c,b,m)))),je)break;c=c.return}0<M.length&&(g=new z(g,L,null,n,x),k.push({event:g,listeners:M}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",z=e==="mouseout"||e==="pointerout",g&&n!==Ai&&(L=n.relatedTarget||n.fromElement)&&(Gt(L)||L[kt]))break e;if((z||g)&&(g=x.window===x?x:(g=x.ownerDocument)?g.defaultView||g.parentWindow:window,z?(L=n.relatedTarget||n.toElement,z=h,L=L?Gt(L):null,L!==null&&(je=Kt(L),L!==je||L.tag!==5&&L.tag!==6)&&(L=null)):(z=null,L=h),z!==L)){if(M=vs,b="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(M=xs,b="onPointerLeave",f="onPointerEnter",c="pointer"),je=z==null?g:xn(z),m=L==null?g:xn(L),g=new M(b,c+"leave",z,n,x),g.target=je,g.relatedTarget=m,b=null,Gt(x)===h&&(M=new M(f,c+"enter",L,n,x),M.target=m,M.relatedTarget=je,b=M),je=b,z&&L)t:{for(M=z,f=L,c=0,m=M;m;m=vn(m))c++;for(m=0,b=f;b;b=vn(b))m++;for(;0<c-m;)M=vn(M),c--;for(;0<m-c;)f=vn(f),m--;for(;c--;){if(M===f||f!==null&&M===f.alternate)break t;M=vn(M),f=vn(f)}M=null}else M=null;z!==null&&Ys(k,g,z,M,!1),L!==null&&je!==null&&Ys(k,je,L,M,!0)}}e:{if(g=h?xn(h):window,z=g.nodeName&&g.nodeName.toLowerCase(),z==="select"||z==="input"&&g.type==="file")var T=Oc;else if(js(g))if(Ns)T=Vc;else{T=Bc;var O=Ac}else(z=g.nodeName)&&z.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(T=Uc);if(T&&(T=T(e,h))){Cs(k,T,n,x);break e}O&&O(e,g,h),e==="focusout"&&(O=g._wrapperState)&&O.controlled&&g.type==="number"&&Ri(g,"number",g.value)}switch(O=h?xn(h):window,e){case"focusin":(js(O)||O.contentEditable==="true")&&(hn=O,ul=h,er=null);break;case"focusout":er=ul=hn=null;break;case"mousedown":cl=!0;break;case"contextmenu":case"mouseup":case"dragend":cl=!1,Fs(k,n,x);break;case"selectionchange":if(Hc)break;case"keydown":case"keyup":Fs(k,n,x)}var A;if(ll)e:{switch(e){case"compositionstart":var Y="onCompositionStart";break e;case"compositionend":Y="onCompositionEnd";break e;case"compositionupdate":Y="onCompositionUpdate";break e}Y=void 0}else mn?bs(e,n)&&(Y="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Y="onCompositionStart");Y&&(ws&&n.locale!=="ko"&&(mn||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&mn&&(A=hs()):(Tt=x,qi="value"in Tt?Tt.value:Tt.textContent,mn=!0)),O=$r(h,Y),0<O.length&&(Y=new ys(Y,e,null,n,x),k.push({event:Y,listeners:O}),A?Y.data=A:(A=Es(n),A!==null&&(Y.data=A)))),(A=Tc?Rc(e,n):Fc(e,n))&&(h=$r(h,"onBeforeInput"),0<h.length&&(x=new ys("onBeforeInput","beforeinput",null,n,x),k.push({event:x,listeners:h}),x.data=A))}Ws(k,t)})}function rr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $r(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=On(e,n),l!=null&&r.unshift(rr(e,l,i)),l=On(e,t),l!=null&&r.push(rr(e,l,i))),e=e.return}return r}function vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ys(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,h=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&h!==null&&(a=h,i?(u=On(n,l),u!=null&&o.unshift(rr(n,u,a))):i||(u=On(n,l),u!=null&&o.push(rr(n,u,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Kc=/\r\n?/g,Gc=/\u0000|\uFFFD/g;function Qs(e){return(typeof e=="string"?e:""+e).replace(Kc,`
`).replace(Gc,"")}function Wr(e,t,n){if(t=Qs(t),Qs(e)!==t&&n)throw Error(p(425))}function Hr(){}var gl=null,vl=null;function yl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xl=typeof setTimeout=="function"?setTimeout:void 0,Jc=typeof clearTimeout=="function"?clearTimeout:void 0,Xs=typeof Promise=="function"?Promise:void 0,Zc=typeof queueMicrotask=="function"?queueMicrotask:typeof Xs<"u"?function(e){return Xs.resolve(null).then(e).catch(qc)}:xl;function qc(e){setTimeout(function(){throw e})}function wl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qn(t)}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ks(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yn=Math.random().toString(36).slice(2),gt="__reactFiber$"+yn,ir="__reactProps$"+yn,kt="__reactContainer$"+yn,kl="__reactEvents$"+yn,ed="__reactListeners$"+yn,td="__reactHandles$"+yn;function Gt(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[kt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ks(e);e!==null;){if(n=e[gt])return n;e=Ks(e)}return t}e=n,n=e.parentNode}return null}function lr(e){return e=e[gt]||e[kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(p(33))}function Yr(e){return e[ir]||null}var Sl=[],wn=-1;function Dt(e){return{current:e}}function ge(e){0>wn||(e.current=Sl[wn],Sl[wn]=null,wn--)}function me(e,t){wn++,Sl[wn]=e.current,e.current=t}var It={},Ie=Dt(It),We=Dt(!1),Jt=It;function kn(e,t){var n=e.type.contextTypes;if(!n)return It;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function He(e){return e=e.childContextTypes,e!=null}function Qr(){ge(We),ge(Ie)}function Gs(e,t,n){if(Ie.current!==It)throw Error(p(168));me(Ie,t),me(We,n)}function Js(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(p(108,pe(e)||"Unknown",i));return j({},n,r)}function Xr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||It,Jt=Ie.current,me(Ie,e),me(We,We.current),!0}function Zs(e,t,n){var r=e.stateNode;if(!r)throw Error(p(169));n?(e=Js(e,t,Jt),r.__reactInternalMemoizedMergedChildContext=e,ge(We),ge(Ie),me(Ie,e)):ge(We),me(We,n)}var St=null,Kr=!1,bl=!1;function qs(e){St===null?St=[e]:St.push(e)}function nd(e){Kr=!0,qs(e)}function Ot(){if(!bl&&St!==null){bl=!0;var e=0,t=de;try{var n=St;for(de=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}St=null,Kr=!1}catch(i){throw St!==null&&(St=St.slice(e+1)),ts(Hi,Ot),i}finally{de=t,bl=!1}}return null}var Sn=[],bn=0,Gr=null,Jr=0,nt=[],rt=0,Zt=null,bt=1,Et="";function qt(e,t){Sn[bn++]=Jr,Sn[bn++]=Gr,Gr=e,Jr=t}function ea(e,t,n){nt[rt++]=bt,nt[rt++]=Et,nt[rt++]=Zt,Zt=e;var r=bt;e=Et;var i=32-at(r)-1;r&=~(1<<i),n+=1;var l=32-at(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,bt=1<<32-at(t)+i|n<<i|r,Et=l+e}else bt=1<<l|n<<i|r,Et=e}function El(e){e.return!==null&&(qt(e,1),ea(e,1,0))}function jl(e){for(;e===Gr;)Gr=Sn[--bn],Sn[bn]=null,Jr=Sn[--bn],Sn[bn]=null;for(;e===Zt;)Zt=nt[--rt],nt[rt]=null,Et=nt[--rt],nt[rt]=null,bt=nt[--rt],nt[rt]=null}var Ze=null,qe=null,ye=!1,ct=null;function ta(e,t){var n=st(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function na(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ze=e,qe=Ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ze=e,qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zt!==null?{id:bt,overflow:Et}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=st(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ze=e,qe=null,!0):!1;default:return!1}}function Cl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Nl(e){if(ye){var t=qe;if(t){var n=t;if(!na(e,t)){if(Cl(e))throw Error(p(418));t=Ft(n.nextSibling);var r=Ze;t&&na(e,t)?ta(r,n):(e.flags=e.flags&-4097|2,ye=!1,Ze=e)}}else{if(Cl(e))throw Error(p(418));e.flags=e.flags&-4097|2,ye=!1,Ze=e}}}function ra(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ze=e}function Zr(e){if(e!==Ze)return!1;if(!ye)return ra(e),ye=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yl(e.type,e.memoizedProps)),t&&(t=qe)){if(Cl(e))throw ia(),Error(p(418));for(;t;)ta(e,t),t=Ft(t.nextSibling)}if(ra(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){qe=Ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}qe=null}}else qe=Ze?Ft(e.stateNode.nextSibling):null;return!0}function ia(){for(var e=qe;e;)e=Ft(e.nextSibling)}function En(){qe=Ze=null,ye=!1}function zl(e){ct===null?ct=[e]:ct.push(e)}var rd=I.ReactCurrentBatchConfig;function or(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(p(309));var r=n.stateNode}if(!r)throw Error(p(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var a=i.refs;o===null?delete a[l]:a[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(p(284));if(!n._owner)throw Error(p(290,e))}return e}function qr(e,t){throw e=Object.prototype.toString.call(t),Error(p(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function la(e){var t=e._init;return t(e._payload)}function oa(e){function t(f,c){if(e){var m=f.deletions;m===null?(f.deletions=[c],f.flags|=16):m.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=Yt(f,c),f.index=0,f.sibling=null,f}function l(f,c,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<c?(f.flags|=2,c):m):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,m,b){return c===null||c.tag!==6?(c=wo(m,f.mode,b),c.return=f,c):(c=i(c,m),c.return=f,c)}function u(f,c,m,b){var T=m.type;return T===fe?x(f,c,m.props.children,b,m.key):c!==null&&(c.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===H&&la(T)===c.type)?(b=i(c,m.props),b.ref=or(f,c,m),b.return=f,b):(b=bi(m.type,m.key,m.props,null,f.mode,b),b.ref=or(f,c,m),b.return=f,b)}function h(f,c,m,b){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=ko(m,f.mode,b),c.return=f,c):(c=i(c,m.children||[]),c.return=f,c)}function x(f,c,m,b,T){return c===null||c.tag!==7?(c=an(m,f.mode,b,T),c.return=f,c):(c=i(c,m),c.return=f,c)}function k(f,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=wo(""+c,f.mode,m),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ue:return m=bi(c.type,c.key,c.props,null,f.mode,m),m.ref=or(f,null,c),m.return=f,m;case V:return c=ko(c,f.mode,m),c.return=f,c;case H:var b=c._init;return k(f,b(c._payload),m)}if(Fn(c)||F(c))return c=an(c,f.mode,m,null),c.return=f,c;qr(f,c)}return null}function g(f,c,m,b){var T=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:a(f,c,""+m,b);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ue:return m.key===T?u(f,c,m,b):null;case V:return m.key===T?h(f,c,m,b):null;case H:return T=m._init,g(f,c,T(m._payload),b)}if(Fn(m)||F(m))return T!==null?null:x(f,c,m,b,null);qr(f,m)}return null}function z(f,c,m,b,T){if(typeof b=="string"&&b!==""||typeof b=="number")return f=f.get(m)||null,a(c,f,""+b,T);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ue:return f=f.get(b.key===null?m:b.key)||null,u(c,f,b,T);case V:return f=f.get(b.key===null?m:b.key)||null,h(c,f,b,T);case H:var O=b._init;return z(f,c,m,O(b._payload),T)}if(Fn(b)||F(b))return f=f.get(m)||null,x(c,f,b,T,null);qr(c,b)}return null}function L(f,c,m,b){for(var T=null,O=null,A=c,Y=c=0,Me=null;A!==null&&Y<m.length;Y++){A.index>Y?(Me=A,A=null):Me=A.sibling;var ae=g(f,A,m[Y],b);if(ae===null){A===null&&(A=Me);break}e&&A&&ae.alternate===null&&t(f,A),c=l(ae,c,Y),O===null?T=ae:O.sibling=ae,O=ae,A=Me}if(Y===m.length)return n(f,A),ye&&qt(f,Y),T;if(A===null){for(;Y<m.length;Y++)A=k(f,m[Y],b),A!==null&&(c=l(A,c,Y),O===null?T=A:O.sibling=A,O=A);return ye&&qt(f,Y),T}for(A=r(f,A);Y<m.length;Y++)Me=z(A,f,Y,m[Y],b),Me!==null&&(e&&Me.alternate!==null&&A.delete(Me.key===null?Y:Me.key),c=l(Me,c,Y),O===null?T=Me:O.sibling=Me,O=Me);return e&&A.forEach(function(Qt){return t(f,Qt)}),ye&&qt(f,Y),T}function M(f,c,m,b){var T=F(m);if(typeof T!="function")throw Error(p(150));if(m=T.call(m),m==null)throw Error(p(151));for(var O=T=null,A=c,Y=c=0,Me=null,ae=m.next();A!==null&&!ae.done;Y++,ae=m.next()){A.index>Y?(Me=A,A=null):Me=A.sibling;var Qt=g(f,A,ae.value,b);if(Qt===null){A===null&&(A=Me);break}e&&A&&Qt.alternate===null&&t(f,A),c=l(Qt,c,Y),O===null?T=Qt:O.sibling=Qt,O=Qt,A=Me}if(ae.done)return n(f,A),ye&&qt(f,Y),T;if(A===null){for(;!ae.done;Y++,ae=m.next())ae=k(f,ae.value,b),ae!==null&&(c=l(ae,c,Y),O===null?T=ae:O.sibling=ae,O=ae);return ye&&qt(f,Y),T}for(A=r(f,A);!ae.done;Y++,ae=m.next())ae=z(A,f,Y,ae.value,b),ae!==null&&(e&&ae.alternate!==null&&A.delete(ae.key===null?Y:ae.key),c=l(ae,c,Y),O===null?T=ae:O.sibling=ae,O=ae);return e&&A.forEach(function(Dd){return t(f,Dd)}),ye&&qt(f,Y),T}function je(f,c,m,b){if(typeof m=="object"&&m!==null&&m.type===fe&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ue:e:{for(var T=m.key,O=c;O!==null;){if(O.key===T){if(T=m.type,T===fe){if(O.tag===7){n(f,O.sibling),c=i(O,m.props.children),c.return=f,f=c;break e}}else if(O.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===H&&la(T)===O.type){n(f,O.sibling),c=i(O,m.props),c.ref=or(f,O,m),c.return=f,f=c;break e}n(f,O);break}else t(f,O);O=O.sibling}m.type===fe?(c=an(m.props.children,f.mode,b,m.key),c.return=f,f=c):(b=bi(m.type,m.key,m.props,null,f.mode,b),b.ref=or(f,c,m),b.return=f,f=b)}return o(f);case V:e:{for(O=m.key;c!==null;){if(c.key===O)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(f,c.sibling),c=i(c,m.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=ko(m,f.mode,b),c.return=f,f=c}return o(f);case H:return O=m._init,je(f,c,O(m._payload),b)}if(Fn(m))return L(f,c,m,b);if(F(m))return M(f,c,m,b);qr(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,m),c.return=f,f=c):(n(f,c),c=wo(m,f.mode,b),c.return=f,f=c),o(f)):n(f,c)}return je}var jn=oa(!0),sa=oa(!1),ei=Dt(null),ti=null,Cn=null,_l=null;function Pl(){_l=Cn=ti=null}function Ll(e){var t=ei.current;ge(ei),e._currentValue=t}function Ml(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Nn(e,t){ti=e,_l=Cn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ye=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(_l!==e)if(e={context:e,memoizedValue:t,next:null},Cn===null){if(ti===null)throw Error(p(308));Cn=e,ti.dependencies={lanes:0,firstContext:e}}else Cn=Cn.next=e;return t}var en=null;function Tl(e){en===null?en=[e]:en.push(e)}function aa(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Tl(t)):(n.next=i.next,i.next=n),t.interleaved=n,jt(e,r)}function jt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var At=!1;function Rl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ua(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ie&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,jt(e,n)}return i=r.interleaved,i===null?(t.next=t,Tl(r)):(t.next=i.next,i.next=t),r.interleaved=t,jt(e,n)}function ni(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xi(e,n)}}function ca(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ri(e,t,n,r){var i=e.updateQueue;At=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,h=u.next;u.next=null,o===null?l=h:o.next=h,o=u;var x=e.alternate;x!==null&&(x=x.updateQueue,a=x.lastBaseUpdate,a!==o&&(a===null?x.firstBaseUpdate=h:a.next=h,x.lastBaseUpdate=u))}if(l!==null){var k=i.baseState;o=0,x=h=u=null,a=l;do{var g=a.lane,z=a.eventTime;if((r&g)===g){x!==null&&(x=x.next={eventTime:z,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var L=e,M=a;switch(g=t,z=n,M.tag){case 1:if(L=M.payload,typeof L=="function"){k=L.call(z,k,g);break e}k=L;break e;case 3:L.flags=L.flags&-65537|128;case 0:if(L=M.payload,g=typeof L=="function"?L.call(z,k,g):L,g==null)break e;k=j({},k,g);break e;case 2:At=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else z={eventTime:z,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},x===null?(h=x=z,u=k):x=x.next=z,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(x===null&&(u=k),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=x,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);rn|=o,e.lanes=o,e.memoizedState=k}}function da(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(p(191,i));i.call(r)}}}var sr={},vt=Dt(sr),ar=Dt(sr),ur=Dt(sr);function tn(e){if(e===sr)throw Error(p(174));return e}function Fl(e,t){switch(me(ur,t),me(ar,e),me(vt,sr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Di(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Di(t,e)}ge(vt),me(vt,t)}function zn(){ge(vt),ge(ar),ge(ur)}function fa(e){tn(ur.current);var t=tn(vt.current),n=Di(t,e.type);t!==n&&(me(ar,e),me(vt,n))}function Dl(e){ar.current===e&&(ge(vt),ge(ar))}var xe=Dt(0);function ii(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Il=[];function Ol(){for(var e=0;e<Il.length;e++)Il[e]._workInProgressVersionPrimary=null;Il.length=0}var li=I.ReactCurrentDispatcher,Al=I.ReactCurrentBatchConfig,nn=0,we=null,ze=null,Pe=null,oi=!1,cr=!1,dr=0,id=0;function Oe(){throw Error(p(321))}function Bl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ut(e[n],t[n]))return!1;return!0}function Ul(e,t,n,r,i,l){if(nn=l,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,li.current=e===null||e.memoizedState===null?ad:ud,e=n(r,i),cr){l=0;do{if(cr=!1,dr=0,25<=l)throw Error(p(301));l+=1,Pe=ze=null,t.updateQueue=null,li.current=cd,e=n(r,i)}while(cr)}if(li.current=ui,t=ze!==null&&ze.next!==null,nn=0,Pe=ze=we=null,oi=!1,t)throw Error(p(300));return e}function Vl(){var e=dr!==0;return dr=0,e}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?we.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function lt(){if(ze===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=Pe===null?we.memoizedState:Pe.next;if(t!==null)Pe=t,ze=e;else{if(e===null)throw Error(p(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Pe===null?we.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function fr(e,t){return typeof t=="function"?t(e):t}function $l(e){var t=lt(),n=t.queue;if(n===null)throw Error(p(311));n.lastRenderedReducer=e;var r=ze,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var a=o=null,u=null,h=l;do{var x=h.lane;if((nn&x)===x)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:e(r,h.action);else{var k={lane:x,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(a=u=k,o=r):u=u.next=k,we.lanes|=x,rn|=x}h=h.next}while(h!==null&&h!==l);u===null?o=r:u.next=a,ut(r,t.memoizedState)||(Ye=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,we.lanes|=l,rn|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Wl(e){var t=lt(),n=t.queue;if(n===null)throw Error(p(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);ut(l,t.memoizedState)||(Ye=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function pa(){}function ma(e,t){var n=we,r=lt(),i=t(),l=!ut(r.memoizedState,i);if(l&&(r.memoizedState=i,Ye=!0),r=r.queue,Hl(va.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Pe!==null&&Pe.memoizedState.tag&1){if(n.flags|=2048,pr(9,ga.bind(null,n,r,i,t),void 0,null),Le===null)throw Error(p(349));(nn&30)!==0||ha(n,t,i)}return i}function ha(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ga(e,t,n,r){t.value=n,t.getSnapshot=r,ya(t)&&xa(e)}function va(e,t,n){return n(function(){ya(t)&&xa(e)})}function ya(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ut(e,n)}catch{return!0}}function xa(e){var t=jt(e,1);t!==null&&mt(t,e,1,-1)}function wa(e){var t=yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fr,lastRenderedState:e},t.queue=e,e=e.dispatch=sd.bind(null,we,e),[t.memoizedState,e]}function pr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ka(){return lt().memoizedState}function si(e,t,n,r){var i=yt();we.flags|=e,i.memoizedState=pr(1|t,n,void 0,r===void 0?null:r)}function ai(e,t,n,r){var i=lt();r=r===void 0?null:r;var l=void 0;if(ze!==null){var o=ze.memoizedState;if(l=o.destroy,r!==null&&Bl(r,o.deps)){i.memoizedState=pr(t,n,l,r);return}}we.flags|=e,i.memoizedState=pr(1|t,n,l,r)}function Sa(e,t){return si(8390656,8,e,t)}function Hl(e,t){return ai(2048,8,e,t)}function ba(e,t){return ai(4,2,e,t)}function Ea(e,t){return ai(4,4,e,t)}function ja(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ca(e,t,n){return n=n!=null?n.concat([e]):null,ai(4,4,ja.bind(null,t,e),n)}function Yl(){}function Na(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function za(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function _a(e,t,n){return(nn&21)===0?(e.baseState&&(e.baseState=!1,Ye=!0),e.memoizedState=n):(ut(n,t)||(n=ls(),we.lanes|=n,rn|=n,e.baseState=!0),t)}function ld(e,t){var n=de;de=n!==0&&4>n?n:4,e(!0);var r=Al.transition;Al.transition={};try{e(!1),t()}finally{de=n,Al.transition=r}}function Pa(){return lt().memoizedState}function od(e,t,n){var r=Wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},La(e))Ma(t,n);else if(n=aa(e,t,n,r),n!==null){var i=Ve();mt(n,e,r,i),Ta(n,t,r)}}function sd(e,t,n){var r=Wt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(La(e))Ma(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,a=l(o,n);if(i.hasEagerState=!0,i.eagerState=a,ut(a,o)){var u=t.interleaved;u===null?(i.next=i,Tl(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=aa(e,t,i,r),n!==null&&(i=Ve(),mt(n,e,r,i),Ta(n,t,r))}}function La(e){var t=e.alternate;return e===we||t!==null&&t===we}function Ma(e,t){cr=oi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ta(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xi(e,n)}}var ui={readContext:it,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},ad={readContext:it,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:Sa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,si(4194308,4,ja.bind(null,t,e),n)},useLayoutEffect:function(e,t){return si(4194308,4,e,t)},useInsertionEffect:function(e,t){return si(4,2,e,t)},useMemo:function(e,t){var n=yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=od.bind(null,we,e),[r.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:wa,useDebugValue:Yl,useDeferredValue:function(e){return yt().memoizedState=e},useTransition:function(){var e=wa(!1),t=e[0];return e=ld.bind(null,e[1]),yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=we,i=yt();if(ye){if(n===void 0)throw Error(p(407));n=n()}else{if(n=t(),Le===null)throw Error(p(349));(nn&30)!==0||ha(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Sa(va.bind(null,r,l,e),[e]),r.flags|=2048,pr(9,ga.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=yt(),t=Le.identifierPrefix;if(ye){var n=Et,r=bt;n=(r&~(1<<32-at(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=dr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=id++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ud={readContext:it,useCallback:Na,useContext:it,useEffect:Hl,useImperativeHandle:Ca,useInsertionEffect:ba,useLayoutEffect:Ea,useMemo:za,useReducer:$l,useRef:ka,useState:function(){return $l(fr)},useDebugValue:Yl,useDeferredValue:function(e){var t=lt();return _a(t,ze.memoizedState,e)},useTransition:function(){var e=$l(fr)[0],t=lt().memoizedState;return[e,t]},useMutableSource:pa,useSyncExternalStore:ma,useId:Pa,unstable_isNewReconciler:!1},cd={readContext:it,useCallback:Na,useContext:it,useEffect:Hl,useImperativeHandle:Ca,useInsertionEffect:ba,useLayoutEffect:Ea,useMemo:za,useReducer:Wl,useRef:ka,useState:function(){return Wl(fr)},useDebugValue:Yl,useDeferredValue:function(e){var t=lt();return ze===null?t.memoizedState=e:_a(t,ze.memoizedState,e)},useTransition:function(){var e=Wl(fr)[0],t=lt().memoizedState;return[e,t]},useMutableSource:pa,useSyncExternalStore:ma,useId:Pa,unstable_isNewReconciler:!1};function dt(e,t){if(e&&e.defaultProps){t=j({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ql(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:j({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ci={isMounted:function(e){return(e=e._reactInternals)?Kt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ve(),i=Wt(e),l=Ct(r,i);l.payload=t,n!=null&&(l.callback=n),t=Bt(e,l,i),t!==null&&(mt(t,e,i,r),ni(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ve(),i=Wt(e),l=Ct(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Bt(e,l,i),t!==null&&(mt(t,e,i,r),ni(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ve(),r=Wt(e),i=Ct(n,r);i.tag=2,t!=null&&(i.callback=t),t=Bt(e,i,r),t!==null&&(mt(t,e,r,n),ni(t,e,r))}};function Ra(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!qn(n,r)||!qn(i,l):!0}function Fa(e,t,n){var r=!1,i=It,l=t.contextType;return typeof l=="object"&&l!==null?l=it(l):(i=He(t)?Jt:Ie.current,r=t.contextTypes,l=(r=r!=null)?kn(e,i):It),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ci,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Da(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ci.enqueueReplaceState(t,t.state,null)}function Xl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Rl(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=it(l):(l=He(t)?Jt:Ie.current,i.context=kn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Ql(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ci.enqueueReplaceState(i,i.state,null),ri(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function _n(e,t){try{var n="",r=t;do n+=oe(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function Kl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Gl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var dd=typeof WeakMap=="function"?WeakMap:Map;function Ia(e,t,n){n=Ct(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){vi||(vi=!0,fo=r),Gl(e,t)},n}function Oa(e,t,n){n=Ct(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Gl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Gl(e,t),typeof r!="function"&&(Vt===null?Vt=new Set([this]):Vt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Aa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new dd;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=jd.bind(null,e,t,n),t.then(e,e))}function Ba(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ua(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ct(-1,1),t.tag=2,Bt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var fd=I.ReactCurrentOwner,Ye=!1;function Ue(e,t,n,r){t.child=e===null?sa(t,null,n,r):jn(t,e.child,n,r)}function Va(e,t,n,r,i){n=n.render;var l=t.ref;return Nn(t,i),r=Ul(e,t,n,r,l,i),n=Vl(),e!==null&&!Ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Nt(e,t,i)):(ye&&n&&El(t),t.flags|=1,Ue(e,t,r,i),t.child)}function $a(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!xo(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Wa(e,t,l,r,i)):(e=bi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&i)===0){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:qn,n(o,r)&&e.ref===t.ref)return Nt(e,t,i)}return t.flags|=1,e=Yt(l,r),e.ref=t.ref,e.return=t,t.child=e}function Wa(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(qn(l,r)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=r=l,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Ye=!0);else return t.lanes=e.lanes,Nt(e,t,i)}return Jl(e,t,n,r,i)}function Ha(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(Ln,et),et|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,me(Ln,et),et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,me(Ln,et),et|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,me(Ln,et),et|=r;return Ue(e,t,i,n),t.child}function Ya(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Jl(e,t,n,r,i){var l=He(n)?Jt:Ie.current;return l=kn(t,l),Nn(t,i),n=Ul(e,t,n,r,l,i),r=Vl(),e!==null&&!Ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Nt(e,t,i)):(ye&&r&&El(t),t.flags|=1,Ue(e,t,n,i),t.child)}function Qa(e,t,n,r,i){if(He(n)){var l=!0;Xr(t)}else l=!1;if(Nn(t,i),t.stateNode===null)fi(e,t),Fa(t,n,r),Xl(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=it(h):(h=He(n)?Jt:Ie.current,h=kn(t,h));var x=n.getDerivedStateFromProps,k=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function";k||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==h)&&Da(t,o,r,h),At=!1;var g=t.memoizedState;o.state=g,ri(t,r,o,i),u=t.memoizedState,a!==r||g!==u||We.current||At?(typeof x=="function"&&(Ql(t,n,x,r),u=t.memoizedState),(a=At||Ra(t,n,a,r,g,u,h))?(k||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=h,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ua(e,t),a=t.memoizedProps,h=t.type===t.elementType?a:dt(t.type,a),o.props=h,k=t.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=it(u):(u=He(n)?Jt:Ie.current,u=kn(t,u));var z=n.getDerivedStateFromProps;(x=typeof z=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==k||g!==u)&&Da(t,o,r,u),At=!1,g=t.memoizedState,o.state=g,ri(t,r,o,i);var L=t.memoizedState;a!==k||g!==L||We.current||At?(typeof z=="function"&&(Ql(t,n,z,r),L=t.memoizedState),(h=At||Ra(t,n,h,r,g,L,u)||!1)?(x||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,L,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,L,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=L),o.props=r,o.state=L,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Zl(e,t,n,r,l,i)}function Zl(e,t,n,r,i,l){Ya(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Zs(t,n,!1),Nt(e,t,l);r=t.stateNode,fd.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=jn(t,e.child,null,l),t.child=jn(t,null,a,l)):Ue(e,t,a,l),t.memoizedState=r.state,i&&Zs(t,n,!0),t.child}function Xa(e){var t=e.stateNode;t.pendingContext?Gs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gs(e,t.context,!1),Fl(e,t.containerInfo)}function Ka(e,t,n,r,i){return En(),zl(i),t.flags|=256,Ue(e,t,n,r),t.child}var ql={dehydrated:null,treeContext:null,retryLane:0};function eo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ga(e,t,n){var r=t.pendingProps,i=xe.current,l=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),me(xe,i&1),e===null)return Nl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Ei(o,r,0,null),e=an(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=eo(n),t.memoizedState=ql,e):to(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return pd(e,t,o,r,a,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Yt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?l=Yt(a,l):(l=an(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?eo(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=ql,r}return l=e.child,e=l.sibling,r=Yt(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function to(e,t){return t=Ei({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function di(e,t,n,r){return r!==null&&zl(r),jn(t,e.child,null,n),e=to(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pd(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=Kl(Error(p(422))),di(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=Ei({mode:"visible",children:r.children},i,0,null),l=an(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&jn(t,e.child,null,o),t.child.memoizedState=eo(o),t.memoizedState=ql,l);if((t.mode&1)===0)return di(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(p(419)),r=Kl(l,r,void 0),di(e,t,o,r)}if(a=(o&e.childLanes)!==0,Ye||a){if(r=Le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,jt(e,i),mt(r,e,i,-1))}return yo(),r=Kl(Error(p(421))),di(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Cd.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,qe=Ft(i.nextSibling),Ze=t,ye=!0,ct=null,e!==null&&(nt[rt++]=bt,nt[rt++]=Et,nt[rt++]=Zt,bt=e.id,Et=e.overflow,Zt=t),t=to(t,r.children),t.flags|=4096,t)}function Ja(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ml(e.return,t,n)}function no(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function Za(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(Ue(e,t,r.children,n),r=xe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ja(e,n,t);else if(e.tag===19)Ja(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(me(xe,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ii(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),no(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ii(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}no(t,!0,n,null,l);break;case"together":no(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(p(153));if(t.child!==null){for(e=t.child,n=Yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function md(e,t,n){switch(t.tag){case 3:Xa(t),En();break;case 5:fa(t);break;case 1:He(t.type)&&Xr(t);break;case 4:Fl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;me(ei,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(me(xe,xe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Ga(e,t,n):(me(xe,xe.current&1),e=Nt(e,t,n),e!==null?e.sibling:null);me(xe,xe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Za(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(xe,xe.current),r)break;return null;case 22:case 23:return t.lanes=0,Ha(e,t,n)}return Nt(e,t,n)}var qa,ro,eu,tu;qa=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ro=function(){},eu=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,tn(vt.current);var l=null;switch(n){case"input":i=Mi(e,i),r=Mi(e,r),l=[];break;case"select":i=j({},i,{value:void 0}),r=j({},r,{value:void 0}),l=[];break;case"textarea":i=Fi(e,i),r=Fi(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Hr)}Ii(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var a=i[h];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(_.hasOwnProperty(h)?l||(l=[]):(l=l||[]).push(h,null));for(h in r){var u=r[h];if(a=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==a&&(u!=null||a!=null))if(h==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(l||(l=[]),l.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(l=l||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(_.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&he("scroll",e),l||a===u||(l=[])):(l=l||[]).push(h,u))}n&&(l=l||[]).push("style",n);var h=l;(t.updateQueue=h)&&(t.flags|=4)}},tu=function(e,t,n,r){n!==r&&(t.flags|=4)};function mr(e,t){if(!ye)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hd(e,t,n){var r=t.pendingProps;switch(jl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return He(t.type)&&Qr(),Ae(t),null;case 3:return r=t.stateNode,zn(),ge(We),ge(Ie),Ol(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ct!==null&&(ho(ct),ct=null))),ro(e,t),Ae(t),null;case 5:Dl(t);var i=tn(ur.current);if(n=t.type,e!==null&&t.stateNode!=null)eu(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(p(166));return Ae(t),null}if(e=tn(vt.current),Zr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[gt]=t,r[ir]=l,e=(t.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(i=0;i<tr.length;i++)he(tr[i],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":Fo(r,l),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},he("invalid",r);break;case"textarea":Oo(r,l),he("invalid",r)}Ii(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Wr(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Wr(r.textContent,a,e),i=["children",""+a]):_.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&he("scroll",r)}switch(n){case"input":kr(r),Io(r,l,!0);break;case"textarea":kr(r),Bo(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Hr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Uo(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[gt]=t,e[ir]=r,qa(e,t,!1,!1),t.stateNode=e;e:{switch(o=Oi(n,r),n){case"dialog":he("cancel",e),he("close",e),i=r;break;case"iframe":case"object":case"embed":he("load",e),i=r;break;case"video":case"audio":for(i=0;i<tr.length;i++)he(tr[i],e);i=r;break;case"source":he("error",e),i=r;break;case"img":case"image":case"link":he("error",e),he("load",e),i=r;break;case"details":he("toggle",e),i=r;break;case"input":Fo(e,r),i=Mi(e,r),he("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=j({},r,{value:void 0}),he("invalid",e);break;case"textarea":Oo(e,r),i=Fi(e,r),he("invalid",e);break;default:i=r}Ii(n,i),a=i;for(l in a)if(a.hasOwnProperty(l)){var u=a[l];l==="style"?Wo(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Vo(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Dn(e,u):typeof u=="number"&&Dn(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(_.hasOwnProperty(l)?u!=null&&l==="onScroll"&&he("scroll",e):u!=null&&Q(e,l,u,o))}switch(n){case"input":kr(e),Io(e,r,!1);break;case"textarea":kr(e),Bo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ce(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?un(e,!!r.multiple,l,!1):r.defaultValue!=null&&un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Hr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ae(t),null;case 6:if(e&&t.stateNode!=null)tu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(p(166));if(n=tn(ur.current),tn(vt.current),Zr(t)){if(r=t.stateNode,n=t.memoizedProps,r[gt]=t,(l=r.nodeValue!==n)&&(e=Ze,e!==null))switch(e.tag){case 3:Wr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gt]=t,t.stateNode=r}return Ae(t),null;case 13:if(ge(xe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ye&&qe!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ia(),En(),t.flags|=98560,l=!1;else if(l=Zr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(p(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(p(317));l[gt]=t}else En(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ae(t),l=!1}else ct!==null&&(ho(ct),ct=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(xe.current&1)!==0?_e===0&&(_e=3):yo())),t.updateQueue!==null&&(t.flags|=4),Ae(t),null);case 4:return zn(),ro(e,t),e===null&&nr(t.stateNode.containerInfo),Ae(t),null;case 10:return Ll(t.type._context),Ae(t),null;case 17:return He(t.type)&&Qr(),Ae(t),null;case 19:if(ge(xe),l=t.memoizedState,l===null)return Ae(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)mr(l,!1);else{if(_e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=ii(e),o!==null){for(t.flags|=128,mr(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return me(xe,xe.current&1|2),t.child}e=e.sibling}l.tail!==null&&Ee()>Mn&&(t.flags|=128,r=!0,mr(l,!1),t.lanes=4194304)}else{if(!r)if(e=ii(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),mr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!ye)return Ae(t),null}else 2*Ee()-l.renderingStartTime>Mn&&n!==1073741824&&(t.flags|=128,r=!0,mr(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ee(),t.sibling=null,n=xe.current,me(xe,r?n&1|2:n&1),t):(Ae(t),null);case 22:case 23:return vo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(et&1073741824)!==0&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),null;case 24:return null;case 25:return null}throw Error(p(156,t.tag))}function gd(e,t){switch(jl(t),t.tag){case 1:return He(t.type)&&Qr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zn(),ge(We),ge(Ie),Ol(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Dl(t),null;case 13:if(ge(xe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(p(340));En()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ge(xe),null;case 4:return zn(),null;case 10:return Ll(t.type._context),null;case 22:case 23:return vo(),null;case 24:return null;default:return null}}var pi=!1,Be=!1,vd=typeof WeakSet=="function"?WeakSet:Set,P=null;function Pn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(e,t,r)}else n.current=null}function io(e,t,n){try{n()}catch(r){Se(e,t,r)}}var nu=!1;function yd(e,t){if(gl=Tr,e=Rs(),al(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,h=0,x=0,k=e,g=null;t:for(;;){for(var z;k!==n||i!==0&&k.nodeType!==3||(a=o+i),k!==l||r!==0&&k.nodeType!==3||(u=o+r),k.nodeType===3&&(o+=k.nodeValue.length),(z=k.firstChild)!==null;)g=k,k=z;for(;;){if(k===e)break t;if(g===n&&++h===i&&(a=o),g===l&&++x===r&&(u=o),(z=k.nextSibling)!==null)break;k=g,g=k.parentNode}k=z}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(vl={focusedElem:e,selectionRange:n},Tr=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var L=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(L!==null){var M=L.memoizedProps,je=L.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?M:dt(t.type,M),je);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163))}}catch(b){Se(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return L=nu,nu=!1,L}function hr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&io(t,n,l)}i=i.next}while(i!==r)}}function mi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function lo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ru(e){var t=e.alternate;t!==null&&(e.alternate=null,ru(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[gt],delete t[ir],delete t[kl],delete t[ed],delete t[td])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function iu(e){return e.tag===5||e.tag===3||e.tag===4}function lu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||iu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function oo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Hr));else if(r!==4&&(e=e.child,e!==null))for(oo(e,t,n),e=e.sibling;e!==null;)oo(e,t,n),e=e.sibling}function so(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(so(e,t,n),e=e.sibling;e!==null;)so(e,t,n),e=e.sibling}var Te=null,ft=!1;function Ut(e,t,n){for(n=n.child;n!==null;)ou(e,t,n),n=n.sibling}function ou(e,t,n){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(Nr,n)}catch{}switch(n.tag){case 5:Be||Pn(n,t);case 6:var r=Te,i=ft;Te=null,Ut(e,t,n),Te=r,ft=i,Te!==null&&(ft?(e=Te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Te.removeChild(n.stateNode));break;case 18:Te!==null&&(ft?(e=Te,n=n.stateNode,e.nodeType===8?wl(e.parentNode,n):e.nodeType===1&&wl(e,n),Qn(e)):wl(Te,n.stateNode));break;case 4:r=Te,i=ft,Te=n.stateNode.containerInfo,ft=!0,Ut(e,t,n),Te=r,ft=i;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&((l&2)!==0||(l&4)!==0)&&io(n,t,o),i=i.next}while(i!==r)}Ut(e,t,n);break;case 1:if(!Be&&(Pn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Se(n,t,a)}Ut(e,t,n);break;case 21:Ut(e,t,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,Ut(e,t,n),Be=r):Ut(e,t,n);break;default:Ut(e,t,n)}}function su(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new vd),t.forEach(function(r){var i=Nd.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function pt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:Te=a.stateNode,ft=!1;break e;case 3:Te=a.stateNode.containerInfo,ft=!0;break e;case 4:Te=a.stateNode.containerInfo,ft=!0;break e}a=a.return}if(Te===null)throw Error(p(160));ou(l,o,i),Te=null,ft=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Se(i,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)au(t,e),t=t.sibling}function au(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pt(t,e),xt(e),r&4){try{hr(3,e,e.return),mi(3,e)}catch(M){Se(e,e.return,M)}try{hr(5,e,e.return)}catch(M){Se(e,e.return,M)}}break;case 1:pt(t,e),xt(e),r&512&&n!==null&&Pn(n,n.return);break;case 5:if(pt(t,e),xt(e),r&512&&n!==null&&Pn(n,n.return),e.flags&32){var i=e.stateNode;try{Dn(i,"")}catch(M){Se(e,e.return,M)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Do(i,l),Oi(a,o);var h=Oi(a,l);for(o=0;o<u.length;o+=2){var x=u[o],k=u[o+1];x==="style"?Wo(i,k):x==="dangerouslySetInnerHTML"?Vo(i,k):x==="children"?Dn(i,k):Q(i,x,k,h)}switch(a){case"input":Ti(i,l);break;case"textarea":Ao(i,l);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var z=l.value;z!=null?un(i,!!l.multiple,z,!1):g!==!!l.multiple&&(l.defaultValue!=null?un(i,!!l.multiple,l.defaultValue,!0):un(i,!!l.multiple,l.multiple?[]:"",!1))}i[ir]=l}catch(M){Se(e,e.return,M)}}break;case 6:if(pt(t,e),xt(e),r&4){if(e.stateNode===null)throw Error(p(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(M){Se(e,e.return,M)}}break;case 3:if(pt(t,e),xt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qn(t.containerInfo)}catch(M){Se(e,e.return,M)}break;case 4:pt(t,e),xt(e);break;case 13:pt(t,e),xt(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(co=Ee())),r&4&&su(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(Be=(h=Be)||x,pt(t,e),Be=h):pt(t,e),xt(e),r&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!x&&(e.mode&1)!==0)for(P=e,x=e.child;x!==null;){for(k=P=x;P!==null;){switch(g=P,z=g.child,g.tag){case 0:case 11:case 14:case 15:hr(4,g,g.return);break;case 1:Pn(g,g.return);var L=g.stateNode;if(typeof L.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,L.props=t.memoizedProps,L.state=t.memoizedState,L.componentWillUnmount()}catch(M){Se(r,n,M)}}break;case 5:Pn(g,g.return);break;case 22:if(g.memoizedState!==null){du(k);continue}}z!==null?(z.return=g,P=z):du(k)}x=x.sibling}e:for(x=null,k=e;;){if(k.tag===5){if(x===null){x=k;try{i=k.stateNode,h?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=k.stateNode,u=k.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=$o("display",o))}catch(M){Se(e,e.return,M)}}}else if(k.tag===6){if(x===null)try{k.stateNode.nodeValue=h?"":k.memoizedProps}catch(M){Se(e,e.return,M)}}else if((k.tag!==22&&k.tag!==23||k.memoizedState===null||k===e)&&k.child!==null){k.child.return=k,k=k.child;continue}if(k===e)break e;for(;k.sibling===null;){if(k.return===null||k.return===e)break e;x===k&&(x=null),k=k.return}x===k&&(x=null),k.sibling.return=k.return,k=k.sibling}}break;case 19:pt(t,e),xt(e),r&4&&su(e);break;case 21:break;default:pt(t,e),xt(e)}}function xt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(iu(n)){var r=n;break e}n=n.return}throw Error(p(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Dn(i,""),r.flags&=-33);var l=lu(e);so(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=lu(e);oo(e,a,o);break;default:throw Error(p(161))}}catch(u){Se(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xd(e,t,n){P=e,uu(e)}function uu(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var i=P,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||pi;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Be;a=pi;var h=Be;if(pi=o,(Be=u)&&!h)for(P=i;P!==null;)o=P,u=o.child,o.tag===22&&o.memoizedState!==null?fu(i):u!==null?(u.return=o,P=u):fu(i);for(;l!==null;)P=l,uu(l),l=l.sibling;P=i,pi=a,Be=h}cu(e)}else(i.subtreeFlags&8772)!==0&&l!==null?(l.return=i,P=l):cu(e)}}function cu(e){for(;P!==null;){var t=P;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Be||mi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Be)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:dt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&da(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}da(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var x=h.memoizedState;if(x!==null){var k=x.dehydrated;k!==null&&Qn(k)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(p(163))}Be||t.flags&512&&lo(t)}catch(g){Se(t,t.return,g)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function du(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function fu(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{mi(4,t)}catch(u){Se(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){Se(t,i,u)}}var l=t.return;try{lo(t)}catch(u){Se(t,l,u)}break;case 5:var o=t.return;try{lo(t)}catch(u){Se(t,o,u)}}}catch(u){Se(t,t.return,u)}if(t===e){P=null;break}var a=t.sibling;if(a!==null){a.return=t.return,P=a;break}P=t.return}}var wd=Math.ceil,hi=I.ReactCurrentDispatcher,ao=I.ReactCurrentOwner,ot=I.ReactCurrentBatchConfig,ie=0,Le=null,Ce=null,Re=0,et=0,Ln=Dt(0),_e=0,gr=null,rn=0,gi=0,uo=0,vr=null,Qe=null,co=0,Mn=1/0,zt=null,vi=!1,fo=null,Vt=null,yi=!1,$t=null,xi=0,yr=0,po=null,wi=-1,ki=0;function Ve(){return(ie&6)!==0?Ee():wi!==-1?wi:wi=Ee()}function Wt(e){return(e.mode&1)===0?1:(ie&2)!==0&&Re!==0?Re&-Re:rd.transition!==null?(ki===0&&(ki=ls()),ki):(e=de,e!==0||(e=window.event,e=e===void 0?16:ms(e.type)),e)}function mt(e,t,n,r){if(50<yr)throw yr=0,po=null,Error(p(185));Vn(e,n,r),((ie&2)===0||e!==Le)&&(e===Le&&((ie&2)===0&&(gi|=n),_e===4&&Ht(e,Re)),Xe(e,r),n===1&&ie===0&&(t.mode&1)===0&&(Mn=Ee()+500,Kr&&Ot()))}function Xe(e,t){var n=e.callbackNode;rc(e,t);var r=Pr(e,e===Le?Re:0);if(r===0)n!==null&&ns(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ns(n),t===1)e.tag===0?nd(mu.bind(null,e)):qs(mu.bind(null,e)),Zc(function(){(ie&6)===0&&Ot()}),n=null;else{switch(os(r)){case 1:n=Hi;break;case 4:n=rs;break;case 16:n=Cr;break;case 536870912:n=is;break;default:n=Cr}n=Su(n,pu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function pu(e,t){if(wi=-1,ki=0,(ie&6)!==0)throw Error(p(327));var n=e.callbackNode;if(Tn()&&e.callbackNode!==n)return null;var r=Pr(e,e===Le?Re:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Si(e,r);else{t=r;var i=ie;ie|=2;var l=gu();(Le!==e||Re!==t)&&(zt=null,Mn=Ee()+500,on(e,t));do try{bd();break}catch(a){hu(e,a)}while(!0);Pl(),hi.current=l,ie=i,Ce!==null?t=0:(Le=null,Re=0,t=_e)}if(t!==0){if(t===2&&(i=Yi(e),i!==0&&(r=i,t=mo(e,i))),t===1)throw n=gr,on(e,0),Ht(e,r),Xe(e,Ee()),n;if(t===6)Ht(e,r);else{if(i=e.current.alternate,(r&30)===0&&!kd(i)&&(t=Si(e,r),t===2&&(l=Yi(e),l!==0&&(r=l,t=mo(e,l))),t===1))throw n=gr,on(e,0),Ht(e,r),Xe(e,Ee()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(p(345));case 2:sn(e,Qe,zt);break;case 3:if(Ht(e,r),(r&130023424)===r&&(t=co+500-Ee(),10<t)){if(Pr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=xl(sn.bind(null,e,Qe,zt),t);break}sn(e,Qe,zt);break;case 4:if(Ht(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-at(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wd(r/1960))-r,10<r){e.timeoutHandle=xl(sn.bind(null,e,Qe,zt),r);break}sn(e,Qe,zt);break;case 5:sn(e,Qe,zt);break;default:throw Error(p(329))}}}return Xe(e,Ee()),e.callbackNode===n?pu.bind(null,e):null}function mo(e,t){var n=vr;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=Si(e,t),e!==2&&(t=Qe,Qe=n,t!==null&&ho(t)),e}function ho(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function kd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!ut(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ht(e,t){for(t&=~uo,t&=~gi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function mu(e){if((ie&6)!==0)throw Error(p(327));Tn();var t=Pr(e,0);if((t&1)===0)return Xe(e,Ee()),null;var n=Si(e,t);if(e.tag!==0&&n===2){var r=Yi(e);r!==0&&(t=r,n=mo(e,r))}if(n===1)throw n=gr,on(e,0),Ht(e,t),Xe(e,Ee()),n;if(n===6)throw Error(p(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sn(e,Qe,zt),Xe(e,Ee()),null}function go(e,t){var n=ie;ie|=1;try{return e(t)}finally{ie=n,ie===0&&(Mn=Ee()+500,Kr&&Ot())}}function ln(e){$t!==null&&$t.tag===0&&(ie&6)===0&&Tn();var t=ie;ie|=1;var n=ot.transition,r=de;try{if(ot.transition=null,de=1,e)return e()}finally{de=r,ot.transition=n,ie=t,(ie&6)===0&&Ot()}}function vo(){et=Ln.current,ge(Ln)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Jc(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(jl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qr();break;case 3:zn(),ge(We),ge(Ie),Ol();break;case 5:Dl(r);break;case 4:zn();break;case 13:ge(xe);break;case 19:ge(xe);break;case 10:Ll(r.type._context);break;case 22:case 23:vo()}n=n.return}if(Le=e,Ce=e=Yt(e.current,null),Re=et=t,_e=0,gr=null,uo=gi=rn=0,Qe=vr=null,en!==null){for(t=0;t<en.length;t++)if(n=en[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}en=null}return e}function hu(e,t){do{var n=Ce;try{if(Pl(),li.current=ui,oi){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}oi=!1}if(nn=0,Pe=ze=we=null,cr=!1,dr=0,ao.current=null,n===null||n.return===null){_e=1,gr=t,Ce=null;break}e:{var l=e,o=n.return,a=n,u=t;if(t=Re,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,x=a,k=x.tag;if((x.mode&1)===0&&(k===0||k===11||k===15)){var g=x.alternate;g?(x.updateQueue=g.updateQueue,x.memoizedState=g.memoizedState,x.lanes=g.lanes):(x.updateQueue=null,x.memoizedState=null)}var z=Ba(o);if(z!==null){z.flags&=-257,Ua(z,o,a,l,t),z.mode&1&&Aa(l,h,t),t=z,u=h;var L=t.updateQueue;if(L===null){var M=new Set;M.add(u),t.updateQueue=M}else L.add(u);break e}else{if((t&1)===0){Aa(l,h,t),yo();break e}u=Error(p(426))}}else if(ye&&a.mode&1){var je=Ba(o);if(je!==null){(je.flags&65536)===0&&(je.flags|=256),Ua(je,o,a,l,t),zl(_n(u,a));break e}}l=u=_n(u,a),_e!==4&&(_e=2),vr===null?vr=[l]:vr.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=Ia(l,u,t);ca(l,f);break e;case 1:a=u;var c=l.type,m=l.stateNode;if((l.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Vt===null||!Vt.has(m)))){l.flags|=65536,t&=-t,l.lanes|=t;var b=Oa(l,a,t);ca(l,b);break e}}l=l.return}while(l!==null)}yu(n)}catch(T){t=T,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function gu(){var e=hi.current;return hi.current=ui,e===null?ui:e}function yo(){(_e===0||_e===3||_e===2)&&(_e=4),Le===null||(rn&268435455)===0&&(gi&268435455)===0||Ht(Le,Re)}function Si(e,t){var n=ie;ie|=2;var r=gu();(Le!==e||Re!==t)&&(zt=null,on(e,t));do try{Sd();break}catch(i){hu(e,i)}while(!0);if(Pl(),ie=n,hi.current=r,Ce!==null)throw Error(p(261));return Le=null,Re=0,_e}function Sd(){for(;Ce!==null;)vu(Ce)}function bd(){for(;Ce!==null&&!Xu();)vu(Ce)}function vu(e){var t=ku(e.alternate,e,et);e.memoizedProps=e.pendingProps,t===null?yu(e):Ce=t,ao.current=null}function yu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=hd(n,t,et),n!==null){Ce=n;return}}else{if(n=gd(n,t),n!==null){n.flags&=32767,Ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_e=6,Ce=null;return}}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);_e===0&&(_e=5)}function sn(e,t,n){var r=de,i=ot.transition;try{ot.transition=null,de=1,Ed(e,t,n,r)}finally{ot.transition=i,de=r}return null}function Ed(e,t,n,r){do Tn();while($t!==null);if((ie&6)!==0)throw Error(p(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(p(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(ic(e,l),e===Le&&(Ce=Le=null,Re=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||yi||(yi=!0,Su(Cr,function(){return Tn(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=ot.transition,ot.transition=null;var o=de;de=1;var a=ie;ie|=4,ao.current=null,yd(e,n),au(n,e),Wc(vl),Tr=!!gl,vl=gl=null,e.current=n,xd(n),Ku(),ie=a,de=o,ot.transition=l}else e.current=n;if(yi&&(yi=!1,$t=e,xi=i),l=e.pendingLanes,l===0&&(Vt=null),Zu(n.stateNode),Xe(e,Ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(vi)throw vi=!1,e=fo,fo=null,e;return(xi&1)!==0&&e.tag!==0&&Tn(),l=e.pendingLanes,(l&1)!==0?e===po?yr++:(yr=0,po=e):yr=0,Ot(),null}function Tn(){if($t!==null){var e=os(xi),t=ot.transition,n=de;try{if(ot.transition=null,de=16>e?16:e,$t===null)var r=!1;else{if(e=$t,$t=null,xi=0,(ie&6)!==0)throw Error(p(331));var i=ie;for(ie|=4,P=e.current;P!==null;){var l=P,o=l.child;if((P.flags&16)!==0){var a=l.deletions;if(a!==null){for(var u=0;u<a.length;u++){var h=a[u];for(P=h;P!==null;){var x=P;switch(x.tag){case 0:case 11:case 15:hr(8,x,l)}var k=x.child;if(k!==null)k.return=x,P=k;else for(;P!==null;){x=P;var g=x.sibling,z=x.return;if(ru(x),x===h){P=null;break}if(g!==null){g.return=z,P=g;break}P=z}}}var L=l.alternate;if(L!==null){var M=L.child;if(M!==null){L.child=null;do{var je=M.sibling;M.sibling=null,M=je}while(M!==null)}}P=l}}if((l.subtreeFlags&2064)!==0&&o!==null)o.return=l,P=o;else e:for(;P!==null;){if(l=P,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:hr(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,P=f;break e}P=l.return}}var c=e.current;for(P=c;P!==null;){o=P;var m=o.child;if((o.subtreeFlags&2064)!==0&&m!==null)m.return=o,P=m;else e:for(o=c;P!==null;){if(a=P,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:mi(9,a)}}catch(T){Se(a,a.return,T)}if(a===o){P=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,P=b;break e}P=a.return}}if(ie=i,Ot(),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(Nr,e)}catch{}r=!0}return r}finally{de=n,ot.transition=t}}return!1}function xu(e,t,n){t=_n(n,t),t=Ia(e,t,1),e=Bt(e,t,1),t=Ve(),e!==null&&(Vn(e,1,t),Xe(e,t))}function Se(e,t,n){if(e.tag===3)xu(e,e,n);else for(;t!==null;){if(t.tag===3){xu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vt===null||!Vt.has(r))){e=_n(n,e),e=Oa(t,e,1),t=Bt(t,e,1),e=Ve(),t!==null&&(Vn(t,1,e),Xe(t,e));break}}t=t.return}}function jd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ve(),e.pingedLanes|=e.suspendedLanes&n,Le===e&&(Re&n)===n&&(_e===4||_e===3&&(Re&130023424)===Re&&500>Ee()-co?on(e,0):uo|=n),Xe(e,t)}function wu(e,t){t===0&&((e.mode&1)===0?t=1:(t=_r,_r<<=1,(_r&130023424)===0&&(_r=4194304)));var n=Ve();e=jt(e,t),e!==null&&(Vn(e,t,n),Xe(e,n))}function Cd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wu(e,n)}function Nd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(p(314))}r!==null&&r.delete(t),wu(e,n)}var ku;ku=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||We.current)Ye=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ye=!1,md(e,t,n);Ye=(e.flags&131072)!==0}else Ye=!1,ye&&(t.flags&1048576)!==0&&ea(t,Jr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;fi(e,t),e=t.pendingProps;var i=kn(t,Ie.current);Nn(t,n),i=Ul(null,t,r,e,i,n);var l=Vl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,He(r)?(l=!0,Xr(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Rl(t),i.updater=ci,t.stateNode=i,i._reactInternals=t,Xl(t,r,e,n),t=Zl(null,t,r,!0,l,n)):(t.tag=0,ye&&l&&El(t),Ue(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(fi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=_d(r),e=dt(r,e),i){case 0:t=Jl(null,t,r,e,n);break e;case 1:t=Qa(null,t,r,e,n);break e;case 11:t=Va(null,t,r,e,n);break e;case 14:t=$a(null,t,r,dt(r.type,e),n);break e}throw Error(p(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),Jl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),Qa(e,t,r,i,n);case 3:e:{if(Xa(t),e===null)throw Error(p(387));r=t.pendingProps,l=t.memoizedState,i=l.element,ua(e,t),ri(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=_n(Error(p(423)),t),t=Ka(e,t,r,n,i);break e}else if(r!==i){i=_n(Error(p(424)),t),t=Ka(e,t,r,n,i);break e}else for(qe=Ft(t.stateNode.containerInfo.firstChild),Ze=t,ye=!0,ct=null,n=sa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(En(),r===i){t=Nt(e,t,n);break e}Ue(e,t,r,n)}t=t.child}return t;case 5:return fa(t),e===null&&Nl(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,yl(r,i)?o=null:l!==null&&yl(r,l)&&(t.flags|=32),Ya(e,t),Ue(e,t,o,n),t.child;case 6:return e===null&&Nl(t),null;case 13:return Ga(e,t,n);case 4:return Fl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=jn(t,null,r,n):Ue(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),Va(e,t,r,i,n);case 7:return Ue(e,t,t.pendingProps,n),t.child;case 8:return Ue(e,t,t.pendingProps.children,n),t.child;case 12:return Ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,me(ei,r._currentValue),r._currentValue=o,l!==null)if(ut(l.value,o)){if(l.children===i.children&&!We.current){t=Nt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){o=l.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=Ct(-1,n&-n),u.tag=2;var h=l.updateQueue;if(h!==null){h=h.shared;var x=h.pending;x===null?u.next=u:(u.next=x.next,x.next=u),h.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Ml(l.return,n,t),a.lanes|=n;break}u=u.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(p(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ml(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}Ue(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Nn(t,n),i=it(i),r=r(i),t.flags|=1,Ue(e,t,r,n),t.child;case 14:return r=t.type,i=dt(r,t.pendingProps),i=dt(r.type,i),$a(e,t,r,i,n);case 15:return Wa(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),fi(e,t),t.tag=1,He(r)?(e=!0,Xr(t)):e=!1,Nn(t,n),Fa(t,r,i),Xl(t,r,i,n),Zl(null,t,r,!0,e,n);case 19:return Za(e,t,n);case 22:return Ha(e,t,n)}throw Error(p(156,t.tag))};function Su(e,t){return ts(e,t)}function zd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(e,t,n,r){return new zd(e,t,n,r)}function xo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _d(e){if(typeof e=="function")return xo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===tt)return 11;if(e===S)return 14}return 2}function Yt(e,t){var n=e.alternate;return n===null?(n=st(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function bi(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")xo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case fe:return an(n.children,i,l,t);case be:o=8,i|=8;break;case Ne:return e=st(12,n,t,i|2),e.elementType=Ne,e.lanes=l,e;case De:return e=st(13,n,t,i),e.elementType=De,e.lanes=l,e;case $e:return e=st(19,n,t,i),e.elementType=$e,e.lanes=l,e;case le:return Ei(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fe:o=10;break e;case wt:o=9;break e;case tt:o=11;break e;case S:o=14;break e;case H:o=16,r=null;break e}throw Error(p(130,e==null?e:typeof e,""))}return t=st(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function an(e,t,n,r){return e=st(7,e,r,t),e.lanes=n,e}function Ei(e,t,n,r){return e=st(22,e,r,t),e.elementType=le,e.lanes=n,e.stateNode={isHidden:!1},e}function wo(e,t,n){return e=st(6,e,null,t),e.lanes=n,e}function ko(e,t,n){return t=st(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Pd(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qi(0),this.expirationTimes=Qi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function So(e,t,n,r,i,l,o,a,u){return e=new Pd(e,t,n,a,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=st(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rl(l),e}function Ld(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:V,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function bu(e){if(!e)return It;e=e._reactInternals;e:{if(Kt(e)!==e||e.tag!==1)throw Error(p(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(He(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(p(171))}if(e.tag===1){var n=e.type;if(He(n))return Js(e,n,t)}return t}function Eu(e,t,n,r,i,l,o,a,u){return e=So(n,r,!0,e,i,l,o,a,u),e.context=bu(null),n=e.current,r=Ve(),i=Wt(n),l=Ct(r,i),l.callback=t??null,Bt(n,l,i),e.current.lanes=i,Vn(e,i,r),Xe(e,r),e}function ji(e,t,n,r){var i=t.current,l=Ve(),o=Wt(i);return n=bu(n),t.context===null?t.context=n:t.pendingContext=n,t=Ct(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Bt(i,t,o),e!==null&&(mt(e,i,o,l),ni(e,i,o)),o}function Ci(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ju(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function bo(e,t){ju(e,t),(e=e.alternate)&&ju(e,t)}function Md(){return null}var Cu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Eo(e){this._internalRoot=e}Ni.prototype.render=Eo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(p(409));ji(e,t,null,null)},Ni.prototype.unmount=Eo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ln(function(){ji(null,e,null,null)}),t[kt]=null}};function Ni(e){this._internalRoot=e}Ni.prototype.unstable_scheduleHydration=function(e){if(e){var t=us();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mt.length&&t!==0&&t<Mt[n].priority;n++);Mt.splice(n,0,e),n===0&&fs(e)}};function jo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Nu(){}function Td(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var h=Ci(o);l.call(h)}}var o=Eu(t,r,e,0,null,!1,!1,"",Nu);return e._reactRootContainer=o,e[kt]=o.current,nr(e.nodeType===8?e.parentNode:e),ln(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var h=Ci(u);a.call(h)}}var u=So(e,0,!1,null,null,!1,!1,"",Nu);return e._reactRootContainer=u,e[kt]=u.current,nr(e.nodeType===8?e.parentNode:e),ln(function(){ji(t,u,n,r)}),u}function _i(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var a=i;i=function(){var u=Ci(o);a.call(u)}}ji(t,o,e,i)}else o=Td(n,t,e,i,r);return Ci(o)}ss=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Un(t.pendingLanes);n!==0&&(Xi(t,n|1),Xe(t,Ee()),(ie&6)===0&&(Mn=Ee()+500,Ot()))}break;case 13:ln(function(){var r=jt(e,1);if(r!==null){var i=Ve();mt(r,e,1,i)}}),bo(e,1)}},Ki=function(e){if(e.tag===13){var t=jt(e,134217728);if(t!==null){var n=Ve();mt(t,e,134217728,n)}bo(e,134217728)}},as=function(e){if(e.tag===13){var t=Wt(e),n=jt(e,t);if(n!==null){var r=Ve();mt(n,e,t,r)}bo(e,t)}},us=function(){return de},cs=function(e,t){var n=de;try{return de=e,t()}finally{de=n}},Ui=function(e,t,n){switch(t){case"input":if(Ti(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Yr(r);if(!i)throw Error(p(90));Ro(r),Ti(r,i)}}}break;case"textarea":Ao(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}},Xo=go,Ko=ln;var Rd={usingClientEntryPoint:!1,Events:[lr,xn,Yr,Yo,Qo,go]},xr={findFiberByHostInstance:Gt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fd={bundleType:xr.bundleType,version:xr.version,rendererPackageName:xr.rendererPackageName,rendererConfig:xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:I.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qo(e),e===null?null:e.stateNode},findFiberByHostInstance:xr.findFiberByHostInstance||Md,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pi.isDisabled&&Pi.supportsFiber)try{Nr=Pi.inject(Fd),ht=Pi}catch{}}return Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rd,Ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jo(t))throw Error(p(200));return Ld(e,t,null,n)},Ke.createRoot=function(e,t){if(!jo(e))throw Error(p(299));var n=!1,r="",i=Cu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=So(e,1,!1,null,null,n,!1,r,i),e[kt]=t.current,nr(e.nodeType===8?e.parentNode:e),new Eo(t)},Ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(p(188)):(e=Object.keys(e).join(","),Error(p(268,e)));return e=qo(t),e=e===null?null:e.stateNode,e},Ke.flushSync=function(e){return ln(e)},Ke.hydrate=function(e,t,n){if(!zi(t))throw Error(p(200));return _i(null,e,t,!0,n)},Ke.hydrateRoot=function(e,t,n){if(!jo(e))throw Error(p(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=Cu;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Eu(t,null,e,1,n??null,i,!1,l,o),e[kt]=t.current,nr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ni(t)},Ke.render=function(e,t,n){if(!zi(t))throw Error(p(200));return _i(null,e,t,!1,n)},Ke.unmountComponentAtNode=function(e){if(!zi(e))throw Error(p(40));return e._reactRootContainer?(ln(function(){_i(null,null,e,!1,function(){e._reactRootContainer=null,e[kt]=null})}),!0):!1},Ke.unstable_batchedUpdates=go,Ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zi(n))throw Error(p(200));if(e==null||e._reactInternals===void 0)throw Error(p(38));return _i(e,t,n,!1,r)},Ke.version="18.3.1-next-f1338f8080-20240426",Ke}var Fu;function $d(){if(Fu)return zo.exports;Fu=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(w){console.error(w)}}return v(),zo.exports=Vd(),zo.exports}var Du;function Wd(){if(Du)return Li;Du=1;var v=$d();return Li.createRoot=v.createRoot,Li.hydrateRoot=v.hydrateRoot,Li}var Hd=Wd();const Yd=`
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');

*,*::before,*::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { background: #060609; color: #fff; overflow-x: hidden; font-family: 'DM Sans', sans-serif; }
::selection { background: rgba(123,47,247,.18); color: #fff; }
::-webkit-scrollbar { width: 3px; }
::-webkit-scrollbar-track { background: #060609; }
::-webkit-scrollbar-thumb { background: rgba(123,47,247,.3); border-radius: 99px; }

/* All sections are transparent — blob canvas shines through */
.about, .projects, .contact, .hero {
  background: transparent !important;
}

/* Subtle dark veil per section so text stays legible */
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(6,6,9,0.20);
}

.about::before,
.projects::before,
.contact::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(6,6,9,0.80);
  pointer-events: none;
  z-index: 0;
}
.about > *, .projects > *, .contact > * {
  position: relative;
  z-index: 1;
}

.noise {
  position: absolute; inset: 0; pointer-events: none; z-index: 1;
  opacity: .4; mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='.06'/%3E%3C/svg%3E");
}

.eyebrow {
  font-family: 'DM Mono', monospace; font-size: .63rem; letter-spacing: .22em;
  text-transform: uppercase; color: rgba(255,255,255,.60);
  display: inline-flex; align-items: center; gap: .6rem;
}
.eyebrow::before { content: ''; width: 16px; height: 1px; background: rgba(255,255,255,.14); display: block; }

.chip {
  font-family: 'DM Mono', monospace; font-size: .57rem; letter-spacing: .06em;
  text-transform: uppercase; padding: .24rem .68rem;
  border: 1px solid rgba(255,255,255,.08); color: rgba(255,255,255,.28); border-radius: 999px;
}

.fu { opacity: 0; transform: translateY(20px); transition: opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
.fu.in { opacity: 1; transform: translateY(0); }
.fu.d1 { transition-delay: .1s; }
.fu.d2 { transition-delay: .2s; }
.fu.d3 { transition-delay: .32s; }
.fu.d4 { transition-delay: .44s; }
.fu.d5 { transition-delay: .56s; }
`,Qd=["home","about","projects"];function Xd({active:v,onNav:w}){const[p,C]=N.useState(!1),[_,R]=N.useState(!1),[J,X]=N.useState(!1),B=N.useRef(null),K=N.useRef({}),[G,ne]=N.useState({x:0,w:0,ready:!1});N.useEffect(()=>{const U=()=>C(window.scrollY>50);return window.addEventListener("scroll",U),()=>window.removeEventListener("scroll",U)},[]),N.useEffect(()=>{const U=$=>X($.detail);return window.addEventListener("lock-scroll",U),()=>window.removeEventListener("lock-scroll",U)},[]);const W=N.useCallback(()=>{const U=v==="hero"?"home":v,$=K.current[U],D=B.current;if(!$||!D)return;const ke=$.getBoundingClientRect(),ee=D.getBoundingClientRect();ne({x:ke.left-ee.left,w:ke.width,ready:!0})},[v]);N.useEffect(()=>{W()},[W]),N.useEffect(()=>(window.addEventListener("resize",W),()=>window.removeEventListener("resize",W)),[W]);const re=U=>{w==null||w(U),R(!1)};return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
        .nav {
          position: fixed; top: 1.1rem; left: 50%; transform: translateX(-50%);
          z-index: 1000; width: calc(100% - 2.5rem); max-width: 1320px;
        }

        /* ── Pill ── */
        .nav-pill {
          position: relative; overflow: hidden;
          display: flex; align-items: center; justify-content: space-between;
          padding: .62rem 1rem .62rem 1.4rem;
          background: rgba(8,8,14,.38);
          border: 1px solid rgba(255,255,255,.065); border-radius: 999px;
          backdrop-filter: blur(24px) saturate(180%);
          transition: background .42s, border-color .42s, box-shadow .42s;
          box-shadow: 0 0 0 0 rgba(123,47,247,0);
          animation: pill-breathe 5s ease-in-out infinite;
        }
        @keyframes pill-breathe {
          0%,100% { box-shadow: 0 2px 20px rgba(0,0,0,.35), 0 0 0 1px rgba(123,47,247,.08); }
          50%      { box-shadow: 0 2px 28px rgba(0,0,0,.45), 0 0 0 1px rgba(123,47,247,.22); }
        }
        .nav.sc .nav-pill {
          background: rgba(6,6,9,.92); border-color: rgba(255,255,255,.09);
          animation: none;
          box-shadow: 0 4px 30px rgba(0,0,0,.5), 0 0 0 1px rgba(123,47,247,.14),
                      inset 0 1px 0 rgba(255,255,255,.04);
        }
        /* Shimmer scan */
        .nav-pill::after {
          content: ''; position: absolute; top: 0; height: 100%; width: 45%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.055), transparent);
          border-radius: 999px; pointer-events: none;
          animation: pill-shimmer 7s ease-in-out infinite;
        }
        @keyframes pill-shimmer {
          0%,55% { left: -50%; }
          100%   { left: 110%; }
        }

        /* ── Logo ── */
        .nlogo {
          font-family: 'Syne', sans-serif; font-weight: 700; font-size: .92rem; color: #fff;
          cursor: pointer; letter-spacing: -.02em;
          display: flex; align-items: center; gap: .42rem;
          position: relative; z-index: 1; transition: color .2s;
        }
        .nlogo::after {
          content: ''; position: absolute; bottom: -3px; left: 0;
          width: 0; height: 1px; border-radius: 999px;
          background: linear-gradient(90deg, #7B2FF7, #a855f7);
          transition: width .32s cubic-bezier(.22,1,.36,1);
        }
        .nlogo:hover::after { width: 100%; }
        .nlogo-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #7B2FF7;
          box-shadow: 0 0 8px #7B2FF7; flex-shrink: 0;
          transition: transform .25s cubic-bezier(.22,1,.36,1), box-shadow .25s;
          animation: dot-pulse 3s ease-in-out infinite;
        }
        .nlogo:hover .nlogo-dot {
          transform: scale(1.5);
          box-shadow: 0 0 14px #7B2FF7;
        }
        @keyframes dot-pulse {
          0%,100% { opacity: 1; box-shadow: 0 0 8px #7B2FF7; }
          50%      { opacity: .4; box-shadow: 0 0 3px #7B2FF7; }
        }

        /* ── Nav links + sliding indicator ── */
        .nlinks { display: flex; gap: .12rem; position: relative; z-index: 1; }
        .nind {
          position: absolute; top: 0; left: 0; height: 100%;
          background: rgba(123,47,247,.15); border: 1px solid rgba(123,47,247,.3);
          border-radius: 999px; pointer-events: none;
          box-shadow: 0 0 14px rgba(123,47,247,.18);
          transition: transform .38s cubic-bezier(.22,1,.36,1),
                      width   .38s cubic-bezier(.22,1,.36,1),
                      opacity .2s;
        }
        .nitem {
          font-family: 'DM Mono', monospace; font-size: .65rem; letter-spacing: .06em;
          text-transform: uppercase; color: rgba(255,255,255,.36); cursor: pointer;
          padding: .38rem .82rem; border-radius: 999px;
          transition: color .22s, transform .2s;
          border: 1px solid transparent; position: relative; z-index: 1;
        }
        .nitem:hover  { color: rgba(255,255,255,.82); transform: scale(1.05); }
        .nitem.on     { color: #fff; }

        /* ── CTA ── */
        .ncta {
          position: relative; z-index: 1;
          font-family: 'DM Mono', monospace; font-size: .63rem; letter-spacing: .07em;
          text-transform: uppercase; color: #fff; background: rgba(123,47,247,.88); border: none;
          padding: .44rem 1.05rem; border-radius: 999px; cursor: pointer;
          transition: background .26s, transform .22s, box-shadow .26s;
          animation: cta-glow 4s ease-in-out infinite;
        }
        @keyframes cta-glow {
          0%,100% { box-shadow: 0 2px 14px rgba(123,47,247,.3); }
          50%      { box-shadow: 0 2px 26px rgba(123,47,247,.6); }
        }
        .ncta:hover {
          background: #8c3fff; transform: translateY(-1px) scale(1.05);
          box-shadow: 0 6px 28px rgba(123,47,247,.55) !important;
          animation: none;
        }
        .ncta:active { transform: scale(.97); }

        /* ── Burger → X ── */
        .nburg {
          display: none; background: none; border: none; cursor: pointer;
          color: #fff; padding: .4rem; position: relative; z-index: 1;
        }
        .nburg-svg line {
          transition: transform .32s cubic-bezier(.22,1,.36,1), opacity .22s;
          transform-box: fill-box; transform-origin: center;
        }
        .nburg-svg.open line:nth-child(1) { transform: translateY(6px) rotate(45deg); }
        .nburg-svg.open line:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .nburg-svg.open line:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

        /* ── Mobile drawer ── */
        .mdrawer {
          position: fixed; inset: 0; z-index: 999; background: rgba(6,6,9,.97);
          backdrop-filter: blur(20px); display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 1.6rem;
        }
        .mdrawer .nitem { font-size: .95rem; padding: .62rem 2.2rem; }

        @media(max-width:660px) { .nlinks, .ncta { display: none; } .nburg { display: block; } }
      `}),s.jsx("nav",{className:`nav${p?" sc":""}`,style:{opacity:J?0:1,pointerEvents:J?"none":"auto",zIndex:J?0:1e3,transition:"opacity 0.3s ease"},children:s.jsxs("div",{className:"nav-pill",children:[s.jsxs("div",{className:"nlogo",onClick:()=>re("hero"),children:[s.jsx("div",{className:"nlogo-dot"}),"Nev."]}),s.jsxs("div",{className:"nlinks",ref:B,children:[s.jsx("div",{className:"nind",style:{transform:`translateX(${G.x}px)`,width:G.w,opacity:G.ready?1:0}}),Qd.map(U=>s.jsx("div",{ref:$=>{K.current[U]=$},className:`nitem${v===(U==="home"?"hero":U)?" on":""}`,onClick:()=>re(U==="home"?"hero":U),children:U[0].toUpperCase()+U.slice(1)},U))]}),s.jsx("button",{className:"ncta",onClick:()=>re("contact"),children:"Contact Me"}),s.jsx("button",{className:"nburg",onClick:()=>R(U=>!U),children:s.jsxs("svg",{className:`nburg-svg${_?" open":""}`,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[s.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),s.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),s.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})})]})}),_&&s.jsx("div",{className:"mdrawer",onClick:()=>R(!1),children:["home","about","projects","contact"].map(U=>s.jsx("div",{className:"nitem",onClick:$=>{$.stopPropagation(),re(U==="home"?"hero":U)},children:U[0].toUpperCase()+U.slice(1)},U))})]})}function Kd(v,w=70,p=2400){const[C,_]=N.useState(""),[R,J]=N.useState(0),[X,B]=N.useState(0),[K,G]=N.useState(!1);return N.useEffect(()=>{const ne=v[R];let W;return K?X>0?W=setTimeout(()=>B(re=>re-1),w/2.5):(G(!1),J(re=>(re+1)%v.length)):X<ne.length?W=setTimeout(()=>B(re=>re+1),w):W=setTimeout(()=>G(!0),p),_(ne.slice(0,X)),()=>clearTimeout(W)},[X,K,R,v,w,p]),C}function Bu(v,w=.1){const[p,C]=N.useState(!1);return N.useEffect(()=>{const _=new IntersectionObserver(([R])=>{R.isIntersecting&&C(!0)},{threshold:w});return v.current&&_.observe(v.current),()=>_.disconnect()},[v,w]),p}const Gd=["Data Visualization","Frontend Development","UI/UX Designs","Browser Extensions"],Mo=[{id:0,title:"SwiftShip",image:"swiftship.png",category:"Website",year:"2026",description:"A professional business website for a global logistics firm. Features a streamlined interface for tracking international shipments, managing customs compliance, and generating rapid multimodal freight quotes.",tags:["Logistics","Business Site","Freight","Supply Chain"],color:"#7B2FF7",accent:"rgba(123,47,247,0.12)",border:"rgba(123,47,247,0.2)",link:"https://n3vdev.github.io/Swiftship/",num:"01"},{id:1,title:"Aether Journal",image:"journal.png",category:"Website",year:"2026",description:"A minimalist digital journal exploring design and philosophy. Features a clean, editorial layout optimized for long-form essays and high-fidelity visual storytelling, reflecting a focus on intentionality and slow living.",tags:["Digital Journal","Editorial","Typography","UI/UX Design"],color:"#00C9A7",accent:"rgba(0,201,167,0.12)",border:"rgba(0,201,167,0.2)",link:"https://n3vdev.github.io/Journal/",num:"02"},{id:2,title:"Nev Commerce OS",image:"commerceos.png",category:"Website",year:"2026",description:"An e-commerce management interface concept designed for store administrators. Provides a high-density overview of sales analytics, revenue tracking, and order fulfillment status in a focused, dark-themed layout.",tags:["Next.js","Analytics","Admin UI","E-commerce"],color:"#F59E0B",accent:"rgba(245,158,11,0.12)",border:"rgba(245,158,11,0.2)",link:"https://n3vdev.github.io/Ecommerce-Dashboard/",num:"03"},{id:3,title:"Talentis Agency",image:"Talentis.png",category:"Website",year:"2026",description:"A high-fidelity website for a specialized recruitment agency. Implements a premium user flow with animated section reveals, detailed service breakdowns, and an integrated funnel for candidate and client intake.",tags:["Recruitment","Agency Site","Interactions","Landing Page"],color:"#22C55E",accent:"rgba(34,197,94,0.12)",border:"rgba(34,197,94,0.2)",link:"https://n3vdev.github.io/Talentis/",num:"04"},{id:4,title:"TruckVault Logistics",image:"Truckvault.png",category:"Website",year:"2025",description:"A conversion-optimized landing page for a freight logistics service. Focuses on clear service communication, featuring real-time tracking mockups, interactive stat grids, and trust-building technical specs.",tags:["Logistics","React","Landing Page","Performance"],color:"#00C9A7",accent:"rgba(0,201,167,0.12)",border:"rgba(0,201,167,0.2)",link:"https://n3vdev.github.io/truckvault/",num:"05"},{id:5,title:"Infinite Drive",image:"game.png",category:"Website",year:"2026",description:"An immersive, browser-based infinite driving experiment. Built with a focus on procedural generation and atmospheric audio-visuals to create a calming, low-distraction user experience.",tags:["Three.js","WebGL","Interactive","Creative Coding"],color:"#0EA5E9",accent:"rgba(14,165,233,0.12)",border:"rgba(14,165,233,0.2)",link:"https://n3vdev.github.io/infinite-drive/",num:"06"},{id:6,title:"Hiring Dashboard Design",image:"Figma Dashboard.png",category:"Figma",year:"2025",description:"A high-fidelity recruitment analytics concept designed in Figma. Maps out complex data hierarchies for tracking application trends, candidate pipelines, and departmental hiring velocity.",tags:["Figma","Data Visualization","HR Concepts","UI Design"],color:"#A855F7",accent:"rgba(168,85,247,0.12)",border:"rgba(168,85,247,0.2)",link:"https://www.figma.com/design/wQv2zexn2WggTxbhzlJyrm/Nevin-Co?node-id=0-1&t=FttxAjn8o2kRdf8x-1",num:"07"},{id:7,title:"Keyword Highlighter",image:"KH.png",category:"Chrome Extension",year:"2026",description:"A productivity tool that highlights user-defined keyword groups across web pages in real-time. Supports instant group toggling and configuration persistence using Manifest V3 standards.",tags:["Chrome Extension","JavaScript","Manifest V3","Productivity"],color:"#E85D7A",accent:"rgba(232,93,122,0.12)",border:"rgba(232,93,122,0.2)",link:"https://chromewebstore.google.com/detail/multi-keyword-highlighter/onnipamlflmhobjelheonbddcbmgfnco",num:"08"},{id:8,title:"Regional Sales Analytics",image:"PBI.jpg",category:"Power BI",year:"2025",description:"An executive-level sales dashboard focused on regional revenue insights. Tracks year-over-year growth and product performance with a high-contrast theme for data clarity.",tags:["Power BI","Data Analytics","Sales Insights","DAX"],color:"#4F8EF7",accent:"rgba(79,142,247,0.12)",border:"rgba(79,142,247,0.2)",link:"#",num:"09"},{id:9,title:"Button Dodger",image:"getrekt.png",category:"Chrome Extension",year:"2026",description:"A specialized browser extension that manipulates DOM elements to dodge user interaction. Designed to experiment with real-time cursor tracking and dynamic positioning logic.",tags:["JavaScript","Chrome Extension","DOM Manipulation","Logic"],color:"#F97316",accent:"rgba(249,115,22,0.12)",border:"rgba(249,115,22,0.2)",link:"https://chromewebstore.google.com/detail/get-rekt/fghnhikhkjncimoiipnbpbjcbkpalljg",num:"10"}],Jd={"Power BI":{bg:"rgba(79,142,247,0.1)",border:"rgba(79,142,247,0.22)",text:"#4F8EF7"},"Chrome Extension":{bg:"rgba(232,93,122,0.1)",border:"rgba(232,93,122,0.22)",text:"#E85D7A"},Figma:{bg:"rgba(168,85,247,0.1)",border:"rgba(168,85,247,0.22)",text:"#A855F7"},"Frontend Dev":{bg:"rgba(0,201,167,0.1)",border:"rgba(0,201,167,0.22)",text:"#00C9A7"},Website:{bg:"rgba(123,47,247,0.1)",border:"rgba(123,47,247,0.22)",text:"#7B2FF7"}};function Lo(v){return Jd[v]||{bg:"rgba(255,255,255,.06)",border:"rgba(255,255,255,.12)",text:"rgba(255,255,255,.5)"}}const Iu=v=>window.dispatchEvent(new CustomEvent("snapto",{detail:v}));function Zd({loaded:v=!1}){const w=Kd(Gd);return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
        .hero {
          min-height: 100vh;
          background: transparent;
          display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
        }
        .hero-vignette {
          position: absolute; inset: 0; z-index: 1; pointer-events: none;
          background: radial-gradient(ellipse 95% 85% at 50% 50%, transparent 35%, #060609 100%);
        }
        .hero-crosshair { position: absolute; inset: 0; z-index: 1; pointer-events: none; }
        .hero-crosshair::before {
          content: ''; position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          width: 1px; height: 100%;
          background: linear-gradient(to bottom, transparent 0%, rgba(123,47,247,.07) 25%, rgba(123,47,247,.07) 75%, transparent 100%);
        }
        .hero-crosshair::after {
          content: ''; position: absolute; left: 0; right: 0; top: 50%; transform: translateY(-50%);
          height: 1px;
          background: linear-gradient(to right, transparent 0%, rgba(255,255,255,.035) 25%, rgba(255,255,255,.035) 75%, transparent 100%);
        }
        .hc {
          position: relative; z-index: 3; max-width: 1320px; width: 100%;
          padding: 0 2.5rem;
          display: grid; grid-template-columns: 1fr 220px; align-items: center; gap: 3.5rem;
        }
        .h-status {
          display: inline-flex; align-items: center; gap: .5rem;
          background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.07);
          border-radius: 999px; padding: .35rem .88rem .35rem .5rem; margin-bottom: 2.4rem;
          opacity: 0; transform: translateY(12px);
          transition: opacity .7s ease .05s, transform .7s cubic-bezier(.22,1,.36,1) .05s;
        }
        .h-status.on { opacity: 1; transform: translateY(0); }
        .pulse {
          width: 6px; height: 6px; border-radius: 50%; background: #3DDB85;
          box-shadow: 0 0 0 0 rgba(61,219,133,.4);
          animation: pr 2.6s cubic-bezier(.455,.03,.515,.955) infinite; flex-shrink: 0;
        }
        @keyframes pr {
          0%   { box-shadow: 0 0 0 0   rgba(61,219,133,.35); }
          70%  { box-shadow: 0 0 0 8px rgba(61,219,133,0); }
          100% { box-shadow: 0 0 0 0   rgba(61,219,133,0); }
        }
        .h-status-txt { font-family: 'MDMono', monospace; font-size: .7rem; letter-spacing: .1em; text-transform: uppercase; color: rgba(255,255,255,.28); }
        .h-status-txt b { color: #3DDB85; font-weight: 500; }
        .h-name {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.8rem, 12vw, 8.8rem);
          font-weight: 800; line-height: .99; letter-spacing: -.045em; color: #fff;
          margin-bottom: 3rem;
          opacity: 0; transform: translateY(28px);
          transition: opacity .88s cubic-bezier(.22,1,.36,1) .16s, transform .88s cubic-bezier(.22,1,.36,1) .16s;
        }
        .h-name.on { opacity: 1; transform: translateY(0); }
        .h-name-2 { display: block; color: rgba(255,255,255,.45); }
        .h-role {
          display: flex; align-items: center; gap: .7rem; margin-bottom: 2.2rem; min-height: 1.9rem;
          opacity: 0; transform: translateY(12px);
          transition: opacity .75s cubic-bezier(.22,1,.36,1) .32s, transform .75s cubic-bezier(.22,1,.36,1) .32s;
        }
        .h-role.on { opacity: 1; transform: translateY(0); }
        .h-divider { width: 26px; height: 1px; background: rgba(255,255,255,.11); flex-shrink: 0; }
        .h-role-txt { font-family: 'DM Mono', monospace; font-size: .76rem; letter-spacing: .1em; text-transform: uppercase; color: rgba(255,255,255,.75); }
        .h-role-txt-bold { font-family: 'DM Mono', monospace; font-size: .76rem; letter-spacing: .1em; text-transform: uppercase; color: rgba(255,255,255,.7); font-weight: 500; }
        .h-cur {
          display: inline-block; width: 7px; height: .8em; background: #7B2FF7;
          border-radius: 2px; margin-left: 3px; vertical-align: middle;
          animation: blink 1.1s step-end infinite;
        }
        @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
        .h-cta {
          display: flex; gap: .8rem; align-items: center; flex-wrap: wrap;
          opacity: 0; transform: translateY(12px);
          transition: opacity .75s cubic-bezier(.22,1,.36,1) .56s, transform .75s cubic-bezier(.22,1,.36,1) .56s;
        }
        .h-cta.on { opacity: 1; transform: translateY(0); }
        .btn-fill {
          font-family: 'DM Mono', monospace; font-size: .68rem; letter-spacing: .1em;
          text-transform: uppercase; color: #fff; background: #7B2FF7; border: none;
          padding: .9rem 2rem; border-radius: 999px; cursor: pointer; transition: all .3s;
          box-shadow: 0 4px 24px rgba(123,47,247,.3), inset 0 1px 0 rgba(255,255,255,.1);
        }
        .btn-fill:hover { background: #8c3fff; transform: translateY(-2px); box-shadow: 0 8px 36px rgba(123,47,247,.5), inset 0 1px 0 rgba(255,255,255,.12); }
        .h-scroll {
          position: absolute; bottom: 2.2rem; right: 2.5rem; z-index: 3;
          display: flex; align-items: center; gap: .65rem; cursor: pointer;
          opacity: 0;
          transition: opacity 0.6s ease 1.2s;
        }
        .h-scroll.on { opacity: 1; }
        .sc-track { width: 1px; height: 40px; background: rgba(255,255,255,.06); position: relative; overflow: hidden; border-radius: 999px; }
        .sc-run {
          position: absolute; top: 0; left: 0; width: 1px; background: rgba(123,47,247,.65);
          border-radius: 999px; animation: scr 2s cubic-bezier(.4,0,.2,1) infinite;
        }
        @keyframes scr { 0% { height: 0; top: 0; } 50% { height: 40px; top: 0; } 100% { height: 0; top: 40px; } }
        .sc-lbl { font-family: 'DM Mono', monospace; font-size: .56rem; letter-spacing: .2em; text-transform: uppercase; color: rgba(255,255,255,.14); writing-mode: vertical-lr; }
        @media(max-width:1100px) {
          .hc { gap: 2rem; }
          .h-name { font-size: clamp(3rem, 10vw, 6rem); }
        }
        @media(max-width:800px) {
          .hc { grid-template-columns: 1fr; gap: 2rem; padding: 0 1.5rem; text-align: center; }
          .h-scroll { display: none; }
          .h-name { font-size: clamp(3rem, 10vw, 5rem); line-height: 1; margin-bottom: 2rem; }
          .h-status { margin-bottom: 1.5rem;  justify-content: center;  }
          .h-role { margin-bottom: 1.5rem; justify-content: center; }
          .h-cta { justify-content: center; }
          .h-role-txt { font-size: .68rem; }
        }
      `}),s.jsxs("section",{id:"hero",className:"hero",children:[s.jsx("div",{className:"hero-vignette"}),s.jsx("div",{className:"hero-crosshair"}),s.jsx("div",{className:"noise"}),s.jsx("div",{className:"hc",children:s.jsxs("div",{children:[s.jsxs("div",{className:`h-status${v?" on":""}`,children:[s.jsx("div",{className:"pulse"}),s.jsx("span",{className:"h-status-txt",children:s.jsx("b",{children:"Hello, I'm "})})]}),s.jsxs("h1",{className:`h-name${v?" on":""}`,children:["Nevin",s.jsx("span",{className:"h-name-2",children:"Abraham"})]}),s.jsxs("p",{className:"h-role-txt",children:["I craft experiences that feel seamless and intuitive,",s.jsxs("div",{className:`h-role${v?" on":""}`,children:[s.jsx("span",{className:"h-role-txt",children:"whether it's"}),s.jsx("div",{className:"h-divider"}),s.jsxs("span",{className:"h-role-txt-bold",children:[w,s.jsx("span",{className:"h-cur"})]})]})]}),s.jsx("div",{className:`h-cta${v?" on":""}`,children:s.jsx("button",{className:"btn-fill",onClick:()=>Iu("projects"),children:"View Projects →"})})]})}),s.jsxs("div",{className:`h-scroll${v?" on":""}`,onClick:()=>Iu("about"),children:[s.jsx("div",{className:"sc-track",children:s.jsx("div",{className:"sc-run"})}),s.jsx("span",{className:"sc-lbl",children:"Scroll"})]})]})]})}function qd(v,w=.08){const[p,C]=N.useState({visible:!1,fromAbove:!1}),_=N.useRef(window.scrollY);return N.useEffect(()=>{const R=v.current;if(!R)return;const J=new IntersectionObserver(([X])=>{const B=window.scrollY>=_.current;_.current=window.scrollY,C({visible:X.isIntersecting,fromAbove:!B})},{threshold:w});return J.observe(R),()=>J.disconnect()},[v,w]),p}const ef=[{label:"Web Apps & UI",desc:"I design in Figma and build in React. The kind of UI where nothing feels out of place and every interaction is intentional.",chips:["React","Vite","Tailwind","Figma"],icon:s.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"2",y:"3",width:"18",height:"14",rx:"2.5"}),s.jsx("path",{d:"M7 17v2M15 17v2M5 20h12"}),s.jsx("path",{d:"M7 9l2.5 2.5L13 8"})]}),accent:"rgba(123,47,247,"},{label:"Complex Dashboards",desc:"I take messy data and turn it into something people can actually read. Power BI, D3, Recharts, whatever gets the story across clearly.",chips:["Power BI","D3.js","Recharts","Looker"],icon:s.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",children:[s.jsx("rect",{x:"3",y:"14",width:"3.5",height:"6",rx:"1"}),s.jsx("rect",{x:"9.25",y:"9",width:"3.5",height:"11",rx:"1"}),s.jsx("rect",{x:"15.5",y:"4",width:"3.5",height:"16",rx:"1"}),s.jsx("path",{d:"M3 7l4-3 4 3 4-4"})]}),accent:"rgba(80,180,255,"},{label:"AI Integration",desc:"I hook up LLMs and AI APIs where they actually make sense: smarter search, automated pipelines, chat that does real work.",chips:["OpenAI","Claude API","Python","Automation"],icon:s.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("circle",{cx:"11",cy:"11",r:"3.5"}),s.jsx("path",{d:"M11 2v2.5M11 17.5V20M2 11h2.5M17.5 11H20"}),s.jsx("path",{d:"M4.93 4.93l1.77 1.77M15.3 15.3l1.77 1.77M4.93 17.07l1.77-1.77M15.3 6.7l1.77-1.77"})]}),accent:"rgba(61,219,133,"}];function tf(){const v=N.useRef(null),{visible:w,fromAbove:p}=qd(v,.08);return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
        .about {
          min-height: 100vh; background: transparent;
          position: relative; overflow: hidden;
          display: flex; align-items: center;
          padding: 8rem 0; /* Padding for scroll spacing */
        }
        .a-wrap {
          max-width: 1320px; margin: 0 auto; padding: 0 2.5rem; width: 100%;
          display: flex; flex-direction: column; gap: clamp(1.2rem, 2.5vh, 2rem);
        }

        /* ── Header ── */
        .a-header { margin-bottom: 0; }
        .a-h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 4vw, 3.6rem);
          font-weight: 700;
          line-height: 1.06; letter-spacing: -.035em; color: #fff; margin: .7rem 0 0;
        }

        /* ── Bio card ── */
        .a-bio-card {
          background: rgba(8,8,16,0.72);
          backdrop-filter: blur(24px) saturate(160%);
          -webkit-backdrop-filter: blur(24px) saturate(160%);
          border: 1px solid rgba(255,255,255,.09);
          border-radius: 24px;
          padding: clamp(1.4rem, 2.8vh, 2rem) clamp(1.4rem, 2vw, 2rem);
          box-shadow: 0 8px 40px rgba(0,0,0,.45), inset 0 1px 0 rgba(255,255,255,.06);
          position: relative; overflow: hidden;
          display: flex; flex-direction: column; justify-content: space-between;
          will-change: opacity, transform;
          transition: opacity .75s cubic-bezier(.22,1,.36,1), transform .75s cubic-bezier(.22,1,.36,1);
        }
        .a-bio-card::after {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          opacity: .2; mix-blend-mode: overlay; border-radius: 24px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='.08'/%3E%3C/svg%3E");
        }
        .a-bio-label {
          font-family: 'DM Mono', monospace; font-size: .55rem; letter-spacing: .2em;
          text-transform: uppercase; color: rgba(255,255,255,.65);
          display: flex; align-items: center; gap: .5rem; margin-bottom: .9rem;
        }
        .a-bio-label::before { content: ''; width: 14px; height: 1px; background: rgba(255,255,255,.15); display: block; }
        .a-bio {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(.82rem, 1.45vh, .96rem);
          line-height: 1.9;
          color: rgba(255,255,255,.92); font-weight: 300; margin: 0 0 1.1rem;
        }
        .a-bio b { color: rgba(255,255,255,.88); font-weight: 500; }
        .a-bio-chips { display: flex; flex-wrap: wrap; gap: .3rem; }
        .a-bio-chip {
          font-family: 'DM Mono', monospace; font-size: .52rem; letter-spacing: .08em;
          text-transform: uppercase; padding: .2rem .6rem; border-radius: 999px;
          border: 1px solid rgba(255,255,255,.1); color: rgba(255,255,255,.55);
          background: rgba(255,255,255,.03);
        }

        /* ── Capability cards row ── */
        .a-caps-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: .85rem;
        }
        .a-cap {
          background: rgba(8,8,16,0.62);
          backdrop-filter: blur(20px) saturate(160%);
          -webkit-backdrop-filter: blur(20px) saturate(160%);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 20px;
          padding: 1.2rem 1.3rem;
          display: flex; flex-direction: column; gap: .75rem;
          position: relative; overflow: hidden;
          will-change: opacity, transform;
          transition:
            opacity  .65s cubic-bezier(.22,1,.36,1),
            transform .65s cubic-bezier(.22,1,.36,1),
            border-color .26s, background .26s;
        }
        .a-cap:hover {
          background: rgba(12,10,22,0.78);
          border-color: rgba(255,255,255,.14);
          transform: translateY(-3px) !important;
        }
        .a-cap-d0 { transition-delay: .28s; }
        .a-cap-d1 { transition-delay: .38s; }
        .a-cap-d2 { transition-delay: .48s; }

        .a-cap-ico {
          width: 38px; height: 38px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .a-cap-tit {
          font-family: 'Syne', sans-serif; font-size: .95rem; font-weight: 700;
          color: rgba(255,255,255,.9); margin: 0;
        }
        .a-cap-desc {
          font-family: 'DM Sans', sans-serif; font-size: .78rem; line-height: 1.68;
          color: rgba(255,255,255,.45); font-weight: 300; margin: 0;
        }
        .a-cap-chips { display: flex; flex-wrap: wrap; gap: .26rem; margin-top: auto; }
        .a-cap-chip {
          font-family: 'DM Mono', monospace; font-size: .5rem; letter-spacing: .07em;
          text-transform: uppercase; padding: .16rem .52rem; border-radius: 999px;
          border: 1px solid rgba(255,255,255,.09); color: rgba(255,255,255,.32);
          background: rgba(255,255,255,.025);
        }

        /* ── Desktop tweaks ── */
        @media(min-width: 861px) {
          .a-h2 { font-size: clamp(2.8rem, 5vw, 4.6rem); }
          .a-bio { font-size: clamp(.95rem, 1.7vh, 1.12rem); }
          .a-bio-label { font-size: .62rem; }
          .a-cap-tit { font-size: 1.05rem; }
          .a-cap-desc { font-size: .85rem; }
          .a-cap-chip { font-size: .55rem; }
        }

        /* ── Mobile ── */
        @media(max-width: 860px) {
          .about { align-items: flex-start; padding-top: 5.5rem; padding-bottom: 4rem; overflow-y: auto; height: auto; min-height: 100vh; }
          .a-wrap { padding: 0 1.4rem; gap: 1.2rem; }
          .a-h2 { font-size: clamp(1.8rem, 8vw, 2.4rem); }
          
          .a-caps-row { 
            grid-template-columns: repeat(3, 1fr); 
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 1rem;
            padding: 0.5rem 0.2rem 1.5rem;
            margin: 0 -0.2rem;
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .a-caps-row::-webkit-scrollbar { display: none; }
          
          .a-cap { 
            flex: 0 0 85%; 
            scroll-snap-align: center;
            min-height: 200px;
          }
        }
      `}),s.jsxs("section",{id:"about",className:"about",ref:v,children:[s.jsx("div",{className:"noise"}),s.jsxs("div",{className:"a-wrap",children:[s.jsxs("div",{className:"a-header",children:[s.jsx("div",{className:`fu${w?" in":""}`,children:s.jsx("span",{className:"eyebrow",children:"About Me"})}),s.jsx("h2",{className:`a-h2 fu d1${w?" in":""}`,children:"Developer"})]}),s.jsxs("div",{className:"a-bio-card",style:{opacity:w?1:0,transform:w?"translateX(0)":"translateX(-72px)"},children:[s.jsxs("div",{children:[s.jsx("div",{className:"a-bio-label",children:"Bio"}),s.jsx("p",{className:"a-bio",children:"I’m a developer focused on building clean, intuitive products people genuinely enjoy using. From web apps to dashboards, I aim to make complex systems feel simple and effortless. I use AI where it adds real value, not just for the sake of it, and I design every product around what users actually need."})]}),s.jsx("div",{className:"a-bio-chips",children:["React","TypeScript","Figma","Power BI","Python","OpenAI API"].map(C=>s.jsx("span",{className:"a-bio-chip",children:C},C))})]}),s.jsx("div",{className:"a-caps-row",children:ef.map((C,_)=>s.jsxs("div",{className:`a-cap a-cap-d${_}`,style:{opacity:w?1:0,transform:w?"translateY(0)":"translateY(32px)",borderColor:w?`${C.accent}.12)`:"rgba(255,255,255,.08)"},children:[s.jsx("div",{className:"a-cap-ico",style:{background:`${C.accent}.1)`,border:`1px solid ${C.accent}.18)`,color:C.accent==="rgba(123,47,247,"?"rgba(180,130,255,1)":C.accent==="rgba(80,180,255,"?"rgba(120,200,255,1)":"rgba(61,219,133,1)"},children:C.icon}),s.jsx("p",{className:"a-cap-tit",children:C.label}),s.jsx("p",{className:"a-cap-desc",children:C.desc}),s.jsx("div",{className:"a-cap-chips",children:C.chips.map(R=>s.jsx("span",{className:"a-cap-chip",children:R},R))})]},C.label))})]})]})]})}function Ou({category:v,color:w}){const p={width:36,height:36,viewBox:"0 0 36 36",fill:"none",stroke:w,strokeWidth:1.5,strokeLinecap:"round"};return v==="Power BI"?s.jsxs("svg",{...p,children:[s.jsx("rect",{x:"4",y:"22",width:"5",height:"10",rx:"1.5"}),s.jsx("rect",{x:"11",y:"16",width:"5",height:"16",rx:"1.5"}),s.jsx("rect",{x:"18",y:"10",width:"5",height:"22",rx:"1.5"}),s.jsx("rect",{x:"25",y:"4",width:"5",height:"28",rx:"1.5"})]}):v==="Chrome Extension"?s.jsxs("svg",{...p,children:[s.jsx("circle",{cx:"18",cy:"18",r:"6"}),s.jsx("path",{d:"M18 12V4M18 12h10.4M18 12l-5.2 9"}),s.jsx("path",{d:"M18 24v8M18 24H7.6M18 24l5.2-9"})]}):v==="Figma"?s.jsxs("svg",{...p,children:[s.jsx("rect",{x:"10",y:"4",width:"8",height:"8",rx:"2"}),s.jsx("rect",{x:"18",y:"4",width:"8",height:"8",rx:"2"}),s.jsx("rect",{x:"10",y:"14",width:"8",height:"8",rx:"2"}),s.jsx("circle",{cx:"22",cy:"18",r:"4"}),s.jsx("rect",{x:"10",y:"24",width:"8",height:"8",rx:"2"})]}):v==="Frontend Dev"?s.jsxs("svg",{...p,strokeLinejoin:"round",children:[s.jsx("polyline",{points:"10,14 4,18 10,22"}),s.jsx("polyline",{points:"26,14 32,18 26,22"}),s.jsx("line",{x1:"21",y1:"8",x2:"15",y2:"28"})]}):s.jsx("svg",{...p,children:s.jsx("circle",{cx:"18",cy:"18",r:"10"})})}const Au=4e3;function nf({isActive:v=!1}){const w=N.useRef(null),p=Bu(w,.04),[C,_]=N.useState(0),[R,J]=N.useState("All"),[X,B]=N.useState(!1),[K,G]=N.useState(!1),[ne,W]=N.useState(!1),[re,U]=N.useState(!1),[$,D]=N.useState(!1),ke=N.useRef(null),ee=N.useRef(null),Q=N.useRef(null),I=["All","Website","Chrome Extension","Figma","Power BI"],ue={All:"All Projects",Website:"Websites","Chrome Extension":"Extensions",Figma:"Figma","Power BI":"Power BI"},V=R==="All"?Mo:Mo.filter(S=>S.category===R);N.useEffect(()=>{const S=H=>{H.target.closest(".p-filter")||B(!1)};return X&&window.addEventListener("click",S),()=>window.removeEventListener("click",S)},[X]),N.useEffect(()=>{K?(document.body.style.overflow="hidden",window.dispatchEvent(new CustomEvent("lock-scroll",{detail:!0})),window.history.pushState({isListView:!0},"")):(document.body.style.overflow="unset",window.dispatchEvent(new CustomEvent("lock-scroll",{detail:!1})));const S=()=>{G(!1)};return window.addEventListener("popstate",S),()=>{document.body.style.overflow="unset",window.dispatchEvent(new CustomEvent("lock-scroll",{detail:!1})),window.removeEventListener("popstate",S)}},[K]);const fe=()=>{K&&window.history.back()},be=N.useCallback(()=>{clearInterval(Q.current),!(V.length<=1)&&(Q.current=setInterval(()=>{_(S=>{const H=(S+1)%V.length;return W(!0),setTimeout(()=>W(!1),280),H})},Au))},[V.length]),Ne=N.useCallback(S=>{if(ne||V.length<=1)return;const H=(S%V.length+V.length)%V.length;W(!0),setTimeout(()=>{_(H),W(!1)},300),be()},[ne,be,V.length]);N.useEffect(()=>(v?be():clearInterval(Q.current),()=>clearInterval(Q.current)),[v,be]),N.useEffect(()=>{const S=H=>{H.key==="ArrowRight"&&Ne(C+1),H.key==="ArrowLeft"&&Ne(C-1)};return window.addEventListener("keydown",S),()=>window.removeEventListener("keydown",S)},[C,Ne]);const Fe=N.useCallback(()=>{const S=ee.current;S&&(U(S.scrollLeft>4),D(S.scrollLeft<S.scrollWidth-S.clientWidth-4))},[]);N.useEffect(()=>{const S=ee.current;if(S)return Fe(),S.addEventListener("scroll",Fe),window.addEventListener("resize",Fe),()=>{S.removeEventListener("scroll",Fe),window.removeEventListener("resize",Fe)}},[Fe]);const wt=S=>{const H=ee.current;H._drag=!0,H._startX=S.pageX-H.offsetLeft,H._scrollLeft=H.scrollLeft},tt=S=>{const H=ee.current;H._drag&&(S.preventDefault(),H.scrollLeft=H._scrollLeft-(S.pageX-H.offsetLeft-H._startX))},De=()=>{ee.current&&(ee.current._drag=!1)},$e=S=>{var H;(H=ee.current)==null||H.scrollBy({left:S*200,behavior:"smooth"})};return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
        /* ── Section ── */
        .projects {
          height: 100vh;
          background: transparent;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          padding: 6rem 0 2rem;
          box-sizing: border-box;
        }
        .p-wrap { max-width: 1320px; margin: 0 auto; padding: 0 2.5rem; width: 100%; position: relative; z-index: 20; }
        
.p-hdr-wrap { flex-shrink: 0; }
.p-ftr-wrap { flex-shrink: 0; margin-top: 0; }

        .p-hdr { display: flex; align-items: flex-end; justify-content: space-between; gap: 1.5rem; flex-wrap: wrap; position: relative; z-index: 200; margin-bottom: 2.5rem; }
        .p-h2 { font-family: 'Syne', sans-serif; font-size: clamp(2.2rem, 5vw, 3.6rem); font-weight: 700; color: #fff; letter-spacing: -.035em; line-height: 1; margin-top: .75rem; }
        
        .p-hdr-top { display: flex; align-items: flex-end; justify-content: space-between; width: 100%; }
        .p-hdr-actions { display: flex; gap: .8rem; align-items: center; }
        
        .p-counter { font-family: 'DM Mono', monospace; font-size: .65rem; letter-spacing: .1em; color: rgba(255,255,255,.4); padding: .4rem .9rem; border-radius: 999px; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1); display: flex; align-items: center; gap: .4rem; backdrop-filter: blur(10px); }
        .p-counter b { color: rgba(255,255,255,.85); }

        .btn-list-all {
          font-family: 'Syne', sans-serif; font-size: .75rem; font-weight: 700; letter-spacing: .02em;
          text-transform: uppercase; color: #fff; 
          background: rgba(255, 255, 255, 0.03); 
          border: 1.5px solid rgba(123, 47, 247, 0.6);
          padding: .6rem 1.4rem; border-radius: 999px; cursor: pointer;
          transition: all 0.4s cubic-bezier(0.2, 1, 0.3, 1);
          animation: btn-glow-pulse 3s infinite ease-in-out;
          flex-shrink: 0;
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }
        .btn-list-all:hover { 
          background: rgba(123, 47, 247, 0.15); 
          border-color: #fff;
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 25px rgba(123, 47, 247, 0.4);
        }
        .btn-list-all:active { transform: translateY(0) scale(0.98); }

        @keyframes btn-glow-pulse {
          0%, 100% { 
            box-shadow: 0 0 10px rgba(123,47,247,0.2), inset 0 0 0px rgba(123,47,247,0); 
            border-color: rgba(123,47,247,0.5); 
          }
          50% { 
            box-shadow: 0 0 25px rgba(123,47,247,0.6), inset 0 0 12px rgba(123,47,247,0.2); 
            border-color: rgba(180,120,255,0.9); 
          }
        }
        /* ── Project List View Overlay ── */
        .p-list-view {
          position: fixed; inset: 0; z-index: 9999;
          background: #060609;
          display: flex; flex-direction: column;
          opacity: 0; pointer-events: none; transition: opacity .4s ease;
          overflow-y: auto;
          overscroll-behavior: contain;
        }
        .p-list-view.open { opacity: 1; pointer-events: all; }
        
        .pl-hdr {
          position: sticky; top: 0; z-index: 10;
          padding: 1.5rem 2.5rem;
          background: rgba(6,6,9,0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          display: flex; align-items: center; justify-content: space-between;
        }
        .pl-back {
          font-family: 'Syne', monospace; font-size: 1.2rem;font-weight: 700; color: rgba(255,255,255,0.7);
          display: flex; align-items: center; gap: .5rem; cursor: pointer;
        }

        .pl-back-arrow {
          font-size: 1.7rem; color: rgba(255,255,255,0.7);
        }
        
        .pl-grid {
          display: grid; 
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 1.5rem; padding: 2rem 2.5rem 4rem;
        }
        .pl-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px; padding: 1.2rem;
          display: flex; flex-direction: column; gap: 0.8rem;
          transition: transform 0.3s, border-color 0.3s;
        }
        .pl-card:hover { transform: translateY(-5px); border-color: rgba(123,47,247,0.3); }

        .pl-img-box {
          aspect-ratio: 16/9; border-radius: 12px; overflow: hidden;
          background: rgba(0,0,0,0.2); display: flex; align-items: center; justify-content: center;
        }
        .pl-img { width: 100%; height: 100%; object-fit: contain; padding: 1.2rem; }
        .pl-tit { font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 700; color: #fff; margin: 0.2rem 0 0; }
        .pl-cat { font-family: 'DM Mono', monospace; font-size: .65rem; color: rgba(123,47,247,0.8); text-transform: uppercase; letter-spacing: 0.05em; }
        .pl-desc { font-family: 'DM Sans', sans-serif; font-size: .85rem; color: rgba(255,255,255,0.5); line-height: 1.6; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; }
        .pl-visit {
          margin-top: 0.8rem; padding: 0.75rem; border-radius: 10px;
          background: rgba(123,47,247,0.15); color: #fff; text-align: center;
          font-family: 'DM Mono', monospace; font-size: .7rem; text-decoration: none;
          border: 1px solid rgba(123,47,247,0.3);
          transition: all 0.3s;
        }
        .pl-visit:hover { background: #7B2FF7; box-shadow: 0 4px 15px rgba(123,47,247,0.4); }
        .pl-soon {
           margin-top: auto; padding: 0.5rem; border-radius: 8px;
           background: transparent; color: rgba(255,255,255,0.2); text-align: center;
           font-family: 'DM Mono', monospace; font-size: 0.55rem;
           border: 1px solid rgba(255,255,255,0.05);
        }

        /* ── Filter Dropdown ── */
        .p-filter { position: relative; z-index: 300; }
        .p-filter-btn {
          font-family: 'Syne', sans-serif; font-size: .75rem; font-weight: 700; letter-spacing: .02em; 
          color: #fff; padding: .6rem 1.4rem; border-radius: 999px; 
          background: rgba(255, 255, 255, 0.03); border: 1.5px solid rgba(123, 47, 247, 0.6);
          display: flex; align-items: center; gap: .6rem; cursor: pointer; transition: all .4s cubic-bezier(0.2, 1, 0.3, 1);
          backdrop-filter: blur(10px); text-transform: uppercase;
          box-shadow: 0 4px 15px rgba(123, 47, 247, 0.1);
        }
        .p-filter-btn:hover { 
          background: rgba(123, 47, 247, 0.15); 
          border-color: #fff;
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 25px rgba(123, 47, 247, 0.4);
        }
        .p-filter-btn:active { transform: translateY(0) scale(0.98); }
        .p-filter-btn i { font-size: .5rem; transition: transform .3s; }
        .p-filter-btn.open i { transform: rotate(180deg); }

        .p-filter-menu {
          position: absolute; top: calc(100% + .5rem); right: 0; 
          background: rgba(16,16,28,0.98); border: 1px solid rgba(123,47,247,0.4);
          border-radius: 16px; padding: .5rem; min-width: 180px;
          backdrop-filter: blur(24px); box-shadow: 0 10px 40px rgba(0,0,0,0.8), 0 0 20px rgba(123,47,247,0.15);
          opacity: 0; transform: translateY(-10px); pointer-events: none;
          transition: all .3s cubic-bezier(0.2, 1, 0.3, 1);
        }
        .p-filter-menu.open { opacity: 1; transform: translateY(0); pointer-events: all; }
        
        .p-filter-opt {
          font-family: 'Syne', sans-serif; font-size: .75rem; font-weight: 700; letter-spacing: .02em;
          color: rgba(255,255,255,0.65); padding: .7rem 1rem; border-radius: 10px;
          cursor: pointer; transition: all .2s; white-space: nowrap; text-transform: uppercase;
        }
        .p-filter-opt:hover { background: rgba(255,255,255,0.08); color: #fff; }
        .p-filter-opt.on { background: rgba(123,47,247,0.25); color: #fff; border: 1px solid rgba(123,47,247,0.5); }

        /* ── Carousel Stage ── */
.p-stage {
  position: relative;
  z-index: 10;
  width: 100%;
  flex: 1;
  min-height: 0; /* KEY: lets flex child shrink below content size */
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1200px;
  overflow: visible;
  padding: 0.5rem 0;
}
.p-carousel {
  position: relative;
  width: 100%;
  height: 100%; /* fills the flex-shrinkable stage */
  max-height: 420px; /* never get too tall on big monitors */
  min-height: 220px; /* never get too squished */
  display: flex;
  align-items: center;
  justify-content: center;
}

        /* ── Project card ── */
        .pcard {
          position: absolute;
          width: min(900px, 90%);
          height: 100%;
          border-radius: 24px; overflow: hidden;
          border: 1px solid rgba(255,255,255,.10);
          background: rgba(8,8,16,0.72);
          backdrop-filter: blur(24px) saturate(160%);
          -webkit-backdrop-filter: blur(24px) saturate(160%);
          box-shadow: 0 8px 40px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.06);
          display: grid; grid-template-columns: 1.1fr 0.9fr;
          transition: all 0.7s cubic-bezier(0.2, 1, 0.3, 1);
          opacity: 0;
          pointer-events: none;
          transform: translateX(0) scale(0.6);
          z-index: 1;
        }
        .pcard::after {
          content: '';
          position: absolute; inset: 0; pointer-events: none; z-index: 10;
          opacity: .25; mix-blend-mode: overlay; border-radius: 24px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='.08'/%3E%3C/svg%3E");
        }

        /* Statuses */
        .pcard.active {
          opacity: 1;
          pointer-events: all;
          z-index: 10;
          transform: translateX(0) scale(1);
        }
        .pcard.prev {
          opacity: 0.3;
          pointer-events: all;
          z-index: 5;
          transform: translateX(-42%) scale(0.8);
          cursor: pointer;
          filter: blur(2px);
        }
        .pcard.next {
          opacity: 0.3;
          pointer-events: all;
          z-index: 5;
          transform: translateX(75%) scale(0.8);
          cursor: pointer;
          filter: blur(2px);
        }
        .pcard.prev:hover, .pcard.next:hover { opacity: 0.5; }

        /* ── Progress bar ── */
        .pcard-progress {
          position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
          background: rgba(255,255,255,.06); z-index: 11; border-radius: 0 0 24px 24px; overflow: hidden;
        }
        .pcard-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #7B2FF7, #b06aff);
          border-radius: 999px;
          animation: progress-tick ${Au}ms linear infinite;
        }
        @keyframes progress-tick {
          from { width: 0%; }
          to   { width: 100%; }
        }

        /* ── Visual half ── */
        .pvis {
          position: relative; overflow: hidden;
          display: flex; align-items: center; justify-content: center;
          border-right: 1px solid rgba(255,255,255,.07);
          isolation: isolate;
          background: rgba(0,0,0,.18);
        }
        .pvis-bg { position: absolute; inset: 0; transition: background .6s ease; }
        .pvis-dots { position: absolute; inset: 0; background-image: radial-gradient(circle, rgba(255,255,255,.05) 1px, transparent 1px); background-size: 26px 26px; mask-image: radial-gradient(ellipse 75% 75% at 50% 50%, black, transparent); -webkit-mask-image: radial-gradient(ellipse 75% 75% at 50% 50%, black, transparent); }
        .pimg {
          position: relative; z-index: 1;
          width: calc(100% - 1.5rem); height: calc(100% - 1.5rem);
          border-radius: 14px;
          transition: transform .6s cubic-bezier(.22,1,.36,1);
          box-shadow: 0 4px 24px rgba(0,0,0,.4);
        }
        .pico { position: relative; z-index: 1; width: 88px; height: 88px; border-radius: 24px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,.1); background: rgba(255,255,255,.04); backdrop-filter: blur(8px); }

        /* ── Info half ── */
        .pinfo { display: flex; flex-direction: column; justify-content: space-between; padding: 1.5rem 2rem; overflow: hidden; transition: opacity .4s; }
        .pcard:not(.active) .pinfo { opacity: 0; }

        .ptit-row { display: flex; align-items: flex-start; gap: .65rem; flex-wrap: wrap; margin-bottom: .6rem; }
        .ptit { font-family: 'Syne', sans-serif; font-size: clamp(1.2rem,2.2vw,1.6rem); font-weight: 700; color: #fff; line-height: 1.1; letter-spacing: -.03em; margin: 0; text-shadow: 0 1px 8px rgba(0,0,0,.4); }
        .pcat-pill { font-family: 'DM Mono', monospace; font-size: .54rem; letter-spacing: .1em; text-transform: uppercase; padding: .28rem .78rem; border-radius: 999px; white-space: nowrap; margin-top: .28rem; flex-shrink: 0; backdrop-filter: blur(8px); }
        .pdesc { font-family: 'DM Sans', sans-serif; font-size: .82rem; line-height: 1.7; color: rgba(255,255,255,.55); margin-bottom: .8rem; font-weight: 300; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; }
        .ptags { display: flex; flex-wrap: wrap; gap: .32rem; margin-bottom: 1rem; }
        .pinfo .chip { border-color: rgba(255,255,255,.1); color: rgba(255,255,255,.4); background: rgba(255,255,255,.03); font-size: .65rem; padding: .2rem .6rem; }

        /* ── Stage Arrows (Anchored to center) ── */
        .p-stage-nav {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: min(900px, 90%); /* Same as card width */
          height: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 110;
          pointer-events: none;
        }
        .p-stage-arr {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(8,8,16,0.8);
          border: 1px solid rgba(123,47,247,0.8);
          color: rgba(180,120,255,1);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.2, 1, 0.3, 1);
          backdrop-filter: blur(12px);
          font-size: 1.2rem;
          box-shadow: 0 0 15px rgba(123,47,247,0.3), inset 0 0 8px rgba(123,47,247,0.2);
          pointer-events: all;
          line-height: 1;
          padding-bottom: 3px; /* Nudge up to counter unicode baseline shift */
        }
        .p-stage-arr.left { transform: translateX(-120%); }
        .p-stage-arr.right { transform: translateX(120%); }

        .p-stage-arr:hover {
          background: #7B2FF7;
          color: #fff;
          transform: translateX(var(--tx)) scale(1.1);
          box-shadow: 0 0 30px rgba(123,47,247,0.7), inset 0 0 12px rgba(255,255,255,0.4);
          border-color: #fff;
        }
        .p-stage-arr.left:hover { --tx: -120%; }
        .p-stage-arr.right:hover { --tx: 120%; }

        /* ── Nav ── */
        .pnav { display: flex; align-items: center; gap: .6rem; margin-top: auto; }
        .pnav .narr { display: none; } /* Hide in-card arrows on desktop */
        
        .narr {
          width: 36px; height: 36px; border-radius: 50%;
          border: 1px solid rgba(123,47,247,.45);
          background: rgba(123,47,247,.15);
          color: rgba(180,120,255,1);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all .22s; font-size: .88rem; flex-shrink: 0;
          box-shadow: 0 0 12px rgba(123,47,247,.2);
          backdrop-filter: blur(8px);
          line-height: 1; padding-bottom: 2px; /* Center unicode arrow */
        }
        .narr:hover { border-color: #7B2FF7; color: #fff; background: rgba(123,47,247,.35); box-shadow: 0 0 20px rgba(123,47,247,.5); transform: scale(1.08); }
        /* ── Shiny Visit Button ── */
        .bvisit-wrap {
          position: relative;
          border-radius: 999px;
          overflow: hidden;
          flex: 1;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }
        .bvisit { 
          font-family: 'DM Mono', monospace; font-size: .6rem; letter-spacing: .08em; text-transform: uppercase; color: #fff; text-decoration: none; 
          padding: .65rem 1.3rem; border-radius: 999px; background: rgba(123,47,247,0.15); 
          transition: all .3s cubic-bezier(0.2, 1, 0.3, 1); display: block; position: relative; z-index: 2;
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.15);
          overflow: hidden;
          text-align: center;
        }
        
        /* Moving shimmer sweep */
        .bvisit::before {
          content: '';
          position: absolute; top: 0; left: -150%; width: 100%; height: 100%;
          background: linear-gradient(
            90deg, 
            transparent, 
            rgba(255, 255, 255, 0), 
            rgba(255, 255, 255, 0.3), 
            rgba(255, 255, 255, 0), 
            transparent
          );
          transform: skewX(-25deg);
          animation: shimmer 2.5s infinite;
        }
        @keyframes shimmer {
          0% { left: -150%; }
          40% { left: 150%; }
          100% { left: 150%; }
        }

        .bvisit:hover { 
          background: #7B2FF7; 
          box-shadow: 0 0 25px rgba(123,47,247,0.5), inset 0 0 10px rgba(255,255,255,0.3); 
          border-color: rgba(255,255,255,0.5);
          transform: translateY(-2px);
        }

        .bdis { font-family: 'DM Mono', monospace; font-size: .6rem; letter-spacing: .08em; text-transform: uppercase; color: rgba(255,255,255,.25); padding: .6rem 1.1rem; border-radius: 999px; border: 1px solid rgba(255,255,255,.08); flex: 1; text-align: center; }


        /* ── Thumbnail strip ── */
        .pstrip-wrap { position: relative; }
        .pstrip-btn {
          position: absolute; top: 50%; transform: translateY(-50%); z-index: 2;
          width: 30px; height: 30px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,.1); background: rgba(6,6,9,.92);
          color: rgba(255,255,255,.55); display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all .22s; font-size: .78rem; backdrop-filter: blur(8px);
        }
        .pstrip-btn:hover { border-color: #7B2FF7; color: #fff; background: rgba(123,47,247,.2); }
        .pstrip-btn.sleft  { left: -14px; }
        .pstrip-btn.sright { right: -14px; }
        .pstrip-btn.hidden { opacity: 0; pointer-events: none; }
        .pstrip { display: flex; gap: .55rem; overflow-x: auto; scroll-behavior: smooth; padding: 2px 0 6px; cursor: grab; }
        .pstrip:active { cursor: grabbing; }
        .pstrip::-webkit-scrollbar { display: none; }
        .pstrip { -ms-overflow-style: none; scrollbar-width: none; }
        .si {
          flex: 0 0 160px; padding: .9rem 1rem; border-radius: 14px;
          border: 1px solid rgba(255,255,255,.08);
          background: rgba(8,8,16,0.65);
          backdrop-filter: blur(16px);
          cursor: pointer; transition: all .4s cubic-bezier(.22,1,.36,1); user-select: none;
        }
        .si:hover { background: rgba(255,255,255,.06); border-color: rgba(255,255,255,.14); }
        .si.on { flex: 0 0 210px; background: rgba(123,47,247,.12); border-color: rgba(123,47,247,.28); }
        .si-bar { width: 18px; height: 2px; border-radius: 999px; margin-bottom: .5rem; transition: width .28s cubic-bezier(.22,1,.36,1); }
        .si.on .si-bar { width: 32px; }
        .si-num { font-family: 'DM Mono', monospace; font-size: .6rem; letter-spacing: .1em; margin-bottom: .38rem; color: rgba(255,255,255,.3); transition: color .22s; }
        .si.on .si-num { color: inherit; }
        .si-tit { font-family: 'Syne', sans-serif; font-size: .8rem; font-weight: 700; color: rgba(255,255,255,.5); line-height: 1.3; transition: color .22s; }
        .si.on .si-tit { color: #fff; }
        .si-cat { font-family: 'DM Mono', monospace; font-size: .58rem; color: rgba(255,255,255,.22); margin-top: .25rem; letter-spacing: .06em; text-transform: uppercase; }

        /* ── Laptop / compact height ── */
        @media(max-height: 850px) and (min-width: 761px) {
          .projects { padding: 4rem 0 1.5rem; }
          .pdesc { -webkit-line-clamp: 3; }
        }


        @media(max-height: 700px) and (min-width: 761px) {
          .projects { padding: 3.5rem 0 1rem; }
          .p-carousel { min-height: 180px; }
          .pdesc { -webkit-line-clamp: 2; }
          .ptags { display: none; }
        }

        /* ── Mobile ── */
        @media(max-width: 760px) {
          .projects { height: 100%; padding: 4.5rem 0 1.5rem; display: flex; flex-direction: column; justify-content: flex-start; overflow: hidden; }
          .p-wrap { position: relative; padding: 0 1.2rem; width: 100%; }
          .p-hdr-wrap { margin-bottom: 0rem; }
          .p-ftr-wrap { display: none; }

          .pl-hdr { padding: 1.5rem 1.2rem; }
          .pl-grid { grid-template-columns: 1fr; padding: 1.2rem 1.2rem 4rem; }
          .pl-img { padding: 0.8rem; }
          .pl-tit { font-size: 1rem; }
          .pl-desc { font-size: 0.78rem; }

          .p-hdr { display: flex; flex-direction: column; gap: 0.6rem; width: 100%; margin-bottom: 0; }

          .p-hdr-actions { 
            display: flex;
            width: 100%; 
            justify-content: space-between; 
            align-items: center; 
            margin-top: 0; 
          }
          
          .p-h2 { font-size: 1.8rem; }
          .btn-list-all { display: block; margin-bottom: 4px; padding: 0.5rem 1.2rem; font-size: 0.7rem; }
          
          .p-stage { position: relative; flex: 1; margin: 0; perspective: none; display: flex; align-items: center; padding: 0.5rem 1rem; min-height: 0; }
          .p-carousel { flex-direction: column; height: 100%; width: 100%; display: flex; align-items: center; justify-content: center; }
          .pcard { 
            position: relative; width: 100%; display: none; 
            height: 100%;
            max-height: 500px;
            min-height: 340px;
            grid-template-columns: 1fr; 
            grid-template-rows: 50% 50%; 
            transform: none !important; opacity: 1 !important; 
            filter: none !important; pointer-events: all !important; margin: 0 auto;
            max-width: 380px; 
            overflow: hidden;
          }
          .pcard.active { display: grid; }
          .pvis { 
            height: 100%; border-right: none; border-bottom: 1px solid rgba(255,255,255,.07); 
            width: 100%;
          }
          .pimg { padding: 0.2rem; }
          .pinfo { padding: 1rem 1rem; justify-content: flex-start; gap: 0.5rem; }
          .ptit { font-size: 1rem; }
          .pdesc { font-size: 0.75rem; -webkit-line-clamp: 3; margin-bottom: 0.5rem; line-height: 1.5; }
          .p-stage-nav { display: none; }
          .pnav { margin-top: auto; padding-top: 0.5rem; }
          .pnav .narr { display: flex; }
          .p-filter-btn { background: rgba(123, 47, 247, 0.85); border-color: #7B2FF7; padding: 0.5rem 1.2rem; font-size: 0.7rem; box-shadow: 0 4px 15px rgba(123, 47, 247, 0.3); }
          .narr { width: 32px; height: 32px; font-size: 0.75rem; }
          .bvisit, .bdis { padding: 0.5rem 1rem; font-size: 0.55rem; }
          .ptags { display: none; }
        }
      `}),s.jsxs("section",{id:"projects",className:"projects",ref:w,children:[s.jsx("div",{className:"noise"}),s.jsx("div",{className:"p-wrap p-hdr-wrap",children:s.jsxs("div",{className:`p-hdr fu${p?" in":""}`,children:[s.jsxs("div",{className:"p-hdr-top",children:[s.jsxs("div",{children:[s.jsx("span",{className:"eyebrow",children:"Selected Work"}),s.jsx("h2",{className:"p-h2",children:"My Projects"})]}),s.jsx("button",{className:"btn-list-all",onClick:()=>G(!0),children:"View List"})]}),s.jsxs("div",{className:"p-hdr-actions",children:[s.jsxs("div",{className:"p-counter",children:[s.jsx("b",{children:V.length>0?String(C+1).padStart(2,"0"):"00"}),s.jsx("span",{style:{color:"rgba(255,255,255,.2)"},children:"/"}),String(V.length).padStart(2,"0")]}),s.jsxs("div",{className:"p-filter",children:[s.jsxs("button",{className:`p-filter-btn${X&&!K?" open":""}`,onClick:()=>B(!X),children:[ue[R]," ",s.jsx("i",{children:"▼"})]}),s.jsx("div",{className:`p-filter-menu${X&&!K?" open":""}`,children:I.map(S=>s.jsx("div",{className:`p-filter-opt${R===S?" on":""}`,onClick:()=>{J(S),_(0),W(!1),B(!1)},children:ue[S]},S))})]})]})]})}),s.jsxs("div",{className:`p-list-view${K?" open":""}`,children:[s.jsxs("div",{className:"pl-hdr",children:[s.jsxs("div",{className:"pl-back",onClick:fe,children:[s.jsx("span",{children:"←"})," Back"]}),s.jsxs("div",{className:"p-filter",children:[s.jsxs("button",{className:`p-filter-btn${X&&K?" open":""}`,onClick:()=>B(!X),children:[ue[R]," ",s.jsx("i",{children:"▼"})]}),s.jsx("div",{className:`p-filter-menu${X&&K?" open":""}`,children:I.map(S=>s.jsx("div",{className:`p-filter-opt${R===S?" on":""}`,onClick:()=>{J(S),B(!1)},children:ue[S]},S))})]})]}),s.jsx("div",{className:"pl-grid",children:V.map(S=>(Lo(S.category),s.jsxs("div",{className:"pl-card",children:[s.jsx("div",{className:"pl-img-box",children:S.image?s.jsx("img",{src:S.image,alt:S.title,className:"pl-img"}):s.jsx("div",{style:{transform:"scale(0.7)"},children:s.jsx(Ou,{category:S.category,color:S.color})})}),s.jsx("div",{className:"pl-cat",children:S.category}),s.jsx("div",{className:"pl-tit",children:S.title}),s.jsx("div",{className:"pl-desc",children:S.description}),S.link&&S.link!=="#"?s.jsx("a",{href:S.link,target:"_blank",rel:"noreferrer",className:"pl-visit",children:"Visit"}):s.jsx("div",{className:"pl-soon",children:"Soon"})]},S.id)))})]}),s.jsxs("div",{className:`p-stage fu d2${p?" in":""}`,children:[V.length>1&&s.jsxs("div",{className:"p-stage-nav",children:[s.jsx("button",{className:"p-stage-arr left",onClick:()=>Ne(C-1),children:"←"}),s.jsx("button",{className:"p-stage-arr right",onClick:()=>Ne(C+1),children:"→"})]}),s.jsxs("div",{className:"p-carousel",children:[V.length===0&&s.jsx("div",{style:{color:"rgba(255,255,255,0.5)",fontFamily:"'DM Mono', monospace",fontSize:"0.8rem",textTransform:"uppercase",letterSpacing:"0.1em"},children:"No projects found."}),V.map((S,H)=>{const le=C>=V.length?0:C;let E="hidden";H===le?E="active":V.length===2?H===(le+1)%2&&(E="next"):H===(le-1+V.length)%V.length?E="prev":H===(le+1)%V.length&&(E="next");const F=Lo(S.category);return s.jsxs("div",{className:`pcard ${E}`,style:{borderColor:F.border},onClick:()=>E!=="active"&&Ne(H),onTouchStart:j=>{E==="active"&&(ke.current=j.touches[0].clientX)},onTouchEnd:j=>{if(E!=="active"||!ke.current)return;const d=j.changedTouches[0].clientX-ke.current;Math.abs(d)>50&&Ne(le+(d<0?1:-1)),ke.current=null},children:[E==="active"&&V.length>1&&s.jsx("div",{className:"pcard-progress",children:s.jsx("div",{className:"pcard-progress-fill"},le)}),s.jsx("div",{className:"pvis",children:S.image?s.jsx("div",{style:{width:"calc(100% - 1.5rem)",height:"calc(100% - 1.5rem)",borderRadius:"12px",overflow:"hidden",flexShrink:0,position:"relative",zIndex:1,background:"#fff"},children:s.jsx("img",{src:S.image,alt:S.title,className:"pimg",style:{width:"100%",height:"100%",objectFit:"contain",display:"block"}})}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"pvis-bg",style:{background:`radial-gradient(ellipse at 50% 50%, ${S.color}18 0%, transparent 65%)`}}),s.jsx("div",{className:"pvis-dots"}),s.jsx("div",{className:"pico",style:{background:`${S.color}12`,borderColor:`${S.color}30`},children:s.jsx(Ou,{category:S.category,color:S.color})})]})}),s.jsxs("div",{className:"pinfo",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"ptit-row",children:[s.jsx("div",{className:"ptit",children:S.title}),s.jsx("div",{className:"pcat-pill",style:{background:F.bg,border:`1px solid ${F.border}`,color:F.text},children:S.category})]}),s.jsx("div",{className:"pdesc",children:S.description}),s.jsx("div",{className:"ptags",children:S.tags.map(j=>s.jsx("span",{className:"chip",children:j},j))})]}),s.jsxs("div",{className:"pnav",children:[s.jsx("button",{className:"narr",onClick:j=>{j.stopPropagation(),Ne(C-1)},children:"←"}),s.jsx("button",{className:"narr",onClick:j=>{j.stopPropagation(),Ne(C+1)},children:"→"}),S.link&&S.link!=="#"?s.jsx("div",{className:"bvisit-wrap",onClick:j=>j.stopPropagation(),children:s.jsx("a",{href:S.link,target:"_blank",rel:"noreferrer",className:"bvisit",children:"Visit ↗"})}):s.jsx("span",{className:"bdis",children:"Soon"})]})]})]},S.id)})]})]}),s.jsx("div",{className:"p-wrap p-ftr-wrap",children:s.jsxs("div",{className:`pstrip-wrap fu d3${p?" in":""}`,children:[s.jsx("button",{className:`pstrip-btn sleft${re?"":" hidden"}`,onClick:()=>$e(-1),children:"←"}),s.jsx("button",{className:`pstrip-btn sright${$?"":" hidden"}`,onClick:()=>$e(1),children:"→"}),s.jsx("div",{className:"pstrip",ref:ee,onMouseDown:wt,onMouseMove:tt,onMouseUp:De,onMouseLeave:De,children:V.map((S,H)=>{const le=Lo(S.category);return s.jsxs("div",{className:`si${H===C?" on":""}`,onClick:()=>Ne(H),children:[s.jsx("div",{className:"si-bar",style:{background:H===C?le.text:"rgba(255,255,255,.1)"}}),s.jsx("div",{className:"si-num",style:{color:H===C?le.text:"rgba(255,255,255,.25)"},children:S.num}),s.jsx("div",{className:"si-tit",children:S.title}),s.jsx("div",{className:"si-cat",children:S.category})]},S.id)})})]})})]})]})}function rf(){const v=N.useRef(null),w=Bu(v,.1),[p,C]=N.useState(!1),_=()=>{navigator.clipboard.writeText("nevinabraham77@gmail.com"),C(!0),setTimeout(()=>C(!1),2200)};return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
        .contact { min-height: 100vh; background: transparent; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; padding: 8rem 2.5rem; }
        .c-grid { position: absolute; inset: 0; background-image: radial-gradient(circle, rgba(255,255,255,.04) 1px, transparent 1px); background-size: 44px 44px; mask-image: radial-gradient(ellipse 65% 65% at 50% 50%, black, transparent); -webkit-mask-image: radial-gradient(ellipse 65% 65% at 50% 50%, black, transparent); }
        .c-orb { position: absolute; width: 600px; height: 400px; border-radius: 50%; pointer-events: none; background: radial-gradient(ellipse, rgba(123,47,247,.05) 0%, transparent 65%); top: 50%; left: 50%; transform: translate(-50%,-50%); }
        .c-inner { position: relative; z-index: 2; max-width: 1320px; width: 100%; display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; }
        .c-h2 { font-family: 'Syne', sans-serif; font-size: clamp(2.4rem,6vw,4.4rem); font-weight: 700; color: #fff; line-height: .9; letter-spacing: -.04em; margin: 1.1rem 0 1.5rem; text-shadow: 0 2px 12px rgba(0,0,0,.5); }
        .c-sub { font-family: 'DM Sans', sans-serif; font-size: .93rem; line-height: 1.82; color: rgba(255,255,255,.55); font-weight: 300; }
        .c-right { display: flex; flex-direction: column; gap: .75rem; padding-top: .5rem; }

        /* ── Glass cards ── */
        .email-card {
          display: flex; align-items: center; gap: .9rem;
          background: rgba(8,8,16,0.68);
          backdrop-filter: blur(20px) saturate(160%);
          -webkit-backdrop-filter: blur(20px) saturate(160%);
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 18px; padding: 1.1rem 1.4rem; cursor: pointer; position: relative; transition: all .32s;
          box-shadow: 0 4px 20px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.05);
        }
        .email-card:hover { background: rgba(123,47,247,.12); border-color: rgba(123,47,247,.28); transform: translateY(-2px); box-shadow: 0 8px 28px rgba(0,0,0,.4), 0 0 20px rgba(123,47,247,.15); }
        .eico { width: 36px; height: 36px; border-radius: 12px; flex-shrink: 0; background: rgba(123,47,247,.18); border: 1px solid rgba(123,47,247,.25); display: flex; align-items: center; justify-content: center; color: rgba(180,130,255,1); }
        .etxt { font-family: 'DM Mono', monospace; font-size: .8rem; letter-spacing: .02em; color: rgba(255,255,255,.82); display: block; text-align: left; }
        .ehint { font-family: 'DM Mono', monospace; font-size: .55rem; letter-spacing: .1em; text-transform: uppercase; color: rgba(255,255,255,.28); transition: color .28s; display: block; margin-top: .16rem; }
        .email-card:hover .ehint { color: rgba(180,130,255,.7); }
        .ctoast { position: absolute; top: -2.3rem; left: 50%; transform: translateX(-50%); font-family: 'DM Mono', monospace; font-size: .58rem; letter-spacing: .1em; background: #7B2FF7; color: #fff; padding: .26rem .78rem; border-radius: 999px; white-space: nowrap; opacity: 0; transition: opacity .22s; pointer-events: none; }
        .ctoast.show { opacity: 1; }

        .socials { display: flex; gap: .55rem; }
        .sb {
          height: 44px; padding: 0 1.1rem; border-radius: 12px;
          border: 1px solid rgba(255,255,255,.1);
          background: rgba(8,8,16,0.65);
          backdrop-filter: blur(16px);
          display: flex; align-items: center; gap: .52rem; color: rgba(255,255,255,.55); text-decoration: none; transition: all .26s; font-family: 'DM Mono', monospace; font-size: .6rem; letter-spacing: .06em; text-transform: uppercase;
          box-shadow: 0 2px 12px rgba(0,0,0,.3), inset 0 1px 0 rgba(255,255,255,.04);
        }
        .sb:hover { border-color: rgba(123,47,247,.35); color: #fff; background: rgba(123,47,247,.12); transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,.35), 0 0 14px rgba(123,47,247,.2); }

        .avail-card {
          background: rgba(8,24,16,0.65);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(61,219,133,.18); border-radius: 18px; padding: 1.15rem 1.4rem; display: flex; align-items: center; gap: .9rem;
          box-shadow: 0 4px 20px rgba(0,0,0,.3), inset 0 1px 0 rgba(61,219,133,.05);
        }
        .avail-dot { width: 7px; height: 7px; border-radius: 50%; background: #3DDB85; flex-shrink: 0; box-shadow: 0 0 0 0 rgba(61,219,133,.4); animation: pr2 2.6s ease infinite; }
        @keyframes pr2 { 0% { box-shadow: 0 0 0 0 rgba(61,219,133,.35); } 70% { box-shadow: 0 0 0 8px rgba(61,219,133,0); } 100% { box-shadow: 0 0 0 0 rgba(61,219,133,0); } }
        .avail-txt { font-family: 'DM Sans', sans-serif; font-size: .82rem; color: rgba(255,255,255,.55); font-weight: 300; }
        .avail-txt b { color: #3DDB85; font-weight: 500; }
        .c-footer { margin-top: 2rem; font-family: 'DM Mono', monospace; font-size: .57rem; letter-spacing: .15em; text-transform: uppercase; color: rgba(255,255,255,.2); }

        @media(max-width: 760px) {
          .contact { padding: 7rem 1.4rem 4rem; align-items: flex-start; }
          .c-inner { grid-template-columns: 1fr; gap: 2.8rem; }
          .c-h2 { font-size: clamp(2.4rem, 12vw, 3.6rem); margin: .8rem 0 1rem; }
          .c-sub { font-size: .9rem; line-height: 1.7; }
          .c-right { padding-top: 0; gap: .8rem; }
          .email-card { padding: 1.1rem 1.2rem; }
          .etxt { font-size: .75rem; }
          .socials { flex-wrap: wrap; gap: .6rem; }
          .sb { flex: 1; justify-content: center; min-width: 120px; }
          .c-footer { margin-top: 2rem; }
        }
      `}),s.jsxs("section",{id:"contact",className:"contact",ref:v,children:[s.jsx("div",{className:"c-grid"}),s.jsx("div",{className:"c-orb"}),s.jsx("div",{className:"noise"}),s.jsxs("div",{className:"c-inner",children:[s.jsxs("div",{children:[s.jsx("div",{className:`fu${w?" in":""}`,children:s.jsx("span",{className:"eyebrow",children:"Get In Touch"})}),s.jsxs("h2",{className:`c-h2 fu d1${w?" in":""}`,children:["Have a",s.jsx("br",{}),"project",s.jsx("br",{}),"in mind?"]}),s.jsx("p",{className:`c-sub fu d2${w?" in":""}`,children:"Let's make it happen — I'm open to freelance work, collaborations, and full-time opportunities."})]}),s.jsxs("div",{className:`c-right fu d2${w?" in":""}`,children:[s.jsx("div",{style:{position:"relative"},children:s.jsxs("div",{className:"email-card",onClick:_,children:[s.jsx("div",{className:"eico",children:s.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),s.jsx("polyline",{points:"22,6 12,13 2,6"})]})}),s.jsxs("div",{children:[s.jsx("span",{className:"etxt",children:"nevinabraham77@gmail.com"}),s.jsx("span",{className:"ehint",children:p?"✓ Copied to clipboard":"Click to copy email"})]}),s.jsx("div",{className:`ctoast${p?" show":""}`,children:"Copied!"})]})}),s.jsx("div",{children:s.jsxs("div",{className:"socials",children:[s.jsxs("a",{href:"https://github.com/n3vdev",target:"_blank",rel:"noreferrer",className:"sb",children:[s.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"currentColor",children:s.jsx("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})}),"GitHub"]}),s.jsxs("a",{href:"https://www.linkedin.com/in/nevin-abraham77/",target:"_blank",rel:"noreferrer",className:"sb",children:[s.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"currentColor",children:s.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})}),"LinkedIn"]})]})})]}),s.jsx("div",{className:`c-footer fu d5${w?" in":""}`,children:"© 2026 Nevin Abraham"})]})]})]})}function lf({done:v}){const[w,p]=N.useState(0);return N.useEffect(()=>{if(v){p(100);return}const C=setInterval(()=>{p(_=>_>=95?_:_+Math.floor(Math.random()*5)+1)},150);return()=>clearInterval(C)},[v]),s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
        .ldr {
          position: fixed; inset: 0; z-index: 9999;
          background: #060609;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          pointer-events: all;
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%);
          transition: clip-path 1.2s cubic-bezier(0.85, 0, 0.15, 1);
          overflow: hidden;
        }
        .ldr.done {
          clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 0%);
          pointer-events: none;
        }

        /* ── Modern Ring ── */
        .ldr-ring {
          position: relative;
          width: 180px; height: 180px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 2rem;
        }
        .ldr-ring-svg {
          position: absolute; inset: 0;
          transform: rotate(-90deg);
        }
        .ldr-ring-base {
          fill: none;
          stroke: rgba(123, 47, 247, 0.05);
          stroke-width: 2;
        }
        .ldr-ring-progress {
          fill: none;
          stroke: #7B2FF7;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-dasharray: 502; /* 2 * PI * 80 */
          stroke-dashoffset: ${502-502*w/100};
          transition: stroke-dashoffset 0.4s cubic-bezier(0.2, 1, 0.3, 1);
          filter: drop-shadow(0 0 10px rgba(123, 47, 247, 0.6));
        }

        .ldr-num {
          font-family: 'DM Mono', monospace;
          font-size: 2.8rem; font-weight: 300;
          color: #fff; letter-spacing: -0.05em;
          display: flex; align-items: baseline;
        }
        .ldr-num span { font-size: 1rem; opacity: 0.3; margin-left: 2px; }

        /* ── Staggered Loading Text ── */
        .ldr-txt-wrap {
          display: flex; gap: 0.4rem;
        }
        .ldr-char {
          font-family: 'Syne', sans-serif;
          font-size: 0.7rem; font-weight: 700;
          letter-spacing: 0.4em; text-transform: uppercase;
          color: rgba(255, 255, 255, 0.4);
          animation: char-glow 2s infinite;
          animation-delay: var(--d);
        }
        @keyframes char-glow {
          0%, 100% { color: rgba(255, 255, 255, 0.2); transform: translateY(0); filter: blur(0); }
          50% { color: #fff; transform: translateY(-3px); filter: drop-shadow(0 0 5px #7B2FF7); }
        }

        /* ── Background Subtle Glow ── */
        .ldr-glow {
          position: absolute;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(123, 47, 247, 0.12) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(50px);
          animation: bg-pulse 4s infinite alternate ease-in-out;
        }
        @keyframes bg-pulse {
          from { transform: scale(1); opacity: 0.5; }
          to { transform: scale(1.3); opacity: 0.8; }
        }
      `}),s.jsxs("div",{className:`ldr${v?" done":""}`,children:[s.jsx("div",{className:"ldr-glow"}),s.jsxs("div",{className:"ldr-ring",children:[s.jsxs("svg",{className:"ldr-ring-svg",viewBox:"0 0 180 180",children:[s.jsx("circle",{className:"ldr-ring-base",cx:"90",cy:"90",r:"80"}),s.jsx("circle",{className:"ldr-ring-progress",cx:"90",cy:"90",r:"80"})]}),s.jsxs("div",{className:"ldr-num",children:[w,s.jsx("span",{children:"%"})]})]}),s.jsx("div",{className:"ldr-txt-wrap",children:"LOADING".split("").map((C,_)=>s.jsx("span",{className:"ldr-char",style:{"--d":`${_*.1}s`},children:C},_))})]})]})}const of=`
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`,sf=`
precision highp float;
uniform vec2  u_res;
uniform float u_time;
uniform vec2  u_mouse;
uniform float u_sx0;
uniform float u_sx1;
uniform float u_sx2;
uniform float u_sx3;
uniform float u_sx4;
uniform float u_sx5;

float smin(float a,float b,float k){float h=clamp(.5+.5*(b-a)/k,0.,1.);return mix(b,a,h)-k*h*(1.-h);}
float blob(vec2 p,vec2 c,float r){return length(p-c)-r;}
vec3 palette(float t){
  vec3 a=vec3(.5,.5,.5),b=vec3(.5,.5,.5),c=vec3(1.,1.,1.),d=vec3(.48,.31,.60);
  return a+b*cos(6.28318*(c*t+d));
}
void main(){
  vec2 uv=(gl_FragCoord.xy-u_res*.5)/min(u_res.x,u_res.y);
  vec2 mouse=(u_mouse-u_res*.5)/min(u_res.x,u_res.y);
  float t=u_time*.4;
  vec2 b0=vec2(sin(t*.7)*.55+u_sx0,cos(t*.5)*.38);
  vec2 b1=vec2(cos(t*.6)*.42+u_sx1,sin(t*.8)*.45);
  vec2 b2=vec2(sin(t*.9+1.2)*.38+u_sx2,cos(t*.4+.8)*.3);
  vec2 b3=vec2(cos(t*.5+2.1)*.48+u_sx3,sin(t*.7+1.5)*.42);
  vec2 b4=vec2(sin(t*.8+.5)*.32+u_sx4,cos(t*.6+2.)*.36);
  vec2 b5=mix(b0,mouse,.72); b5.x+=u_sx5;
  float r=.22;
  float d=smin(smin(smin(smin(smin(blob(uv,b0,r*1.1),blob(uv,b1,r*.9),.18),blob(uv,b2,r*1.2),.18),blob(uv,b3,r*.85),.18),blob(uv,b4,r*1.),.18),blob(uv,b5,r*.7),.18);
  vec3 bg=vec3(.024,.024,.035);
  vec3 col=palette(length(uv)*.5+atan(uv.y,uv.x)*.16+t*.12);
  vec3 final=bg+col*.25*exp(-max(d,0.)*9.)*.55+col*(.55+sin(d*40.+t*3.)*.04)*.8*smoothstep(.012,-.012,d);
  final*=1.-smoothstep(.4,1.1,length(uv));
  final+=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453)*.03*.4;
  gl_FragColor=vec4(final,1.);
}
`;function af(v){const w=v.getContext("webgl")||v.getContext("experimental-webgl");if(!w)return null;const p=(J,X)=>{const B=w.createShader(J);return w.shaderSource(B,X),w.compileShader(B),B},C=w.createProgram();w.attachShader(C,p(w.VERTEX_SHADER,of)),w.attachShader(C,p(w.FRAGMENT_SHADER,sf)),w.linkProgram(C),w.useProgram(C);const _=w.createBuffer();w.bindBuffer(w.ARRAY_BUFFER,_),w.bufferData(w.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),w.STATIC_DRAW);const R=w.getAttribLocation(C,"a_pos");return w.enableVertexAttribArray(R),w.vertexAttribPointer(R,2,w.FLOAT,!1,0,0),{gl:w,uRes:w.getUniformLocation(C,"u_res"),uTime:w.getUniformLocation(C,"u_time"),uMouse:w.getUniformLocation(C,"u_mouse"),uSx:[0,1,2,3,4,5].map(J=>w.getUniformLocation(C,`u_sx${J}`))}}function uf(v){return[0,-.38,.38,-.38][v]??0}function cf({sectionIndex:v,loaded:w=!1}){const p=N.useRef(null),C=N.useRef(null),_=N.useRef({x:0,y:0}),R=N.useRef({x:0,y:0}),J=N.useRef(0),X=N.useRef([0,0,0,0,0,0]),B=N.useRef();return N.useEffect(()=>{J.current=uf(v)},[v]),N.useEffect(()=>{const K=p.current;C.current=af(K);const G=()=>{var $;K.width=window.innerWidth,K.height=window.innerHeight,($=C.current)==null||$.gl.viewport(0,0,K.width,K.height)};G(),window.addEventListener("resize",G);const ne=$=>{R.current={x:$.clientX,y:$.clientY}},W=$=>{R.current={x:$.touches[0].clientX,y:$.touches[0].clientY}};window.addEventListener("mousemove",ne),window.addEventListener("touchmove",W,{passive:!0});const re=[.055,.038,.028,.02,.015,.011],U=$=>{_.current.x+=(R.current.x-_.current.x)*.06,_.current.y+=(R.current.y-_.current.y)*.06;const D=X.current;D[0]+=(J.current-D[0])*re[0];for(let ee=1;ee<6;ee++)D[ee]+=(D[ee-1]-D[ee])*re[ee];const ke=C.current;if(ke){const{gl:ee,uRes:Q,uTime:I,uMouse:ue,uSx:V}=ke;ee.uniform2f(Q,K.width,K.height),ee.uniform1f(I,$*.001),ee.uniform2f(ue,_.current.x,K.height-_.current.y);for(let fe=0;fe<6;fe++)ee.uniform1f(V[fe],D[fe]);ee.drawArrays(ee.TRIANGLE_STRIP,0,4)}B.current=requestAnimationFrame(U)};return B.current=requestAnimationFrame(U),()=>{window.removeEventListener("resize",G),window.removeEventListener("mousemove",ne),window.removeEventListener("touchmove",W),cancelAnimationFrame(B.current)}},[]),s.jsx("canvas",{ref:p,style:{position:"fixed",inset:0,width:"100%",height:"100%",zIndex:0,pointerEvents:"none",transform:w?"scale(1)":"scale(3)",transition:w?"transform 1.5s cubic-bezier(0.22, 1, 0.36, 1) 0.9s":"none",transformOrigin:"center center"}})}const Xt=["hero","about","projects","contact"],Rn=900,df=950,ff=30;function pf(){const[v,w]=N.useState(!1),[p,C]=N.useState(0),[_,R]=N.useState(null),[J,X]=N.useState(1),[B,K]=N.useState(!1),[G,ne]=N.useState(!1),W=N.useRef(!1),re=N.useRef(null),U=N.useRef(0),$=N.useRef(null);N.useEffect(()=>{const Q=I=>ne(I.detail);return window.addEventListener("lock-scroll",Q),()=>window.removeEventListener("lock-scroll",Q)},[]),N.useEffect(()=>{const Q=Mo.filter(V=>V.image).map(V=>new Promise(fe=>{const be=new Image;be.onload=fe,be.onerror=fe,be.src=V.image})),I=new Promise(V=>setTimeout(V,1500)),ue=document.fonts?document.fonts.ready:Promise.resolve();Promise.all([I,ue,...Q]).then(()=>w(!0))},[]);const D=N.useCallback(Q=>{if(G)return;const I=Math.max(0,Math.min(Xt.length-1,Q));I===p||W.current||(W.current=!0,X(I>p?1:-1),R(p),C(I),K(!0),setTimeout(()=>{R(null),K(!1),W.current=!1},df))},[p,G]);N.useEffect(()=>{const Q=I=>{if(!G){if(I.preventDefault(),W.current){U.current=0,clearTimeout($.current);return}U.current+=I.deltaY,clearTimeout($.current),$.current=setTimeout(()=>{U.current=0},200),Math.abs(U.current)>=ff&&(D(p+(U.current>0?1:-1)),U.current=0)}};return window.addEventListener("wheel",Q,{passive:!1}),()=>window.removeEventListener("wheel",Q)},[D,p,G]),N.useEffect(()=>{const Q=ue=>{G||(re.current=ue.touches[0].clientY)},I=ue=>{if(G||re.current===null)return;const V=re.current-ue.changedTouches[0].clientY;Math.abs(V)>40&&D(p+(V>0?1:-1)),re.current=null};return window.addEventListener("touchstart",Q,{passive:!0}),window.addEventListener("touchend",I,{passive:!0}),()=>{window.removeEventListener("touchstart",Q),window.removeEventListener("touchend",I)}},[D,p,G]),N.useEffect(()=>{const Q=I=>{G||((I.key==="ArrowDown"||I.key==="PageDown")&&D(p+1),(I.key==="ArrowUp"||I.key==="PageUp")&&D(p-1))};return window.addEventListener("keydown",Q),()=>window.removeEventListener("keydown",Q)},[D,p,G]),N.useEffect(()=>{const Q=I=>{const ue=Xt.indexOf(I.detail);ue!==-1&&D(ue)};return window.addEventListener("snapto",Q),()=>window.removeEventListener("snapto",Q)},[D]);const ke=N.useCallback(Q=>{const I=Xt.indexOf(Q);I!==-1&&D(I)},[D]),ee=[s.jsx(Zd,{loaded:v},"hero"),s.jsx(tf,{},"about"),s.jsx(nf,{isActive:p===Xt.indexOf("projects")},"projects"),s.jsx(rf,{},"contact")];return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:Yd}),s.jsx("style",{children:`
        html, body { overflow: hidden; height: 100%; }

        .snap-root {
          position: fixed;
          inset: 0;
          overflow: hidden;
        }

        .snap-page {
          position: absolute;
          inset: 0;
          will-change: transform, opacity;
          overflow: hidden;
          transform: translateY(100%);
          opacity: 0;
          pointer-events: none;
        }

        .snap-page.is-enter {
          opacity: 1;
          animation: page-enter-down ${Rn}ms cubic-bezier(0.76, 0, 0.24, 1) forwards;
        }
        .snap-page.is-enter.from-above {
          opacity: 1;
          animation: page-enter-up ${Rn}ms cubic-bezier(0.76, 0, 0.24, 1) forwards;
        }
        .snap-page.is-exit {
          opacity: 1;
          animation: page-exit-up ${Rn}ms cubic-bezier(0.76, 0, 0.24, 1) forwards;
        }
        .snap-page.is-exit.to-below {
          opacity: 1;
          animation: page-exit-down ${Rn}ms cubic-bezier(0.76, 0, 0.24, 1) forwards;
        }
        .snap-page.is-active {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }

        @keyframes page-enter-down {
          from { transform: translateY(100%); }
          to   { transform: translateY(0); pointer-events: auto; }
        }
        @keyframes page-enter-up {
          from { transform: translateY(-100%); }
          to   { transform: translateY(0); pointer-events: auto; }
        }
        @keyframes page-exit-up {
          from { transform: translateY(0); }
          to   { transform: translateY(-100%); }
        }
        @keyframes page-exit-down {
          from { transform: translateY(0); }
          to   { transform: translateY(100%); }
        }

        .scroll-dots {
          position: fixed;
          right: 1.6rem;
          top: 50%;
          transform: translateY(-50%);
          z-index: 200;
          display: flex;
          flex-direction: column;
          gap: .55rem;
          align-items: center;
        }
        .scroll-dot {
          width: 5px;
          height: 5px;
          border-radius: 999px;
          background: rgba(255,255,255,.18);
          cursor: pointer;
          transition: all .4s cubic-bezier(.22,1,.36,1);
          border: 1px solid transparent;
        }
        .scroll-dot.on {
          background: #7B2FF7;
          height: 18px;
          box-shadow: 0 0 8px rgba(123,47,247,.6);
        }
        .scroll-dot:hover:not(.on) { background: rgba(255,255,255,.4); }

        .scroll-progress {
          position: fixed;
          top: 0; left: 0;
          height: 2px;
          background: linear-gradient(90deg, #7B2FF7, #a855f7);
          z-index: 300;
          transition: width ${Rn}ms cubic-bezier(0.76,0,0.24,1);
          box-shadow: 0 0 8px rgba(123,47,247,.5);
        }

        @media(max-width:600px) { .scroll-dots { display: none; } }
      `}),s.jsx(cf,{sectionIndex:p,loaded:v}),s.jsx(lf,{done:v}),s.jsx("div",{className:"scroll-progress",style:{width:`${p/(Xt.length-1)*100}%`,opacity:v?1:0,transition:`opacity 0.6s ease, width ${Rn}ms cubic-bezier(0.76,0,0.24,1)`}}),s.jsx("div",{className:"scroll-dots",style:{opacity:v?1:0,transition:"opacity 0.6s ease"},children:Xt.map((Q,I)=>s.jsx("div",{className:`scroll-dot${I===p?" on":""}`,onClick:()=>D(I),title:Q.charAt(0).toUpperCase()+Q.slice(1)},Q))}),s.jsx("div",{style:{opacity:v?1:0,transition:"opacity 0.6s ease",position:"relative",zIndex:G?0:1e3},children:s.jsx(Xd,{active:Xt[p],onNav:ke})}),s.jsx("div",{className:"snap-root",style:{opacity:v?1:0,transition:"opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1)",zIndex:G?2e3:0},children:ee.map((Q,I)=>{const ue=I===p,V=I===_;let fe="snap-page";return ue?fe+=B?` is-enter${J===-1?" from-above":""}`:" is-active":V&&(fe+=` is-exit${J===-1?" to-below":""}`),s.jsx("div",{className:fe,style:{zIndex:ue?2:V?1:0},children:Q},Xt[I])})})]})}Hd.createRoot(document.getElementById("root")).render(s.jsx(N.StrictMode,{children:s.jsx(pf,{})}));
