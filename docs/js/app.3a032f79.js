(function(e){function t(t){for(var a,c,s=t[0],i=t[1],d=t[2],l=0,u=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&u.push(o[c][0]),o[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);h&&h(t);while(u.length)u.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},c={app:0},o={app:0},r=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-05e41e75":"d0e42b2b","chunk-1164a354":"5eac5162","chunk-2d0da7d0":"9be2bfd4","chunk-2d0daa96":"2578e1ea","chunk-2d225de6":"15ed5ea7","chunk-4bf2bc4a":"4d74720d","chunk-5d3d5c8a":"b8b659ea","chunk-5f8f143f":"19529b47","chunk-629f7d39":"b06572d8","chunk-88daf696":"4f47d24d","chunk-8d136a46":"b7835ffc","chunk-a9c4fab2":"3268e97b","chunk-cca6d3b8":"e91fa432","chunk-d2692a16":"3c37649f","chunk-dec42738":"9505684d","chunk-fccc629a":"abfd64d8"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-05e41e75":1,"chunk-1164a354":1,"chunk-4bf2bc4a":1,"chunk-5d3d5c8a":1,"chunk-5f8f143f":1,"chunk-629f7d39":1,"chunk-88daf696":1,"chunk-a9c4fab2":1,"chunk-cca6d3b8":1,"chunk-d2692a16":1,"chunk-fccc629a":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-05e41e75":"5480ca5c","chunk-1164a354":"d22e2d79","chunk-2d0da7d0":"31d6cfe0","chunk-2d0daa96":"31d6cfe0","chunk-2d225de6":"31d6cfe0","chunk-4bf2bc4a":"b56e6ab2","chunk-5d3d5c8a":"428cd3c4","chunk-5f8f143f":"c511b695","chunk-629f7d39":"51fb7cc4","chunk-88daf696":"6d2ddf05","chunk-8d136a46":"31d6cfe0","chunk-a9c4fab2":"cd6e8be7","chunk-cca6d3b8":"ae54d881","chunk-d2692a16":"3077142f","chunk-dec42738":"31d6cfe0","chunk-fccc629a":"6f6d33fc"}[e]+".css",o=i.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var d=r[s],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===a||l===o))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){d=u[s],l=d.getAttribute("data-href");if(l===a||l===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var a=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete c[e],h.parentNode.removeChild(h),n(r)},h.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(h)})).then((function(){c[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=r);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var u=new Error;d=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",u.name="ChunkLoadError",u.type=a,u.request=c,n[1](u)}o[e]=void 0}};var h=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=t,d=d.slice();for(var u=0;u<d.length;u++)t(d[u]);var h=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0881":function(e,t,n){},"088f":function(e,t,n){"use strict";n("0881")},"10ee":function(e){e.exports=JSON.parse('{"public.Game.version":"遊戲版本","public.goto.discord":"加入官方社群 (Discord)","plug.header.menu.home":"首頁","plug.header.menu.assistance":"協助翻譯","plug.header.menu.Wikipedia":"維基百科","plug.header.menu.tool":"實用工具","plug.header.menu.rank":"翻譯者排名","plug.header.menu.about":"關於我們","Home.include.public.DL-STAT":"立即下載","Home.include.public.read-more":"閱讀更多","Home.include.mod.name":"自動中文化更新模組","Home.include.mod.description":"體驗前所未見的模組翻譯，讓你的模組通通變中文吧！","Home.include.atr.name.0":"ATR 1 - All The RPMTW","Home.include.atr.name.1":"模組包","Home.include.atr.description":"1.17 全新模組包，結合各種元素，盡情在織物上探險吧！","Home.top12.title":"翻譯貢獻者前12名 - 感謝你們的貢獻","Home.top12.show-more":"查看更多翻譯貢獻者","Home.announcement.title":"公告","Home.announcement.datas":["文言文：菘之幻界->白話文：白菜的幻想世界!?!?","網頁的手機頁面??就差Wiki阿!!!!","RPMTW 官方模組啟動器製作中...","ATR官方伺服器目前為關閉狀態","較安全的模組下載平台: 作者授權平台、Modrinth、CurseForge 黑名單模組下載平台：9Minecraft"],"Home.scroll.texts":["前所未見的模組繁中化","社群協力合作","翻譯全自動更新","跳脫傳統框架","遊戲內翻譯模組","專屬為您設計","與我們一起當個創世神！"],"ProgressQuery.please.enter.CurseForgeID":"請輸入CurseForgeID","ProgressQuery.title":"RPMTW 模組個別翻譯進度查詢器","ProgressQuery.description.0":"不知道自己喜歡的模組有沒有被翻譯呢?或者想了解模組的翻譯進度，那用這個工具就對了","ProgressQuery.description.1":"(目前仍處測試版狀態，資料庫尚未齊全，因此部分模組查無資料屬正常現象)","ProgressQuery.Filter.condition":"過濾條件","RPMTWUpdateMod.buttons.Participate":"參與模組翻譯","RPMTWUpdateMod.main.title":"體驗前所未見的模組繁中化","RPMTWUpdateMod.schedule.Full.version":"全版本模組翻譯進度"}')},"1d24":function(e,t,n){},"1df8":function(e,t,n){},"2fe6":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("7a23");const c=Object(a["f"])("div",{class:"flex flex-down"},[Object(a["f"])("img",{src:"https://cdn.discordapp.com/avatars/645588343228334080/f56a0b0223d5f32b902edcb362d08a5d.webp?size=128",alt:""})],-1),o=[c];function r(e,t,n,c,r,s){const i=Object(a["A"])("Header"),d=Object(a["A"])("router-view"),l=Object(a["A"])("Footer"),u=Object(a["A"])("EnlargeImg");return Object(a["s"])(),Object(a["e"])(a["a"],null,[Object(a["i"])(i),Object(a["i"])(d,{class:"wrapper"}),Object(a["i"])(l,{class:"footer"}),Object(a["f"])("div",{class:Object(a["o"])(["goTop",{showGoTop:r.showGoTop}]),onClick:t[0]||(t[0]=(...e)=>s.goTop&&s.goTop(...e))},o,2),Object(a["i"])(u)],64)}Object(a["v"])("data-v-74135e2d");const s={id:"header",class:"flex flex-down"},i={key:0,class:"discord-top-link flex",style:{width:"100%"}},d=Object(a["f"])("div",null,null,-1),l=Object(a["f"])("div",{class:"flex",style:{width:"80%"}},[Object(a["f"])("p",null," 遇到問題了?有建議要提供?想一起聊天?讓我們一起壯大 Minecraft 社群吧!! "),Object(a["f"])("a",{class:"btn",href:"https://discord.com/invite/5xApZtgV2u",style:{"--thisColor":"rgb(173, 173, 173)"}},"加入 RPMTW 官方 Discord 伺服器")],-1),u={class:"flex else-discord"},h={class:"header-nav-left"},b=Object(a["f"])("a",{href:"#"},[Object(a["f"])("div",{class:"menuStyle"})],-1),m=Object(a["g"])('<div class="links flex" data-v-74135e2d><a href="https://discord.com/invite/5xApZtgV2u" data-v-74135e2d><img src="https://discord.com/assets/847541504914fd33810e70a0ea73177e.ico" alt="" data-v-74135e2d></a><a href="https://github.com/RPMTW" data-v-74135e2d><img src="https://github.com/fluidicon.png" alt="" data-v-74135e2d></a><a href="https://modrinth.com/mod/rpmtw-update-mod" data-v-74135e2d><img src="https://modrinth.com/favicon.ico" alt="" data-v-74135e2d></a><a href="https://www.curseforge.com/minecraft/modpacks/atr1" data-v-74135e2d><img src="https://media.forgecdn.net/avatars/thumbnails/396/29/64/64/637595082272657724.png" alt="" data-v-74135e2d></a><a href="https://crowdin.com/project/resourcepack-mod-zhtw?already_accepted=14797842" data-v-74135e2d><img src="https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png" alt="" data-v-74135e2d></a></div>',1),f={class:"div-select flex flex-down"},p=["value"],g=Object(a["f"])("div",{class:"txt-logo user-select"},[Object(a["f"])("strong",{class:"main-title"},[Object(a["f"])("span",{class:"notranslate",style:{color:"#ff9900"}},"RPM"),Object(a["f"])("span",{style:{color:"#00ffff"},class:"notranslate"},"TW")])],-1),O={class:"header-nav-right"},j=Object(a["f"])("i",{class:"fas fa-sun"},null,-1),k=[j];function v(e,t,n,c,o,r){const j=Object(a["A"])("router-link");return Object(a["s"])(),Object(a["e"])("header",s,[o.discordLinkShow?(Object(a["s"])(),Object(a["e"])("div",i,[d,l,Object(a["f"])("div",{class:"icon x",onClick:t[0]||(t[0]=(...e)=>r.noDiscordLink&&r.noDiscordLink(...e))})])):Object(a["d"])("",!0),Object(a["f"])("div",u,[Object(a["f"])("div",h,[Object(a["f"])("div",{class:"menuButton",onClick:t[4]||(t[4]=(...e)=>r.menuButtonHtmlToggle&&r.menuButtonHtmlToggle(...e))},[b,Object(a["f"])("div",{class:"menu",onMouseleave:t[3]||(t[3]=(...e)=>r.menuButtonHtmlToggle&&r.menuButtonHtmlToggle(...e))},[(Object(a["s"])(!0),Object(a["e"])(a["a"],null,Object(a["y"])(o.menuList,e=>(Object(a["s"])(),Object(a["e"])("div",{key:e,class:Object(a["o"])([{active:o.breadcrumb===e.breadcrumb},"activeBreadcrumb"])},[Object(a["i"])(j,{to:e.to,class:"go-to"},{default:Object(a["H"])(()=>[Object(a["h"])(Object(a["C"])(e.name),1)]),_:2},1032,["to"])],2))),128)),m,Object(a["f"])("div",f,[Object(a["f"])("h1",{class:"nowLang notranslate langMenu",onClick:t[1]||(t[1]=(...e)=>r.showLangOptions&&r.showLangOptions(...e))},Object(a["C"])(o.lang),1),(Object(a["s"])(!0),Object(a["e"])(a["a"],null,Object(a["y"])(o.langs,(e,n)=>(Object(a["s"])(),Object(a["e"])("div",{class:"div-option none langMenu notranslate",value:n,key:n,onClick:t[2]||(t[2]=(...e)=>r.setChoose&&r.setChoose(...e))},Object(a["C"])(e),9,p))),128))])],32)]),Object(a["f"])("div",{class:"blurry",onClick:t[5]||(t[5]=(...e)=>r.menuButtonHtmlToggle&&r.menuButtonHtmlToggle(...e))})]),g,Object(a["f"])("div",O,[Object(a["f"])("div",{class:"header-nav-setMode",onClick:t[6]||(t[6]=(...e)=>r.headerSetMode_click&&r.headerSetMode_click(...e)),rod:""},[Object(a["f"])("span",{class:Object(a["o"])({"mode-bright":o.bright,"mode-dark":!o.bright})},k,2)])])])])}Object(a["t"])();var w=n("9225"),T=n("8b64");function y(e,t=""){return w["a"].i18nData[w["a"].getLang()][e]||w["a"].i18nData[w["a"].set.main][e]||t}let M=0;var C={name:"Header",data(){return{langs:w["a"].set.langs,lang:`${w["a"].set.langs[w["a"].getLang()]} (${w["a"].getLang()})`,menuList:T,breadcrumb:null,bright:!1,discordLinkShow:!0}},components:{},methods:{i18n:y,showLangOptions(){$("div.div-option.langMenu").toggleClass("none")},setChoose(e){let t=$(e.target).attr("value");this.lang=`${w["a"].set.langs[t]} (${t})`,w["a"].setLang(t)},headerSetMode_click(){let e=$("html").toggleClass("bright").attr("class").split(" ").includes("bright");this.bright=e,document.cookie=e?"mode=bright":"mode=dark"},menuButtonHtmlToggle(){$("html").toggleClass("is-menu")},setBreadcrumb(){this.breadcrumb=this.$route.meta.breadcrumb},noDiscordLink(){localStorage.setItem("discordLink",0),this.discordLinkShow=!1,this.discordLinkShow&&$("html").css("--html-margin-top","95px")||$("html").css("--html-margin-top","45px")}},mounted(){let e=this;this.discordLinkShow=0!==parseInt(localStorage.getItem("discordLink")),$((function(){function t(){let e=Math.floor($(window).scrollTop()),t=$("#header"),n="slider--up",a="slider--down";0===e?(setTimeout(()=>{t.addClass(n)},250),t.removeClass(a)):M>e?(t.addClass(n),t.removeClass(a)):$("html").hasClass("is-menu")||(t.addClass(a),t.removeClass(n)),M=e}e.discordLinkShow&&$("html").css("--html-margin-top","95px")||$("html").css("--html-margin-top","45px"),$(window).on("scroll",()=>t()),t()})),this.setBreadcrumb();let t=("; "+document.cookie).split("; mode=");2===t.length&&"bright"===t.pop().split(";").shift()?$("html").addClass("bright"):document.cookie="mode=dark",document.cookie.length<=0&&alert("建議開啟 cookie 已獲得更好的體驗");let n=$("html").attr("class");this.bright=n&&n.split(" ").includes("bright")},watch:{$route(){this.setBreadcrumb()}}};n("fccd"),n("a203");C.render=v,C.__scopeId="data-v-74135e2d";var P=C;Object(a["v"])("data-v-7d26f03e");const H={key:0,class:"Footer"},x={class:"flex flex-down"},A=Object(a["f"])("a",{href:"https://github.com/RPMTW"},"RPMTW Team",-1),W=Object(a["h"])(" and "),L=Object(a["f"])("a",{href:"https://github.com/a3510377"},"猴子#3807",-1);function S(e,t,n,c,o,r){return o.notFooter?(Object(a["s"])(),Object(a["e"])("div",H,[Object(a["f"])("footer",x,[Object(a["f"])("p",null,[Object(a["h"])(" Copyright © RPMTW "+Object(a["C"])(o.newYear)+" Powered by The ",1),A,W,L])])])):Object(a["d"])("",!0)}Object(a["t"])();var I={name:"Footer",data(){return{notFooter:!0,newYear:(new Date).getFullYear()}},watch:{$route(){this.notFooter=!this.$route.meta.notFooter}}};n("58db");I.render=S,I.__scopeId="data-v-7d26f03e";var _=I;Object(a["v"])("data-v-705397fe");const R={id:"Enlarge"},F={key:0,class:"showImg scaleDraw"},E=["src"],D={class:"img-description"};function B(e,t,n,c,o,r){return Object(a["I"])((Object(a["s"])(),Object(a["e"])("div",R,[o.showImg?(Object(a["s"])(),Object(a["e"])("div",F,[Object(a["f"])("img",{src:o.showImg,class:"not-enlarge",alt:""},null,8,E),Object(a["f"])("p",D,Object(a["C"])(o.description),1)])):Object(a["d"])("",!0),Object(a["f"])("div",{class:"EnlargeImg-blurry",onClick:t[0]||(t[0]=e=>o.showImg=!o.showImg)})],512)),[[a["F"],o.showImg]])}Object(a["t"])();var Q={name:"EnlargeImg",data(){return{showImg:null,description:null}},methods:{},mounted(){let e=this;$((function(){$("html").on("click","img.showEl",(function(t){e.showImg=$(this).attr("src")||null,e.description=$(this).attr("alt"),$("html").addClass("enlarge"),$("#EnlargeImg.not-enlarge").css({width:$(this).css("width"),height:$(this).css("height")})}))}))}};n("acc1"),n("6bfc");Q.render=B,Q.__scopeId="data-v-705397fe";var N=Q,z=(n("a0f1"),n("c1c3"),{name:"Main",components:{Header:P,Footer:_,EnlargeImg:N},methods:{goTop(){$("html").animate({scrollTop:0},400)}},data(){return{showGoTop:!1}},mounted(){let e=this;$((function(){$(window).on("scroll",()=>e.showGoTop=$(window).scrollTop()>=600)}))}});n("088f");z.render=r;var U=z,J=n("6c02"),V=n("b9ac"),G=n.n(V);const Y={id:"AssistTranslation",class:"wiki"},q={class:"content"},Z=Object(a["f"])("section",{class:"section",id:"what-is-RPMTW"},[Object(a["f"])("h1",null,"什麼是 RPMTW 自動中文化更新模組?"),Object(a["f"])("p",null," 此模組是一個Minecraft模組繁體中文化的新興模組，主打「方便、快速、簡單、合作」，希望能夠打破傳統翻譯模組的方式，以及解決許多新/老手想翻譯模組但卻覺得很難/遊玩模組時被看不懂的文字困惑。 ")],-1),K={class:"section",id:"install-method"},X=Object(a["f"])("h1",null,"這模組要如何安裝?",-1),ee=Object(a["h"])("<<點我查看教學>>"),te=Object(a["f"])("section",{class:"section",id:"server-need-install"},[Object(a["f"])("h1",null,"伺服器端需要安裝嗎?"),Object(a["f"])("p",null," 伺服器不用安裝，因為伺服器端不會顯示內容並不需要安裝此模組，只需客戶端安裝就能享受漢化體驗。 ")],-1),ne=Object(a["f"])("section",{class:"section",id:"RPMTW-version"},[Object(a["f"])("h1",null,"RPMTW 支援 1.12.2 以下的版本嗎? RPMTW支援那些Minecraft版本?"),Object(a["f"])("p",null,[Object(a["h"])(" RPMTW 「不打算」支援 1.12.2 以下的Minecraft版本。"),Object(a["f"])("br"),Object(a["h"])(" 目前RPMTW支援的版本有 1.12、1.16、1.17，未來有新版本釋出也會盡快更新。 ")])],-1),ae=Object(a["f"])("section",{class:"section",id:"support-forge-or-fabric"},[Object(a["f"])("h1",null,"RPMTW 支援Forge嗎? 支援Fabric嗎?"),Object(a["f"])("p",null,[Object(a["f"])("span",{style:{"text-decoration":"line-through"}},"小孩子才做選擇，RPMTW 全都要"),Object(a["h"])(" (Forge/Fabric雙平台都支援)。 ")])],-1),ce={class:"section",id:"discord-or-line"},oe=Object(a["f"])("h1",null,"有Discord或Line嗎? 我想詢問相關問題/建議",-1),re=Object(a["h"])(" 如果需要聯繫我們 "),se=Object(a["h"])(" <<點我查看聯繫方式>> "),ie=Object(a["h"])("。 "),de=Object(a["f"])("section",{class:"section",id:"translation-process"},[Object(a["f"])("h1",null,"這什麼原理，可以全自動化的翻譯流程?"),Object(a["f"])("p",null,"下方有一張簡易的示意圖喔w"),Object(a["f"])("br"),Object(a["f"])("img",{src:G.a,alt:"簡易的示意圖"})],-1);function le(e,t,n,c,o,r){const s=Object(a["A"])("router-link");return Object(a["s"])(),Object(a["e"])("div",Y,[Object(a["f"])("div",q,[Z,Object(a["f"])("section",K,[X,Object(a["i"])(s,{to:"/install/version"},{default:Object(a["H"])(()=>[ee]),_:1})]),te,ne,ae,Object(a["f"])("section",ce,[oe,Object(a["f"])("p",null,[re,Object(a["i"])(s,{to:"/About"},{default:Object(a["H"])(()=>[se]),_:1}),ie])]),de])])}var ue={name:"QandA",data(){return{}}};ue.render=le;var he=ue;const be=[{path:"/",name:"Home",component:()=>n.e("chunk-a9c4fab2").then(n.bind(null,"bb51")),meta:{breadcrumb:"Home"}},{path:"/about",name:"About",component:()=>n.e("chunk-629f7d39").then(n.bind(null,"f820")),meta:{breadcrumb:"About"}},{path:"/Contributor",name:"Contributor",component:()=>n.e("chunk-1164a354").then(n.bind(null,"dd86")),meta:{breadcrumb:"Contributor"}},{path:"/Translation-assistance",name:"Assistance",component:()=>n.e("chunk-5f8f143f").then(n.bind(null,"f74e")),meta:{breadcrumb:"Assistance"}},{path:"/Translation-assistance/Translation-Tutorials",name:"Tutorials",component:()=>n.e("chunk-05e41e75").then(n.bind(null,"2d34"))},{path:"/ProgressQuery",name:"ProgressQuery",component:()=>n.e("chunk-d2692a16").then(n.bind(null,"964f")),meta:{breadcrumb:"ProgressQuery"}},{path:"/Wiki",name:"WikiMenuList",meta:{breadcrumb:"Wiki",notFooter:!0},component:()=>n.e("chunk-5d3d5c8a").then(n.bind(null,"c89e")),children:[{path:"",components:{data:he}},{path:"QandA",components:{data:he}},{path:"AssistTranslation",components:{data:()=>n.e("chunk-dec42738").then(n.bind(null,"1b8e"))}},{path:"InstallAndUse",components:{data:()=>n.e("chunk-2d225de6").then(n.bind(null,"e5dd"))}},{path:"ModInfo",components:{data:()=>n.e("chunk-8d136a46").then(n.bind(null,"38c0"))}},{path:"OtherInfo",components:{data:()=>n.e("chunk-2d0da7d0").then(n.bind(null,"6c8e"))}}]},{path:"/RPMTWUpdateMod",name:"RPMTWUpdateMod",component:()=>n.e("chunk-fccc629a").then(n.bind(null,"752c"))},{path:"/install/version",name:"Version",component:()=>n.e("chunk-88daf696").then(n.bind(null,"733e")),meta:{breadcrumb:"Version",notFooter:!0}},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>n.e("chunk-4bf2bc4a").then(n.bind(null,"4b62")),meta:{breadcrumb:"ProgressQuery",notFooter:!0}},{path:"/atr1",name:"ATR1",component:()=>n.e("chunk-cca6d3b8").then(n.bind(null,"a951"))},{path:"/test",name:"TEST",component:()=>n.e("chunk-2d0daa96").then(n.bind(null,"6d0b"))}],me=Object(J["a"])({history:Object(J["b"])("/"),routes:be});me.beforeEach((e,t,n)=>{document.title=e.meta.title||document.title,n()});var fe=me,pe=n("5502"),ge=Object(pe["a"])({state:{},mutations:{},actions:{},modules:{}});Object(a["c"])(U).use(ge).use(fe).mount("main")},"58db":function(e,t,n){"use strict";n("cc55")},"5aad":function(e){e.exports=JSON.parse('{"plug.header.menu.home":"首頁","plug.header.menu.assistance":"協助翻譯","plug.header.menu.Wikipedia":"維基百科","plug.header.menu.tool":"實用工具","plug.header.menu.rank":"翻譯者排名","plug.header.menu.about":"關於我們","Home.include.public.DL-STAT":"立即下載","Home.include.public.read-more":"閱讀更多","Home.include.mod.name":"自動中文化更新模組","Home.include.mod.description":"體驗前所未見的模組翻譯，讓你的模組通通變中文吧！","Home.include.atr.name.0":"ATR 1 - All The RPMTW","Home.include.atr.name.1":"模組包","Home.include.atr.description":"1.17 全新模組包，結合各種元素，盡情在織物上探險吧！","Home.top12.title":"翻譯貢獻者前12名 - 感謝你們的貢獻","Home.top12.show-more":"查看更多翻譯貢獻者","Home.announcement.datas":["Classical Chinese: The Illusionary World of Siong -> Vernacular Chinese: The Fantasy World of Cabbage!?!?"],"Home.scroll.texts":["前所未見的模組繁中化","社群協力合作","翻譯全自動更新","跳脫傳統框架","遊戲內翻譯模組","專屬為您設計","與我們一起當個創世神！"]}')},6742:function(e){e.exports=JSON.parse("{}")},"6bfc":function(e,t,n){"use strict";n("2fe6")},"8b64":function(e){e.exports=JSON.parse('[{"to":"/","name":"首頁","breadcrumb":"Home"},{"to":"/Translation-assistance","name":"協助翻譯","breadcrumb":"Assistance"},{"to":"/Wiki","name":"維基百科","breadcrumb":"Wiki"},{"to":"/ProgressQuery","name":"實用工具","breadcrumb":"ProgressQuery"},{"to":"/Contributor","name":"翻譯貢獻者排名","breadcrumb":"Contributor"},{"to":"/About","name":"關於我們","breadcrumb":"About"},{"to":"/install/version","name":"下載本模組","breadcrumb":"Version"}]')},9225:function(e,t,n){"use strict";var a=n("10ee"),c=n("6742"),o=n("5aad");t["a"]={set:{main:"zh_tw",langs:{zh_tw:"繁體中文",zh_cn:"简体中文",en_us:"English"}},getLang(){return localStorage.getItem("lang")||this.set.main},setLang(e){return localStorage.setItem("lang",e),window.location.reload()},i18nData:{zh_tw:a,zh_cn:c,en_us:o}}},a0f1:function(e,t,n){},a203:function(e,t,n){"use strict";n("e312")},acc1:function(e,t,n){"use strict";n("1d24")},b9ac:function(e,t,n){e.exports=n.p+"img/autoTranslation.1a4e811f.png"},c1c3:function(e,t,n){},cc55:function(e,t,n){},e312:function(e,t,n){},fccd:function(e,t,n){"use strict";n("1df8")}});
//# sourceMappingURL=app.3a032f79.js.map