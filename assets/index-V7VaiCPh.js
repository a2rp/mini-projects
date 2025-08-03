import{j as e,d as r,r as m,C as b}from"./index-CRg9Ilwg.js";import{a as I}from"./index-NIGUFBhG.js";import{y as u}from"./index-JJA3EqHf.js";import{T as C}from"./TextField-Bd8QoaB1.js";import{B as T}from"./Button-CV_-IQF3.js";import"./Select-ujX37O06.js";import"./FormLabel-B2T60qdc.js";const M=r.div`
    border: 1px solid #ddd;
    padding: 20px;
    display: flex;
    gap: 20px;
    border-radius: 10px;
    background: #fafafa;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
`,N=r.div`
    width: 120px;
    flex-shrink: 0;
`,A=r.img`
    width: 100%;
    border-radius: 8px;
`,D=r.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
`,i=r.div`
    margin: 4px 0;
    display: flex;
`,a=r.span`
    font-weight: bold;
    margin-right: 5px;
    min-width: 80px;
`,o=r.span`
    color: #555;
`,R=r.div`
    margin-top: 10px;
    color: #666;
    font-size: 14px;
    line-height: 1.4;
`,P=s=>{var d,x;const l=((d=s.Summary)==null?void 0:d.replace(/<[^>]*>?/gm,""))||"No description available";return e.jsxs(M,{children:[e.jsx(N,{children:e.jsx(A,{src:s.Poster,alt:s.Title})}),e.jsxs(D,{children:[e.jsxs(i,{children:[e.jsx(a,{children:"Title:"}),e.jsx(o,{children:s.Title})]}),e.jsxs(i,{children:[e.jsx(a,{children:"Year:"}),e.jsx(o,{children:s.Year})]}),e.jsxs(i,{children:[e.jsx(a,{children:"Type:"}),e.jsx(o,{children:s.Type})]}),e.jsxs(i,{children:[e.jsx(a,{children:"Status:"}),e.jsx(o,{children:s.Status})]}),e.jsxs(i,{children:[e.jsx(a,{children:"Rating:"}),e.jsx(o,{children:s.Rating||"N/A"})]}),e.jsxs(i,{children:[e.jsx(a,{children:"Genres:"}),e.jsx(o,{children:((x=s.Genres)==null?void 0:x.join(", "))||"N/A"})]}),e.jsxs(i,{children:[e.jsx(a,{children:"IMDb ID:"}),e.jsx(o,{children:s.imdbID})]}),e.jsx(R,{children:l})]})]})},k=r.div`
    padding: 30px;
    background-color: #fff;
`,G=r.div`
    max-width: 900px;
    margin: 0 auto;
`,L=r.h2`
    text-align: center;
    margin-bottom: 30px;
`,Y=r.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;
`,z=r.div``,B=r.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`,V=()=>{const[s,l]=m.useState(!1),[d,x]=m.useState(""),[p,g]=m.useState(null),w=c=>{x(c.target.value)},y=async c=>{var h;if(c.preventDefault(),d.trim().length<3)return u.warn("Search term is less than 3 characters");try{l(!0),g(null);const t=await I(`https://api.tvmaze.com/search/shows?q=${d}`);if(((h=t==null?void 0:t.data)==null?void 0:h.length)>0){const S=t.data.map(n=>{var j,f,v;return{Title:n.show.name,Year:n.show.premiered?n.show.premiered.substring(0,4):"N/A",imdbID:((j=n.show.externals)==null?void 0:j.imdb)||"N/A",Type:n.show.type,Poster:((f=n.show.image)==null?void 0:f.medium)||"https://via.placeholder.com/210x295?text=No+Poster",Summary:n.show.summary,Genres:n.show.genres,Rating:(v=n.show.rating)==null?void 0:v.average,Status:n.show.status}});g(S)}else u.error("No shows found")}catch(t){u.error((t==null?void 0:t.message)||"An error occurred")}finally{l(!1)}};return e.jsx(k,{children:e.jsxs(G,{children:[e.jsx(L,{children:"Movie Search App"}),e.jsxs(Y,{onSubmit:y,children:[e.jsx(C,{value:d,onChange:w,label:"Search movie here",placeholder:"Search movie here",fullWidth:!0}),e.jsx(T,{type:"submit",disabled:s,variant:"contained",children:s?e.jsx(b,{}):"Submit"})]}),e.jsx(z,{children:e.jsx(B,{children:s?e.jsx(b,{sx:{marginLeft:"50%"}}):p&&p.map((c,h)=>e.jsx(P,{...c},h))})})]})})};export{V as default};
