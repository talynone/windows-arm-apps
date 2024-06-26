import{s as d}from"./service-P8kc4j81.js";import{_ as h,G as f,r as y,o as t,c as k,w as c,a,t as i,b as s,F as p,d as m,e as r,n as g,p as T,f as _}from"./index-CampbdA2.js";const b={name:"OctoPrint",mixins:[d],props:{item:Object},components:{Generic:f},data:()=>({printTime:null,printTimeLeft:null,completion:null,state:null,printer:null,error:null}),computed:{statusClass:function(){switch(this.state){case"Operational":return"ready";case"Offline":return"offline";case"Printing":return"in-progress";default:return"pending"}}},created(){this.display=this.item.display=="bar"?this.item.display:"text",this.fetchPrinterStatus(),this.fetchStatus()},methods:{fetchStatus:async function(){try{const e=await this.fetch(`api/job?apikey=${this.item.apikey}`);this.printTime=e.progress.printTime,this.printTimeLeft=e.progress.printTimeLeft,this.completion=e.progress.completion,this.state=e.state,this.error=e.error}catch(e){this.error=`Fail to fetch octoprint data (${e.message})`,console.error(e)}},fetchPrinterStatus:async function(){try{const e=await this.fetch(`api/printer?apikey=${this.item.apikey}`);this.printer=e,this.error=e.error}catch(e){this.error=`Fail to fetch octoprint data (${e.message})`,console.error(e)}},toTime:function(e){return new Date(e*1e3).toTimeString().substring(0,5)}}},n=e=>(T("data-v-8e988708"),e=e(),_(),e),C={class:"title is-4"},S={class:"subtitle is-6"},w=n(()=>a("i",{class:"fa-solid fa-gear mr-1"},null,-1)),F={key:0},v=n(()=>a("span",{class:"separator mx-1"}," | ",-1)),L=["title"],O=n(()=>a("i",{class:"fa-solid fa-stopwatch mr-1"},null,-1)),P=n(()=>a("i",{class:"fa-solid fa-temperature-half mr-1"},null,-1)),B={key:0},G=n(()=>a("span",{class:"separator mx-1"}," | ",-1)),I={key:1},N=["value","title"],V=["title"],j=["title"];function D(e,$,l,z,E,o){const u=y("Generic");return t(),k(u,{item:l.item,title:e.state},{content:c(()=>[a("p",C,i(l.item.name),1),a("p",S,[l.item.subtitle&&!e.state?(t(),s(p,{key:0},[m(i(l.item.subtitle),1)],64)):r("",!0),!e.error&&e.display=="text"&&o.statusClass=="in-progress"?(t(),s(p,{key:1},[w,e.completion?(t(),s("b",F,i(e.completion.toFixed())+"%",1)):r("",!0),v,e.printTime?(t(),s("span",{key:1,title:`${o.toTime(e.printTimeLeft)} left`},[O,m(" "+i(o.toTime(e.printTime)),1)],8,L)):r("",!0)],64)):r("",!0),!e.error&&e.display=="text"&&o.statusClass=="ready"?(t(),s(p,{key:2},[P,e.printer.temperature.bed?(t(),s("b",B,i(e.printer.temperature.bed.actual.toFixed())+" C",1)):r("",!0),G,e.printer.temperature.tool0?(t(),s("b",I,i(e.printer.temperature.tool0.actual.toFixed())+" C",1)):r("",!0)],64)):r("",!0),!e.error&&e.display=="bar"?(t(),s(p,{key:3},[e.completion?(t(),s("progress",{key:0,class:"progress is-primary",value:e.completion,max:"100",title:`${e.state} - ${e.completion.toFixed()}%, ${o.toTime(e.printTimeLeft)} left`},i(e.completion)+"% ",9,N)):r("",!0)],64)):r("",!0),e.error?(t(),s("span",{key:4,title:e.error},i(e.error),9,V)):r("",!0)])]),indicator:c(()=>[a("i",{class:g(["status",o.statusClass]),title:e.state},null,10,j)]),_:1},8,["item","title"])}const H=h(b,[["render",D],["__scopeId","data-v-8e988708"]]);export{H as default};
