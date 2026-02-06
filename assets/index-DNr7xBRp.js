(function(){const W=document.createElement("link").relList;if(W&&W.supports&&W.supports("modulepreload"))return;for(const M of document.querySelectorAll('link[rel="modulepreload"]'))h(M);new MutationObserver(M=>{for(const L of M)if(L.type==="childList")for(const Y of L.addedNodes)Y.tagName==="LINK"&&Y.rel==="modulepreload"&&h(Y)}).observe(document,{childList:!0,subtree:!0});function G(M){const L={};return M.integrity&&(L.integrity=M.integrity),M.referrerPolicy&&(L.referrerPolicy=M.referrerPolicy),M.crossOrigin==="use-credentials"?L.credentials="include":M.crossOrigin==="anonymous"?L.credentials="omit":L.credentials="same-origin",L}function h(M){if(M.ep)return;M.ep=!0;const L=G(M);fetch(M.href,L)}})();var oc={exports:{}},Cl={};var mf;function Wp(){if(mf)return Cl;mf=1;var E=Symbol.for("react.transitional.element"),W=Symbol.for("react.fragment");function G(h,M,L){var Y=null;if(L!==void 0&&(Y=""+L),M.key!==void 0&&(Y=""+M.key),"key"in M){L={};for(var j in M)j!=="key"&&(L[j]=M[j])}else L=M;return M=L.ref,{$$typeof:E,type:h,key:Y,ref:M!==void 0?M:null,props:L}}return Cl.Fragment=W,Cl.jsx=G,Cl.jsxs=G,Cl}var yf;function Qp(){return yf||(yf=1,oc.exports=Wp()),oc.exports}var f=Qp(),rc={exports:{}},H={};var gf;function Zp(){if(gf)return H;gf=1;var E=Symbol.for("react.transitional.element"),W=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),k=Symbol.for("react.activity"),z=Symbol.iterator;function X(u){return u===null||typeof u!="object"?null:(u=z&&u[z]||u["@@iterator"],typeof u=="function"?u:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,ye={};function ae(u,T,D){this.props=u,this.context=T,this.refs=ye,this.updater=D||F}ae.prototype.isReactComponent={},ae.prototype.setState=function(u,T){if(typeof u!="object"&&typeof u!="function"&&u!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,u,T,"setState")},ae.prototype.forceUpdate=function(u){this.updater.enqueueForceUpdate(this,u,"forceUpdate")};function be(){}be.prototype=ae.prototype;function ge(u,T,D){this.props=u,this.context=T,this.refs=ye,this.updater=D||F}var Ve=ge.prototype=new be;Ve.constructor=ge,Z(Ve,ae.prototype),Ve.isPureReactComponent=!0;var Ce=Array.isArray;function _e(){}var I={H:null,A:null,T:null,S:null},qe=Object.prototype.hasOwnProperty;function An(u,T,D){var O=D.ref;return{$$typeof:E,type:u,key:T,ref:O!==void 0?O:null,props:D}}function Yt(u,T){return An(u.type,T,u.props)}function Dn(u){return typeof u=="object"&&u!==null&&u.$$typeof===E}function Ie(u){var T={"=":"=0",":":"=2"};return"$"+u.replace(/[=:]/g,function(D){return T[D]})}var Tt=/\/+/g;function Bn(u,T){return typeof u=="object"&&u!==null&&u.key!=null?Ie(""+u.key):T.toString(36)}function wn(u){switch(u.status){case"fulfilled":return u.value;case"rejected":throw u.reason;default:switch(typeof u.status=="string"?u.then(_e,_e):(u.status="pending",u.then(function(T){u.status==="pending"&&(u.status="fulfilled",u.value=T)},function(T){u.status==="pending"&&(u.status="rejected",u.reason=T)})),u.status){case"fulfilled":return u.value;case"rejected":throw u.reason}}throw u}function S(u,T,D,O,P){var K=typeof u;(K==="undefined"||K==="boolean")&&(u=null);var re=!1;if(u===null)re=!0;else switch(K){case"bigint":case"string":case"number":re=!0;break;case"object":switch(u.$$typeof){case E:case W:re=!0;break;case Q:return re=u._init,S(re(u._payload),T,D,O,P)}}if(re)return P=P(u),re=O===""?"."+Bn(u,0):O,Ce(P)?(D="",re!=null&&(D=re.replace(Tt,"$&/")+"/"),S(P,T,D,"",function(Ra){return Ra})):P!=null&&(Dn(P)&&(P=Yt(P,D+(P.key==null||u&&u.key===P.key?"":(""+P.key).replace(Tt,"$&/")+"/")+re)),T.push(P)),1;re=0;var Ye=O===""?".":O+":";if(Ce(u))for(var xe=0;xe<u.length;xe++)O=u[xe],K=Ye+Bn(O,xe),re+=S(O,T,D,K,P);else if(xe=X(u),typeof xe=="function")for(u=xe.call(u),xe=0;!(O=u.next()).done;)O=O.value,K=Ye+Bn(O,xe++),re+=S(O,T,D,K,P);else if(K==="object"){if(typeof u.then=="function")return S(wn(u),T,D,O,P);throw T=String(u),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(u).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return re}function A(u,T,D){if(u==null)return u;var O=[],P=0;return S(u,O,"","",function(K){return T.call(D,K,P++)}),O}function _(u){if(u._status===-1){var T=u._result;T=T(),T.then(function(D){(u._status===0||u._status===-1)&&(u._status=1,u._result=D)},function(D){(u._status===0||u._status===-1)&&(u._status=2,u._result=D)}),u._status===-1&&(u._status=0,u._result=T)}if(u._status===1)return u._result.default;throw u._result}var ue=typeof reportError=="function"?reportError:function(u){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof u=="object"&&u!==null&&typeof u.message=="string"?String(u.message):String(u),error:u});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",u);return}console.error(u)},pe={map:A,forEach:function(u,T,D){A(u,function(){T.apply(this,arguments)},D)},count:function(u){var T=0;return A(u,function(){T++}),T},toArray:function(u){return A(u,function(T){return T})||[]},only:function(u){if(!Dn(u))throw Error("React.Children.only expected to receive a single React element child.");return u}};return H.Activity=k,H.Children=pe,H.Component=ae,H.Fragment=G,H.Profiler=M,H.PureComponent=ge,H.StrictMode=h,H.Suspense=x,H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,H.__COMPILER_RUNTIME={__proto__:null,c:function(u){return I.H.useMemoCache(u)}},H.cache=function(u){return function(){return u.apply(null,arguments)}},H.cacheSignal=function(){return null},H.cloneElement=function(u,T,D){if(u==null)throw Error("The argument must be a React element, but you passed "+u+".");var O=Z({},u.props),P=u.key;if(T!=null)for(K in T.key!==void 0&&(P=""+T.key),T)!qe.call(T,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&T.ref===void 0||(O[K]=T[K]);var K=arguments.length-2;if(K===1)O.children=D;else if(1<K){for(var re=Array(K),Ye=0;Ye<K;Ye++)re[Ye]=arguments[Ye+2];O.children=re}return An(u.type,P,O)},H.createContext=function(u){return u={$$typeof:Y,_currentValue:u,_currentValue2:u,_threadCount:0,Provider:null,Consumer:null},u.Provider=u,u.Consumer={$$typeof:L,_context:u},u},H.createElement=function(u,T,D){var O,P={},K=null;if(T!=null)for(O in T.key!==void 0&&(K=""+T.key),T)qe.call(T,O)&&O!=="key"&&O!=="__self"&&O!=="__source"&&(P[O]=T[O]);var re=arguments.length-2;if(re===1)P.children=D;else if(1<re){for(var Ye=Array(re),xe=0;xe<re;xe++)Ye[xe]=arguments[xe+2];P.children=Ye}if(u&&u.defaultProps)for(O in re=u.defaultProps,re)P[O]===void 0&&(P[O]=re[O]);return An(u,K,P)},H.createRef=function(){return{current:null}},H.forwardRef=function(u){return{$$typeof:j,render:u}},H.isValidElement=Dn,H.lazy=function(u){return{$$typeof:Q,_payload:{_status:-1,_result:u},_init:_}},H.memo=function(u,T){return{$$typeof:w,type:u,compare:T===void 0?null:T}},H.startTransition=function(u){var T=I.T,D={};I.T=D;try{var O=u(),P=I.S;P!==null&&P(D,O),typeof O=="object"&&O!==null&&typeof O.then=="function"&&O.then(_e,ue)}catch(K){ue(K)}finally{T!==null&&D.types!==null&&(T.types=D.types),I.T=T}},H.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},H.use=function(u){return I.H.use(u)},H.useActionState=function(u,T,D){return I.H.useActionState(u,T,D)},H.useCallback=function(u,T){return I.H.useCallback(u,T)},H.useContext=function(u){return I.H.useContext(u)},H.useDebugValue=function(){},H.useDeferredValue=function(u,T){return I.H.useDeferredValue(u,T)},H.useEffect=function(u,T){return I.H.useEffect(u,T)},H.useEffectEvent=function(u){return I.H.useEffectEvent(u)},H.useId=function(){return I.H.useId()},H.useImperativeHandle=function(u,T,D){return I.H.useImperativeHandle(u,T,D)},H.useInsertionEffect=function(u,T){return I.H.useInsertionEffect(u,T)},H.useLayoutEffect=function(u,T){return I.H.useLayoutEffect(u,T)},H.useMemo=function(u,T){return I.H.useMemo(u,T)},H.useOptimistic=function(u,T){return I.H.useOptimistic(u,T)},H.useReducer=function(u,T,D){return I.H.useReducer(u,T,D)},H.useRef=function(u){return I.H.useRef(u)},H.useState=function(u){return I.H.useState(u)},H.useSyncExternalStore=function(u,T,D){return I.H.useSyncExternalStore(u,T,D)},H.useTransition=function(){return I.H.useTransition()},H.version="19.2.4",H}var vf;function fc(){return vf||(vf=1,rc.exports=Zp()),rc.exports}var dn=fc(),cc={exports:{}},wl={},sc={exports:{}},uc={};var Sf;function Kp(){return Sf||(Sf=1,(function(E){function W(S,A){var _=S.length;S.push(A);e:for(;0<_;){var ue=_-1>>>1,pe=S[ue];if(0<M(pe,A))S[ue]=A,S[_]=pe,_=ue;else break e}}function G(S){return S.length===0?null:S[0]}function h(S){if(S.length===0)return null;var A=S[0],_=S.pop();if(_!==A){S[0]=_;e:for(var ue=0,pe=S.length,u=pe>>>1;ue<u;){var T=2*(ue+1)-1,D=S[T],O=T+1,P=S[O];if(0>M(D,_))O<pe&&0>M(P,D)?(S[ue]=P,S[O]=_,ue=O):(S[ue]=D,S[T]=_,ue=T);else if(O<pe&&0>M(P,_))S[ue]=P,S[O]=_,ue=O;else break e}}return A}function M(S,A){var _=S.sortIndex-A.sortIndex;return _!==0?_:S.id-A.id}if(E.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var L=performance;E.unstable_now=function(){return L.now()}}else{var Y=Date,j=Y.now();E.unstable_now=function(){return Y.now()-j}}var x=[],w=[],Q=1,k=null,z=3,X=!1,F=!1,Z=!1,ye=!1,ae=typeof setTimeout=="function"?setTimeout:null,be=typeof clearTimeout=="function"?clearTimeout:null,ge=typeof setImmediate<"u"?setImmediate:null;function Ve(S){for(var A=G(w);A!==null;){if(A.callback===null)h(w);else if(A.startTime<=S)h(w),A.sortIndex=A.expirationTime,W(x,A);else break;A=G(w)}}function Ce(S){if(Z=!1,Ve(S),!F)if(G(x)!==null)F=!0,_e||(_e=!0,Ie());else{var A=G(w);A!==null&&wn(Ce,A.startTime-S)}}var _e=!1,I=-1,qe=5,An=-1;function Yt(){return ye?!0:!(E.unstable_now()-An<qe)}function Dn(){if(ye=!1,_e){var S=E.unstable_now();An=S;var A=!0;try{e:{F=!1,Z&&(Z=!1,be(I),I=-1),X=!0;var _=z;try{n:{for(Ve(S),k=G(x);k!==null&&!(k.expirationTime>S&&Yt());){var ue=k.callback;if(typeof ue=="function"){k.callback=null,z=k.priorityLevel;var pe=ue(k.expirationTime<=S);if(S=E.unstable_now(),typeof pe=="function"){k.callback=pe,Ve(S),A=!0;break n}k===G(x)&&h(x),Ve(S)}else h(x);k=G(x)}if(k!==null)A=!0;else{var u=G(w);u!==null&&wn(Ce,u.startTime-S),A=!1}}break e}finally{k=null,z=_,X=!1}A=void 0}}finally{A?Ie():_e=!1}}}var Ie;if(typeof ge=="function")Ie=function(){ge(Dn)};else if(typeof MessageChannel<"u"){var Tt=new MessageChannel,Bn=Tt.port2;Tt.port1.onmessage=Dn,Ie=function(){Bn.postMessage(null)}}else Ie=function(){ae(Dn,0)};function wn(S,A){I=ae(function(){S(E.unstable_now())},A)}E.unstable_IdlePriority=5,E.unstable_ImmediatePriority=1,E.unstable_LowPriority=4,E.unstable_NormalPriority=3,E.unstable_Profiling=null,E.unstable_UserBlockingPriority=2,E.unstable_cancelCallback=function(S){S.callback=null},E.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):qe=0<S?Math.floor(1e3/S):5},E.unstable_getCurrentPriorityLevel=function(){return z},E.unstable_next=function(S){switch(z){case 1:case 2:case 3:var A=3;break;default:A=z}var _=z;z=A;try{return S()}finally{z=_}},E.unstable_requestPaint=function(){ye=!0},E.unstable_runWithPriority=function(S,A){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var _=z;z=S;try{return A()}finally{z=_}},E.unstable_scheduleCallback=function(S,A,_){var ue=E.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?ue+_:ue):_=ue,S){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=_+pe,S={id:Q++,callback:A,priorityLevel:S,startTime:_,expirationTime:pe,sortIndex:-1},_>ue?(S.sortIndex=_,W(w,S),G(x)===null&&S===G(w)&&(Z?(be(I),I=-1):Z=!0,wn(Ce,_-ue))):(S.sortIndex=pe,W(x,S),F||X||(F=!0,_e||(_e=!0,Ie()))),S},E.unstable_shouldYield=Yt,E.unstable_wrapCallback=function(S){var A=z;return function(){var _=z;z=A;try{return S.apply(this,arguments)}finally{z=_}}}})(uc)),uc}var bf;function Jp(){return bf||(bf=1,sc.exports=Kp()),sc.exports}var dc={exports:{}},Pe={};var Cf;function $p(){if(Cf)return Pe;Cf=1;var E=fc();function W(x){var w="https://react.dev/errors/"+x;if(1<arguments.length){w+="?args[]="+encodeURIComponent(arguments[1]);for(var Q=2;Q<arguments.length;Q++)w+="&args[]="+encodeURIComponent(arguments[Q])}return"Minified React error #"+x+"; visit "+w+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function G(){}var h={d:{f:G,r:function(){throw Error(W(522))},D:G,C:G,L:G,m:G,X:G,S:G,M:G},p:0,findDOMNode:null},M=Symbol.for("react.portal");function L(x,w,Q){var k=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:M,key:k==null?null:""+k,children:x,containerInfo:w,implementation:Q}}var Y=E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(x,w){if(x==="font")return"";if(typeof w=="string")return w==="use-credentials"?w:""}return Pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,Pe.createPortal=function(x,w){var Q=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!w||w.nodeType!==1&&w.nodeType!==9&&w.nodeType!==11)throw Error(W(299));return L(x,w,null,Q)},Pe.flushSync=function(x){var w=Y.T,Q=h.p;try{if(Y.T=null,h.p=2,x)return x()}finally{Y.T=w,h.p=Q,h.d.f()}},Pe.preconnect=function(x,w){typeof x=="string"&&(w?(w=w.crossOrigin,w=typeof w=="string"?w==="use-credentials"?w:"":void 0):w=null,h.d.C(x,w))},Pe.prefetchDNS=function(x){typeof x=="string"&&h.d.D(x)},Pe.preinit=function(x,w){if(typeof x=="string"&&w&&typeof w.as=="string"){var Q=w.as,k=j(Q,w.crossOrigin),z=typeof w.integrity=="string"?w.integrity:void 0,X=typeof w.fetchPriority=="string"?w.fetchPriority:void 0;Q==="style"?h.d.S(x,typeof w.precedence=="string"?w.precedence:void 0,{crossOrigin:k,integrity:z,fetchPriority:X}):Q==="script"&&h.d.X(x,{crossOrigin:k,integrity:z,fetchPriority:X,nonce:typeof w.nonce=="string"?w.nonce:void 0})}},Pe.preinitModule=function(x,w){if(typeof x=="string")if(typeof w=="object"&&w!==null){if(w.as==null||w.as==="script"){var Q=j(w.as,w.crossOrigin);h.d.M(x,{crossOrigin:Q,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0})}}else w==null&&h.d.M(x)},Pe.preload=function(x,w){if(typeof x=="string"&&typeof w=="object"&&w!==null&&typeof w.as=="string"){var Q=w.as,k=j(Q,w.crossOrigin);h.d.L(x,Q,{crossOrigin:k,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0,type:typeof w.type=="string"?w.type:void 0,fetchPriority:typeof w.fetchPriority=="string"?w.fetchPriority:void 0,referrerPolicy:typeof w.referrerPolicy=="string"?w.referrerPolicy:void 0,imageSrcSet:typeof w.imageSrcSet=="string"?w.imageSrcSet:void 0,imageSizes:typeof w.imageSizes=="string"?w.imageSizes:void 0,media:typeof w.media=="string"?w.media:void 0})}},Pe.preloadModule=function(x,w){if(typeof x=="string")if(w){var Q=j(w.as,w.crossOrigin);h.d.m(x,{as:typeof w.as=="string"&&w.as!=="script"?w.as:void 0,crossOrigin:Q,integrity:typeof w.integrity=="string"?w.integrity:void 0})}else h.d.m(x)},Pe.requestFormReset=function(x){h.d.r(x)},Pe.unstable_batchedUpdates=function(x,w){return x(w)},Pe.useFormState=function(x,w,Q){return Y.H.useFormState(x,w,Q)},Pe.useFormStatus=function(){return Y.H.useHostTransitionStatus()},Pe.version="19.2.4",Pe}var wf;function em(){if(wf)return dc.exports;wf=1;function E(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E)}catch(W){console.error(W)}}return E(),dc.exports=$p(),dc.exports}var Tf;function nm(){if(Tf)return wl;Tf=1;var E=Jp(),W=fc(),G=em();function h(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function M(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function L(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Y(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function j(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function x(e){if(L(e)!==e)throw Error(h(188))}function w(e){var n=e.alternate;if(!n){if(n=L(e),n===null)throw Error(h(188));return n!==e?null:e}for(var t=e,a=n;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){t=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return x(l),e;if(i===a)return x(l),n;i=i.sibling}throw Error(h(188))}if(t.return!==a.return)t=l,a=i;else{for(var o=!1,r=l.child;r;){if(r===t){o=!0,t=l,a=i;break}if(r===a){o=!0,a=l,t=i;break}r=r.sibling}if(!o){for(r=i.child;r;){if(r===t){o=!0,t=i,a=l;break}if(r===a){o=!0,a=i,t=l;break}r=r.sibling}if(!o)throw Error(h(189))}}if(t.alternate!==a)throw Error(h(190))}if(t.tag!==3)throw Error(h(188));return t.stateNode.current===t?e:n}function Q(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=Q(e),n!==null)return n;e=e.sibling}return null}var k=Object.assign,z=Symbol.for("react.element"),X=Symbol.for("react.transitional.element"),F=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),ye=Symbol.for("react.strict_mode"),ae=Symbol.for("react.profiler"),be=Symbol.for("react.consumer"),ge=Symbol.for("react.context"),Ve=Symbol.for("react.forward_ref"),Ce=Symbol.for("react.suspense"),_e=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),An=Symbol.for("react.activity"),Yt=Symbol.for("react.memo_cache_sentinel"),Dn=Symbol.iterator;function Ie(e){return e===null||typeof e!="object"?null:(e=Dn&&e[Dn]||e["@@iterator"],typeof e=="function"?e:null)}var Tt=Symbol.for("react.client.reference");function Bn(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Tt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Z:return"Fragment";case ae:return"Profiler";case ye:return"StrictMode";case Ce:return"Suspense";case _e:return"SuspenseList";case An:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case F:return"Portal";case ge:return e.displayName||"Context";case be:return(e._context.displayName||"Context")+".Consumer";case Ve:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:Bn(e.type)||"Memo";case qe:n=e._payload,e=e._init;try{return Bn(e(n))}catch{}}return null}var wn=Array.isArray,S=W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=G.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_={pending:!1,data:null,method:null,action:null},ue=[],pe=-1;function u(e){return{current:e}}function T(e){0>pe||(e.current=ue[pe],ue[pe]=null,pe--)}function D(e,n){pe++,ue[pe]=e.current,e.current=n}var O=u(null),P=u(null),K=u(null),re=u(null);function Ye(e,n){switch(D(K,n),D(P,e),D(O,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Gd(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Gd(n),e=Ld(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}T(O),D(O,e)}function xe(){T(O),T(P),T(K)}function Ra(e){e.memoizedState!==null&&D(re,e);var n=O.current,t=Ld(n,e.type);n!==t&&(D(P,e),D(O,t))}function Tl(e){P.current===e&&(T(O),T(P)),re.current===e&&(T(re),gl._currentValue=_)}var Pi,hc;function Et(e){if(Pi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Pi=n&&n[1]||"",hc=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Pi+e+hc}var Vi=!1;function Yi(e,n){if(!e||Vi)return"";Vi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var C=function(){throw Error()};if(Object.defineProperty(C.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(C,[])}catch(g){var y=g}Reflect.construct(e,[],C)}else{try{C.call()}catch(g){y=g}e.call(C.prototype)}}else{try{throw Error()}catch(g){y=g}(C=e())&&typeof C.catch=="function"&&C.catch(function(){})}}catch(g){if(g&&y&&typeof g.stack=="string")return[g.stack,y.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),o=i[0],r=i[1];if(o&&r){var c=o.split(`
`),m=r.split(`
`);for(l=a=0;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;for(;l<m.length&&!m[l].includes("DetermineComponentFrameRoot");)l++;if(a===c.length||l===m.length)for(a=c.length-1,l=m.length-1;1<=a&&0<=l&&c[a]!==m[l];)l--;for(;1<=a&&0<=l;a--,l--)if(c[a]!==m[l]){if(a!==1||l!==1)do if(a--,l--,0>l||c[a]!==m[l]){var v=`
`+c[a].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),v}while(1<=a&&0<=l);break}}}finally{Vi=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Et(t):""}function xf(e,n){switch(e.tag){case 26:case 27:case 5:return Et(e.type);case 16:return Et("Lazy");case 13:return e.child!==n&&n!==null?Et("Suspense Fallback"):Et("Suspense");case 19:return Et("SuspenseList");case 0:case 15:return Yi(e.type,!1);case 11:return Yi(e.type.render,!1);case 1:return Yi(e.type,!0);case 31:return Et("Activity");default:return""}}function pc(e){try{var n="",t=null;do n+=xf(e,t),t=e,e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Fi=Object.prototype.hasOwnProperty,qi=E.unstable_scheduleCallback,Ii=E.unstable_cancelCallback,Af=E.unstable_shouldYield,Df=E.unstable_requestPaint,en=E.unstable_now,Rf=E.unstable_getCurrentPriorityLevel,mc=E.unstable_ImmediatePriority,yc=E.unstable_UserBlockingPriority,El=E.unstable_NormalPriority,Of=E.unstable_LowPriority,gc=E.unstable_IdlePriority,Nf=E.log,kf=E.unstable_setDisableYieldValue,Oa=null,nn=null;function Kn(e){if(typeof Nf=="function"&&kf(e),nn&&typeof nn.setStrictMode=="function")try{nn.setStrictMode(Oa,e)}catch{}}var tn=Math.clz32?Math.clz32:Uf,Bf=Math.log,Mf=Math.LN2;function Uf(e){return e>>>=0,e===0?32:31-(Bf(e)/Mf|0)|0}var xl=256,Al=262144,Dl=4194304;function xt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Rl(e,n,t){var a=e.pendingLanes;if(a===0)return 0;var l=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var r=a&134217727;return r!==0?(a=r&~i,a!==0?l=xt(a):(o&=r,o!==0?l=xt(o):t||(t=r&~e,t!==0&&(l=xt(t))))):(r=a&~i,r!==0?l=xt(r):o!==0?l=xt(o):t||(t=a&~e,t!==0&&(l=xt(t)))),l===0?0:n!==0&&n!==l&&(n&i)===0&&(i=l&-l,t=n&-n,i>=t||i===32&&(t&4194048)!==0)?n:l}function Na(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function _f(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vc(){var e=Dl;return Dl<<=1,(Dl&62914560)===0&&(Dl=4194304),e}function Xi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ka(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function zf(e,n,t,a,l,i){var o=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var r=e.entanglements,c=e.expirationTimes,m=e.hiddenUpdates;for(t=o&~t;0<t;){var v=31-tn(t),C=1<<v;r[v]=0,c[v]=-1;var y=m[v];if(y!==null)for(m[v]=null,v=0;v<y.length;v++){var g=y[v];g!==null&&(g.lane&=-536870913)}t&=~C}a!==0&&Sc(e,a,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(o&~n))}function Sc(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var a=31-tn(n);e.entangledLanes|=n,e.entanglements[a]=e.entanglements[a]|1073741824|t&261930}function bc(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-tn(t),l=1<<a;l&n|e[a]&n&&(e[a]|=n),t&=~l}}function Cc(e,n){var t=n&-n;return t=(t&42)!==0?1:Wi(t),(t&(e.suspendedLanes|n))!==0?0:t}function Wi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Qi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function wc(){var e=A.p;return e!==0?e:(e=window.event,e===void 0?32:cf(e.type))}function Tc(e,n){var t=A.p;try{return A.p=e,n()}finally{A.p=t}}var Jn=Math.random().toString(36).slice(2),ze="__reactFiber$"+Jn,Xe="__reactProps$"+Jn,Ft="__reactContainer$"+Jn,Zi="__reactEvents$"+Jn,Gf="__reactListeners$"+Jn,Lf="__reactHandles$"+Jn,Ec="__reactResources$"+Jn,Ba="__reactMarker$"+Jn;function Ki(e){delete e[ze],delete e[Xe],delete e[Zi],delete e[Gf],delete e[Lf]}function qt(e){var n=e[ze];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Ft]||t[ze]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=qd(e);e!==null;){if(t=e[ze])return t;e=qd(e)}return n}e=t,t=e.parentNode}return null}function It(e){if(e=e[ze]||e[Ft]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ma(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(h(33))}function Xt(e){var n=e[Ec];return n||(n=e[Ec]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Me(e){e[Ba]=!0}var xc=new Set,Ac={};function At(e,n){Wt(e,n),Wt(e+"Capture",n)}function Wt(e,n){for(Ac[e]=n,e=0;e<n.length;e++)xc.add(n[e])}var Hf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Dc={},Rc={};function jf(e){return Fi.call(Rc,e)?!0:Fi.call(Dc,e)?!1:Hf.test(e)?Rc[e]=!0:(Dc[e]=!0,!1)}function Ol(e,n,t){if(jf(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function Nl(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function Mn(e,n,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+a)}}function fn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Pf(e,n,t){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(o){t=""+o,i.call(this,o)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(o){t=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ji(e){if(!e._valueTracker){var n=Oc(e)?"checked":"value";e._valueTracker=Pf(e,n,""+e[n])}}function Nc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=Oc(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function kl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Vf=/[\n"\\]/g;function hn(e){return e.replace(Vf,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function $i(e,n,t,a,l,i,o,r){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),n!=null?o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+fn(n)):e.value!==""+fn(n)&&(e.value=""+fn(n)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),n!=null?eo(e,o,fn(n)):t!=null?eo(e,o,fn(t)):a!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.name=""+fn(r):e.removeAttribute("name")}function kc(e,n,t,a,l,i,o,r){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),n!=null||t!=null){if(!(i!=="submit"&&i!=="reset"||n!=null)){Ji(e);return}t=t!=null?""+fn(t):"",n=n!=null?""+fn(n):t,r||n===e.value||(e.value=n),e.defaultValue=n}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=r?e.checked:!!a,e.defaultChecked=!!a,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Ji(e)}function eo(e,n,t){n==="number"&&kl(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function Qt(e,n,t,a){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&a&&(e[t].defaultSelected=!0)}else{for(t=""+fn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function Bc(e,n,t){if(n!=null&&(n=""+fn(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+fn(t):""}function Mc(e,n,t,a){if(n==null){if(a!=null){if(t!=null)throw Error(h(92));if(wn(a)){if(1<a.length)throw Error(h(93));a=a[0]}t=a}t==null&&(t=""),n=t}t=fn(n),e.defaultValue=t,a=e.textContent,a===t&&a!==""&&a!==null&&(e.value=a),Ji(e)}function Zt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Yf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Uc(e,n,t){var a=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":a?e.setProperty(n,t):typeof t!="number"||t===0||Yf.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function _c(e,n,t){if(n!=null&&typeof n!="object")throw Error(h(62));if(e=e.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in n)a=n[l],n.hasOwnProperty(l)&&t[l]!==a&&Uc(e,l,a)}else for(var i in n)n.hasOwnProperty(i)&&Uc(e,i,n[i])}function no(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ff=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Bl(e){return qf.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Un(){}var to=null;function ao(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Kt=null,Jt=null;function zc(e){var n=It(e);if(n&&(e=n.stateNode)){var t=e[Xe]||null;e:switch(e=n.stateNode,n.type){case"input":if($i(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+hn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var l=a[Xe]||null;if(!l)throw Error(h(90));$i(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<t.length;n++)a=t[n],a.form===e.form&&Nc(a)}break e;case"textarea":Bc(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&Qt(e,!!t.multiple,n,!1)}}}var lo=!1;function Gc(e,n,t){if(lo)return e(n,t);lo=!0;try{var a=e(n);return a}finally{if(lo=!1,(Kt!==null||Jt!==null)&&(Si(),Kt&&(n=Kt,e=Jt,Jt=Kt=null,zc(n),e)))for(n=0;n<e.length;n++)zc(e[n])}}function Ua(e,n){var t=e.stateNode;if(t===null)return null;var a=t[Xe]||null;if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(h(231,n,typeof t));return t}var _n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),io=!1;if(_n)try{var _a={};Object.defineProperty(_a,"passive",{get:function(){io=!0}}),window.addEventListener("test",_a,_a),window.removeEventListener("test",_a,_a)}catch{io=!1}var $n=null,oo=null,Ml=null;function Lc(){if(Ml)return Ml;var e,n=oo,t=n.length,a,l="value"in $n?$n.value:$n.textContent,i=l.length;for(e=0;e<t&&n[e]===l[e];e++);var o=t-e;for(a=1;a<=o&&n[t-a]===l[i-a];a++);return Ml=l.slice(e,1<a?1-a:void 0)}function Ul(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function _l(){return!0}function Hc(){return!1}function We(e){function n(t,a,l,i,o){this._reactName=t,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var r in e)e.hasOwnProperty(r)&&(t=e[r],this[r]=t?t(i):i[r]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?_l:Hc,this.isPropagationStopped=Hc,this}return k(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=_l)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=_l)},persist:function(){},isPersistent:_l}),n}var Dt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zl=We(Dt),za=k({},Dt,{view:0,detail:0}),If=We(za),ro,co,Ga,Gl=k({},za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ga&&(Ga&&e.type==="mousemove"?(ro=e.screenX-Ga.screenX,co=e.screenY-Ga.screenY):co=ro=0,Ga=e),ro)},movementY:function(e){return"movementY"in e?e.movementY:co}}),jc=We(Gl),Xf=k({},Gl,{dataTransfer:0}),Wf=We(Xf),Qf=k({},za,{relatedTarget:0}),so=We(Qf),Zf=k({},Dt,{animationName:0,elapsedTime:0,pseudoElement:0}),Kf=We(Zf),Jf=k({},Dt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$f=We(Jf),eh=k({},Dt,{data:0}),Pc=We(eh),nh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},th={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ah={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ah[e])?!!n[e]:!1}function uo(){return lh}var ih=k({},za,{key:function(e){if(e.key){var n=nh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ul(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?th[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uo,charCode:function(e){return e.type==="keypress"?Ul(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ul(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),oh=We(ih),rh=k({},Gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vc=We(rh),ch=k({},za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uo}),sh=We(ch),uh=k({},Dt,{propertyName:0,elapsedTime:0,pseudoElement:0}),dh=We(uh),fh=k({},Gl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hh=We(fh),ph=k({},Dt,{newState:0,oldState:0}),mh=We(ph),yh=[9,13,27,32],fo=_n&&"CompositionEvent"in window,La=null;_n&&"documentMode"in document&&(La=document.documentMode);var gh=_n&&"TextEvent"in window&&!La,Yc=_n&&(!fo||La&&8<La&&11>=La),Fc=" ",qc=!1;function Ic(e,n){switch(e){case"keyup":return yh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $t=!1;function vh(e,n){switch(e){case"compositionend":return Xc(n);case"keypress":return n.which!==32?null:(qc=!0,Fc);case"textInput":return e=n.data,e===Fc&&qc?null:e;default:return null}}function Sh(e,n){if($t)return e==="compositionend"||!fo&&Ic(e,n)?(e=Lc(),Ml=oo=$n=null,$t=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Yc&&n.locale!=="ko"?null:n.data;default:return null}}var bh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!bh[e.type]:n==="textarea"}function Qc(e,n,t,a){Kt?Jt?Jt.push(a):Jt=[a]:Kt=a,n=Ai(n,"onChange"),0<n.length&&(t=new zl("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var Ha=null,ja=null;function Ch(e){kd(e,0)}function Ll(e){var n=Ma(e);if(Nc(n))return e}function Zc(e,n){if(e==="change")return n}var Kc=!1;if(_n){var ho;if(_n){var po="oninput"in document;if(!po){var Jc=document.createElement("div");Jc.setAttribute("oninput","return;"),po=typeof Jc.oninput=="function"}ho=po}else ho=!1;Kc=ho&&(!document.documentMode||9<document.documentMode)}function $c(){Ha&&(Ha.detachEvent("onpropertychange",es),ja=Ha=null)}function es(e){if(e.propertyName==="value"&&Ll(ja)){var n=[];Qc(n,ja,e,ao(e)),Gc(Ch,n)}}function wh(e,n,t){e==="focusin"?($c(),Ha=n,ja=t,Ha.attachEvent("onpropertychange",es)):e==="focusout"&&$c()}function Th(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ll(ja)}function Eh(e,n){if(e==="click")return Ll(n)}function xh(e,n){if(e==="input"||e==="change")return Ll(n)}function Ah(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var an=typeof Object.is=="function"?Object.is:Ah;function Pa(e,n){if(an(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var l=t[a];if(!Fi.call(n,l)||!an(e[l],n[l]))return!1}return!0}function ns(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ts(e,n){var t=ns(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ns(t)}}function as(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?as(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ls(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=kl(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=kl(e.document)}return n}function mo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Dh=_n&&"documentMode"in document&&11>=document.documentMode,ea=null,yo=null,Va=null,go=!1;function is(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;go||ea==null||ea!==kl(a)||(a=ea,"selectionStart"in a&&mo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Va&&Pa(Va,a)||(Va=a,a=Ai(yo,"onSelect"),0<a.length&&(n=new zl("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=ea)))}function Rt(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var na={animationend:Rt("Animation","AnimationEnd"),animationiteration:Rt("Animation","AnimationIteration"),animationstart:Rt("Animation","AnimationStart"),transitionrun:Rt("Transition","TransitionRun"),transitionstart:Rt("Transition","TransitionStart"),transitioncancel:Rt("Transition","TransitionCancel"),transitionend:Rt("Transition","TransitionEnd")},vo={},os={};_n&&(os=document.createElement("div").style,"AnimationEvent"in window||(delete na.animationend.animation,delete na.animationiteration.animation,delete na.animationstart.animation),"TransitionEvent"in window||delete na.transitionend.transition);function Ot(e){if(vo[e])return vo[e];if(!na[e])return e;var n=na[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in os)return vo[e]=n[t];return e}var rs=Ot("animationend"),cs=Ot("animationiteration"),ss=Ot("animationstart"),Rh=Ot("transitionrun"),Oh=Ot("transitionstart"),Nh=Ot("transitioncancel"),us=Ot("transitionend"),ds=new Map,So="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");So.push("scrollEnd");function Tn(e,n){ds.set(e,n),At(n,[e])}var Hl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},pn=[],ta=0,bo=0;function jl(){for(var e=ta,n=bo=ta=0;n<e;){var t=pn[n];pn[n++]=null;var a=pn[n];pn[n++]=null;var l=pn[n];pn[n++]=null;var i=pn[n];if(pn[n++]=null,a!==null&&l!==null){var o=a.pending;o===null?l.next=l:(l.next=o.next,o.next=l),a.pending=l}i!==0&&fs(t,l,i)}}function Pl(e,n,t,a){pn[ta++]=e,pn[ta++]=n,pn[ta++]=t,pn[ta++]=a,bo|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Co(e,n,t,a){return Pl(e,n,t,a),Vl(e)}function Nt(e,n){return Pl(e,null,null,n),Vl(e)}function fs(e,n,t){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t);for(var l=!1,i=e.return;i!==null;)i.childLanes|=t,a=i.alternate,a!==null&&(a.childLanes|=t),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&n!==null&&(l=31-tn(t),e=i.hiddenUpdates,a=e[l],a===null?e[l]=[n]:a.push(n),n.lane=t|536870912),i):null}function Vl(e){if(50<ul)throw ul=0,Nr=null,Error(h(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var aa={};function kh(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ln(e,n,t,a){return new kh(e,n,t,a)}function wo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zn(e,n){var t=e.alternate;return t===null?(t=ln(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function hs(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Yl(e,n,t,a,l,i){var o=0;if(a=e,typeof e=="function")wo(e)&&(o=1);else if(typeof e=="string")o=zp(e,t,O.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case An:return e=ln(31,t,n,l),e.elementType=An,e.lanes=i,e;case Z:return kt(t.children,l,i,n);case ye:o=8,l|=24;break;case ae:return e=ln(12,t,n,l|2),e.elementType=ae,e.lanes=i,e;case Ce:return e=ln(13,t,n,l),e.elementType=Ce,e.lanes=i,e;case _e:return e=ln(19,t,n,l),e.elementType=_e,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ge:o=10;break e;case be:o=9;break e;case Ve:o=11;break e;case I:o=14;break e;case qe:o=16,a=null;break e}o=29,t=Error(h(130,e===null?"null":typeof e,"")),a=null}return n=ln(o,t,n,l),n.elementType=e,n.type=a,n.lanes=i,n}function kt(e,n,t,a){return e=ln(7,e,a,n),e.lanes=t,e}function To(e,n,t){return e=ln(6,e,null,n),e.lanes=t,e}function ps(e){var n=ln(18,null,null,0);return n.stateNode=e,n}function Eo(e,n,t){return n=ln(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var ms=new WeakMap;function mn(e,n){if(typeof e=="object"&&e!==null){var t=ms.get(e);return t!==void 0?t:(n={value:e,source:n,stack:pc(n)},ms.set(e,n),n)}return{value:e,source:n,stack:pc(n)}}var la=[],ia=0,Fl=null,Ya=0,yn=[],gn=0,et=null,Rn=1,On="";function Gn(e,n){la[ia++]=Ya,la[ia++]=Fl,Fl=e,Ya=n}function ys(e,n,t){yn[gn++]=Rn,yn[gn++]=On,yn[gn++]=et,et=e;var a=Rn;e=On;var l=32-tn(a)-1;a&=~(1<<l),t+=1;var i=32-tn(n)+l;if(30<i){var o=l-l%5;i=(a&(1<<o)-1).toString(32),a>>=o,l-=o,Rn=1<<32-tn(n)+l|t<<l|a,On=i+e}else Rn=1<<i|t<<l|a,On=e}function xo(e){e.return!==null&&(Gn(e,1),ys(e,1,0))}function Ao(e){for(;e===Fl;)Fl=la[--ia],la[ia]=null,Ya=la[--ia],la[ia]=null;for(;e===et;)et=yn[--gn],yn[gn]=null,On=yn[--gn],yn[gn]=null,Rn=yn[--gn],yn[gn]=null}function gs(e,n){yn[gn++]=Rn,yn[gn++]=On,yn[gn++]=et,Rn=n.id,On=n.overflow,et=e}var Ge=null,ve=null,te=!1,nt=null,vn=!1,Do=Error(h(519));function tt(e){var n=Error(h(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Fa(mn(n,e)),Do}function vs(e){var n=e.stateNode,t=e.type,a=e.memoizedProps;switch(n[ze]=e,n[Xe]=a,t){case"dialog":$("cancel",n),$("close",n);break;case"iframe":case"object":case"embed":$("load",n);break;case"video":case"audio":for(t=0;t<fl.length;t++)$(fl[t],n);break;case"source":$("error",n);break;case"img":case"image":case"link":$("error",n),$("load",n);break;case"details":$("toggle",n);break;case"input":$("invalid",n),kc(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":$("invalid",n);break;case"textarea":$("invalid",n),Mc(n,a.value,a.defaultValue,a.children)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||a.suppressHydrationWarning===!0||_d(n.textContent,t)?(a.popover!=null&&($("beforetoggle",n),$("toggle",n)),a.onScroll!=null&&$("scroll",n),a.onScrollEnd!=null&&$("scrollend",n),a.onClick!=null&&(n.onclick=Un),n=!0):n=!1,n||tt(e,!0)}function Ss(e){for(Ge=e.return;Ge;)switch(Ge.tag){case 5:case 31:case 13:vn=!1;return;case 27:case 3:vn=!0;return;default:Ge=Ge.return}}function oa(e){if(e!==Ge)return!1;if(!te)return Ss(e),te=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||qr(e.type,e.memoizedProps)),t=!t),t&&ve&&tt(e),Ss(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));ve=Fd(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));ve=Fd(e)}else n===27?(n=ve,yt(e.type)?(e=Zr,Zr=null,ve=e):ve=n):ve=Ge?bn(e.stateNode.nextSibling):null;return!0}function Bt(){ve=Ge=null,te=!1}function Ro(){var e=nt;return e!==null&&(Je===null?Je=e:Je.push.apply(Je,e),nt=null),e}function Fa(e){nt===null?nt=[e]:nt.push(e)}var Oo=u(null),Mt=null,Ln=null;function at(e,n,t){D(Oo,n._currentValue),n._currentValue=t}function Hn(e){e._currentValue=Oo.current,T(Oo)}function No(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function ko(e,n,t,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var o=l.child;i=i.firstContext;e:for(;i!==null;){var r=i;i=l;for(var c=0;c<n.length;c++)if(r.context===n[c]){i.lanes|=t,r=i.alternate,r!==null&&(r.lanes|=t),No(i.return,t,e),a||(o=null);break e}i=r.next}}else if(l.tag===18){if(o=l.return,o===null)throw Error(h(341));o.lanes|=t,i=o.alternate,i!==null&&(i.lanes|=t),No(o,t,e),o=null}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===e){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}}function ra(e,n,t,a){e=null;for(var l=n,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var o=l.alternate;if(o===null)throw Error(h(387));if(o=o.memoizedProps,o!==null){var r=l.type;an(l.pendingProps.value,o.value)||(e!==null?e.push(r):e=[r])}}else if(l===re.current){if(o=l.alternate,o===null)throw Error(h(387));o.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(gl):e=[gl])}l=l.return}e!==null&&ko(n,e,t,a),n.flags|=262144}function ql(e){for(e=e.firstContext;e!==null;){if(!an(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ut(e){Mt=e,Ln=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Le(e){return bs(Mt,e)}function Il(e,n){return Mt===null&&Ut(e),bs(e,n)}function bs(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},Ln===null){if(e===null)throw Error(h(308));Ln=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ln=Ln.next=n;return t}var Bh=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,a){e.push(a)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},Mh=E.unstable_scheduleCallback,Uh=E.unstable_NormalPriority,Re={$$typeof:ge,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bo(){return{controller:new Bh,data:new Map,refCount:0}}function qa(e){e.refCount--,e.refCount===0&&Mh(Uh,function(){e.controller.abort()})}var Ia=null,Mo=0,ca=0,sa=null;function _h(e,n){if(Ia===null){var t=Ia=[];Mo=0,ca=zr(),sa={status:"pending",value:void 0,then:function(a){t.push(a)}}}return Mo++,n.then(Cs,Cs),n}function Cs(){if(--Mo===0&&Ia!==null){sa!==null&&(sa.status="fulfilled");var e=Ia;Ia=null,ca=0,sa=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function zh(e,n){var t=[],a={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return e.then(function(){a.status="fulfilled",a.value=n;for(var l=0;l<t.length;l++)(0,t[l])(n)},function(l){for(a.status="rejected",a.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),a}var ws=S.S;S.S=function(e,n){id=en(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&_h(e,n),ws!==null&&ws(e,n)};var _t=u(null);function Uo(){var e=_t.current;return e!==null?e:me.pooledCache}function Xl(e,n){n===null?D(_t,_t.current):D(_t,n.pool)}function Ts(){var e=Uo();return e===null?null:{parent:Re._currentValue,pool:e}}var ua=Error(h(460)),_o=Error(h(474)),Wl=Error(h(542)),Ql={then:function(){}};function Es(e){return e=e.status,e==="fulfilled"||e==="rejected"}function xs(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(Un,Un),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ds(e),e;default:if(typeof n.status=="string")n.then(Un,Un);else{if(e=me,e!==null&&100<e.shellSuspendCounter)throw Error(h(482));e=n,e.status="pending",e.then(function(a){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=a}},function(a){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ds(e),e}throw Gt=n,ua}}function zt(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Gt=t,ua):t}}var Gt=null;function As(){if(Gt===null)throw Error(h(459));var e=Gt;return Gt=null,e}function Ds(e){if(e===ua||e===Wl)throw Error(h(483))}var da=null,Xa=0;function Zl(e){var n=Xa;return Xa+=1,da===null&&(da=[]),xs(da,e,n)}function Wa(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Kl(e,n){throw n.$$typeof===z?Error(h(525)):(e=Object.prototype.toString.call(n),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Rs(e){function n(d,s){if(e){var p=d.deletions;p===null?(d.deletions=[s],d.flags|=16):p.push(s)}}function t(d,s){if(!e)return null;for(;s!==null;)n(d,s),s=s.sibling;return null}function a(d){for(var s=new Map;d!==null;)d.key!==null?s.set(d.key,d):s.set(d.index,d),d=d.sibling;return s}function l(d,s){return d=zn(d,s),d.index=0,d.sibling=null,d}function i(d,s,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<s?(d.flags|=67108866,s):p):(d.flags|=67108866,s)):(d.flags|=1048576,s)}function o(d){return e&&d.alternate===null&&(d.flags|=67108866),d}function r(d,s,p,b){return s===null||s.tag!==6?(s=To(p,d.mode,b),s.return=d,s):(s=l(s,p),s.return=d,s)}function c(d,s,p,b){var B=p.type;return B===Z?v(d,s,p.props.children,b,p.key):s!==null&&(s.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===qe&&zt(B)===s.type)?(s=l(s,p.props),Wa(s,p),s.return=d,s):(s=Yl(p.type,p.key,p.props,null,d.mode,b),Wa(s,p),s.return=d,s)}function m(d,s,p,b){return s===null||s.tag!==4||s.stateNode.containerInfo!==p.containerInfo||s.stateNode.implementation!==p.implementation?(s=Eo(p,d.mode,b),s.return=d,s):(s=l(s,p.children||[]),s.return=d,s)}function v(d,s,p,b,B){return s===null||s.tag!==7?(s=kt(p,d.mode,b,B),s.return=d,s):(s=l(s,p),s.return=d,s)}function C(d,s,p){if(typeof s=="string"&&s!==""||typeof s=="number"||typeof s=="bigint")return s=To(""+s,d.mode,p),s.return=d,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case X:return p=Yl(s.type,s.key,s.props,null,d.mode,p),Wa(p,s),p.return=d,p;case F:return s=Eo(s,d.mode,p),s.return=d,s;case qe:return s=zt(s),C(d,s,p)}if(wn(s)||Ie(s))return s=kt(s,d.mode,p,null),s.return=d,s;if(typeof s.then=="function")return C(d,Zl(s),p);if(s.$$typeof===ge)return C(d,Il(d,s),p);Kl(d,s)}return null}function y(d,s,p,b){var B=s!==null?s.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return B!==null?null:r(d,s,""+p,b);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case X:return p.key===B?c(d,s,p,b):null;case F:return p.key===B?m(d,s,p,b):null;case qe:return p=zt(p),y(d,s,p,b)}if(wn(p)||Ie(p))return B!==null?null:v(d,s,p,b,null);if(typeof p.then=="function")return y(d,s,Zl(p),b);if(p.$$typeof===ge)return y(d,s,Il(d,p),b);Kl(d,p)}return null}function g(d,s,p,b,B){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return d=d.get(p)||null,r(s,d,""+b,B);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case X:return d=d.get(b.key===null?p:b.key)||null,c(s,d,b,B);case F:return d=d.get(b.key===null?p:b.key)||null,m(s,d,b,B);case qe:return b=zt(b),g(d,s,p,b,B)}if(wn(b)||Ie(b))return d=d.get(p)||null,v(s,d,b,B,null);if(typeof b.then=="function")return g(d,s,p,Zl(b),B);if(b.$$typeof===ge)return g(d,s,p,Il(s,b),B);Kl(s,b)}return null}function R(d,s,p,b){for(var B=null,le=null,N=s,q=s=0,ne=null;N!==null&&q<p.length;q++){N.index>q?(ne=N,N=null):ne=N.sibling;var ie=y(d,N,p[q],b);if(ie===null){N===null&&(N=ne);break}e&&N&&ie.alternate===null&&n(d,N),s=i(ie,s,q),le===null?B=ie:le.sibling=ie,le=ie,N=ne}if(q===p.length)return t(d,N),te&&Gn(d,q),B;if(N===null){for(;q<p.length;q++)N=C(d,p[q],b),N!==null&&(s=i(N,s,q),le===null?B=N:le.sibling=N,le=N);return te&&Gn(d,q),B}for(N=a(N);q<p.length;q++)ne=g(N,d,q,p[q],b),ne!==null&&(e&&ne.alternate!==null&&N.delete(ne.key===null?q:ne.key),s=i(ne,s,q),le===null?B=ne:le.sibling=ne,le=ne);return e&&N.forEach(function(Ct){return n(d,Ct)}),te&&Gn(d,q),B}function U(d,s,p,b){if(p==null)throw Error(h(151));for(var B=null,le=null,N=s,q=s=0,ne=null,ie=p.next();N!==null&&!ie.done;q++,ie=p.next()){N.index>q?(ne=N,N=null):ne=N.sibling;var Ct=y(d,N,ie.value,b);if(Ct===null){N===null&&(N=ne);break}e&&N&&Ct.alternate===null&&n(d,N),s=i(Ct,s,q),le===null?B=Ct:le.sibling=Ct,le=Ct,N=ne}if(ie.done)return t(d,N),te&&Gn(d,q),B;if(N===null){for(;!ie.done;q++,ie=p.next())ie=C(d,ie.value,b),ie!==null&&(s=i(ie,s,q),le===null?B=ie:le.sibling=ie,le=ie);return te&&Gn(d,q),B}for(N=a(N);!ie.done;q++,ie=p.next())ie=g(N,d,q,ie.value,b),ie!==null&&(e&&ie.alternate!==null&&N.delete(ie.key===null?q:ie.key),s=i(ie,s,q),le===null?B=ie:le.sibling=ie,le=ie);return e&&N.forEach(function(Xp){return n(d,Xp)}),te&&Gn(d,q),B}function he(d,s,p,b){if(typeof p=="object"&&p!==null&&p.type===Z&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case X:e:{for(var B=p.key;s!==null;){if(s.key===B){if(B=p.type,B===Z){if(s.tag===7){t(d,s.sibling),b=l(s,p.props.children),b.return=d,d=b;break e}}else if(s.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===qe&&zt(B)===s.type){t(d,s.sibling),b=l(s,p.props),Wa(b,p),b.return=d,d=b;break e}t(d,s);break}else n(d,s);s=s.sibling}p.type===Z?(b=kt(p.props.children,d.mode,b,p.key),b.return=d,d=b):(b=Yl(p.type,p.key,p.props,null,d.mode,b),Wa(b,p),b.return=d,d=b)}return o(d);case F:e:{for(B=p.key;s!==null;){if(s.key===B)if(s.tag===4&&s.stateNode.containerInfo===p.containerInfo&&s.stateNode.implementation===p.implementation){t(d,s.sibling),b=l(s,p.children||[]),b.return=d,d=b;break e}else{t(d,s);break}else n(d,s);s=s.sibling}b=Eo(p,d.mode,b),b.return=d,d=b}return o(d);case qe:return p=zt(p),he(d,s,p,b)}if(wn(p))return R(d,s,p,b);if(Ie(p)){if(B=Ie(p),typeof B!="function")throw Error(h(150));return p=B.call(p),U(d,s,p,b)}if(typeof p.then=="function")return he(d,s,Zl(p),b);if(p.$$typeof===ge)return he(d,s,Il(d,p),b);Kl(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,s!==null&&s.tag===6?(t(d,s.sibling),b=l(s,p),b.return=d,d=b):(t(d,s),b=To(p,d.mode,b),b.return=d,d=b),o(d)):t(d,s)}return function(d,s,p,b){try{Xa=0;var B=he(d,s,p,b);return da=null,B}catch(N){if(N===ua||N===Wl)throw N;var le=ln(29,N,null,d.mode);return le.lanes=b,le.return=d,le}}}var Lt=Rs(!0),Os=Rs(!1),lt=!1;function zo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Go(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function it(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ot(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(oe&2)!==0){var l=a.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),a.pending=n,n=Vl(e),fs(e,null,t),n}return Pl(e,a,n,t),Vl(e)}function Qa(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,bc(e,t)}}function Lo(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};i===null?l=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?l=i=n:i=i.next=n}else l=i=n;t={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var Ho=!1;function Za(){if(Ho){var e=sa;if(e!==null)throw e}}function Ka(e,n,t,a){Ho=!1;var l=e.updateQueue;lt=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,r=l.shared.pending;if(r!==null){l.shared.pending=null;var c=r,m=c.next;c.next=null,o===null?i=m:o.next=m,o=c;var v=e.alternate;v!==null&&(v=v.updateQueue,r=v.lastBaseUpdate,r!==o&&(r===null?v.firstBaseUpdate=m:r.next=m,v.lastBaseUpdate=c))}if(i!==null){var C=l.baseState;o=0,v=m=c=null,r=i;do{var y=r.lane&-536870913,g=y!==r.lane;if(g?(ee&y)===y:(a&y)===y){y!==0&&y===ca&&(Ho=!0),v!==null&&(v=v.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});e:{var R=e,U=r;y=n;var he=t;switch(U.tag){case 1:if(R=U.payload,typeof R=="function"){C=R.call(he,C,y);break e}C=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=U.payload,y=typeof R=="function"?R.call(he,C,y):R,y==null)break e;C=k({},C,y);break e;case 2:lt=!0}}y=r.callback,y!==null&&(e.flags|=64,g&&(e.flags|=8192),g=l.callbacks,g===null?l.callbacks=[y]:g.push(y))}else g={lane:y,tag:r.tag,payload:r.payload,callback:r.callback,next:null},v===null?(m=v=g,c=C):v=v.next=g,o|=y;if(r=r.next,r===null){if(r=l.shared.pending,r===null)break;g=r,r=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);v===null&&(c=C),l.baseState=c,l.firstBaseUpdate=m,l.lastBaseUpdate=v,i===null&&(l.shared.lanes=0),dt|=o,e.lanes=o,e.memoizedState=C}}function Ns(e,n){if(typeof e!="function")throw Error(h(191,e));e.call(n)}function ks(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Ns(t[e],n)}var fa=u(null),Jl=u(0);function Bs(e,n){e=Wn,D(Jl,e),D(fa,n),Wn=e|n.baseLanes}function jo(){D(Jl,Wn),D(fa,fa.current)}function Po(){Wn=Jl.current,T(fa),T(Jl)}var on=u(null),Sn=null;function rt(e){var n=e.alternate;D(Ae,Ae.current&1),D(on,e),Sn===null&&(n===null||fa.current!==null||n.memoizedState!==null)&&(Sn=e)}function Vo(e){D(Ae,Ae.current),D(on,e),Sn===null&&(Sn=e)}function Ms(e){e.tag===22?(D(Ae,Ae.current),D(on,e),Sn===null&&(Sn=e)):ct()}function ct(){D(Ae,Ae.current),D(on,on.current)}function rn(e){T(on),Sn===e&&(Sn=null),T(Ae)}var Ae=u(0);function $l(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Wr(t)||Qr(t)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var jn=0,V=null,de=null,Oe=null,ei=!1,ha=!1,Ht=!1,ni=0,Ja=0,pa=null,Gh=0;function Te(){throw Error(h(321))}function Yo(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!an(e[t],n[t]))return!1;return!0}function Fo(e,n,t,a,l,i){return jn=i,V=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,S.H=e===null||e.memoizedState===null?yu:ir,Ht=!1,i=t(a,l),Ht=!1,ha&&(i=_s(n,t,a,l)),Us(e),i}function Us(e){S.H=nl;var n=de!==null&&de.next!==null;if(jn=0,Oe=de=V=null,ei=!1,Ja=0,pa=null,n)throw Error(h(300));e===null||Ne||(e=e.dependencies,e!==null&&ql(e)&&(Ne=!0))}function _s(e,n,t,a){V=e;var l=0;do{if(ha&&(pa=null),Ja=0,ha=!1,25<=l)throw Error(h(301));if(l+=1,Oe=de=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}S.H=gu,i=n(t,a)}while(ha);return i}function Lh(){var e=S.H,n=e.useState()[0];return n=typeof n.then=="function"?$a(n):n,e=e.useState()[0],(de!==null?de.memoizedState:null)!==e&&(V.flags|=1024),n}function qo(){var e=ni!==0;return ni=0,e}function Io(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function Xo(e){if(ei){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ei=!1}jn=0,Oe=de=V=null,ha=!1,Ja=ni=0,pa=null}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?V.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function De(){if(de===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var n=Oe===null?V.memoizedState:Oe.next;if(n!==null)Oe=n,de=e;else{if(e===null)throw V.alternate===null?Error(h(467)):Error(h(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},Oe===null?V.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function ti(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $a(e){var n=Ja;return Ja+=1,pa===null&&(pa=[]),e=xs(pa,e,n),n=V,(Oe===null?n.memoizedState:Oe.next)===null&&(n=n.alternate,S.H=n===null||n.memoizedState===null?yu:ir),e}function ai(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return $a(e);if(e.$$typeof===ge)return Le(e)}throw Error(h(438,String(e)))}function Wo(e){var n=null,t=V.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var a=V.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=ti(),V.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),a=0;a<e;a++)t[a]=Yt;return n.index++,t}function Pn(e,n){return typeof n=="function"?n(e):n}function li(e){var n=De();return Qo(n,de,e)}function Qo(e,n,t){var a=e.queue;if(a===null)throw Error(h(311));a.lastRenderedReducer=t;var l=e.baseQueue,i=a.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}n.baseQueue=l=i,a.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{n=l.next;var r=o=null,c=null,m=n,v=!1;do{var C=m.lane&-536870913;if(C!==m.lane?(ee&C)===C:(jn&C)===C){var y=m.revertLane;if(y===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),C===ca&&(v=!0);else if((jn&y)===y){m=m.next,y===ca&&(v=!0);continue}else C={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},c===null?(r=c=C,o=i):c=c.next=C,V.lanes|=y,dt|=y;C=m.action,Ht&&t(i,C),i=m.hasEagerState?m.eagerState:t(i,C)}else y={lane:C,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},c===null?(r=c=y,o=i):c=c.next=y,V.lanes|=C,dt|=C;m=m.next}while(m!==null&&m!==n);if(c===null?o=i:c.next=r,!an(i,e.memoizedState)&&(Ne=!0,v&&(t=sa,t!==null)))throw t;e.memoizedState=i,e.baseState=o,e.baseQueue=c,a.lastRenderedState=i}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Zo(e){var n=De(),t=n.queue;if(t===null)throw Error(h(311));t.lastRenderedReducer=e;var a=t.dispatch,l=t.pending,i=n.memoizedState;if(l!==null){t.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);an(i,n.memoizedState)||(Ne=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,a]}function zs(e,n,t){var a=V,l=De(),i=te;if(i){if(t===void 0)throw Error(h(407));t=t()}else t=n();var o=!an((de||l).memoizedState,t);if(o&&(l.memoizedState=t,Ne=!0),l=l.queue,$o(Hs.bind(null,a,l,e),[e]),l.getSnapshot!==n||o||Oe!==null&&Oe.memoizedState.tag&1){if(a.flags|=2048,ma(9,{destroy:void 0},Ls.bind(null,a,l,t,n),null),me===null)throw Error(h(349));i||(jn&127)!==0||Gs(a,n,t)}return t}function Gs(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=V.updateQueue,n===null?(n=ti(),V.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Ls(e,n,t,a){n.value=t,n.getSnapshot=a,js(n)&&Ps(e)}function Hs(e,n,t){return t(function(){js(n)&&Ps(e)})}function js(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!an(e,t)}catch{return!0}}function Ps(e){var n=Nt(e,2);n!==null&&$e(n,e,2)}function Ko(e){var n=Fe();if(typeof e=="function"){var t=e;if(e=t(),Ht){Kn(!0);try{t()}finally{Kn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pn,lastRenderedState:e},n}function Vs(e,n,t,a){return e.baseState=t,Qo(e,de,typeof a=="function"?a:Pn)}function Hh(e,n,t,a,l){if(ri(e))throw Error(h(485));if(e=n.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};S.T!==null?t(!0):i.isTransition=!1,a(i),t=n.pending,t===null?(i.next=n.pending=i,Ys(n,i)):(i.next=t.next,n.pending=t.next=i)}}function Ys(e,n){var t=n.action,a=n.payload,l=e.state;if(n.isTransition){var i=S.T,o={};S.T=o;try{var r=t(l,a),c=S.S;c!==null&&c(o,r),Fs(e,n,r)}catch(m){Jo(e,n,m)}finally{i!==null&&o.types!==null&&(i.types=o.types),S.T=i}}else try{i=t(l,a),Fs(e,n,i)}catch(m){Jo(e,n,m)}}function Fs(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){qs(e,n,a)},function(a){return Jo(e,n,a)}):qs(e,n,t)}function qs(e,n,t){n.status="fulfilled",n.value=t,Is(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,Ys(e,t)))}function Jo(e,n,t){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=t,Is(n),n=n.next;while(n!==a)}e.action=null}function Is(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Xs(e,n){return n}function Ws(e,n){if(te){var t=me.formState;if(t!==null){e:{var a=V;if(te){if(ve){n:{for(var l=ve,i=vn;l.nodeType!==8;){if(!i){l=null;break n}if(l=bn(l.nextSibling),l===null){l=null;break n}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){ve=bn(l.nextSibling),a=l.data==="F!";break e}}tt(a)}a=!1}a&&(n=t[0])}}return t=Fe(),t.memoizedState=t.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xs,lastRenderedState:n},t.queue=a,t=hu.bind(null,V,a),a.dispatch=t,a=Ko(!1),i=lr.bind(null,V,!1,a.queue),a=Fe(),l={state:n,dispatch:null,action:e,pending:null},a.queue=l,t=Hh.bind(null,V,l,i,t),l.dispatch=t,a.memoizedState=e,[n,t,!1]}function Qs(e){var n=De();return Zs(n,de,e)}function Zs(e,n,t){if(n=Qo(e,n,Xs)[0],e=li(Pn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var a=$a(n)}catch(o){throw o===ua?Wl:o}else a=n;n=De();var l=n.queue,i=l.dispatch;return t!==n.memoizedState&&(V.flags|=2048,ma(9,{destroy:void 0},jh.bind(null,l,t),null)),[a,i,e]}function jh(e,n){e.action=n}function Ks(e){var n=De(),t=de;if(t!==null)return Zs(n,t,e);De(),n=n.memoizedState,t=De();var a=t.queue.dispatch;return t.memoizedState=e,[n,a,!1]}function ma(e,n,t,a){return e={tag:e,create:t,deps:a,inst:n,next:null},n=V.updateQueue,n===null&&(n=ti(),V.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e),e}function Js(){return De().memoizedState}function ii(e,n,t,a){var l=Fe();V.flags|=e,l.memoizedState=ma(1|n,{destroy:void 0},t,a===void 0?null:a)}function oi(e,n,t,a){var l=De();a=a===void 0?null:a;var i=l.memoizedState.inst;de!==null&&a!==null&&Yo(a,de.memoizedState.deps)?l.memoizedState=ma(n,i,t,a):(V.flags|=e,l.memoizedState=ma(1|n,i,t,a))}function $s(e,n){ii(8390656,8,e,n)}function $o(e,n){oi(2048,8,e,n)}function Ph(e){V.flags|=4;var n=V.updateQueue;if(n===null)n=ti(),V.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function eu(e){var n=De().memoizedState;return Ph({ref:n,nextImpl:e}),function(){if((oe&2)!==0)throw Error(h(440));return n.impl.apply(void 0,arguments)}}function nu(e,n){return oi(4,2,e,n)}function tu(e,n){return oi(4,4,e,n)}function au(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function lu(e,n,t){t=t!=null?t.concat([e]):null,oi(4,4,au.bind(null,n,e),t)}function er(){}function iu(e,n){var t=De();n=n===void 0?null:n;var a=t.memoizedState;return n!==null&&Yo(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function ou(e,n){var t=De();n=n===void 0?null:n;var a=t.memoizedState;if(n!==null&&Yo(n,a[1]))return a[0];if(a=e(),Ht){Kn(!0);try{e()}finally{Kn(!1)}}return t.memoizedState=[a,n],a}function nr(e,n,t){return t===void 0||(jn&1073741824)!==0&&(ee&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=rd(),V.lanes|=e,dt|=e,t)}function ru(e,n,t,a){return an(t,n)?t:fa.current!==null?(e=nr(e,t,a),an(e,n)||(Ne=!0),e):(jn&42)===0||(jn&1073741824)!==0&&(ee&261930)===0?(Ne=!0,e.memoizedState=t):(e=rd(),V.lanes|=e,dt|=e,n)}function cu(e,n,t,a,l){var i=A.p;A.p=i!==0&&8>i?i:8;var o=S.T,r={};S.T=r,lr(e,!1,n,t);try{var c=l(),m=S.S;if(m!==null&&m(r,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var v=zh(c,a);el(e,n,v,un(e))}else el(e,n,a,un(e))}catch(C){el(e,n,{then:function(){},status:"rejected",reason:C},un())}finally{A.p=i,o!==null&&r.types!==null&&(o.types=r.types),S.T=o}}function Vh(){}function tr(e,n,t,a){if(e.tag!==5)throw Error(h(476));var l=su(e).queue;cu(e,l,n,_,t===null?Vh:function(){return uu(e),t(a)})}function su(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:_,baseState:_,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pn,lastRenderedState:_},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pn,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function uu(e){var n=su(e);n.next===null&&(n=e.alternate.memoizedState),el(e,n.next.queue,{},un())}function ar(){return Le(gl)}function du(){return De().memoizedState}function fu(){return De().memoizedState}function Yh(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=un();e=it(t);var a=ot(n,e,t);a!==null&&($e(a,n,t),Qa(a,n,t)),n={cache:Bo()},e.payload=n;return}n=n.return}}function Fh(e,n,t){var a=un();t={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},ri(e)?pu(n,t):(t=Co(e,n,t,a),t!==null&&($e(t,e,a),mu(t,n,a)))}function hu(e,n,t){var a=un();el(e,n,t,a)}function el(e,n,t,a){var l={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(ri(e))pu(n,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,r=i(o,t);if(l.hasEagerState=!0,l.eagerState=r,an(r,o))return Pl(e,n,l,0),me===null&&jl(),!1}catch{}if(t=Co(e,n,l,a),t!==null)return $e(t,e,a),mu(t,n,a),!0}return!1}function lr(e,n,t,a){if(a={lane:2,revertLane:zr(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ri(e)){if(n)throw Error(h(479))}else n=Co(e,t,a,2),n!==null&&$e(n,e,2)}function ri(e){var n=e.alternate;return e===V||n!==null&&n===V}function pu(e,n){ha=ei=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function mu(e,n,t){if((t&4194048)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,bc(e,t)}}var nl={readContext:Le,use:ai,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useLayoutEffect:Te,useInsertionEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useSyncExternalStore:Te,useId:Te,useHostTransitionStatus:Te,useFormState:Te,useActionState:Te,useOptimistic:Te,useMemoCache:Te,useCacheRefresh:Te};nl.useEffectEvent=Te;var yu={readContext:Le,use:ai,useCallback:function(e,n){return Fe().memoizedState=[e,n===void 0?null:n],e},useContext:Le,useEffect:$s,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,ii(4194308,4,au.bind(null,n,e),t)},useLayoutEffect:function(e,n){return ii(4194308,4,e,n)},useInsertionEffect:function(e,n){ii(4,2,e,n)},useMemo:function(e,n){var t=Fe();n=n===void 0?null:n;var a=e();if(Ht){Kn(!0);try{e()}finally{Kn(!1)}}return t.memoizedState=[a,n],a},useReducer:function(e,n,t){var a=Fe();if(t!==void 0){var l=t(n);if(Ht){Kn(!0);try{t(n)}finally{Kn(!1)}}}else l=n;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=Fh.bind(null,V,e),[a.memoizedState,e]},useRef:function(e){var n=Fe();return e={current:e},n.memoizedState=e},useState:function(e){e=Ko(e);var n=e.queue,t=hu.bind(null,V,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:er,useDeferredValue:function(e,n){var t=Fe();return nr(t,e,n)},useTransition:function(){var e=Ko(!1);return e=cu.bind(null,V,e.queue,!0,!1),Fe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var a=V,l=Fe();if(te){if(t===void 0)throw Error(h(407));t=t()}else{if(t=n(),me===null)throw Error(h(349));(ee&127)!==0||Gs(a,n,t)}l.memoizedState=t;var i={value:t,getSnapshot:n};return l.queue=i,$s(Hs.bind(null,a,i,e),[e]),a.flags|=2048,ma(9,{destroy:void 0},Ls.bind(null,a,i,t,n),null),t},useId:function(){var e=Fe(),n=me.identifierPrefix;if(te){var t=On,a=Rn;t=(a&~(1<<32-tn(a)-1)).toString(32)+t,n="_"+n+"R_"+t,t=ni++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=Gh++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:ar,useFormState:Ws,useActionState:Ws,useOptimistic:function(e){var n=Fe();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=lr.bind(null,V,!0,t),t.dispatch=n,[e,n]},useMemoCache:Wo,useCacheRefresh:function(){return Fe().memoizedState=Yh.bind(null,V)},useEffectEvent:function(e){var n=Fe(),t={impl:e};return n.memoizedState=t,function(){if((oe&2)!==0)throw Error(h(440));return t.impl.apply(void 0,arguments)}}},ir={readContext:Le,use:ai,useCallback:iu,useContext:Le,useEffect:$o,useImperativeHandle:lu,useInsertionEffect:nu,useLayoutEffect:tu,useMemo:ou,useReducer:li,useRef:Js,useState:function(){return li(Pn)},useDebugValue:er,useDeferredValue:function(e,n){var t=De();return ru(t,de.memoizedState,e,n)},useTransition:function(){var e=li(Pn)[0],n=De().memoizedState;return[typeof e=="boolean"?e:$a(e),n]},useSyncExternalStore:zs,useId:du,useHostTransitionStatus:ar,useFormState:Qs,useActionState:Qs,useOptimistic:function(e,n){var t=De();return Vs(t,de,e,n)},useMemoCache:Wo,useCacheRefresh:fu};ir.useEffectEvent=eu;var gu={readContext:Le,use:ai,useCallback:iu,useContext:Le,useEffect:$o,useImperativeHandle:lu,useInsertionEffect:nu,useLayoutEffect:tu,useMemo:ou,useReducer:Zo,useRef:Js,useState:function(){return Zo(Pn)},useDebugValue:er,useDeferredValue:function(e,n){var t=De();return de===null?nr(t,e,n):ru(t,de.memoizedState,e,n)},useTransition:function(){var e=Zo(Pn)[0],n=De().memoizedState;return[typeof e=="boolean"?e:$a(e),n]},useSyncExternalStore:zs,useId:du,useHostTransitionStatus:ar,useFormState:Ks,useActionState:Ks,useOptimistic:function(e,n){var t=De();return de!==null?Vs(t,de,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Wo,useCacheRefresh:fu};gu.useEffectEvent=eu;function or(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:k({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var rr={enqueueSetState:function(e,n,t){e=e._reactInternals;var a=un(),l=it(a);l.payload=n,t!=null&&(l.callback=t),n=ot(e,l,a),n!==null&&($e(n,e,a),Qa(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=un(),l=it(a);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=ot(e,l,a),n!==null&&($e(n,e,a),Qa(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=un(),a=it(t);a.tag=2,n!=null&&(a.callback=n),n=ot(e,a,t),n!==null&&($e(n,e,t),Qa(n,e,t))}};function vu(e,n,t,a,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,o):n.prototype&&n.prototype.isPureReactComponent?!Pa(t,a)||!Pa(l,i):!0}function Su(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&rr.enqueueReplaceState(n,n.state,null)}function jt(e,n){var t=n;if("ref"in n){t={};for(var a in n)a!=="ref"&&(t[a]=n[a])}if(e=e.defaultProps){t===n&&(t=k({},t));for(var l in e)t[l]===void 0&&(t[l]=e[l])}return t}function bu(e){Hl(e)}function Cu(e){console.error(e)}function wu(e){Hl(e)}function ci(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function Tu(e,n,t){try{var a=e.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function cr(e,n,t){return t=it(t),t.tag=3,t.payload={element:null},t.callback=function(){ci(e,n)},t}function Eu(e){return e=it(e),e.tag=3,e}function xu(e,n,t,a){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;e.payload=function(){return l(i)},e.callback=function(){Tu(n,t,a)}}var o=t.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Tu(n,t,a),typeof l!="function"&&(ft===null?ft=new Set([this]):ft.add(this));var r=a.stack;this.componentDidCatch(a.value,{componentStack:r!==null?r:""})})}function qh(e,n,t,a,l){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=t.alternate,n!==null&&ra(n,t,l,!0),t=on.current,t!==null){switch(t.tag){case 31:case 13:return Sn===null?bi():t.alternate===null&&Ee===0&&(Ee=3),t.flags&=-257,t.flags|=65536,t.lanes=l,a===Ql?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([a]):n.add(a),Mr(e,a,l)),!1;case 22:return t.flags|=65536,a===Ql?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([a]):t.add(a)),Mr(e,a,l)),!1}throw Error(h(435,t.tag))}return Mr(e,a,l),bi(),!1}if(te)return n=on.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,a!==Do&&(e=Error(h(422),{cause:a}),Fa(mn(e,t)))):(a!==Do&&(n=Error(h(423),{cause:a}),Fa(mn(n,t))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=mn(a,t),l=cr(e.stateNode,a,l),Lo(e,l),Ee!==4&&(Ee=2)),!1;var i=Error(h(520),{cause:a});if(i=mn(i,t),sl===null?sl=[i]:sl.push(i),Ee!==4&&(Ee=2),n===null)return!0;a=mn(a,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=l&-l,t.lanes|=e,e=cr(t.stateNode,a,e),Lo(t,e),!1;case 1:if(n=t.type,i=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ft===null||!ft.has(i))))return t.flags|=65536,l&=-l,t.lanes|=l,l=Eu(l),xu(l,e,t,a),Lo(t,l),!1}t=t.return}while(t!==null);return!1}var sr=Error(h(461)),Ne=!1;function He(e,n,t,a){n.child=e===null?Os(n,null,t,a):Lt(n,e.child,t,a)}function Au(e,n,t,a,l){t=t.render;var i=n.ref;if("ref"in a){var o={};for(var r in a)r!=="ref"&&(o[r]=a[r])}else o=a;return Ut(n),a=Fo(e,n,t,o,i,l),r=qo(),e!==null&&!Ne?(Io(e,n,l),Vn(e,n,l)):(te&&r&&xo(n),n.flags|=1,He(e,n,a,l),n.child)}function Du(e,n,t,a,l){if(e===null){var i=t.type;return typeof i=="function"&&!wo(i)&&i.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=i,Ru(e,n,i,a,l)):(e=Yl(t.type,null,a,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!gr(e,l)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:Pa,t(o,a)&&e.ref===n.ref)return Vn(e,n,l)}return n.flags|=1,e=zn(i,a),e.ref=n.ref,e.return=n,n.child=e}function Ru(e,n,t,a,l){if(e!==null){var i=e.memoizedProps;if(Pa(i,a)&&e.ref===n.ref)if(Ne=!1,n.pendingProps=a=i,gr(e,l))(e.flags&131072)!==0&&(Ne=!0);else return n.lanes=e.lanes,Vn(e,n,l)}return ur(e,n,t,a,l)}function Ou(e,n,t,a){var l=a.children,i=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((n.flags&128)!==0){if(i=i!==null?i.baseLanes|t:t,e!==null){for(a=n.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~i}else a=0,n.child=null;return Nu(e,n,i,t,a)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Xl(n,i!==null?i.cachePool:null),i!==null?Bs(n,i):jo(),Ms(n);else return a=n.lanes=536870912,Nu(e,n,i!==null?i.baseLanes|t:t,t,a)}else i!==null?(Xl(n,i.cachePool),Bs(n,i),ct(),n.memoizedState=null):(e!==null&&Xl(n,null),jo(),ct());return He(e,n,l,t),n.child}function tl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Nu(e,n,t,a,l){var i=Uo();return i=i===null?null:{parent:Re._currentValue,pool:i},n.memoizedState={baseLanes:t,cachePool:i},e!==null&&Xl(n,null),jo(),Ms(n),e!==null&&ra(e,n,a,!0),n.childLanes=l,null}function si(e,n){return n=di({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function ku(e,n,t){return Lt(n,e.child,null,t),e=si(n,n.pendingProps),e.flags|=2,rn(n),n.memoizedState=null,e}function Ih(e,n,t){var a=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(te){if(a.mode==="hidden")return e=si(n,a),n.lanes=536870912,tl(null,e);if(Vo(n),(e=ve)?(e=Yd(e,vn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:et!==null?{id:Rn,overflow:On}:null,retryLane:536870912,hydrationErrors:null},t=ps(e),t.return=n,n.child=t,Ge=n,ve=null)):e=null,e===null)throw tt(n);return n.lanes=536870912,null}return si(n,a)}var i=e.memoizedState;if(i!==null){var o=i.dehydrated;if(Vo(n),l)if(n.flags&256)n.flags&=-257,n=ku(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(h(558));else if(Ne||ra(e,n,t,!1),l=(t&e.childLanes)!==0,Ne||l){if(a=me,a!==null&&(o=Cc(a,t),o!==0&&o!==i.retryLane))throw i.retryLane=o,Nt(e,o),$e(a,e,o),sr;bi(),n=ku(e,n,t)}else e=i.treeContext,ve=bn(o.nextSibling),Ge=n,te=!0,nt=null,vn=!1,e!==null&&gs(n,e),n=si(n,a),n.flags|=4096;return n}return e=zn(e.child,{mode:a.mode,children:a.children}),e.ref=n.ref,n.child=e,e.return=n,e}function ui(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(h(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function ur(e,n,t,a,l){return Ut(n),t=Fo(e,n,t,a,void 0,l),a=qo(),e!==null&&!Ne?(Io(e,n,l),Vn(e,n,l)):(te&&a&&xo(n),n.flags|=1,He(e,n,t,l),n.child)}function Bu(e,n,t,a,l,i){return Ut(n),n.updateQueue=null,t=_s(n,a,t,l),Us(e),a=qo(),e!==null&&!Ne?(Io(e,n,i),Vn(e,n,i)):(te&&a&&xo(n),n.flags|=1,He(e,n,t,i),n.child)}function Mu(e,n,t,a,l){if(Ut(n),n.stateNode===null){var i=aa,o=t.contextType;typeof o=="object"&&o!==null&&(i=Le(o)),i=new t(a,i),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=rr,n.stateNode=i,i._reactInternals=n,i=n.stateNode,i.props=a,i.state=n.memoizedState,i.refs={},zo(n),o=t.contextType,i.context=typeof o=="object"&&o!==null?Le(o):aa,i.state=n.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(or(n,t,o,a),i.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&rr.enqueueReplaceState(i,i.state,null),Ka(n,a,i,l),Za(),i.state=n.memoizedState),typeof i.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(e===null){i=n.stateNode;var r=n.memoizedProps,c=jt(t,r);i.props=c;var m=i.context,v=t.contextType;o=aa,typeof v=="object"&&v!==null&&(o=Le(v));var C=t.getDerivedStateFromProps;v=typeof C=="function"||typeof i.getSnapshotBeforeUpdate=="function",r=n.pendingProps!==r,v||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r||m!==o)&&Su(n,i,a,o),lt=!1;var y=n.memoizedState;i.state=y,Ka(n,a,i,l),Za(),m=n.memoizedState,r||y!==m||lt?(typeof C=="function"&&(or(n,t,C,a),m=n.memoizedState),(c=lt||vu(n,t,c,a,y,m,o))?(v||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=m),i.props=a,i.state=m,i.context=o,a=c):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{i=n.stateNode,Go(e,n),o=n.memoizedProps,v=jt(t,o),i.props=v,C=n.pendingProps,y=i.context,m=t.contextType,c=aa,typeof m=="object"&&m!==null&&(c=Le(m)),r=t.getDerivedStateFromProps,(m=typeof r=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==C||y!==c)&&Su(n,i,a,c),lt=!1,y=n.memoizedState,i.state=y,Ka(n,a,i,l),Za();var g=n.memoizedState;o!==C||y!==g||lt||e!==null&&e.dependencies!==null&&ql(e.dependencies)?(typeof r=="function"&&(or(n,t,r,a),g=n.memoizedState),(v=lt||vu(n,t,v,a,y,g,c)||e!==null&&e.dependencies!==null&&ql(e.dependencies))?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,g,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,g,c)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&y===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&y===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=g),i.props=a,i.state=g,i.context=c,a=v):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&y===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&y===e.memoizedState||(n.flags|=1024),a=!1)}return i=a,ui(e,n),a=(n.flags&128)!==0,i||a?(i=n.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:i.render(),n.flags|=1,e!==null&&a?(n.child=Lt(n,e.child,null,l),n.child=Lt(n,null,t,l)):He(e,n,t,l),n.memoizedState=i.state,e=n.child):e=Vn(e,n,l),e}function Uu(e,n,t,a){return Bt(),n.flags|=256,He(e,n,t,a),n.child}var dr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fr(e){return{baseLanes:e,cachePool:Ts()}}function hr(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=sn),e}function _u(e,n,t){var a=n.pendingProps,l=!1,i=(n.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(Ae.current&2)!==0),o&&(l=!0,n.flags&=-129),o=(n.flags&32)!==0,n.flags&=-33,e===null){if(te){if(l?rt(n):ct(),(e=ve)?(e=Yd(e,vn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:et!==null?{id:Rn,overflow:On}:null,retryLane:536870912,hydrationErrors:null},t=ps(e),t.return=n,n.child=t,Ge=n,ve=null)):e=null,e===null)throw tt(n);return Qr(e)?n.lanes=32:n.lanes=536870912,null}var r=a.children;return a=a.fallback,l?(ct(),l=n.mode,r=di({mode:"hidden",children:r},l),a=kt(a,l,t,null),r.return=n,a.return=n,r.sibling=a,n.child=r,a=n.child,a.memoizedState=fr(t),a.childLanes=hr(e,o,t),n.memoizedState=dr,tl(null,a)):(rt(n),pr(n,r))}var c=e.memoizedState;if(c!==null&&(r=c.dehydrated,r!==null)){if(i)n.flags&256?(rt(n),n.flags&=-257,n=mr(e,n,t)):n.memoizedState!==null?(ct(),n.child=e.child,n.flags|=128,n=null):(ct(),r=a.fallback,l=n.mode,a=di({mode:"visible",children:a.children},l),r=kt(r,l,t,null),r.flags|=2,a.return=n,r.return=n,a.sibling=r,n.child=a,Lt(n,e.child,null,t),a=n.child,a.memoizedState=fr(t),a.childLanes=hr(e,o,t),n.memoizedState=dr,n=tl(null,a));else if(rt(n),Qr(r)){if(o=r.nextSibling&&r.nextSibling.dataset,o)var m=o.dgst;o=m,a=Error(h(419)),a.stack="",a.digest=o,Fa({value:a,source:null,stack:null}),n=mr(e,n,t)}else if(Ne||ra(e,n,t,!1),o=(t&e.childLanes)!==0,Ne||o){if(o=me,o!==null&&(a=Cc(o,t),a!==0&&a!==c.retryLane))throw c.retryLane=a,Nt(e,a),$e(o,e,a),sr;Wr(r)||bi(),n=mr(e,n,t)}else Wr(r)?(n.flags|=192,n.child=e.child,n=null):(e=c.treeContext,ve=bn(r.nextSibling),Ge=n,te=!0,nt=null,vn=!1,e!==null&&gs(n,e),n=pr(n,a.children),n.flags|=4096);return n}return l?(ct(),r=a.fallback,l=n.mode,c=e.child,m=c.sibling,a=zn(c,{mode:"hidden",children:a.children}),a.subtreeFlags=c.subtreeFlags&65011712,m!==null?r=zn(m,r):(r=kt(r,l,t,null),r.flags|=2),r.return=n,a.return=n,a.sibling=r,n.child=a,tl(null,a),a=n.child,r=e.child.memoizedState,r===null?r=fr(t):(l=r.cachePool,l!==null?(c=Re._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=Ts(),r={baseLanes:r.baseLanes|t,cachePool:l}),a.memoizedState=r,a.childLanes=hr(e,o,t),n.memoizedState=dr,tl(e.child,a)):(rt(n),t=e.child,e=t.sibling,t=zn(t,{mode:"visible",children:a.children}),t.return=n,t.sibling=null,e!==null&&(o=n.deletions,o===null?(n.deletions=[e],n.flags|=16):o.push(e)),n.child=t,n.memoizedState=null,t)}function pr(e,n){return n=di({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function di(e,n){return e=ln(22,e,null,n),e.lanes=0,e}function mr(e,n,t){return Lt(n,e.child,null,t),e=pr(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function zu(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),No(e.return,n,t)}function yr(e,n,t,a,l,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:l,treeForkCount:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=t,o.tailMode=l,o.treeForkCount=i)}function Gu(e,n,t){var a=n.pendingProps,l=a.revealOrder,i=a.tail;a=a.children;var o=Ae.current,r=(o&2)!==0;if(r?(o=o&1|2,n.flags|=128):o&=1,D(Ae,o),He(e,n,a,t),a=te?Ya:0,!r&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zu(e,t,n);else if(e.tag===19)zu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&$l(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),yr(n,!1,l,t,i,a);break;case"backwards":case"unstable_legacy-backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&$l(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}yr(n,!0,t,null,i,a);break;case"together":yr(n,!1,null,null,void 0,a);break;default:n.memoizedState=null}return n.child}function Vn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),dt|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(ra(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(h(153));if(n.child!==null){for(e=n.child,t=zn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=zn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function gr(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ql(e)))}function Xh(e,n,t){switch(n.tag){case 3:Ye(n,n.stateNode.containerInfo),at(n,Re,e.memoizedState.cache),Bt();break;case 27:case 5:Ra(n);break;case 4:Ye(n,n.stateNode.containerInfo);break;case 10:at(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Vo(n),null;break;case 13:var a=n.memoizedState;if(a!==null)return a.dehydrated!==null?(rt(n),n.flags|=128,null):(t&n.child.childLanes)!==0?_u(e,n,t):(rt(n),e=Vn(e,n,t),e!==null?e.sibling:null);rt(n);break;case 19:var l=(e.flags&128)!==0;if(a=(t&n.childLanes)!==0,a||(ra(e,n,t,!1),a=(t&n.childLanes)!==0),l){if(a)return Gu(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),D(Ae,Ae.current),a)break;return null;case 22:return n.lanes=0,Ou(e,n,t,n.pendingProps);case 24:at(n,Re,e.memoizedState.cache)}return Vn(e,n,t)}function Lu(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)Ne=!0;else{if(!gr(e,t)&&(n.flags&128)===0)return Ne=!1,Xh(e,n,t);Ne=(e.flags&131072)!==0}else Ne=!1,te&&(n.flags&1048576)!==0&&ys(n,Ya,n.index);switch(n.lanes=0,n.tag){case 16:e:{var a=n.pendingProps;if(e=zt(n.elementType),n.type=e,typeof e=="function")wo(e)?(a=jt(e,a),n.tag=1,n=Mu(null,n,e,a,t)):(n.tag=0,n=ur(null,n,e,a,t));else{if(e!=null){var l=e.$$typeof;if(l===Ve){n.tag=11,n=Au(null,n,e,a,t);break e}else if(l===I){n.tag=14,n=Du(null,n,e,a,t);break e}}throw n=Bn(e)||e,Error(h(306,n,""))}}return n;case 0:return ur(e,n,n.type,n.pendingProps,t);case 1:return a=n.type,l=jt(a,n.pendingProps),Mu(e,n,a,l,t);case 3:e:{if(Ye(n,n.stateNode.containerInfo),e===null)throw Error(h(387));a=n.pendingProps;var i=n.memoizedState;l=i.element,Go(e,n),Ka(n,a,null,t);var o=n.memoizedState;if(a=o.cache,at(n,Re,a),a!==i.cache&&ko(n,[Re],t,!0),Za(),a=o.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:o.cache},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){n=Uu(e,n,a,t);break e}else if(a!==l){l=mn(Error(h(424)),n),Fa(l),n=Uu(e,n,a,t);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ve=bn(e.firstChild),Ge=n,te=!0,nt=null,vn=!0,t=Os(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Bt(),a===l){n=Vn(e,n,t);break e}He(e,n,a,t)}n=n.child}return n;case 26:return ui(e,n),e===null?(t=Qd(n.type,null,n.pendingProps,null))?n.memoizedState=t:te||(t=n.type,e=n.pendingProps,a=Di(K.current).createElement(t),a[ze]=n,a[Xe]=e,je(a,t,e),Me(a),n.stateNode=a):n.memoizedState=Qd(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ra(n),e===null&&te&&(a=n.stateNode=Id(n.type,n.pendingProps,K.current),Ge=n,vn=!0,l=ve,yt(n.type)?(Zr=l,ve=bn(a.firstChild)):ve=l),He(e,n,n.pendingProps.children,t),ui(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&te&&((l=a=ve)&&(a=Tp(a,n.type,n.pendingProps,vn),a!==null?(n.stateNode=a,Ge=n,ve=bn(a.firstChild),vn=!1,l=!0):l=!1),l||tt(n)),Ra(n),l=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,qr(l,i)?a=null:o!==null&&qr(l,o)&&(n.flags|=32),n.memoizedState!==null&&(l=Fo(e,n,Lh,null,null,t),gl._currentValue=l),ui(e,n),He(e,n,a,t),n.child;case 6:return e===null&&te&&((e=t=ve)&&(t=Ep(t,n.pendingProps,vn),t!==null?(n.stateNode=t,Ge=n,ve=null,e=!0):e=!1),e||tt(n)),null;case 13:return _u(e,n,t);case 4:return Ye(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=Lt(n,null,a,t):He(e,n,a,t),n.child;case 11:return Au(e,n,n.type,n.pendingProps,t);case 7:return He(e,n,n.pendingProps,t),n.child;case 8:return He(e,n,n.pendingProps.children,t),n.child;case 12:return He(e,n,n.pendingProps.children,t),n.child;case 10:return a=n.pendingProps,at(n,n.type,a.value),He(e,n,a.children,t),n.child;case 9:return l=n.type._context,a=n.pendingProps.children,Ut(n),l=Le(l),a=a(l),n.flags|=1,He(e,n,a,t),n.child;case 14:return Du(e,n,n.type,n.pendingProps,t);case 15:return Ru(e,n,n.type,n.pendingProps,t);case 19:return Gu(e,n,t);case 31:return Ih(e,n,t);case 22:return Ou(e,n,t,n.pendingProps);case 24:return Ut(n),a=Le(Re),e===null?(l=Uo(),l===null&&(l=me,i=Bo(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=t),l=i),n.memoizedState={parent:a,cache:l},zo(n),at(n,Re,l)):((e.lanes&t)!==0&&(Go(e,n),Ka(n,null,null,t),Za()),l=e.memoizedState,i=n.memoizedState,l.parent!==a?(l={parent:a,cache:a},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),at(n,Re,a)):(a=i.cache,at(n,Re,a),a!==l.cache&&ko(n,[Re],t,!0))),He(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(h(156,n.tag))}function Yn(e){e.flags|=4}function vr(e,n,t,a,l){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(dd())e.flags|=8192;else throw Gt=Ql,_o}else e.flags&=-16777217}function Hu(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ef(n))if(dd())e.flags|=8192;else throw Gt=Ql,_o}function fi(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?vc():536870912,e.lanes|=n,Sa|=n)}function al(e,n){if(!te)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Se(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function Wh(e,n,t){var a=n.pendingProps;switch(Ao(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(n),null;case 1:return Se(n),null;case 3:return t=n.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Hn(Re),xe(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(oa(n)?Yn(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ro())),Se(n),null;case 26:var l=n.type,i=n.memoizedState;return e===null?(Yn(n),i!==null?(Se(n),Hu(n,i)):(Se(n),vr(n,l,null,a,t))):i?i!==e.memoizedState?(Yn(n),Se(n),Hu(n,i)):(Se(n),n.flags&=-16777217):(e=e.memoizedProps,e!==a&&Yn(n),Se(n),vr(n,l,e,a,t)),null;case 27:if(Tl(n),t=K.current,l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&Yn(n);else{if(!a){if(n.stateNode===null)throw Error(h(166));return Se(n),null}e=O.current,oa(n)?vs(n):(e=Id(l,a,t),n.stateNode=e,Yn(n))}return Se(n),null;case 5:if(Tl(n),l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&Yn(n);else{if(!a){if(n.stateNode===null)throw Error(h(166));return Se(n),null}if(i=O.current,oa(n))vs(n);else{var o=Di(K.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?o.createElement("select",{is:a.is}):o.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?o.createElement(l,{is:a.is}):o.createElement(l)}}i[ze]=n,i[Xe]=a;e:for(o=n.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===n)break e;for(;o.sibling===null;){if(o.return===null||o.return===n)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}n.stateNode=i;e:switch(je(i,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Yn(n)}}return Se(n),vr(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==a&&Yn(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(h(166));if(e=K.current,oa(n)){if(e=n.stateNode,t=n.memoizedProps,a=null,l=Ge,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[ze]=n,e=!!(e.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||_d(e.nodeValue,t)),e||tt(n,!0)}else e=Di(e).createTextNode(a),e[ze]=n,n.stateNode=e}return Se(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(a=oa(n),t!==null){if(e===null){if(!a)throw Error(h(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(557));e[ze]=n}else Bt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Se(n),e=!1}else t=Ro(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(rn(n),n):(rn(n),null);if((n.flags&128)!==0)throw Error(h(558))}return Se(n),null;case 13:if(a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=oa(n),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(h(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(h(317));l[ze]=n}else Bt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Se(n),l=!1}else l=Ro(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(rn(n),n):(rn(n),null)}return rn(n),(n.flags&128)!==0?(n.lanes=t,n):(t=a!==null,e=e!==null&&e.memoizedState!==null,t&&(a=n.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),fi(n,n.updateQueue),Se(n),null);case 4:return xe(),e===null&&jr(n.stateNode.containerInfo),Se(n),null;case 10:return Hn(n.type),Se(n),null;case 19:if(T(Ae),a=n.memoizedState,a===null)return Se(n),null;if(l=(n.flags&128)!==0,i=a.rendering,i===null)if(l)al(a,!1);else{if(Ee!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(i=$l(e),i!==null){for(n.flags|=128,al(a,!1),e=i.updateQueue,n.updateQueue=e,fi(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)hs(t,e),t=t.sibling;return D(Ae,Ae.current&1|2),te&&Gn(n,a.treeForkCount),n.child}e=e.sibling}a.tail!==null&&en()>gi&&(n.flags|=128,l=!0,al(a,!1),n.lanes=4194304)}else{if(!l)if(e=$l(i),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,fi(n,e),al(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!te)return Se(n),null}else 2*en()-a.renderingStartTime>gi&&t!==536870912&&(n.flags|=128,l=!0,al(a,!1),n.lanes=4194304);a.isBackwards?(i.sibling=n.child,n.child=i):(e=a.last,e!==null?e.sibling=i:n.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=en(),e.sibling=null,t=Ae.current,D(Ae,l?t&1|2:t&1),te&&Gn(n,a.treeForkCount),e):(Se(n),null);case 22:case 23:return rn(n),Po(),a=n.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(t&536870912)!==0&&(n.flags&128)===0&&(Se(n),n.subtreeFlags&6&&(n.flags|=8192)):Se(n),t=n.updateQueue,t!==null&&fi(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==t&&(n.flags|=2048),e!==null&&T(_t),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),Hn(Re),Se(n),null;case 25:return null;case 30:return null}throw Error(h(156,n.tag))}function Qh(e,n){switch(Ao(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Hn(Re),xe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Tl(n),null;case 31:if(n.memoizedState!==null){if(rn(n),n.alternate===null)throw Error(h(340));Bt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(rn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(h(340));Bt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return T(Ae),null;case 4:return xe(),null;case 10:return Hn(n.type),null;case 22:case 23:return rn(n),Po(),e!==null&&T(_t),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Hn(Re),null;case 25:return null;default:return null}}function ju(e,n){switch(Ao(n),n.tag){case 3:Hn(Re),xe();break;case 26:case 27:case 5:Tl(n);break;case 4:xe();break;case 31:n.memoizedState!==null&&rn(n);break;case 13:rn(n);break;case 19:T(Ae);break;case 10:Hn(n.type);break;case 22:case 23:rn(n),Po(),e!==null&&T(_t);break;case 24:Hn(Re)}}function ll(e,n){try{var t=n.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var l=a.next;t=l;do{if((t.tag&e)===e){a=void 0;var i=t.create,o=t.inst;a=i(),o.destroy=a}t=t.next}while(t!==l)}}catch(r){se(n,n.return,r)}}function st(e,n,t){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){var o=a.inst,r=o.destroy;if(r!==void 0){o.destroy=void 0,l=n;var c=t,m=r;try{m()}catch(v){se(l,c,v)}}}a=a.next}while(a!==i)}}catch(v){se(n,n.return,v)}}function Pu(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{ks(n,t)}catch(a){se(e,e.return,a)}}}function Vu(e,n,t){t.props=jt(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(a){se(e,n,a)}}function il(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof t=="function"?e.refCleanup=t(a):t.current=a}}catch(l){se(e,n,l)}}function Nn(e,n){var t=e.ref,a=e.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(l){se(e,n,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){se(e,n,l)}else t.current=null}function Yu(e){var n=e.type,t=e.memoizedProps,a=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break e;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(l){se(e,e.return,l)}}function Sr(e,n,t){try{var a=e.stateNode;gp(a,e.type,t,n),a[Xe]=n}catch(l){se(e,e.return,l)}}function Fu(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&yt(e.type)||e.tag===4}function br(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&yt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cr(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Un));else if(a!==4&&(a===27&&yt(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(Cr(e,n,t),e=e.sibling;e!==null;)Cr(e,n,t),e=e.sibling}function hi(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(a===27&&yt(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(hi(e,n,t),e=e.sibling;e!==null;)hi(e,n,t),e=e.sibling}function qu(e){var n=e.stateNode,t=e.memoizedProps;try{for(var a=e.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);je(n,a,t),n[ze]=e,n[Xe]=t}catch(i){se(e,e.return,i)}}var Fn=!1,ke=!1,wr=!1,Iu=typeof WeakSet=="function"?WeakSet:Set,Ue=null;function Zh(e,n){if(e=e.containerInfo,Yr=Ui,e=ls(e),mo(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var l=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,r=-1,c=-1,m=0,v=0,C=e,y=null;n:for(;;){for(var g;C!==t||l!==0&&C.nodeType!==3||(r=o+l),C!==i||a!==0&&C.nodeType!==3||(c=o+a),C.nodeType===3&&(o+=C.nodeValue.length),(g=C.firstChild)!==null;)y=C,C=g;for(;;){if(C===e)break n;if(y===t&&++m===l&&(r=o),y===i&&++v===a&&(c=o),(g=C.nextSibling)!==null)break;C=y,y=C.parentNode}C=g}t=r===-1||c===-1?null:{start:r,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for(Fr={focusedElem:e,selectionRange:t},Ui=!1,Ue=n;Ue!==null;)if(n=Ue,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Ue=e;else for(;Ue!==null;){switch(n=Ue,i=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)l=e[t],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,t=n,l=i.memoizedProps,i=i.memoizedState,a=t.stateNode;try{var R=jt(t.type,l);e=a.getSnapshotBeforeUpdate(R,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(U){se(t,t.return,U)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)Xr(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(h(163))}if(e=n.sibling,e!==null){e.return=n.return,Ue=e;break}Ue=n.return}}function Xu(e,n,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:In(e,t),a&4&&ll(5,t);break;case 1:if(In(e,t),a&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(o){se(t,t.return,o)}else{var l=jt(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(l,n,e.__reactInternalSnapshotBeforeUpdate)}catch(o){se(t,t.return,o)}}a&64&&Pu(t),a&512&&il(t,t.return);break;case 3:if(In(e,t),a&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{ks(e,n)}catch(o){se(t,t.return,o)}}break;case 27:n===null&&a&4&&qu(t);case 26:case 5:In(e,t),n===null&&a&4&&Yu(t),a&512&&il(t,t.return);break;case 12:In(e,t);break;case 31:In(e,t),a&4&&Zu(e,t);break;case 13:In(e,t),a&4&&Ku(e,t),a&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=ip.bind(null,t),xp(e,t))));break;case 22:if(a=t.memoizedState!==null||Fn,!a){n=n!==null&&n.memoizedState!==null||ke,l=Fn;var i=ke;Fn=a,(ke=n)&&!i?Xn(e,t,(t.subtreeFlags&8772)!==0):In(e,t),Fn=l,ke=i}break;case 30:break;default:In(e,t)}}function Wu(e){var n=e.alternate;n!==null&&(e.alternate=null,Wu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ki(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var we=null,Qe=!1;function qn(e,n,t){for(t=t.child;t!==null;)Qu(e,n,t),t=t.sibling}function Qu(e,n,t){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Oa,t)}catch{}switch(t.tag){case 26:ke||Nn(t,n),qn(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:ke||Nn(t,n);var a=we,l=Qe;yt(t.type)&&(we=t.stateNode,Qe=!1),qn(e,n,t),pl(t.stateNode),we=a,Qe=l;break;case 5:ke||Nn(t,n);case 6:if(a=we,l=Qe,we=null,qn(e,n,t),we=a,Qe=l,we!==null)if(Qe)try{(we.nodeType===9?we.body:we.nodeName==="HTML"?we.ownerDocument.body:we).removeChild(t.stateNode)}catch(i){se(t,n,i)}else try{we.removeChild(t.stateNode)}catch(i){se(t,n,i)}break;case 18:we!==null&&(Qe?(e=we,Pd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Da(e)):Pd(we,t.stateNode));break;case 4:a=we,l=Qe,we=t.stateNode.containerInfo,Qe=!0,qn(e,n,t),we=a,Qe=l;break;case 0:case 11:case 14:case 15:st(2,t,n),ke||st(4,t,n),qn(e,n,t);break;case 1:ke||(Nn(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"&&Vu(t,n,a)),qn(e,n,t);break;case 21:qn(e,n,t);break;case 22:ke=(a=ke)||t.memoizedState!==null,qn(e,n,t),ke=a;break;default:qn(e,n,t)}}function Zu(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Da(e)}catch(t){se(n,n.return,t)}}}function Ku(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Da(e)}catch(t){se(n,n.return,t)}}function Kh(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Iu),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Iu),n;default:throw Error(h(435,e.tag))}}function pi(e,n){var t=Kh(e);n.forEach(function(a){if(!t.has(a)){t.add(a);var l=op.bind(null,e,a);a.then(l,l)}})}function Ze(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var l=t[a],i=e,o=n,r=o;e:for(;r!==null;){switch(r.tag){case 27:if(yt(r.type)){we=r.stateNode,Qe=!1;break e}break;case 5:we=r.stateNode,Qe=!1;break e;case 3:case 4:we=r.stateNode.containerInfo,Qe=!0;break e}r=r.return}if(we===null)throw Error(h(160));Qu(i,o,l),we=null,Qe=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Ju(n,e),n=n.sibling}var En=null;function Ju(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ze(n,e),Ke(e),a&4&&(st(3,e,e.return),ll(3,e),st(5,e,e.return));break;case 1:Ze(n,e),Ke(e),a&512&&(ke||t===null||Nn(t,t.return)),a&64&&Fn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var l=En;if(Ze(n,e),Ke(e),a&512&&(ke||t===null||Nn(t,t.return)),a&4){var i=t!==null?t.memoizedState:null;if(a=e.memoizedState,t===null)if(a===null)if(e.stateNode===null){e:{a=e.type,t=e.memoizedProps,l=l.ownerDocument||l;n:switch(a){case"title":i=l.getElementsByTagName("title")[0],(!i||i[Ba]||i[ze]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(a),l.head.insertBefore(i,l.querySelector("head > title"))),je(i,a,t),i[ze]=e,Me(i),a=i;break e;case"link":var o=Jd("link","href",l).get(a+(t.href||""));if(o){for(var r=0;r<o.length;r++)if(i=o[r],i.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&i.getAttribute("rel")===(t.rel==null?null:t.rel)&&i.getAttribute("title")===(t.title==null?null:t.title)&&i.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){o.splice(r,1);break n}}i=l.createElement(a),je(i,a,t),l.head.appendChild(i);break;case"meta":if(o=Jd("meta","content",l).get(a+(t.content||""))){for(r=0;r<o.length;r++)if(i=o[r],i.getAttribute("content")===(t.content==null?null:""+t.content)&&i.getAttribute("name")===(t.name==null?null:t.name)&&i.getAttribute("property")===(t.property==null?null:t.property)&&i.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&i.getAttribute("charset")===(t.charSet==null?null:t.charSet)){o.splice(r,1);break n}}i=l.createElement(a),je(i,a,t),l.head.appendChild(i);break;default:throw Error(h(468,a))}i[ze]=e,Me(i),a=i}e.stateNode=a}else $d(l,e.type,e.stateNode);else e.stateNode=Kd(l,a,e.memoizedProps);else i!==a?(i===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):i.count--,a===null?$d(l,e.type,e.stateNode):Kd(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Sr(e,e.memoizedProps,t.memoizedProps)}break;case 27:Ze(n,e),Ke(e),a&512&&(ke||t===null||Nn(t,t.return)),t!==null&&a&4&&Sr(e,e.memoizedProps,t.memoizedProps);break;case 5:if(Ze(n,e),Ke(e),a&512&&(ke||t===null||Nn(t,t.return)),e.flags&32){l=e.stateNode;try{Zt(l,"")}catch(R){se(e,e.return,R)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,Sr(e,l,t!==null?t.memoizedProps:l)),a&1024&&(wr=!0);break;case 6:if(Ze(n,e),Ke(e),a&4){if(e.stateNode===null)throw Error(h(162));a=e.memoizedProps,t=e.stateNode;try{t.nodeValue=a}catch(R){se(e,e.return,R)}}break;case 3:if(Ni=null,l=En,En=Ri(n.containerInfo),Ze(n,e),En=l,Ke(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Da(n.containerInfo)}catch(R){se(e,e.return,R)}wr&&(wr=!1,$u(e));break;case 4:a=En,En=Ri(e.stateNode.containerInfo),Ze(n,e),Ke(e),En=a;break;case 12:Ze(n,e),Ke(e);break;case 31:Ze(n,e),Ke(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,pi(e,a)));break;case 13:Ze(n,e),Ke(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(yi=en()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,pi(e,a)));break;case 22:l=e.memoizedState!==null;var c=t!==null&&t.memoizedState!==null,m=Fn,v=ke;if(Fn=m||l,ke=v||c,Ze(n,e),ke=v,Fn=m,Ke(e),a&8192)e:for(n=e.stateNode,n._visibility=l?n._visibility&-2:n._visibility|1,l&&(t===null||c||Fn||ke||Pt(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){c=t=n;try{if(i=c.stateNode,l)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{r=c.stateNode;var C=c.memoizedProps.style,y=C!=null&&C.hasOwnProperty("display")?C.display:null;r.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(R){se(c,c.return,R)}}}else if(n.tag===6){if(t===null){c=n;try{c.stateNode.nodeValue=l?"":c.memoizedProps}catch(R){se(c,c.return,R)}}}else if(n.tag===18){if(t===null){c=n;try{var g=c.stateNode;l?Vd(g,!0):Vd(c.stateNode,!1)}catch(R){se(c,c.return,R)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}a&4&&(a=e.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,pi(e,t))));break;case 19:Ze(n,e),Ke(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,pi(e,a)));break;case 30:break;case 21:break;default:Ze(n,e),Ke(e)}}function Ke(e){var n=e.flags;if(n&2){try{for(var t,a=e.return;a!==null;){if(Fu(a)){t=a;break}a=a.return}if(t==null)throw Error(h(160));switch(t.tag){case 27:var l=t.stateNode,i=br(e);hi(e,i,l);break;case 5:var o=t.stateNode;t.flags&32&&(Zt(o,""),t.flags&=-33);var r=br(e);hi(e,r,o);break;case 3:case 4:var c=t.stateNode.containerInfo,m=br(e);Cr(e,m,c);break;default:throw Error(h(161))}}catch(v){se(e,e.return,v)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function $u(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;$u(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function In(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Xu(e,n.alternate,n),n=n.sibling}function Pt(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:st(4,n,n.return),Pt(n);break;case 1:Nn(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&Vu(n,n.return,t),Pt(n);break;case 27:pl(n.stateNode);case 26:case 5:Nn(n,n.return),Pt(n);break;case 22:n.memoizedState===null&&Pt(n);break;case 30:Pt(n);break;default:Pt(n)}e=e.sibling}}function Xn(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var a=n.alternate,l=e,i=n,o=i.flags;switch(i.tag){case 0:case 11:case 15:Xn(l,i,t),ll(4,i);break;case 1:if(Xn(l,i,t),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(m){se(a,a.return,m)}if(a=i,l=a.updateQueue,l!==null){var r=a.stateNode;try{var c=l.shared.hiddenCallbacks;if(c!==null)for(l.shared.hiddenCallbacks=null,l=0;l<c.length;l++)Ns(c[l],r)}catch(m){se(a,a.return,m)}}t&&o&64&&Pu(i),il(i,i.return);break;case 27:qu(i);case 26:case 5:Xn(l,i,t),t&&a===null&&o&4&&Yu(i),il(i,i.return);break;case 12:Xn(l,i,t);break;case 31:Xn(l,i,t),t&&o&4&&Zu(l,i);break;case 13:Xn(l,i,t),t&&o&4&&Ku(l,i);break;case 22:i.memoizedState===null&&Xn(l,i,t),il(i,i.return);break;case 30:break;default:Xn(l,i,t)}n=n.sibling}}function Tr(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&qa(t))}function Er(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&qa(e))}function xn(e,n,t,a){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ed(e,n,t,a),n=n.sibling}function ed(e,n,t,a){var l=n.flags;switch(n.tag){case 0:case 11:case 15:xn(e,n,t,a),l&2048&&ll(9,n);break;case 1:xn(e,n,t,a);break;case 3:xn(e,n,t,a),l&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&qa(e)));break;case 12:if(l&2048){xn(e,n,t,a),e=n.stateNode;try{var i=n.memoizedProps,o=i.id,r=i.onPostCommit;typeof r=="function"&&r(o,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(c){se(n,n.return,c)}}else xn(e,n,t,a);break;case 31:xn(e,n,t,a);break;case 13:xn(e,n,t,a);break;case 23:break;case 22:i=n.stateNode,o=n.alternate,n.memoizedState!==null?i._visibility&2?xn(e,n,t,a):ol(e,n):i._visibility&2?xn(e,n,t,a):(i._visibility|=2,ya(e,n,t,a,(n.subtreeFlags&10256)!==0||!1)),l&2048&&Tr(o,n);break;case 24:xn(e,n,t,a),l&2048&&Er(n.alternate,n);break;default:xn(e,n,t,a)}}function ya(e,n,t,a,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var i=e,o=n,r=t,c=a,m=o.flags;switch(o.tag){case 0:case 11:case 15:ya(i,o,r,c,l),ll(8,o);break;case 23:break;case 22:var v=o.stateNode;o.memoizedState!==null?v._visibility&2?ya(i,o,r,c,l):ol(i,o):(v._visibility|=2,ya(i,o,r,c,l)),l&&m&2048&&Tr(o.alternate,o);break;case 24:ya(i,o,r,c,l),l&&m&2048&&Er(o.alternate,o);break;default:ya(i,o,r,c,l)}n=n.sibling}}function ol(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,a=n,l=a.flags;switch(a.tag){case 22:ol(t,a),l&2048&&Tr(a.alternate,a);break;case 24:ol(t,a),l&2048&&Er(a.alternate,a);break;default:ol(t,a)}n=n.sibling}}var rl=8192;function ga(e,n,t){if(e.subtreeFlags&rl)for(e=e.child;e!==null;)nd(e,n,t),e=e.sibling}function nd(e,n,t){switch(e.tag){case 26:ga(e,n,t),e.flags&rl&&e.memoizedState!==null&&Gp(t,En,e.memoizedState,e.memoizedProps);break;case 5:ga(e,n,t);break;case 3:case 4:var a=En;En=Ri(e.stateNode.containerInfo),ga(e,n,t),En=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=rl,rl=16777216,ga(e,n,t),rl=a):ga(e,n,t));break;default:ga(e,n,t)}}function td(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function cl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];Ue=a,ld(a,e)}td(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ad(e),e=e.sibling}function ad(e){switch(e.tag){case 0:case 11:case 15:cl(e),e.flags&2048&&st(9,e,e.return);break;case 3:cl(e);break;case 12:cl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,mi(e)):cl(e);break;default:cl(e)}}function mi(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];Ue=a,ld(a,e)}td(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:st(8,n,n.return),mi(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,mi(n));break;default:mi(n)}e=e.sibling}}function ld(e,n){for(;Ue!==null;){var t=Ue;switch(t.tag){case 0:case 11:case 15:st(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:qa(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,Ue=a;else e:for(t=e;Ue!==null;){a=Ue;var l=a.sibling,i=a.return;if(Wu(a),a===t){Ue=null;break e}if(l!==null){l.return=i,Ue=l;break e}Ue=i}}}var Jh={getCacheForType:function(e){var n=Le(Re),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return Le(Re).controller.signal}},$h=typeof WeakMap=="function"?WeakMap:Map,oe=0,me=null,J=null,ee=0,ce=0,cn=null,ut=!1,va=!1,xr=!1,Wn=0,Ee=0,dt=0,Vt=0,Ar=0,sn=0,Sa=0,sl=null,Je=null,Dr=!1,yi=0,id=0,gi=1/0,vi=null,ft=null,Be=0,ht=null,ba=null,Qn=0,Rr=0,Or=null,od=null,ul=0,Nr=null;function un(){return(oe&2)!==0&&ee!==0?ee&-ee:S.T!==null?zr():wc()}function rd(){if(sn===0)if((ee&536870912)===0||te){var e=Al;Al<<=1,(Al&3932160)===0&&(Al=262144),sn=e}else sn=536870912;return e=on.current,e!==null&&(e.flags|=32),sn}function $e(e,n,t){(e===me&&(ce===2||ce===9)||e.cancelPendingCommit!==null)&&(Ca(e,0),pt(e,ee,sn,!1)),ka(e,t),((oe&2)===0||e!==me)&&(e===me&&((oe&2)===0&&(Vt|=t),Ee===4&&pt(e,ee,sn,!1)),kn(e))}function cd(e,n,t){if((oe&6)!==0)throw Error(h(327));var a=!t&&(n&127)===0&&(n&e.expiredLanes)===0||Na(e,n),l=a?tp(e,n):Br(e,n,!0),i=a;do{if(l===0){va&&!a&&pt(e,n,0,!1);break}else{if(t=e.current.alternate,i&&!ep(t)){l=Br(e,n,!1),i=!1;continue}if(l===2){if(i=n,e.errorRecoveryDisabledLanes&i)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){n=o;e:{var r=e;l=sl;var c=r.current.memoizedState.isDehydrated;if(c&&(Ca(r,o).flags|=256),o=Br(r,o,!1),o!==2){if(xr&&!c){r.errorRecoveryDisabledLanes|=i,Vt|=i,l=4;break e}i=Je,Je=l,i!==null&&(Je===null?Je=i:Je.push.apply(Je,i))}l=o}if(i=!1,l!==2)continue}}if(l===1){Ca(e,0),pt(e,n,0,!0);break}e:{switch(a=e,i=l,i){case 0:case 1:throw Error(h(345));case 4:if((n&4194048)!==n)break;case 6:pt(a,n,sn,!ut);break e;case 2:Je=null;break;case 3:case 5:break;default:throw Error(h(329))}if((n&62914560)===n&&(l=yi+300-en(),10<l)){if(pt(a,n,sn,!ut),Rl(a,0,!0)!==0)break e;Qn=n,a.timeoutHandle=Hd(sd.bind(null,a,t,Je,vi,Dr,n,sn,Vt,Sa,ut,i,"Throttled",-0,0),l);break e}sd(a,t,Je,vi,Dr,n,sn,Vt,Sa,ut,i,null,-0,0)}}break}while(!0);kn(e)}function sd(e,n,t,a,l,i,o,r,c,m,v,C,y,g){if(e.timeoutHandle=-1,C=n.subtreeFlags,C&8192||(C&16785408)===16785408){C={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Un},nd(n,i,C);var R=(i&62914560)===i?yi-en():(i&4194048)===i?id-en():0;if(R=Lp(C,R),R!==null){Qn=i,e.cancelPendingCommit=R(gd.bind(null,e,n,i,t,a,l,o,r,c,v,C,null,y,g)),pt(e,i,o,!m);return}}gd(e,n,i,t,a,l,o,r,c)}function ep(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var l=t[a],i=l.getSnapshot;l=l.value;try{if(!an(i(),l))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function pt(e,n,t,a){n&=~Ar,n&=~Vt,e.suspendedLanes|=n,e.pingedLanes&=~n,a&&(e.warmLanes|=n),a=e.expirationTimes;for(var l=n;0<l;){var i=31-tn(l),o=1<<i;a[i]=-1,l&=~o}t!==0&&Sc(e,t,n)}function Si(){return(oe&6)===0?(dl(0),!1):!0}function kr(){if(J!==null){if(ce===0)var e=J.return;else e=J,Ln=Mt=null,Xo(e),da=null,Xa=0,e=J;for(;e!==null;)ju(e.alternate,e),e=e.return;J=null}}function Ca(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,bp(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Qn=0,kr(),me=e,J=t=zn(e.current,null),ee=n,ce=0,cn=null,ut=!1,va=Na(e,n),xr=!1,Sa=sn=Ar=Vt=dt=Ee=0,Je=sl=null,Dr=!1,(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var l=31-tn(a),i=1<<l;n|=e[l],a&=~i}return Wn=n,jl(),t}function ud(e,n){V=null,S.H=nl,n===ua||n===Wl?(n=As(),ce=3):n===_o?(n=As(),ce=4):ce=n===sr?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,cn=n,J===null&&(Ee=1,ci(e,mn(n,e.current)))}function dd(){var e=on.current;return e===null?!0:(ee&4194048)===ee?Sn===null:(ee&62914560)===ee||(ee&536870912)!==0?e===Sn:!1}function fd(){var e=S.H;return S.H=nl,e===null?nl:e}function hd(){var e=S.A;return S.A=Jh,e}function bi(){Ee=4,ut||(ee&4194048)!==ee&&on.current!==null||(va=!0),(dt&134217727)===0&&(Vt&134217727)===0||me===null||pt(me,ee,sn,!1)}function Br(e,n,t){var a=oe;oe|=2;var l=fd(),i=hd();(me!==e||ee!==n)&&(vi=null,Ca(e,n)),n=!1;var o=Ee;e:do try{if(ce!==0&&J!==null){var r=J,c=cn;switch(ce){case 8:kr(),o=6;break e;case 3:case 2:case 9:case 6:on.current===null&&(n=!0);var m=ce;if(ce=0,cn=null,wa(e,r,c,m),t&&va){o=0;break e}break;default:m=ce,ce=0,cn=null,wa(e,r,c,m)}}np(),o=Ee;break}catch(v){ud(e,v)}while(!0);return n&&e.shellSuspendCounter++,Ln=Mt=null,oe=a,S.H=l,S.A=i,J===null&&(me=null,ee=0,jl()),o}function np(){for(;J!==null;)pd(J)}function tp(e,n){var t=oe;oe|=2;var a=fd(),l=hd();me!==e||ee!==n?(vi=null,gi=en()+500,Ca(e,n)):va=Na(e,n);e:do try{if(ce!==0&&J!==null){n=J;var i=cn;n:switch(ce){case 1:ce=0,cn=null,wa(e,n,i,1);break;case 2:case 9:if(Es(i)){ce=0,cn=null,md(n);break}n=function(){ce!==2&&ce!==9||me!==e||(ce=7),kn(e)},i.then(n,n);break e;case 3:ce=7;break e;case 4:ce=5;break e;case 7:Es(i)?(ce=0,cn=null,md(n)):(ce=0,cn=null,wa(e,n,i,7));break;case 5:var o=null;switch(J.tag){case 26:o=J.memoizedState;case 5:case 27:var r=J;if(o?ef(o):r.stateNode.complete){ce=0,cn=null;var c=r.sibling;if(c!==null)J=c;else{var m=r.return;m!==null?(J=m,Ci(m)):J=null}break n}}ce=0,cn=null,wa(e,n,i,5);break;case 6:ce=0,cn=null,wa(e,n,i,6);break;case 8:kr(),Ee=6;break e;default:throw Error(h(462))}}ap();break}catch(v){ud(e,v)}while(!0);return Ln=Mt=null,S.H=a,S.A=l,oe=t,J!==null?0:(me=null,ee=0,jl(),Ee)}function ap(){for(;J!==null&&!Af();)pd(J)}function pd(e){var n=Lu(e.alternate,e,Wn);e.memoizedProps=e.pendingProps,n===null?Ci(e):J=n}function md(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=Bu(t,n,n.pendingProps,n.type,void 0,ee);break;case 11:n=Bu(t,n,n.pendingProps,n.type.render,n.ref,ee);break;case 5:Xo(n);default:ju(t,n),n=J=hs(n,Wn),n=Lu(t,n,Wn)}e.memoizedProps=e.pendingProps,n===null?Ci(e):J=n}function wa(e,n,t,a){Ln=Mt=null,Xo(n),da=null,Xa=0;var l=n.return;try{if(qh(e,l,n,t,ee)){Ee=1,ci(e,mn(t,e.current)),J=null;return}}catch(i){if(l!==null)throw J=l,i;Ee=1,ci(e,mn(t,e.current)),J=null;return}n.flags&32768?(te||a===1?e=!0:va||(ee&536870912)!==0?e=!1:(ut=e=!0,(a===2||a===9||a===3||a===6)&&(a=on.current,a!==null&&a.tag===13&&(a.flags|=16384))),yd(n,e)):Ci(n)}function Ci(e){var n=e;do{if((n.flags&32768)!==0){yd(n,ut);return}e=n.return;var t=Wh(n.alternate,n,Wn);if(t!==null){J=t;return}if(n=n.sibling,n!==null){J=n;return}J=n=e}while(n!==null);Ee===0&&(Ee=5)}function yd(e,n){do{var t=Qh(e.alternate,e);if(t!==null){t.flags&=32767,J=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){J=e;return}J=e=t}while(e!==null);Ee=6,J=null}function gd(e,n,t,a,l,i,o,r,c){e.cancelPendingCommit=null;do wi();while(Be!==0);if((oe&6)!==0)throw Error(h(327));if(n!==null){if(n===e.current)throw Error(h(177));if(i=n.lanes|n.childLanes,i|=bo,zf(e,t,i,o,r,c),e===me&&(J=me=null,ee=0),ba=n,ht=e,Qn=t,Rr=i,Or=l,od=a,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,rp(El,function(){return wd(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||a){a=S.T,S.T=null,l=A.p,A.p=2,o=oe,oe|=4;try{Zh(e,n,t)}finally{oe=o,A.p=l,S.T=a}}Be=1,vd(),Sd(),bd()}}function vd(){if(Be===1){Be=0;var e=ht,n=ba,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=S.T,S.T=null;var a=A.p;A.p=2;var l=oe;oe|=4;try{Ju(n,e);var i=Fr,o=ls(e.containerInfo),r=i.focusedElem,c=i.selectionRange;if(o!==r&&r&&r.ownerDocument&&as(r.ownerDocument.documentElement,r)){if(c!==null&&mo(r)){var m=c.start,v=c.end;if(v===void 0&&(v=m),"selectionStart"in r)r.selectionStart=m,r.selectionEnd=Math.min(v,r.value.length);else{var C=r.ownerDocument||document,y=C&&C.defaultView||window;if(y.getSelection){var g=y.getSelection(),R=r.textContent.length,U=Math.min(c.start,R),he=c.end===void 0?U:Math.min(c.end,R);!g.extend&&U>he&&(o=he,he=U,U=o);var d=ts(r,U),s=ts(r,he);if(d&&s&&(g.rangeCount!==1||g.anchorNode!==d.node||g.anchorOffset!==d.offset||g.focusNode!==s.node||g.focusOffset!==s.offset)){var p=C.createRange();p.setStart(d.node,d.offset),g.removeAllRanges(),U>he?(g.addRange(p),g.extend(s.node,s.offset)):(p.setEnd(s.node,s.offset),g.addRange(p))}}}}for(C=[],g=r;g=g.parentNode;)g.nodeType===1&&C.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<C.length;r++){var b=C[r];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}Ui=!!Yr,Fr=Yr=null}finally{oe=l,A.p=a,S.T=t}}e.current=n,Be=2}}function Sd(){if(Be===2){Be=0;var e=ht,n=ba,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=S.T,S.T=null;var a=A.p;A.p=2;var l=oe;oe|=4;try{Xu(e,n.alternate,n)}finally{oe=l,A.p=a,S.T=t}}Be=3}}function bd(){if(Be===4||Be===3){Be=0,Df();var e=ht,n=ba,t=Qn,a=od;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Be=5:(Be=0,ba=ht=null,Cd(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(ft=null),Qi(t),n=n.stateNode,nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Oa,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=S.T,l=A.p,A.p=2,S.T=null;try{for(var i=e.onRecoverableError,o=0;o<a.length;o++){var r=a[o];i(r.value,{componentStack:r.stack})}}finally{S.T=n,A.p=l}}(Qn&3)!==0&&wi(),kn(e),l=e.pendingLanes,(t&261930)!==0&&(l&42)!==0?e===Nr?ul++:(ul=0,Nr=e):ul=0,dl(0)}}function Cd(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,qa(n)))}function wi(){return vd(),Sd(),bd(),wd()}function wd(){if(Be!==5)return!1;var e=ht,n=Rr;Rr=0;var t=Qi(Qn),a=S.T,l=A.p;try{A.p=32>t?32:t,S.T=null,t=Or,Or=null;var i=ht,o=Qn;if(Be=0,ba=ht=null,Qn=0,(oe&6)!==0)throw Error(h(331));var r=oe;if(oe|=4,ad(i.current),ed(i,i.current,o,t),oe=r,dl(0,!1),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Oa,i)}catch{}return!0}finally{A.p=l,S.T=a,Cd(e,n)}}function Td(e,n,t){n=mn(t,n),n=cr(e.stateNode,n,2),e=ot(e,n,2),e!==null&&(ka(e,2),kn(e))}function se(e,n,t){if(e.tag===3)Td(e,e,t);else for(;n!==null;){if(n.tag===3){Td(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ft===null||!ft.has(a))){e=mn(t,e),t=Eu(2),a=ot(n,t,2),a!==null&&(xu(t,a,n,e),ka(a,2),kn(a));break}}n=n.return}}function Mr(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new $h;var l=new Set;a.set(n,l)}else l=a.get(n),l===void 0&&(l=new Set,a.set(n,l));l.has(t)||(xr=!0,l.add(t),e=lp.bind(null,e,n,t),n.then(e,e))}function lp(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,me===e&&(ee&t)===t&&(Ee===4||Ee===3&&(ee&62914560)===ee&&300>en()-yi?(oe&2)===0&&Ca(e,0):Ar|=t,Sa===ee&&(Sa=0)),kn(e)}function Ed(e,n){n===0&&(n=vc()),e=Nt(e,n),e!==null&&(ka(e,n),kn(e))}function ip(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Ed(e,t)}function op(e,n){var t=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(h(314))}a!==null&&a.delete(n),Ed(e,t)}function rp(e,n){return qi(e,n)}var Ti=null,Ta=null,Ur=!1,Ei=!1,_r=!1,mt=0;function kn(e){e!==Ta&&e.next===null&&(Ta===null?Ti=Ta=e:Ta=Ta.next=e),Ei=!0,Ur||(Ur=!0,sp())}function dl(e,n){if(!_r&&Ei){_r=!0;do for(var t=!1,a=Ti;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var o=a.suspendedLanes,r=a.pingedLanes;i=(1<<31-tn(42|e)+1)-1,i&=l&~(o&~r),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(t=!0,Rd(a,i))}else i=ee,i=Rl(a,a===me?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Na(a,i)||(t=!0,Rd(a,i));a=a.next}while(t);_r=!1}}function cp(){xd()}function xd(){Ei=Ur=!1;var e=0;mt!==0&&Sp()&&(e=mt);for(var n=en(),t=null,a=Ti;a!==null;){var l=a.next,i=Ad(a,n);i===0?(a.next=null,t===null?Ti=l:t.next=l,l===null&&(Ta=t)):(t=a,(e!==0||(i&3)!==0)&&(Ei=!0)),a=l}Be!==0&&Be!==5||dl(e),mt!==0&&(mt=0)}function Ad(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var o=31-tn(i),r=1<<o,c=l[o];c===-1?((r&t)===0||(r&a)!==0)&&(l[o]=_f(r,n)):c<=n&&(e.expiredLanes|=r),i&=~r}if(n=me,t=ee,t=Rl(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,t===0||e===n&&(ce===2||ce===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Ii(a),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Na(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(a!==null&&Ii(a),Qi(t)){case 2:case 8:t=yc;break;case 32:t=El;break;case 268435456:t=gc;break;default:t=El}return a=Dd.bind(null,e),t=qi(t,a),e.callbackPriority=n,e.callbackNode=t,n}return a!==null&&a!==null&&Ii(a),e.callbackPriority=2,e.callbackNode=null,2}function Dd(e,n){if(Be!==0&&Be!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(wi()&&e.callbackNode!==t)return null;var a=ee;return a=Rl(e,e===me?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(cd(e,a,n),Ad(e,en()),e.callbackNode!=null&&e.callbackNode===t?Dd.bind(null,e):null)}function Rd(e,n){if(wi())return null;cd(e,n,!0)}function sp(){Cp(function(){(oe&6)!==0?qi(mc,cp):xd()})}function zr(){if(mt===0){var e=ca;e===0&&(e=xl,xl<<=1,(xl&261888)===0&&(xl=256)),mt=e}return mt}function Od(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Bl(""+e)}function Nd(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function up(e,n,t,a,l){if(n==="submit"&&t&&t.stateNode===l){var i=Od((l[Xe]||null).action),o=a.submitter;o&&(n=(n=o[Xe]||null)?Od(n.formAction):o.getAttribute("formAction"),n!==null&&(i=n,o=null));var r=new zl("action","action",null,a,l);e.push({event:r,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(mt!==0){var c=o?Nd(l,o):new FormData(l);tr(t,{pending:!0,data:c,method:l.method,action:i},null,c)}}else typeof i=="function"&&(r.preventDefault(),c=o?Nd(l,o):new FormData(l),tr(t,{pending:!0,data:c,method:l.method,action:i},i,c))},currentTarget:l}]})}}for(var Gr=0;Gr<So.length;Gr++){var Lr=So[Gr],dp=Lr.toLowerCase(),fp=Lr[0].toUpperCase()+Lr.slice(1);Tn(dp,"on"+fp)}Tn(rs,"onAnimationEnd"),Tn(cs,"onAnimationIteration"),Tn(ss,"onAnimationStart"),Tn("dblclick","onDoubleClick"),Tn("focusin","onFocus"),Tn("focusout","onBlur"),Tn(Rh,"onTransitionRun"),Tn(Oh,"onTransitionStart"),Tn(Nh,"onTransitionCancel"),Tn(us,"onTransitionEnd"),Wt("onMouseEnter",["mouseout","mouseover"]),Wt("onMouseLeave",["mouseout","mouseover"]),Wt("onPointerEnter",["pointerout","pointerover"]),Wt("onPointerLeave",["pointerout","pointerover"]),At("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),At("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),At("onBeforeInput",["compositionend","keypress","textInput","paste"]),At("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),At("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),At("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fl));function kd(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],l=a.event;a=a.listeners;e:{var i=void 0;if(n)for(var o=a.length-1;0<=o;o--){var r=a[o],c=r.instance,m=r.currentTarget;if(r=r.listener,c!==i&&l.isPropagationStopped())break e;i=r,l.currentTarget=m;try{i(l)}catch(v){Hl(v)}l.currentTarget=null,i=c}else for(o=0;o<a.length;o++){if(r=a[o],c=r.instance,m=r.currentTarget,r=r.listener,c!==i&&l.isPropagationStopped())break e;i=r,l.currentTarget=m;try{i(l)}catch(v){Hl(v)}l.currentTarget=null,i=c}}}}function $(e,n){var t=n[Zi];t===void 0&&(t=n[Zi]=new Set);var a=e+"__bubble";t.has(a)||(Bd(n,e,2,!1),t.add(a))}function Hr(e,n,t){var a=0;n&&(a|=4),Bd(t,e,a,n)}var xi="_reactListening"+Math.random().toString(36).slice(2);function jr(e){if(!e[xi]){e[xi]=!0,xc.forEach(function(t){t!=="selectionchange"&&(hp.has(t)||Hr(t,!1,e),Hr(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[xi]||(n[xi]=!0,Hr("selectionchange",!1,n))}}function Bd(e,n,t,a){switch(cf(n)){case 2:var l=Pp;break;case 8:l=Vp;break;default:l=nc}t=l.bind(null,n,t,e),l=void 0,!io||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Pr(e,n,t,a,l){var i=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var r=a.stateNode.containerInfo;if(r===l)break;if(o===4)for(o=a.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===l)return;o=o.return}for(;r!==null;){if(o=qt(r),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){a=i=o;continue e}r=r.parentNode}}a=a.return}Gc(function(){var m=i,v=ao(t),C=[];e:{var y=ds.get(e);if(y!==void 0){var g=zl,R=e;switch(e){case"keypress":if(Ul(t)===0)break e;case"keydown":case"keyup":g=oh;break;case"focusin":R="focus",g=so;break;case"focusout":R="blur",g=so;break;case"beforeblur":case"afterblur":g=so;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=jc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Wf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=sh;break;case rs:case cs:case ss:g=Kf;break;case us:g=dh;break;case"scroll":case"scrollend":g=If;break;case"wheel":g=hh;break;case"copy":case"cut":case"paste":g=$f;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Vc;break;case"toggle":case"beforetoggle":g=mh}var U=(n&4)!==0,he=!U&&(e==="scroll"||e==="scrollend"),d=U?y!==null?y+"Capture":null:y;U=[];for(var s=m,p;s!==null;){var b=s;if(p=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||p===null||d===null||(b=Ua(s,d),b!=null&&U.push(hl(s,b,p))),he)break;s=s.return}0<U.length&&(y=new g(y,R,null,t,v),C.push({event:y,listeners:U}))}}if((n&7)===0){e:{if(y=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",y&&t!==to&&(R=t.relatedTarget||t.fromElement)&&(qt(R)||R[Ft]))break e;if((g||y)&&(y=v.window===v?v:(y=v.ownerDocument)?y.defaultView||y.parentWindow:window,g?(R=t.relatedTarget||t.toElement,g=m,R=R?qt(R):null,R!==null&&(he=L(R),U=R.tag,R!==he||U!==5&&U!==27&&U!==6)&&(R=null)):(g=null,R=m),g!==R)){if(U=jc,b="onMouseLeave",d="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(U=Vc,b="onPointerLeave",d="onPointerEnter",s="pointer"),he=g==null?y:Ma(g),p=R==null?y:Ma(R),y=new U(b,s+"leave",g,t,v),y.target=he,y.relatedTarget=p,b=null,qt(v)===m&&(U=new U(d,s+"enter",R,t,v),U.target=p,U.relatedTarget=he,b=U),he=b,g&&R)n:{for(U=pp,d=g,s=R,p=0,b=d;b;b=U(b))p++;b=0;for(var B=s;B;B=U(B))b++;for(;0<p-b;)d=U(d),p--;for(;0<b-p;)s=U(s),b--;for(;p--;){if(d===s||s!==null&&d===s.alternate){U=d;break n}d=U(d),s=U(s)}U=null}else U=null;g!==null&&Md(C,y,g,U,!1),R!==null&&he!==null&&Md(C,he,R,U,!0)}}e:{if(y=m?Ma(m):window,g=y.nodeName&&y.nodeName.toLowerCase(),g==="select"||g==="input"&&y.type==="file")var le=Zc;else if(Wc(y))if(Kc)le=xh;else{le=Th;var N=wh}else g=y.nodeName,!g||g.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?m&&no(m.elementType)&&(le=Zc):le=Eh;if(le&&(le=le(e,m))){Qc(C,le,t,v);break e}N&&N(e,y,m),e==="focusout"&&m&&y.type==="number"&&m.memoizedProps.value!=null&&eo(y,"number",y.value)}switch(N=m?Ma(m):window,e){case"focusin":(Wc(N)||N.contentEditable==="true")&&(ea=N,yo=m,Va=null);break;case"focusout":Va=yo=ea=null;break;case"mousedown":go=!0;break;case"contextmenu":case"mouseup":case"dragend":go=!1,is(C,t,v);break;case"selectionchange":if(Dh)break;case"keydown":case"keyup":is(C,t,v)}var q;if(fo)e:{switch(e){case"compositionstart":var ne="onCompositionStart";break e;case"compositionend":ne="onCompositionEnd";break e;case"compositionupdate":ne="onCompositionUpdate";break e}ne=void 0}else $t?Ic(e,t)&&(ne="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(ne="onCompositionStart");ne&&(Yc&&t.locale!=="ko"&&($t||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&$t&&(q=Lc()):($n=v,oo="value"in $n?$n.value:$n.textContent,$t=!0)),N=Ai(m,ne),0<N.length&&(ne=new Pc(ne,e,null,t,v),C.push({event:ne,listeners:N}),q?ne.data=q:(q=Xc(t),q!==null&&(ne.data=q)))),(q=gh?vh(e,t):Sh(e,t))&&(ne=Ai(m,"onBeforeInput"),0<ne.length&&(N=new Pc("onBeforeInput","beforeinput",null,t,v),C.push({event:N,listeners:ne}),N.data=q)),up(C,e,m,t,v)}kd(C,n)})}function hl(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ai(e,n){for(var t=n+"Capture",a=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Ua(e,t),l!=null&&a.unshift(hl(e,l,i)),l=Ua(e,n),l!=null&&a.push(hl(e,l,i))),e.tag===3)return a;e=e.return}return[]}function pp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Md(e,n,t,a,l){for(var i=n._reactName,o=[];t!==null&&t!==a;){var r=t,c=r.alternate,m=r.stateNode;if(r=r.tag,c!==null&&c===a)break;r!==5&&r!==26&&r!==27||m===null||(c=m,l?(m=Ua(t,i),m!=null&&o.unshift(hl(t,m,c))):l||(m=Ua(t,i),m!=null&&o.push(hl(t,m,c)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var mp=/\r\n?/g,yp=/\u0000|\uFFFD/g;function Ud(e){return(typeof e=="string"?e:""+e).replace(mp,`
`).replace(yp,"")}function _d(e,n){return n=Ud(n),Ud(e)===n}function fe(e,n,t,a,l,i){switch(t){case"children":typeof a=="string"?n==="body"||n==="textarea"&&a===""||Zt(e,a):(typeof a=="number"||typeof a=="bigint")&&n!=="body"&&Zt(e,""+a);break;case"className":Nl(e,"class",a);break;case"tabIndex":Nl(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Nl(e,t,a);break;case"style":_c(e,a,i);break;case"data":if(n!=="object"){Nl(e,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=Bl(""+a),e.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(t==="formAction"?(n!=="input"&&fe(e,n,"name",l.name,l,null),fe(e,n,"formEncType",l.formEncType,l,null),fe(e,n,"formMethod",l.formMethod,l,null),fe(e,n,"formTarget",l.formTarget,l,null)):(fe(e,n,"encType",l.encType,l,null),fe(e,n,"method",l.method,l,null),fe(e,n,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=Bl(""+a),e.setAttribute(t,a);break;case"onClick":a!=null&&(e.onclick=Un);break;case"onScroll":a!=null&&$("scroll",e);break;case"onScrollEnd":a!=null&&$("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(h(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(h(60));e.innerHTML=t}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}t=Bl(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""+a):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":a===!0?e.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(t,a):e.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(t):e.setAttribute(t,a);break;case"popover":$("beforetoggle",e),$("toggle",e),Ol(e,"popover",a);break;case"xlinkActuate":Mn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Mn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Mn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Mn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Mn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Mn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Mn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Mn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Mn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ol(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Ff.get(t)||t,Ol(e,t,a))}}function Vr(e,n,t,a,l,i){switch(t){case"style":_c(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(h(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(h(60));e.innerHTML=t}}break;case"children":typeof a=="string"?Zt(e,a):(typeof a=="number"||typeof a=="bigint")&&Zt(e,""+a);break;case"onScroll":a!=null&&$("scroll",e);break;case"onScrollEnd":a!=null&&$("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Un);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ac.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),n=t.slice(2,l?t.length-7:void 0),i=e[Xe]||null,i=i!=null?i[t]:null,typeof i=="function"&&e.removeEventListener(n,i,l),typeof a=="function")){typeof i!="function"&&i!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,a,l);break e}t in e?e[t]=a:a===!0?e.setAttribute(t,""):Ol(e,t,a)}}}function je(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":$("error",e),$("load",e);var a=!1,l=!1,i;for(i in t)if(t.hasOwnProperty(i)){var o=t[i];if(o!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,n));default:fe(e,n,i,o,t,null)}}l&&fe(e,n,"srcSet",t.srcSet,t,null),a&&fe(e,n,"src",t.src,t,null);return;case"input":$("invalid",e);var r=i=o=l=null,c=null,m=null;for(a in t)if(t.hasOwnProperty(a)){var v=t[a];if(v!=null)switch(a){case"name":l=v;break;case"type":o=v;break;case"checked":c=v;break;case"defaultChecked":m=v;break;case"value":i=v;break;case"defaultValue":r=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(h(137,n));break;default:fe(e,n,a,v,t,null)}}kc(e,i,r,c,m,o,l,!1);return;case"select":$("invalid",e),a=o=i=null;for(l in t)if(t.hasOwnProperty(l)&&(r=t[l],r!=null))switch(l){case"value":i=r;break;case"defaultValue":o=r;break;case"multiple":a=r;default:fe(e,n,l,r,t,null)}n=i,t=o,e.multiple=!!a,n!=null?Qt(e,!!a,n,!1):t!=null&&Qt(e,!!a,t,!0);return;case"textarea":$("invalid",e),i=l=a=null;for(o in t)if(t.hasOwnProperty(o)&&(r=t[o],r!=null))switch(o){case"value":a=r;break;case"defaultValue":l=r;break;case"children":i=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(h(91));break;default:fe(e,n,o,r,t,null)}Mc(e,a,l,i);return;case"option":for(c in t)t.hasOwnProperty(c)&&(a=t[c],a!=null)&&(c==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":fe(e,n,c,a,t,null));return;case"dialog":$("beforetoggle",e),$("toggle",e),$("cancel",e),$("close",e);break;case"iframe":case"object":$("load",e);break;case"video":case"audio":for(a=0;a<fl.length;a++)$(fl[a],e);break;case"image":$("error",e),$("load",e);break;case"details":$("toggle",e);break;case"embed":case"source":case"link":$("error",e),$("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in t)if(t.hasOwnProperty(m)&&(a=t[m],a!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,n));default:fe(e,n,m,a,t,null)}return;default:if(no(n)){for(v in t)t.hasOwnProperty(v)&&(a=t[v],a!==void 0&&Vr(e,n,v,a,t,void 0));return}}for(r in t)t.hasOwnProperty(r)&&(a=t[r],a!=null&&fe(e,n,r,a,t,null))}function gp(e,n,t,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,o=null,r=null,c=null,m=null,v=null;for(g in t){var C=t[g];if(t.hasOwnProperty(g)&&C!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":c=C;default:a.hasOwnProperty(g)||fe(e,n,g,null,a,C)}}for(var y in a){var g=a[y];if(C=t[y],a.hasOwnProperty(y)&&(g!=null||C!=null))switch(y){case"type":i=g;break;case"name":l=g;break;case"checked":m=g;break;case"defaultChecked":v=g;break;case"value":o=g;break;case"defaultValue":r=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(h(137,n));break;default:g!==C&&fe(e,n,y,g,a,C)}}$i(e,o,r,c,m,v,i,l);return;case"select":g=o=r=y=null;for(i in t)if(c=t[i],t.hasOwnProperty(i)&&c!=null)switch(i){case"value":break;case"multiple":g=c;default:a.hasOwnProperty(i)||fe(e,n,i,null,a,c)}for(l in a)if(i=a[l],c=t[l],a.hasOwnProperty(l)&&(i!=null||c!=null))switch(l){case"value":y=i;break;case"defaultValue":r=i;break;case"multiple":o=i;default:i!==c&&fe(e,n,l,i,a,c)}n=r,t=o,a=g,y!=null?Qt(e,!!t,y,!1):!!a!=!!t&&(n!=null?Qt(e,!!t,n,!0):Qt(e,!!t,t?[]:"",!1));return;case"textarea":g=y=null;for(r in t)if(l=t[r],t.hasOwnProperty(r)&&l!=null&&!a.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:fe(e,n,r,null,a,l)}for(o in a)if(l=a[o],i=t[o],a.hasOwnProperty(o)&&(l!=null||i!=null))switch(o){case"value":y=l;break;case"defaultValue":g=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(h(91));break;default:l!==i&&fe(e,n,o,l,a,i)}Bc(e,y,g);return;case"option":for(var R in t)y=t[R],t.hasOwnProperty(R)&&y!=null&&!a.hasOwnProperty(R)&&(R==="selected"?e.selected=!1:fe(e,n,R,null,a,y));for(c in a)y=a[c],g=t[c],a.hasOwnProperty(c)&&y!==g&&(y!=null||g!=null)&&(c==="selected"?e.selected=y&&typeof y!="function"&&typeof y!="symbol":fe(e,n,c,y,a,g));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var U in t)y=t[U],t.hasOwnProperty(U)&&y!=null&&!a.hasOwnProperty(U)&&fe(e,n,U,null,a,y);for(m in a)if(y=a[m],g=t[m],a.hasOwnProperty(m)&&y!==g&&(y!=null||g!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(h(137,n));break;default:fe(e,n,m,y,a,g)}return;default:if(no(n)){for(var he in t)y=t[he],t.hasOwnProperty(he)&&y!==void 0&&!a.hasOwnProperty(he)&&Vr(e,n,he,void 0,a,y);for(v in a)y=a[v],g=t[v],!a.hasOwnProperty(v)||y===g||y===void 0&&g===void 0||Vr(e,n,v,y,a,g);return}}for(var d in t)y=t[d],t.hasOwnProperty(d)&&y!=null&&!a.hasOwnProperty(d)&&fe(e,n,d,null,a,y);for(C in a)y=a[C],g=t[C],!a.hasOwnProperty(C)||y===g||y==null&&g==null||fe(e,n,C,y,a,g)}function zd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),a=0;a<t.length;a++){var l=t[a],i=l.transferSize,o=l.initiatorType,r=l.duration;if(i&&r&&zd(o)){for(o=0,r=l.responseEnd,a+=1;a<t.length;a++){var c=t[a],m=c.startTime;if(m>r)break;var v=c.transferSize,C=c.initiatorType;v&&zd(C)&&(c=c.responseEnd,o+=v*(c<r?1:(r-m)/(c-m)))}if(--a,n+=8*(i+o)/(l.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Yr=null,Fr=null;function Di(e){return e.nodeType===9?e:e.ownerDocument}function Gd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ld(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function qr(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ir=null;function Sp(){var e=window.event;return e&&e.type==="popstate"?e===Ir?!1:(Ir=e,!0):(Ir=null,!1)}var Hd=typeof setTimeout=="function"?setTimeout:void 0,bp=typeof clearTimeout=="function"?clearTimeout:void 0,jd=typeof Promise=="function"?Promise:void 0,Cp=typeof queueMicrotask=="function"?queueMicrotask:typeof jd<"u"?function(e){return jd.resolve(null).then(e).catch(wp)}:Hd;function wp(e){setTimeout(function(){throw e})}function yt(e){return e==="head"}function Pd(e,n){var t=n,a=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"||t==="/&"){if(a===0){e.removeChild(l),Da(n);return}a--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")a++;else if(t==="html")pl(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,pl(t);for(var i=t.firstChild;i;){var o=i.nextSibling,r=i.nodeName;i[Ba]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&i.rel.toLowerCase()==="stylesheet"||t.removeChild(i),i=o}}else t==="body"&&pl(e.ownerDocument.body);t=l}while(t);Da(n)}function Vd(e,n){var t=e;e=0;do{var a=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=a}while(t)}function Xr(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Xr(t),Ki(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function Tp(e,n,t,a){for(;e.nodeType===1;){var l=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ba])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=bn(e.nextSibling),e===null)break}return null}function Ep(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=bn(e.nextSibling),e===null))return null;return e}function Yd(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=bn(e.nextSibling),e===null))return null;return e}function Wr(e){return e.data==="$?"||e.data==="$~"}function Qr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function xp(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var a=function(){n(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function bn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Zr=null;function Fd(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return bn(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function qd(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function Id(e,n,t){switch(n=Di(t),e){case"html":if(e=n.documentElement,!e)throw Error(h(452));return e;case"head":if(e=n.head,!e)throw Error(h(453));return e;case"body":if(e=n.body,!e)throw Error(h(454));return e;default:throw Error(h(451))}}function pl(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ki(e)}var Cn=new Map,Xd=new Set;function Ri(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Zn=A.d;A.d={f:Ap,r:Dp,D:Rp,C:Op,L:Np,m:kp,X:Mp,S:Bp,M:Up};function Ap(){var e=Zn.f(),n=Si();return e||n}function Dp(e){var n=It(e);n!==null&&n.tag===5&&n.type==="form"?uu(n):Zn.r(e)}var Ea=typeof document>"u"?null:document;function Wd(e,n,t){var a=Ea;if(a&&typeof n=="string"&&n){var l=hn(n);l='link[rel="'+e+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),Xd.has(l)||(Xd.add(l),e={rel:e,crossOrigin:t,href:n},a.querySelector(l)===null&&(n=a.createElement("link"),je(n,"link",e),Me(n),a.head.appendChild(n)))}}function Rp(e){Zn.D(e),Wd("dns-prefetch",e,null)}function Op(e,n){Zn.C(e,n),Wd("preconnect",e,n)}function Np(e,n,t){Zn.L(e,n,t);var a=Ea;if(a&&e&&n){var l='link[rel="preload"][as="'+hn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+hn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+hn(t.imageSizes)+'"]')):l+='[href="'+hn(e)+'"]';var i=l;switch(n){case"style":i=xa(e);break;case"script":i=Aa(e)}Cn.has(i)||(e=k({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),Cn.set(i,e),a.querySelector(l)!==null||n==="style"&&a.querySelector(ml(i))||n==="script"&&a.querySelector(yl(i))||(n=a.createElement("link"),je(n,"link",e),Me(n),a.head.appendChild(n)))}}function kp(e,n){Zn.m(e,n);var t=Ea;if(t&&e){var a=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+hn(a)+'"][href="'+hn(e)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Aa(e)}if(!Cn.has(i)&&(e=k({rel:"modulepreload",href:e},n),Cn.set(i,e),t.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(yl(i)))return}a=t.createElement("link"),je(a,"link",e),Me(a),t.head.appendChild(a)}}}function Bp(e,n,t){Zn.S(e,n,t);var a=Ea;if(a&&e){var l=Xt(a).hoistableStyles,i=xa(e);n=n||"default";var o=l.get(i);if(!o){var r={loading:0,preload:null};if(o=a.querySelector(ml(i)))r.loading=5;else{e=k({rel:"stylesheet",href:e,"data-precedence":n},t),(t=Cn.get(i))&&Kr(e,t);var c=o=a.createElement("link");Me(c),je(c,"link",e),c._p=new Promise(function(m,v){c.onload=m,c.onerror=v}),c.addEventListener("load",function(){r.loading|=1}),c.addEventListener("error",function(){r.loading|=2}),r.loading|=4,Oi(o,n,a)}o={type:"stylesheet",instance:o,count:1,state:r},l.set(i,o)}}}function Mp(e,n){Zn.X(e,n);var t=Ea;if(t&&e){var a=Xt(t).hoistableScripts,l=Aa(e),i=a.get(l);i||(i=t.querySelector(yl(l)),i||(e=k({src:e,async:!0},n),(n=Cn.get(l))&&Jr(e,n),i=t.createElement("script"),Me(i),je(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function Up(e,n){Zn.M(e,n);var t=Ea;if(t&&e){var a=Xt(t).hoistableScripts,l=Aa(e),i=a.get(l);i||(i=t.querySelector(yl(l)),i||(e=k({src:e,async:!0,type:"module"},n),(n=Cn.get(l))&&Jr(e,n),i=t.createElement("script"),Me(i),je(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function Qd(e,n,t,a){var l=(l=K.current)?Ri(l):null;if(!l)throw Error(h(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=xa(t.href),t=Xt(l).hoistableStyles,a=t.get(n),a||(a={type:"style",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=xa(t.href);var i=Xt(l).hoistableStyles,o=i.get(e);if(o||(l=l.ownerDocument||l,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,o),(i=l.querySelector(ml(e)))&&!i._p&&(o.instance=i,o.state.loading=5),Cn.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Cn.set(e,t),i||_p(l,e,t,o.state))),n&&a===null)throw Error(h(528,""));return o}if(n&&a!==null)throw Error(h(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Aa(t),t=Xt(l).hoistableScripts,a=t.get(n),a||(a={type:"script",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,e))}}function xa(e){return'href="'+hn(e)+'"'}function ml(e){return'link[rel="stylesheet"]['+e+"]"}function Zd(e){return k({},e,{"data-precedence":e.precedence,precedence:null})}function _p(e,n,t,a){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?a.loading=1:(n=e.createElement("link"),a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2}),je(n,"link",t),Me(n),e.head.appendChild(n))}function Aa(e){return'[src="'+hn(e)+'"]'}function yl(e){return"script[async]"+e}function Kd(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var a=e.querySelector('style[data-href~="'+hn(t.href)+'"]');if(a)return n.instance=a,Me(a),a;var l=k({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Me(a),je(a,"style",l),Oi(a,t.precedence,e),n.instance=a;case"stylesheet":l=xa(t.href);var i=e.querySelector(ml(l));if(i)return n.state.loading|=4,n.instance=i,Me(i),i;a=Zd(t),(l=Cn.get(l))&&Kr(a,l),i=(e.ownerDocument||e).createElement("link"),Me(i);var o=i;return o._p=new Promise(function(r,c){o.onload=r,o.onerror=c}),je(i,"link",a),n.state.loading|=4,Oi(i,t.precedence,e),n.instance=i;case"script":return i=Aa(t.src),(l=e.querySelector(yl(i)))?(n.instance=l,Me(l),l):(a=t,(l=Cn.get(i))&&(a=k({},t),Jr(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Me(l),je(l,"link",a),e.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(h(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,Oi(a,t.precedence,e));return n.instance}function Oi(e,n,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,o=0;o<a.length;o++){var r=a[o];if(r.dataset.precedence===n)i=r;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function Kr(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Jr(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Ni=null;function Jd(e,n,t){if(Ni===null){var a=new Map,l=Ni=new Map;l.set(t,a)}else l=Ni,a=l.get(t),a||(a=new Map,l.set(t,a));if(a.has(e))return a;for(a.set(e,null),t=t.getElementsByTagName(e),l=0;l<t.length;l++){var i=t[l];if(!(i[Ba]||i[ze]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(n)||"";o=e+o;var r=a.get(o);r?r.push(i):a.set(o,[i])}}return a}function $d(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function zp(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ef(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Gp(e,n,t,a){if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=xa(a.href),i=n.querySelector(ml(l));if(i){n=i._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ki.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=i,Me(i);return}i=n.ownerDocument||n,a=Zd(a),(l=Cn.get(l))&&Kr(a,l),i=i.createElement("link"),Me(i);var o=i;o._p=new Promise(function(r,c){o.onload=r,o.onerror=c}),je(i,"link",a),t.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=ki.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var $r=0;function Lp(e,n){return e.stylesheets&&e.count===0&&Mi(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var a=setTimeout(function(){if(e.stylesheets&&Mi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+n);0<e.imgBytes&&$r===0&&($r=62500*vp());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Mi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>$r?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function ki(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Mi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Bi=null;function Mi(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bi=new Map,n.forEach(Hp,e),Bi=null,ki.call(e))}function Hp(e,n){if(!(n.state.loading&4)){var t=Bi.get(e);if(t)var a=t.get(null);else{t=new Map,Bi.set(e,t);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var o=l[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(t.set(o.dataset.precedence,o),a=o)}a&&t.set(null,a)}l=n.instance,o=l.getAttribute("data-precedence"),i=t.get(o)||a,i===a&&t.set(null,l),t.set(o,l),this.count++,a=ki.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),n.state.loading|=4}}var gl={$$typeof:ge,Provider:null,Consumer:null,_currentValue:_,_currentValue2:_,_threadCount:0};function jp(e,n,t,a,l,i,o,r,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xi(0),this.hiddenUpdates=Xi(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function nf(e,n,t,a,l,i,o,r,c,m,v,C){return e=new jp(e,n,t,o,c,m,v,C,r),n=1,i===!0&&(n|=24),i=ln(3,null,null,n),e.current=i,i.stateNode=e,n=Bo(),n.refCount++,e.pooledCache=n,n.refCount++,i.memoizedState={element:a,isDehydrated:t,cache:n},zo(i),e}function tf(e){return e?(e=aa,e):aa}function af(e,n,t,a,l,i){l=tf(l),a.context===null?a.context=l:a.pendingContext=l,a=it(n),a.payload={element:t},i=i===void 0?null:i,i!==null&&(a.callback=i),t=ot(e,a,n),t!==null&&($e(t,e,n),Qa(t,e,n))}function lf(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ec(e,n){lf(e,n),(e=e.alternate)&&lf(e,n)}function of(e){if(e.tag===13||e.tag===31){var n=Nt(e,67108864);n!==null&&$e(n,e,67108864),ec(e,67108864)}}function rf(e){if(e.tag===13||e.tag===31){var n=un();n=Wi(n);var t=Nt(e,n);t!==null&&$e(t,e,n),ec(e,n)}}var Ui=!0;function Pp(e,n,t,a){var l=S.T;S.T=null;var i=A.p;try{A.p=2,nc(e,n,t,a)}finally{A.p=i,S.T=l}}function Vp(e,n,t,a){var l=S.T;S.T=null;var i=A.p;try{A.p=8,nc(e,n,t,a)}finally{A.p=i,S.T=l}}function nc(e,n,t,a){if(Ui){var l=tc(a);if(l===null)Pr(e,n,a,_i,t),sf(e,a);else if(Fp(l,e,n,t,a))a.stopPropagation();else if(sf(e,a),n&4&&-1<Yp.indexOf(e)){for(;l!==null;){var i=It(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=xt(i.pendingLanes);if(o!==0){var r=i;for(r.pendingLanes|=2,r.entangledLanes|=2;o;){var c=1<<31-tn(o);r.entanglements[1]|=c,o&=~c}kn(i),(oe&6)===0&&(gi=en()+500,dl(0))}}break;case 31:case 13:r=Nt(i,2),r!==null&&$e(r,i,2),Si(),ec(i,2)}if(i=tc(a),i===null&&Pr(e,n,a,_i,t),i===l)break;l=i}l!==null&&a.stopPropagation()}else Pr(e,n,a,null,t)}}function tc(e){return e=ao(e),ac(e)}var _i=null;function ac(e){if(_i=null,e=qt(e),e!==null){var n=L(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=Y(n),e!==null)return e;e=null}else if(t===31){if(e=j(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return _i=e,null}function cf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rf()){case mc:return 2;case yc:return 8;case El:case Of:return 32;case gc:return 268435456;default:return 32}default:return 32}}var lc=!1,gt=null,vt=null,St=null,vl=new Map,Sl=new Map,bt=[],Yp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sf(e,n){switch(e){case"focusin":case"focusout":gt=null;break;case"dragenter":case"dragleave":vt=null;break;case"mouseover":case"mouseout":St=null;break;case"pointerover":case"pointerout":vl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sl.delete(n.pointerId)}}function bl(e,n,t,a,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},n!==null&&(n=It(n),n!==null&&of(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function Fp(e,n,t,a,l){switch(n){case"focusin":return gt=bl(gt,e,n,t,a,l),!0;case"dragenter":return vt=bl(vt,e,n,t,a,l),!0;case"mouseover":return St=bl(St,e,n,t,a,l),!0;case"pointerover":var i=l.pointerId;return vl.set(i,bl(vl.get(i)||null,e,n,t,a,l)),!0;case"gotpointercapture":return i=l.pointerId,Sl.set(i,bl(Sl.get(i)||null,e,n,t,a,l)),!0}return!1}function uf(e){var n=qt(e.target);if(n!==null){var t=L(n);if(t!==null){if(n=t.tag,n===13){if(n=Y(t),n!==null){e.blockedOn=n,Tc(e.priority,function(){rf(t)});return}}else if(n===31){if(n=j(t),n!==null){e.blockedOn=n,Tc(e.priority,function(){rf(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zi(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=tc(e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);to=a,t.target.dispatchEvent(a),to=null}else return n=It(t),n!==null&&of(n),e.blockedOn=t,!1;n.shift()}return!0}function df(e,n,t){zi(e)&&t.delete(n)}function qp(){lc=!1,gt!==null&&zi(gt)&&(gt=null),vt!==null&&zi(vt)&&(vt=null),St!==null&&zi(St)&&(St=null),vl.forEach(df),Sl.forEach(df)}function Gi(e,n){e.blockedOn===n&&(e.blockedOn=null,lc||(lc=!0,E.unstable_scheduleCallback(E.unstable_NormalPriority,qp)))}var Li=null;function ff(e){Li!==e&&(Li=e,E.unstable_scheduleCallback(E.unstable_NormalPriority,function(){Li===e&&(Li=null);for(var n=0;n<e.length;n+=3){var t=e[n],a=e[n+1],l=e[n+2];if(typeof a!="function"){if(ac(a||t)===null)continue;break}var i=It(t);i!==null&&(e.splice(n,3),n-=3,tr(i,{pending:!0,data:l,method:t.method,action:a},a,l))}}))}function Da(e){function n(c){return Gi(c,e)}gt!==null&&Gi(gt,e),vt!==null&&Gi(vt,e),St!==null&&Gi(St,e),vl.forEach(n),Sl.forEach(n);for(var t=0;t<bt.length;t++){var a=bt[t];a.blockedOn===e&&(a.blockedOn=null)}for(;0<bt.length&&(t=bt[0],t.blockedOn===null);)uf(t),t.blockedOn===null&&bt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var l=t[a],i=t[a+1],o=l[Xe]||null;if(typeof i=="function")o||ff(t);else if(o){var r=null;if(i&&i.hasAttribute("formAction")){if(l=i,o=i[Xe]||null)r=o.formAction;else if(ac(l)!==null)continue}else r=o.action;typeof r=="function"?t[a+1]=r:(t.splice(a,3),a-=3),ff(t)}}}function hf(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return l=o})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),a||setTimeout(t,20)}function t(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function ic(e){this._internalRoot=e}Hi.prototype.render=ic.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(h(409));var t=n.current,a=un();af(t,a,e,n,null,null)},Hi.prototype.unmount=ic.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;af(e.current,2,null,e,null,null),Si(),n[Ft]=null}};function Hi(e){this._internalRoot=e}Hi.prototype.unstable_scheduleHydration=function(e){if(e){var n=wc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<bt.length&&n!==0&&n<bt[t].priority;t++);bt.splice(t,0,e),t===0&&uf(e)}};var pf=W.version;if(pf!=="19.2.4")throw Error(h(527,pf,"19.2.4"));A.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=w(n),e=e!==null?Q(e):null,e=e===null?null:e.stateNode,e};var Ip={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ji=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ji.isDisabled&&ji.supportsFiber)try{Oa=ji.inject(Ip),nn=ji}catch{}}return wl.createRoot=function(e,n){if(!M(e))throw Error(h(299));var t=!1,a="",l=bu,i=Cu,o=wu;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(i=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=nf(e,1,!1,null,null,t,a,null,l,i,o,hf),e[Ft]=n.current,jr(e),new ic(n)},wl.hydrateRoot=function(e,n,t){if(!M(e))throw Error(h(299));var a=!1,l="",i=bu,o=Cu,r=wu,c=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError),t.formState!==void 0&&(c=t.formState)),n=nf(e,1,!0,n,t??null,a,l,c,i,o,r,hf),n.context=tf(null),t=n.current,a=un(),a=Wi(a),l=it(a),l.callback=null,ot(t,l,a),t=a,n.current.lanes=t,ka(n,t),kn(n),e[Ft]=n.current,jr(e),new Hi(n)},wl.version="19.2.4",wl}var Ef;function tm(){if(Ef)return cc.exports;Ef=1;function E(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E)}catch(W){console.error(W)}}return E(),cc.exports=nm(),cc.exports}var am=tm();const wt={title:"Roblox Game Development",description:"Create your own Roblox games with Lua scripting — turn your ideas into playable games millions can enjoy!",chapters:[{id:1,title:"Welcome to Roblox Studio",lessons:[{id:"1-1",title:"What is Roblox Studio?",completed:!1,content:{description:"Discover Roblox Studio — the FREE tool used to create every Roblox game! Learn to navigate, customize, and master your workspace like a professional developer.",sections:[{type:"text",content:`By the end of this lesson, you'll have Roblox Studio installed, understand the complete interface, and be ready to start building your first game world.

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
└────────┴────────────────────────────────────┴─────────────────┘`},{type:"list",items:["**Viewport** (center) — Your 3D view of the game world. Right-click + drag to look around, scroll to zoom, middle-click to pan","**Explorer** (right) — Shows every object in your game as a tree structure. Think of it like a file explorer for your game","**Properties** (right, below Explorer) — Detailed settings for whatever object you've selected. Name, position, color, size, behavior — everything lives here","**Toolbox** (left) — A massive library of free models, plugins, images, and sounds from the Roblox community","**Output** (bottom) — Shows print() messages and error messages from your scripts. This is your debugging lifeline!","**Command Bar** (bottom) — Type Lua code here to run it instantly. Great for quick tests"]},{type:"tip",content:"Can't find a panel? Go to the VIEW tab at the top and click the panel name to toggle it on. The most important panels to have open: Explorer, Properties, and Output."},{type:"heading",level:2,content:"Navigating the 3D Viewport"},{type:"text",content:"Smooth viewport navigation is essential. Professional developers navigate their viewport without even thinking about it — it becomes muscle memory. Here are the controls you'll use hundreds of times per session. Practice these until they feel natural:"},{type:"code",language:"text",filename:"viewport_controls.txt",code:`Camera Controls:
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
• Double-click an object in Explorer to zoom to it`},{type:"heading",level:2,content:"Customizing Your Workspace"},{type:"text",content:"You can rearrange, resize, and dock panels to create a workspace that suits your workflow:"},{type:"code",language:"text",filename:"customize_workspace.txt",code:`CUSTOMIZING YOUR LAYOUT:
━━━━━━━━━━━━━━━━━━━━━━━

1. MOVE PANELS:
   • Click and drag any panel's title bar
   • Dock to left, right, top, bottom, or center
   • Or leave floating as a separate window

2. RESIZE PANELS:
   • Drag the borders between panels
   • Make Explorer wider when working with complex hierarchies
   • Make Output taller when debugging scripts

3. TOGGLE PANELS (View tab):
   Essential panels to enable:
   ✅ Explorer — Object hierarchy
   ✅ Properties — Object settings
   ✅ Output — Print messages & errors
   ✅ Command Bar — Quick Lua commands
   ✅ Toolbox — Free assets library

   Useful but optional:
   ☐ Script Analysis — Shows warnings in your code
   ☐ Selection Details — Info about selected objects
   ☐ Asset Manager — Manage uploaded images/sounds
   ☐ Terrain Editor — Build landscapes

4. SAVE YOUR LAYOUT:
   • Studio remembers your layout between sessions
   • Set up once, use forever!

RECOMMENDED BEGINNER LAYOUT:
┌──────────┬─────────────────┬──────────┐
│ Toolbox  │    Viewport     │ Explorer │
│          │   (3D World)    │ ──────── │
│          │                 │Properties│
│          ├─────────────────┤          │
│          │ Output/Command  │          │
└──────────┴─────────────────┴──────────┘`},{type:"heading",level:2,content:"Using the Toolbox — Free Assets"},{type:"text",content:"The Toolbox is a massive library of free community-created assets. It's like an app store for game objects:"},{type:"code",language:"text",filename:"toolbox_guide.txt",code:`USING THE TOOLBOX:
━━━━━━━━━━━━━━━━━

1. Open: View → Toolbox (usually on the left)
2. Search for anything: 'tree', 'car', 'sword', 'music'
3. Click an item to add it to your game

CATEGORIES:
• Models    → 3D objects (buildings, characters, vehicles)
• Images    → Decals, textures, icons
• Meshes    → 3D shapes (more detailed than basic parts)
• Audio     → Music, sound effects
• Plugins   → Studio extensions

⚠️ TOOLBOX SAFETY RULES:
• ALWAYS check models for hidden scripts!
  Right-click → Expand tree → look for Scripts
• Delete any script you don't understand
• Some models contain malicious code that can:
  - Spam players
  - Teleport players away
  - Insert more bad scripts
• Trusted creators: Roblox, verified accounts

SAFE WORKFLOW:
1. Add the model to your game
2. Expand it in Explorer
3. Delete ALL scripts inside it
4. Keep only the visual parts you need
5. Group into a Model (Ctrl+G)`},{type:"warning",content:"Never blindly trust Toolbox models! Some contain hidden malicious scripts that can ruin your game. Always expand models in Explorer and delete any Script, LocalScript, or ModuleScript you didn't write yourself. Only keep the visual parts (Parts, MeshParts, Decals, etc.)."},{type:"heading",level:2,content:"Templates — Choosing Your Starting Point"},{type:"text",content:"When you click 'New', Studio offers several templates. Each gives you a different starting world:"},{type:"code",language:"text",filename:"templates_guide.txt",code:`Available Templates:

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
  without distractions.`},{type:"warning",content:"Don't start with a complex template! It's tempting to use the Village or Castle template, but you'll learn much faster building from a blank Baseplate. Understanding how things work from scratch is what separates good developers from great ones."},{type:"heading",level:2,content:"Understanding the Explorer Panel"},{type:"text",content:"The Explorer is the most important panel in Studio. It shows your game's hierarchy — every object, script, and asset organized in a tree structure. Think of it like a family tree for your game: everything is connected, and child objects are 'inside' their parent objects. When you move a Model in the viewport, all its children move with it. When you delete a parent, all children are deleted too."},{type:"code",language:"text",filename:"explorer_hierarchy.txt",code:`game (DataModel)
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
└── Chat                   ← Chat system settings`},{type:"tip",content:"Press F5 to playtest your game instantly! Press Shift+F5 to stop the test. Press F8 to test with a simulated server and two clients — essential for testing multiplayer features. You'll use these shortcuts hundreds of times!"},{type:"heading",level:2,content:"Essential Keyboard Shortcuts"},{type:"text",content:"Memorize these shortcuts to work 10x faster in Studio:"},{type:"code",language:"text",filename:"keyboard_shortcuts.txt",code:`GENERAL:
━━━━━━━━
Ctrl+S          → Save project
Ctrl+Z          → Undo (use this A LOT!)
Ctrl+Y          → Redo
Ctrl+D          → Duplicate selected object
Delete          → Delete selected object
Ctrl+G          → Group selected objects into Model
Ctrl+Shift+G    → Union selected parts

TRANSFORM:
━━━━━━━━━━
Ctrl+1          → Move tool
Ctrl+2          → Scale tool
Ctrl+3          → Rotate tool
V               → Select tool
F               → Focus camera on selection

SCRIPTING:
━━━━━━━━━━
Ctrl+/          → Comment/uncomment selected lines
Tab             → Indent code
Shift+Tab       → Remove indent
Ctrl+F          → Find text in script
Ctrl+H          → Find and replace
Ctrl+Shift+F    → Search ALL scripts

TESTING:
━━━━━━━━
F5              → Play test (client)
Shift+F5        → Stop test
F6              → Play test (server view)
F8              → Test with server + 2 clients
F9              → Open Developer Console (in-game)`},{type:"heading",level:2,content:"Studio Settings Worth Changing"},{type:"code",language:"text",filename:"studio_settings.txt",code:`Go to File → Studio Settings:

1. RENDERING:
   • Quality Level: 21 (maximum for design work)
   • EditQualityLevel: Full for best visuals

2. SCRIPT EDITOR:
   • Font: Source Code Pro or Fira Code
   • Tab Width: 4 (industry standard)
   • Script Editor Color Preset: Dark (easier on eyes)
   • Show plus button on hover: ON

3. PHYSICS:
   • Simulation Radius: 10000 (see physics everywhere)

4. STUDIO:
   • Auto-Save Interval: 5 min (saves your work!)
   • Show Diagnostics Bar: ON (see FPS & memory)

These small changes make a big difference in
productivity and comfort during long sessions!`},{type:"heading",level:2,content:"Practice Exercises"},{type:"text",content:"Complete these exercises before moving on:"},{type:"list",items:["**Exercise 1:** Install Roblox Studio and create a new Baseplate project. Find the Explorer and Properties panels.","**Exercise 2:** Practice viewport navigation — zoom in/out, rotate, pan, and fly with WASD + right-click.","**Exercise 3:** In the Explorer, find the 'Workspace' folder and the 'SpawnLocation' inside it. Click on SpawnLocation and look at its properties.",'**Exercise 4:** Open the Output panel (View → Output). Type `print("Hello!")` in the Command Bar and press Enter. See it appear in Output!',"**Exercise 5:** Press F5 to playtest. Walk around with WASD and jump with Space. Press Shift+F5 to stop."]},{type:"checkpoint",content:"Install Roblox Studio, create a new Baseplate project, and find the Explorer, Properties, and Output windows. Can you locate the 'Workspace' folder and the SpawnLocation inside it? Try printing a message to the Output using the Command Bar!"}]}},{id:"1-2",title:"Building Your First World",completed:!1,content:{description:"Learn to build in Roblox! Create parts, change properties, and construct your first structures like a professional level designer.",sections:[{type:"text",content:`By the end of this lesson, you'll know how to create, transform, and customize parts to build any structure you can imagine.

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
3. Name the Model in Properties`},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Create one of each part shape (Block, Sphere, Cylinder, Wedge, Corner Wedge) and change each to a different material and color.","**Exercise 2:** Build the house described above. Take your time aligning walls properly with grid snapping.","**Exercise 3:** Create a glass window by making a thin block with Glass material and Transparency 0.3.","**Exercise 4:** Organize all your house parts into a Model called 'House' using Ctrl+G.","**Exercise 5:** Build a second structure — a tower or a bridge — using at least 10 parts."]},{type:"heading",level:2,content:"Working with Unions — Combining Parts"},{type:"text",content:"Unions let you combine, subtract, and intersect parts to create complex shapes that would be impossible with individual parts:"},{type:"code",language:"text",filename:"unions_guide.txt",code:`UNION OPERATIONS (Model tab):

1. UNION (Ctrl+Shift+G) — Combine parts into one shape
   • Select 2+ parts → Model → Union
   • Creates a single merged part
   • Great for: complex buildings, curved shapes

2. NEGATE — Subtract one shape from another
   • Select the part to cut out
   • Model → Negate (turns it red/transparent)
   • Select the negated part AND the base part
   • Model → Union
   • The negated shape is cut out!
   • Great for: doorways, windows, tunnels

3. INTERSECT — Keep only where parts overlap
   • Select 2+ overlapping parts
   • Model → Intersect
   • Only the overlapping area remains
   • Great for: custom shapes, decorations

EXAMPLE — Making a Window Hole:
1. Place a wall (Block: 20 x 12 x 1)
2. Place a smaller block where the window should be
   (Block: 4 x 4 x 2, positioned inside the wall)
3. Select the small block → Model → Negate
4. Select BOTH parts → Model → Union
5. Result: Wall with a rectangular hole!`},{type:"heading",level:2,content:"Physics & Constraints"},{type:"text",content:"Roblox has a powerful physics engine. Understanding when to use physics vs anchoring is key:"},{type:"code",language:"text",filename:"physics_basics.txt",code:`WHEN TO ANCHOR vs UNANCHOR:

ANCHORED (✅ Anchored = true):
• Walls, floors, roofs (static structures)
• Decorations that shouldn't move
• Platforms, checkpoints
• Anything that stays in place

UNANCHORED (❌ Anchored = false):
• Balls, projectiles (things that fly/roll)
• Destructible structures (knock them over!)
• Physics puzzles (stacking, balancing)
• Ragdoll effects

USEFUL PHYSICS PROPERTIES:
• Density   → How heavy (affects momentum)
• Friction  → How slippery (ice vs rubber)
• Elasticity → How bouncy (0 = no bounce, 1 = super bouncy)

Set these in Properties → CustomPhysicalProperties:
  1. Check 'CustomPhysicalProperties'
  2. Adjust Density, Friction, Elasticity

CONSTRAINTS (connecting parts):
• HingeConstraint   → Door hinges, rotating platforms
• RopeConstraint    → Swinging ropes, chains
• SpringConstraint  → Bouncy platforms, suspension
• WeldConstraint    → Glue parts together permanently`},{type:"heading",level:2,content:"Terrain — Natural Landscapes"},{type:"code",language:"text",filename:"terrain_basics.txt",code:`TERRAIN EDITOR (Home → Editor → Terrain Editor):

Terrain lets you create natural landscapes:
• Mountains, valleys, cliffs
• Water (oceans, lakes, rivers)
• Grass, sand, mud, snow surfaces

Terrain Tools:
━━━━━━━━━━━━
• Generate → Auto-create a landscape from settings
  - Size, Biome (Desert, Arctic, Grassland)
  - Seed number for reproducible worlds

• Sculpt → Shape terrain like clay
  - Add     → Build up terrain
  - Subtract → Dig/carve terrain
  - Grow    → Raise terrain gently
  - Erode   → Smooth/wear down terrain
  - Smooth  → Remove rough edges
  - Flatten → Make a flat area

• Paint → Change terrain material
  - Grass, Sand, Rock, Snow, Ice
  - Mud, Ground, Slate, Limestone
  - Water (creates actual water!)

• Region → Select and modify large areas
  - Copy/paste terrain sections
  - Fill/delete terrain regions

TIP: Start with Generate for a base, then use
Sculpt to refine, and Paint to add variety!`},{type:"quiz",question:"What happens if you forget to anchor a part?",options:[{id:"a",text:"Nothing, it stays in place"},{id:"b",text:"It falls due to gravity when the game runs"},{id:"c",text:"It disappears"},{id:"d",text:"The game crashes"}],correct:"b",explanation:"Unanchored parts are affected by Roblox's physics engine! They'll fall, roll, bounce, or get pushed around. Always anchor static parts like floors, walls, and decorations. Only leave parts unanchored if you WANT them to move (like a ball or a falling object)."}]}},{id:"1-3",title:"Your First Lua Script",completed:!1,content:{description:"Write your first lines of code! Make parts change color, print messages, and respond to your commands using the Lua programming language.",sections:[{type:"text",content:`By the end of this lesson, you'll understand what scripts are, how to create them, and you'll write working code that controls parts in your game world.

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
-- because the loop never ends!`},{type:"warning",content:"Always include wait() inside a 'while true do' loop! Without it, the loop runs millions of times per second and FREEZES your game. Even wait() alone (no number) works — it pauses for one frame."},{type:"heading",level:2,content:"Multiple Scripts Working Together"},{type:"text",content:"As your game grows, you'll have multiple scripts that need to work together. Understanding script execution order is key:"},{type:"code",language:"lua",filename:"multiple_scripts.lua",code:`-- IMPORTANT: Each script runs INDEPENDENTLY!
-- Scripts don't share variables with each other.

-- Script A (inside Part1):
local myVar = 10
print("Script A: " .. myVar)  -- 10

-- Script B (inside Part2):
-- print(myVar)  -- ERROR! myVar doesn't exist here!
-- Script B has NO access to Script A's variables

-- To share data between scripts, use:
-- 1. Value Objects (IntValue, StringValue, BoolValue)
local scoreValue = Instance.new("IntValue")
scoreValue.Name = "SharedScore"
scoreValue.Value = 0
scoreValue.Parent = game.ReplicatedStorage

-- Any script can now read/write:
local score = game.ReplicatedStorage.SharedScore
score.Value = 100  -- Script A sets it
print(score.Value) -- Script B reads it: 100

-- 2. Attributes (simpler)
game.ReplicatedStorage:SetAttribute("GameState", "Lobby")
-- Any script reads:
local state = game.ReplicatedStorage:GetAttribute("GameState")

-- SCRIPT EXECUTION ORDER:
-- All scripts start running at roughly the same time
-- There's no guaranteed order!
-- Use WaitForChild() to wait for objects other scripts create`},{type:"heading",level:2,content:"The wait() Function In-Depth"},{type:"code",language:"lua",filename:"wait_explained.lua",code:`-- wait() pauses the script for a specified number of seconds

wait(3)     -- Pause for 3 seconds
wait(0.5)   -- Pause for half a second
wait()      -- Pause for one frame (~1/60th of a second)

-- wait() returns the actual time elapsed
local elapsed = wait(2)
print(elapsed)  -- Might be 2.016 (slightly more than 2)

-- IMPORTANT: wait() is not perfectly precise!
-- wait(0.1) might actually wait 0.116 seconds
-- For precise timing, use RunService events:

local RunService = game:GetService("RunService")
local startTime = tick()

RunService.Heartbeat:Connect(function(deltaTime)
    -- deltaTime = exact time since last frame
    -- Runs every frame (usually 60 times/second)
    local elapsed = tick() - startTime
    -- Use this for precise game timers
end)

-- task.wait() is the modern replacement (Luau)
task.wait(2)  -- Same as wait(2) but more accurate

-- task.spawn() runs a function in a new 'thread'
task.spawn(function()
    wait(5)
    print("This runs after 5 seconds")
end)
print("This runs immediately — didn't wait!")`},{type:"heading",level:2,content:"Common Color Names"},{type:"code",language:"lua",filename:"color_reference.lua",code:`-- Roblox BrickColor names you can use:

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
-- RGB = Red, Green, Blue (each 0-255)`},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Create a part with a script that prints your name to the Output window.","**Exercise 2:** Write a script that changes a part's color to your favorite color after 3 seconds.","**Exercise 3:** Make a part that grows slowly — increase its Size every second using a loop.","**Exercise 4:** Create a 'disco floor' — a part that rapidly changes to random colors using BrickColor.Random().","**Exercise 5:** Write a script that changes a part's Material through 5 different materials, one per second."]},{type:"heading",level:2,content:"Understanding CFrame — Position + Rotation"},{type:"text",content:"CFrame (Coordinate Frame) is one of the most powerful concepts in Roblox scripting. It represents both position AND rotation in a single value:"},{type:"code",language:"lua",filename:"cframe_basics.lua",code:`local part = script.Parent

-- CFrame includes position AND rotation
-- Move a part to a specific position
part.CFrame = CFrame.new(10, 5, 20)  -- X=10, Y=5, Z=20

-- Rotate a part (using CFrame.Angles)
-- Angles use RADIANS, not degrees!
-- math.rad() converts degrees to radians
part.CFrame = CFrame.new(0, 5, 0) * CFrame.Angles(
    math.rad(0),    -- X rotation (pitch)
    math.rad(45),   -- Y rotation (yaw) — 45 degrees
    math.rad(0)     -- Z rotation (roll)
)

-- Move a part RELATIVE to its current position
part.CFrame = part.CFrame * CFrame.new(0, 0, -5)
-- Moves 5 studs FORWARD (relative to where it's facing)

-- Smoothly rotate a part
local part = script.Parent
while true do
    part.CFrame = part.CFrame * CFrame.Angles(0, math.rad(2), 0)
    wait()  -- One frame
end
-- This spins the part 2 degrees per frame!`},{type:"heading",level:2,content:"Practical Project: Spinning Platform"},{type:"code",language:"lua",filename:"spinning_platform.lua",code:`-- Create a spinning platform players can ride
local platform = script.Parent
local SPIN_SPEED = 1  -- degrees per frame
local BOB_SPEED = 0.02 -- bobbing speed
local BOB_HEIGHT = 2  -- how high it bobs
local startY = platform.Position.Y
local time = 0

while true do
    time += BOB_SPEED
    
    -- Spin the platform
    platform.CFrame = platform.CFrame * CFrame.Angles(0, math.rad(SPIN_SPEED), 0)
    
    -- Bob up and down using sine wave
    local newY = startY + math.sin(time) * BOB_HEIGHT
    platform.CFrame = CFrame.new(
        platform.Position.X,
        newY,
        platform.Position.Z
    ) * platform.CFrame.Rotation  -- Keep the rotation!
    
    wait()
end`},{type:"heading",level:2,content:"Error Messages — Reading & Fixing Them"},{type:"text",content:"When your code has a bug, the Output shows an error message. Learning to read these is essential:"},{type:"code",language:"text",filename:"common_errors.txt",code:`COMMON ERROR MESSAGES & HOW TO FIX THEM:

1. "attempt to index nil with 'Name'"
   Meaning: You tried to access .Name on something that's nil
   Fix: Use FindFirstChild and check for nil before accessing
   
2. "Expected ')' (to close '(' at line 5)"
   Meaning: You forgot a closing parenthesis
   Fix: Count your opening and closing brackets
   
3. "Expected 'end' (to close 'function' at line 3)"
   Meaning: You forgot an 'end' to close a function or if block
   Fix: Every 'function', 'if', 'for', 'while' needs an 'end'

4. "attempt to perform arithmetic on a string value"
   Meaning: You tried to do math on text
   Fix: Use tonumber() to convert: tonumber("42") → 42

5. "ServerScriptService.Script:12: attempt to call a nil value"
   Meaning: Line 12 calls a function that doesn't exist
   Fix: Check spelling, make sure function is defined BEFORE the call

DEBUGGING TIPS:
• Error messages always include the LINE NUMBER — check that line!
• Use print() before and after suspicious code to narrow down bugs
• Comment out sections of code to isolate the problem
• The Output shows errors in RED — always check it!`},{type:"tip",content:"When you get an error, don't panic! Read the error message carefully — it tells you EXACTLY what went wrong and on which line. Add print() statements above and below the error line to see what values your variables actually have. 90% of bugs are found this way."},{type:"checkpoint",content:"Create a part with a script that changes its color every second, cycling through at least 4 colors. Can you make it change material too? Bonus: Can you make it spin using CFrame?"}]}}]},{id:2,title:"Lua Programming Fundamentals",lessons:[{id:"2-1",title:"Variables & Data Types",completed:!1,content:{description:"Master the foundation of all programming — storing and manipulating data with variables, understanding data types, and using operators.",sections:[{type:"text",content:`By the end of this lesson, you'll understand how to create variables, know all Lua data types, and perform operations on data like a real programmer.

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
  local n = 0                        -- meaningless`},{type:"warning",content:"Variable names are case-sensitive! 'playerName', 'PlayerName', and 'PLAYERNAME' are three completely different variables. Be consistent with your naming to avoid confusing bugs."},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Create variables for a game character: name (string), health (number), mana (number), isAlive (boolean). Print them all.","**Exercise 2:** Write a damage calculator: create baseDamage and multiplier variables, calculate totalDamage, and print the result.","**Exercise 3:** Create a formatted message: 'Player [name] has [health] HP and [coins] coins' using concatenation (..) operator.","**Exercise 4:** Use math.random() to generate a random number between 1 and 100. Print whether it's above or below 50.","**Exercise 5:** Create a script that modifies a part's Size, Position, and Color using variables and math operations."]},{type:"heading",level:2,content:"Roblox-Specific Data Types"},{type:"text",content:"Besides basic Lua types, Roblox adds special types for 3D game development. You'll use these constantly:"},{type:"code",language:"lua",filename:"roblox_types.lua",code:`-- VECTOR3: A 3D point (X, Y, Z) — positions, sizes, velocities
local position = Vector3.new(10, 5, 20)
print(position.X)  -- 10
print(position.Y)  -- 5
print(position.Z)  -- 20

-- Vector3 math:
local a = Vector3.new(1, 2, 3)
local b = Vector3.new(4, 5, 6)
print(a + b)       -- (5, 7, 9)
print(a * 2)       -- (2, 4, 6)
print(a.Magnitude) -- Distance from origin (3.74...)

-- COLOR3: Represents a color (RGB values 0-1)
local red = Color3.new(1, 0, 0)          -- Red (0-1 scale)
local blue = Color3.fromRGB(0, 0, 255)   -- Blue (0-255 scale)
local purple = Color3.fromHSV(0.8, 1, 1) -- HSV color space

-- CFRAME: Position + Rotation combined
local cf = CFrame.new(10, 5, 20)  -- Position only
local rotated = CFrame.Angles(0, math.rad(45), 0)  -- Rotation only
local combined = CFrame.new(10, 5, 20) * CFrame.Angles(0, math.rad(45), 0)

-- UDIM2: UI positioning (Scale, Offset for X and Y)
local pos = UDim2.new(0.5, 0, 0.5, 0)  -- Center of screen
local size = UDim2.new(0, 200, 0, 50)  -- 200px wide, 50px tall

-- ENUM: Named constants for Roblox properties
local material = Enum.Material.Neon
local font = Enum.Font.GothamBold
local keyCode = Enum.KeyCode.E`},{type:"heading",level:2,content:"Type Conversion — Converting Between Types"},{type:"code",language:"lua",filename:"type_conversion.lua",code:`-- Converting between types is common and important

-- STRING → NUMBER
local numStr = "42"
local num = tonumber(numStr)
print(num + 8)  -- 50

-- NUMBER → STRING
local score = 100
local scoreStr = tostring(score)
print("Score: " .. scoreStr)  -- Score: 100

-- Automatic conversion happens with ..
print("HP: " .. 100)  -- Works! Number auto-converts to string

-- But NOT with math operators!
-- print("5" + 3)  -- This actually WORKS in Lua! Returns 8
-- Lua auto-converts strings to numbers for math
-- But it's better to be explicit with tonumber()

-- BOOLEAN → STRING
local alive = true
print(tostring(alive))  -- "true"

-- Checking types before conversion
local input = "hello"
local result = tonumber(input)
if result then
    print("Valid number: " .. result)
else
    print("Not a number!")  -- This prints
end`},{type:"heading",level:2,content:"Constants & Configuration Patterns"},{type:"code",language:"lua",filename:"constants_pattern.lua",code:`-- Use UPPER_CASE for values that shouldn't change
-- Put them at the TOP of your script for easy editing

-- Game configuration constants
local MAX_HEALTH = 100
local DEFAULT_WALK_SPEED = 16
local JUMP_POWER = 50
local RESPAWN_TIME = 5
local COIN_VALUE = 10
local MAX_INVENTORY_SLOTS = 20

-- Enemy configuration
local ENEMY_CONFIG = {
    ZOMBIE = {
        health = 50,
        speed = 10,
        damage = 15,
        color = BrickColor.new("Camo")
    },
    SKELETON = {
        health = 30,
        speed = 14,
        damage = 10,
        color = BrickColor.new("Institutional white")
    },
    BOSS = {
        health = 500,
        speed = 8,
        damage = 50,
        color = BrickColor.new("Really red")
    },
}

-- Usage: change one value at the top to affect the entire game
print("Boss has " .. ENEMY_CONFIG.BOSS.health .. " HP")
-- Changing MAX_HEALTH from 100 to 150 updates everywhere
-- MUCH better than finding every '100' in your code!`},{type:"tip",content:"Always put game configuration at the top of your scripts! This way, when you want to balance your game (adjust damage, health, speed, etc.), you only need to change one number instead of hunting through hundreds of lines of code. Pro developers call this 'data-driven design'."},{type:"quiz",question:"What does this print: local x = 5; x = x + 3; x *= 2; print(x)",options:[{id:"a",text:"5"},{id:"b",text:"8"},{id:"c",text:"16"},{id:"d",text:"Error"}],correct:"c",explanation:"x starts at 5, then x + 3 = 8, then x * 2 = 16. The *= operator multiplies and assigns!"}]}},{id:"2-2",title:"If Statements & Logic",completed:!1,content:{description:"Teach your game to make decisions! Master if/elseif/else statements, comparison operators, and logical operators to create smart game logic.",sections:[{type:"text",content:`By the end of this lesson, you'll write code that makes decisions based on game state — checking health, comparing scores, and combining multiple conditions.

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
-- false OR false = false`},{type:"heading",level:2,content:"Nested If Statements"},{type:"text",content:"You can put if statements inside other if statements for more complex logic:"},{type:"code",language:"lua",filename:"nested_if.lua",code:`-- Nested if statements for complex game logic
local isAlive = true
local hasWeapon = true
local ammo = 3
local enemyDistance = 15

if isAlive then
    if hasWeapon then
        if ammo > 0 then
            if enemyDistance < 20 then
                print("🎯 Fire! Enemy in range.")
                ammo -= 1
            else
                print("📏 Enemy too far away.")
            end
        else
            print("🔫 Out of ammo! Find more.")
        end
    else
        print("⚠️ Find a weapon first!")
    end
else
    print("💀 You're defeated.")
end

-- TIP: Deep nesting gets hard to read!
-- Use 'guard clauses' (early returns) instead:
local function tryAttack()
    if not isAlive then print("💀 Defeated.") return end
    if not hasWeapon then print("⚠️ No weapon!") return end
    if ammo <= 0 then print("🔫 No ammo!") return end
    if enemyDistance >= 20 then print("📏 Too far!") return end
    
    -- If we get here, ALL conditions are met!
    print("🎯 Fire!")
    ammo -= 1
end`},{type:"heading",level:2,content:"Practical Example: Game Power-Up System"},{type:"code",language:"lua",filename:"powerup_system.lua",code:`local part = script.Parent

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
end`},{type:"tip",content:"Use parentheses to make complex conditions clearer! `if (a > 5 and b < 10) or c == true then` is much easier to read than `if a > 5 and b < 10 or c == true then`. When in doubt, add parentheses."},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Write a script that checks a player's health and prints 'Healthy' (>75), 'Wounded' (26-75), or 'Critical' (≤25).","**Exercise 2:** Create a shop system: check if a player has enough coins AND a high enough level to buy an item.","**Exercise 3:** Write a grading system using elseif chains for scores 0-100.","**Exercise 4:** Build a part that changes color based on a random number: red (1-3), yellow (4-6), green (7-10).","**Exercise 5:** Create a time-of-day system: print different messages for morning (6-12), afternoon (12-18), evening (18-22), and night (22-6)."]},{type:"heading",level:2,content:"Practical: Access Control System"},{type:"text",content:"Let's build a practical door system that checks multiple conditions before allowing entry:"},{type:"code",language:"lua",filename:"access_control.lua",code:`-- Door access control system
-- Put this script inside a door Part

local door = script.Parent
local REQUIRED_LEVEL = 5
local REQUIRED_COINS = 100
local VIP_NAMES = {"Rathish", "Steve", "Alex"}  -- VIP players

-- Check if a name is in the VIP list
local function isVIP(playerName)
    for _, name in ipairs(VIP_NAMES) do
        if name == playerName then
            return true
        end
    end
    return false
end

local debounce = false

door.Touched:Connect(function(hit)
    if debounce then return end
    
    local humanoid = hit.Parent:FindFirstChild("Humanoid")
    if not humanoid then return end
    
    local player = game.Players:GetPlayerFromCharacter(hit.Parent)
    if not player then return end
    
    debounce = true
    
    local leaderstats = player:FindFirstChild("leaderstats")
    local coins = leaderstats and leaderstats:FindFirstChild("Coins")
    local stage = leaderstats and leaderstats:FindFirstChild("Stage")
    
    -- VIP players always get in!
    if isVIP(player.Name) then
        print("⭐ VIP Access granted for " .. player.Name)
        door.Transparency = 0.8
        door.CanCollide = false
        wait(3)
        door.Transparency = 0
        door.CanCollide = true
    
    -- Check level AND coins for non-VIP
    elseif stage and stage.Value >= REQUIRED_LEVEL 
       and coins and coins.Value >= REQUIRED_COINS then
        print("✅ Access granted for " .. player.Name)
        door.Transparency = 0.8
        door.CanCollide = false
        wait(3)
        door.Transparency = 0
        door.CanCollide = true
    
    else
        -- Access denied — figure out why
        if stage and stage.Value < REQUIRED_LEVEL then
            print("❌ " .. player.Name .. " needs Level " .. REQUIRED_LEVEL)
        end
        if coins and coins.Value < REQUIRED_COINS then
            print("❌ " .. player.Name .. " needs " .. REQUIRED_COINS .. " coins")
        end
    end
    
    wait(1)
    debounce = false
end)`},{type:"heading",level:2,content:"Ternary-Style Expressions"},{type:"code",language:"lua",filename:"ternary_style.lua",code:`-- Lua doesn't have a true ternary operator (condition ? a : b)
-- But you can use 'and/or' as a shorthand:

local health = 30

-- Long way:
local status
if health > 50 then
    status = "Healthy"
else
    status = "Wounded"
end

-- Short way (ternary-style):
local status = health > 50 and "Healthy" or "Wounded"
print(status)  -- "Wounded"

-- More examples:
local isVIP = true
local greeting = isVIP and "Welcome, VIP!" or "Hello!"
print(greeting)  -- "Welcome, VIP!"

local coins = 0
local message = coins > 0 and (coins .. " coins") or "No coins yet"
print(message)  -- "No coins yet"

-- Useful for setting defaults:
local playerName = nil
local displayName = playerName or "Unknown Player"
print(displayName)  -- "Unknown Player"`},{type:"warning",content:'The ternary-style `condition and valueIfTrue or valueIfFalse` has a gotcha: if valueIfTrue is false or nil, it returns valueIfFalse instead! For example, `true and false or "fallback"` returns "fallback" instead of false. Use regular if/else when the true value might be false or nil.'},{type:"checkpoint",content:"Create a script that checks coins and level variables, then prints different messages: 'Poor' (< 10 coins), 'Getting there' (10-50), 'Rich' (> 50). Add a level check: only allow purchases if coins >= price AND level >= 5."}]}},{id:"2-3",title:"Loops — Repeating Actions",completed:!1,content:{description:"Master all three loop types in Lua — while loops, for loops, and repeat-until loops. Learn to automate repetitive tasks, create timers, and build game loops.",sections:[{type:"text",content:`By the end of this lesson, you'll use while loops, numeric for loops, generic for loops, and repeat-until loops to automate any repetitive task in your games.

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
end`},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Create a countdown timer from 10 to 0 that prints each number, then prints 'Game Start!'","**Exercise 2:** Use a for loop to spawn 5 parts in a vertical tower (each 5 studs higher than the last).","**Exercise 3:** Write a while loop that generates random numbers until it gets a number greater than 90. Print how many tries it took.","**Exercise 4:** Create a part that moves back and forth using a while true loop.","**Exercise 5:** Loop through all objects in Workspace and print only the ones that are Parts."]},{type:"heading",level:2,content:"Repeat-Until Loops"},{type:"text",content:"The repeat-until loop is the opposite of while: it runs the code first, THEN checks the condition. This guarantees the code runs at least once:"},{type:"code",language:"lua",filename:"repeat_until.lua",code:`-- repeat-until: runs code, THEN checks the condition
-- Loop continues until the condition is TRUE

-- Roll dice until you get a 6
local rolls = 0
local result

repeat
    result = math.random(1, 6)
    rolls += 1
    print("Roll " .. rolls .. ": " .. result)
until result == 6  -- Stop when result IS 6

print("Got a 6 after " .. rolls .. " rolls!")

-- Difference from while:
-- while: checks BEFORE running (might run 0 times)
-- repeat: checks AFTER running (runs at least 1 time)

-- Practical: Wait for a player's character to fully load
local player = game.Players.LocalPlayer
local character

repeat
    character = player.Character
    if not character then wait(0.1) end
until character
print("Character loaded!")`},{type:"heading",level:2,content:"Nested Loops — Loops Inside Loops"},{type:"code",language:"lua",filename:"nested_loops.lua",code:`-- Create a grid of parts (10x10)
local GRID_SIZE = 10
local SPACING = 4

for row = 1, GRID_SIZE do
    for col = 1, GRID_SIZE do
        local part = Instance.new("Part")
        part.Size = Vector3.new(3, 1, 3)
        part.Position = Vector3.new(
            col * SPACING,  -- X position
            0.5,            -- Y (ground level)
            row * SPACING   -- Z position
        )
        part.Anchored = true
        
        -- Checkerboard pattern!
        if (row + col) % 2 == 0 then
            part.BrickColor = BrickColor.new("White")
        else
            part.BrickColor = BrickColor.new("Black")
        end
        
        part.Parent = workspace
    end
end
print("Created a " .. GRID_SIZE .. "x" .. GRID_SIZE .. " checkerboard!")

-- Create a spiral staircase!
local STEPS = 30
local RADIUS = 10
local HEIGHT_PER_STEP = 1.5
local ANGLE_PER_STEP = 15  -- degrees

for i = 1, STEPS do
    local angle = math.rad(i * ANGLE_PER_STEP)
    local step = Instance.new("Part")
    step.Size = Vector3.new(6, 1, 3)
    step.Position = Vector3.new(
        math.cos(angle) * RADIUS,
        i * HEIGHT_PER_STEP,
        math.sin(angle) * RADIUS
    )
    step.Orientation = Vector3.new(0, -i * ANGLE_PER_STEP, 0)
    step.Anchored = true
    step.Material = Enum.Material.Marble
    step.BrickColor = BrickColor.new("White")
    step.Parent = workspace
end
print("Spiral staircase complete!")`},{type:"tip",content:"Nested loops are powerful but be careful with large numbers! A 100x100 grid creates 10,000 parts — which can lag. Keep your grid sizes reasonable. If you need large worlds, look into chunked loading."},{type:"heading",level:2,content:"Loop Patterns — Common Recipes"},{type:"code",language:"lua",filename:"loop_patterns.lua",code:`-- PATTERN 1: Find the maximum value in a table
local scores = {45, 82, 67, 93, 28, 55, 71}
local maxScore = scores[1]

for _, score in ipairs(scores) do
    if score > maxScore then
        maxScore = score
    end
end
print("Highest score: " .. maxScore)  -- 93

-- PATTERN 2: Filter items from a list
local allParts = workspace:GetChildren()
local redParts = {}

for _, obj in ipairs(allParts) do
    if obj:IsA("Part") and obj.BrickColor == BrickColor.new("Bright red") then
        table.insert(redParts, obj)
    end
end
print("Found " .. #redParts .. " red parts")

-- PATTERN 3: Countdown with visual feedback
local part = script.Parent
for i = 3, 1, -1 do
    part.BrickColor = BrickColor.new("Bright yellow")
    wait(0.5)
    part.BrickColor = BrickColor.new("White")
    wait(0.5)
end
part.BrickColor = BrickColor.new("Lime green")  -- Go!

-- PATTERN 4: Animate a value smoothly
local startVal = 0
local endVal = 100
local steps = 50

for i = 0, steps do
    local progress = i / steps  -- 0 to 1
    local currentVal = startVal + (endVal - startVal) * progress
    print(string.format("Progress: %.0f%%", currentVal))
    wait(0.05)
end`},{type:"quiz",question:"What does 'for i = 1, 3 do print(i) end' print?",options:[{id:"a",text:"1"},{id:"b",text:"1, 2, 3"},{id:"c",text:"3"},{id:"d",text:"Nothing"}],correct:"b",explanation:"The for loop counts from 1 to 3, executing the print statement each time. So it prints 1, then 2, then 3."}]}},{id:"2-4",title:"Functions — Reusable Code Blocks",completed:!1,content:{description:"Create reusable, organized code with functions. Learn parameters, return values, and how functions make complex games manageable.",sections:[{type:"text",content:`By the end of this lesson, you'll create your own functions with parameters and return values, and understand how they organize complex game code.

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
print("Health: " .. getHealthPercent() .. "%")  -- 60%`},{type:"tip",content:"Keep functions small and focused! A function called 'calculateDamage' should ONLY calculate damage — not also update the UI, play sounds, and send server messages. If your function does too many things, split it into smaller functions. This is called the 'Single Responsibility Principle'."},{type:"heading",level:2,content:"Anonymous Functions & Callbacks"},{type:"text",content:"You've already used anonymous functions with events! Let's understand them formally:"},{type:"code",language:"lua",filename:"anonymous_functions.lua",code:`-- NAMED function (has a name, stored in a variable)
local function greet(name)
    print("Hello, " .. name)
end
greet("Steve")  -- Call by name

-- ANONYMOUS function (no name, used inline)
-- You've been using these with :Connect()!
part.Touched:Connect(function(hit)
    print("Touched by " .. hit.Name)
end)
-- The function has no name — it's defined right where it's used

-- Storing anonymous function in a variable (same as named!)
local greet = function(name)
    print("Hello, " .. name)
end
greet("Alex")  -- Works exactly the same!

-- Passing functions as arguments (callbacks)
local function doAfterDelay(seconds, callback)
    wait(seconds)
    callback()  -- Call the function we were given
end

doAfterDelay(3, function()
    print("This runs after 3 seconds!")
end)

-- Practical: Custom forEach function
local function forEach(list, action)
    for i, item in ipairs(list) do
        action(item, i)
    end
end

local items = {"Sword", "Shield", "Potion"}
forEach(items, function(item, index)
    print(index .. ". " .. item)
end)
-- 1. Sword
-- 2. Shield
-- 3. Potion`},{type:"heading",level:2,content:"Practical: Part Factory Function"},{type:"code",language:"lua",filename:"part_factory.lua",code:`-- A function that creates configured parts — a 'factory'
local function createPart(config)
    config = config or {}  -- Default to empty table
    
    local part = Instance.new("Part")
    part.Name = config.name or "Part"
    part.Size = config.size or Vector3.new(4, 4, 4)
    part.Position = config.position or Vector3.new(0, 5, 0)
    part.BrickColor = config.color or BrickColor.new("Medium stone grey")
    part.Material = config.material or Enum.Material.SmoothPlastic
    part.Anchored = true
    part.CanCollide = config.canCollide ~= false  -- Default true
    part.Transparency = config.transparency or 0
    part.Parent = config.parent or workspace
    
    -- Optional: add a light
    if config.glow then
        local light = Instance.new("PointLight")
        light.Color = part.Color
        light.Range = config.glowRange or 10
        light.Brightness = config.glowBrightness or 1
        light.Parent = part
    end
    
    return part
end

-- Usage: clean and readable!
local wall = createPart({
    name = "Wall",
    size = Vector3.new(20, 12, 1),
    position = Vector3.new(0, 6, 10),
    color = BrickColor.new("Brick yellow"),
    material = Enum.Material.Brick,
})

local glowOrb = createPart({
    name = "GlowOrb",
    size = Vector3.new(2, 2, 2),
    position = Vector3.new(5, 8, 5),
    color = BrickColor.new("Cyan"),
    material = Enum.Material.Neon,
    glow = true,
    glowRange = 20,
})`},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Create a function `calculateScore(kills, coins, time)` that returns kills*100 + coins*10 - time*5.","**Exercise 2:** Write a `clamp(value, min, max)` function that ensures a value stays within a range.","**Exercise 3:** Build the createPart factory function from above and use it to create 5 different parts.","**Exercise 4:** Create a complete combat system with takeDamage(), heal(), and isAlive() functions.","**Exercise 5:** Write a function that takes a table of numbers and returns both the average AND the highest value (two return values)."]},{type:"heading",level:2,content:"Scope — Where Variables Live"},{type:"text",content:"Understanding scope is crucial for writing bug-free code. A variable's scope determines where it can be accessed:"},{type:"code",language:"lua",filename:"scope_explained.lua",code:`-- Global scope (DON'T do this unless necessary!)
globalVar = "I'm accessible everywhere"  -- No 'local' keyword

-- Local to the script
local scriptVar = "I'm available throughout this script"

local function outerFunction()
    local outerVar = "I exist inside outerFunction"
    
    local function innerFunction()
        local innerVar = "I exist inside innerFunction"
        
        -- I CAN access outerVar and scriptVar from here
        print(outerVar)    -- ✅ Works!
        print(scriptVar)   -- ✅ Works!
        print(innerVar)    -- ✅ Works!
    end
    
    innerFunction()
    
    -- I CANNOT access innerVar here
    print(outerVar)    -- ✅ Works!
    -- print(innerVar)    -- ❌ ERROR! innerVar doesn't exist here
end

outerFunction()
-- print(outerVar)  -- ❌ ERROR! outerVar doesn't exist here

-- KEY RULE: Variables are accessible in their block
-- and any INNER blocks, but NOT in outer blocks`},{type:"heading",level:2,content:"Tables as Organized Data"},{type:"code",language:"lua",filename:"tables_intro.lua",code:`-- Tables are Lua's most powerful data type
-- They can act as arrays, dictionaries, or objects

-- ARRAY-STYLE TABLE (numbered list)
local inventory = {"Sword", "Shield", "Potion", "Gold Key"}
print(inventory[1])  -- Sword (Lua arrays start at 1, not 0!)
print(inventory[3])  -- Potion
print(#inventory)    -- 4 (# = length operator)

-- Add items
table.insert(inventory, "Bow")       -- Adds to end
table.insert(inventory, 2, "Armor")  -- Insert at position 2

-- Remove items
table.remove(inventory, 3)  -- Remove item at position 3

-- DICTIONARY-STYLE TABLE (key-value pairs)
local player = {
    name = "DragonSlayer",
    health = 100,
    level = 15,
    isVIP = true,
}

print(player.name)     -- DragonSlayer
print(player.health)   -- 100
print(player["level"]) -- 15 (alternative syntax)

-- Add/modify entries
player.mana = 50           -- Add new key
player.health = 75         -- Modify existing
player.title = "The Brave" -- Add another

-- NESTED TABLES (tables inside tables)
local team = {
    {
        name = "Warrior",
        health = 200,
        skills = {"Slash", "Shield Bash", "War Cry"}
    },
    {
        name = "Mage",
        health = 80,
        skills = {"Fireball", "Ice Shield", "Teleport"}
    },
}

print(team[1].name)         -- Warrior
print(team[2].skills[1])    -- Fireball`},{type:"warning",content:"Lua arrays start at index 1, not 0! This is different from most programming languages. inventory[1] is the first item, inventory[2] is the second, and so on. Using inventory[0] typically returns nil."},{type:"heading",level:2,content:"Practical: Item Database with Functions"},{type:"code",language:"lua",filename:"item_database.lua",code:`-- Building a real game system with functions and tables

local ItemDatabase = {
    ["Wooden Sword"] = {damage = 10, price = 25, level = 1},
    ["Iron Sword"]   = {damage = 25, price = 100, level = 5},
    ["Gold Sword"]   = {damage = 50, price = 500, level = 10},
    ["Diamond Sword"]= {damage = 100, price = 2000, level = 20},
}

local function canAfford(playerCoins, itemName)
    local item = ItemDatabase[itemName]
    if not item then
        return false, "Item doesn't exist!"
    end
    if playerCoins < item.price then
        return false, "Need " .. (item.price - playerCoins) .. " more coins"
    end
    return true, "Can afford!"
end

local function canEquip(playerLevel, itemName)
    local item = ItemDatabase[itemName]
    if not item then return false end
    return playerLevel >= item.level
end

local function getItemInfo(itemName)
    local item = ItemDatabase[itemName]
    if not item then
        return "Unknown item"
    end
    return string.format(
        "%s — DMG: %d | Price: %d coins | Requires Level %d",
        itemName, item.damage, item.price, item.level
    )
end

-- Usage:
print(getItemInfo("Iron Sword"))
-- Iron Sword — DMG: 25 | Price: 100 coins | Requires Level 5

local ok, msg = canAfford(80, "Iron Sword")
print(ok, msg)  -- false, Need 20 more coins`},{type:"checkpoint",content:"Create a function called 'calculateScore' that takes kills, coins, and timeBonus as parameters and returns the total score. Then call it 3 times with different values and print each result."}]}}]},{id:3,title:"Game Objects & Events",lessons:[{id:"3-1",title:"Finding & Referencing Objects",completed:!1,content:{description:"Learn every method to find and reference objects in your game — parts, players, services, and nested objects deep in the hierarchy.",sections:[{type:"text",content:`By the end of this lesson, you'll confidently navigate Roblox's object hierarchy, use all object-finding methods, and understand when to use each one.

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
end`},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Create 3 parts named 'Red', 'Green', 'Blue'. Write a script that finds each by name and sets its color accordingly.","**Exercise 2:** Use GetChildren() to loop through everything in Workspace and print each object's Name and ClassName.","**Exercise 3:** Create a folder with 5 parts. Use GetDescendants() and :IsA('Part') to find and count only the Parts.","**Exercise 4:** Write a function findPartByName(name) that searches the entire Workspace and returns the Part or nil.","**Exercise 5:** Practice with FindFirstChild — try finding an object that doesn't exist and handle the nil case gracefully."]},{type:"heading",level:2,content:"The :IsA() Method — Type Checking"},{type:"text",content:"IsA() checks if an object is a specific type (class). It also checks parent classes, making it very flexible:"},{type:"code",language:"lua",filename:"isa_method.lua",code:`-- :IsA() checks the class of an object
local part = Instance.new("Part")
print(part:IsA("Part"))       -- true
print(part:IsA("BasePart"))   -- true (Part inherits from BasePart)
print(part:IsA("Instance"))   -- true (everything is an Instance)
print(part:IsA("Model"))      -- false

-- Practical: Find all parts in Workspace (including MeshParts!)
for _, obj in ipairs(workspace:GetDescendants()) do
    if obj:IsA("BasePart") then
        -- This catches: Part, MeshPart, WedgePart, etc.
        print(obj.Name .. " is a " .. obj.ClassName)
    end
end

-- Practical: Count scripts in the game
local scriptCount = 0
for _, obj in ipairs(game:GetDescendants()) do
    if obj:IsA("LuaSourceContainer") then
        -- Catches: Script, LocalScript, ModuleScript
        scriptCount += 1
    end
end
print("Total scripts: " .. scriptCount)

-- Practical: Destroy all lights in workspace
for _, obj in ipairs(workspace:GetDescendants()) do
    if obj:IsA("Light") then  -- PointLight, SpotLight, SurfaceLight
        obj:Destroy()
    end
end`},{type:"heading",level:2,content:"Attributes — Custom Properties"},{type:"text",content:"Attributes let you add custom data to any object — like custom properties you define yourself:"},{type:"code",language:"lua",filename:"attributes.lua",code:`-- Set custom attributes on any object
local part = workspace.Door

-- Setting attributes
part:SetAttribute("IsLocked", true)
part:SetAttribute("RequiredKey", "GoldKey")
part:SetAttribute("DamageAmount", 25)

-- Getting attributes
local isLocked = part:GetAttribute("IsLocked")
local keyNeeded = part:GetAttribute("RequiredKey")
print("Locked: " .. tostring(isLocked))  -- Locked: true
print("Key: " .. keyNeeded)              -- Key: GoldKey

-- Listen for attribute changes
part:GetAttributeChangedSignal("IsLocked"):Connect(function()
    local locked = part:GetAttribute("IsLocked")
    if locked then
        part.BrickColor = BrickColor.new("Bright red")
    else
        part.BrickColor = BrickColor.new("Bright green")
    end
end)

-- WHY USE ATTRIBUTES?
-- • Set values in Studio Properties panel (no code needed!)
-- • Easy for non-programmers to configure
-- • Don't need Value objects (IntValue, StringValue)
-- • Can be used on ANY instance`},{type:"tip",content:"Attributes are great for game designers! Instead of hardcoding values in scripts, set them as attributes on objects. Then anyone can adjust values in Studio's Properties panel without touching code. Set a 'CoinValue' attribute on each coin to control how much it's worth."},{type:"heading",level:2,content:"Creating Objects with Code — Instance.new()"},{type:"text",content:"Sometimes you need to create objects at runtime rather than placing them in Studio. Instance.new() lets you create ANY Roblox object from code:"},{type:"code",language:"lua",filename:"instance_new.lua",code:`-- Create a new Part entirely from code
local newPart = Instance.new("Part")
newPart.Name = "CodePart"
newPart.Size = Vector3.new(5, 5, 5)
newPart.Position = Vector3.new(0, 10, 0)
newPart.BrickColor = BrickColor.new("Bright red")
newPart.Material = Enum.Material.Neon
newPart.Anchored = true
newPart.Parent = workspace  -- MUST set Parent to add it to the game!

-- Create a PointLight inside the part
local light = Instance.new("PointLight")
light.Brightness = 2
light.Range = 15
light.Color = Color3.fromRGB(255, 100, 100)
light.Parent = newPart  -- Put light inside the part

-- Create a whole trail of parts
for i = 1, 20 do
    local trail = Instance.new("Part")
    trail.Name = "TrailPart_" .. i
    trail.Size = Vector3.new(2, 2, 2)
    trail.Position = Vector3.new(i * 4, 5, 0)
    trail.Anchored = true
    trail.BrickColor = BrickColor.Random()
    trail.Material = Enum.Material.SmoothPlastic
    trail.Parent = workspace
end
print("Created 20 trail parts!")`},{type:"warning",content:"Always set the Parent property LAST when using Instance.new()! Setting Parent first then changing properties causes unnecessary updates and can impact performance. Set all properties, THEN set Parent to add the object to the game."},{type:"heading",level:2,content:"Cloning vs Creating — When to Use Each"},{type:"code",language:"lua",filename:"clone_vs_create.lua",code:`-- CLONE: Copy an existing object (preserves all properties + children)
local template = game.ServerStorage:WaitForChild("CoinTemplate")

local function spawnCoin(position)
    local coin = template:Clone()  -- Makes an exact copy
    coin.Position = position
    coin.Parent = workspace
    return coin
end

-- Spawn 5 coins at random positions
for i = 1, 5 do
    local pos = Vector3.new(
        math.random(-50, 50),
        5,
        math.random(-50, 50)
    )
    spawnCoin(pos)
end

-- WHEN TO USE EACH:
-- Instance.new() → Simple objects (Parts, Values, Lights)
-- Clone()        → Complex objects (Models with scripts,
--                   pre-configured parts with children)
--
-- Clone is faster for complex objects because it copies
-- everything at once instead of building piece by piece`},{type:"heading",level:2,content:"Destroying Objects"},{type:"code",language:"lua",filename:"destroying_objects.lua",code:`-- Destroy() removes an object permanently
local part = workspace:FindFirstChild("OldPart")
if part then
    part:Destroy()  -- Gone forever! Cannot be recovered
end

-- Common pattern: destroy after a delay
local effect = Instance.new("Part")
effect.Parent = workspace
-- ... use the effect ...
game:GetService("Debris"):AddItem(effect, 5)  -- Auto-destroy in 5 seconds

-- Debris service is great for cleanup!
-- It prevents memory leaks from forgotten temporary objects
local Debris = game:GetService("Debris")

local function createExplosionEffect(position)
    local parts = {}
    for i = 1, 10 do
        local p = Instance.new("Part")
        p.Size = Vector3.new(1, 1, 1)
        p.Position = position + Vector3.new(
            math.random(-3, 3), math.random(1, 5), math.random(-3, 3)
        )
        p.BrickColor = BrickColor.Random()
        p.Parent = workspace
        Debris:AddItem(p, 3)  -- Each piece auto-destroys in 3 seconds
    end
end`},{type:"quiz",question:"What does FindFirstChild return if the object doesn't exist?",options:[{id:"a",text:"An error"},{id:"b",text:"false"},{id:"c",text:"nil"},{id:"d",text:"0"}],correct:"c",explanation:"FindFirstChild returns nil if the object isn't found. This is why you should always check 'if object then' before using it, to avoid 'attempt to index nil' errors!"}]}},{id:"3-2",title:"Events — Reacting to the Game World",completed:!1,content:{description:"React to everything that happens in your game! Touch events, click events, player events, and the essential debounce pattern.",sections:[{type:"text",content:`By the end of this lesson, you'll connect code to game events, handle touch/click interactions, manage player joins/leaves, and implement the critical debounce pattern.

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
Players.PlayerRemoving:Connect(onPlayerRemoving)`},{type:"tip",content:"The 'hit' parameter in Touched events is the PART that touched, not the player! If a player walks on your part, 'hit' might be 'LeftFoot' or 'RightLeg'. Use hit.Parent to get the character model, then FindFirstChild('Humanoid') to confirm it's a player."},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Create a part that prints the name of anything that touches it (with debounce).","**Exercise 2:** Build a color-changing button using ClickDetector that cycles through 5 colors.","**Exercise 3:** Create a speed boost pad: when a player touches it, their WalkSpeed doubles for 5 seconds.","**Exercise 4:** Write a player greeting system that prints a welcome message when any player joins.","**Exercise 5:** Build a 'pressure plate' that changes color when a player stands on it and reverts when they step off."]},{type:"heading",level:2,content:"Disconnecting Events"},{type:"text",content:"Sometimes you need to stop listening to an event. The Connect method returns a connection object you can use to disconnect:"},{type:"code",language:"lua",filename:"disconnect_events.lua",code:`-- Store the connection in a variable
local part = script.Parent
local connection

connection = part.Touched:Connect(function(hit)
    local humanoid = hit.Parent:FindFirstChild("Humanoid")
    if not humanoid then return end
    
    print("First touch! This only fires ONCE.")
    
    -- Disconnect so it never fires again
    connection:Disconnect()
    
    -- The event is now permanently disconnected
    -- Great for one-time pickups, tutorial triggers, etc.
end)

-- Pattern: self-disconnecting timer
local RunService = game:GetService("RunService")
local elapsed = 0

local timerConnection
timerConnection = RunService.Heartbeat:Connect(function(dt)
    elapsed += dt
    
    if elapsed >= 10 then
        print("10 seconds passed! Timer stopped.")
        timerConnection:Disconnect()
    end
end)`},{type:"heading",level:2,content:"Advanced: Custom Events with BindableEvents"},{type:"code",language:"lua",filename:"bindable_events.lua",code:`-- BindableEvents let you create YOUR OWN events!
-- Great for communication between scripts on the same side
-- (server-to-server or client-to-client)

-- Create a BindableEvent in ReplicatedStorage called 'GameOver'
local gameOverEvent = game.ReplicatedStorage:WaitForChild("GameOver")

-- Script A: fires the event when game ends
local function endGame(winnerName, score)
    print("Game ending! Winner: " .. winnerName)
    gameOverEvent:Fire(winnerName, score)  -- Send data with the event
end

-- Script B: listens for the event
gameOverEvent.Event:Connect(function(winnerName, score)
    print("🏆 " .. winnerName .. " won with " .. score .. " points!")
    -- Show game over screen, play victory music, etc.
end)

-- Unlike RemoteEvents (client ↔ server),
-- BindableEvents work on the SAME side only`},{type:"tip",content:"Use BindableEvents to keep your code organized! Instead of one massive script that handles everything, split your game into smaller scripts that communicate through events. For example: a CombatScript fires 'EnemyDefeated', and your RewardScript listens for it to give coins."},{type:"checkpoint",content:"Create a part with a ClickDetector that changes to a random color when clicked, but only allows clicking once per second using the debounce pattern. Display the total click count using print()."}]}}]},{id:4,title:"Building Game Systems",lessons:[{id:"4-1",title:"Coin Collection & Leaderboards",completed:!1,content:{description:"Build a complete coin collection system with scoring, sound effects, visual feedback, respawning coins, and an automatic leaderboard display.",sections:[{type:"text",content:`By the end of this lesson, you'll have a fully functional coin collection system with leaderstats (automatic Roblox leaderboard), sound effects, and respawning coins.

Coin collection is one of the most fundamental game mechanics. You'll find it in Mario, Sonic, Roblox obbies, and thousands of other games. Building this system teaches you how to combine everything you've learned: parts, events, debounce, finding objects, and functions — all working together as a real game feature.

This is where things get exciting — you're building a REAL game system, not just practicing individual concepts. By the end of this lesson, you'll have a working game loop: players run around, collect coins, see their score increase on the leaderboard, and coins respawn for endless gameplay. This is the foundation of every collection-based game.`},{type:"heading",level:2,content:"Step 1: Create the Leaderstats System"},{type:"text",content:"Leaderstats is Roblox's built-in leaderboard. Create a folder named exactly 'leaderstats' inside a player, and it automatically shows on the scoreboard!"},{type:"code",language:"lua",filename:"leaderstats_setup.lua",code:`-- PUT THIS SCRIPT IN ServerScriptService!
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

print("Coin manager loaded! " .. #coinsFolder:GetChildren() .. " coins active.")`},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Create the basic leaderstats system with Coins. Test that it appears on the leaderboard.","**Exercise 2:** Place 5 coins around your map with individual collection scripts.","**Exercise 3:** Upgrade to the centralized coin manager that handles all coins from one script.","**Exercise 4:** Add different coin values — gold coins worth 5, silver worth 3, bronze worth 1.","**Exercise 5:** Create a message that prints in the Output when a player reaches 10 coins."]},{type:"heading",level:2,content:"Multi-Tier Coin System"},{type:"text",content:"Professional games don't just have one type of coin. Let's build a multi-tier system with bronze, silver, and gold coins:"},{type:"code",language:"lua",filename:"multi_tier_coins.lua",code:`-- Centralized multi-tier coin manager
-- Put in ServerScriptService

local Players = game:GetService("Players")

-- Coin tier configuration
local COIN_TIERS = {
    Bronze = {
        value = 1,
        color = BrickColor.new("Nougat"),
        material = Enum.Material.SmoothPlastic,
        respawnTime = 5,
        size = Vector3.new(1.5, 0.3, 1.5)
    },
    Silver = {
        value = 5,
        color = BrickColor.new("Medium stone grey"),
        material = Enum.Material.Metal,
        respawnTime = 15,
        size = Vector3.new(1.8, 0.35, 1.8)
    },
    Gold = {
        value = 25,
        color = BrickColor.new("Bright yellow"),
        material = Enum.Material.Neon,
        respawnTime = 45,
        size = Vector3.new(2, 0.4, 2)
    },
}

local function setupCoin(coin)
    -- Determine tier from coin name (e.g., 'GoldCoin', 'BronzeCoin')
    local tierName = nil
    for name, _ in pairs(COIN_TIERS) do
        if string.find(coin.Name, name) then
            tierName = name
            break
        end
    end
    
    if not tierName then
        tierName = "Bronze"  -- Default to bronze
    end
    
    local tier = COIN_TIERS[tierName]
    
    -- Apply visual properties
    coin.BrickColor = tier.color
    coin.Material = tier.material
    coin.Size = tier.size
    coin.CanCollide = false
    
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
        
        -- Check for double coins game pass
        local multiplier = player:GetAttribute("DoubleCoins") and 2 or 1
        local earnedCoins = tier.value * multiplier
        
        leaderstats.Coins.Value += earnedCoins
        print(player.Name .. " collected " .. tierName .. " coin (+" .. earnedCoins .. ")")
        
        -- Hide coin
        coin.Transparency = 1
        coin.CanCollide = false
        
        -- Respawn based on tier
        wait(tier.respawnTime)
        coin.Transparency = 0
        debounce = false
    end)
end

-- Set up all coins in workspace
for _, obj in ipairs(workspace:GetDescendants()) do
    if obj:IsA("Part") and string.find(obj.Name, "Coin") then
        setupCoin(obj)
    end
end

print("Multi-tier coin system loaded!")`},{type:"heading",level:2,content:"Daily Reward System"},{type:"code",language:"lua",filename:"daily_rewards.lua",code:`-- Simple daily reward system (add to your data system)
-- This encourages players to come back every day!

local function checkDailyReward(player, savedData)
    local now = os.time()  -- Current time in seconds
    local lastLogin = savedData.LastLoginTime or 0
    local dayStreak = savedData.LoginStreak or 0
    
    local ONE_DAY = 86400    -- 24 hours in seconds
    local TWO_DAYS = 172800  -- 48 hours in seconds
    local timeSinceLogin = now - lastLogin
    
    if timeSinceLogin >= ONE_DAY and timeSinceLogin < TWO_DAYS then
        -- Logged in within 24-48 hours: increase streak!
        dayStreak += 1
        print("🔥 " .. player.Name .. " — Day " .. dayStreak .. " streak!")
    elseif timeSinceLogin >= TWO_DAYS then
        -- Missed a day: reset streak
        dayStreak = 1
        print("📅 " .. player.Name .. " — Streak reset. Day 1!")
    else
        -- Already logged in today
        print("👋 " .. player.Name .. " — Welcome back!")
        return savedData  -- No reward for same-day login
    end
    
    -- Calculate reward based on streak
    local DAILY_REWARDS = {
        [1] = 10,   -- Day 1: 10 coins
        [2] = 15,   -- Day 2: 15 coins
        [3] = 25,   -- Day 3: 25 coins
        [4] = 35,   -- Day 4: 35 coins
        [5] = 50,   -- Day 5: 50 coins
        [6] = 75,   -- Day 6: 75 coins
        [7] = 150,  -- Day 7: 150 coins (weekly bonus!)
    }
    
    local dayIndex = math.min(dayStreak, 7)  -- Cap at day 7 rewards
    local reward = DAILY_REWARDS[dayIndex]
    
    player.leaderstats.Coins.Value += reward
    print("🎁 Daily reward: +" .. reward .. " coins!")
    
    savedData.LastLoginTime = now
    savedData.LoginStreak = dayStreak
    return savedData
end`},{type:"tip",content:"Daily reward systems are the #1 retention mechanic in free-to-play games. They give players a reason to come back every single day. The escalating rewards and streak bonus create a powerful 'don't want to lose my streak' motivation."},{type:"checkpoint",content:"Build the complete coin system: leaderstats in ServerScriptService, 5+ coins around your map with collection scripts, sound effects, and respawning. Test that the score increases on the leaderboard!"}]}},{id:"4-2",title:"Checkpoints, Kill Bricks & Traps",completed:!1,content:{description:"Build an obby (obstacle course) with a checkpoint system, deadly traps, moving platforms, and polished gameplay feel.",sections:[{type:"text",content:`By the end of this lesson, you'll have a working obby with checkpoints that save progress, kill bricks, lava zones, moving traps, and spinning blades.

Obbies (obstacle courses) are one of the most popular Roblox game genres — and for good reason. They combine level design, scripting, and game feel into a satisfying experience. The core loop is simple: jump, avoid hazards, reach checkpoints. But making it FEEL good requires understanding all the systems underneath.

Games like Tower of Hell, Mega Easy Obby, and Escape Room have millions of visits because they nail the checkpoint-and-hazard formula. In this lesson, you'll learn to build every component of a professional obby, from the checkpoint save system to varied and interesting traps that keep players engaged.`},{type:"heading",level:2,content:"Checkpoint System"},{type:"code",language:"lua",filename:"checkpoint_system.lua",code:`-- PUT IN ServerScriptService!
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
end`},{type:"tip",content:"Use TweenService for smooth platform movement! It's better than manually changing Position each frame because it handles interpolation, easing curves, and physics properly. TweenService is what professional Roblox developers use."},{type:"heading",level:2,content:"Falling Block Trap"},{type:"text",content:"Blocks that fall from the ceiling are a classic trap mechanic:"},{type:"code",language:"lua",filename:"falling_blocks.lua",code:`-- Falling blocks that respawn in the ceiling
-- Put this in ServerScriptService

local Debris = game:GetService("Debris")

local function createFallingBlock(spawnPosition)
    local block = Instance.new("Part")
    block.Size = Vector3.new(
        math.random(3, 6),
        math.random(3, 6),
        math.random(3, 6)
    )
    block.Position = spawnPosition + Vector3.new(
        math.random(-10, 10), 0, math.random(-10, 10)
    )
    block.BrickColor = BrickColor.new("Dark stone grey")
    block.Material = Enum.Material.Slate
    block.Anchored = false  -- Falls with gravity!
    block.Parent = workspace
    
    -- Kill on impact
    block.Touched:Connect(function(hit)
        local humanoid = hit.Parent:FindFirstChild("Humanoid")
        if humanoid then
            humanoid:TakeDamage(40)
        end
    end)
    
    -- Auto-cleanup after 8 seconds
    Debris:AddItem(block, 8)
end

-- Spawn falling blocks periodically in a danger zone
local dangerZone = workspace:WaitForChild("DangerZone")  -- A part marking the area
local spawnHeight = dangerZone.Position + Vector3.new(0, 40, 0)

while true do
    createFallingBlock(spawnHeight)
    wait(math.random(1, 3))  -- Random interval between blocks
end`},{type:"heading",level:2,content:"Laser Grid Trap"},{type:"code",language:"lua",filename:"laser_grid.lua",code:`-- Toggling laser beams — must time your movement!
-- Create thin Neon parts as 'lasers'

local laserFolder = workspace:WaitForChild("Lasers")
local TOGGLE_TIME = 2  -- seconds between on/off
local isActive = true

-- Kill on touch when active
for _, laser in ipairs(laserFolder:GetChildren()) do
    laser.Touched:Connect(function(hit)
        if not isActive then return end
        local humanoid = hit.Parent:FindFirstChild("Humanoid")
        if humanoid then
            humanoid.Health = 0
        end
    end)
end

-- Toggle lasers on and off
while true do
    wait(TOGGLE_TIME)
    isActive = not isActive
    
    for _, laser in ipairs(laserFolder:GetChildren()) do
        if isActive then
            laser.Transparency = 0
            laser.CanCollide = true
            laser.BrickColor = BrickColor.new("Really red")
        else
            laser.Transparency = 0.8
            laser.CanCollide = false
            laser.BrickColor = BrickColor.new("Dark stone grey")
        end
    end
end`},{type:"warning",content:"When building trap-heavy sections, always give players a visual warning before the trap activates. A red flash, a sound cue, or a brief animation tells the player 'danger is coming' and gives them a chance to react. Traps without warning feel unfair; traps with warning feel challenging."},{type:"heading",level:2,content:"Disappearing Platforms"},{type:"code",language:"lua",filename:"disappearing_platform.lua",code:`-- Platform that disappears shortly after being touched!
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
end)`},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Build a 3-checkpoint obby with the checkpoint system. Test that respawning works at the correct checkpoint.","**Exercise 2:** Create 3 types of hazards: instant kill brick, lava zone, and a moving trap.","**Exercise 3:** Add disappearing platforms to your obby — they vanish 1.5 seconds after being touched.","**Exercise 4:** Create a spinning blade obstacle using CFrame.Angles().","**Exercise 5:** Combine everything: build a complete obby stage with platforms, hazards, and a checkpoint at the end."]},{type:"heading",level:2,content:"Conveyor Belt Trap"},{type:"text",content:"Conveyor belts push players toward hazards. They're a staple of difficult obbies:"},{type:"code",language:"lua",filename:"conveyor_belt.lua",code:`-- Conveyor belt that pushes players in a direction
local conveyor = script.Parent
local PUSH_SPEED = 15  -- How fast it pushes
local DIRECTION = Vector3.new(1, 0, 0)  -- Push to the right (+X)

-- Set the visual velocity (the surface arrows)
conveyor.AssemblyLinearVelocity = DIRECTION * PUSH_SPEED

-- Alternative: Use BodyVelocity on touching players
conveyor.Touched:Connect(function(hit)
    local humanoid = hit.Parent:FindFirstChild("Humanoid")
    if not humanoid then return end
    
    local rootPart = hit.Parent:FindFirstChild("HumanoidRootPart")
    if not rootPart then return end
    
    -- Check if already has a conveyor force
    if rootPart:FindFirstChild("ConveyorForce") then return end
    
    local force = Instance.new("BodyVelocity")
    force.Name = "ConveyorForce"
    force.Velocity = DIRECTION * PUSH_SPEED
    force.MaxForce = Vector3.new(5000, 0, 5000)
    force.Parent = rootPart
end)

conveyor.TouchEnded:Connect(function(hit)
    local rootPart = hit.Parent and hit.Parent:FindFirstChild("HumanoidRootPart")
    if rootPart then
        local force = rootPart:FindFirstChild("ConveyorForce")
        if force then force:Destroy() end
    end
end)`},{type:"heading",level:2,content:"Timed Challenge Doors"},{type:"code",language:"lua",filename:"timed_door.lua",code:`-- A door that opens briefly then closes — players must be fast!
local TweenService = game:GetService("TweenService")
local door = script.Parent
local button = workspace:WaitForChild("DoorButton")  -- A separate part

local OPEN_TIME = 3      -- Seconds the door stays open
local isOpen = false
local openPosition = door.Position + Vector3.new(0, 12, 0)  -- Move up
local closedPosition = door.Position

local function openDoor()
    if isOpen then return end
    isOpen = true
    
    -- Smooth open animation
    local openTween = TweenService:Create(door, TweenInfo.new(0.5), {
        Position = openPosition
    })
    openTween:Play()
    openTween.Completed:Wait()
    
    -- Wait then close
    wait(OPEN_TIME)
    
    -- Smooth close animation
    local closeTween = TweenService:Create(door, TweenInfo.new(0.5), {
        Position = closedPosition
    })
    closeTween:Play()
    closeTween.Completed:Wait()
    
    isOpen = false
end

-- Open door when button is touched
local clickDetector = button:FindFirstChildOfClass("ClickDetector")
if clickDetector then
    clickDetector.MouseClick:Connect(openDoor)
end`},{type:"tip",content:"Great obby design follows a difficulty curve: start easy to teach players the mechanics, then gradually increase difficulty. Place checkpoints AFTER hard sections (not before!) so players feel rewarded for completing challenges."},{type:"quiz",question:"Why do we check if stage.Value < checkpointNumber before updating?",options:[{id:"a",text:"To make the game harder"},{id:"b",text:"To prevent going backwards to earlier checkpoints"},{id:"c",text:"To count total checkpoints"},{id:"d",text:"No reason, it's optional"}],correct:"b",explanation:"We only update the stage if the new checkpoint number is HIGHER than the current one. This prevents players from losing progress by accidentally touching earlier checkpoints while exploring!"}]}}]},{id:5,title:"User Interface (GUI)",lessons:[{id:"5-1",title:"Creating Game UI",completed:!1,content:{description:"Build professional user interfaces — health bars, score displays, menus, and HUD elements that make your game feel polished.",sections:[{type:"text",content:`By the end of this lesson, you'll create screen GUIs with frames, labels, and proper positioning using the UDim2 system.

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

if player.Character then updateHealthBar() end`},{type:"tip",content:"GUIs use LocalScripts, not Scripts! LocalScripts run on the player's device, which is where GUI rendering happens. Put LocalScripts inside the GUI elements they control."},{type:"heading",level:2,content:"Styling Tips — Making GUIs Look Professional"},{type:"code",language:"lua",filename:"gui_styling.lua",code:`-- Professional GUI styling techniques

local frame = script.Parent

-- 1. ROUNDED CORNERS (essential for modern look)
local corner = Instance.new("UICorner")
corner.CornerRadius = UDim.new(0, 8)  -- 8px radius
corner.Parent = frame

-- 2. STROKE (border/outline)
local stroke = Instance.new("UIStroke")
stroke.Color = Color3.fromRGB(100, 100, 200)
stroke.Thickness = 2
stroke.Transparency = 0.5
stroke.Parent = frame

-- 3. GRADIENT (fade between colors)
local gradient = Instance.new("UIGradient")
gradient.Color = ColorSequence.new(
    Color3.fromRGB(60, 60, 120),   -- Start color
    Color3.fromRGB(30, 30, 60)     -- End color
)
gradient.Rotation = 90  -- Top to bottom
gradient.Parent = frame

-- 4. DROP SHADOW (using a duplicate frame behind)
local shadow = Instance.new("Frame")
shadow.Size = UDim2.new(1, 4, 1, 4)
shadow.Position = UDim2.new(0, 2, 0, 2)
shadow.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
shadow.BackgroundTransparency = 0.6
shadow.ZIndex = frame.ZIndex - 1
shadow.Parent = frame.Parent
local shadowCorner = Instance.new("UICorner")
shadowCorner.CornerRadius = UDim.new(0, 10)
shadowCorner.Parent = shadow

-- 5. COMMON COLOR PALETTES FOR GAMES:
-- Dark theme:  BG=#1a1a2e, Accent=#e94560, Text=#eee
-- Sci-fi:      BG=#0a0a0a, Accent=#00ff88, Text=#ccc
-- Fantasy:     BG=#2d1b00, Accent=#ffd700, Text=#f5f5dc
-- Ocean:       BG=#001f3f, Accent=#7fdbff, Text=#fff`},{type:"heading",level:2,content:"Responsive Design — Different Screen Sizes"},{type:"code",language:"lua",filename:"responsive_design.lua",code:`-- Make GUIs look good on ALL screen sizes (PC, tablet, phone)

local player = game.Players.LocalPlayer
local screenSize = player.PlayerGui:WaitForChild("ScreenGui").AbsoluteSize

-- Check screen width to determine device type
local function getDeviceType()
    local width = screenSize.X
    if width < 600 then
        return "Phone"
    elseif width < 1200 then
        return "Tablet"
    else
        return "PC"
    end
end

local device = getDeviceType()
print("Playing on: " .. device)

-- Adjust UI based on device
local button = script.Parent
if device == "Phone" then
    button.Size = UDim2.new(0.8, 0, 0, 60)  -- Wider, taller for thumbs
    button.TextSize = 22
elseif device == "Tablet" then
    button.Size = UDim2.new(0.5, 0, 0, 50)
    button.TextSize = 20
else
    button.Size = UDim2.new(0.3, 0, 0, 40)
    button.TextSize = 18
end

-- PRO TIP: Use Scale (0-1) for sizes that should adapt
-- to screen size, and Offset (pixels) for fixed-size elements.
-- UDim2.new(0.3, 0, 0.1, 0) → 30% wide, 10% tall (responsive!)
-- UDim2.new(0, 200, 0, 50) → always 200x50px (fixed)`},{type:"warning",content:"Always test your GUI on different screen sizes! In Studio, go to View → Device Emulation to preview how your game looks on phones, tablets, and different monitors. Many developers forget this and their phone players see broken UI."},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Create a simple ScreenGui with a TextLabel displaying 'Hello, Player!' centered on screen.","**Exercise 2:** Build the coin counter HUD that updates when the player collects coins.","**Exercise 3:** Create a health bar using two frames (background + fill).","**Exercise 4:** Add a Stage display next to the coin counter.","**Exercise 5:** Style your GUI with custom colors, fonts, rounded corners (UICorner), and a gradient (UIGradient)."]},{type:"heading",level:2,content:"Creating GUIs Entirely from Code"},{type:"text",content:"While you can design GUIs in Studio's GUI editor, creating them from code gives you full control and makes them easier to replicate:"},{type:"code",language:"lua",filename:"gui_from_code.lua",code:`-- LocalScript in StarterPlayerScripts
local player = game.Players.LocalPlayer
local playerGui = player:WaitForChild("PlayerGui")

-- Create the ScreenGui container
local screenGui = Instance.new("ScreenGui")
screenGui.Name = "CustomHUD"
screenGui.ResetOnSpawn = false  -- Don't destroy on death!
screenGui.Parent = playerGui

-- Create a notification banner at the top
local banner = Instance.new("Frame")
banner.Name = "NotificationBanner"
banner.Size = UDim2.new(0.4, 0, 0, 40)
banner.Position = UDim2.new(0.3, 0, 0, -50)  -- Start off-screen
banner.AnchorPoint = Vector2.new(0, 0)
banner.BackgroundColor3 = Color3.fromRGB(30, 30, 30)
banner.BackgroundTransparency = 0.2
banner.BorderSizePixel = 0
banner.Parent = screenGui

-- Add rounded corners
local corner = Instance.new("UICorner")
corner.CornerRadius = UDim.new(0, 8)
corner.Parent = banner

-- Add text to the banner
local bannerText = Instance.new("TextLabel")
bannerText.Name = "BannerText"
bannerText.Size = UDim2.new(1, -20, 1, 0)
bannerText.Position = UDim2.new(0, 10, 0, 0)
bannerText.BackgroundTransparency = 1
bannerText.TextColor3 = Color3.fromRGB(255, 255, 255)
bannerText.Font = Enum.Font.GothamBold
bannerText.TextSize = 16
bannerText.Text = "Welcome to the game!"
bannerText.Parent = banner

print("Custom HUD created from code!")`},{type:"heading",level:2,content:"UI Layout Constraints"},{type:"text",content:"Roblox provides powerful layout objects that automatically arrange children within a frame:"},{type:"code",language:"lua",filename:"ui_layouts.lua",code:`-- UIListLayout: Arrange children in a list (vertical or horizontal)
local frame = script.Parent

local listLayout = Instance.new("UIListLayout")
listLayout.FillDirection = Enum.FillDirection.Vertical  -- or Horizontal
listLayout.Padding = UDim.new(0, 5)       -- 5px between items
listLayout.HorizontalAlignment = Enum.HorizontalAlignment.Center
listLayout.SortOrder = Enum.SortOrder.LayoutOrder
listLayout.Parent = frame

-- Now any children added to the frame will auto-stack!
for i = 1, 5 do
    local item = Instance.new("TextLabel")
    item.Name = "Item" .. i
    item.Size = UDim2.new(1, 0, 0, 30)
    item.Text = "Menu Item " .. i
    item.LayoutOrder = i  -- Controls the order
    item.Parent = frame   -- Automatically positioned!
end

-- UIGridLayout: Arrange in a grid
local gridLayout = Instance.new("UIGridLayout")
gridLayout.CellSize = UDim2.new(0, 80, 0, 80)  -- Each cell 80x80
gridLayout.CellPadding = UDim2.new(0, 5, 0, 5)  -- 5px gaps
gridLayout.Parent = inventoryFrame

-- UIPadding: Add inner spacing
local padding = Instance.new("UIPadding")
padding.PaddingTop = UDim.new(0, 10)
padding.PaddingBottom = UDim.new(0, 10)
padding.PaddingLeft = UDim.new(0, 10)
padding.PaddingRight = UDim.new(0, 10)
padding.Parent = frame`},{type:"tip",content:"UIListLayout and UIGridLayout are game-changers for inventory systems, shop menus, and settings panels. Instead of manually positioning each item, the layout handles it automatically — even when you add or remove items dynamically!"},{type:"quiz",question:"What does UDim2.new(0.5, 0, 0.5, 0) with AnchorPoint (0.5, 0.5) do?",options:[{id:"a",text:"Top-left corner"},{id:"b",text:"Exact center of screen"},{id:"c",text:"Bottom-right corner"},{id:"d",text:"Half size"}],correct:"b",explanation:"Scale 0.5 = 50% of the way across both axes. With AnchorPoint at (0.5, 0.5), the element's CENTER is placed at that point, resulting in perfect centering!"}]}},{id:"5-2",title:"Interactive Buttons & Menus",completed:!1,content:{description:"Create clickable buttons, toggle switches, shop menus, and menu systems with smooth animations.",sections:[{type:"text",content:`By the end of this lesson, you'll build interactive menus with buttons, hover effects, toggle switches, and a functional shop UI.

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
updateVisual()`},{type:"warning",content:"Never process purchases on the client! A hacker could modify the LocalScript to give themselves items for free. Always send purchase requests to the server with FireServer(), and have the server validate that the player has enough coins before giving the item."},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Create a menu with 'Play' and 'Settings' buttons. Play hides the menu, Settings toggles a panel.","**Exercise 2:** Build a shop button that checks coin count and shows 'Purchased' or 'Not enough coins'.","**Exercise 3:** Create a music toggle button that starts/stops a Sound object in Workspace.","**Exercise 4:** Add hover effects (color change) to all your buttons.","**Exercise 5:** Create a notification system: a TextLabel that fades in with a message and fades out after 3 seconds."]},{type:"heading",level:2,content:"Inventory Grid UI"},{type:"text",content:"A grid-based inventory is essential for RPGs, survival games, and tycoons. Here's how to build one programmatically:"},{type:"code",language:"lua",filename:"inventory_grid.lua",code:`-- LocalScript for an inventory grid system
local player = game.Players.LocalPlayer
local playerGui = player:WaitForChild("PlayerGui")

-- Create the inventory screen
local screenGui = Instance.new("ScreenGui")
screenGui.Name = "InventoryUI"
screenGui.Parent = playerGui

-- Background panel
local inventoryFrame = Instance.new("Frame")
inventoryFrame.Name = "InventoryPanel"
inventoryFrame.Size = UDim2.new(0, 400, 0, 350)
inventoryFrame.Position = UDim2.new(0.5, 0, 0.5, 0)
inventoryFrame.AnchorPoint = Vector2.new(0.5, 0.5)
inventoryFrame.BackgroundColor3 = Color3.fromRGB(30, 30, 40)
inventoryFrame.Visible = false  -- Start hidden
inventoryFrame.Parent = screenGui

-- Title
local title = Instance.new("TextLabel")
title.Size = UDim2.new(1, 0, 0, 40)
title.BackgroundColor3 = Color3.fromRGB(50, 50, 70)
title.TextColor3 = Color3.fromRGB(255, 255, 255)
title.Font = Enum.Font.GothamBold
title.TextSize = 20
title.Text = "🎒 Inventory"
title.Parent = inventoryFrame

-- Grid container
local gridFrame = Instance.new("Frame")
gridFrame.Size = UDim2.new(1, -20, 1, -60)
gridFrame.Position = UDim2.new(0, 10, 0, 50)
gridFrame.BackgroundTransparency = 1
gridFrame.Parent = inventoryFrame

-- Add grid layout
local gridLayout = Instance.new("UIGridLayout")
gridLayout.CellSize = UDim2.new(0, 70, 0, 70)
gridLayout.CellPadding = UDim2.new(0, 8, 0, 8)
gridLayout.Parent = gridFrame

-- Create inventory slots
for i = 1, 20 do
    local slot = Instance.new("TextButton")
    slot.Name = "Slot_" .. i
    slot.BackgroundColor3 = Color3.fromRGB(60, 60, 80)
    slot.TextColor3 = Color3.fromRGB(200, 200, 200)
    slot.Font = Enum.Font.Gotham
    slot.TextSize = 12
    slot.Text = "Empty"
    slot.Parent = gridFrame
    
    -- Add rounded corners
    local corner = Instance.new("UICorner")
    corner.CornerRadius = UDim.new(0, 6)
    corner.Parent = slot
    
    -- Click handler for each slot
    slot.MouseButton1Click:Connect(function()
        if slot.Text ~= "Empty" then
            print("Selected: " .. slot.Text)
        end
    end)
end

-- Toggle inventory with a keybind (E key)
local UserInputService = game:GetService("UserInputService")
UserInputService.InputBegan:Connect(function(input, processed)
    if processed then return end  -- Ignore if typing in chat
    if input.KeyCode == Enum.KeyCode.E then
        inventoryFrame.Visible = not inventoryFrame.Visible
    end
end)`},{type:"heading",level:2,content:"Popup Dialog System"},{type:"code",language:"lua",filename:"dialog_system.lua",code:`-- Reusable dialog popup with Yes/No buttons
local TweenService = game:GetService("TweenService")

local function createDialog(parent, message, onYes, onNo)
    -- Dark overlay
    local overlay = Instance.new("Frame")
    overlay.Size = UDim2.new(1, 0, 1, 0)
    overlay.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
    overlay.BackgroundTransparency = 0.5
    overlay.ZIndex = 100
    overlay.Parent = parent
    
    -- Dialog box
    local dialog = Instance.new("Frame")
    dialog.Size = UDim2.new(0, 300, 0, 150)
    dialog.Position = UDim2.new(0.5, 0, 0.5, 0)
    dialog.AnchorPoint = Vector2.new(0.5, 0.5)
    dialog.BackgroundColor3 = Color3.fromRGB(40, 40, 55)
    dialog.ZIndex = 101
    dialog.Parent = overlay
    
    local corner = Instance.new("UICorner")
    corner.CornerRadius = UDim.new(0, 12)
    corner.Parent = dialog
    
    -- Message text
    local label = Instance.new("TextLabel")
    label.Size = UDim2.new(1, -20, 0, 80)
    label.Position = UDim2.new(0, 10, 0, 10)
    label.BackgroundTransparency = 1
    label.TextColor3 = Color3.fromRGB(255, 255, 255)
    label.Font = Enum.Font.Gotham
    label.TextSize = 16
    label.TextWrapped = true
    label.Text = message
    label.ZIndex = 102
    label.Parent = dialog
    
    -- Yes button
    local yesBtn = Instance.new("TextButton")
    yesBtn.Size = UDim2.new(0, 120, 0, 36)
    yesBtn.Position = UDim2.new(0, 20, 1, -46)
    yesBtn.BackgroundColor3 = Color3.fromRGB(0, 160, 0)
    yesBtn.TextColor3 = Color3.fromRGB(255, 255, 255)
    yesBtn.Font = Enum.Font.GothamBold
    yesBtn.TextSize = 14
    yesBtn.Text = "✅ Yes"
    yesBtn.ZIndex = 102
    yesBtn.Parent = dialog
    
    -- No button
    local noBtn = Instance.new("TextButton")
    noBtn.Size = UDim2.new(0, 120, 0, 36)
    noBtn.Position = UDim2.new(1, -140, 1, -46)
    noBtn.BackgroundColor3 = Color3.fromRGB(160, 0, 0)
    noBtn.TextColor3 = Color3.fromRGB(255, 255, 255)
    noBtn.Font = Enum.Font.GothamBold
    noBtn.TextSize = 14
    noBtn.Text = "❌ No"
    noBtn.ZIndex = 102
    noBtn.Parent = dialog
    
    yesBtn.MouseButton1Click:Connect(function()
        overlay:Destroy()
        if onYes then onYes() end
    end)
    
    noBtn.MouseButton1Click:Connect(function()
        overlay:Destroy()
        if onNo then onNo() end
    end)
    
    return overlay
end

-- Usage:
-- createDialog(screenGui, "Buy Sword for 50 coins?",
--     function() print("Bought!") end,
--     function() print("Cancelled") end
-- )`},{type:"heading",level:2,content:"Cooldown Button (Visual Timer)"},{type:"code",language:"lua",filename:"cooldown_button.lua",code:`-- A button with a visual cooldown timer
local TweenService = game:GetService("TweenService")
local button = script.Parent
local COOLDOWN_TIME = 5  -- seconds
local ready = true

local originalText = "⚡ Use Ability"
local originalColor = Color3.fromRGB(80, 80, 200)

button.Text = originalText
button.BackgroundColor3 = originalColor

button.MouseButton1Click:Connect(function()
    if not ready then return end
    ready = false
    
    -- Activate the ability
    print("Ability activated!")
    
    -- Visual cooldown countdown
    for i = COOLDOWN_TIME, 1, -1 do
        button.Text = "⏳ " .. i .. "s"
        button.BackgroundColor3 = Color3.fromRGB(100, 100, 100)
        wait(1)
    end
    
    -- Ready again!
    button.Text = originalText
    button.BackgroundColor3 = originalColor
    ready = true
end)`},{type:"tip",content:"When building complex UI systems, use ModuleScripts to create reusable UI components. Write functions like createButton(), createSlider(), createDropdown() once, then reuse them throughout your game. This saves enormous time!"},{type:"checkpoint",content:"Create a simple menu with a 'Play' button that hides the menu when clicked, and a 'Settings' button that toggles a settings panel. Add hover effects to both buttons!"}]}}]},{id:6,title:"Multiplayer & Data",lessons:[{id:"6-1",title:"Client-Server Communication",completed:!1,content:{description:"Master RemoteEvents and RemoteFunctions to make your game truly multiplayer. Understand client-server architecture and secure your game against cheaters.",sections:[{type:"text",content:`By the end of this lesson, you'll understand the client-server model, use RemoteEvents for communication, and know how to prevent common exploits.

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
end)`},{type:"warning",content:"NEVER trust data from FireServer! Exploiters can send any values they want. A client might fire BuyItem with a cost of 0, or an invalid item name. Always verify everything on the server: check the real item price from your server data, verify the player has enough coins, and validate the item exists."},{type:"tip",content:"The 'player' parameter in OnServerEvent is automatically provided by Roblox — you can't fake it. This is your reliable way to know WHO sent the request."},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Create a RemoteEvent that lets a client request a speed boost. The server validates and applies it.","**Exercise 2:** Build a chat notification system where the server sends messages to all clients.","**Exercise 3:** Create a shop with 3 items using RemoteEvents for purchase requests.","**Exercise 4:** Add server-side validation that prevents buying the same item twice.","**Exercise 5:** Build a voting system where clients send votes and the server tallies them."]},{type:"heading",level:2,content:"RemoteFunctions — Request + Response"},{type:"text",content:"While RemoteEvents send one-way messages, RemoteFunctions let the client **ask** the server something and **wait for an answer**:"},{type:"code",language:"lua",filename:"remote_functions.lua",code:`-- RemoteFunction lets client ask server and GET A RESPONSE
-- Create a RemoteFunction in ReplicatedStorage called 'GetShopItems'

-- SERVER (Script in ServerScriptService)
local getShopItems = game.ReplicatedStorage:WaitForChild("GetShopItems")

local shopInventory = {
    {name = "Speed Boost", cost = 50, description = "2x speed for 30s"},
    {name = "High Jump", cost = 75, description = "3x jump power for 30s"},
    {name = "Shield", cost = 100, description = "Blocks next hit"},
}

getShopItems.OnServerInvoke = function(player)
    -- Return shop data to the client
    print(player.Name .. " is browsing the shop")
    return shopInventory
end

-- CLIENT (LocalScript in StarterGui)
local getShopItems = game.ReplicatedStorage:WaitForChild("GetShopItems")

-- This WAITS for the server to respond
local items = getShopItems:InvokeServer()

-- Now 'items' has the shop data!
for i, item in ipairs(items) do
    print(item.name .. " — " .. item.cost .. " coins")
    print("   " .. item.description)
end`},{type:"heading",level:2,content:"Security Best Practices"},{type:"code",language:"lua",filename:"security_patterns.lua",code:`-- ❌ BAD: Trusting client data
remote.OnServerEvent:Connect(function(player, itemName, price)
    -- A hacker could send price = 0!
    player.leaderstats.Coins.Value -= price  -- WRONG!
end)

-- ✅ GOOD: Server validates everything
local ITEM_PRICES = {
    ["Sword"] = 50,
    ["Shield"] = 75,
    ["Potion"] = 25,
}

remote.OnServerEvent:Connect(function(player, itemName)
    -- Look up the REAL price on the server
    local realPrice = ITEM_PRICES[itemName]
    
    -- Validate the item exists
    if not realPrice then
        warn(player.Name .. " requested invalid item: " .. tostring(itemName))
        return
    end
    
    -- Validate player can afford it
    local coins = player.leaderstats.Coins
    if coins.Value < realPrice then
        warn(player.Name .. " can't afford " .. itemName)
        return
    end
    
    -- All checks passed — process the purchase
    coins.Value -= realPrice
    print("✅ " .. player.Name .. " bought " .. itemName .. " for " .. realPrice)
    -- Give the item...
end)

-- ✅ GOOD: Rate limiting to prevent spam
local lastFireTime = {}
local COOLDOWN = 1  -- 1 second between requests

remote.OnServerEvent:Connect(function(player, ...)
    local now = tick()
    local lastTime = lastFireTime[player.UserId] or 0
    
    if now - lastTime < COOLDOWN then
        warn(player.Name .. " is firing too fast! Ignoring.")
        return
    end
    
    lastFireTime[player.UserId] = now
    -- Process the request...
end)`},{type:"warning",content:"NEVER use RemoteFunction's OnClientInvoke (server calling client and waiting for a response). A malicious client could stall or crash the server by never responding. Only use OnServerInvoke (client asks server) which is safe."},{type:"heading",level:2,content:"Complete Multiplayer Example: Team Chat"},{type:"code",language:"lua",filename:"team_notification.lua",code:`-- Server-side team notification system
-- Put in ServerScriptService

local Players = game:GetService("Players")
local announceRemote = game.ReplicatedStorage:WaitForChild("Announce")

-- Send announcement to all players
local function announceToAll(message, color)
    color = color or Color3.fromRGB(255, 255, 255)
    announceRemote:FireAllClients(message, color)
end

-- Announce when players join/leave
Players.PlayerAdded:Connect(function(player)
    announceToAll(
        "👋 " .. player.Name .. " joined the game!",
        Color3.fromRGB(100, 255, 100)  -- Green
    )
end)

Players.PlayerRemoving:Connect(function(player)
    announceToAll(
        "👋 " .. player.Name .. " left the game.",
        Color3.fromRGB(255, 100, 100)  -- Red
    )
end)

-- Client-side: show the announcement
-- LocalScript in StarterGui
local announceRemote = game.ReplicatedStorage:WaitForChild("Announce")
local label = script.Parent  -- A TextLabel

announceRemote.OnClientEvent:Connect(function(message, color)
    label.Text = message
    label.TextColor3 = color
    label.Visible = true
    
    wait(4)
    label.Visible = false
end)`},{type:"quiz",question:"Why should game logic (like giving items) be on the server?",options:[{id:"a",text:"It's faster"},{id:"b",text:"The server can't be hacked, preventing cheating"},{id:"c",text:"LocalScripts can't give items"},{id:"d",text:"It's required by Roblox"}],correct:"b",explanation:"Exploiters can modify client code (LocalScripts) freely. But they cannot modify server code. By putting important logic like currency, items, and combat on the server, you make it impossible to cheat!"}]}},{id:"6-2",title:"Saving Player Data",completed:!1,content:{description:"Persist player progress between game sessions using DataStoreService. Save coins, levels, inventory, and settings so players never lose their progress.",sections:[{type:"text",content:`By the end of this lesson, you'll implement a complete data saving system using DataStoreService with proper error handling, so player progress persists between sessions.

Without data saving, all progress is lost when a player leaves. They'd have to re-collect every coin, re-complete every checkpoint, every single time they play. **DataStoreService** solves this by saving data to Roblox's cloud servers. When a player returns, their data is loaded and restored.

Data persistence is what makes a game feel "real." Players invest time and effort into earning coins and completing stages. If that progress disappears, they feel cheated and won't come back. Every successful Roblox game saves player data — it's not optional, it's essential.`},{type:"heading",level:2,content:"What is DataStoreService?"},{type:"text",content:"DataStoreService is Roblox's cloud database system. Think of it as a giant filing cabinet in the cloud where each player has their own folder. When they play, you open their folder and read their data. When they leave, you put updated data back in the folder."},{type:"code",language:"text",filename:"datastore_concepts.txt",code:`HOW DATASTORES WORK:
━━━━━━━━━━━━━━━━━━━

DataStore = A named storage area (like a filing cabinet)
  └── Keys = Individual entries (like folders in the cabinet)
       └── Values = The actual data (like documents in the folder)

Example:
  DataStore: "PlayerData_v1" (our cabinet)
    Key: "Player_12345678"   (folder for player with userId 12345678)
    Value: {Coins=150, Stage=5, PlayTime=3600}

KEY OPERATIONS:
  GetAsync(key)     → Read data from the store
  SetAsync(key, val) → Write data to the store (overwrites!)
  UpdateAsync(key, fn) → Read + modify + write atomically
  RemoveAsync(key)   → Delete data

LIMITS (important!):
  • 60 + numPlayers×10 requests per minute (per datastore)
  • Max 4MB per key
  • Max 50 characters per key name
  • Keys are global — all servers share the same data!`},{type:"heading",level:2,content:"Enabling DataStores"},{type:"code",language:"text",filename:"enable_datastores.txt",code:`Before DataStores work, you need to:

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
end)`},{type:"tip",content:"Always use pcall() with DataStore operations! DataStores can fail due to network issues, rate limits, or server problems. pcall catches errors so your game keeps running instead of crashing."},{type:"warning",content:"DataStores have rate limits! Don't save every time a player picks up a coin. Save when they leave (PlayerRemoving) and when the server shuts down (BindToClose). For auto-saving, save once every 60-120 seconds at most."},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Implement the basic data save/load system with Coins.","**Exercise 2:** Add Stage saving so checkpoint progress persists.","**Exercise 3:** Add an auto-save every 120 seconds using a while loop.","**Exercise 4:** Test data persistence: collect coins, leave, rejoin — verify coins are saved.","**Exercise 5:** Add error handling with retry logic — if save fails, try again up to 3 times."]},{type:"heading",level:2,content:"Auto-Save System"},{type:"text",content:"Relying solely on saving when a player leaves is risky — server crashes can lose data. Implement an auto-save system as a safety net:"},{type:"code",language:"lua",filename:"auto_save.lua",code:`-- Add this to your data system script in ServerScriptService

local AUTO_SAVE_INTERVAL = 120  -- Save every 2 minutes

-- Auto-save loop
spawn(function()
    while true do
        wait(AUTO_SAVE_INTERVAL)
        
        for _, player in ipairs(Players:GetPlayers()) do
            -- Wrap in pcall for safety
            local success, err = pcall(function()
                savePlayerData(player)
            end)
            
            if not success then
                warn("Auto-save failed for " .. player.Name .. ": " .. err)
            end
        end
        
        print("💾 Auto-save complete for all players")
    end
end)`},{type:"heading",level:2,content:"Data Store Retry Logic"},{type:"code",language:"lua",filename:"retry_logic.lua",code:`-- Robust save function with retry logic
local MAX_RETRIES = 3
local RETRY_DELAY = 2  -- seconds between retries

local function saveWithRetry(player)
    local leaderstats = player:FindFirstChild("leaderstats")
    if not leaderstats then return false end
    
    local data = {
        Coins = leaderstats.Coins.Value,
        Stage = leaderstats.Stage.Value
    }
    
    for attempt = 1, MAX_RETRIES do
        local success, err = pcall(function()
            playerDataStore:SetAsync("Player_" .. player.UserId, data)
        end)
        
        if success then
            print("✅ Saved " .. player.Name .. " (attempt " .. attempt .. ")")
            return true
        else
            warn("❌ Save attempt " .. attempt .. " failed: " .. err)
            if attempt < MAX_RETRIES then
                wait(RETRY_DELAY)
            end
        end
    end
    
    warn("🚨 ALL SAVE ATTEMPTS FAILED for " .. player.Name)
    return false
end`},{type:"heading",level:2,content:"Saving Complex Data (Inventory)"},{type:"code",language:"lua",filename:"complex_data.lua",code:`-- DataStores can save tables — perfect for inventory systems!

local DEFAULT_DATA = {
    Coins = 0,
    Stage = 1,
    PlayTime = 0,
    Inventory = {},       -- List of owned items
    Settings = {
        MusicEnabled = true,
        SFXVolume = 0.8,
    },
}

-- Deep copy function to avoid reference issues
local function deepCopy(original)
    local copy = {}
    for k, v in pairs(original) do
        if type(v) == "table" then
            copy[k] = deepCopy(v)
        else
            copy[k] = v
        end
    end
    return copy
end

-- Load with defaults for missing fields
local function loadPlayerData(player)
    local success, savedData = pcall(function()
        return playerDataStore:GetAsync("Player_" .. player.UserId)
    end)
    
    -- Start with a copy of defaults
    local data = deepCopy(DEFAULT_DATA)
    
    -- Merge saved data on top of defaults
    if success and savedData then
        for key, value in pairs(savedData) do
            if type(value) == "table" and type(data[key]) == "table" then
                -- Merge nested tables
                for k2, v2 in pairs(value) do
                    data[key][k2] = v2
                end
            else
                data[key] = value
            end
        end
    end
    
    return data
end

-- This pattern ensures new players get defaults
-- AND existing players keep their data even when
-- you add new fields in updates!`},{type:"tip",content:"Version your DataStore names! Use 'PlayerData_v1', 'PlayerData_v2', etc. If you change the data structure significantly, you can migrate players from the old version to the new one without losing their data."},{type:"checkpoint",content:"Implement data saving for your coin and checkpoint system. Collect some coins, leave the game, rejoin, and verify your coins and stage are still there!"}]}}]},{id:7,title:"Publishing & Polish",lessons:[{id:"7-1",title:"Game Polish & Testing",completed:!1,content:{description:"Transform your game from a prototype to a polished experience. Learn testing techniques, visual effects, sound design, and the finishing touches that make games feel professional.",sections:[{type:"text",content:`By the end of this lesson, you'll know how to test thoroughly, add visual polish, implement sound effects, and prepare your game for public release.

The difference between a game people play once and a game they come back to is **polish**. Polish is the sound effects, the particle effects, the smooth animations, the helpful UI, and the dozens of small details that make a game feel complete. A polished game feels like someone cared about every detail — because they did.

Professional game studios spend 30-50% of development time on polish alone. It's that important. A game with basic graphics but excellent "game feel" will always outperform a beautiful game that feels clunky. In this lesson, you'll learn the polish techniques that transform your game from amateur to professional.`},{type:"heading",level:2,content:"Testing Checklist"},{type:"code",language:"text",filename:"testing_checklist.txt",code:`Before publishing, test EVERYTHING:

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
end`},{type:"heading",level:2,content:"Background Music System"},{type:"code",language:"lua",filename:"music_system.lua",code:`-- Complete background music system with playlist
-- Put in ServerScriptService or StarterPlayer

local SoundService = game:GetService("SoundService")

local playlist = {
    "rbxassetid://1234567890",  -- Song 1 (replace with real IDs)
    "rbxassetid://2345678901",  -- Song 2
    "rbxassetid://3456789012",  -- Song 3
}

local currentSong = 1

local music = Instance.new("Sound")
music.Name = "BackgroundMusic"
music.Volume = 0.3
music.Looped = false  -- We'll handle looping manually
music.Parent = SoundService

local function playNext()
    music.SoundId = playlist[currentSong]
    music:Play()
    
    currentSong += 1
    if currentSong > #playlist then
        currentSong = 1  -- Loop back to first song
    end
end

-- When a song ends, play the next one
music.Ended:Connect(playNext)

-- Start the playlist
playNext()`},{type:"heading",level:2,content:"Sound Effects"},{type:"code",language:"lua",filename:"sound_effects.lua",code:`-- Create and play sounds programmatically

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
bloom.Parent = Lighting`},{type:"tip",content:"Small polish details matter more than you think: screen shake on death, particles when collecting items, sound effects on buttons, smooth camera transitions. Players FEEL these details even if they don't consciously notice them."},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Run through the testing checklist for your game. Fix every issue you find.","**Exercise 2:** Add particle effects to your coin collection system.","**Exercise 3:** Add background music to your game using a Sound in Workspace.","**Exercise 4:** Set up nice lighting with Atmosphere and Bloom effects.","**Exercise 5:** Add a loading screen that shows briefly when players join."]},{type:"heading",level:2,content:"Screen Shake Effect"},{type:"text",content:"Screen shake is one of the most impactful polish effects. Use it for explosions, taking damage, or boss attacks:"},{type:"code",language:"lua",filename:"screen_shake.lua",code:`-- LocalScript in StarterPlayerScripts
local camera = workspace.CurrentCamera

local function screenShake(intensity, duration)
    local startTime = tick()
    
    while tick() - startTime < duration do
        local elapsed = tick() - startTime
        local remaining = 1 - (elapsed / duration)  -- Fade out over time
        
        local offsetX = math.random(-100, 100) / 100 * intensity * remaining
        local offsetY = math.random(-100, 100) / 100 * intensity * remaining
        
        camera.CFrame = camera.CFrame * CFrame.new(offsetX, offsetY, 0)
        
        wait()  -- One frame
    end
end

-- Usage: light shake when hit
screenShake(0.5, 0.3)

-- Usage: heavy shake for explosions
screenShake(2, 0.5)

-- Usage: earthquake effect
screenShake(1.5, 3)`},{type:"heading",level:2,content:"Tweened UI Animations"},{type:"code",language:"lua",filename:"ui_animations.lua",code:`-- Smooth UI animations using TweenService
local TweenService = game:GetService("TweenService")

-- Slide-in notification from the top
local function showNotification(gui, message, duration)
    gui.Text = message
    gui.Position = UDim2.new(0.5, 0, 0, -50)  -- Start above screen
    gui.Visible = true
    
    -- Slide down
    local slideIn = TweenService:Create(gui, TweenInfo.new(0.3, Enum.EasingStyle.Back), {
        Position = UDim2.new(0.5, 0, 0, 20)
    })
    slideIn:Play()
    
    wait(duration or 3)
    
    -- Slide back up
    local slideOut = TweenService:Create(gui, TweenInfo.new(0.2, Enum.EasingStyle.Quad), {
        Position = UDim2.new(0.5, 0, 0, -50)
    })
    slideOut:Play()
    slideOut.Completed:Wait()
    gui.Visible = false
end

-- Bounce effect for collecting items
local function bounceEffect(gui)
    local originalSize = gui.Size
    
    -- Scale up quickly
    local scaleUp = TweenService:Create(gui, TweenInfo.new(0.1), {
        Size = UDim2.new(
            originalSize.X.Scale * 1.3, originalSize.X.Offset,
            originalSize.Y.Scale * 1.3, originalSize.Y.Offset
        )
    })
    
    -- Scale back down with bounce
    local scaleDown = TweenService:Create(
        gui,
        TweenInfo.new(0.3, Enum.EasingStyle.Elastic),
        {Size = originalSize}
    )
    
    scaleUp:Play()
    scaleUp.Completed:Wait()
    scaleDown:Play()
end`},{type:"heading",level:2,content:"Performance Optimization Tips"},{type:"code",language:"text",filename:"performance_tips.txt",code:`COMMON PERFORMANCE KILLERS & FIXES:

1. TOO MANY PARTS
   Problem: Games with 10,000+ parts run slowly
   Fix: Use MeshParts, combine parts with Union,
        or use Terrain for landscapes

2. MEMORY LEAKS
   Problem: Creating objects but never destroying them
   Fix: Always :Destroy() temporary objects
        Use Debris:AddItem() for auto-cleanup

3. UNOPTIMIZED LOOPS
   Problem: GetChildren() every frame
   Fix: Cache results, only update when needed

4. TOO MANY SCRIPTS
   Problem: Individual scripts on every part
   Fix: Use centralized managers (like the coin manager)

5. EXCESSIVE REMOTEEVENTS
   Problem: Firing events every frame
   Fix: Batch updates, send only changes, rate limit

6. HIGH-POLY MESHES
   Problem: Detailed 3D models slow rendering
   Fix: Keep under 10,000 triangles per mesh

QUICK PERFORMANCE CHECK:
• Press Ctrl+Shift+F5 for microprofiler
• Check Settings → Rendering Stats
• Target: 60 FPS minimum on mid-range devices`},{type:"warning",content:"Test your game on MOBILE before publishing! Many players use phones, and what runs smoothly on your PC might lag on a phone. Reduce part count, simplify effects, and make sure buttons are big enough to tap."},{type:"checkpoint",content:"Complete the testing checklist for your game. Fix at least 3 issues, add sound effects to 2 interactions, and add particle effects to coin collection."}]}},{id:"7-2",title:"Publishing to Roblox",completed:!1,content:{description:"Launch your game to the world! Learn how to publish, configure game settings, create an icon, and promote your game to get players.",sections:[{type:"text",content:`By the end of this lesson, your game will be published on Roblox and accessible to millions of potential players. You'll know how to configure settings, create an appealing game page, and start building an audience.

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
https://www.roblox.com/games/[GameId]`},{type:"heading",level:2,content:"Getting Players"},{type:"list",items:["📱 **Share on social media** — TikTok, YouTube, Twitter with gameplay clips","👥 **Friends first** — Ask friends to play, they invite their friends","🎮 **Roblox groups** — Join and share in relevant game communities","📺 **Create content** — Make a trailer or gameplay video","🔄 **Update regularly** — New content keeps players coming back","👂 **Listen to feedback** — Fix what players complain about","⭐ **Optimize the first minute** — If players leave in 60 seconds, they won't come back"]},{type:"tip",content:"First impressions are EVERYTHING. Your game icon and the first 30 seconds of gameplay determine if players stay. Make sure the icon is eye-catching and the opening experience is fun and clear."},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Configure all game settings — name, description, genre, max players.","**Exercise 2:** Create a game icon (512x512) using any image tool.","**Exercise 3:** Take 3 in-game screenshots for thumbnails.","**Exercise 4:** Publish your game and set it to Public.","**Exercise 5:** Share the link with a friend and get feedback!"]},{type:"heading",level:2,content:"Monetization — Earning Robux"},{type:"text",content:"Once your game has players, you can earn Robux through game passes and developer products:"},{type:"code",language:"text",filename:"monetization_guide.txt",code:`GAME PASSES (one-time purchases):
• VIP pass — special perks, exclusive areas
• 2x Coins — double coin collection rate
• Custom Trail — visual effects behind player
• Extra Lives — more respawn chances
• Skip Stage — jump ahead in the obby

DEVELOPER PRODUCTS (can buy multiple times):
• 100 Coins — instant coin boost
• Extra Life — one additional respawn
• Speed Boost — temporary speed increase

HOW TO CREATE A GAME PASS:
1. Go to roblox.com/develop
2. Click your game → Game Passes
3. Create a new pass with name, icon, description
4. Set the price (minimum 1 Robux)
5. Script the benefits in your game!

ROBUX EARNINGS:
• You receive 70% of Robux spent in your game
• 100,000 Robux = roughly $350 USD (Developer Exchange)
• DevEx requirements: 13+ age, 50,000+ earned Robux`},{type:"code",language:"lua",filename:"game_pass_script.lua",code:`-- Script in ServerScriptService to handle Game Pass perks
local MarketplaceService = game:GetService("MarketplaceService")
local Players = game:GetService("Players")

local VIP_PASS_ID = 123456789  -- Replace with your Game Pass ID!
local DOUBLE_COINS_PASS_ID = 987654321  -- Another pass

Players.PlayerAdded:Connect(function(player)
    -- Check if player owns VIP pass
    local hasVIP = false
    local success, result = pcall(function()
        return MarketplaceService:UserOwnsGamePassAsync(
            player.UserId, VIP_PASS_ID
        )
    end)
    
    if success then
        hasVIP = result
    end
    
    if hasVIP then
        print("⭐ VIP Player: " .. player.Name)
        -- Give VIP perks
        player.CharacterAdded:Connect(function(char)
            local humanoid = char:WaitForChild("Humanoid")
            humanoid.WalkSpeed = 24  -- Faster than normal!
        end)
    end
    
    -- Check for double coins
    local hasDouble = false
    pcall(function()
        hasDouble = MarketplaceService:UserOwnsGamePassAsync(
            player.UserId, DOUBLE_COINS_PASS_ID
        )
    end)
    
    -- Store as attribute for other scripts to check
    player:SetAttribute("DoubleCoins", hasDouble or false)
end)`},{type:"tip",content:"Price your game passes wisely! Too expensive and nobody buys them. Too cheap and you don't earn much. Look at popular games in your genre for pricing guidance. A VIP pass usually costs 50-200 Robux, while coin packs cost 25-100 Robux."},{type:"heading",level:2,content:"Promoting Your Game"},{type:"code",language:"text",filename:"promotion_strategies.txt",code:`FREE PROMOTION STRATEGIES:
━━━━━━━━━━━━━━━━━━━━━━━

1. SOCIAL MEDIA
   • TikTok: Short gameplay clips (15-30 seconds)
   • YouTube: Tutorials, updates, trailers
   • Twitter: Screenshots, development updates
   • Discord: Create a community server

2. ROBLOX COMMUNITY
   • Create a Roblox Group for your game
   • Post on the DevForum (devforum.roblox.com)
   • Engage in game-related communities

3. CONTENT QUALITY
   • Professional game icon (this is your AD!)
   • Compelling description with keywords
   • Regular updates with changelog
   • Respond to player feedback

4. PLAYER RETENTION
   • Daily rewards for returning players
   • Seasonal events and limited-time content
   • Achievement/badge system
   • Regular content updates

5. PAID PROMOTION (when you have Robux)
   • Roblox Sponsored Experiences
   • Collaborate with Roblox YouTubers
   • Cross-promotion with other developers`},{type:"checkpoint",content:"Publish your game to Roblox! Configure the settings, add an icon, and set it to Public. Share the link with at least one person and get their feedback."}]}}]},{id:8,title:"Congratulations! 🎉",lessons:[{id:"8-1",title:"You're a Roblox Developer!",completed:!1,content:{description:"Amazing work! You've completed the Roblox Game Development course. Review what you've learned and discover what's next on your development journey.",sections:[{type:"text",content:`**CONGRATULATIONS, DEVELOPER!** 🎉🎮

You did it! You've gone from knowing nothing about game development to having the skills to create, code, and publish real Roblox games. That's an incredible achievement — most people never get past thinking about making a game. You actually DID it.

Think about how far you've come: you learned a real programming language (Lua), understood 3D game architecture, built interactive systems, handled multiplayer networking, and saved player data to the cloud. These aren't just "Roblox skills" — these are real computer science and software engineering concepts that transfer to any programming career.

Let's review everything you've accomplished:`},{type:"heading",level:2,content:"Skills You've Mastered"},{type:"list",items:["✅ **Roblox Studio** — Navigating, building, organizing game worlds","✅ **Parts & Properties** — Creating, transforming, and customizing 3D objects","✅ **Lua Programming** — Variables, data types, math operations, strings","✅ **Logic & Decisions** — If/elseif/else statements, comparisons, boolean logic","✅ **Loops** — While loops, for loops, break, continue","✅ **Functions** — Parameters, return values, code organization","✅ **Object Hierarchy** — FindFirstChild, WaitForChild, GetChildren, GetDescendants","✅ **Events** — Touched, PlayerAdded, MouseClick, debounce pattern","✅ **Game Systems** — Coin collection, checkpoints, kill bricks, traps","✅ **User Interface** — ScreenGui, TextLabels, TextButtons, health bars","✅ **Multiplayer** — RemoteEvents, client-server architecture, security","✅ **Data Persistence** — DataStoreService, saving/loading player progress","✅ **Polish** — Particles, sounds, lighting, atmosphere","✅ **Publishing** — Game settings, icons, launching to the public"]},{type:"heading",level:2,content:"What's Next?"},{type:"list",items:["🎮 **Build more games** — Each game teaches you something new!","🎭 **Animations** — Make characters emote and objects animate smoothly","🚗 **Vehicles** — Build drivable cars, boats, and planes","🤖 **AI Enemies** — Create NPC behavior with pathfinding","💰 **Monetization** — Game passes and developer products for Robux","🎨 **3D Modeling** — Learn Blender to create custom meshes","🔊 **Advanced Audio** — Music systems, 3D spatial sound","🌍 **Terrain** — Create realistic landscapes with the terrain editor","📚 **Roblox Dev Forum** — Join the community at devforum.roblox.com","🏆 **Game Jams** — Compete in Roblox game jams to challenge yourself"]},{type:"heading",level:2,content:"Game Ideas to Build Next"},{type:"list",items:["🏃 **Obby** — Expand your checkpoint system into a full obstacle course","⚔️ **Sword Fighting** — PvP combat with weapons and arenas","🏠 **Tycoon** — Build and upgrade a base to earn money","🧟 **Survival** — Collect resources, craft items, survive waves","🏎️ **Racing** — Custom vehicles on a track with lap timing","🧩 **Puzzle Game** — Logic puzzles, mazes, escape rooms","🎭 **Roleplay** — Jobs, housing, and social interaction","👾 **Tower Defense** — Place towers to stop enemy waves"]},{type:"tip",content:"The best way to improve is to BUILD. Pick one game idea from the list above and start making it today. You'll encounter new challenges that force you to learn new skills. That's the fastest path to becoming a great developer!"},{type:"heading",level:2,content:"Final Capstone Project"},{type:"text",content:"Put everything together with this comprehensive capstone project. Build a complete mini-game that showcases every skill you've learned:"},{type:"code",language:"text",filename:"capstone_project.txt",code:`CAPSTONE PROJECT: 'Coin Rush' — Complete Mini Game
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Build a timed coin-collection game with these features:

1. WORLD DESIGN (Chapter 1)
   □ Build an arena with platforms at different heights
   □ Use different materials for visual variety
   □ Add terrain around the edges
   □ Create an attractive spawn area

2. GAME SYSTEMS (Chapters 2-4)
   □ Leaderstats with Coins and HighScore
   □ 20+ coins scattered around the map
   □ 3 coin tiers: Bronze (1pt), Silver (5pt), Gold (25pt)
   □ 60-second countdown timer per round
   □ Kill zones (lava, void) that reset position
   □ Moving platforms to reach higher coins

3. USER INTERFACE (Chapter 5)
   □ Timer display (top center)
   □ Current score display (top left)
   □ High score display (top right)
   □ 'Game Over' screen with final score
   □ 'Play Again' button
   □ Start menu with title and instructions

4. MULTIPLAYER (Chapter 6)
   □ Works for multiple players simultaneously
   □ Each player has their own score
   □ Announce when someone gets a new high score
   □ Use RemoteEvents for start/end game signals

5. DATA PERSISTENCE (Chapter 6)
   □ Save each player's all-time high score
   □ Load it when they rejoin
   □ Display personal best on the HUD

6. POLISH (Chapter 7)
   □ Particle effects on coin collection
   □ Sound effects (collect, timer warning, game over)
   □ Atmosphere and lighting
   □ Screen shake when timer hits 10 seconds
   □ Professional game icon and description
   □ Published and playable!

ESTIMATED TIME: 4-8 hours
DIFFICULTY: Uses everything from this course!`},{type:"heading",level:2,content:"Game Design Principles"},{type:"text",content:"Before you build your next game, internalize these game design principles that professionals follow:"},{type:"code",language:"text",filename:"design_principles.txt",code:`🎮 10 GAME DESIGN PRINCIPLES:

1. THE 30-SECOND RULE
   Players decide in 30 seconds if they'll keep playing.
   Make the opening IMMEDIATELY fun and clear.

2. TEACH BY DOING
   Don't show long text tutorials. Design levels that
   teach mechanics naturally through gameplay.

3. REWARD FREQUENTLY
   Give players small wins often: coins, sounds, effects.
   Long gaps between rewards = boredom.

4. DIFFICULTY CURVE
   Easy → Medium → Hard. Never spike difficulty suddenly.
   Each challenge should build on what players already know.

5. JUICE IT
   Add feedback to EVERYTHING: sounds on clicks, particles
   on collections, screen shake on impacts. 'Juice' makes
   simple actions feel satisfying.

6. LESS IS MORE
   A game with 3 polished features beats a game with
   20 broken features. Finish what you start.

7. PLAYTEST CONSTANTLY
   You know your game too well to judge it fairly.
   Watch OTHER people play. Where do they get confused?

8. FAIL FAST, LEARN FAST
   Build a rough prototype in 1 day. Test it.
   If it's not fun, change the core mechanic or move on.

9. COPY, THEN INNOVATE
   Study games you love. Understand WHY they're fun.
   Clone them first, then add your unique twist.

10. SHIP IT
    A finished, published game teaches you more than
    10 unfinished projects. Done > Perfect.`},{type:"heading",level:2,content:"Recommended Resources"},{type:"code",language:"text",filename:"resources.txt",code:`OFFICIAL RESOURCES:
━━━━━━━━━━━━━━━━━
• Roblox Creator Documentation: create.roblox.com/docs
• Roblox DevForum: devforum.roblox.com
• Roblox Education: education.roblox.com
• API Reference: create.roblox.com/docs/reference

YOUTUBE CHANNELS:
━━━━━━━━━━━━━━━━━
• AlvinBlox — Beginner-friendly Roblox tutorials
• TheDevKing — Comprehensive scripting tutorials
• PeasFactory — Game design and advanced scripts
• GnomeCode — Clean coding practices

COMMUNITY:
━━━━━━━━━━━
• Roblox Developer Discord servers
• Hidden Developers community
• r/robloxgamedev on Reddit

TOOLS:
━━━━━━
• Rojo — Sync external code editors with Studio
• Moon Animator — Advanced animation plugin
• Blender — Free 3D modeling (for custom meshes)
• VS Code — External code editor with Lua extensions`},{type:"heading",level:2,content:"Your Development Roadmap"},{type:"code",language:"text",filename:"roadmap.txt",code:`YOUR NEXT 30 DAYS:
━━━━━━━━━━━━━━━━━━

Week 1: Polish Your First Game
  □ Fix all bugs from testing
  □ Add sound effects to every interaction
  □ Create a professional game icon
  □ Publish and get 5 friends to play

Week 2: Build a New Game
  □ Pick a genre (obby, tycoon, simulator)
  □ Plan 5 core features on paper
  □ Build the basic gameplay loop
  □ Test with at least 3 people

Week 3: Learn Advanced Topics
  □ Study TweenService for smooth animations
  □ Learn ModuleScripts for code organization
  □ Try NPC pathfinding (PathfindingService)
  □ Experiment with Terrain tools

Week 4: Launch & Grow
  □ Add monetization (game passes)
  □ Create a Roblox Group
  □ Post gameplay clips on social media
  □ Plan your next update based on feedback`},{type:"text",content:`You started this course knowing nothing about game development. Now you can create real, playable, multiplayer games that millions of people could enjoy. That's an incredible skill to have at any age.

**Remember:** Every professional Roblox developer started exactly where you are now. The difference between those who succeed and those who don't isn't talent — it's persistence. Keep building, keep learning from mistakes, keep shipping games. Your first game won't be perfect, and that's okay. Your tenth game will be amazing.

The Roblox community is waiting for your next creation. You have the skills, the tools, and the platform. Now go make something incredible! 🚀🎮✨

**Real-World Career Paths from Roblox Development:**
The skills you've learned here open real career doors. Lua programming transfers to game development. UI design transfers to web and app development. Client-server architecture transfers to backend engineering. Data persistence transfers to database management. Many professional developers started exactly where you are now — building games for fun that turned into real skills and real careers.

Whether you become a full-time game developer, use these skills as a side hustle earning Robux, or simply enjoy the creative outlet of building games — you've gained something valuable that can never be taken away: the ability to create.

**One final challenge:** Before you close this course, open Roblox Studio and start building something new. Right now. Don't plan it, don't overthink it — just create. The best developers are the ones who never stop building.

Thank you for completing this course. Now go make games! 🎮🚀`}]}}]}]};function lm({course:E,currentLesson:W,completedLessons:G,expandedChapters:h,onLessonSelect:M,onChapterToggle:L,progress:Y,isOpen:j}){const[x,w]=dn.useState(""),Q=z=>({completed:z.lessons.filter(F=>G.includes(F.id)).length,total:z.lessons.length}),k=x?E.chapters.map(z=>({...z,lessons:z.lessons.filter(X=>X.title.toLowerCase().includes(x.toLowerCase()))})).filter(z=>z.lessons.length>0):E.chapters;return f.jsxs("aside",{className:`sidebar ${j?"open":""}`,children:[f.jsxs("div",{className:"sidebar-header",children:[f.jsxs("div",{className:"course-logo",children:[f.jsx("span",{className:"logo-icon",children:"🎮"}),f.jsxs("div",{children:[f.jsx("h1",{className:"course-title",children:E.title}),f.jsx("p",{className:"course-subtitle",children:E.description})]})]}),f.jsxs("div",{className:"progress-section",children:[f.jsxs("div",{className:"progress-header",children:[f.jsx("span",{children:"Progress"}),f.jsxs("span",{className:"progress-percent",children:[Y,"%"]})]}),f.jsx("div",{className:"progress-bar",children:f.jsx("div",{className:"progress-fill",style:{width:`${Y}%`}})})]}),f.jsxs("div",{className:"search-box",children:[f.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[f.jsx("circle",{cx:"11",cy:"11",r:"8"}),f.jsx("path",{d:"m21 21-4.35-4.35"})]}),f.jsx("input",{type:"text",placeholder:"Search lessons...",value:x,onChange:z=>w(z.target.value)})]})]}),f.jsx("nav",{className:"chapter-list",children:k.map(z=>{const X=h.includes(z.id),{completed:F,total:Z}=Q(z),ye=F===Z;return f.jsxs("div",{className:"chapter",children:[f.jsxs("div",{className:`chapter-header ${X?"expanded":""}`,onClick:()=>L(z.id),children:[f.jsxs("div",{className:"chapter-info",children:[f.jsx("span",{className:`chapter-number ${ye?"completed":""}`,children:ye?"✓":z.id}),f.jsxs("div",{className:"chapter-text",children:[f.jsx("span",{className:"chapter-name",children:z.title}),f.jsxs("span",{className:"chapter-meta",children:[F,"/",Z," lessons"]})]})]}),f.jsx("svg",{className:`chevron ${X?"rotated":""}`,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:f.jsx("path",{d:"m6 9 6 6 6-6"})})]}),X&&f.jsx("ul",{className:"lesson-list",children:z.lessons.map(ae=>{const be=W?.id===ae.id,ge=G.includes(ae.id);return f.jsxs("li",{className:`lesson-item ${be?"active":""} ${ge?"completed":""}`,onClick:()=>M(ae),children:[f.jsx("span",{className:"lesson-status",children:ge?f.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:f.jsx("polyline",{points:"20 6 9 17 4 12"})}):f.jsx("span",{className:"status-dot"})}),f.jsx("span",{className:"lesson-name",children:ae.title})]},ae.id)})})]},z.id)})})]})}function im({code:E,language:W,filename:G}){const[h,M]=dn.useState(""),[L,Y]=dn.useState(!1),[j,x]=dn.useState(!1),w=E.split(`
`),Q=()=>{Y(!0),setTimeout(()=>{try{const F=z(E);M(F)}catch(F){M(`Error: ${F.message}`)}Y(!1)},500)},k=()=>{navigator.clipboard.writeText(E),x(!0),setTimeout(()=>x(!1),2e3)},z=F=>{const Z=[],ye=F.split(`
`),ae={};for(const be of ye){if(be.trim().startsWith("#")||!be.trim())continue;const ge=be.match(/print\((.+)\)/);if(ge){let Ce=ge[1].trim();Ce.startsWith('f"')||Ce.startsWith("f'")?(Ce=Ce.slice(2,-1),Ce=Ce.replace(/\{([^}]+)\}/g,(_e,I)=>I.includes("+")?"[calculated]":I.includes(":")?"[formatted]":ae[I]||I),Z.push(Ce)):Ce.startsWith('"')||Ce.startsWith("'")?Z.push(Ce.slice(1,-1)):Z.push(Ce)}const Ve=be.match(/^(\w+)\s*=\s*(.+)$/);if(Ve&&!be.includes("def ")){const[,Ce,_e]=Ve;ae[Ce]=_e.replace(/["']/g,"").trim()}}return Z.length>0?Z.join(`
`):"✨ Code executed successfully!"},X=F=>{let Z=F.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");const ye=["def","return","if","elif","else","for","while","in","not","and","or","True","False","None","import","from","class","try","except","finally","with","as","raise","break","continue","pass","lambda"],ae=["print","len","range","str","int","float","list","dict","set","type","open","sum","min","max","sorted","enumerate","zip","map","filter","isinstance","super"];return Z.replace(/(#.*)$/gm,"§COM§$1§/COM§").replace(/(f?&quot;[^&]*&quot;|f?&#39;[^&]*&#39;|f?"[^"]*"|f?'[^']*')/g,"§STR§$1§/STR§").replace(/\b(\d+\.?\d*)\b/g,"§NUM§$1§/NUM§").replace(new RegExp(`\\b(${ye.join("|")})\\b`,"g"),"§KEY§$1§/KEY§").replace(new RegExp(`\\b(${ae.join("|")})\\b(?=\\()`,"g"),"§BLT§$1§/BLT§").replace(/§COM§/g,'<span class="comment">').replace(/§\/COM§/g,"</span>").replace(/§STR§/g,'<span class="string">').replace(/§\/STR§/g,"</span>").replace(/§NUM§/g,'<span class="number">').replace(/§\/NUM§/g,"</span>").replace(/§KEY§/g,'<span class="keyword">').replace(/§\/KEY§/g,"</span>").replace(/§BLT§/g,'<span class="builtin">').replace(/§\/BLT§/g,"</span>")};return f.jsxs("div",{className:"code-editor",children:[f.jsxs("div",{className:"editor-header",children:[f.jsx("div",{className:"editor-tabs",children:f.jsxs("div",{className:"editor-tab active",children:[f.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:f.jsx("path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"})}),G]})}),f.jsxs("div",{className:"editor-actions",children:[f.jsx("button",{className:"copy-btn",onClick:k,title:"Copy code",children:j?f.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#10b981",strokeWidth:"2",children:f.jsx("polyline",{points:"20 6 9 17 4 12"})}):f.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[f.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),f.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})}),f.jsx("button",{className:"run-btn",onClick:Q,disabled:L,children:L?f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"spinner"}),"Running..."]}):f.jsxs(f.Fragment,{children:[f.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:f.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),"Run"]})})]})]}),f.jsxs("div",{className:"editor-content",children:[f.jsx("div",{className:"line-numbers",children:w.map((F,Z)=>f.jsx("div",{children:Z+1},Z))}),f.jsx("pre",{className:"code-area",dangerouslySetInnerHTML:{__html:X(E)}})]}),h&&f.jsxs("div",{className:"output-area",children:[f.jsxs("div",{className:"output-header",children:[f.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[f.jsx("polyline",{points:"4 17 10 11 4 5"}),f.jsx("line",{x1:"12",y1:"19",x2:"20",y2:"19"})]}),"Output"]}),f.jsx("pre",{className:"output-content",children:h})]})]})}function om({quiz:E}){const[W,G]=dn.useState(null),[h,M]=dn.useState(!1),L=()=>{W&&M(!0)},Y=W===E.correct,j=x=>x.replace(/\n/g,"<br/>");return f.jsxs("div",{className:"quiz-container",children:[f.jsxs("div",{className:"quiz-header",children:[f.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),f.jsx("path",{d:"M12 17h.01"})]}),f.jsx("span",{children:"Quick Quiz"})]}),f.jsx("p",{className:"quiz-question",dangerouslySetInnerHTML:{__html:j(E.question)}}),f.jsx("div",{className:"quiz-options",children:E.options.map(x=>{let w="quiz-option";return h?x.id===E.correct?w+=" correct":x.id===W&&x.id!==E.correct&&(w+=" incorrect"):x.id===W&&(w+=" selected"),f.jsxs("div",{className:w,onClick:()=>!h&&G(x.id),children:[f.jsx("span",{className:"option-marker",children:h&&x.id===E.correct?f.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:f.jsx("polyline",{points:"20 6 9 17 4 12"})}):h&&x.id===W&&x.id!==E.correct?f.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:[f.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),f.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}):x.id.toUpperCase()}),f.jsx("span",{className:"option-text",children:x.text})]},x.id)})}),h?f.jsxs("div",{className:`quiz-result ${Y?"correct":"incorrect"}`,children:[f.jsx("div",{className:"result-header",children:Y?f.jsxs(f.Fragment,{children:[f.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[f.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),f.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),"Correct! 🎉"]}):f.jsxs(f.Fragment,{children:[f.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),f.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),"Not quite!"]})}),f.jsx("p",{className:"result-explanation",children:E.explanation}),f.jsx("button",{className:"quiz-retry",onClick:()=>{G(null),M(!1)},children:"Try Again"})]}):f.jsx("button",{className:"quiz-submit gradient-btn",onClick:L,disabled:!W,children:"Check Answer"})]})}function rm({lesson:E,isCompleted:W,onMarkComplete:G,onNavigate:h,courseTitle:M}){const L=(j,x)=>{switch(j.type){case"text":return f.jsx("div",{className:"lesson-text",dangerouslySetInnerHTML:{__html:Y(j.content)}},x);case"heading":const w=`h${j.level}`;return f.jsx(w,{className:"lesson-heading",children:j.content},x);case"list":return f.jsx("ul",{className:"lesson-list",children:j.items.map((Q,k)=>f.jsx("li",{dangerouslySetInnerHTML:{__html:Y(Q)}},k))},x);case"code":return f.jsx(im,{code:j.code,language:j.language,filename:j.filename},x);case"tip":return f.jsxs("div",{className:"tip-box",children:[f.jsxs("div",{className:"tip-title",children:[f.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("path",{d:"M12 16v-4M12 8h.01"})]}),"Pro Tip"]}),f.jsx("p",{dangerouslySetInnerHTML:{__html:Y(j.content)}})]},x);case"warning":return f.jsxs("div",{className:"warning-box",children:[f.jsxs("div",{className:"warning-title",children:[f.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[f.jsx("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"}),f.jsx("path",{d:"M12 9v4M12 17h.01"})]}),"Important"]}),f.jsx("p",{dangerouslySetInnerHTML:{__html:Y(j.content)}})]},x);case"checkpoint":return f.jsxs("div",{className:"checkpoint",children:[f.jsxs("div",{className:"checkpoint-title",children:[f.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[f.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),f.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),"Checkpoint"]}),f.jsx("p",{dangerouslySetInnerHTML:{__html:Y(j.content)}})]},x);case"quiz":return f.jsx(om,{quiz:j},x);default:return null}},Y=j=>j?j.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\n/g,"<br/>"):"";return f.jsxs("div",{className:"lesson-container animate-in",children:[f.jsxs("nav",{className:"breadcrumb",children:[f.jsx("a",{href:"#",children:"Home"}),f.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:f.jsx("path",{d:"m9 18 6-6-6-6"})}),f.jsx("a",{href:"#",children:"Courses"}),f.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:f.jsx("path",{d:"m9 18 6-6-6-6"})}),f.jsx("span",{children:M})]}),f.jsxs("header",{className:"lesson-header",children:[f.jsx("h1",{className:"lesson-title",children:E.title}),f.jsx("p",{className:"lesson-description",children:E.content.description})]}),f.jsx("article",{className:"lesson-content",children:E.content.sections.map((j,x)=>L(j,x))}),f.jsxs("footer",{className:"lesson-nav",children:[f.jsxs("button",{className:"nav-btn secondary",onClick:()=>h("prev"),children:[f.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:f.jsx("path",{d:"m15 18-6-6 6-6"})}),"Previous"]}),f.jsx("div",{className:"nav-center",children:W?f.jsxs("span",{className:"completed-badge",children:[f.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:f.jsx("polyline",{points:"20 6 9 17 4 12"})}),"Completed"]}):f.jsxs("button",{className:"nav-btn gradient-btn mark-complete-btn",onClick:G,children:[f.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:f.jsx("polyline",{points:"20 6 9 17 4 12"})}),"Mark Complete"]})}),f.jsxs("button",{className:"nav-btn gradient-btn",onClick:()=>h("next"),children:["Next",f.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:f.jsx("path",{d:"m9 18 6-6-6-6"})})]})]})]})}function cm(){const[E,W]=dn.useState(null),[G,h]=dn.useState(()=>{const X=localStorage.getItem("robloxCourseProgress");return X?JSON.parse(X):[]}),[M,L]=dn.useState([1]),[Y,j]=dn.useState(!1);dn.useEffect(()=>{!E&&wt.chapters.length>0&&W(wt.chapters[0].lessons[0])},[]),dn.useEffect(()=>{localStorage.setItem("robloxCourseProgress",JSON.stringify(G))},[G]);const x=X=>{L(F=>F.includes(X)?F.filter(Z=>Z!==X):[...F,X])},w=X=>{G.includes(X)||h(F=>[...F,X])},Q=X=>{const F=wt.chapters.flatMap(ye=>ye.lessons),Z=F.findIndex(ye=>ye.id===E?.id);if(X==="next"&&Z<F.length-1){const ye=F[Z+1];W(ye);const ae=wt.chapters.find(be=>be.lessons.some(ge=>ge.id===ye.id));ae&&!M.includes(ae.id)&&L(be=>[...be,ae.id])}else if(X==="prev"&&Z>0){const ye=F[Z-1];W(ye);const ae=wt.chapters.find(be=>be.lessons.some(ge=>ge.id===ye.id));ae&&!M.includes(ae.id)&&L(be=>[...be,ae.id])}},k=()=>{const X=wt.chapters.reduce((F,Z)=>F+Z.lessons.length,0);return Math.round(G.length/X*100)},z=X=>{W(X),j(!1)};return f.jsxs("div",{className:"app",children:[f.jsx("button",{className:"mobile-menu-btn",onClick:()=>j(!Y),"aria-label":"Toggle menu",children:Y?f.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[f.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),f.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}):f.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[f.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),f.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),f.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}),Y&&f.jsx("div",{className:"sidebar-overlay",onClick:()=>j(!1)}),f.jsx(lm,{course:wt,currentLesson:E,completedLessons:G,expandedChapters:M,onLessonSelect:z,onChapterToggle:x,progress:k(),isOpen:Y}),f.jsx("main",{className:"main-content",children:E&&f.jsx(rm,{lesson:E,isCompleted:G.includes(E.id),onMarkComplete:()=>w(E.id),onNavigate:Q,courseTitle:wt.title})})]})}am.createRoot(document.getElementById("root")).render(f.jsx(dn.StrictMode,{children:f.jsx(cm,{})}));
