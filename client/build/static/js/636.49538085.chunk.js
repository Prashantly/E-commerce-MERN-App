"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[636],{6557:function(e,a,s){s.d(a,{Z:function(){return y}});s(2791);var n=s(9439),t=s(1087),r=s(6355),l=s(8241),o=s(3402),i=s(4165),c=s(1413),d=s(5861),u=s(3490),m=s(1243),h=s(7689),x=s(184),p=function(){var e=(0,u.R)(),a=(0,n.Z)(e,2),s=a[0],t=a[1],r=(0,h.s0)();function l(){return(l=(0,d.Z)((0,i.Z)().mark((function e(a){var n,l,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,n=s.keyword,e.next=5,m.Z.get("/api/v1/product/search/".concat(n));case 5:l=e.sent,(o=null===l||void 0===l?void 0:l.data).success&&t((0,c.Z)((0,c.Z)({},s),{},{results:o.searchResults})),r("/search"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("Error",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}return(0,x.jsx)("div",{className:"main-search-input-wrap",children:(0,x.jsxs)("div",{className:"main-search-input",children:[(0,x.jsx)("div",{className:"main-search-input-item",children:(0,x.jsx)("input",{type:"text",placeholder:"Search Products...",value:s.keyword,onChange:function(e){return t((0,c.Z)((0,c.Z)({},s),{},{keyword:e.target.value}))}})}),(0,x.jsx)("div",{children:(0,x.jsx)("button",{className:"main-search-button",type:"button",onClick:function(e){return l.apply(this,arguments)},children:"Search"})})]})})},v=s(9126),g=s(4904),j=s(6224),f=s(8502),N=function(){var e,a,s=(0,l.a)(),i=(0,n.Z)(s,2),c=i[0],d=i[1],u=(0,j.j)().cart,m=(0,g.Z)();return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("nav",{className:"navbar navbar-expand-lg fixed-top nvbar",children:(0,x.jsxs)("div",{className:"container-fluid",children:[(0,x.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,x.jsx)("span",{className:"navbar-toggler-icon"})}),(0,x.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo01",children:[(0,x.jsxs)(t.rU,{to:"/",className:"navbar-brand d-flex align-items-center justify-content-center ",children:[(0,x.jsx)(r.Xfy,{className:"me-2 text-light fs-2"}),(0,x.jsxs)("span",{style:{color:"#fff",fontSize:"30px"},children:[(0,x.jsx)("b",{className:"s-word",children:"S"}),"-Mart"]})]}),(0,x.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[(0,x.jsx)("li",{children:(0,x.jsx)(p,{})}),(0,x.jsx)("li",{className:"nav-item",children:(0,x.jsx)(t.OL,{to:"/",className:"nav-link",children:"Home"})}),(0,x.jsxs)("li",{className:"nav-item dropdown",children:[(0,x.jsx)(t.rU,{className:"nav-link dropdown-toggle",role:"button","data-bs-toggle":"dropdown",children:"Categories"}),(0,x.jsxs)("ul",{className:"dropdown-menu",style:{maxHeight:"280px",overflowY:"auto",whiteSpace:"nowrap"},children:[(0,x.jsx)(t.rU,{className:"dropdown-item",to:"/categories",children:"All Categories"}),(0,x.jsx)("li",{children:(0,x.jsx)("hr",{className:"dropdown-divider"})}),null===m||void 0===m?void 0:m.map((function(e){return(0,x.jsx)("li",{children:(0,x.jsx)(t.rU,{className:"dropdown-item",to:"/category/".concat(e.slug),children:null===e||void 0===e?void 0:e.name})},null===e||void 0===e?void 0:e._id)}))]})]}),c.user?(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("li",{className:"nav-item dropdown",children:[(0,x.jsx)(t.OL,{className:"nav-link dropdown-toggle",role:"button","data-bs-toggle":"dropdown",children:null===c||void 0===c||null===(e=c.user)||void 0===e?void 0:e.name}),(0,x.jsxs)("ul",{className:"dropdown-menu",children:[(0,x.jsx)("li",{children:(0,x.jsx)(t.OL,{to:"/dashboard/".concat(1===(null===c||void 0===c||null===(a=c.user)||void 0===a?void 0:a.role)?"admin":"user"),className:"dropdown-item",children:"Dashboard"})}),(0,x.jsx)("li",{children:(0,x.jsx)(t.OL,{to:"/login",className:"dropdown-item",onClick:function(){d({user:null,token:""}),localStorage.removeItem("auth"),o.Am.success("Logout successfully!!")},children:"LogOut"})})]})]})}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("li",{className:"nav-item",children:(0,x.jsx)(t.OL,{to:"/register",className:"nav-link",children:"Register"})}),(0,x.jsx)("li",{className:"nav-item",children:(0,x.jsx)(t.OL,{to:"/login",className:"nav-link",children:"Login"})})]}),(0,x.jsx)("li",{className:"nav-item",children:(0,x.jsx)(t.OL,{to:"/cart",className:"nav-link",children:(0,x.jsx)("div",{className:"cart-icon",children:(0,x.jsx)(f.Z,{count:null===u||void 0===u?void 0:u.length,children:(0,x.jsx)(v.GPR,{style:{fontSize:"24px",color:"#fff"}})})})})})]})]})]})})})},b=function(){return(0,x.jsxs)("div",{className:"footer",children:[(0,x.jsx)("h4",{className:"text-center footer-title",children:"\xa9 Copyright 2020-2023 - S-MART. All rights reserved."}),(0,x.jsxs)("div",{className:"text-center footer-links",children:[(0,x.jsx)(t.rU,{to:"/about",className:"footer-link",children:"About"}),(0,x.jsx)("span",{className:"footer-link-divider",children:"|"}),(0,x.jsx)(t.rU,{to:"/contact",className:"footer-link",children:"Contact"}),(0,x.jsx)("span",{className:"footer-link-divider",children:"|"}),(0,x.jsx)(t.rU,{to:"/policy",className:"footer-link",children:"Policy"})]})]})},w=s(6907),k=function(e){var a=e.children,s=e.title,n=e.description,t=e.keywords,r=e.author;return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(w.B6,{children:[(0,x.jsxs)(w.ql,{children:[(0,x.jsx)("meta",{name:"description",content:n}),(0,x.jsx)("meta",{name:"keywords",content:t}),(0,x.jsx)("meta",{name:"author",content:r}),(0,x.jsx)("title",{children:s})]}),(0,x.jsx)(N,{}),(0,x.jsx)("main",{style:{marginTop:"85px",minHeight:"80vh"},children:a}),(0,x.jsx)(b,{})]})})};k.defaultProps={title:"Ecommerce app - S-Mart",description:"Ecommerce Mern project",keywords:"mern,react,node,express,mongodb,ecommerce",author:"Prashant Y"};var y=k},4904:function(e,a,s){s.d(a,{Z:function(){return i}});var n=s(4165),t=s(5861),r=s(9439),l=s(2791),o=s(1243);function i(){var e=(0,l.useState)([]),a=(0,r.Z)(e,2),s=a[0],i=a[1],c=function(){var e=(0,t.Z)((0,n.Z)().mark((function e(){var a,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/api/v1/category/get-category");case 3:a=e.sent,null!==(s=null===a||void 0===a?void 0:a.data)&&void 0!==s&&s.success&&i(null===s||void 0===s?void 0:s.category),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error while getting categories----\x3e",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){c()}),[]),s}},9636:function(e,a,s){s.r(a);var n=s(4942),t=s(4165),r=s(1413),l=s(5861),o=s(9439),i=s(2791),c=s(6557),d=s(7689),u=s(1087),m=s(3402),h=s(1243),x=(s(88),s(6355)),p=s(8241),v=s(184),g={passwordToggle:{position:"absolute",right:"0.3rem",top:"0.2rem",cursor:"pointer"}};a.default=function(){var e=(0,d.s0)(),a=(0,d.TH)(),s=(0,i.useState)(!1),j=(0,o.Z)(s,2),f=j[0],N=j[1],b=(0,p.a)(),w=(0,o.Z)(b,2),k=w[0],y=w[1],Z=(0,i.useState)({email:"",password:""}),S=(0,o.Z)(Z,2),L=S[0],O=S[1],C=function(){var s=(0,l.Z)((0,t.Z)().mark((function s(n){var l;return(0,t.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return n.preventDefault(),s.prev=1,s.next=4,h.Z.post("/api/v1/auth/login",(0,r.Z)({},L));case 4:(l=s.sent)&&200===l.status&&(m.ZP.success(l.data&&l.data.message,{style:{background:"#A0D9EF",borderRadius:"10px"}}),y((0,r.Z)((0,r.Z)({},k),{},{user:l.data.user,token:l.data.authToken})),localStorage.setItem("auth",JSON.stringify(l.data)),e(a.state||"/")),s.next=12;break;case 8:s.prev=8,s.t0=s.catch(1),console.log("LoginError***",s.t0),m.ZP.error(s.t0.response.data.message,{style:{background:"#EE4238",borderRadius:"10px",color:"#fff"}});case 12:case"end":return s.stop()}}),s,null,[[1,8]])})));return function(e){return s.apply(this,arguments)}}(),E=function(e){O((0,r.Z)((0,r.Z)({},L),{},(0,n.Z)({},e.target.name,e.target.value)))};return(0,v.jsx)(c.Z,{title:"Login now | S-Mart",children:(0,v.jsx)("div",{className:"form-container animated-form",children:(0,v.jsxs)("form",{onSubmit:C,children:[(0,v.jsx)("h4",{className:"title",children:"LOGIN FORM"}),(0,v.jsx)("p",{className:"text-muted mb-3",children:"Hi, we are glad that you're back, Please login"}),(0,v.jsx)("div",{className:"mb-3",children:(0,v.jsx)("input",{type:"email",value:L.email,name:"email",onChange:E,className:"form-control",id:"exampleInputEmail1",placeholder:"Enter Your Email ",required:!0})}),(0,v.jsxs)("div",{className:"mb-3",style:{position:"relative"},children:[(0,v.jsx)("input",{type:f?"text":"password",value:L.password,name:"password",onChange:E,className:"form-control",id:"exampleInputPassword1",placeholder:"Enter Your Password",required:!0}),(0,v.jsx)("span",{className:"password-toggle fs-5",onClick:function(e){e.preventDefault(),N(!f)},style:g.passwordToggle,children:f?(0,v.jsx)(x.tgn,{}):(0,v.jsx)(x.dSq,{})})]}),(0,v.jsx)("div",{className:"d-flex justify-content-center",children:(0,v.jsx)("button",{type:"submit",className:"btn btn-primary mt-3",children:"LOGIN"})}),(0,v.jsxs)("p",{className:"text-muted text-center mt-3",children:["Don't have an Account? ",(0,v.jsx)(u.OL,{to:"/register",children:"Register"})]}),(0,v.jsxs)("p",{className:"text-muted text-center mt-2 fw-bold",children:["Forgot Password? ",(0,v.jsx)(u.OL,{to:"/password-reset",children:"Click here"})]})]})})})}},88:function(){}}]);
//# sourceMappingURL=636.49538085.chunk.js.map