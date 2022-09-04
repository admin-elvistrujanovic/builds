"use strict";(()=>{var X=Object.defineProperty;var v=(t,e)=>{for(var o in e)X(t,o,{get:e[o],enumerable:!0})};var O={};v(O,{after:()=>h,before:()=>Y,instead:()=>Z,unpatchAll:()=>H});var M=["a","b","i"],u=new Map;function G(t,e,o,i,s){let r=u.get(e)?.[t];if(!r)return s?Reflect.construct(e[t],o,i):e[t].apply(i,o);for(let n of r.b.values()){let l=n.call(i,o);Array.isArray(l)&&(o=l)}let a=(...n)=>s?Reflect.construct(r.o,n,i):r.o.apply(i,n);for(let n of r.i.values()){let l=a;a=(...m)=>n.call(i,m,l)}let c=a(...o);for(let n of r.a.values())c=n.call(i,o,c)??c;return c}function k(t,e,o,i){let s=u.get(t),r=s?.[e];return r?.[i].has(o)?(r[i].delete(o),M.every(a=>r[a].size===0)&&(Reflect.defineProperty(t,e,{value:r.o,writable:!0,configurable:!0})||(t[e]=r.o),delete s[e]),Object.keys(s).length==0&&u.delete(t),!0):!1}function H(){for(let[t,e]of u.entries())for(let o in e)for(let i of M)for(let s of e[o]?.[i].keys()??[])k(t,o,s,i)}var T=t=>(e,o,i,s=!1)=>{if(typeof o[e]!="function")throw new Error(`${e} is not a function in ${o.constructor.name}`);u.has(o)||u.set(o,{});let r=u.get(o);if(!r[e]){let n=o[e];r[e]={o:n,b:new Map,i:new Map,a:new Map};let l=(d,y,S)=>{let Q=G(e,o,y,d,S);return s&&c(),Q},m=new Proxy(n,{apply:(d,y,S)=>l(y,S,!1),construct:(d,y)=>l(n,y,!0),get:(d,y,S)=>y=="toString"?n.toString.bind(n):Reflect.get(d,y,S)});Reflect.defineProperty(o,e,{value:m,configurable:!0,writable:!0})||(o[e]=m)}let a=Symbol(),c=()=>k(o,e,a,t);return r[e][t].set(a,i),c};var Y=T("b"),Z=T("i"),h=T("a");var $={...O};var A={};v(A,{find:()=>x,findAll:()=>j,findByDisplayName:()=>w,findByDisplayNameAll:()=>tt,findByProps:()=>p,findByPropsAll:()=>N,modules:()=>B});var R=[],P;var C=(t,e=!1)=>o=>{let i=[];for(let s in t){if(R.includes(s))continue;let r=t[s].publicModule.exports;if(r&&r.isMoment&&(P=r),!t[s].isInitialized)try{__r(s)}catch{R.push(s);continue}if(!r||r===window||r["no more null proxy"]===null){R.push(s);continue}if(r.default&&r.__esModule&&o(r.default)){if(e)return r.default;i.push(r.default)}if(o(r)){if(e)return r;i.push(r)}}if(P&&P.locale("en-gb"),!e)return i},B=window.modules,x=C(B,!0),j=C(B),W=t=>e=>t.every(o=>e[o]!==void 0),q=(t,e)=>e?o=>o.name===t:o=>o?.default?.name===t,p=(...t)=>x(W(t)),N=(...t)=>j(W(t)),w=(t,e=!0)=>x(q(t,e)),tt=(t,e=!0)=>j(q(t,e));var et=p("setLogFn").default,ot=new et("Vendetta"),_=ot;var L={};v(L,{Constants:()=>rt,Flux:()=>it,FluxDispatcher:()=>st,React:()=>f,ReactNative:()=>V,Redux:()=>ct,channels:()=>nt,highlightjs:()=>at,i18n:()=>I,uuid:()=>lt,zustand:()=>pt});var rt=p("API_HOST"),nt=p("getVoiceChannelId"),I=p("Messages"),it=p("connectStores"),st=p("_currentDispatchActionType"),f=p("createElement"),V=p("Text","Image"),ct=p("createStore"),pt=x(t=>typeof t=="function"&&t.toString().includes("[useStore, api] = create() is deprecated and will be removed in v4")),at=p("initHighlighting"),lt={v4:p("v1")};var ft=p("setString","getString");function E(t){try{ft.setString(t)}catch{throw new Error("Failed to set clipboard content.")}}function b(t,e,{walkable:o=[],ignore:i=[],maxDepth:s=100}={}){let r=0;function a(c,n,{walkable:l=[],ignore:m=[]}={}){if(r+=1,!(r>s)){if(typeof n=="string"){if(c.hasOwnProperty(n))return c[n]}else if(n(c))return c;if(!!c){if(Array.isArray(c))for(let g of c){let d=a(g,n,{walkable:l,ignore:m});if(d)return d}else if(typeof c=="object"){for(let g of Object.keys(c))if(!(l!=null&&l.includes(g))&&!m.includes(g))try{let d=a(c[g],n,{walkable:l,ignore:m});if(d)return d}catch{}}}}}return a(t,e,{walkable:o,ignore:i})}function F(t,e){return b(t,e,{walkable:["props","children","child","sibling"]})}var{FormRow:dt,FormSection:ut}=p("FormSection");function D(){return f.createElement(f.Fragment,null,f.createElement(ut,{title:"Versions"},f.createElement(dt,{label:"React",trailing:()=>f.createElement(V.Text,null,f.version)})))}var{FormRow:J,FormSection:mt}=p("FormSection");function z({navigation:t}){return f.createElement(mt,{key:"Vendetta",title:"Vendetta"},f.createElement(J,{label:"Settings",trailing:J.Arrow,onPress:()=>t.push("VendettaSettings")}))}var yt=w("getScreens",!1),gt=w("UserSettingsOverviewWrapper",!1);function U(){let t=h("default",yt,(o,i)=>({...i,VendettaSettings:{title:"Vendetta Settings",render:D}})),e=h("default",gt,(o,i)=>{e();let s=F(i.props.children,r=>r.type&&r.type.name==="UserSettingsOverview");h("renderSupportAndAcknowledgements",s.type.prototype,(r,{props:{children:a}})=>{let c=a.findIndex(n=>n?.type?.name==="UploadLogsButton");c!==-1&&a.splice(c,1)}),h("render",s.type.prototype,(r,{props:{children:a}})=>{let c=[I.Messages.BILLING_SETTINGS,I.Messages.PREMIUM_SETTINGS],n=a.findIndex(l=>c.includes(l.props.title));a.splice(n===-1?4:n,0,f.createElement(z,{navigation:s.props.navigation}))})})}var K=!1;try{U(),window.vendetta={patcher:{...$},metro:{...A,common:L},utils:{copyText:E,findInReactTree:F,findInTree:b},logger:_}}catch(t){K=!0,alert(`Vendetta failed to initialize...
${t.stack||t.toString()}`)}K||_.log("Loaded sucessfully!");})();
//# sourceURL=Vendetta