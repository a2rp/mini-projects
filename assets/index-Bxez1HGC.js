import{r as n,j as t,C as x,d as e}from"./index-DMzq47q3.js";import{a as p}from"./index-NIGUFBhG.js";import{B as f}from"./Button-CRxqZ49T.js";const h=e.div`
    background-color: #fff;
    color: #000;
    padding: 30px;
    max-width: 900px;
    margin: auto;
`,g=e.div`
    max-width: 600px;
    margin: auto;
`,b=e.h2`
    text-align: center;
    margin-bottom: 20px;
`,j=e.form`
    text-align: center;
    margin-bottom: 30px;
`,v=e.div`
    max-height: 300px;
    overflow-y: auto;
    padding: 20px;
    background: #f4f4f4;
    border-radius: 10px;
    border: 1px solid #ccc;
`,y=e.li`
    margin-bottom: 15px;
    font-style: italic;
`,S=()=>{const o=n.useRef(null),[i,r]=n.useState(!1),[c,d]=n.useState([]),l=async a=>{a.preventDefault();try{r(!0),setTimeout(async()=>{const u=(await p.get("https://api.adviceslip.com/advice")).data.slip.advice;d(m=>[...m,u]),r(!1),setTimeout(()=>{o.current&&(o.current.scrollTop=o.current.scrollHeight)},100)},2e3)}catch(s){r(!1),console.error("Quote fetch error:",s)}};return t.jsx(h,{children:t.jsxs(g,{children:[t.jsx(b,{children:"Random Quotes"}),t.jsx(j,{onSubmit:l,children:t.jsx(f,{type:"submit",variant:"contained",disabled:i,children:i?t.jsx(x,{size:24}):"Fetch Quote"})}),t.jsx(v,{ref:o,children:t.jsx("ol",{reversed:!0,children:c.reverse().map((a,s)=>t.jsx(y,{children:a},s))})})]})})};export{S as default};
