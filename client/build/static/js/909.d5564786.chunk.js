"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[909],{5676:function(e,n,a){a.d(n,{Z:function(){return s}});a(2791);var r=a(1087),t=a(184),s=function(){return(0,t.jsxs)("div",{className:"admin-menu-container",children:[(0,t.jsx)("div",{className:"admin-menu-heading",children:(0,t.jsx)("h3",{children:"Admin Panel"})}),(0,t.jsxs)("div",{className:"list-group",children:[(0,t.jsx)(r.OL,{to:"/dashboard/admin/create-category",className:"admin-menu-item",children:"Create Category"}),(0,t.jsx)(r.OL,{to:"/dashboard/admin/create-product",className:"admin-menu-item",children:"Create Product"}),(0,t.jsx)(r.OL,{to:"/dashboard/admin/products",className:"admin-menu-item",children:"Products"}),(0,t.jsx)(r.OL,{to:"/dashboard/admin/orders",className:"admin-menu-item",children:"User Orders"})]})]})}},6557:function(e,n,a){a.d(n,{Z:function(){return w}});a(2791);var r=a(9439),t=a(1087),s=a(6355),c=a(8241),o=a(3402),l=a(4165),i=a(1413),d=a(5861),u=a(3490),m=a(1243),p=a(7689),h=a(184),v=function(){var e=(0,u.R)(),n=(0,r.Z)(e,2),a=n[0],t=n[1],s=(0,p.s0)();function c(){return(c=(0,d.Z)((0,l.Z)().mark((function e(n){var r,c,o;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,r=a.keyword,e.next=5,m.Z.get("/api/v1/product/search/".concat(r));case 5:c=e.sent,(o=null===c||void 0===c?void 0:c.data).success&&t((0,i.Z)((0,i.Z)({},a),{},{results:o.searchResults})),s("/search"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("Error",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}return(0,h.jsx)("div",{className:"main-search-input-wrap",children:(0,h.jsxs)("div",{className:"main-search-input",children:[(0,h.jsx)("div",{className:"main-search-input-item",children:(0,h.jsx)("input",{type:"text",placeholder:"Search Products...",value:a.keyword,onChange:function(e){return t((0,i.Z)((0,i.Z)({},a),{},{keyword:e.target.value}))}})}),(0,h.jsx)("div",{children:(0,h.jsx)("button",{className:"main-search-button",type:"button",onClick:function(e){return c.apply(this,arguments)},children:"Search"})})]})})},x=a(9126),g=a(4904),f=a(6224),j=a(8502),b=function(){var e,n,a=(0,c.a)(),l=(0,r.Z)(a,2),i=l[0],d=l[1],u=(0,f.j)(),m=(0,r.Z)(u,1)[0],p=(0,g.Z)();return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("nav",{className:"navbar navbar-expand-lg fixed-top nvbar",children:(0,h.jsxs)("div",{className:"container-fluid",children:[(0,h.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,h.jsx)("span",{className:"navbar-toggler-icon"})}),(0,h.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo01",children:[(0,h.jsxs)(t.rU,{to:"/",className:"navbar-brand d-flex align-items-center justify-content-center ",children:[(0,h.jsx)(s.Xfy,{className:"me-2 text-light fs-2"}),(0,h.jsxs)("span",{style:{color:"#fff",fontSize:"30px"},children:[(0,h.jsx)("b",{className:"s-word",children:"S"}),"-Mart"]})]}),(0,h.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[(0,h.jsx)("li",{children:(0,h.jsx)(v,{})}),(0,h.jsx)("li",{className:"nav-item",children:(0,h.jsx)(t.OL,{to:"/",className:"nav-link",children:"Home"})}),(0,h.jsxs)("li",{className:"nav-item dropdown",children:[(0,h.jsx)(t.rU,{className:"nav-link dropdown-toggle",role:"button","data-bs-toggle":"dropdown",children:"Categories"}),(0,h.jsxs)("ul",{className:"dropdown-menu",style:{maxHeight:"280px",overflowY:"auto",whiteSpace:"nowrap"},children:[(0,h.jsx)(t.rU,{className:"dropdown-item",to:"/categories",children:"All Categories"}),(0,h.jsx)("li",{children:(0,h.jsx)("hr",{className:"dropdown-divider"})}),null===p||void 0===p?void 0:p.map((function(e){return(0,h.jsx)("li",{children:(0,h.jsx)(t.rU,{className:"dropdown-item",to:"/category/".concat(e.slug),children:null===e||void 0===e?void 0:e.name})},null===e||void 0===e?void 0:e._id)}))]})]}),i.user?(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("li",{className:"nav-item dropdown",children:[(0,h.jsx)(t.OL,{className:"nav-link dropdown-toggle",role:"button","data-bs-toggle":"dropdown",children:null===i||void 0===i||null===(e=i.user)||void 0===e?void 0:e.name}),(0,h.jsxs)("ul",{className:"dropdown-menu",children:[(0,h.jsx)("li",{children:(0,h.jsx)(t.OL,{to:"/dashboard/".concat(1===(null===i||void 0===i||null===(n=i.user)||void 0===n?void 0:n.role)?"admin":"user"),className:"dropdown-item",children:"Dashboard"})}),(0,h.jsx)("li",{children:(0,h.jsx)(t.OL,{to:"/login",className:"dropdown-item",onClick:function(){d({user:null,token:""}),localStorage.removeItem("auth"),o.Am.success("Logout successfully!!")},children:"LogOut"})})]})]})}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("li",{className:"nav-item",children:(0,h.jsx)(t.OL,{to:"/register",className:"nav-link",children:"Register"})}),(0,h.jsx)("li",{className:"nav-item",children:(0,h.jsx)(t.OL,{to:"/login",className:"nav-link",children:"Login"})})]}),(0,h.jsx)("li",{className:"nav-item",children:(0,h.jsx)(t.OL,{to:"/cart",className:"nav-link",children:(0,h.jsx)("div",{className:"cart-icon",children:(0,h.jsx)(j.Z,{count:null===m||void 0===m?void 0:m.length,children:(0,h.jsx)(x.GPR,{style:{fontSize:"24px",color:"#fff"}})})})})})]})]})]})})})},N=function(){return(0,h.jsxs)("div",{className:"footer",children:[(0,h.jsx)("h4",{className:"text-center footer-title",children:"\xa9 Copyright 2020-2023 - S-MART. All rights reserved."}),(0,h.jsxs)("div",{className:"text-center footer-links",children:[(0,h.jsx)(t.rU,{to:"/about",className:"footer-link",children:"About"}),(0,h.jsx)("span",{className:"footer-link-divider",children:"|"}),(0,h.jsx)(t.rU,{to:"/contact",className:"footer-link",children:"Contact"}),(0,h.jsx)("span",{className:"footer-link-divider",children:"|"}),(0,h.jsx)(t.rU,{to:"/policy",className:"footer-link",children:"Policy"})]})]})},Z=a(6907),y=function(e){var n=e.children,a=e.title,r=e.description,t=e.keywords,s=e.author;return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(Z.B6,{children:[(0,h.jsxs)(Z.ql,{children:[(0,h.jsx)("meta",{name:"description",content:r}),(0,h.jsx)("meta",{name:"keywords",content:t}),(0,h.jsx)("meta",{name:"author",content:s}),(0,h.jsx)("title",{children:a})]}),(0,h.jsx)(b,{}),(0,h.jsx)("main",{style:{marginTop:"85px",minHeight:"80vh"},children:n}),(0,h.jsx)(N,{})]})})};y.defaultProps={title:"Ecommerce app - S-Mart",description:"Ecommerce Mern project",keywords:"mern,react,node,express,mongodb,ecommerce",author:"Prashant Y"};var w=y},4904:function(e,n,a){a.d(n,{Z:function(){return l}});var r=a(4165),t=a(5861),s=a(9439),c=a(2791),o=a(1243);function l(){var e=(0,c.useState)([]),n=(0,s.Z)(e,2),a=n[0],l=n[1],i=function(){var e=(0,t.Z)((0,r.Z)().mark((function e(){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/api/v1/category/get-category");case 3:n=e.sent,null!==(a=null===n||void 0===n?void 0:n.data)&&void 0!==a&&a.success&&l(null===a||void 0===a?void 0:a.category),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error while getting categories");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){i()}),[]),a}},6909:function(e,n,a){a.r(n);var r=a(4165),t=a(5861),s=a(9439),c=a(2791),o=a(6557),l=a(5676),i=a(3402),d=a(1243),u=a(4223),m=a(7689),p=a(184),h=u.Z.Option;n.default=function(){var e=(0,m.UO)(),n=(0,m.s0)(),a=(0,c.useState)([]),v=(0,s.Z)(a,2),x=v[0],g=v[1],f=(0,c.useState)(""),j=(0,s.Z)(f,2),b=j[0],N=j[1],Z=(0,c.useState)(""),y=(0,s.Z)(Z,2),w=y[0],k=y[1],C=(0,c.useState)(""),S=(0,s.Z)(C,2),P=S[0],O=S[1],D=(0,c.useState)(""),E=(0,s.Z)(D,2),L=E[0],U=E[1],T=(0,c.useState)(""),R=(0,s.Z)(T,2),A=R[0],B=R[1],F=(0,c.useState)(""),W=(0,s.Z)(F,2),_=W[0],z=W[1],M=(0,c.useState)(""),Y=(0,s.Z)(M,2),H=Y[0],I=Y[1],q=(0,c.useState)(""),G=(0,s.Z)(q,2),X=G[0],J=G[1],K=(0,c.useState)(""),Q=(0,s.Z)(K,2),V=Q[0],$=Q[1],ee=function(){var n=(0,t.Z)((0,r.Z)().mark((function n(){var a,t,s,c,o,l,i,u,m,p;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,d.Z.get("/api/v1/product/get-product/".concat(e.slug));case 3:a=n.sent,t=null===a||void 0===a?void 0:a.data,console.log(t),null!==t&&void 0!==t&&t.success&&(s=null===t||void 0===t?void 0:t.product,c=s._id,o=s.name,l=s.description,i=s.price,u=s.brand,m=s.category,p=s.stock,N(o),$(c),k(l),z(u),O(i),U(m._id),B(p)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log("Error in getting Single Product..",n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();(0,c.useEffect)((function(){ee(),console.log("Image state after getSingleProduct:",X)}),[]);var ne=function(){var e=(0,t.Z)((0,r.Z)().mark((function e(){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.Z.get("/api/v1/category/get-category");case 3:n=e.sent,null!==(a=n.data)&&void 0!==a&&a.success&&g(null===a||void 0===a?void 0:a.category),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),i.ZP.error("Something went wrong in getting all categories\ud83d\ude2e");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){ne()}),[]);var ae=function(){var e=(0,t.Z)((0,r.Z)().mark((function e(a){var t,s,c,o,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,(t=new FormData).append("name",b),t.append("description",w),t.append("price",P),t.append("category",L),t.append("stock",A),t.append("brand",_),X&&t.append("image",X),console.log(H),e.next=13,d.Z.put("/api/v1/product/update-product/".concat(V),t);case 13:s=e.sent,null!==(c=null===s||void 0===s?void 0:s.data)&&void 0!==c&&c.success&&(i.ZP.success(null===c||void 0===c?void 0:c.message,{style:{backgroundColor:"#51B749",fontWeight:"600",color:"#fff"}}),n("/dashboard/admin/products")),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(1),console.log("Error***",e.t0),i.ZP.error(null===e.t0||void 0===e.t0||null===(o=e.t0.response)||void 0===o||null===(l=o.data)||void 0===l?void 0:l.message,{style:{backgroundColor:"#BD282B",fontWeight:"600",color:"#fff"}});case 22:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(n){return e.apply(this,arguments)}}(),re=function(){var e=(0,t.Z)((0,r.Z)().mark((function e(a){var t,s,c,o,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),e.prev=1,t=window.prompt("Are you sure? You want to permanently delete this product"),console.log(t),t){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,d.Z.delete("/api/v1/product/delete-product/".concat(V));case 8:s=e.sent,null!==(c=null===s||void 0===s?void 0:s.data)&&void 0!==c&&c.success&&(i.ZP.success(null===c||void 0===c?void 0:c.message,{style:{backgroundColor:"#51B749",fontWeight:"600",color:"#fff"}}),n("/dashboard/admin/products")),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),console.log("Delete Error",e.t0),i.ZP.error(null===e.t0||void 0===e.t0||null===(o=e.t0.response)||void 0===o||null===(l=o.data)||void 0===l?void 0:l.message,{style:{backgroundColor:"#BD282B",fontWeight:"600",color:"#fff"}});case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(n){return e.apply(this,arguments)}}();return(0,p.jsx)(o.Z,{title:"Dashborad | Create Product",children:(0,p.jsx)("div",{className:"container-fluid m-3 p-3",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-md-3",children:(0,p.jsx)(l.Z,{})}),(0,p.jsxs)("div",{className:"col-md-9",children:[(0,p.jsx)("h1",{children:"Update Product"}),(0,p.jsxs)("div",{className:"m-1 w-75",children:[(0,p.jsx)(u.Z,{bordered:!1,placeholder:"Select a Category",size:"large",showSearch:!0,className:"form-select mb-3",value:L,onChange:function(e){return U(e)},children:x&&x.map((function(e){return(0,p.jsx)(h,{value:e._id,children:e.name},e._id)}))}),(0,p.jsx)("div",{className:"mb-3",children:(0,p.jsxs)("label",{className:"btn btn-outline-secondary col-md-12 fs-5",children:[X?X.name:"Upload Image",(0,p.jsx)("input",{type:"file",name:"image",accept:"image/*",onChange:function(e){return J(e.target.files[0])},hidden:!0})]})}),(0,p.jsx)("div",{className:"mb-3",children:X?(0,p.jsx)("div",{className:"text-center",children:(0,p.jsx)("img",{src:URL.createObjectURL(X),alt:"product-img",height:"200px",className:"img img-responsive"})}):(0,p.jsx)("div",{className:"text-center",children:(0,p.jsx)("img",{src:"/api/v1/product/product-image/".concat(V),alt:"product-img",height:"200px",className:"img img-responsive"})})}),(0,p.jsx)("div",{className:"mb-3",children:(0,p.jsx)("input",{type:"text",name:b,value:b,placeholder:"Enter Product Name",className:"form-control",onChange:function(e){return N(e.target.value)}})}),(0,p.jsx)("div",{className:"mb-3",children:(0,p.jsx)("textarea",{rows:"3",name:w,value:w,placeholder:"Write a Description...",className:"form-control",onChange:function(e){return k(e.target.value)}})}),(0,p.jsx)("div",{className:"mb-3",children:(0,p.jsx)("input",{type:"number",name:P,value:P,placeholder:"Enter Product Price",className:"form-control",onChange:function(e){return O(e.target.value)}})}),(0,p.jsx)("div",{className:"mb-3",children:(0,p.jsx)("input",{type:"number",name:A,value:A,placeholder:"Stocks Present",className:"form-control",onChange:function(e){return B(e.target.value)}})}),(0,p.jsx)("div",{className:"mb-3",children:(0,p.jsx)("input",{type:"text",name:_,value:_,placeholder:"Enter Product Brand",className:"form-control",onChange:function(e){return z(e.target.value)}})}),(0,p.jsx)("div",{className:"mb-3",children:(0,p.jsxs)(u.Z,{bordered:!1,placeholder:"Select Shipping ",size:"large",showSearch:!0,className:"form-select mb-3",onChange:function(e){I("1"===e)},value:H?"1":"0",children:[(0,p.jsx)(h,{value:"0",children:"No"}),(0,p.jsx)(h,{value:"1",children:"Yes"})]})}),(0,p.jsxs)("div",{className:"mb-3",children:[(0,p.jsx)("button",{className:"btn btn-outline-primary ms-2",onClick:ae,children:"UPDATE PRODUCT"}),(0,p.jsx)("button",{className:"btn btn-outline-danger ms-4",onClick:re,children:"DELETE PRODUCT"})]})]})]})]})})})}}}]);
//# sourceMappingURL=909.d5564786.chunk.js.map