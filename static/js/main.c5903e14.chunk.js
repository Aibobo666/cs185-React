(this["webpackJsonpcs185-react"]=this["webpackJsonpcs185-react"]||[]).push([[0],{144:function(e,t,c){},145:function(e,t,c){},146:function(e,t,c){"use strict";c.r(t);var n,i,s,l=c(2),a=c.n(l),o=c(43),r=c.n(o),d=(c(53),c(19)),j=c(20),m=c(14),b=j.a.nav(n||(n=Object(d.a)(["\n  background: #000;\n  height: 80px;\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem calc((100vw - 1000px) / 2);\n  z-index: 10;\n"]))),h=Object(j.a)(m.b)(i||(i=Object(d.a)(["\n  color: #fff;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 1rem;\n  height: 100%;\n  cursor: pointer;\n\n  &.active {\n    color: #15cdfc;\n  }\n"]))),u=j.a.div(s||(s=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: -24px;\n  margin-right: 24px;\n\n"]))),O=c(0),x=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(b,{children:Object(O.jsxs)(u,{children:[Object(O.jsx)(h,{to:"/Text",activeStyle:!0,children:"Text"}),Object(O.jsx)(h,{to:"/Image",activeStyle:!0,children:"Image"}),Object(O.jsx)(h,{to:"/Video",activeStyle:!0,children:"Video"}),Object(O.jsx)(h,{to:"Table",activeStyle:!0,children:"Table"}),Object(O.jsx)(h,{to:"/Email",activeStyle:!0,children:"Email"})]})})})},g=c(3),p=function(){return Object(O.jsxs)("div",{children:[Object(O.jsxs)("form",{children:[Object(O.jsx)("label",{htmlFor:"fname",children:"First name: "}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",id:"fname",name:"fname"}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{htmlFor:"lname",children:"Last name: "}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",id:"lname",name:"lname"}),Object(O.jsx)("br",{})]}),Object(O.jsx)("h3",{children:"Favorit Movie"}),Object(O.jsxs)("form",{children:[Object(O.jsx)("input",{type:"radio",id:"avengers",name:"movie",defaultValue:"avengers"}),Object(O.jsx)("label",{htmlFor:"avengers",children:"Avengers"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"radio",id:"darkNight",name:"movie",defaultValue:"darkNight"}),Object(O.jsx)("label",{htmlFor:"darkNight",children:"Dark Night"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"radio",id:"Tenet",name:"movie",defaultValue:"Tenet"}),Object(O.jsx)("label",{htmlFor:"darkNight",children:"Tenet"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"submit",defaultValue:"Done"})]})]})},v=(c(65),function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:"Projects"}),Object(O.jsx)("table",{children:Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Name"}),Object(O.jsx)("th",{children:"Details"}),Object(O.jsx)("th",{children:"Year"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsxs)("td",{children:[" ",Object(O.jsx)("a",{href:"https://github.com/ucsb-cs48-w20/gauchoshare",children:"Gauchoshare"})," "]}),Object(O.jsx)("td",{children:"This project is about designing a platform for students to sell or buy used items around the campus"}),Object(O.jsx)("td",{children:"2019"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)("a",{href:"https://www.tensorflow.org/tutorials/images/classification",children:"Picture classify"})}),Object(O.jsx)("td",{children:"This project is about using machine learning tools to classify pictures"}),Object(O.jsx)("td",{children:"2020"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)("a",{href:"https://docs.google.com/document/d/1PZMaZ_mXKCcDQSpxNudYxnPqmu_KCJ50msjz3te9uUk/edit?usp=sharing",children:"User manual"})}),Object(O.jsx)("td",{children:"This is the user manual for the gauchoshare app"}),Object(O.jsx)("td",{children:"2019"})]})]})})]})}),f=c(48),y=c(47),k=c.n(y),C=function(){var e=Object(l.useState)(""),t=Object(f.a)(e,2),c=t[0],n=t[1];return Object(O.jsx)("div",{style:{margin:"auto",marginLeft:"300px"},children:Object(O.jsxs)("pre",{children:[Object(O.jsx)("h2",{children:"Please submit a valid emial address below:"}),Object(O.jsx)("input",{type:"text",id:"userEmail",name:"Email"}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{onClick:function(){return function(){var e=document.getElementById("userEmail");console.log(e.value),k.a.isEmail(e.value)?n("Email successfully recorded"):n("Invalid Email address")}()},children:"submit"}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{style:{fontWeight:"bold",color:"red"},children:c})]})})},E=c(15),N=c(16),F=c(18),T=c(17),I=(c(144),function(e){Object(F.a)(c,e);var t=Object(T.a)(c);function c(){return Object(E.a)(this,c),t.apply(this,arguments)}return Object(N.a)(c,[{key:"imgClickOn",value:function(e){document.getElementById("modal").classList.add("open"),document.getElementById("modal-img").src=e.target.src,document.getElementById("modal").addEventListener("click",(function(e){e.target.classList.contains("modal")&&document.getElementById("modal").classList.remove("open")}))}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.scrollFunction)}},{key:"scrollFunction",value:function(){var e=document.getElementById("myBtn");document.body.scrollTop>.25*document.body.scrollHeight||document.documentElement.scrollTop>.25*document.documentElement.scrollHeight?e.style.display="block":e.style.display="none"}},{key:"topFunction",value:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}},{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{id:"myBtn",title:"GO-top",onClick:this.topFunction,children:"TOP"}),Object(O.jsxs)("div",{className:"gallery",children:[Object(O.jsx)("div",{className:"img-container",children:Object(O.jsx)("img",{onClick:this.imgClickOn,src:"img/godFather.jpg",alt:"godFather"})}),Object(O.jsx)("div",{className:"img-container",children:Object(O.jsx)("img",{onClick:this.imgClickOn,src:"img/greenbook.jpg",alt:"greenbook"})}),Object(O.jsx)("div",{className:"img-container",children:Object(O.jsx)("img",{onClick:this.imgClickOn,src:"img/interstella.jpg",alt:"interstella"})}),Object(O.jsx)("div",{className:"img-container",children:Object(O.jsx)("img",{onClick:this.imgClickOn,src:"img/moonlight.jpg",alt:"moonlight"})}),Object(O.jsx)("div",{className:"img-container",children:Object(O.jsx)("img",{onClick:this.imgClickOn,src:"img/pulpFiction.jpg",alt:"pulpFiction"})}),Object(O.jsx)("div",{className:"img-container",children:Object(O.jsx)("img",{onClick:this.imgClickOn,src:"img/titanic.jpg",alt:"titanic"})})]}),Object(O.jsx)("div",{className:"modal",id:"modal",children:Object(O.jsx)("img",{src:"img/godFather.jpg",alt:"",className:"modal-img",id:"modal-img"})})]})}}]),c}(a.a.Component)),w=(c(145),function(e){Object(F.a)(c,e);var t=Object(T.a)(c);function c(){return Object(E.a)(this,c),t.apply(this,arguments)}return Object(N.a)(c,[{key:"VideoClickOn",value:function(e){document.getElementById("videoModal").classList.add("open"),document.getElementById("og-video").src=e.target.src,document.getElementById("videoModal").addEventListener("click",(function(e){e.target.classList.contains("modal_v")&&document.getElementById("videoModal").classList.remove("open")}))}},{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"video-gallery",children:[Object(O.jsx)("div",{className:"video-container",children:Object(O.jsx)("video",{className:"MP4",onClick:this.VideoClickOn,src:"video/beach.mp4"})}),Object(O.jsx)("div",{className:"video-container",children:Object(O.jsx)("video",{className:"MP4",onClick:this.VideoClickOn,src:"video/snow.mp4"})}),Object(O.jsx)("div",{className:"video-container",children:Object(O.jsx)("video",{className:"MP4",onClick:this.VideoClickOn,src:"video/surfing.mp4"})})]}),Object(O.jsx)("div",{id:"videoModal",className:"modal_v",children:Object(O.jsx)("video",{id:"og-video",controls:!0,className:"modal-video",children:Object(O.jsx)("source",{src:!0,type:"video/mp4"})})})]})}}]),c}(a.a.Component));var B=function(){return Object(O.jsxs)(m.a,{children:[Object(O.jsx)(x,{}),Object(O.jsxs)(g.c,{children:[Object(O.jsx)(g.a,{path:"/Text",component:p}),Object(O.jsx)(g.a,{path:"/Table",component:v}),Object(O.jsx)(g.a,{path:"/Email",component:C}),Object(O.jsx)(g.a,{path:"/Image",component:I}),Object(O.jsx)(g.a,{path:"/Video",component:w})]})]})};r.a.render(Object(O.jsx)(B,{}),document.getElementById("root"))},53:function(e,t,c){},65:function(e,t,c){}},[[146,1,2]]]);
//# sourceMappingURL=main.c5903e14.chunk.js.map