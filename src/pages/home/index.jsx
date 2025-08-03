import { MdClear } from "react-icons/md";
import { Styled } from './styled';
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const projectsList = [
    { name: "Accordion", link: "/accordion" },
    { name: "Avataar", link: "/avataar" },
    { name: "Calculator", link: "/calculator" },
    { name: "Calendar", link: "/calendar" },
    { name: "Canvas Animation", link: "/canvasAnimation" },
    { name: "Convert Metrics", link: "/convertMetrics" },
    { name: "Dictionary", link: "/dictionary" },
    { name: "Digital Clock", link: "/digitalClock" },
    { name: "Dynamic Tabs", link: "/dynamicTabs" },
    { name: "Github Profile Finder", link: "/githubProfileFinder" },
    { name: "Hello World", link: "/helloWorld" },
    { name: "HTML Colors", link: "/htmlColors" },
    { name: "Image Slider", link: "/imageSlider" },
    { name: "Jokes Generator", link: "/jokesGenerator" },
    // { name: "Keyboard", link: "/keyboard" },
    // { name: "Language Translator", link: "/languageTranslator" },
    { name: "LeetSpeak", link: "/leetSpeak" },
    { name: "Lyrics Finder", link: "/lyricsFinder" },
    { name: "Memes Generator", link: "/memesGenerator" },
    { name: "Modal Component", link: "/modalComponent" },
    { name: "Movie Search", link: "/movieSearch" },
    { name: "Movie Trailer", link: "/movieTrailer" },
    { name: "MUI Form", link: "/muiForm" },
    { name: "Paint App", link: "/paintApp" },
    { name: "Password Generator", link: "/passwordGenerator" },
    // { name: "Periodic Table", link: "/periodicTable" },
    { name: "QR Code Generator", link: "/qrcodeGenerator" },
    { name: "Quiz App", link: "/quizApp" },
    { name: "Random Quotes", link: "/randomQuotes" },
    { name: "Rock Paper Scissor", link: "/rockPaperScissor" },
    { name: "Scroll Progress Indicator", link: "/scrollProgressIndicator" },
    { name: "Scroll To", link: "/scrollTo" },
    { name: "Search Autocomplete", link: "/searchAutoComplete" },
    { name: "Sorting", link: "/sorting" },
    { name: "Star Rating", link: "/starRating" },
    { name: "Sudoku", link: "/sudoku" },
    { name: "Task Scheduler", link: "/taskScheduler" },
    { name: "Tic Tac Toe", link: "/ticTacToe" },
    { name: "Todo List", link: "/todoList" },
    { name: "Toggle Theme", link: "/toggleTheme" },
    // { name: "Typing Keyboard", link: "/typingKeyboard" },
    { name: "Unicode Explorer", link: "/unicodeExplorer" },
    // { name: "Validatos", link: "/validatos" },
    { name: "Weather App", link: "/weatherApp" },
    { name: "Word Meaning", link: "/wordMeaning" },
    // { name: "World Map", link: "/worldMap" },
    { name: "World Time Zones", link: "/worldTimeZones" }
];

const Home = () => {
    const [searchedProject, setSearchedProject] = useState("");

    const handleInputChange = (e) => {
        setSearchedProject(e.target.value);
    };

    const filteredProjects = projectsList.filter((project) =>
        project.name.toLowerCase().includes(searchedProject.toLowerCase())
    );

    return (
        <Styled.Wrapper>
            <Styled.Main>

                <Styled.SearchProjectWrapper>
                    <input
                        type="text"
                        value={searchedProject}
                        onChange={handleInputChange}
                        placeholder="Search your project here"
                    />

                    <div className="searchIconWrapper">
                        <CiSearch size={20} className="icon" />
                    </div>

                    {searchedProject.length > 0 && (
                        <div className="clearIconWrapper" onClick={() => setSearchedProject("")}>
                            <MdClear size={20} className="icon clear" />
                        </div>
                    )}
                </Styled.SearchProjectWrapper>

                <Styled.Heading>
                    List of Projects - {projectsList.length}
                </Styled.Heading>

                <Styled.ProjectList reversed>
                    {filteredProjects.length === 0 ? (
                        <li style={{ color: 'red', listStyle: 'none' }}>No project found</li>
                    ) : (
                        [...filteredProjects].reverse().map((item) => (
                            <li key={item.name}>
                                <NavLink to={item.link}>{item.name}</NavLink>
                            </li>
                        ))
                    )}
                </Styled.ProjectList>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default Home;
