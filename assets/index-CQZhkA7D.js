import{r as p,j as d,d as g,m as A}from"./index-CRg9Ilwg.js";const $=e=>e.map(o=>o.slice()),v=Array.from({length:9},(e,o)=>Math.floor(o/3)*3),w=(e,o,n,r)=>{for(let i=0;i<9;i++)if(e[o][i]===r||e[i][n]===r)return!1;const t=v[o],s=v[n];for(let i=0;i<3;i++)for(let l=0;l<3;l++)if(e[t+i][s+l]===r)return!1;return!0},C=e=>{const o=$(e),n=[];for(let t=0;t<9;t++)for(let s=0;s<9;s++)o[t][s]||n.push([t,s]);n.sort((t,s)=>{const i=S(o,t[0],t[1]),l=S(o,s[0],s[1]);return i-l});const r=(t=0)=>{if(t===n.length)return!0;const[s,i]=n[t],l=k([1,2,3,4,5,6,7,8,9]);for(const h of l)if(w(o,s,i,h)){if(o[s][i]=h,r(t+1))return!0;o[s][i]=""}return!1};return r()?o:null},S=(e,o,n)=>{let r=0;for(let t=1;t<=9;t++)w(e,o,n,t)&&r++;return r},x=new Set,y=()=>{const e=Array(9).fill().map(()=>Array(9).fill(""));M(e,11);const o=C(e);if(!o)return y();const n=G(o,45),r=JSON.stringify(n);if(x.has(r))return y();if(x.size>10){const t=x.keys().next().value;x.delete(t)}return x.add(r),n},M=(e,o)=>{const n=[];for(let t=0;t<81;t++)n.push([Math.floor(t/9),t%9]);k(n);let r=0;for(;r<o&&n.length;){const[t,s]=n.pop();if(e[t][s]===""){const i=k([1,2,3,4,5,6,7,8,9]);for(const l of i)if(w(e,t,s,l)){e[t][s]=l,r++;break}}}return r===o},k=e=>{for(let o=e.length-1;o>0;o--){const n=Math.floor(Math.random()*(o+1));[e[o],e[n]]=[e[n],e[o]]}return e},G=(e,o)=>{const n=$(e),r=[];for(let s=0;s<81;s++)r.push([Math.floor(s/9),s%9]);k(r);let t=0;for(;t<o&&r.length;){const[s,i]=r.pop();if(n[s][i]!==""){const l=n[s][i];n[s][i]="";const h=$(n);j(h)===1?t++:n[s][i]=l}}return n},j=(e,o=0)=>{for(let n=0;n<9;n++)for(let r=0;r<9;r++)if(!e[n][r]){for(let t=1;t<=9&&o<2;t++)w(e,n,r,t)&&(e[n][r]=t,o=j(e,o),e[n][r]="");return o}return o+1},H=()=>{const[e,o]=p.useState(()=>y()),[n,r]=p.useState(()=>e.map(a=>[...a])),[t,s]=p.useState(!1),i=p.useRef(0),l=p.useCallback((a,u,c)=>{const f=parseInt(c);(c===""||f>=1&&f<=9)&&r(b=>{const m=b.map(O=>[...O]);return m[a][u]=c===""?"":f,m})},[]),h=p.useCallback(async()=>{const a=Date.now();if(!(a-i.current<1e3)){i.current=a,s(!0);try{const u=await new Promise(c=>{setTimeout(()=>{c(y())},0)});o(u),r(u.map(c=>[...c]))}finally{s(!1)}}},[]),B=p.useCallback(()=>{const a=C(n);a?r(a):alert("No valid solution found.")},[n]);return d.jsxs(R,{children:[d.jsx("h2",{children:"Sudoku Game"}),t&&d.jsx(P,{children:d.jsx(N,{})}),d.jsx(E,{$disabled:t,children:n.map((a,u)=>a.map((c,f)=>{const b=e[u][f]!=="";return d.jsx(T,{type:"text",value:c||"",readOnly:b||t,onChange:m=>l(u,f,m.target.value),$readOnly:b},`${u}-${f}`)}))}),d.jsxs("div",{children:[d.jsx(z,{onClick:h,disabled:t,children:t?"Generating...":"New Sudoku"}),d.jsx(z,{onClick:B,disabled:t,children:"Solve"})]})]})},I=A`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,N=g.div`
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    border-top: 4px solid #007bff;
    width: 40px;
    height: 40px;
    animation: ${I} 1s linear infinite;
`,P=g.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`,R=g.div`
    max-width: 300px;
    margin: 20px auto;
    padding: 15px;
    /* background: #f4f4f4; */
    border-radius: 8px;
    text-align: center;
    position: relative;
`,E=g.div`
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    gap: 1px;
    margin: 15px auto;
    /* background: #ccc; */
    border: 2px solid #333;
    opacity: ${e=>e.$disabled?.7:1};
    pointer-events: ${e=>e.$disabled?"none":"auto"};
`,T=g.input.attrs(({$readOnly:e})=>({readOnly:e}))`
    width: 100%;
    aspect-ratio: 1;
    text-align: center;
    font-size: 12px;
    /* font-weight: bold; */
    background: ${e=>e.$readOnly?"#eee":"#fff"};
    color: ${e=>e.$readOnly?"#333":"#000"};
    border: 1px solid #ccc;
    padding: 0;

    &:focus {
        border: 1px solid #007bff;
        outline: none;
        background: ${e=>e.$readOnly?"#eee":"#fff"};
    }
`,z=g.button`
    margin: 8px;
    padding: 8px 12px;
    font-size: 14px;
    background: ${e=>e.disabled?"#ccc":"#007bff"};
    border: none;
    border-radius: 4px;
    color: white;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    transition: background 0.2s;

    &:hover {
        background: ${e=>e.disabled?"#ccc":"#0056b3"};
    }

    &:active {
        transform: ${e=>e.disabled?"none":"scale(0.98)"};
    }
`;export{H as default};
