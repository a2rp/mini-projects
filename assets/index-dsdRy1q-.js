import{r as i,j as e,d as o}from"./index-DMzq47q3.js";const T=o.div`
    display: flex;
    flex-direction: column;
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`,E=o.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    max-height: 300px;
    overflow-y: auto;
    margin-bottom: 20px;
    padding: 10px;
    background: #f8f9fa;
    border-radius: 8px;
`,W=o.button`
    background: #e9ecef;
    border: none;
    padding: 8px 15px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

    &:hover {
        background: #dee2e6;
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(0);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`,D=o.div`
    border: 1px solid #e9ecef;
    padding: 20px;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    margin-top: 20px;
`,b=o.li`
    padding: 8px 0;
    border-bottom: 1px solid #f1f3f5;

    &:last-child {
        border-bottom: none;
    }
`,d=o.div`
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
    height: 20px;
    border-radius: 4px;
    margin-bottom: 10px;

    @keyframes shimmer {
        0% {
            background-position: 200% 0;
        }
        100% {
            background-position: -200% 0;
        }
    }
`,I=[{code:"es",name:"Spanish"},{code:"fr",name:"French"},{code:"de",name:"German"},{code:"it",name:"Italian"},{code:"pt",name:"Portuguese"},{code:"hi",name:"Hindi"},{code:"ja",name:"Japanese"},{code:"zh",name:"Chinese"}],O={hello:{es:"hola",fr:"bonjour",de:"hallo",it:"ciao",pt:"olá",hi:"नमस्ते",ja:"こんにちは",zh:"你好"},goodbye:{es:"adiós",fr:"au revoir",de:"auf wiedersehen",it:"arrivederci",pt:"adeus",hi:"अलविदा",ja:"さようなら",zh:"再见"}},z=({words:j=["hello","goodbye","thank you","please","yes","no"]})=>{const[l,y]=i.useState(""),[w,c]=i.useState({}),[p,h]=i.useState([]),[x,f]=i.useState(!1),[m,u]=i.useState(null),k=["https://translate.argosopentech.com/translate","https://libretranslate.de/translate","https://libretranslate.org/translate"],v=async(t,a)=>{var n;for(const s of k)try{const r=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({q:t,source:"en",target:a})});if(r.ok)return(await r.json()).translatedText}catch{await new Promise(g=>setTimeout(g,500))}return((n=O[t.toLowerCase()])==null?void 0:n[a])||"Translation unavailable"},S=async t=>{var a;y(t),f(!0),u(null),c({}),h([]);try{try{const s=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${t}`);if(s.ok){const r=await s.json();h(((a=r[0])==null?void 0:a.meanings)||[])}}catch(s){console.warn("Dictionary API error:",s)}const n={};await Promise.all(I.map(async s=>{n[s.name]=await v(t,s.code)})),c(n)}catch(n){u(n.message),console.error("Translation error:",n)}finally{f(!1)}};return e.jsxs(T,{children:[e.jsx("h2",{children:"Multilingual Word Explorer"}),e.jsx("p",{children:"Click any word to see its meaning and translations"}),e.jsx(E,{children:j.map((t,a)=>e.jsx(W,{onClick:()=>S(t),disabled:x,children:t},a))}),l&&e.jsxs(D,{children:[e.jsxs("h3",{children:['"',l,'"']}),m&&e.jsxs("p",{style:{color:"#e63946"},children:["Error: ",m]}),x?e.jsxs("div",{children:[e.jsx(d,{style:{width:"80%"}}),e.jsx(d,{style:{width:"60%"}}),e.jsx(d,{style:{width:"70%"}})]}):e.jsxs(e.Fragment,{children:[p.length>0&&e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx("h4",{children:"Definitions:"}),e.jsx("ul",{children:p.map((t,a)=>{var n;return e.jsxs(b,{children:[e.jsxs("strong",{children:[t.partOfSpeech,":"]})," ",(n=t.definitions[0])==null?void 0:n.definition]},a)})})]}),e.jsx("h4",{children:"Translations:"}),e.jsx("ul",{children:Object.entries(w).map(([t,a])=>e.jsxs(b,{children:[e.jsxs("strong",{children:[t,":"]})," ",a]},t))})]})]})]})};export{z as default};
