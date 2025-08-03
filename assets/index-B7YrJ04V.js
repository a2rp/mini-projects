import{r as a,j as e,a8 as i,d as o}from"./index-CRg9Ilwg.js";import{j as d}from"./index-C21tAwS_.js";import{a as l}from"./index-CAVtzgvt.js";const c=i`
  body[data-theme="dark"] {
    background-color: #121212;
    color: #f5f5f5;
  }
  body[data-theme="light"] {
    background-color: #ffffff;
    color: #333;
  }
`,g=o.div`
    padding: 30px;
    transition: all 0.3s ease;
`,m=o.div`
    max-width: 600px;
    margin: auto;
    text-align: center;
`,h=o.h2`
    margin-bottom: 20px;
`,x=o.div`
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
    color: ${({theme:t})=>t==="dark"?"#f1c40f":"#2980b9"};
`,p=o.input`
    margin: 20px auto;
    display: block;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
`,f=o.div`
    font-size: 50px;
    margin-top: 20px;
    color: ${({theme:t})=>t==="dark"?"#f1c40f":"#2980b9"};
`,T=()=>{const[t,r]=a.useState(()=>window.localStorage.getItem("toggle-theme")||"light");a.useEffect(()=>{document.body.setAttribute("data-theme",t)},[t]);const s=()=>{const n=t==="dark"?"light":"dark";r(n),window.localStorage.setItem("toggle-theme",n)};return e.jsxs(e.Fragment,{children:[e.jsx(c,{}),e.jsx(g,{children:e.jsxs(m,{children:[e.jsxs(h,{children:["Toggle theme using ",e.jsx("code",{children:"data-theme"}),e.jsx(x,{theme:t,children:t})]}),e.jsx(p,{type:"button",value:"Toggle theme",onClick:s}),e.jsx(f,{theme:t,children:t==="dark"?e.jsx(d,{}):e.jsx(l,{})})]})})]})};export{T as default};
