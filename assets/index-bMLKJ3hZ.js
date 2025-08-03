import{d as b,r as m,j as a}from"./index-DIGs8dZ3.js";const j=b.div`
    /* border: 1px solid #f00; */
    max-width: 1440px;
    margin: auto;
    padding: 50px;

    .heading {
        text-align: center;
    }

    .subheading {
        margin-top: 50px;
        margin-bottom: 5px;
        text-decoration: underline;
    }

    .animation {
        border: 1px solid rgba(255, 255, 255, 0.1);
        position: relative;
        height: 500px;
        overflow: hidden;
    }

    @media (width<500px) {
        padding: 15px;
    }
`,P=b.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 30px;

    .name {
        cursor: pointer;
        border: 1px solid rgba(255, 255, 255, 0.1);
        padding: 5px 15px;
        flex: 1 1 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

        &.active {
            background-color: #333;
        }

        &:hover {
            background-color: #222;
        }
    }
`,z=b.canvas`
    width: 100%;
    height: 100%;
    background-color: #000;
    display: block;
`,F=()=>{const h=m.useRef(null),s=m.useRef(null);return m.useEffect(()=>{const t=h.current,i=t.getContext("2d");t.width=window.innerWidth,t.height=window.innerHeight;class n{constructor(r,f,x,g){this.x=r,this.y=f,this.radius=x,this.color=g;const d=1+Math.random()*3;this.dx=Math.random()<.5?-d:d,this.dy=Math.random()<.5?-d:d}draw(r){r.beginPath(),r.arc(this.x,this.y,this.radius,0,Math.PI*2),r.fillStyle=this.color,r.fill()}update(r,f,x){(this.x+this.radius>f||this.x-this.radius<0)&&(this.dx=-this.dx),(this.y+this.radius>x||this.y-this.radius<0)&&(this.dy=-this.dy),this.x+=this.dx,this.y+=this.dy,this.draw(r)}}const e=[];for(let w=0;w<20;w++){const r=Math.floor(Math.random()*30)+15,f=Math.random()*(t.width-r*2)+r,x=Math.random()*(t.height-r*2)+r;e.push(new n(f,x,r,"#f00"))}const v=()=>{i.clearRect(0,0,t.width,t.height),e.forEach(w=>w.update(i,t.width,t.height)),s.current=requestAnimationFrame(v)};v();const y=()=>{t.width=window.innerWidth,t.height=window.innerHeight};return window.addEventListener("resize",y),()=>{window.removeEventListener("resize",y),cancelAnimationFrame(s.current),i.clearRect(0,0,t.width,t.height)}},[]),a.jsx(z,{ref:h})},k=b.canvas`
    width: 100%;
    height: 100%;
    display: block;
    background-color: #000;
`,S=b.div`
    position: absolute;
    top: 10px;
    left: calc(50% - 50px);
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #fff;
    color: #000;
    border-radius: 3px;
    padding: 0 15px;
    cursor: default;
`,E=()=>{const h=m.useRef(null),s=m.useRef(null),[t,i]=m.useState(0);return m.useEffect(()=>{const n=h.current,e=n.getContext("2d");n.width=window.innerWidth,n.height=window.innerHeight,e.globalCompositeOperation="destination-over";const v=["source-over","source-atop","source-in","source-out","destination-over","destination-atop","destination-in","destination-out","lighter","copy","xor"],y=["violet","indigo","blue","green","yellow","orange","red"];let w=0,r=1,f=10,x=Math.floor(Math.random()*15)+5,g=0;const d=()=>{i(Math.floor(w/10));const l=w*r,o=f*Math.sqrt(w),c=o*Math.sin(l)+n.width/2,u=o*Math.cos(l)+n.height/2;e.globalCompositeOperation=v[g];const p=y[Math.floor(Math.random()*y.length)];e.fillStyle=p,e.strokeStyle="pink",e.lineWidth=3,e.beginPath(),e.arc(c,u,x,0,Math.PI*2),e.closePath(),e.fill(),e.stroke(),w++,w>100&&(e.clearRect(0,0,n.width,n.height),x=Math.floor(Math.random()*20)+5,g=Math.floor(Math.random()*v.length),w=1,r=r>=100?1:r+1)},R=()=>{d(),s.current=requestAnimationFrame(R)};return R(),()=>{cancelAnimationFrame(s.current),e.clearRect(0,0,n.width,n.height)}},[]),a.jsxs(a.Fragment,{children:[a.jsx(k,{ref:h}),a.jsx(S,{children:t})]})},W=b.canvas`
    background-color: #000;
    height: 100%;
    display: block;
    width: 100%;
`,A=()=>{const h=m.useRef(null),s=m.useRef(null);return m.useEffect(()=>{const t=h.current,i=t.getContext("2d");t.width=window.innerWidth,t.height=window.innerHeight,i.fillStyle="green",i.lineCap="round",i.shadowColor="rgba(0,0,0,0.7)",i.shadowOffsetX=10,i.shadowOffsetY=5,i.shadowBlur=10;let n=t.width<t.height?t.width*.3:t.height*.3;const e=3,v=2;let y=5,w=.5,r=0,f=`hsl(${Math.random()*360}, 100%, 50%)`,x=Math.floor(Math.random()*5)+5;const g=u=>{if(!(u>e)){i.beginPath(),i.moveTo(0,0),i.lineTo(n,0),i.stroke();for(let p=0;p<v;p++)i.save(),i.translate(n-n/v*p,0),i.scale(w,w),i.save(),i.rotate(r),g(u+1),i.restore(),i.save(),i.rotate(-r),g(u+1),i.restore(),i.restore();i.beginPath(),i.arc(0,n,n*.1,0,Math.PI*2),i.fill()}},d=()=>{i.clearRect(0,0,t.width,t.height),i.save(),i.lineWidth=x,i.strokeStyle=f,i.fillStyle=f,i.translate(t.width/2,t.height/2);for(let u=0;u<y;u++)i.rotate(Math.PI*2/y),g(0);i.restore()},R=()=>{y=Math.floor(Math.random()*5+2),w=Math.random()*.2+.4,r=Math.random()*3.1-3.1,f=`hsl(${Math.random()*360}, 100%, 50%)`,x=Math.floor(Math.random()*5)+5,d()};let l=0,o=.05;r=0;const c=()=>{r+=o,d(),l++,l>150&&(l=0,R()),s.current=setTimeout(c,1e3/33)};return c(),()=>{clearTimeout(s.current),i.clearRect(0,0,t.width,t.height)}},[]),a.jsx(W,{ref:h})},B=b.canvas`
    width: 100%;
    height: 100%;
    display: block;
    background-color: #000;
`,T=()=>{const h=m.useRef(null),s=m.useRef(null);return m.useEffect(()=>{const t=h.current,i=t.getContext("2d"),n="!#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`{|}~¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ØÞßऀःऄअआइईउऊऋऌऍऎएऐऑऒओऔकखगघङचछजझञटठडढणतथदधनऩपफबभमयरऱलळऴवशषसहऺऻ़ऽािीुूृॄॅॆेैॉॊोौ्ॎॏॐ॑॓॔ॕॖॗक़ख़ग़ज़ड़ढ़फ़य़ॠॡॢॣ।॥•०१२३४५६७८९॰ॱॲॳॴॵॶॷॸॹॺॻॼॽॾॿಀಁಂಃ಄ಅಆಇಈಉಊಋಌಎಏಐಒಓಔಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಱಲಳವಶಷಸಹ಼ಽಾಿೀುೂೃೄೆೇೈೊೋೌ್ೕೖೞೠೡೢೣ೦೧೨೩೪೫೬೭೮೯ೱೲ";let e=window.innerWidth,v=window.innerHeight;t.width=e,t.height=v;class y{constructor(c,u,p,M){this.x=c,this.y=u,this.fontSize=p,this.canvasHeight=M,this.text=""}draw(c){this.text=n[Math.floor(Math.random()*n.length)],c.fillText(this.text,this.x*this.fontSize,this.y*this.fontSize),this.y*this.fontSize>this.canvasHeight&&Math.random()>.98?this.y=0:this.y+=1}}class w{constructor(c,u){this.canvasWidth=c,this.canvasHeight=u,this.fontSize=12,this.columns=Math.floor(this.canvasWidth/this.fontSize),this.symbols=[],this.initialize()}initialize(){this.symbols=[];for(let c=0;c<this.columns;c++)this.symbols.push(new y(c,0,this.fontSize,this.canvasHeight))}resize(c,u){this.canvasWidth=c,this.canvasHeight=u,this.columns=Math.floor(this.canvasWidth/this.fontSize),this.initialize()}}const r=new w(t.width,t.height);let f=0;const g=1e3/30;let d=0;const R=o=>{const c=o-f;f=o,d>g?(i.fillStyle="rgba(0, 0, 0, 0.05)",i.fillRect(0,0,t.width,t.height),i.fillStyle="#0aff0a",i.textAlign="center",i.font=r.fontSize+"px monospace",r.symbols.forEach(u=>u.draw(i)),d=0):d+=c,s.current=requestAnimationFrame(R)};R(0);const l=()=>{t.width=window.innerWidth,t.height=window.innerHeight,r.resize(t.width,t.height)};return window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l),cancelAnimationFrame(s.current),i.clearRect(0,0,t.width,t.height)}},[]),a.jsx(B,{ref:h})},N=b.div`
    width: 100%;
    height: 100vh;
    background-color: #000;
    overflow: hidden;
    margin: 0;
    padding: 0;
`,$=b.canvas`
    display: block;
    /* Remove width/height from CSS to prevent scaling issues */
`,H=()=>{const h=m.useRef(null),s=m.useRef([]),t=m.useRef(0),i=m.useRef(null);return m.useEffect(()=>{const n=h.current,e=n.getContext("2d"),v=()=>{n.width=window.innerWidth,n.height=window.innerHeight};v(),window.addEventListener("resize",v);const y=(x,g)=>({x,y:g,size:Math.random()*7+1,speedX:Math.random()*3-1.5,speedY:Math.random()*3-1.5,color:`hsl(${t.current}, 100%, 50%)`}),w=x=>{const g=n.getBoundingClientRect(),d=n.width/g.width,R=n.height/g.height,l=(x.clientX-g.left)*d,o=(x.clientY-g.top)*R;for(let c=0;c<2;c++)s.current.push(y(l,o))};n.addEventListener("mousemove",w);const r=()=>{const x=s.current;for(let g=0;g<x.length;g++){const d=x[g];d.x+=d.speedX,d.y+=d.speedY,d.size>.2&&(d.size-=.1),e.fillStyle=d.color,e.beginPath(),e.arc(d.x,d.y,d.size,0,Math.PI*2),e.fill();for(let R=g+1;R<x.length;R++){const l=x[R],o=d.x-l.x,c=d.y-l.y;Math.sqrt(o*o+c*c)<100&&(e.beginPath(),e.strokeStyle=d.color,e.lineWidth=.2,e.moveTo(d.x,d.y),e.lineTo(l.x,l.y),e.stroke())}}s.current=x.filter(g=>g.size>.3)},f=()=>{e.clearRect(0,0,n.width,n.height),r(),t.current+=2,i.current=requestAnimationFrame(f)};return f(),()=>{window.removeEventListener("resize",v),n.removeEventListener("mousemove",w),cancelAnimationFrame(i.current)}},[]),a.jsx(N,{children:a.jsx($,{ref:h})})},L=b.canvas`
    display: block;
    background-color: #000;
`,X=()=>{const h=m.useRef(null),s=m.useRef([]),t=m.useRef({x:null,y:null,radius:50}),i=m.useRef(null);return m.useEffect(()=>{const n=h.current,e=n.getContext("2d"),v=()=>{n.width=window.innerWidth,n.height=window.innerHeight};v(),window.addEventListener("resize",v);let y=10,w=10;e.fillStyle="#fff",e.font="30px Consolas",e.fillText("a2rp",0,30);const r=e.getImageData(0,0,100,100);class f{constructor(o,c){this.x=o,this.y=c,this.size=3,this.baseX=o,this.baseY=c,this.density=Math.random()*40+5}draw(){e.fillStyle="#fff",e.beginPath(),e.arc(this.x,this.y,this.size,0,Math.PI*2),e.closePath(),e.fill()}update(){let o=t.current.x-this.x,c=t.current.y-this.y,u=Math.sqrt(o*o+c*c);if(u<t.current.radius){let p=(t.current.radius-u)/t.current.radius,M=o/u*p*this.density,C=c/u*p*this.density;this.x-=M,this.y-=C}else{if(this.x!==this.baseX){let p=this.x-this.baseX;this.x-=p/5}if(this.y!==this.baseY){let p=this.y-this.baseY;this.y-=p/5}}}}const x=()=>{s.current=[];for(let l=0;l<r.height;l++)for(let o=0;o<r.width;o++)if(r.data[l*4*r.width+o*4+3]>128){const u=o+y,p=l+w;s.current.push(new f(u*6,p*6))}},g=()=>{for(let l=0;l<s.current.length;l++)for(let o=l;o<s.current.length;o++){let c=s.current[l].x-s.current[o].x,u=s.current[l].y-s.current[o].y,p=Math.sqrt(c*c+u*u);if(p<30){const M=1-p/30;e.strokeStyle=`rgba(255,255,255,${M})`,e.lineWidth=1,e.beginPath(),e.moveTo(s.current[l].x,s.current[l].y),e.lineTo(s.current[o].x,s.current[o].y),e.stroke()}}},d=()=>{e.clearRect(0,0,n.width,n.height),s.current.forEach(l=>{l.draw(),l.update()}),g(),i.current=requestAnimationFrame(d)};x(),d();const R=l=>{const o=n.getBoundingClientRect(),c=n.width/o.width,u=n.height/o.height;t.current.x=(l.clientX-o.left)*c,t.current.y=(l.clientY-o.top)*u};return window.addEventListener("mousemove",R),()=>{window.removeEventListener("resize",v),window.removeEventListener("mousemove",R),cancelAnimationFrame(i.current)}},[]),a.jsx(L,{ref:h})},Y=b.canvas`
    background-color: #000;
    width: 100%;
    height: 100vh;
    display: block;
`,I=()=>{const h=m.useRef(null),s=m.useRef([]),t=m.useRef(null),i=1e3;return m.useEffect(()=>{const n=h.current,e=n.getContext("2d"),v=()=>{n.width=window.innerWidth,n.height=window.innerHeight};v(),window.addEventListener("resize",v);class y{constructor(){this.x=Math.random()*n.width,this.y=0,this.speed=0,this.velocity=Math.random()*3.5,this.size=Math.random()*1.5+1}update(){let x=2.5-this.speed+this.velocity;this.y+=x,this.y>n.height&&(this.y=0,this.x=Math.random()*n.width)}draw(){e.beginPath(),e.fillStyle="white",e.arc(this.x,this.y,this.size,0,Math.PI*2),e.fill()}}(()=>{s.current=[];for(let f=0;f<i;f++)s.current.push(new y)})();const r=()=>{e.globalAlpha=.05,e.fillStyle="rgb(0,0,0)",e.fillRect(0,0,n.width,n.height);for(let f=0;f<s.current.length;f++)s.current[f].update(),s.current[f].draw();t.current=requestAnimationFrame(r)};return r(),()=>{window.removeEventListener("resize",v),cancelAnimationFrame(t.current),e.clearRect(0,0,n.width,n.height)}},[]),a.jsx(Y,{ref:h})},O=()=>{const[h,s]=m.useState("Bouncing Balls");return a.jsxs(j,{children:[a.jsx("h1",{className:"heading",children:"Canvas Animation"}),a.jsxs(P,{children:[a.jsx("div",{className:`name ${h==="Bouncing Balls"?"active":""}`,onClick:()=>s("Bouncing Balls"),children:"Bouncing Balls"}),a.jsx("div",{className:`name ${h==="Fibonacci Flower"?"active":""}`,onClick:()=>s("Fibonacci Flower"),children:"Fibonacci Flower"}),a.jsx("div",{className:`name ${h==="Fractal Canvas"?"active":""}`,onClick:()=>s("Fractal Canvas"),children:"Fractal Canvas"}),a.jsx("div",{className:`name ${h==="Matrix Rain"?"active":""}`,onClick:()=>s("Matrix Rain"),children:"Matrix Rain"}),a.jsx("div",{className:`name ${h==="Particles Canvas"?"active":""}`,onClick:()=>s("Particles Canvas"),children:"Particles Canvas"}),a.jsx("div",{className:`name ${h==="Particle Text"?"active":""}`,onClick:()=>s("Particle Text"),children:"Particle Text"}),a.jsx("div",{className:`name ${h==="Pixel Rain"?"active":""}`,onClick:()=>s("Pixel Rain"),children:"Pixel Rain"})]}),h==="Bouncing Balls"&&a.jsx("div",{children:a.jsx("div",{className:"animation",children:a.jsx(F,{})})},"BouncingBalls"),h==="Fibonacci Flower"&&a.jsx("div",{children:a.jsx("div",{className:"animation",children:a.jsx(E,{})})},"FibonacciFlower"),h==="Fractal Canvas"&&a.jsx("div",{children:a.jsx("div",{className:"animation",children:a.jsx(A,{})})},"FractalCanvas"),h==="Matrix Rain"&&a.jsx("div",{children:a.jsx("div",{className:"animation",children:a.jsx(T,{})})},"MatrixMain"),h==="Particles Canvas"&&a.jsx("div",{children:a.jsx("div",{className:"animation",children:a.jsx(H,{})})},"PracticlesCanvas"),h==="Particle Text"&&a.jsx("div",{children:a.jsx("div",{className:"animation",children:a.jsx(X,{})})},"ParticleText"),h==="Pixel Rain"&&a.jsx("div",{children:a.jsx("div",{className:"animation",children:a.jsx(I,{})})},"PixelRain")]})};export{O as default};
