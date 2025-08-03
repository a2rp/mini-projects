import{g as I,r as m,R as _,c as z,j as o,l as p,d as a,m as f}from"./index-CRg9Ilwg.js";import{y as O,L}from"./index-JJA3EqHf.js";var g={exports:{}},b,P;function W(){if(P)return b;P=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return b=e,b}var C,S;function A(){if(S)return C;S=1;var e=W();function s(){}function u(){}return u.resetWarningCache=s,C=function(){function t(v,T,k,w,h,x){if(x!==e){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function n(){return t}var l={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:u,resetWarningCache:s};return l.PropTypes=l,l},C}var B;function D(){return B||(B=1,g.exports=A()()),g.exports}var Y=D();const r=I(Y),H=f`
  from { opacity: 0; }
  to { opacity: 1; }
`,N=f`
  from { opacity: 1; }
  to { opacity: 0; }
`,U=f`
  from { transform: translateY(20px); }
  to { transform: translateY(0); }
`,K=f`
  from { transform: translateY(0); }
  to { transform: translateY(20px); }
`,V=a.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${H} 0.3s ease-out forwards;
  
  ${({$isClosing:e})=>e&&p`
    animation: ${N} 0.3s ease-out forwards;
  `}
`,G=a.div`
  background: ${({theme:e})=>e.modalBackground||"#fff"};
  border-radius: ${({theme:e})=>e.modalBorderRadius||"8px"};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  width: ${({width:e})=>e||"90%"};
  max-width: ${({maxWidth:e})=>e||"600px"};
  max-height: 90vh;
  overflow-y: auto;
  animation: ${U} 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  
  ${({$isClosing:e})=>e&&p`
    animation: ${K} 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  `}

  ${({size:e})=>e==="small"&&p`
    max-width: 400px;
  `}

  ${({size:e})=>e==="large"&&p`
    max-width: 800px;
  `}

  ${({fullHeight:e})=>e&&p`
    height: 90vh;
  `}
`,J=a.div`
  padding: 1.5rem 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Q=a.h2`
  margin: 0;
  font-size: 1.5rem;
  color: ${({theme:e})=>e.modalTitleColor||"#333"};
`,X=a.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({theme:e})=>e.modalCloseColor||"#999"};
  transition: color 0.2s;
  
  &:hover {
    color: ${({theme:e})=>e.modalCloseHoverColor||"#333"};
  }
`,Z=a.div`
  padding: 1.5rem;
`,ee=a.div`
  padding: 0 1.5rem 1.5rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`,M=({isOpen:e,onClose:s,title:u,children:t,footerContent:n,size:l,width:v,maxWidth:T,fullHeight:k,closeOnBackdropClick:w=!0,closeOnEscape:h=!0,showCloseButton:x=!0,ariaLabelledby:c,ariaDescribedby:R})=>{const E=m.useRef(null),[d,$]=_.useState(!1);m.useEffect(()=>{var i;return e?(document.body.style.overflow="hidden",(i=E.current)==null||i.focus()):document.body.style.overflow="",()=>{document.body.style.overflow=""}},[e]),m.useEffect(()=>{if(!h)return;const i=q=>{q.key==="Escape"&&e&&!d&&y()};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[e,d,h]);const y=()=>{$(!0),setTimeout(()=>{$(!1),s()},300)},F=i=>{w&&i.target===i.currentTarget&&y()};return!e&&!d?null:z.createPortal(o.jsx(V,{onClick:F,$isClosing:d,role:"dialog","aria-modal":"true","aria-labelledby":c,"aria-describedby":R,children:o.jsxs(G,{ref:E,tabIndex:"-1",size:l,width:v,maxWidth:T,fullHeight:k,$isClosing:d,children:[o.jsxs(J,{children:[o.jsx(Q,{id:c,children:u}),x&&o.jsx(X,{onClick:y,"aria-label":"Close modal",children:"×"})]}),o.jsx(Z,{id:R,children:t}),n&&o.jsx(ee,{children:n})]})}),document.body)};M.propTypes={isOpen:r.bool.isRequired,onClose:r.func.isRequired,title:r.string,children:r.node.isRequired,footerContent:r.node,size:r.oneOf(["small","medium","large"]),width:r.string,maxWidth:r.string,fullHeight:r.bool,closeOnBackdropClick:r.bool,closeOnEscape:r.bool,showCloseButton:r.bool,ariaLabelledby:r.string,ariaDescribedby:r.string};const j=a.button`
    padding: 5px 15px;
`,re=()=>{const[e,s]=m.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{style:{textAlign:"center",marginBottom:"30px"},children:"Modal"}),o.jsxs("div",{children:[o.jsxs("div",{style:{display:"flex",gap:"15px",justifyContent:"center",alignItems:"center"},children:[o.jsx("span",{children:"click this button to open th emodal"}),o.jsx(j,{onClick:()=>s(!0),children:"Open Modal"})]}),o.jsx(M,{isOpen:e,onClose:()=>s(!1),title:"Advanced Modal Example",size:"large",closeOnBackdropClick:!0,closeOnEscape:!0,ariaLabelledby:"modal-title",ariaDescribedby:"modal-description",footerContent:o.jsxs(o.Fragment,{children:[o.jsx(j,{onClick:()=>{O.info("Cancelled!"),s(!1)},children:"Cancel"}),o.jsx(j,{onClick:()=>{O.success("Confirmed!"),s(!1)},children:"Confirm"})]}),children:o.jsxs("div",{id:"modal-description",style:{marginLeft:"30px"},children:[o.jsx("p",{children:"This is an advanced modal component with:"}),o.jsxs("ul",{children:[o.jsx("li",{children:"Animations"}),o.jsx("li",{children:"Accessibility features"}),o.jsx("li",{children:"Flexible sizing options"}),o.jsx("li",{children:"Customizable footer"}),o.jsx("li",{children:"Escape key and backdrop closing"})]})]})})]}),o.jsx(L,{})]})};export{re as default};
