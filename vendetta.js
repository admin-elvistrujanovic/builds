"use strict";(()=>{var Lt=Object.defineProperty;var v=(e,t)=>{for(var o in t)Lt(e,o,{get:t[o],enumerable:!0})};var Ve={};v(Ve,{connectToDebugger:()=>Me,getDebugInfo:()=>Ce,patchLogHook:()=>Ne,socket:()=>x,versionHash:()=>ce});var Re={};v(Re,{Flux:()=>Gt,FluxDispatcher:()=>se,NavigationNative:()=>D,React:()=>Ht,ReactNative:()=>l,assets:()=>J,channels:()=>Ut,clipboard:()=>Se,commands:()=>ie,constants:()=>V,i18n:()=>ne,invites:()=>Te,moment:()=>U,navigation:()=>jt,navigationStack:()=>$t,stylesheet:()=>_,toasts:()=>xe,url:()=>we});var ve={};v(ve,{find:()=>j,findAll:()=>be,findByDisplayName:()=>$,findByDisplayNameAll:()=>kt,findByProps:()=>d,findByPropsAll:()=>Ot,findByStoreName:()=>re,modules:()=>he});var oe=e=>Object.values(window.modules).find(t=>t?.publicModule.exports?.[e])?.publicModule?.exports;window.React=oe("createElement");var l=oe("Text"),V=oe("AbortCodes"),U=oe("isMoment");function ft(e){Object.defineProperty(window.modules,e,{value:window.modules[e],enumerable:!1,configurable:!0,writable:!0})}for(let e in window.modules){let t=Number(e),o=window.modules[t]?.publicModule?.exports;if(!o||o===window||o.proxygone===null){ft(t);continue}}var ut=(e,t=!1)=>o=>{let r=[],n=U?.locale();for(let i in e){let s=Number(i),a=e[s]?.publicModule?.exports;if(!e[s].isInitialized)try{__r(s),n&&n!==U.locale()&&U.locale(n)}catch{}if(!a){ft(s);continue}try{if(a.default&&a.__esModule&&o(a.default)){if(t)return a.default;r.push(a.default)}if(o(a)){if(t)return a;r.push(a)}}catch(m){console.error(`Failed to filter modules... ${m.stack||m.toString()}`)}}if(!t)return r},he=window.modules,j=ut(he,!0),be=ut(he),gt=e=>t=>e.every(o=>t[o]!==void 0),yt=(e,t)=>t?o=>o?.name===e:o=>o?.default?.name===e,Bt=e=>t=>t.getName&&t.getName.length===0&&t.getName()===e,d=(...e)=>j(gt(e)),Ot=(...e)=>be(gt(e)),$=(e,t=!0)=>j(yt(e,t)),kt=(e,t=!0)=>be(yt(e,t)),re=e=>j(Bt(e));var Ut=d("getVoiceChannelId"),ne=d("Messages"),we=d("openURL"),xe=j(e=>e.open&&e.close&&!e.startDrag&&!e.init&&!e.openReplay&&!e.setAlwaysOnTop),_=d("createThemedStyleSheet"),Se=d("setString","getString","hasString"),J=d("registerAsset"),Te=d("acceptInviteAndTransitionToInviteChannel"),ie=d("getBuiltInCommands"),jt=d("pushLazy"),$t=d("createStackNavigator"),D=d("NavigationContainer"),Gt=d("connectStores"),se=d("_currentDispatchActionType"),Ht=window.React;var De={};v(De,{after:()=>w,before:()=>Kt,instead:()=>Wt,unpatchAll:()=>bt});var Pe=["a","b","i"],R=new Map;function ht(e,t,o,r,n){let i=R.get(t)?.[e];if(!i)return n?Reflect.construct(t[e],o,r):t[e].apply(r,o);for(let m of i.b.values()){let b=m.call(r,o);Array.isArray(b)&&(o=b)}let s=(...m)=>n?Reflect.construct(i.o,m,r):i.o.apply(r,m);for(let m of i.i.values()){let b=s;s=(...N)=>m.call(r,N,b)}let a=s(...o);for(let m of i.a.values())a=m.call(r,o,a)??a;return a}function _e(e,t,o,r){let n=R.get(e),i=n?.[t];return i?.[r].has(o)?(i[r].delete(o),Pe.every(s=>i[s].size===0)&&(Reflect.defineProperty(e,t,{value:i.o,writable:!0,configurable:!0})||(e[t]=i.o),delete n[t]),Object.keys(n).length==0&&R.delete(e),!0):!1}function bt(){for(let[e,t]of R.entries())for(let o in t)for(let r of Pe)for(let n of t[o]?.[r].keys()??[])_e(e,o,n,r)}var ae=e=>(t,o,r,n=!1)=>{if(typeof o[t]!="function")throw new Error(`${t} is not a function in ${o.constructor.name}`);R.has(o)||R.set(o,{});let i=R.get(o);if(!i[t]){let m=o[t];i[t]={o:m,b:new Map,i:new Map,a:new Map};let b=(S,C,z)=>{let Vt=ht(t,o,C,S,z);return n&&a(),Vt},N=new Proxy(m,{apply:(S,C,z)=>b(C,z,!1),construct:(S,C)=>b(m,C,!0),get:(S,C,z)=>C=="toString"?m.toString.bind(m):Reflect.get(S,C,z)});Reflect.defineProperty(o,t,{value:N,configurable:!0,writable:!0})||(o[t]=N)}let s=Symbol(),a=()=>_e(o,t,s,e);return i[t][e].set(s,r),a};var Kt=ae("b"),Wt=ae("i"),w=ae("a");var vt={...De};var Ie={};v(Ie,{all:()=>E,find:()=>zt,getAssetByID:()=>qt,getAssetByName:()=>Jt,getAssetIDByName:()=>c,patchAssets:()=>Ee});var E={};function Ee(){let e=w("registerAsset",J,(t,o)=>{let r=t[0];E[r.name]={...r,id:o}});for(let t=1;;t++){let o=J.getAssetByID(t);if(!o)break;E[o.name]||(E[o.name]={...o,id:t})}return e}var zt=e=>Object.values(E).find(e),Jt=e=>E[e],qt=e=>J.getAssetByID(e),c=e=>E[e]?.id;var Fe={};v(Fe,{showToast:()=>f});function f(e,t){return xe.open({content:e,source:t})}var Ae=d("setLogFn").default,Qt=new Ae("Vendetta"),h=Qt;var x;function Me(e){if(x!==void 0&&x.readyState!==WebSocket.CLOSED&&x.close(),e===""){f("Invalid debugger URL!",c("Small"));return}x=new WebSocket(`ws://${e}`),x.addEventListener("open",()=>f("Connected to debugger.",c("Check"))),x.addEventListener("message",t=>{try{(0,eval)(t.data)}catch(o){console.error(o)}}),x.addEventListener("error",t=>{console.log(`Debugger error: ${t.message}`),f("An error occurred with the debugger connection!",c("Small"))})}function Ne(){let e=w("nativeLoggingHook",globalThis,t=>{x?.readyState===WebSocket.OPEN&&x.send(JSON.stringify({message:t[0],level:t[1]})),h.log(t[0])});return()=>{x&&x.close(),e()}}var ce="3f3bfcb";function Ce(){let e=l.NativeModules.InfoDictionaryManager,t=l.NativeModules.DCDDeviceManager,o=window.HermesInternal.getRuntimeProperties(),r=o["OSS Release Version"],n="for RN ",i=l.Platform.constants,s=i.reactNativeVersion;return{vendetta:{version:ce,loader:window.__vendetta_loader?.name??"Unknown"},discord:{version:e.Version,build:e.Build},react:{version:React.version,nativeVersion:r.startsWith(n)?r.substring(n.length):`${s.major}.${s.minor}.${s.patch}`},hermes:{version:r,buildType:o.Build,bytecodeVersion:o["Bytecode Version"]},...l.Platform.select({android:{os:{name:"Android",version:i.Release,sdk:i.Version}},ios:{os:{name:i.systemName,version:i.osVersion}}}),...l.Platform.select({android:{device:{manufacturer:i.Manufacturer,brand:i.Brand,model:i.Model,codename:t.device}},ios:{device:{manufacturer:t.deviceManufacturer,brand:t.deviceBrand,model:t.deviceModel,codename:t.device}}})}}var Be={};v(Be,{patchCommands:()=>Le,registerCommand:()=>Xt});var q=[];function Le(){let e=w("getBuiltInCommands",ie,(t,o)=>o.concat(q));return()=>{q=[],e()}}function Xt(e){let t=ie.getBuiltInCommands(1,!0,!1);t.sort(function(r,n){return parseInt(n.id)-parseInt(r.id)});let o=t[t.length-1];return e.id=(parseInt(o.id,10)-1).toString(),q.push(e),()=>q=q.filter(({id:r})=>r!==e.id)}var We={};v(We,{evalPlugin:()=>Pt,fetchPlugin:()=>le,getSettings:()=>Ke,initPlugins:()=>He,installPlugin:()=>$e,plugins:()=>u,removePlugin:()=>Ge,startPlugin:()=>X,stopPlugin:()=>Y});var je={};v(je,{awaitSyncWrapper:()=>Ue,createFileBackend:()=>ke,createMMKVBackend:()=>G,createProxy:()=>Rt,createStorage:()=>L,useProxy:()=>P,wrapSync:()=>H});var Yt=Object.freeze({GET:"GET",SET:"SET",DEL:"DEL"});function Oe(){return{listeners:Object.values(Yt).reduce((e,t)=>(e[t]=new Set,e),{}),on(e,t){this.listeners[e].has(t)||this.listeners[e].add(t)},off(e,t){this.listeners[e].delete(t)},once(e,t){let o=(r,n)=>{this.off(r,o),t(r,n)};this.on(e,o)},emit(e,t){for(let o of this.listeners[e])o(e,t)}}}var wt=l.NativeModules.MMKVManager,Q=l.NativeModules.DCDFileManager,xt=l.Platform.select({default:e=>e,ios:e=>`Documents/${e}`}),G=e=>({get:async function(){return JSON.parse(await wt.getItem(e)??"{}")},set:t=>wt.setItem(e,JSON.stringify(t))}),ke=e=>{let t;return{get:async function(){let o=`${Q.getConstants().DocumentsDirPath}/${e}`;return!t&&!await Q.fileExists(o)?(t=!0,Q.writeFile("documents",xt(e),"{}","utf8")):JSON.parse(await Q.readFile(o,"utf8"))},set:o=>void Q.writeFile("documents",xt(e),JSON.stringify(o),"utf8")}};var Zo=l.NativeModules.MMKVManager,St=Symbol("emitter accessor"),Tt=Symbol("wrapSync promise accessor");function Rt(e={}){let t=Oe();function o(r,n){return new Proxy(r,{get(i,s){if(s===St)return t;let a=[...n,s],m=i[s];return m!=null?(t.emit("GET",{path:a,value:m}),typeof m=="object"?o(m,a):m):m},set(i,s,a){return i[s]=a,t.emit("SET",{path:[...n,s],value:a}),!0},deleteProperty(i,s){let a=delete i[s];return a&&t.emit("DEL",{path:[...n,s]}),a}})}return{proxy:o(e,[]),emitter:t}}function P(e){let t=e[St],[,o]=React.useReducer(r=>~r,0);return React.useEffect(()=>{let r=()=>o();return t.on("SET",r),t.on("DEL",r),()=>{t.off("SET",r),t.off("DEL",r)}},[]),e}async function L(e){let t=await e.get(),{proxy:o,emitter:r}=Rt(t),n=()=>e.set(o);return r.on("SET",n),r.on("DEL",n),o}function H(e){let t,o=[],r=n=>t?n():o.push(n);return e.then(n=>{t=n,o.forEach(i=>i())}),new Proxy({},{...Object.fromEntries(Object.getOwnPropertyNames(Reflect).map(n=>[n,(i,...s)=>Reflect[n](t??i,...s)])),get(n,i,s){return i===Tt?r:Reflect.get(t??n,i,s)}})}var Ue=e=>new Promise(t=>e[Tt](t));async function K(e,t){let o=await fetch(e,t);if(!o.ok)throw new Error("Request returned non-ok");return o}var u=H(L(G("VENDETTA_PLUGINS"))),B={};async function le(e){e.endsWith("/")||(e+="/");let t=u[e],o;try{o=await(await K(e+"manifest.json",{cache:"no-store"})).json()}catch{throw new Error(`Failed to fetch manifest for ${e}`)}let r;if(t?.manifest.hash!==o.hash)try{r=await(await K(e+(o.main||"index.js"),{cache:"no-store"})).text()}catch{}if(!r&&!t)throw new Error(`Failed to fetch JS for ${e}`);u[e]={id:e,manifest:o,enabled:t?.enabled??!1,update:t?.update??!0,js:r??t.js}}async function $e(e,t=!0){if(e.endsWith("/")||(e+="/"),typeof e!="string"||e in u)throw new Error("Plugin already installed");await le(e),t&&await X(e)}async function Pt(e){let t={...window.vendetta,plugin:{id:e.id,manifest:e.manifest,storage:await L(G(e.id))},logger:new Ae(`Vendetta \xBB ${e.manifest.name}`)},o=`vendetta=>{return ${e.js}}
//# sourceURL=${e.id}`,r=(0,eval)(o)(t),n=typeof r=="function"?r():r;return n.default||n}async function X(e){e.endsWith("/")||(e+="/");let t=u[e];if(!t)throw new Error("Attempted to start non-existent plugin");try{let o=await Pt(t);B[e]=o,o.onLoad?.(),t.enabled=!0}catch(o){h.error(`Plugin ${t.id} errored whilst loading, and will be unloaded`,o);try{B[t.id]?.onUnload?.()}catch(r){h.error(`Plugin ${t.id} errored whilst unloading`,r)}delete B[e],t.enabled=!1}}function Y(e,t=!0){e.endsWith("/")||(e+="/");let o=u[e],r=B[e];if(!o)throw new Error("Attempted to stop non-existent plugin");if(!r)throw new Error("Attempted to stop a non-started plugin");try{r.onUnload?.()}catch(n){h.error(`Plugin ${o.id} errored whilst unloading`,n)}delete B[e],t&&(o.enabled=!1)}function Ge(e){e.endsWith("/")||(e+="/"),u[e].enabled&&Y(e),delete u[e]}async function He(){await Ue(u);let e=Object.keys(u);return await Promise.allSettled(e.filter(t=>u[t].enabled&&u[t].update).map(t=>le(t))),await Promise.allSettled(e.filter(t=>u[t].enabled).map(t=>X(t))),e.filter(t=>!u[t].enabled&&u[t].update).forEach(t=>le(t)),Zt}var Zt=()=>Object.keys(B).forEach(e=>Y(e,!1)),Ke=e=>B[e]?.settings;function Z(e,t,{walkable:o=[],ignore:r=[],maxDepth:n=100}={}){let i=0;function s(a,m,{walkable:b=[],ignore:N=[]}={}){if(i+=1,!(i>n)){if(typeof m=="string"){if(a.hasOwnProperty(m))return a[m]}else if(m(a))return a;if(a){if(Array.isArray(a))for(let k of a){let S=s(k,m,{walkable:b,ignore:N});if(S)return S}else if(typeof a=="object"){for(let k of Object.keys(a))if(!(b!=null&&b.includes(k))&&!N.includes(k))try{let S=s(a[k],m,{walkable:b,ignore:N});if(S)return S}catch{}}}}}return s(e,t,{walkable:o,ignore:r})}var me=(e,t)=>Z(e,t,{walkable:["props","children","child","sibling"]});var Je={};v(Je,{Forms:()=>p,General:()=>ee,Search:()=>ze,Summary:()=>W});function W({label:e,icon:t,noPadding:o=!1,children:r}){let[n,i]=React.useState(!0);return React.createElement(React.Fragment,null,React.createElement(p.FormRow,{label:e,leading:t&&React.createElement(p.FormRow.Icon,{source:c(t)}),trailing:React.createElement(p.FormRow.Arrow,{style:{transform:[{rotate:`${n?180:90}deg`}]},source:c("down_arrow")}),onPress:()=>i(!n)}),!n&&React.createElement(React.Fragment,null,React.createElement(p.FormDivider,null),React.createElement(l.View,{style:!o&&{paddingHorizontal:15}},r)))}var p=d("Form","FormSection"),ee=d("Button","Text","View"),ze=$("StaticSearchBarContainer");var g=H(L(G("VENDETTA_SETTINGS"))),T=H(L(ke("vendetta_loader.json")));var{FormRow:I,FormSection:eo,FormDivider:_t}=p;function qe(){let e=D.useNavigation();return P(g),React.createElement(eo,{key:"Vendetta",title:"Vendetta"},React.createElement(I,{label:"General",leading:React.createElement(I.Icon,{source:c("settings")}),trailing:I.Arrow,onPress:()=>e.push("VendettaSettings")}),React.createElement(_t,null),React.createElement(I,{label:"Plugins",leading:React.createElement(I.Icon,{source:c("debug")}),trailing:I.Arrow,onPress:()=>e.push("VendettaPlugins")}),g.developerSettings&&React.createElement(React.Fragment,null,React.createElement(_t,null),React.createElement(I,{label:"Developer",leading:React.createElement(I.Icon,{source:c("ic_progress_wrench_24px")}),trailing:I.Arrow,onPress:()=>e.push("VendettaDeveloper")})))}var Ye={};v(Ye,{DISCORD_SERVER:()=>Qe,GITHUB:()=>Xe});var Qe="n9QQ4XhhJP",Xe="https://github.com/vendetta-mod";function F(e){try{Se.setString(e)}catch{throw new Error("Failed to set clipboard content.")}}var{FormRow:Dt,FormText:to}=p;function de({label:e,version:t,icon:o}){return React.createElement(Dt,{label:e,leading:React.createElement(Dt.Icon,{source:c(o)}),trailing:React.createElement(to,null,t),onPress:()=>{F(`${e} - ${t}`),f("Copied version to clipboard.",c("toast_copy_link"))}})}var{FormRow:A,FormSwitchRow:oo,FormSection:Ze,FormDivider:te}=p,y=Ce();function et(){P(g);let e=[{label:"Vendetta",version:y.vendetta.version,icon:"ic_progress_wrench_24px"},{label:"Discord",version:`${y.discord.version} (${y.discord.build})`,icon:"Discord"},{label:"React",version:y.react.version,icon:"ic_category_16px"},{label:"React Native",version:y.react.nativeVersion,icon:"mobile"},{label:"Bytecode",version:y.hermes.bytecodeVersion,icon:"ic_server_security_24px"}],t=[{label:"Loader",version:y.vendetta.loader,icon:"ic_download_24px"},{label:"Operating System",version:`${y.os.name} ${y.os.version}`,icon:"ic_cog_24px"},...y.os.sdk?[{label:"SDK",version:y.os.sdk,icon:"ic_profile_badge_verified_developer_color"}]:[],{label:"Manufacturer",version:y.device.manufacturer,icon:"ic_badge_staff"},{label:"Brand",version:y.device.brand,icon:"ic_settings_boost_24px"},{label:"Model",version:y.device.model,icon:"ic_phonelink_24px"},{label:l.Platform.select({android:"Codename",ios:"Machine ID"}),version:y.device.codename,icon:"ic_compose_24px"}];return React.createElement(l.ScrollView,{style:{flex:1},contentContainerStyle:{paddingBottom:38}},React.createElement(Ze,{title:"Links",titleStyleType:"no_border"},React.createElement(A,{label:"Discord Server",leading:React.createElement(A.Icon,{source:c("Discord")}),trailing:A.Arrow,onPress:()=>Te.acceptInviteAndTransitionToInviteChannel({inviteKey:Qe})}),React.createElement(te,null),React.createElement(A,{label:"GitHub",leading:React.createElement(A.Icon,{source:c("img_account_sync_github_white")}),trailing:A.Arrow,onPress:()=>we.openURL(Xe)})),React.createElement(Ze,{title:"Actions"},React.createElement(A,{label:"Reload Discord",leading:React.createElement(A.Icon,{source:c("ic_message_retry")}),onPress:()=>l.NativeModules.BundleUpdaterManager.reload()}),React.createElement(te,null),React.createElement(oo,{label:"Developer Settings",leading:React.createElement(A.Icon,{source:c("ic_progress_wrench_24px")}),value:g.developerSettings,onValueChange:o=>{g.developerSettings=o}})),React.createElement(Ze,{title:"Info"},React.createElement(W,{label:"Versions",icon:"ic_information_filled_24px"},e.map((o,r)=>React.createElement(React.Fragment,null,React.createElement(de,{label:o.label,version:o.version,icon:o.icon}),r!==e.length-1&&React.createElement(te,null)))),React.createElement(te,null),React.createElement(W,{label:"Platform",icon:"ic_mobile_device"},t.map((o,r)=>React.createElement(React.Fragment,null,React.createElement(de,{label:o.label,version:o.version,icon:o.icon}),r!==t.length-1&&React.createElement(te,null))))))}var Et=d("SemanticColorsByThemeTable"),pe=Et?.SemanticColor??V.ThemeColorMap,Ur=Et?.RawColor??V.Colors;var ro=d("show","openLazy","close"),{FormRow:tt,FormSwitch:no}=p,{TouchableOpacity:fe,Image:ue}=ee,O=_.createThemedStyleSheet({card:{backgroundColor:pe?.BACKGROUND_SECONDARY,borderRadius:5,marginHorizontal:10,marginBottom:10},header:{padding:0,backgroundColor:pe?.BACKGROUND_TERTIARY,borderTopLeftRadius:5,borderTopRightRadius:5},actions:{flexDirection:"row-reverse",alignItems:"center"},icon:{width:22,height:22,marginLeft:5,tintColor:pe?.INTERACTIVE_NORMAL}});function ot({plugin:e}){let t=Ke(e.id),o=D.useNavigation(),[r,n]=React.useState(!1);return r?null:React.createElement(l.View,{style:O.card},React.createElement(tt,{style:O.header,label:`${e.manifest.name} by ${e.manifest.authors.map(i=>i.name).join(", ")}`,leading:React.createElement(tt.Icon,{source:c(e.manifest.vendetta?.icon||"ic_application_command_24px")}),trailing:React.createElement(no,{style:l.Platform.OS==="android"&&{marginVertical:-15},value:e.enabled,onValueChange:i=>{try{i?X(e.id):Y(e.id)}catch(s){f(s.message,c("Small"))}}})}),React.createElement(tt,{label:e.manifest.description,trailing:React.createElement(l.View,{style:O.actions},React.createElement(fe,{onPress:()=>ro.show({title:"Wait!",body:`Are you sure you wish to delete ${e.manifest.name}?`,confirmText:"Delete",cancelText:"Cancel",confirmColor:"red",onConfirm:()=>{try{Ge(e.id),n(!0)}catch(i){f(i.message,c("Small"))}}})},React.createElement(ue,{style:O.icon,source:c("ic_message_delete")})),React.createElement(fe,{onPress:()=>{F(e.id),f("Copied plugin URL to clipboard.",c("toast_copy_link"))}},React.createElement(ue,{style:O.icon,source:c("copy")})),React.createElement(fe,{onPress:()=>{e.update=!e.update,f(`${e.update?"Enabled":"Disabled"} updates for ${e.manifest.name}.`,c("toast_image_saved"))}},React.createElement(ue,{style:O.icon,source:c(e.update?"Check":"Small")})),t&&React.createElement(fe,{onPress:()=>o.push("VendettaCustomPage",{title:e.manifest.name,render:t})},React.createElement(ue,{style:O.icon,source:c("settings")})))}))}var{FormInput:io,FormRow:It}=p;function rt(){P(u);let[e,t]=React.useState("");return React.createElement(l.View,{style:{flex:1}},React.createElement(io,{value:e,onChange:o=>t(o),placeholder:"https://example.com/",title:"PLUGIN URL"}),React.createElement(It,{label:"Install plugin",leading:React.createElement(It.Icon,{source:c("ic_add_24px")}),onPress:()=>{$e(e).then(()=>{t("")}).catch(o=>{f(o.message,c("Small"))})}}),React.createElement(l.FlatList,{style:{marginTop:10},data:Object.values(u),renderItem:({item:o})=>React.createElement(ot,{plugin:o}),keyExtractor:o=>o.id}))}var{FormSection:nt,FormRow:M,FormSwitchRow:Ft,FormInput:At,FormDivider:ge}=p,{Text:un}=ee,gn=_.createThemedStyleSheet({code:{fontFamily:V.Fonts.CODE_SEMIBOLD,includeFontPadding:!1,fontSize:12}});function it(){let e=D.useNavigation();return P(g),P(T),React.createElement(l.ScrollView,{style:{flex:1},contentContainerStyle:{paddingBottom:38}},React.createElement(nt,{title:"Debug",titleStyleType:"no_border"},React.createElement(At,{value:g.debuggerUrl,onChange:t=>g.debuggerUrl=t,placeholder:"127.0.0.1:9090",title:"DEBUGGER URL"}),React.createElement(ge,null),React.createElement(M,{label:"Connect to debug websocket",leading:React.createElement(M.Icon,{source:c("copy")}),onPress:()=>Me(g.debuggerUrl)}),window.__vendetta_rdc&&React.createElement(React.Fragment,null,React.createElement(ge,null),React.createElement(M,{label:"Connect to React DevTools",leading:React.createElement(M.Icon,{source:c("ic_badge_staff")}),onPress:()=>{try{window.__vendetta_rdc?.connectToDevTools({host:g.debuggerUrl.split(":")?.[0],resolveRNStyle:l.StyleSheet.flatten})}catch(t){h.error("Failed to connect to React DevTools!",t),f("Failed to connect to React DevTools!",c("Small"))}}}))),window.__vendetta_loader?.features.loaderConfig&&React.createElement(nt,{title:"Loader config"},React.createElement(Ft,{label:"Load from custom url",subLabel:"Load Vendetta from a custom endpoint.",leading:React.createElement(M.Icon,{source:c("copy")}),value:T.customLoadUrl.enabled,onValueChange:t=>{T.customLoadUrl.enabled=t}}),React.createElement(ge,null),T.customLoadUrl.enabled&&React.createElement(React.Fragment,null,React.createElement(At,{value:T.customLoadUrl.url,onChange:t=>T.customLoadUrl.url=t,placeholder:"http://localhost:4040/vendetta.js",title:"VENDETTA URL"}),React.createElement(ge,null)),window.__vendetta_loader.features.devtools&&React.createElement(Ft,{label:"Load React DevTools",subLabel:`Version: ${window.__vendetta_loader.features.devtools.version}`,leading:React.createElement(M.Icon,{source:c("ic_badge_staff")}),value:T.loadReactDevTools,onValueChange:t=>{T.loadReactDevTools=t}})),React.createElement(nt,{title:"Other"},React.createElement(M,{label:"Asset Browser",leading:React.createElement(M.Icon,{source:c("ic_media_upload")}),trailing:M.Arrow,onPress:()=>e.push("VendettaAssetBrowser")})))}var{FormRow:so}=p,ao=_.createThemedStyleSheet({asset:{width:32,height:32}});function st({asset:e}){return React.createElement(so,{label:`${e.name} - ${e.id}`,trailing:React.createElement(l.Image,{source:e.id,style:ao.asset}),onPress:()=>{F(e.name),f("Copied asset name to clipboard.",c("toast_copy_link"))}})}var{FormDivider:co}=p,lo=_.createThemedStyleSheet({search:{margin:0,padding:15,borderBottomWidth:0,background:"none",backgroundColor:"none"}});function at(){let[e,t]=React.useState("");return React.createElement(l.View,{style:{flex:1}},React.createElement(ze,{style:lo.search,onChangeText:o=>t(o),placeholder:"Search"}),React.createElement(l.FlatList,{data:Object.values(E).filter(o=>o.name.includes(e)||o.id.toString()===e),renderItem:({item:o})=>React.createElement(React.Fragment,null,React.createElement(st,{asset:o}),React.createElement(co,null)),keyExtractor:o=>o.name}))}var mo=$("getScreens",!1),po=$("UserSettingsOverviewWrapper",!1);function ct(){let e=new Array;return e.push(w("default",mo,(t,o)=>({...o,VendettaSettings:{title:"Vendetta",render:et},VendettaPlugins:{title:"Plugins",render:rt},VendettaDeveloper:{title:"Developer",render:it},VendettaAssetBrowser:{title:"Asset Browser",render:at},VendettaCustomPage:{title:"Vendetta Page",render:({render:r,...n})=>{let i=D.useNavigation();return React.useEffect(()=>n&&i.setOptions(n)),React.createElement(r,null)}}}))),w("default",po,(t,o)=>{let r=me(o.props.children,n=>n.type&&n.type.name==="UserSettingsOverview");e.push(w("renderSupportAndAcknowledgements",r.type.prototype,(n,{props:{children:i}})=>{let s=i.findIndex(a=>a?.type?.name==="UploadLogsButton");s!==-1&&i.splice(s,1)})),e.push(w("render",r.type.prototype,(n,{props:{children:i}})=>{let s=[ne.Messages.BILLING_SETTINGS,ne.Messages.PREMIUM_SETTINGS],a=i.findIndex(m=>s.includes(m.props.title));i.splice(a===-1?4:a,0,React.createElement(qe,null))}))},!0),()=>e.forEach(t=>t())}var fo=d("updateTheme","overrideTheme"),Mt=d("setAMOLEDThemeEnabled"),Nt=re("ThemeStore"),uo=re("UnsyncedUserSettingsStore");function Ct(){let e=Nt.theme||"dark";fo.overrideTheme(e),Mt&&uo.useAMOLEDTheme===2&&Mt.setAMOLEDThemeEnabled(!0),se.unsubscribe("I18N_LOAD_START",Ct)}function lt(){try{Nt&&se.subscribe("I18N_LOAD_START",Ct)}catch(e){h.error("Failed to fix theme...",e)}}var dt={};v(dt,{copyText:()=>F,findInReactTree:()=>me,findInTree:()=>Z,safeFetch:()=>K,unfreeze:()=>mt});function mt(e){return Object.isFrozen(e)?Object.assign({},e):e}function ye(e,...t){let o={...e};return t.forEach(r=>delete o[r]),o}async function pt(e){return{patcher:ye(vt,"unpatchAll"),metro:{...ve,common:{...Re}},constants:Ye,utils:dt,debug:ye(Ve,"versionHash","patchLogHook"),ui:{components:Je,toasts:Fe,assets:Ie},plugins:ye(We,"initPlugins"),commands:ye(Be,"patchCommands"),storage:je,settings:g,loader:{identity:window.__vendetta_loader,config:T},logger:h,version:ce,unload:()=>{e.filter(t=>typeof t=="function").forEach(t=>t()),delete window.vendetta}}}console.log("Hello from Vendetta!");async function go(){try{let e=await Promise.all([Ne(),Ee(),Le(),lt(),ct()]);window.vendetta=await pt(e),e.push(await He()),h.log("Vendetta is ready!")}catch(e){alert(`Vendetta failed to initialize... ${e.stack||e.toString()}`)}}go();})();
//# sourceURL=Vendetta