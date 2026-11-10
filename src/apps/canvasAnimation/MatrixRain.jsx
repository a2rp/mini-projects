import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Canvas = styled.canvas`
    width: 100%;
    height: 100%;
    display: block;
    background-color: #000;
`;

const MatrixRain = () => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const characterRanges = [
            [0x21, 0x7e],
            [0xa1, 0xff],
            [0x100, 0x24f],
            [0x900, 0x97f],
            [0xb80, 0xbff],
            [0xc00, 0xc7f],
            [0xc80, 0xcff],
        ];
        const characters = characterRanges.flatMap(([start, end]) => {
            const range = [];
            for (let codePoint = start; codePoint <= end; codePoint += 1) {
                range.push(String.fromCodePoint(codePoint));
            }
            return range;
        }).join("");

        let canvasWidth = window.innerWidth;
        let canvasHeight = window.innerHeight;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        class Symbol {
            constructor(x, y, fontSize, canvasHeight) {
                this.x = x;
                this.y = y;
                this.fontSize = fontSize;
                this.canvasHeight = canvasHeight;
                this.text = "";
            }

            draw(context) {
                this.text = characters[Math.floor(Math.random() * characters.length)];
                context.fillText(
                    this.text,
                    this.x * this.fontSize,
                    this.y * this.fontSize
                );

                if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98) {
                    this.y = 0;
                } else {
                    this.y += 1;
                }
            }
        }

        class Effect {
            constructor(width, height) {
                this.canvasWidth = width;
                this.canvasHeight = height;
                this.fontSize = 12;
                this.columns = Math.floor(this.canvasWidth / this.fontSize);
                this.symbols = [];
                this.initialize();
            }

            initialize() {
                this.symbols = [];
                for (let i = 0; i < this.columns; i++) {
                    this.symbols.push(
                        new Symbol(i, 0, this.fontSize, this.canvasHeight)
                    );
                }
            }

            resize(width, height) {
                this.canvasWidth = width;
                this.canvasHeight = height;
                this.columns = Math.floor(this.canvasWidth / this.fontSize);
                this.initialize();
            }
        }

        const effect = new Effect(canvas.width, canvas.height);
        let lastTime = 0;
        const fps = 30;
        const nextFrame = 1000 / fps;
        let timer = 0;

        const animate = (timeStamp) => {
            const deltaTime = timeStamp - lastTime;
            lastTime = timeStamp;

            if (timer > nextFrame) {
                ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = "#0aff0a";
                ctx.textAlign = "center";
                ctx.font = effect.fontSize + "px monospace";
                effect.symbols.forEach((symbol) => symbol.draw(ctx));
                timer = 0;
            } else {
                timer += deltaTime;
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animate(0);

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            effect.resize(canvas.width, canvas.height);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationRef.current);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        };
    }, []);

    return <Canvas ref={canvasRef} />;
};

export default MatrixRain;
