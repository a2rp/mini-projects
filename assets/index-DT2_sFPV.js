import{r as l,j as e,d as o}from"./index-CRg9Ilwg.js";import{p}from"./index-Bt5ibfXI.js";const i=[{id:1,tab:"Procedural",content:"A procedural language follows a sequence of statements or commands in order to achieve a desired output. Each series of steps is called a procedure, and a program written in one of these languages will have one or more procedures within it. Common examples of procedural languages include:<ul><li>C and C++</li><li>Java</li><li>Pascal</li><li>BASIC</li></ul>"},{id:2,tab:"Functional",content:"Rather than focusing on the execution of statements, functional languages focus on the output of mathematical functions and evaluations. Each function–a reusable module of code–performs a specific task and returns a result. The result will vary depending on what data you input into the function. Some popular functional programming languages include:<ul><li>Scala</li><li>Erlang</li><li>Haskell</li><li>Elixir</li><li>F#</li></ul>"},{id:3,tab:"Object-oriented",content:"This type of language treats a program as a group of objects composed of data and program elements, known as attributes and methods. Objects can be reused within a program or in other programs. This makes it a popular language type for complex programs, as code is easier to reuse and scale. Some common object-oriented languages include:<ul><li>Java</li><li>Python</li><li>PHP</li><li>C++</li><li>Ruby</li></ul>"},{id:4,tab:"Scripting",content:"Programmers use scripting languages to automate repetitive tasks, manage dynamic web content, or support processes in larger applications. Some common scripting languages include:<ul><li>PHP</li><li>Ruby</li><li>Python</li><li>bash</li><li>Perl</li><li>Node.js</li></ul>"},{id:5,tab:"Logic",content:"Instead of telling a computer what to do, a logic programming language expresses a series of facts and rules to instruct the computer on how to make decisions. Some examples of logic languages include:<ul><li>Prolog</li><li>Absys</li><li>Datalog</li><li>Alma-0</li></ul>"}],g=o.div`
        padding: 30px;
        font-family: sans-serif;
        background-color: #111;
        color: white;
    `,m=o.div`
        max-width: 600px;
        margin: 0 auto;
    `,f=o.h2`
        font-size: 24px;
        margin-bottom: 20px;
        color: #0ff;
    `,h=o.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 20px;
    `,b=o.div`
    background-color: ${({$active:t})=>t?"#00f":"#000"};
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0044ff;
    }
`,x=o.div`
        font-size: 16px;
        line-height: 1.6;

        ul {
            margin-top: 10px;
            padding-left: 20px;
        }

        li {
            margin-bottom: 5px;
        }
    `,C=()=>{const[t,s]=l.useState(i[0].id),[r,c]=l.useState(i[0].content),d=a=>{s(a);const n=i.find(u=>u.id===a);c((n==null?void 0:n.content)||"")};return e.jsx(g,{children:e.jsxs(m,{children:[e.jsx(f,{children:"Dynamic Tabs: types of programming language"}),e.jsx(h,{children:i.map(a=>e.jsx(b,{$active:t===a.id,onClick:()=>d(a.id),children:a.tab},a.id))}),e.jsx(x,{children:p(r)})]})})};export{C as default};
