(this["webpackJsonptodo-machine"]=this["webpackJsonptodo-machine"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,o){},,function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var n=o(1),c=o.n(n),a=o(4),s=o.n(a),r=(o(12),o(6)),l=o(2);var d=o(0),i=c.a.createContext();function u(e){var t=function(e,t){var o=c.a.useState(!1),n=Object(l.a)(o,2),a=n[0],s=n[1],r=c.a.useState(!0),d=Object(l.a)(r,2),i=d[0],u=d[1],j=c.a.useState(t),m=Object(l.a)(j,2),b=m[0],x=m[1];return c.a.useEffect((function(){setTimeout((function(){try{var o,n=localStorage.getItem(e);n?o=JSON.parse(n):(localStorage.setItem(e,JSON.stringify(t)),o=t),x(o),u(!1)}catch(a){s(a)}}),3e3)}),[]),{item:b,saveItem:function(t){try{var o=JSON.stringify(t);localStorage.setItem(e,o),x(t)}catch(a){s(a)}},loading:i,error:a}}("TODOS_V1",[]),o=t.item,n=t.saveItem,a=t.loading,s=t.error,u=c.a.useState(""),j=Object(l.a)(u,2),m=j[0],b=j[1],x=c.a.useState(!1),O=Object(l.a)(x,2),h=O[0],p=O[1],f=o.filter((function(e){return!!e.completed})).length,g=o.length,T=[];T=!m.length>=1?o:o.filter((function(e){var t=e.text.toLowerCase(),o=m.toLowerCase();return t.includes(o)}));return Object(d.jsx)(i.Provider,{value:{loading:a,error:s,totalTodos:g,completedTodos:f,addTodo:function(e){var t=Object(r.a)(o);t.push({completed:!1,text:e}),n(t)},searchValue:m,setSearchValue:b,searchedTodos:T,completeTodo:function(e){var t=o.findIndex((function(t){return t.text===e})),c=Object(r.a)(o);c[t].completed=!0,n(c)},deleteTodo:function(e){var t=o.findIndex((function(t){return t.text===e})),c=Object(r.a)(o);c.splice(t,1),n(c)},openModal:h,setOpenModal:p},children:e.children})}o(14);function j(){var e=c.a.useContext(i),t=e.totalTodos,o=e.completedTodos;return Object(d.jsxs)("h2",{className:"TodoCounter",children:["Has completado ",o," de ",t," TODOs"]})}o(15);function m(){var e=c.a.useContext(i),t=e.searchValue,o=e.setSearchValue;return Object(d.jsxs)("div",{className:"TodoSearch",children:[Object(d.jsx)("input",{className:"TodoSearchInput",placeholder:"Buscar ToDo",value:t,onChange:function(e){console.log(e.target.value),o(e.target.value)}}),Object(d.jsx)("svg",{className:"iconSearch",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Object(d.jsx)("path",{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})})]})}o(16);function b(e){return Object(d.jsx)("section",{className:"TodoList",children:e.children})}o(17);function x(e){return Object(d.jsxs)("li",{className:"TodoItem",children:[Object(d.jsx)("svg",{className:"iconCheck ".concat(e.completed&&"iconCheck--active"),height:"40",width:"40",onClick:e.onComplete,children:Object(d.jsx)("path",{d:"M 25 13 A 10 10 0 1 0 30 20 m 0 0 z M 15 20 l 5 5 L 33 10 "})}),Object(d.jsx)("p",{className:"TodoItemText ".concat(e.completed&&"TodoItemText--completed"),children:e.text}),Object(d.jsxs)("svg",{className:"iconDump ".concat(e.completed&&"iconDump--active"),height:"40",width:"40",onClick:e.onDelete,children:[Object(d.jsx)("path",{d:"M 8 10 L 32 10 m 0 0 z M15 10 l 0 -3 l 2 -2 l 6 0 l 2 2 l 0 3 z"}),Object(d.jsx)("path",{d:"M10 15 l 20 0 l -3 20 l -14 0 l -3 -20"}),Object(d.jsx)("path",{d:"M15 18 l 1 14 z M 20 18 l 0 14 z M 25 18 l -1 14"})]})]})}o(18);function O(e){return Object(d.jsx)("button",{className:"CreateTodoButton",onClick:function(){e.setOpenModal((function(e){return!e}))},children:"+"})}o(19);function h(e){var t=e.children;return s.a.createPortal(Object(d.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}o(20);function p(){var e=c.a.useState(""),t=Object(l.a)(e,2),o=t[0],n=t[1],a=c.a.useContext(i),s=a.addTodo,r=a.setOpenModal;return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(o),r(!1)},children:[Object(d.jsx)("label",{children:"Escribe un nuevo TODO"}),Object(d.jsx)("textarea",{value:o,onChange:function(e){n(e.target.value)},placeholder:"Comprar lechuga"}),Object(d.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(d.jsx)("button",{className:"TodoForm-button TodoForm-button-cancel",type:"button",onClick:function(){r(!1)},children:"Cancelar"}),Object(d.jsx)("button",{className:"TodoForm-button TodoForm-button-add",type:"submit",children:"A\xf1adir"})]})]})}function f(e){e.error;return Object(d.jsx)("p",{children:"Deseprate, hubo un error..."})}o(21);function g(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"LoadingTodo-container",children:[Object(d.jsx)("span",{className:"LoadingTodo-CompleteIcon"}),Object(d.jsx)("p",{className:"LoadingTodo-text"}),Object(d.jsx)("span",{className:"LoadingTodo-deleteIcon"})]}),Object(d.jsxs)("div",{className:"LoadingTodo-container",children:[Object(d.jsx)("span",{className:"LoadingTodo-CompleteIcon"}),Object(d.jsx)("p",{className:"LoadingTodo-text"}),Object(d.jsx)("span",{className:"LoadingTodo-deleteIcon"})]}),Object(d.jsxs)("div",{className:"LoadingTodo-container",children:[Object(d.jsx)("span",{className:"LoadingTodo-CompleteIcon"}),Object(d.jsx)("p",{className:"LoadingTodo-text"}),Object(d.jsx)("span",{className:"LoadingTodo-deleteIcon"})]})]})}function T(){return Object(d.jsx)("p",{children:"Crea tu primer TODO!"})}function v(){var e=c.a.useContext(i),t=e.error,o=e.loading,n=e.searchedTodos,a=e.completeTodo,s=e.deleteTodo,r=e.openModal,l=e.setOpenModal;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(m,{}),Object(d.jsxs)(b,{children:[t&&Object(d.jsx)(f,{error:t}),o&&Object(d.jsx)(g,{}),!o&&!n.length&&Object(d.jsx)(T,{}),n.map((function(e){return Object(d.jsx)(x,{text:e.text,completed:e.completed,onComplete:function(){return a(e.text)},onDelete:function(){return s(e.text)}},e.text)}))]}),r&&Object(d.jsx)(h,{children:Object(d.jsx)(p,{})}),Object(d.jsx)(O,{setOpenModal:l})]})}var N=function(){return Object(d.jsx)(u,{children:Object(d.jsx)(v,{})})};s.a.render(Object(d.jsx)(N,{}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.c67266c9.chunk.js.map