(this["webpackJsonpprojectx-web"]=this["webpackJsonpprojectx-web"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),s=n(6),r=n.n(s),a=(n(16),n.p,n(17),n(4)),i=n(2),l=n(3);function d(e,t,n,c){var o;c&&(o=JSON.stringify(c));var s=localStorage.getItem("token");console.log("Token Passing ",s);var r=new XMLHttpRequest,a="https://projectxweb1.herokuapp.com/api".concat(t);console.log(a,"URL"),r.responseType="json";var i=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var o=n[c].trim();if(o.substring(0,e.length+1)===e+"="){t=decodeURIComponent(o.substring(e.length+1));break}}return t}("csrftoken");r.open(e,a),r.setRequestHeader("Content-Type","application/json"),s&&r.setRequestHeader("Authorization","Token ".concat(s)),i&&(r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.setRequestHeader("X-CSRFToken",i)),r.onload=function(){if(403===r.status){var e=r.response.detail;console.log(e),"Authentication credentials were not provided."===e&&-1===window.location.href.indexOf("login")&&(window.location.href="/login/")}n(r.response,r.status)},r.onerror=function(e){console.log("error",e),n({message:"The request was an error"},400)},r.send(o)}function j(e,t){var n;e&&(n=JSON.stringify(e));var c=new XMLHttpRequest;c.responseType="json";var o=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var o=n[c].trim();if(o.substring(0,e.length+1)===e+"="){t=decodeURIComponent(o.substring(e.length+1));break}}return t}("csrftoken");c.open("POST","https://projectxweb1.herokuapp.com/auth/"),c.setRequestHeader("Content-Type","application/json"),o&&(c.setRequestHeader("X-Requested-With","XMLHttpRequest"),c.setRequestHeader("X-CSRFToken",o)),c.onload=function(){if(403===c.status){var e=c.response.detail;console.log(e)}t(c.response,c.status)},c.onerror=function(e){console.log("error",e),t({message:"The request was an error"},400)},c.send(n)}function b(e,t,n){d("POST","/books/cart/",n,{action:t,id:e})}function u(e){d("GET","/books/cart/",e)}var O=n(0);function h(e){var t=e.book,n=e.index,o=e.isDetail,s=e.inCart,r=e.onRemove,a=e.orderid,j=e.checkout,u=Object(i.f)(),h=Object(c.useState)(e.buttonname?e.buttonname:null),x=Object(l.a)(h,2),m=x[0],v=x[1];console.log("actionname ",m);var f=Object(c.useState)(e.className?e.className:null),p=Object(l.a)(f,2),g=p[0],k=p[1];console.log(g," ClassName");var y=function(e,t){console.log("Add To Cart ",e,t),404===t&&"Book Not Available"===e.detail&&alert("Book Not Available"),400===t&&"Buy"===m&&u("/cart"),201===t&&("Add To Cart"===m&&(v("Remove"),k("btn btn-danger")),"Buy"===m?u("/cart"):"Remove"===m&&(!0===s||!0===j?(console.log("Remove"),r(n)):(v("Add To Cart"),k("btn btn-primary"))))},S=function(e,t){console.log(e,t),"Book Not Delivered"===e.detail?alert("Book Not Delivered"):(k("btn btn-secondary disabled"),v("Book Processing for Return"))};return Object(O.jsx)("button",{className:g,onClick:function(e){var n=m;e.preventDefault(),e.stopPropagation(),"Add To Cart"===m?(n="Add",b(t.id,n,y)):"Remove"===m?(n="Remove",b(t.id,n,y)):"Buy"===m?o?(n="Add",b(t.id,n,y)):window.location.href="".concat(t.name,"/detail/"):"Buy All"===m?window.location.href="/checkout/":"Return Book"===m&&(!function(e,t){var n={action:"Return",detail:[{orderid:e}]};console.log(n,"Data"),d("POST","/books/owned/",t,n)}(a,S),console.log(a,"order ID OnClick"))},children:m})}function x(e){var t=e.book,n=e.index,o=(e.className,e.isDetail,e.inCart),s=e.onRemove,r=e.owned,a=e.expiry,d=e.orderid,j=e.ordered,b=e.deliveryDate,u=e.delivered,x=e.checkout,m=Object(c.useState)(!1===u?"btn btn-danger disabled":r?a?"btn btn-secondary disabled":"btn btn-danger":j?"btn btn-danger disabled":"btn btn-primary"),v=Object(l.a)(m,2),f=v[0],p=v[1],g=Object(c.useState)(!1===u?"Book Not Delivered Yet":r?a?"Book Processing for Return":"Return Book":j?"Estimated Delivery Date : ".concat(b):"Add To Cart"),k=Object(l.a)(g,2),y=k[0],S=k[1],w=Object(c.useState)(!0),R=Object(l.a)(w,2),C=R[0],B=R[1];Object(c.useEffect)((function(){1==t.does_exists_in_cart&&(p("btn btn-danger"),S("Remove")),B(!1)}),[]);var E=Object(i.f)();return console.log(t.photo,"Books"),!0===C?"Loading":Object(O.jsxs)("div",{class:"product bookContainer",onClick:function(){E("/".concat(t.name,"/detail/"))},children:[Object(O.jsxs)("div",{class:"product-header",children:[Object(O.jsx)("img",{src:t.photo,alt:""}),Object(O.jsx)("ul",{class:"icons"})]}),Object(O.jsxs)("div",{class:"product-footer",children:[Object(O.jsx)("h3",{children:t.name}),Object(O.jsxs)("div",{class:"rating",children:[Object(O.jsx)("i",{class:"bx bxs-star"}),Object(O.jsx)("i",{class:"bx bxs-star"}),Object(O.jsx)("i",{class:"bx bxs-star"}),Object(O.jsx)("i",{class:"bx bxs-star"}),Object(O.jsx)("i",{class:"bx bx-star"})]}),Object(O.jsxs)("h4",{class:"price",children:["Rs ",t.price]}),Object(O.jsx)(h,{buttonname:y,className:f,checkout:x,book:t,inCart:o,onRemove:function(e){s(e)},index:n,orderid:d})]})]})}function m(e,t){t?d("POST","/profile/",e,t):d("GET","/profile/",e)}function v(e){var t=Object(c.useState)(),n=Object(l.a)(t,2),o=n[0],s=n[1],r=Object(c.useState)(),a=Object(l.a)(r,2),i=a[0],d=a[1],j=Object(c.useState)(!0),b=Object(l.a)(j,2),u=b[0],h=b[1],x={address:o,mobilenumber:i},v=function(e,t){console.log("Profile ",e,t),200===t?(s(e.address),d(e.mobilenumber),h(!1)):alert("Profile Error")};Object(c.useEffect)((function(){m(v),x={address:o,mobilenumber:i}}),[]);var f=function(e){var t=e.target.name;"address"===t?(s(e.target.value),e.target.className="form-control"):"mobilenumber"===t&&(d(e.target.value),e.target.className="form-control")};return!0===u?"Loading":Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Profile"}),Object(O.jsx)("label",{for:"address",children:"Address"}),Object(O.jsx)("input",{type:"text",class:"form-control text-muted",id:"address",value:o,onChange:f,name:"address"}),Object(O.jsx)("label",{for:"mobilenumber",children:"Mobile Number"}),Object(O.jsx)("input",{type:"number",class:"form-control text-muted",id:"mobilenumber",value:i,onChange:f,name:"mobilenumber"}),Object(O.jsx)("button",{className:"btn btn-secondary",onClick:function(){m(v,x)},children:"Save"})]})}function f(e){var t=e.book,n=Object(c.useState)(t.does_exists_in_cart?"Remove":"Add To Cart"),o=Object(l.a)(n,2),s=o[0],r=(o[1],Object(c.useState)(t.does_exists_in_cart?"btn btn-danger":"btn btn-primary")),a=Object(l.a)(r,2),i=a[0];a[1];return Object(O.jsx)("section",{class:"section product-detail",children:Object(O.jsxs)("div",{class:"details container-md",children:[Object(O.jsxs)("div",{class:"left",children:[Object(O.jsx)("div",{class:"main",children:Object(O.jsx)("img",{src:t.photo,alt:""})}),Object(O.jsxs)("div",{class:"thumbnails",children:[Object(O.jsx)("div",{class:"thumbnail",children:Object(O.jsx)("img",{src:t.photo,alt:""})}),Object(O.jsx)("div",{class:"thumbnail",children:Object(O.jsx)("img",{src:t.photo,alt:""})}),Object(O.jsx)("div",{class:"thumbnail",children:Object(O.jsx)("img",{src:t.photo,alt:""})}),Object(O.jsx)("div",{class:"thumbnail",children:Object(O.jsx)("img",{src:t.photo,alt:""})})]})]}),Object(O.jsxs)("div",{class:"right",children:[Object(O.jsx)("h1",{children:t.name}),Object(O.jsxs)("div",{class:"price",children:["Rs ",t.price]}),Object(O.jsxs)("h3",{children:["Book Category: ",t.type]}),Object(O.jsx)("p",{children:" Book Description "}),Object(O.jsx)(h,{buttonname:"Buy",className:"btn btn-primary",book:t,isDetail:!0}),Object(O.jsx)(h,{buttonname:s,className:i,book:t})]})]})})}function p(e){var t=e.book,n=e.index,c=e.onRemove;return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsxs)("div",{class:"cart-info",children:[Object(O.jsx)("img",{src:t.photo,alt:""}),Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:t.name}),Object(O.jsxs)("span",{children:["Price: Rs ",t.price]}),Object(O.jsx)("br",{}),Object(O.jsx)(h,{buttonname:"Remove",className:"btn btn-danger",book:t,inCart:!0,onRemove:function(){c(n)}})]})]})}),Object(O.jsx)("td",{children:Object(O.jsx)("input",{type:"number",value:"1",min:"1"})}),Object(O.jsxs)("td",{children:["Rs ",t.price]})]})}function g(e){var t=Object(c.useState)([]),n=Object(l.a)(t,2),o=n[0],s=n[1],r=Object(c.useState)(!0),a=Object(l.a)(r,2),i=a[0],j=a[1],b=function(e,t){console.log("response",e,t),s(e),j(!1)};return Object(c.useEffect)((function(){d("GET","/books/",b)}),[]),console.log("Books ",o),!0===i?"Loading":Object(O.jsxs)("section",{class:"section all-products",id:"products",children:[Object(O.jsxs)("div",{class:"top container",children:[Object(O.jsx)("h1",{children:"All Products"}),Object(O.jsxs)("form",{children:[Object(O.jsxs)("select",{children:[Object(O.jsx)("option",{value:"1",children:"Defualt Sorting"}),Object(O.jsx)("option",{value:"2",children:"Sort By Price"}),Object(O.jsx)("option",{value:"3",children:"Sort By Popularity"}),Object(O.jsx)("option",{value:"4",children:"Sort By Sale"}),Object(O.jsx)("option",{value:"5",children:"Sort By Rating"})]}),Object(O.jsx)("span",{children:Object(O.jsx)("i",{class:"bx bx-chevron-down"})})]})]}),Object(O.jsx)("div",{class:"product-center container",children:o.map((function(e,t){return Object(O.jsx)(x,{book:e},t)}))})]})}function k(e){var t=Object(c.useState)(null),n=Object(l.a)(t,2),o=n[0],s=n[1],r=Object(c.useState)(!0),a=Object(l.a)(r,2),j=a[0],b=a[1],u=Object(i.g)().bookname,h=function(e,t){console.log("Book Detail Lookup",e,t),s(e[0]),b(!1)};return Object(c.useEffect)((function(){!function(e,t){d("GET","/books/".concat(e,"/"),t)}(u,h)}),[]),!0===j?"Loading":Object(O.jsx)(f,{book:o})}function y(e){var t=Object(c.useState)([]),n=Object(l.a)(t,2),o=n[0],s=n[1],r=Object(c.useState)(!0),i=Object(l.a)(r,2),d=i[0],j=i[1],b=0;Object(c.useEffect)((function(){u(h)}),[]);var h=function(e,t){console.log("Cart Lookup ",e.usercart_set,t),s(e.usercart_set),j(!1)},x=function(e){s(o.filter((function(t){return o.indexOf(t)!==e})))},m=o.map((function(e,t){return console.log(e.book.price),b+=e.book.price,e.book.id}));return d?"":0===m.length?Object(O.jsx)("div",{className:"text-muted",children:"Cart Is Empty"}):Object(O.jsxs)("div",{class:"container-md cart",children:[Object(O.jsxs)("table",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Product"}),Object(O.jsx)("th",{children:"Quantity"}),Object(O.jsx)("th",{children:"Subtotal"})]}),o.map((function(e,t){return Object(O.jsx)(p,{book:e.book,index:t,inCart:!0,onRemove:x},t)}))]}),Object(O.jsxs)("div",{class:"total-price",children:[Object(O.jsx)("table",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"Total"}),Object(O.jsxs)("td",{children:["Rs ",b]})]})}),Object(O.jsx)(a.b,{to:"/checkout/",class:"checkout btn",children:"Proceed To Checkout"})]})]})}function S(e){var t=Object(c.useState)([]),n=Object(l.a)(t,2),o=n[0],s=n[1],r=Object(c.useState)(!0),a=Object(l.a)(r,2),i=a[0],j=a[1];Object(c.useEffect)((function(){d("GET","/books/owned/",b)}),[]);var b=function(e,t){500===t||(s(e),console.log(e,"Response")),j(!1)};return i?"Loading":0===o.length?"No Orders":Object(O.jsxs)("div",{className:"product-center container",children:[" ",o.map((function(e,t){return Object(O.jsxs)("div",{className:"border border-secondary mt-3",children:[Object(O.jsx)(x,{book:e.book,owned:!0,expiry:e.expiry,orderid:e.orderid,delivered:e.delivered},t),Object(O.jsxs)("div",{children:["Order Id : ",e.orderid]}),Object(O.jsxs)("div",{children:["Order Duration :",e.duration]}),Object(O.jsxs)("div",{children:["OwnerFrom : ",e.ownerfrom]}),Object(O.jsxs)("div",{children:["Book Expiry : ",e.expiry]}),Object(O.jsxs)("div",{children:["Book Return Amount : ",e.returnamount]}),Object(O.jsxs)("div",{children:["Book Return Date : ",e.returndate]})]})}))]})}function w(e){var t=Object(c.useState)([]),n=Object(l.a)(t,2),o=n[0],s=n[1],r=Object(c.useState)(!0),a=Object(l.a)(r,2),i=a[0],j=a[1],b=function(e,t){500===t||s(e),j(!1)};return Object(c.useEffect)((function(){d("GET","/books/ordered/",b)}),[]),i?"Loading":0===o.length?"No Orders":Object(O.jsx)("div",{className:"product-center container",children:o.map((function(e,t){return Object(O.jsxs)("div",{className:"border border-secondary",children:[Object(O.jsxs)("div",{children:["Order ID : ",e.id]}),Object(O.jsx)(x,{book:e.book,ordered:!0,deliveryDate:e.deliveryDate},t),Object(O.jsxs)("div",{children:["Delivery Date : ",e.deliveryDate," "]})]})}))})}function R(e){var t=Object(c.useState)("Are You Sure You Want to Logout ? "),n=Object(l.a)(t,2),o=n[0],s=n[1],r=Object(c.useState)(!0),a=Object(l.a)(r,2),i=a[0],d=a[1];return Object(c.useEffect)((function(){var e=localStorage.getItem("token");e?(d(!0),console.log(e,"TOKEN")):d(!1)}),[]),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:o}),!0===i&&Object(O.jsx)("button",{onClick:function(){localStorage.setItem("token",""),s("Log Out Successfull"),window.location.href="/",d(!1)},className:"btn btn-danger",children:"Logout"})]})}function C(e){var t=Object(c.useState)([]),n=Object(l.a)(t,2),o=n[0],s=n[1],r=Object(c.useState)(!0),a=Object(l.a)(r,2),i=a[0],j=a[1],b=0,h=function(e,t){201===t?s(e.usercart_set):alert("CheckOut Component Error "),j(!1)},m=function(e){s(o.filter((function(t){return o.indexOf(t)!==e})))};Object(c.useEffect)((function(){u(h)}),[]);var f=function(e,t){console.log("Cart Buy All ",e,t),201===t?window.location.href="/orders/":406===t?alert("Profile Not Completed"):alert("Checkout Cart Buy Error ")},p=o.map((function(e,t){return b+=e.book.price,e.book.id}));return!0===i?"Loading":Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"text-warning",children:"Note: Profile Should Be Completed Before Ordering"}),Object(O.jsx)(v,{}),Object(O.jsx)("div",{className:"product-center container",children:o.map((function(e,t){return Object(O.jsx)(x,{book:e.book,index:t,checkout:!0,onRemove:m},t)}))}),Object(O.jsxs)("div",{children:["Total Cost : ",b]}),Object(O.jsx)("button",{className:"btn btn-secondary",onClick:function(){!function(e,t){var n=[];e.forEach((function(e){n.push({id:e})})),console.log(n," BooksArray"),d("POST","/books/cart/",t,{action:"Buy",detail:n})}(p,f)},children:"Place Order"})]})}function B(){var e=Object(i.g)().query;console.log(e," Query");var t=Object(c.useState)([]),n=Object(l.a)(t,2),o=n[0],s=n[1],r=Object(c.useState)(!0),a=Object(l.a)(r,2),j=a[0],b=a[1],u=function(e,t){console.log(e,t),404===t||s(e),b(!1)};return console.log("search results ",o),Object(c.useEffect)((function(){!function(e,t){d("GET","/books/?query=".concat(e),t)}(e,u)}),[e]),!0===j?"Loading":0!==o.length?Object(O.jsx)("div",{class:"product-center container",children:o.map((function(e,t){return Object(O.jsx)(x,{book:e},t)}))}):"Not Found"}function E(e,t){var n;e&&(n=JSON.stringify(e));var c=new XMLHttpRequest;c.responseType="json";var o=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var o=n[c].trim();if(o.substring(0,e.length+1)===e+"="){t=decodeURIComponent(o.substring(e.length+1));break}}return t}("csrftoken");c.open("POST","https://projectxweb1.herokuapp.com/api/books/users"),c.setRequestHeader("Content-Type","application/json"),o&&(c.setRequestHeader("X-Requested-With","XMLHttpRequest"),c.setRequestHeader("X-CSRFToken",o)),c.onload=function(){if(403===c.status){var e=c.response.detail;console.log(e)}t(c.response,c.status)},c.onerror=function(e){console.log("error",e),t({message:"The request was an error"},400)},c.send(n)}function L(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),o=n[0],s=n[1],r=Object(c.useState)(""),a=Object(l.a)(r,2),i=a[0],d=a[1],b={username:o,password:i},u=function(e,t){400===t?alert("Wrong Credentials"):200===t&&(console.log(e.token,t),localStorage.setItem("token","".concat(e.token)),window.location.href="/")},h=function(e,t){console.log("Register ",e,t),200===t&&j(b,u),"A user with that username already exists."===e.username[0]&&alert("User Already Exists")},x=function(e){"username"===e.target.name?s(e.target.value):d(e.target.value)};return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Login Here "}),Object(O.jsxs)("div",{children:["For sample login use credentials",Object(O.jsx)("br",{}),"Username: dhruvilmehta Password: 1234",Object(O.jsx)("br",{}),"OR ",Object(O.jsx)("br",{}),"You can enter your credentials and click on Register"]}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{for:"exampleInputEmail1",children:"Username"}),Object(O.jsx)("input",{type:"text",class:"form-control ",placeholder:"Username",name:"username",value:b.username,onChange:x}),Object(O.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(O.jsx)("input",{type:"password",class:"form-control ",placeholder:"Password",name:"password",value:b.password,onChange:x}),Object(O.jsx)("button",{onClick:function(e){j(b,u)},className:"btn btn-primary",children:"Login"}),Object(O.jsx)("button",{onClick:function(e){E(b,h)},className:"btn btn-secondary",children:"Register"})]})}function T(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),o=(n[0],n[1]);return Object(O.jsx)(L,{userLogin:function(e){console.log(e),o(e)}})}var N=n(11),q=n(7);function P(){var e=Object(i.f)();return Object(O.jsx)("div",{children:Object(O.jsxs)("ul",{class:"nav-list",children:[Object(O.jsx)("li",{class:"nav-item",children:Object(O.jsx)("input",{id:"searchinput",class:"form-control fs-2 p-0",type:"search",placeholder:"Search","aria-label":"Search"})}),Object(O.jsx)("li",{class:"nav-item",children:Object(O.jsx)("button",{id:"searchbutton",class:"btn btn-outline-success m-1",type:"submit",onClick:function(t){var n=document.getElementById("searchinput");console.log(n.value),e("/search/query=".concat(n.value))},children:"Search"})}),Object(O.jsx)("li",{class:"nav-item",children:Object(O.jsx)(a.b,{to:"/",class:"nav-link",children:"Home"})}),Object(O.jsx)("li",{class:"nav-item",children:Object(O.jsx)(a.b,{to:"/orders",class:"nav-link",children:"Your Orders"})}),Object(O.jsx)("li",{class:"nav-item",children:Object(O.jsx)(a.b,{to:"/profile",class:"nav-link",children:"Your Profile"})}),Object(O.jsx)("li",{class:"nav-item",children:Object(O.jsx)(a.b,{to:"/ownedBooks",class:"nav-link",children:"Owned Books"})}),Object(O.jsx)("li",{class:"nav-item",children:Object(O.jsx)(a.b,{to:"/cart",class:"nav-link",children:"Cart"})}),Object(O.jsx)("li",{class:"nav-item",children:Object(O.jsx)(a.b,{to:"/logout",class:"nav-link",children:"Logout"})})]})})}function I(){var e=Object(i.f)();return Object(O.jsxs)("ul",{class:"nav-list",children:[Object(O.jsx)("li",{class:"nav-item",children:Object(O.jsx)("input",{id:"searchinput",class:"form-control fs-2 p-0",type:"search",placeholder:"Search","aria-label":"Search"})}),Object(O.jsx)("li",{class:"nav-item",children:Object(O.jsx)("button",{id:"searchbutton",class:"btn btn-outline-success m-1",type:"submit",onClick:function(t){var n=document.getElementById("searchinput");console.log(n.value),e("/search/query=".concat(n.value))},children:"Search"})}),Object(O.jsx)("li",{class:"nav-item",children:Object(O.jsx)(a.b,{to:"/login",class:"nav-link",children:"Login"})}),Object(O.jsx)("li",{class:"nav-item",children:Object(O.jsx)(a.b,{to:"#about",class:"nav-link",children:"About"})}),Object(O.jsx)("li",{class:"nav-item",children:Object(O.jsx)(a.b,{to:"#contact",class:"nav-link",children:"Contact"})})]})}var D=function(){var e=Object(c.useState)(localStorage.getItem("token")),t=Object(l.a)(e,2),n=t[0];return t[1],Object(c.useEffect)((function(){var e=document.querySelector(".menu"),t=document.querySelector(".hamburger"),n=document.querySelector(".close");console.log("Navbar JS");var c=e.getBoundingClientRect().left;t.addEventListener("click",(function(){c<0&&(e.classList.add("show"),document.body.classList.add("show"),o.classList.add("show"))})),n.addEventListener("click",(function(){c<0&&(e.classList.remove("show"),document.body.classList.remove("show"),o.classList.remove("show"))}));var o=document.querySelector(".nav"),s=o.getBoundingClientRect().height;window.addEventListener("scroll",(function(){window.pageYOffset>s?o.classList.add("fix-nav"):o.classList.remove("fix-nav")})),Object(N.a)(document.querySelectorAll(".scroll-link")).map((function(t){t&&t.addEventListener("click",(function(t){t.preventDefault();var n=t.target.getAttribute("href").slice(1),c=document.getElementById(n),r=(o.classList.contains("fix-nav"),c.offsetTop-s);window.scrollTo({top:r,left:0}),o.classList.remove("show"),e.classList.remove("show"),document.body.classList.remove("show")}))})),q.a.from(".logo",{opacity:0,duration:1,delay:.5,y:-10}),q.a.from(".hamburger",{opacity:0,duration:1,delay:1,x:20}),q.a.from(".hero-img",{opacity:0,duration:1,delay:1.5,x:-200}),q.a.from(".hero-content h2",{opacity:0,duration:1,delay:2,y:-50}),q.a.from(".hero-content h1",{opacity:0,duration:1,delay:2.5,y:-45}),q.a.from(".hero-content a",{opacity:0,duration:1,delay:3.5,y:50});document.querySelector(".nav-list")}),[]),n?Object(O.jsx)("nav",{class:"nav",children:Object(O.jsxs)("div",{class:"navigation container",children:[Object(O.jsx)("div",{class:"logo",children:Object(O.jsx)("h1",{children:"ProjectX"})}),Object(O.jsxs)("div",{class:"menu",children:[Object(O.jsxs)("div",{class:"top-nav",children:[Object(O.jsx)("div",{class:"logo",children:Object(O.jsx)("h1",{children:"ProjectX"})}),Object(O.jsx)("div",{class:"close",children:Object(O.jsx)("i",{class:"bx bx-x"})})]}),Object(O.jsx)(P,{})]}),Object(O.jsx)("div",{class:"hamburger",children:Object(O.jsx)("i",{class:"bx bx-menu"})})]})}):Object(O.jsx)("nav",{class:"nav",children:Object(O.jsxs)("div",{class:"navigation container",children:[Object(O.jsx)("div",{class:"logo",children:Object(O.jsx)("h1",{children:"ProjectX"})}),Object(O.jsxs)("div",{class:"menu",children:[Object(O.jsxs)("div",{class:"top-nav",children:[Object(O.jsx)("div",{class:"logo",children:Object(O.jsx)("h1",{children:"ProjectX"})}),Object(O.jsx)("div",{class:"close",children:Object(O.jsx)("i",{class:"bx bx-x"})})]}),Object(O.jsx)(I,{})]}),Object(O.jsx)("div",{class:"hamburger",children:Object(O.jsx)("i",{class:"bx bx-menu"})})]})})};var A=function(){return Object(O.jsxs)(a.a,{children:[Object(O.jsx)(D,{}),Object(O.jsxs)(i.c,{children:[Object(O.jsx)(i.a,{path:"/",element:Object(O.jsx)(g,{})}),Object(O.jsx)(i.a,{path:"/cart",element:Object(O.jsx)(y,{})}),Object(O.jsx)(i.a,{exact:!0,path:"/orders",element:Object(O.jsx)(w,{})}),Object(O.jsx)(i.a,{exact:!0,path:"/ownedBooks",element:Object(O.jsx)(S,{})}),Object(O.jsx)(i.a,{exact:!0,path:"/login",element:Object(O.jsx)(T,{})}),Object(O.jsx)(i.a,{exact:!0,path:"/logout",element:Object(O.jsx)(R,{})}),Object(O.jsx)(i.a,{exact:!0,path:"/profile",element:Object(O.jsx)(v,{})}),Object(O.jsx)(i.a,{exact:!0,path:"/checkout",element:Object(O.jsx)(C,{})}),Object(O.jsx)(i.a,{path:"/search/query=:query",element:Object(O.jsx)(B,{})}),Object(O.jsx)(i.a,{path:"/:bookname/detail",element:Object(O.jsx)(k,{})})]})]})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),s(e),r(e)}))},X=document.getElementById("root");X&&r.a.render(Object(O.jsx)(A,{}),X);var _=o.a.createElement,F=document.getElementById("books");F&&r.a.render(_(g,F.dataset),F);var U=document.getElementById("bookdetail");U&&r.a.render(_(k,U.dataset),U);var G=document.getElementById("usercart");G&&r.a.render(_(y,G.dataset),G);var M=document.getElementById("ownedBooks");M&&r.a.render(_(S,M.dataset),M);var Y=document.getElementById("orderedBooks");Y&&r.a.render(_(w,Y.dataset),Y);var J=document.getElementById("login");J&&r.a.render(_(T,J.dataset),J);var W=document.getElementById("logout");W&&r.a.render(_(R,W.dataset),W);var Q=document.getElementById("profile");Q&&r.a.render(_(v,Q.dataset),Q);var z=document.getElementById("checkout");z&&r.a.render(_(C,z.dataset),z);var K=document.getElementById("search");K&&r.a.render(_(B,K.dataset),K),H()}},[[19,1,2]]]);
//# sourceMappingURL=main.0134298c.chunk.js.map