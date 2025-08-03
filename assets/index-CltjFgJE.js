import{d as x,r as s,j as a}from"./index-DIGs8dZ3.js";import{d as p}from"./index-DL7BRHVq.js";import{y as f,L as v}from"./index-DEFh_Cvl.js";const G=x.div`
    /* border: 10px solid #00f; */
    display: flex;
    justify-content: center;
    /* height: 100vh; */
`,S=x.div`
    width: 100%;
    max-width: 1440px;
    height: 100vh;
`,w=x.h1`
    text-align: center;
    margin: 15px;
`,L=x.div`
    /* border: 1px solid #f00000; */
    /* padding: 15px; */
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 15px;

    @media (width<800px) {
        grid-template-columns: 1fr;
    }
`,R=x.div`
    border: 1px solid #aaa;
    /* height: calc(100vh - 200px); */
    height: 600px;
    background-color: #000;
    overflow-y: scroll;

    @media (width<800px) {
        height: 200px;
    }

    ul {
        list-style: none;

        li {
            display: flex;
            align-items: center;
            height: 30px;
            position: relative;
            color: #fff;
            cursor: pointer;
            padding: 15px;

            &.active {
                font-weight: bold;
                border-left: 4px solid #00f;
                background-color: rgba(0, 0, 255, 0.1);
            }

            &:hover {
                background-color: #222;
            }

            span.color {
                border: 1px solid #fff;
                position: absolute;
                margin: auto;
                top: 0;
                bottom: 0;
                right: 15px;
                width: 20px;
                height: 20px;
            }
        }
    }
`,N=x.div`
    /* border: 10px solid #f00; */
    padding: 15px;

    @media (width<800px) {
        /* height: 200px; */
    }

    .icon {
        transition: transform 0.2s ease;

        &:hover {
            transform: scale(2);
        }
    }

    input[type="range"] {
        width: 100%;
        margin-bottom: 10px;

        transition: transform 0.2s ease;
        &:hover {
            transform: scale(1.1);
        }
    }

    .color_name {
    }
    .hex_code {
        display: flex;
        gap: 30px;
        align-items: center;
        height: 30px;
    }
    .rgb_color {
        display: flex;
        gap: 30px;
        align-items: center;
        height: 30px;
    }
    .selected_color {
        margin-top: 10px;
        height: 100px;
        border-radius: 8px;
        border: 1px solid #000;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: box-shadow 0.2s ease;

        &:hover {
            box-shadow: 0 0 15px 5px #000;
        }

        span {
            background-color: #000;
            color: #fff;
            padding: 10px 20px;
            border-radius: inherit;
        }
    }
    .slider_wrapper {
        display: flex;
        gap: 15px;
        margin: 30px 0;
    }

    .opaque_color {
        margin-top: 10px;
        height: 100px;
        border-radius: 8px;
        border: 1px solid #000;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: box-shadow 0.2s ease;

        &:hover {
            box-shadow: 0 0 15px 5px #000;
        }

        span {
            background-color: #000;
            color: #fff;
            padding: 10px 20px;
            border-radius: inherit;
        }
    }

    .recent_colors {
        margin-top: 15px;
    }

    .color_history {
        display: flex;
        gap: 15px;
        margin-bottom: 15px;
        align-items: center;

        .color {
            width: 30px;
            height: 30px;
            border: 1px solid #ccc;
            cursor: pointer;
            transition: transform 0.2s ease;

            &:hover {
                transform: scale(1.2);
            }
        }
    }

    .color_input_wrapper {
        margin-top: 15px;
        display: inline-flex;
        align-items: center;
        gap: 15px;

        span {
        }

        input {
            border: none;
            border: 1px solid #000;
            height: 40px;
            outline: none;
            border-radius: 5px;
            width: 100px;
            padding: 0 15px;

            transition: box-shadow 0.2s ease;

            &:hover {
                box-shadow: 0 0 10px 3px #000;
            }
        }
    }
`,A=[{name:"AliceBlue",hex:"#F0F8FF"},{name:"AntiqueWhite",hex:"#FAEBD7"},{name:"Aqua",hex:"#00FFFF"},{name:"Aquamarine",hex:"#7FFFD4"},{name:"Azure",hex:"#F0FFFF"},{name:"Beige",hex:"#F5F5DC"},{name:"Bisque",hex:"#FFE4C4"},{name:"Black",hex:"#000000"},{name:"BlanchedAlmond",hex:"#FFEBCD"},{name:"Blue",hex:"#0000FF"},{name:"BlueViolet",hex:"#8A2BE2"},{name:"Brown",hex:"#A52A2A"},{name:"BurlyWood",hex:"#DEB887"},{name:"CadetBlue",hex:"#5F9EA0"},{name:"Chartreuse",hex:"#7FFF00"},{name:"Chocolate",hex:"#D2691E"},{name:"Coral",hex:"#FF7F50"},{name:"CornflowerBlue",hex:"#6495ED"},{name:"Cornsilk",hex:"#FFF8DC"},{name:"Crimson",hex:"#DC143C"},{name:"Cyan",hex:"#00FFFF"},{name:"DarkBlue",hex:"#00008B"},{name:"DarkCyan",hex:"#008B8B"},{name:"DarkGoldenRod",hex:"#B8860B"},{name:"DarkGray",hex:"#A9A9A9"},{name:"DarkGrey",hex:"#A9A9A9"},{name:"DarkGreen",hex:"#006400"},{name:"DarkKhaki",hex:"#BDB76B"},{name:"DarkMagenta",hex:"#8B008B"},{name:"DarkOliveGreen",hex:"#556B2F"},{name:"DarkOrange",hex:"#FF8C00"},{name:"DarkOrchid",hex:"#9932CC"},{name:"DarkRed",hex:"#8B0000"},{name:"DarkSalmon",hex:"#E9967A"},{name:"DarkSeaGreen",hex:"#8FBC8F"},{name:"DarkSlateBlue",hex:"#483D8B"},{name:"DarkSlateGray",hex:"#2F4F4F"},{name:"DarkSlateGrey",hex:"#2F4F4F"},{name:"DarkTurquoise",hex:"#00CED1"},{name:"DarkViolet",hex:"#9400D3"},{name:"DeepPink",hex:"#FF1493"},{name:"DeepSkyBlue",hex:"#00BFFF"},{name:"DimGray",hex:"#696969"},{name:"DimGrey",hex:"#696969"},{name:"DodgerBlue",hex:"#1E90FF"},{name:"FireBrick",hex:"#B22222"},{name:"FloralWhite",hex:"#FFFAF0"},{name:"ForestGreen",hex:"#228B22"},{name:"Fuchsia",hex:"#FF00FF"},{name:"Gainsboro",hex:"#DCDCDC"},{name:"GhostWhite",hex:"#F8F8FF"},{name:"Gold",hex:"#FFD700"},{name:"GoldenRod",hex:"#DAA520"},{name:"Gray",hex:"#808080"},{name:"Grey",hex:"#808080"},{name:"Green",hex:"#008000"},{name:"GreenYellow",hex:"#ADFF2F"},{name:"HoneyDew",hex:"#F0FFF0"},{name:"HotPink",hex:"#FF69B4"},{name:"IndianRed",hex:"#CD5C5C"},{name:"Indigo",hex:"#4B0082"},{name:"Ivory",hex:"#FFFFF0"},{name:"Khaki",hex:"#F0E68C"},{name:"Lavender",hex:"#E6E6FA"},{name:"LavenderBlush",hex:"#FFF0F5"},{name:"LawnGreen",hex:"#7CFC00"},{name:"LemonChiffon",hex:"#FFFACD"},{name:"LightBlue",hex:"#ADD8E6"},{name:"LightCoral",hex:"#F08080"},{name:"LightCyan",hex:"#E0FFFF"},{name:"LightGoldenRodYellow",hex:"#FAFAD2"},{name:"LightGray",hex:"#D3D3D3"},{name:"LightGrey",hex:"#D3D3D3"},{name:"LightGreen",hex:"#90EE90"},{name:"LightPink",hex:"#FFB6C1"},{name:"LightSalmon",hex:"#FFA07A"},{name:"LightSeaGreen",hex:"#20B2AA"},{name:"LightSkyBlue",hex:"#87CEFA"},{name:"LightSlateGray",hex:"#778899"},{name:"LightSlateGrey",hex:"#778899"},{name:"LightSteelBlue",hex:"#B0C4DE"},{name:"LightYellow",hex:"#FFFFE0"},{name:"Lime",hex:"#00FF00"},{name:"LimeGreen",hex:"#32CD32"},{name:"Linen",hex:"#FAF0E6"},{name:"Magenta",hex:"#FF00FF"},{name:"Maroon",hex:"#800000"},{name:"MediumAquaMarine",hex:"#66CDAA"},{name:"MediumBlue",hex:"#0000CD"},{name:"MediumOrchid",hex:"#BA55D3"},{name:"MediumPurple",hex:"#9370DB"},{name:"MediumSeaGreen",hex:"#3CB371"},{name:"MediumSlateBlue",hex:"#7B68EE"},{name:"MediumSpringGreen",hex:"#00FA9A"},{name:"MediumTurquoise",hex:"#48D1CC"},{name:"MediumVioletRed",hex:"#C71585"},{name:"MidnightBlue",hex:"#191970"},{name:"MintCream",hex:"#F5FFFA"},{name:"MistyRose",hex:"#FFE4E1"},{name:"Moccasin",hex:"#FFE4B5"},{name:"NavajoWhite",hex:"#FFDEAD"},{name:"Navy",hex:"#000080"},{name:"OldLace",hex:"#FDF5E6"},{name:"Olive",hex:"#808000"},{name:"OliveDrab",hex:"#6B8E23"},{name:"Orange",hex:"#FFA500"},{name:"OrangeRed",hex:"#FF4500"},{name:"Orchid",hex:"#DA70D6"},{name:"PaleGoldenRod",hex:"#EEE8AA"},{name:"PaleGreen",hex:"#98FB98"},{name:"PaleTurquoise",hex:"#AFEEEE"},{name:"PaleVioletRed",hex:"#DB7093"},{name:"PapayaWhip",hex:"#FFEFD5"},{name:"PeachPuff",hex:"#FFDAB9"},{name:"Peru",hex:"#CD853F"},{name:"Pink",hex:"#FFC0CB"},{name:"Plum",hex:"#DDA0DD"},{name:"PowderBlue",hex:"#B0E0E6"},{name:"Purple",hex:"#800080"},{name:"RebeccaPurple",hex:"#663399"},{name:"Red",hex:"#FF0000"},{name:"RosyBrown",hex:"#BC8F8F"},{name:"RoyalBlue",hex:"#4169E1"},{name:"SaddleBrown",hex:"#8B4513"},{name:"Salmon",hex:"#FA8072"},{name:"SandyBrown",hex:"#F4A460"},{name:"SeaGreen",hex:"#2E8B57"},{name:"SeaShell",hex:"#FFF5EE"},{name:"Sienna",hex:"#A0522D"},{name:"Silver",hex:"#C0C0C0"},{name:"SkyBlue",hex:"#87CEEB"},{name:"SlateBlue",hex:"#6A5ACD"},{name:"SlateGray",hex:"#708090"},{name:"SlateGrey",hex:"#708090"},{name:"Snow",hex:"#FFFAFA"},{name:"SpringGreen",hex:"#00FF7F"},{name:"SteelBlue",hex:"#4682B4"},{name:"Tan",hex:"#D2B48C"},{name:"Teal",hex:"#008080"},{name:"Thistle",hex:"#D8BFD8"},{name:"Tomato",hex:"#FF6347"},{name:"Turquoise",hex:"#40E0D0"},{name:"Violet",hex:"#EE82EE"},{name:"Wheat",hex:"#F5DEB3"},{name:"White",hex:"#FFFFFF"},{name:"WhiteSmoke",hex:"#F5F5F5"},{name:"Yellow",hex:"#FFFF00"},{name:"YellowGreen",hex:"#9ACD32"}],P=()=>{const[n,m]=s.useState(null),[o,c]=s.useState({r:0,g:0,b:0}),[d,E]=s.useState(1),[g,u]=s.useState([]),[C,D]=s.useState("");s.useEffect(()=>{n!=null&&n.hex&&D(n.hex)},[n]),s.useEffect(()=>{n&&!n.name.startsWith("Custom")&&u(e=>e.find(r=>r.hex===n.hex)?e:[n,...e.slice(0,9)])},[n]),s.useEffect(()=>{n&&u(e=>e.find(r=>r.hex===n.hex)?e:[n,...e.slice(0,9)])},[n]);const B=e=>{console.log(e,"color"),m(e);const t=e.hex.replace("#",""),r=parseInt(t,16),i=r>>16&255,h=r>>8&255,l=r&255;c({r:i,g:h,b:l})},F=(e,t)=>{const r={...o,[e]:parseInt(t)};c(r);const i=`#${((1<<24)+(r.r<<16)+(r.g<<8)+r.b).toString(16).slice(1).toUpperCase()}`,h=b(i)||`Custom (${r.r}, ${r.g}, ${r.b})`;m({name:h,hex:i})},b=e=>{const t=A.find(r=>r.hex.toUpperCase()===e.toUpperCase());return t?t.name:null},y=e=>{navigator.clipboard.writeText(e),f.success(`Copied - ${e}`)},k=()=>(o.r*299+o.g*587+o.b*114)/1e3>128?"#000":"#FFF";return a.jsxs(a.Fragment,{children:[a.jsx(G,{children:a.jsxs(S,{children:[a.jsx(w,{children:"HTML Colors"}),a.jsxs(L,{children:[a.jsx(R,{children:a.jsx("ul",{children:A.map((e,t)=>{var i;const r=((i=n==null?void 0:n.hex)==null?void 0:i.toUpperCase())===e.hex.toUpperCase();return a.jsxs("li",{className:r?"active":"",onClick:()=>B(e),children:[e.name,a.jsx("span",{className:"color",style:{backgroundColor:`${e.name}`}})]},t)})})}),a.jsxs(N,{children:[n?a.jsxs(a.Fragment,{children:[a.jsx("h1",{className:"color_name",children:n.name}),a.jsxs("p",{className:"hex_code",children:[a.jsxs("strong",{children:["Hex Code: ",n.hex]}),a.jsx(p,{title:"copy",className:"icon",style:{cursor:"pointer"},onClick:()=>y(n==null?void 0:n.hex)})]}),a.jsxs("p",{className:"rgb_color",children:[a.jsxs("strong",{children:["RGB: rgb(",o.r,", ",o.g,", ",o.b,")"]}),a.jsx(p,{title:"copy",className:"icon",style:{cursor:"pointer"},onClick:()=>y(`rgb(${o.r}, ${o.g}, ${o.b})`)})]}),a.jsx("div",{className:"selected_color",style:{backgroundColor:`rgb(${o.r}, ${o.g}, ${o.b})`},children:a.jsx("span",{children:"Selected Color"})}),a.jsxs("div",{className:"slider_wrapper",children:[a.jsxs("label",{children:["Red: ",o.r,a.jsx("input",{type:"range",min:"0",max:"255",value:o.r,onChange:e=>F("r",e.target.value)})]}),a.jsxs("label",{children:["Green: ",o.g,a.jsx("input",{type:"range",min:"0",max:"255",value:o.g,onChange:e=>F("g",e.target.value)})]}),a.jsxs("label",{children:["Blue: ",o.b,a.jsx("input",{type:"range",min:"0",max:"255",value:o.b,onChange:e=>F("b",e.target.value)})]}),a.jsxs("label",{children:["Opacity: ",Math.round(d*100),"%",a.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:d,onChange:e=>E(parseFloat(e.target.value))})]})]})]}):a.jsx("p",{children:"Please select a color to view details"}),a.jsx("div",{className:"opaque_color",style:{color:k(),backgroundColor:`rgba(${o.r}, ${o.g}, ${o.b}, ${d})`},children:a.jsx("span",{children:"Color with opacity"})}),a.jsx("h1",{className:"recent_colors",children:"Recent"}),a.jsxs("div",{className:"color_history",children:[g.map((e,t)=>{var r;return a.jsx("div",{className:`color ${((r=n==null?void 0:n.hex)==null?void 0:r.toUpperCase())===e.hex.toUpperCase()?"active":""}`,onClick:()=>B(e),title:e.name,style:{backgroundColor:e.hex}},t)}),a.jsx(p,{title:"copy",className:"icon",style:{cursor:"pointer"},onClick:()=>{const e=JSON.stringify(g,null,2);navigator.clipboard.writeText(e),f.success(`Copied - ${e}`)}})]}),a.jsxs("div",{className:"color_input_wrapper",children:[a.jsx("span",{children:"Input #RRGGBB value"}),a.jsx("input",{className:"color_input",type:"text",value:C,placeholder:"#RRGGBB",style:{borderColor:/^#[0-9A-F]{6}$/i.test(C)?"#ccc":"#000"},onChange:e=>{const t=e.target.value;if(D(t),/^#[0-9A-F]{6}$/i.test(t)){const r=parseInt(t.slice(1),16),i=r>>16&255,h=r>>8&255,l=r&255;c({r:i,g:h,b:l});const j=b(t)||`Custom (${i}, ${h}, ${l})`;m({name:j,hex:t})}}})]})]})]})]})}),a.jsx(v,{})]})};export{P as default};
