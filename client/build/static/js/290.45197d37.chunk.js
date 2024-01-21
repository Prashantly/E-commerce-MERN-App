"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[290],{6557:function(e,n,r){r.d(n,{Z:function(){return k}});r(2791);var t=r(9439),s=r(1087),a=r(6355),o=r(8241),c=r(3402),l=r(4165),i=r(1413),d=r(5861),u=r(3490),m=r(1243),p=r(7689),h=r(184),x=function(){var e=(0,u.R)(),n=(0,t.Z)(e,2),r=n[0],s=n[1],a=(0,p.s0)();function o(){return(o=(0,d.Z)((0,l.Z)().mark((function e(n){var t,o,c;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,t=r.keyword,e.next=5,m.Z.get("/api/v1/product/search/".concat(t));case 5:o=e.sent,(c=null===o||void 0===o?void 0:o.data).success&&s((0,i.Z)((0,i.Z)({},r),{},{results:c.searchResults})),a("/search"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("Error",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}return(0,h.jsx)("div",{className:"main-search-input-wrap",children:(0,h.jsxs)("div",{className:"main-search-input",children:[(0,h.jsx)("div",{className:"main-search-input-item",children:(0,h.jsx)("input",{type:"text",placeholder:"Search Products...",value:r.keyword,onChange:function(e){return s((0,i.Z)((0,i.Z)({},r),{},{keyword:e.target.value}))}})}),(0,h.jsx)("div",{children:(0,h.jsx)("button",{className:"main-search-button",type:"button",onClick:function(e){return o.apply(this,arguments)},children:"Search"})})]})})},v=r(9126),f=r(4904),g=r(6224),j=r(8502),N=function(){var e,n,r=(0,o.a)(),l=(0,t.Z)(r,2),i=l[0],d=l[1],u=(0,g.j)().cart,m=(0,f.Z)();return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("nav",{className:"navbar navbar-expand-lg fixed-top nvbar",children:(0,h.jsxs)("div",{className:"container-fluid",children:[(0,h.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,h.jsx)("span",{className:"navbar-toggler-icon"})}),(0,h.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo01",children:[(0,h.jsxs)(s.rU,{to:"/",className:"navbar-brand d-flex align-items-center justify-content-center ",children:[(0,h.jsx)(a.Xfy,{className:"me-2 text-light fs-2"}),(0,h.jsxs)("span",{style:{color:"#fff",fontSize:"30px"},children:[(0,h.jsx)("b",{className:"s-word",children:"S"}),"-Mart"]})]}),(0,h.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[(0,h.jsx)("li",{children:(0,h.jsx)(x,{})}),(0,h.jsx)("li",{className:"nav-item",children:(0,h.jsx)(s.OL,{to:"/",className:"nav-link",children:"Home"})}),(0,h.jsxs)("li",{className:"nav-item dropdown",children:[(0,h.jsx)(s.rU,{className:"nav-link dropdown-toggle",role:"button","data-bs-toggle":"dropdown",children:"Categories"}),(0,h.jsxs)("ul",{className:"dropdown-menu",style:{maxHeight:"280px",overflowY:"auto",whiteSpace:"nowrap"},children:[(0,h.jsx)(s.rU,{className:"dropdown-item",to:"/categories",children:"All Categories"}),(0,h.jsx)("li",{children:(0,h.jsx)("hr",{className:"dropdown-divider"})}),null===m||void 0===m?void 0:m.map((function(e){return(0,h.jsx)("li",{children:(0,h.jsx)(s.rU,{className:"dropdown-item",to:"/category/".concat(e.slug),children:null===e||void 0===e?void 0:e.name})},null===e||void 0===e?void 0:e._id)}))]})]}),i.user?(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("li",{className:"nav-item dropdown",children:[(0,h.jsx)(s.OL,{className:"nav-link dropdown-toggle",role:"button","data-bs-toggle":"dropdown",children:null===i||void 0===i||null===(e=i.user)||void 0===e?void 0:e.name}),(0,h.jsxs)("ul",{className:"dropdown-menu",children:[(0,h.jsx)("li",{children:(0,h.jsx)(s.OL,{to:"/dashboard/".concat(1===(null===i||void 0===i||null===(n=i.user)||void 0===n?void 0:n.role)?"admin":"user"),className:"dropdown-item",children:"Dashboard"})}),(0,h.jsx)("li",{children:(0,h.jsx)(s.OL,{to:"/login",className:"dropdown-item",onClick:function(){d({user:null,token:""}),localStorage.removeItem("auth"),c.Am.success("Logout successfully!!")},children:"LogOut"})})]})]})}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("li",{className:"nav-item",children:(0,h.jsx)(s.OL,{to:"/register",className:"nav-link",children:"Register"})}),(0,h.jsx)("li",{className:"nav-item",children:(0,h.jsx)(s.OL,{to:"/login",className:"nav-link",children:"Login"})})]}),(0,h.jsx)("li",{className:"nav-item",children:(0,h.jsx)(s.OL,{to:"/cart",className:"nav-link",children:(0,h.jsx)("div",{className:"cart-icon",children:(0,h.jsx)(j.Z,{count:null===u||void 0===u?void 0:u.length,children:(0,h.jsx)(v.GPR,{style:{fontSize:"24px",color:"#fff"}})})})})})]})]})]})})})},w=function(){return(0,h.jsxs)("div",{className:"footer",children:[(0,h.jsx)("h4",{className:"text-center footer-title",children:"\xa9 Copyright 2020-2023 - S-MART. All rights reserved."}),(0,h.jsxs)("div",{className:"text-center footer-links",children:[(0,h.jsx)(s.rU,{to:"/about",className:"footer-link",children:"About"}),(0,h.jsx)("span",{className:"footer-link-divider",children:"|"}),(0,h.jsx)(s.rU,{to:"/contact",className:"footer-link",children:"Contact"}),(0,h.jsx)("span",{className:"footer-link-divider",children:"|"}),(0,h.jsx)(s.rU,{to:"/policy",className:"footer-link",children:"Policy"})]})]})},b=r(6907),y=function(e){var n=e.children,r=e.title,t=e.description,s=e.keywords,a=e.author;return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(b.B6,{children:[(0,h.jsxs)(b.ql,{children:[(0,h.jsx)("meta",{name:"description",content:t}),(0,h.jsx)("meta",{name:"keywords",content:s}),(0,h.jsx)("meta",{name:"author",content:a}),(0,h.jsx)("title",{children:r})]}),(0,h.jsx)(N,{}),(0,h.jsx)("main",{style:{marginTop:"85px",minHeight:"80vh"},children:n}),(0,h.jsx)(w,{})]})})};y.defaultProps={title:"Ecommerce app - S-Mart",description:"Ecommerce Mern project",keywords:"mern,react,node,express,mongodb,ecommerce",author:"Prashant Y"};var k=y},4904:function(e,n,r){r.d(n,{Z:function(){return l}});var t=r(4165),s=r(5861),a=r(9439),o=r(2791),c=r(1243);function l(){var e=(0,o.useState)([]),n=(0,a.Z)(e,2),r=n[0],l=n[1],i=function(){var e=(0,s.Z)((0,t.Z)().mark((function e(){var n,r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/api/v1/category/get-category");case 3:n=e.sent,null!==(r=null===n||void 0===n?void 0:n.data)&&void 0!==r&&r.success&&l(null===r||void 0===r?void 0:r.category),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error while getting categories----\x3e",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){i()}),[]),r}},2290:function(e,n,r){r.r(n);var t=r(4165),s=r(5861),a=r(9439),o=r(2791),c=r(6557),l=(r(88),r(7689)),i=r(1243),d=r(6355),u=r(3402),m=r(184),p={passwordToggle:{position:"absolute",right:"0.3rem",top:"0.2rem",cursor:"pointer"}};n.default=function(){var e=(0,l.UO)(),n=e.id,r=e.token,h=(0,o.useState)(""),x=(0,a.Z)(h,2),v=x[0],f=x[1],g=(0,o.useState)(""),j=(0,a.Z)(g,2),N=j[0],w=j[1],b=(0,o.useState)(!1),y=(0,a.Z)(b,2),k=y[0],Z=y[1],S=(0,l.s0)();(0,o.useEffect)((function(){var e=function(){var e=(0,s.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/api/v1/auth/forgotPassword/".concat(n,"/").concat(r),{headers:{"Content-Type":"application/json"}});case 3:200===e.sent.status&&console.log("User Valid!!"),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error ".concat(JSON.stringify(e.t0))),S("/*"),u.Am.error(e.t0.response.data.message,{style:{background:"#EE4238",borderRadius:"10px",color:"#fff"}});case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[n,S,r]);var E=function(){var e=(0,s.Z)((0,t.Z)().mark((function e(s){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.prev=1,e.next=4,i.Z.post("/api/v1/auth/".concat(n,"/").concat(r),{password:v},{headers:{"Content-Type":"application/json"}});case 4:200===e.sent.status&&(f(""),w(!0)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("Error ".concat(JSON.stringify(e.t0))),u.Am.error("Token expired!! Generate new Link!!",{style:{background:"#EE4238",borderRadius:"10px",color:"#fff"}});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}();return(0,m.jsx)(c.Z,{title:"Forgot Password - S-Mart",children:(0,m.jsx)("div",{className:"form-container animated-form",children:(0,m.jsxs)("form",{onSubmit:E,children:[(0,m.jsx)("h2",{className:"title",style:{marginBottom:"40px"},children:"Enter Your New Password"}),N?(0,m.jsxs)("p",{className:"text-center",style:{color:"green",fontWeight:"bold"},children:["Password reset done!! ",(0,m.jsx)("br",{}),"Login with New Password!!"]}):(0,m.jsx)("p",{}),(0,m.jsxs)("div",{className:"mb-3",style:{position:"relative"},children:[(0,m.jsx)("input",{type:k?"text":"password",value:v,name:"password",onChange:function(e){return f(e.target.value)},className:"form-control",placeholder:"Enter Your New Password",required:!0}),(0,m.jsx)("span",{className:"password-toggle fs-5",onClick:function(e){e.preventDefault(),Z(!k)},style:p.passwordToggle,children:k?(0,m.jsx)(d.tgn,{}):(0,m.jsx)(d.dSq,{})})]}),(0,m.jsx)("div",{className:"d-flex justify-content-center",children:(0,m.jsx)("button",{type:"submit",className:"btn btn-primary mt-3 text-uppercase",style:{letterSpacing:"1px"},children:"Reset Password"})})]})})})}},88:function(){}}]);
//# sourceMappingURL=290.45197d37.chunk.js.map