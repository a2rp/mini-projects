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

        const characters =
            "!#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`{|}~" +
            "Â¡Â¢Â£Â¤Â¥Â¦Â§Â¨Â©ÂªÂ«Â¬Â®Â¯Â°Â±Â²Â³Â´ÂµÂ¶Â·Â¸Â¹ÂºÂ»Â¼Â½Â¾Â¿Ã˜ÃžÃŸ" +
            "à¤€à¤ƒà¤„à¤…à¤†à¤‡à¤ˆà¤‰à¤Šà¤‹à¤Œà¤à¤Žà¤à¤à¤‘à¤’à¤“à¤”à¤•à¤-à¤-à¤˜à¤™à¤šà¤›à¤œà¤à¤žà¤Ÿà¤ à¤¡à¤¢à¤£à¤¤à¤¥à¤¦à¤§à¤¨à¤©à¤ªà¤«à¤¬à¤­à¤®à¤¯à¤°à¤±à¤²à¤³à¤´à¤µà¤¶à¤·à¤¸à¤¹à¤ºà¤»à¤¼à¤½à¤¾à¤¿à¥€à¥à¥‚à¥ƒà¥„à¥…à¥†à¥‡à¥ˆà¥‰à¥Šà¥‹à¥Œà¥à¥Žà¥à¥à¥‘à¥“à¥”à¥•à¥-à¥-à¥˜à¥™à¥šà¥›à¥œà¥à¥žà¥Ÿà¥ à¥¡à¥¢à¥£à¥¤à¥¥â€¢à¥¦à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥°à¥±à¥²à¥³à¥´à¥µà¥¶à¥·à¥¸à¥¹à¥ºà¥»à¥¼à¥½à¥¾à¥¿" +
            "à²€à²à²‚à²ƒà²„à²…à²†à²‡à²ˆà²‰à²Šà²‹à²Œà²Žà²à²à²’à²“à²”à²•à²-à²-à²˜à²™à²šà²›à²œà²à²žà²Ÿà² à²¡à²¢à²£à²¤à²¥à²¦à²§à²¨à²ªà²«à²¬à²­à²®à²¯à²°à²±à²²à²³à²µà²¶à²·à²¸à²¹à²¼à²½à²¾à²¿à³€à³à³‚à³ƒà³„à³†à³‡à³ˆà³Šà³‹à³Œà³à³•à³-à³žà³ à³¡à³¢à³£à³¦à³§à³¨à³©à³ªà³«à³¬à³­à³®à³¯à³±à³²";

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
