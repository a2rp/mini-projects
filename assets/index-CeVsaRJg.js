import{r as i,j as e,C as f,d as s}from"./index-DIGs8dZ3.js";import{a as j}from"./index-NIGUFBhG.js";import{y as h}from"./index-DEFh_Cvl.js";import{T as g}from"./TextField-BcUFIGN9.js";import{B as w}from"./Button-BojSXafA.js";import"./Select-DaV9fu61.js";import"./FormLabel-DPMrCOmU.js";const U=s.div`
    /* border: 1px solid #f00; */
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding: 20px; */
    color: #000;
`,v=s.div`
    width: 100%;
    /* max-width: 600px; */
    background-color: white;
    padding: 30px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
`,y=s.h2`
    text-align: center;
    margin-bottom: 20px;
    font-size: 26px;
    font-weight: bold;
    color: #333;
`,B=s.form`
    display: flex;
    gap: 15px;
    /* margin-bottom: 30px; */
    /* flex-wrap: wrap; */
    justify-content: space-between;
`,L=s(w)`
    min-width: 120px !important;
    height: 56px !important;
`,k=s.h1`
    text-align: center;
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
`,S=s.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`,R=s.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 auto;
`,T=s.div`
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: column; */
    gap: 5px;
    font-size: 16px;
`,r=s.span`
    flex: 1 1 300px;
`,z=s(r)`
    word-break: break-all;
`,C=s(r)`
    word-break: break-all;
`,E=s(r)`
    word-break: break-all;
`,F=s.div`
    font-size: 16px;
`,G=s.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 14px;
`,N=()=>{const l=i.useRef(null),[n,u]=i.useState("a2rp"),[c,d]=i.useState(!1),[t,x]=i.useState(null),m=async o=>{o.preventDefault();const b=n.trim().length===0?h.warn("username is empty"):n;try{const a={url:`https://api.github.com/users/${b}`,method:"GET"};d(!0),x(null);const p=await j(a);p.status===200&&x(p.data)}catch(a){h.error(a.message)}finally{d(!1)}};return i.useEffect(()=>{l.current.click()},[]),e.jsx(U,{children:e.jsxs(v,{children:[e.jsx(y,{children:"Github Profile Finder"}),e.jsxs(B,{onSubmit:m,children:[e.jsx(g,{value:n,onChange:o=>u(o.target.value),label:"Enter username here",placeholder:"Username",fullWidth:!0}),e.jsx(L,{ref:l,type:"submit",variant:"contained",disabled:c,children:c?e.jsx(f,{sx:{padding:"5px"}}):"Search"})]}),t&&e.jsxs(e.Fragment,{children:[e.jsx(k,{children:"User info"}),e.jsxs(S,{children:[e.jsx(R,{src:t.avatar_url,alt:""}),e.jsxs(T,{children:[e.jsxs(r,{children:[e.jsx("b",{children:"Id:"})," ",t.id]}),e.jsxs(r,{children:[e.jsx("b",{children:"Name:"})," ",t.name]}),e.jsxs(r,{children:[e.jsx("b",{children:"Location:"})," ",t.location]}),e.jsxs(r,{children:[e.jsx("b",{children:"Login:"})," ",t.login]}),e.jsxs(r,{children:[e.jsx("b",{children:"Public repos:"})," ",t.public_repos]}),e.jsxs(z,{children:[e.jsx("b",{children:"Blog:"})," ",t.blog]}),e.jsxs(C,{children:[e.jsx("b",{children:"HTML URL:"})," ",t.html_url]}),e.jsxs(E,{children:[e.jsx("b",{children:"GitHub URL:"})," ",t.url]})]}),e.jsxs(F,{children:[e.jsx("b",{children:"Bio:"})," ",t.bio]}),e.jsxs(G,{children:[e.jsxs("span",{children:[e.jsx("b",{children:"Created at:"})," ",t.created_at]}),e.jsxs("span",{children:[e.jsx("b",{children:"Updated at:"})," ",t.updated_at]})]})]})]})]})})};export{N as default};
