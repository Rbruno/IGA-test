(this["webpackJsonpsyntesy-digital-test"]=this["webpackJsonpsyntesy-digital-test"]||[]).push([[0],{44:function(e,t,a){},45:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(0),r=a.n(c),n=a(16),i=a.n(n),l=(a(44),a(45),a(3)),o=a(38),j=a(12),d=a(22),b=a.n(d),u=a(35),h=a(23),O=a.n(h),m=a(11),p=a.n(m),x=function(e){var t=Object(j.c)((function(e){return e.GithubData})),a=t.data,c=t.repos;return Object(s.jsx)("div",{className:"container m-3",children:Object(s.jsx)("div",{className:"row justify-content-md-center",children:Object(s.jsx)("div",{className:"col-4",children:Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("h5",{className:"card-header",children:a.name}),Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("img",{src:a.avatar_url,className:"card-img-top",alt:"..."}),Object(s.jsx)("h5",{className:"card-title",children:a.login}),Object(s.jsx)("p",{className:"card-text",children:a.bio}),Object(s.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(s.jsxs)("li",{className:"list-group-item",children:["GITHUB: ",Object(s.jsx)("a",{href:"#",className:"stretched-link",children:a.url})]}),Object(s.jsxs)("li",{className:"list-group-item",children:["BLOG: ",Object(s.jsx)("a",{href:"#",className:"stretched-link",children:null!==a.blog?a.blog:"No posee"})]}),Object(s.jsxs)("li",{className:"list-group-item",children:["EMAIL: ",null!==a.email?a.email:"No posee"]})]}),Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("div",{className:"card-header",children:"REPOSITORIOS"}),Object(s.jsx)("ul",{className:"list-group list-group-flush",children:p.a.isEmpty(c)?Object(s.jsx)("li",{children:"NO POSEE REPOSITORIOS"}):c.map((function(e){return Object(s.jsxs)("li",{className:"list-group-item",children:[Object(s.jsx)("div",{children:Object(s.jsx)("a",{href:e.html_url,target:"_blank",rel:"noreferrer",children:e.name})}),Object(s.jsx)("p",{children:e.description})]},e.id)}))})]})]})]})})})})};var v=function(e){var t=Object(c.useState)(p.a.isEmpty(e)?"":e.location.pathname.substr(10)),a=Object(o.a)(t,2),r=a[0],n=a[1],i=Object(j.b)(),l=Object(j.c)((function(e){return e.GithubData}));Object(c.useEffect)((function(){p.a.isEmpty(e)||d()}),[r]);var d=function(){if(""===r)return alert("Por favor ingrese un nombre de usuario de Github");i(function(e){return function(){var t=Object(u.a)(b.a.mark((function t(a){var s,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"GITHUB_DATA_LOADING"}),t.next=4,O.a.get("https://api.github.com/users/".concat(e));case 4:return s=t.sent,t.next=7,O.a.get("https://api.github.com/users/".concat(e,"/repos"));case 7:c=t.sent,a({type:"GITHUB_DATA_SUCCESS",payload:s.data,repos:c.data}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:"GITHUB_DATA_FAIL"});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(r)),localStorage.setItem(Date.now(),r),h()},h=function(){return l.loading?Object(s.jsx)("div",{className:"spinner-border text-success",role:"status",children:Object(s.jsx)("span",{className:"visually-hidden",children:"Loading..."})}):""!==l.errorMsg?Object(s.jsx)("div",{className:"alert alert-danger mt-2",role:"alert",children:l.errorMsg}):p.a.isEmpty(l.data)?void 0:Object(s.jsx)(x,{})};return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{className:"row justify-content-md-center",children:Object(s.jsxs)("div",{className:"col-3",children:[Object(s.jsxs)("div",{className:"mb-3",children:[Object(s.jsx)("label",{className:"form-label center",children:"Buscar Githubs:"}),Object(s.jsx)("input",{type:"text",className:"form-control",placeholder:"defunkt",name:"username",value:r,onChange:function(e){n(e.target.value)}})]}),Object(s.jsx)("div",{className:"d-grid gap-2",children:Object(s.jsx)("button",{onClick:function(){return d(r)},type:"button",className:"btn btn-primary",children:"Buscar"})})]})}),Object(s.jsx)("div",{className:"row justify-content-md-center",children:h()})]})},g=a(10);var N=function(){var e=Object.entries(localStorage);return e.sort((function(e,t){return t[0]-e[0]})),Object(s.jsx)("div",{className:"container m-3",children:Object(s.jsx)("div",{className:"row justify-content-md-center",children:Object(s.jsxs)("div",{className:"col-4",children:[Object(s.jsx)("h1",{children:"Historia de busqueda"}),Object(s.jsx)("ul",{className:"list-group",children:p.a.isEmpty(e)?Object(s.jsx)("li",{className:"list-group-item list-group-item-action text-center",children:"NO POSEE HISTORIAL"},"0"):e.map((function(e){return Object(s.jsx)(g.b,{to:"/IGA-test/".concat(e[1]),className:"TextNoDecoration",children:Object(s.jsx)("li",{className:"list-group-item list-group-item-action text-center",children:e[1]},e[0])},e[0])}))})]})})})};var f=function(){return Object(s.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(s.jsxs)("div",{className:"container-fluid",children:[Object(s.jsx)("span",{className:"navbar-brand",children:"Github-Test"}),Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown",children:Object(s.jsxs)("ul",{className:"navbar-nav",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(g.b,{to:"/IGA-test/",children:"Inicio"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(g.b,{to:"/IGA-test/user/historial",children:"Historial"})})]})})]})})};var y=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(f,{}),Object(s.jsxs)(l.d,{children:[Object(s.jsx)(l.b,{path:"/IGA-test/user/historial",children:Object(s.jsx)(N,{})}),Object(s.jsx)(l.b,{path:"/IGA-test/:github",component:v}),Object(s.jsx)(l.b,{path:"/IGA-test/",children:Object(s.jsx)(v,{})}),Object(s.jsx)(l.a,{to:"/IGA-test/"})]})]})},I=a(9),A=a(36),G=a(37),T=a(13),S={loading:!1,data:[],repos:[],errorMsg:""},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GITHUB_DATA_LOADING":return Object(T.a)(Object(T.a)({},e),{},{loading:!0,repos:[],errorMsg:""});case"GITHUB_DATA_SUCCESS":return Object(T.a)(Object(T.a)({},e),{},{loading:!1,data:t.payload,repos:t.repos,errorMsg:""});case"GITHUB_DATA_FAIL":return Object(T.a)(Object(T.a)({},e),{},{loading:!1,repos:[],errorMsg:"No se encontraron resultados"});default:return e}},E=Object(I.combineReducers)({GithubData:D}),_=Object(I.createStore)(E,Object(A.composeWithDevTools)(Object(I.applyMiddleware)(G.a)));i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(g.a,{children:Object(s.jsx)(j.a,{store:_,children:Object(s.jsx)(y,{})})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.5dce50b7.chunk.js.map