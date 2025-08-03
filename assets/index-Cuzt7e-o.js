import{r as i,j as e,d as a}from"./index-DMzq47q3.js";import{F as v,a as w}from"./FormLabel-DX8Y-Ibx.js";import{R as g,F as f,a as C}from"./RadioGroup-BxPDoWhj.js";import{B as d}from"./Button-CRxqZ49T.js";import"./Typography-CSyZr6my.js";const I=a.div`
    margin-bottom: 30px;
`,b=a.div`
    display: flex;
    gap: 20px;
    margin-top: 20px;
`,o=({displayQuestion:n,setDisplayQuestion:t,srno:r,question:x,answers:u,correctAnswerIndex:h})=>{const[l,m]=i.useState(-1),[p,j]=i.useState("Incorrect");return i.useEffect(()=>{},[l]),e.jsxs(I,{children:[e.jsxs(v,{children:[e.jsxs(w,{children:["Question ",r,"/5:",e.jsx("h3",{children:x}),e.jsxs("h4",{children:["Selected answer: ",p]})]}),e.jsx(g,{value:l,onChange:c=>{const s=parseInt(c.target.value);m(s),j(s===h?"Correct":"Incorrect")},children:u.map((c,s)=>e.jsx(f,{value:s,control:e.jsx(C,{}),label:c},s))})]}),e.jsxs(b,{children:[e.jsx(d,{variant:"contained",onClick:()=>t(n-1),disabled:r===1,children:"Prev question"}),e.jsx(d,{variant:"contained",onClick:()=>t(n+1),disabled:r===5,children:r===5?"Restart exam":"Next question"}),e.jsx(d,{variant:"contained",onClick:()=>t(1),disabled:r!==5,children:"Restart"})]})]})},A=a.div`
    background-color: #fff;
    color: #000;
    padding: 30px;
    max-width: 900px;
    margin: auto;
`,q=a.h3`
    text-align: center;
    margin-bottom: 30px;
`,S=a.div`
    margin-top: 20px;
`,Q=()=>{const[n,t]=i.useState(1);return e.jsxs(A,{children:[e.jsx(q,{children:"Quiz Application"}),e.jsxs(S,{children:[n===1&&e.jsx(o,{displayQuestion:n,setDisplayQuestion:t,srno:1,question:"What is 1+1?",answers:[1,2,3,4],correctAnswerIndex:1}),n===2&&e.jsx(o,{displayQuestion:n,setDisplayQuestion:t,srno:2,question:"What is 2+5?",answers:[67,43,7,-3],correctAnswerIndex:2}),n===3&&e.jsx(o,{displayQuestion:n,setDisplayQuestion:t,srno:3,question:"What is English of 5?",answers:["one","three","five","seven"],correctAnswerIndex:2}),n===4&&e.jsx(o,{displayQuestion:n,setDisplayQuestion:t,srno:4,question:"How many days in a week?",answers:["One","Three","Five","Seven"],correctAnswerIndex:3}),n===5&&e.jsx(o,{displayQuestion:n,setDisplayQuestion:t,srno:5,question:"How many months in one year?",answers:["Ten","Eleven","Twelve","Thirteen"],correctAnswerIndex:2})]})]})};export{Q as default};
