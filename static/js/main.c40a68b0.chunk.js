(this["webpackJsonpsecret-santa-generator"]=this["webpackJsonpsecret-santa-generator"]||[]).push([[0],{18:function(t,e,a){},19:function(t,e,a){},20:function(t,e,a){},21:function(t,e,a){},23:function(t,e,a){},24:function(t,e,a){},25:function(t,e,a){},26:function(t,e,a){},27:function(t,e,a){},28:function(t,e,a){},29:function(t,e,a){"use strict";a.r(e);var n=a(1),s=a.n(n),c=a(10),i=a.n(c),r=(a(18),a(19),a(8)),l=a(6),o=a(7),j=a(2),u=a(13),d=a(12),b=(a(20),"https://1.bp.blogspot.com/-NtTQSOUkR9o/XVKfuVfLHcI/AAAAAAABUEA/1JsyRnHO9-8SxPb_OYm-HKAQ10dV2C45QCLcBGAs/s1600/christmas_black_santa.png"),h=0,O=1,f=2,m=(a(21),a(0));function v(t){return Object(n.useEffect)((function(){t.removeAllSantas()}),[]),Object(m.jsxs)("div",{className:"Start",children:[Object(m.jsx)("img",{src:b,alt:"logo"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:"Secret Santa Generator"}),Object(m.jsx)("button",{onClick:t.onStart,children:"Start"})]})]})}a(23),a(24);function x(t){return Object(m.jsxs)("li",{className:"SantaCell",onClick:t.showResult?function(){t.showResult(t.santa)}:null,children:[Object(m.jsxs)("div",{className:"SantaCell-Text",children:[Object(m.jsx)("p",{children:t.santa.name}),t.assigned&&Object(m.jsxs)("p",{className:"small-font",children:["Assigned to ",t.assigned.name]})]}),t.removeSanta&&Object(m.jsx)("button",{className:"CellRemoveBtn",onClick:function(){t.removeSanta(t.santa.id)},children:"\u2716"})]},t.santa.id)}function g(t){return t.santas.length>0?Object(m.jsx)("ul",{className:"SantaTable",children:t.santas.map((function(e){return Object(m.jsx)(x,{santa:e,showResult:t.showResult,removeSanta:t.removeSanta,assigned:t.assignedVisible?t.santas[e.assigned]:null})}))}):Object(m.jsx)("p",{children:"There are no santa yet..."})}var S=a(3);function p(t){var e=Object(n.useState)(""),a=Object(S.a)(e,2),s=a[0],c=a[1];return Object(m.jsxs)("form",{className:"SantaInput",onSubmit:function(e){e.preventDefault(),t.addSanta(s),c("")},children:[Object(m.jsx)("input",{value:s,placeholder:"Enter a name here...",onChange:function(t){c(t.target.value)},maxLength:20}),Object(m.jsx)("input",{type:"submit",value:"Add",disabled:!t.isSantaNameValid(s)})]})}function k(t){return Object(m.jsxs)("div",{className:"EditPage",children:[Object(m.jsx)(p,{addSanta:t.addSanta,isSantaNameValid:t.isSantaNameValid}),Object(m.jsx)(g,{santas:t.santas,removeSanta:t.removeSanta}),Object(m.jsxs)("div",{className:"ButtonBar",children:[Object(m.jsx)("button",{onClick:function(){t.toPage(h)},children:"Back"}),Object(m.jsx)("button",{onClick:function(){t.toPage(f)},disabled:!(t.santas.length>=2),children:"Confirm"})]})]})}a(25),a(26);function N(t){return Object(m.jsxs)("div",{className:"Overlay",children:[Object(m.jsxs)("div",{className:"Overlay-Container",children:[Object(m.jsx)("button",{className:"Overlay-Close-Btn",onClick:t.disableOverlay,children:"\u2716"}),t.content]}),Object(m.jsx)("div",{className:"Overlay-Greyscreen",onClick:t.disableOverlay,children:" "})]})}function y(t){var e=Object(n.useState)(null),a=Object(S.a)(e,2),s=a[0],c=a[1],i=Object(n.useState)(!1),r=Object(S.a)(i,2),l=r[0],o=r[1];Object(n.useEffect)((function(){t.assignRecipients()}),[]);return Object(m.jsxs)("div",{className:"SantaResult",children:[Object(m.jsx)(g,{santas:t.santas,showResult:function(e){var a=t.santas[e.assigned];c(Object(m.jsxs)("div",{className:"Overlay-Result",children:[Object(m.jsxs)("p",{children:[e.name,","]}),Object(m.jsxs)("p",{children:["You are assigned to ",Object(m.jsx)("strong",{children:a.name})]})]}))},assignedVisible:l}),Object(m.jsxs)("div",{className:"ButtonBar",children:[Object(m.jsx)("button",{onClick:function(){t.toPage(O)},children:"Back"}),Object(m.jsx)("button",{onClick:function(){o(!l)},children:"Show All!"}),Object(m.jsx)("button",{onClick:function(){t.toPage(h)},children:"Finished"})]}),s&&Object(m.jsx)(N,{content:s,disableOverlay:function(){return c(null)}})]})}a(27);function C(t){return Object(m.jsxs)("div",{className:"Header",children:[Object(m.jsx)("img",{src:b,alt:"logo"}),Object(m.jsx)("p",{children:"Secret Santa Generator"})]})}var A=function(){function t(){Object(l.a)(this,t)}return Object(o.a)(t,null,[{key:"factorial",value:function(t){return t>1?this.factorial(t-1)*t:1}},{key:"randomInt",value:function(t,e){return Math.round(Math.random()*(e-t))+t}},{key:"derangement",value:function(e){for(var a=Object(r.a)(Array(e).keys()),n=Array(e).fill(!1),s=function(e){return(t.factorial(e)+1)/Math.E},c=e,i=e;i>=2;){if(!n[c-1]){do{var l=t.randomInt(1,c-1)}while(n[l-1]);var o=[a[l-1],a[c-1]];a[c-1]=o[0],a[l-1]=o[1],Math.random()<(i-1)*s(i-2)/s(i)&&(n[l-1]=!0,i--),i--}c--}return a}}]),t}(),P=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).state={page:h,santas:[],rules:{}},n.toPage=n.toPage.bind(Object(j.a)(n)),n.addSanta=n.addSanta.bind(Object(j.a)(n)),n.removeSanta=n.removeSanta.bind(Object(j.a)(n)),n.removeAllSantas=n.removeAllSantas.bind(Object(j.a)(n)),n.assignRecipients=n.assignRecipients.bind(Object(j.a)(n)),n.isSantaNameValid=n.isSantaNameValid.bind(Object(j.a)(n)),n}return Object(o.a)(a,[{key:"toPage",value:function(t){var e=this.state;e.page=t,this.setState(e)}},{key:"addSanta",value:function(t){var e={id:Date.now(),name:t,assigned:null},a=this.state;a.santas=[].concat(Object(r.a)(a.santas),[e]),this.setState(a)}},{key:"isSantaNameValid",value:function(t){if(""===t)return!1;for(var e=0;e<this.state.santas.length;e++)if(this.state.santas[e].name===t)return!1;return!0}},{key:"removeSanta",value:function(t){var e=this.state;e.santas=e.santas.filter((function(e){return e.id!==t})),this.setState(e)}},{key:"removeAllSantas",value:function(){var t=this.state;t.santas=[],this.setState(t)}},{key:"assignRecipients",value:function(){for(var t=A.derangement(this.state.santas.length),e=this.state,a=0;a<this.state.santas.length;a++)e.santas[a].assigned=t[a];this.setState(e)}},{key:"render",value:function(){var t,e=this,a=!0;switch(this.state.page){case h:t=Object(m.jsx)(v,{onStart:function(){e.toPage(O)},removeAllSantas:this.removeAllSantas}),a=!1;break;case O:t=Object(m.jsx)(k,{santas:this.state.santas,addSanta:this.addSanta,removeSanta:this.removeSanta,isSantaNameValid:this.isSantaNameValid,toPage:this.toPage});break;case f:t=Object(m.jsx)(y,{santas:this.state.santas,assignRecipients:this.assignRecipients,toPage:this.toPage});break;default:t=Object(m.jsx)("p",{children:"Error! Page not found!"})}return Object(m.jsxs)("div",{className:"SecretSanta",children:[a&&Object(m.jsx)(C,{}),t]})}}]),a}(s.a.Component),R=a(11);a(28);function w(t){var e=Object(n.useState)(null),a=Object(S.a)(e,2),s=a[0],c=a[1],i=Object(m.jsxs)("div",{className:"Credit",children:[Object(m.jsx)("h1",{children:"Credit"}),Object(m.jsxs)("p",{children:["Illustration: ",Object(m.jsx)("a",{href:"https://www.irasutoya.com/",children:"\u3044\u3089\u3059\u3068\u3084"})]})]});return Object(m.jsxs)("div",{className:"Footer",children:[Object(m.jsxs)("ul",{className:"Footer-links",children:[Object(m.jsx)("li",{onClick:function(){return c(i)},children:"Credit"}),Object(m.jsx)("li",{onClick:function(){c(Object(m.jsx)("div",{children:Object(m.jsx)("p",{children:"Loading"})})),fetch("https://raw.githubusercontent.com/Kit2196/secret-santa-generator/main/CHANGELOG.md").then((function(t){return t.text()})).then((function(t){return c(Object(m.jsx)("div",{className:"Changelog",dangerouslySetInnerHTML:{__html:R.marked.parse(t)}}))}))},children:"Change Log"}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"https://github.com/Kit2196/secret-santa-generator",children:"Github Repository"})}),Object(m.jsx)("li",{children:"My page"}),Object(m.jsx)("li",{children:"Other projects"})]}),s&&Object(m.jsx)(N,{content:s,disableOverlay:function(){return c(null)}})]})}var V=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(P,{}),Object(m.jsx)(w,{})]})},B=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,30)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,c=e.getLCP,i=e.getTTFB;a(t),n(t),s(t),c(t),i(t)}))};i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(V,{})}),document.getElementById("root")),B()}},[[29,1,2]]]);
//# sourceMappingURL=main.c40a68b0.chunk.js.map