import React, { useEffect, useState } from "react";
import { createAvatar } from "@dicebear/core";
import { Button, FormControl, IconButton, InputLabel, MenuItem, Select, Tooltip } from "@mui/material";
import parse from "html-react-parser";
import avataarStyle from "./avataarStyles";
import { FaCopy } from "react-icons/fa";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";
import { Styled } from "./styled";

const RandomAvataars = () => {
    // console.log(avataarStyle, "avataarStyle");
    const [svg, setSvg] = useState("");
    const [selectedAvataarStyle, setSelectedAvataarStyle] = useState(avataarStyle[0].style);
    const [seed, setSeed] = useState(0);

    useEffect(() => {
        // console.log(selectedAvataarStyle, "selectedAvataarStyle");
        if (selectedAvataarStyle.toString().length !== 0) {
            nextAvataar();
        }
    }, [selectedAvataarStyle]);

    const nextAvataar = async () => {
        const seedValue = Math.floor(Math.random() * 10000);
        setSeed(seed => seedValue);
        const avatar = createAvatar(selectedAvataarStyle, {
            seed: seedValue,
        });

        const value = avatar.toString();
        // console.log(value, "value");
        setSvg(value);
    };

    // const downloadAvataar = async () => {
    //     const avatar = createAvatar(selectedAvataarStyle, { seed });
    //     const pngValue = await avatar.png();
    //     pngValue.toFile("avatar.png");
    // };

    const downloadAvataar = () => {
        const avatar = createAvatar(selectedAvataarStyle, { seed });
        const svgString = avatar.toString();

        // Step 1: Create image from SVG
        const img = new Image();
        const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
        const url = URL.createObjectURL(svgBlob);

        img.onload = () => {
            // Step 2: Draw image on canvas
            const canvas = document.createElement("canvas");
            const size = 512; // or 256, 1024 — choose your resolution
            canvas.width = size;
            canvas.height = size;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, size, size);

            // Step 3: Convert to PNG blob and download
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
        toast.info("Copied SVG");
    };

    return (
        <Styled.Wrapper>
            <div className={"heading"}>Avataars</div>
            <div className={"imageContainer"}>
                <Tooltip className={"copyIcon"} title="Copy SVG">
                    <IconButton onClick={handleCopyIconClick}>
                        <FaCopy />
                    </IconButton>
                </Tooltip>
                {parse(svg)}
            </div>

            <FormControl fullWidth className={"stylesContainer"}>
                <InputLabel id="avataar-style-select-label">Avataar Styles</InputLabel>
                <Select
                    defaultValue=""
                    labelId="avataar-style-select-label"
                    id="avataar-style-select"
                    value={selectedAvataarStyle}
                    label="Avataar style"
                    onChange={event => {
                        setSelectedAvataarStyle(selectedAvataarStyle => event.target.value);
                    }}
                >
                    {avataarStyle.map((item, index) => (
                        <MenuItem
                            key={item.id}
                            value={item.style}
                        >{item.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <div className={"buttonsContainer"}>
                <Button
                    variant="contained"
                    onClick={nextAvataar}
                    fullWidth
                >Next</Button>
                <Button
                    variant="contained"
                    onClick={downloadAvataar}
                    fullWidth
                >Download</Button>
            </div>
        </Styled.Wrapper>
    )
}

export default RandomAvataars

