import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import { CircularProgress, Box, Tooltip, IconButton } from '@mui/material';
import { IoMenu } from 'react-icons/io5';
import ScrollToTop from './components/ScrollToTop';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import { Styled } from './App.styled';
import ScrollToTopButton from './components/ScrollToTopButton';

const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about'));
const Contact = lazy(() => import('./pages/contact'));
const NotFound = lazy(() => import('./pages/notFound'));

const pageLinks = [
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

export default function App() {
    const [displayMenu, setDisplayMenu] = useState(false);
    const iconRef = useRef(null);
    const menuRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (displayMenu && menuRef.current && !menuRef.current.contains(e.target) && !iconRef.current.contains(e.target)) {
                setDisplayMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [displayMenu]);

    return (
        <>
            <Styled.BgWrapper />
            <ScrollToTop />
            <Styled.Wrapper>
                <Styled.Header>
                    <Styled.SiteName to="/">a2rp: mini-projects</Styled.SiteName>
                    <Styled.NavlinksMenuWrapper>
                        <Styled.NavLinksWrapper>
                            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
                            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
                            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
                        </Styled.NavLinksWrapper>
                        <Styled.MenuWrapper ref={iconRef} onClick={() => setDisplayMenu(prev => !prev)}>
                            <IoMenu size={20} />
                        </Styled.MenuWrapper>
                    </Styled.NavlinksMenuWrapper>
                </Styled.Header>

                <Styled.LastUpdateGoBackWrapper>
                    <div className="lastUpdated">Last Updated: {__BUILD_TIME__}</div>
                    <div className="goBack">
                        <Tooltip title="Go Back">
                            <IconButton onClick={() => navigate(-1)}>
                                <SettingsBackupRestoreIcon sx={{ color: "#fff" }} />
                            </IconButton>
                        </Tooltip>
                    </div>
                </Styled.LastUpdateGoBackWrapper>

                <Styled.RoutesWrapper>
                    <Suspense fallback={
                        <Box sx={{ height: "100vh", display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                            <CircularProgress color="secondary" />
                        </Box>
                    }>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />

                            {pageLinks.map(({ link }) => {
                                const Component = lazy(() => import(`./apps${link}`));
                                return <Route key={link} path={link} element={<Component />} />;
                            })}

                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Suspense>
                </Styled.RoutesWrapper>

                <Styled.Footer>
                    <div className="col">&copy; {new Date().getFullYear()} | All rights reserved.</div>
                    <div className="col">Designed and developed by '<a href="#">Ashish Ranjan</a>'</div>
                </Styled.Footer>
            </Styled.Wrapper>

            {displayMenu && (
                <Styled.DisplayMenuWrapper ref={menuRef}>
                    <div className="menuInner">
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            {[...pageLinks].reverse().map((item, index) => (
                                <li key={index}>
                                    <NavLink to={item.link}>{item.name}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Styled.DisplayMenuWrapper>
            )}

            <ScrollToTopButton />
        </>
    );
}
