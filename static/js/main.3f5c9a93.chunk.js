(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(4),s=a.n(r),o=(a(9),a(2)),l=(a(10),a(0));function i(e){return Object(l.jsx)("div",{children:Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(l.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(l.jsx)("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,role:"switch",id:"flexSwitchCheckDefault"}),Object(l.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})})}function b(e){var t=Object(c.useState)(""),a=Object(o.a)(t,2),n=a[0],r=a[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"mb-3",style:{color:"dark"===e.mode?"white":"black"},children:[Object(l.jsx)("h2",{children:e.heading}),Object(l.jsx)("textarea",{className:"form-control",value:n,style:{backgroundColor:"dark"===e.mode?"gray":"white",color:"dark"===e.mode?"white":"black"},onChange:function(e){r(e.target.value)},id:"mybox",rows:"8"})]}),Object(l.jsx)("button",{type:"button",className:"btn btn-primary my-2 mx-1",onClick:function(){var t=n.toUpperCase();r(t),e.showAlert("converted to uppercase","success")},children:"Change to UpperCase"}),Object(l.jsx)("button",{type:"button",className:"btn btn-primary my-2 mx-1",onClick:function(){var t=n.toLowerCase();r(t),e.showAlert("converted to lowercase","success")},children:"Change to LowerCase"}),Object(l.jsx)("button",{type:"button",className:"btn btn-primary my-2 mx-1",onClick:function(){r(" "),e.showAlert("text cleared","success")},children:"Clear Text"}),Object(l.jsx)("button",{type:"button",className:"btn btn-primary my-2 mx-1",onClick:function(){var t=document.getElementById("mybox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("copied to clipboard","success")},children:"Copy Text"})]}),Object(l.jsxs)("div",{className:"containe my-5",style:{color:"dark"===e.mode?"white":"black"},children:[Object(l.jsx)("h2",{children:"Your text summary "}),Object(l.jsxs)("p",{children:[" ",n.split(" ").length," Words ,",n.length," characters ",Object(l.jsx)("br",{}),8e-4*n.split(" ").length," Minutes to Read.."]}),Object(l.jsx)("h2",{children:"Preview"}),Object(l.jsx)("p",{children:n.length>0?n:"Enter something in the textbox to preview it here"})]})]})}i.defaultProps={aboutText:"Enter your text here"};var d=function(e){return e.alert&&Object(l.jsxs)("div",{class:"alert alert-".concat(e.alert.type," alert-dismissible fade show "),role:"alert",children:[Object(l.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)})," : ",e.alert.msg]})};var h=function(){var e=Object(c.useState)("light"),t=Object(o.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(null),s=Object(o.a)(r,2),h=s[0],j=s[1],u=function(e,t){j({msg:e,type:t}),setTimeout((function(){j(null)}),2e3)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i,{title:"TextUtils",aboutText:"About Us",mode:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="#042743",u("Dark mode has been enaled","success")):(n("light"),document.body.style.backgroundColor="white",u("light mode has been enaled","success"))}}),Object(l.jsx)(d,{alert:h}),Object(l.jsx)("div",{className:"container my-3",children:Object(l.jsx)(b,{heading:"Enter Your Text To Analyze",mode:a,showAlert:u})})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.3f5c9a93.chunk.js.map