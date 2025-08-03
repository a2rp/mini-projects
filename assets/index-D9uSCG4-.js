import{r as t,j as o,d as c}from"./index-DMzq47q3.js";const p=c.div`
    padding: 30px;
    /* height: 100vh; */
    /* overflow-y: auto; */
`,S=c.div`
    max-width: 800px;
    margin: auto;
`,j=c.h2`
    text-align: center;
    margin-bottom: 20px;
`,g=c.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 30px;
    justify-content: center;

    button {
        padding: 10px 15px;
        font-size: 14px;
        background: #1976d2;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
            background: #0d47a1;
        }
    }
`,e=c.div`
    height: 400px;
    background-color: #f0f0f0;
    margin: 20px 0;
    border-radius: 8px;
    font-size: 24px;
    font-weight: bold;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
`,R=()=>{const i=t.useRef(null),r=t.useRef(null),l=t.useRef(null),s=t.useRef(null),d=t.useRef(null),x=t.useRef(null),n=(f,a=60)=>{const u=f.current;if(!u)return;const h=u.getBoundingClientRect().top+window.scrollY-a;window.scrollTo({top:h,behavior:"smooth"})};return o.jsx(p,{children:o.jsxs(S,{children:[o.jsx(j,{children:"Scroll To"}),o.jsxs(g,{children:[o.jsx("button",{onClick:()=>n(i),children:"Scroll to Section A"}),o.jsx("button",{onClick:()=>n(r),children:"Scroll to Section B"}),o.jsx("button",{onClick:()=>n(l),children:"Scroll to Section C"}),o.jsx("button",{onClick:()=>n(s),children:"Scroll to Section D"}),o.jsx("button",{onClick:()=>n(d),children:"Scroll to Section E"}),o.jsx("button",{onClick:()=>n(x),children:"Scroll to Section F"})]}),o.jsx(e,{ref:i,children:"Section A"}),o.jsx(e,{ref:r,children:"Section B"}),o.jsx(e,{ref:l,children:"Section C"}),o.jsx(e,{ref:s,children:"Section D"}),o.jsx(e,{ref:d,children:"Section E"}),o.jsx(e,{ref:x,children:"Section F"})]})})};export{R as default};
