var ag=Object.defineProperty;var d1=(n,e,t)=>e in n?ag(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var u=(n,e)=>ag(n,"name",{value:e,configurable:!0});var se=(n,e,t)=>(d1(n,typeof e!="symbol"?e+"":e,t),t);u(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}u(t,"getFetchOpts");function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}u(i,"processPreload")},"polyfill")();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ld(n,e){const t=new Set(n.split(","));return i=>t.has(i)}u(Ld,"makeMap");const ft={},fr=[],Dn=u(()=>{},"NOOP"),f1=u(()=>!1,"NO"),Nl=u(n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),"isOn"),Nd=u(n=>n.startsWith("onUpdate:"),"isModelListener"),At=Object.assign,Od=u((n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},"remove"),p1=Object.prototype.hasOwnProperty,tt=u((n,e)=>p1.call(n,e),"hasOwn"),ze=Array.isArray,pr=u(n=>Ol(n)==="[object Map]","isMap"),Rv=u(n=>Ol(n)==="[object Set]","isSet"),We=u(n=>typeof n=="function","isFunction"),wt=u(n=>typeof n=="string","isString"),Gs=u(n=>typeof n=="symbol","isSymbol"),vt=u(n=>n!==null&&typeof n=="object","isObject"),Pv=u(n=>(vt(n)||We(n))&&We(n.then)&&We(n.catch),"isPromise"),Dv=Object.prototype.toString,Ol=u(n=>Dv.call(n),"toTypeString"),m1=u(n=>Ol(n).slice(8,-1),"toRawType"),Iv=u(n=>Ol(n)==="[object Object]","isPlainObject"),Ud=u(n=>wt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,"isIntegerKey"),qr=Ld(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ul=u(n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},"cacheStringFunction"),g1=/-(\w)/g,ri=Ul(n=>n.replace(g1,(e,t)=>t?t.toUpperCase():"")),_1=/\B([A-Z])/g,Ws=Ul(n=>n.replace(_1,"-$1").toLowerCase()),Fl=Ul(n=>n.charAt(0).toUpperCase()+n.slice(1)),ic=Ul(n=>n?`on${Fl(n)}`:""),es=u((n,e)=>!Object.is(n,e),"hasChanged"),sc=u((n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},"invokeArrayFns"),Lv=u((n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},"def"),v1=u(n=>{const e=parseFloat(n);return isNaN(e)?n:e},"looseToNumber"),x1=u(n=>{const e=wt(n)?Number(n):NaN;return isNaN(e)?n:e},"toNumber");let lg;const Nv=u(()=>lg||(lg=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),"getGlobalThis");function Dt(n){if(ze(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=wt(i)?b1(i):Dt(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(wt(n)||vt(n))return n}u(Dt,"normalizeStyle");const y1=/;(?![^(]*\))/g,M1=/:([^]+)/,S1=/\/\*[^]*?\*\//g;function b1(n){const e={};return n.replace(S1,"").split(y1).forEach(t=>{if(t){const i=t.split(M1);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}u(b1,"parseStringStyle");function Ft(n){let e="";if(wt(n))e=n;else if(ze(n))for(let t=0;t<n.length;t++){const i=Ft(n[t]);i&&(e+=i+" ")}else if(vt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}u(Ft,"normalizeClass");const E1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",T1=Ld(E1);function Ov(n){return!!n||n===""}u(Ov,"includeBooleanAttr");const Rn=u(n=>wt(n)?n:n==null?"":ze(n)||vt(n)&&(n.toString===Dv||!We(n.toString))?JSON.stringify(n,Uv,2):String(n),"toDisplayString"),Uv=u((n,e)=>e&&e.__v_isRef?Uv(n,e.value):pr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[rc(i,r)+" =>"]=s,t),{})}:Rv(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>rc(t))}:Gs(e)?rc(e):vt(e)&&!ze(e)&&!Iv(e)?String(e):e,"replacer"),rc=u((n,e="")=>{var t;return Gs(n)?`Symbol(${(t=n.description)!=null?t:e})`:n},"stringifySymbol");/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Hn;const Mf=class Mf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Hn,!e&&Hn&&(this.index=(Hn.scopes||(Hn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Hn;try{return Hn=this,e()}finally{Hn=t}}}on(){Hn=this}off(){Hn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}};u(Mf,"EffectScope");let tu=Mf;function A1(n,e=Hn){e&&e.active&&e.effects.push(n)}u(A1,"recordEffectScope");function w1(){return Hn}u(w1,"getCurrentScope");let Ns;const Sf=class Sf{constructor(e,t,i,s){this.fn=e,this.trigger=t,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,A1(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,us();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(C1(t.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),hs()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Ki,t=Ns;try{return Ki=!0,Ns=this,this._runnings++,cg(this),this.fn()}finally{ug(this),this._runnings--,Ns=t,Ki=e}}stop(){this.active&&(cg(this),ug(this),this.onStop&&this.onStop(),this.active=!1)}};u(Sf,"ReactiveEffect");let fo=Sf;function C1(n){return n.value}u(C1,"triggerComputed");function cg(n){n._trackId++,n._depsLength=0}u(cg,"preCleanupEffect");function ug(n){if(n.deps.length>n._depsLength){for(let e=n._depsLength;e<n.deps.length;e++)Fv(n.deps[e],n);n.deps.length=n._depsLength}}u(ug,"postCleanupEffect");function Fv(n,e){const t=n.get(e);t!==void 0&&e._trackId!==t&&(n.delete(e),n.size===0&&n.cleanup())}u(Fv,"cleanupDepEffect");let Ki=!0,nu=0;const Bv=[];function us(){Bv.push(Ki),Ki=!1}u(us,"pauseTracking");function hs(){const n=Bv.pop();Ki=n===void 0?!0:n}u(hs,"resetTracking");function Fd(){nu++}u(Fd,"pauseScheduling");function Bd(){for(nu--;!nu&&iu.length;)iu.shift()()}u(Bd,"resetScheduling");function zv(n,e,t){if(e.get(n)!==n._trackId){e.set(n,n._trackId);const i=n.deps[n._depsLength];i!==e?(i&&Fv(i,n),n.deps[n._depsLength++]=e):n._depsLength++}}u(zv,"trackEffect");const iu=[];function kv(n,e,t){Fd();for(const i of n.keys()){let s;i._dirtyLevel<e&&(s??(s=n.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=e),i._shouldSchedule&&(s??(s=n.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&iu.push(i.scheduler)))}Bd()}u(kv,"triggerEffects");const Vv=u((n,e)=>{const t=new Map;return t.cleanup=n,t.computed=e,t},"createDep"),su=new WeakMap,Os=Symbol(""),ru=Symbol("");function gn(n,e,t){if(Ki&&Ns){let i=su.get(n);i||su.set(n,i=new Map);let s=i.get(t);s||i.set(t,s=Vv(()=>i.delete(t))),zv(Ns,s)}}u(gn,"track");function Mi(n,e,t,i,s,r){const o=su.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&ze(n)){const l=Number(i);o.forEach((c,h)=>{(h==="length"||!Gs(h)&&h>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":ze(n)?Ud(t)&&a.push(o.get("length")):(a.push(o.get(Os)),pr(n)&&a.push(o.get(ru)));break;case"delete":ze(n)||(a.push(o.get(Os)),pr(n)&&a.push(o.get(ru)));break;case"set":pr(n)&&a.push(o.get(Os));break}Fd();for(const l of a)l&&kv(l,4);Bd()}u(Mi,"trigger");const R1=Ld("__proto__,__v_isRef,__isVue"),Hv=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Gs)),hg=P1();function P1(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=lt(this);for(let r=0,o=this.length;r<o;r++)gn(i,"get",r+"");const s=i[e](...t);return s===-1||s===!1?i[e](...t.map(lt)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){us(),Fd();const i=lt(this)[e].apply(this,t);return Bd(),hs(),i}}),n}u(P1,"createArrayInstrumentations");function D1(n){Gs(n)||(n=String(n));const e=lt(this);return gn(e,"has",n),e.hasOwnProperty(n)}u(D1,"hasOwnProperty");const bf=class bf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?G1:jv:r?Wv:Gv).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ze(e);if(!s){if(o&&tt(hg,t))return Reflect.get(hg,t,i);if(t==="hasOwnProperty")return D1}const a=Reflect.get(e,t,i);return(Gs(t)?Hv.has(t):R1(t))||(s||gn(e,"get",t),r)?a:_n(a)?o&&Ud(t)?a:a.value:vt(a)?s?Xv(a):zl(a):a}};u(bf,"BaseReactiveHandler");let Ia=bf;const Ef=class Ef extends Ia{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=po(r);if(!Na(i)&&!po(i)&&(r=lt(r),i=lt(i)),!ze(e)&&_n(r)&&!_n(i))return l?!1:(r.value=i,!0)}const o=ze(e)&&Ud(t)?Number(t)<e.length:tt(e,t),a=Reflect.set(e,t,i,s);return e===lt(s)&&(o?es(i,r)&&Mi(e,"set",t,i):Mi(e,"add",t,i)),a}deleteProperty(e,t){const i=tt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Mi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Gs(t)||!Hv.has(t))&&gn(e,"has",t),i}ownKeys(e){return gn(e,"iterate",ze(e)?"length":Os),Reflect.ownKeys(e)}};u(Ef,"MutableReactiveHandler");let La=Ef;const Tf=class Tf extends Ia{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}};u(Tf,"ReadonlyReactiveHandler");let ou=Tf;const I1=new La,L1=new ou,N1=new La(!0);const zd=u(n=>n,"toShallow"),Bl=u(n=>Reflect.getPrototypeOf(n),"getProto");function Bo(n,e,t=!1,i=!1){n=n.__v_raw;const s=lt(n),r=lt(e);t||(es(e,r)&&gn(s,"get",e),gn(s,"get",r));const{has:o}=Bl(s),a=i?zd:t?Hd:mo;if(o.call(s,e))return a(n.get(e));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(e)}u(Bo,"get");function zo(n,e=!1){const t=this.__v_raw,i=lt(t),s=lt(n);return e||(es(n,s)&&gn(i,"has",n),gn(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}u(zo,"has");function ko(n,e=!1){return n=n.__v_raw,!e&&gn(lt(n),"iterate",Os),Reflect.get(n,"size",n)}u(ko,"size");function dg(n){n=lt(n);const e=lt(this);return Bl(e).has.call(e,n)||(e.add(n),Mi(e,"add",n,n)),this}u(dg,"add");function fg(n,e){e=lt(e);const t=lt(this),{has:i,get:s}=Bl(t);let r=i.call(t,n);r||(n=lt(n),r=i.call(t,n));const o=s.call(t,n);return t.set(n,e),r?es(e,o)&&Mi(t,"set",n,e):Mi(t,"add",n,e),this}u(fg,"set");function pg(n){const e=lt(this),{has:t,get:i}=Bl(e);let s=t.call(e,n);s||(n=lt(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&Mi(e,"delete",n,void 0),r}u(pg,"deleteEntry");function mg(){const n=lt(this),e=n.size!==0,t=n.clear();return e&&Mi(n,"clear",void 0,void 0),t}u(mg,"clear");function Vo(n,e){return u(function(i,s){const r=this,o=r.__v_raw,a=lt(o),l=e?zd:n?Hd:mo;return!n&&gn(a,"iterate",Os),o.forEach((c,h)=>i.call(s,l(c),l(h),r))},"forEach")}u(Vo,"createForEach");function Ho(n,e,t){return function(...i){const s=this.__v_raw,r=lt(s),o=pr(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),h=t?zd:e?Hd:mo;return!e&&gn(r,"iterate",l?ru:Os),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[h(d[0]),h(d[1])]:h(d),done:f}},[Symbol.iterator](){return this}}}}u(Ho,"createIterableMethod");function wi(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}u(wi,"createReadonlyMethod");function O1(){const n={get(r){return Bo(this,r)},get size(){return ko(this)},has:zo,add:dg,set:fg,delete:pg,clear:mg,forEach:Vo(!1,!1)},e={get(r){return Bo(this,r,!1,!0)},get size(){return ko(this)},has:zo,add:dg,set:fg,delete:pg,clear:mg,forEach:Vo(!1,!0)},t={get(r){return Bo(this,r,!0)},get size(){return ko(this,!0)},has(r){return zo.call(this,r,!0)},add:wi("add"),set:wi("set"),delete:wi("delete"),clear:wi("clear"),forEach:Vo(!0,!1)},i={get(r){return Bo(this,r,!0,!0)},get size(){return ko(this,!0)},has(r){return zo.call(this,r,!0)},add:wi("add"),set:wi("set"),delete:wi("delete"),clear:wi("clear"),forEach:Vo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Ho(r,!1,!1),t[r]=Ho(r,!0,!1),e[r]=Ho(r,!1,!0),i[r]=Ho(r,!0,!0)}),[n,t,e,i]}u(O1,"createInstrumentations");const[U1,F1,B1,z1]=O1();function kd(n,e){const t=e?n?z1:B1:n?F1:U1;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(tt(t,s)&&s in i?t:i,s,r)}u(kd,"createInstrumentationGetter");const k1={get:kd(!1,!1)},V1={get:kd(!1,!0)},H1={get:kd(!0,!1)};const Gv=new WeakMap,Wv=new WeakMap,jv=new WeakMap,G1=new WeakMap;function W1(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}u(W1,"targetTypeMap");function j1(n){return n.__v_skip||!Object.isExtensible(n)?0:W1(m1(n))}u(j1,"getTargetType");function zl(n){return po(n)?n:Vd(n,!1,I1,k1,Gv)}u(zl,"reactive");function X1(n){return Vd(n,!1,N1,V1,Wv)}u(X1,"shallowReactive");function Xv(n){return Vd(n,!0,L1,H1,jv)}u(Xv,"readonly");function Vd(n,e,t,i,s){if(!vt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=j1(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}u(Vd,"createReactiveObject");function Zr(n){return po(n)?Zr(n.__v_raw):!!(n&&n.__v_isReactive)}u(Zr,"isReactive");function po(n){return!!(n&&n.__v_isReadonly)}u(po,"isReadonly");function Na(n){return!!(n&&n.__v_isShallow)}u(Na,"isShallow");function $v(n){return n?!!n.__v_raw:!1}u($v,"isProxy");function lt(n){const e=n&&n.__v_raw;return e?lt(e):n}u(lt,"toRaw");function $1(n){return Object.isExtensible(n)&&Lv(n,"__v_skip",!0),n}u($1,"markRaw");const mo=u(n=>vt(n)?zl(n):n,"toReactive"),Hd=u(n=>vt(n)?Xv(n):n,"toReadonly"),Af=class Af{constructor(e,t,i,s){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new fo(()=>e(this._value),()=>Ma(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=lt(this);return(!e._cacheable||e.effect.dirty)&&es(e._value,e._value=e.effect.run())&&Ma(e,4),Yv(e),e.effect._dirtyLevel>=2&&Ma(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}};u(Af,"ComputedRefImpl");let Oa=Af;function Y1(n,e,t=!1){let i,s;const r=We(n);return r?(i=n,s=Dn):(i=n.get,s=n.set),new Oa(i,s,r||!s,t)}u(Y1,"computed$1");function Yv(n){var e;Ki&&Ns&&(n=lt(n),zv(Ns,(e=n.dep)!=null?e:n.dep=Vv(()=>n.dep=void 0,n instanceof Oa?n:void 0)))}u(Yv,"trackRefValue");function Ma(n,e=4,t){n=lt(n);const i=n.dep;i&&kv(i,e)}u(Ma,"triggerRefValue");function _n(n){return!!(n&&n.__v_isRef===!0)}u(_n,"isRef");function K1(n){return q1(n,!1)}u(K1,"ref");function q1(n,e){return _n(n)?n:new au(n,e)}u(q1,"createRef");const wf=class wf{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:lt(e),this._value=t?e:mo(e)}get value(){return Yv(this),this._value}set value(e){const t=this.__v_isShallow||Na(e)||po(e);e=t?e:lt(e),es(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:mo(e),Ma(this,4))}};u(wf,"RefImpl");let au=wf;function Z1(n){return _n(n)?n.value:n}u(Z1,"unref");const J1={get:(n,e,t)=>Z1(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return _n(s)&&!_n(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Kv(n){return Zr(n)?n:new Proxy(n,J1)}u(Kv,"proxyRefs");/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qi(n,e,t,i){try{return i?n(...i):n()}catch(s){kl(s,e,t)}}u(qi,"callWithErrorHandling");function Ln(n,e,t,i){if(We(n)){const s=qi(n,e,t,i);return s&&Pv(s)&&s.catch(r=>{kl(r,e,t)}),s}if(ze(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Ln(n[r],e,t,i));return s}}u(Ln,"callWithAsyncErrorHandling");function kl(n,e,t,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${t}`;for(;r;){const c=r.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](n,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){us(),qi(l,null,10,[n,o,a]),hs();return}}Q1(n,t,s,i)}u(kl,"handleError");function Q1(n,e,t,i=!0){console.error(n)}u(Q1,"logError");let go=!1,lu=!1;const Jt=[];let ni=0;const mr=[];let Bi=null,ws=0;const qv=Promise.resolve();let Gd=null;function ex(n){const e=Gd||qv;return n?e.then(this?n.bind(this):n):e}u(ex,"nextTick");function tx(n){let e=ni+1,t=Jt.length;for(;e<t;){const i=e+t>>>1,s=Jt[i],r=_o(s);r<n||r===n&&s.pre?e=i+1:t=i}return e}u(tx,"findInsertionIndex");function Wd(n){(!Jt.length||!Jt.includes(n,go&&n.allowRecurse?ni+1:ni))&&(n.id==null?Jt.push(n):Jt.splice(tx(n.id),0,n),Zv())}u(Wd,"queueJob");function Zv(){!go&&!lu&&(lu=!0,Gd=qv.then(Qv))}u(Zv,"queueFlush");function nx(n){const e=Jt.indexOf(n);e>ni&&Jt.splice(e,1)}u(nx,"invalidateJob");function ix(n){ze(n)?mr.push(...n):(!Bi||!Bi.includes(n,n.allowRecurse?ws+1:ws))&&mr.push(n),Zv()}u(ix,"queuePostFlushCb");function gg(n,e,t=go?ni+1:0){for(;t<Jt.length;t++){const i=Jt[t];if(i&&i.pre){if(n&&i.id!==n.uid)continue;Jt.splice(t,1),t--,i()}}}u(gg,"flushPreFlushCbs");function Jv(n){if(mr.length){const e=[...new Set(mr)].sort((t,i)=>_o(t)-_o(i));if(mr.length=0,Bi){Bi.push(...e);return}for(Bi=e,ws=0;ws<Bi.length;ws++)Bi[ws]();Bi=null,ws=0}}u(Jv,"flushPostFlushCbs");const _o=u(n=>n.id==null?1/0:n.id,"getId"),sx=u((n,e)=>{const t=_o(n)-_o(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t},"comparator");function Qv(n){lu=!1,go=!0,Jt.sort(sx);try{for(ni=0;ni<Jt.length;ni++){const e=Jt[ni];e&&e.active!==!1&&qi(e,null,14)}}finally{ni=0,Jt.length=0,Jv(),go=!1,Gd=null,(Jt.length||mr.length)&&Qv()}}u(Qv,"flushJobs");function rx(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ft;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:f}=i[h]||ft;f&&(s=t.map(p=>wt(p)?p.trim():p)),d&&(s=t.map(v1))}let a,l=i[a=ic(e)]||i[a=ic(ri(e))];!l&&r&&(l=i[a=ic(Ws(e))]),l&&Ln(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Ln(c,n,6,s)}}u(rx,"emit");function e0(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!We(n)){const l=u(c=>{const h=e0(c,e,!0);h&&(a=!0,At(o,h))},"extendEmits");!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(vt(n)&&i.set(n,null),null):(ze(r)?r.forEach(l=>o[l]=null):At(o,r),vt(n)&&i.set(n,o),o)}u(e0,"normalizeEmitsOptions");function Vl(n,e){return!n||!Nl(e)?!1:(e=e.slice(2).replace(/Once$/,""),tt(n,e[0].toLowerCase()+e.slice(1))||tt(n,Ws(e))||tt(n,e))}u(Vl,"isEmitListener");let It=null,Hl=null;function Ua(n){const e=It;return It=n,Hl=n&&n.type.__scopeId||null,e}u(Ua,"setCurrentRenderingInstance");function qn(n){Hl=n}u(qn,"pushScopeId");function Zn(){Hl=null}u(Zn,"popScopeId");function gr(n,e=It,t){if(!e||n._n)return n;const i=u((...s)=>{i._d&&Cg(-1);const r=Ua(e);let o;try{o=n(...s)}finally{Ua(r),i._d&&Cg(1)}return o},"renderFnWithContext");return i._n=!0,i._c=!0,i._d=!0,i}u(gr,"withCtx");function oc(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:h,props:d,data:f,setupState:p,ctx:_,inheritAttrs:y}=n,g=Ua(n);let m,A;try{if(t.shapeFlag&4){const w=s||i,O=w;m=ei(c.call(O,w,h,d,p,f,_)),A=a}else{const w=e;m=ei(w.length>1?w(d,{attrs:a,slots:o,emit:l}):w(d,null)),A=e.props?a:ox(a)}}catch(w){no.length=0,kl(w,n,1),m=Ne(bn)}let b=m;if(A&&y!==!1){const w=Object.keys(A),{shapeFlag:O}=b;w.length&&O&7&&(r&&w.some(Nd)&&(A=ax(A,r)),b=ts(b,A,!1,!0))}return t.dirs&&(b=ts(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&(b.transition=t.transition),m=b,Ua(g),m}u(oc,"renderComponentRoot");const ox=u(n=>{let e;for(const t in n)(t==="class"||t==="style"||Nl(t))&&((e||(e={}))[t]=n[t]);return e},"getFunctionalFallthrough"),ax=u((n,e)=>{const t={};for(const i in n)(!Nd(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t},"filterModelListeners");function lx(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?_g(i,o,c):!!o;if(l&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const f=h[d];if(o[f]!==i[f]&&!Vl(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?_g(i,o,c):!0:!!o;return!1}u(lx,"shouldUpdateComponent");function _g(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!Vl(t,r))return!0}return!1}u(_g,"hasPropsChanged");function cx({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}u(cx,"updateHOCHostEl");const ux="components";function Bt(n,e){return dx(ux,n,!0,e)||n}u(Bt,"resolveComponent");const hx=Symbol.for("v-ndc");function dx(n,e,t=!0,i=!1){const s=It||Xt;if(s){const r=s.type;{const a=ly(r,!1);if(a&&(a===e||a===ri(e)||a===Fl(ri(e))))return r}const o=vg(s[n]||r[n],e)||vg(s.appContext[n],e);return!o&&i?r:o}}u(dx,"resolveAsset");function vg(n,e){return n&&(n[e]||n[ri(e)]||n[Fl(ri(e))])}u(vg,"resolve");const fx=u(n=>n.__isSuspense,"isSuspense");function px(n,e){e&&e.pendingBranch?ze(n)?e.effects.push(...n):e.effects.push(n):ix(n)}u(px,"queueEffectWithSuspense");const mx=Symbol.for("v-scx"),gx=u(()=>Sa(mx),"useSSRContext");function _x(n,e){return jd(n,null,{flush:"post"})}u(_x,"watchPostEffect");const Go={};function ac(n,e,t){return jd(n,e,t)}u(ac,"watch");function jd(n,e,{immediate:t,deep:i,flush:s,once:r,onTrack:o,onTrigger:a}=ft){if(e&&r){const P=e;e=u((...C)=>{P(...C),O()},"cb")}const l=Xt,c=u(P=>i===!0?P:Is(P,i===!1?1:void 0),"reactiveGetter");let h,d=!1,f=!1;if(_n(n)?(h=u(()=>n.value,"getter"),d=Na(n)):Zr(n)?(h=u(()=>c(n),"getter"),d=!0):ze(n)?(f=!0,d=n.some(P=>Zr(P)||Na(P)),h=u(()=>n.map(P=>{if(_n(P))return P.value;if(Zr(P))return c(P);if(We(P))return qi(P,l,2)}),"getter")):We(n)?e?h=u(()=>qi(n,l,2),"getter"):h=u(()=>(p&&p(),Ln(n,l,3,[_])),"getter"):h=Dn,e&&i){const P=h;h=u(()=>Is(P()),"getter")}let p,_=u(P=>{p=b.onStop=()=>{qi(P,l,4),p=b.onStop=void 0}},"onCleanup"),y;if(Xl)if(_=Dn,e?t&&Ln(e,l,3,[h(),f?[]:void 0,_]):h(),s==="sync"){const P=gx();y=P.__watcherHandles||(P.__watcherHandles=[])}else return Dn;let g=f?new Array(n.length).fill(Go):Go;const m=u(()=>{if(!(!b.active||!b.dirty))if(e){const P=b.run();(i||d||(f?P.some((C,L)=>es(C,g[L])):es(P,g)))&&(p&&p(),Ln(e,l,3,[P,g===Go?void 0:f&&g[0]===Go?[]:g,_]),g=P)}else b.run()},"job");m.allowRecurse=!!e;let A;s==="sync"?A=m:s==="post"?A=u(()=>fn(m,l&&l.suspense),"scheduler"):(m.pre=!0,l&&(m.id=l.uid),A=u(()=>Wd(m),"scheduler"));const b=new fo(h,Dn,A),w=w1(),O=u(()=>{b.stop(),w&&Od(w.effects,b)},"unwatch");return e?t?m():g=b.run():s==="post"?fn(b.run.bind(b),l&&l.suspense):b.run(),y&&y.push(O),O}u(jd,"doWatch");function vx(n,e,t){const i=this.proxy,s=wt(n)?n.includes(".")?t0(i,n):()=>i[n]:n.bind(i,i);let r;We(e)?r=e:(r=e.handler,t=e);const o=Lo(this),a=jd(s,r.bind(i),t);return o(),a}u(vx,"instanceWatch");function t0(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}u(t0,"createPathGetter");function Is(n,e=1/0,t){if(e<=0||!vt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,_n(n))Is(n.value,e,t);else if(ze(n))for(let i=0;i<n.length;i++)Is(n[i],e,t);else if(Rv(n)||pr(n))n.forEach(i=>{Is(i,e,t)});else if(Iv(n))for(const i in n)Is(n[i],e,t);return n}u(Is,"traverse");function Ir(n,e){if(It===null)return n;const t=$l(It)||It.proxy,i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=ft]=e[s];r&&(We(r)&&(r={mounted:r,updated:r}),r.deep&&Is(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}u(Ir,"withDirectives");function ms(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(us(),Ln(l,t,8,[n.el,a,n,e]),hs())}}u(ms,"invokeDirectiveHook");const zi=Symbol("_leaveCb"),Wo=Symbol("_enterCb");function xx(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Xd(()=>{n.isMounted=!0}),o0(()=>{n.isUnmounting=!0}),n}u(xx,"useTransitionState");const An=[Function,Array],n0={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:An,onEnter:An,onAfterEnter:An,onEnterCancelled:An,onBeforeLeave:An,onLeave:An,onAfterLeave:An,onLeaveCancelled:An,onBeforeAppear:An,onAppear:An,onAfterAppear:An,onAppearCancelled:An},yx={name:"BaseTransition",props:n0,setup(n,{slots:e}){const t=Zd(),i=xx();return()=>{const s=e.default&&s0(e.default(),!0);if(!s||!s.length)return;let r=s[0];if(s.length>1){for(const f of s)if(f.type!==bn){r=f;break}}const o=lt(n),{mode:a}=o;if(i.isLeaving)return lc(r);const l=xg(r);if(!l)return lc(r);const c=cu(l,o,i,t);uu(l,c);const h=t.subTree,d=h&&xg(h);if(d&&d.type!==bn&&!Cs(l,d)){const f=cu(d,o,i,t);if(uu(d,f),a==="out-in"&&l.type!==bn)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.update.active!==!1&&(t.effect.dirty=!0,t.update())},lc(r);a==="in-out"&&l.type!==bn&&(f.delayLeave=(p,_,y)=>{const g=i0(i,d);g[String(d.key)]=d,p[zi]=()=>{_(),p[zi]=void 0,delete c.delayedLeave},c.delayedLeave=y})}return r}}},Mx=yx;function i0(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}u(i0,"getLeavingNodesForType");function cu(n,e,t,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:h,onBeforeLeave:d,onLeave:f,onAfterLeave:p,onLeaveCancelled:_,onBeforeAppear:y,onAppear:g,onAfterAppear:m,onAppearCancelled:A}=e,b=String(n.key),w=i0(t,n),O=u((L,ie)=>{L&&Ln(L,i,9,ie)},"callHook2"),P=u((L,ie)=>{const M=ie[1];O(L,ie),ze(L)?L.every(T=>T.length<=1)&&M():L.length<=1&&M()},"callAsyncHook"),C={mode:r,persisted:o,beforeEnter(L){let ie=a;if(!t.isMounted)if(s)ie=y||a;else return;L[zi]&&L[zi](!0);const M=w[b];M&&Cs(n,M)&&M.el[zi]&&M.el[zi](),O(ie,[L])},enter(L){let ie=l,M=c,T=h;if(!t.isMounted)if(s)ie=g||l,M=m||c,T=A||h;else return;let B=!1;const G=L[Wo]=ee=>{B||(B=!0,ee?O(T,[L]):O(M,[L]),C.delayedLeave&&C.delayedLeave(),L[Wo]=void 0)};ie?P(ie,[L,G]):G()},leave(L,ie){const M=String(n.key);if(L[Wo]&&L[Wo](!0),t.isUnmounting)return ie();O(d,[L]);let T=!1;const B=L[zi]=G=>{T||(T=!0,ie(),G?O(_,[L]):O(p,[L]),L[zi]=void 0,w[M]===n&&delete w[M])};w[M]=n,f?P(f,[L,B]):B()},clone(L){return cu(L,e,t,i)}};return C}u(cu,"resolveTransitionHooks");function lc(n){if(Gl(n))return n=ts(n),n.children=null,n}u(lc,"emptyPlaceholder");function xg(n){if(!Gl(n))return n;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&We(t.default))return t.default()}}u(xg,"getKeepAliveChild");function uu(n,e){n.shapeFlag&6&&n.component?uu(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}u(uu,"setTransitionHooks");function s0(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===kt?(o.patchFlag&128&&s++,i=i.concat(s0(o.children,e,a))):(e||o.type!==bn)&&i.push(a!=null?ts(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}u(s0,"getTransitionRawChildren");/*! #__NO_SIDE_EFFECTS__ */function tn(n,e){return We(n)?At({name:n.name},e,{setup:n}):n}u(tn,"defineComponent");const Jr=u(n=>!!n.type.__asyncLoader,"isAsyncWrapper"),Gl=u(n=>n.type.__isKeepAlive,"isKeepAlive");function Sx(n,e){r0(n,"a",e)}u(Sx,"onActivated");function bx(n,e){r0(n,"da",e)}u(bx,"onDeactivated");function r0(n,e,t=Xt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Wl(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Gl(s.parent.vnode)&&Ex(i,e,t,s),s=s.parent}}u(r0,"registerKeepAliveHook");function Ex(n,e,t,i){const s=Wl(e,n,i,!0);$d(()=>{Od(i[e],s)},t)}u(Ex,"injectToKeepAliveRoot");function Wl(n,e,t=Xt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;us();const a=Lo(t),l=Ln(e,t,n,o);return a(),hs(),l});return i?s.unshift(r):s.push(r),r}}u(Wl,"injectHook");const Ti=u(n=>(e,t=Xt)=>(!Xl||n==="sp")&&Wl(n,(...i)=>e(...i),t),"createHook"),Tx=Ti("bm"),Xd=Ti("m"),Ax=Ti("bu"),wx=Ti("u"),o0=Ti("bum"),$d=Ti("um"),Cx=Ti("sp"),Rx=Ti("rtg"),Px=Ti("rtc");function Dx(n,e=Xt){Wl("ec",n,e)}u(Dx,"onErrorCaptured");function hu(n,e,t,i){let s;const r=t;if(ze(n)||wt(n)){s=new Array(n.length);for(let o=0,a=n.length;o<a;o++)s[o]=e(n[o],o,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r)}else if(vt(n))if(n[Symbol.iterator])s=Array.from(n,(o,a)=>e(o,a,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(n[c],c,a,r)}}else s=[];return s}u(hu,"renderList");function Zt(n,e,t={},i,s){if(It.isCE||It.parent&&Jr(It.parent)&&It.parent.isCE)return e!=="default"&&(t.name=e),Ne("slot",t,i&&i());let r=n[e];r&&r._c&&(r._d=!1),Be();const o=r&&a0(r(t)),a=an(kt,{key:t.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&n._===1?64:-2);return a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}u(Zt,"renderSlot");function a0(n){return n.some(e=>Ba(e)?!(e.type===bn||e.type===kt&&!a0(e.children)):!0)?n:null}u(a0,"ensureValidVNode");const du=u(n=>n?b0(n)?$l(n)||n.proxy:du(n.parent):null,"getPublicInstance"),Qr=At(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>du(n.parent),$root:n=>du(n.root),$emit:n=>n.emit,$options:n=>Yd(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,Wd(n.update)}),$nextTick:n=>n.n||(n.n=ex.bind(n.proxy)),$watch:n=>vx.bind(n)}),cc=u((n,e)=>n!==ft&&!n.__isScriptSetup&&tt(n,e),"hasSetupBinding"),Ix={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(cc(i,e))return o[e]=1,i[e];if(s!==ft&&tt(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&tt(c,e))return o[e]=3,r[e];if(t!==ft&&tt(t,e))return o[e]=4,t[e];fu&&(o[e]=0)}}const h=Qr[e];let d,f;if(h)return e==="$attrs"&&gn(n.attrs,"get",""),h(n);if((d=a.__cssModules)&&(d=d[e]))return d;if(t!==ft&&tt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,tt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return cc(s,e)?(s[e]=t,!0):i!==ft&&tt(i,e)?(i[e]=t,!0):tt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==ft&&tt(n,o)||cc(e,o)||(a=r[0])&&tt(a,o)||tt(i,o)||tt(Qr,o)||tt(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:tt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function yg(n){return ze(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}u(yg,"normalizePropsOrEmits");let fu=!0;function Lx(n){const e=Yd(n),t=n.proxy,i=n.ctx;fu=!1,e.beforeCreate&&Mg(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:h,beforeMount:d,mounted:f,beforeUpdate:p,updated:_,activated:y,deactivated:g,beforeDestroy:m,beforeUnmount:A,destroyed:b,unmounted:w,render:O,renderTracked:P,renderTriggered:C,errorCaptured:L,serverPrefetch:ie,expose:M,inheritAttrs:T,components:B,directives:G,filters:ee}=e;if(c&&Nx(c,i,null),o)for(const Q in o){const W=o[Q];We(W)&&(i[Q]=W.bind(t))}if(s){const Q=s.call(t,t);vt(Q)&&(n.data=zl(Q))}if(fu=!0,r)for(const Q in r){const W=r[Q],ge=We(W)?W.bind(t,t):We(W.get)?W.get.bind(t,t):Dn,xe=!We(W)&&We(W.set)?W.set.bind(t):Dn,Ae=uy({get:ge,set:xe});Object.defineProperty(i,Q,{enumerable:!0,configurable:!0,get:()=>Ae.value,set:je=>Ae.value=je})}if(a)for(const Q in a)l0(a[Q],i,t,Q);if(l){const Q=We(l)?l.call(t):l;Reflect.ownKeys(Q).forEach(W=>{kx(W,Q[W])})}h&&Mg(h,n,"c");function K(Q,W){ze(W)?W.forEach(ge=>Q(ge.bind(t))):W&&Q(W.bind(t))}if(u(K,"registerLifecycleHook"),K(Tx,d),K(Xd,f),K(Ax,p),K(wx,_),K(Sx,y),K(bx,g),K(Dx,L),K(Px,P),K(Rx,C),K(o0,A),K($d,w),K(Cx,ie),ze(M))if(M.length){const Q=n.exposed||(n.exposed={});M.forEach(W=>{Object.defineProperty(Q,W,{get:()=>t[W],set:ge=>t[W]=ge})})}else n.exposed||(n.exposed={});O&&n.render===Dn&&(n.render=O),T!=null&&(n.inheritAttrs=T),B&&(n.components=B),G&&(n.directives=G)}u(Lx,"applyOptions");function Nx(n,e,t=Dn){ze(n)&&(n=pu(n));for(const i in n){const s=n[i];let r;vt(s)?"default"in s?r=Sa(s.from||i,s.default,!0):r=Sa(s.from||i):r=Sa(s),_n(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}u(Nx,"resolveInjections");function Mg(n,e,t){Ln(ze(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}u(Mg,"callHook$1");function l0(n,e,t,i){const s=i.includes(".")?t0(t,i):()=>t[i];if(wt(n)){const r=e[n];We(r)&&ac(s,r)}else if(We(n))ac(s,n.bind(t));else if(vt(n))if(ze(n))n.forEach(r=>l0(r,e,t,i));else{const r=We(n.handler)?n.handler.bind(t):e[n.handler];We(r)&&ac(s,r,n)}}u(l0,"createWatcher");function Yd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Fa(l,c,o,!0)),Fa(l,e,o)),vt(e)&&r.set(e,l),l}u(Yd,"resolveMergedOptions");function Fa(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Fa(n,r,t,!0),s&&s.forEach(o=>Fa(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Ox[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}u(Fa,"mergeOptions");const Ox={data:Sg,props:bg,emits:bg,methods:Xr,computed:Xr,beforeCreate:rn,created:rn,beforeMount:rn,mounted:rn,beforeUpdate:rn,updated:rn,beforeDestroy:rn,beforeUnmount:rn,destroyed:rn,unmounted:rn,activated:rn,deactivated:rn,errorCaptured:rn,serverPrefetch:rn,components:Xr,directives:Xr,watch:Fx,provide:Sg,inject:Ux};function Sg(n,e){return e?n?u(function(){return At(We(n)?n.call(this,this):n,We(e)?e.call(this,this):e)},"mergedDataFn"):e:n}u(Sg,"mergeDataFn");function Ux(n,e){return Xr(pu(n),pu(e))}u(Ux,"mergeInject");function pu(n){if(ze(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}u(pu,"normalizeInject");function rn(n,e){return n?[...new Set([].concat(n,e))]:e}u(rn,"mergeAsArray");function Xr(n,e){return n?At(Object.create(null),n,e):e}u(Xr,"mergeObjectOptions");function bg(n,e){return n?ze(n)&&ze(e)?[...new Set([...n,...e])]:At(Object.create(null),yg(n),yg(e??{})):e}u(bg,"mergeEmitsOrPropsOptions");function Fx(n,e){if(!n)return e;if(!e)return n;const t=At(Object.create(null),n);for(const i in e)t[i]=rn(n[i],e[i]);return t}u(Fx,"mergeWatchOptions");function c0(){return{app:null,config:{isNativeTag:f1,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}u(c0,"createAppContext");let Bx=0;function zx(n,e){return u(function(i,s=null){We(i)||(i=At({},i)),s!=null&&!vt(s)&&(s=null);const r=c0(),o=new WeakSet;let a=!1;const l=r.app={_uid:Bx++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:hy,get config(){return r.config},set config(c){},use(c,...h){return o.has(c)||(c&&We(c.install)?(o.add(c),c.install(l,...h)):We(c)&&(o.add(c),c(l,...h))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,h){return h?(r.components[c]=h,l):r.components[c]},directive(c,h){return h?(r.directives[c]=h,l):r.directives[c]},mount(c,h,d){if(!a){const f=Ne(i,s);return f.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),h&&e?e(f,c):n(f,c,d),a=!0,l._container=c,c.__vue_app__=l,$l(f.component)||f.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,h){return r.provides[c]=h,l},runWithContext(c){const h=eo;eo=l;try{return c()}finally{eo=h}}};return l},"createApp")}u(zx,"createAppAPI");let eo=null;function kx(n,e){if(Xt){let t=Xt.provides;const i=Xt.parent&&Xt.parent.provides;i===t&&(t=Xt.provides=Object.create(i)),t[n]=e}}u(kx,"provide");function Sa(n,e,t=!1){const i=Xt||It;if(i||eo){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:eo._context.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&We(e)?e.call(i&&i.proxy):e}}u(Sa,"inject");const u0={},h0=u(()=>Object.create(u0),"createInternalObject"),d0=u(n=>Object.getPrototypeOf(n)===u0,"isInternalObject");function Vx(n,e,t,i=!1){const s={},r=h0();n.propsDefaults=Object.create(null),f0(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:X1(s):n.type.props?n.props=s:n.props=r,n.attrs=r}u(Vx,"initProps");function Hx(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=lt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let d=0;d<h.length;d++){let f=h[d];if(Vl(n.emitsOptions,f))continue;const p=e[f];if(l)if(tt(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const _=ri(f);s[_]=mu(l,a,_,p,n,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{f0(n,e,s,r)&&(c=!0);let h;for(const d in a)(!e||!tt(e,d)&&((h=Ws(d))===d||!tt(e,h)))&&(l?t&&(t[d]!==void 0||t[h]!==void 0)&&(s[d]=mu(l,a,d,void 0,n,!0)):delete s[d]);if(r!==a)for(const d in r)(!e||!tt(e,d))&&(delete r[d],c=!0)}c&&Mi(n.attrs,"set","")}u(Hx,"updateProps");function f0(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(qr(l))continue;const c=e[l];let h;s&&tt(s,h=ri(l))?!r||!r.includes(h)?t[h]=c:(a||(a={}))[h]=c:Vl(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=lt(t),c=a||ft;for(let h=0;h<r.length;h++){const d=r[h];t[d]=mu(s,l,d,c[d],n,!tt(c,d))}}return o}u(f0,"setFullProps");function mu(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=tt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&We(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const h=Lo(s);i=c[t]=l.call(null,e),h()}}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ws(t))&&(i=!0))}return i}u(mu,"resolvePropValue");function p0(n,e,t=!1){const i=e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!We(n)){const h=u(d=>{l=!0;const[f,p]=p0(d,e,!0);At(o,f),p&&a.push(...p)},"extendProps");!t&&e.mixins.length&&e.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!r&&!l)return vt(n)&&i.set(n,fr),fr;if(ze(r))for(let h=0;h<r.length;h++){const d=ri(r[h]);Eg(d)&&(o[d]=ft)}else if(r)for(const h in r){const d=ri(h);if(Eg(d)){const f=r[h],p=o[d]=ze(f)||We(f)?{type:f}:At({},f);if(p){const _=wg(Boolean,p.type),y=wg(String,p.type);p[0]=_>-1,p[1]=y<0||_<y,(_>-1||tt(p,"default"))&&a.push(d)}}}const c=[o,a];return vt(n)&&i.set(n,c),c}u(p0,"normalizePropsOptions");function Eg(n){return n[0]!=="$"&&!qr(n)}u(Eg,"validatePropName");function Tg(n){return n===null?"null":typeof n=="function"?n.name||"":typeof n=="object"&&n.constructor&&n.constructor.name||""}u(Tg,"getType");function Ag(n,e){return Tg(n)===Tg(e)}u(Ag,"isSameType");function wg(n,e){return ze(e)?e.findIndex(t=>Ag(t,n)):We(e)&&Ag(e,n)?0:-1}u(wg,"getTypeIndex");const m0=u(n=>n[0]==="_"||n==="$stable","isInternalKey"),Kd=u(n=>ze(n)?n.map(ei):[ei(n)],"normalizeSlotValue"),Gx=u((n,e,t)=>{if(e._n)return e;const i=gr((...s)=>Kd(e(...s)),t);return i._c=!1,i},"normalizeSlot"),g0=u((n,e,t)=>{const i=n._ctx;for(const s in n){if(m0(s))continue;const r=n[s];if(We(r))e[s]=Gx(s,r,i);else if(r!=null){const o=Kd(r);e[s]=()=>o}}},"normalizeObjectSlots"),_0=u((n,e)=>{const t=Kd(e);n.slots.default=()=>t},"normalizeVNodeSlots"),Wx=u((n,e)=>{const t=n.slots=h0();if(n.vnode.shapeFlag&32){const i=e._;i?(At(t,e),Lv(t,"_",i,!0)):g0(e,t)}else e&&_0(n,e)},"initSlots"),jx=u((n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=ft;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(At(s,e),!t&&a===1&&delete s._):(r=!e.$stable,g0(e,s)),o=e}else e&&(_0(n,e),o={default:1});if(r)for(const a in s)!m0(a)&&o[a]==null&&delete s[a]},"updateSlots");function gu(n,e,t,i,s=!1){if(ze(n)){n.forEach((f,p)=>gu(f,e&&(ze(e)?e[p]:e),t,i,s));return}if(Jr(i)&&!s)return;const r=i.shapeFlag&4?$l(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,h=a.refs===ft?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(wt(c)?(h[c]=null,tt(d,c)&&(d[c]=null)):_n(c)&&(c.value=null)),We(l))qi(l,a,12,[o,h]);else{const f=wt(l),p=_n(l);if(f||p){const _=u(()=>{if(n.f){const y=f?tt(d,l)?d[l]:h[l]:l.value;s?ze(y)&&Od(y,r):ze(y)?y.includes(r)||y.push(r):f?(h[l]=[r],tt(d,l)&&(d[l]=h[l])):(l.value=[r],n.k&&(h[n.k]=l.value))}else f?(h[l]=o,tt(d,l)&&(d[l]=o)):p&&(l.value=o,n.k&&(h[n.k]=o))},"doSet");o?(_.id=-1,fn(_,t)):_()}}}u(gu,"setRef");const fn=px;function Xx(n){return $x(n)}u(Xx,"createRenderer");function $x(n,e){const t=Nv();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:h,parentNode:d,nextSibling:f,setScopeId:p=Dn,insertStaticContent:_}=n,y=u((x,I,V,Z=null,j=null,re=null,te=void 0,S=null,v=!!I.dynamicChildren)=>{if(x===I)return;x&&!Cs(x,I)&&(Z=ye(x),je(x,j,re,!0),x=null),I.patchFlag===-2&&(v=!1,I.dynamicChildren=null);const{type:R,ref:U,shapeFlag:X}=I;switch(R){case jl:g(x,I,V,Z);break;case bn:m(x,I,V,Z);break;case to:x==null&&A(I,V,Z,te);break;case kt:B(x,I,V,Z,j,re,te,S,v);break;default:X&1?O(x,I,V,Z,j,re,te,S,v):X&6?G(x,I,V,Z,j,re,te,S,v):(X&64||X&128)&&R.process(x,I,V,Z,j,re,te,S,v,Ke)}U!=null&&j&&gu(U,x&&x.ref,re,I||x,!I)},"patch"),g=u((x,I,V,Z)=>{if(x==null)i(I.el=a(I.children),V,Z);else{const j=I.el=x.el;I.children!==x.children&&c(j,I.children)}},"processText"),m=u((x,I,V,Z)=>{x==null?i(I.el=l(I.children||""),V,Z):I.el=x.el},"processCommentNode"),A=u((x,I,V,Z)=>{[x.el,x.anchor]=_(x.children,I,V,Z,x.el,x.anchor)},"mountStaticNode"),b=u(({el:x,anchor:I},V,Z)=>{let j;for(;x&&x!==I;)j=f(x),i(x,V,Z),x=j;i(I,V,Z)},"moveStaticNode"),w=u(({el:x,anchor:I})=>{let V;for(;x&&x!==I;)V=f(x),s(x),x=V;s(I)},"removeStaticNode"),O=u((x,I,V,Z,j,re,te,S,v)=>{I.type==="svg"?te="svg":I.type==="math"&&(te="mathml"),x==null?P(I,V,Z,j,re,te,S,v):ie(x,I,j,re,te,S,v)},"processElement"),P=u((x,I,V,Z,j,re,te,S)=>{let v,R;const{props:U,shapeFlag:X,transition:k,dirs:ue}=x;if(v=x.el=o(x.type,re,U&&U.is,U),X&8?h(v,x.children):X&16&&L(x.children,v,null,Z,j,uc(x,re),te,S),ue&&ms(x,null,Z,"created"),C(v,x,x.scopeId,te,Z),U){for(const he in U)he!=="value"&&!qr(he)&&r(v,he,null,U[he],re,x.children,Z,j,_e);"value"in U&&r(v,"value",null,U.value,re),(R=U.onVnodeBeforeMount)&&Jn(R,Z,x)}ue&&ms(x,null,Z,"beforeMount");const oe=Yx(j,k);oe&&k.beforeEnter(v),i(v,I,V),((R=U&&U.onVnodeMounted)||oe||ue)&&fn(()=>{R&&Jn(R,Z,x),oe&&k.enter(v),ue&&ms(x,null,Z,"mounted")},j)},"mountElement"),C=u((x,I,V,Z,j)=>{if(V&&p(x,V),Z)for(let re=0;re<Z.length;re++)p(x,Z[re]);if(j){let re=j.subTree;if(I===re){const te=j.vnode;C(x,te,te.scopeId,te.slotScopeIds,j.parent)}}},"setScopeId"),L=u((x,I,V,Z,j,re,te,S,v=0)=>{for(let R=v;R<x.length;R++){const U=x[R]=S?ki(x[R]):ei(x[R]);y(null,U,I,V,Z,j,re,te,S)}},"mountChildren"),ie=u((x,I,V,Z,j,re,te)=>{const S=I.el=x.el;let{patchFlag:v,dynamicChildren:R,dirs:U}=I;v|=x.patchFlag&16;const X=x.props||ft,k=I.props||ft;let ue;if(V&&gs(V,!1),(ue=k.onVnodeBeforeUpdate)&&Jn(ue,V,I,x),U&&ms(I,x,V,"beforeUpdate"),V&&gs(V,!0),R?M(x.dynamicChildren,R,S,V,Z,uc(I,j),re):te||W(x,I,S,null,V,Z,uc(I,j),re,!1),v>0){if(v&16)T(S,I,X,k,V,Z,j);else if(v&2&&X.class!==k.class&&r(S,"class",null,k.class,j),v&4&&r(S,"style",X.style,k.style,j),v&8){const oe=I.dynamicProps;for(let he=0;he<oe.length;he++){const Pe=oe[he],ae=X[Pe],pe=k[Pe];(pe!==ae||Pe==="value")&&r(S,Pe,ae,pe,j,x.children,V,Z,_e)}}v&1&&x.children!==I.children&&h(S,I.children)}else!te&&R==null&&T(S,I,X,k,V,Z,j);((ue=k.onVnodeUpdated)||U)&&fn(()=>{ue&&Jn(ue,V,I,x),U&&ms(I,x,V,"updated")},Z)},"patchElement"),M=u((x,I,V,Z,j,re,te)=>{for(let S=0;S<I.length;S++){const v=x[S],R=I[S],U=v.el&&(v.type===kt||!Cs(v,R)||v.shapeFlag&70)?d(v.el):V;y(v,R,U,null,Z,j,re,te,!0)}},"patchBlockChildren"),T=u((x,I,V,Z,j,re,te)=>{if(V!==Z){if(V!==ft)for(const S in V)!qr(S)&&!(S in Z)&&r(x,S,V[S],null,te,I.children,j,re,_e);for(const S in Z){if(qr(S))continue;const v=Z[S],R=V[S];v!==R&&S!=="value"&&r(x,S,R,v,te,I.children,j,re,_e)}"value"in Z&&r(x,"value",V.value,Z.value,te)}},"patchProps"),B=u((x,I,V,Z,j,re,te,S,v)=>{const R=I.el=x?x.el:a(""),U=I.anchor=x?x.anchor:a("");let{patchFlag:X,dynamicChildren:k,slotScopeIds:ue}=I;ue&&(S=S?S.concat(ue):ue),x==null?(i(R,V,Z),i(U,V,Z),L(I.children||[],V,U,j,re,te,S,v)):X>0&&X&64&&k&&x.dynamicChildren?(M(x.dynamicChildren,k,V,j,re,te,S),(I.key!=null||j&&I===j.subTree)&&v0(x,I,!0)):W(x,I,V,U,j,re,te,S,v)},"processFragment"),G=u((x,I,V,Z,j,re,te,S,v)=>{I.slotScopeIds=S,x==null?I.shapeFlag&512?j.ctx.activate(I,V,Z,te,v):ee(I,V,Z,j,re,te,v):ce(x,I,v)},"processComponent"),ee=u((x,I,V,Z,j,re,te)=>{const S=x.component=iy(x,Z,j);if(Gl(x)&&(S.ctx.renderer=Ke),sy(S),S.asyncDep){if(j&&j.registerDep(S,K),!x.el){const v=S.subTree=Ne(bn);m(null,v,I,V)}}else K(S,x,I,V,j,re,te)},"mountComponent"),ce=u((x,I,V)=>{const Z=I.component=x.component;if(lx(x,I,V))if(Z.asyncDep&&!Z.asyncResolved){Q(Z,I,V);return}else Z.next=I,nx(Z.update),Z.effect.dirty=!0,Z.update();else I.el=x.el,Z.vnode=I},"updateComponent"),K=u((x,I,V,Z,j,re,te)=>{const S=u(()=>{if(x.isMounted){let{next:U,bu:X,u:k,parent:ue,vnode:oe}=x;{const Oe=x0(x);if(Oe){U&&(U.el=oe.el,Q(x,U,te)),Oe.asyncDep.then(()=>{x.isUnmounted||S()});return}}let he=U,Pe;gs(x,!1),U?(U.el=oe.el,Q(x,U,te)):U=oe,X&&sc(X),(Pe=U.props&&U.props.onVnodeBeforeUpdate)&&Jn(Pe,ue,U,oe),gs(x,!0);const ae=oc(x),pe=x.subTree;x.subTree=ae,y(pe,ae,d(pe.el),ye(pe),x,j,re),U.el=ae.el,he===null&&cx(x,ae.el),k&&fn(k,j),(Pe=U.props&&U.props.onVnodeUpdated)&&fn(()=>Jn(Pe,ue,U,oe),j)}else{let U;const{el:X,props:k}=I,{bm:ue,m:oe,parent:he}=x,Pe=Jr(I);if(gs(x,!1),ue&&sc(ue),!Pe&&(U=k&&k.onVnodeBeforeMount)&&Jn(U,he,I),gs(x,!0),X&&Qe){const ae=u(()=>{x.subTree=oc(x),Qe(X,x.subTree,x,j,null)},"hydrateSubTree");Pe?I.type.__asyncLoader().then(()=>!x.isUnmounted&&ae()):ae()}else{const ae=x.subTree=oc(x);y(null,ae,V,Z,x,j,re),I.el=ae.el}if(oe&&fn(oe,j),!Pe&&(U=k&&k.onVnodeMounted)){const ae=I;fn(()=>Jn(U,he,ae),j)}(I.shapeFlag&256||he&&Jr(he.vnode)&&he.vnode.shapeFlag&256)&&x.a&&fn(x.a,j),x.isMounted=!0,I=V=Z=null}},"componentUpdateFn"),v=x.effect=new fo(S,Dn,()=>Wd(R),x.scope),R=x.update=()=>{v.dirty&&v.run()};R.id=x.uid,gs(x,!0),R()},"setupRenderEffect"),Q=u((x,I,V)=>{I.component=x;const Z=x.vnode.props;x.vnode=I,x.next=null,Hx(x,I.props,Z,V),jx(x,I.children,V),us(),gg(x),hs()},"updateComponentPreRender"),W=u((x,I,V,Z,j,re,te,S,v=!1)=>{const R=x&&x.children,U=x?x.shapeFlag:0,X=I.children,{patchFlag:k,shapeFlag:ue}=I;if(k>0){if(k&128){xe(R,X,V,Z,j,re,te,S,v);return}else if(k&256){ge(R,X,V,Z,j,re,te,S,v);return}}ue&8?(U&16&&_e(R,j,re),X!==R&&h(V,X)):U&16?ue&16?xe(R,X,V,Z,j,re,te,S,v):_e(R,j,re,!0):(U&8&&h(V,""),ue&16&&L(X,V,Z,j,re,te,S,v))},"patchChildren"),ge=u((x,I,V,Z,j,re,te,S,v)=>{x=x||fr,I=I||fr;const R=x.length,U=I.length,X=Math.min(R,U);let k;for(k=0;k<X;k++){const ue=I[k]=v?ki(I[k]):ei(I[k]);y(x[k],ue,V,null,j,re,te,S,v)}R>U?_e(x,j,re,!0,!1,X):L(I,V,Z,j,re,te,S,v,X)},"patchUnkeyedChildren"),xe=u((x,I,V,Z,j,re,te,S,v)=>{let R=0;const U=I.length;let X=x.length-1,k=U-1;for(;R<=X&&R<=k;){const ue=x[R],oe=I[R]=v?ki(I[R]):ei(I[R]);if(Cs(ue,oe))y(ue,oe,V,null,j,re,te,S,v);else break;R++}for(;R<=X&&R<=k;){const ue=x[X],oe=I[k]=v?ki(I[k]):ei(I[k]);if(Cs(ue,oe))y(ue,oe,V,null,j,re,te,S,v);else break;X--,k--}if(R>X){if(R<=k){const ue=k+1,oe=ue<U?I[ue].el:Z;for(;R<=k;)y(null,I[R]=v?ki(I[R]):ei(I[R]),V,oe,j,re,te,S,v),R++}}else if(R>k)for(;R<=X;)je(x[R],j,re,!0),R++;else{const ue=R,oe=R,he=new Map;for(R=oe;R<=k;R++){const De=I[R]=v?ki(I[R]):ei(I[R]);De.key!=null&&he.set(De.key,R)}let Pe,ae=0;const pe=k-oe+1;let Oe=!1,Fe=0;const Me=new Array(pe);for(R=0;R<pe;R++)Me[R]=0;for(R=ue;R<=X;R++){const De=x[R];if(ae>=pe){je(De,j,re,!0);continue}let Ze;if(De.key!=null)Ze=he.get(De.key);else for(Pe=oe;Pe<=k;Pe++)if(Me[Pe-oe]===0&&Cs(De,I[Pe])){Ze=Pe;break}Ze===void 0?je(De,j,re,!0):(Me[Ze-oe]=R+1,Ze>=Fe?Fe=Ze:Oe=!0,y(De,I[Ze],V,null,j,re,te,S,v),ae++)}const qe=Oe?Kx(Me):fr;for(Pe=qe.length-1,R=pe-1;R>=0;R--){const De=oe+R,Ze=I[De],N=De+1<U?I[De+1].el:Z;Me[R]===0?y(null,Ze,V,N,j,re,te,S,v):Oe&&(Pe<0||R!==qe[Pe]?Ae(Ze,V,N,2):Pe--)}}},"patchKeyedChildren"),Ae=u((x,I,V,Z,j=null)=>{const{el:re,type:te,transition:S,children:v,shapeFlag:R}=x;if(R&6){Ae(x.component.subTree,I,V,Z);return}if(R&128){x.suspense.move(I,V,Z);return}if(R&64){te.move(x,I,V,Ke);return}if(te===kt){i(re,I,V);for(let X=0;X<v.length;X++)Ae(v[X],I,V,Z);i(x.anchor,I,V);return}if(te===to){b(x,I,V);return}if(Z!==2&&R&1&&S)if(Z===0)S.beforeEnter(re),i(re,I,V),fn(()=>S.enter(re),j);else{const{leave:X,delayLeave:k,afterLeave:ue}=S,oe=u(()=>i(re,I,V),"remove22"),he=u(()=>{X(re,()=>{oe(),ue&&ue()})},"performLeave");k?k(re,oe,he):he()}else i(re,I,V)},"move"),je=u((x,I,V,Z=!1,j=!1)=>{const{type:re,props:te,ref:S,children:v,dynamicChildren:R,shapeFlag:U,patchFlag:X,dirs:k}=x;if(S!=null&&gu(S,null,V,x,!0),U&256){I.ctx.deactivate(x);return}const ue=U&1&&k,oe=!Jr(x);let he;if(oe&&(he=te&&te.onVnodeBeforeUnmount)&&Jn(he,I,x),U&6)de(x.component,V,Z);else{if(U&128){x.suspense.unmount(V,Z);return}ue&&ms(x,null,I,"beforeUnmount"),U&64?x.type.remove(x,I,V,j,Ke,Z):R&&(re!==kt||X>0&&X&64)?_e(R,I,V,!1,!0):(re===kt&&X&384||!j&&U&16)&&_e(v,I,V),Z&&it(x)}(oe&&(he=te&&te.onVnodeUnmounted)||ue)&&fn(()=>{he&&Jn(he,I,x),ue&&ms(x,null,I,"unmounted")},V)},"unmount"),it=u(x=>{const{type:I,el:V,anchor:Z,transition:j}=x;if(I===kt){ne(V,Z);return}if(I===to){w(x);return}const re=u(()=>{s(V),j&&!j.persisted&&j.afterLeave&&j.afterLeave()},"performRemove");if(x.shapeFlag&1&&j&&!j.persisted){const{leave:te,delayLeave:S}=j,v=u(()=>te(V,re),"performLeave");S?S(x.el,re,v):v()}else re()},"remove2"),ne=u((x,I)=>{let V;for(;x!==I;)V=f(x),s(x),x=V;s(I)},"removeFragment"),de=u((x,I,V)=>{const{bum:Z,scope:j,update:re,subTree:te,um:S}=x;Z&&sc(Z),j.stop(),re&&(re.active=!1,je(te,x,I,V)),S&&fn(S,I),fn(()=>{x.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&x.asyncDep&&!x.asyncResolved&&x.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},"unmountComponent"),_e=u((x,I,V,Z=!1,j=!1,re=0)=>{for(let te=re;te<x.length;te++)je(x[te],I,V,Z,j)},"unmountChildren"),ye=u(x=>x.shapeFlag&6?ye(x.component.subTree):x.shapeFlag&128?x.suspense.next():f(x.anchor||x.el),"getNextHostNode");let Ve=!1;const Ue=u((x,I,V)=>{x==null?I._vnode&&je(I._vnode,null,null,!0):y(I._vnode||null,x,I,null,null,null,V),Ve||(Ve=!0,gg(),Jv(),Ve=!1),I._vnode=x},"render"),Ke={p:y,um:je,m:Ae,r:it,mt:ee,mc:L,pc:W,pbc:M,n:ye,o:n};let rt,Qe;return{render:Ue,hydrate:rt,createApp:zx(Ue,rt)}}u($x,"baseCreateRenderer");function uc({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}u(uc,"resolveChildrenNamespace");function gs({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}u(gs,"toggleRecurse");function Yx(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}u(Yx,"needTransition");function v0(n,e,t=!1){const i=n.children,s=e.children;if(ze(i)&&ze(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ki(s[r]),a.el=o.el),t||v0(o,a)),a.type===jl&&(a.el=o.el)}}u(v0,"traverseStaticChildren");function Kx(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}u(Kx,"getSequence");function x0(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:x0(e)}u(x0,"locateNonHydratedAsyncRoot");const qx=u(n=>n.__isTeleport,"isTeleport"),kt=Symbol.for("v-fgt"),jl=Symbol.for("v-txt"),bn=Symbol.for("v-cmt"),to=Symbol.for("v-stc"),no=[];let Wn=null;function Be(n=!1){no.push(Wn=n?null:[])}u(Be,"openBlock");function Zx(){no.pop(),Wn=no[no.length-1]||null}u(Zx,"closeBlock");let vo=1;function Cg(n){vo+=n}u(Cg,"setBlockTracking");function y0(n){return n.dynamicChildren=vo>0?Wn||fr:null,Zx(),vo>0&&Wn&&Wn.push(n),n}u(y0,"setupBlock");function nt(n,e,t,i,s,r){return y0(q(n,e,t,i,s,r,!0))}u(nt,"createElementBlock");function an(n,e,t,i,s){return y0(Ne(n,e,t,i,s,!0))}u(an,"createBlock");function Ba(n){return n?n.__v_isVNode===!0:!1}u(Ba,"isVNode");function Cs(n,e){return n.type===e.type&&n.key===e.key}u(Cs,"isSameVNodeType");const M0=u(({key:n})=>n??null,"normalizeKey"),ba=u(({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?wt(n)||_n(n)||We(n)?{i:It,r:n,k:e,f:!!t}:n:null),"normalizeRef");function q(n,e=null,t=null,i=0,s=null,r=n===kt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&M0(e),ref:e&&ba(e),scopeId:Hl,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:It};return a?(qd(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=wt(t)?8:16),vo>0&&!o&&Wn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Wn.push(l),l}u(q,"createBaseVNode");const Ne=Jx;function Jx(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===hx)&&(n=bn),Ba(n)){const a=ts(n,e,!0);return t&&qd(a,t),vo>0&&!r&&Wn&&(a.shapeFlag&6?Wn[Wn.indexOf(n)]=a:Wn.push(a)),a.patchFlag|=-2,a}if(cy(n)&&(n=n.__vccOpts),e){e=Qx(e);let{class:a,style:l}=e;a&&!wt(a)&&(e.class=Ft(a)),vt(l)&&($v(l)&&!ze(l)&&(l=At({},l)),e.style=Dt(l))}const o=wt(n)?1:fx(n)?128:qx(n)?64:vt(n)?4:We(n)?2:0;return q(n,e,t,i,s,o,r,!0)}u(Jx,"_createVNode");function Qx(n){return n?$v(n)||d0(n)?At({},n):n:null}u(Qx,"guardReactiveProps");function ts(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?ey(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&M0(c),ref:e&&e.ref?t&&r?ze(r)?r.concat(ba(e)):[r,ba(e)]:ba(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==kt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ts(n.ssContent),ssFallback:n.ssFallback&&ts(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&(h.transition=l.clone(h)),h}u(ts,"cloneVNode");function si(n=" ",e=0){return Ne(jl,null,n,e)}u(si,"createTextVNode");function S0(n,e){const t=Ne(to,null,n);return t.staticCount=e,t}u(S0,"createStaticVNode");function xt(n="",e=!1){return e?(Be(),an(bn,null,n)):Ne(bn,null,n)}u(xt,"createCommentVNode");function ei(n){return n==null||typeof n=="boolean"?Ne(bn):ze(n)?Ne(kt,null,n.slice()):typeof n=="object"?ki(n):Ne(jl,null,String(n))}u(ei,"normalizeVNode");function ki(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ts(n)}u(ki,"cloneIfMounted");function qd(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ze(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),qd(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!d0(e)?e._ctx=It:s===3&&It&&(It.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else We(e)?(e={default:e,_ctx:It},t=32):(e=String(e),i&64?(t=16,e=[si(e)]):t=8);n.children=e,n.shapeFlag|=t}u(qd,"normalizeChildren");function ey(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Ft([e.class,i.class]));else if(s==="style")e.style=Dt([e.style,i.style]);else if(Nl(s)){const r=e[s],o=i[s];o&&r!==o&&!(ze(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}u(ey,"mergeProps");function Jn(n,e,t,i=null){Ln(n,e,7,[t,i])}u(Jn,"invokeVNodeHook");const ty=c0();let ny=0;function iy(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||ty,r={uid:ny++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new tu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:p0(i,s),emitsOptions:e0(i,s),emit:null,emitted:null,propsDefaults:ft,inheritAttrs:i.inheritAttrs,ctx:ft,data:ft,props:ft,attrs:ft,slots:ft,refs:ft,setupState:ft,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=rx.bind(null,r),n.ce&&n.ce(r),r}u(iy,"createComponentInstance");let Xt=null;const Zd=u(()=>Xt||It,"getCurrentInstance");let za,_u;{const n=Nv(),e=u((t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}},"registerGlobalSetter");za=e("__VUE_INSTANCE_SETTERS__",t=>Xt=t),_u=e("__VUE_SSR_SETTERS__",t=>Xl=t)}const Lo=u(n=>{const e=Xt;return za(n),n.scope.on(),()=>{n.scope.off(),za(e)}},"setCurrentInstance"),Rg=u(()=>{Xt&&Xt.scope.off(),za(null)},"unsetCurrentInstance");function b0(n){return n.vnode.shapeFlag&4}u(b0,"isStatefulComponent");let Xl=!1;function sy(n,e=!1){e&&_u(e);const{props:t,children:i}=n.vnode,s=b0(n);Vx(n,t,s,e),Wx(n,i);const r=s?ry(n,e):void 0;return e&&_u(!1),r}u(sy,"setupComponent");function ry(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Ix);const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?ay(n):null,r=Lo(n);us();const o=qi(i,n,0,[n.props,s]);if(hs(),r(),Pv(o)){if(o.then(Rg,Rg),e)return o.then(a=>{Pg(n,a,e)}).catch(a=>{kl(a,n,0)});n.asyncDep=o}else Pg(n,o,e)}else E0(n,e)}u(ry,"setupStatefulComponent");function Pg(n,e,t){We(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:vt(e)&&(n.setupState=Kv(e)),E0(n,t)}u(Pg,"handleSetupResult");let Dg;function E0(n,e,t){const i=n.type;if(!n.render){if(!e&&Dg&&!i.render){const s=i.template||Yd(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=At(At({isCustomElement:r,delimiters:a},o),l);i.render=Dg(s,c)}}n.render=i.render||Dn}{const s=Lo(n);us();try{Lx(n)}finally{hs(),s()}}}u(E0,"finishComponentSetup");const oy={get(n,e){return gn(n,"get",""),n[e]}};function ay(n){const e=u(t=>{n.exposed=t||{}},"expose");return{attrs:new Proxy(n.attrs,oy),slots:n.slots,emit:n.emit,expose:e}}u(ay,"createSetupContext");function $l(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Kv($1(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Qr)return Qr[t](n)},has(e,t){return t in e||t in Qr}}))}u($l,"getExposeProxy");function ly(n,e=!0){return We(n)?n.displayName||n.name:n.name||e&&n.__name}u(ly,"getComponentName");function cy(n){return We(n)&&"__vccOpts"in n}u(cy,"isClassComponent");const uy=u((n,e)=>Y1(n,e,Xl),"computed");function T0(n,e,t){const i=arguments.length;return i===2?vt(e)&&!ze(e)?Ba(e)?Ne(n,null,[e]):Ne(n,e):Ne(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ba(t)&&(t=[t]),Ne(n,e,t))}u(T0,"h");const hy="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const dy="http://www.w3.org/2000/svg",fy="http://www.w3.org/1998/Math/MathML",Vi=typeof document<"u"?document:null,Ig=Vi&&Vi.createElement("template"),py={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Vi.createElementNS(dy,n):e==="mathml"?Vi.createElementNS(fy,n):Vi.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Vi.createTextNode(n),createComment:n=>Vi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Vi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Ig.innerHTML=i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n;const a=Ig.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Ci="transition",Lr="animation",xo=Symbol("_vtc"),ka=u((n,{slots:e})=>T0(Mx,my(n),e),"Transition");ka.displayName="Transition";const A0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ka.props=At({},n0,A0);const _s=u((n,e=[])=>{ze(n)?n.forEach(t=>t(...e)):n&&n(...e)},"callHook"),Lg=u(n=>n?ze(n)?n.some(e=>e.length>1):n.length>1:!1,"hasExplicitCallback");function my(n){const e={};for(const B in n)B in A0||(e[B]=n[B]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:h=a,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,_=gy(s),y=_&&_[0],g=_&&_[1],{onBeforeEnter:m,onEnter:A,onEnterCancelled:b,onLeave:w,onLeaveCancelled:O,onBeforeAppear:P=m,onAppear:C=A,onAppearCancelled:L=b}=e,ie=u((B,G,ee)=>{vs(B,G?h:a),vs(B,G?c:o),ee&&ee()},"finishEnter"),M=u((B,G)=>{B._isLeaving=!1,vs(B,d),vs(B,p),vs(B,f),G&&G()},"finishLeave"),T=u(B=>(G,ee)=>{const ce=B?C:A,K=u(()=>ie(G,B,ee),"resolve");_s(ce,[G,K]),Ng(()=>{vs(G,B?l:r),Ri(G,B?h:a),Lg(ce)||Og(G,i,y,K)})},"makeEnterHook");return At(e,{onBeforeEnter(B){_s(m,[B]),Ri(B,r),Ri(B,o)},onBeforeAppear(B){_s(P,[B]),Ri(B,l),Ri(B,c)},onEnter:T(!1),onAppear:T(!0),onLeave(B,G){B._isLeaving=!0;const ee=u(()=>M(B,G),"resolve");Ri(B,d),Ri(B,f),xy(),Ng(()=>{B._isLeaving&&(vs(B,d),Ri(B,p),Lg(w)||Og(B,i,g,ee))}),_s(w,[B,ee])},onEnterCancelled(B){ie(B,!1),_s(b,[B])},onAppearCancelled(B){ie(B,!0),_s(L,[B])},onLeaveCancelled(B){M(B),_s(O,[B])}})}u(my,"resolveTransitionProps");function gy(n){if(n==null)return null;if(vt(n))return[hc(n.enter),hc(n.leave)];{const e=hc(n);return[e,e]}}u(gy,"normalizeDuration");function hc(n){return x1(n)}u(hc,"NumberOf");function Ri(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[xo]||(n[xo]=new Set)).add(e)}u(Ri,"addTransitionClass");function vs(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[xo];t&&(t.delete(e),t.size||(n[xo]=void 0))}u(vs,"removeTransitionClass");function Ng(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}u(Ng,"nextFrame");let _y=0;function Og(n,e,t,i){const s=n._endId=++_y,r=u(()=>{s===n._endId&&i()},"resolveIfNotStale");if(t)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=vy(n,e);if(!o)return i();const c=o+"end";let h=0;const d=u(()=>{n.removeEventListener(c,f),r()},"end"),f=u(p=>{p.target===n&&++h>=l&&d()},"onEnd");setTimeout(()=>{h<l&&d()},a+1),n.addEventListener(c,f)}u(Og,"whenTransitionEnds");function vy(n,e){const t=window.getComputedStyle(n),i=u(_=>(t[_]||"").split(", "),"getStyleProperties"),s=i(`${Ci}Delay`),r=i(`${Ci}Duration`),o=Ug(s,r),a=i(`${Lr}Delay`),l=i(`${Lr}Duration`),c=Ug(a,l);let h=null,d=0,f=0;e===Ci?o>0&&(h=Ci,d=o,f=r.length):e===Lr?c>0&&(h=Lr,d=c,f=l.length):(d=Math.max(o,c),h=d>0?o>c?Ci:Lr:null,f=h?h===Ci?r.length:l.length:0);const p=h===Ci&&/\b(transform|all)(,|$)/.test(i(`${Ci}Property`).toString());return{type:h,timeout:d,propCount:f,hasTransform:p}}u(vy,"getTransitionInfo");function Ug(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Fg(t)+Fg(n[i])))}u(Ug,"getTimeout");function Fg(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}u(Fg,"toMs");function xy(){return document.body.offsetHeight}u(xy,"forceReflow");function yy(n,e,t){const i=n[xo];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}u(yy,"patchClass");const Va=Symbol("_vod"),w0=Symbol("_vsh"),Nr={beforeMount(n,{value:e},{transition:t}){n[Va]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Or(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Or(n,!0),i.enter(n)):i.leave(n,()=>{Or(n,!1)}):Or(n,e))},beforeUnmount(n,{value:e}){Or(n,e)}};function Or(n,e){n.style.display=e?n[Va]:"none",n[w0]=!e}u(Or,"setDisplay");const C0=Symbol("");function No(n){const e=Zd();if(!e)return;const t=e.ut=(s=n(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>xu(r,s))},i=u(()=>{const s=n(e.proxy);vu(e.subTree,s),t(s)},"setVars");Xd(()=>{_x(i);const s=new MutationObserver(i);s.observe(e.subTree.el.parentNode,{childList:!0}),$d(()=>s.disconnect())})}u(No,"useCssVars");function vu(n,e){if(n.shapeFlag&128){const t=n.suspense;n=t.activeBranch,t.pendingBranch&&!t.isHydrating&&t.effects.push(()=>{vu(t.activeBranch,e)})}for(;n.component;)n=n.component.subTree;if(n.shapeFlag&1&&n.el)xu(n.el,e);else if(n.type===kt)n.children.forEach(t=>vu(t,e));else if(n.type===to){let{el:t,anchor:i}=n;for(;t&&(xu(t,e),t!==i);)t=t.nextSibling}}u(vu,"setVarsOnVNode");function xu(n,e){if(n.nodeType===1){const t=n.style;let i="";for(const s in e)t.setProperty(`--${s}`,e[s]),i+=`--${s}: ${e[s]};`;t[C0]=i}}u(xu,"setVarsOnNode");const My=/(^|;)\s*display\s*:/;function Sy(n,e,t){const i=n.style,s=wt(t);let r=!1;if(t&&!s){if(e)if(wt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Ea(i,a,"")}else for(const o in e)t[o]==null&&Ea(i,o,"");for(const o in t)o==="display"&&(r=!0),Ea(i,o,t[o])}else if(s){if(e!==t){const o=i[C0];o&&(t+=";"+o),i.cssText=t,r=My.test(t)}}else e&&n.removeAttribute("style");Va in n&&(n[Va]=r?i.display:"",n[w0]&&(i.display="none"))}u(Sy,"patchStyle");const Bg=/\s*!important$/;function Ea(n,e,t){if(ze(t))t.forEach(i=>Ea(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=by(n,e);Bg.test(t)?n.setProperty(Ws(i),t.replace(Bg,""),"important"):n[i]=t}}u(Ea,"setStyle");const zg=["Webkit","Moz","ms"],dc={};function by(n,e){const t=dc[e];if(t)return t;let i=ri(e);if(i!=="filter"&&i in n)return dc[e]=i;i=Fl(i);for(let s=0;s<zg.length;s++){const r=zg[s]+i;if(r in n)return dc[e]=r}return e}u(by,"autoPrefix");const kg="http://www.w3.org/1999/xlink";function Ey(n,e,t,i,s){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(kg,e.slice(6,e.length)):n.setAttributeNS(kg,e,t);else{const r=T1(e);t==null||r&&!Ov(t)?n.removeAttribute(e):n.setAttribute(e,r?"":t)}}u(Ey,"patchAttr");function Ty(n,e,t,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?n.getAttribute("value")||"":n.value,h=t??"";(c!==h||!("_value"in n))&&(n.value=h),t==null&&n.removeAttribute(e),n._value=t;return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=Ov(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}u(Ty,"patchDOMProp");function Ay(n,e,t,i){n.addEventListener(e,t,i)}u(Ay,"addEventListener");function wy(n,e,t,i){n.removeEventListener(e,t,i)}u(wy,"removeEventListener");const Vg=Symbol("_vei");function Cy(n,e,t,i,s=null){const r=n[Vg]||(n[Vg]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Ry(e);if(i){const c=r[e]=Iy(i,s);Ay(n,a,c,l)}else o&&(wy(n,a,o,l),r[e]=void 0)}}u(Cy,"patchEvent");const Hg=/(?:Once|Passive|Capture)$/;function Ry(n){let e;if(Hg.test(n)){e={};let i;for(;i=n.match(Hg);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ws(n.slice(2)),e]}u(Ry,"parseName");let fc=0;const Py=Promise.resolve(),Dy=u(()=>fc||(Py.then(()=>fc=0),fc=Date.now()),"getNow");function Iy(n,e){const t=u(i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Ln(Ly(i,t.value),e,5,[i])},"invoker");return t.value=n,t.attached=Dy(),t}u(Iy,"createInvoker");function Ly(n,e){if(ze(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}u(Ly,"patchStopImmediatePropagation");const Gg=u(n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,"isNativeOn"),Ny=u((n,e,t,i,s,r,o,a,l)=>{const c=s==="svg";e==="class"?yy(n,i,c):e==="style"?Sy(n,t,i):Nl(e)?Nd(e)||Cy(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Oy(n,e,i,c))?Ty(n,e,i,r,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Ey(n,e,i,c))},"patchProp");function Oy(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Gg(e)&&We(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Gg(e)&&wt(t)?!1:e in n}u(Oy,"shouldSetAsProp");function R0(n="$style"){{const e=Zd();if(!e)return ft;const t=e.type.__cssModules;if(!t)return ft;const i=t[n];return i||ft}}u(R0,"useCssModule");const Uy=["ctrl","shift","alt","meta"],Fy={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Uy.some(t=>n[`${t}Key`]&&!e.includes(t))},Ct=u((n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=Fy[e[o]];if(a&&a(s,e))return}return n(s,...r)})},"withModifiers"),By={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Qn=u((n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=s=>{if(!("key"in s))return;const r=Ws(s.key);if(e.some(o=>o===r||By[o]===r))return n(s)})},"withKeys"),zy=At({patchProp:Ny},py);let Wg;function ky(){return Wg||(Wg=Xx(zy))}u(ky,"ensureRenderer");const Vy=u((...n)=>{const e=ky().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Gy(i);if(!s)return;const r=e._component;!We(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,Hy(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},"createApp");function Hy(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}u(Hy,"resolveRootNamespace");function Gy(n){return wt(n)?document.querySelector(n):n}u(Gy,"normalizeContainer");/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jd="169",_r={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},lr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wy=0,jg=1,jy=2,P0=1,Xy=2,gi=3,oi=0,mn=1,cn=2,zt=0,vr=1,yu=2,Xg=3,$g=4,Mu=5,vi=100,$y=101,Yy=102,Ky=103,qy=104,Su=200,Zy=201,Jy=202,Qy=203,bu=204,Eu=205,D0=206,eM=207,I0=208,tM=209,nM=210,iM=211,sM=212,rM=213,oM=214,Tu=0,Au=1,wu=2,br=3,Cu=4,Ru=5,Pu=6,Du=7,L0=0,aM=1,lM=2,Zi=0,cM=1,uM=2,hM=3,dM=4,fM=5,pM=6,mM=7,Yg="attached",gM="detached",N0=300,Er=301,Tr=302,Iu=303,Lu=304,Yl=306,Ar=1e3,Xi=1001,Ha=1002,$t=1003,O0=1004,$r=1005,Sn=1006,Ta=1007,xi=1008,Si=1009,U0=1010,F0=1011,yo=1012,Qd=1013,Fs=1014,jn=1015,pn=1016,ef=1017,tf=1018,Bs=1020,B0=35902,z0=1021,k0=1022,In=1023,V0=1024,H0=1025,xr=1026,zs=1027,nf=1028,sf=1029,G0=1030,rf=1031,of=1033,Aa=33776,wa=33777,Ca=33778,Ra=33779,Nu=35840,Ou=35841,Uu=35842,Fu=35843,Bu=36196,zu=37492,ku=37496,Vu=37808,Hu=37809,Gu=37810,Wu=37811,ju=37812,Xu=37813,$u=37814,Yu=37815,Ku=37816,qu=37817,Zu=37818,Ju=37819,Qu=37820,eh=37821,Pa=36492,th=36494,nh=36495,W0=36283,ih=36284,sh=36285,rh=36286,Mo=2300,So=2301,pc=2302,Kg=2400,qg=2401,Zg=2402,_M=2500,vM=0,j0=1,oh=2,xM=3200,X0=3201,af=0,yM=1,ji="",ln="srgb",Yt="srgb-linear",lf="display-p3",Kl="display-p3-linear",Ga="linear",gt="srgb",Wa="rec709",ja="p3",Xs=7680,Jg=519,MM=512,SM=513,bM=514,$0=515,EM=516,TM=517,AM=518,wM=519,ah=35044,Qg="300 es",yi=2e3,Xa=2001,Cf=class Cf{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}};u(Cf,"EventDispatcher");let bi=Cf;const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let e_=1234567;const io=Math.PI/180,wr=180/Math.PI;function Xn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}u(Xn,"generateUUID");function Wt(n,e,t){return Math.max(e,Math.min(t,n))}u(Wt,"clamp");function cf(n,e){return(n%e+e)%e}u(cf,"euclideanModulo");function CM(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}u(CM,"mapLinear");function RM(n,e,t){return n!==e?(t-n)/(e-n):0}u(RM,"inverseLerp");function so(n,e,t){return(1-t)*n+t*e}u(so,"lerp");function PM(n,e,t,i){return so(n,e,1-Math.exp(-t*i))}u(PM,"damp");function DM(n,e=1){return e-Math.abs(cf(n,e*2)-e)}u(DM,"pingpong");function IM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}u(IM,"smoothstep");function LM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}u(LM,"smootherstep");function NM(n,e){return n+Math.floor(Math.random()*(e-n+1))}u(NM,"randInt");function OM(n,e){return n+Math.random()*(e-n)}u(OM,"randFloat");function UM(n){return n*(.5-Math.random())}u(UM,"randFloatSpread");function FM(n){n!==void 0&&(e_=n);let e=e_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}u(FM,"seededRandom");function BM(n){return n*io}u(BM,"degToRad");function zM(n){return n*wr}u(zM,"radToDeg");function kM(n){return(n&n-1)===0&&n!==0}u(kM,"isPowerOfTwo");function VM(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}u(VM,"ceilPowerOfTwo");function HM(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}u(HM,"floorPowerOfTwo");function GM(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),d=r((e-i)/2),f=o((e-i)/2),p=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*_,l*p,a*c);break;case"YXY":n.set(l*p,a*h,l*_,a*c);break;case"ZYZ":n.set(l*_,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}u(GM,"setQuaternionFromProperEuler");function Gn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}u(Gn,"denormalize");function dt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}u(dt,"normalize");const Hi={DEG2RAD:io,RAD2DEG:wr,generateUUID:Xn,clamp:Wt,euclideanModulo:cf,mapLinear:CM,inverseLerp:RM,lerp:so,damp:PM,pingpong:DM,smoothstep:IM,smootherstep:LM,randInt:NM,randFloat:OM,randFloatSpread:UM,seededRandom:FM,degToRad:BM,radToDeg:zM,isPowerOfTwo:kM,ceilPowerOfTwo:VM,floorPowerOfTwo:HM,setQuaternionFromProperEuler:GM,normalize:dt,denormalize:Gn},Sl=class Sl{constructor(e=0,t=0){Sl.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};u(Sl,"Vector2");let ve=Sl;const bl=class bl{constructor(e,t,i,s,r,o,a,l,c){bl.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],p=i[5],_=i[8],y=s[0],g=s[3],m=s[6],A=s[1],b=s[4],w=s[7],O=s[2],P=s[5],C=s[8];return r[0]=o*y+a*A+l*O,r[3]=o*g+a*b+l*P,r[6]=o*m+a*w+l*C,r[1]=c*y+h*A+d*O,r[4]=c*g+h*b+d*P,r[7]=c*m+h*w+d*C,r[2]=f*y+p*A+_*O,r[5]=f*g+p*b+_*P,r[8]=f*m+p*w+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*r,p=c*r-o*l,_=t*d+i*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=d*y,e[1]=(s*c-h*i)*y,e[2]=(a*i-s*o)*y,e[3]=f*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-a*t)*y,e[6]=p*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(mc.makeScale(e,t)),this}rotate(e){return this.premultiply(mc.makeRotation(-e)),this}translate(e,t){return this.premultiply(mc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};u(bl,"Matrix3");let Ye=bl;const mc=new Ye;function Y0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}u(Y0,"arrayNeedsUint32");function bo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}u(bo,"createElementNS");function WM(){const n=bo("canvas");return n.style.display="block",n}u(WM,"createCanvasElement");const t_={};function Da(n){n in t_||(t_[n]=!0,console.warn(n))}u(Da,"warnOnce");function jM(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}u(r,"probe"),setTimeout(r,t)})}u(jM,"probeAsync");function XM(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}u(XM,"toNormalizedProjectionMatrix");function $M(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}u($M,"toReversedProjectionMatrix");const n_=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),i_=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ur={[Yt]:{transfer:Ga,primaries:Wa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[ln]:{transfer:gt,primaries:Wa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Kl]:{transfer:Ga,primaries:ja,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(i_),fromReference:n=>n.applyMatrix3(n_)},[lf]:{transfer:gt,primaries:ja,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(i_),fromReference:n=>n.applyMatrix3(n_).convertLinearToSRGB()}},YM=new Set([Yt,Kl]),st={enabled:!0,_workingColorSpace:Yt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!YM.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ur[e].toReference,s=Ur[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ur[n].primaries},getTransfer:function(n){return n===ji?Ga:Ur[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Ur[e].luminanceCoefficients)}};function yr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}u(yr,"SRGBToLinear");function gc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}u(gc,"LinearToSRGB");let $s;const Rf=class Rf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$s===void 0&&($s=bo("canvas")),$s.width=e.width,$s.height=e.height;const i=$s.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=$s}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=yr(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(yr(t[i]/255)*255):t[i]=yr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};u(Rf,"ImageUtils");let lh=Rf,KM=0;const Pf=class Pf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=Xn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(_c(s[o].image)):r.push(_c(s[o]))}else r=_c(s);i.url=r}return t||(e.images[this.uuid]=i),i}};u(Pf,"Source");let $a=Pf;function _c(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?lh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}u(_c,"serializeImage");let qM=0;const hr=class hr extends bi{constructor(e=hr.DEFAULT_IMAGE,t=hr.DEFAULT_MAPPING,i=Xi,s=Xi,r=Sn,o=xi,a=In,l=Si,c=hr.DEFAULT_ANISOTROPY,h=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=Xn(),this.name="",this.source=new $a(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==N0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ar:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case Ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ar:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case Ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};u(hr,"Texture");let Qt=hr;Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=N0;Qt.DEFAULT_ANISOTROPY=1;const El=class El{constructor(e=0,t=0,i=0,s=1){El.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],_=l[9],y=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-y)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+y)<.1&&Math.abs(_+g)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,w=(p+1)/2,O=(m+1)/2,P=(h+f)/4,C=(d+y)/4,L=(_+g)/4;return b>w&&b>O?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=P/i,r=C/i):w>O?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=P/s,r=L/s):O<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),i=C/r,s=L/r),this.set(i,s,r,t),this}let A=Math.sqrt((g-_)*(g-_)+(d-y)*(d-y)+(f-h)*(f-h));return Math.abs(A)<.001&&(A=1),this.x=(g-_)/A,this.y=(d-y)/A,this.z=(f-h)/A,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};u(El,"Vector4");let at=El;const Df=class Df extends bi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Qt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $a(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}};u(Df,"RenderTarget");let ch=Df;const If=class If extends ch{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}};u(If,"WebGLRenderTarget");let Pt=If;const Lf=class Lf extends Qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};u(Lf,"DataArrayTexture");let Ya=Lf;const Nf=class Nf extends Qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};u(Nf,"Data3DTexture");let uh=Nf;const Of=class Of{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3];const f=r[o+0],p=r[o+1],_=r[o+2],y=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=y;return}if(d!==y||l!==f||c!==p||h!==_){let g=1-a;const m=l*f+c*p+h*_+d*y,A=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){const O=Math.sqrt(b),P=Math.atan2(O,m*A);g=Math.sin(g*P)/O,a=Math.sin(a*P)/O}const w=a*A;if(l=l*g+f*w,c=c*g+p*w,h=h*g+_*w,d=d*g+y*w,g===1-a){const O=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=O,c*=O,h*=O,d*=O}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],f=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+h*d+l*p-c*f,e[t+1]=l*_+h*f+c*d-a*p,e[t+2]=c*_+h*p+a*f-l*d,e[t+3]=h*_-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),f=l(i/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*p*_,this._y=c*p*d-f*h*_,this._z=c*h*_+f*p*d,this._w=c*h*d-f*p*_;break;case"YXZ":this._x=f*h*d+c*p*_,this._y=c*p*d-f*h*_,this._z=c*h*_-f*p*d,this._w=c*h*d+f*p*_;break;case"ZXY":this._x=f*h*d-c*p*_,this._y=c*p*d+f*h*_,this._z=c*h*_+f*p*d,this._w=c*h*d-f*p*_;break;case"ZYX":this._x=f*h*d-c*p*_,this._y=c*p*d+f*h*_,this._z=c*h*_-f*p*d,this._w=c*h*d+f*p*_;break;case"YZX":this._x=f*h*d+c*p*_,this._y=c*p*d+f*h*_,this._z=c*h*_-f*p*d,this._w=c*h*d-f*p*_;break;case"XZY":this._x=f*h*d-c*p*_,this._y=c*p*d-f*h*_,this._z=c*h*_+f*p*d,this._w=c*h*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};u(Of,"Quaternion");let Nn=Of;const Tl=class Tl{constructor(e=0,t=0,i=0){Tl.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(s_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(s_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vc.copy(this).projectOnVector(e),this.sub(vc)}reflect(e){return this.sub(vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};u(Tl,"Vector3");let D=Tl;const vc=new D,s_=new Nn,Uf=class Uf{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zn):zn.fromBufferAttribute(r,o),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jo.copy(i.boundingBox)),jo.applyMatrix4(e.matrixWorld),this.union(jo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),Xo.subVectors(this.max,Fr),Ys.subVectors(e.a,Fr),Ks.subVectors(e.b,Fr),qs.subVectors(e.c,Fr),Pi.subVectors(Ks,Ys),Di.subVectors(qs,Ks),xs.subVectors(Ys,qs);let t=[0,-Pi.z,Pi.y,0,-Di.z,Di.y,0,-xs.z,xs.y,Pi.z,0,-Pi.x,Di.z,0,-Di.x,xs.z,0,-xs.x,-Pi.y,Pi.x,0,-Di.y,Di.x,0,-xs.y,xs.x,0];return!xc(t,Ys,Ks,qs,Xo)||(t=[1,0,0,0,1,0,0,0,1],!xc(t,Ys,Ks,qs,Xo))?!1:($o.crossVectors(Pi,Di),t=[$o.x,$o.y,$o.z],xc(t,Ys,Ks,qs,Xo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};u(Uf,"Box3");let Yn=Uf;const ci=[new D,new D,new D,new D,new D,new D,new D,new D],zn=new D,jo=new Yn,Ys=new D,Ks=new D,qs=new D,Pi=new D,Di=new D,xs=new D,Fr=new D,Xo=new D,$o=new D,ys=new D;function xc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ys.fromArray(n,r);const a=s.x*Math.abs(ys.x)+s.y*Math.abs(ys.y)+s.z*Math.abs(ys.z),l=e.dot(ys),c=t.dot(ys),h=i.dot(ys);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}u(xc,"satForAxes");const ZM=new Yn,Br=new D,yc=new D,Ff=class Ff{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ZM.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Br.subVectors(e,this.center);const t=Br.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Br,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Br.copy(e.center).add(yc)),this.expandByPoint(Br.copy(e.center).sub(yc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};u(Ff,"Sphere");let On=Ff;const ui=new D,Mc=new D,Yo=new D,Ii=new D,Sc=new D,Ko=new D,bc=new D,Bf=class Bf{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Mc.copy(e).add(t).multiplyScalar(.5),Yo.copy(t).sub(e).normalize(),Ii.copy(this.origin).sub(Mc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Yo),a=Ii.dot(this.direction),l=-Ii.dot(Yo),c=Ii.lengthSq(),h=Math.abs(1-o*o);let d,f,p,_;if(h>0)if(d=o*l-a,f=o*a-l,_=r*h,d>=0)if(f>=-_)if(f<=_){const y=1/h;d*=y,f*=y,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Mc).addScaledVector(Yo,f),p}intersectSphere(e,t){ui.subVectors(e.center,this.origin);const i=ui.dot(this.direction),s=ui.dot(ui)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,i,s,r){Sc.subVectors(t,e),Ko.subVectors(i,e),bc.crossVectors(Sc,Ko);let o=this.direction.dot(bc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,e);const l=a*this.direction.dot(Ko.crossVectors(Ii,Ko));if(l<0)return null;const c=a*this.direction.dot(Sc.cross(Ii));if(c<0||l+c>o)return null;const h=-a*Ii.dot(bc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};u(Bf,"Ray");let ns=Bf;const lo=class lo{constructor(e,t,i,s,r,o,a,l,c,h,d,f,p,_,y,g){lo.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,d,f,p,_,y,g)}set(e,t,i,s,r,o,a,l,c,h,d,f,p,_,y,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=f,m[3]=p,m[7]=_,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lo().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Zs.setFromMatrixColumn(e,0).length(),r=1/Zs.setFromMatrixColumn(e,1).length(),o=1/Zs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*h,p=o*d,_=a*h,y=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+_*c,t[5]=f-y*c,t[9]=-a*l,t[2]=y-f*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,p=l*d,_=c*h,y=c*d;t[0]=f+y*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-_,t[6]=y+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,p=l*d,_=c*h,y=c*d;t[0]=f-y*a,t[4]=-o*d,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*h,t[9]=y-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,p=o*d,_=a*h,y=a*d;t[0]=l*h,t[4]=_*c-p,t[8]=f*c+y,t[1]=l*d,t[5]=y*c+f,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,_=a*l,y=a*c;t[0]=l*h,t[4]=y-f*d,t[8]=_*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*d+_,t[10]=f-y*d}else if(e.order==="XZY"){const f=o*l,p=o*c,_=a*l,y=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+y,t[5]=o*h,t[9]=p*d-_,t[2]=_*d-p,t[6]=a*h,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(JM,e,QM)}lookAt(e,t,i){const s=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Li.crossVectors(i,yn),Li.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Li.crossVectors(i,yn)),Li.normalize(),qo.crossVectors(yn,Li),s[0]=Li.x,s[4]=qo.x,s[8]=yn.x,s[1]=Li.y,s[5]=qo.y,s[9]=yn.y,s[2]=Li.z,s[6]=qo.z,s[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],p=i[13],_=i[2],y=i[6],g=i[10],m=i[14],A=i[3],b=i[7],w=i[11],O=i[15],P=s[0],C=s[4],L=s[8],ie=s[12],M=s[1],T=s[5],B=s[9],G=s[13],ee=s[2],ce=s[6],K=s[10],Q=s[14],W=s[3],ge=s[7],xe=s[11],Ae=s[15];return r[0]=o*P+a*M+l*ee+c*W,r[4]=o*C+a*T+l*ce+c*ge,r[8]=o*L+a*B+l*K+c*xe,r[12]=o*ie+a*G+l*Q+c*Ae,r[1]=h*P+d*M+f*ee+p*W,r[5]=h*C+d*T+f*ce+p*ge,r[9]=h*L+d*B+f*K+p*xe,r[13]=h*ie+d*G+f*Q+p*Ae,r[2]=_*P+y*M+g*ee+m*W,r[6]=_*C+y*T+g*ce+m*ge,r[10]=_*L+y*B+g*K+m*xe,r[14]=_*ie+y*G+g*Q+m*Ae,r[3]=A*P+b*M+w*ee+O*W,r[7]=A*C+b*T+w*ce+O*ge,r[11]=A*L+b*B+w*K+O*xe,r[15]=A*ie+b*G+w*Q+O*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],p=e[14],_=e[3],y=e[7],g=e[11],m=e[15];return _*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*p-i*l*p)+y*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+g*(+t*c*d-t*a*p-r*o*d+i*o*p+r*a*h-i*c*h)+m*(-s*a*h-t*l*d+t*a*f+s*o*d-i*o*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],p=e[11],_=e[12],y=e[13],g=e[14],m=e[15],A=d*g*c-y*f*c+y*l*p-a*g*p-d*l*m+a*f*m,b=_*f*c-h*g*c-_*l*p+o*g*p+h*l*m-o*f*m,w=h*y*c-_*d*c+_*a*p-o*y*p-h*a*m+o*d*m,O=_*d*l-h*y*l-_*a*f+o*y*f+h*a*g-o*d*g,P=t*A+i*b+s*w+r*O;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return e[0]=A*C,e[1]=(y*f*r-d*g*r-y*s*p+i*g*p+d*s*m-i*f*m)*C,e[2]=(a*g*r-y*l*r+y*s*c-i*g*c-a*s*m+i*l*m)*C,e[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*p-i*l*p)*C,e[4]=b*C,e[5]=(h*g*r-_*f*r+_*s*p-t*g*p-h*s*m+t*f*m)*C,e[6]=(_*l*r-o*g*r-_*s*c+t*g*c+o*s*m-t*l*m)*C,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*p+t*l*p)*C,e[8]=w*C,e[9]=(_*d*r-h*y*r-_*i*p+t*y*p+h*i*m-t*d*m)*C,e[10]=(o*y*r-_*a*r+_*i*c-t*y*c-o*i*m+t*a*m)*C,e[11]=(h*a*r-o*d*r-h*i*c+t*d*c+o*i*p-t*a*p)*C,e[12]=O*C,e[13]=(h*y*s-_*d*s+_*i*f-t*y*f-h*i*g+t*d*g)*C,e[14]=(_*a*s-o*y*s-_*i*l+t*y*l+o*i*g-t*a*g)*C,e[15]=(o*d*s-h*a*s+h*i*l-t*d*l-o*i*f+t*a*f)*C,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,f=r*c,p=r*h,_=r*d,y=o*h,g=o*d,m=a*d,A=l*c,b=l*h,w=l*d,O=i.x,P=i.y,C=i.z;return s[0]=(1-(y+m))*O,s[1]=(p+w)*O,s[2]=(_-b)*O,s[3]=0,s[4]=(p-w)*P,s[5]=(1-(f+m))*P,s[6]=(g+A)*P,s[7]=0,s[8]=(_+b)*C,s[9]=(g-A)*C,s[10]=(1-(f+y))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Zs.set(s[0],s[1],s[2]).length();const o=Zs.set(s[4],s[5],s[6]).length(),a=Zs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],kn.copy(this);const c=1/r,h=1/o,d=1/a;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=d,kn.elements[9]*=d,kn.elements[10]*=d,t.setFromRotationMatrix(kn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=yi){const l=this.elements,c=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let p,_;if(a===yi)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Xa)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=yi){const l=this.elements,c=1/(t-e),h=1/(i-s),d=1/(o-r),f=(t+e)*c,p=(i+s)*h;let _,y;if(a===yi)_=(o+r)*d,y=-2*d;else if(a===Xa)_=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};u(lo,"Matrix4");let Ge=lo;const Zs=new D,kn=new Ge,JM=new D(0,0,0),QM=new D(1,1,1),Li=new D,qo=new D,yn=new D,r_=new Ge,o_=new Nn,Al=class Al{constructor(e=0,t=0,i=0,s=Al.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return r_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(r_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return o_.setFromEuler(this),this.setFromQuaternion(o_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};u(Al,"Euler");let Kn=Al;Kn.DEFAULT_ORDER="XYZ";const zf=class zf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};u(zf,"Layers");let Eo=zf,eS=0;const a_=new D,Js=new Nn,hi=new Ge,Zo=new D,zr=new D,tS=new D,nS=new Nn,l_=new D(1,0,0),c_=new D(0,1,0),u_=new D(0,0,1),h_={type:"added"},iS={type:"removed"},Qs={type:"childadded",child:null},Ec={type:"childremoved",child:null},dr=class dr extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eS++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dr.DEFAULT_UP.clone();const e=new D,t=new Kn,i=new Nn,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}u(r,"onRotationChange");function o(){t.setFromQuaternion(i,void 0,!1)}u(o,"onQuaternionChange"),t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Ye}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=dr.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.multiply(Js),this}rotateOnWorldAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.premultiply(Js),this}rotateX(e){return this.rotateOnAxis(l_,e)}rotateY(e){return this.rotateOnAxis(c_,e)}rotateZ(e){return this.rotateOnAxis(u_,e)}translateOnAxis(e,t){return a_.copy(e).applyQuaternion(this.quaternion),this.position.add(a_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(l_,e)}translateY(e){return this.translateOnAxis(c_,e)}translateZ(e){return this.translateOnAxis(u_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zo.copy(e):Zo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(zr,Zo,this.up):hi.lookAt(Zo,zr,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),Js.setFromRotationMatrix(hi),this.quaternion.premultiply(Js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(h_),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(iS),Ec.child=e,this.dispatchEvent(Ec),Ec.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(h_),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,e,tS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,nS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(u(r,"serialize"),this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}u(o,"extractFromCache")}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}};u(dr,"Object3D");let yt=dr;yt.DEFAULT_UP=new D(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new D,di=new D,Tc=new D,fi=new D,er=new D,tr=new D,d_=new D,Ac=new D,wc=new D,Cc=new D,Rc=new at,Pc=new at,Dc=new at,Gi=class Gi{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Vn.subVectors(e,t),s.cross(Vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Vn.subVectors(s,t),di.subVectors(i,t),Tc.subVectors(e,t);const o=Vn.dot(Vn),a=Vn.dot(di),l=Vn.dot(Tc),c=di.dot(di),h=di.dot(Tc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(c*l-a*h)*f,_=(o*h-a*l)*f;return r.set(1-p-_,_,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Rc.setScalar(0),Pc.setScalar(0),Dc.setScalar(0),Rc.fromBufferAttribute(e,t),Pc.fromBufferAttribute(e,i),Dc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Rc,r.x),o.addScaledVector(Pc,r.y),o.addScaledVector(Dc,r.z),o}static isFrontFacing(e,t,i,s){return Vn.subVectors(i,t),di.subVectors(e,t),Vn.cross(di).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Vn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Gi.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;er.subVectors(s,i),tr.subVectors(r,i),Ac.subVectors(e,i);const l=er.dot(Ac),c=tr.dot(Ac);if(l<=0&&c<=0)return t.copy(i);wc.subVectors(e,s);const h=er.dot(wc),d=tr.dot(wc);if(h>=0&&d<=h)return t.copy(s);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(er,o);Cc.subVectors(e,r);const p=er.dot(Cc),_=tr.dot(Cc);if(_>=0&&p<=_)return t.copy(r);const y=p*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(tr,a);const g=h*_-p*d;if(g<=0&&d-h>=0&&p-_>=0)return d_.subVectors(r,s),a=(d-h)/(d-h+(p-_)),t.copy(s).addScaledVector(d_,a);const m=1/(g+y+f);return o=y*m,a=f*m,t.copy(i).addScaledVector(er,o).addScaledVector(tr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};u(Gi,"Triangle");let Rs=Gi;const K0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Jo={h:0,s:0,l:0};function Ic(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}u(Ic,"hue2rgb");const kf=class kf{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=st.workingColorSpace){if(e=cf(e,1),t=Wt(t,0,1),i=Wt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ic(o,r,e+1/3),this.g=Ic(o,r,e),this.b=Ic(o,r,e-1/3)}return st.toWorkingColorSpace(this,s),this}setStyle(e,t=ln){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}u(i,"handleAlpha");let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ln){const i=K0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}copyLinearToSRGB(e){return this.r=gc(e.r),this.g=gc(e.g),this.b=gc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return st.fromWorkingColorSpace(qt.copy(this),e),Math.round(Wt(qt.r*255,0,255))*65536+Math.round(Wt(qt.g*255,0,255))*256+Math.round(Wt(qt.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(qt.copy(this),t);const i=qt.r,s=qt.g,r=qt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=ln){st.fromWorkingColorSpace(qt.copy(this),e);const t=qt.r,i=qt.g,s=qt.b;return e!==ln?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(Jo);const i=so(Ni.h,Jo.h,t),s=so(Ni.s,Jo.s,t),r=so(Ni.l,Jo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};u(kf,"Color");let we=kf;const qt=new we;we.NAMES=K0;let sS=0;const Vf=class Vf extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sS++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=vr,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bu,this.blendDst=Eu,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(i.blending=this.blending),this.side!==oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bu&&(i.blendSrc=this.blendSrc),this.blendDst!==Eu&&(i.blendDst=this.blendDst),this.blendEquation!==vi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==br&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(u(s,"extractFromCache"),t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}};u(Vf,"Material");let En=Vf;const Hf=class Hf extends En{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=L0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};u(Hf,"MeshBasicMaterial");let ii=Hf;const Tt=new D,Qo=new ve,Gf=class Gf{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ah,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Qo.fromBufferAttribute(this,t),Qo.applyMatrix3(e),this.setXY(t,Qo.x,Qo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Gn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ah&&(e.usage=this.usage),e}};u(Gf,"BufferAttribute");let Vt=Gf;const Wf=class Wf extends Vt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};u(Wf,"Uint16BufferAttribute");let Ka=Wf;const jf=class jf extends Vt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};u(jf,"Uint32BufferAttribute");let qa=jf;const Xf=class Xf extends Vt{constructor(e,t,i){super(new Float32Array(e),t,i)}};u(Xf,"Float32BufferAttribute");let Ht=Xf,rS=0;const wn=new Ge,Lc=new yt,nr=new D,Mn=new Yn,kr=new Yn,Ut=new D,wl=class wl extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rS++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Y0(e)?qa:Ka)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ye().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,i){return wn.makeTranslation(e,t,i),this.applyMatrix4(wn),this}scale(e,t,i){return wn.makeScale(e,t,i),this.applyMatrix4(wn),this}lookAt(e){return Lc.lookAt(e),Lc.updateMatrix(),this.applyMatrix4(Lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ht(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];kr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(Mn.min,kr.min),Mn.expandByPoint(Ut),Ut.addVectors(Mn.max,kr.max),Mn.expandByPoint(Ut)):(Mn.expandByPoint(kr.min),Mn.expandByPoint(kr.max))}Mn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ut.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ut));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ut.fromBufferAttribute(a,c),l&&(nr.fromBufferAttribute(e,c),Ut.add(nr)),s=Math.max(s,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new D,l[L]=new D;const c=new D,h=new D,d=new D,f=new ve,p=new ve,_=new ve,y=new D,g=new D;function m(L,ie,M){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,ie),d.fromBufferAttribute(i,M),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,ie),_.fromBufferAttribute(r,M),h.sub(c),d.sub(c),p.sub(f),_.sub(f);const T=1/(p.x*_.y-_.x*p.y);isFinite(T)&&(y.copy(h).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(T),g.copy(d).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(T),a[L].add(y),a[ie].add(y),a[M].add(y),l[L].add(g),l[ie].add(g),l[M].add(g))}u(m,"handleTriangle");let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let L=0,ie=A.length;L<ie;++L){const M=A[L],T=M.start,B=M.count;for(let G=T,ee=T+B;G<ee;G+=3)m(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const b=new D,w=new D,O=new D,P=new D;function C(L){O.fromBufferAttribute(s,L),P.copy(O);const ie=a[L];b.copy(ie),b.sub(O.multiplyScalar(O.dot(ie))).normalize(),w.crossVectors(P,ie);const T=w.dot(l[L])<0?-1:1;o.setXYZW(L,b.x,b.y,b.z,T)}u(C,"handleVertex");for(let L=0,ie=A.length;L<ie;++L){const M=A[L],T=M.start,B=M.count;for(let G=T,ee=T+B;G<ee;G+=3)C(e.getX(G+0)),C(e.getX(G+1)),C(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,d=new D;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),y=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let p=0,_=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*h;for(let m=0;m<h;m++)f[_++]=c[p++]}return new Vt(f,h,d)}if(u(e,"convertBufferAttribute"),this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wl,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};u(wl,"BufferGeometry");let en=wl;const f_=new Ge,Ms=new ns,ea=new On,p_=new D,ta=new D,na=new D,ia=new D,Nc=new D,sa=new D,m_=new D,ra=new D,$f=class $f extends yt{constructor(e=new en,t=new ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){sa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(Nc.fromBufferAttribute(d,e),o?sa.addScaledVector(Nc,h):sa.addScaledVector(Nc.sub(t),h))}t.add(sa)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ea.copy(i.boundingSphere),ea.applyMatrix4(r),Ms.copy(e.ray).recast(e.near),!(ea.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(ea,p_)===null||Ms.origin.distanceToSquared(p_)>(e.far-e.near)**2))&&(f_.copy(r).invert(),Ms.copy(e.ray).applyMatrix4(f_),!(i.boundingBox!==null&&Ms.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ms)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const g=f[_],m=o[g.materialIndex],A=Math.max(g.start,p.start),b=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let w=A,O=b;w<O;w+=3){const P=a.getX(w),C=a.getX(w+1),L=a.getX(w+2);s=oa(this,m,e,i,c,h,d,P,C,L),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let g=_,m=y;g<m;g+=3){const A=a.getX(g),b=a.getX(g+1),w=a.getX(g+2);s=oa(this,o,e,i,c,h,d,A,b,w),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const g=f[_],m=o[g.materialIndex],A=Math.max(g.start,p.start),b=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let w=A,O=b;w<O;w+=3){const P=w,C=w+1,L=w+2;s=oa(this,m,e,i,c,h,d,P,C,L),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=_,m=y;g<m;g+=3){const A=g,b=g+1,w=g+2;s=oa(this,o,e,i,c,h,d,A,b,w),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};u($f,"Mesh");let Lt=$f;function oS(n,e,t,i,s,r,o,a){let l;if(e.side===mn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===oi,a),l===null)return null;ra.copy(a),ra.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ra);return c<t.near||c>t.far?null:{distance:c,point:ra.clone(),object:n}}u(oS,"checkIntersection$1");function oa(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ta),n.getVertexPosition(l,na),n.getVertexPosition(c,ia);const h=oS(n,e,t,i,ta,na,ia,m_);if(h){const d=new D;Rs.getBarycoord(m_,ta,na,ia,d),s&&(h.uv=Rs.getInterpolatedAttribute(s,a,l,c,d,new ve)),r&&(h.uv1=Rs.getInterpolatedAttribute(r,a,l,c,d,new ve)),o&&(h.normal=Rs.getInterpolatedAttribute(o,a,l,c,d,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new D,materialIndex:0};Rs.getNormal(ta,na,ia,f.normal),h.face=f,h.barycoord=d}return h}u(oa,"checkGeometryIntersection");const Cl=class Cl extends en{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(h,3)),this.setAttribute("uv",new Ht(d,2));function _(y,g,m,A,b,w,O,P,C,L,ie){const M=w/C,T=O/L,B=w/2,G=O/2,ee=P/2,ce=C+1,K=L+1;let Q=0,W=0;const ge=new D;for(let xe=0;xe<K;xe++){const Ae=xe*T-G;for(let je=0;je<ce;je++){const it=je*M-B;ge[y]=it*A,ge[g]=Ae*b,ge[m]=ee,c.push(ge.x,ge.y,ge.z),ge[y]=0,ge[g]=0,ge[m]=P>0?1:-1,h.push(ge.x,ge.y,ge.z),d.push(je/C),d.push(1-xe/L),Q+=1}}for(let xe=0;xe<L;xe++)for(let Ae=0;Ae<C;Ae++){const je=f+Ae+ce*xe,it=f+Ae+ce*(xe+1),ne=f+(Ae+1)+ce*(xe+1),de=f+(Ae+1)+ce*xe;l.push(je,it,de),l.push(it,ne,de),W+=6}a.addGroup(p,W,ie),p+=W,f+=Q}u(_,"buildPlane")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};u(Cl,"BoxGeometry");let Ei=Cl;function Cr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}u(Cr,"cloneUniforms");function on(n){const e={};for(let t=0;t<n.length;t++){const i=Cr(n[t]);for(const s in i)e[s]=i[s]}return e}u(on,"mergeUniforms");function aS(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}u(aS,"cloneUniformsGroups");function q0(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}u(q0,"getUnlitUniformColorSpace");const Ls={clone:Cr,merge:on};var lS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;const Yf=class Yf extends En{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lS,this.fragmentShader=cS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cr(e.uniforms),this.uniformsGroups=aS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}};u(Yf,"ShaderMaterial");let St=Yf;const Kf=class Kf extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};u(Kf,"Camera");let Za=Kf;const Oi=new D,g_=new ve,__=new ve,qf=class qf extends Za{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wr*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z)}getViewSize(e,t){return this.getViewBounds(e,g_,__),t.subVectors(__,g_)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(io*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};u(qf,"PerspectiveCamera");let jt=qf;const ir=-90,sr=1,Zf=class Zf extends yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new jt(ir,sr,e,t);s.layers=this.layers,this.add(s);const r=new jt(ir,sr,e,t);r.layers=this.layers,this.add(r);const o=new jt(ir,sr,e,t);o.layers=this.layers,this.add(o);const a=new jt(ir,sr,e,t);a.layers=this.layers,this.add(a);const l=new jt(ir,sr,e,t);l.layers=this.layers,this.add(l);const c=new jt(ir,sr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}};u(Zf,"CubeCamera");let hh=Zf;const Jf=class Jf extends Qt{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Er,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};u(Jf,"CubeTexture");let Ja=Jf;const Qf=class Qf extends Pt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ja(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ei(5,5,5),r=new St({name:"CubemapFromEquirect",uniforms:Cr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:zt});r.uniforms.tEquirect.value=t;const o=new Lt(s,r),a=t.minFilter;return t.minFilter===xi&&(t.minFilter=Sn),new hh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}};u(Qf,"WebGLCubeRenderTarget");let dh=Qf;const Oc=new D,uS=new D,hS=new Ye,ep=class ep{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Oc.subVectors(i,t).cross(uS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Oc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||hS.getNormalMatrix(e),s=this.coplanarPoint(Oc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};u(ep,"Plane");let Pn=ep;const Ss=new On,aa=new D,tp=class tp{constructor(e=new Pn,t=new Pn,i=new Pn,s=new Pn,r=new Pn,o=new Pn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=yi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],p=s[8],_=s[9],y=s[10],g=s[11],m=s[12],A=s[13],b=s[14],w=s[15];if(i[0].setComponents(l-r,f-c,g-p,w-m).normalize(),i[1].setComponents(l+r,f+c,g+p,w+m).normalize(),i[2].setComponents(l+o,f+h,g+_,w+A).normalize(),i[3].setComponents(l-o,f-h,g-_,w-A).normalize(),i[4].setComponents(l-a,f-d,g-y,w-b).normalize(),t===yi)i[5].setComponents(l+a,f+d,g+y,w+b).normalize();else if(t===Xa)i[5].setComponents(a,d,y,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(e){return Ss.center.set(0,0,0),Ss.radius=.7071067811865476,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(aa.x=s.normal.x>0?e.max.x:e.min.x,aa.y=s.normal.y>0?e.max.y:e.min.y,aa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(aa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};u(tp,"Frustum");let To=tp;function Z0(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return u(s,"onAnimationFrame"),{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}u(Z0,"WebGLAnimation");function dS(n){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}u(t,"createBuffer");function i(a,l,c){const h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){const _=d[f],y=d[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++f,d[f]=y)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){const y=d[p];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}u(i,"updateBuffer");function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}u(s,"get");function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}u(r,"remove");function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return u(o,"update"),{get:s,remove:r,update:o}}u(dS,"WebGLAttributes");const Rl=class Rl extends en{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,f=t/l,p=[],_=[],y=[],g=[];for(let m=0;m<h;m++){const A=m*f-o;for(let b=0;b<c;b++){const w=b*d-r;_.push(w,-A,0),y.push(0,0,1),g.push(b/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let A=0;A<a;A++){const b=A+c*m,w=A+c*(m+1),O=A+1+c*(m+1),P=A+1+c*m;p.push(b,w,P),p.push(w,O,P)}this.setIndex(p),this.setAttribute("position",new Ht(_,3)),this.setAttribute("normal",new Ht(y,3)),this.setAttribute("uv",new Ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rl(e.width,e.height,e.widthSegments,e.heightSegments)}};u(Rl,"PlaneGeometry");let Qa=Rl;var fS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pS=`#ifdef USE_ALPHAHASH
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
#endif`,mS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_S=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xS=`#ifdef USE_AOMAP
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
#endif`,yS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,MS=`#ifdef USE_BATCHING
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
#endif`,SS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ES=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,AS=`#ifdef USE_IRIDESCENCE
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
#endif`,wS=`#ifdef USE_BUMPMAP
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
#endif`,CS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,RS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,DS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,IS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,LS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,NS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,OS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,US=`#define PI 3.141592653589793
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
} // validated`,FS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,BS=`vec3 transformedNormal = objectNormal;
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
#endif`,zS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GS="gl_FragColor = linearToOutputTexel( gl_FragColor );",WS=`
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
}`,jS=`#ifdef USE_ENVMAP
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
#endif`,XS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$S=`#ifdef USE_ENVMAP
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
#endif`,YS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KS=`#ifdef USE_ENVMAP
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
#endif`,qS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eb=`#ifdef USE_GRADIENTMAP
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
}`,tb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ib=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sb=`uniform bool receiveShadow;
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
#endif`,rb=`#ifdef USE_ENVMAP
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
#endif`,ob=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ab=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ub=`PhysicalMaterial material;
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
#endif`,hb=`struct PhysicalMaterial {
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
}`,db=`
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
#endif`,fb=`#if defined( RE_IndirectDiffuse )
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
#endif`,pb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_b=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sb=`#if defined( USE_POINTS_UV )
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
#endif`,bb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ab=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cb=`#ifdef USE_MORPHTARGETS
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
#endif`,Rb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Db=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ib=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ob=`#ifdef USE_NORMALMAP
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
#endif`,Ub=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$b=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zb=`float getShadowMask() {
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
}`,Jb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qb=`#ifdef USE_SKINNING
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
#endif`,eE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tE=`#ifdef USE_SKINNING
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
#endif`,nE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oE=`#ifdef USE_TRANSMISSION
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
#endif`,aE=`#ifdef USE_TRANSMISSION
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
#endif`,lE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fE=`uniform sampler2D t2D;
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
}`,pE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_E=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vE=`#include <common>
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
}`,xE=`#if DEPTH_PACKING == 3200
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
}`,yE=`#define DISTANCE
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
}`,ME=`#define DISTANCE
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
}`,SE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`uniform float scale;
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
}`,TE=`uniform vec3 diffuse;
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
}`,AE=`#include <common>
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
}`,wE=`uniform vec3 diffuse;
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
}`,CE=`#define LAMBERT
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
}`,RE=`#define LAMBERT
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
}`,PE=`#define MATCAP
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
}`,DE=`#define MATCAP
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
}`,IE=`#define NORMAL
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
}`,LE=`#define NORMAL
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
}`,NE=`#define PHONG
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
}`,OE=`#define PHONG
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
}`,UE=`#define STANDARD
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
}`,FE=`#define STANDARD
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
}`,BE=`#define TOON
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
}`,zE=`#define TOON
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
}`,kE=`uniform float size;
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
}`,VE=`uniform vec3 diffuse;
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
}`,HE=`#include <common>
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
}`,GE=`uniform vec3 color;
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
}`,WE=`uniform float rotation;
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
}`,jE=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:fS,alphahash_pars_fragment:pS,alphamap_fragment:mS,alphamap_pars_fragment:gS,alphatest_fragment:_S,alphatest_pars_fragment:vS,aomap_fragment:xS,aomap_pars_fragment:yS,batching_pars_vertex:MS,batching_vertex:SS,begin_vertex:bS,beginnormal_vertex:ES,bsdfs:TS,iridescence_fragment:AS,bumpmap_pars_fragment:wS,clipping_planes_fragment:CS,clipping_planes_pars_fragment:RS,clipping_planes_pars_vertex:PS,clipping_planes_vertex:DS,color_fragment:IS,color_pars_fragment:LS,color_pars_vertex:NS,color_vertex:OS,common:US,cube_uv_reflection_fragment:FS,defaultnormal_vertex:BS,displacementmap_pars_vertex:zS,displacementmap_vertex:kS,emissivemap_fragment:VS,emissivemap_pars_fragment:HS,colorspace_fragment:GS,colorspace_pars_fragment:WS,envmap_fragment:jS,envmap_common_pars_fragment:XS,envmap_pars_fragment:$S,envmap_pars_vertex:YS,envmap_physical_pars_fragment:rb,envmap_vertex:KS,fog_vertex:qS,fog_pars_vertex:ZS,fog_fragment:JS,fog_pars_fragment:QS,gradientmap_pars_fragment:eb,lightmap_pars_fragment:tb,lights_lambert_fragment:nb,lights_lambert_pars_fragment:ib,lights_pars_begin:sb,lights_toon_fragment:ob,lights_toon_pars_fragment:ab,lights_phong_fragment:lb,lights_phong_pars_fragment:cb,lights_physical_fragment:ub,lights_physical_pars_fragment:hb,lights_fragment_begin:db,lights_fragment_maps:fb,lights_fragment_end:pb,logdepthbuf_fragment:mb,logdepthbuf_pars_fragment:gb,logdepthbuf_pars_vertex:_b,logdepthbuf_vertex:vb,map_fragment:xb,map_pars_fragment:yb,map_particle_fragment:Mb,map_particle_pars_fragment:Sb,metalnessmap_fragment:bb,metalnessmap_pars_fragment:Eb,morphinstance_vertex:Tb,morphcolor_vertex:Ab,morphnormal_vertex:wb,morphtarget_pars_vertex:Cb,morphtarget_vertex:Rb,normal_fragment_begin:Pb,normal_fragment_maps:Db,normal_pars_fragment:Ib,normal_pars_vertex:Lb,normal_vertex:Nb,normalmap_pars_fragment:Ob,clearcoat_normal_fragment_begin:Ub,clearcoat_normal_fragment_maps:Fb,clearcoat_pars_fragment:Bb,iridescence_pars_fragment:zb,opaque_fragment:kb,packing:Vb,premultiplied_alpha_fragment:Hb,project_vertex:Gb,dithering_fragment:Wb,dithering_pars_fragment:jb,roughnessmap_fragment:Xb,roughnessmap_pars_fragment:$b,shadowmap_pars_fragment:Yb,shadowmap_pars_vertex:Kb,shadowmap_vertex:qb,shadowmask_pars_fragment:Zb,skinbase_vertex:Jb,skinning_pars_vertex:Qb,skinning_vertex:eE,skinnormal_vertex:tE,specularmap_fragment:nE,specularmap_pars_fragment:iE,tonemapping_fragment:sE,tonemapping_pars_fragment:rE,transmission_fragment:oE,transmission_pars_fragment:aE,uv_pars_fragment:lE,uv_pars_vertex:cE,uv_vertex:uE,worldpos_vertex:hE,background_vert:dE,background_frag:fE,backgroundCube_vert:pE,backgroundCube_frag:mE,cube_vert:gE,cube_frag:_E,depth_vert:vE,depth_frag:xE,distanceRGBA_vert:yE,distanceRGBA_frag:ME,equirect_vert:SE,equirect_frag:bE,linedashed_vert:EE,linedashed_frag:TE,meshbasic_vert:AE,meshbasic_frag:wE,meshlambert_vert:CE,meshlambert_frag:RE,meshmatcap_vert:PE,meshmatcap_frag:DE,meshnormal_vert:IE,meshnormal_frag:LE,meshphong_vert:NE,meshphong_frag:OE,meshphysical_vert:UE,meshphysical_frag:FE,meshtoon_vert:BE,meshtoon_frag:zE,points_vert:kE,points_frag:VE,shadow_vert:HE,shadow_frag:GE,sprite_vert:WE,sprite_frag:jE},me={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},ti={basic:{uniforms:on([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:on([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new we(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:on([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:on([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:on([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new we(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:on([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:on([me.points,me.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:on([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:on([me.common,me.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:on([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:on([me.sprite,me.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:on([me.common,me.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:on([me.lights,me.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};ti.physical={uniforms:on([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const la={r:0,b:0,g:0},bs=new Kn,XE=new Ge;function $E(n,e,t,i,s,r,o){const a=new we(0);let l=r===!0?0:1,c,h,d=null,f=0,p=null;function _(A){let b=A.isScene===!0?A.background:null;return b&&b.isTexture&&(b=(A.backgroundBlurriness>0?t:e).get(b)),b}u(_,"getBackground");function y(A){let b=!1;const w=_(A);w===null?m(a,l):w&&w.isColor&&(m(w,1),b=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}u(y,"render");function g(A,b){const w=_(b);w&&(w.isCubeTexture||w.mapping===Yl)?(h===void 0&&(h=new Lt(new Ei(1,1,1),new St({name:"BackgroundCubeMaterial",uniforms:Cr(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,P,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),bs.copy(b.backgroundRotation),bs.x*=-1,bs.y*=-1,bs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(XE.makeRotationFromEuler(bs)),h.material.toneMapped=st.getTransfer(w.colorSpace)!==gt,(d!==w||f!==w.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=w,f=w.version,p=n.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Lt(new Qa(2,2),new St({name:"BackgroundMaterial",uniforms:Cr(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=st.getTransfer(w.colorSpace)!==gt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||f!==w.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=w,f=w.version,p=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}u(g,"addToRenderList");function m(A,b){A.getRGB(la,q0(n)),i.buffers.color.setClear(la.r,la.g,la.b,b,o)}return u(m,"setClear"),{getClearColor:function(){return a},setClearColor:function(A,b=1){a.set(A),l=b,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,m(a,l)},render:y,addToRenderList:g}}u($E,"WebGLBackground");function YE(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(M,T,B,G,ee){let ce=!1;const K=d(G,B,T);r!==K&&(r=K,c(r.object)),ce=p(M,G,B,ee),ce&&_(M,G,B,ee),ee!==null&&e.update(ee,n.ELEMENT_ARRAY_BUFFER),(ce||o)&&(o=!1,w(M,T,B,G),ee!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}u(a,"setup");function l(){return n.createVertexArray()}u(l,"createVertexArrayObject");function c(M){return n.bindVertexArray(M)}u(c,"bindVertexArrayObject");function h(M){return n.deleteVertexArray(M)}u(h,"deleteVertexArrayObject");function d(M,T,B){const G=B.wireframe===!0;let ee=i[M.id];ee===void 0&&(ee={},i[M.id]=ee);let ce=ee[T.id];ce===void 0&&(ce={},ee[T.id]=ce);let K=ce[G];return K===void 0&&(K=f(l()),ce[G]=K),K}u(d,"getBindingState");function f(M){const T=[],B=[],G=[];for(let ee=0;ee<t;ee++)T[ee]=0,B[ee]=0,G[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:B,attributeDivisors:G,object:M,attributes:{},index:null}}u(f,"createBindingState");function p(M,T,B,G){const ee=r.attributes,ce=T.attributes;let K=0;const Q=B.getAttributes();for(const W in Q)if(Q[W].location>=0){const xe=ee[W];let Ae=ce[W];if(Ae===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(Ae=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(Ae=M.instanceColor)),xe===void 0||xe.attribute!==Ae||Ae&&xe.data!==Ae.data)return!0;K++}return r.attributesNum!==K||r.index!==G}u(p,"needsUpdate");function _(M,T,B,G){const ee={},ce=T.attributes;let K=0;const Q=B.getAttributes();for(const W in Q)if(Q[W].location>=0){let xe=ce[W];xe===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(xe=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(xe=M.instanceColor));const Ae={};Ae.attribute=xe,xe&&xe.data&&(Ae.data=xe.data),ee[W]=Ae,K++}r.attributes=ee,r.attributesNum=K,r.index=G}u(_,"saveCache");function y(){const M=r.newAttributes;for(let T=0,B=M.length;T<B;T++)M[T]=0}u(y,"initAttributes");function g(M){m(M,0)}u(g,"enableAttribute");function m(M,T){const B=r.newAttributes,G=r.enabledAttributes,ee=r.attributeDivisors;B[M]=1,G[M]===0&&(n.enableVertexAttribArray(M),G[M]=1),ee[M]!==T&&(n.vertexAttribDivisor(M,T),ee[M]=T)}u(m,"enableAttributeAndDivisor");function A(){const M=r.newAttributes,T=r.enabledAttributes;for(let B=0,G=T.length;B<G;B++)T[B]!==M[B]&&(n.disableVertexAttribArray(B),T[B]=0)}u(A,"disableUnusedAttributes");function b(M,T,B,G,ee,ce,K){K===!0?n.vertexAttribIPointer(M,T,B,ee,ce):n.vertexAttribPointer(M,T,B,G,ee,ce)}u(b,"vertexAttribPointer");function w(M,T,B,G){y();const ee=G.attributes,ce=B.getAttributes(),K=T.defaultAttributeValues;for(const Q in ce){const W=ce[Q];if(W.location>=0){let ge=ee[Q];if(ge===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor)),ge!==void 0){const xe=ge.normalized,Ae=ge.itemSize,je=e.get(ge);if(je===void 0)continue;const it=je.buffer,ne=je.type,de=je.bytesPerElement,_e=ne===n.INT||ne===n.UNSIGNED_INT||ge.gpuType===Qd;if(ge.isInterleavedBufferAttribute){const ye=ge.data,Ve=ye.stride,Ue=ge.offset;if(ye.isInstancedInterleavedBuffer){for(let Ke=0;Ke<W.locationSize;Ke++)m(W.location+Ke,ye.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ke=0;Ke<W.locationSize;Ke++)g(W.location+Ke);n.bindBuffer(n.ARRAY_BUFFER,it);for(let Ke=0;Ke<W.locationSize;Ke++)b(W.location+Ke,Ae/W.locationSize,ne,xe,Ve*de,(Ue+Ae/W.locationSize*Ke)*de,_e)}else{if(ge.isInstancedBufferAttribute){for(let ye=0;ye<W.locationSize;ye++)m(W.location+ye,ge.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let ye=0;ye<W.locationSize;ye++)g(W.location+ye);n.bindBuffer(n.ARRAY_BUFFER,it);for(let ye=0;ye<W.locationSize;ye++)b(W.location+ye,Ae/W.locationSize,ne,xe,Ae*de,Ae/W.locationSize*ye*de,_e)}}else if(K!==void 0){const xe=K[Q];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(W.location,xe);break;case 3:n.vertexAttrib3fv(W.location,xe);break;case 4:n.vertexAttrib4fv(W.location,xe);break;default:n.vertexAttrib1fv(W.location,xe)}}}}A()}u(w,"setupVertexAttributes");function O(){L();for(const M in i){const T=i[M];for(const B in T){const G=T[B];for(const ee in G)h(G[ee].object),delete G[ee];delete T[B]}delete i[M]}}u(O,"dispose");function P(M){if(i[M.id]===void 0)return;const T=i[M.id];for(const B in T){const G=T[B];for(const ee in G)h(G[ee].object),delete G[ee];delete T[B]}delete i[M.id]}u(P,"releaseStatesOfGeometry");function C(M){for(const T in i){const B=i[T];if(B[M.id]===void 0)continue;const G=B[M.id];for(const ee in G)h(G[ee].object),delete G[ee];delete B[M.id]}}u(C,"releaseStatesOfProgram");function L(){ie(),o=!0,r!==s&&(r=s,c(r.object))}u(L,"reset");function ie(){s.geometry=null,s.program=null,s.wireframe=!1}return u(ie,"resetDefaultState"),{setup:a,reset:L,resetDefaultState:ie,dispose:O,releaseStatesOfGeometry:P,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:g,disableUnusedAttributes:A}}u(YE,"WebGLBindingStates");function KE(n,e,t){let i;function s(c){i=c}u(s,"setMode");function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}u(r,"render");function o(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}u(o,"renderInstances");function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let _=0;_<d;_++)p+=h[_];t.update(p,i,1)}u(a,"renderMultiDraw");function l(c,h,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],h[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let _=0;for(let y=0;y<d;y++)_+=h[y];for(let y=0;y<f.length;y++)t.update(_,i,f[y])}}u(l,"renderMultiDrawInstances"),this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}u(KE,"WebGLBufferRenderer");function qE(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}u(r,"getMaxAnisotropy");function o(C){return!(C!==In&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}u(o,"textureFormatReadable");function a(C){const L=C===pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Si&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==jn&&!L)}u(a,"textureTypeReadable");function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}u(l,"getMaxPrecision");let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const C=e.get("EXT_clip_control");C.clipControlEXT(C.LOWER_LEFT_EXT,C.ZERO_TO_ONE_EXT)}const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=_>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:A,maxVaryings:b,maxFragmentUniforms:w,vertexTextures:O,maxSamples:P}}u(qE,"WebGLCapabilities");function ZE(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Pn,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,m=n.get(d);if(!s||_===null||_.length===0||r&&!g)r?h(null):c();else{const A=r?0:i,b=A*4;let w=m.clippingState||null;l.value=w,w=h(_,f,b,p);for(let O=0;O!==b;++O)w[O]=t[O];m.clippingState=w,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}u(c,"resetGlobalState");function h(d,f,p,_){const y=d!==null?d.length:0;let g=null;if(y!==0){if(g=l.value,_!==!0||g===null){const m=p+y*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,w=p;b!==y;++b,w+=4)o.copy(d[b]).applyMatrix4(A,a),o.normal.toArray(g,w),g[w+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}u(h,"projectPlanes")}u(ZE,"WebGLClipping");function JE(n){let e=new WeakMap;function t(o,a){return a===Iu?o.mapping=Er:a===Lu&&(o.mapping=Tr),o}u(t,"mapTextureMapping");function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Iu||a===Lu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new dh(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}u(i,"get");function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}u(s,"onTextureDispose");function r(){e=new WeakMap}return u(r,"dispose"),{get:i,dispose:r}}u(JE,"WebGLCubeMaps");const np=class np extends Za{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};u(np,"OrthographicCamera");let Rr=np;const cr=4,v_=[.125,.215,.35,.446,.526,.582],Ps=20,Uc=new Rr,x_=new we;let Fc=null,Bc=0,zc=0,kc=!1;const As=(1+Math.sqrt(5))/2,rr=1/As,y_=[new D(-As,rr,0),new D(As,rr,0),new D(-rr,0,As),new D(rr,0,As),new D(0,As,-rr),new D(0,As,rr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],ip=class ip{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Fc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=b_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=S_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fc,Bc,zc),this._renderer.xr.enabled=kc,e.scissorTest=!1,ca(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Er||e.mapping===Tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:pn,format:In,colorSpace:Yt,depthBuffer:!1},s=M_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=M_(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=QE(r)),this._blurMaterial=eT(r,e,t)}return s}_compileMaterial(e){const t=new Lt(this._lodPlanes[0],e);this._renderer.compile(t,Uc)}_sceneToCubeUV(e,t,i,s){const a=new jt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(x_),h.toneMapping=Zi,h.autoClear=!1;const p=new ii({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),_=new Lt(new Ei,p);let y=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,y=!0):(p.color.copy(x_),y=!0);for(let m=0;m<6;m++){const A=m%3;A===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):A===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const b=this._cubeSize;ca(s,A*b,m>2?b:0,b,b),h.setRenderTarget(s),y&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Er||e.mapping===Tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=b_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=S_());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Lt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ca(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Uc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=y_[(s-r-1)%y_.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Lt(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ps-1),y=r/_,g=isFinite(r)?1+Math.floor(h*y):Ps;g>Ps&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ps}`);const m=[];let A=0;for(let C=0;C<Ps;++C){const L=C/y,ie=Math.exp(-L*L/2);m.push(ie),C===0?A+=ie:C<g&&(A+=2*ie)}for(let C=0;C<m.length;C++)m[C]=m[C]/A;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=_,f.mipInt.value=b-i;const w=this._sizeLods[s],O=3*w*(s>b-cr?s-b+cr:0),P=4*(this._cubeSize-w);ca(t,O,P,3*w,2*w),l.setRenderTarget(t),l.render(d,Uc)}};u(ip,"PMREMGenerator");let el=ip;function QE(n){const e=[],t=[],i=[];let s=n;const r=n-cr+1+v_.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-cr?l=v_[o-n+cr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,_=6,y=3,g=2,m=1,A=new Float32Array(y*_*p),b=new Float32Array(g*_*p),w=new Float32Array(m*_*p);for(let P=0;P<p;P++){const C=P%3*2/3-1,L=P>2?0:-1,ie=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];A.set(ie,y*_*P),b.set(f,g*_*P);const M=[P,P,P,P,P,P];w.set(M,m*_*P)}const O=new en;O.setAttribute("position",new Vt(A,y)),O.setAttribute("uv",new Vt(b,g)),O.setAttribute("faceIndex",new Vt(w,m)),e.push(O),s>cr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}u(QE,"_createPlanes");function M_(n,e,t){const i=new Pt(n,e,t);return i.texture.mapping=Yl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}u(M_,"_createRenderTarget");function ca(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}u(ca,"_setViewport");function eT(n,e,t){const i=new Float32Array(Ps),s=new D(0,1,0);return new St({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:uf(),fragmentShader:`

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
		`,blending:zt,depthTest:!1,depthWrite:!1})}u(eT,"_getBlurShader");function S_(){return new St({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uf(),fragmentShader:`

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
		`,blending:zt,depthTest:!1,depthWrite:!1})}u(S_,"_getEquirectMaterial");function b_(){return new St({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zt,depthTest:!1,depthWrite:!1})}u(b_,"_getCubemapMaterial");function uf(){return`

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
	`}u(uf,"_getCommonVertexShader");function tT(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Iu||l===Lu,h=l===Er||l===Tr;if(c||h){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new el(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new el(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}u(i,"get");function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}u(s,"isCubeTextureComplete");function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}u(r,"onTextureDispose");function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return u(o,"dispose"),{get:i,dispose:o}}u(tT,"WebGLCubeUVMaps");function nT(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return u(t,"getExtension"),{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Da("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}u(nT,"WebGLExtensions");function iT(n,e,t,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const y=f.morphAttributes[_];for(let g=0,m=y.length;g<m;g++)e.remove(y[g])}f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}u(o,"onGeometryDispose");function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}u(a,"get");function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const y=p[_];for(let g=0,m=y.length;g<m;g++)e.update(y[g],n.ARRAY_BUFFER)}}u(l,"update");function c(d){const f=[],p=d.index,_=d.attributes.position;let y=0;if(p!==null){const A=p.array;y=p.version;for(let b=0,w=A.length;b<w;b+=3){const O=A[b+0],P=A[b+1],C=A[b+2];f.push(O,P,P,C,C,O)}}else if(_!==void 0){const A=_.array;y=_.version;for(let b=0,w=A.length/3-1;b<w;b+=3){const O=b+0,P=b+1,C=b+2;f.push(O,P,P,C,C,O)}}else return;const g=new(Y0(f)?qa:Ka)(f,1);g.version=y;const m=r.get(d);m&&e.remove(m),r.set(d,g)}u(c,"updateWireframeAttribute");function h(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return u(h,"getWireframeAttribute"),{get:a,update:l,getWireframeAttribute:h}}u(iT,"WebGLGeometries");function sT(n,e,t){let i;function s(f){i=f}u(s,"setMode");let r,o;function a(f){r=f.type,o=f.bytesPerElement}u(a,"setIndex");function l(f,p){n.drawElements(i,p,r,f*o),t.update(p,i,1)}u(l,"render");function c(f,p,_){_!==0&&(n.drawElementsInstanced(i,p,r,f*o,_),t.update(p,i,_))}u(c,"renderInstances");function h(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,_);let g=0;for(let m=0;m<_;m++)g+=p[m];t.update(g,i,1)}u(h,"renderMultiDraw");function d(f,p,_,y){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/o,p[m],y[m]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,y,0,_);let m=0;for(let A=0;A<_;A++)m+=p[A];for(let A=0;A<y.length;A++)t.update(m,i,y[A])}}u(d,"renderMultiDrawInstances"),this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}u(sT,"WebGLIndexedBufferRenderer");function rT(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}u(i,"update");function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return u(s,"reset"),{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}u(rT,"WebGLInfo");function oT(n,e,t){const i=new WeakMap,s=new at;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let M=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;u(M,"disposeTexture"),f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let w=0;_===!0&&(w=1),y===!0&&(w=2),g===!0&&(w=3);let O=a.attributes.position.count*w,P=1;O>e.maxTextureSize&&(P=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const C=new Float32Array(O*P*4*d),L=new Ya(C,O,P,d);L.type=jn,L.needsUpdate=!0;const ie=w*4;for(let T=0;T<d;T++){const B=m[T],G=A[T],ee=b[T],ce=O*P*4*T;for(let K=0;K<B.count;K++){const Q=K*ie;_===!0&&(s.fromBufferAttribute(B,K),C[ce+Q+0]=s.x,C[ce+Q+1]=s.y,C[ce+Q+2]=s.z,C[ce+Q+3]=0),y===!0&&(s.fromBufferAttribute(G,K),C[ce+Q+4]=s.x,C[ce+Q+5]=s.y,C[ce+Q+6]=s.z,C[ce+Q+7]=0),g===!0&&(s.fromBufferAttribute(ee,K),C[ce+Q+8]=s.x,C[ce+Q+9]=s.y,C[ce+Q+10]=s.z,C[ce+Q+11]=ee.itemSize===4?s.w:1)}}f={count:d,texture:L,size:new ve(O,P)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const y=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",y),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return u(r,"update"),{update:r}}u(oT,"WebGLMorphtargets");function aT(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}u(r,"update");function o(){s=new WeakMap}u(o,"dispose");function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return u(a,"onInstancedMeshDispose"),{update:r,dispose:o}}u(aT,"WebGLObjects");const sp=class sp extends Qt{constructor(e,t,i,s,r,o,a,l,c,h=xr){if(h!==xr&&h!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===xr&&(i=Fs),i===void 0&&h===zs&&(i=Bs),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};u(sp,"DepthTexture");let Ao=sp;const J0=new Qt,E_=new Ao(1,1),Q0=new Ya,e1=new uh,t1=new Ja,T_=[],A_=[],w_=new Float32Array(16),C_=new Float32Array(9),R_=new Float32Array(4);function Dr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=T_[s];if(r===void 0&&(r=new Float32Array(s),T_[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}u(Dr,"flatten");function Nt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}u(Nt,"arraysEqual");function Ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}u(Ot,"copyArray");function ql(n,e){let t=A_[e];t===void 0&&(t=new Int32Array(e),A_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}u(ql,"allocTexUnits");function lT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}u(lT,"setValueV1f");function cT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2fv(this.addr,e),Ot(t,e)}}u(cT,"setValueV2f");function uT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;n.uniform3fv(this.addr,e),Ot(t,e)}}u(uT,"setValueV3f");function hT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4fv(this.addr,e),Ot(t,e)}}u(hT,"setValueV4f");function dT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,i))return;R_.set(i),n.uniformMatrix2fv(this.addr,!1,R_),Ot(t,i)}}u(dT,"setValueM2");function fT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,i))return;C_.set(i),n.uniformMatrix3fv(this.addr,!1,C_),Ot(t,i)}}u(fT,"setValueM3");function pT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,i))return;w_.set(i),n.uniformMatrix4fv(this.addr,!1,w_),Ot(t,i)}}u(pT,"setValueM4");function mT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}u(mT,"setValueV1i");function gT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2iv(this.addr,e),Ot(t,e)}}u(gT,"setValueV2i");function _T(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3iv(this.addr,e),Ot(t,e)}}u(_T,"setValueV3i");function vT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4iv(this.addr,e),Ot(t,e)}}u(vT,"setValueV4i");function xT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}u(xT,"setValueV1ui");function yT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2uiv(this.addr,e),Ot(t,e)}}u(yT,"setValueV2ui");function MT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3uiv(this.addr,e),Ot(t,e)}}u(MT,"setValueV3ui");function ST(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4uiv(this.addr,e),Ot(t,e)}}u(ST,"setValueV4ui");function bT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(E_.compareFunction=$0,r=E_):r=J0,t.setTexture2D(e||r,s)}u(bT,"setValueT1");function ET(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||e1,s)}u(ET,"setValueT3D1");function TT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||t1,s)}u(TT,"setValueT6");function AT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Q0,s)}u(AT,"setValueT2DArray1");function wT(n){switch(n){case 5126:return lT;case 35664:return cT;case 35665:return uT;case 35666:return hT;case 35674:return dT;case 35675:return fT;case 35676:return pT;case 5124:case 35670:return mT;case 35667:case 35671:return gT;case 35668:case 35672:return _T;case 35669:case 35673:return vT;case 5125:return xT;case 36294:return yT;case 36295:return MT;case 36296:return ST;case 35678:case 36198:case 36298:case 36306:case 35682:return bT;case 35679:case 36299:case 36307:return ET;case 35680:case 36300:case 36308:case 36293:return TT;case 36289:case 36303:case 36311:case 36292:return AT}}u(wT,"getSingularSetter");function CT(n,e){n.uniform1fv(this.addr,e)}u(CT,"setValueV1fArray");function RT(n,e){const t=Dr(e,this.size,2);n.uniform2fv(this.addr,t)}u(RT,"setValueV2fArray");function PT(n,e){const t=Dr(e,this.size,3);n.uniform3fv(this.addr,t)}u(PT,"setValueV3fArray");function DT(n,e){const t=Dr(e,this.size,4);n.uniform4fv(this.addr,t)}u(DT,"setValueV4fArray");function IT(n,e){const t=Dr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}u(IT,"setValueM2Array");function LT(n,e){const t=Dr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}u(LT,"setValueM3Array");function NT(n,e){const t=Dr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}u(NT,"setValueM4Array");function OT(n,e){n.uniform1iv(this.addr,e)}u(OT,"setValueV1iArray");function UT(n,e){n.uniform2iv(this.addr,e)}u(UT,"setValueV2iArray");function FT(n,e){n.uniform3iv(this.addr,e)}u(FT,"setValueV3iArray");function BT(n,e){n.uniform4iv(this.addr,e)}u(BT,"setValueV4iArray");function zT(n,e){n.uniform1uiv(this.addr,e)}u(zT,"setValueV1uiArray");function kT(n,e){n.uniform2uiv(this.addr,e)}u(kT,"setValueV2uiArray");function VT(n,e){n.uniform3uiv(this.addr,e)}u(VT,"setValueV3uiArray");function HT(n,e){n.uniform4uiv(this.addr,e)}u(HT,"setValueV4uiArray");function GT(n,e,t){const i=this.cache,s=e.length,r=ql(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||J0,r[o])}u(GT,"setValueT1Array");function WT(n,e,t){const i=this.cache,s=e.length,r=ql(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||e1,r[o])}u(WT,"setValueT3DArray");function jT(n,e,t){const i=this.cache,s=e.length,r=ql(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||t1,r[o])}u(jT,"setValueT6Array");function XT(n,e,t){const i=this.cache,s=e.length,r=ql(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Q0,r[o])}u(XT,"setValueT2DArrayArray");function $T(n){switch(n){case 5126:return CT;case 35664:return RT;case 35665:return PT;case 35666:return DT;case 35674:return IT;case 35675:return LT;case 35676:return NT;case 5124:case 35670:return OT;case 35667:case 35671:return UT;case 35668:case 35672:return FT;case 35669:case 35673:return BT;case 5125:return zT;case 36294:return kT;case 36295:return VT;case 36296:return HT;case 35678:case 36198:case 36298:case 36306:case 35682:return GT;case 35679:case 36299:case 36307:return WT;case 35680:case 36300:case 36308:case 36293:return jT;case 36289:case 36303:case 36311:case 36292:return XT}}u($T,"getPureArraySetter");const rp=class rp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=wT(t.type)}};u(rp,"SingleUniform");let fh=rp;const op=class op{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$T(t.type)}};u(op,"PureArrayUniform");let ph=op;const ap=class ap{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}};u(ap,"StructuredUniform");let mh=ap;const Vc=/(\w+)(\])?(\[|\.)?/g;function P_(n,e){n.seq.push(e),n.map[e.id]=e}u(P_,"addUniform");function YT(n,e,t){const i=n.name,s=i.length;for(Vc.lastIndex=0;;){const r=Vc.exec(i),o=Vc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){P_(t,c===void 0?new fh(a,n,e):new ph(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new mh(a),P_(t,d)),t=d}}}u(YT,"parseUniform");const lp=class lp{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);YT(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}};u(lp,"WebGLUniforms");let Mr=lp;function D_(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}u(D_,"WebGLShader");const KT=37297;let qT=0;function ZT(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}u(ZT,"handleSource");function JT(n){const e=st.getPrimaries(st.workingColorSpace),t=st.getPrimaries(n);let i;switch(e===t?i="":e===ja&&t===Wa?i="LinearDisplayP3ToLinearSRGB":e===Wa&&t===ja&&(i="LinearSRGBToLinearDisplayP3"),n){case Yt:case Kl:return[i,"LinearTransferOETF"];case ln:case lf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}u(JT,"getEncodingComponents");function I_(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+ZT(n.getShaderSource(e),o)}else return s}u(I_,"getShaderErrors");function QT(n,e){const t=JT(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}u(QT,"getTexelEncodingFunction");function eA(n,e){let t;switch(e){case cM:t="Linear";break;case uM:t="Reinhard";break;case hM:t="Cineon";break;case dM:t="ACESFilmic";break;case pM:t="AgX";break;case mM:t="Neutral";break;case fM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}u(eA,"getToneMappingFunction");const ua=new D;function tA(){st.getLuminanceCoefficients(ua);const n=ua.x.toFixed(4),e=ua.y.toFixed(4),t=ua.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}u(tA,"getLuminanceFunction");function nA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}u(nA,"generateVertexExtensions");function iA(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}u(iA,"generateDefines");function sA(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}u(sA,"fetchAttributeLocations");function Yr(n){return n!==""}u(Yr,"filterEmptyLine");function L_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}u(L_,"replaceLightNums");function N_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}u(N_,"replaceClippingPlaneNums");const rA=/^[ \t]*#include +<([\w\d./]+)>/gm;function gh(n){return n.replace(rA,aA)}u(gh,"resolveIncludes");const oA=new Map;function aA(n,e){let t=$e[e];if(t===void 0){const i=oA.get(e);if(i!==void 0)t=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gh(t)}u(aA,"includeReplacer");const lA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function O_(n){return n.replace(lA,cA)}u(O_,"unrollLoops");function cA(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}u(cA,"loopReplacer");function U_(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}u(U_,"generatePrecision");function uA(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===P0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Xy?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}u(uA,"generateShadowMapTypeDefine");function hA(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Er:case Tr:e="ENVMAP_TYPE_CUBE";break;case Yl:e="ENVMAP_TYPE_CUBE_UV";break}return e}u(hA,"generateEnvMapTypeDefine");function dA(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Tr:e="ENVMAP_MODE_REFRACTION";break}return e}u(dA,"generateEnvMapModeDefine");function fA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case L0:e="ENVMAP_BLENDING_MULTIPLY";break;case aM:e="ENVMAP_BLENDING_MIX";break;case lM:e="ENVMAP_BLENDING_ADD";break}return e}u(fA,"generateEnvMapBlendingDefine");function pA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}u(pA,"generateCubeUVSize");function mA(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=uA(t),c=hA(t),h=dA(t),d=fA(t),f=pA(t),p=nA(t),_=iA(r),y=s.createProgram();let g,m,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Yr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Yr).join(`
`),m.length>0&&(m+=`
`)):(g=[U_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),m=[U_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zi?"#define TONE_MAPPING":"",t.toneMapping!==Zi?$e.tonemapping_pars_fragment:"",t.toneMapping!==Zi?eA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,QT("linearToOutputTexel",t.outputColorSpace),tA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yr).join(`
`)),o=gh(o),o=L_(o,t),o=N_(o,t),a=gh(a),a=L_(a,t),a=N_(a,t),o=O_(o),a=O_(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Qg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=A+g+o,w=A+m+a,O=D_(s,s.VERTEX_SHADER,b),P=D_(s,s.FRAGMENT_SHADER,w);s.attachShader(y,O),s.attachShader(y,P),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function C(T){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(y).trim(),G=s.getShaderInfoLog(O).trim(),ee=s.getShaderInfoLog(P).trim();let ce=!0,K=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ce=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,O,P);else{const Q=I_(s,O,"vertex"),W=I_(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+B+`
`+Q+`
`+W)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(G===""||ee==="")&&(K=!1);K&&(T.diagnostics={runnable:ce,programLog:B,vertexShader:{log:G,prefix:g},fragmentShader:{log:ee,prefix:m}})}s.deleteShader(O),s.deleteShader(P),L=new Mr(s,y),ie=sA(s,y)}u(C,"onFirstUse");let L;this.getUniforms=function(){return L===void 0&&C(this),L};let ie;this.getAttributes=function(){return ie===void 0&&C(this),ie};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(y,KT)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qT++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=O,this.fragmentShader=P,this}u(mA,"WebGLProgram");let gA=0;const cp=class cp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new vh(e),t.set(e,i)),i}};u(cp,"WebGLShaderCache");let _h=cp;const up=class up{constructor(e){this.id=gA++,this.code=e,this.usedTimes=0}};u(up,"WebGLShaderStage");let vh=up;function _A(n,e,t,i,s,r,o){const a=new Eo,l=new _h,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,p=s.vertexTextures;let _=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}u(g,"getChannel");function m(M,T,B,G,ee){const ce=G.fog,K=ee.geometry,Q=M.isMeshStandardMaterial?G.environment:null,W=(M.isMeshStandardMaterial?t:e).get(M.envMap||Q),ge=W&&W.mapping===Yl?W.image.height:null,xe=y[M.type];M.precision!==null&&(_=s.getMaxPrecision(M.precision),_!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",_,"instead."));const Ae=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,je=Ae!==void 0?Ae.length:0;let it=0;K.morphAttributes.position!==void 0&&(it=1),K.morphAttributes.normal!==void 0&&(it=2),K.morphAttributes.color!==void 0&&(it=3);let ne,de,_e,ye;if(xe){const hn=ti[xe];ne=hn.vertexShader,de=hn.fragmentShader}else ne=M.vertexShader,de=M.fragmentShader,l.update(M),_e=l.getVertexShaderID(M),ye=l.getFragmentShaderID(M);const Ve=n.getRenderTarget(),Ue=ee.isInstancedMesh===!0,Ke=ee.isBatchedMesh===!0,rt=!!M.map,Qe=!!M.matcap,x=!!W,I=!!M.aoMap,V=!!M.lightMap,Z=!!M.bumpMap,j=!!M.normalMap,re=!!M.displacementMap,te=!!M.emissiveMap,S=!!M.metalnessMap,v=!!M.roughnessMap,R=M.anisotropy>0,U=M.clearcoat>0,X=M.dispersion>0,k=M.iridescence>0,ue=M.sheen>0,oe=M.transmission>0,he=R&&!!M.anisotropyMap,Pe=U&&!!M.clearcoatMap,ae=U&&!!M.clearcoatNormalMap,pe=U&&!!M.clearcoatRoughnessMap,Oe=k&&!!M.iridescenceMap,Fe=k&&!!M.iridescenceThicknessMap,Me=ue&&!!M.sheenColorMap,qe=ue&&!!M.sheenRoughnessMap,De=!!M.specularMap,Ze=!!M.specularColorMap,N=!!M.specularIntensityMap,Ee=oe&&!!M.transmissionMap,J=oe&&!!M.thicknessMap,le=!!M.gradientMap,Se=!!M.alphaMap,Te=M.alphaTest>0,et=!!M.alphaHash,Et=!!M.extensions;let un=Zi;M.toneMapped&&(Ve===null||Ve.isXRRenderTarget===!0)&&(un=n.toneMapping);const ot={shaderID:xe,shaderType:M.type,shaderName:M.name,vertexShader:ne,fragmentShader:de,defines:M.defines,customVertexShaderID:_e,customFragmentShaderID:ye,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:_,batching:Ke,batchingColor:Ke&&ee._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&ee.instanceColor!==null,instancingMorph:Ue&&ee.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ve===null?n.outputColorSpace:Ve.isXRRenderTarget===!0?Ve.texture.colorSpace:Yt,alphaToCoverage:!!M.alphaToCoverage,map:rt,matcap:Qe,envMap:x,envMapMode:x&&W.mapping,envMapCubeUVHeight:ge,aoMap:I,lightMap:V,bumpMap:Z,normalMap:j,displacementMap:p&&re,emissiveMap:te,normalMapObjectSpace:j&&M.normalMapType===yM,normalMapTangentSpace:j&&M.normalMapType===af,metalnessMap:S,roughnessMap:v,anisotropy:R,anisotropyMap:he,clearcoat:U,clearcoatMap:Pe,clearcoatNormalMap:ae,clearcoatRoughnessMap:pe,dispersion:X,iridescence:k,iridescenceMap:Oe,iridescenceThicknessMap:Fe,sheen:ue,sheenColorMap:Me,sheenRoughnessMap:qe,specularMap:De,specularColorMap:Ze,specularIntensityMap:N,transmission:oe,transmissionMap:Ee,thicknessMap:J,gradientMap:le,opaque:M.transparent===!1&&M.blending===vr&&M.alphaToCoverage===!1,alphaMap:Se,alphaTest:Te,alphaHash:et,combine:M.combine,mapUv:rt&&g(M.map.channel),aoMapUv:I&&g(M.aoMap.channel),lightMapUv:V&&g(M.lightMap.channel),bumpMapUv:Z&&g(M.bumpMap.channel),normalMapUv:j&&g(M.normalMap.channel),displacementMapUv:re&&g(M.displacementMap.channel),emissiveMapUv:te&&g(M.emissiveMap.channel),metalnessMapUv:S&&g(M.metalnessMap.channel),roughnessMapUv:v&&g(M.roughnessMap.channel),anisotropyMapUv:he&&g(M.anisotropyMap.channel),clearcoatMapUv:Pe&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:qe&&g(M.sheenRoughnessMap.channel),specularMapUv:De&&g(M.specularMap.channel),specularColorMapUv:Ze&&g(M.specularColorMap.channel),specularIntensityMapUv:N&&g(M.specularIntensityMap.channel),transmissionMapUv:Ee&&g(M.transmissionMap.channel),thicknessMapUv:J&&g(M.thicknessMap.channel),alphaMapUv:Se&&g(M.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(j||R),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!K.attributes.uv&&(rt||Se),fog:!!ce,useFog:M.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:ee.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:je,morphTextureStride:it,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:un,decodeVideoTexture:rt&&M.map.isVideoTexture===!0&&st.getTransfer(M.map.colorSpace)===gt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===cn,flipSided:M.side===mn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Et&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&M.extensions.multiDraw===!0||Ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ot.vertexUv1s=c.has(1),ot.vertexUv2s=c.has(2),ot.vertexUv3s=c.has(3),c.clear(),ot}u(m,"getParameters");function A(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const B in M.defines)T.push(B),T.push(M.defines[B]);return M.isRawShaderMaterial===!1&&(b(T,M),w(T,M),T.push(n.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}u(A,"getProgramCacheKey");function b(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}u(b,"getProgramCacheKeyParameters");function w(M,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),M.push(a.mask)}u(w,"getProgramCacheKeyBooleans");function O(M){const T=y[M.type];let B;if(T){const G=ti[T];B=Ls.clone(G.uniforms)}else B=M.uniforms;return B}u(O,"getUniforms");function P(M,T){let B;for(let G=0,ee=h.length;G<ee;G++){const ce=h[G];if(ce.cacheKey===T){B=ce,++B.usedTimes;break}}return B===void 0&&(B=new mA(n,T,M,r),h.push(B)),B}u(P,"acquireProgram");function C(M){if(--M.usedTimes===0){const T=h.indexOf(M);h[T]=h[h.length-1],h.pop(),M.destroy()}}u(C,"releaseProgram");function L(M){l.remove(M)}u(L,"releaseShaderCache");function ie(){l.dispose()}return u(ie,"dispose"),{getParameters:m,getProgramCacheKey:A,getUniforms:O,acquireProgram:P,releaseProgram:C,releaseShaderCache:L,programs:h,dispose:ie}}u(_A,"WebGLPrograms");function vA(){let n=new WeakMap;function e(o){return n.has(o)}u(e,"has");function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}u(t,"get");function i(o){n.delete(o)}u(i,"remove");function s(o,a,l){n.get(o)[a]=l}u(s,"update");function r(){n=new WeakMap}return u(r,"dispose"),{has:e,get:t,remove:i,update:s,dispose:r}}u(vA,"WebGLProperties");function xA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}u(xA,"painterSortStable");function F_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}u(F_,"reversePainterSortStable");function B_(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}u(r,"init");function o(d,f,p,_,y,g){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:y,group:g},n[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=p,m.groupOrder=_,m.renderOrder=d.renderOrder,m.z=y,m.group=g),e++,m}u(o,"getNextRenderItem");function a(d,f,p,_,y,g){const m=o(d,f,p,_,y,g);p.transmission>0?i.push(m):p.transparent===!0?s.push(m):t.push(m)}u(a,"push");function l(d,f,p,_,y,g){const m=o(d,f,p,_,y,g);p.transmission>0?i.unshift(m):p.transparent===!0?s.unshift(m):t.unshift(m)}u(l,"unshift");function c(d,f){t.length>1&&t.sort(d||xA),i.length>1&&i.sort(f||F_),s.length>1&&s.sort(f||F_)}u(c,"sort");function h(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return u(h,"finish"),{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}u(B_,"WebGLRenderList");function yA(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new B_,n.set(i,[o])):s>=r.length?(o=new B_,r.push(o)):o=r[s],o}u(e,"get");function t(){n=new WeakMap}return u(t,"dispose"),{get:e,dispose:t}}u(yA,"WebGLRenderLists");function MA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new we};break;case"SpotLight":t={position:new D,direction:new D,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}u(MA,"UniformsCache");function SA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}u(SA,"ShadowUniformsCache");let bA=0;function EA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}u(EA,"shadowCastingAndTexturingLightsFirst");function TA(n){const e=new MA,t=SA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const s=new D,r=new Ge,o=new Ge;function a(c){let h=0,d=0,f=0;for(let ie=0;ie<9;ie++)i.probe[ie].set(0,0,0);let p=0,_=0,y=0,g=0,m=0,A=0,b=0,w=0,O=0,P=0,C=0;c.sort(EA);for(let ie=0,M=c.length;ie<M;ie++){const T=c[ie],B=T.color,G=T.intensity,ee=T.distance,ce=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=B.r*G,d+=B.g*G,f+=B.b*G;else if(T.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(T.sh.coefficients[K],G);C++}else if(T.isDirectionalLight){const K=e.get(T);if(K.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const Q=T.shadow,W=t.get(T);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=ce,i.directionalShadowMatrix[p]=T.shadow.matrix,A++}i.directional[p]=K,p++}else if(T.isSpotLight){const K=e.get(T);K.position.setFromMatrixPosition(T.matrixWorld),K.color.copy(B).multiplyScalar(G),K.distance=ee,K.coneCos=Math.cos(T.angle),K.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),K.decay=T.decay,i.spot[y]=K;const Q=T.shadow;if(T.map&&(i.spotLightMap[O]=T.map,O++,Q.updateMatrices(T),T.castShadow&&P++),i.spotLightMatrix[y]=Q.matrix,T.castShadow){const W=t.get(T);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,i.spotShadow[y]=W,i.spotShadowMap[y]=ce,w++}y++}else if(T.isRectAreaLight){const K=e.get(T);K.color.copy(B).multiplyScalar(G),K.halfWidth.set(T.width*.5,0,0),K.halfHeight.set(0,T.height*.5,0),i.rectArea[g]=K,g++}else if(T.isPointLight){const K=e.get(T);if(K.color.copy(T.color).multiplyScalar(T.intensity),K.distance=T.distance,K.decay=T.decay,T.castShadow){const Q=T.shadow,W=t.get(T);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,W.shadowCameraNear=Q.camera.near,W.shadowCameraFar=Q.camera.far,i.pointShadow[_]=W,i.pointShadowMap[_]=ce,i.pointShadowMatrix[_]=T.shadow.matrix,b++}i.point[_]=K,_++}else if(T.isHemisphereLight){const K=e.get(T);K.skyColor.copy(T.color).multiplyScalar(G),K.groundColor.copy(T.groundColor).multiplyScalar(G),i.hemi[m]=K,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==p||L.pointLength!==_||L.spotLength!==y||L.rectAreaLength!==g||L.hemiLength!==m||L.numDirectionalShadows!==A||L.numPointShadows!==b||L.numSpotShadows!==w||L.numSpotMaps!==O||L.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=g,i.point.length=_,i.hemi.length=m,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=w+O-P,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=C,L.directionalLength=p,L.pointLength=_,L.spotLength=y,L.rectAreaLength=g,L.hemiLength=m,L.numDirectionalShadows=A,L.numPointShadows=b,L.numSpotShadows=w,L.numSpotMaps=O,L.numLightProbes=C,i.version=bA++)}u(a,"setup");function l(c,h){let d=0,f=0,p=0,_=0,y=0;const g=h.matrixWorldInverse;for(let m=0,A=c.length;m<A;m++){const b=c[m];if(b.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),d++}else if(b.isSpotLight){const w=i.spot[p];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),p++}else if(b.isRectAreaLight){const w=i.rectArea[_];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(g),f++}else if(b.isHemisphereLight){const w=i.hemi[y];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(g),y++}}}return u(l,"setupView"),{setup:a,setupView:l,state:i}}u(TA,"WebGLLights");function z_(n){const e=new TA(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}u(s,"init");function r(h){t.push(h)}u(r,"pushLight");function o(h){i.push(h)}u(o,"pushShadow");function a(){e.setup(t)}u(a,"setupLights");function l(h){e.setupView(t,h)}u(l,"setupLightsView");const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}u(z_,"WebGLRenderState");function AA(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new z_(n),e.set(s,[a])):r>=o.length?(a=new z_(n),o.push(a)):a=o[r],a}u(t,"get");function i(){e=new WeakMap}return u(i,"dispose"),{get:t,dispose:i}}u(AA,"WebGLRenderStates");const hp=class hp extends En{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};u(hp,"MeshDepthMaterial");let tl=hp;const dp=class dp extends En{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};u(dp,"MeshDistanceMaterial");let xh=dp;const wA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CA=`uniform sampler2D shadow_pass;
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
}`;function RA(n,e,t){let i=new To;const s=new ve,r=new ve,o=new at,a=new tl({depthPacking:X0}),l=new xh,c={},h=t.maxTextureSize,d={[oi]:mn,[mn]:oi,[cn]:cn},f=new St({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:wA,fragmentShader:CA}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new en;_.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Lt(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=P0;let m=this.type;this.render=function(P,C,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;const ie=n.getRenderTarget(),M=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),B=n.state;B.setBlending(zt),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const G=m!==gi&&this.type===gi,ee=m===gi&&this.type!==gi;for(let ce=0,K=P.length;ce<K;ce++){const Q=P[ce],W=Q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const ge=W.getFrameExtents();if(s.multiply(ge),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ge.x),s.x=r.x*ge.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ge.y),s.y=r.y*ge.y,W.mapSize.y=r.y)),W.map===null||G===!0||ee===!0){const Ae=this.type!==gi?{minFilter:$t,magFilter:$t}:{};W.map!==null&&W.map.dispose(),W.map=new Pt(s.x,s.y,Ae),W.map.texture.name=Q.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const xe=W.getViewportCount();for(let Ae=0;Ae<xe;Ae++){const je=W.getViewport(Ae);o.set(r.x*je.x,r.y*je.y,r.x*je.z,r.y*je.w),B.viewport(o),W.updateMatrices(Q,Ae),i=W.getFrustum(),w(C,L,W.camera,Q,this.type)}W.isPointLightShadow!==!0&&this.type===gi&&A(W,L),W.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(ie,M,T)};function A(P,C){const L=e.update(y);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Pt(s.x,s.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(C,null,L,f,y,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(C,null,L,p,y,null)}u(A,"VSMPass");function b(P,C,L,ie){let M=null;const T=L.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(T!==void 0)M=T;else if(M=L.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const B=M.uuid,G=C.uuid;let ee=c[B];ee===void 0&&(ee={},c[B]=ee);let ce=ee[G];ce===void 0&&(ce=M.clone(),ee[G]=ce,C.addEventListener("dispose",O)),M=ce}if(M.visible=C.visible,M.wireframe=C.wireframe,ie===gi?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:d[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=n.properties.get(M);B.light=L}return M}u(b,"getDepthMaterial");function w(P,C,L,ie,M){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===gi)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,P.matrixWorld);const G=e.update(P),ee=P.material;if(Array.isArray(ee)){const ce=G.groups;for(let K=0,Q=ce.length;K<Q;K++){const W=ce[K],ge=ee[W.materialIndex];if(ge&&ge.visible){const xe=b(P,ge,ie,M);P.onBeforeShadow(n,P,C,L,G,xe,W),n.renderBufferDirect(L,null,G,xe,P,W),P.onAfterShadow(n,P,C,L,G,xe,W)}}}else if(ee.visible){const ce=b(P,ee,ie,M);P.onBeforeShadow(n,P,C,L,G,ce,null),n.renderBufferDirect(L,null,G,ce,P,null),P.onAfterShadow(n,P,C,L,G,ce,null)}}const B=P.children;for(let G=0,ee=B.length;G<ee;G++)w(B[G],C,L,ie,M)}u(w,"renderObject");function O(P){P.target.removeEventListener("dispose",O);for(const L in c){const ie=c[L],M=P.target.uuid;M in ie&&(ie[M].dispose(),delete ie[M])}}u(O,"onMaterialDispose")}u(RA,"WebGLShadowMap");const PA={[Tu]:Au,[wu]:Pu,[Cu]:Du,[br]:Ru,[Au]:Tu,[Pu]:wu,[Du]:Cu,[Ru]:br};function DA(n){function e(){let N=!1;const Ee=new at;let J=null;const le=new at(0,0,0,0);return{setMask:function(Se){J!==Se&&!N&&(n.colorMask(Se,Se,Se,Se),J=Se)},setLocked:function(Se){N=Se},setClear:function(Se,Te,et,Et,un){un===!0&&(Se*=Et,Te*=Et,et*=Et),Ee.set(Se,Te,et,Et),le.equals(Ee)===!1&&(n.clearColor(Se,Te,et,Et),le.copy(Ee))},reset:function(){N=!1,J=null,le.set(-1,0,0,0)}}}u(e,"ColorBuffer");function t(){let N=!1,Ee=!1,J=null,le=null,Se=null;return{setReversed:function(Te){Ee=Te},setTest:function(Te){Te?_e(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function(Te){J!==Te&&!N&&(n.depthMask(Te),J=Te)},setFunc:function(Te){if(Ee&&(Te=PA[Te]),le!==Te){switch(Te){case Tu:n.depthFunc(n.NEVER);break;case Au:n.depthFunc(n.ALWAYS);break;case wu:n.depthFunc(n.LESS);break;case br:n.depthFunc(n.LEQUAL);break;case Cu:n.depthFunc(n.EQUAL);break;case Ru:n.depthFunc(n.GEQUAL);break;case Pu:n.depthFunc(n.GREATER);break;case Du:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}le=Te}},setLocked:function(Te){N=Te},setClear:function(Te){Se!==Te&&(n.clearDepth(Te),Se=Te)},reset:function(){N=!1,J=null,le=null,Se=null}}}u(t,"DepthBuffer");function i(){let N=!1,Ee=null,J=null,le=null,Se=null,Te=null,et=null,Et=null,un=null;return{setTest:function(ot){N||(ot?_e(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(ot){Ee!==ot&&!N&&(n.stencilMask(ot),Ee=ot)},setFunc:function(ot,hn,li){(J!==ot||le!==hn||Se!==li)&&(n.stencilFunc(ot,hn,li),J=ot,le=hn,Se=li)},setOp:function(ot,hn,li){(Te!==ot||et!==hn||Et!==li)&&(n.stencilOp(ot,hn,li),Te=ot,et=hn,Et=li)},setLocked:function(ot){N=ot},setClear:function(ot){un!==ot&&(n.clearStencil(ot),un=ot)},reset:function(){N=!1,Ee=null,J=null,le=null,Se=null,Te=null,et=null,Et=null,un=null}}}u(i,"StencilBuffer");const s=new e,r=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},h={},d=new WeakMap,f=[],p=null,_=!1,y=null,g=null,m=null,A=null,b=null,w=null,O=null,P=new we(0,0,0),C=0,L=!1,ie=null,M=null,T=null,B=null,G=null;const ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,K=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Q)[1]),ce=K>=1):Q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),ce=K>=2);let W=null,ge={};const xe=n.getParameter(n.SCISSOR_BOX),Ae=n.getParameter(n.VIEWPORT),je=new at().fromArray(xe),it=new at().fromArray(Ae);function ne(N,Ee,J,le){const Se=new Uint8Array(4),Te=n.createTexture();n.bindTexture(N,Te),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let et=0;et<J;et++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(Ee,0,n.RGBA,1,1,le,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(Ee+et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return Te}u(ne,"createTexture");const de={};de[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),_e(n.DEPTH_TEST),r.setFunc(br),V(!1),Z(jg),_e(n.CULL_FACE),x(zt);function _e(N){c[N]!==!0&&(n.enable(N),c[N]=!0)}u(_e,"enable");function ye(N){c[N]!==!1&&(n.disable(N),c[N]=!1)}u(ye,"disable");function Ve(N,Ee){return h[N]!==Ee?(n.bindFramebuffer(N,Ee),h[N]=Ee,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Ee),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Ee),!0):!1}u(Ve,"bindFramebuffer");function Ue(N,Ee){let J=f,le=!1;if(N){J=d.get(Ee),J===void 0&&(J=[],d.set(Ee,J));const Se=N.textures;if(J.length!==Se.length||J[0]!==n.COLOR_ATTACHMENT0){for(let Te=0,et=Se.length;Te<et;Te++)J[Te]=n.COLOR_ATTACHMENT0+Te;J.length=Se.length,le=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,le=!0);le&&n.drawBuffers(J)}u(Ue,"drawBuffers");function Ke(N){return p!==N?(n.useProgram(N),p=N,!0):!1}u(Ke,"useProgram");const rt={[vi]:n.FUNC_ADD,[$y]:n.FUNC_SUBTRACT,[Yy]:n.FUNC_REVERSE_SUBTRACT};rt[Ky]=n.MIN,rt[qy]=n.MAX;const Qe={[Su]:n.ZERO,[Zy]:n.ONE,[Jy]:n.SRC_COLOR,[bu]:n.SRC_ALPHA,[nM]:n.SRC_ALPHA_SATURATE,[I0]:n.DST_COLOR,[D0]:n.DST_ALPHA,[Qy]:n.ONE_MINUS_SRC_COLOR,[Eu]:n.ONE_MINUS_SRC_ALPHA,[tM]:n.ONE_MINUS_DST_COLOR,[eM]:n.ONE_MINUS_DST_ALPHA,[iM]:n.CONSTANT_COLOR,[sM]:n.ONE_MINUS_CONSTANT_COLOR,[rM]:n.CONSTANT_ALPHA,[oM]:n.ONE_MINUS_CONSTANT_ALPHA};function x(N,Ee,J,le,Se,Te,et,Et,un,ot){if(N===zt){_===!0&&(ye(n.BLEND),_=!1);return}if(_===!1&&(_e(n.BLEND),_=!0),N!==Mu){if(N!==y||ot!==L){if((g!==vi||b!==vi)&&(n.blendEquation(n.FUNC_ADD),g=vi,b=vi),ot)switch(N){case vr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yu:n.blendFunc(n.ONE,n.ONE);break;case Xg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $g:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case vr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Xg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $g:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}m=null,A=null,w=null,O=null,P.set(0,0,0),C=0,y=N,L=ot}return}Se=Se||Ee,Te=Te||J,et=et||le,(Ee!==g||Se!==b)&&(n.blendEquationSeparate(rt[Ee],rt[Se]),g=Ee,b=Se),(J!==m||le!==A||Te!==w||et!==O)&&(n.blendFuncSeparate(Qe[J],Qe[le],Qe[Te],Qe[et]),m=J,A=le,w=Te,O=et),(Et.equals(P)===!1||un!==C)&&(n.blendColor(Et.r,Et.g,Et.b,un),P.copy(Et),C=un),y=N,L=!1}u(x,"setBlending");function I(N,Ee){N.side===cn?ye(n.CULL_FACE):_e(n.CULL_FACE);let J=N.side===mn;Ee&&(J=!J),V(J),N.blending===vr&&N.transparent===!1?x(zt):x(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),s.setMask(N.colorWrite);const le=N.stencilWrite;o.setTest(le),le&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),re(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?_e(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}u(I,"setMaterial");function V(N){ie!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),ie=N)}u(V,"setFlipSided");function Z(N){N!==Wy?(_e(n.CULL_FACE),N!==M&&(N===jg?n.cullFace(n.BACK):N===jy?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),M=N}u(Z,"setCullFace");function j(N){N!==T&&(ce&&n.lineWidth(N),T=N)}u(j,"setLineWidth");function re(N,Ee,J){N?(_e(n.POLYGON_OFFSET_FILL),(B!==Ee||G!==J)&&(n.polygonOffset(Ee,J),B=Ee,G=J)):ye(n.POLYGON_OFFSET_FILL)}u(re,"setPolygonOffset");function te(N){N?_e(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}u(te,"setScissorTest");function S(N){N===void 0&&(N=n.TEXTURE0+ee-1),W!==N&&(n.activeTexture(N),W=N)}u(S,"activeTexture");function v(N,Ee,J){J===void 0&&(W===null?J=n.TEXTURE0+ee-1:J=W);let le=ge[J];le===void 0&&(le={type:void 0,texture:void 0},ge[J]=le),(le.type!==N||le.texture!==Ee)&&(W!==J&&(n.activeTexture(J),W=J),n.bindTexture(N,Ee||de[N]),le.type=N,le.texture=Ee)}u(v,"bindTexture");function R(){const N=ge[W];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}u(R,"unbindTexture");function U(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}u(U,"compressedTexImage2D");function X(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}u(X,"compressedTexImage3D");function k(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}u(k,"texSubImage2D");function ue(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}u(ue,"texSubImage3D");function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}u(oe,"compressedTexSubImage2D");function he(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}u(he,"compressedTexSubImage3D");function Pe(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}u(Pe,"texStorage2D");function ae(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}u(ae,"texStorage3D");function pe(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}u(pe,"texImage2D");function Oe(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}u(Oe,"texImage3D");function Fe(N){je.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),je.copy(N))}u(Fe,"scissor");function Me(N){it.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),it.copy(N))}u(Me,"viewport");function qe(N,Ee){let J=l.get(Ee);J===void 0&&(J=new WeakMap,l.set(Ee,J));let le=J.get(N);le===void 0&&(le=n.getUniformBlockIndex(Ee,N.name),J.set(N,le))}u(qe,"updateUBOMapping");function De(N,Ee){const le=l.get(Ee).get(N);a.get(Ee)!==le&&(n.uniformBlockBinding(Ee,le,N.__bindingPointIndex),a.set(Ee,le))}u(De,"uniformBlockBinding");function Ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},W=null,ge={},h={},d=new WeakMap,f=[],p=null,_=!1,y=null,g=null,m=null,A=null,b=null,w=null,O=null,P=new we(0,0,0),C=0,L=!1,ie=null,M=null,T=null,B=null,G=null,je.set(0,0,n.canvas.width,n.canvas.height),it.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return u(Ze,"reset"),{buffers:{color:s,depth:r,stencil:o},enable:_e,disable:ye,bindFramebuffer:Ve,drawBuffers:Ue,useProgram:Ke,setBlending:x,setMaterial:I,setFlipSided:V,setCullFace:Z,setLineWidth:j,setPolygonOffset:re,setScissorTest:te,activeTexture:S,bindTexture:v,unbindTexture:R,compressedTexImage2D:U,compressedTexImage3D:X,texImage2D:pe,texImage3D:Oe,updateUBOMapping:qe,uniformBlockBinding:De,texStorage2D:Pe,texStorage3D:ae,texSubImage2D:k,texSubImage3D:ue,compressedTexSubImage2D:oe,compressedTexSubImage3D:he,scissor:Fe,viewport:Me,reset:Ze}}u(DA,"WebGLState");function k_(n,e,t,i){const s=IA(i);switch(t){case z0:return n*e;case V0:return n*e;case H0:return n*e*2;case nf:return n*e/s.components*s.byteLength;case sf:return n*e/s.components*s.byteLength;case G0:return n*e*2/s.components*s.byteLength;case rf:return n*e*2/s.components*s.byteLength;case k0:return n*e*3/s.components*s.byteLength;case In:return n*e*4/s.components*s.byteLength;case of:return n*e*4/s.components*s.byteLength;case Aa:case wa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ca:case Ra:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ou:case Fu:return Math.max(n,16)*Math.max(e,8)/4;case Nu:case Uu:return Math.max(n,8)*Math.max(e,8)/2;case Bu:case zu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ku:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Gu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Wu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ju:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Xu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case $u:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Yu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ku:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case qu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Zu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ju:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Qu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case eh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Pa:case th:case nh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case W0:case ih:return Math.ceil(n/4)*Math.ceil(e/4)*8;case sh:case rh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}u(k_,"getByteLength");function IA(n){switch(n){case Si:case U0:return{byteLength:1,components:1};case yo:case F0:case pn:return{byteLength:2,components:1};case ef:case tf:return{byteLength:2,components:4};case Fs:case Qd:case jn:return{byteLength:4,components:1};case B0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}u(IA,"getTextureTypeByteLength");function LA(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ve,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,v){return p?new OffscreenCanvas(S,v):bo("canvas")}u(_,"createCanvas");function y(S,v,R){let U=1;const X=te(S);if((X.width>R||X.height>R)&&(U=R/Math.max(X.width,X.height)),U<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const k=Math.floor(U*X.width),ue=Math.floor(U*X.height);d===void 0&&(d=_(k,ue));const oe=v?_(k,ue):d;return oe.width=k,oe.height=ue,oe.getContext("2d").drawImage(S,0,0,k,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+k+"x"+ue+")."),oe}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),S;return S}u(y,"resizeImage");function g(S){return S.generateMipmaps&&S.minFilter!==$t&&S.minFilter!==Sn}u(g,"textureNeedsGenerateMipmaps");function m(S){n.generateMipmap(S)}u(m,"generateMipmap");function A(S,v,R,U,X=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let k=v;if(v===n.RED&&(R===n.FLOAT&&(k=n.R32F),R===n.HALF_FLOAT&&(k=n.R16F),R===n.UNSIGNED_BYTE&&(k=n.R8)),v===n.RED_INTEGER&&(R===n.UNSIGNED_BYTE&&(k=n.R8UI),R===n.UNSIGNED_SHORT&&(k=n.R16UI),R===n.UNSIGNED_INT&&(k=n.R32UI),R===n.BYTE&&(k=n.R8I),R===n.SHORT&&(k=n.R16I),R===n.INT&&(k=n.R32I)),v===n.RG&&(R===n.FLOAT&&(k=n.RG32F),R===n.HALF_FLOAT&&(k=n.RG16F),R===n.UNSIGNED_BYTE&&(k=n.RG8)),v===n.RG_INTEGER&&(R===n.UNSIGNED_BYTE&&(k=n.RG8UI),R===n.UNSIGNED_SHORT&&(k=n.RG16UI),R===n.UNSIGNED_INT&&(k=n.RG32UI),R===n.BYTE&&(k=n.RG8I),R===n.SHORT&&(k=n.RG16I),R===n.INT&&(k=n.RG32I)),v===n.RGB_INTEGER&&(R===n.UNSIGNED_BYTE&&(k=n.RGB8UI),R===n.UNSIGNED_SHORT&&(k=n.RGB16UI),R===n.UNSIGNED_INT&&(k=n.RGB32UI),R===n.BYTE&&(k=n.RGB8I),R===n.SHORT&&(k=n.RGB16I),R===n.INT&&(k=n.RGB32I)),v===n.RGBA_INTEGER&&(R===n.UNSIGNED_BYTE&&(k=n.RGBA8UI),R===n.UNSIGNED_SHORT&&(k=n.RGBA16UI),R===n.UNSIGNED_INT&&(k=n.RGBA32UI),R===n.BYTE&&(k=n.RGBA8I),R===n.SHORT&&(k=n.RGBA16I),R===n.INT&&(k=n.RGBA32I)),v===n.RGB&&R===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),v===n.RGBA){const ue=X?Ga:st.getTransfer(U);R===n.FLOAT&&(k=n.RGBA32F),R===n.HALF_FLOAT&&(k=n.RGBA16F),R===n.UNSIGNED_BYTE&&(k=ue===gt?n.SRGB8_ALPHA8:n.RGBA8),R===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),R===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&e.get("EXT_color_buffer_float"),k}u(A,"getInternalFormat");function b(S,v){let R;return S?v===null||v===Fs||v===Bs?R=n.DEPTH24_STENCIL8:v===jn?R=n.DEPTH32F_STENCIL8:v===yo&&(R=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Fs||v===Bs?R=n.DEPTH_COMPONENT24:v===jn?R=n.DEPTH_COMPONENT32F:v===yo&&(R=n.DEPTH_COMPONENT16),R}u(b,"getInternalDepthFormat");function w(S,v){return g(S)===!0||S.isFramebufferTexture&&S.minFilter!==$t&&S.minFilter!==Sn?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}u(w,"getMipLevels");function O(S){const v=S.target;v.removeEventListener("dispose",O),C(v),v.isVideoTexture&&h.delete(v)}u(O,"onTextureDispose");function P(S){const v=S.target;v.removeEventListener("dispose",P),ie(v)}u(P,"onRenderTargetDispose");function C(S){const v=i.get(S);if(v.__webglInit===void 0)return;const R=S.source,U=f.get(R);if(U){const X=U[v.__cacheKey];X.usedTimes--,X.usedTimes===0&&L(S),Object.keys(U).length===0&&f.delete(R)}i.remove(S)}u(C,"deallocateTexture");function L(S){const v=i.get(S);n.deleteTexture(v.__webglTexture);const R=S.source,U=f.get(R);delete U[v.__cacheKey],o.memory.textures--}u(L,"deleteTexture");function ie(S){const v=i.get(S);if(S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(v.__webglFramebuffer[U]))for(let X=0;X<v.__webglFramebuffer[U].length;X++)n.deleteFramebuffer(v.__webglFramebuffer[U][X]);else n.deleteFramebuffer(v.__webglFramebuffer[U]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[U])}else{if(Array.isArray(v.__webglFramebuffer))for(let U=0;U<v.__webglFramebuffer.length;U++)n.deleteFramebuffer(v.__webglFramebuffer[U]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let U=0;U<v.__webglColorRenderbuffer.length;U++)v.__webglColorRenderbuffer[U]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[U]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const R=S.textures;for(let U=0,X=R.length;U<X;U++){const k=i.get(R[U]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),o.memory.textures--),i.remove(R[U])}i.remove(S)}u(ie,"deallocateRenderTarget");let M=0;function T(){M=0}u(T,"resetTextureUnits");function B(){const S=M;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),M+=1,S}u(B,"allocateTextureUnit");function G(S){const v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}u(G,"getTextureCacheKey");function ee(S,v){const R=i.get(S);if(S.isVideoTexture&&j(S),S.isRenderTargetTexture===!1&&S.version>0&&R.__version!==S.version){const U=S.image;if(U===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(R,S,v);return}}t.bindTexture(n.TEXTURE_2D,R.__webglTexture,n.TEXTURE0+v)}u(ee,"setTexture2D");function ce(S,v){const R=i.get(S);if(S.version>0&&R.__version!==S.version){it(R,S,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,R.__webglTexture,n.TEXTURE0+v)}u(ce,"setTexture2DArray");function K(S,v){const R=i.get(S);if(S.version>0&&R.__version!==S.version){it(R,S,v);return}t.bindTexture(n.TEXTURE_3D,R.__webglTexture,n.TEXTURE0+v)}u(K,"setTexture3D");function Q(S,v){const R=i.get(S);if(S.version>0&&R.__version!==S.version){ne(R,S,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+v)}u(Q,"setTextureCube");const W={[Ar]:n.REPEAT,[Xi]:n.CLAMP_TO_EDGE,[Ha]:n.MIRRORED_REPEAT},ge={[$t]:n.NEAREST,[O0]:n.NEAREST_MIPMAP_NEAREST,[$r]:n.NEAREST_MIPMAP_LINEAR,[Sn]:n.LINEAR,[Ta]:n.LINEAR_MIPMAP_NEAREST,[xi]:n.LINEAR_MIPMAP_LINEAR},xe={[MM]:n.NEVER,[wM]:n.ALWAYS,[SM]:n.LESS,[$0]:n.LEQUAL,[bM]:n.EQUAL,[AM]:n.GEQUAL,[EM]:n.GREATER,[TM]:n.NOTEQUAL};function Ae(S,v){if(v.type===jn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Sn||v.magFilter===Ta||v.magFilter===$r||v.magFilter===xi||v.minFilter===Sn||v.minFilter===Ta||v.minFilter===$r||v.minFilter===xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,W[v.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,W[v.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,W[v.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,ge[v.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,ge[v.minFilter]),v.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,xe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===$t||v.minFilter!==$r&&v.minFilter!==xi||v.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const R=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}u(Ae,"setTextureParameters");function je(S,v){let R=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",O));const U=v.source;let X=f.get(U);X===void 0&&(X={},f.set(U,X));const k=G(v);if(k!==S.__cacheKey){X[k]===void 0&&(X[k]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,R=!0),X[k].usedTimes++;const ue=X[S.__cacheKey];ue!==void 0&&(X[S.__cacheKey].usedTimes--,ue.usedTimes===0&&L(v)),S.__cacheKey=k,S.__webglTexture=X[k].texture}return R}u(je,"initTexture");function it(S,v,R){let U=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(U=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(U=n.TEXTURE_3D);const X=je(S,v),k=v.source;t.bindTexture(U,S.__webglTexture,n.TEXTURE0+R);const ue=i.get(k);if(k.version!==ue.__version||X===!0){t.activeTexture(n.TEXTURE0+R);const oe=st.getPrimaries(st.workingColorSpace),he=v.colorSpace===ji?null:st.getPrimaries(v.colorSpace),Pe=v.colorSpace===ji||oe===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let ae=y(v.image,!1,s.maxTextureSize);ae=re(v,ae);const pe=r.convert(v.format,v.colorSpace),Oe=r.convert(v.type);let Fe=A(v.internalFormat,pe,Oe,v.colorSpace,v.isVideoTexture);Ae(U,v);let Me;const qe=v.mipmaps,De=v.isVideoTexture!==!0,Ze=ue.__version===void 0||X===!0,N=k.dataReady,Ee=w(v,ae);if(v.isDepthTexture)Fe=b(v.format===zs,v.type),Ze&&(De?t.texStorage2D(n.TEXTURE_2D,1,Fe,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Fe,ae.width,ae.height,0,pe,Oe,null));else if(v.isDataTexture)if(qe.length>0){De&&Ze&&t.texStorage2D(n.TEXTURE_2D,Ee,Fe,qe[0].width,qe[0].height);for(let J=0,le=qe.length;J<le;J++)Me=qe[J],De?N&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,Me.width,Me.height,pe,Oe,Me.data):t.texImage2D(n.TEXTURE_2D,J,Fe,Me.width,Me.height,0,pe,Oe,Me.data);v.generateMipmaps=!1}else De?(Ze&&t.texStorage2D(n.TEXTURE_2D,Ee,Fe,ae.width,ae.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,pe,Oe,ae.data)):t.texImage2D(n.TEXTURE_2D,0,Fe,ae.width,ae.height,0,pe,Oe,ae.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){De&&Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Fe,qe[0].width,qe[0].height,ae.depth);for(let J=0,le=qe.length;J<le;J++)if(Me=qe[J],v.format!==In)if(pe!==null)if(De){if(N)if(v.layerUpdates.size>0){const Se=k_(Me.width,Me.height,v.format,v.type);for(const Te of v.layerUpdates){const et=Me.data.subarray(Te*Se/Me.data.BYTES_PER_ELEMENT,(Te+1)*Se/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,Te,Me.width,Me.height,1,pe,et,0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,Me.width,Me.height,ae.depth,pe,Me.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,Fe,Me.width,Me.height,ae.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,Me.width,Me.height,ae.depth,pe,Oe,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,Fe,Me.width,Me.height,ae.depth,0,pe,Oe,Me.data)}else{De&&Ze&&t.texStorage2D(n.TEXTURE_2D,Ee,Fe,qe[0].width,qe[0].height);for(let J=0,le=qe.length;J<le;J++)Me=qe[J],v.format!==In?pe!==null?De?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,Me.width,Me.height,pe,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,J,Fe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?N&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,Me.width,Me.height,pe,Oe,Me.data):t.texImage2D(n.TEXTURE_2D,J,Fe,Me.width,Me.height,0,pe,Oe,Me.data)}else if(v.isDataArrayTexture)if(De){if(Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Fe,ae.width,ae.height,ae.depth),N)if(v.layerUpdates.size>0){const J=k_(ae.width,ae.height,v.format,v.type);for(const le of v.layerUpdates){const Se=ae.data.subarray(le*J/ae.data.BYTES_PER_ELEMENT,(le+1)*J/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,ae.width,ae.height,1,pe,Oe,Se)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,pe,Oe,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Fe,ae.width,ae.height,ae.depth,0,pe,Oe,ae.data);else if(v.isData3DTexture)De?(Ze&&t.texStorage3D(n.TEXTURE_3D,Ee,Fe,ae.width,ae.height,ae.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,pe,Oe,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Fe,ae.width,ae.height,ae.depth,0,pe,Oe,ae.data);else if(v.isFramebufferTexture){if(Ze)if(De)t.texStorage2D(n.TEXTURE_2D,Ee,Fe,ae.width,ae.height);else{let J=ae.width,le=ae.height;for(let Se=0;Se<Ee;Se++)t.texImage2D(n.TEXTURE_2D,Se,Fe,J,le,0,pe,Oe,null),J>>=1,le>>=1}}else if(qe.length>0){if(De&&Ze){const J=te(qe[0]);t.texStorage2D(n.TEXTURE_2D,Ee,Fe,J.width,J.height)}for(let J=0,le=qe.length;J<le;J++)Me=qe[J],De?N&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,pe,Oe,Me):t.texImage2D(n.TEXTURE_2D,J,Fe,pe,Oe,Me);v.generateMipmaps=!1}else if(De){if(Ze){const J=te(ae);t.texStorage2D(n.TEXTURE_2D,Ee,Fe,J.width,J.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,Oe,ae)}else t.texImage2D(n.TEXTURE_2D,0,Fe,pe,Oe,ae);g(v)&&m(U),ue.__version=k.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}u(it,"uploadTexture");function ne(S,v,R){if(v.image.length!==6)return;const U=je(S,v),X=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+R);const k=i.get(X);if(X.version!==k.__version||U===!0){t.activeTexture(n.TEXTURE0+R);const ue=st.getPrimaries(st.workingColorSpace),oe=v.colorSpace===ji?null:st.getPrimaries(v.colorSpace),he=v.colorSpace===ji||ue===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Pe=v.isCompressedTexture||v.image[0].isCompressedTexture,ae=v.image[0]&&v.image[0].isDataTexture,pe=[];for(let le=0;le<6;le++)!Pe&&!ae?pe[le]=y(v.image[le],!0,s.maxCubemapSize):pe[le]=ae?v.image[le].image:v.image[le],pe[le]=re(v,pe[le]);const Oe=pe[0],Fe=r.convert(v.format,v.colorSpace),Me=r.convert(v.type),qe=A(v.internalFormat,Fe,Me,v.colorSpace),De=v.isVideoTexture!==!0,Ze=k.__version===void 0||U===!0,N=X.dataReady;let Ee=w(v,Oe);Ae(n.TEXTURE_CUBE_MAP,v);let J;if(Pe){De&&Ze&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,qe,Oe.width,Oe.height);for(let le=0;le<6;le++){J=pe[le].mipmaps;for(let Se=0;Se<J.length;Se++){const Te=J[Se];v.format!==In?Fe!==null?De?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se,0,0,Te.width,Te.height,Fe,Te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se,qe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se,0,0,Te.width,Te.height,Fe,Me,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se,qe,Te.width,Te.height,0,Fe,Me,Te.data)}}}else{if(J=v.mipmaps,De&&Ze){J.length>0&&Ee++;const le=te(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,qe,le.width,le.height)}for(let le=0;le<6;le++)if(ae){De?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,pe[le].width,pe[le].height,Fe,Me,pe[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,qe,pe[le].width,pe[le].height,0,Fe,Me,pe[le].data);for(let Se=0;Se<J.length;Se++){const et=J[Se].image[le].image;De?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se+1,0,0,et.width,et.height,Fe,Me,et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se+1,qe,et.width,et.height,0,Fe,Me,et.data)}}else{De?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Fe,Me,pe[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,qe,Fe,Me,pe[le]);for(let Se=0;Se<J.length;Se++){const Te=J[Se];De?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se+1,0,0,Fe,Me,Te.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se+1,qe,Fe,Me,Te.image[le])}}}g(v)&&m(n.TEXTURE_CUBE_MAP),k.__version=X.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}u(ne,"uploadCubeTexture");function de(S,v,R,U,X,k){const ue=r.convert(R.format,R.colorSpace),oe=r.convert(R.type),he=A(R.internalFormat,ue,oe,R.colorSpace);if(!i.get(v).__hasExternalTextures){const ae=Math.max(1,v.width>>k),pe=Math.max(1,v.height>>k);X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?t.texImage3D(X,k,he,ae,pe,v.depth,0,ue,oe,null):t.texImage2D(X,k,he,ae,pe,0,ue,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),Z(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,U,X,i.get(R).__webglTexture,0,V(v)):(X===n.TEXTURE_2D||X>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,U,X,i.get(R).__webglTexture,k),t.bindFramebuffer(n.FRAMEBUFFER,null)}u(de,"setupFrameBufferTexture");function _e(S,v,R){if(n.bindRenderbuffer(n.RENDERBUFFER,S),v.depthBuffer){const U=v.depthTexture,X=U&&U.isDepthTexture?U.type:null,k=b(v.stencilBuffer,X),ue=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=V(v);Z(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,k,v.width,v.height):R?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,k,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,k,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,S)}else{const U=v.textures;for(let X=0;X<U.length;X++){const k=U[X],ue=r.convert(k.format,k.colorSpace),oe=r.convert(k.type),he=A(k.internalFormat,ue,oe,k.colorSpace),Pe=V(v);R&&Z(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,he,v.width,v.height):Z(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe,he,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,he,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}u(_e,"setupRenderBufferStorage");function ye(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ee(v.depthTexture,0);const U=i.get(v.depthTexture).__webglTexture,X=V(v);if(v.depthTexture.format===xr)Z(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,U,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,U,0);else if(v.depthTexture.format===zs)Z(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,U,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,U,0);else throw new Error("Unknown depthTexture format")}u(ye,"setupDepthTexture");function Ve(S){const v=i.get(S),R=S.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==S.depthTexture){const U=S.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),U){const X=u(()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,U.removeEventListener("dispose",X)},"disposeEvent");U.addEventListener("dispose",X),v.__depthDisposeCallback=X}v.__boundDepthTexture=U}if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");ye(v.__webglFramebuffer,S)}else if(R){v.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[U]),v.__webglDepthbuffer[U]===void 0)v.__webglDepthbuffer[U]=n.createRenderbuffer(),_e(v.__webglDepthbuffer[U],S,!1);else{const X=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=v.__webglDepthbuffer[U];n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,k)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),_e(v.__webglDepthbuffer,S,!1);else{const U=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,U,n.RENDERBUFFER,X)}t.bindFramebuffer(n.FRAMEBUFFER,null)}u(Ve,"setupDepthRenderbuffer");function Ue(S,v,R){const U=i.get(S);v!==void 0&&de(U.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),R!==void 0&&Ve(S)}u(Ue,"rebindTextures");function Ke(S){const v=S.texture,R=i.get(S),U=i.get(v);S.addEventListener("dispose",P);const X=S.textures,k=S.isWebGLCubeRenderTarget===!0,ue=X.length>1;if(ue||(U.__webglTexture===void 0&&(U.__webglTexture=n.createTexture()),U.__version=v.version,o.memory.textures++),k){R.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0){R.__webglFramebuffer[oe]=[];for(let he=0;he<v.mipmaps.length;he++)R.__webglFramebuffer[oe][he]=n.createFramebuffer()}else R.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){R.__webglFramebuffer=[];for(let oe=0;oe<v.mipmaps.length;oe++)R.__webglFramebuffer[oe]=n.createFramebuffer()}else R.__webglFramebuffer=n.createFramebuffer();if(ue)for(let oe=0,he=X.length;oe<he;oe++){const Pe=i.get(X[oe]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&Z(S)===!1){R.__webglMultisampledFramebuffer=n.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let oe=0;oe<X.length;oe++){const he=X[oe];R.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,R.__webglColorRenderbuffer[oe]);const Pe=r.convert(he.format,he.colorSpace),ae=r.convert(he.type),pe=A(he.internalFormat,Pe,ae,he.colorSpace,S.isXRRenderTarget===!0),Oe=V(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,pe,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,R.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(R.__webglDepthRenderbuffer=n.createRenderbuffer(),_e(R.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture),Ae(n.TEXTURE_CUBE_MAP,v);for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)de(R.__webglFramebuffer[oe][he],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,he);else de(R.__webglFramebuffer[oe],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);g(v)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let oe=0,he=X.length;oe<he;oe++){const Pe=X[oe],ae=i.get(Pe);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),Ae(n.TEXTURE_2D,Pe),de(R.__webglFramebuffer,S,Pe,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),g(Pe)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(oe=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,U.__webglTexture),Ae(oe,v),v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)de(R.__webglFramebuffer[he],S,v,n.COLOR_ATTACHMENT0,oe,he);else de(R.__webglFramebuffer,S,v,n.COLOR_ATTACHMENT0,oe,0);g(v)&&m(oe),t.unbindTexture()}S.depthBuffer&&Ve(S)}u(Ke,"setupRenderTarget");function rt(S){const v=S.textures;for(let R=0,U=v.length;R<U;R++){const X=v[R];if(g(X)){const k=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ue=i.get(X).__webglTexture;t.bindTexture(k,ue),m(k),t.unbindTexture()}}}u(rt,"updateRenderTargetMipmap");const Qe=[],x=[];function I(S){if(S.samples>0){if(Z(S)===!1){const v=S.textures,R=S.width,U=S.height;let X=n.COLOR_BUFFER_BIT;const k=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(S),oe=v.length>1;if(oe)for(let he=0;he<v.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let he=0;he<v.length;he++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(X|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(X|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[he]);const Pe=i.get(v[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pe,0)}n.blitFramebuffer(0,0,R,U,0,0,R,U,X,n.NEAREST),l===!0&&(Qe.length=0,x.length=0,Qe.push(n.COLOR_ATTACHMENT0+he),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Qe.push(k),x.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,x)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Qe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let he=0;he<v.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,ue.__webglColorRenderbuffer[he]);const Pe=i.get(v[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,Pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const v=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}u(I,"updateMultisampleRenderTarget");function V(S){return Math.min(s.maxSamples,S.samples)}u(V,"getRenderTargetSamples");function Z(S){const v=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}u(Z,"useMultisampledRTT");function j(S){const v=o.render.frame;h.get(S)!==v&&(h.set(S,v),S.update())}u(j,"updateVideoTexture");function re(S,v){const R=S.colorSpace,U=S.format,X=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||R!==Yt&&R!==ji&&(st.getTransfer(R)===gt?(U!==In||X!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",R)),v}u(re,"verifyColorSpace");function te(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}u(te,"getDimensions"),this.allocateTextureUnit=B,this.resetTextureUnits=T,this.setTexture2D=ee,this.setTexture2DArray=ce,this.setTexture3D=K,this.setTextureCube=Q,this.rebindTextures=Ue,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Z}u(LA,"WebGLTextures");function NA(n,e){function t(i,s=ji){let r;const o=st.getTransfer(s);if(i===Si)return n.UNSIGNED_BYTE;if(i===ef)return n.UNSIGNED_SHORT_4_4_4_4;if(i===tf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===B0)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===U0)return n.BYTE;if(i===F0)return n.SHORT;if(i===yo)return n.UNSIGNED_SHORT;if(i===Qd)return n.INT;if(i===Fs)return n.UNSIGNED_INT;if(i===jn)return n.FLOAT;if(i===pn)return n.HALF_FLOAT;if(i===z0)return n.ALPHA;if(i===k0)return n.RGB;if(i===In)return n.RGBA;if(i===V0)return n.LUMINANCE;if(i===H0)return n.LUMINANCE_ALPHA;if(i===xr)return n.DEPTH_COMPONENT;if(i===zs)return n.DEPTH_STENCIL;if(i===nf)return n.RED;if(i===sf)return n.RED_INTEGER;if(i===G0)return n.RG;if(i===rf)return n.RG_INTEGER;if(i===of)return n.RGBA_INTEGER;if(i===Aa||i===wa||i===Ca||i===Ra)if(o===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nu||i===Ou||i===Uu||i===Fu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Nu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ou)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Uu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bu||i===zu||i===ku)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Bu||i===zu)return o===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ku)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Vu||i===Hu||i===Gu||i===Wu||i===ju||i===Xu||i===$u||i===Yu||i===Ku||i===qu||i===Zu||i===Ju||i===Qu||i===eh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Vu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ju)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$u)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Yu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ku)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ju)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===eh)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pa||i===th||i===nh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Pa)return o===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===th)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===nh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===W0||i===ih||i===sh||i===rh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Pa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ih)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Bs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return u(t,"convert"),{convert:t}}u(NA,"WebGLUtils");const fp=class fp extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}};u(fp,"ArrayCamera");let yh=fp;var Io;let $i=(Io=class extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},u(Io,"Group"),Io);const OA={type:"move"},pp=class pp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const g=t.getJointPose(y,i),m=this._getHandJoint(c,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(OA)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new $i;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};u(pp,"WebXRController");let ro=pp;const UA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FA=`
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

}`,mp=class mp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Qt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new St({vertexShader:UA,fragmentShader:FA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Lt(new Qa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};u(mp,"WebXRDepthSensing");let Mh=mp;const gp=class gp extends bi{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,_=null;const y=new Mh,g=t.getContextAttributes();let m=null,A=null;const b=[],w=[],O=new ve;let P=null;const C=new jt;C.layers.enable(1),C.viewport=new at;const L=new jt;L.layers.enable(2),L.viewport=new at;const ie=[C,L],M=new yh;M.layers.enable(1),M.layers.enable(2);let T=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let de=b[ne];return de===void 0&&(de=new ro,b[ne]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ne){let de=b[ne];return de===void 0&&(de=new ro,b[ne]=de),de.getGripSpace()},this.getHand=function(ne){let de=b[ne];return de===void 0&&(de=new ro,b[ne]=de),de.getHandSpace()};function G(ne){const de=w.indexOf(ne.inputSource);if(de===-1)return;const _e=b[de];_e!==void 0&&(_e.update(ne.inputSource,ne.frame,c||o),_e.dispatchEvent({type:ne.type,data:ne.inputSource}))}u(G,"onSessionEvent");function ee(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",ce);for(let ne=0;ne<b.length;ne++){const de=w[ne];de!==null&&(w[ne]=null,b[ne].disconnect(de))}T=null,B=null,y.reset(),e.setRenderTarget(m),p=null,f=null,d=null,s=null,A=null,it.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}u(ee,"onSessionEnd"),this.setFramebufferScaleFactor=function(ne){r=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",ce),g.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(O),s.renderState.layers===void 0){const de={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new Pt(p.framebufferWidth,p.framebufferHeight,{format:In,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let de=null,_e=null,ye=null;g.depth&&(ye=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=g.stencil?zs:xr,_e=g.stencil?Bs:Fs);const Ve={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(Ve),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new Pt(f.textureWidth,f.textureHeight,{format:In,type:Si,depthTexture:new Ao(f.textureWidth,f.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),it.setContext(s),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ce(ne){for(let de=0;de<ne.removed.length;de++){const _e=ne.removed[de],ye=w.indexOf(_e);ye>=0&&(w[ye]=null,b[ye].disconnect(_e))}for(let de=0;de<ne.added.length;de++){const _e=ne.added[de];let ye=w.indexOf(_e);if(ye===-1){for(let Ue=0;Ue<b.length;Ue++)if(Ue>=w.length){w.push(_e),ye=Ue;break}else if(w[Ue]===null){w[Ue]=_e,ye=Ue;break}if(ye===-1)break}const Ve=b[ye];Ve&&Ve.connect(_e)}}u(ce,"onInputSourcesChange");const K=new D,Q=new D;function W(ne,de,_e){K.setFromMatrixPosition(de.matrixWorld),Q.setFromMatrixPosition(_e.matrixWorld);const ye=K.distanceTo(Q),Ve=de.projectionMatrix.elements,Ue=_e.projectionMatrix.elements,Ke=Ve[14]/(Ve[10]-1),rt=Ve[14]/(Ve[10]+1),Qe=(Ve[9]+1)/Ve[5],x=(Ve[9]-1)/Ve[5],I=(Ve[8]-1)/Ve[0],V=(Ue[8]+1)/Ue[0],Z=Ke*I,j=Ke*V,re=ye/(-I+V),te=re*-I;if(de.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(te),ne.translateZ(re),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Ve[10]===-1)ne.projectionMatrix.copy(de.projectionMatrix),ne.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const S=Ke+re,v=rt+re,R=Z-te,U=j+(ye-te),X=Qe*rt/v*S,k=x*rt/v*S;ne.projectionMatrix.makePerspective(R,U,X,k,S,v),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}u(W,"setProjectionFromUnion");function ge(ne,de){de===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(de.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}u(ge,"updateCamera"),this.updateCamera=function(ne){if(s===null)return;let de=ne.near,_e=ne.far;y.texture!==null&&(y.depthNear>0&&(de=y.depthNear),y.depthFar>0&&(_e=y.depthFar)),M.near=L.near=C.near=de,M.far=L.far=C.far=_e,(T!==M.near||B!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,B=M.far);const ye=ne.parent,Ve=M.cameras;ge(M,ye);for(let Ue=0;Ue<Ve.length;Ue++)ge(Ve[Ue],ye);Ve.length===2?W(M,C,L):M.projectionMatrix.copy(C.projectionMatrix),xe(ne,M,ye)};function xe(ne,de,_e){_e===null?ne.matrix.copy(de.matrixWorld):(ne.matrix.copy(_e.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(de.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(de.projectionMatrix),ne.projectionMatrixInverse.copy(de.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=wr*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}u(xe,"updateUserCamera"),this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(ne){l=ne,f!==null&&(f.fixedFoveation=ne),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ne)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let Ae=null;function je(ne,de){if(h=de.getViewerPose(c||o),_=de,h!==null){const _e=h.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let ye=!1;_e.length!==M.cameras.length&&(M.cameras.length=0,ye=!0);for(let Ue=0;Ue<_e.length;Ue++){const Ke=_e[Ue];let rt=null;if(p!==null)rt=p.getViewport(Ke);else{const x=d.getViewSubImage(f,Ke);rt=x.viewport,Ue===0&&(e.setRenderTargetTextures(A,x.colorTexture,f.ignoreDepthValues?void 0:x.depthStencilTexture),e.setRenderTarget(A))}let Qe=ie[Ue];Qe===void 0&&(Qe=new jt,Qe.layers.enable(Ue),Qe.viewport=new at,ie[Ue]=Qe),Qe.matrix.fromArray(Ke.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(Ke.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(rt.x,rt.y,rt.width,rt.height),Ue===0&&(M.matrix.copy(Qe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ye===!0&&M.cameras.push(Qe)}const Ve=s.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")){const Ue=d.getDepthInformation(_e[0]);Ue&&Ue.isValid&&Ue.texture&&y.init(e,Ue,s.renderState)}}for(let _e=0;_e<b.length;_e++){const ye=w[_e],Ve=b[_e];ye!==null&&Ve!==void 0&&Ve.update(ye,de,c||o)}Ae&&Ae(ne,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),_=null}u(je,"onAnimationFrame");const it=new Z0;it.setAnimationLoop(je),this.setAnimationLoop=function(ne){Ae=ne},this.dispose=function(){}}};u(gp,"WebXRManager");let Sh=gp;const Es=new Kn,BA=new Ge;function zA(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}u(t,"refreshTransformUniform");function i(g,m){m.color.getRGB(g.fogColor.value,q0(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}u(i,"refreshFogUniforms");function s(g,m,A,b,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&p(g,m,w)):m.isMeshMatcapMaterial?(r(g,m),_(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),y(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,A,b):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}u(s,"refreshMaterialUniforms");function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===mn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===mn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const A=e.get(m),b=A.envMap,w=A.envMapRotation;b&&(g.envMap.value=b,Es.copy(w),Es.x*=-1,Es.y*=-1,Es.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),g.envMapRotation.value.setFromMatrix4(BA.makeRotationFromEuler(Es)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}u(r,"refreshUniformsCommon");function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}u(o,"refreshUniformsLine");function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}u(a,"refreshUniformsDash");function l(g,m,A,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*A,g.scale.value=b*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}u(l,"refreshUniformsPoints");function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}u(c,"refreshUniformsSprites");function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}u(h,"refreshUniformsPhong");function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}u(d,"refreshUniformsToon");function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}u(f,"refreshUniformsStandard");function p(g,m,A){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===mn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=A.texture,g.transmissionSamplerSize.value.set(A.width,A.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}u(p,"refreshUniformsPhysical");function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}u(_,"refreshUniformsMatcap");function y(g,m){const A=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(A.matrixWorld),g.nearDistance.value=A.shadow.camera.near,g.farDistance.value=A.shadow.camera.far}return u(y,"refreshUniformsDistance"),{refreshFogUniforms:i,refreshMaterialUniforms:s}}u(zA,"WebGLMaterials");function kA(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,b){const w=b.program;i.uniformBlockBinding(A,w)}u(l,"bind");function c(A,b){let w=s[A.id];w===void 0&&(_(A),w=h(A),s[A.id]=w,A.addEventListener("dispose",g));const O=b.program;i.updateUBOMapping(A,O);const P=e.render.frame;r[A.id]!==P&&(f(A),r[A.id]=P)}u(c,"update");function h(A){const b=d();A.__bindingPointIndex=b;const w=n.createBuffer(),O=A.__size,P=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,O,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,w),w}u(h,"createBuffer");function d(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}u(d,"allocateBindingPointIndex");function f(A){const b=s[A.id],w=A.uniforms,O=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let P=0,C=w.length;P<C;P++){const L=Array.isArray(w[P])?w[P]:[w[P]];for(let ie=0,M=L.length;ie<M;ie++){const T=L[ie];if(p(T,P,ie,O)===!0){const B=T.__offset,G=Array.isArray(T.value)?T.value:[T.value];let ee=0;for(let ce=0;ce<G.length;ce++){const K=G[ce],Q=y(K);typeof K=="number"||typeof K=="boolean"?(T.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,B+ee,T.__data)):K.isMatrix3?(T.__data[0]=K.elements[0],T.__data[1]=K.elements[1],T.__data[2]=K.elements[2],T.__data[3]=0,T.__data[4]=K.elements[3],T.__data[5]=K.elements[4],T.__data[6]=K.elements[5],T.__data[7]=0,T.__data[8]=K.elements[6],T.__data[9]=K.elements[7],T.__data[10]=K.elements[8],T.__data[11]=0):(K.toArray(T.__data,ee),ee+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}u(f,"updateBufferData");function p(A,b,w,O){const P=A.value,C=b+"_"+w;if(O[C]===void 0)return typeof P=="number"||typeof P=="boolean"?O[C]=P:O[C]=P.clone(),!0;{const L=O[C];if(typeof P=="number"||typeof P=="boolean"){if(L!==P)return O[C]=P,!0}else if(L.equals(P)===!1)return L.copy(P),!0}return!1}u(p,"hasUniformChanged");function _(A){const b=A.uniforms;let w=0;const O=16;for(let C=0,L=b.length;C<L;C++){const ie=Array.isArray(b[C])?b[C]:[b[C]];for(let M=0,T=ie.length;M<T;M++){const B=ie[M],G=Array.isArray(B.value)?B.value:[B.value];for(let ee=0,ce=G.length;ee<ce;ee++){const K=G[ee],Q=y(K),W=w%O,ge=W%Q.boundary,xe=W+ge;w+=ge,xe!==0&&O-xe<Q.storage&&(w+=O-xe),B.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=w,w+=Q.storage}}}const P=w%O;return P>0&&(w+=O-P),A.__size=w,A.__cache={},this}u(_,"prepareUniformsGroup");function y(A){const b={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(b.boundary=4,b.storage=4):A.isVector2?(b.boundary=8,b.storage=8):A.isVector3||A.isColor?(b.boundary=16,b.storage=12):A.isVector4?(b.boundary=16,b.storage=16):A.isMatrix3?(b.boundary=48,b.storage=48):A.isMatrix4?(b.boundary=64,b.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),b}u(y,"getUniformSize");function g(A){const b=A.target;b.removeEventListener("dispose",g);const w=o.indexOf(b.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}u(g,"onUniformsGroupsDispose");function m(){for(const A in s)n.deleteBuffer(s[A]);o=[],s={},r={}}return u(m,"dispose"),{bind:l,update:c,dispose:m}}u(kA,"WebGLUniformsGroups");const _p=class _p{constructor(e={}){const{canvas:t=WM(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),_=new Int32Array(4);let y=null,g=null;const m=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this.toneMapping=Zi,this.toneMappingExposure=1;const b=this;let w=!1,O=0,P=0,C=null,L=-1,ie=null;const M=new at,T=new at;let B=null;const G=new we(0);let ee=0,ce=t.width,K=t.height,Q=1,W=null,ge=null;const xe=new at(0,0,ce,K),Ae=new at(0,0,ce,K);let je=!1;const it=new To;let ne=!1,de=!1;const _e=new Ge,ye=new Ge,Ve=new D,Ue=new at,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function Qe(){return C===null?Q:1}u(Qe,"getTargetPixelRatio");let x=i;function I(E,F){return t.getContext(E,F)}u(I,"getContext");try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jd}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",Te,!1),x===null){const F="webgl2";if(x=I(F,E),x===null)throw I(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let V,Z,j,re,te,S,v,R,U,X,k,ue,oe,he,Pe,ae,pe,Oe,Fe,Me,qe,De,Ze,N;function Ee(){V=new nT(x),V.init(),De=new NA(x,V),Z=new qE(x,V,e,De),j=new DA(x),Z.reverseDepthBuffer&&j.buffers.depth.setReversed(!0),re=new rT(x),te=new vA,S=new LA(x,V,j,te,Z,De,re),v=new JE(b),R=new tT(b),U=new dS(x),Ze=new YE(x,U),X=new iT(x,U,re,Ze),k=new aT(x,X,U,re),Fe=new oT(x,Z,S),ae=new ZE(te),ue=new _A(b,v,R,V,Z,Ze,ae),oe=new zA(b,te),he=new yA,Pe=new AA(V),Oe=new $E(b,v,R,j,k,f,l),pe=new RA(b,k,Z),N=new kA(x,re,Z,j),Me=new KE(x,V,re),qe=new sT(x,V,re),re.programs=ue.programs,b.capabilities=Z,b.extensions=V,b.properties=te,b.renderLists=he,b.shadowMap=pe,b.state=j,b.info=re}u(Ee,"initGLContext"),Ee();const J=new Sh(b,x);this.xr=J,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const E=V.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=V.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(E){E!==void 0&&(Q=E,this.setSize(ce,K,!1))},this.getSize=function(E){return E.set(ce,K)},this.setSize=function(E,F,$=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=E,K=F,t.width=Math.floor(E*Q),t.height=Math.floor(F*Q),$===!0&&(t.style.width=E+"px",t.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(ce*Q,K*Q).floor()},this.setDrawingBufferSize=function(E,F,$){ce=E,K=F,Q=$,t.width=Math.floor(E*$),t.height=Math.floor(F*$),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(M)},this.getViewport=function(E){return E.copy(xe)},this.setViewport=function(E,F,$,Y){E.isVector4?xe.set(E.x,E.y,E.z,E.w):xe.set(E,F,$,Y),j.viewport(M.copy(xe).multiplyScalar(Q).round())},this.getScissor=function(E){return E.copy(Ae)},this.setScissor=function(E,F,$,Y){E.isVector4?Ae.set(E.x,E.y,E.z,E.w):Ae.set(E,F,$,Y),j.scissor(T.copy(Ae).multiplyScalar(Q).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(E){j.setScissorTest(je=E)},this.setOpaqueSort=function(E){W=E},this.setTransparentSort=function(E){ge=E},this.getClearColor=function(E){return E.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(E=!0,F=!0,$=!0){let Y=0;if(E){let z=!1;if(C!==null){const fe=C.texture.format;z=fe===of||fe===rf||fe===sf}if(z){const fe=C.texture.type,be=fe===Si||fe===Fs||fe===yo||fe===Bs||fe===ef||fe===tf,Ce=Oe.getClearColor(),Re=Oe.getClearAlpha(),ke=Ce.r,He=Ce.g,Ie=Ce.b;be?(p[0]=ke,p[1]=He,p[2]=Ie,p[3]=Re,x.clearBufferuiv(x.COLOR,0,p)):(_[0]=ke,_[1]=He,_[2]=Ie,_[3]=Re,x.clearBufferiv(x.COLOR,0,_))}else Y|=x.COLOR_BUFFER_BIT}F&&(Y|=x.DEPTH_BUFFER_BIT,x.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),$&&(Y|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),he.dispose(),Pe.dispose(),te.dispose(),v.dispose(),R.dispose(),k.dispose(),Ze.dispose(),N.dispose(),ue.dispose(),J.dispose(),J.removeEventListener("sessionstart",Qm),J.removeEventListener("sessionend",eg),ps.stop()};function le(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}u(le,"onContextLost");function Se(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const E=re.autoReset,F=pe.enabled,$=pe.autoUpdate,Y=pe.needsUpdate,z=pe.type;Ee(),re.autoReset=E,pe.enabled=F,pe.autoUpdate=$,pe.needsUpdate=Y,pe.type=z}u(Se,"onContextRestore");function Te(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}u(Te,"onContextCreationError");function et(E){const F=E.target;F.removeEventListener("dispose",et),Et(F)}u(et,"onMaterialDispose");function Et(E){un(E),te.remove(E)}u(Et,"deallocateMaterial");function un(E){const F=te.get(E).programs;F!==void 0&&(F.forEach(function($){ue.releaseProgram($)}),E.isShaderMaterial&&ue.releaseShaderCache(E))}u(un,"releaseMaterialProgramReferences"),this.renderBufferDirect=function(E,F,$,Y,z,fe){F===null&&(F=Ke);const be=z.isMesh&&z.matrixWorld.determinant()<0,Ce=l1(E,F,$,Y,z);j.setMaterial(Y,be);let Re=$.index,ke=1;if(Y.wireframe===!0){if(Re=X.getWireframeAttribute($),Re===void 0)return;ke=2}const He=$.drawRange,Ie=$.attributes.position;let ht=He.start*ke,mt=(He.start+He.count)*ke;fe!==null&&(ht=Math.max(ht,fe.start*ke),mt=Math.min(mt,(fe.start+fe.count)*ke)),Re!==null?(ht=Math.max(ht,0),mt=Math.min(mt,Re.count)):Ie!=null&&(ht=Math.max(ht,0),mt=Math.min(mt,Ie.count));const Mt=mt-ht;if(Mt<0||Mt===1/0)return;Ze.setup(z,Y,Ce,$,Re);let vn,ct=Me;if(Re!==null&&(vn=U.get(Re),ct=qe,ct.setIndex(vn)),z.isMesh)Y.wireframe===!0?(j.setLineWidth(Y.wireframeLinewidth*Qe()),ct.setMode(x.LINES)):ct.setMode(x.TRIANGLES);else if(z.isLine){let Le=Y.linewidth;Le===void 0&&(Le=1),j.setLineWidth(Le*Qe()),z.isLineSegments?ct.setMode(x.LINES):z.isLineLoop?ct.setMode(x.LINE_LOOP):ct.setMode(x.LINE_STRIP)}else z.isPoints?ct.setMode(x.POINTS):z.isSprite&&ct.setMode(x.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ct.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(V.get("WEBGL_multi_draw"))ct.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Le=z._multiDrawStarts,Gt=z._multiDrawCounts,ut=z._multiDrawCount,Bn=Re?U.get(Re).bytesPerElement:1,js=te.get(Y).currentProgram.getUniforms();for(let xn=0;xn<ut;xn++)js.setValue(x,"_gl_DrawID",xn),ct.render(Le[xn]/Bn,Gt[xn])}else if(z.isInstancedMesh)ct.renderInstances(ht,Mt,z.count);else if($.isInstancedBufferGeometry){const Le=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Gt=Math.min($.instanceCount,Le);ct.renderInstances(ht,Mt,Gt)}else ct.render(ht,Mt)};function ot(E,F,$){E.transparent===!0&&E.side===cn&&E.forceSinglePass===!1?(E.side=mn,E.needsUpdate=!0,Fo(E,F,$),E.side=oi,E.needsUpdate=!0,Fo(E,F,$),E.side=cn):Fo(E,F,$)}u(ot,"prepareMaterial"),this.compile=function(E,F,$=null){$===null&&($=E),g=Pe.get($),g.init(F),A.push(g),$.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(g.pushLight(z),z.castShadow&&g.pushShadow(z))}),E!==$&&E.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(g.pushLight(z),z.castShadow&&g.pushShadow(z))}),g.setupLights();const Y=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const fe=z.material;if(fe)if(Array.isArray(fe))for(let be=0;be<fe.length;be++){const Ce=fe[be];ot(Ce,$,z),Y.add(Ce)}else ot(fe,$,z),Y.add(fe)}),A.pop(),g=null,Y},this.compileAsync=function(E,F,$=null){const Y=this.compile(E,F,$);return new Promise(z=>{function fe(){if(Y.forEach(function(be){te.get(be).currentProgram.isReady()&&Y.delete(be)}),Y.size===0){z(E);return}setTimeout(fe,10)}u(fe,"checkMaterialsReady"),V.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let hn=null;function li(E){hn&&hn(E)}u(li,"onAnimationFrame");function Qm(){ps.stop()}u(Qm,"onXRSessionStart");function eg(){ps.start()}u(eg,"onXRSessionEnd");const ps=new Z0;ps.setAnimationLoop(li),typeof self<"u"&&ps.setContext(self),this.setAnimationLoop=function(E){hn=E,J.setAnimationLoop(E),E===null?ps.stop():ps.start()},J.addEventListener("sessionstart",Qm),J.addEventListener("sessionend",eg),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(F),F=J.getCamera()),E.isScene===!0&&E.onBeforeRender(b,E,F,C),g=Pe.get(E,A.length),g.init(F),A.push(g),ye.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),it.setFromProjectionMatrix(ye),de=this.localClippingEnabled,ne=ae.init(this.clippingPlanes,de),y=he.get(E,m.length),y.init(),m.push(y),J.enabled===!0&&J.isPresenting===!0){const fe=b.xr.getDepthSensingMesh();fe!==null&&Ql(fe,F,-1/0,b.sortObjects)}Ql(E,F,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(W,ge),rt=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,rt&&Oe.addToRenderList(y,E),this.info.render.frame++,ne===!0&&ae.beginShadows();const $=g.state.shadowsArray;pe.render($,E,F),ne===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=y.opaque,z=y.transmissive;if(g.setupLights(),F.isArrayCamera){const fe=F.cameras;if(z.length>0)for(let be=0,Ce=fe.length;be<Ce;be++){const Re=fe[be];ng(Y,z,E,Re)}rt&&Oe.render(E);for(let be=0,Ce=fe.length;be<Ce;be++){const Re=fe[be];tg(y,E,Re,Re.viewport)}}else z.length>0&&ng(Y,z,E,F),rt&&Oe.render(E),tg(y,E,F);C!==null&&(S.updateMultisampleRenderTarget(C),S.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(b,E,F),Ze.resetDefaultState(),L=-1,ie=null,A.pop(),A.length>0?(g=A[A.length-1],ne===!0&&ae.setGlobalState(b.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?y=m[m.length-1]:y=null};function Ql(E,F,$,Y){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)$=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||it.intersectsSprite(E)){Y&&Ue.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ye);const be=k.update(E),Ce=E.material;Ce.visible&&y.push(E,be,Ce,$,Ue.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||it.intersectsObject(E))){const be=k.update(E),Ce=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ue.copy(E.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ue.copy(be.boundingSphere.center)),Ue.applyMatrix4(E.matrixWorld).applyMatrix4(ye)),Array.isArray(Ce)){const Re=be.groups;for(let ke=0,He=Re.length;ke<He;ke++){const Ie=Re[ke],ht=Ce[Ie.materialIndex];ht&&ht.visible&&y.push(E,be,ht,$,Ue.z,Ie)}}else Ce.visible&&y.push(E,be,Ce,$,Ue.z,null)}}const fe=E.children;for(let be=0,Ce=fe.length;be<Ce;be++)Ql(fe[be],F,$,Y)}u(Ql,"projectObject");function tg(E,F,$,Y){const z=E.opaque,fe=E.transmissive,be=E.transparent;g.setupLightsView($),ne===!0&&ae.setGlobalState(b.clippingPlanes,$),Y&&j.viewport(M.copy(Y)),z.length>0&&Uo(z,F,$),fe.length>0&&Uo(fe,F,$),be.length>0&&Uo(be,F,$),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}u(tg,"renderScene");function ng(E,F,$,Y){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Y.id]===void 0&&(g.state.transmissionRenderTarget[Y.id]=new Pt(1,1,{generateMipmaps:!0,type:V.has("EXT_color_buffer_half_float")||V.has("EXT_color_buffer_float")?pn:Si,minFilter:xi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const fe=g.state.transmissionRenderTarget[Y.id],be=Y.viewport||M;fe.setSize(be.z,be.w);const Ce=b.getRenderTarget();b.setRenderTarget(fe),b.getClearColor(G),ee=b.getClearAlpha(),ee<1&&b.setClearColor(16777215,.5),b.clear(),rt&&Oe.render($);const Re=b.toneMapping;b.toneMapping=Zi;const ke=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),g.setupLightsView(Y),ne===!0&&ae.setGlobalState(b.clippingPlanes,Y),Uo(E,$,Y),S.updateMultisampleRenderTarget(fe),S.updateRenderTargetMipmap(fe),V.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ie=0,ht=F.length;Ie<ht;Ie++){const mt=F[Ie],Mt=mt.object,vn=mt.geometry,ct=mt.material,Le=mt.group;if(ct.side===cn&&Mt.layers.test(Y.layers)){const Gt=ct.side;ct.side=mn,ct.needsUpdate=!0,ig(Mt,$,Y,vn,ct,Le),ct.side=Gt,ct.needsUpdate=!0,He=!0}}He===!0&&(S.updateMultisampleRenderTarget(fe),S.updateRenderTargetMipmap(fe))}b.setRenderTarget(Ce),b.setClearColor(G,ee),ke!==void 0&&(Y.viewport=ke),b.toneMapping=Re}u(ng,"renderTransmissionPass");function Uo(E,F,$){const Y=F.isScene===!0?F.overrideMaterial:null;for(let z=0,fe=E.length;z<fe;z++){const be=E[z],Ce=be.object,Re=be.geometry,ke=Y===null?be.material:Y,He=be.group;Ce.layers.test($.layers)&&ig(Ce,F,$,Re,ke,He)}}u(Uo,"renderObjects");function ig(E,F,$,Y,z,fe){E.onBeforeRender(b,F,$,Y,z,fe),E.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(b,F,$,Y,E,fe),z.transparent===!0&&z.side===cn&&z.forceSinglePass===!1?(z.side=mn,z.needsUpdate=!0,b.renderBufferDirect($,F,Y,z,E,fe),z.side=oi,z.needsUpdate=!0,b.renderBufferDirect($,F,Y,z,E,fe),z.side=cn):b.renderBufferDirect($,F,Y,z,E,fe),E.onAfterRender(b,F,$,Y,z,fe)}u(ig,"renderObject");function Fo(E,F,$){F.isScene!==!0&&(F=Ke);const Y=te.get(E),z=g.state.lights,fe=g.state.shadowsArray,be=z.state.version,Ce=ue.getParameters(E,z.state,fe,F,$),Re=ue.getProgramCacheKey(Ce);let ke=Y.programs;Y.environment=E.isMeshStandardMaterial?F.environment:null,Y.fog=F.fog,Y.envMap=(E.isMeshStandardMaterial?R:v).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,ke===void 0&&(E.addEventListener("dispose",et),ke=new Map,Y.programs=ke);let He=ke.get(Re);if(He!==void 0){if(Y.currentProgram===He&&Y.lightsStateVersion===be)return rg(E,Ce),He}else Ce.uniforms=ue.getUniforms(E),E.onBeforeCompile(Ce,b),He=ue.acquireProgram(Ce,Re),ke.set(Re,He),Y.uniforms=Ce.uniforms;const Ie=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ie.clippingPlanes=ae.uniform),rg(E,Ce),Y.needsLights=u1(E),Y.lightsStateVersion=be,Y.needsLights&&(Ie.ambientLightColor.value=z.state.ambient,Ie.lightProbe.value=z.state.probe,Ie.directionalLights.value=z.state.directional,Ie.directionalLightShadows.value=z.state.directionalShadow,Ie.spotLights.value=z.state.spot,Ie.spotLightShadows.value=z.state.spotShadow,Ie.rectAreaLights.value=z.state.rectArea,Ie.ltc_1.value=z.state.rectAreaLTC1,Ie.ltc_2.value=z.state.rectAreaLTC2,Ie.pointLights.value=z.state.point,Ie.pointLightShadows.value=z.state.pointShadow,Ie.hemisphereLights.value=z.state.hemi,Ie.directionalShadowMap.value=z.state.directionalShadowMap,Ie.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ie.spotShadowMap.value=z.state.spotShadowMap,Ie.spotLightMatrix.value=z.state.spotLightMatrix,Ie.spotLightMap.value=z.state.spotLightMap,Ie.pointShadowMap.value=z.state.pointShadowMap,Ie.pointShadowMatrix.value=z.state.pointShadowMatrix),Y.currentProgram=He,Y.uniformsList=null,He}u(Fo,"getProgram");function sg(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Mr.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}u(sg,"getUniformList");function rg(E,F){const $=te.get(E);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}u(rg,"updateCommonMaterialProperties");function l1(E,F,$,Y,z){F.isScene!==!0&&(F=Ke),S.resetTextureUnits();const fe=F.fog,be=Y.isMeshStandardMaterial?F.environment:null,Ce=C===null?b.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Yt,Re=(Y.isMeshStandardMaterial?R:v).get(Y.envMap||be),ke=Y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,He=!!$.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ie=!!$.morphAttributes.position,ht=!!$.morphAttributes.normal,mt=!!$.morphAttributes.color;let Mt=Zi;Y.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Mt=b.toneMapping);const vn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ct=vn!==void 0?vn.length:0,Le=te.get(Y),Gt=g.state.lights;if(ne===!0&&(de===!0||E!==ie)){const Tn=E===ie&&Y.id===L;ae.setState(Y,E,Tn)}let ut=!1;Y.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Gt.state.version||Le.outputColorSpace!==Ce||z.isBatchedMesh&&Le.batching===!1||!z.isBatchedMesh&&Le.batching===!0||z.isBatchedMesh&&Le.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Le.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Le.instancing===!1||!z.isInstancedMesh&&Le.instancing===!0||z.isSkinnedMesh&&Le.skinning===!1||!z.isSkinnedMesh&&Le.skinning===!0||z.isInstancedMesh&&Le.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Le.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Le.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Le.instancingMorph===!1&&z.morphTexture!==null||Le.envMap!==Re||Y.fog===!0&&Le.fog!==fe||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ae.numPlanes||Le.numIntersection!==ae.numIntersection)||Le.vertexAlphas!==ke||Le.vertexTangents!==He||Le.morphTargets!==Ie||Le.morphNormals!==ht||Le.morphColors!==mt||Le.toneMapping!==Mt||Le.morphTargetsCount!==ct)&&(ut=!0):(ut=!0,Le.__version=Y.version);let Bn=Le.currentProgram;ut===!0&&(Bn=Fo(Y,F,z));let js=!1,xn=!1,ec=!1;const bt=Bn.getUniforms(),Ai=Le.uniforms;if(j.useProgram(Bn.program)&&(js=!0,xn=!0,ec=!0),Y.id!==L&&(L=Y.id,xn=!0),js||ie!==E){Z.reverseDepthBuffer?(_e.copy(E.projectionMatrix),XM(_e),$M(_e),bt.setValue(x,"projectionMatrix",_e)):bt.setValue(x,"projectionMatrix",E.projectionMatrix),bt.setValue(x,"viewMatrix",E.matrixWorldInverse);const Tn=bt.map.cameraPosition;Tn!==void 0&&Tn.setValue(x,Ve.setFromMatrixPosition(E.matrixWorld)),Z.logarithmicDepthBuffer&&bt.setValue(x,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&bt.setValue(x,"isOrthographic",E.isOrthographicCamera===!0),ie!==E&&(ie=E,xn=!0,ec=!0)}if(z.isSkinnedMesh){bt.setOptional(x,z,"bindMatrix"),bt.setOptional(x,z,"bindMatrixInverse");const Tn=z.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),bt.setValue(x,"boneTexture",Tn.boneTexture,S))}z.isBatchedMesh&&(bt.setOptional(x,z,"batchingTexture"),bt.setValue(x,"batchingTexture",z._matricesTexture,S),bt.setOptional(x,z,"batchingIdTexture"),bt.setValue(x,"batchingIdTexture",z._indirectTexture,S),bt.setOptional(x,z,"batchingColorTexture"),z._colorsTexture!==null&&bt.setValue(x,"batchingColorTexture",z._colorsTexture,S));const tc=$.morphAttributes;if((tc.position!==void 0||tc.normal!==void 0||tc.color!==void 0)&&Fe.update(z,$,Bn),(xn||Le.receiveShadow!==z.receiveShadow)&&(Le.receiveShadow=z.receiveShadow,bt.setValue(x,"receiveShadow",z.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Ai.envMap.value=Re,Ai.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&F.environment!==null&&(Ai.envMapIntensity.value=F.environmentIntensity),xn&&(bt.setValue(x,"toneMappingExposure",b.toneMappingExposure),Le.needsLights&&c1(Ai,ec),fe&&Y.fog===!0&&oe.refreshFogUniforms(Ai,fe),oe.refreshMaterialUniforms(Ai,Y,Q,K,g.state.transmissionRenderTarget[E.id]),Mr.upload(x,sg(Le),Ai,S)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Mr.upload(x,sg(Le),Ai,S),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&bt.setValue(x,"center",z.center),bt.setValue(x,"modelViewMatrix",z.modelViewMatrix),bt.setValue(x,"normalMatrix",z.normalMatrix),bt.setValue(x,"modelMatrix",z.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Tn=Y.uniformsGroups;for(let nc=0,h1=Tn.length;nc<h1;nc++){const og=Tn[nc];N.update(og,Bn),N.bind(og,Bn)}}return Bn}u(l1,"setProgram");function c1(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}u(c1,"markUniformsLightsNeedsUpdate");function u1(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}u(u1,"materialNeedsLights"),this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,F,$){te.get(E.texture).__webglTexture=F,te.get(E.depthTexture).__webglTexture=$;const Y=te.get(E);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=$===void 0,Y.__autoAllocateDepthBuffer||V.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){const $=te.get(E);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,$=0){C=E,O=F,P=$;let Y=!0,z=null,fe=!1,be=!1;if(E){const Re=te.get(E);if(Re.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(x.FRAMEBUFFER,null),Y=!1;else if(Re.__webglFramebuffer===void 0)S.setupRenderTarget(E);else if(Re.__hasExternalTextures)S.rebindTextures(E,te.get(E.texture).__webglTexture,te.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ie=E.depthTexture;if(Re.__boundDepthTexture!==Ie){if(Ie!==null&&te.has(Ie)&&(E.width!==Ie.image.width||E.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(E)}}const ke=E.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(be=!0);const He=te.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(He[F])?z=He[F][$]:z=He[F],fe=!0):E.samples>0&&S.useMultisampledRTT(E)===!1?z=te.get(E).__webglMultisampledFramebuffer:Array.isArray(He)?z=He[$]:z=He,M.copy(E.viewport),T.copy(E.scissor),B=E.scissorTest}else M.copy(xe).multiplyScalar(Q).floor(),T.copy(Ae).multiplyScalar(Q).floor(),B=je;if(j.bindFramebuffer(x.FRAMEBUFFER,z)&&Y&&j.drawBuffers(E,z),j.viewport(M),j.scissor(T),j.setScissorTest(B),fe){const Re=te.get(E.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+F,Re.__webglTexture,$)}else if(be){const Re=te.get(E.texture),ke=F||0;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,Re.__webglTexture,$||0,ke)}L=-1},this.readRenderTargetPixels=function(E,F,$,Y,z,fe,be){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce){j.bindFramebuffer(x.FRAMEBUFFER,Ce);try{const Re=E.texture,ke=Re.format,He=Re.type;if(!Z.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-Y&&$>=0&&$<=E.height-z&&x.readPixels(F,$,Y,z,De.convert(ke),De.convert(He),fe)}finally{const Re=C!==null?te.get(C).__webglFramebuffer:null;j.bindFramebuffer(x.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(E,F,$,Y,z,fe,be){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce){const Re=E.texture,ke=Re.format,He=Re.type;if(!Z.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-Y&&$>=0&&$<=E.height-z){j.bindFramebuffer(x.FRAMEBUFFER,Ce);const Ie=x.createBuffer();x.bindBuffer(x.PIXEL_PACK_BUFFER,Ie),x.bufferData(x.PIXEL_PACK_BUFFER,fe.byteLength,x.STREAM_READ),x.readPixels(F,$,Y,z,De.convert(ke),De.convert(He),0);const ht=C!==null?te.get(C).__webglFramebuffer:null;j.bindFramebuffer(x.FRAMEBUFFER,ht);const mt=x.fenceSync(x.SYNC_GPU_COMMANDS_COMPLETE,0);return x.flush(),await jM(x,mt,4),x.bindBuffer(x.PIXEL_PACK_BUFFER,Ie),x.getBufferSubData(x.PIXEL_PACK_BUFFER,0,fe),x.deleteBuffer(Ie),x.deleteSync(mt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,F=null,$=0){E.isTexture!==!0&&(Da("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);const Y=Math.pow(2,-$),z=Math.floor(E.image.width*Y),fe=Math.floor(E.image.height*Y),be=F!==null?F.x:0,Ce=F!==null?F.y:0;S.setTexture2D(E,0),x.copyTexSubImage2D(x.TEXTURE_2D,$,0,0,be,Ce,z,fe),j.unbindTexture()},this.copyTextureToTexture=function(E,F,$=null,Y=null,z=0){E.isTexture!==!0&&(Da("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,E=arguments[1],F=arguments[2],z=arguments[3]||0,$=null);let fe,be,Ce,Re,ke,He;$!==null?(fe=$.max.x-$.min.x,be=$.max.y-$.min.y,Ce=$.min.x,Re=$.min.y):(fe=E.image.width,be=E.image.height,Ce=0,Re=0),Y!==null?(ke=Y.x,He=Y.y):(ke=0,He=0);const Ie=De.convert(F.format),ht=De.convert(F.type);S.setTexture2D(F,0),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,F.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,F.unpackAlignment);const mt=x.getParameter(x.UNPACK_ROW_LENGTH),Mt=x.getParameter(x.UNPACK_IMAGE_HEIGHT),vn=x.getParameter(x.UNPACK_SKIP_PIXELS),ct=x.getParameter(x.UNPACK_SKIP_ROWS),Le=x.getParameter(x.UNPACK_SKIP_IMAGES),Gt=E.isCompressedTexture?E.mipmaps[z]:E.image;x.pixelStorei(x.UNPACK_ROW_LENGTH,Gt.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,Gt.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,Ce),x.pixelStorei(x.UNPACK_SKIP_ROWS,Re),E.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,z,ke,He,fe,be,Ie,ht,Gt.data):E.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,z,ke,He,Gt.width,Gt.height,Ie,Gt.data):x.texSubImage2D(x.TEXTURE_2D,z,ke,He,fe,be,Ie,ht,Gt),x.pixelStorei(x.UNPACK_ROW_LENGTH,mt),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,Mt),x.pixelStorei(x.UNPACK_SKIP_PIXELS,vn),x.pixelStorei(x.UNPACK_SKIP_ROWS,ct),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Le),z===0&&F.generateMipmaps&&x.generateMipmap(x.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(E,F,$=null,Y=null,z=0){E.isTexture!==!0&&(Da("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,Y=arguments[1]||null,E=arguments[2],F=arguments[3],z=arguments[4]||0);let fe,be,Ce,Re,ke,He,Ie,ht,mt;const Mt=E.isCompressedTexture?E.mipmaps[z]:E.image;$!==null?(fe=$.max.x-$.min.x,be=$.max.y-$.min.y,Ce=$.max.z-$.min.z,Re=$.min.x,ke=$.min.y,He=$.min.z):(fe=Mt.width,be=Mt.height,Ce=Mt.depth,Re=0,ke=0,He=0),Y!==null?(Ie=Y.x,ht=Y.y,mt=Y.z):(Ie=0,ht=0,mt=0);const vn=De.convert(F.format),ct=De.convert(F.type);let Le;if(F.isData3DTexture)S.setTexture3D(F,0),Le=x.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)S.setTexture2DArray(F,0),Le=x.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,F.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,F.unpackAlignment);const Gt=x.getParameter(x.UNPACK_ROW_LENGTH),ut=x.getParameter(x.UNPACK_IMAGE_HEIGHT),Bn=x.getParameter(x.UNPACK_SKIP_PIXELS),js=x.getParameter(x.UNPACK_SKIP_ROWS),xn=x.getParameter(x.UNPACK_SKIP_IMAGES);x.pixelStorei(x.UNPACK_ROW_LENGTH,Mt.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,Mt.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,Re),x.pixelStorei(x.UNPACK_SKIP_ROWS,ke),x.pixelStorei(x.UNPACK_SKIP_IMAGES,He),E.isDataTexture||E.isData3DTexture?x.texSubImage3D(Le,z,Ie,ht,mt,fe,be,Ce,vn,ct,Mt.data):F.isCompressedArrayTexture?x.compressedTexSubImage3D(Le,z,Ie,ht,mt,fe,be,Ce,vn,Mt.data):x.texSubImage3D(Le,z,Ie,ht,mt,fe,be,Ce,vn,ct,Mt),x.pixelStorei(x.UNPACK_ROW_LENGTH,Gt),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,ut),x.pixelStorei(x.UNPACK_SKIP_PIXELS,Bn),x.pixelStorei(x.UNPACK_SKIP_ROWS,js),x.pixelStorei(x.UNPACK_SKIP_IMAGES,xn),z===0&&F.generateMipmaps&&x.generateMipmap(Le),j.unbindTexture()},this.initRenderTarget=function(E){te.get(E).__webglFramebuffer===void 0&&S.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?S.setTextureCube(E,0):E.isData3DTexture?S.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?S.setTexture2DArray(E,0):S.setTexture2D(E,0),j.unbindTexture()},this.resetState=function(){O=0,P=0,C=null,j.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===lf?"display-p3":"srgb",t.unpackColorSpace=st.workingColorSpace===Kl?"display-p3":"srgb"}};u(_p,"WebGLRenderer");let bh=_p;const Pl=class Pl{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new we(e),this.near=t,this.far=i}clone(){return new Pl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}};u(Pl,"Fog");let Eh=Pl;const vp=class vp extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};u(vp,"Scene");let nl=vp;const xp=class xp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ah,this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}};u(xp,"InterleavedBuffer");let Th=xp;const sn=new D,Dl=class Dl{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Gn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Gn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Dl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};u(Dl,"InterleavedBufferAttribute");let Ah=Dl;const V_=new D,H_=new at,G_=new at,VA=new D,W_=new Ge,ha=new D,Hc=new On,j_=new Ge,Gc=new ns,yp=class yp extends Lt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Yg,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Yn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ha),this.boundingBox.expandByPoint(ha)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new On),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ha),this.boundingSphere.expandByPoint(ha)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hc.copy(this.boundingSphere),Hc.applyMatrix4(s),e.ray.intersectsSphere(Hc)!==!1&&(j_.copy(s).invert(),Gc.copy(e.ray).applyMatrix4(j_),!(this.boundingBox!==null&&Gc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Gc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new at,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Yg?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===gM?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;H_.fromBufferAttribute(s.attributes.skinIndex,e),G_.fromBufferAttribute(s.attributes.skinWeight,e),V_.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=G_.getComponent(r);if(o!==0){const a=H_.getComponent(r);W_.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(VA.copy(V_).applyMatrix4(W_),o)}}return t.applyMatrix4(this.bindMatrixInverse)}};u(yp,"SkinnedMesh");let wh=yp;const Mp=class Mp extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}};u(Mp,"Bone");let il=Mp;const Sp=class Sp extends Qt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=$t,h=$t,d,f){super(null,o,a,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};u(Sp,"DataTexture");let sl=Sp;const X_=new Ge,HA=new Ge,Il=class Il{constructor(e=[],t=[]){this.uuid=Xn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ge;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:HA;X_.multiplyMatrices(a,t[r]),X_.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Il(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new sl(t,e,e,In,jn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new il),this.bones.push(o),this.boneInverses.push(new Ge().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}};u(Il,"Skeleton");let Ch=Il;const bp=class bp extends Vt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};u(bp,"InstancedBufferAttribute");let wo=bp;const or=new Ge,$_=new Ge,da=[],Y_=new Yn,GA=new Ge,Vr=new Lt,Hr=new On,Ep=class Ep extends Lt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,GA)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,or),Y_.copy(e.boundingBox).applyMatrix4(or),this.boundingBox.union(Y_)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new On),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,or),Hr.copy(e.boundingSphere).applyMatrix4(or),this.boundingSphere.union(Hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Vr.geometry=this.geometry,Vr.material=this.material,Vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hr.copy(this.boundingSphere),Hr.applyMatrix4(i),e.ray.intersectsSphere(Hr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,or),$_.multiplyMatrices(i,or),Vr.matrixWorld=$_,Vr.raycast(e,da);for(let o=0,a=da.length;o<a;o++){const l=da[o];l.instanceId=r,l.object=this,t.push(l)}da.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new wo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new sl(new Float32Array(s*this.count),s,this.count,nf,jn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};u(Ep,"InstancedMesh");let Rh=Ep;const Tp=class Tp extends En{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}};u(Tp,"LineBasicMaterial");let ks=Tp;const rl=new D,ol=new D,K_=new Ge,Gr=new ns,fa=new On,Wc=new D,q_=new D,Ap=class Ap extends yt{constructor(e=new en,t=new ks){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)rl.fromBufferAttribute(t,s-1),ol.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=rl.distanceTo(ol);e.setAttribute("lineDistance",new Ht(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fa.copy(i.boundingSphere),fa.applyMatrix4(s),fa.radius+=r,e.ray.intersectsSphere(fa)===!1)return;K_.copy(s).invert(),Gr.copy(e.ray).applyMatrix4(K_);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let y=p,g=_-1;y<g;y+=c){const m=h.getX(y),A=h.getX(y+1),b=pa(this,e,Gr,l,m,A);b&&t.push(b)}if(this.isLineLoop){const y=h.getX(_-1),g=h.getX(p),m=pa(this,e,Gr,l,y,g);m&&t.push(m)}}else{const p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let y=p,g=_-1;y<g;y+=c){const m=pa(this,e,Gr,l,y,y+1);m&&t.push(m)}if(this.isLineLoop){const y=pa(this,e,Gr,l,_-1,p);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};u(Ap,"Line");let Vs=Ap;function pa(n,e,t,i,s,r){const o=n.geometry.attributes.position;if(rl.fromBufferAttribute(o,s),ol.fromBufferAttribute(o,r),t.distanceSqToSegment(rl,ol,Wc,q_)>i)return;Wc.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Wc);if(!(l<e.near||l>e.far))return{distance:l,point:q_.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}u(pa,"checkIntersection");const Z_=new D,J_=new D,wp=class wp extends Vs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Z_.fromBufferAttribute(t,s),J_.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Z_.distanceTo(J_);e.setAttribute("lineDistance",new Ht(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};u(wp,"LineSegments");let al=wp;const Cp=class Cp extends Vs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};u(Cp,"LineLoop");let Ph=Cp;const Rp=class Rp extends En{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};u(Rp,"PointsMaterial");let ll=Rp;const Q_=new Ge,Dh=new ns,ma=new On,ga=new D,Pp=class Pp extends yt{constructor(e=new en,t=new ll){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ma.copy(i.boundingSphere),ma.applyMatrix4(s),ma.radius+=r,e.ray.intersectsSphere(ma)===!1)return;Q_.copy(s).invert(),Dh.copy(e.ray).applyMatrix4(Q_);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=f,y=p;_<y;_++){const g=c.getX(_);ga.fromBufferAttribute(d,g),ev(ga,g,l,s,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,y=p;_<y;_++)ga.fromBufferAttribute(d,_),ev(ga,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};u(Pp,"Points");let Ih=Pp;function ev(n,e,t,i,s,r,o){const a=Dh.distanceSqToPoint(n);if(a<t){const l=new D;Dh.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}u(ev,"testPoint");const Ll=class Ll extends en{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new D,f=new D,p=[],_=[],y=[],g=[];for(let m=0;m<=i;m++){const A=[],b=m/i;let w=0;m===0&&o===0?w=.5/t:m===i&&l===Math.PI&&(w=-.5/t);for(let O=0;O<=t;O++){const P=O/t;d.x=-e*Math.cos(s+P*r)*Math.sin(o+b*a),d.y=e*Math.cos(o+b*a),d.z=e*Math.sin(s+P*r)*Math.sin(o+b*a),_.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),g.push(P+w,1-b),A.push(c++)}h.push(A)}for(let m=0;m<i;m++)for(let A=0;A<t;A++){const b=h[m][A+1],w=h[m][A],O=h[m+1][A],P=h[m+1][A+1];(m!==0||o>0)&&p.push(b,w,P),(m!==i-1||l<Math.PI)&&p.push(w,O,P)}this.setIndex(p),this.setAttribute("position",new Ht(_,3)),this.setAttribute("normal",new Ht(y,3)),this.setAttribute("uv",new Ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ll(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};u(Ll,"SphereGeometry");let Lh=Ll;const Dp=class Dp extends En{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=af,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};u(Dp,"MeshStandardMaterial");let Ji=Dp;const Ip=class Ip extends Ji{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};u(Ip,"MeshPhysicalMaterial");let Un=Ip;const Lp=class Lp extends En{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=af,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};u(Lp,"MeshNormalMaterial");let Nh=Lp;function _a(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}u(_a,"convertArray");function WA(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}u(WA,"isTypedArray");function jA(n){function e(s,r){return n[s]-n[r]}u(e,"compareTime");const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}u(jA,"getKeyframeOrder");function tv(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}u(tv,"sortedArray");function n1(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}u(n1,"flattenJSON");const Np=class Np{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}};u(Np,"Interpolant");let Hs=Np;const Op=class Op extends Hs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kg,endingEnd:Kg}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case qg:r=e,a=2*t-i;break;case Zg:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case qg:o=e,l=2*i-t;break;case Zg:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(i-t)/(s-t),y=_*_,g=y*_,m=-f*g+2*f*y-f*_,A=(1+f)*g+(-1.5-2*f)*y+(-.5+f)*_+1,b=(-1-p)*g+(1.5+p)*y+.5*_,w=p*g-p*y;for(let O=0;O!==a;++O)r[O]=m*o[h+O]+A*o[c+O]+b*o[l+O]+w*o[d+O];return r}};u(Op,"CubicInterpolant");let Oh=Op;const Up=class Up extends Hs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}};u(Up,"LinearInterpolant");let Uh=Up;const Fp=class Fp extends Hs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}};u(Fp,"DiscreteInterpolant");let Fh=Fp;const Bp=class Bp{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_a(t,this.TimeBufferType),this.values=_a(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:_a(e.times,Array),values:_a(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Fh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Uh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Oh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Mo:t=this.InterpolantFactoryMethodDiscrete;break;case So:t=this.InterpolantFactoryMethodLinear;break;case pc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mo;case this.InterpolantFactoryMethodLinear:return So;case this.InterpolantFactoryMethodSmooth:return pc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&WA(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===pc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{const d=a*i,f=d-i,p=d+i;for(let _=0;_!==i;++_){const y=t[d+_];if(y!==t[f+_]||y!==t[p+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};u(Bp,"KeyframeTrack");let Fn=Bp;Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=So;const zp=class zp extends Fn{constructor(e,t,i){super(e,t,i)}};u(zp,"BooleanKeyframeTrack");let is=zp;is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=Mo;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;const kp=class kp extends Fn{};u(kp,"ColorKeyframeTrack");let cl=kp;cl.prototype.ValueTypeName="color";const Vp=class Vp extends Fn{};u(Vp,"NumberKeyframeTrack");let ss=Vp;ss.prototype.ValueTypeName="number";const Hp=class Hp extends Hs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Nn.slerpFlat(r,0,o,c-a,o,c,l);return r}};u(Hp,"QuaternionLinearInterpolant");let Bh=Hp;const Gp=class Gp extends Fn{InterpolantFactoryMethodLinear(e){return new Bh(this.times,this.values,this.getValueSize(),e)}};u(Gp,"QuaternionKeyframeTrack");let rs=Gp;rs.prototype.ValueTypeName="quaternion";rs.prototype.InterpolantFactoryMethodSmooth=void 0;const Wp=class Wp extends Fn{constructor(e,t,i){super(e,t,i)}};u(Wp,"StringKeyframeTrack");let os=Wp;os.prototype.ValueTypeName="string";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=Mo;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;const jp=class jp extends Fn{};u(jp,"VectorKeyframeTrack");let as=jp;as.prototype.ValueTypeName="vector";const Xp=class Xp{constructor(e="",t=-1,i=[],s=_M){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Xn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push($A(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Fn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=jA(l);l=tv(l,1,h),c=tv(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ss(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const d=h[1];let f=s[d];f||(s[d]=f=[]),f.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=u(function(d,f,p,_,y){if(p.length!==0){const g=[],m=[];n1(p,g,m,_),g.length!==0&&y.push(new d(f,g,m))}},"addNonemptyTrack"),s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const f=c[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let y=0;y<f[_].morphTargets.length;y++)p[f[_].morphTargets[y]]=-1;for(const y in p){const g=[],m=[];for(let A=0;A!==f[_].morphTargets.length;++A){const b=f[_];g.push(b.time),m.push(b.morphTarget===y?1:0)}s.push(new ss(".morphTargetInfluence["+y+"]",g,m))}l=p.length*o}else{const p=".bones["+t[d].name+"]";i(as,p+".position",f,"pos",s),i(rs,p+".quaternion",f,"rot",s),i(as,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};u(Xp,"AnimationClip");let zh=Xp;function XA(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ss;case"vector":case"vector2":case"vector3":case"vector4":return as;case"color":return cl;case"quaternion":return rs;case"bool":case"boolean":return is;case"string":return os}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}u(XA,"getTrackTypeForValueTypeName");function $A(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=XA(n.type);if(n.times===void 0){const t=[],i=[];n1(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}u($A,"parseKeyframeTrack");const Yi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},$p=class $p{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const p=c[d],_=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}};u($p,"LoadingManager");let kh=$p;const YA=new kh,Yp=class Yp{constructor(e){this.manager=e!==void 0?e:YA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};u(Yp,"Loader");let ls=Yp;ls.DEFAULT_MATERIAL_NAME="__DEFAULT";const pi={},Kp=class Kp extends Error{constructor(e,t){super(e),this.response=t}};u(Kp,"HttpError");let Vh=Kp;const qp=class qp extends ls{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Yi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(pi[e]!==void 0){pi[e].push({onLoad:t,onProgress:i,onError:s});return}pi[e]=[],pi[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=pi[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,_=p!==0;let y=0;const g=new ReadableStream({start(m){A();function A(){d.read().then(({done:b,value:w})=>{if(b)m.close();else{y+=w.byteLength;const O=new ProgressEvent("progress",{lengthComputable:_,loaded:y,total:p});for(let P=0,C=h.length;P<C;P++){const L=h[P];L.onProgress&&L.onProgress(O)}m.enqueue(w),A()}},b=>{m.error(b)})}u(A,"readData")}});return new Response(g)}else throw new Vh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{Yi.add(e,c);const h=pi[e];delete pi[e];for(let d=0,f=h.length;d<f;d++){const p=h[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=pi[e];if(h===void 0)throw this.manager.itemError(e),c;delete pi[e];for(let d=0,f=h.length;d<f;d++){const p=h[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};u(qp,"FileLoader");let ul=qp;const Zp=class Zp extends ls{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Yi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=bo("img");function l(){h(),Yi.add(e,this),t&&t(this),r.manager.itemEnd(e)}u(l,"onImageLoad");function c(d){h(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}u(c,"onImageError");function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return u(h,"removeEventListeners"),a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};u(Zp,"ImageLoader");let Hh=Zp;const Jp=class Jp extends ls{constructor(e){super(e)}load(e,t,i,s){const r=new Qt,o=new Hh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}};u(Jp,"TextureLoader");let Gh=Jp;const Qp=class Qp extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};u(Qp,"Light");let Pr=Qp;const jc=new Ge,nv=new D,iv=new D,em=class em{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new To,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;nv.setFromMatrixPosition(e.matrixWorld),t.position.copy(nv),iv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(iv),t.updateMatrixWorld(),jc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(jc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};u(em,"LightShadow");let Co=em;const tm=class tm extends Co{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=wr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}};u(tm,"SpotLightShadow");let Wh=tm;const nm=class nm extends Pr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Wh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};u(nm,"SpotLight");let jh=nm;const sv=new Ge,Wr=new D,Xc=new D,im=class im extends Co{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ve(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Wr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Wr),Xc.copy(i.position),Xc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Xc),i.updateMatrixWorld(),s.makeTranslation(-Wr.x,-Wr.y,-Wr.z),sv.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sv)}};u(im,"PointLightShadow");let Xh=im;const sm=class sm extends Pr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Xh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}};u(sm,"PointLight");let Ro=sm;const rm=class rm extends Co{constructor(){super(new Rr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};u(rm,"DirectionalLightShadow");let $h=rm;const om=class om extends Pr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new $h}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};u(om,"DirectionalLight");let Yh=om;const am=class am extends Pr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};u(am,"AmbientLight");let hl=am;const lm=class lm{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};u(lm,"LoaderUtils");let Us=lm;const cm=class cm extends ls{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Yi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Yi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Yi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Yi.add(e,l),r.manager.itemStart(e)}};u(cm,"ImageBitmapLoader");let Kh=cm;const um=class um{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=rv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=rv();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};u(um,"Clock");let dl=um;function rv(){return performance.now()}u(rv,"now$1");const hf="\\[\\]\\.:\\/",KA=new RegExp("["+hf+"]","g"),df="[^"+hf+"]",qA="[^"+hf.replace("\\.","")+"]",ZA=/((?:WC+[\/:])*)/.source.replace("WC",df),JA=/(WCOD+)?/.source.replace("WCOD",qA),QA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",df),ew=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",df),tw=new RegExp("^"+ZA+JA+QA+ew+"$"),nw=["material","materials","bones","map"],hm=class hm{constructor(e,t,i){const s=i||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}};u(hm,"Composite");let qh=hm;const Wi=class Wi{constructor(e,t,i){this.path=t,this.parsedPath=i||Wi.parseTrackName(t),this.node=Wi.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Wi.Composite(e,t,i):new Wi(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(KA,"")}static parseTrackName(e){const t=tw.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);nw.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=u(function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},"searchNodeSubtree"),s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Wi.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};u(Wi,"PropertyBinding");let _t=Wi;_t.Composite=qh;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const ov=new Ge,dm=class dm{constructor(e,t,i=0,s=1/0){this.ray=new ns(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Eo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ov.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ov),this}intersectObject(e,t=!0,i=[]){return Zh(e,this,i,t),i.sort(av),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Zh(e[s],this,i,t);return i.sort(av),i}};u(dm,"Raycaster");let fl=dm;function av(n,e){return n.distance-e.distance}u(av,"ascSort");function Zh(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Zh(r[o],e,t,!0)}}u(Zh,"intersect");const fm=class fm{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Wt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};u(fm,"Spherical");let pl=fm;const pm=class pm extends al{constructor(e=10,t=10,i=4473924,s=8947848){i=new we(i),s=new we(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,p=0,_=-a;f<=t;f++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const y=f===r?i:s;y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3}const h=new en;h.setAttribute("position",new Ht(l,3)),h.setAttribute("color",new Ht(c,3));const d=new ks({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};u(pm,"GridHelper");let ml=pm;const mm=class mm extends bi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};u(mm,"Controls");let Jh=mm;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jd);const H=zl({rotationX:0,rotationY:0,rotationZ:0,currentTool:"edit",currentMode:"object",currentRenderMode:"",secondaryColor:"#b15b2e",primaryColor:"#3e86a0",clearColor:"#222222",snapActive:!0,gridActive:!0,objectModeState:"select",setGridActive:()=>{},setCurrentMode:()=>{},brushSize:1,brushShape:"square",renderingContext:()=>window.renderingContext,multipleSelections:!1,objectTransformChange:()=>{},isMouseDown:[!1,!1,!1,!1],treeShowInternal:!1,baseUrl:"/voxel-mesh-editor",cursorShape:"initial",fullscreen:document.fullscreenElement!==null,pushAction:()=>{}}),co=class co extends Lt{constructor(t,i){super(t,i);se(this,"clickEvents",new Set);se(this,"dragEvents",new Set);se(this,"hoverEvents",new Set);se(this,"hoverOutEvents",new Set);se(this,"mouseDownEvents",new Set);se(this,"selected",!1);se(this,"internal",!1);se(this,"draggable",!1);se(this,"hover",!1);se(this,"disableMouseEvents",!1);se(this,"isMeshObject",!0)}static fromMesh(t){let i=new co(t.geometry,t.material);return i.name=t.name,i.userData={...t.userData},i.position.copy(t.position),i.rotation.copy(t.rotation),i.scale.copy(t.scale),i}select(){this.selected=!0}unselect(){this.selected=!1}addClickListener(t){this.clickEvents.add(t)}addDragListener(t){this.dragEvents.add(t)}addHoverEvent(t){this.hoverEvents.add(t)}addHoverOutEvent(t){this.hoverOutEvents.add(t)}addMouseDownEvent(t){this.mouseDownEvents.add(t)}removeClickListener(t){this.clickEvents.delete(t)}removeDragListener(t){this.dragEvents.delete(t)}removeHoverEvent(t){this.hoverEvents.delete(t)}removeHoverOutEvent(t){this.hoverOutEvents.delete(t)}removeMouseDownEvent(t){this.mouseDownEvents.delete(t)}invokeClickEvent(t){this.clickEvents.forEach(i=>{i(t)})}invokeDragEvent(t){this.dragEvents.forEach(i=>{i(t)})}invokeHoverEvent(t){this.hoverEvents.forEach(i=>{i(t)})}invokeHoverOutEvent(t){this.hoverOutEvents.forEach(i=>{i(t)})}invokeMouseDownEvent(t){this.mouseDownEvents.forEach(i=>{i(t)})}destoy(){this.removeFromParent()}clone(){const t=super.clone();for(const i of Object.keys(this))if(!(i in t))try{t[i]=this[i]}catch{}return co.fromMesh(t)}};u(co,"MeshObject");let $n=co;const $c=[new D(0,0,0),new D(1,0,0),new D(1,1,0),new D(0,1,0),new D(0,0,1),new D(1,0,1),new D(1,1,1),new D(0,1,1)],va=[[0,1],[1,2],[3,2],[0,3],[4,5],[5,6],[7,6],[4,7],[0,4],[1,5],[2,6],[3,7]],iw=[[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1],[3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1],[3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1],[3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1],[9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1],[1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1],[9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1],[2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1],[8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1],[9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1],[4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1],[3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1],[1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1],[4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1],[4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1],[9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1],[1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1],[5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1],[2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1],[9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1],[0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1],[2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1],[10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1],[4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1],[5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1],[5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1],[9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1],[0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1],[1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1],[10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1],[8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1],[2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1],[7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1],[9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1],[2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1],[11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1],[9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1],[5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1],[11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1],[11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1],[1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1],[9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1],[5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1],[2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1],[0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1],[5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1],[6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1],[0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1],[3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1],[6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1],[5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1],[1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1],[10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1],[6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1],[1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1],[8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1],[7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1],[3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1],[5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1],[0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1],[9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1],[8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1],[5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1],[0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1],[6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1],[10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1],[10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1],[8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1],[1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1],[3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1],[0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1],[10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1],[0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1],[3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1],[6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1],[9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1],[8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1],[3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1],[6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1],[0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1],[10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1],[10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1],[1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1],[2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1],[7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1],[7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1],[2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1],[1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1],[11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1],[8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1],[0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1],[7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1],[10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1],[2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1],[6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1],[7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1],[2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1],[1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1],[10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1],[10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1],[0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1],[7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1],[6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1],[8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1],[9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1],[6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1],[1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1],[4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1],[10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1],[8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1],[0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1],[1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1],[8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1],[10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1],[4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1],[10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1],[5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1],[11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1],[9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1],[6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1],[7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1],[3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1],[7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1],[9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1],[3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1],[6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1],[9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1],[1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1],[4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1],[7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1],[6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1],[3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1],[0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1],[6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1],[1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1],[0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1],[11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1],[6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1],[5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1],[9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1],[1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1],[1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1],[10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1],[0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1],[5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1],[10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1],[11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1],[0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1],[9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1],[7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1],[2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1],[8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1],[9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1],[9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1],[1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1],[9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1],[9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1],[5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1],[0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1],[10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1],[2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1],[0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1],[0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1],[9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1],[5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1],[3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1],[5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1],[8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1],[0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1],[9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1],[0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1],[1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1],[3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1],[4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1],[9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1],[11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1],[11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1],[2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1],[9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1],[3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1],[1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1],[4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1],[4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1],[0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1],[3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1],[3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1],[0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1],[9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1],[1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]],Qh=.5;function Yc(n){return`${n.x},${n.y},${n.z}`}u(Yc,"hash");function sw(n){let e=0;for(let t=0;t<8;t++)n[t]>Qh&&(e|=1<<t);return e}u(sw,"getConfigIndex");function rw(n,e,t){var o;const i=new Ei(1,1,1,1,1,1),s=(o=i.index)==null?void 0:o.array.reverse(),r=i.getAttribute("position").array;for(let a=0;a<(s==null?void 0:s.length);a++)e.push(new D(r[s[a]*3]+n.x,r[s[a]*3+1]+n.y,r[s[a]*3+2]+n.z)),t.push(e.length-1);i.dispose()}u(rw,"addCubeFaces");function lv(n,e,t,i,s,r=!0,o=!1){var d,f,p,_;const a=((f=(d=e[n.x])==null?void 0:d[n.y])==null?void 0:f[n.z])||0;if(!r&&a!==0){rw(n,t,i);return}const l=[];for(let y=0;y<8;y++){const g=n.clone().add($c[y]),m=((_=(p=e[g.x])==null?void 0:p[g.y])==null?void 0:_[g.z])||0;l[y]=m===0?0:1}const c=sw(l);if(c===0||c===255)return;let h=0;for(let y=0;y<5;y++)for(let g=0;g<3;g++){const m=iw[c][h];if(m===-1)return;const A=n.clone().add($c[va[m][0]]),b=n.clone().add($c[va[m][1]]),w=l[va[m][0]];let P=l[va[m][1]]-w;P==0?P=Qh:P=(Qh-w)/P;const C=A.clone().add(b.clone().sub(A).multiplyScalar(P));o?s.has(Yc(C))?i.push(s.get(Yc(C))):(t.push(C),i.push(t.length-1),s.set(Yc(C),t.length-1)):(t.push(C),i.push(t.length-1)),h++}}u(lv,"marchCube");function ar(n,e,t,i,s){const r=t[n],o=s[e];t[n]=r.clone().add(o),i[n]=i[n]+1}u(ar,"addNeighbor");function ow(n,e){const t={},i={};for(let s=0;s<n.length;s++)t[s]=new D,i[s]=0;for(let s=0;s<e.length;s+=3){const r=e[s],o=e[s+1],a=e[s+2];ar(r,o,t,i,n),ar(r,a,t,i,n),ar(o,a,t,i,n),ar(o,r,t,i,n),ar(a,r,t,i,n),ar(a,o,t,i,n)}for(let s=0;s<n.length;s++){let r=t[s];const o=i[s];o>0&&(r=r.divideScalar(o),n[s]=r)}}u(ow,"smoothGeometry");const gm=class gm extends $n{constructor(){super(new Ei(0,0),new Ji);se(this,"max",new D);se(this,"min",new D);se(this,"sphere");se(this,"cube");se(this,"data",{});se(this,"marchCubes",!1);se(this,"smoothNormals",!1);se(this,"smoothGeometry",!1);se(this,"lastDragTime",0);se(this,"isVoxelMesh",!0);se(this,"isSelecting",!1);se(this,"selectFirstPosition");se(this,"selectSecondPosition");se(this,"selectButton");se(this,"mouseUp",u(t=>{if(this.selectFirstPosition&&this.selectSecondPosition&&this.isSelecting){const i=new D(Math.min(this.selectFirstPosition.x,this.selectSecondPosition.x),Math.min(this.selectFirstPosition.y,this.selectSecondPosition.y),Math.min(this.selectFirstPosition.z,this.selectSecondPosition.z)),s=new D(Math.max(this.selectFirstPosition.x,this.selectSecondPosition.x),Math.max(this.selectFirstPosition.y,this.selectSecondPosition.y),Math.max(this.selectFirstPosition.z,this.selectSecondPosition.z)),r={};for(let o=i.x;o<=s.x;o++)for(let a=i.y;a<=s.y;a++)for(let l=i.z;l<=s.z;l++)r[o]||(r[o]={}),r[o][a]||(r[o][a]={}),r[o][a][l]=this.getVoxel(o,a,l),this.setVoxel(o,a,l,this.selectButton===2?0:1);H.pushAction({in:()=>{for(const[o,a]of Object.entries(r))for(const[l,c]of Object.entries(r[o]))for(const[h,d]of Object.entries(r[o][l]))this.setVoxel(+o,+l,+h,d);return this.update(),!0}}),this.update()}this.isSelecting=!1},"mouseUp"));se(this,"draw",u((t,i,s,r,o=!1)=>{!this.marchCubes&&i==="round"&&(s+=3);let a={};s===0&&(a={[t.x]:{[t.y]:{[t.z]:this.getVoxel(t.x,t.y,t.z)}}},this.setVoxel(t.x,t.y,t.z,r));for(let l=-s;l<s;l++)for(let c=-s;c<s;c++)for(let h=-s;h<s;h++)o&&(a[t.x+l]||(a[t.x+l]={}),a[t.x+l][t.y+c]||(a[t.x+l][t.y+c]={}),a[t.x+l][t.y+c][t.z+h]=this.getVoxel(t.x+l,t.y+c,t.z+h)),i==="square"?this.setVoxel(t.x+l,t.y+c,t.z+h,r):i==="round"&&new D(l,c,h).length()<s&&this.setVoxel(t.x+l,t.y+c,t.z+h,r);o&&H.pushAction({in:()=>{for(const[l,c]of Object.entries(a))for(const[h,d]of Object.entries(a[l]))for(const[f,p]of Object.entries(a[l][h]))this.setVoxel(+l,+h,+f,p);return this.update(),!1}}),this.update()},"draw"));se(this,"update",u(()=>{this.geometry.dispose();const t=[],i=[],s=new Map;this.material.side=oi;for(const[o,a]of Object.entries(this.data)){let l=!1;for(const[c,h]of Object.entries(this.data[o])){let d=!1;for(const[f,p]of Object.entries(this.data[o][c])){const _=parseInt(o,10),y=parseInt(c,10),g=parseInt(f,10);this.max.x=Math.max(this.max.x,_),this.max.y=Math.max(this.max.y,y),this.max.z=Math.max(this.max.z,g),this.min.x=Math.min(this.min.x,_),this.min.y=Math.min(this.min.y,y),this.min.z=Math.min(this.min.z,g),p!==0&&(l=!0,d=!0),!this.marchCubes&&p!==0&&lv(new D(_,y,g),this.data,t,i,s,!1,!1),p||delete h[f]}!d&&a[c]&&delete a[c]}!l&&this.data[o]&&delete this.data[o]}if(this.marchCubes)for(let o=this.min.x-1;o<this.max.x+1;o++)for(let a=this.min.y-1;a<this.max.y+1;a++)for(let l=this.min.z-1;l<this.max.z+1;l++)lv(new D(o,a,l),this.data,t,i,s,this.marchCubes,this.smoothNormals||this.smoothGeometry);this.smoothGeometry&&this.marchCubes&&ow(t,i);const r=new Float32Array(t.length*3);for(let o=0;o<t.length;o++)r[o*3]=t[o].x,r[o*3+1]=t[o].y,r[o*3+2]=t[o].z;this.geometry=new en,this.geometry.setAttribute("position",new Vt(r,3)),this.geometry.setIndex(i.reverse()),this.geometry.computeVertexNormals()},"update"));se(this,"setVoxel",u((t,i,s,r)=>{this.data[t]||(this.data[t]={}),this.data[t][i]||(this.data[t][i]={}),this.data[t][i][s]=r},"setVoxel"));se(this,"getVoxel",u((t,i,s)=>{var r,o;return((o=(r=this.data[t])==null?void 0:r[i])==null?void 0:o[s])||0},"getVoxel"));this.sphere=new Lt(new Lh(1),new Ji({transparent:!0,depthTest:!0,depthWrite:!1,opacity:.5,color:"#91b9c9",side:cn})),this.cube=new Lt(new Ei(1,1,1),new Ji({transparent:!0,depthTest:!0,depthWrite:!1,opacity:.5,color:"#91b9c9",side:cn})),this.cube.visible=!1,this.sphere.visible=!1,this.cube.disableMouseEvents=!0,this.sphere.disableMouseEvents=!0,this.add(this.cube),this.add(this.sphere),this.addHoverEvent(t=>{var l,c,h;const i=this.sphere,s=this.cube;if(H.currentMode!=="sculpt"){i.visible=!1,s.visible=!1;return}this.marchCubes?(i.scale.setScalar(H.brushSize+1),s.scale.setScalar(H.brushSize*2+1)):(i.scale.setScalar(H.brushSize+2),s.scale.setScalar(H.brushSize===1?1:(H.brushSize-1)*2),s.scale.addScalar(.01)),i.visible=H.brushShape==="round",s.visible=H.brushShape==="square";let r=t.intersect.point.clone().add((l=t.intersect.normal)==null?void 0:l.clone().divideScalar(10)).addScalar(.5).floor();H.brushShape==="square"&&H.brushSize>1&&(r=r.subScalar(.5)),r=this.worldToLocal(r),i.position.copy(r),s.position.copy(r);const o=H.isMouseDown[0]||H.isMouseDown[2],a=H.isMouseDown[0]&&H.isMouseDown[2];if(o&&t.ctrlKey&&!a&&Date.now()-this.lastDragTime>100){if(H.isMouseDown[2]&&(r=r.add((c=t.intersect.normal)==null?void 0:c.clone().ceil().multiplyScalar(-1))),r=this.worldToLocal(r),this.marchCubes){const d=H.brushSize+1;this.draw(r,H.brushShape,d,H.isMouseDown[2]?0:1,!0)}else{const d=H.brushSize-1;this.draw(r,H.brushShape,d,H.isMouseDown[2]?0:1,!0)}this.lastDragTime=Date.now()}else if(this.isSelecting&&this.selectFirstPosition){i.visible=!1,s.visible=!0;const d=this.selectFirstPosition,f=r;let p=new D().subVectors(f,d);p=new D(Math.abs(p.x),Math.abs(p.y),Math.abs(p.z));const _=new D().addVectors(d,f).multiplyScalar(.5);s.scale.set(p.x+1.01,p.y+1.01,p.z+1.01),s.position.copy(_),this.selectButton===2&&(r=r.add((h=t.intersect.normal)==null?void 0:h.clone().ceil().multiplyScalar(-1))),this.selectSecondPosition=r}}),this.addMouseDownEvent(t=>{var i;if(t.altKey){this.selectButton=t.button,this.isSelecting=!0;let s=t.intersect.point.clone().add((i=t.intersect.normal)==null?void 0:i.clone().divideScalar(10)).addScalar(.5).floor();s=this.worldToLocal(s),this.selectFirstPosition=s}}),document.addEventListener("mouseup",this.mouseUp),this.addHoverOutEvent(()=>{const t=this.sphere,i=this.cube;t.visible=!1,i.visible=!1}),this.addClickListener(t=>{var i,s;if(H.currentMode==="sculpt"){let r=t.intersect.point.clone().add((i=t.intersect.normal)==null?void 0:i.clone().divideScalar(10)).addScalar(.5).floor();if(this.marchCubes||t.button==2&&(r=r.add((s=t.intersect.normal)==null?void 0:s.clone().ceil().multiplyScalar(-1))),r=this.worldToLocal(r),this.marchCubes){const o=H.brushSize+1;this.draw(r,H.brushShape,o,t.button===2?0:1,!0)}else{const o=H.brushSize-1;this.draw(r,H.brushShape,o,t.button===2?0:1,!0)}}})}destoy(){super.destoy(),document.removeEventListener("mouseup",this.mouseUp)}clone(){const t=super.clone();for(const i of Object.keys(this))if(!(i in t))try{t[i]=this[i]}catch{}t.data={};for(const[i,s]of Object.entries(this.data))for(const[r,o]of Object.entries(this.data))for(const[a,l]of Object.entries(this.data))t.setVoxel(+i,+r,+a,this.getVoxel(+i,+r,+a));return t}};u(gm,"VoxelMesh");let Qi=gm;const cv={type:"change"},ff={type:"start"},i1={type:"end"},xa=new ns,uv=new Pn,aw=Math.cos(70*Hi.DEG2RAD),Rt=new D,dn=2*Math.PI,pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Kc=1e-6,_m=class _m extends Jh{constructor(e,t=null){super(e,t),this.state=pt.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_r.ROTATE,MIDDLE:_r.DOLLY,RIGHT:_r.PAN},this.touches={ONE:lr.ROTATE,TWO:lr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Nn,this._lastTargetPosition=new D,this._quat=new Nn().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new pl,this._sphericalDelta=new pl,this._scale=1,this._panOffset=new D,this._rotateStart=new ve,this._rotateEnd=new ve,this._rotateDelta=new ve,this._panStart=new ve,this._panEnd=new ve,this._panDelta=new ve,this._dollyStart=new ve,this._dollyEnd=new ve,this._dollyDelta=new ve,this._dollyDirection=new D,this._mouse=new ve,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=cw.bind(this),this._onPointerDown=lw.bind(this),this._onPointerUp=uw.bind(this),this._onContextMenu=_w.bind(this),this._onMouseWheel=fw.bind(this),this._onKeyDown=pw.bind(this),this._onTouchStart=mw.bind(this),this._onTouchMove=gw.bind(this),this._onMouseDown=hw.bind(this),this._onMouseMove=dw.bind(this),this._interceptControlDown=vw.bind(this),this._interceptControlUp=xw.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(cv),this.update(),this.state=pt.NONE}update(e=null){const t=this.object.position;Rt.copy(t).sub(this.target),Rt.applyQuaternion(this._quat),this._spherical.setFromVector3(Rt),this.autoRotate&&this.state===pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=dn:i>Math.PI&&(i-=dn),s<-Math.PI?s+=dn:s>Math.PI&&(s-=dn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Rt.setFromSpherical(this._spherical),Rt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Rt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Rt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Rt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(xa.origin.copy(this.object.position),xa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xa.direction))<aw?this.object.lookAt(this.target):(uv.setFromNormalAndCoplanarPoint(this.object.up,this.target),xa.intersectPlane(uv,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Kc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Kc||this._lastTargetPosition.distanceToSquared(this.target)>Kc?(this.dispatchEvent(cv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?dn/60*this.autoRotateSpeed*e:dn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Rt.setFromMatrixColumn(t,0),Rt.multiplyScalar(-e),this._panOffset.add(Rt)}_panUp(e,t){this.screenSpacePanning===!0?Rt.setFromMatrixColumn(t,1):(Rt.setFromMatrixColumn(t,0),Rt.crossVectors(this.object.up,Rt)),Rt.multiplyScalar(e),this._panOffset.add(Rt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Rt.copy(s).sub(this.target);let r=Rt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(dn*this._rotateDelta.x/t.clientHeight),this._rotateUp(dn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(dn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-dn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(dn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-dn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(dn*this._rotateDelta.x/t.clientHeight),this._rotateUp(dn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ve,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};u(_m,"OrbitControls");let ed=_m;function lw(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}u(lw,"onPointerDown");function cw(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}u(cw,"onPointerMove");function uw(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(i1),this.state=pt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}u(uw,"onPointerUp");function hw(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case _r.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=pt.DOLLY;break;case _r.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=pt.ROTATE}break;case _r.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=pt.PAN}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(ff)}u(hw,"onMouseDown");function dw(n){switch(this.state){case pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}u(dw,"onMouseMove");function fw(n){this.enabled===!1||this.enableZoom===!1||this.state!==pt.NONE||(n.preventDefault(),this.dispatchEvent(ff),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(i1))}u(fw,"onMouseWheel");function pw(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}u(pw,"onKeyDown");function mw(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case lr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=pt.TOUCH_ROTATE;break;case lr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=pt.TOUCH_PAN;break;default:this.state=pt.NONE}break;case 2:switch(this.touches.TWO){case lr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=pt.TOUCH_DOLLY_PAN;break;case lr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=pt.TOUCH_DOLLY_ROTATE;break;default:this.state=pt.NONE}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(ff)}u(mw,"onTouchStart");function gw(n){switch(this._trackPointer(n),this.state){case pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=pt.NONE}}u(gw,"onTouchMove");function _w(n){this.enabled!==!1&&n.preventDefault()}u(_w,"onContextMenu");function vw(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}u(vw,"interceptControlDown");function xw(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}u(xw,"interceptControlUp");const vm=class vm{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}};u(vm,"Pass");let cs=vm;const yw=new Rr(-1,1,1,-1,0,1),xm=class xm extends en{constructor(){super(),this.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ht([0,2,0,0,2,0],2))}};u(xm,"FullscreenTriangleGeometry");let td=xm;const Mw=new td,ym=class ym{constructor(e){this._mesh=new Lt(Mw,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,yw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};u(ym,"FullScreenQuad");let Po=ym;function hv(n,e){if(e===vM)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===oh||e===j0){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===oh)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}u(hv,"toTrianglesDrawMode");const Mm=class Mm extends ls{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new rd(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new cd(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new sd(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new ad(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new nd(t)}),this.register(function(t){return new vd(t)}),this.register(function(t){return new xd(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Us.extractUrlBase(e);o=Us.resolveURL(c,this.path)}else o=Us.extractUrlBase(e);this.manager.itemStart(e);const a=u(function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},"_onError"),l=new ul(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===s1){try{o[Je.KHR_BINARY_GLTF]=new yd(e)}catch(d){s&&s(d);return}r=JSON.parse(o[Je.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new wd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(d){case Je.KHR_MATERIALS_UNLIT:o[d]=new id;break;case Je.KHR_DRACO_MESH_COMPRESSION:o[d]=new Md(r,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:o[d]=new Sd;break;case Je.KHR_MESH_QUANTIZATION:o[d]=new bd;break;default:f.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};u(Mm,"GLTFLoader");let gl=Mm;function Sw(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}u(Sw,"GLTFRegistry");const Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Sm=class Sm{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new we(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Yt);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Yh(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ro(h),c.distance=d;break;case"spot":c=new jh(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,_i(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}};u(Sm,"GLTFLightsExtension");let nd=Sm;const bm=class bm{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return ii}extendParams(e,t,i){const s=[];e.color=new we(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Yt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,ln))}return Promise.all(s)}};u(bm,"GLTFMaterialsUnlitExtension");let id=bm;const Em=class Em{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}};u(Em,"GLTFMaterialsEmissiveStrengthExtension");let sd=Em;const Tm=class Tm{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ve(a,a)}return Promise.all(r)}};u(Tm,"GLTFMaterialsClearcoatExtension");let rd=Tm;const Am=class Am{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}};u(Am,"GLTFMaterialsDispersionExtension");let od=Am;const wm=class wm{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}};u(wm,"GLTFMaterialsIridescenceExtension");let ad=wm;const Cm=class Cm{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Yt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ln)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}};u(Cm,"GLTFMaterialsSheenExtension");let ld=Cm;const Rm=class Rm{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}};u(Rm,"GLTFMaterialsTransmissionExtension");let cd=Rm;const Pm=class Pm{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new we().setRGB(a[0],a[1],a[2],Yt),Promise.all(r)}};u(Pm,"GLTFMaterialsVolumeExtension");let ud=Pm;const Dm=class Dm{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}};u(Dm,"GLTFMaterialsIorExtension");let hd=Dm;const Im=class Im{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new we().setRGB(a[0],a[1],a[2],Yt),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,ln)),Promise.all(r)}};u(Im,"GLTFMaterialsSpecularExtension");let dd=Im;const Lm=class Lm{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}};u(Lm,"GLTFMaterialsBumpExtension");let fd=Lm;const Nm=class Nm{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}};u(Nm,"GLTFMaterialsAnisotropyExtension");let pd=Nm;const Om=class Om{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}};u(Om,"GLTFTextureBasisUExtension");let md=Om;const Um=class Um{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}};u(Um,"GLTFTextureWebPExtension");let gd=Um;const Fm=class Fm{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}};u(Fm,"GLTFTextureAVIFExtension");let _d=Fm;const Bm=class Bm{constructor(e){this.name=Je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,h=s.count,d=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,f,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(p),h,d,f,s.mode,s.filter),p})})}else return null}};u(Bm,"GLTFMeshoptCompression");let vd=Bm;const zm=class zm{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==Cn.TRIANGLES&&c.mode!==Cn.TRIANGLE_STRIP&&c.mode!==Cn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),d=h.isGroup?h.children:[h],f=c[0].count,p=[];for(const _ of d){const y=new Ge,g=new D,m=new Nn,A=new D(1,1,1),b=new Rh(_.geometry,_.material,f);for(let w=0;w<f;w++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,w),l.SCALE&&A.fromBufferAttribute(l.SCALE,w),b.setMatrixAt(w,y.compose(g,m,A));for(const w in l)if(w==="_COLOR_0"){const O=l[w];b.instanceColor=new wo(O.array,O.itemSize,O.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&_.geometry.setAttribute(w,l[w]);yt.prototype.copy.call(b,_),this.parser.assignFinalMaterial(b),p.push(b)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}};u(zm,"GLTFMeshGpuInstancing");let xd=zm;const s1="glTF",jr=12,dv={JSON:1313821514,BIN:5130562},km=class km{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,jr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==s1)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-jr,r=new DataView(e,jr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===dv.JSON){const c=new Uint8Array(e,jr+o,a);this.content=i.decode(c)}else if(l===dv.BIN){const c=jr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}};u(km,"GLTFBinaryExtension");let yd=km;const Vm=class Vm{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const d=Td[h]||h.toLowerCase();a[d]=o[h]}for(const h in e.attributes){const d=Td[h]||h.toLowerCase();if(o[h]!==void 0){const f=i.accessors[e.attributes[h]],p=Sr[f.componentType];c[d]=p.name,l[d]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,f){s.decodeDracoFile(h,function(p){for(const _ in p.attributes){const y=p.attributes[_],g=l[_];g!==void 0&&(y.normalized=g)}d(p)},a,c,Yt,f)})})}};u(Vm,"GLTFDracoMeshCompressionExtension");let Md=Vm;const Hm=class Hm{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}};u(Hm,"GLTFTextureTransformExtension");let Sd=Hm;const Gm=class Gm{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}};u(Gm,"GLTFMeshQuantizationExtension");let bd=Gm;const Wm=class Wm extends Hs{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,d=(i-t)/h,f=d*d,p=f*d,_=e*c,y=_-c,g=-2*p+3*f,m=p-f,A=1-g,b=m-f+d;for(let w=0;w!==a;w++){const O=o[y+w+a],P=o[y+w+l]*h,C=o[_+w+a],L=o[_+w]*h;r[w]=A*O+b*P+g*C+m*L}return r}};u(Wm,"GLTFCubicSplineInterpolant");let _l=Wm;const bw=new Nn,jm=class jm extends _l{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return bw.fromArray(r).normalize().toArray(r),r}};u(jm,"GLTFCubicSplineQuaternionInterpolant");let Ed=jm;const Cn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Sr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},fv={9728:$t,9729:Sn,9984:O0,9985:Ta,9986:$r,9987:xi},pv={33071:Xi,33648:Ha,10497:Ar},qc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Td={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ew={CUBICSPLINE:void 0,LINEAR:So,STEP:Mo},Zc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Tw(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Ji({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:oi})),n.DefaultMaterial}u(Tw,"createDefaultMaterial");function Ts(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}u(Ts,"addUnknownExtensionsToUserData");function _i(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}u(_i,"assignExtrasToUserData");function Aw(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const d=e[c];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const d=e[c];if(i){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;o.push(f)}if(s){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;a.push(f)}if(r){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],d=c[1],f=c[2];return i&&(n.morphAttributes.position=h),s&&(n.morphAttributes.normal=d),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}u(Aw,"addMorphTargets");function ww(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}u(ww,"updateMorphTargets");function Cw(n){let e;const t=n.extensions&&n.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Jc(t.attributes):e=n.indices+":"+Jc(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Jc(n.targets[i]);return e}u(Cw,"createPrimitiveKey");function Jc(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}u(Jc,"createAttributesKey");function Ad(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}u(Ad,"getNormalizedComponentScale");function Rw(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}u(Rw,"getImageURIMimeType");const Pw=new Ge,Xm=class Xm{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Sw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new Gh(this.options.manager):this.textureLoader=new Kh(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ul(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return Ts(r,a,s),_i(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=u((o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])},"updateMappings");return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(Us.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=qc[s.type],a=Sr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Vt(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=qc[s.type],c=Sr[s.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,f=s.byteOffset||0,p=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,_=s.normalized===!0;let y,g;if(p&&p!==d){const m=Math.floor(f/p),A="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let b=t.cache.get(A);b||(y=new c(a,m*p,s.count*p/h),b=new Th(y,p/h),t.cache.add(A,b)),g=new Ah(b,l,f%p/h,_)}else a===null?y=new c(s.count*l):y=new c(a,f,s.count*l),g=new Vt(y,l,_);if(s.sparse!==void 0){const m=qc.SCALAR,A=Sr[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,w=s.sparse.values.byteOffset||0,O=new A(o[1],b,s.sparse.count*m),P=new c(o[2],w,s.sparse.count*l);a!==null&&(g=new Vt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let C=0,L=O.length;C<L;C++){const ie=O[C];if(g.setX(ie,P[C*l]),l>=2&&g.setY(ie,P[C*l+1]),l>=3&&g.setZ(ie,P[C*l+2]),l>=4&&g.setW(ie,P[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=_}return g})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=fv[f.magFilter]||Sn,h.minFilter=fv[f.minFilter]||xi,h.wrapS=pv[f.wrapS]||Ar,h.wrapT=pv[f.wrapT]||Ar,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(d){return new Promise(function(f,p){let _=f;t.isImageBitmapLoader===!0&&(_=u(function(y){const g=new Qt(y);g.needsUpdate=!0,f(g)},"onLoad")),t.load(Us.resolveURL(d,r.path),_,void 0,p)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),_i(d,o),d.userData.mimeType=o.mimeType||Rw(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[Je.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new ll,En.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new ks,En.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Ji}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Je.KHR_MATERIALS_UNLIT]){const d=s[Je.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,r,t))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new we(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Yt),a.opacity=f[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,ln)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=cn);const h=r.alphaMode||Zc.OPAQUE;if(h===Zc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Zc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==ii&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ve(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==ii&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==ii){const d=r.emissiveFactor;a.emissive=new we().setRGB(d[0],d[1],d[2],Yt)}return r.emissiveTexture!==void 0&&o!==ii&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,ln)),Promise.all(c).then(function(){const d=new o(a);return r.name&&(d.name=r.name),_i(d,r),t.associations.set(d,{materials:e}),r.extensions&&Ts(s,d,r),d})}createUniqueName(e){const t=_t.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return mv(l,a,t)})}u(r,"createDracoPrimitive");const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=Cw(c),d=s[h];if(d)o.push(d.promise);else{let f;c.extensions&&c.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=mv(new en,c,t),s[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?Tw(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let p=0,_=h.length;p<_;p++){const y=h[p],g=o[p];let m;const A=c[p];if(g.mode===Cn.TRIANGLES||g.mode===Cn.TRIANGLE_STRIP||g.mode===Cn.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new wh(y,A):new Lt(y,A),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===Cn.TRIANGLE_STRIP?m.geometry=hv(m.geometry,j0):g.mode===Cn.TRIANGLE_FAN&&(m.geometry=hv(m.geometry,oh));else if(g.mode===Cn.LINES)m=new al(y,A);else if(g.mode===Cn.LINE_STRIP)m=new Vs(y,A);else if(g.mode===Cn.LINE_LOOP)m=new Ph(y,A);else if(g.mode===Cn.POINTS)m=new Ih(y,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&ww(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),_i(m,r),g.extensions&&Ts(s,m,g),t.assignFinalMaterial(m),d.push(m)}for(let p=0,_=d.length;p<_;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return r.extensions&&Ts(s,d[0],r),d[0];const f=new $i;r.extensions&&Ts(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,_=d.length;p<_;p++)f.add(d[p]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new jt(Hi.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Rr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),_i(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const d=o[c];if(d){a.push(d);const f=new Ge;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ch(a,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let d=0,f=s.channels.length;d<f;d++){const p=s.channels[d],_=s.samplers[p.sampler],y=p.target,g=y.node,m=s.parameters!==void 0?s.parameters[_.input]:_.input,A=s.parameters!==void 0?s.parameters[_.output]:_.output;y.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",A)),c.push(_),h.push(y))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){const f=d[0],p=d[1],_=d[2],y=d[3],g=d[4],m=[];for(let A=0,b=f.length;A<b;A++){const w=f[A],O=p[A],P=_[A],C=y[A],L=g[A];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const ie=i._createAnimationTracks(w,O,P,C,L);if(ie)for(let M=0;M<ie.length;M++)m.push(ie[M])}return new zh(r,void 0,m)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(i.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],d=c[1],f=c[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,Pw)});for(let p=0,_=d.length;p<_;p++)h.add(d[p]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new il:c.length>1?h=new $i:c.length===1?h=c[0]:h=new yt,h!==c[0])for(let d=0,f=c.length;d<f;d++)h.add(c[d]);if(r.name&&(h.userData.name=r.name,h.name=o),_i(h,r),r.extensions&&Ts(i,h,r),r.matrix!==void 0){const d=new Ge;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new $i;i.name&&(r.name=s.createUniqueName(i.name)),_i(r,i),i.extensions&&Ts(t,r,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,d=l.length;h<d;h++)r.add(l[h]);const c=u(h=>{const d=new Map;for(const[f,p]of s.associations)(f instanceof En||f instanceof Qt)&&d.set(f,p);return h.traverse(f=>{const p=s.associations.get(f);p!=null&&d.set(f,p)}),d},"reduceAssociations");return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];Ui[r.path]===Ui.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Ui[r.path]){case Ui.weights:c=ss;break;case Ui.rotation:c=rs;break;case Ui.position:case Ui.scale:c=as;break;default:switch(i.itemSize){case 1:c=ss;break;case 2:case 3:default:c=as;break}break}const h=s.interpolation!==void 0?Ew[s.interpolation]:So,d=this._getArrayFromAccessor(i);for(let f=0,p=l.length;f<p;f++){const _=new c(l[f]+"."+Ui[r.path],t.array,d,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Ad(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=u(function(i){const s=this instanceof rs?Ed:_l;return new s(this.times,this.values,this.getValueSize()/3,i)},"InterpolantFactoryMethodGLTFCubicSpline"),e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};u(Xm,"GLTFParser");let wd=Xm;function Dw(n,e,t){const i=e.attributes,s=new Yn;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),a.normalized){const h=Ad(Sr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new D,l=new D;for(let c=0,h=r.length;c<h;c++){const d=r[c];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],p=f.min,_=f.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),f.normalized){const y=Ad(Sr[f.componentType]);l.multiplyScalar(y)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new On;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}u(Dw,"computeBounds");function mv(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}u(r,"assignAttributeAccessor");for(const o in i){const a=Td[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return st.workingColorSpace!==Yt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),_i(n,e),Dw(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Aw(n,e.targets,t):n})}u(mv,"addPrimitiveAttributes");const oo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`},$m=class $m extends cs{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof St?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ls.clone(e.uniforms),this.material=new St({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Po(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};u($m,"ShaderPass");let vl=$m;const Ym=class Ym extends cs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}};u(Ym,"MaskPass");let xl=Ym;const Km=class Km extends cs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};u(Km,"ClearMaskPass");let Cd=Km;const qm=class qm{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new ve);this._width=i.width,this._height=i.height,t=new Pt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new vl(oo),this.copyPass.material.blending=zt,this.clock=new dl}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}xl!==void 0&&(o instanceof xl?i=!0:o instanceof Cd&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ve);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};u(qm,"EffectComposer");let Rd=qm;const Ds=class Ds extends cs{constructor(e,t,i,s){super(),this.renderScene=t,this.renderCamera=i,this.selectedObjects=s!==void 0?s:[],this.visibleEdgeColor=new we(1,1,1),this.hiddenEdgeColor=new we(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this._selectionCache=new Set,this.resolution=e!==void 0?new ve(e.x,e.y):new ve(256,256);const r=Math.round(this.resolution.x/this.downSampleRatio),o=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new Pt(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new tl,this.depthMaterial.side=cn,this.depthMaterial.depthPacking=X0,this.depthMaterial.blending=zt,this.prepareMaskMaterial=this.getPrepareMaskMaterial(),this.prepareMaskMaterial.side=cn,this.prepareMaskMaterial.fragmentShader=h(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new Pt(this.resolution.x,this.resolution.y,{type:pn}),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new Pt(r,o,{type:pn}),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new Pt(r,o,{type:pn}),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new Pt(Math.round(r/2),Math.round(o/2),{type:pn}),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this.getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new Pt(r,o,{type:pn}),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new Pt(Math.round(r/2),Math.round(o/2),{type:pn}),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const a=4,l=4;this.separableBlurMaterial1=this.getSeperableBlurMaterial(a),this.separableBlurMaterial1.uniforms.texSize.value.set(r,o),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this.getSeperableBlurMaterial(l),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(r/2),Math.round(o/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=l,this.overlayMaterial=this.getOverlayMaterial();const c=oo;this.copyUniforms=Ls.clone(c.uniforms),this.materialCopy=new St({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:zt,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new we,this.oldClearAlpha=1,this.fsQuad=new Po(null),this.tempPulseColor1=new we,this.tempPulseColor2=new we,this.textureMatrix=new Ge;function h(d,f){const p=f.isPerspectiveCamera?"perspective":"orthographic";return d.replace(/DEPTH_TO_VIEW_Z/g,p+"DepthToViewZ")}u(h,"replaceDepthToViewZ")}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this.fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let i=Math.round(e/this.downSampleRatio),s=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(i,s),this.renderTargetBlurBuffer1.setSize(i,s),this.renderTargetEdgeBuffer1.setSize(i,s),this.separableBlurMaterial1.uniforms.texSize.value.set(i,s),i=Math.round(i/2),s=Math.round(s/2),this.renderTargetBlurBuffer2.setSize(i,s),this.renderTargetEdgeBuffer2.setSize(i,s),this.separableBlurMaterial2.uniforms.texSize.value.set(i,s)}updateSelectionCache(){const e=this._selectionCache;function t(i){i.isMesh&&e.add(i)}u(t,"gatherSelectedMeshesCallBack"),e.clear();for(let i=0;i<this.selectedObjects.length;i++)this.selectedObjects[i].traverse(t)}changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;for(const i of this._selectionCache)e===!0?i.visible=t.get(i):(t.set(i,i.visible),i.visible=e)}changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,i=this._selectionCache;function s(r){if(r.isMesh||r.isSprite){if(!i.has(r)){const o=r.visible;(e===!1||t.get(r)===!0)&&(r.visible=e),t.set(r,o)}}else(r.isPoints||r.isLine)&&(e===!0?r.visible=t.get(r):(t.set(r,r.visible),r.visible=e))}u(s,"VisibilityChangeCallBack"),this.renderScene.traverse(s)}updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}render(e,t,i,s,r){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,r&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this.updateSelectionCache(),this.changeVisibilityOfSelectedObjects(!1);const a=this.renderScene.background;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this.updateTextureMatrix(),this.changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.renderScene.overrideMaterial=null,this.changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this._selectionCache.clear(),this.renderScene.background=a,this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this.fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const l=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(l),this.tempPulseColor2.multiplyScalar(l)}this.fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Ds.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Ds.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=Ds.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=Ds.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,r&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(i),this.fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}this.renderToScreen&&(this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=i.texture,e.setRenderTarget(null),this.fsQuad.render(e))}getPrepareMaskMaterial(){return new St({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new ve(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <morphtarget_pars_vertex>
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

				}`})}getEdgeDetectionMaterial(){return new St({uniforms:{maskTexture:{value:null},texSize:{value:new ve(.5,.5)},visibleEdgeColor:{value:new D(1,1,1)},hiddenEdgeColor:{value:new D(1,1,1)}},vertexShader:`varying vec2 vUv;

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
				}`})}getSeperableBlurMaterial(e){return new St({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new ve(.5,.5)},direction:{value:new ve(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

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
				}`})}getOverlayMaterial(){return new St({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

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
				}`,blending:yu,depthTest:!1,depthWrite:!1,transparent:!0})}};u(Ds,"OutlinePass");let Do=Ds;Do.BlurDirectionX=new ve(1,0);Do.BlurDirectionY=new ve(0,1);const Zm=class Zm extends cs{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new we}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};u(Zm,"RenderPass");let Pd=Zm;const ya={name:"SAOShader",defines:{NUM_SAMPLES:7,NUM_RINGS:4,DIFFUSE_TEXTURE:0,PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},tDiffuse:{value:null},tNormal:{value:null},size:{value:new ve(512,512)},cameraNear:{value:1},cameraFar:{value:100},cameraProjectionMatrix:{value:new Ge},cameraInverseProjectionMatrix:{value:new Ge},scale:{value:1},intensity:{value:.1},bias:{value:.5},minResolution:{value:0},kernelRadius:{value:100},randomSeed:{value:0}},vertexShader:`

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
		}`},Fi={name:"DepthLimitedBlurShader",defines:{KERNEL_RADIUS:4,DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDiffuse:{value:null},size:{value:new ve(512,512)},sampleUvOffsets:{value:[new ve(0,0)]},sampleWeights:{value:[1]},tDepth:{value:null},cameraNear:{value:10},cameraFar:{value:1e3},depthCutoff:{value:10}},vertexShader:`

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
		}`},yl={createSampleWeights:function(n,e){const t=[];for(let i=0;i<=n;i++)t.push(Iw(i,e));return t},createSampleOffsets:function(n,e){const t=[];for(let i=0;i<=n;i++)t.push(e.clone().multiplyScalar(i));return t},configure:function(n,e,t,i){n.defines.KERNEL_RADIUS=e,n.uniforms.sampleUvOffsets.value=yl.createSampleOffsets(e,i),n.uniforms.sampleWeights.value=yl.createSampleWeights(e,t),n.needsUpdate=!0}};function Iw(n,e){return Math.exp(-(n*n)/(2*(e*e)))/(Math.sqrt(2*Math.PI)*e)}u(Iw,"gaussian");const uo=class uo extends cs{constructor(e,t,i=new ve(256,256)){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.originalClearColor=new we,this._oldClearColor=new we,this.oldClearAlpha=1,this.params={output:0,saoBias:.5,saoIntensity:.18,saoScale:1,saoKernelRadius:100,saoMinResolution:0,saoBlur:!0,saoBlurRadius:8,saoBlurStdDev:4,saoBlurDepthCutoff:.01},this.resolution=new ve(i.x,i.y),this.saoRenderTarget=new Pt(this.resolution.x,this.resolution.y,{type:pn}),this.blurIntermediateRenderTarget=this.saoRenderTarget.clone();const s=new Ao;s.format=zs,s.type=Bs,this.normalRenderTarget=new Pt(this.resolution.x,this.resolution.y,{minFilter:$t,magFilter:$t,type:pn,depthTexture:s}),this.normalMaterial=new Nh,this.normalMaterial.blending=zt,this.saoMaterial=new St({defines:Object.assign({},ya.defines),fragmentShader:ya.fragmentShader,vertexShader:ya.vertexShader,uniforms:Ls.clone(ya.uniforms)}),this.saoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.saoMaterial.uniforms.tDepth.value=s,this.saoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.saoMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.blending=zt,this.vBlurMaterial=new St({uniforms:Ls.clone(Fi.uniforms),defines:Object.assign({},Fi.defines),vertexShader:Fi.vertexShader,fragmentShader:Fi.fragmentShader}),this.vBlurMaterial.defines.DEPTH_PACKING=0,this.vBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.vBlurMaterial.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.vBlurMaterial.uniforms.tDepth.value=s,this.vBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.vBlurMaterial.blending=zt,this.hBlurMaterial=new St({uniforms:Ls.clone(Fi.uniforms),defines:Object.assign({},Fi.defines),vertexShader:Fi.vertexShader,fragmentShader:Fi.fragmentShader}),this.hBlurMaterial.defines.DEPTH_PACKING=0,this.hBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.hBlurMaterial.uniforms.tDiffuse.value=this.blurIntermediateRenderTarget.texture,this.hBlurMaterial.uniforms.tDepth.value=s,this.hBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.hBlurMaterial.blending=zt,this.materialCopy=new St({uniforms:Ls.clone(oo.uniforms),vertexShader:oo.vertexShader,fragmentShader:oo.fragmentShader,blending:zt}),this.materialCopy.transparent=!0,this.materialCopy.depthTest=!1,this.materialCopy.depthWrite=!1,this.materialCopy.blending=Mu,this.materialCopy.blendSrc=I0,this.materialCopy.blendDst=Su,this.materialCopy.blendEquation=vi,this.materialCopy.blendSrcAlpha=D0,this.materialCopy.blendDstAlpha=Su,this.materialCopy.blendEquationAlpha=vi,this.fsQuad=new Po(null)}render(e,t,i){this.renderToScreen&&(this.materialCopy.blending=zt,this.materialCopy.uniforms.tDiffuse.value=i.texture,this.materialCopy.needsUpdate=!0,this.renderPass(e,this.materialCopy,null)),e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const s=e.autoClear;e.autoClear=!1,this.saoMaterial.uniforms.bias.value=this.params.saoBias,this.saoMaterial.uniforms.intensity.value=this.params.saoIntensity,this.saoMaterial.uniforms.scale.value=this.params.saoScale,this.saoMaterial.uniforms.kernelRadius.value=this.params.saoKernelRadius,this.saoMaterial.uniforms.minResolution.value=this.params.saoMinResolution,this.saoMaterial.uniforms.cameraNear.value=this.camera.near,this.saoMaterial.uniforms.cameraFar.value=this.camera.far;const r=this.params.saoBlurDepthCutoff*(this.camera.far-this.camera.near);this.vBlurMaterial.uniforms.depthCutoff.value=r,this.hBlurMaterial.uniforms.depthCutoff.value=r,this.vBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.vBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.hBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.hBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.params.saoBlurRadius=Math.floor(this.params.saoBlurRadius),(this.prevStdDev!==this.params.saoBlurStdDev||this.prevNumSamples!==this.params.saoBlurRadius)&&(yl.configure(this.vBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new ve(0,1)),yl.configure(this.hBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new ve(1,0)),this.prevStdDev=this.params.saoBlurStdDev,this.prevNumSamples=this.params.saoBlurRadius),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.renderPass(e,this.saoMaterial,this.saoRenderTarget,16777215,1),this.params.saoBlur&&(this.renderPass(e,this.vBlurMaterial,this.blurIntermediateRenderTarget,16777215,1),this.renderPass(e,this.hBlurMaterial,this.saoRenderTarget,16777215,1));const o=this.materialCopy;this.params.output===uo.OUTPUT.Normal?(this.materialCopy.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.materialCopy.needsUpdate=!0):(this.materialCopy.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.materialCopy.needsUpdate=!0),this.params.output===uo.OUTPUT.Default?o.blending=Mu:o.blending=zt,this.renderPass(e,o,this.renderToScreen?null:i),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=s}renderPass(e,t,i,s,r){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,i,s,r){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.saoRenderTarget.setSize(e,t),this.blurIntermediateRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.saoMaterial.uniforms.size.value.set(e,t),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.needsUpdate=!0,this.vBlurMaterial.uniforms.size.value.set(e,t),this.vBlurMaterial.needsUpdate=!0,this.hBlurMaterial.uniforms.size.value.set(e,t),this.hBlurMaterial.needsUpdate=!0}dispose(){this.saoRenderTarget.dispose(),this.blurIntermediateRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.normalMaterial.dispose(),this.saoMaterial.dispose(),this.vBlurMaterial.dispose(),this.hBlurMaterial.dispose(),this.materialCopy.dispose(),this.fsQuad.dispose()}};u(uo,"SAOPass");let Ml=uo;Ml.OUTPUT={Default:0,SAO:1,Normal:2};const Lw={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new ve(1/1024,1/512)}},vertexShader:`

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
	`},ho=class ho{constructor(){se(this,"translateX");se(this,"translateY");se(this,"translateZ");se(this,"translateFree");se(this,"scaleX");se(this,"scaleY");se(this,"scaleZ");se(this,"scaleFree");se(this,"rotateX");se(this,"rotateY");se(this,"rotateZ");se(this,"rotateFree");se(this,"rotateCover");se(this,"scene",new yt);se(this,"selectedObjects",[]);se(this,"camera");se(this,"rotateMaterialX");se(this,"rotateMaterialY");se(this,"rotateMaterialZ");se(this,"update",u(e=>{this.camera=e,H.currentMode!=="object"&&(this.selectedObjects=[]);let t=e.position.distanceTo(this.scene.position);t<35&&(t=35),this.scene.scale.x=t/35,this.scene.scale.y=t/35,this.scene.scale.z=t/35,H.multipleSelections=this.selectedObjects.length>1,this.selectedObjects.length>0?(H.selectedObject=this.selectedObjects[this.selectedObjects.length-1],this.scene.position.set(0,0,0),this.selectedObjects.forEach(i=>{this.scene.position.add(i.position)}),this.scene.position.divideScalar(this.selectedObjects.length),this.setVisible(!0)):(this.setVisible(!1),H.selectedObject=void 0),this.rotateMaterialX&&(this.rotateMaterialX.uniforms.p.value=this.scene.position),this.rotateMaterialY&&(this.rotateMaterialY.uniforms.p.value=this.scene.position),this.rotateMaterialZ&&(this.rotateMaterialZ.uniforms.p.value=this.scene.position)},"update"));se(this,"setVisible",u(e=>{this.scene.userData.visible=e,H.objectModeState==="move"&&H.currentMode==="object"?this.scene.traverse(t=>{t.visible=e&&[this.translateX,this.translateY,this.translateZ,this.translateFree].includes(t),t.draggable=t.visible,t.disableMouseEvents=!t.visible}):H.objectModeState==="scale"&&H.currentMode==="object"?this.scene.traverse(t=>{t.visible=e&&[this.scaleX,this.scaleY,this.scaleZ,this.scaleFree].includes(t),t.draggable=t.visible,t.disableMouseEvents=!t.visible}):H.objectModeState==="rotate"&&H.currentMode==="object"?this.scene.traverse(t=>{t.visible=e&&[this.rotateX,this.rotateY,this.rotateZ,this.rotateFree].includes(t),t.draggable=t.visible,t.disableMouseEvents=!t.visible}):(this.scene.traverse(t=>{t.visible=!1,t.draggable=!1,t.disableMouseEvents=!0}),this.scene.userData.visible=!1)},"setVisible"));const e=new gl;e.load(H.baseUrl+"/mesh/translate_mesh.glb",t=>{var s,r,o;[...t.scene.children].forEach(a=>{let l=a;l.isMesh&&(l=$n.fromMesh(l),l.draggable=!1,l.internal=!0,l.geometry.computeBoundingBox()),l.name==="X"?(this.translateX=l,this.scene.add(l)):l.name==="Y"?(this.translateY=l,this.scene.add(l)):l.name==="Z"?(this.translateZ=l,this.scene.add(l)):l.name==="Free"&&(this.translateFree=l,this.scene.add(l))}),(s=this.translateX)==null||s.addDragListener(a=>{H.objectModeState!=="move"||H.currentMode!=="object"||this.selectedObjects.forEach(l=>{if(a.isFirstMovement){const h=l.position.clone();H.pushAction({in:()=>(l&&l.position.copy(h),!1)}),l.userData.position=l.position.clone()}let c=a.movement3dXZ.x-a.movement3dOriginXZ.x;l.userData.position.x+=c,H.snapActive?l.position.x=Math.round(l.userData.position.x/5)*5:l.position.x=l.userData.position.x})}),(r=this.translateY)==null||r.addDragListener(a=>{H.objectModeState!=="move"||H.currentMode!=="object"||this.selectedObjects.forEach(l=>{if(a.isFirstMovement){const h=l.position.clone();H.pushAction({in:()=>(l&&l.position.copy(h),!1)}),l.userData.position=l.position.clone()}let c=a.movement3dY.y-a.movement3dOriginY.y;l.userData.position.y+=c,H.snapActive?l.position.y=Math.round(l.userData.position.y/5)*5:l.position.y=l.userData.position.y})}),(o=this.translateZ)==null||o.addDragListener(a=>{H.objectModeState!=="move"||H.currentMode!=="object"||this.selectedObjects.forEach(l=>{if(a.isFirstMovement){const h=l.position.clone();H.pushAction({in:()=>(l&&l.position.copy(h),!1)}),l.userData.position=l.position.clone()}let c=a.movement3dXZ.z-a.movement3dOriginXZ.z;l.userData.position.z+=c,H.snapActive?l.position.z=Math.round(l.userData.position.z/5)*5:l.position.z=l.userData.position.z})})},()=>{},console.error),e.load(H.baseUrl+"/mesh/scale_mesh.glb",t=>{var s,r,o;[...t.scene.children].forEach(a=>{let l=a;l.isMesh&&(l=$n.fromMesh(l),l.draggable=!1,l.internal=!0,l.geometry.computeBoundingBox()),l.name==="X"?(this.scaleX=l,this.scene.add(l)):l.name==="Y"?(this.scaleY=l,this.scene.add(l)):l.name==="Z"?(this.scaleZ=l,this.scene.add(l)):l.name==="Free"&&(this.scaleFree=l,this.scene.add(l))}),(s=this.scaleX)==null||s.addDragListener(a=>{H.objectModeState!=="scale"||H.currentMode!=="object"||this.selectedObjects.forEach(l=>{if(a.isFirstMovement){const h=l.scale.clone();H.pushAction({in:()=>(l&&l.scale.copy(h),!1)}),l.userData.scale=l.scale.clone()}let c=a.movement3dXZ.x-a.movement3dOriginXZ.x;l.userData.scale.x+=c/2,H.snapActive?l.scale.x=Math.round(l.userData.scale.x/2.5)*2.5:l.scale.x=l.userData.scale.x,l.scale.x=Math.max(l.scale.x,1)})}),(r=this.scaleY)==null||r.addDragListener(a=>{H.objectModeState!=="scale"||H.currentMode!=="object"||this.selectedObjects.forEach(l=>{if(a.isFirstMovement){const h=l.scale.clone();H.pushAction({in:()=>(l&&l.scale.copy(h),!1)}),l.userData.scale=l.scale.clone()}let c=a.movement3dY.y-a.movement3dOriginY.y;l.userData.scale.y+=c/2,H.snapActive?l.scale.y=Math.round(l.userData.scale.y/2.5)*2.5:l.scale.y=l.userData.scale.y,l.scale.y=Math.max(l.scale.y,1)})}),(o=this.scaleZ)==null||o.addDragListener(a=>{H.objectModeState!=="scale"||H.currentMode!=="object"||this.selectedObjects.forEach(l=>{if(a.isFirstMovement){const h=l.scale.clone();H.pushAction({in:()=>(l&&l.scale.copy(h),!1)}),l.userData.scale=l.scale.clone()}let c=a.movement3dXZ.z-a.movement3dOriginXZ.z;l.userData.scale.z-=c/2,H.snapActive?l.scale.z=Math.round(l.userData.scale.z/2.5)*2.5:l.scale.z=l.userData.scale.z,l.scale.z=Math.max(l.scale.z,1)})})},()=>{},console.error),e.load(H.baseUrl+"/mesh/rotate_mesh.glb",t=>{var r,o,a;const i=[...t.scene.children],s=u(l=>new St({vertexShader:`
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
                    `,uniforms:{color:{value:l},p:{value:new D(0)}}}),"createRotateShader");this.rotateMaterialX=s(new we("#E70200")),this.rotateMaterialY=s(new we("#30E700")),this.rotateMaterialZ=s(new we("#1500E7")),i.forEach(l=>{let c=l;c.isMesh&&(c=$n.fromMesh(c),c.draggable=!1,c.internal=!0,c.geometry.computeBoundingBox()),c.name==="X"?(c.material=this.rotateMaterialX,this.rotateX=c,this.scene.add(c)):c.name==="Y"?(c.material=this.rotateMaterialY,this.rotateY=c,this.scene.add(c)):c.name==="Z"?(c.material=this.rotateMaterialZ,this.rotateZ=c,this.scene.add(c)):c.name==="Free"&&(this.rotateFree=c,c.material.side=cn)}),(r=this.rotateX)==null||r.addDragListener(l=>{H.objectModeState!=="rotate"||H.currentMode!=="object"||this.selectedObjects.forEach(c=>{if(l.isFirstMovement){const f=c.rotation.clone();H.pushAction({in:()=>(c&&c.rotation.copy(f),!1)}),c.userData.rotation=c.rotation.clone(),c.userData.prevAngleX=Math.atan2(l.movement3dOriginY.z,l.movement3dOriginY.y)}const h=Math.atan2(l.movement3dY.z,l.movement3dY.y);let d=h-c.userData.prevAngleX;d>Math.PI?d-=2*Math.PI:d<-Math.PI&&(d+=2*Math.PI),c.userData.prevAngleX=h,c.userData.rotation.x+=d,H.snapActive?c.rotation.x=Math.round(c.userData.rotation.x/(Math.PI/18))*(Math.PI/18):c.rotation.x=c.userData.rotation.x})}),(o=this.rotateY)==null||o.addDragListener(l=>{H.objectModeState!=="rotate"||H.currentMode!=="object"||this.selectedObjects.forEach(c=>{if(l.isFirstMovement){const f=c.rotation.clone();H.pushAction({in:()=>(c&&c.rotation.copy(f),!1)}),c.userData.rotation=c.rotation.clone(),c.userData.prevAngle=Math.atan2(l.movement3dOriginXZ.z,l.movement3dOriginXZ.x)}const h=Math.atan2(l.movement3dXZ.z,l.movement3dXZ.x);let d=h-c.userData.prevAngle;d>Math.PI?d-=2*Math.PI:d<-Math.PI&&(d+=2*Math.PI),c.userData.prevAngle=h,c.userData.rotation.y-=d,H.snapActive?c.rotation.y=Math.round(c.userData.rotation.y/(Math.PI/18))*(Math.PI/18):c.rotation.y=c.userData.rotation.y})}),(a=this.rotateZ)==null||a.addDragListener(l=>{H.objectModeState!=="rotate"||H.currentMode!=="object"||this.selectedObjects.forEach(c=>{if(l.isFirstMovement){const f=c.rotation.clone();H.pushAction({in:()=>(c&&c.rotation.copy(f),!1)}),c.userData.rotation=c.rotation.clone(),c.userData.prevAngleZ=Math.atan2(l.movement3dOriginY.y,l.movement3dOriginY.x)}const h=Math.atan2(l.movement3dY.y,l.movement3dY.x);let d=h-c.userData.prevAngleZ;d>Math.PI?d-=2*Math.PI:d<-Math.PI&&(d+=2*Math.PI),c.userData.prevAngleZ=h,c.userData.rotation.z+=d,H.snapActive?c.rotation.z=Math.round(c.userData.rotation.z/(Math.PI/18))*(Math.PI/18):c.rotation.z=c.userData.rotation.z})})},()=>{},console.error)}};u(ho,"TransformationContext"),se(ho,"INSTANCE",new ho);let Xe=ho;const Nw=tn({methods:{mouseIn(n){this[n]=!0},mouseOut(n){this[n]=!1},addVoxelMesh(){var t;const n=new Qi;n.draw(new D,"square",5,1),n.update();const e=H.renderingContext();e==null||e.clickableObjects.push(n),e==null||e.scene.add(n),H.currentMode==="object"&&(n.select(),Xe.INSTANCE.selectedObjects.push(n),(t=e==null?void 0:e.outlinePass)!=null&&t.selectedObjects&&(e.outlinePass.selectedObjects=Xe.INSTANCE.selectedObjects)),this.mouseInAdd=!1},addVoxel(){var t;const n=new Qi;n.draw(new D,"square",0,1),n.update();const e=H.renderingContext();e==null||e.clickableObjects.push(n),e==null||e.scene.add(n),H.currentMode==="object"&&(n.select(),Xe.INSTANCE.selectedObjects.push(n),(t=e.outlinePass)!=null&&t.selectedObjects&&(e.outlinePass.selectedObjects=Xe.INSTANCE.selectedObjects)),this.mouseInAdd=!1},importFile(){const n=document.createElement("input");n.type="file",n.accept=".glb,.gltf",n.multiple=!1,n.addEventListener("change",e=>{var s;if(!((s=n.files)!=null&&s[0]))return;const t=new FileReader;t.onload=()=>{new gl().load(t.result,o=>{const a=new $n(new Ei(0,0,0),new ii);o.scene.traverse(c=>{c.userData.meshObject=a}),a.name="Imported",a.add(o.scene);const l=H.renderingContext();l&&(l.scene.add(a),l.clickableObjects.push(a),l.selectObjects([a]))})},t.onerror=()=>{};const i=n.files[0];t.readAsDataURL(i)}),n.click(),this.mouseInFile=!1}},data(){return{mouseInFile:!1,mouseInEdit:!1,mouseInAdd:!1,state:H}}}),nn=u((n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},"_export_sfc"),pf=u(n=>(qn("data-v-01d70c69"),n=n(),Zn(),n),"_withScopeId$a"),Ow={class:"top-section"},Uw={class:"menu-bar"},Fw={key:0,class:"menu-list"},Bw=pf(()=>q("div",{class:"menu-list-item"},"Open (Ctrl + O)",-1)),zw=pf(()=>q("div",{class:"menu-list-item"},"Save (Ctrl + S)",-1)),kw=pf(()=>q("div",{class:"menu-list-item"},"Export",-1)),Vw={key:0,class:"menu-list"},Hw={key:0,class:"menu-list"};function Gw(n,e,t,i,s,r){return Be(),nt("div",Ow,[q("div",Uw,[q("div",{onMouseenter:e[1]||(e[1]=o=>n.mouseIn("mouseInFile")),onMouseleave:e[2]||(e[2]=o=>n.mouseOut("mouseInFile")),class:"menu-item"},[q("div",{class:Ft("menu-item-button "+(n.mouseInFile?"menu-item-button-open":""))}," File ",2),n.mouseInFile?(Be(),nt("div",Fw,[Bw,zw,q("div",{onClick:e[0]||(e[0]=(...o)=>n.importFile&&n.importFile(...o)),class:"menu-list-item"},"Import GLB/GLTF"),kw])):xt("",!0)],32),q("div",{onMouseenter:e[6]||(e[6]=o=>n.mouseIn("mouseInEdit")),onMouseleave:e[7]||(e[7]=o=>n.mouseOut("mouseInEdit")),class:"menu-item"},[q("div",{class:Ft("menu-item-button "+(n.mouseInEdit?"menu-item-button-open":""))}," Edit ",2),n.mouseInEdit?(Be(),nt("div",Vw,[q("div",{onClick:e[3]||(e[3]=o=>{var a;(a=n.state.renderingContext())==null||a.copy(),n.mouseInEdit=!1}),class:"menu-list-item"},"Copy (Ctrl + C)"),q("div",{onClick:e[4]||(e[4]=o=>{var a;(a=n.state.renderingContext())==null||a.paste(),n.mouseInEdit=!1}),class:"menu-list-item"},"Paste (Ctrl + V)"),q("div",{onClick:e[5]||(e[5]=o=>{var a;(a=n.state.renderingContext())==null||a.undo(),n.mouseInEdit=!1}),class:"menu-list-item"},"Undo (Ctrl + Z)")])):xt("",!0)],32),q("div",{onMouseenter:e[10]||(e[10]=o=>n.mouseIn("mouseInAdd")),onMouseleave:e[11]||(e[11]=o=>n.mouseOut("mouseInAdd")),class:"menu-item"},[q("div",{class:Ft("menu-item-button "+(n.mouseInAdd?"menu-item-button-open":""))}," Add ",2),n.mouseInAdd?(Be(),nt("div",Hw,[q("div",{onClick:e[8]||(e[8]=(...o)=>n.addVoxelMesh&&n.addVoxelMesh(...o)),class:"menu-list-item"},"Voxel Mesh"),q("div",{onClick:e[9]||(e[9]=(...o)=>n.addVoxel&&n.addVoxel(...o)),class:"menu-list-item"},"Voxel")])):xt("",!0)],32)])])}u(Gw,"_sfc_render$f");const Ww=nn(Nw,[["render",Gw],["__scopeId","data-v-01d70c69"]]),mf=tn({props:{defaultCollapsed:Boolean,item:yt,level:Number,index:Number},mounted(){this.interval=setInterval(()=>{this.$forceUpdate()},100)},unmounted(){clearInterval(this.interval)},methods:{checkChange(n,e,t,i){var r,o,a;let s;if(t?(r=window.renderingContext)==null||r.scene.traverse(l=>{l.id===n.id&&(s=l)}):s=n,!!s){if(i&&!this.isItemInternal(s)&&(s.visible=!s.visible),s.isMeshObject&&!this.isItemInternal(s)&&e.target.checked&&!s.selected&&!i&&(s.select(),Xe.INSTANCE.selectedObjects.push(s),(o=H.renderingContextProxy)!=null&&o.outlinePass&&(H.renderingContextProxy.outlinePass.selectedObjects=Xe.INSTANCE.selectedObjects)),s.isMeshObject&&!this.isItemInternal(s)&&!e.target.checked&&s.selected&&!i){s.unselect();let l=Xe.INSTANCE.selectedObjects.indexOf(s);l!==-1&&(Xe.INSTANCE.selectedObjects.splice(l,1),(a=H.renderingContextProxy)!=null&&a.outlinePass&&(H.renderingContextProxy.outlinePass.selectedObjects=Xe.INSTANCE.selectedObjects))}s&&s.children.forEach(l=>{this.checkChange(l,e,!1,i)})}},itemHasChildren(n){return n?H.treeShowInternal?n.children.length>0:((n==null?void 0:n.children.filter(e=>e.isMeshObject).length)||0)>0:!1},areAllChildrenSelected(n){if(!n)return!1;let e=0;for(const t of n.children)if(t instanceof $n&&!this.isItemInternal(t)&&(e++,!t.selected))return!1;return e>0},isItemInternal(n){return n?(!n.isMeshObject||n.internal)&&!n.userData.isRootScene:!0}},setup(n){const e=K1(null);return{hoverIndex:e,onMouseOver:u(s=>{e.value=s},"onMouseOver"),onMouseLeave:u(()=>{e.value=null},"onMouseLeave"),interval:0,collapsed:n.defaultCollapsed}},data(){return{state:H}}}),gv=u(()=>{No(n=>({b87e17ca:`calc(100% - ${(n.level||0)*16}px)`}))},"__injectCSSVars__$4"),_v=mf.setup;mf.setup=_v?(n,e)=>(gv(),_v(n,e)):gv;const jw={class:"item"},Xw={style:{"margin-left":"4px"}},$w={class:"title-right"},Yw=["disabled","checked"];function Kw(n,e,t,i,s,r){var a,l,c,h,d,f,p;const o=Bt("SceneTreeItem",!0);return Be(),nt("div",jw,[q("div",{style:Dt(`transform: translateX(${(n.level||0)*16}px);width:100%`)},[q("div",{class:Ft(["title",{hovered:n.hoverIndex===n.index}]),onMouseover:e[3]||(e[3]=_=>n.onMouseOver(n.index)),onMouseleave:e[4]||(e[4]=(..._)=>n.onMouseLeave&&n.onMouseLeave(..._))},[q("div",{onClick:e[0]||(e[0]=_=>{n.collapsed=!n.collapsed}),class:"title-left"},[q("i",{class:Ft({"bi bi-caret-down-fill":!n.collapsed,"bi bi-caret-right-fill":n.collapsed}),style:Dt(`display: ${n.itemHasChildren(n.item)?"block":"none"}`)},null,6),q("div",Xw,Rn((((a=n.item)==null?void 0:a.name)||((l=n.item)==null?void 0:l.constructor.name))+`<#${(c=n.item)==null?void 0:c.id}>`),1)]),q("div",$w,[n.isItemInternal(n.item)?xt("",!0):(Be(),nt("i",{key:0,onClick:e[1]||(e[1]=_=>n.checkChange(n.item,_,!0,!0)),class:Ft({"bi bi-eye-fill":(h=n.item)==null?void 0:h.visible,"bi bi-eye-slash-fill":!((d=n.item)!=null&&d.visible)})},null,2)),q("input",{disabled:n.state.currentMode!=="object"||n.isItemInternal(n.item),onChange:e[2]||(e[2]=_=>n.checkChange(n.item,_,!0,!1)),type:"checkbox",checked:((f=n.item)==null?void 0:f.selected)||n.areAllChildrenSelected(n.item)},null,40,Yw)])],34),n.collapsed?xt("",!0):(Be(!0),nt(kt,{key:0},hu((p=n.item)==null?void 0:p.children,(_,y)=>(Be(),nt("div",{key:_.id||y,style:{width:"100%"}},[!n.isItemInternal(_)||n.state.treeShowInternal?(Be(),an(o,{key:0,defaultCollapsed:!1,item:_,level:(n.level||0)+1,index:y},null,8,["item","level","index"])):xt("",!0)]))),128))],4)])}u(Kw,"_sfc_render$e");const qw=nn(mf,[["render",Kw],["__scopeId","data-v-2b280b11"]]),Zw=tn({components:{SceneTreeItem:qw},data(){return{state:H}}}),Jw=u(n=>(qn("data-v-245a44c6"),n=n(),Zn(),n),"_withScopeId$9"),Qw={class:"scene-tree-browser"},eC={class:"scene-tree-options"},tC=Jw(()=>q("h5",null,"Show internal",-1)),nC={class:"scene-tree-list"};function iC(n,e,t,i,s,r){var a,l;const o=Bt("SceneTreeItem");return Be(),nt("div",Qw,[q("div",eC,[tC,q("input",{onChange:e[0]||(e[0]=c=>n.state.treeShowInternal=c.target.checked),type:"checkbox"},null,32)]),q("div",nC,[Ne(o,{"default-collapsed":!1,item:(l=(a=n.state)==null?void 0:a.renderingContextProxy)==null?void 0:l.scene,level:0,index:0},null,8,["item"])])])}u(iC,"_sfc_render$d");const sC=nn(Zw,[["render",iC],["__scopeId","data-v-245a44c6"]]),rC=tn({props:{unit:String,value:Number},emits:{changeValue:n=>{}},methods:{changeCallback(n){this.$emit("changeValue",+n.target.value)},focus(){this.focused=!0},unFocus(){this.focused=!1},click(){const n=this.$el.querySelector("input");this.focused||(n.focus(),n.select())}},data(){return{focused:!1}}}),oC=["value"],aC={class:"number-input-icon"};function lC(n,e,t,i,s,r){return Be(),nt("div",{onClick:e[3]||(e[3]=(...o)=>n.click&&n.click(...o)),class:"number-input"},[q("input",{onFocusin:e[0]||(e[0]=()=>{}),onFocusout:e[1]||(e[1]=()=>{}),onKeyup:e[2]||(e[2]=(...o)=>n.changeCallback&&n.changeCallback(...o)),value:n.value||0,style:{"margin-left":"4px"},type:"number"},null,40,oC),q("div",aC,Rn(n.unit),1)])}u(lC,"_sfc_render$c");const r1=nn(rC,[["render",lC],["__scopeId","data-v-ce353066"]]),cC=tn({components:{NumberInput:r1},props:{xp:Number,yp:Number,zp:Number},emits:{changeValue:n=>{}},methods:{xc(n){this.updateFromProps(),this.x=n,this.$emit("changeValue",new D(this.x,this.y,this.z))},yc(n){this.updateFromProps(),this.y=n,this.$emit("changeValue",new D(this.x,this.y,this.z))},zc(n){this.updateFromProps(),this.z=n,this.$emit("changeValue",new D(this.x,this.y,this.z))},updateFromProps(){this.x=this.$props.xp,this.y=this.$props.yp,this.z=this.$props.zp}},data(){return{x:this.$props.xp,y:this.$props.yp,z:this.$props.zp}}}),gf=u(n=>(qn("data-v-e0bfee5f"),n=n(),Zn(),n),"_withScopeId$8"),uC={class:"container"},hC=gf(()=>q("h5",null,"X:",-1)),dC={class:"container"},fC=gf(()=>q("h5",null,"Y:",-1)),pC={class:"container"},mC=gf(()=>q("h5",null,"Z:",-1));function gC(n,e,t,i,s,r){const o=Bt("NumberInput");return Be(),nt(kt,null,[q("div",uC,[hC,Ne(o,{onChangeValue:n.xc,unit:"m",value:n.xp},null,8,["onChangeValue","value"])]),q("div",dC,[fC,Ne(o,{onChangeValue:n.yc,unit:"m",value:n.yp},null,8,["onChangeValue","value"])]),q("div",pC,[mC,Ne(o,{onChangeValue:n.zc,unit:"m",value:n.zp},null,8,["onChangeValue","value"])])],64)}u(gC,"_sfc_render$b");const _C=nn(cC,[["render",gC],["__scopeId","data-v-e0bfee5f"]]),vC=tn({components:{NumberInput:r1,Vector3Input:_C},methods:{marchCubes(n){H.selectedObject instanceof Qi&&(H.selectedObject.marchCubes=n.target.checked,H.selectedObject.update())},smoothNormals(n){H.selectedObject instanceof Qi&&(H.selectedObject.smoothNormals=n.target.checked,H.selectedObject.update())},smoothGeometry(n){H.selectedObject instanceof Qi&&(H.selectedObject.smoothGeometry=n.target.checked,H.selectedObject.update())},positionChange(n){H.selectedObject&&H.selectedObject.position.copy(n)},scaleChange(n){H.selectedObject&&H.selectedObject.scale.copy(n)},rotationChange(n){H.selectedObject&&(H.selectedObject.rotation.x=n.x,H.selectedObject.rotation.y=n.y,H.selectedObject.rotation.z=n.z)},collapse(n){const e=this.$refs[n];this[n+"Open"]?e.style.maxHeight="0px":e.style.maxHeight=e.scrollHeight+"px",this[n+"Open"]=!this[n+"Open"]}},mounted(){this.interval=setInterval(()=>{this.$forceUpdate()},50)},unmounted(){clearInterval(this.interval)},updated(){["position","scale","rotation","voxel"].forEach(n=>{const e=this.$refs[n];e&&e.style&&this[n+"Open"]&&(e.style.maxHeight=e.scrollHeight+"px")})},data(){return{state:H,interval:0,positionOpen:!0,scaleOpen:!0,rotationOpen:!0,voxelOpen:!0}}}),ds=u(n=>(qn("data-v-cbc3e7c5"),n=n(),Zn(),n),"_withScopeId$7"),xC={key:0,class:"object-options-list"},yC={key:1,class:"object-options-list"},MC=ds(()=>q("h5",{style:{"margin-left":"8px"}},"Position",-1)),SC=ds(()=>q("h5",{style:{"margin-left":"8px"}},"Scale",-1)),bC=ds(()=>q("h5",{style:{"margin-left":"8px"}},"Rotation",-1)),EC=ds(()=>q("h5",{style:{"margin-left":"8px"}},"Voxel mesh",-1)),TC={key:0,class:"object-option"},AC=ds(()=>q("h5",null,"March cubes",-1)),wC=["checked"],CC={key:1,class:"object-option"},RC=ds(()=>q("h5",null,"Smooth normals",-1)),PC=["checked"],DC={key:2,class:"object-option"},IC=ds(()=>q("h5",null,"Smooth",-1)),LC=["checked"],NC={key:2,class:"object-options-list"},OC=ds(()=>q("div",{class:"object-option-group-title",style:{"text-align":"left"}},[q("h5")],-1));function UC(n,e,t,i,s,r){var a;const o=Bt("Vector3Input");return Be(),nt(kt,null,[n.state.multipleSelections?(Be(),nt("div",xC," Multiple - "+Rn((a=n.state.selectedObject)==null?void 0:a.constructor.name),1)):n.state.selectedObject?(Be(),nt("div",yC,[si(Rn(n.state.selectedObject.constructor.name)+" ",1),q("div",{onClick:e[0]||(e[0]=l=>n.collapse("position")),class:"object-option-group-title",style:{"text-align":"left"}},[q("i",{class:Ft({"bi bi-caret-down-fill":n.positionOpen,"bi bi-caret-right-fill":!n.positionOpen})},null,2),MC]),q("div",{class:Ft(["object-option-group",{collapse:!n.positionOpen}]),ref:"position"},[Ne(o,{xp:n.state.selectedObject.position.x||0,yp:n.state.selectedObject.position.y||0,zp:n.state.selectedObject.position.z||0,onChangeValue:n.positionChange},null,8,["xp","yp","zp","onChangeValue"])],2),q("div",{onClick:e[1]||(e[1]=l=>n.collapse("scale")),class:"object-option-group-title",style:{"text-align":"left"}},[q("i",{class:Ft({"bi bi-caret-down-fill":n.scaleOpen,"bi bi-caret-right-fill":!n.scaleOpen})},null,2),SC]),q("div",{class:Ft(["object-option-group",{collapse:!n.scaleOpen}]),ref:"scale"},[Ne(o,{xp:n.state.selectedObject.scale.x||0,yp:n.state.selectedObject.scale.y||0,zp:n.state.selectedObject.scale.z||0,onChangeValue:n.scaleChange},null,8,["xp","yp","zp","onChangeValue"])],2),q("div",{onClick:e[2]||(e[2]=l=>n.collapse("rotation")),class:"object-option-group-title",style:{"text-align":"left"}},[q("i",{class:Ft({"bi bi-caret-down-fill":n.rotationOpen,"bi bi-caret-right-fill":!n.rotationOpen})},null,2),bC]),q("div",{class:Ft(["object-option-group",{collapse:!n.rotationOpen}]),ref:"rotation"},[Ne(o,{xp:n.state.selectedObject.rotation.x||0,yp:n.state.selectedObject.rotation.y||0,zp:n.state.selectedObject.rotation.z||0,onChangeValue:n.rotationChange},null,8,["xp","yp","zp","onChangeValue"])],2),n.state.selectedObject.isVoxelMesh?(Be(),nt("div",{key:0,onClick:e[3]||(e[3]=l=>n.collapse("voxel")),class:"object-option-group-title",style:{"text-align":"left"}},[q("i",{class:Ft({"bi bi-caret-down-fill":n.voxelOpen,"bi bi-caret-right-fill":!n.voxelOpen})},null,2),EC])):xt("",!0),n.state.selectedObject.isVoxelMesh?(Be(),nt("div",{key:1,class:Ft(["object-option-group",{collapse:!n.voxelOpen}]),ref:"voxel"},[n.state.selectedObject.constructor.name==="VoxelMesh"?(Be(),nt("div",TC,[AC,q("input",{onChange:e[4]||(e[4]=(...l)=>n.marchCubes&&n.marchCubes(...l)),checked:n.state.selectedObject.marchCubes,type:"checkbox"},null,40,wC)])):xt("",!0),n.state.selectedObject.marchCubes&&!n.state.selectedObject.smoothGeometry?(Be(),nt("div",CC,[RC,q("input",{onChange:e[5]||(e[5]=(...l)=>n.smoothNormals&&n.smoothNormals(...l)),checked:n.state.selectedObject.smoothNormals,type:"checkbox"},null,40,PC)])):xt("",!0),n.state.selectedObject.marchCubes?(Be(),nt("div",DC,[IC,q("input",{onChange:e[6]||(e[6]=(...l)=>n.smoothGeometry&&n.smoothGeometry(...l)),checked:n.state.selectedObject.smoothGeometry,type:"checkbox"},null,40,LC)])):xt("",!0)],2)):xt("",!0)])):(Be(),nt("div",NC," No object selected ")),OC],64)}u(UC,"_sfc_render$a");const FC=nn(vC,[["render",UC],["__scopeId","data-v-cbc3e7c5"]]),BC={name:"splitpanes",emits:["ready","resize","resized","pane-click","pane-maximize","pane-add","pane-remove","splitter-click"],props:{horizontal:{type:Boolean},pushOtherPanes:{type:Boolean,default:!0},dblClickSplitter:{type:Boolean,default:!0},rtl:{type:Boolean,default:!1},firstSplitter:{type:Boolean}},provide(){return{requestUpdate:this.requestUpdate,onPaneAdd:this.onPaneAdd,onPaneRemove:this.onPaneRemove,onPaneClick:this.onPaneClick}},data:()=>({container:null,ready:!1,panes:[],touch:{mouseDown:!1,dragging:!1,activeSplitter:null},splitterTaps:{splitter:null,timeoutId:null}}),computed:{panesCount(){return this.panes.length},indexedPanes(){return this.panes.reduce((n,e)=>(n[e.id]=e)&&n,{})}},methods:{updatePaneComponents(){this.panes.forEach(n=>{n.update&&n.update({[this.horizontal?"height":"width"]:`${this.indexedPanes[n.id].size}%`})})},bindEvents(){document.addEventListener("mousemove",this.onMouseMove,{passive:!1}),document.addEventListener("mouseup",this.onMouseUp),"ontouchstart"in window&&(document.addEventListener("touchmove",this.onMouseMove,{passive:!1}),document.addEventListener("touchend",this.onMouseUp))},unbindEvents(){document.removeEventListener("mousemove",this.onMouseMove,{passive:!1}),document.removeEventListener("mouseup",this.onMouseUp),"ontouchstart"in window&&(document.removeEventListener("touchmove",this.onMouseMove,{passive:!1}),document.removeEventListener("touchend",this.onMouseUp))},onMouseDown(n,e){this.bindEvents(),this.touch.mouseDown=!0,this.touch.activeSplitter=e},onMouseMove(n){this.touch.mouseDown&&(n.preventDefault(),this.touch.dragging=!0,this.calculatePanesSize(this.getCurrentMouseDrag(n)),this.$emit("resize",this.panes.map(e=>({min:e.min,max:e.max,size:e.size}))))},onMouseUp(){this.touch.dragging&&this.$emit("resized",this.panes.map(n=>({min:n.min,max:n.max,size:n.size}))),this.touch.mouseDown=!1,setTimeout(()=>{this.touch.dragging=!1,this.unbindEvents()},100)},onSplitterClick(n,e){"ontouchstart"in window&&(n.preventDefault(),this.dblClickSplitter&&(this.splitterTaps.splitter===e?(clearTimeout(this.splitterTaps.timeoutId),this.splitterTaps.timeoutId=null,this.onSplitterDblClick(n,e),this.splitterTaps.splitter=null):(this.splitterTaps.splitter=e,this.splitterTaps.timeoutId=setTimeout(()=>{this.splitterTaps.splitter=null},500)))),this.touch.dragging||this.$emit("splitter-click",this.panes[e])},onSplitterDblClick(n,e){let t=0;this.panes=this.panes.map((i,s)=>(i.size=s===e?i.max:i.min,s!==e&&(t+=i.min),i)),this.panes[e].size-=t,this.$emit("pane-maximize",this.panes[e]),this.$emit("resized",this.panes.map(i=>({min:i.min,max:i.max,size:i.size})))},onPaneClick(n,e){this.$emit("pane-click",this.indexedPanes[e])},getCurrentMouseDrag(n){const e=this.container.getBoundingClientRect(),{clientX:t,clientY:i}="ontouchstart"in window&&n.touches?n.touches[0]:n;return{x:t-e.left,y:i-e.top}},getCurrentDragPercentage(n){n=n[this.horizontal?"y":"x"];const e=this.container[this.horizontal?"clientHeight":"clientWidth"];return this.rtl&&!this.horizontal&&(n=e-n),n*100/e},calculatePanesSize(n){const e=this.touch.activeSplitter;let t={prevPanesSize:this.sumPrevPanesSize(e),nextPanesSize:this.sumNextPanesSize(e),prevReachedMinPanes:0,nextReachedMinPanes:0};const i=0+(this.pushOtherPanes?0:t.prevPanesSize),s=100-(this.pushOtherPanes?0:t.nextPanesSize),r=Math.max(Math.min(this.getCurrentDragPercentage(n),s),i);let o=[e,e+1],a=this.panes[o[0]]||null,l=this.panes[o[1]]||null;const c=a.max<100&&r>=a.max+t.prevPanesSize,h=l.max<100&&r<=100-(l.max+this.sumNextPanesSize(e+1));if(c||h){c?(a.size=a.max,l.size=Math.max(100-a.max-t.prevPanesSize-t.nextPanesSize,0)):(a.size=Math.max(100-l.max-t.prevPanesSize-this.sumNextPanesSize(e+1),0),l.size=l.max);return}if(this.pushOtherPanes){const d=this.doPushOtherPanes(t,r);if(!d)return;({sums:t,panesToResize:o}=d),a=this.panes[o[0]]||null,l=this.panes[o[1]]||null}a!==null&&(a.size=Math.min(Math.max(r-t.prevPanesSize-t.prevReachedMinPanes,a.min),a.max)),l!==null&&(l.size=Math.min(Math.max(100-r-t.nextPanesSize-t.nextReachedMinPanes,l.min),l.max))},doPushOtherPanes(n,e){const t=this.touch.activeSplitter,i=[t,t+1];return e<n.prevPanesSize+this.panes[i[0]].min&&(i[0]=this.findPrevExpandedPane(t).index,n.prevReachedMinPanes=0,i[0]<t&&this.panes.forEach((s,r)=>{r>i[0]&&r<=t&&(s.size=s.min,n.prevReachedMinPanes+=s.min)}),n.prevPanesSize=this.sumPrevPanesSize(i[0]),i[0]===void 0)?(n.prevReachedMinPanes=0,this.panes[0].size=this.panes[0].min,this.panes.forEach((s,r)=>{r>0&&r<=t&&(s.size=s.min,n.prevReachedMinPanes+=s.min)}),this.panes[i[1]].size=100-n.prevReachedMinPanes-this.panes[0].min-n.prevPanesSize-n.nextPanesSize,null):e>100-n.nextPanesSize-this.panes[i[1]].min&&(i[1]=this.findNextExpandedPane(t).index,n.nextReachedMinPanes=0,i[1]>t+1&&this.panes.forEach((s,r)=>{r>t&&r<i[1]&&(s.size=s.min,n.nextReachedMinPanes+=s.min)}),n.nextPanesSize=this.sumNextPanesSize(i[1]-1),i[1]===void 0)?(n.nextReachedMinPanes=0,this.panes[this.panesCount-1].size=this.panes[this.panesCount-1].min,this.panes.forEach((s,r)=>{r<this.panesCount-1&&r>=t+1&&(s.size=s.min,n.nextReachedMinPanes+=s.min)}),this.panes[i[0]].size=100-n.prevPanesSize-n.nextReachedMinPanes-this.panes[this.panesCount-1].min-n.nextPanesSize,null):{sums:n,panesToResize:i}},sumPrevPanesSize(n){return this.panes.reduce((e,t,i)=>e+(i<n?t.size:0),0)},sumNextPanesSize(n){return this.panes.reduce((e,t,i)=>e+(i>n+1?t.size:0),0)},findPrevExpandedPane(n){return[...this.panes].reverse().find(e=>e.index<n&&e.size>e.min)||{}},findNextExpandedPane(n){return this.panes.find(e=>e.index>n+1&&e.size>e.min)||{}},checkSplitpanesNodes(){Array.from(this.container.children).forEach(n=>{const e=n.classList.contains("splitpanes__pane"),t=n.classList.contains("splitpanes__splitter");!e&&!t&&(n.parentNode.removeChild(n),console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."))})},addSplitter(n,e,t=!1){const i=n-1,s=document.createElement("div");s.classList.add("splitpanes__splitter"),t||(s.onmousedown=r=>this.onMouseDown(r,i),typeof window<"u"&&"ontouchstart"in window&&(s.ontouchstart=r=>this.onMouseDown(r,i)),s.onclick=r=>this.onSplitterClick(r,i+1)),this.dblClickSplitter&&(s.ondblclick=r=>this.onSplitterDblClick(r,i+1)),e.parentNode.insertBefore(s,e)},removeSplitter(n){n.onmousedown=void 0,n.onclick=void 0,n.ondblclick=void 0,n.parentNode.removeChild(n)},redoSplitters(){const n=Array.from(this.container.children);n.forEach(t=>{t.className.includes("splitpanes__splitter")&&this.removeSplitter(t)});let e=0;n.forEach(t=>{t.className.includes("splitpanes__pane")&&(!e&&this.firstSplitter?this.addSplitter(e,t,!0):e&&this.addSplitter(e,t),e++)})},requestUpdate({target:n,...e}){const t=this.indexedPanes[n._.uid];Object.entries(e).forEach(([i,s])=>t[i]=s)},onPaneAdd(n){let e=-1;Array.from(n.$el.parentNode.children).some(s=>(s.className.includes("splitpanes__pane")&&e++,s===n.$el));const t=parseFloat(n.minSize),i=parseFloat(n.maxSize);this.panes.splice(e,0,{id:n._.uid,index:e,min:isNaN(t)?0:t,max:isNaN(i)?100:i,size:n.size===null?null:parseFloat(n.size),givenSize:n.size,update:n.update}),this.panes.forEach((s,r)=>s.index=r),this.ready&&this.$nextTick(()=>{this.redoSplitters(),this.resetPaneSizes({addedPane:this.panes[e]}),this.$emit("pane-add",{index:e,panes:this.panes.map(s=>({min:s.min,max:s.max,size:s.size}))})})},onPaneRemove(n){const e=this.panes.findIndex(i=>i.id===n._.uid),t=this.panes.splice(e,1)[0];this.panes.forEach((i,s)=>i.index=s),this.$nextTick(()=>{this.redoSplitters(),this.resetPaneSizes({removedPane:{...t,index:e}}),this.$emit("pane-remove",{removed:t,panes:this.panes.map(i=>({min:i.min,max:i.max,size:i.size}))})})},resetPaneSizes(n={}){!n.addedPane&&!n.removedPane?this.initialPanesSizing():this.panes.some(e=>e.givenSize!==null||e.min||e.max<100)?this.equalizeAfterAddOrRemove(n):this.equalize(),this.ready&&this.$emit("resized",this.panes.map(e=>({min:e.min,max:e.max,size:e.size})))},equalize(){const n=100/this.panesCount;let e=0;const t=[],i=[];this.panes.forEach(s=>{s.size=Math.max(Math.min(n,s.max),s.min),e-=s.size,s.size>=s.max&&t.push(s.id),s.size<=s.min&&i.push(s.id)}),e>.1&&this.readjustSizes(e,t,i)},initialPanesSizing(){let n=100;const e=[],t=[];let i=0;this.panes.forEach(r=>{n-=r.size,r.size!==null&&i++,r.size>=r.max&&e.push(r.id),r.size<=r.min&&t.push(r.id)});let s=100;n>.1&&(this.panes.forEach(r=>{r.size===null&&(r.size=Math.max(Math.min(n/(this.panesCount-i),r.max),r.min)),s-=r.size}),s>.1&&this.readjustSizes(n,e,t))},equalizeAfterAddOrRemove({addedPane:n,removedPane:e}={}){let t=100/this.panesCount,i=0;const s=[],r=[];n&&n.givenSize!==null&&(t=(100-n.givenSize)/(this.panesCount-1)),this.panes.forEach(o=>{i-=o.size,o.size>=o.max&&s.push(o.id),o.size<=o.min&&r.push(o.id)}),!(Math.abs(i)<.1)&&(this.panes.forEach(o=>{n&&n.givenSize!==null&&n.id===o.id||(o.size=Math.max(Math.min(t,o.max),o.min)),i-=o.size,o.size>=o.max&&s.push(o.id),o.size<=o.min&&r.push(o.id)}),i>.1&&this.readjustSizes(i,s,r))},readjustSizes(n,e,t){let i;n>0?i=n/(this.panesCount-e.length):i=n/(this.panesCount-t.length),this.panes.forEach((s,r)=>{if(n>0&&!e.includes(s.id)){const o=Math.max(Math.min(s.size+i,s.max),s.min),a=o-s.size;n-=a,s.size=o}else if(!t.includes(s.id)){const o=Math.max(Math.min(s.size+i,s.max),s.min),a=o-s.size;n-=a,s.size=o}s.update({[this.horizontal?"height":"width"]:`${this.indexedPanes[s.id].size}%`})}),Math.abs(n)>.1&&this.$nextTick(()=>{this.ready&&console.warn("Splitpanes: Could not resize panes correctly due to their constraints.")})}},watch:{panes:{deep:!0,immediate:!1,handler(){this.updatePaneComponents()}},horizontal(){this.updatePaneComponents()},firstSplitter(){this.redoSplitters()},dblClickSplitter(n){[...this.container.querySelectorAll(".splitpanes__splitter")].forEach((e,t)=>{e.ondblclick=n?i=>this.onSplitterDblClick(i,t):void 0})}},beforeUnmount(){this.ready=!1},mounted(){this.container=this.$refs.container,this.checkSplitpanesNodes(),this.redoSplitters(),this.resetPaneSizes(),this.$emit("ready"),this.ready=!0},render(){return T0("div",{ref:"container",class:["splitpanes",`splitpanes--${this.horizontal?"horizontal":"vertical"}`,{"splitpanes--dragging":this.touch.dragging}]},this.$slots.default())}},zC=u((n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},"S"),kC={name:"pane",inject:["requestUpdate","onPaneAdd","onPaneRemove","onPaneClick"],props:{size:{type:[Number,String],default:null},minSize:{type:[Number,String],default:0},maxSize:{type:[Number,String],default:100}},data:()=>({style:{}}),mounted(){this.onPaneAdd(this)},beforeUnmount(){this.onPaneRemove(this)},methods:{update(n){this.style=n}},computed:{sizeNumber(){return this.size||this.size===0?parseFloat(this.size):null},minSizeNumber(){return parseFloat(this.minSize)},maxSizeNumber(){return parseFloat(this.maxSize)}},watch:{sizeNumber(n){this.requestUpdate({target:this,size:n})},minSizeNumber(n){this.requestUpdate({target:this,min:n})},maxSizeNumber(n){this.requestUpdate({target:this,max:n})}}};function VC(n,e,t,i,s,r){return Be(),nt("div",{class:"splitpanes__pane",onClick:e[0]||(e[0]=o=>r.onPaneClick(o,n._.uid)),style:Dt(n.style)},[Zt(n.$slots,"default")],4)}u(VC,"P");const HC=zC(kC,[["render",VC]]),GC=tn({components:{SceneTree:sC,Splitpanes:BC,Pane:HC,ObjectProperties:FC},methods:{resized(){var e,t;this.panelHeight=((e=this.panel)==null?void 0:e.clientHeight)||0;const n=(t=this.$refs.properties)==null?void 0:t.$el;n&&(document.getElementById("editor-canvas").width<864&&(n.style.width=window.innerWidth-864+"px"),+n.style.width.replace("px","")<256&&(n.style.width="256px"))},resize(n){var e;if(this.isResizing){H.cursorShape="col-resize";const t=(e=this.$refs.properties)==null?void 0:e.$el;t&&(t.style.width=+t.style.width.replace("px","")-n.movementX+"px"),+t.style.width.replace("px","")<256&&(t.style.width="256px")}},mouseUp(){this.isResizing&&(H.cursorShape="initial"),this.isResizing=!1}},mounted(){this.panel=document.querySelector(".properties-panel"),this.observer=new ResizeObserver(this.resized),this.observer.observe(this.panel),document.addEventListener("mousemove",this.resize),document.addEventListener("mouseup",this.mouseUp),window.addEventListener("resize",this.resized),this.resized()},unmounted(){var n;(n=this.observer)==null||n.disconnect(),document.removeEventListener("mousemove",this.resize),document.removeEventListener("mouseup",this.mouseUp),window.removeEventListener("resize",this.resized)},data(){return{observer:void 0,panel:void 0,panelHeight:0,isResizing:!1}}}),WC=u(n=>(qn("data-v-550edf65"),n=n(),Zn(),n),"_withScopeId$6"),jC={class:"properties-panel"},XC=WC(()=>q("div",{style:{display:"flex","justify-content":"space-around",width:"100%"}},[q("div",{style:{width:"1px",height:"30px","background-color":"#ffffff26"}}),q("div",{style:{width:"1px",height:"30px","background-color":"#ffffff26"}})],-1)),$C=[XC];function YC(n,e,t,i,s,r){const o=Bt("SceneTree"),a=Bt("pane"),l=Bt("ObjectProperties"),c=Bt("splitpanes");return Be(),nt("div",jC,[q("div",{onMousedown:e[0]||(e[0]=h=>n.isResizing=!0),class:"resize"},$C,32),Ne(c,{ref:"properties",class:"default-theme",horizontal:"",style:Dt(`height: ${n.panelHeight+"px"}`)},{default:gr(()=>[Ne(a,{"min-size":"10"},{default:gr(()=>[Ne(o)]),_:1}),Ne(a,{"min-size":"10",size:"65"},{default:gr(()=>[Ne(l)]),_:1})]),_:1},8,["style"])])}u(YC,"_sfc_render$9");const KC=nn(GC,[["render",YC],["__scopeId","data-v-550edf65"]]),qC=tn({methods:{resize(n){if(this.isResizing){H.cursorShape="row-resize";const e=this.$refs.bottomSection;e&&(e.style.minHeight=+e.style.minHeight.replace("px","")-n.movementY+"px")}},mouseup(){this.isResizing&&(H.cursorShape="initial"),this.isResizing=!1}},mounted(){document.addEventListener("mouseup",this.mouseup),document.addEventListener("mousemove",this.resize)},unmounted(){document.removeEventListener("mouseup",this.mouseup),document.removeEventListener("mousemove",this.resize)},data(){return{isResizing:!1}}}),ZC=u(n=>(qn("data-v-064ab300"),n=n(),Zn(),n),"_withScopeId$5"),JC={class:"bottom-section-container"},QC=ZC(()=>q("div",{style:{display:"flex","flex-direction":"column","justify-content":"space-around",height:"100%"}},[q("div",{style:{width:"30px",height:"1px","background-color":"#ffffff26"}}),q("div",{style:{width:"30px",height:"1px","background-color":"#ffffff26"}})],-1)),eR=[QC],tR={ref:"bottomSection",class:"bottom-section",style:{"min-height":"256px"}},nR=S0('<div class="tree-browser" data-v-064ab300></div><div class="visual-browser-container" data-v-064ab300><div class="browser-tools" data-v-064ab300><div class="browser-tools-add" data-v-064ab300>Add +</div><div class="browser-tools-title" data-v-064ab300>Material Browser</div><div class="browser-tools-search" data-v-064ab300><input placeholder="Search" type="text" data-v-064ab300><div class="browser-tools-search-icon" data-v-064ab300><i class="bi bi-search" data-v-064ab300></i></div></div></div><div class="visual-browser" data-v-064ab300></div></div>',2),iR=[nR];function sR(n,e,t,i,s,r){return Be(),nt("div",JC,[q("div",{ref:"resize",onMousedown:e[0]||(e[0]=o=>n.isResizing=!0),class:"resize"},eR,544),q("div",tR,iR,512)])}u(sR,"_sfc_render$8");const rR=nn(qC,[["render",sR],["__scopeId","data-v-064ab300"]]);function Qc(n){return n===0?!1:Array.isArray(n)&&n.length===0?!0:!n}u(Qc,"isEmpty");function oR(n){return(...e)=>!n(...e)}u(oR,"not");function aR(n,e){return n===void 0&&(n="undefined"),n===null&&(n="null"),n===!1&&(n="false"),n.toString().toLowerCase().indexOf(e.trim())!==-1}u(aR,"includes");function o1(n,e,t,i){return e?n.filter(s=>aR(i(s,t),e)).sort((s,r)=>i(s,t).length-i(r,t).length):n}u(o1,"filterOptions");function lR(n){return n.filter(e=>!e.$isLabel)}u(lR,"stripGroups");function eu(n,e){return t=>t.reduce((i,s)=>s[n]&&s[n].length?(i.push({$groupLabel:s[e],$isLabel:!0}),i.concat(s[n])):i,[])}u(eu,"flattenOptions");function cR(n,e,t,i,s){return r=>r.map(o=>{if(!o[t])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];const a=o1(o[t],n,e,s);return a.length?{[i]:o[i],[t]:a}:[]})}u(cR,"filterGroups");const vv=u((...n)=>e=>n.reduce((t,i)=>i(t),e),"flow");var uR={data(){return{search:"",isOpen:!1,preferredOpenDirection:"below",optimizedHeight:this.maxHeight}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default(n,e){return Qc(n)?"":e?n[e]:n}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},tagPosition:{type:String,default:"top"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},groupSelect:{type:Boolean,default:!1},blockKeys:{type:Array,default(){return[]}},preserveSearch:{type:Boolean,default:!1},preselectFirst:{type:Boolean,default:!1},preventAutofocus:{type:Boolean,default:!1}},mounted(){!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."),this.preselectFirst&&!this.internalValue.length&&this.options.length&&this.select(this.filteredOptions[0])},computed:{internalValue(){return this.modelValue||this.modelValue===0?Array.isArray(this.modelValue)?this.modelValue:[this.modelValue]:[]},filteredOptions(){const n=this.search||"",e=n.toLowerCase().trim();let t=this.options.concat();return this.internalSearch?t=this.groupValues?this.filterAndFlat(t,e,this.label):o1(t,e,this.label,this.customLabel):t=this.groupValues?eu(this.groupValues,this.groupLabel)(t):t,t=this.hideSelected?t.filter(oR(this.isSelected)):t,this.taggable&&e.length&&!this.isExistingOption(e)&&(this.tagPosition==="bottom"?t.push({isTag:!0,label:n}):t.unshift({isTag:!0,label:n})),t.slice(0,this.optionsLimit)},valueKeys(){return this.trackBy?this.internalValue.map(n=>n[this.trackBy]):this.internalValue},optionKeys(){return(this.groupValues?this.flatAndStrip(this.options):this.options).map(e=>this.customLabel(e,this.label).toString().toLowerCase())},currentOptionLabel(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue.length?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue:{handler(){this.resetAfter&&this.internalValue.length&&(this.search="",this.$emit("update:modelValue",this.multiple?[]:null))},deep:!0},search(){this.$emit("search-change",this.search)}},emits:["open","search-change","close","select","update:modelValue","remove","tag"],methods:{getValue(){return this.multiple?this.internalValue:this.internalValue.length===0?null:this.internalValue[0]},filterAndFlat(n,e,t){return vv(cR(e,t,this.groupValues,this.groupLabel,this.customLabel),eu(this.groupValues,this.groupLabel))(n)},flatAndStrip(n){return vv(eu(this.groupValues,this.groupLabel),lR)(n)},updateSearch(n){this.search=n},isExistingOption(n){return this.options?this.optionKeys.indexOf(n)>-1:!1},isSelected(n){const e=this.trackBy?n[this.trackBy]:n;return this.valueKeys.indexOf(e)>-1},isOptionDisabled(n){return!!n.$isDisabled},getOptionLabel(n){if(Qc(n))return"";if(n.isTag)return n.label;if(n.$isLabel)return n.$groupLabel;const e=this.customLabel(n,this.label);return Qc(e)?"":e},select(n,e){if(n.$isLabel&&this.groupSelect){this.selectGroup(n);return}if(!(this.blockKeys.indexOf(e)!==-1||this.disabled||n.$isDisabled||n.$isLabel)&&!(this.max&&this.multiple&&this.internalValue.length===this.max)&&!(e==="Tab"&&!this.pointerDirty)){if(n.isTag)this.$emit("tag",n.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else{if(this.isSelected(n)){e!=="Tab"&&this.removeElement(n);return}this.multiple?this.$emit("update:modelValue",this.internalValue.concat([n])):this.$emit("update:modelValue",n),this.$emit("select",n,this.id),this.clearOnSelect&&(this.search="")}this.closeOnSelect&&this.deactivate()}},selectGroup(n){const e=this.options.find(t=>t[this.groupLabel]===n.$groupLabel);if(e){if(this.wholeGroupSelected(e)){this.$emit("remove",e[this.groupValues],this.id);const t=this.trackBy?e[this.groupValues].map(s=>s[this.trackBy]):e[this.groupValues],i=this.internalValue.filter(s=>t.indexOf(this.trackBy?s[this.trackBy]:s)===-1);this.$emit("update:modelValue",i)}else{let t=e[this.groupValues].filter(i=>!(this.isOptionDisabled(i)||this.isSelected(i)));this.max&&t.splice(this.max-this.internalValue.length),this.$emit("select",t,this.id),this.$emit("update:modelValue",this.internalValue.concat(t))}this.closeOnSelect&&this.deactivate()}},wholeGroupSelected(n){return n[this.groupValues].every(e=>this.isSelected(e)||this.isOptionDisabled(e))},wholeGroupDisabled(n){return n[this.groupValues].every(this.isOptionDisabled)},removeElement(n,e=!0){if(this.disabled||n.$isDisabled)return;if(!this.allowEmpty&&this.internalValue.length<=1){this.deactivate();return}const t=typeof n=="object"?this.valueKeys.indexOf(n[this.trackBy]):this.valueKeys.indexOf(n);if(this.multiple){const i=this.internalValue.slice(0,t).concat(this.internalValue.slice(t+1));this.$emit("update:modelValue",i)}else this.$emit("update:modelValue",null);this.$emit("remove",n,this.id),this.closeOnSelect&&e&&this.deactivate()},removeLastElement(){this.blockKeys.indexOf("Delete")===-1&&this.search.length===0&&Array.isArray(this.internalValue)&&this.internalValue.length&&this.removeElement(this.internalValue[this.internalValue.length-1],!1)},activate(){this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&this.pointer===0&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.preventAutofocus||this.$nextTick(()=>this.$refs.search&&this.$refs.search.focus())):this.preventAutofocus||typeof this.$el<"u"&&this.$el.focus(),this.$emit("open",this.id))},deactivate(){this.isOpen&&(this.isOpen=!1,this.searchable?this.$refs.search!==null&&typeof this.$refs.search<"u"&&this.$refs.search.blur():typeof this.$el<"u"&&this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id))},toggle(){this.isOpen?this.deactivate():this.activate()},adjustPosition(){if(typeof window>"u")return;const n=this.$el.getBoundingClientRect().top,e=window.innerHeight-this.$el.getBoundingClientRect().bottom;e>this.maxHeight||e>n||this.openDirection==="below"||this.openDirection==="bottom"?(this.preferredOpenDirection="below",this.optimizedHeight=Math.min(e-40,this.maxHeight)):(this.preferredOpenDirection="above",this.optimizedHeight=Math.min(n-40,this.maxHeight))}}},hR={data(){return{pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition(){return this.pointer*this.optionHeight},visibleElements(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions(){this.pointerAdjust()},isOpen(){this.pointerDirty=!1},pointer(){this.$refs.search&&this.$refs.search.setAttribute("aria-activedescendant",this.id+"-"+this.pointer.toString())}},methods:{optionHighlight(n,e){return{"multiselect__option--highlight":n===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(e)}},groupHighlight(n,e){if(!this.groupSelect)return["multiselect__option--disabled",{"multiselect__option--group":e.$isLabel}];const t=this.options.find(i=>i[this.groupLabel]===e.$groupLabel);return t&&!this.wholeGroupDisabled(t)?["multiselect__option--group",{"multiselect__option--highlight":n===this.pointer&&this.showPointer},{"multiselect__option--group-selected":this.wholeGroupSelected(t)}]:"multiselect__option--disabled"},addPointerElement({key:n}="Enter"){this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],n),this.pointerReset()},pointerForward(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()),this.pointerDirty=!0},pointerBackward(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerBackward()):this.filteredOptions[this.pointer]&&this.filteredOptions[0].$isLabel&&!this.groupSelect&&this.pointerForward(),this.pointerDirty=!0},pointerReset(){this.closeOnSelect&&(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0))},pointerAdjust(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0),this.filteredOptions.length>0&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()},pointerSet(n){this.pointer=n,this.pointerDirty=!0}}},a1={name:"vue-multiselect",mixins:[uR,hR],compatConfig:{MODE:3,ATTR_ENUMERATED_COERCION:!1},props:{name:{type:String,default:""},modelValue:{type:null,default(){return[]}},selectLabel:{type:String,default:"Press enter to select"},selectGroupLabel:{type:String,default:"Press enter to select group"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},deselectGroupLabel:{type:String,default:"Press enter to deselect group"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:n=>`and ${n} more`},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoOptions:{type:Boolean,default:!0},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{hasOptionGroup(){return this.groupValues&&this.groupLabel&&this.groupSelect},isSingleLabelVisible(){return(this.singleValue||this.singleValue===0)&&(!this.isOpen||!this.searchable)&&!this.visibleValues.length},isPlaceholderVisible(){return!this.internalValue.length&&(!this.searchable||!this.isOpen)},visibleValues(){return this.multiple?this.internalValue.slice(0,this.limit):[]},singleValue(){return this.internalValue[0]},deselectLabelText(){return this.showLabels?this.deselectLabel:""},deselectGroupLabelText(){return this.showLabels?this.deselectGroupLabel:""},selectLabelText(){return this.showLabels?this.selectLabel:""},selectGroupLabelText(){return this.showLabels?this.selectGroupLabel:""},selectedLabelText(){return this.showLabels?this.selectedLabel:""},inputStyle(){return this.searchable||this.multiple&&this.modelValue&&this.modelValue.length?this.isOpen?{width:"100%"}:{width:"0",position:"absolute",padding:"0"}:""},contentStyle(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove(){return this.openDirection==="above"||this.openDirection==="top"?!0:this.openDirection==="below"||this.openDirection==="bottom"?!1:this.preferredOpenDirection==="above"},showSearchInput(){return this.searchable&&(this.hasSingleSelectedSlot&&(this.visibleSingleValue||this.visibleSingleValue===0)?this.isOpen:!0)}}};const dR={ref:"tags",class:"multiselect__tags"},fR={class:"multiselect__tags-wrap"},pR={class:"multiselect__spinner"},mR={key:0},gR={class:"multiselect__option"},_R={class:"multiselect__option"},vR=si("No elements found. Consider changing the search query."),xR={class:"multiselect__option"},yR=si("List is empty.");function MR(n,e,t,i,s,r){return Be(),an("div",{tabindex:n.searchable?-1:t.tabindex,class:[{"multiselect--active":n.isOpen,"multiselect--disabled":t.disabled,"multiselect--above":r.isAbove,"multiselect--has-options-group":r.hasOptionGroup},"multiselect"],onFocus:e[14]||(e[14]=o=>n.activate()),onBlur:e[15]||(e[15]=o=>n.searchable?!1:n.deactivate()),onKeydown:[e[16]||(e[16]=Qn(Ct(o=>n.pointerForward(),["self","prevent"]),["down"])),e[17]||(e[17]=Qn(Ct(o=>n.pointerBackward(),["self","prevent"]),["up"]))],onKeypress:e[18]||(e[18]=Qn(Ct(o=>n.addPointerElement(o),["stop","self"]),["enter","tab"])),onKeyup:e[19]||(e[19]=Qn(o=>n.deactivate(),["esc"])),role:"combobox","aria-owns":"listbox-"+n.id},[Zt(n.$slots,"caret",{toggle:n.toggle},()=>[Ne("div",{onMousedown:e[1]||(e[1]=Ct(o=>n.toggle(),["prevent","stop"])),class:"multiselect__select"},null,32)]),Zt(n.$slots,"clear",{search:n.search}),Ne("div",dR,[Zt(n.$slots,"selection",{search:n.search,remove:n.removeElement,values:r.visibleValues,isOpen:n.isOpen},()=>[Ir(Ne("div",fR,[(Be(!0),an(kt,null,hu(r.visibleValues,(o,a)=>Zt(n.$slots,"tag",{option:o,search:n.search,remove:n.removeElement},()=>[(Be(),an("span",{class:"multiselect__tag",key:a},[Ne("span",{textContent:Rn(n.getOptionLabel(o))},null,8,["textContent"]),Ne("i",{tabindex:"1",onKeypress:Qn(Ct(l=>n.removeElement(o),["prevent"]),["enter"]),onMousedown:Ct(l=>n.removeElement(o),["prevent"]),class:"multiselect__tag-icon"},null,40,["onKeypress","onMousedown"])]))])),256))],512),[[Nr,r.visibleValues.length>0]]),n.internalValue&&n.internalValue.length>t.limit?Zt(n.$slots,"limit",{key:0},()=>[Ne("strong",{class:"multiselect__strong",textContent:Rn(t.limitText(n.internalValue.length-t.limit))},null,8,["textContent"])]):xt("v-if",!0)]),Ne(ka,{name:"multiselect__loading"},{default:gr(()=>[Zt(n.$slots,"loading",{},()=>[Ir(Ne("div",pR,null,512),[[Nr,t.loading]])])]),_:3}),n.searchable?(Be(),an("input",{key:0,ref:"search",name:t.name,id:n.id,type:"text",autocomplete:"off",spellcheck:!1,placeholder:n.placeholder,style:r.inputStyle,value:n.search,disabled:t.disabled,tabindex:t.tabindex,onInput:e[2]||(e[2]=o=>n.updateSearch(o.target.value)),onFocus:e[3]||(e[3]=Ct(o=>n.activate(),["prevent"])),onBlur:e[4]||(e[4]=Ct(o=>n.deactivate(),["prevent"])),onKeyup:e[5]||(e[5]=Qn(o=>n.deactivate(),["esc"])),onKeydown:[e[6]||(e[6]=Qn(Ct(o=>n.pointerForward(),["prevent"]),["down"])),e[7]||(e[7]=Qn(Ct(o=>n.pointerBackward(),["prevent"]),["up"])),e[9]||(e[9]=Qn(Ct(o=>n.removeLastElement(),["stop"]),["delete"]))],onKeypress:e[8]||(e[8]=Qn(Ct(o=>n.addPointerElement(o),["prevent","stop","self"]),["enter"])),class:"multiselect__input","aria-controls":"listbox-"+n.id},null,44,["name","id","placeholder","value","disabled","tabindex","aria-controls"])):xt("v-if",!0),r.isSingleLabelVisible?(Be(),an("span",{key:1,class:"multiselect__single",onMousedown:e[10]||(e[10]=Ct((...o)=>n.toggle&&n.toggle(...o),["prevent"]))},[Zt(n.$slots,"singleLabel",{option:r.singleValue},()=>[si(Rn(n.currentOptionLabel),1)])],32)):xt("v-if",!0),r.isPlaceholderVisible?(Be(),an("span",{key:2,class:"multiselect__placeholder",onMousedown:e[11]||(e[11]=Ct((...o)=>n.toggle&&n.toggle(...o),["prevent"]))},[Zt(n.$slots,"placeholder",{},()=>[si(Rn(n.placeholder),1)])],32)):xt("v-if",!0)],512),Ne(ka,{name:"multiselect"},{default:gr(()=>[Ir(Ne("div",{class:"multiselect__content-wrapper",onFocus:e[12]||(e[12]=(...o)=>n.activate&&n.activate(...o)),tabindex:"-1",onMousedown:e[13]||(e[13]=Ct(()=>{},["prevent"])),style:{maxHeight:n.optimizedHeight+"px"},ref:"list"},[Ne("ul",{class:"multiselect__content",style:r.contentStyle,role:"listbox",id:"listbox-"+n.id},[Zt(n.$slots,"beforeList"),n.multiple&&n.max===n.internalValue.length?(Be(),an("li",mR,[Ne("span",gR,[Zt(n.$slots,"maxElements",{},()=>[si("Maximum of "+Rn(n.max)+" options selected. First remove a selected option to select another.",1)])])])):xt("v-if",!0),!n.max||n.internalValue.length<n.max?(Be(!0),an(kt,{key:1},hu(n.filteredOptions,(o,a)=>(Be(),an("li",{class:"multiselect__element",key:a,id:n.id+"-"+a,role:o&&(o.$isLabel||o.$isDisabled)?null:"option"},[o&&(o.$isLabel||o.$isDisabled)?xt("v-if",!0):(Be(),an("span",{key:0,class:[n.optionHighlight(a,o),"multiselect__option"],onClick:Ct(l=>n.select(o),["stop"]),onMouseenter:Ct(l=>n.pointerSet(a),["self"]),"data-select":o&&o.isTag?n.tagPlaceholder:r.selectLabelText,"data-selected":r.selectedLabelText,"data-deselect":r.deselectLabelText},[Zt(n.$slots,"option",{option:o,search:n.search,index:a},()=>[Ne("span",null,Rn(n.getOptionLabel(o)),1)])],42,["onClick","onMouseenter","data-select","data-selected","data-deselect"])),o&&(o.$isLabel||o.$isDisabled)?(Be(),an("span",{key:1,"data-select":n.groupSelect&&r.selectGroupLabelText,"data-deselect":n.groupSelect&&r.deselectGroupLabelText,class:[n.groupHighlight(a,o),"multiselect__option"],onMouseenter:Ct(l=>n.groupSelect&&n.pointerSet(a),["self"]),onMousedown:Ct(l=>n.selectGroup(o),["prevent"])},[Zt(n.$slots,"option",{option:o,search:n.search,index:a},()=>[Ne("span",null,Rn(n.getOptionLabel(o)),1)])],42,["data-select","data-deselect","onMouseenter","onMousedown"])):xt("v-if",!0)],8,["id","role"]))),128)):xt("v-if",!0),Ir(Ne("li",null,[Ne("span",_R,[Zt(n.$slots,"noResult",{search:n.search},()=>[vR])])],512),[[Nr,t.showNoResults&&n.filteredOptions.length===0&&n.search&&!t.loading]]),Ir(Ne("li",null,[Ne("span",xR,[Zt(n.$slots,"noOptions",{},()=>[yR])])],512),[[Nr,t.showNoOptions&&(n.options.length===0||r.hasOptionGroup===!0&&n.filteredOptions.length===0)&&!n.search&&!t.loading]]),Zt(n.$slots,"afterList")],12,["id"])],36),[[Nr,n.isOpen]])]),_:3})],42,["tabindex","aria-owns"])}u(MR,"render");a1.render=MR;const SR=tn({methods:{mouseClick(n){if(this.justClicked){this.justClicked=!1;return}const e=document.getElementById("brush-options");if(e){const t=e.getBoundingClientRect();this.showOptions=n.clientX>=t.left&&n.clientX<=t.right&&n.clientY>=t.top&&n.clientY<=t.bottom}},setBrushShape(n){H.brushShape=n},inputChange(n){H.brushSize=+n.target.value}},mounted(){document.addEventListener("click",this.mouseClick)},unmounted(){document.removeEventListener("click",this.mouseClick)},data(){return{showOptions:!1,justClicked:!1,state:H}}}),fs=u(n=>(qn("data-v-bb91c8b4"),n=n(),Zn(),n),"_withScopeId$4"),bR={class:"brush-button"},ER=fs(()=>q("i",{class:"bi bi-brush-fill"},null,-1)),TR=fs(()=>q("i",{class:"bi bi-caret-down-fill"},null,-1)),AR=[ER,TR],wR={key:0,id:"brush-options",class:"brush-options"},CR=fs(()=>q("div",{class:"title"}," Brush ",-1)),RR=fs(()=>q("p",{style:{margin:"4px","margin-bottom":"0","text-align":"left"}},"Size",-1)),PR={style:{display:"flex","margin-left":"4px","margin-right":"4px","align-items":"center"}},DR=["value"],IR={style:{height:"100%",width:"18px","text-align":"center",color:"var(--color-text-disabled)"}},LR=fs(()=>q("span",{style:{height:"100%","margin-bottom":"0.1em",color:"var(--color-text-disabled)"}},"px",-1)),NR=fs(()=>q("p",{style:{margin:"4px","margin-bottom":"0","text-align":"left"}},"Shape",-1)),OR={style:{display:"flex",width:"100%","justify-content":"space-around",flex:"1","align-items":"center"}},UR=fs(()=>q("i",{class:"bi bi-square-fill"},null,-1)),FR=[UR],BR=fs(()=>q("i",{class:"bi bi-circle-fill"},null,-1)),zR=[BR];function kR(n,e,t,i,s,r){return Be(),nt("div",bR,[q("div",{onClick:e[0]||(e[0]=o=>{n.showOptions=!0,n.justClicked=!0}),class:"icons"},AR),n.showOptions?(Be(),nt("div",wR,[CR,RR,q("div",PR,[q("input",{onMousemove:e[1]||(e[1]=(...o)=>n.inputChange&&n.inputChange(...o)),value:n.state.brushSize,min:1,max:"16",class:"custom-range",type:"range",style:{flex:"1"}},null,40,DR),q("span",IR,Rn(n.state.brushSize),1),LR]),NR,q("div",OR,[q("div",{onClick:e[2]||(e[2]=o=>n.setBrushShape("square")),class:"brush-type",style:Dt(`background-color: var(${n.state.brushShape==="square"?"--color-secondary":"--color-foreground-2"});`)},FR,4),q("div",{onClick:e[3]||(e[3]=o=>n.setBrushShape("round")),class:"brush-type",style:Dt(`background-color: var(${n.state.brushShape==="round"?"--color-secondary":"--color-foreground-2"});`)},zR,4)])])):xt("",!0)])}u(kR,"_sfc_render$7");const VR=nn(SR,[["render",kR],["__scopeId","data-v-bb91c8b4"]]),_f=tn({components:{Multiselect:a1,Brush:VR},methods:{resize(){this.space=window.innerWidth<1200?4:8,this.rightVisible=window.innerWidth>=1045},fullscreenChange(){H.fullscreen=document.fullscreenElement!==null},fullscreen(){H.fullscreen?document.exitFullscreen():document.body.requestFullscreen()}},mounted(){window.addEventListener("resize",this.resize),document.addEventListener("fullscreenchange",this.fullscreenChange)},unmounted(){window.removeEventListener("resize",this.resize),document.removeEventListener("fullscreenchange",this.fullscreenChange)},data:()=>({options:["Object mode","Geometry mode"],space:window.innerWidth<1200?4:8,rightVisible:window.innerWidth>=1045,state:H})}),xv=u(()=>{No(n=>({"12376b94":n.space+"px"}))},"__injectCSSVars__$3"),yv=_f.setup;_f.setup=yv?(n,e)=>(xv(),yv(n,e)):xv;const Oo=u(n=>(qn("data-v-22af01d7"),n=n(),Zn(),n),"_withScopeId$3"),HR={class:"mode-bar"},GR={class:"mode-bar-left"},WR=S0('<div class="mode-bar-item" data-v-22af01d7><div class="mode-bar-item-select" data-v-22af01d7><select data-v-22af01d7><option value="" disabled selected data-v-22af01d7>Render Mode</option><option value="Material Preview" data-v-22af01d7>Material Preview</option><option value="Unlit" data-v-22af01d7>Unlit</option><option value="Wireframe" data-v-22af01d7>Wireframe</option><option value="Lit" data-v-22af01d7>Lit</option></select></div></div>',1),jR={class:"mode-bar-item"},XR={class:"mode-bar-item-select"},$R=Oo(()=>q("i",{class:"bi bi-box-fill"},null,-1)),YR={class:"mode-bar-item"},KR={class:"mode-bar-item-select"},qR=Oo(()=>q("i",{class:"bi bi-hammer"},null,-1)),ZR={key:0,class:"mode-bar-item"},JR={key:0,class:"mode-bar-right"},QR={title:"fullscreen",class:"mode-bar-item"},eP={class:"mode-bar-item-select",style:{width:"48px"}},tP={title:"snap",class:"mode-bar-item"},nP={class:"mode-bar-item-select",style:{width:"48px"}},iP=Oo(()=>q("i",{class:"bi bi-magnet-fill"},null,-1)),sP=[iP],rP={title:"grid",class:"mode-bar-item"},oP={class:"mode-bar-item-select",style:{width:"48px"}},aP=Oo(()=>q("i",{class:"bi bi-grid-3x3"},null,-1)),lP=[aP],cP=Oo(()=>q("div",{class:"mode-bar-item"},[q("div",{class:"mode-bar-item-select"},[q("div",{class:"mode-button"},[q("i",{class:"bi bi-globe-americas"}),si(" World Material ")])])],-1));function uP(n,e,t,i,s,r){const o=Bt("Brush");return Be(),nt("div",HR,[q("div",GR,[WR,q("div",jR,[q("div",XR,[q("div",{onClick:e[0]||(e[0]=a=>n.state.setCurrentMode("object")),class:"mode-button",style:Dt(n.state.currentMode==="object"?"background-color: var(--color-secondary);":"")},[$R,si(" Object Mode ")],4)])]),q("div",YR,[q("div",KR,[q("div",{onClick:e[1]||(e[1]=a=>n.state.setCurrentMode("sculpt")),class:"mode-button",style:Dt(n.state.currentMode==="sculpt"?"background-color: var(--color-secondary);":"")},[qR,si(" Voxel Mode ")],4)])]),n.state.currentMode==="sculpt"?(Be(),nt("div",ZR,[Ne(o)])):xt("",!0)]),n.rightVisible?(Be(),nt("div",JR,[q("div",QR,[q("div",eP,[q("div",{onClick:e[2]||(e[2]=(...a)=>n.fullscreen&&n.fullscreen(...a)),class:"mode-button",style:Dt(`background-color: var(${n.state.fullscreen?"--color-secondary":"--color-foreground-2"});`)},[q("i",{class:Ft(n.state.fullscreen?"bi bi-fullscreen-exit":"bi bi-fullscreen")},null,2)],4)])]),q("div",tP,[q("div",nP,[q("div",{onClick:e[3]||(e[3]=a=>n.state.snapActive=!n.state.snapActive),class:"mode-button",style:Dt(`background-color: var(${n.state.snapActive?"--color-secondary":"--color-foreground-2"});`)},sP,4)])]),q("div",rP,[q("div",oP,[q("div",{onClick:e[4]||(e[4]=a=>n.state.setGridActive(!n.state.gridActive)),class:"mode-button",style:Dt(`background-color: var(${n.state.gridActive?"--color-secondary":"--color-foreground-2"});`)},lP,4)])]),cP,q("div",{style:Dt(`width: ${n.space}px;`)},null,4)])):xt("",!0)])}u(uP,"_sfc_render$6");const hP=nn(_f,[["render",uP],["__scopeId","data-v-22af01d7"]]),vf=tn({data(){return{state:H}},methods:{editClick(){H.currentTool!=="edit"&&(H.currentTool="edit",document.dispatchEvent(new CustomEvent("tool-switch-edit")))},measureClick(){H.currentTool!=="measure"&&(H.currentTool="measure",document.dispatchEvent(new CustomEvent("tool-measure-edit")))},exploreClick(){H.currentTool!=="explore"&&(H.currentTool="explore",document.dispatchEvent(new CustomEvent("tool-explore-edit")))},annotateClick(){H.currentTool!=="annotate"&&(H.currentTool="annotate",document.dispatchEvent(new CustomEvent("tool-annotate-edit")))}}}),Mv=u(()=>{No(n=>({"35996b62":n.state.currentTool==="edit"?"var(--color-secondary)":"var(--color-foreground-1)","7891fda2":n.state.currentTool==="measure"?"var(--color-secondary)":"var(--color-foreground-1)",e03f0bb8:n.state.currentTool==="explore"?"var(--color-secondary)":"var(--color-foreground-1)","116dfa11":n.state.currentTool==="annotate"?"var(--color-secondary)":"var(--color-foreground-1)"}))},"__injectCSSVars__$2"),Sv=vf.setup;vf.setup=Sv?(n,e)=>(Mv(),Sv(n,e)):Mv;const Zl=u(n=>(qn("data-v-60410809"),n=n(),Zn(),n),"_withScopeId$2"),dP={class:"tool-bar"},fP=Zl(()=>q("i",{class:"bi bi-boxes"},null,-1)),pP=[fP],mP=Zl(()=>q("i",{class:"bi bi-rulers"},null,-1)),gP=[mP],_P=Zl(()=>q("i",{class:"bi bi-person-walking"},null,-1)),vP=[_P],xP=Zl(()=>q("i",{class:"bi bi-pen-fill"},null,-1)),yP=[xP];function MP(n,e,t,i,s,r){return Be(),nt("div",dP,[q("div",{onClick:e[0]||(e[0]=(...o)=>n.editClick&&n.editClick(...o)),title:"edit",class:"tool-bar-item edit"},pP),q("div",{onClick:e[1]||(e[1]=(...o)=>n.measureClick&&n.measureClick(...o)),title:"measure",class:"tool-bar-item measure"},gP),q("div",{onClick:e[2]||(e[2]=(...o)=>n.exploreClick&&n.exploreClick(...o)),title:"explore",class:"tool-bar-item explore"},vP),q("div",{onClick:e[3]||(e[3]=(...o)=>n.annotateClick&&n.annotateClick(...o)),title:"annotate",class:"tool-bar-item annotate"},yP)])}u(MP,"_sfc_render$5");const SP=nn(vf,[["render",MP],["__scopeId","data-v-60410809"]]),bP=tn({data:()=>({state:H})}),Jl=u(n=>(qn("data-v-260f388d"),n=n(),Zn(),n),"_withScopeId$1"),EP={key:0,class:"tool-bar"},TP=Jl(()=>q("i",{class:"bi bi-cursor-fill"},null,-1)),AP=[TP],wP=Jl(()=>q("i",{class:"bi bi-arrows-move"},null,-1)),CP=[wP],RP=Jl(()=>q("i",{class:"bi bi-arrows-fullscreen"},null,-1)),PP=[RP],DP=Jl(()=>q("i",{class:"bi bi-arrow-repeat"},null,-1)),IP=[DP];function LP(n,e,t,i,s,r){return n.state.currentMode==="object"?(Be(),nt("div",EP,[q("div",{onClick:e[0]||(e[0]=o=>n.state.objectModeState="select"),title:"select",class:"tool-bar-item",style:Dt(n.state.objectModeState==="select"?"background-color: var(--color-secondary);":"")},AP,4),q("div",{onClick:e[1]||(e[1]=o=>n.state.objectModeState="move"),title:"move",class:"tool-bar-item",style:Dt(n.state.objectModeState==="move"?"background-color: var(--color-secondary);":"")},CP,4),q("div",{onClick:e[2]||(e[2]=o=>n.state.objectModeState="scale"),title:"scale",class:"tool-bar-item",style:Dt(n.state.objectModeState==="scale"?"background-color: var(--color-secondary);":"")},PP,4),q("div",{onClick:e[3]||(e[3]=o=>n.state.objectModeState="rotate"),title:"rotate",class:"tool-bar-item",style:Dt(n.state.objectModeState==="rotate"?"background-color: var(--color-secondary);":"")},IP,4)])):xt("",!0)}u(LP,"_sfc_render$4");const NP=nn(bP,[["render",LP],["__scopeId","data-v-260f388d"]]),xf=tn({data(){return{state:H}},methods:{dispatchRotationEvent(n,e,t){document.dispatchEvent(new CustomEvent("ui-camera-rotate",{detail:{x:n,y:e,z:t}}))},clickPX(){this.dispatchRotationEvent(0,-90,180)},clickNX(){this.dispatchRotationEvent(0,90,-180)},clickPY(){this.dispatchRotationEvent(-90,0,-90)},clickNY(){this.dispatchRotationEvent(90,0,90)},clickPZ(){this.dispatchRotationEvent(-360,180,540)},clickNZ(){this.dispatchRotationEvent(0,0,540)}}}),bv=u(()=>{No(n=>({"6fc5bc20":n.state.rotationX+"deg","5c6190f1":n.state.rotationY+"deg","1eb4001c":n.state.rotationZ+"deg"}))},"__injectCSSVars__$1"),Ev=xf.setup;xf.setup=Ev?(n,e)=>(bv(),Ev(n,e)):bv;const OP={class:"axis"},UP={class:"axis-container"},FP={class:"axis-cube"};function BP(n,e,t,i,s,r){return Be(),nt("div",OP,[q("div",UP,[q("div",FP,[q("div",{onClick:e[0]||(e[0]=(...o)=>n.clickPY&&n.clickPY(...o)),class:"axis-face top"},"Y"),q("div",{onClick:e[1]||(e[1]=(...o)=>n.clickNY&&n.clickNY(...o)),class:"axis-face bottom"}),q("div",{onClick:e[2]||(e[2]=(...o)=>n.clickNX&&n.clickNX(...o)),class:"axis-face left"}),q("div",{onClick:e[3]||(e[3]=(...o)=>n.clickPX&&n.clickPX(...o)),class:"axis-face right"},"X"),q("div",{onClick:e[4]||(e[4]=(...o)=>n.clickNZ&&n.clickNZ(...o)),class:"axis-face front"}),q("div",{onClick:e[5]||(e[5]=(...o)=>n.clickPZ&&n.clickPZ(...o)),class:"axis-face back"},"Z")])])])}u(BP,"_sfc_render$3");const zP=nn(xf,[["render",BP],["__scopeId","data-v-47a07c7c"]]);var ao=Object.freeze({Linear:Object.freeze({None:function(n){return n},In:function(n){return this.None(n)},Out:function(n){return this.None(n)},InOut:function(n){return this.None(n)}}),Quadratic:Object.freeze({In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}}),Cubic:Object.freeze({In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}}),Quartic:Object.freeze({In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}}),Quintic:Object.freeze({In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}}),Sinusoidal:Object.freeze({In:function(n){return 1-Math.sin((1-n)*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.sin(Math.PI*(.5-n)))}}),Exponential:Object.freeze({In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}}),Circular:Object.freeze({In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}}),Elastic:Object.freeze({In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin((n-.1)*5*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin((n-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(n){var e=1.70158;return n===1?1:n*n*((e+1)*n-e)},Out:function(n){var e=1.70158;return n===0?0:--n*n*((e+1)*n+e)+1},InOut:function(n){var e=2.5949095;return(n*=2)<1?.5*(n*n*((e+1)*n-e)):.5*((n-=2)*n*((e+1)*n+e)+2)}}),Bounce:Object.freeze({In:function(n){return 1-ao.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?ao.Bounce.In(n*2)*.5:ao.Bounce.Out(n*2-1)*.5+.5}}),generatePow:function(n){return n===void 0&&(n=4),n=n<Number.EPSILON?Number.EPSILON:n,n=n>1e4?1e4:n,{In:function(e){return Math.pow(e,n)},Out:function(e){return 1-Math.pow(1-e,n)},InOut:function(e){return e<.5?Math.pow(e*2,n)/2:(1-Math.pow(2-e*2,n))/2+.5}}}}),Kr=u(function(){return performance.now()},"now"),kP=function(){function n(){this._tweens={},this._tweensAddedDuringUpdate={}}return u(n,"Group"),n.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},n.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},n.prototype.update=function(e,t){e===void 0&&(e=Kr()),t===void 0&&(t=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var s=0;s<i.length;s++){var r=this._tweens[i[s]],o=!t;r&&r.update(e,o)===!1&&!t&&delete this._tweens[i[s]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},n}(),ur={Linear:function(n,e){var t=n.length-1,i=t*e,s=Math.floor(i),r=ur.Utils.Linear;return e<0?r(n[0],n[1],i):e>1?r(n[t],n[t-1],t-i):r(n[s],n[s+1>t?t:s+1],i-s)},Bezier:function(n,e){for(var t=0,i=n.length-1,s=Math.pow,r=ur.Utils.Bernstein,o=0;o<=i;o++)t+=s(1-e,i-o)*s(e,o)*n[o]*r(i,o);return t},CatmullRom:function(n,e){var t=n.length-1,i=t*e,s=Math.floor(i),r=ur.Utils.CatmullRom;return n[0]===n[t]?(e<0&&(s=Math.floor(i=t*(1+e))),r(n[(s-1+t)%t],n[s],n[(s+1)%t],n[(s+2)%t],i-s)):e<0?n[0]-(r(n[0],n[0],n[1],n[1],-i)-n[0]):e>1?n[t]-(r(n[t],n[t],n[t-1],n[t-1],i-t)-n[t]):r(n[s?s-1:0],n[s],n[t<s+1?t:s+1],n[t<s+2?t:s+2],i-s)},Utils:{Linear:function(n,e,t){return(e-n)*t+n},Bernstein:function(n,e){var t=ur.Utils.Factorial;return t(n)/t(e)/t(n-e)},Factorial:function(){var n=[1];return function(e){var t=1;if(n[e])return n[e];for(var i=e;i>1;i--)t*=i;return n[e]=t,t}}(),CatmullRom:function(n,e,t,i,s){var r=(t-n)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*t+r+o)*l+(-3*e+3*t-2*r-o)*a+r*s+e}}},VP=function(){function n(){}return u(n,"Sequence"),n.nextId=function(){return n._nextId++},n._nextId=0,n}(),Dd=new kP,Tv=function(){function n(e,t){t===void 0&&(t=Dd),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=ao.Linear.None,this._interpolationFunction=ur.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=VP.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return u(n,"Tween"),n.prototype.getId=function(){return this._id},n.prototype.isPlaying=function(){return this._isPlaying},n.prototype.isPaused=function(){return this._isPaused},n.prototype.getDuration=function(){return this._duration},n.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t<0?0:t,this},n.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e<0?0:e,this},n.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},n.prototype.start=function(e,t){if(e===void 0&&(e=Kr()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var s={};for(var r in this._valuesEnd)s[r]=this._valuesEnd[r];this._valuesEnd=s}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},n.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},n.prototype._setupProperties=function(e,t,i,s,r){for(var o in i){var a=e[o],l=Array.isArray(a),c=l?"array":typeof a,h=!l&&Array.isArray(i[o]);if(!(c==="undefined"||c==="function")){if(h){var d=i[o];if(d.length===0)continue;for(var f=[a],p=0,_=d.length;p<_;p+=1){var y=this._handleRelativeValue(a,d[p]);if(isNaN(y)){h=!1,console.warn("Found invalid interpolation list. Skipping.");break}f.push(y)}h&&(i[o]=f)}if((c==="object"||l)&&a&&!h){t[o]=l?[]:{};var g=a;for(var m in g)t[o][m]=g[m];s[o]=l?[]:{};var d=i[o];if(!this._isDynamic){var A={};for(var m in d)A[m]=d[m];i[o]=d=A}this._setupProperties(g,t[o],d,s[o],r)}else(typeof t[o]>"u"||r)&&(t[o]=a),l||(t[o]*=1),h?s[o]=i[o].slice().reverse():s[o]=t[o]||0}}},n.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},n.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},n.prototype.pause=function(e){return e===void 0&&(e=Kr()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},n.prototype.resume=function(e){return e===void 0&&(e=Kr()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},n.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},n.prototype.group=function(e){return e===void 0&&(e=Dd),this._group=e,this},n.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},n.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},n.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},n.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},n.prototype.easing=function(e){return e===void 0&&(e=ao.Linear.None),this._easingFunction=e,this},n.prototype.interpolation=function(e){return e===void 0&&(e=ur.Linear),this._interpolationFunction=e,this},n.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},n.prototype.onStart=function(e){return this._onStartCallback=e,this},n.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},n.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},n.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},n.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},n.prototype.onStop=function(e){return this._onStopCallback=e,this},n.prototype.update=function(e,t){var i=this,s;if(e===void 0&&(e=Kr()),t===void 0&&(t=!0),this._isPaused)return!0;var r,o=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>o)return!1;t&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var a=e-this._startTime,l=this._duration+((s=this._repeatDelayTime)!==null&&s!==void 0?s:this._delayTime),c=this._duration+this._repeat*l,h=u(function(){if(i._duration===0||a>c)return 1;var g=Math.trunc(a/l),m=a-g*l,A=Math.min(m/i._duration,1);return A===0&&a===i._duration?1:A},"calculateElapsedPortion"),d=h(),f=this._easingFunction(d);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,f),this._onUpdateCallback&&this._onUpdateCallback(this._object,d),this._duration===0||a>=this._duration)if(this._repeat>0){var p=Math.min(Math.trunc((a-this._duration)/l)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=p);for(r in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[r]=="string"&&(this._valuesStartRepeat[r]=this._valuesStartRepeat[r]+parseFloat(this._valuesEnd[r])),this._yoyo&&this._swapEndStartRepeatValues(r),this._valuesStart[r]=this._valuesStartRepeat[r];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=l*p,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var _=0,y=this._chainedTweens.length;_<y;_++)this._chainedTweens[_].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},n.prototype._updateProperties=function(e,t,i,s){for(var r in i)if(t[r]!==void 0){var o=t[r]||0,a=i[r],l=Array.isArray(e[r]),c=Array.isArray(a),h=!l&&c;h?e[r]=this._interpolationFunction(a,s):typeof a=="object"&&a?this._updateProperties(e[r],o,a,s):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[r]=o+(a-o)*s))}},n.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},n.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},n}(),ai=Dd;ai.getAll.bind(ai);ai.removeAll.bind(ai);ai.add.bind(ai);ai.remove.bind(ai);var HP=ai.update.bind(ai);const GP=.01,mi=1e3,Jm=class Jm{constructor(e,t){se(this,"canvas");se(this,"canvasContainer");se(this,"canvasObserver");se(this,"renderer");se(this,"scene");se(this,"camera");se(this,"controls");se(this,"clock");se(this,"grid10");se(this,"grid40");se(this,"lineX");se(this,"lineZ");se(this,"ghostLight",new Ro(16777215,10,1e4,.25));se(this,"nGhostLight",new Ro(16773360,2,1e4,.25));se(this,"ambientLight",new hl(16777215,.5));se(this,"clickableObjects",[]);se(this,"isMouseDown",[!1,!1,!1,!1]);se(this,"isDragging",[!1,!1,!1,!1]);se(this,"mouseDownPosition",[[0,0],[0,0],[0,0],[0,0]]);se(this,"lastMeshIntersect");se(this,"effectComposter");se(this,"renderPass");se(this,"outlinePass");se(this,"fxaaPass");se(this,"ssaoPass");se(this,"topLevel");se(this,"lastMouseMove");se(this,"isDraggingObject",!1);se(this,"pressed",new Set);se(this,"actions",[]);se(this,"createEvents",u(()=>{document.addEventListener("ui-camera-rotate",this.handleCameraRotationFromUi),this.canvasContainer.addEventListener("mousemove",this.handleMouseMove),this.canvasContainer.addEventListener("mousedown",this.handleMouseDown),this.canvasContainer.addEventListener("mouseup",this.handleMouseUp),document.addEventListener("keyup",this.handleKeyUp),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keypress",this.handleKeyPress),window.addEventListener("blur",this.handleBlur),this.canvas.addEventListener("contextmenu",this.handleContextMenu)},"createEvents"));se(this,"clearEvents",u(()=>{document.removeEventListener("ui-camera-rotate",this.handleCameraRotationFromUi),this.canvasContainer.removeEventListener("mousemove",this.handleMouseMove),this.canvasContainer.removeEventListener("mousedown",this.handleMouseDown),this.canvasContainer.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener("keyup",this.handleKeyUp),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keypress",this.handleKeyPress),window.removeEventListener("blur",this.handleBlur),this.canvas.removeEventListener("contextmenu",this.handleContextMenu)},"clearEvents"));se(this,"pushAction",u(e=>{var t,i;this.actions.length===10&&((i=(t=this.actions.shift())==null?void 0:t.out)==null||i.call(t)),this.actions.push(e)},"pushAction"));se(this,"update",u(()=>{if(this.clock.getDelta(),this.controls.enabled=this.shouldControlsBeOn(),this.lastMouseMove){let e=this.intersectObject(this.lastMouseMove.offsetX,this.lastMouseMove.offsetY);this.clickableObjects.forEach(i=>{e?i instanceof $n&&i!==e.object&&(i.hover&&i.invokeHoverOutEvent(this.lastMouseMove),i.hover=!1):(i instanceof $n&&i.hover&&i.invokeHoverOutEvent(this.lastMouseMove),i.hover=!1)});const t=this.lastMouseMove;t.intersect=e,e&&e.object instanceof $n&&(e.object.hover=!0,e.object.invokeHoverEvent(t))}this.controls.update(),HP(),Xe.INSTANCE.update(this.camera),this.camera.rotation.reorder("YXZ"),H.rotationX=Hi.radToDeg(this.camera.rotation.x),H.rotationY=Hi.radToDeg(this.camera.rotation.y),H.rotationZ=Hi.radToDeg(this.camera.rotation.z),Xe.INSTANCE.scene.visible=!1,this.renderer.clearDepth(),this.effectComposter.render(),this.renderer.clearDepth(),this.renderer.autoClear=!1,Xe.INSTANCE.scene.visible=Xe.INSTANCE.scene.userData.visible,this.renderer.render(this.topLevel,this.camera),Xe.INSTANCE.scene.visible=!1,this.renderer.autoClear=!0,requestAnimationFrame(this.update)},"update"));se(this,"selectObjects",u(e=>{e.forEach(t=>{t.selected||t.select(),Xe.INSTANCE.selectedObjects.includes(t)||Xe.INSTANCE.selectedObjects.push(t)}),this.outlinePass&&(this.outlinePass.selectedObjects=Xe.INSTANCE.selectedObjects)},"selectObjects"));se(this,"clipboard",[]);se(this,"copy",u(()=>{this.clipboard=[],Xe.INSTANCE.selectedObjects.forEach(e=>{this.clipboard.includes(e)||this.clipboard.push(e)})},"copy"));se(this,"paste",u(()=>{this.unselectAll(),this.clipboard.forEach(e=>{const t=e.clone();this.scene.add(t),this.clickableObjects.push(t),Xe.INSTANCE.selectedObjects.push(t),t.select(),H.pushAction({in:()=>(this.deleteObjects([t]),!1)})}),this.outlinePass&&(this.outlinePass.selectedObjects=Xe.INSTANCE.selectedObjects)},"paste"));se(this,"undo",u(()=>{var t;const e=this.actions.pop();e&&e.in()&&((t=e.out)==null||t.call(e))},"undo"));se(this,"deleteObjects",u(e=>{const t=[];e.forEach(i=>{t.push(i),i.destoy()}),t.forEach(i=>{const s=this.clickableObjects.indexOf(i),r=Xe.INSTANCE.selectedObjects.indexOf(i);s>-1&&this.clickableObjects.splice(s,1),r>-1&&Xe.INSTANCE.selectedObjects.splice(r,1)}),this.outlinePass&&(this.outlinePass.selectedObjects=Xe.INSTANCE.selectedObjects)},"deleteObjects"));se(this,"shouldControlsBeOn",u(()=>!this.pressed.has("Control")&&!this.pressed.has("Alt")&&!this.isDraggingObject,"shouldControlsBeOn"));se(this,"handleBlur",u(()=>{this.pressed.clear(),this.isMouseDown=[!1,!1,!1,!1],this.isDraggingObject=!1,this.isDragging=[!1,!1,!1,!1],H.isMouseDown=this.isMouseDown},"handleBlur"));se(this,"handleContextMenu",u(e=>{e.preventDefault()},"handleContextMenu"));se(this,"handleKeyPress",u(e=>{},"handleKeyPress"));se(this,"handleKeyDown",u(e=>{this.pressed.add(e.key),e.key==="Tab"&&e.preventDefault()},"handleKeyDown"));se(this,"handleKeyUp",u(e=>{if(this.pressed.delete(e.key),e.ctrlKey&&e.preventDefault(),e.code==="Delete"){const t=[];Xe.INSTANCE.selectedObjects.forEach(i=>{t.push(i),i.userData.parent=i.parent,i.removeFromParent()}),t.forEach(i=>{const s=this.clickableObjects.indexOf(i),r=Xe.INSTANCE.selectedObjects.indexOf(i);i.unselect(),s>-1?(this.clickableObjects.splice(s,1),i.userData.clickable=!0):i.userData.clickable=!1,r>-1&&Xe.INSTANCE.selectedObjects.splice(r,1)}),H.pushAction({in:()=>(t.forEach(i=>{var s;(s=i.userData.parent)==null||s.add(i),i.userData.clickable&&this.clickableObjects.push(i)}),!1),out:()=>{t.forEach(i=>{i.destoy()})}})}e.code==="KeyV"&&e.ctrlKey&&this.paste(),e.code==="KeyC"&&e.ctrlKey&&this.copy(),e.code==="KeyZ"&&e.ctrlKey&&this.undo(),e.key==="Tab"&&H.setCurrentMode(H.currentMode==="object"?"sculpt":"object"),e.code==="KeyT"&&H.currentMode==="object"&&(H.objectModeState="move"),e.code==="KeyR"&&H.currentMode==="object"&&(H.objectModeState="rotate"),e.code==="KeyG"&&H.currentMode==="object"&&(H.objectModeState="scale"),e.code==="KeyF"&&H.currentMode==="object"&&(H.objectModeState="select")},"handleKeyUp"));se(this,"intersectObject",u((e,t)=>{const i=new fl,s=new ve;s.x=e/this.canvas.clientWidth*2-1,s.y=-(t/this.canvas.clientHeight)*2+1,i.setFromCamera(s,this.camera),i.far=1e3,i.near=1e-7;const r=i.intersectObjects(this.clickableObjects,!0).reverse();let o=r[0];for(const a of r)if(!a.object.disableMouseEvents){if(a.object.draggable){o=a;break}o=a,o.object.userData.meshObject&&(o.object=o.object.userData.meshObject)}return o},"intersectObject"));se(this,"handleMouseDown",u(e=>{this.isMouseDown[e.button]=!0,H.isMouseDown[e.button]=!0,this.mouseDownPosition[e.button]=[e.offsetX,e.offsetY];const t=e;let i=this.intersectObject(e.offsetX,e.offsetY);if(!i){this.lastMeshIntersect=void 0;return}t.intersect=i,this.lastMeshIntersect=t,this.lastMeshIntersect.isFirstMovement=!0;const s=i.object;s.invokeMouseDownEvent(t),s.draggable&&(this.isDraggingObject=!0)},"handleMouseDown"));se(this,"handleMouseUp",u(e=>{var t;if(!this.isDragging[e.button]){const i=(t=this.lastMeshIntersect)==null?void 0:t.intersect.object;if(i&&!i.disableMouseEvents){if(i==null||i.invokeClickEvent(this.lastMeshIntersect),!i.internal&&H.currentMode==="object"){if(e.shiftKey||this.unselectAll(),!i.selected)i.select(),Xe.INSTANCE.selectedObjects.push(i);else if(e.shiftKey){i.unselect();let s=Xe.INSTANCE.selectedObjects.indexOf(i);s!==-1&&Xe.INSTANCE.selectedObjects.splice(s,1)}this.outlinePass&&(this.outlinePass.selectedObjects=Xe.INSTANCE.selectedObjects)}}else this.unselectAll()}this.isMouseDown[e.button]=!1,H.isMouseDown[e.button]=!1,this.isDragging[e.button]=!1,this.isDraggingObject=!1,this.controls.enabled=this.shouldControlsBeOn()},"handleMouseUp"));se(this,"handleMouseMove",u(e=>{this.lastMouseMove=e;for(let t=0;t<this.isMouseDown.length;t++)if(this.isMouseDown[t]&&(this.isDragging[t]=!0,this.lastMeshIntersect&&this.lastMeshIntersect.intersect.object&&!this.lastMeshIntersect.intersect.object.disableMouseEvents)){const i=new Pn,s=new Pn;let r=new D;this.camera.getWorldDirection(r),r.y=0,i.setFromNormalAndCoplanarPoint(new D(0,1,0),this.lastMeshIntersect.intersect.point),s.setFromNormalAndCoplanarPoint(r,this.lastMeshIntersect.intersect.point);const o=new fl,a=new ve,l=new ve;a.x=e.offsetX/this.canvas.clientWidth*2-1,a.y=-(e.offsetY/this.canvas.clientHeight)*2+1,l.x=(e.offsetX-e.movementX)/this.canvas.clientWidth*2-1,l.y=-((e.offsetY-e.movementY)/this.canvas.clientHeight)*2+1,o.setFromCamera(a,this.camera);const c=new D,h=new D,d=new D,f=new D;o.ray.intersectPlane(i,c),o.ray.intersectPlane(s,h),o.setFromCamera(l,this.camera),o.ray.intersectPlane(i,d),o.ray.intersectPlane(s,f);const p=e;p.movement3dOriginXZ=d,p.movement3dOriginY=f,p.movement3dStart=this.lastMeshIntersect.intersect.point,p.isFirstMovement=this.lastMeshIntersect.isFirstMovement,p.intersect=this.lastMeshIntersect.intersect;const _=p.intersect.object;let y=new D(e.movementX,-e.movementY,.5);y=y.unproject(this.camera),y=y.sub(this.camera.position).normalize(),p.movement3dXZ=c,p.movement3dY=h,_.invokeDragEvent(p),this.lastMeshIntersect.isFirstMovement=!1}},"handleMouseMove"));se(this,"handleCameraRotationFromUi",u(e=>{this.camera.rotation.reorder("YXZ");const t=new D(0,0,1).applyEuler(new Kn(Hi.degToRad(e.detail.x),Hi.degToRad(e.detail.y),Hi.degToRad(e.detail.z),"YXZ")),i=this.camera.position.sub(this.controls.target).length(),s=this.controls.target.clone().add(t.multiplyScalar(i)),r=this.camera.position.clone(),o=this.camera.rotation.clone();this.camera.position.copy(s),this.camera.rotation.set(0,0,0,"YXZ"),this.camera.lookAt(this.controls.target);const a=this.camera.rotation.clone();this.camera.position.copy(r),this.camera.rotation.copy(o),new Tv(this.camera.position).to({x:s.x,y:s.y,z:s.z},500).start(),new Tv(this.camera.rotation).to({x:a.x,y:a.y,z:a.z},1e3).start()},"handleCameraRotationFromUi"));se(this,"handleResize",u(()=>{var i;this.canvas.style.width="100%",this.canvas.style.height="100%";const e=this.canvas.clientWidth,t=this.canvas.clientHeight;this.canvas.width=e,this.canvas.height=t,this.renderer.setSize(e,t),this.camera.aspect=e/t,this.effectComposter.setSize(e,t),(i=this.outlinePass)==null||i.setSize(e,t),this.fxaaPass&&this.fxaaPass.uniforms.resolution.value.set(1/this.canvas.width,1/this.canvas.height),this.ssaoPass&&(this.ssaoPass.resolution=new ve(this.canvas.width,this.canvas.height)),this.camera.updateProjectionMatrix()},"handleResize"));se(this,"createPostProccess",u(()=>{this.outlinePass=new Do(new ve(this.canvas.width,this.canvas.height),this.scene,this.camera,Xe.INSTANCE.selectedObjects),this.outlinePass.edgeGlow=0,this.fxaaPass=new vl(Lw),this.fxaaPass.uniforms.resolution.value.set(1/this.canvas.width,1/this.canvas.height),this.ssaoPass=new Ml(this.scene,this.camera,new ve(this.canvas.width,this.canvas.height)),this.ssaoPass.params.saoBias=.5,this.ssaoPass.params.saoIntensity=.002,this.ssaoPass.params.saoScale=10,this.ssaoPass.params.saoKernelRadius=16,this.ssaoPass.params.saoMinResolution=0,this.effectComposter.addPass(this.outlinePass),this.effectComposter.addPass(this.fxaaPass),this.effectComposter.addPass(this.ssaoPass)},"createPostProccess"));se(this,"createControlMeshes",u(()=>{this.scene.add(Xe.INSTANCE.scene),this.topLevel.add(Xe.INSTANCE.scene),Xe.INSTANCE.setVisible(!1),this.clickableObjects.push(Xe.INSTANCE.scene)},"createControlMeshes"));se(this,"createGrid",u(()=>{const e=new $i;this.scene.add(e),this.scene.fog=new Eh(new we(.13,.13,.13),.01,1e3),this.grid10=new ml(mi*10,mi-1,new we(3355443),new we(3355443)),this.grid40=new ml(mi*10,(mi-1)/4,new we(10987431),new we(10987431)),this.grid10.material.depthWrite=!1,this.grid40.material.depthWrite=!1,this.grid10.material.opacity=.5,this.grid40.material.opacity=.5,this.grid10.position.add(new D(-5,0,-5)),this.grid40.position.add(new D(-5,0,-5)),this.lineX=new Vs(new en().setFromPoints([new D(-mi*10,0,0),new D(mi*10,0,0)]),new ks({color:16711680,depthWrite:!1})),this.lineZ=new Vs(new en().setFromPoints([new D(0,0,-mi*10),new D(0,0,mi*10)]),new ks({color:255,depthWrite:!1})),this.renderer.setClearColor(new we(H.clearColor)),e.add(this.grid10),e.add(this.grid40),e.add(this.lineX),e.add(this.lineZ),H.setGridActive=t=>{e.visible=t,H.gridActive=t},H.setCurrentMode=t=>{H.currentMode=t,t!=="object"&&this.unselectAll()},this.ghostLight.position.set(1100,1e3,900),this.nGhostLight.position.set(-900,-1e3,-1100),this.scene.add(this.ghostLight),this.scene.add(this.nGhostLight),this.scene.add(this.ambientLight),this.test()},"createGrid"));se(this,"test",u(()=>{const e=new Qi;e.min=new D(-20,-20,-20),e.max=new D(20,20,20),e.draw(new D,"square",5,1),this.clickableObjects.push(e),this.scene.add(e)},"test"));se(this,"destroy",u(()=>{this.canvasObserver.disconnect(),this.clearEvents()},"destroy"));window.renderingContext=this,H.renderingContextProxy=this,H.pushAction=this.pushAction,this.canvas=e,this.canvasContainer=t,this.renderer=new bh({antialias:!0,canvas:e}),this.effectComposter=new Rd(this.renderer),this.scene=new nl,this.scene.userData.isRootScene=!0,this.topLevel=new nl,this.topLevel.add(new hl(16777215,1)),this.camera=new jt(70,1,GP,mi),this.renderPass=new Pd(this.scene,this.camera),this.effectComposter.addPass(this.renderPass),this.camera.position.set(100,100,100),this.controls=new ed(this.camera,e),this.clock=new dl(!0),this.handleResize(),this.createEvents(),this.canvasObserver=new ResizeObserver(this.handleResize),this.canvasObserver.observe(t),this.createGrid(),this.createControlMeshes(),this.createPostProccess(),this.update()}unselectAll(){Xe.INSTANCE.setVisible(!1),Xe.INSTANCE.selectedObjects.forEach(e=>{e.unselect()}),Xe.INSTANCE.selectedObjects=[],this.outlinePass&&(this.outlinePass.selectedObjects=Xe.INSTANCE.selectedObjects)}};u(Jm,"RenderingContext");let Id=Jm,Av;const WP=tn({mounted(){const n=document.getElementById("editor-canvas"),e=document.getElementById("canvas-container");n!=null&&(Av=new Id(n,e))},deactivated(){Av.destroy()}}),jP=u(n=>(qn("data-v-52bfad35"),n=n(),Zn(),n),"_withScopeId"),XP={id:"canvas-container"},$P=jP(()=>q("canvas",{id:"editor-canvas"},null,-1)),YP=[$P];function KP(n,e,t,i,s,r){return Be(),nt("div",XP,YP)}u(KP,"_sfc_render$2");const qP=nn(WP,[["render",KP],["__scopeId","data-v-52bfad35"]]),ZP=tn({components:{MenuBar:Ww,PropertiesEditor:KC,AssetBrowser:rR,ModeBar:hP,ToolBar:SP,TransformBar:NP,Axis:zP,CanvasEditor:qP}}),JP={class:"page"},QP={class:"page-row"},eD={class:"page-content"},tD={class:"canvas-container"};function nD(n,e,t,i,s,r){const o=Bt("MenuBar"),a=Bt("ModeBar"),l=Bt("ToolBar"),c=Bt("TransformBar"),h=Bt("Axis"),d=Bt("CanvasEditor"),f=Bt("AssetBrowser"),p=Bt("PropertiesEditor");return Be(),nt("div",JP,[Ne(o),q("div",QP,[q("div",eD,[Ne(a),q("div",tD,[Ne(l),Ne(c),Ne(h),Ne(d)]),Ne(f)]),q("div",null,[Ne(p)])])])}u(nD,"_sfc_render$1");const iD=nn(ZP,[["render",nD],["__scopeId","data-v-4d80a792"]]),yf=tn({components:{Editor:iD},data(){return{state:H}}}),wv=u(()=>{No(n=>({"16b1bdc4":n.state.cursorShape}))},"__injectCSSVars__"),Cv=yf.setup;yf.setup=Cv?(n,e)=>(wv(),Cv(n,e)):wv;function sD(n,e,t,i,s,r){const o=Bt("Editor");return Be(),an(o)}u(sD,"_sfc_render");const rD=nn(yf,[["render",sD],["__scopeId","data-v-8d8ace25"]]);sessionStorage.clear();R0();R0("classes");Vy(rD).mount("#app");
