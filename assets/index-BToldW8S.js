var g0=Object.defineProperty;var Gx=(n,e,t)=>e in n?g0(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var u=(n,e)=>g0(n,"name",{value:e,configurable:!0});var ue=(n,e,t)=>(Gx(n,typeof e!="symbol"?e+"":e,t),t);u(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}u(t,"getFetchOpts");function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}u(i,"processPreload")},"polyfill")();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Pf(n,e){const t=new Set(n.split(","));return i=>t.has(i)}u(Pf,"makeMap");const yt={},Ur=[],jn=u(()=>{},"NOOP"),Wx=u(()=>!1,"NO"),Mc=u(n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),"isOn"),Df=u(n=>n.startsWith("onUpdate:"),"isModelListener"),Vt=Object.assign,If=u((n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},"remove"),$x=Object.prototype.hasOwnProperty,ht=u((n,e)=>$x.call(n,e),"hasOwn"),Xe=Array.isArray,Fr=u(n=>Sc(n)==="[object Map]","isMap"),t_=u(n=>Sc(n)==="[object Set]","isSet"),Je=u(n=>typeof n=="function","isFunction"),Ht=u(n=>typeof n=="string","isString"),or=u(n=>typeof n=="symbol","isSymbol"),At=u(n=>n!==null&&typeof n=="object","isObject"),n_=u(n=>(At(n)||Je(n))&&Je(n.then)&&Je(n.catch),"isPromise"),i_=Object.prototype.toString,Sc=u(n=>i_.call(n),"toTypeString"),jx=u(n=>Sc(n).slice(8,-1),"toRawType"),s_=u(n=>Sc(n)==="[object Object]","isPlainObject"),Lf=u(n=>Ht(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,"isIntegerKey"),Mo=Pf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ec=u(n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},"cacheStringFunction"),Xx=/-(\w)/g,xi=Ec(n=>n.replace(Xx,(e,t)=>t?t.toUpperCase():"")),Yx=/\B([A-Z])/g,ar=Ec(n=>n.replace(Yx,"-$1").toLowerCase()),Tc=Ec(n=>n.charAt(0).toUpperCase()+n.slice(1)),Xc=Ec(n=>n?`on${Tc(n)}`:""),ms=u((n,e)=>!Object.is(n,e),"hasChanged"),Yc=u((n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},"invokeArrayFns"),r_=u((n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},"def"),qx=u(n=>{const e=parseFloat(n);return isNaN(e)?n:e},"looseToNumber"),Kx=u(n=>{const e=Ht(n)?Number(n):NaN;return isNaN(e)?n:e},"toNumber");let v0;const o_=u(()=>v0||(v0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),"getGlobalThis");function zt(n){if(Xe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Ht(i)?ey(i):zt(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Ht(n)||At(n))return n}u(zt,"normalizeStyle");const Zx=/;(?![^(]*\))/g,Jx=/:([^]+)/,Qx=/\/\*[^]*?\*\//g;function ey(n){const e={};return n.replace(Qx,"").split(Zx).forEach(t=>{if(t){const i=t.split(Jx);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}u(ey,"parseStringStyle");function lt(n){let e="";if(Ht(n))e=n;else if(Xe(n))for(let t=0;t<n.length;t++){const i=lt(n[t]);i&&(e+=i+" ")}else if(At(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}u(lt,"normalizeClass");const ty="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ny=Pf(ty);function a_(n){return!!n||n===""}u(a_,"includeBooleanAttr");const xt=u(n=>Ht(n)?n:n==null?"":Xe(n)||At(n)&&(n.toString===i_||!Je(n.toString))?JSON.stringify(n,l_,2):String(n),"toDisplayString"),l_=u((n,e)=>e&&e.__v_isRef?l_(n,e.value):Fr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[qc(i,r)+" =>"]=s,t),{})}:t_(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>qc(t))}:or(e)?qc(e):At(e)&&!Xe(e)&&!s_(e)?String(e):e,"replacer"),qc=u((n,e="")=>{var t;return or(n)?`Symbol(${(t=n.description)!=null?t:e})`:n},"stringifySymbol");/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let si;const _p=class _p{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=si,!e&&si&&(this.index=(si.scopes||(si.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=si;try{return si=this,e()}finally{si=t}}}on(){si=this}off(){si=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}};u(_p,"EffectScope");let Yu=_p;function iy(n,e=si){e&&e.active&&e.effects.push(n)}u(iy,"recordEffectScope");function sy(){return si}u(sy,"getCurrentScope");let qs;const xp=class xp{constructor(e,t,i,s){this.fn=e,this.trigger=t,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,iy(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,ws();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(ry(t.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),As()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=hs,t=qs;try{return hs=!0,qs=this,this._runnings++,_0(this),this.fn()}finally{x0(this),this._runnings--,qs=t,hs=e}}stop(){this.active&&(_0(this),x0(this),this.onStop&&this.onStop(),this.active=!1)}};u(xp,"ReactiveEffect");let Fo=xp;function ry(n){return n.value}u(ry,"triggerComputed");function _0(n){n._trackId++,n._depsLength=0}u(_0,"preCleanupEffect");function x0(n){if(n.deps.length>n._depsLength){for(let e=n._depsLength;e<n.deps.length;e++)c_(n.deps[e],n);n.deps.length=n._depsLength}}u(x0,"postCleanupEffect");function c_(n,e){const t=n.get(e);t!==void 0&&e._trackId!==t&&(n.delete(e),n.size===0&&n.cleanup())}u(c_,"cleanupDepEffect");let hs=!0,qu=0;const u_=[];function ws(){u_.push(hs),hs=!1}u(ws,"pauseTracking");function As(){const n=u_.pop();hs=n===void 0?!0:n}u(As,"resetTracking");function Nf(){qu++}u(Nf,"pauseScheduling");function Of(){for(qu--;!qu&&Ku.length;)Ku.shift()()}u(Of,"resetScheduling");function h_(n,e,t){if(e.get(n)!==n._trackId){e.set(n,n._trackId);const i=n.deps[n._depsLength];i!==e?(i&&c_(i,n),n.deps[n._depsLength++]=e):n._depsLength++}}u(h_,"trackEffect");const Ku=[];function d_(n,e,t){Nf();for(const i of n.keys()){let s;i._dirtyLevel<e&&(s??(s=n.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=e),i._shouldSchedule&&(s??(s=n.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&Ku.push(i.scheduler)))}Of()}u(d_,"triggerEffects");const f_=u((n,e)=>{const t=new Map;return t.cleanup=n,t.computed=e,t},"createDep"),Zu=new WeakMap,Ks=Symbol(""),Ju=Symbol("");function Rn(n,e,t){if(hs&&qs){let i=Zu.get(n);i||Zu.set(n,i=new Map);let s=i.get(t);s||i.set(t,s=f_(()=>i.delete(t))),h_(qs,s)}}u(Rn,"track");function Oi(n,e,t,i,s,r){const o=Zu.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Xe(n)){const l=Number(i);o.forEach((c,h)=>{(h==="length"||!or(h)&&h>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Xe(n)?Lf(t)&&a.push(o.get("length")):(a.push(o.get(Ks)),Fr(n)&&a.push(o.get(Ju)));break;case"delete":Xe(n)||(a.push(o.get(Ks)),Fr(n)&&a.push(o.get(Ju)));break;case"set":Fr(n)&&a.push(o.get(Ks));break}Nf();for(const l of a)l&&d_(l,4);Of()}u(Oi,"trigger");const oy=Pf("__proto__,__v_isRef,__isVue"),p_=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(or)),y0=ay();function ay(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=pt(this);for(let r=0,o=this.length;r<o;r++)Rn(i,"get",r+"");const s=i[e](...t);return s===-1||s===!1?i[e](...t.map(pt)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){ws(),Nf();const i=pt(this)[e].apply(this,t);return Of(),As(),i}}),n}u(ay,"createArrayInstrumentations");function ly(n){or(n)||(n=String(n));const e=pt(this);return Rn(e,"has",n),e.hasOwnProperty(n)}u(ly,"hasOwnProperty");const yp=class yp{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?yy:v_:r?g_:m_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Xe(e);if(!s){if(o&&ht(y0,t))return Reflect.get(y0,t,i);if(t==="hasOwnProperty")return ly}const a=Reflect.get(e,t,i);return(or(t)?p_.has(t):oy(t))||(s||Rn(e,"get",t),r)?a:Pn(a)?o&&Lf(t)?a:a.value:At(a)?s?__(a):ls(a):a}};u(yp,"BaseReactiveHandler");let _l=yp;const bp=class bp extends _l{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=Bo(r);if(!yl(i)&&!Bo(i)&&(r=pt(r),i=pt(i)),!Xe(e)&&Pn(r)&&!Pn(i))return l?!1:(r.value=i,!0)}const o=Xe(e)&&Lf(t)?Number(t)<e.length:ht(e,t),a=Reflect.set(e,t,i,s);return e===pt(s)&&(o?ms(i,r)&&Oi(e,"set",t,i):Oi(e,"add",t,i)),a}deleteProperty(e,t){const i=ht(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Oi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!or(t)||!p_.has(t))&&Rn(e,"has",t),i}ownKeys(e){return Rn(e,"iterate",Xe(e)?"length":Ks),Reflect.ownKeys(e)}};u(bp,"MutableReactiveHandler");let xl=bp;const Mp=class Mp extends _l{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}};u(Mp,"ReadonlyReactiveHandler");let Qu=Mp;const cy=new xl,uy=new Qu,hy=new xl(!0);const Uf=u(n=>n,"toShallow"),wc=u(n=>Reflect.getPrototypeOf(n),"getProto");function va(n,e,t=!1,i=!1){n=n.__v_raw;const s=pt(n),r=pt(e);t||(ms(e,r)&&Rn(s,"get",e),Rn(s,"get",r));const{has:o}=wc(s),a=i?Uf:t?kf:ko;if(o.call(s,e))return a(n.get(e));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(e)}u(va,"get");function _a(n,e=!1){const t=this.__v_raw,i=pt(t),s=pt(n);return e||(ms(n,s)&&Rn(i,"has",n),Rn(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}u(_a,"has");function xa(n,e=!1){return n=n.__v_raw,!e&&Rn(pt(n),"iterate",Ks),Reflect.get(n,"size",n)}u(xa,"size");function b0(n){n=pt(n);const e=pt(this);return wc(e).has.call(e,n)||(e.add(n),Oi(e,"add",n,n)),this}u(b0,"add");function M0(n,e){e=pt(e);const t=pt(this),{has:i,get:s}=wc(t);let r=i.call(t,n);r||(n=pt(n),r=i.call(t,n));const o=s.call(t,n);return t.set(n,e),r?ms(e,o)&&Oi(t,"set",n,e):Oi(t,"add",n,e),this}u(M0,"set");function S0(n){const e=pt(this),{has:t,get:i}=wc(e);let s=t.call(e,n);s||(n=pt(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&Oi(e,"delete",n,void 0),r}u(S0,"deleteEntry");function E0(){const n=pt(this),e=n.size!==0,t=n.clear();return e&&Oi(n,"clear",void 0,void 0),t}u(E0,"clear");function ya(n,e){return u(function(i,s){const r=this,o=r.__v_raw,a=pt(o),l=e?Uf:n?kf:ko;return!n&&Rn(a,"iterate",Ks),o.forEach((c,h)=>i.call(s,l(c),l(h),r))},"forEach")}u(ya,"createForEach");function ba(n,e,t){return function(...i){const s=this.__v_raw,r=pt(s),o=Fr(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),h=t?Uf:e?kf:ko;return!e&&Rn(r,"iterate",l?Ju:Ks),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[h(d[0]),h(d[1])]:h(d),done:f}},[Symbol.iterator](){return this}}}}u(ba,"createIterableMethod");function Gi(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}u(Gi,"createReadonlyMethod");function dy(){const n={get(r){return va(this,r)},get size(){return xa(this)},has:_a,add:b0,set:M0,delete:S0,clear:E0,forEach:ya(!1,!1)},e={get(r){return va(this,r,!1,!0)},get size(){return xa(this)},has:_a,add:b0,set:M0,delete:S0,clear:E0,forEach:ya(!1,!0)},t={get(r){return va(this,r,!0)},get size(){return xa(this,!0)},has(r){return _a.call(this,r,!0)},add:Gi("add"),set:Gi("set"),delete:Gi("delete"),clear:Gi("clear"),forEach:ya(!0,!1)},i={get(r){return va(this,r,!0,!0)},get size(){return xa(this,!0)},has(r){return _a.call(this,r,!0)},add:Gi("add"),set:Gi("set"),delete:Gi("delete"),clear:Gi("clear"),forEach:ya(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=ba(r,!1,!1),t[r]=ba(r,!0,!1),e[r]=ba(r,!1,!0),i[r]=ba(r,!0,!0)}),[n,t,e,i]}u(dy,"createInstrumentations");const[fy,py,my,gy]=dy();function Ff(n,e){const t=e?n?gy:my:n?py:fy;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ht(t,s)&&s in i?t:i,s,r)}u(Ff,"createInstrumentationGetter");const vy={get:Ff(!1,!1)},_y={get:Ff(!1,!0)},xy={get:Ff(!0,!1)};const m_=new WeakMap,g_=new WeakMap,v_=new WeakMap,yy=new WeakMap;function by(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}u(by,"targetTypeMap");function My(n){return n.__v_skip||!Object.isExtensible(n)?0:by(jx(n))}u(My,"getTargetType");function ls(n){return Bo(n)?n:Bf(n,!1,cy,vy,m_)}u(ls,"reactive");function Sy(n){return Bf(n,!1,hy,_y,g_)}u(Sy,"shallowReactive");function __(n){return Bf(n,!0,uy,xy,v_)}u(__,"readonly");function Bf(n,e,t,i,s){if(!At(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=My(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}u(Bf,"createReactiveObject");function So(n){return Bo(n)?So(n.__v_raw):!!(n&&n.__v_isReactive)}u(So,"isReactive");function Bo(n){return!!(n&&n.__v_isReadonly)}u(Bo,"isReadonly");function yl(n){return!!(n&&n.__v_isShallow)}u(yl,"isShallow");function x_(n){return n?!!n.__v_raw:!1}u(x_,"isProxy");function pt(n){const e=n&&n.__v_raw;return e?pt(e):n}u(pt,"toRaw");function Ey(n){return Object.isExtensible(n)&&r_(n,"__v_skip",!0),n}u(Ey,"markRaw");const ko=u(n=>At(n)?ls(n):n,"toReactive"),kf=u(n=>At(n)?__(n):n,"toReadonly"),Sp=class Sp{constructor(e,t,i,s){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Fo(()=>e(this._value),()=>ll(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=pt(this);return(!e._cacheable||e.effect.dirty)&&ms(e._value,e._value=e.effect.run())&&ll(e,4),y_(e),e.effect._dirtyLevel>=2&&ll(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}};u(Sp,"ComputedRefImpl");let bl=Sp;function Ty(n,e,t=!1){let i,s;const r=Je(n);return r?(i=n,s=jn):(i=n.get,s=n.set),new bl(i,s,r||!s,t)}u(Ty,"computed$1");function y_(n){var e;hs&&qs&&(n=pt(n),h_(qs,(e=n.dep)!=null?e:n.dep=f_(()=>n.dep=void 0,n instanceof bl?n:void 0)))}u(y_,"trackRefValue");function ll(n,e=4,t){n=pt(n);const i=n.dep;i&&d_(i,e)}u(ll,"triggerRefValue");function Pn(n){return!!(n&&n.__v_isRef===!0)}u(Pn,"isRef");function Pt(n){return wy(n,!1)}u(Pt,"ref");function wy(n,e){return Pn(n)?n:new eh(n,e)}u(wy,"createRef");const Ep=class Ep{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:pt(e),this._value=t?e:ko(e)}get value(){return y_(this),this._value}set value(e){const t=this.__v_isShallow||yl(e)||Bo(e);e=t?e:pt(e),ms(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:ko(e),ll(this,4))}};u(Ep,"RefImpl");let eh=Ep;function zo(n){return Pn(n)?n.value:n}u(zo,"unref");const Ay={get:(n,e,t)=>zo(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Pn(s)&&!Pn(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function b_(n){return So(n)?n:new Proxy(n,Ay)}u(b_,"proxyRefs");/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ds(n,e,t,i){try{return i?n(...i):n()}catch(s){Ac(s,e,t)}}u(ds,"callWithErrorHandling");function Yn(n,e,t,i){if(Je(n)){const s=ds(n,e,t,i);return s&&n_(s)&&s.catch(r=>{Ac(r,e,t)}),s}if(Xe(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Yn(n[r],e,t,i));return s}}u(Yn,"callWithAsyncErrorHandling");function Ac(n,e,t,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${t}`;for(;r;){const c=r.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](n,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){ws(),ds(l,null,10,[n,o,a]),As();return}}Cy(n,t,s,i)}u(Ac,"handleError");function Cy(n,e,t,i=!0){console.error(n)}u(Cy,"logError");let Vo=!1,th=!1;const fn=[];let gi=0;const Br=[];let es=null,Ws=0;const M_=Promise.resolve();let zf=null;function Ry(n){const e=zf||M_;return n?e.then(this?n.bind(this):n):e}u(Ry,"nextTick");function Py(n){let e=gi+1,t=fn.length;for(;e<t;){const i=e+t>>>1,s=fn[i],r=Ho(s);r<n||r===n&&s.pre?e=i+1:t=i}return e}u(Py,"findInsertionIndex");function Vf(n){(!fn.length||!fn.includes(n,Vo&&n.allowRecurse?gi+1:gi))&&(n.id==null?fn.push(n):fn.splice(Py(n.id),0,n),S_())}u(Vf,"queueJob");function S_(){!Vo&&!th&&(th=!0,zf=M_.then(T_))}u(S_,"queueFlush");function Dy(n){const e=fn.indexOf(n);e>gi&&fn.splice(e,1)}u(Dy,"invalidateJob");function Iy(n){Xe(n)?Br.push(...n):(!es||!es.includes(n,n.allowRecurse?Ws+1:Ws))&&Br.push(n),S_()}u(Iy,"queuePostFlushCb");function T0(n,e,t=Vo?gi+1:0){for(;t<fn.length;t++){const i=fn[t];if(i&&i.pre){if(n&&i.id!==n.uid)continue;fn.splice(t,1),t--,i()}}}u(T0,"flushPreFlushCbs");function E_(n){if(Br.length){const e=[...new Set(Br)].sort((t,i)=>Ho(t)-Ho(i));if(Br.length=0,es){es.push(...e);return}for(es=e,Ws=0;Ws<es.length;Ws++)es[Ws]();es=null,Ws=0}}u(E_,"flushPostFlushCbs");const Ho=u(n=>n.id==null?1/0:n.id,"getId"),Ly=u((n,e)=>{const t=Ho(n)-Ho(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t},"comparator");function T_(n){th=!1,Vo=!0,fn.sort(Ly);try{for(gi=0;gi<fn.length;gi++){const e=fn[gi];e&&e.active!==!1&&ds(e,null,14)}}finally{gi=0,fn.length=0,E_(),Vo=!1,zf=null,(fn.length||Br.length)&&T_()}}u(T_,"flushJobs");function Ny(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||yt;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:f}=i[h]||yt;f&&(s=t.map(p=>Ht(p)?p.trim():p)),d&&(s=t.map(qx))}let a,l=i[a=Xc(e)]||i[a=Xc(xi(e))];!l&&r&&(l=i[a=Xc(ar(e))]),l&&Yn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Yn(c,n,6,s)}}u(Ny,"emit");function w_(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Je(n)){const l=u(c=>{const h=w_(c,e,!0);h&&(a=!0,Vt(o,h))},"extendEmits");!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(At(n)&&i.set(n,null),null):(Xe(r)?r.forEach(l=>o[l]=null):Vt(o,r),At(n)&&i.set(n,o),o)}u(w_,"normalizeEmitsOptions");function Cc(n,e){return!n||!Mc(e)?!1:(e=e.slice(2).replace(/Once$/,""),ht(n,e[0].toLowerCase()+e.slice(1))||ht(n,ar(e))||ht(n,e))}u(Cc,"isEmitListener");let Xt=null,Rc=null;function Ml(n){const e=Xt;return Xt=n,Rc=n&&n.type.__scopeId||null,e}u(Ml,"setCurrentRenderingInstance");function Zn(n){Rc=n}u(Zn,"pushScopeId");function Jn(){Rc=null}u(Jn,"popScopeId");function kr(n,e=Xt,t){if(!e||n._n)return n;const i=u((...s)=>{i._d&&F0(-1);const r=Ml(e);let o;try{o=n(...s)}finally{Ml(r),i._d&&F0(1)}return o},"renderFnWithContext");return i._n=!0,i._c=!0,i._d=!0,i}u(kr,"withCtx");function Kc(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:h,props:d,data:f,setupState:p,ctx:v,inheritAttrs:_}=n,g=Ml(n);let m,A;try{if(t.shapeFlag&4){const w=s||i,B=w;m=mi(c.call(B,w,h,d,p,f,v)),A=a}else{const w=e;m=mi(w.length>1?w(d,{attrs:a,slots:o,emit:l}):w(d,null)),A=e.props?a:Oy(a)}}catch(w){Co.length=0,Ac(w,n,1),m=Ue(Bn)}let S=m;if(A&&_!==!1){const w=Object.keys(A),{shapeFlag:B}=S;w.length&&B&7&&(r&&w.some(Df)&&(A=Uy(A,r)),S=gs(S,A,!1,!0))}return t.dirs&&(S=gs(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&(S.transition=t.transition),m=S,Ml(g),m}u(Kc,"renderComponentRoot");const Oy=u(n=>{let e;for(const t in n)(t==="class"||t==="style"||Mc(t))&&((e||(e={}))[t]=n[t]);return e},"getFunctionalFallthrough"),Uy=u((n,e)=>{const t={};for(const i in n)(!Df(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t},"filterModelListeners");function Fy(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?w0(i,o,c):!!o;if(l&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const f=h[d];if(o[f]!==i[f]&&!Cc(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?w0(i,o,c):!0:!!o;return!1}u(Fy,"shouldUpdateComponent");function w0(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!Cc(t,r))return!0}return!1}u(w0,"hasPropsChanged");function By({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}u(By,"updateHOCHostEl");const ky="components";function Ut(n,e){return Vy(ky,n,!0,e)||n}u(Ut,"resolveComponent");const zy=Symbol.for("v-ndc");function Vy(n,e,t=!0,i=!1){const s=Xt||rn;if(s){const r=s.type;{const a=Ob(r,!1);if(a&&(a===e||a===xi(e)||a===Tc(xi(e))))return r}const o=A0(s[n]||r[n],e)||A0(s.appContext[n],e);return!o&&i?r:o}}u(Vy,"resolveAsset");function A0(n,e){return n&&(n[e]||n[xi(e)]||n[Tc(xi(e))])}u(A0,"resolve");const Hy=u(n=>n.__isSuspense,"isSuspense");function Gy(n,e){e&&e.pendingBranch?Xe(n)?e.effects.push(...n):e.effects.push(n):Iy(n)}u(Gy,"queueEffectWithSuspense");const Wy=Symbol.for("v-scx"),$y=u(()=>Ui(Wy),"useSSRContext");function jy(n,e){return Hf(n,null,{flush:"post"})}u(jy,"watchPostEffect");const Ma={};function zr(n,e,t){return Hf(n,e,t)}u(zr,"watch");function Hf(n,e,{immediate:t,deep:i,flush:s,once:r,onTrack:o,onTrigger:a}=yt){if(e&&r){const P=e;e=u((...R)=>{P(...R),B()},"cb")}const l=rn,c=u(P=>i===!0?P:Ys(P,i===!1?1:void 0),"reactiveGetter");let h,d=!1,f=!1;if(Pn(n)?(h=u(()=>n.value,"getter"),d=yl(n)):So(n)?(h=u(()=>c(n),"getter"),d=!0):Xe(n)?(f=!0,d=n.some(P=>So(P)||yl(P)),h=u(()=>n.map(P=>{if(Pn(P))return P.value;if(So(P))return c(P);if(Je(P))return ds(P,l,2)}),"getter")):Je(n)?e?h=u(()=>ds(n,l,2),"getter"):h=u(()=>(p&&p(),Yn(n,l,3,[v])),"getter"):h=jn,e&&i){const P=h;h=u(()=>Ys(P()),"getter")}let p,v=u(P=>{p=S.onStop=()=>{ds(P,l,4),p=S.onStop=void 0}},"onCleanup"),_;if(Nc)if(v=jn,e?t&&Yn(e,l,3,[h(),f?[]:void 0,v]):h(),s==="sync"){const P=$y();_=P.__watcherHandles||(P.__watcherHandles=[])}else return jn;let g=f?new Array(n.length).fill(Ma):Ma;const m=u(()=>{if(!(!S.active||!S.dirty))if(e){const P=S.run();(i||d||(f?P.some((R,O)=>ms(R,g[O])):ms(P,g)))&&(p&&p(),Yn(e,l,3,[P,g===Ma?void 0:f&&g[0]===Ma?[]:g,v]),g=P)}else S.run()},"job");m.allowRecurse=!!e;let A;s==="sync"?A=m:s==="post"?A=u(()=>Sn(m,l&&l.suspense),"scheduler"):(m.pre=!0,l&&(m.id=l.uid),A=u(()=>Vf(m),"scheduler"));const S=new Fo(h,jn,A),w=sy(),B=u(()=>{S.stop(),w&&If(w.effects,S)},"unwatch");return e?t?m():g=S.run():s==="post"?Sn(S.run.bind(S),l&&l.suspense):S.run(),_&&_.push(B),B}u(Hf,"doWatch");function Xy(n,e,t){const i=this.proxy,s=Ht(n)?n.includes(".")?A_(i,n):()=>i[n]:n.bind(i,i);let r;Je(e)?r=e:(r=e.handler,t=e);const o=fa(this),a=Hf(s,r.bind(i),t);return o(),a}u(Xy,"instanceWatch");function A_(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}u(A_,"createPathGetter");function Ys(n,e=1/0,t){if(e<=0||!At(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Pn(n))Ys(n.value,e,t);else if(Xe(n))for(let i=0;i<n.length;i++)Ys(n[i],e,t);else if(t_(n)||Fr(n))n.forEach(i=>{Ys(i,e,t)});else if(s_(n))for(const i in n)Ys(n[i],e,t);return n}u(Ys,"traverse");function Gn(n,e){if(Xt===null)return n;const t=Oc(Xt)||Xt.proxy,i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=yt]=e[s];r&&(Je(r)&&(r={mounted:r,updated:r}),r.deep&&Ys(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}u(Gn,"withDirectives");function Ds(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(ws(),Yn(l,t,8,[n.el,a,n,e]),As())}}u(Ds,"invokeDirectiveHook");const ts=Symbol("_leaveCb"),Sa=Symbol("_enterCb");function Yy(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ic(()=>{n.isMounted=!0}),L_(()=>{n.isUnmounting=!0}),n}u(Yy,"useTransitionState");const zn=[Function,Array],C_={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:zn,onEnter:zn,onAfterEnter:zn,onEnterCancelled:zn,onBeforeLeave:zn,onLeave:zn,onAfterLeave:zn,onLeaveCancelled:zn,onBeforeAppear:zn,onAppear:zn,onAfterAppear:zn,onAppearCancelled:zn},qy={name:"BaseTransition",props:C_,setup(n,{slots:e}){const t=Xf(),i=Yy();return()=>{const s=e.default&&P_(e.default(),!0);if(!s||!s.length)return;let r=s[0];if(s.length>1){for(const f of s)if(f.type!==Bn){r=f;break}}const o=pt(n),{mode:a}=o;if(i.isLeaving)return Zc(r);const l=C0(r);if(!l)return Zc(r);const c=nh(l,o,i,t);ih(l,c);const h=t.subTree,d=h&&C0(h);if(d&&d.type!==Bn&&!$s(l,d)){const f=nh(d,o,i,t);if(ih(d,f),a==="out-in"&&l.type!==Bn)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.update.active!==!1&&(t.effect.dirty=!0,t.update())},Zc(r);a==="in-out"&&l.type!==Bn&&(f.delayLeave=(p,v,_)=>{const g=R_(i,d);g[String(d.key)]=d,p[ts]=()=>{v(),p[ts]=void 0,delete c.delayedLeave},c.delayedLeave=_})}return r}}},Ky=qy;function R_(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}u(R_,"getLeavingNodesForType");function nh(n,e,t,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:h,onBeforeLeave:d,onLeave:f,onAfterLeave:p,onLeaveCancelled:v,onBeforeAppear:_,onAppear:g,onAfterAppear:m,onAppearCancelled:A}=e,S=String(n.key),w=R_(t,n),B=u((O,re)=>{O&&Yn(O,i,9,re)},"callHook2"),P=u((O,re)=>{const b=re[1];B(O,re),Xe(O)?O.every(T=>T.length<=1)&&b():O.length<=1&&b()},"callAsyncHook"),R={mode:r,persisted:o,beforeEnter(O){let re=a;if(!t.isMounted)if(s)re=_||a;else return;O[ts]&&O[ts](!0);const b=w[S];b&&$s(n,b)&&b.el[ts]&&b.el[ts](),B(re,[O])},enter(O){let re=l,b=c,T=h;if(!t.isMounted)if(s)re=g||l,b=m||c,T=A||h;else return;let z=!1;const $=O[Sa]=ie=>{z||(z=!0,ie?B(T,[O]):B(b,[O]),R.delayedLeave&&R.delayedLeave(),O[Sa]=void 0)};re?P(re,[O,$]):$()},leave(O,re){const b=String(n.key);if(O[Sa]&&O[Sa](!0),t.isUnmounting)return re();B(d,[O]);let T=!1;const z=O[ts]=$=>{T||(T=!0,re(),$?B(v,[O]):B(p,[O]),O[ts]=void 0,w[b]===n&&delete w[b])};w[b]=n,f?P(f,[O,z]):z()},clone(O){return nh(O,e,t,i)}};return R}u(nh,"resolveTransitionHooks");function Zc(n){if(Pc(n))return n=gs(n),n.children=null,n}u(Zc,"emptyPlaceholder");function C0(n){if(!Pc(n))return n;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Je(t.default))return t.default()}}u(C0,"getKeepAliveChild");function ih(n,e){n.shapeFlag&6&&n.component?ih(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}u(ih,"setTransitionHooks");function P_(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===Lt?(o.patchFlag&128&&s++,i=i.concat(P_(o.children,e,a))):(e||o.type!==Bn)&&i.push(a!=null?gs(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}u(P_,"getTransitionRawChildren");/*! #__NO_SIDE_EFFECTS__ */function Mt(n,e){return Je(n)?Vt({name:n.name},e,{setup:n}):n}u(Mt,"defineComponent");const Eo=u(n=>!!n.type.__asyncLoader,"isAsyncWrapper"),Pc=u(n=>n.type.__isKeepAlive,"isKeepAlive");function Zy(n,e){D_(n,"a",e)}u(Zy,"onActivated");function Jy(n,e){D_(n,"da",e)}u(Jy,"onDeactivated");function D_(n,e,t=rn){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Dc(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Pc(s.parent.vnode)&&Qy(i,e,t,s),s=s.parent}}u(D_,"registerKeepAliveHook");function Qy(n,e,t,i){const s=Dc(e,n,i,!0);Gf(()=>{If(i[e],s)},t)}u(Qy,"injectToKeepAliveRoot");function Dc(n,e,t=rn,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;ws();const a=fa(t),l=Yn(e,t,n,o);return a(),As(),l});return i?s.unshift(r):s.push(r),r}}u(Dc,"injectHook");const Vi=u(n=>(e,t=rn)=>(!Nc||n==="sp")&&Dc(n,(...i)=>e(...i),t),"createHook"),I_=Vi("bm"),Ic=Vi("m"),eb=Vi("bu"),tb=Vi("u"),L_=Vi("bum"),Gf=Vi("um"),nb=Vi("sp"),ib=Vi("rtg"),sb=Vi("rtc");function rb(n,e=rn){Dc("ec",n,e)}u(rb,"onErrorCaptured");function Go(n,e,t,i){let s;const r=t;if(Xe(n)||Ht(n)){s=new Array(n.length);for(let o=0,a=n.length;o<a;o++)s[o]=e(n[o],o,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r)}else if(At(n))if(n[Symbol.iterator])s=Array.from(n,(o,a)=>e(o,a,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(n[c],c,a,r)}}else s=[];return s}u(Go,"renderList");function hn(n,e,t={},i,s){if(Xt.isCE||Xt.parent&&Eo(Xt.parent)&&Xt.parent.isCE)return e!=="default"&&(t.name=e),Ue("slot",t,i&&i());let r=n[e];r&&r._c&&(r._d=!1),he();const o=r&&N_(r(t)),a=ct(Lt,{key:t.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&n._===1?64:-2);return a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}u(hn,"renderSlot");function N_(n){return n.some(e=>El(e)?!(e.type===Bn||e.type===Lt&&!N_(e.children)):!0)?n:null}u(N_,"ensureValidVNode");const sh=u(n=>n?q_(n)?Oc(n)||n.proxy:sh(n.parent):null,"getPublicInstance"),To=Vt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>sh(n.parent),$root:n=>sh(n.root),$emit:n=>n.emit,$options:n=>Wf(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,Vf(n.update)}),$nextTick:n=>n.n||(n.n=Ry.bind(n.proxy)),$watch:n=>Xy.bind(n)}),Jc=u((n,e)=>n!==yt&&!n.__isScriptSetup&&ht(n,e),"hasSetupBinding"),ob={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Jc(i,e))return o[e]=1,i[e];if(s!==yt&&ht(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&ht(c,e))return o[e]=3,r[e];if(t!==yt&&ht(t,e))return o[e]=4,t[e];rh&&(o[e]=0)}}const h=To[e];let d,f;if(h)return e==="$attrs"&&Rn(n.attrs,"get",""),h(n);if((d=a.__cssModules)&&(d=d[e]))return d;if(t!==yt&&ht(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,ht(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Jc(s,e)?(s[e]=t,!0):i!==yt&&ht(i,e)?(i[e]=t,!0):ht(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==yt&&ht(n,o)||Jc(e,o)||(a=r[0])&&ht(a,o)||ht(i,o)||ht(To,o)||ht(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ht(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function R0(n){return Xe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}u(R0,"normalizePropsOrEmits");let rh=!0;function ab(n){const e=Wf(n),t=n.proxy,i=n.ctx;rh=!1,e.beforeCreate&&P0(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:h,beforeMount:d,mounted:f,beforeUpdate:p,updated:v,activated:_,deactivated:g,beforeDestroy:m,beforeUnmount:A,destroyed:S,unmounted:w,render:B,renderTracked:P,renderTriggered:R,errorCaptured:O,serverPrefetch:re,expose:b,inheritAttrs:T,components:z,directives:$,filters:ie}=e;if(c&&lb(c,i,null),o)for(const se in o){const X=o[se];Je(X)&&(i[se]=X.bind(t))}if(s){const se=s.call(t,t);At(se)&&(n.data=ls(se))}if(rh=!0,r)for(const se in r){const X=r[se],Te=Je(X)?X.bind(t,t):Je(X.get)?X.get.bind(t,t):jn,we=!Je(X)&&Je(X.set)?X.set.bind(t):jn,Ae=Z_({get:Te,set:we});Object.defineProperty(i,se,{enumerable:!0,configurable:!0,get:()=>Ae.value,set:Ye=>Ae.value=Ye})}if(a)for(const se in a)O_(a[se],i,t,se);if(l){const se=Je(l)?l.call(t):l;Reflect.ownKeys(se).forEach(X=>{Dr(X,se[X])})}h&&P0(h,n,"c");function Z(se,X){Xe(X)?X.forEach(Te=>se(Te.bind(t))):X&&se(X.bind(t))}if(u(Z,"registerLifecycleHook"),Z(I_,d),Z(Ic,f),Z(eb,p),Z(tb,v),Z(Zy,_),Z(Jy,g),Z(rb,O),Z(sb,P),Z(ib,R),Z(L_,A),Z(Gf,w),Z(nb,re),Xe(b))if(b.length){const se=n.exposed||(n.exposed={});b.forEach(X=>{Object.defineProperty(se,X,{get:()=>t[X],set:Te=>t[X]=Te})})}else n.exposed||(n.exposed={});B&&n.render===jn&&(n.render=B),T!=null&&(n.inheritAttrs=T),z&&(n.components=z),$&&(n.directives=$)}u(ab,"applyOptions");function lb(n,e,t=jn){Xe(n)&&(n=oh(n));for(const i in n){const s=n[i];let r;At(s)?"default"in s?r=Ui(s.from||i,s.default,!0):r=Ui(s.from||i):r=Ui(s),Pn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}u(lb,"resolveInjections");function P0(n,e,t){Yn(Xe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}u(P0,"callHook$1");function O_(n,e,t,i){const s=i.includes(".")?A_(t,i):()=>t[i];if(Ht(n)){const r=e[n];Je(r)&&zr(s,r)}else if(Je(n))zr(s,n.bind(t));else if(At(n))if(Xe(n))n.forEach(r=>O_(r,e,t,i));else{const r=Je(n.handler)?n.handler.bind(t):e[n.handler];Je(r)&&zr(s,r,n)}}u(O_,"createWatcher");function Wf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Sl(l,c,o,!0)),Sl(l,e,o)),At(e)&&r.set(e,l),l}u(Wf,"resolveMergedOptions");function Sl(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Sl(n,r,t,!0),s&&s.forEach(o=>Sl(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=cb[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}u(Sl,"mergeOptions");const cb={data:D0,props:I0,emits:I0,methods:xo,computed:xo,beforeCreate:mn,created:mn,beforeMount:mn,mounted:mn,beforeUpdate:mn,updated:mn,beforeDestroy:mn,beforeUnmount:mn,destroyed:mn,unmounted:mn,activated:mn,deactivated:mn,errorCaptured:mn,serverPrefetch:mn,components:xo,directives:xo,watch:hb,provide:D0,inject:ub};function D0(n,e){return e?n?u(function(){return Vt(Je(n)?n.call(this,this):n,Je(e)?e.call(this,this):e)},"mergedDataFn"):e:n}u(D0,"mergeDataFn");function ub(n,e){return xo(oh(n),oh(e))}u(ub,"mergeInject");function oh(n){if(Xe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}u(oh,"normalizeInject");function mn(n,e){return n?[...new Set([].concat(n,e))]:e}u(mn,"mergeAsArray");function xo(n,e){return n?Vt(Object.create(null),n,e):e}u(xo,"mergeObjectOptions");function I0(n,e){return n?Xe(n)&&Xe(e)?[...new Set([...n,...e])]:Vt(Object.create(null),R0(n),R0(e??{})):e}u(I0,"mergeEmitsOrPropsOptions");function hb(n,e){if(!n)return e;if(!e)return n;const t=Vt(Object.create(null),n);for(const i in e)t[i]=mn(n[i],e[i]);return t}u(hb,"mergeWatchOptions");function U_(){return{app:null,config:{isNativeTag:Wx,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}u(U_,"createAppContext");let db=0;function fb(n,e){return u(function(i,s=null){Je(i)||(i=Vt({},i)),s!=null&&!At(s)&&(s=null);const r=U_(),o=new WeakSet;let a=!1;const l=r.app={_uid:db++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Fb,get config(){return r.config},set config(c){},use(c,...h){return o.has(c)||(c&&Je(c.install)?(o.add(c),c.install(l,...h)):Je(c)&&(o.add(c),c(l,...h))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,h){return h?(r.components[c]=h,l):r.components[c]},directive(c,h){return h?(r.directives[c]=h,l):r.directives[c]},mount(c,h,d){if(!a){const f=Ue(i,s);return f.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),h&&e?e(f,c):n(f,c,d),a=!0,l._container=c,c.__vue_app__=l,Oc(f.component)||f.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,h){return r.provides[c]=h,l},runWithContext(c){const h=wo;wo=l;try{return c()}finally{wo=h}}};return l},"createApp")}u(fb,"createAppAPI");let wo=null;function Dr(n,e){if(rn){let t=rn.provides;const i=rn.parent&&rn.parent.provides;i===t&&(t=rn.provides=Object.create(i)),t[n]=e}}u(Dr,"provide");function Ui(n,e,t=!1){const i=rn||Xt;if(i||wo){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:wo._context.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Je(e)?e.call(i&&i.proxy):e}}u(Ui,"inject");const F_={},B_=u(()=>Object.create(F_),"createInternalObject"),k_=u(n=>Object.getPrototypeOf(n)===F_,"isInternalObject");function pb(n,e,t,i=!1){const s={},r=B_();n.propsDefaults=Object.create(null),z_(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:Sy(s):n.type.props?n.props=s:n.props=r,n.attrs=r}u(pb,"initProps");function mb(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=pt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let d=0;d<h.length;d++){let f=h[d];if(Cc(n.emitsOptions,f))continue;const p=e[f];if(l)if(ht(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const v=xi(f);s[v]=ah(l,a,v,p,n,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{z_(n,e,s,r)&&(c=!0);let h;for(const d in a)(!e||!ht(e,d)&&((h=ar(d))===d||!ht(e,h)))&&(l?t&&(t[d]!==void 0||t[h]!==void 0)&&(s[d]=ah(l,a,d,void 0,n,!0)):delete s[d]);if(r!==a)for(const d in r)(!e||!ht(e,d))&&(delete r[d],c=!0)}c&&Oi(n.attrs,"set","")}u(mb,"updateProps");function z_(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Mo(l))continue;const c=e[l];let h;s&&ht(s,h=xi(l))?!r||!r.includes(h)?t[h]=c:(a||(a={}))[h]=c:Cc(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=pt(t),c=a||yt;for(let h=0;h<r.length;h++){const d=r[h];t[d]=ah(s,l,d,c[d],n,!ht(c,d))}}return o}u(z_,"setFullProps");function ah(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=ht(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Je(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const h=fa(s);i=c[t]=l.call(null,e),h()}}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ar(t))&&(i=!0))}return i}u(ah,"resolvePropValue");function V_(n,e,t=!1){const i=e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Je(n)){const h=u(d=>{l=!0;const[f,p]=V_(d,e,!0);Vt(o,f),p&&a.push(...p)},"extendProps");!t&&e.mixins.length&&e.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!r&&!l)return At(n)&&i.set(n,Ur),Ur;if(Xe(r))for(let h=0;h<r.length;h++){const d=xi(r[h]);L0(d)&&(o[d]=yt)}else if(r)for(const h in r){const d=xi(h);if(L0(d)){const f=r[h],p=o[d]=Xe(f)||Je(f)?{type:f}:Vt({},f);if(p){const v=U0(Boolean,p.type),_=U0(String,p.type);p[0]=v>-1,p[1]=_<0||v<_,(v>-1||ht(p,"default"))&&a.push(d)}}}const c=[o,a];return At(n)&&i.set(n,c),c}u(V_,"normalizePropsOptions");function L0(n){return n[0]!=="$"&&!Mo(n)}u(L0,"validatePropName");function N0(n){return n===null?"null":typeof n=="function"?n.name||"":typeof n=="object"&&n.constructor&&n.constructor.name||""}u(N0,"getType");function O0(n,e){return N0(n)===N0(e)}u(O0,"isSameType");function U0(n,e){return Xe(e)?e.findIndex(t=>O0(t,n)):Je(e)&&O0(e,n)?0:-1}u(U0,"getTypeIndex");const H_=u(n=>n[0]==="_"||n==="$stable","isInternalKey"),$f=u(n=>Xe(n)?n.map(mi):[mi(n)],"normalizeSlotValue"),gb=u((n,e,t)=>{if(e._n)return e;const i=kr((...s)=>$f(e(...s)),t);return i._c=!1,i},"normalizeSlot"),G_=u((n,e,t)=>{const i=n._ctx;for(const s in n){if(H_(s))continue;const r=n[s];if(Je(r))e[s]=gb(s,r,i);else if(r!=null){const o=$f(r);e[s]=()=>o}}},"normalizeObjectSlots"),W_=u((n,e)=>{const t=$f(e);n.slots.default=()=>t},"normalizeVNodeSlots"),vb=u((n,e)=>{const t=n.slots=B_();if(n.vnode.shapeFlag&32){const i=e._;i?(Vt(t,e),r_(t,"_",i,!0)):G_(e,t)}else e&&W_(n,e)},"initSlots"),_b=u((n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=yt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(Vt(s,e),!t&&a===1&&delete s._):(r=!e.$stable,G_(e,s)),o=e}else e&&(W_(n,e),o={default:1});if(r)for(const a in s)!H_(a)&&o[a]==null&&delete s[a]},"updateSlots");function lh(n,e,t,i,s=!1){if(Xe(n)){n.forEach((f,p)=>lh(f,e&&(Xe(e)?e[p]:e),t,i,s));return}if(Eo(i)&&!s)return;const r=i.shapeFlag&4?Oc(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,h=a.refs===yt?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(Ht(c)?(h[c]=null,ht(d,c)&&(d[c]=null)):Pn(c)&&(c.value=null)),Je(l))ds(l,a,12,[o,h]);else{const f=Ht(l),p=Pn(l);if(f||p){const v=u(()=>{if(n.f){const _=f?ht(d,l)?d[l]:h[l]:l.value;s?Xe(_)&&If(_,r):Xe(_)?_.includes(r)||_.push(r):f?(h[l]=[r],ht(d,l)&&(d[l]=h[l])):(l.value=[r],n.k&&(h[n.k]=l.value))}else f?(h[l]=o,ht(d,l)&&(d[l]=o)):p&&(l.value=o,n.k&&(h[n.k]=o))},"doSet");o?(v.id=-1,Sn(v,t)):v()}}}u(lh,"setRef");const Sn=Gy;function xb(n){return yb(n)}u(xb,"createRenderer");function yb(n,e){const t=o_();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:h,parentNode:d,nextSibling:f,setScopeId:p=jn,insertStaticContent:v}=n,_=u((x,k,Y,ne=null,q=null,oe=null,ae=void 0,E=null,y=!!k.dynamicChildren)=>{if(x===k)return;x&&!$s(x,k)&&(ne=Me(x),Ye(x,q,oe,!0),x=null),k.patchFlag===-2&&(y=!1,k.dynamicChildren=null);const{type:I,ref:H,shapeFlag:J}=k;switch(I){case Lc:g(x,k,Y,ne);break;case Bn:m(x,k,Y,ne);break;case Ao:x==null&&A(k,Y,ne,ae);break;case Lt:z(x,k,Y,ne,q,oe,ae,E,y);break;default:J&1?B(x,k,Y,ne,q,oe,ae,E,y):J&6?$(x,k,Y,ne,q,oe,ae,E,y):(J&64||J&128)&&I.process(x,k,Y,ne,q,oe,ae,E,y,et)}H!=null&&q&&lh(H,x&&x.ref,oe,k||x,!k)},"patch"),g=u((x,k,Y,ne)=>{if(x==null)i(k.el=a(k.children),Y,ne);else{const q=k.el=x.el;k.children!==x.children&&c(q,k.children)}},"processText"),m=u((x,k,Y,ne)=>{x==null?i(k.el=l(k.children||""),Y,ne):k.el=x.el},"processCommentNode"),A=u((x,k,Y,ne)=>{[x.el,x.anchor]=v(x.children,k,Y,ne,x.el,x.anchor)},"mountStaticNode"),S=u(({el:x,anchor:k},Y,ne)=>{let q;for(;x&&x!==k;)q=f(x),i(x,Y,ne),x=q;i(k,Y,ne)},"moveStaticNode"),w=u(({el:x,anchor:k})=>{let Y;for(;x&&x!==k;)Y=f(x),s(x),x=Y;s(k)},"removeStaticNode"),B=u((x,k,Y,ne,q,oe,ae,E,y)=>{k.type==="svg"?ae="svg":k.type==="math"&&(ae="mathml"),x==null?P(k,Y,ne,q,oe,ae,E,y):re(x,k,q,oe,ae,E,y)},"processElement"),P=u((x,k,Y,ne,q,oe,ae,E)=>{let y,I;const{props:H,shapeFlag:J,transition:j,dirs:pe}=x;if(y=x.el=o(x.type,oe,H&&H.is,H),J&8?h(y,x.children):J&16&&O(x.children,y,null,ne,q,Qc(x,oe),ae,E),pe&&Ds(x,null,ne,"created"),R(y,x,x.scopeId,ae,ne),H){for(const ge in H)ge!=="value"&&!Mo(ge)&&r(y,ge,null,H[ge],oe,x.children,ne,q,ye);"value"in H&&r(y,"value",null,H.value,oe),(I=H.onVnodeBeforeMount)&&hi(I,ne,x)}pe&&Ds(x,null,ne,"beforeMount");const fe=bb(q,j);fe&&j.beforeEnter(y),i(y,k,Y),((I=H&&H.onVnodeMounted)||fe||pe)&&Sn(()=>{I&&hi(I,ne,x),fe&&j.enter(y),pe&&Ds(x,null,ne,"mounted")},q)},"mountElement"),R=u((x,k,Y,ne,q)=>{if(Y&&p(x,Y),ne)for(let oe=0;oe<ne.length;oe++)p(x,ne[oe]);if(q){let oe=q.subTree;if(k===oe){const ae=q.vnode;R(x,ae,ae.scopeId,ae.slotScopeIds,q.parent)}}},"setScopeId"),O=u((x,k,Y,ne,q,oe,ae,E,y=0)=>{for(let I=y;I<x.length;I++){const H=x[I]=E?ns(x[I]):mi(x[I]);_(null,H,k,Y,ne,q,oe,ae,E)}},"mountChildren"),re=u((x,k,Y,ne,q,oe,ae)=>{const E=k.el=x.el;let{patchFlag:y,dynamicChildren:I,dirs:H}=k;y|=x.patchFlag&16;const J=x.props||yt,j=k.props||yt;let pe;if(Y&&Is(Y,!1),(pe=j.onVnodeBeforeUpdate)&&hi(pe,Y,k,x),H&&Ds(k,x,Y,"beforeUpdate"),Y&&Is(Y,!0),I?b(x.dynamicChildren,I,E,Y,ne,Qc(k,q),oe):ae||X(x,k,E,null,Y,ne,Qc(k,q),oe,!1),y>0){if(y&16)T(E,k,J,j,Y,ne,q);else if(y&2&&J.class!==j.class&&r(E,"class",null,j.class,q),y&4&&r(E,"style",J.style,j.style,q),y&8){const fe=k.dynamicProps;for(let ge=0;ge<fe.length;ge++){const Fe=fe[ge],me=J[Fe],be=j[Fe];(be!==me||Fe==="value")&&r(E,Fe,me,be,q,x.children,Y,ne,ye)}}y&1&&x.children!==k.children&&h(E,k.children)}else!ae&&I==null&&T(E,k,J,j,Y,ne,q);((pe=j.onVnodeUpdated)||H)&&Sn(()=>{pe&&hi(pe,Y,k,x),H&&Ds(k,x,Y,"updated")},ne)},"patchElement"),b=u((x,k,Y,ne,q,oe,ae)=>{for(let E=0;E<k.length;E++){const y=x[E],I=k[E],H=y.el&&(y.type===Lt||!$s(y,I)||y.shapeFlag&70)?d(y.el):Y;_(y,I,H,null,ne,q,oe,ae,!0)}},"patchBlockChildren"),T=u((x,k,Y,ne,q,oe,ae)=>{if(Y!==ne){if(Y!==yt)for(const E in Y)!Mo(E)&&!(E in ne)&&r(x,E,Y[E],null,ae,k.children,q,oe,ye);for(const E in ne){if(Mo(E))continue;const y=ne[E],I=Y[E];y!==I&&E!=="value"&&r(x,E,I,y,ae,k.children,q,oe,ye)}"value"in ne&&r(x,"value",Y.value,ne.value,ae)}},"patchProps"),z=u((x,k,Y,ne,q,oe,ae,E,y)=>{const I=k.el=x?x.el:a(""),H=k.anchor=x?x.anchor:a("");let{patchFlag:J,dynamicChildren:j,slotScopeIds:pe}=k;pe&&(E=E?E.concat(pe):pe),x==null?(i(I,Y,ne),i(H,Y,ne),O(k.children||[],Y,H,q,oe,ae,E,y)):J>0&&J&64&&j&&x.dynamicChildren?(b(x.dynamicChildren,j,Y,q,oe,ae,E),(k.key!=null||q&&k===q.subTree)&&$_(x,k,!0)):X(x,k,Y,H,q,oe,ae,E,y)},"processFragment"),$=u((x,k,Y,ne,q,oe,ae,E,y)=>{k.slotScopeIds=E,x==null?k.shapeFlag&512?q.ctx.activate(k,Y,ne,ae,y):ie(k,Y,ne,q,oe,ae,y):ce(x,k,y)},"processComponent"),ie=u((x,k,Y,ne,q,oe,ae)=>{const E=x.component=Pb(x,ne,q);if(Pc(x)&&(E.ctx.renderer=et),Db(E),E.asyncDep){if(q&&q.registerDep(E,Z),!x.el){const y=E.subTree=Ue(Bn);m(null,y,k,Y)}}else Z(E,x,k,Y,q,oe,ae)},"mountComponent"),ce=u((x,k,Y)=>{const ne=k.component=x.component;if(Fy(x,k,Y))if(ne.asyncDep&&!ne.asyncResolved){se(ne,k,Y);return}else ne.next=k,Dy(ne.update),ne.effect.dirty=!0,ne.update();else k.el=x.el,ne.vnode=k},"updateComponent"),Z=u((x,k,Y,ne,q,oe,ae)=>{const E=u(()=>{if(x.isMounted){let{next:H,bu:J,u:j,parent:pe,vnode:fe}=x;{const Ge=j_(x);if(Ge){H&&(H.el=fe.el,se(x,H,ae)),Ge.asyncDep.then(()=>{x.isUnmounted||E()});return}}let ge=H,Fe;Is(x,!1),H?(H.el=fe.el,se(x,H,ae)):H=fe,J&&Yc(J),(Fe=H.props&&H.props.onVnodeBeforeUpdate)&&hi(Fe,pe,H,fe),Is(x,!0);const me=Kc(x),be=x.subTree;x.subTree=me,_(be,me,d(be.el),Me(be),x,q,oe),H.el=me.el,ge===null&&By(x,me.el),j&&Sn(j,q),(Fe=H.props&&H.props.onVnodeUpdated)&&Sn(()=>hi(Fe,pe,H,fe),q)}else{let H;const{el:J,props:j}=k,{bm:pe,m:fe,parent:ge}=x,Fe=Eo(k);if(Is(x,!1),pe&&Yc(pe),!Fe&&(H=j&&j.onVnodeBeforeMount)&&hi(H,ge,k),Is(x,!0),J&&rt){const me=u(()=>{x.subTree=Kc(x),rt(J,x.subTree,x,q,null)},"hydrateSubTree");Fe?k.type.__asyncLoader().then(()=>!x.isUnmounted&&me()):me()}else{const me=x.subTree=Kc(x);_(null,me,Y,ne,x,q,oe),k.el=me.el}if(fe&&Sn(fe,q),!Fe&&(H=j&&j.onVnodeMounted)){const me=k;Sn(()=>hi(H,ge,me),q)}(k.shapeFlag&256||ge&&Eo(ge.vnode)&&ge.vnode.shapeFlag&256)&&x.a&&Sn(x.a,q),x.isMounted=!0,k=Y=ne=null}},"componentUpdateFn"),y=x.effect=new Fo(E,jn,()=>Vf(I),x.scope),I=x.update=()=>{y.dirty&&y.run()};I.id=x.uid,Is(x,!0),I()},"setupRenderEffect"),se=u((x,k,Y)=>{k.component=x;const ne=x.vnode.props;x.vnode=k,x.next=null,mb(x,k.props,ne,Y),_b(x,k.children,Y),ws(),T0(x),As()},"updateComponentPreRender"),X=u((x,k,Y,ne,q,oe,ae,E,y=!1)=>{const I=x&&x.children,H=x?x.shapeFlag:0,J=k.children,{patchFlag:j,shapeFlag:pe}=k;if(j>0){if(j&128){we(I,J,Y,ne,q,oe,ae,E,y);return}else if(j&256){Te(I,J,Y,ne,q,oe,ae,E,y);return}}pe&8?(H&16&&ye(I,q,oe),J!==I&&h(Y,J)):H&16?pe&16?we(I,J,Y,ne,q,oe,ae,E,y):ye(I,q,oe,!0):(H&8&&h(Y,""),pe&16&&O(J,Y,ne,q,oe,ae,E,y))},"patchChildren"),Te=u((x,k,Y,ne,q,oe,ae,E,y)=>{x=x||Ur,k=k||Ur;const I=x.length,H=k.length,J=Math.min(I,H);let j;for(j=0;j<J;j++){const pe=k[j]=y?ns(k[j]):mi(k[j]);_(x[j],pe,Y,null,q,oe,ae,E,y)}I>H?ye(x,q,oe,!0,!1,J):O(k,Y,ne,q,oe,ae,E,y,J)},"patchUnkeyedChildren"),we=u((x,k,Y,ne,q,oe,ae,E,y)=>{let I=0;const H=k.length;let J=x.length-1,j=H-1;for(;I<=J&&I<=j;){const pe=x[I],fe=k[I]=y?ns(k[I]):mi(k[I]);if($s(pe,fe))_(pe,fe,Y,null,q,oe,ae,E,y);else break;I++}for(;I<=J&&I<=j;){const pe=x[J],fe=k[j]=y?ns(k[j]):mi(k[j]);if($s(pe,fe))_(pe,fe,Y,null,q,oe,ae,E,y);else break;J--,j--}if(I>J){if(I<=j){const pe=j+1,fe=pe<H?k[pe].el:ne;for(;I<=j;)_(null,k[I]=y?ns(k[I]):mi(k[I]),Y,fe,q,oe,ae,E,y),I++}}else if(I>j)for(;I<=J;)Ye(x[I],q,oe,!0),I++;else{const pe=I,fe=I,ge=new Map;for(I=fe;I<=j;I++){const ke=k[I]=y?ns(k[I]):mi(k[I]);ke.key!=null&&ge.set(ke.key,I)}let Fe,me=0;const be=j-fe+1;let Ge=!1,We=0;const Re=new Array(be);for(I=0;I<be;I++)Re[I]=0;for(I=pe;I<=J;I++){const ke=x[I];if(me>=be){Ye(ke,q,oe,!0);continue}let F;if(ke.key!=null)F=ge.get(ke.key);else for(Fe=fe;Fe<=j;Fe++)if(Re[Fe-fe]===0&&$s(ke,k[Fe])){F=Fe;break}F===void 0?Ye(ke,q,oe,!0):(Re[F-fe]=I+1,F>=We?We=F:Ge=!0,_(ke,k[F],Y,null,q,oe,ae,E,y),me++)}const nt=Ge?Mb(Re):Ur;for(Fe=nt.length-1,I=be-1;I>=0;I--){const ke=fe+I,F=k[ke],M=ke+1<H?k[ke+1].el:ne;Re[I]===0?_(null,F,Y,M,q,oe,ae,E,y):Ge&&(Fe<0||I!==nt[Fe]?Ae(F,Y,M,2):Fe--)}}},"patchKeyedChildren"),Ae=u((x,k,Y,ne,q=null)=>{const{el:oe,type:ae,transition:E,children:y,shapeFlag:I}=x;if(I&6){Ae(x.component.subTree,k,Y,ne);return}if(I&128){x.suspense.move(k,Y,ne);return}if(I&64){ae.move(x,k,Y,et);return}if(ae===Lt){i(oe,k,Y);for(let J=0;J<y.length;J++)Ae(y[J],k,Y,ne);i(x.anchor,k,Y);return}if(ae===Ao){S(x,k,Y);return}if(ne!==2&&I&1&&E)if(ne===0)E.beforeEnter(oe),i(oe,k,Y),Sn(()=>E.enter(oe),q);else{const{leave:J,delayLeave:j,afterLeave:pe}=E,fe=u(()=>i(oe,k,Y),"remove22"),ge=u(()=>{J(oe,()=>{fe(),pe&&pe()})},"performLeave");j?j(oe,fe,ge):ge()}else i(oe,k,Y)},"move"),Ye=u((x,k,Y,ne=!1,q=!1)=>{const{type:oe,props:ae,ref:E,children:y,dynamicChildren:I,shapeFlag:H,patchFlag:J,dirs:j}=x;if(E!=null&&lh(E,null,Y,x,!0),H&256){k.ctx.deactivate(x);return}const pe=H&1&&j,fe=!Eo(x);let ge;if(fe&&(ge=ae&&ae.onVnodeBeforeUnmount)&&hi(ge,k,x),H&6)ve(x.component,Y,ne);else{if(H&128){x.suspense.unmount(Y,ne);return}pe&&Ds(x,null,k,"beforeUnmount"),H&64?x.type.remove(x,k,Y,q,et,ne):I&&(oe!==Lt||J>0&&J&64)?ye(I,k,Y,!1,!0):(oe===Lt&&J&384||!q&&H&16)&&ye(y,k,Y),ne&&Qe(x)}(fe&&(ge=ae&&ae.onVnodeUnmounted)||pe)&&Sn(()=>{ge&&hi(ge,k,x),pe&&Ds(x,null,k,"unmounted")},Y)},"unmount"),Qe=u(x=>{const{type:k,el:Y,anchor:ne,transition:q}=x;if(k===Lt){le(Y,ne);return}if(k===Ao){w(x);return}const oe=u(()=>{s(Y),q&&!q.persisted&&q.afterLeave&&q.afterLeave()},"performRemove");if(x.shapeFlag&1&&q&&!q.persisted){const{leave:ae,delayLeave:E}=q,y=u(()=>ae(Y,oe),"performLeave");E?E(x.el,oe,y):y()}else oe()},"remove2"),le=u((x,k)=>{let Y;for(;x!==k;)Y=f(x),s(x),x=Y;s(k)},"removeFragment"),ve=u((x,k,Y)=>{const{bum:ne,scope:q,update:oe,subTree:ae,um:E}=x;ne&&Yc(ne),q.stop(),oe&&(oe.active=!1,Ye(ae,x,k,Y)),E&&Sn(E,k),Sn(()=>{x.isUnmounted=!0},k),k&&k.pendingBranch&&!k.isUnmounted&&x.asyncDep&&!x.asyncResolved&&x.suspenseId===k.pendingId&&(k.deps--,k.deps===0&&k.resolve())},"unmountComponent"),ye=u((x,k,Y,ne=!1,q=!1,oe=0)=>{for(let ae=oe;ae<x.length;ae++)Ye(x[ae],k,Y,ne,q)},"unmountChildren"),Me=u(x=>x.shapeFlag&6?Me(x.component.subTree):x.shapeFlag&128?x.suspense.next():f(x.anchor||x.el),"getNextHostNode");let je=!1;const $e=u((x,k,Y)=>{x==null?k._vnode&&Ye(k._vnode,null,null,!0):_(k._vnode||null,x,k,null,null,null,Y),je||(je=!0,T0(),E_(),je=!1),k._vnode=x},"render"),et={p:_,um:Ye,m:Ae,r:Qe,mt:ie,mc:O,pc:X,pbc:b,n:Me,o:n};let ut,rt;return{render:$e,hydrate:ut,createApp:fb($e,ut)}}u(yb,"baseCreateRenderer");function Qc({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}u(Qc,"resolveChildrenNamespace");function Is({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}u(Is,"toggleRecurse");function bb(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}u(bb,"needTransition");function $_(n,e,t=!1){const i=n.children,s=e.children;if(Xe(i)&&Xe(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ns(s[r]),a.el=o.el),t||$_(o,a)),a.type===Lc&&(a.el=o.el)}}u($_,"traverseStaticChildren");function Mb(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}u(Mb,"getSequence");function j_(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:j_(e)}u(j_,"locateNonHydratedAsyncRoot");const Sb=u(n=>n.__isTeleport,"isTeleport"),Lt=Symbol.for("v-fgt"),Lc=Symbol.for("v-txt"),Bn=Symbol.for("v-cmt"),Ao=Symbol.for("v-stc"),Co=[];let oi=null;function he(n=!1){Co.push(oi=n?null:[])}u(he,"openBlock");function Eb(){Co.pop(),oi=Co[Co.length-1]||null}u(Eb,"closeBlock");let Wo=1;function F0(n){Wo+=n}u(F0,"setBlockTracking");function X_(n){return n.dynamicChildren=Wo>0?oi||Ur:null,Eb(),Wo>0&&oi&&oi.push(n),n}u(X_,"setupBlock");function Ee(n,e,t,i,s,r){return X_(U(n,e,t,i,s,r,!0))}u(Ee,"createElementBlock");function ct(n,e,t,i,s){return X_(Ue(n,e,t,i,s,!0))}u(ct,"createBlock");function El(n){return n?n.__v_isVNode===!0:!1}u(El,"isVNode");function $s(n,e){return n.type===e.type&&n.key===e.key}u($s,"isSameVNodeType");const Y_=u(({key:n})=>n??null,"normalizeKey"),cl=u(({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ht(n)||Pn(n)||Je(n)?{i:Xt,r:n,k:e,f:!!t}:n:null),"normalizeRef");function U(n,e=null,t=null,i=0,s=null,r=n===Lt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Y_(e),ref:e&&cl(e),scopeId:Rc,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Xt};return a?(jf(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Ht(t)?8:16),Wo>0&&!o&&oi&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&oi.push(l),l}u(U,"createBaseVNode");const Ue=Tb;function Tb(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===zy)&&(n=Bn),El(n)){const a=gs(n,e,!0);return t&&jf(a,t),Wo>0&&!r&&oi&&(a.shapeFlag&6?oi[oi.indexOf(n)]=a:oi.push(a)),a.patchFlag|=-2,a}if(Ub(n)&&(n=n.__vccOpts),e){e=wb(e);let{class:a,style:l}=e;a&&!Ht(a)&&(e.class=lt(a)),At(l)&&(x_(l)&&!Xe(l)&&(l=Vt({},l)),e.style=zt(l))}const o=Ht(n)?1:Hy(n)?128:Sb(n)?64:At(n)?4:Je(n)?2:0;return U(n,e,t,i,s,o,r,!0)}u(Tb,"_createVNode");function wb(n){return n?x_(n)||k_(n)?Vt({},n):n:null}u(wb,"guardReactiveProps");function gs(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?Ab(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Y_(c),ref:e&&e.ref?t&&r?Xe(r)?r.concat(cl(e)):[r,cl(e)]:cl(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Lt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&gs(n.ssContent),ssFallback:n.ssFallback&&gs(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&(h.transition=l.clone(h)),h}u(gs,"cloneVNode");function An(n=" ",e=0){return Ue(Lc,null,n,e)}u(An,"createTextVNode");function da(n,e){const t=Ue(Ao,null,n);return t.staticCount=e,t}u(da,"createStaticVNode");function Ve(n="",e=!1){return e?(he(),ct(Bn,null,n)):Ue(Bn,null,n)}u(Ve,"createCommentVNode");function mi(n){return n==null||typeof n=="boolean"?Ue(Bn):Xe(n)?Ue(Lt,null,n.slice()):typeof n=="object"?ns(n):Ue(Lc,null,String(n))}u(mi,"normalizeVNode");function ns(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:gs(n)}u(ns,"cloneIfMounted");function jf(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Xe(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),jf(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!k_(e)?e._ctx=Xt:s===3&&Xt&&(Xt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Je(e)?(e={default:e,_ctx:Xt},t=32):(e=String(e),i&64?(t=16,e=[An(e)]):t=8);n.children=e,n.shapeFlag|=t}u(jf,"normalizeChildren");function Ab(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=lt([e.class,i.class]));else if(s==="style")e.style=zt([e.style,i.style]);else if(Mc(s)){const r=e[s],o=i[s];o&&r!==o&&!(Xe(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}u(Ab,"mergeProps");function hi(n,e,t,i=null){Yn(n,e,7,[t,i])}u(hi,"invokeVNodeHook");const Cb=U_();let Rb=0;function Pb(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Cb,r={uid:Rb++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Yu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:V_(i,s),emitsOptions:w_(i,s),emit:null,emitted:null,propsDefaults:yt,inheritAttrs:i.inheritAttrs,ctx:yt,data:yt,props:yt,attrs:yt,slots:yt,refs:yt,setupState:yt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Ny.bind(null,r),n.ce&&n.ce(r),r}u(Pb,"createComponentInstance");let rn=null;const Xf=u(()=>rn||Xt,"getCurrentInstance");let Tl,ch;{const n=o_(),e=u((t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}},"registerGlobalSetter");Tl=e("__VUE_INSTANCE_SETTERS__",t=>rn=t),ch=e("__VUE_SSR_SETTERS__",t=>Nc=t)}const fa=u(n=>{const e=rn;return Tl(n),n.scope.on(),()=>{n.scope.off(),Tl(e)}},"setCurrentInstance"),B0=u(()=>{rn&&rn.scope.off(),Tl(null)},"unsetCurrentInstance");function q_(n){return n.vnode.shapeFlag&4}u(q_,"isStatefulComponent");let Nc=!1;function Db(n,e=!1){e&&ch(e);const{props:t,children:i}=n.vnode,s=q_(n);pb(n,t,s,e),vb(n,i);const r=s?Ib(n,e):void 0;return e&&ch(!1),r}u(Db,"setupComponent");function Ib(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,ob);const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?Nb(n):null,r=fa(n);ws();const o=ds(i,n,0,[n.props,s]);if(As(),r(),n_(o)){if(o.then(B0,B0),e)return o.then(a=>{k0(n,a,e)}).catch(a=>{Ac(a,n,0)});n.asyncDep=o}else k0(n,o,e)}else K_(n,e)}u(Ib,"setupStatefulComponent");function k0(n,e,t){Je(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:At(e)&&(n.setupState=b_(e)),K_(n,t)}u(k0,"handleSetupResult");let z0;function K_(n,e,t){const i=n.type;if(!n.render){if(!e&&z0&&!i.render){const s=i.template||Wf(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Vt(Vt({isCustomElement:r,delimiters:a},o),l);i.render=z0(s,c)}}n.render=i.render||jn}{const s=fa(n);ws();try{ab(n)}finally{As(),s()}}}u(K_,"finishComponentSetup");const Lb={get(n,e){return Rn(n,"get",""),n[e]}};function Nb(n){const e=u(t=>{n.exposed=t||{}},"expose");return{attrs:new Proxy(n.attrs,Lb),slots:n.slots,emit:n.emit,expose:e}}u(Nb,"createSetupContext");function Oc(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(b_(Ey(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in To)return To[t](n)},has(e,t){return t in e||t in To}}))}u(Oc,"getExposeProxy");function Ob(n,e=!0){return Je(n)?n.displayName||n.name:n.name||e&&n.__name}u(Ob,"getComponentName");function Ub(n){return Je(n)&&"__vccOpts"in n}u(Ub,"isClassComponent");const Z_=u((n,e)=>Ty(n,e,Nc),"computed");function J_(n,e,t){const i=arguments.length;return i===2?At(e)&&!Xe(e)?El(e)?Ue(n,null,[e]):Ue(n,e):Ue(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&El(t)&&(t=[t]),Ue(n,e,t))}u(J_,"h");const Fb="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Bb="http://www.w3.org/2000/svg",kb="http://www.w3.org/1998/Math/MathML",is=typeof document<"u"?document:null,V0=is&&is.createElement("template"),zb={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?is.createElementNS(Bb,n):e==="mathml"?is.createElementNS(kb,n):is.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>is.createTextNode(n),createComment:n=>is.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>is.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{V0.innerHTML=i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n;const a=V0.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Wi="transition",no="animation",$o=Symbol("_vtc"),wl=u((n,{slots:e})=>J_(Ky,Vb(n),e),"Transition");wl.displayName="Transition";const Q_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};wl.props=Vt({},C_,Q_);const Ls=u((n,e=[])=>{Xe(n)?n.forEach(t=>t(...e)):n&&n(...e)},"callHook"),H0=u(n=>n?Xe(n)?n.some(e=>e.length>1):n.length>1:!1,"hasExplicitCallback");function Vb(n){const e={};for(const z in n)z in Q_||(e[z]=n[z]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:h=a,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,v=Hb(s),_=v&&v[0],g=v&&v[1],{onBeforeEnter:m,onEnter:A,onEnterCancelled:S,onLeave:w,onLeaveCancelled:B,onBeforeAppear:P=m,onAppear:R=A,onAppearCancelled:O=S}=e,re=u((z,$,ie)=>{Ns(z,$?h:a),Ns(z,$?c:o),ie&&ie()},"finishEnter"),b=u((z,$)=>{z._isLeaving=!1,Ns(z,d),Ns(z,p),Ns(z,f),$&&$()},"finishLeave"),T=u(z=>($,ie)=>{const ce=z?R:A,Z=u(()=>re($,z,ie),"resolve");Ls(ce,[$,Z]),G0(()=>{Ns($,z?l:r),$i($,z?h:a),H0(ce)||W0($,i,_,Z)})},"makeEnterHook");return Vt(e,{onBeforeEnter(z){Ls(m,[z]),$i(z,r),$i(z,o)},onBeforeAppear(z){Ls(P,[z]),$i(z,l),$i(z,c)},onEnter:T(!1),onAppear:T(!0),onLeave(z,$){z._isLeaving=!0;const ie=u(()=>b(z,$),"resolve");$i(z,d),$i(z,f),$b(),G0(()=>{z._isLeaving&&(Ns(z,d),$i(z,p),H0(w)||W0(z,i,g,ie))}),Ls(w,[z,ie])},onEnterCancelled(z){re(z,!1),Ls(S,[z])},onAppearCancelled(z){re(z,!0),Ls(O,[z])},onLeaveCancelled(z){b(z),Ls(B,[z])}})}u(Vb,"resolveTransitionProps");function Hb(n){if(n==null)return null;if(At(n))return[eu(n.enter),eu(n.leave)];{const e=eu(n);return[e,e]}}u(Hb,"normalizeDuration");function eu(n){return Kx(n)}u(eu,"NumberOf");function $i(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[$o]||(n[$o]=new Set)).add(e)}u($i,"addTransitionClass");function Ns(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[$o];t&&(t.delete(e),t.size||(n[$o]=void 0))}u(Ns,"removeTransitionClass");function G0(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}u(G0,"nextFrame");let Gb=0;function W0(n,e,t,i){const s=n._endId=++Gb,r=u(()=>{s===n._endId&&i()},"resolveIfNotStale");if(t)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=Wb(n,e);if(!o)return i();const c=o+"end";let h=0;const d=u(()=>{n.removeEventListener(c,f),r()},"end"),f=u(p=>{p.target===n&&++h>=l&&d()},"onEnd");setTimeout(()=>{h<l&&d()},a+1),n.addEventListener(c,f)}u(W0,"whenTransitionEnds");function Wb(n,e){const t=window.getComputedStyle(n),i=u(v=>(t[v]||"").split(", "),"getStyleProperties"),s=i(`${Wi}Delay`),r=i(`${Wi}Duration`),o=$0(s,r),a=i(`${no}Delay`),l=i(`${no}Duration`),c=$0(a,l);let h=null,d=0,f=0;e===Wi?o>0&&(h=Wi,d=o,f=r.length):e===no?c>0&&(h=no,d=c,f=l.length):(d=Math.max(o,c),h=d>0?o>c?Wi:no:null,f=h?h===Wi?r.length:l.length:0);const p=h===Wi&&/\b(transform|all)(,|$)/.test(i(`${Wi}Property`).toString());return{type:h,timeout:d,propCount:f,hasTransform:p}}u(Wb,"getTransitionInfo");function $0(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>j0(t)+j0(n[i])))}u($0,"getTimeout");function j0(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}u(j0,"toMs");function $b(){return document.body.offsetHeight}u($b,"forceReflow");function jb(n,e,t){const i=n[$o];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}u(jb,"patchClass");const Al=Symbol("_vod"),ex=Symbol("_vsh"),Wn={beforeMount(n,{value:e},{transition:t}){n[Al]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):io(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),io(n,!0),i.enter(n)):i.leave(n,()=>{io(n,!1)}):io(n,e))},beforeUnmount(n,{value:e}){io(n,e)}};function io(n,e){n.style.display=e?n[Al]:"none",n[ex]=!e}u(io,"setDisplay");const tx=Symbol("");function Uc(n){const e=Xf();if(!e)return;const t=e.ut=(s=n(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>hh(r,s))},i=u(()=>{const s=n(e.proxy);uh(e.subTree,s),t(s)},"setVars");Ic(()=>{jy(i);const s=new MutationObserver(i);s.observe(e.subTree.el.parentNode,{childList:!0}),Gf(()=>s.disconnect())})}u(Uc,"useCssVars");function uh(n,e){if(n.shapeFlag&128){const t=n.suspense;n=t.activeBranch,t.pendingBranch&&!t.isHydrating&&t.effects.push(()=>{uh(t.activeBranch,e)})}for(;n.component;)n=n.component.subTree;if(n.shapeFlag&1&&n.el)hh(n.el,e);else if(n.type===Lt)n.children.forEach(t=>uh(t,e));else if(n.type===Ao){let{el:t,anchor:i}=n;for(;t&&(hh(t,e),t!==i);)t=t.nextSibling}}u(uh,"setVarsOnVNode");function hh(n,e){if(n.nodeType===1){const t=n.style;let i="";for(const s in e)t.setProperty(`--${s}`,e[s]),i+=`--${s}: ${e[s]};`;t[tx]=i}}u(hh,"setVarsOnNode");const Xb=/(^|;)\s*display\s*:/;function Yb(n,e,t){const i=n.style,s=Ht(t);let r=!1;if(t&&!s){if(e)if(Ht(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ul(i,a,"")}else for(const o in e)t[o]==null&&ul(i,o,"");for(const o in t)o==="display"&&(r=!0),ul(i,o,t[o])}else if(s){if(e!==t){const o=i[tx];o&&(t+=";"+o),i.cssText=t,r=Xb.test(t)}}else e&&n.removeAttribute("style");Al in n&&(n[Al]=r?i.display:"",n[ex]&&(i.display="none"))}u(Yb,"patchStyle");const X0=/\s*!important$/;function ul(n,e,t){if(Xe(t))t.forEach(i=>ul(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=qb(n,e);X0.test(t)?n.setProperty(ar(i),t.replace(X0,""),"important"):n[i]=t}}u(ul,"setStyle");const Y0=["Webkit","Moz","ms"],tu={};function qb(n,e){const t=tu[e];if(t)return t;let i=xi(e);if(i!=="filter"&&i in n)return tu[e]=i;i=Tc(i);for(let s=0;s<Y0.length;s++){const r=Y0[s]+i;if(r in n)return tu[e]=r}return e}u(qb,"autoPrefix");const q0="http://www.w3.org/1999/xlink";function Kb(n,e,t,i,s){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(q0,e.slice(6,e.length)):n.setAttributeNS(q0,e,t);else{const r=ny(e);t==null||r&&!a_(t)?n.removeAttribute(e):n.setAttribute(e,r?"":t)}}u(Kb,"patchAttr");function Zb(n,e,t,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?n.getAttribute("value")||"":n.value,h=t??"";(c!==h||!("_value"in n))&&(n.value=h),t==null&&n.removeAttribute(e),n._value=t;return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=a_(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}u(Zb,"patchDOMProp");function Jb(n,e,t,i){n.addEventListener(e,t,i)}u(Jb,"addEventListener");function Qb(n,e,t,i){n.removeEventListener(e,t,i)}u(Qb,"removeEventListener");const K0=Symbol("_vei");function eM(n,e,t,i,s=null){const r=n[K0]||(n[K0]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=tM(e);if(i){const c=r[e]=sM(i,s);Jb(n,a,c,l)}else o&&(Qb(n,a,o,l),r[e]=void 0)}}u(eM,"patchEvent");const Z0=/(?:Once|Passive|Capture)$/;function tM(n){let e;if(Z0.test(n)){e={};let i;for(;i=n.match(Z0);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ar(n.slice(2)),e]}u(tM,"parseName");let nu=0;const nM=Promise.resolve(),iM=u(()=>nu||(nM.then(()=>nu=0),nu=Date.now()),"getNow");function sM(n,e){const t=u(i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Yn(rM(i,t.value),e,5,[i])},"invoker");return t.value=n,t.attached=iM(),t}u(sM,"createInvoker");function rM(n,e){if(Xe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}u(rM,"patchStopImmediatePropagation");const J0=u(n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,"isNativeOn"),oM=u((n,e,t,i,s,r,o,a,l)=>{const c=s==="svg";e==="class"?jb(n,i,c):e==="style"?Yb(n,t,i):Mc(e)?Df(e)||eM(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):aM(n,e,i,c))?Zb(n,e,i,r,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Kb(n,e,i,c))},"patchProp");function aM(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&J0(e)&&Je(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return J0(e)&&Ht(t)?!1:e in n}u(aM,"shouldSetAsProp");function nx(n="$style"){{const e=Xf();if(!e)return yt;const t=e.type.__cssModules;if(!t)return yt;const i=t[n];return i||yt}}u(nx,"useCssModule");const lM=["ctrl","shift","alt","meta"],cM={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>lM.some(t=>n[`${t}Key`]&&!e.includes(t))},Gt=u((n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=cM[e[o]];if(a&&a(s,e))return}return n(s,...r)})},"withModifiers"),uM={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},di=u((n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=s=>{if(!("key"in s))return;const r=ar(s.key);if(e.some(o=>o===r||uM[o]===r))return n(s)})},"withKeys"),hM=Vt({patchProp:oM},zb);let Q0;function dM(){return Q0||(Q0=xb(hM))}u(dM,"ensureRenderer");const fM=u((...n)=>{const e=dM().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=mM(i);if(!s)return;const r=e._component;!Je(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,pM(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},"createApp");function pM(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}u(pM,"resolveRootNamespace");function mM(n){return Ht(n)?document.querySelector(n):n}u(mM,"normalizeContainer");/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yf="169",Vr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ir={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gM=0,e1=1,vM=2,ix=1,_M=2,Ri=3,yi=0,_n=1,vn=2,Zt=0,Hr=1,dh=2,t1=3,n1=4,fh=5,Di=100,xM=101,yM=102,bM=103,MM=104,ph=200,SM=201,EM=202,TM=203,mh=204,gh=205,sx=206,wM=207,rx=208,AM=209,CM=210,RM=211,PM=212,DM=213,IM=214,vh=0,_h=1,xh=2,Xr=3,yh=4,bh=5,Mh=6,Sh=7,ox=0,LM=1,NM=2,fs=0,OM=1,UM=2,FM=3,BM=4,kM=5,zM=6,VM=7,i1="attached",HM="detached",ax=300,Yr=301,qr=302,Eh=303,Th=304,Fc=306,vs=1e3,cs=1001,Cl=1002,on=1003,lx=1004,yo=1005,Fn=1006,hl=1007,Ii=1008,Bi=1009,cx=1010,ux=1011,jo=1012,qf=1013,Qs=1014,ai=1015,En=1016,Kf=1017,Zf=1018,er=1020,hx=35902,dx=1021,fx=1022,Xn=1023,px=1024,mx=1025,Gr=1026,tr=1027,Jf=1028,Qf=1029,gx=1030,ep=1031,tp=1033,dl=33776,fl=33777,pl=33778,ml=33779,wh=35840,Ah=35841,Ch=35842,Rh=35843,Ph=36196,Dh=37492,Ih=37496,Lh=37808,Nh=37809,Oh=37810,Uh=37811,Fh=37812,Bh=37813,kh=37814,zh=37815,Vh=37816,Hh=37817,Gh=37818,Wh=37819,$h=37820,jh=37821,gl=36492,Xh=36494,Yh=36495,vx=36283,qh=36284,Kh=36285,Zh=36286,Xo=2300,Yo=2301,iu=2302,s1=2400,r1=2401,o1=2402,GM=2500,WM=0,_x=1,Jh=2,$M=3200,xx=3201,np=0,jM=1,os="",dn="srgb",an="srgb-linear",ip="display-p3",Bc="display-p3-linear",Rl="linear",Tt="srgb",Pl="rec709",Dl="p3",cr=7680,a1=519,XM=512,YM=513,qM=514,yx=515,KM=516,ZM=517,JM=518,QM=519,Qh=35044,l1="300 es",Li=2e3,Il=2001,Tp=class Tp{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}};u(Tp,"EventDispatcher");let ki=Tp;const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let c1=1234567;const Ro=Math.PI/180,Kr=180/Math.PI;function ci(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}u(ci,"generateUUID");function Jt(n,e,t){return Math.max(e,Math.min(t,n))}u(Jt,"clamp");function sp(n,e){return(n%e+e)%e}u(sp,"euclideanModulo");function eS(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}u(eS,"mapLinear");function tS(n,e,t){return n!==e?(t-n)/(e-n):0}u(tS,"inverseLerp");function Po(n,e,t){return(1-t)*n+t*e}u(Po,"lerp");function nS(n,e,t,i){return Po(n,e,1-Math.exp(-t*i))}u(nS,"damp");function iS(n,e=1){return e-Math.abs(sp(n,e*2)-e)}u(iS,"pingpong");function sS(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}u(sS,"smoothstep");function rS(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}u(rS,"smootherstep");function oS(n,e){return n+Math.floor(Math.random()*(e-n+1))}u(oS,"randInt");function aS(n,e){return n+Math.random()*(e-n)}u(aS,"randFloat");function lS(n){return n*(.5-Math.random())}u(lS,"randFloatSpread");function cS(n){n!==void 0&&(c1=n);let e=c1+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}u(cS,"seededRandom");function uS(n){return n*Ro}u(uS,"degToRad");function hS(n){return n*Kr}u(hS,"radToDeg");function dS(n){return(n&n-1)===0&&n!==0}u(dS,"isPowerOfTwo");function fS(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}u(fS,"ceilPowerOfTwo");function pS(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}u(pS,"floorPowerOfTwo");function mS(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),d=r((e-i)/2),f=o((e-i)/2),p=r((i-e)/2),v=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*v,l*p,a*c);break;case"YXY":n.set(l*p,a*h,l*v,a*c);break;case"ZYZ":n.set(l*v,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}u(mS,"setQuaternionFromProperEuler");function ri(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}u(ri,"denormalize");function _t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}u(_t,"normalize");const rp={DEG2RAD:Ro,RAD2DEG:Kr,generateUUID:ci,clamp:Jt,euclideanModulo:sp,mapLinear:eS,inverseLerp:tS,lerp:Po,damp:nS,pingpong:iS,smoothstep:sS,smootherstep:rS,randInt:oS,randFloat:aS,randFloatSpread:lS,seededRandom:cS,degToRad:uS,radToDeg:hS,isPowerOfTwo:dS,ceilPowerOfTwo:fS,floorPowerOfTwo:pS,setQuaternionFromProperEuler:mS,normalize:_t,denormalize:ri},cc=class cc{constructor(e=0,t=0){cc.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};u(cc,"Vector2");let xe=cc;const uc=class uc{constructor(e,t,i,s,r,o,a,l,c){uc.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],p=i[5],v=i[8],_=s[0],g=s[3],m=s[6],A=s[1],S=s[4],w=s[7],B=s[2],P=s[5],R=s[8];return r[0]=o*_+a*A+l*B,r[3]=o*g+a*S+l*P,r[6]=o*m+a*w+l*R,r[1]=c*_+h*A+d*B,r[4]=c*g+h*S+d*P,r[7]=c*m+h*w+d*R,r[2]=f*_+p*A+v*B,r[5]=f*g+p*S+v*P,r[8]=f*m+p*w+v*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*r,p=c*r-o*l,v=t*d+i*f+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=d*_,e[1]=(s*c-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=f*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(su.makeScale(e,t)),this}rotate(e){return this.premultiply(su.makeRotation(-e)),this}translate(e,t){return this.premultiply(su.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};u(uc,"Matrix3");let st=uc;const su=new st;function bx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}u(bx,"arrayNeedsUint32");function qo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}u(qo,"createElementNS");function gS(){const n=qo("canvas");return n.style.display="block",n}u(gS,"createCanvasElement");const u1={};function vl(n){n in u1||(u1[n]=!0,console.warn(n))}u(vl,"warnOnce");function vS(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}u(r,"probe"),setTimeout(r,t)})}u(vS,"probeAsync");function _S(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}u(_S,"toNormalizedProjectionMatrix");function xS(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}u(xS,"toReversedProjectionMatrix");const h1=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),d1=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),so={[an]:{transfer:Rl,primaries:Pl,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[dn]:{transfer:Tt,primaries:Pl,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Bc]:{transfer:Rl,primaries:Dl,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(d1),fromReference:n=>n.applyMatrix3(h1)},[ip]:{transfer:Tt,primaries:Dl,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(d1),fromReference:n=>n.applyMatrix3(h1).convertLinearToSRGB()}},yS=new Set([an,Bc]),dt={enabled:!0,_workingColorSpace:an,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!yS.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=so[e].toReference,s=so[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return so[n].primaries},getTransfer:function(n){return n===os?Rl:so[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(so[e].luminanceCoefficients)}};function Wr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}u(Wr,"SRGBToLinear");function ru(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}u(ru,"LinearToSRGB");let ur;const wp=class wp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ur===void 0&&(ur=qo("canvas")),ur.width=e.width,ur.height=e.height;const i=ur.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ur}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Wr(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wr(t[i]/255)*255):t[i]=Wr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};u(wp,"ImageUtils");let ed=wp,bS=0;const Ap=class Ap{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=ci(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ou(s[o].image)):r.push(ou(s[o]))}else r=ou(s);i.url=r}return t||(e.images[this.uuid]=i),i}};u(Ap,"Source");let Ll=Ap;function ou(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ed.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}u(ou,"serializeImage");let MS=0;const Nr=class Nr extends ki{constructor(e=Nr.DEFAULT_IMAGE,t=Nr.DEFAULT_MAPPING,i=cs,s=cs,r=Fn,o=Ii,a=Xn,l=Bi,c=Nr.DEFAULT_ANISOTROPY,h=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:MS++}),this.uuid=ci(),this.name="",this.source=new Ll(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ax)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vs:e.x=e.x-Math.floor(e.x);break;case cs:e.x=e.x<0?0:1;break;case Cl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vs:e.y=e.y-Math.floor(e.y);break;case cs:e.y=e.y<0?0:1;break;case Cl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};u(Nr,"Texture");let ln=Nr;ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=ax;ln.DEFAULT_ANISOTROPY=1;const hc=class hc{constructor(e=0,t=0,i=0,s=1){hc.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],v=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,w=(p+1)/2,B=(m+1)/2,P=(h+f)/4,R=(d+_)/4,O=(v+g)/4;return S>w&&S>B?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=P/i,r=R/i):w>B?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=P/s,r=O/s):B<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(B),i=R/r,s=O/r),this.set(i,s,r,t),this}let A=Math.sqrt((g-v)*(g-v)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(A)<.001&&(A=1),this.x=(g-v)/A,this.y=(d-_)/A,this.z=(f-h)/A,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};u(hc,"Vector4");let ot=hc;const Cp=class Cp extends ki{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new ln(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ll(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}};u(Cp,"RenderTarget");let td=Cp;const Rp=class Rp extends td{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}};u(Rp,"WebGLRenderTarget");let $t=Rp;const Pp=class Pp extends ln{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};u(Pp,"DataArrayTexture");let Nl=Pp;const Dp=class Dp extends ln{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};u(Dp,"Data3DTexture");let nd=Dp;const Ip=class Ip{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3];const f=r[o+0],p=r[o+1],v=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=v,e[t+3]=_;return}if(d!==_||l!==f||c!==p||h!==v){let g=1-a;const m=l*f+c*p+h*v+d*_,A=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const B=Math.sqrt(S),P=Math.atan2(B,m*A);g=Math.sin(g*P)/B,a=Math.sin(a*P)/B}const w=a*A;if(l=l*g+f*w,c=c*g+p*w,h=h*g+v*w,d=d*g+_*w,g===1-a){const B=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=B,c*=B,h*=B,d*=B}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],f=r[o+1],p=r[o+2],v=r[o+3];return e[t]=a*v+h*d+l*p-c*f,e[t+1]=l*v+h*f+c*d-a*p,e[t+2]=c*v+h*p+a*f-l*d,e[t+3]=h*v-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),f=l(i/2),p=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*p*v,this._y=c*p*d-f*h*v,this._z=c*h*v+f*p*d,this._w=c*h*d-f*p*v;break;case"YXZ":this._x=f*h*d+c*p*v,this._y=c*p*d-f*h*v,this._z=c*h*v-f*p*d,this._w=c*h*d+f*p*v;break;case"ZXY":this._x=f*h*d-c*p*v,this._y=c*p*d+f*h*v,this._z=c*h*v+f*p*d,this._w=c*h*d-f*p*v;break;case"ZYX":this._x=f*h*d-c*p*v,this._y=c*p*d+f*h*v,this._z=c*h*v-f*p*d,this._w=c*h*d+f*p*v;break;case"YZX":this._x=f*h*d+c*p*v,this._y=c*p*d+f*h*v,this._z=c*h*v-f*p*d,this._w=c*h*d-f*p*v;break;case"XZY":this._x=f*h*d-c*p*v,this._y=c*p*d-f*h*v,this._z=c*h*v+f*p*d,this._w=c*h*d+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};u(Ip,"Quaternion");let xn=Ip;const dc=class dc{constructor(e=0,t=0,i=0){dc.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(f1.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(f1.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return au.copy(this).projectOnVector(e),this.sub(au)}reflect(e){return this.sub(au.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};u(dc,"Vector3");let D=dc;const au=new D,f1=new xn,Lp=class Lp{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ti):ti.fromBufferAttribute(r,o),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ea.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ea.copy(i.boundingBox)),Ea.applyMatrix4(e.matrixWorld),this.union(Ea)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ro),Ta.subVectors(this.max,ro),hr.subVectors(e.a,ro),dr.subVectors(e.b,ro),fr.subVectors(e.c,ro),ji.subVectors(dr,hr),Xi.subVectors(fr,dr),Os.subVectors(hr,fr);let t=[0,-ji.z,ji.y,0,-Xi.z,Xi.y,0,-Os.z,Os.y,ji.z,0,-ji.x,Xi.z,0,-Xi.x,Os.z,0,-Os.x,-ji.y,ji.x,0,-Xi.y,Xi.x,0,-Os.y,Os.x,0];return!lu(t,hr,dr,fr,Ta)||(t=[1,0,0,0,1,0,0,0,1],!lu(t,hr,dr,fr,Ta))?!1:(wa.crossVectors(ji,Xi),t=[wa.x,wa.y,wa.z],lu(t,hr,dr,fr,Ta))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};u(Lp,"Box3");let Dn=Lp;const Mi=[new D,new D,new D,new D,new D,new D,new D,new D],ti=new D,Ea=new Dn,hr=new D,dr=new D,fr=new D,ji=new D,Xi=new D,Os=new D,ro=new D,Ta=new D,wa=new D,Us=new D;function lu(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Us.fromArray(n,r);const a=s.x*Math.abs(Us.x)+s.y*Math.abs(Us.y)+s.z*Math.abs(Us.z),l=e.dot(Us),c=t.dot(Us),h=i.dot(Us);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}u(lu,"satForAxes");const SS=new Dn,oo=new D,cu=new D,Np=class Np{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):SS.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oo.subVectors(e,this.center);const t=oo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(oo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oo.copy(e.center).add(cu)),this.expandByPoint(oo.copy(e.center).sub(cu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};u(Np,"Sphere");let In=Np;const Si=new D,uu=new D,Aa=new D,Yi=new D,hu=new D,Ca=new D,du=new D,Op=class Op{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){uu.copy(e).add(t).multiplyScalar(.5),Aa.copy(t).sub(e).normalize(),Yi.copy(this.origin).sub(uu);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Aa),a=Yi.dot(this.direction),l=-Yi.dot(Aa),c=Yi.lengthSq(),h=Math.abs(1-o*o);let d,f,p,v;if(h>0)if(d=o*l-a,f=o*a-l,v=r*h,d>=0)if(f>=-v)if(f<=v){const _=1/h;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(uu).addScaledVector(Aa,f),p}intersectSphere(e,t){Si.subVectors(e.center,this.origin);const i=Si.dot(this.direction),s=Si.dot(Si)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,i,s,r){hu.subVectors(t,e),Ca.subVectors(i,e),du.crossVectors(hu,Ca);let o=this.direction.dot(du),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yi.subVectors(this.origin,e);const l=a*this.direction.dot(Ca.crossVectors(Yi,Ca));if(l<0)return null;const c=a*this.direction.dot(hu.cross(Yi));if(c<0||l+c>o)return null;const h=-a*Yi.dot(du);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};u(Op,"Ray");let _s=Op;const Lo=class Lo{constructor(e,t,i,s,r,o,a,l,c,h,d,f,p,v,_,g){Lo.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,d,f,p,v,_,g)}set(e,t,i,s,r,o,a,l,c,h,d,f,p,v,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=f,m[3]=p,m[7]=v,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lo().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/pr.setFromMatrixColumn(e,0).length(),r=1/pr.setFromMatrixColumn(e,1).length(),o=1/pr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*h,p=o*d,v=a*h,_=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+v*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=v+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,p=l*d,v=c*h,_=c*d;t[0]=f+_*a,t[4]=v*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-v,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,p=l*d,v=c*h,_=c*d;t[0]=f-_*a,t[4]=-o*d,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,p=o*d,v=a*h,_=a*d;t[0]=l*h,t[4]=v*c-p,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=p*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,v=a*l,_=a*c;t[0]=l*h,t[4]=_-f*d,t[8]=v*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*d+v,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,p=o*c,v=a*l,_=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+_,t[5]=o*h,t[9]=p*d-v,t[2]=v*d-p,t[6]=a*h,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ES,e,TS)}lookAt(e,t,i){const s=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),qi.crossVectors(i,On),qi.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),qi.crossVectors(i,On)),qi.normalize(),Ra.crossVectors(On,qi),s[0]=qi.x,s[4]=Ra.x,s[8]=On.x,s[1]=qi.y,s[5]=Ra.y,s[9]=On.y,s[2]=qi.z,s[6]=Ra.z,s[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],p=i[13],v=i[2],_=i[6],g=i[10],m=i[14],A=i[3],S=i[7],w=i[11],B=i[15],P=s[0],R=s[4],O=s[8],re=s[12],b=s[1],T=s[5],z=s[9],$=s[13],ie=s[2],ce=s[6],Z=s[10],se=s[14],X=s[3],Te=s[7],we=s[11],Ae=s[15];return r[0]=o*P+a*b+l*ie+c*X,r[4]=o*R+a*T+l*ce+c*Te,r[8]=o*O+a*z+l*Z+c*we,r[12]=o*re+a*$+l*se+c*Ae,r[1]=h*P+d*b+f*ie+p*X,r[5]=h*R+d*T+f*ce+p*Te,r[9]=h*O+d*z+f*Z+p*we,r[13]=h*re+d*$+f*se+p*Ae,r[2]=v*P+_*b+g*ie+m*X,r[6]=v*R+_*T+g*ce+m*Te,r[10]=v*O+_*z+g*Z+m*we,r[14]=v*re+_*$+g*se+m*Ae,r[3]=A*P+S*b+w*ie+B*X,r[7]=A*R+S*T+w*ce+B*Te,r[11]=A*O+S*z+w*Z+B*we,r[15]=A*re+S*$+w*se+B*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],p=e[14],v=e[3],_=e[7],g=e[11],m=e[15];return v*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*p-i*l*p)+_*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+g*(+t*c*d-t*a*p-r*o*d+i*o*p+r*a*h-i*c*h)+m*(-s*a*h-t*l*d+t*a*f+s*o*d-i*o*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],p=e[11],v=e[12],_=e[13],g=e[14],m=e[15],A=d*g*c-_*f*c+_*l*p-a*g*p-d*l*m+a*f*m,S=v*f*c-h*g*c-v*l*p+o*g*p+h*l*m-o*f*m,w=h*_*c-v*d*c+v*a*p-o*_*p-h*a*m+o*d*m,B=v*d*l-h*_*l-v*a*f+o*_*f+h*a*g-o*d*g,P=t*A+i*S+s*w+r*B;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return e[0]=A*R,e[1]=(_*f*r-d*g*r-_*s*p+i*g*p+d*s*m-i*f*m)*R,e[2]=(a*g*r-_*l*r+_*s*c-i*g*c-a*s*m+i*l*m)*R,e[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*p-i*l*p)*R,e[4]=S*R,e[5]=(h*g*r-v*f*r+v*s*p-t*g*p-h*s*m+t*f*m)*R,e[6]=(v*l*r-o*g*r-v*s*c+t*g*c+o*s*m-t*l*m)*R,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*p+t*l*p)*R,e[8]=w*R,e[9]=(v*d*r-h*_*r-v*i*p+t*_*p+h*i*m-t*d*m)*R,e[10]=(o*_*r-v*a*r+v*i*c-t*_*c-o*i*m+t*a*m)*R,e[11]=(h*a*r-o*d*r-h*i*c+t*d*c+o*i*p-t*a*p)*R,e[12]=B*R,e[13]=(h*_*s-v*d*s+v*i*f-t*_*f-h*i*g+t*d*g)*R,e[14]=(v*a*s-o*_*s-v*i*l+t*_*l+o*i*g-t*a*g)*R,e[15]=(o*d*s-h*a*s+h*i*l-t*d*l-o*i*f+t*a*f)*R,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,f=r*c,p=r*h,v=r*d,_=o*h,g=o*d,m=a*d,A=l*c,S=l*h,w=l*d,B=i.x,P=i.y,R=i.z;return s[0]=(1-(_+m))*B,s[1]=(p+w)*B,s[2]=(v-S)*B,s[3]=0,s[4]=(p-w)*P,s[5]=(1-(f+m))*P,s[6]=(g+A)*P,s[7]=0,s[8]=(v+S)*R,s[9]=(g-A)*R,s[10]=(1-(f+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=pr.set(s[0],s[1],s[2]).length();const o=pr.set(s[4],s[5],s[6]).length(),a=pr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ni.copy(this);const c=1/r,h=1/o,d=1/a;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=h,ni.elements[5]*=h,ni.elements[6]*=h,ni.elements[8]*=d,ni.elements[9]*=d,ni.elements[10]*=d,t.setFromRotationMatrix(ni),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Li){const l=this.elements,c=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let p,v;if(a===Li)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Il)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Li){const l=this.elements,c=1/(t-e),h=1/(i-s),d=1/(o-r),f=(t+e)*c,p=(i+s)*h;let v,_;if(a===Li)v=(o+r)*d,_=-2*d;else if(a===Il)v=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};u(Lo,"Matrix4");let Ke=Lo;const pr=new D,ni=new Ke,ES=new D(0,0,0),TS=new D(1,1,1),qi=new D,Ra=new D,On=new D,p1=new Ke,m1=new xn,fc=class fc{constructor(e=0,t=0,i=0,s=fc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return p1.makeRotationFromQuaternion(e),this.setFromRotationMatrix(p1,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return m1.setFromEuler(this),this.setFromQuaternion(m1,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};u(fc,"Euler");let bi=fc;bi.DEFAULT_ORDER="XYZ";const Up=class Up{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};u(Up,"Layers");let Ko=Up,wS=0;const g1=new D,mr=new xn,Ei=new Ke,Pa=new D,ao=new D,AS=new D,CS=new xn,v1=new D(1,0,0),_1=new D(0,1,0),x1=new D(0,0,1),y1={type:"added"},RS={type:"removed"},gr={type:"childadded",child:null},fu={type:"childremoved",child:null},Or=class Or extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Or.DEFAULT_UP.clone();const e=new D,t=new bi,i=new xn,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}u(r,"onRotationChange");function o(){t.setFromQuaternion(i,void 0,!1)}u(o,"onQuaternionChange"),t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ke},normalMatrix:{value:new st}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=Or.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Or.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.multiply(mr),this}rotateOnWorldAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.premultiply(mr),this}rotateX(e){return this.rotateOnAxis(v1,e)}rotateY(e){return this.rotateOnAxis(_1,e)}rotateZ(e){return this.rotateOnAxis(x1,e)}translateOnAxis(e,t){return g1.copy(e).applyQuaternion(this.quaternion),this.position.add(g1.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(v1,e)}translateY(e){return this.translateOnAxis(_1,e)}translateZ(e){return this.translateOnAxis(x1,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Pa.copy(e):Pa.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(ao,Pa,this.up):Ei.lookAt(Pa,ao,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),mr.setFromRotationMatrix(Ei),this.quaternion.premultiply(mr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(y1),gr.child=e,this.dispatchEvent(gr),gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(RS),fu.child=e,this.dispatchEvent(fu),fu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(y1),gr.child=e,this.dispatchEvent(gr),gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,e,AS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,CS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(u(r,"serialize"),this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}u(o,"extractFromCache")}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}};u(Or,"Object3D");let Ct=Or;Ct.DEFAULT_UP=new D(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ii=new D,Ti=new D,pu=new D,wi=new D,vr=new D,_r=new D,b1=new D,mu=new D,gu=new D,vu=new D,_u=new ot,xu=new ot,yu=new ot,ss=class ss{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ii.subVectors(e,t),s.cross(ii);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ii.subVectors(s,t),Ti.subVectors(i,t),pu.subVectors(e,t);const o=ii.dot(ii),a=ii.dot(Ti),l=ii.dot(pu),c=Ti.dot(Ti),h=Ti.dot(pu),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(c*l-a*h)*f,v=(o*h-a*l)*f;return r.set(1-p-v,v,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wi.x),l.addScaledVector(o,wi.y),l.addScaledVector(a,wi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return _u.setScalar(0),xu.setScalar(0),yu.setScalar(0),_u.fromBufferAttribute(e,t),xu.fromBufferAttribute(e,i),yu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(_u,r.x),o.addScaledVector(xu,r.y),o.addScaledVector(yu,r.z),o}static isFrontFacing(e,t,i,s){return ii.subVectors(i,t),Ti.subVectors(e,t),ii.cross(Ti).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),ii.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ss.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ss.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return ss.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return ss.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ss.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;vr.subVectors(s,i),_r.subVectors(r,i),mu.subVectors(e,i);const l=vr.dot(mu),c=_r.dot(mu);if(l<=0&&c<=0)return t.copy(i);gu.subVectors(e,s);const h=vr.dot(gu),d=_r.dot(gu);if(h>=0&&d<=h)return t.copy(s);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(vr,o);vu.subVectors(e,r);const p=vr.dot(vu),v=_r.dot(vu);if(v>=0&&p<=v)return t.copy(r);const _=p*c-l*v;if(_<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(_r,a);const g=h*v-p*d;if(g<=0&&d-h>=0&&p-v>=0)return b1.subVectors(r,s),a=(d-h)/(d-h+(p-v)),t.copy(s).addScaledVector(b1,a);const m=1/(g+_+f);return o=_*m,a=f*m,t.copy(i).addScaledVector(vr,o).addScaledVector(_r,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};u(ss,"Triangle");let as=ss;const Mx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},Da={h:0,s:0,l:0};function bu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}u(bu,"hue2rgb");const Fp=class Fp{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=dt.workingColorSpace){if(e=sp(e,1),t=Jt(t,0,1),i=Jt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=bu(o,r,e+1/3),this.g=bu(o,r,e),this.b=bu(o,r,e-1/3)}return dt.toWorkingColorSpace(this,s),this}setStyle(e,t=dn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}u(i,"handleAlpha");let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dn){const i=Mx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}copyLinearToSRGB(e){return this.r=ru(e.r),this.g=ru(e.g),this.b=ru(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return dt.fromWorkingColorSpace(un.copy(this),e),Math.round(Jt(un.r*255,0,255))*65536+Math.round(Jt(un.g*255,0,255))*256+Math.round(Jt(un.b*255,0,255))}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(un.copy(this),t);const i=un.r,s=un.g,r=un.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=dn){dt.fromWorkingColorSpace(un.copy(this),e);const t=un.r,i=un.g,s=un.b;return e!==dn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+t,Ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(Da);const i=Po(Ki.h,Da.h,t),s=Po(Ki.s,Da.s,t),r=Po(Ki.l,Da.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};u(Fp,"Color");let De=Fp;const un=new De;De.NAMES=Mx;let PS=0;const Bp=class Bp extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=Hr,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mh,this.blendDst=gh,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=a1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(i.blending=this.blending),this.side!==yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==mh&&(i.blendSrc=this.blendSrc),this.blendDst!==gh&&(i.blendDst=this.blendDst),this.blendEquation!==Di&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==a1&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(u(s,"extractFromCache"),t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}};u(Bp,"Material");let Cn=Bp;const kp=class kp extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=ox,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};u(kp,"MeshBasicMaterial");let wn=kp;const kt=new D,Ia=new xe,zp=class zp{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qh,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ia.fromBufferAttribute(this,t),Ia.applyMatrix3(e),this.setXY(t,Ia.x,Ia.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ri(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qh&&(e.usage=this.usage),e}};u(zp,"BufferAttribute");let Nt=zp;const Vp=class Vp extends Nt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};u(Vp,"Uint16BufferAttribute");let Ol=Vp;const Hp=class Hp extends Nt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};u(Hp,"Uint32BufferAttribute");let Ul=Hp;const Gp=class Gp extends Nt{constructor(e,t,i){super(new Float32Array(e),t,i)}};u(Gp,"Float32BufferAttribute");let Ft=Gp,DS=0;const Vn=new Ke,Mu=new Ct,xr=new D,Un=new Dn,lo=new Dn,Kt=new D,pc=class pc extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:DS++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bx(e)?Ul:Ol)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new st().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,i){return Vn.makeTranslation(e,t,i),this.applyMatrix4(Vn),this}scale(e,t,i){return Vn.makeScale(e,t,i),this.applyMatrix4(Vn),this}lookAt(e){return Mu.lookAt(e),Mu.updateMatrix(),this.applyMatrix4(Mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ft(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Un.setFromBufferAttribute(r),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new In);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];lo.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(Un.min,lo.min),Un.expandByPoint(Kt),Kt.addVectors(Un.max,lo.max),Un.expandByPoint(Kt)):(Un.expandByPoint(lo.min),Un.expandByPoint(lo.max))}Un.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Kt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Kt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Kt.fromBufferAttribute(a,c),l&&(xr.fromBufferAttribute(e,c),Kt.add(xr)),s=Math.max(s,i.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<i.count;O++)a[O]=new D,l[O]=new D;const c=new D,h=new D,d=new D,f=new xe,p=new xe,v=new xe,_=new D,g=new D;function m(O,re,b){c.fromBufferAttribute(i,O),h.fromBufferAttribute(i,re),d.fromBufferAttribute(i,b),f.fromBufferAttribute(r,O),p.fromBufferAttribute(r,re),v.fromBufferAttribute(r,b),h.sub(c),d.sub(c),p.sub(f),v.sub(f);const T=1/(p.x*v.y-v.x*p.y);isFinite(T)&&(_.copy(h).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(T),g.copy(d).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(T),a[O].add(_),a[re].add(_),a[b].add(_),l[O].add(g),l[re].add(g),l[b].add(g))}u(m,"handleTriangle");let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let O=0,re=A.length;O<re;++O){const b=A[O],T=b.start,z=b.count;for(let $=T,ie=T+z;$<ie;$+=3)m(e.getX($+0),e.getX($+1),e.getX($+2))}const S=new D,w=new D,B=new D,P=new D;function R(O){B.fromBufferAttribute(s,O),P.copy(B);const re=a[O];S.copy(re),S.sub(B.multiplyScalar(B.dot(re))).normalize(),w.crossVectors(P,re);const T=w.dot(l[O])<0?-1:1;o.setXYZW(O,S.x,S.y,S.z,T)}u(R,"handleVertex");for(let O=0,re=A.length;O<re;++O){const b=A[O],T=b.start,z=b.count;for(let $=T,ie=T+z;$<ie;$+=3)R(e.getX($+0)),R(e.getX($+1)),R(e.getX($+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,d=new D;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let p=0,v=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let m=0;m<h;m++)f[v++]=c[p++]}return new Nt(f,h,d)}if(u(e,"convertBufferAttribute"),this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pc,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};u(pc,"BufferGeometry");let Bt=pc;const M1=new Ke,Fs=new _s,La=new In,S1=new D,Na=new D,Oa=new D,Ua=new D,Su=new D,Fa=new D,E1=new D,Ba=new D,Wp=class Wp extends Ct{constructor(e=new Bt,t=new wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Fa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(Su.fromBufferAttribute(d,e),o?Fa.addScaledVector(Su,h):Fa.addScaledVector(Su.sub(t),h))}t.add(Fa)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),La.copy(i.boundingSphere),La.applyMatrix4(r),Fs.copy(e.ray).recast(e.near),!(La.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(La,S1)===null||Fs.origin.distanceToSquared(S1)>(e.far-e.near)**2))&&(M1.copy(r).invert(),Fs.copy(e.ray).applyMatrix4(M1),!(i.boundingBox!==null&&Fs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Fs)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=f.length;v<_;v++){const g=f[v],m=o[g.materialIndex],A=Math.max(g.start,p.start),S=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let w=A,B=S;w<B;w+=3){const P=a.getX(w),R=a.getX(w+1),O=a.getX(w+2);s=ka(this,m,e,i,c,h,d,P,R,O),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let g=v,m=_;g<m;g+=3){const A=a.getX(g),S=a.getX(g+1),w=a.getX(g+2);s=ka(this,o,e,i,c,h,d,A,S,w),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=f.length;v<_;v++){const g=f[v],m=o[g.materialIndex],A=Math.max(g.start,p.start),S=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let w=A,B=S;w<B;w+=3){const P=w,R=w+1,O=w+2;s=ka(this,m,e,i,c,h,d,P,R,O),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let g=v,m=_;g<m;g+=3){const A=g,S=g+1,w=g+2;s=ka(this,o,e,i,c,h,d,A,S,w),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};u(Wp,"Mesh");let St=Wp;function IS(n,e,t,i,s,r,o,a){let l;if(e.side===_n?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===yi,a),l===null)return null;Ba.copy(a),Ba.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ba);return c<t.near||c>t.far?null:{distance:c,point:Ba.clone(),object:n}}u(IS,"checkIntersection$1");function ka(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Na),n.getVertexPosition(l,Oa),n.getVertexPosition(c,Ua);const h=IS(n,e,t,i,Na,Oa,Ua,E1);if(h){const d=new D;as.getBarycoord(E1,Na,Oa,Ua,d),s&&(h.uv=as.getInterpolatedAttribute(s,a,l,c,d,new xe)),r&&(h.uv1=as.getInterpolatedAttribute(r,a,l,c,d,new xe)),o&&(h.normal=as.getInterpolatedAttribute(o,a,l,c,d,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new D,materialIndex:0};as.getNormal(Na,Oa,Ua,f.normal),h.face=f,h.barycoord=d}return h}u(ka,"checkGeometryIntersection");const mc=class mc extends Bt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,p=0;v("z","y","x",-1,-1,i,t,e,o,r,0),v("z","y","x",1,-1,i,t,-e,o,r,1),v("x","z","y",1,1,e,i,t,s,o,2),v("x","z","y",1,-1,e,i,-t,s,o,3),v("x","y","z",1,-1,e,t,i,s,r,4),v("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(h,3)),this.setAttribute("uv",new Ft(d,2));function v(_,g,m,A,S,w,B,P,R,O,re){const b=w/R,T=B/O,z=w/2,$=B/2,ie=P/2,ce=R+1,Z=O+1;let se=0,X=0;const Te=new D;for(let we=0;we<Z;we++){const Ae=we*T-$;for(let Ye=0;Ye<ce;Ye++){const Qe=Ye*b-z;Te[_]=Qe*A,Te[g]=Ae*S,Te[m]=ie,c.push(Te.x,Te.y,Te.z),Te[_]=0,Te[g]=0,Te[m]=P>0?1:-1,h.push(Te.x,Te.y,Te.z),d.push(Ye/R),d.push(1-we/O),se+=1}}for(let we=0;we<O;we++)for(let Ae=0;Ae<R;Ae++){const Ye=f+Ae+ce*we,Qe=f+Ae+ce*(we+1),le=f+(Ae+1)+ce*(we+1),ve=f+(Ae+1)+ce*we;l.push(Ye,Qe,ve),l.push(Qe,le,ve),X+=6}a.addGroup(p,X,re),p+=X,f+=se}u(v,"buildPlane")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};u(mc,"BoxGeometry");let zi=mc;function Zr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}u(Zr,"cloneUniforms");function gn(n){const e={};for(let t=0;t<n.length;t++){const i=Zr(n[t]);for(const s in i)e[s]=i[s]}return e}u(gn,"mergeUniforms");function LS(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}u(LS,"cloneUniformsGroups");function Sx(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}u(Sx,"getUnlitUniformColorSpace");const Ni={clone:Zr,merge:gn};var NS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;const $p=class $p extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NS,this.fragmentShader=OS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zr(e.uniforms),this.uniformsGroups=LS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}};u($p,"ShaderMaterial");let Dt=$p;const jp=class jp extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Li}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};u(jp,"Camera");let Fl=jp;const Zi=new D,T1=new xe,w1=new xe,Xp=class Xp extends Fl{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Kr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ro*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kr*2*Math.atan(Math.tan(Ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,t){return this.getViewBounds(e,T1,w1),t.subVectors(w1,T1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ro*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};u(Xp,"PerspectiveCamera");let jt=Xp;const yr=-90,br=1,Yp=class Yp extends Ct{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new jt(yr,br,e,t);s.layers=this.layers,this.add(s);const r=new jt(yr,br,e,t);r.layers=this.layers,this.add(r);const o=new jt(yr,br,e,t);o.layers=this.layers,this.add(o);const a=new jt(yr,br,e,t);a.layers=this.layers,this.add(a);const l=new jt(yr,br,e,t);l.layers=this.layers,this.add(l);const c=new jt(yr,br,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Li)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Il)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}};u(Yp,"CubeCamera");let id=Yp;const qp=class qp extends ln{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Yr,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};u(qp,"CubeTexture");let Bl=qp;const Kp=class Kp extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Bl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new zi(5,5,5),r=new Dt({name:"CubemapFromEquirect",uniforms:Zr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Zt});r.uniforms.tEquirect.value=t;const o=new St(s,r),a=t.minFilter;return t.minFilter===Ii&&(t.minFilter=Fn),new id(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}};u(Kp,"WebGLCubeRenderTarget");let sd=Kp;const Eu=new D,US=new D,FS=new st,Zp=class Zp{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Eu.subVectors(i,t).cross(US.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Eu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||FS.getNormalMatrix(e),s=this.coplanarPoint(Eu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};u(Zp,"Plane");let $n=Zp;const Bs=new In,za=new D,Jp=class Jp{constructor(e=new $n,t=new $n,i=new $n,s=new $n,r=new $n,o=new $n){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Li){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],p=s[8],v=s[9],_=s[10],g=s[11],m=s[12],A=s[13],S=s[14],w=s[15];if(i[0].setComponents(l-r,f-c,g-p,w-m).normalize(),i[1].setComponents(l+r,f+c,g+p,w+m).normalize(),i[2].setComponents(l+o,f+h,g+v,w+A).normalize(),i[3].setComponents(l-o,f-h,g-v,w-A).normalize(),i[4].setComponents(l-a,f-d,g-_,w-S).normalize(),t===Li)i[5].setComponents(l+a,f+d,g+_,w+S).normalize();else if(t===Il)i[5].setComponents(a,d,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bs)}intersectsSprite(e){return Bs.center.set(0,0,0),Bs.radius=.7071067811865476,Bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(za.x=s.normal.x>0?e.max.x:e.min.x,za.y=s.normal.y>0?e.max.y:e.min.y,za.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(za)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};u(Jp,"Frustum");let Zo=Jp;function Ex(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return u(s,"onAnimationFrame"),{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}u(Ex,"WebGLAnimation");function BS(n){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}u(t,"createBuffer");function i(a,l,c){const h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<d.length;p++){const v=d[f],_=d[p];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,v=d.length;p<v;p++){const _=d[p];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}u(i,"updateBuffer");function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}u(s,"get");function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}u(r,"remove");function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return u(o,"update"),{get:s,remove:r,update:o}}u(BS,"WebGLAttributes");const gc=class gc extends Bt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,f=t/l,p=[],v=[],_=[],g=[];for(let m=0;m<h;m++){const A=m*f-o;for(let S=0;S<c;S++){const w=S*d-r;v.push(w,-A,0),_.push(0,0,1),g.push(S/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let A=0;A<a;A++){const S=A+c*m,w=A+c*(m+1),B=A+1+c*(m+1),P=A+1+c*m;p.push(S,w,P),p.push(w,B,P)}this.setIndex(p),this.setAttribute("position",new Ft(v,3)),this.setAttribute("normal",new Ft(_,3)),this.setAttribute("uv",new Ft(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gc(e.width,e.height,e.widthSegments,e.heightSegments)}};u(gc,"PlaneGeometry");let kl=gc;var kS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zS=`#ifdef USE_ALPHAHASH
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
#endif`,VS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,HS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$S=`#ifdef USE_AOMAP
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
#endif`,jS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,XS=`#ifdef USE_BATCHING
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
#endif`,YS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ZS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,JS=`#ifdef USE_IRIDESCENCE
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
#endif`,QS=`#ifdef USE_BUMPMAP
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
#endif`,eE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,aE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lE=`#define PI 3.141592653589793
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
} // validated`,cE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uE=`vec3 transformedNormal = objectNormal;
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
#endif`,hE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mE="gl_FragColor = linearToOutputTexel( gl_FragColor );",gE=`
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
}`,vE=`#ifdef USE_ENVMAP
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
#endif`,_E=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xE=`#ifdef USE_ENVMAP
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
#endif`,yE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bE=`#ifdef USE_ENVMAP
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
#endif`,ME=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,SE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,EE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wE=`#ifdef USE_GRADIENTMAP
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
}`,AE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PE=`uniform bool receiveShadow;
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
#endif`,DE=`#ifdef USE_ENVMAP
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
#endif`,IE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,OE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UE=`PhysicalMaterial material;
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
#endif`,FE=`struct PhysicalMaterial {
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
}`,BE=`
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
#endif`,kE=`#if defined( RE_IndirectDiffuse )
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
#endif`,zE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$E=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,XE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,YE=`#if defined( USE_POINTS_UV )
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
#endif`,qE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eT=`#ifdef USE_MORPHTARGETS
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
#endif`,tT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,iT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aT=`#ifdef USE_NORMALMAP
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
#endif`,lT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_T=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,MT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ST=`float getShadowMask() {
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
}`,ET=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TT=`#ifdef USE_SKINNING
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
#endif`,wT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AT=`#ifdef USE_SKINNING
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
#endif`,CT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,IT=`#ifdef USE_TRANSMISSION
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
#endif`,LT=`#ifdef USE_TRANSMISSION
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
#endif`,NT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kT=`uniform sampler2D t2D;
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
}`,zT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,HT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WT=`#include <common>
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
}`,$T=`#if DEPTH_PACKING == 3200
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
}`,jT=`#define DISTANCE
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
}`,XT=`#define DISTANCE
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
}`,YT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KT=`uniform float scale;
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
}`,ZT=`uniform vec3 diffuse;
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
}`,JT=`#include <common>
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
}`,QT=`uniform vec3 diffuse;
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
}`,ew=`#define LAMBERT
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
}`,tw=`#define LAMBERT
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
}`,nw=`#define MATCAP
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
}`,iw=`#define MATCAP
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
}`,sw=`#define NORMAL
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
}`,rw=`#define NORMAL
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
}`,ow=`#define PHONG
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
}`,aw=`#define PHONG
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
}`,lw=`#define STANDARD
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
}`,cw=`#define STANDARD
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
}`,uw=`#define TOON
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
}`,hw=`#define TOON
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
}`,dw=`uniform float size;
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
}`,fw=`uniform vec3 diffuse;
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
}`,pw=`#include <common>
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
}`,mw=`uniform vec3 color;
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
}`,gw=`uniform float rotation;
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
}`,vw=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:kS,alphahash_pars_fragment:zS,alphamap_fragment:VS,alphamap_pars_fragment:HS,alphatest_fragment:GS,alphatest_pars_fragment:WS,aomap_fragment:$S,aomap_pars_fragment:jS,batching_pars_vertex:XS,batching_vertex:YS,begin_vertex:qS,beginnormal_vertex:KS,bsdfs:ZS,iridescence_fragment:JS,bumpmap_pars_fragment:QS,clipping_planes_fragment:eE,clipping_planes_pars_fragment:tE,clipping_planes_pars_vertex:nE,clipping_planes_vertex:iE,color_fragment:sE,color_pars_fragment:rE,color_pars_vertex:oE,color_vertex:aE,common:lE,cube_uv_reflection_fragment:cE,defaultnormal_vertex:uE,displacementmap_pars_vertex:hE,displacementmap_vertex:dE,emissivemap_fragment:fE,emissivemap_pars_fragment:pE,colorspace_fragment:mE,colorspace_pars_fragment:gE,envmap_fragment:vE,envmap_common_pars_fragment:_E,envmap_pars_fragment:xE,envmap_pars_vertex:yE,envmap_physical_pars_fragment:DE,envmap_vertex:bE,fog_vertex:ME,fog_pars_vertex:SE,fog_fragment:EE,fog_pars_fragment:TE,gradientmap_pars_fragment:wE,lightmap_pars_fragment:AE,lights_lambert_fragment:CE,lights_lambert_pars_fragment:RE,lights_pars_begin:PE,lights_toon_fragment:IE,lights_toon_pars_fragment:LE,lights_phong_fragment:NE,lights_phong_pars_fragment:OE,lights_physical_fragment:UE,lights_physical_pars_fragment:FE,lights_fragment_begin:BE,lights_fragment_maps:kE,lights_fragment_end:zE,logdepthbuf_fragment:VE,logdepthbuf_pars_fragment:HE,logdepthbuf_pars_vertex:GE,logdepthbuf_vertex:WE,map_fragment:$E,map_pars_fragment:jE,map_particle_fragment:XE,map_particle_pars_fragment:YE,metalnessmap_fragment:qE,metalnessmap_pars_fragment:KE,morphinstance_vertex:ZE,morphcolor_vertex:JE,morphnormal_vertex:QE,morphtarget_pars_vertex:eT,morphtarget_vertex:tT,normal_fragment_begin:nT,normal_fragment_maps:iT,normal_pars_fragment:sT,normal_pars_vertex:rT,normal_vertex:oT,normalmap_pars_fragment:aT,clearcoat_normal_fragment_begin:lT,clearcoat_normal_fragment_maps:cT,clearcoat_pars_fragment:uT,iridescence_pars_fragment:hT,opaque_fragment:dT,packing:fT,premultiplied_alpha_fragment:pT,project_vertex:mT,dithering_fragment:gT,dithering_pars_fragment:vT,roughnessmap_fragment:_T,roughnessmap_pars_fragment:xT,shadowmap_pars_fragment:yT,shadowmap_pars_vertex:bT,shadowmap_vertex:MT,shadowmask_pars_fragment:ST,skinbase_vertex:ET,skinning_pars_vertex:TT,skinning_vertex:wT,skinnormal_vertex:AT,specularmap_fragment:CT,specularmap_pars_fragment:RT,tonemapping_fragment:PT,tonemapping_pars_fragment:DT,transmission_fragment:IT,transmission_pars_fragment:LT,uv_pars_fragment:NT,uv_pars_vertex:OT,uv_vertex:UT,worldpos_vertex:FT,background_vert:BT,background_frag:kT,backgroundCube_vert:zT,backgroundCube_frag:VT,cube_vert:HT,cube_frag:GT,depth_vert:WT,depth_frag:$T,distanceRGBA_vert:jT,distanceRGBA_frag:XT,equirect_vert:YT,equirect_frag:qT,linedashed_vert:KT,linedashed_frag:ZT,meshbasic_vert:JT,meshbasic_frag:QT,meshlambert_vert:ew,meshlambert_frag:tw,meshmatcap_vert:nw,meshmatcap_frag:iw,meshnormal_vert:sw,meshnormal_frag:rw,meshphong_vert:ow,meshphong_frag:aw,meshphysical_vert:lw,meshphysical_frag:cw,meshtoon_vert:uw,meshtoon_frag:hw,points_vert:dw,points_frag:fw,shadow_vert:pw,shadow_frag:mw,sprite_vert:gw,sprite_frag:vw},Se={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Tn={basic:{uniforms:gn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:gn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new De(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:gn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:gn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:gn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new De(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:gn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:gn([Se.points,Se.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:gn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:gn([Se.common,Se.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:gn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:gn([Se.sprite,Se.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:gn([Se.common,Se.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:gn([Se.lights,Se.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Tn.physical={uniforms:gn([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Va={r:0,b:0,g:0},ks=new bi,_w=new Ke;function xw(n,e,t,i,s,r,o){const a=new De(0);let l=r===!0?0:1,c,h,d=null,f=0,p=null;function v(A){let S=A.isScene===!0?A.background:null;return S&&S.isTexture&&(S=(A.backgroundBlurriness>0?t:e).get(S)),S}u(v,"getBackground");function _(A){let S=!1;const w=v(A);w===null?m(a,l):w&&w.isColor&&(m(w,1),S=!0);const B=n.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,o):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}u(_,"render");function g(A,S){const w=v(S);w&&(w.isCubeTexture||w.mapping===Fc)?(h===void 0&&(h=new St(new zi(1,1,1),new Dt({name:"BackgroundCubeMaterial",uniforms:Zr(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ks.copy(S.backgroundRotation),ks.x*=-1,ks.y*=-1,ks.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ks.y*=-1,ks.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_w.makeRotationFromEuler(ks)),h.material.toneMapped=dt.getTransfer(w.colorSpace)!==Tt,(d!==w||f!==w.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=w,f=w.version,p=n.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new St(new kl(2,2),new Dt({name:"BackgroundMaterial",uniforms:Zr(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=dt.getTransfer(w.colorSpace)!==Tt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||f!==w.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=w,f=w.version,p=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}u(g,"addToRenderList");function m(A,S){A.getRGB(Va,Sx(n)),i.buffers.color.setClear(Va.r,Va.g,Va.b,S,o)}return u(m,"setClear"),{getClearColor:function(){return a},setClearColor:function(A,S=1){a.set(A),l=S,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,m(a,l)},render:_,addToRenderList:g}}u(xw,"WebGLBackground");function yw(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(b,T,z,$,ie){let ce=!1;const Z=d($,z,T);r!==Z&&(r=Z,c(r.object)),ce=p(b,$,z,ie),ce&&v(b,$,z,ie),ie!==null&&e.update(ie,n.ELEMENT_ARRAY_BUFFER),(ce||o)&&(o=!1,w(b,T,z,$),ie!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}u(a,"setup");function l(){return n.createVertexArray()}u(l,"createVertexArrayObject");function c(b){return n.bindVertexArray(b)}u(c,"bindVertexArrayObject");function h(b){return n.deleteVertexArray(b)}u(h,"deleteVertexArrayObject");function d(b,T,z){const $=z.wireframe===!0;let ie=i[b.id];ie===void 0&&(ie={},i[b.id]=ie);let ce=ie[T.id];ce===void 0&&(ce={},ie[T.id]=ce);let Z=ce[$];return Z===void 0&&(Z=f(l()),ce[$]=Z),Z}u(d,"getBindingState");function f(b){const T=[],z=[],$=[];for(let ie=0;ie<t;ie++)T[ie]=0,z[ie]=0,$[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:z,attributeDivisors:$,object:b,attributes:{},index:null}}u(f,"createBindingState");function p(b,T,z,$){const ie=r.attributes,ce=T.attributes;let Z=0;const se=z.getAttributes();for(const X in se)if(se[X].location>=0){const we=ie[X];let Ae=ce[X];if(Ae===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(Ae=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(Ae=b.instanceColor)),we===void 0||we.attribute!==Ae||Ae&&we.data!==Ae.data)return!0;Z++}return r.attributesNum!==Z||r.index!==$}u(p,"needsUpdate");function v(b,T,z,$){const ie={},ce=T.attributes;let Z=0;const se=z.getAttributes();for(const X in se)if(se[X].location>=0){let we=ce[X];we===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(we=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(we=b.instanceColor));const Ae={};Ae.attribute=we,we&&we.data&&(Ae.data=we.data),ie[X]=Ae,Z++}r.attributes=ie,r.attributesNum=Z,r.index=$}u(v,"saveCache");function _(){const b=r.newAttributes;for(let T=0,z=b.length;T<z;T++)b[T]=0}u(_,"initAttributes");function g(b){m(b,0)}u(g,"enableAttribute");function m(b,T){const z=r.newAttributes,$=r.enabledAttributes,ie=r.attributeDivisors;z[b]=1,$[b]===0&&(n.enableVertexAttribArray(b),$[b]=1),ie[b]!==T&&(n.vertexAttribDivisor(b,T),ie[b]=T)}u(m,"enableAttributeAndDivisor");function A(){const b=r.newAttributes,T=r.enabledAttributes;for(let z=0,$=T.length;z<$;z++)T[z]!==b[z]&&(n.disableVertexAttribArray(z),T[z]=0)}u(A,"disableUnusedAttributes");function S(b,T,z,$,ie,ce,Z){Z===!0?n.vertexAttribIPointer(b,T,z,ie,ce):n.vertexAttribPointer(b,T,z,$,ie,ce)}u(S,"vertexAttribPointer");function w(b,T,z,$){_();const ie=$.attributes,ce=z.getAttributes(),Z=T.defaultAttributeValues;for(const se in ce){const X=ce[se];if(X.location>=0){let Te=ie[se];if(Te===void 0&&(se==="instanceMatrix"&&b.instanceMatrix&&(Te=b.instanceMatrix),se==="instanceColor"&&b.instanceColor&&(Te=b.instanceColor)),Te!==void 0){const we=Te.normalized,Ae=Te.itemSize,Ye=e.get(Te);if(Ye===void 0)continue;const Qe=Ye.buffer,le=Ye.type,ve=Ye.bytesPerElement,ye=le===n.INT||le===n.UNSIGNED_INT||Te.gpuType===qf;if(Te.isInterleavedBufferAttribute){const Me=Te.data,je=Me.stride,$e=Te.offset;if(Me.isInstancedInterleavedBuffer){for(let et=0;et<X.locationSize;et++)m(X.location+et,Me.meshPerAttribute);b.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let et=0;et<X.locationSize;et++)g(X.location+et);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let et=0;et<X.locationSize;et++)S(X.location+et,Ae/X.locationSize,le,we,je*ve,($e+Ae/X.locationSize*et)*ve,ye)}else{if(Te.isInstancedBufferAttribute){for(let Me=0;Me<X.locationSize;Me++)m(X.location+Me,Te.meshPerAttribute);b.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let Me=0;Me<X.locationSize;Me++)g(X.location+Me);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let Me=0;Me<X.locationSize;Me++)S(X.location+Me,Ae/X.locationSize,le,we,Ae*ve,Ae/X.locationSize*Me*ve,ye)}}else if(Z!==void 0){const we=Z[se];if(we!==void 0)switch(we.length){case 2:n.vertexAttrib2fv(X.location,we);break;case 3:n.vertexAttrib3fv(X.location,we);break;case 4:n.vertexAttrib4fv(X.location,we);break;default:n.vertexAttrib1fv(X.location,we)}}}}A()}u(w,"setupVertexAttributes");function B(){O();for(const b in i){const T=i[b];for(const z in T){const $=T[z];for(const ie in $)h($[ie].object),delete $[ie];delete T[z]}delete i[b]}}u(B,"dispose");function P(b){if(i[b.id]===void 0)return;const T=i[b.id];for(const z in T){const $=T[z];for(const ie in $)h($[ie].object),delete $[ie];delete T[z]}delete i[b.id]}u(P,"releaseStatesOfGeometry");function R(b){for(const T in i){const z=i[T];if(z[b.id]===void 0)continue;const $=z[b.id];for(const ie in $)h($[ie].object),delete $[ie];delete z[b.id]}}u(R,"releaseStatesOfProgram");function O(){re(),o=!0,r!==s&&(r=s,c(r.object))}u(O,"reset");function re(){s.geometry=null,s.program=null,s.wireframe=!1}return u(re,"resetDefaultState"),{setup:a,reset:O,resetDefaultState:re,dispose:B,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:g,disableUnusedAttributes:A}}u(yw,"WebGLBindingStates");function bw(n,e,t){let i;function s(c){i=c}u(s,"setMode");function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}u(r,"render");function o(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}u(o,"renderInstances");function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let v=0;v<d;v++)p+=h[v];t.update(p,i,1)}u(a,"renderMultiDraw");function l(c,h,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],h[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let v=0;for(let _=0;_<d;_++)v+=h[_];for(let _=0;_<f.length;_++)t.update(v,i,f[_])}}u(l,"renderMultiDrawInstances"),this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}u(bw,"WebGLBufferRenderer");function Mw(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}u(r,"getMaxAnisotropy");function o(R){return!(R!==Xn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}u(o,"textureFormatReadable");function a(R){const O=R===En&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Bi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ai&&!O)}u(a,"textureTypeReadable");function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}u(l,"getMaxPrecision");let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const R=e.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),B=v>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:A,maxVaryings:S,maxFragmentUniforms:w,vertexTextures:B,maxSamples:P}}u(Mw,"WebGLCapabilities");function Sw(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new $n,a=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){const v=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,m=n.get(d);if(!s||v===null||v.length===0||r&&!g)r?h(null):c();else{const A=r?0:i,S=A*4;let w=m.clippingState||null;l.value=w,w=h(v,f,S,p);for(let B=0;B!==S;++B)w[B]=t[B];m.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}u(c,"resetGlobalState");function h(d,f,p,v){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=l.value,v!==!0||g===null){const m=p+_*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(g===null||g.length<m)&&(g=new Float32Array(m));for(let S=0,w=p;S!==_;++S,w+=4)o.copy(d[S]).applyMatrix4(A,a),o.normal.toArray(g,w),g[w+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}u(h,"projectPlanes")}u(Sw,"WebGLClipping");function Ew(n){let e=new WeakMap;function t(o,a){return a===Eh?o.mapping=Yr:a===Th&&(o.mapping=qr),o}u(t,"mapTextureMapping");function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Eh||a===Th)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new sd(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}u(i,"get");function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}u(s,"onTextureDispose");function r(){e=new WeakMap}return u(r,"dispose"),{get:i,dispose:r}}u(Ew,"WebGLCubeMaps");const Qp=class Qp extends Fl{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};u(Qp,"OrthographicCamera");let nr=Qp;const Lr=4,A1=[.125,.215,.35,.446,.526,.582],js=20,Tu=new nr,C1=new De;let wu=null,Au=0,Cu=0,Ru=!1;const Gs=(1+Math.sqrt(5))/2,Mr=1/Gs,R1=[new D(-Gs,Mr,0),new D(Gs,Mr,0),new D(-Mr,0,Gs),new D(Mr,0,Gs),new D(0,Gs,-Mr),new D(0,Gs,Mr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],em=class em{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){wu=this._renderer.getRenderTarget(),Au=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel(),Ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=I1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=D1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wu,Au,Cu),this._renderer.xr.enabled=Ru,e.scissorTest=!1,Ha(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yr||e.mapping===qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wu=this._renderer.getRenderTarget(),Au=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel(),Ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:En,format:Xn,colorSpace:an,depthBuffer:!1},s=P1(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=P1(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tw(r)),this._blurMaterial=ww(r,e,t)}return s}_compileMaterial(e){const t=new St(this._lodPlanes[0],e);this._renderer.compile(t,Tu)}_sceneToCubeUV(e,t,i,s){const a=new jt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(C1),h.toneMapping=fs,h.autoClear=!1;const p=new wn({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),v=new St(new zi,p);let _=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,_=!0):(p.color.copy(C1),_=!0);for(let m=0;m<6;m++){const A=m%3;A===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):A===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const S=this._cubeSize;Ha(s,A*S,m>2?S:0,S,S),h.setRenderTarget(s),_&&h.render(v,a),h.render(e,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Yr||e.mapping===qr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=I1()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=D1());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new St(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ha(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Tu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=R1[(s-r-1)%R1.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new St(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*js-1),_=r/v,g=isFinite(r)?1+Math.floor(h*_):js;g>js&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${js}`);const m=[];let A=0;for(let R=0;R<js;++R){const O=R/_,re=Math.exp(-O*O/2);m.push(re),R===0?A+=re:R<g&&(A+=2*re)}for(let R=0;R<m.length;R++)m[R]=m[R]/A;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=v,f.mipInt.value=S-i;const w=this._sizeLods[s],B=3*w*(s>S-Lr?s-S+Lr:0),P=4*(this._cubeSize-w);Ha(t,B,P,3*w,2*w),l.setRenderTarget(t),l.render(d,Tu)}};u(em,"PMREMGenerator");let zl=em;function Tw(n){const e=[],t=[],i=[];let s=n;const r=n-Lr+1+A1.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Lr?l=A1[o-n+Lr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,v=6,_=3,g=2,m=1,A=new Float32Array(_*v*p),S=new Float32Array(g*v*p),w=new Float32Array(m*v*p);for(let P=0;P<p;P++){const R=P%3*2/3-1,O=P>2?0:-1,re=[R,O,0,R+2/3,O,0,R+2/3,O+1,0,R,O,0,R+2/3,O+1,0,R,O+1,0];A.set(re,_*v*P),S.set(f,g*v*P);const b=[P,P,P,P,P,P];w.set(b,m*v*P)}const B=new Bt;B.setAttribute("position",new Nt(A,_)),B.setAttribute("uv",new Nt(S,g)),B.setAttribute("faceIndex",new Nt(w,m)),e.push(B),s>Lr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}u(Tw,"_createPlanes");function P1(n,e,t){const i=new $t(n,e,t);return i.texture.mapping=Fc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}u(P1,"_createRenderTarget");function Ha(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}u(Ha,"_setViewport");function ww(n,e,t){const i=new Float32Array(js),s=new D(0,1,0);return new Dt({name:"SphericalGaussianBlur",defines:{n:js,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:op(),fragmentShader:`

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
		`,blending:Zt,depthTest:!1,depthWrite:!1})}u(ww,"_getBlurShader");function D1(){return new Dt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:op(),fragmentShader:`

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
		`,blending:Zt,depthTest:!1,depthWrite:!1})}u(D1,"_getEquirectMaterial");function I1(){return new Dt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:op(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zt,depthTest:!1,depthWrite:!1})}u(I1,"_getCubemapMaterial");function op(){return`

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
	`}u(op,"_getCommonVertexShader");function Aw(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Eh||l===Th,h=l===Yr||l===qr;if(c||h){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new zl(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new zl(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}u(i,"get");function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}u(s,"isCubeTextureComplete");function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}u(r,"onTextureDispose");function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return u(o,"dispose"),{get:i,dispose:o}}u(Aw,"WebGLCubeUVMaps");function Cw(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return u(t,"getExtension"),{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&vl("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}u(Cw,"WebGLExtensions");function Rw(n,e,t,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const _=f.morphAttributes[v];for(let g=0,m=_.length;g<m;g++)e.remove(_[g])}f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}u(o,"onGeometryDispose");function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}u(a,"get");function l(d){const f=d.attributes;for(const v in f)e.update(f[v],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const _=p[v];for(let g=0,m=_.length;g<m;g++)e.update(_[g],n.ARRAY_BUFFER)}}u(l,"update");function c(d){const f=[],p=d.index,v=d.attributes.position;let _=0;if(p!==null){const A=p.array;_=p.version;for(let S=0,w=A.length;S<w;S+=3){const B=A[S+0],P=A[S+1],R=A[S+2];f.push(B,P,P,R,R,B)}}else if(v!==void 0){const A=v.array;_=v.version;for(let S=0,w=A.length/3-1;S<w;S+=3){const B=S+0,P=S+1,R=S+2;f.push(B,P,P,R,R,B)}}else return;const g=new(bx(f)?Ul:Ol)(f,1);g.version=_;const m=r.get(d);m&&e.remove(m),r.set(d,g)}u(c,"updateWireframeAttribute");function h(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return u(h,"getWireframeAttribute"),{get:a,update:l,getWireframeAttribute:h}}u(Rw,"WebGLGeometries");function Pw(n,e,t){let i;function s(f){i=f}u(s,"setMode");let r,o;function a(f){r=f.type,o=f.bytesPerElement}u(a,"setIndex");function l(f,p){n.drawElements(i,p,r,f*o),t.update(p,i,1)}u(l,"render");function c(f,p,v){v!==0&&(n.drawElementsInstanced(i,p,r,f*o,v),t.update(p,i,v))}u(c,"renderInstances");function h(f,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,v);let g=0;for(let m=0;m<v;m++)g+=p[m];t.update(g,i,1)}u(h,"renderMultiDraw");function d(f,p,v,_){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/o,p[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,_,0,v);let m=0;for(let A=0;A<v;A++)m+=p[A];for(let A=0;A<_.length;A++)t.update(m,i,_[A])}}u(d,"renderMultiDrawInstances"),this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}u(Pw,"WebGLIndexedBufferRenderer");function Dw(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}u(i,"update");function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return u(s,"reset"),{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}u(Dw,"WebGLInfo");function Iw(n,e,t){const i=new WeakMap,s=new ot;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let b=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var p=b;u(b,"disposeTexture"),f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let w=0;v===!0&&(w=1),_===!0&&(w=2),g===!0&&(w=3);let B=a.attributes.position.count*w,P=1;B>e.maxTextureSize&&(P=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const R=new Float32Array(B*P*4*d),O=new Nl(R,B,P,d);O.type=ai,O.needsUpdate=!0;const re=w*4;for(let T=0;T<d;T++){const z=m[T],$=A[T],ie=S[T],ce=B*P*4*T;for(let Z=0;Z<z.count;Z++){const se=Z*re;v===!0&&(s.fromBufferAttribute(z,Z),R[ce+se+0]=s.x,R[ce+se+1]=s.y,R[ce+se+2]=s.z,R[ce+se+3]=0),_===!0&&(s.fromBufferAttribute($,Z),R[ce+se+4]=s.x,R[ce+se+5]=s.y,R[ce+se+6]=s.z,R[ce+se+7]=0),g===!0&&(s.fromBufferAttribute(ie,Z),R[ce+se+8]=s.x,R[ce+se+9]=s.y,R[ce+se+10]=s.z,R[ce+se+11]=ie.itemSize===4?s.w:1)}}f={count:d,texture:O,size:new xe(B,P)},i.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const _=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return u(r,"update"),{update:r}}u(Iw,"WebGLMorphtargets");function Lw(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}u(r,"update");function o(){s=new WeakMap}u(o,"dispose");function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return u(a,"onInstancedMeshDispose"),{update:r,dispose:o}}u(Lw,"WebGLObjects");const tm=class tm extends ln{constructor(e,t,i,s,r,o,a,l,c,h=Gr){if(h!==Gr&&h!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Gr&&(i=Qs),i===void 0&&h===tr&&(i=er),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};u(tm,"DepthTexture");let Jo=tm;const Tx=new ln,L1=new Jo(1,1),wx=new Nl,Ax=new nd,Cx=new Bl,N1=[],O1=[],U1=new Float32Array(16),F1=new Float32Array(9),B1=new Float32Array(4);function to(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=N1[s];if(r===void 0&&(r=new Float32Array(s),N1[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}u(to,"flatten");function Yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}u(Yt,"arraysEqual");function qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}u(qt,"copyArray");function kc(n,e){let t=O1[e];t===void 0&&(t=new Int32Array(e),O1[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}u(kc,"allocTexUnits");function Nw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}u(Nw,"setValueV1f");function Ow(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2fv(this.addr,e),qt(t,e)}}u(Ow,"setValueV2f");function Uw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;n.uniform3fv(this.addr,e),qt(t,e)}}u(Uw,"setValueV3f");function Fw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4fv(this.addr,e),qt(t,e)}}u(Fw,"setValueV4f");function Bw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Yt(t,i))return;B1.set(i),n.uniformMatrix2fv(this.addr,!1,B1),qt(t,i)}}u(Bw,"setValueM2");function kw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Yt(t,i))return;F1.set(i),n.uniformMatrix3fv(this.addr,!1,F1),qt(t,i)}}u(kw,"setValueM3");function zw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Yt(t,i))return;U1.set(i),n.uniformMatrix4fv(this.addr,!1,U1),qt(t,i)}}u(zw,"setValueM4");function Vw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}u(Vw,"setValueV1i");function Hw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2iv(this.addr,e),qt(t,e)}}u(Hw,"setValueV2i");function Gw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3iv(this.addr,e),qt(t,e)}}u(Gw,"setValueV3i");function Ww(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4iv(this.addr,e),qt(t,e)}}u(Ww,"setValueV4i");function $w(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}u($w,"setValueV1ui");function jw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2uiv(this.addr,e),qt(t,e)}}u(jw,"setValueV2ui");function Xw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3uiv(this.addr,e),qt(t,e)}}u(Xw,"setValueV3ui");function Yw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4uiv(this.addr,e),qt(t,e)}}u(Yw,"setValueV4ui");function qw(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(L1.compareFunction=yx,r=L1):r=Tx,t.setTexture2D(e||r,s)}u(qw,"setValueT1");function Kw(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Ax,s)}u(Kw,"setValueT3D1");function Zw(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Cx,s)}u(Zw,"setValueT6");function Jw(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||wx,s)}u(Jw,"setValueT2DArray1");function Qw(n){switch(n){case 5126:return Nw;case 35664:return Ow;case 35665:return Uw;case 35666:return Fw;case 35674:return Bw;case 35675:return kw;case 35676:return zw;case 5124:case 35670:return Vw;case 35667:case 35671:return Hw;case 35668:case 35672:return Gw;case 35669:case 35673:return Ww;case 5125:return $w;case 36294:return jw;case 36295:return Xw;case 36296:return Yw;case 35678:case 36198:case 36298:case 36306:case 35682:return qw;case 35679:case 36299:case 36307:return Kw;case 35680:case 36300:case 36308:case 36293:return Zw;case 36289:case 36303:case 36311:case 36292:return Jw}}u(Qw,"getSingularSetter");function eA(n,e){n.uniform1fv(this.addr,e)}u(eA,"setValueV1fArray");function tA(n,e){const t=to(e,this.size,2);n.uniform2fv(this.addr,t)}u(tA,"setValueV2fArray");function nA(n,e){const t=to(e,this.size,3);n.uniform3fv(this.addr,t)}u(nA,"setValueV3fArray");function iA(n,e){const t=to(e,this.size,4);n.uniform4fv(this.addr,t)}u(iA,"setValueV4fArray");function sA(n,e){const t=to(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}u(sA,"setValueM2Array");function rA(n,e){const t=to(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}u(rA,"setValueM3Array");function oA(n,e){const t=to(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}u(oA,"setValueM4Array");function aA(n,e){n.uniform1iv(this.addr,e)}u(aA,"setValueV1iArray");function lA(n,e){n.uniform2iv(this.addr,e)}u(lA,"setValueV2iArray");function cA(n,e){n.uniform3iv(this.addr,e)}u(cA,"setValueV3iArray");function uA(n,e){n.uniform4iv(this.addr,e)}u(uA,"setValueV4iArray");function hA(n,e){n.uniform1uiv(this.addr,e)}u(hA,"setValueV1uiArray");function dA(n,e){n.uniform2uiv(this.addr,e)}u(dA,"setValueV2uiArray");function fA(n,e){n.uniform3uiv(this.addr,e)}u(fA,"setValueV3uiArray");function pA(n,e){n.uniform4uiv(this.addr,e)}u(pA,"setValueV4uiArray");function mA(n,e,t){const i=this.cache,s=e.length,r=kc(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Tx,r[o])}u(mA,"setValueT1Array");function gA(n,e,t){const i=this.cache,s=e.length,r=kc(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Ax,r[o])}u(gA,"setValueT3DArray");function vA(n,e,t){const i=this.cache,s=e.length,r=kc(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Cx,r[o])}u(vA,"setValueT6Array");function _A(n,e,t){const i=this.cache,s=e.length,r=kc(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||wx,r[o])}u(_A,"setValueT2DArrayArray");function xA(n){switch(n){case 5126:return eA;case 35664:return tA;case 35665:return nA;case 35666:return iA;case 35674:return sA;case 35675:return rA;case 35676:return oA;case 5124:case 35670:return aA;case 35667:case 35671:return lA;case 35668:case 35672:return cA;case 35669:case 35673:return uA;case 5125:return hA;case 36294:return dA;case 36295:return fA;case 36296:return pA;case 35678:case 36198:case 36298:case 36306:case 35682:return mA;case 35679:case 36299:case 36307:return gA;case 35680:case 36300:case 36308:case 36293:return vA;case 36289:case 36303:case 36311:case 36292:return _A}}u(xA,"getPureArraySetter");const nm=class nm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Qw(t.type)}};u(nm,"SingleUniform");let rd=nm;const im=class im{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xA(t.type)}};u(im,"PureArrayUniform");let od=im;const sm=class sm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}};u(sm,"StructuredUniform");let ad=sm;const Pu=/(\w+)(\])?(\[|\.)?/g;function k1(n,e){n.seq.push(e),n.map[e.id]=e}u(k1,"addUniform");function yA(n,e,t){const i=n.name,s=i.length;for(Pu.lastIndex=0;;){const r=Pu.exec(i),o=Pu.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){k1(t,c===void 0?new rd(a,n,e):new od(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new ad(a),k1(t,d)),t=d}}}u(yA,"parseUniform");const rm=class rm{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);yA(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}};u(rm,"WebGLUniforms");let $r=rm;function z1(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}u(z1,"WebGLShader");const bA=37297;let MA=0;function SA(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}u(SA,"handleSource");function EA(n){const e=dt.getPrimaries(dt.workingColorSpace),t=dt.getPrimaries(n);let i;switch(e===t?i="":e===Dl&&t===Pl?i="LinearDisplayP3ToLinearSRGB":e===Pl&&t===Dl&&(i="LinearSRGBToLinearDisplayP3"),n){case an:case Bc:return[i,"LinearTransferOETF"];case dn:case ip:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}u(EA,"getEncodingComponents");function V1(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+SA(n.getShaderSource(e),o)}else return s}u(V1,"getShaderErrors");function TA(n,e){const t=EA(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}u(TA,"getTexelEncodingFunction");function wA(n,e){let t;switch(e){case OM:t="Linear";break;case UM:t="Reinhard";break;case FM:t="Cineon";break;case BM:t="ACESFilmic";break;case zM:t="AgX";break;case VM:t="Neutral";break;case kM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}u(wA,"getToneMappingFunction");const Ga=new D;function AA(){dt.getLuminanceCoefficients(Ga);const n=Ga.x.toFixed(4),e=Ga.y.toFixed(4),t=Ga.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}u(AA,"getLuminanceFunction");function CA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}u(CA,"generateVertexExtensions");function RA(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}u(RA,"generateDefines");function PA(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}u(PA,"fetchAttributeLocations");function bo(n){return n!==""}u(bo,"filterEmptyLine");function H1(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}u(H1,"replaceLightNums");function G1(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}u(G1,"replaceClippingPlaneNums");const DA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ld(n){return n.replace(DA,LA)}u(ld,"resolveIncludes");const IA=new Map;function LA(n,e){let t=it[e];if(t===void 0){const i=IA.get(e);if(i!==void 0)t=it[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ld(t)}u(LA,"includeReplacer");const NA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function W1(n){return n.replace(NA,OA)}u(W1,"unrollLoops");function OA(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}u(OA,"loopReplacer");function $1(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}u($1,"generatePrecision");function UA(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ix?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===_M?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}u(UA,"generateShadowMapTypeDefine");function FA(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Yr:case qr:e="ENVMAP_TYPE_CUBE";break;case Fc:e="ENVMAP_TYPE_CUBE_UV";break}return e}u(FA,"generateEnvMapTypeDefine");function BA(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case qr:e="ENVMAP_MODE_REFRACTION";break}return e}u(BA,"generateEnvMapModeDefine");function kA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ox:e="ENVMAP_BLENDING_MULTIPLY";break;case LM:e="ENVMAP_BLENDING_MIX";break;case NM:e="ENVMAP_BLENDING_ADD";break}return e}u(kA,"generateEnvMapBlendingDefine");function zA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}u(zA,"generateCubeUVSize");function VA(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=UA(t),c=FA(t),h=BA(t),d=kA(t),f=zA(t),p=CA(t),v=RA(r),_=s.createProgram();let g,m,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(bo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(bo).join(`
`),m.length>0&&(m+=`
`)):(g=[$1(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),m=[$1(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fs?"#define TONE_MAPPING":"",t.toneMapping!==fs?it.tonemapping_pars_fragment:"",t.toneMapping!==fs?wA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,TA("linearToOutputTexel",t.outputColorSpace),AA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bo).join(`
`)),o=ld(o),o=H1(o,t),o=G1(o,t),a=ld(a),a=H1(a,t),a=G1(a,t),o=W1(o),a=W1(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===l1?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===l1?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=A+g+o,w=A+m+a,B=z1(s,s.VERTEX_SHADER,S),P=z1(s,s.FRAGMENT_SHADER,w);s.attachShader(_,B),s.attachShader(_,P),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(T){if(n.debug.checkShaderErrors){const z=s.getProgramInfoLog(_).trim(),$=s.getShaderInfoLog(B).trim(),ie=s.getShaderInfoLog(P).trim();let ce=!0,Z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ce=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,B,P);else{const se=V1(s,B,"vertex"),X=V1(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+z+`
`+se+`
`+X)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):($===""||ie==="")&&(Z=!1);Z&&(T.diagnostics={runnable:ce,programLog:z,vertexShader:{log:$,prefix:g},fragmentShader:{log:ie,prefix:m}})}s.deleteShader(B),s.deleteShader(P),O=new $r(s,_),re=PA(s,_)}u(R,"onFirstUse");let O;this.getUniforms=function(){return O===void 0&&R(this),O};let re;this.getAttributes=function(){return re===void 0&&R(this),re};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,bA)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=MA++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=B,this.fragmentShader=P,this}u(VA,"WebGLProgram");let HA=0;const om=class om{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ud(e),t.set(e,i)),i}};u(om,"WebGLShaderCache");let cd=om;const am=class am{constructor(e){this.id=HA++,this.code=e,this.usedTimes=0}};u(am,"WebGLShaderStage");let ud=am;function GA(n,e,t,i,s,r,o){const a=new Ko,l=new cd,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,p=s.vertexTextures;let v=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return c.add(b),b===0?"uv":`uv${b}`}u(g,"getChannel");function m(b,T,z,$,ie){const ce=$.fog,Z=ie.geometry,se=b.isMeshStandardMaterial?$.environment:null,X=(b.isMeshStandardMaterial?t:e).get(b.envMap||se),Te=X&&X.mapping===Fc?X.image.height:null,we=_[b.type];b.precision!==null&&(v=s.getMaxPrecision(b.precision),v!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",v,"instead."));const Ae=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ye=Ae!==void 0?Ae.length:0;let Qe=0;Z.morphAttributes.position!==void 0&&(Qe=1),Z.morphAttributes.normal!==void 0&&(Qe=2),Z.morphAttributes.color!==void 0&&(Qe=3);let le,ve,ye,Me;if(we){const Rt=Tn[we];le=Rt.vertexShader,ve=Rt.fragmentShader}else le=b.vertexShader,ve=b.fragmentShader,l.update(b),ye=l.getVertexShaderID(b),Me=l.getFragmentShaderID(b);const je=n.getRenderTarget(),$e=ie.isInstancedMesh===!0,et=ie.isBatchedMesh===!0,ut=!!b.map,rt=!!b.matcap,x=!!X,k=!!b.aoMap,Y=!!b.lightMap,ne=!!b.bumpMap,q=!!b.normalMap,oe=!!b.displacementMap,ae=!!b.emissiveMap,E=!!b.metalnessMap,y=!!b.roughnessMap,I=b.anisotropy>0,H=b.clearcoat>0,J=b.dispersion>0,j=b.iridescence>0,pe=b.sheen>0,fe=b.transmission>0,ge=I&&!!b.anisotropyMap,Fe=H&&!!b.clearcoatMap,me=H&&!!b.clearcoatNormalMap,be=H&&!!b.clearcoatRoughnessMap,Ge=j&&!!b.iridescenceMap,We=j&&!!b.iridescenceThicknessMap,Re=pe&&!!b.sheenColorMap,nt=pe&&!!b.sheenRoughnessMap,ke=!!b.specularMap,F=!!b.specularColorMap,M=!!b.specularIntensityMap,L=fe&&!!b.transmissionMap,N=fe&&!!b.thicknessMap,V=!!b.gradientMap,ee=!!b.alphaMap,de=b.alphaTest>0,Ce=!!b.alphaHash,Le=!!b.extensions;let Ne=fs;b.toneMapped&&(je===null||je.isXRRenderTarget===!0)&&(Ne=n.toneMapping);const Ie={shaderID:we,shaderType:b.type,shaderName:b.name,vertexShader:le,fragmentShader:ve,defines:b.defines,customVertexShaderID:ye,customFragmentShaderID:Me,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:v,batching:et,batchingColor:et&&ie._colorsTexture!==null,instancing:$e,instancingColor:$e&&ie.instanceColor!==null,instancingMorph:$e&&ie.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:je===null?n.outputColorSpace:je.isXRRenderTarget===!0?je.texture.colorSpace:an,alphaToCoverage:!!b.alphaToCoverage,map:ut,matcap:rt,envMap:x,envMapMode:x&&X.mapping,envMapCubeUVHeight:Te,aoMap:k,lightMap:Y,bumpMap:ne,normalMap:q,displacementMap:p&&oe,emissiveMap:ae,normalMapObjectSpace:q&&b.normalMapType===jM,normalMapTangentSpace:q&&b.normalMapType===np,metalnessMap:E,roughnessMap:y,anisotropy:I,anisotropyMap:ge,clearcoat:H,clearcoatMap:Fe,clearcoatNormalMap:me,clearcoatRoughnessMap:be,dispersion:J,iridescence:j,iridescenceMap:Ge,iridescenceThicknessMap:We,sheen:pe,sheenColorMap:Re,sheenRoughnessMap:nt,specularMap:ke,specularColorMap:F,specularIntensityMap:M,transmission:fe,transmissionMap:L,thicknessMap:N,gradientMap:V,opaque:b.transparent===!1&&b.blending===Hr&&b.alphaToCoverage===!1,alphaMap:ee,alphaTest:de,alphaHash:Ce,combine:b.combine,mapUv:ut&&g(b.map.channel),aoMapUv:k&&g(b.aoMap.channel),lightMapUv:Y&&g(b.lightMap.channel),bumpMapUv:ne&&g(b.bumpMap.channel),normalMapUv:q&&g(b.normalMap.channel),displacementMapUv:oe&&g(b.displacementMap.channel),emissiveMapUv:ae&&g(b.emissiveMap.channel),metalnessMapUv:E&&g(b.metalnessMap.channel),roughnessMapUv:y&&g(b.roughnessMap.channel),anisotropyMapUv:ge&&g(b.anisotropyMap.channel),clearcoatMapUv:Fe&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:me&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ge&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:We&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:nt&&g(b.sheenRoughnessMap.channel),specularMapUv:ke&&g(b.specularMap.channel),specularColorMapUv:F&&g(b.specularColorMap.channel),specularIntensityMapUv:M&&g(b.specularIntensityMap.channel),transmissionMapUv:L&&g(b.transmissionMap.channel),thicknessMapUv:N&&g(b.thicknessMap.channel),alphaMapUv:ee&&g(b.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(q||I),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:ie.isPoints===!0&&!!Z.attributes.uv&&(ut||ee),fog:!!ce,useFog:b.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:ie.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Ye,morphTextureStride:Qe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ne,decodeVideoTexture:ut&&b.map.isVideoTexture===!0&&dt.getTransfer(b.map.colorSpace)===Tt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===vn,flipSided:b.side===_n,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Le&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&b.extensions.multiDraw===!0||et)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}u(m,"getParameters");function A(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const z in b.defines)T.push(z),T.push(b.defines[z]);return b.isRawShaderMaterial===!1&&(S(T,b),w(T,b),T.push(n.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}u(A,"getProgramCacheKey");function S(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}u(S,"getProgramCacheKeyParameters");function w(b,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),b.push(a.mask)}u(w,"getProgramCacheKeyBooleans");function B(b){const T=_[b.type];let z;if(T){const $=Tn[T];z=Ni.clone($.uniforms)}else z=b.uniforms;return z}u(B,"getUniforms");function P(b,T){let z;for(let $=0,ie=h.length;$<ie;$++){const ce=h[$];if(ce.cacheKey===T){z=ce,++z.usedTimes;break}}return z===void 0&&(z=new VA(n,T,b,r),h.push(z)),z}u(P,"acquireProgram");function R(b){if(--b.usedTimes===0){const T=h.indexOf(b);h[T]=h[h.length-1],h.pop(),b.destroy()}}u(R,"releaseProgram");function O(b){l.remove(b)}u(O,"releaseShaderCache");function re(){l.dispose()}return u(re,"dispose"),{getParameters:m,getProgramCacheKey:A,getUniforms:B,acquireProgram:P,releaseProgram:R,releaseShaderCache:O,programs:h,dispose:re}}u(GA,"WebGLPrograms");function WA(){let n=new WeakMap;function e(o){return n.has(o)}u(e,"has");function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}u(t,"get");function i(o){n.delete(o)}u(i,"remove");function s(o,a,l){n.get(o)[a]=l}u(s,"update");function r(){n=new WeakMap}return u(r,"dispose"),{has:e,get:t,remove:i,update:s,dispose:r}}u(WA,"WebGLProperties");function $A(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}u($A,"painterSortStable");function j1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}u(j1,"reversePainterSortStable");function X1(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}u(r,"init");function o(d,f,p,v,_,g){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:p,groupOrder:v,renderOrder:d.renderOrder,z:_,group:g},n[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=p,m.groupOrder=v,m.renderOrder=d.renderOrder,m.z=_,m.group=g),e++,m}u(o,"getNextRenderItem");function a(d,f,p,v,_,g){const m=o(d,f,p,v,_,g);p.transmission>0?i.push(m):p.transparent===!0?s.push(m):t.push(m)}u(a,"push");function l(d,f,p,v,_,g){const m=o(d,f,p,v,_,g);p.transmission>0?i.unshift(m):p.transparent===!0?s.unshift(m):t.unshift(m)}u(l,"unshift");function c(d,f){t.length>1&&t.sort(d||$A),i.length>1&&i.sort(f||j1),s.length>1&&s.sort(f||j1)}u(c,"sort");function h(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return u(h,"finish"),{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}u(X1,"WebGLRenderList");function jA(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new X1,n.set(i,[o])):s>=r.length?(o=new X1,r.push(o)):o=r[s],o}u(e,"get");function t(){n=new WeakMap}return u(t,"dispose"),{get:e,dispose:t}}u(jA,"WebGLRenderLists");function XA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new De};break;case"SpotLight":t={position:new D,direction:new D,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}u(XA,"UniformsCache");function YA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}u(YA,"ShadowUniformsCache");let qA=0;function KA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}u(KA,"shadowCastingAndTexturingLightsFirst");function ZA(n){const e=new XA,t=YA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const s=new D,r=new Ke,o=new Ke;function a(c){let h=0,d=0,f=0;for(let re=0;re<9;re++)i.probe[re].set(0,0,0);let p=0,v=0,_=0,g=0,m=0,A=0,S=0,w=0,B=0,P=0,R=0;c.sort(KA);for(let re=0,b=c.length;re<b;re++){const T=c[re],z=T.color,$=T.intensity,ie=T.distance,ce=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=z.r*$,d+=z.g*$,f+=z.b*$;else if(T.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(T.sh.coefficients[Z],$);R++}else if(T.isDirectionalLight){const Z=e.get(T);if(Z.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const se=T.shadow,X=t.get(T);X.shadowIntensity=se.intensity,X.shadowBias=se.bias,X.shadowNormalBias=se.normalBias,X.shadowRadius=se.radius,X.shadowMapSize=se.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=ce,i.directionalShadowMatrix[p]=T.shadow.matrix,A++}i.directional[p]=Z,p++}else if(T.isSpotLight){const Z=e.get(T);Z.position.setFromMatrixPosition(T.matrixWorld),Z.color.copy(z).multiplyScalar($),Z.distance=ie,Z.coneCos=Math.cos(T.angle),Z.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),Z.decay=T.decay,i.spot[_]=Z;const se=T.shadow;if(T.map&&(i.spotLightMap[B]=T.map,B++,se.updateMatrices(T),T.castShadow&&P++),i.spotLightMatrix[_]=se.matrix,T.castShadow){const X=t.get(T);X.shadowIntensity=se.intensity,X.shadowBias=se.bias,X.shadowNormalBias=se.normalBias,X.shadowRadius=se.radius,X.shadowMapSize=se.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=ce,w++}_++}else if(T.isRectAreaLight){const Z=e.get(T);Z.color.copy(z).multiplyScalar($),Z.halfWidth.set(T.width*.5,0,0),Z.halfHeight.set(0,T.height*.5,0),i.rectArea[g]=Z,g++}else if(T.isPointLight){const Z=e.get(T);if(Z.color.copy(T.color).multiplyScalar(T.intensity),Z.distance=T.distance,Z.decay=T.decay,T.castShadow){const se=T.shadow,X=t.get(T);X.shadowIntensity=se.intensity,X.shadowBias=se.bias,X.shadowNormalBias=se.normalBias,X.shadowRadius=se.radius,X.shadowMapSize=se.mapSize,X.shadowCameraNear=se.camera.near,X.shadowCameraFar=se.camera.far,i.pointShadow[v]=X,i.pointShadowMap[v]=ce,i.pointShadowMatrix[v]=T.shadow.matrix,S++}i.point[v]=Z,v++}else if(T.isHemisphereLight){const Z=e.get(T);Z.skyColor.copy(T.color).multiplyScalar($),Z.groundColor.copy(T.groundColor).multiplyScalar($),i.hemi[m]=Z,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const O=i.hash;(O.directionalLength!==p||O.pointLength!==v||O.spotLength!==_||O.rectAreaLength!==g||O.hemiLength!==m||O.numDirectionalShadows!==A||O.numPointShadows!==S||O.numSpotShadows!==w||O.numSpotMaps!==B||O.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=g,i.point.length=v,i.hemi.length=m,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=w+B-P,i.spotLightMap.length=B,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=R,O.directionalLength=p,O.pointLength=v,O.spotLength=_,O.rectAreaLength=g,O.hemiLength=m,O.numDirectionalShadows=A,O.numPointShadows=S,O.numSpotShadows=w,O.numSpotMaps=B,O.numLightProbes=R,i.version=qA++)}u(a,"setup");function l(c,h){let d=0,f=0,p=0,v=0,_=0;const g=h.matrixWorldInverse;for(let m=0,A=c.length;m<A;m++){const S=c[m];if(S.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),d++}else if(S.isSpotLight){const w=i.spot[p];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),p++}else if(S.isRectAreaLight){const w=i.rectArea[v];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(g),o.identity(),r.copy(S.matrixWorld),r.premultiply(g),o.extractRotation(r),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),v++}else if(S.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(g),f++}else if(S.isHemisphereLight){const w=i.hemi[_];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(g),_++}}}return u(l,"setupView"),{setup:a,setupView:l,state:i}}u(ZA,"WebGLLights");function Y1(n){const e=new ZA(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}u(s,"init");function r(h){t.push(h)}u(r,"pushLight");function o(h){i.push(h)}u(o,"pushShadow");function a(){e.setup(t)}u(a,"setupLights");function l(h){e.setupView(t,h)}u(l,"setupLightsView");const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}u(Y1,"WebGLRenderState");function JA(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Y1(n),e.set(s,[a])):r>=o.length?(a=new Y1(n),o.push(a)):a=o[r],a}u(t,"get");function i(){e=new WeakMap}return u(i,"dispose"),{get:t,dispose:i}}u(JA,"WebGLRenderStates");const lm=class lm extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$M,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};u(lm,"MeshDepthMaterial");let Vl=lm;const cm=class cm extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};u(cm,"MeshDistanceMaterial");let hd=cm;const QA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eC=`uniform sampler2D shadow_pass;
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
}`;function tC(n,e,t){let i=new Zo;const s=new xe,r=new xe,o=new ot,a=new Vl({depthPacking:xx}),l=new hd,c={},h=t.maxTextureSize,d={[yi]:_n,[_n]:yi,[vn]:vn},f=new Dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:QA,fragmentShader:eC}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new Bt;v.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new St(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ix;let m=this.type;this.render=function(P,R,O){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;const re=n.getRenderTarget(),b=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Zt),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const $=m!==Ri&&this.type===Ri,ie=m===Ri&&this.type!==Ri;for(let ce=0,Z=P.length;ce<Z;ce++){const se=P[ce],X=se.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const Te=X.getFrameExtents();if(s.multiply(Te),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Te.x),s.x=r.x*Te.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Te.y),s.y=r.y*Te.y,X.mapSize.y=r.y)),X.map===null||$===!0||ie===!0){const Ae=this.type!==Ri?{minFilter:on,magFilter:on}:{};X.map!==null&&X.map.dispose(),X.map=new $t(s.x,s.y,Ae),X.map.texture.name=se.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const we=X.getViewportCount();for(let Ae=0;Ae<we;Ae++){const Ye=X.getViewport(Ae);o.set(r.x*Ye.x,r.y*Ye.y,r.x*Ye.z,r.y*Ye.w),z.viewport(o),X.updateMatrices(se,Ae),i=X.getFrustum(),w(R,O,X.camera,se,this.type)}X.isPointLightShadow!==!0&&this.type===Ri&&A(X,O),X.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(re,b,T)};function A(P,R){const O=e.update(_);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new $t(s.x,s.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(R,null,O,f,_,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(R,null,O,p,_,null)}u(A,"VSMPass");function S(P,R,O,re){let b=null;const T=O.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(T!==void 0)b=T;else if(b=O.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const z=b.uuid,$=R.uuid;let ie=c[z];ie===void 0&&(ie={},c[z]=ie);let ce=ie[$];ce===void 0&&(ce=b.clone(),ie[$]=ce,R.addEventListener("dispose",B)),b=ce}if(b.visible=R.visible,b.wireframe=R.wireframe,re===Ri?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:d[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,O.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const z=n.properties.get(b);z.light=O}return b}u(S,"getDepthMaterial");function w(P,R,O,re,b){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&b===Ri)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,P.matrixWorld);const $=e.update(P),ie=P.material;if(Array.isArray(ie)){const ce=$.groups;for(let Z=0,se=ce.length;Z<se;Z++){const X=ce[Z],Te=ie[X.materialIndex];if(Te&&Te.visible){const we=S(P,Te,re,b);P.onBeforeShadow(n,P,R,O,$,we,X),n.renderBufferDirect(O,null,$,we,P,X),P.onAfterShadow(n,P,R,O,$,we,X)}}}else if(ie.visible){const ce=S(P,ie,re,b);P.onBeforeShadow(n,P,R,O,$,ce,null),n.renderBufferDirect(O,null,$,ce,P,null),P.onAfterShadow(n,P,R,O,$,ce,null)}}const z=P.children;for(let $=0,ie=z.length;$<ie;$++)w(z[$],R,O,re,b)}u(w,"renderObject");function B(P){P.target.removeEventListener("dispose",B);for(const O in c){const re=c[O],b=P.target.uuid;b in re&&(re[b].dispose(),delete re[b])}}u(B,"onMaterialDispose")}u(tC,"WebGLShadowMap");const nC={[vh]:_h,[xh]:Mh,[yh]:Sh,[Xr]:bh,[_h]:vh,[Mh]:xh,[Sh]:yh,[bh]:Xr};function iC(n){function e(){let M=!1;const L=new ot;let N=null;const V=new ot(0,0,0,0);return{setMask:function(ee){N!==ee&&!M&&(n.colorMask(ee,ee,ee,ee),N=ee)},setLocked:function(ee){M=ee},setClear:function(ee,de,Ce,Le,Ne){Ne===!0&&(ee*=Le,de*=Le,Ce*=Le),L.set(ee,de,Ce,Le),V.equals(L)===!1&&(n.clearColor(ee,de,Ce,Le),V.copy(L))},reset:function(){M=!1,N=null,V.set(-1,0,0,0)}}}u(e,"ColorBuffer");function t(){let M=!1,L=!1,N=null,V=null,ee=null;return{setReversed:function(de){L=de},setTest:function(de){de?ye(n.DEPTH_TEST):Me(n.DEPTH_TEST)},setMask:function(de){N!==de&&!M&&(n.depthMask(de),N=de)},setFunc:function(de){if(L&&(de=nC[de]),V!==de){switch(de){case vh:n.depthFunc(n.NEVER);break;case _h:n.depthFunc(n.ALWAYS);break;case xh:n.depthFunc(n.LESS);break;case Xr:n.depthFunc(n.LEQUAL);break;case yh:n.depthFunc(n.EQUAL);break;case bh:n.depthFunc(n.GEQUAL);break;case Mh:n.depthFunc(n.GREATER);break;case Sh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}V=de}},setLocked:function(de){M=de},setClear:function(de){ee!==de&&(n.clearDepth(de),ee=de)},reset:function(){M=!1,N=null,V=null,ee=null}}}u(t,"DepthBuffer");function i(){let M=!1,L=null,N=null,V=null,ee=null,de=null,Ce=null,Le=null,Ne=null;return{setTest:function(Ie){M||(Ie?ye(n.STENCIL_TEST):Me(n.STENCIL_TEST))},setMask:function(Ie){L!==Ie&&!M&&(n.stencilMask(Ie),L=Ie)},setFunc:function(Ie,Rt,Qn){(N!==Ie||V!==Rt||ee!==Qn)&&(n.stencilFunc(Ie,Rt,Qn),N=Ie,V=Rt,ee=Qn)},setOp:function(Ie,Rt,Qn){(de!==Ie||Ce!==Rt||Le!==Qn)&&(n.stencilOp(Ie,Rt,Qn),de=Ie,Ce=Rt,Le=Qn)},setLocked:function(Ie){M=Ie},setClear:function(Ie){Ne!==Ie&&(n.clearStencil(Ie),Ne=Ie)},reset:function(){M=!1,L=null,N=null,V=null,ee=null,de=null,Ce=null,Le=null,Ne=null}}}u(i,"StencilBuffer");const s=new e,r=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},h={},d=new WeakMap,f=[],p=null,v=!1,_=null,g=null,m=null,A=null,S=null,w=null,B=null,P=new De(0,0,0),R=0,O=!1,re=null,b=null,T=null,z=null,$=null;const ie=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,Z=0;const se=n.getParameter(n.VERSION);se.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(se)[1]),ce=Z>=1):se.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),ce=Z>=2);let X=null,Te={};const we=n.getParameter(n.SCISSOR_BOX),Ae=n.getParameter(n.VIEWPORT),Ye=new ot().fromArray(we),Qe=new ot().fromArray(Ae);function le(M,L,N,V){const ee=new Uint8Array(4),de=n.createTexture();n.bindTexture(M,de),n.texParameteri(M,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(M,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ce=0;Ce<N;Ce++)M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY?n.texImage3D(L,0,n.RGBA,1,1,V,0,n.RGBA,n.UNSIGNED_BYTE,ee):n.texImage2D(L+Ce,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ee);return de}u(le,"createTexture");const ve={};ve[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ye(n.DEPTH_TEST),r.setFunc(Xr),Y(!1),ne(e1),ye(n.CULL_FACE),x(Zt);function ye(M){c[M]!==!0&&(n.enable(M),c[M]=!0)}u(ye,"enable");function Me(M){c[M]!==!1&&(n.disable(M),c[M]=!1)}u(Me,"disable");function je(M,L){return h[M]!==L?(n.bindFramebuffer(M,L),h[M]=L,M===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=L),M===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=L),!0):!1}u(je,"bindFramebuffer");function $e(M,L){let N=f,V=!1;if(M){N=d.get(L),N===void 0&&(N=[],d.set(L,N));const ee=M.textures;if(N.length!==ee.length||N[0]!==n.COLOR_ATTACHMENT0){for(let de=0,Ce=ee.length;de<Ce;de++)N[de]=n.COLOR_ATTACHMENT0+de;N.length=ee.length,V=!0}}else N[0]!==n.BACK&&(N[0]=n.BACK,V=!0);V&&n.drawBuffers(N)}u($e,"drawBuffers");function et(M){return p!==M?(n.useProgram(M),p=M,!0):!1}u(et,"useProgram");const ut={[Di]:n.FUNC_ADD,[xM]:n.FUNC_SUBTRACT,[yM]:n.FUNC_REVERSE_SUBTRACT};ut[bM]=n.MIN,ut[MM]=n.MAX;const rt={[ph]:n.ZERO,[SM]:n.ONE,[EM]:n.SRC_COLOR,[mh]:n.SRC_ALPHA,[CM]:n.SRC_ALPHA_SATURATE,[rx]:n.DST_COLOR,[sx]:n.DST_ALPHA,[TM]:n.ONE_MINUS_SRC_COLOR,[gh]:n.ONE_MINUS_SRC_ALPHA,[AM]:n.ONE_MINUS_DST_COLOR,[wM]:n.ONE_MINUS_DST_ALPHA,[RM]:n.CONSTANT_COLOR,[PM]:n.ONE_MINUS_CONSTANT_COLOR,[DM]:n.CONSTANT_ALPHA,[IM]:n.ONE_MINUS_CONSTANT_ALPHA};function x(M,L,N,V,ee,de,Ce,Le,Ne,Ie){if(M===Zt){v===!0&&(Me(n.BLEND),v=!1);return}if(v===!1&&(ye(n.BLEND),v=!0),M!==fh){if(M!==_||Ie!==O){if((g!==Di||S!==Di)&&(n.blendEquation(n.FUNC_ADD),g=Di,S=Di),Ie)switch(M){case Hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dh:n.blendFunc(n.ONE,n.ONE);break;case t1:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case n1:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}else switch(M){case Hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case t1:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case n1:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}m=null,A=null,w=null,B=null,P.set(0,0,0),R=0,_=M,O=Ie}return}ee=ee||L,de=de||N,Ce=Ce||V,(L!==g||ee!==S)&&(n.blendEquationSeparate(ut[L],ut[ee]),g=L,S=ee),(N!==m||V!==A||de!==w||Ce!==B)&&(n.blendFuncSeparate(rt[N],rt[V],rt[de],rt[Ce]),m=N,A=V,w=de,B=Ce),(Le.equals(P)===!1||Ne!==R)&&(n.blendColor(Le.r,Le.g,Le.b,Ne),P.copy(Le),R=Ne),_=M,O=!1}u(x,"setBlending");function k(M,L){M.side===vn?Me(n.CULL_FACE):ye(n.CULL_FACE);let N=M.side===_n;L&&(N=!N),Y(N),M.blending===Hr&&M.transparent===!1?x(Zt):x(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),r.setFunc(M.depthFunc),r.setTest(M.depthTest),r.setMask(M.depthWrite),s.setMask(M.colorWrite);const V=M.stencilWrite;o.setTest(V),V&&(o.setMask(M.stencilWriteMask),o.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),o.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),oe(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?ye(n.SAMPLE_ALPHA_TO_COVERAGE):Me(n.SAMPLE_ALPHA_TO_COVERAGE)}u(k,"setMaterial");function Y(M){re!==M&&(M?n.frontFace(n.CW):n.frontFace(n.CCW),re=M)}u(Y,"setFlipSided");function ne(M){M!==gM?(ye(n.CULL_FACE),M!==b&&(M===e1?n.cullFace(n.BACK):M===vM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Me(n.CULL_FACE),b=M}u(ne,"setCullFace");function q(M){M!==T&&(ce&&n.lineWidth(M),T=M)}u(q,"setLineWidth");function oe(M,L,N){M?(ye(n.POLYGON_OFFSET_FILL),(z!==L||$!==N)&&(n.polygonOffset(L,N),z=L,$=N)):Me(n.POLYGON_OFFSET_FILL)}u(oe,"setPolygonOffset");function ae(M){M?ye(n.SCISSOR_TEST):Me(n.SCISSOR_TEST)}u(ae,"setScissorTest");function E(M){M===void 0&&(M=n.TEXTURE0+ie-1),X!==M&&(n.activeTexture(M),X=M)}u(E,"activeTexture");function y(M,L,N){N===void 0&&(X===null?N=n.TEXTURE0+ie-1:N=X);let V=Te[N];V===void 0&&(V={type:void 0,texture:void 0},Te[N]=V),(V.type!==M||V.texture!==L)&&(X!==N&&(n.activeTexture(N),X=N),n.bindTexture(M,L||ve[M]),V.type=M,V.texture=L)}u(y,"bindTexture");function I(){const M=Te[X];M!==void 0&&M.type!==void 0&&(n.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)}u(I,"unbindTexture");function H(){try{n.compressedTexImage2D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}u(H,"compressedTexImage2D");function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}u(J,"compressedTexImage3D");function j(){try{n.texSubImage2D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}u(j,"texSubImage2D");function pe(){try{n.texSubImage3D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}u(pe,"texSubImage3D");function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}u(fe,"compressedTexSubImage2D");function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}u(ge,"compressedTexSubImage3D");function Fe(){try{n.texStorage2D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}u(Fe,"texStorage2D");function me(){try{n.texStorage3D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}u(me,"texStorage3D");function be(){try{n.texImage2D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}u(be,"texImage2D");function Ge(){try{n.texImage3D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}u(Ge,"texImage3D");function We(M){Ye.equals(M)===!1&&(n.scissor(M.x,M.y,M.z,M.w),Ye.copy(M))}u(We,"scissor");function Re(M){Qe.equals(M)===!1&&(n.viewport(M.x,M.y,M.z,M.w),Qe.copy(M))}u(Re,"viewport");function nt(M,L){let N=l.get(L);N===void 0&&(N=new WeakMap,l.set(L,N));let V=N.get(M);V===void 0&&(V=n.getUniformBlockIndex(L,M.name),N.set(M,V))}u(nt,"updateUBOMapping");function ke(M,L){const V=l.get(L).get(M);a.get(L)!==V&&(n.uniformBlockBinding(L,V,M.__bindingPointIndex),a.set(L,V))}u(ke,"uniformBlockBinding");function F(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},X=null,Te={},h={},d=new WeakMap,f=[],p=null,v=!1,_=null,g=null,m=null,A=null,S=null,w=null,B=null,P=new De(0,0,0),R=0,O=!1,re=null,b=null,T=null,z=null,$=null,Ye.set(0,0,n.canvas.width,n.canvas.height),Qe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return u(F,"reset"),{buffers:{color:s,depth:r,stencil:o},enable:ye,disable:Me,bindFramebuffer:je,drawBuffers:$e,useProgram:et,setBlending:x,setMaterial:k,setFlipSided:Y,setCullFace:ne,setLineWidth:q,setPolygonOffset:oe,setScissorTest:ae,activeTexture:E,bindTexture:y,unbindTexture:I,compressedTexImage2D:H,compressedTexImage3D:J,texImage2D:be,texImage3D:Ge,updateUBOMapping:nt,uniformBlockBinding:ke,texStorage2D:Fe,texStorage3D:me,texSubImage2D:j,texSubImage3D:pe,compressedTexSubImage2D:fe,compressedTexSubImage3D:ge,scissor:We,viewport:Re,reset:F}}u(iC,"WebGLState");function q1(n,e,t,i){const s=sC(i);switch(t){case dx:return n*e;case px:return n*e;case mx:return n*e*2;case Jf:return n*e/s.components*s.byteLength;case Qf:return n*e/s.components*s.byteLength;case gx:return n*e*2/s.components*s.byteLength;case ep:return n*e*2/s.components*s.byteLength;case fx:return n*e*3/s.components*s.byteLength;case Xn:return n*e*4/s.components*s.byteLength;case tp:return n*e*4/s.components*s.byteLength;case dl:case fl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case pl:case ml:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ah:case Rh:return Math.max(n,16)*Math.max(e,8)/4;case wh:case Ch:return Math.max(n,8)*Math.max(e,8)/2;case Ph:case Dh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ih:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Lh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Nh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Bh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case kh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case zh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Vh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Wh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case $h:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case jh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case gl:case Xh:case Yh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case vx:case qh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Kh:case Zh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}u(q1,"getByteLength");function sC(n){switch(n){case Bi:case cx:return{byteLength:1,components:1};case jo:case ux:case En:return{byteLength:2,components:1};case Kf:case Zf:return{byteLength:2,components:4};case Qs:case qf:case ai:return{byteLength:4,components:1};case hx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}u(sC,"getTextureTypeByteLength");function rC(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xe,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,y){return p?new OffscreenCanvas(E,y):qo("canvas")}u(v,"createCanvas");function _(E,y,I){let H=1;const J=ae(E);if((J.width>I||J.height>I)&&(H=I/Math.max(J.width,J.height)),H<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const j=Math.floor(H*J.width),pe=Math.floor(H*J.height);d===void 0&&(d=v(j,pe));const fe=y?v(j,pe):d;return fe.width=j,fe.height=pe,fe.getContext("2d").drawImage(E,0,0,j,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+j+"x"+pe+")."),fe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}u(_,"resizeImage");function g(E){return E.generateMipmaps&&E.minFilter!==on&&E.minFilter!==Fn}u(g,"textureNeedsGenerateMipmaps");function m(E){n.generateMipmap(E)}u(m,"generateMipmap");function A(E,y,I,H,J=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let j=y;if(y===n.RED&&(I===n.FLOAT&&(j=n.R32F),I===n.HALF_FLOAT&&(j=n.R16F),I===n.UNSIGNED_BYTE&&(j=n.R8)),y===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(j=n.R8UI),I===n.UNSIGNED_SHORT&&(j=n.R16UI),I===n.UNSIGNED_INT&&(j=n.R32UI),I===n.BYTE&&(j=n.R8I),I===n.SHORT&&(j=n.R16I),I===n.INT&&(j=n.R32I)),y===n.RG&&(I===n.FLOAT&&(j=n.RG32F),I===n.HALF_FLOAT&&(j=n.RG16F),I===n.UNSIGNED_BYTE&&(j=n.RG8)),y===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(j=n.RG8UI),I===n.UNSIGNED_SHORT&&(j=n.RG16UI),I===n.UNSIGNED_INT&&(j=n.RG32UI),I===n.BYTE&&(j=n.RG8I),I===n.SHORT&&(j=n.RG16I),I===n.INT&&(j=n.RG32I)),y===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(j=n.RGB8UI),I===n.UNSIGNED_SHORT&&(j=n.RGB16UI),I===n.UNSIGNED_INT&&(j=n.RGB32UI),I===n.BYTE&&(j=n.RGB8I),I===n.SHORT&&(j=n.RGB16I),I===n.INT&&(j=n.RGB32I)),y===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),I===n.UNSIGNED_INT&&(j=n.RGBA32UI),I===n.BYTE&&(j=n.RGBA8I),I===n.SHORT&&(j=n.RGBA16I),I===n.INT&&(j=n.RGBA32I)),y===n.RGB&&I===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),y===n.RGBA){const pe=J?Rl:dt.getTransfer(H);I===n.FLOAT&&(j=n.RGBA32F),I===n.HALF_FLOAT&&(j=n.RGBA16F),I===n.UNSIGNED_BYTE&&(j=pe===Tt?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}u(A,"getInternalFormat");function S(E,y){let I;return E?y===null||y===Qs||y===er?I=n.DEPTH24_STENCIL8:y===ai?I=n.DEPTH32F_STENCIL8:y===jo&&(I=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Qs||y===er?I=n.DEPTH_COMPONENT24:y===ai?I=n.DEPTH_COMPONENT32F:y===jo&&(I=n.DEPTH_COMPONENT16),I}u(S,"getInternalDepthFormat");function w(E,y){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==on&&E.minFilter!==Fn?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}u(w,"getMipLevels");function B(E){const y=E.target;y.removeEventListener("dispose",B),R(y),y.isVideoTexture&&h.delete(y)}u(B,"onTextureDispose");function P(E){const y=E.target;y.removeEventListener("dispose",P),re(y)}u(P,"onRenderTargetDispose");function R(E){const y=i.get(E);if(y.__webglInit===void 0)return;const I=E.source,H=f.get(I);if(H){const J=H[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&O(E),Object.keys(H).length===0&&f.delete(I)}i.remove(E)}u(R,"deallocateTexture");function O(E){const y=i.get(E);n.deleteTexture(y.__webglTexture);const I=E.source,H=f.get(I);delete H[y.__cacheKey],o.memory.textures--}u(O,"deleteTexture");function re(E){const y=i.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(y.__webglFramebuffer[H]))for(let J=0;J<y.__webglFramebuffer[H].length;J++)n.deleteFramebuffer(y.__webglFramebuffer[H][J]);else n.deleteFramebuffer(y.__webglFramebuffer[H]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[H])}else{if(Array.isArray(y.__webglFramebuffer))for(let H=0;H<y.__webglFramebuffer.length;H++)n.deleteFramebuffer(y.__webglFramebuffer[H]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let H=0;H<y.__webglColorRenderbuffer.length;H++)y.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[H]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const I=E.textures;for(let H=0,J=I.length;H<J;H++){const j=i.get(I[H]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(I[H])}i.remove(E)}u(re,"deallocateRenderTarget");let b=0;function T(){b=0}u(T,"resetTextureUnits");function z(){const E=b;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),b+=1,E}u(z,"allocateTextureUnit");function $(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}u($,"getTextureCacheKey");function ie(E,y){const I=i.get(E);if(E.isVideoTexture&&q(E),E.isRenderTargetTexture===!1&&E.version>0&&I.__version!==E.version){const H=E.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Qe(I,E,y);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+y)}u(ie,"setTexture2D");function ce(E,y){const I=i.get(E);if(E.version>0&&I.__version!==E.version){Qe(I,E,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+y)}u(ce,"setTexture2DArray");function Z(E,y){const I=i.get(E);if(E.version>0&&I.__version!==E.version){Qe(I,E,y);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+y)}u(Z,"setTexture3D");function se(E,y){const I=i.get(E);if(E.version>0&&I.__version!==E.version){le(I,E,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+y)}u(se,"setTextureCube");const X={[vs]:n.REPEAT,[cs]:n.CLAMP_TO_EDGE,[Cl]:n.MIRRORED_REPEAT},Te={[on]:n.NEAREST,[lx]:n.NEAREST_MIPMAP_NEAREST,[yo]:n.NEAREST_MIPMAP_LINEAR,[Fn]:n.LINEAR,[hl]:n.LINEAR_MIPMAP_NEAREST,[Ii]:n.LINEAR_MIPMAP_LINEAR},we={[XM]:n.NEVER,[QM]:n.ALWAYS,[YM]:n.LESS,[yx]:n.LEQUAL,[qM]:n.EQUAL,[JM]:n.GEQUAL,[KM]:n.GREATER,[ZM]:n.NOTEQUAL};function Ae(E,y){if(y.type===ai&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Fn||y.magFilter===hl||y.magFilter===yo||y.magFilter===Ii||y.minFilter===Fn||y.minFilter===hl||y.minFilter===yo||y.minFilter===Ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,X[y.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,X[y.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,X[y.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,Te[y.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,Te[y.minFilter]),y.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,we[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===on||y.minFilter!==yo&&y.minFilter!==Ii||y.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}u(Ae,"setTextureParameters");function Ye(E,y){let I=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",B));const H=y.source;let J=f.get(H);J===void 0&&(J={},f.set(H,J));const j=$(y);if(j!==E.__cacheKey){J[j]===void 0&&(J[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),J[j].usedTimes++;const pe=J[E.__cacheKey];pe!==void 0&&(J[E.__cacheKey].usedTimes--,pe.usedTimes===0&&O(y)),E.__cacheKey=j,E.__webglTexture=J[j].texture}return I}u(Ye,"initTexture");function Qe(E,y,I){let H=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(H=n.TEXTURE_3D);const J=Ye(E,y),j=y.source;t.bindTexture(H,E.__webglTexture,n.TEXTURE0+I);const pe=i.get(j);if(j.version!==pe.__version||J===!0){t.activeTexture(n.TEXTURE0+I);const fe=dt.getPrimaries(dt.workingColorSpace),ge=y.colorSpace===os?null:dt.getPrimaries(y.colorSpace),Fe=y.colorSpace===os||fe===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let me=_(y.image,!1,s.maxTextureSize);me=oe(y,me);const be=r.convert(y.format,y.colorSpace),Ge=r.convert(y.type);let We=A(y.internalFormat,be,Ge,y.colorSpace,y.isVideoTexture);Ae(H,y);let Re;const nt=y.mipmaps,ke=y.isVideoTexture!==!0,F=pe.__version===void 0||J===!0,M=j.dataReady,L=w(y,me);if(y.isDepthTexture)We=S(y.format===tr,y.type),F&&(ke?t.texStorage2D(n.TEXTURE_2D,1,We,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,We,me.width,me.height,0,be,Ge,null));else if(y.isDataTexture)if(nt.length>0){ke&&F&&t.texStorage2D(n.TEXTURE_2D,L,We,nt[0].width,nt[0].height);for(let N=0,V=nt.length;N<V;N++)Re=nt[N],ke?M&&t.texSubImage2D(n.TEXTURE_2D,N,0,0,Re.width,Re.height,be,Ge,Re.data):t.texImage2D(n.TEXTURE_2D,N,We,Re.width,Re.height,0,be,Ge,Re.data);y.generateMipmaps=!1}else ke?(F&&t.texStorage2D(n.TEXTURE_2D,L,We,me.width,me.height),M&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me.width,me.height,be,Ge,me.data)):t.texImage2D(n.TEXTURE_2D,0,We,me.width,me.height,0,be,Ge,me.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ke&&F&&t.texStorage3D(n.TEXTURE_2D_ARRAY,L,We,nt[0].width,nt[0].height,me.depth);for(let N=0,V=nt.length;N<V;N++)if(Re=nt[N],y.format!==Xn)if(be!==null)if(ke){if(M)if(y.layerUpdates.size>0){const ee=q1(Re.width,Re.height,y.format,y.type);for(const de of y.layerUpdates){const Ce=Re.data.subarray(de*ee/Re.data.BYTES_PER_ELEMENT,(de+1)*ee/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,N,0,0,de,Re.width,Re.height,1,be,Ce,0,0)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,N,0,0,0,Re.width,Re.height,me.depth,be,Re.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,N,We,Re.width,Re.height,me.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?M&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,N,0,0,0,Re.width,Re.height,me.depth,be,Ge,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,N,We,Re.width,Re.height,me.depth,0,be,Ge,Re.data)}else{ke&&F&&t.texStorage2D(n.TEXTURE_2D,L,We,nt[0].width,nt[0].height);for(let N=0,V=nt.length;N<V;N++)Re=nt[N],y.format!==Xn?be!==null?ke?M&&t.compressedTexSubImage2D(n.TEXTURE_2D,N,0,0,Re.width,Re.height,be,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,N,We,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?M&&t.texSubImage2D(n.TEXTURE_2D,N,0,0,Re.width,Re.height,be,Ge,Re.data):t.texImage2D(n.TEXTURE_2D,N,We,Re.width,Re.height,0,be,Ge,Re.data)}else if(y.isDataArrayTexture)if(ke){if(F&&t.texStorage3D(n.TEXTURE_2D_ARRAY,L,We,me.width,me.height,me.depth),M)if(y.layerUpdates.size>0){const N=q1(me.width,me.height,y.format,y.type);for(const V of y.layerUpdates){const ee=me.data.subarray(V*N/me.data.BYTES_PER_ELEMENT,(V+1)*N/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,V,me.width,me.height,1,be,Ge,ee)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,be,Ge,me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,We,me.width,me.height,me.depth,0,be,Ge,me.data);else if(y.isData3DTexture)ke?(F&&t.texStorage3D(n.TEXTURE_3D,L,We,me.width,me.height,me.depth),M&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,be,Ge,me.data)):t.texImage3D(n.TEXTURE_3D,0,We,me.width,me.height,me.depth,0,be,Ge,me.data);else if(y.isFramebufferTexture){if(F)if(ke)t.texStorage2D(n.TEXTURE_2D,L,We,me.width,me.height);else{let N=me.width,V=me.height;for(let ee=0;ee<L;ee++)t.texImage2D(n.TEXTURE_2D,ee,We,N,V,0,be,Ge,null),N>>=1,V>>=1}}else if(nt.length>0){if(ke&&F){const N=ae(nt[0]);t.texStorage2D(n.TEXTURE_2D,L,We,N.width,N.height)}for(let N=0,V=nt.length;N<V;N++)Re=nt[N],ke?M&&t.texSubImage2D(n.TEXTURE_2D,N,0,0,be,Ge,Re):t.texImage2D(n.TEXTURE_2D,N,We,be,Ge,Re);y.generateMipmaps=!1}else if(ke){if(F){const N=ae(me);t.texStorage2D(n.TEXTURE_2D,L,We,N.width,N.height)}M&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Ge,me)}else t.texImage2D(n.TEXTURE_2D,0,We,be,Ge,me);g(y)&&m(H),pe.__version=j.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}u(Qe,"uploadTexture");function le(E,y,I){if(y.image.length!==6)return;const H=Ye(E,y),J=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+I);const j=i.get(J);if(J.version!==j.__version||H===!0){t.activeTexture(n.TEXTURE0+I);const pe=dt.getPrimaries(dt.workingColorSpace),fe=y.colorSpace===os?null:dt.getPrimaries(y.colorSpace),ge=y.colorSpace===os||pe===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Fe=y.isCompressedTexture||y.image[0].isCompressedTexture,me=y.image[0]&&y.image[0].isDataTexture,be=[];for(let V=0;V<6;V++)!Fe&&!me?be[V]=_(y.image[V],!0,s.maxCubemapSize):be[V]=me?y.image[V].image:y.image[V],be[V]=oe(y,be[V]);const Ge=be[0],We=r.convert(y.format,y.colorSpace),Re=r.convert(y.type),nt=A(y.internalFormat,We,Re,y.colorSpace),ke=y.isVideoTexture!==!0,F=j.__version===void 0||H===!0,M=J.dataReady;let L=w(y,Ge);Ae(n.TEXTURE_CUBE_MAP,y);let N;if(Fe){ke&&F&&t.texStorage2D(n.TEXTURE_CUBE_MAP,L,nt,Ge.width,Ge.height);for(let V=0;V<6;V++){N=be[V].mipmaps;for(let ee=0;ee<N.length;ee++){const de=N[ee];y.format!==Xn?We!==null?ke?M&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,ee,0,0,de.width,de.height,We,de.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,ee,nt,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?M&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,ee,0,0,de.width,de.height,We,Re,de.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,ee,nt,de.width,de.height,0,We,Re,de.data)}}}else{if(N=y.mipmaps,ke&&F){N.length>0&&L++;const V=ae(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,L,nt,V.width,V.height)}for(let V=0;V<6;V++)if(me){ke?M&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,be[V].width,be[V].height,We,Re,be[V].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,nt,be[V].width,be[V].height,0,We,Re,be[V].data);for(let ee=0;ee<N.length;ee++){const Ce=N[ee].image[V].image;ke?M&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,ee+1,0,0,Ce.width,Ce.height,We,Re,Ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,ee+1,nt,Ce.width,Ce.height,0,We,Re,Ce.data)}}else{ke?M&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,We,Re,be[V]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,nt,We,Re,be[V]);for(let ee=0;ee<N.length;ee++){const de=N[ee];ke?M&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,ee+1,0,0,We,Re,de.image[V]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,ee+1,nt,We,Re,de.image[V])}}}g(y)&&m(n.TEXTURE_CUBE_MAP),j.__version=J.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}u(le,"uploadCubeTexture");function ve(E,y,I,H,J,j){const pe=r.convert(I.format,I.colorSpace),fe=r.convert(I.type),ge=A(I.internalFormat,pe,fe,I.colorSpace);if(!i.get(y).__hasExternalTextures){const me=Math.max(1,y.width>>j),be=Math.max(1,y.height>>j);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,j,ge,me,be,y.depth,0,pe,fe,null):t.texImage2D(J,j,ge,me,be,0,pe,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),ne(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,J,i.get(I).__webglTexture,0,Y(y)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,J,i.get(I).__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}u(ve,"setupFrameBufferTexture");function ye(E,y,I){if(n.bindRenderbuffer(n.RENDERBUFFER,E),y.depthBuffer){const H=y.depthTexture,J=H&&H.isDepthTexture?H.type:null,j=S(y.stencilBuffer,J),pe=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=Y(y);ne(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,j,y.width,y.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,j,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,j,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,E)}else{const H=y.textures;for(let J=0;J<H.length;J++){const j=H[J],pe=r.convert(j.format,j.colorSpace),fe=r.convert(j.type),ge=A(j.internalFormat,pe,fe,j.colorSpace),Fe=Y(y);I&&ne(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,ge,y.width,y.height):ne(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe,ge,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ge,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}u(ye,"setupRenderBufferStorage");function Me(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ie(y.depthTexture,0);const H=i.get(y.depthTexture).__webglTexture,J=Y(y);if(y.depthTexture.format===Gr)ne(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,H,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,H,0);else if(y.depthTexture.format===tr)ne(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,H,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,H,0);else throw new Error("Unknown depthTexture format")}u(Me,"setupDepthTexture");function je(E){const y=i.get(E),I=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){const H=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),H){const J=u(()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,H.removeEventListener("dispose",J)},"disposeEvent");H.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=H}if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");Me(y.__webglFramebuffer,E)}else if(I){y.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[H]),y.__webglDepthbuffer[H]===void 0)y.__webglDepthbuffer[H]=n.createRenderbuffer(),ye(y.__webglDepthbuffer[H],E,!1);else{const J=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[H];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,j)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),ye(y.__webglDepthbuffer,E,!1);else{const H=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,H,n.RENDERBUFFER,J)}t.bindFramebuffer(n.FRAMEBUFFER,null)}u(je,"setupDepthRenderbuffer");function $e(E,y,I){const H=i.get(E);y!==void 0&&ve(H.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&je(E)}u($e,"rebindTextures");function et(E){const y=E.texture,I=i.get(E),H=i.get(y);E.addEventListener("dispose",P);const J=E.textures,j=E.isWebGLCubeRenderTarget===!0,pe=J.length>1;if(pe||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=y.version,o.memory.textures++),j){I.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0){I.__webglFramebuffer[fe]=[];for(let ge=0;ge<y.mipmaps.length;ge++)I.__webglFramebuffer[fe][ge]=n.createFramebuffer()}else I.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){I.__webglFramebuffer=[];for(let fe=0;fe<y.mipmaps.length;fe++)I.__webglFramebuffer[fe]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(pe)for(let fe=0,ge=J.length;fe<ge;fe++){const Fe=i.get(J[fe]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&ne(E)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let fe=0;fe<J.length;fe++){const ge=J[fe];I.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[fe]);const Fe=r.convert(ge.format,ge.colorSpace),me=r.convert(ge.type),be=A(ge.internalFormat,Fe,me,ge.colorSpace,E.isXRRenderTarget===!0),Ge=Y(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,be,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,I.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),ye(I.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),Ae(n.TEXTURE_CUBE_MAP,y);for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0)for(let ge=0;ge<y.mipmaps.length;ge++)ve(I.__webglFramebuffer[fe][ge],E,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ge);else ve(I.__webglFramebuffer[fe],E,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(y)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let fe=0,ge=J.length;fe<ge;fe++){const Fe=J[fe],me=i.get(Fe);t.bindTexture(n.TEXTURE_2D,me.__webglTexture),Ae(n.TEXTURE_2D,Fe),ve(I.__webglFramebuffer,E,Fe,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),g(Fe)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(fe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,H.__webglTexture),Ae(fe,y),y.mipmaps&&y.mipmaps.length>0)for(let ge=0;ge<y.mipmaps.length;ge++)ve(I.__webglFramebuffer[ge],E,y,n.COLOR_ATTACHMENT0,fe,ge);else ve(I.__webglFramebuffer,E,y,n.COLOR_ATTACHMENT0,fe,0);g(y)&&m(fe),t.unbindTexture()}E.depthBuffer&&je(E)}u(et,"setupRenderTarget");function ut(E){const y=E.textures;for(let I=0,H=y.length;I<H;I++){const J=y[I];if(g(J)){const j=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,pe=i.get(J).__webglTexture;t.bindTexture(j,pe),m(j),t.unbindTexture()}}}u(ut,"updateRenderTargetMipmap");const rt=[],x=[];function k(E){if(E.samples>0){if(ne(E)===!1){const y=E.textures,I=E.width,H=E.height;let J=n.COLOR_BUFFER_BIT;const j=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(E),fe=y.length>1;if(fe)for(let ge=0;ge<y.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ge=0;ge<y.length;ge++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ge]);const Fe=i.get(y[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Fe,0)}n.blitFramebuffer(0,0,I,H,0,0,I,H,J,n.NEAREST),l===!0&&(rt.length=0,x.length=0,rt.push(n.COLOR_ATTACHMENT0+ge),E.depthBuffer&&E.resolveDepthBuffer===!1&&(rt.push(j),x.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,x)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,rt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let ge=0;ge<y.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ge]);const Fe=i.get(y[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,Fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const y=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}u(k,"updateMultisampleRenderTarget");function Y(E){return Math.min(s.maxSamples,E.samples)}u(Y,"getRenderTargetSamples");function ne(E){const y=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}u(ne,"useMultisampledRTT");function q(E){const y=o.render.frame;h.get(E)!==y&&(h.set(E,y),E.update())}u(q,"updateVideoTexture");function oe(E,y){const I=E.colorSpace,H=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||I!==an&&I!==os&&(dt.getTransfer(I)===Tt?(H!==Xn||J!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),y}u(oe,"verifyColorSpace");function ae(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}u(ae,"getDimensions"),this.allocateTextureUnit=z,this.resetTextureUnits=T,this.setTexture2D=ie,this.setTexture2DArray=ce,this.setTexture3D=Z,this.setTextureCube=se,this.rebindTextures=$e,this.setupRenderTarget=et,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=k,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=ne}u(rC,"WebGLTextures");function oC(n,e){function t(i,s=os){let r;const o=dt.getTransfer(s);if(i===Bi)return n.UNSIGNED_BYTE;if(i===Kf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Zf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hx)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===cx)return n.BYTE;if(i===ux)return n.SHORT;if(i===jo)return n.UNSIGNED_SHORT;if(i===qf)return n.INT;if(i===Qs)return n.UNSIGNED_INT;if(i===ai)return n.FLOAT;if(i===En)return n.HALF_FLOAT;if(i===dx)return n.ALPHA;if(i===fx)return n.RGB;if(i===Xn)return n.RGBA;if(i===px)return n.LUMINANCE;if(i===mx)return n.LUMINANCE_ALPHA;if(i===Gr)return n.DEPTH_COMPONENT;if(i===tr)return n.DEPTH_STENCIL;if(i===Jf)return n.RED;if(i===Qf)return n.RED_INTEGER;if(i===gx)return n.RG;if(i===ep)return n.RG_INTEGER;if(i===tp)return n.RGBA_INTEGER;if(i===dl||i===fl||i===pl||i===ml)if(o===Tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===dl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ml)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===dl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ml)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wh||i===Ah||i===Ch||i===Rh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===wh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ah)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ch)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ph||i===Dh||i===Ih)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ph||i===Dh)return o===Tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ih)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Lh||i===Nh||i===Oh||i===Uh||i===Fh||i===Bh||i===kh||i===zh||i===Vh||i===Hh||i===Gh||i===Wh||i===$h||i===jh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Lh)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nh)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Oh)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Uh)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fh)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bh)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===kh)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zh)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vh)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hh)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gh)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wh)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$h)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===jh)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===gl||i===Xh||i===Yh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===gl)return o===Tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vx||i===qh||i===Kh||i===Zh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===gl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===qh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===er?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return u(t,"convert"),{convert:t}}u(oC,"WebGLUtils");const um=class um extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}};u(um,"ArrayCamera");let dd=um;const hm=class hm extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}};u(hm,"Group");let _i=hm;const aC={type:"move"},dm=class dm{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(aC)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new _i;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};u(dm,"WebXRController");let Do=dm;const lC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cC=`
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

}`,fm=class fm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new ln,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Dt({vertexShader:lC,fragmentShader:cC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new St(new kl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};u(fm,"WebXRDepthSensing");let fd=fm;const pm=class pm extends ki{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,v=null;const _=new fd,g=t.getContextAttributes();let m=null,A=null;const S=[],w=[],B=new xe;let P=null;const R=new jt;R.layers.enable(1),R.viewport=new ot;const O=new jt;O.layers.enable(2),O.viewport=new ot;const re=[R,O],b=new dd;b.layers.enable(1),b.layers.enable(2);let T=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let ve=S[le];return ve===void 0&&(ve=new Do,S[le]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(le){let ve=S[le];return ve===void 0&&(ve=new Do,S[le]=ve),ve.getGripSpace()},this.getHand=function(le){let ve=S[le];return ve===void 0&&(ve=new Do,S[le]=ve),ve.getHandSpace()};function $(le){const ve=w.indexOf(le.inputSource);if(ve===-1)return;const ye=S[ve];ye!==void 0&&(ye.update(le.inputSource,le.frame,c||o),ye.dispatchEvent({type:le.type,data:le.inputSource}))}u($,"onSessionEvent");function ie(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",ie),s.removeEventListener("inputsourceschange",ce);for(let le=0;le<S.length;le++){const ve=w[le];ve!==null&&(w[le]=null,S[le].disconnect(ve))}T=null,z=null,_.reset(),e.setRenderTarget(m),p=null,f=null,d=null,s=null,A=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}u(ie,"onSessionEnd"),this.setFramebufferScaleFactor=function(le){r=le,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){a=le,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(le){c=le},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(le){if(s=le,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",ie),s.addEventListener("inputsourceschange",ce),g.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(B),s.renderState.layers===void 0){const ve={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new $t(p.framebufferWidth,p.framebufferHeight,{format:Xn,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ve=null,ye=null,Me=null;g.depth&&(Me=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=g.stencil?tr:Gr,ye=g.stencil?er:Qs);const je={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(je),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new $t(f.textureWidth,f.textureHeight,{format:Xn,type:Bi,depthTexture:new Jo(f.textureWidth,f.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Qe.setContext(s),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ce(le){for(let ve=0;ve<le.removed.length;ve++){const ye=le.removed[ve],Me=w.indexOf(ye);Me>=0&&(w[Me]=null,S[Me].disconnect(ye))}for(let ve=0;ve<le.added.length;ve++){const ye=le.added[ve];let Me=w.indexOf(ye);if(Me===-1){for(let $e=0;$e<S.length;$e++)if($e>=w.length){w.push(ye),Me=$e;break}else if(w[$e]===null){w[$e]=ye,Me=$e;break}if(Me===-1)break}const je=S[Me];je&&je.connect(ye)}}u(ce,"onInputSourcesChange");const Z=new D,se=new D;function X(le,ve,ye){Z.setFromMatrixPosition(ve.matrixWorld),se.setFromMatrixPosition(ye.matrixWorld);const Me=Z.distanceTo(se),je=ve.projectionMatrix.elements,$e=ye.projectionMatrix.elements,et=je[14]/(je[10]-1),ut=je[14]/(je[10]+1),rt=(je[9]+1)/je[5],x=(je[9]-1)/je[5],k=(je[8]-1)/je[0],Y=($e[8]+1)/$e[0],ne=et*k,q=et*Y,oe=Me/(-k+Y),ae=oe*-k;if(ve.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(ae),le.translateZ(oe),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),je[10]===-1)le.projectionMatrix.copy(ve.projectionMatrix),le.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const E=et+oe,y=ut+oe,I=ne-ae,H=q+(Me-ae),J=rt*ut/y*E,j=x*ut/y*E;le.projectionMatrix.makePerspective(I,H,J,j,E,y),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}u(X,"setProjectionFromUnion");function Te(le,ve){ve===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(ve.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}u(Te,"updateCamera"),this.updateCamera=function(le){if(s===null)return;let ve=le.near,ye=le.far;_.texture!==null&&(_.depthNear>0&&(ve=_.depthNear),_.depthFar>0&&(ye=_.depthFar)),b.near=O.near=R.near=ve,b.far=O.far=R.far=ye,(T!==b.near||z!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),T=b.near,z=b.far);const Me=le.parent,je=b.cameras;Te(b,Me);for(let $e=0;$e<je.length;$e++)Te(je[$e],Me);je.length===2?X(b,R,O):b.projectionMatrix.copy(R.projectionMatrix),we(le,b,Me)};function we(le,ve,ye){ye===null?le.matrix.copy(ve.matrixWorld):(le.matrix.copy(ye.matrixWorld),le.matrix.invert(),le.matrix.multiply(ve.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(ve.projectionMatrix),le.projectionMatrixInverse.copy(ve.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=Kr*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}u(we,"updateUserCamera"),this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(le){l=le,f!==null&&(f.fixedFoveation=le),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=le)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let Ae=null;function Ye(le,ve){if(h=ve.getViewerPose(c||o),v=ve,h!==null){const ye=h.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let Me=!1;ye.length!==b.cameras.length&&(b.cameras.length=0,Me=!0);for(let $e=0;$e<ye.length;$e++){const et=ye[$e];let ut=null;if(p!==null)ut=p.getViewport(et);else{const x=d.getViewSubImage(f,et);ut=x.viewport,$e===0&&(e.setRenderTargetTextures(A,x.colorTexture,f.ignoreDepthValues?void 0:x.depthStencilTexture),e.setRenderTarget(A))}let rt=re[$e];rt===void 0&&(rt=new jt,rt.layers.enable($e),rt.viewport=new ot,re[$e]=rt),rt.matrix.fromArray(et.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(et.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(ut.x,ut.y,ut.width,ut.height),$e===0&&(b.matrix.copy(rt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Me===!0&&b.cameras.push(rt)}const je=s.enabledFeatures;if(je&&je.includes("depth-sensing")){const $e=d.getDepthInformation(ye[0]);$e&&$e.isValid&&$e.texture&&_.init(e,$e,s.renderState)}}for(let ye=0;ye<S.length;ye++){const Me=w[ye],je=S[ye];Me!==null&&je!==void 0&&je.update(Me,ve,c||o)}Ae&&Ae(le,ve),ve.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ve}),v=null}u(Ye,"onAnimationFrame");const Qe=new Ex;Qe.setAnimationLoop(Ye),this.setAnimationLoop=function(le){Ae=le},this.dispose=function(){}}};u(pm,"WebXRManager");let pd=pm;const zs=new bi,uC=new Ke;function hC(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}u(t,"refreshTransformUniform");function i(g,m){m.color.getRGB(g.fogColor.value,Sx(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}u(i,"refreshFogUniforms");function s(g,m,A,S,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&p(g,m,w)):m.isMeshMatcapMaterial?(r(g,m),v(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,A,S):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}u(s,"refreshMaterialUniforms");function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===_n&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===_n&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const A=e.get(m),S=A.envMap,w=A.envMapRotation;S&&(g.envMap.value=S,zs.copy(w),zs.x*=-1,zs.y*=-1,zs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),g.envMapRotation.value.setFromMatrix4(uC.makeRotationFromEuler(zs)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}u(r,"refreshUniformsCommon");function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}u(o,"refreshUniformsLine");function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}u(a,"refreshUniformsDash");function l(g,m,A,S){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*A,g.scale.value=S*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}u(l,"refreshUniformsPoints");function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}u(c,"refreshUniformsSprites");function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}u(h,"refreshUniformsPhong");function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}u(d,"refreshUniformsToon");function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}u(f,"refreshUniformsStandard");function p(g,m,A){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===_n&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=A.texture,g.transmissionSamplerSize.value.set(A.width,A.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}u(p,"refreshUniformsPhysical");function v(g,m){m.matcap&&(g.matcap.value=m.matcap)}u(v,"refreshUniformsMatcap");function _(g,m){const A=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(A.matrixWorld),g.nearDistance.value=A.shadow.camera.near,g.farDistance.value=A.shadow.camera.far}return u(_,"refreshUniformsDistance"),{refreshFogUniforms:i,refreshMaterialUniforms:s}}u(hC,"WebGLMaterials");function dC(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,S){const w=S.program;i.uniformBlockBinding(A,w)}u(l,"bind");function c(A,S){let w=s[A.id];w===void 0&&(v(A),w=h(A),s[A.id]=w,A.addEventListener("dispose",g));const B=S.program;i.updateUBOMapping(A,B);const P=e.render.frame;r[A.id]!==P&&(f(A),r[A.id]=P)}u(c,"update");function h(A){const S=d();A.__bindingPointIndex=S;const w=n.createBuffer(),B=A.__size,P=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,B,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,w),w}u(h,"createBuffer");function d(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}u(d,"allocateBindingPointIndex");function f(A){const S=s[A.id],w=A.uniforms,B=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let P=0,R=w.length;P<R;P++){const O=Array.isArray(w[P])?w[P]:[w[P]];for(let re=0,b=O.length;re<b;re++){const T=O[re];if(p(T,P,re,B)===!0){const z=T.__offset,$=Array.isArray(T.value)?T.value:[T.value];let ie=0;for(let ce=0;ce<$.length;ce++){const Z=$[ce],se=_(Z);typeof Z=="number"||typeof Z=="boolean"?(T.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,z+ie,T.__data)):Z.isMatrix3?(T.__data[0]=Z.elements[0],T.__data[1]=Z.elements[1],T.__data[2]=Z.elements[2],T.__data[3]=0,T.__data[4]=Z.elements[3],T.__data[5]=Z.elements[4],T.__data[6]=Z.elements[5],T.__data[7]=0,T.__data[8]=Z.elements[6],T.__data[9]=Z.elements[7],T.__data[10]=Z.elements[8],T.__data[11]=0):(Z.toArray(T.__data,ie),ie+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}u(f,"updateBufferData");function p(A,S,w,B){const P=A.value,R=S+"_"+w;if(B[R]===void 0)return typeof P=="number"||typeof P=="boolean"?B[R]=P:B[R]=P.clone(),!0;{const O=B[R];if(typeof P=="number"||typeof P=="boolean"){if(O!==P)return B[R]=P,!0}else if(O.equals(P)===!1)return O.copy(P),!0}return!1}u(p,"hasUniformChanged");function v(A){const S=A.uniforms;let w=0;const B=16;for(let R=0,O=S.length;R<O;R++){const re=Array.isArray(S[R])?S[R]:[S[R]];for(let b=0,T=re.length;b<T;b++){const z=re[b],$=Array.isArray(z.value)?z.value:[z.value];for(let ie=0,ce=$.length;ie<ce;ie++){const Z=$[ie],se=_(Z),X=w%B,Te=X%se.boundary,we=X+Te;w+=Te,we!==0&&B-we<se.storage&&(w+=B-we),z.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=w,w+=se.storage}}}const P=w%B;return P>0&&(w+=B-P),A.__size=w,A.__cache={},this}u(v,"prepareUniformsGroup");function _(A){const S={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(S.boundary=4,S.storage=4):A.isVector2?(S.boundary=8,S.storage=8):A.isVector3||A.isColor?(S.boundary=16,S.storage=12):A.isVector4?(S.boundary=16,S.storage=16):A.isMatrix3?(S.boundary=48,S.storage=48):A.isMatrix4?(S.boundary=64,S.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),S}u(_,"getUniformSize");function g(A){const S=A.target;S.removeEventListener("dispose",g);const w=o.indexOf(S.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}u(g,"onUniformsGroupsDispose");function m(){for(const A in s)n.deleteBuffer(s[A]);o=[],s={},r={}}return u(m,"dispose"),{bind:l,update:c,dispose:m}}u(dC,"WebGLUniformsGroups");const mm=class mm{constructor(e={}){const{canvas:t=gS(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),v=new Int32Array(4);let _=null,g=null;const m=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dn,this.toneMapping=fs,this.toneMappingExposure=1;const S=this;let w=!1,B=0,P=0,R=null,O=-1,re=null;const b=new ot,T=new ot;let z=null;const $=new De(0);let ie=0,ce=t.width,Z=t.height,se=1,X=null,Te=null;const we=new ot(0,0,ce,Z),Ae=new ot(0,0,ce,Z);let Ye=!1;const Qe=new Zo;let le=!1,ve=!1;const ye=new Ke,Me=new Ke,je=new D,$e=new ot,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function rt(){return R===null?se:1}u(rt,"getTargetPixelRatio");let x=i;function k(C,G){return t.getContext(C,G)}u(k,"getContext");try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yf}`),t.addEventListener("webglcontextlost",V,!1),t.addEventListener("webglcontextrestored",ee,!1),t.addEventListener("webglcontextcreationerror",de,!1),x===null){const G="webgl2";if(x=k(G,C),x===null)throw k(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Y,ne,q,oe,ae,E,y,I,H,J,j,pe,fe,ge,Fe,me,be,Ge,We,Re,nt,ke,F,M;function L(){Y=new Cw(x),Y.init(),ke=new oC(x,Y),ne=new Mw(x,Y,e,ke),q=new iC(x),ne.reverseDepthBuffer&&q.buffers.depth.setReversed(!0),oe=new Dw(x),ae=new WA,E=new rC(x,Y,q,ae,ne,ke,oe),y=new Ew(S),I=new Aw(S),H=new BS(x),F=new yw(x,H),J=new Rw(x,H,oe,F),j=new Lw(x,J,H,oe),We=new Iw(x,ne,E),me=new Sw(ae),pe=new GA(S,y,I,Y,ne,F,me),fe=new hC(S,ae),ge=new jA,Fe=new JA(Y),Ge=new xw(S,y,I,q,j,f,l),be=new tC(S,j,ne),M=new dC(x,oe,ne,q),Re=new bw(x,Y,oe),nt=new Pw(x,Y,oe),oe.programs=pe.programs,S.capabilities=ne,S.extensions=Y,S.properties=ae,S.renderLists=ge,S.shadowMap=be,S.state=q,S.info=oe}u(L,"initGLContext"),L();const N=new pd(S,x);this.xr=N,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const C=Y.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Y.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(C){C!==void 0&&(se=C,this.setSize(ce,Z,!1))},this.getSize=function(C){return C.set(ce,Z)},this.setSize=function(C,G,Q=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=C,Z=G,t.width=Math.floor(C*se),t.height=Math.floor(G*se),Q===!0&&(t.style.width=C+"px",t.style.height=G+"px"),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(ce*se,Z*se).floor()},this.setDrawingBufferSize=function(C,G,Q){ce=C,Z=G,se=Q,t.width=Math.floor(C*Q),t.height=Math.floor(G*Q),this.setViewport(0,0,C,G)},this.getCurrentViewport=function(C){return C.copy(b)},this.getViewport=function(C){return C.copy(we)},this.setViewport=function(C,G,Q,te){C.isVector4?we.set(C.x,C.y,C.z,C.w):we.set(C,G,Q,te),q.viewport(b.copy(we).multiplyScalar(se).round())},this.getScissor=function(C){return C.copy(Ae)},this.setScissor=function(C,G,Q,te){C.isVector4?Ae.set(C.x,C.y,C.z,C.w):Ae.set(C,G,Q,te),q.scissor(T.copy(Ae).multiplyScalar(se).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(C){q.setScissorTest(Ye=C)},this.setOpaqueSort=function(C){X=C},this.setTransparentSort=function(C){Te=C},this.getClearColor=function(C){return C.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor.apply(Ge,arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha.apply(Ge,arguments)},this.clear=function(C=!0,G=!0,Q=!0){let te=0;if(C){let W=!1;if(R!==null){const _e=R.texture.format;W=_e===tp||_e===ep||_e===Qf}if(W){const _e=R.texture.type,Pe=_e===Bi||_e===Qs||_e===jo||_e===er||_e===Kf||_e===Zf,Oe=Ge.getClearColor(),Be=Ge.getClearAlpha(),qe=Oe.r,Ze=Oe.g,ze=Oe.b;Pe?(p[0]=qe,p[1]=Ze,p[2]=ze,p[3]=Be,x.clearBufferuiv(x.COLOR,0,p)):(v[0]=qe,v[1]=Ze,v[2]=ze,v[3]=Be,x.clearBufferiv(x.COLOR,0,v))}else te|=x.COLOR_BUFFER_BIT}G&&(te|=x.DEPTH_BUFFER_BIT,x.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Q&&(te|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",V,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",de,!1),ge.dispose(),Fe.dispose(),ae.dispose(),y.dispose(),I.dispose(),j.dispose(),F.dispose(),M.dispose(),pe.dispose(),N.dispose(),N.removeEventListener("sessionstart",pa),N.removeEventListener("sessionend",c0),Ps.stop()};function V(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}u(V,"onContextLost");function ee(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const C=oe.autoReset,G=be.enabled,Q=be.autoUpdate,te=be.needsUpdate,W=be.type;L(),oe.autoReset=C,be.enabled=G,be.autoUpdate=Q,be.needsUpdate=te,be.type=W}u(ee,"onContextRestore");function de(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}u(de,"onContextCreationError");function Ce(C){const G=C.target;G.removeEventListener("dispose",Ce),Le(G)}u(Ce,"onMaterialDispose");function Le(C){Ne(C),ae.remove(C)}u(Le,"deallocateMaterial");function Ne(C){const G=ae.get(C).programs;G!==void 0&&(G.forEach(function(Q){pe.releaseProgram(Q)}),C.isShaderMaterial&&pe.releaseShaderCache(C))}u(Ne,"releaseMaterialProgramReferences"),this.renderBufferDirect=function(C,G,Q,te,W,_e){G===null&&(G=et);const Pe=W.isMesh&&W.matrixWorld.determinant()<0,Oe=kx(C,G,Q,te,W);q.setMaterial(te,Pe);let Be=Q.index,qe=1;if(te.wireframe===!0){if(Be=J.getWireframeAttribute(Q),Be===void 0)return;qe=2}const Ze=Q.drawRange,ze=Q.attributes.position;let vt=Ze.start*qe,Et=(Ze.start+Ze.count)*qe;_e!==null&&(vt=Math.max(vt,_e.start*qe),Et=Math.min(Et,(_e.start+_e.count)*qe)),Be!==null?(vt=Math.max(vt,0),Et=Math.min(Et,Be.count)):ze!=null&&(vt=Math.max(vt,0),Et=Math.min(Et,ze.count));const It=Et-vt;if(It<0||It===1/0)return;F.setup(W,te,Oe,Q,Be);let Ln,mt=Re;if(Be!==null&&(Ln=H.get(Be),mt=nt,mt.setIndex(Ln)),W.isMesh)te.wireframe===!0?(q.setLineWidth(te.wireframeLinewidth*rt()),mt.setMode(x.LINES)):mt.setMode(x.TRIANGLES);else if(W.isLine){let He=te.linewidth;He===void 0&&(He=1),q.setLineWidth(He*rt()),W.isLineSegments?mt.setMode(x.LINES):W.isLineLoop?mt.setMode(x.LINE_LOOP):mt.setMode(x.LINE_STRIP)}else W.isPoints?mt.setMode(x.POINTS):W.isSprite&&mt.setMode(x.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)mt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Y.get("WEBGL_multi_draw"))mt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const He=W._multiDrawStarts,en=W._multiDrawCounts,gt=W._multiDrawCount,ei=Be?H.get(Be).bytesPerElement:1,lr=ae.get(te).currentProgram.getUniforms();for(let Nn=0;Nn<gt;Nn++)lr.setValue(x,"_gl_DrawID",Nn),mt.render(He[Nn]/ei,en[Nn])}else if(W.isInstancedMesh)mt.renderInstances(vt,It,W.count);else if(Q.isInstancedBufferGeometry){const He=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,en=Math.min(Q.instanceCount,He);mt.renderInstances(vt,It,en)}else mt.render(vt,It)};function Ie(C,G,Q){C.transparent===!0&&C.side===vn&&C.forceSinglePass===!1?(C.side=_n,C.needsUpdate=!0,ga(C,G,Q),C.side=yi,C.needsUpdate=!0,ga(C,G,Q),C.side=vn):ga(C,G,Q)}u(Ie,"prepareMaterial"),this.compile=function(C,G,Q=null){Q===null&&(Q=C),g=Fe.get(Q),g.init(G),A.push(g),Q.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),C!==Q&&C.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights();const te=new Set;return C.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const _e=W.material;if(_e)if(Array.isArray(_e))for(let Pe=0;Pe<_e.length;Pe++){const Oe=_e[Pe];Ie(Oe,Q,W),te.add(Oe)}else Ie(_e,Q,W),te.add(_e)}),A.pop(),g=null,te},this.compileAsync=function(C,G,Q=null){const te=this.compile(C,G,Q);return new Promise(W=>{function _e(){if(te.forEach(function(Pe){ae.get(Pe).currentProgram.isReady()&&te.delete(Pe)}),te.size===0){W(C);return}setTimeout(_e,10)}u(_e,"checkMaterialsReady"),Y.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Rt=null;function Qn(C){Rt&&Rt(C)}u(Qn,"onAnimationFrame");function pa(){Ps.stop()}u(pa,"onXRSessionStart");function c0(){Ps.start()}u(c0,"onXRSessionEnd");const Ps=new Ex;Ps.setAnimationLoop(Qn),typeof self<"u"&&Ps.setContext(self),this.setAnimationLoop=function(C){Rt=C,N.setAnimationLoop(C),C===null?Ps.stop():Ps.start()},N.addEventListener("sessionstart",pa),N.addEventListener("sessionend",c0),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(G),G=N.getCamera()),C.isScene===!0&&C.onBeforeRender(S,C,G,R),g=Fe.get(C,A.length),g.init(G),A.push(g),Me.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Qe.setFromProjectionMatrix(Me),ve=this.localClippingEnabled,le=me.init(this.clippingPlanes,ve),_=ge.get(C,m.length),_.init(),m.push(_),N.enabled===!0&&N.isPresenting===!0){const _e=S.xr.getDepthSensingMesh();_e!==null&&Gc(_e,G,-1/0,S.sortObjects)}Gc(C,G,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(X,Te),ut=N.enabled===!1||N.isPresenting===!1||N.hasDepthSensing()===!1,ut&&Ge.addToRenderList(_,C),this.info.render.frame++,le===!0&&me.beginShadows();const Q=g.state.shadowsArray;be.render(Q,C,G),le===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=_.opaque,W=_.transmissive;if(g.setupLights(),G.isArrayCamera){const _e=G.cameras;if(W.length>0)for(let Pe=0,Oe=_e.length;Pe<Oe;Pe++){const Be=_e[Pe];h0(te,W,C,Be)}ut&&Ge.render(C);for(let Pe=0,Oe=_e.length;Pe<Oe;Pe++){const Be=_e[Pe];u0(_,C,Be,Be.viewport)}}else W.length>0&&h0(te,W,C,G),ut&&Ge.render(C),u0(_,C,G);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),C.isScene===!0&&C.onAfterRender(S,C,G),F.resetDefaultState(),O=-1,re=null,A.pop(),A.length>0?(g=A[A.length-1],le===!0&&me.setGlobalState(S.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Gc(C,G,Q,te){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)Q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Qe.intersectsSprite(C)){te&&$e.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Me);const Pe=j.update(C),Oe=C.material;Oe.visible&&_.push(C,Pe,Oe,Q,$e.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Qe.intersectsObject(C))){const Pe=j.update(C),Oe=C.material;if(te&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),$e.copy(C.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),$e.copy(Pe.boundingSphere.center)),$e.applyMatrix4(C.matrixWorld).applyMatrix4(Me)),Array.isArray(Oe)){const Be=Pe.groups;for(let qe=0,Ze=Be.length;qe<Ze;qe++){const ze=Be[qe],vt=Oe[ze.materialIndex];vt&&vt.visible&&_.push(C,Pe,vt,Q,$e.z,ze)}}else Oe.visible&&_.push(C,Pe,Oe,Q,$e.z,null)}}const _e=C.children;for(let Pe=0,Oe=_e.length;Pe<Oe;Pe++)Gc(_e[Pe],G,Q,te)}u(Gc,"projectObject");function u0(C,G,Q,te){const W=C.opaque,_e=C.transmissive,Pe=C.transparent;g.setupLightsView(Q),le===!0&&me.setGlobalState(S.clippingPlanes,Q),te&&q.viewport(b.copy(te)),W.length>0&&ma(W,G,Q),_e.length>0&&ma(_e,G,Q),Pe.length>0&&ma(Pe,G,Q),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}u(u0,"renderScene");function h0(C,G,Q,te){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[te.id]===void 0&&(g.state.transmissionRenderTarget[te.id]=new $t(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float")?En:Bi,minFilter:Ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));const _e=g.state.transmissionRenderTarget[te.id],Pe=te.viewport||b;_e.setSize(Pe.z,Pe.w);const Oe=S.getRenderTarget();S.setRenderTarget(_e),S.getClearColor($),ie=S.getClearAlpha(),ie<1&&S.setClearColor(16777215,.5),S.clear(),ut&&Ge.render(Q);const Be=S.toneMapping;S.toneMapping=fs;const qe=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),g.setupLightsView(te),le===!0&&me.setGlobalState(S.clippingPlanes,te),ma(C,Q,te),E.updateMultisampleRenderTarget(_e),E.updateRenderTargetMipmap(_e),Y.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let ze=0,vt=G.length;ze<vt;ze++){const Et=G[ze],It=Et.object,Ln=Et.geometry,mt=Et.material,He=Et.group;if(mt.side===vn&&It.layers.test(te.layers)){const en=mt.side;mt.side=_n,mt.needsUpdate=!0,d0(It,Q,te,Ln,mt,He),mt.side=en,mt.needsUpdate=!0,Ze=!0}}Ze===!0&&(E.updateMultisampleRenderTarget(_e),E.updateRenderTargetMipmap(_e))}S.setRenderTarget(Oe),S.setClearColor($,ie),qe!==void 0&&(te.viewport=qe),S.toneMapping=Be}u(h0,"renderTransmissionPass");function ma(C,G,Q){const te=G.isScene===!0?G.overrideMaterial:null;for(let W=0,_e=C.length;W<_e;W++){const Pe=C[W],Oe=Pe.object,Be=Pe.geometry,qe=te===null?Pe.material:te,Ze=Pe.group;Oe.layers.test(Q.layers)&&d0(Oe,G,Q,Be,qe,Ze)}}u(ma,"renderObjects");function d0(C,G,Q,te,W,_e){C.onBeforeRender(S,G,Q,te,W,_e),C.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),W.onBeforeRender(S,G,Q,te,C,_e),W.transparent===!0&&W.side===vn&&W.forceSinglePass===!1?(W.side=_n,W.needsUpdate=!0,S.renderBufferDirect(Q,G,te,W,C,_e),W.side=yi,W.needsUpdate=!0,S.renderBufferDirect(Q,G,te,W,C,_e),W.side=vn):S.renderBufferDirect(Q,G,te,W,C,_e),C.onAfterRender(S,G,Q,te,W,_e)}u(d0,"renderObject");function ga(C,G,Q){G.isScene!==!0&&(G=et);const te=ae.get(C),W=g.state.lights,_e=g.state.shadowsArray,Pe=W.state.version,Oe=pe.getParameters(C,W.state,_e,G,Q),Be=pe.getProgramCacheKey(Oe);let qe=te.programs;te.environment=C.isMeshStandardMaterial?G.environment:null,te.fog=G.fog,te.envMap=(C.isMeshStandardMaterial?I:y).get(C.envMap||te.environment),te.envMapRotation=te.environment!==null&&C.envMap===null?G.environmentRotation:C.envMapRotation,qe===void 0&&(C.addEventListener("dispose",Ce),qe=new Map,te.programs=qe);let Ze=qe.get(Be);if(Ze!==void 0){if(te.currentProgram===Ze&&te.lightsStateVersion===Pe)return p0(C,Oe),Ze}else Oe.uniforms=pe.getUniforms(C),C.onBeforeCompile(Oe,S),Ze=pe.acquireProgram(Oe,Be),qe.set(Be,Ze),te.uniforms=Oe.uniforms;const ze=te.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ze.clippingPlanes=me.uniform),p0(C,Oe),te.needsLights=Vx(C),te.lightsStateVersion=Pe,te.needsLights&&(ze.ambientLightColor.value=W.state.ambient,ze.lightProbe.value=W.state.probe,ze.directionalLights.value=W.state.directional,ze.directionalLightShadows.value=W.state.directionalShadow,ze.spotLights.value=W.state.spot,ze.spotLightShadows.value=W.state.spotShadow,ze.rectAreaLights.value=W.state.rectArea,ze.ltc_1.value=W.state.rectAreaLTC1,ze.ltc_2.value=W.state.rectAreaLTC2,ze.pointLights.value=W.state.point,ze.pointLightShadows.value=W.state.pointShadow,ze.hemisphereLights.value=W.state.hemi,ze.directionalShadowMap.value=W.state.directionalShadowMap,ze.directionalShadowMatrix.value=W.state.directionalShadowMatrix,ze.spotShadowMap.value=W.state.spotShadowMap,ze.spotLightMatrix.value=W.state.spotLightMatrix,ze.spotLightMap.value=W.state.spotLightMap,ze.pointShadowMap.value=W.state.pointShadowMap,ze.pointShadowMatrix.value=W.state.pointShadowMatrix),te.currentProgram=Ze,te.uniformsList=null,Ze}u(ga,"getProgram");function f0(C){if(C.uniformsList===null){const G=C.currentProgram.getUniforms();C.uniformsList=$r.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}u(f0,"getUniformList");function p0(C,G){const Q=ae.get(C);Q.outputColorSpace=G.outputColorSpace,Q.batching=G.batching,Q.batchingColor=G.batchingColor,Q.instancing=G.instancing,Q.instancingColor=G.instancingColor,Q.instancingMorph=G.instancingMorph,Q.skinning=G.skinning,Q.morphTargets=G.morphTargets,Q.morphNormals=G.morphNormals,Q.morphColors=G.morphColors,Q.morphTargetsCount=G.morphTargetsCount,Q.numClippingPlanes=G.numClippingPlanes,Q.numIntersection=G.numClipIntersection,Q.vertexAlphas=G.vertexAlphas,Q.vertexTangents=G.vertexTangents,Q.toneMapping=G.toneMapping}u(p0,"updateCommonMaterialProperties");function kx(C,G,Q,te,W){G.isScene!==!0&&(G=et),E.resetTextureUnits();const _e=G.fog,Pe=te.isMeshStandardMaterial?G.environment:null,Oe=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:an,Be=(te.isMeshStandardMaterial?I:y).get(te.envMap||Pe),qe=te.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ze=!!Q.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),ze=!!Q.morphAttributes.position,vt=!!Q.morphAttributes.normal,Et=!!Q.morphAttributes.color;let It=fs;te.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(It=S.toneMapping);const Ln=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,mt=Ln!==void 0?Ln.length:0,He=ae.get(te),en=g.state.lights;if(le===!0&&(ve===!0||C!==re)){const kn=C===re&&te.id===O;me.setState(te,C,kn)}let gt=!1;te.version===He.__version?(He.needsLights&&He.lightsStateVersion!==en.state.version||He.outputColorSpace!==Oe||W.isBatchedMesh&&He.batching===!1||!W.isBatchedMesh&&He.batching===!0||W.isBatchedMesh&&He.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&He.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&He.instancing===!1||!W.isInstancedMesh&&He.instancing===!0||W.isSkinnedMesh&&He.skinning===!1||!W.isSkinnedMesh&&He.skinning===!0||W.isInstancedMesh&&He.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&He.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&He.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&He.instancingMorph===!1&&W.morphTexture!==null||He.envMap!==Be||te.fog===!0&&He.fog!==_e||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==me.numPlanes||He.numIntersection!==me.numIntersection)||He.vertexAlphas!==qe||He.vertexTangents!==Ze||He.morphTargets!==ze||He.morphNormals!==vt||He.morphColors!==Et||He.toneMapping!==It||He.morphTargetsCount!==mt)&&(gt=!0):(gt=!0,He.__version=te.version);let ei=He.currentProgram;gt===!0&&(ei=ga(te,G,W));let lr=!1,Nn=!1,Wc=!1;const Ot=ei.getUniforms(),Hi=He.uniforms;if(q.useProgram(ei.program)&&(lr=!0,Nn=!0,Wc=!0),te.id!==O&&(O=te.id,Nn=!0),lr||re!==C){ne.reverseDepthBuffer?(ye.copy(C.projectionMatrix),_S(ye),xS(ye),Ot.setValue(x,"projectionMatrix",ye)):Ot.setValue(x,"projectionMatrix",C.projectionMatrix),Ot.setValue(x,"viewMatrix",C.matrixWorldInverse);const kn=Ot.map.cameraPosition;kn!==void 0&&kn.setValue(x,je.setFromMatrixPosition(C.matrixWorld)),ne.logarithmicDepthBuffer&&Ot.setValue(x,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Ot.setValue(x,"isOrthographic",C.isOrthographicCamera===!0),re!==C&&(re=C,Nn=!0,Wc=!0)}if(W.isSkinnedMesh){Ot.setOptional(x,W,"bindMatrix"),Ot.setOptional(x,W,"bindMatrixInverse");const kn=W.skeleton;kn&&(kn.boneTexture===null&&kn.computeBoneTexture(),Ot.setValue(x,"boneTexture",kn.boneTexture,E))}W.isBatchedMesh&&(Ot.setOptional(x,W,"batchingTexture"),Ot.setValue(x,"batchingTexture",W._matricesTexture,E),Ot.setOptional(x,W,"batchingIdTexture"),Ot.setValue(x,"batchingIdTexture",W._indirectTexture,E),Ot.setOptional(x,W,"batchingColorTexture"),W._colorsTexture!==null&&Ot.setValue(x,"batchingColorTexture",W._colorsTexture,E));const $c=Q.morphAttributes;if(($c.position!==void 0||$c.normal!==void 0||$c.color!==void 0)&&We.update(W,Q,ei),(Nn||He.receiveShadow!==W.receiveShadow)&&(He.receiveShadow=W.receiveShadow,Ot.setValue(x,"receiveShadow",W.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Hi.envMap.value=Be,Hi.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&G.environment!==null&&(Hi.envMapIntensity.value=G.environmentIntensity),Nn&&(Ot.setValue(x,"toneMappingExposure",S.toneMappingExposure),He.needsLights&&zx(Hi,Wc),_e&&te.fog===!0&&fe.refreshFogUniforms(Hi,_e),fe.refreshMaterialUniforms(Hi,te,se,Z,g.state.transmissionRenderTarget[C.id]),$r.upload(x,f0(He),Hi,E)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&($r.upload(x,f0(He),Hi,E),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Ot.setValue(x,"center",W.center),Ot.setValue(x,"modelViewMatrix",W.modelViewMatrix),Ot.setValue(x,"normalMatrix",W.normalMatrix),Ot.setValue(x,"modelMatrix",W.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const kn=te.uniformsGroups;for(let jc=0,Hx=kn.length;jc<Hx;jc++){const m0=kn[jc];M.update(m0,ei),M.bind(m0,ei)}}return ei}u(kx,"setProgram");function zx(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}u(zx,"markUniformsLightsNeedsUpdate");function Vx(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}u(Vx,"materialNeedsLights"),this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(C,G,Q){ae.get(C.texture).__webglTexture=G,ae.get(C.depthTexture).__webglTexture=Q;const te=ae.get(C);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=Q===void 0,te.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,G){const Q=ae.get(C);Q.__webglFramebuffer=G,Q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(C,G=0,Q=0){R=C,B=G,P=Q;let te=!0,W=null,_e=!1,Pe=!1;if(C){const Be=ae.get(C);if(Be.__useDefaultFramebuffer!==void 0)q.bindFramebuffer(x.FRAMEBUFFER,null),te=!1;else if(Be.__webglFramebuffer===void 0)E.setupRenderTarget(C);else if(Be.__hasExternalTextures)E.rebindTextures(C,ae.get(C.texture).__webglTexture,ae.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ze=C.depthTexture;if(Be.__boundDepthTexture!==ze){if(ze!==null&&ae.has(ze)&&(C.width!==ze.image.width||C.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(C)}}const qe=C.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Pe=!0);const Ze=ae.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ze[G])?W=Ze[G][Q]:W=Ze[G],_e=!0):C.samples>0&&E.useMultisampledRTT(C)===!1?W=ae.get(C).__webglMultisampledFramebuffer:Array.isArray(Ze)?W=Ze[Q]:W=Ze,b.copy(C.viewport),T.copy(C.scissor),z=C.scissorTest}else b.copy(we).multiplyScalar(se).floor(),T.copy(Ae).multiplyScalar(se).floor(),z=Ye;if(q.bindFramebuffer(x.FRAMEBUFFER,W)&&te&&q.drawBuffers(C,W),q.viewport(b),q.scissor(T),q.setScissorTest(z),_e){const Be=ae.get(C.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+G,Be.__webglTexture,Q)}else if(Pe){const Be=ae.get(C.texture),qe=G||0;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,Be.__webglTexture,Q||0,qe)}O=-1},this.readRenderTargetPixels=function(C,G,Q,te,W,_e,Pe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=ae.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pe!==void 0&&(Oe=Oe[Pe]),Oe){q.bindFramebuffer(x.FRAMEBUFFER,Oe);try{const Be=C.texture,qe=Be.format,Ze=Be.type;if(!ne.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-te&&Q>=0&&Q<=C.height-W&&x.readPixels(G,Q,te,W,ke.convert(qe),ke.convert(Ze),_e)}finally{const Be=R!==null?ae.get(R).__webglFramebuffer:null;q.bindFramebuffer(x.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(C,G,Q,te,W,_e,Pe){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=ae.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pe!==void 0&&(Oe=Oe[Pe]),Oe){const Be=C.texture,qe=Be.format,Ze=Be.type;if(!ne.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=C.width-te&&Q>=0&&Q<=C.height-W){q.bindFramebuffer(x.FRAMEBUFFER,Oe);const ze=x.createBuffer();x.bindBuffer(x.PIXEL_PACK_BUFFER,ze),x.bufferData(x.PIXEL_PACK_BUFFER,_e.byteLength,x.STREAM_READ),x.readPixels(G,Q,te,W,ke.convert(qe),ke.convert(Ze),0);const vt=R!==null?ae.get(R).__webglFramebuffer:null;q.bindFramebuffer(x.FRAMEBUFFER,vt);const Et=x.fenceSync(x.SYNC_GPU_COMMANDS_COMPLETE,0);return x.flush(),await vS(x,Et,4),x.bindBuffer(x.PIXEL_PACK_BUFFER,ze),x.getBufferSubData(x.PIXEL_PACK_BUFFER,0,_e),x.deleteBuffer(ze),x.deleteSync(Et),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,G=null,Q=0){C.isTexture!==!0&&(vl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,C=arguments[1]);const te=Math.pow(2,-Q),W=Math.floor(C.image.width*te),_e=Math.floor(C.image.height*te),Pe=G!==null?G.x:0,Oe=G!==null?G.y:0;E.setTexture2D(C,0),x.copyTexSubImage2D(x.TEXTURE_2D,Q,0,0,Pe,Oe,W,_e),q.unbindTexture()},this.copyTextureToTexture=function(C,G,Q=null,te=null,W=0){C.isTexture!==!0&&(vl("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,C=arguments[1],G=arguments[2],W=arguments[3]||0,Q=null);let _e,Pe,Oe,Be,qe,Ze;Q!==null?(_e=Q.max.x-Q.min.x,Pe=Q.max.y-Q.min.y,Oe=Q.min.x,Be=Q.min.y):(_e=C.image.width,Pe=C.image.height,Oe=0,Be=0),te!==null?(qe=te.x,Ze=te.y):(qe=0,Ze=0);const ze=ke.convert(G.format),vt=ke.convert(G.type);E.setTexture2D(G,0),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,G.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,G.unpackAlignment);const Et=x.getParameter(x.UNPACK_ROW_LENGTH),It=x.getParameter(x.UNPACK_IMAGE_HEIGHT),Ln=x.getParameter(x.UNPACK_SKIP_PIXELS),mt=x.getParameter(x.UNPACK_SKIP_ROWS),He=x.getParameter(x.UNPACK_SKIP_IMAGES),en=C.isCompressedTexture?C.mipmaps[W]:C.image;x.pixelStorei(x.UNPACK_ROW_LENGTH,en.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,en.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,Oe),x.pixelStorei(x.UNPACK_SKIP_ROWS,Be),C.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,W,qe,Ze,_e,Pe,ze,vt,en.data):C.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,W,qe,Ze,en.width,en.height,ze,en.data):x.texSubImage2D(x.TEXTURE_2D,W,qe,Ze,_e,Pe,ze,vt,en),x.pixelStorei(x.UNPACK_ROW_LENGTH,Et),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,It),x.pixelStorei(x.UNPACK_SKIP_PIXELS,Ln),x.pixelStorei(x.UNPACK_SKIP_ROWS,mt),x.pixelStorei(x.UNPACK_SKIP_IMAGES,He),W===0&&G.generateMipmaps&&x.generateMipmap(x.TEXTURE_2D),q.unbindTexture()},this.copyTextureToTexture3D=function(C,G,Q=null,te=null,W=0){C.isTexture!==!0&&(vl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,te=arguments[1]||null,C=arguments[2],G=arguments[3],W=arguments[4]||0);let _e,Pe,Oe,Be,qe,Ze,ze,vt,Et;const It=C.isCompressedTexture?C.mipmaps[W]:C.image;Q!==null?(_e=Q.max.x-Q.min.x,Pe=Q.max.y-Q.min.y,Oe=Q.max.z-Q.min.z,Be=Q.min.x,qe=Q.min.y,Ze=Q.min.z):(_e=It.width,Pe=It.height,Oe=It.depth,Be=0,qe=0,Ze=0),te!==null?(ze=te.x,vt=te.y,Et=te.z):(ze=0,vt=0,Et=0);const Ln=ke.convert(G.format),mt=ke.convert(G.type);let He;if(G.isData3DTexture)E.setTexture3D(G,0),He=x.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)E.setTexture2DArray(G,0),He=x.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,G.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,G.unpackAlignment);const en=x.getParameter(x.UNPACK_ROW_LENGTH),gt=x.getParameter(x.UNPACK_IMAGE_HEIGHT),ei=x.getParameter(x.UNPACK_SKIP_PIXELS),lr=x.getParameter(x.UNPACK_SKIP_ROWS),Nn=x.getParameter(x.UNPACK_SKIP_IMAGES);x.pixelStorei(x.UNPACK_ROW_LENGTH,It.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,It.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,Be),x.pixelStorei(x.UNPACK_SKIP_ROWS,qe),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Ze),C.isDataTexture||C.isData3DTexture?x.texSubImage3D(He,W,ze,vt,Et,_e,Pe,Oe,Ln,mt,It.data):G.isCompressedArrayTexture?x.compressedTexSubImage3D(He,W,ze,vt,Et,_e,Pe,Oe,Ln,It.data):x.texSubImage3D(He,W,ze,vt,Et,_e,Pe,Oe,Ln,mt,It),x.pixelStorei(x.UNPACK_ROW_LENGTH,en),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,gt),x.pixelStorei(x.UNPACK_SKIP_PIXELS,ei),x.pixelStorei(x.UNPACK_SKIP_ROWS,lr),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Nn),W===0&&G.generateMipmaps&&x.generateMipmap(He),q.unbindTexture()},this.initRenderTarget=function(C){ae.get(C).__webglFramebuffer===void 0&&E.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?E.setTextureCube(C,0):C.isData3DTexture?E.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?E.setTexture2DArray(C,0):E.setTexture2D(C,0),q.unbindTexture()},this.resetState=function(){B=0,P=0,R=null,q.reset(),F.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ip?"display-p3":"srgb",t.unpackColorSpace=dt.workingColorSpace===Bc?"display-p3":"srgb"}};u(mm,"WebGLRenderer");let Hl=mm;const vc=class vc{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new De(e),this.near=t,this.far=i}clone(){return new vc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}};u(vc,"Fog");let md=vc;const gm=class gm extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};u(gm,"Scene");let Gl=gm;const vm=class vm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qh,this.updateRanges=[],this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}};u(vm,"InterleavedBuffer");let Qo=vm;const pn=new D,_c=class _c{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ri(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ri(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new _c(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};u(_c,"InterleavedBufferAttribute");let li=_c;const _m=class _m extends Cn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};u(_m,"SpriteMaterial");let Jr=_m,Sr;const co=new D,Er=new D,Tr=new D,wr=new xe,uo=new xe,Rx=new Ke,Wa=new D,ho=new D,$a=new D,K1=new xe,Du=new xe,Z1=new xe,xm=class xm extends Ct{constructor(e=new Jr){if(super(),this.isSprite=!0,this.type="Sprite",Sr===void 0){Sr=new Bt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Qo(t,5);Sr.setIndex([0,1,2,0,2,3]),Sr.setAttribute("position",new li(i,3,0,!1)),Sr.setAttribute("uv",new li(i,2,3,!1))}this.geometry=Sr,this.material=e,this.center=new xe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Er.setFromMatrixScale(this.matrixWorld),Rx.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Tr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Er.multiplyScalar(-Tr.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;ja(Wa.set(-.5,-.5,0),Tr,o,Er,s,r),ja(ho.set(.5,-.5,0),Tr,o,Er,s,r),ja($a.set(.5,.5,0),Tr,o,Er,s,r),K1.set(0,0),Du.set(1,0),Z1.set(1,1);let a=e.ray.intersectTriangle(Wa,ho,$a,!1,co);if(a===null&&(ja(ho.set(-.5,.5,0),Tr,o,Er,s,r),Du.set(0,1),a=e.ray.intersectTriangle(Wa,$a,ho,!1,co),a===null))return;const l=e.ray.origin.distanceTo(co);l<e.near||l>e.far||t.push({distance:l,point:co.clone(),uv:as.getInterpolation(co,Wa,ho,$a,K1,Du,Z1,new xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};u(xm,"Sprite");let ea=xm;function ja(n,e,t,i,s,r){wr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(uo.x=r*wr.x-s*wr.y,uo.y=s*wr.x+r*wr.y):uo.copy(wr),n.copy(e),n.x+=uo.x,n.y+=uo.y,n.applyMatrix4(Rx)}u(ja,"transformVertex");const J1=new D,Q1=new ot,ev=new ot,fC=new D,tv=new Ke,Xa=new D,Iu=new In,nv=new Ke,Lu=new _s,ym=class ym extends St{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=i1,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Dn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Xa),this.boundingBox.expandByPoint(Xa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new In),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Xa),this.boundingSphere.expandByPoint(Xa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Iu.copy(this.boundingSphere),Iu.applyMatrix4(s),e.ray.intersectsSphere(Iu)!==!1&&(nv.copy(s).invert(),Lu.copy(e.ray).applyMatrix4(nv),!(this.boundingBox!==null&&Lu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Lu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ot,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===i1?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===HM?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Q1.fromBufferAttribute(s.attributes.skinIndex,e),ev.fromBufferAttribute(s.attributes.skinWeight,e),J1.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=ev.getComponent(r);if(o!==0){const a=Q1.getComponent(r);tv.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(fC.copy(J1).applyMatrix4(tv),o)}}return t.applyMatrix4(this.bindMatrixInverse)}};u(ym,"SkinnedMesh");let gd=ym;const bm=class bm extends Ct{constructor(){super(),this.isBone=!0,this.type="Bone"}};u(bm,"Bone");let Wl=bm;const Mm=class Mm extends ln{constructor(e=null,t=1,i=1,s,r,o,a,l,c=on,h=on,d,f){super(null,o,a,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};u(Mm,"DataTexture");let $l=Mm;const iv=new Ke,pC=new Ke,xc=class xc{constructor(e=[],t=[]){this.uuid=ci(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ke;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:pC;iv.multiplyMatrices(a,t[r]),iv.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new xc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new $l(t,e,e,Xn,ai);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Wl),this.bones.push(o),this.boneInverses.push(new Ke().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}};u(xc,"Skeleton");let vd=xc;const Sm=class Sm extends Nt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};u(Sm,"InstancedBufferAttribute");let ta=Sm;const Ar=new Ke,sv=new Ke,Ya=[],rv=new Dn,mC=new Ke,fo=new St,po=new In,Em=class Em extends St{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ta(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,mC)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ar),rv.copy(e.boundingBox).applyMatrix4(Ar),this.boundingBox.union(rv)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new In),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ar),po.copy(e.boundingSphere).applyMatrix4(Ar),this.boundingSphere.union(po)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(fo.geometry=this.geometry,fo.material=this.material,fo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),po.copy(this.boundingSphere),po.applyMatrix4(i),e.ray.intersectsSphere(po)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ar),sv.multiplyMatrices(i,Ar),fo.matrixWorld=sv,fo.raycast(e,Ya);for(let o=0,a=Ya.length;o<a;o++){const l=Ya[o];l.instanceId=r,l.object=this,t.push(l)}Ya.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ta(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new $l(new Float32Array(s*this.count),s,this.count,Jf,ai));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};u(Em,"InstancedMesh");let _d=Em;const Tm=class Tm extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}};u(Tm,"LineBasicMaterial");let ir=Tm;const jl=new D,Xl=new D,ov=new Ke,mo=new _s,qa=new In,Nu=new D,av=new D,wm=class wm extends Ct{constructor(e=new Bt,t=new ir){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)jl.fromBufferAttribute(t,s-1),Xl.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=jl.distanceTo(Xl);e.setAttribute("lineDistance",new Ft(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qa.copy(i.boundingSphere),qa.applyMatrix4(s),qa.radius+=r,e.ray.intersectsSphere(qa)===!1)return;ov.copy(s).invert(),mo.copy(e.ray).applyMatrix4(ov);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const p=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let _=p,g=v-1;_<g;_+=c){const m=h.getX(_),A=h.getX(_+1),S=Ka(this,e,mo,l,m,A);S&&t.push(S)}if(this.isLineLoop){const _=h.getX(v-1),g=h.getX(p),m=Ka(this,e,mo,l,_,g);m&&t.push(m)}}else{const p=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let _=p,g=v-1;_<g;_+=c){const m=Ka(this,e,mo,l,_,_+1);m&&t.push(m)}if(this.isLineLoop){const _=Ka(this,e,mo,l,v-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};u(wm,"Line");let sr=wm;function Ka(n,e,t,i,s,r){const o=n.geometry.attributes.position;if(jl.fromBufferAttribute(o,s),Xl.fromBufferAttribute(o,r),t.distanceSqToSegment(jl,Xl,Nu,av)>i)return;Nu.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Nu);if(!(l<e.near||l>e.far))return{distance:l,point:av.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}u(Ka,"checkIntersection");const lv=new D,cv=new D,Am=class Am extends sr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)lv.fromBufferAttribute(t,s),cv.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+lv.distanceTo(cv);e.setAttribute("lineDistance",new Ft(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};u(Am,"LineSegments");let Yl=Am;const Cm=class Cm extends sr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};u(Cm,"LineLoop");let xd=Cm;const Rm=class Rm extends Cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};u(Rm,"PointsMaterial");let ql=Rm;const uv=new Ke,yd=new _s,Za=new In,Ja=new D,Pm=class Pm extends Ct{constructor(e=new Bt,t=new ql){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Za.copy(i.boundingSphere),Za.applyMatrix4(s),Za.radius+=r,e.ray.intersectsSphere(Za)===!1)return;uv.copy(s).invert(),yd.copy(e.ray).applyMatrix4(uv);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=f,_=p;v<_;v++){const g=c.getX(v);Ja.fromBufferAttribute(d,g),hv(Ja,g,l,s,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=f,_=p;v<_;v++)Ja.fromBufferAttribute(d,v),hv(Ja,v,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};u(Pm,"Points");let bd=Pm;function hv(n,e,t,i,s,r,o){const a=yd.distanceSqToPoint(n);if(a<t){const l=new D;yd.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}u(hv,"testPoint");const Dm=class Dm extends ln{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};u(Dm,"CanvasTexture");let Md=Dm;const yc=class yc extends Bt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new D,f=new D,p=[],v=[],_=[],g=[];for(let m=0;m<=i;m++){const A=[],S=m/i;let w=0;m===0&&o===0?w=.5/t:m===i&&l===Math.PI&&(w=-.5/t);for(let B=0;B<=t;B++){const P=B/t;d.x=-e*Math.cos(s+P*r)*Math.sin(o+S*a),d.y=e*Math.cos(o+S*a),d.z=e*Math.sin(s+P*r)*Math.sin(o+S*a),v.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),g.push(P+w,1-S),A.push(c++)}h.push(A)}for(let m=0;m<i;m++)for(let A=0;A<t;A++){const S=h[m][A+1],w=h[m][A],B=h[m+1][A],P=h[m+1][A+1];(m!==0||o>0)&&p.push(S,w,P),(m!==i-1||l<Math.PI)&&p.push(w,B,P)}this.setIndex(p),this.setAttribute("position",new Ft(v,3)),this.setAttribute("normal",new Ft(_,3)),this.setAttribute("uv",new Ft(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};u(yc,"SphereGeometry");let na=yc;const Im=class Im extends Bt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,s=new D,r=new D;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const d=l[c],f=d.start,p=d.count;for(let v=f,_=f+p;v<_;v+=3)for(let g=0;g<3;g++){const m=a.getX(v+g),A=a.getX(v+(g+1)%3);s.fromBufferAttribute(o,m),r.fromBufferAttribute(o,A),dv(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const h=3*a+c,d=3*a+(c+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,d),dv(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ft(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};u(Im,"WireframeGeometry");let Sd=Im;function dv(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}u(dv,"isUniqueEdge");const Lm=class Lm extends Cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=np,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};u(Lm,"MeshStandardMaterial");let Fi=Lm;const Nm=class Nm extends Fi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};u(Nm,"MeshPhysicalMaterial");let qn=Nm;const Om=class Om extends Cn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=np,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};u(Om,"MeshNormalMaterial");let Ed=Om;function Qa(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}u(Qa,"convertArray");function gC(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}u(gC,"isTypedArray");function vC(n){function e(s,r){return n[s]-n[r]}u(e,"compareTime");const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}u(vC,"getKeyframeOrder");function fv(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}u(fv,"sortedArray");function Px(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}u(Px,"flattenJSON");const Um=class Um{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}};u(Um,"Interpolant");let rr=Um;const Fm=class Fm extends rr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:s1,endingEnd:s1}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case r1:r=e,a=2*t-i;break;case o1:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case r1:o=e,l=2*i-t;break;case o1:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,v=(i-t)/(s-t),_=v*v,g=_*v,m=-f*g+2*f*_-f*v,A=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*v+1,S=(-1-p)*g+(1.5+p)*_+.5*v,w=p*g-p*_;for(let B=0;B!==a;++B)r[B]=m*o[h+B]+A*o[c+B]+S*o[l+B]+w*o[d+B];return r}};u(Fm,"CubicInterpolant");let Td=Fm;const Bm=class Bm extends rr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}};u(Bm,"LinearInterpolant");let wd=Bm;const km=class km extends rr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}};u(km,"DiscreteInterpolant");let Ad=km;const zm=class zm{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qa(t,this.TimeBufferType),this.values=Qa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Qa(e.times,Array),values:Qa(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ad(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Td(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Xo:t=this.InterpolantFactoryMethodDiscrete;break;case Yo:t=this.InterpolantFactoryMethodLinear;break;case iu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xo;case this.InterpolantFactoryMethodLinear:return Yo;case this.InterpolantFactoryMethodSmooth:return iu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&gC(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===iu,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{const d=a*i,f=d-i,p=d+i;for(let v=0;v!==i;++v){const _=t[d+v];if(_!==t[f+v]||_!==t[p+v]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};u(zm,"KeyframeTrack");let Kn=zm;Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=Yo;const Vm=class Vm extends Kn{constructor(e,t,i){super(e,t,i)}};u(Vm,"BooleanKeyframeTrack");let xs=Vm;xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=Xo;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;const Hm=class Hm extends Kn{};u(Hm,"ColorKeyframeTrack");let Kl=Hm;Kl.prototype.ValueTypeName="color";const Gm=class Gm extends Kn{};u(Gm,"NumberKeyframeTrack");let ys=Gm;ys.prototype.ValueTypeName="number";const Wm=class Wm extends rr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let c=e*a;for(let h=c+a;c!==h;c+=4)xn.slerpFlat(r,0,o,c-a,o,c,l);return r}};u(Wm,"QuaternionLinearInterpolant");let Cd=Wm;const $m=class $m extends Kn{InterpolantFactoryMethodLinear(e){return new Cd(this.times,this.values,this.getValueSize(),e)}};u($m,"QuaternionKeyframeTrack");let bs=$m;bs.prototype.ValueTypeName="quaternion";bs.prototype.InterpolantFactoryMethodSmooth=void 0;const jm=class jm extends Kn{constructor(e,t,i){super(e,t,i)}};u(jm,"StringKeyframeTrack");let Ms=jm;Ms.prototype.ValueTypeName="string";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=Xo;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;const Xm=class Xm extends Kn{};u(Xm,"VectorKeyframeTrack");let Ss=Xm;Ss.prototype.ValueTypeName="vector";const Ym=class Ym{constructor(e="",t=-1,i=[],s=GM){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=ci(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(xC(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Kn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=vC(l);l=fv(l,1,h),c=fv(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ys(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const d=h[1];let f=s[d];f||(s[d]=f=[]),f.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=u(function(d,f,p,v,_){if(p.length!==0){const g=[],m=[];Px(p,g,m,v),g.length!==0&&_.push(new d(f,g,m))}},"addNonemptyTrack"),s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const f=c[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let v;for(v=0;v<f.length;v++)if(f[v].morphTargets)for(let _=0;_<f[v].morphTargets.length;_++)p[f[v].morphTargets[_]]=-1;for(const _ in p){const g=[],m=[];for(let A=0;A!==f[v].morphTargets.length;++A){const S=f[v];g.push(S.time),m.push(S.morphTarget===_?1:0)}s.push(new ys(".morphTargetInfluence["+_+"]",g,m))}l=p.length*o}else{const p=".bones["+t[d].name+"]";i(Ss,p+".position",f,"pos",s),i(bs,p+".quaternion",f,"rot",s),i(Ss,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};u(Ym,"AnimationClip");let Rd=Ym;function _C(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ys;case"vector":case"vector2":case"vector3":case"vector4":return Ss;case"color":return Kl;case"quaternion":return bs;case"bool":case"boolean":return xs;case"string":return Ms}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}u(_C,"getTrackTypeForValueTypeName");function xC(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=_C(n.type);if(n.times===void 0){const t=[],i=[];Px(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}u(xC,"parseKeyframeTrack");const us={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},qm=class qm{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const p=c[d],v=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return v}return null}}};u(qm,"LoadingManager");let Pd=qm;const yC=new Pd,Km=class Km{constructor(e){this.manager=e!==void 0?e:yC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};u(Km,"Loader");let Es=Km;Es.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ai={},Zm=class Zm extends Error{constructor(e,t){super(e),this.response=t}};u(Zm,"HttpError");let Dd=Zm;const Jm=class Jm extends Es{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=us.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ai[e]!==void 0){Ai[e].push({onLoad:t,onProgress:i,onError:s});return}Ai[e]=[],Ai[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Ai[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,v=p!==0;let _=0;const g=new ReadableStream({start(m){A();function A(){d.read().then(({done:S,value:w})=>{if(S)m.close();else{_+=w.byteLength;const B=new ProgressEvent("progress",{lengthComputable:v,loaded:_,total:p});for(let P=0,R=h.length;P<R;P++){const O=h[P];O.onProgress&&O.onProgress(B)}m.enqueue(w),A()}},S=>{m.error(S)})}u(A,"readData")}});return new Response(g)}else throw new Dd(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(v=>p.decode(v))}}}).then(c=>{us.add(e,c);const h=Ai[e];delete Ai[e];for(let d=0,f=h.length;d<f;d++){const p=h[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=Ai[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ai[e];for(let d=0,f=h.length;d<f;d++){const p=h[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};u(Jm,"FileLoader");let Zl=Jm;const Qm=class Qm extends Es{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=us.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=qo("img");function l(){h(),us.add(e,this),t&&t(this),r.manager.itemEnd(e)}u(l,"onImageLoad");function c(d){h(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}u(c,"onImageError");function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return u(h,"removeEventListeners"),a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};u(Qm,"ImageLoader");let Id=Qm;const eg=class eg extends Es{constructor(e){super(e)}load(e,t,i,s){const r=new ln,o=new Id(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}};u(eg,"TextureLoader");let Ld=eg;const tg=class tg extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};u(tg,"Light");let Qr=tg;const Ou=new Ke,pv=new D,mv=new D,ng=class ng{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zo,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;pv.setFromMatrixPosition(e.matrixWorld),t.position.copy(pv),mv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mv),t.updateMatrixWorld(),Ou.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ou),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ou)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};u(ng,"LightShadow");let ia=ng;const ig=class ig extends ia{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Kr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}};u(ig,"SpotLightShadow");let Nd=ig;const sg=class sg extends Qr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Nd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};u(sg,"SpotLight");let Od=sg;const gv=new Ke,go=new D,Uu=new D,rg=class rg extends ia{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),go.setFromMatrixPosition(e.matrixWorld),i.position.copy(go),Uu.copy(i.position),Uu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Uu),i.updateMatrixWorld(),s.makeTranslation(-go.x,-go.y,-go.z),gv.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gv)}};u(rg,"PointLightShadow");let Ud=rg;const og=class og extends Qr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ud}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}};u(og,"PointLight");let sa=og;const ag=class ag extends ia{constructor(){super(new nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};u(ag,"DirectionalLightShadow");let Fd=ag;const lg=class lg extends Qr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new Fd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};u(lg,"DirectionalLight");let Jl=lg;const cg=class cg extends Qr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};u(cg,"AmbientLight");let Ql=cg;const ug=class ug{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};u(ug,"LoaderUtils");let Zs=ug;const hg=class hg extends Bt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};u(hg,"InstancedBufferGeometry");let Bd=hg;const dg=class dg extends Es{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=us.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return us.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),us.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});us.add(e,l),r.manager.itemStart(e)}};u(dg,"ImageBitmapLoader");let kd=dg;const fg=class fg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=vv();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};u(fg,"Clock");let ra=fg;function vv(){return performance.now()}u(vv,"now");const ap="\\[\\]\\.:\\/",bC=new RegExp("["+ap+"]","g"),lp="[^"+ap+"]",MC="[^"+ap.replace("\\.","")+"]",SC=/((?:WC+[\/:])*)/.source.replace("WC",lp),EC=/(WCOD+)?/.source.replace("WCOD",MC),TC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lp),wC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lp),AC=new RegExp("^"+SC+EC+TC+wC+"$"),CC=["material","materials","bones","map"],pg=class pg{constructor(e,t,i){const s=i||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}};u(pg,"Composite");let zd=pg;const rs=class rs{constructor(e,t,i){this.path=t,this.parsedPath=i||rs.parseTrackName(t),this.node=rs.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new rs.Composite(e,t,i):new rs(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(bC,"")}static parseTrackName(e){const t=AC.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);CC.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=u(function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},"searchNodeSubtree"),s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=rs.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};u(rs,"PropertyBinding");let wt=rs;wt.Composite=zd;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const mg=class mg extends Qo{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};u(mg,"InstancedInterleavedBuffer");let oa=mg;const _v=new Ke,gg=class gg{constructor(e,t,i=0,s=1/0){this.ray=new _s(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Ko,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return _v.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_v),this}intersectObject(e,t=!0,i=[]){return Vd(e,this,i,t),i.sort(xv),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Vd(e[s],this,i,t);return i.sort(xv),i}};u(gg,"Raycaster");let aa=gg;function xv(n,e){return n.distance-e.distance}u(xv,"ascSort");function Vd(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Vd(r[o],e,t,!0)}}u(Vd,"intersect");const vg=class vg{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Jt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};u(vg,"Spherical");let eo=vg;const yv=new D,el=new D,_g=class _g{constructor(e=new D,t=new D){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){yv.subVectors(e,this.start),el.subVectors(this.end,this.start);const i=el.dot(el);let r=el.dot(yv)/i;return t&&(r=Jt(r,0,1)),r}closestPointToPoint(e,t,i){const s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};u(_g,"Line3");let Hd=_g;const xg=class xg extends Yl{constructor(e=10,t=10,i=4473924,s=8947848){i=new De(i),s=new De(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,p=0,v=-a;f<=t;f++,v+=o){l.push(-a,0,v,a,0,v),l.push(v,0,-a,v,0,a);const _=f===r?i:s;_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3}const h=new Bt;h.setAttribute("position",new Ft(l,3)),h.setAttribute("color",new Ft(c,3));const d=new ir({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};u(xg,"GridHelper");let ec=xg;const yg=class yg extends ki{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};u(yg,"Controls");let Gd=yg;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yf);const K=ls({currentTool:"edit",currentMode:"object",currentRenderMode:"",secondaryColor:"#b15b2e",primaryColor:"#3e86a0",clearColor:"#222222",snapActive:!0,gridActive:!0,objectModeState:"select",setGridActive:()=>{},setCurrentMode:()=>{},brushSize:1,brushShape:"square",renderingContext:()=>window.renderingContext,multipleSelections:!1,objectTransformChange:()=>{},isMouseDown:[!1,!1,!1,!1],treeShowInternal:!1,baseUrl:"/voxel-mesh-editor",cursorShape:"initial",fullscreen:document.fullscreenElement!==null,pushAction:()=>{},materials:[{color:16777215}]}),No=class No extends St{constructor(t,i){super(t,i);ue(this,"clickEvents",new Set);ue(this,"dragEvents",new Set);ue(this,"hoverEvents",new Set);ue(this,"hoverOutEvents",new Set);ue(this,"mouseDownEvents",new Set);ue(this,"selected",!1);ue(this,"internal",!1);ue(this,"draggable",!1);ue(this,"hover",!1);ue(this,"disableMouseEvents",!1);ue(this,"isMeshObject",!0)}static fromMesh(t){let i=new No(t.geometry,t.material);return i.name=t.name,i.userData={...t.userData},i.position.copy(t.position),i.rotation.copy(t.rotation),i.scale.copy(t.scale),i}select(){this.selected=!0}unselect(){this.selected=!1}addClickListener(t){this.clickEvents.add(t)}addDragListener(t){this.dragEvents.add(t)}addHoverEvent(t){this.hoverEvents.add(t)}addHoverOutEvent(t){this.hoverOutEvents.add(t)}addMouseDownEvent(t){this.mouseDownEvents.add(t)}removeClickListener(t){this.clickEvents.delete(t)}removeDragListener(t){this.dragEvents.delete(t)}removeHoverEvent(t){this.hoverEvents.delete(t)}removeHoverOutEvent(t){this.hoverOutEvents.delete(t)}removeMouseDownEvent(t){this.mouseDownEvents.delete(t)}invokeClickEvent(t){this.clickEvents.forEach(i=>{i(t)})}invokeDragEvent(t){this.dragEvents.forEach(i=>{i(t)})}invokeHoverEvent(t){this.hoverEvents.forEach(i=>{i(t)})}invokeHoverOutEvent(t){this.hoverOutEvents.forEach(i=>{i(t)})}invokeMouseDownEvent(t){this.mouseDownEvents.forEach(i=>{i(t)})}destoy(){this.removeFromParent()}clone(){let t;Array.isArray(this.material)?(t=[],this.material.forEach(s=>{t.push(s.clone())})):t=this.material.clone();const i=new No(this.geometry.clone(),t);return this.traverse(s=>{if(s!==this){const r=s.userData;s.userData={};const o=s.clone(!1);o.userData={...r},o.userData.meshObject&&(o.userData.meshObject=i),s.userData=r,i.add(o)}}),i.name=this.name+" (Copy)",i.position.copy(this.position),i.scale.copy(this.scale),i.rotation.copy(this.rotation),i}};u(No,"MeshObject");let ui=No;const Fu=[new D(0,0,0),new D(1,0,0),new D(1,1,0),new D(0,1,0),new D(0,0,1),new D(1,0,1),new D(1,1,1),new D(0,1,1)],tl=[[0,1],[1,2],[3,2],[0,3],[4,5],[5,6],[7,6],[4,7],[0,4],[1,5],[2,6],[3,7]],RC=[[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1],[3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1],[3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1],[3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1],[9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1],[1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1],[9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1],[2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1],[8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1],[9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1],[4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1],[3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1],[1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1],[4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1],[4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1],[9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1],[1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1],[5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1],[2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1],[9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1],[0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1],[2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1],[10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1],[4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1],[5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1],[5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1],[9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1],[0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1],[1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1],[10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1],[8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1],[2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1],[7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1],[9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1],[2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1],[11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1],[9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1],[5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1],[11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1],[11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1],[1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1],[9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1],[5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1],[2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1],[0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1],[5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1],[6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1],[0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1],[3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1],[6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1],[5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1],[1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1],[10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1],[6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1],[1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1],[8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1],[7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1],[3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1],[5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1],[0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1],[9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1],[8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1],[5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1],[0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1],[6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1],[10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1],[10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1],[8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1],[1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1],[3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1],[0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1],[10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1],[0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1],[3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1],[6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1],[9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1],[8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1],[3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1],[6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1],[0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1],[10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1],[10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1],[1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1],[2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1],[7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1],[7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1],[2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1],[1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1],[11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1],[8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1],[0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1],[7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1],[10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1],[2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1],[6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1],[7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1],[2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1],[1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1],[10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1],[10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1],[0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1],[7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1],[6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1],[8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1],[9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1],[6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1],[1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1],[4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1],[10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1],[8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1],[0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1],[1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1],[8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1],[10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1],[4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1],[10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1],[5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1],[11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1],[9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1],[6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1],[7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1],[3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1],[7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1],[9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1],[3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1],[6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1],[9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1],[1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1],[4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1],[7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1],[6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1],[3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1],[0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1],[6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1],[1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1],[0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1],[11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1],[6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1],[5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1],[9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1],[1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1],[1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1],[10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1],[0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1],[5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1],[10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1],[11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1],[0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1],[9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1],[7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1],[2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1],[8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1],[9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1],[9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1],[1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1],[9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1],[9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1],[5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1],[0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1],[10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1],[2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1],[0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1],[0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1],[9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1],[5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1],[3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1],[5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1],[8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1],[0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1],[9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1],[0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1],[1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1],[3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1],[4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1],[9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1],[11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1],[11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1],[2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1],[9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1],[3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1],[1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1],[4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1],[4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1],[0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1],[3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1],[3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1],[0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1],[9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1],[1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]],Wd=.5;function Bu(n){return`${n.x},${n.y},${n.z}`}u(Bu,"hash");function PC(n){let e=0;for(let t=0;t<8;t++)n[t]>Wd&&(e|=1<<t);return e}u(PC,"getConfigIndex");function DC(n,e,t){var o;const i=new zi(1,1,1,1,1,1),s=(o=i.index)==null?void 0:o.array.reverse(),r=i.getAttribute("position").array;for(let a=0;a<(s==null?void 0:s.length);a++)e.push(new D(r[s[a]*3]+n.x,r[s[a]*3+1]+n.y,r[s[a]*3+2]+n.z)),t.push(e.length-1);i.dispose()}u(DC,"addCubeFaces");function bv(n,e,t,i,s,r=!0,o=!1){var d,f,p,v;const a=((f=(d=e[n.x])==null?void 0:d[n.y])==null?void 0:f[n.z])||0;if(!r&&a!==0){DC(n,t,i);return}const l=[];for(let _=0;_<8;_++){const g=n.clone().add(Fu[_]),m=((v=(p=e[g.x])==null?void 0:p[g.y])==null?void 0:v[g.z])||0;l[_]=m===0?0:1}const c=PC(l);if(c===0||c===255)return;let h=0;for(let _=0;_<5;_++)for(let g=0;g<3;g++){const m=RC[c][h];if(m===-1)return;const A=n.clone().add(Fu[tl[m][0]]),S=n.clone().add(Fu[tl[m][1]]),w=l[tl[m][0]];let P=l[tl[m][1]]-w;P==0?P=Wd:P=(Wd-w)/P;const R=A.clone().add(S.clone().sub(A).multiplyScalar(P));o?s.has(Bu(R))?i.push(s.get(Bu(R))):(t.push(R),i.push(t.length-1),s.set(Bu(R),t.length-1)):(t.push(R),i.push(t.length-1)),h++}}u(bv,"marchCube");function Cr(n,e,t,i,s){const r=t[n],o=s[e];t[n]=r.clone().add(o),i[n]=i[n]+1}u(Cr,"addNeighbor");function IC(n,e){const t={},i={};for(let s=0;s<n.length;s++)t[s]=new D,i[s]=0;for(let s=0;s<e.length;s+=3){const r=e[s],o=e[s+1],a=e[s+2];Cr(r,o,t,i,n),Cr(r,a,t,i,n),Cr(o,a,t,i,n),Cr(o,r,t,i,n),Cr(a,r,t,i,n),Cr(a,o,t,i,n)}for(let s=0;s<n.length;s++){let r=t[s];const o=i[s];o>0&&(r=r.divideScalar(o),n[s]=r)}}u(IC,"smoothGeometry");const bc=class bc extends ui{constructor(){super(new zi(0,0),new Fi);ue(this,"max",new D);ue(this,"min",new D);ue(this,"sphere");ue(this,"cube");ue(this,"data",{});ue(this,"marchCubes",!1);ue(this,"smoothNormals",!1);ue(this,"smoothGeometry",!1);ue(this,"lastDragTime",0);ue(this,"isVoxelMesh",!0);ue(this,"isSelecting",!1);ue(this,"selectFirstPosition");ue(this,"selectSecondPosition");ue(this,"selectButton");ue(this,"_init",u(()=>{this.sphere=new St(new na(1),new Fi({transparent:!0,depthTest:!0,depthWrite:!1,opacity:.5,color:"#91b9c9",side:vn})),this.cube=new St(new zi(1,1,1),new Fi({transparent:!0,depthTest:!0,depthWrite:!1,opacity:.5,color:"#91b9c9",side:vn})),this.cube.visible=!1,this.sphere.visible=!1,this.cube.disableMouseEvents=!0,this.sphere.disableMouseEvents=!0,this.add(this.cube),this.add(this.sphere),this.addHoverEvent(t=>{var l,c,h;const i=this.sphere,s=this.cube;if(K.currentMode!=="sculpt"){i.visible=!1,s.visible=!1;return}this.marchCubes?(i.scale.setScalar(K.brushSize+1),s.scale.setScalar(K.brushSize*2+1)):(i.scale.setScalar(K.brushSize+2),s.scale.setScalar(K.brushSize===1?1:(K.brushSize-1)*2),s.scale.addScalar(.01)),i.visible=K.brushShape==="round",s.visible=K.brushShape==="square";let r=this.worldToLocal(t.intersect.point);r=r.add((l=t.intersect.normal)==null?void 0:l.clone().divideScalar(10)).addScalar(.5).floor(),K.brushShape==="square"&&K.brushSize>1&&(r=r.subScalar(.5)),i.position.copy(r),s.position.copy(r);const o=K.isMouseDown[0]||K.isMouseDown[2],a=K.isMouseDown[0]&&K.isMouseDown[2];if(o&&t.ctrlKey&&!a&&Date.now()-this.lastDragTime>100){if(K.isMouseDown[2]&&(r=r.add((c=t.intersect.normal)==null?void 0:c.clone().ceil().multiplyScalar(-1))),this.marchCubes){const d=K.brushSize+1;this.draw(r,K.brushShape,d,K.isMouseDown[2]?0:1,!0)}else{const d=K.brushSize-1;this.draw(r,K.brushShape,d,K.isMouseDown[2]?0:1,!0)}this.lastDragTime=Date.now()}else if(this.isSelecting&&this.selectFirstPosition){i.visible=!1,s.visible=!0;const d=this.selectFirstPosition,f=r;let p=new D().subVectors(f,d);p=new D(Math.abs(p.x),Math.abs(p.y),Math.abs(p.z));const v=new D().addVectors(d,f).multiplyScalar(.5);s.scale.set(p.x+1.01,p.y+1.01,p.z+1.01),s.position.copy(v),this.selectButton===2&&(r=r.add((h=t.intersect.normal)==null?void 0:h.clone().ceil().multiplyScalar(-1))),this.selectSecondPosition=r}}),this.addMouseDownEvent(t=>{var i;if(t.altKey){this.selectButton=t.button,this.isSelecting=!0;let s=this.worldToLocal(t.intersect.point);s=s.add((i=t.intersect.normal)==null?void 0:i.clone().divideScalar(10)).addScalar(.5).floor(),this.selectFirstPosition=s}}),document.addEventListener("mouseup",this.mouseUp),this.addHoverOutEvent(()=>{const t=this.sphere,i=this.cube;t.visible=!1,i.visible=!1}),this.addClickListener(t=>{var i,s;if(K.currentMode==="sculpt"){let r=this.worldToLocal(t.intersect.point);if(r=r.add((i=t.intersect.normal)==null?void 0:i.clone().divideScalar(10)).addScalar(.5).floor(),this.marchCubes||t.button==2&&(r=r.add((s=t.intersect.normal)==null?void 0:s.clone().ceil().multiplyScalar(-1))),this.marchCubes){const o=K.brushSize+1;this.draw(r,K.brushShape,o,t.button===2?0:1,!0)}else{const o=K.brushSize-1;this.draw(r,K.brushShape,o,t.button===2?0:1,!0)}}})},"_init"));ue(this,"mouseUp",u(t=>{if(this.selectFirstPosition&&this.selectSecondPosition&&this.isSelecting){const i=new D(Math.min(this.selectFirstPosition.x,this.selectSecondPosition.x),Math.min(this.selectFirstPosition.y,this.selectSecondPosition.y),Math.min(this.selectFirstPosition.z,this.selectSecondPosition.z)),s=new D(Math.max(this.selectFirstPosition.x,this.selectSecondPosition.x),Math.max(this.selectFirstPosition.y,this.selectSecondPosition.y),Math.max(this.selectFirstPosition.z,this.selectSecondPosition.z)),r={};for(let o=i.x;o<=s.x;o++)for(let a=i.y;a<=s.y;a++)for(let l=i.z;l<=s.z;l++)r[o]||(r[o]={}),r[o][a]||(r[o][a]={}),r[o][a][l]=this.getVoxel(o,a,l),this.setVoxel(o,a,l,this.selectButton===2?0:1);K.pushAction({in:()=>{for(const[o,a]of Object.entries(r))for(const[l,c]of Object.entries(r[o]))for(const[h,d]of Object.entries(r[o][l]))this.setVoxel(+o,+l,+h,d);return this.update(),!0}}),this.update()}this.isSelecting=!1},"mouseUp"));ue(this,"draw",u((t,i,s,r,o=!1)=>{!this.marchCubes&&i==="round"&&(s+=3);let a={};s===0&&(a={[t.x]:{[t.y]:{[t.z]:this.getVoxel(t.x,t.y,t.z)}}},this.setVoxel(t.x,t.y,t.z,r));for(let l=-s;l<s;l++)for(let c=-s;c<s;c++)for(let h=-s;h<s;h++)o&&(a[t.x+l]||(a[t.x+l]={}),a[t.x+l][t.y+c]||(a[t.x+l][t.y+c]={}),a[t.x+l][t.y+c][t.z+h]=this.getVoxel(t.x+l,t.y+c,t.z+h)),i==="square"?this.setVoxel(t.x+l,t.y+c,t.z+h,r):i==="round"&&new D(l,c,h).length()<s&&this.setVoxel(t.x+l,t.y+c,t.z+h,r);o&&K.pushAction({in:()=>{for(const[l,c]of Object.entries(a))for(const[h,d]of Object.entries(a[l]))for(const[f,p]of Object.entries(a[l][h]))this.setVoxel(+l,+h,+f,p);return this.update(),!1}}),this.update()},"draw"));ue(this,"update",u(()=>{this.geometry.dispose();const t=[],i=[],s=new Map;this.material.side=yi;for(const[o,a]of Object.entries(this.data)){let l=!1;for(const[c,h]of Object.entries(this.data[o])){let d=!1;for(const[f,p]of Object.entries(this.data[o][c])){const v=parseInt(o,10),_=parseInt(c,10),g=parseInt(f,10);this.max.x=Math.max(this.max.x,v),this.max.y=Math.max(this.max.y,_),this.max.z=Math.max(this.max.z,g),this.min.x=Math.min(this.min.x,v),this.min.y=Math.min(this.min.y,_),this.min.z=Math.min(this.min.z,g),p!==0&&(l=!0,d=!0),!this.marchCubes&&p!==0&&bv(new D(v,_,g),this.data,t,i,s,!1,!1),p||delete h[f]}!d&&a[c]&&delete a[c]}!l&&this.data[o]&&delete this.data[o]}if(this.marchCubes)for(let o=this.min.x-1;o<this.max.x+1;o++)for(let a=this.min.y-1;a<this.max.y+1;a++)for(let l=this.min.z-1;l<this.max.z+1;l++)bv(new D(o,a,l),this.data,t,i,s,this.marchCubes,this.smoothNormals||this.smoothGeometry);this.smoothGeometry&&this.marchCubes&&IC(t,i);const r=new Float32Array(t.length*3);for(let o=0;o<t.length;o++)r[o*3]=t[o].x,r[o*3+1]=t[o].y,r[o*3+2]=t[o].z;this.geometry=new Bt,this.geometry.setAttribute("position",new Nt(r,3)),this.geometry.setIndex(i.reverse()),this.geometry.computeVertexNormals()},"update"));ue(this,"setVoxel",u((t,i,s,r)=>{this.data[t]||(this.data[t]={}),this.data[t][i]||(this.data[t][i]={}),this.data[t][i][s]=r},"setVoxel"));ue(this,"getVoxel",u((t,i,s)=>{var r,o;return((o=(r=this.data[t])==null?void 0:r[i])==null?void 0:o[s])||0},"getVoxel"));this._init()}worldToLocal(t){return t.clone().applyMatrix4(this.matrixWorld.clone().invert())}destoy(){super.destoy(),document.removeEventListener("mouseup",this.mouseUp)}clone(){const t=new bc;t.position.copy(this.position),t.scale.copy(this.scale),t.rotation.copy(this.rotation);for(const[i,s]of Object.entries(this.data))for(const[r,o]of Object.entries(this.data[i]))for(const[a,l]of Object.entries(this.data[i][r]))t.setVoxel(+i,+r,+a,l);return t.marchCubes=this.marchCubes,t.smoothNormals=this.smoothNormals,t.smoothGeometry=this.smoothGeometry,t.update(),t}};u(bc,"VoxelMesh");let ps=bc;const Mv={type:"change"},cp={type:"start"},Dx={type:"end"},nl=new _s,Sv=new $n,LC=Math.cos(70*rp.DEG2RAD),Wt=new D,bn=2*Math.PI,bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ku=1e-6,bg=class bg extends Gd{constructor(e,t=null){super(e,t),this.state=bt.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vr.ROTATE,MIDDLE:Vr.DOLLY,RIGHT:Vr.PAN},this.touches={ONE:Ir.ROTATE,TWO:Ir.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new xn,this._lastTargetPosition=new D,this._quat=new xn().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new eo,this._sphericalDelta=new eo,this._scale=1,this._panOffset=new D,this._rotateStart=new xe,this._rotateEnd=new xe,this._rotateDelta=new xe,this._panStart=new xe,this._panEnd=new xe,this._panDelta=new xe,this._dollyStart=new xe,this._dollyEnd=new xe,this._dollyDelta=new xe,this._dollyDirection=new D,this._mouse=new xe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=OC.bind(this),this._onPointerDown=NC.bind(this),this._onPointerUp=UC.bind(this),this._onContextMenu=GC.bind(this),this._onMouseWheel=kC.bind(this),this._onKeyDown=zC.bind(this),this._onTouchStart=VC.bind(this),this._onTouchMove=HC.bind(this),this._onMouseDown=FC.bind(this),this._onMouseMove=BC.bind(this),this._interceptControlDown=WC.bind(this),this._interceptControlUp=$C.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Mv),this.update(),this.state=bt.NONE}update(e=null){const t=this.object.position;Wt.copy(t).sub(this.target),Wt.applyQuaternion(this._quat),this._spherical.setFromVector3(Wt),this.autoRotate&&this.state===bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=bn:i>Math.PI&&(i-=bn),s<-Math.PI?s+=bn:s>Math.PI&&(s-=bn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Wt.setFromSpherical(this._spherical),Wt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Wt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(nl.origin.copy(this.object.position),nl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(nl.direction))<LC?this.object.lookAt(this.target):(Sv.setFromNormalAndCoplanarPoint(this.object.up,this.target),nl.intersectPlane(Sv,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ku||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ku||this._lastTargetPosition.distanceToSquared(this.target)>ku?(this.dispatchEvent(Mv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?bn/60*this.autoRotateSpeed*e:bn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Wt.setFromMatrixColumn(t,0),Wt.multiplyScalar(-e),this._panOffset.add(Wt)}_panUp(e,t){this.screenSpacePanning===!0?Wt.setFromMatrixColumn(t,1):(Wt.setFromMatrixColumn(t,0),Wt.crossVectors(this.object.up,Wt)),Wt.multiplyScalar(e),this._panOffset.add(Wt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Wt.copy(s).sub(this.target);let r=Wt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(bn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-bn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(bn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-bn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new xe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};u(bg,"OrbitControls");let $d=bg;function NC(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}u(NC,"onPointerDown");function OC(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}u(OC,"onPointerMove");function UC(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Dx),this.state=bt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}u(UC,"onPointerUp");function FC(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Vr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=bt.DOLLY;break;case Vr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=bt.ROTATE}break;case Vr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=bt.PAN}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(cp)}u(FC,"onMouseDown");function BC(n){switch(this.state){case bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}u(BC,"onMouseMove");function kC(n){this.enabled===!1||this.enableZoom===!1||this.state!==bt.NONE||(n.preventDefault(),this.dispatchEvent(cp),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Dx))}u(kC,"onMouseWheel");function zC(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}u(zC,"onKeyDown");function VC(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ir.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=bt.TOUCH_ROTATE;break;case Ir.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=bt.TOUCH_PAN;break;default:this.state=bt.NONE}break;case 2:switch(this.touches.TWO){case Ir.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=bt.TOUCH_DOLLY_PAN;break;case Ir.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=bt.TOUCH_DOLLY_ROTATE;break;default:this.state=bt.NONE}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(cp)}u(VC,"onTouchStart");function HC(n){switch(this._trackPointer(n),this.state){case bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=bt.NONE}}u(HC,"onTouchMove");function GC(n){this.enabled!==!1&&n.preventDefault()}u(GC,"onContextMenu");function WC(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}u(WC,"interceptControlDown");function $C(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}u($C,"interceptControlUp");const Mg=class Mg{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}};u(Mg,"Pass");let Ts=Mg;const jC=new nr(-1,1,1,-1,0,1),Sg=class Sg extends Bt{constructor(){super(),this.setAttribute("position",new Ft([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ft([0,2,0,0,2,0],2))}};u(Sg,"FullscreenTriangleGeometry");let jd=Sg;const XC=new jd,Eg=class Eg{constructor(e){this._mesh=new St(XC,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,jC)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};u(Eg,"FullScreenQuad");let la=Eg;function Ev(n,e){if(e===WM)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Jh||e===_x){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===Jh)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}u(Ev,"toTrianglesDrawMode");const Tg=class Tg extends Es{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Kd(t)}),this.register(function(t){return new Zd(t)}),this.register(function(t){return new af(t)}),this.register(function(t){return new lf(t)}),this.register(function(t){return new cf(t)}),this.register(function(t){return new Qd(t)}),this.register(function(t){return new ef(t)}),this.register(function(t){return new tf(t)}),this.register(function(t){return new nf(t)}),this.register(function(t){return new qd(t)}),this.register(function(t){return new sf(t)}),this.register(function(t){return new Jd(t)}),this.register(function(t){return new of(t)}),this.register(function(t){return new rf(t)}),this.register(function(t){return new Xd(t)}),this.register(function(t){return new uf(t)}),this.register(function(t){return new hf(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Zs.extractUrlBase(e);o=Zs.resolveURL(c,this.path)}else o=Zs.extractUrlBase(e);this.manager.itemStart(e);const a=u(function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},"_onError"),l=new Zl(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ix){try{o[at.KHR_BINARY_GLTF]=new df(e)}catch(d){s&&s(d);return}r=JSON.parse(o[at.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new xf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(d){case at.KHR_MATERIALS_UNLIT:o[d]=new Yd;break;case at.KHR_DRACO_MESH_COMPRESSION:o[d]=new ff(r,this.dracoLoader);break;case at.KHR_TEXTURE_TRANSFORM:o[d]=new pf;break;case at.KHR_MESH_QUANTIZATION:o[d]=new mf;break;default:f.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};u(Tg,"GLTFLoader");let tc=Tg;function YC(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}u(YC,"GLTFRegistry");const at={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},wg=class wg{constructor(e){this.parser=e,this.name=at.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new De(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],an);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Jl(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new sa(h),c.distance=d;break;case"spot":c=new Od(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Pi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}};u(wg,"GLTFLightsExtension");let Xd=wg;const Ag=class Ag{constructor(){this.name=at.KHR_MATERIALS_UNLIT}getMaterialType(){return wn}extendParams(e,t,i){const s=[];e.color=new De(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],an),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,dn))}return Promise.all(s)}};u(Ag,"GLTFMaterialsUnlitExtension");let Yd=Ag;const Cg=class Cg{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}};u(Cg,"GLTFMaterialsEmissiveStrengthExtension");let qd=Cg;const Rg=class Rg{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new xe(a,a)}return Promise.all(r)}};u(Rg,"GLTFMaterialsClearcoatExtension");let Kd=Rg;const Pg=class Pg{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}};u(Pg,"GLTFMaterialsDispersionExtension");let Zd=Pg;const Dg=class Dg{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}};u(Dg,"GLTFMaterialsIridescenceExtension");let Jd=Dg;const Ig=class Ig{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],an)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,dn)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}};u(Ig,"GLTFMaterialsSheenExtension");let Qd=Ig;const Lg=class Lg{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}};u(Lg,"GLTFMaterialsTransmissionExtension");let ef=Lg;const Ng=class Ng{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new De().setRGB(a[0],a[1],a[2],an),Promise.all(r)}};u(Ng,"GLTFMaterialsVolumeExtension");let tf=Ng;const Og=class Og{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}};u(Og,"GLTFMaterialsIorExtension");let nf=Og;const Ug=class Ug{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new De().setRGB(a[0],a[1],a[2],an),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,dn)),Promise.all(r)}};u(Ug,"GLTFMaterialsSpecularExtension");let sf=Ug;const Fg=class Fg{constructor(e){this.parser=e,this.name=at.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}};u(Fg,"GLTFMaterialsBumpExtension");let rf=Fg;const Bg=class Bg{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}};u(Bg,"GLTFMaterialsAnisotropyExtension");let of=Bg;const kg=class kg{constructor(e){this.parser=e,this.name=at.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}};u(kg,"GLTFTextureBasisUExtension");let af=kg;const zg=class zg{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}};u(zg,"GLTFTextureWebPExtension");let lf=zg;const Vg=class Vg{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}};u(Vg,"GLTFTextureAVIFExtension");let cf=Vg;const Hg=class Hg{constructor(e){this.name=at.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,h=s.count,d=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,f,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(p),h,d,f,s.mode,s.filter),p})})}else return null}};u(Hg,"GLTFMeshoptCompression");let uf=Hg;const Gg=class Gg{constructor(e){this.name=at.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==Hn.TRIANGLES&&c.mode!==Hn.TRIANGLE_STRIP&&c.mode!==Hn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),d=h.isGroup?h.children:[h],f=c[0].count,p=[];for(const v of d){const _=new Ke,g=new D,m=new xn,A=new D(1,1,1),S=new _d(v.geometry,v.material,f);for(let w=0;w<f;w++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,w),l.SCALE&&A.fromBufferAttribute(l.SCALE,w),S.setMatrixAt(w,_.compose(g,m,A));for(const w in l)if(w==="_COLOR_0"){const B=l[w];S.instanceColor=new ta(B.array,B.itemSize,B.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&v.geometry.setAttribute(w,l[w]);Ct.prototype.copy.call(S,v),this.parser.assignFinalMaterial(S),p.push(S)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}};u(Gg,"GLTFMeshGpuInstancing");let hf=Gg;const Ix="glTF",vo=12,Tv={JSON:1313821514,BIN:5130562},Wg=class Wg{constructor(e){this.name=at.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,vo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ix)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-vo,r=new DataView(e,vo);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Tv.JSON){const c=new Uint8Array(e,vo+o,a);this.content=i.decode(c)}else if(l===Tv.BIN){const c=vo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}};u(Wg,"GLTFBinaryExtension");let df=Wg;const $g=class $g{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=at.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const d=vf[h]||h.toLowerCase();a[d]=o[h]}for(const h in e.attributes){const d=vf[h]||h.toLowerCase();if(o[h]!==void 0){const f=i.accessors[e.attributes[h]],p=jr[f.componentType];c[d]=p.name,l[d]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,f){s.decodeDracoFile(h,function(p){for(const v in p.attributes){const _=p.attributes[v],g=l[v];g!==void 0&&(_.normalized=g)}d(p)},a,c,an,f)})})}};u($g,"GLTFDracoMeshCompressionExtension");let ff=$g;const jg=class jg{constructor(){this.name=at.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}};u(jg,"GLTFTextureTransformExtension");let pf=jg;const Xg=class Xg{constructor(){this.name=at.KHR_MESH_QUANTIZATION}};u(Xg,"GLTFMeshQuantizationExtension");let mf=Xg;const Yg=class Yg extends rr{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,d=(i-t)/h,f=d*d,p=f*d,v=e*c,_=v-c,g=-2*p+3*f,m=p-f,A=1-g,S=m-f+d;for(let w=0;w!==a;w++){const B=o[_+w+a],P=o[_+w+l]*h,R=o[v+w+a],O=o[v+w]*h;r[w]=A*B+S*P+g*R+m*O}return r}};u(Yg,"GLTFCubicSplineInterpolant");let nc=Yg;const qC=new xn,qg=class qg extends nc{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return qC.fromArray(r).normalize().toArray(r),r}};u(qg,"GLTFCubicSplineQuaternionInterpolant");let gf=qg;const Hn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},jr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},wv={9728:on,9729:Fn,9984:lx,9985:hl,9986:yo,9987:Ii},Av={33071:cs,33648:Cl,10497:vs},zu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},vf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},KC={CUBICSPLINE:void 0,LINEAR:Yo,STEP:Xo},Vu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ZC(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Fi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:yi})),n.DefaultMaterial}u(ZC,"createDefaultMaterial");function Vs(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}u(Vs,"addUnknownExtensionsToUserData");function Pi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}u(Pi,"assignExtrasToUserData");function JC(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const d=e[c];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const d=e[c];if(i){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;o.push(f)}if(s){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;a.push(f)}if(r){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],d=c[1],f=c[2];return i&&(n.morphAttributes.position=h),s&&(n.morphAttributes.normal=d),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}u(JC,"addMorphTargets");function QC(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}u(QC,"updateMorphTargets");function e2(n){let e;const t=n.extensions&&n.extensions[at.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Hu(t.attributes):e=n.indices+":"+Hu(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Hu(n.targets[i]);return e}u(e2,"createPrimitiveKey");function Hu(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}u(Hu,"createAttributesKey");function _f(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}u(_f,"getNormalizedComponentScale");function t2(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}u(t2,"getImageURIMimeType");const n2=new Ke,Kg=class Kg{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new YC,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new Ld(this.options.manager):this.textureLoader=new kd(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Zl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return Vs(r,a,s),Pi(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=u((o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])},"updateMappings");return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[at.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(Zs.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=zu[s.type],a=jr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Nt(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=zu[s.type],c=jr[s.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,f=s.byteOffset||0,p=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,v=s.normalized===!0;let _,g;if(p&&p!==d){const m=Math.floor(f/p),A="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let S=t.cache.get(A);S||(_=new c(a,m*p,s.count*p/h),S=new Qo(_,p/h),t.cache.add(A,S)),g=new li(S,l,f%p/h,v)}else a===null?_=new c(s.count*l):_=new c(a,f,s.count*l),g=new Nt(_,l,v);if(s.sparse!==void 0){const m=zu.SCALAR,A=jr[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,w=s.sparse.values.byteOffset||0,B=new A(o[1],S,s.sparse.count*m),P=new c(o[2],w,s.sparse.count*l);a!==null&&(g=new Nt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let R=0,O=B.length;R<O;R++){const re=B[R];if(g.setX(re,P[R*l]),l>=2&&g.setY(re,P[R*l+1]),l>=3&&g.setZ(re,P[R*l+2]),l>=4&&g.setW(re,P[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=v}return g})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=wv[f.magFilter]||Fn,h.minFilter=wv[f.minFilter]||Ii,h.wrapS=Av[f.wrapS]||vs,h.wrapT=Av[f.wrapT]||vs,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(d){return new Promise(function(f,p){let v=f;t.isImageBitmapLoader===!0&&(v=u(function(_){const g=new ln(_);g.needsUpdate=!0,f(g)},"onLoad")),t.load(Zs.resolveURL(d,r.path),v,void 0,p)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),Pi(d,o),d.userData.mimeType=o.mimeType||t2(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[at.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[at.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[at.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new ql,Cn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new ir,Cn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Fi}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[at.KHR_MATERIALS_UNLIT]){const d=s[at.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,r,t))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new De(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],an),a.opacity=f[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,dn)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=vn);const h=r.alphaMode||Vu.OPAQUE;if(h===Vu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Vu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==wn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new xe(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==wn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==wn){const d=r.emissiveFactor;a.emissive=new De().setRGB(d[0],d[1],d[2],an)}return r.emissiveTexture!==void 0&&o!==wn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,dn)),Promise.all(c).then(function(){const d=new o(a);return r.name&&(d.name=r.name),Pi(d,r),t.associations.set(d,{materials:e}),r.extensions&&Vs(s,d,r),d})}createUniqueName(e){const t=wt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[at.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Cv(l,a,t)})}u(r,"createDracoPrimitive");const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=e2(c),d=s[h];if(d)o.push(d.promise);else{let f;c.extensions&&c.extensions[at.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Cv(new Bt,c,t),s[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?ZC(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let p=0,v=h.length;p<v;p++){const _=h[p],g=o[p];let m;const A=c[p];if(g.mode===Hn.TRIANGLES||g.mode===Hn.TRIANGLE_STRIP||g.mode===Hn.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new gd(_,A):new St(_,A),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===Hn.TRIANGLE_STRIP?m.geometry=Ev(m.geometry,_x):g.mode===Hn.TRIANGLE_FAN&&(m.geometry=Ev(m.geometry,Jh));else if(g.mode===Hn.LINES)m=new Yl(_,A);else if(g.mode===Hn.LINE_STRIP)m=new sr(_,A);else if(g.mode===Hn.LINE_LOOP)m=new xd(_,A);else if(g.mode===Hn.POINTS)m=new bd(_,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&QC(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Pi(m,r),g.extensions&&Vs(s,m,g),t.assignFinalMaterial(m),d.push(m)}for(let p=0,v=d.length;p<v;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return r.extensions&&Vs(s,d[0],r),d[0];const f=new _i;r.extensions&&Vs(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,v=d.length;p<v;p++)f.add(d[p]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new jt(rp.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new nr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Pi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const d=o[c];if(d){a.push(d);const f=new Ke;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new vd(a,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let d=0,f=s.channels.length;d<f;d++){const p=s.channels[d],v=s.samplers[p.sampler],_=p.target,g=_.node,m=s.parameters!==void 0?s.parameters[v.input]:v.input,A=s.parameters!==void 0?s.parameters[v.output]:v.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",A)),c.push(v),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){const f=d[0],p=d[1],v=d[2],_=d[3],g=d[4],m=[];for(let A=0,S=f.length;A<S;A++){const w=f[A],B=p[A],P=v[A],R=_[A],O=g[A];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const re=i._createAnimationTracks(w,B,P,R,O);if(re)for(let b=0;b<re.length;b++)m.push(re[b])}return new Rd(r,void 0,m)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(i.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],d=c[1],f=c[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,n2)});for(let p=0,v=d.length;p<v;p++)h.add(d[p]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Wl:c.length>1?h=new _i:c.length===1?h=c[0]:h=new Ct,h!==c[0])for(let d=0,f=c.length;d<f;d++)h.add(c[d]);if(r.name&&(h.userData.name=r.name,h.name=o),Pi(h,r),r.extensions&&Vs(i,h,r),r.matrix!==void 0){const d=new Ke;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new _i;i.name&&(r.name=s.createUniqueName(i.name)),Pi(r,i),i.extensions&&Vs(t,r,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,d=l.length;h<d;h++)r.add(l[h]);const c=u(h=>{const d=new Map;for(const[f,p]of s.associations)(f instanceof Cn||f instanceof ln)&&d.set(f,p);return h.traverse(f=>{const p=s.associations.get(f);p!=null&&d.set(f,p)}),d},"reduceAssociations");return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];Ji[r.path]===Ji.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Ji[r.path]){case Ji.weights:c=ys;break;case Ji.rotation:c=bs;break;case Ji.position:case Ji.scale:c=Ss;break;default:switch(i.itemSize){case 1:c=ys;break;case 2:case 3:default:c=Ss;break}break}const h=s.interpolation!==void 0?KC[s.interpolation]:Yo,d=this._getArrayFromAccessor(i);for(let f=0,p=l.length;f<p;f++){const v=new c(l[f]+"."+Ji[r.path],t.array,d,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=_f(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=u(function(i){const s=this instanceof bs?gf:nc;return new s(this.times,this.values,this.getValueSize()/3,i)},"InterpolantFactoryMethodGLTFCubicSpline"),e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};u(Kg,"GLTFParser");let xf=Kg;function i2(n,e,t){const i=e.attributes,s=new Dn;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),a.normalized){const h=_f(jr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new D,l=new D;for(let c=0,h=r.length;c<h;c++){const d=r[c];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],p=f.min,v=f.max;if(p!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(v[2]))),f.normalized){const _=_f(jr[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new In;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}u(i2,"computeBounds");function Cv(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}u(r,"assignAttributeAccessor");for(const o in i){const a=vf[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return dt.workingColorSpace!==an&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${dt.workingColorSpace}" not supported.`),Pi(n,e),i2(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?JC(n,e.targets,t):n})}u(Cv,"addPrimitiveAttributes");const Io={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`},Zg=class Zg extends Ts{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Dt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ni.clone(e.uniforms),this.material=new Dt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new la(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};u(Zg,"ShaderPass");let ic=Zg;const Jg=class Jg extends Ts{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}};u(Jg,"MaskPass");let sc=Jg;const Qg=class Qg extends Ts{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};u(Qg,"ClearMaskPass");let yf=Qg;const e0=class e0{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new xe);this._width=i.width,this._height=i.height,t=new $t(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:En}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ic(Io),this.copyPass.material.blending=Zt,this.clock=new ra}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}sc!==void 0&&(o instanceof sc?i=!0:o instanceof yf&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new xe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};u(e0,"EffectComposer");let bf=e0;const Xs=class Xs extends Ts{constructor(e,t,i,s){super(),this.renderScene=t,this.renderCamera=i,this.selectedObjects=s!==void 0?s:[],this.visibleEdgeColor=new De(1,1,1),this.hiddenEdgeColor=new De(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this._selectionCache=new Set,this.resolution=e!==void 0?new xe(e.x,e.y):new xe(256,256);const r=Math.round(this.resolution.x/this.downSampleRatio),o=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new $t(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new Vl,this.depthMaterial.side=vn,this.depthMaterial.depthPacking=xx,this.depthMaterial.blending=Zt,this.prepareMaskMaterial=this.getPrepareMaskMaterial(),this.prepareMaskMaterial.side=vn,this.prepareMaskMaterial.fragmentShader=h(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new $t(this.resolution.x,this.resolution.y,{type:En}),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new $t(r,o,{type:En}),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new $t(r,o,{type:En}),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new $t(Math.round(r/2),Math.round(o/2),{type:En}),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this.getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new $t(r,o,{type:En}),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new $t(Math.round(r/2),Math.round(o/2),{type:En}),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const a=4,l=4;this.separableBlurMaterial1=this.getSeperableBlurMaterial(a),this.separableBlurMaterial1.uniforms.texSize.value.set(r,o),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this.getSeperableBlurMaterial(l),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(r/2),Math.round(o/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=l,this.overlayMaterial=this.getOverlayMaterial();const c=Io;this.copyUniforms=Ni.clone(c.uniforms),this.materialCopy=new Dt({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:Zt,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new De,this.oldClearAlpha=1,this.fsQuad=new la(null),this.tempPulseColor1=new De,this.tempPulseColor2=new De,this.textureMatrix=new Ke;function h(d,f){const p=f.isPerspectiveCamera?"perspective":"orthographic";return d.replace(/DEPTH_TO_VIEW_Z/g,p+"DepthToViewZ")}u(h,"replaceDepthToViewZ")}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this.fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let i=Math.round(e/this.downSampleRatio),s=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(i,s),this.renderTargetBlurBuffer1.setSize(i,s),this.renderTargetEdgeBuffer1.setSize(i,s),this.separableBlurMaterial1.uniforms.texSize.value.set(i,s),i=Math.round(i/2),s=Math.round(s/2),this.renderTargetBlurBuffer2.setSize(i,s),this.renderTargetEdgeBuffer2.setSize(i,s),this.separableBlurMaterial2.uniforms.texSize.value.set(i,s)}updateSelectionCache(){const e=this._selectionCache;function t(i){i.isMesh&&e.add(i)}u(t,"gatherSelectedMeshesCallBack"),e.clear();for(let i=0;i<this.selectedObjects.length;i++)this.selectedObjects[i].traverse(t)}changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;for(const i of this._selectionCache)e===!0?i.visible=t.get(i):(t.set(i,i.visible),i.visible=e)}changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,i=this._selectionCache;function s(r){if(r.isMesh||r.isSprite){if(!i.has(r)){const o=r.visible;(e===!1||t.get(r)===!0)&&(r.visible=e),t.set(r,o)}}else(r.isPoints||r.isLine)&&(e===!0?r.visible=t.get(r):(t.set(r,r.visible),r.visible=e))}u(s,"VisibilityChangeCallBack"),this.renderScene.traverse(s)}updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}render(e,t,i,s,r){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,r&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this.updateSelectionCache(),this.changeVisibilityOfSelectedObjects(!1);const a=this.renderScene.background;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this.updateTextureMatrix(),this.changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.renderScene.overrideMaterial=null,this.changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this._selectionCache.clear(),this.renderScene.background=a,this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this.fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const l=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(l),this.tempPulseColor2.multiplyScalar(l)}this.fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Xs.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Xs.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=Xs.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=Xs.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,r&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(i),this.fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}this.renderToScreen&&(this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=i.texture,e.setRenderTarget(null),this.fsQuad.render(e))}getPrepareMaskMaterial(){return new Dt({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new xe(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <morphtarget_pars_vertex>
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

				}`})}getEdgeDetectionMaterial(){return new Dt({uniforms:{maskTexture:{value:null},texSize:{value:new xe(.5,.5)},visibleEdgeColor:{value:new D(1,1,1)},hiddenEdgeColor:{value:new D(1,1,1)}},vertexShader:`varying vec2 vUv;

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
				}`})}getSeperableBlurMaterial(e){return new Dt({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new xe(.5,.5)},direction:{value:new xe(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

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
				}`})}getOverlayMaterial(){return new Dt({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

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
				}`,blending:dh,depthTest:!1,depthWrite:!1,transparent:!0})}};u(Xs,"OutlinePass");let ca=Xs;ca.BlurDirectionX=new xe(1,0);ca.BlurDirectionY=new xe(0,1);const t0=class t0 extends Ts{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new De}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};u(t0,"RenderPass");let Mf=t0;const il={name:"SAOShader",defines:{NUM_SAMPLES:7,NUM_RINGS:4,DIFFUSE_TEXTURE:0,PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},tDiffuse:{value:null},tNormal:{value:null},size:{value:new xe(512,512)},cameraNear:{value:1},cameraFar:{value:100},cameraProjectionMatrix:{value:new Ke},cameraInverseProjectionMatrix:{value:new Ke},scale:{value:1},intensity:{value:.1},bias:{value:.5},minResolution:{value:0},kernelRadius:{value:100},randomSeed:{value:0}},vertexShader:`

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
		}`},Qi={name:"DepthLimitedBlurShader",defines:{KERNEL_RADIUS:4,DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDiffuse:{value:null},size:{value:new xe(512,512)},sampleUvOffsets:{value:[new xe(0,0)]},sampleWeights:{value:[1]},tDepth:{value:null},cameraNear:{value:10},cameraFar:{value:1e3},depthCutoff:{value:10}},vertexShader:`

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
		}`},rc={createSampleWeights:function(n,e){const t=[];for(let i=0;i<=n;i++)t.push(s2(i,e));return t},createSampleOffsets:function(n,e){const t=[];for(let i=0;i<=n;i++)t.push(e.clone().multiplyScalar(i));return t},configure:function(n,e,t,i){n.defines.KERNEL_RADIUS=e,n.uniforms.sampleUvOffsets.value=rc.createSampleOffsets(e,i),n.uniforms.sampleWeights.value=rc.createSampleWeights(e,t),n.needsUpdate=!0}};function s2(n,e){return Math.exp(-(n*n)/(2*(e*e)))/(Math.sqrt(2*Math.PI)*e)}u(s2,"gaussian");const Oo=class Oo extends Ts{constructor(e,t,i=new xe(256,256)){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.originalClearColor=new De,this._oldClearColor=new De,this.oldClearAlpha=1,this.params={output:0,saoBias:.5,saoIntensity:.18,saoScale:1,saoKernelRadius:100,saoMinResolution:0,saoBlur:!0,saoBlurRadius:8,saoBlurStdDev:4,saoBlurDepthCutoff:.01},this.resolution=new xe(i.x,i.y),this.saoRenderTarget=new $t(this.resolution.x,this.resolution.y,{type:En}),this.blurIntermediateRenderTarget=this.saoRenderTarget.clone();const s=new Jo;s.format=tr,s.type=er,this.normalRenderTarget=new $t(this.resolution.x,this.resolution.y,{minFilter:on,magFilter:on,type:En,depthTexture:s}),this.normalMaterial=new Ed,this.normalMaterial.blending=Zt,this.saoMaterial=new Dt({defines:Object.assign({},il.defines),fragmentShader:il.fragmentShader,vertexShader:il.vertexShader,uniforms:Ni.clone(il.uniforms)}),this.saoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.saoMaterial.uniforms.tDepth.value=s,this.saoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.saoMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.blending=Zt,this.vBlurMaterial=new Dt({uniforms:Ni.clone(Qi.uniforms),defines:Object.assign({},Qi.defines),vertexShader:Qi.vertexShader,fragmentShader:Qi.fragmentShader}),this.vBlurMaterial.defines.DEPTH_PACKING=0,this.vBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.vBlurMaterial.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.vBlurMaterial.uniforms.tDepth.value=s,this.vBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.vBlurMaterial.blending=Zt,this.hBlurMaterial=new Dt({uniforms:Ni.clone(Qi.uniforms),defines:Object.assign({},Qi.defines),vertexShader:Qi.vertexShader,fragmentShader:Qi.fragmentShader}),this.hBlurMaterial.defines.DEPTH_PACKING=0,this.hBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.hBlurMaterial.uniforms.tDiffuse.value=this.blurIntermediateRenderTarget.texture,this.hBlurMaterial.uniforms.tDepth.value=s,this.hBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.hBlurMaterial.blending=Zt,this.materialCopy=new Dt({uniforms:Ni.clone(Io.uniforms),vertexShader:Io.vertexShader,fragmentShader:Io.fragmentShader,blending:Zt}),this.materialCopy.transparent=!0,this.materialCopy.depthTest=!1,this.materialCopy.depthWrite=!1,this.materialCopy.blending=fh,this.materialCopy.blendSrc=rx,this.materialCopy.blendDst=ph,this.materialCopy.blendEquation=Di,this.materialCopy.blendSrcAlpha=sx,this.materialCopy.blendDstAlpha=ph,this.materialCopy.blendEquationAlpha=Di,this.fsQuad=new la(null)}render(e,t,i){this.renderToScreen&&(this.materialCopy.blending=Zt,this.materialCopy.uniforms.tDiffuse.value=i.texture,this.materialCopy.needsUpdate=!0,this.renderPass(e,this.materialCopy,null)),e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const s=e.autoClear;e.autoClear=!1,this.saoMaterial.uniforms.bias.value=this.params.saoBias,this.saoMaterial.uniforms.intensity.value=this.params.saoIntensity,this.saoMaterial.uniforms.scale.value=this.params.saoScale,this.saoMaterial.uniforms.kernelRadius.value=this.params.saoKernelRadius,this.saoMaterial.uniforms.minResolution.value=this.params.saoMinResolution,this.saoMaterial.uniforms.cameraNear.value=this.camera.near,this.saoMaterial.uniforms.cameraFar.value=this.camera.far;const r=this.params.saoBlurDepthCutoff*(this.camera.far-this.camera.near);this.vBlurMaterial.uniforms.depthCutoff.value=r,this.hBlurMaterial.uniforms.depthCutoff.value=r,this.vBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.vBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.hBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.hBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.params.saoBlurRadius=Math.floor(this.params.saoBlurRadius),(this.prevStdDev!==this.params.saoBlurStdDev||this.prevNumSamples!==this.params.saoBlurRadius)&&(rc.configure(this.vBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new xe(0,1)),rc.configure(this.hBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new xe(1,0)),this.prevStdDev=this.params.saoBlurStdDev,this.prevNumSamples=this.params.saoBlurRadius),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.renderPass(e,this.saoMaterial,this.saoRenderTarget,16777215,1),this.params.saoBlur&&(this.renderPass(e,this.vBlurMaterial,this.blurIntermediateRenderTarget,16777215,1),this.renderPass(e,this.hBlurMaterial,this.saoRenderTarget,16777215,1));const o=this.materialCopy;this.params.output===Oo.OUTPUT.Normal?(this.materialCopy.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.materialCopy.needsUpdate=!0):(this.materialCopy.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.materialCopy.needsUpdate=!0),this.params.output===Oo.OUTPUT.Default?o.blending=fh:o.blending=Zt,this.renderPass(e,o,this.renderToScreen?null:i),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=s}renderPass(e,t,i,s,r){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,i,s,r){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.saoRenderTarget.setSize(e,t),this.blurIntermediateRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.saoMaterial.uniforms.size.value.set(e,t),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.needsUpdate=!0,this.vBlurMaterial.uniforms.size.value.set(e,t),this.vBlurMaterial.needsUpdate=!0,this.hBlurMaterial.uniforms.size.value.set(e,t),this.hBlurMaterial.needsUpdate=!0}dispose(){this.saoRenderTarget.dispose(),this.blurIntermediateRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.normalMaterial.dispose(),this.saoMaterial.dispose(),this.vBlurMaterial.dispose(),this.hBlurMaterial.dispose(),this.materialCopy.dispose(),this.fsQuad.dispose()}};u(Oo,"SAOPass");let oc=Oo;oc.OUTPUT={Default:0,SAO:1,Normal:2};const r2={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new xe(1/1024,1/512)}},vertexShader:`

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
	`},Uo=class Uo{constructor(){ue(this,"translateX");ue(this,"translateY");ue(this,"translateZ");ue(this,"translateFree");ue(this,"scaleX");ue(this,"scaleY");ue(this,"scaleZ");ue(this,"scaleFree");ue(this,"rotateX");ue(this,"rotateY");ue(this,"rotateZ");ue(this,"rotateFree");ue(this,"rotateCover");ue(this,"scene",new Ct);ue(this,"selectedObjects",[]);ue(this,"camera");ue(this,"rotateMaterialX");ue(this,"rotateMaterialY");ue(this,"rotateMaterialZ");ue(this,"update",u(e=>{this.camera=e,K.currentMode!=="object"&&(this.selectedObjects=[]);let t=e.position.distanceTo(this.scene.position);t<35&&(t=35),this.scene.scale.x=t/35,this.scene.scale.y=t/35,this.scene.scale.z=t/35,K.multipleSelections=this.selectedObjects.length>1,this.selectedObjects.length>0?(K.selectedObject=this.selectedObjects[this.selectedObjects.length-1],this.scene.position.set(0,0,0),this.selectedObjects.forEach(i=>{this.scene.position.add(i.position)}),this.scene.position.divideScalar(this.selectedObjects.length),this.setVisible(!0)):(this.setVisible(!1),K.selectedObject=void 0),this.rotateMaterialX&&(this.rotateMaterialX.uniforms.p.value=this.scene.position),this.rotateMaterialY&&(this.rotateMaterialY.uniforms.p.value=this.scene.position),this.rotateMaterialZ&&(this.rotateMaterialZ.uniforms.p.value=this.scene.position)},"update"));ue(this,"setVisible",u(e=>{this.scene.userData.visible=e,K.objectModeState==="move"&&K.currentMode==="object"?this.scene.traverse(t=>{t.visible=e&&[this.translateX,this.translateY,this.translateZ,this.translateFree].includes(t),t.draggable=t.visible,t.disableMouseEvents=!t.visible}):K.objectModeState==="scale"&&K.currentMode==="object"?this.scene.traverse(t=>{t.visible=e&&[this.scaleX,this.scaleY,this.scaleZ,this.scaleFree].includes(t),t.draggable=t.visible,t.disableMouseEvents=!t.visible}):K.objectModeState==="rotate"&&K.currentMode==="object"?this.scene.traverse(t=>{t.visible=e&&[this.rotateX,this.rotateY,this.rotateZ,this.rotateFree].includes(t),t.draggable=t.visible,t.disableMouseEvents=!t.visible}):(this.scene.traverse(t=>{t.visible=!1,t.draggable=!1,t.disableMouseEvents=!0}),this.scene.userData.visible=!1)},"setVisible"));const e=new tc;e.load(K.baseUrl+"/mesh/translate_mesh.glb",t=>{var s,r,o;[...t.scene.children].forEach(a=>{let l=a;l.isMesh&&(l=ui.fromMesh(l),l.draggable=!1,l.internal=!0,l.geometry.computeBoundingBox()),l.name==="X"?(this.translateX=l,this.scene.add(l)):l.name==="Y"?(this.translateY=l,this.scene.add(l)):l.name==="Z"?(this.translateZ=l,this.scene.add(l)):l.name==="Free"&&(this.translateFree=l,this.scene.add(l))}),(s=this.translateX)==null||s.addDragListener(a=>{K.objectModeState!=="move"||K.currentMode!=="object"||this.selectedObjects.forEach(l=>{if(a.isFirstMovement){const h=l.position.clone();K.pushAction({in:()=>(l&&l.position.copy(h),!1)}),l.userData.position=l.position.clone()}let c=a.movement3dXZ.x-a.movement3dOriginXZ.x;l.userData.position.x+=c,K.snapActive?l.position.x=Math.round(l.userData.position.x/5)*5:l.position.x=l.userData.position.x})}),(r=this.translateY)==null||r.addDragListener(a=>{K.objectModeState!=="move"||K.currentMode!=="object"||this.selectedObjects.forEach(l=>{if(a.isFirstMovement){const h=l.position.clone();K.pushAction({in:()=>(l&&l.position.copy(h),!1)}),l.userData.position=l.position.clone()}let c=a.movement3dY.y-a.movement3dOriginY.y;l.userData.position.y+=c,K.snapActive?l.position.y=Math.round(l.userData.position.y/5)*5:l.position.y=l.userData.position.y})}),(o=this.translateZ)==null||o.addDragListener(a=>{K.objectModeState!=="move"||K.currentMode!=="object"||this.selectedObjects.forEach(l=>{if(a.isFirstMovement){const h=l.position.clone();K.pushAction({in:()=>(l&&l.position.copy(h),!1)}),l.userData.position=l.position.clone()}let c=a.movement3dXZ.z-a.movement3dOriginXZ.z;l.userData.position.z+=c,K.snapActive?l.position.z=Math.round(l.userData.position.z/5)*5:l.position.z=l.userData.position.z})})},()=>{},console.error),e.load(K.baseUrl+"/mesh/scale_mesh.glb",t=>{var s,r,o;[...t.scene.children].forEach(a=>{let l=a;l.isMesh&&(l=ui.fromMesh(l),l.draggable=!1,l.internal=!0,l.geometry.computeBoundingBox()),l.name==="X"?(this.scaleX=l,this.scene.add(l)):l.name==="Y"?(this.scaleY=l,this.scene.add(l)):l.name==="Z"?(this.scaleZ=l,this.scene.add(l)):l.name==="Free"&&(this.scaleFree=l,this.scene.add(l))}),(s=this.scaleX)==null||s.addDragListener(a=>{K.objectModeState!=="scale"||K.currentMode!=="object"||this.selectedObjects.forEach(l=>{if(a.isFirstMovement){const h=l.scale.clone();K.pushAction({in:()=>(l&&l.scale.copy(h),!1)}),l.userData.scale=l.scale.clone()}let c=a.movement3dXZ.x-a.movement3dOriginXZ.x;l.userData.scale.x+=c/2,K.snapActive?l.scale.x=Math.round(l.userData.scale.x/2.5)*2.5:l.scale.x=l.userData.scale.x,l.scale.x=Math.max(l.scale.x,1)})}),(r=this.scaleY)==null||r.addDragListener(a=>{K.objectModeState!=="scale"||K.currentMode!=="object"||this.selectedObjects.forEach(l=>{if(a.isFirstMovement){const h=l.scale.clone();K.pushAction({in:()=>(l&&l.scale.copy(h),!1)}),l.userData.scale=l.scale.clone()}let c=a.movement3dY.y-a.movement3dOriginY.y;l.userData.scale.y+=c/2,K.snapActive?l.scale.y=Math.round(l.userData.scale.y/2.5)*2.5:l.scale.y=l.userData.scale.y,l.scale.y=Math.max(l.scale.y,1)})}),(o=this.scaleZ)==null||o.addDragListener(a=>{K.objectModeState!=="scale"||K.currentMode!=="object"||this.selectedObjects.forEach(l=>{if(a.isFirstMovement){const h=l.scale.clone();K.pushAction({in:()=>(l&&l.scale.copy(h),!1)}),l.userData.scale=l.scale.clone()}let c=a.movement3dXZ.z-a.movement3dOriginXZ.z;l.userData.scale.z-=c/2,K.snapActive?l.scale.z=Math.round(l.userData.scale.z/2.5)*2.5:l.scale.z=l.userData.scale.z,l.scale.z=Math.max(l.scale.z,1)})})},()=>{},console.error),e.load(K.baseUrl+"/mesh/rotate_mesh.glb",t=>{var r,o,a;const i=[...t.scene.children],s=u(l=>new Dt({vertexShader:`
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
                    `,uniforms:{color:{value:l},p:{value:new D(0)}}}),"createRotateShader");this.rotateMaterialX=s(new De("#E70200")),this.rotateMaterialY=s(new De("#30E700")),this.rotateMaterialZ=s(new De("#1500E7")),i.forEach(l=>{let c=l;c.isMesh&&(c=ui.fromMesh(c),c.draggable=!1,c.internal=!0,c.geometry.computeBoundingBox()),c.name==="X"?(c.material=this.rotateMaterialX,this.rotateX=c,this.scene.add(c)):c.name==="Y"?(c.material=this.rotateMaterialY,this.rotateY=c,this.scene.add(c)):c.name==="Z"?(c.material=this.rotateMaterialZ,this.rotateZ=c,this.scene.add(c)):c.name==="Free"&&(this.rotateFree=c,c.material.side=vn)}),(r=this.rotateX)==null||r.addDragListener(l=>{K.objectModeState!=="rotate"||K.currentMode!=="object"||this.selectedObjects.forEach(c=>{if(l.isFirstMovement){const f=c.rotation.clone();K.pushAction({in:()=>(c&&c.rotation.copy(f),!1)}),c.userData.rotation=c.rotation.clone(),c.userData.prevAngleX=Math.atan2(l.movement3dOriginY.z,l.movement3dOriginY.y)}const h=Math.atan2(l.movement3dY.z,l.movement3dY.y);let d=h-c.userData.prevAngleX;d>Math.PI?d-=2*Math.PI:d<-Math.PI&&(d+=2*Math.PI),c.userData.prevAngleX=h,c.userData.rotation.x+=d,K.snapActive?c.rotation.x=Math.round(c.userData.rotation.x/(Math.PI/18))*(Math.PI/18):c.rotation.x=c.userData.rotation.x})}),(o=this.rotateY)==null||o.addDragListener(l=>{K.objectModeState!=="rotate"||K.currentMode!=="object"||this.selectedObjects.forEach(c=>{if(l.isFirstMovement){const f=c.rotation.clone();K.pushAction({in:()=>(c&&c.rotation.copy(f),!1)}),c.userData.rotation=c.rotation.clone(),c.userData.prevAngle=Math.atan2(l.movement3dOriginXZ.z,l.movement3dOriginXZ.x)}const h=Math.atan2(l.movement3dXZ.z,l.movement3dXZ.x);let d=h-c.userData.prevAngle;d>Math.PI?d-=2*Math.PI:d<-Math.PI&&(d+=2*Math.PI),c.userData.prevAngle=h,c.userData.rotation.y-=d,K.snapActive?c.rotation.y=Math.round(c.userData.rotation.y/(Math.PI/18))*(Math.PI/18):c.rotation.y=c.userData.rotation.y})}),(a=this.rotateZ)==null||a.addDragListener(l=>{K.objectModeState!=="rotate"||K.currentMode!=="object"||this.selectedObjects.forEach(c=>{if(l.isFirstMovement){const f=c.rotation.clone();K.pushAction({in:()=>(c&&c.rotation.copy(f),!1)}),c.userData.rotation=c.rotation.clone(),c.userData.prevAngleZ=Math.atan2(l.movement3dOriginY.y,l.movement3dOriginY.x)}const h=Math.atan2(l.movement3dY.y,l.movement3dY.x);let d=h-c.userData.prevAngleZ;d>Math.PI?d-=2*Math.PI:d<-Math.PI&&(d+=2*Math.PI),c.userData.prevAngleZ=h,c.userData.rotation.z+=d,K.snapActive?c.rotation.z=Math.round(c.userData.rotation.z/(Math.PI/18))*(Math.PI/18):c.rotation.z=c.userData.rotation.z})})},()=>{},console.error)}};u(Uo,"TransformationContext"),ue(Uo,"INSTANCE",new Uo);let tt=Uo;const o2=Mt({methods:{mouseIn(n){this[n]=!0},mouseOut(n){this[n]=!1},addVoxelMesh(){var t;const n=new ps;n.draw(new D,"square",5,1),n.update();const e=K.renderingContext();e==null||e.clickableObjects.push(n),e==null||e.scene.add(n),K.currentMode==="object"&&(n.select(),tt.INSTANCE.selectedObjects.push(n),(t=e==null?void 0:e.outlinePass)!=null&&t.selectedObjects&&(e.outlinePass.selectedObjects=tt.INSTANCE.selectedObjects)),this.mouseInAdd=!1},addVoxel(){var t;const n=new ps;n.draw(new D,"square",0,1),n.update();const e=K.renderingContext();e==null||e.clickableObjects.push(n),e==null||e.scene.add(n),K.currentMode==="object"&&(n.select(),tt.INSTANCE.selectedObjects.push(n),(t=e.outlinePass)!=null&&t.selectedObjects&&(e.outlinePass.selectedObjects=tt.INSTANCE.selectedObjects)),this.mouseInAdd=!1},importFile(){const n=document.createElement("input");n.type="file",n.accept=".glb,.gltf",n.multiple=!1,n.addEventListener("change",e=>{var s;if(!((s=n.files)!=null&&s[0]))return;const t=new FileReader;t.onload=()=>{new tc().load(t.result,o=>{const a=new ui(new zi(0,0,0),new wn);o.scene.traverse(c=>{c.userData.meshObject=a}),a.name="Imported",a.add(o.scene);const l=K.renderingContext();l&&(l.scene.add(a),l.clickableObjects.push(a),l.selectObjects([a]))})},t.onerror=()=>{};const i=n.files[0];t.readAsDataURL(i)}),n.click(),this.mouseInFile=!1}},data(){return{mouseInFile:!1,mouseInEdit:!1,mouseInAdd:!1,state:K}}}),Qt=u((n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},"_export_sfc"),yn=u(n=>(Zn("data-v-6d489886"),n=n(),Jn(),n),"_withScopeId$b"),a2={class:"top-section"},l2={class:"menu-bar"},c2={key:0,class:"menu-list"},u2=yn(()=>U("div",{class:"menu-bar-item-btn"},[U("div",null,"Open"),U("div",{style:{"font-size":"small",color:"var(--color-text-disabled)"}},"(Ctrl + O)")],-1)),h2=yn(()=>U("div",{class:"menu-bar-item-btn"},[U("div",null,"Save"),U("div",{style:{"font-size":"small",color:"var(--color-text-disabled)"}},"(Ctrl + S)")],-1)),d2=yn(()=>U("div",null,"Import GLB/GLTF",-1)),f2=yn(()=>U("div",{style:{"font-size":"small",color:"var(--color-text-disabled)"}},null,-1)),p2=[d2,f2],m2=yn(()=>U("div",{class:"menu-bar-item-btn"},[U("div",null,"Export"),U("div",{style:{"font-size":"small",color:"var(--color-text-disabled)"}})],-1)),g2={key:0,class:"menu-list"},v2=yn(()=>U("div",null,"Copy",-1)),_2=yn(()=>U("div",{style:{"font-size":"small",color:"var(--color-text-disabled)"}},"(Ctrl + C)",-1)),x2=[v2,_2],y2=yn(()=>U("div",null,"Paste",-1)),b2=yn(()=>U("div",{style:{"font-size":"small",color:"var(--color-text-disabled)"}},"(Ctrl + V)",-1)),M2=[y2,b2],S2=yn(()=>U("div",null,"Undo",-1)),E2=yn(()=>U("div",{style:{"font-size":"small",color:"var(--color-text-disabled)"}},"(Ctrl + Z)",-1)),T2=[S2,E2],w2={key:0,class:"menu-list"},A2=yn(()=>U("div",null,"Voxel Mesh",-1)),C2=yn(()=>U("div",{style:{"font-size":"small",color:"var(--color-text-disabled)"}},"(5x5x5)",-1)),R2=[A2,C2],P2=yn(()=>U("div",null,"Voxel",-1)),D2=yn(()=>U("div",{style:{"font-size":"small",color:"var(--color-text-disabled)"}},"(1x1x1)",-1)),I2=[P2,D2];function L2(n,e,t,i,s,r){return he(),Ee("div",a2,[U("div",l2,[U("div",{onMouseenter:e[1]||(e[1]=o=>n.mouseIn("mouseInFile")),onMouseleave:e[2]||(e[2]=o=>n.mouseOut("mouseInFile")),class:"menu-item"},[U("div",{class:lt("menu-item-button "+(n.mouseInFile?"menu-item-button-open":""))}," File ",2),n.mouseInFile?(he(),Ee("div",c2,[u2,h2,U("div",{onClick:e[0]||(e[0]=(...o)=>n.importFile&&n.importFile(...o)),class:"menu-bar-item-btn"},p2),m2])):Ve("",!0)],32),U("div",{onMouseenter:e[6]||(e[6]=o=>n.mouseIn("mouseInEdit")),onMouseleave:e[7]||(e[7]=o=>n.mouseOut("mouseInEdit")),class:"menu-item"},[U("div",{class:lt("menu-item-button "+(n.mouseInEdit?"menu-item-button-open":""))}," Edit ",2),n.mouseInEdit?(he(),Ee("div",g2,[U("div",{onClick:e[3]||(e[3]=o=>{var a;(a=n.state.renderingContext())==null||a.copy(),n.mouseInEdit=!1}),class:"menu-bar-item-btn"},x2),U("div",{onClick:e[4]||(e[4]=o=>{var a;(a=n.state.renderingContext())==null||a.paste(),n.mouseInEdit=!1}),class:"menu-bar-item-btn"},M2),U("div",{onClick:e[5]||(e[5]=o=>{var a;(a=n.state.renderingContext())==null||a.undo(),n.mouseInEdit=!1}),class:"menu-bar-item-btn"},T2)])):Ve("",!0)],32),U("div",{onMouseenter:e[10]||(e[10]=o=>n.mouseIn("mouseInAdd")),onMouseleave:e[11]||(e[11]=o=>n.mouseOut("mouseInAdd")),class:"menu-item"},[U("div",{class:lt("menu-item-button "+(n.mouseInAdd?"menu-item-button-open":""))}," Add ",2),n.mouseInAdd?(he(),Ee("div",w2,[U("div",{onClick:e[8]||(e[8]=(...o)=>n.addVoxelMesh&&n.addVoxelMesh(...o)),class:"menu-bar-item-btn"},R2),U("div",{onClick:e[9]||(e[9]=(...o)=>n.addVoxel&&n.addVoxel(...o)),class:"menu-bar-item-btn"},I2)])):Ve("",!0)],32)])])}u(L2,"_sfc_render$h");const N2=Qt(o2,[["render",L2],["__scopeId","data-v-6d489886"]]),up=Mt({props:{defaultCollapsed:Boolean,item:Ct,level:Number,index:Number},mounted(){this.interval=setInterval(()=>{this.$forceUpdate()},100)},unmounted(){clearInterval(this.interval)},methods:{checkChange(n,e,t,i){var r,o,a;let s;if(t?(r=window.renderingContext)==null||r.scene.traverse(l=>{l.id===n.id&&(s=l)}):s=n,!!s){if(i&&!this.isItemInternal(s)&&(s.visible=!s.visible),s.isMeshObject&&!this.isItemInternal(s)&&e.target.checked&&!s.selected&&!i&&(s.select(),tt.INSTANCE.selectedObjects.push(s),(o=K.renderingContextProxy)!=null&&o.outlinePass&&(K.renderingContextProxy.outlinePass.selectedObjects=tt.INSTANCE.selectedObjects)),s.isMeshObject&&!this.isItemInternal(s)&&!e.target.checked&&s.selected&&!i){s.unselect();let l=tt.INSTANCE.selectedObjects.indexOf(s);l!==-1&&(tt.INSTANCE.selectedObjects.splice(l,1),(a=K.renderingContextProxy)!=null&&a.outlinePass&&(K.renderingContextProxy.outlinePass.selectedObjects=tt.INSTANCE.selectedObjects))}s&&s.children.forEach(l=>{this.checkChange(l,e,!1,i)})}},itemHasChildren(n){return n?K.treeShowInternal?n.children.length>0:((n==null?void 0:n.children.filter(e=>e.isMeshObject).length)||0)>0:!1},areAllChildrenSelected(n){if(!n)return!1;let e=0;for(const t of n.children)if(t instanceof ui&&!this.isItemInternal(t)&&(e++,!t.selected))return!1;return e>0},isItemInternal(n){return n?(!n.isMeshObject||n.internal)&&!n.userData.isRootScene:!0}},setup(n){const e=Pt(null);return{hoverIndex:e,onMouseOver:u(s=>{e.value=s},"onMouseOver"),onMouseLeave:u(()=>{e.value=null},"onMouseLeave"),interval:0,collapsed:n.defaultCollapsed}},data(){return{state:K,name:this.$refs.name}}}),Rv=u(()=>{Uc(n=>({"7de45399":`calc(100% - ${(n.level||0)*16}px)`}))},"__injectCSSVars__$3"),Pv=up.setup;up.setup=Pv?(n,e)=>(Rv(),Pv(n,e)):Rv;const O2={class:"item"},U2={class:"title-right"},F2=["disabled","checked"];function B2(n,e,t,i,s,r){var a,l,c,h,d,f,p;const o=Ut("SceneTreeItem",!0);return he(),Ee("div",O2,[U("div",{style:zt(`transform: translateX(${(n.level||0)*16}px);width:100%`)},[U("div",{class:lt(["title",{hovered:n.hoverIndex===n.index}]),onMouseover:e[3]||(e[3]=v=>n.onMouseOver(n.index)),onMouseleave:e[4]||(e[4]=(...v)=>n.onMouseLeave&&n.onMouseLeave(...v))},[U("div",{onClick:e[0]||(e[0]=v=>{n.collapsed=!n.collapsed}),class:"title-left"},[U("i",{class:lt({"bi bi-caret-down-fill":!n.collapsed,"bi bi-caret-right-fill":n.collapsed}),style:zt(`display: ${n.itemHasChildren(n.item)?"block":"none"}`)},null,6),U("div",{ref:"name",style:{"margin-left":"4px",overflow:"hidden","max-height":"24px","text-align":"left"}},xt((((a=n.item)==null?void 0:a.name)||((l=n.item)==null?void 0:l.constructor.name))+`<#${(c=n.item)==null?void 0:c.id}>`),513)]),U("div",U2,[n.isItemInternal(n.item)?Ve("",!0):(he(),Ee("i",{key:0,onClick:e[1]||(e[1]=v=>n.checkChange(n.item,v,!0,!0)),class:lt({"bi bi-eye-fill":(h=n.item)==null?void 0:h.visible,"bi bi-eye-slash-fill":!((d=n.item)!=null&&d.visible)})},null,2)),U("input",{disabled:n.state.currentMode!=="object"||n.isItemInternal(n.item),onChange:e[2]||(e[2]=v=>n.checkChange(n.item,v,!0,!1)),type:"checkbox",checked:((f=n.item)==null?void 0:f.selected)||n.areAllChildrenSelected(n.item)},null,40,F2)])],34),n.collapsed?Ve("",!0):(he(!0),Ee(Lt,{key:0},Go((p=n.item)==null?void 0:p.children,(v,_)=>(he(),Ee("div",{key:v.id||_,style:{width:"100%"}},[!n.isItemInternal(v)||n.state.treeShowInternal?(he(),ct(o,{key:0,defaultCollapsed:!1,item:v,level:(n.level||0)+1,index:_},null,8,["item","level","index"])):Ve("",!0)]))),128))],4)])}u(B2,"_sfc_render$g");const k2=Qt(up,[["render",B2],["__scopeId","data-v-b29f733d"]]),z2=Mt({components:{SceneTreeItem:k2},data(){return{state:K}}}),V2=u(n=>(Zn("data-v-245a44c6"),n=n(),Jn(),n),"_withScopeId$a"),H2={class:"scene-tree-browser"},G2={class:"scene-tree-options"},W2=V2(()=>U("h5",null,"Show internal",-1)),$2={class:"scene-tree-list"};function j2(n,e,t,i,s,r){var a,l;const o=Ut("SceneTreeItem");return he(),Ee("div",H2,[U("div",G2,[W2,U("input",{onChange:e[0]||(e[0]=c=>n.state.treeShowInternal=c.target.checked),type:"checkbox"},null,32)]),U("div",$2,[Ue(o,{"default-collapsed":!1,item:(l=(a=n.state)==null?void 0:a.renderingContextProxy)==null?void 0:l.scene,level:0,index:0},null,8,["item"])])])}u(j2,"_sfc_render$f");const X2=Qt(z2,[["render",j2],["__scopeId","data-v-245a44c6"]]),Y2=Mt({props:{unit:String,value:Number},emits:{changeValue:n=>{}},methods:{changeCallback(n){this.$emit("changeValue",+n.target.value)},focus(){this.focused=!0},unFocus(){this.focused=!1},click(){const n=this.$el.querySelector("input");this.focused||(n.focus(),n.select())}},data(){return{focused:!1}}}),q2=["value"],K2={class:"number-input-icon"};function Z2(n,e,t,i,s,r){return he(),Ee("div",{onClick:e[3]||(e[3]=(...o)=>n.click&&n.click(...o)),class:"number-input"},[U("input",{onFocusin:e[0]||(e[0]=()=>{}),onFocusout:e[1]||(e[1]=()=>{}),onKeyup:e[2]||(e[2]=(...o)=>n.changeCallback&&n.changeCallback(...o)),value:n.value||0,style:{"margin-left":"4px"},type:"number"},null,40,q2),U("div",K2,xt(n.unit),1)])}u(Z2,"_sfc_render$e");const Lx=Qt(Y2,[["render",Z2],["__scopeId","data-v-ce353066"]]),J2=Mt({components:{NumberInput:Lx},props:{xp:Number,yp:Number,zp:Number},emits:{changeValue:n=>{}},methods:{xc(n){this.updateFromProps(),this.x=n,this.$emit("changeValue",new D(this.x,this.y,this.z))},yc(n){this.updateFromProps(),this.y=n,this.$emit("changeValue",new D(this.x,this.y,this.z))},zc(n){this.updateFromProps(),this.z=n,this.$emit("changeValue",new D(this.x,this.y,this.z))},updateFromProps(){this.x=this.$props.xp,this.y=this.$props.yp,this.z=this.$props.zp}},data(){return{x:this.$props.xp,y:this.$props.yp,z:this.$props.zp}}}),hp=u(n=>(Zn("data-v-e0bfee5f"),n=n(),Jn(),n),"_withScopeId$9"),Q2={class:"container"},eR=hp(()=>U("h5",null,"X:",-1)),tR={class:"container"},nR=hp(()=>U("h5",null,"Y:",-1)),iR={class:"container"},sR=hp(()=>U("h5",null,"Z:",-1));function rR(n,e,t,i,s,r){const o=Ut("NumberInput");return he(),Ee(Lt,null,[U("div",Q2,[eR,Ue(o,{onChangeValue:n.xc,unit:"m",value:n.xp},null,8,["onChangeValue","value"])]),U("div",tR,[nR,Ue(o,{onChangeValue:n.yc,unit:"m",value:n.yp},null,8,["onChangeValue","value"])]),U("div",iR,[sR,Ue(o,{onChangeValue:n.zc,unit:"m",value:n.zp},null,8,["onChangeValue","value"])])],64)}u(rR,"_sfc_render$d");const oR=Qt(J2,[["render",rR],["__scopeId","data-v-e0bfee5f"]]),aR=Mt({components:{NumberInput:Lx,Vector3Input:oR},methods:{marchCubes(n){K.selectedObject instanceof ps&&(K.selectedObject.marchCubes=n.target.checked,K.selectedObject.update())},smoothNormals(n){K.selectedObject instanceof ps&&(K.selectedObject.smoothNormals=n.target.checked,K.selectedObject.update())},smoothGeometry(n){K.selectedObject instanceof ps&&(K.selectedObject.smoothGeometry=n.target.checked,K.selectedObject.update())},positionChange(n){K.selectedObject&&K.selectedObject.position.copy(n)},scaleChange(n){K.selectedObject&&K.selectedObject.scale.copy(n)},rotationChange(n){K.selectedObject&&(K.selectedObject.rotation.x=n.x,K.selectedObject.rotation.y=n.y,K.selectedObject.rotation.z=n.z)},collapse(n){const e=this.$refs[n];this[n+"Open"]?e.style.maxHeight="0px":e.style.maxHeight=e.scrollHeight+"px",this[n+"Open"]=!this[n+"Open"]}},mounted(){this.interval=setInterval(()=>{this.$forceUpdate()},50)},unmounted(){clearInterval(this.interval)},updated(){["position","scale","rotation","voxel"].forEach(n=>{const e=this.$refs[n];e&&e.style&&this[n+"Open"]&&(e.style.maxHeight=e.scrollHeight+"px")})},data(){return{state:K,interval:0,positionOpen:!0,scaleOpen:!0,rotationOpen:!0,voxelOpen:!0}}}),Cs=u(n=>(Zn("data-v-cbc3e7c5"),n=n(),Jn(),n),"_withScopeId$8"),lR={key:0,class:"object-options-list"},cR={key:1,class:"object-options-list"},uR=Cs(()=>U("h5",{style:{"margin-left":"8px"}},"Position",-1)),hR=Cs(()=>U("h5",{style:{"margin-left":"8px"}},"Scale",-1)),dR=Cs(()=>U("h5",{style:{"margin-left":"8px"}},"Rotation",-1)),fR=Cs(()=>U("h5",{style:{"margin-left":"8px"}},"Voxel mesh",-1)),pR={key:0,class:"object-option"},mR=Cs(()=>U("h5",null,"March cubes",-1)),gR=["checked"],vR={key:1,class:"object-option"},_R=Cs(()=>U("h5",null,"Smooth normals",-1)),xR=["checked"],yR={key:2,class:"object-option"},bR=Cs(()=>U("h5",null,"Smooth",-1)),MR=["checked"],SR={key:2,class:"object-options-list"},ER=Cs(()=>U("div",{class:"object-option-group-title",style:{"text-align":"left"}},[U("h5")],-1));function TR(n,e,t,i,s,r){var a;const o=Ut("Vector3Input");return he(),Ee(Lt,null,[n.state.multipleSelections?(he(),Ee("div",lR," Multiple - "+xt((a=n.state.selectedObject)==null?void 0:a.constructor.name),1)):n.state.selectedObject?(he(),Ee("div",cR,[An(xt(n.state.selectedObject.constructor.name)+" ",1),U("div",{onClick:e[0]||(e[0]=l=>n.collapse("position")),class:"object-option-group-title",style:{"text-align":"left"}},[U("i",{class:lt({"bi bi-caret-down-fill":n.positionOpen,"bi bi-caret-right-fill":!n.positionOpen})},null,2),uR]),U("div",{class:lt(["object-option-group",{collapse:!n.positionOpen}]),ref:"position"},[Ue(o,{xp:n.state.selectedObject.position.x||0,yp:n.state.selectedObject.position.y||0,zp:n.state.selectedObject.position.z||0,onChangeValue:n.positionChange},null,8,["xp","yp","zp","onChangeValue"])],2),U("div",{onClick:e[1]||(e[1]=l=>n.collapse("scale")),class:"object-option-group-title",style:{"text-align":"left"}},[U("i",{class:lt({"bi bi-caret-down-fill":n.scaleOpen,"bi bi-caret-right-fill":!n.scaleOpen})},null,2),hR]),U("div",{class:lt(["object-option-group",{collapse:!n.scaleOpen}]),ref:"scale"},[Ue(o,{xp:n.state.selectedObject.scale.x||0,yp:n.state.selectedObject.scale.y||0,zp:n.state.selectedObject.scale.z||0,onChangeValue:n.scaleChange},null,8,["xp","yp","zp","onChangeValue"])],2),U("div",{onClick:e[2]||(e[2]=l=>n.collapse("rotation")),class:"object-option-group-title",style:{"text-align":"left"}},[U("i",{class:lt({"bi bi-caret-down-fill":n.rotationOpen,"bi bi-caret-right-fill":!n.rotationOpen})},null,2),dR]),U("div",{class:lt(["object-option-group",{collapse:!n.rotationOpen}]),ref:"rotation"},[Ue(o,{xp:n.state.selectedObject.rotation.x||0,yp:n.state.selectedObject.rotation.y||0,zp:n.state.selectedObject.rotation.z||0,onChangeValue:n.rotationChange},null,8,["xp","yp","zp","onChangeValue"])],2),n.state.selectedObject.isVoxelMesh?(he(),Ee("div",{key:0,onClick:e[3]||(e[3]=l=>n.collapse("voxel")),class:"object-option-group-title",style:{"text-align":"left"}},[U("i",{class:lt({"bi bi-caret-down-fill":n.voxelOpen,"bi bi-caret-right-fill":!n.voxelOpen})},null,2),fR])):Ve("",!0),n.state.selectedObject.isVoxelMesh?(he(),Ee("div",{key:1,class:lt(["object-option-group",{collapse:!n.voxelOpen}]),ref:"voxel"},[n.state.selectedObject.constructor.name==="VoxelMesh"?(he(),Ee("div",pR,[mR,U("input",{onChange:e[4]||(e[4]=(...l)=>n.marchCubes&&n.marchCubes(...l)),checked:n.state.selectedObject.marchCubes,type:"checkbox"},null,40,gR)])):Ve("",!0),n.state.selectedObject.marchCubes&&!n.state.selectedObject.smoothGeometry?(he(),Ee("div",vR,[_R,U("input",{onChange:e[5]||(e[5]=(...l)=>n.smoothNormals&&n.smoothNormals(...l)),checked:n.state.selectedObject.smoothNormals,type:"checkbox"},null,40,xR)])):Ve("",!0),n.state.selectedObject.marchCubes?(he(),Ee("div",yR,[bR,U("input",{onChange:e[6]||(e[6]=(...l)=>n.smoothGeometry&&n.smoothGeometry(...l)),checked:n.state.selectedObject.smoothGeometry,type:"checkbox"},null,40,MR)])):Ve("",!0)],2)):Ve("",!0)])):(he(),Ee("div",SR," No object selected ")),ER],64)}u(TR,"_sfc_render$c");const wR=Qt(aR,[["render",TR],["__scopeId","data-v-cbc3e7c5"]]),AR={name:"splitpanes",emits:["ready","resize","resized","pane-click","pane-maximize","pane-add","pane-remove","splitter-click"],props:{horizontal:{type:Boolean},pushOtherPanes:{type:Boolean,default:!0},dblClickSplitter:{type:Boolean,default:!0},rtl:{type:Boolean,default:!1},firstSplitter:{type:Boolean}},provide(){return{requestUpdate:this.requestUpdate,onPaneAdd:this.onPaneAdd,onPaneRemove:this.onPaneRemove,onPaneClick:this.onPaneClick}},data:()=>({container:null,ready:!1,panes:[],touch:{mouseDown:!1,dragging:!1,activeSplitter:null},splitterTaps:{splitter:null,timeoutId:null}}),computed:{panesCount(){return this.panes.length},indexedPanes(){return this.panes.reduce((n,e)=>(n[e.id]=e)&&n,{})}},methods:{updatePaneComponents(){this.panes.forEach(n=>{n.update&&n.update({[this.horizontal?"height":"width"]:`${this.indexedPanes[n.id].size}%`})})},bindEvents(){document.addEventListener("mousemove",this.onMouseMove,{passive:!1}),document.addEventListener("mouseup",this.onMouseUp),"ontouchstart"in window&&(document.addEventListener("touchmove",this.onMouseMove,{passive:!1}),document.addEventListener("touchend",this.onMouseUp))},unbindEvents(){document.removeEventListener("mousemove",this.onMouseMove,{passive:!1}),document.removeEventListener("mouseup",this.onMouseUp),"ontouchstart"in window&&(document.removeEventListener("touchmove",this.onMouseMove,{passive:!1}),document.removeEventListener("touchend",this.onMouseUp))},onMouseDown(n,e){this.bindEvents(),this.touch.mouseDown=!0,this.touch.activeSplitter=e},onMouseMove(n){this.touch.mouseDown&&(n.preventDefault(),this.touch.dragging=!0,this.calculatePanesSize(this.getCurrentMouseDrag(n)),this.$emit("resize",this.panes.map(e=>({min:e.min,max:e.max,size:e.size}))))},onMouseUp(){this.touch.dragging&&this.$emit("resized",this.panes.map(n=>({min:n.min,max:n.max,size:n.size}))),this.touch.mouseDown=!1,setTimeout(()=>{this.touch.dragging=!1,this.unbindEvents()},100)},onSplitterClick(n,e){"ontouchstart"in window&&(n.preventDefault(),this.dblClickSplitter&&(this.splitterTaps.splitter===e?(clearTimeout(this.splitterTaps.timeoutId),this.splitterTaps.timeoutId=null,this.onSplitterDblClick(n,e),this.splitterTaps.splitter=null):(this.splitterTaps.splitter=e,this.splitterTaps.timeoutId=setTimeout(()=>{this.splitterTaps.splitter=null},500)))),this.touch.dragging||this.$emit("splitter-click",this.panes[e])},onSplitterDblClick(n,e){let t=0;this.panes=this.panes.map((i,s)=>(i.size=s===e?i.max:i.min,s!==e&&(t+=i.min),i)),this.panes[e].size-=t,this.$emit("pane-maximize",this.panes[e]),this.$emit("resized",this.panes.map(i=>({min:i.min,max:i.max,size:i.size})))},onPaneClick(n,e){this.$emit("pane-click",this.indexedPanes[e])},getCurrentMouseDrag(n){const e=this.container.getBoundingClientRect(),{clientX:t,clientY:i}="ontouchstart"in window&&n.touches?n.touches[0]:n;return{x:t-e.left,y:i-e.top}},getCurrentDragPercentage(n){n=n[this.horizontal?"y":"x"];const e=this.container[this.horizontal?"clientHeight":"clientWidth"];return this.rtl&&!this.horizontal&&(n=e-n),n*100/e},calculatePanesSize(n){const e=this.touch.activeSplitter;let t={prevPanesSize:this.sumPrevPanesSize(e),nextPanesSize:this.sumNextPanesSize(e),prevReachedMinPanes:0,nextReachedMinPanes:0};const i=0+(this.pushOtherPanes?0:t.prevPanesSize),s=100-(this.pushOtherPanes?0:t.nextPanesSize),r=Math.max(Math.min(this.getCurrentDragPercentage(n),s),i);let o=[e,e+1],a=this.panes[o[0]]||null,l=this.panes[o[1]]||null;const c=a.max<100&&r>=a.max+t.prevPanesSize,h=l.max<100&&r<=100-(l.max+this.sumNextPanesSize(e+1));if(c||h){c?(a.size=a.max,l.size=Math.max(100-a.max-t.prevPanesSize-t.nextPanesSize,0)):(a.size=Math.max(100-l.max-t.prevPanesSize-this.sumNextPanesSize(e+1),0),l.size=l.max);return}if(this.pushOtherPanes){const d=this.doPushOtherPanes(t,r);if(!d)return;({sums:t,panesToResize:o}=d),a=this.panes[o[0]]||null,l=this.panes[o[1]]||null}a!==null&&(a.size=Math.min(Math.max(r-t.prevPanesSize-t.prevReachedMinPanes,a.min),a.max)),l!==null&&(l.size=Math.min(Math.max(100-r-t.nextPanesSize-t.nextReachedMinPanes,l.min),l.max))},doPushOtherPanes(n,e){const t=this.touch.activeSplitter,i=[t,t+1];return e<n.prevPanesSize+this.panes[i[0]].min&&(i[0]=this.findPrevExpandedPane(t).index,n.prevReachedMinPanes=0,i[0]<t&&this.panes.forEach((s,r)=>{r>i[0]&&r<=t&&(s.size=s.min,n.prevReachedMinPanes+=s.min)}),n.prevPanesSize=this.sumPrevPanesSize(i[0]),i[0]===void 0)?(n.prevReachedMinPanes=0,this.panes[0].size=this.panes[0].min,this.panes.forEach((s,r)=>{r>0&&r<=t&&(s.size=s.min,n.prevReachedMinPanes+=s.min)}),this.panes[i[1]].size=100-n.prevReachedMinPanes-this.panes[0].min-n.prevPanesSize-n.nextPanesSize,null):e>100-n.nextPanesSize-this.panes[i[1]].min&&(i[1]=this.findNextExpandedPane(t).index,n.nextReachedMinPanes=0,i[1]>t+1&&this.panes.forEach((s,r)=>{r>t&&r<i[1]&&(s.size=s.min,n.nextReachedMinPanes+=s.min)}),n.nextPanesSize=this.sumNextPanesSize(i[1]-1),i[1]===void 0)?(n.nextReachedMinPanes=0,this.panes[this.panesCount-1].size=this.panes[this.panesCount-1].min,this.panes.forEach((s,r)=>{r<this.panesCount-1&&r>=t+1&&(s.size=s.min,n.nextReachedMinPanes+=s.min)}),this.panes[i[0]].size=100-n.prevPanesSize-n.nextReachedMinPanes-this.panes[this.panesCount-1].min-n.nextPanesSize,null):{sums:n,panesToResize:i}},sumPrevPanesSize(n){return this.panes.reduce((e,t,i)=>e+(i<n?t.size:0),0)},sumNextPanesSize(n){return this.panes.reduce((e,t,i)=>e+(i>n+1?t.size:0),0)},findPrevExpandedPane(n){return[...this.panes].reverse().find(e=>e.index<n&&e.size>e.min)||{}},findNextExpandedPane(n){return this.panes.find(e=>e.index>n+1&&e.size>e.min)||{}},checkSplitpanesNodes(){Array.from(this.container.children).forEach(n=>{const e=n.classList.contains("splitpanes__pane"),t=n.classList.contains("splitpanes__splitter");!e&&!t&&(n.parentNode.removeChild(n),console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."))})},addSplitter(n,e,t=!1){const i=n-1,s=document.createElement("div");s.classList.add("splitpanes__splitter"),t||(s.onmousedown=r=>this.onMouseDown(r,i),typeof window<"u"&&"ontouchstart"in window&&(s.ontouchstart=r=>this.onMouseDown(r,i)),s.onclick=r=>this.onSplitterClick(r,i+1)),this.dblClickSplitter&&(s.ondblclick=r=>this.onSplitterDblClick(r,i+1)),e.parentNode.insertBefore(s,e)},removeSplitter(n){n.onmousedown=void 0,n.onclick=void 0,n.ondblclick=void 0,n.parentNode.removeChild(n)},redoSplitters(){const n=Array.from(this.container.children);n.forEach(t=>{t.className.includes("splitpanes__splitter")&&this.removeSplitter(t)});let e=0;n.forEach(t=>{t.className.includes("splitpanes__pane")&&(!e&&this.firstSplitter?this.addSplitter(e,t,!0):e&&this.addSplitter(e,t),e++)})},requestUpdate({target:n,...e}){const t=this.indexedPanes[n._.uid];Object.entries(e).forEach(([i,s])=>t[i]=s)},onPaneAdd(n){let e=-1;Array.from(n.$el.parentNode.children).some(s=>(s.className.includes("splitpanes__pane")&&e++,s===n.$el));const t=parseFloat(n.minSize),i=parseFloat(n.maxSize);this.panes.splice(e,0,{id:n._.uid,index:e,min:isNaN(t)?0:t,max:isNaN(i)?100:i,size:n.size===null?null:parseFloat(n.size),givenSize:n.size,update:n.update}),this.panes.forEach((s,r)=>s.index=r),this.ready&&this.$nextTick(()=>{this.redoSplitters(),this.resetPaneSizes({addedPane:this.panes[e]}),this.$emit("pane-add",{index:e,panes:this.panes.map(s=>({min:s.min,max:s.max,size:s.size}))})})},onPaneRemove(n){const e=this.panes.findIndex(i=>i.id===n._.uid),t=this.panes.splice(e,1)[0];this.panes.forEach((i,s)=>i.index=s),this.$nextTick(()=>{this.redoSplitters(),this.resetPaneSizes({removedPane:{...t,index:e}}),this.$emit("pane-remove",{removed:t,panes:this.panes.map(i=>({min:i.min,max:i.max,size:i.size}))})})},resetPaneSizes(n={}){!n.addedPane&&!n.removedPane?this.initialPanesSizing():this.panes.some(e=>e.givenSize!==null||e.min||e.max<100)?this.equalizeAfterAddOrRemove(n):this.equalize(),this.ready&&this.$emit("resized",this.panes.map(e=>({min:e.min,max:e.max,size:e.size})))},equalize(){const n=100/this.panesCount;let e=0;const t=[],i=[];this.panes.forEach(s=>{s.size=Math.max(Math.min(n,s.max),s.min),e-=s.size,s.size>=s.max&&t.push(s.id),s.size<=s.min&&i.push(s.id)}),e>.1&&this.readjustSizes(e,t,i)},initialPanesSizing(){let n=100;const e=[],t=[];let i=0;this.panes.forEach(r=>{n-=r.size,r.size!==null&&i++,r.size>=r.max&&e.push(r.id),r.size<=r.min&&t.push(r.id)});let s=100;n>.1&&(this.panes.forEach(r=>{r.size===null&&(r.size=Math.max(Math.min(n/(this.panesCount-i),r.max),r.min)),s-=r.size}),s>.1&&this.readjustSizes(n,e,t))},equalizeAfterAddOrRemove({addedPane:n,removedPane:e}={}){let t=100/this.panesCount,i=0;const s=[],r=[];n&&n.givenSize!==null&&(t=(100-n.givenSize)/(this.panesCount-1)),this.panes.forEach(o=>{i-=o.size,o.size>=o.max&&s.push(o.id),o.size<=o.min&&r.push(o.id)}),!(Math.abs(i)<.1)&&(this.panes.forEach(o=>{n&&n.givenSize!==null&&n.id===o.id||(o.size=Math.max(Math.min(t,o.max),o.min)),i-=o.size,o.size>=o.max&&s.push(o.id),o.size<=o.min&&r.push(o.id)}),i>.1&&this.readjustSizes(i,s,r))},readjustSizes(n,e,t){let i;n>0?i=n/(this.panesCount-e.length):i=n/(this.panesCount-t.length),this.panes.forEach((s,r)=>{if(n>0&&!e.includes(s.id)){const o=Math.max(Math.min(s.size+i,s.max),s.min),a=o-s.size;n-=a,s.size=o}else if(!t.includes(s.id)){const o=Math.max(Math.min(s.size+i,s.max),s.min),a=o-s.size;n-=a,s.size=o}s.update({[this.horizontal?"height":"width"]:`${this.indexedPanes[s.id].size}%`})}),Math.abs(n)>.1&&this.$nextTick(()=>{this.ready&&console.warn("Splitpanes: Could not resize panes correctly due to their constraints.")})}},watch:{panes:{deep:!0,immediate:!1,handler(){this.updatePaneComponents()}},horizontal(){this.updatePaneComponents()},firstSplitter(){this.redoSplitters()},dblClickSplitter(n){[...this.container.querySelectorAll(".splitpanes__splitter")].forEach((e,t)=>{e.ondblclick=n?i=>this.onSplitterDblClick(i,t):void 0})}},beforeUnmount(){this.ready=!1},mounted(){this.container=this.$refs.container,this.checkSplitpanesNodes(),this.redoSplitters(),this.resetPaneSizes(),this.$emit("ready"),this.ready=!0},render(){return J_("div",{ref:"container",class:["splitpanes",`splitpanes--${this.horizontal?"horizontal":"vertical"}`,{"splitpanes--dragging":this.touch.dragging}]},this.$slots.default())}},CR=u((n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},"S"),RR={name:"pane",inject:["requestUpdate","onPaneAdd","onPaneRemove","onPaneClick"],props:{size:{type:[Number,String],default:null},minSize:{type:[Number,String],default:0},maxSize:{type:[Number,String],default:100}},data:()=>({style:{}}),mounted(){this.onPaneAdd(this)},beforeUnmount(){this.onPaneRemove(this)},methods:{update(n){this.style=n}},computed:{sizeNumber(){return this.size||this.size===0?parseFloat(this.size):null},minSizeNumber(){return parseFloat(this.minSize)},maxSizeNumber(){return parseFloat(this.maxSize)}},watch:{sizeNumber(n){this.requestUpdate({target:this,size:n})},minSizeNumber(n){this.requestUpdate({target:this,min:n})},maxSizeNumber(n){this.requestUpdate({target:this,max:n})}}};function PR(n,e,t,i,s,r){return he(),Ee("div",{class:"splitpanes__pane",onClick:e[0]||(e[0]=o=>r.onPaneClick(o,n._.uid)),style:zt(n.style)},[hn(n.$slots,"default")],4)}u(PR,"P$2");const DR=CR(RR,[["render",PR]]),IR=Mt({components:{SceneTree:X2,Splitpanes:AR,Pane:DR,ObjectProperties:wR},methods:{resized(){var e,t;this.panelHeight=((e=this.panel)==null?void 0:e.clientHeight)||0;const n=(t=this.$refs.properties)==null?void 0:t.$el;n&&(document.getElementById("editor-canvas").width<864&&(n.style.width=window.innerWidth-864+"px"),+n.style.width.replace("px","")<256&&(n.style.width="256px"))},resize(n){var e;if(this.isResizing){K.cursorShape="col-resize";const t=(e=this.$refs.properties)==null?void 0:e.$el;t&&(t.style.width=+t.style.width.replace("px","")-n.movementX+"px"),+t.style.width.replace("px","")<256&&(t.style.width="256px")}},mouseUp(){this.isResizing&&(K.cursorShape="initial"),this.isResizing=!1}},mounted(){this.panel=document.querySelector(".properties-panel"),this.observer=new ResizeObserver(this.resized),this.observer.observe(this.panel),document.addEventListener("mousemove",this.resize),document.addEventListener("mouseup",this.mouseUp),window.addEventListener("resize",this.resized),this.resized()},unmounted(){var n;(n=this.observer)==null||n.disconnect(),document.removeEventListener("mousemove",this.resize),document.removeEventListener("mouseup",this.mouseUp),window.removeEventListener("resize",this.resized)},data(){return{observer:void 0,panel:void 0,panelHeight:0,isResizing:!1}}}),LR=u(n=>(Zn("data-v-550edf65"),n=n(),Jn(),n),"_withScopeId$7"),NR={class:"properties-panel"},OR=LR(()=>U("div",{style:{display:"flex","justify-content":"space-around",width:"100%"}},[U("div",{style:{width:"1px",height:"30px","background-color":"#ffffff26"}}),U("div",{style:{width:"1px",height:"30px","background-color":"#ffffff26"}})],-1)),UR=[OR];function FR(n,e,t,i,s,r){const o=Ut("SceneTree"),a=Ut("pane"),l=Ut("ObjectProperties"),c=Ut("splitpanes");return he(),Ee("div",NR,[U("div",{onMousedown:e[0]||(e[0]=h=>n.isResizing=!0),class:"resize"},UR,32),Ue(c,{ref:"properties",class:"default-theme",horizontal:"",style:zt(`height: ${n.panelHeight+"px"}`)},{default:kr(()=>[Ue(a,{"min-size":"10"},{default:kr(()=>[Ue(o)]),_:1}),Ue(a,{"min-size":"10",size:"65"},{default:kr(()=>[Ue(l)]),_:1})]),_:1},8,["style"])])}u(FR,"_sfc_render$b");const BR=Qt(IR,[["render",FR],["__scopeId","data-v-550edf65"]]),kR=Mt({props:{material:Object,index:Number},mounted(){const n=new Hl({canvas:this.$refs.canvas,antialias:!0,preserveDrawingBuffer:!0});n.setClearColor(new De("#292929")),n.setSize(94,94),this.camera.position.set(0,0,-2),this.camera.lookAt(new D);const e=new Jl(16777215,1);e.position.set(2,2,-2),this.sphere.add(e),n.render(this.sphere,this.camera),this.src=this.$refs.canvas.toDataURL(),n.dispose(),n.forceContextLoss()},data(){return{src:void 0,state:K}},setup(){return{sphere:new St(new na(1),new Fi),camera:new jt(75,1,.1,10)}}}),zR={class:"name"},VR={class:"preview"},HR={key:0,ref:"canvas",width:"94",height:"94"},GR=["src"];function WR(n,e,t,i,s,r){return he(),Ee("div",{onClick:e[0]||(e[0]=o=>{n.state.selectedMaterial=n.material}),class:lt({item:!0,selected:n.state.selectedMaterial===n.material})},[U("div",zR,"Material "+xt(n.index),1),U("div",VR,[n.src?Ve("",!0):(he(),Ee("canvas",HR,null,512)),n.src?(he(),Ee("img",{key:1,src:n.src},null,8,GR)):Ve("",!0)])],2)}u(WR,"_sfc_render$a");const $R=Qt(kR,[["render",WR],["__scopeId","data-v-e24a8ee4"]]),jR={key:1,width:"16",height:"16",viewBox:"-12 -4 32 32",xmlns:"http://www.w3.org/2000/svg"},XR=U("path",{d:"M11.9995 16.8001C11.2995 16.8001 10.5995 16.5301 10.0695 16.0001L3.54953 9.48014C3.25953 9.19014 3.25953 8.71014 3.54953 8.42014C3.83953 8.13014 4.31953 8.13014 4.60953 8.42014L11.1295 14.9401C11.6095 15.4201 12.3895 15.4201 12.8695 14.9401L19.3895 8.42014C19.6795 8.13014 20.1595 8.13014 20.4495 8.42014C20.7395 8.71014 20.7395 9.19014 20.4495 9.48014L13.9295 16.0001C13.3995 16.5301 12.6995 16.8001 11.9995 16.8001Z"},null,-1),YR=[XR],qR=Mt({__name:"ColorInputMenu",props:{iconClass:{default:"",type:String},inputType:{default:"RGB",type:String}},emits:["onChangeInputName"],setup(n,{emit:e}){const t=Pt(n.inputType),i=["CMYK","HSL","HSV","RGB"],s=e,r=u(()=>{const o=i.findIndex(l=>l==t.value),a=i[o+1]?i[o+1]:i[0];t.value=a,s("onChangeInputName",a)},"m");return(o,a)=>(he(),Ee("button",{type:"button",class:"cp-btn",onClick:r},[An(xt(t.value)+" ",1),n.iconClass?(he(),Ee("i",{key:0,class:lt(n.iconClass)},null,2)):(he(),Ee("svg",jR,YR))]))}}),KR={class:"ck-cp-menu"},ZR={class:"ck-cp-controller-bar",style:{display:"flex","justify-content":"end",position:"relative","flex-grow":"1"}},JR={key:1,width:"16",height:"16",viewBox:"-12 -4 32 32",xmlns:"http://www.w3.org/2000/svg"},QR=U("path",{d:"M11.9995 16.8001C11.2995 16.8001 10.5995 16.5301 10.0695 16.0001L3.54953 9.48014C3.25953 9.19014 3.25953 8.71014 3.54953 8.42014C3.83953 8.13014 4.31953 8.13014 4.60953 8.42014L11.1295 14.9401C11.6095 15.4201 12.3895 15.4201 12.8695 14.9401L19.3895 8.42014C19.6795 8.13014 20.1595 8.13014 20.4495 8.42014C20.7395 8.71014 20.7395 9.19014 20.4495 9.48014L13.9295 16.0001C13.3995 16.5301 12.6995 16.8001 11.9995 16.8001Z"},null,-1),eP=[QR],tP={key:1,width:"16",height:"16",viewBox:"-12 -4 32 32",xmlns:"http://www.w3.org/2000/svg"},nP=U("path",{d:"M11.9995 16.8001C11.2995 16.8001 10.5995 16.5301 10.0695 16.0001L3.54953 9.48014C3.25953 9.19014 3.25953 8.71014 3.54953 8.42014C3.83953 8.13014 4.31953 8.13014 4.60953 8.42014L11.1295 14.9401C11.6095 15.4201 12.3895 15.4201 12.8695 14.9401L19.3895 8.42014C19.6795 8.13014 20.1595 8.13014 20.4495 8.42014C20.7395 8.71014 20.7395 9.19014 20.4495 9.48014L13.9295 16.0001C13.3995 16.5301 12.6995 16.8001 11.9995 16.8001Z"},null,-1),iP=[nP],sP={key:1,width:"15",height:"28",viewBox:"0 -3 36 36",xmlns:"http://www.w3.org/2000/svg"},rP=da('<path d="M29.333 9.667h-8c-0.547 0-1-0.453-1-1s0.453-1 1-1h8c0.547 0 1 0.453 1 1s-0.453 1-1 1z"></path><path d="M8 9.667h-5.333c-0.547 0-1-0.453-1-1s0.453-1 1-1h5.333c0.547 0 1 0.453 1 1s-0.453 1-1 1z"></path><path d="M13.333 14.333c-3.12 0-5.667-2.547-5.667-5.667s2.547-5.667 5.667-5.667c3.12 0 5.667 2.547 5.667 5.667s-2.547 5.667-5.667 5.667zM13.333 5c-2.027 0-3.667 1.64-3.667 3.667s1.64 3.667 3.667 3.667c2.027 0 3.667-1.64 3.667-3.667s-1.64-3.667-3.667-3.667z"></path><path d="M29.333 24.333h-5.333c-0.547 0-1-0.453-1-1s0.453-1 1-1h5.333c0.547 0 1 0.453 1 1s-0.453 1-1 1z"></path><path d="M10.667 24.333h-8c-0.547 0-1-0.453-1-1s0.453-1 1-1h8c0.547 0 1 0.453 1 1s-0.453 1-1 1z"></path><path d="M18.667 29c-3.12 0-5.667-2.547-5.667-5.667s2.547-5.667 5.667-5.667c3.12 0 5.667 2.547 5.667 5.667s-2.547 5.667-5.667 5.667zM18.667 19.667c-2.027 0-3.667 1.64-3.667 3.667s1.64 3.667 3.667 3.667c2.027 0 3.667-1.64 3.667-3.667s-1.64-3.667-3.667-3.667z"></path>',6),oP=[rP],aP={key:0,class:"ck-cp-linear-angle-container"},lP={class:"ck-gradient-set-label",style:{"margin-top":"0"}},cP=["value"],uP={key:1,class:"ck-cp-linear-angle-container"},hP={class:"ck-gradient-set-label",style:{"margin-top":"0"}},dP=["value"],fP={class:"ck-gradient-set-label"},pP=["value"],mP=Mt({__name:"PickerMenu",props:{mode:{default:"gradient",type:String},inputType:{default:"RGB",type:String},gradientType:{default:"linear",type:String},showInputMenu:{default:!0,type:Boolean},showPickerMode:{default:!0,type:Boolean},angle:{default:90,type:Number},percentageX:{default:50,type:Number},percentageY:{default:50,type:Number},local:{default:{},type:Object},iconClasses:{default:{ruler:"",eyeDroper:"",arrowDown:"",save:"",delete:""},type:Object}},emits:["onPickerChangeMode","onChangeMode","onChangeInputType","onDeleteColor","onClickEyeDropper","update:angle","update:percentageX","update:percentageY","onInput"],setup(n,{emit:e}){const t=n,i=Pt(!1),s=e,r=u((c,h)=>{switch(h){case"angle":s("update:angle",parseInt(c.target.value)),s("onInput");break;case"percentageX":s("update:percentageX",parseInt(c.target.value)),s("onInput");break;case"percentageY":s("update:percentageY",parseInt(c.target.value)),s("onInput");break}},"i"),o=u(c=>{s("onChangeInputType",c)},"m"),a=u(()=>{s("onChangeMode",t.gradientType=="linear"?"radial":"linear")},"b"),l=u(()=>{s("onPickerChangeMode",t.mode=="gradient"?"solid":"gradient")},"C");return(c,h)=>(he(),Ee(Lt,null,[U("div",KR,[U("div",ZR,[n.showPickerMode?(he(),Ee("button",{key:0,type:"button",class:"cp-btn",onClick:l,style:{"margin-bottom":"var(--margin-top)"}},[Gn(U("span",null,xt(n.local.gradient?n.local.gradient:"Gradient"),513),[[Wn,n.mode=="gradient"]]),Gn(U("span",null,xt(n.local.solid?n.local.solid:"Solid"),513),[[Wn,n.mode=="solid"]]),n.iconClasses.arrowDown?(he(),Ee("i",{key:0,class:lt(n.iconClasses.arrowDown)},null,2)):(he(),Ee("svg",JR,eP))])):Ve("",!0),n.mode=="gradient"?(he(),Ee("button",{key:1,type:"button",class:"cp-btn",style:{"margin-bottom":"var(--margin-top)"},onClick:a},[Gn(U("span",null,xt(n.local.linear?n.local.linear:"Linear"),513),[[Wn,n.gradientType=="linear"]]),Gn(U("span",null,xt(n.local.radial?n.local.radial:"Radial"),513),[[Wn,n.gradientType=="radial"]]),n.iconClasses.arrowDown?(he(),Ee("i",{key:0,class:lt(n.iconClasses.arrowDown)},null,2)):(he(),Ee("svg",tP,iP))])):Ve("",!0),n.showInputMenu?(he(),ct(qR,{key:2,style:{"margin-bottom":"var(--margin-top)"},iconClass:n.iconClasses.arrowDown,inputType:n.inputType,onOnChangeInputName:o},null,8,["iconClass","inputType"])):Ve("",!0),n.mode=="gradient"?(he(),Ee("button",{key:3,type:"button",class:"cp-btn",style:{"margin-bottom":"var(--margin-top)"},onClick:h[0]||(h[0]=d=>i.value=!i.value)},[n.iconClasses.ruler?(he(),Ee("i",{key:0,class:lt(n.iconClasses.ruler)},null,2)):(he(),Ee("svg",sP,oP))])):Ve("",!0)])]),n.mode=="gradient"?Gn((he(),Ee("div",aP,[U("div",null,[U("p",lP,[An(xt(n.local.angle?n.local.angle:"Angle")+" ",1),U("span",null,xt(n.angle)+"°",1)]),U("input",{type:"range",min:"0",max:"360",value:n.angle,onInput:h[1]||(h[1]=d=>r(d,"angle"))},null,40,cP)])],512)),[[Wn,n.gradientType=="linear"&&i.value]]):Ve("",!0),n.mode=="gradient"&&i.value?Gn((he(),Ee("div",uP,[U("div",null,[U("p",hP,[An(xt(n.local.positionX?n.local.positionX:"Position X")+" ",1),U("span",null,xt(n.percentageX)+"%",1)]),U("input",{type:"range",min:"0",max:"100",value:n.percentageX,onInput:h[2]||(h[2]=d=>r(d,"percentageX"))},null,40,dP)]),U("div",null,[U("p",fP,[An(xt(n.local.positionY?n.local.positionY:"Position Y")+" ",1),U("span",null,xt(n.percentageY)+"%",1)]),U("input",{type:"range",min:"0",max:"100",value:n.percentageY,onInput:h[3]||(h[3]=d=>r(d,"percentageY"))},null,40,pP)])],512)),[[Wn,n.gradientType=="radial"]]):Ve("",!0)],64))}}),gP=Mt({__name:"GradientBar",emits:["onAddColor","onMouseDown"],setup(n,{emit:e}){const t=Ui("gradientBar"),i=u(s=>{s.preventDefault()},"o");return(s,r)=>(he(),Ee("div",{class:"gradient-bar",onMousedown:r[1]||(r[1]=o=>s.$emit("onMouseDown",o)),onDragstart:i},[U("div",{ref_key:"gradientBar",ref:t,class:"gradient-container",onDblclick:r[0]||(r[0]=o=>s.$emit("onAddColor",o))},null,544)],32))}}),vP=U("div",{class:"colour-area-mask"},null,-1),_P=Mt({__name:"PickerWrap",emits:["onMouseDown"],setup(n){const e=Ui("canvas"),t=Ui("pickerWrap"),i=Ui("pickerPointer"),s=u(r=>{r.preventDefault()},"s");return(r,o)=>(he(),Ee("div",{ref_key:"pickerWrap",ref:t,class:"cp-picker-wrap",onMousedown:o[0]||(o[0]=a=>r.$emit("onMouseDown",a)),onDragstart:s},[U("canvas",{ref_key:"canvas",ref:e,class:"colour-area"},null,512),vP,U("div",{ref_key:"pickerPointer",ref:i,class:"colour-area-point-circle"},null,512)],544))}}),xP={class:"picker-hue"},yP=["value"],bP=Mt({__name:"PickerHue",props:{modelValue:{default:0,type:Number}},emits:["update:modelValue","onInput","onChange"],setup(n,{emit:e}){const t=e,i=u(s=>{t("update:modelValue",parseFloat(s.target.value)),t("onInput",s)},"o");return(s,r)=>(he(),Ee("div",xP,[U("input",{value:n.modelValue,class:"picker-hue-range-slider",type:"range",min:"0",max:"360",step:"0.1",onInput:i,onChange:r[0]||(r[0]=o=>s.$emit("onChange",o))},null,40,yP)]))}}),MP={class:"opacity-bar"},SP=["value"],EP=Mt({__name:"OpacityBar",props:{modelValue:{default:0,type:Number}},emits:["update:modelValue","onInput"],setup(n,{emit:e}){const t=Ui("opacitySlider"),i=e,s=u(r=>{i("update:modelValue",parseInt(r.target.value)),i("onInput",r)},"s");return(r,o)=>(he(),Ee("div",MP,[U("input",{ref_key:"opacitySlider",ref:t,value:n.modelValue,class:"opacity_slider",type:"range",min:"0",max:"100",onInput:s},null,40,SP)]))}}),TP={class:"ck-cp-input-content"},wP={class:"ck-cp-input-label"},AP=["min","max","value"],Mn=Mt({__name:"InputNumber",props:{label:{default:"",type:String},modelValue:{default:0,type:Number},min:{default:0,type:Number},max:{default:100,type:Number}},emits:["update:modelValue"],setup(n,{emit:e}){const t=n,i=e,s=Pt(t.modelValue);zr(()=>t.modelValue,(c,h)=>{c!==h&&(s.value=c)},{immediate:!0});const r=u(c=>{const h=u(f=>{s.value=f,i("update:modelValue",f)},"p"),d=c.target.value;if(!d)return h(t.modelValue);if(parseInt(d)>t.max)return h(t.max);i("update:modelValue",parseInt(d))},"i"),o=u(c=>{s.value=c.target.value},"m"),a=u(c=>{if(["KeyE","Equal","Equal","Backslash","Slash","NumpadDecimal","NumpadAdd"].includes(c.code))return c.preventDefault();c.code==="Enter"&&r(c)},"b"),l=r;return(c,h)=>(he(),Ee("div",TP,[U("span",wP,xt(n.label),1),U("input",{type:"number",min:n.min,max:n.max,value:s.value,onInput:o,onKeydown:a,onFocusout:h[0]||(h[0]=(...d)=>zo(l)&&zo(l)(...d))},null,40,AP)]))}}),CP={class:"ck-cp-input-content color-hex"},RP=U("span",{class:"ck-cp-input-label"},"HEX",-1),PP=["value"],DP=Mt({__name:"InputHex",props:{modelValue:{}},emits:["update:modelValue"],setup(n,{emit:e}){const t=n,i=e,s=Pt(""),r=u(c=>{const h=c.target.value;s.value=h,s.value=`#${h.replace(/#/g,"")}`},"i"),o=u(c=>{const h=c.target.value;if(h===t.modelValue)return;if(!/^#[0-9a-fA-F]+$/.test(h)){s.value=t.modelValue;return}let d=h.replace(/#/g,"");switch(d.length){case 0:d=t.modelValue.replace("#","");break;case 1:case 2:d=d.repeat(3);break;case 4:case 5:d=d.slice(0,3);break;case 3:case 6:break;default:d=d.slice(0,6)}s.value=`#${d.toUpperCase()}`,i("update:modelValue",s.value)},"m"),a=u(c=>{c.code==="Enter"&&o(c)},"b"),l=o;return zr(()=>t.modelValue,(c,h)=>{c!==h&&(s.value=c)},{immediate:!0}),(c,h)=>(he(),Ee("div",CP,[RP,U("input",{type:"text",value:s.value,onInput:r,onKeydown:a,onFocusout:h[0]||(h[0]=(...d)=>zo(l)&&zo(l)(...d))},null,40,PP)]))}}),IP=u(n=>{const e=/^rgb\((\s*\d+\s*),(\s*\d+\s*),(\s*\d+\s*)\)$/i;if(!e.test(n))return null;const t=e.exec(n);if(!t)return null;const i=parseInt(t[1].trim(),10),s=parseInt(t[2].trim(),10),r=parseInt(t[3].trim(),10);return{r:i,g:s,b:r}},"Jt$1"),LP=u(n=>{const e=/^rgba?\((\s*\d+\s*),(\s*\d+\s*),(\s*\d+\s*),(\s*[\d.]+\s*)\)$/i;if(!e.test(n))return null;const t=e.exec(n);if(!t)return null;const i=parseInt(t[1].trim(),10),s=parseInt(t[2].trim(),10),r=parseInt(t[3].trim(),10),o=parseFloat(t[4].trim());return{r:i,g:s,b:r,a:o}},"Qt$1"),NP=u(n=>{const e=/^#?([a-f\d]{8})$/i;if(!e.test(n))return null;const t=e.exec(n);if(!t)return null;const i=t[1],s=i.substring(6,8),r=parseInt(i.substring(0,2),16),o=parseInt(i.substring(2,4),16),a=parseInt(i.substring(4,6),16),l=parseInt(s,16)/255;return{r,g:o,b:a,a:l}},"_t"),OP=u((n,e,t,i)=>{function s(c){const h=c.toString(16);return h.length===1?"0"+h:h}u(s,"s");const r=s(Math.round(n)),o=s(Math.round(e)),a=s(Math.round(t)),l=s(Math.round(i*255));return`#${r}${o}${a}${l}`},"el"),sl=u(n=>{var e;try{let t=(e=n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(o,a,l,c)=>"#"+a+a+l+l+c+c).substring(1).match(/.{2}/g))==null?void 0:e.map(o=>parseInt(o,16)),i=t==null?void 0:t[0],s=t==null?void 0:t[1],r=t==null?void 0:t[2];return Number.isNaN(i)||Number.isNaN(s)||Number.isNaN(r)||i===void 0||s===void 0||r===void 0?null:{r:i,g:s,b:r}}catch{return null}},"ve$1"),Rr=u((n,e,t)=>{n=n/255,e=e/255,t=t/255;const i=Math.max(n,e,t),s=Math.min(n,e,t);let r;return i===n?r=(e-t)/(i-s):i===e?r=2+(t-n)/(i-s):r=4+(n-e)/(i-s),r*=60,r<0&&(r+=360),Number.isNaN(r)&&(r=0),r},"_"),UP=u((n,e,t)=>{e=e/100,t=t/100;let i,s,r,o=[];return i=(1-Math.abs(2*t-1))*e,s=i*(1-Math.abs(n/60%2-1)),r=t-i/2,n>=0&&n<60&&(o=[i,s,0]),n>=60&&n<120&&(o=[s,i,0]),n>=120&&n<180&&(o=[0,i,s]),n>=180&&n<240&&(o=[0,s,i]),n>=240&&n<300&&(o=[s,0,i]),n>=300&&n<=360&&(o=[i,0,s]),o.map(a=>Math.round(255*(a+r)))},"tl"),Sf=u((n,e,t)=>"#"+(16777216+(t|e<<8|n<<16)).toString(16).slice(1),"xe$1"),Dv=u((n,e,t)=>{let i=UP(n,e,t);return{rgb:i,hexA:Sf(i[0],i[1],i[2])}},"Oe$1"),Iv=u((n,e,t)=>{let i,s,r,o,a,l,c=0,h=[];for(h[0]=n/255,h[1]=e/255,h[2]=t/255,i=h[0],s=h[0],l=0,r=0;r<h.length-1;r++)h[r+1]<=i&&(i=h[r+1]),h[r+1]>=s&&(s=h[r+1],l=r+1);return l===0&&(c=(h[1]-h[2])/(s-i)),l===1&&(c=2+(h[2]-h[0])/(s-i)),l===2&&(c=4+(h[0]-h[1])/(s-i)),isNaN(c)&&(c=0),c=c*60,c<0&&(c=c+360),o=(i+s)/2,i===s?a=0:o<.5?a=(s-i)/(s+i):a=(s-i)/(2-s-i),a=a,{h:c,s:a,l:o}},"Xe"),Lv=u((n,e,t)=>{n=n%360/360,e=Math.min(1,Math.max(0,e)),t=Math.min(1,Math.max(0,t));let i,s,r;if(e===0)i=s=r=t;else{const o=u((c,h,d)=>(d<0&&(d+=1),d>1&&(d-=1),d<.16666666666666666?c+(h-c)*6*d:d<.5?h:d<.6666666666666666?c+(h-c)*(.6666666666666666-d)*6:c),"m"),a=t<.5?t*(1+e):t+e-t*e,l=2*t-a;i=o(l,a,n+1/3),s=o(l,a,n),r=o(l,a,n-1/3)}return i=Math.round(i*255),s=Math.round(s*255),r=Math.round(r*255),{r:i,g:s,b:r}},"Ue$1"),FP=u((n,e,t)=>{let i=0,s=0,r=0;const o=n/60,a=t*e,l=a*(1-Math.abs(o%2-1)),c=t-a;switch(Math.floor(o)%6){case 0:i=a,s=l,r=0;break;case 1:i=l,s=a,r=0;break;case 2:i=0,s=a,r=l;break;case 3:i=0,s=l,r=a;break;case 4:i=l,s=0,r=a;break;case 5:i=a,s=0,r=l;break}return{r:Math.round((i+c)*255),g:Math.round((s+c)*255),b:Math.round((r+c)*255)}},"ll"),BP=u((n,e,t)=>{n/=255,e/=255,t/=255;const i=Math.max(n,e,t),s=Math.min(n,e,t);let r,o,a=i;const l=i-s;if(i!==0)o=l/i;else return{h:0,s:0,v:0};return l===0?r=0:i===n?r=60*((e-t)/l%6):i===e?r=60*((t-n)/l+2):r=60*((n-e)/l+4),r<0&&(r+=360),{h:Math.round(r),s:Math.round(o*100)/100,v:Math.round(a*100)/100}},"nl"),kP=u((n,e,t)=>{const i=(2-e)*t/2,s=i&&i<1?e*t/(i<.5?i*2:2-i*2):e;return{h:n,s,l:i}},"al"),zP=u((n,e,t,i)=>{const s=Math.round(255*(1-n)*(1-i)),r=Math.round(255*(1-e)*(1-i)),o=Math.round(255*(1-t)*(1-i));return{r:Math.min(255,Math.max(0,s)),g:Math.min(255,Math.max(0,r)),b:Math.min(255,Math.max(0,o))}},"ol"),VP=u((n,e,t)=>{n=n/255,e=e/255,t=t/255;const i=1-Math.max(n,e,t),s=(1-n-i)/(1-i),r=(1-e-i)/(1-i),o=(1-t-i)/(1-i);return{c:isNaN(s)?0:s,m:isNaN(r)?0:r,y:isNaN(o)?0:o,k:isNaN(i)?0:i}},"sl"),HP={class:"ck-cp-local-color-conatiner"},GP={class:"ck-cp-color-list-label"},WP={style:{display:"flex","align-items":"center"}},$P={key:1,width:"32",height:"14",viewBox:"5 -5 32 32",xmlns:"http://www.w3.org/2000/svg"},jP=U("path",{d:"M11.9995 16.8001C11.2995 16.8001 10.5995 16.5301 10.0695 16.0001L3.54953 9.48014C3.25953 9.19014 3.25953 8.71014 3.54953 8.42014C3.83953 8.13014 4.31953 8.13014 4.60953 8.42014L11.1295 14.9401C11.6095 15.4201 12.3895 15.4201 12.8695 14.9401L19.3895 8.42014C19.6795 8.13014 20.1595 8.13014 20.4495 8.42014C20.7395 8.71014 20.7395 9.19014 20.4495 9.48014L13.9295 16.0001C13.3995 16.5301 12.6995 16.8001 11.9995 16.8001Z"},null,-1),XP=[jP],YP={key:1,width:"18",height:"18",viewBox:"-2 -2 30 30",xmlns:"http://www.w3.org/2000/svg"},qP=da('<path d="M20.9997 6.72998C20.9797 6.72998 20.9497 6.72998 20.9197 6.72998C15.6297 6.19998 10.3497 5.99998 5.11967 6.52998L3.07967 6.72998C2.65967 6.76998 2.28967 6.46998 2.24967 6.04998C2.20967 5.62998 2.50967 5.26998 2.91967 5.22998L4.95967 5.02998C10.2797 4.48998 15.6697 4.69998 21.0697 5.22998C21.4797 5.26998 21.7797 5.63998 21.7397 6.04998C21.7097 6.43998 21.3797 6.72998 20.9997 6.72998Z"></path><path d="M8.50074 5.72C8.46074 5.72 8.42074 5.72 8.37074 5.71C7.97074 5.64 7.69074 5.25 7.76074 4.85L7.98074 3.54C8.14074 2.58 8.36074 1.25 10.6907 1.25H13.3107C15.6507 1.25 15.8707 2.63 16.0207 3.55L16.2407 4.85C16.3107 5.26 16.0307 5.65 15.6307 5.71C15.2207 5.78 14.8307 5.5 14.7707 5.1L14.5507 3.8C14.4107 2.93 14.3807 2.76 13.3207 2.76H10.7007C9.64074 2.76 9.62074 2.9 9.47074 3.79L9.24074 5.09C9.18074 5.46 8.86074 5.72 8.50074 5.72Z"></path><path d="M15.2104 22.7501H8.79039C5.30039 22.7501 5.16039 20.8201 5.05039 19.2601L4.40039 9.19007C4.37039 8.78007 4.69039 8.42008 5.10039 8.39008C5.52039 8.37008 5.87039 8.68008 5.90039 9.09008L6.55039 19.1601C6.66039 20.6801 6.70039 21.2501 8.79039 21.2501H15.2104C17.3104 21.2501 17.3504 20.6801 17.4504 19.1601L18.1004 9.09008C18.1304 8.68008 18.4904 8.37008 18.9004 8.39008C19.3104 8.42008 19.6304 8.77007 19.6004 9.19007L18.9504 19.2601C18.8404 20.8201 18.7004 22.7501 15.2104 22.7501Z"></path><path d="M13.6601 17.25H10.3301C9.92008 17.25 9.58008 16.91 9.58008 16.5C9.58008 16.09 9.92008 15.75 10.3301 15.75H13.6601C14.0701 15.75 14.4101 16.09 14.4101 16.5C14.4101 16.91 14.0701 17.25 13.6601 17.25Z"></path><path d="M14.5 13.25H9.5C9.09 13.25 8.75 12.91 8.75 12.5C8.75 12.09 9.09 11.75 9.5 11.75H14.5C14.91 11.75 15.25 12.09 15.25 12.5C15.25 12.91 14.91 13.25 14.5 13.25Z"></path>',5),KP=[qP],ZP={class:"ck-cp-color-list"},JP=["onClick"],QP={key:1,width:"25",height:"25",viewBox:"2 2 20 20",xmlns:"http://www.w3.org/2000/svg"},eD=U("path",{d:"M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z"},null,-1),tD=U("path",{d:"M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z"},null,-1),nD=[eD,tD],iD=Mt({__name:"HistoryColorList",props:{colorListCount:{default:10,type:Number},hexVal:{default:"",type:String},title:{default:"",type:String},iconClasses:{default:{ruler:"",eyeDroper:"",arrowDown:"",save:"",delete:""},type:Object}},emits:["color-item-click"],setup(n,{emit:e}){const t=n,i=e,s=Pt([]),r=Z_(()=>s.value.some(c=>c.selected==!0)),o=u(()=>{if(!s.value.find(c=>c.color===t.hexVal)){const c=s.value.find(h=>h.selected==!0);if(c)c.color=t.hexVal;else{s.value.length===t.colorListCount&&s.value.pop();let h=t.hexVal;s.value.unshift({color:h,selected:!1})}localStorage.setItem("ck-cp-local-color-list",JSON.stringify(s.value.map(h=>h.color)))}},"m"),a=u(()=>{s.value=s.value.filter(c=>c.selected==!1),localStorage.setItem("ck-cp-local-color-list",JSON.stringify(s.value.map(c=>c.color)))},"b"),l=u(c=>{s.value.forEach(h=>{h.color===c?h.selected=!h.selected:h.selected=!1}),i("color-item-click",c)},"C");return I_(()=>{let c=localStorage.getItem("ck-cp-local-color-list");if(c){let h=JSON.parse(c);s.value=h.map(d=>({color:d,selected:!1}))}}),(c,h)=>(he(),Ee("div",HP,[U("div",GP,[U("div",WP,[An(xt(n.title?n.title:"Color Palette")+" ",1),n.iconClasses.arrowDown?(he(),Ee("i",{key:0,class:lt(n.iconClasses.arrowDown)},null,2)):(he(),Ee("svg",$P,XP))]),r.value?(he(),Ee("button",{key:0,type:"button",class:"cp-main-btn",onClick:a,style:{width:"17.33px",height:"17.33px"}},[n.iconClasses.delete?(he(),Ee("i",{key:0,class:lt(n.iconClasses.delete)},null,2)):(he(),Ee("svg",YP,KP))])):Ve("",!0)]),U("div",ZP,[(he(!0),Ee(Lt,null,Go(s.value,d=>(he(),Ee("div",{key:`color-${d.color}`,class:lt(["ck-cp-color-item",d.selected?"ck-select":""]),style:zt({backgroundColor:d.color}),onClick:f=>l(d.color)},null,14,JP))),128)),U("button",{type:"button",class:"cp-btn-save-color",onClick:o},[n.iconClasses.save?(he(),Ee("i",{key:0,class:lt(n.iconClasses.save)},null,2)):(he(),Ee("svg",QP,nD))])])]))}}),sD=["cp-theme"],rD={key:0,style:{display:"flex","align-items":"center",gap:"8px","margin-top":"calc(var(--margin-top) * 1.35)",padding:"var(--padding)"}},oD={key:1,width:"20",height:"20",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},aD=da('<path d="M20.9997 6.72998C20.9797 6.72998 20.9497 6.72998 20.9197 6.72998C15.6297 6.19998 10.3497 5.99998 5.11967 6.52998L3.07967 6.72998C2.65967 6.76998 2.28967 6.46998 2.24967 6.04998C2.20967 5.62998 2.50967 5.26998 2.91967 5.22998L4.95967 5.02998C10.2797 4.48998 15.6697 4.69998 21.0697 5.22998C21.4797 5.26998 21.7797 5.63998 21.7397 6.04998C21.7097 6.43998 21.3797 6.72998 20.9997 6.72998Z"></path><path d="M8.50074 5.72C8.46074 5.72 8.42074 5.72 8.37074 5.71C7.97074 5.64 7.69074 5.25 7.76074 4.85L7.98074 3.54C8.14074 2.58 8.36074 1.25 10.6907 1.25H13.3107C15.6507 1.25 15.8707 2.63 16.0207 3.55L16.2407 4.85C16.3107 5.26 16.0307 5.65 15.6307 5.71C15.2207 5.78 14.8307 5.5 14.7707 5.1L14.5507 3.8C14.4107 2.93 14.3807 2.76 13.3207 2.76H10.7007C9.64074 2.76 9.62074 2.9 9.47074 3.79L9.24074 5.09C9.18074 5.46 8.86074 5.72 8.50074 5.72Z"></path><path d="M15.2104 22.7501H8.79039C5.30039 22.7501 5.16039 20.8201 5.05039 19.2601L4.40039 9.19007C4.37039 8.78007 4.69039 8.42008 5.10039 8.39008C5.52039 8.37008 5.87039 8.68008 5.90039 9.09008L6.55039 19.1601C6.66039 20.6801 6.70039 21.2501 8.79039 21.2501H15.2104C17.3104 21.2501 17.3504 20.6801 17.4504 19.1601L18.1004 9.09008C18.1304 8.68008 18.4904 8.37008 18.9004 8.39008C19.3104 8.42008 19.6304 8.77007 19.6004 9.19007L18.9504 19.2601C18.8404 20.8201 18.7004 22.7501 15.2104 22.7501Z"></path><path d="M13.6601 17.25H10.3301C9.92008 17.25 9.58008 16.91 9.58008 16.5C9.58008 16.09 9.92008 15.75 10.3301 15.75H13.6601C14.0701 15.75 14.4101 16.09 14.4101 16.5C14.4101 16.91 14.0701 17.25 13.6601 17.25Z"></path><path d="M14.5 13.25H9.5C9.09 13.25 8.75 12.91 8.75 12.5C8.75 12.09 9.09 11.75 9.5 11.75H14.5C14.91 11.75 15.25 12.09 15.25 12.5C15.25 12.91 14.91 13.25 14.5 13.25Z"></path>',5),lD=[aD],cD={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"calc(var(--margin-top) * 1.35)",padding:"var(--padding)"}},uD=U("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"3 2 28 28"},[U("path",{d:"M27.014 2.891l-0.058-0.058c-1.106-1.11-2.911-1.11-4.022 0l-2.515 2.515-0.072-0.072c-0.603-0.603-1.584-0.603-2.216 0.024-0.599 0.603-0.599 1.584 0 2.187l0.072 0.072-8.034 8.039c-1.135 1.13-1.878 2.617-2.1 4.2l-1.217 1.453c-0.483 0.483-0.483 1.265 0 1.743 0.241 0.246 0.565 0.367 0.883 0.367 0.304 0 0.608-0.111 0.826-0.338l1.487-1.241c1.584-0.227 3.071-0.97 4.205-2.1l8.034-8.039 0.072 0.072c0.299 0.299 0.69 0.449 1.086 0.449 0.401 0 0.811-0.159 1.13-0.478 0.29-0.29 0.449-0.676 0.449-1.091s-0.159-0.801-0.449-1.096l-0.072-0.068 2.515-2.515c1.106-1.11 1.106-2.916-0.005-4.027zM13.568 18.997c-1.014 1.014-2.356 1.671-3.78 1.844-0.092 0.014-0.179 0.048-0.251 0.111l-1.622 1.361c-0.106 0.106-0.275 0.106-0.381 0-0.101-0.106-0.101-0.275 0.029-0.41l1.337-1.593c0.058-0.072 0.097-0.159 0.106-0.251 0.174-1.424 0.83-2.766 1.844-3.78l8.039-8.034 2.718 2.718-8.039 8.034z"}),U("path",{d:"M5.804 24.979c-0.275 0.328-1.651 2.023-1.651 2.998 0 1.115 0.908 2.023 2.018 2.023 1.115 0 2.023-0.908 2.023-2.023 0-0.975-1.376-2.67-1.651-2.998-0.183-0.222-0.555-0.222-0.739 0z"})],-1),hD={style:{"flex-grow":"1",display:"flex","flex-direction":"column",gap:"calc(var(--margin-top) * 1.85)"}},dD={id:"ck-cp-target-background"},fD={key:1,class:"ck-cp-input-container"},pD={key:3,class:"ck-cp-buttons"},mD=Mt({__name:"Vue3ColorPicker",props:{modelValue:{default:"",type:String},mode:{default:"gradient",type:String},type:{default:"HEX8",type:String},inputType:{default:"RGB",type:String},theme:{default:"light",type:String},colorListCount:{default:15,type:Number},showColorList:{default:!0,type:Boolean},showEyeDrop:{default:!0,type:Boolean},showPickerMode:{default:!0,type:Boolean},showAlpha:{default:!0,type:Boolean},showInputMenu:{default:!0,type:Boolean},showInputSet:{default:!0,type:Boolean},disabled:{default:!1,type:Boolean},gradientMode:{default:"linear",type:String},local:{default:{angle:"",positionX:"",positionY:"",solid:"",gradient:"",linear:"",radial:"",colorPalette:"",btnSaveLabel:"Save",btnCancelLabel:"Cancel"},type:Object},iconClasses:{default:{linear:"",radial:"",ruler:"",eyeDroper:"",inputMenu:"",save:"",delete:""},type:Object},showButtons:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(n,{emit:e}){const t=n,i=Pt(null),s=e,r=Pt(t.mode),o=Pt(t.modelValue),a=Pt(t.modelValue),l=u(F=>{o.value=F,t.showButtons||(a.value=F,s("update:modelValue",F))},"C"),c=Pt([{id:1,r:68,g:71,b:119,a:100,percent:0,hue:0,select:!0},{id:2,r:0,g:0,b:255,a:100,percent:100,hue:0,select:!1}]),h=Pt(!1),d=Pt(t.gradientMode),f=ls({angle:90,percentageX:50,percentageY:50}),p=Pt(""),v=Pt(t.inputType),_=Pt(!1),g=Pt(),m=Pt(),A=Pt(),S=Pt(),w=Pt(),B=ls({h:0,s:0,l:0}),P=ls({h:0,s:0,v:0}),R=ls({c:0,m:0,y:0,k:0});Dr("gradientBar",m),Dr("canvas",A),Dr("pickerWrap",S),Dr("pickerPointer",w),Dr("opacitySlider",g);let O=0,re=0,b=0,T=0,z=0,$=0;const ie=u(F=>{!S.value||!w.value||(z=S.value.offsetHeight-w.value.offsetHeight,$=S.value.offsetWidth-w.value.offsetWidth,b=F.clientX-F.target.getBoundingClientRect().left,T=F.clientY-F.target.getBoundingClientRect().top,O=b-w.value.offsetWidth/2,re=T-w.value.offsetHeight/2,w.value.style.left=`${O}px`,w.value.style.top=`${re}px`,se(!1),ge(),window.addEventListener("mousemove",ce),window.addEventListener("mouseup",Z))},"Ae"),ce=u(F=>{F.preventDefault();const M=S.value.getBoundingClientRect(),L=F.clientX-M.left-w.value.offsetWidth/2,N=F.clientY-M.top-w.value.offsetHeight/2;L>=0&&L<=$?(O=L,w.value.style.left=`${L}px`):0>L?(O=0,w.value.style.left="0px"):L>$&&(O=$,w.value.style.left=`${$}px`),N>=0&&N<=z?(re=N,w.value.style.top=`${N}px`):0>N?(re=0,w.value.style.top="0px"):N>z&&(re=z,w.value.style.top=`${z}px`),se(!1),ge()},"Se"),Z=u(()=>{window.removeEventListener("mousemove",ce),window.removeEventListener("mouseup",Z)},"Ne"),se=u(F=>{if(!F){let M=we();const L=Lv(X.value,M.s,M.l);if(L){if(_.value){let N=c.value.find(V=>V.select==!0);N&&(N.r=L.r,N.g=L.g,N.b=L.b)}q(),oe()}}},"be"),X=Pt(0),Te=u(async F=>{const{rgb:M}=Dv(X.value,100,50);ne(M),setTimeout(()=>{se(F),ge()},0)},"ye"),we=u(()=>{let F={s:0,l:0},M=S.value.offsetWidth-w.value.offsetWidth,L=S.value.offsetHeight-w.value.offsetHeight,N=parseInt(w.value.style.left),V=1-parseInt(w.value.style.top)/L,ee=N/M;return F.l=V/2*(2-ee),F.s=V*ee/(1-Math.abs(2*F.l-1)),Number.isNaN(F.s)&&(F.s=F.l),F.l=F.l>1?1:F.l,F.s=F.s>1?1:F.s,F},"We"),Ae=u(()=>{const F=c.value.find(M=>M.select==!0);if(F){const{l:M,s:L}=Iv(F.r,F.g,F.b);let N=M,V=L;Number.isNaN(V)&&(V=N);let ee={x:0,y:0},de=S.value.offsetWidth-w.value.offsetWidth,Ce=S.value.offsetHeight-w.value.offsetHeight;const[Le,Ne]=2*N-1<0?[de*2*V/(1+V),Ce*(1-N*(1+V))]:[-de*2*(N-1)*V/(N+V-N*V),Ce*(N-1)*(V-1)];return ee.x=Le,ee.y=Ne,ee}else return null},"oe"),Ye=u(()=>{const F=c.value.find(M=>M.select==!0);F&&(F.hue=X.value)},"Fe"),Qe=Pt(100),le=u(F=>{if(t.showAlpha){const M=F.target,L=c.value.find(N=>N.select==!0);L&&(L.a=parseInt(M.value),oe())}},"Ze"),ve=u(F=>{var M,L,N,V;const ee=(L=(M=i.value)==null?void 0:M.querySelector(".gradient-handle-content"))==null?void 0:L.getBoundingClientRect();return F===0?"0px":F===100&&ee?`${(((N=m.value)==null?void 0:N.offsetWidth)||0)-(ee.width||0)}px`:`${(((V=m.value)==null?void 0:V.offsetWidth)||0)*(F/100)-((ee==null?void 0:ee.width)||0)/2}px`},"qe");let ye=null,Me=null;const je=u(F=>{var M,L;const N=F.target.offsetParent;if((M=N==null?void 0:N.id)!=null&&M.includes("clr-gb-")){const V=N.id.replace("clr-gb-","");Me=N;const ee=c.value.find(de=>de.select==!0);if(ee&&ee.id!=V){const de=(L=i.value)==null?void 0:L.querySelector(".gradient-handle.select");de==null||de.classList.remove("select"),N.classList.add("select");const Ce=c.value.findIndex(Le=>Le.select==!0);for(let Le=0;Le<c.value.length;Le++){const Ne=c.value[Le];if(Ne.id==V){Ce!=-1&&(c.value[Ce].select=!1),c.value[Le].select=!0,Qe.value=Ne.a,x(Ne.r,Ne.g,Ne.b,Ne.hue,!0),q(),ge();break}}}window.addEventListener("mousemove",et),window.addEventListener("mouseup",$e)}},"He"),$e=u(()=>{window.removeEventListener("mousemove",et),window.removeEventListener("mouseup",je)},"Ke"),et=u(F=>{var M,L;F.preventDefault();const N=(L=(M=i.value)==null?void 0:M.querySelector(".gradient-handle-content"))==null?void 0:L.getBoundingClientRect(),V=ye==null?void 0:ye.getBoundingClientRect(),ee=(V==null?void 0:V.width)-(N==null?void 0:N.width);let de=F.clientX-((V==null?void 0:V.left)||0)-((N==null?void 0:N.width)||0)/2;if(de<0?de=0:de>ee&&(de=ee),Me){Me.style.left=`${de}px`;const Ce=parseFloat((de/((V==null?void 0:V.width)-(N==null?void 0:N.width))*100).toFixed(0)),Le=c.value.find(Ne=>Ne.id==(Me==null?void 0:Me.id.replace("clr-gb-","")));Le&&(Le.percent=Ce),oe()}},"Be"),ut=u(F=>{var M,L;const N=ye==null?void 0:ye.getBoundingClientRect(),V=Math.round((F.clientX-((N==null?void 0:N.left)||0))/((N==null?void 0:N.width)||1)*100),ee=c.value.findIndex(Ne=>Ne.select==!0),de=c.value[ee],Ce={id:Date.now(),r:de.r,g:de.g,b:de.b,a:de.a,percent:V,hue:de.hue,select:!0};c.value[ee].select=!1;const Le=(M=i.value)==null?void 0:M.querySelector(".gradient-handle.select");Le==null||Le.classList.remove("select"),c.value=[...c.value,Ce],Y(Ce),Me=(L=i.value)==null?void 0:L.querySelector(`#clr-gb-${Ce.id}`),oe()},"ze"),rt=u(F=>{if(F.r==0&&F.g==0&&F.b==0||F.r==255&&F.g==255&&F.b==255)return!0;{const M=A.value.getContext("2d",{willReadFrequently:!0}),L=A.value.width,N=A.value.height,V=M.getImageData(0,0,L,N).data,ee=F.r,de=F.g,Ce=F.b;for(let Le=0;Le<N;Le++)for(let Ne=0;Ne<L;Ne++){const Ie=(Le*L+Ne)*4,Rt=V[Ie],Qn=V[Ie+1],pa=V[Ie+2];if(Rt===ee&&Qn===de&&pa===Ce)return!0}return!1}},"De"),x=u((F,M,L,N,V)=>{setTimeout(()=>{if(rt({r:F,g:M,b:L})){let ee=Ae();ee&&(w.value.style.left=`${ee.x}px`,w.value.style.top=`${ee.y}px`)}else{let ee=Ae();ee&&(w.value.style.left=`${ee.x}px`,w.value.style.top=`${ee.y}px`),X.value=N,Te(V)}},0)},"q"),k=u(()=>{c.value.forEach(L=>Y(L)),ae();const F=c.value[0];X.value=F.hue,Te(!0);let M=Ae();M&&(w.value.style.left=`${M.x}px`,w.value.style.top=`${M.y}px`),q(),oe()},"Te"),Y=u(F=>{if(r.value=="gradient"){let M=document.createElement("div");M.id=`clr-gb-${F.id}`,M.classList.add("gradient-handle"),M.style.left=ve(F.percent);let L=document.createElement("div");L.classList.add("gradient-handle-content"),F.select==!0&&M.classList.add("select"),M.appendChild(L),ye&&ye.appendChild(M)}},"Re"),ne=u(F=>{const M=A.value.getContext("2d",{willReadFrequently:!0}),L=A.value.width,N=A.value.height;M.fillStyle=`rgb(${F[0]},${F[1]},${F[2]})`,M.fillRect(0,0,L,N);let V=M.createLinearGradient(0,0,L-12,0);V.addColorStop(0,"rgb(255,255,255)"),V.addColorStop(1,"rgba(255,255,255,0)"),M.fillStyle=V,M.fillRect(0,0,L,N);let ee=M.createLinearGradient(0,0,0,N);ee.addColorStop(0,"rgba(0,0,0,0)"),ee.addColorStop(1,"rgb(0,0,0)"),M.fillStyle=ee,M.fillRect(0,0,L,N)},"Ee"),q=u(()=>{if(t.showAlpha){let F=c.value.find(M=>M.select==!0);F&&(g.value.style.background=` linear-gradient(90deg,rgba(255, 255, 255, 0) 0%, rgba(${F.r}, ${F.g}, ${F.b}, 100) 97%)`)}},"X"),oe=u(()=>{var F;if(r.value=="gradient"){c.value.sort((V,ee)=>V.percent-ee.percent);let M="linear-gradient(90deg, ",L;if(d.value=="linear"){L=`linear-gradient(${f.angle}deg, `;for(let V=0;V<c.value.length;V++){const{r:ee,g:de,b:Ce,a:Le,percent:Ne}=c.value[V];c.value.length-1==V?(M=M+`rgba(${ee},${de},${Ce},${Le/100}) ${Ne}%)`,L=L+`rgba(${ee},${de},${Ce},${Le/100}) ${Ne}%)`):(M=M+`rgba(${ee},${de},${Ce},${Le/100}) ${Ne}%, `,L=L+`rgba(${ee},${de},${Ce},${Le/100}) ${Ne}%, `)}}else{L=`radial-gradient(circle at ${f.percentageX}% ${f.percentageY}%, `;for(let V=0;V<c.value.length;V++){const{r:ee,g:de,b:Ce,a:Le,percent:Ne}=c.value[V];c.value.length-1==V?(M=M+`rgba(${ee},${de},${Ce},${Le/100}) ${Ne}%)`,L=L+`rgba(${ee},${de},${Ce},${Le/100}) ${Ne}%)`):(M=M+`rgba(${ee},${de},${Ce},${Le/100}) ${Ne}%, `,L=L+`rgba(${ee},${de},${Ce},${Le/100}) ${Ne}%, `)}}m.value.style.backgroundImage=M;let N=(F=i.value)==null?void 0:F.querySelector("#ck-cp-target-background");N&&(N.style.backgroundImage=L,_.value&&l(N.style.backgroundImage))}else{const{r:M,g:L,b:N,a:V}=c.value[0];let ee="";switch(t.type){case"HEX8":ee=OP(M,L,N,V/100);break;case"RGBA":ee=`rgba(${M},${L},${N},${V/100})`;break;case"RGB":ee=`rgb(${M},${L},${N})`;break;case"HEX":ee=Sf(M,L,N);break}_.value&&l(ee)}},"R"),ae=u(()=>{c.value.forEach(F=>{F.hue=Rr(F.r,F.g,F.b)})},"je"),E=u(F=>{d.value=F,oe()},"Je"),y=u(()=>{var F,M;if(c.value.length>2){const L=c.value.findIndex(N=>N.select==!0);if(L!==-1){const N=c.value[L].id;c.value.splice(L,1);const V=(F=i.value)==null?void 0:F.querySelector(`#clr-gb-${N}`);V==null||V.remove();const ee=c.value[0];ee&&(ee.select=!0,Me=(M=i.value)==null?void 0:M.querySelector(`#clr-gb-${ee.id}`),Me==null||Me.classList.add("select"),x(ee.r,ee.g,ee.b,ee.hue,!1),ge(),oe())}}},"Pe"),I=u(()=>{var F;const M=(F=i.value)==null?void 0:F.querySelector("#cp-btn-eyedropper");M==null||M.classList.add("active"),new EyeDropper().open().then(L=>{const{sRGBHex:N}=L,V=c.value.find(de=>de.select==!0),ee=sl(N);if(ee){const de=Rr(ee.r,ee.g,ee.b);if(V&&(V.hue=de,V.r=ee.r,V.g=ee.g,V.b=ee.b),rt(ee)){const Ce=Ae();Ce&&(w.value.style.left=`${Ce.x}px`,w.value.style.top=`${Ce.y}px`)}else{X.value=de;const{rgb:Ce}=Dv(de,100,50);ne(Ce);const Le=Ae();Le&&(w.value.style.left=`${Le.x}px`,w.value.style.top=`${Le.y}px`)}ge(),q(),oe(),M==null||M.classList.remove("active")}}).catch(()=>{M==null||M.classList.remove("active")})},"Ce"),H=u((F,M)=>{if(M!="a"){const L=c.value.find(N=>N.select==!0);if(L){const N=Rr(L.r,L.g,L.b);L.hue=N,x(L.r,L.g,L.b,L.hue,!0),oe(),q()}}else Qe.value=F,oe(),q()},"de"),J=u(()=>{const F=c.value.find(M=>M.select==!0);if(F&&!Number.isNaN(B.h)&&!Number.isNaN(B.s)&&!Number.isNaN(B.l)){const{r:M,g:L,b:N}=Lv(B.h,B.s/100,B.l/100);F.hue=B.h,F.r=M,F.g=L,F.b=N,x(F.r,F.g,F.b,F.hue,!0),oe(),q()}},"ke"),j=u(()=>{const F=c.value.find(M=>M.select==!0);if(F&&!Number.isNaN(P.h)&&!Number.isNaN(P.s)&&!Number.isNaN(P.v)){const{r:M,g:L,b:N}=FP(P.h,P.s/100,P.v/100),{h:V}=kP(P.h,P.s/100,P.v/100);F.hue=V,F.r=M,F.g=L,F.b=N,x(F.r,F.g,F.b,F.hue,!0),oe(),q()}},"we"),pe=u(()=>{const F=c.value.find(M=>M.select==!0);if(F&&!Number.isNaN(R.c)&&!Number.isNaN(R.m)&&!Number.isNaN(R.y)&&!Number.isNaN(R.k)){const{r:M,g:L,b:N}=zP(R.c/100,R.m/100,R.y/100,R.k/100),V=Rr(M,L,N);F.hue=V,F.r=M,F.g=L,F.b=N,x(F.r,F.g,F.b,F.hue,!0),oe(),q()}},"pe"),fe=u(()=>{if(p.value){const F=sl(p.value);if(F){const M=Rr(F.r,F.g,F.b),L=c.value.find(N=>N.select==!0);L&&(L.r=F.r,L.g=F.g,L.b=F.b,L.hue=M,x(F.r,F.g,F.b,L.hue,!0),oe(),q(),be(v.value))}}},"Qe"),ge=u(()=>{const F=c.value.find(M=>M.select==!0);F&&(p.value=Sf(F.r,F.g,F.b).toUpperCase()),be(v.value)},"Q"),Fe=u(F=>{p.value=F;let M=sl(p.value);if(M){const L=Rr(M.r,M.g,M.b),N=c.value.find(V=>V.select==!0);N&&(N.r=M.r,N.g=M.g,N.b=M.b,N.hue=L,x(M.r,M.g,M.b,N.hue,!0),oe(),q())}},"_e");window.EyeDropper&&(h.value=!0);const me=u((F="")=>{if(r.value=="gradient"){let M=F?F.includes("linear-gradient")?"linear":"radial":t.gradientMode,L=[];if(d.value=M,M=="linear"){let N=/^linear-gradient\((.*)\)$/,V=F.replace(";","").trim().match(N),ee=/,\s*(?![^()]*\))/;if(V){let de=V[1].split(ee);for(let Ce=0;Ce<de.length;Ce++){const Le=de[Ce];let Ne={id:Ce,r:0,g:0,b:0,a:100,percent:100,hue:0,select:!1};if(Le.includes("deg"))f.angle=parseInt(Le.replace("deg",""));else if(Le.includes("rgba")){let Ie=Le.trim().replace(/rgba|\(|\)|%/g,"").replace(/,/g," ").split(" ");Ie=Ie.filter(Rt=>Rt.trim()!==""),Ne.r=parseInt(Ie[0]),Ne.g=parseInt(Ie[1]),Ne.b=parseInt(Ie[2]),Ne.a=parseFloat(Ie[3])*100,Ne.percent=parseInt(Ie[4]),L.push(Ne)}else if(Le.includes("rgb")){let Ie=Le.trim().replace(/rgb|\(|\)|%/g,"").replace(/,/g," ").split(" ");Ie=Ie.filter(Rt=>Rt.trim()!==""),Ne.r=parseInt(Ie[0]),Ne.g=parseInt(Ie[1]),Ne.b=parseInt(Ie[2]),Ne.percent=parseInt(Ie[3]),L.push(Ne)}}}}else{let N=/^radial-gradient\((.*)\)$/,V=F.replace(";","").trim().match(N),ee=/,\s*(?![^()]*\))/;if(V){let de=V[1].split(ee);for(let Ce=0;Ce<de.length;Ce++){const Le=de[Ce];let Ne={id:Ce,r:0,g:0,b:0,a:100,percent:100,hue:0,select:!1};if(Le.includes("circle at")){let Ie=Le.replace("circle at ","").replace(" ","").replace(/%/g," ").trim().split(" ");f.percentageX=parseInt(Ie[0]),f.percentageY=parseInt(Ie[1])}else if(Le.includes("rgba")){let Ie=Le.replace(/rgba|\(|\)|%/g,"").replace(/,/g," ").split(" ");Ie=Ie.filter(Rt=>Rt.trim()!==""),Ne.r=parseInt(Ie[0]),Ne.g=parseInt(Ie[1]),Ne.b=parseInt(Ie[2]),Ne.a=parseFloat(Ie[3])*100,Ne.percent=parseInt(Ie[4]),L.push(Ne)}else if(Le.includes("rgb")){let Ie=Le.replace(/rgb|\(|\)|%/g,"").replace(/,/g," ").split(" ");Ie=Ie.filter(Rt=>Rt.trim()!==""),Ne.r=parseInt(Ie[0]),Ne.g=parseInt(Ie[1]),Ne.b=parseInt(Ie[2]),Ne.percent=parseInt(Ie[3]),L.push(Ne)}}}}L.length>1&&(c.value=L,c.value[0].select=!0,Qe.value=c.value[0].a)}else if(F){let M={r:0,g:0,b:0,a:0};if(F.includes("#"))if(F.length>=8)M=NP(F);else{let L=sl(F);L?(M.a=1,M.r=L.r,M.g=L.g,M.b=L.b):M=null}else if(F.includes("rgb"))if(F.includes("rgba"))M=LP(F);else{let L=IP(F);L?(M.a=1,M.r=L.r,M.g=L.g,M.b=L.b):M=null}M&&(c.value[0].r=M.r,c.value[0].b=M.b,c.value[0].g=M.g,c.value[0].a=parseInt((M.a*100).toFixed(0)),Qe.value=c.value[0].a,c.value[0].hue=0)}},"et"),be=u(F=>{const M=c.value.find(L=>L.select==!0);if(M){switch(F){case"RGB":break;case"HSL":{const{h:L,s:N,l:V}=Iv(M.r,M.g,M.b);B.h=Math.round(L),B.s=Math.round(N*100),B.l=Math.round(V*100);break}case"HSV":{const{h:L,s:N,v:V}=BP(M.r,M.g,M.b);P.h=Math.round(L),P.s=Math.round(N*100),P.v=Math.round(V*100);break}case"CMYK":{const{c:L,m:N,y:V,k:ee}=VP(M.r,M.g,M.b);R.c=Math.round(L*100),R.m=Math.round(N*100),R.y=Math.round(V*100),R.k=Math.round(ee*100)}break}v.value=F}},"se"),Ge=u(F=>{r.value=F,setTimeout(()=>{var M;r.value=="gradient"&&(ye=(M=i.value)==null?void 0:M.querySelector(".gradient-bar")),We(t.modelValue),be(v.value)},0)},"tt"),We=u(F=>{F&&me(F),k()},"ge"),Re=u(()=>{a.value=o.value,s("update:modelValue",a.value)},"lt"),nt=u(()=>{c.value.forEach(F=>{const M=ye==null?void 0:ye.querySelector(`#clr-gb-${F.id}`);M==null||M.remove()})},"Ye"),ke=u(()=>{o.value=a.value,nt(),We(o.value)},"nt");return zr(()=>t.modelValue,(F,M)=>{F!==M&&F!==a.value&&(nt(),We(F))}),Ic(()=>{var F;r.value=="gradient"&&(ye=(F=i.value)==null?void 0:F.querySelector(".gradient-bar")),We(t.modelValue),be(v.value),_.value=!0}),(F,M)=>(he(),Ee("div",{class:lt(["ck-cp-container",n.disabled?"ck-cp-disabled ":""]),ref_key:"pickerTemplateRef",ref:i,"cp-theme":n.theme},[Ue(mP,{angle:f.angle,"onUpdate:angle":M[0]||(M[0]=L=>f.angle=L),percentageX:f.percentageX,"onUpdate:percentageX":M[1]||(M[1]=L=>f.percentageX=L),percentageY:f.percentageY,"onUpdate:percentageY":M[2]||(M[2]=L=>f.percentageY=L),local:n.local,iconClasses:n.iconClasses,inputType:v.value,mode:r.value,showInputMenu:n.showInputMenu,gradientType:d.value,showPickerMode:n.showPickerMode,onOnChangeMode:E,onOnInput:oe,onOnClickEyeDropper:I,onOnDeleteColor:y,onOnChangeInputType:be,onOnPickerChangeMode:Ge},null,8,["angle","percentageX","percentageY","local","iconClasses","inputType","mode","showInputMenu","gradientType","showPickerMode"]),Ue(_P,{onOnMouseDown:ie}),r.value=="gradient"?(he(),Ee("div",rD,[U("button",{type:"button",class:"cp-main-btn",onClick:y},[n.iconClasses.delete?(he(),Ee("i",{key:0,class:lt(n.iconClasses.delete)},null,2)):(he(),Ee("svg",oD,lD))]),Ue(gP,{onOnAddColor:ut,onOnMouseDown:je})])):Ve("",!0),U("div",cD,[h.value&&n.showEyeDrop?(he(),Ee("button",{key:0,type:"button",id:"cp-btn-eyedropper",class:"cp-main-btn",onClick:I},[n.iconClasses.eyeDroper?(he(),Ee("i",{key:0,class:lt(n.iconClasses.eyeDroper)},null,2)):Ve("",!0),uD])):Ve("",!0),U("div",hD,[Ue(bP,{modelValue:X.value,"onUpdate:modelValue":M[3]||(M[3]=L=>X.value=L),showEyeDrop:n.showEyeDrop,isEyeDropperUsing:h.value,onOnInput:M[4]||(M[4]=L=>Te(!1)),onOnChange:Ye,onOnClickEyeDropper:I},null,8,["modelValue","showEyeDrop","isEyeDropperUsing"]),n.showAlpha?(he(),ct(EP,{key:0,modelValue:Qe.value,"onUpdate:modelValue":M[5]||(M[5]=L=>Qe.value=L),onOnInput:le},null,8,["modelValue"])):Ve("",!0)])]),Gn(U("div",dD,null,512),[[Wn,!1]]),_.value&&n.showInputSet?(he(),Ee("div",fD,[v.value!=="CMYK"?(he(),ct(DP,{key:0,modelValue:p.value,"onUpdate:modelValue":[M[6]||(M[6]=L=>p.value=L),fe]},null,8,["modelValue"])):Ve("",!0),v.value=="RGB"?(he(),ct(Mn,{key:1,label:"R",min:0,max:255,modelValue:c.value.find(L=>L.select==!0).r,"onUpdate:modelValue":[M[7]||(M[7]=L=>c.value.find(N=>N.select==!0).r=L),M[8]||(M[8]=L=>H(L,"r"))]},null,8,["modelValue"])):Ve("",!0),v.value=="RGB"?(he(),ct(Mn,{key:2,label:"G",min:0,max:255,modelValue:c.value.find(L=>L.select==!0).g,"onUpdate:modelValue":[M[9]||(M[9]=L=>c.value.find(N=>N.select==!0).g=L),M[10]||(M[10]=L=>H(L,"g"))]},null,8,["modelValue"])):Ve("",!0),v.value=="RGB"?(he(),ct(Mn,{key:3,label:"B",min:0,max:255,modelValue:c.value.find(L=>L.select==!0).b,"onUpdate:modelValue":[M[11]||(M[11]=L=>c.value.find(N=>N.select==!0).b=L),M[12]||(M[12]=L=>H(L,"b"))]},null,8,["modelValue"])):Ve("",!0),v.value=="HSL"?(he(),ct(Mn,{key:4,label:"H",min:0,max:360,modelValue:B.h,"onUpdate:modelValue":[M[13]||(M[13]=L=>B.h=L),J]},null,8,["modelValue"])):Ve("",!0),v.value=="HSL"?(he(),ct(Mn,{key:5,label:"S",min:0,max:100,modelValue:B.s,"onUpdate:modelValue":[M[14]||(M[14]=L=>B.s=L),J]},null,8,["modelValue"])):Ve("",!0),v.value=="HSL"?(he(),ct(Mn,{key:6,label:"L",min:0,max:100,modelValue:B.l,"onUpdate:modelValue":[M[15]||(M[15]=L=>B.l=L),J]},null,8,["modelValue"])):Ve("",!0),v.value=="HSV"?(he(),ct(Mn,{key:7,label:"H",min:0,max:360,modelValue:P.h,"onUpdate:modelValue":[M[16]||(M[16]=L=>P.h=L),j]},null,8,["modelValue"])):Ve("",!0),v.value=="HSV"?(he(),ct(Mn,{key:8,label:"S",min:0,max:100,modelValue:P.s,"onUpdate:modelValue":[M[17]||(M[17]=L=>P.s=L),j]},null,8,["modelValue"])):Ve("",!0),v.value=="HSV"?(he(),ct(Mn,{key:9,label:"V",min:0,max:100,modelValue:P.v,"onUpdate:modelValue":[M[18]||(M[18]=L=>P.v=L),j]},null,8,["modelValue"])):Ve("",!0),v.value=="CMYK"?(he(),ct(Mn,{key:10,label:"C",min:0,max:100,modelValue:R.c,"onUpdate:modelValue":[M[19]||(M[19]=L=>R.c=L),pe]},null,8,["modelValue"])):Ve("",!0),v.value=="CMYK"?(he(),ct(Mn,{key:11,label:"M",min:0,max:100,modelValue:R.m,"onUpdate:modelValue":[M[20]||(M[20]=L=>R.m=L),pe]},null,8,["modelValue"])):Ve("",!0),v.value=="CMYK"?(he(),ct(Mn,{key:12,label:"Y",min:0,max:100,modelValue:R.y,"onUpdate:modelValue":[M[21]||(M[21]=L=>R.y=L),pe]},null,8,["modelValue"])):Ve("",!0),v.value=="CMYK"?(he(),ct(Mn,{key:13,label:"K",min:0,max:100,modelValue:R.k,"onUpdate:modelValue":[M[22]||(M[22]=L=>R.k=L),pe]},null,8,["modelValue"])):Ve("",!0),n.showAlpha?(he(),ct(Mn,{key:14,label:"A",min:0,max:100,style:{"margin-right":"2px"},modelValue:c.value.find(L=>L.select==!0).a,"onUpdate:modelValue":[M[23]||(M[23]=L=>c.value.find(N=>N.select==!0).a=L),M[24]||(M[24]=L=>H(L,"a"))]},null,8,["modelValue"])):Ve("",!0)])):Ve("",!0),n.showColorList?(he(),ct(iD,{key:2,"color-list-count":n.colorListCount,"hex-val":p.value,onColorItemClick:Fe,iconClasses:n.iconClasses,title:n.local.colorPalette},null,8,["color-list-count","hex-val","iconClasses","title"])):Ve("",!0),n.showButtons?(he(),Ee("div",pD,[U("button",{class:"ck-cp-buttons__button ck-cp-buttons__button--save",type:"button",onClick:Re},xt(n.local.btnSaveLabel),1),U("button",{class:"ck-cp-buttons__button ck-cp-buttons__button--cancel",type:"button",onClick:ke},xt(n.local.btnCancelLabel),1)])):Ve("",!0)],10,sD))}}),gD=Mt({methods:{upload(){const n=document.createElement("input");n.type="file",n.accept=".png,.jpg,.jpeg",n.multiple=!1,n.addEventListener("change",e=>{var s;if(!((s=n.files)!=null&&s[0]))return;const t=new FileReader;t.onload=()=>{this.src=t.result,this.$emit("selectImage",this.src)},t.onerror=()=>{};const i=n.files[0];t.readAsDataURL(i)}),n.click()}},emits:{selectImage:n=>{}},data(){return{src:void 0}}}),vD=["src"];function _D(n,e,t,i,s,r){return he(),Ee("div",{onClick:e[0]||(e[0]=(...o)=>n.upload&&n.upload(...o)),class:"input"},[n.src?(he(),Ee("img",{key:0,src:n.src,alt:""},null,8,vD)):Ve("",!0)])}u(_D,"_sfc_render$9");const xD=Qt(gD,[["render",_D],["__scopeId","data-v-2def6136"]]),yD=Mt({components:{Vue3ColorPicker:mD,ImageUpload:xD},methods:{},data(){return{colorOpen:!1,textureOpen:!1,normalOpen:!1,state:K}}}),dp=u(n=>(Zn("data-v-e479077d"),n=n(),Jn(),n),"_withScopeId$6"),bD={class:"material-editor"},MD={class:"material-editor-title"},SD={key:0,class:"material-properties"},ED=dp(()=>U("h5",{style:{"margin-left":"8px"}},"Color",-1)),TD={class:"material-property"},wD=dp(()=>U("h5",{style:{"margin-left":"8px"}},"Texture",-1)),AD={class:"material-property"},CD=dp(()=>U("h5",{style:{"margin-left":"8px"}},"Normal Texture",-1)),RD={class:"material-property"};function PD(n,e,t,i,s,r){const o=Ut("Vue3ColorPicker"),a=Ut("ImageUpload");return he(),Ee(Lt,null,[U("div",bD,[U("div",MD,"Selected - Material "+xt(n.state.materials.indexOf(n.state.selectedMaterial)),1)]),n.state.selectedMaterial?(he(),Ee("div",SD,[U("div",{class:lt({"object-option-group":!0,color:!0,collapse:!n.colorOpen}),style:{"margin-top":"8px"}},[U("div",{onClick:e[0]||(e[0]=l=>n.colorOpen=!n.colorOpen),class:"group-title"},[U("i",{class:lt(n.colorOpen?"bi bi-caret-down-fill":"bi bi-caret-right-fill")},null,2),ED]),U("div",TD,[Ue(o,{mode:"solid",showPickerMode:!1,showColorList:!1,showEyeDrop:!1,type:"RGBA",theme:"dark",showAlpha:!1,style:{width:"256px"}})])],2),U("div",{class:lt({"object-option-group":!0,collapse:!n.textureOpen}),style:{"margin-top":"8px"}},[U("div",{onClick:e[1]||(e[1]=l=>n.textureOpen=!n.textureOpen),class:"group-title"},[U("i",{class:lt(n.textureOpen?"bi bi-caret-down-fill":"bi bi-caret-right-fill")},null,2),wD]),U("div",AD,[Ue(a)])],2),U("div",{class:lt({"object-option-group":!0,collapse:!n.normalOpen}),style:{"margin-top":"8px","margin-bottom":"8px"}},[U("div",{onClick:e[2]||(e[2]=l=>n.normalOpen=!n.normalOpen),class:"group-title"},[U("i",{class:lt(n.normalOpen?"bi bi-caret-down-fill":"bi bi-caret-right-fill")},null,2),CD]),U("div",RD,[Ue(a)])],2)])):Ve("",!0)],64)}u(PD,"_sfc_render$8");const DD=Qt(yD,[["render",PD],["__scopeId","data-v-e479077d"]]),ID=Mt({components:{MaterialItem:$R,MaterialEditor:DD},methods:{resize(n){if(this.isResizing){K.cursorShape="row-resize";const e=this.$refs.bottomSection,t=this.$refs.editor;e&&t&&(e.style.height=+e.style.height.replace("px","")-n.movementY+"px",t.style.height=+e.style.height.replace("px","")+48-n.movementY+"px")}},mouseup(){this.isResizing&&(K.cursorShape="initial"),this.isResizing=!1}},mounted(){document.addEventListener("mouseup",this.mouseup),document.addEventListener("mousemove",this.resize),K.selectedMaterial=K.materials[0];const n=this.$refs.bottomSection,e=this.$refs.editor;n&&e&&(e.style.height=+n.style.height.replace("px","")+48+"px")},unmounted(){document.removeEventListener("mouseup",this.mouseup),document.removeEventListener("mousemove",this.resize)},data(){return{isResizing:!1,state:K}}}),LD=u(n=>(Zn("data-v-abe39564"),n=n(),Jn(),n),"_withScopeId$5"),ND={class:"bottom-section-container"},OD=LD(()=>U("div",{style:{display:"flex","flex-direction":"column","justify-content":"space-around",height:"100%"}},[U("div",{style:{width:"30px",height:"1px","background-color":"#ffffff26"}}),U("div",{style:{width:"30px",height:"1px","background-color":"#ffffff26"}})],-1)),UD=[OD],FD={class:"bottom-section"},BD={ref:"editor",class:"editor"},kD={class:"visual-browser-container"},zD={class:"browser-tools"},VD=da('<div class="browser-tools-title" data-v-abe39564>Material Browser</div><div class="browser-tools-search" data-v-abe39564><input placeholder="Filter" type="text" data-v-abe39564><div class="browser-tools-search-icon" data-v-abe39564><i class="bi bi-search" data-v-abe39564></i></div></div>',2),HD={ref:"bottomSection",class:"visual-browser",style:{height:"256px"}},GD={class:"visual-browser-items"};function WD(n,e,t,i,s,r){const o=Ut("MaterialEditor"),a=Ut("MaterialItem");return he(),Ee("div",ND,[U("div",{ref:"resize",onMousedown:e[0]||(e[0]=l=>n.isResizing=!0),class:"resize"},UD,544),U("div",FD,[U("div",BD,[Ue(o)],512),U("div",kD,[U("div",zD,[U("div",{onClick:e[1]||(e[1]=l=>n.state.materials.push({color:"#ffffff"})),class:"browser-tools-add"},"Add +"),VD]),U("div",HD,[U("div",GD,[(he(!0),Ee(Lt,null,Go(n.state.materials,(l,c)=>(he(),ct(a,{index:c,material:l},null,8,["index","material"]))),256))])],512)])])])}u(WD,"_sfc_render$7");const $D=Qt(ID,[["render",WD],["__scopeId","data-v-abe39564"]]);function Gu(n){return n===0?!1:Array.isArray(n)&&n.length===0?!0:!n}u(Gu,"isEmpty");function jD(n){return(...e)=>!n(...e)}u(jD,"not");function XD(n,e){return n===void 0&&(n="undefined"),n===null&&(n="null"),n===!1&&(n="false"),n.toString().toLowerCase().indexOf(e.trim())!==-1}u(XD,"includes");function Nx(n,e,t,i){return e?n.filter(s=>XD(i(s,t),e)).sort((s,r)=>i(s,t).length-i(r,t).length):n}u(Nx,"filterOptions");function YD(n){return n.filter(e=>!e.$isLabel)}u(YD,"stripGroups");function Wu(n,e){return t=>t.reduce((i,s)=>s[n]&&s[n].length?(i.push({$groupLabel:s[e],$isLabel:!0}),i.concat(s[n])):i,[])}u(Wu,"flattenOptions");function qD(n,e,t,i,s){return r=>r.map(o=>{if(!o[t])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];const a=Nx(o[t],n,e,s);return a.length?{[i]:o[i],[t]:a}:[]})}u(qD,"filterGroups");const Nv=u((...n)=>e=>n.reduce((t,i)=>i(t),e),"flow");var KD={data(){return{search:"",isOpen:!1,preferredOpenDirection:"below",optimizedHeight:this.maxHeight}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default(n,e){return Gu(n)?"":e?n[e]:n}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},tagPosition:{type:String,default:"top"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},groupSelect:{type:Boolean,default:!1},blockKeys:{type:Array,default(){return[]}},preserveSearch:{type:Boolean,default:!1},preselectFirst:{type:Boolean,default:!1},preventAutofocus:{type:Boolean,default:!1}},mounted(){!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."),this.preselectFirst&&!this.internalValue.length&&this.options.length&&this.select(this.filteredOptions[0])},computed:{internalValue(){return this.modelValue||this.modelValue===0?Array.isArray(this.modelValue)?this.modelValue:[this.modelValue]:[]},filteredOptions(){const n=this.search||"",e=n.toLowerCase().trim();let t=this.options.concat();return this.internalSearch?t=this.groupValues?this.filterAndFlat(t,e,this.label):Nx(t,e,this.label,this.customLabel):t=this.groupValues?Wu(this.groupValues,this.groupLabel)(t):t,t=this.hideSelected?t.filter(jD(this.isSelected)):t,this.taggable&&e.length&&!this.isExistingOption(e)&&(this.tagPosition==="bottom"?t.push({isTag:!0,label:n}):t.unshift({isTag:!0,label:n})),t.slice(0,this.optionsLimit)},valueKeys(){return this.trackBy?this.internalValue.map(n=>n[this.trackBy]):this.internalValue},optionKeys(){return(this.groupValues?this.flatAndStrip(this.options):this.options).map(e=>this.customLabel(e,this.label).toString().toLowerCase())},currentOptionLabel(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue.length?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue:{handler(){this.resetAfter&&this.internalValue.length&&(this.search="",this.$emit("update:modelValue",this.multiple?[]:null))},deep:!0},search(){this.$emit("search-change",this.search)}},emits:["open","search-change","close","select","update:modelValue","remove","tag"],methods:{getValue(){return this.multiple?this.internalValue:this.internalValue.length===0?null:this.internalValue[0]},filterAndFlat(n,e,t){return Nv(qD(e,t,this.groupValues,this.groupLabel,this.customLabel),Wu(this.groupValues,this.groupLabel))(n)},flatAndStrip(n){return Nv(Wu(this.groupValues,this.groupLabel),YD)(n)},updateSearch(n){this.search=n},isExistingOption(n){return this.options?this.optionKeys.indexOf(n)>-1:!1},isSelected(n){const e=this.trackBy?n[this.trackBy]:n;return this.valueKeys.indexOf(e)>-1},isOptionDisabled(n){return!!n.$isDisabled},getOptionLabel(n){if(Gu(n))return"";if(n.isTag)return n.label;if(n.$isLabel)return n.$groupLabel;const e=this.customLabel(n,this.label);return Gu(e)?"":e},select(n,e){if(n.$isLabel&&this.groupSelect){this.selectGroup(n);return}if(!(this.blockKeys.indexOf(e)!==-1||this.disabled||n.$isDisabled||n.$isLabel)&&!(this.max&&this.multiple&&this.internalValue.length===this.max)&&!(e==="Tab"&&!this.pointerDirty)){if(n.isTag)this.$emit("tag",n.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else{if(this.isSelected(n)){e!=="Tab"&&this.removeElement(n);return}this.multiple?this.$emit("update:modelValue",this.internalValue.concat([n])):this.$emit("update:modelValue",n),this.$emit("select",n,this.id),this.clearOnSelect&&(this.search="")}this.closeOnSelect&&this.deactivate()}},selectGroup(n){const e=this.options.find(t=>t[this.groupLabel]===n.$groupLabel);if(e){if(this.wholeGroupSelected(e)){this.$emit("remove",e[this.groupValues],this.id);const t=this.trackBy?e[this.groupValues].map(s=>s[this.trackBy]):e[this.groupValues],i=this.internalValue.filter(s=>t.indexOf(this.trackBy?s[this.trackBy]:s)===-1);this.$emit("update:modelValue",i)}else{let t=e[this.groupValues].filter(i=>!(this.isOptionDisabled(i)||this.isSelected(i)));this.max&&t.splice(this.max-this.internalValue.length),this.$emit("select",t,this.id),this.$emit("update:modelValue",this.internalValue.concat(t))}this.closeOnSelect&&this.deactivate()}},wholeGroupSelected(n){return n[this.groupValues].every(e=>this.isSelected(e)||this.isOptionDisabled(e))},wholeGroupDisabled(n){return n[this.groupValues].every(this.isOptionDisabled)},removeElement(n,e=!0){if(this.disabled||n.$isDisabled)return;if(!this.allowEmpty&&this.internalValue.length<=1){this.deactivate();return}const t=typeof n=="object"?this.valueKeys.indexOf(n[this.trackBy]):this.valueKeys.indexOf(n);if(this.multiple){const i=this.internalValue.slice(0,t).concat(this.internalValue.slice(t+1));this.$emit("update:modelValue",i)}else this.$emit("update:modelValue",null);this.$emit("remove",n,this.id),this.closeOnSelect&&e&&this.deactivate()},removeLastElement(){this.blockKeys.indexOf("Delete")===-1&&this.search.length===0&&Array.isArray(this.internalValue)&&this.internalValue.length&&this.removeElement(this.internalValue[this.internalValue.length-1],!1)},activate(){this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&this.pointer===0&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.preventAutofocus||this.$nextTick(()=>this.$refs.search&&this.$refs.search.focus())):this.preventAutofocus||typeof this.$el<"u"&&this.$el.focus(),this.$emit("open",this.id))},deactivate(){this.isOpen&&(this.isOpen=!1,this.searchable?this.$refs.search!==null&&typeof this.$refs.search<"u"&&this.$refs.search.blur():typeof this.$el<"u"&&this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id))},toggle(){this.isOpen?this.deactivate():this.activate()},adjustPosition(){if(typeof window>"u")return;const n=this.$el.getBoundingClientRect().top,e=window.innerHeight-this.$el.getBoundingClientRect().bottom;e>this.maxHeight||e>n||this.openDirection==="below"||this.openDirection==="bottom"?(this.preferredOpenDirection="below",this.optimizedHeight=Math.min(e-40,this.maxHeight)):(this.preferredOpenDirection="above",this.optimizedHeight=Math.min(n-40,this.maxHeight))}}},ZD={data(){return{pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition(){return this.pointer*this.optionHeight},visibleElements(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions(){this.pointerAdjust()},isOpen(){this.pointerDirty=!1},pointer(){this.$refs.search&&this.$refs.search.setAttribute("aria-activedescendant",this.id+"-"+this.pointer.toString())}},methods:{optionHighlight(n,e){return{"multiselect__option--highlight":n===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(e)}},groupHighlight(n,e){if(!this.groupSelect)return["multiselect__option--disabled",{"multiselect__option--group":e.$isLabel}];const t=this.options.find(i=>i[this.groupLabel]===e.$groupLabel);return t&&!this.wholeGroupDisabled(t)?["multiselect__option--group",{"multiselect__option--highlight":n===this.pointer&&this.showPointer},{"multiselect__option--group-selected":this.wholeGroupSelected(t)}]:"multiselect__option--disabled"},addPointerElement({key:n}="Enter"){this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],n),this.pointerReset()},pointerForward(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()),this.pointerDirty=!0},pointerBackward(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerBackward()):this.filteredOptions[this.pointer]&&this.filteredOptions[0].$isLabel&&!this.groupSelect&&this.pointerForward(),this.pointerDirty=!0},pointerReset(){this.closeOnSelect&&(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0))},pointerAdjust(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0),this.filteredOptions.length>0&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()},pointerSet(n){this.pointer=n,this.pointerDirty=!0}}},Ox={name:"vue-multiselect",mixins:[KD,ZD],compatConfig:{MODE:3,ATTR_ENUMERATED_COERCION:!1},props:{name:{type:String,default:""},modelValue:{type:null,default(){return[]}},selectLabel:{type:String,default:"Press enter to select"},selectGroupLabel:{type:String,default:"Press enter to select group"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},deselectGroupLabel:{type:String,default:"Press enter to deselect group"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:n=>`and ${n} more`},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoOptions:{type:Boolean,default:!0},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{hasOptionGroup(){return this.groupValues&&this.groupLabel&&this.groupSelect},isSingleLabelVisible(){return(this.singleValue||this.singleValue===0)&&(!this.isOpen||!this.searchable)&&!this.visibleValues.length},isPlaceholderVisible(){return!this.internalValue.length&&(!this.searchable||!this.isOpen)},visibleValues(){return this.multiple?this.internalValue.slice(0,this.limit):[]},singleValue(){return this.internalValue[0]},deselectLabelText(){return this.showLabels?this.deselectLabel:""},deselectGroupLabelText(){return this.showLabels?this.deselectGroupLabel:""},selectLabelText(){return this.showLabels?this.selectLabel:""},selectGroupLabelText(){return this.showLabels?this.selectGroupLabel:""},selectedLabelText(){return this.showLabels?this.selectedLabel:""},inputStyle(){return this.searchable||this.multiple&&this.modelValue&&this.modelValue.length?this.isOpen?{width:"100%"}:{width:"0",position:"absolute",padding:"0"}:""},contentStyle(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove(){return this.openDirection==="above"||this.openDirection==="top"?!0:this.openDirection==="below"||this.openDirection==="bottom"?!1:this.preferredOpenDirection==="above"},showSearchInput(){return this.searchable&&(this.hasSingleSelectedSlot&&(this.visibleSingleValue||this.visibleSingleValue===0)?this.isOpen:!0)}}};const JD={ref:"tags",class:"multiselect__tags"},QD={class:"multiselect__tags-wrap"},eI={class:"multiselect__spinner"},tI={key:0},nI={class:"multiselect__option"},iI={class:"multiselect__option"},sI=An("No elements found. Consider changing the search query."),rI={class:"multiselect__option"},oI=An("List is empty.");function aI(n,e,t,i,s,r){return he(),ct("div",{tabindex:n.searchable?-1:t.tabindex,class:[{"multiselect--active":n.isOpen,"multiselect--disabled":t.disabled,"multiselect--above":r.isAbove,"multiselect--has-options-group":r.hasOptionGroup},"multiselect"],onFocus:e[14]||(e[14]=o=>n.activate()),onBlur:e[15]||(e[15]=o=>n.searchable?!1:n.deactivate()),onKeydown:[e[16]||(e[16]=di(Gt(o=>n.pointerForward(),["self","prevent"]),["down"])),e[17]||(e[17]=di(Gt(o=>n.pointerBackward(),["self","prevent"]),["up"]))],onKeypress:e[18]||(e[18]=di(Gt(o=>n.addPointerElement(o),["stop","self"]),["enter","tab"])),onKeyup:e[19]||(e[19]=di(o=>n.deactivate(),["esc"])),role:"combobox","aria-owns":"listbox-"+n.id},[hn(n.$slots,"caret",{toggle:n.toggle},()=>[Ue("div",{onMousedown:e[1]||(e[1]=Gt(o=>n.toggle(),["prevent","stop"])),class:"multiselect__select"},null,32)]),hn(n.$slots,"clear",{search:n.search}),Ue("div",JD,[hn(n.$slots,"selection",{search:n.search,remove:n.removeElement,values:r.visibleValues,isOpen:n.isOpen},()=>[Gn(Ue("div",QD,[(he(!0),ct(Lt,null,Go(r.visibleValues,(o,a)=>hn(n.$slots,"tag",{option:o,search:n.search,remove:n.removeElement},()=>[(he(),ct("span",{class:"multiselect__tag",key:a},[Ue("span",{textContent:xt(n.getOptionLabel(o))},null,8,["textContent"]),Ue("i",{tabindex:"1",onKeypress:di(Gt(l=>n.removeElement(o),["prevent"]),["enter"]),onMousedown:Gt(l=>n.removeElement(o),["prevent"]),class:"multiselect__tag-icon"},null,40,["onKeypress","onMousedown"])]))])),256))],512),[[Wn,r.visibleValues.length>0]]),n.internalValue&&n.internalValue.length>t.limit?hn(n.$slots,"limit",{key:0},()=>[Ue("strong",{class:"multiselect__strong",textContent:xt(t.limitText(n.internalValue.length-t.limit))},null,8,["textContent"])]):Ve("v-if",!0)]),Ue(wl,{name:"multiselect__loading"},{default:kr(()=>[hn(n.$slots,"loading",{},()=>[Gn(Ue("div",eI,null,512),[[Wn,t.loading]])])]),_:3}),n.searchable?(he(),ct("input",{key:0,ref:"search",name:t.name,id:n.id,type:"text",autocomplete:"off",spellcheck:!1,placeholder:n.placeholder,style:r.inputStyle,value:n.search,disabled:t.disabled,tabindex:t.tabindex,onInput:e[2]||(e[2]=o=>n.updateSearch(o.target.value)),onFocus:e[3]||(e[3]=Gt(o=>n.activate(),["prevent"])),onBlur:e[4]||(e[4]=Gt(o=>n.deactivate(),["prevent"])),onKeyup:e[5]||(e[5]=di(o=>n.deactivate(),["esc"])),onKeydown:[e[6]||(e[6]=di(Gt(o=>n.pointerForward(),["prevent"]),["down"])),e[7]||(e[7]=di(Gt(o=>n.pointerBackward(),["prevent"]),["up"])),e[9]||(e[9]=di(Gt(o=>n.removeLastElement(),["stop"]),["delete"]))],onKeypress:e[8]||(e[8]=di(Gt(o=>n.addPointerElement(o),["prevent","stop","self"]),["enter"])),class:"multiselect__input","aria-controls":"listbox-"+n.id},null,44,["name","id","placeholder","value","disabled","tabindex","aria-controls"])):Ve("v-if",!0),r.isSingleLabelVisible?(he(),ct("span",{key:1,class:"multiselect__single",onMousedown:e[10]||(e[10]=Gt((...o)=>n.toggle&&n.toggle(...o),["prevent"]))},[hn(n.$slots,"singleLabel",{option:r.singleValue},()=>[An(xt(n.currentOptionLabel),1)])],32)):Ve("v-if",!0),r.isPlaceholderVisible?(he(),ct("span",{key:2,class:"multiselect__placeholder",onMousedown:e[11]||(e[11]=Gt((...o)=>n.toggle&&n.toggle(...o),["prevent"]))},[hn(n.$slots,"placeholder",{},()=>[An(xt(n.placeholder),1)])],32)):Ve("v-if",!0)],512),Ue(wl,{name:"multiselect"},{default:kr(()=>[Gn(Ue("div",{class:"multiselect__content-wrapper",onFocus:e[12]||(e[12]=(...o)=>n.activate&&n.activate(...o)),tabindex:"-1",onMousedown:e[13]||(e[13]=Gt(()=>{},["prevent"])),style:{maxHeight:n.optimizedHeight+"px"},ref:"list"},[Ue("ul",{class:"multiselect__content",style:r.contentStyle,role:"listbox",id:"listbox-"+n.id},[hn(n.$slots,"beforeList"),n.multiple&&n.max===n.internalValue.length?(he(),ct("li",tI,[Ue("span",nI,[hn(n.$slots,"maxElements",{},()=>[An("Maximum of "+xt(n.max)+" options selected. First remove a selected option to select another.",1)])])])):Ve("v-if",!0),!n.max||n.internalValue.length<n.max?(he(!0),ct(Lt,{key:1},Go(n.filteredOptions,(o,a)=>(he(),ct("li",{class:"multiselect__element",key:a,id:n.id+"-"+a,role:o&&(o.$isLabel||o.$isDisabled)?null:"option"},[o&&(o.$isLabel||o.$isDisabled)?Ve("v-if",!0):(he(),ct("span",{key:0,class:[n.optionHighlight(a,o),"multiselect__option"],onClick:Gt(l=>n.select(o),["stop"]),onMouseenter:Gt(l=>n.pointerSet(a),["self"]),"data-select":o&&o.isTag?n.tagPlaceholder:r.selectLabelText,"data-selected":r.selectedLabelText,"data-deselect":r.deselectLabelText},[hn(n.$slots,"option",{option:o,search:n.search,index:a},()=>[Ue("span",null,xt(n.getOptionLabel(o)),1)])],42,["onClick","onMouseenter","data-select","data-selected","data-deselect"])),o&&(o.$isLabel||o.$isDisabled)?(he(),ct("span",{key:1,"data-select":n.groupSelect&&r.selectGroupLabelText,"data-deselect":n.groupSelect&&r.deselectGroupLabelText,class:[n.groupHighlight(a,o),"multiselect__option"],onMouseenter:Gt(l=>n.groupSelect&&n.pointerSet(a),["self"]),onMousedown:Gt(l=>n.selectGroup(o),["prevent"])},[hn(n.$slots,"option",{option:o,search:n.search,index:a},()=>[Ue("span",null,xt(n.getOptionLabel(o)),1)])],42,["data-select","data-deselect","onMouseenter","onMousedown"])):Ve("v-if",!0)],8,["id","role"]))),128)):Ve("v-if",!0),Gn(Ue("li",null,[Ue("span",iI,[hn(n.$slots,"noResult",{search:n.search},()=>[sI])])],512),[[Wn,t.showNoResults&&n.filteredOptions.length===0&&n.search&&!t.loading]]),Gn(Ue("li",null,[Ue("span",rI,[hn(n.$slots,"noOptions",{},()=>[oI])])],512),[[Wn,t.showNoOptions&&(n.options.length===0||r.hasOptionGroup===!0&&n.filteredOptions.length===0)&&!n.search&&!t.loading]]),hn(n.$slots,"afterList")],12,["id"])],36),[[Wn,n.isOpen]])]),_:3})],42,["tabindex","aria-owns"])}u(aI,"render");Ox.render=aI;const lI=Mt({methods:{mouseClick(n){if(this.justClicked){this.justClicked=!1;return}const e=document.getElementById("brush-options");if(e){const t=e.getBoundingClientRect();this.showOptions=n.clientX>=t.left&&n.clientX<=t.right&&n.clientY>=t.top&&n.clientY<=t.bottom}},setBrushShape(n){K.brushShape=n},inputChange(n){K.brushSize=+n.target.value}},mounted(){document.addEventListener("click",this.mouseClick)},unmounted(){document.removeEventListener("click",this.mouseClick)},data(){return{showOptions:!1,justClicked:!1,state:K}}}),Rs=u(n=>(Zn("data-v-bb91c8b4"),n=n(),Jn(),n),"_withScopeId$4"),cI={class:"brush-button"},uI=Rs(()=>U("i",{class:"bi bi-brush-fill"},null,-1)),hI=Rs(()=>U("i",{class:"bi bi-caret-down-fill"},null,-1)),dI=[uI,hI],fI={key:0,id:"brush-options",class:"brush-options"},pI=Rs(()=>U("div",{class:"title"}," Brush ",-1)),mI=Rs(()=>U("p",{style:{margin:"4px","margin-bottom":"0","text-align":"left"}},"Size",-1)),gI={style:{display:"flex","margin-left":"4px","margin-right":"4px","align-items":"center"}},vI=["value"],_I={style:{height:"100%",width:"18px","text-align":"center",color:"var(--color-text-disabled)"}},xI=Rs(()=>U("span",{style:{height:"100%","margin-bottom":"0.1em",color:"var(--color-text-disabled)"}},"px",-1)),yI=Rs(()=>U("p",{style:{margin:"4px","margin-bottom":"0","text-align":"left"}},"Shape",-1)),bI={style:{display:"flex",width:"100%","justify-content":"space-around",flex:"1","align-items":"center"}},MI=Rs(()=>U("i",{class:"bi bi-square-fill"},null,-1)),SI=[MI],EI=Rs(()=>U("i",{class:"bi bi-circle-fill"},null,-1)),TI=[EI];function wI(n,e,t,i,s,r){return he(),Ee("div",cI,[U("div",{onClick:e[0]||(e[0]=o=>{n.showOptions=!0,n.justClicked=!0}),class:"icons"},dI),n.showOptions?(he(),Ee("div",fI,[pI,mI,U("div",gI,[U("input",{onMousemove:e[1]||(e[1]=(...o)=>n.inputChange&&n.inputChange(...o)),value:n.state.brushSize,min:1,max:"16",class:"custom-range",type:"range",style:{flex:"1"}},null,40,vI),U("span",_I,xt(n.state.brushSize),1),xI]),yI,U("div",bI,[U("div",{onClick:e[2]||(e[2]=o=>n.setBrushShape("square")),class:"brush-type",style:zt(`background-color: var(${n.state.brushShape==="square"?"--color-secondary":"--color-foreground-2"});`)},SI,4),U("div",{onClick:e[3]||(e[3]=o=>n.setBrushShape("round")),class:"brush-type",style:zt(`background-color: var(${n.state.brushShape==="round"?"--color-secondary":"--color-foreground-2"});`)},TI,4)])])):Ve("",!0)])}u(wI,"_sfc_render$6");const AI=Qt(lI,[["render",wI],["__scopeId","data-v-bb91c8b4"]]),fp=Mt({components:{Multiselect:Ox,Brush:AI},methods:{resize(){this.space=window.innerWidth<1200?4:8,this.rightVisible=window.innerWidth>=1045},fullscreenChange(){K.fullscreen=document.fullscreenElement!==null},fullscreen(){K.fullscreen?document.exitFullscreen():document.body.requestFullscreen()}},mounted(){window.addEventListener("resize",this.resize),document.addEventListener("fullscreenchange",this.fullscreenChange)},unmounted(){window.removeEventListener("resize",this.resize),document.removeEventListener("fullscreenchange",this.fullscreenChange)},data:()=>({options:["Object mode","Geometry mode"],space:window.innerWidth<1200?4:8,rightVisible:window.innerWidth>=1045,state:K})}),Ov=u(()=>{Uc(n=>({"03795c4e":n.space+"px"}))},"__injectCSSVars__$2"),Uv=fp.setup;fp.setup=Uv?(n,e)=>(Ov(),Uv(n,e)):Ov;const zc=u(n=>(Zn("data-v-d37c0001"),n=n(),Jn(),n),"_withScopeId$3"),CI={class:"mode-bar"},RI={class:"mode-bar-left"},PI=da('<div class="mode-bar-item" data-v-d37c0001><div class="mode-bar-item-select" data-v-d37c0001><select data-v-d37c0001><option value="" disabled selected data-v-d37c0001>Render Mode</option><option value="Material Preview" data-v-d37c0001>Material Preview</option><option value="Unlit" data-v-d37c0001>Unlit</option><option value="Wireframe" data-v-d37c0001>Wireframe</option><option value="Lit" data-v-d37c0001>Lit</option></select></div></div>',1),DI={class:"mode-bar-item"},II={class:"mode-bar-item-select"},LI=zc(()=>U("i",{class:"bi bi-box-fill"},null,-1)),NI={class:"mode-bar-item"},OI={class:"mode-bar-item-select"},UI=zc(()=>U("i",{class:"bi bi-hammer"},null,-1)),FI={key:0,class:"mode-bar-item"},BI={key:0,class:"mode-bar-right"},kI={title:"fullscreen",class:"mode-bar-item"},zI={class:"mode-bar-item-select",style:{width:"48px"}},VI={title:"snap",class:"mode-bar-item"},HI={class:"mode-bar-item-select",style:{width:"48px"}},GI=zc(()=>U("i",{class:"bi bi-magnet-fill"},null,-1)),WI=[GI],$I={title:"grid",class:"mode-bar-item"},jI={class:"mode-bar-item-select",style:{width:"48px"}},XI=zc(()=>U("i",{class:"bi bi-grid-3x3"},null,-1)),YI=[XI];function qI(n,e,t,i,s,r){const o=Ut("Brush");return he(),Ee("div",CI,[U("div",RI,[PI,U("div",DI,[U("div",II,[U("div",{onClick:e[0]||(e[0]=a=>n.state.setCurrentMode("object")),class:"mode-button",style:zt(n.state.currentMode==="object"?"background-color: var(--color-secondary);":"")},[LI,An(" Object Mode ")],4)])]),U("div",NI,[U("div",OI,[U("div",{onClick:e[1]||(e[1]=a=>n.state.setCurrentMode("sculpt")),class:"mode-button",style:zt(n.state.currentMode==="sculpt"?"background-color: var(--color-secondary);":"")},[UI,An(" Voxel Mode ")],4)])]),n.state.currentMode==="sculpt"?(he(),Ee("div",FI,[Ue(o)])):Ve("",!0)]),n.rightVisible?(he(),Ee("div",BI,[U("div",kI,[U("div",zI,[U("div",{onClick:e[2]||(e[2]=(...a)=>n.fullscreen&&n.fullscreen(...a)),class:"mode-button",style:zt(`background-color: var(${n.state.fullscreen?"--color-secondary":"--color-foreground-2"});`)},[U("i",{class:lt(n.state.fullscreen?"bi bi-fullscreen-exit":"bi bi-fullscreen")},null,2)],4)])]),U("div",VI,[U("div",HI,[U("div",{onClick:e[3]||(e[3]=a=>n.state.snapActive=!n.state.snapActive),class:"mode-button",style:zt(`background-color: var(${n.state.snapActive?"--color-secondary":"--color-foreground-2"});`)},WI,4)])]),U("div",$I,[U("div",jI,[U("div",{onClick:e[4]||(e[4]=a=>n.state.setGridActive(!n.state.gridActive)),class:"mode-button",style:zt(`background-color: var(${n.state.gridActive?"--color-secondary":"--color-foreground-2"});`)},YI,4)])]),U("div",{style:zt(`width: ${n.space}px;`)},null,4)])):Ve("",!0)])}u(qI,"_sfc_render$5");const KI=Qt(fp,[["render",qI],["__scopeId","data-v-d37c0001"]]),pp=Mt({data(){return{state:K}},methods:{editClick(){K.currentTool!=="edit"&&(K.currentTool="edit",document.dispatchEvent(new CustomEvent("tool-switch-edit")))},measureClick(){K.currentTool!=="measure"&&(K.currentTool="measure",document.dispatchEvent(new CustomEvent("tool-measure-edit")))},exploreClick(){K.currentTool!=="explore"&&(K.currentTool="explore",document.dispatchEvent(new CustomEvent("tool-explore-edit")))},annotateClick(){K.currentTool!=="annotate"&&(K.currentTool="annotate",document.dispatchEvent(new CustomEvent("tool-annotate-edit")))}}}),Fv=u(()=>{Uc(n=>({"35996b62":n.state.currentTool==="edit"?"var(--color-secondary)":"var(--color-foreground-1)","7891fda2":n.state.currentTool==="measure"?"var(--color-secondary)":"var(--color-foreground-1)",e03f0bb8:n.state.currentTool==="explore"?"var(--color-secondary)":"var(--color-foreground-1)","116dfa11":n.state.currentTool==="annotate"?"var(--color-secondary)":"var(--color-foreground-1)"}))},"__injectCSSVars__$1"),Bv=pp.setup;pp.setup=Bv?(n,e)=>(Fv(),Bv(n,e)):Fv;const Vc=u(n=>(Zn("data-v-60410809"),n=n(),Jn(),n),"_withScopeId$2"),ZI={class:"tool-bar"},JI=Vc(()=>U("i",{class:"bi bi-boxes"},null,-1)),QI=[JI],e3=Vc(()=>U("i",{class:"bi bi-rulers"},null,-1)),t3=[e3],n3=Vc(()=>U("i",{class:"bi bi-person-walking"},null,-1)),i3=[n3],s3=Vc(()=>U("i",{class:"bi bi-pen-fill"},null,-1)),r3=[s3];function o3(n,e,t,i,s,r){return he(),Ee("div",ZI,[U("div",{onClick:e[0]||(e[0]=(...o)=>n.editClick&&n.editClick(...o)),title:"edit",class:"tool-bar-item edit"},QI),U("div",{onClick:e[1]||(e[1]=(...o)=>n.measureClick&&n.measureClick(...o)),title:"measure",class:"tool-bar-item measure"},t3),U("div",{onClick:e[2]||(e[2]=(...o)=>n.exploreClick&&n.exploreClick(...o)),title:"explore",class:"tool-bar-item explore"},i3),U("div",{onClick:e[3]||(e[3]=(...o)=>n.annotateClick&&n.annotateClick(...o)),title:"annotate",class:"tool-bar-item annotate"},r3)])}u(o3,"_sfc_render$4");const a3=Qt(pp,[["render",o3],["__scopeId","data-v-60410809"]]),l3=Mt({data:()=>({state:K})}),Hc=u(n=>(Zn("data-v-260f388d"),n=n(),Jn(),n),"_withScopeId$1"),c3={key:0,class:"tool-bar"},u3=Hc(()=>U("i",{class:"bi bi-cursor-fill"},null,-1)),h3=[u3],d3=Hc(()=>U("i",{class:"bi bi-arrows-move"},null,-1)),f3=[d3],p3=Hc(()=>U("i",{class:"bi bi-arrows-fullscreen"},null,-1)),m3=[p3],g3=Hc(()=>U("i",{class:"bi bi-arrow-repeat"},null,-1)),v3=[g3];function _3(n,e,t,i,s,r){return n.state.currentMode==="object"?(he(),Ee("div",c3,[U("div",{onClick:e[0]||(e[0]=o=>n.state.objectModeState="select"),title:"select",class:"tool-bar-item",style:zt(n.state.objectModeState==="select"?"background-color: var(--color-secondary);":"")},h3,4),U("div",{onClick:e[1]||(e[1]=o=>n.state.objectModeState="move"),title:"move",class:"tool-bar-item",style:zt(n.state.objectModeState==="move"?"background-color: var(--color-secondary);":"")},f3,4),U("div",{onClick:e[2]||(e[2]=o=>n.state.objectModeState="scale"),title:"scale",class:"tool-bar-item",style:zt(n.state.objectModeState==="scale"?"background-color: var(--color-secondary);":"")},m3,4),U("div",{onClick:e[3]||(e[3]=o=>n.state.objectModeState="rotate"),title:"rotate",class:"tool-bar-item",style:zt(n.state.objectModeState==="rotate"?"background-color: var(--color-secondary);":"")},v3,4)])):Ve("",!0)}u(_3,"_sfc_render$3");const x3=Qt(l3,[["render",_3],["__scopeId","data-v-260f388d"]]);var y3=Object.defineProperty,b3=u((n,e,t)=>e in n?y3(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,"Jt"),ft=u((n,e,t)=>b3(n,typeof e!="symbol"?e+"":e,t),"g");const Ux=u((n,e)=>{const[t,i]=e.split("-");return Object.assign(n.style,{left:i==="left"?"0":i==="center"?"50%":"",right:i==="right"?"0":"",top:t==="top"?"0":t==="bottom"?"":"50%",bottom:t==="bottom"?"0":"",transform:`${i==="center"?"translateX(-50%)":""} ${t==="center"?"translateY(-50%)":""}`}),e},"Ft"),M3=u(({placement:n,size:e,offset:t,id:i,className:s})=>{const r=document.createElement("div"),{top:o,left:a,right:l,bottom:c}=t;return Object.assign(r.style,{id:i,position:"absolute",zIndex:"1000",height:`${e}px`,width:`${e}px`,margin:`${o}px ${l}px ${c}px ${a}px`,borderRadius:"100%"}),Ux(r,n),i&&(r.id=i),s&&(r.className=s),r},"he"),S3=u(n=>{const e=typeof n=="string"?document.querySelector(n):n;if(!e)throw Error("Invalid DOM element");return e},"fe");function Ef(n,e,t){return Math.max(e,Math.min(t,n))}u(Ef,"dt");const E3=[["x",0,3],["y",1,4],["z",2,5]],kv=new D;function zv({isSphere:n},e,t){n&&(kv.set(0,0,1).applyQuaternion(t.quaternion),E3.forEach(([i,s,r])=>{const o=kv[i];let a=e[s],l=a.userData.opacity;a.material.opacity=Ef(o>=0?l:l/2,0,1),a=e[r],l=a.userData.opacity,a.material.opacity=Ef(o>=0?l/2:l,0,1)}))}u(zv,"Et");const T3=u((n,e,t=10)=>Math.abs(n.clientX-e.x)<t&&Math.abs(n.clientY-e.y)<t,"me"),Vv=new aa,Hv=new xe,Gv=u((n,e,t,i)=>{Hv.set((n.clientX-e.left)/e.width*2-1,-((n.clientY-e.top)/e.height)*2+1),Vv.setFromCamera(Hv,t);const s=Vv.intersectObjects(i,!1),r=s.length?s[0]:null;return!r||!r.object.visible?null:r},"Tt"),$u=1e-6,w3=2*Math.PI,Fx=["x","y","z"],ua=[...Fx,"nx","ny","nz"],A3=["right","top","front","left","bottom","back"],Bx=1.3,Wv=u((n,e=!0)=>{const{material:t,userData:i}=n,{color:s,opacity:r}=e?i.hover:i;t.color.set(s),t.opacity=r},"Lt"),Hs=u(n=>JSON.parse(JSON.stringify(n)),"I"),C3=u(n=>{const e=n.type||"sphere",t=e==="sphere",i=n.resolution||t?64:128,{container:s}=n;n.container=void 0,n=JSON.parse(JSON.stringify(n)),n.container=s,A3.forEach((l,c)=>{n[l]&&(n[ua[c]]=n[l])});const r={enabled:!0,color:16777215,opacity:1,scale:.7,labelColor:2236962,line:!1,border:{size:0,color:14540253},hover:{color:t?16777215:9688043,labelColor:2236962,opacity:1,scale:.7,border:{size:0,color:14540253}}},o={line:!1,scale:t?.45:.7,hover:{scale:t?.5:.7}},a={type:e,container:document.body,size:128,placement:"top-right",resolution:i,lineWidth:20,radius:t?1:.2,smoothness:18,animated:!0,speed:1,background:{enabled:!0,color:t?16777215:14739180,opacity:t?0:1,hover:{color:t?16777215:14739180,opacity:t?.2:1}},font:{family:"sans-serif",weight:900},offset:{top:10,left:10,bottom:10,right:10},corners:{enabled:!t,color:t?15915362:16777215,opacity:1,scale:t?.15:.2,radius:1,smoothness:18,hover:{color:t?16777215:9688043,opacity:1,scale:t?.2:.225}},edges:{enabled:!t,color:t?15915362:16777215,opacity:t?1:0,radius:t?1:.125,smoothness:18,scale:t?.15:1,hover:{color:t?16777215:9688043,opacity:1,scale:t?.2:1}},x:{...Hs(r),...t?{label:"X",color:16725587,line:!0}:{label:"Right"}},y:{...Hs(r),...t?{label:"Y",color:9100032,line:!0}:{label:"Top"}},z:{...Hs(r),...t?{label:"Z",color:2920447,line:!0}:{label:"Front"}},nx:{...Hs(o),label:t?"":"Left"},ny:{...Hs(o),label:t?"":"Bottom"},nz:{...Hs(o),label:t?"":"Back"}};return Tf(n,a),Fx.forEach(l=>Tf(n[`n${l}`],Hs(n[l]))),{...n,isSphere:t}},"ve");function Tf(n,...e){if(n instanceof HTMLElement||typeof n!="object"||n===null)return n;for(const t of e)for(const i in t)i!=="container"&&i in t&&(n[i]===void 0?n[i]=t[i]:typeof t[i]=="object"&&!Array.isArray(t[i])&&(n[i]=Tf(n[i]||{},t[i])));return n}u(Tf,"ut");const R3=u((n,e=2)=>{const t=new De,i=e*2,{isSphere:s,resolution:r,radius:o,font:a,corners:l,edges:c}=n,h=ua.map(R=>({...n[R],radius:o}));s&&l.enabled&&h.push(l),s&&c.enabled&&h.push(c);const d=document.createElement("canvas"),f=d.getContext("2d");d.width=r*2+i*2,d.height=r*h.length+i*h.length;const[p,v]=B(h,r,a);h.forEach(({radius:R,label:O,color:re,labelColor:b,border:T,hover:{color:z,labelColor:$,border:ie}},ce)=>{const Z=r*ce+ce*i+e;w(e,Z,e,r,R,O,T,re,b),w(r+e*3,Z,e,r,R,O,ie??T,z??re,$??b)});const _=h.length,g=e/(r*2),m=e/(r*6),A=1/_,S=new Md(d);return S.repeat.set(.5-2*g,A-2*m),S.offset.set(g,1-m),Object.assign(S,{colorSpace:dn,wrapS:vs,wrapT:vs,userData:{offsetX:g,offsetY:m,cellHeight:A}}),S;function w(R,O,re,b,T,z,$,ie,ce){if(T=T*(b/2),ie!=null&&ie!==""&&(Z(),f.fillStyle=t.set(ie).getStyle(),f.fill()),$&&$.size){const se=$.size*b/2;R+=se,O+=se,b-=$.size*b,T=Math.max(0,T-se),Z(),f.strokeStyle=t.set($.color).getStyle(),f.lineWidth=$.size*b,f.stroke()}z&&P(f,R+b/2,O+(b+re)/2,z,t.set(ce).getStyle());function Z(){f.beginPath(),f.moveTo(R+T,O),f.lineTo(R+b-T,O),f.arcTo(R+b,O,R+b,O+T,T),f.lineTo(R+b,O+b-T),f.arcTo(R+b,O+b,R+b-T,O+b,T),f.lineTo(R+T,O+b),f.arcTo(R,O+b,R,O+b-T,T),f.lineTo(R,O+T),f.arcTo(R,O,R+T,O,T),f.closePath()}u(Z,"G")}function B(R,O,re){const b=[...R].sort((we,Ae)=>{var Ye,Qe;return(((Ye=we.label)==null?void 0:Ye.length)||0)-(((Qe=Ae.label)==null?void 0:Qe.length)||0)}).pop().label,{family:T,weight:z}=re,$=s?Math.sqrt(Math.pow(O*.7,2)/2):O;let ie=$,ce=0,Z=0;do{f.font=`${z} ${ie}px ${T}`;const we=f.measureText(b);ce=we.width,Z=we.fontBoundingBoxDescent,ie--}while(ce>$&&ie>0);const se=$/Z,X=Math.min($/ce,se),Te=Math.floor(ie*X);return[`${z} ${Te}px ${T}`,se]}function P(R,O,re,b,T){R.font=p,R.textAlign="center",R.textBaseline="middle",R.fillStyle=T,R.fillText(b,O,re+(s?v:0))}},"_e"),P3=u((n,e)=>n.offset.x=(e?.5:0)+n.userData.offsetX,"be"),mp=u((n,e)=>{const{offset:t,userData:{offsetY:i,cellHeight:s}}=n;t.y=1-(e+1)*s+i},"mt");function gp(n,e,t=2,i=2){const s=t/2-n,r=i/2-n,o=n/t,a=(t-n)/t,l=n/i,c=(i-n)/i,h=[s,r,0,-s,r,0,-s,-r,0,s,-r,0],d=[a,c,o,c,o,l,a,l],f=[3*(e+1)+3,3*(e+1)+4,e+4,e+5,2*(e+1)+4,2,1,2*(e+1)+3,3,4*(e+1)+3,4,0],p=[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11].map(P=>f[P]);let v,_,g,m,A,S,w,B;for(let P=0;P<4;P++){m=P<1||P>2?s:-s,A=P<2?r:-r,S=P<1||P>2?a:o,w=P<2?c:l;for(let R=0;R<=e;R++)v=Math.PI/2*(P+R/e),_=Math.cos(v),g=Math.sin(v),h.push(m+n*_,A+n*g,0),d.push(S+o*_,w+l*g),R<e&&(B=(e+1)*P+R+4,p.push(P,B,B+1))}return new Bt().setIndex(new Nt(new Uint32Array(p),1)).setAttribute("position",new Nt(new Float32Array(h),3)).setAttribute("uv",new Nt(new Float32Array(d),2))}u(gp,"gt");const D3=u((n,e)=>{const t=new D,{isSphere:i,radius:s,smoothness:r}=n,o=gp(s,r);return ua.map((a,l)=>{const c=l<3,h=ua[l],d=l?e.clone():e;mp(d,l);const{enabled:f,scale:p,opacity:v,hover:_}=n[h],g={map:d,opacity:v,transparent:!0},m=i?new ea(new Jr(g)):new St(o,new wn(g)),A=c?h:h[1];return m.position[A]=(c?1:-1)*(i?Bx:1),i||m.lookAt(t.copy(m.position).multiplyScalar(1.7)),m.scale.setScalar(p),m.renderOrder=1,m.visible=f,m.userData={scale:p,opacity:v,hover:_},m})},"we"),I3=u((n,e)=>{const{isSphere:t,corners:i}=n;if(!i.enabled)return[];const{color:s,opacity:r,scale:o,radius:a,smoothness:l,hover:c}=i,h=t?null:gp(a,l),d={transparent:!0,opacity:r},f=[1,1,1,-1,1,1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,-1,-1,-1,-1,-1].map(v=>v*.85),p=new D;return Array(f.length/3).fill(0).map((v,_)=>{if(t){const A=e.clone();mp(A,6),d.map=A}else d.color=s;const g=t?new ea(new Jr(d)):new St(h,new wn(d)),m=_*3;return g.position.set(f[m],f[m+1],f[m+2]),t&&g.position.normalize().multiplyScalar(1.7),g.scale.setScalar(o),g.lookAt(p.copy(g.position).multiplyScalar(2)),g.renderOrder=1,g.userData={color:s,opacity:r,scale:o,hover:c},g})},"Se"),L3=u((n,e,t)=>{const{isSphere:i,edges:s}=n;if(!s.enabled)return[];const{color:r,opacity:o,scale:a,hover:l,radius:c,smoothness:h}=s,d=i?null:gp(c,h,1.2,.25),f={transparent:!0,opacity:o},p=[0,1,1,0,-1,1,1,0,1,-1,0,1,0,1,-1,0,-1,-1,1,0,-1,-1,0,-1,1,1,0,1,-1,0,-1,1,0,-1,-1,0].map(_=>_*.925),v=new D;return Array(p.length/3).fill(0).map((_,g)=>{if(i){const S=e.clone();mp(S,t),f.map=S}else f.color=r;const m=i?new ea(new Jr(f)):new St(d,new wn(f)),A=g*3;return m.position.set(p[A],p[A+1],p[A+2]),i&&m.position.normalize().multiplyScalar(1.7),m.scale.setScalar(a),m.lookAt(v.copy(m.position).multiplyScalar(2)),!i&&!m.position.y&&(m.rotation.z=Math.PI/2),m.renderOrder=1,m.userData={color:r,opacity:o,scale:a,hover:l},m})},"xe");function N3(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Bt;let c=0;for(let h=0;h<n.length;++h){const d=n[h];let f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p])}if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0;const d=[];for(let f=0;f<n.length;++f){const p=n[f].index;for(let v=0;v<p.count;++v)d.push(p.getX(v)+h);h+=n[f].attributes.position.count}l.setIndex(d)}for(const h in r){const d=$v(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){const p=[];for(let _=0;_<o[h].length;++_)p.push(o[h][_][f]);const v=$v(p);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(v)}}return l}u(N3,"Ee");function $v(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){const h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new Nt(o,t,i);let l=0;for(let c=0;c<n.length;++c){const h=n[c];if(h.isInterleavedBufferAttribute){const d=l/t;for(let f=0,p=h.count;f<p;f++)for(let v=0;v<t;v++){const _=h.getComponent(f,v);a.setComponent(f+d,v,_)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}u($v,"Ut");const O3=u((n,e)=>{const{isSphere:t,background:{enabled:i,color:s,opacity:r,hover:o}}=e;let a;const l=new wn({color:s,side:_n,opacity:r,transparent:!0,depthWrite:!1});if(!i)return null;if(t)a=new St(new na(1.8,64,64),l);else{let c;n.forEach(h=>{const d=h.scale.x;h.scale.setScalar(.9),h.updateMatrix();const f=h.geometry.clone();f.applyMatrix4(h.matrix),c=c?N3([c,f]):f,h.scale.setScalar(d)}),a=new St(c,l)}return a.userData={color:s,opacity:r,hover:o},a},"Ae"),jv=new Dn,rl=new D,n0=class n0 extends Bd{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Ft(e,3)),this.setAttribute("uv",new Ft(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new oa(t,6,1);return this.setAttribute("instanceStart",new li(i,3,0)),this.setAttribute("instanceEnd",new li(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new oa(t,6,1);return this.setAttribute("instanceColorStart",new li(i,3,0)),this.setAttribute("instanceColorEnd",new li(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Sd(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),jv.setFromBufferAttribute(t),this.boundingBox.union(jv))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new In),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)rl.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(rl)),rl.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(rl));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}};u(n0,"Vt");let ac=n0;Se.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new xe(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Tn.line={uniforms:Ni.merge([Se.common,Se.fog,Se.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};const i0=class i0 extends Dt{constructor(e){super({type:"LineMaterial",uniforms:Ni.clone(Tn.line.uniforms),vertexShader:Tn.line.vertexShader,fragmentShader:Tn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}};u(i0,"yt");let ha=i0;const Xv=new D,Yv=new D,tn=new ot,nn=new ot,fi=new ot,ju=new D,Xu=new Ke,sn=new Hd,qv=new D,ol=new Dn,al=new In,pi=new ot;let vi,Js;function Kv(n,e,t){return pi.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),pi.multiplyScalar(1/pi.w),pi.x=Js/t.width,pi.y=Js/t.height,pi.applyMatrix4(n.projectionMatrixInverse),pi.multiplyScalar(1/pi.w),Math.abs(Math.max(pi.x,pi.y))}u(Kv,"Dt");function U3(n,e){const t=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,o=Math.min(i.instanceCount,s.count);for(let a=0,l=o;a<l;a++){sn.start.fromBufferAttribute(s,a),sn.end.fromBufferAttribute(r,a),sn.applyMatrix4(t);const c=new D,h=new D;vi.distanceSqToSegment(sn.start,sn.end,h,c),h.distanceTo(c)<Js*.5&&e.push({point:h,pointOnLine:c,distance:vi.origin.distanceTo(h),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}u(U3,"Me");function F3(n,e,t){const i=e.projectionMatrix,s=n.material.resolution,r=n.matrixWorld,o=n.geometry,a=o.attributes.instanceStart,l=o.attributes.instanceEnd,c=Math.min(o.instanceCount,a.count),h=-e.near;vi.at(1,fi),fi.w=1,fi.applyMatrix4(e.matrixWorldInverse),fi.applyMatrix4(i),fi.multiplyScalar(1/fi.w),fi.x*=s.x/2,fi.y*=s.y/2,fi.z=0,ju.copy(fi),Xu.multiplyMatrices(e.matrixWorldInverse,r);for(let d=0,f=c;d<f;d++){if(tn.fromBufferAttribute(a,d),nn.fromBufferAttribute(l,d),tn.w=1,nn.w=1,tn.applyMatrix4(Xu),nn.applyMatrix4(Xu),tn.z>h&&nn.z>h)continue;if(tn.z>h){const m=tn.z-nn.z,A=(tn.z-h)/m;tn.lerp(nn,A)}else if(nn.z>h){const m=nn.z-tn.z,A=(nn.z-h)/m;nn.lerp(tn,A)}tn.applyMatrix4(i),nn.applyMatrix4(i),tn.multiplyScalar(1/tn.w),nn.multiplyScalar(1/nn.w),tn.x*=s.x/2,tn.y*=s.y/2,nn.x*=s.x/2,nn.y*=s.y/2,sn.start.copy(tn),sn.start.z=0,sn.end.copy(nn),sn.end.z=0;const p=sn.closestPointToPointParameter(ju,!0);sn.at(p,qv);const v=rp.lerp(tn.z,nn.z,p),_=v>=-1&&v<=1,g=ju.distanceTo(qv)<Js*.5;if(_&&g){sn.start.fromBufferAttribute(a,d),sn.end.fromBufferAttribute(l,d),sn.start.applyMatrix4(r),sn.end.applyMatrix4(r);const m=new D,A=new D;vi.distanceSqToSegment(sn.start,sn.end,A,m),t.push({point:A,pointOnLine:m,distance:vi.origin.distanceTo(A),object:n,face:null,faceIndex:d,uv:null,uv1:null})}}}u(F3,"Te");const s0=class s0 extends St{constructor(e=new ac,t=new ha({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)Xv.fromBufferAttribute(t,o),Yv.fromBufferAttribute(i,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Xv.distanceTo(Yv);const r=new oa(s,2,1);return e.setAttribute("instanceDistanceStart",new li(r,1,0)),e.setAttribute("instanceDistanceEnd",new li(r,1,1)),this}raycast(e,t){const i=this.material.worldUnits,s=e.camera;s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;vi=e.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;Js=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),al.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=Js*.5;else{const d=Math.max(s.near,al.distanceToPoint(vi.origin));c=Kv(s,d,l.resolution)}if(al.radius+=c,vi.intersectsSphere(al)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),ol.copy(a.boundingBox).applyMatrix4(o);let h;if(i)h=Js*.5;else{const d=Math.max(s.near,ol.distanceToPoint(vi.origin));h=Kv(s,d,l.resolution)}ol.expandByScalar(h),vi.intersectsBox(ol)!==!1&&(i?U3(this,t):F3(this,s,t))}};u(s0,"Le");let wf=s0;const r0=class r0 extends ac{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,i=new Float32Array(2*t);for(let s=0;s<t;s+=3)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5];return super.setPositions(i),this}setColors(e){const t=e.length-3,i=new Float32Array(2*t);for(let s=0;s<t;s+=3)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5];return super.setColors(i),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}};u(r0,"Nt");let lc=r0;const o0=class o0 extends wf{constructor(e=new lc,t=new ha({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}};u(o0,"Ue");let Af=o0;const B3=u(n=>{const e=new De,t=[],i=[],{isSphere:s}=n;if(ua.forEach((a,l)=>{const{enabled:c,line:h,scale:d,color:f}=n[a];if(!c||!h)return;const p=l<3?1:-1,v=(s?Bx-d/2:.975)*p;t.push(a.includes("x")?v:0,a.includes("y")?v:0,a.includes("z")?v:0,0,0,0);const _=e.set(f).toArray();i.push(..._,..._)}),!t.length)return null;const r=new lc().setPositions(t).setColors(i),o=new ha({linewidth:n.lineWidth,vertexColors:!0,resolution:new xe(window.innerWidth,window.innerHeight)});return new Af(r,o).computeLineDistances()},"Be"),k3=u(n=>{const{corners:e,edges:t}=n,i=[],s=R3(n),r=D3(n,s);i.push(...r),e.enabled&&i.push(...I3(n,s)),t.enabled&&i.push(...L3(n,s,e.enabled?7:6));const o=O3(r,n),a=B3(n);return[i,o,a]},"ze"),_o=u((n,e=!0)=>{const{material:t,userData:i}=n,{opacity:s,color:r,scale:o}=e?i.hover:i;n.scale.setScalar(o),t.opacity=s,t.map?P3(t.map,e):t.color.set(r)},"X"),Pr=new Ke,z3=new eo,Zv=new D,V3=new xe,a0=class a0 extends Ct{constructor(e,t,i={}){super(),ft(this,"type","ViewportGizmo"),ft(this,"enabled",!0),ft(this,"camera"),ft(this,"renderer"),ft(this,"options"),ft(this,"target",new D),ft(this,"animated",!0),ft(this,"speed",1),ft(this,"animating",!1),ft(this,"_options"),ft(this,"_intersections"),ft(this,"_background",null),ft(this,"_viewport",new ot),ft(this,"_originalViewport",new ot),ft(this,"_originalScissor",new ot),ft(this,"_camera"),ft(this,"_container"),ft(this,"_domElement"),ft(this,"_domRect"),ft(this,"_dragging",!1),ft(this,"_distance",0),ft(this,"_clock",new ra),ft(this,"_targetPosition",new D),ft(this,"_targetQuaternion",new xn),ft(this,"_quaternionStart",new xn),ft(this,"_quaternionEnd",new xn),ft(this,"_pointerStart",new xe),ft(this,"_focus",null),ft(this,"_placement"),ft(this,"_controls"),ft(this,"_controlsListeners"),this.camera=e,this.renderer=t,this.set(i)}get placement(){return this._placement}set placement(e){this._placement=Ux(this._domElement,e),this.domUpdate()}set(e={}){this.dispose(),this.options=e,this._options=C3(e),this._camera=this._options.isSphere?new nr(-1.8,1.8,1.8,-1.8,5,10):new jt(26,1,5,10),this._camera.position.set(0,0,7);const[t,i,s]=k3(this._options);i&&this.add(i),s&&this.add(s),this.add(...t),this._background=i,this._intersections=t;const{container:r,animated:o,speed:a}=this._options;return this.animated=o,this.speed=a,this._container=r?S3(r):document.body,this._domElement=M3(this._options),this._domElement.onpointerdown=l=>this._onPointerDown(l),this._domElement.onpointermove=l=>this._onPointerMove(l),this._domElement.onpointerleave=()=>this._onPointerLeave(),this._container.appendChild(this._domElement),this._controls&&this.attachControls(this._controls),this.update(),this}render(){this.animating&&this._animate();const{renderer:e,_viewport:t}=this,i=e.getScissorTest(),s=e.autoClear;return e.autoClear=!1,e.setViewport(t),i&&e.setScissor(t),e.clear(!1,!0,!1),e.render(this,this._camera),e.setViewport(this._originalViewport),i&&e.setScissor(this._originalScissor),e.autoClear=s,this}domUpdate(){this._domRect=this._domElement.getBoundingClientRect();const e=this.renderer,t=this._domRect,i=e.domElement.getBoundingClientRect();return this._viewport.set(t.left-i.left,e.domElement.clientHeight-(t.top-i.top+t.height),t.width,t.height),e.getViewport(this._originalViewport),e.getScissorTest()&&e.getScissor(this._originalScissor),this}cameraUpdate(){return this._updateOrientation(),this}update(e=!0){return e&&this._controls&&this._controls.update(),this.domUpdate().cameraUpdate()}attachControls(e){return this.detachControls(),this.target=e.target,this._controlsListeners={start:()=>e.enabled=!1,end:()=>e.enabled=!0,change:()=>this.update(!1)},this.addEventListener("start",this._controlsListeners.start),this.addEventListener("end",this._controlsListeners.end),e.addEventListener("change",this._controlsListeners.change),this._controls=e,this}detachControls(){if(!(!this._controlsListeners||!this._controls))return this.target=new D().copy(this._controls.target),this.removeEventListener("start",this._controlsListeners.start),this.removeEventListener("end",this._controlsListeners.end),this._controls.removeEventListener("change",this._controlsListeners.change),this._controlsListeners=void 0,this._controls=void 0,this}dispose(){var e;this.detachControls(),this.children.forEach(t=>{var i,s,r,o;this.remove(t);const a=t;(i=a.material)==null||i.dispose(),(r=(s=a.material)==null?void 0:s.map)==null||r.dispose(),(o=a.geometry)==null||o.dispose()}),(e=this._domElement)==null||e.remove()}_updateOrientation(e=!0){e&&(this.quaternion.copy(this.camera.quaternion).invert(),this.updateMatrixWorld()),zv(this._options,this._intersections,this.camera)}_animate(){const{position:e,quaternion:t}=this.camera;if(e.set(0,0,1),!this.animated){e.applyQuaternion(this._quaternionEnd).multiplyScalar(this._distance).add(this.target),t.copy(this._targetQuaternion),this._updateOrientation(),this.animating=!1,this.dispatchEvent({type:"change"}),this.dispatchEvent({type:"end"});return}const i=this._clock.getDelta()*w3*this.speed;this._quaternionStart.rotateTowards(this._quaternionEnd,i),e.applyQuaternion(this._quaternionStart).multiplyScalar(this._distance).add(this.target),t.rotateTowards(this._targetQuaternion,i),this._updateOrientation(),requestAnimationFrame(()=>this.dispatchEvent({type:"change"})),this._quaternionStart.angleTo(this._quaternionEnd)<$u&&(this.animating=!1,this.dispatchEvent({type:"end"}))}_setOrientation(e){const t=this.camera,i=this.target;this._targetPosition.copy(e).multiplyScalar(this._distance),Pr.setPosition(this._targetPosition).lookAt(this._targetPosition,this.position,this.up),this._targetQuaternion.setFromRotationMatrix(Pr),this._targetPosition.add(i),Pr.lookAt(this._targetPosition,i,this.up),this._quaternionEnd.setFromRotationMatrix(Pr),Pr.setPosition(t.position).lookAt(t.position,i,this.up),this._quaternionStart.setFromRotationMatrix(Pr),this.animating=!0,this._clock.start(),this.dispatchEvent({type:"start"})}_onPointerDown(e){if(!this.enabled)return;const t=u(a=>{if(!this._dragging){if(T3(a,this._pointerStart))return;this._dragging=!0}const l=V3.set(a.clientX,a.clientY).sub(this._pointerStart).multiplyScalar(1/this._domRect.width*Math.PI),c=z3.setFromVector3(Zv.subVectors(this.camera.position,this.target));c.theta=r-l.x,c.phi=Ef(o-l.y,$u,Math.PI-$u),this.camera.position.setFromSpherical(c).add(this.target),this.camera.lookAt(this.target),this.quaternion.copy(this.camera.quaternion).invert(),this._updateOrientation(!1),this.dispatchEvent({type:"change"})},"n"),i=u(()=>{if(document.removeEventListener("pointermove",t,!1),document.removeEventListener("pointerup",i,!1),!this._dragging)return this._handleClick(e);this._focus&&(_o(this._focus,!1),this._focus=null),this._dragging=!1,this.dispatchEvent({type:"end"})},"i");if(this.animating)return;e.preventDefault(),this._pointerStart.set(e.clientX,e.clientY);const s=new eo().setFromVector3(Zv.subVectors(this.camera.position,this.target)),r=s.theta,o=s.phi;this._distance=s.radius,document.addEventListener("pointermove",t,!1),document.addEventListener("pointerup",i,!1),this.dispatchEvent({type:"start"})}_onPointerMove(e){!this.enabled||this._dragging||(this._background&&Wv(this._background,!0),this._handleHover(e))}_onPointerLeave(){!this.enabled||this._dragging||(this._background&&Wv(this._background,!1),this._focus&&_o(this._focus,!1),this._domElement.style.cursor="")}_handleClick(e){const t=Gv(e,this._domRect,this._camera,this._intersections);this._focus&&(_o(this._focus,!1),this._focus=null),t&&(this._setOrientation(t.object.position),this.dispatchEvent({type:"change"}))}_handleHover(e){const t=Gv(e,this._domRect,this._camera,this._intersections),i=(t==null?void 0:t.object)||null;this._focus!==i&&(this._domElement.style.cursor=i?"pointer":"",this._focus&&_o(this._focus,!1),(this._focus=i)?_o(i,!0):zv(this._options,this._intersections,this.camera))}};u(a0,"Re");let Cf=a0;const H3=.01,Ci=1e3,l0=class l0{constructor(e,t){ue(this,"canvas");ue(this,"canvasContainer");ue(this,"canvasObserver");ue(this,"renderer");ue(this,"scene");ue(this,"camera");ue(this,"controls");ue(this,"clock");ue(this,"grid10");ue(this,"grid40");ue(this,"lineX");ue(this,"lineZ");ue(this,"ghostLight",new sa(16777215,10,1e4,.25));ue(this,"nGhostLight",new sa(16773360,2,1e4,.25));ue(this,"ambientLight",new Ql(16777215,.5));ue(this,"clickableObjects",[]);ue(this,"isMouseDown",[!1,!1,!1,!1]);ue(this,"isDragging",[!1,!1,!1,!1]);ue(this,"mouseDownPosition",[[0,0],[0,0],[0,0],[0,0]]);ue(this,"lastMeshIntersect");ue(this,"effectComposter");ue(this,"renderPass");ue(this,"outlinePass");ue(this,"fxaaPass");ue(this,"ssaoPass");ue(this,"topLevel");ue(this,"lastMouseMove");ue(this,"isDraggingObject",!1);ue(this,"pressed",new Set);ue(this,"flySpeed",1);ue(this,"gizmo");ue(this,"isLooking",!1);ue(this,"actions",[]);ue(this,"createEvents",u(()=>{this.canvasContainer.addEventListener("mousemove",this.handleMouseMove),this.canvasContainer.addEventListener("mousedown",this.handleMouseDown),this.canvasContainer.addEventListener("mouseup",this.handleMouseUp),document.addEventListener("keyup",this.handleKeyUp),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keypress",this.handleKeyPress),window.addEventListener("blur",this.handleBlur),window.addEventListener("wheel",this.handleWheel),this.canvas.addEventListener("contextmenu",this.handleContextMenu)},"createEvents"));ue(this,"clearEvents",u(()=>{this.canvasContainer.removeEventListener("mousemove",this.handleMouseMove),this.canvasContainer.removeEventListener("mousedown",this.handleMouseDown),this.canvasContainer.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener("keyup",this.handleKeyUp),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keypress",this.handleKeyPress),window.removeEventListener("blur",this.handleBlur),window.removeEventListener("wheel",this.handleWheel),this.canvas.removeEventListener("contextmenu",this.handleContextMenu)},"clearEvents"));ue(this,"pushAction",u(e=>{var t,i;this.actions.length===10&&((i=(t=this.actions.shift())==null?void 0:t.out)==null||i.call(t)),this.actions.push(e)},"pushAction"));ue(this,"update",u(()=>{this.clock.getDelta(),this.controls.enabled=!1,this.controls.enabled=this.shouldControlsBeOn(),this.controls.enablePan=!this.isLooking,this.controls.enableZoom=!this.isLooking;let e=new D;const t=this.camera.matrixWorld.toArray();let i=new D(t[0],t[1],t[2]).normalize();this.camera.getWorldDirection(e);const s=e.clone();e=e.multiplyScalar(this.flySpeed),i=i.multiplyScalar(this.flySpeed);let r=!1;if(this.pressed.has("w")&&this.isLooking?(this.camera.position.add(e),r=!0):this.pressed.has("s")&&this.isLooking&&(this.camera.position.sub(e),r=!0),this.pressed.has("d")&&this.isLooking?(this.camera.position.add(i),r=!0):this.pressed.has("a")&&this.isLooking&&(this.camera.position.sub(i),r=!0),r&&(this.controls.target=this.camera.position.clone().add(s.multiplyScalar(100))),this.lastMouseMove){let o=this.intersectObject(this.lastMouseMove.offsetX,this.lastMouseMove.offsetY);this.clickableObjects.forEach(l=>{o?l instanceof ui&&l!==o.object&&(l.hover&&l.invokeHoverOutEvent(this.lastMouseMove),l.hover=!1):(l instanceof ui&&l.hover&&l.invokeHoverOutEvent(this.lastMouseMove),l.hover=!1)});const a=this.lastMouseMove;a.intersect=o,o&&o.object instanceof ui&&(o.object.hover=!0,o.object.invokeHoverEvent(a))}this.isLooking||this.controls.update(),tt.INSTANCE.update(this.camera),tt.INSTANCE.scene.visible=!1,this.renderer.clearDepth(),this.effectComposter.render(),this.renderer.clearDepth(),this.renderer.autoClear=!1,tt.INSTANCE.scene.visible=tt.INSTANCE.scene.userData.visible,this.renderer.render(this.topLevel,this.camera),tt.INSTANCE.scene.visible=!1,this.renderer.autoClear=!0,this.isLooking||(this.gizmo.update(),this.gizmo.render()),requestAnimationFrame(this.update)},"update"));ue(this,"selectObjects",u(e=>{e.forEach(t=>{t.selected||t.select(),tt.INSTANCE.selectedObjects.includes(t)||tt.INSTANCE.selectedObjects.push(t)}),this.outlinePass&&(this.outlinePass.selectedObjects=tt.INSTANCE.selectedObjects)},"selectObjects"));ue(this,"clipboard",[]);ue(this,"copy",u(()=>{this.clipboard=[],tt.INSTANCE.selectedObjects.forEach(e=>{this.clipboard.includes(e)||this.clipboard.push(e)})},"copy"));ue(this,"paste",u(()=>{this.unselectAll(),this.clipboard.forEach(e=>{const t=e.clone();this.scene.add(t),this.clickableObjects.push(t),tt.INSTANCE.selectedObjects.push(t),t.select(),K.pushAction({in:()=>(this.deleteObjects([t]),!1)})}),this.outlinePass&&(this.outlinePass.selectedObjects=tt.INSTANCE.selectedObjects)},"paste"));ue(this,"undo",u(()=>{var t;const e=this.actions.pop();e&&e.in()&&((t=e.out)==null||t.call(e))},"undo"));ue(this,"deleteObjects",u(e=>{const t=[];e.forEach(i=>{t.push(i),i.destoy()}),t.forEach(i=>{const s=this.clickableObjects.indexOf(i),r=tt.INSTANCE.selectedObjects.indexOf(i);s>-1&&this.clickableObjects.splice(s,1),r>-1&&tt.INSTANCE.selectedObjects.splice(r,1)}),this.outlinePass&&(this.outlinePass.selectedObjects=tt.INSTANCE.selectedObjects)},"deleteObjects"));ue(this,"shouldControlsBeOn",u(()=>!this.pressed.has("Control")&&!this.pressed.has("Alt")&&!this.isDraggingObject,"shouldControlsBeOn"));ue(this,"handleWheel",u(e=>{this.isLooking&&(e.deltaY>0?this.flySpeed/=1.1:e.deltaY<0&&(this.flySpeed*=1.1))},"handleWheel"));ue(this,"handleBlur",u(()=>{this.pressed.clear(),this.isMouseDown=[!1,!1,!1,!1],this.isDraggingObject=!1,this.isDragging=[!1,!1,!1,!1],K.isMouseDown=this.isMouseDown},"handleBlur"));ue(this,"handleContextMenu",u(e=>{e.preventDefault()},"handleContextMenu"));ue(this,"handleKeyPress",u(e=>{},"handleKeyPress"));ue(this,"handleKeyDown",u(e=>{this.pressed.add(e.key),e.key==="Tab"&&e.preventDefault()},"handleKeyDown"));ue(this,"handleKeyUp",u(e=>{if(this.pressed.delete(e.key),e.ctrlKey&&e.preventDefault(),e.code==="Delete"){const t=[];tt.INSTANCE.selectedObjects.forEach(i=>{t.push(i),i.userData.parent=i.parent,i.removeFromParent()}),t.forEach(i=>{const s=this.clickableObjects.indexOf(i),r=tt.INSTANCE.selectedObjects.indexOf(i);i.unselect(),s>-1?(this.clickableObjects.splice(s,1),i.userData.clickable=!0):i.userData.clickable=!1,r>-1&&tt.INSTANCE.selectedObjects.splice(r,1)}),K.pushAction({in:()=>(t.forEach(i=>{var s;(s=i.userData.parent)==null||s.add(i),i.userData.clickable&&this.clickableObjects.push(i)}),!1),out:()=>{t.forEach(i=>{i.destoy()})}})}e.code==="KeyV"&&e.ctrlKey&&this.paste(),e.code==="KeyC"&&e.ctrlKey&&this.copy(),e.code==="KeyZ"&&e.ctrlKey&&this.undo(),e.key==="Tab"&&K.setCurrentMode(K.currentMode==="object"?"sculpt":"object"),e.code==="KeyT"&&K.currentMode==="object"&&(K.objectModeState="move"),e.code==="KeyR"&&K.currentMode==="object"&&(K.objectModeState="rotate"),e.code==="KeyG"&&K.currentMode==="object"&&(K.objectModeState="scale"),e.code==="KeyF"&&K.currentMode==="object"&&(K.objectModeState="select")},"handleKeyUp"));ue(this,"intersectObject",u((e,t)=>{const i=new aa,s=new xe;s.x=e/this.canvas.clientWidth*2-1,s.y=-(t/this.canvas.clientHeight)*2+1,i.setFromCamera(s,this.camera),i.far=1e3,i.near=1e-7;const r=i.intersectObjects(this.clickableObjects,!0).reverse();let o=r[0];for(const a of r)if(!a.object.disableMouseEvents){if(a.object.draggable){o=a;break}o=a,o.object.userData.meshObject&&(o.object=o.object.userData.meshObject)}return o},"intersectObject"));ue(this,"handleMouseDown",u(e=>{this.isMouseDown[e.button]=!0,K.isMouseDown[e.button]=!0,this.mouseDownPosition[e.button]=[e.offsetX,e.offsetY];const t=e;let i=this.intersectObject(e.offsetX,e.offsetY);if(!i){this.lastMeshIntersect=void 0;return}t.intersect=i,this.lastMeshIntersect=t,this.lastMeshIntersect.isFirstMovement=!0;const s=i.object;s.invokeMouseDownEvent(t),s.draggable&&(this.isDraggingObject=!0)},"handleMouseDown"));ue(this,"handleMouseUp",u(e=>{var t;if(this.isLooking,this.isLooking=!1,!this.isDragging[e.button]){const i=(t=this.lastMeshIntersect)==null?void 0:t.intersect.object;if(i&&!i.disableMouseEvents){if(i==null||i.invokeClickEvent(this.lastMeshIntersect),!i.internal&&K.currentMode==="object"){if(e.shiftKey||this.unselectAll(),!i.selected)i.select(),tt.INSTANCE.selectedObjects.push(i);else if(e.shiftKey){i.unselect();let s=tt.INSTANCE.selectedObjects.indexOf(i);s!==-1&&tt.INSTANCE.selectedObjects.splice(s,1)}this.outlinePass&&(this.outlinePass.selectedObjects=tt.INSTANCE.selectedObjects)}}else this.unselectAll()}this.isMouseDown[e.button]=!1,K.isMouseDown[e.button]=!1,this.isDragging[e.button]=!1,this.isDraggingObject=!1,this.controls.enabled=this.shouldControlsBeOn()},"handleMouseUp"));ue(this,"handleMouseMove",u(e=>{if(this.lastMouseMove=e,this.controls.enabled&&this.isMouseDown[2]){this.isLooking,this.isLooking=!0,this.camera.rotation.reorder("YXZ"),this.camera.rotation.y-=e.movementX*.01,this.camera.rotation.x-=e.movementY*.01,this.camera.rotation.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,this.camera.rotation.x));const t=new D;this.camera.getWorldDirection(t),this.controls.target=this.camera.position.clone().add(t.multiplyScalar(100))}for(let t=0;t<this.isMouseDown.length;t++)if(this.isMouseDown[t]&&(this.isDragging[t]=!0,this.lastMeshIntersect&&this.lastMeshIntersect.intersect.object&&!this.lastMeshIntersect.intersect.object.disableMouseEvents)){const i=new $n,s=new $n;let r=new D;this.camera.getWorldDirection(r),r.y=0,i.setFromNormalAndCoplanarPoint(new D(0,1,0),this.lastMeshIntersect.intersect.point),s.setFromNormalAndCoplanarPoint(r,this.lastMeshIntersect.intersect.point);const o=new aa,a=new xe,l=new xe;a.x=e.offsetX/this.canvas.clientWidth*2-1,a.y=-(e.offsetY/this.canvas.clientHeight)*2+1,l.x=(e.offsetX-e.movementX)/this.canvas.clientWidth*2-1,l.y=-((e.offsetY-e.movementY)/this.canvas.clientHeight)*2+1,o.setFromCamera(a,this.camera);const c=new D,h=new D,d=new D,f=new D;o.ray.intersectPlane(i,c),o.ray.intersectPlane(s,h),o.setFromCamera(l,this.camera),o.ray.intersectPlane(i,d),o.ray.intersectPlane(s,f);const p=e;p.movement3dOriginXZ=d,p.movement3dOriginY=f,p.movement3dStart=this.lastMeshIntersect.intersect.point,p.isFirstMovement=this.lastMeshIntersect.isFirstMovement,p.intersect=this.lastMeshIntersect.intersect;const v=p.intersect.object;let _=new D(e.movementX,-e.movementY,.5);_=_.unproject(this.camera),_=_.sub(this.camera.position).normalize(),p.movement3dXZ=c,p.movement3dY=h,v.invokeDragEvent(p),this.lastMeshIntersect.isFirstMovement=!1}},"handleMouseMove"));ue(this,"handleResize",u(()=>{var i;this.canvas.style.width="100%",this.canvas.style.height="100%";const e=this.canvas.clientWidth,t=this.canvas.clientHeight;this.canvas.width=e,this.canvas.height=t,this.renderer.setSize(e,t),this.camera.aspect=e/t,this.effectComposter.setSize(e,t),(i=this.outlinePass)==null||i.setSize(e,t),this.fxaaPass&&this.fxaaPass.uniforms.resolution.value.set(1/this.canvas.width,1/this.canvas.height),this.ssaoPass&&(this.ssaoPass.resolution=new xe(this.canvas.width,this.canvas.height)),this.camera.updateProjectionMatrix()},"handleResize"));ue(this,"createPostProccess",u(()=>{this.outlinePass=new ca(new xe(this.canvas.width,this.canvas.height),this.scene,this.camera,tt.INSTANCE.selectedObjects),this.outlinePass.edgeGlow=0,this.fxaaPass=new ic(r2),this.fxaaPass.uniforms.resolution.value.set(1/this.canvas.width,1/this.canvas.height),this.ssaoPass=new oc(this.scene,this.camera,new xe(this.canvas.width,this.canvas.height)),this.ssaoPass.params.saoBias=.5,this.ssaoPass.params.saoIntensity=.002,this.ssaoPass.params.saoScale=10,this.ssaoPass.params.saoKernelRadius=16,this.ssaoPass.params.saoMinResolution=0,this.effectComposter.addPass(this.outlinePass),this.effectComposter.addPass(this.fxaaPass),this.effectComposter.addPass(this.ssaoPass)},"createPostProccess"));ue(this,"createControlMeshes",u(()=>{this.scene.add(tt.INSTANCE.scene),this.topLevel.add(tt.INSTANCE.scene),tt.INSTANCE.setVisible(!1),this.clickableObjects.push(tt.INSTANCE.scene)},"createControlMeshes"));ue(this,"createGrid",u(()=>{const e=new _i;this.scene.add(e),this.scene.fog=new md(new De(.13,.13,.13),.01,1e3),this.grid10=new ec(Ci*10,Ci-1,new De(3355443),new De(3355443)),this.grid40=new ec(Ci*10,(Ci-1)/4,new De(10987431),new De(10987431)),this.grid10.material.depthWrite=!1,this.grid40.material.depthWrite=!1,this.grid10.material.opacity=.5,this.grid40.material.opacity=.5,this.grid10.position.add(new D(-5,0,-5)),this.grid40.position.add(new D(-5,0,-5)),this.lineX=new sr(new Bt().setFromPoints([new D(-Ci*10,0,0),new D(Ci*10,0,0)]),new ir({color:16711680,depthWrite:!1})),this.lineZ=new sr(new Bt().setFromPoints([new D(0,0,-Ci*10),new D(0,0,Ci*10)]),new ir({color:255,depthWrite:!1})),this.renderer.setClearColor(new De(K.clearColor)),e.add(this.grid10),e.add(this.grid40),e.add(this.lineX),e.add(this.lineZ),K.setGridActive=t=>{e.visible=t,K.gridActive=t},K.setCurrentMode=t=>{K.currentMode=t,t!=="object"&&this.unselectAll()},this.ghostLight.position.set(1100,1e3,900),this.nGhostLight.position.set(-900,-1e3,-1100),this.scene.add(this.ghostLight),this.scene.add(this.nGhostLight),this.scene.add(this.ambientLight),this.test()},"createGrid"));ue(this,"test",u(()=>{const e=new ps;e.min=new D(-20,-20,-20),e.max=new D(20,20,20),e.draw(new D,"square",5,1),this.clickableObjects.push(e),this.scene.add(e)},"test"));ue(this,"destroy",u(()=>{this.canvasObserver.disconnect(),this.clearEvents()},"destroy"));window.renderingContext=this,K.renderingContextProxy=this,K.pushAction=this.pushAction,this.canvas=e,this.canvasContainer=t,this.renderer=new Hl({antialias:!0,canvas:e}),this.effectComposter=new bf(this.renderer),this.scene=new Gl,this.scene.userData.isRootScene=!0,this.topLevel=new Gl,this.topLevel.add(new Ql(16777215,1)),this.camera=new jt(70,1,H3,Ci),this.renderPass=new Mf(this.scene,this.camera),this.effectComposter.addPass(this.renderPass),this.camera.position.set(100,100,100),this.controls=new $d(this.camera,e),this.gizmo=new Cf(this.camera,this.renderer,{placement:"bottom-right",container:this.canvasContainer,size:128}),this.gizmo.attachControls(this.controls),this.clock=new ra(!0),this.handleResize(),this.createEvents(),this.canvasObserver=new ResizeObserver(this.handleResize),this.canvasObserver.observe(t),this.createGrid(),this.createControlMeshes(),this.createPostProccess(),setTimeout(this.handleResize,100),this.update()}unselectAll(){tt.INSTANCE.setVisible(!1),tt.INSTANCE.selectedObjects.forEach(e=>{e.unselect()}),tt.INSTANCE.selectedObjects=[],this.outlinePass&&(this.outlinePass.selectedObjects=tt.INSTANCE.selectedObjects)}};u(l0,"RenderingContext");let Rf=l0,Jv;const G3=Mt({mounted(){const n=document.getElementById("editor-canvas"),e=document.getElementById("canvas-container");n!=null&&(Jv=new Rf(n,e))},deactivated(){Jv.destroy()}}),W3=u(n=>(Zn("data-v-52bfad35"),n=n(),Jn(),n),"_withScopeId"),$3={id:"canvas-container"},j3=W3(()=>U("canvas",{id:"editor-canvas"},null,-1)),X3=[j3];function Y3(n,e,t,i,s,r){return he(),Ee("div",$3,X3)}u(Y3,"_sfc_render$2");const q3=Qt(G3,[["render",Y3],["__scopeId","data-v-52bfad35"]]),K3=Mt({components:{MenuBar:N2,PropertiesEditor:BR,AssetBrowser:$D,ModeBar:KI,ToolBar:a3,TransformBar:x3,CanvasEditor:q3}}),Z3={class:"page"},J3={class:"page-row"},Q3={class:"page-content"},eL={class:"canvas-container"};function tL(n,e,t,i,s,r){const o=Ut("MenuBar"),a=Ut("ModeBar"),l=Ut("ToolBar"),c=Ut("TransformBar"),h=Ut("CanvasEditor"),d=Ut("AssetBrowser"),f=Ut("PropertiesEditor");return he(),Ee("div",Z3,[Ue(o),U("div",J3,[U("div",Q3,[Ue(a),U("div",eL,[Ue(l),Ue(c),Ue(h)]),Ue(d)]),U("div",null,[Ue(f)])])])}u(tL,"_sfc_render$1");const nL=Qt(K3,[["render",tL],["__scopeId","data-v-485dc7cf"]]),vp=Mt({components:{Editor:nL},data(){return{state:K}}}),Qv=u(()=>{Uc(n=>({"16b1bdc4":n.state.cursorShape}))},"__injectCSSVars__"),e_=vp.setup;vp.setup=e_?(n,e)=>(Qv(),e_(n,e)):Qv;function iL(n,e,t,i,s,r){const o=Ut("Editor");return he(),ct(o)}u(iL,"_sfc_render");const sL=Qt(vp,[["render",iL],["__scopeId","data-v-8d8ace25"]]);sessionStorage.clear();nx();nx("classes");fM(sL).mount("#app");
