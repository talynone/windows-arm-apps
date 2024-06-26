import{s as m}from"./service-P8kc4j81.js";import{_ as p,G as g,r as _,o as r,c as v,w as o,a as u,t as a,b as c,F as l,d as f,e as d,n as b}from"./index-CampbdA2.js";const n=Object.freeze({firing:"firing",pending:"pending",inactive:"inactive"}),k={name:"Prometheus",mixins:[m],props:{item:Object},components:{Generic:g},data:()=>({api:{status:"",count:0,alerts:{firing:0,inactive:0,pending:0}}}),computed:{count:function(){return this.countFiring()||this.countPending()||this.countInactive()||0},level:function(){return this.countFiring()?n.firing:this.countPending()?n.pending:n.inactive}},created(){this.fetchStatus()},methods:{fetchStatus:async function(){this.api=await this.fetch("api/v1/alerts").catch(t=>console.log(t))},countFiring:function(){var t,i;return this.api?(i=(t=this.api.data)==null?void 0:t.alerts)==null?void 0:i.filter(e=>e.state===n.firing).length:0},countPending:function(){var t,i;return this.api?(i=(t=this.api.data)==null?void 0:t.alerts)==null?void 0:i.filter(e=>e.state===n.pending).length:0},countInactive:function(){var t,i;return this.api?(i=(t=this.api.data)==null?void 0:t.alerts)==null?void 0:i.filter(e=>e.state===n.pending).length:0}}},y={class:"title is-4"},F={class:"subtitle is-6"};function P(t,i,e,x,B,s){const h=_("Generic");return r(),v(h,{item:e.item},{content:o(()=>[u("p",y,a(e.item.name),1),u("p",F,[e.item.subtitle?(r(),c(l,{key:0},[f(a(e.item.subtitle),1)],64)):t.api?(r(),c(l,{key:1},[f(a(s.count)+" "+a(s.level)+" alerts ",1)],64)):d("",!0)])]),indicator:o(()=>[t.api?(r(),c("div",{key:0,class:b(["status",s.level])},a(s.count),3)):d("",!0)]),_:1},8,["item"])}const S=p(k,[["render",P],["__scopeId","data-v-ef495913"]]);export{S as default};
