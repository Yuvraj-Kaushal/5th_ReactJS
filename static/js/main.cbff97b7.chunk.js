(this["webpackJsonpreact-todo-2020"]=this["webpackJsonpreact-todo-2020"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.f4d4f18f.png"},,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),c=a(8),r=a.n(c),l=(a(17),a(6)),i=a(5),m=a(9),u=a.n(m),s=(a(18),function(e){var t=e.item,a=e.deleteItem;return o.a.createElement("div",{className:"ToDoItem"},o.a.createElement("p",{className:"ToDoItem-Text"},t.text),o.a.createElement("button",{className:"ToDoItem-Delete",onClick:function(){return a(t.id)}},"-"))}),d=(a(19),function(){var e=Object(n.useState)([{id:1,text:"To Learn NodeJS"},{id:2,text:"To Learn MongoDB"}]),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),m=Object(i.a)(r,2),d=m[0],f=m[1],E=Object(n.useState)(!1),p=Object(i.a)(E,2),g=p[0],T=p[1],v=function(){if(d){var e={id:a&&a.length?Math.max.apply(Math,Object(l.a)(a.map((function(e){return e.id}))))+1:1,text:d};c([].concat(Object(l.a)(a),[e])),f("")}else!function(){T(!0);var e=setTimeout((function(){return T(!1)}),3e3)}()},b=function(e){c(a.filter((function(t){return t.id!==e})))};return o.a.createElement("div",{className:"ToDo"},o.a.createElement("h1",{className:"ToDo-Refresh"},"*Refresh to change background animation..*"),o.a.createElement("img",{className:"Logo",src:u.a,alt:"React logo"}),o.a.createElement("h1",{className:"ToDo-Header"},"Todo List"),o.a.createElement("div",{className:"ToDo-Container"},o.a.createElement("div",{className:"ToDo-Content"},a.map((function(e){return o.a.createElement(s,{key:e.id,item:e,deleteItem:b})}))),o.a.createElement("div",{className:"ToDoInput"},o.a.createElement("input",{type:"text",placeholder:"Add your todo..",value:d,onChange:function(e){f(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&v()}}),o.a.createElement("button",{className:"ToDo-Add",onClick:v},"+")),o.a.createElement("div",{className:"ToDo-ErrorContainer"},g&&o.a.createElement("p",null,"Please enter a todo!"))))}),f=a(10),E=a(11);function p(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(d,null),o.a.createElement(f.a,{g:1,color:"random",cull:"MuiSvgIcon-root,MuiButton-root",level:6}),o.a.createElement(E.a,{type:"random",bg:!0}))}r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.cbff97b7.chunk.js.map