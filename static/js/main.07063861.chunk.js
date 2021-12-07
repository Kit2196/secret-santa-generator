(this["webpackJsonpsecret-santa-generator"]=this["webpackJsonpsecret-santa-generator"]||[]).push([[0],{19:function(t,e,n){},20:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a),r=n(10),c=n.n(r),i=(n(19),n(20),n(8)),o=n(6),l=n(7),u=n(2),j=n(14),d=n(13),b=(n(21),"https://1.bp.blogspot.com/-NtTQSOUkR9o/XVKfuVfLHcI/AAAAAAABUEA/1JsyRnHO9-8SxPb_OYm-HKAQ10dV2C45QCLcBGAs/s1600/christmas_black_santa.png"),h=(n(22),n(0));function O(t){return Object(h.jsxs)("div",{className:"Start",children:[Object(h.jsx)("img",{src:b,alt:"logo"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"Secret Santa Generator"}),Object(h.jsx)("button",{onClick:t.onStart,children:"Start"})]})]})}n(24);function f(t){return Object(h.jsxs)("li",{className:"SantaCell",children:[Object(h.jsx)("p",{children:t.santa.name}),t.removeSanta&&Object(h.jsx)("button",{className:"CellRemoveBtn",onClick:function(){t.removeSanta(t.santa.id)},children:"\u2716"})]},t.santa.id)}function m(t){return t.santas.length>0?Object(h.jsx)("ul",{className:"SantaTable",children:t.santas.map((function(e){return Object(h.jsx)(f,{santa:e,removeSanta:t.removeSanta})}))}):Object(h.jsx)("p",{children:"There are no santa yet..."})}var v=n(3);function x(t){var e=Object(a.useState)(""),n=Object(v.a)(e,2),s=n[0],r=n[1];return Object(h.jsxs)("form",{className:"SantaInput",onSubmit:function(e){e.preventDefault(),t.addSanta(s)&&r("")},children:[Object(h.jsx)("input",{value:s,placeholder:"Enter a name here...",onChange:function(t){r(t.target.value)}}),Object(h.jsx)("input",{type:"submit",value:"Add"})]})}function g(t){return Object(h.jsxs)("div",{className:"EditPage",children:[Object(h.jsx)(x,{addSanta:t.addSanta}),Object(h.jsx)(m,{santas:t.santas,removeSanta:t.removeSanta})]})}n(25);function S(t){return Object(h.jsx)("div",{className:"SantaResult",children:Object(h.jsx)(m,{santas:t.santas})})}n(26);function p(t){return Object(h.jsx)("div",{className:"PageControl",children:t.buttons.map((function(t){var e=Object(v.a)(t,3),n=e[0],a=e[1],s=e[2];return Object(h.jsx)("button",{onClick:n,disabled:!s,children:a})}))})}n(27);function k(t){return Object(h.jsxs)("div",{className:"Header",children:[Object(h.jsx)("img",{src:b,alt:"logo"}),Object(h.jsx)("p",{children:"Secret Santa Generator"})]})}var y=function(){function t(){Object(o.a)(this,t)}return Object(l.a)(t,null,[{key:"factorial",value:function(t){return t>1?this.factorial(t-1)*t:1}},{key:"randomInt",value:function(t,e){return Math.round(Math.random()*(e-t))+t}},{key:"derangement",value:function(e){for(var n=Object(i.a)(Array(e).keys()),a=Array(e).fill(!1),s=function(e){return(t.factorial(e)+1)/Math.E},r=e,c=e;c>=2;){if(!a[r-1]){do{var o=t.randomInt(1,r-1)}while(a[o-1]);var l=[n[o-1],n[r-1]];n[r-1]=l[0],n[o-1]=l[1],Math.random()<(c-1)*s(c-2)/s(c)&&(a[o-1]=!0,c--),c--}r--}return n}}]),t}(),C=0,N=1,A=2,P=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={page:C,santas:[],rules:{}},a.toPage=a.toPage.bind(Object(u.a)(a)),a.addSanta=a.addSanta.bind(Object(u.a)(a)),a.removeSanta=a.removeSanta.bind(Object(u.a)(a)),a.generateNewSantaAssignment=a.generateNewSantaAssignment.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"toPage",value:function(t){var e=this.state;e.page=t,this.setState(e)}},{key:"addSanta",value:function(t){if(""===t)return!1;for(var e=0;e<this.state.santas.length;e++)if(this.state.santas[e].name===t)return!1;var n={id:Date.now(),name:t},a=this.state;return a.santas=[].concat(Object(i.a)(a.santas),[n]),this.setState(a),!0}},{key:"removeSanta",value:function(t){var e=this.state;e.santas=e.santas.filter((function(e){return e.id!==t})),this.setState(e)}},{key:"generateNewSantaAssignment",value:function(){var t=this,e=y.derangement(this.state.santas.length),n=e.map((function(e){return t.state.santas[e]}));return console.log(e),n}},{key:"render",value:function(){var t,e,n=this,a=!0,s=!0;switch(this.state.page){case C:t=Object(h.jsx)(O,{onStart:function(){n.toPage(N)}}),a=!1,s=!1;break;case N:t=Object(h.jsx)(g,{santas:this.state.santas,addSanta:this.addSanta,removeSanta:this.removeSanta}),e=[[function(){return n.toPage(C)},"Back",!0],[function(){return n.generateNewSantaAssignment()},"Haha",!0],[function(){return n.toPage(A)},"Confirm",!0]];break;case A:t=Object(h.jsx)(S,{santas:this.state.santas}),e=[[function(){return n.toPage(N)},"Back",!0],[function(){return n.toPage(C)},"Finish",!0]];break;default:t=Object(h.jsx)("p",{children:"Error! Page not found!"})}return Object(h.jsxs)("div",{className:"SecretSanta",children:[a&&Object(h.jsx)(k,{}),t,s&&Object(h.jsx)(p,{buttons:e})]})}}]),n}(s.a.Component),w=n(11),B=n(12);n(28),n(29);function I(t){return Object(h.jsxs)("div",{className:"Overlay",children:[Object(h.jsxs)("div",{className:"Overlay-Container",children:[Object(h.jsx)("button",{className:"Overlay-Close-Btn",onClick:t.disableOverlay,children:"\u2716"}),t.content]}),Object(h.jsx)("div",{className:"Overlay-Greyscreen",onClick:t.disableOverlay,children:" "})]})}function L(t){var e=Object(B.useState)(null),n=Object(v.a)(e,2),a=n[0],s=n[1],r=Object(h.jsxs)("div",{className:"Credit",children:[Object(h.jsx)("h1",{children:"Credit"}),Object(h.jsxs)("p",{children:["Illustration: ",Object(h.jsx)("a",{href:"https://www.irasutoya.com/",children:"\u3044\u3089\u3059\u3068\u3084"})]})]});return Object(h.jsxs)("div",{className:"Footer",children:[Object(h.jsxs)("ul",{className:"Footer-links",children:[Object(h.jsx)("li",{onClick:function(){return s(r)},children:"Credit"}),Object(h.jsx)("li",{onClick:function(){s(Object(h.jsx)("div",{children:Object(h.jsx)("p",{children:"Loading"})})),fetch("https://raw.githubusercontent.com/Kit2196/secret-santa-generator/main/CHANGELOG.md").then((function(t){return t.text()})).then((function(t){return s(Object(h.jsx)("div",{className:"Changelog",dangerouslySetInnerHTML:{__html:w.marked.parse(t)}}))}))},children:"Change Log"}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"https://github.com/Kit2196/secret-santa-generator",children:"Github Repository"})}),Object(h.jsx)("li",{children:"My page"}),Object(h.jsx)("li",{children:"Other projects"})]}),a&&Object(h.jsx)(I,{content:a,disableOverlay:function(){return s(null)}})]})}var E=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(P,{}),Object(h.jsx)(L,{})]})},F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,r=e.getLCP,c=e.getTTFB;n(t),a(t),s(t),r(t),c(t)}))};c.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(E,{})}),document.getElementById("root")),F()}},[[30,1,2]]]);
//# sourceMappingURL=main.07063861.chunk.js.map