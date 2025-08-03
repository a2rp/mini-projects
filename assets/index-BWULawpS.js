import{d as p,r as g,j as t}from"./index-CRg9Ilwg.js";const X=p.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
`,Y=p.h1`
    padding: 15px;
    text-align: center;
`,Z=p.div`
    padding: 15px;
    text-align: center;
`,ee=p.div`
    /* border: 1px solid #f00; */
    width: 100%;
    max-width: 1440px;
    margin: auto;
    margin-top: 30px;
    /* display: grid;
    grid-template-columns: 200px 1fr; */
`,te=p.div`
    border: 1px solid #000;
    margin-bottom: 30px;

    ul {
        padding: 0;
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
        justify-content: center;

        li {
            height: 30px;
            padding: 0 15px;
            border: 1px solid #fff;
            background-color: #000;
            color: #fff;
            display: flex;
            align-items: center;
            cursor: pointer;

            &.active {
                background-color: #333;
            }

            &:hover {
                background-color: #333;
                color: #fff;
            }
        }
    }
`,re=p.div`
    border: 1px solid #000;
`,ne=p.div`
    padding: 30px;
    text-align: center;
    background: #121212;
    color: #fff;
    min-height: 100vh;
`,se=p.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 5px;
    height: 300px;
    margin-bottom: 30px;
`,oe=p.div`
    width: 20px;
    background-color: ${({$active:e})=>e?"#00f2ff":"#888"};
    height: ${({value:e})=>e}px;
    transition: height 0.3s, background-color 0.3s;
`,z=p.button`
    padding: 10px 20px;
    margin: 5px;
    font-size: 16px;
    background: #00f2ff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:disabled {
        background: #444;
        cursor: not-allowed;
    }
`,T=(e=20)=>Array.from({length:e},()=>Math.floor(Math.random()*200)+20),ie=()=>{const[e,a]=g.useState(T()),[y,c]=g.useState(!1),[b,f]=g.useState([]),u=async()=>{c(!0);const m=[...e],i=m.length;for(let r=0;r<i;r++)for(let o=0;o<i-r-1;o++)f([o,o+1]),await new Promise(s=>setTimeout(s,150)),m[o]>m[o+1]&&([m[o],m[o+1]]=[m[o+1],m[o]],a([...m]));f([]),c(!1)},j=()=>{a(T()),f([]),c(!1)};return t.jsxs(ne,{children:[t.jsx("h2",{children:"Bubble Sort Visualizer"}),t.jsx(se,{children:e.map((m,i)=>t.jsx(oe,{value:m,$active:b.includes(i)},i))}),t.jsxs("div",{children:[t.jsx(z,{onClick:u,disabled:y,children:"Play"}),t.jsx(z,{onClick:j,disabled:y,children:"Reset"})]})]})},ae=p.div`
    padding: 30px;
    text-align: center;
    background: #111;
    color: #fff;
    min-height: 100vh;
`,ce=p.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 5px;
    height: 300px;
    margin-bottom: 30px;
`,le=p.div`
    width: 20px;
    height: ${({value:e})=>e}px;
    background-color: ${({type:e})=>e==="pivot"?"#f39c12":e==="compare"?"#00f2ff":e==="sorted"?"#2ecc71":"#888"};
    transition: all 0.3s ease;
`,M=p.button`
    padding: 10px 20px;
    margin: 5px;
    font-size: 16px;
    background: #00f2ff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:disabled {
        background: #444;
        cursor: not-allowed;
    }
`,R=(e=20)=>Array.from({length:e},()=>Math.floor(Math.random()*200)+20),de=()=>{const[e,a]=g.useState(R()),[y,c]=g.useState(!1),[b,f]=g.useState({}),u=r=>new Promise(o=>setTimeout(o,r)),j=async(r,o,s)=>{if(o>=s)return;let n=s,l=r[n];f(h=>({...h,[n]:"pivot"})),await u(300);let d=o;for(let h=o;h<s;h++)f(k=>({...k,[h]:"compare"})),await u(300),r[h]<l&&([r[d],r[h]]=[r[h],r[d]],a([...r]),d++,await u(300)),f(k=>({...k,[h]:null}));[r[d],r[n]]=[r[n],r[d]],a([...r]),f(h=>({...h,[n]:null,[d]:"sorted"})),await u(300),await j(r,o,d-1),await j(r,d+1,s)},m=async()=>{c(!0);const r=[...e];await j(r,0,r.length-1),f({}),c(!1)},i=()=>{a(R()),f({}),c(!1)};return t.jsxs(ae,{children:[t.jsx("h2",{children:"Quick Sort Visualizer"}),t.jsx(ce,{children:e.map((r,o)=>t.jsx(le,{value:r,type:b[o]},o))}),t.jsxs("div",{children:[t.jsx(M,{onClick:m,disabled:y,children:"Play"}),t.jsx(M,{onClick:i,disabled:y,children:"Reset"})]})]})},pe=p.div`
    padding: 30px;
    text-align: center;
    background: #111;
    color: #fff;
    min-height: 100vh;
`,ue=p.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 5px;
    height: 300px;
    margin-bottom: 30px;
`,fe=p.div`
    width: 20px;
    height: ${({value:e})=>e}px;
    background-color: ${({type:e})=>e==="compare"?"#00f2ff":e==="sorted"?"#2ecc71":"#888"};
    transition: all 0.3s ease;
`,V=p.button`
    padding: 10px 20px;
    margin: 5px;
    font-size: 16px;
    background: #00f2ff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:disabled {
        background: #444;
        cursor: not-allowed;
    }
`,P=(e=20)=>Array.from({length:e},()=>Math.floor(Math.random()*200)+20),he=()=>{const[e,a]=g.useState(P()),[y,c]=g.useState({}),[b,f]=g.useState(!1),u=o=>new Promise(s=>setTimeout(s,o)),j=async(o,s,n,l)=>{const d=n-s+1,h=l-n,k=o.slice(s,n+1),C=o.slice(n+1,l+1);let x=0,S=0,w=s;for(;x<d&&S<h;)c(v=>({...v,[w]:"compare"})),await u(200),k[x]<=C[S]?(o[w]=k[x],x++):(o[w]=C[S],S++),a([...o]),c(v=>({...v,[w]:"sorted"})),await u(200),w++;for(;x<d;)c(v=>({...v,[w]:"compare"})),o[w]=k[x],x++,a([...o]),c(v=>({...v,[w]:"sorted"})),await u(200),w++;for(;S<h;)c(v=>({...v,[w]:"compare"})),o[w]=C[S],S++,a([...o]),c(v=>({...v,[w]:"sorted"})),await u(200),w++},m=async(o,s,n)=>{if(s>=n)return;const l=Math.floor((s+n)/2);await m(o,s,l),await m(o,l+1,n),await j(o,s,l,n)},i=async()=>{f(!0);const o=[...e];await m(o,0,o.length-1),c({}),f(!1)},r=()=>{a(P()),c({}),f(!1)};return t.jsxs(pe,{children:[t.jsx("h2",{children:"Merge Sort Visualizer"}),t.jsx(ue,{children:e.map((o,s)=>t.jsx(fe,{value:o,type:y[s]},s))}),t.jsxs("div",{children:[t.jsx(V,{onClick:i,disabled:b,children:"Play"}),t.jsx(V,{onClick:r,disabled:b,children:"Reset"})]})]})},xe=p.div`
    padding: 30px;
    text-align: center;
    background: #111;
    color: #fff;
    min-height: 100vh;
`,ge=p.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 5px;
    height: 300px;
    margin-bottom: 30px;
`,me=p.div`
    width: 20px;
    height: ${({value:e})=>e}px;
    background-color: ${({type:e})=>e==="active"?"#00f2ff":e==="sorted"?"#2ecc71":"#888"};
    transition: all 0.3s ease;
`,N=p.button`
    padding: 10px 20px;
    margin: 5px;
    font-size: 16px;
    background: #00f2ff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:disabled {
        background: #444;
        cursor: not-allowed;
    }
`,W=(e=20)=>Array.from({length:e},()=>Math.floor(Math.random()*200)+20),be=()=>{const[e,a]=g.useState(W()),[y,c]=g.useState({}),[b,f]=g.useState(!1),u=i=>new Promise(r=>setTimeout(r,i)),j=async()=>{f(!0);const i=[...e];for(let o=1;o<i.length;o++){let s=i[o],n=o-1;for(c({[o]:"active"}),await u(250);n>=0&&i[n]>s;)c({[n]:"active",[n+1]:"active"}),i[n+1]=i[n],a([...i]),await u(250),n--;i[n+1]=s,a([...i]),c({})}const r={};i.forEach((o,s)=>r[s]="sorted"),c(r),f(!1)},m=()=>{a(W()),c({}),f(!1)};return t.jsxs(xe,{children:[t.jsx("h2",{children:"Insertion Sort Visualizer"}),t.jsx(ge,{children:e.map((i,r)=>t.jsx(me,{value:i,type:y[r]},r))}),t.jsxs("div",{children:[t.jsx(N,{onClick:j,disabled:b,children:"Play"}),t.jsx(N,{onClick:m,disabled:b,children:"Reset"})]})]})},ye=p.div`
    padding: 30px;
    text-align: center;
    background: #111;
    color: #fff;
    min-height: 100vh;
`,je=p.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 5px;
    height: 300px;
    margin-bottom: 30px;
`,we=p.div`
    width: 20px;
    height: ${({value:e})=>e}px;
    background-color: ${({type:e})=>e==="min"?"#f39c12":e==="compare"?"#00f2ff":e==="sorted"?"#2ecc71":"#888"};
    transition: all 0.3s ease;
`,I=p.button`
    padding: 10px 20px;
    margin: 5px;
    font-size: 16px;
    background: #00f2ff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:disabled {
        background: #444;
        cursor: not-allowed;
    }
`,E=(e=20)=>Array.from({length:e},()=>Math.floor(Math.random()*200)+20),Se=()=>{const[e,a]=g.useState(E()),[y,c]=g.useState({}),[b,f]=g.useState(!1),u=i=>new Promise(r=>setTimeout(r,i)),j=async()=>{f(!0);const i=[...e];for(let r=0;r<i.length;r++){let o=r;c({[r]:"min"}),await u(250);for(let s=r+1;s<i.length;s++)c(n=>({...n,[s]:"compare",[o]:"min"})),await u(200),i[s]<i[o]&&(o=s,c(n=>({...n,[s]:"min"})),await u(200)),c(n=>{const l={...n};return delete l[s],l});o!==r&&([i[r],i[o]]=[i[o],i[r]],a([...i]),await u(250)),c(s=>({...s,[r]:"sorted"}))}f(!1)},m=()=>{a(E()),c({}),f(!1)};return t.jsxs(ye,{children:[t.jsx("h2",{children:"Selection Sort Visualizer"}),t.jsx(je,{children:e.map((i,r)=>t.jsx(we,{value:i,type:y[r]},r))}),t.jsxs("div",{children:[t.jsx(I,{onClick:j,disabled:b,children:"Play"}),t.jsx(I,{onClick:m,disabled:b,children:"Reset"})]})]})},G=20,B=30,ve=p.div`
    padding: 20px;
    background: #111;
    color: #fff;
    min-height: 100vh;
`,ke=p.div`
    display: grid;
    grid-template-columns: repeat(${B}, 20px);
    grid-gap: 1px;
`,$e=p.div`
    width: 20px;
    height: 20px;
    background: ${({type:e})=>e==="start"?"#2ecc71":e==="end"?"#e74c3c":e==="wall"?"#333":e==="path"?"#00f2ff":e==="visited"?"#f39c12":"#222"};
    border: 1px solid #111;
`,_=p.button`
    padding: 10px 20px;
    margin: 10px 5px;
    background: #00f2ff;
    border: none;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
`,A=(e,a,y="empty")=>({row:e,col:a,type:y,f:0,g:0,h:0,parent:null}),Ce=(e,a)=>Math.abs(e.row-a.row)+Math.abs(e.col-a.col),Ae=()=>{const[e,a]=g.useState([]),[y,c]=g.useState(!1),[b,f]=g.useState(A(2,2,"start")),[u,j]=g.useState(A(17,27,"end"));g.useEffect(()=>{m()},[]);const m=()=>{const s=[];for(let n=0;n<G;n++){const l=[];for(let d=0;d<B;d++){let h="empty";n===b.row&&d===b.col?h="start":n===u.row&&d===u.col&&(h="end"),l.push(A(n,d,h))}s.push(l)}a(s)},i=(s,n)=>{if(y)return;const l=e.map(d=>d.map(h=>{if(h.row===s&&h.col===n){if(h.type==="empty")return{...h,type:"wall"};if(h.type==="wall")return{...h,type:"empty"}}return h}));a(l)},r=async()=>{c(!0);const s=[],n=[],l=[...e].map(d=>[...d]);for(s.push(b);s.length>0;){let d=0;for(let x=0;x<s.length;x++)s[x].f<s[d].f&&(d=x);let h=s[d];if(h.row===u.row&&h.col===u.col){let x=h;const S=[];for(;x.parent;)S.push(x),x=x.parent;for(let w=S.length-1;w>=0;w--){const v=S[w];l[v.row][v.col].type="path",a([...l]),await new Promise($=>setTimeout($,20))}c(!1);return}s.splice(d,1),n.push(h);const k=o(h,l);for(let x of k){if(n.find($=>$.row===x.row&&$.col===x.col)||x.type==="wall")continue;let S=h.g+1,w=!1;s.find($=>$.row===x.row&&$.col===x.col)?S<x.g&&(w=!0,x.g=S):(w=!0,x.g=S,s.push(x)),w&&(x.h=Ce(x,u),x.f=x.g+x.h,x.parent=h)}((x,S)=>{l[x][S].type==="empty"&&(l[x][S].type="visited")})(h.row,h.col),a([...l]),await new Promise(x=>setTimeout(x,15))}c(!1),alert("No Path Found")},o=(s,n)=>{const{row:l,col:d}=s,h=[];return l>0&&h.push(n[l-1][d]),l<G-1&&h.push(n[l+1][d]),d>0&&h.push(n[l][d-1]),d<B-1&&h.push(n[l][d+1]),h};return t.jsxs(ve,{children:[t.jsx("h2",{children:"A* Search Pathfinding Visualizer"}),t.jsx(ke,{children:e.map((s,n)=>s.map((l,d)=>t.jsx($e,{type:l.type,onClick:()=>i(n,d)},`${n}-${d}`)))}),t.jsxs("div",{children:[t.jsx(_,{onClick:r,disabled:y,children:"Visualize A*"}),t.jsx(_,{onClick:m,disabled:y,children:"Reset"})]})]})},Be=p.div`
    padding: 30px;
    text-align: center;
    background: #111;
    color: #fff;
    min-height: 100vh;
`,ze=p.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 5px;
    height: 300px;
    margin-bottom: 30px;
`,Te=p.div`
    width: 20px;
    height: ${({value:e})=>e}px;
    background-color: ${({type:e})=>e==="active"?"#00f2ff":e==="sorted"?"#2ecc71":"#888"};
    transition: all 0.3s ease;
`,L=p.button`
    padding: 10px 20px;
    margin: 5px;
    font-size: 16px;
    background: #00f2ff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:disabled {
        background: #444;
        cursor: not-allowed;
    }
`,q=(e=20)=>Array.from({length:e},()=>Math.floor(Math.random()*200)+20),Me=()=>{const[e,a]=g.useState(q()),[y,c]=g.useState({}),[b,f]=g.useState(!1),u=r=>new Promise(o=>setTimeout(o,r)),j=async(r,o,s)=>{let n=s;const l=2*s+1,d=2*s+2;l<o&&r[l]>r[n]&&(n=l),d<o&&r[d]>r[n]&&(n=d),n!==s&&(c({[s]:"active",[n]:"active"}),await u(250),[r[s],r[n]]=[r[n],r[s]],a([...r]),c({}),await u(250),await j(r,o,n))},m=async()=>{f(!0);const r=[...e],o=r.length;for(let n=Math.floor(o/2)-1;n>=0;n--)await j(r,o,n);for(let n=o-1;n>0;n--)c({0:"active",[n]:"active"}),await u(250),[r[0],r[n]]=[r[n],r[0]],a([...r]),c({[n]:"sorted"}),await u(250),await j(r,n,0);const s={};r.forEach((n,l)=>s[l]="sorted"),c(s),f(!1)},i=()=>{a(q()),c({}),f(!1)};return t.jsxs(Be,{children:[t.jsx("h2",{children:"Heap Sort Visualizer"}),t.jsx(ze,{children:e.map((r,o)=>t.jsx(Te,{value:r,type:y[o]},o))}),t.jsxs("div",{children:[t.jsx(L,{onClick:m,disabled:b,children:"Play"}),t.jsx(L,{onClick:i,disabled:b,children:"Reset"})]})]})},Re=p.div`
    padding: 30px;
    text-align: center;
    background: #111;
    color: #fff;
    min-height: 100vh;
`,Ve=p.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 5px;
    height: 300px;
    margin-bottom: 30px;
`,Pe=p.div`
    width: 20px;
    height: ${({value:e})=>e}px;
    background-color: ${({type:e})=>e==="found"?"#2ecc71":e==="active"?"#00f2ff":"#888"};
    transition: all 0.3s ease;
`,D=p.button`
    padding: 10px 20px;
    margin: 5px;
    font-size: 16px;
    background: #00f2ff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:disabled {
        background: #444;
        cursor: not-allowed;
    }
`,Ne=p.input`
    padding: 10px;
    width: 100px;
    font-size: 16px;
    margin: 10px;
`,H=(e=20)=>Array.from({length:e},()=>Math.floor(Math.random()*200)+20),We=()=>{const[e,a]=g.useState(H()),[y,c]=g.useState({}),[b,f]=g.useState(!1),[u,j]=g.useState(""),m=o=>new Promise(s=>setTimeout(s,o)),i=async()=>{if(!u||isNaN(u))return;f(!0);const o=parseInt(u),s=[...e];for(let n=0;n<s.length;n++){if(c({[n]:"active"}),await m(300),s[n]===o){c({[n]:"found"}),f(!1);return}c({})}alert("Value not found"),f(!1)},r=()=>{a(H()),c({}),f(!1),j("")};return t.jsxs(Re,{children:[t.jsx("h2",{children:"Linear Search Visualizer"}),t.jsx(Ve,{children:e.map((o,s)=>t.jsx(Pe,{value:o,type:y[s]},s))}),t.jsxs("div",{children:[t.jsx(Ne,{type:"number",value:u,onChange:o=>j(o.target.value),placeholder:"Search for...",disabled:b}),t.jsx(D,{onClick:i,disabled:b,children:"Search"}),t.jsx(D,{onClick:r,disabled:b,children:"Reset"})]})]})},Ie=p.div`
    padding: 30px;
    text-align: center;
    background: #111;
    color: #fff;
    min-height: 100vh;
`,Ee=p.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 5px;
    height: 300px;
    margin-top: 200px;
`,Ge=p.div`
    width: 20px;
    height: ${({value:e})=>e}px;
    background-color: ${({type:e})=>e==="active"?"#00f2ff":e==="sorted"?"#2ecc71":"#888"};
    transition: all 0.3s ease;
`,Q=p.button`
    padding: 10px 20px;
    margin: 5px;
    font-size: 16px;
    background: #00f2ff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:disabled {
        background: #444;
        cursor: not-allowed;
    }
`,O=(e=20)=>Array.from({length:e},()=>Math.floor(Math.random()*1e3)),_e=e=>Math.max(...e).toString().length,Le=(e,a)=>Math.floor(e/Math.pow(10,a))%10,qe=()=>{const[e,a]=g.useState(O()),[y,c]=g.useState({}),[b,f]=g.useState(!1),u=i=>new Promise(r=>setTimeout(r,i)),j=async()=>{f(!0);let i=[...e];const r=_e(i);for(let s=0;s<r;s++){const n=Array.from({length:10},()=>[]);for(let l=0;l<i.length;l++){const d=Le(i[l],s);n[d].push(i[l]),c({[l]:"active"}),await u(150)}i=[].concat(...n),a([...i]),c({}),await u(400)}const o={};i.forEach((s,n)=>o[n]="sorted"),c(o),f(!1)},m=()=>{a(O()),c({}),f(!1)};return t.jsxs(Ie,{children:[t.jsx("h2",{children:"Radix Sort Visualizer"}),t.jsx(Ee,{children:e.map((i,r)=>t.jsx(Ge,{value:i/2,type:y[r]},r))}),t.jsxs("div",{children:[t.jsx(Q,{onClick:j,disabled:b,children:"Play"}),t.jsx(Q,{onClick:m,disabled:b,children:"Reset"})]})]})},De=p.div`
    padding: 30px;
    text-align: center;
    background: #111;
    color: #fff;
    min-height: 100vh;
`,He=p.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 5px;
    height: 300px;
    margin-bottom: 30px;
`,Qe=p.div`
    width: 20px;
    height: ${({value:e})=>e}px;
    background-color: ${({type:e})=>e==="active"?"#00f2ff":e==="sorted"?"#2ecc71":"#888"};
    transition: all 0.3s ease;
`,F=p.button`
    padding: 10px 20px;
    margin: 5px;
    font-size: 16px;
    background: #00f2ff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:disabled {
        background: #444;
        cursor: not-allowed;
    }
`,J=(e=20)=>Array.from({length:e},()=>Math.floor(Math.random()*200)+20),Oe=()=>{const[e,a]=g.useState(J()),[y,c]=g.useState({}),[b,f]=g.useState(!1),u=i=>new Promise(r=>setTimeout(r,i)),j=async()=>{f(!0);let i=[...e],r=i.length;for(let s=Math.floor(r/2);s>0;s=Math.floor(s/2))for(let n=s;n<r;n++){let l=i[n],d;for(c({[n]:"active"}),await u(200),d=n;d>=s&&i[d-s]>l;d-=s)i[d]=i[d-s],a([...i]),c({[d]:"active",[d-s]:"active"}),await u(200);i[d]=l,a([...i]),c({}),await u(150)}const o={};i.forEach((s,n)=>o[n]="sorted"),c(o),f(!1)},m=()=>{a(J()),c({}),f(!1)};return t.jsxs(De,{children:[t.jsx("h2",{children:"Shell Sort Visualizer"}),t.jsx(He,{children:e.map((i,r)=>t.jsx(Qe,{value:i,type:y[r]},r))}),t.jsxs("div",{children:[t.jsx(F,{onClick:j,disabled:b,children:"Play"}),t.jsx(F,{onClick:m,disabled:b,children:"Reset"})]})]})},Fe=p.div`
    padding: 30px;
    text-align: center;
    background: #111;
    color: #fff;
    min-height: 100vh;
`,Je=p.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 5px;
    height: 300px;
    margin-bottom: 30px;
`,Ke=p.div`
    width: 20px;
    height: ${({value:e})=>e*2}px;
    background-color: ${({type:e})=>e==="counting"?"#f39c12":e==="placing"?"#00f2ff":e==="sorted"?"#2ecc71":"#888"};
    transition: all 0.3s ease;
`,K=p.button`
    padding: 10px 20px;
    margin: 5px;
    font-size: 16px;
    background: #00f2ff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:disabled {
        background: #444;
        cursor: not-allowed;
    }
`,U=(e=20,a=20)=>Array.from({length:e},()=>Math.floor(Math.random()*a)),Ue=()=>{const[e,a]=g.useState(U()),[y,c]=g.useState({}),[b,f]=g.useState(!1),u=i=>new Promise(r=>setTimeout(r,i)),j=async()=>{f(!0);const i=[...e],r=Math.max(...i),o=new Array(r+1).fill(0);for(let l=0;l<i.length;l++)o[i[l]]++,c({[l]:"counting"}),await u(150);let s=0;for(let l=0;l<o.length;l++)for(;o[l]>0;)i[s]=l,a([...i]),c({[s]:"placing"}),await u(150),o[l]--,s++;const n={};i.forEach((l,d)=>n[d]="sorted"),c(n),f(!1)},m=()=>{a(U()),c({}),f(!1)};return t.jsxs(Fe,{children:[t.jsx("h2",{children:"Counting Sort Visualizer"}),t.jsx(Je,{children:e.map((i,r)=>t.jsx(Ke,{value:i,type:y[r]},r))}),t.jsxs("div",{children:[t.jsx(K,{onClick:j,disabled:b,children:"Play"}),t.jsx(K,{onClick:m,disabled:b,children:"Reset"})]})]})},Ye=()=>{const[e,a]=g.useState("bubblesort");return t.jsxs(X,{children:[t.jsx(Y,{children:"Sorting"}),t.jsx(Z,{children:"Click on any sorting algo. below to visualize its working"}),t.jsxs(ee,{children:[t.jsx(te,{children:t.jsxs("ul",{children:[t.jsx("li",{onClick:()=>a("bubblesort"),className:`${e==="bubblesort"?"active":""}`,children:"Bubble Sort"}),t.jsx("li",{onClick:()=>a("quicksort"),className:`${e==="quicksort"?"active":""}`,children:"Quick Sort"}),t.jsx("li",{onClick:()=>a("mergesort"),className:`${e==="mergesort"?"active":""}`,children:"Merge Sort"}),t.jsx("li",{onClick:()=>a("insertionsort"),className:`${e==="insertionsort"?"active":""}`,children:"Insertion Sort"}),t.jsx("li",{onClick:()=>a("selectionsort"),className:`${e==="selectionsort"?"active":""}`,children:"Selection Sort"}),t.jsx("li",{onClick:()=>a("astar"),className:`${e==="astar"?"active":""}`,children:"A* Search"}),t.jsx("li",{onClick:()=>a("heapsort"),className:`${e==="heapsort"?"active":""}`,children:"Heap Sort"}),t.jsx("li",{onClick:()=>a("linearsearch"),className:`${e==="linearsearch"?"active":""}`,children:"Linear Search"}),t.jsx("li",{onClick:()=>a("radixsort"),className:`${e==="radixsort"?"active":""}`,children:"Radix Sort"}),t.jsx("li",{onClick:()=>a("shellsort"),className:`${e==="shellsort"?"active":""}`,children:"Shell Sort"}),t.jsx("li",{onClick:()=>a("countingsort"),className:`${e==="countingsort"?"active":""}`,children:"Counting Sort"})]})}),t.jsxs(re,{children:[e==="bubblesort"&&t.jsx(ie,{}),e==="quicksort"&&t.jsx(de,{}),e==="mergesort"&&t.jsx(he,{}),e==="insertionsort"&&t.jsx(be,{}),e==="selectionsort"&&t.jsx(Se,{}),e==="astar"&&t.jsx(Ae,{}),e==="heapsort"&&t.jsx(Me,{}),e==="linearsearch"&&t.jsx(We,{}),e==="radixsort"&&t.jsx(qe,{}),e==="shellsort"&&t.jsx(Oe,{}),e==="countingsort"&&t.jsx(Ue,{})]})]})]})};export{Ye as default};
