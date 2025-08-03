import{d as t,r as i,j as e}from"./index-CRg9Ilwg.js";import{b as D,c as C}from"./index-C21tAwS_.js";const v=t.div`
    /* border: 1px solid #f00; */
    position: relative;
    height: 100%;
    /* overflow: auto; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 480px;
    margin: auto;
`,M=t.h1`
    text-align: center;
    margin: 30px;
`,S=t.div`
    text-align: center;
    padding: 15px;
    font-family: monospace;
    font-size: 12px;
`;t.b`
    display: inline-block;
    /* height: 20px; */
    line-height: 20px;
    border: 2px solid #00f;
    color: #00f;
    padding: 0 20px;
`;const k=t.table`
    border: 1px solid rgba(255, 255, 255, 0.3);
    text-align: center;
    border-collapse: collapses;
    width: 100%;
`;t.tr`
    border: 1px solid rgba(255, 255, 255, 0.3);
    /* background-color: #111; */
    /* min-height: 50px; */
    color: #fff;

    .wrapper {
        padding: 15px;
    }
`;const N=t.tr`
    /* border: 1px solid rgba(255, 255, 255, 0.3); */
    background-color: #222;
    color: #fff;
    /* height: 30px; */

    td {
        /* border: 1px solid #f00; */
    }
`;t.tr`
    /* border: 1px solid rgba(255, 255, 255, 0.3); */

    background-color: #000;
    color: #fff;
    /* height: 30px; */
    cursor: pointer;
`;const R=t.tr``,F=t.td``,T=t.div`
    border: 1px solid rgba(255, 255, 255, 0.5);
    display: flex;
    align-items: center;
    height: 30px;
`,E=t.div`
    /* border: 1px solid rgba(255, 255, 255, 0.3); */
    flex: 1;
    border-radius: 3px;
    cursor: pointer;
    padding: 5px 0;
    font-size: 12px;

    &:hover {
        background-color: #aaa;
        color: #000;
    }
`,Y=t.tr`
    border: 1px solid rgba(255, 255, 255, 0.3);

    /* background-color: #aaa; */
    /* height: 30px; */
    font-size: 12px;
`,z=t.tr``,u=t.td`
    text-align: center;
    padding: 10px;
    cursor: pointer;

    &.today {
        background-color: #444;
        color: white;
        font-weight: bold;
        border-radius: 50%;
    }

    &.current-month {
        color: #aaa;
    }

    &.other-month {
        color: #ccc;
    }
`,J=()=>{const b=["SUN","MON","TUE","WED","THU","FRI","SAT"],f=["January","February","March","April","May","June","July","August","September","October","November","December"],[o,m]=i.useState(new Date),[l,j]=i.useState(o.getMonth()),[n,h]=i.useState(o.getFullYear());i.useEffect(()=>{const r=setInterval(()=>m(new Date),1e3);return()=>clearInterval(r)},[]);const y=()=>{const r=new Date(n,l,1).getDay(),a=new Date(n,l+1,0).getDate(),g=[];let s=1;for(let c=0;c<6;c++){const d=[];for(let p=0;p<7;p++){const x=c*7+p;if(x>=r&&s<=a){const w=s===o.getDate()&&l===o.getMonth()&&n===o.getFullYear();d.push(e.jsx(u,{className:w?"today current-month":"current-month",children:s},x)),s++}else d.push(e.jsx(u,{},x))}g.push(e.jsx(z,{children:d},c))}return g};return e.jsxs(v,{children:[e.jsx(M,{children:"Calendar"}),e.jsx(S,{children:o.toString()}),e.jsx(k,{children:e.jsxs("tbody",{children:[e.jsxs(N,{children:[e.jsx("td",{colSpan:2,onClick:()=>h(r=>r-1),children:e.jsx(D,{})}),e.jsx("td",{colSpan:3,children:e.jsx("h1",{children:n})}),e.jsx("td",{colSpan:2,onClick:()=>h(r=>r+1),children:e.jsx(C,{})})]}),e.jsx(R,{children:e.jsx(F,{colSpan:7,children:e.jsx(T,{children:f.map((r,a)=>e.jsx(E,{onClick:()=>j(a),children:r.slice(0,3)},a))})})}),e.jsx(Y,{children:b.map(r=>e.jsx("td",{children:r},r))}),y()]})})]})};export{J as default};
