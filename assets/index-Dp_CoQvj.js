import{d as n,r as s,j as e,N as d}from"./index-DMzq47q3.js";import{M as m}from"./index-CySgmHQd.js";import{C as p}from"./index-CxR6oVuu.js";const a={Wrapper:n.div`
        display: flex;
        justify-content: center;
    `,Heading:n.h1`
        margin-bottom: 30px;
    `,Main:n.div`
        width: 100%;
        max-width: 1440px;
    `,LastUpdated:n.div`
        margin-bottom: 30px;
    `,SearchProjectWrapper:n.div`
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
    `,ProjectList:n.ol`
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
    `},t=[{name:"Accordion",link:"/accordion"},{name:"Avataar",link:"/avataar"},{name:"Calculator",link:"/calculator"},{name:"Calendar",link:"/calendar"},{name:"Canvas Animation",link:"/canvasAnimation"},{name:"Convert Metrics",link:"/convertMetrics"},{name:"Dictionary",link:"/dictionary"},{name:"Digital Clock",link:"/digitalClock"},{name:"Dynamic Tabs",link:"/dynamicTabs"},{name:"Github Profile Finder",link:"/githubProfileFinder"},{name:"Hello World",link:"/helloWorld"},{name:"HTML Colors",link:"/htmlColors"},{name:"Image Slider",link:"/imageSlider"},{name:"Jokes Generator",link:"/jokesGenerator"},{name:"LeetSpeak",link:"/leetSpeak"},{name:"Lyrics Finder",link:"/lyricsFinder"},{name:"Memes Generator",link:"/memesGenerator"},{name:"Modal Component",link:"/modalComponent"},{name:"Movie Search",link:"/movieSearch"},{name:"Movie Trailer",link:"/movieTrailer"},{name:"MUI Form",link:"/muiForm"},{name:"Paint App",link:"/paintApp"},{name:"Password Generator",link:"/passwordGenerator"},{name:"QR Code Generator",link:"/qrcodeGenerator"},{name:"Quiz App",link:"/quizApp"},{name:"Random Quotes",link:"/randomQuotes"},{name:"Rock Paper Scissor",link:"/rockPaperScissor"},{name:"Scroll Progress Indicator",link:"/scrollProgressIndicator"},{name:"Scroll To",link:"/scrollTo"},{name:"Search Autocomplete",link:"/searchAutoComplete"},{name:"Sorting",link:"/sorting"},{name:"Star Rating",link:"/starRating"},{name:"Sudoku",link:"/sudoku"},{name:"Task Scheduler",link:"/taskScheduler"},{name:"Tic Tac Toe",link:"/ticTacToe"},{name:"Todo List",link:"/todoList"},{name:"Toggle Theme",link:"/toggleTheme"},{name:"Unicode Explorer",link:"/unicodeExplorer"},{name:"Weather App",link:"/weatherApp"},{name:"Word Meaning",link:"/wordMeaning"},{name:"World Time Zones",link:"/worldTimeZones"}],x=()=>{const[o,i]=s.useState(""),c=r=>{i(r.target.value)},l=t.filter(r=>r.name.toLowerCase().includes(o.toLowerCase()));return e.jsx(a.Wrapper,{children:e.jsxs(a.Main,{children:[e.jsxs(a.SearchProjectWrapper,{children:[e.jsx("input",{type:"text",value:o,onChange:c,placeholder:"Search your project here"}),e.jsx("div",{className:"searchIconWrapper",children:e.jsx(p,{size:20,className:"icon"})}),o.length>0&&e.jsx("div",{className:"clearIconWrapper",onClick:()=>i(""),children:e.jsx(m,{size:20,className:"icon clear"})})]}),e.jsxs(a.Heading,{children:["List of Projects - ",t.length]}),e.jsx(a.ProjectList,{reversed:!0,children:l.length===0?e.jsx("li",{style:{color:"red",listStyle:"none"},children:"No project found"}):[...l].reverse().map(r=>e.jsx("li",{children:e.jsx(d,{to:r.link,children:r.name})},r.name))})]})})};export{x as default};
