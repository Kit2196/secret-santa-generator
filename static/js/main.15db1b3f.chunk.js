(this["webpackJsonpsecret-santa-generator"]=this["webpackJsonpsecret-santa-generator"]||[]).push([[0],{41:function(t,e,a){},43:function(t,e,a){},44:function(t,e,a){},45:function(t,e,a){},47:function(t,e,a){},48:function(t,e,a){},51:function(t,e,a){},52:function(t,e,a){},53:function(t,e,a){},54:function(t,e,a){},55:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),i=a(12),c=a.n(i),r=(a(41),a(42),a(43),a(19)),l=a(15),o=a(16),j=a(13),u=a(25),d=a(24),h=(a(44),a(63)),b="https://1.bp.blogspot.com/-NtTQSOUkR9o/XVKfuVfLHcI/AAAAAAABUEA/1JsyRnHO9-8SxPb_OYm-HKAQ10dV2C45QCLcBGAs/s1600/christmas_black_santa.png",O=0,f=1,v=2,m=(a(45),a(1));function x(t){return Object(n.useEffect)((function(){t.removeAllSantas()}),[]),Object(m.jsxs)("div",{className:"Start",children:[Object(m.jsx)("img",{src:b,alt:"logo"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{className:"App-Name",children:"Secret Santa Generator"}),Object(m.jsx)(h.a,{variant:"outline-dark",onClick:t.onStart,children:"Start"})]})]})}a(47);var g=a(57),S=(a(48),a(62)),k=a(29);function p(t){return Object(m.jsx)(S.a,{className:"SantaCard",onClick:t.showResult?function(){t.showResult(t.santa)}:null,children:Object(m.jsxs)(S.a.Body,{children:[t.removeSanta&&Object(m.jsx)(k.a,{className:"right",onClick:function(){t.removeSanta(t.santa.id)}}),Object(m.jsx)(S.a.Title,{children:t.santa.name}),t.assigned&&Object(m.jsxs)(S.a.Text,{children:["Assigned to ",t.assigned.name]})]})})}var N=a(58),y=a(30);function C(t){return t.santas.length>0?Object(m.jsx)(g.a,{className:"SantaTable",fluid:!0,children:Object(m.jsx)(N.a,{className:"justify-content-center",children:t.santas.map((function(e){return Object(m.jsx)(y.a,{children:Object(m.jsx)(p,{santa:e,showResult:t.showResult,removeSanta:t.removeSanta,assigned:t.assignedVisible?t.santas[e.assigned]:null})})}))})}):Object(m.jsx)("p",{children:"There are no santa yet..."})}var A=a(8),w=a(61),R=a(31);function P(t){var e=Object(n.useState)(""),a=Object(A.a)(e,2),s=a[0],i=a[1];return Object(m.jsxs)(w.a,{className:"SantaInput",onSubmit:function(e){e.preventDefault(),t.addSanta(s),i("")},children:[Object(m.jsx)(R.a,{value:s,placeholder:"Enter a name here...",onChange:function(t){i(t.target.value)},maxLength:20}),Object(m.jsx)(h.a,{variant:"outline-dark",type:"submit",value:"Add",disabled:!t.isSantaNameValid(s),children:"Add"})]})}function V(t){return Object(m.jsxs)(g.a,{className:"EditPage",fluid:!0,children:[Object(m.jsx)(P,{addSanta:t.addSanta,isSantaNameValid:t.isSantaNameValid}),Object(m.jsx)(C,{santas:t.santas,removeSanta:t.removeSanta}),Object(m.jsxs)("div",{className:"ButtonBar",children:[Object(m.jsx)(h.a,{variant:"outline-dark",onClick:function(){t.toPage(O)},children:"Back"}),Object(m.jsx)(h.a,{variant:"outline-dark",onClick:function(){t.toPage(v)},disabled:!(t.santas.length>=2),children:"Confirm"})]})]})}a(51),a(52);function B(t){return Object(m.jsxs)("div",{className:"Overlay",children:[Object(m.jsxs)(g.a,{className:"Overlay-Container",children:[Object(m.jsx)(k.a,{className:"Overlay-Close-Btn",onClick:t.disableOverlay}),t.content]}),Object(m.jsx)("div",{className:"Overlay-Greyscreen",onClick:t.disableOverlay,children:" "})]})}function E(t){var e=Object(n.useState)(null),a=Object(A.a)(e,2),s=a[0],i=a[1],c=Object(n.useState)(!1),r=Object(A.a)(c,2),l=r[0],o=r[1];Object(n.useEffect)((function(){t.assignRecipients()}),[]);return Object(m.jsxs)(g.a,{className:"SantaResult",children:[Object(m.jsx)(C,{santas:t.santas,showResult:function(e){var a=t.santas[e.assigned];i(Object(m.jsxs)("div",{className:"Overlay-Result",children:[Object(m.jsxs)("p",{children:[e.name,","]}),Object(m.jsxs)("p",{children:["You are assigned to ",Object(m.jsx)("strong",{children:a.name})]})]}))},assignedVisible:l}),Object(m.jsxs)("div",{className:"ButtonBar",children:[Object(m.jsx)(h.a,{variant:"outline-dark",onClick:function(){t.toPage(f)},children:"Back"}),Object(m.jsx)(h.a,{variant:"outline-dark",onClick:function(){t.assignRecipients()},children:"Reshuffle!"}),Object(m.jsx)(h.a,{variant:"outline-dark",onClick:function(){o(!l)},children:"Show All!"}),Object(m.jsx)(h.a,{variant:"outline-dark",onClick:function(){t.toPage(O)},children:"Finished"})]}),s&&Object(m.jsx)(B,{content:s,disableOverlay:function(){return i(null)}})]})}var L=a(60);a(53);function I(t){return Object(m.jsxs)(L.a,{className:"Header",fixed:"top",children:[Object(m.jsx)("img",{src:b,alt:"logo",className:"logo"}),Object(m.jsx)("p",{className:"App-Name",children:"Secret Santa Generator"})]})}var T=function(){function t(){Object(l.a)(this,t)}return Object(o.a)(t,null,[{key:"factorial",value:function(t){return t>1?this.factorial(t-1)*t:1}},{key:"randomInt",value:function(t,e){return Math.round(Math.random()*(e-t))+t}},{key:"derangement",value:function(e){for(var a=Object(r.a)(Array(e).keys()),n=Array(e).fill(!1),s=function(e){return(t.factorial(e)+1)/Math.E},i=e,c=e;c>=2;){if(!n[i-1]){do{var l=t.randomInt(1,i-1)}while(n[l-1]);var o=[a[l-1],a[i-1]];a[i-1]=o[0],a[l-1]=o[1],Math.random()<(c-1)*s(c-2)/s(c)&&(n[l-1]=!0,c--),c--}i--}return a}}]),t}(),F=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).state={page:O,santas:[],rules:{}},n.toPage=n.toPage.bind(Object(j.a)(n)),n.addSanta=n.addSanta.bind(Object(j.a)(n)),n.removeSanta=n.removeSanta.bind(Object(j.a)(n)),n.removeAllSantas=n.removeAllSantas.bind(Object(j.a)(n)),n.assignRecipients=n.assignRecipients.bind(Object(j.a)(n)),n.isSantaNameValid=n.isSantaNameValid.bind(Object(j.a)(n)),n}return Object(o.a)(a,[{key:"toPage",value:function(t){var e=this.state;e.page=t,this.setState(e)}},{key:"addSanta",value:function(t){var e={id:Date.now(),name:t,assigned:null},a=this.state;a.santas=[].concat(Object(r.a)(a.santas),[e]),this.setState(a)}},{key:"isSantaNameValid",value:function(t){if(""===t)return!1;for(var e=0;e<this.state.santas.length;e++)if(this.state.santas[e].name===t)return!1;return!0}},{key:"removeSanta",value:function(t){var e=this.state;e.santas=e.santas.filter((function(e){return e.id!==t})),this.setState(e)}},{key:"removeAllSantas",value:function(){var t=this.state;t.santas=[],this.setState(t)}},{key:"assignRecipients",value:function(){var t,e=function(t){for(var e=0;e<t.length;e++)if(e==t[e])return!1;return!0};do{t=T.derangement(this.state.santas.length)}while(!e(t));for(var a=this.state,n=0;n<this.state.santas.length;n++)a.santas[n].assigned=t[n];this.setState(a)}},{key:"render",value:function(){var t,e=this,a=!0;switch(this.state.page){case O:t=Object(m.jsx)(x,{onStart:function(){e.toPage(f)},removeAllSantas:this.removeAllSantas}),a=!1;break;case f:t=Object(m.jsx)(V,{santas:this.state.santas,addSanta:this.addSanta,removeSanta:this.removeSanta,isSantaNameValid:this.isSantaNameValid,toPage:this.toPage});break;case v:t=Object(m.jsx)(E,{santas:this.state.santas,assignRecipients:this.assignRecipients,toPage:this.toPage});break;default:t=Object(m.jsx)("p",{children:"Error! Page not found!"})}return Object(m.jsxs)("div",{className:"SecretSanta",children:[a&&Object(m.jsx)(I,{}),t]})}}]),a}(s.a.Component),G=a(59),M=a(35);a(54);function H(t){var e=Object(n.useState)(null),a=Object(A.a)(e,2),s=a[0],i=a[1],c=Object(m.jsxs)("div",{className:"Credit",children:[Object(m.jsx)("h1",{children:"Credit"}),Object(m.jsxs)("p",{children:["Illustration: ",Object(m.jsx)("a",{href:"https://www.irasutoya.com/",children:"\u3044\u3089\u3059\u3068\u3084"})]})]});return Object(m.jsxs)(L.a,{className:"Footer justify-content-center",fixed:"bottom",children:[Object(m.jsxs)(G.a,{className:"Footer-links",children:[Object(m.jsx)(h.a,{variant:"link",onClick:function(){return i(c)},children:"Credit"}),Object(m.jsx)(h.a,{variant:"link",onClick:function(){i(Object(m.jsx)("div",{children:Object(m.jsx)("p",{children:"Loading"})})),fetch("https://raw.githubusercontent.com/Kit2196/secret-santa-generator/main/CHANGELOG.md").then((function(t){return t.text()})).then((function(t){return i(Object(m.jsx)("div",{className:"Changelog",dangerouslySetInnerHTML:{__html:M.marked.parse(t)}}))}))},children:"Change Log"}),Object(m.jsx)(h.a,{variant:"link",onClick:function(){return t="https://github.com/Kit2196/secret-santa-generator",window.open(t,"_blank");var t},children:"Github Repository"}),Object(m.jsx)(h.a,{variant:"link",children:"My page"}),Object(m.jsx)(h.a,{variant:"link",children:"Other projects"})]}),s&&Object(m.jsx)(B,{content:s,disableOverlay:function(){return i(null)}})]})}var _=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(F,{}),Object(m.jsx)(H,{})]})},K=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,64)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,i=e.getLCP,c=e.getTTFB;a(t),n(t),s(t),i(t),c(t)}))};c.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(_,{})}),document.getElementById("root")),K()}},[[55,1,2]]]);
//# sourceMappingURL=main.15db1b3f.chunk.js.map