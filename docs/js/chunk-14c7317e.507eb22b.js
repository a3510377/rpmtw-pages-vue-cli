(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14c7317e"],{"0180":function(t,e,o){"use strict";o("2aff")},"09c0":function(t,e,o){"use strict";o.r(e);var n=o("7a23");Object(n["w"])("data-v-b688a0ca");const c={id:"Crowdin",class:"flex flex-down flex-item-center"},s={key:0,class:"userInfo flex flex-item-center"},l=["src"],a=["textContent"];function u(t,e,o,u,i,r){const d=Object(n["B"])("Login"),b=Object(n["B"])("Translation");return Object(n["t"])(),Object(n["f"])("div",c,[Object(n["g"])("div",{class:Object(n["p"])({"CrowdinLogin-blurry":i.go})},null,2),Object(n["K"])(Object(n["g"])("div",{class:Object(n["p"])(["output",{isOk:t.isOK}])},[Object(n["g"])("div",{class:"close icon x",onClick:e[0]||(e[0]=t=>i.output=null)}),Object.keys(i.output||{}).length>0?(Object(n["t"])(),Object(n["f"])("div",s,[Object(n["g"])("img",{src:i.output.avatarUrl,alt:""},null,8,l),Object(n["g"])("p",{textContent:Object(n["D"])(`${i.output.fullName}(${i.output.username}) 登入成功!!`)},null,8,a)])):Object(n["e"])("",!0)],2),[[n["H"],i.output]]),i.go?(Object(n["t"])(),Object(n["d"])(d,{key:0,onGo:e[1]||(e[1]=t=>i.go=!1)})):(Object(n["t"])(),Object(n["d"])(b,{key:1}))])}Object(n["u"])();var i=o("3529"),r=o.n(i),d=o("c455"),b=o("4eba"),O={name:"Crowdin",data(){return{go:null,output:null}},components:{Login:d["default"],Translation:b["default"]},methods:{},mounted(){r.a.getData("/user").done(t=>{this.go=!Object.keys(t).length>0,this.output=t.data,setTimeout(()=>this.output=null,3e3)}).catch(t=>{this.go=!0,401===t.status&&(this.go=!0)})}};o("9c87");O.render=u,O.__scopeId="data-v-b688a0ca";e["default"]=O},"2aff":function(t,e,o){},3529:function(t,e){let o=(t,e=null)=>$.ajax({type:"GET",headers:{Authorization:"Bearer "+(e||getCookie("crowdinToken"))},url:`${Sets.CrowdinBaseAPI}${t}`,success:t=>t});t.exports={getData:o,functions:{getDirectories:(t="1.17",e="",n=1)=>o(`/projects/${Sets.CrowdinID}/directories?directoryId=${Sets.VersionDirID[t]}&offset=${30*n}&limit=30${e?"&filter=filter":""}`),getCurseForgeModInfo:t=>o(`${Sets.CurseForgeAPI}/addon/${t}`),getAllModIndex:(t="1.17")=>$.getJSON(`https://raw.githubusercontent.com/RPMTW/ResourcePack-Mod-zh_tw/${{1.16:"Original"}[t]||"Original-"+t}/${t}/CurseForgeIndex.json`)}}},"4eba":function(t,e,o){"use strict";o.r(e);var n=o("7a23");const c={id:"ModTranslation"},s={class:"sets"},l=Object(n["g"])("label",{for:"modId"},"搜尋模組",-1),a=["value"],u=["value"],i={class:"output"};function r(t,e,o,r,d,b){return Object(n["t"])(),Object(n["f"])("div",c,[Object(n["g"])("div",s,[l,Object(n["K"])(Object(n["g"])("input",{type:"text",id:"modId",placeholder:"請輸入模組ID","onUpdate:modelValue":e[0]||(e[0]=t=>d.data.modId=t),onKeyup:e[1]||(e[1]=Object(n["L"])((...t)=>b.setAll&&b.setAll(...t),["enter"]))},null,544),[[n["G"],d.data.modId]]),Object(n["g"])("div",{class:"btn",onClick:e[2]||(e[2]=(...t)=>b.setAll&&b.setAll(...t))},"搜尋"),Object(n["g"])("select",{id:"version",onClick:e[3]||(e[3]=(...t)=>b.setAll&&b.setAll(...t))},[(Object(n["t"])(),Object(n["f"])("option",{key:t.value=Object.keys(d.Sets.VersionDirID)[0],value:t.value},Object(n["D"])(t.value),9,a)),(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(Object.keys(d.Sets.VersionDirID).slice(1),t=>(Object(n["t"])(),Object(n["f"])("option",{key:t,value:t},Object(n["D"])(t),9,u))),128))])]),Object(n["g"])("div",i,[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(d.mods,t=>(Object(n["t"])(),Object(n["f"])("div",{key:t},Object(n["D"])(t),1))),128))])])}var d=o("3529"),b=o.n(d),O={name:"ModTranslation",data(){return{Sets:window.Sets,data:{version:null,modId:null},mods:null,page:0,resource:null}},methods:{setAll(){let t=this;t.data.version=Array.from($("#version option:checked")).map(t=>t.value)[0],b.a.functions.getAllModIndex(this),b.a.functions.getDirectories(t.data.version,t.data.modId,t.page).done(e=>{t.mods=e.data.map(t=>(t=t.data,{img:t}))})}},mounted(){}};O.render=r;e["default"]=O},5562:function(t,e,o){},"9c87":function(t,e,o){"use strict";o("5562")},c263:function(t,e,o){t.exports=o.p+"img/login.73ed354b.svg"},c455:function(t,e,o){"use strict";o.r(e);var n=o("7a23"),c=o("c263"),s=o.n(c);Object(n["w"])("data-v-5b36673c");const l={id:"CrowdinLogin"},a={class:"data flex flex-down"},u=Object(n["g"])("h2",{class:"title"},"登入 Crowdin 帳號",-1),i={class:"input-token-div"},r=["type","value"],d=Object(n["g"])("label",null,"請輸入登入權杖",-1),b={key:0,class:"userInfo flex flex-item-center"},O=["src"],j=["textContent"],p=["textContent"];function g(t,e,o,c,g,v){return Object(n["t"])(),Object(n["f"])("div",l,[Object(n["g"])("div",a,[u,Object(n["g"])("div",null,[Object(n["g"])("div",i,[Object(n["K"])(Object(n["g"])("input",{id:"inputToken","onUpdate:modelValue":e[0]||(e[0]=t=>g.value=t),type:g.showToken?"text":"password",class:Object(n["p"])({value:g.value}),value:g.value,onKeyup:e[1]||(e[1]=Object(n["L"])((...t)=>v.check&&v.check(...t),["enter"]))},null,42,r),[[n["F"],g.value]]),d]),Object(n["g"])("p",{onClick:e[2]||(e[2]=t=>g.showToken=!g.showToken),class:"showToken-btn user-select text-center"},Object(n["D"])(g.showToken?"隱藏":"顯示")+"登入權杖 ",1)]),Object(n["g"])("img",{class:"icon-login",src:s.a,alt:"登入",onClick:e[3]||(e[3]=(...t)=>v.check&&v.check(...t))})]),Object(n["K"])(Object(n["g"])("div",{class:Object(n["p"])(["output",{isOk:g.isOK}])},[Object(n["g"])("div",{class:"close icon x",onClick:e[4]||(e[4]=t=>g.output=null)}),Object.keys(g.output||{}).length>0&&g.output.avatarUrl?(Object(n["t"])(),Object(n["f"])("div",b,[Object(n["g"])("img",{src:g.output.avatarUrl,alt:""},null,8,O),Object(n["g"])("p",{textContent:Object(n["D"])(`${g.output.fullName}(${g.output.username}) 登入成功!!`)},null,8,j)])):(Object(n["t"])(),Object(n["f"])("h2",{key:1,textContent:Object(n["D"])(g.output)},null,8,p))],2),[[n["H"],g.output]])])}Object(n["u"])();var v=o("3529"),f=o.n(v),h={name:"CrowdinLogin",data(){return{showToken:!1,value:null,output:null,isOK:!0}},components:{},methods:{check(t){this.value?(this.isOK=!0,this.output="登入中...",f.a.getData("/user",this.value).done(t=>{this.output=t.data,this.isOK=!0,setTimeout(()=>{document.cookie="crowdinToken="+this.value,this.$emit("go",this.value)},3e3)}).catch(t=>{401===t.status&&(this.isOK=!1,this.output="登入權杖錯誤!!")})):$("#inputToken").addClass("value-isNull")}},mounted(){this.value=getCookie("crowdinToken")}};o("0180");h.render=g,h.__scopeId="data-v-5b36673c";e["default"]=h}}]);
//# sourceMappingURL=chunk-14c7317e.507eb22b.js.map