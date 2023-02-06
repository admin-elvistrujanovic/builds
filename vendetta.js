"use strict";(()=>{var Ft=Object.defineProperty;var b=(e,t)=>{for(var o in t)Ft(e,o,{get:t[o],enumerable:!0})};var Me={};b(Me,{connectToDebugger:()=>De,getDebugInfo:()=>Ie,patchLogHook:()=>_e,socket:()=>S,versionHash:()=>ie});var we={};b(we,{Flux:()=>Bt,FluxDispatcher:()=>re,NavigationNative:()=>D,React:()=>Ot,ReactNative:()=>d,assets:()=>W,channels:()=>Ct,clipboard:()=>ve,commands:()=>oe,constants:()=>Y,i18n:()=>te,invites:()=>be,navigation:()=>Vt,navigationStack:()=>Lt,stylesheet:()=>w,toasts:()=>ye,url:()=>he});var ge={};b(ge,{find:()=>k,findAll:()=>ue,findByDisplayName:()=>j,findByDisplayNameAll:()=>Nt,findByProps:()=>m,findByPropsAll:()=>At,findByStoreName:()=>ee,modules:()=>fe});var X=e=>Object.values(window.modules).find(t=>t.publicModule.exports?.[e]).publicModule.exports;window.React=X("createElement");var d=X("Text"),Y=X("ThemeColorMap"),Z=X("isMoment");function lt(e){Object.defineProperty(window.modules,e,{value:window.modules[e],enumerable:!1,configurable:!0,writable:!0})}for(let e in window.modules){let t=Number(e),o=window.modules[t].publicModule.exports;if(!o||o===window||o.proxygone===null){lt(t);continue}}var dt=(e,t=!1)=>o=>{let r=[],n=Z?.locale();for(let i in e){let a=Number(i),s=e[a].publicModule.exports;if(!e[a].isInitialized)try{__r(a),n&&n!==Z.locale()&&Z.locale(n)}catch{}if(!s){lt(a);continue}try{if(s.default&&s.__esModule&&o(s.default)){if(t)return s.default;r.push(s.default)}if(o(s)){if(t)return s;r.push(s)}}catch(l){console.error(`Failed to getModule... ${l.stack||l.toString()}`)}}if(!t)return r},fe=window.modules,k=dt(fe,!0),ue=dt(fe),mt=e=>t=>e.every(o=>t[o]!==void 0),pt=(e,t)=>t?o=>o.name===e:o=>o?.default?.name===e,m=(...e)=>k(mt(e)),At=(...e)=>ue(mt(e)),j=(e,t=!0)=>k(pt(e,t)),Nt=(e,t=!0)=>ue(pt(e,t)),ee=e=>k(t=>t.getName?.()===e);var Ct=m("getVoiceChannelId"),te=m("Messages"),he=m("openURL"),ye=k(e=>e.open&&e.close&&!e.startDrag&&!e.init&&!e.openReplay&&!e.setAlwaysOnTop),w=m("createThemedStyleSheet"),ve=m("setString","getString","hasString"),W=m("registerAsset"),be=m("acceptInviteAndTransitionToInviteChannel"),oe=m("getBuiltInCommands"),Vt=m("pushLazy"),Lt=m("createStackNavigator"),D=m("NavigationContainer"),Bt=m("connectStores"),re=m("_currentDispatchActionType"),Ot=window.React;var Te={};b(Te,{after:()=>x,before:()=>kt,instead:()=>jt,unpatchAll:()=>ut});var xe=["a","b","i"],P=new Map;function ft(e,t,o,r,n){let i=P.get(t)?.[e];if(!i)return n?Reflect.construct(t[e],o,r):t[e].apply(r,o);for(let l of i.b.values()){let v=l.call(r,o);Array.isArray(v)&&(o=v)}let a=(...l)=>n?Reflect.construct(i.o,l,r):i.o.apply(r,l);for(let l of i.i.values()){let v=a;a=(...N)=>l.call(r,N,v)}let s=a(...o);for(let l of i.a.values())s=l.call(r,o,s)??s;return s}function Se(e,t,o,r){let n=P.get(e),i=n?.[t];return i?.[r].has(o)?(i[r].delete(o),xe.every(a=>i[a].size===0)&&(Reflect.defineProperty(e,t,{value:i.o,writable:!0,configurable:!0})||(e[t]=i.o),delete n[t]),Object.keys(n).length==0&&P.delete(e),!0):!1}function ut(){for(let[e,t]of P.entries())for(let o in t)for(let r of xe)for(let n of t[o]?.[r].keys()??[])Se(e,o,n,r)}var ne=e=>(t,o,r,n=!1)=>{if(typeof o[t]!="function")throw new Error(`${t} is not a function in ${o.constructor.name}`);P.has(o)||P.set(o,{});let i=P.get(o);if(!i[t]){let l=o[t];i[t]={o:l,b:new Map,i:new Map,a:new Map};let v=(T,C,K)=>{let Mt=ft(t,o,C,T,K);return n&&s(),Mt},N=new Proxy(l,{apply:(T,C,K)=>v(C,K,!1),construct:(T,C)=>v(l,C,!0),get:(T,C,K)=>C=="toString"?l.toString.bind(l):Reflect.get(T,C,K)});Reflect.defineProperty(o,t,{value:N,configurable:!0,writable:!0})||(o[t]=N)}let a=Symbol(),s=()=>Se(o,t,a,e);return i[t][e].set(a,r),s};var kt=ne("b"),jt=ne("i"),x=ne("a");var gt={...Te};var Pe={};b(Pe,{all:()=>_,find:()=>Ut,getAssetByID:()=>Gt,getAssetByName:()=>$t,getAssetIDByName:()=>c,patchAssets:()=>Re});var _={};function Re(){let e=x("registerAsset",W,(t,o)=>{let r=t[0];_[r.name]={...r,id:o}});for(let t=1;;t++){let o=W.getAssetByID(t);if(!o)break;_[o.name]||(_[o.name]={...o,id:t})}return e}var Ut=e=>Object.values(_).find(e),$t=e=>_[e],Gt=e=>W.getAssetByID(e),c=e=>_[e]?.id;var Ee={};b(Ee,{showToast:()=>f});function f(e,t){return ye.open({content:e,source:t})}var Kt=m("setLogFn").default,Wt=new Kt("Vendetta"),h=Wt;var S;function De(e){if(S!==void 0&&S.readyState!==WebSocket.CLOSED&&S.close(),e===""){f("Invalid debugger URL!",c("Small"));return}S=new WebSocket(`ws://${e}`),S.addEventListener("open",()=>f("Connected to debugger.",c("Check"))),S.addEventListener("message",t=>{try{(0,eval)(t.data)}catch(o){console.error(o)}}),S.addEventListener("error",t=>{console.log(`Debugger error: ${t.message}`),f("An error occurred with the debugger connection!",c("Small"))})}function _e(){let e=x("nativeLoggingHook",globalThis,t=>{S?.readyState===WebSocket.OPEN&&S.send(JSON.stringify({message:t[0],level:t[1]})),h.log(t[0])});return()=>{S&&S.close(),e()}}var ie="1840577";function Ie(){let e=d.NativeModules.InfoDictionaryManager,t=d.NativeModules.DCDDeviceManager,o=window.HermesInternal.getRuntimeProperties(),r=o["OSS Release Version"],n="for RN ",i=d.Platform.constants,a=i.reactNativeVersion;return{vendetta:{version:ie},discord:{version:e.Version,build:e.Build},react:{version:React.version,nativeVersion:r.startsWith(n)?r.substring(n.length):`${a.major}.${a.minor}.${a.patch}`},hermes:{version:r,buildType:o.Build,bytecodeVersion:o["Bytecode Version"]},...d.Platform.select({android:{os:{name:"Android",version:i.Release,sdk:i.Version}},ios:{os:{name:i.systemName,version:i.osVersion}}}),...d.Platform.select({android:{device:{manufacturer:i.Manufacturer,brand:i.Brand,model:i.Model,codename:t.device}},ios:{device:{manufacturer:t.deviceManufacturer,brand:t.deviceBrand,model:t.deviceModel,codename:t.device}}})}}var Ae={};b(Ae,{patchCommands:()=>Fe,registerCommand:()=>Ht});var H=[];function Fe(){let e=x("getBuiltInCommands",oe,(t,o)=>o.concat(H));return()=>{H=[],e()}}function Ht(e){let t=oe.getBuiltInCommands(1,!0,!1);t.sort(function(r,n){return parseInt(n.id)-parseInt(r.id)});let o=t[t.length-1];return e.id=(parseInt(o.id,10)-1).toString(),H.push(e),()=>H=H.filter(({id:r})=>r!==e.id)}var Ge={};b(Ge,{evalPlugin:()=>wt,fetchPlugin:()=>Oe,getSettings:()=>$e,initPlugins:()=>Ue,installPlugin:()=>ke,plugins:()=>u,removePlugin:()=>je,startPlugin:()=>J,stopPlugin:()=>z});var Be={};b(Be,{awaitSyncWrapper:()=>Le,createFileBackend:()=>Ve,createMMKVBackend:()=>U,createProxy:()=>bt,createStorage:()=>L,useProxy:()=>E,wrapSync:()=>$});var Jt=Object.freeze({GET:"GET",SET:"SET",DEL:"DEL"});function Ne(){return{listeners:Object.values(Jt).reduce((e,t)=>(e[t]=new Set,e),{}),on(e,t){this.listeners[e].has(t)||this.listeners[e].add(t)},off(e,t){this.listeners[e].delete(t)},once(e,t){let o=(r,n)=>{this.off(r,o),t(r,n)};this.on(e,o)},emit(e,t){for(let o of this.listeners[e])o(e,t)}}}var ht=d.NativeModules.MMKVManager,Ce=d.NativeModules.DCDFileManager,zt=d.Platform.select({default:e=>e,ios:e=>`Documents/${e}`}),U=e=>({get:async function(){return JSON.parse(await ht.getItem(e)??"{}")},set:t=>ht.setItem(e,JSON.stringify(t))}),Ve=e=>({get:async function(){return JSON.parse(await Ce.readFile(`${Ce.getConstants().DocumentsDirPath}/${e}`,"utf8")??"{}")},set:t=>void Ce.writeFile("documents",zt(e),JSON.stringify(t),"utf8")});var Jo=d.NativeModules.MMKVManager,yt=Symbol("emitter accessor"),vt=Symbol("wrapSync promise accessor");function bt(e={}){let t=Ne();function o(r,n){return new Proxy(r,{get(i,a){if(a===yt)return t;let s=[...n,a],l=i[a];return l!=null?(t.emit("GET",{path:s,value:l}),typeof l=="object"?o(l,s):l):l},set(i,a,s){return i[a]=s,t.emit("SET",{path:[...n,a],value:s}),!0},deleteProperty(i,a){let s=delete i[a];return s&&t.emit("DEL",{path:[...n,a]}),s}})}return{proxy:o(e,[]),emitter:t}}function E(e){let t=e[yt],[,o]=React.useReducer(r=>~r,0);return React.useEffect(()=>{let r=()=>o();return t.on("SET",r),t.on("DEL",r),()=>{t.off("SET",r),t.off("DEL",r)}},[]),e}async function L(e){let t=await e.get(),{proxy:o,emitter:r}=bt(t),n=()=>e.set(o);return r.on("SET",n),r.on("DEL",n),o}function $(e){let t,o=[],r=n=>t?n():o.push(n);return e.then(n=>{t=n,o.forEach(i=>i())}),new Proxy({},{...Object.fromEntries(Object.getOwnPropertyNames(Reflect).map(n=>[n,(i,...a)=>Reflect[n](t??i,...a)])),get(n,i,a){return i===vt?r:Reflect.get(t??n,i,a)}})}var Le=e=>new Promise(t=>e[vt](t));async function G(e,t){let o=await fetch(e,t);if(!o.ok)throw new Error("Request returned non-ok");return o}var u=$(L(U("VENDETTA_PLUGINS"))),V={};async function Oe(e){e.endsWith("/")||(e+="/");let t=u[e],o;try{o=await(await G(e+"manifest.json",{cache:"no-store"})).json()}catch{throw new Error(`Failed to fetch manifest for ${e}`)}let r;if(t?.manifest.hash!==o.hash){try{r=await(await G(e+(o.main||"index.js"),{cache:"no-store"})).text()}catch{throw new Error(`Failed to fetch JS for ${e}`)}if(r.length===0)throw new Error(`Failed to fetch JS for ${e}`)}u[e]={id:e,manifest:o,enabled:t?.enabled??!1,update:t?.update??!0,js:r??t.js}}async function ke(e,t=!0){if(e.endsWith("/")||(e+="/"),typeof e!="string"||e in u)throw new Error("Plugin already installed");await Oe(e),t&&await J(e)}async function wt(e){let t={...window.vendetta,plugin:{manifest:e.manifest,storage:await L(U(e.id))}},o=`vendetta=>{return ${e.js}}
//# sourceURL=${e.id}`,r=(0,eval)(o)(t),n=typeof r=="function"?r():r;return n.default||n}async function J(e){e.endsWith("/")||(e+="/");let t=u[e];if(!t)throw new Error("Attempted to start non-existent plugin");try{let o=await wt(t);V[e]=o,o.onLoad?.(),t.enabled=!0}catch(o){h.error(`Plugin ${t.id} errored whilst loading, and will be unloaded`,o);try{V[t.id]?.onUnload?.()}catch(r){h.error(`Plugin ${t.id} errored whilst unloading`,r)}delete V[e],t.enabled=!1}}function z(e,t=!0){e.endsWith("/")||(e+="/");let o=u[e],r=V[e];if(!o)throw new Error("Attempted to stop non-existent plugin");if(!r)throw new Error("Attempted to stop a non-started plugin");try{V[o.id]?.onUnload?.()}catch(n){h.error(`Plugin ${o.id} errored whilst unloading`,n)}delete V[e],t&&(o.enabled=!1)}function je(e){e.endsWith("/")||(e+="/"),u[e].enabled&&z(e),delete u[e]}async function Ue(){await Le(u);let e=Object.keys(u);await Promise.allSettled(e.filter(t=>u[t].enabled&&u[t].update).map(t=>Oe(t)));for(let t of e.filter(o=>u[o].enabled))J(t);return qt}var qt=()=>Object.keys(V).forEach(e=>z(e,!1)),$e=e=>V[e]?.settings;function q(e,t,{walkable:o=[],ignore:r=[],maxDepth:n=100}={}){let i=0;function a(s,l,{walkable:v=[],ignore:N=[]}={}){if(i+=1,!(i>n)){if(typeof l=="string"){if(s.hasOwnProperty(l))return s[l]}else if(l(s))return s;if(s){if(Array.isArray(s))for(let O of s){let T=a(O,l,{walkable:v,ignore:N});if(T)return T}else if(typeof s=="object"){for(let O of Object.keys(s))if(!(v!=null&&v.includes(O))&&!N.includes(O))try{let T=a(s[O],l,{walkable:v,ignore:N});if(T)return T}catch{}}}}}return a(e,t,{walkable:o,ignore:r})}var se=(e,t)=>q(e,t,{walkable:["props","children","child","sibling"]});var We={};b(We,{Forms:()=>p,General:()=>Q,Search:()=>Ke});var p=m("Form","FormSection"),Q=m("Button","Text","View"),Ke=j("StaticSearchBarContainer");var g=$(L(U("VENDETTA_SETTINGS"))),R=$(L(Ve("vendetta_loader.json")));var{FormRow:I,FormSection:Qt,FormDivider:xt}=p;function He(){let e=D.useNavigation();return E(g),React.createElement(Qt,{key:"Vendetta",title:"Vendetta"},React.createElement(I,{label:"General",leading:React.createElement(I.Icon,{source:c("settings")}),trailing:I.Arrow,onPress:()=>e.push("VendettaSettings")}),React.createElement(xt,null),React.createElement(I,{label:"Plugins",leading:React.createElement(I.Icon,{source:c("debug")}),trailing:I.Arrow,onPress:()=>e.push("VendettaPlugins")}),g.developerSettings&&React.createElement(React.Fragment,null,React.createElement(xt,null),React.createElement(I,{label:"Developer",leading:React.createElement(I.Icon,{source:c("ic_progress_wrench_24px")}),trailing:I.Arrow,onPress:()=>e.push("VendettaDeveloper")})))}var qe={};b(qe,{DISCORD_SERVER:()=>Je,GITHUB:()=>ze});var Je="n9QQ4XhhJP",ze="https://github.com/vendetta-mod";function M(e){try{ve.setString(e)}catch{throw new Error("Failed to set clipboard content.")}}var{FormRow:St,FormText:Xt}=p;function ae({label:e,version:t,icon:o}){return React.createElement(St,{label:e,leading:React.createElement(St.Icon,{source:c(o)}),trailing:React.createElement(Xt,null,t),onPress:()=>{M(`${e} - ${t}`),f("Copied version to clipboard.",c("toast_copy_link"))}})}var{FormRow:F,FormSwitchRow:Yt,FormSection:ce,FormDivider:le}=p,y=Ie();function Qe(){E(g);let e=[{label:"Vendetta",version:y.vendetta.version,icon:"ic_progress_wrench_24px"},{label:"Discord",version:`${y.discord.version} (${y.discord.build})`,icon:"Discord"},{label:"React",version:y.react.version,icon:"ic_category_16px"},{label:"React Native",version:y.react.nativeVersion,icon:"mobile"},{label:"Bytecode",version:y.hermes.bytecodeVersion,icon:"ic_server_security_24px"}],t=[{label:"Operating System",version:`${y.os.name} ${y.os.version}`,icon:"ic_cog_24px"},...y.os.sdk?[{label:"SDK",version:y.os.sdk,icon:"ic_profile_badge_verified_developer_color"}]:[],{label:"Manufacturer",version:y.device.manufacturer,icon:"ic_badge_staff"},{label:"Brand",version:y.device.brand,icon:"ic_settings_boost_24px"},{label:"Model",version:y.device.model,icon:"ic_phonelink_24px"},{label:d.Platform.select({android:"Codename",ios:"Machine ID"}),version:y.device.codename,icon:"ic_compose_24px"}];return React.createElement(d.ScrollView,{style:{flex:1},contentContainerStyle:{paddingBottom:38}},React.createElement(ce,{title:"Links",titleStyleType:"no_border"},React.createElement(F,{label:"Discord Server",leading:React.createElement(F.Icon,{source:c("Discord")}),trailing:F.Arrow,onPress:()=>be.acceptInviteAndTransitionToInviteChannel({inviteKey:Je})}),React.createElement(le,null),React.createElement(F,{label:"GitHub",leading:React.createElement(F.Icon,{source:c("img_account_sync_github_white")}),trailing:F.Arrow,onPress:()=>he.openURL(ze)})),React.createElement(ce,{title:"Versions"},e.map(o=>React.createElement(React.Fragment,null,React.createElement(ae,{label:o.label,version:o.version,icon:o.icon}),React.createElement(le,null)))),React.createElement(ce,{title:"Platform Info"},t.map(o=>React.createElement(React.Fragment,null,React.createElement(ae,{label:o.label,version:o.version,icon:o.icon}),React.createElement(le,null)))),React.createElement(ce,{title:"Actions"},React.createElement(F,{label:"Reload Discord",leading:React.createElement(F.Icon,{source:c("ic_message_retry")}),onPress:()=>d.NativeModules.BundleUpdaterManager.reload()}),React.createElement(le,null),React.createElement(Yt,{label:"Developer Settings",leading:React.createElement(F.Icon,{source:c("ic_progress_wrench_24px")}),value:g.developerSettings,onValueChange:o=>{g.developerSettings=o}})))}var{FormRow:Xe,FormSwitch:Zt}=p,{TouchableOpacity:de,Image:me}=Q,B=w.createThemedStyleSheet({card:{backgroundColor:w.ThemeColorMap.BACKGROUND_SECONDARY,borderRadius:5,margin:10,marginTop:0},header:{backgroundColor:w.ThemeColorMap.BACKGROUND_TERTIARY,borderTopLeftRadius:5,borderTopRightRadius:5},actions:{justifyContent:"flex-end",flexDirection:"row-reverse",alignItems:"center"},icon:{width:22,height:22,marginLeft:5,tintColor:w.ThemeColorMap.INTERACTIVE_NORMAL}});function Ye({plugin:e}){let t=$e(e.id),o=D.useNavigation(),[r,n]=React.useState(!1);return r?null:React.createElement(d.View,{style:B.card},React.createElement(Xe,{style:B.header,label:`${e.manifest.name} by ${e.manifest.authors.map(i=>i.name).join(", ")}`,leading:React.createElement(Xe.Icon,{source:c(e.manifest.vendetta?.icon||"ic_application_command_24px")}),trailing:React.createElement(Zt,{value:e.enabled,onValueChange:i=>{i?J(e.id):z(e.id)}})}),React.createElement(Xe,{label:e.manifest.description,trailing:React.createElement(d.View,{style:B.actions},React.createElement(de,{onPress:()=>{je(e.id),n(!0)}},React.createElement(me,{style:B.icon,source:c("ic_message_delete")})),React.createElement(de,{onPress:()=>{M(e.id),f("Copied plugin URL to clipboard.",c("toast_copy_link"))}},React.createElement(me,{style:B.icon,source:c("copy")})),React.createElement(de,{onPress:()=>{e.update=!e.update,f(`${e.update?"Enabled":"Disabled"} updates for ${e.manifest.name}.`,c("toast_image_saved"))}},React.createElement(me,{style:B.icon,source:c(e.update?"Check":"Small")})),t&&React.createElement(de,{onPress:()=>o.push("VendettaCustomPage",{title:e.manifest.name,render:t})},React.createElement(me,{style:B.icon,source:c("settings")})))}))}var{FormInput:eo,FormRow:Tt}=p;function Ze(){E(u);let[e,t]=React.useState("");return React.createElement(d.View,{style:{flex:1}},React.createElement(eo,{value:e,onChange:o=>t(o),placeholder:"https://example.com/",title:"PLUGIN URL"}),React.createElement(Tt,{label:"Install plugin",leading:React.createElement(Tt.Icon,{source:c("ic_add_18px")}),onPress:()=>{ke(e).then(()=>{t("")}).catch(o=>{f(o.message,c("Small"))})}}),React.createElement(d.FlatList,{style:{marginTop:10},data:Object.values(u),renderItem:({item:o})=>React.createElement(Ye,{plugin:o}),keyExtractor:o=>o.id}))}var{FormSection:et,FormRow:A,FormSwitchRow:Rt,FormInput:Pt,FormDivider:Et}=p,{Text:Qr}=Q,Xr=w.createThemedStyleSheet({code:{fontFamily:Y.Fonts.CODE_SEMIBOLD,includeFontPadding:!1,fontSize:12}});function tt(){let e=D.useNavigation();return E(g),E(R),React.createElement(d.ScrollView,{style:{flex:1},contentContainerStyle:{paddingBottom:38}},React.createElement(et,{title:"Debug",titleStyleType:"no_border"},React.createElement(Pt,{value:g.debuggerUrl,onChange:t=>g.debuggerUrl=t,placeholder:"127.0.0.1:9090",title:"DEBUGGER URL"}),React.createElement(Et,null),React.createElement(A,{label:"Connect to debug websocket",leading:React.createElement(A.Icon,{source:c("copy")}),onPress:()=>De(g.debuggerUrl)}),React.createElement(Et,null),window.__vendetta_rdc&&React.createElement(A,{label:"Connect to React DevTools",leading:React.createElement(A.Icon,{source:c("ic_badge_staff")}),onPress:()=>{try{window.__vendetta_rdc?.connectToDevTools({host:g.debuggerUrl.split(":")?.[0],resolveRNStyle:d.StyleSheet.flatten})}catch(t){h.error("Failed to connect to React DevTools!",t),f("Failed to connect to React DevTools!",c("Small"))}}})),window.__vendetta_loader?.features.loaderConfig&&React.createElement(et,{title:"Loader config"},React.createElement(Rt,{label:"Load from custom url",subLabel:"Load Vendetta from a custom endpoint.",leading:React.createElement(A.Icon,{source:c("copy")}),value:R.customLoadUrl.enabled,onValueChange:t=>{R.customLoadUrl.enabled=t}}),R.customLoadUrl.enabled&&React.createElement(Pt,{value:R.customLoadUrl.url,onChange:t=>R.customLoadUrl.url=t,placeholder:"http://localhost:4040/vendetta.js",title:"VENDETTA URL"}),window.__vendetta_loader.features.devtools&&React.createElement(Rt,{label:"Load React DevTools",subLabel:`Version: ${window.__vendetta_loader.features.devtools.version}`,leading:React.createElement(A.Icon,{source:c("ic_badge_staff")}),value:R.loadReactDevTools,onValueChange:t=>{R.loadReactDevTools=t}})),React.createElement(et,{title:"Other"},React.createElement(A,{label:"Asset Browser",leading:React.createElement(A.Icon,{source:c("ic_media_upload")}),trailing:A.Arrow,onPress:()=>e.push("VendettaAssetBrowser")})))}var{FormRow:to}=p,oo=w.createThemedStyleSheet({asset:{width:32,height:32}});function ot({asset:e}){return React.createElement(to,{label:`${e.name} - ${e.id}`,trailing:React.createElement(d.Image,{source:e.id,style:oo.asset}),onPress:()=>{M(e.name),f("Copied asset name to clipboard.",c("toast_copy_link"))}})}var{FormDivider:ro}=p,no=w.createThemedStyleSheet({search:{margin:0,padding:15,borderBottomWidth:0,background:"none",backgroundColor:"none"}});function rt(){let[e,t]=React.useState("");return React.createElement(d.View,{style:{flex:1}},React.createElement(Ke,{style:no.search,onChangeText:o=>t(o),placeholder:"Search"}),React.createElement(d.FlatList,{data:Object.values(_).filter(o=>o.name.includes(e)||o.id.toString()===e),renderItem:({item:o})=>React.createElement(React.Fragment,null,React.createElement(ot,{asset:o}),React.createElement(ro,null)),keyExtractor:o=>o.name}))}var io=j("getScreens",!1),so=j("UserSettingsOverviewWrapper",!1);function nt(){let e=new Array;return e.push(x("default",io,(t,o)=>({...o,VendettaSettings:{title:"Vendetta",render:Qe},VendettaPlugins:{title:"Plugins",render:Ze},VendettaDeveloper:{title:"Developer",render:tt},VendettaAssetBrowser:{title:"Asset Browser",render:rt},VendettaCustomPage:{title:"Vendetta Page",render:({render:r,...n})=>{let i=D.useNavigation();return React.useEffect(()=>n&&i.setOptions(n)),React.createElement(r,null)}}}))),x("default",so,(t,o)=>{let r=se(o.props.children,n=>n.type&&n.type.name==="UserSettingsOverview");e.push(x("renderSupportAndAcknowledgements",r.type.prototype,(n,{props:{children:i}})=>{let a=i.findIndex(s=>s?.type?.name==="UploadLogsButton");a!==-1&&i.splice(a,1)})),e.push(x("render",r.type.prototype,(n,{props:{children:i}})=>{let a=[te.Messages.BILLING_SETTINGS,te.Messages.PREMIUM_SETTINGS],s=i.findIndex(l=>a.includes(l.props.title));i.splice(s===-1?4:s,0,React.createElement(He,null))}))},!0),()=>e.forEach(t=>t())}var ao=m("updateTheme","overrideTheme"),Dt=m("setAMOLEDThemeEnabled"),_t=ee("ThemeStore"),co=ee("UnsyncedUserSettingsStore");function It(){let e=_t.theme||"dark";ao.overrideTheme(e),Dt&&co.useAMOLEDTheme===2&&Dt.setAMOLEDThemeEnabled(!0),re.unsubscribe("I18N_LOAD_START",It)}function it(){try{_t&&re.subscribe("I18N_LOAD_START",It)}catch(e){h.error("Failed to fix theme...",e)}}var at={};b(at,{copyText:()=>M,findInReactTree:()=>se,findInTree:()=>q,safeFetch:()=>G,unfreeze:()=>st});function st(e){return Object.isFrozen(e)?Object.assign({},e):e}function pe(e,...t){let o={...e};return t.forEach(r=>delete o[r]),o}async function ct(e){return{patcher:pe(gt,"unpatchAll"),metro:{...ge,common:{...we}},constants:qe,utils:at,debug:pe(Me,"versionHash","patchLogHook"),ui:{components:We,toasts:Ee,assets:Pe},plugins:pe(Ge,"initPlugins"),commands:pe(Ae,"patchCommands"),storage:Be,settings:g,loader:{identity:window.__vendetta_loader,config:R},logger:h,version:ie,unload:()=>{e.filter(t=>typeof t=="function").forEach(t=>t()),delete window.vendetta}}}console.log("Hello from Vendetta!");async function lo(){try{let e=await Promise.all([_e(),Re(),Fe(),it(),nt()]);window.vendetta=await ct(e),e.push(await Ue()),h.log("Vendetta is ready!")}catch(e){alert(`Vendetta failed to initialize... ${e.stack||e.toString()}`)}}lo();})();
//# sourceURL=Vendetta