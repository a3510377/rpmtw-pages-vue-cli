(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22ea8d4c"],{"40e8":function(e,t,c){"use strict";c("ecff")},dd86:function(e,t,c){"use strict";c.r(t);var s=c("7a23");Object(s["v"])("data-v-21c6f99c");const a={id:"Contributor"},r=Object(s["f"])("div",{class:"loadIng"},[Object(s["f"])("a",null,"正在載入資料中，請稍後...")],-1),n={id:"react-root"},d=["src"],b={class:"card-body"},o={class:"hover"},i=["href"],j={class:"user-name"},l={class:"txt-rank"},u={class:"card-text"},O={class:"card-text"},f={class:"card-text"},h={class:"card-text"},p={class:"card-text"};function v(e,t,c,v,m,w){return Object(s["s"])(),Object(s["e"])("div",a,[r,Object(s["f"])("div",n,[(Object(s["s"])(!0),Object(s["e"])(s["a"],null,Object(s["y"])(m.users,(e,t)=>(Object(s["s"])(),Object(s["e"])("div",{class:"user",key:t},[Object(s["f"])("img",{class:"user-icon",src:e.user.avatarUrl},null,8,d),Object(s["f"])("div",b,[Object(s["f"])("div",o,[Object(s["f"])("a",{target:"_blank",href:"https://crowdin.com/profile/"+e.user.username},[Object(s["f"])("h4",j,[Object(s["f"])("span",l,Object(s["C"])(t+1),1),Object(s["h"])(" "+Object(s["C"])(e.user.fullName),1)])],8,i)]),Object(s["f"])("p",u,"翻譯字數: "+Object(s["C"])(e.translated),1),Object(s["f"])("p",O,"核准翻譯次數: "+Object(s["C"])(e.approved),1),Object(s["f"])("p",f,"投票次數: "+Object(s["C"])(e.voted),1),Object(s["f"])("p",h,"加入專案時間: "+Object(s["C"])(e.user.joined),1),Object(s["f"])("p",p,"翻譯獲得稱讚數: "+Object(s["C"])(e.winning),1)])]))),128))])])}Object(s["t"])();var m={name:"Contributor",methods:{},data(){return{users:[]}},mounted(){$(".loadIng").show(),$.getJSON("https://raw.githubusercontent.com/RPMTW/RPMTW-website-data/main/data/opt.json",e=>{$(".loadIng").hide(),this.users=e.data.slice(0,this.$route.query.max)}).fail(e=>{console.warn(e),$(".loadIng").html("<h1>錯誤，請稍後在試</h1>")})}};c("40e8");m.render=v,m.__scopeId="data-v-21c6f99c";t["default"]=m},ecff:function(e,t,c){}}]);
//# sourceMappingURL=chunk-22ea8d4c.fd6f773a.js.map