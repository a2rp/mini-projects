import{r as i,j as t,C as y,d as s}from"./index-DMzq47q3.js";import{a as b}from"./index-NIGUFBhG.js";import{L as j,y as m}from"./index-DTuTqKgE.js";import{p as v}from"./index-DUmpOgpw.js";import{T as x}from"./TextField-DvRcoHlb.js";import{B as L}from"./Button-CRxqZ49T.js";import"./Select-eCOj06gt.js";import"./FormLabel-DX8Y-Ibx.js";const S=s.div`
    padding: 30px;
    background-color: #fff;
`,C=s.div`
    /* max-width: 700px; */
    margin: 0 auto;
`,w=s.h2`
    text-align: center;
    margin-bottom: 30px;
`,F=s.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 30px;

    & > div {
        width: 100%;
    }
`,k=s(L)`
    width: 200px;
    align-self: center;
`,T=s.div`
    white-space: pre-wrap;
    background: #111;
    color: #eee;
    padding: 20px;
    border-radius: 8px;
    font-family: monospace;
    line-height: 1.6;
    font-size: 15px;
`,H=()=>{const[o,a]=i.useState(!1),[n,f]=i.useState("linkin park"),[c,g]=i.useState("numb"),[l,d]=i.useState(null),p=async()=>{var e,u;try{a(!0),d(null);const r=await b(`https://api.lyrics.ovh/v1/${n}/${c}`);d(r.data.lyrics),m.success("Lyrics found")}catch(r){console.error(r),m.error(((u=(e=r==null?void 0:r.response)==null?void 0:e.data)==null?void 0:u.error)||"Lyrics not found")}finally{a(!1)}},h=e=>{e.preventDefault(),p()};return i.useEffect(()=>{p()},[]),t.jsx(S,{children:t.jsxs(C,{children:[t.jsx(w,{children:"Lyrics Finder"}),t.jsxs(F,{onSubmit:h,children:[t.jsx(x,{value:n,onChange:e=>f(e.target.value),label:"Artist name",placeholder:"Artist name",required:!0}),t.jsx(x,{value:c,onChange:e=>g(e.target.value),label:"Song title",placeholder:"Song title",required:!0}),t.jsx(k,{variant:"contained",type:"submit",disabled:o,children:o?t.jsx(y,{size:24}):"Find lyrics"})]}),l&&t.jsx(T,{children:v(l)}),t.jsx(j,{position:"top-right",autoClose:3e3})]})})};export{H as default};
