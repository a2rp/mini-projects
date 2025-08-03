import{d,r as i,j as t}from"./index-DIGs8dZ3.js";const T=d.div`
    max-width: 600px;
    margin: 50px auto;
    padding: 30px;
    border-radius: 10px;
    background: #f5f5f5;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-family: sans-serif;
`,C=d.h2`
    text-align: center;
    margin-bottom: 20px;
`,w=d.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
`,h=d.input`
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border: 2px solid #ccc;
    border-radius: 5px;
    &:focus {
        outline: none;
        border-color: #007bff;
    }
`,a=d.button`
    padding: 10px 15px;
    font-size: 16px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background: #0056b3;
    }
`,A=d.ul`
    list-style: none;
    padding: 0;
`,E=d.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${({$done:n})=>n?"#d4edda":"#fff"};
    border-left: 5px solid ${({$done:n})=>n?"#28a745":"#ccc"};
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
`,y=d.span`
    flex: 1;
    cursor: pointer;
    text-decoration: ${({$done:n})=>n?"line-through":"none"};
    color: ${({$done:n})=>n?"#888":"#000"};
`,I=d.div`
    display: flex;
    gap: 10px;
`,D=d.div`
    text-align: center;
    margin-bottom: 20px;
`,x=d.button`
    margin: 0 5px;
    padding: 6px 12px;
    font-size: 14px;
    border: 1px solid ${({$active:n})=>n?"#007bff":"#ccc"};
    background: ${({$active:n})=>n?"#007bff":"#fff"};
    color: ${({$active:n})=>n?"#fff":"#000"};
    border-radius: 3px;
    cursor: pointer;

    &:hover {
        background: #007bff;
        color: white;
    }
`,z=()=>{const[n,s]=i.useState(()=>{const e=localStorage.getItem("a2rp_todos");return e?JSON.parse(e):[]}),[l,p]=i.useState(""),[b,u]=i.useState(null),[f,g]=i.useState(""),[r,c]=i.useState("all");i.useEffect(()=>{localStorage.setItem("a2rp_todos",JSON.stringify(n))},[n]);const m=()=>{l.trim()&&(s([...n,{id:Date.now(),text:l,done:!1}]),p(""))},j=e=>s(n.filter(o=>o.id!==e)),v=e=>s(n.map(o=>o.id===e?{...o,done:!o.done}:o)),k=(e,o)=>{u(e),g(o)},S=e=>{s(n.map(o=>o.id===e?{...o,text:f}:o)),u(null)},$=n.filter(e=>r==="all"?!0:r==="done"?e.done:!e.done);return t.jsxs(T,{children:[t.jsx(C,{children:"📝 Advanced To-Do List"}),t.jsxs(w,{children:[t.jsx(h,{value:l,onChange:e=>p(e.target.value),placeholder:"Add new task"}),t.jsx(a,{onClick:m,children:"Add"})]}),t.jsxs(D,{children:[t.jsx(x,{onClick:()=>c("all"),$active:r==="all",children:"All"}),t.jsx(x,{onClick:()=>c("done"),$active:r==="done",children:"Done"}),t.jsx(x,{onClick:()=>c("undone"),$active:r==="undone",children:"Pending"})]}),t.jsx(A,{children:$.map(e=>t.jsx(E,{$done:e.done,children:b===e.id?t.jsxs(t.Fragment,{children:[t.jsx(h,{value:f,onChange:o=>g(o.target.value)}),t.jsx(a,{onClick:()=>S(e.id),children:"Save"})]}):t.jsxs(t.Fragment,{children:[t.jsx(y,{onClick:()=>v(e.id),$done:e.done,children:e.text}),t.jsxs(I,{children:[t.jsx(a,{onClick:()=>k(e.id,e.text),children:"Edit"}),t.jsx(a,{onClick:()=>j(e.id),children:"Delete"})]})]})},e.id))})]})};export{z as default};
