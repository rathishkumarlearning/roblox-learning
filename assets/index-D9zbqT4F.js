(function(){const J=document.createElement("link").relList;if(J&&J.supports&&J.supports("modulepreload"))return;for(const B of document.querySelectorAll('link[rel="modulepreload"]'))h(B);new MutationObserver(B=>{for(const k of B)if(k.type==="childList")for(const V of k.addedNodes)V.tagName==="LINK"&&V.rel==="modulepreload"&&h(V)}).observe(document,{childList:!0,subtree:!0});function j(B){const k={};return B.integrity&&(k.integrity=B.integrity),B.referrerPolicy&&(k.referrerPolicy=B.referrerPolicy),B.crossOrigin==="use-credentials"?k.credentials="include":B.crossOrigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function h(B){if(B.ep)return;B.ep=!0;const k=j(B);fetch(B.href,k)}})();var oc={exports:{}},Cl={};var pd;function Jm(){if(pd)return Cl;pd=1;var x=Symbol.for("react.transitional.element"),J=Symbol.for("react.fragment");function j(h,B,k){var V=null;if(k!==void 0&&(V=""+k),B.key!==void 0&&(V=""+B.key),"key"in B){k={};for(var L in B)L!=="key"&&(k[L]=B[L])}else k=B;return B=k.ref,{$$typeof:x,type:h,key:V,ref:B!==void 0?B:null,props:k}}return Cl.Fragment=J,Cl.jsx=j,Cl.jsxs=j,Cl}var yd;function Wm(){return yd||(yd=1,oc.exports=Jm()),oc.exports}var d=Wm(),uc={exports:{}},G={};var gd;function Fm(){if(gd)return G;gd=1;var x=Symbol.for("react.transitional.element"),J=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),k=Symbol.for("react.consumer"),V=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),M=Symbol.for("react.activity"),H=Symbol.iterator;function K(r){return r===null||typeof r!="object"?null:(r=H&&r[H]||r["@@iterator"],typeof r=="function"?r:null)}var X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,ye={};function ae(r,E,D){this.props=r,this.context=E,this.refs=ye,this.updater=D||X}ae.prototype.isReactComponent={},ae.prototype.setState=function(r,E){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,E,"setState")},ae.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function Se(){}Se.prototype=ae.prototype;function ge(r,E,D){this.props=r,this.context=E,this.refs=ye,this.updater=D||X}var Ye=ge.prototype=new Se;Ye.constructor=ge,F(Ye,ae.prototype),Ye.isPureReactComponent=!0;var Ce=Array.isArray;function Ue(){}var Z={H:null,A:null,T:null,S:null},Qe=Object.prototype.hasOwnProperty;function At(r,E,D){var z=D.ref;return{$$typeof:x,type:r,key:E,ref:z!==void 0?z:null,props:D}}function Vn(r,E){return At(r.type,E,r.props)}function wt(r){return typeof r=="object"&&r!==null&&r.$$typeof===x}function Ze(r){var E={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(D){return E[D]})}var En=/\/+/g;function Mt(r,E){return typeof r=="object"&&r!==null&&r.key!=null?Ze(""+r.key):E.toString(36)}function Ct(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(Ue,Ue):(r.status="pending",r.then(function(E){r.status==="pending"&&(r.status="fulfilled",r.value=E)},function(E){r.status==="pending"&&(r.status="rejected",r.reason=E)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function b(r,E,D,z,q){var P=typeof r;(P==="undefined"||P==="boolean")&&(r=null);var ue=!1;if(r===null)ue=!0;else switch(P){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(r.$$typeof){case x:case J:ue=!0;break;case W:return ue=r._init,b(ue(r._payload),E,D,z,q)}}if(ue)return q=q(r),ue=z===""?"."+Mt(r,0):z,Ce(q)?(D="",ue!=null&&(D=ue.replace(En,"$&/")+"/"),b(q,E,D,"",function(Oa){return Oa})):q!=null&&(wt(q)&&(q=Vn(q,D+(q.key==null||r&&r.key===q.key?"":(""+q.key).replace(En,"$&/")+"/")+ue)),E.push(q)),1;ue=0;var Ve=z===""?".":z+":";if(Ce(r))for(var Ae=0;Ae<r.length;Ae++)z=r[Ae],P=Ve+Mt(z,Ae),ue+=b(z,E,D,P,q);else if(Ae=K(r),typeof Ae=="function")for(r=Ae.call(r),Ae=0;!(z=r.next()).done;)z=z.value,P=Ve+Mt(z,Ae++),ue+=b(z,E,D,P,q);else if(P==="object"){if(typeof r.then=="function")return b(Ct(r),E,D,z,q);throw E=String(r),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return ue}function w(r,E,D){if(r==null)return r;var z=[],q=0;return b(r,z,"","",function(P){return E.call(D,P,q++)}),z}function U(r){if(r._status===-1){var E=r._result;E=E(),E.then(function(D){(r._status===0||r._status===-1)&&(r._status=1,r._result=D)},function(D){(r._status===0||r._status===-1)&&(r._status=2,r._result=D)}),r._status===-1&&(r._status=0,r._result=E)}if(r._status===1)return r._result.default;throw r._result}var re=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},me={map:w,forEach:function(r,E,D){w(r,function(){E.apply(this,arguments)},D)},count:function(r){var E=0;return w(r,function(){E++}),E},toArray:function(r){return w(r,function(E){return E})||[]},only:function(r){if(!wt(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return G.Activity=M,G.Children=me,G.Component=ae,G.Fragment=j,G.Profiler=B,G.PureComponent=ge,G.StrictMode=h,G.Suspense=A,G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,G.__COMPILER_RUNTIME={__proto__:null,c:function(r){return Z.H.useMemoCache(r)}},G.cache=function(r){return function(){return r.apply(null,arguments)}},G.cacheSignal=function(){return null},G.cloneElement=function(r,E,D){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var z=F({},r.props),q=r.key;if(E!=null)for(P in E.key!==void 0&&(q=""+E.key),E)!Qe.call(E,P)||P==="key"||P==="__self"||P==="__source"||P==="ref"&&E.ref===void 0||(z[P]=E[P]);var P=arguments.length-2;if(P===1)z.children=D;else if(1<P){for(var ue=Array(P),Ve=0;Ve<P;Ve++)ue[Ve]=arguments[Ve+2];z.children=ue}return At(r.type,q,z)},G.createContext=function(r){return r={$$typeof:V,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:k,_context:r},r},G.createElement=function(r,E,D){var z,q={},P=null;if(E!=null)for(z in E.key!==void 0&&(P=""+E.key),E)Qe.call(E,z)&&z!=="key"&&z!=="__self"&&z!=="__source"&&(q[z]=E[z]);var ue=arguments.length-2;if(ue===1)q.children=D;else if(1<ue){for(var Ve=Array(ue),Ae=0;Ae<ue;Ae++)Ve[Ae]=arguments[Ae+2];q.children=Ve}if(r&&r.defaultProps)for(z in ue=r.defaultProps,ue)q[z]===void 0&&(q[z]=ue[z]);return At(r,P,q)},G.createRef=function(){return{current:null}},G.forwardRef=function(r){return{$$typeof:L,render:r}},G.isValidElement=wt,G.lazy=function(r){return{$$typeof:W,_payload:{_status:-1,_result:r},_init:U}},G.memo=function(r,E){return{$$typeof:T,type:r,compare:E===void 0?null:E}},G.startTransition=function(r){var E=Z.T,D={};Z.T=D;try{var z=r(),q=Z.S;q!==null&&q(D,z),typeof z=="object"&&z!==null&&typeof z.then=="function"&&z.then(Ue,re)}catch(P){re(P)}finally{E!==null&&D.types!==null&&(E.types=D.types),Z.T=E}},G.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},G.use=function(r){return Z.H.use(r)},G.useActionState=function(r,E,D){return Z.H.useActionState(r,E,D)},G.useCallback=function(r,E){return Z.H.useCallback(r,E)},G.useContext=function(r){return Z.H.useContext(r)},G.useDebugValue=function(){},G.useDeferredValue=function(r,E){return Z.H.useDeferredValue(r,E)},G.useEffect=function(r,E){return Z.H.useEffect(r,E)},G.useEffectEvent=function(r){return Z.H.useEffectEvent(r)},G.useId=function(){return Z.H.useId()},G.useImperativeHandle=function(r,E,D){return Z.H.useImperativeHandle(r,E,D)},G.useInsertionEffect=function(r,E){return Z.H.useInsertionEffect(r,E)},G.useLayoutEffect=function(r,E){return Z.H.useLayoutEffect(r,E)},G.useMemo=function(r,E){return Z.H.useMemo(r,E)},G.useOptimistic=function(r,E){return Z.H.useOptimistic(r,E)},G.useReducer=function(r,E,D){return Z.H.useReducer(r,E,D)},G.useRef=function(r){return Z.H.useRef(r)},G.useState=function(r){return Z.H.useState(r)},G.useSyncExternalStore=function(r,E,D){return Z.H.useSyncExternalStore(r,E,D)},G.useTransition=function(){return Z.H.useTransition()},G.version="19.2.4",G}var vd;function dc(){return vd||(vd=1,uc.exports=Fm()),uc.exports}var rt=dc(),cc={exports:{}},Tl={},sc={exports:{}},rc={};var bd;function Pm(){return bd||(bd=1,(function(x){function J(b,w){var U=b.length;b.push(w);e:for(;0<U;){var re=U-1>>>1,me=b[re];if(0<B(me,w))b[re]=w,b[U]=me,U=re;else break e}}function j(b){return b.length===0?null:b[0]}function h(b){if(b.length===0)return null;var w=b[0],U=b.pop();if(U!==w){b[0]=U;e:for(var re=0,me=b.length,r=me>>>1;re<r;){var E=2*(re+1)-1,D=b[E],z=E+1,q=b[z];if(0>B(D,U))z<me&&0>B(q,D)?(b[re]=q,b[z]=U,re=z):(b[re]=D,b[E]=U,re=E);else if(z<me&&0>B(q,U))b[re]=q,b[z]=U,re=z;else break e}}return w}function B(b,w){var U=b.sortIndex-w.sortIndex;return U!==0?U:b.id-w.id}if(x.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var k=performance;x.unstable_now=function(){return k.now()}}else{var V=Date,L=V.now();x.unstable_now=function(){return V.now()-L}}var A=[],T=[],W=1,M=null,H=3,K=!1,X=!1,F=!1,ye=!1,ae=typeof setTimeout=="function"?setTimeout:null,Se=typeof clearTimeout=="function"?clearTimeout:null,ge=typeof setImmediate<"u"?setImmediate:null;function Ye(b){for(var w=j(T);w!==null;){if(w.callback===null)h(T);else if(w.startTime<=b)h(T),w.sortIndex=w.expirationTime,J(A,w);else break;w=j(T)}}function Ce(b){if(F=!1,Ye(b),!X)if(j(A)!==null)X=!0,Ue||(Ue=!0,Ze());else{var w=j(T);w!==null&&Ct(Ce,w.startTime-b)}}var Ue=!1,Z=-1,Qe=5,At=-1;function Vn(){return ye?!0:!(x.unstable_now()-At<Qe)}function wt(){if(ye=!1,Ue){var b=x.unstable_now();At=b;var w=!0;try{e:{X=!1,F&&(F=!1,Se(Z),Z=-1),K=!0;var U=H;try{t:{for(Ye(b),M=j(A);M!==null&&!(M.expirationTime>b&&Vn());){var re=M.callback;if(typeof re=="function"){M.callback=null,H=M.priorityLevel;var me=re(M.expirationTime<=b);if(b=x.unstable_now(),typeof me=="function"){M.callback=me,Ye(b),w=!0;break t}M===j(A)&&h(A),Ye(b)}else h(A);M=j(A)}if(M!==null)w=!0;else{var r=j(T);r!==null&&Ct(Ce,r.startTime-b),w=!1}}break e}finally{M=null,H=U,K=!1}w=void 0}}finally{w?Ze():Ue=!1}}}var Ze;if(typeof ge=="function")Ze=function(){ge(wt)};else if(typeof MessageChannel<"u"){var En=new MessageChannel,Mt=En.port2;En.port1.onmessage=wt,Ze=function(){Mt.postMessage(null)}}else Ze=function(){ae(wt,0)};function Ct(b,w){Z=ae(function(){b(x.unstable_now())},w)}x.unstable_IdlePriority=5,x.unstable_ImmediatePriority=1,x.unstable_LowPriority=4,x.unstable_NormalPriority=3,x.unstable_Profiling=null,x.unstable_UserBlockingPriority=2,x.unstable_cancelCallback=function(b){b.callback=null},x.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Qe=0<b?Math.floor(1e3/b):5},x.unstable_getCurrentPriorityLevel=function(){return H},x.unstable_next=function(b){switch(H){case 1:case 2:case 3:var w=3;break;default:w=H}var U=H;H=w;try{return b()}finally{H=U}},x.unstable_requestPaint=function(){ye=!0},x.unstable_runWithPriority=function(b,w){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var U=H;H=b;try{return w()}finally{H=U}},x.unstable_scheduleCallback=function(b,w,U){var re=x.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?re+U:re):U=re,b){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=U+me,b={id:W++,callback:w,priorityLevel:b,startTime:U,expirationTime:me,sortIndex:-1},U>re?(b.sortIndex=U,J(T,b),j(A)===null&&b===j(T)&&(F?(Se(Z),Z=-1):F=!0,Ct(Ce,U-re))):(b.sortIndex=me,J(A,b),X||K||(X=!0,Ue||(Ue=!0,Ze()))),b},x.unstable_shouldYield=Vn,x.unstable_wrapCallback=function(b){var w=H;return function(){var U=H;H=w;try{return b.apply(this,arguments)}finally{H=U}}}})(rc)),rc}var Sd;function Im(){return Sd||(Sd=1,sc.exports=Pm()),sc.exports}var fc={exports:{}},qe={};var Cd;function $m(){if(Cd)return qe;Cd=1;var x=dc();function J(A){var T="https://react.dev/errors/"+A;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var W=2;W<arguments.length;W++)T+="&args[]="+encodeURIComponent(arguments[W])}return"Minified React error #"+A+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function j(){}var h={d:{f:j,r:function(){throw Error(J(522))},D:j,C:j,L:j,m:j,X:j,S:j,M:j},p:0,findDOMNode:null},B=Symbol.for("react.portal");function k(A,T,W){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:M==null?null:""+M,children:A,containerInfo:T,implementation:W}}var V=x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function L(A,T){if(A==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,qe.createPortal=function(A,T){var W=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(J(299));return k(A,T,null,W)},qe.flushSync=function(A){var T=V.T,W=h.p;try{if(V.T=null,h.p=2,A)return A()}finally{V.T=T,h.p=W,h.d.f()}},qe.preconnect=function(A,T){typeof A=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,h.d.C(A,T))},qe.prefetchDNS=function(A){typeof A=="string"&&h.d.D(A)},qe.preinit=function(A,T){if(typeof A=="string"&&T&&typeof T.as=="string"){var W=T.as,M=L(W,T.crossOrigin),H=typeof T.integrity=="string"?T.integrity:void 0,K=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;W==="style"?h.d.S(A,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:M,integrity:H,fetchPriority:K}):W==="script"&&h.d.X(A,{crossOrigin:M,integrity:H,fetchPriority:K,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},qe.preinitModule=function(A,T){if(typeof A=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var W=L(T.as,T.crossOrigin);h.d.M(A,{crossOrigin:W,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&h.d.M(A)},qe.preload=function(A,T){if(typeof A=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var W=T.as,M=L(W,T.crossOrigin);h.d.L(A,W,{crossOrigin:M,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},qe.preloadModule=function(A,T){if(typeof A=="string")if(T){var W=L(T.as,T.crossOrigin);h.d.m(A,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:W,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else h.d.m(A)},qe.requestFormReset=function(A){h.d.r(A)},qe.unstable_batchedUpdates=function(A,T){return A(T)},qe.useFormState=function(A,T,W){return V.H.useFormState(A,T,W)},qe.useFormStatus=function(){return V.H.useHostTransitionStatus()},qe.version="19.2.4",qe}var Td;function ep(){if(Td)return fc.exports;Td=1;function x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x)}catch(J){console.error(J)}}return x(),fc.exports=$m(),fc.exports}var Ed;function tp(){if(Ed)return Tl;Ed=1;var x=Im(),J=dc(),j=ep();function h(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function B(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function k(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function V(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function L(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function A(e){if(k(e)!==e)throw Error(h(188))}function T(e){var t=e.alternate;if(!t){if(t=k(e),t===null)throw Error(h(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return A(l),e;if(i===a)return A(l),t;i=i.sibling}throw Error(h(188))}if(n.return!==a.return)n=l,a=i;else{for(var o=!1,u=l.child;u;){if(u===n){o=!0,n=l,a=i;break}if(u===a){o=!0,a=l,n=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===n){o=!0,n=i,a=l;break}if(u===a){o=!0,a=i,n=l;break}u=u.sibling}if(!o)throw Error(h(189))}}if(n.alternate!==a)throw Error(h(190))}if(n.tag!==3)throw Error(h(188));return n.stateNode.current===n?e:t}function W(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=W(e),t!==null)return t;e=e.sibling}return null}var M=Object.assign,H=Symbol.for("react.element"),K=Symbol.for("react.transitional.element"),X=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),ye=Symbol.for("react.strict_mode"),ae=Symbol.for("react.profiler"),Se=Symbol.for("react.consumer"),ge=Symbol.for("react.context"),Ye=Symbol.for("react.forward_ref"),Ce=Symbol.for("react.suspense"),Ue=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),Qe=Symbol.for("react.lazy"),At=Symbol.for("react.activity"),Vn=Symbol.for("react.memo_cache_sentinel"),wt=Symbol.iterator;function Ze(e){return e===null||typeof e!="object"?null:(e=wt&&e[wt]||e["@@iterator"],typeof e=="function"?e:null)}var En=Symbol.for("react.client.reference");function Mt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===En?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case F:return"Fragment";case ae:return"Profiler";case ye:return"StrictMode";case Ce:return"Suspense";case Ue:return"SuspenseList";case At:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case X:return"Portal";case ge:return e.displayName||"Context";case Se:return(e._context.displayName||"Context")+".Consumer";case Ye:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Z:return t=e.displayName||null,t!==null?t:Mt(e.type)||"Memo";case Qe:t=e._payload,e=e._init;try{return Mt(e(t))}catch{}}return null}var Ct=Array.isArray,b=J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,w=j.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U={pending:!1,data:null,method:null,action:null},re=[],me=-1;function r(e){return{current:e}}function E(e){0>me||(e.current=re[me],re[me]=null,me--)}function D(e,t){me++,re[me]=e.current,e.current=t}var z=r(null),q=r(null),P=r(null),ue=r(null);function Ve(e,t){switch(D(P,t),D(q,e),D(z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?kf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=kf(t),e=Gf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}E(z),D(z,e)}function Ae(){E(z),E(q),E(P)}function Oa(e){e.memoizedState!==null&&D(ue,e);var t=z.current,n=Gf(t,e.type);t!==n&&(D(q,e),D(z,n))}function El(e){q.current===e&&(E(z),E(q)),ue.current===e&&(E(ue),gl._currentValue=U)}var qi,hc;function xn(e){if(qi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);qi=t&&t[1]||"",hc=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qi+e+hc}var Yi=!1;function Vi(e,t){if(!e||Yi)return"";Yi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var C=function(){throw Error()};if(Object.defineProperty(C.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(C,[])}catch(g){var y=g}Reflect.construct(e,[],C)}else{try{C.call()}catch(g){y=g}e.call(C.prototype)}}else{try{throw Error()}catch(g){y=g}(C=e())&&typeof C.catch=="function"&&C.catch(function(){})}}catch(g){if(g&&y&&typeof g.stack=="string")return[g.stack,y.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),o=i[0],u=i[1];if(o&&u){var c=o.split(`
`),p=u.split(`
`);for(l=a=0;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;for(;l<p.length&&!p[l].includes("DetermineComponentFrameRoot");)l++;if(a===c.length||l===p.length)for(a=c.length-1,l=p.length-1;1<=a&&0<=l&&c[a]!==p[l];)l--;for(;1<=a&&0<=l;a--,l--)if(c[a]!==p[l]){if(a!==1||l!==1)do if(a--,l--,0>l||c[a]!==p[l]){var v=`
`+c[a].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),v}while(1<=a&&0<=l);break}}}finally{Yi=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?xn(n):""}function Ad(e,t){switch(e.tag){case 26:case 27:case 5:return xn(e.type);case 16:return xn("Lazy");case 13:return e.child!==t&&t!==null?xn("Suspense Fallback"):xn("Suspense");case 19:return xn("SuspenseList");case 0:case 15:return Vi(e.type,!1);case 11:return Vi(e.type.render,!1);case 1:return Vi(e.type,!0);case 31:return xn("Activity");default:return""}}function mc(e){try{var t="",n=null;do t+=Ad(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Xi=Object.prototype.hasOwnProperty,Qi=x.unstable_scheduleCallback,Zi=x.unstable_cancelCallback,wd=x.unstable_shouldYield,Dd=x.unstable_requestPaint,et=x.unstable_now,Od=x.unstable_getCurrentPriorityLevel,pc=x.unstable_ImmediatePriority,yc=x.unstable_UserBlockingPriority,xl=x.unstable_NormalPriority,zd=x.unstable_LowPriority,gc=x.unstable_IdlePriority,Nd=x.log,Md=x.unstable_setDisableYieldValue,za=null,tt=null;function Ft(e){if(typeof Nd=="function"&&Md(e),tt&&typeof tt.setStrictMode=="function")try{tt.setStrictMode(za,e)}catch{}}var nt=Math.clz32?Math.clz32:_d,Rd=Math.log,Bd=Math.LN2;function _d(e){return e>>>=0,e===0?32:31-(Rd(e)/Bd|0)|0}var Al=256,wl=262144,Dl=4194304;function An(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ol(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var u=a&134217727;return u!==0?(a=u&~i,a!==0?l=An(a):(o&=u,o!==0?l=An(o):n||(n=u&~e,n!==0&&(l=An(n))))):(u=a&~i,u!==0?l=An(u):o!==0?l=An(o):n||(n=a&~e,n!==0&&(l=An(n)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:l}function Na(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ud(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vc(){var e=Dl;return Dl<<=1,(Dl&62914560)===0&&(Dl=4194304),e}function Ki(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ma(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Hd(e,t,n,a,l,i){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var u=e.entanglements,c=e.expirationTimes,p=e.hiddenUpdates;for(n=o&~n;0<n;){var v=31-nt(n),C=1<<v;u[v]=0,c[v]=-1;var y=p[v];if(y!==null)for(p[v]=null,v=0;v<y.length;v++){var g=y[v];g!==null&&(g.lane&=-536870913)}n&=~C}a!==0&&bc(e,a,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(o&~t))}function bc(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-nt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function Sc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-nt(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function Cc(e,t){var n=t&-t;return n=(n&42)!==0?1:Ji(n),(n&(e.suspendedLanes|t))!==0?0:n}function Ji(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Wi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Tc(){var e=w.p;return e!==0?e:(e=window.event,e===void 0?32:cd(e.type))}function Ec(e,t){var n=w.p;try{return w.p=e,t()}finally{w.p=n}}var Pt=Math.random().toString(36).slice(2),He="__reactFiber$"+Pt,Ke="__reactProps$"+Pt,Xn="__reactContainer$"+Pt,Fi="__reactEvents$"+Pt,jd="__reactListeners$"+Pt,kd="__reactHandles$"+Pt,xc="__reactResources$"+Pt,Ra="__reactMarker$"+Pt;function Pi(e){delete e[He],delete e[Ke],delete e[Fi],delete e[jd],delete e[kd]}function Qn(e){var t=e[He];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xn]||n[He]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Zf(e);e!==null;){if(n=e[He])return n;e=Zf(e)}return t}e=n,n=e.parentNode}return null}function Zn(e){if(e=e[He]||e[Xn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ba(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(h(33))}function Kn(e){var t=e[xc];return t||(t=e[xc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Be(e){e[Ra]=!0}var Ac=new Set,wc={};function wn(e,t){Jn(e,t),Jn(e+"Capture",t)}function Jn(e,t){for(wc[e]=t,e=0;e<t.length;e++)Ac.add(t[e])}var Gd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Dc={},Oc={};function Ld(e){return Xi.call(Oc,e)?!0:Xi.call(Dc,e)?!1:Gd.test(e)?Oc[e]=!0:(Dc[e]=!0,!1)}function zl(e,t,n){if(Ld(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Nl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Rt(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function ft(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qd(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){n=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ii(e){if(!e._valueTracker){var t=zc(e)?"checked":"value";e._valueTracker=qd(e,t,""+e[t])}}function Nc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=zc(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Ml(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Yd=/[\n"\\]/g;function dt(e){return e.replace(Yd,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function $i(e,t,n,a,l,i,o,u){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ft(t)):e.value!==""+ft(t)&&(e.value=""+ft(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?eo(e,o,ft(t)):n!=null?eo(e,o,ft(n)):a!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+ft(u):e.removeAttribute("name")}function Mc(e,t,n,a,l,i,o,u){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Ii(e);return}n=n!=null?""+ft(n):"",t=t!=null?""+ft(t):n,u||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=u?e.checked:!!a,e.defaultChecked=!!a,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Ii(e)}function eo(e,t,n){t==="number"&&Ml(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Wn(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+ft(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Rc(e,t,n){if(t!=null&&(t=""+ft(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+ft(n):""}function Bc(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(h(92));if(Ct(a)){if(1<a.length)throw Error(h(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=ft(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),Ii(e)}function Fn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Vd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _c(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Vd.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Uc(e,t,n){if(t!=null&&typeof t!="object")throw Error(h(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&_c(e,l,a)}else for(var i in t)t.hasOwnProperty(i)&&_c(e,i,t[i])}function to(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rl(e){return Qd.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Bt(){}var no=null;function ao(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pn=null,In=null;function Hc(e){var t=Zn(e);if(t&&(e=t.stateNode)){var n=e[Ke]||null;e:switch(e=t.stateNode,t.type){case"input":if($i(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+dt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[Ke]||null;if(!l)throw Error(h(90));$i(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Nc(a)}break e;case"textarea":Rc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Wn(e,!!n.multiple,t,!1)}}}var lo=!1;function jc(e,t,n){if(lo)return e(t,n);lo=!0;try{var a=e(t);return a}finally{if(lo=!1,(Pn!==null||In!==null)&&(bi(),Pn&&(t=Pn,e=In,In=Pn=null,Hc(t),e)))for(t=0;t<e.length;t++)Hc(e[t])}}function _a(e,t){var n=e.stateNode;if(n===null)return null;var a=n[Ke]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(h(231,t,typeof n));return n}var _t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),io=!1;if(_t)try{var Ua={};Object.defineProperty(Ua,"passive",{get:function(){io=!0}}),window.addEventListener("test",Ua,Ua),window.removeEventListener("test",Ua,Ua)}catch{io=!1}var It=null,oo=null,Bl=null;function kc(){if(Bl)return Bl;var e,t=oo,n=t.length,a,l="value"in It?It.value:It.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(a=1;a<=o&&t[n-a]===l[i-a];a++);return Bl=l.slice(e,1<a?1-a:void 0)}function _l(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ul(){return!0}function Gc(){return!1}function Je(e){function t(n,a,l,i,o){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ul:Gc,this.isPropagationStopped=Gc,this}return M(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ul)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ul)},persist:function(){},isPersistent:Ul}),t}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hl=Je(Dn),Ha=M({},Dn,{view:0,detail:0}),Zd=Je(Ha),uo,co,ja,jl=M({},Ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ro,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ja&&(ja&&e.type==="mousemove"?(uo=e.screenX-ja.screenX,co=e.screenY-ja.screenY):co=uo=0,ja=e),uo)},movementY:function(e){return"movementY"in e?e.movementY:co}}),Lc=Je(jl),Kd=M({},jl,{dataTransfer:0}),Jd=Je(Kd),Wd=M({},Ha,{relatedTarget:0}),so=Je(Wd),Fd=M({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0}),Pd=Je(Fd),Id=M({},Dn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$d=Je(Id),eh=M({},Dn,{data:0}),qc=Je(eh),th={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ah={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ah[e])?!!t[e]:!1}function ro(){return lh}var ih=M({},Ha,{key:function(e){if(e.key){var t=th[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_l(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ro,charCode:function(e){return e.type==="keypress"?_l(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_l(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),oh=Je(ih),uh=M({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yc=Je(uh),ch=M({},Ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ro}),sh=Je(ch),rh=M({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),fh=Je(rh),dh=M({},jl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hh=Je(dh),mh=M({},Dn,{newState:0,oldState:0}),ph=Je(mh),yh=[9,13,27,32],fo=_t&&"CompositionEvent"in window,ka=null;_t&&"documentMode"in document&&(ka=document.documentMode);var gh=_t&&"TextEvent"in window&&!ka,Vc=_t&&(!fo||ka&&8<ka&&11>=ka),Xc=" ",Qc=!1;function Zc(e,t){switch(e){case"keyup":return yh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $n=!1;function vh(e,t){switch(e){case"compositionend":return Kc(t);case"keypress":return t.which!==32?null:(Qc=!0,Xc);case"textInput":return e=t.data,e===Xc&&Qc?null:e;default:return null}}function bh(e,t){if($n)return e==="compositionend"||!fo&&Zc(e,t)?(e=kc(),Bl=oo=It=null,$n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vc&&t.locale!=="ko"?null:t.data;default:return null}}var Sh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sh[e.type]:t==="textarea"}function Wc(e,t,n,a){Pn?In?In.push(a):In=[a]:Pn=a,t=wi(t,"onChange"),0<t.length&&(n=new Hl("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Ga=null,La=null;function Ch(e){Rf(e,0)}function kl(e){var t=Ba(e);if(Nc(t))return e}function Fc(e,t){if(e==="change")return t}var Pc=!1;if(_t){var ho;if(_t){var mo="oninput"in document;if(!mo){var Ic=document.createElement("div");Ic.setAttribute("oninput","return;"),mo=typeof Ic.oninput=="function"}ho=mo}else ho=!1;Pc=ho&&(!document.documentMode||9<document.documentMode)}function $c(){Ga&&(Ga.detachEvent("onpropertychange",es),La=Ga=null)}function es(e){if(e.propertyName==="value"&&kl(La)){var t=[];Wc(t,La,e,ao(e)),jc(Ch,t)}}function Th(e,t,n){e==="focusin"?($c(),Ga=t,La=n,Ga.attachEvent("onpropertychange",es)):e==="focusout"&&$c()}function Eh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return kl(La)}function xh(e,t){if(e==="click")return kl(t)}function Ah(e,t){if(e==="input"||e==="change")return kl(t)}function wh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var at=typeof Object.is=="function"?Object.is:wh;function qa(e,t){if(at(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!Xi.call(t,l)||!at(e[l],t[l]))return!1}return!0}function ts(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ns(e,t){var n=ts(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ts(n)}}function as(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?as(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ls(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ml(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ml(e.document)}return t}function po(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Dh=_t&&"documentMode"in document&&11>=document.documentMode,ea=null,yo=null,Ya=null,go=!1;function is(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;go||ea==null||ea!==Ml(a)||(a=ea,"selectionStart"in a&&po(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ya&&qa(Ya,a)||(Ya=a,a=wi(yo,"onSelect"),0<a.length&&(t=new Hl("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=ea)))}function On(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ta={animationend:On("Animation","AnimationEnd"),animationiteration:On("Animation","AnimationIteration"),animationstart:On("Animation","AnimationStart"),transitionrun:On("Transition","TransitionRun"),transitionstart:On("Transition","TransitionStart"),transitioncancel:On("Transition","TransitionCancel"),transitionend:On("Transition","TransitionEnd")},vo={},os={};_t&&(os=document.createElement("div").style,"AnimationEvent"in window||(delete ta.animationend.animation,delete ta.animationiteration.animation,delete ta.animationstart.animation),"TransitionEvent"in window||delete ta.transitionend.transition);function zn(e){if(vo[e])return vo[e];if(!ta[e])return e;var t=ta[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in os)return vo[e]=t[n];return e}var us=zn("animationend"),cs=zn("animationiteration"),ss=zn("animationstart"),Oh=zn("transitionrun"),zh=zn("transitionstart"),Nh=zn("transitioncancel"),rs=zn("transitionend"),fs=new Map,bo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bo.push("scrollEnd");function Tt(e,t){fs.set(e,t),wn(t,[e])}var Gl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ht=[],na=0,So=0;function Ll(){for(var e=na,t=So=na=0;t<e;){var n=ht[t];ht[t++]=null;var a=ht[t];ht[t++]=null;var l=ht[t];ht[t++]=null;var i=ht[t];if(ht[t++]=null,a!==null&&l!==null){var o=a.pending;o===null?l.next=l:(l.next=o.next,o.next=l),a.pending=l}i!==0&&ds(n,l,i)}}function ql(e,t,n,a){ht[na++]=e,ht[na++]=t,ht[na++]=n,ht[na++]=a,So|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Co(e,t,n,a){return ql(e,t,n,a),Yl(e)}function Nn(e,t){return ql(e,null,null,t),Yl(e)}function ds(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,i=e.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-nt(n),e=i.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),i):null}function Yl(e){if(50<rl)throw rl=0,Nu=null,Error(h(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var aa={};function Mh(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(e,t,n,a){return new Mh(e,t,n,a)}function To(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ut(e,t){var n=e.alternate;return n===null?(n=lt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function hs(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Vl(e,t,n,a,l,i){var o=0;if(a=e,typeof e=="function")To(e)&&(o=1);else if(typeof e=="string")o=Hm(e,n,z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case At:return e=lt(31,n,t,l),e.elementType=At,e.lanes=i,e;case F:return Mn(n.children,l,i,t);case ye:o=8,l|=24;break;case ae:return e=lt(12,n,t,l|2),e.elementType=ae,e.lanes=i,e;case Ce:return e=lt(13,n,t,l),e.elementType=Ce,e.lanes=i,e;case Ue:return e=lt(19,n,t,l),e.elementType=Ue,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ge:o=10;break e;case Se:o=9;break e;case Ye:o=11;break e;case Z:o=14;break e;case Qe:o=16,a=null;break e}o=29,n=Error(h(130,e===null?"null":typeof e,"")),a=null}return t=lt(o,n,t,l),t.elementType=e,t.type=a,t.lanes=i,t}function Mn(e,t,n,a){return e=lt(7,e,a,t),e.lanes=n,e}function Eo(e,t,n){return e=lt(6,e,null,t),e.lanes=n,e}function ms(e){var t=lt(18,null,null,0);return t.stateNode=e,t}function xo(e,t,n){return t=lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ps=new WeakMap;function mt(e,t){if(typeof e=="object"&&e!==null){var n=ps.get(e);return n!==void 0?n:(t={value:e,source:t,stack:mc(t)},ps.set(e,t),t)}return{value:e,source:t,stack:mc(t)}}var la=[],ia=0,Xl=null,Va=0,pt=[],yt=0,$t=null,Dt=1,Ot="";function Ht(e,t){la[ia++]=Va,la[ia++]=Xl,Xl=e,Va=t}function ys(e,t,n){pt[yt++]=Dt,pt[yt++]=Ot,pt[yt++]=$t,$t=e;var a=Dt;e=Ot;var l=32-nt(a)-1;a&=~(1<<l),n+=1;var i=32-nt(t)+l;if(30<i){var o=l-l%5;i=(a&(1<<o)-1).toString(32),a>>=o,l-=o,Dt=1<<32-nt(t)+l|n<<l|a,Ot=i+e}else Dt=1<<i|n<<l|a,Ot=e}function Ao(e){e.return!==null&&(Ht(e,1),ys(e,1,0))}function wo(e){for(;e===Xl;)Xl=la[--ia],la[ia]=null,Va=la[--ia],la[ia]=null;for(;e===$t;)$t=pt[--yt],pt[yt]=null,Ot=pt[--yt],pt[yt]=null,Dt=pt[--yt],pt[yt]=null}function gs(e,t){pt[yt++]=Dt,pt[yt++]=Ot,pt[yt++]=$t,Dt=t.id,Ot=t.overflow,$t=e}var je=null,ve=null,ne=!1,en=null,gt=!1,Do=Error(h(519));function tn(e){var t=Error(h(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xa(mt(t,e)),Do}function vs(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[He]=e,t[Ke]=a,n){case"dialog":$("cancel",t),$("close",t);break;case"iframe":case"object":case"embed":$("load",t);break;case"video":case"audio":for(n=0;n<dl.length;n++)$(dl[n],t);break;case"source":$("error",t);break;case"img":case"image":case"link":$("error",t),$("load",t);break;case"details":$("toggle",t);break;case"input":$("invalid",t),Mc(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":$("invalid",t);break;case"textarea":$("invalid",t),Bc(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Hf(t.textContent,n)?(a.popover!=null&&($("beforetoggle",t),$("toggle",t)),a.onScroll!=null&&$("scroll",t),a.onScrollEnd!=null&&$("scrollend",t),a.onClick!=null&&(t.onclick=Bt),t=!0):t=!1,t||tn(e,!0)}function bs(e){for(je=e.return;je;)switch(je.tag){case 5:case 31:case 13:gt=!1;return;case 27:case 3:gt=!0;return;default:je=je.return}}function oa(e){if(e!==je)return!1;if(!ne)return bs(e),ne=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Qu(e.type,e.memoizedProps)),n=!n),n&&ve&&tn(e),bs(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));ve=Qf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));ve=Qf(e)}else t===27?(t=ve,yn(e.type)?(e=Fu,Fu=null,ve=e):ve=t):ve=je?bt(e.stateNode.nextSibling):null;return!0}function Rn(){ve=je=null,ne=!1}function Oo(){var e=en;return e!==null&&(Ie===null?Ie=e:Ie.push.apply(Ie,e),en=null),e}function Xa(e){en===null?en=[e]:en.push(e)}var zo=r(null),Bn=null,jt=null;function nn(e,t,n){D(zo,t._currentValue),t._currentValue=n}function kt(e){e._currentValue=zo.current,E(zo)}function No(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Mo(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var o=l.child;i=i.firstContext;e:for(;i!==null;){var u=i;i=l;for(var c=0;c<t.length;c++)if(u.context===t[c]){i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),No(i.return,n,e),a||(o=null);break e}i=u.next}}else if(l.tag===18){if(o=l.return,o===null)throw Error(h(341));o.lanes|=n,i=o.alternate,i!==null&&(i.lanes|=n),No(o,n,e),o=null}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===e){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}}function ua(e,t,n,a){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var o=l.alternate;if(o===null)throw Error(h(387));if(o=o.memoizedProps,o!==null){var u=l.type;at(l.pendingProps.value,o.value)||(e!==null?e.push(u):e=[u])}}else if(l===ue.current){if(o=l.alternate,o===null)throw Error(h(387));o.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(gl):e=[gl])}l=l.return}e!==null&&Mo(t,e,n,a),t.flags|=262144}function Ql(e){for(e=e.firstContext;e!==null;){if(!at(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _n(e){Bn=e,jt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ke(e){return Ss(Bn,e)}function Zl(e,t){return Bn===null&&_n(e),Ss(e,t)}function Ss(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},jt===null){if(e===null)throw Error(h(308));jt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else jt=jt.next=t;return n}var Rh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Bh=x.unstable_scheduleCallback,_h=x.unstable_NormalPriority,Oe={$$typeof:ge,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ro(){return{controller:new Rh,data:new Map,refCount:0}}function Qa(e){e.refCount--,e.refCount===0&&Bh(_h,function(){e.controller.abort()})}var Za=null,Bo=0,ca=0,sa=null;function Uh(e,t){if(Za===null){var n=Za=[];Bo=0,ca=Hu(),sa={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Bo++,t.then(Cs,Cs),t}function Cs(){if(--Bo===0&&Za!==null){sa!==null&&(sa.status="fulfilled");var e=Za;Za=null,ca=0,sa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Hh(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var Ts=b.S;b.S=function(e,t){of=et(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Uh(e,t),Ts!==null&&Ts(e,t)};var Un=r(null);function _o(){var e=Un.current;return e!==null?e:pe.pooledCache}function Kl(e,t){t===null?D(Un,Un.current):D(Un,t.pool)}function Es(){var e=_o();return e===null?null:{parent:Oe._currentValue,pool:e}}var ra=Error(h(460)),Uo=Error(h(474)),Jl=Error(h(542)),Wl={then:function(){}};function xs(e){return e=e.status,e==="fulfilled"||e==="rejected"}function As(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Bt,Bt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ds(e),e;default:if(typeof t.status=="string")t.then(Bt,Bt);else{if(e=pe,e!==null&&100<e.shellSuspendCounter)throw Error(h(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ds(e),e}throw jn=t,ra}}function Hn(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(jn=n,ra):n}}var jn=null;function ws(){if(jn===null)throw Error(h(459));var e=jn;return jn=null,e}function Ds(e){if(e===ra||e===Jl)throw Error(h(483))}var fa=null,Ka=0;function Fl(e){var t=Ka;return Ka+=1,fa===null&&(fa=[]),As(fa,e,t)}function Ja(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Pl(e,t){throw t.$$typeof===H?Error(h(525)):(e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Os(e){function t(f,s){if(e){var m=f.deletions;m===null?(f.deletions=[s],f.flags|=16):m.push(s)}}function n(f,s){if(!e)return null;for(;s!==null;)t(f,s),s=s.sibling;return null}function a(f){for(var s=new Map;f!==null;)f.key!==null?s.set(f.key,f):s.set(f.index,f),f=f.sibling;return s}function l(f,s){return f=Ut(f,s),f.index=0,f.sibling=null,f}function i(f,s,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<s?(f.flags|=67108866,s):m):(f.flags|=67108866,s)):(f.flags|=1048576,s)}function o(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function u(f,s,m,S){return s===null||s.tag!==6?(s=Eo(m,f.mode,S),s.return=f,s):(s=l(s,m),s.return=f,s)}function c(f,s,m,S){var R=m.type;return R===F?v(f,s,m.props.children,S,m.key):s!==null&&(s.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Qe&&Hn(R)===s.type)?(s=l(s,m.props),Ja(s,m),s.return=f,s):(s=Vl(m.type,m.key,m.props,null,f.mode,S),Ja(s,m),s.return=f,s)}function p(f,s,m,S){return s===null||s.tag!==4||s.stateNode.containerInfo!==m.containerInfo||s.stateNode.implementation!==m.implementation?(s=xo(m,f.mode,S),s.return=f,s):(s=l(s,m.children||[]),s.return=f,s)}function v(f,s,m,S,R){return s===null||s.tag!==7?(s=Mn(m,f.mode,S,R),s.return=f,s):(s=l(s,m),s.return=f,s)}function C(f,s,m){if(typeof s=="string"&&s!==""||typeof s=="number"||typeof s=="bigint")return s=Eo(""+s,f.mode,m),s.return=f,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case K:return m=Vl(s.type,s.key,s.props,null,f.mode,m),Ja(m,s),m.return=f,m;case X:return s=xo(s,f.mode,m),s.return=f,s;case Qe:return s=Hn(s),C(f,s,m)}if(Ct(s)||Ze(s))return s=Mn(s,f.mode,m,null),s.return=f,s;if(typeof s.then=="function")return C(f,Fl(s),m);if(s.$$typeof===ge)return C(f,Zl(f,s),m);Pl(f,s)}return null}function y(f,s,m,S){var R=s!==null?s.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return R!==null?null:u(f,s,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case K:return m.key===R?c(f,s,m,S):null;case X:return m.key===R?p(f,s,m,S):null;case Qe:return m=Hn(m),y(f,s,m,S)}if(Ct(m)||Ze(m))return R!==null?null:v(f,s,m,S,null);if(typeof m.then=="function")return y(f,s,Fl(m),S);if(m.$$typeof===ge)return y(f,s,Zl(f,m),S);Pl(f,m)}return null}function g(f,s,m,S,R){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return f=f.get(m)||null,u(s,f,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case K:return f=f.get(S.key===null?m:S.key)||null,c(s,f,S,R);case X:return f=f.get(S.key===null?m:S.key)||null,p(s,f,S,R);case Qe:return S=Hn(S),g(f,s,m,S,R)}if(Ct(S)||Ze(S))return f=f.get(m)||null,v(s,f,S,R,null);if(typeof S.then=="function")return g(f,s,m,Fl(S),R);if(S.$$typeof===ge)return g(f,s,m,Zl(s,S),R);Pl(s,S)}return null}function O(f,s,m,S){for(var R=null,le=null,N=s,Q=s=0,te=null;N!==null&&Q<m.length;Q++){N.index>Q?(te=N,N=null):te=N.sibling;var ie=y(f,N,m[Q],S);if(ie===null){N===null&&(N=te);break}e&&N&&ie.alternate===null&&t(f,N),s=i(ie,s,Q),le===null?R=ie:le.sibling=ie,le=ie,N=te}if(Q===m.length)return n(f,N),ne&&Ht(f,Q),R;if(N===null){for(;Q<m.length;Q++)N=C(f,m[Q],S),N!==null&&(s=i(N,s,Q),le===null?R=N:le.sibling=N,le=N);return ne&&Ht(f,Q),R}for(N=a(N);Q<m.length;Q++)te=g(N,f,Q,m[Q],S),te!==null&&(e&&te.alternate!==null&&N.delete(te.key===null?Q:te.key),s=i(te,s,Q),le===null?R=te:le.sibling=te,le=te);return e&&N.forEach(function(Cn){return t(f,Cn)}),ne&&Ht(f,Q),R}function _(f,s,m,S){if(m==null)throw Error(h(151));for(var R=null,le=null,N=s,Q=s=0,te=null,ie=m.next();N!==null&&!ie.done;Q++,ie=m.next()){N.index>Q?(te=N,N=null):te=N.sibling;var Cn=y(f,N,ie.value,S);if(Cn===null){N===null&&(N=te);break}e&&N&&Cn.alternate===null&&t(f,N),s=i(Cn,s,Q),le===null?R=Cn:le.sibling=Cn,le=Cn,N=te}if(ie.done)return n(f,N),ne&&Ht(f,Q),R;if(N===null){for(;!ie.done;Q++,ie=m.next())ie=C(f,ie.value,S),ie!==null&&(s=i(ie,s,Q),le===null?R=ie:le.sibling=ie,le=ie);return ne&&Ht(f,Q),R}for(N=a(N);!ie.done;Q++,ie=m.next())ie=g(N,f,Q,ie.value,S),ie!==null&&(e&&ie.alternate!==null&&N.delete(ie.key===null?Q:ie.key),s=i(ie,s,Q),le===null?R=ie:le.sibling=ie,le=ie);return e&&N.forEach(function(Km){return t(f,Km)}),ne&&Ht(f,Q),R}function he(f,s,m,S){if(typeof m=="object"&&m!==null&&m.type===F&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case K:e:{for(var R=m.key;s!==null;){if(s.key===R){if(R=m.type,R===F){if(s.tag===7){n(f,s.sibling),S=l(s,m.props.children),S.return=f,f=S;break e}}else if(s.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Qe&&Hn(R)===s.type){n(f,s.sibling),S=l(s,m.props),Ja(S,m),S.return=f,f=S;break e}n(f,s);break}else t(f,s);s=s.sibling}m.type===F?(S=Mn(m.props.children,f.mode,S,m.key),S.return=f,f=S):(S=Vl(m.type,m.key,m.props,null,f.mode,S),Ja(S,m),S.return=f,f=S)}return o(f);case X:e:{for(R=m.key;s!==null;){if(s.key===R)if(s.tag===4&&s.stateNode.containerInfo===m.containerInfo&&s.stateNode.implementation===m.implementation){n(f,s.sibling),S=l(s,m.children||[]),S.return=f,f=S;break e}else{n(f,s);break}else t(f,s);s=s.sibling}S=xo(m,f.mode,S),S.return=f,f=S}return o(f);case Qe:return m=Hn(m),he(f,s,m,S)}if(Ct(m))return O(f,s,m,S);if(Ze(m)){if(R=Ze(m),typeof R!="function")throw Error(h(150));return m=R.call(m),_(f,s,m,S)}if(typeof m.then=="function")return he(f,s,Fl(m),S);if(m.$$typeof===ge)return he(f,s,Zl(f,m),S);Pl(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,s!==null&&s.tag===6?(n(f,s.sibling),S=l(s,m),S.return=f,f=S):(n(f,s),S=Eo(m,f.mode,S),S.return=f,f=S),o(f)):n(f,s)}return function(f,s,m,S){try{Ka=0;var R=he(f,s,m,S);return fa=null,R}catch(N){if(N===ra||N===Jl)throw N;var le=lt(29,N,null,f.mode);return le.lanes=S,le.return=f,le}}}var kn=Os(!0),zs=Os(!1),an=!1;function Ho(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function jo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ln(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function on(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(oe&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=Yl(e),ds(e,null,n),t}return ql(e,a,t,n),Yl(e)}function Wa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Sc(e,n)}}function ko(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Go=!1;function Fa(){if(Go){var e=sa;if(e!==null)throw e}}function Pa(e,t,n,a){Go=!1;var l=e.updateQueue;an=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var c=u,p=c.next;c.next=null,o===null?i=p:o.next=p,o=c;var v=e.alternate;v!==null&&(v=v.updateQueue,u=v.lastBaseUpdate,u!==o&&(u===null?v.firstBaseUpdate=p:u.next=p,v.lastBaseUpdate=c))}if(i!==null){var C=l.baseState;o=0,v=p=c=null,u=i;do{var y=u.lane&-536870913,g=y!==u.lane;if(g?(ee&y)===y:(a&y)===y){y!==0&&y===ca&&(Go=!0),v!==null&&(v=v.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var O=e,_=u;y=t;var he=n;switch(_.tag){case 1:if(O=_.payload,typeof O=="function"){C=O.call(he,C,y);break e}C=O;break e;case 3:O.flags=O.flags&-65537|128;case 0:if(O=_.payload,y=typeof O=="function"?O.call(he,C,y):O,y==null)break e;C=M({},C,y);break e;case 2:an=!0}}y=u.callback,y!==null&&(e.flags|=64,g&&(e.flags|=8192),g=l.callbacks,g===null?l.callbacks=[y]:g.push(y))}else g={lane:y,tag:u.tag,payload:u.payload,callback:u.callback,next:null},v===null?(p=v=g,c=C):v=v.next=g,o|=y;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;g=u,u=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);v===null&&(c=C),l.baseState=c,l.firstBaseUpdate=p,l.lastBaseUpdate=v,i===null&&(l.shared.lanes=0),fn|=o,e.lanes=o,e.memoizedState=C}}function Ns(e,t){if(typeof e!="function")throw Error(h(191,e));e.call(t)}function Ms(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ns(n[e],t)}var da=r(null),Il=r(0);function Rs(e,t){e=Kt,D(Il,e),D(da,t),Kt=e|t.baseLanes}function Lo(){D(Il,Kt),D(da,da.current)}function qo(){Kt=Il.current,E(da),E(Il)}var it=r(null),vt=null;function un(e){var t=e.alternate;D(we,we.current&1),D(it,e),vt===null&&(t===null||da.current!==null||t.memoizedState!==null)&&(vt=e)}function Yo(e){D(we,we.current),D(it,e),vt===null&&(vt=e)}function Bs(e){e.tag===22?(D(we,we.current),D(it,e),vt===null&&(vt=e)):cn()}function cn(){D(we,we.current),D(it,it.current)}function ot(e){E(it),vt===e&&(vt=null),E(we)}var we=r(0);function $l(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Ju(n)||Wu(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gt=0,Y=null,fe=null,ze=null,ei=!1,ha=!1,Gn=!1,ti=0,Ia=0,ma=null,jh=0;function Ee(){throw Error(h(321))}function Vo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!at(e[n],t[n]))return!1;return!0}function Xo(e,t,n,a,l,i){return Gt=i,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,b.H=e===null||e.memoizedState===null?yr:iu,Gn=!1,i=n(a,l),Gn=!1,ha&&(i=Us(t,n,a,l)),_s(e),i}function _s(e){b.H=tl;var t=fe!==null&&fe.next!==null;if(Gt=0,ze=fe=Y=null,ei=!1,Ia=0,ma=null,t)throw Error(h(300));e===null||Ne||(e=e.dependencies,e!==null&&Ql(e)&&(Ne=!0))}function Us(e,t,n,a){Y=e;var l=0;do{if(ha&&(ma=null),Ia=0,ha=!1,25<=l)throw Error(h(301));if(l+=1,ze=fe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}b.H=gr,i=t(n,a)}while(ha);return i}function kh(){var e=b.H,t=e.useState()[0];return t=typeof t.then=="function"?$a(t):t,e=e.useState()[0],(fe!==null?fe.memoizedState:null)!==e&&(Y.flags|=1024),t}function Qo(){var e=ti!==0;return ti=0,e}function Zo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ko(e){if(ei){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ei=!1}Gt=0,ze=fe=Y=null,ha=!1,Ia=ti=0,ma=null}function Xe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?Y.memoizedState=ze=e:ze=ze.next=e,ze}function De(){if(fe===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=ze===null?Y.memoizedState:ze.next;if(t!==null)ze=t,fe=e;else{if(e===null)throw Y.alternate===null?Error(h(467)):Error(h(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},ze===null?Y.memoizedState=ze=e:ze=ze.next=e}return ze}function ni(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $a(e){var t=Ia;return Ia+=1,ma===null&&(ma=[]),e=As(ma,e,t),t=Y,(ze===null?t.memoizedState:ze.next)===null&&(t=t.alternate,b.H=t===null||t.memoizedState===null?yr:iu),e}function ai(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return $a(e);if(e.$$typeof===ge)return ke(e)}throw Error(h(438,String(e)))}function Jo(e){var t=null,n=Y.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=Y.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ni(),Y.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=Vn;return t.index++,n}function Lt(e,t){return typeof t=="function"?t(e):t}function li(e){var t=De();return Wo(t,fe,e)}function Wo(e,t,n){var a=e.queue;if(a===null)throw Error(h(311));a.lastRenderedReducer=n;var l=e.baseQueue,i=a.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}t.baseQueue=l=i,a.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var u=o=null,c=null,p=t,v=!1;do{var C=p.lane&-536870913;if(C!==p.lane?(ee&C)===C:(Gt&C)===C){var y=p.revertLane;if(y===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),C===ca&&(v=!0);else if((Gt&y)===y){p=p.next,y===ca&&(v=!0);continue}else C={lane:0,revertLane:p.revertLane,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},c===null?(u=c=C,o=i):c=c.next=C,Y.lanes|=y,fn|=y;C=p.action,Gn&&n(i,C),i=p.hasEagerState?p.eagerState:n(i,C)}else y={lane:C,revertLane:p.revertLane,gesture:p.gesture,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},c===null?(u=c=y,o=i):c=c.next=y,Y.lanes|=C,fn|=C;p=p.next}while(p!==null&&p!==t);if(c===null?o=i:c.next=u,!at(i,e.memoizedState)&&(Ne=!0,v&&(n=sa,n!==null)))throw n;e.memoizedState=i,e.baseState=o,e.baseQueue=c,a.lastRenderedState=i}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Fo(e){var t=De(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);at(i,t.memoizedState)||(Ne=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function Hs(e,t,n){var a=Y,l=De(),i=ne;if(i){if(n===void 0)throw Error(h(407));n=n()}else n=t();var o=!at((fe||l).memoizedState,n);if(o&&(l.memoizedState=n,Ne=!0),l=l.queue,$o(Gs.bind(null,a,l,e),[e]),l.getSnapshot!==t||o||ze!==null&&ze.memoizedState.tag&1){if(a.flags|=2048,pa(9,{destroy:void 0},ks.bind(null,a,l,n,t),null),pe===null)throw Error(h(349));i||(Gt&127)!==0||js(a,t,n)}return n}function js(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t=ni(),Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ks(e,t,n,a){t.value=n,t.getSnapshot=a,Ls(t)&&qs(e)}function Gs(e,t,n){return n(function(){Ls(t)&&qs(e)})}function Ls(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!at(e,n)}catch{return!0}}function qs(e){var t=Nn(e,2);t!==null&&$e(t,e,2)}function Po(e){var t=Xe();if(typeof e=="function"){var n=e;if(e=n(),Gn){Ft(!0);try{n()}finally{Ft(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:e},t}function Ys(e,t,n,a){return e.baseState=n,Wo(e,fe,typeof a=="function"?a:Lt)}function Gh(e,t,n,a,l){if(ui(e))throw Error(h(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};b.T!==null?n(!0):i.isTransition=!1,a(i),n=t.pending,n===null?(i.next=t.pending=i,Vs(t,i)):(i.next=n.next,t.pending=n.next=i)}}function Vs(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var i=b.T,o={};b.T=o;try{var u=n(l,a),c=b.S;c!==null&&c(o,u),Xs(e,t,u)}catch(p){Io(e,t,p)}finally{i!==null&&o.types!==null&&(i.types=o.types),b.T=i}}else try{i=n(l,a),Xs(e,t,i)}catch(p){Io(e,t,p)}}function Xs(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Qs(e,t,a)},function(a){return Io(e,t,a)}):Qs(e,t,n)}function Qs(e,t,n){t.status="fulfilled",t.value=n,Zs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Vs(e,n)))}function Io(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Zs(t),t=t.next;while(t!==a)}e.action=null}function Zs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ks(e,t){return t}function Js(e,t){if(ne){var n=pe.formState;if(n!==null){e:{var a=Y;if(ne){if(ve){t:{for(var l=ve,i=gt;l.nodeType!==8;){if(!i){l=null;break t}if(l=bt(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){ve=bt(l.nextSibling),a=l.data==="F!";break e}}tn(a)}a=!1}a&&(t=n[0])}}return n=Xe(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ks,lastRenderedState:t},n.queue=a,n=hr.bind(null,Y,a),a.dispatch=n,a=Po(!1),i=lu.bind(null,Y,!1,a.queue),a=Xe(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=Gh.bind(null,Y,l,i,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function Ws(e){var t=De();return Fs(t,fe,e)}function Fs(e,t,n){if(t=Wo(e,t,Ks)[0],e=li(Lt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=$a(t)}catch(o){throw o===ra?Jl:o}else a=t;t=De();var l=t.queue,i=l.dispatch;return n!==t.memoizedState&&(Y.flags|=2048,pa(9,{destroy:void 0},Lh.bind(null,l,n),null)),[a,i,e]}function Lh(e,t){e.action=t}function Ps(e){var t=De(),n=fe;if(n!==null)return Fs(t,n,e);De(),t=t.memoizedState,n=De();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function pa(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=Y.updateQueue,t===null&&(t=ni(),Y.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Is(){return De().memoizedState}function ii(e,t,n,a){var l=Xe();Y.flags|=e,l.memoizedState=pa(1|t,{destroy:void 0},n,a===void 0?null:a)}function oi(e,t,n,a){var l=De();a=a===void 0?null:a;var i=l.memoizedState.inst;fe!==null&&a!==null&&Vo(a,fe.memoizedState.deps)?l.memoizedState=pa(t,i,n,a):(Y.flags|=e,l.memoizedState=pa(1|t,i,n,a))}function $s(e,t){ii(8390656,8,e,t)}function $o(e,t){oi(2048,8,e,t)}function qh(e){Y.flags|=4;var t=Y.updateQueue;if(t===null)t=ni(),Y.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function er(e){var t=De().memoizedState;return qh({ref:t,nextImpl:e}),function(){if((oe&2)!==0)throw Error(h(440));return t.impl.apply(void 0,arguments)}}function tr(e,t){return oi(4,2,e,t)}function nr(e,t){return oi(4,4,e,t)}function ar(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lr(e,t,n){n=n!=null?n.concat([e]):null,oi(4,4,ar.bind(null,t,e),n)}function eu(){}function ir(e,t){var n=De();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Vo(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function or(e,t){var n=De();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Vo(t,a[1]))return a[0];if(a=e(),Gn){Ft(!0);try{e()}finally{Ft(!1)}}return n.memoizedState=[a,t],a}function tu(e,t,n){return n===void 0||(Gt&1073741824)!==0&&(ee&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=cf(),Y.lanes|=e,fn|=e,n)}function ur(e,t,n,a){return at(n,t)?n:da.current!==null?(e=tu(e,n,a),at(e,t)||(Ne=!0),e):(Gt&42)===0||(Gt&1073741824)!==0&&(ee&261930)===0?(Ne=!0,e.memoizedState=n):(e=cf(),Y.lanes|=e,fn|=e,t)}function cr(e,t,n,a,l){var i=w.p;w.p=i!==0&&8>i?i:8;var o=b.T,u={};b.T=u,lu(e,!1,t,n);try{var c=l(),p=b.S;if(p!==null&&p(u,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var v=Hh(c,a);el(e,t,v,st(e))}else el(e,t,a,st(e))}catch(C){el(e,t,{then:function(){},status:"rejected",reason:C},st())}finally{w.p=i,o!==null&&u.types!==null&&(o.types=u.types),b.T=o}}function Yh(){}function nu(e,t,n,a){if(e.tag!==5)throw Error(h(476));var l=sr(e).queue;cr(e,l,t,U,n===null?Yh:function(){return rr(e),n(a)})}function sr(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:U,baseState:U,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:U},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function rr(e){var t=sr(e);t.next===null&&(t=e.alternate.memoizedState),el(e,t.next.queue,{},st())}function au(){return ke(gl)}function fr(){return De().memoizedState}function dr(){return De().memoizedState}function Vh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=st();e=ln(n);var a=on(t,e,n);a!==null&&($e(a,t,n),Wa(a,t,n)),t={cache:Ro()},e.payload=t;return}t=t.return}}function Xh(e,t,n){var a=st();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ui(e)?mr(t,n):(n=Co(e,t,n,a),n!==null&&($e(n,e,a),pr(n,t,a)))}function hr(e,t,n){var a=st();el(e,t,n,a)}function el(e,t,n,a){var l={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ui(e))mr(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,u=i(o,n);if(l.hasEagerState=!0,l.eagerState=u,at(u,o))return ql(e,t,l,0),pe===null&&Ll(),!1}catch{}if(n=Co(e,t,l,a),n!==null)return $e(n,e,a),pr(n,t,a),!0}return!1}function lu(e,t,n,a){if(a={lane:2,revertLane:Hu(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ui(e)){if(t)throw Error(h(479))}else t=Co(e,n,a,2),t!==null&&$e(t,e,2)}function ui(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function mr(e,t){ha=ei=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pr(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Sc(e,n)}}var tl={readContext:ke,use:ai,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useLayoutEffect:Ee,useInsertionEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useSyncExternalStore:Ee,useId:Ee,useHostTransitionStatus:Ee,useFormState:Ee,useActionState:Ee,useOptimistic:Ee,useMemoCache:Ee,useCacheRefresh:Ee};tl.useEffectEvent=Ee;var yr={readContext:ke,use:ai,useCallback:function(e,t){return Xe().memoizedState=[e,t===void 0?null:t],e},useContext:ke,useEffect:$s,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ii(4194308,4,ar.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ii(4194308,4,e,t)},useInsertionEffect:function(e,t){ii(4,2,e,t)},useMemo:function(e,t){var n=Xe();t=t===void 0?null:t;var a=e();if(Gn){Ft(!0);try{e()}finally{Ft(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=Xe();if(n!==void 0){var l=n(t);if(Gn){Ft(!0);try{n(t)}finally{Ft(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=Xh.bind(null,Y,e),[a.memoizedState,e]},useRef:function(e){var t=Xe();return e={current:e},t.memoizedState=e},useState:function(e){e=Po(e);var t=e.queue,n=hr.bind(null,Y,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:eu,useDeferredValue:function(e,t){var n=Xe();return tu(n,e,t)},useTransition:function(){var e=Po(!1);return e=cr.bind(null,Y,e.queue,!0,!1),Xe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=Y,l=Xe();if(ne){if(n===void 0)throw Error(h(407));n=n()}else{if(n=t(),pe===null)throw Error(h(349));(ee&127)!==0||js(a,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,$s(Gs.bind(null,a,i,e),[e]),a.flags|=2048,pa(9,{destroy:void 0},ks.bind(null,a,i,n,t),null),n},useId:function(){var e=Xe(),t=pe.identifierPrefix;if(ne){var n=Ot,a=Dt;n=(a&~(1<<32-nt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=ti++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=jh++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:au,useFormState:Js,useActionState:Js,useOptimistic:function(e){var t=Xe();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=lu.bind(null,Y,!0,n),n.dispatch=t,[e,t]},useMemoCache:Jo,useCacheRefresh:function(){return Xe().memoizedState=Vh.bind(null,Y)},useEffectEvent:function(e){var t=Xe(),n={impl:e};return t.memoizedState=n,function(){if((oe&2)!==0)throw Error(h(440));return n.impl.apply(void 0,arguments)}}},iu={readContext:ke,use:ai,useCallback:ir,useContext:ke,useEffect:$o,useImperativeHandle:lr,useInsertionEffect:tr,useLayoutEffect:nr,useMemo:or,useReducer:li,useRef:Is,useState:function(){return li(Lt)},useDebugValue:eu,useDeferredValue:function(e,t){var n=De();return ur(n,fe.memoizedState,e,t)},useTransition:function(){var e=li(Lt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:$a(e),t]},useSyncExternalStore:Hs,useId:fr,useHostTransitionStatus:au,useFormState:Ws,useActionState:Ws,useOptimistic:function(e,t){var n=De();return Ys(n,fe,e,t)},useMemoCache:Jo,useCacheRefresh:dr};iu.useEffectEvent=er;var gr={readContext:ke,use:ai,useCallback:ir,useContext:ke,useEffect:$o,useImperativeHandle:lr,useInsertionEffect:tr,useLayoutEffect:nr,useMemo:or,useReducer:Fo,useRef:Is,useState:function(){return Fo(Lt)},useDebugValue:eu,useDeferredValue:function(e,t){var n=De();return fe===null?tu(n,e,t):ur(n,fe.memoizedState,e,t)},useTransition:function(){var e=Fo(Lt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:$a(e),t]},useSyncExternalStore:Hs,useId:fr,useHostTransitionStatus:au,useFormState:Ps,useActionState:Ps,useOptimistic:function(e,t){var n=De();return fe!==null?Ys(n,fe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Jo,useCacheRefresh:dr};gr.useEffectEvent=er;function ou(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:M({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var uu={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=st(),l=ln(a);l.payload=t,n!=null&&(l.callback=n),t=on(e,l,a),t!==null&&($e(t,e,a),Wa(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=st(),l=ln(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=on(e,l,a),t!==null&&($e(t,e,a),Wa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=st(),a=ln(n);a.tag=2,t!=null&&(a.callback=t),t=on(e,a,n),t!==null&&($e(t,e,n),Wa(t,e,n))}};function vr(e,t,n,a,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,o):t.prototype&&t.prototype.isPureReactComponent?!qa(n,a)||!qa(l,i):!0}function br(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&uu.enqueueReplaceState(t,t.state,null)}function Ln(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=M({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function Sr(e){Gl(e)}function Cr(e){console.error(e)}function Tr(e){Gl(e)}function ci(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Er(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function cu(e,t,n){return n=ln(n),n.tag=3,n.payload={element:null},n.callback=function(){ci(e,t)},n}function xr(e){return e=ln(e),e.tag=3,e}function Ar(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;e.payload=function(){return l(i)},e.callback=function(){Er(t,n,a)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Er(t,n,a),typeof l!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var u=a.stack;this.componentDidCatch(a.value,{componentStack:u!==null?u:""})})}function Qh(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&ua(t,n,l,!0),n=it.current,n!==null){switch(n.tag){case 31:case 13:return vt===null?Si():n.alternate===null&&xe===0&&(xe=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===Wl?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Bu(e,a,l)),!1;case 22:return n.flags|=65536,a===Wl?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Bu(e,a,l)),!1}throw Error(h(435,n.tag))}return Bu(e,a,l),Si(),!1}if(ne)return t=it.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==Do&&(e=Error(h(422),{cause:a}),Xa(mt(e,n)))):(a!==Do&&(t=Error(h(423),{cause:a}),Xa(mt(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=mt(a,n),l=cu(e.stateNode,a,l),ko(e,l),xe!==4&&(xe=2)),!1;var i=Error(h(520),{cause:a});if(i=mt(i,n),sl===null?sl=[i]:sl.push(i),xe!==4&&(xe=2),t===null)return!0;a=mt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=cu(n.stateNode,a,e),ko(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(dn===null||!dn.has(i))))return n.flags|=65536,l&=-l,n.lanes|=l,l=xr(l),Ar(l,e,n,a),ko(n,l),!1}n=n.return}while(n!==null);return!1}var su=Error(h(461)),Ne=!1;function Ge(e,t,n,a){t.child=e===null?zs(t,null,n,a):kn(t,e.child,n,a)}function wr(e,t,n,a,l){n=n.render;var i=t.ref;if("ref"in a){var o={};for(var u in a)u!=="ref"&&(o[u]=a[u])}else o=a;return _n(t),a=Xo(e,t,n,o,i,l),u=Qo(),e!==null&&!Ne?(Zo(e,t,l),qt(e,t,l)):(ne&&u&&Ao(t),t.flags|=1,Ge(e,t,a,l),t.child)}function Dr(e,t,n,a,l){if(e===null){var i=n.type;return typeof i=="function"&&!To(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,Or(e,t,i,a,l)):(e=Vl(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!gu(e,l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:qa,n(o,a)&&e.ref===t.ref)return qt(e,t,l)}return t.flags|=1,e=Ut(i,a),e.ref=t.ref,e.return=t,t.child=e}function Or(e,t,n,a,l){if(e!==null){var i=e.memoizedProps;if(qa(i,a)&&e.ref===t.ref)if(Ne=!1,t.pendingProps=a=i,gu(e,l))(e.flags&131072)!==0&&(Ne=!0);else return t.lanes=e.lanes,qt(e,t,l)}return ru(e,t,n,a,l)}function zr(e,t,n,a){var l=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(a=t.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~i}else a=0,t.child=null;return Nr(e,t,i,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Kl(t,i!==null?i.cachePool:null),i!==null?Rs(t,i):Lo(),Bs(t);else return a=t.lanes=536870912,Nr(e,t,i!==null?i.baseLanes|n:n,n,a)}else i!==null?(Kl(t,i.cachePool),Rs(t,i),cn(),t.memoizedState=null):(e!==null&&Kl(t,null),Lo(),cn());return Ge(e,t,l,n),t.child}function nl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Nr(e,t,n,a,l){var i=_o();return i=i===null?null:{parent:Oe._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&Kl(t,null),Lo(),Bs(t),e!==null&&ua(e,t,a,!0),t.childLanes=l,null}function si(e,t){return t=fi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Mr(e,t,n){return kn(t,e.child,null,n),e=si(t,t.pendingProps),e.flags|=2,ot(t),t.memoizedState=null,e}function Zh(e,t,n){var a=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ne){if(a.mode==="hidden")return e=si(t,a),t.lanes=536870912,nl(null,e);if(Yo(t),(e=ve)?(e=Xf(e,gt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:$t!==null?{id:Dt,overflow:Ot}:null,retryLane:536870912,hydrationErrors:null},n=ms(e),n.return=t,t.child=n,je=t,ve=null)):e=null,e===null)throw tn(t);return t.lanes=536870912,null}return si(t,a)}var i=e.memoizedState;if(i!==null){var o=i.dehydrated;if(Yo(t),l)if(t.flags&256)t.flags&=-257,t=Mr(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(h(558));else if(Ne||ua(e,t,n,!1),l=(n&e.childLanes)!==0,Ne||l){if(a=pe,a!==null&&(o=Cc(a,n),o!==0&&o!==i.retryLane))throw i.retryLane=o,Nn(e,o),$e(a,e,o),su;Si(),t=Mr(e,t,n)}else e=i.treeContext,ve=bt(o.nextSibling),je=t,ne=!0,en=null,gt=!1,e!==null&&gs(t,e),t=si(t,a),t.flags|=4096;return t}return e=Ut(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ri(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(h(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function ru(e,t,n,a,l){return _n(t),n=Xo(e,t,n,a,void 0,l),a=Qo(),e!==null&&!Ne?(Zo(e,t,l),qt(e,t,l)):(ne&&a&&Ao(t),t.flags|=1,Ge(e,t,n,l),t.child)}function Rr(e,t,n,a,l,i){return _n(t),t.updateQueue=null,n=Us(t,a,n,l),_s(e),a=Qo(),e!==null&&!Ne?(Zo(e,t,i),qt(e,t,i)):(ne&&a&&Ao(t),t.flags|=1,Ge(e,t,n,i),t.child)}function Br(e,t,n,a,l){if(_n(t),t.stateNode===null){var i=aa,o=n.contextType;typeof o=="object"&&o!==null&&(i=ke(o)),i=new n(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=uu,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},Ho(t),o=n.contextType,i.context=typeof o=="object"&&o!==null?ke(o):aa,i.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(ou(t,n,o,a),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&uu.enqueueReplaceState(i,i.state,null),Pa(t,a,i,l),Fa(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var u=t.memoizedProps,c=Ln(n,u);i.props=c;var p=i.context,v=n.contextType;o=aa,typeof v=="object"&&v!==null&&(o=ke(v));var C=n.getDerivedStateFromProps;v=typeof C=="function"||typeof i.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,v||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u||p!==o)&&br(t,i,a,o),an=!1;var y=t.memoizedState;i.state=y,Pa(t,a,i,l),Fa(),p=t.memoizedState,u||y!==p||an?(typeof C=="function"&&(ou(t,n,C,a),p=t.memoizedState),(c=an||vr(t,n,c,a,y,p,o))?(v||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=p),i.props=a,i.state=p,i.context=o,a=c):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,jo(e,t),o=t.memoizedProps,v=Ln(n,o),i.props=v,C=t.pendingProps,y=i.context,p=n.contextType,c=aa,typeof p=="object"&&p!==null&&(c=ke(p)),u=n.getDerivedStateFromProps,(p=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==C||y!==c)&&br(t,i,a,c),an=!1,y=t.memoizedState,i.state=y,Pa(t,a,i,l),Fa();var g=t.memoizedState;o!==C||y!==g||an||e!==null&&e.dependencies!==null&&Ql(e.dependencies)?(typeof u=="function"&&(ou(t,n,u,a),g=t.memoizedState),(v=an||vr(t,n,v,a,y,g,c)||e!==null&&e.dependencies!==null&&Ql(e.dependencies))?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,g,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,g,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=g),i.props=a,i.state=g,i.context=c,a=v):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,ri(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=kn(t,e.child,null,l),t.child=kn(t,null,n,l)):Ge(e,t,n,l),t.memoizedState=i.state,e=t.child):e=qt(e,t,l),e}function _r(e,t,n,a){return Rn(),t.flags|=256,Ge(e,t,n,a),t.child}var fu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function du(e){return{baseLanes:e,cachePool:Es()}}function hu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=ct),e}function Ur(e,t,n){var a=t.pendingProps,l=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(we.current&2)!==0),o&&(l=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(ne){if(l?un(t):cn(),(e=ve)?(e=Xf(e,gt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:$t!==null?{id:Dt,overflow:Ot}:null,retryLane:536870912,hydrationErrors:null},n=ms(e),n.return=t,t.child=n,je=t,ve=null)):e=null,e===null)throw tn(t);return Wu(e)?t.lanes=32:t.lanes=536870912,null}var u=a.children;return a=a.fallback,l?(cn(),l=t.mode,u=fi({mode:"hidden",children:u},l),a=Mn(a,l,n,null),u.return=t,a.return=t,u.sibling=a,t.child=u,a=t.child,a.memoizedState=du(n),a.childLanes=hu(e,o,n),t.memoizedState=fu,nl(null,a)):(un(t),mu(t,u))}var c=e.memoizedState;if(c!==null&&(u=c.dehydrated,u!==null)){if(i)t.flags&256?(un(t),t.flags&=-257,t=pu(e,t,n)):t.memoizedState!==null?(cn(),t.child=e.child,t.flags|=128,t=null):(cn(),u=a.fallback,l=t.mode,a=fi({mode:"visible",children:a.children},l),u=Mn(u,l,n,null),u.flags|=2,a.return=t,u.return=t,a.sibling=u,t.child=a,kn(t,e.child,null,n),a=t.child,a.memoizedState=du(n),a.childLanes=hu(e,o,n),t.memoizedState=fu,t=nl(null,a));else if(un(t),Wu(u)){if(o=u.nextSibling&&u.nextSibling.dataset,o)var p=o.dgst;o=p,a=Error(h(419)),a.stack="",a.digest=o,Xa({value:a,source:null,stack:null}),t=pu(e,t,n)}else if(Ne||ua(e,t,n,!1),o=(n&e.childLanes)!==0,Ne||o){if(o=pe,o!==null&&(a=Cc(o,n),a!==0&&a!==c.retryLane))throw c.retryLane=a,Nn(e,a),$e(o,e,a),su;Ju(u)||Si(),t=pu(e,t,n)}else Ju(u)?(t.flags|=192,t.child=e.child,t=null):(e=c.treeContext,ve=bt(u.nextSibling),je=t,ne=!0,en=null,gt=!1,e!==null&&gs(t,e),t=mu(t,a.children),t.flags|=4096);return t}return l?(cn(),u=a.fallback,l=t.mode,c=e.child,p=c.sibling,a=Ut(c,{mode:"hidden",children:a.children}),a.subtreeFlags=c.subtreeFlags&65011712,p!==null?u=Ut(p,u):(u=Mn(u,l,n,null),u.flags|=2),u.return=t,a.return=t,a.sibling=u,t.child=a,nl(null,a),a=t.child,u=e.child.memoizedState,u===null?u=du(n):(l=u.cachePool,l!==null?(c=Oe._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=Es(),u={baseLanes:u.baseLanes|n,cachePool:l}),a.memoizedState=u,a.childLanes=hu(e,o,n),t.memoizedState=fu,nl(e.child,a)):(un(t),n=e.child,e=n.sibling,n=Ut(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function mu(e,t){return t=fi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function fi(e,t){return e=lt(22,e,null,t),e.lanes=0,e}function pu(e,t,n){return kn(t,e.child,null,n),e=mu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Hr(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),No(e.return,t,n)}function yu(e,t,n,a,l,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l,treeForkCount:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=n,o.tailMode=l,o.treeForkCount=i)}function jr(e,t,n){var a=t.pendingProps,l=a.revealOrder,i=a.tail;a=a.children;var o=we.current,u=(o&2)!==0;if(u?(o=o&1|2,t.flags|=128):o&=1,D(we,o),Ge(e,t,a,n),a=ne?Va:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hr(e,n,t);else if(e.tag===19)Hr(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&$l(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),yu(t,!1,l,n,i,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&$l(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}yu(t,!0,n,null,i,a);break;case"together":yu(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ua(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,n=Ut(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ut(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ql(e)))}function Kh(e,t,n){switch(t.tag){case 3:Ve(t,t.stateNode.containerInfo),nn(t,Oe,e.memoizedState.cache),Rn();break;case 27:case 5:Oa(t);break;case 4:Ve(t,t.stateNode.containerInfo);break;case 10:nn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Yo(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(un(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Ur(e,t,n):(un(t),e=qt(e,t,n),e!==null?e.sibling:null);un(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(ua(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return jr(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),D(we,we.current),a)break;return null;case 22:return t.lanes=0,zr(e,t,n,t.pendingProps);case 24:nn(t,Oe,e.memoizedState.cache)}return qt(e,t,n)}function kr(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ne=!0;else{if(!gu(e,n)&&(t.flags&128)===0)return Ne=!1,Kh(e,t,n);Ne=(e.flags&131072)!==0}else Ne=!1,ne&&(t.flags&1048576)!==0&&ys(t,Va,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Hn(t.elementType),t.type=e,typeof e=="function")To(e)?(a=Ln(e,a),t.tag=1,t=Br(null,t,e,a,n)):(t.tag=0,t=ru(null,t,e,a,n));else{if(e!=null){var l=e.$$typeof;if(l===Ye){t.tag=11,t=wr(null,t,e,a,n);break e}else if(l===Z){t.tag=14,t=Dr(null,t,e,a,n);break e}}throw t=Mt(e)||e,Error(h(306,t,""))}}return t;case 0:return ru(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=Ln(a,t.pendingProps),Br(e,t,a,l,n);case 3:e:{if(Ve(t,t.stateNode.containerInfo),e===null)throw Error(h(387));a=t.pendingProps;var i=t.memoizedState;l=i.element,jo(e,t),Pa(t,a,null,n);var o=t.memoizedState;if(a=o.cache,nn(t,Oe,a),a!==i.cache&&Mo(t,[Oe],n,!0),Fa(),a=o.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=_r(e,t,a,n);break e}else if(a!==l){l=mt(Error(h(424)),t),Xa(l),t=_r(e,t,a,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ve=bt(e.firstChild),je=t,ne=!0,en=null,gt=!0,n=zs(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rn(),a===l){t=qt(e,t,n);break e}Ge(e,t,a,n)}t=t.child}return t;case 26:return ri(e,t),e===null?(n=Ff(t.type,null,t.pendingProps,null))?t.memoizedState=n:ne||(n=t.type,e=t.pendingProps,a=Di(P.current).createElement(n),a[He]=t,a[Ke]=e,Le(a,n,e),Be(a),t.stateNode=a):t.memoizedState=Ff(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Oa(t),e===null&&ne&&(a=t.stateNode=Kf(t.type,t.pendingProps,P.current),je=t,gt=!0,l=ve,yn(t.type)?(Fu=l,ve=bt(a.firstChild)):ve=l),Ge(e,t,t.pendingProps.children,n),ri(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ne&&((l=a=ve)&&(a=Em(a,t.type,t.pendingProps,gt),a!==null?(t.stateNode=a,je=t,ve=bt(a.firstChild),gt=!1,l=!0):l=!1),l||tn(t)),Oa(t),l=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Qu(l,i)?a=null:o!==null&&Qu(l,o)&&(t.flags|=32),t.memoizedState!==null&&(l=Xo(e,t,kh,null,null,n),gl._currentValue=l),ri(e,t),Ge(e,t,a,n),t.child;case 6:return e===null&&ne&&((e=n=ve)&&(n=xm(n,t.pendingProps,gt),n!==null?(t.stateNode=n,je=t,ve=null,e=!0):e=!1),e||tn(t)),null;case 13:return Ur(e,t,n);case 4:return Ve(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=kn(t,null,a,n):Ge(e,t,a,n),t.child;case 11:return wr(e,t,t.type,t.pendingProps,n);case 7:return Ge(e,t,t.pendingProps,n),t.child;case 8:return Ge(e,t,t.pendingProps.children,n),t.child;case 12:return Ge(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,nn(t,t.type,a.value),Ge(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,_n(t),l=ke(l),a=a(l),t.flags|=1,Ge(e,t,a,n),t.child;case 14:return Dr(e,t,t.type,t.pendingProps,n);case 15:return Or(e,t,t.type,t.pendingProps,n);case 19:return jr(e,t,n);case 31:return Zh(e,t,n);case 22:return zr(e,t,n,t.pendingProps);case 24:return _n(t),a=ke(Oe),e===null?(l=_o(),l===null&&(l=pe,i=Ro(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=n),l=i),t.memoizedState={parent:a,cache:l},Ho(t),nn(t,Oe,l)):((e.lanes&n)!==0&&(jo(e,t),Pa(t,null,null,n),Fa()),l=e.memoizedState,i=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),nn(t,Oe,a)):(a=i.cache,nn(t,Oe,a),a!==l.cache&&Mo(t,[Oe],n,!0))),Ge(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(h(156,t.tag))}function Yt(e){e.flags|=4}function vu(e,t,n,a,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(df())e.flags|=8192;else throw jn=Wl,Uo}else e.flags&=-16777217}function Gr(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!td(t))if(df())e.flags|=8192;else throw jn=Wl,Uo}function di(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?vc():536870912,e.lanes|=t,ba|=t)}function al(e,t){if(!ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Jh(e,t,n){var a=t.pendingProps;switch(wo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return be(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),kt(Oe),Ae(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(oa(t)?Yt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Oo())),be(t),null;case 26:var l=t.type,i=t.memoizedState;return e===null?(Yt(t),i!==null?(be(t),Gr(t,i)):(be(t),vu(t,l,null,a,n))):i?i!==e.memoizedState?(Yt(t),be(t),Gr(t,i)):(be(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Yt(t),be(t),vu(t,l,e,a,n)),null;case 27:if(El(t),n=P.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Yt(t);else{if(!a){if(t.stateNode===null)throw Error(h(166));return be(t),null}e=z.current,oa(t)?vs(t):(e=Kf(l,a,n),t.stateNode=e,Yt(t))}return be(t),null;case 5:if(El(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Yt(t);else{if(!a){if(t.stateNode===null)throw Error(h(166));return be(t),null}if(i=z.current,oa(t))vs(t);else{var o=Di(P.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?o.createElement("select",{is:a.is}):o.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?o.createElement(l,{is:a.is}):o.createElement(l)}}i[He]=t,i[Ke]=a;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=i;e:switch(Le(i,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Yt(t)}}return be(t),vu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Yt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(h(166));if(e=P.current,oa(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=je,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[He]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Hf(e.nodeValue,n)),e||tn(t,!0)}else e=Di(e).createTextNode(a),e[He]=t,t.stateNode=e}return be(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=oa(t),n!==null){if(e===null){if(!a)throw Error(h(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(557));e[He]=t}else Rn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;be(t),e=!1}else n=Oo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ot(t),t):(ot(t),null);if((t.flags&128)!==0)throw Error(h(558))}return be(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=oa(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(h(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(h(317));l[He]=t}else Rn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;be(t),l=!1}else l=Oo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(ot(t),t):(ot(t),null)}return ot(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),di(t,t.updateQueue),be(t),null);case 4:return Ae(),e===null&&Lu(t.stateNode.containerInfo),be(t),null;case 10:return kt(t.type),be(t),null;case 19:if(E(we),a=t.memoizedState,a===null)return be(t),null;if(l=(t.flags&128)!==0,i=a.rendering,i===null)if(l)al(a,!1);else{if(xe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=$l(e),i!==null){for(t.flags|=128,al(a,!1),e=i.updateQueue,t.updateQueue=e,di(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)hs(n,e),n=n.sibling;return D(we,we.current&1|2),ne&&Ht(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&et()>gi&&(t.flags|=128,l=!0,al(a,!1),t.lanes=4194304)}else{if(!l)if(e=$l(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,di(t,e),al(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!ne)return be(t),null}else 2*et()-a.renderingStartTime>gi&&n!==536870912&&(t.flags|=128,l=!0,al(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=et(),e.sibling=null,n=we.current,D(we,l?n&1|2:n&1),ne&&Ht(t,a.treeForkCount),e):(be(t),null);case 22:case 23:return ot(t),qo(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),n=t.updateQueue,n!==null&&di(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&E(Un),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),kt(Oe),be(t),null;case 25:return null;case 30:return null}throw Error(h(156,t.tag))}function Wh(e,t){switch(wo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kt(Oe),Ae(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return El(t),null;case 31:if(t.memoizedState!==null){if(ot(t),t.alternate===null)throw Error(h(340));Rn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ot(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));Rn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return E(we),null;case 4:return Ae(),null;case 10:return kt(t.type),null;case 22:case 23:return ot(t),qo(),e!==null&&E(Un),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return kt(Oe),null;case 25:return null;default:return null}}function Lr(e,t){switch(wo(t),t.tag){case 3:kt(Oe),Ae();break;case 26:case 27:case 5:El(t);break;case 4:Ae();break;case 31:t.memoizedState!==null&&ot(t);break;case 13:ot(t);break;case 19:E(we);break;case 10:kt(t.type);break;case 22:case 23:ot(t),qo(),e!==null&&E(Un);break;case 24:kt(Oe)}}function ll(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var i=n.create,o=n.inst;a=i(),o.destroy=a}n=n.next}while(n!==l)}}catch(u){se(t,t.return,u)}}function sn(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){var o=a.inst,u=o.destroy;if(u!==void 0){o.destroy=void 0,l=t;var c=n,p=u;try{p()}catch(v){se(l,c,v)}}}a=a.next}while(a!==i)}}catch(v){se(t,t.return,v)}}function qr(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ms(t,n)}catch(a){se(e,e.return,a)}}}function Yr(e,t,n){n.props=Ln(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){se(e,t,a)}}function il(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(l){se(e,t,l)}}function zt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){se(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){se(e,t,l)}else n.current=null}function Vr(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){se(e,e.return,l)}}function bu(e,t,n){try{var a=e.stateNode;gm(a,e.type,n,t),a[Ke]=t}catch(l){se(e,e.return,l)}}function Xr(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&yn(e.type)||e.tag===4}function Su(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xr(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&yn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cu(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Bt));else if(a!==4&&(a===27&&yn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Cu(e,t,n),e=e.sibling;e!==null;)Cu(e,t,n),e=e.sibling}function hi(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&yn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(hi(e,t,n),e=e.sibling;e!==null;)hi(e,t,n),e=e.sibling}function Qr(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Le(t,a,n),t[He]=e,t[Ke]=n}catch(i){se(e,e.return,i)}}var Vt=!1,Me=!1,Tu=!1,Zr=typeof WeakSet=="function"?WeakSet:Set,_e=null;function Fh(e,t){if(e=e.containerInfo,Vu=_i,e=ls(e),po(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,u=-1,c=-1,p=0,v=0,C=e,y=null;t:for(;;){for(var g;C!==n||l!==0&&C.nodeType!==3||(u=o+l),C!==i||a!==0&&C.nodeType!==3||(c=o+a),C.nodeType===3&&(o+=C.nodeValue.length),(g=C.firstChild)!==null;)y=C,C=g;for(;;){if(C===e)break t;if(y===n&&++p===l&&(u=o),y===i&&++v===a&&(c=o),(g=C.nextSibling)!==null)break;C=y,y=C.parentNode}C=g}n=u===-1||c===-1?null:{start:u,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xu={focusedElem:e,selectionRange:n},_i=!1,_e=t;_e!==null;)if(t=_e,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_e=e;else for(;_e!==null;){switch(t=_e,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)l=e[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,l=i.memoizedProps,i=i.memoizedState,a=n.stateNode;try{var O=Ln(n.type,l);e=a.getSnapshotBeforeUpdate(O,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(_){se(n,n.return,_)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Ku(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ku(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(h(163))}if(e=t.sibling,e!==null){e.return=t.return,_e=e;break}_e=t.return}}function Kr(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Qt(e,n),a&4&&ll(5,n);break;case 1:if(Qt(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(o){se(n,n.return,o)}else{var l=Ln(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){se(n,n.return,o)}}a&64&&qr(n),a&512&&il(n,n.return);break;case 3:if(Qt(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ms(e,t)}catch(o){se(n,n.return,o)}}break;case 27:t===null&&a&4&&Qr(n);case 26:case 5:Qt(e,n),t===null&&a&4&&Vr(n),a&512&&il(n,n.return);break;case 12:Qt(e,n);break;case 31:Qt(e,n),a&4&&Fr(e,n);break;case 13:Qt(e,n),a&4&&Pr(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=im.bind(null,n),Am(e,n))));break;case 22:if(a=n.memoizedState!==null||Vt,!a){t=t!==null&&t.memoizedState!==null||Me,l=Vt;var i=Me;Vt=a,(Me=t)&&!i?Zt(e,n,(n.subtreeFlags&8772)!==0):Qt(e,n),Vt=l,Me=i}break;case 30:break;default:Qt(e,n)}}function Jr(e){var t=e.alternate;t!==null&&(e.alternate=null,Jr(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Pi(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Te=null,We=!1;function Xt(e,t,n){for(n=n.child;n!==null;)Wr(e,t,n),n=n.sibling}function Wr(e,t,n){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(za,n)}catch{}switch(n.tag){case 26:Me||zt(n,t),Xt(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Me||zt(n,t);var a=Te,l=We;yn(n.type)&&(Te=n.stateNode,We=!1),Xt(e,t,n),ml(n.stateNode),Te=a,We=l;break;case 5:Me||zt(n,t);case 6:if(a=Te,l=We,Te=null,Xt(e,t,n),Te=a,We=l,Te!==null)if(We)try{(Te.nodeType===9?Te.body:Te.nodeName==="HTML"?Te.ownerDocument.body:Te).removeChild(n.stateNode)}catch(i){se(n,t,i)}else try{Te.removeChild(n.stateNode)}catch(i){se(n,t,i)}break;case 18:Te!==null&&(We?(e=Te,Yf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Da(e)):Yf(Te,n.stateNode));break;case 4:a=Te,l=We,Te=n.stateNode.containerInfo,We=!0,Xt(e,t,n),Te=a,We=l;break;case 0:case 11:case 14:case 15:sn(2,n,t),Me||sn(4,n,t),Xt(e,t,n);break;case 1:Me||(zt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Yr(n,t,a)),Xt(e,t,n);break;case 21:Xt(e,t,n);break;case 22:Me=(a=Me)||n.memoizedState!==null,Xt(e,t,n),Me=a;break;default:Xt(e,t,n)}}function Fr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Da(e)}catch(n){se(t,t.return,n)}}}function Pr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Da(e)}catch(n){se(t,t.return,n)}}function Ph(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Zr),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Zr),t;default:throw Error(h(435,e.tag))}}function mi(e,t){var n=Ph(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var l=om.bind(null,e,a);a.then(l,l)}})}function Fe(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],i=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 27:if(yn(u.type)){Te=u.stateNode,We=!1;break e}break;case 5:Te=u.stateNode,We=!1;break e;case 3:case 4:Te=u.stateNode.containerInfo,We=!0;break e}u=u.return}if(Te===null)throw Error(h(160));Wr(i,o,l),Te=null,We=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ir(t,e),t=t.sibling}var Et=null;function Ir(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Fe(t,e),Pe(e),a&4&&(sn(3,e,e.return),ll(3,e),sn(5,e,e.return));break;case 1:Fe(t,e),Pe(e),a&512&&(Me||n===null||zt(n,n.return)),a&64&&Vt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=Et;if(Fe(t,e),Pe(e),a&512&&(Me||n===null||zt(n,n.return)),a&4){var i=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":i=l.getElementsByTagName("title")[0],(!i||i[Ra]||i[He]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(a),l.head.insertBefore(i,l.querySelector("head > title"))),Le(i,a,n),i[He]=e,Be(i),a=i;break e;case"link":var o=$f("link","href",l).get(a+(n.href||""));if(o){for(var u=0;u<o.length;u++)if(i=o[u],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(u,1);break t}}i=l.createElement(a),Le(i,a,n),l.head.appendChild(i);break;case"meta":if(o=$f("meta","content",l).get(a+(n.content||""))){for(u=0;u<o.length;u++)if(i=o[u],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(u,1);break t}}i=l.createElement(a),Le(i,a,n),l.head.appendChild(i);break;default:throw Error(h(468,a))}i[He]=e,Be(i),a=i}e.stateNode=a}else ed(l,e.type,e.stateNode);else e.stateNode=If(l,a,e.memoizedProps);else i!==a?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,a===null?ed(l,e.type,e.stateNode):If(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&bu(e,e.memoizedProps,n.memoizedProps)}break;case 27:Fe(t,e),Pe(e),a&512&&(Me||n===null||zt(n,n.return)),n!==null&&a&4&&bu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Fe(t,e),Pe(e),a&512&&(Me||n===null||zt(n,n.return)),e.flags&32){l=e.stateNode;try{Fn(l,"")}catch(O){se(e,e.return,O)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,bu(e,l,n!==null?n.memoizedProps:l)),a&1024&&(Tu=!0);break;case 6:if(Fe(t,e),Pe(e),a&4){if(e.stateNode===null)throw Error(h(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(O){se(e,e.return,O)}}break;case 3:if(Ni=null,l=Et,Et=Oi(t.containerInfo),Fe(t,e),Et=l,Pe(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Da(t.containerInfo)}catch(O){se(e,e.return,O)}Tu&&(Tu=!1,$r(e));break;case 4:a=Et,Et=Oi(e.stateNode.containerInfo),Fe(t,e),Pe(e),Et=a;break;case 12:Fe(t,e),Pe(e);break;case 31:Fe(t,e),Pe(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,mi(e,a)));break;case 13:Fe(t,e),Pe(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(yi=et()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,mi(e,a)));break;case 22:l=e.memoizedState!==null;var c=n!==null&&n.memoizedState!==null,p=Vt,v=Me;if(Vt=p||l,Me=v||c,Fe(t,e),Me=v,Vt=p,Pe(e),a&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||c||Vt||Me||qn(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){c=n=t;try{if(i=c.stateNode,l)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{u=c.stateNode;var C=c.memoizedProps.style,y=C!=null&&C.hasOwnProperty("display")?C.display:null;u.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(O){se(c,c.return,O)}}}else if(t.tag===6){if(n===null){c=t;try{c.stateNode.nodeValue=l?"":c.memoizedProps}catch(O){se(c,c.return,O)}}}else if(t.tag===18){if(n===null){c=t;try{var g=c.stateNode;l?Vf(g,!0):Vf(c.stateNode,!1)}catch(O){se(c,c.return,O)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,mi(e,n))));break;case 19:Fe(t,e),Pe(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,mi(e,a)));break;case 30:break;case 21:break;default:Fe(t,e),Pe(e)}}function Pe(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Xr(a)){n=a;break}a=a.return}if(n==null)throw Error(h(160));switch(n.tag){case 27:var l=n.stateNode,i=Su(e);hi(e,i,l);break;case 5:var o=n.stateNode;n.flags&32&&(Fn(o,""),n.flags&=-33);var u=Su(e);hi(e,u,o);break;case 3:case 4:var c=n.stateNode.containerInfo,p=Su(e);Cu(e,p,c);break;default:throw Error(h(161))}}catch(v){se(e,e.return,v)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $r(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;$r(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Qt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Kr(e,t.alternate,t),t=t.sibling}function qn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:sn(4,t,t.return),qn(t);break;case 1:zt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Yr(t,t.return,n),qn(t);break;case 27:ml(t.stateNode);case 26:case 5:zt(t,t.return),qn(t);break;case 22:t.memoizedState===null&&qn(t);break;case 30:qn(t);break;default:qn(t)}e=e.sibling}}function Zt(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:Zt(l,i,n),ll(4,i);break;case 1:if(Zt(l,i,n),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(p){se(a,a.return,p)}if(a=i,l=a.updateQueue,l!==null){var u=a.stateNode;try{var c=l.shared.hiddenCallbacks;if(c!==null)for(l.shared.hiddenCallbacks=null,l=0;l<c.length;l++)Ns(c[l],u)}catch(p){se(a,a.return,p)}}n&&o&64&&qr(i),il(i,i.return);break;case 27:Qr(i);case 26:case 5:Zt(l,i,n),n&&a===null&&o&4&&Vr(i),il(i,i.return);break;case 12:Zt(l,i,n);break;case 31:Zt(l,i,n),n&&o&4&&Fr(l,i);break;case 13:Zt(l,i,n),n&&o&4&&Pr(l,i);break;case 22:i.memoizedState===null&&Zt(l,i,n),il(i,i.return);break;case 30:break;default:Zt(l,i,n)}t=t.sibling}}function Eu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Qa(n))}function xu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Qa(e))}function xt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ef(e,t,n,a),t=t.sibling}function ef(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:xt(e,t,n,a),l&2048&&ll(9,t);break;case 1:xt(e,t,n,a);break;case 3:xt(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Qa(e)));break;case 12:if(l&2048){xt(e,t,n,a),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,u=i.onPostCommit;typeof u=="function"&&u(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(c){se(t,t.return,c)}}else xt(e,t,n,a);break;case 31:xt(e,t,n,a);break;case 13:xt(e,t,n,a);break;case 23:break;case 22:i=t.stateNode,o=t.alternate,t.memoizedState!==null?i._visibility&2?xt(e,t,n,a):ol(e,t):i._visibility&2?xt(e,t,n,a):(i._visibility|=2,ya(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),l&2048&&Eu(o,t);break;case 24:xt(e,t,n,a),l&2048&&xu(t.alternate,t);break;default:xt(e,t,n,a)}}function ya(e,t,n,a,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,o=t,u=n,c=a,p=o.flags;switch(o.tag){case 0:case 11:case 15:ya(i,o,u,c,l),ll(8,o);break;case 23:break;case 22:var v=o.stateNode;o.memoizedState!==null?v._visibility&2?ya(i,o,u,c,l):ol(i,o):(v._visibility|=2,ya(i,o,u,c,l)),l&&p&2048&&Eu(o.alternate,o);break;case 24:ya(i,o,u,c,l),l&&p&2048&&xu(o.alternate,o);break;default:ya(i,o,u,c,l)}t=t.sibling}}function ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:ol(n,a),l&2048&&Eu(a.alternate,a);break;case 24:ol(n,a),l&2048&&xu(a.alternate,a);break;default:ol(n,a)}t=t.sibling}}var ul=8192;function ga(e,t,n){if(e.subtreeFlags&ul)for(e=e.child;e!==null;)tf(e,t,n),e=e.sibling}function tf(e,t,n){switch(e.tag){case 26:ga(e,t,n),e.flags&ul&&e.memoizedState!==null&&jm(n,Et,e.memoizedState,e.memoizedProps);break;case 5:ga(e,t,n);break;case 3:case 4:var a=Et;Et=Oi(e.stateNode.containerInfo),ga(e,t,n),Et=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=ul,ul=16777216,ga(e,t,n),ul=a):ga(e,t,n));break;default:ga(e,t,n)}}function nf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function cl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];_e=a,lf(a,e)}nf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)af(e),e=e.sibling}function af(e){switch(e.tag){case 0:case 11:case 15:cl(e),e.flags&2048&&sn(9,e,e.return);break;case 3:cl(e);break;case 12:cl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,pi(e)):cl(e);break;default:cl(e)}}function pi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];_e=a,lf(a,e)}nf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:sn(8,t,t.return),pi(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,pi(t));break;default:pi(t)}e=e.sibling}}function lf(e,t){for(;_e!==null;){var n=_e;switch(n.tag){case 0:case 11:case 15:sn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Qa(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,_e=a;else e:for(n=e;_e!==null;){a=_e;var l=a.sibling,i=a.return;if(Jr(a),a===n){_e=null;break e}if(l!==null){l.return=i,_e=l;break e}_e=i}}}var Ih={getCacheForType:function(e){var t=ke(Oe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ke(Oe).controller.signal}},$h=typeof WeakMap=="function"?WeakMap:Map,oe=0,pe=null,I=null,ee=0,ce=0,ut=null,rn=!1,va=!1,Au=!1,Kt=0,xe=0,fn=0,Yn=0,wu=0,ct=0,ba=0,sl=null,Ie=null,Du=!1,yi=0,of=0,gi=1/0,vi=null,dn=null,Re=0,hn=null,Sa=null,Jt=0,Ou=0,zu=null,uf=null,rl=0,Nu=null;function st(){return(oe&2)!==0&&ee!==0?ee&-ee:b.T!==null?Hu():Tc()}function cf(){if(ct===0)if((ee&536870912)===0||ne){var e=wl;wl<<=1,(wl&3932160)===0&&(wl=262144),ct=e}else ct=536870912;return e=it.current,e!==null&&(e.flags|=32),ct}function $e(e,t,n){(e===pe&&(ce===2||ce===9)||e.cancelPendingCommit!==null)&&(Ca(e,0),mn(e,ee,ct,!1)),Ma(e,n),((oe&2)===0||e!==pe)&&(e===pe&&((oe&2)===0&&(Yn|=n),xe===4&&mn(e,ee,ct,!1)),Nt(e))}function sf(e,t,n){if((oe&6)!==0)throw Error(h(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Na(e,t),l=a?nm(e,t):Ru(e,t,!0),i=a;do{if(l===0){va&&!a&&mn(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!em(n)){l=Ru(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var u=e;l=sl;var c=u.current.memoizedState.isDehydrated;if(c&&(Ca(u,o).flags|=256),o=Ru(u,o,!1),o!==2){if(Au&&!c){u.errorRecoveryDisabledLanes|=i,Yn|=i,l=4;break e}i=Ie,Ie=l,i!==null&&(Ie===null?Ie=i:Ie.push.apply(Ie,i))}l=o}if(i=!1,l!==2)continue}}if(l===1){Ca(e,0),mn(e,t,0,!0);break}e:{switch(a=e,i=l,i){case 0:case 1:throw Error(h(345));case 4:if((t&4194048)!==t)break;case 6:mn(a,t,ct,!rn);break e;case 2:Ie=null;break;case 3:case 5:break;default:throw Error(h(329))}if((t&62914560)===t&&(l=yi+300-et(),10<l)){if(mn(a,t,ct,!rn),Ol(a,0,!0)!==0)break e;Jt=t,a.timeoutHandle=Lf(rf.bind(null,a,n,Ie,vi,Du,t,ct,Yn,ba,rn,i,"Throttled",-0,0),l);break e}rf(a,n,Ie,vi,Du,t,ct,Yn,ba,rn,i,null,-0,0)}}break}while(!0);Nt(e)}function rf(e,t,n,a,l,i,o,u,c,p,v,C,y,g){if(e.timeoutHandle=-1,C=t.subtreeFlags,C&8192||(C&16785408)===16785408){C={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Bt},tf(t,i,C);var O=(i&62914560)===i?yi-et():(i&4194048)===i?of-et():0;if(O=km(C,O),O!==null){Jt=i,e.cancelPendingCommit=O(vf.bind(null,e,t,i,n,a,l,o,u,c,v,C,null,y,g)),mn(e,i,o,!p);return}}vf(e,t,i,n,a,l,o,u,c)}function em(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],i=l.getSnapshot;l=l.value;try{if(!at(i(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mn(e,t,n,a){t&=~wu,t&=~Yn,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var i=31-nt(l),o=1<<i;a[i]=-1,l&=~o}n!==0&&bc(e,n,t)}function bi(){return(oe&6)===0?(fl(0),!1):!0}function Mu(){if(I!==null){if(ce===0)var e=I.return;else e=I,jt=Bn=null,Ko(e),fa=null,Ka=0,e=I;for(;e!==null;)Lr(e.alternate,e),e=e.return;I=null}}function Ca(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Sm(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Jt=0,Mu(),pe=e,I=n=Ut(e.current,null),ee=t,ce=0,ut=null,rn=!1,va=Na(e,t),Au=!1,ba=ct=wu=Yn=fn=xe=0,Ie=sl=null,Du=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-nt(a),i=1<<l;t|=e[l],a&=~i}return Kt=t,Ll(),n}function ff(e,t){Y=null,b.H=tl,t===ra||t===Jl?(t=ws(),ce=3):t===Uo?(t=ws(),ce=4):ce=t===su?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ut=t,I===null&&(xe=1,ci(e,mt(t,e.current)))}function df(){var e=it.current;return e===null?!0:(ee&4194048)===ee?vt===null:(ee&62914560)===ee||(ee&536870912)!==0?e===vt:!1}function hf(){var e=b.H;return b.H=tl,e===null?tl:e}function mf(){var e=b.A;return b.A=Ih,e}function Si(){xe=4,rn||(ee&4194048)!==ee&&it.current!==null||(va=!0),(fn&134217727)===0&&(Yn&134217727)===0||pe===null||mn(pe,ee,ct,!1)}function Ru(e,t,n){var a=oe;oe|=2;var l=hf(),i=mf();(pe!==e||ee!==t)&&(vi=null,Ca(e,t)),t=!1;var o=xe;e:do try{if(ce!==0&&I!==null){var u=I,c=ut;switch(ce){case 8:Mu(),o=6;break e;case 3:case 2:case 9:case 6:it.current===null&&(t=!0);var p=ce;if(ce=0,ut=null,Ta(e,u,c,p),n&&va){o=0;break e}break;default:p=ce,ce=0,ut=null,Ta(e,u,c,p)}}tm(),o=xe;break}catch(v){ff(e,v)}while(!0);return t&&e.shellSuspendCounter++,jt=Bn=null,oe=a,b.H=l,b.A=i,I===null&&(pe=null,ee=0,Ll()),o}function tm(){for(;I!==null;)pf(I)}function nm(e,t){var n=oe;oe|=2;var a=hf(),l=mf();pe!==e||ee!==t?(vi=null,gi=et()+500,Ca(e,t)):va=Na(e,t);e:do try{if(ce!==0&&I!==null){t=I;var i=ut;t:switch(ce){case 1:ce=0,ut=null,Ta(e,t,i,1);break;case 2:case 9:if(xs(i)){ce=0,ut=null,yf(t);break}t=function(){ce!==2&&ce!==9||pe!==e||(ce=7),Nt(e)},i.then(t,t);break e;case 3:ce=7;break e;case 4:ce=5;break e;case 7:xs(i)?(ce=0,ut=null,yf(t)):(ce=0,ut=null,Ta(e,t,i,7));break;case 5:var o=null;switch(I.tag){case 26:o=I.memoizedState;case 5:case 27:var u=I;if(o?td(o):u.stateNode.complete){ce=0,ut=null;var c=u.sibling;if(c!==null)I=c;else{var p=u.return;p!==null?(I=p,Ci(p)):I=null}break t}}ce=0,ut=null,Ta(e,t,i,5);break;case 6:ce=0,ut=null,Ta(e,t,i,6);break;case 8:Mu(),xe=6;break e;default:throw Error(h(462))}}am();break}catch(v){ff(e,v)}while(!0);return jt=Bn=null,b.H=a,b.A=l,oe=n,I!==null?0:(pe=null,ee=0,Ll(),xe)}function am(){for(;I!==null&&!wd();)pf(I)}function pf(e){var t=kr(e.alternate,e,Kt);e.memoizedProps=e.pendingProps,t===null?Ci(e):I=t}function yf(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Rr(n,t,t.pendingProps,t.type,void 0,ee);break;case 11:t=Rr(n,t,t.pendingProps,t.type.render,t.ref,ee);break;case 5:Ko(t);default:Lr(n,t),t=I=hs(t,Kt),t=kr(n,t,Kt)}e.memoizedProps=e.pendingProps,t===null?Ci(e):I=t}function Ta(e,t,n,a){jt=Bn=null,Ko(t),fa=null,Ka=0;var l=t.return;try{if(Qh(e,l,t,n,ee)){xe=1,ci(e,mt(n,e.current)),I=null;return}}catch(i){if(l!==null)throw I=l,i;xe=1,ci(e,mt(n,e.current)),I=null;return}t.flags&32768?(ne||a===1?e=!0:va||(ee&536870912)!==0?e=!1:(rn=e=!0,(a===2||a===9||a===3||a===6)&&(a=it.current,a!==null&&a.tag===13&&(a.flags|=16384))),gf(t,e)):Ci(t)}function Ci(e){var t=e;do{if((t.flags&32768)!==0){gf(t,rn);return}e=t.return;var n=Jh(t.alternate,t,Kt);if(n!==null){I=n;return}if(t=t.sibling,t!==null){I=t;return}I=t=e}while(t!==null);xe===0&&(xe=5)}function gf(e,t){do{var n=Wh(e.alternate,e);if(n!==null){n.flags&=32767,I=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){I=e;return}I=e=n}while(e!==null);xe=6,I=null}function vf(e,t,n,a,l,i,o,u,c){e.cancelPendingCommit=null;do Ti();while(Re!==0);if((oe&6)!==0)throw Error(h(327));if(t!==null){if(t===e.current)throw Error(h(177));if(i=t.lanes|t.childLanes,i|=So,Hd(e,n,i,o,u,c),e===pe&&(I=pe=null,ee=0),Sa=t,hn=e,Jt=n,Ou=i,zu=l,uf=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,um(xl,function(){return Ef(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=b.T,b.T=null,l=w.p,w.p=2,o=oe,oe|=4;try{Fh(e,t,n)}finally{oe=o,w.p=l,b.T=a}}Re=1,bf(),Sf(),Cf()}}function bf(){if(Re===1){Re=0;var e=hn,t=Sa,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=b.T,b.T=null;var a=w.p;w.p=2;var l=oe;oe|=4;try{Ir(t,e);var i=Xu,o=ls(e.containerInfo),u=i.focusedElem,c=i.selectionRange;if(o!==u&&u&&u.ownerDocument&&as(u.ownerDocument.documentElement,u)){if(c!==null&&po(u)){var p=c.start,v=c.end;if(v===void 0&&(v=p),"selectionStart"in u)u.selectionStart=p,u.selectionEnd=Math.min(v,u.value.length);else{var C=u.ownerDocument||document,y=C&&C.defaultView||window;if(y.getSelection){var g=y.getSelection(),O=u.textContent.length,_=Math.min(c.start,O),he=c.end===void 0?_:Math.min(c.end,O);!g.extend&&_>he&&(o=he,he=_,_=o);var f=ns(u,_),s=ns(u,he);if(f&&s&&(g.rangeCount!==1||g.anchorNode!==f.node||g.anchorOffset!==f.offset||g.focusNode!==s.node||g.focusOffset!==s.offset)){var m=C.createRange();m.setStart(f.node,f.offset),g.removeAllRanges(),_>he?(g.addRange(m),g.extend(s.node,s.offset)):(m.setEnd(s.node,s.offset),g.addRange(m))}}}}for(C=[],g=u;g=g.parentNode;)g.nodeType===1&&C.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<C.length;u++){var S=C[u];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}_i=!!Vu,Xu=Vu=null}finally{oe=l,w.p=a,b.T=n}}e.current=t,Re=2}}function Sf(){if(Re===2){Re=0;var e=hn,t=Sa,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=b.T,b.T=null;var a=w.p;w.p=2;var l=oe;oe|=4;try{Kr(e,t.alternate,t)}finally{oe=l,w.p=a,b.T=n}}Re=3}}function Cf(){if(Re===4||Re===3){Re=0,Dd();var e=hn,t=Sa,n=Jt,a=uf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Re=5:(Re=0,Sa=hn=null,Tf(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(dn=null),Wi(n),t=t.stateNode,tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(za,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=b.T,l=w.p,w.p=2,b.T=null;try{for(var i=e.onRecoverableError,o=0;o<a.length;o++){var u=a[o];i(u.value,{componentStack:u.stack})}}finally{b.T=t,w.p=l}}(Jt&3)!==0&&Ti(),Nt(e),l=e.pendingLanes,(n&261930)!==0&&(l&42)!==0?e===Nu?rl++:(rl=0,Nu=e):rl=0,fl(0)}}function Tf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Qa(t)))}function Ti(){return bf(),Sf(),Cf(),Ef()}function Ef(){if(Re!==5)return!1;var e=hn,t=Ou;Ou=0;var n=Wi(Jt),a=b.T,l=w.p;try{w.p=32>n?32:n,b.T=null,n=zu,zu=null;var i=hn,o=Jt;if(Re=0,Sa=hn=null,Jt=0,(oe&6)!==0)throw Error(h(331));var u=oe;if(oe|=4,af(i.current),ef(i,i.current,o,n),oe=u,fl(0,!1),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(za,i)}catch{}return!0}finally{w.p=l,b.T=a,Tf(e,t)}}function xf(e,t,n){t=mt(n,t),t=cu(e.stateNode,t,2),e=on(e,t,2),e!==null&&(Ma(e,2),Nt(e))}function se(e,t,n){if(e.tag===3)xf(e,e,n);else for(;t!==null;){if(t.tag===3){xf(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(dn===null||!dn.has(a))){e=mt(n,e),n=xr(2),a=on(t,n,2),a!==null&&(Ar(n,a,t,e),Ma(a,2),Nt(a));break}}t=t.return}}function Bu(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new $h;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(Au=!0,l.add(n),e=lm.bind(null,e,t,n),t.then(e,e))}function lm(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,pe===e&&(ee&n)===n&&(xe===4||xe===3&&(ee&62914560)===ee&&300>et()-yi?(oe&2)===0&&Ca(e,0):wu|=n,ba===ee&&(ba=0)),Nt(e)}function Af(e,t){t===0&&(t=vc()),e=Nn(e,t),e!==null&&(Ma(e,t),Nt(e))}function im(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Af(e,n)}function om(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(h(314))}a!==null&&a.delete(t),Af(e,n)}function um(e,t){return Qi(e,t)}var Ei=null,Ea=null,_u=!1,xi=!1,Uu=!1,pn=0;function Nt(e){e!==Ea&&e.next===null&&(Ea===null?Ei=Ea=e:Ea=Ea.next=e),xi=!0,_u||(_u=!0,sm())}function fl(e,t){if(!Uu&&xi){Uu=!0;do for(var n=!1,a=Ei;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var o=a.suspendedLanes,u=a.pingedLanes;i=(1<<31-nt(42|e)+1)-1,i&=l&~(o&~u),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,zf(a,i))}else i=ee,i=Ol(a,a===pe?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Na(a,i)||(n=!0,zf(a,i));a=a.next}while(n);Uu=!1}}function cm(){wf()}function wf(){xi=_u=!1;var e=0;pn!==0&&bm()&&(e=pn);for(var t=et(),n=null,a=Ei;a!==null;){var l=a.next,i=Df(a,t);i===0?(a.next=null,n===null?Ei=l:n.next=l,l===null&&(Ea=n)):(n=a,(e!==0||(i&3)!==0)&&(xi=!0)),a=l}Re!==0&&Re!==5||fl(e),pn!==0&&(pn=0)}function Df(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var o=31-nt(i),u=1<<o,c=l[o];c===-1?((u&n)===0||(u&a)!==0)&&(l[o]=Ud(u,t)):c<=t&&(e.expiredLanes|=u),i&=~u}if(t=pe,n=ee,n=Ol(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(ce===2||ce===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Zi(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Na(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Zi(a),Wi(n)){case 2:case 8:n=yc;break;case 32:n=xl;break;case 268435456:n=gc;break;default:n=xl}return a=Of.bind(null,e),n=Qi(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Zi(a),e.callbackPriority=2,e.callbackNode=null,2}function Of(e,t){if(Re!==0&&Re!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ti()&&e.callbackNode!==n)return null;var a=ee;return a=Ol(e,e===pe?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(sf(e,a,t),Df(e,et()),e.callbackNode!=null&&e.callbackNode===n?Of.bind(null,e):null)}function zf(e,t){if(Ti())return null;sf(e,t,!0)}function sm(){Cm(function(){(oe&6)!==0?Qi(pc,cm):wf()})}function Hu(){if(pn===0){var e=ca;e===0&&(e=Al,Al<<=1,(Al&261888)===0&&(Al=256)),pn=e}return pn}function Nf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Rl(""+e)}function Mf(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function rm(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var i=Nf((l[Ke]||null).action),o=a.submitter;o&&(t=(t=o[Ke]||null)?Nf(t.formAction):o.getAttribute("formAction"),t!==null&&(i=t,o=null));var u=new Hl("action","action",null,a,l);e.push({event:u,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(pn!==0){var c=o?Mf(l,o):new FormData(l);nu(n,{pending:!0,data:c,method:l.method,action:i},null,c)}}else typeof i=="function"&&(u.preventDefault(),c=o?Mf(l,o):new FormData(l),nu(n,{pending:!0,data:c,method:l.method,action:i},i,c))},currentTarget:l}]})}}for(var ju=0;ju<bo.length;ju++){var ku=bo[ju],fm=ku.toLowerCase(),dm=ku[0].toUpperCase()+ku.slice(1);Tt(fm,"on"+dm)}Tt(us,"onAnimationEnd"),Tt(cs,"onAnimationIteration"),Tt(ss,"onAnimationStart"),Tt("dblclick","onDoubleClick"),Tt("focusin","onFocus"),Tt("focusout","onBlur"),Tt(Oh,"onTransitionRun"),Tt(zh,"onTransitionStart"),Tt(Nh,"onTransitionCancel"),Tt(rs,"onTransitionEnd"),Jn("onMouseEnter",["mouseout","mouseover"]),Jn("onMouseLeave",["mouseout","mouseover"]),Jn("onPointerEnter",["pointerout","pointerover"]),Jn("onPointerLeave",["pointerout","pointerover"]),wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wn("onBeforeInput",["compositionend","keypress","textInput","paste"]),wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(dl));function Rf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var o=a.length-1;0<=o;o--){var u=a[o],c=u.instance,p=u.currentTarget;if(u=u.listener,c!==i&&l.isPropagationStopped())break e;i=u,l.currentTarget=p;try{i(l)}catch(v){Gl(v)}l.currentTarget=null,i=c}else for(o=0;o<a.length;o++){if(u=a[o],c=u.instance,p=u.currentTarget,u=u.listener,c!==i&&l.isPropagationStopped())break e;i=u,l.currentTarget=p;try{i(l)}catch(v){Gl(v)}l.currentTarget=null,i=c}}}}function $(e,t){var n=t[Fi];n===void 0&&(n=t[Fi]=new Set);var a=e+"__bubble";n.has(a)||(Bf(t,e,2,!1),n.add(a))}function Gu(e,t,n){var a=0;t&&(a|=4),Bf(n,e,a,t)}var Ai="_reactListening"+Math.random().toString(36).slice(2);function Lu(e){if(!e[Ai]){e[Ai]=!0,Ac.forEach(function(n){n!=="selectionchange"&&(hm.has(n)||Gu(n,!1,e),Gu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ai]||(t[Ai]=!0,Gu("selectionchange",!1,t))}}function Bf(e,t,n,a){switch(cd(t)){case 2:var l=qm;break;case 8:l=Ym;break;default:l=tc}n=l.bind(null,t,n,e),l=void 0,!io||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function qu(e,t,n,a,l){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var u=a.stateNode.containerInfo;if(u===l)break;if(o===4)for(o=a.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===l)return;o=o.return}for(;u!==null;){if(o=Qn(u),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){a=i=o;continue e}u=u.parentNode}}a=a.return}jc(function(){var p=i,v=ao(n),C=[];e:{var y=fs.get(e);if(y!==void 0){var g=Hl,O=e;switch(e){case"keypress":if(_l(n)===0)break e;case"keydown":case"keyup":g=oh;break;case"focusin":O="focus",g=so;break;case"focusout":O="blur",g=so;break;case"beforeblur":case"afterblur":g=so;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Lc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Jd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=sh;break;case us:case cs:case ss:g=Pd;break;case rs:g=fh;break;case"scroll":case"scrollend":g=Zd;break;case"wheel":g=hh;break;case"copy":case"cut":case"paste":g=$d;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Yc;break;case"toggle":case"beforetoggle":g=ph}var _=(t&4)!==0,he=!_&&(e==="scroll"||e==="scrollend"),f=_?y!==null?y+"Capture":null:y;_=[];for(var s=p,m;s!==null;){var S=s;if(m=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||m===null||f===null||(S=_a(s,f),S!=null&&_.push(hl(s,S,m))),he)break;s=s.return}0<_.length&&(y=new g(y,O,null,n,v),C.push({event:y,listeners:_}))}}if((t&7)===0){e:{if(y=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",y&&n!==no&&(O=n.relatedTarget||n.fromElement)&&(Qn(O)||O[Xn]))break e;if((g||y)&&(y=v.window===v?v:(y=v.ownerDocument)?y.defaultView||y.parentWindow:window,g?(O=n.relatedTarget||n.toElement,g=p,O=O?Qn(O):null,O!==null&&(he=k(O),_=O.tag,O!==he||_!==5&&_!==27&&_!==6)&&(O=null)):(g=null,O=p),g!==O)){if(_=Lc,S="onMouseLeave",f="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(_=Yc,S="onPointerLeave",f="onPointerEnter",s="pointer"),he=g==null?y:Ba(g),m=O==null?y:Ba(O),y=new _(S,s+"leave",g,n,v),y.target=he,y.relatedTarget=m,S=null,Qn(v)===p&&(_=new _(f,s+"enter",O,n,v),_.target=m,_.relatedTarget=he,S=_),he=S,g&&O)t:{for(_=mm,f=g,s=O,m=0,S=f;S;S=_(S))m++;S=0;for(var R=s;R;R=_(R))S++;for(;0<m-S;)f=_(f),m--;for(;0<S-m;)s=_(s),S--;for(;m--;){if(f===s||s!==null&&f===s.alternate){_=f;break t}f=_(f),s=_(s)}_=null}else _=null;g!==null&&_f(C,y,g,_,!1),O!==null&&he!==null&&_f(C,he,O,_,!0)}}e:{if(y=p?Ba(p):window,g=y.nodeName&&y.nodeName.toLowerCase(),g==="select"||g==="input"&&y.type==="file")var le=Fc;else if(Jc(y))if(Pc)le=Ah;else{le=Eh;var N=Th}else g=y.nodeName,!g||g.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?p&&to(p.elementType)&&(le=Fc):le=xh;if(le&&(le=le(e,p))){Wc(C,le,n,v);break e}N&&N(e,y,p),e==="focusout"&&p&&y.type==="number"&&p.memoizedProps.value!=null&&eo(y,"number",y.value)}switch(N=p?Ba(p):window,e){case"focusin":(Jc(N)||N.contentEditable==="true")&&(ea=N,yo=p,Ya=null);break;case"focusout":Ya=yo=ea=null;break;case"mousedown":go=!0;break;case"contextmenu":case"mouseup":case"dragend":go=!1,is(C,n,v);break;case"selectionchange":if(Dh)break;case"keydown":case"keyup":is(C,n,v)}var Q;if(fo)e:{switch(e){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else $n?Zc(e,n)&&(te="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(te="onCompositionStart");te&&(Vc&&n.locale!=="ko"&&($n||te!=="onCompositionStart"?te==="onCompositionEnd"&&$n&&(Q=kc()):(It=v,oo="value"in It?It.value:It.textContent,$n=!0)),N=wi(p,te),0<N.length&&(te=new qc(te,e,null,n,v),C.push({event:te,listeners:N}),Q?te.data=Q:(Q=Kc(n),Q!==null&&(te.data=Q)))),(Q=gh?vh(e,n):bh(e,n))&&(te=wi(p,"onBeforeInput"),0<te.length&&(N=new qc("onBeforeInput","beforeinput",null,n,v),C.push({event:N,listeners:te}),N.data=Q)),rm(C,e,p,n,v)}Rf(C,t)})}function hl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function wi(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=_a(e,n),l!=null&&a.unshift(hl(e,l,i)),l=_a(e,t),l!=null&&a.push(hl(e,l,i))),e.tag===3)return a;e=e.return}return[]}function mm(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function _f(e,t,n,a,l){for(var i=t._reactName,o=[];n!==null&&n!==a;){var u=n,c=u.alternate,p=u.stateNode;if(u=u.tag,c!==null&&c===a)break;u!==5&&u!==26&&u!==27||p===null||(c=p,l?(p=_a(n,i),p!=null&&o.unshift(hl(n,p,c))):l||(p=_a(n,i),p!=null&&o.push(hl(n,p,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var pm=/\r\n?/g,ym=/\u0000|\uFFFD/g;function Uf(e){return(typeof e=="string"?e:""+e).replace(pm,`
`).replace(ym,"")}function Hf(e,t){return t=Uf(t),Uf(e)===t}function de(e,t,n,a,l,i){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Fn(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Fn(e,""+a);break;case"className":Nl(e,"class",a);break;case"tabIndex":Nl(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Nl(e,n,a);break;case"style":Uc(e,a,i);break;case"data":if(t!=="object"){Nl(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Rl(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&de(e,t,"name",l.name,l,null),de(e,t,"formEncType",l.formEncType,l,null),de(e,t,"formMethod",l.formMethod,l,null),de(e,t,"formTarget",l.formTarget,l,null)):(de(e,t,"encType",l.encType,l,null),de(e,t,"method",l.method,l,null),de(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Rl(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Bt);break;case"onScroll":a!=null&&$("scroll",e);break;case"onScrollEnd":a!=null&&$("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(h(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(h(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Rl(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":$("beforetoggle",e),$("toggle",e),zl(e,"popover",a);break;case"xlinkActuate":Rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Rt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Rt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Rt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Rt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":zl(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Xd.get(n)||n,zl(e,n,a))}}function Yu(e,t,n,a,l,i){switch(n){case"style":Uc(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(h(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(h(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Fn(e,a):(typeof a=="number"||typeof a=="bigint")&&Fn(e,""+a);break;case"onScroll":a!=null&&$("scroll",e);break;case"onScrollEnd":a!=null&&$("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Bt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!wc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),i=e[Ke]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,l),typeof a=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):zl(e,n,a)}}}function Le(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":$("error",e),$("load",e);var a=!1,l=!1,i;for(i in n)if(n.hasOwnProperty(i)){var o=n[i];if(o!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:de(e,t,i,o,n,null)}}l&&de(e,t,"srcSet",n.srcSet,n,null),a&&de(e,t,"src",n.src,n,null);return;case"input":$("invalid",e);var u=i=o=l=null,c=null,p=null;for(a in n)if(n.hasOwnProperty(a)){var v=n[a];if(v!=null)switch(a){case"name":l=v;break;case"type":o=v;break;case"checked":c=v;break;case"defaultChecked":p=v;break;case"value":i=v;break;case"defaultValue":u=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(h(137,t));break;default:de(e,t,a,v,n,null)}}Mc(e,i,u,c,p,o,l,!1);return;case"select":$("invalid",e),a=o=i=null;for(l in n)if(n.hasOwnProperty(l)&&(u=n[l],u!=null))switch(l){case"value":i=u;break;case"defaultValue":o=u;break;case"multiple":a=u;default:de(e,t,l,u,n,null)}t=i,n=o,e.multiple=!!a,t!=null?Wn(e,!!a,t,!1):n!=null&&Wn(e,!!a,n,!0);return;case"textarea":$("invalid",e),i=l=a=null;for(o in n)if(n.hasOwnProperty(o)&&(u=n[o],u!=null))switch(o){case"value":a=u;break;case"defaultValue":l=u;break;case"children":i=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(h(91));break;default:de(e,t,o,u,n,null)}Bc(e,a,l,i);return;case"option":for(c in n)n.hasOwnProperty(c)&&(a=n[c],a!=null)&&(c==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":de(e,t,c,a,n,null));return;case"dialog":$("beforetoggle",e),$("toggle",e),$("cancel",e),$("close",e);break;case"iframe":case"object":$("load",e);break;case"video":case"audio":for(a=0;a<dl.length;a++)$(dl[a],e);break;case"image":$("error",e),$("load",e);break;case"details":$("toggle",e);break;case"embed":case"source":case"link":$("error",e),$("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in n)if(n.hasOwnProperty(p)&&(a=n[p],a!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:de(e,t,p,a,n,null)}return;default:if(to(t)){for(v in n)n.hasOwnProperty(v)&&(a=n[v],a!==void 0&&Yu(e,t,v,a,n,void 0));return}}for(u in n)n.hasOwnProperty(u)&&(a=n[u],a!=null&&de(e,t,u,a,n,null))}function gm(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,o=null,u=null,c=null,p=null,v=null;for(g in n){var C=n[g];if(n.hasOwnProperty(g)&&C!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":c=C;default:a.hasOwnProperty(g)||de(e,t,g,null,a,C)}}for(var y in a){var g=a[y];if(C=n[y],a.hasOwnProperty(y)&&(g!=null||C!=null))switch(y){case"type":i=g;break;case"name":l=g;break;case"checked":p=g;break;case"defaultChecked":v=g;break;case"value":o=g;break;case"defaultValue":u=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(h(137,t));break;default:g!==C&&de(e,t,y,g,a,C)}}$i(e,o,u,c,p,v,i,l);return;case"select":g=o=u=y=null;for(i in n)if(c=n[i],n.hasOwnProperty(i)&&c!=null)switch(i){case"value":break;case"multiple":g=c;default:a.hasOwnProperty(i)||de(e,t,i,null,a,c)}for(l in a)if(i=a[l],c=n[l],a.hasOwnProperty(l)&&(i!=null||c!=null))switch(l){case"value":y=i;break;case"defaultValue":u=i;break;case"multiple":o=i;default:i!==c&&de(e,t,l,i,a,c)}t=u,n=o,a=g,y!=null?Wn(e,!!n,y,!1):!!a!=!!n&&(t!=null?Wn(e,!!n,t,!0):Wn(e,!!n,n?[]:"",!1));return;case"textarea":g=y=null;for(u in n)if(l=n[u],n.hasOwnProperty(u)&&l!=null&&!a.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:de(e,t,u,null,a,l)}for(o in a)if(l=a[o],i=n[o],a.hasOwnProperty(o)&&(l!=null||i!=null))switch(o){case"value":y=l;break;case"defaultValue":g=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(h(91));break;default:l!==i&&de(e,t,o,l,a,i)}Rc(e,y,g);return;case"option":for(var O in n)y=n[O],n.hasOwnProperty(O)&&y!=null&&!a.hasOwnProperty(O)&&(O==="selected"?e.selected=!1:de(e,t,O,null,a,y));for(c in a)y=a[c],g=n[c],a.hasOwnProperty(c)&&y!==g&&(y!=null||g!=null)&&(c==="selected"?e.selected=y&&typeof y!="function"&&typeof y!="symbol":de(e,t,c,y,a,g));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _ in n)y=n[_],n.hasOwnProperty(_)&&y!=null&&!a.hasOwnProperty(_)&&de(e,t,_,null,a,y);for(p in a)if(y=a[p],g=n[p],a.hasOwnProperty(p)&&y!==g&&(y!=null||g!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(h(137,t));break;default:de(e,t,p,y,a,g)}return;default:if(to(t)){for(var he in n)y=n[he],n.hasOwnProperty(he)&&y!==void 0&&!a.hasOwnProperty(he)&&Yu(e,t,he,void 0,a,y);for(v in a)y=a[v],g=n[v],!a.hasOwnProperty(v)||y===g||y===void 0&&g===void 0||Yu(e,t,v,y,a,g);return}}for(var f in n)y=n[f],n.hasOwnProperty(f)&&y!=null&&!a.hasOwnProperty(f)&&de(e,t,f,null,a,y);for(C in a)y=a[C],g=n[C],!a.hasOwnProperty(C)||y===g||y==null&&g==null||de(e,t,C,y,a,g)}function jf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vm(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var l=n[a],i=l.transferSize,o=l.initiatorType,u=l.duration;if(i&&u&&jf(o)){for(o=0,u=l.responseEnd,a+=1;a<n.length;a++){var c=n[a],p=c.startTime;if(p>u)break;var v=c.transferSize,C=c.initiatorType;v&&jf(C)&&(c=c.responseEnd,o+=v*(c<u?1:(u-p)/(c-p)))}if(--a,t+=8*(i+o)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Vu=null,Xu=null;function Di(e){return e.nodeType===9?e:e.ownerDocument}function kf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Qu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zu=null;function bm(){var e=window.event;return e&&e.type==="popstate"?e===Zu?!1:(Zu=e,!0):(Zu=null,!1)}var Lf=typeof setTimeout=="function"?setTimeout:void 0,Sm=typeof clearTimeout=="function"?clearTimeout:void 0,qf=typeof Promise=="function"?Promise:void 0,Cm=typeof queueMicrotask=="function"?queueMicrotask:typeof qf<"u"?function(e){return qf.resolve(null).then(e).catch(Tm)}:Lf;function Tm(e){setTimeout(function(){throw e})}function yn(e){return e==="head"}function Yf(e,t){var n=t,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(l),Da(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")ml(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ml(n);for(var i=n.firstChild;i;){var o=i.nextSibling,u=i.nodeName;i[Ra]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=o}}else n==="body"&&ml(e.ownerDocument.body);n=l}while(n);Da(t)}function Vf(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Ku(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Ku(n),Pi(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Em(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ra])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=bt(e.nextSibling),e===null)break}return null}function xm(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=bt(e.nextSibling),e===null))return null;return e}function Xf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=bt(e.nextSibling),e===null))return null;return e}function Ju(e){return e.data==="$?"||e.data==="$~"}function Wu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Am(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Fu=null;function Qf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return bt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Zf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Kf(e,t,n){switch(t=Di(n),e){case"html":if(e=t.documentElement,!e)throw Error(h(452));return e;case"head":if(e=t.head,!e)throw Error(h(453));return e;case"body":if(e=t.body,!e)throw Error(h(454));return e;default:throw Error(h(451))}}function ml(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Pi(e)}var St=new Map,Jf=new Set;function Oi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Wt=w.d;w.d={f:wm,r:Dm,D:Om,C:zm,L:Nm,m:Mm,X:Bm,S:Rm,M:_m};function wm(){var e=Wt.f(),t=bi();return e||t}function Dm(e){var t=Zn(e);t!==null&&t.tag===5&&t.type==="form"?rr(t):Wt.r(e)}var xa=typeof document>"u"?null:document;function Wf(e,t,n){var a=xa;if(a&&typeof t=="string"&&t){var l=dt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),Jf.has(l)||(Jf.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),Le(t,"link",e),Be(t),a.head.appendChild(t)))}}function Om(e){Wt.D(e),Wf("dns-prefetch",e,null)}function zm(e,t){Wt.C(e,t),Wf("preconnect",e,t)}function Nm(e,t,n){Wt.L(e,t,n);var a=xa;if(a&&e&&t){var l='link[rel="preload"][as="'+dt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+dt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+dt(n.imageSizes)+'"]')):l+='[href="'+dt(e)+'"]';var i=l;switch(t){case"style":i=Aa(e);break;case"script":i=wa(e)}St.has(i)||(e=M({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),St.set(i,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(pl(i))||t==="script"&&a.querySelector(yl(i))||(t=a.createElement("link"),Le(t,"link",e),Be(t),a.head.appendChild(t)))}}function Mm(e,t){Wt.m(e,t);var n=xa;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+dt(a)+'"][href="'+dt(e)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=wa(e)}if(!St.has(i)&&(e=M({rel:"modulepreload",href:e},t),St.set(i,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(yl(i)))return}a=n.createElement("link"),Le(a,"link",e),Be(a),n.head.appendChild(a)}}}function Rm(e,t,n){Wt.S(e,t,n);var a=xa;if(a&&e){var l=Kn(a).hoistableStyles,i=Aa(e);t=t||"default";var o=l.get(i);if(!o){var u={loading:0,preload:null};if(o=a.querySelector(pl(i)))u.loading=5;else{e=M({rel:"stylesheet",href:e,"data-precedence":t},n),(n=St.get(i))&&Pu(e,n);var c=o=a.createElement("link");Be(c),Le(c,"link",e),c._p=new Promise(function(p,v){c.onload=p,c.onerror=v}),c.addEventListener("load",function(){u.loading|=1}),c.addEventListener("error",function(){u.loading|=2}),u.loading|=4,zi(o,t,a)}o={type:"stylesheet",instance:o,count:1,state:u},l.set(i,o)}}}function Bm(e,t){Wt.X(e,t);var n=xa;if(n&&e){var a=Kn(n).hoistableScripts,l=wa(e),i=a.get(l);i||(i=n.querySelector(yl(l)),i||(e=M({src:e,async:!0},t),(t=St.get(l))&&Iu(e,t),i=n.createElement("script"),Be(i),Le(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function _m(e,t){Wt.M(e,t);var n=xa;if(n&&e){var a=Kn(n).hoistableScripts,l=wa(e),i=a.get(l);i||(i=n.querySelector(yl(l)),i||(e=M({src:e,async:!0,type:"module"},t),(t=St.get(l))&&Iu(e,t),i=n.createElement("script"),Be(i),Le(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function Ff(e,t,n,a){var l=(l=P.current)?Oi(l):null;if(!l)throw Error(h(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Aa(n.href),n=Kn(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Aa(n.href);var i=Kn(l).hoistableStyles,o=i.get(e);if(o||(l=l.ownerDocument||l,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,o),(i=l.querySelector(pl(e)))&&!i._p&&(o.instance=i,o.state.loading=5),St.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},St.set(e,n),i||Um(l,e,n,o.state))),t&&a===null)throw Error(h(528,""));return o}if(t&&a!==null)throw Error(h(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=wa(n),n=Kn(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,e))}}function Aa(e){return'href="'+dt(e)+'"'}function pl(e){return'link[rel="stylesheet"]['+e+"]"}function Pf(e){return M({},e,{"data-precedence":e.precedence,precedence:null})}function Um(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Le(t,"link",n),Be(t),e.head.appendChild(t))}function wa(e){return'[src="'+dt(e)+'"]'}function yl(e){return"script[async]"+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+dt(n.href)+'"]');if(a)return t.instance=a,Be(a),a;var l=M({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Be(a),Le(a,"style",l),zi(a,n.precedence,e),t.instance=a;case"stylesheet":l=Aa(n.href);var i=e.querySelector(pl(l));if(i)return t.state.loading|=4,t.instance=i,Be(i),i;a=Pf(n),(l=St.get(l))&&Pu(a,l),i=(e.ownerDocument||e).createElement("link"),Be(i);var o=i;return o._p=new Promise(function(u,c){o.onload=u,o.onerror=c}),Le(i,"link",a),t.state.loading|=4,zi(i,n.precedence,e),t.instance=i;case"script":return i=wa(n.src),(l=e.querySelector(yl(i)))?(t.instance=l,Be(l),l):(a=n,(l=St.get(i))&&(a=M({},n),Iu(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Be(l),Le(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(h(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,zi(a,n.precedence,e));return t.instance}function zi(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,o=0;o<a.length;o++){var u=a[o];if(u.dataset.precedence===t)i=u;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Pu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Iu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ni=null;function $f(e,t,n){if(Ni===null){var a=new Map,l=Ni=new Map;l.set(n,a)}else l=Ni,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var i=n[l];if(!(i[Ra]||i[He]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(t)||"";o=e+o;var u=a.get(o);u?u.push(i):a.set(o,[i])}}return a}function ed(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Hm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function td(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function jm(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=Aa(a.href),i=t.querySelector(pl(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Mi.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,Be(i);return}i=t.ownerDocument||t,a=Pf(a),(l=St.get(l))&&Pu(a,l),i=i.createElement("link"),Be(i);var o=i;o._p=new Promise(function(u,c){o.onload=u,o.onerror=c}),Le(i,"link",a),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Mi.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var $u=0;function km(e,t){return e.stylesheets&&e.count===0&&Bi(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Bi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&$u===0&&($u=62500*vm());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Bi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>$u?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function Mi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Bi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ri=null;function Bi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ri=new Map,t.forEach(Gm,e),Ri=null,Mi.call(e))}function Gm(e,t){if(!(t.state.loading&4)){var n=Ri.get(e);if(n)var a=n.get(null);else{n=new Map,Ri.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var o=l[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),a=o)}a&&n.set(null,a)}l=t.instance,o=l.getAttribute("data-precedence"),i=n.get(o)||a,i===a&&n.set(null,l),n.set(o,l),this.count++,a=Mi.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var gl={$$typeof:ge,Provider:null,Consumer:null,_currentValue:U,_currentValue2:U,_threadCount:0};function Lm(e,t,n,a,l,i,o,u,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ki(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ki(0),this.hiddenUpdates=Ki(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function nd(e,t,n,a,l,i,o,u,c,p,v,C){return e=new Lm(e,t,n,o,c,p,v,C,u),t=1,i===!0&&(t|=24),i=lt(3,null,null,t),e.current=i,i.stateNode=e,t=Ro(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:t},Ho(i),e}function ad(e){return e?(e=aa,e):aa}function ld(e,t,n,a,l,i){l=ad(l),a.context===null?a.context=l:a.pendingContext=l,a=ln(t),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=on(e,a,t),n!==null&&($e(n,e,t),Wa(n,e,t))}function id(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ec(e,t){id(e,t),(e=e.alternate)&&id(e,t)}function od(e){if(e.tag===13||e.tag===31){var t=Nn(e,67108864);t!==null&&$e(t,e,67108864),ec(e,67108864)}}function ud(e){if(e.tag===13||e.tag===31){var t=st();t=Ji(t);var n=Nn(e,t);n!==null&&$e(n,e,t),ec(e,t)}}var _i=!0;function qm(e,t,n,a){var l=b.T;b.T=null;var i=w.p;try{w.p=2,tc(e,t,n,a)}finally{w.p=i,b.T=l}}function Ym(e,t,n,a){var l=b.T;b.T=null;var i=w.p;try{w.p=8,tc(e,t,n,a)}finally{w.p=i,b.T=l}}function tc(e,t,n,a){if(_i){var l=nc(a);if(l===null)qu(e,t,a,Ui,n),sd(e,a);else if(Xm(l,e,t,n,a))a.stopPropagation();else if(sd(e,a),t&4&&-1<Vm.indexOf(e)){for(;l!==null;){var i=Zn(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=An(i.pendingLanes);if(o!==0){var u=i;for(u.pendingLanes|=2,u.entangledLanes|=2;o;){var c=1<<31-nt(o);u.entanglements[1]|=c,o&=~c}Nt(i),(oe&6)===0&&(gi=et()+500,fl(0))}}break;case 31:case 13:u=Nn(i,2),u!==null&&$e(u,i,2),bi(),ec(i,2)}if(i=nc(a),i===null&&qu(e,t,a,Ui,n),i===l)break;l=i}l!==null&&a.stopPropagation()}else qu(e,t,a,null,n)}}function nc(e){return e=ao(e),ac(e)}var Ui=null;function ac(e){if(Ui=null,e=Qn(e),e!==null){var t=k(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=V(t),e!==null)return e;e=null}else if(n===31){if(e=L(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ui=e,null}function cd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Od()){case pc:return 2;case yc:return 8;case xl:case zd:return 32;case gc:return 268435456;default:return 32}default:return 32}}var lc=!1,gn=null,vn=null,bn=null,vl=new Map,bl=new Map,Sn=[],Vm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sd(e,t){switch(e){case"focusin":case"focusout":gn=null;break;case"dragenter":case"dragleave":vn=null;break;case"mouseover":case"mouseout":bn=null;break;case"pointerover":case"pointerout":vl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bl.delete(t.pointerId)}}function Sl(e,t,n,a,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Zn(t),t!==null&&od(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Xm(e,t,n,a,l){switch(t){case"focusin":return gn=Sl(gn,e,t,n,a,l),!0;case"dragenter":return vn=Sl(vn,e,t,n,a,l),!0;case"mouseover":return bn=Sl(bn,e,t,n,a,l),!0;case"pointerover":var i=l.pointerId;return vl.set(i,Sl(vl.get(i)||null,e,t,n,a,l)),!0;case"gotpointercapture":return i=l.pointerId,bl.set(i,Sl(bl.get(i)||null,e,t,n,a,l)),!0}return!1}function rd(e){var t=Qn(e.target);if(t!==null){var n=k(t);if(n!==null){if(t=n.tag,t===13){if(t=V(n),t!==null){e.blockedOn=t,Ec(e.priority,function(){ud(n)});return}}else if(t===31){if(t=L(n),t!==null){e.blockedOn=t,Ec(e.priority,function(){ud(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=nc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);no=a,n.target.dispatchEvent(a),no=null}else return t=Zn(n),t!==null&&od(t),e.blockedOn=n,!1;t.shift()}return!0}function fd(e,t,n){Hi(e)&&n.delete(t)}function Qm(){lc=!1,gn!==null&&Hi(gn)&&(gn=null),vn!==null&&Hi(vn)&&(vn=null),bn!==null&&Hi(bn)&&(bn=null),vl.forEach(fd),bl.forEach(fd)}function ji(e,t){e.blockedOn===t&&(e.blockedOn=null,lc||(lc=!0,x.unstable_scheduleCallback(x.unstable_NormalPriority,Qm)))}var ki=null;function dd(e){ki!==e&&(ki=e,x.unstable_scheduleCallback(x.unstable_NormalPriority,function(){ki===e&&(ki=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(ac(a||n)===null)continue;break}var i=Zn(n);i!==null&&(e.splice(t,3),t-=3,nu(i,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function Da(e){function t(c){return ji(c,e)}gn!==null&&ji(gn,e),vn!==null&&ji(vn,e),bn!==null&&ji(bn,e),vl.forEach(t),bl.forEach(t);for(var n=0;n<Sn.length;n++){var a=Sn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Sn.length&&(n=Sn[0],n.blockedOn===null);)rd(n),n.blockedOn===null&&Sn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],i=n[a+1],o=l[Ke]||null;if(typeof i=="function")o||dd(n);else if(o){var u=null;if(i&&i.hasAttribute("formAction")){if(l=i,o=i[Ke]||null)u=o.formAction;else if(ac(l)!==null)continue}else u=o.action;typeof u=="function"?n[a+1]=u:(n.splice(a,3),a-=3),dd(n)}}}function hd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return l=o})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function ic(e){this._internalRoot=e}Gi.prototype.render=ic.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));var n=t.current,a=st();ld(n,a,e,t,null,null)},Gi.prototype.unmount=ic.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ld(e.current,2,null,e,null,null),bi(),t[Xn]=null}};function Gi(e){this._internalRoot=e}Gi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Sn.length&&t!==0&&t<Sn[n].priority;n++);Sn.splice(n,0,e),n===0&&rd(e)}};var md=J.version;if(md!=="19.2.4")throw Error(h(527,md,"19.2.4"));w.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=T(t),e=e!==null?W(e):null,e=e===null?null:e.stateNode,e};var Zm={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:b,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Li=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Li.isDisabled&&Li.supportsFiber)try{za=Li.inject(Zm),tt=Li}catch{}}return Tl.createRoot=function(e,t){if(!B(e))throw Error(h(299));var n=!1,a="",l=Sr,i=Cr,o=Tr;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=nd(e,1,!1,null,null,n,a,null,l,i,o,hd),e[Xn]=t.current,Lu(e),new ic(t)},Tl.hydrateRoot=function(e,t,n){if(!B(e))throw Error(h(299));var a=!1,l="",i=Sr,o=Cr,u=Tr,c=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(u=n.onRecoverableError),n.formState!==void 0&&(c=n.formState)),t=nd(e,1,!0,t,n??null,a,l,c,i,o,u,hd),t.context=ad(null),n=t.current,a=st(),a=Ji(a),l=ln(a),l.callback=null,on(n,l,a),n=a,t.current.lanes=n,Ma(t,n),Nt(t),e[Xn]=t.current,Lu(e),new Gi(t)},Tl.version="19.2.4",Tl}var xd;function np(){if(xd)return cc.exports;xd=1;function x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x)}catch(J){console.error(J)}}return x(),cc.exports=tp(),cc.exports}var ap=np();const Tn={title:"Roblox Game Development",description:"Create your own Roblox games with Lua scripting — turn your ideas into playable games millions can enjoy!",chapters:[{id:1,title:"Welcome to Roblox Studio",lessons:[{id:"1-1",title:"What is Roblox Studio?",completed:!1,content:{description:"Discover Roblox Studio — the FREE tool used to create every Roblox game! Learn to navigate, customize, and master your workspace like a professional developer.",sections:[{type:"text",content:`By the end of this lesson, you'll have Roblox Studio installed, understand the complete interface, and be ready to start building your first game world.

**Roblox Studio** is the official game creation engine behind every single Roblox experience. Whether it's Adopt Me, Brookhaven, Tower of Hell, or Blox Fruits — they were all built right here. And now it's your turn.

Think of Roblox Studio as your game-making workshop. It combines a 3D world editor (where you place objects, design landscapes, and build structures) with a powerful code editor (where you write Lua scripts to bring everything to life). Together, these tools give you everything you need to go from a blank canvas to a published game with millions of potential players.

What makes Roblox development special compared to other game engines like Unity or Unreal? Three things: **accessibility** (it's completely free), **audience** (over 70 million daily active players ready to play your game), and **monetization** (top developers earn millions through in-game purchases). You don't need a marketing budget or a publisher — you just need creativity and the skills you'll learn in this course.`},{type:"heading",level:2,content:"Why Learn Roblox Development?"},{type:"list",items:["🎮 **Make real games** — Publish to 70+ million daily players instantly!","💰 **Earn Robux** — Top developers like Adopt Me creators earn millions yearly","💻 **Learn real coding** — Lua is used in professional game development, embedded systems, and more","🌍 **Massive community** — Millions of creators sharing knowledge and resources","🚀 **Portfolio builder** — Show colleges and employers real published games","🎨 **Creative freedom** — Build any genre: obbies, RPGs, simulators, horror, tycoons","📱 **Cross-platform** — Your game works on PC, Mac, mobile, Xbox, and VR automatically"]},{type:"heading",level:2,content:"Installing Roblox Studio"},{type:"text",content:"Setting up Roblox Studio takes about 5 minutes. Here's the complete process:"},{type:"code",language:"text",filename:"installation_guide.txt",code:`Step-by-Step Installation:

1. Open your browser and go to: https://create.roblox.com
2. Sign in with your Roblox account (or create one — it's free!)
3. Click 'Start Creating' or 'Download Studio'
4. Run the installer (RobloxStudioLauncher.exe on Windows,
   RobloxStudio.dmg on Mac)
5. Studio will auto-update on first launch (may take 2-3 min)
6. Sign in again inside Studio if prompted
7. You're ready! Click 'New' to create your first project.

System Requirements:
• Windows 10+ or macOS 10.13+
• 4GB RAM minimum (8GB recommended)
• 1GB storage space
• Internet connection required

Troubleshooting:
• If install fails → Run as Administrator (Windows)
• If slow → Close other heavy apps during install
• Mac security warning → Go to System Preferences → Security`},{type:"heading",level:2,content:"The Studio Interface — Your Command Center"},{type:"text",content:"When you first open Studio, it can look overwhelming. Let's break down every panel so you know exactly what everything does:"},{type:"code",language:"text",filename:"interface_layout.txt",code:`┌──────────────────────────────────────────────────────────────┐
│  FILE  HOME  MODEL  AVATAR  TEST  VIEW  PLUGINS             │
├────────┬────────────────────────────────────┬─────────────────┤
│        │                                    │                 │
│ TOOL   │         VIEWPORT                   │  EXPLORER       │
│ BOX    │     (3D Game World)                 │  (Object Tree)  │
│        │                                    │                 │
│ Free   │  Navigate with:                    │  game            │
│ models │  • Right-click drag = rotate        │  ├── Workspace   │
│ plugins│  • Scroll = zoom                   │  ├── Players     │
│ assets │  • Middle-click drag = pan          │  ├── Lighting    │
│        │                                    │  └── ...         │
│        │                                    │                 │
│        │                                    ├─────────────────┤
│        │                                    │  PROPERTIES     │
│        │                                    │  (Settings for  │
│        │                                    │   selected      │
│        │                                    │   objects)       │
│        ├────────────────────────────────────┤                 │
│        │  OUTPUT / COMMAND BAR              │                 │
│        │  (Print messages, errors, scripts) │                 │
└────────┴────────────────────────────────────┴─────────────────┘`},{type:"list",items:["**Viewport** (center) — Your 3D view of the game world. Right-click + drag to look around, scroll to zoom, middle-click to pan","**Explorer** (right) — Shows every object in your game as a tree structure. Think of it like a file explorer for your game","**Properties** (right, below Explorer) — Detailed settings for whatever object you've selected. Name, position, color, size, behavior — everything lives here","**Toolbox** (left) — A massive library of free models, plugins, images, and sounds from the Roblox community","**Output** (bottom) — Shows print() messages and error messages from your scripts. This is your debugging lifeline!","**Command Bar** (bottom) — Type Lua code here to run it instantly. Great for quick tests"]},{type:"tip",content:"Can't find a panel? Go to the VIEW tab at the top and click the panel name to toggle it on. The most important panels to have open: Explorer, Properties, and Output."},{type:"heading",level:2,content:"Navigating the 3D Viewport"},{type:"text",content:"Smooth viewport navigation is essential. Here are the controls you'll use hundreds of times per session:"},{type:"code",language:"text",filename:"viewport_controls.txt",code:`Camera Controls:
• Right-Click + Drag    → Rotate/look around
• Scroll Wheel          → Zoom in/out
• Middle-Click + Drag   → Pan (move sideways/up/down)
• W/A/S/D + Right-Click → Fly through the world (FPS style)
• Shift + movement      → Move camera slower (precision)
• F                     → Focus on selected object

Pro Camera Tips:
• Press F to snap the camera to whatever you've selected
• Use View → Camera Speed to adjust fly speed
• Ctrl+Shift+F → Toggle fullscreen viewport
• Double-click an object in Explorer to zoom to it`},{type:"heading",level:2,content:"Templates — Choosing Your Starting Point"},{type:"text",content:"When you click 'New', Studio offers several templates. Each gives you a different starting world:"},{type:"code",language:"text",filename:"templates_guide.txt",code:`Available Templates:

• Baseplate       → Empty flat world (BEST FOR LEARNING!)
                    Just a gray platform — you build everything

• Flat Terrain    → Like baseplate but with grass terrain

• Village         → Pre-built houses and paths
                    Good for exploring what's possible

• Castle          → Medieval castle environment

• Obby            → Obstacle course starter with platforms

• Racing          → Vehicle racing setup with track

• Line Runner     → Infinite runner template

• Capture the Flag → Team-based game starter

★ FOR THIS COURSE: Start with BASEPLATE!
  It's clean, simple, and lets you learn
  without distractions.`},{type:"warning",content:"Don't start with a complex template! It's tempting to use the Village or Castle template, but you'll learn much faster building from a blank Baseplate. Understanding how things work from scratch is what separates good developers from great ones."},{type:"heading",level:2,content:"Understanding the Explorer Panel"},{type:"text",content:"The Explorer is the most important panel in Studio. It shows your game's hierarchy — every object, script, and asset organized in a tree:"},{type:"code",language:"text",filename:"explorer_hierarchy.txt",code:`game (DataModel)
├── Workspace              ← 3D objects live here (parts, models)
│   ├── Camera
│   ├── Terrain
│   └── SpawnLocation      ← Where players appear
├── Players                ← Connected players (empty in Studio)
├── Lighting               ← Sky, ambient light, time of day
├── ReplicatedFirst        ← Loads before anything else
├── ReplicatedStorage      ← Shared assets (models, RemoteEvents)
├── ServerScriptService    ← Server-only scripts (secure!)
├── ServerStorage          ← Server-only assets
├── StarterGui             ← UI screens given to each player
├── StarterPack            ← Tools given to each player
├── StarterPlayer          ← Player settings & scripts
├── SoundService           ← Global sound settings
└── Chat                   ← Chat system settings`},{type:"tip",content:"Press F5 to playtest your game instantly! Press Shift+F5 to stop the test. Press F8 to test with a simulated server and two clients — essential for testing multiplayer features. You'll use these shortcuts hundreds of times!"},{type:"heading",level:2,content:"Practice Exercises"},{type:"text",content:"Complete these exercises before moving on:"},{type:"list",items:["**Exercise 1:** Install Roblox Studio and create a new Baseplate project. Find the Explorer and Properties panels.","**Exercise 2:** Practice viewport navigation — zoom in/out, rotate, pan, and fly with WASD + right-click.","**Exercise 3:** In the Explorer, find the 'Workspace' folder and the 'SpawnLocation' inside it. Click on SpawnLocation and look at its properties.",'**Exercise 4:** Open the Output panel (View → Output). Type `print("Hello!")` in the Command Bar and press Enter. See it appear in Output!',"**Exercise 5:** Press F5 to playtest. Walk around with WASD and jump with Space. Press Shift+F5 to stop."]},{type:"checkpoint",content:"Install Roblox Studio, create a new Baseplate project, and find the Explorer, Properties, and Output windows. Can you locate the 'Workspace' folder and the SpawnLocation inside it? Try printing a message to the Output using the Command Bar!"}]}},{id:"1-2",title:"Building Your First World",completed:!1,content:{description:"Learn to build in Roblox! Create parts, change properties, and construct your first structures like a professional level designer.",sections:[{type:"text",content:`By the end of this lesson, you'll know how to create, transform, and customize parts to build any structure you can imagine.

Everything visible in a Roblox game is made of **Parts** — the fundamental building blocks of every 3D world. Parts come in five shapes: Block, Sphere, Cylinder, Wedge, and Corner Wedge. By combining, scaling, rotating, and coloring these shapes, you can build anything from a simple house to a massive castle.

Professional Roblox developers think of parts like LEGO bricks. Each individual piece is simple, but when combined thoughtfully, they create something incredible. Let's learn the tools that make this possible.`},{type:"heading",level:2,content:"Creating Parts"},{type:"code",language:"text",filename:"creating_parts.txt",code:`Method 1: Menu (Recommended for Beginners)
──────────────────────────────────────────
1. Click the 'Model' tab at the top
2. Click the 'Part' dropdown button
3. Choose your shape:
   • Block        → Rectangular box (most common!)
   • Sphere       → Ball shape
   • Cylinder     → Tube/pipe shape
   • Wedge        → Triangular ramp
   • Corner Wedge → Corner ramp piece

Method 2: Keyboard Shortcut (Faster)
──────────────────────────────────────────
• Just start using the Model tab and toolbar
• Parts appear at the camera's focus point

Method 3: Explorer (Most Control)
──────────────────────────────────────────
1. Right-click 'Workspace' in Explorer
2. Insert Object → Part
3. The part appears at 0, 0, 0`},{type:"heading",level:2,content:"The Transform Tools"},{type:"text",content:"Transform tools are how you move, resize, and rotate parts. Master these and you can build anything:"},{type:"code",language:"text",filename:"transform_tools.txt",code:`Tool        Shortcut    What It Does
────────    ────────    ──────────────────────────────
Select      V           Click objects to select them
Move        Ctrl+1      Drag colored arrows to move
                        Red=X, Green=Y, Blue=Z
Scale       Ctrl+2      Drag handles to resize
                        Drag corners to scale uniformly
Rotate      Ctrl+3      Drag colored circles to rotate
                        15° increments by default

Useful Modifiers:
• Hold Shift while moving → Snap to grid
• Change grid size: Model tab → Snap to Grid → change value
• Ctrl+D → Duplicate selected object
• Delete/Backspace → Delete selected object
• Ctrl+Z → Undo (your best friend!)`},{type:"heading",level:2,content:"Essential Properties"},{type:"text",content:"Every part has dozens of properties. Here are the ones you'll use most:"},{type:"code",language:"text",filename:"part_properties.txt",code:`APPEARANCE Properties:
• Name             → Give it a descriptive name! ('Floor', 'Wall1')
• Color / BrickColor → Click to pick from the color palette
• Material         → Surface look: Plastic, Wood, Metal, Brick,
                     Marble, Granite, Grass, Sand, Neon, Glass, etc.
• Transparency     → 0 = fully solid, 1 = completely invisible
                     0.5 = semi-transparent (great for glass!)
• Reflectance      → 0 = matte, 1 = mirror-like reflection

TRANSFORM Properties:
• Position         → X, Y, Z coordinates in the world
• Size             → Width (X), Height (Y), Depth (Z) in studs
• Orientation      → Rotation on each axis in degrees

BEHAVIOR Properties:
• Anchored         → ✅ = stays in place, ❌ = affected by gravity!
• CanCollide       → ✅ = solid (blocks movement), ❌ = walk through
• CastShadow       → Whether the part creates shadows
• Locked           → Prevent accidental selection in viewport`},{type:"warning",content:"Always ANCHOR parts that should stay in place! This is the #1 beginner mistake. If you forget, your carefully placed parts will fall, bounce, and scatter when you hit Play. Select the part → Properties → check 'Anchored'. Get in the habit of doing this for every static part you place."},{type:"heading",level:2,content:"Materials Comparison"},{type:"text",content:"Choosing the right material dramatically changes how your game looks and feels:"},{type:"code",language:"text",filename:"materials_guide.txt",code:`Material        Best Used For             Visual Effect
──────────      ─────────────────         ──────────────
Plastic         Default, clean surfaces   Smooth, slight sheen
Smooth Plastic  Modern, polished look     Very smooth, glossy
Wood            Floors, furniture         Grain texture
Wood Planks     Docks, rustic builds      Plank lines visible
Brick           Walls, buildings          Brick pattern
Cobblestone     Paths, old walls          Rough stone texture
Granite         Cliffs, monuments         Speckled stone
Marble          Fancy floors, statues     Smooth veined stone
Metal           Industrial, machines      Metallic sheen
DiamondPlate    Sci-fi, industrial        Diamond grip pattern
Grass           Ground, nature            Green grass texture
Sand            Beach, desert             Sandy texture
Neon            Lights, glowing effects   Self-illuminating!
Glass           Windows, transparent      See-through + reflective
ForceField      Shields, barriers         Animated energy look
Ice             Winter, frozen areas      Translucent blue`},{type:"heading",level:2,content:"Build Project: A Simple House"},{type:"text",content:"Let's put everything together and build a complete house. Follow each step carefully:"},{type:"code",language:"text",filename:"house_project.txt",code:`STEP 1: THE FLOOR
• Create a Block part
• Size: 20, 1, 20 (wide, thin, deep)
• Position: 0, 0.5, 0 (sitting on the ground)
• Material: Wood Planks
• Color: Brown
• Anchor: ✅ YES
• Name: 'Floor'

STEP 2: FOUR WALLS
• Create a Block part
• Size: 1, 12, 20 (thin, tall, same depth as floor)
• Position: -9.5, 6.5, 0 (left wall)
• Material: Brick
• Color: Light tan / cream
• Anchor: ✅ YES
• Name: 'WallLeft'
• Duplicate (Ctrl+D) and move to right side for 'WallRight'
• Create two more for front and back walls
• Size: 20, 12, 1 for front/back walls

STEP 3: THE ROOF
• Create a Wedge part (for a slanted roof)
• Size: 20, 6, 10 (wide, angled, half-depth)
• Position above the walls
• Material: Slate
• Color: Dark gray
• Anchor: ✅ YES
• Duplicate and rotate for the other side

STEP 4: A DOORWAY
• For the door opening, use Negate:
  - Create a Block where the door should be
  - Size: 4, 8, 1 (door-sized)
  - Select both the wall and the door block
  - Model → Negate → Union
  This cuts a hole in the wall!

STEP 5: DETAILS
• Add a window (Glass material, semi-transparent)
• Add a chimney (Brick material cylinder)
• Add a porch (WoodPlanks platform out front)`},{type:"tip",content:"Hold Shift while moving parts for grid snapping — this helps align walls perfectly. Change the grid size in the Model tab under 'Snap to Grid'. Use 1 stud for precision building, 4 studs for rough placement."},{type:"heading",level:2,content:"Organizing Your Build"},{type:"text",content:"Professional developers organize their parts into folders and models:"},{type:"code",language:"text",filename:"organization.txt",code:`Good Organization (use this!):
Workspace
├── House
│   ├── Floor
│   ├── Walls
│   │   ├── WallLeft
│   │   ├── WallRight
│   │   ├── WallFront
│   │   └── WallBack
│   ├── Roof
│   └── Details
│       ├── Window1
│       └── Chimney
├── Landscape
│   ├── Tree1
│   └── Tree2
└── SpawnLocation

How to create folders:
1. Right-click Workspace → Insert Object → Folder
2. Name it something descriptive
3. Drag parts into the folder in Explorer

How to group into a Model:
1. Select multiple parts (Ctrl+Click)
2. Right-click → Group as Model (Ctrl+G)
3. Name the Model in Properties`},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Create one of each part shape (Block, Sphere, Cylinder, Wedge, Corner Wedge) and change each to a different material and color.","**Exercise 2:** Build the house described above. Take your time aligning walls properly with grid snapping.","**Exercise 3:** Create a glass window by making a thin block with Glass material and Transparency 0.3.","**Exercise 4:** Organize all your house parts into a Model called 'House' using Ctrl+G.","**Exercise 5:** Build a second structure — a tower or a bridge — using at least 10 parts."]},{type:"quiz",question:"What happens if you forget to anchor a part?",options:[{id:"a",text:"Nothing, it stays in place"},{id:"b",text:"It falls due to gravity when the game runs"},{id:"c",text:"It disappears"},{id:"d",text:"The game crashes"}],correct:"b",explanation:"Unanchored parts are affected by Roblox's physics engine! They'll fall, roll, bounce, or get pushed around. Always anchor static parts like floors, walls, and decorations. Only leave parts unanchored if you WANT them to move (like a ball or a falling object)."}]}},{id:"1-3",title:"Your First Lua Script",completed:!1,content:{description:"Write your first lines of code! Make parts change color, print messages, and respond to your commands using the Lua programming language.",sections:[{type:"text",content:`By the end of this lesson, you'll understand what scripts are, how to create them, and you'll write working code that controls parts in your game world.

Building in Roblox Studio is powerful, but **scripts** are what bring your game to life. Scripts are written in **Lua** — a lightweight, fast programming language used by professional game developers around the world. Lua powers not just Roblox, but also World of Warcraft add-ons, Adobe Photoshop Lightroom, and many embedded systems.

Don't worry if you've never coded before. Programming is just giving instructions to a computer — one step at a time. If you can write a recipe or give directions to a friend, you can learn to code.`},{type:"heading",level:2,content:"What Are Scripts?"},{type:"text",content:"A **script** is a text file containing instructions that the computer follows. In Roblox, there are three types of scripts:"},{type:"code",language:"text",filename:"script_types.txt",code:`Script Types in Roblox:

1. Script (Server Script)
   • Runs on the server (Roblox's computers)
   • Handles game logic, data saving, security
   • Other players can't see or hack this code
   • Icon: Blue page

2. LocalScript
   • Runs on the player's device (client)
   • Handles GUI, camera, input, local effects
   • Each player runs their own copy
   • Icon: Blue page with a person

3. ModuleScript
   • Shared code library
   • Can be required by both Scripts and LocalScripts
   • Great for organizing reusable functions
   • Icon: Brown page

FOR NOW: We'll use regular Scripts (server-side).
We'll learn LocalScripts when we build GUIs!`},{type:"heading",level:2,content:"Creating Your First Script"},{type:"code",language:"text",filename:"add_script_steps.txt",code:`How to add a Script to a Part:

1. In Explorer, click on a Part (select it)
2. Click the ✚ button next to the Part's name
3. Type 'Script' in the search box
4. Click 'Script' to add it
5. The Script appears INSIDE the Part in Explorer:
   Workspace
   └── Part
       └── Script    ← your new script!
6. Double-click the Script to open the code editor

Alternative method:
• Right-click the Part → Insert Object → Script`},{type:"heading",level:2,content:"Hello, Roblox World!"},{type:"text",content:"Every programmer starts here. Let's write the classic 'Hello World' program:"},{type:"code",language:"lua",filename:"hello_world.lua",code:`-- This is a comment! Comments start with two dashes --
-- The computer ignores comments — they're notes for YOU

-- print() sends a message to the Output window
print("Hello, Roblox World!")
print("I just wrote my first script!")
print("This is going to be awesome!")

-- Comments are great for explaining your code
-- Use them to describe WHAT your code does and WHY

-- TIP: Open View → Output to see your messages!
-- Then press F5 to run the game and watch the Output`},{type:"tip",content:"Always have the Output window open (View → Output). It shows your print() messages AND error messages. When something breaks, the Output tells you exactly what went wrong and which line caused it. It's your #1 debugging tool!"},{type:"heading",level:2,content:"Controlling Parts with Code"},{type:"text",content:"Now let's do something visual! Scripts can change any property of the part they're inside:"},{type:"code",language:"lua",filename:"control_part.lua",code:`-- script.Parent refers to the object that CONTAINS this script
-- Since we put this script inside a Part, script.Parent IS the Part
local part = script.Parent

-- Wait 2 seconds (so you can see the change happen)
wait(2)

-- Change the color!
part.BrickColor = BrickColor.new("Bright red")
print("The part turned red!")

-- Wait 2 more seconds
wait(2)

-- Change the material to Neon (glowing!)
part.Material = Enum.Material.Neon
print("The part is now glowing!")

-- Wait 2 more seconds
wait(2)

-- Make it bigger!
part.Size = Vector3.new(10, 10, 10)
print("The part grew!")

-- Wait 2 more seconds
wait(2)

-- Make it semi-transparent
part.Transparency = 0.5
print("The part is now see-through!")`},{type:"heading",level:2,content:"Understanding the Code"},{type:"code",language:"lua",filename:"code_breakdown.lua",code:`-- Let's break down each concept:

-- 1. COMMENTS (lines starting with --)
-- These are notes for you. The computer skips them.
-- Use them to explain what your code does!

-- 2. VARIABLES (storing data with 'local')
local part = script.Parent
-- 'local' creates a new variable
-- 'part' is the name we chose (could be anything)
-- 'script.Parent' is the object containing this script
-- So 'part' now refers to our Part!

-- 3. WAIT (pausing the script)
wait(2)   -- Pause for 2 seconds
wait(0.5) -- Pause for half a second

-- 4. CHANGING PROPERTIES (using the dot operator)
part.BrickColor = BrickColor.new("Really red")
-- 'part' = which object
-- '.BrickColor' = which property
-- '=' = set it to
-- 'BrickColor.new("Really red")' = the new value

-- 5. PRINT (output messages)
print("Any text in quotes shows in Output")
print(42)  -- Numbers don't need quotes
print(part.Name)  -- Print a property's value`},{type:"heading",level:2,content:"Color Cycle Animation"},{type:"text",content:"Let's create a part that continuously cycles through colors using a loop:"},{type:"code",language:"lua",filename:"color_cycle.lua",code:`local part = script.Parent

-- A list of colors to cycle through
local colors = {
    "Bright red",
    "Bright orange",
    "Bright yellow",
    "Bright green",
    "Bright blue",
    "Bright violet"
}

-- while true do = repeat forever
while true do
    -- Loop through each color in our list
    for i, colorName in ipairs(colors) do
        part.BrickColor = BrickColor.new(colorName)
        wait(0.5)  -- Half-second per color
    end
    -- After all colors, the 'while true' loops back!
end

-- NOTE: Code after 'while true do' never runs
-- because the loop never ends!`},{type:"warning",content:"Always include wait() inside a 'while true do' loop! Without it, the loop runs millions of times per second and FREEZES your game. Even wait() alone (no number) works — it pauses for one frame."},{type:"heading",level:2,content:"Common Color Names"},{type:"code",language:"lua",filename:"color_reference.lua",code:`-- Roblox BrickColor names you can use:

-- Reds
BrickColor.new("Bright red")
BrickColor.new("Really red")
BrickColor.new("Crimson")

-- Blues
BrickColor.new("Bright blue")
BrickColor.new("Really blue")
BrickColor.new("Navy blue")

-- Greens
BrickColor.new("Bright green")
BrickColor.new("Dark green")
BrickColor.new("Lime green")

-- Others
BrickColor.new("White")
BrickColor.new("Black")
BrickColor.new("Bright yellow")
BrickColor.new("Bright orange")
BrickColor.new("Bright violet")
BrickColor.new("Hot pink")

-- For more precise colors, use Color3:
part.Color = Color3.fromRGB(255, 100, 50)  -- Custom RGB!
-- RGB = Red, Green, Blue (each 0-255)`},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Create a part with a script that prints your name to the Output window.","**Exercise 2:** Write a script that changes a part's color to your favorite color after 3 seconds.","**Exercise 3:** Make a part that grows slowly — increase its Size every second using a loop.","**Exercise 4:** Create a 'disco floor' — a part that rapidly changes to random colors using BrickColor.Random().","**Exercise 5:** Write a script that changes a part's Material through 5 different materials, one per second."]},{type:"checkpoint",content:"Create a part with a script that changes its color every second, cycling through at least 4 colors. Can you make it change material too? Bonus: Can you make it spin using CFrame?"}]}}]},{id:2,title:"Lua Programming Fundamentals",lessons:[{id:"2-1",title:"Variables & Data Types",completed:!1,content:{description:"Master the foundation of all programming — storing and manipulating data with variables, understanding data types, and using operators.",sections:[{type:"text",content:`By the end of this lesson, you'll understand how to create variables, know all Lua data types, and perform operations on data like a real programmer.

**Variables** are the backbone of every program. They're containers that hold information your script needs — player names, health points, scores, positions, and much more. Think of them as labeled boxes: you choose the label (the name), and you choose what to put inside (the value).

Every game you've ever played uses thousands of variables behind the scenes. When you pick up a coin in Mario, a variable tracking your coin count increases by 1. When you take damage in Fortnite, a health variable decreases. Understanding variables is understanding how games work at their core.`},{type:"heading",level:2,content:"Creating Variables"},{type:"code",language:"lua",filename:"variables_basics.lua",code:`-- Creating variables with 'local'
-- Format: local name = value

local playerName = "DragonSlayer"    -- Text (string)
local health = 100                   -- Whole number (integer)
local speed = 16.5                   -- Decimal number (float)
local isAlive = true                 -- True/false (boolean)
local weapon = nil                   -- Empty/nothing (nil)

-- Print them to check their values
print(playerName)   -- Output: DragonSlayer
print(health)       -- Output: 100
print(speed)        -- Output: 16.5
print(isAlive)      -- Output: true
print(weapon)       -- Output: nil

-- You can change a variable's value anytime
health = 75        -- Now health is 75 (no 'local' needed to update!)
weapon = "Sword"   -- Now weapon has a value

print(health)      -- Output: 75
print(weapon)      -- Output: Sword`},{type:"heading",level:2,content:"Data Types in Lua"},{type:"text",content:"Lua has several data types. Each stores a different kind of information:"},{type:"code",language:"lua",filename:"data_types.lua",code:`-- STRING: Text wrapped in quotes
local name = "Roblox"           -- Double quotes
local message = 'Hello!'        -- Single quotes work too
local multiline = [[             -- Double brackets for
This text spans                    multi-line strings
multiple lines!]]

-- NUMBER: Integers and decimals
local coins = 50                -- Whole number
local speed = 16.5              -- Decimal
local negative = -10            -- Negative numbers
local big = 1e6                 -- Scientific notation (1,000,000)

-- BOOLEAN: True or false (only two values!)
local isJumping = false
local hasKey = true

-- NIL: Represents nothing/empty
local emptyValue = nil
-- Any variable that hasn't been set is nil by default

-- TABLE: Collections of data (learn these later!)
local inventory = {"Sword", "Shield", "Potion"}
local stats = {health = 100, mana = 50}

-- Check what type something is:
print(type(name))     -- Output: string
print(type(coins))    -- Output: number
print(type(isJumping)) -- Output: boolean
print(type(emptyValue)) -- Output: nil
print(type(inventory)) -- Output: table`},{type:"tip",content:"Always use 'local' when creating variables! Variables without 'local' become global — they're accessible everywhere, which causes bugs and is slower. Think of 'local' as keeping your variables organized in their own room rather than throwing them everywhere."},{type:"heading",level:2,content:"Math Operations"},{type:"code",language:"lua",filename:"math_operations.lua",code:`-- Basic arithmetic
local a = 10
local b = 3

print(a + b)   -- Addition: 13
print(a - b)   -- Subtraction: 7
print(a * b)   -- Multiplication: 30
print(a / b)   -- Division: 3.3333...
print(a % b)   -- Modulo (remainder): 1
print(a ^ b)   -- Power (10³): 1000

-- Updating variables with math
local score = 0
score = score + 10     -- Add 10 → score is now 10
score = score + 5      -- Add 5 more → score is now 15
score = score * 2      -- Double it → score is now 30
print(score)           -- Output: 30

-- Shorthand operators (Luau, Roblox's version of Lua)
score += 10    -- Same as: score = score + 10
score -= 5     -- Same as: score = score - 5
score *= 2     -- Same as: score = score * 2
score /= 4     -- Same as: score = score / 4

-- Useful math functions
print(math.abs(-15))     -- Absolute value: 15
print(math.floor(3.7))   -- Round down: 3
print(math.ceil(3.2))    -- Round up: 4
print(math.random(1,10)) -- Random number 1-10
print(math.max(5, 10, 3)) -- Biggest: 10
print(math.min(5, 10, 3)) -- Smallest: 3
print(math.sqrt(16))     -- Square root: 4
print(math.pi)           -- Pi: 3.14159...`},{type:"heading",level:2,content:"Working with Strings"},{type:"code",language:"lua",filename:"string_operations.lua",code:`-- Joining strings (concatenation) with ..
local firstName = "Dragon"
local lastName = "Slayer"
local fullName = firstName .. lastName
print(fullName)  -- Output: DragonSlayer

-- Add spaces yourself!
local niceName = firstName .. " " .. lastName
print(niceName)  -- Output: Dragon Slayer

-- Mix strings and numbers
local score = 100
local message = "Your score is: " .. score
print(message)   -- Output: Your score is: 100

-- String functions
local text = "Hello Roblox!"
print(string.len(text))        -- Length: 13
print(string.upper(text))      -- HELLO ROBLOX!
print(string.lower(text))      -- hello roblox!
print(string.sub(text, 1, 5))  -- First 5 chars: Hello
print(string.reverse(text))    -- !xolboR olleH

-- String formatting (like f-strings)
local name = "Steve"
local hp = 85
local formatted = string.format("%s has %d HP", name, hp)
print(formatted)  -- Output: Steve has 85 HP
-- %s = string placeholder, %d = integer, %f = float`},{type:"heading",level:2,content:"Naming Conventions"},{type:"code",language:"text",filename:"naming_rules.txt",code:`Variable Naming Rules:
✅ Must start with a letter or underscore
✅ Can contain letters, numbers, underscores
❌ Cannot contain spaces or special characters
❌ Cannot be a Lua keyword (if, then, end, etc.)

Naming Conventions (Best Practices):
✅ camelCase for variables:   local playerHealth = 100
✅ camelCase for functions:   local function calculateDamage()
✅ PascalCase for services:   local Players = game:GetService("Players")
✅ UPPER_CASE for constants:  local MAX_HEALTH = 100

Examples of GOOD names:
  local playerName = "Steve"         -- descriptive!
  local maxHealth = 100              -- clear meaning
  local isGameOver = false           -- boolean reads like a question
  local coinCount = 0                -- specific and clear

Examples of BAD names:
  local x = "Steve"                 -- what is x??
  local temp = 100                   -- temp what??
  local flag = false                 -- what flag??
  local n = 0                        -- meaningless`},{type:"warning",content:"Variable names are case-sensitive! 'playerName', 'PlayerName', and 'PLAYERNAME' are three completely different variables. Be consistent with your naming to avoid confusing bugs."},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Create variables for a game character: name (string), health (number), mana (number), isAlive (boolean). Print them all.","**Exercise 2:** Write a damage calculator: create baseDamage and multiplier variables, calculate totalDamage, and print the result.","**Exercise 3:** Create a formatted message: 'Player [name] has [health] HP and [coins] coins' using concatenation (..) operator.","**Exercise 4:** Use math.random() to generate a random number between 1 and 100. Print whether it's above or below 50.","**Exercise 5:** Create a script that modifies a part's Size, Position, and Color using variables and math operations."]},{type:"quiz",question:"What does this print: local x = 5; x = x + 3; x *= 2; print(x)",options:[{id:"a",text:"5"},{id:"b",text:"8"},{id:"c",text:"16"},{id:"d",text:"Error"}],correct:"c",explanation:"x starts at 5, then x + 3 = 8, then x * 2 = 16. The *= operator multiplies and assigns!"}]}},{id:"2-2",title:"If Statements & Logic",completed:!1,content:{description:"Teach your game to make decisions! Master if/elseif/else statements, comparison operators, and logical operators to create smart game logic.",sections:[{type:"text",content:`By the end of this lesson, you'll write code that makes decisions based on game state — checking health, comparing scores, and combining multiple conditions.

**If statements** are how your code makes decisions. Without them, your code would do the same thing every single time — boring! With if statements, your game can react differently depending on what's happening. Is the player low on health? Show a warning. Did they collect enough coins? Open the door. Is the enemy close? Start attacking.

Every game mechanic you've ever experienced relies on if statements. The 'Game Over' screen? An if statement checking if health <= 0. Power-ups? If statements checking what the player touched. Unlocking levels? If statements checking your score.`},{type:"heading",level:2,content:"Basic If Statement"},{type:"code",language:"lua",filename:"if_basic.lua",code:`-- The simplest if statement
local health = 25

if health < 50 then
    print("⚠️ Low health warning!")
end

-- Anatomy of an if statement:
-- 'if'       → starts the condition check
-- 'health < 50' → the condition (is this true?)
-- 'then'     → if the condition IS true, run the code below
-- [code]     → runs only when condition is true
-- 'end'      → marks the end of the if block

-- If health were 75, NOTHING would print
-- because 75 < 50 is false!`},{type:"heading",level:2,content:"If-Else: Two Paths"},{type:"code",language:"lua",filename:"if_else.lua",code:`local coins = 30
local itemCost = 50

if coins >= itemCost then
    print("✅ Purchase successful!")
    coins = coins - itemCost
else
    print("❌ Not enough coins!")
    print("You need " .. (itemCost - coins) .. " more coins.")
end

-- 'else' catches everything that DOESN'T match the 'if'
-- One of these two blocks ALWAYS runs — never both, never neither`},{type:"heading",level:2,content:"If-Elseif-Else: Multiple Paths"},{type:"code",language:"lua",filename:"if_elseif.lua",code:`local score = 82

if score >= 90 then
    print("🏆 Grade: A — Excellent!")
elseif score >= 80 then
    print("⭐ Grade: B — Great job!")
elseif score >= 70 then
    print("👍 Grade: C — Not bad!")
elseif score >= 60 then
    print("📝 Grade: D — Needs improvement")
else
    print("❌ Grade: F — Try again")
end

-- Lua checks conditions from TOP to BOTTOM
-- It runs the FIRST true block, then skips the rest
-- Since 82 >= 90 is false, it moves to 82 >= 80 (true!)
-- Prints Grade B, then skips everything below`},{type:"heading",level:2,content:"Comparison Operators"},{type:"code",language:"lua",filename:"comparison_operators.lua",code:`-- All comparison operators:
local a = 10
local b = 5

print(a == b)   -- Equal to: false (10 equals 5? no!)
print(a ~= b)   -- Not equal to: true (10 not equal to 5? yes!)
print(a > b)    -- Greater than: true
print(a < b)    -- Less than: false
print(a >= b)   -- Greater than or equal: true
print(a <= b)   -- Less than or equal: false

-- Game examples:
local health = 100
local maxHealth = 100
local coins = 45

if health == maxHealth then
    print("Full health!")
end

if health ~= 0 then
    print("Still alive!")
end

if coins >= 50 then
    print("Can buy item!")
end`},{type:"warning",content:"In Lua, 'not equal' is ~= (tilde-equals), NOT != like in most other languages! This is one of the most common mistakes. Also remember: == is comparison (checking equality), while = is assignment (setting a value). Using = in an if statement is a bug!"},{type:"heading",level:2,content:"Logical Operators: and, or, not"},{type:"code",language:"lua",filename:"logical_operators.lua",code:`local health = 80
local hasShield = true
local isBanned = false
local level = 15

-- AND: BOTH conditions must be true
if health > 50 and hasShield then
    print("Ready for battle!")
end
-- true AND true = true ✅

-- OR: at least ONE condition must be true
if health < 20 or not hasShield then
    print("Danger! Find cover!")
end
-- false OR false = false (so this doesn't print)

-- NOT: flips true to false, false to true
if not isBanned then
    print("Welcome to the game!")
end
-- not false = true ✅

-- Combining multiple operators
if level >= 10 and (hasShield or health > 75) then
    print("You can enter the dungeon!")
end
-- true AND (true OR true) = true ✅

-- Truth table for reference:
-- true  AND true  = true
-- true  AND false = false
-- false AND true  = false
-- false AND false = false

-- true  OR true  = true
-- true  OR false = true
-- false OR true  = true
-- false OR false = false`},{type:"heading",level:2,content:"Practical Example: Game Power-Up System"},{type:"code",language:"lua",filename:"powerup_system.lua",code:`local part = script.Parent

-- Game state variables
local playerHealth = 100
local playerSpeed = 16  -- Default walk speed
local hasPowerUp = false
local powerUpType = "speed"  -- Could be "speed", "health", "shield"

-- Simulate picking up a power-up
wait(3)
hasPowerUp = true

if hasPowerUp then
    if powerUpType == "speed" then
        playerSpeed = playerSpeed * 2
        part.BrickColor = BrickColor.new("Bright yellow")
        print("⚡ Speed Boost! Speed is now: " .. playerSpeed)
        
    elseif powerUpType == "health" then
        playerHealth = playerHealth + 50
        if playerHealth > 100 then
            playerHealth = 100  -- Cap at max health
        end
        part.BrickColor = BrickColor.new("Bright green")
        print("💚 Health restored! HP: " .. playerHealth)
        
    elseif powerUpType == "shield" then
        part.BrickColor = BrickColor.new("Bright blue")
        part.Material = Enum.Material.ForceField
        print("🛡️ Shield activated!")
        
    else
        print("❓ Unknown power-up type: " .. powerUpType)
    end
else
    print("No power-up active")
end`},{type:"tip",content:"Use parentheses to make complex conditions clearer! `if (a > 5 and b < 10) or c == true then` is much easier to read than `if a > 5 and b < 10 or c == true then`. When in doubt, add parentheses."},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Write a script that checks a player's health and prints 'Healthy' (>75), 'Wounded' (26-75), or 'Critical' (≤25).","**Exercise 2:** Create a shop system: check if a player has enough coins AND a high enough level to buy an item.","**Exercise 3:** Write a grading system using elseif chains for scores 0-100.","**Exercise 4:** Build a part that changes color based on a random number: red (1-3), yellow (4-6), green (7-10).","**Exercise 5:** Create a time-of-day system: print different messages for morning (6-12), afternoon (12-18), evening (18-22), and night (22-6)."]},{type:"checkpoint",content:"Create a script that checks coins and level variables, then prints different messages: 'Poor' (< 10 coins), 'Getting there' (10-50), 'Rich' (> 50). Add a level check: only allow purchases if coins >= price AND level >= 5."}]}},{id:"2-3",title:"Loops — Repeating Actions",completed:!1,content:{description:"Master all three loop types in Lua — while loops, for loops, and repeat-until loops. Learn to automate repetitive tasks, create timers, and build game loops.",sections:[{type:"text",content:`By the end of this lesson, you'll use while loops, numeric for loops, generic for loops, and repeat-until loops to automate any repetitive task in your games.

**Loops** repeat blocks of code automatically. Instead of writing the same code 100 times, you write it once inside a loop. They're essential for countdowns, spawning enemies, animating objects, checking game conditions, and processing lists of items.

Imagine you want to spawn 50 coins around your map. Without loops, you'd need 50 separate sections of code — tedious and error-prone. With a loop, it's 5 lines.`},{type:"heading",level:2,content:"While Loops"},{type:"code",language:"lua",filename:"while_loops.lua",code:`-- while loops run AS LONG AS the condition is true

-- Countdown timer
local countdown = 10

while countdown > 0 do
    print("⏱️ " .. countdown .. " seconds remaining...")
    countdown = countdown - 1
    wait(1)
end
print("🚀 Blast off!")

-- The loop checks the condition BEFORE each run:
-- Is countdown > 0? Yes (10) → run the code, countdown becomes 9
-- Is countdown > 0? Yes (9)  → run the code, countdown becomes 8
-- ... (keeps going)
-- Is countdown > 0? Yes (1)  → run the code, countdown becomes 0
-- Is countdown > 0? No (0)   → STOP! Exit the loop`},{type:"heading",level:2,content:"Infinite Loops (while true do)"},{type:"code",language:"lua",filename:"infinite_loop.lua",code:`-- while true do = run forever (very common in Roblox!)
-- Used for game loops, spawners, timed events

local part = script.Parent

-- Pulsing glow effect (runs forever)
while true do
    -- Fade out
    for i = 0, 10 do
        part.Transparency = i / 10
        wait(0.05)
    end
    -- Fade in
    for i = 10, 0, -1 do
        part.Transparency = i / 10
        wait(0.05)
    end
end

-- ⚠️ CRITICAL: Always include wait() in while true loops!
-- Without wait(), the loop runs infinitely fast and FREEZES the game!`},{type:"warning",content:"ALWAYS include wait() inside 'while true do' loops! Without a wait, the loop runs millions of times per second and locks up the entire game. Even wait() with no argument (which waits one frame) is enough. This is the most common beginner crash."},{type:"heading",level:2,content:"Numeric For Loops"},{type:"code",language:"lua",filename:"for_loops.lua",code:`-- for loops count from a start number to an end number
-- Format: for variable = start, stop, step do

-- Count from 1 to 10
for i = 1, 10 do
    print(i)  -- 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
end

-- Count by 2s (step = 2)
for i = 0, 10, 2 do
    print(i)  -- 0, 2, 4, 6, 8, 10
end

-- Count backwards (step = -1)
for i = 5, 1, -1 do
    print(i)  -- 5, 4, 3, 2, 1
end
print("Go!")

-- The step is optional — defaults to 1
-- If step is positive, loop runs while i <= stop
-- If step is negative, loop runs while i >= stop

-- Practical: Spawn 10 platforms in a row
for i = 1, 10 do
    local platform = Instance.new("Part")
    platform.Size = Vector3.new(6, 1, 6)
    platform.Position = Vector3.new(i * 8, i * 3, 0)
    platform.Anchored = true
    platform.BrickColor = BrickColor.Random()
    platform.Parent = workspace
end
print("10 platforms created!")`},{type:"heading",level:2,content:"Generic For Loops (ipairs and pairs)"},{type:"code",language:"lua",filename:"generic_for.lua",code:`-- Loop through a list with ipairs
local fruits = {"Apple", "Banana", "Cherry", "Date"}

for index, fruit in ipairs(fruits) do
    print(index .. ": " .. fruit)
end
-- Output:
-- 1: Apple
-- 2: Banana
-- 3: Cherry
-- 4: Date

-- Loop through a dictionary with pairs
local playerStats = {
    health = 100,
    speed = 16,
    coins = 50
}

for key, value in pairs(playerStats) do
    print(key .. " = " .. value)
end
-- Output (order may vary!):
-- health = 100
-- speed = 16
-- coins = 50

-- Loop through all children of an object
for _, child in ipairs(workspace:GetChildren()) do
    print(child.Name .. " (" .. child.ClassName .. ")")
end`},{type:"heading",level:2,content:"Break and Continue"},{type:"code",language:"lua",filename:"break_continue.lua",code:`-- break: EXIT the loop immediately
for i = 1, 100 do
    print(i)
    if i == 5 then
        print("Found 5! Stopping early.")
        break  -- Loop ends here, even though it could go to 100
    end
end
-- Output: 1, 2, 3, 4, 5, Found 5!

-- continue: SKIP to the next iteration (Luau/Roblox only)
for i = 1, 10 do
    if i % 2 == 0 then  -- If i is even
        continue  -- Skip even numbers
    end
    print(i)  -- Only prints odd numbers
end
-- Output: 1, 3, 5, 7, 9

-- Practical: Find a specific part
for _, child in ipairs(workspace:GetChildren()) do
    if child.Name == "TreasureChest" then
        print("Found the treasure at: " .. tostring(child.Position))
        break  -- Stop searching once found
    end
end`},{type:"heading",level:2,content:"Practical Example: Moving Platform"},{type:"code",language:"lua",filename:"moving_platform.lua",code:`local part = script.Parent
local startPosition = part.Position
local moveDistance = 20  -- studs to move
local moveSpeed = 0.5    -- seconds per step
local steps = 40         -- number of steps

while true do
    -- Move right
    for i = 1, steps do
        part.Position = startPosition + Vector3.new(
            (i / steps) * moveDistance, 0, 0
        )
        wait(moveSpeed / steps)
    end
    
    -- Move back left
    for i = steps, 1, -1 do
        part.Position = startPosition + Vector3.new(
            (i / steps) * moveDistance, 0, 0
        )
        wait(moveSpeed / steps)
    end
end`},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Create a countdown timer from 10 to 0 that prints each number, then prints 'Game Start!'","**Exercise 2:** Use a for loop to spawn 5 parts in a vertical tower (each 5 studs higher than the last).","**Exercise 3:** Write a while loop that generates random numbers until it gets a number greater than 90. Print how many tries it took.","**Exercise 4:** Create a part that moves back and forth using a while true loop.","**Exercise 5:** Loop through all objects in Workspace and print only the ones that are Parts."]},{type:"quiz",question:"What does 'for i = 1, 3 do print(i) end' print?",options:[{id:"a",text:"1"},{id:"b",text:"1, 2, 3"},{id:"c",text:"3"},{id:"d",text:"Nothing"}],correct:"b",explanation:"The for loop counts from 1 to 3, executing the print statement each time. So it prints 1, then 2, then 3."}]}},{id:"2-4",title:"Functions — Reusable Code Blocks",completed:!1,content:{description:"Create reusable, organized code with functions. Learn parameters, return values, and how functions make complex games manageable.",sections:[{type:"text",content:`By the end of this lesson, you'll create your own functions with parameters and return values, and understand how they organize complex game code.

**Functions** are named blocks of code you can call (run) whenever you need them. Think of them like abilities in a game — you define the ability once, then activate it anytime by pressing the button. Without functions, you'd have to rewrite the same code every time you wanted to use it. With functions, you write it once and call it hundreds of times.

Functions are what separate messy beginner code from clean professional code. Every serious Roblox game uses hundreds of functions to stay organized and maintainable.`},{type:"heading",level:2,content:"Creating and Calling Functions"},{type:"code",language:"lua",filename:"functions_basic.lua",code:`-- Defining a function
local function sayHello()
    print("Hello, Roblox Developer!")
    print("Welcome to the game!")
end

-- Calling (running) the function
sayHello()   -- Prints both messages
sayHello()   -- Prints them again!
sayHello()   -- And again! Reusable!

-- The function only runs when you CALL it
-- Defining it just stores the code — it doesn't run it`},{type:"heading",level:2,content:"Parameters — Passing Data In"},{type:"code",language:"lua",filename:"parameters.lua",code:`-- Parameters let you pass data INTO a function
local function greetPlayer(playerName)
    print("Welcome, " .. playerName .. "!")
end

greetPlayer("Steve")    -- Welcome, Steve!
greetPlayer("Alex")     -- Welcome, Alex!
greetPlayer("Dragon")   -- Welcome, Dragon!

-- Multiple parameters
local function addNumbers(a, b)
    local sum = a + b
    print(a .. " + " .. b .. " = " .. sum)
end

addNumbers(5, 3)    -- 5 + 3 = 8
addNumbers(100, 42) -- 100 + 42 = 142

-- Default values (Luau feature)
local function createEnemy(name, health, speed)
    health = health or 100  -- Default to 100 if nil
    speed = speed or 16     -- Default to 16 if nil
    print(name .. ": HP=" .. health .. " SPD=" .. speed)
end

createEnemy("Goblin")          -- Goblin: HP=100 SPD=16
createEnemy("Orc", 200)        -- Orc: HP=200 SPD=16
createEnemy("Dragon", 500, 24) -- Dragon: HP=500 SPD=24`},{type:"heading",level:2,content:"Return Values — Getting Data Out"},{type:"code",language:"lua",filename:"return_values.lua",code:`-- 'return' sends a value BACK to the caller
local function calculateDamage(baseDamage, multiplier)
    local total = baseDamage * multiplier
    return total  -- Send the result back
end

-- Capture the returned value in a variable
local damage = calculateDamage(25, 2)
print("Damage dealt: " .. damage)  -- Damage dealt: 50

-- Use return values directly in expressions
if calculateDamage(30, 1.5) > 40 then
    print("That's a powerful hit!")
end

-- Return multiple values
local function getPlayerInfo()
    return "Steve", 100, 50  -- name, health, coins
end

local name, hp, coins = getPlayerInfo()
print(name .. " has " .. hp .. " HP and " .. coins .. " coins")`},{type:"heading",level:2,content:"Practical Example: Complete Health System"},{type:"code",language:"lua",filename:"health_system.lua",code:`-- A complete health system using functions

local health = 100
local maxHealth = 100
local isAlive = true

local function takeDamage(amount)
    if not isAlive then
        print("Already defeated!")
        return
    end
    
    health = health - amount
    print("💔 Took " .. amount .. " damage! HP: " .. health .. "/" .. maxHealth)
    
    if health <= 0 then
        health = 0
        isAlive = false
        print("💀 Game Over!")
    elseif health < 25 then
        print("⚠️ CRITICAL HEALTH!")
    end
end

local function heal(amount)
    if not isAlive then
        print("Can't heal — you're defeated!")
        return
    end
    
    local oldHealth = health
    health = math.min(health + amount, maxHealth)  -- Don't exceed max!
    local actualHeal = health - oldHealth
    
    print("💚 Healed " .. actualHeal .. " HP! Health: " .. health .. "/" .. maxHealth)
end

local function getHealthPercent()
    return (health / maxHealth) * 100
end

-- Test the system!
takeDamage(30)   -- HP: 70/100
takeDamage(50)   -- HP: 20/100 (CRITICAL!)
heal(40)         -- HP: 60/100
print("Health: " .. getHealthPercent() .. "%")  -- 60%`},{type:"tip",content:"Keep functions small and focused! A function called 'calculateDamage' should ONLY calculate damage — not also update the UI, play sounds, and send server messages. If your function does too many things, split it into smaller functions. This is called the 'Single Responsibility Principle'."},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Create a function `calculateScore(kills, coins, time)` that returns kills*100 + coins*10 - time*5.","**Exercise 2:** Write a `clamp(value, min, max)` function that ensures a value stays within a range.","**Exercise 3:** Build a function that creates a colored part at a given position (parameters: color, size, position).","**Exercise 4:** Create a complete combat system with takeDamage(), heal(), and isAlive() functions.","**Exercise 5:** Write a function that takes a table of numbers and returns the average."]},{type:"checkpoint",content:"Create a function called 'calculateScore' that takes kills, coins, and timeBonus as parameters and returns the total score. Then call it 3 times with different values and print each result."}]}}]},{id:3,title:"Game Objects & Events",lessons:[{id:"3-1",title:"Finding & Referencing Objects",completed:!1,content:{description:"Learn every method to find and reference objects in your game — parts, players, services, and nested objects deep in the hierarchy.",sections:[{type:"text",content:`By the end of this lesson, you'll confidently navigate Roblox's object hierarchy, use all object-finding methods, and understand when to use each one.

To control anything in your game with code, you first need to **find it**. A script can't change a door's color if it doesn't know where the door is. Roblox provides several methods for finding objects, each suited to different situations. Mastering these methods is essential — you'll use them in every single script you write.`},{type:"heading",level:2,content:"The Game Hierarchy"},{type:"code",language:"text",filename:"full_hierarchy.txt",code:`game (DataModel) — The root of everything
├── Workspace              ← 3D world: parts, models, terrain
│   ├── Camera             ← The player's viewpoint
│   ├── Terrain            ← Voxel terrain system
│   ├── SpawnLocation      ← Where players appear
│   ├── House (Model)      ← Your grouped objects
│   │   ├── Floor (Part)
│   │   ├── Wall (Part)
│   │   └── Door (Part)
│   └── Coins (Folder)     ← Organized collections
│       ├── Coin1
│       └── Coin2
├── Players                ← All connected players
│   └── Steve (Player)     ← Individual player
│       ├── Backpack       ← Player's tools
│       └── leaderstats    ← Score display
├── ReplicatedStorage      ← Shared between client & server
├── ServerScriptService    ← Server-only scripts
├── ServerStorage          ← Server-only assets
├── StarterGui             ← UI given to each player
├── StarterPack            ← Tools given to each player
├── StarterPlayer          ← Player defaults
└── Lighting               ← Visual atmosphere`},{type:"heading",level:2,content:"Methods for Finding Objects"},{type:"code",language:"lua",filename:"finding_objects.lua",code:`-- METHOD 1: script.Parent (most common!)
-- Gets the object that CONTAINS this script
local part = script.Parent
-- If script is inside a Part, part IS that Part

-- METHOD 2: Direct path (dot notation)
-- Navigate the hierarchy like a file path
local door = game.Workspace.House.Door
local coin = game.Workspace.Coins.GoldCoin
-- ⚠️ Errors if object doesn't exist!

-- METHOD 3: FindFirstChild (safe!)
-- Returns nil instead of erroring if not found
local door = workspace:FindFirstChild("Door")
if door then
    print("Found the door!")
    door.BrickColor = BrickColor.new("Bright red")
else
    print("Door not found!")
end

-- METHOD 4: WaitForChild (waits until it exists)
-- Essential for objects that load after the script runs
local player = game.Players:WaitForChild("Steve")
-- Pauses the script until "Steve" appears!

-- METHOD 5: FindFirstChildOfClass (by type)
local firstPart = workspace:FindFirstChildOfClass("Part")
-- Finds the first Part, regardless of name

-- METHOD 6: GetService (for Roblox services)
local Players = game:GetService("Players")
local Lighting = game:GetService("Lighting")
local TweenService = game:GetService("TweenService")`},{type:"tip",content:"Use FindFirstChild when you're not sure an object exists (returns nil safely). Use WaitForChild when you KNOW it will exist but it might not have loaded yet (like player characters). Use direct paths only when you're 100% sure the object is there."},{type:"heading",level:2,content:"Getting Children and Descendants"},{type:"code",language:"lua",filename:"children_descendants.lua",code:`-- GetChildren: direct children only (one level deep)
local children = workspace:GetChildren()
for _, child in ipairs(children) do
    print(child.Name)
end

-- GetDescendants: ALL nested objects (every level)
local everything = workspace:GetDescendants()
for _, obj in ipairs(everything) do
    if obj:IsA("Part") then
        print("Found Part: " .. obj.Name)
    end
end

-- Useful shortcut: workspace = game.Workspace
print(workspace == game.Workspace)  -- true!`},{type:"heading",level:2,content:"Working with Players"},{type:"code",language:"lua",filename:"finding_players.lua",code:`local Players = game:GetService("Players")

-- Get all current players
local allPlayers = Players:GetPlayers()
for _, player in ipairs(allPlayers) do
    print(player.Name .. " is playing!")
end

-- Get a specific player
local steve = Players:FindFirstChild("Steve")

-- Get the local player (client scripts only!)
-- Only works in LocalScripts, NOT in server Scripts
local localPlayer = Players.LocalPlayer

-- Convert a character model to a player
local function getPlayerFromCharacter(character)
    return Players:GetPlayerFromCharacter(character)
end

-- Get a player's character (their 3D model in the world)
local player = Players:FindFirstChild("Steve")
if player then
    local character = player.Character
    if character then
        local humanoid = character:FindFirstChildOfClass("Humanoid")
        print("Health: " .. humanoid.Health)
    end
end`},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Create 3 parts named 'Red', 'Green', 'Blue'. Write a script that finds each by name and sets its color accordingly.","**Exercise 2:** Use GetChildren() to loop through everything in Workspace and print each object's Name and ClassName.","**Exercise 3:** Create a folder with 5 parts. Use GetDescendants() and :IsA('Part') to find and count only the Parts.","**Exercise 4:** Write a function findPartByName(name) that searches the entire Workspace and returns the Part or nil.","**Exercise 5:** Practice with FindFirstChild — try finding an object that doesn't exist and handle the nil case gracefully."]},{type:"quiz",question:"What does FindFirstChild return if the object doesn't exist?",options:[{id:"a",text:"An error"},{id:"b",text:"false"},{id:"c",text:"nil"},{id:"d",text:"0"}],correct:"c",explanation:"FindFirstChild returns nil if the object isn't found. This is why you should always check 'if object then' before using it, to avoid 'attempt to index nil' errors!"}]}},{id:"3-2",title:"Events — Reacting to the Game World",completed:!1,content:{description:"React to everything that happens in your game! Touch events, click events, player events, and the essential debounce pattern.",sections:[{type:"text",content:`By the end of this lesson, you'll connect code to game events, handle touch/click interactions, manage player joins/leaves, and implement the critical debounce pattern.

**Events** are signals that fire when something happens in your game. A player touches a part? The Touched event fires. A player joins? PlayerAdded fires. A button is clicked? MouseButton1Click fires. Your job is to **connect** a function to these events so your code runs in response.

Events are what make games interactive. Without events, your game would just sit there doing nothing until a script tells it otherwise. With events, your game responds to everything the player does.`},{type:"heading",level:2,content:"Connecting to Events"},{type:"code",language:"lua",filename:"events_basics.lua",code:`local part = script.Parent

-- Connect a function to the Touched event
part.Touched:Connect(function(hitPart)
    print("Something touched the part!")
    print("It was: " .. hitPart.Name)
end)

-- Anatomy:
-- part.Touched         → the event we're listening to
-- :Connect()           → connects our function to the event
-- function(hitPart)    → our code to run (hitPart = what touched it)
-- end)                 → end of the function

-- You can also use a named function:
local function onTouched(hitPart)
    print(hitPart.Name .. " touched the part!")
end

part.Touched:Connect(onTouched)  -- Same result!`},{type:"heading",level:2,content:"Common Events Reference"},{type:"code",language:"lua",filename:"common_events.lua",code:`-- PART EVENTS
part.Touched:Connect(function(hit) end)       -- Something touched the part
part.TouchEnded:Connect(function(hit) end)    -- Something stopped touching

-- PLAYER EVENTS (put in ServerScriptService!)
local Players = game:GetService("Players")
Players.PlayerAdded:Connect(function(player) end)     -- Player joined
Players.PlayerRemoving:Connect(function(player) end)  -- Player leaving

-- CHARACTER EVENTS
player.CharacterAdded:Connect(function(char) end)     -- Character spawned
humanoid.Died:Connect(function() end)                 -- Character died

-- CLICK EVENTS (need ClickDetector in the part)
clickDetector.MouseClick:Connect(function(player) end)
clickDetector.MouseHoverEnter:Connect(function(player) end)
clickDetector.MouseHoverLeave:Connect(function(player) end)

-- VALUE EVENTS
intValue.Changed:Connect(function(newValue) end)  -- Value changed

-- GUI EVENTS
textButton.MouseButton1Click:Connect(function() end)  -- Button clicked
textButton.MouseEnter:Connect(function() end)         -- Mouse hover
textButton.MouseLeave:Connect(function() end)         -- Mouse left`},{type:"heading",level:2,content:"Kill Brick — Your First Practical Event"},{type:"code",language:"lua",filename:"kill_brick.lua",code:`local killPart = script.Parent

killPart.Touched:Connect(function(hit)
    -- 'hit' is the part that touched us
    -- If a player touched it, hit is a body part (like 'LeftFoot')
    -- The character model is hit.Parent
    
    -- Look for a Humanoid in the character model
    local humanoid = hit.Parent:FindFirstChild("Humanoid")
    
    if humanoid then
        -- Found a humanoid = a player touched it!
        humanoid.Health = 0  -- Set health to 0 = instant kill
        print(hit.Parent.Name .. " was eliminated!")
    end
    
    -- If no Humanoid found, it was just a regular part
    -- touching us, so we do nothing
end)`},{type:"heading",level:2,content:"The Debounce Pattern (CRITICAL!)"},{type:"text",content:"The Touched event fires MANY times per second when a player stands on a part. Without debounce, your code runs hundreds of times when you only want it once:"},{type:"code",language:"lua",filename:"debounce_pattern.lua",code:`local part = script.Parent
local debounce = false  -- Our lock variable

part.Touched:Connect(function(hit)
    -- If already processing, STOP here
    if debounce then return end
    
    -- Check for player
    local humanoid = hit.Parent:FindFirstChild("Humanoid")
    if not humanoid then return end
    
    -- LOCK IT (prevent re-entry)
    debounce = true
    
    -- === Your actual code here ===
    print(hit.Parent.Name .. " touched the part!")
    part.BrickColor = BrickColor.Random()
    -- === End of your code ===
    
    -- Wait (cooldown period)
    wait(1)  -- 1 second cooldown
    
    -- UNLOCK (allow new triggers)
    debounce = false
end)

-- Without debounce: "Steve touched the part!" prints 50+ times
-- With debounce: prints ONCE, waits 1 second, can trigger again`},{type:"warning",content:"Always use debounce with Touched events that should only trigger once! Without it, collecting a coin might add 50 coins, a kill brick might print 'Game Over' 100 times, and a teleporter might send you back and forth endlessly."},{type:"heading",level:2,content:"Click Detector — Click to Interact"},{type:"code",language:"lua",filename:"click_detector.lua",code:`-- First, add a ClickDetector to your part:
-- Select Part → click + → search ClickDetector → add it

local part = script.Parent
local clickDetector = part:FindFirstChildOfClass("ClickDetector")

-- Set the click range (how close you need to be)
clickDetector.MaxActivationDistance = 20  -- studs

local clickCount = 0

clickDetector.MouseClick:Connect(function(player)
    clickCount += 1
    print(player.Name .. " clicked! Total clicks: " .. clickCount)
    
    -- Change to random color on each click
    part.BrickColor = BrickColor.Random()
    
    -- Change size based on clicks
    local newSize = 4 + clickCount
    part.Size = Vector3.new(newSize, newSize, newSize)
end)

-- Hover effects
clickDetector.MouseHoverEnter:Connect(function()
    part.Material = Enum.Material.Neon  -- Glow when hovering
end)

clickDetector.MouseHoverLeave:Connect(function()
    part.Material = Enum.Material.Plastic  -- Back to normal
end)`},{type:"heading",level:2,content:"Player Events — Join, Leave, Spawn, Die"},{type:"code",language:"lua",filename:"player_lifecycle.lua",code:`-- Put this in ServerScriptService!
local Players = game:GetService("Players")

local function onPlayerAdded(player)
    print("✅ " .. player.Name .. " joined!")
    
    -- Wait for their character to spawn
    player.CharacterAdded:Connect(function(character)
        print("🏃 " .. player.Name .. "'s character loaded!")
        
        local humanoid = character:WaitForChild("Humanoid")
        
        -- Customize the player
        humanoid.WalkSpeed = 20      -- Faster than default (16)
        humanoid.JumpPower = 75      -- Higher than default (50)
        humanoid.MaxHealth = 150
        humanoid.Health = 150
        
        -- Handle death
        humanoid.Died:Connect(function()
            print("💀 " .. player.Name .. " died!")
            wait(3)  -- Wait 3 seconds
            player:LoadCharacter()  -- Respawn!
        end)
    end)
end

local function onPlayerRemoving(player)
    print("👋 " .. player.Name .. " left the game.")
    -- Save their data here!
end

Players.PlayerAdded:Connect(onPlayerAdded)
Players.PlayerRemoving:Connect(onPlayerRemoving)`},{type:"tip",content:"The 'hit' parameter in Touched events is the PART that touched, not the player! If a player walks on your part, 'hit' might be 'LeftFoot' or 'RightLeg'. Use hit.Parent to get the character model, then FindFirstChild('Humanoid') to confirm it's a player."},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Create a part that prints the name of anything that touches it (with debounce).","**Exercise 2:** Build a color-changing button using ClickDetector that cycles through 5 colors.","**Exercise 3:** Create a speed boost pad: when a player touches it, their WalkSpeed doubles for 5 seconds.","**Exercise 4:** Write a player greeting system that prints a welcome message when any player joins.","**Exercise 5:** Build a 'pressure plate' that changes color when a player stands on it and reverts when they step off."]},{type:"checkpoint",content:"Create a part with a ClickDetector that changes to a random color when clicked, but only allows clicking once per second using the debounce pattern. Display the total click count using print()."}]}}]},{id:4,title:"Building Game Systems",lessons:[{id:"4-1",title:"Coin Collection & Leaderboards",completed:!1,content:{description:"Build a complete coin collection system with scoring, sound effects, visual feedback, respawning coins, and an automatic leaderboard display.",sections:[{type:"text",content:`By the end of this lesson, you'll have a fully functional coin collection system with leaderstats (automatic Roblox leaderboard), sound effects, and respawning coins.

Coin collection is one of the most fundamental game mechanics. You'll find it in Mario, Sonic, Roblox obbies, and thousands of other games. Building this system teaches you how to combine everything you've learned: parts, events, debounce, finding objects, and functions — all working together as a real game feature.`},{type:"heading",level:2,content:"Step 1: Create the Leaderstats System"},{type:"text",content:"Leaderstats is Roblox's built-in leaderboard. Create a folder named exactly 'leaderstats' inside a player, and it automatically shows on the scoreboard!"},{type:"code",language:"lua",filename:"leaderstats_setup.lua",code:`-- PUT THIS SCRIPT IN ServerScriptService!
-- It runs once for each player who joins

local Players = game:GetService("Players")

Players.PlayerAdded:Connect(function(player)
    -- Create the leaderstats folder
    -- MUST be named exactly "leaderstats" (lowercase!)
    local leaderstats = Instance.new("Folder")
    leaderstats.Name = "leaderstats"
    leaderstats.Parent = player
    
    -- Create a Coins counter
    local coins = Instance.new("IntValue")
    coins.Name = "Coins"
    coins.Value = 0
    coins.Parent = leaderstats
    
    -- Create a Stage counter (for obbies)
    local stage = Instance.new("IntValue")
    stage.Name = "Stage"
    stage.Value = 1
    stage.Parent = leaderstats
    
    print(player.Name .. "'s stats initialized!")
end)

-- The leaderboard automatically appears in the top-right!
-- Players see everyone's Coins and Stage values`},{type:"warning",content:"The folder MUST be named exactly 'leaderstats' (all lowercase, no spaces). This is a Roblox convention — if you spell it differently (like 'LeaderStats' or 'leader_stats'), the scoreboard won't appear!"},{type:"heading",level:2,content:"Step 2: Build the Coin Model"},{type:"code",language:"text",filename:"coin_model.txt",code:`Creating an attractive coin:

1. Create a Cylinder part
2. Size: 2, 0.4, 2 (flat disc shape)
3. Rotate: 90° on the Z axis (stand it up like a coin)
4. Color: Bright yellow
5. Material: Neon (glowing!) or SmoothPlastic
6. Anchored: YES ✅
7. CanCollide: NO ❌ (so players walk through it)
8. Name it: 'Coin'

Optional enhancements:
• Add a PointLight inside (Range 8, Brightness 1)
• Add a Sound inside (find a coin sound on Toolbox)
  Name the sound: 'CollectSound'
• Make multiple coins by duplicating (Ctrl+D)
• Put all coins in a Folder called 'Coins'`},{type:"heading",level:2,content:"Step 3: The Coin Collection Script"},{type:"code",language:"lua",filename:"coin_collect.lua",code:`-- Put this Script INSIDE each Coin part

local coin = script.Parent
local debounce = false

-- Coin spinning animation (optional but looks great!)
local spinSpeed = 2  -- rotations per second
spawn(function()  -- Run in parallel so it doesn't block
    while coin do
        coin.CFrame = coin.CFrame * CFrame.Angles(0, math.rad(spinSpeed * 3), 0)
        wait(0.01)
    end
end)

-- Collection logic
coin.Touched:Connect(function(hit)
    if debounce then return end
    
    -- Verify a player touched it
    local humanoid = hit.Parent:FindFirstChild("Humanoid")
    if not humanoid then return end
    
    -- Get the player from the character
    local player = game.Players:GetPlayerFromCharacter(hit.Parent)
    if not player then return end
    
    -- Get their leaderstats
    local leaderstats = player:FindFirstChild("leaderstats")
    if not leaderstats then return end
    
    debounce = true
    
    -- Add a coin!
    leaderstats.Coins.Value += 1
    print(player.Name .. " collected a coin! Total: " .. leaderstats.Coins.Value)
    
    -- Play collection sound
    local sound = coin:FindFirstChild("CollectSound")
    if sound then
        sound:Play()
    end
    
    -- Hide the coin (visual feedback)
    coin.Transparency = 1
    coin.CanCollide = false
    
    -- Disable the light if present
    local light = coin:FindFirstChildOfClass("PointLight")
    if light then light.Enabled = false end
    
    -- Respawn after 10 seconds
    wait(10)
    
    -- Show the coin again
    coin.Transparency = 0
    if light then light.Enabled = true end
    
    debounce = false
end)`},{type:"tip",content:"For games with LOTS of coins, put all coin logic in a single ServerScript in ServerScriptService instead of individual scripts. Loop through all coins in a folder and connect events programmatically — this is more efficient and easier to maintain."},{type:"heading",level:2,content:"Advanced: Centralized Coin Manager"},{type:"code",language:"lua",filename:"coin_manager.lua",code:`-- A SINGLE script that manages ALL coins
-- Put this in ServerScriptService!
-- Put all coins in a Folder called 'Coins' in Workspace

local Players = game:GetService("Players")
local coinsFolder = workspace:WaitForChild("Coins")
local RESPAWN_TIME = 8

local function setupCoin(coin)
    local debounce = false
    
    coin.Touched:Connect(function(hit)
        if debounce then return end
        
        local humanoid = hit.Parent:FindFirstChild("Humanoid")
        if not humanoid then return end
        
        local player = Players:GetPlayerFromCharacter(hit.Parent)
        if not player then return end
        
        local leaderstats = player:FindFirstChild("leaderstats")
        if not leaderstats then return end
        
        debounce = true
        
        -- Collect!
        leaderstats.Coins.Value += 1
        
        -- Hide
        coin.Transparency = 1
        coin.CanCollide = false
        
        -- Respawn
        wait(RESPAWN_TIME)
        coin.Transparency = 0
        debounce = false
    end)
end

-- Set up all existing coins
for _, coin in ipairs(coinsFolder:GetChildren()) do
    setupCoin(coin)
end

-- Handle new coins added later
coinsFolder.ChildAdded:Connect(setupCoin)

print("Coin manager loaded! " .. #coinsFolder:GetChildren() .. " coins active.")`},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Create the basic leaderstats system with Coins. Test that it appears on the leaderboard.","**Exercise 2:** Place 5 coins around your map with individual collection scripts.","**Exercise 3:** Upgrade to the centralized coin manager that handles all coins from one script.","**Exercise 4:** Add different coin values — gold coins worth 5, silver worth 3, bronze worth 1.","**Exercise 5:** Create a message that prints in the Output when a player reaches 10 coins."]},{type:"checkpoint",content:"Build the complete coin system: leaderstats in ServerScriptService, 5+ coins around your map with collection scripts, sound effects, and respawning. Test that the score increases on the leaderboard!"}]}},{id:"4-2",title:"Checkpoints, Kill Bricks & Traps",completed:!1,content:{description:"Build an obby (obstacle course) with a checkpoint system, deadly traps, moving platforms, and polished gameplay feel.",sections:[{type:"text",content:`By the end of this lesson, you'll have a working obby with checkpoints that save progress, kill bricks, lava zones, moving traps, and spinning blades.

Obbies (obstacle courses) are one of the most popular Roblox game genres — and for good reason. They combine level design, scripting, and game feel into a satisfying experience. The core loop is simple: jump, avoid hazards, reach checkpoints. But making it FEEL good requires understanding all the systems underneath.`},{type:"heading",level:2,content:"Checkpoint System"},{type:"code",language:"lua",filename:"checkpoint_system.lua",code:`-- PUT IN ServerScriptService!
-- Create a Folder called 'Checkpoints' in Workspace
-- Name checkpoints: Checkpoint1, Checkpoint2, etc.

local Players = game:GetService("Players")
local checkpoints = workspace:WaitForChild("Checkpoints")

-- Set up leaderstats with Stage
Players.PlayerAdded:Connect(function(player)
    local leaderstats = Instance.new("Folder")
    leaderstats.Name = "leaderstats"
    leaderstats.Parent = player
    
    local stage = Instance.new("IntValue")
    stage.Name = "Stage"
    stage.Value = 1
    stage.Parent = leaderstats
    
    -- Spawn player at their current checkpoint
    player.CharacterAdded:Connect(function(character)
        wait()  -- Let character fully load
        
        local checkpoint = checkpoints:FindFirstChild(
            "Checkpoint" .. stage.Value
        )
        
        if checkpoint then
            local hrp = character:WaitForChild("HumanoidRootPart")
            hrp.CFrame = checkpoint.CFrame + Vector3.new(0, 5, 0)
        end
    end)
end)

-- Set up checkpoint touch detection
for _, checkpoint in ipairs(checkpoints:GetChildren()) do
    -- Extract the number from the name (e.g., "Checkpoint3" → 3)
    local num = tonumber(checkpoint.Name:match("%d+"))
    if not num then continue end
    
    checkpoint.Touched:Connect(function(hit)
        local humanoid = hit.Parent:FindFirstChild("Humanoid")
        if not humanoid then return end
        
        local player = Players:GetPlayerFromCharacter(hit.Parent)
        if not player then return end
        
        local stage = player.leaderstats.Stage
        
        -- Only update if this is a NEW checkpoint (not going backwards)
        if num > stage.Value then
            stage.Value = num
            print(player.Name .. " reached Stage " .. num .. "!")
            
            -- Visual feedback: change checkpoint color
            checkpoint.BrickColor = BrickColor.new("Lime green")
        end
    end)
end

print("Checkpoint system loaded! " .. #checkpoints:GetChildren() .. " checkpoints.")`},{type:"heading",level:2,content:"Kill Bricks — Various Types"},{type:"code",language:"lua",filename:"kill_bricks.lua",code:`-- === INSTANT KILL BRICK ===
-- Put inside a red part
local killPart = script.Parent

killPart.Touched:Connect(function(hit)
    local humanoid = hit.Parent:FindFirstChild("Humanoid")
    if humanoid then
        humanoid.Health = 0
    end
end)


-- === DAMAGE-OVER-TIME LAVA ===
-- Put inside an orange/red Neon part
local lava = script.Parent
local DAMAGE_PER_SECOND = 30
local touchingHumanoids = {}

lava.Touched:Connect(function(hit)
    local humanoid = hit.Parent:FindFirstChild("Humanoid")
    if humanoid and not touchingHumanoids[humanoid] then
        touchingHumanoids[humanoid] = true
        
        while touchingHumanoids[humanoid] and humanoid.Health > 0 do
            humanoid:TakeDamage(DAMAGE_PER_SECOND)
            wait(1)
        end
    end
end)

lava.TouchEnded:Connect(function(hit)
    local humanoid = hit.Parent:FindFirstChild("Humanoid")
    if humanoid then
        touchingHumanoids[humanoid] = nil
    end
end)`},{type:"heading",level:2,content:"Moving Traps with TweenService"},{type:"code",language:"lua",filename:"moving_trap.lua",code:`-- Smooth moving kill brick using TweenService
local TweenService = game:GetService("TweenService")
local trap = script.Parent
local startPos = trap.Position
local endPos = startPos + Vector3.new(20, 0, 0)  -- Move 20 studs right
local SPEED = 2  -- seconds per trip

-- Kill on touch
trap.Touched:Connect(function(hit)
    local humanoid = hit.Parent:FindFirstChild("Humanoid")
    if humanoid then
        humanoid.Health = 0
    end
end)

-- Smooth back-and-forth movement
local tweenInfo = TweenInfo.new(
    SPEED,                        -- Time
    Enum.EasingStyle.Sine,        -- Smooth movement
    Enum.EasingDirection.InOut,   -- Ease in and out
    -1,                           -- Repeat forever (-1 = infinite)
    true                          -- Reverse (go back and forth)
)

local tween = TweenService:Create(trap, tweenInfo, {
    Position = endPos
})
tween:Play()`},{type:"heading",level:2,content:"Spinning Blade Trap"},{type:"code",language:"lua",filename:"spinning_blade.lua",code:`local blade = script.Parent
local SPIN_SPEED = 3  -- Degrees per frame

-- Kill on touch
blade.Touched:Connect(function(hit)
    local humanoid = hit.Parent:FindFirstChild("Humanoid")
    if humanoid then
        humanoid.Health = 0
    end
end)

-- Spin continuously
while true do
    blade.CFrame = blade.CFrame * CFrame.Angles(0, math.rad(SPIN_SPEED), 0)
    wait()  -- Wait one frame for smooth rotation
end`},{type:"tip",content:"Use TweenService for smooth platform movement! It's better than manually changing Position each frame because it handles interpolation, easing curves, and physics properly. TweenService is what professional Roblox developers use."},{type:"heading",level:2,content:"Disappearing Platforms"},{type:"code",language:"lua",filename:"disappearing_platform.lua",code:`-- Platform that disappears shortly after being touched!
local platform = script.Parent
local VISIBLE_TIME = 1.5    -- Seconds before disappearing
local RESPAWN_TIME = 3      -- Seconds before reappearing
local debounce = false

platform.Touched:Connect(function(hit)
    if debounce then return end
    
    local humanoid = hit.Parent:FindFirstChild("Humanoid")
    if not humanoid then return end
    
    debounce = true
    
    -- Visual warning — turn red!
    platform.BrickColor = BrickColor.new("Bright red")
    
    -- Wait before disappearing
    wait(VISIBLE_TIME)
    
    -- Disappear!
    platform.Transparency = 1
    platform.CanCollide = false
    
    -- Wait to respawn
    wait(RESPAWN_TIME)
    
    -- Reappear!
    platform.Transparency = 0
    platform.CanCollide = true
    platform.BrickColor = BrickColor.new("Medium stone grey")
    
    debounce = false
end)`},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Build a 3-checkpoint obby with the checkpoint system. Test that respawning works at the correct checkpoint.","**Exercise 2:** Create 3 types of hazards: instant kill brick, lava zone, and a moving trap.","**Exercise 3:** Add disappearing platforms to your obby — they vanish 1.5 seconds after being touched.","**Exercise 4:** Create a spinning blade obstacle using CFrame.Angles().","**Exercise 5:** Combine everything: build a complete obby stage with platforms, hazards, and a checkpoint at the end."]},{type:"quiz",question:"Why do we check if stage.Value < checkpointNumber before updating?",options:[{id:"a",text:"To make the game harder"},{id:"b",text:"To prevent going backwards to earlier checkpoints"},{id:"c",text:"To count total checkpoints"},{id:"d",text:"No reason, it's optional"}],correct:"b",explanation:"We only update the stage if the new checkpoint number is HIGHER than the current one. This prevents players from losing progress by accidentally touching earlier checkpoints while exploring!"}]}}]},{id:5,title:"User Interface (GUI)",lessons:[{id:"5-1",title:"Creating Game UI",completed:!1,content:{description:"Build professional user interfaces — health bars, score displays, menus, and HUD elements that make your game feel polished.",sections:[{type:"text",content:`By the end of this lesson, you'll create screen GUIs with frames, labels, and proper positioning using the UDim2 system.

**GUIs** (Graphical User Interfaces) are the 2D elements overlaid on the player's screen — health bars, coin counters, menus, buttons, and notifications. A game without a good UI feels unfinished. GUIs are what transform a prototype into a polished game.

In Roblox, GUIs live in StarterGui and are cloned to each player when they join. They use LocalScripts because they run on each player's individual screen.`},{type:"heading",level:2,content:"GUI Hierarchy"},{type:"code",language:"text",filename:"gui_hierarchy.txt",code:`StarterGui                    ← GUIs start here, cloned to each player
└── ScreenGui                 ← A screen-space container (invisible)
    ├── Frame                 ← A visible rectangle (container)
    │   ├── TextLabel         ← Displays text (non-interactive)
    │   ├── TextButton        ← Clickable text button
    │   ├── ImageLabel        ← Displays an image
    │   └── ImageButton       ← Clickable image button
    ├── TextBox               ← Text input field
    └── Frame (another one)   ← Multiple frames for layout
        ├── UIListLayout       ← Auto-arranges children
        └── TextLabel`},{type:"heading",level:2,content:"The UDim2 Positioning System"},{type:"text",content:"Understanding UDim2 is essential for GUI work. It uses two values per axis: Scale (percentage of parent) and Offset (exact pixels):"},{type:"code",language:"text",filename:"udim2_explained.txt",code:`UDim2.new(ScaleX, OffsetX, ScaleY, OffsetY)

Scale = 0 to 1 (percentage of parent size)
  0   = left/top edge
  0.5 = center
  1   = right/bottom edge

Offset = exact pixels (added to scale position)
  Use for precise pixel-perfect positioning

Common Positions:
──────────────────
Top-Left:     UDim2.new(0, 10, 0, 10)         → 10px from corner
Top-Center:   UDim2.new(0.5, 0, 0, 10)        → centered top
Center:       UDim2.new(0.5, 0, 0.5, 0)       → dead center*
Bottom-Right: UDim2.new(1, -10, 1, -10)        → 10px from corner

* For true center, also set AnchorPoint = (0.5, 0.5)
  AnchorPoint moves the pivot point of the element

Common Sizes:
──────────────────
Full screen:    UDim2.new(1, 0, 1, 0)
Half width:     UDim2.new(0.5, 0, 0, 50)     → 50% wide, 50px tall
Fixed size:     UDim2.new(0, 200, 0, 50)      → exactly 200x50 pixels`},{type:"heading",level:2,content:"Building a Score HUD"},{type:"code",language:"lua",filename:"score_hud.lua",code:`-- LocalScript inside a TextLabel in StarterGui
-- GUI Setup in Studio:
-- StarterGui → ScreenGui → Frame → TextLabel → this LocalScript

local player = game.Players.LocalPlayer
local label = script.Parent

-- Style the label via code (or do it in Properties)
label.Size = UDim2.new(0, 200, 0, 50)
label.Position = UDim2.new(0, 10, 0, 10)  -- top-left, 10px margin
label.BackgroundColor3 = Color3.fromRGB(0, 0, 0)  -- black background
label.BackgroundTransparency = 0.5  -- semi-transparent
label.TextColor3 = Color3.fromRGB(255, 255, 255)  -- white text
label.TextSize = 24
label.Font = Enum.Font.GothamBold

-- Wait for leaderstats to load
local leaderstats = player:WaitForChild("leaderstats")
local coins = leaderstats:WaitForChild("Coins")

-- Update the display
local function updateDisplay()
    label.Text = "💰 Coins: " .. coins.Value
end

-- Update when coins change
coins.Changed:Connect(updateDisplay)

-- Initial update
updateDisplay()`},{type:"heading",level:2,content:"Building a Health Bar"},{type:"code",language:"lua",filename:"health_bar.lua",code:`-- LocalScript for a health bar GUI
-- Structure: ScreenGui → HealthFrame (background) → HealthFill (inner bar)

local player = game.Players.LocalPlayer
local background = script.Parent  -- The background frame
local fill = background:WaitForChild("HealthFill")  -- The colored bar inside

-- Style
background.Size = UDim2.new(0, 200, 0, 30)
background.Position = UDim2.new(0.5, -100, 1, -50)  -- bottom center
background.BackgroundColor3 = Color3.fromRGB(50, 50, 50)  -- dark gray

fill.Size = UDim2.new(1, 0, 1, 0)  -- fills the background
fill.BackgroundColor3 = Color3.fromRGB(0, 255, 0)  -- green

local function updateHealthBar()
    local character = player.Character
    if not character then return end
    
    local humanoid = character:FindFirstChildOfClass("Humanoid")
    if not humanoid then return end
    
    local healthPercent = humanoid.Health / humanoid.MaxHealth
    
    -- Resize the fill bar
    fill.Size = UDim2.new(healthPercent, 0, 1, 0)
    
    -- Change color based on health
    if healthPercent > 0.6 then
        fill.BackgroundColor3 = Color3.fromRGB(0, 255, 0)    -- Green
    elseif healthPercent > 0.3 then
        fill.BackgroundColor3 = Color3.fromRGB(255, 255, 0)  -- Yellow
    else
        fill.BackgroundColor3 = Color3.fromRGB(255, 0, 0)    -- Red
    end
end

-- Connect to character and humanoid health changes
player.CharacterAdded:Connect(function(character)
    local humanoid = character:WaitForChild("Humanoid")
    humanoid.HealthChanged:Connect(updateHealthBar)
    updateHealthBar()
end)

if player.Character then updateHealthBar() end`},{type:"tip",content:"GUIs use LocalScripts, not Scripts! LocalScripts run on the player's device, which is where GUI rendering happens. Put LocalScripts inside the GUI elements they control."},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Create a simple ScreenGui with a TextLabel displaying 'Hello, Player!' centered on screen.","**Exercise 2:** Build the coin counter HUD that updates when the player collects coins.","**Exercise 3:** Create a health bar using two frames (background + fill).","**Exercise 4:** Add a Stage display next to the coin counter.","**Exercise 5:** Style your GUI with custom colors, fonts, and rounded corners (add UICorner)."]},{type:"quiz",question:"What does UDim2.new(0.5, 0, 0.5, 0) with AnchorPoint (0.5, 0.5) do?",options:[{id:"a",text:"Top-left corner"},{id:"b",text:"Exact center of screen"},{id:"c",text:"Bottom-right corner"},{id:"d",text:"Half size"}],correct:"b",explanation:"Scale 0.5 = 50% of the way across both axes. With AnchorPoint at (0.5, 0.5), the element's CENTER is placed at that point, resulting in perfect centering!"}]}},{id:"5-2",title:"Interactive Buttons & Menus",completed:!1,content:{description:"Create clickable buttons, toggle switches, shop menus, and menu systems with smooth animations.",sections:[{type:"text",content:`By the end of this lesson, you'll build interactive menus with buttons, hover effects, toggle switches, and a functional shop UI.

Buttons are how players interact with your game's UI. Every menu screen, shop interface, settings panel, and dialog box relies on buttons. Making them responsive, visually appealing, and functional is what separates amateur games from professional ones.`},{type:"heading",level:2,content:"Button Click Events"},{type:"code",language:"lua",filename:"button_basics.lua",code:`-- LocalScript inside a TextButton
local button = script.Parent

-- Click event
button.MouseButton1Click:Connect(function()
    print("Button clicked!")
    button.Text = "Clicked!"
end)

-- Hover effects for visual feedback
button.MouseEnter:Connect(function()
    button.BackgroundColor3 = Color3.fromRGB(80, 80, 200) -- Lighter
end)

button.MouseLeave:Connect(function()
    button.BackgroundColor3 = Color3.fromRGB(50, 50, 150) -- Original
end)`},{type:"heading",level:2,content:"Main Menu System"},{type:"code",language:"lua",filename:"main_menu.lua",code:`-- LocalScript inside the Menu Frame
local TweenService = game:GetService("TweenService")
local menu = script.Parent
local playButton = menu:WaitForChild("PlayButton")
local settingsButton = menu:WaitForChild("SettingsButton")
local settingsPanel = menu:WaitForChild("SettingsPanel")

-- Initially hide settings panel
settingsPanel.Visible = false

-- Smooth fade-out function
local function hideMenu()
    local tween = TweenService:Create(
        menu,
        TweenInfo.new(0.5, Enum.EasingStyle.Quad),
        {BackgroundTransparency = 1}
    )
    tween:Play()
    tween.Completed:Wait()
    menu.Visible = false
end

-- Play button: hide menu and start game
playButton.MouseButton1Click:Connect(function()
    playButton.Text = "Starting..."
    hideMenu()
    -- Optionally tell the server:
    -- game.ReplicatedStorage.StartGame:FireServer()
end)

-- Settings button: toggle settings panel
local settingsOpen = false
settingsButton.MouseButton1Click:Connect(function()
    settingsOpen = not settingsOpen
    settingsPanel.Visible = settingsOpen
    settingsButton.Text = settingsOpen and "✕ Close Settings" or "⚙ Settings"
end)`},{type:"heading",level:2,content:"Shop System UI"},{type:"code",language:"lua",filename:"shop_ui.lua",code:`-- LocalScript for a shop button
local button = script.Parent
local player = game.Players.LocalPlayer
local itemName = "Speed Boost"
local itemCost = 50

-- Set button text
button.Text = itemName .. " — " .. itemCost .. " coins"

button.MouseButton1Click:Connect(function()
    local leaderstats = player:FindFirstChild("leaderstats")
    if not leaderstats then return end
    
    local coins = leaderstats:FindFirstChild("Coins")
    if not coins then return end
    
    if coins.Value >= itemCost then
        -- Tell server to process purchase (NEVER trust client!)
        game.ReplicatedStorage.BuyItem:FireServer(itemName)
        
        button.Text = "✅ Purchased!"
        button.BackgroundColor3 = Color3.fromRGB(0, 150, 0)
        wait(2)
        button.Text = itemName .. " — " .. itemCost .. " coins"
        button.BackgroundColor3 = Color3.fromRGB(50, 50, 150)
    else
        button.Text = "❌ Need " .. (itemCost - coins.Value) .. " more!"
        button.BackgroundColor3 = Color3.fromRGB(150, 0, 0)
        wait(2)
        button.Text = itemName .. " — " .. itemCost .. " coins"
        button.BackgroundColor3 = Color3.fromRGB(50, 50, 150)
    end
end)`},{type:"heading",level:2,content:"Toggle Button Pattern"},{type:"code",language:"lua",filename:"toggle_button.lua",code:`-- A reusable toggle button pattern
local button = script.Parent
local isOn = false

local ON_COLOR = Color3.fromRGB(0, 200, 0)   -- Green
local OFF_COLOR = Color3.fromRGB(200, 0, 0)  -- Red

local function updateVisual()
    if isOn then
        button.Text = "🔊 Music: ON"
        button.BackgroundColor3 = ON_COLOR
    else
        button.Text = "🔇 Music: OFF"
        button.BackgroundColor3 = OFF_COLOR
    end
end

button.MouseButton1Click:Connect(function()
    isOn = not isOn  -- Flip the value
    updateVisual()
    
    -- Actually toggle the music
    local music = workspace:FindFirstChild("BackgroundMusic")
    if music then
        if isOn then
            music:Play()
        else
            music:Stop()
        end
    end
end)

-- Set initial state
updateVisual()`},{type:"warning",content:"Never process purchases on the client! A hacker could modify the LocalScript to give themselves items for free. Always send purchase requests to the server with FireServer(), and have the server validate that the player has enough coins before giving the item."},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Create a menu with 'Play' and 'Settings' buttons. Play hides the menu, Settings toggles a panel.","**Exercise 2:** Build a shop button that checks coin count and shows 'Purchased' or 'Not enough coins'.","**Exercise 3:** Create a music toggle button that starts/stops a Sound object in Workspace.","**Exercise 4:** Add hover effects (color change) to all your buttons.","**Exercise 5:** Create a notification system: a TextLabel that fades in with a message and fades out after 3 seconds."]},{type:"checkpoint",content:"Create a simple menu with a 'Play' button that hides the menu when clicked, and a 'Settings' button that toggles a settings panel. Add hover effects to both buttons!"}]}}]},{id:6,title:"Multiplayer & Data",lessons:[{id:"6-1",title:"Client-Server Communication",completed:!1,content:{description:"Master RemoteEvents and RemoteFunctions to make your game truly multiplayer. Understand client-server architecture and secure your game against cheaters.",sections:[{type:"text",content:`By the end of this lesson, you'll understand the client-server model, use RemoteEvents for communication, and know how to prevent common exploits.

Roblox games are **multiplayer by default**, which means some code runs on the server (shared for everyone) and some runs on each player's device (client). Understanding this split is critical — it determines what's secure, what's fast, and what's visible to each player.

Think of it like a restaurant: the server (kitchen) prepares the real food, and the client (your table) is where you see and interact with it. If you could change your own receipt at the table, that'd be cheating — that's why important logic must happen in the kitchen!`},{type:"heading",level:2,content:"Client vs Server"},{type:"code",language:"text",filename:"client_vs_server.txt",code:`CLIENT (LocalScript — runs on player's device):
• Handles: GUI, camera, keyboard/mouse input, local effects
• Location: StarterGui, StarterPlayer, ReplicatedFirst
• Trust level: ZERO! Can be hacked/modified by exploiters
• Each player runs their own copy

SERVER (Script — runs on Roblox servers):
• Handles: Game logic, data saving, spawning, combat
• Location: ServerScriptService, ServerStorage
• Trust level: HIGH! Players cannot modify server code
• One server runs for all players

★ THE GOLDEN RULE ★
Never trust the client! Always validate on the server.
If a client says 'give me 999 coins', the server must
verify they actually earned them.`},{type:"heading",level:2,content:"RemoteEvents — Client ↔ Server"},{type:"code",language:"lua",filename:"remote_events.lua",code:`-- Create a RemoteEvent in ReplicatedStorage (name it 'BuyItem')

-- === CLIENT → SERVER (FireServer) ===
-- LocalScript in StarterGui
local remote = game.ReplicatedStorage:WaitForChild("BuyItem")
local button = script.Parent

button.MouseButton1Click:Connect(function()
    -- Send request to server
    remote:FireServer("Sword", 50)
    -- Arguments: item name, expected cost
end)

-- Script in ServerScriptService
local remote = game.ReplicatedStorage:WaitForChild("BuyItem")

remote.OnServerEvent:Connect(function(player, itemName, cost)
    -- 'player' is automatically passed — you can't fake it!
    print(player.Name .. " wants to buy " .. itemName)
    
    -- VALIDATE on the server (never trust client data!)
    local coins = player.leaderstats.Coins
    if coins.Value >= cost then
        coins.Value -= cost
        -- Give the item...
        print("Purchase approved!")
    else
        print("Purchase denied — not enough coins")
    end
end)


-- === SERVER → CLIENT (FireClient / FireAllClients) ===
-- Script in ServerScriptService
local notify = game.ReplicatedStorage:WaitForChild("Notify")

-- Send to ONE specific player
notify:FireClient(somePlayer, "You found a secret!")

-- Send to ALL players
notify:FireAllClients("Round starting in 10 seconds!")

-- LocalScript in StarterGui
local notify = game.ReplicatedStorage:WaitForChild("Notify")
notify.OnClientEvent:Connect(function(message)
    script.Parent.Text = message  -- Show on screen
end)`},{type:"warning",content:"NEVER trust data from FireServer! Exploiters can send any values they want. A client might fire BuyItem with a cost of 0, or an invalid item name. Always verify everything on the server: check the real item price from your server data, verify the player has enough coins, and validate the item exists."},{type:"tip",content:"The 'player' parameter in OnServerEvent is automatically provided by Roblox — you can't fake it. This is your reliable way to know WHO sent the request."},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Create a RemoteEvent that lets a client request a speed boost. The server validates and applies it.","**Exercise 2:** Build a chat notification system where the server sends messages to all clients.","**Exercise 3:** Create a shop with 3 items using RemoteEvents for purchase requests.","**Exercise 4:** Add server-side validation that prevents buying the same item twice.","**Exercise 5:** Build a voting system where clients send votes and the server tallies them."]},{type:"quiz",question:"Why should game logic (like giving items) be on the server?",options:[{id:"a",text:"It's faster"},{id:"b",text:"The server can't be hacked, preventing cheating"},{id:"c",text:"LocalScripts can't give items"},{id:"d",text:"It's required by Roblox"}],correct:"b",explanation:"Exploiters can modify client code (LocalScripts) freely. But they cannot modify server code. By putting important logic like currency, items, and combat on the server, you make it impossible to cheat!"}]}},{id:"6-2",title:"Saving Player Data",completed:!1,content:{description:"Persist player progress between game sessions using DataStoreService. Save coins, levels, inventory, and settings so players never lose their progress.",sections:[{type:"text",content:`By the end of this lesson, you'll implement a complete data saving system using DataStoreService with proper error handling, so player progress persists between sessions.

Without data saving, all progress is lost when a player leaves. They'd have to re-collect every coin, re-complete every checkpoint, every single time they play. **DataStoreService** solves this by saving data to Roblox's cloud servers. When a player returns, their data is loaded and restored.`},{type:"heading",level:2,content:"Enabling DataStores"},{type:"code",language:"text",filename:"enable_datastores.txt",code:`Before DataStores work, you need to:

1. PUBLISH your game first!
   File → Publish to Roblox → Create

2. Enable API access:
   Game Settings → Security → Enable Studio Access to API Services ✅

3. DataStores only work:
   • In published games
   • When API access is enabled
   • In Server Scripts (not LocalScripts!)
   • NOT in Team Create Test mode (sometimes)`},{type:"heading",level:2,content:"Complete Data Save/Load System"},{type:"code",language:"lua",filename:"data_system.lua",code:`-- Put this in ServerScriptService!
local DataStoreService = game:GetService("DataStoreService")
local Players = game:GetService("Players")

-- Get (or create) a DataStore
local playerDataStore = DataStoreService:GetDataStore("PlayerData_v1")

-- Default data for new players
local DEFAULT_DATA = {
    Coins = 0,
    Stage = 1,
    PlayTime = 0
}

-- LOAD data when player joins
Players.PlayerAdded:Connect(function(player)
    -- Create leaderstats
    local leaderstats = Instance.new("Folder")
    leaderstats.Name = "leaderstats"
    leaderstats.Parent = player
    
    local coins = Instance.new("IntValue")
    coins.Name = "Coins"
    coins.Parent = leaderstats
    
    local stage = Instance.new("IntValue")
    stage.Name = "Stage"
    stage.Parent = leaderstats
    
    -- Try to load saved data
    local success, data = pcall(function()
        return playerDataStore:GetAsync("Player_" .. player.UserId)
    end)
    
    if success and data then
        -- Data found! Restore it
        coins.Value = data.Coins or DEFAULT_DATA.Coins
        stage.Value = data.Stage or DEFAULT_DATA.Stage
        print("✅ Loaded data for " .. player.Name)
    else
        -- New player or load failed — use defaults
        coins.Value = DEFAULT_DATA.Coins
        stage.Value = DEFAULT_DATA.Stage
        print("🆕 New player: " .. player.Name)
    end
end)

-- SAVE function
local function savePlayerData(player)
    local leaderstats = player:FindFirstChild("leaderstats")
    if not leaderstats then return end
    
    local data = {
        Coins = leaderstats.Coins.Value,
        Stage = leaderstats.Stage.Value
    }
    
    local success, err = pcall(function()
        playerDataStore:SetAsync("Player_" .. player.UserId, data)
    end)
    
    if success then
        print("✅ Saved data for " .. player.Name)
    else
        warn("❌ Failed to save for " .. player.Name .. ": " .. err)
    end
end

-- Save when player leaves
Players.PlayerRemoving:Connect(savePlayerData)

-- Save ALL players when server shuts down
game:BindToClose(function()
    for _, player in ipairs(Players:GetPlayers()) do
        savePlayerData(player)
    end
end)`},{type:"tip",content:"Always use pcall() with DataStore operations! DataStores can fail due to network issues, rate limits, or server problems. pcall catches errors so your game keeps running instead of crashing."},{type:"warning",content:"DataStores have rate limits! Don't save every time a player picks up a coin. Save when they leave (PlayerRemoving) and when the server shuts down (BindToClose). For auto-saving, save once every 60-120 seconds at most."},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Implement the basic data save/load system with Coins.","**Exercise 2:** Add Stage saving so checkpoint progress persists.","**Exercise 3:** Add an auto-save every 120 seconds using a while loop.","**Exercise 4:** Test data persistence: collect coins, leave, rejoin — verify coins are saved.","**Exercise 5:** Add error handling with retry logic — if save fails, try again up to 3 times."]},{type:"checkpoint",content:"Implement data saving for your coin and checkpoint system. Collect some coins, leave the game, rejoin, and verify your coins and stage are still there!"}]}}]},{id:7,title:"Publishing & Polish",lessons:[{id:"7-1",title:"Game Polish & Testing",completed:!1,content:{description:"Transform your game from a prototype to a polished experience. Learn testing techniques, visual effects, sound design, and the finishing touches that make games feel professional.",sections:[{type:"text",content:`By the end of this lesson, you'll know how to test thoroughly, add visual polish, implement sound effects, and prepare your game for public release.

The difference between a game people play once and a game they come back to is **polish**. Polish is the sound effects, the particle effects, the smooth animations, the helpful UI, and the dozens of small details that make a game feel complete. A polished game feels like someone cared about every detail — because they did.`},{type:"heading",level:2,content:"Testing Checklist"},{type:"code",language:"text",filename:"testing_checklist.txt",code:`Before publishing, test EVERYTHING:

□ Play through entire game start to finish
□ Die and respawn — do you appear at the right checkpoint?
□ Collect coins — does the leaderboard update?
□ Leave and rejoin — is data saved correctly?
□ Test on mobile (phone) — can you reach everything?
□ Check for parts you can fall through
□ Look for floating parts or misaligned builds
□ Test with 2+ players (F8 for local server test)
□ Check Output for errors (red text = problems!)
□ Remove test scripts and debug prints
□ Verify spawn location works
□ Test all buttons and GUIs`},{type:"heading",level:2,content:"Adding Particle Effects"},{type:"code",language:"lua",filename:"particle_effects.lua",code:`-- Add visual flair to coin collection!
local function createCollectionEffect(position)
    -- Create a temporary part for the particles
    local effect = Instance.new("Part")
    effect.Size = Vector3.new(1, 1, 1)
    effect.Position = position
    effect.Anchored = true
    effect.CanCollide = false
    effect.Transparency = 1  -- Invisible part
    effect.Parent = workspace
    
    -- Add sparkle particles
    local particles = Instance.new("ParticleEmitter")
    particles.Color = ColorSequence.new(Color3.fromRGB(255, 215, 0))  -- Gold
    particles.Size = NumberSequence.new(0.5, 0)
    particles.Lifetime = NumberRange.new(0.5, 1)
    particles.Rate = 50
    particles.SpreadAngle = Vector2.new(180, 180)
    particles.Parent = effect
    
    -- Emit burst then clean up
    particles:Emit(20)  -- Burst of 20 particles
    particles.Enabled = false
    
    wait(1.5)
    effect:Destroy()  -- Clean up
end`},{type:"heading",level:2,content:"Sound Effects"},{type:"code",language:"lua",filename:"sound_effects.lua",code:`-- Create and play sounds programmatically

local function playSound(parent, soundId, volume)
    volume = volume or 0.5
    
    local sound = Instance.new("Sound")
    sound.SoundId = soundId
    sound.Volume = volume
    sound.Parent = parent
    sound:Play()
    
    -- Clean up after playing
    sound.Ended:Connect(function()
        sound:Destroy()
    end)
end

-- Usage examples:
-- playSound(workspace, "rbxassetid://12345678", 0.8)

-- Popular free sound IDs (search Roblox Toolbox for more):
-- Coin collect: search 'coin' in Toolbox → Audio
-- Jump: search 'jump' in Toolbox → Audio
-- Death: search 'death' in Toolbox → Audio
-- Background music: search 'background music' → Audio`},{type:"heading",level:2,content:"Lighting & Atmosphere"},{type:"code",language:"lua",filename:"atmosphere.lua",code:`-- Set up atmospheric lighting
local Lighting = game:GetService("Lighting")

-- Time of day
Lighting.TimeOfDay = "14:00:00"  -- 2 PM (bright and sunny)
-- Or for spooky: "22:00:00" (night)

-- Ambient colors
Lighting.Ambient = Color3.fromRGB(100, 100, 100)     -- Global light
Lighting.OutdoorAmbient = Color3.fromRGB(150, 150, 150)

-- Add Atmosphere effect (haze/fog)
local atmosphere = Instance.new("Atmosphere")
atmosphere.Density = 0.3
atmosphere.Color = Color3.fromRGB(200, 200, 230)
atmosphere.Parent = Lighting

-- Add Bloom effect (glow on bright objects)
local bloom = Instance.new("BloomEffect")
bloom.Intensity = 0.5
bloom.Threshold = 1.5
bloom.Parent = Lighting`},{type:"tip",content:"Small polish details matter more than you think: screen shake on death, particles when collecting items, sound effects on buttons, smooth camera transitions. Players FEEL these details even if they don't consciously notice them."},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Run through the testing checklist for your game. Fix every issue you find.","**Exercise 2:** Add particle effects to your coin collection system.","**Exercise 3:** Add background music to your game using a Sound in Workspace.","**Exercise 4:** Set up nice lighting with Atmosphere and Bloom effects.","**Exercise 5:** Add a loading screen that shows briefly when players join."]},{type:"checkpoint",content:"Complete the testing checklist for your game. Fix at least 3 issues, add sound effects to 2 interactions, and add particle effects to coin collection."}]}},{id:"7-2",title:"Publishing to Roblox",completed:!1,content:{description:"Launch your game to the world! Learn how to publish, configure game settings, create an icon, and promote your game to get players.",sections:[{type:"text",content:`By the end of this lesson, your game will be published on Roblox and accessible to millions of potential players. You'll know how to configure settings, create an appealing game page, and start building an audience.

Publishing is the most exciting moment in game development — when your creation goes from something only you can see to something the entire Roblox community can discover and play. Let's make sure your launch goes smoothly!`},{type:"heading",level:2,content:"Game Settings Checklist"},{type:"code",language:"text",filename:"game_settings.txt",code:`File → Game Settings:

📝 BASIC INFO:
• Name — Choose catchy and descriptive ('Epic Obby Tower')
• Description — What's your game about? Include keywords!
• Genre — Pick the closest match (Adventure, Obby, etc.)
• Max Players — Set appropriate limit (10-50 typical)

🖼️ VISUALS:
• Game Icon — 512x512 square PNG (first impression!)
• Thumbnails — Up to 10 screenshots/artwork

🔒 SECURITY:
• Enable Studio Access to API Services ✅ (for DataStores)
• Allow Third Party Sales ❌ (unless needed)

📱 DEVICES:
• Computer ✅
• Phone ✅
• Tablet ✅
• Console ✅ (if your controls support it)`},{type:"heading",level:2,content:"Publishing Steps"},{type:"code",language:"text",filename:"publish_steps.txt",code:`FIRST TIME PUBLISHING:
1. File → Publish to Roblox
2. Enter game name and description
3. Click 'Create'
4. Wait for upload
5. Go to roblox.com/develop
6. Find your game → Configure
7. Set to 'Public' when ready!

UPDATING:
1. Make your changes in Studio
2. File → Publish to Roblox
3. Changes go live in seconds!

Your game URL format:
https://www.roblox.com/games/[GameId]`},{type:"heading",level:2,content:"Getting Players"},{type:"list",items:["📱 **Share on social media** — TikTok, YouTube, Twitter with gameplay clips","👥 **Friends first** — Ask friends to play, they invite their friends","🎮 **Roblox groups** — Join and share in relevant game communities","📺 **Create content** — Make a trailer or gameplay video","🔄 **Update regularly** — New content keeps players coming back","👂 **Listen to feedback** — Fix what players complain about","⭐ **Optimize the first minute** — If players leave in 60 seconds, they won't come back"]},{type:"tip",content:"First impressions are EVERYTHING. Your game icon and the first 30 seconds of gameplay determine if players stay. Make sure the icon is eye-catching and the opening experience is fun and clear."},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Configure all game settings — name, description, genre, max players.","**Exercise 2:** Create a game icon (512x512) using any image tool.","**Exercise 3:** Take 3 in-game screenshots for thumbnails.","**Exercise 4:** Publish your game and set it to Public.","**Exercise 5:** Share the link with a friend and get feedback!"]},{type:"checkpoint",content:"Publish your game to Roblox! Configure the settings, add an icon, and set it to Public. Share the link with at least one person and get their feedback."}]}}]},{id:8,title:"Congratulations! 🎉",lessons:[{id:"8-1",title:"You're a Roblox Developer!",completed:!1,content:{description:"Amazing work! You've completed the Roblox Game Development course. Review what you've learned and discover what's next on your development journey.",sections:[{type:"text",content:`**CONGRATULATIONS, DEVELOPER!** 🎉🎮

You did it! You've gone from knowing nothing about game development to having the skills to create, code, and publish real Roblox games. That's an incredible achievement — most people never get past thinking about making a game. You actually DID it.

Let's review everything you've accomplished:`},{type:"heading",level:2,content:"Skills You've Mastered"},{type:"list",items:["✅ **Roblox Studio** — Navigating, building, organizing game worlds","✅ **Parts & Properties** — Creating, transforming, and customizing 3D objects","✅ **Lua Programming** — Variables, data types, math operations, strings","✅ **Logic & Decisions** — If/elseif/else statements, comparisons, boolean logic","✅ **Loops** — While loops, for loops, break, continue","✅ **Functions** — Parameters, return values, code organization","✅ **Object Hierarchy** — FindFirstChild, WaitForChild, GetChildren, GetDescendants","✅ **Events** — Touched, PlayerAdded, MouseClick, debounce pattern","✅ **Game Systems** — Coin collection, checkpoints, kill bricks, traps","✅ **User Interface** — ScreenGui, TextLabels, TextButtons, health bars","✅ **Multiplayer** — RemoteEvents, client-server architecture, security","✅ **Data Persistence** — DataStoreService, saving/loading player progress","✅ **Polish** — Particles, sounds, lighting, atmosphere","✅ **Publishing** — Game settings, icons, launching to the public"]},{type:"heading",level:2,content:"What's Next?"},{type:"list",items:["🎮 **Build more games** — Each game teaches you something new!","🎭 **Animations** — Make characters emote and objects animate smoothly","🚗 **Vehicles** — Build drivable cars, boats, and planes","🤖 **AI Enemies** — Create NPC behavior with pathfinding","💰 **Monetization** — Game passes and developer products for Robux","🎨 **3D Modeling** — Learn Blender to create custom meshes","🔊 **Advanced Audio** — Music systems, 3D spatial sound","🌍 **Terrain** — Create realistic landscapes with the terrain editor","📚 **Roblox Dev Forum** — Join the community at devforum.roblox.com","🏆 **Game Jams** — Compete in Roblox game jams to challenge yourself"]},{type:"heading",level:2,content:"Game Ideas to Build Next"},{type:"list",items:["🏃 **Obby** — Expand your checkpoint system into a full obstacle course","⚔️ **Sword Fighting** — PvP combat with weapons and arenas","🏠 **Tycoon** — Build and upgrade a base to earn money","🧟 **Survival** — Collect resources, craft items, survive waves","🏎️ **Racing** — Custom vehicles on a track with lap timing","🧩 **Puzzle Game** — Logic puzzles, mazes, escape rooms","🎭 **Roleplay** — Jobs, housing, and social interaction","👾 **Tower Defense** — Place towers to stop enemy waves"]},{type:"tip",content:"The best way to improve is to BUILD. Pick one game idea from the list above and start making it today. You'll encounter new challenges that force you to learn new skills. That's the fastest path to becoming a great developer!"},{type:"text",content:`You started this course knowing nothing about game development. Now you can create real, playable, multiplayer games that millions of people could enjoy. That's an incredible skill to have at any age.

The Roblox community is waiting for your next creation. Keep building, keep learning, keep creating. The only limit is your imagination. 🚀🎮✨`}]}}]}]};function lp({course:x,currentLesson:J,completedLessons:j,expandedChapters:h,onLessonSelect:B,onChapterToggle:k,progress:V,isOpen:L}){const[A,T]=rt.useState(""),W=H=>({completed:H.lessons.filter(X=>j.includes(X.id)).length,total:H.lessons.length}),M=A?x.chapters.map(H=>({...H,lessons:H.lessons.filter(K=>K.title.toLowerCase().includes(A.toLowerCase()))})).filter(H=>H.lessons.length>0):x.chapters;return d.jsxs("aside",{className:`sidebar ${L?"open":""}`,children:[d.jsxs("div",{className:"sidebar-header",children:[d.jsxs("div",{className:"course-logo",children:[d.jsx("span",{className:"logo-icon",children:"🎮"}),d.jsxs("div",{children:[d.jsx("h1",{className:"course-title",children:x.title}),d.jsx("p",{className:"course-subtitle",children:x.description})]})]}),d.jsxs("div",{className:"progress-section",children:[d.jsxs("div",{className:"progress-header",children:[d.jsx("span",{children:"Progress"}),d.jsxs("span",{className:"progress-percent",children:[V,"%"]})]}),d.jsx("div",{className:"progress-bar",children:d.jsx("div",{className:"progress-fill",style:{width:`${V}%`}})})]}),d.jsxs("div",{className:"search-box",children:[d.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("circle",{cx:"11",cy:"11",r:"8"}),d.jsx("path",{d:"m21 21-4.35-4.35"})]}),d.jsx("input",{type:"text",placeholder:"Search lessons...",value:A,onChange:H=>T(H.target.value)})]})]}),d.jsx("nav",{className:"chapter-list",children:M.map(H=>{const K=h.includes(H.id),{completed:X,total:F}=W(H),ye=X===F;return d.jsxs("div",{className:"chapter",children:[d.jsxs("div",{className:`chapter-header ${K?"expanded":""}`,onClick:()=>k(H.id),children:[d.jsxs("div",{className:"chapter-info",children:[d.jsx("span",{className:`chapter-number ${ye?"completed":""}`,children:ye?"✓":H.id}),d.jsxs("div",{className:"chapter-text",children:[d.jsx("span",{className:"chapter-name",children:H.title}),d.jsxs("span",{className:"chapter-meta",children:[X,"/",F," lessons"]})]})]}),d.jsx("svg",{className:`chevron ${K?"rotated":""}`,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:d.jsx("path",{d:"m6 9 6 6 6-6"})})]}),K&&d.jsx("ul",{className:"lesson-list",children:H.lessons.map(ae=>{const Se=J?.id===ae.id,ge=j.includes(ae.id);return d.jsxs("li",{className:`lesson-item ${Se?"active":""} ${ge?"completed":""}`,onClick:()=>B(ae),children:[d.jsx("span",{className:"lesson-status",children:ge?d.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:d.jsx("polyline",{points:"20 6 9 17 4 12"})}):d.jsx("span",{className:"status-dot"})}),d.jsx("span",{className:"lesson-name",children:ae.title})]},ae.id)})})]},H.id)})})]})}function ip({code:x,language:J,filename:j}){const[h,B]=rt.useState(""),[k,V]=rt.useState(!1),[L,A]=rt.useState(!1),T=x.split(`
`),W=()=>{V(!0),setTimeout(()=>{try{const X=H(x);B(X)}catch(X){B(`Error: ${X.message}`)}V(!1)},500)},M=()=>{navigator.clipboard.writeText(x),A(!0),setTimeout(()=>A(!1),2e3)},H=X=>{const F=[],ye=X.split(`
`),ae={};for(const Se of ye){if(Se.trim().startsWith("#")||!Se.trim())continue;const ge=Se.match(/print\((.+)\)/);if(ge){let Ce=ge[1].trim();Ce.startsWith('f"')||Ce.startsWith("f'")?(Ce=Ce.slice(2,-1),Ce=Ce.replace(/\{([^}]+)\}/g,(Ue,Z)=>Z.includes("+")?"[calculated]":Z.includes(":")?"[formatted]":ae[Z]||Z),F.push(Ce)):Ce.startsWith('"')||Ce.startsWith("'")?F.push(Ce.slice(1,-1)):F.push(Ce)}const Ye=Se.match(/^(\w+)\s*=\s*(.+)$/);if(Ye&&!Se.includes("def ")){const[,Ce,Ue]=Ye;ae[Ce]=Ue.replace(/["']/g,"").trim()}}return F.length>0?F.join(`
`):"✨ Code executed successfully!"},K=X=>{let F=X.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");const ye=["def","return","if","elif","else","for","while","in","not","and","or","True","False","None","import","from","class","try","except","finally","with","as","raise","break","continue","pass","lambda"],ae=["print","len","range","str","int","float","list","dict","set","type","open","sum","min","max","sorted","enumerate","zip","map","filter","isinstance","super"];return F.replace(/(#.*)$/gm,"§COM§$1§/COM§").replace(/(f?&quot;[^&]*&quot;|f?&#39;[^&]*&#39;|f?"[^"]*"|f?'[^']*')/g,"§STR§$1§/STR§").replace(/\b(\d+\.?\d*)\b/g,"§NUM§$1§/NUM§").replace(new RegExp(`\\b(${ye.join("|")})\\b`,"g"),"§KEY§$1§/KEY§").replace(new RegExp(`\\b(${ae.join("|")})\\b(?=\\()`,"g"),"§BLT§$1§/BLT§").replace(/§COM§/g,'<span class="comment">').replace(/§\/COM§/g,"</span>").replace(/§STR§/g,'<span class="string">').replace(/§\/STR§/g,"</span>").replace(/§NUM§/g,'<span class="number">').replace(/§\/NUM§/g,"</span>").replace(/§KEY§/g,'<span class="keyword">').replace(/§\/KEY§/g,"</span>").replace(/§BLT§/g,'<span class="builtin">').replace(/§\/BLT§/g,"</span>")};return d.jsxs("div",{className:"code-editor",children:[d.jsxs("div",{className:"editor-header",children:[d.jsx("div",{className:"editor-tabs",children:d.jsxs("div",{className:"editor-tab active",children:[d.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:d.jsx("path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"})}),j]})}),d.jsxs("div",{className:"editor-actions",children:[d.jsx("button",{className:"copy-btn",onClick:M,title:"Copy code",children:L?d.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#10b981",strokeWidth:"2",children:d.jsx("polyline",{points:"20 6 9 17 4 12"})}):d.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),d.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})}),d.jsx("button",{className:"run-btn",onClick:W,disabled:k,children:k?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"spinner"}),"Running..."]}):d.jsxs(d.Fragment,{children:[d.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:d.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),"Run"]})})]})]}),d.jsxs("div",{className:"editor-content",children:[d.jsx("div",{className:"line-numbers",children:T.map((X,F)=>d.jsx("div",{children:F+1},F))}),d.jsx("pre",{className:"code-area",dangerouslySetInnerHTML:{__html:K(x)}})]}),h&&d.jsxs("div",{className:"output-area",children:[d.jsxs("div",{className:"output-header",children:[d.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("polyline",{points:"4 17 10 11 4 5"}),d.jsx("line",{x1:"12",y1:"19",x2:"20",y2:"19"})]}),"Output"]}),d.jsx("pre",{className:"output-content",children:h})]})]})}function op({quiz:x}){const[J,j]=rt.useState(null),[h,B]=rt.useState(!1),k=()=>{J&&B(!0)},V=J===x.correct,L=A=>A.replace(/\n/g,"<br/>");return d.jsxs("div",{className:"quiz-container",children:[d.jsxs("div",{className:"quiz-header",children:[d.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("circle",{cx:"12",cy:"12",r:"10"}),d.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),d.jsx("path",{d:"M12 17h.01"})]}),d.jsx("span",{children:"Quick Quiz"})]}),d.jsx("p",{className:"quiz-question",dangerouslySetInnerHTML:{__html:L(x.question)}}),d.jsx("div",{className:"quiz-options",children:x.options.map(A=>{let T="quiz-option";return h?A.id===x.correct?T+=" correct":A.id===J&&A.id!==x.correct&&(T+=" incorrect"):A.id===J&&(T+=" selected"),d.jsxs("div",{className:T,onClick:()=>!h&&j(A.id),children:[d.jsx("span",{className:"option-marker",children:h&&A.id===x.correct?d.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:d.jsx("polyline",{points:"20 6 9 17 4 12"})}):h&&A.id===J&&A.id!==x.correct?d.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:[d.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),d.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}):A.id.toUpperCase()}),d.jsx("span",{className:"option-text",children:A.text})]},A.id)})}),h?d.jsxs("div",{className:`quiz-result ${V?"correct":"incorrect"}`,children:[d.jsx("div",{className:"result-header",children:V?d.jsxs(d.Fragment,{children:[d.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),d.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),"Correct! 🎉"]}):d.jsxs(d.Fragment,{children:[d.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("circle",{cx:"12",cy:"12",r:"10"}),d.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),d.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),"Not quite!"]})}),d.jsx("p",{className:"result-explanation",children:x.explanation}),d.jsx("button",{className:"quiz-retry",onClick:()=>{j(null),B(!1)},children:"Try Again"})]}):d.jsx("button",{className:"quiz-submit gradient-btn",onClick:k,disabled:!J,children:"Check Answer"})]})}function up({lesson:x,isCompleted:J,onMarkComplete:j,onNavigate:h,courseTitle:B}){const k=(L,A)=>{switch(L.type){case"text":return d.jsx("div",{className:"lesson-text",dangerouslySetInnerHTML:{__html:V(L.content)}},A);case"heading":const T=`h${L.level}`;return d.jsx(T,{className:"lesson-heading",children:L.content},A);case"list":return d.jsx("ul",{className:"lesson-list",children:L.items.map((W,M)=>d.jsx("li",{dangerouslySetInnerHTML:{__html:V(W)}},M))},A);case"code":return d.jsx(ip,{code:L.code,language:L.language,filename:L.filename},A);case"tip":return d.jsxs("div",{className:"tip-box",children:[d.jsxs("div",{className:"tip-title",children:[d.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("circle",{cx:"12",cy:"12",r:"10"}),d.jsx("path",{d:"M12 16v-4M12 8h.01"})]}),"Pro Tip"]}),d.jsx("p",{dangerouslySetInnerHTML:{__html:V(L.content)}})]},A);case"warning":return d.jsxs("div",{className:"warning-box",children:[d.jsxs("div",{className:"warning-title",children:[d.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"}),d.jsx("path",{d:"M12 9v4M12 17h.01"})]}),"Important"]}),d.jsx("p",{dangerouslySetInnerHTML:{__html:V(L.content)}})]},A);case"checkpoint":return d.jsxs("div",{className:"checkpoint",children:[d.jsxs("div",{className:"checkpoint-title",children:[d.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),d.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),"Checkpoint"]}),d.jsx("p",{dangerouslySetInnerHTML:{__html:V(L.content)}})]},A);case"quiz":return d.jsx(op,{quiz:L},A);default:return null}},V=L=>L?L.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\n/g,"<br/>"):"";return d.jsxs("div",{className:"lesson-container animate-in",children:[d.jsxs("nav",{className:"breadcrumb",children:[d.jsx("a",{href:"#",children:"Home"}),d.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:d.jsx("path",{d:"m9 18 6-6-6-6"})}),d.jsx("a",{href:"#",children:"Courses"}),d.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:d.jsx("path",{d:"m9 18 6-6-6-6"})}),d.jsx("span",{children:B})]}),d.jsxs("header",{className:"lesson-header",children:[d.jsx("h1",{className:"lesson-title",children:x.title}),d.jsx("p",{className:"lesson-description",children:x.content.description})]}),d.jsx("article",{className:"lesson-content",children:x.content.sections.map((L,A)=>k(L,A))}),d.jsxs("footer",{className:"lesson-nav",children:[d.jsxs("button",{className:"nav-btn secondary",onClick:()=>h("prev"),children:[d.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:d.jsx("path",{d:"m15 18-6-6 6-6"})}),"Previous"]}),d.jsx("div",{className:"nav-center",children:J?d.jsxs("span",{className:"completed-badge",children:[d.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:d.jsx("polyline",{points:"20 6 9 17 4 12"})}),"Completed"]}):d.jsxs("button",{className:"nav-btn gradient-btn mark-complete-btn",onClick:j,children:[d.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:d.jsx("polyline",{points:"20 6 9 17 4 12"})}),"Mark Complete"]})}),d.jsxs("button",{className:"nav-btn gradient-btn",onClick:()=>h("next"),children:["Next",d.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:d.jsx("path",{d:"m9 18 6-6-6-6"})})]})]})]})}function cp(){const[x,J]=rt.useState(null),[j,h]=rt.useState(()=>{const K=localStorage.getItem("robloxCourseProgress");return K?JSON.parse(K):[]}),[B,k]=rt.useState([1]),[V,L]=rt.useState(!1);rt.useEffect(()=>{!x&&Tn.chapters.length>0&&J(Tn.chapters[0].lessons[0])},[]),rt.useEffect(()=>{localStorage.setItem("robloxCourseProgress",JSON.stringify(j))},[j]);const A=K=>{k(X=>X.includes(K)?X.filter(F=>F!==K):[...X,K])},T=K=>{j.includes(K)||h(X=>[...X,K])},W=K=>{const X=Tn.chapters.flatMap(ye=>ye.lessons),F=X.findIndex(ye=>ye.id===x?.id);if(K==="next"&&F<X.length-1){const ye=X[F+1];J(ye);const ae=Tn.chapters.find(Se=>Se.lessons.some(ge=>ge.id===ye.id));ae&&!B.includes(ae.id)&&k(Se=>[...Se,ae.id])}else if(K==="prev"&&F>0){const ye=X[F-1];J(ye);const ae=Tn.chapters.find(Se=>Se.lessons.some(ge=>ge.id===ye.id));ae&&!B.includes(ae.id)&&k(Se=>[...Se,ae.id])}},M=()=>{const K=Tn.chapters.reduce((X,F)=>X+F.lessons.length,0);return Math.round(j.length/K*100)},H=K=>{J(K),L(!1)};return d.jsxs("div",{className:"app",children:[d.jsx("button",{className:"mobile-menu-btn",onClick:()=>L(!V),"aria-label":"Toggle menu",children:V?d.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),d.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}):d.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),d.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),d.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}),V&&d.jsx("div",{className:"sidebar-overlay",onClick:()=>L(!1)}),d.jsx(lp,{course:Tn,currentLesson:x,completedLessons:j,expandedChapters:B,onLessonSelect:H,onChapterToggle:A,progress:M(),isOpen:V}),d.jsx("main",{className:"main-content",children:x&&d.jsx(up,{lesson:x,isCompleted:j.includes(x.id),onMarkComplete:()=>T(x.id),onNavigate:W,courseTitle:Tn.title})})]})}ap.createRoot(document.getElementById("root")).render(d.jsx(rt.StrictMode,{children:d.jsx(cp,{})}));
