import{G as x,r as d,j as t,d as i}from"./index-DMzq47q3.js";function f(o){return x({attr:{viewBox:"0 0 24 24"},child:[{tag:"polyline",attr:{fill:"none",strokeWidth:"2",points:"7 2 17 12 7 22"},child:[]}]})(o)}function b(o){return x({attr:{viewBox:"0 0 24 24"},child:[{tag:"polyline",attr:{fill:"none",strokeWidth:"2",points:"7 2 17 12 7 22",transform:"matrix(-1 0 0 1 24 0)"},child:[]}]})(o)}const m=i.div`
  padding: 40px;
`,v=i.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  position: relative;
`,j=i.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`,y=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  input {
    margin-right: 10px;
    cursor: pointer;
  }

  label {
    cursor: pointer;
  }
`,k=i.div`
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
`,w=i.div`
  position: relative;
  width: 100%;
`,S=i.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
  transform: translateX(${o=>o.$translate}%);
`,C=i.div`
  min-width: 100%;
  height: 450px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: 48px;
  font-weight: bold;
  color: #fff;
  padding: 20px;
  box-sizing: border-box;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`,p=i.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: none;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  &:hover {
    background: #fff;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,P=i(p)`
  left: 20px;
`,$=i(p)`
  right: 20px;
`,I=i.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  gap: 8px;
`,z=i.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${o=>o.$active?"#333":"#ccc"};
  border: none;
  cursor: pointer;
  padding: 0;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #999;
  }
`,B=()=>{const[o,s]=d.useState(0),[n,u]=d.useState(!1),a=[{id:1018,text:"1"},{id:1015,text:"2"},{id:1019,text:"3"},{id:1016,text:"4"},{id:1020,text:"5"}],l=a.length,h=()=>{s(e=>e===0?l-1:e-1)},c=()=>{s(e=>e===l-1?0:e+1)},g=e=>{s(e)};return d.useEffect(()=>{let e;return n&&(e=setInterval(c,3e3)),()=>{e&&clearInterval(e)}},[n,o]),t.jsx(m,{children:t.jsxs(v,{children:[t.jsx(j,{children:"Image Slider"}),t.jsxs(y,{children:[t.jsx("input",{id:"imageSliderAutoPlay",type:"checkbox",checked:n,onChange:()=>u(!n)}),t.jsx("label",{htmlFor:"imageSliderAutoPlay",children:"Auto play"})]}),t.jsxs(k,{children:[t.jsxs(w,{children:[t.jsx(S,{$translate:-100*o,children:a.map((e,r)=>t.jsx(C,{style:{backgroundImage:`url(https://picsum.photos/500/450?random=${e.id})`},children:t.jsx("span",{children:e.text})},e.id))}),t.jsx(P,{onClick:h,disabled:n,children:t.jsx(b,{})}),t.jsx($,{onClick:c,disabled:n,children:t.jsx(f,{})})]}),t.jsx(I,{children:a.map((e,r)=>t.jsx(z,{$active:r===o,onClick:()=>g(r),"aria-label":`Go to slide ${r+1}`},r))})]})]})})};export{B as default};
