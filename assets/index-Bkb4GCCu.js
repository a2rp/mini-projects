import{e as S,j as e,r as o,T,I,d as s}from"./index-DIGs8dZ3.js";import{a as w}from"./index-NIGUFBhG.js";import{y as B}from"./index-DEFh_Cvl.js";import{F as P}from"./FormLabel-DPMrCOmU.js";import{I as F,S as k}from"./Select-DaV9fu61.js";import{M as f}from"./MenuItem-CDxvE_Bc.js";import{T as E}from"./TextField-BcUFIGN9.js";const L=S(e.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),A=s.div`
    background-color: #fff;
    color: #000;
    padding: 30px;
    max-width: 900px;
    margin: auto;
`,M=s.div`
    max-width: 900px;
    margin: auto;
`,D=s.h2`
    text-align: center;
    margin-bottom: 20px;
`,R=s.div`
    /* border: 1px solid #f00; */
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 15px;
`,W=s.div`
    display: flex;
    gap: 15px;
`,z=s.div`
    /* border: 1px solid #f00; */
    position: relative;
    width: 100%;
`,O=s.div`
    /* border: 1px solid #f00; */
    /* margin-top: 15px; */
    max-height: 200px;
    overflow-y: auto;
    /* border: 1px solid #ddd; */
    border-radius: 6px;
    padding: 10px;
`,V=s.div`
    padding: 8px;
    border-bottom: 1px solid #eee;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #f5f5f5;
    }
`,q=s.div`
    /* margin-top: 30px; */
`,G=s.h3`
    margin-bottom: 15px;
`,H=s.div`
    background-color: #fafafa;
    padding: 10px 15px;
    border-radius: 8px;
    margin-bottom: 10px;
    border-left: 4px solid #1976d2;
`,x=s.div`
    margin-bottom: 5px;
`,Z=()=>{const[i,n]=o.useState(""),[j,m]=o.useState([]),[l,y]=o.useState([]),[g,c]=o.useState([]),[r,C]=o.useState("Brand"),[h,p]=o.useState(!1);o.useEffect(()=>{(async()=>{try{const a=await w.get("https://dummyjson.com/products?limit=10");y(a.data.products),c(a.data.products)}catch{B.error("Failed to load products")}})()},[]),o.useEffect(()=>{if(i.trim().length===0){m([]),h&&(c(l),p(!1));return}const t=l.filter(a=>{const d=i.toLowerCase();return r==="Brand"?a.brand.toLowerCase().includes(d):r==="Category"?a.category.toLowerCase().includes(d):r==="Title"?a.title.toLowerCase().includes(d):!1});m(t)},[i,r,l,h]);const v=t=>{let a;r==="Brand"&&(n(t.brand),a=t.brand),r==="Category"&&(n(t.category),a=t.category),r==="Title"&&(n(t.title),a=t.title);const d=l.filter(u=>r==="Brand"?u.brand===a:r==="Category"?u.category===a:r==="Title"?u.title===a:!1);c(d),p(!0)},b=()=>{n(""),c(l),p(!1)};return e.jsx(A,{children:e.jsxs(M,{children:[e.jsx(D,{children:"Search Auto Complete"}),e.jsxs(R,{children:[e.jsxs(W,{children:[e.jsxs(P,{sx:{width:"120px"},children:[e.jsx(F,{id:"search-by-label",children:"Search by"}),e.jsxs(k,{labelId:"search-by-label",value:r,label:"Search by",onChange:t=>{C(t.target.value),b()},children:[e.jsx(f,{value:"Brand",children:"Brand"}),e.jsx(f,{value:"Category",children:"Category"}),e.jsx(f,{value:"Title",children:"Title"})]})]}),e.jsxs(z,{children:[e.jsx(E,{value:i,onChange:t=>n(t.target.value),label:"Enter search term here",placeholder:"Enter search term here",fullWidth:!0}),i.length>0&&e.jsx(T,{title:"Clear",children:e.jsx(I,{onClick:b,sx:{position:"absolute",right:"10px",top:"10px"},children:e.jsx(L,{})})})]})]}),e.jsx(O,{children:j.map(t=>e.jsxs(V,{onClick:()=>v(t),children:[r==="Brand"&&t.brand,r==="Category"&&t.category,r==="Title"&&t.title]},t.id))})]}),g.length>0&&e.jsxs(q,{children:[e.jsx(G,{children:h?"Related Products":"All Products"}),g.map(t=>e.jsxs(H,{children:[e.jsxs(x,{children:[e.jsx("b",{children:"Id:"})," ",t.id]}),e.jsxs(x,{children:[e.jsx("b",{children:"Brand:"})," ",t.brand]}),e.jsxs(x,{children:[e.jsx("b",{children:"Category:"})," ",t.category]}),e.jsxs(x,{children:[e.jsx("b",{children:"Title:"})," ",t.title]})]},t.id))]})]})})};export{Z as default};
