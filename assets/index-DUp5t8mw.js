import{d as l,r as i,j as e}from"./index-DMzq47q3.js";const x=l.div`
    position: relative;
    height: 100%;
    overflow: auto;
`,c=l.h1`
    text-align: center;
    padding: 15px;
`,v=l.div`
    /* border: 3px solid #000; */
    border-radius: 3px;
    margin: 15px;
    /* padding: 15px; */
    height: calc(100% - 120px);
    display: flex;
    flex-direction: column;
`,u=l.div`
    /* border: 1px solid #000; */
    height: calc(50% - 15px);
    padding: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`,h=l.div`
    display: flex;
    gap: 15px;
    font-size: 14px;

    label {
        display: flex;
        align-items: center;
        gap: 5px;
    }
`,g=l.textarea`
    resize: none;
    padding: 10px;
    width: 100%;
    font-family: Consolas, monospace;
    font-size: 12px;
    border: 1px solid #333;
    height: 300px;
    background-color: transparent;
    color: #aaa;
    outline: none;
`,f=l.pre`
    padding: 10px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    overflow: auto;
    white-space: pre-wrap;
    word-wrap: break-word;
    font-family: Consolas, monospace;
    font-size: 12px;
    /* background: #f4f4f4; */
`,j=l.div``,m=l.h1`
    margin-top: 15px;
`,b={level1:"4 8 c d 3 f 9 h 1 j k 1 m n 0 p q 2 5 7 u v w x y 2".split(" "),level2:"4 8 ( [) 3 |= 9 |-| 1 _| X 1 |/| |V 0 |* (_,) 2 5 7 (_) / // >< 7 2".split(" "),level3:"/-\\ |3 ( |) [- |= (_+ # ! _| |< |_ /\\/\\ |\\| [] |> (_,) /2 $ '|' |_| |/ \\/\\/ >< `/ 7_".split(" ")},w="abcdefghijklmnopqrstuvwxyz".split(""),C=()=>{const[t,p]=i.useState(""),[n,o]=i.useState("level1"),d=a=>a.split("").map(s=>{const r=w.indexOf(s.toLowerCase());return r===-1?s:b[n][r]||s}).join("");return i.useEffect(()=>{},[t]),e.jsxs(x,{children:[e.jsx(c,{children:"Leet Speak"}),e.jsx(v,{children:e.jsxs(u,{children:[e.jsxs(h,{children:[e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"level",value:"level1",checked:n==="level1",onChange:()=>o("level1")}),"Level 1"]}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"level",value:"level2",checked:n==="level2",onChange:()=>o("level2")}),"Level 2"]}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"level",value:"level3",checked:n==="level3",onChange:()=>o("level3")}),"Level 3"]})]}),e.jsxs(j,{children:[e.jsx(g,{placeholder:"write here something...",value:t,onChange:a=>p(a.target.value)}),t.trim().length>0&&e.jsxs(e.Fragment,{children:[e.jsx(m,{children:"LEET Output: "}),e.jsx(f,{children:d(t)})]})]})]})})]})};export{C as default};
