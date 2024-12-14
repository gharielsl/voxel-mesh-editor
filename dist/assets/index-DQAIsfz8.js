var Wm=Object.defineProperty;var jm=(n,e,t)=>e in n?Wm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ce=(n,e,t)=>(jm(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function du(n,e){const t=new Set(n.split(","));return i=>t.has(i)}const ft={},Ys=[],Cn=()=>{},Xm=()=>!1,Aa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),fu=n=>n.startsWith("onUpdate:"),Tt=Object.assign,pu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},$m=Object.prototype.hasOwnProperty,et=(n,e)=>$m.call(n,e),Fe=Array.isArray,Ks=n=>wa(n)==="[object Map]",Hf=n=>wa(n)==="[object Set]",Ge=n=>typeof n=="function",At=n=>typeof n=="string",Ts=n=>typeof n=="symbol",vt=n=>n!==null&&typeof n=="object",Gf=n=>(vt(n)||Ge(n))&&Ge(n.then)&&Ge(n.catch),Wf=Object.prototype.toString,wa=n=>Wf.call(n),Ym=n=>wa(n).slice(8,-1),jf=n=>wa(n)==="[object Object]",mu=n=>At(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Br=du(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ca=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Km=/-(\w)/g,Zn=Ca(n=>n.replace(Km,(e,t)=>t?t.toUpperCase():"")),qm=/\B([A-Z])/g,As=Ca(n=>n.replace(qm,"-$1").toLowerCase()),Ra=Ca(n=>n.charAt(0).toUpperCase()+n.slice(1)),el=Ca(n=>n?`on${Ra(n)}`:""),Yi=(n,e)=>!Object.is(n,e),tl=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Xf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Zm=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Jm=n=>{const e=At(n)?Number(n):NaN;return isNaN(e)?n:e};let mh;const $f=()=>mh||(mh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ut(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=At(i)?ng(i):Ut(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(At(n)||vt(n))return n}const Qm=/;(?![^(]*\))/g,eg=/:([^]+)/,tg=/\/\*[^]*?\*\//g;function ng(n){const e={};return n.replace(tg,"").split(Qm).forEach(t=>{if(t){const i=t.split(eg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function zt(n){let e="";if(At(n))e=n;else if(Fe(n))for(let t=0;t<n.length;t++){const i=zt(n[t]);i&&(e+=i+" ")}else if(vt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const ig="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sg=du(ig);function Yf(n){return!!n||n===""}const wn=n=>At(n)?n:n==null?"":Fe(n)||vt(n)&&(n.toString===Wf||!Ge(n.toString))?JSON.stringify(n,Kf,2):String(n),Kf=(n,e)=>e&&e.__v_isRef?Kf(n,e.value):Ks(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[nl(i,r)+" =>"]=s,t),{})}:Hf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>nl(t))}:Ts(e)?nl(e):vt(e)&&!Fe(e)&&!jf(e)?String(e):e,nl=(n,e="")=>{var t;return Ts(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let On;class rg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=On,!e&&On&&(this.index=(On.scopes||(On.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=On;try{return On=this,e()}finally{On=t}}}on(){On=this}off(){On=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function og(n,e=On){e&&e.active&&e.effects.push(n)}function ag(){return On}let Ms;class gu{constructor(e,t,i,s){this.fn=e,this.trigger=t,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,og(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Zi();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(lg(t.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Ji()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=ji,t=Ms;try{return ji=!0,Ms=this,this._runnings++,gh(this),this.fn()}finally{_h(this),this._runnings--,Ms=t,ji=e}}stop(){this.active&&(gh(this),_h(this),this.onStop&&this.onStop(),this.active=!1)}}function lg(n){return n.value}function gh(n){n._trackId++,n._depsLength=0}function _h(n){if(n.deps.length>n._depsLength){for(let e=n._depsLength;e<n.deps.length;e++)qf(n.deps[e],n);n.deps.length=n._depsLength}}function qf(n,e){const t=n.get(e);t!==void 0&&e._trackId!==t&&(n.delete(e),n.size===0&&n.cleanup())}let ji=!0,Ql=0;const Zf=[];function Zi(){Zf.push(ji),ji=!1}function Ji(){const n=Zf.pop();ji=n===void 0?!0:n}function _u(){Ql++}function vu(){for(Ql--;!Ql&&ec.length;)ec.shift()()}function Jf(n,e,t){if(e.get(n)!==n._trackId){e.set(n,n._trackId);const i=n.deps[n._depsLength];i!==e?(i&&qf(i,n),n.deps[n._depsLength++]=e):n._depsLength++}}const ec=[];function Qf(n,e,t){_u();for(const i of n.keys()){let s;i._dirtyLevel<e&&(s??(s=n.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=e),i._shouldSchedule&&(s??(s=n.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&ec.push(i.scheduler)))}vu()}const ep=(n,e)=>{const t=new Map;return t.cleanup=n,t.computed=e,t},tc=new WeakMap,ys=Symbol(""),nc=Symbol("");function mn(n,e,t){if(ji&&Ms){let i=tc.get(n);i||tc.set(n,i=new Map);let s=i.get(t);s||i.set(t,s=ep(()=>i.delete(t))),Jf(Ms,s)}}function _i(n,e,t,i,s,r){const o=tc.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Fe(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!Ts(u)&&u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Fe(n)?mu(t)&&a.push(o.get("length")):(a.push(o.get(ys)),Ks(n)&&a.push(o.get(nc)));break;case"delete":Fe(n)||(a.push(o.get(ys)),Ks(n)&&a.push(o.get(nc)));break;case"set":Ks(n)&&a.push(o.get(ys));break}_u();for(const l of a)l&&Qf(l,4);vu()}const cg=du("__proto__,__v_isRef,__isVue"),tp=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ts)),vh=ug();function ug(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=at(this);for(let r=0,o=this.length;r<o;r++)mn(i,"get",r+"");const s=i[e](...t);return s===-1||s===!1?i[e](...t.map(at)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Zi(),_u();const i=at(this)[e].apply(this,t);return vu(),Ji(),i}}),n}function hg(n){Ts(n)||(n=String(n));const e=at(this);return mn(e,"has",n),e.hasOwnProperty(n)}class np{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Eg:op:r?rp:sp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Fe(e);if(!s){if(o&&et(vh,t))return Reflect.get(vh,t,i);if(t==="hasOwnProperty")return hg}const a=Reflect.get(e,t,i);return(Ts(t)?tp.has(t):cg(t))||(s||mn(e,"get",t),r)?a:gn(a)?o&&mu(t)?a:a.value:vt(a)?s?ap(a):Ia(a):a}}class ip extends np{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=qr(r);if(!ua(i)&&!qr(i)&&(r=at(r),i=at(i)),!Fe(e)&&gn(r)&&!gn(i))return l?!1:(r.value=i,!0)}const o=Fe(e)&&mu(t)?Number(t)<e.length:et(e,t),a=Reflect.set(e,t,i,s);return e===at(s)&&(o?Yi(i,r)&&_i(e,"set",t,i):_i(e,"add",t,i)),a}deleteProperty(e,t){const i=et(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&_i(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Ts(t)||!tp.has(t))&&mn(e,"has",t),i}ownKeys(e){return mn(e,"iterate",Fe(e)?"length":ys),Reflect.ownKeys(e)}}class dg extends np{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const fg=new ip,pg=new dg,mg=new ip(!0);const xu=n=>n,Pa=n=>Reflect.getPrototypeOf(n);function mo(n,e,t=!1,i=!1){n=n.__v_raw;const s=at(n),r=at(e);t||(Yi(e,r)&&mn(s,"get",e),mn(s,"get",r));const{has:o}=Pa(s),a=i?xu:t?Su:Zr;if(o.call(s,e))return a(n.get(e));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(e)}function go(n,e=!1){const t=this.__v_raw,i=at(t),s=at(n);return e||(Yi(n,s)&&mn(i,"has",n),mn(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function _o(n,e=!1){return n=n.__v_raw,!e&&mn(at(n),"iterate",ys),Reflect.get(n,"size",n)}function xh(n){n=at(n);const e=at(this);return Pa(e).has.call(e,n)||(e.add(n),_i(e,"add",n,n)),this}function Mh(n,e){e=at(e);const t=at(this),{has:i,get:s}=Pa(t);let r=i.call(t,n);r||(n=at(n),r=i.call(t,n));const o=s.call(t,n);return t.set(n,e),r?Yi(e,o)&&_i(t,"set",n,e):_i(t,"add",n,e),this}function yh(n){const e=at(this),{has:t,get:i}=Pa(e);let s=t.call(e,n);s||(n=at(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&_i(e,"delete",n,void 0),r}function Sh(){const n=at(this),e=n.size!==0,t=n.clear();return e&&_i(n,"clear",void 0,void 0),t}function vo(n,e){return function(i,s){const r=this,o=r.__v_raw,a=at(o),l=e?xu:n?Su:Zr;return!n&&mn(a,"iterate",ys),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function xo(n,e,t){return function(...i){const s=this.__v_raw,r=at(s),o=Ks(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?xu:e?Su:Zr;return!e&&mn(r,"iterate",l?nc:ys),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Ei(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function gg(){const n={get(r){return mo(this,r)},get size(){return _o(this)},has:go,add:xh,set:Mh,delete:yh,clear:Sh,forEach:vo(!1,!1)},e={get(r){return mo(this,r,!1,!0)},get size(){return _o(this)},has:go,add:xh,set:Mh,delete:yh,clear:Sh,forEach:vo(!1,!0)},t={get(r){return mo(this,r,!0)},get size(){return _o(this,!0)},has(r){return go.call(this,r,!0)},add:Ei("add"),set:Ei("set"),delete:Ei("delete"),clear:Ei("clear"),forEach:vo(!0,!1)},i={get(r){return mo(this,r,!0,!0)},get size(){return _o(this,!0)},has(r){return go.call(this,r,!0)},add:Ei("add"),set:Ei("set"),delete:Ei("delete"),clear:Ei("clear"),forEach:vo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=xo(r,!1,!1),t[r]=xo(r,!0,!1),e[r]=xo(r,!1,!0),i[r]=xo(r,!0,!0)}),[n,t,e,i]}const[_g,vg,xg,Mg]=gg();function Mu(n,e){const t=e?n?Mg:xg:n?vg:_g;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(et(t,s)&&s in i?t:i,s,r)}const yg={get:Mu(!1,!1)},Sg={get:Mu(!1,!0)},bg={get:Mu(!0,!1)};const sp=new WeakMap,rp=new WeakMap,op=new WeakMap,Eg=new WeakMap;function Tg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ag(n){return n.__v_skip||!Object.isExtensible(n)?0:Tg(Ym(n))}function Ia(n){return qr(n)?n:yu(n,!1,fg,yg,sp)}function wg(n){return yu(n,!1,mg,Sg,rp)}function ap(n){return yu(n,!0,pg,bg,op)}function yu(n,e,t,i,s){if(!vt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=Ag(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function zr(n){return qr(n)?zr(n.__v_raw):!!(n&&n.__v_isReactive)}function qr(n){return!!(n&&n.__v_isReadonly)}function ua(n){return!!(n&&n.__v_isShallow)}function lp(n){return n?!!n.__v_raw:!1}function at(n){const e=n&&n.__v_raw;return e?at(e):n}function Cg(n){return Object.isExtensible(n)&&Xf(n,"__v_skip",!0),n}const Zr=n=>vt(n)?Ia(n):n,Su=n=>vt(n)?ap(n):n;class cp{constructor(e,t,i,s){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new gu(()=>e(this._value),()=>Jo(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=at(this);return(!e._cacheable||e.effect.dirty)&&Yi(e._value,e._value=e.effect.run())&&Jo(e,4),up(e),e.effect._dirtyLevel>=2&&Jo(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Rg(n,e,t=!1){let i,s;const r=Ge(n);return r?(i=n,s=Cn):(i=n.get,s=n.set),new cp(i,s,r||!s,t)}function up(n){var e;ji&&Ms&&(n=at(n),Jf(Ms,(e=n.dep)!=null?e:n.dep=ep(()=>n.dep=void 0,n instanceof cp?n:void 0)))}function Jo(n,e=4,t){n=at(n);const i=n.dep;i&&Qf(i,e)}function gn(n){return!!(n&&n.__v_isRef===!0)}function Pg(n){return Ig(n,!1)}function Ig(n,e){return gn(n)?n:new Dg(n,e)}class Dg{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:at(e),this._value=t?e:Zr(e)}get value(){return up(this),this._value}set value(e){const t=this.__v_isShallow||ua(e)||qr(e);e=t?e:at(e),Yi(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Zr(e),Jo(this,4))}}function Lg(n){return gn(n)?n.value:n}const Ng={get:(n,e,t)=>Lg(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return gn(s)&&!gn(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function hp(n){return zr(n)?n:new Proxy(n,Ng)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Xi(n,e,t,i){try{return i?n(...i):n()}catch(s){Da(s,e,t)}}function Pn(n,e,t,i){if(Ge(n)){const s=Xi(n,e,t,i);return s&&Gf(s)&&s.catch(r=>{Da(r,e,t)}),s}if(Fe(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Pn(n[r],e,t,i));return s}}function Da(n,e,t,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${t}`;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Zi(),Xi(l,null,10,[n,o,a]),Ji();return}}Og(n,t,s,i)}function Og(n,e,t,i=!0){console.error(n)}let Jr=!1,ic=!1;const Kt=[];let Kn=0;const qs=[];let Oi=null,ps=0;const dp=Promise.resolve();let bu=null;function Ug(n){const e=bu||dp;return n?e.then(this?n.bind(this):n):e}function Fg(n){let e=Kn+1,t=Kt.length;for(;e<t;){const i=e+t>>>1,s=Kt[i],r=Qr(s);r<n||r===n&&s.pre?e=i+1:t=i}return e}function Eu(n){(!Kt.length||!Kt.includes(n,Jr&&n.allowRecurse?Kn+1:Kn))&&(n.id==null?Kt.push(n):Kt.splice(Fg(n.id),0,n),fp())}function fp(){!Jr&&!ic&&(ic=!0,bu=dp.then(mp))}function Bg(n){const e=Kt.indexOf(n);e>Kn&&Kt.splice(e,1)}function zg(n){Fe(n)?qs.push(...n):(!Oi||!Oi.includes(n,n.allowRecurse?ps+1:ps))&&qs.push(n),fp()}function bh(n,e,t=Jr?Kn+1:0){for(;t<Kt.length;t++){const i=Kt[t];if(i&&i.pre){if(n&&i.id!==n.uid)continue;Kt.splice(t,1),t--,i()}}}function pp(n){if(qs.length){const e=[...new Set(qs)].sort((t,i)=>Qr(t)-Qr(i));if(qs.length=0,Oi){Oi.push(...e);return}for(Oi=e,ps=0;ps<Oi.length;ps++)Oi[ps]();Oi=null,ps=0}}const Qr=n=>n.id==null?1/0:n.id,kg=(n,e)=>{const t=Qr(n)-Qr(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function mp(n){ic=!1,Jr=!0,Kt.sort(kg);try{for(Kn=0;Kn<Kt.length;Kn++){const e=Kt[Kn];e&&e.active!==!1&&Xi(e,null,14)}}finally{Kn=0,Kt.length=0,pp(),Jr=!1,bu=null,(Kt.length||qs.length)&&mp()}}function Vg(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ft;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=i[u]||ft;d&&(s=t.map(f=>At(f)?f.trim():f)),h&&(s=t.map(Zm))}let a,l=i[a=el(e)]||i[a=el(Zn(e))];!l&&r&&(l=i[a=el(As(e))]),l&&Pn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Pn(c,n,6,s)}}function gp(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Ge(n)){const l=c=>{const u=gp(c,e,!0);u&&(a=!0,Tt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(vt(n)&&i.set(n,null),null):(Fe(r)?r.forEach(l=>o[l]=null):Tt(o,r),vt(n)&&i.set(n,o),o)}function La(n,e){return!n||!Aa(e)?!1:(e=e.slice(2).replace(/Once$/,""),et(n,e[0].toLowerCase()+e.slice(1))||et(n,As(e))||et(n,e))}let Rt=null,Na=null;function ha(n){const e=Rt;return Rt=n,Na=n&&n.type.__scopeId||null,e}function xi(n){Na=n}function Mi(){Na=null}function Zs(n,e=Rt,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Oh(-1);const r=ha(e);let o;try{o=n(...s)}finally{ha(r),i._d&&Oh(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function il(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:f,ctx:g,inheritAttrs:x}=n,m=ha(n);let p,T;try{if(t.shapeFlag&4){const A=s||i,N=A;p=Xn(c.call(N,A,u,h,f,d,g)),T=a}else{const A=e;p=Xn(A.length>1?A(h,{attrs:a,slots:o,emit:l}):A(h,null)),T=e.props?a:Hg(a)}}catch(A){Wr.length=0,Da(A,n,1),p=Le(Sn)}let S=p;if(T&&x!==!1){const A=Object.keys(T),{shapeFlag:N}=S;A.length&&N&7&&(r&&A.some(fu)&&(T=Gg(T,r)),S=Ki(S,T,!1,!0))}return t.dirs&&(S=Ki(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&(S.transition=t.transition),p=S,ha(m),p}const Hg=n=>{let e;for(const t in n)(t==="class"||t==="style"||Aa(t))&&((e||(e={}))[t]=n[t]);return e},Gg=(n,e)=>{const t={};for(const i in n)(!fu(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Wg(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Eh(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!La(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Eh(i,o,c):!0:!!o;return!1}function Eh(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!La(t,r))return!0}return!1}function jg({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Xg="components";function Lt(n,e){return Yg(Xg,n,!0,e)||n}const $g=Symbol.for("v-ndc");function Yg(n,e,t=!0,i=!1){const s=Rt||Ht;if(s){const r=s.type;{const a=W_(r,!1);if(a&&(a===e||a===Zn(e)||a===Ra(Zn(e))))return r}const o=Th(s[n]||r[n],e)||Th(s.appContext[n],e);return!o&&i?r:o}}function Th(n,e){return n&&(n[e]||n[Zn(e)]||n[Ra(Zn(e))])}const Kg=n=>n.__isSuspense;function qg(n,e){e&&e.pendingBranch?Fe(n)?e.effects.push(...n):e.effects.push(n):zg(n)}const Zg=Symbol.for("v-scx"),Jg=()=>Qo(Zg);function Qg(n,e){return Tu(n,null,{flush:"post"})}const Mo={};function sl(n,e,t){return Tu(n,e,t)}function Tu(n,e,{immediate:t,deep:i,flush:s,once:r,onTrack:o,onTrigger:a}=ft){if(e&&r){const R=e;e=(...w)=>{R(...w),N()}}const l=Ht,c=R=>i===!0?R:_s(R,i===!1?1:void 0);let u,h=!1,d=!1;if(gn(n)?(u=()=>n.value,h=ua(n)):zr(n)?(u=()=>c(n),h=!0):Fe(n)?(d=!0,h=n.some(R=>zr(R)||ua(R)),u=()=>n.map(R=>{if(gn(R))return R.value;if(zr(R))return c(R);if(Ge(R))return Xi(R,l,2)})):Ge(n)?e?u=()=>Xi(n,l,2):u=()=>(f&&f(),Pn(n,l,3,[g])):u=Cn,e&&i){const R=u;u=()=>_s(R())}let f,g=R=>{f=S.onStop=()=>{Xi(R,l,4),f=S.onStop=void 0}},x;if(Ba)if(g=Cn,e?t&&Pn(e,l,3,[u(),d?[]:void 0,g]):u(),s==="sync"){const R=Jg();x=R.__watcherHandles||(R.__watcherHandles=[])}else return Cn;let m=d?new Array(n.length).fill(Mo):Mo;const p=()=>{if(!(!S.active||!S.dirty))if(e){const R=S.run();(i||h||(d?R.some((w,D)=>Yi(w,m[D])):Yi(R,m)))&&(f&&f(),Pn(e,l,3,[R,m===Mo?void 0:d&&m[0]===Mo?[]:m,g]),m=R)}else S.run()};p.allowRecurse=!!e;let T;s==="sync"?T=p:s==="post"?T=()=>dn(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),T=()=>Eu(p));const S=new gu(u,Cn,T),A=ag(),N=()=>{S.stop(),A&&pu(A.effects,S)};return e?t?p():m=S.run():s==="post"?dn(S.run.bind(S),l&&l.suspense):S.run(),x&&x.push(N),N}function e_(n,e,t){const i=this.proxy,s=At(n)?n.includes(".")?_p(i,n):()=>i[n]:n.bind(i,i);let r;Ge(e)?r=e:(r=e.handler,t=e);const o=co(this),a=Tu(s,r.bind(i),t);return o(),a}function _p(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function _s(n,e=1/0,t){if(e<=0||!vt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,gn(n))_s(n.value,e,t);else if(Fe(n))for(let i=0;i<n.length;i++)_s(n[i],e,t);else if(Hf(n)||Ks(n))n.forEach(i=>{_s(i,e,t)});else if(jf(n))for(const i in n)_s(n[i],e,t);return n}function Mr(n,e){if(Rt===null)return n;const t=za(Rt)||Rt.proxy,i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=ft]=e[s];r&&(Ge(r)&&(r={mounted:r,updated:r}),r.deep&&_s(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function ns(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Zi(),Pn(l,t,8,[n.el,a,n,e]),Ji())}}const Ui=Symbol("_leaveCb"),yo=Symbol("_enterCb");function t_(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Au(()=>{n.isMounted=!0}),Sp(()=>{n.isUnmounting=!0}),n}const En=[Function,Array],vp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:En,onEnter:En,onAfterEnter:En,onEnterCancelled:En,onBeforeLeave:En,onLeave:En,onAfterLeave:En,onLeaveCancelled:En,onBeforeAppear:En,onAppear:En,onAfterAppear:En,onAppearCancelled:En},n_={name:"BaseTransition",props:vp,setup(n,{slots:e}){const t=Iu(),i=t_();return()=>{const s=e.default&&Mp(e.default(),!0);if(!s||!s.length)return;let r=s[0];if(s.length>1){for(const d of s)if(d.type!==Sn){r=d;break}}const o=at(n),{mode:a}=o;if(i.isLeaving)return rl(r);const l=Ah(r);if(!l)return rl(r);const c=sc(l,o,i,t);rc(l,c);const u=t.subTree,h=u&&Ah(u);if(h&&h.type!==Sn&&!ms(l,h)){const d=sc(h,o,i,t);if(rc(h,d),a==="out-in"&&l.type!==Sn)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,t.update.active!==!1&&(t.effect.dirty=!0,t.update())},rl(r);a==="in-out"&&l.type!==Sn&&(d.delayLeave=(f,g,x)=>{const m=xp(i,h);m[String(h.key)]=h,f[Ui]=()=>{g(),f[Ui]=void 0,delete c.delayedLeave},c.delayedLeave=x})}return r}}},i_=n_;function xp(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function sc(n,e,t,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:g,onBeforeAppear:x,onAppear:m,onAfterAppear:p,onAppearCancelled:T}=e,S=String(n.key),A=xp(t,n),N=(D,ne)=>{D&&Pn(D,i,9,ne)},R=(D,ne)=>{const M=ne[1];N(D,ne),Fe(D)?D.every(E=>E.length<=1)&&M():D.length<=1&&M()},w={mode:r,persisted:o,beforeEnter(D){let ne=a;if(!t.isMounted)if(s)ne=x||a;else return;D[Ui]&&D[Ui](!0);const M=A[S];M&&ms(n,M)&&M.el[Ui]&&M.el[Ui](),N(ne,[D])},enter(D){let ne=l,M=c,E=u;if(!t.isMounted)if(s)ne=m||l,M=p||c,E=T||u;else return;let F=!1;const V=D[yo]=Q=>{F||(F=!0,Q?N(E,[D]):N(M,[D]),w.delayedLeave&&w.delayedLeave(),D[yo]=void 0)};ne?R(ne,[D,V]):V()},leave(D,ne){const M=String(n.key);if(D[yo]&&D[yo](!0),t.isUnmounting)return ne();N(h,[D]);let E=!1;const F=D[Ui]=V=>{E||(E=!0,ne(),V?N(g,[D]):N(f,[D]),D[Ui]=void 0,A[M]===n&&delete A[M])};A[M]=n,d?R(d,[D,F]):F()},clone(D){return sc(D,e,t,i)}};return w}function rl(n){if(Oa(n))return n=Ki(n),n.children=null,n}function Ah(n){if(!Oa(n))return n;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Ge(t.default))return t.default()}}function rc(n,e){n.shapeFlag&6&&n.component?rc(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Mp(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===Ot?(o.patchFlag&128&&s++,i=i.concat(Mp(o.children,e,a))):(e||o.type!==Sn)&&i.push(a!=null?Ki(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Qt(n,e){return Ge(n)?Tt({name:n.name},e,{setup:n}):n}const kr=n=>!!n.type.__asyncLoader,Oa=n=>n.type.__isKeepAlive;function s_(n,e){yp(n,"a",e)}function r_(n,e){yp(n,"da",e)}function yp(n,e,t=Ht){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ua(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Oa(s.parent.vnode)&&o_(i,e,t,s),s=s.parent}}function o_(n,e,t,i){const s=Ua(e,n,i,!0);wu(()=>{pu(i[e],s)},t)}function Ua(n,e,t=Ht,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Zi();const a=co(t),l=Pn(e,t,n,o);return a(),Ji(),l});return i?s.unshift(r):s.push(r),r}}const yi=n=>(e,t=Ht)=>(!Ba||n==="sp")&&Ua(n,(...i)=>e(...i),t),a_=yi("bm"),Au=yi("m"),l_=yi("bu"),c_=yi("u"),Sp=yi("bum"),wu=yi("um"),u_=yi("sp"),h_=yi("rtg"),d_=yi("rtc");function f_(n,e=Ht){Ua("ec",n,e)}function oc(n,e,t,i){let s;const r=t;if(Fe(n)||At(n)){s=new Array(n.length);for(let o=0,a=n.length;o<a;o++)s[o]=e(n[o],o,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r)}else if(vt(n))if(n[Symbol.iterator])s=Array.from(n,(o,a)=>e(o,a,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(n[c],c,a,r)}}else s=[];return s}function Yt(n,e,t={},i,s){if(Rt.isCE||Rt.parent&&kr(Rt.parent)&&Rt.parent.isCE)return e!=="default"&&(t.name=e),Le("slot",t,i&&i());let r=n[e];r&&r._c&&(r._d=!1),Ve();const o=r&&bp(r(t)),a=rn(Ot,{key:t.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&n._===1?64:-2);return a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function bp(n){return n.some(e=>fa(e)?!(e.type===Sn||e.type===Ot&&!bp(e.children)):!0)?n:null}const ac=n=>n?zp(n)?za(n)||n.proxy:ac(n.parent):null,Vr=Tt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ac(n.parent),$root:n=>ac(n.root),$emit:n=>n.emit,$options:n=>Cu(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,Eu(n.update)}),$nextTick:n=>n.n||(n.n=Ug.bind(n.proxy)),$watch:n=>e_.bind(n)}),ol=(n,e)=>n!==ft&&!n.__isScriptSetup&&et(n,e),p_={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(ol(i,e))return o[e]=1,i[e];if(s!==ft&&et(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&et(c,e))return o[e]=3,r[e];if(t!==ft&&et(t,e))return o[e]=4,t[e];lc&&(o[e]=0)}}const u=Vr[e];let h,d;if(u)return e==="$attrs"&&mn(n.attrs,"get",""),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==ft&&et(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,et(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return ol(s,e)?(s[e]=t,!0):i!==ft&&et(i,e)?(i[e]=t,!0):et(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==ft&&et(n,o)||ol(e,o)||(a=r[0])&&et(a,o)||et(i,o)||et(Vr,o)||et(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:et(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function wh(n){return Fe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let lc=!0;function m_(n){const e=Cu(n),t=n.proxy,i=n.ctx;lc=!1,e.beforeCreate&&Ch(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:x,deactivated:m,beforeDestroy:p,beforeUnmount:T,destroyed:S,unmounted:A,render:N,renderTracked:R,renderTriggered:w,errorCaptured:D,serverPrefetch:ne,expose:M,inheritAttrs:E,components:F,directives:V,filters:Q}=e;if(c&&g_(c,i,null),o)for(const J in o){const H=o[J];Ge(H)&&(i[J]=H.bind(t))}if(s){const J=s.call(t,t);vt(J)&&(n.data=Ia(J))}if(lc=!0,r)for(const J in r){const H=r[J],me=Ge(H)?H.bind(t,t):Ge(H.get)?H.get.bind(t,t):Cn,ve=!Ge(H)&&Ge(H.set)?H.set.bind(t):Cn,Te=X_({get:me,set:ve});Object.defineProperty(i,J,{enumerable:!0,configurable:!0,get:()=>Te.value,set:We=>Te.value=We})}if(a)for(const J in a)Ep(a[J],i,t,J);if(l){const J=Ge(l)?l.call(t):l;Reflect.ownKeys(J).forEach(H=>{S_(H,J[H])})}u&&Ch(u,n,"c");function $(J,H){Fe(H)?H.forEach(me=>J(me.bind(t))):H&&J(H.bind(t))}if($(a_,h),$(Au,d),$(l_,f),$(c_,g),$(s_,x),$(r_,m),$(f_,D),$(d_,R),$(h_,w),$(Sp,T),$(wu,A),$(u_,ne),Fe(M))if(M.length){const J=n.exposed||(n.exposed={});M.forEach(H=>{Object.defineProperty(J,H,{get:()=>t[H],set:me=>t[H]=me})})}else n.exposed||(n.exposed={});N&&n.render===Cn&&(n.render=N),E!=null&&(n.inheritAttrs=E),F&&(n.components=F),V&&(n.directives=V)}function g_(n,e,t=Cn){Fe(n)&&(n=cc(n));for(const i in n){const s=n[i];let r;vt(s)?"default"in s?r=Qo(s.from||i,s.default,!0):r=Qo(s.from||i):r=Qo(s),gn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Ch(n,e,t){Pn(Fe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ep(n,e,t,i){const s=i.includes(".")?_p(t,i):()=>t[i];if(At(n)){const r=e[n];Ge(r)&&sl(s,r)}else if(Ge(n))sl(s,n.bind(t));else if(vt(n))if(Fe(n))n.forEach(r=>Ep(r,e,t,i));else{const r=Ge(n.handler)?n.handler.bind(t):e[n.handler];Ge(r)&&sl(s,r,n)}}function Cu(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>da(l,c,o,!0)),da(l,e,o)),vt(e)&&r.set(e,l),l}function da(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&da(n,r,t,!0),s&&s.forEach(o=>da(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=__[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const __={data:Rh,props:Ph,emits:Ph,methods:Nr,computed:Nr,beforeCreate:nn,created:nn,beforeMount:nn,mounted:nn,beforeUpdate:nn,updated:nn,beforeDestroy:nn,beforeUnmount:nn,destroyed:nn,unmounted:nn,activated:nn,deactivated:nn,errorCaptured:nn,serverPrefetch:nn,components:Nr,directives:Nr,watch:x_,provide:Rh,inject:v_};function Rh(n,e){return e?n?function(){return Tt(Ge(n)?n.call(this,this):n,Ge(e)?e.call(this,this):e)}:e:n}function v_(n,e){return Nr(cc(n),cc(e))}function cc(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function nn(n,e){return n?[...new Set([].concat(n,e))]:e}function Nr(n,e){return n?Tt(Object.create(null),n,e):e}function Ph(n,e){return n?Fe(n)&&Fe(e)?[...new Set([...n,...e])]:Tt(Object.create(null),wh(n),wh(e??{})):e}function x_(n,e){if(!n)return e;if(!e)return n;const t=Tt(Object.create(null),n);for(const i in e)t[i]=nn(n[i],e[i]);return t}function Tp(){return{app:null,config:{isNativeTag:Xm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let M_=0;function y_(n,e){return function(i,s=null){Ge(i)||(i=Tt({},i)),s!=null&&!vt(s)&&(s=null);const r=Tp(),o=new WeakSet;let a=!1;const l=r.app={_uid:M_++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:$_,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ge(c.install)?(o.add(c),c.install(l,...u)):Ge(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=Le(i,s);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,c):n(d,c,h),a=!0,l._container=c,c.__vue_app__=l,za(d.component)||d.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){const u=Hr;Hr=l;try{return c()}finally{Hr=u}}};return l}}let Hr=null;function S_(n,e){if(Ht){let t=Ht.provides;const i=Ht.parent&&Ht.parent.provides;i===t&&(t=Ht.provides=Object.create(i)),t[n]=e}}function Qo(n,e,t=!1){const i=Ht||Rt;if(i||Hr){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Hr._context.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Ge(e)?e.call(i&&i.proxy):e}}const Ap={},wp=()=>Object.create(Ap),Cp=n=>Object.getPrototypeOf(n)===Ap;function b_(n,e,t,i=!1){const s={},r=wp();n.propsDefaults=Object.create(null),Rp(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:wg(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function E_(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=at(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(La(n.emitsOptions,d))continue;const f=e[d];if(l)if(et(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const g=Zn(d);s[g]=uc(l,a,g,f,n,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{Rp(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!et(e,h)&&((u=As(h))===h||!et(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=uc(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!et(e,h))&&(delete r[h],c=!0)}c&&_i(n.attrs,"set","")}function Rp(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Br(l))continue;const c=e[l];let u;s&&et(s,u=Zn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:La(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=at(t),c=a||ft;for(let u=0;u<r.length;u++){const h=r[u];t[h]=uc(s,l,h,c[h],n,!et(c,h))}}return o}function uc(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=et(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ge(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=co(s);i=c[t]=l.call(null,e),u()}}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===As(t))&&(i=!0))}return i}function Pp(n,e,t=!1){const i=e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Ge(n)){const u=h=>{l=!0;const[d,f]=Pp(h,e,!0);Tt(o,d),f&&a.push(...f)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return vt(n)&&i.set(n,Ys),Ys;if(Fe(r))for(let u=0;u<r.length;u++){const h=Zn(r[u]);Ih(h)&&(o[h]=ft)}else if(r)for(const u in r){const h=Zn(u);if(Ih(h)){const d=r[u],f=o[h]=Fe(d)||Ge(d)?{type:d}:Tt({},d);if(f){const g=Nh(Boolean,f.type),x=Nh(String,f.type);f[0]=g>-1,f[1]=x<0||g<x,(g>-1||et(f,"default"))&&a.push(h)}}}const c=[o,a];return vt(n)&&i.set(n,c),c}function Ih(n){return n[0]!=="$"&&!Br(n)}function Dh(n){return n===null?"null":typeof n=="function"?n.name||"":typeof n=="object"&&n.constructor&&n.constructor.name||""}function Lh(n,e){return Dh(n)===Dh(e)}function Nh(n,e){return Fe(e)?e.findIndex(t=>Lh(t,n)):Ge(e)&&Lh(e,n)?0:-1}const Ip=n=>n[0]==="_"||n==="$stable",Ru=n=>Fe(n)?n.map(Xn):[Xn(n)],T_=(n,e,t)=>{if(e._n)return e;const i=Zs((...s)=>Ru(e(...s)),t);return i._c=!1,i},Dp=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Ip(s))continue;const r=n[s];if(Ge(r))e[s]=T_(s,r,i);else if(r!=null){const o=Ru(r);e[s]=()=>o}}},Lp=(n,e)=>{const t=Ru(e);n.slots.default=()=>t},A_=(n,e)=>{const t=n.slots=wp();if(n.vnode.shapeFlag&32){const i=e._;i?(Tt(t,e),Xf(t,"_",i,!0)):Dp(e,t)}else e&&Lp(n,e)},w_=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=ft;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(Tt(s,e),!t&&a===1&&delete s._):(r=!e.$stable,Dp(e,s)),o=e}else e&&(Lp(n,e),o={default:1});if(r)for(const a in s)!Ip(a)&&o[a]==null&&delete s[a]};function hc(n,e,t,i,s=!1){if(Fe(n)){n.forEach((d,f)=>hc(d,e&&(Fe(e)?e[f]:e),t,i,s));return}if(kr(i)&&!s)return;const r=i.shapeFlag&4?za(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ft?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(At(c)?(u[c]=null,et(h,c)&&(h[c]=null)):gn(c)&&(c.value=null)),Ge(l))Xi(l,a,12,[o,u]);else{const d=At(l),f=gn(l);if(d||f){const g=()=>{if(n.f){const x=d?et(h,l)?h[l]:u[l]:l.value;s?Fe(x)&&pu(x,r):Fe(x)?x.includes(r)||x.push(r):d?(u[l]=[r],et(h,l)&&(h[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else d?(u[l]=o,et(h,l)&&(h[l]=o)):f&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,dn(g,t)):g()}}}const dn=qg;function C_(n){return R_(n)}function R_(n,e){const t=$f();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Cn,insertStaticContent:g}=n,x=(v,I,k,K=null,G=null,ie=null,ee=void 0,y=null,_=!!I.dynamicChildren)=>{if(v===I)return;v&&!ms(v,I)&&(K=xe(v),We(v,G,ie,!0),v=null),I.patchFlag===-2&&(_=!1,I.dynamicChildren=null);const{type:C,ref:O,shapeFlag:W}=I;switch(C){case Fa:m(v,I,k,K);break;case Sn:p(v,I,k,K);break;case Gr:v==null&&T(I,k,K,ee);break;case Ot:F(v,I,k,K,G,ie,ee,y,_);break;default:W&1?N(v,I,k,K,G,ie,ee,y,_):W&6?V(v,I,k,K,G,ie,ee,y,_):(W&64||W&128)&&C.process(v,I,k,K,G,ie,ee,y,_,$e)}O!=null&&G&&hc(O,v&&v.ref,ie,I||v,!I)},m=(v,I,k,K)=>{if(v==null)i(I.el=a(I.children),k,K);else{const G=I.el=v.el;I.children!==v.children&&c(G,I.children)}},p=(v,I,k,K)=>{v==null?i(I.el=l(I.children||""),k,K):I.el=v.el},T=(v,I,k,K)=>{[v.el,v.anchor]=g(v.children,I,k,K,v.el,v.anchor)},S=({el:v,anchor:I},k,K)=>{let G;for(;v&&v!==I;)G=d(v),i(v,k,K),v=G;i(I,k,K)},A=({el:v,anchor:I})=>{let k;for(;v&&v!==I;)k=d(v),s(v),v=k;s(I)},N=(v,I,k,K,G,ie,ee,y,_)=>{I.type==="svg"?ee="svg":I.type==="math"&&(ee="mathml"),v==null?R(I,k,K,G,ie,ee,y,_):ne(v,I,G,ie,ee,y,_)},R=(v,I,k,K,G,ie,ee,y)=>{let _,C;const{props:O,shapeFlag:W,transition:z,dirs:le}=v;if(_=v.el=o(v.type,ie,O&&O.is,O),W&8?u(_,v.children):W&16&&D(v.children,_,null,K,G,al(v,ie),ee,y),le&&ns(v,null,K,"created"),w(_,v,v.scopeId,ee,K),O){for(const ue in O)ue!=="value"&&!Br(ue)&&r(_,ue,null,O[ue],ie,v.children,K,G,ge);"value"in O&&r(_,"value",null,O.value,ie),(C=O.onVnodeBeforeMount)&&Wn(C,K,v)}le&&ns(v,null,K,"beforeMount");const se=P_(G,z);se&&z.beforeEnter(_),i(_,I,k),((C=O&&O.onVnodeMounted)||se||le)&&dn(()=>{C&&Wn(C,K,v),se&&z.enter(_),le&&ns(v,null,K,"mounted")},G)},w=(v,I,k,K,G)=>{if(k&&f(v,k),K)for(let ie=0;ie<K.length;ie++)f(v,K[ie]);if(G){let ie=G.subTree;if(I===ie){const ee=G.vnode;w(v,ee,ee.scopeId,ee.slotScopeIds,G.parent)}}},D=(v,I,k,K,G,ie,ee,y,_=0)=>{for(let C=_;C<v.length;C++){const O=v[C]=y?Fi(v[C]):Xn(v[C]);x(null,O,I,k,K,G,ie,ee,y)}},ne=(v,I,k,K,G,ie,ee)=>{const y=I.el=v.el;let{patchFlag:_,dynamicChildren:C,dirs:O}=I;_|=v.patchFlag&16;const W=v.props||ft,z=I.props||ft;let le;if(k&&is(k,!1),(le=z.onVnodeBeforeUpdate)&&Wn(le,k,I,v),O&&ns(I,v,k,"beforeUpdate"),k&&is(k,!0),C?M(v.dynamicChildren,C,y,k,K,al(I,G),ie):ee||H(v,I,y,null,k,K,al(I,G),ie,!1),_>0){if(_&16)E(y,I,W,z,k,K,G);else if(_&2&&W.class!==z.class&&r(y,"class",null,z.class,G),_&4&&r(y,"style",W.style,z.style,G),_&8){const se=I.dynamicProps;for(let ue=0;ue<se.length;ue++){const Re=se[ue],re=W[Re],fe=z[Re];(fe!==re||Re==="value")&&r(y,Re,re,fe,G,v.children,k,K,ge)}}_&1&&v.children!==I.children&&u(y,I.children)}else!ee&&C==null&&E(y,I,W,z,k,K,G);((le=z.onVnodeUpdated)||O)&&dn(()=>{le&&Wn(le,k,I,v),O&&ns(I,v,k,"updated")},K)},M=(v,I,k,K,G,ie,ee)=>{for(let y=0;y<I.length;y++){const _=v[y],C=I[y],O=_.el&&(_.type===Ot||!ms(_,C)||_.shapeFlag&70)?h(_.el):k;x(_,C,O,null,K,G,ie,ee,!0)}},E=(v,I,k,K,G,ie,ee)=>{if(k!==K){if(k!==ft)for(const y in k)!Br(y)&&!(y in K)&&r(v,y,k[y],null,ee,I.children,G,ie,ge);for(const y in K){if(Br(y))continue;const _=K[y],C=k[y];_!==C&&y!=="value"&&r(v,y,C,_,ee,I.children,G,ie,ge)}"value"in K&&r(v,"value",k.value,K.value,ee)}},F=(v,I,k,K,G,ie,ee,y,_)=>{const C=I.el=v?v.el:a(""),O=I.anchor=v?v.anchor:a("");let{patchFlag:W,dynamicChildren:z,slotScopeIds:le}=I;le&&(y=y?y.concat(le):le),v==null?(i(C,k,K),i(O,k,K),D(I.children||[],k,O,G,ie,ee,y,_)):W>0&&W&64&&z&&v.dynamicChildren?(M(v.dynamicChildren,z,k,G,ie,ee,y),(I.key!=null||G&&I===G.subTree)&&Np(v,I,!0)):H(v,I,k,O,G,ie,ee,y,_)},V=(v,I,k,K,G,ie,ee,y,_)=>{I.slotScopeIds=y,v==null?I.shapeFlag&512?G.ctx.activate(I,k,K,ee,_):Q(I,k,K,G,ie,ee,_):ae(v,I,_)},Q=(v,I,k,K,G,ie,ee)=>{const y=v.component=z_(v,K,G);if(Oa(v)&&(y.ctx.renderer=$e),k_(y),y.asyncDep){if(G&&G.registerDep(y,$),!v.el){const _=y.subTree=Le(Sn);p(null,_,I,k)}}else $(y,v,I,k,G,ie,ee)},ae=(v,I,k)=>{const K=I.component=v.component;if(Wg(v,I,k))if(K.asyncDep&&!K.asyncResolved){J(K,I,k);return}else K.next=I,Bg(K.update),K.effect.dirty=!0,K.update();else I.el=v.el,K.vnode=I},$=(v,I,k,K,G,ie,ee)=>{const y=()=>{if(v.isMounted){let{next:O,bu:W,u:z,parent:le,vnode:se}=v;{const Ne=Op(v);if(Ne){O&&(O.el=se.el,J(v,O,ee)),Ne.asyncDep.then(()=>{v.isUnmounted||y()});return}}let ue=O,Re;is(v,!1),O?(O.el=se.el,J(v,O,ee)):O=se,W&&tl(W),(Re=O.props&&O.props.onVnodeBeforeUpdate)&&Wn(Re,le,O,se),is(v,!0);const re=il(v),fe=v.subTree;v.subTree=re,x(fe,re,h(fe.el),xe(fe),v,G,ie),O.el=re.el,ue===null&&jg(v,re.el),z&&dn(z,G),(Re=O.props&&O.props.onVnodeUpdated)&&dn(()=>Wn(Re,le,O,se),G)}else{let O;const{el:W,props:z}=I,{bm:le,m:se,parent:ue}=v,Re=kr(I);if(is(v,!1),le&&tl(le),!Re&&(O=z&&z.onVnodeBeforeMount)&&Wn(O,ue,I),is(v,!0),W&&Ze){const re=()=>{v.subTree=il(v),Ze(W,v.subTree,v,G,null)};Re?I.type.__asyncLoader().then(()=>!v.isUnmounted&&re()):re()}else{const re=v.subTree=il(v);x(null,re,k,K,v,G,ie),I.el=re.el}if(se&&dn(se,G),!Re&&(O=z&&z.onVnodeMounted)){const re=I;dn(()=>Wn(O,ue,re),G)}(I.shapeFlag&256||ue&&kr(ue.vnode)&&ue.vnode.shapeFlag&256)&&v.a&&dn(v.a,G),v.isMounted=!0,I=k=K=null}},_=v.effect=new gu(y,Cn,()=>Eu(C),v.scope),C=v.update=()=>{_.dirty&&_.run()};C.id=v.uid,is(v,!0),C()},J=(v,I,k)=>{I.component=v;const K=v.vnode.props;v.vnode=I,v.next=null,E_(v,I.props,K,k),w_(v,I.children,k),Zi(),bh(v),Ji()},H=(v,I,k,K,G,ie,ee,y,_=!1)=>{const C=v&&v.children,O=v?v.shapeFlag:0,W=I.children,{patchFlag:z,shapeFlag:le}=I;if(z>0){if(z&128){ve(C,W,k,K,G,ie,ee,y,_);return}else if(z&256){me(C,W,k,K,G,ie,ee,y,_);return}}le&8?(O&16&&ge(C,G,ie),W!==C&&u(k,W)):O&16?le&16?ve(C,W,k,K,G,ie,ee,y,_):ge(C,G,ie,!0):(O&8&&u(k,""),le&16&&D(W,k,K,G,ie,ee,y,_))},me=(v,I,k,K,G,ie,ee,y,_)=>{v=v||Ys,I=I||Ys;const C=v.length,O=I.length,W=Math.min(C,O);let z;for(z=0;z<W;z++){const le=I[z]=_?Fi(I[z]):Xn(I[z]);x(v[z],le,k,null,G,ie,ee,y,_)}C>O?ge(v,G,ie,!0,!1,W):D(I,k,K,G,ie,ee,y,_,W)},ve=(v,I,k,K,G,ie,ee,y,_)=>{let C=0;const O=I.length;let W=v.length-1,z=O-1;for(;C<=W&&C<=z;){const le=v[C],se=I[C]=_?Fi(I[C]):Xn(I[C]);if(ms(le,se))x(le,se,k,null,G,ie,ee,y,_);else break;C++}for(;C<=W&&C<=z;){const le=v[W],se=I[z]=_?Fi(I[z]):Xn(I[z]);if(ms(le,se))x(le,se,k,null,G,ie,ee,y,_);else break;W--,z--}if(C>W){if(C<=z){const le=z+1,se=le<O?I[le].el:K;for(;C<=z;)x(null,I[C]=_?Fi(I[C]):Xn(I[C]),k,se,G,ie,ee,y,_),C++}}else if(C>z)for(;C<=W;)We(v[C],G,ie,!0),C++;else{const le=C,se=C,ue=new Map;for(C=se;C<=z;C++){const Pe=I[C]=_?Fi(I[C]):Xn(I[C]);Pe.key!=null&&ue.set(Pe.key,C)}let Re,re=0;const fe=z-se+1;let Ne=!1,Ue=0;const Me=new Array(fe);for(C=0;C<fe;C++)Me[C]=0;for(C=le;C<=W;C++){const Pe=v[C];if(re>=fe){We(Pe,G,ie,!0);continue}let Ke;if(Pe.key!=null)Ke=ue.get(Pe.key);else for(Re=se;Re<=z;Re++)if(Me[Re-se]===0&&ms(Pe,I[Re])){Ke=Re;break}Ke===void 0?We(Pe,G,ie,!0):(Me[Ke-se]=C+1,Ke>=Ue?Ue=Ke:Ne=!0,x(Pe,I[Ke],k,null,G,ie,ee,y,_),re++)}const Ye=Ne?I_(Me):Ys;for(Re=Ye.length-1,C=fe-1;C>=0;C--){const Pe=se+C,Ke=I[Pe],L=Pe+1<O?I[Pe+1].el:K;Me[C]===0?x(null,Ke,k,L,G,ie,ee,y,_):Ne&&(Re<0||C!==Ye[Re]?Te(Ke,k,L,2):Re--)}}},Te=(v,I,k,K,G=null)=>{const{el:ie,type:ee,transition:y,children:_,shapeFlag:C}=v;if(C&6){Te(v.component.subTree,I,k,K);return}if(C&128){v.suspense.move(I,k,K);return}if(C&64){ee.move(v,I,k,$e);return}if(ee===Ot){i(ie,I,k);for(let W=0;W<_.length;W++)Te(_[W],I,k,K);i(v.anchor,I,k);return}if(ee===Gr){S(v,I,k);return}if(K!==2&&C&1&&y)if(K===0)y.beforeEnter(ie),i(ie,I,k),dn(()=>y.enter(ie),G);else{const{leave:W,delayLeave:z,afterLeave:le}=y,se=()=>i(ie,I,k),ue=()=>{W(ie,()=>{se(),le&&le()})};z?z(ie,se,ue):ue()}else i(ie,I,k)},We=(v,I,k,K=!1,G=!1)=>{const{type:ie,props:ee,ref:y,children:_,dynamicChildren:C,shapeFlag:O,patchFlag:W,dirs:z}=v;if(y!=null&&hc(y,null,k,v,!0),O&256){I.ctx.deactivate(v);return}const le=O&1&&z,se=!kr(v);let ue;if(se&&(ue=ee&&ee.onVnodeBeforeUnmount)&&Wn(ue,I,v),O&6)he(v.component,k,K);else{if(O&128){v.suspense.unmount(k,K);return}le&&ns(v,null,I,"beforeUnmount"),O&64?v.type.remove(v,I,k,G,$e,K):C&&(ie!==Ot||W>0&&W&64)?ge(C,I,k,!1,!0):(ie===Ot&&W&384||!G&&O&16)&&ge(_,I,k),K&&tt(v)}(se&&(ue=ee&&ee.onVnodeUnmounted)||le)&&dn(()=>{ue&&Wn(ue,I,v),le&&ns(v,null,I,"unmounted")},k)},tt=v=>{const{type:I,el:k,anchor:K,transition:G}=v;if(I===Ot){te(k,K);return}if(I===Gr){A(v);return}const ie=()=>{s(k),G&&!G.persisted&&G.afterLeave&&G.afterLeave()};if(v.shapeFlag&1&&G&&!G.persisted){const{leave:ee,delayLeave:y}=G,_=()=>ee(k,ie);y?y(v.el,ie,_):_()}else ie()},te=(v,I)=>{let k;for(;v!==I;)k=d(v),s(v),v=k;s(I)},he=(v,I,k)=>{const{bum:K,scope:G,update:ie,subTree:ee,um:y}=v;K&&tl(K),G.stop(),ie&&(ie.active=!1,We(ee,v,I,k)),y&&dn(y,I),dn(()=>{v.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},ge=(v,I,k,K=!1,G=!1,ie=0)=>{for(let ee=ie;ee<v.length;ee++)We(v[ee],I,k,K,G)},xe=v=>v.shapeFlag&6?xe(v.component.subTree):v.shapeFlag&128?v.suspense.next():d(v.anchor||v.el);let ze=!1;const Oe=(v,I,k)=>{v==null?I._vnode&&We(I._vnode,null,null,!0):x(I._vnode||null,v,I,null,null,null,k),ze||(ze=!0,bh(),pp(),ze=!1),I._vnode=v},$e={p:x,um:We,m:Te,r:tt,mt:Q,mc:D,pc:H,pbc:M,n:xe,o:n};let it,Ze;return{render:Oe,hydrate:it,createApp:y_(Oe,it)}}function al({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function is({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function P_(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Np(n,e,t=!1){const i=n.children,s=e.children;if(Fe(i)&&Fe(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Fi(s[r]),a.el=o.el),t||Np(o,a)),a.type===Fa&&(a.el=o.el)}}function I_(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Op(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Op(e)}const D_=n=>n.__isTeleport,Ot=Symbol.for("v-fgt"),Fa=Symbol.for("v-txt"),Sn=Symbol.for("v-cmt"),Gr=Symbol.for("v-stc"),Wr=[];let Bn=null;function Ve(n=!1){Wr.push(Bn=n?null:[])}function L_(){Wr.pop(),Bn=Wr[Wr.length-1]||null}let eo=1;function Oh(n){eo+=n}function Up(n){return n.dynamicChildren=eo>0?Bn||Ys:null,L_(),eo>0&&Bn&&Bn.push(n),n}function rt(n,e,t,i,s,r){return Up(Z(n,e,t,i,s,r,!0))}function rn(n,e,t,i,s){return Up(Le(n,e,t,i,s,!0))}function fa(n){return n?n.__v_isVNode===!0:!1}function ms(n,e){return n.type===e.type&&n.key===e.key}const Fp=({key:n})=>n??null,ea=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?At(n)||gn(n)||Ge(n)?{i:Rt,r:n,k:e,f:!!t}:n:null);function Z(n,e=null,t=null,i=0,s=null,r=n===Ot?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Fp(e),ref:e&&ea(e),scopeId:Na,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Rt};return a?(Pu(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=At(t)?8:16),eo>0&&!o&&Bn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Bn.push(l),l}const Le=N_;function N_(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===$g)&&(n=Sn),fa(n)){const a=Ki(n,e,!0);return t&&Pu(a,t),eo>0&&!r&&Bn&&(a.shapeFlag&6?Bn[Bn.indexOf(n)]=a:Bn.push(a)),a.patchFlag|=-2,a}if(j_(n)&&(n=n.__vccOpts),e){e=O_(e);let{class:a,style:l}=e;a&&!At(a)&&(e.class=zt(a)),vt(l)&&(lp(l)&&!Fe(l)&&(l=Tt({},l)),e.style=Ut(l))}const o=At(n)?1:Kg(n)?128:D_(n)?64:vt(n)?4:Ge(n)?2:0;return Z(n,e,t,i,s,o,r,!0)}function O_(n){return n?lp(n)||Cp(n)?Tt({},n):n:null}function Ki(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?U_(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Fp(c),ref:e&&e.ref?t&&r?Fe(r)?r.concat(ea(e)):[r,ea(e)]:ea(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ot?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ki(n.ssContent),ssFallback:n.ssFallback&&Ki(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&(u.transition=l.clone(u)),u}function qn(n=" ",e=0){return Le(Fa,null,n,e)}function Bp(n,e){const t=Le(Gr,null,n);return t.staticCount=e,t}function yt(n="",e=!1){return e?(Ve(),rn(Sn,null,n)):Le(Sn,null,n)}function Xn(n){return n==null||typeof n=="boolean"?Le(Sn):Fe(n)?Le(Ot,null,n.slice()):typeof n=="object"?Fi(n):Le(Fa,null,String(n))}function Fi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ki(n)}function Pu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Pu(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Cp(e)?e._ctx=Rt:s===3&&Rt&&(Rt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ge(e)?(e={default:e,_ctx:Rt},t=32):(e=String(e),i&64?(t=16,e=[qn(e)]):t=8);n.children=e,n.shapeFlag|=t}function U_(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=zt([e.class,i.class]));else if(s==="style")e.style=Ut([e.style,i.style]);else if(Aa(s)){const r=e[s],o=i[s];o&&r!==o&&!(Fe(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Wn(n,e,t,i=null){Pn(n,e,7,[t,i])}const F_=Tp();let B_=0;function z_(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||F_,r={uid:B_++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new rg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pp(i,s),emitsOptions:gp(i,s),emit:null,emitted:null,propsDefaults:ft,inheritAttrs:i.inheritAttrs,ctx:ft,data:ft,props:ft,attrs:ft,slots:ft,refs:ft,setupState:ft,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Vg.bind(null,r),n.ce&&n.ce(r),r}let Ht=null;const Iu=()=>Ht||Rt;let pa,dc;{const n=$f(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};pa=e("__VUE_INSTANCE_SETTERS__",t=>Ht=t),dc=e("__VUE_SSR_SETTERS__",t=>Ba=t)}const co=n=>{const e=Ht;return pa(n),n.scope.on(),()=>{n.scope.off(),pa(e)}},Uh=()=>{Ht&&Ht.scope.off(),pa(null)};function zp(n){return n.vnode.shapeFlag&4}let Ba=!1;function k_(n,e=!1){e&&dc(e);const{props:t,children:i}=n.vnode,s=zp(n);b_(n,t,s,e),A_(n,i);const r=s?V_(n,e):void 0;return e&&dc(!1),r}function V_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,p_);const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?G_(n):null,r=co(n);Zi();const o=Xi(i,n,0,[n.props,s]);if(Ji(),r(),Gf(o)){if(o.then(Uh,Uh),e)return o.then(a=>{Fh(n,a,e)}).catch(a=>{Da(a,n,0)});n.asyncDep=o}else Fh(n,o,e)}else kp(n,e)}function Fh(n,e,t){Ge(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:vt(e)&&(n.setupState=hp(e)),kp(n,t)}let Bh;function kp(n,e,t){const i=n.type;if(!n.render){if(!e&&Bh&&!i.render){const s=i.template||Cu(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Tt(Tt({isCustomElement:r,delimiters:a},o),l);i.render=Bh(s,c)}}n.render=i.render||Cn}{const s=co(n);Zi();try{m_(n)}finally{Ji(),s()}}}const H_={get(n,e){return mn(n,"get",""),n[e]}};function G_(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,H_),slots:n.slots,emit:n.emit,expose:e}}function za(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(hp(Cg(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Vr)return Vr[t](n)},has(e,t){return t in e||t in Vr}}))}function W_(n,e=!0){return Ge(n)?n.displayName||n.name:n.name||e&&n.__name}function j_(n){return Ge(n)&&"__vccOpts"in n}const X_=(n,e)=>Rg(n,e,Ba);function Vp(n,e,t){const i=arguments.length;return i===2?vt(e)&&!Fe(e)?fa(e)?Le(n,null,[e]):Le(n,e):Le(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&fa(t)&&(t=[t]),Le(n,e,t))}const $_="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Y_="http://www.w3.org/2000/svg",K_="http://www.w3.org/1998/Math/MathML",Bi=typeof document<"u"?document:null,zh=Bi&&Bi.createElement("template"),q_={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Bi.createElementNS(Y_,n):e==="mathml"?Bi.createElementNS(K_,n):Bi.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Bi.createTextNode(n),createComment:n=>Bi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Bi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{zh.innerHTML=i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n;const a=zh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Ti="transition",yr="animation",to=Symbol("_vtc"),ma=(n,{slots:e})=>Vp(i_,Z_(n),e);ma.displayName="Transition";const Hp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ma.props=Tt({},vp,Hp);const ss=(n,e=[])=>{Fe(n)?n.forEach(t=>t(...e)):n&&n(...e)},kh=n=>n?Fe(n)?n.some(e=>e.length>1):n.length>1:!1;function Z_(n){const e={};for(const F in n)F in Hp||(e[F]=n[F]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:f=`${t}-leave-to`}=n,g=J_(s),x=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:T,onEnterCancelled:S,onLeave:A,onLeaveCancelled:N,onBeforeAppear:R=p,onAppear:w=T,onAppearCancelled:D=S}=e,ne=(F,V,Q)=>{rs(F,V?u:a),rs(F,V?c:o),Q&&Q()},M=(F,V)=>{F._isLeaving=!1,rs(F,h),rs(F,f),rs(F,d),V&&V()},E=F=>(V,Q)=>{const ae=F?w:T,$=()=>ne(V,F,Q);ss(ae,[V,$]),Vh(()=>{rs(V,F?l:r),Ai(V,F?u:a),kh(ae)||Hh(V,i,x,$)})};return Tt(e,{onBeforeEnter(F){ss(p,[F]),Ai(F,r),Ai(F,o)},onBeforeAppear(F){ss(R,[F]),Ai(F,l),Ai(F,c)},onEnter:E(!1),onAppear:E(!0),onLeave(F,V){F._isLeaving=!0;const Q=()=>M(F,V);Ai(F,h),Ai(F,d),tv(),Vh(()=>{F._isLeaving&&(rs(F,h),Ai(F,f),kh(A)||Hh(F,i,m,Q))}),ss(A,[F,Q])},onEnterCancelled(F){ne(F,!1),ss(S,[F])},onAppearCancelled(F){ne(F,!0),ss(D,[F])},onLeaveCancelled(F){M(F),ss(N,[F])}})}function J_(n){if(n==null)return null;if(vt(n))return[ll(n.enter),ll(n.leave)];{const e=ll(n);return[e,e]}}function ll(n){return Jm(n)}function Ai(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[to]||(n[to]=new Set)).add(e)}function rs(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[to];t&&(t.delete(e),t.size||(n[to]=void 0))}function Vh(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Q_=0;function Hh(n,e,t,i){const s=n._endId=++Q_,r=()=>{s===n._endId&&i()};if(t)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=ev(n,e);if(!o)return i();const c=o+"end";let u=0;const h=()=>{n.removeEventListener(c,d),r()},d=f=>{f.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),n.addEventListener(c,d)}function ev(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),s=i(`${Ti}Delay`),r=i(`${Ti}Duration`),o=Gh(s,r),a=i(`${yr}Delay`),l=i(`${yr}Duration`),c=Gh(a,l);let u=null,h=0,d=0;e===Ti?o>0&&(u=Ti,h=o,d=r.length):e===yr?c>0&&(u=yr,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?Ti:yr:null,d=u?u===Ti?r.length:l.length:0);const f=u===Ti&&/\b(transform|all)(,|$)/.test(i(`${Ti}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function Gh(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Wh(t)+Wh(n[i])))}function Wh(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function tv(){return document.body.offsetHeight}function nv(n,e,t){const i=n[to];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ga=Symbol("_vod"),Gp=Symbol("_vsh"),Sr={beforeMount(n,{value:e},{transition:t}){n[ga]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):br(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),br(n,!0),i.enter(n)):i.leave(n,()=>{br(n,!1)}):br(n,e))},beforeUnmount(n,{value:e}){br(n,e)}};function br(n,e){n.style.display=e?n[ga]:"none",n[Gp]=!e}const Wp=Symbol("");function ka(n){const e=Iu();if(!e)return;const t=e.ut=(s=n(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>pc(r,s))},i=()=>{const s=n(e.proxy);fc(e.subTree,s),t(s)};Au(()=>{Qg(i);const s=new MutationObserver(i);s.observe(e.subTree.el.parentNode,{childList:!0}),wu(()=>s.disconnect())})}function fc(n,e){if(n.shapeFlag&128){const t=n.suspense;n=t.activeBranch,t.pendingBranch&&!t.isHydrating&&t.effects.push(()=>{fc(t.activeBranch,e)})}for(;n.component;)n=n.component.subTree;if(n.shapeFlag&1&&n.el)pc(n.el,e);else if(n.type===Ot)n.children.forEach(t=>fc(t,e));else if(n.type===Gr){let{el:t,anchor:i}=n;for(;t&&(pc(t,e),t!==i);)t=t.nextSibling}}function pc(n,e){if(n.nodeType===1){const t=n.style;let i="";for(const s in e)t.setProperty(`--${s}`,e[s]),i+=`--${s}: ${e[s]};`;t[Wp]=i}}const iv=/(^|;)\s*display\s*:/;function sv(n,e,t){const i=n.style,s=At(t);let r=!1;if(t&&!s){if(e)if(At(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ta(i,a,"")}else for(const o in e)t[o]==null&&ta(i,o,"");for(const o in t)o==="display"&&(r=!0),ta(i,o,t[o])}else if(s){if(e!==t){const o=i[Wp];o&&(t+=";"+o),i.cssText=t,r=iv.test(t)}}else e&&n.removeAttribute("style");ga in n&&(n[ga]=r?i.display:"",n[Gp]&&(i.display="none"))}const jh=/\s*!important$/;function ta(n,e,t){if(Fe(t))t.forEach(i=>ta(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=rv(n,e);jh.test(t)?n.setProperty(As(i),t.replace(jh,""),"important"):n[i]=t}}const Xh=["Webkit","Moz","ms"],cl={};function rv(n,e){const t=cl[e];if(t)return t;let i=Zn(e);if(i!=="filter"&&i in n)return cl[e]=i;i=Ra(i);for(let s=0;s<Xh.length;s++){const r=Xh[s]+i;if(r in n)return cl[e]=r}return e}const $h="http://www.w3.org/1999/xlink";function ov(n,e,t,i,s){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS($h,e.slice(6,e.length)):n.setAttributeNS($h,e,t);else{const r=sg(e);t==null||r&&!Yf(t)?n.removeAttribute(e):n.setAttribute(e,r?"":t)}}function av(n,e,t,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?n.getAttribute("value")||"":n.value,u=t??"";(c!==u||!("_value"in n))&&(n.value=u),t==null&&n.removeAttribute(e),n._value=t;return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=Yf(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function lv(n,e,t,i){n.addEventListener(e,t,i)}function cv(n,e,t,i){n.removeEventListener(e,t,i)}const Yh=Symbol("_vei");function uv(n,e,t,i,s=null){const r=n[Yh]||(n[Yh]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=hv(e);if(i){const c=r[e]=pv(i,s);lv(n,a,c,l)}else o&&(cv(n,a,o,l),r[e]=void 0)}}const Kh=/(?:Once|Passive|Capture)$/;function hv(n){let e;if(Kh.test(n)){e={};let i;for(;i=n.match(Kh);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):As(n.slice(2)),e]}let ul=0;const dv=Promise.resolve(),fv=()=>ul||(dv.then(()=>ul=0),ul=Date.now());function pv(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Pn(mv(i,t.value),e,5,[i])};return t.value=n,t.attached=fv(),t}function mv(n,e){if(Fe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const qh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,gv=(n,e,t,i,s,r,o,a,l)=>{const c=s==="svg";e==="class"?nv(n,i,c):e==="style"?sv(n,t,i):Aa(e)?fu(e)||uv(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):_v(n,e,i,c))?av(n,e,i,r,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),ov(n,e,i,c))};function _v(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&qh(e)&&Ge(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return qh(e)&&At(t)?!1:e in n}function jp(n="$style"){{const e=Iu();if(!e)return ft;const t=e.type.__cssModules;if(!t)return ft;const i=t[n];return i||ft}}const vv=["ctrl","shift","alt","meta"],xv={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>vv.some(t=>n[`${t}Key`]&&!e.includes(t))},wt=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=xv[e[o]];if(a&&a(s,e))return}return n(s,...r)})},Mv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},jn=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=s=>{if(!("key"in s))return;const r=As(s.key);if(e.some(o=>o===r||Mv[o]===r))return n(s)})},yv=Tt({patchProp:gv},q_);let Zh;function Sv(){return Zh||(Zh=C_(yv))}const bv=(...n)=>{const e=Sv().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Tv(i);if(!s)return;const r=e._component;!Ge(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,Ev(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Ev(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Tv(n){return At(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Du="169",Js={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},js={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Av=0,Jh=1,wv=2,Xp=1,Cv=2,di=3,Jn=0,pn=1,ln=2,Nt=0,Qs=1,mc=2,Qh=3,ed=4,gc=5,pi=100,Rv=101,Pv=102,Iv=103,Dv=104,_c=200,Lv=201,Nv=202,Ov=203,vc=204,xc=205,$p=206,Uv=207,Yp=208,Fv=209,Bv=210,zv=211,kv=212,Vv=213,Hv=214,Mc=0,yc=1,Sc=2,rr=3,bc=4,Ec=5,Tc=6,Ac=7,Kp=0,Gv=1,Wv=2,$i=0,jv=1,Xv=2,$v=3,Yv=4,Kv=5,qv=6,Zv=7,td="attached",Jv="detached",qp=300,or=301,ar=302,wc=303,Cc=304,Va=306,lr=1e3,Vi=1001,_a=1002,Gt=1003,Zp=1004,Or=1005,yn=1006,na=1007,mi=1008,vi=1009,Jp=1010,Qp=1011,no=1012,Lu=1013,Ss=1014,zn=1015,fn=1016,Nu=1017,Ou=1018,bs=1020,em=35902,tm=1021,nm=1022,Rn=1023,im=1024,sm=1025,er=1026,Es=1027,Uu=1028,Fu=1029,rm=1030,Bu=1031,zu=1033,ia=33776,sa=33777,ra=33778,oa=33779,Rc=35840,Pc=35841,Ic=35842,Dc=35843,Lc=36196,Nc=37492,Oc=37496,Uc=37808,Fc=37809,Bc=37810,zc=37811,kc=37812,Vc=37813,Hc=37814,Gc=37815,Wc=37816,jc=37817,Xc=37818,$c=37819,Yc=37820,Kc=37821,aa=36492,qc=36494,Zc=36495,om=36283,Jc=36284,Qc=36285,eu=36286,io=2300,so=2301,hl=2302,nd=2400,id=2401,sd=2402,Qv=2500,e0=0,am=1,tu=2,t0=3200,lm=3201,ku=0,n0=1,ki="",on="srgb",jt="srgb-linear",Vu="display-p3",Ha="display-p3-linear",va="linear",gt="srgb",xa="rec709",Ma="p3",Rs=7680,rd=519,i0=512,s0=513,r0=514,cm=515,o0=516,a0=517,l0=518,c0=519,nu=35044,od="300 es",gi=2e3,ya=2001;class ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ad=1234567;const jr=Math.PI/180,cr=180/Math.PI;function Vn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function Vt(n,e,t){return Math.max(e,Math.min(t,n))}function Hu(n,e){return(n%e+e)%e}function u0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function h0(n,e,t){return n!==e?(t-n)/(e-n):0}function Xr(n,e,t){return(1-t)*n+t*e}function d0(n,e,t,i){return Xr(n,e,1-Math.exp(-t*i))}function f0(n,e=1){return e-Math.abs(Hu(n,e*2)-e)}function p0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function m0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function g0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function _0(n,e){return n+Math.random()*(e-n)}function v0(n){return n*(.5-Math.random())}function x0(n){n!==void 0&&(ad=n);let e=ad+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function M0(n){return n*jr}function y0(n){return n*cr}function S0(n){return(n&n-1)===0&&n!==0}function b0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function E0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function T0(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Un(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const zi={DEG2RAD:jr,RAD2DEG:cr,generateUUID:Vn,clamp:Vt,euclideanModulo:Hu,mapLinear:u0,inverseLerp:h0,lerp:Xr,damp:d0,pingpong:f0,smoothstep:p0,smootherstep:m0,randInt:g0,randFloat:_0,randFloatSpread:v0,seededRandom:x0,degToRad:M0,radToDeg:y0,isPowerOfTwo:S0,ceilPowerOfTwo:b0,floorPowerOfTwo:E0,setQuaternionFromProperEuler:T0,normalize:ht,denormalize:Un};class _e{constructor(e=0,t=0){_e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,i,s,r,o,a,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],x=s[0],m=s[3],p=s[6],T=s[1],S=s[4],A=s[7],N=s[2],R=s[5],w=s[8];return r[0]=o*x+a*T+l*N,r[3]=o*m+a*S+l*R,r[6]=o*p+a*A+l*w,r[1]=c*x+u*T+h*N,r[4]=c*m+u*S+h*R,r[7]=c*p+u*A+h*w,r[2]=d*x+f*T+g*N,r[5]=d*m+f*S+g*R,r[8]=d*p+f*A+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,g=t*h+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(dl.makeScale(e,t)),this}rotate(e){return this.premultiply(dl.makeRotation(-e)),this}translate(e,t){return this.premultiply(dl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dl=new Xe;function um(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ro(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function A0(){const n=ro("canvas");return n.style.display="block",n}const ld={};function la(n){n in ld||(ld[n]=!0,console.warn(n))}function w0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function C0(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function R0(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const cd=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ud=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Er={[jt]:{transfer:va,primaries:xa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[on]:{transfer:gt,primaries:xa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ha]:{transfer:va,primaries:Ma,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(ud),fromReference:n=>n.applyMatrix3(cd)},[Vu]:{transfer:gt,primaries:Ma,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(ud),fromReference:n=>n.applyMatrix3(cd).convertLinearToSRGB()}},P0=new Set([jt,Ha]),nt={enabled:!0,_workingColorSpace:jt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!P0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Er[e].toReference,s=Er[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Er[n].primaries},getTransfer:function(n){return n===ki?va:Er[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Er[e].luminanceCoefficients)}};function tr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function fl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ps;class I0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ps===void 0&&(Ps=ro("canvas")),Ps.width=e.width,Ps.height=e.height;const i=Ps.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ps}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ro("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=tr(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(tr(t[i]/255)*255):t[i]=tr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let D0=0;class hm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=Vn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(pl(s[o].image)):r.push(pl(s[o]))}else r=pl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function pl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?I0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let L0=0;class Ft extends ws{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,i=Vi,s=Vi,r=yn,o=mi,a=Rn,l=vi,c=Ft.DEFAULT_ANISOTROPY,u=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=Vn(),this.name="",this.source=new hm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lr:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case _a:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lr:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case _a:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=qp;Ft.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,i=0,s=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,A=(f+1)/2,N=(p+1)/2,R=(u+d)/4,w=(h+x)/4,D=(g+m)/4;return S>A&&S>N?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=R/i,r=w/i):A>N?A<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),i=R/s,r=D/s):N<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),i=w/r,s=D/r),this.set(i,s,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-x)/T,this.z=(d-u)/T,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class N0 extends ws{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ft(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kt extends N0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class dm extends Ft{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class O0 extends Ft{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==d||c!==f||u!==g){let m=1-a;const p=l*d+c*f+u*g+h*x,T=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const N=Math.sqrt(S),R=Math.atan2(N,p*T);m=Math.sin(m*R)/N,a=Math.sin(a*R)/N}const A=a*T;if(l=l*m+d*A,c=c*m+f*A,u=u*m+g*A,h=h*m+x*A,m===1-a){const N=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=N,c*=N,u*=N,h*=N}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ml.copy(this).projectOnVector(e),this.sub(ml)}reflect(e){return this.sub(ml.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ml=new P,hd=new Qn;class Si{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),So.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),So.copy(i.boundingBox)),So.applyMatrix4(e.matrixWorld),this.union(So)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tr),bo.subVectors(this.max,Tr),Is.subVectors(e.a,Tr),Ds.subVectors(e.b,Tr),Ls.subVectors(e.c,Tr),wi.subVectors(Ds,Is),Ci.subVectors(Ls,Ds),os.subVectors(Is,Ls);let t=[0,-wi.z,wi.y,0,-Ci.z,Ci.y,0,-os.z,os.y,wi.z,0,-wi.x,Ci.z,0,-Ci.x,os.z,0,-os.x,-wi.y,wi.x,0,-Ci.y,Ci.x,0,-os.y,os.x,0];return!gl(t,Is,Ds,Ls,bo)||(t=[1,0,0,0,1,0,0,0,1],!gl(t,Is,Ds,Ls,bo))?!1:(Eo.crossVectors(wi,Ci),t=[Eo.x,Eo.y,Eo.z],gl(t,Is,Ds,Ls,bo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ri=[new P,new P,new P,new P,new P,new P,new P,new P],Dn=new P,So=new Si,Is=new P,Ds=new P,Ls=new P,wi=new P,Ci=new P,os=new P,Tr=new P,bo=new P,Eo=new P,as=new P;function gl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){as.fromArray(n,r);const a=s.x*Math.abs(as.x)+s.y*Math.abs(as.y)+s.z*Math.abs(as.z),l=e.dot(as),c=t.dot(as),u=i.dot(as);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const U0=new Si,Ar=new P,_l=new P;class ti{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):U0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ar.subVectors(e,this.center);const t=Ar.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ar,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_l.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ar.copy(e.center).add(_l)),this.expandByPoint(Ar.copy(e.center).sub(_l))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oi=new P,vl=new P,To=new P,Ri=new P,xl=new P,Ao=new P,Ml=new P;class pr{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,t),oi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){vl.copy(e).add(t).multiplyScalar(.5),To.copy(t).sub(e).normalize(),Ri.copy(this.origin).sub(vl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(To),a=Ri.dot(this.direction),l=-Ri.dot(To),c=Ri.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(vl).addScaledVector(To,d),f}intersectSphere(e,t){oi.subVectors(e.center,this.origin);const i=oi.dot(this.direction),s=oi.dot(oi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,t,i,s,r){xl.subVectors(t,e),Ao.subVectors(i,e),Ml.crossVectors(xl,Ao);let o=this.direction.dot(Ml),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,e);const l=a*this.direction.dot(Ao.crossVectors(Ri,Ao));if(l<0)return null;const c=a*this.direction.dot(xl.cross(Ri));if(c<0||l+c>o)return null;const u=-a*Ri.dot(Ml);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(e,t,i,s,r,o,a,l,c,u,h,d,f,g,x,m){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,d,f,g,x,m)}set(e,t,i,s,r,o,a,l,c,u,h,d,f,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ns.setFromMatrixColumn(e,0).length(),r=1/Ns.setFromMatrixColumn(e,1).length(),o=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,x=c*h;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(F0,e,B0)}lookAt(e,t,i){const s=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Pi.crossVectors(i,xn),Pi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Pi.crossVectors(i,xn)),Pi.normalize(),wo.crossVectors(xn,Pi),s[0]=Pi.x,s[4]=wo.x,s[8]=xn.x,s[1]=Pi.y,s[5]=wo.y,s[9]=xn.y,s[2]=Pi.z,s[6]=wo.z,s[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],T=i[3],S=i[7],A=i[11],N=i[15],R=s[0],w=s[4],D=s[8],ne=s[12],M=s[1],E=s[5],F=s[9],V=s[13],Q=s[2],ae=s[6],$=s[10],J=s[14],H=s[3],me=s[7],ve=s[11],Te=s[15];return r[0]=o*R+a*M+l*Q+c*H,r[4]=o*w+a*E+l*ae+c*me,r[8]=o*D+a*F+l*$+c*ve,r[12]=o*ne+a*V+l*J+c*Te,r[1]=u*R+h*M+d*Q+f*H,r[5]=u*w+h*E+d*ae+f*me,r[9]=u*D+h*F+d*$+f*ve,r[13]=u*ne+h*V+d*J+f*Te,r[2]=g*R+x*M+m*Q+p*H,r[6]=g*w+x*E+m*ae+p*me,r[10]=g*D+x*F+m*$+p*ve,r[14]=g*ne+x*V+m*J+p*Te,r[3]=T*R+S*M+A*Q+N*H,r[7]=T*w+S*E+A*ae+N*me,r[11]=T*D+S*F+A*$+N*ve,r[15]=T*ne+S*V+A*J+N*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*d+i*c*d+s*a*f-i*l*f)+x*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+m*(+t*c*h-t*a*f-r*o*h+i*o*f+r*a*u-i*c*u)+p*(-s*a*u-t*l*h+t*a*d+s*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],T=h*m*c-x*d*c+x*l*f-a*m*f-h*l*p+a*d*p,S=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,A=u*x*c-g*h*c+g*a*f-o*x*f-u*a*p+o*h*p,N=g*h*l-u*x*l-g*a*d+o*x*d+u*a*m-o*h*m,R=t*T+i*S+s*A+r*N;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=T*w,e[1]=(x*d*r-h*m*r-x*s*f+i*m*f+h*s*p-i*d*p)*w,e[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*p+i*l*p)*w,e[3]=(h*l*r-a*d*r-h*s*c+i*d*c+a*s*f-i*l*f)*w,e[4]=S*w,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*w,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*w,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*f+t*l*f)*w,e[8]=A*w,e[9]=(g*h*r-u*x*r-g*i*f+t*x*f+u*i*p-t*h*p)*w,e[10]=(o*x*r-g*a*r+g*i*c-t*x*c-o*i*p+t*a*p)*w,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*f-t*a*f)*w,e[12]=N*w,e[13]=(u*x*s-g*h*s+g*i*d-t*x*d-u*i*m+t*h*m)*w,e[14]=(g*a*s-o*x*s-g*i*l+t*x*l+o*i*m-t*a*m)*w,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*d+t*a*d)*w,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,g=r*h,x=o*u,m=o*h,p=a*h,T=l*c,S=l*u,A=l*h,N=i.x,R=i.y,w=i.z;return s[0]=(1-(x+p))*N,s[1]=(f+A)*N,s[2]=(g-S)*N,s[3]=0,s[4]=(f-A)*R,s[5]=(1-(d+p))*R,s[6]=(m+T)*R,s[7]=0,s[8]=(g+S)*w,s[9]=(m-T)*w,s[10]=(1-(d+x))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Ns.set(s[0],s[1],s[2]).length();const o=Ns.set(s[4],s[5],s[6]).length(),a=Ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ln.copy(this);const c=1/r,u=1/o,h=1/a;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=h,Ln.elements[9]*=h,Ln.elements[10]*=h,t.setFromRotationMatrix(Ln),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=gi){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let f,g;if(a===gi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ya)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=gi){const l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),d=(t+e)*c,f=(i+s)*u;let g,x;if(a===gi)g=(o+r)*h,x=-2*h;else if(a===ya)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ns=new P,Ln=new He,F0=new P(0,0,0),B0=new P(1,1,1),Pi=new P,wo=new P,xn=new P,dd=new He,fd=new Qn;class Gn{constructor(e=0,t=0,i=0,s=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return dd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fd.setFromEuler(this),this.setFromQuaternion(fd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class Gu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let z0=0;const pd=new P,Os=new Qn,ai=new He,Co=new P,wr=new P,k0=new P,V0=new Qn,md=new P(1,0,0),gd=new P(0,1,0),_d=new P(0,0,1),vd={type:"added"},H0={type:"removed"},Us={type:"childadded",child:null},yl={type:"childremoved",child:null};class _t extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new P,t=new Gn,i=new Qn,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new Xe}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(md,e)}rotateY(e){return this.rotateOnAxis(gd,e)}rotateZ(e){return this.rotateOnAxis(_d,e)}translateOnAxis(e,t){return pd.copy(e).applyQuaternion(this.quaternion),this.position.add(pd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(md,e)}translateY(e){return this.translateOnAxis(gd,e)}translateZ(e){return this.translateOnAxis(_d,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Co.copy(e):Co.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(wr,Co,this.up):ai.lookAt(Co,wr,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),Os.setFromRotationMatrix(ai),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vd),Us.child=e,this.dispatchEvent(Us),Us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(H0),yl.child=e,this.dispatchEvent(yl),yl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vd),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,e,k0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,V0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}_t.DEFAULT_UP=new P(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new P,li=new P,Sl=new P,ci=new P,Fs=new P,Bs=new P,xd=new P,bl=new P,El=new P,Tl=new P,Al=new ot,wl=new ot,Cl=new ot;class Fn{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Nn.subVectors(e,t),s.cross(Nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Nn.subVectors(s,t),li.subVectors(i,t),Sl.subVectors(e,t);const o=Nn.dot(Nn),a=Nn.dot(li),l=Nn.dot(Sl),c=li.dot(li),u=li.dot(Sl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ci.x),l.addScaledVector(o,ci.y),l.addScaledVector(a,ci.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Al.setScalar(0),wl.setScalar(0),Cl.setScalar(0),Al.fromBufferAttribute(e,t),wl.fromBufferAttribute(e,i),Cl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Al,r.x),o.addScaledVector(wl,r.y),o.addScaledVector(Cl,r.z),o}static isFrontFacing(e,t,i,s){return Nn.subVectors(i,t),li.subVectors(e,t),Nn.cross(li).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Nn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Fn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Fs.subVectors(s,i),Bs.subVectors(r,i),bl.subVectors(e,i);const l=Fs.dot(bl),c=Bs.dot(bl);if(l<=0&&c<=0)return t.copy(i);El.subVectors(e,s);const u=Fs.dot(El),h=Bs.dot(El);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Fs,o);Tl.subVectors(e,r);const f=Fs.dot(Tl),g=Bs.dot(Tl);if(g>=0&&f<=g)return t.copy(r);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Bs,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return xd.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(xd,a);const p=1/(m+x+d);return o=x*p,a=d*p,t.copy(i).addScaledVector(Fs,o).addScaledVector(Bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function Rl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ae{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=nt.workingColorSpace){if(e=Hu(e,1),t=Vt(t,0,1),i=Vt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Rl(o,r,e+1/3),this.g=Rl(o,r,e),this.b=Rl(o,r,e-1/3)}return nt.toWorkingColorSpace(this,s),this}setStyle(e,t=on){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){const i=fm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=fl(e.r),this.g=fl(e.g),this.b=fl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return nt.fromWorkingColorSpace($t.copy(this),e),Math.round(Vt($t.r*255,0,255))*65536+Math.round(Vt($t.g*255,0,255))*256+Math.round(Vt($t.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace($t.copy(this),t);const i=$t.r,s=$t.g,r=$t.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=on){nt.fromWorkingColorSpace($t.copy(this),e);const t=$t.r,i=$t.g,s=$t.b;return e!==on?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+t,Ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ii),e.getHSL(Ro);const i=Xr(Ii.h,Ro.h,t),s=Xr(Ii.s,Ro.s,t),r=Xr(Ii.l,Ro.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new Ae;Ae.NAMES=fm;let G0=0;class Hn extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=Vn(),this.name="",this.type="Material",this.blending=Qs,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vc,this.blendDst=xc,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(i.blending=this.blending),this.side!==Jn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vc&&(i.blendSrc=this.blendSrc),this.blendDst!==xc&&(i.blendDst=this.blendDst),this.blendEquation!==pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==rr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class vs extends Hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Kp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new P,Po=new _e;class qt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=nu,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Po.fromBufferAttribute(this,t),Po.applyMatrix3(e),this.setXY(t,Po.x,Po.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nu&&(e.usage=this.usage),e}}class pm extends qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class mm extends qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Zt extends qt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let W0=0;const Tn=new He,Pl=new _t,zs=new P,Mn=new Si,Cr=new Si,Dt=new P;class Jt extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(um(e)?mm:pm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Xe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,i){return Tn.makeTranslation(e,t,i),this.applyMatrix4(Tn),this}scale(e,t,i){return Tn.makeScale(e,t,i),this.applyMatrix4(Tn),this}lookAt(e){return Pl.lookAt(e),Pl.updateMatrix(),this.applyMatrix4(Pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Zt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Cr.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(Mn.min,Cr.min),Mn.expandByPoint(Dt),Dt.addVectors(Mn.max,Cr.max),Mn.expandByPoint(Dt)):(Mn.expandByPoint(Cr.min),Mn.expandByPoint(Cr.max))}Mn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Dt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Dt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Dt.fromBufferAttribute(a,c),l&&(zs.fromBufferAttribute(e,c),Dt.add(zs)),s=Math.max(s,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new P,l[D]=new P;const c=new P,u=new P,h=new P,d=new _e,f=new _e,g=new _e,x=new P,m=new P;function p(D,ne,M){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,ne),h.fromBufferAttribute(i,M),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,ne),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const E=1/(f.x*g.y-g.x*f.y);isFinite(E)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(E),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(E),a[D].add(x),a[ne].add(x),a[M].add(x),l[D].add(m),l[ne].add(m),l[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let D=0,ne=T.length;D<ne;++D){const M=T[D],E=M.start,F=M.count;for(let V=E,Q=E+F;V<Q;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const S=new P,A=new P,N=new P,R=new P;function w(D){N.fromBufferAttribute(s,D),R.copy(N);const ne=a[D];S.copy(ne),S.sub(N.multiplyScalar(N.dot(ne))).normalize(),A.crossVectors(R,ne);const E=A.dot(l[D])<0?-1:1;o.setXYZW(D,S.x,S.y,S.z,E)}for(let D=0,ne=T.length;D<ne;++D){const M=T[D],E=M.start,F=M.count;for(let V=E,Q=E+F;V<Q;V+=3)w(e.getX(V+0)),w(e.getX(V+1)),w(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new qt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Jt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Md=new He,ls=new pr,Io=new ti,yd=new P,Do=new P,Lo=new P,No=new P,Il=new P,Oo=new P,Sd=new P,Uo=new P;class Wt extends _t{constructor(e=new Jt,t=new vs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Oo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Il.fromBufferAttribute(h,e),o?Oo.addScaledVector(Il,u):Oo.addScaledVector(Il.sub(t),u))}t.add(Oo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(r),ls.copy(e.ray).recast(e.near),!(Io.containsPoint(ls.origin)===!1&&(ls.intersectSphere(Io,yd)===null||ls.origin.distanceToSquared(yd)>(e.far-e.near)**2))&&(Md.copy(r).invert(),ls.copy(e.ray).applyMatrix4(Md),!(i.boundingBox!==null&&ls.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let A=T,N=S;A<N;A+=3){const R=a.getX(A),w=a.getX(A+1),D=a.getX(A+2);s=Fo(this,p,e,i,c,u,h,R,w,D),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const T=a.getX(m),S=a.getX(m+1),A=a.getX(m+2);s=Fo(this,o,e,i,c,u,h,T,S,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let A=T,N=S;A<N;A+=3){const R=A,w=A+1,D=A+2;s=Fo(this,p,e,i,c,u,h,R,w,D),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const T=m,S=m+1,A=m+2;s=Fo(this,o,e,i,c,u,h,T,S,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function j0(n,e,t,i,s,r,o,a){let l;if(e.side===pn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Jn,a),l===null)return null;Uo.copy(a),Uo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Uo);return c<t.near||c>t.far?null:{distance:c,point:Uo.clone(),object:n}}function Fo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Do),n.getVertexPosition(l,Lo),n.getVertexPosition(c,No);const u=j0(n,e,t,i,Do,Lo,No,Sd);if(u){const h=new P;Fn.getBarycoord(Sd,Do,Lo,No,h),s&&(u.uv=Fn.getInterpolatedAttribute(s,a,l,c,h,new _e)),r&&(u.uv1=Fn.getInterpolatedAttribute(r,a,l,c,h,new _e)),o&&(u.normal=Fn.getInterpolatedAttribute(o,a,l,c,h,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new P,materialIndex:0};Fn.getNormal(Do,Lo,No,d.normal),u.face=d,u.barycoord=h}return u}class qi extends Jt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(h,2));function g(x,m,p,T,S,A,N,R,w,D,ne){const M=A/w,E=N/D,F=A/2,V=N/2,Q=R/2,ae=w+1,$=D+1;let J=0,H=0;const me=new P;for(let ve=0;ve<$;ve++){const Te=ve*E-V;for(let We=0;We<ae;We++){const tt=We*M-F;me[x]=tt*T,me[m]=Te*S,me[p]=Q,c.push(me.x,me.y,me.z),me[x]=0,me[m]=0,me[p]=R>0?1:-1,u.push(me.x,me.y,me.z),h.push(We/w),h.push(1-ve/D),J+=1}}for(let ve=0;ve<D;ve++)for(let Te=0;Te<w;Te++){const We=d+Te+ae*ve,tt=d+Te+ae*(ve+1),te=d+(Te+1)+ae*(ve+1),he=d+(Te+1)+ae*ve;l.push(We,tt,he),l.push(tt,te,he),H+=6}a.addGroup(f,H,ne),f+=H,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ur(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function sn(n){const e={};for(let t=0;t<n.length;t++){const i=ur(n[t]);for(const s in i)e[s]=i[s]}return e}function X0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function gm(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const xs={clone:ur,merge:sn};var $0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Y0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Et extends Hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$0,this.fragmentShader=Y0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ur(e.uniforms),this.uniformsGroups=X0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class _m extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Di=new P,bd=new _e,Ed=new _e;class an extends _m{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cr*2*Math.atan(Math.tan(jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,t){return this.getViewBounds(e,bd,Ed),t.subVectors(Ed,bd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ks=-90,Vs=1;class K0 extends _t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new an(ks,Vs,e,t);s.layers=this.layers,this.add(s);const r=new an(ks,Vs,e,t);r.layers=this.layers,this.add(r);const o=new an(ks,Vs,e,t);o.layers=this.layers,this.add(o);const a=new an(ks,Vs,e,t);a.layers=this.layers,this.add(a);const l=new an(ks,Vs,e,t);l.layers=this.layers,this.add(l);const c=new an(ks,Vs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ya)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class vm extends Ft{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:or,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class q0 extends kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new vm(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qi(5,5,5),r=new Et({name:"CubemapFromEquirect",uniforms:ur(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:Nt});r.uniforms.tEquirect.value=t;const o=new Wt(s,r),a=t.minFilter;return t.minFilter===mi&&(t.minFilter=yn),new K0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Dl=new P,Z0=new P,J0=new Xe;class $n{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Dl.subVectors(i,t).cross(Z0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Dl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||J0.getNormalMatrix(e),s=this.coplanarPoint(Dl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cs=new ti,Bo=new P;class Wu{constructor(e=new $n,t=new $n,i=new $n,s=new $n,r=new $n,o=new $n){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=gi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],T=s[13],S=s[14],A=s[15];if(i[0].setComponents(l-r,d-c,m-f,A-p).normalize(),i[1].setComponents(l+r,d+c,m+f,A+p).normalize(),i[2].setComponents(l+o,d+u,m+g,A+T).normalize(),i[3].setComponents(l-o,d-u,m-g,A-T).normalize(),i[4].setComponents(l-a,d-h,m-x,A-S).normalize(),t===gi)i[5].setComponents(l+a,d+h,m+x,A+S).normalize();else if(t===ya)i[5].setComponents(a,h,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){return cs.center.set(0,0,0),cs.radius=.7071067811865476,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Bo.x=s.normal.x>0?e.max.x:e.min.x,Bo.y=s.normal.y>0?e.max.y:e.min.y,Bo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Bo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xm(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Q0(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const x=h[f];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Ga extends Jt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const T=p*d-o;for(let S=0;S<c;S++){const A=S*h-r;g.push(A,-T,0),x.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const S=T+c*p,A=T+c*(p+1),N=T+1+c*(p+1),R=T+1+c*p;f.push(S,A,R),f.push(A,N,R)}this.setIndex(f),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(x,3)),this.setAttribute("uv",new Zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.width,e.height,e.widthSegments,e.heightSegments)}}var e1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,t1=`#ifdef USE_ALPHAHASH
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
#endif`,n1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,i1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,s1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,r1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,o1=`#ifdef USE_AOMAP
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
#endif`,a1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,l1=`#ifdef USE_BATCHING
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
#endif`,c1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,u1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,h1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,d1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,f1=`#ifdef USE_IRIDESCENCE
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
#endif`,p1=`#ifdef USE_BUMPMAP
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
#endif`,m1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,g1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,v1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,x1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,M1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,y1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,S1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,b1=`#define PI 3.141592653589793
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
} // validated`,E1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,T1=`vec3 transformedNormal = objectNormal;
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
#endif`,A1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,w1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,C1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,R1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,P1="gl_FragColor = linearToOutputTexel( gl_FragColor );",I1=`
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
}`,D1=`#ifdef USE_ENVMAP
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
#endif`,L1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,N1=`#ifdef USE_ENVMAP
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
#endif`,O1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,U1=`#ifdef USE_ENVMAP
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
#endif`,F1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,B1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,z1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,k1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,V1=`#ifdef USE_GRADIENTMAP
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
}`,H1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,G1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,W1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j1=`uniform bool receiveShadow;
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
#endif`,X1=`#ifdef USE_ENVMAP
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
#endif`,$1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Y1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,q1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Z1=`PhysicalMaterial material;
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
#endif`,J1=`struct PhysicalMaterial {
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
}`,Q1=`
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
#endif`,ex=`#if defined( RE_IndirectDiffuse )
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
#endif`,tx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ix=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ox=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ax=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cx=`#if defined( USE_POINTS_UV )
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
#endif`,ux=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,px=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mx=`#ifdef USE_MORPHTARGETS
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
#endif`,gx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_x=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sx=`#ifdef USE_NORMALMAP
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
#endif`,bx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ex=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ax=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Px=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ix=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ox=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ux=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bx=`float getShadowMask() {
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
}`,zx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kx=`#ifdef USE_SKINNING
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
#endif`,Vx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hx=`#ifdef USE_SKINNING
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
#endif`,Gx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$x=`#ifdef USE_TRANSMISSION
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
#endif`,Yx=`#ifdef USE_TRANSMISSION
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
#endif`,Kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eM=`uniform sampler2D t2D;
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
}`,tM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,iM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rM=`#include <common>
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
}`,oM=`#if DEPTH_PACKING == 3200
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
}`,aM=`#define DISTANCE
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
}`,lM=`#define DISTANCE
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
}`,cM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hM=`uniform float scale;
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
}`,dM=`uniform vec3 diffuse;
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
}`,fM=`#include <common>
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
}`,pM=`uniform vec3 diffuse;
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
}`,mM=`#define LAMBERT
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
}`,gM=`#define LAMBERT
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
}`,_M=`#define MATCAP
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
}`,vM=`#define MATCAP
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
}`,xM=`#define NORMAL
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
}`,MM=`#define NORMAL
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
}`,yM=`#define PHONG
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
}`,SM=`#define PHONG
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
}`,bM=`#define STANDARD
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
}`,EM=`#define STANDARD
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
}`,TM=`#define TOON
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
}`,AM=`#define TOON
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
}`,wM=`uniform float size;
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
}`,CM=`uniform vec3 diffuse;
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
}`,RM=`#include <common>
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
}`,PM=`uniform vec3 color;
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
}`,IM=`uniform float rotation;
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
}`,DM=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:e1,alphahash_pars_fragment:t1,alphamap_fragment:n1,alphamap_pars_fragment:i1,alphatest_fragment:s1,alphatest_pars_fragment:r1,aomap_fragment:o1,aomap_pars_fragment:a1,batching_pars_vertex:l1,batching_vertex:c1,begin_vertex:u1,beginnormal_vertex:h1,bsdfs:d1,iridescence_fragment:f1,bumpmap_pars_fragment:p1,clipping_planes_fragment:m1,clipping_planes_pars_fragment:g1,clipping_planes_pars_vertex:_1,clipping_planes_vertex:v1,color_fragment:x1,color_pars_fragment:M1,color_pars_vertex:y1,color_vertex:S1,common:b1,cube_uv_reflection_fragment:E1,defaultnormal_vertex:T1,displacementmap_pars_vertex:A1,displacementmap_vertex:w1,emissivemap_fragment:C1,emissivemap_pars_fragment:R1,colorspace_fragment:P1,colorspace_pars_fragment:I1,envmap_fragment:D1,envmap_common_pars_fragment:L1,envmap_pars_fragment:N1,envmap_pars_vertex:O1,envmap_physical_pars_fragment:X1,envmap_vertex:U1,fog_vertex:F1,fog_pars_vertex:B1,fog_fragment:z1,fog_pars_fragment:k1,gradientmap_pars_fragment:V1,lightmap_pars_fragment:H1,lights_lambert_fragment:G1,lights_lambert_pars_fragment:W1,lights_pars_begin:j1,lights_toon_fragment:$1,lights_toon_pars_fragment:Y1,lights_phong_fragment:K1,lights_phong_pars_fragment:q1,lights_physical_fragment:Z1,lights_physical_pars_fragment:J1,lights_fragment_begin:Q1,lights_fragment_maps:ex,lights_fragment_end:tx,logdepthbuf_fragment:nx,logdepthbuf_pars_fragment:ix,logdepthbuf_pars_vertex:sx,logdepthbuf_vertex:rx,map_fragment:ox,map_pars_fragment:ax,map_particle_fragment:lx,map_particle_pars_fragment:cx,metalnessmap_fragment:ux,metalnessmap_pars_fragment:hx,morphinstance_vertex:dx,morphcolor_vertex:fx,morphnormal_vertex:px,morphtarget_pars_vertex:mx,morphtarget_vertex:gx,normal_fragment_begin:_x,normal_fragment_maps:vx,normal_pars_fragment:xx,normal_pars_vertex:Mx,normal_vertex:yx,normalmap_pars_fragment:Sx,clearcoat_normal_fragment_begin:bx,clearcoat_normal_fragment_maps:Ex,clearcoat_pars_fragment:Tx,iridescence_pars_fragment:Ax,opaque_fragment:wx,packing:Cx,premultiplied_alpha_fragment:Rx,project_vertex:Px,dithering_fragment:Ix,dithering_pars_fragment:Dx,roughnessmap_fragment:Lx,roughnessmap_pars_fragment:Nx,shadowmap_pars_fragment:Ox,shadowmap_pars_vertex:Ux,shadowmap_vertex:Fx,shadowmask_pars_fragment:Bx,skinbase_vertex:zx,skinning_pars_vertex:kx,skinning_vertex:Vx,skinnormal_vertex:Hx,specularmap_fragment:Gx,specularmap_pars_fragment:Wx,tonemapping_fragment:jx,tonemapping_pars_fragment:Xx,transmission_fragment:$x,transmission_pars_fragment:Yx,uv_pars_fragment:Kx,uv_pars_vertex:qx,uv_vertex:Zx,worldpos_vertex:Jx,background_vert:Qx,background_frag:eM,backgroundCube_vert:tM,backgroundCube_frag:nM,cube_vert:iM,cube_frag:sM,depth_vert:rM,depth_frag:oM,distanceRGBA_vert:aM,distanceRGBA_frag:lM,equirect_vert:cM,equirect_frag:uM,linedashed_vert:hM,linedashed_frag:dM,meshbasic_vert:fM,meshbasic_frag:pM,meshlambert_vert:mM,meshlambert_frag:gM,meshmatcap_vert:_M,meshmatcap_frag:vM,meshnormal_vert:xM,meshnormal_frag:MM,meshphong_vert:yM,meshphong_frag:SM,meshphysical_vert:bM,meshphysical_frag:EM,meshtoon_vert:TM,meshtoon_frag:AM,points_vert:wM,points_frag:CM,shadow_vert:RM,shadow_frag:PM,sprite_vert:IM,sprite_frag:DM},pe={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Yn={basic:{uniforms:sn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:sn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ae(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:sn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:sn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:sn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ae(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:sn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:sn([pe.points,pe.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:sn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:sn([pe.common,pe.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:sn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:sn([pe.sprite,pe.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:sn([pe.common,pe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:sn([pe.lights,pe.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Yn.physical={uniforms:sn([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const zo={r:0,b:0,g:0},us=new Gn,LM=new He;function NM(n,e,t,i,s,r,o){const a=new Ae(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?t:e).get(S)),S}function x(T){let S=!1;const A=g(T);A===null?p(a,l):A&&A.isColor&&(p(A,1),S=!0);const N=n.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,S){const A=g(S);A&&(A.isCubeTexture||A.mapping===Va)?(u===void 0&&(u=new Wt(new qi(1,1,1),new Et({name:"BackgroundCubeMaterial",uniforms:ur(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),us.copy(S.backgroundRotation),us.x*=-1,us.y*=-1,us.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(LM.makeRotationFromEuler(us)),u.material.toneMapped=nt.getTransfer(A.colorSpace)!==gt,(h!==A||d!==A.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=A,d=A.version,f=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Wt(new Ga(2,2),new Et({name:"BackgroundMaterial",uniforms:ur(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=nt.getTransfer(A.colorSpace)!==gt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||d!==A.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=A,d=A.version,f=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,S){T.getRGB(zo,gm(n)),i.buffers.color.setClear(zo.r,zo.g,zo.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(T,S=1){a.set(T),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(a,l)},render:x,addToRenderList:m}}function OM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(M,E,F,V,Q){let ae=!1;const $=h(V,F,E);r!==$&&(r=$,c(r.object)),ae=f(M,V,F,Q),ae&&g(M,V,F,Q),Q!==null&&e.update(Q,n.ELEMENT_ARRAY_BUFFER),(ae||o)&&(o=!1,A(M,E,F,V),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,E,F){const V=F.wireframe===!0;let Q=i[M.id];Q===void 0&&(Q={},i[M.id]=Q);let ae=Q[E.id];ae===void 0&&(ae={},Q[E.id]=ae);let $=ae[V];return $===void 0&&($=d(l()),ae[V]=$),$}function d(M){const E=[],F=[],V=[];for(let Q=0;Q<t;Q++)E[Q]=0,F[Q]=0,V[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:F,attributeDivisors:V,object:M,attributes:{},index:null}}function f(M,E,F,V){const Q=r.attributes,ae=E.attributes;let $=0;const J=F.getAttributes();for(const H in J)if(J[H].location>=0){const ve=Q[H];let Te=ae[H];if(Te===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(Te=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(Te=M.instanceColor)),ve===void 0||ve.attribute!==Te||Te&&ve.data!==Te.data)return!0;$++}return r.attributesNum!==$||r.index!==V}function g(M,E,F,V){const Q={},ae=E.attributes;let $=0;const J=F.getAttributes();for(const H in J)if(J[H].location>=0){let ve=ae[H];ve===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor));const Te={};Te.attribute=ve,ve&&ve.data&&(Te.data=ve.data),Q[H]=Te,$++}r.attributes=Q,r.attributesNum=$,r.index=V}function x(){const M=r.newAttributes;for(let E=0,F=M.length;E<F;E++)M[E]=0}function m(M){p(M,0)}function p(M,E){const F=r.newAttributes,V=r.enabledAttributes,Q=r.attributeDivisors;F[M]=1,V[M]===0&&(n.enableVertexAttribArray(M),V[M]=1),Q[M]!==E&&(n.vertexAttribDivisor(M,E),Q[M]=E)}function T(){const M=r.newAttributes,E=r.enabledAttributes;for(let F=0,V=E.length;F<V;F++)E[F]!==M[F]&&(n.disableVertexAttribArray(F),E[F]=0)}function S(M,E,F,V,Q,ae,$){$===!0?n.vertexAttribIPointer(M,E,F,Q,ae):n.vertexAttribPointer(M,E,F,V,Q,ae)}function A(M,E,F,V){x();const Q=V.attributes,ae=F.getAttributes(),$=E.defaultAttributeValues;for(const J in ae){const H=ae[J];if(H.location>=0){let me=Q[J];if(me===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(me=M.instanceColor)),me!==void 0){const ve=me.normalized,Te=me.itemSize,We=e.get(me);if(We===void 0)continue;const tt=We.buffer,te=We.type,he=We.bytesPerElement,ge=te===n.INT||te===n.UNSIGNED_INT||me.gpuType===Lu;if(me.isInterleavedBufferAttribute){const xe=me.data,ze=xe.stride,Oe=me.offset;if(xe.isInstancedInterleavedBuffer){for(let $e=0;$e<H.locationSize;$e++)p(H.location+$e,xe.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let $e=0;$e<H.locationSize;$e++)m(H.location+$e);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let $e=0;$e<H.locationSize;$e++)S(H.location+$e,Te/H.locationSize,te,ve,ze*he,(Oe+Te/H.locationSize*$e)*he,ge)}else{if(me.isInstancedBufferAttribute){for(let xe=0;xe<H.locationSize;xe++)p(H.location+xe,me.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let xe=0;xe<H.locationSize;xe++)m(H.location+xe);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let xe=0;xe<H.locationSize;xe++)S(H.location+xe,Te/H.locationSize,te,ve,Te*he,Te/H.locationSize*xe*he,ge)}}else if($!==void 0){const ve=$[J];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(H.location,ve);break;case 3:n.vertexAttrib3fv(H.location,ve);break;case 4:n.vertexAttrib4fv(H.location,ve);break;default:n.vertexAttrib1fv(H.location,ve)}}}}T()}function N(){D();for(const M in i){const E=i[M];for(const F in E){const V=E[F];for(const Q in V)u(V[Q].object),delete V[Q];delete E[F]}delete i[M]}}function R(M){if(i[M.id]===void 0)return;const E=i[M.id];for(const F in E){const V=E[F];for(const Q in V)u(V[Q].object),delete V[Q];delete E[F]}delete i[M.id]}function w(M){for(const E in i){const F=i[E];if(F[M.id]===void 0)continue;const V=F[M.id];for(const Q in V)u(V[Q].object),delete V[Q];delete F[M.id]}}function D(){ne(),o=!0,r!==s&&(r=s,c(r.object))}function ne(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:ne,dispose:N,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function UM(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,i,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x];for(let x=0;x<d.length;x++)t.update(g,i,d[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function FM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Rn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const D=w===fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==vi&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==zn&&!D)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const w=e.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:A,vertexTextures:N,maxSamples:R}}function BM(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new $n,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const T=r?0:i,S=T*4;let A=p.clippingState||null;l.value=A,A=u(g,d,S,f);for(let N=0;N!==S;++N)A[N]=t[N];p.clippingState=A,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=f+x*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,A=f;S!==x;++S,A+=4)o.copy(h[S]).applyMatrix4(T,a),o.normal.toArray(m,A),m[A+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function zM(n){let e=new WeakMap;function t(o,a){return a===wc?o.mapping=or:a===Cc&&(o.mapping=ar),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===wc||a===Cc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new q0(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Wa extends _m{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xs=4,Td=[.125,.215,.35,.446,.526,.582],gs=20,Ll=new Wa,Ad=new Ae;let Nl=null,Ol=0,Ul=0,Fl=!1;const fs=(1+Math.sqrt(5))/2,Hs=1/fs,wd=[new P(-fs,Hs,0),new P(fs,Hs,0),new P(-Hs,0,fs),new P(Hs,0,fs),new P(0,fs,-Hs),new P(0,fs,Hs),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Cd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Nl=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),Ul=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nl,Ol,Ul),this._renderer.xr.enabled=Fl,e.scissorTest=!1,ko(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===or||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nl=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),Ul=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:fn,format:Rn,colorSpace:jt,depthBuffer:!1},s=Rd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rd(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kM(r)),this._blurMaterial=VM(r,e,t)}return s}_compileMaterial(e){const t=new Wt(this._lodPlanes[0],e);this._renderer.compile(t,Ll)}_sceneToCubeUV(e,t,i,s){const a=new an(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Ad),u.toneMapping=$i,u.autoClear=!1;const f=new vs({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),g=new Wt(new qi,f);let x=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(Ad),x=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):T===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const S=this._cubeSize;ko(s,T*S,p>2?S:0,S,S),u.setRenderTarget(s),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===or||e.mapping===ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Id()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Wt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ko(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ll)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=wd[(s-r-1)%wd.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Wt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*gs-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):gs;m>gs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gs}`);const p=[];let T=0;for(let w=0;w<gs;++w){const D=w/x,ne=Math.exp(-D*D/2);p.push(ne),w===0?T+=ne:w<m&&(T+=2*ne)}for(let w=0;w<p.length;w++)p[w]=p[w]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-i;const A=this._sizeLods[s],N=3*A*(s>S-Xs?s-S+Xs:0),R=4*(this._cubeSize-A);ko(t,N,R,3*A,2*A),l.setRenderTarget(t),l.render(h,Ll)}}function kM(n){const e=[],t=[],i=[];let s=n;const r=n-Xs+1+Td.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Xs?l=Td[o-n+Xs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,m=2,p=1,T=new Float32Array(x*g*f),S=new Float32Array(m*g*f),A=new Float32Array(p*g*f);for(let R=0;R<f;R++){const w=R%3*2/3-1,D=R>2?0:-1,ne=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];T.set(ne,x*g*R),S.set(d,m*g*R);const M=[R,R,R,R,R,R];A.set(M,p*g*R)}const N=new Jt;N.setAttribute("position",new qt(T,x)),N.setAttribute("uv",new qt(S,m)),N.setAttribute("faceIndex",new qt(A,p)),e.push(N),s>Xs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Rd(n,e,t){const i=new kt(n,e,t);return i.texture.mapping=Va,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ko(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function VM(n,e,t){const i=new Float32Array(gs),s=new P(0,1,0);return new Et({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ju(),fragmentShader:`

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
		`,blending:Nt,depthTest:!1,depthWrite:!1})}function Pd(){return new Et({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ju(),fragmentShader:`

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
		`,blending:Nt,depthTest:!1,depthWrite:!1})}function Id(){return new Et({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nt,depthTest:!1,depthWrite:!1})}function ju(){return`

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
	`}function HM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===wc||l===Cc,u=l===or||l===ar;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Cd(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Cd(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function GM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&la("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function WM(n,e,t,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let x=0;if(f!==null){const T=f.array;x=f.version;for(let S=0,A=T.length;S<A;S+=3){const N=T[S+0],R=T[S+1],w=T[S+2];d.push(N,R,R,w,w,N)}}else if(g!==void 0){const T=g.array;x=g.version;for(let S=0,A=T.length/3-1;S<A;S+=3){const N=S+0,R=S+1,w=S+2;d.push(N,R,R,w,w,N)}}else return;const m=new(um(d)?mm:pm)(d,1);m.version=x;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function jM(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*o,g),t.update(f,i,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function h(d,f,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,x,0,g);let p=0;for(let T=0;T<g;T++)p+=f[T];for(let T=0;T<x.length;T++)t.update(p,i,x[T])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function XM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function $M(n,e,t){const i=new WeakMap,s=new ot;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let M=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let A=0;g===!0&&(A=1),x===!0&&(A=2),m===!0&&(A=3);let N=a.attributes.position.count*A,R=1;N>e.maxTextureSize&&(R=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const w=new Float32Array(N*R*4*h),D=new dm(w,N,R,h);D.type=zn,D.needsUpdate=!0;const ne=A*4;for(let E=0;E<h;E++){const F=p[E],V=T[E],Q=S[E],ae=N*R*4*E;for(let $=0;$<F.count;$++){const J=$*ne;g===!0&&(s.fromBufferAttribute(F,$),w[ae+J+0]=s.x,w[ae+J+1]=s.y,w[ae+J+2]=s.z,w[ae+J+3]=0),x===!0&&(s.fromBufferAttribute(V,$),w[ae+J+4]=s.x,w[ae+J+5]=s.y,w[ae+J+6]=s.z,w[ae+J+7]=0),m===!0&&(s.fromBufferAttribute(Q,$),w[ae+J+8]=s.x,w[ae+J+9]=s.y,w[ae+J+10]=s.z,w[ae+J+11]=Q.itemSize===4?s.w:1)}}d={count:h,texture:D,size:new _e(N,R)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function YM(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Xu extends Ft{constructor(e,t,i,s,r,o,a,l,c,u=er){if(u!==er&&u!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===er&&(i=Ss),i===void 0&&u===Es&&(i=bs),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Gt,this.minFilter=l!==void 0?l:Gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Mm=new Ft,Dd=new Xu(1,1),ym=new dm,Sm=new O0,bm=new vm,Ld=[],Nd=[],Od=new Float32Array(16),Ud=new Float32Array(9),Fd=new Float32Array(4);function mr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Ld[s];if(r===void 0&&(r=new Float32Array(s),Ld[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ja(n,e){let t=Nd[e];t===void 0&&(t=new Int32Array(e),Nd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function KM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function qM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function ZM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function JM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function QM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,i))return;Fd.set(i),n.uniformMatrix2fv(this.addr,!1,Fd),It(t,i)}}function ey(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,i))return;Ud.set(i),n.uniformMatrix3fv(this.addr,!1,Ud),It(t,i)}}function ty(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,i))return;Od.set(i),n.uniformMatrix4fv(this.addr,!1,Od),It(t,i)}}function ny(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function iy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function sy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function ry(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function oy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ay(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function ly(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function cy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function uy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Dd.compareFunction=cm,r=Dd):r=Mm,t.setTexture2D(e||r,s)}function hy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Sm,s)}function dy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||bm,s)}function fy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||ym,s)}function py(n){switch(n){case 5126:return KM;case 35664:return qM;case 35665:return ZM;case 35666:return JM;case 35674:return QM;case 35675:return ey;case 35676:return ty;case 5124:case 35670:return ny;case 35667:case 35671:return iy;case 35668:case 35672:return sy;case 35669:case 35673:return ry;case 5125:return oy;case 36294:return ay;case 36295:return ly;case 36296:return cy;case 35678:case 36198:case 36298:case 36306:case 35682:return uy;case 35679:case 36299:case 36307:return hy;case 35680:case 36300:case 36308:case 36293:return dy;case 36289:case 36303:case 36311:case 36292:return fy}}function my(n,e){n.uniform1fv(this.addr,e)}function gy(n,e){const t=mr(e,this.size,2);n.uniform2fv(this.addr,t)}function _y(n,e){const t=mr(e,this.size,3);n.uniform3fv(this.addr,t)}function vy(n,e){const t=mr(e,this.size,4);n.uniform4fv(this.addr,t)}function xy(n,e){const t=mr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function My(n,e){const t=mr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function yy(n,e){const t=mr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Sy(n,e){n.uniform1iv(this.addr,e)}function by(n,e){n.uniform2iv(this.addr,e)}function Ey(n,e){n.uniform3iv(this.addr,e)}function Ty(n,e){n.uniform4iv(this.addr,e)}function Ay(n,e){n.uniform1uiv(this.addr,e)}function wy(n,e){n.uniform2uiv(this.addr,e)}function Cy(n,e){n.uniform3uiv(this.addr,e)}function Ry(n,e){n.uniform4uiv(this.addr,e)}function Py(n,e,t){const i=this.cache,s=e.length,r=ja(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Mm,r[o])}function Iy(n,e,t){const i=this.cache,s=e.length,r=ja(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Sm,r[o])}function Dy(n,e,t){const i=this.cache,s=e.length,r=ja(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||bm,r[o])}function Ly(n,e,t){const i=this.cache,s=e.length,r=ja(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ym,r[o])}function Ny(n){switch(n){case 5126:return my;case 35664:return gy;case 35665:return _y;case 35666:return vy;case 35674:return xy;case 35675:return My;case 35676:return yy;case 5124:case 35670:return Sy;case 35667:case 35671:return by;case 35668:case 35672:return Ey;case 35669:case 35673:return Ty;case 5125:return Ay;case 36294:return wy;case 36295:return Cy;case 36296:return Ry;case 35678:case 36198:case 36298:case 36306:case 35682:return Py;case 35679:case 36299:case 36307:return Iy;case 35680:case 36300:case 36308:case 36293:return Dy;case 36289:case 36303:case 36311:case 36292:return Ly}}class Oy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=py(t.type)}}class Uy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ny(t.type)}}class Fy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Bl=/(\w+)(\])?(\[|\.)?/g;function Bd(n,e){n.seq.push(e),n.map[e.id]=e}function By(n,e,t){const i=n.name,s=i.length;for(Bl.lastIndex=0;;){const r=Bl.exec(i),o=Bl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Bd(t,c===void 0?new Oy(a,n,e):new Uy(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Fy(a),Bd(t,h)),t=h}}}class ca{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);By(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function zd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const zy=37297;let ky=0;function Vy(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Hy(n){const e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(n);let i;switch(e===t?i="":e===Ma&&t===xa?i="LinearDisplayP3ToLinearSRGB":e===xa&&t===Ma&&(i="LinearSRGBToLinearDisplayP3"),n){case jt:case Ha:return[i,"LinearTransferOETF"];case on:case Vu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function kd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Vy(n.getShaderSource(e),o)}else return s}function Gy(n,e){const t=Hy(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Wy(n,e){let t;switch(e){case jv:t="Linear";break;case Xv:t="Reinhard";break;case $v:t="Cineon";break;case Yv:t="ACESFilmic";break;case qv:t="AgX";break;case Zv:t="Neutral";break;case Kv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vo=new P;function jy(){nt.getLuminanceCoefficients(Vo);const n=Vo.x.toFixed(4),e=Vo.y.toFixed(4),t=Vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ur).join(`
`)}function $y(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Yy(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ur(n){return n!==""}function Vd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ky=/^[ \t]*#include +<([\w\d./]+)>/gm;function iu(n){return n.replace(Ky,Zy)}const qy=new Map;function Zy(n,e){let t=je[e];if(t===void 0){const i=qy.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return iu(t)}const Jy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gd(n){return n.replace(Jy,Qy)}function Qy(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function eS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Xp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Cv?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function tS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case or:case ar:e="ENVMAP_TYPE_CUBE";break;case Va:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ar:e="ENVMAP_MODE_REFRACTION";break}return e}function iS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Kp:e="ENVMAP_BLENDING_MULTIPLY";break;case Gv:e="ENVMAP_BLENDING_MIX";break;case Wv:e="ENVMAP_BLENDING_ADD";break}return e}function sS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function rS(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=eS(t),c=tS(t),u=nS(t),h=iS(t),d=sS(t),f=Xy(t),g=$y(r),x=s.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ur).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ur).join(`
`),p.length>0&&(p+=`
`)):(m=[Wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),p=[Wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$i?"#define TONE_MAPPING":"",t.toneMapping!==$i?je.tonemapping_pars_fragment:"",t.toneMapping!==$i?Wy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Gy("linearToOutputTexel",t.outputColorSpace),jy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ur).join(`
`)),o=iu(o),o=Vd(o,t),o=Hd(o,t),a=iu(a),a=Vd(a,t),a=Hd(a,t),o=Gd(o),a=Gd(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===od?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===od?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=T+m+o,A=T+p+a,N=zd(s,s.VERTEX_SHADER,S),R=zd(s,s.FRAGMENT_SHADER,A);s.attachShader(x,N),s.attachShader(x,R),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(E){if(n.debug.checkShaderErrors){const F=s.getProgramInfoLog(x).trim(),V=s.getShaderInfoLog(N).trim(),Q=s.getShaderInfoLog(R).trim();let ae=!0,$=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ae=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,N,R);else{const J=kd(s,N,"vertex"),H=kd(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+F+`
`+J+`
`+H)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(V===""||Q==="")&&($=!1);$&&(E.diagnostics={runnable:ae,programLog:F,vertexShader:{log:V,prefix:m},fragmentShader:{log:Q,prefix:p}})}s.deleteShader(N),s.deleteShader(R),D=new ca(s,x),ne=Yy(s,x)}let D;this.getUniforms=function(){return D===void 0&&w(this),D};let ne;this.getAttributes=function(){return ne===void 0&&w(this),ne};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,zy)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ky++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=N,this.fragmentShader=R,this}let oS=0;class aS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new lS(e),t.set(e,i)),i}}class lS{constructor(e){this.id=oS++,this.code=e,this.usedTimes=0}}function cS(n,e,t,i,s,r,o){const a=new Gu,l=new aS,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures;let g=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,E,F,V,Q){const ae=V.fog,$=Q.geometry,J=M.isMeshStandardMaterial?V.environment:null,H=(M.isMeshStandardMaterial?t:e).get(M.envMap||J),me=H&&H.mapping===Va?H.image.height:null,ve=x[M.type];M.precision!==null&&(g=s.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const Te=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,We=Te!==void 0?Te.length:0;let tt=0;$.morphAttributes.position!==void 0&&(tt=1),$.morphAttributes.normal!==void 0&&(tt=2),$.morphAttributes.color!==void 0&&(tt=3);let te,he,ge,xe;if(ve){const un=Yn[ve];te=un.vertexShader,he=un.fragmentShader}else te=M.vertexShader,he=M.fragmentShader,l.update(M),ge=l.getVertexShaderID(M),xe=l.getFragmentShaderID(M);const ze=n.getRenderTarget(),Oe=Q.isInstancedMesh===!0,$e=Q.isBatchedMesh===!0,it=!!M.map,Ze=!!M.matcap,v=!!H,I=!!M.aoMap,k=!!M.lightMap,K=!!M.bumpMap,G=!!M.normalMap,ie=!!M.displacementMap,ee=!!M.emissiveMap,y=!!M.metalnessMap,_=!!M.roughnessMap,C=M.anisotropy>0,O=M.clearcoat>0,W=M.dispersion>0,z=M.iridescence>0,le=M.sheen>0,se=M.transmission>0,ue=C&&!!M.anisotropyMap,Re=O&&!!M.clearcoatMap,re=O&&!!M.clearcoatNormalMap,fe=O&&!!M.clearcoatRoughnessMap,Ne=z&&!!M.iridescenceMap,Ue=z&&!!M.iridescenceThicknessMap,Me=le&&!!M.sheenColorMap,Ye=le&&!!M.sheenRoughnessMap,Pe=!!M.specularMap,Ke=!!M.specularColorMap,L=!!M.specularIntensityMap,be=se&&!!M.transmissionMap,q=se&&!!M.thicknessMap,oe=!!M.gradientMap,ye=!!M.alphaMap,Ee=M.alphaTest>0,Qe=!!M.alphaHash,St=!!M.extensions;let cn=$i;M.toneMapped&&(ze===null||ze.isXRRenderTarget===!0)&&(cn=n.toneMapping);const st={shaderID:ve,shaderType:M.type,shaderName:M.name,vertexShader:te,fragmentShader:he,defines:M.defines,customVertexShaderID:ge,customFragmentShaderID:xe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:$e,batchingColor:$e&&Q._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&Q.instanceColor!==null,instancingMorph:Oe&&Q.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ze===null?n.outputColorSpace:ze.isXRRenderTarget===!0?ze.texture.colorSpace:jt,alphaToCoverage:!!M.alphaToCoverage,map:it,matcap:Ze,envMap:v,envMapMode:v&&H.mapping,envMapCubeUVHeight:me,aoMap:I,lightMap:k,bumpMap:K,normalMap:G,displacementMap:f&&ie,emissiveMap:ee,normalMapObjectSpace:G&&M.normalMapType===n0,normalMapTangentSpace:G&&M.normalMapType===ku,metalnessMap:y,roughnessMap:_,anisotropy:C,anisotropyMap:ue,clearcoat:O,clearcoatMap:Re,clearcoatNormalMap:re,clearcoatRoughnessMap:fe,dispersion:W,iridescence:z,iridescenceMap:Ne,iridescenceThicknessMap:Ue,sheen:le,sheenColorMap:Me,sheenRoughnessMap:Ye,specularMap:Pe,specularColorMap:Ke,specularIntensityMap:L,transmission:se,transmissionMap:be,thicknessMap:q,gradientMap:oe,opaque:M.transparent===!1&&M.blending===Qs&&M.alphaToCoverage===!1,alphaMap:ye,alphaTest:Ee,alphaHash:Qe,combine:M.combine,mapUv:it&&m(M.map.channel),aoMapUv:I&&m(M.aoMap.channel),lightMapUv:k&&m(M.lightMap.channel),bumpMapUv:K&&m(M.bumpMap.channel),normalMapUv:G&&m(M.normalMap.channel),displacementMapUv:ie&&m(M.displacementMap.channel),emissiveMapUv:ee&&m(M.emissiveMap.channel),metalnessMapUv:y&&m(M.metalnessMap.channel),roughnessMapUv:_&&m(M.roughnessMap.channel),anisotropyMapUv:ue&&m(M.anisotropyMap.channel),clearcoatMapUv:Re&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:re&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&m(M.sheenRoughnessMap.channel),specularMapUv:Pe&&m(M.specularMap.channel),specularColorMapUv:Ke&&m(M.specularColorMap.channel),specularIntensityMapUv:L&&m(M.specularIntensityMap.channel),transmissionMapUv:be&&m(M.transmissionMap.channel),thicknessMapUv:q&&m(M.thicknessMap.channel),alphaMapUv:ye&&m(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(G||C),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!$.attributes.uv&&(it||ye),fog:!!ae,useFog:M.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:Q.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:We,morphTextureStride:tt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:cn,decodeVideoTexture:it&&M.map.isVideoTexture===!0&&nt.getTransfer(M.map.colorSpace)===gt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ln,flipSided:M.side===pn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:St&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&M.extensions.multiDraw===!0||$e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return st.vertexUv1s=c.has(1),st.vertexUv2s=c.has(2),st.vertexUv3s=c.has(3),c.clear(),st}function T(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const F in M.defines)E.push(F),E.push(M.defines[F]);return M.isRawShaderMaterial===!1&&(S(E,M),A(E,M),E.push(n.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function S(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function A(M,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),M.push(a.mask)}function N(M){const E=x[M.type];let F;if(E){const V=Yn[E];F=xs.clone(V.uniforms)}else F=M.uniforms;return F}function R(M,E){let F;for(let V=0,Q=u.length;V<Q;V++){const ae=u[V];if(ae.cacheKey===E){F=ae,++F.usedTimes;break}}return F===void 0&&(F=new rS(n,E,M,r),u.push(F)),F}function w(M){if(--M.usedTimes===0){const E=u.indexOf(M);u[E]=u[u.length-1],u.pop(),M.destroy()}}function D(M){l.remove(M)}function ne(){l.dispose()}return{getParameters:p,getProgramCacheKey:T,getUniforms:N,acquireProgram:R,releaseProgram:w,releaseShaderCache:D,programs:u,dispose:ne}}function uS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function hS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function jd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Xd(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,d,f,g,x,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,d,f,g,x,m){const p=o(h,d,f,g,x,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(h,d,f,g,x,m){const p=o(h,d,f,g,x,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||hS),i.length>1&&i.sort(d||jd),s.length>1&&s.sort(d||jd)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function dS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Xd,n.set(i,[o])):s>=r.length?(o=new Xd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function fS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ae};break;case"SpotLight":t={position:new P,direction:new P,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function pS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let mS=0;function gS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function _S(n){const e=new fS,t=pS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const s=new P,r=new He,o=new He;function a(c){let u=0,h=0,d=0;for(let ne=0;ne<9;ne++)i.probe[ne].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,T=0,S=0,A=0,N=0,R=0,w=0;c.sort(gS);for(let ne=0,M=c.length;ne<M;ne++){const E=c[ne],F=E.color,V=E.intensity,Q=E.distance,ae=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=F.r*V,h+=F.g*V,d+=F.b*V;else if(E.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(E.sh.coefficients[$],V);w++}else if(E.isDirectionalLight){const $=e.get(E);if($.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const J=E.shadow,H=t.get(E);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,i.directionalShadow[f]=H,i.directionalShadowMap[f]=ae,i.directionalShadowMatrix[f]=E.shadow.matrix,T++}i.directional[f]=$,f++}else if(E.isSpotLight){const $=e.get(E);$.position.setFromMatrixPosition(E.matrixWorld),$.color.copy(F).multiplyScalar(V),$.distance=Q,$.coneCos=Math.cos(E.angle),$.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),$.decay=E.decay,i.spot[x]=$;const J=E.shadow;if(E.map&&(i.spotLightMap[N]=E.map,N++,J.updateMatrices(E),E.castShadow&&R++),i.spotLightMatrix[x]=J.matrix,E.castShadow){const H=t.get(E);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,i.spotShadow[x]=H,i.spotShadowMap[x]=ae,A++}x++}else if(E.isRectAreaLight){const $=e.get(E);$.color.copy(F).multiplyScalar(V),$.halfWidth.set(E.width*.5,0,0),$.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=$,m++}else if(E.isPointLight){const $=e.get(E);if($.color.copy(E.color).multiplyScalar(E.intensity),$.distance=E.distance,$.decay=E.decay,E.castShadow){const J=E.shadow,H=t.get(E);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,H.shadowCameraNear=J.camera.near,H.shadowCameraFar=J.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=ae,i.pointShadowMatrix[g]=E.shadow.matrix,S++}i.point[g]=$,g++}else if(E.isHemisphereLight){const $=e.get(E);$.skyColor.copy(E.color).multiplyScalar(V),$.groundColor.copy(E.groundColor).multiplyScalar(V),i.hemi[p]=$,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const D=i.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==T||D.numPointShadows!==S||D.numSpotShadows!==A||D.numSpotMaps!==N||D.numLightProbes!==w)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=A+N-R,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,D.directionalLength=f,D.pointLength=g,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=T,D.numPointShadows=S,D.numSpotShadows=A,D.numSpotMaps=N,D.numLightProbes=w,i.version=mS++)}function l(c,u){let h=0,d=0,f=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const S=c[p];if(S.isDirectionalLight){const A=i.directional[h];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),h++}else if(S.isSpotLight){const A=i.spot[f];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const A=i.rectArea[g];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const A=i.point[d];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const A=i.hemi[x];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function $d(n){const e=new _S(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function vS(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new $d(n),e.set(s,[a])):r>=o.length?(a=new $d(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class Em extends Hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=t0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xS extends Hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const MS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yS=`uniform sampler2D shadow_pass;
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
}`;function SS(n,e,t){let i=new Wu;const s=new _e,r=new _e,o=new ot,a=new Em({depthPacking:lm}),l=new xS,c={},u=t.maxTextureSize,h={[Jn]:pn,[pn]:Jn,[ln]:ln},d=new Et({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:MS,fragmentShader:yS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Jt;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Wt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xp;let p=this.type;this.render=function(R,w,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const ne=n.getRenderTarget(),M=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Nt),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const V=p!==di&&this.type===di,Q=p===di&&this.type!==di;for(let ae=0,$=R.length;ae<$;ae++){const J=R[ae],H=J.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const me=H.getFrameExtents();if(s.multiply(me),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/me.x),s.x=r.x*me.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/me.y),s.y=r.y*me.y,H.mapSize.y=r.y)),H.map===null||V===!0||Q===!0){const Te=this.type!==di?{minFilter:Gt,magFilter:Gt}:{};H.map!==null&&H.map.dispose(),H.map=new kt(s.x,s.y,Te),H.map.texture.name=J.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const ve=H.getViewportCount();for(let Te=0;Te<ve;Te++){const We=H.getViewport(Te);o.set(r.x*We.x,r.y*We.y,r.x*We.z,r.y*We.w),F.viewport(o),H.updateMatrices(J,Te),i=H.getFrustum(),A(w,D,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===di&&T(H,D),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(ne,M,E)};function T(R,w){const D=e.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new kt(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(w,null,D,d,x,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(w,null,D,f,x,null)}function S(R,w,D,ne){let M=null;const E=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(E!==void 0)M=E;else if(M=D.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const F=M.uuid,V=w.uuid;let Q=c[F];Q===void 0&&(Q={},c[F]=Q);let ae=Q[V];ae===void 0&&(ae=M.clone(),Q[V]=ae,w.addEventListener("dispose",N)),M=ae}if(M.visible=w.visible,M.wireframe=w.wireframe,ne===di?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:h[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=n.properties.get(M);F.light=D}return M}function A(R,w,D,ne,M){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===di)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const V=e.update(R),Q=R.material;if(Array.isArray(Q)){const ae=V.groups;for(let $=0,J=ae.length;$<J;$++){const H=ae[$],me=Q[H.materialIndex];if(me&&me.visible){const ve=S(R,me,ne,M);R.onBeforeShadow(n,R,w,D,V,ve,H),n.renderBufferDirect(D,null,V,ve,R,H),R.onAfterShadow(n,R,w,D,V,ve,H)}}}else if(Q.visible){const ae=S(R,Q,ne,M);R.onBeforeShadow(n,R,w,D,V,ae,null),n.renderBufferDirect(D,null,V,ae,R,null),R.onAfterShadow(n,R,w,D,V,ae,null)}}const F=R.children;for(let V=0,Q=F.length;V<Q;V++)A(F[V],w,D,ne,M)}function N(R){R.target.removeEventListener("dispose",N);for(const D in c){const ne=c[D],M=R.target.uuid;M in ne&&(ne[M].dispose(),delete ne[M])}}}const bS={[Mc]:yc,[Sc]:Tc,[bc]:Ac,[rr]:Ec,[yc]:Mc,[Tc]:Sc,[Ac]:bc,[Ec]:rr};function ES(n){function e(){let L=!1;const be=new ot;let q=null;const oe=new ot(0,0,0,0);return{setMask:function(ye){q!==ye&&!L&&(n.colorMask(ye,ye,ye,ye),q=ye)},setLocked:function(ye){L=ye},setClear:function(ye,Ee,Qe,St,cn){cn===!0&&(ye*=St,Ee*=St,Qe*=St),be.set(ye,Ee,Qe,St),oe.equals(be)===!1&&(n.clearColor(ye,Ee,Qe,St),oe.copy(be))},reset:function(){L=!1,q=null,oe.set(-1,0,0,0)}}}function t(){let L=!1,be=!1,q=null,oe=null,ye=null;return{setReversed:function(Ee){be=Ee},setTest:function(Ee){Ee?ge(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(Ee){q!==Ee&&!L&&(n.depthMask(Ee),q=Ee)},setFunc:function(Ee){if(be&&(Ee=bS[Ee]),oe!==Ee){switch(Ee){case Mc:n.depthFunc(n.NEVER);break;case yc:n.depthFunc(n.ALWAYS);break;case Sc:n.depthFunc(n.LESS);break;case rr:n.depthFunc(n.LEQUAL);break;case bc:n.depthFunc(n.EQUAL);break;case Ec:n.depthFunc(n.GEQUAL);break;case Tc:n.depthFunc(n.GREATER);break;case Ac:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=Ee}},setLocked:function(Ee){L=Ee},setClear:function(Ee){ye!==Ee&&(n.clearDepth(Ee),ye=Ee)},reset:function(){L=!1,q=null,oe=null,ye=null}}}function i(){let L=!1,be=null,q=null,oe=null,ye=null,Ee=null,Qe=null,St=null,cn=null;return{setTest:function(st){L||(st?ge(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(st){be!==st&&!L&&(n.stencilMask(st),be=st)},setFunc:function(st,un,si){(q!==st||oe!==un||ye!==si)&&(n.stencilFunc(st,un,si),q=st,oe=un,ye=si)},setOp:function(st,un,si){(Ee!==st||Qe!==un||St!==si)&&(n.stencilOp(st,un,si),Ee=st,Qe=un,St=si)},setLocked:function(st){L=st},setClear:function(st){cn!==st&&(n.clearStencil(st),cn=st)},reset:function(){L=!1,be=null,q=null,oe=null,ye=null,Ee=null,Qe=null,St=null,cn=null}}}const s=new e,r=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],f=null,g=!1,x=null,m=null,p=null,T=null,S=null,A=null,N=null,R=new Ae(0,0,0),w=0,D=!1,ne=null,M=null,E=null,F=null,V=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,$=0;const J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(J)[1]),ae=$>=1):J.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),ae=$>=2);let H=null,me={};const ve=n.getParameter(n.SCISSOR_BOX),Te=n.getParameter(n.VIEWPORT),We=new ot().fromArray(ve),tt=new ot().fromArray(Te);function te(L,be,q,oe){const ye=new Uint8Array(4),Ee=n.createTexture();n.bindTexture(L,Ee),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qe=0;Qe<q;Qe++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,oe,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(be+Qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return Ee}const he={};he[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),he[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),he[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ge(n.DEPTH_TEST),r.setFunc(rr),k(!1),K(Jh),ge(n.CULL_FACE),v(Nt);function ge(L){c[L]!==!0&&(n.enable(L),c[L]=!0)}function xe(L){c[L]!==!1&&(n.disable(L),c[L]=!1)}function ze(L,be){return u[L]!==be?(n.bindFramebuffer(L,be),u[L]=be,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=be),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=be),!0):!1}function Oe(L,be){let q=d,oe=!1;if(L){q=h.get(be),q===void 0&&(q=[],h.set(be,q));const ye=L.textures;if(q.length!==ye.length||q[0]!==n.COLOR_ATTACHMENT0){for(let Ee=0,Qe=ye.length;Ee<Qe;Ee++)q[Ee]=n.COLOR_ATTACHMENT0+Ee;q.length=ye.length,oe=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,oe=!0);oe&&n.drawBuffers(q)}function $e(L){return f!==L?(n.useProgram(L),f=L,!0):!1}const it={[pi]:n.FUNC_ADD,[Rv]:n.FUNC_SUBTRACT,[Pv]:n.FUNC_REVERSE_SUBTRACT};it[Iv]=n.MIN,it[Dv]=n.MAX;const Ze={[_c]:n.ZERO,[Lv]:n.ONE,[Nv]:n.SRC_COLOR,[vc]:n.SRC_ALPHA,[Bv]:n.SRC_ALPHA_SATURATE,[Yp]:n.DST_COLOR,[$p]:n.DST_ALPHA,[Ov]:n.ONE_MINUS_SRC_COLOR,[xc]:n.ONE_MINUS_SRC_ALPHA,[Fv]:n.ONE_MINUS_DST_COLOR,[Uv]:n.ONE_MINUS_DST_ALPHA,[zv]:n.CONSTANT_COLOR,[kv]:n.ONE_MINUS_CONSTANT_COLOR,[Vv]:n.CONSTANT_ALPHA,[Hv]:n.ONE_MINUS_CONSTANT_ALPHA};function v(L,be,q,oe,ye,Ee,Qe,St,cn,st){if(L===Nt){g===!0&&(xe(n.BLEND),g=!1);return}if(g===!1&&(ge(n.BLEND),g=!0),L!==gc){if(L!==x||st!==D){if((m!==pi||S!==pi)&&(n.blendEquation(n.FUNC_ADD),m=pi,S=pi),st)switch(L){case Qs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mc:n.blendFunc(n.ONE,n.ONE);break;case Qh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ed:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Qh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ed:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}p=null,T=null,A=null,N=null,R.set(0,0,0),w=0,x=L,D=st}return}ye=ye||be,Ee=Ee||q,Qe=Qe||oe,(be!==m||ye!==S)&&(n.blendEquationSeparate(it[be],it[ye]),m=be,S=ye),(q!==p||oe!==T||Ee!==A||Qe!==N)&&(n.blendFuncSeparate(Ze[q],Ze[oe],Ze[Ee],Ze[Qe]),p=q,T=oe,A=Ee,N=Qe),(St.equals(R)===!1||cn!==w)&&(n.blendColor(St.r,St.g,St.b,cn),R.copy(St),w=cn),x=L,D=!1}function I(L,be){L.side===ln?xe(n.CULL_FACE):ge(n.CULL_FACE);let q=L.side===pn;be&&(q=!q),k(q),L.blending===Qs&&L.transparent===!1?v(Nt):v(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);const oe=L.stencilWrite;o.setTest(oe),oe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ie(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function k(L){ne!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),ne=L)}function K(L){L!==Av?(ge(n.CULL_FACE),L!==M&&(L===Jh?n.cullFace(n.BACK):L===wv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),M=L}function G(L){L!==E&&(ae&&n.lineWidth(L),E=L)}function ie(L,be,q){L?(ge(n.POLYGON_OFFSET_FILL),(F!==be||V!==q)&&(n.polygonOffset(be,q),F=be,V=q)):xe(n.POLYGON_OFFSET_FILL)}function ee(L){L?ge(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function y(L){L===void 0&&(L=n.TEXTURE0+Q-1),H!==L&&(n.activeTexture(L),H=L)}function _(L,be,q){q===void 0&&(H===null?q=n.TEXTURE0+Q-1:q=H);let oe=me[q];oe===void 0&&(oe={type:void 0,texture:void 0},me[q]=oe),(oe.type!==L||oe.texture!==be)&&(H!==q&&(n.activeTexture(q),H=q),n.bindTexture(L,be||he[L]),oe.type=L,oe.texture=be)}function C(){const L=me[H];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function O(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function z(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ne(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ue(L){We.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),We.copy(L))}function Me(L){tt.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),tt.copy(L))}function Ye(L,be){let q=l.get(be);q===void 0&&(q=new WeakMap,l.set(be,q));let oe=q.get(L);oe===void 0&&(oe=n.getUniformBlockIndex(be,L.name),q.set(L,oe))}function Pe(L,be){const oe=l.get(be).get(L);a.get(be)!==oe&&(n.uniformBlockBinding(be,oe,L.__bindingPointIndex),a.set(be,oe))}function Ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},H=null,me={},u={},h=new WeakMap,d=[],f=null,g=!1,x=null,m=null,p=null,T=null,S=null,A=null,N=null,R=new Ae(0,0,0),w=0,D=!1,ne=null,M=null,E=null,F=null,V=null,We.set(0,0,n.canvas.width,n.canvas.height),tt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ge,disable:xe,bindFramebuffer:ze,drawBuffers:Oe,useProgram:$e,setBlending:v,setMaterial:I,setFlipSided:k,setCullFace:K,setLineWidth:G,setPolygonOffset:ie,setScissorTest:ee,activeTexture:y,bindTexture:_,unbindTexture:C,compressedTexImage2D:O,compressedTexImage3D:W,texImage2D:fe,texImage3D:Ne,updateUBOMapping:Ye,uniformBlockBinding:Pe,texStorage2D:Re,texStorage3D:re,texSubImage2D:z,texSubImage3D:le,compressedTexSubImage2D:se,compressedTexSubImage3D:ue,scissor:Ue,viewport:Me,reset:Ke}}function Yd(n,e,t,i){const s=TS(i);switch(t){case tm:return n*e;case im:return n*e;case sm:return n*e*2;case Uu:return n*e/s.components*s.byteLength;case Fu:return n*e/s.components*s.byteLength;case rm:return n*e*2/s.components*s.byteLength;case Bu:return n*e*2/s.components*s.byteLength;case nm:return n*e*3/s.components*s.byteLength;case Rn:return n*e*4/s.components*s.byteLength;case zu:return n*e*4/s.components*s.byteLength;case ia:case sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ra:case oa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pc:case Dc:return Math.max(n,16)*Math.max(e,8)/4;case Rc:case Ic:return Math.max(n,8)*Math.max(e,8)/2;case Lc:case Nc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Oc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Bc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case zc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case kc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Wc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case jc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case $c:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Yc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Kc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case aa:case qc:case Zc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case om:case Jc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Qc:case eu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function TS(n){switch(n){case vi:case Jp:return{byteLength:1,components:1};case no:case Qp:case fn:return{byteLength:2,components:1};case Nu:case Ou:return{byteLength:2,components:4};case Ss:case Lu:case zn:return{byteLength:4,components:1};case em:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function AS(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,_){return f?new OffscreenCanvas(y,_):ro("canvas")}function x(y,_,C){let O=1;const W=ee(y);if((W.width>C||W.height>C)&&(O=C/Math.max(W.width,W.height)),O<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const z=Math.floor(O*W.width),le=Math.floor(O*W.height);h===void 0&&(h=g(z,le));const se=_?g(z,le):h;return se.width=z,se.height=le,se.getContext("2d").drawImage(y,0,0,z,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+z+"x"+le+")."),se}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),y;return y}function m(y){return y.generateMipmaps&&y.minFilter!==Gt&&y.minFilter!==yn}function p(y){n.generateMipmap(y)}function T(y,_,C,O,W=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let z=_;if(_===n.RED&&(C===n.FLOAT&&(z=n.R32F),C===n.HALF_FLOAT&&(z=n.R16F),C===n.UNSIGNED_BYTE&&(z=n.R8)),_===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(z=n.R8UI),C===n.UNSIGNED_SHORT&&(z=n.R16UI),C===n.UNSIGNED_INT&&(z=n.R32UI),C===n.BYTE&&(z=n.R8I),C===n.SHORT&&(z=n.R16I),C===n.INT&&(z=n.R32I)),_===n.RG&&(C===n.FLOAT&&(z=n.RG32F),C===n.HALF_FLOAT&&(z=n.RG16F),C===n.UNSIGNED_BYTE&&(z=n.RG8)),_===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(z=n.RG8UI),C===n.UNSIGNED_SHORT&&(z=n.RG16UI),C===n.UNSIGNED_INT&&(z=n.RG32UI),C===n.BYTE&&(z=n.RG8I),C===n.SHORT&&(z=n.RG16I),C===n.INT&&(z=n.RG32I)),_===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(z=n.RGB8UI),C===n.UNSIGNED_SHORT&&(z=n.RGB16UI),C===n.UNSIGNED_INT&&(z=n.RGB32UI),C===n.BYTE&&(z=n.RGB8I),C===n.SHORT&&(z=n.RGB16I),C===n.INT&&(z=n.RGB32I)),_===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(z=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(z=n.RGBA16UI),C===n.UNSIGNED_INT&&(z=n.RGBA32UI),C===n.BYTE&&(z=n.RGBA8I),C===n.SHORT&&(z=n.RGBA16I),C===n.INT&&(z=n.RGBA32I)),_===n.RGB&&C===n.UNSIGNED_INT_5_9_9_9_REV&&(z=n.RGB9_E5),_===n.RGBA){const le=W?va:nt.getTransfer(O);C===n.FLOAT&&(z=n.RGBA32F),C===n.HALF_FLOAT&&(z=n.RGBA16F),C===n.UNSIGNED_BYTE&&(z=le===gt?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT_4_4_4_4&&(z=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(z=n.RGB5_A1)}return(z===n.R16F||z===n.R32F||z===n.RG16F||z===n.RG32F||z===n.RGBA16F||z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function S(y,_){let C;return y?_===null||_===Ss||_===bs?C=n.DEPTH24_STENCIL8:_===zn?C=n.DEPTH32F_STENCIL8:_===no&&(C=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ss||_===bs?C=n.DEPTH_COMPONENT24:_===zn?C=n.DEPTH_COMPONENT32F:_===no&&(C=n.DEPTH_COMPONENT16),C}function A(y,_){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==Gt&&y.minFilter!==yn?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function N(y){const _=y.target;_.removeEventListener("dispose",N),w(_),_.isVideoTexture&&u.delete(_)}function R(y){const _=y.target;_.removeEventListener("dispose",R),ne(_)}function w(y){const _=i.get(y);if(_.__webglInit===void 0)return;const C=y.source,O=d.get(C);if(O){const W=O[_.__cacheKey];W.usedTimes--,W.usedTimes===0&&D(y),Object.keys(O).length===0&&d.delete(C)}i.remove(y)}function D(y){const _=i.get(y);n.deleteTexture(_.__webglTexture);const C=y.source,O=d.get(C);delete O[_.__cacheKey],o.memory.textures--}function ne(y){const _=i.get(y);if(y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(_.__webglFramebuffer[O]))for(let W=0;W<_.__webglFramebuffer[O].length;W++)n.deleteFramebuffer(_.__webglFramebuffer[O][W]);else n.deleteFramebuffer(_.__webglFramebuffer[O]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[O])}else{if(Array.isArray(_.__webglFramebuffer))for(let O=0;O<_.__webglFramebuffer.length;O++)n.deleteFramebuffer(_.__webglFramebuffer[O]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let O=0;O<_.__webglColorRenderbuffer.length;O++)_.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[O]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const C=y.textures;for(let O=0,W=C.length;O<W;O++){const z=i.get(C[O]);z.__webglTexture&&(n.deleteTexture(z.__webglTexture),o.memory.textures--),i.remove(C[O])}i.remove(y)}let M=0;function E(){M=0}function F(){const y=M;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),M+=1,y}function V(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function Q(y,_){const C=i.get(y);if(y.isVideoTexture&&G(y),y.isRenderTargetTexture===!1&&y.version>0&&C.__version!==y.version){const O=y.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(C,y,_);return}}t.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+_)}function ae(y,_){const C=i.get(y);if(y.version>0&&C.__version!==y.version){tt(C,y,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+_)}function $(y,_){const C=i.get(y);if(y.version>0&&C.__version!==y.version){tt(C,y,_);return}t.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+_)}function J(y,_){const C=i.get(y);if(y.version>0&&C.__version!==y.version){te(C,y,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+_)}const H={[lr]:n.REPEAT,[Vi]:n.CLAMP_TO_EDGE,[_a]:n.MIRRORED_REPEAT},me={[Gt]:n.NEAREST,[Zp]:n.NEAREST_MIPMAP_NEAREST,[Or]:n.NEAREST_MIPMAP_LINEAR,[yn]:n.LINEAR,[na]:n.LINEAR_MIPMAP_NEAREST,[mi]:n.LINEAR_MIPMAP_LINEAR},ve={[i0]:n.NEVER,[c0]:n.ALWAYS,[s0]:n.LESS,[cm]:n.LEQUAL,[r0]:n.EQUAL,[l0]:n.GEQUAL,[o0]:n.GREATER,[a0]:n.NOTEQUAL};function Te(y,_){if(_.type===zn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===yn||_.magFilter===na||_.magFilter===Or||_.magFilter===mi||_.minFilter===yn||_.minFilter===na||_.minFilter===Or||_.minFilter===mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,H[_.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,H[_.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,H[_.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,me[_.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,me[_.minFilter]),_.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,ve[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Gt||_.minFilter!==Or&&_.minFilter!==mi||_.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const C=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function We(y,_){let C=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",N));const O=_.source;let W=d.get(O);W===void 0&&(W={},d.set(O,W));const z=V(_);if(z!==y.__cacheKey){W[z]===void 0&&(W[z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,C=!0),W[z].usedTimes++;const le=W[y.__cacheKey];le!==void 0&&(W[y.__cacheKey].usedTimes--,le.usedTimes===0&&D(_)),y.__cacheKey=z,y.__webglTexture=W[z].texture}return C}function tt(y,_,C){let O=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(O=n.TEXTURE_3D);const W=We(y,_),z=_.source;t.bindTexture(O,y.__webglTexture,n.TEXTURE0+C);const le=i.get(z);if(z.version!==le.__version||W===!0){t.activeTexture(n.TEXTURE0+C);const se=nt.getPrimaries(nt.workingColorSpace),ue=_.colorSpace===ki?null:nt.getPrimaries(_.colorSpace),Re=_.colorSpace===ki||se===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let re=x(_.image,!1,s.maxTextureSize);re=ie(_,re);const fe=r.convert(_.format,_.colorSpace),Ne=r.convert(_.type);let Ue=T(_.internalFormat,fe,Ne,_.colorSpace,_.isVideoTexture);Te(O,_);let Me;const Ye=_.mipmaps,Pe=_.isVideoTexture!==!0,Ke=le.__version===void 0||W===!0,L=z.dataReady,be=A(_,re);if(_.isDepthTexture)Ue=S(_.format===Es,_.type),Ke&&(Pe?t.texStorage2D(n.TEXTURE_2D,1,Ue,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Ue,re.width,re.height,0,fe,Ne,null));else if(_.isDataTexture)if(Ye.length>0){Pe&&Ke&&t.texStorage2D(n.TEXTURE_2D,be,Ue,Ye[0].width,Ye[0].height);for(let q=0,oe=Ye.length;q<oe;q++)Me=Ye[q],Pe?L&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Me.width,Me.height,fe,Ne,Me.data):t.texImage2D(n.TEXTURE_2D,q,Ue,Me.width,Me.height,0,fe,Ne,Me.data);_.generateMipmaps=!1}else Pe?(Ke&&t.texStorage2D(n.TEXTURE_2D,be,Ue,re.width,re.height),L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,re.width,re.height,fe,Ne,re.data)):t.texImage2D(n.TEXTURE_2D,0,Ue,re.width,re.height,0,fe,Ne,re.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Pe&&Ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Ue,Ye[0].width,Ye[0].height,re.depth);for(let q=0,oe=Ye.length;q<oe;q++)if(Me=Ye[q],_.format!==Rn)if(fe!==null)if(Pe){if(L)if(_.layerUpdates.size>0){const ye=Yd(Me.width,Me.height,_.format,_.type);for(const Ee of _.layerUpdates){const Qe=Me.data.subarray(Ee*ye/Me.data.BYTES_PER_ELEMENT,(Ee+1)*ye/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,Ee,Me.width,Me.height,1,fe,Qe,0,0)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Me.width,Me.height,re.depth,fe,Me.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Ue,Me.width,Me.height,re.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Me.width,Me.height,re.depth,fe,Ne,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,Ue,Me.width,Me.height,re.depth,0,fe,Ne,Me.data)}else{Pe&&Ke&&t.texStorage2D(n.TEXTURE_2D,be,Ue,Ye[0].width,Ye[0].height);for(let q=0,oe=Ye.length;q<oe;q++)Me=Ye[q],_.format!==Rn?fe!==null?Pe?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,Me.width,Me.height,fe,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,q,Ue,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?L&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Me.width,Me.height,fe,Ne,Me.data):t.texImage2D(n.TEXTURE_2D,q,Ue,Me.width,Me.height,0,fe,Ne,Me.data)}else if(_.isDataArrayTexture)if(Pe){if(Ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Ue,re.width,re.height,re.depth),L)if(_.layerUpdates.size>0){const q=Yd(re.width,re.height,_.format,_.type);for(const oe of _.layerUpdates){const ye=re.data.subarray(oe*q/re.data.BYTES_PER_ELEMENT,(oe+1)*q/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,oe,re.width,re.height,1,fe,Ne,ye)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,fe,Ne,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,re.width,re.height,re.depth,0,fe,Ne,re.data);else if(_.isData3DTexture)Pe?(Ke&&t.texStorage3D(n.TEXTURE_3D,be,Ue,re.width,re.height,re.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,fe,Ne,re.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,re.width,re.height,re.depth,0,fe,Ne,re.data);else if(_.isFramebufferTexture){if(Ke)if(Pe)t.texStorage2D(n.TEXTURE_2D,be,Ue,re.width,re.height);else{let q=re.width,oe=re.height;for(let ye=0;ye<be;ye++)t.texImage2D(n.TEXTURE_2D,ye,Ue,q,oe,0,fe,Ne,null),q>>=1,oe>>=1}}else if(Ye.length>0){if(Pe&&Ke){const q=ee(Ye[0]);t.texStorage2D(n.TEXTURE_2D,be,Ue,q.width,q.height)}for(let q=0,oe=Ye.length;q<oe;q++)Me=Ye[q],Pe?L&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,fe,Ne,Me):t.texImage2D(n.TEXTURE_2D,q,Ue,fe,Ne,Me);_.generateMipmaps=!1}else if(Pe){if(Ke){const q=ee(re);t.texStorage2D(n.TEXTURE_2D,be,Ue,q.width,q.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,Ne,re)}else t.texImage2D(n.TEXTURE_2D,0,Ue,fe,Ne,re);m(_)&&p(O),le.__version=z.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function te(y,_,C){if(_.image.length!==6)return;const O=We(y,_),W=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+C);const z=i.get(W);if(W.version!==z.__version||O===!0){t.activeTexture(n.TEXTURE0+C);const le=nt.getPrimaries(nt.workingColorSpace),se=_.colorSpace===ki?null:nt.getPrimaries(_.colorSpace),ue=_.colorSpace===ki||le===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Re=_.isCompressedTexture||_.image[0].isCompressedTexture,re=_.image[0]&&_.image[0].isDataTexture,fe=[];for(let oe=0;oe<6;oe++)!Re&&!re?fe[oe]=x(_.image[oe],!0,s.maxCubemapSize):fe[oe]=re?_.image[oe].image:_.image[oe],fe[oe]=ie(_,fe[oe]);const Ne=fe[0],Ue=r.convert(_.format,_.colorSpace),Me=r.convert(_.type),Ye=T(_.internalFormat,Ue,Me,_.colorSpace),Pe=_.isVideoTexture!==!0,Ke=z.__version===void 0||O===!0,L=W.dataReady;let be=A(_,Ne);Te(n.TEXTURE_CUBE_MAP,_);let q;if(Re){Pe&&Ke&&t.texStorage2D(n.TEXTURE_CUBE_MAP,be,Ye,Ne.width,Ne.height);for(let oe=0;oe<6;oe++){q=fe[oe].mipmaps;for(let ye=0;ye<q.length;ye++){const Ee=q[ye];_.format!==Rn?Ue!==null?Pe?L&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ye,0,0,Ee.width,Ee.height,Ue,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ye,Ye,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ye,0,0,Ee.width,Ee.height,Ue,Me,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ye,Ye,Ee.width,Ee.height,0,Ue,Me,Ee.data)}}}else{if(q=_.mipmaps,Pe&&Ke){q.length>0&&be++;const oe=ee(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,be,Ye,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(re){Pe?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,fe[oe].width,fe[oe].height,Ue,Me,fe[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ye,fe[oe].width,fe[oe].height,0,Ue,Me,fe[oe].data);for(let ye=0;ye<q.length;ye++){const Qe=q[ye].image[oe].image;Pe?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ye+1,0,0,Qe.width,Qe.height,Ue,Me,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ye+1,Ye,Qe.width,Qe.height,0,Ue,Me,Qe.data)}}else{Pe?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ue,Me,fe[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ye,Ue,Me,fe[oe]);for(let ye=0;ye<q.length;ye++){const Ee=q[ye];Pe?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ye+1,0,0,Ue,Me,Ee.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ye+1,Ye,Ue,Me,Ee.image[oe])}}}m(_)&&p(n.TEXTURE_CUBE_MAP),z.__version=W.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function he(y,_,C,O,W,z){const le=r.convert(C.format,C.colorSpace),se=r.convert(C.type),ue=T(C.internalFormat,le,se,C.colorSpace);if(!i.get(_).__hasExternalTextures){const re=Math.max(1,_.width>>z),fe=Math.max(1,_.height>>z);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?t.texImage3D(W,z,ue,re,fe,_.depth,0,le,se,null):t.texImage2D(W,z,ue,re,fe,0,le,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),K(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,W,i.get(C).__webglTexture,0,k(_)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,W,i.get(C).__webglTexture,z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(y,_,C){if(n.bindRenderbuffer(n.RENDERBUFFER,y),_.depthBuffer){const O=_.depthTexture,W=O&&O.isDepthTexture?O.type:null,z=S(_.stencilBuffer,W),le=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=k(_);K(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,z,_.width,_.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,z,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,z,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,y)}else{const O=_.textures;for(let W=0;W<O.length;W++){const z=O[W],le=r.convert(z.format,z.colorSpace),se=r.convert(z.type),ue=T(z.internalFormat,le,se,z.colorSpace),Re=k(_);C&&K(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,ue,_.width,_.height):K(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re,ue,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ue,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xe(y,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Q(_.depthTexture,0);const O=i.get(_.depthTexture).__webglTexture,W=k(_);if(_.depthTexture.format===er)K(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,O,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,O,0);else if(_.depthTexture.format===Es)K(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,O,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,O,0);else throw new Error("Unknown depthTexture format")}function ze(y){const _=i.get(y),C=y.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==y.depthTexture){const O=y.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),O){const W=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,O.removeEventListener("dispose",W)};O.addEventListener("dispose",W),_.__depthDisposeCallback=W}_.__boundDepthTexture=O}if(y.depthTexture&&!_.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");xe(_.__webglFramebuffer,y)}else if(C){_.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[O]),_.__webglDepthbuffer[O]===void 0)_.__webglDepthbuffer[O]=n.createRenderbuffer(),ge(_.__webglDepthbuffer[O],y,!1);else{const W=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=_.__webglDepthbuffer[O];n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),ge(_.__webglDepthbuffer,y,!1);else{const O=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,O,n.RENDERBUFFER,W)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(y,_,C){const O=i.get(y);_!==void 0&&he(O.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&ze(y)}function $e(y){const _=y.texture,C=i.get(y),O=i.get(_);y.addEventListener("dispose",R);const W=y.textures,z=y.isWebGLCubeRenderTarget===!0,le=W.length>1;if(le||(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=_.version,o.memory.textures++),z){C.__webglFramebuffer=[];for(let se=0;se<6;se++)if(_.mipmaps&&_.mipmaps.length>0){C.__webglFramebuffer[se]=[];for(let ue=0;ue<_.mipmaps.length;ue++)C.__webglFramebuffer[se][ue]=n.createFramebuffer()}else C.__webglFramebuffer[se]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){C.__webglFramebuffer=[];for(let se=0;se<_.mipmaps.length;se++)C.__webglFramebuffer[se]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(le)for(let se=0,ue=W.length;se<ue;se++){const Re=i.get(W[se]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),o.memory.textures++)}if(y.samples>0&&K(y)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let se=0;se<W.length;se++){const ue=W[se];C.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[se]);const Re=r.convert(ue.format,ue.colorSpace),re=r.convert(ue.type),fe=T(ue.internalFormat,Re,re,ue.colorSpace,y.isXRRenderTarget===!0),Ne=k(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,fe,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,C.__webglColorRenderbuffer[se])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),ge(C.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(z){t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),Te(n.TEXTURE_CUBE_MAP,_);for(let se=0;se<6;se++)if(_.mipmaps&&_.mipmaps.length>0)for(let ue=0;ue<_.mipmaps.length;ue++)he(C.__webglFramebuffer[se][ue],y,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue);else he(C.__webglFramebuffer[se],y,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(_)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let se=0,ue=W.length;se<ue;se++){const Re=W[se],re=i.get(Re);t.bindTexture(n.TEXTURE_2D,re.__webglTexture),Te(n.TEXTURE_2D,Re),he(C.__webglFramebuffer,y,Re,n.COLOR_ATTACHMENT0+se,n.TEXTURE_2D,0),m(Re)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(se=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,O.__webglTexture),Te(se,_),_.mipmaps&&_.mipmaps.length>0)for(let ue=0;ue<_.mipmaps.length;ue++)he(C.__webglFramebuffer[ue],y,_,n.COLOR_ATTACHMENT0,se,ue);else he(C.__webglFramebuffer,y,_,n.COLOR_ATTACHMENT0,se,0);m(_)&&p(se),t.unbindTexture()}y.depthBuffer&&ze(y)}function it(y){const _=y.textures;for(let C=0,O=_.length;C<O;C++){const W=_[C];if(m(W)){const z=y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,le=i.get(W).__webglTexture;t.bindTexture(z,le),p(z),t.unbindTexture()}}}const Ze=[],v=[];function I(y){if(y.samples>0){if(K(y)===!1){const _=y.textures,C=y.width,O=y.height;let W=n.COLOR_BUFFER_BIT;const z=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(y),se=_.length>1;if(se)for(let ue=0;ue<_.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ue=0;ue<_.length;ue++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[ue]);const Re=i.get(_[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Re,0)}n.blitFramebuffer(0,0,C,O,0,0,C,O,W,n.NEAREST),l===!0&&(Ze.length=0,v.length=0,Ze.push(n.COLOR_ATTACHMENT0+ue),y.depthBuffer&&y.resolveDepthBuffer===!1&&(Ze.push(z),v.push(z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,v)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ze))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),se)for(let ue=0;ue<_.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,le.__webglColorRenderbuffer[ue]);const Re=i.get(_[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,Re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const _=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function k(y){return Math.min(s.maxSamples,y.samples)}function K(y){const _=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function G(y){const _=o.render.frame;u.get(y)!==_&&(u.set(y,_),y.update())}function ie(y,_){const C=y.colorSpace,O=y.format,W=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||C!==jt&&C!==ki&&(nt.getTransfer(C)===gt?(O!==Rn||W!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),_}function ee(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=E,this.setTexture2D=Q,this.setTexture2DArray=ae,this.setTexture3D=$,this.setTextureCube=J,this.rebindTextures=Oe,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=he,this.useMultisampledRTT=K}function wS(n,e){function t(i,s=ki){let r;const o=nt.getTransfer(s);if(i===vi)return n.UNSIGNED_BYTE;if(i===Nu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ou)return n.UNSIGNED_SHORT_5_5_5_1;if(i===em)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Jp)return n.BYTE;if(i===Qp)return n.SHORT;if(i===no)return n.UNSIGNED_SHORT;if(i===Lu)return n.INT;if(i===Ss)return n.UNSIGNED_INT;if(i===zn)return n.FLOAT;if(i===fn)return n.HALF_FLOAT;if(i===tm)return n.ALPHA;if(i===nm)return n.RGB;if(i===Rn)return n.RGBA;if(i===im)return n.LUMINANCE;if(i===sm)return n.LUMINANCE_ALPHA;if(i===er)return n.DEPTH_COMPONENT;if(i===Es)return n.DEPTH_STENCIL;if(i===Uu)return n.RED;if(i===Fu)return n.RED_INTEGER;if(i===rm)return n.RG;if(i===Bu)return n.RG_INTEGER;if(i===zu)return n.RGBA_INTEGER;if(i===ia||i===sa||i===ra||i===oa)if(o===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Rc||i===Pc||i===Ic||i===Dc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ic)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Dc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Lc||i===Nc||i===Oc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Lc||i===Nc)return o===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Oc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Uc||i===Fc||i===Bc||i===zc||i===kc||i===Vc||i===Hc||i===Gc||i===Wc||i===jc||i===Xc||i===$c||i===Yc||i===Kc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Uc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Hc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Gc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$c)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===aa||i===qc||i===Zc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===aa)return o===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===om||i===Jc||i===Qc||i===eu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===aa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Jc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===eu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class CS extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let Hi=class extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}};const RS={type:"move"};class zl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(RS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Hi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const PS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IS=`
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

}`;class DS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Ft,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Et({vertexShader:PS,fragmentShader:IS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wt(new Ga(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class LS extends ws{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const x=new DS,m=t.getContextAttributes();let p=null,T=null;const S=[],A=[],N=new _e;let R=null;const w=new an;w.layers.enable(1),w.viewport=new ot;const D=new an;D.layers.enable(2),D.viewport=new ot;const ne=[w,D],M=new CS;M.layers.enable(1),M.layers.enable(2);let E=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let he=S[te];return he===void 0&&(he=new zl,S[te]=he),he.getTargetRaySpace()},this.getControllerGrip=function(te){let he=S[te];return he===void 0&&(he=new zl,S[te]=he),he.getGripSpace()},this.getHand=function(te){let he=S[te];return he===void 0&&(he=new zl,S[te]=he),he.getHandSpace()};function V(te){const he=A.indexOf(te.inputSource);if(he===-1)return;const ge=S[he];ge!==void 0&&(ge.update(te.inputSource,te.frame,c||o),ge.dispatchEvent({type:te.type,data:te.inputSource}))}function Q(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",ae);for(let te=0;te<S.length;te++){const he=A[te];he!==null&&(A[te]=null,S[te].disconnect(he))}E=null,F=null,x.reset(),e.setRenderTarget(p),f=null,d=null,h=null,s=null,T=null,tt.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",ae),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(N),s.renderState.layers===void 0){const he={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new kt(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let he=null,ge=null,xe=null;m.depth&&(xe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=m.stencil?Es:er,ge=m.stencil?bs:Ss);const ze={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(ze),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new kt(d.textureWidth,d.textureHeight,{format:Rn,type:vi,depthTexture:new Xu(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),tt.setContext(s),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ae(te){for(let he=0;he<te.removed.length;he++){const ge=te.removed[he],xe=A.indexOf(ge);xe>=0&&(A[xe]=null,S[xe].disconnect(ge))}for(let he=0;he<te.added.length;he++){const ge=te.added[he];let xe=A.indexOf(ge);if(xe===-1){for(let Oe=0;Oe<S.length;Oe++)if(Oe>=A.length){A.push(ge),xe=Oe;break}else if(A[Oe]===null){A[Oe]=ge,xe=Oe;break}if(xe===-1)break}const ze=S[xe];ze&&ze.connect(ge)}}const $=new P,J=new P;function H(te,he,ge){$.setFromMatrixPosition(he.matrixWorld),J.setFromMatrixPosition(ge.matrixWorld);const xe=$.distanceTo(J),ze=he.projectionMatrix.elements,Oe=ge.projectionMatrix.elements,$e=ze[14]/(ze[10]-1),it=ze[14]/(ze[10]+1),Ze=(ze[9]+1)/ze[5],v=(ze[9]-1)/ze[5],I=(ze[8]-1)/ze[0],k=(Oe[8]+1)/Oe[0],K=$e*I,G=$e*k,ie=xe/(-I+k),ee=ie*-I;if(he.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ee),te.translateZ(ie),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),ze[10]===-1)te.projectionMatrix.copy(he.projectionMatrix),te.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const y=$e+ie,_=it+ie,C=K-ee,O=G+(xe-ee),W=Ze*it/_*y,z=v*it/_*y;te.projectionMatrix.makePerspective(C,O,W,z,y,_),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function me(te,he){he===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(he.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let he=te.near,ge=te.far;x.texture!==null&&(x.depthNear>0&&(he=x.depthNear),x.depthFar>0&&(ge=x.depthFar)),M.near=D.near=w.near=he,M.far=D.far=w.far=ge,(E!==M.near||F!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,F=M.far);const xe=te.parent,ze=M.cameras;me(M,xe);for(let Oe=0;Oe<ze.length;Oe++)me(ze[Oe],xe);ze.length===2?H(M,w,D):M.projectionMatrix.copy(w.projectionMatrix),ve(te,M,xe)};function ve(te,he,ge){ge===null?te.matrix.copy(he.matrixWorld):(te.matrix.copy(ge.matrixWorld),te.matrix.invert(),te.matrix.multiply(he.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(he.projectionMatrix),te.projectionMatrixInverse.copy(he.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=cr*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=te)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let Te=null;function We(te,he){if(u=he.getViewerPose(c||o),g=he,u!==null){const ge=u.views;f!==null&&(e.setRenderTargetFramebuffer(T,f.framebuffer),e.setRenderTarget(T));let xe=!1;ge.length!==M.cameras.length&&(M.cameras.length=0,xe=!0);for(let Oe=0;Oe<ge.length;Oe++){const $e=ge[Oe];let it=null;if(f!==null)it=f.getViewport($e);else{const v=h.getViewSubImage(d,$e);it=v.viewport,Oe===0&&(e.setRenderTargetTextures(T,v.colorTexture,d.ignoreDepthValues?void 0:v.depthStencilTexture),e.setRenderTarget(T))}let Ze=ne[Oe];Ze===void 0&&(Ze=new an,Ze.layers.enable(Oe),Ze.viewport=new ot,ne[Oe]=Ze),Ze.matrix.fromArray($e.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray($e.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(it.x,it.y,it.width,it.height),Oe===0&&(M.matrix.copy(Ze.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),xe===!0&&M.cameras.push(Ze)}const ze=s.enabledFeatures;if(ze&&ze.includes("depth-sensing")){const Oe=h.getDepthInformation(ge[0]);Oe&&Oe.isValid&&Oe.texture&&x.init(e,Oe,s.renderState)}}for(let ge=0;ge<S.length;ge++){const xe=A[ge],ze=S[ge];xe!==null&&ze!==void 0&&ze.update(xe,he,c||o)}Te&&Te(te,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),g=null}const tt=new xm;tt.setAnimationLoop(We),this.setAnimationLoop=function(te){Te=te},this.dispose=function(){}}}const hs=new Gn,NS=new He;function OS(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,gm(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,S,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,A)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===pn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===pn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),S=T.envMap,A=T.envMapRotation;S&&(m.envMap.value=S,hs.copy(A),hs.x*=-1,hs.y*=-1,hs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),m.envMapRotation.value.setFromMatrix4(NS.makeRotationFromEuler(hs)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===pn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function US(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,S){const A=S.program;i.uniformBlockBinding(T,A)}function c(T,S){let A=s[T.id];A===void 0&&(g(T),A=u(T),s[T.id]=A,T.addEventListener("dispose",m));const N=S.program;i.updateUBOMapping(T,N);const R=e.render.frame;r[T.id]!==R&&(d(T),r[T.id]=R)}function u(T){const S=h();T.__bindingPointIndex=S;const A=n.createBuffer(),N=T.__size,R=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,N,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,A),A}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const S=s[T.id],A=T.uniforms,N=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let R=0,w=A.length;R<w;R++){const D=Array.isArray(A[R])?A[R]:[A[R]];for(let ne=0,M=D.length;ne<M;ne++){const E=D[ne];if(f(E,R,ne,N)===!0){const F=E.__offset,V=Array.isArray(E.value)?E.value:[E.value];let Q=0;for(let ae=0;ae<V.length;ae++){const $=V[ae],J=x($);typeof $=="number"||typeof $=="boolean"?(E.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,F+Q,E.__data)):$.isMatrix3?(E.__data[0]=$.elements[0],E.__data[1]=$.elements[1],E.__data[2]=$.elements[2],E.__data[3]=0,E.__data[4]=$.elements[3],E.__data[5]=$.elements[4],E.__data[6]=$.elements[5],E.__data[7]=0,E.__data[8]=$.elements[6],E.__data[9]=$.elements[7],E.__data[10]=$.elements[8],E.__data[11]=0):($.toArray(E.__data,Q),Q+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(T,S,A,N){const R=T.value,w=S+"_"+A;if(N[w]===void 0)return typeof R=="number"||typeof R=="boolean"?N[w]=R:N[w]=R.clone(),!0;{const D=N[w];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return N[w]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(T){const S=T.uniforms;let A=0;const N=16;for(let w=0,D=S.length;w<D;w++){const ne=Array.isArray(S[w])?S[w]:[S[w]];for(let M=0,E=ne.length;M<E;M++){const F=ne[M],V=Array.isArray(F.value)?F.value:[F.value];for(let Q=0,ae=V.length;Q<ae;Q++){const $=V[Q],J=x($),H=A%N,me=H%J.boundary,ve=H+me;A+=me,ve!==0&&N-ve<J.storage&&(A+=N-ve),F.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=A,A+=J.storage}}}const R=A%N;return R>0&&(A+=N-R),T.__size=A,T.__cache={},this}function x(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function m(T){const S=T.target;S.removeEventListener("dispose",m);const A=o.indexOf(S.__bindingPointIndex);o.splice(A,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class FS{constructor(e={}){const{canvas:t=A0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const p=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=on,this.toneMapping=$i,this.toneMappingExposure=1;const S=this;let A=!1,N=0,R=0,w=null,D=-1,ne=null;const M=new ot,E=new ot;let F=null;const V=new Ae(0);let Q=0,ae=t.width,$=t.height,J=1,H=null,me=null;const ve=new ot(0,0,ae,$),Te=new ot(0,0,ae,$);let We=!1;const tt=new Wu;let te=!1,he=!1;const ge=new He,xe=new He,ze=new P,Oe=new ot,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function Ze(){return w===null?J:1}let v=i;function I(b,U){return t.getContext(b,U)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Du}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),v===null){const U="webgl2";if(v=I(U,b),v===null)throw I(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let k,K,G,ie,ee,y,_,C,O,W,z,le,se,ue,Re,re,fe,Ne,Ue,Me,Ye,Pe,Ke,L;function be(){k=new GM(v),k.init(),Pe=new wS(v,k),K=new FM(v,k,e,Pe),G=new ES(v),K.reverseDepthBuffer&&G.buffers.depth.setReversed(!0),ie=new XM(v),ee=new uS,y=new AS(v,k,G,ee,K,Pe,ie),_=new zM(S),C=new HM(S),O=new Q0(v),Ke=new OM(v,O),W=new WM(v,O,ie,Ke),z=new YM(v,W,O,ie),Ue=new $M(v,K,y),re=new BM(ee),le=new cS(S,_,C,k,K,Ke,re),se=new OS(S,ee),ue=new dS,Re=new vS(k),Ne=new NM(S,_,C,G,z,d,l),fe=new SS(S,z,K),L=new US(v,ie,K,G),Me=new UM(v,k,ie),Ye=new jM(v,k,ie),ie.programs=le.programs,S.capabilities=K,S.extensions=k,S.properties=ee,S.renderLists=ue,S.shadowMap=fe,S.state=G,S.info=ie}be();const q=new LS(S,v);this.xr=q,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const b=k.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=k.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(b){b!==void 0&&(J=b,this.setSize(ae,$,!1))},this.getSize=function(b){return b.set(ae,$)},this.setSize=function(b,U,j=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=b,$=U,t.width=Math.floor(b*J),t.height=Math.floor(U*J),j===!0&&(t.style.width=b+"px",t.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(ae*J,$*J).floor()},this.setDrawingBufferSize=function(b,U,j){ae=b,$=U,J=j,t.width=Math.floor(b*j),t.height=Math.floor(U*j),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(M)},this.getViewport=function(b){return b.copy(ve)},this.setViewport=function(b,U,j,X){b.isVector4?ve.set(b.x,b.y,b.z,b.w):ve.set(b,U,j,X),G.viewport(M.copy(ve).multiplyScalar(J).round())},this.getScissor=function(b){return b.copy(Te)},this.setScissor=function(b,U,j,X){b.isVector4?Te.set(b.x,b.y,b.z,b.w):Te.set(b,U,j,X),G.scissor(E.copy(Te).multiplyScalar(J).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(b){G.setScissorTest(We=b)},this.setOpaqueSort=function(b){H=b},this.setTransparentSort=function(b){me=b},this.getClearColor=function(b){return b.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(b=!0,U=!0,j=!0){let X=0;if(b){let B=!1;if(w!==null){const de=w.texture.format;B=de===zu||de===Bu||de===Fu}if(B){const de=w.texture.type,Se=de===vi||de===Ss||de===no||de===bs||de===Nu||de===Ou,we=Ne.getClearColor(),Ce=Ne.getClearAlpha(),Be=we.r,ke=we.g,Ie=we.b;Se?(f[0]=Be,f[1]=ke,f[2]=Ie,f[3]=Ce,v.clearBufferuiv(v.COLOR,0,f)):(g[0]=Be,g[1]=ke,g[2]=Ie,g[3]=Ce,v.clearBufferiv(v.COLOR,0,g))}else X|=v.COLOR_BUFFER_BIT}U&&(X|=v.DEPTH_BUFFER_BIT,v.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),j&&(X|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),ue.dispose(),Re.dispose(),ee.dispose(),_.dispose(),C.dispose(),z.dispose(),Ke.dispose(),L.dispose(),le.dispose(),q.dispose(),q.removeEventListener("sessionstart",ah),q.removeEventListener("sessionend",lh),ts.stop()};function oe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const b=ie.autoReset,U=fe.enabled,j=fe.autoUpdate,X=fe.needsUpdate,B=fe.type;be(),ie.autoReset=b,fe.enabled=U,fe.autoUpdate=j,fe.needsUpdate=X,fe.type=B}function Ee(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Qe(b){const U=b.target;U.removeEventListener("dispose",Qe),St(U)}function St(b){cn(b),ee.remove(b)}function cn(b){const U=ee.get(b).programs;U!==void 0&&(U.forEach(function(j){le.releaseProgram(j)}),b.isShaderMaterial&&le.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,j,X,B,de){U===null&&(U=$e);const Se=B.isMesh&&B.matrixWorld.determinant()<0,we=km(b,U,j,X,B);G.setMaterial(X,Se);let Ce=j.index,Be=1;if(X.wireframe===!0){if(Ce=W.getWireframeAttribute(j),Ce===void 0)return;Be=2}const ke=j.drawRange,Ie=j.attributes.position;let ut=ke.start*Be,mt=(ke.start+ke.count)*Be;de!==null&&(ut=Math.max(ut,de.start*Be),mt=Math.min(mt,(de.start+de.count)*Be)),Ce!==null?(ut=Math.max(ut,0),mt=Math.min(mt,Ce.count)):Ie!=null&&(ut=Math.max(ut,0),mt=Math.min(mt,Ie.count));const xt=mt-ut;if(xt<0||xt===1/0)return;Ke.setup(B,X,we,j,Ce);let _n,lt=Me;if(Ce!==null&&(_n=O.get(Ce),lt=Ye,lt.setIndex(_n)),B.isMesh)X.wireframe===!0?(G.setLineWidth(X.wireframeLinewidth*Ze()),lt.setMode(v.LINES)):lt.setMode(v.TRIANGLES);else if(B.isLine){let De=X.linewidth;De===void 0&&(De=1),G.setLineWidth(De*Ze()),B.isLineSegments?lt.setMode(v.LINES):B.isLineLoop?lt.setMode(v.LINE_LOOP):lt.setMode(v.LINE_STRIP)}else B.isPoints?lt.setMode(v.POINTS):B.isSprite&&lt.setMode(v.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)lt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(k.get("WEBGL_multi_draw"))lt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const De=B._multiDrawStarts,Bt=B._multiDrawCounts,ct=B._multiDrawCount,In=Ce?O.get(Ce).bytesPerElement:1,Cs=ee.get(X).currentProgram.getUniforms();for(let vn=0;vn<ct;vn++)Cs.setValue(v,"_gl_DrawID",vn),lt.render(De[vn]/In,Bt[vn])}else if(B.isInstancedMesh)lt.renderInstances(ut,xt,B.count);else if(j.isInstancedBufferGeometry){const De=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Bt=Math.min(j.instanceCount,De);lt.renderInstances(ut,xt,Bt)}else lt.render(ut,xt)};function st(b,U,j){b.transparent===!0&&b.side===ln&&b.forceSinglePass===!1?(b.side=pn,b.needsUpdate=!0,po(b,U,j),b.side=Jn,b.needsUpdate=!0,po(b,U,j),b.side=ln):po(b,U,j)}this.compile=function(b,U,j=null){j===null&&(j=b),m=Re.get(j),m.init(U),T.push(m),j.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),b!==j&&b.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();const X=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const de=B.material;if(de)if(Array.isArray(de))for(let Se=0;Se<de.length;Se++){const we=de[Se];st(we,j,B),X.add(we)}else st(de,j,B),X.add(de)}),T.pop(),m=null,X},this.compileAsync=function(b,U,j=null){const X=this.compile(b,U,j);return new Promise(B=>{function de(){if(X.forEach(function(Se){ee.get(Se).currentProgram.isReady()&&X.delete(Se)}),X.size===0){B(b);return}setTimeout(de,10)}k.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let un=null;function si(b){un&&un(b)}function ah(){ts.stop()}function lh(){ts.start()}const ts=new xm;ts.setAnimationLoop(si),typeof self<"u"&&ts.setContext(self),this.setAnimationLoop=function(b){un=b,q.setAnimationLoop(b),b===null?ts.stop():ts.start()},q.addEventListener("sessionstart",ah),q.addEventListener("sessionend",lh),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),b.isScene===!0&&b.onBeforeRender(S,b,U,w),m=Re.get(b,T.length),m.init(U),T.push(m),xe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),tt.setFromProjectionMatrix(xe),he=this.localClippingEnabled,te=re.init(this.clippingPlanes,he),x=ue.get(b,p.length),x.init(),p.push(x),q.enabled===!0&&q.isPresenting===!0){const de=S.xr.getDepthSensingMesh();de!==null&&qa(de,U,-1/0,S.sortObjects)}qa(b,U,0,S.sortObjects),x.finish(),S.sortObjects===!0&&x.sort(H,me),it=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,it&&Ne.addToRenderList(x,b),this.info.render.frame++,te===!0&&re.beginShadows();const j=m.state.shadowsArray;fe.render(j,b,U),te===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=x.opaque,B=x.transmissive;if(m.setupLights(),U.isArrayCamera){const de=U.cameras;if(B.length>0)for(let Se=0,we=de.length;Se<we;Se++){const Ce=de[Se];uh(X,B,b,Ce)}it&&Ne.render(b);for(let Se=0,we=de.length;Se<we;Se++){const Ce=de[Se];ch(x,b,Ce,Ce.viewport)}}else B.length>0&&uh(X,B,b,U),it&&Ne.render(b),ch(x,b,U);w!==null&&(y.updateMultisampleRenderTarget(w),y.updateRenderTargetMipmap(w)),b.isScene===!0&&b.onAfterRender(S,b,U),Ke.resetDefaultState(),D=-1,ne=null,T.pop(),T.length>0?(m=T[T.length-1],te===!0&&re.setGlobalState(S.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function qa(b,U,j,X){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||tt.intersectsSprite(b)){X&&Oe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(xe);const Se=z.update(b),we=b.material;we.visible&&x.push(b,Se,we,j,Oe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||tt.intersectsObject(b))){const Se=z.update(b),we=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Oe.copy(b.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Oe.copy(Se.boundingSphere.center)),Oe.applyMatrix4(b.matrixWorld).applyMatrix4(xe)),Array.isArray(we)){const Ce=Se.groups;for(let Be=0,ke=Ce.length;Be<ke;Be++){const Ie=Ce[Be],ut=we[Ie.materialIndex];ut&&ut.visible&&x.push(b,Se,ut,j,Oe.z,Ie)}}else we.visible&&x.push(b,Se,we,j,Oe.z,null)}}const de=b.children;for(let Se=0,we=de.length;Se<we;Se++)qa(de[Se],U,j,X)}function ch(b,U,j,X){const B=b.opaque,de=b.transmissive,Se=b.transparent;m.setupLightsView(j),te===!0&&re.setGlobalState(S.clippingPlanes,j),X&&G.viewport(M.copy(X)),B.length>0&&fo(B,U,j),de.length>0&&fo(de,U,j),Se.length>0&&fo(Se,U,j),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function uh(b,U,j,X){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new kt(1,1,{generateMipmaps:!0,type:k.has("EXT_color_buffer_half_float")||k.has("EXT_color_buffer_float")?fn:vi,minFilter:mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const de=m.state.transmissionRenderTarget[X.id],Se=X.viewport||M;de.setSize(Se.z,Se.w);const we=S.getRenderTarget();S.setRenderTarget(de),S.getClearColor(V),Q=S.getClearAlpha(),Q<1&&S.setClearColor(16777215,.5),S.clear(),it&&Ne.render(j);const Ce=S.toneMapping;S.toneMapping=$i;const Be=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),te===!0&&re.setGlobalState(S.clippingPlanes,X),fo(b,j,X),y.updateMultisampleRenderTarget(de),y.updateRenderTargetMipmap(de),k.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Ie=0,ut=U.length;Ie<ut;Ie++){const mt=U[Ie],xt=mt.object,_n=mt.geometry,lt=mt.material,De=mt.group;if(lt.side===ln&&xt.layers.test(X.layers)){const Bt=lt.side;lt.side=pn,lt.needsUpdate=!0,hh(xt,j,X,_n,lt,De),lt.side=Bt,lt.needsUpdate=!0,ke=!0}}ke===!0&&(y.updateMultisampleRenderTarget(de),y.updateRenderTargetMipmap(de))}S.setRenderTarget(we),S.setClearColor(V,Q),Be!==void 0&&(X.viewport=Be),S.toneMapping=Ce}function fo(b,U,j){const X=U.isScene===!0?U.overrideMaterial:null;for(let B=0,de=b.length;B<de;B++){const Se=b[B],we=Se.object,Ce=Se.geometry,Be=X===null?Se.material:X,ke=Se.group;we.layers.test(j.layers)&&hh(we,U,j,Ce,Be,ke)}}function hh(b,U,j,X,B,de){b.onBeforeRender(S,U,j,X,B,de),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(S,U,j,X,b,de),B.transparent===!0&&B.side===ln&&B.forceSinglePass===!1?(B.side=pn,B.needsUpdate=!0,S.renderBufferDirect(j,U,X,B,b,de),B.side=Jn,B.needsUpdate=!0,S.renderBufferDirect(j,U,X,B,b,de),B.side=ln):S.renderBufferDirect(j,U,X,B,b,de),b.onAfterRender(S,U,j,X,B,de)}function po(b,U,j){U.isScene!==!0&&(U=$e);const X=ee.get(b),B=m.state.lights,de=m.state.shadowsArray,Se=B.state.version,we=le.getParameters(b,B.state,de,U,j),Ce=le.getProgramCacheKey(we);let Be=X.programs;X.environment=b.isMeshStandardMaterial?U.environment:null,X.fog=U.fog,X.envMap=(b.isMeshStandardMaterial?C:_).get(b.envMap||X.environment),X.envMapRotation=X.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Be===void 0&&(b.addEventListener("dispose",Qe),Be=new Map,X.programs=Be);let ke=Be.get(Ce);if(ke!==void 0){if(X.currentProgram===ke&&X.lightsStateVersion===Se)return fh(b,we),ke}else we.uniforms=le.getUniforms(b),b.onBeforeCompile(we,S),ke=le.acquireProgram(we,Ce),Be.set(Ce,ke),X.uniforms=we.uniforms;const Ie=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ie.clippingPlanes=re.uniform),fh(b,we),X.needsLights=Hm(b),X.lightsStateVersion=Se,X.needsLights&&(Ie.ambientLightColor.value=B.state.ambient,Ie.lightProbe.value=B.state.probe,Ie.directionalLights.value=B.state.directional,Ie.directionalLightShadows.value=B.state.directionalShadow,Ie.spotLights.value=B.state.spot,Ie.spotLightShadows.value=B.state.spotShadow,Ie.rectAreaLights.value=B.state.rectArea,Ie.ltc_1.value=B.state.rectAreaLTC1,Ie.ltc_2.value=B.state.rectAreaLTC2,Ie.pointLights.value=B.state.point,Ie.pointLightShadows.value=B.state.pointShadow,Ie.hemisphereLights.value=B.state.hemi,Ie.directionalShadowMap.value=B.state.directionalShadowMap,Ie.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ie.spotShadowMap.value=B.state.spotShadowMap,Ie.spotLightMatrix.value=B.state.spotLightMatrix,Ie.spotLightMap.value=B.state.spotLightMap,Ie.pointShadowMap.value=B.state.pointShadowMap,Ie.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=ke,X.uniformsList=null,ke}function dh(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=ca.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function fh(b,U){const j=ee.get(b);j.outputColorSpace=U.outputColorSpace,j.batching=U.batching,j.batchingColor=U.batchingColor,j.instancing=U.instancing,j.instancingColor=U.instancingColor,j.instancingMorph=U.instancingMorph,j.skinning=U.skinning,j.morphTargets=U.morphTargets,j.morphNormals=U.morphNormals,j.morphColors=U.morphColors,j.morphTargetsCount=U.morphTargetsCount,j.numClippingPlanes=U.numClippingPlanes,j.numIntersection=U.numClipIntersection,j.vertexAlphas=U.vertexAlphas,j.vertexTangents=U.vertexTangents,j.toneMapping=U.toneMapping}function km(b,U,j,X,B){U.isScene!==!0&&(U=$e),y.resetTextureUnits();const de=U.fog,Se=X.isMeshStandardMaterial?U.environment:null,we=w===null?S.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:jt,Ce=(X.isMeshStandardMaterial?C:_).get(X.envMap||Se),Be=X.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ke=!!j.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ie=!!j.morphAttributes.position,ut=!!j.morphAttributes.normal,mt=!!j.morphAttributes.color;let xt=$i;X.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(xt=S.toneMapping);const _n=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,lt=_n!==void 0?_n.length:0,De=ee.get(X),Bt=m.state.lights;if(te===!0&&(he===!0||b!==ne)){const bn=b===ne&&X.id===D;re.setState(X,b,bn)}let ct=!1;X.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Bt.state.version||De.outputColorSpace!==we||B.isBatchedMesh&&De.batching===!1||!B.isBatchedMesh&&De.batching===!0||B.isBatchedMesh&&De.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&De.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&De.instancing===!1||!B.isInstancedMesh&&De.instancing===!0||B.isSkinnedMesh&&De.skinning===!1||!B.isSkinnedMesh&&De.skinning===!0||B.isInstancedMesh&&De.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&De.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&De.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&De.instancingMorph===!1&&B.morphTexture!==null||De.envMap!==Ce||X.fog===!0&&De.fog!==de||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==re.numPlanes||De.numIntersection!==re.numIntersection)||De.vertexAlphas!==Be||De.vertexTangents!==ke||De.morphTargets!==Ie||De.morphNormals!==ut||De.morphColors!==mt||De.toneMapping!==xt||De.morphTargetsCount!==lt)&&(ct=!0):(ct=!0,De.__version=X.version);let In=De.currentProgram;ct===!0&&(In=po(X,U,B));let Cs=!1,vn=!1,Za=!1;const Mt=In.getUniforms(),bi=De.uniforms;if(G.useProgram(In.program)&&(Cs=!0,vn=!0,Za=!0),X.id!==D&&(D=X.id,vn=!0),Cs||ne!==b){K.reverseDepthBuffer?(ge.copy(b.projectionMatrix),C0(ge),R0(ge),Mt.setValue(v,"projectionMatrix",ge)):Mt.setValue(v,"projectionMatrix",b.projectionMatrix),Mt.setValue(v,"viewMatrix",b.matrixWorldInverse);const bn=Mt.map.cameraPosition;bn!==void 0&&bn.setValue(v,ze.setFromMatrixPosition(b.matrixWorld)),K.logarithmicDepthBuffer&&Mt.setValue(v,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Mt.setValue(v,"isOrthographic",b.isOrthographicCamera===!0),ne!==b&&(ne=b,vn=!0,Za=!0)}if(B.isSkinnedMesh){Mt.setOptional(v,B,"bindMatrix"),Mt.setOptional(v,B,"bindMatrixInverse");const bn=B.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Mt.setValue(v,"boneTexture",bn.boneTexture,y))}B.isBatchedMesh&&(Mt.setOptional(v,B,"batchingTexture"),Mt.setValue(v,"batchingTexture",B._matricesTexture,y),Mt.setOptional(v,B,"batchingIdTexture"),Mt.setValue(v,"batchingIdTexture",B._indirectTexture,y),Mt.setOptional(v,B,"batchingColorTexture"),B._colorsTexture!==null&&Mt.setValue(v,"batchingColorTexture",B._colorsTexture,y));const Ja=j.morphAttributes;if((Ja.position!==void 0||Ja.normal!==void 0||Ja.color!==void 0)&&Ue.update(B,j,In),(vn||De.receiveShadow!==B.receiveShadow)&&(De.receiveShadow=B.receiveShadow,Mt.setValue(v,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(bi.envMap.value=Ce,bi.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&U.environment!==null&&(bi.envMapIntensity.value=U.environmentIntensity),vn&&(Mt.setValue(v,"toneMappingExposure",S.toneMappingExposure),De.needsLights&&Vm(bi,Za),de&&X.fog===!0&&se.refreshFogUniforms(bi,de),se.refreshMaterialUniforms(bi,X,J,$,m.state.transmissionRenderTarget[b.id]),ca.upload(v,dh(De),bi,y)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ca.upload(v,dh(De),bi,y),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Mt.setValue(v,"center",B.center),Mt.setValue(v,"modelViewMatrix",B.modelViewMatrix),Mt.setValue(v,"normalMatrix",B.normalMatrix),Mt.setValue(v,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const bn=X.uniformsGroups;for(let Qa=0,Gm=bn.length;Qa<Gm;Qa++){const ph=bn[Qa];L.update(ph,In),L.bind(ph,In)}}return In}function Vm(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Hm(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(b,U,j){ee.get(b.texture).__webglTexture=U,ee.get(b.depthTexture).__webglTexture=j;const X=ee.get(b);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=j===void 0,X.__autoAllocateDepthBuffer||k.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){const j=ee.get(b);j.__webglFramebuffer=U,j.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,j=0){w=b,N=U,R=j;let X=!0,B=null,de=!1,Se=!1;if(b){const Ce=ee.get(b);if(Ce.__useDefaultFramebuffer!==void 0)G.bindFramebuffer(v.FRAMEBUFFER,null),X=!1;else if(Ce.__webglFramebuffer===void 0)y.setupRenderTarget(b);else if(Ce.__hasExternalTextures)y.rebindTextures(b,ee.get(b.texture).__webglTexture,ee.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ie=b.depthTexture;if(Ce.__boundDepthTexture!==Ie){if(Ie!==null&&ee.has(Ie)&&(b.width!==Ie.image.width||b.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(b)}}const Be=b.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Se=!0);const ke=ee.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ke[U])?B=ke[U][j]:B=ke[U],de=!0):b.samples>0&&y.useMultisampledRTT(b)===!1?B=ee.get(b).__webglMultisampledFramebuffer:Array.isArray(ke)?B=ke[j]:B=ke,M.copy(b.viewport),E.copy(b.scissor),F=b.scissorTest}else M.copy(ve).multiplyScalar(J).floor(),E.copy(Te).multiplyScalar(J).floor(),F=We;if(G.bindFramebuffer(v.FRAMEBUFFER,B)&&X&&G.drawBuffers(b,B),G.viewport(M),G.scissor(E),G.setScissorTest(F),de){const Ce=ee.get(b.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ce.__webglTexture,j)}else if(Se){const Ce=ee.get(b.texture),Be=U||0;v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,Ce.__webglTexture,j||0,Be)}D=-1},this.readRenderTargetPixels=function(b,U,j,X,B,de,Se){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=ee.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we){G.bindFramebuffer(v.FRAMEBUFFER,we);try{const Ce=b.texture,Be=Ce.format,ke=Ce.type;if(!K.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-X&&j>=0&&j<=b.height-B&&v.readPixels(U,j,X,B,Pe.convert(Be),Pe.convert(ke),de)}finally{const Ce=w!==null?ee.get(w).__webglFramebuffer:null;G.bindFramebuffer(v.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(b,U,j,X,B,de,Se){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=ee.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we){const Ce=b.texture,Be=Ce.format,ke=Ce.type;if(!K.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-X&&j>=0&&j<=b.height-B){G.bindFramebuffer(v.FRAMEBUFFER,we);const Ie=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,Ie),v.bufferData(v.PIXEL_PACK_BUFFER,de.byteLength,v.STREAM_READ),v.readPixels(U,j,X,B,Pe.convert(Be),Pe.convert(ke),0);const ut=w!==null?ee.get(w).__webglFramebuffer:null;G.bindFramebuffer(v.FRAMEBUFFER,ut);const mt=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await w0(v,mt,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,Ie),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,de),v.deleteBuffer(Ie),v.deleteSync(mt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,U=null,j=0){b.isTexture!==!0&&(la("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);const X=Math.pow(2,-j),B=Math.floor(b.image.width*X),de=Math.floor(b.image.height*X),Se=U!==null?U.x:0,we=U!==null?U.y:0;y.setTexture2D(b,0),v.copyTexSubImage2D(v.TEXTURE_2D,j,0,0,Se,we,B,de),G.unbindTexture()},this.copyTextureToTexture=function(b,U,j=null,X=null,B=0){b.isTexture!==!0&&(la("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,b=arguments[1],U=arguments[2],B=arguments[3]||0,j=null);let de,Se,we,Ce,Be,ke;j!==null?(de=j.max.x-j.min.x,Se=j.max.y-j.min.y,we=j.min.x,Ce=j.min.y):(de=b.image.width,Se=b.image.height,we=0,Ce=0),X!==null?(Be=X.x,ke=X.y):(Be=0,ke=0);const Ie=Pe.convert(U.format),ut=Pe.convert(U.type);y.setTexture2D(U,0),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,U.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,U.unpackAlignment);const mt=v.getParameter(v.UNPACK_ROW_LENGTH),xt=v.getParameter(v.UNPACK_IMAGE_HEIGHT),_n=v.getParameter(v.UNPACK_SKIP_PIXELS),lt=v.getParameter(v.UNPACK_SKIP_ROWS),De=v.getParameter(v.UNPACK_SKIP_IMAGES),Bt=b.isCompressedTexture?b.mipmaps[B]:b.image;v.pixelStorei(v.UNPACK_ROW_LENGTH,Bt.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,Bt.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,we),v.pixelStorei(v.UNPACK_SKIP_ROWS,Ce),b.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,B,Be,ke,de,Se,Ie,ut,Bt.data):b.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,B,Be,ke,Bt.width,Bt.height,Ie,Bt.data):v.texSubImage2D(v.TEXTURE_2D,B,Be,ke,de,Se,Ie,ut,Bt),v.pixelStorei(v.UNPACK_ROW_LENGTH,mt),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,xt),v.pixelStorei(v.UNPACK_SKIP_PIXELS,_n),v.pixelStorei(v.UNPACK_SKIP_ROWS,lt),v.pixelStorei(v.UNPACK_SKIP_IMAGES,De),B===0&&U.generateMipmaps&&v.generateMipmap(v.TEXTURE_2D),G.unbindTexture()},this.copyTextureToTexture3D=function(b,U,j=null,X=null,B=0){b.isTexture!==!0&&(la("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,X=arguments[1]||null,b=arguments[2],U=arguments[3],B=arguments[4]||0);let de,Se,we,Ce,Be,ke,Ie,ut,mt;const xt=b.isCompressedTexture?b.mipmaps[B]:b.image;j!==null?(de=j.max.x-j.min.x,Se=j.max.y-j.min.y,we=j.max.z-j.min.z,Ce=j.min.x,Be=j.min.y,ke=j.min.z):(de=xt.width,Se=xt.height,we=xt.depth,Ce=0,Be=0,ke=0),X!==null?(Ie=X.x,ut=X.y,mt=X.z):(Ie=0,ut=0,mt=0);const _n=Pe.convert(U.format),lt=Pe.convert(U.type);let De;if(U.isData3DTexture)y.setTexture3D(U,0),De=v.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)y.setTexture2DArray(U,0),De=v.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,U.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,U.unpackAlignment);const Bt=v.getParameter(v.UNPACK_ROW_LENGTH),ct=v.getParameter(v.UNPACK_IMAGE_HEIGHT),In=v.getParameter(v.UNPACK_SKIP_PIXELS),Cs=v.getParameter(v.UNPACK_SKIP_ROWS),vn=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,xt.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,xt.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Ce),v.pixelStorei(v.UNPACK_SKIP_ROWS,Be),v.pixelStorei(v.UNPACK_SKIP_IMAGES,ke),b.isDataTexture||b.isData3DTexture?v.texSubImage3D(De,B,Ie,ut,mt,de,Se,we,_n,lt,xt.data):U.isCompressedArrayTexture?v.compressedTexSubImage3D(De,B,Ie,ut,mt,de,Se,we,_n,xt.data):v.texSubImage3D(De,B,Ie,ut,mt,de,Se,we,_n,lt,xt),v.pixelStorei(v.UNPACK_ROW_LENGTH,Bt),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,ct),v.pixelStorei(v.UNPACK_SKIP_PIXELS,In),v.pixelStorei(v.UNPACK_SKIP_ROWS,Cs),v.pixelStorei(v.UNPACK_SKIP_IMAGES,vn),B===0&&U.generateMipmaps&&v.generateMipmap(De),G.unbindTexture()},this.initRenderTarget=function(b){ee.get(b).__webglFramebuffer===void 0&&y.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?y.setTextureCube(b,0):b.isData3DTexture?y.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?y.setTexture2DArray(b,0):y.setTexture2D(b,0),G.unbindTexture()},this.resetState=function(){N=0,R=0,w=null,G.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Vu?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===Ha?"display-p3":"srgb"}}class $u{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ae(e),this.near=t,this.far=i}clone(){return new $u(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Kd extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class BS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=nu,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const tn=new P;class Yu{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ht(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Yu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const qd=new P,Zd=new ot,Jd=new ot,zS=new P,Qd=new He,Ho=new P,kl=new ti,ef=new He,Vl=new pr;class kS extends Wt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=td,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Si),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ho),this.boundingBox.expandByPoint(Ho)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ti),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ho),this.boundingSphere.expandByPoint(Ho)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kl.copy(this.boundingSphere),kl.applyMatrix4(s),e.ray.intersectsSphere(kl)!==!1&&(ef.copy(s).invert(),Vl.copy(e.ray).applyMatrix4(ef),!(this.boundingBox!==null&&Vl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Vl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ot,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===td?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Jv?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Zd.fromBufferAttribute(s.attributes.skinIndex,e),Jd.fromBufferAttribute(s.attributes.skinWeight,e),qd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Jd.getComponent(r);if(o!==0){const a=Zd.getComponent(r);Qd.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(zS.copy(qd).applyMatrix4(Qd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Tm extends _t{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Am extends Ft{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Gt,u=Gt,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const tf=new He,VS=new He;class Ku{constructor(e=[],t=[]){this.uuid=Vn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new He;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:VS;tf.multiplyMatrices(a,t[r]),tf.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Ku(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Am(t,e,e,Rn,zn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Tm),this.bones.push(o),this.boneInverses.push(new He().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class su extends qt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Gs=new He,nf=new He,Go=[],sf=new Si,HS=new He,Rr=new Wt,Pr=new ti;class GS extends Wt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new su(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,HS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Gs),sf.copy(e.boundingBox).applyMatrix4(Gs),this.boundingBox.union(sf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Gs),Pr.copy(e.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(Pr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Rr.geometry=this.geometry,Rr.material=this.material,Rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pr.copy(this.boundingSphere),Pr.applyMatrix4(i),e.ray.intersectsSphere(Pr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gs),nf.multiplyMatrices(i,Gs),Rr.matrixWorld=nf,Rr.raycast(e,Go);for(let o=0,a=Go.length;o<a;o++){const l=Go[o];l.instanceId=r,l.object=this,t.push(l)}Go.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new su(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Am(new Float32Array(s*this.count),s,this.count,Uu,zn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class oo extends Hn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sa=new P,ba=new P,rf=new He,Ir=new pr,Wo=new ti,Hl=new P,of=new P;class ao extends _t{constructor(e=new Jt,t=new oo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Sa.fromBufferAttribute(t,s-1),ba.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Sa.distanceTo(ba);e.setAttribute("lineDistance",new Zt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wo.copy(i.boundingSphere),Wo.applyMatrix4(s),Wo.radius+=r,e.ray.intersectsSphere(Wo)===!1)return;rf.copy(s).invert(),Ir.copy(e.ray).applyMatrix4(rf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){const p=u.getX(x),T=u.getX(x+1),S=jo(this,e,Ir,l,p,T);S&&t.push(S)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(f),p=jo(this,e,Ir,l,x,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){const p=jo(this,e,Ir,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){const x=jo(this,e,Ir,l,g-1,f);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function jo(n,e,t,i,s,r){const o=n.geometry.attributes.position;if(Sa.fromBufferAttribute(o,s),ba.fromBufferAttribute(o,r),t.distanceSqToSegment(Sa,ba,Hl,of)>i)return;Hl.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Hl);if(!(l<e.near||l>e.far))return{distance:l,point:of.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const af=new P,lf=new P;class wm extends ao{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)af.fromBufferAttribute(t,s),lf.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+af.distanceTo(lf);e.setAttribute("lineDistance",new Zt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class WS extends ao{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Cm extends Hn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const cf=new He,ru=new pr,Xo=new ti,$o=new P;class jS extends _t{constructor(e=new Jt,t=new Cm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xo.copy(i.boundingSphere),Xo.applyMatrix4(s),Xo.radius+=r,e.ray.intersectsSphere(Xo)===!1)return;cf.copy(s).invert(),ru.copy(e.ray).applyMatrix4(cf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,x=f;g<x;g++){const m=c.getX(g);$o.fromBufferAttribute(h,m),uf($o,m,l,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,x=f;g<x;g++)$o.fromBufferAttribute(h,g),uf($o,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function uf(n,e,t,i,s,r,o){const a=ru.distanceSqToPoint(n);if(a<t){const l=new P;ru.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class qu extends Jt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new P,d=new P,f=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){const T=[],S=p/i;let A=0;p===0&&o===0?A=.5/t:p===i&&l===Math.PI&&(A=-.5/t);for(let N=0;N<=t;N++){const R=N/t;h.x=-e*Math.cos(s+R*r)*Math.sin(o+S*a),h.y=e*Math.cos(o+S*a),h.z=e*Math.sin(s+R*r)*Math.sin(o+S*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(R+A,1-S),T.push(c++)}u.push(T)}for(let p=0;p<i;p++)for(let T=0;T<t;T++){const S=u[p][T+1],A=u[p][T],N=u[p+1][T],R=u[p+1][T+1];(p!==0||o>0)&&f.push(S,A,R),(p!==i-1||l<Math.PI)&&f.push(A,N,R)}this.setIndex(f),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(x,3)),this.setAttribute("uv",new Zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class nr extends Hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ku,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ni extends nr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class XS extends Hn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ku,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}function Yo(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function $S(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function YS(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function hf(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function Rm(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class uo{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class KS extends uo{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nd,endingEnd:nd}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case id:r=e,a=2*t-i;break;case sd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case id:o=e,l=2*i-t;break;case sd:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,T=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,S=(-1-f)*m+(1.5+f)*x+.5*g,A=f*m-f*x;for(let N=0;N!==a;++N)r[N]=p*o[u+N]+T*o[c+N]+S*o[l+N]+A*o[h+N];return r}}class qS extends uo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}}class ZS extends uo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class ii{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Yo(t,this.TimeBufferType),this.values=Yo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Yo(e.times,Array),values:Yo(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ZS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new KS(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case io:t=this.InterpolantFactoryMethodDiscrete;break;case so:t=this.InterpolantFactoryMethodLinear;break;case hl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return io;case this.InterpolantFactoryMethodLinear:return so;case this.InterpolantFactoryMethodSmooth:return hl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&$S(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===hl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*i,d=h-i,f=h+i;for(let g=0;g!==i;++g){const x=t[h+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=so;class gr extends ii{constructor(e,t,i){super(e,t,i)}}gr.prototype.ValueTypeName="bool";gr.prototype.ValueBufferType=Array;gr.prototype.DefaultInterpolation=io;gr.prototype.InterpolantFactoryMethodLinear=void 0;gr.prototype.InterpolantFactoryMethodSmooth=void 0;class Pm extends ii{}Pm.prototype.ValueTypeName="color";class hr extends ii{}hr.prototype.ValueTypeName="number";class JS extends uo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Qn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class dr extends ii{InterpolantFactoryMethodLinear(e){return new JS(this.times,this.values,this.getValueSize(),e)}}dr.prototype.ValueTypeName="quaternion";dr.prototype.InterpolantFactoryMethodSmooth=void 0;class _r extends ii{constructor(e,t,i){super(e,t,i)}}_r.prototype.ValueTypeName="string";_r.prototype.ValueBufferType=Array;_r.prototype.DefaultInterpolation=io;_r.prototype.InterpolantFactoryMethodLinear=void 0;_r.prototype.InterpolantFactoryMethodSmooth=void 0;class fr extends ii{}fr.prototype.ValueTypeName="vector";class QS{constructor(e="",t=-1,i=[],s=Qv){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Vn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(tb(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(ii.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=YS(l);l=hf(l,1,u),c=hf(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new hr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,d,f,g,x){if(f.length!==0){const m=[],p=[];Rm(f,m,p,g),m.length!==0&&x.push(new h(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(const x in f){const m=[],p=[];for(let T=0;T!==d[g].morphTargets.length;++T){const S=d[g];m.push(S.time),p.push(S.morphTarget===x?1:0)}s.push(new hr(".morphTargetInfluence["+x+"]",m,p))}l=f.length*o}else{const f=".bones["+t[h].name+"]";i(fr,f+".position",d,"pos",s),i(dr,f+".quaternion",d,"rot",s),i(fr,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function eb(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return hr;case"vector":case"vector2":case"vector3":case"vector4":return fr;case"color":return Pm;case"quaternion":return dr;case"bool":case"boolean":return gr;case"string":return _r}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function tb(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=eb(n.type);if(n.times===void 0){const t=[],i=[];Rm(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Gi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class nb{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const ib=new nb;class vr{constructor(e){this.manager=e!==void 0?e:ib,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}vr.DEFAULT_MATERIAL_NAME="__DEFAULT";const ui={};class sb extends Error{constructor(e,t){super(e),this.response=t}}class Im extends vr{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Gi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ui[e]!==void 0){ui[e].push({onLoad:t,onProgress:i,onError:s});return}ui[e]=[],ui[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ui[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let x=0;const m=new ReadableStream({start(p){T();function T(){h.read().then(({done:S,value:A})=>{if(S)p.close();else{x+=A.byteLength;const N=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let R=0,w=u.length;R<w;R++){const D=u[R];D.onProgress&&D.onProgress(N)}p.enqueue(A),T()}},S=>{p.error(S)})}}});return new Response(m)}else throw new sb(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Gi.add(e,c);const u=ui[e];delete ui[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=ui[e];if(u===void 0)throw this.manager.itemError(e),c;delete ui[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class rb extends vr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Gi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=ro("img");function l(){u(),Gi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class ob extends vr{constructor(e){super(e)}load(e,t,i,s){const r=new Ft,o=new rb(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Xa extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Gl=new He,df=new P,ff=new P;class Zu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wu,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;df.setFromMatrixPosition(e.matrixWorld),t.position.copy(df),ff.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ff),t.updateMatrixWorld(),Gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ab extends Zu{constructor(){super(new an(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=cr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class lb extends Xa{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ab}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const pf=new He,Dr=new P,Wl=new P;class cb extends Zu{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _e(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Dr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Dr),Wl.copy(i.position),Wl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Wl),i.updateMatrixWorld(),s.makeTranslation(-Dr.x,-Dr.y,-Dr.z),pf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pf)}}class ou extends Xa{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new cb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ub extends Zu{constructor(){super(new Wa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hb extends Xa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new ub}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class mf extends Xa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class $r{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class db extends vr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Gi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Gi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Gi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Gi.add(e,l),r.manager.itemStart(e)}}class Dm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=gf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function gf(){return performance.now()}const Ju="\\[\\]\\.:\\/",fb=new RegExp("["+Ju+"]","g"),Qu="[^"+Ju+"]",pb="[^"+Ju.replace("\\.","")+"]",mb=/((?:WC+[\/:])*)/.source.replace("WC",Qu),gb=/(WCOD+)?/.source.replace("WCOD",pb),_b=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qu),vb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qu),xb=new RegExp("^"+mb+gb+_b+vb+"$"),Mb=["material","materials","bones","map"];class yb{constructor(e,t,i){const s=i||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class dt{constructor(e,t,i){this.path=t,this.parsedPath=i||dt.parseTrackName(t),this.node=dt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new dt.Composite(e,t,i):new dt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(fb,"")}static parseTrackName(e){const t=xb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);Mb.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=dt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}dt.Composite=yb;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const _f=new He;class vf{constructor(e,t,i=0,s=1/0){this.ray=new pr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Gu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return _f.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_f),this}intersectObject(e,t=!0,i=[]){return au(e,this,i,t),i.sort(xf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)au(e[s],this,i,t);return i.sort(xf),i}}function xf(n,e){return n.distance-e.distance}function au(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)au(r[o],e,t,!0)}}class Mf{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class yf extends wm{constructor(e=10,t=10,i=4473924,s=8947848){i=new Ae(i),s=new Ae(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,g=-a;d<=t;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const x=d===r?i:s;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}const u=new Jt;u.setAttribute("position",new Zt(l,3)),u.setAttribute("color",new Zt(c,3));const h=new oo({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Sb extends ws{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Du}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Du);const Y=Ia({rotationX:0,rotationY:0,rotationZ:0,currentTool:"edit",currentMode:"object",currentRenderMode:"",secondaryColor:"#b15b2e",primaryColor:"#3e86a0",clearColor:"#222222",snapActive:!0,gridActive:!0,objectModeState:"select",setGridActive:()=>{},setCurrentMode:()=>{},brushSize:1,brushShape:"square",multipleSelections:!1,objectTransformChange:()=>{},isMouseDown:[!1,!1,!1,!1],treeShowInternal:!1});class kn extends Wt{constructor(t,i){super(t,i);ce(this,"clickEvents",new Set);ce(this,"dragEvents",new Set);ce(this,"hoverEvents",new Set);ce(this,"hoverOutEvents",new Set);ce(this,"transformEvents",new Set);ce(this,"selected",!1);ce(this,"internal",!1);ce(this,"draggable",!1);ce(this,"hover",!1);ce(this,"disableMouseEvents",!1);ce(this,"isMeshObject",!0)}static fromMesh(t){let i=new kn(t.geometry,t.material);return i.name=t.name,i.userData={...t.userData},i.position.copy(t.position),i.rotation.copy(t.rotation),i.scale.copy(t.scale),i}updateMatrix(){super.updateMatrix(),this.transformEvents.forEach(t=>{t()})}select(){this.selected=!0}unselect(){this.selected=!1}addClickListener(t){this.clickEvents.add(t)}addDragListener(t){this.dragEvents.add(t)}addHoverEvent(t){this.hoverEvents.add(t)}addHoverOutEvent(t){this.hoverOutEvents.add(t)}addTransformEvents(t){this.transformEvents.add(t)}removeClickListener(t){this.clickEvents.delete(t)}removeDragListener(t){this.dragEvents.delete(t)}removeHoverEvent(t){this.hoverEvents.delete(t)}removeHoverOutEvent(t){this.hoverOutEvents.delete(t)}removeTransformEvents(t){this.transformEvents.delete(t)}invokeClickEvent(t){this.clickEvents.forEach(i=>{i(t)})}invokeDragEvent(t){this.dragEvents.forEach(i=>{i(t)})}invokeHoverEvent(t){this.hoverEvents.forEach(i=>{i(t)})}invokeHoverOutEvent(t){this.hoverOutEvents.forEach(i=>{i(t)})}clone(){const t=super.clone();for(const i of Object.keys(this))i in t||(t[i]=this[i]);return t}}const jl=[new P(0,0,0),new P(1,0,0),new P(1,1,0),new P(0,1,0),new P(0,0,1),new P(1,0,1),new P(1,1,1),new P(0,1,1)],Ko=[[0,1],[1,2],[3,2],[0,3],[4,5],[5,6],[7,6],[4,7],[0,4],[1,5],[2,6],[3,7]],bb=[[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1],[3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1],[3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1],[3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1],[9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1],[1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1],[9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1],[2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1],[8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1],[9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1],[4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1],[3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1],[1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1],[4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1],[4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1],[9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1],[1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1],[5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1],[2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1],[9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1],[0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1],[2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1],[10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1],[4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1],[5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1],[5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1],[9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1],[0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1],[1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1],[10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1],[8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1],[2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1],[7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1],[9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1],[2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1],[11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1],[9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1],[5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1],[11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1],[11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1],[1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1],[9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1],[5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1],[2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1],[0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1],[5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1],[6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1],[0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1],[3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1],[6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1],[5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1],[1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1],[10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1],[6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1],[1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1],[8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1],[7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1],[3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1],[5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1],[0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1],[9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1],[8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1],[5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1],[0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1],[6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1],[10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1],[10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1],[8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1],[1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1],[3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1],[0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1],[10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1],[0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1],[3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1],[6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1],[9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1],[8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1],[3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1],[6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1],[0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1],[10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1],[10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1],[1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1],[2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1],[7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1],[7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1],[2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1],[1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1],[11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1],[8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1],[0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1],[7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1],[10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1],[2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1],[6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1],[7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1],[2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1],[1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1],[10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1],[10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1],[0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1],[7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1],[6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1],[8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1],[9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1],[6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1],[1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1],[4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1],[10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1],[8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1],[0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1],[1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1],[8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1],[10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1],[4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1],[10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1],[5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1],[11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1],[9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1],[6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1],[7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1],[3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1],[7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1],[9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1],[3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1],[6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1],[9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1],[1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1],[4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1],[7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1],[6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1],[3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1],[0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1],[6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1],[1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1],[0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1],[11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1],[6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1],[5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1],[9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1],[1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1],[1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1],[10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1],[0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1],[5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1],[10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1],[11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1],[0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1],[9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1],[7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1],[2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1],[8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1],[9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1],[9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1],[1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1],[9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1],[9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1],[5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1],[0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1],[10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1],[2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1],[0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1],[0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1],[9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1],[5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1],[3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1],[5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1],[8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1],[0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1],[9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1],[0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1],[1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1],[3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1],[4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1],[9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1],[11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1],[11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1],[2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1],[9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1],[3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1],[1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1],[4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1],[4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1],[0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1],[3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1],[3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1],[0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1],[9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1],[1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]],lu=.5;function Xl(n){return`${n.x},${n.y},${n.z}`}function Eb(n){let e=0;for(let t=0;t<8;t++)n[t]>lu&&(e|=1<<t);return e}function Tb(n,e,t){var o;const i=new qi(1,1,1,1,1,1),s=(o=i.index)==null?void 0:o.array.reverse(),r=i.getAttribute("position").array;for(let a=0;a<(s==null?void 0:s.length);a++)e.push(new P(r[s[a]*3]+n.x,r[s[a]*3+1]+n.y,r[s[a]*3+2]+n.z)),t.push(e.length-1);i.dispose()}function Sf(n,e,t,i,s,r=!0,o=!1){var h,d,f,g;const a=((d=(h=e[n.x])==null?void 0:h[n.y])==null?void 0:d[n.z])||0;if(!r&&a!==0){Tb(n,t,i);return}const l=[];for(let x=0;x<8;x++){const m=n.clone().add(jl[x]),p=((g=(f=e[m.x])==null?void 0:f[m.y])==null?void 0:g[m.z])||0;l[x]=p===0?0:1}const c=Eb(l);if(c===0||c===255)return;let u=0;for(let x=0;x<5;x++)for(let m=0;m<3;m++){const p=bb[c][u];if(p===-1)return;const T=n.clone().add(jl[Ko[p][0]]),S=n.clone().add(jl[Ko[p][1]]),A=l[Ko[p][0]];let R=l[Ko[p][1]]-A;R==0?R=lu:R=(lu-A)/R;const w=T.clone().add(S.clone().sub(T).multiplyScalar(R));o?s.has(Xl(w))?i.push(s.get(Xl(w))):(t.push(w),i.push(t.length-1),s.set(Xl(w),t.length-1)):(t.push(w),i.push(t.length-1)),u++}}function Ws(n,e,t,i,s){const r=t[n],o=s[e];t[n]=r.clone().add(o),i[n]=i[n]+1}function Ab(n,e){const t={},i={};for(let s=0;s<n.length;s++)t[s]=new P,i[s]=0;for(let s=0;s<e.length;s+=3){const r=e[s],o=e[s+1],a=e[s+2];Ws(r,o,t,i,n),Ws(r,a,t,i,n),Ws(o,a,t,i,n),Ws(o,r,t,i,n),Ws(a,r,t,i,n),Ws(a,o,t,i,n)}for(let s=0;s<n.length;s++){let r=t[s];const o=i[s];o>0&&(r=r.divideScalar(o),n[s]=r)}}class ir extends kn{constructor(){super(new qi(0,0),new nr);ce(this,"max",new P);ce(this,"min",new P);ce(this,"sphere");ce(this,"cube");ce(this,"data",{});ce(this,"marchCubes",!1);ce(this,"smoothNormals",!1);ce(this,"smoothGeometry",!1);ce(this,"lastDragTime",0);ce(this,"draw",(t,i,s,r)=>{!this.marchCubes&&i==="round"&&(s+=3),s===0&&this.setVoxel(t.x,t.y,t.z,r);for(let o=-s;o<s;o++)for(let a=-s;a<s;a++)for(let l=-s;l<s;l++)i==="square"?this.setVoxel(t.x+o,t.y+a,t.z+l,r):i==="round"&&new P(o,a,l).length()<s&&this.setVoxel(t.x+o,t.y+a,t.z+l,r);this.update()});ce(this,"update",()=>{this.geometry.dispose();const t=[],i=[],s=new Map;this.material.side=Jn;for(const[o,a]of Object.entries(this.data)){let l=!1;for(const[c,u]of Object.entries(this.data[o])){let h=!1;for(const[d,f]of Object.entries(this.data[o][c])){const g=parseInt(o,10),x=parseInt(c,10),m=parseInt(d,10);this.max.x=Math.max(this.max.x,g),this.max.y=Math.max(this.max.y,x),this.max.z=Math.max(this.max.z,m),this.min.x=Math.min(this.min.x,g),this.min.y=Math.min(this.min.y,x),this.min.z=Math.min(this.min.z,m),f!==0&&(l=!0,h=!0),!this.marchCubes&&f!==0&&Sf(new P(g,x,m),this.data,t,i,s,!1,!1),f||delete u[d]}!h&&a[c]&&delete a[c]}!l&&this.data[o]&&delete this.data[o]}if(this.marchCubes)for(let o=this.min.x-1;o<this.max.x+1;o++)for(let a=this.min.y-1;a<this.max.y+1;a++)for(let l=this.min.z-1;l<this.max.z+1;l++)Sf(new P(o,a,l),this.data,t,i,s,this.marchCubes,this.smoothNormals||this.smoothGeometry);this.smoothGeometry&&this.marchCubes&&Ab(t,i);const r=new Float32Array(t.length*3);for(let o=0;o<t.length;o++)r[o*3]=t[o].x,r[o*3+1]=t[o].y,r[o*3+2]=t[o].z;this.geometry=new Jt,this.geometry.setAttribute("position",new qt(r,3)),this.geometry.setIndex(i.reverse()),this.geometry.computeVertexNormals()});ce(this,"setVoxel",(t,i,s,r)=>{this.data[t]||(this.data[t]={}),this.data[t][i]||(this.data[t][i]={}),this.data[t][i][s]=r});ce(this,"getVoxel",(t,i,s)=>{var r,o;return((o=(r=this.data[t])==null?void 0:r[i])==null?void 0:o[s])||0});this.sphere=new Wt(new qu(1),new nr({transparent:!0,depthTest:!0,depthWrite:!1,opacity:.5,color:"#91b9c9",side:ln})),this.cube=new Wt(new qi(1,1,1),new nr({transparent:!0,depthTest:!0,depthWrite:!1,opacity:.5,color:"#91b9c9",side:ln})),this.cube.visible=!1,this.sphere.visible=!1,this.cube.disableMouseEvents=!0,this.sphere.disableMouseEvents=!0,this.add(this.cube),this.add(this.sphere),this.addHoverEvent(t=>{var l,c,u;const i=this.sphere,s=this.cube;if(Y.currentMode!=="sculpt"){i.visible=!1,s.visible=!1;return}this.marchCubes?(i.scale.setScalar(Y.brushSize+1),s.scale.setScalar(Y.brushSize*2+1)):(i.scale.setScalar(Y.brushSize+2),s.scale.setScalar(Y.brushSize===1?1:(Y.brushSize-1)*2)),i.visible=Y.brushShape==="round",s.visible=Y.brushShape==="square";let r=t.intersect.point.clone().add((l=t.intersect.normal)==null?void 0:l.clone().divideScalar(10)).addScalar(.5).floor();Y.brushShape==="square"&&Y.brushSize>1&&(r=r.subScalar(.5)),r=this.worldToLocal(r),i.position.copy(r),s.position.copy(r);const o=Y.isMouseDown[0]||Y.isMouseDown[2],a=Y.isMouseDown[0]&&Y.isMouseDown[2];if(o&&t.ctrlKey&&!a&&Date.now()-this.lastDragTime>100){if(r=t.intersect.point.clone().add((c=t.intersect.normal)==null?void 0:c.clone().divideScalar(10)).addScalar(.5).floor(),Y.isMouseDown[2]&&(r=r.add((u=t.intersect.normal)==null?void 0:u.clone().ceil().multiplyScalar(-1))),this.marchCubes){const h=Y.brushSize+1;this.draw(r,Y.brushShape,h,Y.isMouseDown[2]?0:1)}else{const h=Y.brushSize-1;this.draw(r,Y.brushShape,h,Y.isMouseDown[2]?0:1)}this.lastDragTime=Date.now()}}),this.addHoverOutEvent(()=>{const t=this.sphere,i=this.cube;t.visible=!1,i.visible=!1}),this.addClickListener(t=>{var i,s;if(Y.currentMode==="sculpt"){let r=t.intersect.point.clone().add((i=t.intersect.normal)==null?void 0:i.clone().divideScalar(10)).addScalar(.5).floor();if(this.marchCubes||t.button==2&&(r=r.add((s=t.intersect.normal)==null?void 0:s.clone().ceil().multiplyScalar(-1))),r=this.worldToLocal(r),this.marchCubes){const o=Y.brushSize+1;this.draw(r,Y.brushShape,o,t.button===2?0:1)}else{const o=Y.brushSize-1;this.draw(r,Y.brushShape,o,t.button===2?0:1)}}})}clone(){const t=super.clone();for(const i of Object.keys(this))i in t||(t[i]=this[i]);t.data={};for(const[i,s]of Object.entries(this.data))for(const[r,o]of Object.entries(this.data))for(const[a,l]of Object.entries(this.data))t.setVoxel(+i,+r,+a,this.getVoxel(+i,+r,+a));return t}}const bf={type:"change"},eh={type:"start"},Lm={type:"end"},qo=new pr,Ef=new $n,wb=Math.cos(70*zi.DEG2RAD),Ct=new P,hn=2*Math.PI,pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},$l=1e-6;class Cb extends Sb{constructor(e,t=null){super(e,t),this.state=pt.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Js.ROTATE,MIDDLE:Js.DOLLY,RIGHT:Js.PAN},this.touches={ONE:js.ROTATE,TWO:js.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new Qn,this._lastTargetPosition=new P,this._quat=new Qn().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Mf,this._sphericalDelta=new Mf,this._scale=1,this._panOffset=new P,this._rotateStart=new _e,this._rotateEnd=new _e,this._rotateDelta=new _e,this._panStart=new _e,this._panEnd=new _e,this._panDelta=new _e,this._dollyStart=new _e,this._dollyEnd=new _e,this._dollyDelta=new _e,this._dollyDirection=new P,this._mouse=new _e,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Pb.bind(this),this._onPointerDown=Rb.bind(this),this._onPointerUp=Ib.bind(this),this._onContextMenu=Bb.bind(this),this._onMouseWheel=Nb.bind(this),this._onKeyDown=Ob.bind(this),this._onTouchStart=Ub.bind(this),this._onTouchMove=Fb.bind(this),this._onMouseDown=Db.bind(this),this._onMouseMove=Lb.bind(this),this._interceptControlDown=zb.bind(this),this._interceptControlUp=kb.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(bf),this.update(),this.state=pt.NONE}update(e=null){const t=this.object.position;Ct.copy(t).sub(this.target),Ct.applyQuaternion(this._quat),this._spherical.setFromVector3(Ct),this.autoRotate&&this.state===pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=hn:i>Math.PI&&(i-=hn),s<-Math.PI?s+=hn:s>Math.PI&&(s-=hn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ct.setFromSpherical(this._spherical),Ct.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ct),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ct.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ct.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(qo.origin.copy(this.object.position),qo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qo.direction))<wb?this.object.lookAt(this.target):(Ef.setFromNormalAndCoplanarPoint(this.object.up,this.target),qo.intersectPlane(Ef,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>$l||8*(1-this._lastQuaternion.dot(this.object.quaternion))>$l||this._lastTargetPosition.distanceToSquared(this.target)>$l?(this.dispatchEvent(bf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?hn/60*this.autoRotateSpeed*e:hn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ct.setFromMatrixColumn(t,0),Ct.multiplyScalar(-e),this._panOffset.add(Ct)}_panUp(e,t){this.screenSpacePanning===!0?Ct.setFromMatrixColumn(t,1):(Ct.setFromMatrixColumn(t,0),Ct.crossVectors(this.object.up,Ct)),Ct.multiplyScalar(e),this._panOffset.add(Ct)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ct.copy(s).sub(this.target);let r=Ct.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(hn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-hn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(hn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-hn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new _e,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Rb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Pb(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Ib(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Lm),this.state=pt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Db(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Js.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=pt.DOLLY;break;case Js.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=pt.ROTATE}break;case Js.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=pt.PAN}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(eh)}function Lb(n){switch(this.state){case pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Nb(n){this.enabled===!1||this.enableZoom===!1||this.state!==pt.NONE||(n.preventDefault(),this.dispatchEvent(eh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Lm))}function Ob(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function Ub(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case js.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=pt.TOUCH_ROTATE;break;case js.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=pt.TOUCH_PAN;break;default:this.state=pt.NONE}break;case 2:switch(this.touches.TWO){case js.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=pt.TOUCH_DOLLY_PAN;break;case js.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=pt.TOUCH_DOLLY_ROTATE;break;default:this.state=pt.NONE}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(eh)}function Fb(n){switch(this._trackPointer(n),this.state){case pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=pt.NONE}}function Bb(n){this.enabled!==!1&&n.preventDefault()}function zb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function kb(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class xr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Vb=new Wa(-1,1,1,-1,0,1);class Hb extends Jt{constructor(){super(),this.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Zt([0,2,0,0,2,0],2))}}const Gb=new Hb;class th{constructor(e){this._mesh=new Wt(Gb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Vb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}function Tf(n,e){if(e===e0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===tu||e===am){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===tu)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class Wb extends vr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Kb(t)}),this.register(function(t){return new qb(t)}),this.register(function(t){return new rE(t)}),this.register(function(t){return new oE(t)}),this.register(function(t){return new aE(t)}),this.register(function(t){return new Jb(t)}),this.register(function(t){return new Qb(t)}),this.register(function(t){return new eE(t)}),this.register(function(t){return new tE(t)}),this.register(function(t){return new Yb(t)}),this.register(function(t){return new nE(t)}),this.register(function(t){return new Zb(t)}),this.register(function(t){return new sE(t)}),this.register(function(t){return new iE(t)}),this.register(function(t){return new Xb(t)}),this.register(function(t){return new lE(t)}),this.register(function(t){return new cE(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=$r.extractUrlBase(e);o=$r.resolveURL(c,this.path)}else o=$r.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Im(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Nm){try{o[qe.KHR_BINARY_GLTF]=new uE(e)}catch(h){s&&s(h);return}r=JSON.parse(o[qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new bE(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case qe.KHR_MATERIALS_UNLIT:o[h]=new $b;break;case qe.KHR_DRACO_MESH_COMPRESSION:o[h]=new hE(r,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:o[h]=new dE;break;case qe.KHR_MESH_QUANTIZATION:o[h]=new fE;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function jb(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Xb{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ae(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],jt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new hb(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ou(u),c.distance=h;break;case"spot":c=new lb(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,fi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class $b{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return vs}extendParams(e,t,i){const s=[];e.color=new Ae(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],jt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,on))}return Promise.all(s)}}class Yb{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Kb{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new _e(a,a)}return Promise.all(r)}}class qb{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Zb{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Jb{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ae(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],jt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,on)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Qb{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class eE{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ae().setRGB(a[0],a[1],a[2],jt),Promise.all(r)}}class tE{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class nE{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ae().setRGB(a[0],a[1],a[2],jt),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,on)),Promise.all(r)}}class iE{constructor(e){this.parser=e,this.name=qe.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class sE{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class rE{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class oE{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class aE{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class lE{constructor(e){this.name=qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}}class cE{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==An.TRIANGLES&&c.mode!==An.TRIANGLE_STRIP&&c.mode!==An.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const g of h){const x=new He,m=new P,p=new Qn,T=new P(1,1,1),S=new GS(g.geometry,g.material,d);for(let A=0;A<d;A++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,A),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,A),l.SCALE&&T.fromBufferAttribute(l.SCALE,A),S.setMatrixAt(A,x.compose(m,p,T));for(const A in l)if(A==="_COLOR_0"){const N=l[A];S.instanceColor=new su(N.array,N.itemSize,N.normalized)}else A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"&&g.geometry.setAttribute(A,l[A]);_t.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),f.push(S)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Nm="glTF",Lr=12,Af={JSON:1313821514,BIN:5130562};class uE{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Lr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Nm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Lr,r=new DataView(e,Lr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Af.JSON){const c=new Uint8Array(e,Lr+o,a);this.content=i.decode(c)}else if(l===Af.BIN){const c=Lr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class hE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=cu[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=cu[u]||u.toLowerCase();if(o[u]!==void 0){const d=i.accessors[e.attributes[u]],f=sr[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(const g in f.attributes){const x=f.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}h(f)},a,c,jt,d)})})}}class dE{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class fE{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}}class Om extends uo{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(i-t)/u,d=h*h,f=d*h,g=e*c,x=g-c,m=-2*f+3*d,p=f-d,T=1-m,S=p-d+h;for(let A=0;A!==a;A++){const N=o[x+A+a],R=o[x+A+l]*u,w=o[g+A+a],D=o[g+A]*u;r[A]=T*N+S*R+m*w+p*D}return r}}const pE=new Qn;class mE extends Om{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return pE.fromArray(r).normalize().toArray(r),r}}const An={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},sr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},wf={9728:Gt,9729:yn,9984:Zp,9985:na,9986:Or,9987:mi},Cf={33071:Vi,33648:_a,10497:lr},Yl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},cu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Li={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},gE={CUBICSPLINE:void 0,LINEAR:so,STEP:io},Kl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function _E(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new nr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Jn})),n.DefaultMaterial}function ds(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function fi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function vE(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function xE(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ME(n){let e;const t=n.extensions&&n.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ql(t.attributes):e=n.indices+":"+ql(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+ql(n.targets[i]);return e}function ql(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function uu(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function yE(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const SE=new He;class bE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new jb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new ob(this.options.manager):this.textureLoader=new db(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Im(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return ds(r,a,s),fi(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load($r.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Yl[s.type],a=sr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new qt(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Yl[s.type],c=sr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let x,m;if(f&&f!==h){const p=Math.floor(d/f),T="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let S=t.cache.get(T);S||(x=new c(a,p*f,s.count*f/u),S=new BS(x,f/u),t.cache.add(T,S)),m=new Yu(S,l,d%f/u,g)}else a===null?x=new c(s.count*l):x=new c(a,d,s.count*l),m=new qt(x,l,g);if(s.sparse!==void 0){const p=Yl.SCALAR,T=sr[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,A=s.sparse.values.byteOffset||0,N=new T(o[1],S,s.sparse.count*p),R=new c(o[2],A,s.sparse.count*l);a!==null&&(m=new qt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,D=N.length;w<D;w++){const ne=N[w];if(m.setX(ne,R[w*l]),l>=2&&m.setY(ne,R[w*l+1]),l>=3&&m.setZ(ne,R[w*l+2]),l>=4&&m.setW(ne,R[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=wf[d.magFilter]||yn,u.minFilter=wf[d.minFilter]||mi,u.wrapS=Cf[d.wrapS]||lr,u.wrapT=Cf[d.wrapT]||lr,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){const m=new Ft(x);m.needsUpdate=!0,d(m)}),t.load($r.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),fi(h,o),h.userData.mimeType=o.mimeType||yE(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[qe.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Cm,Hn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new oo,Hn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return nr}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[qe.KHR_MATERIALS_UNLIT]){const h=s[qe.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Ae(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],jt),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,on)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=ln);const u=r.alphaMode||Kl.OPAQUE;if(u===Kl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Kl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==vs&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new _e(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==vs&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==vs){const h=r.emissiveFactor;a.emissive=new Ae().setRGB(h[0],h[1],h[2],jt)}return r.emissiveTexture!==void 0&&o!==vs&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,on)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),fi(h,r),t.associations.set(h,{materials:e}),r.extensions&&ds(s,h,r),h})}createUniqueName(e){const t=dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Rf(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=ME(c),h=s[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Rf(new Jt,c,t),s[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?_E(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const x=u[f],m=o[f];let p;const T=c[f];if(m.mode===An.TRIANGLES||m.mode===An.TRIANGLE_STRIP||m.mode===An.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new kS(x,T):new Wt(x,T),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===An.TRIANGLE_STRIP?p.geometry=Tf(p.geometry,am):m.mode===An.TRIANGLE_FAN&&(p.geometry=Tf(p.geometry,tu));else if(m.mode===An.LINES)p=new wm(x,T);else if(m.mode===An.LINE_STRIP)p=new ao(x,T);else if(m.mode===An.LINE_LOOP)p=new WS(x,T);else if(m.mode===An.POINTS)p=new jS(x,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&xE(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),fi(p,r),m.extensions&&ds(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&ds(s,h[0],r),h[0];const d=new Hi;r.extensions&&ds(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new an(zi.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Wa(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),fi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new He;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ku(a,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],g=s.samplers[f.sampler],x=f.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,T=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",T)),c.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],x=h[3],m=h[4],p=[];for(let T=0,S=d.length;T<S;T++){const A=d[T],N=f[T],R=g[T],w=x[T],D=m[T];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const ne=i._createAnimationTracks(A,N,R,w,D);if(ne)for(let M=0;M<ne.length;M++)p.push(ne[M])}return new QS(r,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,SE)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Tm:c.length>1?u=new Hi:c.length===1?u=c[0]:u=new _t,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),fi(u,r),r.extensions&&ds(i,u,r),r.matrix!==void 0){const h=new He;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new Hi;i.name&&(r.name=s.createUniqueName(i.name)),fi(r,i),i.extensions&&ds(t,r,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof Hn||d instanceof Ft)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];Li[r.path]===Li.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Li[r.path]){case Li.weights:c=hr;break;case Li.rotation:c=dr;break;case Li.position:case Li.scale:c=fr;break;default:switch(i.itemSize){case 1:c=hr;break;case 2:case 3:default:c=fr;break}break}const u=s.interpolation!==void 0?gE[s.interpolation]:so,h=this._getArrayFromAccessor(i);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+Li[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=uu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof dr?mE:Om;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function EE(n,e,t){const i=e.attributes,s=new Si;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),a.normalized){const u=uu(sr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new P,l=new P;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const x=uu(sr[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new ti;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Rf(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=cu[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return nt.workingColorSpace!==jt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nt.workingColorSpace}" not supported.`),fi(n,e),EE(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?vE(n,e.targets,t):n})}const Yr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Um extends xr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Et?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=xs.clone(e.uniforms),this.material=new Et({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new th(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Pf extends xr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class TE extends xr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class AE{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new _e);this._width=i.width,this._height=i.height,t=new kt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:fn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Um(Yr),this.copyPass.material.blending=Nt,this.clock=new Dm}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Pf!==void 0&&(o instanceof Pf?i=!0:o instanceof TE&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new _e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Wi extends xr{constructor(e,t,i,s){super(),this.renderScene=t,this.renderCamera=i,this.selectedObjects=s!==void 0?s:[],this.visibleEdgeColor=new Ae(1,1,1),this.hiddenEdgeColor=new Ae(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this._selectionCache=new Set,this.resolution=e!==void 0?new _e(e.x,e.y):new _e(256,256);const r=Math.round(this.resolution.x/this.downSampleRatio),o=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new kt(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new Em,this.depthMaterial.side=ln,this.depthMaterial.depthPacking=lm,this.depthMaterial.blending=Nt,this.prepareMaskMaterial=this.getPrepareMaskMaterial(),this.prepareMaskMaterial.side=ln,this.prepareMaskMaterial.fragmentShader=u(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new kt(this.resolution.x,this.resolution.y,{type:fn}),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new kt(r,o,{type:fn}),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new kt(r,o,{type:fn}),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new kt(Math.round(r/2),Math.round(o/2),{type:fn}),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this.getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new kt(r,o,{type:fn}),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new kt(Math.round(r/2),Math.round(o/2),{type:fn}),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const a=4,l=4;this.separableBlurMaterial1=this.getSeperableBlurMaterial(a),this.separableBlurMaterial1.uniforms.texSize.value.set(r,o),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this.getSeperableBlurMaterial(l),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(r/2),Math.round(o/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=l,this.overlayMaterial=this.getOverlayMaterial();const c=Yr;this.copyUniforms=xs.clone(c.uniforms),this.materialCopy=new Et({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:Nt,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ae,this.oldClearAlpha=1,this.fsQuad=new th(null),this.tempPulseColor1=new Ae,this.tempPulseColor2=new Ae,this.textureMatrix=new He;function u(h,d){const f=d.isPerspectiveCamera?"perspective":"orthographic";return h.replace(/DEPTH_TO_VIEW_Z/g,f+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this.fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let i=Math.round(e/this.downSampleRatio),s=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(i,s),this.renderTargetBlurBuffer1.setSize(i,s),this.renderTargetEdgeBuffer1.setSize(i,s),this.separableBlurMaterial1.uniforms.texSize.value.set(i,s),i=Math.round(i/2),s=Math.round(s/2),this.renderTargetBlurBuffer2.setSize(i,s),this.renderTargetEdgeBuffer2.setSize(i,s),this.separableBlurMaterial2.uniforms.texSize.value.set(i,s)}updateSelectionCache(){const e=this._selectionCache;function t(i){i.isMesh&&e.add(i)}e.clear();for(let i=0;i<this.selectedObjects.length;i++)this.selectedObjects[i].traverse(t)}changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;for(const i of this._selectionCache)e===!0?i.visible=t.get(i):(t.set(i,i.visible),i.visible=e)}changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,i=this._selectionCache;function s(r){if(r.isMesh||r.isSprite){if(!i.has(r)){const o=r.visible;(e===!1||t.get(r)===!0)&&(r.visible=e),t.set(r,o)}}else(r.isPoints||r.isLine)&&(e===!0?r.visible=t.get(r):(t.set(r,r.visible),r.visible=e))}this.renderScene.traverse(s)}updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}render(e,t,i,s,r){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,r&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this.updateSelectionCache(),this.changeVisibilityOfSelectedObjects(!1);const a=this.renderScene.background;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this.updateTextureMatrix(),this.changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.renderScene.overrideMaterial=null,this.changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this._selectionCache.clear(),this.renderScene.background=a,this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this.fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const l=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(l),this.tempPulseColor2.multiplyScalar(l)}this.fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Wi.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Wi.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=Wi.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=Wi.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,r&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(i),this.fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}this.renderToScreen&&(this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=i.texture,e.setRenderTarget(null),this.fsQuad.render(e))}getPrepareMaskMaterial(){return new Et({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new _e(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <morphtarget_pars_vertex>
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

				}`})}getEdgeDetectionMaterial(){return new Et({uniforms:{maskTexture:{value:null},texSize:{value:new _e(.5,.5)},visibleEdgeColor:{value:new P(1,1,1)},hiddenEdgeColor:{value:new P(1,1,1)}},vertexShader:`varying vec2 vUv;

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
				}`})}getSeperableBlurMaterial(e){return new Et({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new _e(.5,.5)},direction:{value:new _e(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

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
				}`})}getOverlayMaterial(){return new Et({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

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
				}`,blending:mc,depthTest:!1,depthWrite:!1,transparent:!0})}}Wi.BlurDirectionX=new _e(1,0);Wi.BlurDirectionY=new _e(0,1);class wE extends xr{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ae}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const Zo={name:"SAOShader",defines:{NUM_SAMPLES:7,NUM_RINGS:4,DIFFUSE_TEXTURE:0,PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},tDiffuse:{value:null},tNormal:{value:null},size:{value:new _e(512,512)},cameraNear:{value:1},cameraFar:{value:100},cameraProjectionMatrix:{value:new He},cameraInverseProjectionMatrix:{value:new He},scale:{value:1},intensity:{value:.1},bias:{value:.5},minResolution:{value:0},kernelRadius:{value:100},randomSeed:{value:0}},vertexShader:`

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
		}`},Ni={name:"DepthLimitedBlurShader",defines:{KERNEL_RADIUS:4,DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDiffuse:{value:null},size:{value:new _e(512,512)},sampleUvOffsets:{value:[new _e(0,0)]},sampleWeights:{value:[1]},tDepth:{value:null},cameraNear:{value:10},cameraFar:{value:1e3},depthCutoff:{value:10}},vertexShader:`

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
		}`},Ea={createSampleWeights:function(n,e){const t=[];for(let i=0;i<=n;i++)t.push(CE(i,e));return t},createSampleOffsets:function(n,e){const t=[];for(let i=0;i<=n;i++)t.push(e.clone().multiplyScalar(i));return t},configure:function(n,e,t,i){n.defines.KERNEL_RADIUS=e,n.uniforms.sampleUvOffsets.value=Ea.createSampleOffsets(e,i),n.uniforms.sampleWeights.value=Ea.createSampleWeights(e,t),n.needsUpdate=!0}};function CE(n,e){return Math.exp(-(n*n)/(2*(e*e)))/(Math.sqrt(2*Math.PI)*e)}class lo extends xr{constructor(e,t,i=new _e(256,256)){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.originalClearColor=new Ae,this._oldClearColor=new Ae,this.oldClearAlpha=1,this.params={output:0,saoBias:.5,saoIntensity:.18,saoScale:1,saoKernelRadius:100,saoMinResolution:0,saoBlur:!0,saoBlurRadius:8,saoBlurStdDev:4,saoBlurDepthCutoff:.01},this.resolution=new _e(i.x,i.y),this.saoRenderTarget=new kt(this.resolution.x,this.resolution.y,{type:fn}),this.blurIntermediateRenderTarget=this.saoRenderTarget.clone();const s=new Xu;s.format=Es,s.type=bs,this.normalRenderTarget=new kt(this.resolution.x,this.resolution.y,{minFilter:Gt,magFilter:Gt,type:fn,depthTexture:s}),this.normalMaterial=new XS,this.normalMaterial.blending=Nt,this.saoMaterial=new Et({defines:Object.assign({},Zo.defines),fragmentShader:Zo.fragmentShader,vertexShader:Zo.vertexShader,uniforms:xs.clone(Zo.uniforms)}),this.saoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.saoMaterial.uniforms.tDepth.value=s,this.saoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.saoMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.blending=Nt,this.vBlurMaterial=new Et({uniforms:xs.clone(Ni.uniforms),defines:Object.assign({},Ni.defines),vertexShader:Ni.vertexShader,fragmentShader:Ni.fragmentShader}),this.vBlurMaterial.defines.DEPTH_PACKING=0,this.vBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.vBlurMaterial.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.vBlurMaterial.uniforms.tDepth.value=s,this.vBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.vBlurMaterial.blending=Nt,this.hBlurMaterial=new Et({uniforms:xs.clone(Ni.uniforms),defines:Object.assign({},Ni.defines),vertexShader:Ni.vertexShader,fragmentShader:Ni.fragmentShader}),this.hBlurMaterial.defines.DEPTH_PACKING=0,this.hBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.hBlurMaterial.uniforms.tDiffuse.value=this.blurIntermediateRenderTarget.texture,this.hBlurMaterial.uniforms.tDepth.value=s,this.hBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.hBlurMaterial.blending=Nt,this.materialCopy=new Et({uniforms:xs.clone(Yr.uniforms),vertexShader:Yr.vertexShader,fragmentShader:Yr.fragmentShader,blending:Nt}),this.materialCopy.transparent=!0,this.materialCopy.depthTest=!1,this.materialCopy.depthWrite=!1,this.materialCopy.blending=gc,this.materialCopy.blendSrc=Yp,this.materialCopy.blendDst=_c,this.materialCopy.blendEquation=pi,this.materialCopy.blendSrcAlpha=$p,this.materialCopy.blendDstAlpha=_c,this.materialCopy.blendEquationAlpha=pi,this.fsQuad=new th(null)}render(e,t,i){this.renderToScreen&&(this.materialCopy.blending=Nt,this.materialCopy.uniforms.tDiffuse.value=i.texture,this.materialCopy.needsUpdate=!0,this.renderPass(e,this.materialCopy,null)),e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const s=e.autoClear;e.autoClear=!1,this.saoMaterial.uniforms.bias.value=this.params.saoBias,this.saoMaterial.uniforms.intensity.value=this.params.saoIntensity,this.saoMaterial.uniforms.scale.value=this.params.saoScale,this.saoMaterial.uniforms.kernelRadius.value=this.params.saoKernelRadius,this.saoMaterial.uniforms.minResolution.value=this.params.saoMinResolution,this.saoMaterial.uniforms.cameraNear.value=this.camera.near,this.saoMaterial.uniforms.cameraFar.value=this.camera.far;const r=this.params.saoBlurDepthCutoff*(this.camera.far-this.camera.near);this.vBlurMaterial.uniforms.depthCutoff.value=r,this.hBlurMaterial.uniforms.depthCutoff.value=r,this.vBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.vBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.hBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.hBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.params.saoBlurRadius=Math.floor(this.params.saoBlurRadius),(this.prevStdDev!==this.params.saoBlurStdDev||this.prevNumSamples!==this.params.saoBlurRadius)&&(Ea.configure(this.vBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new _e(0,1)),Ea.configure(this.hBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new _e(1,0)),this.prevStdDev=this.params.saoBlurStdDev,this.prevNumSamples=this.params.saoBlurRadius),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.renderPass(e,this.saoMaterial,this.saoRenderTarget,16777215,1),this.params.saoBlur&&(this.renderPass(e,this.vBlurMaterial,this.blurIntermediateRenderTarget,16777215,1),this.renderPass(e,this.hBlurMaterial,this.saoRenderTarget,16777215,1));const o=this.materialCopy;this.params.output===lo.OUTPUT.Normal?(this.materialCopy.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.materialCopy.needsUpdate=!0):(this.materialCopy.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.materialCopy.needsUpdate=!0),this.params.output===lo.OUTPUT.Default?o.blending=gc:o.blending=Nt,this.renderPass(e,o,this.renderToScreen?null:i),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=s}renderPass(e,t,i,s,r){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,i,s,r){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.saoRenderTarget.setSize(e,t),this.blurIntermediateRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.saoMaterial.uniforms.size.value.set(e,t),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.needsUpdate=!0,this.vBlurMaterial.uniforms.size.value.set(e,t),this.vBlurMaterial.needsUpdate=!0,this.hBlurMaterial.uniforms.size.value.set(e,t),this.hBlurMaterial.needsUpdate=!0}dispose(){this.saoRenderTarget.dispose(),this.blurIntermediateRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.normalMaterial.dispose(),this.saoMaterial.dispose(),this.vBlurMaterial.dispose(),this.hBlurMaterial.dispose(),this.materialCopy.dispose(),this.fsQuad.dispose()}}lo.OUTPUT={Default:0,SAO:1,Normal:2};const RE={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new _e(1/1024,1/512)}},vertexShader:`

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
	`},Ta=class Ta{constructor(){ce(this,"translateX");ce(this,"translateY");ce(this,"translateZ");ce(this,"translateFree");ce(this,"scaleX");ce(this,"scaleY");ce(this,"scaleZ");ce(this,"scaleFree");ce(this,"rotateX");ce(this,"rotateY");ce(this,"rotateZ");ce(this,"rotateFree");ce(this,"rotateCover");ce(this,"scene",new _t);ce(this,"selectedObjects",[]);ce(this,"camera");ce(this,"rotateMaterialX");ce(this,"rotateMaterialY");ce(this,"rotateMaterialZ");ce(this,"update",e=>{this.camera=e,Y.currentMode!=="object"&&(this.selectedObjects=[]);let t=e.position.distanceTo(this.scene.position);t<35&&(t=35),this.scene.scale.x=t/35,this.scene.scale.y=t/35,this.scene.scale.z=t/35,Y.multipleSelections=this.selectedObjects.length>1,this.selectedObjects.length>0?(Y.selectedObject=this.selectedObjects[this.selectedObjects.length-1],this.scene.position.set(0,0,0),this.selectedObjects.forEach(i=>{this.scene.position.add(i.position)}),this.scene.position.divideScalar(this.selectedObjects.length),this.setVisible(!0)):(this.setVisible(!1),Y.selectedObject=void 0),this.rotateMaterialX&&(this.rotateMaterialX.uniforms.p.value=this.scene.position),this.rotateMaterialY&&(this.rotateMaterialY.uniforms.p.value=this.scene.position),this.rotateMaterialZ&&(this.rotateMaterialZ.uniforms.p.value=this.scene.position)});ce(this,"setVisible",e=>{this.scene.userData.visible=e,Y.objectModeState==="move"&&Y.currentMode==="object"?this.scene.traverse(t=>{t.visible=e&&[this.translateX,this.translateY,this.translateZ,this.translateFree].includes(t),t.draggable=t.visible,t.disableMouseEvents=!t.visible}):Y.objectModeState==="scale"&&Y.currentMode==="object"?this.scene.traverse(t=>{t.visible=e&&[this.scaleX,this.scaleY,this.scaleZ,this.scaleFree].includes(t),t.draggable=t.visible,t.disableMouseEvents=!t.visible}):Y.objectModeState==="rotate"&&Y.currentMode==="object"?this.scene.traverse(t=>{t.visible=e&&[this.rotateX,this.rotateY,this.rotateZ,this.rotateFree].includes(t),t.draggable=t.visible,t.disableMouseEvents=!t.visible}):(this.scene.traverse(t=>{t.visible=!1,t.draggable=!1,t.disableMouseEvents=!0}),this.scene.userData.visible=!1)});const e=new Wb;e.load("/mesh/translate_mesh.glb",t=>{var s,r,o;[...t.scene.children].forEach(a=>{let l=a;l.isMesh&&(l=kn.fromMesh(l),l.draggable=!1,l.internal=!0,l.geometry.computeBoundingBox()),l.name==="X"?(this.translateX=l,this.scene.add(l)):l.name==="Y"?(this.translateY=l,this.scene.add(l)):l.name==="Z"?(this.translateZ=l,this.scene.add(l)):l.name==="Free"&&(this.translateFree=l,this.scene.add(l))}),(s=this.translateX)==null||s.addDragListener(a=>{Y.objectModeState!=="move"||Y.currentMode!=="object"||this.selectedObjects.forEach(l=>{a.isFirstMovement&&(l.userData.position=l.position.clone());let c=a.movement3dXZ.x-a.movement3dOriginXZ.x;l.userData.position.x+=c,Y.snapActive?l.position.x=Math.round(l.userData.position.x/10)*10:l.position.x=l.userData.position.x})}),(r=this.translateY)==null||r.addDragListener(a=>{Y.objectModeState!=="move"||Y.currentMode!=="object"||this.selectedObjects.forEach(l=>{a.isFirstMovement&&(l.userData.position=l.position.clone());let c=a.movement3dY.y-a.movement3dOriginY.y;l.userData.position.y+=c,Y.snapActive?l.position.y=Math.round(l.userData.position.y/10)*10:l.position.y=l.userData.position.y})}),(o=this.translateZ)==null||o.addDragListener(a=>{Y.objectModeState!=="move"||Y.currentMode!=="object"||this.selectedObjects.forEach(l=>{a.isFirstMovement&&(l.userData.position=l.position.clone());let c=a.movement3dXZ.z-a.movement3dOriginXZ.z;l.userData.position.z+=c,Y.snapActive?l.position.z=Math.round(l.userData.position.z/10)*10:l.position.z=l.userData.position.z})})},()=>{},console.error),e.load("/mesh/scale_mesh.glb",t=>{var s,r,o;[...t.scene.children].forEach(a=>{let l=a;l.isMesh&&(l=kn.fromMesh(l),l.draggable=!1,l.internal=!0,l.geometry.computeBoundingBox()),l.name==="X"?(this.scaleX=l,this.scene.add(l)):l.name==="Y"?(this.scaleY=l,this.scene.add(l)):l.name==="Z"?(this.scaleZ=l,this.scene.add(l)):l.name==="Free"&&(this.scaleFree=l,this.scene.add(l))}),(s=this.scaleX)==null||s.addDragListener(a=>{Y.objectModeState!=="scale"||Y.currentMode!=="object"||this.selectedObjects.forEach(l=>{a.isFirstMovement&&(l.userData.scale=l.scale.clone());let c=a.movement3dXZ.x-a.movement3dOriginXZ.x;l.userData.scale.x+=c/2,Y.snapActive?l.scale.x=Math.round(l.userData.scale.x/2.5)*2.5:l.scale.x=l.userData.scale.x,l.scale.x=Math.max(l.scale.x,1)})}),(r=this.scaleY)==null||r.addDragListener(a=>{Y.objectModeState!=="scale"||Y.currentMode!=="object"||this.selectedObjects.forEach(l=>{a.isFirstMovement&&(l.userData.scale=l.scale.clone());let c=a.movement3dY.y-a.movement3dOriginY.y;l.userData.scale.y+=c/2,Y.snapActive?l.scale.y=Math.round(l.userData.scale.y/2.5)*2.5:l.scale.y=l.userData.scale.y,l.scale.y=Math.max(l.scale.y,1)})}),(o=this.scaleZ)==null||o.addDragListener(a=>{Y.objectModeState!=="scale"||Y.currentMode!=="object"||this.selectedObjects.forEach(l=>{a.isFirstMovement&&(l.userData.scale=l.scale.clone());let c=a.movement3dXZ.z-a.movement3dOriginXZ.z;l.userData.scale.z-=c/2,Y.snapActive?l.scale.z=Math.round(l.userData.scale.z/2.5)*2.5:l.scale.z=l.userData.scale.z,l.scale.z=Math.max(l.scale.z,1)})})},()=>{},console.error),e.load("/mesh/rotate_mesh.glb",t=>{var r,o,a;const i=[...t.scene.children],s=l=>new Et({vertexShader:`
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
                    `,uniforms:{color:{value:l},p:{value:new P(0)}}});this.rotateMaterialX=s(new Ae("#E70200")),this.rotateMaterialY=s(new Ae("#30E700")),this.rotateMaterialZ=s(new Ae("#1500E7")),i.forEach(l=>{let c=l;c.isMesh&&(c=kn.fromMesh(c),c.draggable=!1,c.internal=!0,c.geometry.computeBoundingBox()),c.name==="X"?(c.material=this.rotateMaterialX,this.rotateX=c,this.scene.add(c)):c.name==="Y"?(c.material=this.rotateMaterialY,this.rotateY=c,this.scene.add(c)):c.name==="Z"?(c.material=this.rotateMaterialZ,this.rotateZ=c,this.scene.add(c)):c.name==="Free"&&(this.rotateFree=c,c.material.side=ln)}),(r=this.rotateX)==null||r.addDragListener(l=>{Y.objectModeState!=="rotate"||Y.currentMode!=="object"||this.selectedObjects.forEach(c=>{l.isFirstMovement&&(c.userData.rotation=c.rotation.clone(),c.userData.prevAngleX=Math.atan2(l.movement3dOriginY.z,l.movement3dOriginY.y));const u=Math.atan2(l.movement3dY.z,l.movement3dY.y);let h=u-c.userData.prevAngleX;h>Math.PI?h-=2*Math.PI:h<-Math.PI&&(h+=2*Math.PI),c.userData.prevAngleX=u,c.userData.rotation.x+=h,Y.snapActive?c.rotation.x=Math.round(c.userData.rotation.x/(Math.PI/18))*(Math.PI/18):c.rotation.x=c.userData.rotation.x})}),(o=this.rotateY)==null||o.addDragListener(l=>{Y.objectModeState!=="rotate"||Y.currentMode!=="object"||this.selectedObjects.forEach(c=>{l.isFirstMovement&&(c.userData.rotation=c.rotation.clone(),c.userData.prevAngle=Math.atan2(l.movement3dOriginXZ.z,l.movement3dOriginXZ.x));const u=Math.atan2(l.movement3dXZ.z,l.movement3dXZ.x);let h=u-c.userData.prevAngle;h>Math.PI?h-=2*Math.PI:h<-Math.PI&&(h+=2*Math.PI),c.userData.prevAngle=u,c.userData.rotation.y-=h,Y.snapActive?c.rotation.y=Math.round(c.userData.rotation.y/(Math.PI/18))*(Math.PI/18):c.rotation.y=c.userData.rotation.y})}),(a=this.rotateZ)==null||a.addDragListener(l=>{Y.objectModeState!=="rotate"||Y.currentMode!=="object"||this.selectedObjects.forEach(c=>{l.isFirstMovement&&(c.userData.rotation=c.rotation.clone(),c.userData.prevAngleZ=Math.atan2(l.movement3dOriginY.y,l.movement3dOriginY.x));const u=Math.atan2(l.movement3dY.y,l.movement3dY.x);let h=u-c.userData.prevAngleZ;h>Math.PI?h-=2*Math.PI:h<-Math.PI&&(h+=2*Math.PI),c.userData.prevAngleZ=u,c.userData.rotation.z+=h,Y.snapActive?c.rotation.z=Math.round(c.userData.rotation.z/(Math.PI/18))*(Math.PI/18):c.rotation.z=c.userData.rotation.z})})},()=>{},console.error)}};ce(Ta,"INSTANCE",new Ta);let Je=Ta;const PE=Qt({methods:{mouseIn(n){this[n]=!0},mouseOut(n){this[n]=!1},addVoxelMesh(){var e,t,i,s;const n=new ir;n.draw(new P,"square",5,1),n.update(),(e=Y.renderingContext)==null||e.clickableObjects.push(n),(t=Y.renderingContext)==null||t.scene.add(n),Y.currentMode==="object"&&(n.select(),Je.INSTANCE.selectedObjects.push(n),(s=(i=Y.renderingContext)==null?void 0:i.outlinePass)!=null&&s.selectedObjects&&(Y.renderingContext.outlinePass.selectedObjects=Je.INSTANCE.selectedObjects)),this.mouseInAdd=!1},addVoxel(){var e,t,i,s;const n=new ir;n.draw(new P,"square",0,1),n.update(),(e=Y.renderingContext)==null||e.clickableObjects.push(n),(t=Y.renderingContext)==null||t.scene.add(n),Y.currentMode==="object"&&(n.select(),Je.INSTANCE.selectedObjects.push(n),(s=(i=Y.renderingContext)==null?void 0:i.outlinePass)!=null&&s.selectedObjects&&(Y.renderingContext.outlinePass.selectedObjects=Je.INSTANCE.selectedObjects)),this.mouseInAdd=!1}},data(){return{mouseInFile:!1,mouseInEdit:!1,mouseInAdd:!1,state:Y}}}),en=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},$a=n=>(xi("data-v-e1a3ff57"),n=n(),Mi(),n),IE={class:"top-section"},DE={class:"menu-bar"},LE={key:0,class:"menu-list"},NE=$a(()=>Z("div",{class:"menu-list-item"},"Open",-1)),OE=$a(()=>Z("div",{class:"menu-list-item"},"Save",-1)),UE=$a(()=>Z("div",{class:"menu-list-item"},"Import",-1)),FE=$a(()=>Z("div",{class:"menu-list-item"},"Export",-1)),BE=[NE,OE,UE,FE],zE={key:0,class:"menu-list"},kE={key:0,class:"menu-list"};function VE(n,e,t,i,s,r){return Ve(),rt("div",IE,[Z("div",DE,[Z("div",{onMouseenter:e[0]||(e[0]=o=>n.mouseIn("mouseInFile")),onMouseleave:e[1]||(e[1]=o=>n.mouseOut("mouseInFile")),class:"menu-item"},[Z("div",{class:zt("menu-item-button "+(n.mouseInFile?"menu-item-button-open":""))}," File ",2),n.mouseInFile?(Ve(),rt("div",LE,BE)):yt("",!0)],32),Z("div",{onMouseenter:e[4]||(e[4]=o=>n.mouseIn("mouseInEdit")),onMouseleave:e[5]||(e[5]=o=>n.mouseOut("mouseInEdit")),class:"menu-item"},[Z("div",{class:zt("menu-item-button "+(n.mouseInEdit?"menu-item-button-open":""))}," Edit ",2),n.mouseInEdit?(Ve(),rt("div",zE,[Z("div",{onClick:e[2]||(e[2]=o=>{var a;(a=n.state.renderingContext)==null||a.copy(),n.mouseInEdit=!1}),class:"menu-list-item"},"Copy (Ctrl + C)"),Z("div",{onClick:e[3]||(e[3]=o=>{var a;(a=n.state.renderingContext)==null||a.paste(),n.mouseInEdit=!1}),class:"menu-list-item"},"Paste (Ctrl + v)")])):yt("",!0)],32),Z("div",{onMouseenter:e[8]||(e[8]=o=>n.mouseIn("mouseInAdd")),onMouseleave:e[9]||(e[9]=o=>n.mouseOut("mouseInAdd")),class:"menu-item"},[Z("div",{class:zt("menu-item-button "+(n.mouseInAdd?"menu-item-button-open":""))}," Add ",2),n.mouseInAdd?(Ve(),rt("div",kE,[Z("div",{onClick:e[6]||(e[6]=(...o)=>n.addVoxelMesh&&n.addVoxelMesh(...o)),class:"menu-list-item"},"Voxel Mesh"),Z("div",{onClick:e[7]||(e[7]=(...o)=>n.addVoxel&&n.addVoxel(...o)),class:"menu-list-item"},"Voxel")])):yt("",!0)],32)])])}const HE=en(PE,[["render",VE],["__scopeId","data-v-e1a3ff57"]]),nh=Qt({props:{defaultCollapsed:Boolean,item:_t,level:Number,index:Number},mounted(){this.interval=setInterval(()=>{this.$forceUpdate()},100)},unmounted(){clearInterval(this.interval)},methods:{checkChange(n,e,t,i){var r,o,a;let s;if(t?(r=window.renderingContext)==null||r.scene.traverse(l=>{l.id===n.id&&(s=l)}):s=n,!!s){if(i&&!this.isItemInternal(s)&&(s.visible=!s.visible),s.isMeshObject&&!this.isItemInternal(s)&&e.target.checked&&!s.selected&&!i&&(s.select(),Je.INSTANCE.selectedObjects.push(s),(o=Y.renderingContext)!=null&&o.outlinePass&&(Y.renderingContext.outlinePass.selectedObjects=Je.INSTANCE.selectedObjects)),s.isMeshObject&&!this.isItemInternal(s)&&!e.target.checked&&s.selected&&!i){s.unselect();let l=Je.INSTANCE.selectedObjects.indexOf(s);l!==-1&&(Je.INSTANCE.selectedObjects.splice(l,1),(a=Y.renderingContext)!=null&&a.outlinePass&&(Y.renderingContext.outlinePass.selectedObjects=Je.INSTANCE.selectedObjects))}s&&s.children.forEach(l=>{this.checkChange(l,e,!1,i)})}},itemHasChildren(n){return n?Y.treeShowInternal?n.children.length>0:((n==null?void 0:n.children.filter(e=>e.isMeshObject).length)||0)>0:!1},areAllChildrenSelected(n){if(!n)return!1;let e=0;for(const t of n.children)if(t instanceof kn&&!this.isItemInternal(t)&&(e++,!t.selected))return!1;return e>0},isItemInternal(n){return n?(!n.isMeshObject||n.internal)&&!n.userData.isRootScene:!0}},setup(n){const e=Pg(null);return{hoverIndex:e,onMouseOver:s=>{e.value=s},onMouseLeave:()=>{e.value=null},interval:0,collapsed:n.defaultCollapsed}},data(){return{state:Y}}}),If=()=>{ka(n=>({"19cb90bd":`calc(100% - ${(n.level||0)*16}px)`}))},Df=nh.setup;nh.setup=Df?(n,e)=>(If(),Df(n,e)):If;const GE={class:"item"},WE={style:{"margin-left":"4px"}},jE={class:"title-right"},XE=["disabled","checked"];function $E(n,e,t,i,s,r){var a,l,c,u,h,d,f;const o=Lt("SceneTreeItem",!0);return Ve(),rt("div",GE,[Z("div",{style:Ut(`transform: translateX(${(n.level||0)*16}px);width:100%`)},[Z("div",{class:zt(["title",{hovered:n.hoverIndex===n.index}]),onMouseover:e[3]||(e[3]=g=>n.onMouseOver(n.index)),onMouseleave:e[4]||(e[4]=(...g)=>n.onMouseLeave&&n.onMouseLeave(...g))},[Z("div",{onClick:e[0]||(e[0]=g=>{n.collapsed=!n.collapsed}),class:"title-left"},[Z("i",{class:zt({"bi bi-caret-down-fill":!n.collapsed,"bi bi-caret-right-fill":n.collapsed}),style:Ut(`display: ${n.itemHasChildren(n.item)?"block":"none"}`)},null,6),Z("div",WE,wn(((a=n.item)==null?void 0:a.name)||((l=n.item)==null?void 0:l.constructor.name)+`<#${(c=n.item)==null?void 0:c.id}>`),1)]),Z("div",jE,[n.isItemInternal(n.item)?yt("",!0):(Ve(),rt("i",{key:0,onClick:e[1]||(e[1]=g=>n.checkChange(n.item,g,!0,!0)),class:zt({"bi bi-eye-fill":(u=n.item)==null?void 0:u.visible,"bi bi-eye-slash-fill":!((h=n.item)!=null&&h.visible)})},null,2)),Z("input",{disabled:n.state.currentMode!=="object"||n.isItemInternal(n.item),onChange:e[2]||(e[2]=g=>n.checkChange(n.item,g,!0,!1)),type:"checkbox",checked:((d=n.item)==null?void 0:d.selected)||n.areAllChildrenSelected(n.item)},null,40,XE)])],34),n.collapsed?yt("",!0):(Ve(!0),rt(Ot,{key:0},oc((f=n.item)==null?void 0:f.children,(g,x)=>(Ve(),rt("div",{key:g.id||x,style:{width:"100%"}},[!n.isItemInternal(g)||n.state.treeShowInternal?(Ve(),rn(o,{key:0,defaultCollapsed:!1,item:g,level:(n.level||0)+1,index:x},null,8,["item","level","index"])):yt("",!0)]))),128))],4)])}const YE=en(nh,[["render",$E],["__scopeId","data-v-ac5faa3f"]]),KE=Qt({components:{SceneTreeItem:YE},data(){return{state:Y}}}),qE=n=>(xi("data-v-3c6d7e44"),n=n(),Mi(),n),ZE={class:"scene-tree-browser"},JE={class:"scene-tree-options"},QE=qE(()=>Z("h5",null,"Show internal",-1)),eT={class:"scene-tree-list"};function tT(n,e,t,i,s,r){var a,l;const o=Lt("SceneTreeItem");return Ve(),rt("div",ZE,[Z("div",JE,[QE,Z("input",{onChange:e[0]||(e[0]=c=>n.state.treeShowInternal=c.target.checked),type:"checkbox"},null,32)]),Z("div",eT,[Le(o,{"default-collapsed":!1,item:(l=(a=n.state)==null?void 0:a.renderingContext)==null?void 0:l.scene,level:0,index:0},null,8,["item"])])])}const nT=en(KE,[["render",tT],["__scopeId","data-v-3c6d7e44"]]),iT=Qt({props:{unit:String,value:Number},emits:{changeValue:n=>{}},methods:{changeCallback(n){this.$emit("changeValue",+n.target.value)},focus(){this.focused=!0},unFocus(){this.focused=!1},click(){const n=this.$el.querySelector("input");this.focused||(n.focus(),n.select())}},data(){return{focused:!1}}}),sT=["value"],rT={class:"number-input-icon"};function oT(n,e,t,i,s,r){return Ve(),rt("div",{onClick:e[3]||(e[3]=(...o)=>n.click&&n.click(...o)),class:"number-input"},[Z("input",{onFocusin:e[0]||(e[0]=()=>{}),onFocusout:e[1]||(e[1]=()=>{}),onKeyup:e[2]||(e[2]=(...o)=>n.changeCallback&&n.changeCallback(...o)),value:n.value||0,style:{"margin-left":"4px"},type:"number"},null,40,sT),Z("div",rT,wn(n.unit),1)])}const Fm=en(iT,[["render",oT],["__scopeId","data-v-ce353066"]]),aT=Qt({components:{NumberInput:Fm},props:{xp:Number,yp:Number,zp:Number},emits:{changeValue:n=>{}},methods:{xc(n){this.x=n,this.$emit("changeValue",new P(this.x,this.y,this.z))},yc(n){this.y=n,this.$emit("changeValue",new P(this.x,this.y,this.z))},zc(n){this.z=n,this.$emit("changeValue",new P(this.x,this.y,this.z))}},data(){return{x:0,y:0,z:0}}}),ih=n=>(xi("data-v-2459f16c"),n=n(),Mi(),n),lT={class:"container"},cT=ih(()=>Z("h5",null,"X:",-1)),uT={class:"container"},hT=ih(()=>Z("h5",null,"Y:",-1)),dT={class:"container"},fT=ih(()=>Z("h5",null,"Z:",-1));function pT(n,e,t,i,s,r){const o=Lt("NumberInput");return Ve(),rt(Ot,null,[Z("div",lT,[cT,Le(o,{onChangeValue:n.xc,unit:"m",value:n.xp},null,8,["onChangeValue","value"])]),Z("div",uT,[hT,Le(o,{onChangeValue:n.yc,unit:"m",value:n.yp},null,8,["onChangeValue","value"])]),Z("div",dT,[fT,Le(o,{onChangeValue:n.zc,unit:"m",value:n.zp},null,8,["onChangeValue","value"])])],64)}const mT=en(aT,[["render",pT],["__scopeId","data-v-2459f16c"]]),gT=Qt({components:{NumberInput:Fm,Vector3Input:mT},methods:{marchCubes(n){Y.selectedObject instanceof ir&&(Y.selectedObject.marchCubes=n.target.checked,Y.selectedObject.update())},smoothNormals(n){Y.selectedObject instanceof ir&&(Y.selectedObject.smoothNormals=n.target.checked,Y.selectedObject.update())},smoothGeometry(n){Y.selectedObject instanceof ir&&(Y.selectedObject.smoothGeometry=n.target.checked,Y.selectedObject.update())},positionChange(n){Y.selectedObject&&Y.selectedObject.position.copy(n)},scaleChange(n){Y.selectedObject&&Y.selectedObject.scale.copy(n)},rotationChange(n){Y.selectedObject&&(Y.selectedObject.rotation.x=n.x,Y.selectedObject.rotation.y=n.y,Y.selectedObject.rotation.z=n.z)},collapse(n){const e=this.$refs[n];this[n+"Open"]?e.style.maxHeight="0px":e.style.maxHeight=e.scrollHeight+"px",this[n+"Open"]=!this[n+"Open"]}},mounted(){this.interval=setInterval(()=>{this.$forceUpdate()},50)},unmounted(){clearInterval(this.interval)},updated(){["position","scale","rotation","voxel"].forEach(n=>{const e=this.$refs[n];e&&e.style&&this[n+"Open"]&&(e.style.maxHeight=e.scrollHeight+"px")})},data(){return{state:Y,interval:0,positionOpen:!0,scaleOpen:!0,rotationOpen:!0,voxelOpen:!0}}}),Qi=n=>(xi("data-v-be1a8074"),n=n(),Mi(),n),_T={key:0,class:"object-options-list"},vT={key:1,class:"object-options-list"},xT=Qi(()=>Z("h5",{style:{"margin-left":"8px"}},"Position",-1)),MT=Qi(()=>Z("h5",{style:{"margin-left":"8px"}},"Scale",-1)),yT=Qi(()=>Z("h5",{style:{"margin-left":"8px"}},"Rotation",-1)),ST=Qi(()=>Z("h5",{style:{"margin-left":"8px"}},"Voxel mesh",-1)),bT={key:0,class:"object-option"},ET=Qi(()=>Z("h5",null,"March cubes",-1)),TT=["checked"],AT={key:1,class:"object-option"},wT=Qi(()=>Z("h5",null,"Smooth normals",-1)),CT=["checked"],RT={key:2,class:"object-option"},PT=Qi(()=>Z("h5",null,"Smooth",-1)),IT=["checked"],DT={key:2,class:"object-options-list"},LT=Qi(()=>Z("div",{class:"object-option-group-title",style:{"text-align":"left"}},[Z("h5")],-1));function NT(n,e,t,i,s,r){var a;const o=Lt("Vector3Input");return Ve(),rt(Ot,null,[n.state.multipleSelections?(Ve(),rt("div",_T," Multiple - "+wn((a=n.state.selectedObject)==null?void 0:a.constructor.name),1)):n.state.selectedObject?(Ve(),rt("div",vT,[qn(wn(n.state.selectedObject.constructor.name)+" ",1),Z("div",{onClick:e[0]||(e[0]=l=>n.collapse("position")),class:"object-option-group-title",style:{"text-align":"left"}},[Z("i",{class:zt({"bi bi-caret-down-fill":n.positionOpen,"bi bi-caret-right-fill":!n.positionOpen})},null,2),xT]),Z("div",{class:zt(["object-option-group",{collapse:!n.positionOpen}]),ref:"position"},[Le(o,{xp:n.state.selectedObject.position.x||0,yp:n.state.selectedObject.position.y||0,zp:n.state.selectedObject.position.z||0,onChangeValue:n.positionChange},null,8,["xp","yp","zp","onChangeValue"])],2),Z("div",{onClick:e[1]||(e[1]=l=>n.collapse("scale")),class:"object-option-group-title",style:{"text-align":"left"}},[Z("i",{class:zt({"bi bi-caret-down-fill":n.scaleOpen,"bi bi-caret-right-fill":!n.scaleOpen})},null,2),MT]),Z("div",{class:zt(["object-option-group",{collapse:!n.scaleOpen}]),ref:"scale"},[Le(o,{xp:n.state.selectedObject.scale.x||0,yp:n.state.selectedObject.scale.y||0,zp:n.state.selectedObject.scale.z||0,onChangeValue:n.scaleChange},null,8,["xp","yp","zp","onChangeValue"])],2),Z("div",{onClick:e[2]||(e[2]=l=>n.collapse("rotation")),class:"object-option-group-title",style:{"text-align":"left"}},[Z("i",{class:zt({"bi bi-caret-down-fill":n.rotationOpen,"bi bi-caret-right-fill":!n.rotationOpen})},null,2),yT]),Z("div",{class:zt(["object-option-group",{collapse:!n.rotationOpen}]),ref:"rotation"},[Le(o,{xp:n.state.selectedObject.rotation.x||0,yp:n.state.selectedObject.rotation.y||0,zp:n.state.selectedObject.rotation.z||0,onChangeValue:n.rotationChange},null,8,["xp","yp","zp","onChangeValue"])],2),Z("div",{onClick:e[3]||(e[3]=l=>n.collapse("voxel")),class:"object-option-group-title",style:{"text-align":"left"}},[Z("i",{class:zt({"bi bi-caret-down-fill":n.voxelOpen,"bi bi-caret-right-fill":!n.voxelOpen})},null,2),ST]),Z("div",{class:zt(["object-option-group",{collapse:!n.voxelOpen}]),ref:"voxel"},[n.state.selectedObject.constructor.name==="VoxelMesh"?(Ve(),rt("div",bT,[ET,Z("input",{onChange:e[4]||(e[4]=(...l)=>n.marchCubes&&n.marchCubes(...l)),checked:n.state.selectedObject.marchCubes,type:"checkbox"},null,40,TT)])):yt("",!0),n.state.selectedObject.marchCubes&&!n.state.selectedObject.smoothGeometry?(Ve(),rt("div",AT,[wT,Z("input",{onChange:e[5]||(e[5]=(...l)=>n.smoothNormals&&n.smoothNormals(...l)),checked:n.state.selectedObject.smoothNormals,type:"checkbox"},null,40,CT)])):yt("",!0),n.state.selectedObject.marchCubes?(Ve(),rt("div",RT,[PT,Z("input",{onChange:e[6]||(e[6]=(...l)=>n.smoothGeometry&&n.smoothGeometry(...l)),checked:n.state.selectedObject.smoothGeometry,type:"checkbox"},null,40,IT)])):yt("",!0)],2)])):(Ve(),rt("div",DT," No object selected ")),LT],64)}const OT=en(gT,[["render",NT],["__scopeId","data-v-be1a8074"]]),UT={name:"splitpanes",emits:["ready","resize","resized","pane-click","pane-maximize","pane-add","pane-remove","splitter-click"],props:{horizontal:{type:Boolean},pushOtherPanes:{type:Boolean,default:!0},dblClickSplitter:{type:Boolean,default:!0},rtl:{type:Boolean,default:!1},firstSplitter:{type:Boolean}},provide(){return{requestUpdate:this.requestUpdate,onPaneAdd:this.onPaneAdd,onPaneRemove:this.onPaneRemove,onPaneClick:this.onPaneClick}},data:()=>({container:null,ready:!1,panes:[],touch:{mouseDown:!1,dragging:!1,activeSplitter:null},splitterTaps:{splitter:null,timeoutId:null}}),computed:{panesCount(){return this.panes.length},indexedPanes(){return this.panes.reduce((n,e)=>(n[e.id]=e)&&n,{})}},methods:{updatePaneComponents(){this.panes.forEach(n=>{n.update&&n.update({[this.horizontal?"height":"width"]:`${this.indexedPanes[n.id].size}%`})})},bindEvents(){document.addEventListener("mousemove",this.onMouseMove,{passive:!1}),document.addEventListener("mouseup",this.onMouseUp),"ontouchstart"in window&&(document.addEventListener("touchmove",this.onMouseMove,{passive:!1}),document.addEventListener("touchend",this.onMouseUp))},unbindEvents(){document.removeEventListener("mousemove",this.onMouseMove,{passive:!1}),document.removeEventListener("mouseup",this.onMouseUp),"ontouchstart"in window&&(document.removeEventListener("touchmove",this.onMouseMove,{passive:!1}),document.removeEventListener("touchend",this.onMouseUp))},onMouseDown(n,e){this.bindEvents(),this.touch.mouseDown=!0,this.touch.activeSplitter=e},onMouseMove(n){this.touch.mouseDown&&(n.preventDefault(),this.touch.dragging=!0,this.calculatePanesSize(this.getCurrentMouseDrag(n)),this.$emit("resize",this.panes.map(e=>({min:e.min,max:e.max,size:e.size}))))},onMouseUp(){this.touch.dragging&&this.$emit("resized",this.panes.map(n=>({min:n.min,max:n.max,size:n.size}))),this.touch.mouseDown=!1,setTimeout(()=>{this.touch.dragging=!1,this.unbindEvents()},100)},onSplitterClick(n,e){"ontouchstart"in window&&(n.preventDefault(),this.dblClickSplitter&&(this.splitterTaps.splitter===e?(clearTimeout(this.splitterTaps.timeoutId),this.splitterTaps.timeoutId=null,this.onSplitterDblClick(n,e),this.splitterTaps.splitter=null):(this.splitterTaps.splitter=e,this.splitterTaps.timeoutId=setTimeout(()=>{this.splitterTaps.splitter=null},500)))),this.touch.dragging||this.$emit("splitter-click",this.panes[e])},onSplitterDblClick(n,e){let t=0;this.panes=this.panes.map((i,s)=>(i.size=s===e?i.max:i.min,s!==e&&(t+=i.min),i)),this.panes[e].size-=t,this.$emit("pane-maximize",this.panes[e]),this.$emit("resized",this.panes.map(i=>({min:i.min,max:i.max,size:i.size})))},onPaneClick(n,e){this.$emit("pane-click",this.indexedPanes[e])},getCurrentMouseDrag(n){const e=this.container.getBoundingClientRect(),{clientX:t,clientY:i}="ontouchstart"in window&&n.touches?n.touches[0]:n;return{x:t-e.left,y:i-e.top}},getCurrentDragPercentage(n){n=n[this.horizontal?"y":"x"];const e=this.container[this.horizontal?"clientHeight":"clientWidth"];return this.rtl&&!this.horizontal&&(n=e-n),n*100/e},calculatePanesSize(n){const e=this.touch.activeSplitter;let t={prevPanesSize:this.sumPrevPanesSize(e),nextPanesSize:this.sumNextPanesSize(e),prevReachedMinPanes:0,nextReachedMinPanes:0};const i=0+(this.pushOtherPanes?0:t.prevPanesSize),s=100-(this.pushOtherPanes?0:t.nextPanesSize),r=Math.max(Math.min(this.getCurrentDragPercentage(n),s),i);let o=[e,e+1],a=this.panes[o[0]]||null,l=this.panes[o[1]]||null;const c=a.max<100&&r>=a.max+t.prevPanesSize,u=l.max<100&&r<=100-(l.max+this.sumNextPanesSize(e+1));if(c||u){c?(a.size=a.max,l.size=Math.max(100-a.max-t.prevPanesSize-t.nextPanesSize,0)):(a.size=Math.max(100-l.max-t.prevPanesSize-this.sumNextPanesSize(e+1),0),l.size=l.max);return}if(this.pushOtherPanes){const h=this.doPushOtherPanes(t,r);if(!h)return;({sums:t,panesToResize:o}=h),a=this.panes[o[0]]||null,l=this.panes[o[1]]||null}a!==null&&(a.size=Math.min(Math.max(r-t.prevPanesSize-t.prevReachedMinPanes,a.min),a.max)),l!==null&&(l.size=Math.min(Math.max(100-r-t.nextPanesSize-t.nextReachedMinPanes,l.min),l.max))},doPushOtherPanes(n,e){const t=this.touch.activeSplitter,i=[t,t+1];return e<n.prevPanesSize+this.panes[i[0]].min&&(i[0]=this.findPrevExpandedPane(t).index,n.prevReachedMinPanes=0,i[0]<t&&this.panes.forEach((s,r)=>{r>i[0]&&r<=t&&(s.size=s.min,n.prevReachedMinPanes+=s.min)}),n.prevPanesSize=this.sumPrevPanesSize(i[0]),i[0]===void 0)?(n.prevReachedMinPanes=0,this.panes[0].size=this.panes[0].min,this.panes.forEach((s,r)=>{r>0&&r<=t&&(s.size=s.min,n.prevReachedMinPanes+=s.min)}),this.panes[i[1]].size=100-n.prevReachedMinPanes-this.panes[0].min-n.prevPanesSize-n.nextPanesSize,null):e>100-n.nextPanesSize-this.panes[i[1]].min&&(i[1]=this.findNextExpandedPane(t).index,n.nextReachedMinPanes=0,i[1]>t+1&&this.panes.forEach((s,r)=>{r>t&&r<i[1]&&(s.size=s.min,n.nextReachedMinPanes+=s.min)}),n.nextPanesSize=this.sumNextPanesSize(i[1]-1),i[1]===void 0)?(n.nextReachedMinPanes=0,this.panes[this.panesCount-1].size=this.panes[this.panesCount-1].min,this.panes.forEach((s,r)=>{r<this.panesCount-1&&r>=t+1&&(s.size=s.min,n.nextReachedMinPanes+=s.min)}),this.panes[i[0]].size=100-n.prevPanesSize-n.nextReachedMinPanes-this.panes[this.panesCount-1].min-n.nextPanesSize,null):{sums:n,panesToResize:i}},sumPrevPanesSize(n){return this.panes.reduce((e,t,i)=>e+(i<n?t.size:0),0)},sumNextPanesSize(n){return this.panes.reduce((e,t,i)=>e+(i>n+1?t.size:0),0)},findPrevExpandedPane(n){return[...this.panes].reverse().find(e=>e.index<n&&e.size>e.min)||{}},findNextExpandedPane(n){return this.panes.find(e=>e.index>n+1&&e.size>e.min)||{}},checkSplitpanesNodes(){Array.from(this.container.children).forEach(n=>{const e=n.classList.contains("splitpanes__pane"),t=n.classList.contains("splitpanes__splitter");!e&&!t&&(n.parentNode.removeChild(n),console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."))})},addSplitter(n,e,t=!1){const i=n-1,s=document.createElement("div");s.classList.add("splitpanes__splitter"),t||(s.onmousedown=r=>this.onMouseDown(r,i),typeof window<"u"&&"ontouchstart"in window&&(s.ontouchstart=r=>this.onMouseDown(r,i)),s.onclick=r=>this.onSplitterClick(r,i+1)),this.dblClickSplitter&&(s.ondblclick=r=>this.onSplitterDblClick(r,i+1)),e.parentNode.insertBefore(s,e)},removeSplitter(n){n.onmousedown=void 0,n.onclick=void 0,n.ondblclick=void 0,n.parentNode.removeChild(n)},redoSplitters(){const n=Array.from(this.container.children);n.forEach(t=>{t.className.includes("splitpanes__splitter")&&this.removeSplitter(t)});let e=0;n.forEach(t=>{t.className.includes("splitpanes__pane")&&(!e&&this.firstSplitter?this.addSplitter(e,t,!0):e&&this.addSplitter(e,t),e++)})},requestUpdate({target:n,...e}){const t=this.indexedPanes[n._.uid];Object.entries(e).forEach(([i,s])=>t[i]=s)},onPaneAdd(n){let e=-1;Array.from(n.$el.parentNode.children).some(s=>(s.className.includes("splitpanes__pane")&&e++,s===n.$el));const t=parseFloat(n.minSize),i=parseFloat(n.maxSize);this.panes.splice(e,0,{id:n._.uid,index:e,min:isNaN(t)?0:t,max:isNaN(i)?100:i,size:n.size===null?null:parseFloat(n.size),givenSize:n.size,update:n.update}),this.panes.forEach((s,r)=>s.index=r),this.ready&&this.$nextTick(()=>{this.redoSplitters(),this.resetPaneSizes({addedPane:this.panes[e]}),this.$emit("pane-add",{index:e,panes:this.panes.map(s=>({min:s.min,max:s.max,size:s.size}))})})},onPaneRemove(n){const e=this.panes.findIndex(i=>i.id===n._.uid),t=this.panes.splice(e,1)[0];this.panes.forEach((i,s)=>i.index=s),this.$nextTick(()=>{this.redoSplitters(),this.resetPaneSizes({removedPane:{...t,index:e}}),this.$emit("pane-remove",{removed:t,panes:this.panes.map(i=>({min:i.min,max:i.max,size:i.size}))})})},resetPaneSizes(n={}){!n.addedPane&&!n.removedPane?this.initialPanesSizing():this.panes.some(e=>e.givenSize!==null||e.min||e.max<100)?this.equalizeAfterAddOrRemove(n):this.equalize(),this.ready&&this.$emit("resized",this.panes.map(e=>({min:e.min,max:e.max,size:e.size})))},equalize(){const n=100/this.panesCount;let e=0;const t=[],i=[];this.panes.forEach(s=>{s.size=Math.max(Math.min(n,s.max),s.min),e-=s.size,s.size>=s.max&&t.push(s.id),s.size<=s.min&&i.push(s.id)}),e>.1&&this.readjustSizes(e,t,i)},initialPanesSizing(){let n=100;const e=[],t=[];let i=0;this.panes.forEach(r=>{n-=r.size,r.size!==null&&i++,r.size>=r.max&&e.push(r.id),r.size<=r.min&&t.push(r.id)});let s=100;n>.1&&(this.panes.forEach(r=>{r.size===null&&(r.size=Math.max(Math.min(n/(this.panesCount-i),r.max),r.min)),s-=r.size}),s>.1&&this.readjustSizes(n,e,t))},equalizeAfterAddOrRemove({addedPane:n,removedPane:e}={}){let t=100/this.panesCount,i=0;const s=[],r=[];n&&n.givenSize!==null&&(t=(100-n.givenSize)/(this.panesCount-1)),this.panes.forEach(o=>{i-=o.size,o.size>=o.max&&s.push(o.id),o.size<=o.min&&r.push(o.id)}),!(Math.abs(i)<.1)&&(this.panes.forEach(o=>{n&&n.givenSize!==null&&n.id===o.id||(o.size=Math.max(Math.min(t,o.max),o.min)),i-=o.size,o.size>=o.max&&s.push(o.id),o.size<=o.min&&r.push(o.id)}),i>.1&&this.readjustSizes(i,s,r))},readjustSizes(n,e,t){let i;n>0?i=n/(this.panesCount-e.length):i=n/(this.panesCount-t.length),this.panes.forEach((s,r)=>{if(n>0&&!e.includes(s.id)){const o=Math.max(Math.min(s.size+i,s.max),s.min),a=o-s.size;n-=a,s.size=o}else if(!t.includes(s.id)){const o=Math.max(Math.min(s.size+i,s.max),s.min),a=o-s.size;n-=a,s.size=o}s.update({[this.horizontal?"height":"width"]:`${this.indexedPanes[s.id].size}%`})}),Math.abs(n)>.1&&this.$nextTick(()=>{this.ready&&console.warn("Splitpanes: Could not resize panes correctly due to their constraints.")})}},watch:{panes:{deep:!0,immediate:!1,handler(){this.updatePaneComponents()}},horizontal(){this.updatePaneComponents()},firstSplitter(){this.redoSplitters()},dblClickSplitter(n){[...this.container.querySelectorAll(".splitpanes__splitter")].forEach((e,t)=>{e.ondblclick=n?i=>this.onSplitterDblClick(i,t):void 0})}},beforeUnmount(){this.ready=!1},mounted(){this.container=this.$refs.container,this.checkSplitpanesNodes(),this.redoSplitters(),this.resetPaneSizes(),this.$emit("ready"),this.ready=!0},render(){return Vp("div",{ref:"container",class:["splitpanes",`splitpanes--${this.horizontal?"horizontal":"vertical"}`,{"splitpanes--dragging":this.touch.dragging}]},this.$slots.default())}},FT=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},BT={name:"pane",inject:["requestUpdate","onPaneAdd","onPaneRemove","onPaneClick"],props:{size:{type:[Number,String],default:null},minSize:{type:[Number,String],default:0},maxSize:{type:[Number,String],default:100}},data:()=>({style:{}}),mounted(){this.onPaneAdd(this)},beforeUnmount(){this.onPaneRemove(this)},methods:{update(n){this.style=n}},computed:{sizeNumber(){return this.size||this.size===0?parseFloat(this.size):null},minSizeNumber(){return parseFloat(this.minSize)},maxSizeNumber(){return parseFloat(this.maxSize)}},watch:{sizeNumber(n){this.requestUpdate({target:this,size:n})},minSizeNumber(n){this.requestUpdate({target:this,min:n})},maxSizeNumber(n){this.requestUpdate({target:this,max:n})}}};function zT(n,e,t,i,s,r){return Ve(),rt("div",{class:"splitpanes__pane",onClick:e[0]||(e[0]=o=>r.onPaneClick(o,n._.uid)),style:Ut(n.style)},[Yt(n.$slots,"default")],4)}const kT=FT(BT,[["render",zT]]),VT=Qt({components:{SceneTree:nT,Splitpanes:UT,Pane:kT,ObjectProperties:OT},methods:{resized(){var n;this.panelHeight=((n=this.panel)==null?void 0:n.clientHeight)||0}},mounted(){this.panel=document.querySelector(".properties-panel"),this.observer=new ResizeObserver(this.resized),this.observer.observe(this.panel),this.resized()},unmounted(){var n;(n=this.observer)==null||n.disconnect()},data(){return{observer:void 0,panel:void 0,panelHeight:0}}}),HT={class:"properties-panel"};function GT(n,e,t,i,s,r){const o=Lt("SceneTree"),a=Lt("pane"),l=Lt("ObjectProperties"),c=Lt("splitpanes");return Ve(),rt("div",HT,[Le(c,{class:"default-theme",horizontal:"",style:Ut(`height: ${n.panelHeight+"px"}`)},{default:Zs(()=>[Le(a,{"min-size":"10"},{default:Zs(()=>[Le(o)]),_:1}),Le(a,{"min-size":"10"},{default:Zs(()=>[Le(l)]),_:1})]),_:1},8,["style"])])}const WT=en(VT,[["render",GT],["__scopeId","data-v-0530e74d"]]),jT=Qt({}),XT={class:"bottom-section"},$T=Bp('<div class="tree-browser" data-v-20ff719f></div><div class="visual-browser-container" data-v-20ff719f><div class="browser-tools" data-v-20ff719f><div class="browser-tools-add" data-v-20ff719f>Add +</div><div class="browser-tools-title" data-v-20ff719f>Material Browser</div><div class="browser-tools-search" data-v-20ff719f><input placeholder="Search" type="text" data-v-20ff719f><div class="browser-tools-search-icon" data-v-20ff719f><i class="bi bi-search" data-v-20ff719f></i></div></div></div><div class="visual-browser" data-v-20ff719f></div></div>',2),YT=[$T];function KT(n,e,t,i,s,r){return Ve(),rt("div",XT,YT)}const qT=en(jT,[["render",KT],["__scopeId","data-v-20ff719f"]]);function Zl(n){return n===0?!1:Array.isArray(n)&&n.length===0?!0:!n}function ZT(n){return(...e)=>!n(...e)}function JT(n,e){return n===void 0&&(n="undefined"),n===null&&(n="null"),n===!1&&(n="false"),n.toString().toLowerCase().indexOf(e.trim())!==-1}function Bm(n,e,t,i){return e?n.filter(s=>JT(i(s,t),e)).sort((s,r)=>i(s,t).length-i(r,t).length):n}function QT(n){return n.filter(e=>!e.$isLabel)}function Jl(n,e){return t=>t.reduce((i,s)=>s[n]&&s[n].length?(i.push({$groupLabel:s[e],$isLabel:!0}),i.concat(s[n])):i,[])}function eA(n,e,t,i,s){return r=>r.map(o=>{if(!o[t])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];const a=Bm(o[t],n,e,s);return a.length?{[i]:o[i],[t]:a}:[]})}const Lf=(...n)=>e=>n.reduce((t,i)=>i(t),e);var tA={data(){return{search:"",isOpen:!1,preferredOpenDirection:"below",optimizedHeight:this.maxHeight}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default(n,e){return Zl(n)?"":e?n[e]:n}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},tagPosition:{type:String,default:"top"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},groupSelect:{type:Boolean,default:!1},blockKeys:{type:Array,default(){return[]}},preserveSearch:{type:Boolean,default:!1},preselectFirst:{type:Boolean,default:!1},preventAutofocus:{type:Boolean,default:!1}},mounted(){!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."),this.preselectFirst&&!this.internalValue.length&&this.options.length&&this.select(this.filteredOptions[0])},computed:{internalValue(){return this.modelValue||this.modelValue===0?Array.isArray(this.modelValue)?this.modelValue:[this.modelValue]:[]},filteredOptions(){const n=this.search||"",e=n.toLowerCase().trim();let t=this.options.concat();return this.internalSearch?t=this.groupValues?this.filterAndFlat(t,e,this.label):Bm(t,e,this.label,this.customLabel):t=this.groupValues?Jl(this.groupValues,this.groupLabel)(t):t,t=this.hideSelected?t.filter(ZT(this.isSelected)):t,this.taggable&&e.length&&!this.isExistingOption(e)&&(this.tagPosition==="bottom"?t.push({isTag:!0,label:n}):t.unshift({isTag:!0,label:n})),t.slice(0,this.optionsLimit)},valueKeys(){return this.trackBy?this.internalValue.map(n=>n[this.trackBy]):this.internalValue},optionKeys(){return(this.groupValues?this.flatAndStrip(this.options):this.options).map(e=>this.customLabel(e,this.label).toString().toLowerCase())},currentOptionLabel(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue.length?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue:{handler(){this.resetAfter&&this.internalValue.length&&(this.search="",this.$emit("update:modelValue",this.multiple?[]:null))},deep:!0},search(){this.$emit("search-change",this.search)}},emits:["open","search-change","close","select","update:modelValue","remove","tag"],methods:{getValue(){return this.multiple?this.internalValue:this.internalValue.length===0?null:this.internalValue[0]},filterAndFlat(n,e,t){return Lf(eA(e,t,this.groupValues,this.groupLabel,this.customLabel),Jl(this.groupValues,this.groupLabel))(n)},flatAndStrip(n){return Lf(Jl(this.groupValues,this.groupLabel),QT)(n)},updateSearch(n){this.search=n},isExistingOption(n){return this.options?this.optionKeys.indexOf(n)>-1:!1},isSelected(n){const e=this.trackBy?n[this.trackBy]:n;return this.valueKeys.indexOf(e)>-1},isOptionDisabled(n){return!!n.$isDisabled},getOptionLabel(n){if(Zl(n))return"";if(n.isTag)return n.label;if(n.$isLabel)return n.$groupLabel;const e=this.customLabel(n,this.label);return Zl(e)?"":e},select(n,e){if(n.$isLabel&&this.groupSelect){this.selectGroup(n);return}if(!(this.blockKeys.indexOf(e)!==-1||this.disabled||n.$isDisabled||n.$isLabel)&&!(this.max&&this.multiple&&this.internalValue.length===this.max)&&!(e==="Tab"&&!this.pointerDirty)){if(n.isTag)this.$emit("tag",n.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else{if(this.isSelected(n)){e!=="Tab"&&this.removeElement(n);return}this.multiple?this.$emit("update:modelValue",this.internalValue.concat([n])):this.$emit("update:modelValue",n),this.$emit("select",n,this.id),this.clearOnSelect&&(this.search="")}this.closeOnSelect&&this.deactivate()}},selectGroup(n){const e=this.options.find(t=>t[this.groupLabel]===n.$groupLabel);if(e){if(this.wholeGroupSelected(e)){this.$emit("remove",e[this.groupValues],this.id);const t=this.trackBy?e[this.groupValues].map(s=>s[this.trackBy]):e[this.groupValues],i=this.internalValue.filter(s=>t.indexOf(this.trackBy?s[this.trackBy]:s)===-1);this.$emit("update:modelValue",i)}else{let t=e[this.groupValues].filter(i=>!(this.isOptionDisabled(i)||this.isSelected(i)));this.max&&t.splice(this.max-this.internalValue.length),this.$emit("select",t,this.id),this.$emit("update:modelValue",this.internalValue.concat(t))}this.closeOnSelect&&this.deactivate()}},wholeGroupSelected(n){return n[this.groupValues].every(e=>this.isSelected(e)||this.isOptionDisabled(e))},wholeGroupDisabled(n){return n[this.groupValues].every(this.isOptionDisabled)},removeElement(n,e=!0){if(this.disabled||n.$isDisabled)return;if(!this.allowEmpty&&this.internalValue.length<=1){this.deactivate();return}const t=typeof n=="object"?this.valueKeys.indexOf(n[this.trackBy]):this.valueKeys.indexOf(n);if(this.multiple){const i=this.internalValue.slice(0,t).concat(this.internalValue.slice(t+1));this.$emit("update:modelValue",i)}else this.$emit("update:modelValue",null);this.$emit("remove",n,this.id),this.closeOnSelect&&e&&this.deactivate()},removeLastElement(){this.blockKeys.indexOf("Delete")===-1&&this.search.length===0&&Array.isArray(this.internalValue)&&this.internalValue.length&&this.removeElement(this.internalValue[this.internalValue.length-1],!1)},activate(){this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&this.pointer===0&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.preventAutofocus||this.$nextTick(()=>this.$refs.search&&this.$refs.search.focus())):this.preventAutofocus||typeof this.$el<"u"&&this.$el.focus(),this.$emit("open",this.id))},deactivate(){this.isOpen&&(this.isOpen=!1,this.searchable?this.$refs.search!==null&&typeof this.$refs.search<"u"&&this.$refs.search.blur():typeof this.$el<"u"&&this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id))},toggle(){this.isOpen?this.deactivate():this.activate()},adjustPosition(){if(typeof window>"u")return;const n=this.$el.getBoundingClientRect().top,e=window.innerHeight-this.$el.getBoundingClientRect().bottom;e>this.maxHeight||e>n||this.openDirection==="below"||this.openDirection==="bottom"?(this.preferredOpenDirection="below",this.optimizedHeight=Math.min(e-40,this.maxHeight)):(this.preferredOpenDirection="above",this.optimizedHeight=Math.min(n-40,this.maxHeight))}}},nA={data(){return{pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition(){return this.pointer*this.optionHeight},visibleElements(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions(){this.pointerAdjust()},isOpen(){this.pointerDirty=!1},pointer(){this.$refs.search&&this.$refs.search.setAttribute("aria-activedescendant",this.id+"-"+this.pointer.toString())}},methods:{optionHighlight(n,e){return{"multiselect__option--highlight":n===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(e)}},groupHighlight(n,e){if(!this.groupSelect)return["multiselect__option--disabled",{"multiselect__option--group":e.$isLabel}];const t=this.options.find(i=>i[this.groupLabel]===e.$groupLabel);return t&&!this.wholeGroupDisabled(t)?["multiselect__option--group",{"multiselect__option--highlight":n===this.pointer&&this.showPointer},{"multiselect__option--group-selected":this.wholeGroupSelected(t)}]:"multiselect__option--disabled"},addPointerElement({key:n}="Enter"){this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],n),this.pointerReset()},pointerForward(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()),this.pointerDirty=!0},pointerBackward(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerBackward()):this.filteredOptions[this.pointer]&&this.filteredOptions[0].$isLabel&&!this.groupSelect&&this.pointerForward(),this.pointerDirty=!0},pointerReset(){this.closeOnSelect&&(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0))},pointerAdjust(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0),this.filteredOptions.length>0&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()},pointerSet(n){this.pointer=n,this.pointerDirty=!0}}},zm={name:"vue-multiselect",mixins:[tA,nA],compatConfig:{MODE:3,ATTR_ENUMERATED_COERCION:!1},props:{name:{type:String,default:""},modelValue:{type:null,default(){return[]}},selectLabel:{type:String,default:"Press enter to select"},selectGroupLabel:{type:String,default:"Press enter to select group"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},deselectGroupLabel:{type:String,default:"Press enter to deselect group"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:n=>`and ${n} more`},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoOptions:{type:Boolean,default:!0},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{hasOptionGroup(){return this.groupValues&&this.groupLabel&&this.groupSelect},isSingleLabelVisible(){return(this.singleValue||this.singleValue===0)&&(!this.isOpen||!this.searchable)&&!this.visibleValues.length},isPlaceholderVisible(){return!this.internalValue.length&&(!this.searchable||!this.isOpen)},visibleValues(){return this.multiple?this.internalValue.slice(0,this.limit):[]},singleValue(){return this.internalValue[0]},deselectLabelText(){return this.showLabels?this.deselectLabel:""},deselectGroupLabelText(){return this.showLabels?this.deselectGroupLabel:""},selectLabelText(){return this.showLabels?this.selectLabel:""},selectGroupLabelText(){return this.showLabels?this.selectGroupLabel:""},selectedLabelText(){return this.showLabels?this.selectedLabel:""},inputStyle(){return this.searchable||this.multiple&&this.modelValue&&this.modelValue.length?this.isOpen?{width:"100%"}:{width:"0",position:"absolute",padding:"0"}:""},contentStyle(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove(){return this.openDirection==="above"||this.openDirection==="top"?!0:this.openDirection==="below"||this.openDirection==="bottom"?!1:this.preferredOpenDirection==="above"},showSearchInput(){return this.searchable&&(this.hasSingleSelectedSlot&&(this.visibleSingleValue||this.visibleSingleValue===0)?this.isOpen:!0)}}};const iA={ref:"tags",class:"multiselect__tags"},sA={class:"multiselect__tags-wrap"},rA={class:"multiselect__spinner"},oA={key:0},aA={class:"multiselect__option"},lA={class:"multiselect__option"},cA=qn("No elements found. Consider changing the search query."),uA={class:"multiselect__option"},hA=qn("List is empty.");function dA(n,e,t,i,s,r){return Ve(),rn("div",{tabindex:n.searchable?-1:t.tabindex,class:[{"multiselect--active":n.isOpen,"multiselect--disabled":t.disabled,"multiselect--above":r.isAbove,"multiselect--has-options-group":r.hasOptionGroup},"multiselect"],onFocus:e[14]||(e[14]=o=>n.activate()),onBlur:e[15]||(e[15]=o=>n.searchable?!1:n.deactivate()),onKeydown:[e[16]||(e[16]=jn(wt(o=>n.pointerForward(),["self","prevent"]),["down"])),e[17]||(e[17]=jn(wt(o=>n.pointerBackward(),["self","prevent"]),["up"]))],onKeypress:e[18]||(e[18]=jn(wt(o=>n.addPointerElement(o),["stop","self"]),["enter","tab"])),onKeyup:e[19]||(e[19]=jn(o=>n.deactivate(),["esc"])),role:"combobox","aria-owns":"listbox-"+n.id},[Yt(n.$slots,"caret",{toggle:n.toggle},()=>[Le("div",{onMousedown:e[1]||(e[1]=wt(o=>n.toggle(),["prevent","stop"])),class:"multiselect__select"},null,32)]),Yt(n.$slots,"clear",{search:n.search}),Le("div",iA,[Yt(n.$slots,"selection",{search:n.search,remove:n.removeElement,values:r.visibleValues,isOpen:n.isOpen},()=>[Mr(Le("div",sA,[(Ve(!0),rn(Ot,null,oc(r.visibleValues,(o,a)=>Yt(n.$slots,"tag",{option:o,search:n.search,remove:n.removeElement},()=>[(Ve(),rn("span",{class:"multiselect__tag",key:a},[Le("span",{textContent:wn(n.getOptionLabel(o))},null,8,["textContent"]),Le("i",{tabindex:"1",onKeypress:jn(wt(l=>n.removeElement(o),["prevent"]),["enter"]),onMousedown:wt(l=>n.removeElement(o),["prevent"]),class:"multiselect__tag-icon"},null,40,["onKeypress","onMousedown"])]))])),256))],512),[[Sr,r.visibleValues.length>0]]),n.internalValue&&n.internalValue.length>t.limit?Yt(n.$slots,"limit",{key:0},()=>[Le("strong",{class:"multiselect__strong",textContent:wn(t.limitText(n.internalValue.length-t.limit))},null,8,["textContent"])]):yt("v-if",!0)]),Le(ma,{name:"multiselect__loading"},{default:Zs(()=>[Yt(n.$slots,"loading",{},()=>[Mr(Le("div",rA,null,512),[[Sr,t.loading]])])]),_:3}),n.searchable?(Ve(),rn("input",{key:0,ref:"search",name:t.name,id:n.id,type:"text",autocomplete:"off",spellcheck:!1,placeholder:n.placeholder,style:r.inputStyle,value:n.search,disabled:t.disabled,tabindex:t.tabindex,onInput:e[2]||(e[2]=o=>n.updateSearch(o.target.value)),onFocus:e[3]||(e[3]=wt(o=>n.activate(),["prevent"])),onBlur:e[4]||(e[4]=wt(o=>n.deactivate(),["prevent"])),onKeyup:e[5]||(e[5]=jn(o=>n.deactivate(),["esc"])),onKeydown:[e[6]||(e[6]=jn(wt(o=>n.pointerForward(),["prevent"]),["down"])),e[7]||(e[7]=jn(wt(o=>n.pointerBackward(),["prevent"]),["up"])),e[9]||(e[9]=jn(wt(o=>n.removeLastElement(),["stop"]),["delete"]))],onKeypress:e[8]||(e[8]=jn(wt(o=>n.addPointerElement(o),["prevent","stop","self"]),["enter"])),class:"multiselect__input","aria-controls":"listbox-"+n.id},null,44,["name","id","placeholder","value","disabled","tabindex","aria-controls"])):yt("v-if",!0),r.isSingleLabelVisible?(Ve(),rn("span",{key:1,class:"multiselect__single",onMousedown:e[10]||(e[10]=wt((...o)=>n.toggle&&n.toggle(...o),["prevent"]))},[Yt(n.$slots,"singleLabel",{option:r.singleValue},()=>[qn(wn(n.currentOptionLabel),1)])],32)):yt("v-if",!0),r.isPlaceholderVisible?(Ve(),rn("span",{key:2,class:"multiselect__placeholder",onMousedown:e[11]||(e[11]=wt((...o)=>n.toggle&&n.toggle(...o),["prevent"]))},[Yt(n.$slots,"placeholder",{},()=>[qn(wn(n.placeholder),1)])],32)):yt("v-if",!0)],512),Le(ma,{name:"multiselect"},{default:Zs(()=>[Mr(Le("div",{class:"multiselect__content-wrapper",onFocus:e[12]||(e[12]=(...o)=>n.activate&&n.activate(...o)),tabindex:"-1",onMousedown:e[13]||(e[13]=wt(()=>{},["prevent"])),style:{maxHeight:n.optimizedHeight+"px"},ref:"list"},[Le("ul",{class:"multiselect__content",style:r.contentStyle,role:"listbox",id:"listbox-"+n.id},[Yt(n.$slots,"beforeList"),n.multiple&&n.max===n.internalValue.length?(Ve(),rn("li",oA,[Le("span",aA,[Yt(n.$slots,"maxElements",{},()=>[qn("Maximum of "+wn(n.max)+" options selected. First remove a selected option to select another.",1)])])])):yt("v-if",!0),!n.max||n.internalValue.length<n.max?(Ve(!0),rn(Ot,{key:1},oc(n.filteredOptions,(o,a)=>(Ve(),rn("li",{class:"multiselect__element",key:a,id:n.id+"-"+a,role:o&&(o.$isLabel||o.$isDisabled)?null:"option"},[o&&(o.$isLabel||o.$isDisabled)?yt("v-if",!0):(Ve(),rn("span",{key:0,class:[n.optionHighlight(a,o),"multiselect__option"],onClick:wt(l=>n.select(o),["stop"]),onMouseenter:wt(l=>n.pointerSet(a),["self"]),"data-select":o&&o.isTag?n.tagPlaceholder:r.selectLabelText,"data-selected":r.selectedLabelText,"data-deselect":r.deselectLabelText},[Yt(n.$slots,"option",{option:o,search:n.search,index:a},()=>[Le("span",null,wn(n.getOptionLabel(o)),1)])],42,["onClick","onMouseenter","data-select","data-selected","data-deselect"])),o&&(o.$isLabel||o.$isDisabled)?(Ve(),rn("span",{key:1,"data-select":n.groupSelect&&r.selectGroupLabelText,"data-deselect":n.groupSelect&&r.deselectGroupLabelText,class:[n.groupHighlight(a,o),"multiselect__option"],onMouseenter:wt(l=>n.groupSelect&&n.pointerSet(a),["self"]),onMousedown:wt(l=>n.selectGroup(o),["prevent"])},[Yt(n.$slots,"option",{option:o,search:n.search,index:a},()=>[Le("span",null,wn(n.getOptionLabel(o)),1)])],42,["data-select","data-deselect","onMouseenter","onMousedown"])):yt("v-if",!0)],8,["id","role"]))),128)):yt("v-if",!0),Mr(Le("li",null,[Le("span",lA,[Yt(n.$slots,"noResult",{search:n.search},()=>[cA])])],512),[[Sr,t.showNoResults&&n.filteredOptions.length===0&&n.search&&!t.loading]]),Mr(Le("li",null,[Le("span",uA,[Yt(n.$slots,"noOptions",{},()=>[hA])])],512),[[Sr,t.showNoOptions&&(n.options.length===0||r.hasOptionGroup===!0&&n.filteredOptions.length===0)&&!n.search&&!t.loading]]),Yt(n.$slots,"afterList")],12,["id"])],36),[[Sr,n.isOpen]])]),_:3})],42,["tabindex","aria-owns"])}zm.render=dA;const fA=Qt({methods:{mouseClick(n){if(this.justClicked){this.justClicked=!1;return}const e=document.getElementById("brush-options");if(e){const t=e.getBoundingClientRect();this.showOptions=n.clientX>=t.left&&n.clientX<=t.right&&n.clientY>=t.top&&n.clientY<=t.bottom}},setBrushShape(n){Y.brushShape=n},inputChange(n){Y.brushSize=+n.target.value}},mounted(){document.addEventListener("click",this.mouseClick)},unmounted(){document.removeEventListener("click",this.mouseClick)},data(){return{showOptions:!1,justClicked:!1,state:Y}}}),es=n=>(xi("data-v-bb91c8b4"),n=n(),Mi(),n),pA={class:"brush-button"},mA=es(()=>Z("i",{class:"bi bi-brush-fill"},null,-1)),gA=es(()=>Z("i",{class:"bi bi-caret-down-fill"},null,-1)),_A=[mA,gA],vA={key:0,id:"brush-options",class:"brush-options"},xA=es(()=>Z("div",{class:"title"}," Brush ",-1)),MA=es(()=>Z("p",{style:{margin:"4px","margin-bottom":"0","text-align":"left"}},"Size",-1)),yA={style:{display:"flex","margin-left":"4px","margin-right":"4px","align-items":"center"}},SA=["value"],bA={style:{height:"100%",width:"18px","text-align":"center",color:"var(--color-text-disabled)"}},EA=es(()=>Z("span",{style:{height:"100%","margin-bottom":"0.1em",color:"var(--color-text-disabled)"}},"px",-1)),TA=es(()=>Z("p",{style:{margin:"4px","margin-bottom":"0","text-align":"left"}},"Shape",-1)),AA={style:{display:"flex",width:"100%","justify-content":"space-around",flex:"1","align-items":"center"}},wA=es(()=>Z("i",{class:"bi bi-square-fill"},null,-1)),CA=[wA],RA=es(()=>Z("i",{class:"bi bi-circle-fill"},null,-1)),PA=[RA];function IA(n,e,t,i,s,r){return Ve(),rt("div",pA,[Z("div",{onClick:e[0]||(e[0]=o=>{n.showOptions=!0,n.justClicked=!0}),class:"icons"},_A),n.showOptions?(Ve(),rt("div",vA,[xA,MA,Z("div",yA,[Z("input",{onMousemove:e[1]||(e[1]=(...o)=>n.inputChange&&n.inputChange(...o)),value:n.state.brushSize,min:1,max:"16",class:"custom-range",type:"range",style:{flex:"1"}},null,40,SA),Z("span",bA,wn(n.state.brushSize),1),EA]),TA,Z("div",AA,[Z("div",{onClick:e[2]||(e[2]=o=>n.setBrushShape("square")),class:"brush-type",style:Ut(`background-color: var(${n.state.brushShape==="square"?"--color-secondary":"--color-foreground-2"});`)},CA,4),Z("div",{onClick:e[3]||(e[3]=o=>n.setBrushShape("round")),class:"brush-type",style:Ut(`background-color: var(${n.state.brushShape==="round"?"--color-secondary":"--color-foreground-2"});`)},PA,4)])])):yt("",!0)])}const DA=en(fA,[["render",IA],["__scopeId","data-v-bb91c8b4"]]),sh=Qt({components:{Multiselect:zm,Brush:DA},methods:{resize(){this.space=window.innerWidth<1200?4:8,this.rightVisible=window.innerWidth>=1045}},mounted(){window.addEventListener("resize",this.resize)},unmounted(){window.removeEventListener("resize",this.resize)},data:()=>({options:["Object mode","Geometry mode"],space:window.innerWidth<1200?4:8,rightVisible:window.innerWidth>=1045,state:Y})}),Nf=()=>{ka(n=>({43447760:n.space+"px"}))},Of=sh.setup;sh.setup=Of?(n,e)=>(Nf(),Of(n,e)):Nf;const ho=n=>(xi("data-v-fa329d20"),n=n(),Mi(),n),LA={class:"mode-bar"},NA={class:"mode-bar-left"},OA=Bp('<div class="mode-bar-item" data-v-fa329d20><div class="mode-bar-item-select" data-v-fa329d20><select data-v-fa329d20><option value="" disabled selected data-v-fa329d20>Render Mode</option><option value="Material Preview" data-v-fa329d20>Material Preview</option><option value="Unlit" data-v-fa329d20>Unlit</option><option value="Wireframe" data-v-fa329d20>Wireframe</option><option value="Lit" data-v-fa329d20>Lit</option></select></div></div>',1),UA={class:"mode-bar-item"},FA={class:"mode-bar-item-select"},BA=ho(()=>Z("i",{class:"bi bi-box-fill"},null,-1)),zA={class:"mode-bar-item"},kA={class:"mode-bar-item-select"},VA=ho(()=>Z("i",{class:"bi bi-hammer"},null,-1)),HA={key:0,class:"mode-bar-item"},GA={key:0,title:"snap",class:"mode-bar-right"},WA={class:"mode-bar-item"},jA={class:"mode-bar-item-select",style:{width:"48px"}},XA=ho(()=>Z("i",{class:"bi bi-magnet-fill"},null,-1)),$A=[XA],YA={title:"grid",class:"mode-bar-item"},KA={class:"mode-bar-item-select",style:{width:"48px"}},qA=ho(()=>Z("i",{class:"bi bi-grid-3x3"},null,-1)),ZA=[qA],JA=ho(()=>Z("div",{class:"mode-bar-item"},[Z("div",{class:"mode-bar-item-select"},[Z("div",{class:"mode-button"},[Z("i",{class:"bi bi-globe-americas"}),qn(" World Material ")])])],-1));function QA(n,e,t,i,s,r){const o=Lt("Brush");return Ve(),rt("div",LA,[Z("div",NA,[OA,Z("div",UA,[Z("div",FA,[Z("div",{onClick:e[0]||(e[0]=a=>n.state.setCurrentMode("object")),class:"mode-button",style:Ut(n.state.currentMode==="object"?"background-color: var(--color-secondary);":"")},[BA,qn(" Object Mode ")],4)])]),Z("div",zA,[Z("div",kA,[Z("div",{onClick:e[1]||(e[1]=a=>n.state.setCurrentMode("sculpt")),class:"mode-button",style:Ut(n.state.currentMode==="sculpt"?"background-color: var(--color-secondary);":"")},[VA,qn(" Voxel Mode ")],4)])]),n.state.currentMode==="sculpt"?(Ve(),rt("div",HA,[Le(o)])):yt("",!0)]),n.rightVisible?(Ve(),rt("div",GA,[Z("div",WA,[Z("div",jA,[Z("div",{onClick:e[2]||(e[2]=a=>n.state.snapActive=!n.state.snapActive),class:"mode-button",style:Ut(`background-color: var(${n.state.snapActive?"--color-secondary":"--color-foreground-2"});`)},$A,4)])]),Z("div",YA,[Z("div",KA,[Z("div",{onClick:e[3]||(e[3]=a=>n.state.setGridActive(!n.state.gridActive)),class:"mode-button",style:Ut(`background-color: var(${n.state.gridActive?"--color-secondary":"--color-foreground-2"});`)},ZA,4)])]),JA,Z("div",{style:Ut(`width: ${n.space}px;`)},null,4)])):yt("",!0)])}const ew=en(sh,[["render",QA],["__scopeId","data-v-fa329d20"]]),rh=Qt({data(){return{state:Y}},methods:{editClick(){Y.currentTool!=="edit"&&(Y.currentTool="edit",document.dispatchEvent(new CustomEvent("tool-switch-edit")))},measureClick(){Y.currentTool!=="measure"&&(Y.currentTool="measure",document.dispatchEvent(new CustomEvent("tool-measure-edit")))},exploreClick(){Y.currentTool!=="explore"&&(Y.currentTool="explore",document.dispatchEvent(new CustomEvent("tool-explore-edit")))},annotateClick(){Y.currentTool!=="annotate"&&(Y.currentTool="annotate",document.dispatchEvent(new CustomEvent("tool-annotate-edit")))}}}),Uf=()=>{ka(n=>({"35996b62":n.state.currentTool==="edit"?"var(--color-secondary)":"var(--color-foreground-1)","7891fda2":n.state.currentTool==="measure"?"var(--color-secondary)":"var(--color-foreground-1)",e03f0bb8:n.state.currentTool==="explore"?"var(--color-secondary)":"var(--color-foreground-1)","116dfa11":n.state.currentTool==="annotate"?"var(--color-secondary)":"var(--color-foreground-1)"}))},Ff=rh.setup;rh.setup=Ff?(n,e)=>(Uf(),Ff(n,e)):Uf;const Ya=n=>(xi("data-v-60410809"),n=n(),Mi(),n),tw={class:"tool-bar"},nw=Ya(()=>Z("i",{class:"bi bi-boxes"},null,-1)),iw=[nw],sw=Ya(()=>Z("i",{class:"bi bi-rulers"},null,-1)),rw=[sw],ow=Ya(()=>Z("i",{class:"bi bi-person-walking"},null,-1)),aw=[ow],lw=Ya(()=>Z("i",{class:"bi bi-pen-fill"},null,-1)),cw=[lw];function uw(n,e,t,i,s,r){return Ve(),rt("div",tw,[Z("div",{onClick:e[0]||(e[0]=(...o)=>n.editClick&&n.editClick(...o)),title:"edit",class:"tool-bar-item edit"},iw),Z("div",{onClick:e[1]||(e[1]=(...o)=>n.measureClick&&n.measureClick(...o)),title:"measure",class:"tool-bar-item measure"},rw),Z("div",{onClick:e[2]||(e[2]=(...o)=>n.exploreClick&&n.exploreClick(...o)),title:"explore",class:"tool-bar-item explore"},aw),Z("div",{onClick:e[3]||(e[3]=(...o)=>n.annotateClick&&n.annotateClick(...o)),title:"annotate",class:"tool-bar-item annotate"},cw)])}const hw=en(rh,[["render",uw],["__scopeId","data-v-60410809"]]),dw=Qt({data:()=>({state:Y})}),Ka=n=>(xi("data-v-260f388d"),n=n(),Mi(),n),fw={key:0,class:"tool-bar"},pw=Ka(()=>Z("i",{class:"bi bi-cursor-fill"},null,-1)),mw=[pw],gw=Ka(()=>Z("i",{class:"bi bi-arrows-move"},null,-1)),_w=[gw],vw=Ka(()=>Z("i",{class:"bi bi-arrows-fullscreen"},null,-1)),xw=[vw],Mw=Ka(()=>Z("i",{class:"bi bi-arrow-repeat"},null,-1)),yw=[Mw];function Sw(n,e,t,i,s,r){return n.state.currentMode==="object"?(Ve(),rt("div",fw,[Z("div",{onClick:e[0]||(e[0]=o=>n.state.objectModeState="select"),title:"select",class:"tool-bar-item",style:Ut(n.state.objectModeState==="select"?"background-color: var(--color-secondary);":"")},mw,4),Z("div",{onClick:e[1]||(e[1]=o=>n.state.objectModeState="move"),title:"move",class:"tool-bar-item",style:Ut(n.state.objectModeState==="move"?"background-color: var(--color-secondary);":"")},_w,4),Z("div",{onClick:e[2]||(e[2]=o=>n.state.objectModeState="scale"),title:"scale",class:"tool-bar-item",style:Ut(n.state.objectModeState==="scale"?"background-color: var(--color-secondary);":"")},xw,4),Z("div",{onClick:e[3]||(e[3]=o=>n.state.objectModeState="rotate"),title:"rotate",class:"tool-bar-item",style:Ut(n.state.objectModeState==="rotate"?"background-color: var(--color-secondary);":"")},yw,4)])):yt("",!0)}const bw=en(dw,[["render",Sw],["__scopeId","data-v-260f388d"]]),oh=Qt({data(){return{state:Y}},methods:{dispatchRotationEvent(n,e,t){document.dispatchEvent(new CustomEvent("ui-camera-rotate",{detail:{x:n,y:e,z:t}}))},clickPX(){this.dispatchRotationEvent(0,-90,180)},clickNX(){this.dispatchRotationEvent(0,90,-180)},clickPY(){this.dispatchRotationEvent(-90,0,-90)},clickNY(){this.dispatchRotationEvent(90,0,90)},clickPZ(){this.dispatchRotationEvent(-360,180,540)},clickNZ(){this.dispatchRotationEvent(0,0,540)}}}),Bf=()=>{ka(n=>({"7fe47ca6":n.state.rotationX+"deg","545230ae":n.state.rotationY+"deg","2ed2c0a2":n.state.rotationZ+"deg"}))},zf=oh.setup;oh.setup=zf?(n,e)=>(Bf(),zf(n,e)):Bf;const Ew={class:"axis"},Tw={class:"axis-container"},Aw={class:"axis-cube"};function ww(n,e,t,i,s,r){return Ve(),rt("div",Ew,[Z("div",Tw,[Z("div",Aw,[Z("div",{onClick:e[0]||(e[0]=(...o)=>n.clickPY&&n.clickPY(...o)),class:"axis-face top"},"Y"),Z("div",{onClick:e[1]||(e[1]=(...o)=>n.clickNY&&n.clickNY(...o)),class:"axis-face bottom"}),Z("div",{onClick:e[2]||(e[2]=(...o)=>n.clickNX&&n.clickNX(...o)),class:"axis-face left"}),Z("div",{onClick:e[3]||(e[3]=(...o)=>n.clickPX&&n.clickPX(...o)),class:"axis-face right"},"X"),Z("div",{onClick:e[4]||(e[4]=(...o)=>n.clickNZ&&n.clickNZ(...o)),class:"axis-face front"}),Z("div",{onClick:e[5]||(e[5]=(...o)=>n.clickPZ&&n.clickPZ(...o)),class:"axis-face back"},"Z")])])])}const Cw=en(oh,[["render",ww],["__scopeId","data-v-a59f6b88"]]);var Kr=Object.freeze({Linear:Object.freeze({None:function(n){return n},In:function(n){return this.None(n)},Out:function(n){return this.None(n)},InOut:function(n){return this.None(n)}}),Quadratic:Object.freeze({In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}}),Cubic:Object.freeze({In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}}),Quartic:Object.freeze({In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}}),Quintic:Object.freeze({In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}}),Sinusoidal:Object.freeze({In:function(n){return 1-Math.sin((1-n)*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.sin(Math.PI*(.5-n)))}}),Exponential:Object.freeze({In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}}),Circular:Object.freeze({In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}}),Elastic:Object.freeze({In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin((n-.1)*5*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin((n-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(n){var e=1.70158;return n===1?1:n*n*((e+1)*n-e)},Out:function(n){var e=1.70158;return n===0?0:--n*n*((e+1)*n+e)+1},InOut:function(n){var e=2.5949095;return(n*=2)<1?.5*(n*n*((e+1)*n-e)):.5*((n-=2)*n*((e+1)*n+e)+2)}}),Bounce:Object.freeze({In:function(n){return 1-Kr.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?Kr.Bounce.In(n*2)*.5:Kr.Bounce.Out(n*2-1)*.5+.5}}),generatePow:function(n){return n===void 0&&(n=4),n=n<Number.EPSILON?Number.EPSILON:n,n=n>1e4?1e4:n,{In:function(e){return Math.pow(e,n)},Out:function(e){return 1-Math.pow(1-e,n)},InOut:function(e){return e<.5?Math.pow(e*2,n)/2:(1-Math.pow(2-e*2,n))/2+.5}}}}),Fr=function(){return performance.now()},Rw=function(){function n(){this._tweens={},this._tweensAddedDuringUpdate={}}return n.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},n.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},n.prototype.update=function(e,t){e===void 0&&(e=Fr()),t===void 0&&(t=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var s=0;s<i.length;s++){var r=this._tweens[i[s]],o=!t;r&&r.update(e,o)===!1&&!t&&delete this._tweens[i[s]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},n}(),$s={Linear:function(n,e){var t=n.length-1,i=t*e,s=Math.floor(i),r=$s.Utils.Linear;return e<0?r(n[0],n[1],i):e>1?r(n[t],n[t-1],t-i):r(n[s],n[s+1>t?t:s+1],i-s)},Bezier:function(n,e){for(var t=0,i=n.length-1,s=Math.pow,r=$s.Utils.Bernstein,o=0;o<=i;o++)t+=s(1-e,i-o)*s(e,o)*n[o]*r(i,o);return t},CatmullRom:function(n,e){var t=n.length-1,i=t*e,s=Math.floor(i),r=$s.Utils.CatmullRom;return n[0]===n[t]?(e<0&&(s=Math.floor(i=t*(1+e))),r(n[(s-1+t)%t],n[s],n[(s+1)%t],n[(s+2)%t],i-s)):e<0?n[0]-(r(n[0],n[0],n[1],n[1],-i)-n[0]):e>1?n[t]-(r(n[t],n[t],n[t-1],n[t-1],i-t)-n[t]):r(n[s?s-1:0],n[s],n[t<s+1?t:s+1],n[t<s+2?t:s+2],i-s)},Utils:{Linear:function(n,e,t){return(e-n)*t+n},Bernstein:function(n,e){var t=$s.Utils.Factorial;return t(n)/t(e)/t(n-e)},Factorial:function(){var n=[1];return function(e){var t=1;if(n[e])return n[e];for(var i=e;i>1;i--)t*=i;return n[e]=t,t}}(),CatmullRom:function(n,e,t,i,s){var r=(t-n)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*t+r+o)*l+(-3*e+3*t-2*r-o)*a+r*s+e}}},Pw=function(){function n(){}return n.nextId=function(){return n._nextId++},n._nextId=0,n}(),hu=new Rw,kf=function(){function n(e,t){t===void 0&&(t=hu),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Kr.Linear.None,this._interpolationFunction=$s.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=Pw.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return n.prototype.getId=function(){return this._id},n.prototype.isPlaying=function(){return this._isPlaying},n.prototype.isPaused=function(){return this._isPaused},n.prototype.getDuration=function(){return this._duration},n.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t<0?0:t,this},n.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e<0?0:e,this},n.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},n.prototype.start=function(e,t){if(e===void 0&&(e=Fr()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var s={};for(var r in this._valuesEnd)s[r]=this._valuesEnd[r];this._valuesEnd=s}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},n.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},n.prototype._setupProperties=function(e,t,i,s,r){for(var o in i){var a=e[o],l=Array.isArray(a),c=l?"array":typeof a,u=!l&&Array.isArray(i[o]);if(!(c==="undefined"||c==="function")){if(u){var h=i[o];if(h.length===0)continue;for(var d=[a],f=0,g=h.length;f<g;f+=1){var x=this._handleRelativeValue(a,h[f]);if(isNaN(x)){u=!1,console.warn("Found invalid interpolation list. Skipping.");break}d.push(x)}u&&(i[o]=d)}if((c==="object"||l)&&a&&!u){t[o]=l?[]:{};var m=a;for(var p in m)t[o][p]=m[p];s[o]=l?[]:{};var h=i[o];if(!this._isDynamic){var T={};for(var p in h)T[p]=h[p];i[o]=h=T}this._setupProperties(m,t[o],h,s[o],r)}else(typeof t[o]>"u"||r)&&(t[o]=a),l||(t[o]*=1),u?s[o]=i[o].slice().reverse():s[o]=t[o]||0}}},n.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},n.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},n.prototype.pause=function(e){return e===void 0&&(e=Fr()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},n.prototype.resume=function(e){return e===void 0&&(e=Fr()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},n.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},n.prototype.group=function(e){return e===void 0&&(e=hu),this._group=e,this},n.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},n.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},n.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},n.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},n.prototype.easing=function(e){return e===void 0&&(e=Kr.Linear.None),this._easingFunction=e,this},n.prototype.interpolation=function(e){return e===void 0&&(e=$s.Linear),this._interpolationFunction=e,this},n.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},n.prototype.onStart=function(e){return this._onStartCallback=e,this},n.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},n.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},n.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},n.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},n.prototype.onStop=function(e){return this._onStopCallback=e,this},n.prototype.update=function(e,t){var i=this,s;if(e===void 0&&(e=Fr()),t===void 0&&(t=!0),this._isPaused)return!0;var r,o=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>o)return!1;t&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var a=e-this._startTime,l=this._duration+((s=this._repeatDelayTime)!==null&&s!==void 0?s:this._delayTime),c=this._duration+this._repeat*l,u=function(){if(i._duration===0||a>c)return 1;var m=Math.trunc(a/l),p=a-m*l,T=Math.min(p/i._duration,1);return T===0&&a===i._duration?1:T},h=u(),d=this._easingFunction(h);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,d),this._onUpdateCallback&&this._onUpdateCallback(this._object,h),this._duration===0||a>=this._duration)if(this._repeat>0){var f=Math.min(Math.trunc((a-this._duration)/l)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=f);for(r in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[r]=="string"&&(this._valuesStartRepeat[r]=this._valuesStartRepeat[r]+parseFloat(this._valuesEnd[r])),this._yoyo&&this._swapEndStartRepeatValues(r),this._valuesStart[r]=this._valuesStartRepeat[r];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=l*f,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var g=0,x=this._chainedTweens.length;g<x;g++)this._chainedTweens[g].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},n.prototype._updateProperties=function(e,t,i,s){for(var r in i)if(t[r]!==void 0){var o=t[r]||0,a=i[r],l=Array.isArray(e[r]),c=Array.isArray(a),u=!l&&c;u?e[r]=this._interpolationFunction(a,s):typeof a=="object"&&a?this._updateProperties(e[r],o,a,s):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[r]=o+(a-o)*s))}},n.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},n.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},n}(),ei=hu;ei.getAll.bind(ei);ei.removeAll.bind(ei);ei.add.bind(ei);ei.remove.bind(ei);var Iw=ei.update.bind(ei);const Dw=.01,hi=1e3;class Lw{constructor(e,t){ce(this,"canvas");ce(this,"canvasContainer");ce(this,"canvasObserver");ce(this,"renderer");ce(this,"scene");ce(this,"camera");ce(this,"controls");ce(this,"clock");ce(this,"grid10");ce(this,"grid40");ce(this,"lineX");ce(this,"lineZ");ce(this,"ghostLight",new ou(16777215,10,1e4,.25));ce(this,"nGhostLight",new ou(16773360,2,1e4,.25));ce(this,"ambientLight",new mf(16777215,.5));ce(this,"clickableObjects",[]);ce(this,"isMouseDown",[!1,!1,!1,!1]);ce(this,"isDragging",[!1,!1,!1,!1]);ce(this,"mouseDownPosition",[[0,0],[0,0],[0,0],[0,0]]);ce(this,"lastMeshIntersect");ce(this,"effectComposter");ce(this,"renderPass");ce(this,"outlinePass");ce(this,"fxaaPass");ce(this,"ssaoPass");ce(this,"topLevel");ce(this,"lastMouseMove");ce(this,"createEvents",()=>{document.addEventListener("ui-camera-rotate",this.handleCameraRotationFromUi),this.canvasContainer.addEventListener("mousemove",this.handleMouseMove),this.canvasContainer.addEventListener("mousedown",this.handleMouseDown),this.canvasContainer.addEventListener("mouseup",this.handleMouseUp),document.addEventListener("keyup",this.handleKeyUp),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keypress",this.handleKeyPress)});ce(this,"clearEvents",()=>{document.removeEventListener("ui-camera-rotate",this.handleCameraRotationFromUi),this.canvasContainer.removeEventListener("mousemove",this.handleMouseMove),this.canvasContainer.removeEventListener("mousedown",this.handleMouseDown),this.canvasContainer.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener("keyup",this.handleKeyUp),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keypress",this.handleKeyPress)});ce(this,"update",()=>{if(this.clock.getDelta(),this.lastMouseMove){let e=this.intersectObject(this.lastMouseMove.offsetX,this.lastMouseMove.offsetY);this.clickableObjects.forEach(i=>{e?i instanceof kn&&i!==e.object&&(i.hover&&i.invokeHoverOutEvent(this.lastMouseMove),i.hover=!1):(i instanceof kn&&i.hover&&i.invokeHoverOutEvent(this.lastMouseMove),i.hover=!1)});const t=this.lastMouseMove;t.intersect=e,e&&e.object instanceof kn&&(e.object.hover=!0,e.object.invokeHoverEvent(t))}this.controls.update(),Iw(),Je.INSTANCE.update(this.camera),this.camera.rotation.reorder("YXZ"),Y.rotationX=zi.radToDeg(this.camera.rotation.x),Y.rotationY=zi.radToDeg(this.camera.rotation.y),Y.rotationZ=zi.radToDeg(this.camera.rotation.z),Je.INSTANCE.scene.visible=!1,this.renderer.clearDepth(),this.effectComposter.render(),this.renderer.clearDepth(),this.renderer.autoClear=!1,Je.INSTANCE.scene.visible=Je.INSTANCE.scene.userData.visible,this.renderer.render(this.topLevel,this.camera),Je.INSTANCE.scene.visible=!1,this.renderer.autoClear=!0,requestAnimationFrame(this.update)});ce(this,"clipboard",[]);ce(this,"copy",()=>{this.clipboard=[],Je.INSTANCE.selectedObjects.forEach(e=>{this.clipboard.includes(e)||this.clipboard.push(e)})});ce(this,"paste",()=>{this.unselectAll(),this.clipboard.forEach(e=>{const t=e.clone();this.scene.add(t),this.clickableObjects.push(t),Je.INSTANCE.selectedObjects.push(t),t.select()}),this.outlinePass&&(this.outlinePass.selectedObjects=Je.INSTANCE.selectedObjects)});ce(this,"handleKeyPress",e=>{});ce(this,"handleKeyDown",e=>{e.key==="Control"&&(this.controls.enabled=!1),e.key==="Tab"&&e.preventDefault()});ce(this,"handleKeyUp",e=>{e.code==="Delete"&&(Je.INSTANCE.selectedObjects.forEach(t=>{const i=this.clickableObjects.indexOf(t);i>-1&&this.clickableObjects.splice(i,1),this.scene.remove(t)}),Je.INSTANCE.selectedObjects=[]),e.code==="KeyV"&&e.ctrlKey&&this.paste(),e.code==="KeyC"&&e.ctrlKey&&this.copy(),e.key==="Control"&&(this.controls.enabled=!0),e.key==="Tab"&&Y.setCurrentMode(Y.currentMode==="object"?"sculpt":"object"),e.code==="KeyT"&&Y.currentMode==="object"&&(Y.objectModeState="move"),e.code==="KeyR"&&Y.currentMode==="object"&&(Y.objectModeState="rotate"),e.code==="KeyG"&&Y.currentMode==="object"&&(Y.objectModeState="scale"),e.code==="KeyF"&&Y.currentMode==="object"&&(Y.objectModeState="select")});ce(this,"intersectObject",(e,t)=>{const i=new vf,s=new _e;s.x=e/this.canvas.clientWidth*2-1,s.y=-(t/this.canvas.clientHeight)*2+1,i.setFromCamera(s,this.camera),i.far=1e3,i.near=1e-7;const r=i.intersectObjects(this.clickableObjects,!0).reverse();let o=r[0];for(const a of r)if(a.object instanceof kn&&!a.object.disableMouseEvents){if(a.object.draggable){o=a;break}o=a}return o});ce(this,"handleMouseDown",e=>{this.isMouseDown[e.button]=!0,Y.isMouseDown[e.button]=!0,this.mouseDownPosition[e.button]=[e.offsetX,e.offsetY];const t=e;let i=this.intersectObject(e.offsetX,e.offsetY);if(!i){this.lastMeshIntersect=void 0;return}t.intersect=i,this.lastMeshIntersect=t,this.lastMeshIntersect.isFirstMovement=!0,i.object.draggable&&(this.controls.enabled=!1)});ce(this,"handleMouseUp",e=>{var t;if(!this.isDragging[e.button]){const i=(t=this.lastMeshIntersect)==null?void 0:t.intersect.object;if(i&&!i.disableMouseEvents){if(i==null||i.invokeClickEvent(this.lastMeshIntersect),!i.internal&&Y.currentMode==="object"){if(e.shiftKey||this.unselectAll(),!i.selected)i.select(),Je.INSTANCE.selectedObjects.push(i);else if(e.shiftKey){i.unselect();let s=Je.INSTANCE.selectedObjects.indexOf(i);s!==-1&&Je.INSTANCE.selectedObjects.splice(s,1)}this.outlinePass&&(this.outlinePass.selectedObjects=Je.INSTANCE.selectedObjects)}}else this.unselectAll()}this.isMouseDown[e.button]=!1,Y.isMouseDown[e.button]=!1,this.isDragging[e.button]=!1,this.controls.enabled=!0});ce(this,"handleMouseMove",e=>{this.lastMouseMove=e;for(let t=0;t<this.isMouseDown.length;t++)if(this.isMouseDown[t]&&(this.isDragging[t]=!0,this.lastMeshIntersect&&this.lastMeshIntersect.intersect.object&&!this.lastMeshIntersect.intersect.object.disableMouseEvents)){const i=new $n,s=new $n;let r=new P;this.camera.getWorldDirection(r),r.y=0,i.setFromNormalAndCoplanarPoint(new P(0,1,0),this.lastMeshIntersect.intersect.point),s.setFromNormalAndCoplanarPoint(r,this.lastMeshIntersect.intersect.point);const o=new vf,a=new _e,l=new _e;a.x=e.offsetX/this.canvas.clientWidth*2-1,a.y=-(e.offsetY/this.canvas.clientHeight)*2+1,l.x=(e.offsetX-e.movementX)/this.canvas.clientWidth*2-1,l.y=-((e.offsetY-e.movementY)/this.canvas.clientHeight)*2+1,o.setFromCamera(a,this.camera);const c=new P,u=new P,h=new P,d=new P;o.ray.intersectPlane(i,c),o.ray.intersectPlane(s,u),o.setFromCamera(l,this.camera),o.ray.intersectPlane(i,h),o.ray.intersectPlane(s,d);const f=e;f.movement3dOriginXZ=h,f.movement3dOriginY=d,f.movement3dStart=this.lastMeshIntersect.intersect.point,f.isFirstMovement=this.lastMeshIntersect.isFirstMovement,f.intersect=this.lastMeshIntersect.intersect;const g=f.intersect.object;let x=new P(e.movementX,-e.movementY,.5);x=x.unproject(this.camera),x=x.sub(this.camera.position).normalize(),f.movement3dXZ=c,f.movement3dY=u,g.invokeDragEvent(f),this.lastMeshIntersect.isFirstMovement=!1}});ce(this,"handleCameraRotationFromUi",e=>{this.camera.rotation.reorder("YXZ");const t=new P(0,0,1).applyEuler(new Gn(zi.degToRad(e.detail.x),zi.degToRad(e.detail.y),zi.degToRad(e.detail.z),"YXZ")),i=this.camera.position.sub(this.controls.target).length(),s=this.controls.target.clone().add(t.multiplyScalar(i)),r=this.camera.position.clone(),o=this.camera.rotation.clone();this.camera.position.copy(s),this.camera.rotation.set(0,0,0,"YXZ"),this.camera.lookAt(this.controls.target);const a=this.camera.rotation.clone();this.camera.position.copy(r),this.camera.rotation.copy(o),new kf(this.camera.position).to({x:s.x,y:s.y,z:s.z},500).start(),new kf(this.camera.rotation).to({x:a.x,y:a.y,z:a.z},1e3).start()});ce(this,"handleResize",()=>{var i;this.canvas.style.width="100%",this.canvas.style.height="100%";const e=this.canvas.clientWidth,t=this.canvas.clientHeight;this.canvas.width=e,this.canvas.height=t,this.renderer.setSize(e,t),this.camera.aspect=e/t,this.effectComposter.setSize(e,t),(i=this.outlinePass)==null||i.setSize(e,t),this.fxaaPass&&this.fxaaPass.uniforms.resolution.value.set(1/this.canvas.width,1/this.canvas.height),this.ssaoPass&&(this.ssaoPass.resolution=new _e(this.canvas.width,this.canvas.height)),this.camera.updateProjectionMatrix()});ce(this,"createPostProccess",()=>{this.outlinePass=new Wi(new _e(this.canvas.width,this.canvas.height),this.scene,this.camera,Je.INSTANCE.selectedObjects),this.outlinePass.edgeGlow=0,this.fxaaPass=new Um(RE),this.fxaaPass.uniforms.resolution.value.set(1/this.canvas.width,1/this.canvas.height),this.ssaoPass=new lo(this.scene,this.camera,new _e(this.canvas.width,this.canvas.height)),this.ssaoPass.params.saoBias=.5,this.ssaoPass.params.saoIntensity=.002,this.ssaoPass.params.saoScale=10,this.ssaoPass.params.saoKernelRadius=16,this.ssaoPass.params.saoMinResolution=0,this.effectComposter.addPass(this.outlinePass),this.effectComposter.addPass(this.fxaaPass),this.effectComposter.addPass(this.ssaoPass)});ce(this,"createControlMeshes",()=>{this.scene.add(Je.INSTANCE.scene),this.topLevel.add(Je.INSTANCE.scene),Je.INSTANCE.setVisible(!1),this.clickableObjects.push(Je.INSTANCE.scene)});ce(this,"createGrid",()=>{const e=new Hi;this.scene.add(e),this.scene.fog=new $u(new Ae(.13,.13,.13),.01,1e3),this.grid10=new yf(hi*10,hi-1,new Ae(3355443),new Ae(3355443)),this.grid40=new yf(hi*10,(hi-1)/4,new Ae(10987431),new Ae(10987431)),this.grid10.material.depthWrite=!1,this.grid40.material.depthWrite=!1,this.grid10.material.opacity=.5,this.grid40.material.opacity=.5,this.grid10.position.add(new P(-5,0,-5)),this.grid40.position.add(new P(-5,0,-5)),this.lineX=new ao(new Jt().setFromPoints([new P(-hi*10,0,0),new P(hi*10,0,0)]),new oo({color:16711680,depthWrite:!1})),this.lineZ=new ao(new Jt().setFromPoints([new P(0,0,-hi*10),new P(0,0,hi*10)]),new oo({color:255,depthWrite:!1})),this.renderer.setClearColor(new Ae(Y.clearColor)),e.add(this.grid10),e.add(this.grid40),e.add(this.lineX),e.add(this.lineZ),Y.setGridActive=t=>{e.visible=t,Y.gridActive=t},Y.setCurrentMode=t=>{Y.currentMode=t,t!=="object"&&this.unselectAll()},this.ghostLight.position.set(1100,1e3,900),this.nGhostLight.position.set(-900,-1e3,-1100),this.scene.add(this.ghostLight),this.scene.add(this.nGhostLight),this.scene.add(this.ambientLight),this.test()});ce(this,"test",()=>{const e=new ir;e.min=new P(-20,-20,-20),e.max=new P(20,20,20),e.draw(new P,"square",5,1),this.clickableObjects.push(e),this.scene.add(e)});ce(this,"destroy",()=>{this.canvasObserver.disconnect(),this.clearEvents()});window.renderingContext=this,Y.renderingContext=this,this.canvas=e,this.canvasContainer=t,this.renderer=new FS({antialias:!0,canvas:e}),this.effectComposter=new AE(this.renderer),this.scene=new Kd,this.scene.userData.isRootScene=!0,this.topLevel=new Kd,this.topLevel.add(new mf(16777215,1)),this.camera=new an(70,1,Dw,hi),this.renderPass=new wE(this.scene,this.camera),this.effectComposter.addPass(this.renderPass),this.camera.position.set(100,100,100),this.controls=new Cb(this.camera,e),this.clock=new Dm(!0),this.handleResize(),this.createEvents(),this.canvasObserver=new ResizeObserver(this.handleResize),this.canvasObserver.observe(t),this.createGrid(),this.createControlMeshes(),this.createPostProccess(),this.update()}unselectAll(){Je.INSTANCE.setVisible(!1),Je.INSTANCE.selectedObjects.forEach(e=>{e.unselect()}),Je.INSTANCE.selectedObjects=[],this.outlinePass&&(this.outlinePass.selectedObjects=Je.INSTANCE.selectedObjects)}}let Vf;const Nw=Qt({mounted(){const n=document.getElementById("editor-canvas"),e=document.getElementById("canvas-container");n!=null&&(Vf=new Lw(n,e))},deactivated(){Vf.destroy()}}),Ow=n=>(xi("data-v-52bfad35"),n=n(),Mi(),n),Uw={id:"canvas-container"},Fw=Ow(()=>Z("canvas",{id:"editor-canvas"},null,-1)),Bw=[Fw];function zw(n,e,t,i,s,r){return Ve(),rt("div",Uw,Bw)}const kw=en(Nw,[["render",zw],["__scopeId","data-v-52bfad35"]]),Vw=Qt({components:{MenuBar:HE,PropertiesEditor:WT,AssetBrowser:qT,ModeBar:ew,ToolBar:hw,TransformBar:bw,Axis:Cw,CanvasEditor:kw}}),Hw={class:"page"},Gw={class:"page-row"},Ww={class:"page-content"},jw={class:"canvas-container"};function Xw(n,e,t,i,s,r){const o=Lt("MenuBar"),a=Lt("ModeBar"),l=Lt("ToolBar"),c=Lt("TransformBar"),u=Lt("Axis"),h=Lt("CanvasEditor"),d=Lt("AssetBrowser"),f=Lt("PropertiesEditor");return Ve(),rt("div",Hw,[Le(o),Z("div",Gw,[Z("div",Ww,[Le(a),Z("div",jw,[Le(l),Le(c),Le(u),Le(h)]),Le(d)]),Z("div",null,[Le(f)])])])}const $w=en(Vw,[["render",Xw],["__scopeId","data-v-b38232fd"]]),Yw=Qt({components:{Editor:$w}});function Kw(n,e,t,i,s,r){const o=Lt("Editor");return Ve(),rn(o)}const qw=en(Yw,[["render",Kw]]);sessionStorage.clear();jp();jp("classes");bv(qw).mount("#app");
