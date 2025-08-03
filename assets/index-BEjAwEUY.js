import{r as i,R as m,j as e,C as v,d as o}from"./index-DIGs8dZ3.js";import{y as j}from"./index-DEFh_Cvl.js";import{a as y}from"./index-NIGUFBhG.js";import{B as b}from"./Button-BojSXafA.js";const w=o.div`
    padding: 30px;
    height: 100vh;
    overflow-y: scroll;
    scroll-behavior: smooth;
    position: relative;
    background-color: #fff;
    color: #000;
`,S=o.div`
    max-width: 800px;
    margin: auto;
`,k=o.h2`
    text-align: center;
    margin-bottom: 20px;
`,C=o.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`,D=o.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: sticky;
    top: 0;
    background: white;
    z-index: 1;
    padding: 10px 0;
`,E=o.div`
    position: relative;
    width: 100%;
    height: 35px;
    background: #eee;
    color: #000;
    border-radius: 5px;
    /* overflow: hidden; */
`,H=o.div`
    position: relative;
    height: 100%;
    background-color: #1976d2;
    width: 0%;
    transition: width 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`,I=o.div`
    /* border: 1px solid #f00; */
    position: absolute;
    top: 0;
    margin: auto;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    color: #000;
    font-weight: bold;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`,P=o.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`,R=o.div`
    background: #f9f9f9;
    border-left: 5px solid #2196f3;
    padding: 15px;
    border-radius: 5px;
`,L=o.div`
    font-weight: bold;
`,T=o.div`
    font-style: italic;
    margin-top: 5px;
`,Q=()=>{const[s,r]=i.useState(!1),[a,d]=i.useState([]),[n,p]=i.useState(0),l=m.useRef(null),h=async()=>{try{r(!0);const t=await y.get("https://dummyjson.com/quotes?skip=0&limit=1000");d(t.data.quotes)}catch(t){j.error(t.message)}finally{r(!1)}};return i.useEffect(()=>{const t=l.current;if(!t)return;const c=()=>{const x=t.scrollTop,g=t.scrollHeight,u=t.clientHeight,f=x/(g-u)*100;p(f)};return t.addEventListener("scroll",c),()=>{t.removeEventListener("scroll",c)}},[]),e.jsx(w,{ref:l,children:e.jsxs(S,{children:[e.jsx(k,{children:"Scroll Progress Indicator"}),e.jsxs(C,{children:[e.jsxs(D,{children:[e.jsx("h3",{children:'"Fetch Data" below and then scroll to see scroll progress indicator'}),e.jsx(b,{variant:"contained",disabled:s,onClick:h,fullWidth:!0,children:s?e.jsx(v,{size:24}):"Fetch Data"}),e.jsxs(E,{children:[e.jsx(H,{style:{width:`${n}%`}}),e.jsxs(I,{children:[n.toFixed(2),"%"]})]})]}),e.jsx(P,{children:a.map(t=>e.jsxs(R,{children:[e.jsxs(L,{children:[t.id,". ",t.author]}),e.jsx(T,{children:t.quote})]},t.id))})]})]})})};export{Q as default};
