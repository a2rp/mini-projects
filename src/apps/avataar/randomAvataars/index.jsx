// import React, { useEffect, useState } from "react";
// import { createAvatar } from "@dicebear/core";
// import { Button, FormControl, IconButton, InputLabel, MenuItem, Select, Tooltip } from "@mui/material";
// import parse from "html-react-parser";
// import avataarStyle from "./avataarStyles";
// import { FaCopy } from "react-icons/fa";
// import copy from "copy-to-clipboard";
// import { toast } from "react-toastify";
// import { Styled } from "./styled";

// const RandomAvataars = () => {
//     const [svg, setSvg] = useState("");
//     const [selectedAvataarStyle, setSelectedAvataarStyle] = useState(avataarStyle[0].style);
//     const [seed, setSeed] = useState(0);
//     const [copied, setCopied] = useState(false);


//     useEffect(() => {
//         if (typeof selectedAvataarStyle === "function") {
//             nextAvataar();
//         }
//     }, [selectedAvataarStyle]);

//     const nextAvataar = () => {
//         const seedValue = Math.floor(Math.random() * 10000);
//         setSeed(seedValue);

//         const avatar = createAvatar(selectedAvataarStyle, {
//             seed: seedValue,
//         });

//         setSvg(avatar.toString());
//     };

//     const downloadAvataar = () => {
//         const avatar = createAvatar(selectedAvataarStyle, { seed });
//         const svgString = avatar.toString();
//         const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
//         const url = URL.createObjectURL(svgBlob);

//         const img = new Image();
//         img.onload = () => {
//             const canvas = document.createElement("canvas");
//             const size = 512;
//             canvas.width = size;
//             canvas.height = size;
//             const ctx = canvas.getContext("2d");
//             ctx.drawImage(img, 0, 0, size, size);

//             canvas.toBlob((blob) => {
//                 const pngUrl = URL.createObjectURL(blob);
//                 const link = document.createElement("a");
//                 link.href = pngUrl;
//                 link.download = `avatar-${seed}.png`;
//                 document.body.appendChild(link);
//                 link.click();
//                 document.body.removeChild(link);
//                 URL.revokeObjectURL(pngUrl);
//             }, "image/png");

//             URL.revokeObjectURL(url);
//         };

//         img.onerror = () => {
//             toast.error("Failed to load avatar image.");
//             URL.revokeObjectURL(url);
//         };

//         img.src = url;
//     };

//     const handleCopyIconClick = () => {
//         copy(svg);
//         setCopied(true);
//         toast.info("Copied SVG");

//         setTimeout(() => {
//             setCopied(false);
//         }, 3000); // 3 seconds
//     };


//     useEffect(() => {
//         nextAvataar();
//     }, []);


//     return (
//         <Styled.Wrapper>
//             <div className="heading">Avataars</div>

//             <div className="imageContainer">
//                 <div className="controls">
//                     {copied
//                         ? <span style={{ color: "lightgreen", marginLeft: 10 }}>Copied!</span>
//                         :
//                         <Tooltip title="Copy SVG">
//                             <IconButton onClick={handleCopyIconClick}>
//                                 <FaCopy color={"#fff"} />
//                             </IconButton>
//                         </Tooltip>
//                     }
//                 </div>
//                 {svg && parse(svg)}
//             </div>

//             <FormControl fullWidth className="stylesContainer">
//                 <InputLabel id="avataar-style-select-label">Avataar Styles</InputLabel>
//                 <Select
//                     labelId="avataar-style-select-label"
//                     id="avataar-style-select"
//                     value={selectedAvataarStyle}
//                     label="Avataar style"
//                     onChange={(e) => setSelectedAvataarStyle(e.target.value)}
//                 >
//                     {avataarStyle.map((item) => (
//                         <MenuItem key={item.id} value={item.style}>
//                             {item.name}
//                         </MenuItem>
//                     ))}
//                 </Select>
//             </FormControl>

//             <div className="buttonsContainer">
//                 <Button variant="contained" onClick={nextAvataar} fullWidth>
//                     Next
//                 </Button>
//                 <Button variant="contained" onClick={downloadAvataar} fullWidth>
//                     Download
//                 </Button>
//             </div>
//         </Styled.Wrapper>
//     );
// };

// export default RandomAvataars;

import React, { useEffect, useState } from "react";
import { createAvatar } from "@dicebear/core";
import { Button, FormControl, IconButton, InputLabel, MenuItem, Select, Tooltip } from "@mui/material";
import parse from "html-react-parser";
import avataarStyles, { styleMap } from "./avataarStyles";
import { FaCopy } from "react-icons/fa";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";
import { Styled } from "./styled";

const RandomAvataars = () => {
    const [svg, setSvg] = useState("");
    const [selectedStyleKey, setSelectedStyleKey] = useState(avataarStyles[0].styleKey);
    const [seed, setSeed] = useState(0);
    const [copied, setCopied] = useState(false);

    const currentStyle = styleMap[selectedStyleKey];

    useEffect(() => {
        if (currentStyle) {
            nextAvataar();
        }
    }, [selectedStyleKey]);

    const nextAvataar = () => {
        const seedValue = Math.floor(Math.random() * 10000);
        setSeed(seedValue);

        const avatar = createAvatar(currentStyle, { seed: seedValue });
        setSvg(avatar.toString());
    };

    const downloadAvataar = () => {
        const avatar = createAvatar(currentStyle, { seed });
        const svgString = avatar.toString();
        const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
        const url = URL.createObjectURL(svgBlob);

        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement("canvas");
            const size = 512;
            canvas.width = size;
            canvas.height = size;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, size, size);

            canvas.toBlob((blob) => {
                const pngUrl = URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = pngUrl;
                link.download = `avatar-${seed}.png`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(pngUrl);
            }, "image/png");

            URL.revokeObjectURL(url);
        };

        img.onerror = () => {
            toast.error("Failed to load avatar image.");
            URL.revokeObjectURL(url);
        };

        img.src = url;
    };

    const handleCopyIconClick = () => {
        copy(svg);
        setCopied(true);
        toast.info("Copied SVG");
        setTimeout(() => setCopied(false), 3000);
    };

    useEffect(() => {
        nextAvataar();
    }, []);

    return (
        <Styled.Wrapper>
            <div className="heading">Avataars</div>

            <div className="imageContainer">
                <div className="controls">
                    {copied ? (
                        <span style={{ color: "lightgreen", marginLeft: 10 }}>Copied!</span>
                    ) : (
                        <Tooltip title="Copy SVG">
                            <IconButton onClick={handleCopyIconClick}>
                                <FaCopy color={"#fff"} />
                            </IconButton>
                        </Tooltip>
                    )}
                </div>
                {svg && parse(svg)}
            </div>

            <FormControl fullWidth className="stylesContainer">
                <InputLabel id="avataar-style-select-label">Avataar Styles</InputLabel>
                <Select
                    labelId="avataar-style-select-label"
                    id="avataar-style-select"
                    value={selectedStyleKey}
                    label="Avataar style"
                    onChange={(e) => setSelectedStyleKey(e.target.value)}
                >
                    {avataarStyles.map((item) => (
                        <MenuItem key={item.id} value={item.styleKey}>
                            {item.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <div className="buttonsContainer">
                <Button variant="contained" onClick={nextAvataar} fullWidth>
                    Next
                </Button>
                <Button variant="contained" onClick={downloadAvataar} fullWidth>
                    Download
                </Button>
            </div>
        </Styled.Wrapper>
    );
};

export default RandomAvataars;
