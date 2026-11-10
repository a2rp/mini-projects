const About = () => (
    <main style={{ maxWidth: 680, margin: "0 auto" }}>
        <h2>About this collection</h2>
        <p>
            React Mini Projects is a searchable collection of small applications and frontend experiments. Each project explores a focused idea, from reusable interface patterns to browser-based tools and interactive demos.
        </p>

        <h3>What you will find</h3>
        <ul>
            <li>Interface patterns such as accordions, tabs, forms, sliders, and autocomplete.</li>
            <li>Utilities including calculators, measurement converters, calendars, and QR tools.</li>
            <li>Games and interactive experiences such as Sudoku, Tic Tac Toe, and canvas animations.</li>
            <li>API-powered examples for weather, TV search, jokes, quotes, and GitHub profiles.</li>
        </ul>

        <h3>Built with</h3>
        <p>
            The collection uses React, Vite, React Router, Styled Components, Material UI, and browser APIs. Projects are kept in separate modules and loaded on demand as you navigate.
        </p>

        <h3>Open source</h3>
        <p>
            Browse the source, open an issue, or suggest an improvement on the <a href="https://github.com/a2rp/mini-projects" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
        </p>
        <p>
            Built and maintained by Ashish Ranjan as an ongoing frontend learning and portfolio project.
        </p>
    </main>
);

export default About;