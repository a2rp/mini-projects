import React, { useState } from 'react'
import { AnimationNameWrapper, Wrapper } from './styled'
import BouncingBalls from "./BouncingBalls";
import FibonacciFlower from "./FibonacciFlower";
import FractalCanvas from "./FractalCanvas";
import MatrixRain from "./MatrixRain";
import ParticlesCanvas from "./ParticlesCanvas";
import ParticleText from "./ParticleText";
import PixelRain from "./PixelRain";

const CanvasAnimation = () => {
    const [selectedAnimation, setSelectedAnimation] = useState("Bouncing Balls");

    return (
        <Wrapper>
            <h1 className='heading'>Canvas Animation</h1>
            <AnimationNameWrapper>
                <div
                    className={`name ${selectedAnimation === "Bouncing Balls" ? "active" : ""}`}
                    onClick={() => setSelectedAnimation("Bouncing Balls")}
                >Bouncing Balls</div>
                <div
                    className={`name ${selectedAnimation === "Fibonacci Flower" ? "active" : ""}`}
                    onClick={() => setSelectedAnimation("Fibonacci Flower")}
                >Fibonacci Flower</div>
                <div
                    className={`name ${selectedAnimation === "Fractal Canvas" ? "active" : ""}`}
                    onClick={() => setSelectedAnimation("Fractal Canvas")}
                >Fractal Canvas</div>
                <div
                    className={`name ${selectedAnimation === "Matrix Rain" ? "active" : ""}`}
                    onClick={() => setSelectedAnimation("Matrix Rain")}
                >Matrix Rain</div>
                <div
                    className={`name ${selectedAnimation === "Particles Canvas" ? "active" : ""}`}
                    onClick={() => setSelectedAnimation("Particles Canvas")}
                >Particles Canvas</div>
                <div
                    className={`name ${selectedAnimation === "Particle Text" ? "active" : ""}`}
                    onClick={() => setSelectedAnimation("Particle Text")}
                >Particle Text</div>
                <div
                    className={`name ${selectedAnimation === "Pixel Rain" ? "active" : ""}`} onClick={() => setSelectedAnimation("Pixel Rain")}>Pixel Rain</div>
            </AnimationNameWrapper>

            {selectedAnimation === "Bouncing Balls" && <div key="BouncingBalls">
                <div className='animation'>
                    <BouncingBalls />
                </div>
            </div>}

            {selectedAnimation === "Fibonacci Flower" && <div key="FibonacciFlower">
                <div className='animation'>
                    <FibonacciFlower />
                </div>
            </div>}

            {selectedAnimation === "Fractal Canvas" && <div key="FractalCanvas">
                <div className='animation'>
                    <FractalCanvas />
                </div>
            </div>}

            {selectedAnimation === "Matrix Rain" && <div key="MatrixMain">
                <div className='animation'>
                    <MatrixRain />
                </div>
            </div>}

            {selectedAnimation === "Particles Canvas" && <div key="PracticlesCanvas">
                <div className='animation'>
                    <ParticlesCanvas />
                </div>
            </div>}

            {selectedAnimation === "Particle Text" && <div key="ParticleText">
                <div className='animation'>
                    <ParticleText />
                </div>
            </div>}

            {selectedAnimation === "Pixel Rain" && <div key="PixelRain">
                <div className='animation'>
                    <PixelRain />
                </div>
            </div>}
        </Wrapper>
    )
}

export default CanvasAnimation

