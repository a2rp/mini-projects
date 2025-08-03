import{d as p,r as d,j as a}from"./index-CRg9Ilwg.js";const N=p.div`
    position: relative;
    /* height: 100vh; */
    overflow: auto;
`,M=p.h1`
    text-align: center;
`;p.b`
    display: inline-block;
    height: 20px;
    line-height: 20px;
    border: 2px solid #00f;
    color: #00f;
    padding: 0 20px;
`;const A=p.div`
    border: 1px solid #333;
    /* position: absolute;
    left: 20px;
    top: 60px;
    width: 200px;
    height: calc(100% - 100px);
    border-radius: 5px;
    padding: 10px;
    overflow: auto; */
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
    margin: 30px;
    padding: 15px;
`,I=p.div`
    padding: 0 15px;
    border-radius: 3px;
    border: 1px solid #333;
    background-color: ${({$active:s})=>s?"#333":"transparent"};
    color: #aaa;
    cursor: pointer;
    margin: 2px;
    font-weight: bolder;

    &:hover {
        background-color: #333;
        color: #aaa;
    }
`,T=p.div`
    /* position: absolute;
    left: 260px;
    top: 60px;
    width: calc(100% - 300px);
    height: calc(100% - 100px);
    background-color: #eee;
    padding: 10px;
    overflow: auto;
    border-radius: 5px; */
`,x=p.div`
    /* border: 1px solid #fff; */
    position: relative;
    border-radius: 5px;
    /* height: calc(100% - 4px); */
    /* overflow: auto; */
    /* margin: auto; */
    padding: 15px;
`,h=p.div`
    margin: 4px 0;
    display: flex;
    gap: 15px;
    align-items: center;

    span {
        /* border: 1px solid #f00; */
        width: 100px;
    }
`,b=p.input`
    font-size: 12px;
    font-family: Consolas, monospace;
    height: 40px;
    width: 100%;
    max-width: 300px;
    margin: 2px;
    padding-left: 10px;
    border: none;
    outline: none;
    border: 1px solid #333;
    background-color: transparent;
    color: #aaa;
`,U=["squarekilometer","squaremeter","squaremile","squareyard","squarefoot","squareinch","hectare","acre"],L=()=>{const[s,l]=d.useState(U.reduce((o,t)=>({...o,[t]:0}),{})),[c,n]=d.useState(""),i=(o,t)=>{const e=parseFloat(o.target.value)||0;n(t);const r={...s,[t]:e};switch(t){case"squarekilometer":r.squaremeter=e*1e6,r.squaremile=e*.386102,r.squareyard=e*1.196*1e6,r.squarefoot=e*1.076*1e7,r.squareinch=e*1.55*1e9,r.hectare=e*100,r.acre=e*247.105;break;case"squaremeter":r.squarekilometer=e/1e6,r.squaremile=e*3861e-10,r.squareyard=e*1.19599,r.squarefoot=e*10.7639,r.squareinch=e*1550,r.hectare=e/1e4,r.acre=e*247105e-9;break;case"squaremile":r.squarekilometer=e*2.58999,r.squaremeter=e*2.59*1e6,r.squareyard=e*3.098*1e6,r.squarefoot=e*2.788*1e7,r.squareinch=e*4.014*1e9,r.hectare=e*258.999,r.acre=e*640;break;case"squareyard":r.squarekilometer=e*83613e-12,r.squaremeter=e*.836127,r.squaremile=e*32283e-11,r.squarefoot=e*9,r.squareinch=e*1296,r.hectare=e*83613e-9,r.acre=e*206612e-9;break;case"squarefoot":r.squarekilometer=e*92903e-12,r.squaremeter=e*.092903,r.squaremile=e*3587e-11,r.squareyard=e*.111111,r.squareinch=e*144,r.hectare=e*92903e-10,r.acre=e*22957e-9;break;case"squareinch":r.squarekilometer=e*64516e-14,r.squaremeter=e*64516e-8,r.squaremile=e*2491e-13,r.squareyard=e*771605e-9,r.squarefoot=e*.00694444,r.hectare=e*64516e-12,r.acre=e*15942e-11;break;case"hectare":r.squarekilometer=e*.01,r.squaremeter=e*1e4,r.squaremile=e*.00386102,r.squareyard=e*11959.9,r.squarefoot=e*107639,r.squareinch=e*155e5,r.acre=e*2.47105;break;case"acre":r.squarekilometer=e*.00404686,r.squaremeter=e*4046.86,r.squaremile=e*.0015625,r.squareyard=e*4840,r.squarefoot=e*43560,r.squareinch=e*6273e3,r.hectare=e*.404686;break}l(r)};return a.jsxs(x,{children:["Enter value in any of the input boxes below:",a.jsx("br",{}),U.map(o=>a.jsxs(h,{children:[a.jsx(b,{type:"text",value:s[o],onChange:t=>i(t,o)})," ",a.jsx("span",{children:c===o?s[o]:""}),o]},o))]})},V=["bitpersecond","kilobitpersecond","kilobytepersecond","kibibitpersecond","megabitpersecond","megabytepersecond","mebibitpersecond","gigabitpersecond","gigabytepersecond","gibibitpersecond","terabitpersecond","terabytepersecond","tebibitpersecond"],R=()=>{const[s,l]=d.useState(V.reduce((t,e)=>({...t,[e]:0}),{})),[c,n]=d.useState(""),i=(t,e)=>{const r={};switch(t){case"bitpersecond":r.bitpersecond=e,r.kilobitpersecond=e*.001,r.kilobytepersecond=e*.00125,r.kibibitpersecond=e*976563e-9,r.megabitpersecond=e*1e-6,r.megabytepersecond=e*125e-9,r.mebibitpersecond=e*95367e-11,r.gigabitpersecond=e*1e-9,r.gigabytepersecond=e*125e-12,r.gibibitpersecond=e*93132e-14,r.terabitpersecond=e*1e-12,r.terabytepersecond=e*125e-15,r.tebibitpersecond=e*90949e-17;break;case"kilobitpersecond":r.bitpersecond=e*1e3,r.kilobitpersecond=e,r.kilobytepersecond=e*.125,r.kibibitpersecond=e*.976563,r.megabitpersecond=e*.001,r.megabytepersecond=e*125e-6,r.mebibitpersecond=e*953674e-9,r.gigabitpersecond=e*1e-6,r.gigabytepersecond=e*125e-9,r.gibibitpersecond=e*93132e-11,r.terabitpersecond=e*1e-9,r.terabytepersecond=e*125e-12,r.tebibitpersecond=e*90949e-14;break;case"kilobytepersecond":r.bitpersecond=e*8e3,r.kilobitpersecond=e*8,r.kilobytepersecond=e,r.kibibitpersecond=e*7.8125,r.megabitpersecond=e*.008,r.megabytepersecond=e*.001,r.mebibitpersecond=e*.00762939,r.gigabitpersecond=e*8e-6,r.gigabytepersecond=e*1e-6,r.gibibitpersecond=e*74506e-10,r.terabitpersecond=e*8e-9,r.terabytepersecond=e*1e-9,r.tebibitpersecond=e*7276e-12;break}l({...s,...r})},o=(t,e)=>{const r=parseFloat(t.target.value)||0;n(e),i(e,r)};return a.jsxs(x,{children:["Enter value in any of the input boxes below:",a.jsx("br",{}),V.map(t=>a.jsxs(h,{children:[a.jsx(b,{type:"text",value:s[t],onChange:e=>o(e,t)})," ",a.jsx("span",{children:c===t?s[t]:""})," ",t]},t))]})},g=["bit","kilobit","kibibit","megabit","mebibit","gigabit","gibibit","terabit","tebibit","petabit","pebibit","byte","kilobyte","kibibyte","megabyte","mebibyte","gigabyte","gibibyte","terabyte","tebibyte","petabyte","pebibyte"],$={kilobit:.001,kibibit:976563e-9,megabit:1e-6,mebibit:95367e-11,gigabit:1e-9,gibibit:93132e-14,terabit:1e-12,tebibit:90949e-17,petabit:1e-15,pebibit:88818e-20,byte:.125,kilobyte:125e-6,kibibyte:12207e-8,megabyte:125e-9,mebibyte:11921e-11,gigabyte:125e-12,gibibyte:11642e-14,terabyte:125e-15,tebibyte:11369e-17,petabyte:125e-18,pebibyte:11102e-20,bit:1},K=()=>{const[s,l]=d.useState(g.reduce((e,r)=>({...e,[r]:0}),{})),[c,n]=d.useState(""),i=e=>{const r={};for(const u of g)r[u]=e*($[u]??0);return r},o=(e,r)=>{if(isNaN(r))return;const u=1/($[e]||1),m=r*u,z=i(m);l(z)},t=(e,r)=>{const u=parseFloat(e.target.value)||0;n(r),o(r,u)};return a.jsxs(x,{children:["Enter value in any of the input box below:",a.jsx("br",{}),g.map(e=>a.jsxs(h,{children:[a.jsx(b,{type:"text",value:s[e],onChange:r=>t(r,e)}),a.jsx("span",{children:c===e?s[e]:""})," ",e]},e))]})},f=["joule","kilojoule","gramcalorie","kilocalorie","watthour","kilowatthour","electronvolt","britishthermalunit","ustherm","footpound"],W={joule:1,kilojoule:.001,gramcalorie:.239006,kilocalorie:239006e-9,watthour:277778e-9,kilowatthour:27778e-11,electronvolt:6242e15,britishthermalunit:947817e-9,ustherm:94804e-13,footpound:.737562},_={joule:1,kilojoule:1e3,gramcalorie:4.184,kilocalorie:4184,watthour:3600,kilowatthour:36e5,electronvolt:16022e-23,britishthermalunit:1055.06,ustherm:1055e5,footpound:1.355582},B=()=>{const[s,l]=d.useState(f.reduce((t,e)=>({...t,[e]:0}),{})),[c,n]=d.useState(""),i=(t,e)=>{const r=e*(_[t]||1),u={};f.forEach(m=>{u[m]=r*(W[m]||0)}),l(u)},o=(t,e)=>{const r=parseFloat(t.target.value)||0;n(e),i(e,r)};return a.jsxs(x,{children:["Enter value in any of the input box below:",a.jsx("br",{}),f.map(t=>a.jsxs(h,{children:[a.jsx(b,{type:"text",value:s[t],onChange:e=>o(e,t)})," ",a.jsx("span",{children:c===t?s[t]:""})," ",t]},t))]})},k=["hertz","kilohertz","megahertz","gigahertz"],E={hertz:1,kilohertz:1e3,megahertz:1e6,gigahertz:1e9},D=()=>{const[s,l]=d.useState(k.reduce((t,e)=>({...t,[e]:0}),{})),[c,n]=d.useState(""),i=(t,e)=>{const r=e*E[t],u={};k.forEach(m=>{u[m]=r/E[m]}),l(u)},o=(t,e)=>{const r=parseFloat(t.target.value)||0;n(e),i(e,r)};return a.jsxs(x,{children:["Enter value in any of the input box below:",a.jsx("br",{}),k.map(t=>a.jsxs(h,{children:[a.jsx(b,{type:"text",value:s[t],onChange:e=>o(e,t)})," ",a.jsx("span",{children:c===t?s[t]:""})," ",t]},t))]})},H=["milespergallon","milespergallonimperial","kilometerperliter","literper100kilometers"],P=()=>{const[s,l]=d.useState({milespergallon:0,milespergallonimperial:0,kilometerperliter:0,literper100kilometers:0}),[c,n]=d.useState(""),i=(t,e)=>{const r={};switch(t){case"milespergallon":r.milespergallon=e,r.milespergallonimperial=e*1.20095,r.kilometerperliter=e*.425144,r.literper100kilometers=235.215/e;break;case"milespergallonimperial":r.milespergallonimperial=e,r.milespergallon=e*.832674,r.kilometerperliter=e*.354006,r.literper100kilometers=282.481/e;break;case"kilometerperliter":r.kilometerperliter=e,r.milespergallon=e*2.35215,r.milespergallonimperial=e*2.82481,r.literper100kilometers=100/e;break;case"literper100kilometers":r.literper100kilometers=e,r.kilometerperliter=100/e,r.milespergallon=235.215/e,r.milespergallonimperial=282.481/e;break}l(r)},o=(t,e)=>{const r=parseFloat(t.target.value)||0;n(e),i(e,r)};return a.jsxs(x,{children:["Enter value in any of the input box below:",a.jsx("br",{}),H.map(t=>a.jsxs(h,{children:[a.jsx(b,{type:"text",value:s[t],onChange:e=>o(e,t)})," ",a.jsx("span",{children:c===t?s[t]:""})," ",t]},t))]})},y=["kilometre","meter","centimeter","millimetre","micrometres","nanometre","mile","yard","foot","inch","nauticalmile"],G={kilometre:.001,meter:1,centimeter:100,millimetre:1e3,micrometres:1e6,nanometre:1e9,mile:621371e-9,yard:1.09361,foot:3.28084,inch:39.3701,nauticalmile:539957e-9},J={kilometre:1e3,meter:1,centimeter:.01,millimetre:.001,micrometres:1e-6,nanometre:1e-9,mile:1609.34,yard:.9144,foot:.3048,inch:.0254,nauticalmile:1852},Y=()=>{const[s,l]=d.useState(y.reduce((t,e)=>({...t,[e]:0}),{})),[c,n]=d.useState(""),i=(t,e)=>{const r=e*(J[t]||1),u={};y.forEach(m=>{u[m]=r*(G[m]||1)}),l(u)},o=(t,e)=>{const r=parseFloat(t.target.value)||0;n(e),i(e,r)};return a.jsxs(x,{children:["Enter value in any of the input box below:",a.jsx("br",{}),y.map(t=>a.jsxs(h,{children:[a.jsx(b,{type:"text",value:s[t],onChange:e=>o(e,t)}),a.jsx("span",{children:c===t?s[t]:""})," ",t]},t))]})},j=["tonne","kilogram","gram","milligram","microgram","imperialton","uston","stone","pound","ounce"],Z={tonne:.001,kilogram:1,gram:1e3,milligram:1e6,microgram:1e9,imperialton:984207e-9,uston:.00110231,stone:.157473,pound:2.20462,ounce:35.274},O={tonne:1e3,kilogram:1,gram:.001,milligram:1e-6,microgram:1e-9,imperialton:1016.05,uston:907.185,stone:6.35029,pound:.453592,ounce:.0283495},Q=()=>{const[s,l]=d.useState(j.reduce((t,e)=>({...t,[e]:0}),{})),[c,n]=d.useState(""),i=(t,e)=>{const r=e*(O[t]||1),u={};j.forEach(m=>{u[m]=r*Z[m]}),l(u)},o=(t,e)=>{const r=parseFloat(t.target.value)||0;n(e),i(e,r)};return a.jsxs(x,{children:["Enter value in any of the input box below:",a.jsx("br",{}),j.map(t=>a.jsxs(h,{children:[a.jsx(b,{type:"text",value:s[t],onChange:e=>o(e,t)}),a.jsx("span",{children:c===t?s[t]:""})," ",t]},t))]})},v=["degree","gradian","milliradian","minuteofarc","radian","secondofarc"],X={degree:.0174533,gradian:.015708,milliradian:.001,minuteofarc:290888e-9,radian:1,secondofarc:48481e-10},ee={degree:57.2958,gradian:63.662,milliradian:1e3,minuteofarc:3437.75,radian:1,secondofarc:206265},re=()=>{const[s,l]=d.useState(v.reduce((o,t)=>({...o,[t]:0}),{})),[c,n]=d.useState(""),i=(o,t)=>{const e=parseFloat(o.target.value)||0;n(t);const r=e*X[t],u={};v.forEach(m=>{u[m]=r*ee[m]}),l(u)};return a.jsxs(x,{children:["Enter value in any of the input box below:",a.jsx("br",{}),v.map(o=>a.jsxs(h,{children:[a.jsx(b,{className:"planeangle",value:s[o],onChange:t=>i(t,o)}),a.jsx("span",{children:c===o?s[o]:""})," ",o]},o))]})},te=()=>{const[s,l]=d.useState({bar:"",pascal:"",poundpersquareinch:"",standardatmosphere:"",torr:""}),c=n=>{const{id:i,value:o}=n.target,t=parseFloat(o);if(isNaN(t)){l(e=>({...e,[i]:o}));return}switch(i){case"bar":l({bar:o,pascal:t*1e5,poundpersquareinch:t*14.5038,standardatmosphere:t*.986923,torr:t*750.062});break;case"pascal":l({bar:t*1e-5,pascal:o,poundpersquareinch:t*145038e-9,standardatmosphere:t*98692e-10,torr:t*.00750062});break;case"poundpersquareinch":l({bar:t*.0689476,pascal:t*6894.76,poundpersquareinch:o,standardatmosphere:t*.068046,torr:t*51.7149});break;case"standardatmosphere":l({bar:t*1.01325,pascal:t*101325,poundpersquareinch:t*14.6959,standardatmosphere:o,torr:t*760});break;case"torr":l({bar:t*.00133322,pascal:t*133.322,poundpersquareinch:t*.0193368,standardatmosphere:t*.00131579,torr:o});break}};return a.jsxs(x,{children:["Enter value in any of the input boxes below:",a.jsx("br",{}),a.jsxs(h,{children:[a.jsx(b,{id:"bar",className:"pressure",value:s.bar,onChange:c}),a.jsx("span",{id:"bar_span",children:s.bar}),a.jsx("label",{children:"Bar"})]}),a.jsxs(h,{children:[a.jsx(b,{id:"pascal",className:"pressure",value:s.pascal,onChange:c}),a.jsx("span",{id:"pascal_span",children:s.pascal}),a.jsx("label",{children:"Pascal"})]}),a.jsxs(h,{children:[a.jsx(b,{id:"poundpersquareinch",className:"pressure",value:s.poundpersquareinch,onChange:c}),a.jsx("span",{id:"poundpersquareinch_span",children:s.poundpersquareinch}),a.jsx("label",{children:"Pound per square inch"})]}),a.jsxs(h,{children:[a.jsx(b,{id:"standardatmosphere",className:"pressure",value:s.standardatmosphere,onChange:c}),a.jsx("span",{id:"standardatmosphere_span",children:s.standardatmosphere}),a.jsx("label",{children:"Standard atmosphere"})]}),a.jsxs(h,{children:[a.jsx(b,{id:"torr",className:"pressure",value:s.torr,onChange:c}),a.jsx("span",{id:"torr_span",children:s.torr}),a.jsx("label",{children:"Torr"})]})]})},ae=[{name:"Miles per hour",key:"milesperhour"},{name:"Foot per second",key:"footpersecond"},{name:"Meter per second",key:"meterpersecond"},{name:"Kilometer per hour",key:"kilometerperhour"},{name:"Knot",key:"knot"}],oe=()=>{const[s,l]=d.useState({milesperhour:0,footpersecond:0,meterpersecond:0,kilometerperhour:0,knot:0}),c=(n,i)=>{const o=parseFloat(i)||0;let t={};switch(n){case"milesperhour":t={milesperhour:o,footpersecond:o*1.46667,meterpersecond:o*.44704,kilometerperhour:o*1.60934,knot:o*.868976};break;case"footpersecond":t={milesperhour:o*.681818,footpersecond:o,meterpersecond:o*.3048,kilometerperhour:o*1.09728,knot:o*.592484};break;case"meterpersecond":t={milesperhour:o*2.23694,footpersecond:o*3.28084,meterpersecond:o,kilometerperhour:o*3.6,knot:o*1.94384};break;case"kilometerperhour":t={milesperhour:o*.621371,footpersecond:o*.911344,meterpersecond:o*.277778,kilometerperhour:o,knot:o*.539957};break;case"knot":t={milesperhour:o*1.15078,footpersecond:o*1.68781,meterpersecond:o*.514444,kilometerperhour:o*1.852,knot:o};break}l(t)};return a.jsxs(se,{children:[a.jsx(ne,{children:"Enter value in any of the input box below:"}),a.jsx(ie,{children:ae.map(n=>a.jsxs(le,{children:[a.jsx(ce,{type:"number",value:s[n.key],onChange:i=>c(n.key,i.target.value)}),a.jsx(pe,{children:n.name})]},n.key))})]})},se=p.div`
    position: relative;
    border-radius: 5px;
    height: calc(100% - 4px);
    overflow: auto;
`,ne=p.div`
    margin-bottom: 10px;
    font-weight: bold;
`,ie=p.div``,le=p.div`
    margin: 5px 0;
`,ce=p.input`
    /* font-size: 12px;
    font-family: Consolas, monospace;
    height: 25px;
    width: 300px;
    padding-left: 10px; */

        font-size: 12px;
    font-family: Consolas, monospace;
    height: 40px;
    width: 100%;
    max-width: 300px;
    margin: 2px;
    padding-left: 10px;
    border: none;
    outline: none;
    border: 1px solid #333;
    background-color: transparent;
    color: #aaa;
`,pe=p.span`
    margin-left: 10px;
`,de=()=>{const[s,l]=d.useState({celsius:"",fahrenheit:"",kelvin:""}),c=n=>{const{id:i,value:o}=n.target,t=parseFloat(o);if(isNaN(t)){l({celsius:"",fahrenheit:"",kelvin:""});return}i==="celsius"?l({celsius:o,fahrenheit:(t*9/5+32).toFixed(2),kelvin:(t+273.15).toFixed(2)}):i==="fahrenheit"?l({celsius:((t-32)*5/9).toFixed(2),fahrenheit:o,kelvin:((t-32)*5/9+273.15).toFixed(2)}):i==="kelvin"&&l({celsius:(t-273.15).toFixed(2),fahrenheit:((t-273.15)*9/5+32).toFixed(2),kelvin:o})};return a.jsxs(ue,{children:[a.jsx(me,{children:"Temperature Converter"}),a.jsxs(q,{children:[a.jsx(w,{type:"number",id:"celsius",value:s.celsius,onChange:c}),a.jsx(C,{htmlFor:"celsius",children:"Celsius"})]}),a.jsxs(q,{children:[a.jsx(w,{type:"number",id:"fahrenheit",value:s.fahrenheit,onChange:c}),a.jsx(C,{htmlFor:"fahrenheit",children:"Fahrenheit"})]}),a.jsxs(q,{children:[a.jsx(w,{type:"number",id:"kelvin",value:s.kelvin,onChange:c}),a.jsx(C,{htmlFor:"kelvin",children:"Kelvin"})]})]})},ue=p.div`
position: relative;
    border-radius: 5px;
    padding: 15px;
`,me=p.h2`
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: bold;
    text-align: center;
`,q=p.div`
    /* display: flex;
    margin-bottom: 16px; */

     margin: 4px 0;
    display: flex;
    gap: 15px;
    align-items: center;

    span {
        /* border: 1px solid #f00; */
        width: 100px;
    }
`,C=p.label`
    font-size: 14px;
    margin-bottom: 4px;
`,w=p.input`
    /* height: 32px;
    font-size: 14px;
    font-family: Consolas, monospace;
    padding-left: 10px; */

     font-size: 12px;
    font-family: Consolas, monospace;
    height: 40px;
    width: 100%;
    max-width: 300px;
    margin: 2px;
    padding-left: 10px;
    border: none;
    outline: none;
    border: 1px solid #333;
    background-color: transparent;
    color: #aaa;
`,S=[{name:"Nanosecond",key:"nanosecond",toSec:1e-9},{name:"Microsecond",key:"microsecond",toSec:1e-6},{name:"Millisecond",key:"millisecond",toSec:.001},{name:"Second",key:"second",toSec:1},{name:"Minute",key:"minute",toSec:60},{name:"Hour",key:"hour",toSec:3600},{name:"Day",key:"day",toSec:86400},{name:"Week",key:"week",toSec:604800},{name:"Month",key:"month",toSec:2628e3},{name:"Calendar Year",key:"calendaryear",toSec:3154e4},{name:"Decade",key:"decade",toSec:3154e5},{name:"Century",key:"century",toSec:3154e6}],he=()=>{const[s,l]=d.useState(S.reduce((n,i)=>({...n,[i.key]:0}),{})),c=(n,i)=>{const o=parseFloat(n.target.value);if(isNaN(o))return;const t=o*i.toSec,e={};S.forEach(r=>{e[r.key]=t/r.toSec}),l(e)};return a.jsxs(be,{children:[a.jsx(xe,{children:"Time Converter"}),S.map(n=>a.jsxs(ge,{children:[a.jsx(ke,{type:"number",id:n.key,value:s[n.key],onChange:i=>c(i,n)}),a.jsx(fe,{htmlFor:n.key,children:n.name})]},n.key))]})},be=p.div`
 position: relative;
    border-radius: 5px;
    padding: 15px;
`,xe=p.h2`
    text-align: center;
    margin-bottom: 20px;
`,ge=p.div`
 margin: 4px 0;
    display: flex;
    gap: 15px;
    align-items: center;

     span {
        /* border: 1px solid #f00; */
        width: 100px;
    }
`,fe=p.label`
    flex: 1;
    margin-right: 12px;
    line-height: 25px;
`,ke=p.input`
 font-size: 12px;
    font-family: Consolas, monospace;
    height: 40px;
    width: 100%;
    max-width: 300px;
    margin: 2px;
    padding-left: 10px;
    border: none;
    outline: none;
    border: 1px solid #333;
    background-color: transparent;
    color: #aaa;
`,F=[{id:"usliquidgallon",label:"US liquid gallon",factor:3.78541},{id:"usliquidquart",label:"US liquid quart",factor:.946353},{id:"usliquidpint",label:"US liquid pint",factor:.473176},{id:"uslegalcup",label:"US legal cup",factor:.24},{id:"usfluidounce",label:"US fluid ounce",factor:.0295735},{id:"ustablespoon",label:"US tablespoon",factor:.0147868},{id:"usteaspoon",label:"US teaspoon",factor:.00492892},{id:"cubicmeter",label:"Cubic meter",factor:1e3},{id:"liter",label:"Liter",factor:1},{id:"milliliter",label:"Milliliter",factor:.001},{id:"imperialgallon",label:"Imperial gallon",factor:4.54609},{id:"impquart",label:"Imperial quart",factor:1.13652},{id:"imperialpint",label:"Imperial pint",factor:.568261},{id:"imperialcup",label:"Imperial cup",factor:.284131},{id:"fluidounce",label:"Imperial fluid ounce",factor:.0284131},{id:"imperialtablespoon",label:"Imperial tablespoon",factor:.0177582},{id:"imperialteaspoon",label:"Imperial teaspoon",factor:.00591939},{id:"cubicfoot",label:"Cubic foot",factor:28.3168},{id:"cubicinch",label:"Cubic inch",factor:.0163871}],ye=()=>{const[s,l]=d.useState(F.reduce((n,i)=>(n[i.id]="",n),{})),c=(n,i)=>{const o=parseFloat(n.target.value);if(isNaN(o))return;const t=o*i.factor,e={};F.forEach(r=>{e[r.id]=(t/r.factor).toFixed(6)}),l(e)};return a.jsxs(je,{children:[a.jsx(ve,{children:"Volume Converter"}),F.map(n=>a.jsxs(qe,{children:[a.jsx(Ce,{type:"number",value:s[n.id],onChange:i=>c(i,n),placeholder:"0"}),a.jsx(we,{children:n.label})]},n.id))]})},je=p.div`
  /* border: 1px solid #fff; */
    position: relative;
    border-radius: 5px;
    /* height: calc(100% - 4px); */
    /* overflow: auto; */
    /* margin: auto; */
    padding: 15px;
`,ve=p.h2`
    text-align: center;
    margin-bottom: 20px;
`,qe=p.div`
    margin: 4px 0;
    display: flex;
    gap: 15px;
    align-items: center;

    span {
        /* border: 1px solid #f00; */
        width: 100px;
    }
`,Ce=p.input`
   font-size: 12px;
    font-family: Consolas, monospace;
    height: 40px;
    width: 100%;
    max-width: 300px;
    margin: 2px;
    padding-left: 10px;
    border: none;
    outline: none;
    border: 1px solid #333;
    background-color: transparent;
    color: #aaa;
`,we=p.span`
    font-size: 14px;
`,Se=["area","datatransfer","digitalstorage","energy","frequency","fueleconomy","length","mass","planeangle","pressure","speed","temperature","time","volume"],Fe=s=>s.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/^\w/,l=>l.toUpperCase()),Ve=()=>{const[s,l]=d.useState("");return a.jsxs(N,{children:[a.jsx(M,{children:"Convert Metrics"}),a.jsx(A,{children:Se.map(c=>a.jsx(I,{className:c,$active:c===s,onClick:()=>l(c),children:Fe(c)},c))}),a.jsxs(T,{children:[s==="area"&&a.jsx(L,{}),s==="datatransfer"&&a.jsx(R,{}),s==="digitalstorage"&&a.jsx(K,{}),s==="energy"&&a.jsx(B,{}),s==="frequency"&&a.jsx(D,{}),s==="fueleconomy"&&a.jsx(P,{}),s==="length"&&a.jsx(Y,{}),s==="mass"&&a.jsx(Q,{}),s==="planeangle"&&a.jsx(re,{}),s==="pressure"&&a.jsx(te,{}),s==="speed"&&a.jsx(oe,{}),s==="temperature"&&a.jsx(de,{}),s==="time"&&a.jsx(he,{}),s==="volume"&&a.jsx(ye,{}),!s&&a.jsx("h1",{style:{textAlign:"center"},children:"click any one above"})]})]})};export{Ve as default};
