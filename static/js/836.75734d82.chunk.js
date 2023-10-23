"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[836],{9836:function(n,t,e){e.r(t),e.d(t,{default:function(){return z}});var a=e(4270),r=e(2791),c={find:"Contacts_find__V-KCM",phn:"Contacts_phn__MpAzQ",phn2:"Contacts_phn2__6U7WR"},o=e(9439),s=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,t){return n+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")},i="ContactsForm_formBook__i5nAb",u="ContactsForm_title__cd5Wh",l="ContactsForm_btn__qImoL",d="InputLabel_labelBook__7DRZv",m="InputLabel_inputBook__c4GBx",h=e(184),p=function(n){var t=n.name,e=n.value,a=n.onChange,r=n.type,c=n.pattern,o=n.title,s=n.id;return(0,h.jsx)("label",{className:d,htmlFor:s,children:(0,h.jsx)("input",{className:m,id:s,type:r,name:t,pattern:c,title:o,required:!0,value:e,onChange:a})})},_=e(9434),f=e(1538),x=function(n){return n.contacts.contacts},v=function(n){return n.contacts.filter},b=function(n){return n.contacts.isLoading},j=function(n){return n.contacts.error},C=e(3634),g=function(){var n=(0,_.I0)(),t=(0,r.useState)(""),e=(0,o.Z)(t,2),a=e[0],c=e[1],d=(0,r.useState)(""),m=(0,o.Z)(d,2),v=m[0],b=m[1],j=(0,_.v9)(x),g=function(n){var t=n.target,e=t.name,a=t.value;"name"===e&&c(a),"number"===e&&b(a)},N=s(),y=s();return(0,h.jsxs)("form",{className:i,onSubmit:function(t){t.preventDefault(),j.some((function(n){return n.name===a}))?alert("".concat(a," is already in contacts")):(n((0,C.uK)({id:s(),name:a,number:v})),c(""),b(""))},onClick:function(){return n((0,f.T)(""))},children:[(0,h.jsx)("div",{className:u,children:"Name:"}),(0,h.jsx)(p,{id:N,name:"name",type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:a,onChange:g}),(0,h.jsx)("div",{className:u,children:"Namber:"}),(0,h.jsx)(p,{id:y,name:"number",type:"tel",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:v,onChange:g}),(0,h.jsx)("button",{className:l,type:"submit",children:"Add contact"})]})},N=e(1413),y="ContactItem_contactItem__Z4FuP",k="ContactItem_buttonDelete__icmIc",I="ContactItem_contactName__ZAMAK",A=function(n){var t=n.id,e=n.name,a=n.number,r=n.onDelete;return(0,h.jsxs)("li",{className:y,children:[(0,h.jsxs)("p",{className:I,children:[e,": ",a]}),(0,h.jsx)("button",{className:k,type:"button",onClick:function(){return r(t)},children:"Delete"})]})},F=function(){var n=(0,_.I0)(),t=(0,_.v9)(x),e=(0,_.v9)(v),a=t.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})),r=function(t){n((0,C.GK)(t))};return(0,h.jsx)("ul",{children:a.map((function(n,t){return(0,h.jsx)(A,(0,N.Z)((0,N.Z)({},n),{},{onDelete:r}),"".concat(n.id,"-").concat(t))}))})},Z="Filter_inputFilter__8QMOp",w=function(){var n=(0,_.I0)(),t=(0,_.v9)(v);return(0,h.jsx)("input",{className:Z,value:t,onChange:function(t){n((0,f.T)(t.target.value))}})},B=function(){var n=(0,_.I0)(),t=(0,_.v9)(b),e=(0,_.v9)(j);return(0,r.useEffect)((function(){n((0,C.yF)())}),[n]),(0,h.jsxs)("div",{className:c.phonebook,children:[(0,h.jsx)("h1",{className:c.phn,children:"Phonebook"}),(0,h.jsx)(g,{}),(0,h.jsx)("h2",{className:c.phn2,children:"Contacts"}),(0,h.jsx)("p",{className:c.find,children:"Find contacts by name"}),(0,h.jsx)(w,{}),t&&!e&&(0,h.jsx)("p",{style:{marginTop:"15px",fontSize:"18px",marginLeft:"30px",color:"blue"},children:"Request in progress..."}),(0,h.jsx)(F,{})]})},L={container:"ContactsPage_container__BnqXB"};function z(){return(0,h.jsxs)("div",{className:L.container,children:[(0,h.jsx)(a.q,{children:(0,h.jsx)("title",{children:"Your contacts"})}),(0,h.jsx)(B,{})]})}}}]);
//# sourceMappingURL=836.75734d82.chunk.js.map