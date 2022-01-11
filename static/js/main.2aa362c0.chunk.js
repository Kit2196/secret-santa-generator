(this["webpackJsonpsecret-santa-generator"]=this["webpackJsonpsecret-santa-generator"]||[]).push([[0],{136:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){},142:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){},149:function(e,t,n){},150:function(e,t,n){},151:function(e,t,n){},152:function(e,t,n){},153:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(28),r=n.n(i),s=(n(136),n(137),n(138),n(27)),l=n(30),o=n(61),j=n(54),u=n(53),b=(n(139),n(207)),d=n(206),h=n(187),f=n(120),O=2500,x="https://1.bp.blogspot.com/-NtTQSOUkR9o/XVKfuVfLHcI/AAAAAAABUEA/1JsyRnHO9-8SxPb_OYm-HKAQ10dV2C45QCLcBGAs/s1600/christmas_black_santa.png",g=0,m=1,v=2,p=Object(f.a)({palette:{black:{main:"#000",contrastText:"#fff"}}}),k=(n(142),n(1));function S(e){return Object(k.jsx)(h.a,{className:"StartPage",children:Object(k.jsxs)(h.a,{children:[Object(k.jsx)("img",{src:x,alt:"logo"}),Object(k.jsxs)("div",{children:[Object(k.jsx)("p",{className:"App-Name",children:"Secret Santa Generator"}),Object(k.jsx)(b.a,{theme:p,children:Object(k.jsx)(d.a,{color:"black",variant:"outlined",onClick:e.onStart,children:"Start"})})]})]})})}var C=n(18),N=n(6),y=(n(146),n(198)),P=n(195),w=n(3),A=(n(147),n(114)),G=n.n(A),T=n(115),H=n.n(T),B=n(116),E=n.n(B),I=n(204),R=n(209),L=n(199),F=n(203);function M(e){var t=Object(a.useState)(e.santa.name),n=Object(N.a)(t,2),c=n[0],i=n[1],r=Object(a.useState)(!1),s=Object(N.a)(r,2),l=s[0],o=s[1],j=Object(a.useRef)(null);Object(a.useEffect)((function(){l&&setTimeout((function(){o(!1)}),O)}),[l]);return Object(k.jsxs)(F.a,{show:e.show,onHide:e.onHide,className:"EditCard",size:"lg",centered:!0,children:[Object(k.jsx)(F.a.Header,{children:Object(k.jsx)(F.a.Title,{children:"Edit Santa Info"})}),Object(k.jsx)(F.a.Body,{children:Object(k.jsx)(L.a,{label:"Name",value:c,onChange:function(e){i(e.target.value)}})}),Object(k.jsxs)(F.a.Footer,{children:[Object(k.jsxs)(b.a,{theme:p,children:[Object(k.jsx)(d.a,{color:"black",variant:"outlined",onClick:e.onHide,children:"Cancel"}),Object(k.jsx)(d.a,{ref:j,color:"black",variant:"outlined",onClick:function(){var t=e.validateName(c,e.index);if(o(t),!t){var n=e.santa;n.name=c,e.editSanta(e.index,n),e.onHide()}},children:"Confirm"})]}),Object(k.jsx)(y.a,{target:j.current,show:l,placement:"top",transition:!1,children:Object(k.jsx)(P.a,{children:l})})]})]})}function _(e){var t=Object(a.useState)(!1),n=Object(N.a)(t,2),c=n[0],i=n[1],r=Object(k.jsx)(R.a,{className:"right",fontSize:"small",onClick:function(){return i(!0)},children:Object(k.jsx)(G.a,{})}),s=Object(k.jsx)(R.a,{className:"right",fontSize:"small",onClick:function(){e.removeSanta(e.index)},children:Object(k.jsx)(H.a,{})}),l=Object(k.jsx)(R.a,{className:"right",fontSize:"small",onClick:function(){e.showResult(e.santa)},children:Object(k.jsx)(E.a,{})});return Object(k.jsx)(I.a,{className:"SantaCard",children:Object(k.jsxs)(I.a.Body,{children:[e.removeSanta&&s,e.editSanta&&r,e.showResult&&l,Object(k.jsx)(I.a.Title,{children:e.santa.name}),e.assigned&&Object(k.jsxs)(I.a.Text,{children:["Assigned to ",e.assigned.name]}),Object(k.jsx)(M,{index:e.index,santa:e.santa,show:c,onHide:function(){return i(!1)},validateName:e.validateName,editSanta:e.editSanta})]})},e.index)}var z=n(196),V=n(117);function K(e){return Object(k.jsx)(h.a,{className:"SantaTable",fluid:!0,children:e.santas.length>0?Object(k.jsx)(z.a,{xs:2,sm:3,md:5,children:e.santas.map((function(t,n){return Object(k.jsx)(V.a,{children:Object(k.jsx)(_,Object(w.a)(Object(w.a)({},e),{},{index:n,santa:t,assigned:e.assignedVisible?e.santas[t.assigned]:null}))})}))}):Object(k.jsx)("p",{children:"There are no santa yet..."})})}var J=n(201),Q=n(118);function D(e){var t=Object(a.useState)(""),n=Object(N.a)(t,2),c=n[0],i=n[1],r=Object(a.useState)(!1),s=Object(N.a)(r,2),l=s[0],o=s[1],j=Object(a.useRef)(null);Object(a.useEffect)((function(){l&&setTimeout((function(){o(!1)}),O)}),[l]);return Object(k.jsxs)(J.a,{className:"SantaInput",onSubmit:function(t){t.preventDefault();var n=e.validateName(c,-1);if(o(n),!n){var a={name:c,assigned:null};e.addSanta(a),i("")}},children:[Object(k.jsx)(Q.a,{value:c,placeholder:"Enter a name here...",onChange:function(e){i(e.target.value)},maxLength:20}),Object(k.jsx)(b.a,{theme:p,children:Object(k.jsx)(d.a,{ref:j,color:"black",variant:"outlined",type:"submit",value:"Add",children:"Add"})}),Object(k.jsx)(y.a,{target:j.current,show:l,placement:"top",transition:!1,children:Object(k.jsx)(P.a,{children:l})})]})}var U=function(){function e(){Object(s.a)(this,e)}return Object(l.a)(e,null,[{key:"factorial",value:function(e){return e>1?this.factorial(e-1)*e:1}},{key:"randomInt",value:function(e,t){return Math.round(Math.random()*(t-e))+e}},{key:"derangement",value:function(t){for(var n=Object(C.a)(Array(t).keys()),a=Array(t).fill(!1),c=function(t){return(e.factorial(t)+1)/Math.E},i=t,r=t;r>=2;){if(!a[i-1]){do{var s=e.randomInt(1,i-1)}while(a[s-1]);var l=[n[s-1],n[i-1]];n[i-1]=l[0],n[s-1]=l[1],Math.random()<(r-1)*c(r-2)/c(r)&&(a[s-1]=!0,r--),r--}i--}return n}}]),e}(),W=function(){function e(){Object(s.a)(this,e)}return Object(l.a)(e,null,[{key:"expandGiftable",value:function(e){for(var t=e,n=e.length+1,a=0;a<n-1;a++)t[a].push(!0);return t.push(Array(n).fill(!0)),t[n-1][n-1]=!1,t}},{key:"shrinkGiftable",value:function(e,t){var n=e;n.splice(t,1);for(var a=0;a<n.length;a++)n[a].splice(t,1);return n}},{key:"flipGiftable",value:function(e,t,n){var a=e;return a[t][n]=!a[t][n],a[n][t]=!a[n][t],a}},{key:"shuffle",value:function(e,t){var n,a=function(e){for(var t=0;t<e.length;t++)if(t===e[t])return!1;return!0};do{n=U.derangement(e.length)}while(!a(n));for(var c=0;c<e.length;c++)e[c].assigned=n[c];return Object(C.a)(e)}}]),e}();function Y(e){var t=Object(a.useState)(e.santas),n=Object(N.a)(t,2),c=n[0],i=n[1],r=Object(a.useState)(e.giftable),s=Object(N.a)(r,2),l=s[0],o=s[1],j=Object(a.useState)(!1),u=Object(N.a)(j,2),f=u[0],x=u[1],m=Object(a.useRef)(null);Object(a.useEffect)((function(){f&&setTimeout((function(){x(!1)}),O)}),[f]);var S=function(e,t){if(""===e)return"Name cannot be empty.";for(var n=0;n<c.length;n++)if(c[n].name===e){if(n===t)break;return"Name has been entered."}return null},w=function(){return c.length<2?"Please enter at least 2 names.":null};return Object(k.jsxs)(h.a,{className:"EditPage",fluid:!0,children:[Object(k.jsx)(D,{addSanta:function(e){i((function(t){return[].concat(Object(C.a)(t),[e])})),o(W.expandGiftable(l))},validateName:S}),Object(k.jsx)(K,{santas:c,giftable:l,editSanta:function(e,t){var n=Object(C.a)(c);n[e]=t,i(n)},removeSanta:function(e){var t=Object(C.a)(c);t.splice(e,1),i(t),o(W.shrinkGiftable(l,e))},validateName:S}),Object(k.jsxs)("div",{className:"ButtonBar",children:[Object(k.jsxs)(b.a,{theme:p,children:[Object(k.jsx)(d.a,{color:"black",variant:"outlined",onClick:function(){e.toPage(g)},children:"Back"}),Object(k.jsx)(d.a,{ref:m,color:"black",variant:"outlined",onClick:function(){var t=w();x(t),t||(e.updateGenerator(c,l),e.toPage(v))},children:"Confirm"})]}),Object(k.jsx)(y.a,{target:m.current,show:f,placement:"top",transition:!1,children:Object(k.jsx)(P.a,{children:f})})]})]})}n(149),n(150);function X(e){return Object(k.jsxs)(F.a,Object(w.a)(Object(w.a)({},e),{},{size:"lg",centered:!0,children:[Object(k.jsx)(F.a.Header,{closeButton:!0,children:Object(k.jsx)(F.a.Title,{children:e.title})}),Object(k.jsx)(F.a.Body,{children:e.content})]}))}function q(e){var t=Object(a.useState)(e.santas),n=Object(N.a)(t,2),c=n[0],i=n[1],r=Object(a.useState)(!1),s=Object(N.a)(r,2),l=s[0],o=s[1],j=Object(a.useState)(null),u=Object(N.a)(j,2),f=u[0],O=u[1],x=Object(a.useState)(null),v=Object(N.a)(x,2),S=v[0],C=v[1],y=Object(a.useState)(!1),P=Object(N.a)(y,2),w=P[0],A=P[1];Object(a.useEffect)((function(){G()}),[]);var G=function(){i(W.shuffle(c,e.giftable))};return Object(k.jsxs)(h.a,{className:"ResultPage",fluid:!0,children:[Object(k.jsx)(K,{santas:c,showResult:function(e){var t=c[e.assigned];O(Object(k.jsx)("p",{children:e.name})),C(Object(k.jsxs)("p",{children:["Your recipient is ",Object(k.jsx)("strong",{children:t.name}),"!"]})),o(!0)},assignedVisible:w}),Object(k.jsx)("div",{className:"ButtonBar",children:Object(k.jsxs)(b.a,{theme:p,children:[Object(k.jsx)(d.a,{color:"black",variant:"outlined",onClick:function(){e.toPage(m)},children:"Back"}),Object(k.jsx)(d.a,{color:"black",variant:"outlined",onClick:G,children:"Reshuffle!"}),Object(k.jsx)(d.a,{color:"black",variant:"outlined",onClick:function(){A(!w)},children:"Show All!"}),Object(k.jsx)(d.a,{color:"black",variant:"outlined",onClick:function(){e.toPage(g)},children:"Finished"})]})}),Object(k.jsx)(X,{show:l,onHide:function(){return o(!1)},title:f,content:S})]})}var Z=n(200);n(151);function $(e){return Object(k.jsx)(Z.a,{className:"Header",children:Object(k.jsxs)(h.a,{className:"justify-content-center",fluid:!0,children:[Object(k.jsx)("img",{src:x,alt:"logo",className:"logo"}),Object(k.jsx)("p",{className:"App-Name",children:"Secret Santa Generator"})]})})}var ee=n(197),te=n(208),ne=n(119);n(152);function ae(e){var t=Object(a.useState)(!1),n=Object(N.a)(t,2),c=n[0],i=n[1],r=Object(a.useState)(null),s=Object(N.a)(r,2),l=s[0],o=s[1],j=Object(a.useState)(null),u=Object(N.a)(j,2),b=u[0],d=u[1],h=Object(a.useState)(!1),f=Object(N.a)(h,2),O=f[0],x=f[1],g=Object(a.useState)(!1),m=Object(N.a)(g,2),v=m[0],p=m[1];return Object(k.jsxs)(Z.a,{className:"Footer justify-content-center",children:[Object(k.jsxs)(ee.a,{className:"Footer-links",children:[Object(k.jsx)(te.a,{variant:"link",onClick:function(){o("Credit"),d(Object(k.jsxs)("p",{children:["Illustration: ",Object(k.jsx)("a",{href:"https://www.irasutoya.com/",children:"\u3044\u3089\u3059\u3068\u3084"})]})),i(!0)},children:"Credit"}),Object(k.jsx)(te.a,{variant:"link",onClick:function(){o(Object(k.jsx)("p",{children:"Loading"})),i(!0),fetch("https://raw.githubusercontent.com/Kit2196/secret-santa-generator/main/CHANGELOG.md").then((function(e){return e.text()})).then((function(e){o(Object(k.jsx)("p",{children:"ChangeLog"})),d(Object(k.jsx)("div",{className:"Changelog",dangerouslySetInnerHTML:{__html:ne.marked.parse(e)}}))}))},children:"Change Log"}),Object(k.jsx)(te.a,{variant:"link",onClick:function(){return e="https://github.com/Kit2196/secret-santa-generator",window.open(e,"_blank");var e},children:"Github Repository"}),Object(k.jsx)(te.a,{variant:"link",onClick:function(){x(!0),setTimeout((function(){return x(!1)}),1e3)},children:O?"WIP":"My page"}),Object(k.jsx)(te.a,{variant:"link",onClick:function(){p(!0),setTimeout((function(){return p(!1)}),1e3)},children:v?"WIP":"Other projects"})]}),Object(k.jsx)(X,{show:c,onHide:function(){return i(!1)},title:l,content:b})]})}var ce=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={page:g,santas:[],giftable:[]},a.updateGenerator=a.updateGenerator.bind(Object(o.a)(a)),a.toPage=a.toPage.bind(Object(o.a)(a)),a}return Object(l.a)(n,[{key:"updateGenerator",value:function(e,t){var n=this.state;n.santas=e,n.giftable=t,this.setState(n)}},{key:"toPage",value:function(e){var t=this.state;t.page=e,e===g&&(t.santas=[],t.giftable=[]),this.setState(t)}},{key:"loadPage",value:function(){var e=this;switch(this.state.page){case g:return Object(k.jsx)(S,{onStart:function(){e.toPage(m)}});case m:return Object(k.jsx)(Y,{santas:this.state.santas,giftable:this.state.giftable,updateGenerator:this.updateGenerator,toPage:this.toPage});case v:return Object(k.jsx)(q,{santas:this.state.santas,giftable:this.state.giftable,toPage:this.toPage});default:return Object(k.jsx)("p",{children:"Error! Page not found!"})}}},{key:"render",value:function(){return Object(k.jsxs)("div",{className:"SecretSanta",children:[this.state.page!==g&&Object(k.jsx)($,{}),this.loadPage(),Object(k.jsx)(ae,{})]})}}]),n}(c.a.Component);var ie=function(){return Object(k.jsx)("div",{className:"App",children:Object(k.jsx)(ce,{})})},re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,210)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(ie,{})}),document.getElementById("root")),re()}},[[153,1,2]]]);
//# sourceMappingURL=main.2aa362c0.chunk.js.map