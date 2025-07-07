import{r as d}from"./index.BVOCwoKb.js";var x={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m;function f(){if(m)return n;m=1;var i=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function t(o,e,r){var u=null;if(r!==void 0&&(u=""+r),e.key!==void 0&&(u=""+e.key),"key"in e){r={};for(var l in e)l!=="key"&&(r[l]=e[l])}else r=e;return e=r.ref,{$$typeof:i,type:o,key:u,ref:e!==void 0?e:null,props:r}}return n.Fragment=a,n.jsx=t,n.jsxs=t,n}var c;function v(){return c||(c=1,x.exports=f()),x.exports}var s=v();function p(){const[i,a]=d.useState([]);return d.useEffect(()=>{const t=document.querySelectorAll("main h1, main h2, main h3"),o=Array.from(t).map(e=>({id:e.id,text:e.textContent,level:e.tagName==="H1"?1:e.tagName==="H2"?2:3}));a(o)},[]),s.jsxs("nav",{className:"toc",children:[s.jsx("h2",{children:"Contenido"}),s.jsx("ul",{children:i.map(t=>s.jsx("li",{style:{marginLeft:`${(t.level-1)*1}em`},children:s.jsx("a",{href:`#${t.id}`,children:t.text})},t.id))})]})}export{p as default};
