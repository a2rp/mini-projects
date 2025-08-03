import{r as s,j as e,d as n}from"./index-DMzq47q3.js";const M="/mini-projects/assets/alarm_993-C6Erl9Fy.wav",F=()=>{const[a,f]=s.useState(new Date),[i,h]=s.useState("00"),[o,j]=s.useState("00"),[l,S]=s.useState(!1),[y,c]=s.useState(""),d=s.useRef(null);s.useEffect(()=>{const t=setInterval(()=>{const r=new Date;if(f(r),l){const w=String(r.getHours()).padStart(2,"0"),A=String(r.getMinutes()).padStart(2,"0");w===i&&A===o?(c("⏰ Alarm Ringing!"),d.current&&d.current.play()):c(`Alarm set for ${i}:${o}`)}else c("")},1e3);return()=>clearInterval(t)},[l,i,o]);const x=t=>String(t).padStart(2,"0"),v=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],b=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return e.jsxs(D,{children:[e.jsx(k,{children:"Digital clock with alarm"}),e.jsxs(C,{children:[e.jsxs(H,{children:[v[a.getDay()],", ",b[a.getMonth()]," ",a.getDate(),", ",a.getFullYear()]}),e.jsxs(p,{children:[e.jsx(g,{children:x(a.getHours())}),e.jsx(u,{children:"Hour"})]}),e.jsxs(p,{children:[e.jsx(g,{children:x(a.getMinutes())}),e.jsx(u,{children:"Minute"})]}),e.jsxs(p,{children:[e.jsx(g,{children:x(a.getSeconds())}),e.jsx(u,{children:"Second"})]})]}),e.jsxs(T,{children:[e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:l,onChange:t=>S(t.target.checked)})," ","Set Alarm"]}),e.jsxs(z,{children:[e.jsxs("div",{className:"hour",children:[e.jsx(m,{value:i,onChange:t=>h(t.target.value),children:Array.from({length:24},(t,r)=>e.jsx("option",{value:String(r).padStart(2,"0"),children:String(r).padStart(2,"0")},r))}),"Hour"]}),e.jsxs("div",{className:"minute",children:[e.jsx(m,{value:o,onChange:t=>j(t.target.value),children:Array.from({length:60},(t,r)=>e.jsx("option",{value:String(r).padStart(2,"0"),children:String(r).padStart(2,"0")},r))}),"Minute"]})]}),e.jsx(N,{children:y})]}),e.jsx("audio",{ref:d,src:M,preload:"auto"})]})},D=n.div`
    font-family: "Courier New", Courier, monospace;
    color: #fff;
    background: #111;
    /* min-height: 100vh; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 0;
`,k=n.h1`
    margin: 15px;
    text-align: center;
`,C=n.div`
    /* border: 1px solid #fff; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* background: #222; */
    border-radius: 12px;
    padding: 15px;
    /* box-shadow: 0 0 20px rgba(255,255,255,0.7); */
    margin-bottom: 30px;
`,p=n.div`
    border: 1px solid #fff;
    border-radius: 5px;;
    text-align: center;
    padding: 15px;
`,g=n.div`
    font-size: 60px;
    font-weight: bold;
    width: 120px;
    text-align: center;
    margin: 10px;
`,u=n.div`
    /* border: 1px solid #f00; */
    text-align: center;
    font-size: 14px;
    color: #0ff;
`,H=n.div`
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
    font-size: 16px;
    color: #ccc;
`,T=n.div`
    background: #333;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;

    label {
        /* border: 1px solid #fff; */
        display: flex;
        gap: 15px;
        align-items: center;
    }
`,m=n.select`
    font-size: 16px;
    margin: 0 5px;
    padding: 5px;
    border-radius: 5px;
`,N=n.div`
    margin-top: 10px;
    font-size: 14px;
    color: #ff0;


`,z=n.div`
    display: flex;
    gap: 15px;

    .hour {}

    .minute {}
`;export{T as AlarmBox,N as AlarmMsg,C as ClockBox,D as Container,H as DateBox,k as Heading,u as Label,m as Select,g as TimeDisplay,p as TimeLabelWrapper,F as default};
