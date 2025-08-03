import{r as n,j as e,d as s}from"./index-CRg9Ilwg.js";import{L as I,y as P}from"./index-JJA3EqHf.js";const G=s.div`
    /* border: 1px solid #f00; */
    position: relative;
    /* height: 100%; */
    /* overflow: auto; */
`,L=s.h1`
    text-align: center;
    margin: 30px;
`,g=s.fieldset`
    margin-bottom: 20px;
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    padding: 15px;

    legend {
        padding: 5px;;
    }

    span {
        display: flex;
        gap: 5px;
    }
`,z=s.div`
    padding: 15px 30px;;
    width: 100%;
    text-align: center;
    border-radius: 3px;
    background-color: #123456;
    color: #fff;
    cursor: pointer;
`,F=s.div`
    height: 60px;
    line-height: 60px;
    text-align: center;
    background-color: #333;
    color: #fff;
    font-size: 50px;
    margin: 10px 0;
    cursor: pointer;
    position: relative;
    transition: all 0.2s;

    &:hover {
        background-color: #444;
    }

    &::after {
        content: "Click to copy";
        position: absolute;
        bottom: -50%;
        left: 0;
        right: 0;
        font-size: 12px;
        color: #aaa;
        opacity: 0;
        transition: opacity 0.2s;
    }

    &:hover::after {
        opacity: 1;
    }
`,A=s.div`
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border-radius: 4px;
    z-index: 1000;
    animation: fadeInOut 2s ease-in-out;

    @keyframes fadeInOut {
        0% { opacity: 0; }
        20% { opacity: 1; }
        80% { opacity: 1; }
        100% { opacity: 0; }
    }
`,M=()=>{const[x,j]=n.useState(4),[i,b]=n.useState(!0),[c,m]=n.useState(!0),[l,y]=n.useState(!0),[d,C]=n.useState(!0),[r,u]=n.useState(""),[p,h]=n.useState(""),[k,f]=n.useState(!1),w=()=>{let t="";if(i&&(t+="abcdefghijklmnopqrstuvwxyz"),c&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"),l&&(t+="1234567890"),d&&(t+="~!@#$%^&*()_"),!t){h("Character list not selected."),u("");return}let a="";for(let o=0;o<x;o++){const S=Math.floor(Math.random()*t.length);a+=t[S]}u(a),h("")},v=()=>{!r||p||navigator.clipboard.writeText(r).then(()=>{f(!0),setTimeout(()=>f(!1),2e3),P.success("Copied")}).catch(t=>{h("Failed to copy password")})};return e.jsxs(e.Fragment,{children:[e.jsxs(G,{children:[e.jsx(L,{children:"Password Generator"}),e.jsxs(g,{children:[e.jsx("legend",{children:"Select password length"}),[...Array(17)].map((t,a)=>{const o=a+4;return e.jsxs("span",{children:[e.jsx("input",{type:"radio",name:"length",value:o,checked:x===o,onChange:()=>j(o)}),o]},o)})]}),e.jsxs(g,{children:[e.jsx("legend",{children:"Characters to include"}),e.jsxs("span",{children:[e.jsx("input",{type:"checkbox",checked:i,onChange:()=>b(!i)}),e.jsx("label",{children:"a to z"})]}),e.jsxs("span",{children:[e.jsx("input",{type:"checkbox",checked:c,onChange:()=>m(!c)}),e.jsx("label",{children:"A to Z"})]}),e.jsxs("span",{children:[e.jsx("input",{type:"checkbox",checked:l,onChange:()=>y(!l)}),e.jsx("label",{children:"0 to 9"})]}),e.jsxs("span",{children:[e.jsx("input",{type:"checkbox",checked:d,onChange:()=>C(!d)}),e.jsx("label",{children:"~!@#$%^&*()_"})]})]}),e.jsx(z,{onClick:w,children:"Click here to generate password"}),r.length>0&&e.jsx(F,{onClick:v,style:{color:p?"#f00":"#fff"},children:p||r}),k&&e.jsx(A,{children:"Password copied to clipboard!"})]}),e.jsx(I,{position:"bottom-right",autoClose:2e3})]})};export{M as default};
