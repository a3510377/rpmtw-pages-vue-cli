(function(e){function t(t){for(var a,o,s=t[0],i=t[1],l=t[2],d=0,u=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&u.push(c[o][0]),c[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);b&&b(t);while(u.length)u.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==c[s]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={app:0},c={app:0},r=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-18277ad3":"4d9abf35","chunk-2d0da7d0":"535d87b8","chunk-2d0daa96":"e1e9b7db","chunk-2d225de6":"c0fd1723","chunk-3dfe8629":"13400654","chunk-4bf2bc4a":"e30e404c","chunk-539539c6":"aa9027f3","chunk-5d3d5c8a":"58330fba","chunk-5ee39fd4":"0a081263","chunk-601298ab":"af82b727","chunk-618f7a12":"7fd1a33c","chunk-65466028":"b3755df5","chunk-6ea13b7a":"2e70197b","chunk-8d136a46":"90bee672","chunk-8eb4d2dc":"96890abd","chunk-a514f352":"e0bb1a4d","chunk-dec42738":"00ba0b27"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-18277ad3":1,"chunk-3dfe8629":1,"chunk-4bf2bc4a":1,"chunk-539539c6":1,"chunk-5d3d5c8a":1,"chunk-5ee39fd4":1,"chunk-601298ab":1,"chunk-618f7a12":1,"chunk-65466028":1,"chunk-6ea13b7a":1,"chunk-8eb4d2dc":1,"chunk-a514f352":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-18277ad3":"e19173ec","chunk-2d0da7d0":"31d6cfe0","chunk-2d0daa96":"31d6cfe0","chunk-2d225de6":"31d6cfe0","chunk-3dfe8629":"dab3fd90","chunk-4bf2bc4a":"b56e6ab2","chunk-539539c6":"6fde3ce6","chunk-5d3d5c8a":"428cd3c4","chunk-5ee39fd4":"51980867","chunk-601298ab":"80caf3e7","chunk-618f7a12":"51fb7cc4","chunk-65466028":"eb156045","chunk-6ea13b7a":"3341eb20","chunk-8d136a46":"31d6cfe0","chunk-8eb4d2dc":"3077142f","chunk-a514f352":"edaade02","chunk-dec42738":"31d6cfe0"}[e]+".css",c=i.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===a||d===c))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){l=u[s],d=l.getAttribute("data-href");if(d===a||d===c)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var a=t&&t.target&&t.target.src||c,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete o[e],b.parentNode.removeChild(b),n(r)},b.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(b)})).then((function(){o[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=s(e);var u=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(b);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,n[1](u)}c[e]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var b=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0017":function(e,t,n){},"01b4":function(e,t,n){"use strict";n("9a11")},"0dc7":function(e,t,n){"use strict";n("0017")},"10ee":function(e){e.exports=JSON.parse('{"public.Game.version":"遊戲版本","public.goto.discord":"加入官方社群 (Discord)","plug.header.menu.home":"首頁","plug.header.menu.assistance":"協助翻譯","plug.header.menu.Wikipedia":"維基百科","plug.header.menu.tool":"實用工具","plug.header.menu.rank":"翻譯者排名","plug.header.menu.about":"關於我們","Home.include.public.DL-STAT":"立即下載","Home.include.public.read-more":"閱讀更多","Home.include.mod.name":"自動中文化更新模組","Home.include.mod.description":"體驗前所未見的模組翻譯，讓你的模組通通變中文吧！","Home.include.atr.name.0":"ATR 1 - All The RPMTW","Home.include.atr.name.1":"模組包","Home.include.atr.description":"1.17 全新模組包，結合各種元素，盡情在織物上探險吧！","Home.top12.title":"翻譯貢獻者前12名 - 感謝你們的貢獻","Home.top12.show-more":"查看更多翻譯貢獻者","Home.announcement.title":"公告","Home.announcement.datas":["文言文：菘之幻界->白話文：白菜的幻想世界!?!?","網頁的手機頁面??就差Wiki阿!!!!","RPMTW 官方模組啟動器製作中...","ATR官方伺服器目前為關閉狀態","較安全的模組下載平台: 作者授權平台、Modrinth、CurseForge 黑名單模組下載平台：9Minecraft"],"Home.scroll.texts":["前所未見的模組繁中化","社群協力合作","翻譯全自動更新","跳脫傳統框架","遊戲內翻譯模組","專屬為您設計","與我們一起當個創世神！"],"ProgressQuery.please.enter.CurseForgeID":"請輸入CurseForgeID","ProgressQuery.title":"RPMTW 模組個別翻譯進度查詢器","ProgressQuery.description.0":"不知道自己喜歡的模組有沒有被翻譯呢?或者想了解模組的翻譯進度，那用這個工具就對了","ProgressQuery.description.1":"(目前仍處測試版狀態，資料庫尚未齊全，因此部分模組查無資料屬正常現象)","ProgressQuery.Filter.condition":"過濾條件","RPMTWUpdateMod.buttons.Participate":"參與模組翻譯","RPMTWUpdateMod.main.title":"體驗前所未見的模組繁中化","RPMTWUpdateMod.schedule.Full.version":"全版本模組翻譯進度"}')},"1f16":function(e,t,n){},"2fb3":function(e,t,n){"use strict";n("1f16")},4486:function(e,t,n){"use strict";n("9223")},4544:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("7a23");const o=Object(a["f"])("div",{class:"flex flex-down"},[Object(a["f"])("img",{src:"https://cdn.discordapp.com/avatars/645588343228334080/f56a0b0223d5f32b902edcb362d08a5d.webp?size=128",alt:""})],-1),c=[o];function r(e,t,n,o,r,s){const i=Object(a["A"])("Header"),l=Object(a["A"])("router-view"),d=Object(a["A"])("Footer"),u=Object(a["A"])("EnlargeImg");return Object(a["s"])(),Object(a["e"])(a["a"],null,[Object(a["i"])(i),Object(a["i"])(l,{class:"wrapper"}),Object(a["i"])(d,{class:"footer"}),Object(a["f"])("div",{class:Object(a["o"])(["goTop",{showGoTop:r.showGoTop}]),onClick:t[0]||(t[0]=(...e)=>s.goTop&&s.goTop(...e))},c,2),Object(a["i"])(u)],64)}Object(a["v"])("data-v-0ea854e4");const s={id:"header",class:"flex flex-down"},i={key:0,class:"discord-top-link flex",style:{width:"100%"}},l=Object(a["f"])("div",null,null,-1),d=Object(a["f"])("div",{class:"flex",style:{width:"80%"}},[Object(a["f"])("p",null," 遇到問題了?有建議要提供?想一起聊天?讓我們一起壯大 Minecraft 社群吧!! "),Object(a["f"])("a",{target:"_blank",class:"btn",href:"https://discord.com/invite/5xApZtgV2u",style:{"--thisColor":"rgb(173, 173, 173)"}},"加入 RPMTW 官方 Discord 伺服器")],-1),u={class:"flex else-discord"},b={class:"header-nav-left"},h={class:"menuButton"},m=Object(a["f"])("div",{class:"menuStyle"},null,-1),f=[m],p=Object(a["g"])('<div class="links flex" data-v-0ea854e4><a target="_blank" href="https://discord.com/invite/5xApZtgV2u" data-v-0ea854e4><img src="https://discord.com/assets/847541504914fd33810e70a0ea73177e.ico" alt="" data-v-0ea854e4></a><a target="_blank" href="https://github.com/RPMTW" data-v-0ea854e4><img src="https://github.com/fluidicon.png" alt="" data-v-0ea854e4></a><a target="_blank" href="https://modrinth.com/mod/rpmtw-update-mod" data-v-0ea854e4><img src="https://modrinth.com/favicon.ico" alt="" data-v-0ea854e4></a><a target="_blank" href="https://www.curseforge.com/minecraft/modpacks/atr1" data-v-0ea854e4><img src="https://media.forgecdn.net/avatars/thumbnails/396/29/64/64/637595082272657724.png" alt="" data-v-0ea854e4></a><a target="_blank" href="https://crowdin.com/project/resourcepack-mod-zhtw?already_accepted=14797842" data-v-0ea854e4><img src="https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png" alt="" data-v-0ea854e4></a></div>',1),g={class:"div-select flex flex-down"},O=["value"],j=Object(a["f"])("div",{class:"txt-logo user-select"},[Object(a["f"])("strong",{class:"main-title"},[Object(a["f"])("span",{class:"notranslate",style:{color:"#ff9900"}},"RPM"),Object(a["f"])("span",{style:{color:"#00ffff"},class:"notranslate"},"TW")])],-1),k={class:"header-nav-right"},v=Object(a["f"])("i",{class:"fas fa-sun"},null,-1),w=[v];function T(e,t,n,o,c,r){const m=Object(a["A"])("router-link");return Object(a["s"])(),Object(a["e"])("header",s,[c.discordLinkShow?(Object(a["s"])(),Object(a["e"])("div",i,[l,d,Object(a["f"])("div",{class:"icon x",onClick:t[0]||(t[0]=(...e)=>r.noDiscordLink&&r.noDiscordLink(...e))})])):Object(a["d"])("",!0),Object(a["f"])("div",u,[Object(a["f"])("div",b,[Object(a["f"])("div",h,[Object(a["f"])("div",{class:"menuStyleButton",href:"#",onClick:t[1]||(t[1]=(...e)=>r.menuButtonHtmlToggle&&r.menuButtonHtmlToggle(...e))},f),Object(a["f"])("div",{class:"menu",onMouseleave:t[4]||(t[4]=(...e)=>r.menuButtonHtmlRemove&&r.menuButtonHtmlRemove(...e))},[(Object(a["s"])(!0),Object(a["e"])(a["a"],null,Object(a["y"])(c.menuList,e=>(Object(a["s"])(),Object(a["e"])("div",{key:e,class:Object(a["o"])([{active:c.breadcrumb===e.breadcrumb},"activeBreadcrumb"])},[Object(a["i"])(m,{class:"go-to",to:e.to,onClick:r.menuButtonHtmlRemove},{default:Object(a["H"])(()=>[Object(a["h"])(Object(a["C"])(e.name),1)]),_:2},1032,["to","onClick"])],2))),128)),p,Object(a["f"])("div",g,[Object(a["f"])("h1",{class:"nowLang notranslate langMenu",onClick:t[2]||(t[2]=(...e)=>r.showLangOptions&&r.showLangOptions(...e))},Object(a["C"])(c.lang),1),(Object(a["s"])(!0),Object(a["e"])(a["a"],null,Object(a["y"])(c.langs,(e,n)=>(Object(a["s"])(),Object(a["e"])("div",{class:"div-option none langMenu notranslate",value:n,key:n,onClick:t[3]||(t[3]=(...e)=>r.setChoose&&r.setChoose(...e))},Object(a["C"])(e),9,O))),128))])],32)]),Object(a["f"])("div",{class:"blurry",onClick:t[5]||(t[5]=(...e)=>r.menuButtonHtmlRemove&&r.menuButtonHtmlRemove(...e))})]),j,Object(a["f"])("div",k,[Object(a["f"])("div",{class:"header-nav-setMode",onClick:t[6]||(t[6]=(...e)=>r.headerSetMode_click&&r.headerSetMode_click(...e)),rod:""},[Object(a["f"])("span",{class:Object(a["o"])({"mode-bright":c.bright,"mode-dark":!c.bright})},w,2)])])])])}Object(a["t"])();var y=n("9225"),C=n("8b64");function M(e,t=""){return y["a"].i18nData[y["a"].getLang()][e]||y["a"].i18nData[y["a"].set.main][e]||t}let P=0;var H={name:"Header",data(){return{langs:y["a"].set.langs,lang:`${y["a"].set.langs[y["a"].getLang()]} (${y["a"].getLang()})`,menuList:C,breadcrumb:null,bright:!1,discordLinkShow:!0}},components:{},methods:{i18n:M,showLangOptions(){$("div.div-option.langMenu").toggleClass("none")},setChoose(e){let t=$(e.target).attr("value");this.lang=`${y["a"].set.langs[t]} (${t})`,y["a"].setLang(t)},headerSetMode_click(){let e=$("html").toggleClass("bright").attr("class").split(" ").includes("bright");this.bright=e,document.cookie=e?"mode=bright":"mode=dark"},menuButtonHtmlToggle(){$("html").toggleClass("is-menu")},menuButtonHtmlRemove(){$("html").removeClass("is-menu")},setBreadcrumb(){this.breadcrumb=this.$route.meta.breadcrumb},noDiscordLink(){localStorage.setItem("discordLink",0),this.discordLinkShow=!1,this.discordLinkShow&&$(":root").css("--html-margin-top","95px")||$(":root").css("--html-margin-top","45px")}},mounted(){let e=this;this.discordLinkShow=0!==parseInt(localStorage.getItem("discordLink")),$((function(){function t(){let e=Math.floor($(window).scrollTop()),t=$("#header"),n="slider--up",a="slider--down";0===e?(setTimeout(()=>{t.addClass(n)},250),t.removeClass(a)):P>e?(t.addClass(n),t.removeClass(a)):$("html").hasClass("is-menu")||(t.addClass(a),t.removeClass(n)),P=e}e.discordLinkShow&&$("html").css("--html-margin-top","95px")||$("html").css("--html-margin-top","45px"),$(window).on("scroll",()=>t()),t()})),this.setBreadcrumb();let t=("; "+document.cookie).split("; mode=");2===t.length&&"bright"===t.pop().split(";").shift()?$("html").addClass("bright"):document.cookie="mode=dark",document.cookie.length<=0&&alert("建議開啟 cookie 已獲得更好的體驗");let n=$("html").attr("class");this.bright=n&&n.split(" ").includes("bright")},watch:{$route(){this.setBreadcrumb()}}};n("01b4"),n("ff11");H.render=T,H.__scopeId="data-v-0ea854e4";var _=H;Object(a["v"])("data-v-2555ee8f");const x={key:0,class:"Footer"},A={class:"flex flex-down"},R=Object(a["f"])("a",{target:"_blank",href:"https://github.com/RPMTW"},"RPMTW Team",-1),W=Object(a["h"])(" and "),L=Object(a["f"])("a",{target:"_blank",href:"https://github.com/a3510377"},"猴子#3807",-1);function S(e,t,n,o,c,r){return c.notFooter?(Object(a["s"])(),Object(a["e"])("div",x,[Object(a["f"])("footer",A,[Object(a["f"])("p",null,[Object(a["h"])(" Copyright © RPMTW "+Object(a["C"])(c.newYear)+" Powered by The ",1),R,W,L])])])):Object(a["d"])("",!0)}Object(a["t"])();var I={name:"Footer",data(){return{notFooter:!0,newYear:(new Date).getFullYear()}},watch:{$route(){this.notFooter=!this.$route.meta.notFooter}}};n("4486");I.render=S,I.__scopeId="data-v-2555ee8f";var F=I;Object(a["v"])("data-v-5b7a9e13");const D={id:"Enlarge"},E={key:0,class:"showImg scaleDraw"},B=["src"],Q={class:"img-description"};function N(e,t,n,o,c,r){return Object(a["I"])((Object(a["s"])(),Object(a["e"])("div",D,[c.showImg?(Object(a["s"])(),Object(a["e"])("div",E,[Object(a["f"])("img",{src:c.showImg,class:"not-enlarge",alt:""},null,8,B),Object(a["f"])("p",Q,Object(a["C"])(c.description),1)])):Object(a["d"])("",!0),Object(a["f"])("div",{class:"EnlargeImg-blurry",onClick:t[0]||(t[0]=e=>{c.showImg=!1,c.showData=!1})})],512)),[[a["F"],c.showImg]])}Object(a["t"])();var z={name:"EnlargeImg",data(){return{showImg:null,showData:null,description:null}},methods:{},mounted(){let e=this;$((function(){$("html").on("click","img.showEl",(function(t){e.showImg=$(this).attr("src")||null,e.description=$(this).attr("alt"),$("html").addClass("enlarge"),$("#EnlargeImg.not-enlarge").css({width:$(this).css("width"),height:$(this).css("height")})})),$("html").on("click",".showData",(function(e){}))}))}};n("2fb3"),n("f36f");z.render=N,z.__scopeId="data-v-5b7a9e13";var U=z,J=(n("a0f1"),n("c1c3"),{name:"Main",components:{Header:_,Footer:F,EnlargeImg:U},methods:{goTop(){$("html").animate({scrollTop:0},400)}},data(){return{showGoTop:!1}},mounted(){let e=this;$((function(){$(window).on("scroll",()=>e.showGoTop=$(window).scrollTop()>=600)}))}});n("0dc7");J.render=r;var G=J,V=n("6c02"),Y=n("b9ac"),q=n.n(Y);const Z={id:"AssistTranslation",class:"wiki"},K={class:"content"},X=Object(a["f"])("section",{class:"section",id:"what-is-RPMTW"},[Object(a["f"])("h1",null,"什麼是 RPMTW 自動中文化更新模組?"),Object(a["f"])("p",null," 此模組是一個Minecraft模組繁體中文化的新興模組，主打「方便、快速、簡單、合作」，希望能夠打破傳統翻譯模組的方式，以及解決許多新/老手想翻譯模組但卻覺得很難/遊玩模組時被看不懂的文字困惑。 ")],-1),ee={class:"section",id:"install-method"},te=Object(a["f"])("h1",null,"這模組要如何安裝?",-1),ne=Object(a["h"])("<<點我查看教學>>"),ae=Object(a["f"])("section",{class:"section",id:"server-need-install"},[Object(a["f"])("h1",null,"伺服器端需要安裝嗎?"),Object(a["f"])("p",null," 伺服器不用安裝，因為伺服器端不會顯示內容並不需要安裝此模組，只需客戶端安裝就能享受漢化體驗。 ")],-1),oe=Object(a["f"])("section",{class:"section",id:"RPMTW-version"},[Object(a["f"])("h1",null,"RPMTW 支援 1.12.2 以下的版本嗎? RPMTW支援那些Minecraft版本?"),Object(a["f"])("p",null,[Object(a["h"])(" RPMTW 「不打算」支援 1.12.2 以下的Minecraft版本。"),Object(a["f"])("br"),Object(a["h"])(" 目前RPMTW支援的版本有 1.12、1.16、1.17，未來有新版本釋出也會盡快更新。 ")])],-1),ce=Object(a["f"])("section",{class:"section",id:"support-forge-or-fabric"},[Object(a["f"])("h1",null,"RPMTW 支援Forge嗎? 支援Fabric嗎?"),Object(a["f"])("p",null,[Object(a["f"])("span",{style:{"text-decoration":"line-through"}},"小孩子才做選擇，RPMTW 全都要"),Object(a["h"])(" (Forge/Fabric雙平台都支援)。 ")])],-1),re={class:"section",id:"discord-or-line"},se=Object(a["f"])("h1",null,"有Discord或Line嗎? 我想詢問相關問題/建議",-1),ie=Object(a["h"])(" 如果需要聯繫我們 "),le=Object(a["h"])(" <<點我查看聯繫方式>> "),de=Object(a["h"])("。 "),ue=Object(a["f"])("section",{class:"section",id:"translation-process"},[Object(a["f"])("h1",null,"這什麼原理，可以全自動化的翻譯流程?"),Object(a["f"])("p",null,"下方有一張簡易的示意圖喔w"),Object(a["f"])("br"),Object(a["f"])("img",{src:q.a,alt:"簡易的示意圖"})],-1);function be(e,t,n,o,c,r){const s=Object(a["A"])("router-link");return Object(a["s"])(),Object(a["e"])("div",Z,[Object(a["f"])("div",K,[X,Object(a["f"])("section",ee,[te,Object(a["i"])(s,{to:"/install/version"},{default:Object(a["H"])(()=>[ne]),_:1})]),ae,oe,ce,Object(a["f"])("section",re,[se,Object(a["f"])("p",null,[ie,Object(a["i"])(s,{to:"/About"},{default:Object(a["H"])(()=>[le]),_:1}),de])]),ue])])}var he={name:"QandA",data(){return{}}};he.render=be;var me=he;const fe=[{path:"/",name:"Home",component:()=>n.e("chunk-18277ad3").then(n.bind(null,"bb51")),meta:{breadcrumb:"Home"}},{path:"/about",name:"About",component:()=>n.e("chunk-618f7a12").then(n.bind(null,"f820")),meta:{breadcrumb:"About"}},{path:"/Contributor",name:"Contributor",component:()=>n.e("chunk-a514f352").then(n.bind(null,"dd86")),meta:{breadcrumb:"Contributor"}},{path:"/Translation-assistance",name:"Assistance",component:()=>n.e("chunk-539539c6").then(n.bind(null,"f74e")),meta:{breadcrumb:"Assistance"}},{path:"/Translation-assistance/Translation-Tutorials",name:"Tutorials",component:()=>n.e("chunk-6ea13b7a").then(n.bind(null,"2d34"))},{path:"/ProgressQuery",name:"ProgressQuery",component:()=>n.e("chunk-8eb4d2dc").then(n.bind(null,"964f")),meta:{breadcrumb:"ProgressQuery"}},{path:"/Wiki",name:"WikiMenuList",meta:{breadcrumb:"Wiki",notFooter:!0},component:()=>n.e("chunk-5d3d5c8a").then(n.bind(null,"c89e")),children:[{path:"",components:{data:me}},{path:"QandA",components:{data:me}},{path:"AssistTranslation",components:{data:()=>n.e("chunk-dec42738").then(n.bind(null,"1b8e"))}},{path:"InstallAndUse",components:{data:()=>n.e("chunk-2d225de6").then(n.bind(null,"e5dd"))}},{path:"ModInfo",components:{data:()=>n.e("chunk-8d136a46").then(n.bind(null,"38c0"))}},{path:"OtherInfo",components:{data:()=>n.e("chunk-2d0da7d0").then(n.bind(null,"6c8e"))}}]},{path:"/RPMTWUpdateMod",name:"RPMTWUpdateMod",component:()=>n.e("chunk-5ee39fd4").then(n.bind(null,"752c"))},{path:"/install/version",name:"Version",component:()=>n.e("chunk-601298ab").then(n.bind(null,"733e")),meta:{breadcrumb:"Version"}},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>n.e("chunk-4bf2bc4a").then(n.bind(null,"4b62")),meta:{breadcrumb:"ProgressQuery"}},{path:"/atr1",name:"ATR1",component:()=>n.e("chunk-65466028").then(n.bind(null,"a951"))},{path:"/test",name:"TEST",component:()=>n.e("chunk-2d0daa96").then(n.bind(null,"6d0b"))},{path:"/Partner",name:"Partner",component:()=>n.e("chunk-3dfe8629").then(n.bind(null,"2764")),meta:{breadcrumb:"Partner"}}],pe=Object(V["a"])({history:Object(V["b"])("/"),routes:fe});pe.beforeEach((e,t,n)=>{document.title=e.meta.title||document.title,n()});var ge=pe,Oe=n("5502"),je=Object(Oe["a"])({state:{},mutations:{},actions:{},modules:{}});Object(a["c"])(G).use(je).use(ge).mount("main")},"5aad":function(e){e.exports=JSON.parse('{"plug.header.menu.home":"首頁","plug.header.menu.assistance":"協助翻譯","plug.header.menu.Wikipedia":"維基百科","plug.header.menu.tool":"實用工具","plug.header.menu.rank":"翻譯者排名","plug.header.menu.about":"關於我們","Home.include.public.DL-STAT":"立即下載","Home.include.public.read-more":"閱讀更多","Home.include.mod.name":"自動中文化更新模組","Home.include.mod.description":"體驗前所未見的模組翻譯，讓你的模組通通變中文吧！","Home.include.atr.name.0":"ATR 1 - All The RPMTW","Home.include.atr.name.1":"模組包","Home.include.atr.description":"1.17 全新模組包，結合各種元素，盡情在織物上探險吧！","Home.top12.title":"翻譯貢獻者前12名 - 感謝你們的貢獻","Home.top12.show-more":"查看更多翻譯貢獻者","Home.announcement.datas":["Classical Chinese: The Illusionary World of Siong -> Vernacular Chinese: The Fantasy World of Cabbage!?!?"],"Home.scroll.texts":["前所未見的模組繁中化","社群協力合作","翻譯全自動更新","跳脫傳統框架","遊戲內翻譯模組","專屬為您設計","與我們一起當個創世神！"]}')},6742:function(e){e.exports=JSON.parse("{}")},"8b64":function(e){e.exports=JSON.parse('[{"to":"/","name":"首頁","breadcrumb":"Home"},{"to":"/Translation-assistance","name":"協助翻譯","breadcrumb":"Assistance"},{"to":"/Wiki","name":"維基百科","breadcrumb":"Wiki"},{"to":"/ProgressQuery","name":"實用工具","breadcrumb":"ProgressQuery"},{"to":"/Contributor","name":"翻譯貢獻者排名","breadcrumb":"Contributor"},{"to":"/Partner","name":"合作夥伴","breadcrumb":"Partner"},{"to":"/About","name":"關於我們","breadcrumb":"About"}]')},"8cd9":function(e,t,n){},9223:function(e,t,n){},9225:function(e,t,n){"use strict";var a=n("10ee"),o=n("6742"),c=n("5aad");t["a"]={set:{main:"zh_tw",langs:{zh_tw:"繁體中文",zh_cn:"简体中文",en_us:"English"}},getLang(){return localStorage.getItem("lang")||this.set.main},setLang(e){return localStorage.setItem("lang",e),window.location.reload()},i18nData:{zh_tw:a,zh_cn:o,en_us:c}}},"9a11":function(e,t,n){},a0f1:function(e,t,n){},b9ac:function(e,t,n){e.exports=n.p+"img/autoTranslation.1a4e811f.png"},c1c3:function(e,t,n){},f36f:function(e,t,n){"use strict";n("4544")},ff11:function(e,t,n){"use strict";n("8cd9")}});
//# sourceMappingURL=app.b86b4205.js.map