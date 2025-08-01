import{G as i,d as o,r as s,j as e,N as d}from"./index-CQYZLQng.js";function p(r){return i({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"},child:[]}]})(r)}const a={Wrapper:o.div`
        display: flex;
        justify-content: center;
    `,Heading:o.h1`
        margin-bottom: 30px;
    `,Main:o.div`
        width: 100%;
        max-width: 1440px;
    `,LastUpdated:o.div`
        margin-bottom: 30px;
    `,SearchProjectWrapper:o.div`
        position: relative;
        height: 50px;
        border: 1px solid #333;
        border-radius: 6px;
        overflow: hidden;
        margin-bottom: 30px;

        input {
            width: 100%;
            height: 100%;
            padding-left: 50px;
            padding-right: 50px;
            border: none;
            outline: none;
            background-color: inherit;
            color: #aaa;
        }

        .searchIconWrapper,
        .clearIconWrapper {
            /* border: 1px solid #111; */
            /* background-color: #fff; */
            position: absolute;
            margin: auto;
            top: 0;
            bottom: 0;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;

            .icon {
                color: #fff;

                &.clear {
                    color: orangered;
                }
            }
        }

        .searchIconWrapper {
            left: 0;
        }

        .clearIconWrapper {
            right: 0;
            cursor: pointer;
        }
    `,ProjectList:o.ol`
        /* border: 1px solid #f00; */
        display: flex;
        flex-wrap: wrap;
        gap: 50px;
        margin-left: 30px;

        li {
            color: #666;

            a {
                color: #333;
                text-decoration: none;

                &:hover {
                    color: #fff;
                }
            }
        }
    `};function h(r){return i({attr:{version:"1.1",id:"search",x:"0px",y:"0px",viewBox:"0 0 24 24",style:"enable-background:new 0 0 24 24;"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:`M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
		c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
		 M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
		z`},child:[]}]}]})(r)}const x=[{name:"Avataars",link:"/avataars"},{name:"Accordion",link:"/accordion"},{name:"Hello World",link:"/hello-world"}],f=()=>{const[r,n]=s.useState(""),l=t=>{n(t.target.value)},c=x.filter(t=>t.name.toLowerCase().includes(r.toLowerCase()));return e.jsx(a.Wrapper,{children:e.jsxs(a.Main,{children:[e.jsxs(a.SearchProjectWrapper,{children:[e.jsx("input",{type:"text",value:r,onChange:l,placeholder:"search your project here"}),e.jsx("div",{className:"searchIconWrapper",children:e.jsx(h,{size:20,className:"icon"})}),r.length>0&&e.jsx("div",{className:"clearIconWrapper",onClick:()=>n(""),children:e.jsx(p,{size:20,className:"icon clear"})})]}),e.jsx(a.Heading,{children:"List of Projects"}),e.jsx(a.ProjectList,{reversed:!0,children:c.length===0?e.jsx("li",{style:{color:"red",listStyle:"none"},children:"No project found"}):c.map(t=>e.jsx("li",{children:e.jsx(d,{to:t.link,children:t.name})},t.name))})]})})};export{f as default};
