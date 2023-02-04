"use strict";(()=>{var Pt=Object.defineProperty;var T=(e,t)=>{for(var o in t)Pt(e,o,{get:t[o],enumerable:!0})};var Me={};T(Me,{connectToDebugger:()=>De,getDebugInfo:()=>Ce,patchLogHook:()=>Ne,socket:()=>w,versionHash:()=>ne});var Te={};T(Te,{Flux:()=>Nt,FluxDispatcher:()=>oe,NavigationNative:()=>G,React:()=>Ct,ReactNative:()=>m,assets:()=>$,channels:()=>Dt,clipboard:()=>Se,constants:()=>q,i18n:()=>te,invites:()=>we,navigation:()=>C,navigationStack:()=>xe,stylesheet:()=>p,toasts:()=>ve,url:()=>be});var ye={};T(ye,{find:()=>k,findAll:()=>he,findByDisplayName:()=>B,findByDisplayNameAll:()=>_t,findByProps:()=>d,findByPropsAll:()=>At,findByStoreName:()=>ee,modules:()=>ge});var Q=e=>Object.values(window.modules).find(t=>t.publicModule.exports?.[e]).publicModule.exports;window.React=Q("createElement");var m=Q("Text"),q=Q("ThemeColorMap"),Z=Q("isMoment");function nt(e){Object.defineProperty(window.modules,e,{value:window.modules[e],enumerable:!1,configurable:!0,writable:!0})}for(let e in window.modules){let t=Number(e),o=window.modules[t].publicModule.exports;if(!o||o===window||o.proxygone===null){nt(t);continue}}var it=(e,t=!1)=>o=>{let r=[],n=Z?.locale();for(let i in e){let a=Number(i),s=e[a].publicModule.exports;if(!e[a].isInitialized)try{__r(a),n&&n!==Z.locale()&&Z.locale(n)}catch{}if(!s){nt(a);continue}try{if(s.default&&s.__esModule&&o(s.default)){if(t)return s.default;r.push(s.default)}if(o(s)){if(t)return s;r.push(s)}}catch(l){console.error(`Failed to getModule... ${l.stack||l.toString()}`)}}if(!t)return r},ge=window.modules,k=it(ge,!0),he=it(ge),st=e=>t=>e.every(o=>t[o]!==void 0),at=(e,t)=>t?o=>o.name===e:o=>o?.default?.name===e,d=(...e)=>k(st(e)),At=(...e)=>he(st(e)),B=(e,t=!0)=>k(at(e,t)),_t=(e,t=!0)=>he(at(e,t)),ee=e=>k(t=>t.getName?.()===e);var Dt=d("getVoiceChannelId"),te=d("Messages"),be=d("openURL"),ve=k(e=>e.open&&e.close&&!e.startDrag&&!e.init&&!e.openReplay&&!e.setAlwaysOnTop),p=d("createThemedStyleSheet"),Se=d("setString","getString","hasString"),$=d("registerAsset"),we=d("acceptInviteAndTransitionToInviteChannel"),C=d("pushLazy"),xe=d("createStackNavigator"),G=d("NavigationContainer"),Nt=d("connectStores"),oe=d("_currentDispatchActionType"),Ct=window.React;var Ie={};T(Ie,{after:()=>S,before:()=>Mt,instead:()=>Ft,unpatchAll:()=>lt});var Re=["a","b","i"],R=new Map;function ct(e,t,o,r,n){let i=R.get(t)?.[e];if(!i)return n?Reflect.construct(t[e],o,r):t[e].apply(r,o);for(let l of i.b.values()){let v=l.call(r,o);Array.isArray(v)&&(o=v)}let a=(...l)=>n?Reflect.construct(i.o,l,r):i.o.apply(r,l);for(let l of i.i.values()){let v=a;a=(...D)=>l.call(r,D,v)}let s=a(...o);for(let l of i.a.values())s=l.call(r,o,s)??s;return s}function Ee(e,t,o,r){let n=R.get(e),i=n?.[t];return i?.[r].has(o)?(i[r].delete(o),Re.every(a=>i[a].size===0)&&(Reflect.defineProperty(e,t,{value:i.o,writable:!0,configurable:!0})||(e[t]=i.o),delete n[t]),Object.keys(n).length==0&&R.delete(e),!0):!1}function lt(){for(let[e,t]of R.entries())for(let o in t)for(let r of Re)for(let n of t[o]?.[r].keys()??[])Ee(e,o,n,r)}var re=e=>(t,o,r,n=!1)=>{if(typeof o[t]!="function")throw new Error(`${t} is not a function in ${o.constructor.name}`);R.has(o)||R.set(o,{});let i=R.get(o);if(!i[t]){let l=o[t];i[t]={o:l,b:new Map,i:new Map,a:new Map};let v=(x,N,j)=>{let It=ct(t,o,N,x,j);return n&&s(),It},D=new Proxy(l,{apply:(x,N,j)=>v(N,j,!1),construct:(x,N)=>v(l,N,!0),get:(x,N,j)=>N=="toString"?l.toString.bind(l):Reflect.get(x,N,j)});Reflect.defineProperty(o,t,{value:D,configurable:!0,writable:!0})||(o[t]=D)}let a=Symbol(),s=()=>Ee(o,t,a,e);return i[t][e].set(a,r),s};var Mt=re("b"),Ft=re("i"),S=re("a");var mt={...Ie};var Ae={};T(Ae,{all:()=>E,find:()=>Ot,getAssetByID:()=>kt,getAssetByName:()=>Lt,getAssetIDByName:()=>c,patchAssets:()=>Pe});var E={};function Pe(){let e=S("registerAsset",$,(t,o)=>{let r=t[0];E[r.name]={...r,id:o}});for(let t=1;;t++){let o=$.getAssetByID(t);if(!o)break;E[o.name]||(E[o.name]={...o,id:t})}return e}var Ot=e=>Object.values(E).find(e),Lt=e=>E[e],kt=e=>$.getAssetByID(e),c=e=>E[e]?.id;var _e={};T(_e,{showToast:()=>u});function u(e,t){return ve.open({content:e,source:t})}var Bt=d("setLogFn").default,Vt=new Bt("Vendetta"),g=Vt;var w;function De(e){if(w!==void 0&&w.readyState!==WebSocket.CLOSED&&w.close(),e===""){u("Invalid debugger URL!",c("Small"));return}w=new WebSocket(`ws://${e}`),w.addEventListener("open",()=>u("Connected to debugger.",c("Check"))),w.addEventListener("message",t=>{try{(0,eval)(t.data)}catch(o){console.error(o)}}),w.addEventListener("error",t=>{console.log(`Debugger error: ${t.message}`),u("An error occurred with the debugger connection!",c("Small"))})}function Ne(){let e=S("nativeLoggingHook",globalThis,t=>{w?.readyState===WebSocket.OPEN&&w.send(JSON.stringify({message:t[0],level:t[1]})),g.log(t[0])});return()=>{w&&w.close(),e()}}var ne="0ba9ee6";function Ce(){let e=m.NativeModules.InfoDictionaryManager,t=m.NativeModules.DCDDeviceManager,o=window.HermesInternal.getRuntimeProperties(),r=o["OSS Release Version"],n="for RN ",i=m.Platform.constants,a=i.reactNativeVersion;return{vendetta:{version:ne},discord:{version:e.Version,build:e.Build},react:{version:React.version,nativeVersion:r.startsWith(n)?r.substring(n.length):`${a.major}.${a.minor}.${a.patch}`},hermes:{version:r,buildType:o.Build,bytecodeVersion:o["Bytecode Version"]},...m.Platform.select({android:{os:{name:"Android",version:i.Release,sdk:i.Version}},ios:{os:{name:i.systemName,version:i.osVersion}}}),...m.Platform.select({android:{device:{manufacturer:i.Manufacturer,brand:i.Brand,model:i.Model,codename:t.device}},ios:{device:{manufacturer:t.deviceManufacturer,brand:t.deviceBrand,model:t.deviceModel,codename:t.device}}})}}var Oe={};T(Oe,{patchCommands:()=>Fe,registerCommand:()=>Ut});var dt=d("getBuiltInCommands"),H=[];function Fe(){let e=S("getBuiltInCommands",dt,(t,o)=>o.concat(H));return()=>{H=[],e()}}function Ut(e){let t=dt.getBuiltInCommands(1,!0,!1);t.sort(function(r,n){return parseInt(n.id)-parseInt(r.id)});let o=t[t.length-1];return e.id=(parseInt(o.id,10)-1).toString(),H.push(e),()=>H=H.filter(({id:r})=>r!==e.id)}var Ge={};T(Ge,{evalPlugin:()=>yt,fetchPlugin:()=>ie,getSettings:()=>se,initPlugins:()=>$e,plugins:()=>y,removePlugin:()=>je,showSettings:()=>ae,startPlugin:()=>Y,stopPlugin:()=>z});var Be={};T(Be,{awaitSyncWrapper:()=>ke,createProxy:()=>gt,createStorage:()=>V,useProxy:()=>I,wrapSync:()=>K});var jt=Object.freeze({GET:"GET",SET:"SET",DEL:"DEL"});function Le(){return{listeners:Object.values(jt).reduce((e,t)=>(e[t]=new Set,e),{}),on(e,t){this.listeners[e].has(t)||this.listeners[e].add(t)},off(e,t){this.listeners[e].delete(t)},once(e,t){let o=(r,n)=>{this.off(r,o),t(r,n)};this.on(e,o)},emit(e,t){for(let o of this.listeners[e])o(e,t)}}}var pt=m.NativeModules.MMKVManager,ft=Symbol("emitter accessor"),ut=Symbol("wrapSync promise accessor");function gt(e={}){let t=Le();function o(r,n){return new Proxy(r,{get(i,a){if(a===ft)return t;let s=[...n,a],l=i[a];return l!=null?(t.emit("GET",{path:s,value:l}),typeof l=="object"?o(l,s):l):l},set(i,a,s){return i[a]=s,t.emit("SET",{path:[...n,a],value:s}),!0},deleteProperty(i,a){let s=delete i[a];return s&&t.emit("DEL",{path:[...n,a]}),s}})}return{proxy:o(e,[]),emitter:t}}function I(e){let t=e[ft],[,o]=React.useReducer(r=>~r,0);return React.useEffect(()=>{let r=()=>o();return t.on("SET",r),t.on("DEL",r),()=>{t.off("SET",r),t.off("DEL",r)}},[]),e}async function V(e){let t=JSON.parse(await pt.getItem(e)??"{}"),{proxy:o,emitter:r}=gt(t),n=()=>pt.setItem(e,JSON.stringify(o));return r.on("SET",n),r.on("DEL",n),o}function K(e){let t,o=[],r=n=>t?n():o.push(n);return e.then(n=>{t=n,o.forEach(i=>i())}),new Proxy({},{...Object.fromEntries(Object.getOwnPropertyNames(Reflect).map(n=>[n,(i,...a)=>Reflect[n](t??i,...a)])),get(n,i,a){return i===ut?r:Reflect.get(t??n,i,a)}})}var ke=e=>new Promise(t=>e[ut](t));var Ue={};T(Ue,{Forms:()=>f,General:()=>W,Search:()=>Ve});var f=d("Form","FormSection"),W=d("Button","Text","View"),Ve=B("StaticSearchBarContainer");var U=p.createThemedStyleSheet({container:{backgroundColor:p.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,flex:1},card:{backgroundColor:p.ThemeColorMap.BACKGROUND_MOBILE_PRIMARY,color:p.ThemeColorMap.TEXT_NORMAL},header:{backgroundColor:p.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},headerTitleContainer:{color:p.ThemeColorMap.HEADER_PRIMARY},headerTitle:{fontFamily:q.Fonts.PRIMARY_BOLD,color:p.ThemeColorMap.HEADER_PRIMARY},backIcon:{tintColor:p.ThemeColorMap.INTERACTIVE_ACTIVE,marginLeft:15,marginRight:20}}),ht=xe.createStackNavigator(),{TouchableOpacity:$t,Image:Gt}=W;function J({name:e,children:t}){return React.createElement(G.NavigationContainer,{independent:!0},React.createElement(ht.Navigator,{initialRouteName:e,style:U.container,screenOptions:{cardOverlayEnabled:!1,cardShadowEnabled:!1,cardStyle:U.card,headerStyle:U.header,headerTitleContainerStyle:U.headerTitleContainer}},React.createElement(ht.Screen,{name:e,component:t,options:{headerTitleStyle:U.headerTitle,headerLeft:()=>React.createElement($t,{onPress:()=>C.pop()},React.createElement(Gt,{style:U.backIcon,source:c("back-icon")}))}})))}var y=K(V("VENDETTA_PLUGINS")),M={};async function ie(e,t=!0){if(e.endsWith("/")||(e+="/"),typeof e!="string"||e in y)throw new Error("Plugin ID invalid or taken");let o;try{o=await(await fetch(e+"manifest.json",{cache:"no-store"})).json()}catch{throw new Error(`Failed to fetch manifest for ${e}`)}let r;try{r=await(await fetch(e+(o.main||"index.js"),{cache:"no-store"})).text()}catch{throw new Error(`Failed to fetch JS for ${e}`)}if(r.length===0)throw new Error(`Failed to fetch JS for ${e}`);y[e]={id:e,manifest:o,enabled:!1,update:!0,js:r},t&&await Y(e)}async function yt(e){let t={...window.vendetta,plugin:{manifest:e.manifest,storage:await V(e.id),showSettings:()=>ae(e)}},o=`vendetta=>{return ${e.js}}
//# sourceURL=${e.id}`,r=(0,eval)(o)(t),n=typeof r=="function"?r():r;return n.default||n}async function Y(e){let t=y[e];if(!t)throw new Error("Attempted to start non-existent plugin");try{let o=await yt(t);M[e]=o,o.onLoad?.(),t.enabled=!0}catch(o){g.error(`Plugin ${t.id} errored whilst loading, and will be unloaded`,o);try{M[t.id]?.onUnload?.()}catch(r){g.error(`Plugin ${t.id} errored whilst unloading`,r)}delete M[e],t.enabled=!1}}function z(e,t=!0){let o=y[e],r=M[e];if(!o)throw new Error("Attempted to stop non-existent plugin");if(!r)throw new Error("Attempted to stop a non-started plugin");try{M[o.id]?.onUnload?.()}catch(n){g.error(`Plugin ${o.id} errored whilst unloading`,n)}delete M[e],t&&(o.enabled=!1)}function je(e){y[e].enabled&&z(e),delete y[e]}async function $e(){await ke(y);let e=Object.keys(y);await Promise.allSettled(e.map(t=>ie(t,!1)));for(let t of e.filter(o=>y[o].enabled))Y(t);return Ht}var Ht=()=>Object.keys(y).forEach(e=>z(e,!1)),se=e=>M[e]?.settings;function ae(e){let t=se(e.id);if(!t)return g.error(`Plugin ${e.id} is not loaded or has no settings`);C.push(J,{name:e.manifest.name,children:t})}function X(e,t,{walkable:o=[],ignore:r=[],maxDepth:n=100}={}){let i=0;function a(s,l,{walkable:v=[],ignore:D=[]}={}){if(i+=1,!(i>n)){if(typeof l=="string"){if(s.hasOwnProperty(l))return s[l]}else if(l(s))return s;if(s){if(Array.isArray(s))for(let L of s){let x=a(L,l,{walkable:v,ignore:D});if(x)return x}else if(typeof s=="object"){for(let L of Object.keys(s))if(!(v!=null&&v.includes(L))&&!D.includes(L))try{let x=a(s[L],l,{walkable:v,ignore:D});if(x)return x}catch{}}}}}return a(e,t,{walkable:o,ignore:r})}var ce=(e,t)=>X(e,t,{walkable:["props","children","child","sibling"]});var h=K(V("VENDETTA_SETTINGS"));var{FormRow:P,FormSection:Kt,FormDivider:bt}=f;function He(){let e=G.useNavigation();return I(h),React.createElement(Kt,{key:"Vendetta",title:"Vendetta"},React.createElement(P,{label:"General",leading:React.createElement(P.Icon,{source:c("settings")}),trailing:P.Arrow,onPress:()=>e.push("VendettaSettings")}),React.createElement(bt,null),React.createElement(P,{label:"Plugins",leading:React.createElement(P.Icon,{source:c("debug")}),trailing:P.Arrow,onPress:()=>e.push("VendettaPlugins")}),h.developerSettings&&React.createElement(React.Fragment,null,React.createElement(bt,null),React.createElement(P,{label:"Developer",leading:React.createElement(P.Icon,{source:c("ic_progress_wrench_24px")}),trailing:P.Arrow,onPress:()=>e.push("VendettaDeveloper")})))}var Je={};T(Je,{DISCORD_SERVER:()=>Ke,GITHUB:()=>We});var Ke="n9QQ4XhhJP",We="https://github.com/vendetta-mod";function A(e){try{Se.setString(e)}catch{throw new Error("Failed to set clipboard content.")}}var{FormRow:vt,FormText:Wt}=f;function le({label:e,version:t,icon:o}){return React.createElement(vt,{label:e,leading:React.createElement(vt.Icon,{source:c(o)}),trailing:React.createElement(Wt,null,t),onPress:()=>{A(`${e} - ${t}`),u("Copied version to clipboard.",c("toast_copy_link"))}})}var{FormRow:_,FormSwitchRow:Jt,FormSection:me,FormDivider:de}=f,b=Ce();function Ye(){I(h);let e=[{label:"Vendetta",version:b.vendetta.version,icon:"ic_progress_wrench_24px"},{label:"Discord",version:`${b.discord.version} (${b.discord.build})`,icon:"Discord"},{label:"React",version:b.react.version,icon:"ic_category_16px"},{label:"React Native",version:b.react.nativeVersion,icon:"mobile"},{label:"Bytecode",version:b.hermes.bytecodeVersion,icon:"ic_server_security_24px"}],t=[{label:"Operating System",version:`${b.os.name} ${b.os.version}`,icon:"ic_cog_24px"},...b.os.sdk?[{label:"SDK",version:b.os.sdk,icon:"ic_profile_badge_verified_developer_color"}]:[],{label:"Manufacturer",version:b.device.manufacturer,icon:"ic_badge_staff"},{label:"Brand",version:b.device.brand,icon:"ic_settings_boost_24px"},{label:"Model",version:b.device.model,icon:"ic_phonelink_24px"},{label:m.Platform.select({android:"Codename",ios:"Machine ID"}),version:b.device.codename,icon:"ic_compose_24px"}];return React.createElement(m.ScrollView,{style:{flex:1},contentContainerStyle:{paddingBottom:38}},React.createElement(me,{title:"Links",titleStyleType:"no_border"},React.createElement(_,{label:"Discord Server",leading:React.createElement(_.Icon,{source:c("Discord")}),trailing:_.Arrow,onPress:()=>we.acceptInviteAndTransitionToInviteChannel({inviteKey:Ke})}),React.createElement(de,null),React.createElement(_,{label:"GitHub",leading:React.createElement(_.Icon,{source:c("img_account_sync_github_white")}),trailing:_.Arrow,onPress:()=>be.openURL(We)})),React.createElement(me,{title:"Versions"},e.map(o=>React.createElement(React.Fragment,null,React.createElement(le,{label:o.label,version:o.version,icon:o.icon}),React.createElement(de,null)))),React.createElement(me,{title:"Platform Info"},t.map(o=>React.createElement(React.Fragment,null,React.createElement(le,{label:o.label,version:o.version,icon:o.icon}),React.createElement(de,null)))),React.createElement(me,{title:"Actions"},React.createElement(_,{label:"Reload Discord",leading:React.createElement(_.Icon,{source:c("ic_message_retry")}),onPress:()=>m.NativeModules.BundleUpdaterManager.reload()}),React.createElement(de,null),React.createElement(Jt,{label:"Developer Settings",leading:React.createElement(_.Icon,{source:c("ic_progress_wrench_24px")}),value:h.developerSettings,onValueChange:o=>{h.developerSettings=o}})))}var{FormRow:ze,FormSwitch:Yt}=f,{TouchableOpacity:pe,Image:fe}=W,F=p.createThemedStyleSheet({card:{backgroundColor:p.ThemeColorMap.BACKGROUND_SECONDARY,borderRadius:5,margin:10,marginTop:0},header:{backgroundColor:p.ThemeColorMap.BACKGROUND_TERTIARY,borderTopLeftRadius:5,borderTopRightRadius:5},actions:{justifyContent:"flex-end",flexDirection:"row-reverse",alignItems:"center"},icon:{width:22,height:22,marginLeft:5,tintColor:p.ThemeColorMap.INTERACTIVE_NORMAL}});function Xe({plugin:e}){let[t,o]=React.useState(!1);return t?null:React.createElement(m.View,{style:F.card},React.createElement(ze,{style:F.header,label:`${e.manifest.name} by ${e.manifest.authors.map(r=>r.name).join(", ")}`,leading:React.createElement(ze.Icon,{source:c(e.manifest.vendetta?.icon||"ic_application_command_24px")}),trailing:React.createElement(Yt,{value:e.enabled,onValueChange:r=>{r?Y(e.id):z(e.id)}})}),React.createElement(ze,{label:e.manifest.description,trailing:React.createElement(m.View,{style:F.actions},React.createElement(pe,{onPress:()=>{je(e.id),o(!0)}},React.createElement(fe,{style:F.icon,source:c("ic_message_delete")})),React.createElement(pe,{onPress:()=>{A(e.id),u("Copied plugin URL to clipboard.",c("toast_copy_link"))}},React.createElement(fe,{style:F.icon,source:c("copy")})),React.createElement(pe,{onPress:()=>{e.update=!e.update,u(`${e.update?"Enabled":"Disabled"} updates for ${e.manifest.name}.`,c("toast_image_saved"))}},React.createElement(fe,{style:F.icon,source:c(e.update?"Check":"Small")})),se(e.id)&&React.createElement(pe,{onPress:()=>ae(e)},React.createElement(fe,{style:F.icon,source:c("settings")})))}))}var{FormInput:zt,FormRow:St}=f;function Qe(){I(y);let[e,t]=React.useState("");return React.createElement(m.View,{style:{flex:1}},React.createElement(zt,{value:e,onChange:o=>t(o),placeholder:"https://example.com/",title:"PLUGIN URL"}),React.createElement(St,{label:"Install plugin",leading:React.createElement(St.Icon,{source:c("ic_add_18px")}),onPress:()=>{ie(e).then(()=>{t("")}).catch(o=>{u(o.message,c("Small"))})}}),React.createElement(m.FlatList,{style:{marginTop:10},data:Object.values(y),renderItem:({item:o})=>React.createElement(Xe,{plugin:o}),keyExtractor:o=>o.id}))}var{FormRow:Xt}=f,Qt=p.createThemedStyleSheet({asset:{width:32,height:32}});function qe({asset:e}){return React.createElement(Xt,{label:`${e.name} - ${e.id}`,trailing:React.createElement(m.Image,{source:e.id,style:Qt.asset}),onPress:()=>{A(e.name),u("Copied asset name to clipboard.",c("toast_copy_link"))}})}var{FormDivider:qt}=f,Zt=p.createThemedStyleSheet({search:{margin:0,padding:15,borderBottomWidth:0,background:"none",backgroundColor:"none"}});function Ze(){let[e,t]=React.useState("");return React.createElement(m.View,{style:{flex:1}},React.createElement(Ve,{style:Zt.search,onChangeText:o=>t(o),placeholder:"Search"}),React.createElement(m.FlatList,{data:Object.values(E).filter(o=>o.name.includes(e)||o.id.toString()===e),renderItem:({item:o})=>React.createElement(React.Fragment,null,React.createElement(qe,{asset:o}),React.createElement(qt,null)),keyExtractor:o=>o.name}))}var{FormSection:wt,FormRow:O,FormInput:eo,FormDivider:xt}=f;function et(){return I(h),React.createElement(m.ScrollView,{style:{flex:1},contentContainerStyle:{paddingBottom:38}},React.createElement(wt,{title:"Debug",titleStyleType:"no_border"},React.createElement(eo,{value:h.debuggerUrl,onChange:e=>h.debuggerUrl=e,placeholder:"127.0.0.1:9090",title:"DEBUGGER URL"}),React.createElement(xt,null),React.createElement(O,{label:"Connect to debug websocket",leading:React.createElement(O.Icon,{source:c("copy")}),onPress:()=>De(h.debuggerUrl)}),React.createElement(xt,null),window.__vendetta_rdc&&React.createElement(O,{label:"Connect to React DevTools",leading:React.createElement(O.Icon,{source:c("ic_badge_staff")}),onPress:()=>{try{window.__vendetta_rdc?.connectToDevTools({host:h.debuggerUrl.split(":")?.[0],resolveRNStyle:m.StyleSheet.flatten})}catch(e){g.error("Failed to connect to React DevTools!",e),u("Failed to connect to React DevTools!",c("Small"))}}})),React.createElement(wt,{title:"Other"},React.createElement(O,{label:"Asset Browser",leading:React.createElement(O.Icon,{source:c("ic_media_upload")}),trailing:O.Arrow,onPress:()=>C.push(J,{name:"Asset Browser",children:Ze})})))}var to=B("getScreens",!1),oo=B("UserSettingsOverviewWrapper",!1);function tt(){let e=new Array;return e.push(S("default",to,(t,o)=>({...o,VendettaSettings:{title:"Vendetta",render:Ye},VendettaPlugins:{title:"Plugins",render:Qe},VendettaDeveloper:{title:"Developer",render:et}}))),S("default",oo,(t,o)=>{let r=ce(o.props.children,n=>n.type&&n.type.name==="UserSettingsOverview");e.push(S("renderSupportAndAcknowledgements",r.type.prototype,(n,{props:{children:i}})=>{let a=i.findIndex(s=>s?.type?.name==="UploadLogsButton");a!==-1&&i.splice(a,1)})),e.push(S("render",r.type.prototype,(n,{props:{children:i}})=>{let a=[te.Messages.BILLING_SETTINGS,te.Messages.PREMIUM_SETTINGS],s=i.findIndex(l=>a.includes(l.props.title));i.splice(s===-1?4:s,0,React.createElement(He,null))}))},!0),()=>e.forEach(t=>t())}var ro=d("updateTheme","overrideTheme"),Tt=d("setAMOLEDThemeEnabled"),Rt=ee("ThemeStore"),no=ee("UnsyncedUserSettingsStore");function Et(){let e=Rt.theme||"dark";ro.overrideTheme(e),Tt&&no.useAMOLEDTheme===2&&Tt.setAMOLEDThemeEnabled(!0),oe.unsubscribe("I18N_LOAD_START",Et)}function ot(){try{Rt&&oe.subscribe("I18N_LOAD_START",Et)}catch(e){g.error("Failed to fix theme...",e)}}function ue(e,...t){let o={...e};return t.forEach(r=>delete o[r]),o}async function rt(e){return{patcher:ue(mt,"unpatchAll"),metro:{...ye,common:{...Te}},constants:{...Je},utils:{copyText:A,findInReactTree:ce,findInTree:X},debug:ue(Me,"versionHash","patchLogHook"),ui:{components:Ue,toasts:_e,assets:Ae},plugins:ue(Ge,"initPlugins"),commands:ue(Oe,"patchCommands"),storage:Be,settings:h,logger:g,version:ne,unload:()=>{e.filter(t=>typeof t=="function").forEach(t=>t()),delete window.vendetta}}}console.log("Hello from Vendetta!");async function io(){try{let e=await Promise.all([Ne(),Pe(),Fe(),ot(),tt()]);window.vendetta=await rt(e),e.push(await $e()),g.log("Vendetta is ready!")}catch(e){alert(`Vendetta failed to initialize... ${e.stack||e.toString()}`)}}io();})();
//# sourceURL=Vendetta