"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[707],{5676:function(e,a,n){n.d(a,{Z:function(){return i}});n(2791);var s=n(1087),r=n(184),i=function(){return(0,r.jsxs)("div",{className:"admin-menu-container",children:[(0,r.jsx)("div",{className:"admin-menu-heading",children:(0,r.jsx)("h3",{children:"Admin Panel"})}),(0,r.jsxs)("div",{className:"list-group",children:[(0,r.jsx)(s.OL,{to:"/dashboard/admin/create-category",className:"admin-menu-item",children:"Create Category"}),(0,r.jsx)(s.OL,{to:"/dashboard/admin/create-product",className:"admin-menu-item",children:"Create Product"}),(0,r.jsx)(s.OL,{to:"/dashboard/admin/products",className:"admin-menu-item",children:"Products"}),(0,r.jsx)(s.OL,{to:"/dashboard/admin/orders",className:"admin-menu-item",children:"User Orders"})]})]})}},6557:function(e,a,n){n.d(a,{Z:function(){return k}});n(2791);var s=n(9439),r=n(1087),i=n(6355),l=n(8241),t=n(3402),c=n(4165),d=n(1413),o=n(5861),m=n(3490),u=n(1243),h=n(7689),v=n(184),x=function(){var e=(0,m.R)(),a=(0,s.Z)(e,2),n=a[0],r=a[1],i=(0,h.s0)();function l(){return(l=(0,o.Z)((0,c.Z)().mark((function e(a){var s,l,t;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,s=n.keyword,e.next=5,u.Z.get("/api/v1/product/search/".concat(s));case 5:l=e.sent,(t=null===l||void 0===l?void 0:l.data).success&&r((0,d.Z)((0,d.Z)({},n),{},{results:t.searchResults})),i("/search"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("Error",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}return(0,v.jsx)("div",{className:"main-search-input-wrap",children:(0,v.jsxs)("div",{className:"main-search-input",children:[(0,v.jsx)("div",{className:"main-search-input-item",children:(0,v.jsx)("input",{type:"text",placeholder:"Search Products...",value:n.keyword,onChange:function(e){return r((0,d.Z)((0,d.Z)({},n),{},{keyword:e.target.value}))}})}),(0,v.jsx)("div",{children:(0,v.jsx)("button",{className:"main-search-button",type:"button",onClick:function(e){return l.apply(this,arguments)},children:"Search"})})]})})},j=n(9126),p=n(4904),g=n(6224),N=n(8502),f=function(){var e,a,n=(0,l.a)(),c=(0,s.Z)(n,2),d=c[0],o=c[1],m=(0,g.j)(),u=(0,s.Z)(m,1)[0],h=(0,p.Z)();return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("nav",{className:"navbar navbar-expand-lg fixed-top nvbar",children:(0,v.jsxs)("div",{className:"container-fluid",children:[(0,v.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,v.jsx)("span",{className:"navbar-toggler-icon"})}),(0,v.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo01",children:[(0,v.jsxs)(r.rU,{to:"/",className:"navbar-brand d-flex align-items-center justify-content-center ",children:[(0,v.jsx)(i.Xfy,{className:"me-2 text-light fs-2"}),(0,v.jsxs)("span",{style:{color:"#fff",fontSize:"30px"},children:[(0,v.jsx)("b",{className:"s-word",children:"S"}),"-Mart"]})]}),(0,v.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[(0,v.jsx)("li",{children:(0,v.jsx)(x,{})}),(0,v.jsx)("li",{className:"nav-item",children:(0,v.jsx)(r.OL,{to:"/",className:"nav-link",children:"Home"})}),(0,v.jsxs)("li",{className:"nav-item dropdown",children:[(0,v.jsx)(r.rU,{className:"nav-link dropdown-toggle",role:"button","data-bs-toggle":"dropdown",children:"Categories"}),(0,v.jsxs)("ul",{className:"dropdown-menu",style:{maxHeight:"280px",overflowY:"auto",whiteSpace:"nowrap"},children:[(0,v.jsx)(r.rU,{className:"dropdown-item",to:"/categories",children:"All Categories"}),(0,v.jsx)("li",{children:(0,v.jsx)("hr",{className:"dropdown-divider"})}),null===h||void 0===h?void 0:h.map((function(e){return(0,v.jsx)("li",{children:(0,v.jsx)(r.rU,{className:"dropdown-item",to:"/category/".concat(e.slug),children:null===e||void 0===e?void 0:e.name})},null===e||void 0===e?void 0:e._id)}))]})]}),d.user?(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("li",{className:"nav-item dropdown",children:[(0,v.jsx)(r.OL,{className:"nav-link dropdown-toggle",role:"button","data-bs-toggle":"dropdown",children:null===d||void 0===d||null===(e=d.user)||void 0===e?void 0:e.name}),(0,v.jsxs)("ul",{className:"dropdown-menu",children:[(0,v.jsx)("li",{children:(0,v.jsx)(r.OL,{to:"/dashboard/".concat(1===(null===d||void 0===d||null===(a=d.user)||void 0===a?void 0:a.role)?"admin":"user"),className:"dropdown-item",children:"Dashboard"})}),(0,v.jsx)("li",{children:(0,v.jsx)(r.OL,{to:"/login",className:"dropdown-item",onClick:function(){o({user:null,token:""}),localStorage.removeItem("auth"),t.Am.success("Logout successfully!!")},children:"LogOut"})})]})]})}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("li",{className:"nav-item",children:(0,v.jsx)(r.OL,{to:"/register",className:"nav-link",children:"Register"})}),(0,v.jsx)("li",{className:"nav-item",children:(0,v.jsx)(r.OL,{to:"/login",className:"nav-link",children:"Login"})})]}),(0,v.jsx)("li",{className:"nav-item",children:(0,v.jsx)(r.OL,{to:"/cart",className:"nav-link",children:(0,v.jsx)("div",{className:"cart-icon",children:(0,v.jsx)(N.Z,{count:null===u||void 0===u?void 0:u.length,children:(0,v.jsx)(j.GPR,{style:{fontSize:"24px",color:"#fff"}})})})})})]})]})]})})})},b=function(){return(0,v.jsxs)("div",{className:"footer",children:[(0,v.jsx)("h4",{className:"text-center footer-title",children:"\xa9 Copyright 2020-2023 - S-MART. All rights reserved."}),(0,v.jsxs)("div",{className:"text-center footer-links",children:[(0,v.jsx)(r.rU,{to:"/about",className:"footer-link",children:"About"}),(0,v.jsx)("span",{className:"footer-link-divider",children:"|"}),(0,v.jsx)(r.rU,{to:"/contact",className:"footer-link",children:"Contact"}),(0,v.jsx)("span",{className:"footer-link-divider",children:"|"}),(0,v.jsx)(r.rU,{to:"/policy",className:"footer-link",children:"Policy"})]})]})},w=n(6907),y=function(e){var a=e.children,n=e.title,s=e.description,r=e.keywords,i=e.author;return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(w.B6,{children:[(0,v.jsxs)(w.ql,{children:[(0,v.jsx)("meta",{name:"description",content:s}),(0,v.jsx)("meta",{name:"keywords",content:r}),(0,v.jsx)("meta",{name:"author",content:i}),(0,v.jsx)("title",{children:n})]}),(0,v.jsx)(f,{}),(0,v.jsx)("main",{style:{marginTop:"85px",minHeight:"80vh"},children:a}),(0,v.jsx)(b,{})]})})};y.defaultProps={title:"Ecommerce app - S-Mart",description:"Ecommerce Mern project",keywords:"mern,react,node,express,mongodb,ecommerce",author:"Prashant Y"};var k=y},4904:function(e,a,n){n.d(a,{Z:function(){return c}});var s=n(4165),r=n(5861),i=n(9439),l=n(2791),t=n(1243);function c(){var e=(0,l.useState)([]),a=(0,i.Z)(e,2),n=a[0],c=a[1],d=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){var a,n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.Z.get("/api/v1/category/get-category");case 3:a=e.sent,null!==(n=null===a||void 0===a?void 0:a.data)&&void 0!==n&&n.success&&c(null===n||void 0===n?void 0:n.category),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error while getting categories");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){d()}),[]),n}},8707:function(e,a,n){n.r(a);var s=n(9439),r=(n(2791),n(6557)),i=n(5676),l=n(8241),t=n(184);a.default=function(){var e,a,n,c=(0,l.a)(),d=(0,s.Z)(c,1)[0];return(0,t.jsx)(r.Z,{title:"Admin Dashboard - S-Mart",children:(0,t.jsx)("div",{className:"container-fluid",style:{minHeight:"68.8vh"},children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-3",children:(0,t.jsx)(i.Z,{})}),(0,t.jsx)("div",{className:"col-md-9",children:(0,t.jsxs)("div",{className:"admin-details-card",children:[(0,t.jsx)("h1",{className:"admin-details-heading",children:"Admin Details"}),(0,t.jsxs)("div",{className:"admin-details-body",children:[(0,t.jsxs)("div",{className:"admin-detail",children:[(0,t.jsx)("h4",{className:"admin-detail-label",children:"Admin Name:"}),(0,t.jsx)("p",{className:"admin-detail-value",children:null===d||void 0===d||null===(e=d.user)||void 0===e?void 0:e.name})]}),(0,t.jsxs)("div",{className:"admin-detail",children:[(0,t.jsx)("h4",{className:"admin-detail-label",children:"Admin Email:"}),(0,t.jsx)("p",{className:"admin-detail-value",children:null===d||void 0===d||null===(a=d.user)||void 0===a?void 0:a.email})]}),(0,t.jsxs)("div",{className:"admin-detail",children:[(0,t.jsx)("h4",{className:"admin-detail-label",children:"Admin Contact Info:"}),(0,t.jsx)("p",{className:"admin-detail-value",children:null===d||void 0===d||null===(n=d.user)||void 0===n?void 0:n.phone})]})]})]})})]})})})}}}]);
//# sourceMappingURL=707.d2150637.chunk.js.map