import{r as s,j as i,d as a}from"./index-DIGs8dZ3.js";const j=a.div`
    text-align: center;
    margin-top: 40px;
    font-family: sans-serif;
`,w=a.h2``,y=a.div`
    display: grid;
    grid-template-columns: repeat(3, 100px);
    gap: 8px;
    justify-content: center;
    margin-top: 20px;
`,k=a.div`
    width: 100px;
    height: 100px;
    border: 2px solid #333;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    cursor: pointer;
    background: ${e=>e.disabled?"#eee":"#fff"};
    pointer-events: ${e=>e.disabled?"none":"auto"};

    &:hover {
        background-color: ${e=>e.disabled?"#eee":"#f0f0f0"};
    }
`,C=a.p`
    margin: 20px 0;
    font-weight: bold;
`,S=a.button`
    padding: 10px 20px;
    font-size: 14px;
    background: #0077ff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background: #0055cc;
    }
`,X=()=>{const[e,c]=s.useState(Array(9).fill("")),[n,l]=s.useState(!0),[p,d]=s.useState("Your turn (X)"),[u,m]=s.useState(!1),r=h(e);s.useEffect(()=>{r?(m(!0),d(r==="X"?"You win! 🎉":"Computer wins 😈")):e.every(t=>t!=="")&&(m(!0),d("It's a draw 🤝"))},[e,r]),s.useEffect(()=>{if(!n&&!u&&!r){const t=setTimeout(()=>{b()},500);return()=>clearTimeout(t)}},[n,u,r]);const g=t=>{if(e[t]!==""||!n||u||r)return;const o=[...e];o[t]="X",c(o),h(o)||l(!1)},b=()=>{if(u||r)return;const t=e.map((x,T)=>x===""?T:null).filter(x=>x!==null);if(t.length===0)return;const o=t[Math.floor(Math.random()*t.length)],f=[...e];f[o]="O",c(f),h(f)||(l(!0),d("Your turn (X)"))},v=()=>{c(Array(9).fill("")),l(!0),d("Your turn (X)"),m(!1)};return i.jsxs(j,{children:[i.jsx(w,{children:"Tic Tac Toe (You vs Computer)"}),i.jsx(y,{children:e.map((t,o)=>i.jsx(k,{onClick:()=>g(o),disabled:t!==""||!n||u||r,children:t},o))}),i.jsx(C,{children:p}),i.jsx(S,{onClick:v,children:"Reset Game"})]})},h=e=>{const c=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(let[n,l,p]of c)if(e[n]&&e[n]===e[l]&&e[n]===e[p])return e[n];return null};export{X as default};
