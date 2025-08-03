import{d as a,r as F,j as e}from"./index-DIGs8dZ3.js";import{k as x,F as h}from"./index-DL7BRHVq.js";const n={Wrapper:a.div`
        padding: 15px;
        background-color: #fff;
        color: #000;
    `,Controls:a.div`
        display: flex;
        gap: 15px;
        margin-bottom: 20px;
    `,RangeSelect:a.select`
        padding: 10px;
        width: 100%;
        height: 100%;
    `,NextRowButton:a.div`
        padding: 10px;
        text-align: center;
        cursor: pointer;
        margin-bottom: 20px;
        border: 1px solid #000;
        width: 150px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        display: block;

        &:hover {
            background: #aaa;
        }
    `,CharListWrapper:a.div`
        border: 1px solid #000;
        height: 50vh;
        overflow: auto;
    `,Char:a.div``,Title:a.h3`
        padding: 15px;
    `,CharGrid:a.div`
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
    `,CharBox:a.div`
        /* border: 1px solid #000; */
        background-color: #eee;
        width: 80px;
        height: 80px;
        text-align: center;
        font-size: 20px;
        cursor: pointer;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: box-shadow 0.2s ease;

        &:hover {
            box-shadow: 0 0 15px 5px #000;
        }
    `,CharIndex:a.div`
        font-size: 13px;
        position: absolute;
        right: 0;
        top: 0;
        background-color: #fff;
        color: #000;
        padding: 1px 4px;
    `,DetailBox:a.div`
        border-bottom: 2px solid #0ff;
        margin-top: 20px;
        padding-bottom: 10px;
    `,Deduction:a.div`
        /* border: 1px solid #f00; */
        margin-top: 4px;
        display: flex;
        justify-content: space-between;
    `,ModalOverlay:a.div`
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;
    `,ModalContent:a.div`
        background: white;
        color: black;
        padding: 20px;
        width: 300px;
        max-width: 90vw;
        border-radius: 8px;
        position: relative;
    `,CloseButton:a.button`
        position: absolute;
        top: 5px;
        right: 10px;
        background: transparent;
        border: none;
        font-size: 20px;
        cursor: pointer;
    `,CopyButton:a.div`
        margin-left: 8px;
        border: none;
        padding: 2px 6px;
        font-size: 12px;
        cursor: pointer;
        border-radius: 4px;
        transition: transform 0.2s ease;

        &:hover {
            transform: scale(1.5);
        }
    `},M=["0000-007F -- Basic Latin","0080-00FF -- Latin-1 Supplement","0100-017F -- Latin Extended-A","0180-024F -- Latin Extended-B","0250-02AF -- IPA Extensions","02B0-02FF -- Spacing Modifier Letters","0300-036F -- Combining Diacritical Marks","0370-03FF -- Greek and Coptic","0400-04FF -- Cyrillic","0500-052F -- Cyrillic Supplement","0530-058F -- Armenian","0590-05FF -- Hebrew","0600-06FF -- Arabic","0700-074F -- Syriac","0750-077F -- Arabic Supplement","0780-07BF -- Thaana","07C0-07FF -- NKo","0800-083F -- Samaritan","0840-085F -- Mandaic","0860-086F -- Syriac Supplement","08A0-08FF -- Arabic Extended-A","0900-097F -- Devanagari","0980-09FF -- Bengali","0A00-0A7F -- Gurmukhi","0A80-0AFF -- Gujarati","0B00-0B7F -- Oriya","0B80-0BFF -- Tamil","0C00-0C7F -- Telugu","0C80-0CFF -- Kannada","0D00-0D7F -- Malayalam","0D80-0DFF -- Sinhala","0E00-0E7F -- Thai","0E80-0EFF -- Lao","0F00-0FFF -- Tibetan","1000-109F -- Myanmar","10A0-10FF -- Georgian","1100-11FF -- Hangul Jamo","1200-137F -- Ethiopic","1380-139F -- Ethiopic Supplement","13A0-13FF -- Cherokee","1400-167F -- Unified Canadian Aboriginal Syllabics","1680-169F -- Ogham","16A0-16FF -- Runic","1700-171F -- Tagalog","1720-173F -- Hanunoo","1740-175F -- Buhid","1760-177F -- Tagbanwa","1780-17FF -- Khmer","1800-18AF -- Mongolian","18B0-18FF -- Unified Canadian Aboriginal Syllabics Extended","1900-194F -- Limbu","1950-197F -- Tai Le","1980-19DF -- New Tai Lue","19E0-19FF -- Khmer Symbols","1A00-1A1F -- Buginese","1A20-1AAF -- Tai Tham","1AB0-1AFF -- Combining Diacritical Marks Extended","1B00-1B7F -- Balinese","1B80-1BBF -- Sundanese","1BC0-1BFF -- Batak","1C00-1C4F -- Lepcha","1C50-1C7F -- Ol Chiki","1C80-1C8F -- Cyrillic Extended C","1C90-1CBF -- Georgian Extended","1CC0-1CCF -- Sundanese Supplement","1CD0-1CFF -- Vedic Extensions","1D00-1D7F -- Phonetic Extensions","1D80-1DBF -- Phonetic Extensions Supplement","1DC0-1DFF -- Combining Diacritical Marks Supplement","1E00-1EFF -- Latin Extended Additional","1F00-1FFF -- Greek Extended","2000-206F -- General Punctuation","2070-209F -- Superscripts and Subscripts","20A0-20CF -- Currency Symbols","20D0-20FF -- Combining Diacritical Marks for Symbols","2100-214F -- Letterlike Symbols","2150-218F -- Number Forms","2190-21FF -- Arrows","2200-22FF -- Mathematical Operators","2300-23FF -- Miscellaneous Technical","2400-243F -- Control Pictures","2440-245F -- Optical Character Recognition","2460-24FF -- Enclosed Alphanumerics","2500-257F -- Box Drawing","2580-259F -- Block Elements","25A0-25FF -- Geometric Shapes","2600-26FF -- Miscellaneous Symbols","2700-27BF -- Dingbats","27C0-27EF -- Miscellaneous Mathematical Symbols-A","27F0-27FF -- Supplemental Arrows-A","2800-28FF -- Braille Patterns","2900-297F -- Supplemental Arrows-B","2980-29FF -- Miscellaneous Mathematical Symbols-B","2A00-2AFF -- Supplemental Mathematical Operators","2B00-2BFF -- Miscellaneous Symbols and Arrows","2C00-2C5F -- Glagolitic","2C60-2C7F -- Latin Extended-C","2C80-2CFF -- Coptic","2D00-2D2F -- Georgian Supplement","2D30-2D7F -- Tifinagh","2D80-2DDF -- Ethiopic Extended","2DE0-2DFF -- Cyrillic Extended-A","2E00-2E7F -- Supplemental Punctuation","2E80-2EFF -- CJK Radicals Supplement","2F00-2FDF -- Kangxi Radicals","2FF0-2FFF -- Ideographic Description Characters","3000-303F -- CJK Symbols and Punctuation","3040-309F -- Hiragana","30A0-30FF -- Katakana","3100-312F -- Bopomofo","3130-318F -- Hangul Compatibility Jamo","3190-319F -- Kanbun","31A0-31BF -- Bopomofo Extended","31C0-31EF -- CJK Strokes","31F0-31FF -- Katakana Phonetic Extensions","3200-32FF -- Enclosed CJK Letters and Months","3300-33FF -- CJK Compatibility","3400-4DBF -- CJK Unified Ideographs Extension A","4DC0-4DFF -- Yijing Hexagram Symbols","4E00-9FFF -- CJK Unified Ideographs","A000-A48F -- Yi Syllables","A490-A4CF -- Yi Radicals","A4D0-A4FF -- Lisu","A500-A63F -- Vai","A640-A69F -- Cyrillic Extended-B","A6A0-A6FF -- Bamum","A700-A71F -- Modifier Tone Letters","A720-A7FF -- Latin Extended-D","A800-A82F -- Syloti Nagri","A830-A83F -- Common Indic Number Forms","A840-A87F -- Phags-pa","A880-A8DF -- Saurashtra","A8E0-A8FF -- Devanagari Extended","A900-A92F -- Kayah Li","A930-A95F -- Rejang","A960-A97F -- Hangul Jamo Extended-A","A980-A9DF -- Javanese","A9E0-A9FF -- Myanmar Extended-B","AA00-AA5F -- Cham","AA60-AA7F -- Myanmar Extended-A","AA80-AADF -- Tai Viet","AAE0-AAFF -- Meetei Mayek Extensions","AB00-AB2F -- Ethiopic Extended-A","AB30-AB6F -- Latin Extended-E","AB70-ABBF -- Cherokee Supplement","ABC0-ABFF -- Meetei Mayek","AC00-D7AF -- Hangul Syllables","D7B0-D7FF -- Hangul Jamo Extended-B","D800-DB7F -- High Surrogates","DB80-DBFF -- High Private Use Surrogates","DC00-DFFF -- Low Surrogates","E000-F8FF -- Private Use Area","F900-FAFF -- CJK Compatibility Ideographs","FB00-FB4F -- Alphabetic Presentation Forms","FB50-FDFF -- Arabic Presentation Forms-A","FE00-FE0F -- Variation Selectors","FE10-FE1F -- Vertical Forms","FE20-FE2F -- Combining Half Marks","FE30-FE4F -- CJK Compatibility Forms","FE50-FE6F -- Small Form Variants","FE70-FEFF -- Arabic Presentation Forms-B","FF00-FFEF -- Halfwidth and Fullwidth Forms","FFF0-FFFF -- Specials"],H=()=>{const[u,B]=F.useState([]),[g,m]=F.useState(0),[S,f]=F.useState(0),[D,E]=F.useState([]),[r,C]=F.useState(null),[d,p]=F.useState(null),s=F.useRef(null);F.useEffect(()=>{const t=M.map(i=>{const[o,A]=i.split(" -- "),[l,v]=o.split("-").map(w=>parseInt(w,16));return{range:o,name:A,from:l,to:v}});B(t),m(t[0].from)},[]);const y=()=>{const t=u[S];if(!t)return;const i=Math.min(g+16,t.to+1),o=[];for(let l=g;l<i;l++)o.push(l);const A=s.current&&s.current.scrollHeight-s.current.scrollTop-s.current.clientHeight<100;E(l=>[...l,{title:t.name,items:o}]),m(i),setTimeout(()=>{A&&s.current&&s.current.scrollTo({top:s.current.scrollHeight,behavior:"smooth"})},0)},j=t=>{const i=t.target.value,o=u[i].from;f(i),m(o),E([]),C(null)},k=t=>{const i=t.toString(16).toUpperCase(),o=t.toString(8);C({char:`&#${t};`,html:String.fromCharCode(t),unicode:`U+${t.toString(16).toUpperCase().padStart(4,"0")}`,oct:`\\${o.padStart(3,"0")}`,hex:`0x${i}`}),p(null)},c=(t,i)=>{navigator.clipboard.writeText(t),p(i),setTimeout(()=>p(null),1500)},b=()=>{C(null),p(null)};return e.jsxs(n.Wrapper,{children:[e.jsx("h3",{children:"Unicode Explorer"}),e.jsxs(n.Controls,{children:[e.jsx(n.RangeSelect,{onChange:j,children:u.map((t,i)=>e.jsxs("option",{value:i,children:["[",t.range,"] - ",t.name," (Total ",t.to-t.from+1,")"]},t.range))}),e.jsx(n.NextRowButton,{onClick:y,children:"Load Next Row Content"})]}),e.jsx(n.CharListWrapper,{ref:s,children:D.map((t,i)=>e.jsxs(n.Char,{children:[e.jsx(n.Title,{children:t.title}),e.jsx(n.CharGrid,{children:t.items.map(o=>e.jsxs(n.CharBox,{onClick:()=>k(o),children:[String.fromCharCode(o),e.jsx(n.CharIndex,{children:o})]},o))}),e.jsx("hr",{})]},i))}),r&&e.jsx(n.ModalOverlay,{onClick:b,children:e.jsxs(n.ModalContent,{onClick:t=>t.stopPropagation(),children:[e.jsx(n.CloseButton,{onClick:b,children:"×"}),e.jsx("div",{style:{fontSize:"40px",marginBottom:"20px",textAlign:"center",cursor:"pointer"},title:"Click to copy character",onClick:()=>c(r.html,"char"),children:r.html}),e.jsxs(n.Deduction,{children:[e.jsxs("span",{children:["HTML Entity: ",e.jsx("code",{children:r.char})]}),e.jsx(n.CopyButton,{onClick:()=>c(r.char,"char"),children:d==="char"?e.jsx(x,{}):e.jsx(h,{})})]}),e.jsxs(n.Deduction,{children:[e.jsxs("span",{children:["Unicode Codepoint:"," ",e.jsx("code",{children:r.unicode})]}),e.jsx(n.CopyButton,{onClick:()=>c(r.unicode,"unicode"),children:d==="unicode"?e.jsx(x,{}):e.jsx(h,{})})]}),e.jsxs(n.Deduction,{children:[e.jsxs("span",{children:["Octal: ",e.jsx("code",{children:r.oct})]}),e.jsx(n.CopyButton,{onClick:()=>c(r.oct,"oct"),children:d==="oct"?e.jsx(x,{}):e.jsx(h,{})})]}),e.jsxs(n.Deduction,{children:[e.jsxs("span",{children:["Hexadecimal: ",e.jsx("code",{children:r.hex})]}),e.jsx(n.CopyButton,{onClick:()=>c(r.hex,"hex"),children:d==="hex"?e.jsx(x,{}):e.jsx(h,{})})]})]})})]})};export{H as default};
