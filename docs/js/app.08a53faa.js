(function(e){function t(t){for(var a,c,s=t[0],i=t[1],l=t[2],d=0,u=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&u.push(o[c][0]),o[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);h&&h(t);while(u.length)u.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},c={app:0},o={app:0},r=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0da7d0":"535d87b8","chunk-2d0daa96":"e1e9b7db","chunk-2d225de6":"c0fd1723","chunk-48243d52":"8ee5619b","chunk-4bf2bc4a":"e30e404c","chunk-539539c6":"aa9027f3","chunk-5d89d77b":"ade99688","chunk-618f7a12":"f8f628b5","chunk-6229fee2":"5f61feb3","chunk-692a4620":"0771ff45","chunk-6ea13b7a":"ef65a6d2","chunk-7cfed818":"3600d269","chunk-8464edc8":"c36d782f","chunk-8eb4d2dc":"28175613","chunk-90902fbe":"e617aa17","chunk-a514f352":"e0bb1a4d","chunk-d989b56a":"381c4e87","chunk-dec42738":"3d8646c5"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-48243d52":1,"chunk-4bf2bc4a":1,"chunk-539539c6":1,"chunk-5d89d77b":1,"chunk-618f7a12":1,"chunk-6229fee2":1,"chunk-692a4620":1,"chunk-6ea13b7a":1,"chunk-7cfed818":1,"chunk-8464edc8":1,"chunk-8eb4d2dc":1,"chunk-90902fbe":1,"chunk-a514f352":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-2d0da7d0":"31d6cfe0","chunk-2d0daa96":"31d6cfe0","chunk-2d225de6":"31d6cfe0","chunk-48243d52":"3293d0e2","chunk-4bf2bc4a":"b56e6ab2","chunk-539539c6":"6fde3ce6","chunk-5d89d77b":"197f0cb4","chunk-618f7a12":"51fb7cc4","chunk-6229fee2":"b24f704b","chunk-692a4620":"30a9ee2f","chunk-6ea13b7a":"3341eb20","chunk-7cfed818":"4ac87a00","chunk-8464edc8":"ab5c8c52","chunk-8eb4d2dc":"3077142f","chunk-90902fbe":"80caf3e7","chunk-a514f352":"edaade02","chunk-d989b56a":"31d6cfe0","chunk-dec42738":"31d6cfe0"}[e]+".css",o=i.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===a||d===o))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){l=u[s],d=l.getAttribute("data-href");if(d===a||d===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var a=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete c[e],h.parentNode.removeChild(h),n(r)},h.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(h)})).then((function(){c[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=s(e);var u=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(h);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",u.name="ChunkLoadError",u.type=a,u.request=c,n[1](u)}o[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var h=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0017":function(e,t,n){},"0418":function(e,t,n){"use strict";n.r(t);var a=n("7a23");Object(a["v"])("data-v-52f79138");const c={id:"header",class:"flex flex-down"},o={key:0,class:"discord-top-link flex",style:{width:"100%"}},r=Object(a["f"])("div",null,null,-1),s=Object(a["f"])("div",{class:"flex",style:{width:"80%"}},[Object(a["f"])("p",null," 遇到問題了?有建議要提供?想一起聊天?讓我們一起壯大 Minecraft 社群吧!! "),Object(a["f"])("a",{target:"_blank",class:"btn",href:"https://discord.com/invite/5xApZtgV2u",style:{"--thisColor":"rgb(173, 173, 173)"}},"加入 RPMTW 官方 Discord 伺服器")],-1),i={class:"flex else-discord"},l={class:"header-nav-left"},d={class:"menuButton"},u=Object(a["f"])("div",{class:"menuStyle"},null,-1),h=[u],b=Object(a["g"])('<div class="links flex" data-v-52f79138><a target="_blank" href="https://discord.com/invite/5xApZtgV2u" data-v-52f79138><img src="https://discord.com/assets/847541504914fd33810e70a0ea73177e.ico" alt="" data-v-52f79138></a><a target="_blank" href="https://github.com/RPMTW" data-v-52f79138><img src="https://github.com/fluidicon.png" alt="" data-v-52f79138></a><a target="_blank" href="https://modrinth.com/mod/rpmtw-update-mod" data-v-52f79138><img src="https://modrinth.com/favicon.ico" alt="" data-v-52f79138></a><a target="_blank" href="https://www.curseforge.com/minecraft/modpacks/atr1" data-v-52f79138><img src="https://media.forgecdn.net/avatars/thumbnails/396/29/64/64/637595082272657724.png" alt="" data-v-52f79138></a><a target="_blank" href="https://crowdin.com/project/resourcepack-mod-zhtw?already_accepted=14797842" data-v-52f79138><img src="https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png" alt="" data-v-52f79138></a></div>',1),m={class:"div-select flex flex-down"},f=["value"],p=Object(a["f"])("div",{class:"txt-logo user-select"},[Object(a["f"])("strong",{class:"main-title"},[Object(a["f"])("span",{class:"notranslate",style:{color:"#ff9900"}},"RPM"),Object(a["f"])("span",{style:{color:"#00ffff"},class:"notranslate"},"TW")])],-1),g={class:"header-nav-right"},O=Object(a["f"])("i",{class:"fas fa-sun"},null,-1),j=[O];function k(e,t,n,u,O,k){const v=Object(a["A"])("router-link");return Object(a["s"])(),Object(a["e"])("header",c,[O.discordLinkShow?(Object(a["s"])(),Object(a["e"])("div",o,[r,s,Object(a["f"])("div",{class:"icon x",onClick:t[0]||(t[0]=(...e)=>k.noDiscordLink&&k.noDiscordLink(...e))})])):Object(a["d"])("",!0),Object(a["f"])("div",i,[Object(a["f"])("div",l,[Object(a["f"])("div",d,[Object(a["f"])("div",{class:"menuStyleButton",href:"#",onClick:t[1]||(t[1]=(...e)=>k.menuButtonHtmlToggle&&k.menuButtonHtmlToggle(...e))},h),Object(a["f"])("div",{class:"menu",onMouseleave:t[4]||(t[4]=(...e)=>k.menuButtonHtmlRemove&&k.menuButtonHtmlRemove(...e))},[(Object(a["s"])(!0),Object(a["e"])(a["a"],null,Object(a["y"])(O.menuList,e=>(Object(a["s"])(),Object(a["e"])("div",{key:e,class:Object(a["o"])([{active:O.breadcrumb===e.breadcrumb},"activeBreadcrumb"])},[Object(a["i"])(v,{class:"go-to",to:e.to,onClick:[k.goTop,k.menuButtonHtmlRemove]},{default:Object(a["H"])(()=>[Object(a["h"])(Object(a["C"])(e.name),1)]),_:2},1032,["to","onClick"])],2))),128)),b,Object(a["f"])("div",m,[Object(a["f"])("h1",{class:"nowLang notranslate langMenu",onClick:t[2]||(t[2]=(...e)=>k.showLangOptions&&k.showLangOptions(...e))},Object(a["C"])(O.lang),1),(Object(a["s"])(!0),Object(a["e"])(a["a"],null,Object(a["y"])(O.langs,(e,n)=>(Object(a["s"])(),Object(a["e"])("div",{class:"div-option none langMenu notranslate",value:n,key:n,onClick:t[3]||(t[3]=(...e)=>k.setChoose&&k.setChoose(...e))},Object(a["C"])(e),9,f))),128))])],32)]),Object(a["f"])("div",{class:"blurry",onClick:t[5]||(t[5]=(...e)=>k.menuButtonHtmlRemove&&k.menuButtonHtmlRemove(...e))})]),p,Object(a["f"])("div",g,[Object(a["f"])("div",{class:"header-nav-setMode",onClick:t[6]||(t[6]=(...e)=>k.headerSetMode_click&&k.headerSetMode_click(...e)),rod:""},[Object(a["f"])("span",{class:Object(a["o"])({"mode-bright":O.bright,"mode-dark":!O.bright})},j,2)])])])])}Object(a["t"])();var v=n("9225"),w=n("8b64");function T(e,t=""){return v["default"].i18nData[v["default"].getLang()][e]||v["default"].i18nData[v["default"].set.main][e]||t}let y=0;var M={name:"Header",data(){return{langs:v["default"].set.langs,lang:`${v["default"].set.langs[v["default"].getLang()]} (${v["default"].getLang()})`,menuList:w,breadcrumb:null,bright:!1,discordLinkShow:!0}},components:{},methods:{i18n:T,showLangOptions(){$("div.div-option.langMenu").toggleClass("none")},setChoose(e){let t=$(e.target).attr("value");this.lang=`${v["default"].set.langs[t]} (${t})`,v["default"].setLang(t)},headerSetMode_click(){let e=$("html").toggleClass("bright").attr("class").split(" ").includes("bright");this.bright=e,document.cookie=e?"mode=bright":"mode=dark"},menuButtonHtmlToggle(){$("html").toggleClass("is-menu")},menuButtonHtmlRemove(){$("html").removeClass("is-menu")},goTop(){$("html").animate({scrollTop:0},400)},setBreadcrumb(){this.breadcrumb=this.$route.meta.breadcrumb},noDiscordLink(){localStorage.setItem("discordLink",0),this.discordLinkShow=!1,this.discordLinkShow&&$(":root").css("--html-margin-top","95px")||$(":root").css("--html-margin-top","45px")}},mounted(){let e=this;this.discordLinkShow=0!==parseInt(localStorage.getItem("discordLink")),$((function(){function t(){let e=Math.floor($(window).scrollTop()),t=$("#header"),n="slider--up",a="slider--down";0===e?(setTimeout(()=>{t.addClass(n)},250),t.removeClass(a)):y>e?(t.addClass(n),t.removeClass(a)):$("html").hasClass("is-menu")||(t.addClass(a),t.removeClass(n)),y=e}e.discordLinkShow&&$("html").css("--html-margin-top","95px")||$("html").css("--html-margin-top","45px"),$(window).on("scroll",()=>t()),t()})),this.setBreadcrumb();let t=("; "+document.cookie).split("; mode=");2===t.length&&"bright"===t.pop().split(";").shift()?$("html").addClass("bright"):document.cookie="mode=dark",document.cookie.length<=0&&alert("建議開啟 cookie 已獲得更好的體驗");let n=$("html").attr("class");this.bright=n&&n.split(" ").includes("bright")},watch:{$route(){this.setBreadcrumb()}}};n("d83f"),n("ed81");M.render=k,M.__scopeId="data-v-52f79138";t["default"]=M},"0dc7":function(e,t,n){"use strict";n("0017")},"10ee":function(e){e.exports=JSON.parse('{"public.Game.version":"遊戲版本","public.goto.discord":"加入官方社群 (Discord)","plug.header.menu.home":"首頁","plug.header.menu.assistance":"協助翻譯","plug.header.menu.Wikipedia":"維基百科","plug.header.menu.tool":"實用工具","plug.header.menu.rank":"翻譯者排名","plug.header.menu.about":"關於我們","Home.include.public.DL-STAT":"立即下載","Home.include.public.read-more":"閱讀更多","Home.include.mod.name":"自動中文化更新模組","Home.include.mod.description":"體驗前所未見的模組翻譯，讓你的模組通通變中文吧！","Home.include.atr.name":"ATR 1 - All The RPMTW<br />模組包","Home.include.atr.description":"1.17 全新模組包，結合各種元素，盡情在織物上探險吧！","Home.top12.title":"翻譯貢獻者前12名 - 感謝你們的貢獻","Home.top12.show-more":"查看更多翻譯貢獻者","Home.announcement.title":"公告","Home.announcement.datas":["文言文：菘之幻界->白話文：白菜的幻想世界!?!?","網頁的手機頁面??就差Wiki阿!!!!","RPMTW 官方模組啟動器製作中...","ATR官方伺服器目前為關閉狀態","較安全的模組下載平台/授權平台: Modrinth、CurseForge 黑名單模組下載平台：9Minecraft","Emm 偷偷說~~又有新坑了!!诶等等官方模組啟動器不適還沒做完嗎Emmmmmmm"],"Home.scroll.texts":["前所未見的模組繁中化","社群協力合作","翻譯全自動更新","跳脫傳統框架","遊戲內翻譯模組","專屬為您設計","與我們一起當個創世神！"],"ProgressQuery.please.enter.CurseForgeID":"請輸入CurseForgeID","ProgressQuery.title":"RPMTW 模組個別翻譯進度查詢器","ProgressQuery.description.0":"不知道自己喜歡的模組有沒有被翻譯呢?或者想了解模組的翻譯進度，那用這個工具就對了","ProgressQuery.description.1":"(目前仍處測試版狀態，資料庫尚未齊全，因此部分模組查無資料屬正常現象)","ProgressQuery.Filter.condition":"過濾條件","RPMTWUpdateMod.buttons.Participate":"參與模組翻譯","RPMTWUpdateMod.main.title":"體驗前所未見的模組繁中化","RPMTWUpdateMod.schedule.Full.version":"全版本模組翻譯進度"}')},2210:function(e,t,n){"use strict";n("9b16")},"291a":function(e,t,n){"use strict";n.r(t);var a=n("7a23");Object(a["v"])("data-v-3521c806");const c={id:"Enlarge"},o={key:0,class:"showImg scaleDraw"},r={class:"ImgDescription flex flex-center flex-down flex-item-center"},s=["src","alt","hover"],i=["href"];function l(e,t,n,l,d,u){return Object(a["I"])((Object(a["s"])(),Object(a["e"])("div",c,[d.showImg?(Object(a["s"])(),Object(a["e"])("div",o,[Object(a["f"])("div",r,[Object(a["f"])("img",{class:"not-enlarge",src:d.showImg,alt:d.description,hover:d.description},null,8,s),d.imgLink?(Object(a["s"])(),Object(a["e"])("a",{key:0,href:d.imgLink,class:"open-original line"},"開啟原尺寸圖片",8,i)):Object(a["d"])("",!0)])])):Object(a["d"])("",!0),Object(a["f"])("div",{class:"EnlargeImg-blurry",onClick:t[0]||(t[0]=e=>d.showImg=!1)})],512)),[[a["F"],d.showImg]])}Object(a["t"])();var d={name:"EnlargeImg",data(){return{showImg:null,description:null,imgLink:null}},methods:{},mounted(){let e=this;$((function(){$("html").on("click","img.showEl",(function(t){e.showImg=$(this).attr("src")||null,e.description=$(this).attr("alt")||null,e.imgLink=$(this).attr("src")||null,$("html").addClass("enlarge"),$("#EnlargeImg.not-enlarge").css({width:$(this).css("width"),height:$(this).css("height")})}))}))}};n("c53f"),n("2210");d.render=l,d.__scopeId="data-v-3521c806";t["default"]=d},"3dfd":function(e,t,n){"use strict";n.r(t);var a=n("7a23");const c=Object(a["f"])("div",{class:"flex flex-down"},[Object(a["f"])("img",{src:"https://cdn.discordapp.com/avatars/645588343228334080/f56a0b0223d5f32b902edcb362d08a5d.webp?size=128",alt:""})],-1),o=[c];function r(e,t,n,c,r,s){const i=Object(a["A"])("Header"),l=Object(a["A"])("router-view"),d=Object(a["A"])("Footer"),u=Object(a["A"])("EnlargeImg");return Object(a["s"])(),Object(a["e"])(a["a"],null,[Object(a["i"])(i),Object(a["i"])(l,{class:"wrapper"}),Object(a["i"])(d,{class:"footer"}),Object(a["f"])("div",{class:Object(a["o"])(["goTop",{showGoTop:r.showGoTop}]),onClick:t[0]||(t[0]=(...e)=>s.goTop&&s.goTop(...e))},o,2),Object(a["i"])(u)],64)}var s=n("0418"),i=n("fd2d"),l=n("291a"),d=(n("a0f1"),n("c1c3"),{name:"Main",components:{Header:s["default"],Footer:i["default"],EnlargeImg:l["default"]},methods:{goTop(){$("html").animate({scrollTop:0},400)}},data(){return{showGoTop:!1}},mounted(){let e=this;$((function(){$(window).on("scroll",()=>e.showGoTop=$(window).scrollTop()>=600)}))}});n("0dc7");d.render=r;t["default"]=d},4360:function(e,t,n){"use strict";n.r(t);var a=n("5502");t["default"]=Object(a["a"])({state:{},mutations:{},actions:{},modules:{}})},4486:function(e,t,n){"use strict";n("9223")},"4b23":function(e,t,n){},"4c3d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),c=n("3dfd"),o=n("a18c"),r=n("4360");Object(a["c"])(c["default"]).use(r["default"]).use(o["default"]).mount("main")},"5aad":function(e){e.exports=JSON.parse('{"plug.header.menu.home":"首頁","plug.header.menu.assistance":"協助翻譯","plug.header.menu.Wikipedia":"維基百科","plug.header.menu.tool":"實用工具","plug.header.menu.rank":"翻譯者排名","plug.header.menu.about":"關於我們","Home.include.public.DL-STAT":"立即下載","Home.include.public.read-more":"閱讀更多","Home.include.mod.name":"自動中文化更新模組","Home.include.mod.description":"體驗前所未見的模組翻譯，讓你的模組通通變中文吧！","Home.include.atr.name.0":"ATR 1 - All The RPMTW","Home.include.atr.name.1":"模組包","Home.include.atr.description":"1.17 全新模組包，結合各種元素，盡情在織物上探險吧！","Home.top12.title":"翻譯貢獻者前12名 - 感謝你們的貢獻","Home.top12.show-more":"查看更多翻譯貢獻者","Home.announcement.datas":["Classical Chinese: The Illusionary World of Siong -> Vernacular Chinese: The Fantasy World of Cabbage!?!?"],"Home.scroll.texts":["前所未見的模組繁中化","社群協力合作","翻譯全自動更新","跳脫傳統框架","遊戲內翻譯模組","專屬為您設計","與我們一起當個創世神！"]}')},6742:function(e){e.exports=JSON.parse("{}")},"8b64":function(e){e.exports=JSON.parse('[{"to":"/","name":"首頁","breadcrumb":"Home"},{"to":"/Translation-assistance","name":"協助翻譯","breadcrumb":"Assistance"},{"to":"/Wiki","name":"維基百科","breadcrumb":"Wiki"},{"to":"/ProgressQuery","name":"實用工具","breadcrumb":"ProgressQuery"},{"to":"/Contributor","name":"翻譯貢獻者排名","breadcrumb":"Contributor"},{"to":"/Partner","name":"合作夥伴","breadcrumb":"Partner"},{"to":"/About","name":"關於我們","breadcrumb":"About"}]')},9223:function(e,t,n){},9225:function(e,t,n){"use strict";n.r(t);var a=n("10ee"),c=n("6742"),o=n("5aad");t["default"]={set:{main:"zh_tw",langs:{zh_tw:"繁體中文",zh_cn:"简体中文",en_us:"English"}},getLang(){return localStorage.getItem("lang")||this.set.main},setLang(e){return localStorage.setItem("lang",e),window.location.reload()},i18nData:{zh_tw:a,zh_cn:c,en_us:o}}},"9b16":function(e,t,n){},a0f1:function(e,t,n){},a18c:function(e,t,n){"use strict";n.r(t);var a=n("6c02"),c=n("c601");const o=[{path:"/",name:"Home",component:()=>n.e("chunk-48243d52").then(n.bind(null,"bb51")),meta:{breadcrumb:"Home"}},{path:"/about",name:"About",component:()=>n.e("chunk-618f7a12").then(n.bind(null,"f820")),meta:{breadcrumb:"About"}},{path:"/Contributor",name:"Contributor",component:()=>n.e("chunk-a514f352").then(n.bind(null,"dd86")),meta:{breadcrumb:"Contributor"}},{path:"/Translation-assistance",name:"Assistance",component:()=>n.e("chunk-539539c6").then(n.bind(null,"f74e")),meta:{breadcrumb:"Assistance"}},{path:"/Translation-assistance/Translation-Tutorials",name:"Tutorials",component:()=>n.e("chunk-6ea13b7a").then(n.bind(null,"2d34"))},{path:"/ProgressQuery",name:"ProgressQuery",component:()=>n.e("chunk-8eb4d2dc").then(n.bind(null,"964f")),meta:{breadcrumb:"ProgressQuery"}},{path:"/Wiki",name:"WikiMenuList",meta:{breadcrumb:"Wiki",notFooter:!0},component:()=>n.e("chunk-5d89d77b").then(n.bind(null,"c89e")),children:[{path:"",components:{data:c["default"]}},{path:"QandA",components:{data:c["default"]}},{path:"AssistTranslation",components:{data:()=>n.e("chunk-dec42738").then(n.bind(null,"1b8e"))}},{path:"InstallAndUse",components:{data:()=>n.e("chunk-2d225de6").then(n.bind(null,"e5dd"))}},{path:"ModInfo",components:{data:()=>n.e("chunk-d989b56a").then(n.bind(null,"38c0"))}},{path:"OtherInfo",components:{data:()=>n.e("chunk-2d0da7d0").then(n.bind(null,"6c8e"))}}]},{path:"/RPMTWUpdateMod",name:"RPMTWUpdateMod",component:()=>n.e("chunk-6229fee2").then(n.bind(null,"752c"))},{path:"/install/version",name:"Version",component:()=>n.e("chunk-90902fbe").then(n.bind(null,"733e")),meta:{breadcrumb:"Version"}},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>n.e("chunk-4bf2bc4a").then(n.bind(null,"4b62")),meta:{breadcrumb:"ProgressQuery"}},{path:"/atr1",name:"ATR1",component:()=>n.e("chunk-692a4620").then(n.bind(null,"a951"))},{path:"/test",name:"TEST",component:()=>n.e("chunk-2d0daa96").then(n.bind(null,"6d0b"))},{path:"/Partner",name:"Partner",component:()=>n.e("chunk-8464edc8").then(n.bind(null,"2764")),meta:{breadcrumb:"Partner"}},{path:"/RWL",name:"RWL",component:()=>n.e("chunk-7cfed818").then(n.bind(null,"0818"))}],r=Object(a["a"])({history:Object(a["b"])("/"),routes:o});r.beforeEach((e,t,n)=>{document.title=e.meta.title||document.title,n()}),t["default"]=r},b9ac:function(e,t,n){e.exports=n.p+"img/autoTranslation.1a4e811f.png"},c1c3:function(e,t,n){},c53f:function(e,t,n){"use strict";n("fdc5")},c601:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),c=n("b9ac"),o=n.n(c);const r={id:"AssistTranslation",class:"wiki"},s={class:"content"},i=Object(a["f"])("section",{class:"section",id:"what-is-RPMTW"},[Object(a["f"])("h1",null,"什麼是 RPMTW 自動中文化更新模組?"),Object(a["f"])("p",null," 此模組是一個Minecraft模組繁體中文化的新興模組，主打「方便、快速、簡單、合作」，希望能夠打破傳統翻譯模組的方式，以及解決許多新/老手想翻譯模組但卻覺得很難/遊玩模組時被看不懂的文字困惑。 ")],-1),l={class:"section",id:"install-method"},d=Object(a["f"])("h1",null,"這模組要如何安裝?",-1),u=Object(a["h"])("<<點我查看教學>>"),h=Object(a["f"])("section",{class:"section",id:"server-need-install"},[Object(a["f"])("h1",null,"伺服器端需要安裝嗎?"),Object(a["f"])("p",null," 伺服器不用安裝，因為伺服器端不會顯示內容並不需要安裝此模組，只需客戶端安裝就能享受漢化體驗。 ")],-1),b=Object(a["f"])("section",{class:"section",id:"RPMTW-version"},[Object(a["f"])("h1",null,"RPMTW 支援 1.12.2 以下的版本嗎? RPMTW支援那些Minecraft版本?"),Object(a["f"])("p",null,[Object(a["h"])(" RPMTW 「不打算」支援 1.12.2 以下的Minecraft版本。"),Object(a["f"])("br"),Object(a["h"])(" 目前RPMTW支援的版本有 1.12、1.16、1.17，未來有新版本釋出也會盡快更新。 ")])],-1),m=Object(a["f"])("section",{class:"section",id:"support-forge-or-fabric"},[Object(a["f"])("h1",null,"RPMTW 支援Forge嗎? 支援Fabric嗎?"),Object(a["f"])("p",null,[Object(a["f"])("span",{style:{"text-decoration":"line-through"}},"小孩子才做選擇，RPMTW 全都要"),Object(a["h"])(" (Forge/Fabric雙平台都支援)。 ")])],-1),f={class:"section",id:"discord-or-line"},p=Object(a["f"])("h1",null,"有Discord或Line嗎? 我想詢問相關問題/建議",-1),g=Object(a["h"])(" 如果需要聯繫我們 "),O=Object(a["h"])(" <<點我查看聯繫方式>> "),j=Object(a["h"])("。 "),k=Object(a["f"])("section",{class:"section",id:"translation-process"},[Object(a["f"])("h1",null,"這什麼原理，可以全自動化的翻譯流程?"),Object(a["f"])("p",null,"下方有一張簡易的示意圖喔w"),Object(a["f"])("br"),Object(a["f"])("img",{src:o.a,alt:"簡易的示意圖"})],-1);function v(e,t,n,c,o,v){const w=Object(a["A"])("router-link");return Object(a["s"])(),Object(a["e"])("div",r,[Object(a["f"])("div",s,[i,Object(a["f"])("section",l,[d,Object(a["i"])(w,{to:"/install/version"},{default:Object(a["H"])(()=>[u]),_:1})]),h,b,m,Object(a["f"])("section",f,[p,Object(a["f"])("p",null,[g,Object(a["i"])(w,{to:"/About"},{default:Object(a["H"])(()=>[O]),_:1}),j])]),k])])}var w={name:"QandA",data(){return{}}};w.render=v;t["default"]=w},d83f:function(e,t,n){"use strict";n("4c3d")},ed81:function(e,t,n){"use strict";n("4b23")},fd2d:function(e,t,n){"use strict";n.r(t);var a=n("7a23");Object(a["v"])("data-v-2555ee8f");const c={key:0,class:"Footer"},o={class:"flex flex-down"},r=Object(a["f"])("a",{target:"_blank",href:"https://github.com/RPMTW"},"RPMTW Team",-1),s=Object(a["h"])(" and "),i=Object(a["f"])("a",{target:"_blank",href:"https://github.com/a3510377"},"猴子#3807",-1);function l(e,t,n,l,d,u){return d.notFooter?(Object(a["s"])(),Object(a["e"])("div",c,[Object(a["f"])("footer",o,[Object(a["f"])("p",null,[Object(a["h"])(" Copyright © RPMTW "+Object(a["C"])(d.newYear)+" Powered by The ",1),r,s,i])])])):Object(a["d"])("",!0)}Object(a["t"])();var d={name:"Footer",data(){return{notFooter:!0,newYear:(new Date).getFullYear()}},watch:{$route(){this.notFooter=!this.$route.meta.notFooter}}};n("4486");d.render=l,d.__scopeId="data-v-2555ee8f";t["default"]=d},fdc5:function(e,t,n){}});
//# sourceMappingURL=app.08a53faa.js.map