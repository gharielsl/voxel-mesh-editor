var og=Object.defineProperty;var c1=(n,e,t)=>e in n?og(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var c=(n,e)=>og(n,"name",{value:e,configurable:!0});var ue=(n,e,t)=>(c1(n,typeof e!="symbol"?e+"":e,t),t);c(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}c(t,"getFetchOpts");function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}c(i,"processPreload")},"polyfill")();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Nd(n,e){const t=new Set(n.split(","));return i=>t.has(i)}c(Nd,"makeMap");const ft={},fr=[],Dn=c(()=>{},"NOOP"),u1=c(()=>!1,"NO"),Il=c(n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),"isOn"),Od=c(n=>n.startsWith("onUpdate:"),"isModelListener"),At=Object.assign,Ud=c((n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},"remove"),h1=Object.prototype.hasOwnProperty,tt=c((n,e)=>h1.call(n,e),"hasOwn"),Be=Array.isArray,pr=c(n=>Ll(n)==="[object Map]","isMap"),Av=c(n=>Ll(n)==="[object Set]","isSet"),We=c(n=>typeof n=="function","isFunction"),wt=c(n=>typeof n=="string","isString"),Gs=c(n=>typeof n=="symbol","isSymbol"),vt=c(n=>n!==null&&typeof n=="object","isObject"),wv=c(n=>(vt(n)||We(n))&&We(n.then)&&We(n.catch),"isPromise"),Cv=Object.prototype.toString,Ll=c(n=>Cv.call(n),"toTypeString"),d1=c(n=>Ll(n).slice(8,-1),"toRawType"),Rv=c(n=>Ll(n)==="[object Object]","isPlainObject"),Fd=c(n=>wt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,"isIntegerKey"),qr=Nd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Nl=c(n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},"cacheStringFunction"),f1=/-(\w)/g,ni=Nl(n=>n.replace(f1,(e,t)=>t?t.toUpperCase():"")),p1=/\B([A-Z])/g,Ws=Nl(n=>n.replace(p1,"-$1").toLowerCase()),Ol=Nl(n=>n.charAt(0).toUpperCase()+n.slice(1)),ic=Nl(n=>n?`on${Ol(n)}`:""),Qi=c((n,e)=>!Object.is(n,e),"hasChanged"),sc=c((n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},"invokeArrayFns"),Pv=c((n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},"def"),m1=c(n=>{const e=parseFloat(n);return isNaN(e)?n:e},"looseToNumber"),g1=c(n=>{const e=wt(n)?Number(n):NaN;return isNaN(e)?n:e},"toNumber");let ag;const Dv=c(()=>ag||(ag=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),"getGlobalThis");function zt(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=wt(i)?M1(i):zt(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(wt(n)||vt(n))return n}c(zt,"normalizeStyle");const _1=/;(?![^(]*\))/g,v1=/:([^]+)/,x1=/\/\*[^]*?\*\//g;function M1(n){const e={};return n.replace(x1,"").split(_1).forEach(t=>{if(t){const i=t.split(v1);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}c(M1,"parseStringStyle");function Gt(n){let e="";if(wt(n))e=n;else if(Be(n))for(let t=0;t<n.length;t++){const i=Gt(n[t]);i&&(e+=i+" ")}else if(vt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}c(Gt,"normalizeClass");const y1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",S1=Nd(y1);function Iv(n){return!!n||n===""}c(Iv,"includeBooleanAttr");const Rn=c(n=>wt(n)?n:n==null?"":Be(n)||vt(n)&&(n.toString===Cv||!We(n.toString))?JSON.stringify(n,Lv,2):String(n),"toDisplayString"),Lv=c((n,e)=>e&&e.__v_isRef?Lv(n,e.value):pr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[rc(i,r)+" =>"]=s,t),{})}:Av(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>rc(t))}:Gs(e)?rc(e):vt(e)&&!Be(e)&&!Rv(e)?String(e):e,"replacer"),rc=c((n,e="")=>{var t;return Gs(n)?`Symbol(${(t=n.description)!=null?t:e})`:n},"stringifySymbol");/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Hn;const Mf=class Mf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Hn,!e&&Hn&&(this.index=(Hn.scopes||(Hn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Hn;try{return Hn=this,e()}finally{Hn=t}}}on(){Hn=this}off(){Hn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}};c(Mf,"EffectScope");let tu=Mf;function b1(n,e=Hn){e&&e.active&&e.effects.push(n)}c(b1,"recordEffectScope");function E1(){return Hn}c(E1,"getCurrentScope");let Ns;const yf=class yf{constructor(e,t,i,s){this.fn=e,this.trigger=t,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,b1(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,us();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(T1(t.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),hs()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Yi,t=Ns;try{return Yi=!0,Ns=this,this._runnings++,lg(this),this.fn()}finally{cg(this),this._runnings--,Ns=t,Yi=e}}stop(){this.active&&(lg(this),cg(this),this.onStop&&this.onStop(),this.active=!1)}};c(yf,"ReactiveEffect");let ho=yf;function T1(n){return n.value}c(T1,"triggerComputed");function lg(n){n._trackId++,n._depsLength=0}c(lg,"preCleanupEffect");function cg(n){if(n.deps.length>n._depsLength){for(let e=n._depsLength;e<n.deps.length;e++)Nv(n.deps[e],n);n.deps.length=n._depsLength}}c(cg,"postCleanupEffect");function Nv(n,e){const t=n.get(e);t!==void 0&&e._trackId!==t&&(n.delete(e),n.size===0&&n.cleanup())}c(Nv,"cleanupDepEffect");let Yi=!0,nu=0;const Ov=[];function us(){Ov.push(Yi),Yi=!1}c(us,"pauseTracking");function hs(){const n=Ov.pop();Yi=n===void 0?!0:n}c(hs,"resetTracking");function Bd(){nu++}c(Bd,"pauseScheduling");function zd(){for(nu--;!nu&&iu.length;)iu.shift()()}c(zd,"resetScheduling");function Uv(n,e,t){if(e.get(n)!==n._trackId){e.set(n,n._trackId);const i=n.deps[n._depsLength];i!==e?(i&&Nv(i,n),n.deps[n._depsLength++]=e):n._depsLength++}}c(Uv,"trackEffect");const iu=[];function Fv(n,e,t){Bd();for(const i of n.keys()){let s;i._dirtyLevel<e&&(s??(s=n.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=e),i._shouldSchedule&&(s??(s=n.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&iu.push(i.scheduler)))}zd()}c(Fv,"triggerEffects");const Bv=c((n,e)=>{const t=new Map;return t.cleanup=n,t.computed=e,t},"createDep"),su=new WeakMap,Os=Symbol(""),ru=Symbol("");function gn(n,e,t){if(Yi&&Ns){let i=su.get(n);i||su.set(n,i=new Map);let s=i.get(t);s||i.set(t,s=Bv(()=>i.delete(t))),Uv(Ns,s)}}c(gn,"track");function xi(n,e,t,i,s,r){const o=su.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Be(n)){const l=Number(i);o.forEach((u,h)=>{(h==="length"||!Gs(h)&&h>=l)&&a.push(u)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Be(n)?Fd(t)&&a.push(o.get("length")):(a.push(o.get(Os)),pr(n)&&a.push(o.get(ru)));break;case"delete":Be(n)||(a.push(o.get(Os)),pr(n)&&a.push(o.get(ru)));break;case"set":pr(n)&&a.push(o.get(Os));break}Bd();for(const l of a)l&&Fv(l,4);zd()}c(xi,"trigger");const A1=Nd("__proto__,__v_isRef,__isVue"),zv=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Gs)),ug=w1();function w1(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=lt(this);for(let r=0,o=this.length;r<o;r++)gn(i,"get",r+"");const s=i[e](...t);return s===-1||s===!1?i[e](...t.map(lt)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){us(),Bd();const i=lt(this)[e].apply(this,t);return zd(),hs(),i}}),n}c(w1,"createArrayInstrumentations");function C1(n){Gs(n)||(n=String(n));const e=lt(this);return gn(e,"has",n),e.hasOwnProperty(n)}c(C1,"hasOwnProperty");const Sf=class Sf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?k1:Hv:r?Vv:kv).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Be(e);if(!s){if(o&&tt(ug,t))return Reflect.get(ug,t,i);if(t==="hasOwnProperty")return C1}const a=Reflect.get(e,t,i);return(Gs(t)?zv.has(t):A1(t))||(s||gn(e,"get",t),r)?a:_n(a)?o&&Fd(t)?a:a.value:vt(a)?s?Gv(a):Fl(a):a}};c(Sf,"BaseReactiveHandler");let Pa=Sf;const bf=class bf extends Pa{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=fo(r);if(!Ia(i)&&!fo(i)&&(r=lt(r),i=lt(i)),!Be(e)&&_n(r)&&!_n(i))return l?!1:(r.value=i,!0)}const o=Be(e)&&Fd(t)?Number(t)<e.length:tt(e,t),a=Reflect.set(e,t,i,s);return e===lt(s)&&(o?Qi(i,r)&&xi(e,"set",t,i):xi(e,"add",t,i)),a}deleteProperty(e,t){const i=tt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&xi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Gs(t)||!zv.has(t))&&gn(e,"has",t),i}ownKeys(e){return gn(e,"iterate",Be(e)?"length":Os),Reflect.ownKeys(e)}};c(bf,"MutableReactiveHandler");let Da=bf;const Ef=class Ef extends Pa{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}};c(Ef,"ReadonlyReactiveHandler");let ou=Ef;const R1=new Da,P1=new ou,D1=new Da(!0);const kd=c(n=>n,"toShallow"),Ul=c(n=>Reflect.getPrototypeOf(n),"getProto");function Uo(n,e,t=!1,i=!1){n=n.__v_raw;const s=lt(n),r=lt(e);t||(Qi(e,r)&&gn(s,"get",e),gn(s,"get",r));const{has:o}=Ul(s),a=i?kd:t?Gd:po;if(o.call(s,e))return a(n.get(e));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(e)}c(Uo,"get");function Fo(n,e=!1){const t=this.__v_raw,i=lt(t),s=lt(n);return e||(Qi(n,s)&&gn(i,"has",n),gn(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}c(Fo,"has");function Bo(n,e=!1){return n=n.__v_raw,!e&&gn(lt(n),"iterate",Os),Reflect.get(n,"size",n)}c(Bo,"size");function hg(n){n=lt(n);const e=lt(this);return Ul(e).has.call(e,n)||(e.add(n),xi(e,"add",n,n)),this}c(hg,"add");function dg(n,e){e=lt(e);const t=lt(this),{has:i,get:s}=Ul(t);let r=i.call(t,n);r||(n=lt(n),r=i.call(t,n));const o=s.call(t,n);return t.set(n,e),r?Qi(e,o)&&xi(t,"set",n,e):xi(t,"add",n,e),this}c(dg,"set");function fg(n){const e=lt(this),{has:t,get:i}=Ul(e);let s=t.call(e,n);s||(n=lt(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&xi(e,"delete",n,void 0),r}c(fg,"deleteEntry");function pg(){const n=lt(this),e=n.size!==0,t=n.clear();return e&&xi(n,"clear",void 0,void 0),t}c(pg,"clear");function zo(n,e){return c(function(i,s){const r=this,o=r.__v_raw,a=lt(o),l=e?kd:n?Gd:po;return!n&&gn(a,"iterate",Os),o.forEach((u,h)=>i.call(s,l(u),l(h),r))},"forEach")}c(zo,"createForEach");function ko(n,e,t){return function(...i){const s=this.__v_raw,r=lt(s),o=pr(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,u=s[n](...i),h=t?kd:e?Gd:po;return!e&&gn(r,"iterate",l?ru:Os),{next(){const{value:d,done:f}=u.next();return f?{value:d,done:f}:{value:a?[h(d[0]),h(d[1])]:h(d),done:f}},[Symbol.iterator](){return this}}}}c(ko,"createIterableMethod");function Ai(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}c(Ai,"createReadonlyMethod");function I1(){const n={get(r){return Uo(this,r)},get size(){return Bo(this)},has:Fo,add:hg,set:dg,delete:fg,clear:pg,forEach:zo(!1,!1)},e={get(r){return Uo(this,r,!1,!0)},get size(){return Bo(this)},has:Fo,add:hg,set:dg,delete:fg,clear:pg,forEach:zo(!1,!0)},t={get(r){return Uo(this,r,!0)},get size(){return Bo(this,!0)},has(r){return Fo.call(this,r,!0)},add:Ai("add"),set:Ai("set"),delete:Ai("delete"),clear:Ai("clear"),forEach:zo(!0,!1)},i={get(r){return Uo(this,r,!0,!0)},get size(){return Bo(this,!0)},has(r){return Fo.call(this,r,!0)},add:Ai("add"),set:Ai("set"),delete:Ai("delete"),clear:Ai("clear"),forEach:zo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=ko(r,!1,!1),t[r]=ko(r,!0,!1),e[r]=ko(r,!1,!0),i[r]=ko(r,!0,!0)}),[n,t,e,i]}c(I1,"createInstrumentations");const[L1,N1,O1,U1]=I1();function Vd(n,e){const t=e?n?U1:O1:n?N1:L1;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(tt(t,s)&&s in i?t:i,s,r)}c(Vd,"createInstrumentationGetter");const F1={get:Vd(!1,!1)},B1={get:Vd(!1,!0)},z1={get:Vd(!0,!1)};const kv=new WeakMap,Vv=new WeakMap,Hv=new WeakMap,k1=new WeakMap;function V1(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}c(V1,"targetTypeMap");function H1(n){return n.__v_skip||!Object.isExtensible(n)?0:V1(d1(n))}c(H1,"getTargetType");function Fl(n){return fo(n)?n:Hd(n,!1,R1,F1,kv)}c(Fl,"reactive");function G1(n){return Hd(n,!1,D1,B1,Vv)}c(G1,"shallowReactive");function Gv(n){return Hd(n,!0,P1,z1,Hv)}c(Gv,"readonly");function Hd(n,e,t,i,s){if(!vt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=H1(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}c(Hd,"createReactiveObject");function Zr(n){return fo(n)?Zr(n.__v_raw):!!(n&&n.__v_isReactive)}c(Zr,"isReactive");function fo(n){return!!(n&&n.__v_isReadonly)}c(fo,"isReadonly");function Ia(n){return!!(n&&n.__v_isShallow)}c(Ia,"isShallow");function Wv(n){return n?!!n.__v_raw:!1}c(Wv,"isProxy");function lt(n){const e=n&&n.__v_raw;return e?lt(e):n}c(lt,"toRaw");function W1(n){return Object.isExtensible(n)&&Pv(n,"__v_skip",!0),n}c(W1,"markRaw");const po=c(n=>vt(n)?Fl(n):n,"toReactive"),Gd=c(n=>vt(n)?Gv(n):n,"toReadonly"),Tf=class Tf{constructor(e,t,i,s){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ho(()=>e(this._value),()=>xa(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=lt(this);return(!e._cacheable||e.effect.dirty)&&Qi(e._value,e._value=e.effect.run())&&xa(e,4),jv(e),e.effect._dirtyLevel>=2&&xa(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}};c(Tf,"ComputedRefImpl");let La=Tf;function j1(n,e,t=!1){let i,s;const r=We(n);return r?(i=n,s=Dn):(i=n.get,s=n.set),new La(i,s,r||!s,t)}c(j1,"computed$1");function jv(n){var e;Yi&&Ns&&(n=lt(n),Uv(Ns,(e=n.dep)!=null?e:n.dep=Bv(()=>n.dep=void 0,n instanceof La?n:void 0)))}c(jv,"trackRefValue");function xa(n,e=4,t){n=lt(n);const i=n.dep;i&&Fv(i,e)}c(xa,"triggerRefValue");function _n(n){return!!(n&&n.__v_isRef===!0)}c(_n,"isRef");function X1(n){return $1(n,!1)}c(X1,"ref");function $1(n,e){return _n(n)?n:new au(n,e)}c($1,"createRef");const Af=class Af{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:lt(e),this._value=t?e:po(e)}get value(){return jv(this),this._value}set value(e){const t=this.__v_isShallow||Ia(e)||fo(e);e=t?e:lt(e),Qi(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:po(e),xa(this,4))}};c(Af,"RefImpl");let au=Af;function Y1(n){return _n(n)?n.value:n}c(Y1,"unref");const K1={get:(n,e,t)=>Y1(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return _n(s)&&!_n(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Xv(n){return Zr(n)?n:new Proxy(n,K1)}c(Xv,"proxyRefs");/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ki(n,e,t,i){try{return i?n(...i):n()}catch(s){Bl(s,e,t)}}c(Ki,"callWithErrorHandling");function Ln(n,e,t,i){if(We(n)){const s=Ki(n,e,t,i);return s&&wv(s)&&s.catch(r=>{Bl(r,e,t)}),s}if(Be(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Ln(n[r],e,t,i));return s}}c(Ln,"callWithAsyncErrorHandling");function Bl(n,e,t,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${t}`;for(;r;){const u=r.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){us(),Ki(l,null,10,[n,o,a]),hs();return}}q1(n,t,s,i)}c(Bl,"handleError");function q1(n,e,t,i=!0){console.error(n)}c(q1,"logError");let mo=!1,lu=!1;const Jt=[];let ei=0;const mr=[];let Fi=null,ws=0;const $v=Promise.resolve();let Wd=null;function Z1(n){const e=Wd||$v;return n?e.then(this?n.bind(this):n):e}c(Z1,"nextTick");function J1(n){let e=ei+1,t=Jt.length;for(;e<t;){const i=e+t>>>1,s=Jt[i],r=go(s);r<n||r===n&&s.pre?e=i+1:t=i}return e}c(J1,"findInsertionIndex");function jd(n){(!Jt.length||!Jt.includes(n,mo&&n.allowRecurse?ei+1:ei))&&(n.id==null?Jt.push(n):Jt.splice(J1(n.id),0,n),Yv())}c(jd,"queueJob");function Yv(){!mo&&!lu&&(lu=!0,Wd=$v.then(qv))}c(Yv,"queueFlush");function Q1(n){const e=Jt.indexOf(n);e>ei&&Jt.splice(e,1)}c(Q1,"invalidateJob");function ex(n){Be(n)?mr.push(...n):(!Fi||!Fi.includes(n,n.allowRecurse?ws+1:ws))&&mr.push(n),Yv()}c(ex,"queuePostFlushCb");function mg(n,e,t=mo?ei+1:0){for(;t<Jt.length;t++){const i=Jt[t];if(i&&i.pre){if(n&&i.id!==n.uid)continue;Jt.splice(t,1),t--,i()}}}c(mg,"flushPreFlushCbs");function Kv(n){if(mr.length){const e=[...new Set(mr)].sort((t,i)=>go(t)-go(i));if(mr.length=0,Fi){Fi.push(...e);return}for(Fi=e,ws=0;ws<Fi.length;ws++)Fi[ws]();Fi=null,ws=0}}c(Kv,"flushPostFlushCbs");const go=c(n=>n.id==null?1/0:n.id,"getId"),tx=c((n,e)=>{const t=go(n)-go(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t},"comparator");function qv(n){lu=!1,mo=!0,Jt.sort(tx);try{for(ei=0;ei<Jt.length;ei++){const e=Jt[ei];e&&e.active!==!1&&Ki(e,null,14)}}finally{ei=0,Jt.length=0,Kv(),mo=!1,Wd=null,(Jt.length||mr.length)&&qv()}}c(qv,"flushJobs");function nx(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ft;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:f}=i[h]||ft;f&&(s=t.map(p=>wt(p)?p.trim():p)),d&&(s=t.map(m1))}let a,l=i[a=ic(e)]||i[a=ic(ni(e))];!l&&r&&(l=i[a=ic(Ws(e))]),l&&Ln(l,n,6,s);const u=i[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Ln(u,n,6,s)}}c(nx,"emit");function Zv(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!We(n)){const l=c(u=>{const h=Zv(u,e,!0);h&&(a=!0,At(o,h))},"extendEmits");!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(vt(n)&&i.set(n,null),null):(Be(r)?r.forEach(l=>o[l]=null):At(o,r),vt(n)&&i.set(n,o),o)}c(Zv,"normalizeEmitsOptions");function zl(n,e){return!n||!Il(e)?!1:(e=e.slice(2).replace(/Once$/,""),tt(n,e[0].toLowerCase()+e.slice(1))||tt(n,Ws(e))||tt(n,e))}c(zl,"isEmitListener");let Dt=null,kl=null;function Na(n){const e=Dt;return Dt=n,kl=n&&n.type.__scopeId||null,e}c(Na,"setCurrentRenderingInstance");function Si(n){kl=n}c(Si,"pushScopeId");function bi(){kl=null}c(bi,"popScopeId");function gr(n,e=Dt,t){if(!e||n._n)return n;const i=c((...s)=>{i._d&&wg(-1);const r=Na(e);let o;try{o=n(...s)}finally{Na(r),i._d&&wg(1)}return o},"renderFnWithContext");return i._n=!0,i._c=!0,i._d=!0,i}c(gr,"withCtx");function oc(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:u,renderCache:h,props:d,data:f,setupState:p,ctx:_,inheritAttrs:M}=n,g=Na(n);let m,A;try{if(t.shapeFlag&4){const w=s||i,O=w;m=Jn(u.call(O,w,h,d,p,f,_)),A=a}else{const w=e;m=Jn(w.length>1?w(d,{attrs:a,slots:o,emit:l}):w(d,null)),A=e.props?a:ix(a)}}catch(w){no.length=0,Bl(w,n,1),m=Ne(bn)}let b=m;if(A&&M!==!1){const w=Object.keys(A),{shapeFlag:O}=b;w.length&&O&7&&(r&&w.some(Od)&&(A=sx(A,r)),b=es(b,A,!1,!0))}return t.dirs&&(b=es(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&(b.transition=t.transition),m=b,Na(g),m}c(oc,"renderComponentRoot");const ix=c(n=>{let e;for(const t in n)(t==="class"||t==="style"||Il(t))&&((e||(e={}))[t]=n[t]);return e},"getFunctionalFallthrough"),sx=c((n,e)=>{const t={};for(const i in n)(!Od(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t},"filterModelListeners");function rx(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?gg(i,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const f=h[d];if(o[f]!==i[f]&&!zl(u,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?gg(i,o,u):!0:!!o;return!1}c(rx,"shouldUpdateComponent");function gg(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!zl(t,r))return!0}return!1}c(gg,"hasPropsChanged");function ox({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}c(ox,"updateHOCHostEl");const ax="components";function Ut(n,e){return cx(ax,n,!0,e)||n}c(Ut,"resolveComponent");const lx=Symbol.for("v-ndc");function cx(n,e,t=!0,i=!1){const s=Dt||Xt;if(s){const r=s.type;{const a=rM(r,!1);if(a&&(a===e||a===ni(e)||a===Ol(ni(e))))return r}const o=_g(s[n]||r[n],e)||_g(s.appContext[n],e);return!o&&i?r:o}}c(cx,"resolveAsset");function _g(n,e){return n&&(n[e]||n[ni(e)]||n[Ol(ni(e))])}c(_g,"resolve");const ux=c(n=>n.__isSuspense,"isSuspense");function hx(n,e){e&&e.pendingBranch?Be(n)?e.effects.push(...n):e.effects.push(n):ex(n)}c(hx,"queueEffectWithSuspense");const dx=Symbol.for("v-scx"),fx=c(()=>Ma(dx),"useSSRContext");function px(n,e){return Xd(n,null,{flush:"post"})}c(px,"watchPostEffect");const Vo={};function ac(n,e,t){return Xd(n,e,t)}c(ac,"watch");function Xd(n,e,{immediate:t,deep:i,flush:s,once:r,onTrack:o,onTrigger:a}=ft){if(e&&r){const P=e;e=c((...C)=>{P(...C),O()},"cb")}const l=Xt,u=c(P=>i===!0?P:Is(P,i===!1?1:void 0),"reactiveGetter");let h,d=!1,f=!1;if(_n(n)?(h=c(()=>n.value,"getter"),d=Ia(n)):Zr(n)?(h=c(()=>u(n),"getter"),d=!0):Be(n)?(f=!0,d=n.some(P=>Zr(P)||Ia(P)),h=c(()=>n.map(P=>{if(_n(P))return P.value;if(Zr(P))return u(P);if(We(P))return Ki(P,l,2)}),"getter")):We(n)?e?h=c(()=>Ki(n,l,2),"getter"):h=c(()=>(p&&p(),Ln(n,l,3,[_])),"getter"):h=Dn,e&&i){const P=h;h=c(()=>Is(P()),"getter")}let p,_=c(P=>{p=b.onStop=()=>{Ki(P,l,4),p=b.onStop=void 0}},"onCleanup"),M;if(Wl)if(_=Dn,e?t&&Ln(e,l,3,[h(),f?[]:void 0,_]):h(),s==="sync"){const P=fx();M=P.__watcherHandles||(P.__watcherHandles=[])}else return Dn;let g=f?new Array(n.length).fill(Vo):Vo;const m=c(()=>{if(!(!b.active||!b.dirty))if(e){const P=b.run();(i||d||(f?P.some((C,L)=>Qi(C,g[L])):Qi(P,g)))&&(p&&p(),Ln(e,l,3,[P,g===Vo?void 0:f&&g[0]===Vo?[]:g,_]),g=P)}else b.run()},"job");m.allowRecurse=!!e;let A;s==="sync"?A=m:s==="post"?A=c(()=>fn(m,l&&l.suspense),"scheduler"):(m.pre=!0,l&&(m.id=l.uid),A=c(()=>jd(m),"scheduler"));const b=new ho(h,Dn,A),w=E1(),O=c(()=>{b.stop(),w&&Ud(w.effects,b)},"unwatch");return e?t?m():g=b.run():s==="post"?fn(b.run.bind(b),l&&l.suspense):b.run(),M&&M.push(O),O}c(Xd,"doWatch");function mx(n,e,t){const i=this.proxy,s=wt(n)?n.includes(".")?Jv(i,n):()=>i[n]:n.bind(i,i);let r;We(e)?r=e:(r=e.handler,t=e);const o=Io(this),a=Xd(s,r.bind(i),t);return o(),a}c(mx,"instanceWatch");function Jv(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}c(Jv,"createPathGetter");function Is(n,e=1/0,t){if(e<=0||!vt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,_n(n))Is(n.value,e,t);else if(Be(n))for(let i=0;i<n.length;i++)Is(n[i],e,t);else if(Av(n)||pr(n))n.forEach(i=>{Is(i,e,t)});else if(Rv(n))for(const i in n)Is(n[i],e,t);return n}c(Is,"traverse");function Ir(n,e){if(Dt===null)return n;const t=jl(Dt)||Dt.proxy,i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=ft]=e[s];r&&(We(r)&&(r={mounted:r,updated:r}),r.deep&&Is(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}c(Ir,"withDirectives");function ms(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(us(),Ln(l,t,8,[n.el,a,n,e]),hs())}}c(ms,"invokeDirectiveHook");const Bi=Symbol("_leaveCb"),Ho=Symbol("_enterCb");function gx(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return $d(()=>{n.isMounted=!0}),i0(()=>{n.isUnmounting=!0}),n}c(gx,"useTransitionState");const An=[Function,Array],Qv={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:An,onEnter:An,onAfterEnter:An,onEnterCancelled:An,onBeforeLeave:An,onLeave:An,onAfterLeave:An,onLeaveCancelled:An,onBeforeAppear:An,onAppear:An,onAfterAppear:An,onAppearCancelled:An},_x={name:"BaseTransition",props:Qv,setup(n,{slots:e}){const t=Jd(),i=gx();return()=>{const s=e.default&&t0(e.default(),!0);if(!s||!s.length)return;let r=s[0];if(s.length>1){for(const f of s)if(f.type!==bn){r=f;break}}const o=lt(n),{mode:a}=o;if(i.isLeaving)return lc(r);const l=vg(r);if(!l)return lc(r);const u=cu(l,o,i,t);uu(l,u);const h=t.subTree,d=h&&vg(h);if(d&&d.type!==bn&&!Cs(l,d)){const f=cu(d,o,i,t);if(uu(d,f),a==="out-in"&&l.type!==bn)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.update.active!==!1&&(t.effect.dirty=!0,t.update())},lc(r);a==="in-out"&&l.type!==bn&&(f.delayLeave=(p,_,M)=>{const g=e0(i,d);g[String(d.key)]=d,p[Bi]=()=>{_(),p[Bi]=void 0,delete u.delayedLeave},u.delayedLeave=M})}return r}}},vx=_x;function e0(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}c(e0,"getLeavingNodesForType");function cu(n,e,t,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:d,onLeave:f,onAfterLeave:p,onLeaveCancelled:_,onBeforeAppear:M,onAppear:g,onAfterAppear:m,onAppearCancelled:A}=e,b=String(n.key),w=e0(t,n),O=c((L,ie)=>{L&&Ln(L,i,9,ie)},"callHook2"),P=c((L,ie)=>{const y=ie[1];O(L,ie),Be(L)?L.every(T=>T.length<=1)&&y():L.length<=1&&y()},"callAsyncHook"),C={mode:r,persisted:o,beforeEnter(L){let ie=a;if(!t.isMounted)if(s)ie=M||a;else return;L[Bi]&&L[Bi](!0);const y=w[b];y&&Cs(n,y)&&y.el[Bi]&&y.el[Bi](),O(ie,[L])},enter(L){let ie=l,y=u,T=h;if(!t.isMounted)if(s)ie=g||l,y=m||u,T=A||h;else return;let B=!1;const H=L[Ho]=ee=>{B||(B=!0,ee?O(T,[L]):O(y,[L]),C.delayedLeave&&C.delayedLeave(),L[Ho]=void 0)};ie?P(ie,[L,H]):H()},leave(L,ie){const y=String(n.key);if(L[Ho]&&L[Ho](!0),t.isUnmounting)return ie();O(d,[L]);let T=!1;const B=L[Bi]=H=>{T||(T=!0,ie(),H?O(_,[L]):O(p,[L]),L[Bi]=void 0,w[y]===n&&delete w[y])};w[y]=n,f?P(f,[L,B]):B()},clone(L){return cu(L,e,t,i)}};return C}c(cu,"resolveTransitionHooks");function lc(n){if(Vl(n))return n=es(n),n.children=null,n}c(lc,"emptyPlaceholder");function vg(n){if(!Vl(n))return n;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&We(t.default))return t.default()}}c(vg,"getKeepAliveChild");function uu(n,e){n.shapeFlag&6&&n.component?uu(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}c(uu,"setTransitionHooks");function t0(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===Bt?(o.patchFlag&128&&s++,i=i.concat(t0(o.children,e,a))):(e||o.type!==bn)&&i.push(a!=null?es(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}c(t0,"getTransitionRawChildren");/*! #__NO_SIDE_EFFECTS__ */function tn(n,e){return We(n)?At({name:n.name},e,{setup:n}):n}c(tn,"defineComponent");const Jr=c(n=>!!n.type.__asyncLoader,"isAsyncWrapper"),Vl=c(n=>n.type.__isKeepAlive,"isKeepAlive");function xx(n,e){n0(n,"a",e)}c(xx,"onActivated");function Mx(n,e){n0(n,"da",e)}c(Mx,"onDeactivated");function n0(n,e,t=Xt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Hl(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Vl(s.parent.vnode)&&yx(i,e,t,s),s=s.parent}}c(n0,"registerKeepAliveHook");function yx(n,e,t,i){const s=Hl(e,n,i,!0);Yd(()=>{Ud(i[e],s)},t)}c(yx,"injectToKeepAliveRoot");function Hl(n,e,t=Xt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;us();const a=Io(t),l=Ln(e,t,n,o);return a(),hs(),l});return i?s.unshift(r):s.push(r),r}}c(Hl,"injectHook");const Ei=c(n=>(e,t=Xt)=>(!Wl||n==="sp")&&Hl(n,(...i)=>e(...i),t),"createHook"),Sx=Ei("bm"),$d=Ei("m"),bx=Ei("bu"),Ex=Ei("u"),i0=Ei("bum"),Yd=Ei("um"),Tx=Ei("sp"),Ax=Ei("rtg"),wx=Ei("rtc");function Cx(n,e=Xt){Hl("ec",n,e)}c(Cx,"onErrorCaptured");function hu(n,e,t,i){let s;const r=t;if(Be(n)||wt(n)){s=new Array(n.length);for(let o=0,a=n.length;o<a;o++)s[o]=e(n[o],o,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r)}else if(vt(n))if(n[Symbol.iterator])s=Array.from(n,(o,a)=>e(o,a,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const u=o[a];s[a]=e(n[u],u,a,r)}}else s=[];return s}c(hu,"renderList");function Zt(n,e,t={},i,s){if(Dt.isCE||Dt.parent&&Jr(Dt.parent)&&Dt.parent.isCE)return e!=="default"&&(t.name=e),Ne("slot",t,i&&i());let r=n[e];r&&r._c&&(r._d=!1),He();const o=r&&s0(r(t)),a=an(Bt,{key:t.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&n._===1?64:-2);return a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}c(Zt,"renderSlot");function s0(n){return n.some(e=>Ua(e)?!(e.type===bn||e.type===Bt&&!s0(e.children)):!0)?n:null}c(s0,"ensureValidVNode");const du=c(n=>n?M0(n)?jl(n)||n.proxy:du(n.parent):null,"getPublicInstance"),Qr=At(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>du(n.parent),$root:n=>du(n.root),$emit:n=>n.emit,$options:n=>Kd(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,jd(n.update)}),$nextTick:n=>n.n||(n.n=Z1.bind(n.proxy)),$watch:n=>mx.bind(n)}),cc=c((n,e)=>n!==ft&&!n.__isScriptSetup&&tt(n,e),"hasSetupBinding"),Rx={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let u;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(cc(i,e))return o[e]=1,i[e];if(s!==ft&&tt(s,e))return o[e]=2,s[e];if((u=n.propsOptions[0])&&tt(u,e))return o[e]=3,r[e];if(t!==ft&&tt(t,e))return o[e]=4,t[e];fu&&(o[e]=0)}}const h=Qr[e];let d,f;if(h)return e==="$attrs"&&gn(n.attrs,"get",""),h(n);if((d=a.__cssModules)&&(d=d[e]))return d;if(t!==ft&&tt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,tt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return cc(s,e)?(s[e]=t,!0):i!==ft&&tt(i,e)?(i[e]=t,!0):tt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==ft&&tt(n,o)||cc(e,o)||(a=r[0])&&tt(a,o)||tt(i,o)||tt(Qr,o)||tt(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:tt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function xg(n){return Be(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}c(xg,"normalizePropsOrEmits");let fu=!0;function Px(n){const e=Kd(n),t=n.proxy,i=n.ctx;fu=!1,e.beforeCreate&&Mg(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:u,created:h,beforeMount:d,mounted:f,beforeUpdate:p,updated:_,activated:M,deactivated:g,beforeDestroy:m,beforeUnmount:A,destroyed:b,unmounted:w,render:O,renderTracked:P,renderTriggered:C,errorCaptured:L,serverPrefetch:ie,expose:y,inheritAttrs:T,components:B,directives:H,filters:ee}=e;if(u&&Dx(u,i,null),o)for(const Q in o){const G=o[Q];We(G)&&(i[Q]=G.bind(t))}if(s){const Q=s.call(t,t);vt(Q)&&(n.data=Fl(Q))}if(fu=!0,r)for(const Q in r){const G=r[Q],ge=We(G)?G.bind(t,t):We(G.get)?G.get.bind(t,t):Dn,xe=!We(G)&&We(G.set)?G.set.bind(t):Dn,Ae=aM({get:ge,set:xe});Object.defineProperty(i,Q,{enumerable:!0,configurable:!0,get:()=>Ae.value,set:je=>Ae.value=je})}if(a)for(const Q in a)r0(a[Q],i,t,Q);if(l){const Q=We(l)?l.call(t):l;Reflect.ownKeys(Q).forEach(G=>{Fx(G,Q[G])})}h&&Mg(h,n,"c");function Y(Q,G){Be(G)?G.forEach(ge=>Q(ge.bind(t))):G&&Q(G.bind(t))}if(c(Y,"registerLifecycleHook"),Y(Sx,d),Y($d,f),Y(bx,p),Y(Ex,_),Y(xx,M),Y(Mx,g),Y(Cx,L),Y(wx,P),Y(Ax,C),Y(i0,A),Y(Yd,w),Y(Tx,ie),Be(y))if(y.length){const Q=n.exposed||(n.exposed={});y.forEach(G=>{Object.defineProperty(Q,G,{get:()=>t[G],set:ge=>t[G]=ge})})}else n.exposed||(n.exposed={});O&&n.render===Dn&&(n.render=O),T!=null&&(n.inheritAttrs=T),B&&(n.components=B),H&&(n.directives=H)}c(Px,"applyOptions");function Dx(n,e,t=Dn){Be(n)&&(n=pu(n));for(const i in n){const s=n[i];let r;vt(s)?"default"in s?r=Ma(s.from||i,s.default,!0):r=Ma(s.from||i):r=Ma(s),_n(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}c(Dx,"resolveInjections");function Mg(n,e,t){Ln(Be(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}c(Mg,"callHook$1");function r0(n,e,t,i){const s=i.includes(".")?Jv(t,i):()=>t[i];if(wt(n)){const r=e[n];We(r)&&ac(s,r)}else if(We(n))ac(s,n.bind(t));else if(vt(n))if(Be(n))n.forEach(r=>r0(r,e,t,i));else{const r=We(n.handler)?n.handler.bind(t):e[n.handler];We(r)&&ac(s,r,n)}}c(r0,"createWatcher");function Kd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(u=>Oa(l,u,o,!0)),Oa(l,e,o)),vt(e)&&r.set(e,l),l}c(Kd,"resolveMergedOptions");function Oa(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Oa(n,r,t,!0),s&&s.forEach(o=>Oa(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Ix[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}c(Oa,"mergeOptions");const Ix={data:yg,props:Sg,emits:Sg,methods:Xr,computed:Xr,beforeCreate:rn,created:rn,beforeMount:rn,mounted:rn,beforeUpdate:rn,updated:rn,beforeDestroy:rn,beforeUnmount:rn,destroyed:rn,unmounted:rn,activated:rn,deactivated:rn,errorCaptured:rn,serverPrefetch:rn,components:Xr,directives:Xr,watch:Nx,provide:yg,inject:Lx};function yg(n,e){return e?n?c(function(){return At(We(n)?n.call(this,this):n,We(e)?e.call(this,this):e)},"mergedDataFn"):e:n}c(yg,"mergeDataFn");function Lx(n,e){return Xr(pu(n),pu(e))}c(Lx,"mergeInject");function pu(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}c(pu,"normalizeInject");function rn(n,e){return n?[...new Set([].concat(n,e))]:e}c(rn,"mergeAsArray");function Xr(n,e){return n?At(Object.create(null),n,e):e}c(Xr,"mergeObjectOptions");function Sg(n,e){return n?Be(n)&&Be(e)?[...new Set([...n,...e])]:At(Object.create(null),xg(n),xg(e??{})):e}c(Sg,"mergeEmitsOrPropsOptions");function Nx(n,e){if(!n)return e;if(!e)return n;const t=At(Object.create(null),n);for(const i in e)t[i]=rn(n[i],e[i]);return t}c(Nx,"mergeWatchOptions");function o0(){return{app:null,config:{isNativeTag:u1,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}c(o0,"createAppContext");let Ox=0;function Ux(n,e){return c(function(i,s=null){We(i)||(i=At({},i)),s!=null&&!vt(s)&&(s=null);const r=o0(),o=new WeakSet;let a=!1;const l=r.app={_uid:Ox++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:lM,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&We(u.install)?(o.add(u),u.install(l,...h)):We(u)&&(o.add(u),u(l,...h))),l},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),l},component(u,h){return h?(r.components[u]=h,l):r.components[u]},directive(u,h){return h?(r.directives[u]=h,l):r.directives[u]},mount(u,h,d){if(!a){const f=Ne(i,s);return f.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),h&&e?e(f,u):n(f,u,d),a=!0,l._container=u,u.__vue_app__=l,jl(f.component)||f.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(u,h){return r.provides[u]=h,l},runWithContext(u){const h=eo;eo=l;try{return u()}finally{eo=h}}};return l},"createApp")}c(Ux,"createAppAPI");let eo=null;function Fx(n,e){if(Xt){let t=Xt.provides;const i=Xt.parent&&Xt.parent.provides;i===t&&(t=Xt.provides=Object.create(i)),t[n]=e}}c(Fx,"provide");function Ma(n,e,t=!1){const i=Xt||Dt;if(i||eo){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:eo._context.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&We(e)?e.call(i&&i.proxy):e}}c(Ma,"inject");const a0={},l0=c(()=>Object.create(a0),"createInternalObject"),c0=c(n=>Object.getPrototypeOf(n)===a0,"isInternalObject");function Bx(n,e,t,i=!1){const s={},r=l0();n.propsDefaults=Object.create(null),u0(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:G1(s):n.type.props?n.props=s:n.props=r,n.attrs=r}c(Bx,"initProps");function zx(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=lt(s),[l]=n.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let d=0;d<h.length;d++){let f=h[d];if(zl(n.emitsOptions,f))continue;const p=e[f];if(l)if(tt(r,f))p!==r[f]&&(r[f]=p,u=!0);else{const _=ni(f);s[_]=mu(l,a,_,p,n,!1)}else p!==r[f]&&(r[f]=p,u=!0)}}}else{u0(n,e,s,r)&&(u=!0);let h;for(const d in a)(!e||!tt(e,d)&&((h=Ws(d))===d||!tt(e,h)))&&(l?t&&(t[d]!==void 0||t[h]!==void 0)&&(s[d]=mu(l,a,d,void 0,n,!0)):delete s[d]);if(r!==a)for(const d in r)(!e||!tt(e,d))&&(delete r[d],u=!0)}u&&xi(n.attrs,"set","")}c(zx,"updateProps");function u0(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(qr(l))continue;const u=e[l];let h;s&&tt(s,h=ni(l))?!r||!r.includes(h)?t[h]=u:(a||(a={}))[h]=u:zl(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(r){const l=lt(t),u=a||ft;for(let h=0;h<r.length;h++){const d=r[h];t[d]=mu(s,l,d,u[d],n,!tt(u,d))}}return o}c(u0,"setFullProps");function mu(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=tt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&We(l)){const{propsDefaults:u}=s;if(t in u)i=u[t];else{const h=Io(s);i=u[t]=l.call(null,e),h()}}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ws(t))&&(i=!0))}return i}c(mu,"resolvePropValue");function h0(n,e,t=!1){const i=e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!We(n)){const h=c(d=>{l=!0;const[f,p]=h0(d,e,!0);At(o,f),p&&a.push(...p)},"extendProps");!t&&e.mixins.length&&e.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!r&&!l)return vt(n)&&i.set(n,fr),fr;if(Be(r))for(let h=0;h<r.length;h++){const d=ni(r[h]);bg(d)&&(o[d]=ft)}else if(r)for(const h in r){const d=ni(h);if(bg(d)){const f=r[h],p=o[d]=Be(f)||We(f)?{type:f}:At({},f);if(p){const _=Ag(Boolean,p.type),M=Ag(String,p.type);p[0]=_>-1,p[1]=M<0||_<M,(_>-1||tt(p,"default"))&&a.push(d)}}}const u=[o,a];return vt(n)&&i.set(n,u),u}c(h0,"normalizePropsOptions");function bg(n){return n[0]!=="$"&&!qr(n)}c(bg,"validatePropName");function Eg(n){return n===null?"null":typeof n=="function"?n.name||"":typeof n=="object"&&n.constructor&&n.constructor.name||""}c(Eg,"getType");function Tg(n,e){return Eg(n)===Eg(e)}c(Tg,"isSameType");function Ag(n,e){return Be(e)?e.findIndex(t=>Tg(t,n)):We(e)&&Tg(e,n)?0:-1}c(Ag,"getTypeIndex");const d0=c(n=>n[0]==="_"||n==="$stable","isInternalKey"),qd=c(n=>Be(n)?n.map(Jn):[Jn(n)],"normalizeSlotValue"),kx=c((n,e,t)=>{if(e._n)return e;const i=gr((...s)=>qd(e(...s)),t);return i._c=!1,i},"normalizeSlot"),f0=c((n,e,t)=>{const i=n._ctx;for(const s in n){if(d0(s))continue;const r=n[s];if(We(r))e[s]=kx(s,r,i);else if(r!=null){const o=qd(r);e[s]=()=>o}}},"normalizeObjectSlots"),p0=c((n,e)=>{const t=qd(e);n.slots.default=()=>t},"normalizeVNodeSlots"),Vx=c((n,e)=>{const t=n.slots=l0();if(n.vnode.shapeFlag&32){const i=e._;i?(At(t,e),Pv(t,"_",i,!0)):f0(e,t)}else e&&p0(n,e)},"initSlots"),Hx=c((n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=ft;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(At(s,e),!t&&a===1&&delete s._):(r=!e.$stable,f0(e,s)),o=e}else e&&(p0(n,e),o={default:1});if(r)for(const a in s)!d0(a)&&o[a]==null&&delete s[a]},"updateSlots");function gu(n,e,t,i,s=!1){if(Be(n)){n.forEach((f,p)=>gu(f,e&&(Be(e)?e[p]:e),t,i,s));return}if(Jr(i)&&!s)return;const r=i.shapeFlag&4?jl(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=n,u=e&&e.r,h=a.refs===ft?a.refs={}:a.refs,d=a.setupState;if(u!=null&&u!==l&&(wt(u)?(h[u]=null,tt(d,u)&&(d[u]=null)):_n(u)&&(u.value=null)),We(l))Ki(l,a,12,[o,h]);else{const f=wt(l),p=_n(l);if(f||p){const _=c(()=>{if(n.f){const M=f?tt(d,l)?d[l]:h[l]:l.value;s?Be(M)&&Ud(M,r):Be(M)?M.includes(r)||M.push(r):f?(h[l]=[r],tt(d,l)&&(d[l]=h[l])):(l.value=[r],n.k&&(h[n.k]=l.value))}else f?(h[l]=o,tt(d,l)&&(d[l]=o)):p&&(l.value=o,n.k&&(h[n.k]=o))},"doSet");o?(_.id=-1,fn(_,t)):_()}}}c(gu,"setRef");const fn=hx;function Gx(n){return Wx(n)}c(Gx,"createRenderer");function Wx(n,e){const t=Dv();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:u,setElementText:h,parentNode:d,nextSibling:f,setScopeId:p=Dn,insertStaticContent:_}=n,M=c((x,I,V,q=null,W=null,se=null,te=void 0,S=null,v=!!I.dynamicChildren)=>{if(x===I)return;x&&!Cs(x,I)&&(q=Me(x),je(x,W,se,!0),x=null),I.patchFlag===-2&&(v=!1,I.dynamicChildren=null);const{type:R,ref:U,shapeFlag:j}=I;switch(R){case Gl:g(x,I,V,q);break;case bn:m(x,I,V,q);break;case to:x==null&&A(I,V,q,te);break;case Bt:B(x,I,V,q,W,se,te,S,v);break;default:j&1?O(x,I,V,q,W,se,te,S,v):j&6?H(x,I,V,q,W,se,te,S,v):(j&64||j&128)&&R.process(x,I,V,q,W,se,te,S,v,Ye)}U!=null&&W&&gu(U,x&&x.ref,se,I||x,!I)},"patch"),g=c((x,I,V,q)=>{if(x==null)i(I.el=a(I.children),V,q);else{const W=I.el=x.el;I.children!==x.children&&u(W,I.children)}},"processText"),m=c((x,I,V,q)=>{x==null?i(I.el=l(I.children||""),V,q):I.el=x.el},"processCommentNode"),A=c((x,I,V,q)=>{[x.el,x.anchor]=_(x.children,I,V,q,x.el,x.anchor)},"mountStaticNode"),b=c(({el:x,anchor:I},V,q)=>{let W;for(;x&&x!==I;)W=f(x),i(x,V,q),x=W;i(I,V,q)},"moveStaticNode"),w=c(({el:x,anchor:I})=>{let V;for(;x&&x!==I;)V=f(x),s(x),x=V;s(I)},"removeStaticNode"),O=c((x,I,V,q,W,se,te,S,v)=>{I.type==="svg"?te="svg":I.type==="math"&&(te="mathml"),x==null?P(I,V,q,W,se,te,S,v):ie(x,I,W,se,te,S,v)},"processElement"),P=c((x,I,V,q,W,se,te,S)=>{let v,R;const{props:U,shapeFlag:j,transition:k,dirs:ce}=x;if(v=x.el=o(x.type,se,U&&U.is,U),j&8?h(v,x.children):j&16&&L(x.children,v,null,q,W,uc(x,se),te,S),ce&&ms(x,null,q,"created"),C(v,x,x.scopeId,te,q),U){for(const he in U)he!=="value"&&!qr(he)&&r(v,he,null,U[he],se,x.children,q,W,_e);"value"in U&&r(v,"value",null,U.value,se),(R=U.onVnodeBeforeMount)&&qn(R,q,x)}ce&&ms(x,null,q,"beforeMount");const re=jx(W,k);re&&k.beforeEnter(v),i(v,I,V),((R=U&&U.onVnodeMounted)||re||ce)&&fn(()=>{R&&qn(R,q,x),re&&k.enter(v),ce&&ms(x,null,q,"mounted")},W)},"mountElement"),C=c((x,I,V,q,W)=>{if(V&&p(x,V),q)for(let se=0;se<q.length;se++)p(x,q[se]);if(W){let se=W.subTree;if(I===se){const te=W.vnode;C(x,te,te.scopeId,te.slotScopeIds,W.parent)}}},"setScopeId"),L=c((x,I,V,q,W,se,te,S,v=0)=>{for(let R=v;R<x.length;R++){const U=x[R]=S?zi(x[R]):Jn(x[R]);M(null,U,I,V,q,W,se,te,S)}},"mountChildren"),ie=c((x,I,V,q,W,se,te)=>{const S=I.el=x.el;let{patchFlag:v,dynamicChildren:R,dirs:U}=I;v|=x.patchFlag&16;const j=x.props||ft,k=I.props||ft;let ce;if(V&&gs(V,!1),(ce=k.onVnodeBeforeUpdate)&&qn(ce,V,I,x),U&&ms(I,x,V,"beforeUpdate"),V&&gs(V,!0),R?y(x.dynamicChildren,R,S,V,q,uc(I,W),se):te||G(x,I,S,null,V,q,uc(I,W),se,!1),v>0){if(v&16)T(S,I,j,k,V,q,W);else if(v&2&&j.class!==k.class&&r(S,"class",null,k.class,W),v&4&&r(S,"style",j.style,k.style,W),v&8){const re=I.dynamicProps;for(let he=0;he<re.length;he++){const Pe=re[he],oe=j[Pe],pe=k[Pe];(pe!==oe||Pe==="value")&&r(S,Pe,oe,pe,W,x.children,V,q,_e)}}v&1&&x.children!==I.children&&h(S,I.children)}else!te&&R==null&&T(S,I,j,k,V,q,W);((ce=k.onVnodeUpdated)||U)&&fn(()=>{ce&&qn(ce,V,I,x),U&&ms(I,x,V,"updated")},q)},"patchElement"),y=c((x,I,V,q,W,se,te)=>{for(let S=0;S<I.length;S++){const v=x[S],R=I[S],U=v.el&&(v.type===Bt||!Cs(v,R)||v.shapeFlag&70)?d(v.el):V;M(v,R,U,null,q,W,se,te,!0)}},"patchBlockChildren"),T=c((x,I,V,q,W,se,te)=>{if(V!==q){if(V!==ft)for(const S in V)!qr(S)&&!(S in q)&&r(x,S,V[S],null,te,I.children,W,se,_e);for(const S in q){if(qr(S))continue;const v=q[S],R=V[S];v!==R&&S!=="value"&&r(x,S,R,v,te,I.children,W,se,_e)}"value"in q&&r(x,"value",V.value,q.value,te)}},"patchProps"),B=c((x,I,V,q,W,se,te,S,v)=>{const R=I.el=x?x.el:a(""),U=I.anchor=x?x.anchor:a("");let{patchFlag:j,dynamicChildren:k,slotScopeIds:ce}=I;ce&&(S=S?S.concat(ce):ce),x==null?(i(R,V,q),i(U,V,q),L(I.children||[],V,U,W,se,te,S,v)):j>0&&j&64&&k&&x.dynamicChildren?(y(x.dynamicChildren,k,V,W,se,te,S),(I.key!=null||W&&I===W.subTree)&&m0(x,I,!0)):G(x,I,V,U,W,se,te,S,v)},"processFragment"),H=c((x,I,V,q,W,se,te,S,v)=>{I.slotScopeIds=S,x==null?I.shapeFlag&512?W.ctx.activate(I,V,q,te,v):ee(I,V,q,W,se,te,v):le(x,I,v)},"processComponent"),ee=c((x,I,V,q,W,se,te)=>{const S=x.component=eM(x,q,W);if(Vl(x)&&(S.ctx.renderer=Ye),tM(S),S.asyncDep){if(W&&W.registerDep(S,Y),!x.el){const v=S.subTree=Ne(bn);m(null,v,I,V)}}else Y(S,x,I,V,W,se,te)},"mountComponent"),le=c((x,I,V)=>{const q=I.component=x.component;if(rx(x,I,V))if(q.asyncDep&&!q.asyncResolved){Q(q,I,V);return}else q.next=I,Q1(q.update),q.effect.dirty=!0,q.update();else I.el=x.el,q.vnode=I},"updateComponent"),Y=c((x,I,V,q,W,se,te)=>{const S=c(()=>{if(x.isMounted){let{next:U,bu:j,u:k,parent:ce,vnode:re}=x;{const Oe=g0(x);if(Oe){U&&(U.el=re.el,Q(x,U,te)),Oe.asyncDep.then(()=>{x.isUnmounted||S()});return}}let he=U,Pe;gs(x,!1),U?(U.el=re.el,Q(x,U,te)):U=re,j&&sc(j),(Pe=U.props&&U.props.onVnodeBeforeUpdate)&&qn(Pe,ce,U,re),gs(x,!0);const oe=oc(x),pe=x.subTree;x.subTree=oe,M(pe,oe,d(pe.el),Me(pe),x,W,se),U.el=oe.el,he===null&&ox(x,oe.el),k&&fn(k,W),(Pe=U.props&&U.props.onVnodeUpdated)&&fn(()=>qn(Pe,ce,U,re),W)}else{let U;const{el:j,props:k}=I,{bm:ce,m:re,parent:he}=x,Pe=Jr(I);if(gs(x,!1),ce&&sc(ce),!Pe&&(U=k&&k.onVnodeBeforeMount)&&qn(U,he,I),gs(x,!0),j&&Je){const oe=c(()=>{x.subTree=oc(x),Je(j,x.subTree,x,W,null)},"hydrateSubTree");Pe?I.type.__asyncLoader().then(()=>!x.isUnmounted&&oe()):oe()}else{const oe=x.subTree=oc(x);M(null,oe,V,q,x,W,se),I.el=oe.el}if(re&&fn(re,W),!Pe&&(U=k&&k.onVnodeMounted)){const oe=I;fn(()=>qn(U,he,oe),W)}(I.shapeFlag&256||he&&Jr(he.vnode)&&he.vnode.shapeFlag&256)&&x.a&&fn(x.a,W),x.isMounted=!0,I=V=q=null}},"componentUpdateFn"),v=x.effect=new ho(S,Dn,()=>jd(R),x.scope),R=x.update=()=>{v.dirty&&v.run()};R.id=x.uid,gs(x,!0),R()},"setupRenderEffect"),Q=c((x,I,V)=>{I.component=x;const q=x.vnode.props;x.vnode=I,x.next=null,zx(x,I.props,q,V),Hx(x,I.children,V),us(),mg(x),hs()},"updateComponentPreRender"),G=c((x,I,V,q,W,se,te,S,v=!1)=>{const R=x&&x.children,U=x?x.shapeFlag:0,j=I.children,{patchFlag:k,shapeFlag:ce}=I;if(k>0){if(k&128){xe(R,j,V,q,W,se,te,S,v);return}else if(k&256){ge(R,j,V,q,W,se,te,S,v);return}}ce&8?(U&16&&_e(R,W,se),j!==R&&h(V,j)):U&16?ce&16?xe(R,j,V,q,W,se,te,S,v):_e(R,W,se,!0):(U&8&&h(V,""),ce&16&&L(j,V,q,W,se,te,S,v))},"patchChildren"),ge=c((x,I,V,q,W,se,te,S,v)=>{x=x||fr,I=I||fr;const R=x.length,U=I.length,j=Math.min(R,U);let k;for(k=0;k<j;k++){const ce=I[k]=v?zi(I[k]):Jn(I[k]);M(x[k],ce,V,null,W,se,te,S,v)}R>U?_e(x,W,se,!0,!1,j):L(I,V,q,W,se,te,S,v,j)},"patchUnkeyedChildren"),xe=c((x,I,V,q,W,se,te,S,v)=>{let R=0;const U=I.length;let j=x.length-1,k=U-1;for(;R<=j&&R<=k;){const ce=x[R],re=I[R]=v?zi(I[R]):Jn(I[R]);if(Cs(ce,re))M(ce,re,V,null,W,se,te,S,v);else break;R++}for(;R<=j&&R<=k;){const ce=x[j],re=I[k]=v?zi(I[k]):Jn(I[k]);if(Cs(ce,re))M(ce,re,V,null,W,se,te,S,v);else break;j--,k--}if(R>j){if(R<=k){const ce=k+1,re=ce<U?I[ce].el:q;for(;R<=k;)M(null,I[R]=v?zi(I[R]):Jn(I[R]),V,re,W,se,te,S,v),R++}}else if(R>k)for(;R<=j;)je(x[R],W,se,!0),R++;else{const ce=R,re=R,he=new Map;for(R=re;R<=k;R++){const De=I[R]=v?zi(I[R]):Jn(I[R]);De.key!=null&&he.set(De.key,R)}let Pe,oe=0;const pe=k-re+1;let Oe=!1,Fe=0;const ye=new Array(pe);for(R=0;R<pe;R++)ye[R]=0;for(R=ce;R<=j;R++){const De=x[R];if(oe>=pe){je(De,W,se,!0);continue}let qe;if(De.key!=null)qe=he.get(De.key);else for(Pe=re;Pe<=k;Pe++)if(ye[Pe-re]===0&&Cs(De,I[Pe])){qe=Pe;break}qe===void 0?je(De,W,se,!0):(ye[qe-re]=R+1,qe>=Fe?Fe=qe:Oe=!0,M(De,I[qe],V,null,W,se,te,S,v),oe++)}const Ke=Oe?Xx(ye):fr;for(Pe=Ke.length-1,R=pe-1;R>=0;R--){const De=re+R,qe=I[De],N=De+1<U?I[De+1].el:q;ye[R]===0?M(null,qe,V,N,W,se,te,S,v):Oe&&(Pe<0||R!==Ke[Pe]?Ae(qe,V,N,2):Pe--)}}},"patchKeyedChildren"),Ae=c((x,I,V,q,W=null)=>{const{el:se,type:te,transition:S,children:v,shapeFlag:R}=x;if(R&6){Ae(x.component.subTree,I,V,q);return}if(R&128){x.suspense.move(I,V,q);return}if(R&64){te.move(x,I,V,Ye);return}if(te===Bt){i(se,I,V);for(let j=0;j<v.length;j++)Ae(v[j],I,V,q);i(x.anchor,I,V);return}if(te===to){b(x,I,V);return}if(q!==2&&R&1&&S)if(q===0)S.beforeEnter(se),i(se,I,V),fn(()=>S.enter(se),W);else{const{leave:j,delayLeave:k,afterLeave:ce}=S,re=c(()=>i(se,I,V),"remove22"),he=c(()=>{j(se,()=>{re(),ce&&ce()})},"performLeave");k?k(se,re,he):he()}else i(se,I,V)},"move"),je=c((x,I,V,q=!1,W=!1)=>{const{type:se,props:te,ref:S,children:v,dynamicChildren:R,shapeFlag:U,patchFlag:j,dirs:k}=x;if(S!=null&&gu(S,null,V,x,!0),U&256){I.ctx.deactivate(x);return}const ce=U&1&&k,re=!Jr(x);let he;if(re&&(he=te&&te.onVnodeBeforeUnmount)&&qn(he,I,x),U&6)de(x.component,V,q);else{if(U&128){x.suspense.unmount(V,q);return}ce&&ms(x,null,I,"beforeUnmount"),U&64?x.type.remove(x,I,V,W,Ye,q):R&&(se!==Bt||j>0&&j&64)?_e(R,I,V,!1,!0):(se===Bt&&j&384||!W&&U&16)&&_e(v,I,V),q&&nt(x)}(re&&(he=te&&te.onVnodeUnmounted)||ce)&&fn(()=>{he&&qn(he,I,x),ce&&ms(x,null,I,"unmounted")},V)},"unmount"),nt=c(x=>{const{type:I,el:V,anchor:q,transition:W}=x;if(I===Bt){ne(V,q);return}if(I===to){w(x);return}const se=c(()=>{s(V),W&&!W.persisted&&W.afterLeave&&W.afterLeave()},"performRemove");if(x.shapeFlag&1&&W&&!W.persisted){const{leave:te,delayLeave:S}=W,v=c(()=>te(V,se),"performLeave");S?S(x.el,se,v):v()}else se()},"remove2"),ne=c((x,I)=>{let V;for(;x!==I;)V=f(x),s(x),x=V;s(I)},"removeFragment"),de=c((x,I,V)=>{const{bum:q,scope:W,update:se,subTree:te,um:S}=x;q&&sc(q),W.stop(),se&&(se.active=!1,je(te,x,I,V)),S&&fn(S,I),fn(()=>{x.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&x.asyncDep&&!x.asyncResolved&&x.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},"unmountComponent"),_e=c((x,I,V,q=!1,W=!1,se=0)=>{for(let te=se;te<x.length;te++)je(x[te],I,V,q,W)},"unmountChildren"),Me=c(x=>x.shapeFlag&6?Me(x.component.subTree):x.shapeFlag&128?x.suspense.next():f(x.anchor||x.el),"getNextHostNode");let ke=!1;const Ue=c((x,I,V)=>{x==null?I._vnode&&je(I._vnode,null,null,!0):M(I._vnode||null,x,I,null,null,null,V),ke||(ke=!0,mg(),Kv(),ke=!1),I._vnode=x},"render"),Ye={p:M,um:je,m:Ae,r:nt,mt:ee,mc:L,pc:G,pbc:y,n:Me,o:n};let st,Je;return{render:Ue,hydrate:st,createApp:Ux(Ue,st)}}c(Wx,"baseCreateRenderer");function uc({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}c(uc,"resolveChildrenNamespace");function gs({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}c(gs,"toggleRecurse");function jx(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}c(jx,"needTransition");function m0(n,e,t=!1){const i=n.children,s=e.children;if(Be(i)&&Be(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=zi(s[r]),a.el=o.el),t||m0(o,a)),a.type===Gl&&(a.el=o.el)}}c(m0,"traverseStaticChildren");function Xx(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(s=t[t.length-1],n[s]<u){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<u?r=a+1:o=a;u<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}c(Xx,"getSequence");function g0(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:g0(e)}c(g0,"locateNonHydratedAsyncRoot");const $x=c(n=>n.__isTeleport,"isTeleport"),Bt=Symbol.for("v-fgt"),Gl=Symbol.for("v-txt"),bn=Symbol.for("v-cmt"),to=Symbol.for("v-stc"),no=[];let Wn=null;function He(n=!1){no.push(Wn=n?null:[])}c(He,"openBlock");function Yx(){no.pop(),Wn=no[no.length-1]||null}c(Yx,"closeBlock");let _o=1;function wg(n){_o+=n}c(wg,"setBlockTracking");function _0(n){return n.dynamicChildren=_o>0?Wn||fr:null,Yx(),_o>0&&Wn&&Wn.push(n),n}c(_0,"setupBlock");function ot(n,e,t,i,s,r){return _0(J(n,e,t,i,s,r,!0))}c(ot,"createElementBlock");function an(n,e,t,i,s){return _0(Ne(n,e,t,i,s,!0))}c(an,"createBlock");function Ua(n){return n?n.__v_isVNode===!0:!1}c(Ua,"isVNode");function Cs(n,e){return n.type===e.type&&n.key===e.key}c(Cs,"isSameVNodeType");const v0=c(({key:n})=>n??null,"normalizeKey"),ya=c(({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?wt(n)||_n(n)||We(n)?{i:Dt,r:n,k:e,f:!!t}:n:null),"normalizeRef");function J(n,e=null,t=null,i=0,s=null,r=n===Bt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&v0(e),ref:e&&ya(e),scopeId:kl,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Dt};return a?(Zd(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=wt(t)?8:16),_o>0&&!o&&Wn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Wn.push(l),l}c(J,"createBaseVNode");const Ne=Kx;function Kx(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===lx)&&(n=bn),Ua(n)){const a=es(n,e,!0);return t&&Zd(a,t),_o>0&&!r&&Wn&&(a.shapeFlag&6?Wn[Wn.indexOf(n)]=a:Wn.push(a)),a.patchFlag|=-2,a}if(oM(n)&&(n=n.__vccOpts),e){e=qx(e);let{class:a,style:l}=e;a&&!wt(a)&&(e.class=Gt(a)),vt(l)&&(Wv(l)&&!Be(l)&&(l=At({},l)),e.style=zt(l))}const o=wt(n)?1:ux(n)?128:$x(n)?64:vt(n)?4:We(n)?2:0;return J(n,e,t,i,s,o,r,!0)}c(Kx,"_createVNode");function qx(n){return n?Wv(n)||c0(n)?At({},n):n:null}c(qx,"guardReactiveProps");function es(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,u=e?Zx(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&v0(u),ref:e&&e.ref?t&&r?Be(r)?r.concat(ya(e)):[r,ya(e)]:ya(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Bt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&es(n.ssContent),ssFallback:n.ssFallback&&es(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&(h.transition=l.clone(h)),h}c(es,"cloneVNode");function ti(n=" ",e=0){return Ne(Gl,null,n,e)}c(ti,"createTextVNode");function x0(n,e){const t=Ne(to,null,n);return t.staticCount=e,t}c(x0,"createStaticVNode");function bt(n="",e=!1){return e?(He(),an(bn,null,n)):Ne(bn,null,n)}c(bt,"createCommentVNode");function Jn(n){return n==null||typeof n=="boolean"?Ne(bn):Be(n)?Ne(Bt,null,n.slice()):typeof n=="object"?zi(n):Ne(Gl,null,String(n))}c(Jn,"normalizeVNode");function zi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:es(n)}c(zi,"cloneIfMounted");function Zd(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Be(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Zd(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!c0(e)?e._ctx=Dt:s===3&&Dt&&(Dt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else We(e)?(e={default:e,_ctx:Dt},t=32):(e=String(e),i&64?(t=16,e=[ti(e)]):t=8);n.children=e,n.shapeFlag|=t}c(Zd,"normalizeChildren");function Zx(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Gt([e.class,i.class]));else if(s==="style")e.style=zt([e.style,i.style]);else if(Il(s)){const r=e[s],o=i[s];o&&r!==o&&!(Be(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}c(Zx,"mergeProps");function qn(n,e,t,i=null){Ln(n,e,7,[t,i])}c(qn,"invokeVNodeHook");const Jx=o0();let Qx=0;function eM(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Jx,r={uid:Qx++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new tu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:h0(i,s),emitsOptions:Zv(i,s),emit:null,emitted:null,propsDefaults:ft,inheritAttrs:i.inheritAttrs,ctx:ft,data:ft,props:ft,attrs:ft,slots:ft,refs:ft,setupState:ft,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=nx.bind(null,r),n.ce&&n.ce(r),r}c(eM,"createComponentInstance");let Xt=null;const Jd=c(()=>Xt||Dt,"getCurrentInstance");let Fa,_u;{const n=Dv(),e=c((t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}},"registerGlobalSetter");Fa=e("__VUE_INSTANCE_SETTERS__",t=>Xt=t),_u=e("__VUE_SSR_SETTERS__",t=>Wl=t)}const Io=c(n=>{const e=Xt;return Fa(n),n.scope.on(),()=>{n.scope.off(),Fa(e)}},"setCurrentInstance"),Cg=c(()=>{Xt&&Xt.scope.off(),Fa(null)},"unsetCurrentInstance");function M0(n){return n.vnode.shapeFlag&4}c(M0,"isStatefulComponent");let Wl=!1;function tM(n,e=!1){e&&_u(e);const{props:t,children:i}=n.vnode,s=M0(n);Bx(n,t,s,e),Vx(n,i);const r=s?nM(n,e):void 0;return e&&_u(!1),r}c(tM,"setupComponent");function nM(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Rx);const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?sM(n):null,r=Io(n);us();const o=Ki(i,n,0,[n.props,s]);if(hs(),r(),wv(o)){if(o.then(Cg,Cg),e)return o.then(a=>{Rg(n,a,e)}).catch(a=>{Bl(a,n,0)});n.asyncDep=o}else Rg(n,o,e)}else y0(n,e)}c(nM,"setupStatefulComponent");function Rg(n,e,t){We(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:vt(e)&&(n.setupState=Xv(e)),y0(n,t)}c(Rg,"handleSetupResult");let Pg;function y0(n,e,t){const i=n.type;if(!n.render){if(!e&&Pg&&!i.render){const s=i.template||Kd(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,u=At(At({isCustomElement:r,delimiters:a},o),l);i.render=Pg(s,u)}}n.render=i.render||Dn}{const s=Io(n);us();try{Px(n)}finally{hs(),s()}}}c(y0,"finishComponentSetup");const iM={get(n,e){return gn(n,"get",""),n[e]}};function sM(n){const e=c(t=>{n.exposed=t||{}},"expose");return{attrs:new Proxy(n.attrs,iM),slots:n.slots,emit:n.emit,expose:e}}c(sM,"createSetupContext");function jl(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Xv(W1(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Qr)return Qr[t](n)},has(e,t){return t in e||t in Qr}}))}c(jl,"getExposeProxy");function rM(n,e=!0){return We(n)?n.displayName||n.name:n.name||e&&n.__name}c(rM,"getComponentName");function oM(n){return We(n)&&"__vccOpts"in n}c(oM,"isClassComponent");const aM=c((n,e)=>j1(n,e,Wl),"computed");function S0(n,e,t){const i=arguments.length;return i===2?vt(e)&&!Be(e)?Ua(e)?Ne(n,null,[e]):Ne(n,e):Ne(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ua(t)&&(t=[t]),Ne(n,e,t))}c(S0,"h");const lM="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const cM="http://www.w3.org/2000/svg",uM="http://www.w3.org/1998/Math/MathML",ki=typeof document<"u"?document:null,Dg=ki&&ki.createElement("template"),hM={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?ki.createElementNS(cM,n):e==="mathml"?ki.createElementNS(uM,n):ki.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ki.createTextNode(n),createComment:n=>ki.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ki.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Dg.innerHTML=i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n;const a=Dg.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},wi="transition",Lr="animation",vo=Symbol("_vtc"),Ba=c((n,{slots:e})=>S0(vx,dM(n),e),"Transition");Ba.displayName="Transition";const b0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ba.props=At({},Qv,b0);const _s=c((n,e=[])=>{Be(n)?n.forEach(t=>t(...e)):n&&n(...e)},"callHook"),Ig=c(n=>n?Be(n)?n.some(e=>e.length>1):n.length>1:!1,"hasExplicitCallback");function dM(n){const e={};for(const B in n)B in b0||(e[B]=n[B]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,_=fM(s),M=_&&_[0],g=_&&_[1],{onBeforeEnter:m,onEnter:A,onEnterCancelled:b,onLeave:w,onLeaveCancelled:O,onBeforeAppear:P=m,onAppear:C=A,onAppearCancelled:L=b}=e,ie=c((B,H,ee)=>{vs(B,H?h:a),vs(B,H?u:o),ee&&ee()},"finishEnter"),y=c((B,H)=>{B._isLeaving=!1,vs(B,d),vs(B,p),vs(B,f),H&&H()},"finishLeave"),T=c(B=>(H,ee)=>{const le=B?C:A,Y=c(()=>ie(H,B,ee),"resolve");_s(le,[H,Y]),Lg(()=>{vs(H,B?l:r),Ci(H,B?h:a),Ig(le)||Ng(H,i,M,Y)})},"makeEnterHook");return At(e,{onBeforeEnter(B){_s(m,[B]),Ci(B,r),Ci(B,o)},onBeforeAppear(B){_s(P,[B]),Ci(B,l),Ci(B,u)},onEnter:T(!1),onAppear:T(!0),onLeave(B,H){B._isLeaving=!0;const ee=c(()=>y(B,H),"resolve");Ci(B,d),Ci(B,f),gM(),Lg(()=>{B._isLeaving&&(vs(B,d),Ci(B,p),Ig(w)||Ng(B,i,g,ee))}),_s(w,[B,ee])},onEnterCancelled(B){ie(B,!1),_s(b,[B])},onAppearCancelled(B){ie(B,!0),_s(L,[B])},onLeaveCancelled(B){y(B),_s(O,[B])}})}c(dM,"resolveTransitionProps");function fM(n){if(n==null)return null;if(vt(n))return[hc(n.enter),hc(n.leave)];{const e=hc(n);return[e,e]}}c(fM,"normalizeDuration");function hc(n){return g1(n)}c(hc,"NumberOf");function Ci(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[vo]||(n[vo]=new Set)).add(e)}c(Ci,"addTransitionClass");function vs(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[vo];t&&(t.delete(e),t.size||(n[vo]=void 0))}c(vs,"removeTransitionClass");function Lg(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}c(Lg,"nextFrame");let pM=0;function Ng(n,e,t,i){const s=n._endId=++pM,r=c(()=>{s===n._endId&&i()},"resolveIfNotStale");if(t)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=mM(n,e);if(!o)return i();const u=o+"end";let h=0;const d=c(()=>{n.removeEventListener(u,f),r()},"end"),f=c(p=>{p.target===n&&++h>=l&&d()},"onEnd");setTimeout(()=>{h<l&&d()},a+1),n.addEventListener(u,f)}c(Ng,"whenTransitionEnds");function mM(n,e){const t=window.getComputedStyle(n),i=c(_=>(t[_]||"").split(", "),"getStyleProperties"),s=i(`${wi}Delay`),r=i(`${wi}Duration`),o=Og(s,r),a=i(`${Lr}Delay`),l=i(`${Lr}Duration`),u=Og(a,l);let h=null,d=0,f=0;e===wi?o>0&&(h=wi,d=o,f=r.length):e===Lr?u>0&&(h=Lr,d=u,f=l.length):(d=Math.max(o,u),h=d>0?o>u?wi:Lr:null,f=h?h===wi?r.length:l.length:0);const p=h===wi&&/\b(transform|all)(,|$)/.test(i(`${wi}Property`).toString());return{type:h,timeout:d,propCount:f,hasTransform:p}}c(mM,"getTransitionInfo");function Og(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Ug(t)+Ug(n[i])))}c(Og,"getTimeout");function Ug(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}c(Ug,"toMs");function gM(){return document.body.offsetHeight}c(gM,"forceReflow");function _M(n,e,t){const i=n[vo];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}c(_M,"patchClass");const za=Symbol("_vod"),E0=Symbol("_vsh"),Nr={beforeMount(n,{value:e},{transition:t}){n[za]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Or(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Or(n,!0),i.enter(n)):i.leave(n,()=>{Or(n,!1)}):Or(n,e))},beforeUnmount(n,{value:e}){Or(n,e)}};function Or(n,e){n.style.display=e?n[za]:"none",n[E0]=!e}c(Or,"setDisplay");const T0=Symbol("");function Xl(n){const e=Jd();if(!e)return;const t=e.ut=(s=n(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>xu(r,s))},i=c(()=>{const s=n(e.proxy);vu(e.subTree,s),t(s)},"setVars");$d(()=>{px(i);const s=new MutationObserver(i);s.observe(e.subTree.el.parentNode,{childList:!0}),Yd(()=>s.disconnect())})}c(Xl,"useCssVars");function vu(n,e){if(n.shapeFlag&128){const t=n.suspense;n=t.activeBranch,t.pendingBranch&&!t.isHydrating&&t.effects.push(()=>{vu(t.activeBranch,e)})}for(;n.component;)n=n.component.subTree;if(n.shapeFlag&1&&n.el)xu(n.el,e);else if(n.type===Bt)n.children.forEach(t=>vu(t,e));else if(n.type===to){let{el:t,anchor:i}=n;for(;t&&(xu(t,e),t!==i);)t=t.nextSibling}}c(vu,"setVarsOnVNode");function xu(n,e){if(n.nodeType===1){const t=n.style;let i="";for(const s in e)t.setProperty(`--${s}`,e[s]),i+=`--${s}: ${e[s]};`;t[T0]=i}}c(xu,"setVarsOnNode");const vM=/(^|;)\s*display\s*:/;function xM(n,e,t){const i=n.style,s=wt(t);let r=!1;if(t&&!s){if(e)if(wt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Sa(i,a,"")}else for(const o in e)t[o]==null&&Sa(i,o,"");for(const o in t)o==="display"&&(r=!0),Sa(i,o,t[o])}else if(s){if(e!==t){const o=i[T0];o&&(t+=";"+o),i.cssText=t,r=vM.test(t)}}else e&&n.removeAttribute("style");za in n&&(n[za]=r?i.display:"",n[E0]&&(i.display="none"))}c(xM,"patchStyle");const Fg=/\s*!important$/;function Sa(n,e,t){if(Be(t))t.forEach(i=>Sa(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=MM(n,e);Fg.test(t)?n.setProperty(Ws(i),t.replace(Fg,""),"important"):n[i]=t}}c(Sa,"setStyle");const Bg=["Webkit","Moz","ms"],dc={};function MM(n,e){const t=dc[e];if(t)return t;let i=ni(e);if(i!=="filter"&&i in n)return dc[e]=i;i=Ol(i);for(let s=0;s<Bg.length;s++){const r=Bg[s]+i;if(r in n)return dc[e]=r}return e}c(MM,"autoPrefix");const zg="http://www.w3.org/1999/xlink";function yM(n,e,t,i,s){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(zg,e.slice(6,e.length)):n.setAttributeNS(zg,e,t);else{const r=S1(e);t==null||r&&!Iv(t)?n.removeAttribute(e):n.setAttribute(e,r?"":t)}}c(yM,"patchAttr");function SM(n,e,t,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const u=a==="OPTION"?n.getAttribute("value")||"":n.value,h=t??"";(u!==h||!("_value"in n))&&(n.value=h),t==null&&n.removeAttribute(e),n._value=t;return}let l=!1;if(t===""||t==null){const u=typeof n[e];u==="boolean"?t=Iv(t):t==null&&u==="string"?(t="",l=!0):u==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}c(SM,"patchDOMProp");function bM(n,e,t,i){n.addEventListener(e,t,i)}c(bM,"addEventListener");function EM(n,e,t,i){n.removeEventListener(e,t,i)}c(EM,"removeEventListener");const kg=Symbol("_vei");function TM(n,e,t,i,s=null){const r=n[kg]||(n[kg]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=AM(e);if(i){const u=r[e]=RM(i,s);bM(n,a,u,l)}else o&&(EM(n,a,o,l),r[e]=void 0)}}c(TM,"patchEvent");const Vg=/(?:Once|Passive|Capture)$/;function AM(n){let e;if(Vg.test(n)){e={};let i;for(;i=n.match(Vg);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ws(n.slice(2)),e]}c(AM,"parseName");let fc=0;const wM=Promise.resolve(),CM=c(()=>fc||(wM.then(()=>fc=0),fc=Date.now()),"getNow");function RM(n,e){const t=c(i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Ln(PM(i,t.value),e,5,[i])},"invoker");return t.value=n,t.attached=CM(),t}c(RM,"createInvoker");function PM(n,e){if(Be(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}c(PM,"patchStopImmediatePropagation");const Hg=c(n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,"isNativeOn"),DM=c((n,e,t,i,s,r,o,a,l)=>{const u=s==="svg";e==="class"?_M(n,i,u):e==="style"?xM(n,t,i):Il(e)?Od(e)||TM(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):IM(n,e,i,u))?SM(n,e,i,r,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),yM(n,e,i,u))},"patchProp");function IM(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Hg(e)&&We(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Hg(e)&&wt(t)?!1:e in n}c(IM,"shouldSetAsProp");function A0(n="$style"){{const e=Jd();if(!e)return ft;const t=e.type.__cssModules;if(!t)return ft;const i=t[n];return i||ft}}c(A0,"useCssModule");const LM=["ctrl","shift","alt","meta"],NM={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>LM.some(t=>n[`${t}Key`]&&!e.includes(t))},Ct=c((n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=NM[e[o]];if(a&&a(s,e))return}return n(s,...r)})},"withModifiers"),OM={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Zn=c((n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=s=>{if(!("key"in s))return;const r=Ws(s.key);if(e.some(o=>o===r||OM[o]===r))return n(s)})},"withKeys"),UM=At({patchProp:DM},hM);let Gg;function FM(){return Gg||(Gg=Gx(UM))}c(FM,"ensureRenderer");const BM=c((...n)=>{const e=FM().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=kM(i);if(!s)return;const r=e._component;!We(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,zM(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},"createApp");function zM(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}c(zM,"resolveRootNamespace");function kM(n){return wt(n)?document.querySelector(n):n}c(kM,"normalizeContainer");/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qd="169",_r={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},lr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},VM=0,Wg=1,HM=2,w0=1,GM=2,fi=3,ii=0,mn=1,cn=2,Ft=0,vr=1,Mu=2,jg=3,Xg=4,yu=5,mi=100,WM=101,jM=102,XM=103,$M=104,Su=200,YM=201,KM=202,qM=203,bu=204,Eu=205,C0=206,ZM=207,R0=208,JM=209,QM=210,ey=211,ty=212,ny=213,iy=214,Tu=0,Au=1,wu=2,br=3,Cu=4,Ru=5,Pu=6,Du=7,P0=0,sy=1,ry=2,qi=0,oy=1,ay=2,ly=3,cy=4,uy=5,hy=6,dy=7,$g="attached",fy="detached",D0=300,Er=301,Tr=302,Iu=303,Lu=304,$l=306,Ar=1e3,ji=1001,ka=1002,$t=1003,I0=1004,$r=1005,Sn=1006,ba=1007,gi=1008,Mi=1009,L0=1010,N0=1011,xo=1012,ef=1013,Fs=1014,jn=1015,pn=1016,tf=1017,nf=1018,Bs=1020,O0=35902,U0=1021,F0=1022,In=1023,B0=1024,z0=1025,xr=1026,zs=1027,sf=1028,rf=1029,k0=1030,of=1031,af=1033,Ea=33776,Ta=33777,Aa=33778,wa=33779,Nu=35840,Ou=35841,Uu=35842,Fu=35843,Bu=36196,zu=37492,ku=37496,Vu=37808,Hu=37809,Gu=37810,Wu=37811,ju=37812,Xu=37813,$u=37814,Yu=37815,Ku=37816,qu=37817,Zu=37818,Ju=37819,Qu=37820,eh=37821,Ca=36492,th=36494,nh=36495,V0=36283,ih=36284,sh=36285,rh=36286,Mo=2300,yo=2301,pc=2302,Yg=2400,Kg=2401,qg=2402,py=2500,my=0,H0=1,oh=2,gy=3200,G0=3201,lf=0,_y=1,Wi="",ln="srgb",Yt="srgb-linear",cf="display-p3",Yl="display-p3-linear",Va="linear",gt="srgb",Ha="rec709",Ga="p3",Xs=7680,Zg=519,vy=512,xy=513,My=514,W0=515,yy=516,Sy=517,by=518,Ey=519,ah=35044,Jg="300 es",_i=2e3,Wa=2001,wf=class wf{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}};c(wf,"EventDispatcher");let yi=wf;const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qg=1234567;const io=Math.PI/180,wr=180/Math.PI;function $n(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}c($n,"generateUUID");function Wt(n,e,t){return Math.max(e,Math.min(t,n))}c(Wt,"clamp");function uf(n,e){return(n%e+e)%e}c(uf,"euclideanModulo");function Ty(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}c(Ty,"mapLinear");function Ay(n,e,t){return n!==e?(t-n)/(e-n):0}c(Ay,"inverseLerp");function so(n,e,t){return(1-t)*n+t*e}c(so,"lerp");function wy(n,e,t,i){return so(n,e,1-Math.exp(-t*i))}c(wy,"damp");function Cy(n,e=1){return e-Math.abs(uf(n,e*2)-e)}c(Cy,"pingpong");function Ry(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}c(Ry,"smoothstep");function Py(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}c(Py,"smootherstep");function Dy(n,e){return n+Math.floor(Math.random()*(e-n+1))}c(Dy,"randInt");function Iy(n,e){return n+Math.random()*(e-n)}c(Iy,"randFloat");function Ly(n){return n*(.5-Math.random())}c(Ly,"randFloatSpread");function Ny(n){n!==void 0&&(Qg=n);let e=Qg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}c(Ny,"seededRandom");function Oy(n){return n*io}c(Oy,"degToRad");function Uy(n){return n*wr}c(Uy,"radToDeg");function Fy(n){return(n&n-1)===0&&n!==0}c(Fy,"isPowerOfTwo");function By(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}c(By,"ceilPowerOfTwo");function zy(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}c(zy,"floorPowerOfTwo");function ky(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),u=r((e+i)/2),h=o((e+i)/2),d=r((e-i)/2),f=o((e-i)/2),p=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*d,l*f,a*u);break;case"YZY":n.set(l*f,a*h,l*d,a*u);break;case"ZXZ":n.set(l*d,l*f,a*h,a*u);break;case"XZX":n.set(a*h,l*_,l*p,a*u);break;case"YXY":n.set(l*p,a*h,l*_,a*u);break;case"ZYZ":n.set(l*_,l*p,a*h,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}c(ky,"setQuaternionFromProperEuler");function Gn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}c(Gn,"denormalize");function dt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}c(dt,"normalize");const Vi={DEG2RAD:io,RAD2DEG:wr,generateUUID:$n,clamp:Wt,euclideanModulo:uf,mapLinear:Ty,inverseLerp:Ay,lerp:so,damp:wy,pingpong:Cy,smoothstep:Ry,smootherstep:Py,randInt:Dy,randFloat:Iy,randFloatSpread:Ly,seededRandom:Ny,degToRad:Oy,radToDeg:Uy,isPowerOfTwo:Fy,ceilPowerOfTwo:By,floorPowerOfTwo:zy,setQuaternionFromProperEuler:ky,normalize:dt,denormalize:Gn},xl=class xl{constructor(e=0,t=0){xl.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};c(xl,"Vector2");let ve=xl;const Ml=class Ml{constructor(e,t,i,s,r,o,a,l,u){Ml.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,u)}set(e,t,i,s,r,o,a,l,u){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],h=i[4],d=i[7],f=i[2],p=i[5],_=i[8],M=s[0],g=s[3],m=s[6],A=s[1],b=s[4],w=s[7],O=s[2],P=s[5],C=s[8];return r[0]=o*M+a*A+l*O,r[3]=o*g+a*b+l*P,r[6]=o*m+a*w+l*C,r[1]=u*M+h*A+d*O,r[4]=u*g+h*b+d*P,r[7]=u*m+h*w+d*C,r[2]=f*M+p*A+_*O,r[5]=f*g+p*b+_*P,r[8]=f*m+p*w+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8];return t*o*h-t*a*u-i*r*h+i*a*l+s*r*u-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],d=h*o-a*u,f=a*l-h*r,p=u*r-o*l,_=t*d+i*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=d*M,e[1]=(s*u-h*i)*M,e[2]=(a*i-s*o)*M,e[3]=f*M,e[4]=(h*t-s*l)*M,e[5]=(s*r-a*t)*M,e[6]=p*M,e[7]=(i*l-u*t)*M,e[8]=(o*t-i*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),u=Math.sin(r);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-s*u,s*l,-s*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(mc.makeScale(e,t)),this}rotate(e){return this.premultiply(mc.makeRotation(-e)),this}translate(e,t){return this.premultiply(mc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};c(Ml,"Matrix3");let $e=Ml;const mc=new $e;function j0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}c(j0,"arrayNeedsUint32");function So(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}c(So,"createElementNS");function Vy(){const n=So("canvas");return n.style.display="block",n}c(Vy,"createCanvasElement");const e_={};function Ra(n){n in e_||(e_[n]=!0,console.warn(n))}c(Ra,"warnOnce");function Hy(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}c(r,"probe"),setTimeout(r,t)})}c(Hy,"probeAsync");function Gy(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}c(Gy,"toNormalizedProjectionMatrix");function Wy(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}c(Wy,"toReversedProjectionMatrix");const t_=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),n_=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ur={[Yt]:{transfer:Va,primaries:Ha,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[ln]:{transfer:gt,primaries:Ha,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Yl]:{transfer:Va,primaries:Ga,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(n_),fromReference:n=>n.applyMatrix3(t_)},[cf]:{transfer:gt,primaries:Ga,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(n_),fromReference:n=>n.applyMatrix3(t_).convertLinearToSRGB()}},jy=new Set([Yt,Yl]),it={enabled:!0,_workingColorSpace:Yt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!jy.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ur[e].toReference,s=Ur[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ur[n].primaries},getTransfer:function(n){return n===Wi?Va:Ur[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Ur[e].luminanceCoefficients)}};function Mr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}c(Mr,"SRGBToLinear");function gc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}c(gc,"LinearToSRGB");let $s;const Cf=class Cf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$s===void 0&&($s=So("canvas")),$s.width=e.width,$s.height=e.height;const i=$s.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=$s}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=So("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Mr(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Mr(t[i]/255)*255):t[i]=Mr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};c(Cf,"ImageUtils");let lh=Cf,Xy=0;const Rf=class Rf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=$n(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(_c(s[o].image)):r.push(_c(s[o]))}else r=_c(s);i.url=r}return t||(e.images[this.uuid]=i),i}};c(Rf,"Source");let ja=Rf;function _c(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?lh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}c(_c,"serializeImage");let $y=0;const hr=class hr extends yi{constructor(e=hr.DEFAULT_IMAGE,t=hr.DEFAULT_MAPPING,i=ji,s=ji,r=Sn,o=gi,a=In,l=Mi,u=hr.DEFAULT_ANISOTROPY,h=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=$n(),this.name="",this.source=new ja(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==D0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ar:e.x=e.x-Math.floor(e.x);break;case ji:e.x=e.x<0?0:1;break;case ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ar:e.y=e.y-Math.floor(e.y);break;case ji:e.y=e.y<0?0:1;break;case ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};c(hr,"Texture");let Qt=hr;Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=D0;Qt.DEFAULT_ANISOTROPY=1;const yl=class yl{constructor(e=0,t=0,i=0,s=1){yl.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,u=l[0],h=l[4],d=l[8],f=l[1],p=l[5],_=l[9],M=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-M)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+M)<.1&&Math.abs(_+g)<.1&&Math.abs(u+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(u+1)/2,w=(p+1)/2,O=(m+1)/2,P=(h+f)/4,C=(d+M)/4,L=(_+g)/4;return b>w&&b>O?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=P/i,r=C/i):w>O?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=P/s,r=L/s):O<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),i=C/r,s=L/r),this.set(i,s,r,t),this}let A=Math.sqrt((g-_)*(g-_)+(d-M)*(d-M)+(f-h)*(f-h));return Math.abs(A)<.001&&(A=1),this.x=(g-_)/A,this.y=(d-M)/A,this.z=(f-h)/A,this.w=Math.acos((u+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};c(yl,"Vector4");let at=yl;const Pf=class Pf extends yi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Qt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ja(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}};c(Pf,"RenderTarget");let ch=Pf;const Df=class Df extends ch{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}};c(Df,"WebGLRenderTarget");let Pt=Df;const If=class If extends Qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};c(If,"DataArrayTexture");let Xa=If;const Lf=class Lf extends Qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};c(Lf,"Data3DTexture");let uh=Lf;const Nf=class Nf{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],u=i[s+1],h=i[s+2],d=i[s+3];const f=r[o+0],p=r[o+1],_=r[o+2],M=r[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=M;return}if(d!==M||l!==f||u!==p||h!==_){let g=1-a;const m=l*f+u*p+h*_+d*M,A=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){const O=Math.sqrt(b),P=Math.atan2(O,m*A);g=Math.sin(g*P)/O,a=Math.sin(a*P)/O}const w=a*A;if(l=l*g+f*w,u=u*g+p*w,h=h*g+_*w,d=d*g+M*w,g===1-a){const O=1/Math.sqrt(l*l+u*u+h*h+d*d);l*=O,u*=O,h*=O,d*=O}}e[t]=l,e[t+1]=u,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],u=i[s+2],h=i[s+3],d=r[o],f=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+h*d+l*p-u*f,e[t+1]=l*_+h*f+u*d-a*p,e[t+2]=u*_+h*p+a*f-l*d,e[t+3]=h*_-a*d-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),h=a(s/2),d=a(r/2),f=l(i/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*h*d+u*p*_,this._y=u*p*d-f*h*_,this._z=u*h*_+f*p*d,this._w=u*h*d-f*p*_;break;case"YXZ":this._x=f*h*d+u*p*_,this._y=u*p*d-f*h*_,this._z=u*h*_-f*p*d,this._w=u*h*d+f*p*_;break;case"ZXY":this._x=f*h*d-u*p*_,this._y=u*p*d+f*h*_,this._z=u*h*_+f*p*d,this._w=u*h*d-f*p*_;break;case"ZYX":this._x=f*h*d-u*p*_,this._y=u*p*d+f*h*_,this._z=u*h*_-f*p*d,this._w=u*h*d+f*p*_;break;case"YZX":this._x=f*h*d+u*p*_,this._y=u*p*d+f*h*_,this._z=u*h*_-f*p*d,this._w=u*h*d-f*p*_;break;case"XZY":this._x=f*h*d-u*p*_,this._y=u*p*d-f*h*_,this._z=u*h*_+f*p*d,this._w=u*h*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],u=t[2],h=t[6],d=t[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-u)*p,this._z=(o-s)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(r-u)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+u)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,u=t._z,h=t._w;return this._x=i*h+o*a+s*u-r*l,this._y=s*h+o*l+r*a-i*u,this._z=r*h+o*u+i*l-s*a,this._w=o*h-i*a-s*l-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const u=Math.sqrt(l),h=Math.atan2(u,a),d=Math.sin((1-t)*h)/u,f=Math.sin(t*h)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};c(Nf,"Quaternion");let Nn=Nf;const Sl=class Sl{constructor(e=0,t=0,i=0){Sl.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(i_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(i_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*u+o*d-a*h,this.y=i+l*h+a*u-r*d,this.z=s+l*d+r*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vc.copy(this).projectOnVector(e),this.sub(vc)}reflect(e){return this.sub(vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};c(Sl,"Vector3");let D=Sl;const vc=new D,i_=new Nn,Of=class Of{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zn):zn.fromBufferAttribute(r,o),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Go.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Go.copy(i.boundingBox)),Go.applyMatrix4(e.matrixWorld),this.union(Go)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),Wo.subVectors(this.max,Fr),Ys.subVectors(e.a,Fr),Ks.subVectors(e.b,Fr),qs.subVectors(e.c,Fr),Ri.subVectors(Ks,Ys),Pi.subVectors(qs,Ks),xs.subVectors(Ys,qs);let t=[0,-Ri.z,Ri.y,0,-Pi.z,Pi.y,0,-xs.z,xs.y,Ri.z,0,-Ri.x,Pi.z,0,-Pi.x,xs.z,0,-xs.x,-Ri.y,Ri.x,0,-Pi.y,Pi.x,0,-xs.y,xs.x,0];return!xc(t,Ys,Ks,qs,Wo)||(t=[1,0,0,0,1,0,0,0,1],!xc(t,Ys,Ks,qs,Wo))?!1:(jo.crossVectors(Ri,Pi),t=[jo.x,jo.y,jo.z],xc(t,Ys,Ks,qs,Wo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};c(Of,"Box3");let Yn=Of;const oi=[new D,new D,new D,new D,new D,new D,new D,new D],zn=new D,Go=new Yn,Ys=new D,Ks=new D,qs=new D,Ri=new D,Pi=new D,xs=new D,Fr=new D,Wo=new D,jo=new D,Ms=new D;function xc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ms.fromArray(n,r);const a=s.x*Math.abs(Ms.x)+s.y*Math.abs(Ms.y)+s.z*Math.abs(Ms.z),l=e.dot(Ms),u=t.dot(Ms),h=i.dot(Ms);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>a)return!1}return!0}c(xc,"satForAxes");const Yy=new Yn,Br=new D,Mc=new D,Uf=class Uf{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Yy.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Br.subVectors(e,this.center);const t=Br.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Br,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Br.copy(e.center).add(Mc)),this.expandByPoint(Br.copy(e.center).sub(Mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};c(Uf,"Sphere");let On=Uf;const ai=new D,yc=new D,Xo=new D,Di=new D,Sc=new D,$o=new D,bc=new D,Ff=class Ff{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){yc.copy(e).add(t).multiplyScalar(.5),Xo.copy(t).sub(e).normalize(),Di.copy(this.origin).sub(yc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Xo),a=Di.dot(this.direction),l=-Di.dot(Xo),u=Di.lengthSq(),h=Math.abs(1-o*o);let d,f,p,_;if(h>0)if(d=o*l-a,f=o*a-l,_=r*h,d>=0)if(f>=-_)if(f<=_){const M=1/h;d*=M,f*=M,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f<=-_?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+u):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+u):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+u);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(yc).addScaledVector(Xo,f),p}intersectSphere(e,t){ai.subVectors(e.center,this.origin);const i=ai.dot(this.direction),s=ai.dot(ai)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,s=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,s=(e.min.x-f.x)*u),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,i,s,r){Sc.subVectors(t,e),$o.subVectors(i,e),bc.crossVectors(Sc,$o);let o=this.direction.dot(bc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Di.subVectors(this.origin,e);const l=a*this.direction.dot($o.crossVectors(Di,$o));if(l<0)return null;const u=a*this.direction.dot(Sc.cross(Di));if(u<0||l+u>o)return null;const h=-a*Di.dot(bc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};c(Ff,"Ray");let ts=Ff;const lo=class lo{constructor(e,t,i,s,r,o,a,l,u,h,d,f,p,_,M,g){lo.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,u,h,d,f,p,_,M,g)}set(e,t,i,s,r,o,a,l,u,h,d,f,p,_,M,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=u,m[6]=h,m[10]=d,m[14]=f,m[3]=p,m[7]=_,m[11]=M,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lo().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Zs.setFromMatrixColumn(e,0).length(),r=1/Zs.setFromMatrixColumn(e,1).length(),o=1/Zs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),u=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*h,p=o*d,_=a*h,M=a*d;t[0]=l*h,t[4]=-l*d,t[8]=u,t[1]=p+_*u,t[5]=f-M*u,t[9]=-a*l,t[2]=M-f*u,t[6]=_+p*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,p=l*d,_=u*h,M=u*d;t[0]=f+M*a,t[4]=_*a-p,t[8]=o*u,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-_,t[6]=M+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,p=l*d,_=u*h,M=u*d;t[0]=f-M*a,t[4]=-o*d,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*h,t[9]=M-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,p=o*d,_=a*h,M=a*d;t[0]=l*h,t[4]=_*u-p,t[8]=f*u+M,t[1]=l*d,t[5]=M*u+f,t[9]=p*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*u,_=a*l,M=a*u;t[0]=l*h,t[4]=M-f*d,t[8]=_*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-u*h,t[6]=p*d+_,t[10]=f-M*d}else if(e.order==="XZY"){const f=o*l,p=o*u,_=a*l,M=a*u;t[0]=l*h,t[4]=-d,t[8]=u*h,t[1]=f*d+M,t[5]=o*h,t[9]=p*d-_,t[2]=_*d-p,t[6]=a*h,t[10]=M*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ky,e,qy)}lookAt(e,t,i){const s=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Ii.crossVectors(i,Mn),Ii.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Ii.crossVectors(i,Mn)),Ii.normalize(),Yo.crossVectors(Mn,Ii),s[0]=Ii.x,s[4]=Yo.x,s[8]=Mn.x,s[1]=Ii.y,s[5]=Yo.y,s[9]=Mn.y,s[2]=Ii.z,s[6]=Yo.z,s[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],h=i[1],d=i[5],f=i[9],p=i[13],_=i[2],M=i[6],g=i[10],m=i[14],A=i[3],b=i[7],w=i[11],O=i[15],P=s[0],C=s[4],L=s[8],ie=s[12],y=s[1],T=s[5],B=s[9],H=s[13],ee=s[2],le=s[6],Y=s[10],Q=s[14],G=s[3],ge=s[7],xe=s[11],Ae=s[15];return r[0]=o*P+a*y+l*ee+u*G,r[4]=o*C+a*T+l*le+u*ge,r[8]=o*L+a*B+l*Y+u*xe,r[12]=o*ie+a*H+l*Q+u*Ae,r[1]=h*P+d*y+f*ee+p*G,r[5]=h*C+d*T+f*le+p*ge,r[9]=h*L+d*B+f*Y+p*xe,r[13]=h*ie+d*H+f*Q+p*Ae,r[2]=_*P+M*y+g*ee+m*G,r[6]=_*C+M*T+g*le+m*ge,r[10]=_*L+M*B+g*Y+m*xe,r[14]=_*ie+M*H+g*Q+m*Ae,r[3]=A*P+b*y+w*ee+O*G,r[7]=A*C+b*T+w*le+O*ge,r[11]=A*L+b*B+w*Y+O*xe,r[15]=A*ie+b*H+w*Q+O*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],u=e[13],h=e[2],d=e[6],f=e[10],p=e[14],_=e[3],M=e[7],g=e[11],m=e[15];return _*(+r*l*d-s*u*d-r*a*f+i*u*f+s*a*p-i*l*p)+M*(+t*l*p-t*u*f+r*o*f-s*o*p+s*u*h-r*l*h)+g*(+t*u*d-t*a*p-r*o*d+i*o*p+r*a*h-i*u*h)+m*(-s*a*h-t*l*d+t*a*f+s*o*d-i*o*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],d=e[9],f=e[10],p=e[11],_=e[12],M=e[13],g=e[14],m=e[15],A=d*g*u-M*f*u+M*l*p-a*g*p-d*l*m+a*f*m,b=_*f*u-h*g*u-_*l*p+o*g*p+h*l*m-o*f*m,w=h*M*u-_*d*u+_*a*p-o*M*p-h*a*m+o*d*m,O=_*d*l-h*M*l-_*a*f+o*M*f+h*a*g-o*d*g,P=t*A+i*b+s*w+r*O;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return e[0]=A*C,e[1]=(M*f*r-d*g*r-M*s*p+i*g*p+d*s*m-i*f*m)*C,e[2]=(a*g*r-M*l*r+M*s*u-i*g*u-a*s*m+i*l*m)*C,e[3]=(d*l*r-a*f*r-d*s*u+i*f*u+a*s*p-i*l*p)*C,e[4]=b*C,e[5]=(h*g*r-_*f*r+_*s*p-t*g*p-h*s*m+t*f*m)*C,e[6]=(_*l*r-o*g*r-_*s*u+t*g*u+o*s*m-t*l*m)*C,e[7]=(o*f*r-h*l*r+h*s*u-t*f*u-o*s*p+t*l*p)*C,e[8]=w*C,e[9]=(_*d*r-h*M*r-_*i*p+t*M*p+h*i*m-t*d*m)*C,e[10]=(o*M*r-_*a*r+_*i*u-t*M*u-o*i*m+t*a*m)*C,e[11]=(h*a*r-o*d*r-h*i*u+t*d*u+o*i*p-t*a*p)*C,e[12]=O*C,e[13]=(h*M*s-_*d*s+_*i*f-t*M*f-h*i*g+t*d*g)*C,e[14]=(_*a*s-o*M*s-_*i*l+t*M*l+o*i*g-t*a*g)*C,e[15]=(o*d*s-h*a*s+h*i*l-t*d*l-o*i*f+t*a*f)*C,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,u=r*o,h=r*a;return this.set(u*o+i,u*a-s*l,u*l+s*a,0,u*a+s*l,h*a+i,h*l-s*o,0,u*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,u=r+r,h=o+o,d=a+a,f=r*u,p=r*h,_=r*d,M=o*h,g=o*d,m=a*d,A=l*u,b=l*h,w=l*d,O=i.x,P=i.y,C=i.z;return s[0]=(1-(M+m))*O,s[1]=(p+w)*O,s[2]=(_-b)*O,s[3]=0,s[4]=(p-w)*P,s[5]=(1-(f+m))*P,s[6]=(g+A)*P,s[7]=0,s[8]=(_+b)*C,s[9]=(g-A)*C,s[10]=(1-(f+M))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Zs.set(s[0],s[1],s[2]).length();const o=Zs.set(s[4],s[5],s[6]).length(),a=Zs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],kn.copy(this);const u=1/r,h=1/o,d=1/a;return kn.elements[0]*=u,kn.elements[1]*=u,kn.elements[2]*=u,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=d,kn.elements[9]*=d,kn.elements[10]*=d,t.setFromRotationMatrix(kn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=_i){const l=this.elements,u=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let p,_;if(a===_i)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Wa)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=_i){const l=this.elements,u=1/(t-e),h=1/(i-s),d=1/(o-r),f=(t+e)*u,p=(i+s)*h;let _,M;if(a===_i)_=(o+r)*d,M=-2*d;else if(a===Wa)_=r*d,M=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=M,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};c(lo,"Matrix4");let Ge=lo;const Zs=new D,kn=new Ge,Ky=new D(0,0,0),qy=new D(1,1,1),Ii=new D,Yo=new D,Mn=new D,s_=new Ge,r_=new Nn,bl=class bl{constructor(e=0,t=0,i=0,s=bl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],u=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return s_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(s_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return r_.setFromEuler(this),this.setFromQuaternion(r_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};c(bl,"Euler");let Kn=bl;Kn.DEFAULT_ORDER="XYZ";const Bf=class Bf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};c(Bf,"Layers");let bo=Bf,Zy=0;const o_=new D,Js=new Nn,li=new Ge,Ko=new D,zr=new D,Jy=new D,Qy=new Nn,a_=new D(1,0,0),l_=new D(0,1,0),c_=new D(0,0,1),u_={type:"added"},eS={type:"removed"},Qs={type:"childadded",child:null},Ec={type:"childremoved",child:null},dr=class dr extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dr.DEFAULT_UP.clone();const e=new D,t=new Kn,i=new Nn,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}c(r,"onRotationChange");function o(){t.setFromQuaternion(i,void 0,!1)}c(o,"onQuaternionChange"),t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ge},normalMatrix:{value:new $e}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=dr.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.multiply(Js),this}rotateOnWorldAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.premultiply(Js),this}rotateX(e){return this.rotateOnAxis(a_,e)}rotateY(e){return this.rotateOnAxis(l_,e)}rotateZ(e){return this.rotateOnAxis(c_,e)}translateOnAxis(e,t){return o_.copy(e).applyQuaternion(this.quaternion),this.position.add(o_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(a_,e)}translateY(e){return this.translateOnAxis(l_,e)}translateZ(e){return this.translateOnAxis(c_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ko.copy(e):Ko.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(zr,Ko,this.up):li.lookAt(Ko,zr,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),Js.setFromRotationMatrix(li),this.quaternion.premultiply(Js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(u_),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(eS),Ec.child=e,this.dispatchEvent(Ec),Ec.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(u_),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,e,Jy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,Qy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(c(r,"serialize"),this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const d=l[u];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const u in a){const h=a[u];delete h.metadata,l.push(h)}return l}c(o,"extractFromCache")}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}};c(dr,"Object3D");let xt=dr;xt.DEFAULT_UP=new D(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new D,ci=new D,Tc=new D,ui=new D,er=new D,tr=new D,h_=new D,Ac=new D,wc=new D,Cc=new D,Rc=new at,Pc=new at,Dc=new at,Hi=class Hi{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Vn.subVectors(e,t),s.cross(Vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Vn.subVectors(s,t),ci.subVectors(i,t),Tc.subVectors(e,t);const o=Vn.dot(Vn),a=Vn.dot(ci),l=Vn.dot(Tc),u=ci.dot(ci),h=ci.dot(Tc),d=o*u-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(u*l-a*h)*f,_=(o*h-a*l)*f;return r.set(1-p-_,_,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Rc.setScalar(0),Pc.setScalar(0),Dc.setScalar(0),Rc.fromBufferAttribute(e,t),Pc.fromBufferAttribute(e,i),Dc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Rc,r.x),o.addScaledVector(Pc,r.y),o.addScaledVector(Dc,r.z),o}static isFrontFacing(e,t,i,s){return Vn.subVectors(i,t),ci.subVectors(e,t),Vn.cross(ci).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Vn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Hi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Hi.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;er.subVectors(s,i),tr.subVectors(r,i),Ac.subVectors(e,i);const l=er.dot(Ac),u=tr.dot(Ac);if(l<=0&&u<=0)return t.copy(i);wc.subVectors(e,s);const h=er.dot(wc),d=tr.dot(wc);if(h>=0&&d<=h)return t.copy(s);const f=l*d-h*u;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(er,o);Cc.subVectors(e,r);const p=er.dot(Cc),_=tr.dot(Cc);if(_>=0&&p<=_)return t.copy(r);const M=p*u-l*_;if(M<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(tr,a);const g=h*_-p*d;if(g<=0&&d-h>=0&&p-_>=0)return h_.subVectors(r,s),a=(d-h)/(d-h+(p-_)),t.copy(s).addScaledVector(h_,a);const m=1/(g+M+f);return o=M*m,a=f*m,t.copy(i).addScaledVector(er,o).addScaledVector(tr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};c(Hi,"Triangle");let Rs=Hi;const X0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},qo={h:0,s:0,l:0};function Ic(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}c(Ic,"hue2rgb");const zf=class zf{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=it.workingColorSpace){if(e=uf(e,1),t=Wt(t,0,1),i=Wt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ic(o,r,e+1/3),this.g=Ic(o,r,e),this.b=Ic(o,r,e-1/3)}return it.toWorkingColorSpace(this,s),this}setStyle(e,t=ln){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}c(i,"handleAlpha");let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ln){const i=X0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}copyLinearToSRGB(e){return this.r=gc(e.r),this.g=gc(e.g),this.b=gc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return it.fromWorkingColorSpace(qt.copy(this),e),Math.round(Wt(qt.r*255,0,255))*65536+Math.round(Wt(qt.g*255,0,255))*256+Math.round(Wt(qt.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(qt.copy(this),t);const i=qt.r,s=qt.g,r=qt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,u;const h=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=ln){it.fromWorkingColorSpace(qt.copy(this),e);const t=qt.r,i=qt.g,s=qt.b;return e!==ln?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(qo);const i=so(Li.h,qo.h,t),s=so(Li.s,qo.s,t),r=so(Li.l,qo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};c(zf,"Color");let we=zf;const qt=new we;we.NAMES=X0;let tS=0;const kf=class kf extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=vr,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bu,this.blendDst=Eu,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(i.blending=this.blending),this.side!==ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bu&&(i.blendSrc=this.blendSrc),this.blendDst!==Eu&&(i.blendDst=this.blendDst),this.blendEquation!==mi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==br&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(c(s,"extractFromCache"),t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}};c(kf,"Material");let En=kf;const Vf=class Vf extends En{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=P0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};c(Vf,"MeshBasicMaterial");let vi=Vf;const Tt=new D,Zo=new ve,Hf=class Hf{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ah,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Zo.fromBufferAttribute(this,t),Zo.applyMatrix3(e),this.setXY(t,Zo.x,Zo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Gn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ah&&(e.usage=this.usage),e}};c(Hf,"BufferAttribute");let kt=Hf;const Gf=class Gf extends kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};c(Gf,"Uint16BufferAttribute");let $a=Gf;const Wf=class Wf extends kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};c(Wf,"Uint32BufferAttribute");let Ya=Wf;const jf=class jf extends kt{constructor(e,t,i){super(new Float32Array(e),t,i)}};c(jf,"Float32BufferAttribute");let Vt=jf,nS=0;const wn=new Ge,Lc=new xt,nr=new D,yn=new Yn,kr=new Yn,Ot=new D,El=class El extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nS++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(j0(e)?Ya:$a)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new $e().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,i){return wn.makeTranslation(e,t,i),this.applyMatrix4(wn),this}scale(e,t,i){return wn.makeScale(e,t,i),this.applyMatrix4(wn),this}lookAt(e){return Lc.lookAt(e),Lc.updateMatrix(),this.applyMatrix4(Lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Vt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];kr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(yn.min,kr.min),yn.expandByPoint(Ot),Ot.addVectors(yn.max,kr.max),yn.expandByPoint(Ot)):(yn.expandByPoint(kr.min),yn.expandByPoint(kr.max))}yn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ot));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)Ot.fromBufferAttribute(a,u),l&&(nr.fromBufferAttribute(e,u),Ot.add(nr)),s=Math.max(s,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new D,l[L]=new D;const u=new D,h=new D,d=new D,f=new ve,p=new ve,_=new ve,M=new D,g=new D;function m(L,ie,y){u.fromBufferAttribute(i,L),h.fromBufferAttribute(i,ie),d.fromBufferAttribute(i,y),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,ie),_.fromBufferAttribute(r,y),h.sub(u),d.sub(u),p.sub(f),_.sub(f);const T=1/(p.x*_.y-_.x*p.y);isFinite(T)&&(M.copy(h).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(T),g.copy(d).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(T),a[L].add(M),a[ie].add(M),a[y].add(M),l[L].add(g),l[ie].add(g),l[y].add(g))}c(m,"handleTriangle");let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let L=0,ie=A.length;L<ie;++L){const y=A[L],T=y.start,B=y.count;for(let H=T,ee=T+B;H<ee;H+=3)m(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const b=new D,w=new D,O=new D,P=new D;function C(L){O.fromBufferAttribute(s,L),P.copy(O);const ie=a[L];b.copy(ie),b.sub(O.multiplyScalar(O.dot(ie))).normalize(),w.crossVectors(P,ie);const T=w.dot(l[L])<0?-1:1;o.setXYZW(L,b.x,b.y,b.z,T)}c(C,"handleVertex");for(let L=0,ie=A.length;L<ie;++L){const y=A[L],T=y.start,B=y.count;for(let H=T,ee=T+B;H<ee;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,u=new D,h=new D,d=new D;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),M=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),u.fromBufferAttribute(i,g),a.add(h),l.add(h),u.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const u=a.array,h=a.itemSize,d=a.normalized,f=new u.constructor(l.length*h);let p=0,_=0;for(let M=0,g=l.length;M<g;M++){a.isInterleavedBufferAttribute?p=l[M]*a.data.stride+a.offset:p=l[M]*h;for(let m=0;m<h;m++)f[_++]=u[p++]}return new kt(f,h,d)}if(c(e,"convertBufferAttribute"),this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new El,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],u=e(l,i);t.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const l=[],u=r[a];for(let h=0,d=u.length;h<d;h++){const f=u[h],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const u in s){const h=s[u];this.setAttribute(u,h.clone(t))}const r=e.morphAttributes;for(const u in r){const h=[],d=r[u];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,h=o.length;u<h;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};c(El,"BufferGeometry");let en=El;const d_=new Ge,ys=new ts,Jo=new On,f_=new D,Qo=new D,ea=new D,ta=new D,Nc=new D,na=new D,p_=new D,ia=new D,Xf=class Xf extends xt{constructor(e=new en,t=new vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){na.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const h=a[l],d=r[l];h!==0&&(Nc.fromBufferAttribute(d,e),o?na.addScaledVector(Nc,h):na.addScaledVector(Nc.sub(t),h))}t.add(na)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jo.copy(i.boundingSphere),Jo.applyMatrix4(r),ys.copy(e.ray).recast(e.near),!(Jo.containsPoint(ys.origin)===!1&&(ys.intersectSphere(Jo,f_)===null||ys.origin.distanceToSquared(f_)>(e.far-e.near)**2))&&(d_.copy(r).invert(),ys.copy(e.ray).applyMatrix4(d_),!(i.boundingBox!==null&&ys.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ys)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,M=f.length;_<M;_++){const g=f[_],m=o[g.materialIndex],A=Math.max(g.start,p.start),b=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let w=A,O=b;w<O;w+=3){const P=a.getX(w),C=a.getX(w+1),L=a.getX(w+2);s=sa(this,m,e,i,u,h,d,P,C,L),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),M=Math.min(a.count,p.start+p.count);for(let g=_,m=M;g<m;g+=3){const A=a.getX(g),b=a.getX(g+1),w=a.getX(g+2);s=sa(this,o,e,i,u,h,d,A,b,w),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,M=f.length;_<M;_++){const g=f[_],m=o[g.materialIndex],A=Math.max(g.start,p.start),b=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let w=A,O=b;w<O;w+=3){const P=w,C=w+1,L=w+2;s=sa(this,m,e,i,u,h,d,P,C,L),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let g=_,m=M;g<m;g+=3){const A=g,b=g+1,w=g+2;s=sa(this,o,e,i,u,h,d,A,b,w),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};c(Xf,"Mesh");let It=Xf;function iS(n,e,t,i,s,r,o,a){let l;if(e.side===mn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ii,a),l===null)return null;ia.copy(a),ia.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(ia);return u<t.near||u>t.far?null:{distance:u,point:ia.clone(),object:n}}c(iS,"checkIntersection$1");function sa(n,e,t,i,s,r,o,a,l,u){n.getVertexPosition(a,Qo),n.getVertexPosition(l,ea),n.getVertexPosition(u,ta);const h=iS(n,e,t,i,Qo,ea,ta,p_);if(h){const d=new D;Rs.getBarycoord(p_,Qo,ea,ta,d),s&&(h.uv=Rs.getInterpolatedAttribute(s,a,l,u,d,new ve)),r&&(h.uv1=Rs.getInterpolatedAttribute(r,a,l,u,d,new ve)),o&&(h.normal=Rs.getInterpolatedAttribute(o,a,l,u,d,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new D,materialIndex:0};Rs.getNormal(Qo,ea,ta,f.normal),h.face=f,h.barycoord=d}return h}c(sa,"checkGeometryIntersection");const Tl=class Tl extends en{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],u=[],h=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(h,3)),this.setAttribute("uv",new Vt(d,2));function _(M,g,m,A,b,w,O,P,C,L,ie){const y=w/C,T=O/L,B=w/2,H=O/2,ee=P/2,le=C+1,Y=L+1;let Q=0,G=0;const ge=new D;for(let xe=0;xe<Y;xe++){const Ae=xe*T-H;for(let je=0;je<le;je++){const nt=je*y-B;ge[M]=nt*A,ge[g]=Ae*b,ge[m]=ee,u.push(ge.x,ge.y,ge.z),ge[M]=0,ge[g]=0,ge[m]=P>0?1:-1,h.push(ge.x,ge.y,ge.z),d.push(je/C),d.push(1-xe/L),Q+=1}}for(let xe=0;xe<L;xe++)for(let Ae=0;Ae<C;Ae++){const je=f+Ae+le*xe,nt=f+Ae+le*(xe+1),ne=f+(Ae+1)+le*(xe+1),de=f+(Ae+1)+le*xe;l.push(je,nt,de),l.push(nt,ne,de),G+=6}a.addGroup(p,G,ie),p+=G,f+=Q}c(_,"buildPlane")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};c(Tl,"BoxGeometry");let ns=Tl;function Cr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}c(Cr,"cloneUniforms");function on(n){const e={};for(let t=0;t<n.length;t++){const i=Cr(n[t]);for(const s in i)e[s]=i[s]}return e}c(on,"mergeUniforms");function sS(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}c(sS,"cloneUniformsGroups");function $0(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}c($0,"getUnlitUniformColorSpace");const Ls={clone:Cr,merge:on};var rS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;const $f=class $f extends En{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rS,this.fragmentShader=oS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cr(e.uniforms),this.uniformsGroups=sS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}};c($f,"ShaderMaterial");let yt=$f;const Yf=class Yf extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=_i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};c(Yf,"Camera");let Ka=Yf;const Ni=new D,m_=new ve,g_=new ve,Kf=class Kf extends Ka{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wr*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,t){return this.getViewBounds(e,m_,g_),t.subVectors(g_,m_)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(io*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/u,s*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};c(Kf,"PerspectiveCamera");let jt=Kf;const ir=-90,sr=1,qf=class qf extends xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new jt(ir,sr,e,t);s.layers=this.layers,this.add(s);const r=new jt(ir,sr,e,t);r.layers=this.layers,this.add(r);const o=new jt(ir,sr,e,t);o.layers=this.layers,this.add(o);const a=new jt(ir,sr,e,t);a.layers=this.layers,this.add(a);const l=new jt(ir,sr,e,t);l.layers=this.layers,this.add(l);const u=new jt(ir,sr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const u of t)this.remove(u);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,u,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,u),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}};c(qf,"CubeCamera");let hh=qf;const Zf=class Zf extends Qt{constructor(e,t,i,s,r,o,a,l,u,h){e=e!==void 0?e:[],t=t!==void 0?t:Er,super(e,t,i,s,r,o,a,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};c(Zf,"CubeTexture");let qa=Zf;const Jf=class Jf extends Pt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new qa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ns(5,5,5),r=new yt({name:"CubemapFromEquirect",uniforms:Cr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:Ft});r.uniforms.tEquirect.value=t;const o=new It(s,r),a=t.minFilter;return t.minFilter===gi&&(t.minFilter=Sn),new hh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}};c(Jf,"WebGLCubeRenderTarget");let dh=Jf;const Oc=new D,aS=new D,lS=new $e,Qf=class Qf{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Oc.subVectors(i,t).cross(aS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Oc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||lS.getNormalMatrix(e),s=this.coplanarPoint(Oc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};c(Qf,"Plane");let Pn=Qf;const Ss=new On,ra=new D,ep=class ep{constructor(e=new Pn,t=new Pn,i=new Pn,s=new Pn,r=new Pn,o=new Pn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=_i){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],u=s[4],h=s[5],d=s[6],f=s[7],p=s[8],_=s[9],M=s[10],g=s[11],m=s[12],A=s[13],b=s[14],w=s[15];if(i[0].setComponents(l-r,f-u,g-p,w-m).normalize(),i[1].setComponents(l+r,f+u,g+p,w+m).normalize(),i[2].setComponents(l+o,f+h,g+_,w+A).normalize(),i[3].setComponents(l-o,f-h,g-_,w-A).normalize(),i[4].setComponents(l-a,f-d,g-M,w-b).normalize(),t===_i)i[5].setComponents(l+a,f+d,g+M,w+b).normalize();else if(t===Wa)i[5].setComponents(a,d,M,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(e){return Ss.center.set(0,0,0),Ss.radius=.7071067811865476,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ra.x=s.normal.x>0?e.max.x:e.min.x,ra.y=s.normal.y>0?e.max.y:e.min.y,ra.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ra)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};c(ep,"Frustum");let Eo=ep;function Y0(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return c(s,"onAnimationFrame"),{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}c(Y0,"WebGLAnimation");function cS(n){const e=new WeakMap;function t(a,l){const u=a.array,h=a.usage,d=u.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,u,h),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}c(t,"createBuffer");function i(a,l,u){const h=l.array,d=l.updateRanges;if(n.bindBuffer(u,a),d.length===0)n.bufferSubData(u,0,h);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){const _=d[f],M=d[p];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++f,d[f]=M)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){const M=d[p];n.bufferSubData(u,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}c(i,"updateBuffer");function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}c(s,"get");function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}c(r,"remove");function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return c(o,"update"),{get:s,remove:r,update:o}}c(cS,"WebGLAttributes");const Al=class Al extends en{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),u=a+1,h=l+1,d=e/a,f=t/l,p=[],_=[],M=[],g=[];for(let m=0;m<h;m++){const A=m*f-o;for(let b=0;b<u;b++){const w=b*d-r;_.push(w,-A,0),M.push(0,0,1),g.push(b/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let A=0;A<a;A++){const b=A+u*m,w=A+u*(m+1),O=A+1+u*(m+1),P=A+1+u*m;p.push(b,w,P),p.push(w,O,P)}this.setIndex(p),this.setAttribute("position",new Vt(_,3)),this.setAttribute("normal",new Vt(M,3)),this.setAttribute("uv",new Vt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Al(e.width,e.height,e.widthSegments,e.heightSegments)}};c(Al,"PlaneGeometry");let Za=Al;var uS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_S=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,MS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ES=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,TS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,AS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,PS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,DS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,IS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,LS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,NS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,OS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,US=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kS="gl_FragColor = linearToOutputTexel( gl_FragColor );",VS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,HS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,GS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,WS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,XS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$S=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ZS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,JS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,QS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,nb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ib=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ob=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ab=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ub=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,db=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_b=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Eb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ab=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Db=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ib=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Lb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ob=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ub=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Xb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$b=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Yb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Kb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,iE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_E=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ME=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,EE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,CE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,PE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,DE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,NE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,BE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,VE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:uS,alphahash_pars_fragment:hS,alphamap_fragment:dS,alphamap_pars_fragment:fS,alphatest_fragment:pS,alphatest_pars_fragment:mS,aomap_fragment:gS,aomap_pars_fragment:_S,batching_pars_vertex:vS,batching_vertex:xS,begin_vertex:MS,beginnormal_vertex:yS,bsdfs:SS,iridescence_fragment:bS,bumpmap_pars_fragment:ES,clipping_planes_fragment:TS,clipping_planes_pars_fragment:AS,clipping_planes_pars_vertex:wS,clipping_planes_vertex:CS,color_fragment:RS,color_pars_fragment:PS,color_pars_vertex:DS,color_vertex:IS,common:LS,cube_uv_reflection_fragment:NS,defaultnormal_vertex:OS,displacementmap_pars_vertex:US,displacementmap_vertex:FS,emissivemap_fragment:BS,emissivemap_pars_fragment:zS,colorspace_fragment:kS,colorspace_pars_fragment:VS,envmap_fragment:HS,envmap_common_pars_fragment:GS,envmap_pars_fragment:WS,envmap_pars_vertex:jS,envmap_physical_pars_fragment:nb,envmap_vertex:XS,fog_vertex:$S,fog_pars_vertex:YS,fog_fragment:KS,fog_pars_fragment:qS,gradientmap_pars_fragment:ZS,lightmap_pars_fragment:JS,lights_lambert_fragment:QS,lights_lambert_pars_fragment:eb,lights_pars_begin:tb,lights_toon_fragment:ib,lights_toon_pars_fragment:sb,lights_phong_fragment:rb,lights_phong_pars_fragment:ob,lights_physical_fragment:ab,lights_physical_pars_fragment:lb,lights_fragment_begin:cb,lights_fragment_maps:ub,lights_fragment_end:hb,logdepthbuf_fragment:db,logdepthbuf_pars_fragment:fb,logdepthbuf_pars_vertex:pb,logdepthbuf_vertex:mb,map_fragment:gb,map_pars_fragment:_b,map_particle_fragment:vb,map_particle_pars_fragment:xb,metalnessmap_fragment:Mb,metalnessmap_pars_fragment:yb,morphinstance_vertex:Sb,morphcolor_vertex:bb,morphnormal_vertex:Eb,morphtarget_pars_vertex:Tb,morphtarget_vertex:Ab,normal_fragment_begin:wb,normal_fragment_maps:Cb,normal_pars_fragment:Rb,normal_pars_vertex:Pb,normal_vertex:Db,normalmap_pars_fragment:Ib,clearcoat_normal_fragment_begin:Lb,clearcoat_normal_fragment_maps:Nb,clearcoat_pars_fragment:Ob,iridescence_pars_fragment:Ub,opaque_fragment:Fb,packing:Bb,premultiplied_alpha_fragment:zb,project_vertex:kb,dithering_fragment:Vb,dithering_pars_fragment:Hb,roughnessmap_fragment:Gb,roughnessmap_pars_fragment:Wb,shadowmap_pars_fragment:jb,shadowmap_pars_vertex:Xb,shadowmap_vertex:$b,shadowmask_pars_fragment:Yb,skinbase_vertex:Kb,skinning_pars_vertex:qb,skinning_vertex:Zb,skinnormal_vertex:Jb,specularmap_fragment:Qb,specularmap_pars_fragment:eE,tonemapping_fragment:tE,tonemapping_pars_fragment:nE,transmission_fragment:iE,transmission_pars_fragment:sE,uv_pars_fragment:rE,uv_pars_vertex:oE,uv_vertex:aE,worldpos_vertex:lE,background_vert:cE,background_frag:uE,backgroundCube_vert:hE,backgroundCube_frag:dE,cube_vert:fE,cube_frag:pE,depth_vert:mE,depth_frag:gE,distanceRGBA_vert:_E,distanceRGBA_frag:vE,equirect_vert:xE,equirect_frag:ME,linedashed_vert:yE,linedashed_frag:SE,meshbasic_vert:bE,meshbasic_frag:EE,meshlambert_vert:TE,meshlambert_frag:AE,meshmatcap_vert:wE,meshmatcap_frag:CE,meshnormal_vert:RE,meshnormal_frag:PE,meshphong_vert:DE,meshphong_frag:IE,meshphysical_vert:LE,meshphysical_frag:NE,meshtoon_vert:OE,meshtoon_frag:UE,points_vert:FE,points_frag:BE,shadow_vert:zE,shadow_frag:kE,sprite_vert:VE,sprite_frag:HE},me={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Qn={basic:{uniforms:on([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:on([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new we(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:on([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:on([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:on([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new we(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:on([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:on([me.points,me.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:on([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:on([me.common,me.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:on([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:on([me.sprite,me.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:on([me.common,me.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:on([me.lights,me.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Qn.physical={uniforms:on([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const oa={r:0,b:0,g:0},bs=new Kn,GE=new Ge;function WE(n,e,t,i,s,r,o){const a=new we(0);let l=r===!0?0:1,u,h,d=null,f=0,p=null;function _(A){let b=A.isScene===!0?A.background:null;return b&&b.isTexture&&(b=(A.backgroundBlurriness>0?t:e).get(b)),b}c(_,"getBackground");function M(A){let b=!1;const w=_(A);w===null?m(a,l):w&&w.isColor&&(m(w,1),b=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}c(M,"render");function g(A,b){const w=_(b);w&&(w.isCubeTexture||w.mapping===$l)?(h===void 0&&(h=new It(new ns(1,1,1),new yt({name:"BackgroundCubeMaterial",uniforms:Cr(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,P,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),bs.copy(b.backgroundRotation),bs.x*=-1,bs.y*=-1,bs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(GE.makeRotationFromEuler(bs)),h.material.toneMapped=it.getTransfer(w.colorSpace)!==gt,(d!==w||f!==w.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=w,f=w.version,p=n.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(u===void 0&&(u=new It(new Za(2,2),new yt({name:"BackgroundMaterial",uniforms:Cr(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=w,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.toneMapped=it.getTransfer(w.colorSpace)!==gt,w.matrixAutoUpdate===!0&&w.updateMatrix(),u.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||f!==w.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=w,f=w.version,p=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null))}c(g,"addToRenderList");function m(A,b){A.getRGB(oa,$0(n)),i.buffers.color.setClear(oa.r,oa.g,oa.b,b,o)}return c(m,"setClear"),{getClearColor:function(){return a},setClearColor:function(A,b=1){a.set(A),l=b,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,m(a,l)},render:M,addToRenderList:g}}c(WE,"WebGLBackground");function jE(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(y,T,B,H,ee){let le=!1;const Y=d(H,B,T);r!==Y&&(r=Y,u(r.object)),le=p(y,H,B,ee),le&&_(y,H,B,ee),ee!==null&&e.update(ee,n.ELEMENT_ARRAY_BUFFER),(le||o)&&(o=!1,w(y,T,B,H),ee!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}c(a,"setup");function l(){return n.createVertexArray()}c(l,"createVertexArrayObject");function u(y){return n.bindVertexArray(y)}c(u,"bindVertexArrayObject");function h(y){return n.deleteVertexArray(y)}c(h,"deleteVertexArrayObject");function d(y,T,B){const H=B.wireframe===!0;let ee=i[y.id];ee===void 0&&(ee={},i[y.id]=ee);let le=ee[T.id];le===void 0&&(le={},ee[T.id]=le);let Y=le[H];return Y===void 0&&(Y=f(l()),le[H]=Y),Y}c(d,"getBindingState");function f(y){const T=[],B=[],H=[];for(let ee=0;ee<t;ee++)T[ee]=0,B[ee]=0,H[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:B,attributeDivisors:H,object:y,attributes:{},index:null}}c(f,"createBindingState");function p(y,T,B,H){const ee=r.attributes,le=T.attributes;let Y=0;const Q=B.getAttributes();for(const G in Q)if(Q[G].location>=0){const xe=ee[G];let Ae=le[G];if(Ae===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(Ae=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(Ae=y.instanceColor)),xe===void 0||xe.attribute!==Ae||Ae&&xe.data!==Ae.data)return!0;Y++}return r.attributesNum!==Y||r.index!==H}c(p,"needsUpdate");function _(y,T,B,H){const ee={},le=T.attributes;let Y=0;const Q=B.getAttributes();for(const G in Q)if(Q[G].location>=0){let xe=le[G];xe===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(xe=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(xe=y.instanceColor));const Ae={};Ae.attribute=xe,xe&&xe.data&&(Ae.data=xe.data),ee[G]=Ae,Y++}r.attributes=ee,r.attributesNum=Y,r.index=H}c(_,"saveCache");function M(){const y=r.newAttributes;for(let T=0,B=y.length;T<B;T++)y[T]=0}c(M,"initAttributes");function g(y){m(y,0)}c(g,"enableAttribute");function m(y,T){const B=r.newAttributes,H=r.enabledAttributes,ee=r.attributeDivisors;B[y]=1,H[y]===0&&(n.enableVertexAttribArray(y),H[y]=1),ee[y]!==T&&(n.vertexAttribDivisor(y,T),ee[y]=T)}c(m,"enableAttributeAndDivisor");function A(){const y=r.newAttributes,T=r.enabledAttributes;for(let B=0,H=T.length;B<H;B++)T[B]!==y[B]&&(n.disableVertexAttribArray(B),T[B]=0)}c(A,"disableUnusedAttributes");function b(y,T,B,H,ee,le,Y){Y===!0?n.vertexAttribIPointer(y,T,B,ee,le):n.vertexAttribPointer(y,T,B,H,ee,le)}c(b,"vertexAttribPointer");function w(y,T,B,H){M();const ee=H.attributes,le=B.getAttributes(),Y=T.defaultAttributeValues;for(const Q in le){const G=le[Q];if(G.location>=0){let ge=ee[Q];if(ge===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor)),ge!==void 0){const xe=ge.normalized,Ae=ge.itemSize,je=e.get(ge);if(je===void 0)continue;const nt=je.buffer,ne=je.type,de=je.bytesPerElement,_e=ne===n.INT||ne===n.UNSIGNED_INT||ge.gpuType===ef;if(ge.isInterleavedBufferAttribute){const Me=ge.data,ke=Me.stride,Ue=ge.offset;if(Me.isInstancedInterleavedBuffer){for(let Ye=0;Ye<G.locationSize;Ye++)m(G.location+Ye,Me.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ye=0;Ye<G.locationSize;Ye++)g(G.location+Ye);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let Ye=0;Ye<G.locationSize;Ye++)b(G.location+Ye,Ae/G.locationSize,ne,xe,ke*de,(Ue+Ae/G.locationSize*Ye)*de,_e)}else{if(ge.isInstancedBufferAttribute){for(let Me=0;Me<G.locationSize;Me++)m(G.location+Me,ge.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Me=0;Me<G.locationSize;Me++)g(G.location+Me);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let Me=0;Me<G.locationSize;Me++)b(G.location+Me,Ae/G.locationSize,ne,xe,Ae*de,Ae/G.locationSize*Me*de,_e)}}else if(Y!==void 0){const xe=Y[Q];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(G.location,xe);break;case 3:n.vertexAttrib3fv(G.location,xe);break;case 4:n.vertexAttrib4fv(G.location,xe);break;default:n.vertexAttrib1fv(G.location,xe)}}}}A()}c(w,"setupVertexAttributes");function O(){L();for(const y in i){const T=i[y];for(const B in T){const H=T[B];for(const ee in H)h(H[ee].object),delete H[ee];delete T[B]}delete i[y]}}c(O,"dispose");function P(y){if(i[y.id]===void 0)return;const T=i[y.id];for(const B in T){const H=T[B];for(const ee in H)h(H[ee].object),delete H[ee];delete T[B]}delete i[y.id]}c(P,"releaseStatesOfGeometry");function C(y){for(const T in i){const B=i[T];if(B[y.id]===void 0)continue;const H=B[y.id];for(const ee in H)h(H[ee].object),delete H[ee];delete B[y.id]}}c(C,"releaseStatesOfProgram");function L(){ie(),o=!0,r!==s&&(r=s,u(r.object))}c(L,"reset");function ie(){s.geometry=null,s.program=null,s.wireframe=!1}return c(ie,"resetDefaultState"),{setup:a,reset:L,resetDefaultState:ie,dispose:O,releaseStatesOfGeometry:P,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:g,disableUnusedAttributes:A}}c(jE,"WebGLBindingStates");function XE(n,e,t){let i;function s(u){i=u}c(s,"setMode");function r(u,h){n.drawArrays(i,u,h),t.update(h,i,1)}c(r,"render");function o(u,h,d){d!==0&&(n.drawArraysInstanced(i,u,h,d),t.update(h,i,d))}c(o,"renderInstances");function a(u,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,h,0,d);let p=0;for(let _=0;_<d;_++)p+=h[_];t.update(p,i,1)}c(a,"renderMultiDraw");function l(u,h,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)o(u[_],h[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,h,0,f,0,d);let _=0;for(let M=0;M<d;M++)_+=h[M];for(let M=0;M<f.length;M++)t.update(_,i,f[M])}}c(l,"renderMultiDrawInstances"),this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}c(XE,"WebGLBufferRenderer");function $E(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}c(r,"getMaxAnisotropy");function o(C){return!(C!==In&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}c(o,"textureFormatReadable");function a(C){const L=C===pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Mi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==jn&&!L)}c(a,"textureTypeReadable");function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}c(l,"getMaxPrecision");let u=t.precision!==void 0?t.precision:"highp";const h=l(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const C=e.get("EXT_clip_control");C.clipControlEXT(C.LOWER_LEFT_EXT,C.ZERO_TO_ONE_EXT)}const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=_>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:A,maxVaryings:b,maxFragmentUniforms:w,vertexTextures:O,maxSamples:P}}c($E,"WebGLCapabilities");function YE(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Pn,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,M=d.clipIntersection,g=d.clipShadows,m=n.get(d);if(!s||_===null||_.length===0||r&&!g)r?h(null):u();else{const A=r?0:i,b=A*4;let w=m.clippingState||null;l.value=w,w=h(_,f,b,p);for(let O=0;O!==b;++O)w[O]=t[O];m.clippingState=w,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=A}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}c(u,"resetGlobalState");function h(d,f,p,_){const M=d!==null?d.length:0;let g=null;if(M!==0){if(g=l.value,_!==!0||g===null){const m=p+M*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,w=p;b!==M;++b,w+=4)o.copy(d[b]).applyMatrix4(A,a),o.normal.toArray(g,w),g[w+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}c(h,"projectPlanes")}c(YE,"WebGLClipping");function KE(n){let e=new WeakMap;function t(o,a){return a===Iu?o.mapping=Er:a===Lu&&(o.mapping=Tr),o}c(t,"mapTextureMapping");function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Iu||a===Lu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new dh(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",s),t(u.texture,o.mapping)}else return null}}return o}c(i,"get");function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}c(s,"onTextureDispose");function r(){e=new WeakMap}return c(r,"dispose"),{get:i,dispose:r}}c(KE,"WebGLCubeMaps");const tp=class tp extends Ka{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};c(tp,"OrthographicCamera");let Rr=tp;const cr=4,__=[.125,.215,.35,.446,.526,.582],Ps=20,Uc=new Rr,v_=new we;let Fc=null,Bc=0,zc=0,kc=!1;const As=(1+Math.sqrt(5))/2,rr=1/As,x_=[new D(-As,rr,0),new D(As,rr,0),new D(-rr,0,As),new D(rr,0,As),new D(0,As,-rr),new D(0,As,rr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],np=class np{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Fc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=S_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=y_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fc,Bc,zc),this._renderer.xr.enabled=kc,e.scissorTest=!1,aa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Er||e.mapping===Tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:pn,format:In,colorSpace:Yt,depthBuffer:!1},s=M_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=M_(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qE(r)),this._blurMaterial=ZE(r,e,t)}return s}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,Uc)}_sceneToCubeUV(e,t,i,s){const a=new jt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(v_),h.toneMapping=qi,h.autoClear=!1;const p=new vi({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),_=new It(new ns,p);let M=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,M=!0):(p.color.copy(v_),M=!0);for(let m=0;m<6;m++){const A=m%3;A===0?(a.up.set(0,l[m],0),a.lookAt(u[m],0,0)):A===1?(a.up.set(0,0,l[m]),a.lookAt(0,u[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,u[m]));const b=this._cubeSize;aa(s,A*b,m>2?b:0,b,b),h.setRenderTarget(s),M&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Er||e.mapping===Tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=S_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=y_());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new It(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;aa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Uc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=x_[(s-r-1)%x_.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new It(this._lodPlanes[s],u),f=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ps-1),M=r/_,g=isFinite(r)?1+Math.floor(h*M):Ps;g>Ps&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ps}`);const m=[];let A=0;for(let C=0;C<Ps;++C){const L=C/M,ie=Math.exp(-L*L/2);m.push(ie),C===0?A+=ie:C<g&&(A+=2*ie)}for(let C=0;C<m.length;C++)m[C]=m[C]/A;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=_,f.mipInt.value=b-i;const w=this._sizeLods[s],O=3*w*(s>b-cr?s-b+cr:0),P=4*(this._cubeSize-w);aa(t,O,P,3*w,2*w),l.setRenderTarget(t),l.render(d,Uc)}};c(np,"PMREMGenerator");let Ja=np;function qE(n){const e=[],t=[],i=[];let s=n;const r=n-cr+1+__.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-cr?l=__[o-n+cr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),h=-u,d=1+u,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,_=6,M=3,g=2,m=1,A=new Float32Array(M*_*p),b=new Float32Array(g*_*p),w=new Float32Array(m*_*p);for(let P=0;P<p;P++){const C=P%3*2/3-1,L=P>2?0:-1,ie=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];A.set(ie,M*_*P),b.set(f,g*_*P);const y=[P,P,P,P,P,P];w.set(y,m*_*P)}const O=new en;O.setAttribute("position",new kt(A,M)),O.setAttribute("uv",new kt(b,g)),O.setAttribute("faceIndex",new kt(w,m)),e.push(O),s>cr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}c(qE,"_createPlanes");function M_(n,e,t){const i=new Pt(n,e,t);return i.texture.mapping=$l,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}c(M_,"_createRenderTarget");function aa(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}c(aa,"_setViewport");function ZE(n,e,t){const i=new Float32Array(Ps),s=new D(0,1,0);return new yt({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ft,depthTest:!1,depthWrite:!1})}c(ZE,"_getBlurShader");function y_(){return new yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ft,depthTest:!1,depthWrite:!1})}c(y_,"_getEquirectMaterial");function S_(){return new yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ft,depthTest:!1,depthWrite:!1})}c(S_,"_getCubemapMaterial");function hf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}c(hf,"_getCommonVertexShader");function JE(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Iu||l===Lu,h=l===Er||l===Tr;if(u||h){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Ja(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return u&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Ja(n)),d=u?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}c(i,"get");function s(a){let l=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&l++;return l===u}c(s,"isCubeTextureComplete");function r(a){const l=a.target;l.removeEventListener("dispose",r);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}c(r,"onTextureDispose");function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return c(o,"dispose"),{get:i,dispose:o}}c(JE,"WebGLCubeUVMaps");function QE(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return c(t,"getExtension"),{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Ra("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}c(QE,"WebGLExtensions");function eT(n,e,t,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const M=f.morphAttributes[_];for(let g=0,m=M.length;g<m;g++)e.remove(M[g])}f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}c(o,"onGeometryDispose");function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}c(a,"get");function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const M=p[_];for(let g=0,m=M.length;g<m;g++)e.update(M[g],n.ARRAY_BUFFER)}}c(l,"update");function u(d){const f=[],p=d.index,_=d.attributes.position;let M=0;if(p!==null){const A=p.array;M=p.version;for(let b=0,w=A.length;b<w;b+=3){const O=A[b+0],P=A[b+1],C=A[b+2];f.push(O,P,P,C,C,O)}}else if(_!==void 0){const A=_.array;M=_.version;for(let b=0,w=A.length/3-1;b<w;b+=3){const O=b+0,P=b+1,C=b+2;f.push(O,P,P,C,C,O)}}else return;const g=new(j0(f)?Ya:$a)(f,1);g.version=M;const m=r.get(d);m&&e.remove(m),r.set(d,g)}c(u,"updateWireframeAttribute");function h(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&u(d)}else u(d);return r.get(d)}return c(h,"getWireframeAttribute"),{get:a,update:l,getWireframeAttribute:h}}c(eT,"WebGLGeometries");function tT(n,e,t){let i;function s(f){i=f}c(s,"setMode");let r,o;function a(f){r=f.type,o=f.bytesPerElement}c(a,"setIndex");function l(f,p){n.drawElements(i,p,r,f*o),t.update(p,i,1)}c(l,"render");function u(f,p,_){_!==0&&(n.drawElementsInstanced(i,p,r,f*o,_),t.update(p,i,_))}c(u,"renderInstances");function h(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,_);let g=0;for(let m=0;m<_;m++)g+=p[m];t.update(g,i,1)}c(h,"renderMultiDraw");function d(f,p,_,M){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)u(f[m]/o,p[m],M[m]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,M,0,_);let m=0;for(let A=0;A<_;A++)m+=p[A];for(let A=0;A<M.length;A++)t.update(m,i,M[A])}}c(d,"renderMultiDrawInstances"),this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}c(tT,"WebGLIndexedBufferRenderer");function nT(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}c(i,"update");function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return c(s,"reset"),{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}c(nT,"WebGLInfo");function iT(n,e,t){const i=new WeakMap,s=new at;function r(o,a,l){const u=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let y=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;c(y,"disposeTexture"),f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let w=0;_===!0&&(w=1),M===!0&&(w=2),g===!0&&(w=3);let O=a.attributes.position.count*w,P=1;O>e.maxTextureSize&&(P=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const C=new Float32Array(O*P*4*d),L=new Xa(C,O,P,d);L.type=jn,L.needsUpdate=!0;const ie=w*4;for(let T=0;T<d;T++){const B=m[T],H=A[T],ee=b[T],le=O*P*4*T;for(let Y=0;Y<B.count;Y++){const Q=Y*ie;_===!0&&(s.fromBufferAttribute(B,Y),C[le+Q+0]=s.x,C[le+Q+1]=s.y,C[le+Q+2]=s.z,C[le+Q+3]=0),M===!0&&(s.fromBufferAttribute(H,Y),C[le+Q+4]=s.x,C[le+Q+5]=s.y,C[le+Q+6]=s.z,C[le+Q+7]=0),g===!0&&(s.fromBufferAttribute(ee,Y),C[le+Q+8]=s.x,C[le+Q+9]=s.y,C[le+Q+10]=s.z,C[le+Q+11]=ee.itemSize===4?s.w:1)}}f={count:d,texture:L,size:new ve(O,P)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let g=0;g<u.length;g++)_+=u[g];const M=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",M),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return c(r,"update"),{update:r}}c(iT,"WebGLMorphtargets");function sT(n,e,t,i){let s=new WeakMap;function r(l){const u=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return d}c(r,"update");function o(){s=new WeakMap}c(o,"dispose");function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return c(a,"onInstancedMeshDispose"),{update:r,dispose:o}}c(sT,"WebGLObjects");const ip=class ip extends Qt{constructor(e,t,i,s,r,o,a,l,u,h=xr){if(h!==xr&&h!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===xr&&(i=Fs),i===void 0&&h===zs&&(i=Bs),super(null,s,r,o,a,l,h,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};c(ip,"DepthTexture");let To=ip;const K0=new Qt,b_=new To(1,1),q0=new Xa,Z0=new uh,J0=new qa,E_=[],T_=[],A_=new Float32Array(16),w_=new Float32Array(9),C_=new Float32Array(4);function Dr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=E_[s];if(r===void 0&&(r=new Float32Array(s),E_[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}c(Dr,"flatten");function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}c(Lt,"arraysEqual");function Nt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}c(Nt,"copyArray");function Kl(n,e){let t=T_[e];t===void 0&&(t=new Int32Array(e),T_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}c(Kl,"allocTexUnits");function rT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}c(rT,"setValueV1f");function oT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),Nt(t,e)}}c(oT,"setValueV2f");function aT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),Nt(t,e)}}c(aT,"setValueV3f");function lT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),Nt(t,e)}}c(lT,"setValueV4f");function cT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Lt(t,i))return;C_.set(i),n.uniformMatrix2fv(this.addr,!1,C_),Nt(t,i)}}c(cT,"setValueM2");function uT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Lt(t,i))return;w_.set(i),n.uniformMatrix3fv(this.addr,!1,w_),Nt(t,i)}}c(uT,"setValueM3");function hT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Lt(t,i))return;A_.set(i),n.uniformMatrix4fv(this.addr,!1,A_),Nt(t,i)}}c(hT,"setValueM4");function dT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}c(dT,"setValueV1i");function fT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),Nt(t,e)}}c(fT,"setValueV2i");function pT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),Nt(t,e)}}c(pT,"setValueV3i");function mT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),Nt(t,e)}}c(mT,"setValueV4i");function gT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}c(gT,"setValueV1ui");function _T(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),Nt(t,e)}}c(_T,"setValueV2ui");function vT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),Nt(t,e)}}c(vT,"setValueV3ui");function xT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),Nt(t,e)}}c(xT,"setValueV4ui");function MT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(b_.compareFunction=W0,r=b_):r=K0,t.setTexture2D(e||r,s)}c(MT,"setValueT1");function yT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Z0,s)}c(yT,"setValueT3D1");function ST(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||J0,s)}c(ST,"setValueT6");function bT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||q0,s)}c(bT,"setValueT2DArray1");function ET(n){switch(n){case 5126:return rT;case 35664:return oT;case 35665:return aT;case 35666:return lT;case 35674:return cT;case 35675:return uT;case 35676:return hT;case 5124:case 35670:return dT;case 35667:case 35671:return fT;case 35668:case 35672:return pT;case 35669:case 35673:return mT;case 5125:return gT;case 36294:return _T;case 36295:return vT;case 36296:return xT;case 35678:case 36198:case 36298:case 36306:case 35682:return MT;case 35679:case 36299:case 36307:return yT;case 35680:case 36300:case 36308:case 36293:return ST;case 36289:case 36303:case 36311:case 36292:return bT}}c(ET,"getSingularSetter");function TT(n,e){n.uniform1fv(this.addr,e)}c(TT,"setValueV1fArray");function AT(n,e){const t=Dr(e,this.size,2);n.uniform2fv(this.addr,t)}c(AT,"setValueV2fArray");function wT(n,e){const t=Dr(e,this.size,3);n.uniform3fv(this.addr,t)}c(wT,"setValueV3fArray");function CT(n,e){const t=Dr(e,this.size,4);n.uniform4fv(this.addr,t)}c(CT,"setValueV4fArray");function RT(n,e){const t=Dr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}c(RT,"setValueM2Array");function PT(n,e){const t=Dr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}c(PT,"setValueM3Array");function DT(n,e){const t=Dr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}c(DT,"setValueM4Array");function IT(n,e){n.uniform1iv(this.addr,e)}c(IT,"setValueV1iArray");function LT(n,e){n.uniform2iv(this.addr,e)}c(LT,"setValueV2iArray");function NT(n,e){n.uniform3iv(this.addr,e)}c(NT,"setValueV3iArray");function OT(n,e){n.uniform4iv(this.addr,e)}c(OT,"setValueV4iArray");function UT(n,e){n.uniform1uiv(this.addr,e)}c(UT,"setValueV1uiArray");function FT(n,e){n.uniform2uiv(this.addr,e)}c(FT,"setValueV2uiArray");function BT(n,e){n.uniform3uiv(this.addr,e)}c(BT,"setValueV3uiArray");function zT(n,e){n.uniform4uiv(this.addr,e)}c(zT,"setValueV4uiArray");function kT(n,e,t){const i=this.cache,s=e.length,r=Kl(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||K0,r[o])}c(kT,"setValueT1Array");function VT(n,e,t){const i=this.cache,s=e.length,r=Kl(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Z0,r[o])}c(VT,"setValueT3DArray");function HT(n,e,t){const i=this.cache,s=e.length,r=Kl(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||J0,r[o])}c(HT,"setValueT6Array");function GT(n,e,t){const i=this.cache,s=e.length,r=Kl(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||q0,r[o])}c(GT,"setValueT2DArrayArray");function WT(n){switch(n){case 5126:return TT;case 35664:return AT;case 35665:return wT;case 35666:return CT;case 35674:return RT;case 35675:return PT;case 35676:return DT;case 5124:case 35670:return IT;case 35667:case 35671:return LT;case 35668:case 35672:return NT;case 35669:case 35673:return OT;case 5125:return UT;case 36294:return FT;case 36295:return BT;case 36296:return zT;case 35678:case 36198:case 36298:case 36306:case 35682:return kT;case 35679:case 36299:case 36307:return VT;case 35680:case 36300:case 36308:case 36293:return HT;case 36289:case 36303:case 36311:case 36292:return GT}}c(WT,"getPureArraySetter");const sp=class sp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ET(t.type)}};c(sp,"SingleUniform");let fh=sp;const rp=class rp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=WT(t.type)}};c(rp,"PureArrayUniform");let ph=rp;const op=class op{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}};c(op,"StructuredUniform");let mh=op;const Vc=/(\w+)(\])?(\[|\.)?/g;function R_(n,e){n.seq.push(e),n.map[e.id]=e}c(R_,"addUniform");function jT(n,e,t){const i=n.name,s=i.length;for(Vc.lastIndex=0;;){const r=Vc.exec(i),o=Vc.lastIndex;let a=r[1];const l=r[2]==="]",u=r[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===s){R_(t,u===void 0?new fh(a,n,e):new ph(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new mh(a),R_(t,d)),t=d}}}c(jT,"parseUniform");const ap=class ap{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);jT(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}};c(ap,"WebGLUniforms");let yr=ap;function P_(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}c(P_,"WebGLShader");const XT=37297;let $T=0;function YT(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}c(YT,"handleSource");function KT(n){const e=it.getPrimaries(it.workingColorSpace),t=it.getPrimaries(n);let i;switch(e===t?i="":e===Ga&&t===Ha?i="LinearDisplayP3ToLinearSRGB":e===Ha&&t===Ga&&(i="LinearSRGBToLinearDisplayP3"),n){case Yt:case Yl:return[i,"LinearTransferOETF"];case ln:case cf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}c(KT,"getEncodingComponents");function D_(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+YT(n.getShaderSource(e),o)}else return s}c(D_,"getShaderErrors");function qT(n,e){const t=KT(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}c(qT,"getTexelEncodingFunction");function ZT(n,e){let t;switch(e){case oy:t="Linear";break;case ay:t="Reinhard";break;case ly:t="Cineon";break;case cy:t="ACESFilmic";break;case hy:t="AgX";break;case dy:t="Neutral";break;case uy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}c(ZT,"getToneMappingFunction");const la=new D;function JT(){it.getLuminanceCoefficients(la);const n=la.x.toFixed(4),e=la.y.toFixed(4),t=la.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}c(JT,"getLuminanceFunction");function QT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}c(QT,"generateVertexExtensions");function eA(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}c(eA,"generateDefines");function tA(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}c(tA,"fetchAttributeLocations");function Yr(n){return n!==""}c(Yr,"filterEmptyLine");function I_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}c(I_,"replaceLightNums");function L_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}c(L_,"replaceClippingPlaneNums");const nA=/^[ \t]*#include +<([\w\d./]+)>/gm;function gh(n){return n.replace(nA,sA)}c(gh,"resolveIncludes");const iA=new Map;function sA(n,e){let t=Xe[e];if(t===void 0){const i=iA.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gh(t)}c(sA,"includeReplacer");const rA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function N_(n){return n.replace(rA,oA)}c(N_,"unrollLoops");function oA(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}c(oA,"loopReplacer");function O_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}c(O_,"generatePrecision");function aA(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===w0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===GM?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}c(aA,"generateShadowMapTypeDefine");function lA(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Er:case Tr:e="ENVMAP_TYPE_CUBE";break;case $l:e="ENVMAP_TYPE_CUBE_UV";break}return e}c(lA,"generateEnvMapTypeDefine");function cA(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Tr:e="ENVMAP_MODE_REFRACTION";break}return e}c(cA,"generateEnvMapModeDefine");function uA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case P0:e="ENVMAP_BLENDING_MULTIPLY";break;case sy:e="ENVMAP_BLENDING_MIX";break;case ry:e="ENVMAP_BLENDING_ADD";break}return e}c(uA,"generateEnvMapBlendingDefine");function hA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}c(hA,"generateCubeUVSize");function dA(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=aA(t),u=lA(t),h=cA(t),d=uA(t),f=hA(t),p=QT(t),_=eA(r),M=s.createProgram();let g,m,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Yr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Yr).join(`
`),m.length>0&&(m+=`
`)):(g=[O_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),m=[O_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?Xe.tonemapping_pars_fragment:"",t.toneMapping!==qi?ZT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,qT("linearToOutputTexel",t.outputColorSpace),JT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yr).join(`
`)),o=gh(o),o=I_(o,t),o=L_(o,t),a=gh(a),a=I_(a,t),a=L_(a,t),o=N_(o),a=N_(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Jg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=A+g+o,w=A+m+a,O=P_(s,s.VERTEX_SHADER,b),P=P_(s,s.FRAGMENT_SHADER,w);s.attachShader(M,O),s.attachShader(M,P),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function C(T){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(M).trim(),H=s.getShaderInfoLog(O).trim(),ee=s.getShaderInfoLog(P).trim();let le=!0,Y=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(le=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,O,P);else{const Q=D_(s,O,"vertex"),G=D_(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+B+`
`+Q+`
`+G)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(H===""||ee==="")&&(Y=!1);Y&&(T.diagnostics={runnable:le,programLog:B,vertexShader:{log:H,prefix:g},fragmentShader:{log:ee,prefix:m}})}s.deleteShader(O),s.deleteShader(P),L=new yr(s,M),ie=tA(s,M)}c(C,"onFirstUse");let L;this.getUniforms=function(){return L===void 0&&C(this),L};let ie;this.getAttributes=function(){return ie===void 0&&C(this),ie};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(M,XT)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$T++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=O,this.fragmentShader=P,this}c(dA,"WebGLProgram");let fA=0;const lp=class lp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new vh(e),t.set(e,i)),i}};c(lp,"WebGLShaderCache");let _h=lp;const cp=class cp{constructor(e){this.id=fA++,this.code=e,this.usedTimes=0}};c(cp,"WebGLShaderStage");let vh=cp;function pA(n,e,t,i,s,r,o){const a=new bo,l=new _h,u=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,p=s.vertexTextures;let _=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return u.add(y),y===0?"uv":`uv${y}`}c(g,"getChannel");function m(y,T,B,H,ee){const le=H.fog,Y=ee.geometry,Q=y.isMeshStandardMaterial?H.environment:null,G=(y.isMeshStandardMaterial?t:e).get(y.envMap||Q),ge=G&&G.mapping===$l?G.image.height:null,xe=M[y.type];y.precision!==null&&(_=s.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const Ae=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,je=Ae!==void 0?Ae.length:0;let nt=0;Y.morphAttributes.position!==void 0&&(nt=1),Y.morphAttributes.normal!==void 0&&(nt=2),Y.morphAttributes.color!==void 0&&(nt=3);let ne,de,_e,Me;if(xe){const hn=Qn[xe];ne=hn.vertexShader,de=hn.fragmentShader}else ne=y.vertexShader,de=y.fragmentShader,l.update(y),_e=l.getVertexShaderID(y),Me=l.getFragmentShaderID(y);const ke=n.getRenderTarget(),Ue=ee.isInstancedMesh===!0,Ye=ee.isBatchedMesh===!0,st=!!y.map,Je=!!y.matcap,x=!!G,I=!!y.aoMap,V=!!y.lightMap,q=!!y.bumpMap,W=!!y.normalMap,se=!!y.displacementMap,te=!!y.emissiveMap,S=!!y.metalnessMap,v=!!y.roughnessMap,R=y.anisotropy>0,U=y.clearcoat>0,j=y.dispersion>0,k=y.iridescence>0,ce=y.sheen>0,re=y.transmission>0,he=R&&!!y.anisotropyMap,Pe=U&&!!y.clearcoatMap,oe=U&&!!y.clearcoatNormalMap,pe=U&&!!y.clearcoatRoughnessMap,Oe=k&&!!y.iridescenceMap,Fe=k&&!!y.iridescenceThicknessMap,ye=ce&&!!y.sheenColorMap,Ke=ce&&!!y.sheenRoughnessMap,De=!!y.specularMap,qe=!!y.specularColorMap,N=!!y.specularIntensityMap,Ee=re&&!!y.transmissionMap,Z=re&&!!y.thicknessMap,ae=!!y.gradientMap,Se=!!y.alphaMap,Te=y.alphaTest>0,et=!!y.alphaHash,Et=!!y.extensions;let un=qi;y.toneMapped&&(ke===null||ke.isXRRenderTarget===!0)&&(un=n.toneMapping);const rt={shaderID:xe,shaderType:y.type,shaderName:y.name,vertexShader:ne,fragmentShader:de,defines:y.defines,customVertexShaderID:_e,customFragmentShaderID:Me,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:Ye,batchingColor:Ye&&ee._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&ee.instanceColor!==null,instancingMorph:Ue&&ee.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ke===null?n.outputColorSpace:ke.isXRRenderTarget===!0?ke.texture.colorSpace:Yt,alphaToCoverage:!!y.alphaToCoverage,map:st,matcap:Je,envMap:x,envMapMode:x&&G.mapping,envMapCubeUVHeight:ge,aoMap:I,lightMap:V,bumpMap:q,normalMap:W,displacementMap:p&&se,emissiveMap:te,normalMapObjectSpace:W&&y.normalMapType===_y,normalMapTangentSpace:W&&y.normalMapType===lf,metalnessMap:S,roughnessMap:v,anisotropy:R,anisotropyMap:he,clearcoat:U,clearcoatMap:Pe,clearcoatNormalMap:oe,clearcoatRoughnessMap:pe,dispersion:j,iridescence:k,iridescenceMap:Oe,iridescenceThicknessMap:Fe,sheen:ce,sheenColorMap:ye,sheenRoughnessMap:Ke,specularMap:De,specularColorMap:qe,specularIntensityMap:N,transmission:re,transmissionMap:Ee,thicknessMap:Z,gradientMap:ae,opaque:y.transparent===!1&&y.blending===vr&&y.alphaToCoverage===!1,alphaMap:Se,alphaTest:Te,alphaHash:et,combine:y.combine,mapUv:st&&g(y.map.channel),aoMapUv:I&&g(y.aoMap.channel),lightMapUv:V&&g(y.lightMap.channel),bumpMapUv:q&&g(y.bumpMap.channel),normalMapUv:W&&g(y.normalMap.channel),displacementMapUv:se&&g(y.displacementMap.channel),emissiveMapUv:te&&g(y.emissiveMap.channel),metalnessMapUv:S&&g(y.metalnessMap.channel),roughnessMapUv:v&&g(y.roughnessMap.channel),anisotropyMapUv:he&&g(y.anisotropyMap.channel),clearcoatMapUv:Pe&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&g(y.sheenRoughnessMap.channel),specularMapUv:De&&g(y.specularMap.channel),specularColorMapUv:qe&&g(y.specularColorMap.channel),specularIntensityMapUv:N&&g(y.specularIntensityMap.channel),transmissionMapUv:Ee&&g(y.transmissionMap.channel),thicknessMapUv:Z&&g(y.thicknessMap.channel),alphaMapUv:Se&&g(y.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(W||R),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!Y.attributes.uv&&(st||Se),fog:!!le,useFog:y.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:ee.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:je,morphTextureStride:nt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:un,decodeVideoTexture:st&&y.map.isVideoTexture===!0&&it.getTransfer(y.map.colorSpace)===gt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===cn,flipSided:y.side===mn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Et&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&y.extensions.multiDraw===!0||Ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return rt.vertexUv1s=u.has(1),rt.vertexUv2s=u.has(2),rt.vertexUv3s=u.has(3),u.clear(),rt}c(m,"getParameters");function A(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const B in y.defines)T.push(B),T.push(y.defines[B]);return y.isRawShaderMaterial===!1&&(b(T,y),w(T,y),T.push(n.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}c(A,"getProgramCacheKey");function b(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}c(b,"getProgramCacheKeyParameters");function w(y,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),y.push(a.mask)}c(w,"getProgramCacheKeyBooleans");function O(y){const T=M[y.type];let B;if(T){const H=Qn[T];B=Ls.clone(H.uniforms)}else B=y.uniforms;return B}c(O,"getUniforms");function P(y,T){let B;for(let H=0,ee=h.length;H<ee;H++){const le=h[H];if(le.cacheKey===T){B=le,++B.usedTimes;break}}return B===void 0&&(B=new dA(n,T,y,r),h.push(B)),B}c(P,"acquireProgram");function C(y){if(--y.usedTimes===0){const T=h.indexOf(y);h[T]=h[h.length-1],h.pop(),y.destroy()}}c(C,"releaseProgram");function L(y){l.remove(y)}c(L,"releaseShaderCache");function ie(){l.dispose()}return c(ie,"dispose"),{getParameters:m,getProgramCacheKey:A,getUniforms:O,acquireProgram:P,releaseProgram:C,releaseShaderCache:L,programs:h,dispose:ie}}c(pA,"WebGLPrograms");function mA(){let n=new WeakMap;function e(o){return n.has(o)}c(e,"has");function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}c(t,"get");function i(o){n.delete(o)}c(i,"remove");function s(o,a,l){n.get(o)[a]=l}c(s,"update");function r(){n=new WeakMap}return c(r,"dispose"),{has:e,get:t,remove:i,update:s,dispose:r}}c(mA,"WebGLProperties");function gA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}c(gA,"painterSortStable");function U_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}c(U_,"reversePainterSortStable");function F_(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}c(r,"init");function o(d,f,p,_,M,g){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:M,group:g},n[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=p,m.groupOrder=_,m.renderOrder=d.renderOrder,m.z=M,m.group=g),e++,m}c(o,"getNextRenderItem");function a(d,f,p,_,M,g){const m=o(d,f,p,_,M,g);p.transmission>0?i.push(m):p.transparent===!0?s.push(m):t.push(m)}c(a,"push");function l(d,f,p,_,M,g){const m=o(d,f,p,_,M,g);p.transmission>0?i.unshift(m):p.transparent===!0?s.unshift(m):t.unshift(m)}c(l,"unshift");function u(d,f){t.length>1&&t.sort(d||gA),i.length>1&&i.sort(f||U_),s.length>1&&s.sort(f||U_)}c(u,"sort");function h(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return c(h,"finish"),{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:u}}c(F_,"WebGLRenderList");function _A(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new F_,n.set(i,[o])):s>=r.length?(o=new F_,r.push(o)):o=r[s],o}c(e,"get");function t(){n=new WeakMap}return c(t,"dispose"),{get:e,dispose:t}}c(_A,"WebGLRenderLists");function vA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new we};break;case"SpotLight":t={position:new D,direction:new D,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}c(vA,"UniformsCache");function xA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}c(xA,"ShadowUniformsCache");let MA=0;function yA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}c(yA,"shadowCastingAndTexturingLightsFirst");function SA(n){const e=new vA,t=xA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new D);const s=new D,r=new Ge,o=new Ge;function a(u){let h=0,d=0,f=0;for(let ie=0;ie<9;ie++)i.probe[ie].set(0,0,0);let p=0,_=0,M=0,g=0,m=0,A=0,b=0,w=0,O=0,P=0,C=0;u.sort(yA);for(let ie=0,y=u.length;ie<y;ie++){const T=u[ie],B=T.color,H=T.intensity,ee=T.distance,le=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=B.r*H,d+=B.g*H,f+=B.b*H;else if(T.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(T.sh.coefficients[Y],H);C++}else if(T.isDirectionalLight){const Y=e.get(T);if(Y.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const Q=T.shadow,G=t.get(T);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=le,i.directionalShadowMatrix[p]=T.shadow.matrix,A++}i.directional[p]=Y,p++}else if(T.isSpotLight){const Y=e.get(T);Y.position.setFromMatrixPosition(T.matrixWorld),Y.color.copy(B).multiplyScalar(H),Y.distance=ee,Y.coneCos=Math.cos(T.angle),Y.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),Y.decay=T.decay,i.spot[M]=Y;const Q=T.shadow;if(T.map&&(i.spotLightMap[O]=T.map,O++,Q.updateMatrices(T),T.castShadow&&P++),i.spotLightMatrix[M]=Q.matrix,T.castShadow){const G=t.get(T);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,i.spotShadow[M]=G,i.spotShadowMap[M]=le,w++}M++}else if(T.isRectAreaLight){const Y=e.get(T);Y.color.copy(B).multiplyScalar(H),Y.halfWidth.set(T.width*.5,0,0),Y.halfHeight.set(0,T.height*.5,0),i.rectArea[g]=Y,g++}else if(T.isPointLight){const Y=e.get(T);if(Y.color.copy(T.color).multiplyScalar(T.intensity),Y.distance=T.distance,Y.decay=T.decay,T.castShadow){const Q=T.shadow,G=t.get(T);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,G.shadowCameraNear=Q.camera.near,G.shadowCameraFar=Q.camera.far,i.pointShadow[_]=G,i.pointShadowMap[_]=le,i.pointShadowMatrix[_]=T.shadow.matrix,b++}i.point[_]=Y,_++}else if(T.isHemisphereLight){const Y=e.get(T);Y.skyColor.copy(T.color).multiplyScalar(H),Y.groundColor.copy(T.groundColor).multiplyScalar(H),i.hemi[m]=Y,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==p||L.pointLength!==_||L.spotLength!==M||L.rectAreaLength!==g||L.hemiLength!==m||L.numDirectionalShadows!==A||L.numPointShadows!==b||L.numSpotShadows!==w||L.numSpotMaps!==O||L.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=g,i.point.length=_,i.hemi.length=m,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=w+O-P,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=C,L.directionalLength=p,L.pointLength=_,L.spotLength=M,L.rectAreaLength=g,L.hemiLength=m,L.numDirectionalShadows=A,L.numPointShadows=b,L.numSpotShadows=w,L.numSpotMaps=O,L.numLightProbes=C,i.version=MA++)}c(a,"setup");function l(u,h){let d=0,f=0,p=0,_=0,M=0;const g=h.matrixWorldInverse;for(let m=0,A=u.length;m<A;m++){const b=u[m];if(b.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),d++}else if(b.isSpotLight){const w=i.spot[p];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),p++}else if(b.isRectAreaLight){const w=i.rectArea[_];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(g),f++}else if(b.isHemisphereLight){const w=i.hemi[M];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(g),M++}}}return c(l,"setupView"),{setup:a,setupView:l,state:i}}c(SA,"WebGLLights");function B_(n){const e=new SA(n),t=[],i=[];function s(h){u.camera=h,t.length=0,i.length=0}c(s,"init");function r(h){t.push(h)}c(r,"pushLight");function o(h){i.push(h)}c(o,"pushShadow");function a(){e.setup(t)}c(a,"setupLights");function l(h){e.setupView(t,h)}c(l,"setupLightsView");const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}c(B_,"WebGLRenderState");function bA(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new B_(n),e.set(s,[a])):r>=o.length?(a=new B_(n),o.push(a)):a=o[r],a}c(t,"get");function i(){e=new WeakMap}return c(i,"dispose"),{get:t,dispose:i}}c(bA,"WebGLRenderStates");const up=class up extends En{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};c(up,"MeshDepthMaterial");let Qa=up;const hp=class hp extends En{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};c(hp,"MeshDistanceMaterial");let xh=hp;const EA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function AA(n,e,t){let i=new Eo;const s=new ve,r=new ve,o=new at,a=new Qa({depthPacking:G0}),l=new xh,u={},h=t.maxTextureSize,d={[ii]:mn,[mn]:ii,[cn]:cn},f=new yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:EA,fragmentShader:TA}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new en;_.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new It(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=w0;let m=this.type;this.render=function(P,C,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;const ie=n.getRenderTarget(),y=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Ft),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const H=m!==fi&&this.type===fi,ee=m===fi&&this.type!==fi;for(let le=0,Y=P.length;le<Y;le++){const Q=P[le],G=Q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ge=G.getFrameExtents();if(s.multiply(ge),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ge.x),s.x=r.x*ge.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ge.y),s.y=r.y*ge.y,G.mapSize.y=r.y)),G.map===null||H===!0||ee===!0){const Ae=this.type!==fi?{minFilter:$t,magFilter:$t}:{};G.map!==null&&G.map.dispose(),G.map=new Pt(s.x,s.y,Ae),G.map.texture.name=Q.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const xe=G.getViewportCount();for(let Ae=0;Ae<xe;Ae++){const je=G.getViewport(Ae);o.set(r.x*je.x,r.y*je.y,r.x*je.z,r.y*je.w),B.viewport(o),G.updateMatrices(Q,Ae),i=G.getFrustum(),w(C,L,G.camera,Q,this.type)}G.isPointLightShadow!==!0&&this.type===fi&&A(G,L),G.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(ie,y,T)};function A(P,C){const L=e.update(M);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Pt(s.x,s.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(C,null,L,f,M,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(C,null,L,p,M,null)}c(A,"VSMPass");function b(P,C,L,ie){let y=null;const T=L.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(T!==void 0)y=T;else if(y=L.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const B=y.uuid,H=C.uuid;let ee=u[B];ee===void 0&&(ee={},u[B]=ee);let le=ee[H];le===void 0&&(le=y.clone(),ee[H]=le,C.addEventListener("dispose",O)),y=le}if(y.visible=C.visible,y.wireframe=C.wireframe,ie===fi?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:d[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const B=n.properties.get(y);B.light=L}return y}c(b,"getDepthMaterial");function w(P,C,L,ie,y){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===fi)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,P.matrixWorld);const H=e.update(P),ee=P.material;if(Array.isArray(ee)){const le=H.groups;for(let Y=0,Q=le.length;Y<Q;Y++){const G=le[Y],ge=ee[G.materialIndex];if(ge&&ge.visible){const xe=b(P,ge,ie,y);P.onBeforeShadow(n,P,C,L,H,xe,G),n.renderBufferDirect(L,null,H,xe,P,G),P.onAfterShadow(n,P,C,L,H,xe,G)}}}else if(ee.visible){const le=b(P,ee,ie,y);P.onBeforeShadow(n,P,C,L,H,le,null),n.renderBufferDirect(L,null,H,le,P,null),P.onAfterShadow(n,P,C,L,H,le,null)}}const B=P.children;for(let H=0,ee=B.length;H<ee;H++)w(B[H],C,L,ie,y)}c(w,"renderObject");function O(P){P.target.removeEventListener("dispose",O);for(const L in u){const ie=u[L],y=P.target.uuid;y in ie&&(ie[y].dispose(),delete ie[y])}}c(O,"onMaterialDispose")}c(AA,"WebGLShadowMap");const wA={[Tu]:Au,[wu]:Pu,[Cu]:Du,[br]:Ru,[Au]:Tu,[Pu]:wu,[Du]:Cu,[Ru]:br};function CA(n){function e(){let N=!1;const Ee=new at;let Z=null;const ae=new at(0,0,0,0);return{setMask:function(Se){Z!==Se&&!N&&(n.colorMask(Se,Se,Se,Se),Z=Se)},setLocked:function(Se){N=Se},setClear:function(Se,Te,et,Et,un){un===!0&&(Se*=Et,Te*=Et,et*=Et),Ee.set(Se,Te,et,Et),ae.equals(Ee)===!1&&(n.clearColor(Se,Te,et,Et),ae.copy(Ee))},reset:function(){N=!1,Z=null,ae.set(-1,0,0,0)}}}c(e,"ColorBuffer");function t(){let N=!1,Ee=!1,Z=null,ae=null,Se=null;return{setReversed:function(Te){Ee=Te},setTest:function(Te){Te?_e(n.DEPTH_TEST):Me(n.DEPTH_TEST)},setMask:function(Te){Z!==Te&&!N&&(n.depthMask(Te),Z=Te)},setFunc:function(Te){if(Ee&&(Te=wA[Te]),ae!==Te){switch(Te){case Tu:n.depthFunc(n.NEVER);break;case Au:n.depthFunc(n.ALWAYS);break;case wu:n.depthFunc(n.LESS);break;case br:n.depthFunc(n.LEQUAL);break;case Cu:n.depthFunc(n.EQUAL);break;case Ru:n.depthFunc(n.GEQUAL);break;case Pu:n.depthFunc(n.GREATER);break;case Du:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ae=Te}},setLocked:function(Te){N=Te},setClear:function(Te){Se!==Te&&(n.clearDepth(Te),Se=Te)},reset:function(){N=!1,Z=null,ae=null,Se=null}}}c(t,"DepthBuffer");function i(){let N=!1,Ee=null,Z=null,ae=null,Se=null,Te=null,et=null,Et=null,un=null;return{setTest:function(rt){N||(rt?_e(n.STENCIL_TEST):Me(n.STENCIL_TEST))},setMask:function(rt){Ee!==rt&&!N&&(n.stencilMask(rt),Ee=rt)},setFunc:function(rt,hn,ri){(Z!==rt||ae!==hn||Se!==ri)&&(n.stencilFunc(rt,hn,ri),Z=rt,ae=hn,Se=ri)},setOp:function(rt,hn,ri){(Te!==rt||et!==hn||Et!==ri)&&(n.stencilOp(rt,hn,ri),Te=rt,et=hn,Et=ri)},setLocked:function(rt){N=rt},setClear:function(rt){un!==rt&&(n.clearStencil(rt),un=rt)},reset:function(){N=!1,Ee=null,Z=null,ae=null,Se=null,Te=null,et=null,Et=null,un=null}}}c(i,"StencilBuffer");const s=new e,r=new t,o=new i,a=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],p=null,_=!1,M=null,g=null,m=null,A=null,b=null,w=null,O=null,P=new we(0,0,0),C=0,L=!1,ie=null,y=null,T=null,B=null,H=null;const ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,Y=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(Q)[1]),le=Y>=1):Q.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),le=Y>=2);let G=null,ge={};const xe=n.getParameter(n.SCISSOR_BOX),Ae=n.getParameter(n.VIEWPORT),je=new at().fromArray(xe),nt=new at().fromArray(Ae);function ne(N,Ee,Z,ae){const Se=new Uint8Array(4),Te=n.createTexture();n.bindTexture(N,Te),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let et=0;et<Z;et++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(Ee,0,n.RGBA,1,1,ae,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(Ee+et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return Te}c(ne,"createTexture");const de={};de[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),_e(n.DEPTH_TEST),r.setFunc(br),V(!1),q(Wg),_e(n.CULL_FACE),x(Ft);function _e(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}c(_e,"enable");function Me(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}c(Me,"disable");function ke(N,Ee){return h[N]!==Ee?(n.bindFramebuffer(N,Ee),h[N]=Ee,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Ee),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Ee),!0):!1}c(ke,"bindFramebuffer");function Ue(N,Ee){let Z=f,ae=!1;if(N){Z=d.get(Ee),Z===void 0&&(Z=[],d.set(Ee,Z));const Se=N.textures;if(Z.length!==Se.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let Te=0,et=Se.length;Te<et;Te++)Z[Te]=n.COLOR_ATTACHMENT0+Te;Z.length=Se.length,ae=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,ae=!0);ae&&n.drawBuffers(Z)}c(Ue,"drawBuffers");function Ye(N){return p!==N?(n.useProgram(N),p=N,!0):!1}c(Ye,"useProgram");const st={[mi]:n.FUNC_ADD,[WM]:n.FUNC_SUBTRACT,[jM]:n.FUNC_REVERSE_SUBTRACT};st[XM]=n.MIN,st[$M]=n.MAX;const Je={[Su]:n.ZERO,[YM]:n.ONE,[KM]:n.SRC_COLOR,[bu]:n.SRC_ALPHA,[QM]:n.SRC_ALPHA_SATURATE,[R0]:n.DST_COLOR,[C0]:n.DST_ALPHA,[qM]:n.ONE_MINUS_SRC_COLOR,[Eu]:n.ONE_MINUS_SRC_ALPHA,[JM]:n.ONE_MINUS_DST_COLOR,[ZM]:n.ONE_MINUS_DST_ALPHA,[ey]:n.CONSTANT_COLOR,[ty]:n.ONE_MINUS_CONSTANT_COLOR,[ny]:n.CONSTANT_ALPHA,[iy]:n.ONE_MINUS_CONSTANT_ALPHA};function x(N,Ee,Z,ae,Se,Te,et,Et,un,rt){if(N===Ft){_===!0&&(Me(n.BLEND),_=!1);return}if(_===!1&&(_e(n.BLEND),_=!0),N!==yu){if(N!==M||rt!==L){if((g!==mi||b!==mi)&&(n.blendEquation(n.FUNC_ADD),g=mi,b=mi),rt)switch(N){case vr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mu:n.blendFunc(n.ONE,n.ONE);break;case jg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xg:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case vr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case jg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xg:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}m=null,A=null,w=null,O=null,P.set(0,0,0),C=0,M=N,L=rt}return}Se=Se||Ee,Te=Te||Z,et=et||ae,(Ee!==g||Se!==b)&&(n.blendEquationSeparate(st[Ee],st[Se]),g=Ee,b=Se),(Z!==m||ae!==A||Te!==w||et!==O)&&(n.blendFuncSeparate(Je[Z],Je[ae],Je[Te],Je[et]),m=Z,A=ae,w=Te,O=et),(Et.equals(P)===!1||un!==C)&&(n.blendColor(Et.r,Et.g,Et.b,un),P.copy(Et),C=un),M=N,L=!1}c(x,"setBlending");function I(N,Ee){N.side===cn?Me(n.CULL_FACE):_e(n.CULL_FACE);let Z=N.side===mn;Ee&&(Z=!Z),V(Z),N.blending===vr&&N.transparent===!1?x(Ft):x(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),s.setMask(N.colorWrite);const ae=N.stencilWrite;o.setTest(ae),ae&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),se(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?_e(n.SAMPLE_ALPHA_TO_COVERAGE):Me(n.SAMPLE_ALPHA_TO_COVERAGE)}c(I,"setMaterial");function V(N){ie!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),ie=N)}c(V,"setFlipSided");function q(N){N!==VM?(_e(n.CULL_FACE),N!==y&&(N===Wg?n.cullFace(n.BACK):N===HM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Me(n.CULL_FACE),y=N}c(q,"setCullFace");function W(N){N!==T&&(le&&n.lineWidth(N),T=N)}c(W,"setLineWidth");function se(N,Ee,Z){N?(_e(n.POLYGON_OFFSET_FILL),(B!==Ee||H!==Z)&&(n.polygonOffset(Ee,Z),B=Ee,H=Z)):Me(n.POLYGON_OFFSET_FILL)}c(se,"setPolygonOffset");function te(N){N?_e(n.SCISSOR_TEST):Me(n.SCISSOR_TEST)}c(te,"setScissorTest");function S(N){N===void 0&&(N=n.TEXTURE0+ee-1),G!==N&&(n.activeTexture(N),G=N)}c(S,"activeTexture");function v(N,Ee,Z){Z===void 0&&(G===null?Z=n.TEXTURE0+ee-1:Z=G);let ae=ge[Z];ae===void 0&&(ae={type:void 0,texture:void 0},ge[Z]=ae),(ae.type!==N||ae.texture!==Ee)&&(G!==Z&&(n.activeTexture(Z),G=Z),n.bindTexture(N,Ee||de[N]),ae.type=N,ae.texture=Ee)}c(v,"bindTexture");function R(){const N=ge[G];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}c(R,"unbindTexture");function U(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}c(U,"compressedTexImage2D");function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}c(j,"compressedTexImage3D");function k(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}c(k,"texSubImage2D");function ce(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}c(ce,"texSubImage3D");function re(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}c(re,"compressedTexSubImage2D");function he(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}c(he,"compressedTexSubImage3D");function Pe(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}c(Pe,"texStorage2D");function oe(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}c(oe,"texStorage3D");function pe(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}c(pe,"texImage2D");function Oe(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}c(Oe,"texImage3D");function Fe(N){je.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),je.copy(N))}c(Fe,"scissor");function ye(N){nt.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),nt.copy(N))}c(ye,"viewport");function Ke(N,Ee){let Z=l.get(Ee);Z===void 0&&(Z=new WeakMap,l.set(Ee,Z));let ae=Z.get(N);ae===void 0&&(ae=n.getUniformBlockIndex(Ee,N.name),Z.set(N,ae))}c(Ke,"updateUBOMapping");function De(N,Ee){const ae=l.get(Ee).get(N);a.get(Ee)!==ae&&(n.uniformBlockBinding(Ee,ae,N.__bindingPointIndex),a.set(Ee,ae))}c(De,"uniformBlockBinding");function qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},G=null,ge={},h={},d=new WeakMap,f=[],p=null,_=!1,M=null,g=null,m=null,A=null,b=null,w=null,O=null,P=new we(0,0,0),C=0,L=!1,ie=null,y=null,T=null,B=null,H=null,je.set(0,0,n.canvas.width,n.canvas.height),nt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return c(qe,"reset"),{buffers:{color:s,depth:r,stencil:o},enable:_e,disable:Me,bindFramebuffer:ke,drawBuffers:Ue,useProgram:Ye,setBlending:x,setMaterial:I,setFlipSided:V,setCullFace:q,setLineWidth:W,setPolygonOffset:se,setScissorTest:te,activeTexture:S,bindTexture:v,unbindTexture:R,compressedTexImage2D:U,compressedTexImage3D:j,texImage2D:pe,texImage3D:Oe,updateUBOMapping:Ke,uniformBlockBinding:De,texStorage2D:Pe,texStorage3D:oe,texSubImage2D:k,texSubImage3D:ce,compressedTexSubImage2D:re,compressedTexSubImage3D:he,scissor:Fe,viewport:ye,reset:qe}}c(CA,"WebGLState");function z_(n,e,t,i){const s=RA(i);switch(t){case U0:return n*e;case B0:return n*e;case z0:return n*e*2;case sf:return n*e/s.components*s.byteLength;case rf:return n*e/s.components*s.byteLength;case k0:return n*e*2/s.components*s.byteLength;case of:return n*e*2/s.components*s.byteLength;case F0:return n*e*3/s.components*s.byteLength;case In:return n*e*4/s.components*s.byteLength;case af:return n*e*4/s.components*s.byteLength;case Ea:case Ta:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Aa:case wa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ou:case Fu:return Math.max(n,16)*Math.max(e,8)/4;case Nu:case Uu:return Math.max(n,8)*Math.max(e,8)/2;case Bu:case zu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ku:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Gu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Wu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ju:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Xu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case $u:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Yu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ku:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case qu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Zu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ju:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Qu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case eh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ca:case th:case nh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case V0:case ih:return Math.ceil(n/4)*Math.ceil(e/4)*8;case sh:case rh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}c(z_,"getByteLength");function RA(n){switch(n){case Mi:case L0:return{byteLength:1,components:1};case xo:case N0:case pn:return{byteLength:2,components:1};case tf:case nf:return{byteLength:2,components:4};case Fs:case ef:case jn:return{byteLength:4,components:1};case O0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}c(RA,"getTextureTypeByteLength");function PA(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ve,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,v){return p?new OffscreenCanvas(S,v):So("canvas")}c(_,"createCanvas");function M(S,v,R){let U=1;const j=te(S);if((j.width>R||j.height>R)&&(U=R/Math.max(j.width,j.height)),U<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const k=Math.floor(U*j.width),ce=Math.floor(U*j.height);d===void 0&&(d=_(k,ce));const re=v?_(k,ce):d;return re.width=k,re.height=ce,re.getContext("2d").drawImage(S,0,0,k,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+k+"x"+ce+")."),re}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),S;return S}c(M,"resizeImage");function g(S){return S.generateMipmaps&&S.minFilter!==$t&&S.minFilter!==Sn}c(g,"textureNeedsGenerateMipmaps");function m(S){n.generateMipmap(S)}c(m,"generateMipmap");function A(S,v,R,U,j=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let k=v;if(v===n.RED&&(R===n.FLOAT&&(k=n.R32F),R===n.HALF_FLOAT&&(k=n.R16F),R===n.UNSIGNED_BYTE&&(k=n.R8)),v===n.RED_INTEGER&&(R===n.UNSIGNED_BYTE&&(k=n.R8UI),R===n.UNSIGNED_SHORT&&(k=n.R16UI),R===n.UNSIGNED_INT&&(k=n.R32UI),R===n.BYTE&&(k=n.R8I),R===n.SHORT&&(k=n.R16I),R===n.INT&&(k=n.R32I)),v===n.RG&&(R===n.FLOAT&&(k=n.RG32F),R===n.HALF_FLOAT&&(k=n.RG16F),R===n.UNSIGNED_BYTE&&(k=n.RG8)),v===n.RG_INTEGER&&(R===n.UNSIGNED_BYTE&&(k=n.RG8UI),R===n.UNSIGNED_SHORT&&(k=n.RG16UI),R===n.UNSIGNED_INT&&(k=n.RG32UI),R===n.BYTE&&(k=n.RG8I),R===n.SHORT&&(k=n.RG16I),R===n.INT&&(k=n.RG32I)),v===n.RGB_INTEGER&&(R===n.UNSIGNED_BYTE&&(k=n.RGB8UI),R===n.UNSIGNED_SHORT&&(k=n.RGB16UI),R===n.UNSIGNED_INT&&(k=n.RGB32UI),R===n.BYTE&&(k=n.RGB8I),R===n.SHORT&&(k=n.RGB16I),R===n.INT&&(k=n.RGB32I)),v===n.RGBA_INTEGER&&(R===n.UNSIGNED_BYTE&&(k=n.RGBA8UI),R===n.UNSIGNED_SHORT&&(k=n.RGBA16UI),R===n.UNSIGNED_INT&&(k=n.RGBA32UI),R===n.BYTE&&(k=n.RGBA8I),R===n.SHORT&&(k=n.RGBA16I),R===n.INT&&(k=n.RGBA32I)),v===n.RGB&&R===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),v===n.RGBA){const ce=j?Va:it.getTransfer(U);R===n.FLOAT&&(k=n.RGBA32F),R===n.HALF_FLOAT&&(k=n.RGBA16F),R===n.UNSIGNED_BYTE&&(k=ce===gt?n.SRGB8_ALPHA8:n.RGBA8),R===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),R===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&e.get("EXT_color_buffer_float"),k}c(A,"getInternalFormat");function b(S,v){let R;return S?v===null||v===Fs||v===Bs?R=n.DEPTH24_STENCIL8:v===jn?R=n.DEPTH32F_STENCIL8:v===xo&&(R=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Fs||v===Bs?R=n.DEPTH_COMPONENT24:v===jn?R=n.DEPTH_COMPONENT32F:v===xo&&(R=n.DEPTH_COMPONENT16),R}c(b,"getInternalDepthFormat");function w(S,v){return g(S)===!0||S.isFramebufferTexture&&S.minFilter!==$t&&S.minFilter!==Sn?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}c(w,"getMipLevels");function O(S){const v=S.target;v.removeEventListener("dispose",O),C(v),v.isVideoTexture&&h.delete(v)}c(O,"onTextureDispose");function P(S){const v=S.target;v.removeEventListener("dispose",P),ie(v)}c(P,"onRenderTargetDispose");function C(S){const v=i.get(S);if(v.__webglInit===void 0)return;const R=S.source,U=f.get(R);if(U){const j=U[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&L(S),Object.keys(U).length===0&&f.delete(R)}i.remove(S)}c(C,"deallocateTexture");function L(S){const v=i.get(S);n.deleteTexture(v.__webglTexture);const R=S.source,U=f.get(R);delete U[v.__cacheKey],o.memory.textures--}c(L,"deleteTexture");function ie(S){const v=i.get(S);if(S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(v.__webglFramebuffer[U]))for(let j=0;j<v.__webglFramebuffer[U].length;j++)n.deleteFramebuffer(v.__webglFramebuffer[U][j]);else n.deleteFramebuffer(v.__webglFramebuffer[U]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[U])}else{if(Array.isArray(v.__webglFramebuffer))for(let U=0;U<v.__webglFramebuffer.length;U++)n.deleteFramebuffer(v.__webglFramebuffer[U]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let U=0;U<v.__webglColorRenderbuffer.length;U++)v.__webglColorRenderbuffer[U]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[U]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const R=S.textures;for(let U=0,j=R.length;U<j;U++){const k=i.get(R[U]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),o.memory.textures--),i.remove(R[U])}i.remove(S)}c(ie,"deallocateRenderTarget");let y=0;function T(){y=0}c(T,"resetTextureUnits");function B(){const S=y;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),y+=1,S}c(B,"allocateTextureUnit");function H(S){const v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}c(H,"getTextureCacheKey");function ee(S,v){const R=i.get(S);if(S.isVideoTexture&&W(S),S.isRenderTargetTexture===!1&&S.version>0&&R.__version!==S.version){const U=S.image;if(U===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(R,S,v);return}}t.bindTexture(n.TEXTURE_2D,R.__webglTexture,n.TEXTURE0+v)}c(ee,"setTexture2D");function le(S,v){const R=i.get(S);if(S.version>0&&R.__version!==S.version){nt(R,S,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,R.__webglTexture,n.TEXTURE0+v)}c(le,"setTexture2DArray");function Y(S,v){const R=i.get(S);if(S.version>0&&R.__version!==S.version){nt(R,S,v);return}t.bindTexture(n.TEXTURE_3D,R.__webglTexture,n.TEXTURE0+v)}c(Y,"setTexture3D");function Q(S,v){const R=i.get(S);if(S.version>0&&R.__version!==S.version){ne(R,S,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+v)}c(Q,"setTextureCube");const G={[Ar]:n.REPEAT,[ji]:n.CLAMP_TO_EDGE,[ka]:n.MIRRORED_REPEAT},ge={[$t]:n.NEAREST,[I0]:n.NEAREST_MIPMAP_NEAREST,[$r]:n.NEAREST_MIPMAP_LINEAR,[Sn]:n.LINEAR,[ba]:n.LINEAR_MIPMAP_NEAREST,[gi]:n.LINEAR_MIPMAP_LINEAR},xe={[vy]:n.NEVER,[Ey]:n.ALWAYS,[xy]:n.LESS,[W0]:n.LEQUAL,[My]:n.EQUAL,[by]:n.GEQUAL,[yy]:n.GREATER,[Sy]:n.NOTEQUAL};function Ae(S,v){if(v.type===jn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Sn||v.magFilter===ba||v.magFilter===$r||v.magFilter===gi||v.minFilter===Sn||v.minFilter===ba||v.minFilter===$r||v.minFilter===gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,G[v.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,G[v.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,G[v.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,ge[v.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,ge[v.minFilter]),v.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,xe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===$t||v.minFilter!==$r&&v.minFilter!==gi||v.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const R=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}c(Ae,"setTextureParameters");function je(S,v){let R=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",O));const U=v.source;let j=f.get(U);j===void 0&&(j={},f.set(U,j));const k=H(v);if(k!==S.__cacheKey){j[k]===void 0&&(j[k]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,R=!0),j[k].usedTimes++;const ce=j[S.__cacheKey];ce!==void 0&&(j[S.__cacheKey].usedTimes--,ce.usedTimes===0&&L(v)),S.__cacheKey=k,S.__webglTexture=j[k].texture}return R}c(je,"initTexture");function nt(S,v,R){let U=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(U=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(U=n.TEXTURE_3D);const j=je(S,v),k=v.source;t.bindTexture(U,S.__webglTexture,n.TEXTURE0+R);const ce=i.get(k);if(k.version!==ce.__version||j===!0){t.activeTexture(n.TEXTURE0+R);const re=it.getPrimaries(it.workingColorSpace),he=v.colorSpace===Wi?null:it.getPrimaries(v.colorSpace),Pe=v.colorSpace===Wi||re===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let oe=M(v.image,!1,s.maxTextureSize);oe=se(v,oe);const pe=r.convert(v.format,v.colorSpace),Oe=r.convert(v.type);let Fe=A(v.internalFormat,pe,Oe,v.colorSpace,v.isVideoTexture);Ae(U,v);let ye;const Ke=v.mipmaps,De=v.isVideoTexture!==!0,qe=ce.__version===void 0||j===!0,N=k.dataReady,Ee=w(v,oe);if(v.isDepthTexture)Fe=b(v.format===zs,v.type),qe&&(De?t.texStorage2D(n.TEXTURE_2D,1,Fe,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Fe,oe.width,oe.height,0,pe,Oe,null));else if(v.isDataTexture)if(Ke.length>0){De&&qe&&t.texStorage2D(n.TEXTURE_2D,Ee,Fe,Ke[0].width,Ke[0].height);for(let Z=0,ae=Ke.length;Z<ae;Z++)ye=Ke[Z],De?N&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,ye.width,ye.height,pe,Oe,ye.data):t.texImage2D(n.TEXTURE_2D,Z,Fe,ye.width,ye.height,0,pe,Oe,ye.data);v.generateMipmaps=!1}else De?(qe&&t.texStorage2D(n.TEXTURE_2D,Ee,Fe,oe.width,oe.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe.width,oe.height,pe,Oe,oe.data)):t.texImage2D(n.TEXTURE_2D,0,Fe,oe.width,oe.height,0,pe,Oe,oe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){De&&qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Fe,Ke[0].width,Ke[0].height,oe.depth);for(let Z=0,ae=Ke.length;Z<ae;Z++)if(ye=Ke[Z],v.format!==In)if(pe!==null)if(De){if(N)if(v.layerUpdates.size>0){const Se=z_(ye.width,ye.height,v.format,v.type);for(const Te of v.layerUpdates){const et=ye.data.subarray(Te*Se/ye.data.BYTES_PER_ELEMENT,(Te+1)*Se/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,Te,ye.width,ye.height,1,pe,et,0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,ye.width,ye.height,oe.depth,pe,ye.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,Fe,ye.width,ye.height,oe.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,ye.width,ye.height,oe.depth,pe,Oe,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Z,Fe,ye.width,ye.height,oe.depth,0,pe,Oe,ye.data)}else{De&&qe&&t.texStorage2D(n.TEXTURE_2D,Ee,Fe,Ke[0].width,Ke[0].height);for(let Z=0,ae=Ke.length;Z<ae;Z++)ye=Ke[Z],v.format!==In?pe!==null?De?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,ye.width,ye.height,pe,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,Z,Fe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?N&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,ye.width,ye.height,pe,Oe,ye.data):t.texImage2D(n.TEXTURE_2D,Z,Fe,ye.width,ye.height,0,pe,Oe,ye.data)}else if(v.isDataArrayTexture)if(De){if(qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Fe,oe.width,oe.height,oe.depth),N)if(v.layerUpdates.size>0){const Z=z_(oe.width,oe.height,v.format,v.type);for(const ae of v.layerUpdates){const Se=oe.data.subarray(ae*Z/oe.data.BYTES_PER_ELEMENT,(ae+1)*Z/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ae,oe.width,oe.height,1,pe,Oe,Se)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,pe,Oe,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Fe,oe.width,oe.height,oe.depth,0,pe,Oe,oe.data);else if(v.isData3DTexture)De?(qe&&t.texStorage3D(n.TEXTURE_3D,Ee,Fe,oe.width,oe.height,oe.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,pe,Oe,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Fe,oe.width,oe.height,oe.depth,0,pe,Oe,oe.data);else if(v.isFramebufferTexture){if(qe)if(De)t.texStorage2D(n.TEXTURE_2D,Ee,Fe,oe.width,oe.height);else{let Z=oe.width,ae=oe.height;for(let Se=0;Se<Ee;Se++)t.texImage2D(n.TEXTURE_2D,Se,Fe,Z,ae,0,pe,Oe,null),Z>>=1,ae>>=1}}else if(Ke.length>0){if(De&&qe){const Z=te(Ke[0]);t.texStorage2D(n.TEXTURE_2D,Ee,Fe,Z.width,Z.height)}for(let Z=0,ae=Ke.length;Z<ae;Z++)ye=Ke[Z],De?N&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,pe,Oe,ye):t.texImage2D(n.TEXTURE_2D,Z,Fe,pe,Oe,ye);v.generateMipmaps=!1}else if(De){if(qe){const Z=te(oe);t.texStorage2D(n.TEXTURE_2D,Ee,Fe,Z.width,Z.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,Oe,oe)}else t.texImage2D(n.TEXTURE_2D,0,Fe,pe,Oe,oe);g(v)&&m(U),ce.__version=k.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}c(nt,"uploadTexture");function ne(S,v,R){if(v.image.length!==6)return;const U=je(S,v),j=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+R);const k=i.get(j);if(j.version!==k.__version||U===!0){t.activeTexture(n.TEXTURE0+R);const ce=it.getPrimaries(it.workingColorSpace),re=v.colorSpace===Wi?null:it.getPrimaries(v.colorSpace),he=v.colorSpace===Wi||ce===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Pe=v.isCompressedTexture||v.image[0].isCompressedTexture,oe=v.image[0]&&v.image[0].isDataTexture,pe=[];for(let ae=0;ae<6;ae++)!Pe&&!oe?pe[ae]=M(v.image[ae],!0,s.maxCubemapSize):pe[ae]=oe?v.image[ae].image:v.image[ae],pe[ae]=se(v,pe[ae]);const Oe=pe[0],Fe=r.convert(v.format,v.colorSpace),ye=r.convert(v.type),Ke=A(v.internalFormat,Fe,ye,v.colorSpace),De=v.isVideoTexture!==!0,qe=k.__version===void 0||U===!0,N=j.dataReady;let Ee=w(v,Oe);Ae(n.TEXTURE_CUBE_MAP,v);let Z;if(Pe){De&&qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Ke,Oe.width,Oe.height);for(let ae=0;ae<6;ae++){Z=pe[ae].mipmaps;for(let Se=0;Se<Z.length;Se++){const Te=Z[Se];v.format!==In?Fe!==null?De?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se,0,0,Te.width,Te.height,Fe,Te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se,Ke,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se,0,0,Te.width,Te.height,Fe,ye,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se,Ke,Te.width,Te.height,0,Fe,ye,Te.data)}}}else{if(Z=v.mipmaps,De&&qe){Z.length>0&&Ee++;const ae=te(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Ke,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(oe){De?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,pe[ae].width,pe[ae].height,Fe,ye,pe[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ke,pe[ae].width,pe[ae].height,0,Fe,ye,pe[ae].data);for(let Se=0;Se<Z.length;Se++){const et=Z[Se].image[ae].image;De?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se+1,0,0,et.width,et.height,Fe,ye,et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se+1,Ke,et.width,et.height,0,Fe,ye,et.data)}}else{De?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Fe,ye,pe[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ke,Fe,ye,pe[ae]);for(let Se=0;Se<Z.length;Se++){const Te=Z[Se];De?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se+1,0,0,Fe,ye,Te.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se+1,Ke,Fe,ye,Te.image[ae])}}}g(v)&&m(n.TEXTURE_CUBE_MAP),k.__version=j.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}c(ne,"uploadCubeTexture");function de(S,v,R,U,j,k){const ce=r.convert(R.format,R.colorSpace),re=r.convert(R.type),he=A(R.internalFormat,ce,re,R.colorSpace);if(!i.get(v).__hasExternalTextures){const oe=Math.max(1,v.width>>k),pe=Math.max(1,v.height>>k);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,k,he,oe,pe,v.depth,0,ce,re,null):t.texImage2D(j,k,he,oe,pe,0,ce,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),q(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,U,j,i.get(R).__webglTexture,0,V(v)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,U,j,i.get(R).__webglTexture,k),t.bindFramebuffer(n.FRAMEBUFFER,null)}c(de,"setupFrameBufferTexture");function _e(S,v,R){if(n.bindRenderbuffer(n.RENDERBUFFER,S),v.depthBuffer){const U=v.depthTexture,j=U&&U.isDepthTexture?U.type:null,k=b(v.stencilBuffer,j),ce=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=V(v);q(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,k,v.width,v.height):R?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,k,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,k,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,S)}else{const U=v.textures;for(let j=0;j<U.length;j++){const k=U[j],ce=r.convert(k.format,k.colorSpace),re=r.convert(k.type),he=A(k.internalFormat,ce,re,k.colorSpace),Pe=V(v);R&&q(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,he,v.width,v.height):q(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe,he,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,he,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}c(_e,"setupRenderBufferStorage");function Me(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ee(v.depthTexture,0);const U=i.get(v.depthTexture).__webglTexture,j=V(v);if(v.depthTexture.format===xr)q(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,U,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,U,0);else if(v.depthTexture.format===zs)q(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,U,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,U,0);else throw new Error("Unknown depthTexture format")}c(Me,"setupDepthTexture");function ke(S){const v=i.get(S),R=S.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==S.depthTexture){const U=S.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),U){const j=c(()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,U.removeEventListener("dispose",j)},"disposeEvent");U.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=U}if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");Me(v.__webglFramebuffer,S)}else if(R){v.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[U]),v.__webglDepthbuffer[U]===void 0)v.__webglDepthbuffer[U]=n.createRenderbuffer(),_e(v.__webglDepthbuffer[U],S,!1);else{const j=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=v.__webglDepthbuffer[U];n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,k)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),_e(v.__webglDepthbuffer,S,!1);else{const U=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,U,n.RENDERBUFFER,j)}t.bindFramebuffer(n.FRAMEBUFFER,null)}c(ke,"setupDepthRenderbuffer");function Ue(S,v,R){const U=i.get(S);v!==void 0&&de(U.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),R!==void 0&&ke(S)}c(Ue,"rebindTextures");function Ye(S){const v=S.texture,R=i.get(S),U=i.get(v);S.addEventListener("dispose",P);const j=S.textures,k=S.isWebGLCubeRenderTarget===!0,ce=j.length>1;if(ce||(U.__webglTexture===void 0&&(U.__webglTexture=n.createTexture()),U.__version=v.version,o.memory.textures++),k){R.__webglFramebuffer=[];for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0){R.__webglFramebuffer[re]=[];for(let he=0;he<v.mipmaps.length;he++)R.__webglFramebuffer[re][he]=n.createFramebuffer()}else R.__webglFramebuffer[re]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){R.__webglFramebuffer=[];for(let re=0;re<v.mipmaps.length;re++)R.__webglFramebuffer[re]=n.createFramebuffer()}else R.__webglFramebuffer=n.createFramebuffer();if(ce)for(let re=0,he=j.length;re<he;re++){const Pe=i.get(j[re]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&q(S)===!1){R.__webglMultisampledFramebuffer=n.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let re=0;re<j.length;re++){const he=j[re];R.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,R.__webglColorRenderbuffer[re]);const Pe=r.convert(he.format,he.colorSpace),oe=r.convert(he.type),pe=A(he.internalFormat,Pe,oe,he.colorSpace,S.isXRRenderTarget===!0),Oe=V(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,pe,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,R.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(R.__webglDepthRenderbuffer=n.createRenderbuffer(),_e(R.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture),Ae(n.TEXTURE_CUBE_MAP,v);for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)de(R.__webglFramebuffer[re][he],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,he);else de(R.__webglFramebuffer[re],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);g(v)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let re=0,he=j.length;re<he;re++){const Pe=j[re],oe=i.get(Pe);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),Ae(n.TEXTURE_2D,Pe),de(R.__webglFramebuffer,S,Pe,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,0),g(Pe)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(re=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,U.__webglTexture),Ae(re,v),v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)de(R.__webglFramebuffer[he],S,v,n.COLOR_ATTACHMENT0,re,he);else de(R.__webglFramebuffer,S,v,n.COLOR_ATTACHMENT0,re,0);g(v)&&m(re),t.unbindTexture()}S.depthBuffer&&ke(S)}c(Ye,"setupRenderTarget");function st(S){const v=S.textures;for(let R=0,U=v.length;R<U;R++){const j=v[R];if(g(j)){const k=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ce=i.get(j).__webglTexture;t.bindTexture(k,ce),m(k),t.unbindTexture()}}}c(st,"updateRenderTargetMipmap");const Je=[],x=[];function I(S){if(S.samples>0){if(q(S)===!1){const v=S.textures,R=S.width,U=S.height;let j=n.COLOR_BUFFER_BIT;const k=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(S),re=v.length>1;if(re)for(let he=0;he<v.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let he=0;he<v.length;he++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[he]);const Pe=i.get(v[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pe,0)}n.blitFramebuffer(0,0,R,U,0,0,R,U,j,n.NEAREST),l===!0&&(Je.length=0,x.length=0,Je.push(n.COLOR_ATTACHMENT0+he),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Je.push(k),x.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,x)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let he=0;he<v.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,ce.__webglColorRenderbuffer[he]);const Pe=i.get(v[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,Pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const v=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}c(I,"updateMultisampleRenderTarget");function V(S){return Math.min(s.maxSamples,S.samples)}c(V,"getRenderTargetSamples");function q(S){const v=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}c(q,"useMultisampledRTT");function W(S){const v=o.render.frame;h.get(S)!==v&&(h.set(S,v),S.update())}c(W,"updateVideoTexture");function se(S,v){const R=S.colorSpace,U=S.format,j=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||R!==Yt&&R!==Wi&&(it.getTransfer(R)===gt?(U!==In||j!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",R)),v}c(se,"verifyColorSpace");function te(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(u.width=S.naturalWidth||S.width,u.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(u.width=S.displayWidth,u.height=S.displayHeight):(u.width=S.width,u.height=S.height),u}c(te,"getDimensions"),this.allocateTextureUnit=B,this.resetTextureUnits=T,this.setTexture2D=ee,this.setTexture2DArray=le,this.setTexture3D=Y,this.setTextureCube=Q,this.rebindTextures=Ue,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=de,this.useMultisampledRTT=q}c(PA,"WebGLTextures");function DA(n,e){function t(i,s=Wi){let r;const o=it.getTransfer(s);if(i===Mi)return n.UNSIGNED_BYTE;if(i===tf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===nf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===O0)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===L0)return n.BYTE;if(i===N0)return n.SHORT;if(i===xo)return n.UNSIGNED_SHORT;if(i===ef)return n.INT;if(i===Fs)return n.UNSIGNED_INT;if(i===jn)return n.FLOAT;if(i===pn)return n.HALF_FLOAT;if(i===U0)return n.ALPHA;if(i===F0)return n.RGB;if(i===In)return n.RGBA;if(i===B0)return n.LUMINANCE;if(i===z0)return n.LUMINANCE_ALPHA;if(i===xr)return n.DEPTH_COMPONENT;if(i===zs)return n.DEPTH_STENCIL;if(i===sf)return n.RED;if(i===rf)return n.RED_INTEGER;if(i===k0)return n.RG;if(i===of)return n.RG_INTEGER;if(i===af)return n.RGBA_INTEGER;if(i===Ea||i===Ta||i===Aa||i===wa)if(o===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nu||i===Ou||i===Uu||i===Fu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Nu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ou)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Uu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bu||i===zu||i===ku)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Bu||i===zu)return o===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ku)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Vu||i===Hu||i===Gu||i===Wu||i===ju||i===Xu||i===$u||i===Yu||i===Ku||i===qu||i===Zu||i===Ju||i===Qu||i===eh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Vu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ju)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$u)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Yu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ku)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ju)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===eh)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ca||i===th||i===nh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ca)return o===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===th)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===nh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===V0||i===ih||i===sh||i===rh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ca)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ih)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Bs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return c(t,"convert"),{convert:t}}c(DA,"WebGLUtils");const dp=class dp extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}};c(dp,"ArrayCamera");let Mh=dp;var Do;let Xi=(Do=class extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},c(Do,"Group"),Do);const IA={type:"move"},fp=class fp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const M of e.hand.values()){const g=t.getJointPose(M,i),m=this._getHandJoint(u,M);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,_=.005;u.inputState.pinching&&f>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(IA)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Xi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};c(fp,"WebXRController");let ro=fp;const LA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,pp=class pp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Qt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new yt({vertexShader:LA,fragmentShader:NA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new Za(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};c(pp,"WebXRDepthSensing");let yh=pp;const mp=class mp extends yi{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,u=null,h=null,d=null,f=null,p=null,_=null;const M=new yh,g=t.getContextAttributes();let m=null,A=null;const b=[],w=[],O=new ve;let P=null;const C=new jt;C.layers.enable(1),C.viewport=new at;const L=new jt;L.layers.enable(2),L.viewport=new at;const ie=[C,L],y=new Mh;y.layers.enable(1),y.layers.enable(2);let T=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let de=b[ne];return de===void 0&&(de=new ro,b[ne]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ne){let de=b[ne];return de===void 0&&(de=new ro,b[ne]=de),de.getGripSpace()},this.getHand=function(ne){let de=b[ne];return de===void 0&&(de=new ro,b[ne]=de),de.getHandSpace()};function H(ne){const de=w.indexOf(ne.inputSource);if(de===-1)return;const _e=b[de];_e!==void 0&&(_e.update(ne.inputSource,ne.frame,u||o),_e.dispatchEvent({type:ne.type,data:ne.inputSource}))}c(H,"onSessionEvent");function ee(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",le);for(let ne=0;ne<b.length;ne++){const de=w[ne];de!==null&&(w[ne]=null,b[ne].disconnect(de))}T=null,B=null,M.reset(),e.setRenderTarget(m),p=null,f=null,d=null,s=null,A=null,nt.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}c(ee,"onSessionEnd"),this.setFramebufferScaleFactor=function(ne){r=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(ne){u=ne},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",le),g.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(O),s.renderState.layers===void 0){const de={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new Pt(p.framebufferWidth,p.framebufferHeight,{format:In,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let de=null,_e=null,Me=null;g.depth&&(Me=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=g.stencil?zs:xr,_e=g.stencil?Bs:Fs);const ke={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(ke),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new Pt(f.textureWidth,f.textureHeight,{format:In,type:Mi,depthTexture:new To(f.textureWidth,f.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await s.requestReferenceSpace(a),nt.setContext(s),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function le(ne){for(let de=0;de<ne.removed.length;de++){const _e=ne.removed[de],Me=w.indexOf(_e);Me>=0&&(w[Me]=null,b[Me].disconnect(_e))}for(let de=0;de<ne.added.length;de++){const _e=ne.added[de];let Me=w.indexOf(_e);if(Me===-1){for(let Ue=0;Ue<b.length;Ue++)if(Ue>=w.length){w.push(_e),Me=Ue;break}else if(w[Ue]===null){w[Ue]=_e,Me=Ue;break}if(Me===-1)break}const ke=b[Me];ke&&ke.connect(_e)}}c(le,"onInputSourcesChange");const Y=new D,Q=new D;function G(ne,de,_e){Y.setFromMatrixPosition(de.matrixWorld),Q.setFromMatrixPosition(_e.matrixWorld);const Me=Y.distanceTo(Q),ke=de.projectionMatrix.elements,Ue=_e.projectionMatrix.elements,Ye=ke[14]/(ke[10]-1),st=ke[14]/(ke[10]+1),Je=(ke[9]+1)/ke[5],x=(ke[9]-1)/ke[5],I=(ke[8]-1)/ke[0],V=(Ue[8]+1)/Ue[0],q=Ye*I,W=Ye*V,se=Me/(-I+V),te=se*-I;if(de.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(te),ne.translateZ(se),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),ke[10]===-1)ne.projectionMatrix.copy(de.projectionMatrix),ne.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const S=Ye+se,v=st+se,R=q-te,U=W+(Me-te),j=Je*st/v*S,k=x*st/v*S;ne.projectionMatrix.makePerspective(R,U,j,k,S,v),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}c(G,"setProjectionFromUnion");function ge(ne,de){de===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(de.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}c(ge,"updateCamera"),this.updateCamera=function(ne){if(s===null)return;let de=ne.near,_e=ne.far;M.texture!==null&&(M.depthNear>0&&(de=M.depthNear),M.depthFar>0&&(_e=M.depthFar)),y.near=L.near=C.near=de,y.far=L.far=C.far=_e,(T!==y.near||B!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,B=y.far);const Me=ne.parent,ke=y.cameras;ge(y,Me);for(let Ue=0;Ue<ke.length;Ue++)ge(ke[Ue],Me);ke.length===2?G(y,C,L):y.projectionMatrix.copy(C.projectionMatrix),xe(ne,y,Me)};function xe(ne,de,_e){_e===null?ne.matrix.copy(de.matrixWorld):(ne.matrix.copy(_e.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(de.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(de.projectionMatrix),ne.projectionMatrixInverse.copy(de.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=wr*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}c(xe,"updateUserCamera"),this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(ne){l=ne,f!==null&&(f.fixedFoveation=ne),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ne)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(y)};let Ae=null;function je(ne,de){if(h=de.getViewerPose(u||o),_=de,h!==null){const _e=h.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let Me=!1;_e.length!==y.cameras.length&&(y.cameras.length=0,Me=!0);for(let Ue=0;Ue<_e.length;Ue++){const Ye=_e[Ue];let st=null;if(p!==null)st=p.getViewport(Ye);else{const x=d.getViewSubImage(f,Ye);st=x.viewport,Ue===0&&(e.setRenderTargetTextures(A,x.colorTexture,f.ignoreDepthValues?void 0:x.depthStencilTexture),e.setRenderTarget(A))}let Je=ie[Ue];Je===void 0&&(Je=new jt,Je.layers.enable(Ue),Je.viewport=new at,ie[Ue]=Je),Je.matrix.fromArray(Ye.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(Ye.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(st.x,st.y,st.width,st.height),Ue===0&&(y.matrix.copy(Je.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Me===!0&&y.cameras.push(Je)}const ke=s.enabledFeatures;if(ke&&ke.includes("depth-sensing")){const Ue=d.getDepthInformation(_e[0]);Ue&&Ue.isValid&&Ue.texture&&M.init(e,Ue,s.renderState)}}for(let _e=0;_e<b.length;_e++){const Me=w[_e],ke=b[_e];Me!==null&&ke!==void 0&&ke.update(Me,de,u||o)}Ae&&Ae(ne,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),_=null}c(je,"onAnimationFrame");const nt=new Y0;nt.setAnimationLoop(je),this.setAnimationLoop=function(ne){Ae=ne},this.dispose=function(){}}};c(mp,"WebXRManager");let Sh=mp;const Es=new Kn,OA=new Ge;function UA(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}c(t,"refreshTransformUniform");function i(g,m){m.color.getRGB(g.fogColor.value,$0(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}c(i,"refreshFogUniforms");function s(g,m,A,b,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&p(g,m,w)):m.isMeshMatcapMaterial?(r(g,m),_(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),M(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,A,b):m.isSpriteMaterial?u(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}c(s,"refreshMaterialUniforms");function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===mn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===mn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const A=e.get(m),b=A.envMap,w=A.envMapRotation;b&&(g.envMap.value=b,Es.copy(w),Es.x*=-1,Es.y*=-1,Es.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),g.envMapRotation.value.setFromMatrix4(OA.makeRotationFromEuler(Es)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}c(r,"refreshUniformsCommon");function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}c(o,"refreshUniformsLine");function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}c(a,"refreshUniformsDash");function l(g,m,A,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*A,g.scale.value=b*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}c(l,"refreshUniformsPoints");function u(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}c(u,"refreshUniformsSprites");function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}c(h,"refreshUniformsPhong");function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}c(d,"refreshUniformsToon");function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}c(f,"refreshUniformsStandard");function p(g,m,A){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===mn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=A.texture,g.transmissionSamplerSize.value.set(A.width,A.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}c(p,"refreshUniformsPhysical");function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}c(_,"refreshUniformsMatcap");function M(g,m){const A=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(A.matrixWorld),g.nearDistance.value=A.shadow.camera.near,g.farDistance.value=A.shadow.camera.far}return c(M,"refreshUniformsDistance"),{refreshFogUniforms:i,refreshMaterialUniforms:s}}c(UA,"WebGLMaterials");function FA(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,b){const w=b.program;i.uniformBlockBinding(A,w)}c(l,"bind");function u(A,b){let w=s[A.id];w===void 0&&(_(A),w=h(A),s[A.id]=w,A.addEventListener("dispose",g));const O=b.program;i.updateUBOMapping(A,O);const P=e.render.frame;r[A.id]!==P&&(f(A),r[A.id]=P)}c(u,"update");function h(A){const b=d();A.__bindingPointIndex=b;const w=n.createBuffer(),O=A.__size,P=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,O,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,w),w}c(h,"createBuffer");function d(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}c(d,"allocateBindingPointIndex");function f(A){const b=s[A.id],w=A.uniforms,O=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let P=0,C=w.length;P<C;P++){const L=Array.isArray(w[P])?w[P]:[w[P]];for(let ie=0,y=L.length;ie<y;ie++){const T=L[ie];if(p(T,P,ie,O)===!0){const B=T.__offset,H=Array.isArray(T.value)?T.value:[T.value];let ee=0;for(let le=0;le<H.length;le++){const Y=H[le],Q=M(Y);typeof Y=="number"||typeof Y=="boolean"?(T.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,B+ee,T.__data)):Y.isMatrix3?(T.__data[0]=Y.elements[0],T.__data[1]=Y.elements[1],T.__data[2]=Y.elements[2],T.__data[3]=0,T.__data[4]=Y.elements[3],T.__data[5]=Y.elements[4],T.__data[6]=Y.elements[5],T.__data[7]=0,T.__data[8]=Y.elements[6],T.__data[9]=Y.elements[7],T.__data[10]=Y.elements[8],T.__data[11]=0):(Y.toArray(T.__data,ee),ee+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}c(f,"updateBufferData");function p(A,b,w,O){const P=A.value,C=b+"_"+w;if(O[C]===void 0)return typeof P=="number"||typeof P=="boolean"?O[C]=P:O[C]=P.clone(),!0;{const L=O[C];if(typeof P=="number"||typeof P=="boolean"){if(L!==P)return O[C]=P,!0}else if(L.equals(P)===!1)return L.copy(P),!0}return!1}c(p,"hasUniformChanged");function _(A){const b=A.uniforms;let w=0;const O=16;for(let C=0,L=b.length;C<L;C++){const ie=Array.isArray(b[C])?b[C]:[b[C]];for(let y=0,T=ie.length;y<T;y++){const B=ie[y],H=Array.isArray(B.value)?B.value:[B.value];for(let ee=0,le=H.length;ee<le;ee++){const Y=H[ee],Q=M(Y),G=w%O,ge=G%Q.boundary,xe=G+ge;w+=ge,xe!==0&&O-xe<Q.storage&&(w+=O-xe),B.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=w,w+=Q.storage}}}const P=w%O;return P>0&&(w+=O-P),A.__size=w,A.__cache={},this}c(_,"prepareUniformsGroup");function M(A){const b={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(b.boundary=4,b.storage=4):A.isVector2?(b.boundary=8,b.storage=8):A.isVector3||A.isColor?(b.boundary=16,b.storage=12):A.isVector4?(b.boundary=16,b.storage=16):A.isMatrix3?(b.boundary=48,b.storage=48):A.isMatrix4?(b.boundary=64,b.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),b}c(M,"getUniformSize");function g(A){const b=A.target;b.removeEventListener("dispose",g);const w=o.indexOf(b.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}c(g,"onUniformsGroupsDispose");function m(){for(const A in s)n.deleteBuffer(s[A]);o=[],s={},r={}}return c(m,"dispose"),{bind:l,update:u,dispose:m}}c(FA,"WebGLUniformsGroups");const gp=class gp{constructor(e={}){const{canvas:t=Vy(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),_=new Int32Array(4);let M=null,g=null;const m=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this.toneMapping=qi,this.toneMappingExposure=1;const b=this;let w=!1,O=0,P=0,C=null,L=-1,ie=null;const y=new at,T=new at;let B=null;const H=new we(0);let ee=0,le=t.width,Y=t.height,Q=1,G=null,ge=null;const xe=new at(0,0,le,Y),Ae=new at(0,0,le,Y);let je=!1;const nt=new Eo;let ne=!1,de=!1;const _e=new Ge,Me=new Ge,ke=new D,Ue=new at,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function Je(){return C===null?Q:1}c(Je,"getTargetPixelRatio");let x=i;function I(E,F){return t.getContext(E,F)}c(I,"getContext");try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qd}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",Te,!1),x===null){const F="webgl2";if(x=I(F,E),x===null)throw I(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let V,q,W,se,te,S,v,R,U,j,k,ce,re,he,Pe,oe,pe,Oe,Fe,ye,Ke,De,qe,N;function Ee(){V=new QE(x),V.init(),De=new DA(x,V),q=new $E(x,V,e,De),W=new CA(x),q.reverseDepthBuffer&&W.buffers.depth.setReversed(!0),se=new nT(x),te=new mA,S=new PA(x,V,W,te,q,De,se),v=new KE(b),R=new JE(b),U=new cS(x),qe=new jE(x,U),j=new eT(x,U,se,qe),k=new sT(x,j,U,se),Fe=new iT(x,q,S),oe=new YE(te),ce=new pA(b,v,R,V,q,qe,oe),re=new UA(b,te),he=new _A,Pe=new bA(V),Oe=new WE(b,v,R,W,k,f,l),pe=new AA(b,k,q),N=new FA(x,se,q,W),ye=new XE(x,V,se),Ke=new tT(x,V,se),se.programs=ce.programs,b.capabilities=q,b.extensions=V,b.properties=te,b.renderLists=he,b.shadowMap=pe,b.state=W,b.info=se}c(Ee,"initGLContext"),Ee();const Z=new Sh(b,x);this.xr=Z,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const E=V.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=V.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(E){E!==void 0&&(Q=E,this.setSize(le,Y,!1))},this.getSize=function(E){return E.set(le,Y)},this.setSize=function(E,F,X=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}le=E,Y=F,t.width=Math.floor(E*Q),t.height=Math.floor(F*Q),X===!0&&(t.style.width=E+"px",t.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(le*Q,Y*Q).floor()},this.setDrawingBufferSize=function(E,F,X){le=E,Y=F,Q=X,t.width=Math.floor(E*X),t.height=Math.floor(F*X),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(xe)},this.setViewport=function(E,F,X,$){E.isVector4?xe.set(E.x,E.y,E.z,E.w):xe.set(E,F,X,$),W.viewport(y.copy(xe).multiplyScalar(Q).round())},this.getScissor=function(E){return E.copy(Ae)},this.setScissor=function(E,F,X,$){E.isVector4?Ae.set(E.x,E.y,E.z,E.w):Ae.set(E,F,X,$),W.scissor(T.copy(Ae).multiplyScalar(Q).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(E){W.setScissorTest(je=E)},this.setOpaqueSort=function(E){G=E},this.setTransparentSort=function(E){ge=E},this.getClearColor=function(E){return E.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(E=!0,F=!0,X=!0){let $=0;if(E){let z=!1;if(C!==null){const fe=C.texture.format;z=fe===af||fe===of||fe===rf}if(z){const fe=C.texture.type,be=fe===Mi||fe===Fs||fe===xo||fe===Bs||fe===tf||fe===nf,Ce=Oe.getClearColor(),Re=Oe.getClearAlpha(),ze=Ce.r,Ve=Ce.g,Ie=Ce.b;be?(p[0]=ze,p[1]=Ve,p[2]=Ie,p[3]=Re,x.clearBufferuiv(x.COLOR,0,p)):(_[0]=ze,_[1]=Ve,_[2]=Ie,_[3]=Re,x.clearBufferiv(x.COLOR,0,_))}else $|=x.COLOR_BUFFER_BIT}F&&($|=x.DEPTH_BUFFER_BIT,x.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),X&&($|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),he.dispose(),Pe.dispose(),te.dispose(),v.dispose(),R.dispose(),k.dispose(),qe.dispose(),N.dispose(),ce.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Jm),Z.removeEventListener("sessionend",Qm),ps.stop()};function ae(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}c(ae,"onContextLost");function Se(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const E=se.autoReset,F=pe.enabled,X=pe.autoUpdate,$=pe.needsUpdate,z=pe.type;Ee(),se.autoReset=E,pe.enabled=F,pe.autoUpdate=X,pe.needsUpdate=$,pe.type=z}c(Se,"onContextRestore");function Te(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}c(Te,"onContextCreationError");function et(E){const F=E.target;F.removeEventListener("dispose",et),Et(F)}c(et,"onMaterialDispose");function Et(E){un(E),te.remove(E)}c(Et,"deallocateMaterial");function un(E){const F=te.get(E).programs;F!==void 0&&(F.forEach(function(X){ce.releaseProgram(X)}),E.isShaderMaterial&&ce.releaseShaderCache(E))}c(un,"releaseMaterialProgramReferences"),this.renderBufferDirect=function(E,F,X,$,z,fe){F===null&&(F=Ye);const be=z.isMesh&&z.matrixWorld.determinant()<0,Ce=r1(E,F,X,$,z);W.setMaterial($,be);let Re=X.index,ze=1;if($.wireframe===!0){if(Re=j.getWireframeAttribute(X),Re===void 0)return;ze=2}const Ve=X.drawRange,Ie=X.attributes.position;let ht=Ve.start*ze,mt=(Ve.start+Ve.count)*ze;fe!==null&&(ht=Math.max(ht,fe.start*ze),mt=Math.min(mt,(fe.start+fe.count)*ze)),Re!==null?(ht=Math.max(ht,0),mt=Math.min(mt,Re.count)):Ie!=null&&(ht=Math.max(ht,0),mt=Math.min(mt,Ie.count));const Mt=mt-ht;if(Mt<0||Mt===1/0)return;qe.setup(z,$,Ce,X,Re);let vn,ct=ye;if(Re!==null&&(vn=U.get(Re),ct=Ke,ct.setIndex(vn)),z.isMesh)$.wireframe===!0?(W.setLineWidth($.wireframeLinewidth*Je()),ct.setMode(x.LINES)):ct.setMode(x.TRIANGLES);else if(z.isLine){let Le=$.linewidth;Le===void 0&&(Le=1),W.setLineWidth(Le*Je()),z.isLineSegments?ct.setMode(x.LINES):z.isLineLoop?ct.setMode(x.LINE_LOOP):ct.setMode(x.LINE_STRIP)}else z.isPoints?ct.setMode(x.POINTS):z.isSprite&&ct.setMode(x.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ct.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(V.get("WEBGL_multi_draw"))ct.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Le=z._multiDrawStarts,Ht=z._multiDrawCounts,ut=z._multiDrawCount,Bn=Re?U.get(Re).bytesPerElement:1,js=te.get($).currentProgram.getUniforms();for(let xn=0;xn<ut;xn++)js.setValue(x,"_gl_DrawID",xn),ct.render(Le[xn]/Bn,Ht[xn])}else if(z.isInstancedMesh)ct.renderInstances(ht,Mt,z.count);else if(X.isInstancedBufferGeometry){const Le=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ht=Math.min(X.instanceCount,Le);ct.renderInstances(ht,Mt,Ht)}else ct.render(ht,Mt)};function rt(E,F,X){E.transparent===!0&&E.side===cn&&E.forceSinglePass===!1?(E.side=mn,E.needsUpdate=!0,Oo(E,F,X),E.side=ii,E.needsUpdate=!0,Oo(E,F,X),E.side=cn):Oo(E,F,X)}c(rt,"prepareMaterial"),this.compile=function(E,F,X=null){X===null&&(X=E),g=Pe.get(X),g.init(F),A.push(g),X.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(g.pushLight(z),z.castShadow&&g.pushShadow(z))}),E!==X&&E.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(g.pushLight(z),z.castShadow&&g.pushShadow(z))}),g.setupLights();const $=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const fe=z.material;if(fe)if(Array.isArray(fe))for(let be=0;be<fe.length;be++){const Ce=fe[be];rt(Ce,X,z),$.add(Ce)}else rt(fe,X,z),$.add(fe)}),A.pop(),g=null,$},this.compileAsync=function(E,F,X=null){const $=this.compile(E,F,X);return new Promise(z=>{function fe(){if($.forEach(function(be){te.get(be).currentProgram.isReady()&&$.delete(be)}),$.size===0){z(E);return}setTimeout(fe,10)}c(fe,"checkMaterialsReady"),V.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let hn=null;function ri(E){hn&&hn(E)}c(ri,"onAnimationFrame");function Jm(){ps.stop()}c(Jm,"onXRSessionStart");function Qm(){ps.start()}c(Qm,"onXRSessionEnd");const ps=new Y0;ps.setAnimationLoop(ri),typeof self<"u"&&ps.setContext(self),this.setAnimationLoop=function(E){hn=E,Z.setAnimationLoop(E),E===null?ps.stop():ps.start()},Z.addEventListener("sessionstart",Jm),Z.addEventListener("sessionend",Qm),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(F),F=Z.getCamera()),E.isScene===!0&&E.onBeforeRender(b,E,F,C),g=Pe.get(E,A.length),g.init(F),A.push(g),Me.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),nt.setFromProjectionMatrix(Me),de=this.localClippingEnabled,ne=oe.init(this.clippingPlanes,de),M=he.get(E,m.length),M.init(),m.push(M),Z.enabled===!0&&Z.isPresenting===!0){const fe=b.xr.getDepthSensingMesh();fe!==null&&Ql(fe,F,-1/0,b.sortObjects)}Ql(E,F,0,b.sortObjects),M.finish(),b.sortObjects===!0&&M.sort(G,ge),st=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,st&&Oe.addToRenderList(M,E),this.info.render.frame++,ne===!0&&oe.beginShadows();const X=g.state.shadowsArray;pe.render(X,E,F),ne===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=M.opaque,z=M.transmissive;if(g.setupLights(),F.isArrayCamera){const fe=F.cameras;if(z.length>0)for(let be=0,Ce=fe.length;be<Ce;be++){const Re=fe[be];tg($,z,E,Re)}st&&Oe.render(E);for(let be=0,Ce=fe.length;be<Ce;be++){const Re=fe[be];eg(M,E,Re,Re.viewport)}}else z.length>0&&tg($,z,E,F),st&&Oe.render(E),eg(M,E,F);C!==null&&(S.updateMultisampleRenderTarget(C),S.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(b,E,F),qe.resetDefaultState(),L=-1,ie=null,A.pop(),A.length>0?(g=A[A.length-1],ne===!0&&oe.setGlobalState(b.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?M=m[m.length-1]:M=null};function Ql(E,F,X,$){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||nt.intersectsSprite(E)){$&&Ue.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Me);const be=k.update(E),Ce=E.material;Ce.visible&&M.push(E,be,Ce,X,Ue.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||nt.intersectsObject(E))){const be=k.update(E),Ce=E.material;if($&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ue.copy(E.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ue.copy(be.boundingSphere.center)),Ue.applyMatrix4(E.matrixWorld).applyMatrix4(Me)),Array.isArray(Ce)){const Re=be.groups;for(let ze=0,Ve=Re.length;ze<Ve;ze++){const Ie=Re[ze],ht=Ce[Ie.materialIndex];ht&&ht.visible&&M.push(E,be,ht,X,Ue.z,Ie)}}else Ce.visible&&M.push(E,be,Ce,X,Ue.z,null)}}const fe=E.children;for(let be=0,Ce=fe.length;be<Ce;be++)Ql(fe[be],F,X,$)}c(Ql,"projectObject");function eg(E,F,X,$){const z=E.opaque,fe=E.transmissive,be=E.transparent;g.setupLightsView(X),ne===!0&&oe.setGlobalState(b.clippingPlanes,X),$&&W.viewport(y.copy($)),z.length>0&&No(z,F,X),fe.length>0&&No(fe,F,X),be.length>0&&No(be,F,X),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}c(eg,"renderScene");function tg(E,F,X,$){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[$.id]===void 0&&(g.state.transmissionRenderTarget[$.id]=new Pt(1,1,{generateMipmaps:!0,type:V.has("EXT_color_buffer_half_float")||V.has("EXT_color_buffer_float")?pn:Mi,minFilter:gi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const fe=g.state.transmissionRenderTarget[$.id],be=$.viewport||y;fe.setSize(be.z,be.w);const Ce=b.getRenderTarget();b.setRenderTarget(fe),b.getClearColor(H),ee=b.getClearAlpha(),ee<1&&b.setClearColor(16777215,.5),b.clear(),st&&Oe.render(X);const Re=b.toneMapping;b.toneMapping=qi;const ze=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),g.setupLightsView($),ne===!0&&oe.setGlobalState(b.clippingPlanes,$),No(E,X,$),S.updateMultisampleRenderTarget(fe),S.updateRenderTargetMipmap(fe),V.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Ie=0,ht=F.length;Ie<ht;Ie++){const mt=F[Ie],Mt=mt.object,vn=mt.geometry,ct=mt.material,Le=mt.group;if(ct.side===cn&&Mt.layers.test($.layers)){const Ht=ct.side;ct.side=mn,ct.needsUpdate=!0,ng(Mt,X,$,vn,ct,Le),ct.side=Ht,ct.needsUpdate=!0,Ve=!0}}Ve===!0&&(S.updateMultisampleRenderTarget(fe),S.updateRenderTargetMipmap(fe))}b.setRenderTarget(Ce),b.setClearColor(H,ee),ze!==void 0&&($.viewport=ze),b.toneMapping=Re}c(tg,"renderTransmissionPass");function No(E,F,X){const $=F.isScene===!0?F.overrideMaterial:null;for(let z=0,fe=E.length;z<fe;z++){const be=E[z],Ce=be.object,Re=be.geometry,ze=$===null?be.material:$,Ve=be.group;Ce.layers.test(X.layers)&&ng(Ce,F,X,Re,ze,Ve)}}c(No,"renderObjects");function ng(E,F,X,$,z,fe){E.onBeforeRender(b,F,X,$,z,fe),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(b,F,X,$,E,fe),z.transparent===!0&&z.side===cn&&z.forceSinglePass===!1?(z.side=mn,z.needsUpdate=!0,b.renderBufferDirect(X,F,$,z,E,fe),z.side=ii,z.needsUpdate=!0,b.renderBufferDirect(X,F,$,z,E,fe),z.side=cn):b.renderBufferDirect(X,F,$,z,E,fe),E.onAfterRender(b,F,X,$,z,fe)}c(ng,"renderObject");function Oo(E,F,X){F.isScene!==!0&&(F=Ye);const $=te.get(E),z=g.state.lights,fe=g.state.shadowsArray,be=z.state.version,Ce=ce.getParameters(E,z.state,fe,F,X),Re=ce.getProgramCacheKey(Ce);let ze=$.programs;$.environment=E.isMeshStandardMaterial?F.environment:null,$.fog=F.fog,$.envMap=(E.isMeshStandardMaterial?R:v).get(E.envMap||$.environment),$.envMapRotation=$.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,ze===void 0&&(E.addEventListener("dispose",et),ze=new Map,$.programs=ze);let Ve=ze.get(Re);if(Ve!==void 0){if($.currentProgram===Ve&&$.lightsStateVersion===be)return sg(E,Ce),Ve}else Ce.uniforms=ce.getUniforms(E),E.onBeforeCompile(Ce,b),Ve=ce.acquireProgram(Ce,Re),ze.set(Re,Ve),$.uniforms=Ce.uniforms;const Ie=$.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ie.clippingPlanes=oe.uniform),sg(E,Ce),$.needsLights=a1(E),$.lightsStateVersion=be,$.needsLights&&(Ie.ambientLightColor.value=z.state.ambient,Ie.lightProbe.value=z.state.probe,Ie.directionalLights.value=z.state.directional,Ie.directionalLightShadows.value=z.state.directionalShadow,Ie.spotLights.value=z.state.spot,Ie.spotLightShadows.value=z.state.spotShadow,Ie.rectAreaLights.value=z.state.rectArea,Ie.ltc_1.value=z.state.rectAreaLTC1,Ie.ltc_2.value=z.state.rectAreaLTC2,Ie.pointLights.value=z.state.point,Ie.pointLightShadows.value=z.state.pointShadow,Ie.hemisphereLights.value=z.state.hemi,Ie.directionalShadowMap.value=z.state.directionalShadowMap,Ie.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ie.spotShadowMap.value=z.state.spotShadowMap,Ie.spotLightMatrix.value=z.state.spotLightMatrix,Ie.spotLightMap.value=z.state.spotLightMap,Ie.pointShadowMap.value=z.state.pointShadowMap,Ie.pointShadowMatrix.value=z.state.pointShadowMatrix),$.currentProgram=Ve,$.uniformsList=null,Ve}c(Oo,"getProgram");function ig(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=yr.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}c(ig,"getUniformList");function sg(E,F){const X=te.get(E);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}c(sg,"updateCommonMaterialProperties");function r1(E,F,X,$,z){F.isScene!==!0&&(F=Ye),S.resetTextureUnits();const fe=F.fog,be=$.isMeshStandardMaterial?F.environment:null,Ce=C===null?b.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Yt,Re=($.isMeshStandardMaterial?R:v).get($.envMap||be),ze=$.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ve=!!X.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ie=!!X.morphAttributes.position,ht=!!X.morphAttributes.normal,mt=!!X.morphAttributes.color;let Mt=qi;$.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Mt=b.toneMapping);const vn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ct=vn!==void 0?vn.length:0,Le=te.get($),Ht=g.state.lights;if(ne===!0&&(de===!0||E!==ie)){const Tn=E===ie&&$.id===L;oe.setState($,E,Tn)}let ut=!1;$.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Ht.state.version||Le.outputColorSpace!==Ce||z.isBatchedMesh&&Le.batching===!1||!z.isBatchedMesh&&Le.batching===!0||z.isBatchedMesh&&Le.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Le.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Le.instancing===!1||!z.isInstancedMesh&&Le.instancing===!0||z.isSkinnedMesh&&Le.skinning===!1||!z.isSkinnedMesh&&Le.skinning===!0||z.isInstancedMesh&&Le.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Le.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Le.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Le.instancingMorph===!1&&z.morphTexture!==null||Le.envMap!==Re||$.fog===!0&&Le.fog!==fe||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==oe.numPlanes||Le.numIntersection!==oe.numIntersection)||Le.vertexAlphas!==ze||Le.vertexTangents!==Ve||Le.morphTargets!==Ie||Le.morphNormals!==ht||Le.morphColors!==mt||Le.toneMapping!==Mt||Le.morphTargetsCount!==ct)&&(ut=!0):(ut=!0,Le.__version=$.version);let Bn=Le.currentProgram;ut===!0&&(Bn=Oo($,F,z));let js=!1,xn=!1,ec=!1;const St=Bn.getUniforms(),Ti=Le.uniforms;if(W.useProgram(Bn.program)&&(js=!0,xn=!0,ec=!0),$.id!==L&&(L=$.id,xn=!0),js||ie!==E){q.reverseDepthBuffer?(_e.copy(E.projectionMatrix),Gy(_e),Wy(_e),St.setValue(x,"projectionMatrix",_e)):St.setValue(x,"projectionMatrix",E.projectionMatrix),St.setValue(x,"viewMatrix",E.matrixWorldInverse);const Tn=St.map.cameraPosition;Tn!==void 0&&Tn.setValue(x,ke.setFromMatrixPosition(E.matrixWorld)),q.logarithmicDepthBuffer&&St.setValue(x,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&St.setValue(x,"isOrthographic",E.isOrthographicCamera===!0),ie!==E&&(ie=E,xn=!0,ec=!0)}if(z.isSkinnedMesh){St.setOptional(x,z,"bindMatrix"),St.setOptional(x,z,"bindMatrixInverse");const Tn=z.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),St.setValue(x,"boneTexture",Tn.boneTexture,S))}z.isBatchedMesh&&(St.setOptional(x,z,"batchingTexture"),St.setValue(x,"batchingTexture",z._matricesTexture,S),St.setOptional(x,z,"batchingIdTexture"),St.setValue(x,"batchingIdTexture",z._indirectTexture,S),St.setOptional(x,z,"batchingColorTexture"),z._colorsTexture!==null&&St.setValue(x,"batchingColorTexture",z._colorsTexture,S));const tc=X.morphAttributes;if((tc.position!==void 0||tc.normal!==void 0||tc.color!==void 0)&&Fe.update(z,X,Bn),(xn||Le.receiveShadow!==z.receiveShadow)&&(Le.receiveShadow=z.receiveShadow,St.setValue(x,"receiveShadow",z.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Ti.envMap.value=Re,Ti.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&F.environment!==null&&(Ti.envMapIntensity.value=F.environmentIntensity),xn&&(St.setValue(x,"toneMappingExposure",b.toneMappingExposure),Le.needsLights&&o1(Ti,ec),fe&&$.fog===!0&&re.refreshFogUniforms(Ti,fe),re.refreshMaterialUniforms(Ti,$,Q,Y,g.state.transmissionRenderTarget[E.id]),yr.upload(x,ig(Le),Ti,S)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(yr.upload(x,ig(Le),Ti,S),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&St.setValue(x,"center",z.center),St.setValue(x,"modelViewMatrix",z.modelViewMatrix),St.setValue(x,"normalMatrix",z.normalMatrix),St.setValue(x,"modelMatrix",z.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Tn=$.uniformsGroups;for(let nc=0,l1=Tn.length;nc<l1;nc++){const rg=Tn[nc];N.update(rg,Bn),N.bind(rg,Bn)}}return Bn}c(r1,"setProgram");function o1(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}c(o1,"markUniformsLightsNeedsUpdate");function a1(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}c(a1,"materialNeedsLights"),this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,F,X){te.get(E.texture).__webglTexture=F,te.get(E.depthTexture).__webglTexture=X;const $=te.get(E);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=X===void 0,$.__autoAllocateDepthBuffer||V.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){const X=te.get(E);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,X=0){C=E,O=F,P=X;let $=!0,z=null,fe=!1,be=!1;if(E){const Re=te.get(E);if(Re.__useDefaultFramebuffer!==void 0)W.bindFramebuffer(x.FRAMEBUFFER,null),$=!1;else if(Re.__webglFramebuffer===void 0)S.setupRenderTarget(E);else if(Re.__hasExternalTextures)S.rebindTextures(E,te.get(E.texture).__webglTexture,te.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ie=E.depthTexture;if(Re.__boundDepthTexture!==Ie){if(Ie!==null&&te.has(Ie)&&(E.width!==Ie.image.width||E.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(E)}}const ze=E.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(be=!0);const Ve=te.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ve[F])?z=Ve[F][X]:z=Ve[F],fe=!0):E.samples>0&&S.useMultisampledRTT(E)===!1?z=te.get(E).__webglMultisampledFramebuffer:Array.isArray(Ve)?z=Ve[X]:z=Ve,y.copy(E.viewport),T.copy(E.scissor),B=E.scissorTest}else y.copy(xe).multiplyScalar(Q).floor(),T.copy(Ae).multiplyScalar(Q).floor(),B=je;if(W.bindFramebuffer(x.FRAMEBUFFER,z)&&$&&W.drawBuffers(E,z),W.viewport(y),W.scissor(T),W.setScissorTest(B),fe){const Re=te.get(E.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+F,Re.__webglTexture,X)}else if(be){const Re=te.get(E.texture),ze=F||0;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,Re.__webglTexture,X||0,ze)}L=-1},this.readRenderTargetPixels=function(E,F,X,$,z,fe,be){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce){W.bindFramebuffer(x.FRAMEBUFFER,Ce);try{const Re=E.texture,ze=Re.format,Ve=Re.type;if(!q.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-$&&X>=0&&X<=E.height-z&&x.readPixels(F,X,$,z,De.convert(ze),De.convert(Ve),fe)}finally{const Re=C!==null?te.get(C).__webglFramebuffer:null;W.bindFramebuffer(x.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(E,F,X,$,z,fe,be){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce){const Re=E.texture,ze=Re.format,Ve=Re.type;if(!q.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-$&&X>=0&&X<=E.height-z){W.bindFramebuffer(x.FRAMEBUFFER,Ce);const Ie=x.createBuffer();x.bindBuffer(x.PIXEL_PACK_BUFFER,Ie),x.bufferData(x.PIXEL_PACK_BUFFER,fe.byteLength,x.STREAM_READ),x.readPixels(F,X,$,z,De.convert(ze),De.convert(Ve),0);const ht=C!==null?te.get(C).__webglFramebuffer:null;W.bindFramebuffer(x.FRAMEBUFFER,ht);const mt=x.fenceSync(x.SYNC_GPU_COMMANDS_COMPLETE,0);return x.flush(),await Hy(x,mt,4),x.bindBuffer(x.PIXEL_PACK_BUFFER,Ie),x.getBufferSubData(x.PIXEL_PACK_BUFFER,0,fe),x.deleteBuffer(Ie),x.deleteSync(mt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,F=null,X=0){E.isTexture!==!0&&(Ra("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);const $=Math.pow(2,-X),z=Math.floor(E.image.width*$),fe=Math.floor(E.image.height*$),be=F!==null?F.x:0,Ce=F!==null?F.y:0;S.setTexture2D(E,0),x.copyTexSubImage2D(x.TEXTURE_2D,X,0,0,be,Ce,z,fe),W.unbindTexture()},this.copyTextureToTexture=function(E,F,X=null,$=null,z=0){E.isTexture!==!0&&(Ra("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,E=arguments[1],F=arguments[2],z=arguments[3]||0,X=null);let fe,be,Ce,Re,ze,Ve;X!==null?(fe=X.max.x-X.min.x,be=X.max.y-X.min.y,Ce=X.min.x,Re=X.min.y):(fe=E.image.width,be=E.image.height,Ce=0,Re=0),$!==null?(ze=$.x,Ve=$.y):(ze=0,Ve=0);const Ie=De.convert(F.format),ht=De.convert(F.type);S.setTexture2D(F,0),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,F.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,F.unpackAlignment);const mt=x.getParameter(x.UNPACK_ROW_LENGTH),Mt=x.getParameter(x.UNPACK_IMAGE_HEIGHT),vn=x.getParameter(x.UNPACK_SKIP_PIXELS),ct=x.getParameter(x.UNPACK_SKIP_ROWS),Le=x.getParameter(x.UNPACK_SKIP_IMAGES),Ht=E.isCompressedTexture?E.mipmaps[z]:E.image;x.pixelStorei(x.UNPACK_ROW_LENGTH,Ht.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,Ht.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,Ce),x.pixelStorei(x.UNPACK_SKIP_ROWS,Re),E.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,z,ze,Ve,fe,be,Ie,ht,Ht.data):E.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,z,ze,Ve,Ht.width,Ht.height,Ie,Ht.data):x.texSubImage2D(x.TEXTURE_2D,z,ze,Ve,fe,be,Ie,ht,Ht),x.pixelStorei(x.UNPACK_ROW_LENGTH,mt),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,Mt),x.pixelStorei(x.UNPACK_SKIP_PIXELS,vn),x.pixelStorei(x.UNPACK_SKIP_ROWS,ct),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Le),z===0&&F.generateMipmaps&&x.generateMipmap(x.TEXTURE_2D),W.unbindTexture()},this.copyTextureToTexture3D=function(E,F,X=null,$=null,z=0){E.isTexture!==!0&&(Ra("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,$=arguments[1]||null,E=arguments[2],F=arguments[3],z=arguments[4]||0);let fe,be,Ce,Re,ze,Ve,Ie,ht,mt;const Mt=E.isCompressedTexture?E.mipmaps[z]:E.image;X!==null?(fe=X.max.x-X.min.x,be=X.max.y-X.min.y,Ce=X.max.z-X.min.z,Re=X.min.x,ze=X.min.y,Ve=X.min.z):(fe=Mt.width,be=Mt.height,Ce=Mt.depth,Re=0,ze=0,Ve=0),$!==null?(Ie=$.x,ht=$.y,mt=$.z):(Ie=0,ht=0,mt=0);const vn=De.convert(F.format),ct=De.convert(F.type);let Le;if(F.isData3DTexture)S.setTexture3D(F,0),Le=x.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)S.setTexture2DArray(F,0),Le=x.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,F.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,F.unpackAlignment);const Ht=x.getParameter(x.UNPACK_ROW_LENGTH),ut=x.getParameter(x.UNPACK_IMAGE_HEIGHT),Bn=x.getParameter(x.UNPACK_SKIP_PIXELS),js=x.getParameter(x.UNPACK_SKIP_ROWS),xn=x.getParameter(x.UNPACK_SKIP_IMAGES);x.pixelStorei(x.UNPACK_ROW_LENGTH,Mt.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,Mt.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,Re),x.pixelStorei(x.UNPACK_SKIP_ROWS,ze),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Ve),E.isDataTexture||E.isData3DTexture?x.texSubImage3D(Le,z,Ie,ht,mt,fe,be,Ce,vn,ct,Mt.data):F.isCompressedArrayTexture?x.compressedTexSubImage3D(Le,z,Ie,ht,mt,fe,be,Ce,vn,Mt.data):x.texSubImage3D(Le,z,Ie,ht,mt,fe,be,Ce,vn,ct,Mt),x.pixelStorei(x.UNPACK_ROW_LENGTH,Ht),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,ut),x.pixelStorei(x.UNPACK_SKIP_PIXELS,Bn),x.pixelStorei(x.UNPACK_SKIP_ROWS,js),x.pixelStorei(x.UNPACK_SKIP_IMAGES,xn),z===0&&F.generateMipmaps&&x.generateMipmap(Le),W.unbindTexture()},this.initRenderTarget=function(E){te.get(E).__webglFramebuffer===void 0&&S.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?S.setTextureCube(E,0):E.isData3DTexture?S.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?S.setTexture2DArray(E,0):S.setTexture2D(E,0),W.unbindTexture()},this.resetState=function(){O=0,P=0,C=null,W.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===cf?"display-p3":"srgb",t.unpackColorSpace=it.workingColorSpace===Yl?"display-p3":"srgb"}};c(gp,"WebGLRenderer");let bh=gp;const wl=class wl{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new we(e),this.near=t,this.far=i}clone(){return new wl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}};c(wl,"Fog");let Eh=wl;const _p=class _p extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};c(_p,"Scene");let el=_p;const vp=class vp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ah,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}};c(vp,"InterleavedBuffer");let Th=vp;const sn=new D,Cl=class Cl{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Gn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Gn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Cl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};c(Cl,"InterleavedBufferAttribute");let Ah=Cl;const k_=new D,V_=new at,H_=new at,BA=new D,G_=new Ge,ca=new D,Hc=new On,W_=new Ge,Gc=new ts,xp=class xp extends It{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=$g,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Yn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ca),this.boundingBox.expandByPoint(ca)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new On),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ca),this.boundingSphere.expandByPoint(ca)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hc.copy(this.boundingSphere),Hc.applyMatrix4(s),e.ray.intersectsSphere(Hc)!==!1&&(W_.copy(s).invert(),Gc.copy(e.ray).applyMatrix4(W_),!(this.boundingBox!==null&&Gc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Gc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new at,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===$g?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===fy?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;V_.fromBufferAttribute(s.attributes.skinIndex,e),H_.fromBufferAttribute(s.attributes.skinWeight,e),k_.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=H_.getComponent(r);if(o!==0){const a=V_.getComponent(r);G_.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(BA.copy(k_).applyMatrix4(G_),o)}}return t.applyMatrix4(this.bindMatrixInverse)}};c(xp,"SkinnedMesh");let wh=xp;const Mp=class Mp extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}};c(Mp,"Bone");let tl=Mp;const yp=class yp extends Qt{constructor(e=null,t=1,i=1,s,r,o,a,l,u=$t,h=$t,d,f){super(null,o,a,l,u,h,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};c(yp,"DataTexture");let nl=yp;const j_=new Ge,zA=new Ge,Rl=class Rl{constructor(e=[],t=[]){this.uuid=$n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ge;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:zA;j_.multiplyMatrices(a,t[r]),j_.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Rl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new nl(t,e,e,In,jn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new tl),this.bones.push(o),this.boneInverses.push(new Ge().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}};c(Rl,"Skeleton");let Ch=Rl;const Sp=class Sp extends kt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};c(Sp,"InstancedBufferAttribute");let Ao=Sp;const or=new Ge,X_=new Ge,ua=[],$_=new Yn,kA=new Ge,Vr=new It,Hr=new On,bp=class bp extends It{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ao(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,kA)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,or),$_.copy(e.boundingBox).applyMatrix4(or),this.boundingBox.union($_)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new On),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,or),Hr.copy(e.boundingSphere).applyMatrix4(or),this.boundingSphere.union(Hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Vr.geometry=this.geometry,Vr.material=this.material,Vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hr.copy(this.boundingSphere),Hr.applyMatrix4(i),e.ray.intersectsSphere(Hr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,or),X_.multiplyMatrices(i,or),Vr.matrixWorld=X_,Vr.raycast(e,ua);for(let o=0,a=ua.length;o<a;o++){const l=ua[o];l.instanceId=r,l.object=this,t.push(l)}ua.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ao(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new nl(new Float32Array(s*this.count),s,this.count,sf,jn));const r=this.morphTexture.source.data.data;let o=0;for(let u=0;u<i.length;u++)o+=i[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};c(bp,"InstancedMesh");let Rh=bp;const Ep=class Ep extends En{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}};c(Ep,"LineBasicMaterial");let ks=Ep;const il=new D,sl=new D,Y_=new Ge,Gr=new ts,ha=new On,Wc=new D,K_=new D,Tp=class Tp extends xt{constructor(e=new en,t=new ks){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)il.fromBufferAttribute(t,s-1),sl.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=il.distanceTo(sl);e.setAttribute("lineDistance",new Vt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ha.copy(i.boundingSphere),ha.applyMatrix4(s),ha.radius+=r,e.ray.intersectsSphere(ha)===!1)return;Y_.copy(s).invert(),Gr.copy(e.ray).applyMatrix4(Y_);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let M=p,g=_-1;M<g;M+=u){const m=h.getX(M),A=h.getX(M+1),b=da(this,e,Gr,l,m,A);b&&t.push(b)}if(this.isLineLoop){const M=h.getX(_-1),g=h.getX(p),m=da(this,e,Gr,l,M,g);m&&t.push(m)}}else{const p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let M=p,g=_-1;M<g;M+=u){const m=da(this,e,Gr,l,M,M+1);m&&t.push(m)}if(this.isLineLoop){const M=da(this,e,Gr,l,_-1,p);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};c(Tp,"Line");let Vs=Tp;function da(n,e,t,i,s,r){const o=n.geometry.attributes.position;if(il.fromBufferAttribute(o,s),sl.fromBufferAttribute(o,r),t.distanceSqToSegment(il,sl,Wc,K_)>i)return;Wc.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Wc);if(!(l<e.near||l>e.far))return{distance:l,point:K_.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}c(da,"checkIntersection");const q_=new D,Z_=new D,Ap=class Ap extends Vs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)q_.fromBufferAttribute(t,s),Z_.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+q_.distanceTo(Z_);e.setAttribute("lineDistance",new Vt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};c(Ap,"LineSegments");let rl=Ap;const wp=class wp extends Vs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};c(wp,"LineLoop");let Ph=wp;const Cp=class Cp extends En{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};c(Cp,"PointsMaterial");let ol=Cp;const J_=new Ge,Dh=new ts,fa=new On,pa=new D,Rp=class Rp extends xt{constructor(e=new en,t=new ol){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fa.copy(i.boundingSphere),fa.applyMatrix4(s),fa.radius+=r,e.ray.intersectsSphere(fa)===!1)return;J_.copy(s).invert(),Dh.copy(e.ray).applyMatrix4(J_);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=f,M=p;_<M;_++){const g=u.getX(_);pa.fromBufferAttribute(d,g),Q_(pa,g,l,s,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,M=p;_<M;_++)pa.fromBufferAttribute(d,_),Q_(pa,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};c(Rp,"Points");let Ih=Rp;function Q_(n,e,t,i,s,r,o){const a=Dh.distanceSqToPoint(n);if(a<t){const l=new D;Dh.closestPointToPoint(n,l),l.applyMatrix4(i);const u=s.ray.origin.distanceTo(l);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}c(Q_,"testPoint");const Pl=class Pl extends en{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const h=[],d=new D,f=new D,p=[],_=[],M=[],g=[];for(let m=0;m<=i;m++){const A=[],b=m/i;let w=0;m===0&&o===0?w=.5/t:m===i&&l===Math.PI&&(w=-.5/t);for(let O=0;O<=t;O++){const P=O/t;d.x=-e*Math.cos(s+P*r)*Math.sin(o+b*a),d.y=e*Math.cos(o+b*a),d.z=e*Math.sin(s+P*r)*Math.sin(o+b*a),_.push(d.x,d.y,d.z),f.copy(d).normalize(),M.push(f.x,f.y,f.z),g.push(P+w,1-b),A.push(u++)}h.push(A)}for(let m=0;m<i;m++)for(let A=0;A<t;A++){const b=h[m][A+1],w=h[m][A],O=h[m+1][A],P=h[m+1][A+1];(m!==0||o>0)&&p.push(b,w,P),(m!==i-1||l<Math.PI)&&p.push(w,O,P)}this.setIndex(p),this.setAttribute("position",new Vt(_,3)),this.setAttribute("normal",new Vt(M,3)),this.setAttribute("uv",new Vt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};c(Pl,"SphereGeometry");let Lh=Pl;const Pp=class Pp extends En{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lf,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};c(Pp,"MeshStandardMaterial");let Zi=Pp;const Dp=class Dp extends Zi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};c(Dp,"MeshPhysicalMaterial");let Un=Dp;const Ip=class Ip extends En{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lf,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};c(Ip,"MeshNormalMaterial");let Nh=Ip;function ma(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}c(ma,"convertArray");function VA(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}c(VA,"isTypedArray");function HA(n){function e(s,r){return n[s]-n[r]}c(e,"compareTime");const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}c(HA,"getKeyframeOrder");function ev(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}c(ev,"sortedArray");function Q0(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}c(Q0,"flattenJSON");const Lp=class Lp{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}};c(Lp,"Interpolant");let Hs=Lp;const Np=class Np extends Hs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yg,endingEnd:Yg}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Kg:r=e,a=2*t-i;break;case qg:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Kg:o=e,l=2*i-t;break;case qg:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const u=(i-t)*.5,h=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(i-t)/(s-t),M=_*_,g=M*_,m=-f*g+2*f*M-f*_,A=(1+f)*g+(-1.5-2*f)*M+(-.5+f)*_+1,b=(-1-p)*g+(1.5+p)*M+.5*_,w=p*g-p*M;for(let O=0;O!==a;++O)r[O]=m*o[h+O]+A*o[u+O]+b*o[l+O]+w*o[d+O];return r}};c(Np,"CubicInterpolant");let Oh=Np;const Op=class Op extends Hs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,h=(i-t)/(s-t),d=1-h;for(let f=0;f!==a;++f)r[f]=o[u+f]*d+o[l+f]*h;return r}};c(Op,"LinearInterpolant");let Uh=Op;const Up=class Up extends Hs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}};c(Up,"DiscreteInterpolant");let Fh=Up;const Fp=class Fp{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ma(t,this.TimeBufferType),this.values=ma(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ma(e.times,Array),values:ma(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Fh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Uh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Oh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Mo:t=this.InterpolantFactoryMethodDiscrete;break;case yo:t=this.InterpolantFactoryMethodLinear;break;case pc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mo;case this.InterpolantFactoryMethodLinear:return yo;case this.InterpolantFactoryMethodSmooth:return pc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&VA(s))for(let a=0,l=s.length;a!==l;++a){const u=s[a];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===pc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const u=e[a],h=e[a+1];if(u!==h&&(a!==1||u!==e[0]))if(s)l=!0;else{const d=a*i,f=d-i,p=d+i;for(let _=0;_!==i;++_){const M=t[d+_];if(M!==t[f+_]||M!==t[p+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,u=0;u!==i;++u)t[l+u]=t[a+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};c(Fp,"KeyframeTrack");let Fn=Fp;Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=yo;const Bp=class Bp extends Fn{constructor(e,t,i){super(e,t,i)}};c(Bp,"BooleanKeyframeTrack");let is=Bp;is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=Mo;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;const zp=class zp extends Fn{};c(zp,"ColorKeyframeTrack");let al=zp;al.prototype.ValueTypeName="color";const kp=class kp extends Fn{};c(kp,"NumberKeyframeTrack");let ss=kp;ss.prototype.ValueTypeName="number";const Vp=class Vp extends Hs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let u=e*a;for(let h=u+a;u!==h;u+=4)Nn.slerpFlat(r,0,o,u-a,o,u,l);return r}};c(Vp,"QuaternionLinearInterpolant");let Bh=Vp;const Hp=class Hp extends Fn{InterpolantFactoryMethodLinear(e){return new Bh(this.times,this.values,this.getValueSize(),e)}};c(Hp,"QuaternionKeyframeTrack");let rs=Hp;rs.prototype.ValueTypeName="quaternion";rs.prototype.InterpolantFactoryMethodSmooth=void 0;const Gp=class Gp extends Fn{constructor(e,t,i){super(e,t,i)}};c(Gp,"StringKeyframeTrack");let os=Gp;os.prototype.ValueTypeName="string";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=Mo;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;const Wp=class Wp extends Fn{};c(Wp,"VectorKeyframeTrack");let as=Wp;as.prototype.ValueTypeName="vector";const jp=class jp{constructor(e="",t=-1,i=[],s=py){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=$n(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(WA(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Fn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],u=[];l.push((a+r-1)%r,a,(a+1)%r),u.push(0,1,0);const h=HA(l);l=ev(l,1,h),u=ev(u,1,h),!s&&l[0]===0&&(l.push(r),u.push(u[0])),o.push(new ss(".morphTargetInfluences["+t[a].name+"]",l,u).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const u=e[a],h=u.name.match(r);if(h&&h.length>1){const d=h[1];let f=s[d];f||(s[d]=f=[]),f.push(u)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=c(function(d,f,p,_,M){if(p.length!==0){const g=[],m=[];Q0(p,g,m,_),g.length!==0&&M.push(new d(f,g,m))}},"addNonemptyTrack"),s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const u=e.hierarchy||[];for(let d=0;d<u.length;d++){const f=u[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let M=0;M<f[_].morphTargets.length;M++)p[f[_].morphTargets[M]]=-1;for(const M in p){const g=[],m=[];for(let A=0;A!==f[_].morphTargets.length;++A){const b=f[_];g.push(b.time),m.push(b.morphTarget===M?1:0)}s.push(new ss(".morphTargetInfluence["+M+"]",g,m))}l=p.length*o}else{const p=".bones["+t[d].name+"]";i(as,p+".position",f,"pos",s),i(rs,p+".quaternion",f,"rot",s),i(as,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};c(jp,"AnimationClip");let zh=jp;function GA(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ss;case"vector":case"vector2":case"vector3":case"vector4":return as;case"color":return al;case"quaternion":return rs;case"bool":case"boolean":return is;case"string":return os}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}c(GA,"getTrackTypeForValueTypeName");function WA(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=GA(n.type);if(n.times===void 0){const t=[],i=[];Q0(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}c(WA,"parseKeyframeTrack");const $i={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Xp=class Xp{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return u.push(h,d),this},this.removeHandler=function(h){const d=u.indexOf(h);return d!==-1&&u.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=u.length;d<f;d+=2){const p=u[d],_=u[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}};c(Xp,"LoadingManager");let kh=Xp;const jA=new kh,$p=class $p{constructor(e){this.manager=e!==void 0?e:jA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};c($p,"Loader");let ls=$p;ls.DEFAULT_MATERIAL_NAME="__DEFAULT";const hi={},Yp=class Yp extends Error{constructor(e,t){super(e),this.response=t}};c(Yp,"HttpError");let Vh=Yp;const Kp=class Kp extends ls{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=$i.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(hi[e]!==void 0){hi[e].push({onLoad:t,onProgress:i,onError:s});return}hi[e]=[],hi[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const h=hi[e],d=u.body.getReader(),f=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),p=f?parseInt(f):0,_=p!==0;let M=0;const g=new ReadableStream({start(m){A();function A(){d.read().then(({done:b,value:w})=>{if(b)m.close();else{M+=w.byteLength;const O=new ProgressEvent("progress",{lengthComputable:_,loaded:M,total:p});for(let P=0,C=h.length;P<C;P++){const L=h[P];L.onProgress&&L.onProgress(O)}m.enqueue(w),A()}},b=>{m.error(b)})}c(A,"readData")}});return new Response(g)}else throw new Vh(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return u.json();default:if(a===void 0)return u.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return u.arrayBuffer().then(_=>p.decode(_))}}}).then(u=>{$i.add(e,u);const h=hi[e];delete hi[e];for(let d=0,f=h.length;d<f;d++){const p=h[d];p.onLoad&&p.onLoad(u)}}).catch(u=>{const h=hi[e];if(h===void 0)throw this.manager.itemError(e),u;delete hi[e];for(let d=0,f=h.length;d<f;d++){const p=h[d];p.onError&&p.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};c(Kp,"FileLoader");let ll=Kp;const qp=class qp extends ls{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=$i.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=So("img");function l(){h(),$i.add(e,this),t&&t(this),r.manager.itemEnd(e)}c(l,"onImageLoad");function u(d){h(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}c(u,"onImageError");function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return c(h,"removeEventListeners"),a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};c(qp,"ImageLoader");let Hh=qp;const Zp=class Zp extends ls{constructor(e){super(e)}load(e,t,i,s){const r=new Qt,o=new Hh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}};c(Zp,"TextureLoader");let Gh=Zp;const Jp=class Jp extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};c(Jp,"Light");let Pr=Jp;const jc=new Ge,tv=new D,nv=new D,Qp=class Qp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eo,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;tv.setFromMatrixPosition(e.matrixWorld),t.position.copy(tv),nv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nv),t.updateMatrixWorld(),jc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(jc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};c(Qp,"LightShadow");let wo=Qp;const em=class em extends wo{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=wr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}};c(em,"SpotLightShadow");let Wh=em;const tm=class tm extends Pr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Wh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};c(tm,"SpotLight");let jh=tm;const iv=new Ge,Wr=new D,Xc=new D,nm=class nm extends wo{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ve(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Wr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Wr),Xc.copy(i.position),Xc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Xc),i.updateMatrixWorld(),s.makeTranslation(-Wr.x,-Wr.y,-Wr.z),iv.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(iv)}};c(nm,"PointLightShadow");let Xh=nm;const im=class im extends Pr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Xh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}};c(im,"PointLight");let Co=im;const sm=class sm extends wo{constructor(){super(new Rr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};c(sm,"DirectionalLightShadow");let $h=sm;const rm=class rm extends Pr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new $h}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};c(rm,"DirectionalLight");let Yh=rm;const om=class om extends Pr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};c(om,"AmbientLight");let cl=om;const am=class am{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};c(am,"LoaderUtils");let Us=am;const lm=class lm extends ls{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=$i.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(u=>{t&&t(u),r.manager.itemEnd(e)}).catch(u=>{s&&s(u)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(u){return $i.add(e,u),t&&t(u),r.manager.itemEnd(e),u}).catch(function(u){s&&s(u),$i.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});$i.add(e,l),r.manager.itemStart(e)}};c(lm,"ImageBitmapLoader");let Kh=lm;const cm=class cm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=sv();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};c(cm,"Clock");let ul=cm;function sv(){return performance.now()}c(sv,"now$1");const df="\\[\\]\\.:\\/",XA=new RegExp("["+df+"]","g"),ff="[^"+df+"]",$A="[^"+df.replace("\\.","")+"]",YA=/((?:WC+[\/:])*)/.source.replace("WC",ff),KA=/(WCOD+)?/.source.replace("WCOD",$A),qA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ff),ZA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ff),JA=new RegExp("^"+YA+KA+qA+ZA+"$"),QA=["material","materials","bones","map"],um=class um{constructor(e,t,i){const s=i||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}};c(um,"Composite");let qh=um;const Gi=class Gi{constructor(e,t,i){this.path=t,this.parsedPath=i||Gi.parseTrackName(t),this.node=Gi.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Gi.Composite(e,t,i):new Gi(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(XA,"")}static parseTrackName(e){const t=JA.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);QA.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=c(function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},"searchNodeSubtree"),s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Gi.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let u=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const o=e[s];if(o===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};c(Gi,"PropertyBinding");let _t=Gi;_t.Composite=qh;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const rv=new Ge,hm=class hm{constructor(e,t,i=0,s=1/0){this.ray=new ts(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new bo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return rv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rv),this}intersectObject(e,t=!0,i=[]){return Zh(e,this,i,t),i.sort(ov),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Zh(e[s],this,i,t);return i.sort(ov),i}};c(hm,"Raycaster");let hl=hm;function ov(n,e){return n.distance-e.distance}c(ov,"ascSort");function Zh(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Zh(r[o],e,t,!0)}}c(Zh,"intersect");const dm=class dm{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Wt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};c(dm,"Spherical");let dl=dm;const fm=class fm extends rl{constructor(e=10,t=10,i=4473924,s=8947848){i=new we(i),s=new we(s);const r=t/2,o=e/t,a=e/2,l=[],u=[];for(let f=0,p=0,_=-a;f<=t;f++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const M=f===r?i:s;M.toArray(u,p),p+=3,M.toArray(u,p),p+=3,M.toArray(u,p),p+=3,M.toArray(u,p),p+=3}const h=new en;h.setAttribute("position",new Vt(l,3)),h.setAttribute("color",new Vt(u,3));const d=new ks({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};c(fm,"GridHelper");let fl=fm;const pm=class pm extends yi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};c(pm,"Controls");let Jh=pm;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qd);const K=Fl({rotationX:0,rotationY:0,rotationZ:0,currentTool:"edit",currentMode:"object",currentRenderMode:"",secondaryColor:"#b15b2e",primaryColor:"#3e86a0",clearColor:"#222222",snapActive:!0,gridActive:!0,objectModeState:"select",setGridActive:()=>{},setCurrentMode:()=>{},brushSize:1,brushShape:"square",multipleSelections:!1,objectTransformChange:()=>{},isMouseDown:[!1,!1,!1,!1],treeShowInternal:!1,baseUrl:"/voxel-mesh-editor"}),Dl=class Dl extends It{constructor(t,i){super(t,i);ue(this,"clickEvents",new Set);ue(this,"dragEvents",new Set);ue(this,"hoverEvents",new Set);ue(this,"hoverOutEvents",new Set);ue(this,"transformEvents",new Set);ue(this,"selected",!1);ue(this,"internal",!1);ue(this,"draggable",!1);ue(this,"hover",!1);ue(this,"disableMouseEvents",!1);ue(this,"isMeshObject",!0)}static fromMesh(t){let i=new Dl(t.geometry,t.material);return i.name=t.name,i.userData={...t.userData},i.position.copy(t.position),i.rotation.copy(t.rotation),i.scale.copy(t.scale),i}updateMatrix(){super.updateMatrix(),this.transformEvents.forEach(t=>{t()})}select(){this.selected=!0}unselect(){this.selected=!1}addClickListener(t){this.clickEvents.add(t)}addDragListener(t){this.dragEvents.add(t)}addHoverEvent(t){this.hoverEvents.add(t)}addHoverOutEvent(t){this.hoverOutEvents.add(t)}addTransformEvents(t){this.transformEvents.add(t)}removeClickListener(t){this.clickEvents.delete(t)}removeDragListener(t){this.dragEvents.delete(t)}removeHoverEvent(t){this.hoverEvents.delete(t)}removeHoverOutEvent(t){this.hoverOutEvents.delete(t)}removeTransformEvents(t){this.transformEvents.delete(t)}invokeClickEvent(t){this.clickEvents.forEach(i=>{i(t)})}invokeDragEvent(t){this.dragEvents.forEach(i=>{i(t)})}invokeHoverEvent(t){this.hoverEvents.forEach(i=>{i(t)})}invokeHoverOutEvent(t){this.hoverOutEvents.forEach(i=>{i(t)})}clone(){const t=super.clone();for(const i of Object.keys(this))i in t||(t[i]=this[i]);return t}};c(Dl,"MeshObject");let Xn=Dl;const $c=[new D(0,0,0),new D(1,0,0),new D(1,1,0),new D(0,1,0),new D(0,0,1),new D(1,0,1),new D(1,1,1),new D(0,1,1)],ga=[[0,1],[1,2],[3,2],[0,3],[4,5],[5,6],[7,6],[4,7],[0,4],[1,5],[2,6],[3,7]],ew=[[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1],[3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1],[3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1],[3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1],[9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1],[1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1],[9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1],[2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1],[8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1],[9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1],[4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1],[3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1],[1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1],[4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1],[4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1],[9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1],[1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1],[5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1],[2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1],[9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1],[0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1],[2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1],[10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1],[4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1],[5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1],[5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1],[9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1],[0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1],[1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1],[10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1],[8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1],[2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1],[7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1],[9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1],[2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1],[11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1],[9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1],[5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1],[11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1],[11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1],[1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1],[9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1],[5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1],[2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1],[0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1],[5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1],[6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1],[0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1],[3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1],[6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1],[5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1],[1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1],[10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1],[6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1],[1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1],[8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1],[7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1],[3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1],[5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1],[0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1],[9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1],[8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1],[5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1],[0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1],[6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1],[10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1],[10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1],[8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1],[1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1],[3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1],[0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1],[10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1],[0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1],[3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1],[6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1],[9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1],[8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1],[3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1],[6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1],[0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1],[10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1],[10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1],[1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1],[2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1],[7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1],[7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1],[2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1],[1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1],[11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1],[8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1],[0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1],[7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1],[10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1],[2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1],[6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1],[7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1],[2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1],[1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1],[10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1],[10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1],[0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1],[7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1],[6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1],[8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1],[9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1],[6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1],[1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1],[4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1],[10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1],[8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1],[0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1],[1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1],[8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1],[10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1],[4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1],[10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1],[5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1],[11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1],[9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1],[6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1],[7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1],[3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1],[7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1],[9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1],[3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1],[6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1],[9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1],[1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1],[4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1],[7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1],[6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1],[3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1],[0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1],[6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1],[1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1],[0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1],[11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1],[6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1],[5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1],[9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1],[1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1],[1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1],[10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1],[0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1],[5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1],[10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1],[11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1],[0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1],[9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1],[7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1],[2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1],[8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1],[9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1],[9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1],[1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1],[9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1],[9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1],[5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1],[0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1],[10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1],[2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1],[0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1],[0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1],[9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1],[5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1],[3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1],[5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1],[8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1],[0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1],[9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1],[0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1],[1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1],[3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1],[4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1],[9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1],[11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1],[11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1],[2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1],[9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1],[3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1],[1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1],[4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1],[4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1],[0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1],[3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1],[3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1],[0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1],[9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1],[1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]],Qh=.5;function Yc(n){return`${n.x},${n.y},${n.z}`}c(Yc,"hash");function tw(n){let e=0;for(let t=0;t<8;t++)n[t]>Qh&&(e|=1<<t);return e}c(tw,"getConfigIndex");function nw(n,e,t){var o;const i=new ns(1,1,1,1,1,1),s=(o=i.index)==null?void 0:o.array.reverse(),r=i.getAttribute("position").array;for(let a=0;a<(s==null?void 0:s.length);a++)e.push(new D(r[s[a]*3]+n.x,r[s[a]*3+1]+n.y,r[s[a]*3+2]+n.z)),t.push(e.length-1);i.dispose()}c(nw,"addCubeFaces");function av(n,e,t,i,s,r=!0,o=!1){var d,f,p,_;const a=((f=(d=e[n.x])==null?void 0:d[n.y])==null?void 0:f[n.z])||0;if(!r&&a!==0){nw(n,t,i);return}const l=[];for(let M=0;M<8;M++){const g=n.clone().add($c[M]),m=((_=(p=e[g.x])==null?void 0:p[g.y])==null?void 0:_[g.z])||0;l[M]=m===0?0:1}const u=tw(l);if(u===0||u===255)return;let h=0;for(let M=0;M<5;M++)for(let g=0;g<3;g++){const m=ew[u][h];if(m===-1)return;const A=n.clone().add($c[ga[m][0]]),b=n.clone().add($c[ga[m][1]]),w=l[ga[m][0]];let P=l[ga[m][1]]-w;P==0?P=Qh:P=(Qh-w)/P;const C=A.clone().add(b.clone().sub(A).multiplyScalar(P));o?s.has(Yc(C))?i.push(s.get(Yc(C))):(t.push(C),i.push(t.length-1),s.set(Yc(C),t.length-1)):(t.push(C),i.push(t.length-1)),h++}}c(av,"marchCube");function ar(n,e,t,i,s){const r=t[n],o=s[e];t[n]=r.clone().add(o),i[n]=i[n]+1}c(ar,"addNeighbor");function iw(n,e){const t={},i={};for(let s=0;s<n.length;s++)t[s]=new D,i[s]=0;for(let s=0;s<e.length;s+=3){const r=e[s],o=e[s+1],a=e[s+2];ar(r,o,t,i,n),ar(r,a,t,i,n),ar(o,a,t,i,n),ar(o,r,t,i,n),ar(a,r,t,i,n),ar(a,o,t,i,n)}for(let s=0;s<n.length;s++){let r=t[s];const o=i[s];o>0&&(r=r.divideScalar(o),n[s]=r)}}c(iw,"smoothGeometry");const mm=class mm extends Xn{constructor(){super(new ns(0,0),new Zi);ue(this,"max",new D);ue(this,"min",new D);ue(this,"sphere");ue(this,"cube");ue(this,"data",{});ue(this,"marchCubes",!1);ue(this,"smoothNormals",!1);ue(this,"smoothGeometry",!1);ue(this,"lastDragTime",0);ue(this,"draw",c((t,i,s,r)=>{!this.marchCubes&&i==="round"&&(s+=3),s===0&&this.setVoxel(t.x,t.y,t.z,r);for(let o=-s;o<s;o++)for(let a=-s;a<s;a++)for(let l=-s;l<s;l++)i==="square"?this.setVoxel(t.x+o,t.y+a,t.z+l,r):i==="round"&&new D(o,a,l).length()<s&&this.setVoxel(t.x+o,t.y+a,t.z+l,r);this.update()},"draw"));ue(this,"update",c(()=>{this.geometry.dispose();const t=[],i=[],s=new Map;this.material.side=ii;for(const[o,a]of Object.entries(this.data)){let l=!1;for(const[u,h]of Object.entries(this.data[o])){let d=!1;for(const[f,p]of Object.entries(this.data[o][u])){const _=parseInt(o,10),M=parseInt(u,10),g=parseInt(f,10);this.max.x=Math.max(this.max.x,_),this.max.y=Math.max(this.max.y,M),this.max.z=Math.max(this.max.z,g),this.min.x=Math.min(this.min.x,_),this.min.y=Math.min(this.min.y,M),this.min.z=Math.min(this.min.z,g),p!==0&&(l=!0,d=!0),!this.marchCubes&&p!==0&&av(new D(_,M,g),this.data,t,i,s,!1,!1),p||delete h[f]}!d&&a[u]&&delete a[u]}!l&&this.data[o]&&delete this.data[o]}if(this.marchCubes)for(let o=this.min.x-1;o<this.max.x+1;o++)for(let a=this.min.y-1;a<this.max.y+1;a++)for(let l=this.min.z-1;l<this.max.z+1;l++)av(new D(o,a,l),this.data,t,i,s,this.marchCubes,this.smoothNormals||this.smoothGeometry);this.smoothGeometry&&this.marchCubes&&iw(t,i);const r=new Float32Array(t.length*3);for(let o=0;o<t.length;o++)r[o*3]=t[o].x,r[o*3+1]=t[o].y,r[o*3+2]=t[o].z;this.geometry=new en,this.geometry.setAttribute("position",new kt(r,3)),this.geometry.setIndex(i.reverse()),this.geometry.computeVertexNormals()},"update"));ue(this,"setVoxel",c((t,i,s,r)=>{this.data[t]||(this.data[t]={}),this.data[t][i]||(this.data[t][i]={}),this.data[t][i][s]=r},"setVoxel"));ue(this,"getVoxel",c((t,i,s)=>{var r,o;return((o=(r=this.data[t])==null?void 0:r[i])==null?void 0:o[s])||0},"getVoxel"));this.sphere=new It(new Lh(1),new Zi({transparent:!0,depthTest:!0,depthWrite:!1,opacity:.5,color:"#91b9c9",side:cn})),this.cube=new It(new ns(1,1,1),new Zi({transparent:!0,depthTest:!0,depthWrite:!1,opacity:.5,color:"#91b9c9",side:cn})),this.cube.visible=!1,this.sphere.visible=!1,this.cube.disableMouseEvents=!0,this.sphere.disableMouseEvents=!0,this.add(this.cube),this.add(this.sphere),this.addHoverEvent(t=>{var l,u,h;const i=this.sphere,s=this.cube;if(K.currentMode!=="sculpt"){i.visible=!1,s.visible=!1;return}this.marchCubes?(i.scale.setScalar(K.brushSize+1),s.scale.setScalar(K.brushSize*2+1)):(i.scale.setScalar(K.brushSize+2),s.scale.setScalar(K.brushSize===1?1:(K.brushSize-1)*2)),i.visible=K.brushShape==="round",s.visible=K.brushShape==="square";let r=t.intersect.point.clone().add((l=t.intersect.normal)==null?void 0:l.clone().divideScalar(10)).addScalar(.5).floor();K.brushShape==="square"&&K.brushSize>1&&(r=r.subScalar(.5)),r=this.worldToLocal(r),i.position.copy(r),s.position.copy(r);const o=K.isMouseDown[0]||K.isMouseDown[2],a=K.isMouseDown[0]&&K.isMouseDown[2];if(o&&t.ctrlKey&&!a&&Date.now()-this.lastDragTime>100){if(r=t.intersect.point.clone().add((u=t.intersect.normal)==null?void 0:u.clone().divideScalar(10)).addScalar(.5).floor(),K.isMouseDown[2]&&(r=r.add((h=t.intersect.normal)==null?void 0:h.clone().ceil().multiplyScalar(-1))),this.marchCubes){const d=K.brushSize+1;this.draw(r,K.brushShape,d,K.isMouseDown[2]?0:1)}else{const d=K.brushSize-1;this.draw(r,K.brushShape,d,K.isMouseDown[2]?0:1)}this.lastDragTime=Date.now()}}),this.addHoverOutEvent(()=>{const t=this.sphere,i=this.cube;t.visible=!1,i.visible=!1}),this.addClickListener(t=>{var i,s;if(K.currentMode==="sculpt"){let r=t.intersect.point.clone().add((i=t.intersect.normal)==null?void 0:i.clone().divideScalar(10)).addScalar(.5).floor();if(this.marchCubes||t.button==2&&(r=r.add((s=t.intersect.normal)==null?void 0:s.clone().ceil().multiplyScalar(-1))),r=this.worldToLocal(r),this.marchCubes){const o=K.brushSize+1;this.draw(r,K.brushShape,o,t.button===2?0:1)}else{const o=K.brushSize-1;this.draw(r,K.brushShape,o,t.button===2?0:1)}}})}clone(){const t=super.clone();for(const i of Object.keys(this))i in t||(t[i]=this[i]);t.data={};for(const[i,s]of Object.entries(this.data))for(const[r,o]of Object.entries(this.data))for(const[a,l]of Object.entries(this.data))t.setVoxel(+i,+r,+a,this.getVoxel(+i,+r,+a));return t}};c(mm,"VoxelMesh");let Ji=mm;const lv={type:"change"},pf={type:"start"},e1={type:"end"},_a=new ts,cv=new Pn,sw=Math.cos(70*Vi.DEG2RAD),Rt=new D,dn=2*Math.PI,pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Kc=1e-6,gm=class gm extends Jh{constructor(e,t=null){super(e,t),this.state=pt.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_r.ROTATE,MIDDLE:_r.DOLLY,RIGHT:_r.PAN},this.touches={ONE:lr.ROTATE,TWO:lr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Nn,this._lastTargetPosition=new D,this._quat=new Nn().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new dl,this._sphericalDelta=new dl,this._scale=1,this._panOffset=new D,this._rotateStart=new ve,this._rotateEnd=new ve,this._rotateDelta=new ve,this._panStart=new ve,this._panEnd=new ve,this._panDelta=new ve,this._dollyStart=new ve,this._dollyEnd=new ve,this._dollyDelta=new ve,this._dollyDirection=new D,this._mouse=new ve,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ow.bind(this),this._onPointerDown=rw.bind(this),this._onPointerUp=aw.bind(this),this._onContextMenu=pw.bind(this),this._onMouseWheel=uw.bind(this),this._onKeyDown=hw.bind(this),this._onTouchStart=dw.bind(this),this._onTouchMove=fw.bind(this),this._onMouseDown=lw.bind(this),this._onMouseMove=cw.bind(this),this._interceptControlDown=mw.bind(this),this._interceptControlUp=gw.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(lv),this.update(),this.state=pt.NONE}update(e=null){const t=this.object.position;Rt.copy(t).sub(this.target),Rt.applyQuaternion(this._quat),this._spherical.setFromVector3(Rt),this.autoRotate&&this.state===pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=dn:i>Math.PI&&(i-=dn),s<-Math.PI?s+=dn:s>Math.PI&&(s-=dn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Rt.setFromSpherical(this._spherical),Rt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Rt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Rt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const u=new D(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(a),this.object.updateMatrixWorld(),o=Rt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(_a.origin.copy(this.object.position),_a.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_a.direction))<sw?this.object.lookAt(this.target):(cv.setFromNormalAndCoplanarPoint(this.object.up,this.target),_a.intersectPlane(cv,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Kc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Kc||this._lastTargetPosition.distanceToSquared(this.target)>Kc?(this.dispatchEvent(lv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?dn/60*this.autoRotateSpeed*e:dn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Rt.setFromMatrixColumn(t,0),Rt.multiplyScalar(-e),this._panOffset.add(Rt)}_panUp(e,t){this.screenSpacePanning===!0?Rt.setFromMatrixColumn(t,1):(Rt.setFromMatrixColumn(t,0),Rt.crossVectors(this.object.up,Rt)),Rt.multiplyScalar(e),this._panOffset.add(Rt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Rt.copy(s).sub(this.target);let r=Rt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(dn*this._rotateDelta.x/t.clientHeight),this._rotateUp(dn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(dn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-dn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(dn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-dn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(dn*this._rotateDelta.x/t.clientHeight),this._rotateUp(dn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ve,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};c(gm,"OrbitControls");let ed=gm;function rw(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}c(rw,"onPointerDown");function ow(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}c(ow,"onPointerMove");function aw(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(e1),this.state=pt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}c(aw,"onPointerUp");function lw(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case _r.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=pt.DOLLY;break;case _r.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=pt.ROTATE}break;case _r.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=pt.PAN}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(pf)}c(lw,"onMouseDown");function cw(n){switch(this.state){case pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}c(cw,"onMouseMove");function uw(n){this.enabled===!1||this.enableZoom===!1||this.state!==pt.NONE||(n.preventDefault(),this.dispatchEvent(pf),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(e1))}c(uw,"onMouseWheel");function hw(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}c(hw,"onKeyDown");function dw(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case lr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=pt.TOUCH_ROTATE;break;case lr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=pt.TOUCH_PAN;break;default:this.state=pt.NONE}break;case 2:switch(this.touches.TWO){case lr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=pt.TOUCH_DOLLY_PAN;break;case lr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=pt.TOUCH_DOLLY_ROTATE;break;default:this.state=pt.NONE}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(pf)}c(dw,"onTouchStart");function fw(n){switch(this._trackPointer(n),this.state){case pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=pt.NONE}}c(fw,"onTouchMove");function pw(n){this.enabled!==!1&&n.preventDefault()}c(pw,"onContextMenu");function mw(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}c(mw,"interceptControlDown");function gw(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}c(gw,"interceptControlUp");const _m=class _m{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}};c(_m,"Pass");let cs=_m;const _w=new Rr(-1,1,1,-1,0,1),vm=class vm extends en{constructor(){super(),this.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Vt([0,2,0,0,2,0],2))}};c(vm,"FullscreenTriangleGeometry");let td=vm;const vw=new td,xm=class xm{constructor(e){this._mesh=new It(vw,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,_w)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};c(xm,"FullScreenQuad");let Ro=xm;function uv(n,e){if(e===my)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===oh||e===H0){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===oh)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}c(uv,"toTrianglesDrawMode");const Mm=class Mm extends ls{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new od(t)}),this.register(function(t){return new ad(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new vd(t)}),this.register(function(t){return new cd(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new rd(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new id(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new Md(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const u=Us.extractUrlBase(e);o=Us.resolveURL(u,this.path)}else o=Us.extractUrlBase(e);this.manager.itemStart(e);const a=c(function(u){s?s(u):console.error(u),r.manager.itemError(e),r.manager.itemEnd(e)},"_onError"),l=new ll(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{r.parse(u,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===t1){try{o[Ze.KHR_BINARY_GLTF]=new yd(e)}catch(d){s&&s(d);return}r=JSON.parse(o[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new Cd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](u);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(d){case Ze.KHR_MATERIALS_UNLIT:o[d]=new sd;break;case Ze.KHR_DRACO_MESH_COMPRESSION:o[d]=new Sd(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:o[d]=new bd;break;case Ze.KHR_MESH_QUANTIZATION:o[d]=new Ed;break;default:f.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}u.setExtensions(o),u.setPlugins(a),u.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};c(Mm,"GLTFLoader");let nd=Mm;function xw(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}c(xw,"GLTFRegistry");const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ym=class ym{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let u;const h=new we(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Yt);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":u=new Yh(h),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new Co(h),u.distance=d;break;case"spot":u=new jh(h),u.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,u.angle=l.spot.outerConeAngle,u.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return u.position.set(0,0,0),u.decay=2,pi(u,l),l.intensity!==void 0&&(u.intensity=l.intensity),u.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(u),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}};c(ym,"GLTFLightsExtension");let id=ym;const Sm=class Sm{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return vi}extendParams(e,t,i){const s=[];e.color=new we(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Yt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,ln))}return Promise.all(s)}};c(Sm,"GLTFMaterialsUnlitExtension");let sd=Sm;const bm=class bm{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}};c(bm,"GLTFMaterialsEmissiveStrengthExtension");let rd=bm;const Em=class Em{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ve(a,a)}return Promise.all(r)}};c(Em,"GLTFMaterialsClearcoatExtension");let od=Em;const Tm=class Tm{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}};c(Tm,"GLTFMaterialsDispersionExtension");let ad=Tm;const Am=class Am{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}};c(Am,"GLTFMaterialsIridescenceExtension");let ld=Am;const wm=class wm{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Yt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ln)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}};c(wm,"GLTFMaterialsSheenExtension");let cd=wm;const Cm=class Cm{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}};c(Cm,"GLTFMaterialsTransmissionExtension");let ud=Cm;const Rm=class Rm{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new we().setRGB(a[0],a[1],a[2],Yt),Promise.all(r)}};c(Rm,"GLTFMaterialsVolumeExtension");let hd=Rm;const Pm=class Pm{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}};c(Pm,"GLTFMaterialsIorExtension");let dd=Pm;const Dm=class Dm{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new we().setRGB(a[0],a[1],a[2],Yt),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,ln)),Promise.all(r)}};c(Dm,"GLTFMaterialsSpecularExtension");let fd=Dm;const Im=class Im{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}};c(Im,"GLTFMaterialsBumpExtension");let pd=Im;const Lm=class Lm{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}};c(Lm,"GLTFMaterialsAnisotropyExtension");let md=Lm;const Nm=class Nm{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}};c(Nm,"GLTFTextureBasisUExtension");let gd=Nm;const Om=class Om{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const u=i.options.manager.getHandler(a.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}};c(Om,"GLTFTextureWebPExtension");let _d=Om;const Um=class Um{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const u=i.options.manager.getHandler(a.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}};c(Um,"GLTFTextureAVIFExtension");let vd=Um;const Fm=class Fm{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,u=s.byteLength||0,h=s.count,d=s.byteStride,f=new Uint8Array(a,l,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,f,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(p),h,d,f,s.mode,s.filter),p})})}else return null}};c(Fm,"GLTFMeshoptCompression");let xd=Fm;const Bm=class Bm{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const u of s.primitives)if(u.mode!==Cn.TRIANGLES&&u.mode!==Cn.TRIANGLE_STRIP&&u.mode!==Cn.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const u in o)a.push(this.parser.getDependency("accessor",o[u]).then(h=>(l[u]=h,l[u])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(u=>{const h=u.pop(),d=h.isGroup?h.children:[h],f=u[0].count,p=[];for(const _ of d){const M=new Ge,g=new D,m=new Nn,A=new D(1,1,1),b=new Rh(_.geometry,_.material,f);for(let w=0;w<f;w++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,w),l.SCALE&&A.fromBufferAttribute(l.SCALE,w),b.setMatrixAt(w,M.compose(g,m,A));for(const w in l)if(w==="_COLOR_0"){const O=l[w];b.instanceColor=new Ao(O.array,O.itemSize,O.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&_.geometry.setAttribute(w,l[w]);xt.prototype.copy.call(b,_),this.parser.assignFinalMaterial(b),p.push(b)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}};c(Bm,"GLTFMeshGpuInstancing");let Md=Bm;const t1="glTF",jr=12,hv={JSON:1313821514,BIN:5130562},zm=class zm{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,jr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==t1)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-jr,r=new DataView(e,jr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===hv.JSON){const u=new Uint8Array(e,jr+o,a);this.content=i.decode(u)}else if(l===hv.BIN){const u=jr+o;this.body=e.slice(u,u+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}};c(zm,"GLTFBinaryExtension");let yd=zm;const km=class km{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},u={};for(const h in o){const d=Ad[h]||h.toLowerCase();a[d]=o[h]}for(const h in e.attributes){const d=Ad[h]||h.toLowerCase();if(o[h]!==void 0){const f=i.accessors[e.attributes[h]],p=Sr[f.componentType];u[d]=p.name,l[d]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,f){s.decodeDracoFile(h,function(p){for(const _ in p.attributes){const M=p.attributes[_],g=l[_];g!==void 0&&(M.normalized=g)}d(p)},a,u,Yt,f)})})}};c(km,"GLTFDracoMeshCompressionExtension");let Sd=km;const Vm=class Vm{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}};c(Vm,"GLTFTextureTransformExtension");let bd=Vm;const Hm=class Hm{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}};c(Hm,"GLTFMeshQuantizationExtension");let Ed=Hm;const Gm=class Gm extends Hs{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,u=a*3,h=s-t,d=(i-t)/h,f=d*d,p=f*d,_=e*u,M=_-u,g=-2*p+3*f,m=p-f,A=1-g,b=m-f+d;for(let w=0;w!==a;w++){const O=o[M+w+a],P=o[M+w+l]*h,C=o[_+w+a],L=o[_+w]*h;r[w]=A*O+b*P+g*C+m*L}return r}};c(Gm,"GLTFCubicSplineInterpolant");let pl=Gm;const Mw=new Nn,Wm=class Wm extends pl{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return Mw.fromArray(r).normalize().toArray(r),r}};c(Wm,"GLTFCubicSplineQuaternionInterpolant");let Td=Wm;const Cn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Sr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},dv={9728:$t,9729:Sn,9984:I0,9985:ba,9986:$r,9987:gi},fv={33071:ji,33648:ka,10497:Ar},qc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ad={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Oi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},yw={CUBICSPLINE:void 0,LINEAR:yo,STEP:Mo},Zc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Sw(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Zi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ii})),n.DefaultMaterial}c(Sw,"createDefaultMaterial");function Ts(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}c(Ts,"addUnknownExtensionsToUserData");function pi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}c(pi,"assignExtrasToUserData");function bw(n,e,t){let i=!1,s=!1,r=!1;for(let u=0,h=e.length;u<h;u++){const d=e[u];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],l=[];for(let u=0,h=e.length;u<h;u++){const d=e[u];if(i){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;o.push(f)}if(s){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;a.push(f)}if(r){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(u){const h=u[0],d=u[1],f=u[2];return i&&(n.morphAttributes.position=h),s&&(n.morphAttributes.normal=d),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}c(bw,"addMorphTargets");function Ew(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}c(Ew,"updateMorphTargets");function Tw(n){let e;const t=n.extensions&&n.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Jc(t.attributes):e=n.indices+":"+Jc(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Jc(n.targets[i]);return e}c(Tw,"createPrimitiveKey");function Jc(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}c(Jc,"createAttributesKey");function wd(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}c(wd,"getNormalizedComponentScale");function Aw(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}c(Aw,"getImageURIMimeType");const ww=new Ge,jm=class jm{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new xw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new Gh(this.options.manager):this.textureLoader=new Kh(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ll(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return Ts(r,a,s),pi(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=c((o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[u,h]of o.children.entries())r(h,a.children[u])},"updateMappings");return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(Us.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=qc[s.type],a=Sr[s.componentType],l=s.normalized===!0,u=new a(s.count*o);return Promise.resolve(new kt(u,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=qc[s.type],u=Sr[s.componentType],h=u.BYTES_PER_ELEMENT,d=h*l,f=s.byteOffset||0,p=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,_=s.normalized===!0;let M,g;if(p&&p!==d){const m=Math.floor(f/p),A="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let b=t.cache.get(A);b||(M=new u(a,m*p,s.count*p/h),b=new Th(M,p/h),t.cache.add(A,b)),g=new Ah(b,l,f%p/h,_)}else a===null?M=new u(s.count*l):M=new u(a,f,s.count*l),g=new kt(M,l,_);if(s.sparse!==void 0){const m=qc.SCALAR,A=Sr[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,w=s.sparse.values.byteOffset||0,O=new A(o[1],b,s.sparse.count*m),P=new u(o[2],w,s.sparse.count*l);a!==null&&(g=new kt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let C=0,L=O.length;C<L;C++){const ie=O[C];if(g.setX(ie,P[C*l]),l>=2&&g.setY(ie,P[C*l+1]),l>=3&&g.setZ(ie,P[C*l+2]),l>=4&&g.setW(ie,P[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=_}return g})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const u=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=dv[f.magFilter]||Sn,h.minFilter=dv[f.minFilter]||gi,h.wrapS=fv[f.wrapS]||Ar,h.wrapT=fv[f.wrapT]||Ar,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=u,u}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",u=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(d){u=!0;const f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(d){return new Promise(function(f,p){let _=f;t.isImageBitmapLoader===!0&&(_=c(function(M){const g=new Qt(M);g.needsUpdate=!0,f(g)},"onLoad")),t.load(Us.resolveURL(d,r.path),_,void 0,p)})}).then(function(d){return u===!0&&a.revokeObjectURL(l),pi(d,o),d.userData.mimeType=o.mimeType||Aw(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new ol,En.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new ks,En.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Zi}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},u=[];if(l[Ze.KHR_MATERIALS_UNLIT]){const d=s[Ze.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),u.push(d.extendParams(a,r,t))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new we(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Yt),a.opacity=f[3]}d.baseColorTexture!==void 0&&u.push(t.assignTexture(a,"map",d.baseColorTexture,ln)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),u.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=cn);const h=r.alphaMode||Zc.OPAQUE;if(h===Zc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Zc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==vi&&(u.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ve(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==vi&&(u.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==vi){const d=r.emissiveFactor;a.emissive=new we().setRGB(d[0],d[1],d[2],Yt)}return r.emissiveTexture!==void 0&&o!==vi&&u.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,ln)),Promise.all(u).then(function(){const d=new o(a);return r.name&&(d.name=r.name),pi(d,r),t.associations.set(d,{materials:e}),r.extensions&&Ts(s,d,r),d})}createUniqueName(e){const t=_t.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return pv(l,a,t)})}c(r,"createDracoPrimitive");const o=[];for(let a=0,l=e.length;a<l;a++){const u=e[a],h=Tw(u),d=s[h];if(d)o.push(d.promise);else{let f;u.extensions&&u.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?f=r(u):f=pv(new en,u,t),s[h]={primitive:u,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,u=o.length;l<u;l++){const h=o[l].material===void 0?Sw(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const u=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let p=0,_=h.length;p<_;p++){const M=h[p],g=o[p];let m;const A=u[p];if(g.mode===Cn.TRIANGLES||g.mode===Cn.TRIANGLE_STRIP||g.mode===Cn.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new wh(M,A):new It(M,A),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===Cn.TRIANGLE_STRIP?m.geometry=uv(m.geometry,H0):g.mode===Cn.TRIANGLE_FAN&&(m.geometry=uv(m.geometry,oh));else if(g.mode===Cn.LINES)m=new rl(M,A);else if(g.mode===Cn.LINE_STRIP)m=new Vs(M,A);else if(g.mode===Cn.LINE_LOOP)m=new Ph(M,A);else if(g.mode===Cn.POINTS)m=new Ih(M,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&Ew(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),pi(m,r),g.extensions&&Ts(s,m,g),t.assignFinalMaterial(m),d.push(m)}for(let p=0,_=d.length;p<_;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return r.extensions&&Ts(s,d[0],r),d[0];const f=new Xi;r.extensions&&Ts(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,_=d.length;p<_;p++)f.add(d[p]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new jt(Vi.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Rr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),pi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let u=0,h=o.length;u<h;u++){const d=o[u];if(d){a.push(d);const f=new Ge;r!==null&&f.fromArray(r.array,u*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new Ch(a,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],u=[],h=[];for(let d=0,f=s.channels.length;d<f;d++){const p=s.channels[d],_=s.samplers[p.sampler],M=p.target,g=M.node,m=s.parameters!==void 0?s.parameters[_.input]:_.input,A=s.parameters!==void 0?s.parameters[_.output]:_.output;M.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",A)),u.push(_),h.push(M))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(u),Promise.all(h)]).then(function(d){const f=d[0],p=d[1],_=d[2],M=d[3],g=d[4],m=[];for(let A=0,b=f.length;A<b;A++){const w=f[A],O=p[A],P=_[A],C=M[A],L=g[A];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const ie=i._createAnimationTracks(w,O,P,C,L);if(ie)for(let y=0;y<ie.length;y++)m.push(ie[y])}return new zh(r,void 0,m)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,u=s.weights.length;l<u;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let u=0,h=a.length;u<h;u++)o.push(i.getDependency("node",a[u]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(u){const h=u[0],d=u[1],f=u[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,ww)});for(let p=0,_=d.length;p<_;p++)h.add(d[p]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(u){return s._getNodeRef(s.cameraCache,r.camera,u)})),s._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){a.push(u)}),this.nodeCache[e]=Promise.all(a).then(function(u){let h;if(r.isBone===!0?h=new tl:u.length>1?h=new Xi:u.length===1?h=u[0]:h=new xt,h!==u[0])for(let d=0,f=u.length;d<f;d++)h.add(u[d]);if(r.name&&(h.userData.name=r.name,h.name=o),pi(h,r),r.extensions&&Ts(i,h,r),r.matrix!==void 0){const d=new Ge;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new Xi;i.name&&(r.name=s.createUniqueName(i.name)),pi(r,i),i.extensions&&Ts(t,r,i);const o=i.nodes||[],a=[];for(let l=0,u=o.length;l<u;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,d=l.length;h<d;h++)r.add(l[h]);const u=c(h=>{const d=new Map;for(const[f,p]of s.associations)(f instanceof En||f instanceof Qt)&&d.set(f,p);return h.traverse(f=>{const p=s.associations.get(f);p!=null&&d.set(f,p)}),d},"reduceAssociations");return s.associations=u(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];Oi[r.path]===Oi.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let u;switch(Oi[r.path]){case Oi.weights:u=ss;break;case Oi.rotation:u=rs;break;case Oi.position:case Oi.scale:u=as;break;default:switch(i.itemSize){case 1:u=ss;break;case 2:case 3:default:u=as;break}break}const h=s.interpolation!==void 0?yw[s.interpolation]:yo,d=this._getArrayFromAccessor(i);for(let f=0,p=l.length;f<p;f++){const _=new u(l[f]+"."+Oi[r.path],t.array,d,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=wd(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=c(function(i){const s=this instanceof rs?Td:pl;return new s(this.times,this.values,this.getValueSize()/3,i)},"InterpolantFactoryMethodGLTFCubicSpline"),e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};c(jm,"GLTFParser");let Cd=jm;function Cw(n,e,t){const i=e.attributes,s=new Yn;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,u=a.max;if(l!==void 0&&u!==void 0){if(s.set(new D(l[0],l[1],l[2]),new D(u[0],u[1],u[2])),a.normalized){const h=wd(Sr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new D,l=new D;for(let u=0,h=r.length;u<h;u++){const d=r[u];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],p=f.min,_=f.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),f.normalized){const M=wd(Sr[f.componentType]);l.multiplyScalar(M)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new On;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}c(Cw,"computeBounds");function pv(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}c(r,"assignAttributeAccessor");for(const o in i){const a=Ad[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return it.workingColorSpace!==Yt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${it.workingColorSpace}" not supported.`),pi(n,e),Cw(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?bw(n,e.targets,t):n})}c(pv,"addPrimitiveAttributes");const oo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},Xm=class Xm extends cs{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof yt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ls.clone(e.uniforms),this.material=new yt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ro(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};c(Xm,"ShaderPass");let ml=Xm;const $m=class $m extends cs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}};c($m,"MaskPass");let gl=$m;const Ym=class Ym extends cs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};c(Ym,"ClearMaskPass");let Rd=Ym;const Km=class Km{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new ve);this._width=i.width,this._height=i.height,t=new Pt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ml(oo),this.copyPass.material.blending=Ft,this.clock=new ul}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}gl!==void 0&&(o instanceof gl?i=!0:o instanceof Rd&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ve);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};c(Km,"EffectComposer");let Pd=Km;const Ds=class Ds extends cs{constructor(e,t,i,s){super(),this.renderScene=t,this.renderCamera=i,this.selectedObjects=s!==void 0?s:[],this.visibleEdgeColor=new we(1,1,1),this.hiddenEdgeColor=new we(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this._selectionCache=new Set,this.resolution=e!==void 0?new ve(e.x,e.y):new ve(256,256);const r=Math.round(this.resolution.x/this.downSampleRatio),o=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new Pt(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new Qa,this.depthMaterial.side=cn,this.depthMaterial.depthPacking=G0,this.depthMaterial.blending=Ft,this.prepareMaskMaterial=this.getPrepareMaskMaterial(),this.prepareMaskMaterial.side=cn,this.prepareMaskMaterial.fragmentShader=h(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new Pt(this.resolution.x,this.resolution.y,{type:pn}),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new Pt(r,o,{type:pn}),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new Pt(r,o,{type:pn}),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new Pt(Math.round(r/2),Math.round(o/2),{type:pn}),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this.getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new Pt(r,o,{type:pn}),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new Pt(Math.round(r/2),Math.round(o/2),{type:pn}),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const a=4,l=4;this.separableBlurMaterial1=this.getSeperableBlurMaterial(a),this.separableBlurMaterial1.uniforms.texSize.value.set(r,o),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this.getSeperableBlurMaterial(l),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(r/2),Math.round(o/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=l,this.overlayMaterial=this.getOverlayMaterial();const u=oo;this.copyUniforms=Ls.clone(u.uniforms),this.materialCopy=new yt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Ft,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new we,this.oldClearAlpha=1,this.fsQuad=new Ro(null),this.tempPulseColor1=new we,this.tempPulseColor2=new we,this.textureMatrix=new Ge;function h(d,f){const p=f.isPerspectiveCamera?"perspective":"orthographic";return d.replace(/DEPTH_TO_VIEW_Z/g,p+"DepthToViewZ")}c(h,"replaceDepthToViewZ")}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this.fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let i=Math.round(e/this.downSampleRatio),s=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(i,s),this.renderTargetBlurBuffer1.setSize(i,s),this.renderTargetEdgeBuffer1.setSize(i,s),this.separableBlurMaterial1.uniforms.texSize.value.set(i,s),i=Math.round(i/2),s=Math.round(s/2),this.renderTargetBlurBuffer2.setSize(i,s),this.renderTargetEdgeBuffer2.setSize(i,s),this.separableBlurMaterial2.uniforms.texSize.value.set(i,s)}updateSelectionCache(){const e=this._selectionCache;function t(i){i.isMesh&&e.add(i)}c(t,"gatherSelectedMeshesCallBack"),e.clear();for(let i=0;i<this.selectedObjects.length;i++)this.selectedObjects[i].traverse(t)}changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;for(const i of this._selectionCache)e===!0?i.visible=t.get(i):(t.set(i,i.visible),i.visible=e)}changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,i=this._selectionCache;function s(r){if(r.isMesh||r.isSprite){if(!i.has(r)){const o=r.visible;(e===!1||t.get(r)===!0)&&(r.visible=e),t.set(r,o)}}else(r.isPoints||r.isLine)&&(e===!0?r.visible=t.get(r):(t.set(r,r.visible),r.visible=e))}c(s,"VisibilityChangeCallBack"),this.renderScene.traverse(s)}updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}render(e,t,i,s,r){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,r&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this.updateSelectionCache(),this.changeVisibilityOfSelectedObjects(!1);const a=this.renderScene.background;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this.updateTextureMatrix(),this.changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.renderScene.overrideMaterial=null,this.changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this._selectionCache.clear(),this.renderScene.background=a,this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this.fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const l=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(l),this.tempPulseColor2.multiplyScalar(l)}this.fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Ds.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Ds.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=Ds.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=Ds.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,r&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(i),this.fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}this.renderToScreen&&(this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=i.texture,e.setRenderTarget(null),this.fsQuad.render(e))}getPrepareMaskMaterial(){return new yt({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new ve(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <morphtarget_pars_vertex>
				#include <skinning_pars_vertex>

				varying vec4 projTexCoord;
				varying vec4 vPosition;
				uniform mat4 textureMatrix;

				void main() {

					#include <skinbase_vertex>
					#include <begin_vertex>
					#include <morphtarget_vertex>
					#include <skinning_vertex>
					#include <project_vertex>

					vPosition = mvPosition;

					vec4 worldPosition = vec4( transformed, 1.0 );

					#ifdef USE_INSTANCING

						worldPosition = instanceMatrix * worldPosition;

					#endif

					worldPosition = modelMatrix * worldPosition;

					projTexCoord = textureMatrix * worldPosition;

				}`,fragmentShader:`#include <packing>
				varying vec4 vPosition;
				varying vec4 projTexCoord;
				uniform sampler2D depthTexture;
				uniform vec2 cameraNearFar;

				void main() {

					float depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));
					float viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );
					float depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;
					gl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);

				}`})}getEdgeDetectionMaterial(){return new yt({uniforms:{maskTexture:{value:null},texSize:{value:new ve(.5,.5)},visibleEdgeColor:{value:new D(1,1,1)},hiddenEdgeColor:{value:new D(1,1,1)}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform vec2 texSize;
				uniform vec3 visibleEdgeColor;
				uniform vec3 hiddenEdgeColor;

				void main() {
					vec2 invSize = 1.0 / texSize;
					vec4 uvOffset = vec4(1.0, 0.0, 0.0, 1.0) * vec4(invSize, invSize);
					vec4 c1 = texture2D( maskTexture, vUv + uvOffset.xy);
					vec4 c2 = texture2D( maskTexture, vUv - uvOffset.xy);
					vec4 c3 = texture2D( maskTexture, vUv + uvOffset.yw);
					vec4 c4 = texture2D( maskTexture, vUv - uvOffset.yw);
					float diff1 = (c1.r - c2.r)*0.5;
					float diff2 = (c3.r - c4.r)*0.5;
					float d = length( vec2(diff1, diff2) );
					float a1 = min(c1.g, c2.g);
					float a2 = min(c3.g, c4.g);
					float visibilityFactor = min(a1, a2);
					vec3 edgeColor = 1.0 - visibilityFactor > 0.001 ? visibleEdgeColor : hiddenEdgeColor;
					gl_FragColor = vec4(edgeColor, 1.0) * vec4(d);
				}`})}getSeperableBlurMaterial(e){return new yt({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new ve(.5,.5)},direction:{value:new ve(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;
				uniform float kernelRadius;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}

				void main() {
					vec2 invSize = 1.0 / texSize;
					float sigma = kernelRadius/2.0;
					float weightSum = gaussianPdf(0.0, sigma);
					vec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;
					vec2 delta = direction * invSize * kernelRadius/float(MAX_RADIUS);
					vec2 uvOffset = delta;
					for( int i = 1; i <= MAX_RADIUS; i ++ ) {
						float x = kernelRadius * float(i) / float(MAX_RADIUS);
						float w = gaussianPdf(x, sigma);
						vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);
						vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);
						diffuseSum += ((sample1 + sample2) * w);
						weightSum += (2.0 * w);
						uvOffset += delta;
					}
					gl_FragColor = diffuseSum/weightSum;
				}`})}getOverlayMaterial(){return new yt({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform sampler2D edgeTexture1;
				uniform sampler2D edgeTexture2;
				uniform sampler2D patternTexture;
				uniform float edgeStrength;
				uniform float edgeGlow;
				uniform bool usePatternTexture;

				void main() {
					vec4 edgeValue1 = texture2D(edgeTexture1, vUv);
					vec4 edgeValue2 = texture2D(edgeTexture2, vUv);
					vec4 maskColor = texture2D(maskTexture, vUv);
					vec4 patternColor = texture2D(patternTexture, 6.0 * vUv);
					float visibilityFactor = 1.0 - maskColor.g > 0.0 ? 1.0 : 0.5;
					vec4 edgeValue = edgeValue1 + edgeValue2 * edgeGlow;
					vec4 finalColor = edgeStrength * maskColor.r * edgeValue;
					if(usePatternTexture)
						finalColor += + visibilityFactor * (1.0 - maskColor.r) * (1.0 - patternColor.r);
					gl_FragColor = finalColor;
				}`,blending:Mu,depthTest:!1,depthWrite:!1,transparent:!0})}};c(Ds,"OutlinePass");let Po=Ds;Po.BlurDirectionX=new ve(1,0);Po.BlurDirectionY=new ve(0,1);const qm=class qm extends cs{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new we}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};c(qm,"RenderPass");let Dd=qm;const va={name:"SAOShader",defines:{NUM_SAMPLES:7,NUM_RINGS:4,DIFFUSE_TEXTURE:0,PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},tDiffuse:{value:null},tNormal:{value:null},size:{value:new ve(512,512)},cameraNear:{value:1},cameraFar:{value:100},cameraProjectionMatrix:{value:new Ge},cameraInverseProjectionMatrix:{value:new Ge},scale:{value:1},intensity:{value:.1},bias:{value:.5},minResolution:{value:0},kernelRadius:{value:100},randomSeed:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		#include <common>

		varying vec2 vUv;

		#if DIFFUSE_TEXTURE == 1
		uniform sampler2D tDiffuse;
		#endif

		uniform highp sampler2D tDepth;
		uniform highp sampler2D tNormal;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float scale;
		uniform float intensity;
		uniform float bias;
		uniform float kernelRadius;
		uniform float minResolution;
		uniform vec2 size;
		uniform float randomSeed;

		// RGBA depth

		#include <packing>

		vec4 getDefaultColor( const in vec2 screenPosition ) {
			#if DIFFUSE_TEXTURE == 1
			return texture2D( tDiffuse, vUv );
			#else
			return vec4( 1.0 );
			#endif
		}

		float getDepth( const in vec2 screenPosition ) {
			return texture2D( tDepth, screenPosition ).x;
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );
			#else
			return orthographicDepthToViewZ( depth, cameraNear, cameraFar );
			#endif
		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {
			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];
			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );
			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;
		}

		vec3 getViewNormal( const in vec3 viewPosition, const in vec2 screenPosition ) {
			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );
		}

		float scaleDividedByCameraFar;
		float minResolutionMultipliedByCameraFar;

		float getOcclusion( const in vec3 centerViewPosition, const in vec3 centerViewNormal, const in vec3 sampleViewPosition ) {
			vec3 viewDelta = sampleViewPosition - centerViewPosition;
			float viewDistance = length( viewDelta );
			float scaledScreenDistance = scaleDividedByCameraFar * viewDistance;

			return max(0.0, (dot(centerViewNormal, viewDelta) - minResolutionMultipliedByCameraFar) / scaledScreenDistance - bias) / (1.0 + pow2( scaledScreenDistance ) );
		}

		// moving costly divides into consts
		const float ANGLE_STEP = PI2 * float( NUM_RINGS ) / float( NUM_SAMPLES );
		const float INV_NUM_SAMPLES = 1.0 / float( NUM_SAMPLES );

		float getAmbientOcclusion( const in vec3 centerViewPosition ) {
			// precompute some variables require in getOcclusion.
			scaleDividedByCameraFar = scale / cameraFar;
			minResolutionMultipliedByCameraFar = minResolution * cameraFar;
			vec3 centerViewNormal = getViewNormal( centerViewPosition, vUv );

			// jsfiddle that shows sample pattern: https://jsfiddle.net/a16ff1p7/
			float angle = rand( vUv + randomSeed ) * PI2;
			vec2 radius = vec2( kernelRadius * INV_NUM_SAMPLES ) / size;
			vec2 radiusStep = radius;

			float occlusionSum = 0.0;
			float weightSum = 0.0;

			for( int i = 0; i < NUM_SAMPLES; i ++ ) {
				vec2 sampleUv = vUv + vec2( cos( angle ), sin( angle ) ) * radius;
				radius += radiusStep;
				angle += ANGLE_STEP;

				float sampleDepth = getDepth( sampleUv );
				if( sampleDepth >= ( 1.0 - EPSILON ) ) {
					continue;
				}

				float sampleViewZ = getViewZ( sampleDepth );
				vec3 sampleViewPosition = getViewPosition( sampleUv, sampleDepth, sampleViewZ );
				occlusionSum += getOcclusion( centerViewPosition, centerViewNormal, sampleViewPosition );
				weightSum += 1.0;
			}

			if( weightSum == 0.0 ) discard;

			return occlusionSum * ( intensity / weightSum );
		}

		void main() {
			float centerDepth = getDepth( vUv );
			if( centerDepth >= ( 1.0 - EPSILON ) ) {
				discard;
			}

			float centerViewZ = getViewZ( centerDepth );
			vec3 viewPosition = getViewPosition( vUv, centerDepth, centerViewZ );

			float ambientOcclusion = getAmbientOcclusion( viewPosition );

			gl_FragColor = getDefaultColor( vUv );
			gl_FragColor.xyz *=  1.0 - ambientOcclusion;
		}`},Ui={name:"DepthLimitedBlurShader",defines:{KERNEL_RADIUS:4,DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDiffuse:{value:null},size:{value:new ve(512,512)},sampleUvOffsets:{value:[new ve(0,0)]},sampleWeights:{value:[1]},tDepth:{value:null},cameraNear:{value:10},cameraFar:{value:1e3},depthCutoff:{value:10}},vertexShader:`

		#include <common>

		uniform vec2 size;

		varying vec2 vUv;
		varying vec2 vInvSize;

		void main() {
			vUv = uv;
			vInvSize = 1.0 / size;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		#include <common>
		#include <packing>

		uniform sampler2D tDiffuse;
		uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform float depthCutoff;

		uniform vec2 sampleUvOffsets[ KERNEL_RADIUS + 1 ];
		uniform float sampleWeights[ KERNEL_RADIUS + 1 ];

		varying vec2 vUv;
		varying vec2 vInvSize;

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );
			#else
			return orthographicDepthToViewZ( depth, cameraNear, cameraFar );
			#endif
		}

		void main() {
			float depth = getDepth( vUv );
			if( depth >= ( 1.0 - EPSILON ) ) {
				discard;
			}

			float centerViewZ = -getViewZ( depth );
			bool rBreak = false, lBreak = false;

			float weightSum = sampleWeights[0];
			vec4 diffuseSum = texture2D( tDiffuse, vUv ) * weightSum;

			for( int i = 1; i <= KERNEL_RADIUS; i ++ ) {

				float sampleWeight = sampleWeights[i];
				vec2 sampleUvOffset = sampleUvOffsets[i] * vInvSize;

				vec2 sampleUv = vUv + sampleUvOffset;
				float viewZ = -getViewZ( getDepth( sampleUv ) );

				if( abs( viewZ - centerViewZ ) > depthCutoff ) rBreak = true;

				if( ! rBreak ) {
					diffuseSum += texture2D( tDiffuse, sampleUv ) * sampleWeight;
					weightSum += sampleWeight;
				}

				sampleUv = vUv - sampleUvOffset;
				viewZ = -getViewZ( getDepth( sampleUv ) );

				if( abs( viewZ - centerViewZ ) > depthCutoff ) lBreak = true;

				if( ! lBreak ) {
					diffuseSum += texture2D( tDiffuse, sampleUv ) * sampleWeight;
					weightSum += sampleWeight;
				}

			}

			gl_FragColor = diffuseSum / weightSum;
		}`},_l={createSampleWeights:function(n,e){const t=[];for(let i=0;i<=n;i++)t.push(Rw(i,e));return t},createSampleOffsets:function(n,e){const t=[];for(let i=0;i<=n;i++)t.push(e.clone().multiplyScalar(i));return t},configure:function(n,e,t,i){n.defines.KERNEL_RADIUS=e,n.uniforms.sampleUvOffsets.value=_l.createSampleOffsets(e,i),n.uniforms.sampleWeights.value=_l.createSampleWeights(e,t),n.needsUpdate=!0}};function Rw(n,e){return Math.exp(-(n*n)/(2*(e*e)))/(Math.sqrt(2*Math.PI)*e)}c(Rw,"gaussian");const co=class co extends cs{constructor(e,t,i=new ve(256,256)){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.originalClearColor=new we,this._oldClearColor=new we,this.oldClearAlpha=1,this.params={output:0,saoBias:.5,saoIntensity:.18,saoScale:1,saoKernelRadius:100,saoMinResolution:0,saoBlur:!0,saoBlurRadius:8,saoBlurStdDev:4,saoBlurDepthCutoff:.01},this.resolution=new ve(i.x,i.y),this.saoRenderTarget=new Pt(this.resolution.x,this.resolution.y,{type:pn}),this.blurIntermediateRenderTarget=this.saoRenderTarget.clone();const s=new To;s.format=zs,s.type=Bs,this.normalRenderTarget=new Pt(this.resolution.x,this.resolution.y,{minFilter:$t,magFilter:$t,type:pn,depthTexture:s}),this.normalMaterial=new Nh,this.normalMaterial.blending=Ft,this.saoMaterial=new yt({defines:Object.assign({},va.defines),fragmentShader:va.fragmentShader,vertexShader:va.vertexShader,uniforms:Ls.clone(va.uniforms)}),this.saoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.saoMaterial.uniforms.tDepth.value=s,this.saoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.saoMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.blending=Ft,this.vBlurMaterial=new yt({uniforms:Ls.clone(Ui.uniforms),defines:Object.assign({},Ui.defines),vertexShader:Ui.vertexShader,fragmentShader:Ui.fragmentShader}),this.vBlurMaterial.defines.DEPTH_PACKING=0,this.vBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.vBlurMaterial.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.vBlurMaterial.uniforms.tDepth.value=s,this.vBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.vBlurMaterial.blending=Ft,this.hBlurMaterial=new yt({uniforms:Ls.clone(Ui.uniforms),defines:Object.assign({},Ui.defines),vertexShader:Ui.vertexShader,fragmentShader:Ui.fragmentShader}),this.hBlurMaterial.defines.DEPTH_PACKING=0,this.hBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.hBlurMaterial.uniforms.tDiffuse.value=this.blurIntermediateRenderTarget.texture,this.hBlurMaterial.uniforms.tDepth.value=s,this.hBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.hBlurMaterial.blending=Ft,this.materialCopy=new yt({uniforms:Ls.clone(oo.uniforms),vertexShader:oo.vertexShader,fragmentShader:oo.fragmentShader,blending:Ft}),this.materialCopy.transparent=!0,this.materialCopy.depthTest=!1,this.materialCopy.depthWrite=!1,this.materialCopy.blending=yu,this.materialCopy.blendSrc=R0,this.materialCopy.blendDst=Su,this.materialCopy.blendEquation=mi,this.materialCopy.blendSrcAlpha=C0,this.materialCopy.blendDstAlpha=Su,this.materialCopy.blendEquationAlpha=mi,this.fsQuad=new Ro(null)}render(e,t,i){this.renderToScreen&&(this.materialCopy.blending=Ft,this.materialCopy.uniforms.tDiffuse.value=i.texture,this.materialCopy.needsUpdate=!0,this.renderPass(e,this.materialCopy,null)),e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const s=e.autoClear;e.autoClear=!1,this.saoMaterial.uniforms.bias.value=this.params.saoBias,this.saoMaterial.uniforms.intensity.value=this.params.saoIntensity,this.saoMaterial.uniforms.scale.value=this.params.saoScale,this.saoMaterial.uniforms.kernelRadius.value=this.params.saoKernelRadius,this.saoMaterial.uniforms.minResolution.value=this.params.saoMinResolution,this.saoMaterial.uniforms.cameraNear.value=this.camera.near,this.saoMaterial.uniforms.cameraFar.value=this.camera.far;const r=this.params.saoBlurDepthCutoff*(this.camera.far-this.camera.near);this.vBlurMaterial.uniforms.depthCutoff.value=r,this.hBlurMaterial.uniforms.depthCutoff.value=r,this.vBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.vBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.hBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.hBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.params.saoBlurRadius=Math.floor(this.params.saoBlurRadius),(this.prevStdDev!==this.params.saoBlurStdDev||this.prevNumSamples!==this.params.saoBlurRadius)&&(_l.configure(this.vBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new ve(0,1)),_l.configure(this.hBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new ve(1,0)),this.prevStdDev=this.params.saoBlurStdDev,this.prevNumSamples=this.params.saoBlurRadius),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.renderPass(e,this.saoMaterial,this.saoRenderTarget,16777215,1),this.params.saoBlur&&(this.renderPass(e,this.vBlurMaterial,this.blurIntermediateRenderTarget,16777215,1),this.renderPass(e,this.hBlurMaterial,this.saoRenderTarget,16777215,1));const o=this.materialCopy;this.params.output===co.OUTPUT.Normal?(this.materialCopy.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.materialCopy.needsUpdate=!0):(this.materialCopy.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.materialCopy.needsUpdate=!0),this.params.output===co.OUTPUT.Default?o.blending=yu:o.blending=Ft,this.renderPass(e,o,this.renderToScreen?null:i),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=s}renderPass(e,t,i,s,r){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,i,s,r){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.saoRenderTarget.setSize(e,t),this.blurIntermediateRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.saoMaterial.uniforms.size.value.set(e,t),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.needsUpdate=!0,this.vBlurMaterial.uniforms.size.value.set(e,t),this.vBlurMaterial.needsUpdate=!0,this.hBlurMaterial.uniforms.size.value.set(e,t),this.hBlurMaterial.needsUpdate=!0}dispose(){this.saoRenderTarget.dispose(),this.blurIntermediateRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.normalMaterial.dispose(),this.saoMaterial.dispose(),this.vBlurMaterial.dispose(),this.hBlurMaterial.dispose(),this.materialCopy.dispose(),this.fsQuad.dispose()}};c(co,"SAOPass");let vl=co;vl.OUTPUT={Default:0,SAO:1,Normal:2};const Pw={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new ve(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

		//----------------------------------------------------------------------------------
		// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
		// SDK Version: v3.00
		// Email:       gameworks@nvidia.com
		// Site:        http://developer.nvidia.com/
		//
		// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
		//
		// Redistribution and use in source and binary forms, with or without
		// modification, are permitted provided that the following conditions
		// are met:
		//  * Redistributions of source code must retain the above copyright
		//    notice, this list of conditions and the following disclaimer.
		//  * Redistributions in binary form must reproduce the above copyright
		//    notice, this list of conditions and the following disclaimer in the
		//    documentation and/or other materials provided with the distribution.
		//  * Neither the name of NVIDIA CORPORATION nor the names of its
		//    contributors may be used to endorse or promote products derived
		//    from this software without specific prior written permission.
		//
		// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
		// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
		// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
		// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
		// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
		// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
		// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
		// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
		// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
		// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
		// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		//
		//----------------------------------------------------------------------------------

		#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
		#endif

		/*--------------------------------------------------------------------------*/
		#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
		#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
		/*--------------------------------------------------------------------------*/

		#define NUM_SAMPLES 5

		// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
		float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
		}

		/*============================================================================

									FXAA3 QUALITY - PC

		============================================================================*/

		/*--------------------------------------------------------------------------*/
		vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
		) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
				if(earlyExit) FxaaDiscard;
			#else
				if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
				// locate the edge
				vec2 dirToEdge;
				dirToEdge.x = contrastE > contrastW ? 1. : -1.;
				dirToEdge.y = contrastS > contrastN ? 1. : -1.;
				// . 2 .      . 1 .
				// 1 0 2  ~=  0 0 1
				// . 1 .      . 0 .

				// tap 2 pixels and see which ones are "outside" the edge, to
				// determine if the edge is vertical or horizontal

				vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongH = contrast( rgbaM, rgbaAlongH );
				// . 1 .
				// 0 0 1
				// . 0 H

				vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongV = contrast( rgbaM, rgbaAlongV );
				// V 1 .
				// 0 0 1
				// . 0 .

				relativeVContrast = matchAlongV - matchAlongH;
				relativeVContrast *= fxaaQualityinvEdgeThreshold;

				if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
					// 1 1 .
					// 0 0 1
					// . 0 1

					// do a simple blur
					return mix(
						rgbaM,
						(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
						.4
					);
				}

				horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {

				float increment = float(i + 1);

				if(!doneN) {
					nDist += increment;
					posN = posM + offNP * nDist;
					vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
					doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
					iterationsUsedN = i;
				}

				if(!doneP) {
					pDist += increment;
					posP = posM - offNP * pDist;
					vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
					doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
					iterationsUsedP = i;
				}

				if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
				doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
				doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
				rgbaM,
				rgbaN,
				dist * .5
			);
		}

		void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
				vUv,
				tDiffuse,
				resolution,
				edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
				invEdgeDetectionQuality
			);

		}
	`},uo=class uo{constructor(){ue(this,"translateX");ue(this,"translateY");ue(this,"translateZ");ue(this,"translateFree");ue(this,"scaleX");ue(this,"scaleY");ue(this,"scaleZ");ue(this,"scaleFree");ue(this,"rotateX");ue(this,"rotateY");ue(this,"rotateZ");ue(this,"rotateFree");ue(this,"rotateCover");ue(this,"scene",new xt);ue(this,"selectedObjects",[]);ue(this,"camera");ue(this,"rotateMaterialX");ue(this,"rotateMaterialY");ue(this,"rotateMaterialZ");ue(this,"update",c(e=>{this.camera=e,K.currentMode!=="object"&&(this.selectedObjects=[]);let t=e.position.distanceTo(this.scene.position);t<35&&(t=35),this.scene.scale.x=t/35,this.scene.scale.y=t/35,this.scene.scale.z=t/35,K.multipleSelections=this.selectedObjects.length>1,this.selectedObjects.length>0?(K.selectedObject=this.selectedObjects[this.selectedObjects.length-1],this.scene.position.set(0,0,0),this.selectedObjects.forEach(i=>{this.scene.position.add(i.position)}),this.scene.position.divideScalar(this.selectedObjects.length),this.setVisible(!0)):(this.setVisible(!1),K.selectedObject=void 0),this.rotateMaterialX&&(this.rotateMaterialX.uniforms.p.value=this.scene.position),this.rotateMaterialY&&(this.rotateMaterialY.uniforms.p.value=this.scene.position),this.rotateMaterialZ&&(this.rotateMaterialZ.uniforms.p.value=this.scene.position)},"update"));ue(this,"setVisible",c(e=>{this.scene.userData.visible=e,K.objectModeState==="move"&&K.currentMode==="object"?this.scene.traverse(t=>{t.visible=e&&[this.translateX,this.translateY,this.translateZ,this.translateFree].includes(t),t.draggable=t.visible,t.disableMouseEvents=!t.visible}):K.objectModeState==="scale"&&K.currentMode==="object"?this.scene.traverse(t=>{t.visible=e&&[this.scaleX,this.scaleY,this.scaleZ,this.scaleFree].includes(t),t.draggable=t.visible,t.disableMouseEvents=!t.visible}):K.objectModeState==="rotate"&&K.currentMode==="object"?this.scene.traverse(t=>{t.visible=e&&[this.rotateX,this.rotateY,this.rotateZ,this.rotateFree].includes(t),t.draggable=t.visible,t.disableMouseEvents=!t.visible}):(this.scene.traverse(t=>{t.visible=!1,t.draggable=!1,t.disableMouseEvents=!0}),this.scene.userData.visible=!1)},"setVisible"));const e=new nd;e.load(K.baseUrl+"/mesh/translate_mesh.glb",t=>{var s,r,o;[...t.scene.children].forEach(a=>{let l=a;l.isMesh&&(l=Xn.fromMesh(l),l.draggable=!1,l.internal=!0,l.geometry.computeBoundingBox()),l.name==="X"?(this.translateX=l,this.scene.add(l)):l.name==="Y"?(this.translateY=l,this.scene.add(l)):l.name==="Z"?(this.translateZ=l,this.scene.add(l)):l.name==="Free"&&(this.translateFree=l,this.scene.add(l))}),(s=this.translateX)==null||s.addDragListener(a=>{K.objectModeState!=="move"||K.currentMode!=="object"||this.selectedObjects.forEach(l=>{a.isFirstMovement&&(l.userData.position=l.position.clone());let u=a.movement3dXZ.x-a.movement3dOriginXZ.x;l.userData.position.x+=u,K.snapActive?l.position.x=Math.round(l.userData.position.x/10)*10:l.position.x=l.userData.position.x})}),(r=this.translateY)==null||r.addDragListener(a=>{K.objectModeState!=="move"||K.currentMode!=="object"||this.selectedObjects.forEach(l=>{a.isFirstMovement&&(l.userData.position=l.position.clone());let u=a.movement3dY.y-a.movement3dOriginY.y;l.userData.position.y+=u,K.snapActive?l.position.y=Math.round(l.userData.position.y/10)*10:l.position.y=l.userData.position.y})}),(o=this.translateZ)==null||o.addDragListener(a=>{K.objectModeState!=="move"||K.currentMode!=="object"||this.selectedObjects.forEach(l=>{a.isFirstMovement&&(l.userData.position=l.position.clone());let u=a.movement3dXZ.z-a.movement3dOriginXZ.z;l.userData.position.z+=u,K.snapActive?l.position.z=Math.round(l.userData.position.z/10)*10:l.position.z=l.userData.position.z})})},()=>{},console.error),e.load(K.baseUrl+"/mesh/scale_mesh.glb",t=>{var s,r,o;[...t.scene.children].forEach(a=>{let l=a;l.isMesh&&(l=Xn.fromMesh(l),l.draggable=!1,l.internal=!0,l.geometry.computeBoundingBox()),l.name==="X"?(this.scaleX=l,this.scene.add(l)):l.name==="Y"?(this.scaleY=l,this.scene.add(l)):l.name==="Z"?(this.scaleZ=l,this.scene.add(l)):l.name==="Free"&&(this.scaleFree=l,this.scene.add(l))}),(s=this.scaleX)==null||s.addDragListener(a=>{K.objectModeState!=="scale"||K.currentMode!=="object"||this.selectedObjects.forEach(l=>{a.isFirstMovement&&(l.userData.scale=l.scale.clone());let u=a.movement3dXZ.x-a.movement3dOriginXZ.x;l.userData.scale.x+=u/2,K.snapActive?l.scale.x=Math.round(l.userData.scale.x/2.5)*2.5:l.scale.x=l.userData.scale.x,l.scale.x=Math.max(l.scale.x,1)})}),(r=this.scaleY)==null||r.addDragListener(a=>{K.objectModeState!=="scale"||K.currentMode!=="object"||this.selectedObjects.forEach(l=>{a.isFirstMovement&&(l.userData.scale=l.scale.clone());let u=a.movement3dY.y-a.movement3dOriginY.y;l.userData.scale.y+=u/2,K.snapActive?l.scale.y=Math.round(l.userData.scale.y/2.5)*2.5:l.scale.y=l.userData.scale.y,l.scale.y=Math.max(l.scale.y,1)})}),(o=this.scaleZ)==null||o.addDragListener(a=>{K.objectModeState!=="scale"||K.currentMode!=="object"||this.selectedObjects.forEach(l=>{a.isFirstMovement&&(l.userData.scale=l.scale.clone());let u=a.movement3dXZ.z-a.movement3dOriginXZ.z;l.userData.scale.z-=u/2,K.snapActive?l.scale.z=Math.round(l.userData.scale.z/2.5)*2.5:l.scale.z=l.userData.scale.z,l.scale.z=Math.max(l.scale.z,1)})})},()=>{},console.error),e.load(K.baseUrl+"/mesh/rotate_mesh.glb",t=>{var r,o,a;const i=[...t.scene.children],s=c(l=>new yt({vertexShader:`
                    varying vec3 vWorldPosition;
    
                    void main() {
                        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
                        vWorldPosition = worldPosition.xyz;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                    `,fragmentShader:`
                    uniform vec3 p;
                    uniform vec3 color;
    
                    varying vec3 vWorldPosition;
    
                    void main() {
                        vec3 toFragment = vWorldPosition - p;
                        vec3 planeNormal = normalize(cameraPosition - p);
                        float dotProduct = dot(planeNormal, toFragment);
                        if (dotProduct < 0.0) {
                            discard;
                        }
                        gl_FragColor = vec4(color.xyz / 1.5, 1.0);
                    }
                    `,uniforms:{color:{value:l},p:{value:new D(0)}}}),"createRotateShader");this.rotateMaterialX=s(new we("#E70200")),this.rotateMaterialY=s(new we("#30E700")),this.rotateMaterialZ=s(new we("#1500E7")),i.forEach(l=>{let u=l;u.isMesh&&(u=Xn.fromMesh(u),u.draggable=!1,u.internal=!0,u.geometry.computeBoundingBox()),u.name==="X"?(u.material=this.rotateMaterialX,this.rotateX=u,this.scene.add(u)):u.name==="Y"?(u.material=this.rotateMaterialY,this.rotateY=u,this.scene.add(u)):u.name==="Z"?(u.material=this.rotateMaterialZ,this.rotateZ=u,this.scene.add(u)):u.name==="Free"&&(this.rotateFree=u,u.material.side=cn)}),(r=this.rotateX)==null||r.addDragListener(l=>{K.objectModeState!=="rotate"||K.currentMode!=="object"||this.selectedObjects.forEach(u=>{l.isFirstMovement&&(u.userData.rotation=u.rotation.clone(),u.userData.prevAngleX=Math.atan2(l.movement3dOriginY.z,l.movement3dOriginY.y));const h=Math.atan2(l.movement3dY.z,l.movement3dY.y);let d=h-u.userData.prevAngleX;d>Math.PI?d-=2*Math.PI:d<-Math.PI&&(d+=2*Math.PI),u.userData.prevAngleX=h,u.userData.rotation.x+=d,K.snapActive?u.rotation.x=Math.round(u.userData.rotation.x/(Math.PI/18))*(Math.PI/18):u.rotation.x=u.userData.rotation.x})}),(o=this.rotateY)==null||o.addDragListener(l=>{K.objectModeState!=="rotate"||K.currentMode!=="object"||this.selectedObjects.forEach(u=>{l.isFirstMovement&&(u.userData.rotation=u.rotation.clone(),u.userData.prevAngle=Math.atan2(l.movement3dOriginXZ.z,l.movement3dOriginXZ.x));const h=Math.atan2(l.movement3dXZ.z,l.movement3dXZ.x);let d=h-u.userData.prevAngle;d>Math.PI?d-=2*Math.PI:d<-Math.PI&&(d+=2*Math.PI),u.userData.prevAngle=h,u.userData.rotation.y-=d,K.snapActive?u.rotation.y=Math.round(u.userData.rotation.y/(Math.PI/18))*(Math.PI/18):u.rotation.y=u.userData.rotation.y})}),(a=this.rotateZ)==null||a.addDragListener(l=>{K.objectModeState!=="rotate"||K.currentMode!=="object"||this.selectedObjects.forEach(u=>{l.isFirstMovement&&(u.userData.rotation=u.rotation.clone(),u.userData.prevAngleZ=Math.atan2(l.movement3dOriginY.y,l.movement3dOriginY.x));const h=Math.atan2(l.movement3dY.y,l.movement3dY.x);let d=h-u.userData.prevAngleZ;d>Math.PI?d-=2*Math.PI:d<-Math.PI&&(d+=2*Math.PI),u.userData.prevAngleZ=h,u.userData.rotation.z+=d,K.snapActive?u.rotation.z=Math.round(u.userData.rotation.z/(Math.PI/18))*(Math.PI/18):u.rotation.z=u.userData.rotation.z})})},()=>{},console.error)}};c(uo,"TransformationContext"),ue(uo,"INSTANCE",new uo);let Qe=uo;const Dw=tn({methods:{mouseIn(n){this[n]=!0},mouseOut(n){this[n]=!1},addVoxelMesh(){var e,t,i,s;const n=new Ji;n.draw(new D,"square",5,1),n.update(),(e=K.renderingContext)==null||e.clickableObjects.push(n),(t=K.renderingContext)==null||t.scene.add(n),K.currentMode==="object"&&(n.select(),Qe.INSTANCE.selectedObjects.push(n),(s=(i=K.renderingContext)==null?void 0:i.outlinePass)!=null&&s.selectedObjects&&(K.renderingContext.outlinePass.selectedObjects=Qe.INSTANCE.selectedObjects)),this.mouseInAdd=!1},addVoxel(){var e,t,i,s;const n=new Ji;n.draw(new D,"square",0,1),n.update(),(e=K.renderingContext)==null||e.clickableObjects.push(n),(t=K.renderingContext)==null||t.scene.add(n),K.currentMode==="object"&&(n.select(),Qe.INSTANCE.selectedObjects.push(n),(s=(i=K.renderingContext)==null?void 0:i.outlinePass)!=null&&s.selectedObjects&&(K.renderingContext.outlinePass.selectedObjects=Qe.INSTANCE.selectedObjects)),this.mouseInAdd=!1}},data(){return{mouseInFile:!1,mouseInEdit:!1,mouseInAdd:!1,state:K}}}),nn=c((n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},"_export_sfc"),ql=c(n=>(Si("data-v-e1a3ff57"),n=n(),bi(),n),"_withScopeId$8"),Iw={class:"top-section"},Lw={class:"menu-bar"},Nw={key:0,class:"menu-list"},Ow=ql(()=>J("div",{class:"menu-list-item"},"Open",-1)),Uw=ql(()=>J("div",{class:"menu-list-item"},"Save",-1)),Fw=ql(()=>J("div",{class:"menu-list-item"},"Import",-1)),Bw=ql(()=>J("div",{class:"menu-list-item"},"Export",-1)),zw=[Ow,Uw,Fw,Bw],kw={key:0,class:"menu-list"},Vw={key:0,class:"menu-list"};function Hw(n,e,t,i,s,r){return He(),ot("div",Iw,[J("div",Lw,[J("div",{onMouseenter:e[0]||(e[0]=o=>n.mouseIn("mouseInFile")),onMouseleave:e[1]||(e[1]=o=>n.mouseOut("mouseInFile")),class:"menu-item"},[J("div",{class:Gt("menu-item-button "+(n.mouseInFile?"menu-item-button-open":""))}," File ",2),n.mouseInFile?(He(),ot("div",Nw,zw)):bt("",!0)],32),J("div",{onMouseenter:e[4]||(e[4]=o=>n.mouseIn("mouseInEdit")),onMouseleave:e[5]||(e[5]=o=>n.mouseOut("mouseInEdit")),class:"menu-item"},[J("div",{class:Gt("menu-item-button "+(n.mouseInEdit?"menu-item-button-open":""))}," Edit ",2),n.mouseInEdit?(He(),ot("div",kw,[J("div",{onClick:e[2]||(e[2]=o=>{var a;(a=n.state.renderingContext)==null||a.copy(),n.mouseInEdit=!1}),class:"menu-list-item"},"Copy (Ctrl + C)"),J("div",{onClick:e[3]||(e[3]=o=>{var a;(a=n.state.renderingContext)==null||a.paste(),n.mouseInEdit=!1}),class:"menu-list-item"},"Paste (Ctrl + v)")])):bt("",!0)],32),J("div",{onMouseenter:e[8]||(e[8]=o=>n.mouseIn("mouseInAdd")),onMouseleave:e[9]||(e[9]=o=>n.mouseOut("mouseInAdd")),class:"menu-item"},[J("div",{class:Gt("menu-item-button "+(n.mouseInAdd?"menu-item-button-open":""))}," Add ",2),n.mouseInAdd?(He(),ot("div",Vw,[J("div",{onClick:e[6]||(e[6]=(...o)=>n.addVoxelMesh&&n.addVoxelMesh(...o)),class:"menu-list-item"},"Voxel Mesh"),J("div",{onClick:e[7]||(e[7]=(...o)=>n.addVoxel&&n.addVoxel(...o)),class:"menu-list-item"},"Voxel")])):bt("",!0)],32)])])}c(Hw,"_sfc_render$f");const Gw=nn(Dw,[["render",Hw],["__scopeId","data-v-e1a3ff57"]]),mf=tn({props:{defaultCollapsed:Boolean,item:xt,level:Number,index:Number},mounted(){this.interval=setInterval(()=>{this.$forceUpdate()},100)},unmounted(){clearInterval(this.interval)},methods:{checkChange(n,e,t,i){var r,o,a;let s;if(t?(r=window.renderingContext)==null||r.scene.traverse(l=>{l.id===n.id&&(s=l)}):s=n,!!s){if(i&&!this.isItemInternal(s)&&(s.visible=!s.visible),s.isMeshObject&&!this.isItemInternal(s)&&e.target.checked&&!s.selected&&!i&&(s.select(),Qe.INSTANCE.selectedObjects.push(s),(o=K.renderingContext)!=null&&o.outlinePass&&(K.renderingContext.outlinePass.selectedObjects=Qe.INSTANCE.selectedObjects)),s.isMeshObject&&!this.isItemInternal(s)&&!e.target.checked&&s.selected&&!i){s.unselect();let l=Qe.INSTANCE.selectedObjects.indexOf(s);l!==-1&&(Qe.INSTANCE.selectedObjects.splice(l,1),(a=K.renderingContext)!=null&&a.outlinePass&&(K.renderingContext.outlinePass.selectedObjects=Qe.INSTANCE.selectedObjects))}s&&s.children.forEach(l=>{this.checkChange(l,e,!1,i)})}},itemHasChildren(n){return n?K.treeShowInternal?n.children.length>0:((n==null?void 0:n.children.filter(e=>e.isMeshObject).length)||0)>0:!1},areAllChildrenSelected(n){if(!n)return!1;let e=0;for(const t of n.children)if(t instanceof Xn&&!this.isItemInternal(t)&&(e++,!t.selected))return!1;return e>0},isItemInternal(n){return n?(!n.isMeshObject||n.internal)&&!n.userData.isRootScene:!0}},setup(n){const e=X1(null);return{hoverIndex:e,onMouseOver:c(s=>{e.value=s},"onMouseOver"),onMouseLeave:c(()=>{e.value=null},"onMouseLeave"),interval:0,collapsed:n.defaultCollapsed}},data(){return{state:K}}}),mv=c(()=>{Xl(n=>({"19cb90bd":`calc(100% - ${(n.level||0)*16}px)`}))},"__injectCSSVars__$3"),gv=mf.setup;mf.setup=gv?(n,e)=>(mv(),gv(n,e)):mv;const Ww={class:"item"},jw={style:{"margin-left":"4px"}},Xw={class:"title-right"},$w=["disabled","checked"];function Yw(n,e,t,i,s,r){var a,l,u,h,d,f,p;const o=Ut("SceneTreeItem",!0);return He(),ot("div",Ww,[J("div",{style:zt(`transform: translateX(${(n.level||0)*16}px);width:100%`)},[J("div",{class:Gt(["title",{hovered:n.hoverIndex===n.index}]),onMouseover:e[3]||(e[3]=_=>n.onMouseOver(n.index)),onMouseleave:e[4]||(e[4]=(..._)=>n.onMouseLeave&&n.onMouseLeave(..._))},[J("div",{onClick:e[0]||(e[0]=_=>{n.collapsed=!n.collapsed}),class:"title-left"},[J("i",{class:Gt({"bi bi-caret-down-fill":!n.collapsed,"bi bi-caret-right-fill":n.collapsed}),style:zt(`display: ${n.itemHasChildren(n.item)?"block":"none"}`)},null,6),J("div",jw,Rn(((a=n.item)==null?void 0:a.name)||((l=n.item)==null?void 0:l.constructor.name)+`<#${(u=n.item)==null?void 0:u.id}>`),1)]),J("div",Xw,[n.isItemInternal(n.item)?bt("",!0):(He(),ot("i",{key:0,onClick:e[1]||(e[1]=_=>n.checkChange(n.item,_,!0,!0)),class:Gt({"bi bi-eye-fill":(h=n.item)==null?void 0:h.visible,"bi bi-eye-slash-fill":!((d=n.item)!=null&&d.visible)})},null,2)),J("input",{disabled:n.state.currentMode!=="object"||n.isItemInternal(n.item),onChange:e[2]||(e[2]=_=>n.checkChange(n.item,_,!0,!1)),type:"checkbox",checked:((f=n.item)==null?void 0:f.selected)||n.areAllChildrenSelected(n.item)},null,40,$w)])],34),n.collapsed?bt("",!0):(He(!0),ot(Bt,{key:0},hu((p=n.item)==null?void 0:p.children,(_,M)=>(He(),ot("div",{key:_.id||M,style:{width:"100%"}},[!n.isItemInternal(_)||n.state.treeShowInternal?(He(),an(o,{key:0,defaultCollapsed:!1,item:_,level:(n.level||0)+1,index:M},null,8,["item","level","index"])):bt("",!0)]))),128))],4)])}c(Yw,"_sfc_render$e");const Kw=nn(mf,[["render",Yw],["__scopeId","data-v-ac5faa3f"]]),qw=tn({components:{SceneTreeItem:Kw},data(){return{state:K}}}),Zw=c(n=>(Si("data-v-3c6d7e44"),n=n(),bi(),n),"_withScopeId$7"),Jw={class:"scene-tree-browser"},Qw={class:"scene-tree-options"},eC=Zw(()=>J("h5",null,"Show internal",-1)),tC={class:"scene-tree-list"};function nC(n,e,t,i,s,r){var a,l;const o=Ut("SceneTreeItem");return He(),ot("div",Jw,[J("div",Qw,[eC,J("input",{onChange:e[0]||(e[0]=u=>n.state.treeShowInternal=u.target.checked),type:"checkbox"},null,32)]),J("div",tC,[Ne(o,{"default-collapsed":!1,item:(l=(a=n.state)==null?void 0:a.renderingContext)==null?void 0:l.scene,level:0,index:0},null,8,["item"])])])}c(nC,"_sfc_render$d");const iC=nn(qw,[["render",nC],["__scopeId","data-v-3c6d7e44"]]),sC=tn({props:{unit:String,value:Number},emits:{changeValue:n=>{}},methods:{changeCallback(n){this.$emit("changeValue",+n.target.value)},focus(){this.focused=!0},unFocus(){this.focused=!1},click(){const n=this.$el.querySelector("input");this.focused||(n.focus(),n.select())}},data(){return{focused:!1}}}),rC=["value"],oC={class:"number-input-icon"};function aC(n,e,t,i,s,r){return He(),ot("div",{onClick:e[3]||(e[3]=(...o)=>n.click&&n.click(...o)),class:"number-input"},[J("input",{onFocusin:e[0]||(e[0]=()=>{}),onFocusout:e[1]||(e[1]=()=>{}),onKeyup:e[2]||(e[2]=(...o)=>n.changeCallback&&n.changeCallback(...o)),value:n.value||0,style:{"margin-left":"4px"},type:"number"},null,40,rC),J("div",oC,Rn(n.unit),1)])}c(aC,"_sfc_render$c");const n1=nn(sC,[["render",aC],["__scopeId","data-v-ce353066"]]),lC=tn({components:{NumberInput:n1},props:{xp:Number,yp:Number,zp:Number},emits:{changeValue:n=>{}},methods:{xc(n){this.x=n,this.$emit("changeValue",new D(this.x,this.y,this.z))},yc(n){this.y=n,this.$emit("changeValue",new D(this.x,this.y,this.z))},zc(n){this.z=n,this.$emit("changeValue",new D(this.x,this.y,this.z))}},data(){return{x:0,y:0,z:0}}}),gf=c(n=>(Si("data-v-2459f16c"),n=n(),bi(),n),"_withScopeId$6"),cC={class:"container"},uC=gf(()=>J("h5",null,"X:",-1)),hC={class:"container"},dC=gf(()=>J("h5",null,"Y:",-1)),fC={class:"container"},pC=gf(()=>J("h5",null,"Z:",-1));function mC(n,e,t,i,s,r){const o=Ut("NumberInput");return He(),ot(Bt,null,[J("div",cC,[uC,Ne(o,{onChangeValue:n.xc,unit:"m",value:n.xp},null,8,["onChangeValue","value"])]),J("div",hC,[dC,Ne(o,{onChangeValue:n.yc,unit:"m",value:n.yp},null,8,["onChangeValue","value"])]),J("div",fC,[pC,Ne(o,{onChangeValue:n.zc,unit:"m",value:n.zp},null,8,["onChangeValue","value"])])],64)}c(mC,"_sfc_render$b");const gC=nn(lC,[["render",mC],["__scopeId","data-v-2459f16c"]]),_C=tn({components:{NumberInput:n1,Vector3Input:gC},methods:{marchCubes(n){K.selectedObject instanceof Ji&&(K.selectedObject.marchCubes=n.target.checked,K.selectedObject.update())},smoothNormals(n){K.selectedObject instanceof Ji&&(K.selectedObject.smoothNormals=n.target.checked,K.selectedObject.update())},smoothGeometry(n){K.selectedObject instanceof Ji&&(K.selectedObject.smoothGeometry=n.target.checked,K.selectedObject.update())},positionChange(n){K.selectedObject&&K.selectedObject.position.copy(n)},scaleChange(n){K.selectedObject&&K.selectedObject.scale.copy(n)},rotationChange(n){K.selectedObject&&(K.selectedObject.rotation.x=n.x,K.selectedObject.rotation.y=n.y,K.selectedObject.rotation.z=n.z)},collapse(n){const e=this.$refs[n];this[n+"Open"]?e.style.maxHeight="0px":e.style.maxHeight=e.scrollHeight+"px",this[n+"Open"]=!this[n+"Open"]}},mounted(){this.interval=setInterval(()=>{this.$forceUpdate()},50)},unmounted(){clearInterval(this.interval)},updated(){["position","scale","rotation","voxel"].forEach(n=>{const e=this.$refs[n];e&&e.style&&this[n+"Open"]&&(e.style.maxHeight=e.scrollHeight+"px")})},data(){return{state:K,interval:0,positionOpen:!0,scaleOpen:!0,rotationOpen:!0,voxelOpen:!0}}}),ds=c(n=>(Si("data-v-be1a8074"),n=n(),bi(),n),"_withScopeId$5"),vC={key:0,class:"object-options-list"},xC={key:1,class:"object-options-list"},MC=ds(()=>J("h5",{style:{"margin-left":"8px"}},"Position",-1)),yC=ds(()=>J("h5",{style:{"margin-left":"8px"}},"Scale",-1)),SC=ds(()=>J("h5",{style:{"margin-left":"8px"}},"Rotation",-1)),bC=ds(()=>J("h5",{style:{"margin-left":"8px"}},"Voxel mesh",-1)),EC={key:0,class:"object-option"},TC=ds(()=>J("h5",null,"March cubes",-1)),AC=["checked"],wC={key:1,class:"object-option"},CC=ds(()=>J("h5",null,"Smooth normals",-1)),RC=["checked"],PC={key:2,class:"object-option"},DC=ds(()=>J("h5",null,"Smooth",-1)),IC=["checked"],LC={key:2,class:"object-options-list"},NC=ds(()=>J("div",{class:"object-option-group-title",style:{"text-align":"left"}},[J("h5")],-1));function OC(n,e,t,i,s,r){var a;const o=Ut("Vector3Input");return He(),ot(Bt,null,[n.state.multipleSelections?(He(),ot("div",vC," Multiple - "+Rn((a=n.state.selectedObject)==null?void 0:a.constructor.name),1)):n.state.selectedObject?(He(),ot("div",xC,[ti(Rn(n.state.selectedObject.constructor.name)+" ",1),J("div",{onClick:e[0]||(e[0]=l=>n.collapse("position")),class:"object-option-group-title",style:{"text-align":"left"}},[J("i",{class:Gt({"bi bi-caret-down-fill":n.positionOpen,"bi bi-caret-right-fill":!n.positionOpen})},null,2),MC]),J("div",{class:Gt(["object-option-group",{collapse:!n.positionOpen}]),ref:"position"},[Ne(o,{xp:n.state.selectedObject.position.x||0,yp:n.state.selectedObject.position.y||0,zp:n.state.selectedObject.position.z||0,onChangeValue:n.positionChange},null,8,["xp","yp","zp","onChangeValue"])],2),J("div",{onClick:e[1]||(e[1]=l=>n.collapse("scale")),class:"object-option-group-title",style:{"text-align":"left"}},[J("i",{class:Gt({"bi bi-caret-down-fill":n.scaleOpen,"bi bi-caret-right-fill":!n.scaleOpen})},null,2),yC]),J("div",{class:Gt(["object-option-group",{collapse:!n.scaleOpen}]),ref:"scale"},[Ne(o,{xp:n.state.selectedObject.scale.x||0,yp:n.state.selectedObject.scale.y||0,zp:n.state.selectedObject.scale.z||0,onChangeValue:n.scaleChange},null,8,["xp","yp","zp","onChangeValue"])],2),J("div",{onClick:e[2]||(e[2]=l=>n.collapse("rotation")),class:"object-option-group-title",style:{"text-align":"left"}},[J("i",{class:Gt({"bi bi-caret-down-fill":n.rotationOpen,"bi bi-caret-right-fill":!n.rotationOpen})},null,2),SC]),J("div",{class:Gt(["object-option-group",{collapse:!n.rotationOpen}]),ref:"rotation"},[Ne(o,{xp:n.state.selectedObject.rotation.x||0,yp:n.state.selectedObject.rotation.y||0,zp:n.state.selectedObject.rotation.z||0,onChangeValue:n.rotationChange},null,8,["xp","yp","zp","onChangeValue"])],2),J("div",{onClick:e[3]||(e[3]=l=>n.collapse("voxel")),class:"object-option-group-title",style:{"text-align":"left"}},[J("i",{class:Gt({"bi bi-caret-down-fill":n.voxelOpen,"bi bi-caret-right-fill":!n.voxelOpen})},null,2),bC]),J("div",{class:Gt(["object-option-group",{collapse:!n.voxelOpen}]),ref:"voxel"},[n.state.selectedObject.constructor.name==="VoxelMesh"?(He(),ot("div",EC,[TC,J("input",{onChange:e[4]||(e[4]=(...l)=>n.marchCubes&&n.marchCubes(...l)),checked:n.state.selectedObject.marchCubes,type:"checkbox"},null,40,AC)])):bt("",!0),n.state.selectedObject.marchCubes&&!n.state.selectedObject.smoothGeometry?(He(),ot("div",wC,[CC,J("input",{onChange:e[5]||(e[5]=(...l)=>n.smoothNormals&&n.smoothNormals(...l)),checked:n.state.selectedObject.smoothNormals,type:"checkbox"},null,40,RC)])):bt("",!0),n.state.selectedObject.marchCubes?(He(),ot("div",PC,[DC,J("input",{onChange:e[6]||(e[6]=(...l)=>n.smoothGeometry&&n.smoothGeometry(...l)),checked:n.state.selectedObject.smoothGeometry,type:"checkbox"},null,40,IC)])):bt("",!0)],2)])):(He(),ot("div",LC," No object selected ")),NC],64)}c(OC,"_sfc_render$a");const UC=nn(_C,[["render",OC],["__scopeId","data-v-be1a8074"]]),FC={name:"splitpanes",emits:["ready","resize","resized","pane-click","pane-maximize","pane-add","pane-remove","splitter-click"],props:{horizontal:{type:Boolean},pushOtherPanes:{type:Boolean,default:!0},dblClickSplitter:{type:Boolean,default:!0},rtl:{type:Boolean,default:!1},firstSplitter:{type:Boolean}},provide(){return{requestUpdate:this.requestUpdate,onPaneAdd:this.onPaneAdd,onPaneRemove:this.onPaneRemove,onPaneClick:this.onPaneClick}},data:()=>({container:null,ready:!1,panes:[],touch:{mouseDown:!1,dragging:!1,activeSplitter:null},splitterTaps:{splitter:null,timeoutId:null}}),computed:{panesCount(){return this.panes.length},indexedPanes(){return this.panes.reduce((n,e)=>(n[e.id]=e)&&n,{})}},methods:{updatePaneComponents(){this.panes.forEach(n=>{n.update&&n.update({[this.horizontal?"height":"width"]:`${this.indexedPanes[n.id].size}%`})})},bindEvents(){document.addEventListener("mousemove",this.onMouseMove,{passive:!1}),document.addEventListener("mouseup",this.onMouseUp),"ontouchstart"in window&&(document.addEventListener("touchmove",this.onMouseMove,{passive:!1}),document.addEventListener("touchend",this.onMouseUp))},unbindEvents(){document.removeEventListener("mousemove",this.onMouseMove,{passive:!1}),document.removeEventListener("mouseup",this.onMouseUp),"ontouchstart"in window&&(document.removeEventListener("touchmove",this.onMouseMove,{passive:!1}),document.removeEventListener("touchend",this.onMouseUp))},onMouseDown(n,e){this.bindEvents(),this.touch.mouseDown=!0,this.touch.activeSplitter=e},onMouseMove(n){this.touch.mouseDown&&(n.preventDefault(),this.touch.dragging=!0,this.calculatePanesSize(this.getCurrentMouseDrag(n)),this.$emit("resize",this.panes.map(e=>({min:e.min,max:e.max,size:e.size}))))},onMouseUp(){this.touch.dragging&&this.$emit("resized",this.panes.map(n=>({min:n.min,max:n.max,size:n.size}))),this.touch.mouseDown=!1,setTimeout(()=>{this.touch.dragging=!1,this.unbindEvents()},100)},onSplitterClick(n,e){"ontouchstart"in window&&(n.preventDefault(),this.dblClickSplitter&&(this.splitterTaps.splitter===e?(clearTimeout(this.splitterTaps.timeoutId),this.splitterTaps.timeoutId=null,this.onSplitterDblClick(n,e),this.splitterTaps.splitter=null):(this.splitterTaps.splitter=e,this.splitterTaps.timeoutId=setTimeout(()=>{this.splitterTaps.splitter=null},500)))),this.touch.dragging||this.$emit("splitter-click",this.panes[e])},onSplitterDblClick(n,e){let t=0;this.panes=this.panes.map((i,s)=>(i.size=s===e?i.max:i.min,s!==e&&(t+=i.min),i)),this.panes[e].size-=t,this.$emit("pane-maximize",this.panes[e]),this.$emit("resized",this.panes.map(i=>({min:i.min,max:i.max,size:i.size})))},onPaneClick(n,e){this.$emit("pane-click",this.indexedPanes[e])},getCurrentMouseDrag(n){const e=this.container.getBoundingClientRect(),{clientX:t,clientY:i}="ontouchstart"in window&&n.touches?n.touches[0]:n;return{x:t-e.left,y:i-e.top}},getCurrentDragPercentage(n){n=n[this.horizontal?"y":"x"];const e=this.container[this.horizontal?"clientHeight":"clientWidth"];return this.rtl&&!this.horizontal&&(n=e-n),n*100/e},calculatePanesSize(n){const e=this.touch.activeSplitter;let t={prevPanesSize:this.sumPrevPanesSize(e),nextPanesSize:this.sumNextPanesSize(e),prevReachedMinPanes:0,nextReachedMinPanes:0};const i=0+(this.pushOtherPanes?0:t.prevPanesSize),s=100-(this.pushOtherPanes?0:t.nextPanesSize),r=Math.max(Math.min(this.getCurrentDragPercentage(n),s),i);let o=[e,e+1],a=this.panes[o[0]]||null,l=this.panes[o[1]]||null;const u=a.max<100&&r>=a.max+t.prevPanesSize,h=l.max<100&&r<=100-(l.max+this.sumNextPanesSize(e+1));if(u||h){u?(a.size=a.max,l.size=Math.max(100-a.max-t.prevPanesSize-t.nextPanesSize,0)):(a.size=Math.max(100-l.max-t.prevPanesSize-this.sumNextPanesSize(e+1),0),l.size=l.max);return}if(this.pushOtherPanes){const d=this.doPushOtherPanes(t,r);if(!d)return;({sums:t,panesToResize:o}=d),a=this.panes[o[0]]||null,l=this.panes[o[1]]||null}a!==null&&(a.size=Math.min(Math.max(r-t.prevPanesSize-t.prevReachedMinPanes,a.min),a.max)),l!==null&&(l.size=Math.min(Math.max(100-r-t.nextPanesSize-t.nextReachedMinPanes,l.min),l.max))},doPushOtherPanes(n,e){const t=this.touch.activeSplitter,i=[t,t+1];return e<n.prevPanesSize+this.panes[i[0]].min&&(i[0]=this.findPrevExpandedPane(t).index,n.prevReachedMinPanes=0,i[0]<t&&this.panes.forEach((s,r)=>{r>i[0]&&r<=t&&(s.size=s.min,n.prevReachedMinPanes+=s.min)}),n.prevPanesSize=this.sumPrevPanesSize(i[0]),i[0]===void 0)?(n.prevReachedMinPanes=0,this.panes[0].size=this.panes[0].min,this.panes.forEach((s,r)=>{r>0&&r<=t&&(s.size=s.min,n.prevReachedMinPanes+=s.min)}),this.panes[i[1]].size=100-n.prevReachedMinPanes-this.panes[0].min-n.prevPanesSize-n.nextPanesSize,null):e>100-n.nextPanesSize-this.panes[i[1]].min&&(i[1]=this.findNextExpandedPane(t).index,n.nextReachedMinPanes=0,i[1]>t+1&&this.panes.forEach((s,r)=>{r>t&&r<i[1]&&(s.size=s.min,n.nextReachedMinPanes+=s.min)}),n.nextPanesSize=this.sumNextPanesSize(i[1]-1),i[1]===void 0)?(n.nextReachedMinPanes=0,this.panes[this.panesCount-1].size=this.panes[this.panesCount-1].min,this.panes.forEach((s,r)=>{r<this.panesCount-1&&r>=t+1&&(s.size=s.min,n.nextReachedMinPanes+=s.min)}),this.panes[i[0]].size=100-n.prevPanesSize-n.nextReachedMinPanes-this.panes[this.panesCount-1].min-n.nextPanesSize,null):{sums:n,panesToResize:i}},sumPrevPanesSize(n){return this.panes.reduce((e,t,i)=>e+(i<n?t.size:0),0)},sumNextPanesSize(n){return this.panes.reduce((e,t,i)=>e+(i>n+1?t.size:0),0)},findPrevExpandedPane(n){return[...this.panes].reverse().find(e=>e.index<n&&e.size>e.min)||{}},findNextExpandedPane(n){return this.panes.find(e=>e.index>n+1&&e.size>e.min)||{}},checkSplitpanesNodes(){Array.from(this.container.children).forEach(n=>{const e=n.classList.contains("splitpanes__pane"),t=n.classList.contains("splitpanes__splitter");!e&&!t&&(n.parentNode.removeChild(n),console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."))})},addSplitter(n,e,t=!1){const i=n-1,s=document.createElement("div");s.classList.add("splitpanes__splitter"),t||(s.onmousedown=r=>this.onMouseDown(r,i),typeof window<"u"&&"ontouchstart"in window&&(s.ontouchstart=r=>this.onMouseDown(r,i)),s.onclick=r=>this.onSplitterClick(r,i+1)),this.dblClickSplitter&&(s.ondblclick=r=>this.onSplitterDblClick(r,i+1)),e.parentNode.insertBefore(s,e)},removeSplitter(n){n.onmousedown=void 0,n.onclick=void 0,n.ondblclick=void 0,n.parentNode.removeChild(n)},redoSplitters(){const n=Array.from(this.container.children);n.forEach(t=>{t.className.includes("splitpanes__splitter")&&this.removeSplitter(t)});let e=0;n.forEach(t=>{t.className.includes("splitpanes__pane")&&(!e&&this.firstSplitter?this.addSplitter(e,t,!0):e&&this.addSplitter(e,t),e++)})},requestUpdate({target:n,...e}){const t=this.indexedPanes[n._.uid];Object.entries(e).forEach(([i,s])=>t[i]=s)},onPaneAdd(n){let e=-1;Array.from(n.$el.parentNode.children).some(s=>(s.className.includes("splitpanes__pane")&&e++,s===n.$el));const t=parseFloat(n.minSize),i=parseFloat(n.maxSize);this.panes.splice(e,0,{id:n._.uid,index:e,min:isNaN(t)?0:t,max:isNaN(i)?100:i,size:n.size===null?null:parseFloat(n.size),givenSize:n.size,update:n.update}),this.panes.forEach((s,r)=>s.index=r),this.ready&&this.$nextTick(()=>{this.redoSplitters(),this.resetPaneSizes({addedPane:this.panes[e]}),this.$emit("pane-add",{index:e,panes:this.panes.map(s=>({min:s.min,max:s.max,size:s.size}))})})},onPaneRemove(n){const e=this.panes.findIndex(i=>i.id===n._.uid),t=this.panes.splice(e,1)[0];this.panes.forEach((i,s)=>i.index=s),this.$nextTick(()=>{this.redoSplitters(),this.resetPaneSizes({removedPane:{...t,index:e}}),this.$emit("pane-remove",{removed:t,panes:this.panes.map(i=>({min:i.min,max:i.max,size:i.size}))})})},resetPaneSizes(n={}){!n.addedPane&&!n.removedPane?this.initialPanesSizing():this.panes.some(e=>e.givenSize!==null||e.min||e.max<100)?this.equalizeAfterAddOrRemove(n):this.equalize(),this.ready&&this.$emit("resized",this.panes.map(e=>({min:e.min,max:e.max,size:e.size})))},equalize(){const n=100/this.panesCount;let e=0;const t=[],i=[];this.panes.forEach(s=>{s.size=Math.max(Math.min(n,s.max),s.min),e-=s.size,s.size>=s.max&&t.push(s.id),s.size<=s.min&&i.push(s.id)}),e>.1&&this.readjustSizes(e,t,i)},initialPanesSizing(){let n=100;const e=[],t=[];let i=0;this.panes.forEach(r=>{n-=r.size,r.size!==null&&i++,r.size>=r.max&&e.push(r.id),r.size<=r.min&&t.push(r.id)});let s=100;n>.1&&(this.panes.forEach(r=>{r.size===null&&(r.size=Math.max(Math.min(n/(this.panesCount-i),r.max),r.min)),s-=r.size}),s>.1&&this.readjustSizes(n,e,t))},equalizeAfterAddOrRemove({addedPane:n,removedPane:e}={}){let t=100/this.panesCount,i=0;const s=[],r=[];n&&n.givenSize!==null&&(t=(100-n.givenSize)/(this.panesCount-1)),this.panes.forEach(o=>{i-=o.size,o.size>=o.max&&s.push(o.id),o.size<=o.min&&r.push(o.id)}),!(Math.abs(i)<.1)&&(this.panes.forEach(o=>{n&&n.givenSize!==null&&n.id===o.id||(o.size=Math.max(Math.min(t,o.max),o.min)),i-=o.size,o.size>=o.max&&s.push(o.id),o.size<=o.min&&r.push(o.id)}),i>.1&&this.readjustSizes(i,s,r))},readjustSizes(n,e,t){let i;n>0?i=n/(this.panesCount-e.length):i=n/(this.panesCount-t.length),this.panes.forEach((s,r)=>{if(n>0&&!e.includes(s.id)){const o=Math.max(Math.min(s.size+i,s.max),s.min),a=o-s.size;n-=a,s.size=o}else if(!t.includes(s.id)){const o=Math.max(Math.min(s.size+i,s.max),s.min),a=o-s.size;n-=a,s.size=o}s.update({[this.horizontal?"height":"width"]:`${this.indexedPanes[s.id].size}%`})}),Math.abs(n)>.1&&this.$nextTick(()=>{this.ready&&console.warn("Splitpanes: Could not resize panes correctly due to their constraints.")})}},watch:{panes:{deep:!0,immediate:!1,handler(){this.updatePaneComponents()}},horizontal(){this.updatePaneComponents()},firstSplitter(){this.redoSplitters()},dblClickSplitter(n){[...this.container.querySelectorAll(".splitpanes__splitter")].forEach((e,t)=>{e.ondblclick=n?i=>this.onSplitterDblClick(i,t):void 0})}},beforeUnmount(){this.ready=!1},mounted(){this.container=this.$refs.container,this.checkSplitpanesNodes(),this.redoSplitters(),this.resetPaneSizes(),this.$emit("ready"),this.ready=!0},render(){return S0("div",{ref:"container",class:["splitpanes",`splitpanes--${this.horizontal?"horizontal":"vertical"}`,{"splitpanes--dragging":this.touch.dragging}]},this.$slots.default())}},BC=c((n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},"S"),zC={name:"pane",inject:["requestUpdate","onPaneAdd","onPaneRemove","onPaneClick"],props:{size:{type:[Number,String],default:null},minSize:{type:[Number,String],default:0},maxSize:{type:[Number,String],default:100}},data:()=>({style:{}}),mounted(){this.onPaneAdd(this)},beforeUnmount(){this.onPaneRemove(this)},methods:{update(n){this.style=n}},computed:{sizeNumber(){return this.size||this.size===0?parseFloat(this.size):null},minSizeNumber(){return parseFloat(this.minSize)},maxSizeNumber(){return parseFloat(this.maxSize)}},watch:{sizeNumber(n){this.requestUpdate({target:this,size:n})},minSizeNumber(n){this.requestUpdate({target:this,min:n})},maxSizeNumber(n){this.requestUpdate({target:this,max:n})}}};function kC(n,e,t,i,s,r){return He(),ot("div",{class:"splitpanes__pane",onClick:e[0]||(e[0]=o=>r.onPaneClick(o,n._.uid)),style:zt(n.style)},[Zt(n.$slots,"default")],4)}c(kC,"P");const VC=BC(zC,[["render",kC]]),HC=tn({components:{SceneTree:iC,Splitpanes:FC,Pane:VC,ObjectProperties:UC},methods:{resized(){var n;this.panelHeight=((n=this.panel)==null?void 0:n.clientHeight)||0}},mounted(){this.panel=document.querySelector(".properties-panel"),this.observer=new ResizeObserver(this.resized),this.observer.observe(this.panel),this.resized()},unmounted(){var n;(n=this.observer)==null||n.disconnect()},data(){return{observer:void 0,panel:void 0,panelHeight:0}}}),GC={class:"properties-panel"};function WC(n,e,t,i,s,r){const o=Ut("SceneTree"),a=Ut("pane"),l=Ut("ObjectProperties"),u=Ut("splitpanes");return He(),ot("div",GC,[Ne(u,{class:"default-theme",horizontal:"",style:zt(`height: ${n.panelHeight+"px"}`)},{default:gr(()=>[Ne(a,{"min-size":"10"},{default:gr(()=>[Ne(o)]),_:1}),Ne(a,{"min-size":"10"},{default:gr(()=>[Ne(l)]),_:1})]),_:1},8,["style"])])}c(WC,"_sfc_render$9");const jC=nn(HC,[["render",WC],["__scopeId","data-v-0530e74d"]]),XC=tn({}),$C={class:"bottom-section"},YC=x0('<div class="tree-browser" data-v-20ff719f></div><div class="visual-browser-container" data-v-20ff719f><div class="browser-tools" data-v-20ff719f><div class="browser-tools-add" data-v-20ff719f>Add +</div><div class="browser-tools-title" data-v-20ff719f>Material Browser</div><div class="browser-tools-search" data-v-20ff719f><input placeholder="Search" type="text" data-v-20ff719f><div class="browser-tools-search-icon" data-v-20ff719f><i class="bi bi-search" data-v-20ff719f></i></div></div></div><div class="visual-browser" data-v-20ff719f></div></div>',2),KC=[YC];function qC(n,e,t,i,s,r){return He(),ot("div",$C,KC)}c(qC,"_sfc_render$8");const ZC=nn(XC,[["render",qC],["__scopeId","data-v-20ff719f"]]);function Qc(n){return n===0?!1:Array.isArray(n)&&n.length===0?!0:!n}c(Qc,"isEmpty");function JC(n){return(...e)=>!n(...e)}c(JC,"not");function QC(n,e){return n===void 0&&(n="undefined"),n===null&&(n="null"),n===!1&&(n="false"),n.toString().toLowerCase().indexOf(e.trim())!==-1}c(QC,"includes");function i1(n,e,t,i){return e?n.filter(s=>QC(i(s,t),e)).sort((s,r)=>i(s,t).length-i(r,t).length):n}c(i1,"filterOptions");function eR(n){return n.filter(e=>!e.$isLabel)}c(eR,"stripGroups");function eu(n,e){return t=>t.reduce((i,s)=>s[n]&&s[n].length?(i.push({$groupLabel:s[e],$isLabel:!0}),i.concat(s[n])):i,[])}c(eu,"flattenOptions");function tR(n,e,t,i,s){return r=>r.map(o=>{if(!o[t])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];const a=i1(o[t],n,e,s);return a.length?{[i]:o[i],[t]:a}:[]})}c(tR,"filterGroups");const _v=c((...n)=>e=>n.reduce((t,i)=>i(t),e),"flow");var nR={data(){return{search:"",isOpen:!1,preferredOpenDirection:"below",optimizedHeight:this.maxHeight}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default(n,e){return Qc(n)?"":e?n[e]:n}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},tagPosition:{type:String,default:"top"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},groupSelect:{type:Boolean,default:!1},blockKeys:{type:Array,default(){return[]}},preserveSearch:{type:Boolean,default:!1},preselectFirst:{type:Boolean,default:!1},preventAutofocus:{type:Boolean,default:!1}},mounted(){!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."),this.preselectFirst&&!this.internalValue.length&&this.options.length&&this.select(this.filteredOptions[0])},computed:{internalValue(){return this.modelValue||this.modelValue===0?Array.isArray(this.modelValue)?this.modelValue:[this.modelValue]:[]},filteredOptions(){const n=this.search||"",e=n.toLowerCase().trim();let t=this.options.concat();return this.internalSearch?t=this.groupValues?this.filterAndFlat(t,e,this.label):i1(t,e,this.label,this.customLabel):t=this.groupValues?eu(this.groupValues,this.groupLabel)(t):t,t=this.hideSelected?t.filter(JC(this.isSelected)):t,this.taggable&&e.length&&!this.isExistingOption(e)&&(this.tagPosition==="bottom"?t.push({isTag:!0,label:n}):t.unshift({isTag:!0,label:n})),t.slice(0,this.optionsLimit)},valueKeys(){return this.trackBy?this.internalValue.map(n=>n[this.trackBy]):this.internalValue},optionKeys(){return(this.groupValues?this.flatAndStrip(this.options):this.options).map(e=>this.customLabel(e,this.label).toString().toLowerCase())},currentOptionLabel(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue.length?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue:{handler(){this.resetAfter&&this.internalValue.length&&(this.search="",this.$emit("update:modelValue",this.multiple?[]:null))},deep:!0},search(){this.$emit("search-change",this.search)}},emits:["open","search-change","close","select","update:modelValue","remove","tag"],methods:{getValue(){return this.multiple?this.internalValue:this.internalValue.length===0?null:this.internalValue[0]},filterAndFlat(n,e,t){return _v(tR(e,t,this.groupValues,this.groupLabel,this.customLabel),eu(this.groupValues,this.groupLabel))(n)},flatAndStrip(n){return _v(eu(this.groupValues,this.groupLabel),eR)(n)},updateSearch(n){this.search=n},isExistingOption(n){return this.options?this.optionKeys.indexOf(n)>-1:!1},isSelected(n){const e=this.trackBy?n[this.trackBy]:n;return this.valueKeys.indexOf(e)>-1},isOptionDisabled(n){return!!n.$isDisabled},getOptionLabel(n){if(Qc(n))return"";if(n.isTag)return n.label;if(n.$isLabel)return n.$groupLabel;const e=this.customLabel(n,this.label);return Qc(e)?"":e},select(n,e){if(n.$isLabel&&this.groupSelect){this.selectGroup(n);return}if(!(this.blockKeys.indexOf(e)!==-1||this.disabled||n.$isDisabled||n.$isLabel)&&!(this.max&&this.multiple&&this.internalValue.length===this.max)&&!(e==="Tab"&&!this.pointerDirty)){if(n.isTag)this.$emit("tag",n.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else{if(this.isSelected(n)){e!=="Tab"&&this.removeElement(n);return}this.multiple?this.$emit("update:modelValue",this.internalValue.concat([n])):this.$emit("update:modelValue",n),this.$emit("select",n,this.id),this.clearOnSelect&&(this.search="")}this.closeOnSelect&&this.deactivate()}},selectGroup(n){const e=this.options.find(t=>t[this.groupLabel]===n.$groupLabel);if(e){if(this.wholeGroupSelected(e)){this.$emit("remove",e[this.groupValues],this.id);const t=this.trackBy?e[this.groupValues].map(s=>s[this.trackBy]):e[this.groupValues],i=this.internalValue.filter(s=>t.indexOf(this.trackBy?s[this.trackBy]:s)===-1);this.$emit("update:modelValue",i)}else{let t=e[this.groupValues].filter(i=>!(this.isOptionDisabled(i)||this.isSelected(i)));this.max&&t.splice(this.max-this.internalValue.length),this.$emit("select",t,this.id),this.$emit("update:modelValue",this.internalValue.concat(t))}this.closeOnSelect&&this.deactivate()}},wholeGroupSelected(n){return n[this.groupValues].every(e=>this.isSelected(e)||this.isOptionDisabled(e))},wholeGroupDisabled(n){return n[this.groupValues].every(this.isOptionDisabled)},removeElement(n,e=!0){if(this.disabled||n.$isDisabled)return;if(!this.allowEmpty&&this.internalValue.length<=1){this.deactivate();return}const t=typeof n=="object"?this.valueKeys.indexOf(n[this.trackBy]):this.valueKeys.indexOf(n);if(this.multiple){const i=this.internalValue.slice(0,t).concat(this.internalValue.slice(t+1));this.$emit("update:modelValue",i)}else this.$emit("update:modelValue",null);this.$emit("remove",n,this.id),this.closeOnSelect&&e&&this.deactivate()},removeLastElement(){this.blockKeys.indexOf("Delete")===-1&&this.search.length===0&&Array.isArray(this.internalValue)&&this.internalValue.length&&this.removeElement(this.internalValue[this.internalValue.length-1],!1)},activate(){this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&this.pointer===0&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.preventAutofocus||this.$nextTick(()=>this.$refs.search&&this.$refs.search.focus())):this.preventAutofocus||typeof this.$el<"u"&&this.$el.focus(),this.$emit("open",this.id))},deactivate(){this.isOpen&&(this.isOpen=!1,this.searchable?this.$refs.search!==null&&typeof this.$refs.search<"u"&&this.$refs.search.blur():typeof this.$el<"u"&&this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id))},toggle(){this.isOpen?this.deactivate():this.activate()},adjustPosition(){if(typeof window>"u")return;const n=this.$el.getBoundingClientRect().top,e=window.innerHeight-this.$el.getBoundingClientRect().bottom;e>this.maxHeight||e>n||this.openDirection==="below"||this.openDirection==="bottom"?(this.preferredOpenDirection="below",this.optimizedHeight=Math.min(e-40,this.maxHeight)):(this.preferredOpenDirection="above",this.optimizedHeight=Math.min(n-40,this.maxHeight))}}},iR={data(){return{pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition(){return this.pointer*this.optionHeight},visibleElements(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions(){this.pointerAdjust()},isOpen(){this.pointerDirty=!1},pointer(){this.$refs.search&&this.$refs.search.setAttribute("aria-activedescendant",this.id+"-"+this.pointer.toString())}},methods:{optionHighlight(n,e){return{"multiselect__option--highlight":n===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(e)}},groupHighlight(n,e){if(!this.groupSelect)return["multiselect__option--disabled",{"multiselect__option--group":e.$isLabel}];const t=this.options.find(i=>i[this.groupLabel]===e.$groupLabel);return t&&!this.wholeGroupDisabled(t)?["multiselect__option--group",{"multiselect__option--highlight":n===this.pointer&&this.showPointer},{"multiselect__option--group-selected":this.wholeGroupSelected(t)}]:"multiselect__option--disabled"},addPointerElement({key:n}="Enter"){this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],n),this.pointerReset()},pointerForward(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()),this.pointerDirty=!0},pointerBackward(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerBackward()):this.filteredOptions[this.pointer]&&this.filteredOptions[0].$isLabel&&!this.groupSelect&&this.pointerForward(),this.pointerDirty=!0},pointerReset(){this.closeOnSelect&&(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0))},pointerAdjust(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0),this.filteredOptions.length>0&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()},pointerSet(n){this.pointer=n,this.pointerDirty=!0}}},s1={name:"vue-multiselect",mixins:[nR,iR],compatConfig:{MODE:3,ATTR_ENUMERATED_COERCION:!1},props:{name:{type:String,default:""},modelValue:{type:null,default(){return[]}},selectLabel:{type:String,default:"Press enter to select"},selectGroupLabel:{type:String,default:"Press enter to select group"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},deselectGroupLabel:{type:String,default:"Press enter to deselect group"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:n=>`and ${n} more`},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoOptions:{type:Boolean,default:!0},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{hasOptionGroup(){return this.groupValues&&this.groupLabel&&this.groupSelect},isSingleLabelVisible(){return(this.singleValue||this.singleValue===0)&&(!this.isOpen||!this.searchable)&&!this.visibleValues.length},isPlaceholderVisible(){return!this.internalValue.length&&(!this.searchable||!this.isOpen)},visibleValues(){return this.multiple?this.internalValue.slice(0,this.limit):[]},singleValue(){return this.internalValue[0]},deselectLabelText(){return this.showLabels?this.deselectLabel:""},deselectGroupLabelText(){return this.showLabels?this.deselectGroupLabel:""},selectLabelText(){return this.showLabels?this.selectLabel:""},selectGroupLabelText(){return this.showLabels?this.selectGroupLabel:""},selectedLabelText(){return this.showLabels?this.selectedLabel:""},inputStyle(){return this.searchable||this.multiple&&this.modelValue&&this.modelValue.length?this.isOpen?{width:"100%"}:{width:"0",position:"absolute",padding:"0"}:""},contentStyle(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove(){return this.openDirection==="above"||this.openDirection==="top"?!0:this.openDirection==="below"||this.openDirection==="bottom"?!1:this.preferredOpenDirection==="above"},showSearchInput(){return this.searchable&&(this.hasSingleSelectedSlot&&(this.visibleSingleValue||this.visibleSingleValue===0)?this.isOpen:!0)}}};const sR={ref:"tags",class:"multiselect__tags"},rR={class:"multiselect__tags-wrap"},oR={class:"multiselect__spinner"},aR={key:0},lR={class:"multiselect__option"},cR={class:"multiselect__option"},uR=ti("No elements found. Consider changing the search query."),hR={class:"multiselect__option"},dR=ti("List is empty.");function fR(n,e,t,i,s,r){return He(),an("div",{tabindex:n.searchable?-1:t.tabindex,class:[{"multiselect--active":n.isOpen,"multiselect--disabled":t.disabled,"multiselect--above":r.isAbove,"multiselect--has-options-group":r.hasOptionGroup},"multiselect"],onFocus:e[14]||(e[14]=o=>n.activate()),onBlur:e[15]||(e[15]=o=>n.searchable?!1:n.deactivate()),onKeydown:[e[16]||(e[16]=Zn(Ct(o=>n.pointerForward(),["self","prevent"]),["down"])),e[17]||(e[17]=Zn(Ct(o=>n.pointerBackward(),["self","prevent"]),["up"]))],onKeypress:e[18]||(e[18]=Zn(Ct(o=>n.addPointerElement(o),["stop","self"]),["enter","tab"])),onKeyup:e[19]||(e[19]=Zn(o=>n.deactivate(),["esc"])),role:"combobox","aria-owns":"listbox-"+n.id},[Zt(n.$slots,"caret",{toggle:n.toggle},()=>[Ne("div",{onMousedown:e[1]||(e[1]=Ct(o=>n.toggle(),["prevent","stop"])),class:"multiselect__select"},null,32)]),Zt(n.$slots,"clear",{search:n.search}),Ne("div",sR,[Zt(n.$slots,"selection",{search:n.search,remove:n.removeElement,values:r.visibleValues,isOpen:n.isOpen},()=>[Ir(Ne("div",rR,[(He(!0),an(Bt,null,hu(r.visibleValues,(o,a)=>Zt(n.$slots,"tag",{option:o,search:n.search,remove:n.removeElement},()=>[(He(),an("span",{class:"multiselect__tag",key:a},[Ne("span",{textContent:Rn(n.getOptionLabel(o))},null,8,["textContent"]),Ne("i",{tabindex:"1",onKeypress:Zn(Ct(l=>n.removeElement(o),["prevent"]),["enter"]),onMousedown:Ct(l=>n.removeElement(o),["prevent"]),class:"multiselect__tag-icon"},null,40,["onKeypress","onMousedown"])]))])),256))],512),[[Nr,r.visibleValues.length>0]]),n.internalValue&&n.internalValue.length>t.limit?Zt(n.$slots,"limit",{key:0},()=>[Ne("strong",{class:"multiselect__strong",textContent:Rn(t.limitText(n.internalValue.length-t.limit))},null,8,["textContent"])]):bt("v-if",!0)]),Ne(Ba,{name:"multiselect__loading"},{default:gr(()=>[Zt(n.$slots,"loading",{},()=>[Ir(Ne("div",oR,null,512),[[Nr,t.loading]])])]),_:3}),n.searchable?(He(),an("input",{key:0,ref:"search",name:t.name,id:n.id,type:"text",autocomplete:"off",spellcheck:!1,placeholder:n.placeholder,style:r.inputStyle,value:n.search,disabled:t.disabled,tabindex:t.tabindex,onInput:e[2]||(e[2]=o=>n.updateSearch(o.target.value)),onFocus:e[3]||(e[3]=Ct(o=>n.activate(),["prevent"])),onBlur:e[4]||(e[4]=Ct(o=>n.deactivate(),["prevent"])),onKeyup:e[5]||(e[5]=Zn(o=>n.deactivate(),["esc"])),onKeydown:[e[6]||(e[6]=Zn(Ct(o=>n.pointerForward(),["prevent"]),["down"])),e[7]||(e[7]=Zn(Ct(o=>n.pointerBackward(),["prevent"]),["up"])),e[9]||(e[9]=Zn(Ct(o=>n.removeLastElement(),["stop"]),["delete"]))],onKeypress:e[8]||(e[8]=Zn(Ct(o=>n.addPointerElement(o),["prevent","stop","self"]),["enter"])),class:"multiselect__input","aria-controls":"listbox-"+n.id},null,44,["name","id","placeholder","value","disabled","tabindex","aria-controls"])):bt("v-if",!0),r.isSingleLabelVisible?(He(),an("span",{key:1,class:"multiselect__single",onMousedown:e[10]||(e[10]=Ct((...o)=>n.toggle&&n.toggle(...o),["prevent"]))},[Zt(n.$slots,"singleLabel",{option:r.singleValue},()=>[ti(Rn(n.currentOptionLabel),1)])],32)):bt("v-if",!0),r.isPlaceholderVisible?(He(),an("span",{key:2,class:"multiselect__placeholder",onMousedown:e[11]||(e[11]=Ct((...o)=>n.toggle&&n.toggle(...o),["prevent"]))},[Zt(n.$slots,"placeholder",{},()=>[ti(Rn(n.placeholder),1)])],32)):bt("v-if",!0)],512),Ne(Ba,{name:"multiselect"},{default:gr(()=>[Ir(Ne("div",{class:"multiselect__content-wrapper",onFocus:e[12]||(e[12]=(...o)=>n.activate&&n.activate(...o)),tabindex:"-1",onMousedown:e[13]||(e[13]=Ct(()=>{},["prevent"])),style:{maxHeight:n.optimizedHeight+"px"},ref:"list"},[Ne("ul",{class:"multiselect__content",style:r.contentStyle,role:"listbox",id:"listbox-"+n.id},[Zt(n.$slots,"beforeList"),n.multiple&&n.max===n.internalValue.length?(He(),an("li",aR,[Ne("span",lR,[Zt(n.$slots,"maxElements",{},()=>[ti("Maximum of "+Rn(n.max)+" options selected. First remove a selected option to select another.",1)])])])):bt("v-if",!0),!n.max||n.internalValue.length<n.max?(He(!0),an(Bt,{key:1},hu(n.filteredOptions,(o,a)=>(He(),an("li",{class:"multiselect__element",key:a,id:n.id+"-"+a,role:o&&(o.$isLabel||o.$isDisabled)?null:"option"},[o&&(o.$isLabel||o.$isDisabled)?bt("v-if",!0):(He(),an("span",{key:0,class:[n.optionHighlight(a,o),"multiselect__option"],onClick:Ct(l=>n.select(o),["stop"]),onMouseenter:Ct(l=>n.pointerSet(a),["self"]),"data-select":o&&o.isTag?n.tagPlaceholder:r.selectLabelText,"data-selected":r.selectedLabelText,"data-deselect":r.deselectLabelText},[Zt(n.$slots,"option",{option:o,search:n.search,index:a},()=>[Ne("span",null,Rn(n.getOptionLabel(o)),1)])],42,["onClick","onMouseenter","data-select","data-selected","data-deselect"])),o&&(o.$isLabel||o.$isDisabled)?(He(),an("span",{key:1,"data-select":n.groupSelect&&r.selectGroupLabelText,"data-deselect":n.groupSelect&&r.deselectGroupLabelText,class:[n.groupHighlight(a,o),"multiselect__option"],onMouseenter:Ct(l=>n.groupSelect&&n.pointerSet(a),["self"]),onMousedown:Ct(l=>n.selectGroup(o),["prevent"])},[Zt(n.$slots,"option",{option:o,search:n.search,index:a},()=>[Ne("span",null,Rn(n.getOptionLabel(o)),1)])],42,["data-select","data-deselect","onMouseenter","onMousedown"])):bt("v-if",!0)],8,["id","role"]))),128)):bt("v-if",!0),Ir(Ne("li",null,[Ne("span",cR,[Zt(n.$slots,"noResult",{search:n.search},()=>[uR])])],512),[[Nr,t.showNoResults&&n.filteredOptions.length===0&&n.search&&!t.loading]]),Ir(Ne("li",null,[Ne("span",hR,[Zt(n.$slots,"noOptions",{},()=>[dR])])],512),[[Nr,t.showNoOptions&&(n.options.length===0||r.hasOptionGroup===!0&&n.filteredOptions.length===0)&&!n.search&&!t.loading]]),Zt(n.$slots,"afterList")],12,["id"])],36),[[Nr,n.isOpen]])]),_:3})],42,["tabindex","aria-owns"])}c(fR,"render");s1.render=fR;const pR=tn({methods:{mouseClick(n){if(this.justClicked){this.justClicked=!1;return}const e=document.getElementById("brush-options");if(e){const t=e.getBoundingClientRect();this.showOptions=n.clientX>=t.left&&n.clientX<=t.right&&n.clientY>=t.top&&n.clientY<=t.bottom}},setBrushShape(n){K.brushShape=n},inputChange(n){K.brushSize=+n.target.value}},mounted(){document.addEventListener("click",this.mouseClick)},unmounted(){document.removeEventListener("click",this.mouseClick)},data(){return{showOptions:!1,justClicked:!1,state:K}}}),fs=c(n=>(Si("data-v-bb91c8b4"),n=n(),bi(),n),"_withScopeId$4"),mR={class:"brush-button"},gR=fs(()=>J("i",{class:"bi bi-brush-fill"},null,-1)),_R=fs(()=>J("i",{class:"bi bi-caret-down-fill"},null,-1)),vR=[gR,_R],xR={key:0,id:"brush-options",class:"brush-options"},MR=fs(()=>J("div",{class:"title"}," Brush ",-1)),yR=fs(()=>J("p",{style:{margin:"4px","margin-bottom":"0","text-align":"left"}},"Size",-1)),SR={style:{display:"flex","margin-left":"4px","margin-right":"4px","align-items":"center"}},bR=["value"],ER={style:{height:"100%",width:"18px","text-align":"center",color:"var(--color-text-disabled)"}},TR=fs(()=>J("span",{style:{height:"100%","margin-bottom":"0.1em",color:"var(--color-text-disabled)"}},"px",-1)),AR=fs(()=>J("p",{style:{margin:"4px","margin-bottom":"0","text-align":"left"}},"Shape",-1)),wR={style:{display:"flex",width:"100%","justify-content":"space-around",flex:"1","align-items":"center"}},CR=fs(()=>J("i",{class:"bi bi-square-fill"},null,-1)),RR=[CR],PR=fs(()=>J("i",{class:"bi bi-circle-fill"},null,-1)),DR=[PR];function IR(n,e,t,i,s,r){return He(),ot("div",mR,[J("div",{onClick:e[0]||(e[0]=o=>{n.showOptions=!0,n.justClicked=!0}),class:"icons"},vR),n.showOptions?(He(),ot("div",xR,[MR,yR,J("div",SR,[J("input",{onMousemove:e[1]||(e[1]=(...o)=>n.inputChange&&n.inputChange(...o)),value:n.state.brushSize,min:1,max:"16",class:"custom-range",type:"range",style:{flex:"1"}},null,40,bR),J("span",ER,Rn(n.state.brushSize),1),TR]),AR,J("div",wR,[J("div",{onClick:e[2]||(e[2]=o=>n.setBrushShape("square")),class:"brush-type",style:zt(`background-color: var(${n.state.brushShape==="square"?"--color-secondary":"--color-foreground-2"});`)},RR,4),J("div",{onClick:e[3]||(e[3]=o=>n.setBrushShape("round")),class:"brush-type",style:zt(`background-color: var(${n.state.brushShape==="round"?"--color-secondary":"--color-foreground-2"});`)},DR,4)])])):bt("",!0)])}c(IR,"_sfc_render$7");const LR=nn(pR,[["render",IR],["__scopeId","data-v-bb91c8b4"]]),_f=tn({components:{Multiselect:s1,Brush:LR},methods:{resize(){this.space=window.innerWidth<1200?4:8,this.rightVisible=window.innerWidth>=1045}},mounted(){window.addEventListener("resize",this.resize)},unmounted(){window.removeEventListener("resize",this.resize)},data:()=>({options:["Object mode","Geometry mode"],space:window.innerWidth<1200?4:8,rightVisible:window.innerWidth>=1045,state:K})}),vv=c(()=>{Xl(n=>({43447760:n.space+"px"}))},"__injectCSSVars__$2"),xv=_f.setup;_f.setup=xv?(n,e)=>(vv(),xv(n,e)):vv;const Lo=c(n=>(Si("data-v-fa329d20"),n=n(),bi(),n),"_withScopeId$3"),NR={class:"mode-bar"},OR={class:"mode-bar-left"},UR=x0('<div class="mode-bar-item" data-v-fa329d20><div class="mode-bar-item-select" data-v-fa329d20><select data-v-fa329d20><option value="" disabled selected data-v-fa329d20>Render Mode</option><option value="Material Preview" data-v-fa329d20>Material Preview</option><option value="Unlit" data-v-fa329d20>Unlit</option><option value="Wireframe" data-v-fa329d20>Wireframe</option><option value="Lit" data-v-fa329d20>Lit</option></select></div></div>',1),FR={class:"mode-bar-item"},BR={class:"mode-bar-item-select"},zR=Lo(()=>J("i",{class:"bi bi-box-fill"},null,-1)),kR={class:"mode-bar-item"},VR={class:"mode-bar-item-select"},HR=Lo(()=>J("i",{class:"bi bi-hammer"},null,-1)),GR={key:0,class:"mode-bar-item"},WR={key:0,title:"snap",class:"mode-bar-right"},jR={class:"mode-bar-item"},XR={class:"mode-bar-item-select",style:{width:"48px"}},$R=Lo(()=>J("i",{class:"bi bi-magnet-fill"},null,-1)),YR=[$R],KR={title:"grid",class:"mode-bar-item"},qR={class:"mode-bar-item-select",style:{width:"48px"}},ZR=Lo(()=>J("i",{class:"bi bi-grid-3x3"},null,-1)),JR=[ZR],QR=Lo(()=>J("div",{class:"mode-bar-item"},[J("div",{class:"mode-bar-item-select"},[J("div",{class:"mode-button"},[J("i",{class:"bi bi-globe-americas"}),ti(" World Material ")])])],-1));function eP(n,e,t,i,s,r){const o=Ut("Brush");return He(),ot("div",NR,[J("div",OR,[UR,J("div",FR,[J("div",BR,[J("div",{onClick:e[0]||(e[0]=a=>n.state.setCurrentMode("object")),class:"mode-button",style:zt(n.state.currentMode==="object"?"background-color: var(--color-secondary);":"")},[zR,ti(" Object Mode ")],4)])]),J("div",kR,[J("div",VR,[J("div",{onClick:e[1]||(e[1]=a=>n.state.setCurrentMode("sculpt")),class:"mode-button",style:zt(n.state.currentMode==="sculpt"?"background-color: var(--color-secondary);":"")},[HR,ti(" Voxel Mode ")],4)])]),n.state.currentMode==="sculpt"?(He(),ot("div",GR,[Ne(o)])):bt("",!0)]),n.rightVisible?(He(),ot("div",WR,[J("div",jR,[J("div",XR,[J("div",{onClick:e[2]||(e[2]=a=>n.state.snapActive=!n.state.snapActive),class:"mode-button",style:zt(`background-color: var(${n.state.snapActive?"--color-secondary":"--color-foreground-2"});`)},YR,4)])]),J("div",KR,[J("div",qR,[J("div",{onClick:e[3]||(e[3]=a=>n.state.setGridActive(!n.state.gridActive)),class:"mode-button",style:zt(`background-color: var(${n.state.gridActive?"--color-secondary":"--color-foreground-2"});`)},JR,4)])]),QR,J("div",{style:zt(`width: ${n.space}px;`)},null,4)])):bt("",!0)])}c(eP,"_sfc_render$6");const tP=nn(_f,[["render",eP],["__scopeId","data-v-fa329d20"]]),vf=tn({data(){return{state:K}},methods:{editClick(){K.currentTool!=="edit"&&(K.currentTool="edit",document.dispatchEvent(new CustomEvent("tool-switch-edit")))},measureClick(){K.currentTool!=="measure"&&(K.currentTool="measure",document.dispatchEvent(new CustomEvent("tool-measure-edit")))},exploreClick(){K.currentTool!=="explore"&&(K.currentTool="explore",document.dispatchEvent(new CustomEvent("tool-explore-edit")))},annotateClick(){K.currentTool!=="annotate"&&(K.currentTool="annotate",document.dispatchEvent(new CustomEvent("tool-annotate-edit")))}}}),Mv=c(()=>{Xl(n=>({"35996b62":n.state.currentTool==="edit"?"var(--color-secondary)":"var(--color-foreground-1)","7891fda2":n.state.currentTool==="measure"?"var(--color-secondary)":"var(--color-foreground-1)",e03f0bb8:n.state.currentTool==="explore"?"var(--color-secondary)":"var(--color-foreground-1)","116dfa11":n.state.currentTool==="annotate"?"var(--color-secondary)":"var(--color-foreground-1)"}))},"__injectCSSVars__$1"),yv=vf.setup;vf.setup=yv?(n,e)=>(Mv(),yv(n,e)):Mv;const Zl=c(n=>(Si("data-v-60410809"),n=n(),bi(),n),"_withScopeId$2"),nP={class:"tool-bar"},iP=Zl(()=>J("i",{class:"bi bi-boxes"},null,-1)),sP=[iP],rP=Zl(()=>J("i",{class:"bi bi-rulers"},null,-1)),oP=[rP],aP=Zl(()=>J("i",{class:"bi bi-person-walking"},null,-1)),lP=[aP],cP=Zl(()=>J("i",{class:"bi bi-pen-fill"},null,-1)),uP=[cP];function hP(n,e,t,i,s,r){return He(),ot("div",nP,[J("div",{onClick:e[0]||(e[0]=(...o)=>n.editClick&&n.editClick(...o)),title:"edit",class:"tool-bar-item edit"},sP),J("div",{onClick:e[1]||(e[1]=(...o)=>n.measureClick&&n.measureClick(...o)),title:"measure",class:"tool-bar-item measure"},oP),J("div",{onClick:e[2]||(e[2]=(...o)=>n.exploreClick&&n.exploreClick(...o)),title:"explore",class:"tool-bar-item explore"},lP),J("div",{onClick:e[3]||(e[3]=(...o)=>n.annotateClick&&n.annotateClick(...o)),title:"annotate",class:"tool-bar-item annotate"},uP)])}c(hP,"_sfc_render$5");const dP=nn(vf,[["render",hP],["__scopeId","data-v-60410809"]]),fP=tn({data:()=>({state:K})}),Jl=c(n=>(Si("data-v-260f388d"),n=n(),bi(),n),"_withScopeId$1"),pP={key:0,class:"tool-bar"},mP=Jl(()=>J("i",{class:"bi bi-cursor-fill"},null,-1)),gP=[mP],_P=Jl(()=>J("i",{class:"bi bi-arrows-move"},null,-1)),vP=[_P],xP=Jl(()=>J("i",{class:"bi bi-arrows-fullscreen"},null,-1)),MP=[xP],yP=Jl(()=>J("i",{class:"bi bi-arrow-repeat"},null,-1)),SP=[yP];function bP(n,e,t,i,s,r){return n.state.currentMode==="object"?(He(),ot("div",pP,[J("div",{onClick:e[0]||(e[0]=o=>n.state.objectModeState="select"),title:"select",class:"tool-bar-item",style:zt(n.state.objectModeState==="select"?"background-color: var(--color-secondary);":"")},gP,4),J("div",{onClick:e[1]||(e[1]=o=>n.state.objectModeState="move"),title:"move",class:"tool-bar-item",style:zt(n.state.objectModeState==="move"?"background-color: var(--color-secondary);":"")},vP,4),J("div",{onClick:e[2]||(e[2]=o=>n.state.objectModeState="scale"),title:"scale",class:"tool-bar-item",style:zt(n.state.objectModeState==="scale"?"background-color: var(--color-secondary);":"")},MP,4),J("div",{onClick:e[3]||(e[3]=o=>n.state.objectModeState="rotate"),title:"rotate",class:"tool-bar-item",style:zt(n.state.objectModeState==="rotate"?"background-color: var(--color-secondary);":"")},SP,4)])):bt("",!0)}c(bP,"_sfc_render$4");const EP=nn(fP,[["render",bP],["__scopeId","data-v-260f388d"]]),xf=tn({data(){return{state:K}},methods:{dispatchRotationEvent(n,e,t){document.dispatchEvent(new CustomEvent("ui-camera-rotate",{detail:{x:n,y:e,z:t}}))},clickPX(){this.dispatchRotationEvent(0,-90,180)},clickNX(){this.dispatchRotationEvent(0,90,-180)},clickPY(){this.dispatchRotationEvent(-90,0,-90)},clickNY(){this.dispatchRotationEvent(90,0,90)},clickPZ(){this.dispatchRotationEvent(-360,180,540)},clickNZ(){this.dispatchRotationEvent(0,0,540)}}}),Sv=c(()=>{Xl(n=>({"7fe47ca6":n.state.rotationX+"deg","545230ae":n.state.rotationY+"deg","2ed2c0a2":n.state.rotationZ+"deg"}))},"__injectCSSVars__"),bv=xf.setup;xf.setup=bv?(n,e)=>(Sv(),bv(n,e)):Sv;const TP={class:"axis"},AP={class:"axis-container"},wP={class:"axis-cube"};function CP(n,e,t,i,s,r){return He(),ot("div",TP,[J("div",AP,[J("div",wP,[J("div",{onClick:e[0]||(e[0]=(...o)=>n.clickPY&&n.clickPY(...o)),class:"axis-face top"},"Y"),J("div",{onClick:e[1]||(e[1]=(...o)=>n.clickNY&&n.clickNY(...o)),class:"axis-face bottom"}),J("div",{onClick:e[2]||(e[2]=(...o)=>n.clickNX&&n.clickNX(...o)),class:"axis-face left"}),J("div",{onClick:e[3]||(e[3]=(...o)=>n.clickPX&&n.clickPX(...o)),class:"axis-face right"},"X"),J("div",{onClick:e[4]||(e[4]=(...o)=>n.clickNZ&&n.clickNZ(...o)),class:"axis-face front"}),J("div",{onClick:e[5]||(e[5]=(...o)=>n.clickPZ&&n.clickPZ(...o)),class:"axis-face back"},"Z")])])])}c(CP,"_sfc_render$3");const RP=nn(xf,[["render",CP],["__scopeId","data-v-a59f6b88"]]);var ao=Object.freeze({Linear:Object.freeze({None:function(n){return n},In:function(n){return this.None(n)},Out:function(n){return this.None(n)},InOut:function(n){return this.None(n)}}),Quadratic:Object.freeze({In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}}),Cubic:Object.freeze({In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}}),Quartic:Object.freeze({In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}}),Quintic:Object.freeze({In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}}),Sinusoidal:Object.freeze({In:function(n){return 1-Math.sin((1-n)*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.sin(Math.PI*(.5-n)))}}),Exponential:Object.freeze({In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}}),Circular:Object.freeze({In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}}),Elastic:Object.freeze({In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin((n-.1)*5*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin((n-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(n){var e=1.70158;return n===1?1:n*n*((e+1)*n-e)},Out:function(n){var e=1.70158;return n===0?0:--n*n*((e+1)*n+e)+1},InOut:function(n){var e=2.5949095;return(n*=2)<1?.5*(n*n*((e+1)*n-e)):.5*((n-=2)*n*((e+1)*n+e)+2)}}),Bounce:Object.freeze({In:function(n){return 1-ao.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?ao.Bounce.In(n*2)*.5:ao.Bounce.Out(n*2-1)*.5+.5}}),generatePow:function(n){return n===void 0&&(n=4),n=n<Number.EPSILON?Number.EPSILON:n,n=n>1e4?1e4:n,{In:function(e){return Math.pow(e,n)},Out:function(e){return 1-Math.pow(1-e,n)},InOut:function(e){return e<.5?Math.pow(e*2,n)/2:(1-Math.pow(2-e*2,n))/2+.5}}}}),Kr=c(function(){return performance.now()},"now"),PP=function(){function n(){this._tweens={},this._tweensAddedDuringUpdate={}}return c(n,"Group"),n.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},n.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},n.prototype.update=function(e,t){e===void 0&&(e=Kr()),t===void 0&&(t=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var s=0;s<i.length;s++){var r=this._tweens[i[s]],o=!t;r&&r.update(e,o)===!1&&!t&&delete this._tweens[i[s]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},n}(),ur={Linear:function(n,e){var t=n.length-1,i=t*e,s=Math.floor(i),r=ur.Utils.Linear;return e<0?r(n[0],n[1],i):e>1?r(n[t],n[t-1],t-i):r(n[s],n[s+1>t?t:s+1],i-s)},Bezier:function(n,e){for(var t=0,i=n.length-1,s=Math.pow,r=ur.Utils.Bernstein,o=0;o<=i;o++)t+=s(1-e,i-o)*s(e,o)*n[o]*r(i,o);return t},CatmullRom:function(n,e){var t=n.length-1,i=t*e,s=Math.floor(i),r=ur.Utils.CatmullRom;return n[0]===n[t]?(e<0&&(s=Math.floor(i=t*(1+e))),r(n[(s-1+t)%t],n[s],n[(s+1)%t],n[(s+2)%t],i-s)):e<0?n[0]-(r(n[0],n[0],n[1],n[1],-i)-n[0]):e>1?n[t]-(r(n[t],n[t],n[t-1],n[t-1],i-t)-n[t]):r(n[s?s-1:0],n[s],n[t<s+1?t:s+1],n[t<s+2?t:s+2],i-s)},Utils:{Linear:function(n,e,t){return(e-n)*t+n},Bernstein:function(n,e){var t=ur.Utils.Factorial;return t(n)/t(e)/t(n-e)},Factorial:function(){var n=[1];return function(e){var t=1;if(n[e])return n[e];for(var i=e;i>1;i--)t*=i;return n[e]=t,t}}(),CatmullRom:function(n,e,t,i,s){var r=(t-n)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*t+r+o)*l+(-3*e+3*t-2*r-o)*a+r*s+e}}},DP=function(){function n(){}return c(n,"Sequence"),n.nextId=function(){return n._nextId++},n._nextId=0,n}(),Id=new PP,Ev=function(){function n(e,t){t===void 0&&(t=Id),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=ao.Linear.None,this._interpolationFunction=ur.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=DP.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return c(n,"Tween"),n.prototype.getId=function(){return this._id},n.prototype.isPlaying=function(){return this._isPlaying},n.prototype.isPaused=function(){return this._isPaused},n.prototype.getDuration=function(){return this._duration},n.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t<0?0:t,this},n.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e<0?0:e,this},n.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},n.prototype.start=function(e,t){if(e===void 0&&(e=Kr()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var s={};for(var r in this._valuesEnd)s[r]=this._valuesEnd[r];this._valuesEnd=s}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},n.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},n.prototype._setupProperties=function(e,t,i,s,r){for(var o in i){var a=e[o],l=Array.isArray(a),u=l?"array":typeof a,h=!l&&Array.isArray(i[o]);if(!(u==="undefined"||u==="function")){if(h){var d=i[o];if(d.length===0)continue;for(var f=[a],p=0,_=d.length;p<_;p+=1){var M=this._handleRelativeValue(a,d[p]);if(isNaN(M)){h=!1,console.warn("Found invalid interpolation list. Skipping.");break}f.push(M)}h&&(i[o]=f)}if((u==="object"||l)&&a&&!h){t[o]=l?[]:{};var g=a;for(var m in g)t[o][m]=g[m];s[o]=l?[]:{};var d=i[o];if(!this._isDynamic){var A={};for(var m in d)A[m]=d[m];i[o]=d=A}this._setupProperties(g,t[o],d,s[o],r)}else(typeof t[o]>"u"||r)&&(t[o]=a),l||(t[o]*=1),h?s[o]=i[o].slice().reverse():s[o]=t[o]||0}}},n.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},n.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},n.prototype.pause=function(e){return e===void 0&&(e=Kr()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},n.prototype.resume=function(e){return e===void 0&&(e=Kr()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},n.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},n.prototype.group=function(e){return e===void 0&&(e=Id),this._group=e,this},n.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},n.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},n.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},n.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},n.prototype.easing=function(e){return e===void 0&&(e=ao.Linear.None),this._easingFunction=e,this},n.prototype.interpolation=function(e){return e===void 0&&(e=ur.Linear),this._interpolationFunction=e,this},n.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},n.prototype.onStart=function(e){return this._onStartCallback=e,this},n.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},n.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},n.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},n.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},n.prototype.onStop=function(e){return this._onStopCallback=e,this},n.prototype.update=function(e,t){var i=this,s;if(e===void 0&&(e=Kr()),t===void 0&&(t=!0),this._isPaused)return!0;var r,o=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>o)return!1;t&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var a=e-this._startTime,l=this._duration+((s=this._repeatDelayTime)!==null&&s!==void 0?s:this._delayTime),u=this._duration+this._repeat*l,h=c(function(){if(i._duration===0||a>u)return 1;var g=Math.trunc(a/l),m=a-g*l,A=Math.min(m/i._duration,1);return A===0&&a===i._duration?1:A},"calculateElapsedPortion"),d=h(),f=this._easingFunction(d);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,f),this._onUpdateCallback&&this._onUpdateCallback(this._object,d),this._duration===0||a>=this._duration)if(this._repeat>0){var p=Math.min(Math.trunc((a-this._duration)/l)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=p);for(r in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[r]=="string"&&(this._valuesStartRepeat[r]=this._valuesStartRepeat[r]+parseFloat(this._valuesEnd[r])),this._yoyo&&this._swapEndStartRepeatValues(r),this._valuesStart[r]=this._valuesStartRepeat[r];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=l*p,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var _=0,M=this._chainedTweens.length;_<M;_++)this._chainedTweens[_].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},n.prototype._updateProperties=function(e,t,i,s){for(var r in i)if(t[r]!==void 0){var o=t[r]||0,a=i[r],l=Array.isArray(e[r]),u=Array.isArray(a),h=!l&&u;h?e[r]=this._interpolationFunction(a,s):typeof a=="object"&&a?this._updateProperties(e[r],o,a,s):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[r]=o+(a-o)*s))}},n.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},n.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},n}(),si=Id;si.getAll.bind(si);si.removeAll.bind(si);si.add.bind(si);si.remove.bind(si);var IP=si.update.bind(si);const LP=.01,di=1e3,Zm=class Zm{constructor(e,t){ue(this,"canvas");ue(this,"canvasContainer");ue(this,"canvasObserver");ue(this,"renderer");ue(this,"scene");ue(this,"camera");ue(this,"controls");ue(this,"clock");ue(this,"grid10");ue(this,"grid40");ue(this,"lineX");ue(this,"lineZ");ue(this,"ghostLight",new Co(16777215,10,1e4,.25));ue(this,"nGhostLight",new Co(16773360,2,1e4,.25));ue(this,"ambientLight",new cl(16777215,.5));ue(this,"clickableObjects",[]);ue(this,"isMouseDown",[!1,!1,!1,!1]);ue(this,"isDragging",[!1,!1,!1,!1]);ue(this,"mouseDownPosition",[[0,0],[0,0],[0,0],[0,0]]);ue(this,"lastMeshIntersect");ue(this,"effectComposter");ue(this,"renderPass");ue(this,"outlinePass");ue(this,"fxaaPass");ue(this,"ssaoPass");ue(this,"topLevel");ue(this,"lastMouseMove");ue(this,"createEvents",c(()=>{document.addEventListener("ui-camera-rotate",this.handleCameraRotationFromUi),this.canvasContainer.addEventListener("mousemove",this.handleMouseMove),this.canvasContainer.addEventListener("mousedown",this.handleMouseDown),this.canvasContainer.addEventListener("mouseup",this.handleMouseUp),document.addEventListener("keyup",this.handleKeyUp),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keypress",this.handleKeyPress)},"createEvents"));ue(this,"clearEvents",c(()=>{document.removeEventListener("ui-camera-rotate",this.handleCameraRotationFromUi),this.canvasContainer.removeEventListener("mousemove",this.handleMouseMove),this.canvasContainer.removeEventListener("mousedown",this.handleMouseDown),this.canvasContainer.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener("keyup",this.handleKeyUp),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keypress",this.handleKeyPress)},"clearEvents"));ue(this,"update",c(()=>{if(this.clock.getDelta(),this.lastMouseMove){let e=this.intersectObject(this.lastMouseMove.offsetX,this.lastMouseMove.offsetY);this.clickableObjects.forEach(i=>{e?i instanceof Xn&&i!==e.object&&(i.hover&&i.invokeHoverOutEvent(this.lastMouseMove),i.hover=!1):(i instanceof Xn&&i.hover&&i.invokeHoverOutEvent(this.lastMouseMove),i.hover=!1)});const t=this.lastMouseMove;t.intersect=e,e&&e.object instanceof Xn&&(e.object.hover=!0,e.object.invokeHoverEvent(t))}this.controls.update(),IP(),Qe.INSTANCE.update(this.camera),this.camera.rotation.reorder("YXZ"),K.rotationX=Vi.radToDeg(this.camera.rotation.x),K.rotationY=Vi.radToDeg(this.camera.rotation.y),K.rotationZ=Vi.radToDeg(this.camera.rotation.z),Qe.INSTANCE.scene.visible=!1,this.renderer.clearDepth(),this.effectComposter.render(),this.renderer.clearDepth(),this.renderer.autoClear=!1,Qe.INSTANCE.scene.visible=Qe.INSTANCE.scene.userData.visible,this.renderer.render(this.topLevel,this.camera),Qe.INSTANCE.scene.visible=!1,this.renderer.autoClear=!0,requestAnimationFrame(this.update)},"update"));ue(this,"clipboard",[]);ue(this,"copy",c(()=>{this.clipboard=[],Qe.INSTANCE.selectedObjects.forEach(e=>{this.clipboard.includes(e)||this.clipboard.push(e)})},"copy"));ue(this,"paste",c(()=>{this.unselectAll(),this.clipboard.forEach(e=>{const t=e.clone();this.scene.add(t),this.clickableObjects.push(t),Qe.INSTANCE.selectedObjects.push(t),t.select()}),this.outlinePass&&(this.outlinePass.selectedObjects=Qe.INSTANCE.selectedObjects)},"paste"));ue(this,"handleKeyPress",c(e=>{},"handleKeyPress"));ue(this,"handleKeyDown",c(e=>{e.key==="Control"&&(this.controls.enabled=!1),e.key==="Tab"&&e.preventDefault()},"handleKeyDown"));ue(this,"handleKeyUp",c(e=>{e.code==="Delete"&&(Qe.INSTANCE.selectedObjects.forEach(t=>{const i=this.clickableObjects.indexOf(t);i>-1&&this.clickableObjects.splice(i,1),this.scene.remove(t)}),Qe.INSTANCE.selectedObjects=[]),e.code==="KeyV"&&e.ctrlKey&&this.paste(),e.code==="KeyC"&&e.ctrlKey&&this.copy(),e.key==="Control"&&(this.controls.enabled=!0),e.key==="Tab"&&K.setCurrentMode(K.currentMode==="object"?"sculpt":"object"),e.code==="KeyT"&&K.currentMode==="object"&&(K.objectModeState="move"),e.code==="KeyR"&&K.currentMode==="object"&&(K.objectModeState="rotate"),e.code==="KeyG"&&K.currentMode==="object"&&(K.objectModeState="scale"),e.code==="KeyF"&&K.currentMode==="object"&&(K.objectModeState="select")},"handleKeyUp"));ue(this,"intersectObject",c((e,t)=>{const i=new hl,s=new ve;s.x=e/this.canvas.clientWidth*2-1,s.y=-(t/this.canvas.clientHeight)*2+1,i.setFromCamera(s,this.camera),i.far=1e3,i.near=1e-7;const r=i.intersectObjects(this.clickableObjects,!0).reverse();let o=r[0];for(const a of r)if(a.object instanceof Xn&&!a.object.disableMouseEvents){if(a.object.draggable){o=a;break}o=a}return o},"intersectObject"));ue(this,"handleMouseDown",c(e=>{this.isMouseDown[e.button]=!0,K.isMouseDown[e.button]=!0,this.mouseDownPosition[e.button]=[e.offsetX,e.offsetY];const t=e;let i=this.intersectObject(e.offsetX,e.offsetY);if(!i){this.lastMeshIntersect=void 0;return}t.intersect=i,this.lastMeshIntersect=t,this.lastMeshIntersect.isFirstMovement=!0,i.object.draggable&&(this.controls.enabled=!1)},"handleMouseDown"));ue(this,"handleMouseUp",c(e=>{var t;if(!this.isDragging[e.button]){const i=(t=this.lastMeshIntersect)==null?void 0:t.intersect.object;if(i&&!i.disableMouseEvents){if(i==null||i.invokeClickEvent(this.lastMeshIntersect),!i.internal&&K.currentMode==="object"){if(e.shiftKey||this.unselectAll(),!i.selected)i.select(),Qe.INSTANCE.selectedObjects.push(i);else if(e.shiftKey){i.unselect();let s=Qe.INSTANCE.selectedObjects.indexOf(i);s!==-1&&Qe.INSTANCE.selectedObjects.splice(s,1)}this.outlinePass&&(this.outlinePass.selectedObjects=Qe.INSTANCE.selectedObjects)}}else this.unselectAll()}this.isMouseDown[e.button]=!1,K.isMouseDown[e.button]=!1,this.isDragging[e.button]=!1,this.controls.enabled=!0},"handleMouseUp"));ue(this,"handleMouseMove",c(e=>{this.lastMouseMove=e;for(let t=0;t<this.isMouseDown.length;t++)if(this.isMouseDown[t]&&(this.isDragging[t]=!0,this.lastMeshIntersect&&this.lastMeshIntersect.intersect.object&&!this.lastMeshIntersect.intersect.object.disableMouseEvents)){const i=new Pn,s=new Pn;let r=new D;this.camera.getWorldDirection(r),r.y=0,i.setFromNormalAndCoplanarPoint(new D(0,1,0),this.lastMeshIntersect.intersect.point),s.setFromNormalAndCoplanarPoint(r,this.lastMeshIntersect.intersect.point);const o=new hl,a=new ve,l=new ve;a.x=e.offsetX/this.canvas.clientWidth*2-1,a.y=-(e.offsetY/this.canvas.clientHeight)*2+1,l.x=(e.offsetX-e.movementX)/this.canvas.clientWidth*2-1,l.y=-((e.offsetY-e.movementY)/this.canvas.clientHeight)*2+1,o.setFromCamera(a,this.camera);const u=new D,h=new D,d=new D,f=new D;o.ray.intersectPlane(i,u),o.ray.intersectPlane(s,h),o.setFromCamera(l,this.camera),o.ray.intersectPlane(i,d),o.ray.intersectPlane(s,f);const p=e;p.movement3dOriginXZ=d,p.movement3dOriginY=f,p.movement3dStart=this.lastMeshIntersect.intersect.point,p.isFirstMovement=this.lastMeshIntersect.isFirstMovement,p.intersect=this.lastMeshIntersect.intersect;const _=p.intersect.object;let M=new D(e.movementX,-e.movementY,.5);M=M.unproject(this.camera),M=M.sub(this.camera.position).normalize(),p.movement3dXZ=u,p.movement3dY=h,_.invokeDragEvent(p),this.lastMeshIntersect.isFirstMovement=!1}},"handleMouseMove"));ue(this,"handleCameraRotationFromUi",c(e=>{this.camera.rotation.reorder("YXZ");const t=new D(0,0,1).applyEuler(new Kn(Vi.degToRad(e.detail.x),Vi.degToRad(e.detail.y),Vi.degToRad(e.detail.z),"YXZ")),i=this.camera.position.sub(this.controls.target).length(),s=this.controls.target.clone().add(t.multiplyScalar(i)),r=this.camera.position.clone(),o=this.camera.rotation.clone();this.camera.position.copy(s),this.camera.rotation.set(0,0,0,"YXZ"),this.camera.lookAt(this.controls.target);const a=this.camera.rotation.clone();this.camera.position.copy(r),this.camera.rotation.copy(o),new Ev(this.camera.position).to({x:s.x,y:s.y,z:s.z},500).start(),new Ev(this.camera.rotation).to({x:a.x,y:a.y,z:a.z},1e3).start()},"handleCameraRotationFromUi"));ue(this,"handleResize",c(()=>{var i;this.canvas.style.width="100%",this.canvas.style.height="100%";const e=this.canvas.clientWidth,t=this.canvas.clientHeight;this.canvas.width=e,this.canvas.height=t,this.renderer.setSize(e,t),this.camera.aspect=e/t,this.effectComposter.setSize(e,t),(i=this.outlinePass)==null||i.setSize(e,t),this.fxaaPass&&this.fxaaPass.uniforms.resolution.value.set(1/this.canvas.width,1/this.canvas.height),this.ssaoPass&&(this.ssaoPass.resolution=new ve(this.canvas.width,this.canvas.height)),this.camera.updateProjectionMatrix()},"handleResize"));ue(this,"createPostProccess",c(()=>{this.outlinePass=new Po(new ve(this.canvas.width,this.canvas.height),this.scene,this.camera,Qe.INSTANCE.selectedObjects),this.outlinePass.edgeGlow=0,this.fxaaPass=new ml(Pw),this.fxaaPass.uniforms.resolution.value.set(1/this.canvas.width,1/this.canvas.height),this.ssaoPass=new vl(this.scene,this.camera,new ve(this.canvas.width,this.canvas.height)),this.ssaoPass.params.saoBias=.5,this.ssaoPass.params.saoIntensity=.002,this.ssaoPass.params.saoScale=10,this.ssaoPass.params.saoKernelRadius=16,this.ssaoPass.params.saoMinResolution=0,this.effectComposter.addPass(this.outlinePass),this.effectComposter.addPass(this.fxaaPass),this.effectComposter.addPass(this.ssaoPass)},"createPostProccess"));ue(this,"createControlMeshes",c(()=>{this.scene.add(Qe.INSTANCE.scene),this.topLevel.add(Qe.INSTANCE.scene),Qe.INSTANCE.setVisible(!1),this.clickableObjects.push(Qe.INSTANCE.scene)},"createControlMeshes"));ue(this,"createGrid",c(()=>{const e=new Xi;this.scene.add(e),this.scene.fog=new Eh(new we(.13,.13,.13),.01,1e3),this.grid10=new fl(di*10,di-1,new we(3355443),new we(3355443)),this.grid40=new fl(di*10,(di-1)/4,new we(10987431),new we(10987431)),this.grid10.material.depthWrite=!1,this.grid40.material.depthWrite=!1,this.grid10.material.opacity=.5,this.grid40.material.opacity=.5,this.grid10.position.add(new D(-5,0,-5)),this.grid40.position.add(new D(-5,0,-5)),this.lineX=new Vs(new en().setFromPoints([new D(-di*10,0,0),new D(di*10,0,0)]),new ks({color:16711680,depthWrite:!1})),this.lineZ=new Vs(new en().setFromPoints([new D(0,0,-di*10),new D(0,0,di*10)]),new ks({color:255,depthWrite:!1})),this.renderer.setClearColor(new we(K.clearColor)),e.add(this.grid10),e.add(this.grid40),e.add(this.lineX),e.add(this.lineZ),K.setGridActive=t=>{e.visible=t,K.gridActive=t},K.setCurrentMode=t=>{K.currentMode=t,t!=="object"&&this.unselectAll()},this.ghostLight.position.set(1100,1e3,900),this.nGhostLight.position.set(-900,-1e3,-1100),this.scene.add(this.ghostLight),this.scene.add(this.nGhostLight),this.scene.add(this.ambientLight),this.test()},"createGrid"));ue(this,"test",c(()=>{const e=new Ji;e.min=new D(-20,-20,-20),e.max=new D(20,20,20),e.draw(new D,"square",5,1),this.clickableObjects.push(e),this.scene.add(e)},"test"));ue(this,"destroy",c(()=>{this.canvasObserver.disconnect(),this.clearEvents()},"destroy"));window.renderingContext=this,K.renderingContext=this,this.canvas=e,this.canvasContainer=t,this.renderer=new bh({antialias:!0,canvas:e}),this.effectComposter=new Pd(this.renderer),this.scene=new el,this.scene.userData.isRootScene=!0,this.topLevel=new el,this.topLevel.add(new cl(16777215,1)),this.camera=new jt(70,1,LP,di),this.renderPass=new Dd(this.scene,this.camera),this.effectComposter.addPass(this.renderPass),this.camera.position.set(100,100,100),this.controls=new ed(this.camera,e),this.clock=new ul(!0),this.handleResize(),this.createEvents(),this.canvasObserver=new ResizeObserver(this.handleResize),this.canvasObserver.observe(t),this.createGrid(),this.createControlMeshes(),this.createPostProccess(),this.update()}unselectAll(){Qe.INSTANCE.setVisible(!1),Qe.INSTANCE.selectedObjects.forEach(e=>{e.unselect()}),Qe.INSTANCE.selectedObjects=[],this.outlinePass&&(this.outlinePass.selectedObjects=Qe.INSTANCE.selectedObjects)}};c(Zm,"RenderingContext");let Ld=Zm,Tv;const NP=tn({mounted(){const n=document.getElementById("editor-canvas"),e=document.getElementById("canvas-container");n!=null&&(Tv=new Ld(n,e))},deactivated(){Tv.destroy()}}),OP=c(n=>(Si("data-v-52bfad35"),n=n(),bi(),n),"_withScopeId"),UP={id:"canvas-container"},FP=OP(()=>J("canvas",{id:"editor-canvas"},null,-1)),BP=[FP];function zP(n,e,t,i,s,r){return He(),ot("div",UP,BP)}c(zP,"_sfc_render$2");const kP=nn(NP,[["render",zP],["__scopeId","data-v-52bfad35"]]),VP=tn({components:{MenuBar:Gw,PropertiesEditor:jC,AssetBrowser:ZC,ModeBar:tP,ToolBar:dP,TransformBar:EP,Axis:RP,CanvasEditor:kP}}),HP={class:"page"},GP={class:"page-row"},WP={class:"page-content"},jP={class:"canvas-container"};function XP(n,e,t,i,s,r){const o=Ut("MenuBar"),a=Ut("ModeBar"),l=Ut("ToolBar"),u=Ut("TransformBar"),h=Ut("Axis"),d=Ut("CanvasEditor"),f=Ut("AssetBrowser"),p=Ut("PropertiesEditor");return He(),ot("div",HP,[Ne(o),J("div",GP,[J("div",WP,[Ne(a),J("div",jP,[Ne(l),Ne(u),Ne(h),Ne(d)]),Ne(f)]),J("div",null,[Ne(p)])])])}c(XP,"_sfc_render$1");const $P=nn(VP,[["render",XP],["__scopeId","data-v-b38232fd"]]),YP=tn({components:{Editor:$P}});function KP(n,e,t,i,s,r){const o=Ut("Editor");return He(),an(o)}c(KP,"_sfc_render");const qP=nn(YP,[["render",KP]]);sessionStorage.clear();A0();A0("classes");BM(qP).mount("#app");
