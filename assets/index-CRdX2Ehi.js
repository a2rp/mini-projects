import{r,j as e,d as n}from"./index-DIGs8dZ3.js";import{i as p}from"./index-DL7BRHVq.js";const x=n.div`
    padding: 30px;
`,g=n.div`
    max-width: 500px;
    margin: auto;
    text-align: center;
`,h=n.h2`
    margin-bottom: 20px;
`,m=n.div`
    margin: 20px 0;
`,f=n.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 15px;
    padding: 0;
`,j=n.li`
    font-size: 32px;
    cursor: pointer;
    transition: color 0.2s ease;
    color: ${({$filled:s})=>s?"gold":"#ccc"};
    
    &:hover {
        transform: scale(1.1);
    }
`,v=n.div`
    margin-top: 15px;
    font-size: 18px;
    font-weight: bold;
`,b=()=>{const[s,a]=r.useState(0),[o,i]=r.useState(0),l=t=>a(t),c=()=>a(0),u=t=>i(t),d=t=>s>=t||!s&&o>=t;return e.jsx(x,{children:e.jsxs(g,{children:[e.jsx(h,{children:"Star Rating System"}),e.jsxs(m,{children:[e.jsx(f,{onMouseLeave:c,children:[1,2,3,4,5].map(t=>e.jsx(j,{$filled:d(t),onMouseOver:()=>l(t),onClick:()=>u(t),role:"button","aria-label":`Rate ${t} out of 5`,tabIndex:"0",children:e.jsx(p,{})},t))}),e.jsxs(v,{children:["Rating: ",o,"/5"]})]})]})})};export{b as default};
