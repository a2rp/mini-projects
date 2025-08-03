import{r as n,j as e,C as b,d as s}from"./index-CRg9Ilwg.js";import{e as v}from"./index-C21tAwS_.js";import{y as i}from"./index-JJA3EqHf.js";import{a as C}from"./index-NIGUFBhG.js";import{T as w}from"./TextField-Bd8QoaB1.js";import{B as p}from"./Button-CV_-IQF3.js";import"./Select-ujX37O06.js";import"./FormLabel-B2T60qdc.js";const y=s.div`
    background-color: #fff;
    color: #000;
    padding: 15px;
`,I=s.h3`
    margin-bottom: 10px;
`,R=s.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
`,q=s.img`
    max-width: 300px;
    margin-top: 20px;
`,D=s.div`
    margin-top: 20px;
`,U=()=>{const u=n.useRef(null),[l,d]=n.useState(!1),[r,x]=n.useState(""),[c,m]=n.useState(null),[g,f]=n.useState(!0),h=async t=>{if(t.preventDefault(),r.trim().length===0)return i.warn("Input value is empty");try{d(!0);const a=`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${r}`;m(a),f(!1)}catch(a){i.error(a.message)}finally{d(!1)}},j=async()=>{try{const t=await C.get(`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${r}`,{responseType:"blob"}),a=URL.createObjectURL(t.data),o=document.createElement("a");o.href=a,o.download="qrCode.png",document.body.appendChild(o),o.click(),o.remove()}catch(t){i.warn(t.message)}};return e.jsx(e.Fragment,{children:e.jsxs(y,{children:[e.jsx(I,{children:"QR Code Generator"}),e.jsxs(R,{onSubmit:h,children:[e.jsx(w,{value:r,onChange:t=>{x(t.target.value),m(null)},label:"Enter text here",placeholder:"Enter text here",fullWidth:!0}),e.jsx(p,{type:"submit",variant:"contained",disabled:l||r.trim().length===0,children:l?e.jsx(b,{sx:{padding:"10px"}}):"Generate"})]}),c&&e.jsxs(e.Fragment,{children:[e.jsx(q,{ref:u,src:c,alt:"QR Code"}),e.jsx(D,{children:e.jsx(p,{variant:"contained",disabled:g,onClick:j,startIcon:e.jsx(v,{}),children:"Download"})})]})]})})};export{U as default};
