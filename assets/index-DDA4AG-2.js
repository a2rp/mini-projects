import{r as d,j as n,C as f,d as t}from"./index-DIGs8dZ3.js";import{L as b,y}from"./index-DEFh_Cvl.js";import{a as u}from"./index-NIGUFBhG.js";import{T as j}from"./TextField-BcUFIGN9.js";import{B as v}from"./Button-BojSXafA.js";import"./Select-DaV9fu61.js";import"./FormLabel-DPMrCOmU.js";const Y=()=>{const[c,l]=d.useState(!1),[p,m]=d.useState(""),[g,x]=d.useState([]),h=async r=>{var a;r.preventDefault();try{l(!0);const o={url:`https://api.dictionaryapi.dev/api/v2/entries/en_US/${p}`,method:"get"},i=await u(o);x(i.data)}catch(o){console.error("Dictionary API error:",o),x([]);let i="Something went wrong";if((a=o.response)!=null&&a.data){const e=o.response.data;i=e.message||e.title||JSON.stringify(e)}else o.message&&(i=o.message);y.error(i)}finally{l(!1)}};return n.jsxs(n.Fragment,{children:[n.jsx(S,{children:n.jsxs(w,{children:[n.jsx(D,{children:"Dictionary"}),n.jsxs(C,{onSubmit:h,children:[n.jsx(j,{value:p,onChange:r=>m(r.target.value),fullWidth:!0,required:!0,label:"Search word here",placeholder:"Search word here"}),n.jsx(k,{type:"submit",variant:"contained",disabled:c,children:c?n.jsx(f,{sx:{padding:"10px"}}):"Search"})]}),n.jsx(A,{children:g.map((r,a)=>n.jsxs(H,{children:[n.jsx(O,{children:r.word}),n.jsx(P,{children:r.meanings.map((o,i)=>n.jsxs(W,{children:[n.jsxs(E,{children:[n.jsx(L,{children:"Part of speech"})," ",o.partOfSpeech]}),o.synonyms.length>0&&n.jsxs(M,{children:[n.jsx(z,{children:"Synonyms:"}),o.synonyms.map((e,s)=>n.jsx(B,{children:e},s))]}),o.antonyms.length>0&&n.jsxs(F,{children:[n.jsx(T,{children:"Antonyms:"}),o.antonyms.map((e,s)=>n.jsx(I,{children:e},s))]}),n.jsxs(q,{children:[n.jsx(J,{children:"Definition:"}),o.definitions.map((e,s)=>n.jsxs(N,{children:[n.jsx(R,{children:e.definition}),e.example&&n.jsxs(U,{children:["e.g."," ",e.example]})]},s))]})]},i))})]},a))})]})}),n.jsx(b,{})]})},S=t.div`
    padding: 20px;
    background-color: #fff;
    color: #000;
    margin: 30px;
`,w=t.div`
    /* max-width: 800px; */
    margin: 0 auto;
`,D=t.div`
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
`,C=t.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
`,k=t(v)`
    align-self: flex-start;
`,A=t.div`
    margin-top: 30px;
`,H=t.div`
    margin-bottom: 40px;
`,O=t.div`
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 15px;
`,P=t.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`,W=t.div`
    padding: 10px;
    background-color: #f8f8f8;
    border-left: 4px solid #1976d2;
    border-radius: 6px;
`,E=t.div`
    font-weight: 500;
    margin-bottom: 10px;
`,L=t.span`
    font-weight: bold;
    color: #555;
`,M=t.div`
    margin-bottom: 10px;
`,z=t.div`
    font-weight: bold;
    margin-bottom: 5px;
`,B=t.span`
    display: inline-block;
    background: #e0f7fa;
    color: #00796b;
    padding: 4px 8px;
    border-radius: 4px;
    margin-right: 6px;
    margin-bottom: 6px;
`,F=t.div`
    margin-bottom: 10px;
`,T=t.div`
    font-weight: bold;
    margin-bottom: 5px;
`,I=t.span`
    display: inline-block;
    background: #ffebee;
    color: #c62828;
    padding: 4px 8px;
    border-radius: 4px;
    margin-right: 6px;
    margin-bottom: 6px;
`,q=t.div`
    margin-top: 10px;
`,J=t.div`
    font-weight: bold;
    margin-bottom: 8px;
`,N=t.div`
    margin-bottom: 10px;
`,R=t.div`
    font-style: italic;
`,U=t.div`
    margin-top: 4px;
    color: #666;
    font-size: 0.9rem;
`;export{I as Antonym,F as Antonyms,T as AntonymsHeading,S as Container,R as Definition,N as DefinitionExample,J as DefinitionHeading,q as Definitions,U as Example,C as Form,D as Heading,w as Main,W as Meaning,P as MeaningsContainer,A as OutputContainer,E as PartOfSpeech,L as PartOfSpeechHeading,k as StyledButton,B as Synonym,M as Synonyms,z as SynonymsHeading,O as TheWord,H as WordContainer,Y as default};
