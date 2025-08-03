import{r,j as e,C as w,d as s}from"./index-CRg9Ilwg.js";import{a as R}from"./index-NIGUFBhG.js";import{y as b}from"./index-JJA3EqHf.js";import{R as m,F as d,a as g}from"./RadioGroup-DAqAW2n_.js";import{F as $}from"./FormLabel-B2T60qdc.js";import{T as J}from"./TextField-Bd8QoaB1.js";import{B as L}from"./Button-CV_-IQF3.js";import"./Typography-DEiI0k_C.js";import"./Select-ujX37O06.js";const O=s.div`
    padding: 30px;
    max-width: 800px;
    margin: 0 auto;
    background-color: #fff;
    color: #000;
`,P=s.h3`
    text-align: center;
    margin-bottom: 30px;
`,p=s($)`
    margin-bottom: 20px;
    width: 100%;
`,B=s(J)`
    margin-top: 20px !important;
    margin-bottom: 20px !important;
`,E=s(L)`
    margin-top: 10px !important;
`,A=s.div`
    background-color: #000;
    color: #fff;
    padding: 15px;
    margin-top: 30px;
    white-space: pre-wrap;
`,X=()=>{const[x,S]=r.useState("Any"),[i,v]=r.useState("en"),[n,y]=r.useState("none"),[G,I]=r.useState("json"),[l,C]=r.useState("morning"),[T,z]=r.useState(1),[c,h]=r.useState(""),[D,u]=r.useState(""),[j,f]=r.useState(!1),k=async t=>{t.preventDefault(),f(!0),u(""),h("");let a=`https://v2.jokeapi.dev/joke/${x}`;n&&n!=="none"&&(a+=`?blacklistFlags=${n}`);const F=a.includes("?");i!=="en"&&(a+=`${F?"&":"?"}lang=${i}`),l.trim()&&(a+=`${a.includes("?")?"&":"?"}contains=${encodeURIComponent(l.trim())}`);try{const o=await R.get(a);o.data.error?(b.error(o.data.message||"API Error"),u(o.data.message)):h(o.data)}catch(o){console.log(o,"err"),b.error(o.message),u(o.message)}finally{f(!1)}};return e.jsxs(O,{children:[e.jsx(P,{children:"Jokes Generator"}),e.jsxs("form",{onSubmit:k,children:[e.jsxs(p,{children:[e.jsx("label",{children:"Category"}),e.jsx(m,{row:!0,value:x,onChange:t=>S(t.target.value),children:["Any","Programming","Miscellaneous","Dark","Pun","Spooky","Christmas"].map(t=>e.jsx(d,{value:t,control:e.jsx(g,{}),label:t},t))})]}),e.jsxs(p,{children:[e.jsx("label",{children:"Language"}),e.jsx(m,{row:!0,value:i,onChange:t=>v(t.target.value),children:[{code:"cs",label:"czech"},{code:"en",label:"english"},{code:"fr",label:"french"},{code:"de",label:"german"},{code:"pt",label:"portuguese"},{code:"es",label:"spanish"}].map(({code:t,label:a})=>e.jsx(d,{value:t,control:e.jsx(g,{}),label:a},t))})]}),e.jsxs(p,{children:[e.jsx("label",{children:"Flags"}),e.jsx(m,{row:!0,value:n,onChange:t=>y(t.target.value),children:["none","nsfw","religious","political","racist","sexist","explicit"].map(t=>e.jsx(d,{value:t,control:e.jsx(g,{}),label:t},t))})]}),e.jsx(B,{value:l,onChange:t=>C(t.target.value),fullWidth:!0,label:"Search string",variant:"outlined"}),e.jsx(E,{type:"submit",variant:"contained",disabled:j,children:j?e.jsx(w,{size:24}):"Submit"})]}),c&&e.jsxs(e.Fragment,{children:[e.jsx(A,{children:c.joke}),e.jsx("pre",{children:JSON.stringify(c,null,2)})]})]})};export{X as default};
