(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var o=n(4),c=n.n(o),r=n(2),u=n(1),i=(n(9),n(0)),s=function(t){var e=t.goods;return Object(i.jsx)("ul",{children:e.map((function(t){return Object(i.jsx)("li",{"data-cy":"good",style:{color:"".concat(t.color)},children:t.name},t.id)}))})};function a(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var d=function(){var t=Object(u.useState)([]),e=Object(r.a)(t,2),n=e[0],o=e[1],c=Object(u.useState)(!1),d=Object(r.a)(c,2),b=d[0],f=d[1],j=Object(u.useState)(!1),l=Object(r.a)(j,2),h=l[0],O=l[1],m=Object(u.useState)(!1),y=Object(r.a)(m,2),p=y[0],g=y[1];return Object(u.useEffect)((function(){a().then((function(t){return t.filter((function(t){return"red"===t.color}))})).then(o)}),[p]),Object(u.useEffect)((function(){a().then((function(t){return t.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5)})).then(o)}),[h]),Object(u.useEffect)((function(){a().then(o)}),[b]),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("h1",{children:"Dynamic list of Goods"}),Object(i.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){return f(!b)},children:"Load all goods"}),Object(i.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){return O(!h)},children:"Load 5 first goods"}),Object(i.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){return g(!p)},children:"Load red goods"}),Object(i.jsx)(s,{goods:n})]})};c.a.render(Object(i.jsx)(d,{}),document.getElementById("root"))},9:function(t,e,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.739e8204.chunk.js.map