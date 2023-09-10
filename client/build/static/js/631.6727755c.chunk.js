"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[631],{6557:function(e,n,t){t.d(n,{Z:function(){return k}});t(2791);var a=t(9439),s=t(1087),r=t(6355),c=t(8241),l=t(3402),i=t(4165),o=t(1413),d=t(5861),u=t(3490),m=t(1243),h=t(7689),v=t(184),x=function(){var e=(0,u.R)(),n=(0,a.Z)(e,2),t=n[0],s=n[1],r=(0,h.s0)();function c(){return(c=(0,d.Z)((0,i.Z)().mark((function e(n){var a,c,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,a=t.keyword,e.next=5,m.Z.get("/api/v1/product/search/".concat(a));case 5:c=e.sent,(l=null===c||void 0===c?void 0:c.data).success&&s((0,o.Z)((0,o.Z)({},t),{},{results:l.searchResults})),r("/search"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("Error",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}return(0,v.jsx)("div",{className:"main-search-input-wrap",children:(0,v.jsxs)("div",{className:"main-search-input",children:[(0,v.jsx)("div",{className:"main-search-input-item",children:(0,v.jsx)("input",{type:"text",placeholder:"Search Products...",value:t.keyword,onChange:function(e){return s((0,o.Z)((0,o.Z)({},t),{},{keyword:e.target.value}))}})}),(0,v.jsx)("div",{children:(0,v.jsx)("button",{className:"main-search-button",type:"button",onClick:function(e){return c.apply(this,arguments)},children:"Search"})})]})})},p=t(9126),j=t(4904),g=t(6224),f=t(8502),N=function(){var e,n,t=(0,c.a)(),i=(0,a.Z)(t,2),o=i[0],d=i[1],u=(0,g.j)(),m=(0,a.Z)(u,1)[0],h=(0,j.Z)();return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("nav",{className:"navbar navbar-expand-lg fixed-top nvbar",children:(0,v.jsxs)("div",{className:"container-fluid",children:[(0,v.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,v.jsx)("span",{className:"navbar-toggler-icon"})}),(0,v.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo01",children:[(0,v.jsxs)(s.rU,{to:"/",className:"navbar-brand d-flex align-items-center justify-content-center ",children:[(0,v.jsx)(r.Xfy,{className:"me-2 text-light fs-2"}),(0,v.jsxs)("span",{style:{color:"#fff",fontSize:"30px"},children:[(0,v.jsx)("b",{className:"s-word",children:"S"}),"-Mart"]})]}),(0,v.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[(0,v.jsx)("li",{children:(0,v.jsx)(x,{})}),(0,v.jsx)("li",{className:"nav-item",children:(0,v.jsx)(s.OL,{to:"/",className:"nav-link",children:"Home"})}),(0,v.jsxs)("li",{className:"nav-item dropdown",children:[(0,v.jsx)(s.rU,{className:"nav-link dropdown-toggle",role:"button","data-bs-toggle":"dropdown",children:"Categories"}),(0,v.jsxs)("ul",{className:"dropdown-menu",style:{maxHeight:"280px",overflowY:"auto",whiteSpace:"nowrap"},children:[(0,v.jsx)(s.rU,{className:"dropdown-item",to:"/categories",children:"All Categories"}),(0,v.jsx)("li",{children:(0,v.jsx)("hr",{className:"dropdown-divider"})}),null===h||void 0===h?void 0:h.map((function(e){return(0,v.jsx)("li",{children:(0,v.jsx)(s.rU,{className:"dropdown-item",to:"/category/".concat(e.slug),children:null===e||void 0===e?void 0:e.name})},null===e||void 0===e?void 0:e._id)}))]})]}),o.user?(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("li",{className:"nav-item dropdown",children:[(0,v.jsx)(s.OL,{className:"nav-link dropdown-toggle",role:"button","data-bs-toggle":"dropdown",children:null===o||void 0===o||null===(e=o.user)||void 0===e?void 0:e.name}),(0,v.jsxs)("ul",{className:"dropdown-menu",children:[(0,v.jsx)("li",{children:(0,v.jsx)(s.OL,{to:"/dashboard/".concat(1===(null===o||void 0===o||null===(n=o.user)||void 0===n?void 0:n.role)?"admin":"user"),className:"dropdown-item",children:"Dashboard"})}),(0,v.jsx)("li",{children:(0,v.jsx)(s.OL,{to:"/login",className:"dropdown-item",onClick:function(){d({user:null,token:""}),localStorage.removeItem("auth"),l.Am.success("Logout successfully!!")},children:"LogOut"})})]})]})}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("li",{className:"nav-item",children:(0,v.jsx)(s.OL,{to:"/register",className:"nav-link",children:"Register"})}),(0,v.jsx)("li",{className:"nav-item",children:(0,v.jsx)(s.OL,{to:"/login",className:"nav-link",children:"Login"})})]}),(0,v.jsx)("li",{className:"nav-item",children:(0,v.jsx)(s.OL,{to:"/cart",className:"nav-link",children:(0,v.jsx)("div",{className:"cart-icon",children:(0,v.jsx)(f.Z,{count:null===m||void 0===m?void 0:m.length,children:(0,v.jsx)(p.GPR,{style:{fontSize:"24px",color:"#fff"}})})})})})]})]})]})})})},b=function(){return(0,v.jsxs)("div",{className:"footer",children:[(0,v.jsx)("h4",{className:"text-center footer-title",children:"\xa9 Copyright 2020-2023 - S-MART. All rights reserved."}),(0,v.jsxs)("div",{className:"text-center footer-links",children:[(0,v.jsx)(s.rU,{to:"/about",className:"footer-link",children:"About"}),(0,v.jsx)("span",{className:"footer-link-divider",children:"|"}),(0,v.jsx)(s.rU,{to:"/contact",className:"footer-link",children:"Contact"}),(0,v.jsx)("span",{className:"footer-link-divider",children:"|"}),(0,v.jsx)(s.rU,{to:"/policy",className:"footer-link",children:"Policy"})]})]})},y=t(6907),w=function(e){var n=e.children,t=e.title,a=e.description,s=e.keywords,r=e.author;return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(y.B6,{children:[(0,v.jsxs)(y.ql,{children:[(0,v.jsx)("meta",{name:"description",content:a}),(0,v.jsx)("meta",{name:"keywords",content:s}),(0,v.jsx)("meta",{name:"author",content:r}),(0,v.jsx)("title",{children:t})]}),(0,v.jsx)(N,{}),(0,v.jsx)("main",{style:{marginTop:"85px",minHeight:"80vh"},children:n}),(0,v.jsx)(b,{})]})})};w.defaultProps={title:"Ecommerce app - S-Mart",description:"Ecommerce Mern project",keywords:"mern,react,node,express,mongodb,ecommerce",author:"Prashant Y"};var k=w},4904:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(4165),s=t(5861),r=t(9439),c=t(2791),l=t(1243);function i(){var e=(0,c.useState)([]),n=(0,r.Z)(e,2),t=n[0],i=n[1],o=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var n,t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.Z.get("/api/v1/category/get-category");case 3:n=e.sent,null!==(t=null===n||void 0===n?void 0:n.data)&&void 0!==t&&t.success&&i(null===t||void 0===t?void 0:t.category),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error while getting categories");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){o()}),[]),t}},5631:function(e,n,t){t.r(n);var a=t(3433),s=t(4165),r=t(5861),c=t(9439),l=t(2791),i=t(6557),o=t(7689),d=t(3010),u=t(3402),m=t(1243),h=t(6224),v=t(184);n.default=function(){var e=(0,l.useState)([]),n=(0,c.Z)(e,2),t=n[0],x=n[1],p=(0,h.j)(),j=(0,c.Z)(p,2),g=j[0],f=j[1],N=(0,l.useState)([]),b=(0,c.Z)(N,2),y=b[0],w=b[1],k=(0,l.useState)(!0),Z=(0,c.Z)(k,2),S=Z[0],C=Z[1],L=(0,o.UO)(),O=(0,o.s0)();(0,l.useEffect)((function(){if(null!==L&&void 0!==L&&L.slug){var e=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){var n,t,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C(!0),n=L.slug,e.next=5,m.Z.get("/api/v1/product/product-category/".concat(n));case 5:t=e.sent,null!==(a=null===t||void 0===t?void 0:t.data)&&void 0!==a&&a.success&&(x(null===a||void 0===a?void 0:a.products),w(null===a||void 0===a?void 0:a.category),C(!1)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),C(!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}}),[null===L||void 0===L?void 0:L.slug]);return(0,v.jsx)(i.Z,{title:null!==y&&void 0!==y&&y.name?"".concat(null===y||void 0===y?void 0:y.name," Products | S-Mart"):"Loading...",children:S?(0,v.jsxs)("div",{className:"d-flex justify-content-center align-items-center vh-100",children:[(0,v.jsx)(d.lu,{}),(0,v.jsx)("h3",{className:"ms-2",children:"Loading..."})]}):(0,v.jsxs)("div",{className:"container",children:[(0,v.jsx)("h4",{className:"text-center mt-4 text-capitalize",children:"Category - ".concat(y.name)}),(0,v.jsx)("h5",{className:"text-center mt-2",children:"".concat(t.length," results found.")}),(0,v.jsx)("div",{className:"row",children:null===t||void 0===t?void 0:t.map((function(e){return(0,v.jsx)("div",{className:"col-md-4 mb-4",children:(0,v.jsxs)("div",{className:"card",children:[(0,v.jsx)("img",{src:"/api/v1/product/product-image/".concat(e._id),className:"card-img-top",alt:e.name,style:{height:"250px"}}),(0,v.jsxs)("div",{className:"card-body",children:[(0,v.jsx)("h5",{className:"card-title",children:e.name}),(0,v.jsxs)("p",{className:"card-text",children:[e.description.substring(0,60),"..."]}),(0,v.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,v.jsx)("h5",{className:"card-title",children:e.price.toLocaleString("en-IN",{style:"currency",currency:"INR"})}),(0,v.jsx)("button",{className:"btn btn-info",onClick:function(n){n.preventDefault(),O("/product/".concat(e.slug))},children:"More Details"})]}),(0,v.jsx)("button",{className:"btn btn-dark mt-2",onClick:function(n){return function(e,n){e.preventDefault(),f([].concat((0,a.Z)(g),[n])),localStorage.setItem("cart",JSON.stringify([].concat((0,a.Z)(g),[n]))),u.Am.success("".concat(n.name," added to cart!!\u270c\ufe0f\u270c\ufe0f"))}(n,e)},children:"ADD TO CART"})]})]})},e._id)}))})]})})}}}]);
//# sourceMappingURL=631.6727755c.chunk.js.map