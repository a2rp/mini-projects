import React from 'react'
import styled from 'styled-components';

const About = () => {
    return (
        <>
            <Styled.Wrapper>
                <h2>About Me</h2>

                <p>
                    <strong>a2rp: mini-projects</strong> is a personal initiative designed to build, document, and showcase practical frontend mini-projects using <strong>ReactJS</strong> and modern JavaScript. This collection serves not only as a hands-on learning ground but also as a portfolio of structured, real-world user interface solutions. Each project is built with simplicity, scalability, and reusability in mind.
                </p>

                <h3>🔍 Purpose</h3>
                <p>
                    The primary aim of this project is to strengthen my understanding of core and advanced React concepts by building them into isolated, easy-to-navigate apps. Instead of focusing on one large application, I chose to break ideas into small, focused modules to learn faster and demonstrate one concept or skill at a time.
                </p>

                <h3>⚙️ Tech Stack</h3>
                <ul>
                    <li><strong>ReactJS (with Hooks)</strong> – Core UI library</li>
                    <li><strong>React Router</strong> – Client-side routing and navigation</li>
                    <li><strong>Styled-Components</strong> – Component-level styling with scoped CSS</li>
                    <li><strong>MUI (Material UI)</strong> – UI components with design consistency</li>
                    <li><strong>Vite</strong> – Lightning-fast build tool and dev server</li>
                </ul>

                <h3>📦 Structure & Features</h3>
                <p>Each project follows a consistent pattern:</p>
                <ul>
                    <li>Component-based architecture</li>
                    <li>Custom styling via Styled Components</li>
                    <li>Reusable UI patterns</li>
                    <li>Clear folder structure for each project</li>
                    <li>Search functionality for quick access</li>
                    <li>Responsive and minimal dark theme layout</li>
                </ul>

                <h3>🎯 Learning Goals</h3>
                <p>
                    This mini-project hub is more than a portfolio — it’s a disciplined journey of frontend problem-solving and creative coding. It allows me to:
                </p>
                <ul>
                    <li>Reinforce ES6+ JavaScript skills in real-world contexts</li>
                    <li>Understand and apply component reusability and prop-driven design</li>
                    <li>Handle forms, state, lifecycle methods, and custom hooks</li>
                    <li>Work with third-party APIs, async data fetching, and client-side storage</li>
                    <li>Prepare for job interviews and freelance frontend development work</li>
                </ul>

                <h3>📚 Types of Projects</h3>
                <p>
                    The mini-projects range from beginner to advanced and include:
                </p>
                <ul>
                    <li>Classic apps like ToDo, Calculator, Weather</li>
                    <li>Games like Rock Paper Scissors, Memory Game, Snake</li>
                    <li>Utility tools like QR Code Generator, Currency Converter</li>
                    <li>Fun tools like Meme Generator, Avatar Builder</li>
                    <li>Form validation, timers, and localStorage usage</li>
                </ul>

                <h3>🤝 Open Source & Collaboration</h3>
                <p>
                    All the code is hosted on GitHub, and contributions, suggestions, or forks are welcome! If you’re a fellow learner, feel free to explore the codebase, learn from it, or extend it in your own way. If you’re a recruiter or mentor, this project reflects my commitment to continuous learning and clean, modular code.
                </p>

                <h3>👨‍💻 Built & Maintained By</h3>
                <p>
                    My name is <strong>Ashish Ranjan</strong>, a passionate frontend developer with a focus on building polished UIs, performant components, and clean, maintainable code. This mini-project collection is an ongoing effort to grow technically while helping others in the community.
                </p>

                <p>
                    Thank you for visiting!
                    <br />
                    I hope you find inspiration, ideas, or reusable components for your own projects. Let’s keep building. 💻✨
                </p>

            </Styled.Wrapper>
        </>
    )
}

export default About

const Styled = {
    Wrapper: styled.div`
        max-width: 600px;
        margin: auto;
    
        h2 {
            margin-bottom: 15px;
        }
        h3 {
            margin-bottom: 5px;
        }
        p {
            margin-bottom: 30px;
        }
        ul {
            margin-bottom: 30px;
            padding-left: 15px;
        }
    `,
};