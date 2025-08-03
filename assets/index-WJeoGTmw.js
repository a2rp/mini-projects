import{r as c,j as s,d as e}from"./index-DIGs8dZ3.js";import{f as w,g as b,h as B}from"./index-DL7BRHVq.js";import{B as g}from"./Button-BojSXafA.js";const H=e.div`
    padding: 30px;
    max-width: 800px;
    margin: auto;
    text-align: center;
`,t=e.h3`
    margin-bottom: 15px;
`,I=e.h3`
    color: #888;
`,F=e.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 20px 0;
`,a=e(g)`
    display: flex !important;
    flex-direction: column;
    align-items: center;
    width: 120px;
    height: 100px;
`,l=e.div`
    font-size: 32px;
`,d=e.div`
    margin-top: 10px;
`,T=e.div`
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
`,k=e.div`
    border: 1px solid #ccc;
    padding: 15px;
    width: 45%;
    border-radius: 10px;
    background: #f5f5f5;
`,A=e.div`
    margin-top: 30px;
`,E=e.div`
    margin-top: 40px;
`,M=e.h3`
    margin-bottom: 10px;
`,z=e.div`
    line-height: 1.6;
`,J=()=>{const[f,h]=c.useState(0),[S,p]=c.useState(0),[v,x]=c.useState("null"),[y,j]=c.useState("null"),[u,m]=c.useState(0),o=P=>{m(u+1);const C=["rock","paper","scissor"],n=P,r=C[Math.floor(Math.random()*C.length)];x(n),j(r),n!==r&&(n==="rock"&&r==="scissor"||n==="scissor"&&r==="paper"||n==="paper"&&r==="rock"?h(i=>i+1):p(i=>i+1))},R=()=>{x("null"),j("null"),h(0),p(0),m(0)};return s.jsxs(H,{children:[s.jsx(t,{children:"Rock-Paper-Scissor"}),s.jsxs(I,{children:["Total ",u," clicks"]}),s.jsxs(F,{children:[s.jsxs(a,{variant:"contained",onClick:()=>o("rock"),children:[s.jsx(l,{children:s.jsx(w,{})}),s.jsx(d,{children:"Rock"})]}),s.jsxs(a,{variant:"contained",onClick:()=>o("paper"),children:[s.jsx(l,{children:s.jsx(b,{})}),s.jsx(d,{children:"Paper"})]}),s.jsxs(a,{variant:"contained",onClick:()=>o("scissor"),children:[s.jsx(l,{children:s.jsx(B,{})}),s.jsx(d,{children:"Scissor"})]})]}),s.jsxs(T,{children:[s.jsxs(k,{children:[s.jsx(t,{children:"Player"}),s.jsxs("h4",{children:["Choice: ",v]}),s.jsxs("h4",{children:["Score: ",f]})]}),s.jsxs(k,{children:[s.jsx(t,{children:"Computer"}),s.jsxs("h4",{children:["Choice: ",y]}),s.jsxs("h4",{children:["Score: ",S]})]})]}),s.jsx(A,{children:s.jsx(g,{variant:"contained",onClick:R,children:"Reset"})}),s.jsxs(E,{children:[s.jsx(M,{children:"Rules"}),s.jsxs(z,{children:[s.jsx("h4",{children:"In rock & scissor: rock wins +1"}),s.jsx("h4",{children:"In scissor & paper: scissor wins +1"}),s.jsx("h4",{children:"In paper & rock: paper wins +1"})]})]})]})};export{J as default};
