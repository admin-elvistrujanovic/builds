"use strict";(()=>{var mt=Object.defineProperty;var E=(e,t)=>{for(var o in t)mt(e,o,{get:t[o],enumerable:!0})};var ie={};E(ie,{after:()=>v,before:()=>dt,instead:()=>ft,unpatchAll:()=>He});var re=["a","b","i"],S=new Map;function Ge(e,t,o,n,r){let i=S.get(t)?.[e];if(!i)return r?Reflect.construct(t[e],o,n):t[e].apply(n,o);for(let p of i.b.values()){let y=p.call(n,o);Array.isArray(y)&&(o=y)}let s=(...p)=>r?Reflect.construct(i.o,p,n):i.o.apply(n,p);for(let p of i.i.values()){let y=s;s=(...P)=>p.call(n,P,y)}let a=s(...o);for(let p of i.a.values())a=p.call(n,o,a)??a;return a}function ne(e,t,o,n){let r=S.get(e),i=r?.[t];return i?.[n].has(o)?(i[n].delete(o),re.every(s=>i[s].size===0)&&(Reflect.defineProperty(e,t,{value:i.o,writable:!0,configurable:!0})||(e[t]=i.o),delete r[t]),Object.keys(r).length==0&&S.delete(e),!0):!1}function He(){for(let[e,t]of S.entries())for(let o in t)for(let n of re)for(let r of t[o]?.[n].keys()??[])ne(e,o,r,n)}var z=e=>(t,o,n,r=!1)=>{if(typeof o[t]!="function")throw new Error(`${t} is not a function in ${o.constructor.name}`);S.has(o)||S.set(o,{});let i=S.get(o);if(!i[t]){let p=o[t];i[t]={o:p,b:new Map,i:new Map,a:new Map};let y=(b,A,V)=>{let pt=Ge(t,o,A,b,V);return r&&a(),pt},P=new Proxy(p,{apply:(b,A,V)=>y(A,V,!1),construct:(b,A)=>y(p,A,!0),get:(b,A,V)=>A=="toString"?p.toString.bind(p):Reflect.get(b,A,V)});Reflect.defineProperty(o,t,{value:P,configurable:!0,writable:!0})||(o[t]=P)}let s=Symbol(),a=()=>ne(o,t,s,e);return i[t][e].set(s,n),a};var dt=z("b"),ft=z("i"),v=z("a");var Je={...ie};var pe={};E(pe,{filterModules:()=>ae,find:()=>O,findAll:()=>le,findByDisplayName:()=>C,findByDisplayNameAll:()=>ut,findByProps:()=>l,findByPropsAll:()=>gt,findByStoreName:()=>X,modules:()=>ce});function Ye(e){Object.defineProperty(window.modules,e,{value:window.modules[e],enumerable:!1,configurable:!0,writable:!0})}for(let e in window.modules){let t=Number(e),o=window.modules[t].publicModule.exports;if(!o||o===window||o.proxygone===null){Ye(t);continue}}var We=e=>Object.values(window.modules).find(t=>t.publicModule.exports?.[e]).publicModule.exports;window.React=We("createElement");var se=We("isMoment"),ae=(e,t=!1)=>o=>{let n=[],r=se?.locale();for(let i in e){let s=Number(i),a=e[s].publicModule.exports;if(!e[s].isInitialized)try{__r(s),r&&r!==se.locale()&&se.locale(r)}catch{}if(!a){Ye(s);continue}try{if(a.default&&a.__esModule&&o(a.default)){if(t)return a.default;n.push(a.default)}if(o(a)){if(t)return a;n.push(a)}}catch(p){console.error(`Failed to getModule... ${p.stack||p.toString()}`)}}if(!t)return n},ce=window.modules,O=ae(ce,!0),le=ae(ce),Ke=e=>t=>e.every(o=>t[o]!==void 0),ze=(e,t)=>t?o=>o.name===e:o=>o?.default?.name===e,l=(...e)=>O(Ke(e)),gt=(...e)=>le(Ke(e)),C=(e,t=!0)=>O(ze(e,t)),ut=(e,t=!0)=>le(ze(e,t)),X=e=>O(t=>t.getName?.()===e);var ht=l("setLogFn").default,yt=new ht("Vendetta"),u=yt;var he={};E(he,{AsyncStorage:()=>j,Flux:()=>St,FluxDispatcher:()=>Z,NavigationNative:()=>ue,React:()=>vt,ReactNative:()=>d,assets:()=>U,channels:()=>bt,clipboard:()=>fe,constants:()=>me,i18n:()=>Q,navigation:()=>$,navigationStack:()=>ge,stylesheet:()=>m,toasts:()=>de,url:()=>q});var me=l("API_HOST"),bt=l("getVoiceChannelId"),Q=l("Messages"),q=l("openURL"),de=O(e=>e.open&&e.close&&!e.startDrag&&!e.init&&!e.openReplay&&!e.setAlwaysOnTop),m=l("createThemedStyleSheet"),fe=l("setString","getString"),U=l("registerAsset"),$=l("pushLazy"),ge=l("createStackNavigator"),ue=l("NavigationContainer"),St=l("connectStores"),Z=l("_currentDispatchActionType"),vt=l("createElement"),d=l("Text","Image"),j=l("setItem");function N(e){try{fe.setString(e)}catch{throw new Error("Failed to set clipboard content.")}}function G(e,t,{walkable:o=[],ignore:n=[],maxDepth:r=100}={}){let i=0;function s(a,p,{walkable:y=[],ignore:P=[]}={}){if(i+=1,!(i>r)){if(typeof p=="string"){if(a.hasOwnProperty(p))return a[p]}else if(p(a))return a;if(!!a){if(Array.isArray(a))for(let _ of a){let b=s(_,p,{walkable:y,ignore:P});if(b)return b}else if(typeof a=="object"){for(let _ of Object.keys(a))if(!(y!=null&&y.includes(_))&&!P.includes(_))try{let b=s(a[_],p,{walkable:y,ignore:P});if(b)return b}catch{}}}}}return s(e,t,{walkable:o,ignore:n})}function H(e,t){return G(e,t,{walkable:["props","children","child","sibling"]})}var Se={};E(Se,{DISCORD_SERVER:()=>ye,GITHUB:()=>be});var ye="https://discord.gg/n9QQ4XhhJP",be="https://github.com/vendetta-mod";var we={};E(we,{Forms:()=>f,General:()=>J,Search:()=>ve});var f=l("Form","FormSection"),J=l("Button","Text","View"),ve=C("StaticSearchBarContainer");var xe={};E(xe,{showToast:()=>g});function g(e,t){return de.open({content:e,source:t})}var w={};function Xe(){try{v("registerAsset",U,(e,t)=>{let o=e[0];w[o.name]={...o,id:t}});for(let e=1;;e++){let t=U.getAssetByID(e);if(!t)break;w[t.name]||(w[t.name]={...t,id:e})}}catch{}}var Qe=e=>Object.values(w).find(e),qe=e=>w[e],Ze=e=>U.getAssetByID(e),c=e=>w[e]?.id;function M(e,t){let o={},n={get(r,i){let s=Reflect.get(r,i);return typeof s=="object"&&s!==null?new Proxy(s,n):s},set(r,i,s){return Reflect.set(r,i,s),j.setItem(e,JSON.stringify(o)),!0},deleteProperty(r,i){return Reflect.deleteProperty(r,i),j.setItem(e,JSON.stringify(o)),!0}};return j.getItem(e).then(async function(r){if(!r)return;let i=JSON.parse(r);if(t&&typeof t=="function")t(i);else for(let s of Object.keys(i))o[s]=i[s]}),new Proxy(o,n)}var x=M("VENDETTA_SETTINGS");var{FormRow:R,FormSection:wt,FormDivider:et}=f;function Te({navigation:e}){return React.createElement(wt,{key:"Vendetta",title:"Vendetta"},React.createElement(R,{label:"General",leading:()=>React.createElement(R.Icon,{source:c("settings")}),trailing:R.Arrow,onPress:()=>e.push("VendettaSettings")}),React.createElement(et,null),React.createElement(R,{label:"Plugins",leading:()=>React.createElement(R.Icon,{source:c("debug")}),trailing:R.Arrow,onPress:()=>e.push("VendettaPlugins")}),x.developerSettings&&React.createElement(React.Fragment,null,React.createElement(et,null),React.createElement(R,{label:"Developer",leading:()=>React.createElement(R.Icon,{source:c("ic_progress_wrench_24px")}),trailing:R.Arrow,onPress:()=>e.push("VendettaDeveloper")})))}var I;function ee(e){if(I!==void 0&&I.readyState!==WebSocket.CLOSED&&I.close(),e===""){g("Invalid debugger URL!",c("Small"));return}I=new WebSocket(`ws://${e}`),I.addEventListener("open",()=>g("Connected to debugger.",c("Check"))),I.addEventListener("message",t=>{try{(0,eval)(t.data)}catch(o){console.error(o)}}),I.addEventListener("error",t=>{console.log(`Debugger error: ${t.message}`),g("An error occurred with the debugger connection!",c("Small"))})}function tt(){v("nativeLoggingHook",globalThis,(e,t)=>{I?.readyState===WebSocket.OPEN&&I.send(JSON.stringify({message:e[0],level:e[1]})),u.log(e[0])})}var Re="93c4eef";function ot(e=!1){let t=d.NativeModules.InfoDictionaryManager,o=window.HermesInternal.getRuntimeProperties(),n=d.Platform.constants.reactNativeVersion;return{vendetta:{version:Re},discord:{version:t.Version,build:t.Build},react:{version:React.version,nativeVersion:`${n.major||0}.${n.minor||0}.${n.patch||0}`},hermes:{version:o["OSS Release Version"],buildType:o.Build,bytecodeVersion:o["Bytecode Version"]}}}var{FormRow:rt,FormText:xt}=f;function Ie({label:e,version:t,icon:o}){return React.createElement(rt,{label:e,leading:()=>React.createElement(rt.Icon,{source:c(o)}),trailing:()=>React.createElement(xt,null,t),onPress:()=>{N(`${e} - ${t}`),g("Copied version to clipboard.",c("toast_copy_link"))}})}var{FormRow:T,FormSwitchRow:Tt,FormSection:Pe,FormDivider:Ae}=f,D=ot();function De(){let[e,t]=React.useState(x.developerSettings||!1),o=[{label:"Vendetta",version:D.vendetta.version,icon:"ic_progress_wrench_24px"},{label:"Discord",version:`${D.discord.version} (${D.discord.build})`,icon:"Discord"},{label:"React",version:D.react.version,icon:"ic_category_16px"},{label:"React Native",version:D.react.nativeVersion,icon:"mobile"},{label:"Hermes",version:`${D.hermes.version} ${D.hermes.buildType} | Bytecode ${D.hermes.bytecodeVersion}`,icon:"ic_badge_staff"}];return React.createElement(d.ScrollView,null,React.createElement(Pe,{title:"Links"},React.createElement(T,{label:"Discord Server",leading:React.createElement(T.Icon,{source:c("Discord")}),trailing:T.Arrow,onPress:()=>q.openURL(ye)}),React.createElement(Ae,null),React.createElement(T,{label:"GitHub",leading:React.createElement(T.Icon,{source:c("img_account_sync_github_white")}),trailing:T.Arrow,onPress:()=>q.openURL(be)})),React.createElement(Pe,{title:"Versions"},o.map(n=>React.createElement(React.Fragment,null,React.createElement(Ie,{label:n.label,version:n.version,icon:n.icon}),React.createElement(Ae,null)))),React.createElement(Pe,{title:"Actions"},React.createElement(T,{label:"Reload Discord",leading:React.createElement(T.Icon,{source:c("ic_message_retry")}),trailing:T.Arrow,onPress:()=>d.NativeModules.BundleUpdaterManager.reload()}),React.createElement(Ae,null),React.createElement(Tt,{label:"Developer Settings",leading:React.createElement(T.Icon,{source:c("ic_progress_wrench_24px")}),value:e,onValueChange:n=>{x.developerSettings=n,t(n)}})))}var k=m.createThemedStyleSheet({container:{backgroundColor:m.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,flex:1},card:{backgroundColor:m.ThemeColorMap.BACKGROUND_MOBILE_PRIMARY,color:m.ThemeColorMap.TEXT_NORMAL},header:{backgroundColor:m.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},headerTitleContainer:{color:m.ThemeColorMap.HEADER_PRIMARY},headerTitle:{fontFamily:me.Fonts.PRIMARY_BOLD,color:m.ThemeColorMap.HEADER_PRIMARY},backIcon:{tintColor:m.ThemeColorMap.INTERACTIVE_ACTIVE,marginLeft:15,marginRight:20}}),nt=ge.createStackNavigator(),{TouchableOpacity:Rt,Image:It}=J;function Ne({plugin:e,children:t}){return React.createElement(ue.NavigationContainer,null,React.createElement(nt.Navigator,{initialRouteName:e.manifest.name,style:k.container,screenOptions:{cardOverlayEnabled:!1,cardShadowEnabled:!1,cardStyle:k.card,headerStyle:k.header,headerTitleContainerStyle:k.headerTitleContainer}},React.createElement(nt.Screen,{name:e.manifest.name,component:t,options:{headerTitleStyle:k.headerTitle,headerLeft:()=>React.createElement(Rt,{onPress:()=>$.pop()},React.createElement(It,{style:k.backIcon,source:c("back-icon")}))}})))}var h=M("VENDETTA_PLUGINS",async function(e){for(let t of Object.keys(e)){let o=e[t];e[t].update?await Y(o.id):h[t]=e[t],e[t].enabled&&h[t]&&_e(t)}}),F={};async function Y(e){if(e.endsWith("/")||(e+="/"),typeof e!="string"||e in h)throw new Error("Plugin ID invalid or taken");let t;try{t=await(await fetch(new URL("manifest.json",e),{cache:"no-store"})).json()}catch{throw new Error(`Failed to fetch manifest for ${e}`)}let o;try{o=await(await fetch(new URL(t.main||"index.js",e),{cache:"no-store"})).text()}catch{throw new Error(`Failed to fetch JS for ${e}`)}if(o.length===0)throw new Error(`Failed to fetch JS for ${e}`);h[e]={id:e,manifest:t,enabled:!1,update:!0,js:o}}function Fe(e){let t={...window.vendetta,plugin:{manifest:e.manifest,storage:M(e.id),showSettings:()=>Ee(e)}},o=`vendetta=>{return ${e.js}}
//# sourceURL=${e.id}`,n=(0,eval)(o)(t),r=typeof n=="function"?n():n;return r.default||r}function _e(e){let t=h[e];if(!t)throw new Error("Attempted to start non-existent plugin");try{let o=Fe(t);F[e]=o,o.onLoad?.(),t.enabled=!0}catch(o){u.error(`Plugin ${t.id} errored whilst loading, and will be unloaded`,o);try{F[t.id]?.onUnload?.()}catch(n){u.error(`Plugin ${t.id} errored whilst unloading`,n)}delete F[e],t.enabled=!1}}function W(e){let t=h[e],o=F[e];if(!t)throw new Error("Attempted to stop non-existent plugin");if(!o)throw new Error("Attempted to stop a non-started plugin");try{F[t.id]?.onUnload?.()}catch(n){u.error(`Plugin ${t.id} errored whilst unloading`,n)}delete F[e],t.enabled=!1}function te(e){h[e].enabled&&W(e),delete h[e]}var K=e=>F[e]?.settings;function Ee(e){let t=K(e.id);if(!t)return u.error(`Plugin ${e.id} is not loaded or has no settings`);$.push(Ne,{plugin:e,children:t})}var{FormRow:Oe,FormSwitch:Pt}=f,{TouchableOpacity:Ce,Image:Me}=J,B=m.createThemedStyleSheet({card:{backgroundColor:m.ThemeColorMap.BACKGROUND_SECONDARY,borderRadius:5,margin:10},header:{backgroundColor:m.ThemeColorMap.BACKGROUND_TERTIARY,borderTopLeftRadius:5,borderTopRightRadius:5},actions:{justifyContent:"flex-end",flexDirection:"row",alignItems:"center"},icon:{width:22,height:22,marginLeft:5,tintColor:m.ThemeColorMap.INTERACTIVE_NORMAL}});function ke({plugin:e}){let[t,o]=React.useState(e.enabled),[n,r]=React.useState(e.update),[i,s]=React.useState(!1);return i?React.createElement(React.Fragment,null):React.createElement(d.View,{style:B.card},React.createElement(Oe,{style:B.header,label:`${e.manifest.name} by ${e.manifest.authors.map(a=>a.name).join(", ")}`,leading:React.createElement(Oe.Icon,{source:c(e.manifest.vendetta.icon||"ic_application_command_24px")}),trailing:React.createElement(Pt,{value:t,onValueChange:a=>{a?_e(e.id):W(e.id),o(a)}})}),React.createElement(Oe,{label:e.manifest.description,trailing:React.createElement(d.View,{style:B.actions},React.createElement(Ce,{onPress:()=>{te(e.id),s(!0)}},React.createElement(Me,{style:B.icon,source:c("ic_message_delete")})),React.createElement(Ce,{onPress:()=>{e.update=!e.update,g(`${e.update?"Enabled":"Disabled"} updates for ${e.manifest.name}.`,c("toast_image_saved")),r(e.update)}},React.createElement(Me,{style:B.icon,source:c(n?"Check":"Small")})),K(e.id)&&React.createElement(Ce,{onPress:()=>Ee(e)},React.createElement(Me,{style:B.icon,source:c("settings")})))}))}var{FormInput:At,FormRow:Be}=f;function Le(){let[e,t]=React.useState(""),[o,n]=React.useState(h);return React.createElement(d.View,null,React.createElement(At,{value:e,onChange:r=>t(r),title:"PLUGIN URL"}),React.createElement(Be,{label:"Install plugin",leading:React.createElement(Be.Icon,{source:c("add_white")}),trailing:Be.Arrow,onPress:()=>{Y(e).then(()=>{t(""),n(h)}).catch(r=>{g(r.message,c("Small"))})}}),React.createElement(d.FlatList,{data:Object.values(o),renderItem:({item:r})=>React.createElement(ke,{plugin:r}),keyExtractor:r=>r.id}))}var{FormRow:Dt}=f,Nt=m.createThemedStyleSheet({asset:{width:32,height:32}});function Ve({asset:e}){return React.createElement(Dt,{label:`${e.name} - ${e.id}`,trailing:()=>React.createElement(d.Image,{source:e.id,style:Nt.asset}),onPress:()=>{N(e.name),g("Copied asset name to clipboard.",c("toast_copy_link"))}})}var{FormSection:it,FormRow:L,FormInput:Ft,FormDivider:Ue}=f,{connectToDevTools:st}=window.__vendetta_rdc,_t=m.createThemedStyleSheet({search:{margin:0,padding:0,paddingRight:15,paddingLeft:15,borderBottomWidth:0,backgroundColor:"none"}});function $e(){let[e,t]=React.useState(x.debuggerUrl||""),[o,n]=React.useState("");return React.createElement(d.View,null,React.createElement(it,{title:"Debug"},React.createElement(Ft,{value:e,onChange:r=>{x.debuggerUrl=r,t(r)},title:"DEBUGGER URL"}),React.createElement(Ue,null),React.createElement(L,{label:"Connect to debug websocket",leading:()=>React.createElement(L.Icon,{source:c("copy")}),trailing:L.Arrow,onPress:()=>ee(e)}),React.createElement(Ue,null),st&&React.createElement(L,{label:"Connect to React DevTools",leading:()=>React.createElement(L.Icon,{source:c("ic_badge_staff")}),trailing:L.Arrow,onPress:()=>{try{st({host:e.split(":")[0],resolveRNStyle:d.StyleSheet.flatten})}catch(r){u.error("Failed to connect to React DevTools!",r),g("Failed to connect to React DevTools!",c("Small"))}}})),React.createElement(it,{title:"Assets"},React.createElement(ve,{style:_t.search,onChangeText:r=>n(r),placeholder:"Search..."}),React.createElement(d.FlatList,{data:Object.values(w).filter(r=>r.name.includes(o)),renderItem:({item:r})=>React.createElement(React.Fragment,null,React.createElement(Ve,{asset:r}),React.createElement(Ue,null)),keyExtractor:r=>r.name})))}var Et=C("getScreens",!1),Ot=C("UserSettingsOverviewWrapper",!1),oe=[];function je(){v("default",Et,(e,t)=>({...t,VendettaSettings:{title:"Vendetta",render:De},VendettaPlugins:{title:"Plugins",render:Le},VendettaDeveloper:{title:"Developer",render:$e}})),v("default",Ot,(e,t)=>{for(let n of oe)n();oe=[];let o=H(t.props.children,n=>n.type&&n.type.name==="UserSettingsOverview");oe.push(v("renderSupportAndAcknowledgements",o.type.prototype,(n,{props:{children:r}})=>{let i=r.findIndex(s=>s?.type?.name==="UploadLogsButton");i!==-1&&r.splice(i,1)})),oe.push(v("render",o.type.prototype,(n,{props:{children:r}})=>{let i=[Q.Messages.BILLING_SETTINGS,Q.Messages.PREMIUM_SETTINGS],s=r.findIndex(a=>i.includes(a.props.title));r.splice(s===-1?4:s,0,React.createElement(Te,{navigation:o.props.navigation}))}))})}var Ct=l("updateTheme","overrideTheme"),at=l("setAMOLEDThemeEnabled"),ct=X("ThemeStore"),Mt=X("UnsyncedUserSettingsStore");function lt(){try{if(ct){let t=function(){let o=ct.theme||"dark";Ct.overrideTheme(o),at&&Mt.useAMOLEDTheme===2&&at.setAMOLEDThemeEnabled(!0),Z.unsubscribe("I18N_LOAD_START",t)};var e=t;Z.subscribe("I18N_LOAD_START",t)}}catch(t){u.error("Failed to fix theme...",t)}}console.log("Hello from Vendetta!");async function kt(){let e=!1;try{window.vendetta={patcher:Je,metro:{...pe,common:{...he}},constants:{...Se},utils:{copyText:N,findInReactTree:H,findInTree:G},debug:{connectToDebugger:ee},ui:{components:{...we},toasts:{...xe},assets:{all:w,find:Qe,getAssetByID:Ze,getAssetByName:qe,getAssetIDByName:c}},plugins:{plugins:h,fetchPlugin:Y,evalPlugin:Fe,stopPlugin:W,removePlugin:te,getSettings:K},settings:x,logger:u,version:Re},tt(),Xe(),lt(),je()}catch(t){e=!0,alert(`Vendetta failed to initialize... ${t.stack||t.toString()}`)}e||u.log("Vendetta is ready!")}kt();})();
//# sourceURL=Vendetta