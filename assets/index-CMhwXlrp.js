import{G as c,d as a,r as d,j as e,N as p}from"./index-cJQFeIK4.js";function m(n){return c({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"},child:[]}]})(n)}const o={Wrapper:a.div`
        display: flex;
        justify-content: center;
    `,Heading:a.h1`
        margin-bottom: 30px;
    `,Main:a.div`
        width: 100%;
        max-width: 1440px;
    `,LastUpdated:a.div`
        margin-bottom: 30px;
    `,SearchProjectWrapper:a.div`
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
    `,ProjectList:a.ol`
        /* border: 1px solid #f00; */
        display: flex;
        flex-wrap: wrap;
        gap: 50px;
        margin-left: 30px;

        li {
            color: #aaa;

            a {
                color: #666;
                text-decoration: none;

                &:hover {
                    color: #fff;
                }
            }
        }
    `};function h(n){return c({attr:{version:"1.1",id:"search",x:"0px",y:"0px",viewBox:"0 0 24 24",style:"enable-background:new 0 0 24 24;"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:`M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
		c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
		 M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
		z`},child:[]}]}]})(n)}const l=[{name:"Accordion",link:"/accordion"},{name:"Avataar",link:"/avataar"},{name:"Calculator",link:"/calculator"},{name:"Calendar",link:"/calendar"},{name:"Canvas Animation",link:"/canvasAnimation"},{name:"Convert Metrics",link:"/convertMetrics"},{name:"Dictionary",link:"/dictionary"},{name:"Digital Clock",link:"/digitalClock"},{name:"Dynamic Tabs",link:"/dynamicTabs"},{name:"Github Profile Finder",link:"/githubProfileFinder"},{name:"Hello World",link:"/helloWorld"},{name:"HTML Colors",link:"/htmlColors"},{name:"Image Slider",link:"/imageSlider"},{name:"Jokes Generator",link:"/jokesGenerator"},{name:"LeetSpeak",link:"/leetSpeak"},{name:"Lyrics Finder",link:"/lyricsFinder"},{name:"Memes Generator",link:"/memesGenerator"},{name:"Modal Component",link:"/modalComponent"},{name:"Movie Search",link:"/movieSearch"},{name:"Movie Trailer",link:"/movieTrailer"},{name:"MUI Form",link:"/muiForm"},{name:"Paint App",link:"/paintApp"},{name:"Password Generator",link:"/passwordGenerator"},{name:"QR Code Generator",link:"/qrcodeGenerator"},{name:"Quiz App",link:"/quizApp"},{name:"Random Quotes",link:"/randomQuotes"},{name:"Rock Paper Scissor",link:"/rockPaperScissor"},{name:"Scroll Progress Indicator",link:"/scrollProgressIndicator"},{name:"Scroll To",link:"/scrollTo"},{name:"Search Autocomplete",link:"/searchAutoComplete"},{name:"Sorting",link:"/sorting"},{name:"Star Rating",link:"/starRating"},{name:"Sudoku",link:"/sudoku"},{name:"Task Scheduler",link:"/taskScheduler"},{name:"Tic Tac Toe",link:"/ticTacToe"},{name:"Todo List",link:"/todoList"},{name:"Toggle Theme",link:"/toggleTheme"},{name:"Unicode Explorer",link:"/unicodeExplorer"},{name:"Weather App",link:"/weatherApp"},{name:"Word Meaning",link:"/wordMeaning"},{name:"World Time Zones",link:"/worldTimeZones"}],g=()=>{const[n,i]=d.useState(""),s=r=>{i(r.target.value)},t=l.filter(r=>r.name.toLowerCase().includes(n.toLowerCase()));return e.jsx(o.Wrapper,{children:e.jsxs(o.Main,{children:[e.jsxs(o.SearchProjectWrapper,{children:[e.jsx("input",{type:"text",value:n,onChange:s,placeholder:"Search your project here"}),e.jsx("div",{className:"searchIconWrapper",children:e.jsx(h,{size:20,className:"icon"})}),n.length>0&&e.jsx("div",{className:"clearIconWrapper",onClick:()=>i(""),children:e.jsx(m,{size:20,className:"icon clear"})})]}),e.jsxs(o.Heading,{children:["List of Projects - ",l.length]}),e.jsx(o.ProjectList,{reversed:!0,children:t.length===0?e.jsx("li",{style:{color:"red",listStyle:"none"},children:"No project found"}):[...t].reverse().map(r=>e.jsx("li",{children:e.jsx(p,{to:r.link,children:r.name})},r.name))})]})})};export{g as default};
